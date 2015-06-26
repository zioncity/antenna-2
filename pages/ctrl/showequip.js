(function () {
/*
 * 监测子系统编号
省份名
市县名
站点名称
GPRS卡号
经度
纬度
开通状态
连接状态

 */
  var itemArray = [
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" },
    { name: "海龙北", province: "山西", city: "太原", no: "19610051780", gprs: "19610051780", lng: 0, lat: 10, location: "海淀中关村海龙北", activate: "开通", online: "离线" }
  ];
  var items = generateItems(2);

  function generateItems(numberOfTimes) {
    // Generate items by looping through itemArray by the numberOfTimes given
    var items = [];
    for (var i = 0; i < numberOfTimes; i++) {
      itemArray.forEach(function (item) {
        items.push(item);
      });
    }

    return items;
  };
  WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items),
    footerVisibility: WinJS.UI.eventHandler(function (ev) {
      var visible = ev.detail.visible;
      if (visible) {
        WinJS.Utilities.removeClass(Sample.ListView.progress, "hide");
        WinJS.UI.Animation.fadeIn(Sample.ListView.status);

        // Simulate XHR by just setting a timeout and updating the observable binding list
        WinJS.Promise.timeout(1000).then(function () {
          var items = generateItems(2);
          items.forEach(function (item) {
            Sample.ListView.data.push(item);
          });
        });
      } else {
        WinJS.Utilities.addClass(Sample.ListView.progress, "hide");
      }
    })
  });

  WinJS.UI.Pages.define("/pages/ctrl/showequip.html", {
    ready: function (element, options) {
      // Cache ListView and Header elements
      Sample.ListView.listView = document.querySelector(".listView");
      Sample.ListView.header = document.querySelector(".header");
      Sample.ListView.progress = document.querySelector(".footer .progress");
      Sample.ListView.status = document.querySelector(".footer .status");
    },

    unload: function () {
    },

    updateLayout: function (element) {
    }
  });

})();