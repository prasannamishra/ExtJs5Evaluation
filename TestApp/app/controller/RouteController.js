Ext.define('App.controller.RouteController', {
	extend: 'Ext.app.Controller',

	views: ['login.Login', 'main.Main'],

	requires: ['App.view.login.LoginController'],

	refs: [{
		ref: 'centerContainer',
		selector: 'viewport > container[itemId=centerContainer]'
	}],

	routes: {
		'login': {
			before: 'onBeforeUserLogout',
			action: 'doLogin'
		},
		'mainApp': {
			before: 'checkUserSession',
			action: 'loadMainApplication'
		}
	},

	doLogin: function() {
		this.addWidgetToCenterContainer('login');
	},

	onBeforeUserLogout: function(action) {
		debugger;
		localStorage.setItem('userInfo', null);
		this.clearCenterContent();
		action.resume();
	},

	clearCenterContent: function() {
		this.getCenterContainer().removeAll();
	},
	loadMainApplication: function() {
		console.log('inside the loaded view');
		this.addWidgetToCenterContainer('app-main');
	},

	addWidgetToCenterContainer: function(xtype) {
		var newItem = null;
		newItem = Ext.widget(xtype);
		this.clearCenterContent();
		this.getCenterContainer().add(newItem);
	},

	checkUserSession: function(action) {
		try {
			var userInfo = JSON.parse(localStorage.getItem('userInfo'));
			if (userInfo) {
				action.resume();
			} else {
				action.stop();
				this.redirectTo('login');
			}

		} catch (e) {
			console.log('Error in parsing user info in checkUserSession()');
			action.stop();
		}
	}
});