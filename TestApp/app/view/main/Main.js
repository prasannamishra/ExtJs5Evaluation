Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'App.view.main.MainController',
        'App.view.userRegistration.Registration',
        'App.view.grid.SampleGrid'
    ],

    xtype: 'app-main',

    controller: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },



    items: [{
        xtype: 'tabpanel',
        region: 'center',

        plugins: 'responsive',
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            iconAlign: 'top',
            bodyPadding: 15
        },
        responsiveFormulas: {
            tall: 'height > width',

            wide: 'width > height',

        },
        responsiveConfig: {
            wide: {
                tabPosition: 'top',
            },

            tall: {
                tabPosition: 'bottom'
            }
        },

        tbar: ['->', {
            xtype: 'button',
            text: 'Logout',
            iconAlign: 'right',
            glyph: 0xf192,
            listeners: {
                click: 'doLogOut'
            }
        }],
        items: [{
            xtype: 'app-registration'
        }, {
            xtype: 'app-sample-grid'
        }]

    }]
});