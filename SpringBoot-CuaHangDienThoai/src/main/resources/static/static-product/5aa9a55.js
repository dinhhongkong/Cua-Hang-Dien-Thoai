(window.webpackJsonp = window.webpackJsonp || []).push([
  [107],
  {
    1114: function (t, e, n) {
      "use strict";
      n(824);
    },
    1411: function (t, e, n) {
      "use strict";
      n.r(e);
      n(32), n(17);
      var r = {
          name: "MenuTreeChild",
          props: {
            children: {
              type: Array,
              default: function () {
                return [];
              },
            },
            name: { type: String, default: "" },
            data: {
              type: Object,
              default: function () {
                return {};
              },
            },
            target: { type: String, default: "_self" },
            type: { type: String, default: "" },
          },
          data: function () {
            return {
              imgPlaceHolder:
                "https://cdn2.cellphones.com.vn/25x/media/wysiwyg/placehoder.png",
            };
          },
        },
        l = (n(1114), n(42)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { class: "group" !== t.type || "mt-1" }, [
              "group" === t.type
                ? e("strong", { staticClass: "group-title" }, [
                    t._v(t._s(t.name)),
                  ])
                : t._e(),
              t._v(" "),
              e(
                "div",
                { class: "group" === t.type ? "group-list" : "group-item" },
                [
                  e(
                    "div",
                    {
                      staticClass: "menu-child-item",
                      class: "group" !== t.type ? "menu-item" : "group",
                    },
                    [
                      "group" !== t.type
                        ? e(
                            "a",
                            t._b(
                              { staticClass: "label-wrapper" },
                              "a",
                              { href: t.data.url, target: t.target },
                              !1
                            ),
                            [
                              e(
                                "div",
                                { staticClass: "label-item" },
                                [
                                  t.data.image
                                    ? e("nuxt-img", {
                                        attrs: {
                                          provider: "CPS_IMG_PROVIDER",
                                          format: "webp",
                                          width: "auto",
                                          height: "50",
                                          src: t.data.image,
                                          alt: t.name,
                                          loading: "lazy",
                                        },
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  "1" === t.data.isUseLabelOnMobile
                                    ? e("span", [t._v(t._s(t.name))])
                                    : t._e(),
                                ],
                                1
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t._l(t.children, function (t, n) {
                        return e("MenuTreeChild", {
                          key: n,
                          attrs: {
                            children: t.children,
                            name: t.name,
                            type: t.type,
                            data: JSON.parse(t.data),
                          },
                        });
                      }),
                    ],
                    2
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    824: function (t, e, n) {
      t.exports = {};
    },
  },
]);
