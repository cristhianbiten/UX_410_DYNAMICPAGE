sap.ui.define(
  ["sap/ui/core/mvc/Controller", 
  "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend(
      "student28.sap.training.dynamicpage.controller.App",
      {
        onInit() {
          this.getView().addStyleClass(
            this.getOwnerComponent().getContentDensityClass()
          );

          var oViewModel = new JSONModel({
            busy: true,
            delay: 0,
            layout: "OneColumn",
            previousLayout: "",
            actionButtonsInfo: {
              midColumn: {
                fullScreen: false,
              },
            },
          });
          this.getOwnerComponent().setModel(oViewModel, "appView");
        },
      }

    );
  }
);
