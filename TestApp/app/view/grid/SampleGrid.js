Ext.define('App.view.grid.SampleGrid', {
    extend: 'Ext.panel.Panel',

    requires: [
        'App.store.sampleGrid.SampleGrid',
        'Ext.grid.column.Action',
        'Ext.ProgressBarWidget',
        'Ext.slider.Widget'
    ],

    xtype: 'app-sample-grid',

    title: 'Sample Grid',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1
    },
    glyph: 0xf00a,
    initComponent: function() {
        this.myDataStore = Ext.create('App.store.sampleGrid.SampleGrid');

        var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {});

        this.items = [{
            xtype: 'cartesian',
            frame: true,
            width: '100%',
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            flipXY: true,
            store: this.myDataStore,
            insetPadding: 40,
            sprites: [{
                type: 'text',
                text: 'Applicant with Performance',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 35 // the sprite y position
            }],
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: 'total',
                renderer: function(v) {
                    return v.toFixed(0) + '%';
                },
                grid: true
            }, {
                type: 'category',
                position: 'left',
                fields: 'applicant',
                grid: true
            }],
            series: [{
                type: 'bar',
                xField: 'applicant',
                yField: 'total',
                style: {
                    opacity: 0.80,
                    minGapWidth: 10
                },
                highlight: {
                    fillStyle: 'rgba(249, 204, 157, 1.0)',
                    strokeStyle: 'black',
                    radius: 10
                },
                label: {
                    field: 'total',
                    display: 'insideEnd'
                },
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('applicant') + ' Secured ' + storeItem.get('total') + '%');
                    }
                }

            }]
        }, {

            xtype: 'gridpanel',
            frame: true,
            title: 'Change the slider values to see chart values changing',
            plugins: [cellEditPlugin],
            glyph: 0xf044,
            columns: {
                defaults: {
                    sortable: false,
                    menuDisabled: true
                },
                items: [{
                    text: 'Applicant',
                    dataIndex: 'applicant'
                }, {
                    text: 'Part1',
                    xtype: 'widgetcolumn',
                    width: 120,
                    dataIndex: 'part1',
                    widget: {
                        xtype: 'sliderwidget',
                        minValue: 0,
                        maxValue: 100,
                        listeners: {
                            change: function(slider, value) {

                                if (slider.getWidgetRecord) {
                                    var rec = slider.getWidgetRecord();
                                    if (rec) {
                                        rec.set('part1', value);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    text: 'Part2',
                    xtype: 'widgetcolumn',
                    width: 120,
                    dataIndex: 'part2',
                    widget: {
                        xtype: 'sliderwidget',
                        minValue: 0,
                        maxValue: 100,
                        listeners: {
                            change: function(slider, value) {
                                if (slider.getWidgetRecord) {
                                    var rec = slider.getWidgetRecord();
                                    if (rec) {
                                        rec.set('part2', value);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    text: 'part3',
                    dataIndex: 'part3'
                }, {
                    text: 'part4',
                    dataIndex: 'part4'
                }, {
                    text: 'Progress',
                    dataIndex: 'scored',
                    xtype: 'widgetcolumn',
                    widget: {
                        xtype: 'progressbarwidget',
                        textTpl: [
                            '{percent}%'
                        ]
                    }

                }]
            },
            store: this.myDataStore,
            width: '50%'
        }];
        this.callParent();
    }
});