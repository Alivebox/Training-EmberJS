define(
    function(){

        console.log('EditUserRoute loaded...');

        App.EditUserRoute = Ember.Route.extend({

            model: function(argParams){
                var tmpUserId = argParams.user_id - 1;
                return users[tmpUserId];
            },

            events: {

                save: function(){
                    var tmpEditUserModel = this.modelFor('editUser');
                    this.transitionTo('user',tmpEditUserModel);
                }

            }

        });

    }
);