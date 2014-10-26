Ext.define('App.model.registration.Registration', {
    extend: 'App.model.BaseModel',
    requires: ['App.fields.Address'],
    fields: [{
        name: "userName",
        type: 'string',
        validators: [{
            type: 'presence',
            message: 'Please enter a name'
        }, {
            type: 'format',
            matcher: /^[a-zA-Z0-9.\-_$@*!]{3,30}$/,
            message: 'Name must be between 3-30 characters long'
        }]
    }, {
        name: "age",
        type: "string",
        validators: [{
            type: 'presence',
            message: 'Please enter age'
        }, {
            type: 'length',
            max: 3
        }]
    }, {
        name: "contactNumber",
        type: "string",
        validators: [{
            type: 'presence',
            message: 'Please enter contact number'
        }, {
            type: 'format',
            matcher: /^\d+$/i,
            message: 'Please enter valid conatct number'
        }, {
            type: 'length',
            min: 10,
            max: 10
        }]
    }, {
        name: 'contactAddress',
        type: 'address'
    }],
    proxy: {
        url: 'data/userData.json',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});