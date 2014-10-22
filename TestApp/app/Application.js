Ext.define('App.Application', {
	extend: 'Ext.app.Application',

	name: 'App',

	defaultToken: 'login',

	glyphFontFamily: 'FontAwesome',

	controllers: ['RouteController'],

	listen: {
		controller: {
			'#': {
				unmatchedroute: 'onUnmatchedRoute'
			}
		}
	},

	onUnmatchedRoute: function(hash) {
		this.redirectTo('login');
	}

});