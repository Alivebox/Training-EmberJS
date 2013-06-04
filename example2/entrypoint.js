require.config(
    {

        paths:{
            emberjs:['//cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-rc.4/ember.min','resources/js/ember'],
            jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min','resources/js/jquery'],
            handlebars: ['//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.4/handlebars.min','resources/js/handlebars'],
            application: 'app/app',
            dependencies: 'app/Dependencies'
        },

        shim: {
            'emberjs': {
                deps: [
                    'jquery',
                    'handlebars'
                ],
                exports: 'Ember'
            },
            'application': {
                deps: [
                    'emberjs'
                ]
            },
            'dependencies': {
                deps: [
                    'application'
                ]
            }
        }

    }
);

require(
    [
        'dependencies'
    ],
    function(){
        console.log('EntryPoint ready!!!');
        App.advanceReadiness();
    }
);
