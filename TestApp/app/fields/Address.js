Ext.define('App.fields.Address', {
	extend: 'Ext.data.field.String',
	alias: 'data.field.address',
	validators: [{
		type: 'presence',
		message: 'Please enter Address'
	}, {
		type: 'length',
		max: 20,
		min: 1
	}]
});