(window.webpackJsonp = window.webpackJsonp || []).push([
  [127],
  {
    1169: function (t, e, o) {
      "use strict";
      o.r(e);
      o(17), o(32), o(24), o(18), o(30), o(11), o(31);
      var n = o(6),
        r = o(0),
        c =
          (o(5), o(36), o(52), o(205), o(38), o(10), o(16), o(44), o(8), o(15)),
        m = o(499);
      function l(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(o), !0).forEach(function (e) {
                Object(n.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : l(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "BoxPromotion",
          props: {
            promotionPack: {
              type: Object,
              default: function () {
                return {};
              },
            },
            productPromotionPack: {
              type: Object,
              default: function () {
                return {};
              },
            },
            hotSale: { type: String, default: "" },
            timeStartHotsale: { type: String, default: "" },
            timeEndHotsale: { type: String, default: "" },
          },
          data: function () {
            return {
              listPromotionData: [],
              listProductPromotionData: [],
              statusHotsale: "disappear",
              countPromo: 0,
            };
          },
          fetch: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var o, n, r, c, m, l;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (o = t.convertDateTime(t.timeStartHotsale)),
                            (n = t.convertDateTime(t.timeEndHotsale)),
                            (r = o
                              ? new Date(o).getTime() - 172800
                              : new Date().getTime() + 3600 - 172800),
                            (c = o
                              ? new Date(o).getTime()
                              : new Date().getTime() + 3600),
                            (m = n
                              ? new Date(n).getTime()
                              : new Date().getTime() - 3600),
                            t.setStatusCountDown(c, m, r),
                            (e.next = 9),
                            t.listPromotion()
                          );
                        case 9:
                          (t.listPromotionData = e.sent),
                            (e.t0 = regeneratorRuntime.keys(
                              t.productPromotionPack
                            ));
                        case 11:
                          if ((e.t1 = e.t0()).done) {
                            e.next = 18;
                            break;
                          }
                          if (
                            ((l = e.t1.value),
                            1 !== t.productPromotionPack[l].smember)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            t.setCheckSmemberComponentStatus(!0),
                            e.abrupt("break", 18)
                          );
                        case 16:
                          e.next = 11;
                          break;
                        case 18:
                          e.next = 23;
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t2 = e.catch(0)),
                            console.log(e.t2.message);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 20]]
                );
              })
            )();
          },
          computed: d(
            d({}, Object(c.d)("smember", ["isSmember"])),
            Object(c.d)("product", ["selectColorId"])
          ),
          watch: {
            selectColorId: function () {
              var t = this;
              setTimeout(
                Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.listPromotion();
                          case 2:
                            (t.listPromotionData = e.sent),
                              (e.t0 = regeneratorRuntime.keys(
                                t.productPromotionPack
                              ));
                          case 4:
                            if ((e.t1 = e.t0()).done) {
                              e.next = 11;
                              break;
                            }
                            if (
                              ((o = e.t1.value),
                              1 !== t.productPromotionPack[o].smember)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              t.setCheckSmemberComponentStatus(!0),
                              e.abrupt("break", 11)
                            );
                          case 9:
                            e.next = 4;
                            break;
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                1e3
              );
            },
          },
          updated: function () {
            var t = this;
            this.$nextTick(function () {
              var e;
              t.countPromo =
                null ===
                  (e = document.querySelector(
                    "div.box-product-promotion-content > div > ul.product-more-promotion-content"
                  )) || void 0 === e
                  ? void 0
                  : e.childElementCount;
            });
          },
          methods: d(
            d(
              { formatMoney: m.r },
              Object(c.c)("smember", ["setCheckSmemberComponentStatus"])
            ),
            {},
            {
              listPromotion: function () {
                var t = this;
                if (0 === Object.values(this.promotionPack).length) return [];
                var e = Object.values(this.promotionPack).map(function (e) {
                  return 0 !== e.value && "0" !== e.value && !e.items.length > 1
                    ? {
                        name: "Tặng phiếu mua hàng ".concat(
                          t.formatMoney(e.value)
                        ),
                        id: e.id,
                        product_code: e.product_code,
                        promotionpackdetail_id: e.promotionpackdetail_id,
                        url: e.url,
                      }
                    : e.items;
                });
                return [].concat.apply([], e);
              },
              setStatusCountDown: function (t, e, o) {
                if (
                  (console.log("Set Count Down Promotion"),
                  console.log(
                    new Date(o).toLocaleDateString("en-GB") +
                      "===" +
                      new Date(t).toLocaleDateString("en-GB") +
                      "===" +
                      new Date(e).toLocaleDateString("en-GB")
                  ),
                  t || e)
                ) {
                  var n = new Date().getTime(),
                    r = e - n,
                    c = t - n;
                  (c < 0 && r < 0) || (c > 0 && r > 0 && o - n > 0)
                    ? (this.statusHotsale = "disappear")
                    : r > 0 && (this.statusHotsale = "appear");
                } else this.statusHotsale = "appear";
              },
              convertDateTime: function (t) {
                return (null == t ? void 0 : t.replace(" ", "T")) || "";
              },
            }
          ),
        },
        h = (o(590), o(42)),
        component = Object(h.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return Object.keys(t.promotionPack).length > 0 ||
              Object.keys(t.productPromotionPack).length > 0 ||
              ("appear" === t.statusHotsale && t.hotSale)
              ? e("div", { staticClass: "box-product-promotion" }, [
                  e(
                    "div",
                    {
                      staticClass:
                        "box-product-promotion-header is-flex p-2 has-text-weight-semibold is-align-items-center",
                    },
                    [
                      e("RenderHtml", {
                        staticClass: "icon",
                        attrs: { html: t.$icons().Gift },
                      }),
                      t._v(" "),
                      e("p", [t._v("Khuyến mãi")]),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass:
                        "box-product-promotion-content px-2 pt-2 show-all",
                    },
                    [
                      t._l(t.listPromotionData, function (o, n) {
                        return e(
                          "div",
                          {
                            key: n,
                            staticClass: "is-flex is-align-content-center my-2",
                          },
                          [
                            t.listPromotionData.length > 0
                              ? [
                                  e(
                                    "p",
                                    {
                                      staticClass:
                                        "box-product-promotion-number has-text-primary-light has-background-danger-dark",
                                    },
                                    [t._v(t._s(n + 1))]
                                  ),
                                  t._v(" "),
                                  e(
                                    "a",
                                    t._b(
                                      {
                                        staticClass:
                                          "box-product-promotion-detail mx-1 has-text-black button__promotion",
                                        attrs: { target: "_blank" },
                                      },
                                      "a",
                                      { href: o.url },
                                      !1
                                    ),
                                    [
                                      t._v(t._s(o.name) + "\n          "),
                                      e(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: o.url,
                                              expression: "item.url",
                                            },
                                          ],
                                        },
                                        [t._v("(Xem chi tiết)")]
                                      ),
                                    ]
                                  ),
                                ]
                              : t._e(),
                          ],
                          2
                        );
                      }),
                      t._v(" "),
                      Object.keys(t.productPromotionPack).length > 0
                        ? e("div", { staticClass: "mt-2" }, [
                            e(
                              "div",
                              { staticClass: "is-flex is-align-items-center" },
                              [
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "box-product-promotion-number has-text-primary-light has-background-danger-dark",
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(
                                          t.listPromotionData.length > 0
                                            ? t.listPromotionData.length + 1
                                            : 1
                                        )
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "box-product-promotion-detail mx-1 has-text-black",
                                  },
                                  [
                                    t._v("\n          Nhận thêm\n          "),
                                    e(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.countPromo > 1,
                                            expression: "countPromo > 1",
                                          },
                                        ],
                                      },
                                      [t._v("1 trong các")]
                                    ),
                                    t._v("\n          khuyến mãi sau:"),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "ul",
                              {
                                staticClass:
                                  "product-more-promotion-content many-promo",
                              },
                              [
                                t._l(t.productPromotionPack, function (o, n) {
                                  return [
                                    e(
                                      "li",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: 0 === o.smember,
                                            expression: "item.smember===0",
                                          },
                                        ],
                                        key: n,
                                      },
                                      [
                                        o.items.length > 0
                                          ? t._l(o.items, function (n, r) {
                                              return e(
                                                "div",
                                                {
                                                  key: r,
                                                  staticClass:
                                                    "product-more-promotion-item",
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        (null == n
                                                          ? void 0
                                                          : n.name) ||
                                                          "Tặng phiếu mua hàng " +
                                                            t.formatMoney(
                                                              o.value
                                                            )
                                                      ) +
                                                      "\n                "
                                                  ),
                                                  e(
                                                    "a",
                                                    t._b(
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              null == n
                                                                ? void 0
                                                                : n.url,
                                                            expression:
                                                              "itemChild?.url",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "button__promotion",
                                                        attrs: {
                                                          target: "_blank",
                                                        },
                                                      },
                                                      "a",
                                                      {
                                                        href: "".concat(
                                                          null == n
                                                            ? void 0
                                                            : n.url
                                                        ),
                                                      },
                                                      !1
                                                    ),
                                                    [
                                                      t._v(
                                                        "(xem\n                  chi tiết)"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              );
                                            })
                                          : 0 !== o.value || "0" !== o.value
                                          ? [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-more-promotion-item",
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        "Tặng phiếu mua hàng " +
                                                          t.formatMoney(o.value)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          : t._e(),
                                      ],
                                      2
                                    ),
                                    t._v(" "),
                                    e(
                                      "li",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              1 === o.smember && t.isSmember,
                                            expression:
                                              "item.smember===1 && isSmember",
                                          },
                                        ],
                                        key: "".concat(n, "-dup"),
                                      },
                                      [
                                        o.items.length > 0
                                          ? t._l(o.items, function (n, r) {
                                              return e(
                                                "div",
                                                {
                                                  key: r,
                                                  staticClass:
                                                    "product-more-promotion-item",
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        (null == n
                                                          ? void 0
                                                          : n.name) ||
                                                          "Tặng phiếu mua hàng " +
                                                            t.formatMoney(
                                                              o.value
                                                            )
                                                      ) +
                                                      "\n                "
                                                  ),
                                                  e(
                                                    "a",
                                                    t._b(
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              null == n
                                                                ? void 0
                                                                : n.url,
                                                            expression:
                                                              "itemChild?.url",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "button__promotion",
                                                        attrs: {
                                                          target: "_blank",
                                                        },
                                                      },
                                                      "a",
                                                      {
                                                        href: "".concat(
                                                          null == n
                                                            ? void 0
                                                            : n.url
                                                        ),
                                                      },
                                                      !1
                                                    ),
                                                    [
                                                      t._v(
                                                        "(xem\n                  chi tiết)"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              );
                                            })
                                          : 0 !== o.value || "0" !== o.value
                                          ? [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-more-promotion-item",
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        "Tặng phiếu mua hàng " +
                                                          t.formatMoney(o.value)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          : t._e(),
                                      ],
                                      2
                                    ),
                                  ];
                                }),
                              ],
                              2
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      t.hotSale && "appear" === t.statusHotsale
                        ? e(
                            "div",
                            { staticClass: "hotSale" },
                            [
                              e(
                                "client-only",
                                [
                                  e("RenderHtml", {
                                    attrs: { html: t.hotSale },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    2
                  ),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    553: function (t, e, o) {
      t.exports = {};
    },
    590: function (t, e, o) {
      "use strict";
      o(553);
    },
  },
]);
