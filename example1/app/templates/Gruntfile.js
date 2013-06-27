module.exports = function (grunt) {

    //CONFIGURATION - START

    grunt.initConfig({

        //pkg: grunt.file.readJSON('package.json'),

        emberTemplates: {
            compile: {
                options: {
                    namespace: "App.templates",
                    templateName: function(argFileName){
                        return argFileName.replace(/^.*[\\\/]/, '');
                    }
                },
                files: {
                    "../compile-templates/user/editUser.js": "user/editUser.handlebars",
                    "../compile-templates/user/user.js": "user/user.handlebars"
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
