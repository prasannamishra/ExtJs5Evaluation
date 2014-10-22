describe('Test suite for Login page', function() {

	var loginView = null,
		loginController = null,
		loginModel = null,
		loginForm = null;

	beforeEach(function() {
		loginView = Ext.create('App.view.login.Login', {
			renderTo: Ext.getBody()
		});
		loginController = loginView.getController();
		loginModel = Ext.create('App.model.login.Login');
	});

	afterEach(function() {
		loginView.destroy();
		loginController = null;
		loginModel = null;
	});

	it('Login page is loaded', function() {
		expect(loginView).toBeDefined();
	});

	it('Username  and Password fields should not be empty', function() {

		loginModel.set({
			userName: '',
			password: ''
		});
		expect(loginModel.isValid()).toEqual(false);

		loginModel.set({
			userName: 'asdasd',
			password: ''
		});
		expect(loginModel.isValid()).toEqual(false);

		loginModel.set({
			userName: '',
			password: 'asdasdzx'
		});
		expect(loginModel.isValid()).toEqual(false);

		loginModel.set({
			userName: 'asdasd',
			password: 'asdaszx'
		});
		expect(loginModel.isValid()).toEqual(true);

	});

	it('Username should only allow 4 to 6 alphanumeric content and Password should only allow 6 to 10 alphanumeric with _, @ and $', function() {
		loginViewModel = loginView.getViewModel();

		loginForm = loginView.down('form');

		loginModel.set({
			userName: 'asd',
			password: 'asdaas@'
		});

		expect(loginModel.isValid()).toEqual(false);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(false);

		loginModel.set({
			userName: 'asd1234',
			password: 'asdaas$'
		});

		expect(loginModel.isValid()).toEqual(false);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(false);


		loginModel.set({
			userName: 'asd1',
			password: 'asdaas_'
		});

		expect(loginModel.isValid()).toEqual(true);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(true);


		loginModel.set({
			userName: 'asd123',
			password: 'asdaasd'
		});

		expect(loginModel.isValid()).toEqual(true);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(true);

		loginModel.set({
			userName: 'asd1$%',
			password: 'asdaasd'
		});

		expect(loginModel.isValid()).toEqual(false);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(false);

		loginModel.set({
			userName: 'asd1',
			password: 'asdaa'
		});

		expect(loginModel.isValid()).toEqual(false);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(false);
		loginModel.set({
			userName: 'asd1',
			password: 'asdaasd1231'
		});



		expect(loginModel.isValid()).toEqual(false);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(false);

		loginModel.set({
			userName: 'asd1',
			password: 'asdaasd'
		});

		expect(loginModel.isValid()).toEqual(true);
		loginForm.loadRecord(loginModel);
		loginViewModel.notify();
		expect(loginForm.isValid()).toEqual(true);
	});

});