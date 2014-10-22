describe("Test suite for Registration Tab", function() {

    var registrationView = null,
        registrationViewModel = null,
        registrationViewController = null,
        form = null,
        registrationModel = null;

    beforeEach(function() {
        registrationView = Ext.create('App.view.userRegistration.Registration', {
            renderTo: Ext.getBody()
        });
        registrationViewController = registrationView.getController();
        spyOn(registrationViewController, 'doRegistration');
        registrationViewModel = registrationView.getViewModel();
        registrationModel = Ext.create('App.model.registration.Registration')
    });

    afterEach(function() {
        registrationView.destroy();
        registrationViewController = null;
        registrationViewModel = null;
        registrationModel = null;
    });

    it('RegistrationView and controllers are loaded', function() {
        expect(registrationView != null).toBeTruthy();
        expect(registrationViewController.type).toEqual('registration-controller');
    });


    it('RegistrationView has a anchor layout with 1 children items', function() {
        expect(registrationView.getLayout().config.type).toEqual('anchor');
        expect(registrationView.items.length).toEqual(10);
    });

    it('Test the form for invalid user input', function() {

        registrationModel.set({
            userName: 'as',
            age: 34,
            contactNumber: '9999999999',
            contactAddress: 'adas'
        });

        expect(registrationModel.isValid()).toEqual(false);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(false);


        registrationModel.set({
            userName: 'asadasdasdasdasdasddadasdasdasd',
            age: 34,
            contactNumber: '9999999999',
            contactAddress: 'adas'
        });

        expect(registrationModel.isValid()).toEqual(false);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(false);

        registrationModel.set({
            userName: 'asadas',
            contactNumber: '99999999',
            age: 34,
            contactAddress: 'adas'
        });

        expect(registrationModel.isValid()).toEqual(false);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(false);

        registrationModel.set({
            userName: 'asadas',
            contactNumber: '999999999999',
            age: 34,
            contactAddress: 'adas'
        });

        expect(registrationModel.isValid()).toEqual(false);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(false);

        registrationModel.set({
            userName: 'asadas',
            contactNumber: '9999999999',
            age: 34,
            contactAddress: ''
        });

        expect(registrationModel.isValid()).toEqual(false);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(false);

        registrationModel.set({
            userName: 'asadas',
            contactNumber: '9999999999',
            age: 34,
            contactAddress: 'asd'
        });

        expect(registrationModel.isValid()).toEqual(true);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(true);

    });

    it('if form is valid then submit should happen', function() {
        registrationModel.set({
            userName: 'asadas',
            contactNumber: '9999999999',
            age: 34,
            contactAddress: 'asd'
        });

        expect(registrationModel.isValid()).toEqual(true);
        registrationView.loadRecord(registrationModel);
        registrationViewModel.notify();
        expect(registrationView.isValid()).toEqual(true);
        if (registrationView.isValid()) {
            
            var button = registrationView.down('button[text="Submit"]');
            button.fireEvent('click');

            expect(registrationViewController.doRegistration).toHaveBeenCalled();
            expect(registrationViewController.doRegistration.calls.count()).toEqual(1);

        }
    });
    /* 
     it('viewModel should update the title as and when ViewModel\'s data is changed', function() {

         var spy = jasmine.createSpy('spy');
         registrationViewModel.bind('{name}', spy);
         registrationViewModel.set('name', 'Kali');
         registrationViewModel.notify();
         expect(spy).toHaveBeenCalled();
         expect(spy.calls.mostRecent().args[0]).toBe('Kali');
         expect(registrationView.down('panel').getTitle()).toEqual('Kali');
     });*/

});