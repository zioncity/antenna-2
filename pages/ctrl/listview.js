// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var itemArray = [
            { title: "Marvelous Mint", name: "行政省" },
            { title: "Succulent Strawberry", name: "市县" },
            { title: "Banana Blast", name: "名称" },
            { title: "Lavish Lemon Ice", name: "编号" },
            { title: "Creamy Orange", name: "Sorbet" },
            { title: "Very Vanilla", name: "Ice Cream" },
            { title: "Banana Blast", name: "Low-fat fr" },
            { title: "Lavish Lemon Ice", name: "Sorbet" }
    ];

    var items = [];

    itemArray.forEach(function (item) {
      items.push(WinJS.Binding.as(item));
    });
    function confirmOrder() {
    }

    WinJS.Namespace.define("zion", {
      on_field_selected: WinJS.UI.eventHandler(function (e) {
        var btn = e.target;
        var parent = e.target.parentNode;  //zion-fields-item
        var menu = document.querySelector("#zion-batch-field-menu").winControl;
        menu._target_item = parent;
        menu.show(parent, "bottom", "right");
      }),
      confirm_fields_map: WinJS.UI.eventHandler(function (e) {
        var lv = document.querySelector("#zion-fields");
        var items = lv.getElementsByClassName("zion-fields-item");
        for (var i = 0; i < items.length; i++) {
          var item = items.item(i);
          var from = item.querySelector("#zion-field-origin");
          var to = item.querySelector("#zion-field-target");
          console.log(from.textContent, to.textContent);
        }

      })
    });

    WinJS.Namespace.define("Sample.ListView", {
      data: new WinJS.Binding.List(items)
    });
    WinJS.UI.Pages.define("/pages/ctrl/listview.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
          // TODO: Initialize the page here.
          //var btn = element.querySelector("#zion-show-menu");
          //btn.onclick = zion.on_field_selected;
          //confirmButton
          document.querySelector("#confirmButton").addEventListener("click", confirmOrder, false);

          var lv = element.querySelector("#zion-fields");
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

})();
