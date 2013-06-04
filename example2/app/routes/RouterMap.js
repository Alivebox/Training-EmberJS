define(
    function(){

        console.log('RouterMap loaded...');
        App.Router.map(function(){
            this.resource('about', function(){
                this.route('product');
                this.route('location');
            });
            this.resource('login');
        });

    }
);