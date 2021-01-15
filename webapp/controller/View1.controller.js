sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function(Controller, MessageBox, JSONModel) {
	"use strict";

	return Controller.extend("Testapp4.controller.View1", {

		onAddItems: function(oEvent) {
			var oEntry = {};
			oEntry.Ebeln = this.getView().byId("inpdoc").getValue();
			oEntry.Ebelp = this.getView().byId("inppos").getValue();
			this.setToDb(oEntry);

		},

		setToDb: function(oEntry) {
			var oModel = this.getView().getModel();

			oModel.create("/DocSet", oEntry, null, function() {

				MessageBox.show("Запись успешно добавленна");

			}, function() {

				MessageBox().show("Ошибка добавления записи");
			});
		}
	});
});