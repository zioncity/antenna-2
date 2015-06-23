(function () {
  "use strict";
  WinJS.Namespace.define("Sample", {
    outputCommand: WinJS.UI.eventHandler(function (ev) {
      var status = document.querySelector(".status");
      var command = ev.currentTarget;
      if (command.winControl) {
        var label = command.winControl.label || command.winControl.icon || "button";
        var section = command.winControl.section || "";
        var msg = section + " command " + label + " was pressed";
        status.textContent = msg;
      }
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
          WinJS.UI.processAll().done(function () {
            var splitView = document.querySelector(".splitView").winControl;
            new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
          });
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
        WinJS.UI.processAll();
      };
    }
    function basicFragmentLoad() {
      resetOutput();

      // Read fragment from the HTML file and load it into the div.  Note
      // Fragments.renderCopy() returns a promise which a done() statement
      // is attached to in order to perform additional processing or handle errors
      // that may have occurred during the renderCopy() action.
      WinJS.UI.Fragments.renderCopy("/page-toolbar.html", basicFragmentLoadDiv)
          .done(
              function () {
                log("successfully loaded fragment", "sample", "status");
              },
              function (error) {
                log("error loading fragment: " + error, "sample", "error");
              }
          );
    }
    function resetOutput() {
      basicFragmentLoadDiv.innerHTML = "";
    }

    function log(msg) {
      document.getElementById("status").innerHTML += msg + "<br/>";
    };
    app.addEventListener("ready", function () {
      console.log("you should shee this");
      var basicFragmentLoadDiv = document.querySelector("#basicFragmentLoadDiv");
      WinJS.Utilities.query("#basicFragmentLoadButton", document).listen("click", basicFragmentLoad);

      var renderHost = document.querySelector(".renderingPageControls-renderedControl");
      WinJS.UI.Pages.render("/toolbar.html", renderHost).done();
    }, false);
    app.start();
})();
