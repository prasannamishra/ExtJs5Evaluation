/*
 * This is the viewController for Login view
 *
 */
Ext.define('App.view.login.LoginController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.login',

	onLoginClick: function(btn) {
		this.maintainUserSession();
		this.getView().destroy();
		this.redirectTo('mainApp');
	},
	maintainUserSession: function() {
		var userData = null,
			form = this.getView().down('form');

		userData = form.getValues();
		localStorage.setItem('userInfo', JSON.stringify(userData));
	}
});