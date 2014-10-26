Ext.define('App.view.association.Association', {
	extend: 'Ext.panel.Panel',
	requires: ['App.model.registration.Registration', 'App.model.registration.Order'],
	xtype: 'app-association',
	title: 'Association Example',
	glyph: 0xf0c1,
	viewModel: {
		stores: {
			users: {
				model: 'registration.Registration',
				//model: 'registration.Order',
				autoLoad: true
			}
		}
	},
	initComponent: function() {
		this.layout = {
			type: 'hbox',
			align: 'stretch',
			pack: 'center'
		};

		this.items = [{
			xtype: 'grid',
			title: 'User Grid',
			reference: 'userGrid',
			bind: '{users}',
			height: 300,
			flex: 1,
			frame: true,
			columns: [{
				header: 'Name',
				dataIndex: 'userName',
				flex: 1
			}, {
				header: 'Age',
				dataIndex: 'age',
				flex: 1
			}, {
				header: 'Contact Number',
				dataIndex: 'contactNumber',
				flex: 1
			}]
		}, {
			xtype: 'grid',
			title: 'Related Orders',
			height: 300,
			flex: 1,
			frame: true,
			columns: [{
				header: 'Order No',
				dataIndex: 'orderNo',
				flex: 1
			}, {
				header: 'No of Item',
				dataIndex: 'noOfItem',
				flex: 1
			}, {
				header: 'Date of Delivery',
				dataIndex: 'dateOfDelivery',
				xtype: 'datecolumn',
				format: 'd-m-Y',
				flex: 1
			}],
			bind: '{userGrid.selection.orders}'
		}];

		this.callParent();
	}
});