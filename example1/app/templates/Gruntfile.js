module.exports = function (grunt) {

    //CONFIGURATION - START

    grunt.initConfig({

        emberTemplates: {
            compile: {
                options: {
                    namespace: "App.templates",
                    templateName: function(argFileName){
                        return argFileName.replace(/^.*[\\\/]/, '');
                    }
                },
                all: {
                    src:['user/*.handlebars'],
                    dest:'../compile-templates/user/'
                }
            }
        }

    });

    //CONFIGURATION - END

    //PLUGINS - START

    grunt.loadNpmTasks('grunt-ember-templates');

    //PLUGINS - END

    //TASKS - START

    grunt.registerTask('default', ['emberTemplates']);

    //TASKS - START

};
