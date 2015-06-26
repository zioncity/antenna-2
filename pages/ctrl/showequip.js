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
  var items = [];

  // Generate 16 items
  for (var i = 0; i < 2; i++) {
    itemArray.forEach(function (item) {
      items.push(item);
    });
  }
  WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items)
  });

  WinJS.UI.Pages.define("/pages/ctrl/showequip.html", {
    ready: function (element, options) {
    },

    unload: function () {
    },

    updateLayout: function (element) {
    }
  });

})();