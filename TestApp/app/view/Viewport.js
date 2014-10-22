Ext.define('App.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'border',
	initComponent: function() {
		this.items = [{
			region: 'center',
			xtype: 'container',
			itemId: 'centerContainer',
			cls: 'whiteBg',
			height: '100%',
			width: '100%',
			layout: 'fit'

		}];
		this.callParent();
	}
});