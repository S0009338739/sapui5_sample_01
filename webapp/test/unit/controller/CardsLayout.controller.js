/*global QUnit*/

sap.ui.define([
	"sap/ui/integration/sample/CardsLayout/controller/CardsLayout.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CardsLayout Controller");

	QUnit.test("I should test the CardsLayout controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});