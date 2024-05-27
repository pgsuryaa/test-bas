/*global QUnit*/

sap.ui.define([
	"compgsuryaaprofile/pgsuryaa/controller/Object.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Object Controller");

	QUnit.test("I should test the Object controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
