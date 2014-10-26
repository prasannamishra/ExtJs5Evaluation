Ext.define('App.store.BreadCrumb', {
	extend: 'Ext.data.TreeStore',
	fields: ['text', 'xtype', 'position'],
	defaultRootText: 'Sample Pages',
	root: {
		expanded: true,
		children: [{
			text: "Contact",
			xtype: 'app-registration',
			position: 0,
			leaf: true
		}, {
			text: "Sample Grid",
			xtype: 'app-sample-grid',
			position: 1,
			leaf: true

		}, {
			text: "Association Example",
			xtype: 'app-association',
			position: 2,
			leaf: true
		}]
	}
});