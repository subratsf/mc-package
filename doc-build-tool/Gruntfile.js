/* THIS IS FOR CODE@ TO SF CONVERSION */

/*global module:false*/
function getTarget(docContentSource, docTeam,targetEnv)
{
    if(targetEnv === 'preview')
    {
        return docContentSource+'/../'+targetEnv+'_temp_'+docTeam+'_html';
    }
    else {
        return docContentSource+'/../'+'rel_'+docTeam+'_html';
    }  
}

function getPort() {
    console.log("Heroku Port : "+process.env.port)
    return process.env.port;
}

var assembleFn = function(targetEnv) {
    return {
        options: {
            site: '<%= site %>',
            assets: '<%= site.assets %>',
            layoutdir: targetEnv === 'preview' ? '<%= site.devlayouts %>' : '<%= site.layouts %>',
            layout: 'default.hbs',
            flatten: true,
            partials: ['table_of_contents.*','<%= site.templates %>/partials/*', '<%= source %>/shared/*.md'],
            helpers: ['<%= site.src %>/helpers/*.js', 'handlebars-helper-md'],
            data: '<%= source %>/<%= site.root %>/siteNav.yml'
        },
        root: { //builds main site pages
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.root %>/',
                src: ['**/*.{md,hbs}'],
                dest: '<%= dest %>/',
                ext: '.htm'
            } ]
        }, 
        rest_apis: {
            options: {
                layout: 'function-rest-swagger.hbs',
                data: '<%= source %>/<%= site.apis_rest %>/swaggerdoc.json',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.apis_rest %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}','!table_of_contents.hbs','!cancelInstance.md','!createDefinition.md','!deleteDefinitionById.md','!getDefinitionById.md','!getInstances.md','!getInstancesByDefinition.md','!getInstanceStatus.md','!scheduleSend.md','!searchDefinitions.md','!updateDefinitionById.md','!deleteWebhooks.md','!retrieveWebhookID','!retrieveWebhooksAll.md','!verifyWebhook.md','!createWebhooks.md','!webhooks-subscription-api.md','!using-send-api.md','!integrated-send-api.md','!using-content-api.md'],
                dest: '<%= dest %>/<%= site.apisDest %>'
            } ]
        },
        soap_apis: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.apis %>/*.{json,yml}',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.apis_soap %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}'],
                dest: '<%= dest %>/<%= site.apisDest %>'
            } ]
        },                     
        apis: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.apis %>/*.{json,yml}',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.apis %>',
                src: ['*.{md,hbs}', '!table_of_contents.hbs','!cancelInstance.md','!createDefinition.md','!deleteDefinitionById.md','!getDefinitionById.md','!getInstances.md','!getInstancesByDefinition.md','!getInstanceStatus.md','!scheduleSend.md','!searchDefinitions.md','!updateDefinitionById.md','!deleteWebhooks.md','!retrieveWebhookID','!retrieveWebhooksAll.md','!verifyWebhook.md','!createWebhooks.md','!webhooks-subscription-api.md','!using-send-api.md','!integrated-send-api.md','!using-content-api.md'],
                dest: '<%= dest %>/<%= site.apisDest %>'
            } ]
        },     
        apis_TOC: {
            options: {
                layout: 'noop.hbs',
                data: '<%= source %>/<%= site.apis %>/menu.json',
                ext: ".toc"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.apis %>',
                src: ['table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.apisDest %>'
            }, ]
        },
         appDevelopment: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.appDevelopment %>/*.{json,yml}',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.appDevelopment %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}','!table_of_contents.hbs','!sso-activities.md'],
                dest: '<%= dest %>/<%= site.appDevelopmentDest %>'
            } ]
        },     
        appDevelopment_TOC: {
            options: {
                layout: 'noop.hbs',
                data: '<%= source %>/<%= site.appDevelopment %>/menu.json',
                ext: ".toc"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.appDevelopment %>',
                src: ['table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.appDevelopmentDest %>'
            }, ]
        },        
        gettingStarted: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.gettingStarted %>/*.{json,yml}',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.gettingStarted %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}','!table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.gettingStartedDest %>'
            } ]
        },     
        gettingStarted_TOC: {
            options: {
                layout: 'noop.hbs',
                data: '<%= source %>/<%= site.gettingStarted %>/menu.json',
                ext: ".toc"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.gettingStarted %>',
                src: ['table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.gettingStartedDest %>'
            }, ]
        },
        func_programmaticContent: {
            options: {
                layout: 'function-amp.hbs',
                data: '<%= source %>/<%= site.programmaticContent_func %>/reference.json',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.programmaticContent_func %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}','!functions.hbs','!table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.programmaticContentDest %>'
            } ]
        },  
        functions_file_programmaticContent: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.programmaticContent_func %>/menu.yml',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.programmaticContent_func %>',
                src: ['functions.hbs'],
                dest: '<%= dest %>/<%= site.programmaticContentDest %>'
            } ]
        },                                       
        programmaticContent: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.programmaticContent %>/menu.yml',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.programmaticContent %>',
                src: ['*.{md,hbs}', '!table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.programmaticContentDest %>'
            } ]
        },                
        programmaticContent_TOC: {
            options: {
                layout: 'noop.hbs',
                data: '<%= source %>/<%= site.programmaticContent %>/menu.json',
                ext: ".toc"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.programmaticContent %>',
                src: ['table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.programmaticContentDest %>'
            }, ]
        },
        sdks: {
            options: {
                layout: 'pages.hbs',
                data: '<%= source %>/<%= site.sdks %>/*.{json,yml}',
                ext: ".htm"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.sdks %>',
                src: ['*.{md,hbs}', '**/*.{md,hbs}','!table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.sdksDest %>'
            } ]
        },     
        sdks_TOC: {
            options: {
                layout: 'noop.hbs',
                data: '<%= source %>/<%= site.sdks %>/menu.json',
                ext: ".toc"
            },
            files: [{
                expand: true,
                cwd: '<%= source %>/<%= site.sdks %>',
                src: ['table_of_contents.hbs'],
                dest: '<%= dest %>/<%= site.sdksDest %>'
            }, ]
        }                
    };
};

