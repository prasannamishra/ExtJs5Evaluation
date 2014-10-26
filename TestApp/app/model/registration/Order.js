Ext.define('App.model.registration.Order', {
	extend: 'App.model.BaseModel',
	requires: ['App.model.registration.Registration'],
	fields: [{
		name: 'userId',
		reference: {
			parent: 'registration.Registration'
		}
	}, 'orderNo', 'noOfItem', 'dateOfDelivery']/*,
	proxy: {
		url: 'data/userData.json',
		type: 'ajax',
		reader: {
			type: 'json',
			rootProperty: 'users'
		}
	}*/
});