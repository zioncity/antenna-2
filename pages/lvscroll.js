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
  for (var i = 0; i < 20; i++) {
    itemArray.forEach(function (item) {
      items.push(item);
    });
  }


  WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items)
  });
  WinJS.UI.processAll();
})();