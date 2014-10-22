Ext.define('App.store.sampleGrid.SampleGrid', {
    extend: 'Ext.data.Store',

    storeId: 'applicantStore',

    fields: ['applicant', 'part1', 'part2', 'part3', 'part4', {
        name: 'scored',
        calculate: function(data) {
            return (data.part1 + data.part2 + data.part3 + data.part4) / (4 * 100);
        }
    }, {
        name: 'total',
        calculate: function(data) {
            return (data.part1 + data.part2 + data.part3 + data.part4) / 4;
        }
    }],

    data: [{
        applicant: 'Jan',
        part1: 70,
        part2: 56,
        part3: 65,
        part4: 84
    }, {
        applicant: 'Yen',
        part1: 90,
        part2: 68,
        part3: 86,
        part4: 97
    }, {
        applicant: 'Man',
        part1: 45,
        part2: 70,
        part3: 43,
        part4: 73
    }, {
        applicant: 'Shan',
        part1: 95,
        part2: 92,
        part3: 86,
        part4: 100
    }, {
        applicant: 'Dan',
        part1: 69,
        part2: 72,
        part3: 85,
        part4: 93
    }, {
        applicant: 'Ban',
        part1: 37,
        part2: 47,
        part3: 45,
        part4: 53
    }]

});