(function () {
  "use strict";
  WinJS.Namespace.define("zion", {
    showAttitudeCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    showAlarmCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    reportCmd: WinJS.UI.eventHandler(function (ev) {

    }),

    showEquipCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    addUnitCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    batchUnitCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    showUnitCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    showRoleCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    showJournalCmd: WinJS.UI.eventHandler(function (ev) {

    }),
    showStatisCmd: WinJS.UI.eventHandler(function (ev) {

    }),

    //
    settingsCmd: WinJS.UI.eventHandler(function (ev) {
      var dia = document.querySelector("#zion-antenna-settings-dialog");
      if (!dia) return;
      var cont = dia.querySelector("#zion-antenna-settings-dialog-content");
      //cont.innerHTML = "";      
      WinJS.Utilities.empty(cont);
      WinJS.UI.Pages.render("/pages/settings/settings.html", cont).done(function () {
        dia.winControl.show();
      });

    }),
    batchEquipCmd: WinJS.UI.eventHandler(function (ev) {
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
      WinJS.UI.Fragments.renderCopy("/fragments/batchequip.html", cont).done(function () {
        dia.show();
      });
*/
      var host = document.querySelector(".zion-page-rendered-control");
      WinJS.Utilities.empty(host);
      WinJS.UI.Pages.render("/pages/batchequip/batchequip.html", host).done(function () { });
    }),
    changePasswdCmd: WinJS.UI.eventHandler(function (ev) {
      var host = document.querySelector(".zion-page-rendered-control");
      WinJS.Utilities.empty(host);
      WinJS.UI.Pages.render("/pages/showequip/showequip.html", host).done(function () { });
    }),

    addEquipCmd: WinJS.UI.eventHandler(function (ev) {
      var host = document.querySelector(".zion-page-rendered-control");
      WinJS.Utilities.empty(host);
      WinJS.UI.Pages.render("/pages/addequip/addequip.html", host).done(function () { });
    }),

    select_field_1: WinJS.UI.eventHandler(function (e) {
      var menu_item = e.target;
      var menu = e.target.parentElement.winControl;
      var to = menu._target_item.querySelector("#zion-field-target");
      to.textContent = menu_item.textContent;
    })
  });
})();

(function () {
    "use strict";    
    var app = WinJS.Application;
    function when_resize_window(ev) {
      var main = document.querySelector("#zion-stretch");
      if (!main) return;
      
    }

    if (WinJS.Utilities.hasWinRT) {
      var activation = Windows.ApplicationModel.Activation;
      app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
          if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

          } else {

          }
        }
      };

      app.oncheckpoint = function (args) {

      };
    } else {
      console.log("you should shee here");
      app.onready = function () {      };
    }

    app.addEventListener("ready", function () {
      WinJS.UI.processAll().done(function () {      });
      window.addEventListener("resize", when_resize_window);
    }, false);
    app.start();
})();
