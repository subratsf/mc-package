#!/usr/bin/env ruby

require 'json'
require 'set'
#
# Replaces Path#Operation#Tags[0] with the value of Tags#name
#
# Example:
#
#   ./tag-replace.rb sfmc-swagger.json
#
def oas_tag_name(tags, path_tag, errors)
  tag_map = tags.find {|data| data["x-sfdc-group-id"] == path_tag}

  if tag_map
    tag_map["name"]
  else
    errors.add(path_tag)     
    nil
  end
end

if ARGV.empty?
  puts ""
  puts "\u{26A0 FE0F}\s\sPlease supply a file name"
  puts ""
  puts "Example:"
  puts "\t./tag-replace.rb sfmc-swagger.json\n\n"
  exit
end

json = JSON.parse(IO.read(ARGV[0]))
tags = json['tags']
errors = Set.new

json["paths"].each do |path, path_item|
  path_item.each do |http_method, fields|
    tag_name = oas_tag_name(tags, fields['tags'][0], errors)

    if tag_name
      fields['tags'][0] = tag_name
    else
      next
    end
  end 
end

puts "Path#tags not found in Tags #{errors.to_a}" unless errors.empty?

IO.write(ARGV[0], JSON.pretty_generate(json, indent: "\t"))
