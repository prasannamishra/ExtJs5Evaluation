Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'App.view.main.MainController',
        'App.view.userRegistration.Registration',
        'App.view.grid.SampleGrid',
        'App.view.association.Association'
    ],

    xtype: 'app-main',

    controller: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },



    initComponent: function() {
        var breadCrumbStore = Ext.create('App.store.BreadCrumb');

        this.tbar = [];

        this.items = [{
            xtype: 'tabpanel',
            region: 'center',
            plugins: 'responsive',
            listeners: {
                beforetabchange: 'mainPanelTabChange'
            },
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

            tbar: [{
                xtype: 'breadcrumb',
                store: breadCrumbStore,
                showIcons: true,
                selection: breadCrumbStore.getRoot().childNodes[0],
                listeners: {
                    selectionchange: 'breadcrumbSelectionChange'
                }
            }, '->', {
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
            }, {
                xtype: 'app-association'
            }]

        }];


        this.callParent();
    }

});