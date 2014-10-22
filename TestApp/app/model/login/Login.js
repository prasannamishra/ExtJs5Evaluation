Ext.define('App.model.login.Login', {
	extend: 'App.model.BaseModel',
	alias: 'model.Login',
	
	fields: [{
		name: 'userName',
		validators: [{
			type: 'presence',
			message: 'Please enter Username'
		}, {
			type: 'length',
			emptyMessage: 'Please enter Username',
			bothMessage: 'Length of input must be between 4 to 6',
			min: 4,
			max: 6
		}, {
			type: 'format',
			matcher: /^[a-zA-Z0-9]*$/,
			message: 'Special characters are not allowed.'
		}]
	}, {
		name: 'password',
		validators: [{
			type: 'presence',
			message: 'Please enter Password'
		}, {
			type: 'length',
			emptyMessage: 'Please enter Password',
			bothMessage: 'Length of input must be between 6 to 10',
			min: 6,
			max: 10
		}, {
			type: 'format',
			matcher: /^[a-zA-Z0-9_@$]*$/,
			message: 'Special characters are not allowed except _, @ and &'
		}]

	}]
});