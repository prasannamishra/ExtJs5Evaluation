xdescribe("Test for association in Ext Js 5", function() {

	it("Ext Js 5 is already loaded", function() {
		expect(Ext).toBeDefined();
		expect(Ext.getVersion().major).toEqual(5);
	});

	Ext.define('RegistrationModel', {
		extend: 'Ext.data.Model',
		idProperty: 'userName',
		fields: ['userName', 'contactNo'],
		schema: {
			namespace: ''
		}
	});

	Ext.define('OrderModel', {
		extend: 'Ext.data.Model',
		idProperty: 'orderId',
		fields: [{
			name: 'userId',
			reference: 'Registration'
		}, 'orderId', 'shippingDate']
	});

	var registrationStore = null,
		orderStore = null;

	beforeEach(function() {
		registrationStore = Ext.create('Ext.data.Store', {
			model: 'RegistrationModel',
			data: [{
				userName: 'AAAA',
				contactNo: 1111,
				orders: [{
					orderId: 1,
					shippingDate: '1'
				}]
			}, {
				userName: 'BBBB',
				contactNo: 2222,
				orders: [{
					orderId: 2,
					shippingDate: '1'
				}]
			}]
		});

		orderStore = Ext.create('Ext.data.Store', {
			model: 'orderModel'
		});
	});

	afterEach(function() {
		registrationStore = null;
		orderStore = null;
	});

	it("Registration Model is loaded", function() {
		expect(registrationStore).toBeDefined();
	});

	it("Order Model is loaded", function() {
		expect(orderStore).toBeDefined();

	});

});