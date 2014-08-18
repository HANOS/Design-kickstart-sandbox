// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
//http://www.tech-step.net/?p=704
'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            coffee: {
                files: ['<%= yeoman.app %>/js/coffee/{,*/}*.coffee'],
                tasks: ['coffee']
            },
            scripts :{
                files : ['<%= yeoman.app %>/js/{,*/}*.js'],
                tasks : ['requirejs']
            },
            jade: {
                files: '<%= yeoman.app %>/views/{,*/}*.jade',
                tasks: ['jade']
            },
            handlebars: {
                files: ['<%= yeoman.app %>/templates/{,*/}*.hbs'],
                tasks: ['handlebars'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: '<%= yeoman.app %>/views', // Src matches are relative to this path.
                    src: ['*.jade', '!*/*.jade'],
                    dest: '<%= yeoman.app %>', // Destination path prefix.
                    ext: '.html' // Dest filepaths will have this extension.
                }]
            }
        },
        jshint: {
            options: {
                camelcase: true,
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                    '<%= yeoman.app %>/scripts/templates.js',
                    '<%= yeoman.app %>/js/*.js'
                ]
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/{,*/}*.js',
                '!<%= yeoman.app %>/js/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/scss',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components/foundation/scss',
                httpImagesPath: '../images',
                httpGeneratedImagesPath: '../images/generated',
                httpFontsPath: '../styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
                
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated',
                    imagesDir: '<%= yeoman.dist %>/images',
                    relativeAssets: false
                }
            },
            server: {
                options: {
                    debugInfo: true,
                    relativeAssets: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', '> 5%', 'ie 8']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: [
                        '{,*/}*.css'
                       /* '../bower_components/font-awesome/css/font-awesome.css'*/
                    ],
                    dest: '.tmp/styles/'
                }]
            }
        },
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
               /* flow: { steps: { 'js': ['concat'], 'css': ['concat']}, post: {}}*/
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
        },
        dalek: {
            options: {
                htmlReporter: true,
                logLevel: 2,
                noColors: false,
                noSymbols: false
            },
            dist: {
                src: ['uat/dalekjs-tests.js']
            }
        },
        htmlmin: {
            dist: {
                options: {
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                        'templates/{,*/}*.hbs'
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/font-awesome',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'fonts/*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: [
                    '{,*/}*.css',
                    '../bower_components/font-awesome/css/font-awesome.css'
                ]
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/js/coffee/',
                    src: '{,*/}*.coffee',
                    dest:'<%= yeoman.dist %>/scripts/',
                    ext: '.js'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/js/coffee/',
                    src: '{,*/}*.coffee',
                    dest:'<%= yeoman.app %>/js/',
                    ext: '.js'
                }]
            }
        },
        modernizr: {
            devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
            extra: {
                'shiv' : true,
                'printshiv' : false,
                'load' : true,
                'mq' : false,
                'cssclasses' : true
            },
            extensibility: {
                'addtest': true,
                'prefixed': false,
                'teststyles': false,
                'testprops': false,
                'testallprops': false,
                'hasevents': false,
                'prefixes': false,
                'domprefixes': false
            },
            files: [
                '<%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/styles/{,*/}*.css',
                '!<%= yeoman.dist %>/scripts/vendor/*'
            ],
            uglify: true
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: '<%= yeoman.app %>/js',
                    include: ['config'],
                    name: '../bower_components/almond/almond',
                    optimize: 'uglify',
                    out: '<%= yeoman.dist %>/scripts/main.js'
                    //mainConfigFile: '<%= yeoman.app %>/js/config.js'
                },
                server: {
                    options: {
                        build: false
                    }
                },
                dist: {
                    options: {
                        build: true
                    }
                }
            }
            
        },
        htmlrefs: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        handlebars: {
            options: {
                amd: true
            },
            all: {
                files: {
                    '<%= yeoman.app %>/js/templates.js': '<%= yeoman.app %>/templates/**/*.hbs'
                }
            }
        },
        'responsive_images': {
            carousel: {
                options: {
                    sizes: [{height:200, name:'small', width:400},
                            {height:400, name:'medium', width:800},
                            {height:600, name:'large', width:1000}]
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images/resimg',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.app %>/images'
                }]
            }
        },
        concurrent: {
            server: [
                'compass:server',
                'coffee:server',
                'jade',
                /*'responsive_images',*/
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass:dist',
                'coffee:dist',
                'jade',
                /*'responsive_images',*/
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'handlebars',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'handlebars',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'modernizr',
        'copy:dist',
        'htmlrefs:dist',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('dalekjs', [
        'clean:server',
        'compass',
        'connect:test',
        'dalek'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};

