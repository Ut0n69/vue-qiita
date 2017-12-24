"use strict";

var routes = [{
  path: "/",
  component: home
}, {
  path: "/vue",
  component: vue
}, {
  path: "/node",
  component: node
}, {
  path: "/js",
  component: js
}];

var router = new VueRouter({
  routes: routes
});

var app = new Vue({
  el: "#app",
  data: {
    classObj: {
      active: false,
      appMenu: true
    },
    classBlur: {
      blur: false
    },
    classHbgObj: {
      isActive: false
    },
    enter: function enter() {

      if (app.classObj.active == true) {
        app.classObj.active = !app.classObj.active;
        app.classObj.appMenu = !app.classObj.appMenu;
        app.classBlur.blur = !app.classBlur.blur;
        if (document.getElementsByClassName("conf")[0].classList.value == "conf isActive") {
          document.getElementsByClassName("conf")[0].classList.value = "conf hbg";
        } else {
          document.getElementsByClassName("conf")[0].classList.value = "conf isActive";
        }
      }

      window.scrollTo(0, 0);
    }
  },
  router: router,
  methods: {
    btn: function btn() {
      this.classObj.active = !this.classObj.active;
      this.classObj.appMenu = !this.classObj.appMenu;
      this.classBlur.blur = !this.classBlur.blur;

      if (document.getElementsByClassName("conf")[0].classList.value == "conf isActive") {
        document.getElementsByClassName("conf")[0].classList.value = "conf hbg";
      } else {
        document.getElementsByClassName("conf")[0].classList.value = "conf isActive";
      }
    },
    hide: function hide() {
      this.classObj.active = !this.classObj.active;
      this.classObj.appMenu = !this.classObj.appMenu;
      this.classBlur.blur = !this.classBlur.blur;
    }
  }
});

var windowLoad = function windowLoad() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  if (width > 900) {
    app.classObj.appMenu = true;
    app.classObj.active = false;
    app.classBlur.blur = false;
  }
};
windowLoad();
window.onresize = windowLoad;