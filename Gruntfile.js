module.exports = function (grunt) {

    grunt.initConfig({
        pkg:    grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist:    {
                files: {
                    'public/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        watch:  {
            scripts: {
                files:   ['assets/*.js'],
                tasks:   ['default'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist:    {
                src:  'assets/*.js',
                dest: 'public/<%= pkg.name %>.js'
            }
        },
        clean:  {
            js: ['public/*.js', '!public/*.min.js']
        },
        jshint: {
            all: ['assets/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'clean']);
};
