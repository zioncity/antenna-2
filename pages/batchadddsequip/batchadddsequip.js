(function(){
  "use strict;"
  var _fields = [];  // {name:"the name"}
  WinJS.Namespace.define("zion.batch", {
    fields: new WinJS.Binding.List(_fields)
  });

  function isSupportFileApi() {
    if (window.File && window.FileList && window.FileReader && window.Blob) {
      return true;
    }
    return false;
  }


  WinJS.UI.Pages.define("/pages/batchadddsequip/batchadddsequip.html", {
    read_progress: null,
    read_text_file: function (evt) {
      if (!isSupportFileApi()) return;
      //Retrieve the first (and only!) File from the FileList object
      var file = evt.target.files[0];
      if (!file) return;
      WinJS.Utilities.removeClass(read_progress, "zion-display-none");
      read_progress.max = file.size;
      read_progress.value = 0;
      var reader = new FileReader();
      reader.onloadstart = function (e) {
        read_progress.value = 0;
      }
      reader.onprogress = function (e) {
        read_progress.value = e.loaded;
      }
      var self = this;
      reader.onload = function (e) {
        var contents = this.result.split('\n');
        var fields = [];
        if (contents && contents.length > 0)
          fields = contents[0].split(',');
        fields.forEach(function (field) {
          zion.batch.fields.push({ name: field });
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