define(
    [
        'app/routes/ApplicationRoute',
        'app/routes/UserRoute',
        'app/routes/EditUserRoute'
    ],
    function(){

        console.log('RouterMap loaded...');
        App.Router.map(function(){
            this.resource('user', {
                path: '/users/:user_id'
            });
            this.resource('editUser',{
                path: '/users/:user_id/edit'
            });
        });

    }
);