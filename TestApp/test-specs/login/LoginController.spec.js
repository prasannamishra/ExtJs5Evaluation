Ext.require(['App.view.login.LoginController', 'App.view.login.Login']);

describe("Test Suite for LoginViewController", function() {
	var controller, view;
	it('Ext Js SDK is loaded', function() {
		expect(Ext).toBeDefined();
		expect(Ext.getVersion()).toBeTruthy();
		expect(Ext.getVersion().major).toEqual(5);
	});

	it('Application is loaded', function() {
		expect(App).toBeDefined();
	});
	beforeEach(function() {

		controller = Ext.create('App.view.login.LoginController');

		spyOn(controller, 'onLoginClick');
		controller.init();

		view = Ext.create('App.view.login.Login', {
			renderTo: Ext.getBody(),
			controller: controller
		});
	});

	afterEach(function() {
		view.destroy();
		controller = null;
	});

	it("should be defined", function() {
		expect(controller).not.toBeNull();
	});

	it("should call save when save button is clicked", function() {
		var button = view.down('button[text="Login"]');
		button.fireEvent('click');

		expect(controller.onLoginClick).toHaveBeenCalled();
		expect(controller.onLoginClick.calls.count()).toEqual(1);
	});

});