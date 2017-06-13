Ext.define('TrackIT.view.admin.utilizador.MostraFuncionarioController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.funcionariocont',

    onClickApagarFuncionario: function()
    {
        myRequest1 = Ext.Ajax.request({
            url: 'app/php/Apagar/apagarfuncionario.php',
            method: 'POST',
            success: function(response, opts) {
                Ext.MessageBox.alert('title','Sucesso');
                Ext.getCmp('gridfuncionarios').getStore().load();
            }
        })
    },
    onClickEditaFuncionario: function()
    {
        var myWin2 = Ext.create("Ext.window.Window", {
            title: 'Funcionário',
            modal: true,
            // html: '<iframe src="app/php/mostraTicket.php" width="100%" height="100%" ></iframe>',
            width: 500,
            height: 345,
            items: [{
                xtype: 'editautilizador'
            }]
        });
        myWin2.show();
    }

});