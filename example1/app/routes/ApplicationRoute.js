define(
    [
        'app/controllers/ApplicationController'
    ],
    function(){

        console.log('ApplicationRoute loaded...');

        App.ApplicationRoute = Ember.Route.extend({

            setupController: function(argController,argModels){
                argController.set('model',argModels);
            },

            model: function(){
                return users;
            }

        });

    }
);