sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend(
    "student28.sap.training.dynamicpage.controller.Overview",
    {
      onInit: function () {
        this._oList = this.byId("idCarrierList");

        this.getView().addEventDelegate({
          onBeforeFirstShow: function () {
            this.getOwnerComponent().oListSelector.setBoundMasterList(
              this._oList
            );
          }.bind(this),
        });

        this.getRouter()
          .getRoute("Overview")
          .attachPatternMatched(this._onMasterMatched, this);

        this.getRouter().attachBypassed(this.onBypassed, this);
      },

      onBypassed: function () {
        this._oList.removeSelections(true);
      },

      onSelectionChange: function (oEvent) {
        var oItem, oCtx, sCarrid;
        oItem = oEvent.getParameter("listItem");
        oCtx = oItem.getBindingContext();
        sCarrid = oCtx.getProperty("Carrid");
        this._showCarrierDetails(sCarrid);
      },

      getRouter: function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
      },

      onPress: function (oEvent) {
        var oItem, oCtx, sCarrid;
        oItem = oEvent.getSource();
        oCtx = oItem.getBindingContext();
        sCarrid = oCtx.getProperty("Carrid");
        this._showCarrierDetails(sCarrid);
      },

      _showCarrierDetails: function (sCarrid) {
        var oRouter = this.getRouter();
        oRouter.navTo(
          "Carrier",
          {
            carrierId: sCarrid,
          },
          false /*with history*/
        );
      },

      _onMasterMatched: function () {
        this.getOwnerComponent()
          .getModel("appView")
          .setProperty("/layout", "OneColumn");
      },
    }
  );
});
