// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var itemArray = [
            { title: "Marvelous Mint", text: "Gelato" },
            { title: "Succulent Strawberry", text: "Sorbet" },
            { title: "Banana Blast", text: "Low-fat frozen yogurt" },
            { title: "Lavish Lemon Ice", text: "Sorbet" },
            { title: "Creamy Orange", text: "Sorbet" },
            { title: "Very Vanilla", text: "Ice Cream" },
            { title: "Banana Blast", text: "Low-fat frozen yogurt" },
            { title: "Lavish Lemon Ice", text: "Sorbet" }
    ];

    var items = [];

  // Generate 160 items
    for (var i = 0; i < 16; i++) {
      itemArray.forEach(function (item) {
        items.push(item);
      });
    }


    WinJS.Namespace.define("Sample.ListView", {
      data: new WinJS.Binding.List(items)
    });
    var toolbar_ctor = WinJS.UI.Pages.define("/toolbar.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
    WinJS.Namespace.define("Sample", {
      ToolbarControl : toolbar_ctor
    });
})();
