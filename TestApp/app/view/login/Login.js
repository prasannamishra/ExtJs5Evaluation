Ext.define("App.view.login.Login", {
    extend: 'Ext.container.Container',
    xtype: 'login',

    requires: [
        'App.view.login.LoginController',
        'App.model.login.Login',
        'Ext.form.Panel'
    ],

    /**
     * Way to bind a ViewController to a view
     *
     */
    controller: {
        type: 'login'
    },

    /**
     * Way to bind a ViewModel to a view
     *
     */
    viewModel: {
        links: {
            user: {
                type: 'login.Login',
                create: true
            }
        }
    },

    height: '100%',

    width: '100%',

    closable: false,

    autoShow: true,

    layout: {
        type: 'hbox',
        pack: 'middle',
        align: 'center'
    },



    initComponent: function() {

        var fieldIndicator = '<span style="color:red">*</span>';

        this.items = [{
            xtype: 'form',
            title: 'Please authenticate here',

            // This config allows validation of form fields from model definitions
            modelValidation: true,

            reference: 'form',
            height: 200,
            width: 400,
            bodyPadding: 20,
            glyph: 0xf007,
            items: [{
                xtype: 'textfield',
                name: 'userName',
                fieldLabel: 'Username',
                afterLabelTextTpl: fieldIndicator,
                bind: '{user.userName}',
                msgTarget: 'qtip'
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                afterLabelTextTpl: fieldIndicator,
                bind: '{user.password}',
                msgTarget: 'qtip'
            }, {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: fieldIndicator + 'All fields are mandatory'
            }],

            buttons: [{
                text: 'Login',
                formBind: true,
                glyph: 0xf0a9,
                iconAlign: 'right',
                bind: {
                    disabled: '{form.isValid()}'
                },
                listeners: {
                    // new way to add eventListeners to view parts
                    click: 'onLoginClick'
                }
            }]
        }];

        this.callParent();
    }
});