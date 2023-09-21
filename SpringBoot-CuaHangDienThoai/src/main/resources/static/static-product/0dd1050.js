(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    1113: function (e, t, n) {
      "use strict";
      n(823);
    },
    1410: function (e, t, n) {
      "use strict";
      n.r(t);
      n(17), n(32), n(24), n(30), n(11), n(31);
      var r = n(6),
        l = (n(5), n(33), n(36), n(18), n(15));
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var c = {
          name: "MenuTree",
          components: {
            MenuTreeChild: function () {
              return n.e(107).then(n.bind(null, 1411));
            },
          },
          data: function () {
            return {
              childrenData: [],
              parentData: {},
              showByIndex: null,
              mainMenuMobile: [],
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(n), !0).forEach(function (t) {
                    Object(r.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, Object(l.d)("menu", ["menu"])),
          created: function () {
            0 === this.childrenData.length &&
              this.menu.main &&
              ((this.mainMenuMobile = this.menu.main.filter(function (e) {
                return "1" === JSON.parse(e.data).isShowOnMobile;
              })),
              this.transferDataChild(this.mainMenuMobile[0]),
              (this.showByIndex = this.mainMenuMobile[0].id));
          },
          methods: {
            transferDataChild: function (data) {
              (this.childrenData =
                (null == data ? void 0 : data.children) || []),
                (this.parentData = data);
            },
            _srcset: function (e) {
              return this.$img.getImage(e, {
                provider: "CPS_IMG_PROVIDER",
                modifiers: {
                  format: "webp",
                  width: 40,
                  height: "auto",
                  quality: 70,
                },
              }).url;
            },
          },
        },
        d = c,
        h = (n(1113), n(42)),
        component = Object(h.a)(
          d,
          function () {
            var e,
              t = this,
              n = t._self._c;
            return n(
              "div",
              {
                staticClass: "menu-wrapper space-bread-crumb",
                attrs: { id: "menu-mobile" },
              },
              [
                (null === (e = t.mainMenuMobile) || void 0 === e
                  ? void 0
                  : e.length) > 0
                  ? n(
                      "render-on-scroll",
                      { staticClass: "menu-tree", attrs: { "offset-y": 10 } },
                      [
                        t._l(t.mainMenuMobile, function (e, r) {
                          return [
                            "1" === JSON.parse(e.data).isShowOnMobile
                              ? n(
                                  "a",
                                  {
                                    key: r,
                                    staticClass: "label-menu-tree",
                                    class: t.showByIndex !== e.id || "active",
                                    style: "background-color: ".concat(
                                      null !== e.data
                                        ? JSON.parse(e.data).background_color
                                        : "",
                                      ";"
                                    ),
                                    on: {
                                      click: function (n) {
                                        (t.showByIndex = e.id),
                                          t.transferDataChild(e);
                                      },
                                    },
                                  },
                                  [
                                    n("i", {
                                      staticClass: "icons-cate",
                                      style: "background-image: url(".concat(
                                        null !== e.data
                                          ? t._srcset(
                                              "".concat(
                                                JSON.parse(e.data).image
                                              )
                                            )
                                          : "",
                                        ")"
                                      ),
                                    }),
                                    t._v(" "),
                                    n("p", [t._v(t._s(e.name))]),
                                  ]
                                )
                              : t._e(),
                          ];
                        }),
                      ],
                      2
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "render-on-scroll",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.childrenData.length > 0 && t.parentData,
                        expression: "childrenData.length>0 && parentData",
                      },
                    ],
                    staticClass: "menu-tree-child m-0 box",
                  },
                  [
                    n("div", { staticClass: "box-title" }, [
                      n(
                        "a",
                        t._b(
                          { staticClass: "box-title__title" },
                          "a",
                          {
                            href: t.parentData.data
                              ? JSON.parse(t.parentData.data).url
                              : "#",
                            target: t.parentData.target,
                          },
                          !1
                        ),
                        [t._v(" " + t._s(t.parentData.name))]
                      ),
                      t._v(" "),
                      n(
                        "a",
                        t._b(
                          { staticClass: "box-title__btn-show-all" },
                          "a",
                          {
                            href: t.parentData.data
                              ? JSON.parse(t.parentData.data).url
                              : "#",
                            target: t.parentData.target,
                          },
                          !1
                        ),
                        [t._v("Xem tất cả")]
                      ),
                    ]),
                    t._v(" "),
                    t._l(t.childrenData, function (e, r) {
                      return [
                        e.children.length > 0
                          ? n("MenuTreeChild", {
                              key: r,
                              attrs: {
                                children: e.children,
                                name: e.name,
                                type: e.type,
                              },
                            })
                          : t._e(),
                      ];
                    }),
                  ],
                  2
                ),
              ],
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
    823: function (e, t, n) {
      e.exports = {};
    },
  },
]);
