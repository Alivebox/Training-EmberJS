var users = [
    {
        id: 1,
        first: 'Ryan',
        last: 'Florence',
        avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
    },
    {
        id: 2,
        first: 'Tom',
        last: 'Dale',
        avatar: 'https://si0.twimg.com/profile_images/1317834118/avatar.png'
    },
    {
        id: 3,
        first: 'Yehuda',
        last: 'Katz',
        avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
    }
];


require.config(
    {

        paths:{
            /*emberjs:['//cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-rc.4/ember.min','resources/js/ember'],*/
            emberjs:['resources/js/ember-1.0.0-rc.5'],
            /*jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min','resources/js/jquery'],*/
            jquery: ['resources/js/jquery-2.0.2'],
            /*handlebars: ['//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.4/handlebars.min','resources/js/handlebars'],*/
            handlebars: ['resources/js/handlebars-1.0.0-rc4'],
            application: 'app/app'
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
            }
        }

    }
);

require(
    [
        'application'
    ],
    function(){
        require(
            [
                'app/routes/RouterMap'
            ],
            function(){
                console.log('EntryPoint ready!!!');
                App.advanceReadiness();
            }
        );
    }
);
