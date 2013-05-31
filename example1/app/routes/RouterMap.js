define(
    function(){

        console.log('RouterMap loaded...');
        App.Router.map(function(){
            this.resource('user', {
                path: '/users/:user_id'
            });
        });

        App.UserRoute = Ember.Route.extend({

            model: function(argParams){
                var tmpUserId = argParams.user_id - 1;
                return users[tmpUserId];
            }

        });

    }
);