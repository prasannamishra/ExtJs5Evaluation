Ext.define('App.view.userRegistration.RegistrationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.registration-controller',
	requires: ['Ext.window.Toast'],
	doRegistration: function() {
		if (this.getView().isValid()) {
			this.getView().reset();
			Ext.toast({
				html: 'Data Saved Successfully',
				title: 'Success',
				closable: false,
				width: 400,
				align: 't'
			});
		} else {
			Ext.toast({
				html: 'Please fill in the mandatory fields',
				title: 'Error',
				closable: false,
				width: 400,
				align: 't'
			});
		}
	}
});