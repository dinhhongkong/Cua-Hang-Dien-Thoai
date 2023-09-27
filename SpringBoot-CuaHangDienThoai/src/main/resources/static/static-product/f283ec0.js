(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    1115: function (t, e, o) {
      "use strict";
      o(825);
    },
    1412: function (t, e, o) {
      "use strict";
      o.r(e);
      o(17), o(24), o(18), o(5), o(30), o(11), o(31);
      var c = o(6),
        n = o(15);
      function r(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          e &&
            (c = c.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, c);
        }
        return o;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(o), !0).forEach(function (e) {
                Object(c.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : r(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var d = {
          name: "ModalB2b",
          computed: l(
            l({}, Object(n.d)("quote", ["modalShowB2B"])),
            Object(n.d)("block-by-id", ["blockData"])
          ),
          methods: l(
            l({}, Object(n.c)("quote", ["setConditionModalB2b"])),
            {},
            {
              toggleModalTC: function (t) {
                this.setConditionModalB2b(t);
              },
            }
          ),
        },
        h = (o(1115), o(42)),
        component = Object(h.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "modal", class: !t.modalShowB2B || "is-active" },
              [
                e("div", {
                  staticClass: "modal-background",
                  on: {
                    click: function (e) {
                      return t.toggleModalTC(!1);
                    },
                  },
                }),
                t._v(" "),
                e("div", { staticClass: "modal-card" }, [
                  e("header", { staticClass: "modal-card-head" }, [
                    e("p", { staticClass: "modal-card-title" }, [
                      t._v("THÔNG BÁO"),
                    ]),
                    t._v(" "),
                    e("button", {
                      staticClass: "delete",
                      attrs: { "aria-label": "close" },
                      on: {
                        click: function (e) {
                          return t.toggleModalTC(!1);
                        },
                      },
                    }),
                  ]),
                  t._v(" "),
                  e(
                    "section",
                    { staticClass: "modal-card-body" },
                    [
                      e(
                        "div",
                        { staticClass: "is-block has-text-centered" },
                        [
                          e("nuxt-img", {
                            staticClass: "m-auto",
                            attrs: {
                              src: "https://cdn2.cellphones.com.vn/150x,webp/media/cart/sorry-ant.png",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      e("RenderHtml", { attrs: { html: t.blockData.b2b } }),
                    ],
                    1
                  ),
                  t._v(" "),
                  t._m(0),
                ]),
              ]
            );
          },
          [
            function () {
              var t = this._self._c;
              return t("footer", { staticClass: "modal-card-foot" }, [
                t(
                  "a",
                  {
                    staticClass: "button",
                    attrs: {
                      href: "https://cellphones.com.vn/dich-vu-khach-hang-doanh-nghiep",
                      target: "_blank",
                      rel: "noopener",
                    },
                  },
                  [this._v("Dịch vụ khách hàng doanh nghiệp")]
                ),
              ]);
            },
          ],
          !1,
          null,
          "d6ebb42e",
          null
        );
      e.default = component.exports;
    },
    825: function (t, e, o) {
      t.exports = {};
    },
  },
]);
