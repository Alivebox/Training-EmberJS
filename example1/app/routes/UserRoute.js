define(
    function(){

        console.log('UserRoute loaded...');

        App.UserRoute = Ember.Route.extend({

            model: function(argParams){
                var tmpUserId = argParams.user_id - 1;
                return users[tmpUserId];
            }

        });

    }
);