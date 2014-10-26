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
    },
    breadcrumbSelectionChange: function(bc, node) {
        debugger;
        var xtype = null,
            position = null;
        if (node.id !== 'root') {
            var selectedNode = bc.getSelection();
            xtype = selectedNode.data.xtype;
            position = selectedNode.data.position;
            if (xtype) {
                this.getView().down('tabpanel').setActiveTab(position);
            }
        } else {
            this.getView().down('tabpanel').setActiveTab(0);
        }

    },
    mainPanelTabChange: function(tabpanel, newCard, oldCard) {
        debugger;
        var breadcrumb = this.getView().down('breadcrumb'),
            store = breadcrumb.getStore();
        var rec = store.findRecord('xtype', newCard.xtype);
        breadcrumb.setSelection(rec);
    }
});