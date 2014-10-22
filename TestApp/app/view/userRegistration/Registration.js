Ext.define('App.view.userRegistration.Registration', {
    extend: 'Ext.form.Panel',

    xtype: 'app-registration',
    requires: ['App.view.userRegistration.RegistrationController', 'App.model.registration.Registration'],
    title: 'Contact',
    reference: 'registration',
    padding: 20,

    layout: {
        type: 'anchor',
        pack: 'center',
        align: 'middle'
    },
    glyph: 0xf0f0,

    modelValidation: true,
    controller: 'registration-controller',

    viewModel: {
        data: {
            sample: 'as'
        },
        links: {
            cont: {
                type: 'registration.Registration',
                create: true
            }
        },
        formulas: {
            calculatedAge: function(get) {
                var today = new Date();
                var birthDate = get('birthDate');
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            },
            getPermenantAddress: function(get) {
                var addressCheck = get('chkBindAddress');
                if (addressCheck) {
                    return get('cont.contactAddress')
                }
            }
        }
    },
    initComponent: function() {

        var fieldIndicator = '<span style="color:red;font-size: x-large;">*</span>';
        this.defaults = {
            labelAlign: 'right',
            labelWidth: 135
        };
        this.items = [{
            xtype: 'textfield',
            fieldLabel: "Name",
            name:'userName',
            bind: '{cont.userName}',
            afterLabelTextTpl: fieldIndicator
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'birthDate',
            maxValue: new Date(),
            reference: 'birthDate',
            bind: '{birthDate}'
        }, {
            xtype: 'numberfield',
            name: 'age',
            fieldLabel: 'Age',
            readOnly: true,
            bind: '{calculatedAge}'
        }, {
            xtype: 'numberfield',
            fieldLabel: "Mobile Number",
            name:'contactNumber',
            hideTrigger: true,
            bind: '{cont.contactNumber}',
            afterLabelTextTpl: fieldIndicator,
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Gender',
            defaultType: 'radiofield',
            layout: 'hbox',
            items: [{
                boxLabel: 'Male',
                name: 'Gender',
                inputValue: 'm',
                id: 'radio1',
                width: 100
            }, {
                boxLabel: 'Female',
                name: 'Gender',
                inputValue: 'f',
                id: 'radio2',
                width: 100
            }]

        }, {
            xtype: 'filefield',
            name: 'photo',
            fieldLabel: 'Photo',
            msgTarget: 'side',
            anchor: '50%',
            buttonText: 'Select Photo...'
        }, {
            xtype: 'textareafield',
            grow: false,
            name: 'contactAddress',
            fieldLabel: 'Current Address',
            reference: 'txtCurAddress',
            anchor: '50%',
            bind: '{cont.contactAddress}',
            afterLabelTextTpl: fieldIndicator,
        }, {
            xtype: "checkboxfield",
            boxLabel: "Same as Current Address",
            reference: "chkAddress",
            hideEmptyLabel: false,
            bind: '{chkBindAddress}'
        }, {
            xtype: 'textareafield',
            grow: false,
            name: 'permenantAddress',
            fieldLabel: 'Permenant Address',
            reference: 'txtperAddress',
            anchor: '50%',
            bind: {
                disabled: '{chkAddress.checked}',
                value: '{getPermenantAddress}'
            }
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: fieldIndicator + ' Fields are mandatory'
        }];

        this.buttons = [{
            text: 'Submit',
            listeners: {
                click: 'doRegistration'
            },
            formBind: true,
            glyph: 0xf138,
            iconAlign: 'right'

        }];

        this.callParent();
    }
});