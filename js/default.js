(function () {
  "use strict";
  WinJS.Namespace.define("zion", {
    outputCommand: WinJS.UI.eventHandler(function (ev) {
      var status = document.querySelector(".status");
      var command = ev.currentTarget;
      if (command.winControl) {
        var label = command.winControl.label || command.winControl.icon || "button";
        var section = command.winControl.section || "";
        var msg = section + " command " + label + " was pressed";
        status.textContent = msg;
      }
    }),
    //
    antennaSettingsCommand: WinJS.UI.eventHandler(function (ev) {
      var dia = document.querySelector("#zion-antenna-settings-dialog").winControl;
      var cont = dia.element.querySelector("#zion-antenna-settings-dialog-content");
      cont.innerHTML = "";      
      WinJS.UI.Pages.render("/pages/antennasettings/pageantennasettings.html", cont).done(function () {
        dia.show();
      });

    }),
    batchAddEquipCommand: WinJS.UI.eventHandler(function (ev) {
/*      var host = document.querySelector("#zion-dialog-host");
      WinJS.Utilities.removeClass(host, "zion-display-none");
      WinJS.Utilities.empty(host);
      var dia = new WinJS.UI.ContentDialog(null, {
        title: '批量添加监测子系统',
        primaryCommandText: '确定',
        secondaryCommandText: '取消'
      });
      var cont = dia.element.querySelector(".win-contentdialog-content");
      host.appendChild(dia.element);
      WinJS.UI.Fragments.renderCopy("/fragments/batchadddsequip.html", cont).done(function () {
        dia.show();
      });
*/
      var host = document.querySelector(".zion-page-rendered-control");
      WinJS.Utilities.empty(host);
      WinJS.UI.Pages.render("/pages/batchadddsequip/batchadddsequip.html", host).done(function () { });
    }),
    addEquipmentCommand: WinJS.UI.eventHandler(function (ev) {
/*      var dia = document.querySelector("#zion-antenna-settings-dialog").winControl;
      var cont = dia.element.querySelector("#zion-antenna-settings-dialog-content");
      cont.innerHTML = "";
      
      WinJS.UI.Pages.render("/pages/addlowerequip/pageaddingdownstreamequip.html", cont).done(function () {
        dia.show();
      });
      */
      var renderHost = document.querySelector(".zion-page-rendered-control");
      WinJS.UI.Pages.render("/pages/adddownstreamequip/pageaddingdownstreamequip.html", renderHost).done(function () { });
    })
  });
})();
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    if (WinJS.Utilities.hasWinRT) {
      var activation = Windows.ApplicationModel.Activation;
      app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
          if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
            // TODO: This application has been newly launched. Initialize
            // your application here.
          } else {
            // TODO: This application has been reactivated from suspension.
            // Restore application state here.
          }
          //            args.setPromise(WinJS.UI.processAll());
//          WinJS.UI.processAll().done(function () {
//          });
        }
      };

      app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
      };
    } else {
      console.log("you should shee here");
      app.onready = function () {
      };
    }

    app.addEventListener("ready", function () {
      WinJS.UI.processAll().done(function () {
//        var splitView = document.querySelector(".splitView").winControl;
//        new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
      });

      var renderHost = document.querySelector(".zion-page-rendered-control");
//      WinJS.UI.Pages.render("/pages/ctrl/listview.html", renderHost).done(function () {      });
    }, false);
    app.start();
})();
