(window.webpackJsonp = window.webpackJsonp || []).push([
  [129],
  {
    1171: function (e, o, t) {
      "use strict";
      t.r(o);
      t(17), t(32);
      var n = t(499),
        c = {
          name: "BoxSpecialPromotion",
          props: {
            specialPromotion: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              imgPlaceHolder:
                "https://cdn2.cellphones.com.vn/400x100/media/wysiwyg/placehoder.png",
            };
          },
          methods: { checkTimeBanner: n.f },
        },
        r = (t(592), t(42)),
        component = Object(r.a)(
          c,
          function () {
            var e = this,
              o = e._self._c;
            return o(
              "a",
              e._b(
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: Object.keys(e.specialPromotion).length > 0,
                      expression: "Object.keys(specialPromotion).length>0",
                    },
                  ],
                  staticClass:
                    "block-special-promotion-banner button__special-promotion-banner",
                  attrs: { target: "_blank" },
                },
                "a",
                { href: e.specialPromotion.url },
                !1
              ),
              [
                e.checkTimeBanner(
                  e.specialPromotion.schedule_from,
                  e.specialPromotion.schedule_to
                ) && Object.keys(e.specialPromotion).length > 0
                  ? o("nuxt-img", {
                      attrs: {
                        provider: "CPS_IMG_PROVIDER",
                        alt: e.specialPromotion.name,
                        height: "120",
                        loading: "lazy",
                        src: "https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/".concat(
                          e.$device.isMobile
                            ? e.specialPromotion.path_mobile
                            : e.specialPromotion.path_desktop
                        ),
                      },
                    })
                  : e._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "58e9e174",
          null
        );
      o.default = component.exports;
    },
    555: function (e, o, t) {
      e.exports = {};
    },
    592: function (e, o, t) {
      "use strict";
      t(555);
    },
  },
]);
