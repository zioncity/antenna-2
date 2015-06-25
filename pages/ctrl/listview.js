// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var itemArray = [
            { title: "", name: "行政省" },
            { title: "", name: "市县" },
            { title: "", name: "名称" },
            { title: "", name: "编号" },
            { title: "", name: "Sorbet" },
            { title: "", name: "Ice Cream" },
            { title: "", name: "Low-fat fr" },
            { title: "", name: "Sorbet" }
    ];

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
          itemArray[i].title = to.textContent;
        }

      })
    });

    WinJS.Namespace.define("Sample.ListView", {
      data: new WinJS.Binding.List(itemArray)
    });
    WinJS.UI.Pages.define("/pages/ctrl/listview.html", {
      // This function is called whenever a user navigates to this page. It
      // populates the page elements with the app's data.
      ready: function (element, options) {
        // TODO: Initialize the page here.

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
