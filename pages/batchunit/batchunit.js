
(function () {
  "use strict";
  WinJS.Namespace.define("zion", {
    provinces: new WinJS.Binding.List([
        { id: 1, description: "北京(1)" },
        { id: 2, description: "上海(2)" },
        { id: 3, description: "重庆(3)" },
        { id: 4, description: "天津(4)" },
        { id: 5, description: "东北(5)" },
        { id: 6, description: "西南(6)" },
        { id: 7, description: "广州(7)" },
        { id: 8, description: "江苏(8)" }
    ]),
    cities: new WinJS.Binding.List([
        { id: 1, description: "北京(1)" },
        { id: 2, description: "南京(2)" },
        { id: 3, description: "西安(3)" },
        { id: 4, description: "沈阳(4)" },
        { id: 5, description: "开封(5)" }
    ])
  });
  WinJS.UI.Pages.define("/pages/batchunit/batchunit.html", {
    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    ready: function (element, options) {
    },

    unload: function () {
    },

    updateLayout: function (element) {
    }
  });
})();
