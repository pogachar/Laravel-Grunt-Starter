//Gruntfile

module.exports = function(grunt) {

//Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    copy: {
      fonts: {
        files: [{
          expand: true,
          flatten: true,
          src: './bower_components/font-awesome/fonts/**',
          dest: './public/fonts/',
          filter: 'isFile'
        }]
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          './bower_components/jquery/dist/jquery.min.js',
          './app/assets/js/scripts.js'
        ],
        dest: './public/js/scripts.js',
      },
    },
    /*sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './app/assets/scss',
          src: ['*.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    },*/
    phpunit: {
      classes: {
      },
      options: {
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: './app/assets/scss',
          cssDir: './public/css',
          fontsDir: './public/fonts',
          imagesDir: './public/img',
          environment: 'development',
          outputStyle: 'nested',
          noLineComments: true,
          require: [
            
          ],
          debugInfo: false,
        }
      }
    },

    watch: {
      js: {
        files: [
          './bower_components/jquery/dist/jquery.min.js',
          './app/assets/js/scripts.js'
        ],
        tasks: ['concat:js'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['./app/assets/scss/**'],
        tasks: ['compass:dev'],
        options: {
          livereload: true
        }
      },
      /*sass: {
        files: ['./app/assets/scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },*/
      tests: {
        files: ['./app/controllers/*.php','./app/models/*.php', './app/views/**'],  //the task will run only when you save files in this location
        tasks: ['phpunit'],
        options: {
          livereload: true
        }
      }
    }
  });

// Plugin loading
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-phpunit');

// Task definition
grunt.registerTask('default', ['watch']);
};