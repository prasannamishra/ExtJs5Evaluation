Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    handleLogoutResponse: function(btn) {
        debugger;
        var me = this;
        if (btn == 'yes') {
            me.redirectTo('login');
        } else {
            return false;
        }
    },
    doLogOut: function(choice) {

        Ext.MessageBox.show({
            title: 'Alert',
            msg: 'Do you want to logout ?',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            closable: false,
            fn: this.handleLogoutResponse
        });
    }
});