module.exports = function(grunt) {

    console.log("Check here ----> " + grunt.option('docContentSource'));

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        site: grunt.file.readYAML('_config.yml'),
        source: grunt.option('docContentSource'),
        targetEnv : grunt.option('target'),
        docTeam : grunt.option('docTeam'), // Not needed as of now.
        dest: getTarget(grunt.option('docContentSource'), grunt.option('docTeam'),grunt.option('target')),
        //grunt.config.set('assemble.options.layoutdir', '<%= site.devlayouts %>'),

        checkDependencies: {
            this: {
                options: {
                    npmInstall: true,
                },
            },
        },

        jshint: {
            all: ['Gruntfile.js', '<%= site.scripts %>/*.*', '<%= source %>/<%= site.restApi %>/reference/reference.json'],
            options: {
                jshintrc: '.jshintrc',
                reporterOutput: ""
            }
        },
        clean: {
            root: ['<%= dest %>'+'/*.*'],
            apisDest: ['<%= dest %>'+'/<%= site.apisDest %>/*'],
            appDevelopmentDest: ['<%= dest %>'+'/<%= site.appDevelopmentDest %>/*'],
            gettingStartedDest: ['<%= dest %>'+'/<%= site.gettingStartedDest %>/*'],
            programmaticContentDest: ['<%= dest %>'+'/<%= site.programmaticContentDest %>/*'],
            sdksDest: ['<%= dest %>'+'/<%= site.sdksDest %>/*'],
            utilDest: ['<%= dest %>'+'/<%= site.util %>/*'],
            grunt_working: ["grunt_working"]
        },
        copy: {
                swagger: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.restApi %>/reference/',
                        src: 'swaggerdoc.json',
                        dest: '<%= dest %>'+'/<%= site.restApiv1 %>/',
                    }]
                },
                gettingStarted_Images: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/images/',
                        src: ['**'],
                        dest: '<%= dest %>'+'/<%= site.gettingStartedDest %>/images/'
                    }]
                },          
                gettingStarted_Deliverable: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.gettingStarted %>',
                        src: 'deliverable_metadata.json',
                        dest: '<%= dest %>'+'/<%= site.gettingStartedDest %>/',
                    }]
                },
                apis_Images: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/images/',
                        src: ['**'],
                        dest: '<%= dest %>'+'/<%= site.apisDest %>/images/'
                    }]
                },
                apis_Deliverable: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.apis %>',
                        src: 'deliverable_metadata.json',
                        dest: '<%= dest %>'+'/<%= site.apisDest %>/',
                    }]
                },
                appDevelopment_Images: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/images/',
                        src: ['**'],
                        dest: '<%= dest %>'+'/<%= site.appDevelopmentDest %>/images/'
                    }]
                },
                appDevelopment_Deliverable: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.appDevelopment %>',
                        src: 'deliverable_metadata.json',
                        dest: '<%= dest %>'+'/<%= site.appDevelopmentDest %>/',
                    }]
                },
                programmaticContent_Images: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/images/',
                        src: ['**'],
                        dest: '<%= dest %>'+'/<%= site.programmaticContentDest %>/images/'
                    }]
                },
                programmaticContent_Deliverable: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.programmaticContent %>',
                        src: 'deliverable_metadata.json',
                        dest: '<%= dest %>'+'/<%= site.programmaticContentDest %>/',
                    }]
                },
                sdks_Images: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/images/',
                        src: ['**'],
                        dest: '<%= dest %>'+'/<%= site.sdksDest %>/images/'
                    }]
                },
                sdks_Deliverable: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/<%= site.sdks %>',
                        src: 'deliverable_metadata.json',
                        dest: '<%= dest %>'+'/<%= site.sdksDest %>/',
                    }]
                },
                util: {
                    files: [{
                        expand: true,
                        cwd: '<%= site.src %>/<%= site.util %>',
                        src: '**',
                        dest: '<%= dest %>'+'/<%= site.util %>'
                    }]
                },
                resource: {
                    files: [{
                        expand: true,
                        cwd: '<%= site.src %>/resource',
                        src: '**',
                        dest: '<%= dest %>'+'/resource'
                    }]
                },
        },
        concat: {
            less: {
               src: [
                     "<%= site.less %>/*",
                     "!<%= site.less %>/styles.less"
                    ],
                dest: "grunt_working/combined.less"
            },
            js : {
                src : [
                    "<%= site.node_modules %>/jquery/dist/jquery.min.js",
                    "<%= site.node_modules %>/swiftype-autocomplete-jquery/jquery.swiftype.autocomplete.js",
                    "<%= site.static_dependency %>/swiftype-search-jquery/jquery.ba-hashchange.min.js",
                    "<%= site.static_dependency %>/swiftype-search-jquery/jquery.swiftype.search.js",
                    "<%= site.static_dependency %>/smooth-div-scroll/js/source/jquery-ui-1.10.3.custom.js",
                    "<%= site.static_dependency %>/smooth-div-scroll/js/source/jquery.mousewheel.js",
                    "<%= site.static_dependency %>/smooth-div-scroll/js/source/jquery.kinetic.js",
                    "<%= site.static_dependency %>/smooth-div-scroll/js/source/jquery.smoothDivScroll-1.3.js",
                    "<%= site.node_modules %>/bootstrap/dist/js/bootstrap.min.js",
                    "<%= site.node_modules %>/bootstrapValidator/dist/js/bootstrapValidator.min.js",
                    "<%= site.node_modules %>/bootstrap/js/dropdown.js",
                    "<%= site.node_modules %>/holderjs/holder.js",
                    "<%= site.scripts %>/**"
                ],
                dest : "grunt_working/combined.js"
            }
        },
        assemble: assembleFn(grunt.option('target')),
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: getPort(),
                    base: '<%= dest %>',
                    open: {
                        target: 'http://localhost:3000/en-us/noversion'
                    }
                }
            }
        },

        less: {
            development: {
                files: {
                    "grunt_working/combined.css": "grunt_working/combined.less"
                }
            }
        },
        
        cssmin : {
            css:{
                src: 'grunt_working/combined.css',
                dest: 'grunt_working/combined.min.css'
            }
        },
        uglify : {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'grunt_working/combined.min.js' : [ 'grunt_working/combined.js' ]
                }
            }
        },
        watch: {
            templates: {
                files: ['<%= site.templates %>/**', 'Gruntfile.js', '_config.yml', 'package.json', '<%= site.helpers %>/**', '<%= source %>/<%= site.root %>/siteNav.yml'],
                //tasks: ['jshint', 'clean:root', 'clean:gettingStarted', 'clean:whatsNew', 'clean:apisSdks', 'clean:restApi', 'clean:soapApi', 'clean:fuelSdks', 'clean:mobileconnectApi', 'clean:jb4a', 'clean:ampscript', 'clean:serverSideJavascript', 'clean:guideTemplateLanguage', 'clean:marketingCloudApps', 'clean:cloudEditor', 'clean:cloudEditorGears', 'clean:journeyBuilderDevelopment', 'assemble']
                tasks: ['jshint', 'cleanDir:root', 'cleanDir:gettingStartedDest', 'assembleDir:root', 'assembleDir:gettingStarted']
            },
            root: {
                files: ['<%= source %>/<%= site.root %>/**'],
                tasks: ['jshint', 'cleanDir:root', 'assembleDir:root']
            },
            apis: {
                files: ['<%= source %>/<%= site.apis %>/**'],
                tasks: ['jshint', 'cleanDir:apisDest', 'assembleDir:apis', 'assembleDir:rest_apis', 'assembleDir:soap_apis']
            },
            appDevelopment: {
                files: ['<%= source %>/<%= site.appDevelopment %>/**'],
                tasks: ['jshint', 'cleanDir:appDevelopmentDest', 'assembleDir:appDevelopment']
            },
            gettingStarted: {
                files: ['<%= source %>/<%= site.gettingStarted %>/**'],
                tasks: ['jshint', 'cleanDir:gettingStartedDest', 'assembleDir:gettingStarted']
            },
            programmaticContent: {
                files: ['<%= source %>/<%= site.programmaticContent %>/**'],
                tasks: ['jshint', 'cleanDir:programmaticContentDest', 'assembleDir:programmaticContent']
            },
            sdks: {
                files: ['<%= source %>/<%= site.sdks %>/**'],
                tasks: ['jshint', 'cleanDir:sdksDest', 'assembleDir:sdks']
            },
            options: {
                livereload: true,
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes..');
                }
            }
        }

    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-check-dependencies');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.task.registerTask('copyTo', 'copy into a specific destination', function() {
        grunt.task.run(['copy']);
    });

    grunt.task.registerTask('cleanDir', 'Clean specific destination', function(specificTarget) {
        if(specificTarget) {
            grunt.task.run(['clean:'+specificTarget]);
        } 
        else {
            grunt.task.run(['clean']);
        }
    });
    
    grunt.task.registerTask('assembleDir', 'Assemble specific destination', function(specificTarget) {
        if(grunt.option('target') === 'preview')
        {
            grunt.config.set('assemble.options.layoutdir', '<%= site.devlayouts %>');
        }    
        if(specificTarget) {
            grunt.task.run(['copyTo:'+specificTarget]);
            grunt.task.run(['assemble:'+specificTarget]);
        }
        else {
            grunt.task.run(['copy']);
            grunt.task.run(['assemble']);
        }
    });
/*
    grunt.event.on('watch', function(action, filepath){
        // Update the config to only build the changed less file.
        grunt.config(['less', 'development', 'files'], [
          //{src: filepath, dest: './library/css/' + path.basename(filepath, '.less') + '.css'}
          console.log("TESTING" + filepath)
        ]);
    });
*/
    grunt.registerTask('default', ['checkDependencies', 'jshint', 'cleanDir', 'assembleDir', 'copyTo', 'concat','cssmin', 'uglify', 'connect', 'watch']);

    grunt.registerTask('generate', ['checkDependencies', 'jshint', 'cleanDir', 'assembleDir', 'copyTo', 'concat','cssmin', 'uglify']);
    
    grunt.registerTask('build', [ 'checkDependencies', 'jshint', 'cleanDir', 'assembleDir', 'copyTo']);

};
