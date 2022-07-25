'use strict';
var path = require('path'),
	url = require('url'),
	_ = require('lodash'),
	cheerio = require('cheerio'),
	fs = require('fs'),
	moment = require('moment');


//var codeAtPath = 'https://code.exacttarget.com/apis-sdks/rest-api/v1/';

var arSwaggerButton = [
	'<a role="button" data-toggle="collapse" href="#{id}">'
		,'  <img width="17px" src="images/swagger-logo.png">'
	,'</a>'
];
var swaggerButton = arSwaggerButton.join('');

Object.size = function (obj) {
	var size = 0,
		key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

function compareNumbers(a, b) {
  return a-b;
};

function newProp(param) {
	var prop = [
		'<tr class="function-title">'
		,'	<td class=""><strong>'+param.name+'</strong></td>'
		,'	<td class="">'+(param.type ? param.type : 'string')+'</td>'
		,'	<td class="">'+(param.required ? '<span class="label label-danger">Required</span>' : '')+'</td>'
		,'	<td class="">'+param.description+'</td>'
		,'</tr>'
	];
	return prop.join('');
};

function getSchema(data, ref) {
	//this function finds the request or response object, in 'definitions', referred to by the schema property.
	ref = ref.replace('#/','');
	var keys = ref.split('/');
    for (var i = 0, l = keys.length; i < l; i++) {
        data = data[keys[i]];
        if (data == null)
            return data;
    }
    return data;
};

function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

function getParameters(method, data) {
	//'  <img width="17px" src="/assets/images/swagger-logo.png">'

	var	paramHeader = [
		'<table class="table">'
		  ,'<caption class="text-left">'
			,'<h3><strong>? Parameters</strong></h3>'
		   ,'</caption>'
		   ,'<thead>'
			,'<tr>'
			  ,'<th class="text-left" >Name</th>'
			  ,'<th class="text-left" >Type</th>'
			  ,'<th class="text-left" ></th>'
			  ,'<th class="text-left" >Description</th>'
			,'</tr>'
		  ,'</thead>'
		  ,'<tbody>'
		];

	var params = method.parameters || [];
	var bodyParams = paramHeader.slice(0);
	var urlParams = paramHeader.slice(0);
	var isUrl = false;
	var isBody = false;

	bodyParams[2] = bodyParams[2].replace('?','JSON');
	urlParams[2] = urlParams[2].replace('?','URL');

	if (params && params.length) {
		for (var i=0,l=params.length;i<l;i++) {
			var param = params[i];
			if (param['in'] === 'body') {
				isBody = true;

				var schema = getSchema(data, param.schema.$ref);
					console.log(param.schema.$ref + "---->"+ schema);
				for (var key in schema.properties) {

					var propId = method.summary+'_body_'+key;
					var snippetCopy = JSON.parse(JSON.stringify(schema.properties[key]));
					delete snippetCopy.type;
					delete snippetCopy.description;
					var isSnippetEmpty = isEmptyObject(snippetCopy);

					if (!schema.required) {
						console.log('the required attribute is missing in the response or request object in definitions.');
					}
					var jsonParam = {
						name: key
						,required: (schema.required.indexOf(key) > -1)
						,description: schema.properties[key].description + (isSnippetEmpty ? '' : swaggerButton.replace('{id}',propId))
						,type: schema.properties[key].type
					};
					bodyParams.push(newProp(jsonParam));

					//collapsible swagger snippet:
					if (!isSnippetEmpty) {
						var swaggerSnippet = JSON.stringify(snippetCopy, null, 4).replace(/\n/g,'<br>').replace(/ /g,'&nbsp');
						bodyParams.push('<tr><td class="hide-td"></td><td class="hide-td"></td><td class="hide-td"></td><td class="hide-td collapse" id="'+propId+'" style="">'+swaggerSnippet+'</td></tr>');
					}

				}
				bodyParams.push('</tbody></table>');

			} else if (param['in'] === 'query') {
				isUrl = true;
				urlParams.push(newProp(param));
			}
		}
	}

	return {body:isBody?bodyParams.join(''):'', url:isUrl?urlParams.join('') + '</tbody></table>':''}
};


function newResponseProp(param) {
	var prop = [
		'<tr class="function-title">'
		,'	<td class=""><strong>'+param.name+'</strong></td>'
		,'	<td class="">'+(param.type ? param.type : 'string')+'</td>'
		//,'	<td class="">'+(param.required ? '<span class="label label-danger">Required</span>' : '')+'</td>'
		,'	<td class="">'+param.description+'</td>'
		,'</tr>'
	];
	return prop.join('');
};


function newResp(data, code, resp, methodName) {
	var responseObject = [
		,'<table>'
		   ,'<thead>'
			,'<tr>'
			  ,'<th class="text-left" >Name</th>'
			  ,'<th class="text-left" >Type</th>'
			  //,'<th class="text-left" ></th>'
			  ,'<th class="text-left" >Description</th>'
			,'</tr>'
		  ,'</thead>'
		  ,'<tbody>'
		];
	var schema = getSchema(data, resp.schema.$ref);
	for (var key in schema.properties) {

		var propId = methodName+'_resp_'+code+'_'+key;
		var snippetCopy = JSON.parse(JSON.stringify(schema.properties[key]));
		delete snippetCopy.type;
		delete snippetCopy.description;
		var isSnippetEmpty = isEmptyObject(snippetCopy);

		var jsonParam = {
			name: key
			,required: (schema.required.indexOf(key) > -1)
			,description: schema.properties[key].description + (isSnippetEmpty ? '' : swaggerButton.replace('{id}',propId))
			,type: schema.properties[key].type
		};
		responseObject.push(newResponseProp(jsonParam));

		//collapsible swagger snippet:
		if (!isSnippetEmpty) {
			var swaggerSnippet = JSON.stringify(snippetCopy, null, 4).replace(/\n/g,'<br>').replace(/ /g,'&nbsp');
			responseObject.push('<tr><td class="hide-td"></td><td class="hide-td"></td><td class="hide-td response collapse" id="'+propId+'" style="">'+swaggerSnippet+'</td></tr>');
		}
	}
	responseObject.push('</tbody></table>');

	var result = [
		'<tr class="function-title">'
			,'<td>'
				,'<a role="button" data-toggle="collapse" href="#'+methodName+'_'+code+'">'
					,'<i id="'+methodName+'_'+code+'_i'+'" style="width:8px;padding-right:25px;" class="fa fa-caret-down"></i><strong>'+code+'</strong>'
				,'</a>'
			,'</td>'
			,'<td>'+resp.description+'</td>'
		,'</tr>'
		,'<tr>'
			,'<td style="padding:0px;border-top:0;" colspan="3">'
				,'<div id="'+methodName+'_'+code+'" class="responseObject collapse in" style="padding:0px 15px 0px 50px;">'
				,responseObject.join('')
				,'</div>'
			,'</td>'
		,'</tr>'
	];
	return result.join('');
};


function getResponses(method, data) {
	var responses = method.responses;
	if (responses) {
		var	result = [
			'<table class="table">'
		  		,'<caption class="text-left">'
					,'<h3><strong>Responses</strong></h3>'
		   		,'</caption>'
		   		,'<thead>'
					,'<tr>'
			  			,'<th class="text-left" >Result</th>'
			  			,'<th class="text-left" >Reason</th>'
					,'</tr>'
		  		,'</thead>'
		  		,'<tbody>'
		];

		for (var key in responses) {
			var response = responses[key];
			result.push(newResp(data, key, response, method.summary));
		}
		result.push('</tbody></table>');
	}

	return responses ? result.join('') : ''
};

function getTitleMod(path, method, limit, basePath) {
	path = path.replace(basePath,'');
	var output = method.toUpperCase() + ' ' + path;
	if (limit && path.length > limit - 1) {
		path = path.substring(0, limit - 1) + "...";
		output = method.toUpperCase() + ' ' + path;
	}
	return output;
};


function TOC_leaf(level, id, url, text) {
	var h = [
	'<div class="toc-level-'+level+' leaf toc-a-block" id="'+id+'">'
		,'<a href="'+url+'">'
		,'<span class="toc-text">'+text+'</span>'
		,'</a>'
	,'</div>'
	];
	return h.join('');
};

function TOC_menu_start(level, id, url, text) {
	var h = [
	'<div class="accordion-group" id="'+id+'">'
		,'<div class="accordion-heading accordion-toggle toc-level-'+level+'">'
			,'<a class="toc-a-block" href="'+url+'">'
			,'<span class="toc-text">'+text+'</span>'
			,'</a>'
			,'<a class="pull-right toc-plus-block" data-toggle="collapse" href="#subnav-'+id+'" style="font-style: italic"><i class="icon-plus toc-icon pull-right"></i></a>'
		,'</div>'
		,'<div class="accordion-body collapse" id="subnav-'+id+'">'
	];
	return h.join('');
};



function TOC_recursive(menuItem, out, level, parentKey) {
	for (var key in menuItem) {
		//console.log('level ' + level,menuItem[key]);

		if (typeof(menuItem[key]) === 'object' && Object.keys(menuItem[key]).length < 3) {
			out.push( TOC_leaf(level, parentKey+'_'+key, menuItem[key].url, menuItem[key].title) );
		} else if (typeof(menuItem[key]) === 'object') {
			//this object has nested menus.
			level++;
			out.push( TOC_menu_start(level, parentKey+'_'+key, menuItem[key].url, menuItem[key].title) );
			TOC_recursive(menuItem[key], out, level, parentKey+'_'+key);
			out.push( '</div></div>' );
			level--;
		}
	}
};


module.exports.register = function (Handlebars, options, params) {
	var assemble = params.assemble;

	Handlebars.registerHelper('json', function (obj) {
		return JSON.stringify(obj);
	});

	Handlebars.registerHelper('displayTag', function (str) {
		str = str.replace(/-/g, ' ');
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1);
		});
	});

	Handlebars.registerHelper('getJsonValue', function (key, context, value, options) {
		var output = "";
    if (key === 'x-sfdc-group-id') {
      return context[key];
    }

		if (key === 'x-base-path') {
			output = context[key];
		} else if (context[key] != undefined && context[key][value] != undefined) {
			output = context[key][value];
		}

		if (options && options.hash && options.hash.lower) {
			output = output.toLowerCase();
		}

		if (options && options.hash && options.hash.upper) {
			output = output.toUpperCase();
		}

		if (options && options.hash && options.hash.limit && output.length > options.hash.limit - 1) {
			output = output.substring(0, options.hash.limit - 1) + "...";
		}

		return new Handlebars.SafeString(output);
	});

	Handlebars.registerHelper('splitArgs', function (str, part) {
		var result = "";
		if (part == "first") {
			var regex = /^[\w\-]+/;
			result = regex.exec(str);
		} else {
			var regex = /[^ \t]+ \b.*/;
			result = regex.exec(str);
		}

		return new Handlebars.SafeString(result);
	});


	Handlebars.registerHelper('pageNav', function (index) {
		var page = assemble.options.pages[index];
		var menu = assemble.options.data.menu;
		var next, prev, nextPage, prevPage;
		var $ = cheerio.load('<div class="row"></div>');
		var prevButton = '<a href="#" type="button" class="btn btn-primary prev"><i class="fa fa-hand-o-left"></i> <span>Previous</span></a>';
		var nextButton = '<a href="#" type="button" class="btn btn-primary next"><span>Next</span> <i class="fa fa-hand-o-right"></i></a>';
		var menuLength = Object.size(menu) - 1;
		var counter = 0;
		var keys = Object.keys(menu);
		var directoryName = _.last(page.dirname.split("/"))
		var fileWithDirectory = directoryName + "\/" + page.filename;
		var _keyIndex = keys.indexOf(directoryName);

		_(menu).forEach(function (menuItem, key) {

			var menuPages;

			if (!menuItem.pages) {
				menuPages = [];
				menuPages.push(menuItem);
			} else {

				menuPages = menuItem.pages;

			}

			var length = menuPages.length;
			var index = _.findIndex(menuPages, function (menuPage) {
				var segments = menuPage.url.split("/");
				if(segments.length > 2){
					var urlPage = segments.slice(-2).join("/");
					return urlPage == fileWithDirectory;
				} else {
					//assume segments.length === 2
					return segments[segments.length -1] === page.filename
				}
			})

			if (index > -1) {
				if (length == 1) {

					if (menuLength > 1 && counter > 0) {
						$('div').prepend(prevButton);

						prev = _.last(menu[keys[keys.indexOf(key) - 1]].pages) || menu[keys[keys.indexOf(key) - 1]];

						prevPage = _.find(assemble.options.pages, {
							'filename': _.last(prev.url.split("/"))
						});

						$('div .prev span').text(prev.title);
						$('div .prev').attr('href', prevPage.relativeLink);
					}

					if (menuLength > 1 && counter < menuLength) {
						$('div').append(nextButton);
						next = _.first(menu[keys[keys.indexOf(key) + 1]].pages) || menu[keys[keys.indexOf(key) + 1]];
						nextPage = _.find(assemble.options.pages, {
							'filename': _.last(next.url.split("/"))
						});
						$('div .next span').text(next.title);
						$('div .next').attr('href', nextPage.relativeLink);
					}


				} else {
					//this is the first page of the category
					if (index == 0) {

						$('div').append(nextButton);

						next = menuPages[index + 1];

						nextPage = _.find(assemble.options.pages, {
							'filename': _.last(next.url.split("/"))
						});
						$('div .next span').text(next.title);
						$('div .next').attr('href', nextPage.relativeLink);

						if (menuLength > 1 && counter > 0) {
							$('div').prepend(prevButton);

							prev = _.last(menu[keys[keys.indexOf(key) - 1]].pages) || menu[keys[keys.indexOf(key) - 1]];

							prevPage = _.find(assemble.options.pages, {
								'filename': _.last(prev.url.split("/"))
							});
							$('div .prev span').text(prev.title);
							$('div .prev').attr('href', prevPage.relativeLink);
						}

					} else if (index == length - 1) {
						$('div').append(prevButton);

						prev = menuPages[index - 1];

						prevPage = _.find(assemble.options.pages, {
							'filename': _.last(prev.url.split("/"))
						});
						$('div .prev span').text(prev.title);
						$('div .prev').attr('href', prevPage.relativeLink);

						if (menuLength > 1 && counter < menuLength) {
							$('div').append(nextButton);

							next = _.first(menu[keys[keys.indexOf(key) + 1]].pages) || menu[keys[keys.indexOf(key) + 1]];
							nextPage = _.find(assemble.options.pages, {
								'filename': _.last(next.url.split("/"))
							});
							$('div .next span').text(next.title);
							$('div .next').attr('href', nextPage.relativeLink);
						}

					} else {

						$('div').append(prevButton).append(nextButton);

						next = menuPages[index + 1];
						prev = menuPages[index - 1];

						nextPage = _.find(assemble.options.pages, {
							'filename': _.last(next.url.split("/"))
						});
						prevPage = _.find(assemble.options.pages, {
							'filename': _.last(prev.url.split("/"))
						});
						$('div .next span').text(next.title);
						$('div .prev span').text(prev.title);
						$('div .next').attr('href', nextPage.relativeLink);
						$('div .prev').attr('href', prevPage.relativeLink);
					}
				}
			}
			counter++
		})

		return $.html();
	});


	Handlebars.registerHelper('getTitle', function (index, path, method, options) {
		//<h1>{{#getTitle page.index}}{{/getTitle}} <small>{{subheading}}</small></h1>
		if (typeof(path) === 'string' && typeof(method) === 'string') {
			var output = method.toUpperCase() + ' ' + path;
			if (options.hash.limit && output.length > options.hash.limit - 1) {
				output = output.substring(0, options.hash.limit - 1) + "...";
			}
			return output;
		}
		var title = "";
		var page = assemble.options.pages[index];

		if (page.data.hasOwnProperty('title')) {
			title = page.data.title;
		} else if (page.data.hasOwnProperty('data')) {
			var data = page.data.data;
			if (data.hasOwnProperty('path')) {
				title = data.httpMethod + ' /' + data.path;
			} else if (data.hasOwnProperty('title')) {
				title = data.title;
			}
		} else {
			var menu = assemble.options.data.menu;

			_(menu).forEach(function (menuItem) {
				var menuPages = menuItem.pages;
				var index = _.findIndex(menuPages, function (menuPage) {
					var urlPage = _.last(menuPage.url.split("/"));
					return urlPage == page.filename;
				})

				if (index > -1) {
					page.data.title = menuPages[index].title;
					title = (menuPages[index].title);
				}

			})
		}

		return new Handlebars.SafeString(title);
	});

	Handlebars.registerHelper('getLastUpdated', function (path) {
		var timeStamp = fs.statSync(path);
		timeStamp = moment(timeStamp.mtime).format("MMM D, YYYY");
		return new Handlebars.SafeString(timeStamp);
	})

	Handlebars.registerHelper('handlebars', function (output, params) {
		if (params.hash.escaped) {
			return new Handlebars.SafeString("{{{" + output + "}}}");
		}
		return new Handlebars.SafeString("{{" + output + "}}");
	})

	Handlebars.registerHelper('currentSection', function (v1, v2, options) {

		var url = v1.split('/');
		url.shift();
		url.shift();
		v1 = url.join('/');

		if (v2) {
			var currentPage = _.find(v2, function (page) {
				return page.url.indexOf(v1) > -1
			}, this);

			if (currentPage) {
				return options.fn(this);
			}

		}
		return options.inverse(this);
	})

	Handlebars.registerHelper('currentPage', function (v1, v2, options) {

		var url = v1.split('/');
		url.shift();
		url.shift();
		v1 = url.join('/');

		if (v2.indexOf(v1) > -1) {
			return options.fn(this);
		}

		return options.inverse(this);
	})

	Handlebars.registerHelper('buildSubnav', function (pages) {
		var subnav;
		var $ = cheerio.load('<div class="subnav"></div>');
		var length = pages.length;
		var columns = 1;

		if (length >= 4) {
			columns = 2;
		}

		var counter = 0;
		var colLength;
		for (var c = 0; c < columns; c++) {

			if (c == 0) {
				colLength = Math.ceil(length / columns);
			} else {
				colLength = length - colLength;
			}

			$('.subnav').append('<ul class="list-unstyled menu-column"></ul>');

			for (var i = 0; i < colLength; i++) {
				var url = pages[counter].url;

				if (!pages[counter].external) {
					url = '/' + url;
				}

				var link = $('<a href="' + url + '">' + pages[counter].title + '</a>');
				if (pages[counter].external == 'true') {
					link.attr('target', '_blank');
					link.append('&nbsp;<i class="fa fa-external-link"></i>');
				}
				$('.subnav .menu-column').append('<li>' + link + '</li>');

				counter++;
			}



		}


		subnav = $.html();

		return new Handlebars.SafeString(subnav);
	})

	Handlebars.registerHelper("foreach", function (arr, options) {
		if (options.inverse && !arr.length)
			return options.inverse(this);

		return arr.map(function (item, index) {
			item.$index = index;
			item.$first = index === 0;
			item.$last = index === arr.length - 1;
			return options.fn(item);
		}).join('');
	})

	Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

		if (arguments.length < 3)
			throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

		var operator = options.hash.operator || "==";

		var operators = {
			'==':       function(l,r) { return l == r; },
			'===':      function(l,r) { return l === r; },
			'!=':       function(l,r) { return l != r; },
			'<':        function(l,r) { return l < r; },
			'>':        function(l,r) { return l > r; },
			'<=':       function(l,r) { return l <= r; },
			'>=':       function(l,r) { return l >= r; },
			'typeof':   function(l,r) { return typeof l == r; }
		}

		if (!operators[operator])
			throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

		var result = operators[operator](lvalue,rvalue);

		if( result ) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}

	});

	Handlebars.registerHelper('listPaths', function(data, group, options) {
		//console.log('listPaths');
		var groupName = group['x-sfdc-group-id'];
		var paths = data.paths;
		var basePath = group['x-base-path'];
		var out = "";
		var pathsForGroup = [];
		var uniquePaths = {};
		var methodOrder = ['post','get','put','patch','delete','copy','head','options','link','unlink','purge'];
		var methodOrderLen = methodOrder.length;

		for (var pathName in paths) {

			var path = paths[pathName];
			var methods = {};
			var endpoint = pathName.replace(basePath,'');

			for (var methodName in path) {

				var method = path[methodName];
				if ((method.tags[0] === groupName) && method['x-published']) {

					if (!uniquePaths[endpoint]) {
						uniquePaths[endpoint] = {path: endpoint, path_length: endpoint.length, method: methodName};
					}

					var modEndpoint = endpoint;
					if (options.hash.limit && endpoint.length > options.hash.limit - 1) {
						modEndpoint = modEndpoint.substring(0, options.hash.limit - 1) + "...";
					}

					var params = getParameters(method, data);
					var responses = getResponses(method, data);
					var detailLink = method['x-md-detail'] ? '<p><a style="padding-bottom:15px;" target="_blank" href="'+ method['x-md-detail'] +'">More Detail</a></p>' : '';

					var html = [
						'<tr class="function-title" id="'+method.summary+'">'
						,	'<td>'
						,		'<a role="button" data-toggle="collapse" href="#detail_'+method.summary+'" aria-expanded="false">'
						,			'<span class="'+methodName+'">' + methodName.toUpperCase() + '</span> ' + modEndpoint
						,		'</a>'
						,	'</td>'
						,	'<td>'
						,		method.description
						,	'</td>'
						,'</tr>'
						,'<tr>' //,'<tr style="border:1px solid lightgray;border-top:0">'
							,'<td style="padding:0px;border-top:0;" colspan="3">'
								,'<div id="detail_'+method.summary+'" class="collapse" style="padding:0px 15px 0px 50px;">'
								,params.url
								,params.body
								,responses
								,detailLink
								,'</div>'
							,'</td>'
						,'</tr>'
					];



					methods[methodName] = html.join('');

				}
			}

			if (uniquePaths[endpoint]) uniquePaths[endpoint].methods = methods;

		}

		for (var pathName in uniquePaths) {
			pathsForGroup.push( uniquePaths[pathName] );
		}

		//sort the unique paths by path length and methodOrder
		pathsForGroup.sort(function(a, b) {
			return compareNumbers(a.path_length, b.path_length);
		});

		for (var j=0,len=pathsForGroup.length;j<len;j++) {

			var uniquePath = pathsForGroup[j];
			//render methods in consistent order
			for (var i=0;i<methodOrderLen;i++) {
				if (uniquePath.methods && uniquePath.methods[methodOrder[i]]) {
					out = out + uniquePath.methods[methodOrder[i]];
				}
			}

		}
console.log(out);
	  	return out;
	});


	Handlebars.registerHelper('listSidebarPaths', function(currGroup, data, index, currPath, currMethod) {
		//console.log('listSidebarPaths',data.tags[index].name, data.paths[currPath][currMethod].tags[0]);
		//this function is called once for each 'tag' (group name) for each page.
		var out = [];
		var paths = data.paths;
		var methodOrder = ['post','get','put','patch','delete','copy','head','options','link','unlink','purge'];
		var methodOrderLen = methodOrder.length;

		for (var pathName in paths) {

			var path = paths[pathName];
			for (var methodName in path) {
				var method = path[methodName];

				if (method.tags[0] === currGroup && method['x-published']) {
					var basePath = data.tags[index]['x-base-path'];
					var title = getTitleMod(pathName, methodName, 27, basePath);
					var activePathIndicator = (pathName === currPath && methodName === currMethod) ? ' active' : '';
					var attrTitle = methodName.toUpperCase() + ' ' + pathName;
					var detailLink = data.paths[currPath][currMethod]['x-md-detail'];
					var folderDepth = detailLink ? (detailLink.split("/").length-1) : 0;
					var pageName =  method['x-md-detail'] ? '../'.repeat(folderDepth) + method['x-md-detail'] : ((currPath.startsWith('\/hub') ? '../../' : '../') + 'routes.htm#' + method.summary);
					out.push({method: methodName, title: attrTitle, path_length: pathName.length, anchorTag:'<a href="'+ pageName +'" title="'+ attrTitle +'" class="list-group-item' + activePathIndicator + '">'+ title +'</a>'});
				}

			}
		}

		//sort the unique paths by path length and methodOrder
		out.sort(function(a, b) {
			return compareNumbers(Number(a.path_length+'.'+methodOrder.indexOf(a.method)), Number(b.path_length+'.'+methodOrder.indexOf(b.method)));
		});

		var aOut = [];
		for (var j=0,len=out.length;j<len;j++) {
			aOut.push(out[j].anchorTag);
		}

		return new Handlebars.SafeString(aOut.join(''));
	});






	Handlebars.registerHelper('TOC', function(menu) {
		//this function builds the table_of_contents partial required by developer.salesforce.com doc.
		console.log('TOC');

		var out = [];
		var level = 1;

		TOC_recursive(menu, out, level, 'root');

		return new Handlebars.SafeString(out.join(''));

		//return new Handlebars.SafeString('<div>'+menu.a.title+'</div>');
	});


	Handlebars.registerHelper('swaggerDetail', function (data, path, method) {
		//console.log('swaggerDetail');
		var method = data.paths[path][method];
		var params = getParameters(method, data);
		var overview = method.description ? '<h2><strong>Overview</strong></h2><p>'+method.description+'</p>' : '';
		var html = [
			overview
			,params.url
			,params.body
		];
		return html.join('');
	});

	Handlebars.registerHelper('sidebarActiveGroupIndicator', function (data, index, currPath, currMethod) {
		//console.log('sidebarActiveGroupIndicator',data.tags[index].name, index, data.paths[currPath][currMethod].tags[0]);
		return (data.tags[index].name === data.paths[currPath][currMethod].tags[0]) ? 'active' : 'collapsed';
	});

	Handlebars.registerHelper('sidebarActivePanelIndicator', function (data, index, currPath, currMethod) {
		//console.log('sidebarActivePanelIndicator');
		return (data.tags[index].name === data.paths[currPath][currMethod].tags[0]) ? 'in' : '';
	});

};
