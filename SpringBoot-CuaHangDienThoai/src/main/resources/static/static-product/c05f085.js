(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    1303: function (n, t, o) {
      "use strict";
      o.r(t);
      o(5), o(33), o(36), o(52);
      var e = {
          name: "FloatingButton",
          components: {
            BackToTop: function () {
              return o.e(51).then(o.bind(null, 1306));
            },
            ZaloButton: function () {
              return o.e(102).then(o.bind(null, 1362));
            },
          },
          data: function () {
            return { showButton: !1 };
          },
          mounted: function () {
            var n = this;
            setTimeout(function () {
              n.showButton = !0;
            }, 5e3);
          },
        },
        r = o(42),
        component = Object(r.a)(
          e,
          function () {
            var n = this,
              t = n._self._c;
            return t(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: n.showButton,
                    expression: "showButton",
                  },
                ],
              },
              [t("BackToTop"), n._v(" "), t("ZaloButton")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
  },
]);
