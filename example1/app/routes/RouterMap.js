define(
    function(){

        console.log('RouterMap loaded...');
        App.Router.map(function(){
            this.resource('user', {
                path: '/users/:user_id'
            },function(){
                this.route();
            });
            this.resource('editUser',{
                path: '/users/:user_id/edit'
            });
        });

    }
);