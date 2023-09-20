(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    1002: function (t, e, o) {
      "use strict";
      o(740);
    },
    1332: function (t, e, o) {
      "use strict";
      o.r(e);
      o(17), o(32), o(24), o(30), o(11), o(31);
      var r = o(0),
        n = o(6),
        c = (o(8), o(38), o(10), o(92), o(18), o(5), o(15));
      function l(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function m(t) {
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
      var d = {
          name: "PdpCompareModal",
          props: {
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          computed: m(
            m(
              {},
              Object(c.d)("pdp-compare", [
                "isShowModal",
                "storageCompareData",
                "storageCompareDataValues",
                "isShowButton",
              ])
            ),
            {},
            {
              comparePageLink: function () {
                var t = this.storageCompareDataValues.map(function (t) {
                  return t.path;
                });
                return ""
                  .concat("https://cellphones.com.vn/", "so-sanh/")
                  .concat(t.join("-vs-"));
              },
            }
          ),
          mounted: function () {},
          methods: m(
            m(
              m(
                m(
                  {},
                  Object(c.c)("pdp-compare", [
                    "showCompareModal",
                    "deleteCompareItem",
                    "showButton",
                    "showSelectProductModal",
                  ])
                ),
                Object(c.b)("pdp-compare", ["searchProductToCompare"])
              ),
              Object(c.b)("loader", ["switchLoading"])
            ),
            {},
            {
              removeCompareItem: function (t) {
                this.deleteCompareItem(t),
                  localStorage.setItem(
                    "compare_products",
                    JSON.stringify(this.storageCompareData)
                  ),
                  this.isShowButton ||
                    this.storageCompareData["".concat(t)] ||
                    this.showButton();
              },
              loadSimilarProducts: function () {
                var t = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (1 !== t.storageCompareDataValues.length) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (o = t.getSimilarIds()),
                              t.switchLoading(!0),
                              (e.next = 5),
                              t.searchProductToCompare({
                                categoryIds: [o],
                                price: t.productData.filterable.price,
                              })
                            );
                          case 5:
                            t.switchLoading(!1);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              getSimilarIds: function () {
                var t,
                  e = this.productData.general.categories.filter(function (t) {
                    return "" !== t.similar;
                  });
                return (
                  e.length &&
                    (t = e.reduce(function (t, e) {
                      return t.level > e.level ? t : e;
                    }).similar),
                  t ||
                    (t = this.productData.general.categories
                      .filter(function (t) {
                        return 2 === t.level;
                      })
                      .map(function (t) {
                        return t.categoryId;
                      })
                      .shift()),
                  console.log("similarId", t),
                  t
                );
              },
            }
          ),
        },
        h = (o(1002), o(42)),
        component = Object(h.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return t.storageCompareDataValues.length >= 1
              ? e("div", { staticClass: "pdp-compare-modal" }, [
                  t.isShowModal
                    ? t._e()
                    : e(
                        "div",
                        { staticClass: "pdp-compare-modal-trigger-button" },
                        [
                          e(
                            "a",
                            {
                              on: {
                                click: function (e) {
                                  return t.showCompareModal();
                                },
                              },
                            },
                            [
                              e("span", [t._v("So sánh")]),
                              t._v(" "),
                              e("label", [
                                t._v(
                                  "(" +
                                    t._s(
                                      Object.keys(t.storageCompareData).length
                                    ) +
                                    ")"
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                  t._v(" "),
                  t.isShowModal
                    ? e("div", { staticClass: "pdp-compare-modal-box" }, [
                        e(
                          "div",
                          { staticClass: "compare-modal-content is-fullwidth" },
                          [
                            e(
                              "div",
                              { staticClass: "compare-products is-flex" },
                              [
                                t._l(3, function (i, o) {
                                  return [
                                    t.storageCompareDataValues[i - 1]
                                      ? e(
                                          "div",
                                          {
                                            key: o,
                                            staticClass:
                                              "compare-product has-product has-text-centered is-flex is-justify-content-center is-align-items-center",
                                          },
                                          [
                                            e(
                                              "a",
                                              [
                                                e("nuxt-img", {
                                                  attrs: {
                                                    provider:
                                                      "CPS_IMG_PROVIDER",
                                                    format: "webp",
                                                    width: "60",
                                                    height: "60",
                                                    alt: "So sánh sản phẩm",
                                                    src: "https://cdn2.cellphones.com.vn/60x60/media/catalog/product/".concat(
                                                      t
                                                        .storageCompareDataValues[
                                                        i - 1
                                                      ].thumbnail
                                                    ),
                                                    loading: "lazy",
                                                  },
                                                }),
                                                t._v(" "),
                                                e("p", [
                                                  t._v(
                                                    t._s(
                                                      t
                                                        .storageCompareDataValues[
                                                        i - 1
                                                      ].name
                                                    )
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            t._v(" "),
                                            e(
                                              "span",
                                              {
                                                staticClass:
                                                  "remove-compare-product",
                                                on: {
                                                  click: function (e) {
                                                    return t.removeCompareItem(
                                                      t
                                                        .storageCompareDataValues[
                                                        i - 1
                                                      ].id
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v("x")]
                                            ),
                                          ]
                                        )
                                      : e(
                                          "div",
                                          {
                                            key: o,
                                            staticClass:
                                              "compare-product has-text-centered is-flex is-justify-content-center is-align-items-center",
                                          },
                                          [
                                            e(
                                              "a",
                                              {
                                                on: {
                                                  click: function (e) {
                                                    t.showSelectProductModal(),
                                                      t.showCompareModal(),
                                                      t.loadSimilarProducts();
                                                  },
                                                },
                                              },
                                              [
                                                e("nuxt-img", {
                                                  attrs: {
                                                    provider:
                                                      "CPS_IMG_PROVIDER",
                                                    format: "webp",
                                                    width: "31",
                                                    height: "31",
                                                    alt: "So sánh sản phẩm",
                                                    src: "https://cdn2.cellphones.com.vn/31x31/media/icon/add-to-compare-icon.png",
                                                    loading: "lazy",
                                                  },
                                                }),
                                                t._v(" "),
                                                e("p", [t._v("Thêm sản phẩm")]),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                  ];
                                }),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "compare-product go-compare-page has-text-centered is-flex is-justify-content-center is-align-items-center",
                                  },
                                  [
                                    e("span", [
                                      t._v(
                                        "Đã chọn " +
                                          t._s(
                                            Object.keys(t.storageCompareData)
                                              .length
                                          ) +
                                          " sản phẩm"
                                      ),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "a",
                                      t._b(
                                        {},
                                        "a",
                                        { href: t.comparePageLink },
                                        !1
                                      ),
                                      [t._v("So sánh ngay")]
                                    ),
                                  ]
                                ),
                              ],
                              2
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "pdp-compare-modal-exit",
                            on: {
                              click: function (e) {
                                return t.showCompareModal();
                              },
                            },
                          },
                          [
                            e("span", [t._v("Thu gọn")]),
                            t._v(" "),
                            e("RenderHtml", {
                              staticClass: "is-inline-block",
                              attrs: { html: t.$icons().ChevronDown },
                            }),
                          ],
                          1
                        ),
                      ])
                    : t._e(),
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
    740: function (t, e, o) {
      t.exports = {};
    },
  },
]);
