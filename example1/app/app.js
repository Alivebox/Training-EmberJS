require.config(
    {

        paths:{
            emberjs:'../resources/js/ember',
            jquery: '../resources/js/jquery',
            handlebars: '../resources/js/handlebars'
        },

        shim: {
            'emberjs': {
                deps: [
                    'jquery',
                    'handlebars'
                ],
                exports: 'Ember'
            }
        }

    }
);

var Application = {};

require(
    [
        'emberjs'
    ],
    function(){
        console.log($);
    }
);
