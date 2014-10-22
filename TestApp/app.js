Ext.Loader.setConfig({
	enabled: true

});

Ext.application({
	name: 'App',

	extend: 'App.Application',

	//autoCreateViewport: 'App.view.login.Login'
	autoCreateViewport: true


});