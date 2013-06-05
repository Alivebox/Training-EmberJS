define(
    function(){
        console.log('App loaded');
        window.App = Ember.Application.create();
        App.deferReadiness();

    }
);
