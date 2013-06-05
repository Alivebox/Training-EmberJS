define(
    function(){

        console.log('ApplicationController loaded...');

        App.ApplicationController = Ember.ArrayController.extend({

            createUser: function(){
                var tmpUsers = this.get('model');
                var tmpNewUser = {
                    id: tmpUsers.length
                };
                tmpUsers.pushObject(tmpNewUser);
                this.transitionTo('editUser',tmpNewUser);
            }

        });

    }
);