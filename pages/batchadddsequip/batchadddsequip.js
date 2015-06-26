﻿(function(){
  "use strict;"
  var _fields = [];  // {name : "province", index : 0, origin:"省份"}
  
  WinJS.Namespace.define("zion.batch", {
    fields_desc: {desc :""},
    on_field_selected: WinJS.UI.eventHandler(function (e) {
      var btn = e.target;
      var parent = btn.parentNode;  //zion-fields-item
      var menu = document.querySelector("#zion-batch-field-menu").winControl;
      menu._target_item = parent;
      menu.show(parent, "bottom", "right");
    }),
    fields: new WinJS.Binding.List(),
    confirm_fields_map: WinJS.UI.eventHandler(function (e) {
      _fields = [];
      var lv = document.querySelector("#zion-fields");
      var items = lv.getElementsByClassName("zion-fields-item");
      for (var i = 0; i < items.length; i++) {
        var item = items.item(i);
        var from = item.querySelector("#zion-field-origin");
        var to = item.querySelector("#zion-field-target");
        var fieldname = to.textContent;
        if (fieldname != "") {
          var v = { name: fieldname, index: i, origin: from.textContent };
          _fields.push(v);
        }
      }
      zion.batch.fields_desc.desc = JSON.stringify(_fields);
      WinJS.Binding.processAll(document.querySelector("zion-fields-map-result"), zion.batch.fields_desc).done(function () { });
    })
  });

  function isSupportFileApi() {
    if (window.File && window.FileList && window.FileReader && window.Blob) {
      return true;
    }
    return false;
  }
  var _csv_text = null;
  WinJS.UI.Pages.define("/pages/batchadddsequip/batchadddsequip.html", {
    read_progress: null,
    read_text_file: function (evt) {
      if (!isSupportFileApi()) return;
      var file = evt.target.files[0];
      if (!file) return;
      WinJS.Utilities.removeClass(read_progress, "zion-display-none");
      read_progress.max = file.size;
      read_progress.value = 0;
      var reader = new FileReader();
      reader.onloadstart = function (e) {
        read_progress.value = 0;
        zion.batch.fields.splice(0, zion.batch.fields.length);
      }
      reader.onprogress = function (e) {
        read_progress.value = e.loaded;
      }
      var self = this;
      reader.onload = function (e) {
        _csv_text = this.result.split('\n');
        var fields = [];
        if (_csv_text && _csv_text.length > 0)
          fields = _csv_text[0].split(',');
        fields.forEach(function (field) {
          zion.batch.fields.push({ name: field, target:"" });
        });
        read_progress.value = read_progress.max;
        WinJS.Utilities.addClass(read_progress, "zion-display-none");
      }

      reader.readAsText(file);
    },
    // This function is called whenever a user navigates to this page. It
    // populates the page elements with the app's data.
    ready: function (element, options) {
      read_progress = element.querySelector("#zion-progress");      
      document.getElementById('fileinput').addEventListener('change', this.read_text_file, false);
      //zion-fields-map-result
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