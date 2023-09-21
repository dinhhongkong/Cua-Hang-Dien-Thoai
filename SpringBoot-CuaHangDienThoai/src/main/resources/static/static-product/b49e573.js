(window.webpackJsonp = window.webpackJsonp || []).push([
  [136],
  {
    1162: function (e, t, r) {
      "use strict";
      r.r(t);
      r(32), r(17), r(24), r(30), r(31);
      var o = r(0),
        c = r(6),
        n = (r(8), r(131), r(52), r(18), r(5), r(38), r(11), r(15)),
        l = r(499);
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                Object(c.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = {
          name: "SelectProductCompare",
          components: {},
          props: {
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            modalType: { type: Number, default: 0 },
          },
          data: function () {
            return {
              inputSearch: "",
              searching: !1,
              cpsMain: "https://cellphones.com.vn/",
              selectedBrand: "all",
              filter: {},
              similarId: null,
              page: 1,
            };
          },
          computed: m(
            m(
              m(
                {},
                Object(n.d)("pdp-compare", [
                  "isShowSelectProductModal",
                  "storageCompareData",
                  "storageCompareDataValues",
                  "searchProducts",
                  "totalSearchProducts",
                ])
              ),
              Object(n.d)("compare", ["compareProducts"])
            ),
            Object(n.d)("product", ["filterData"])
          ),
          watch: {
            inputSearch: function () {
              var e = this;
              clearTimeout(this.timeOut),
                (this.loading = !0),
                (this.timeOut = setTimeout(function () {
                  e.inputSearch.length >= 3 &&
                    ((e.page = 1),
                    e.searchProductToCompare({
                      categoryIds: [e.similarId],
                      keySearch: e.inputSearch,
                    }),
                    e.searchResults && (e.loading = !1));
                }, 500));
            },
          },
          mounted: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.similarId = e.getSimilarIds()),
                          (t.next = 3),
                          e.searchProductToCompare({
                            categoryIds: [e.similarId],
                            keySearch: e.inputSearch,
                          })
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: m(
            m(
              m(
                m(
                  m(
                    { formatMoney: l.r },
                    Object(n.b)("pdp-compare", ["searchProductToCompare"])
                  ),
                  Object(n.b)("compare", ["newCompareUrl"])
                ),
                Object(n.c)("pdp-compare", [
                  "showSelectProductModal",
                  "pushToStorageData",
                  "showCompareModal",
                ])
              ),
              Object(n.b)("product", ["getFilterByCateId"])
            ),
            {},
            {
              getSimilarIds: function () {
                var e,
                  t = this.productData.general.categories.filter(function (e) {
                    return "" !== e.similar;
                  });
                return (
                  t.length &&
                    (e = t.reduce(function (e, t) {
                      return e.level > t.level ? e : t;
                    }).similar),
                  e ||
                    (e = this.productData.general.categories
                      .filter(function (e) {
                        return 2 === e.level;
                      })
                      .map(function (e) {
                        return e.categoryId;
                      })
                      .shift()),
                  e
                );
              },
              focusOutSearchInput: function () {
                var e = this;
                setTimeout(function () {
                  e.searching = !1;
                }, 500);
              },
              selectProduct: function (e) {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, c;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((o = e.general.categories.map(function (e) {
                                return e.categoryId;
                              })),
                              0 !== t.modalType &&
                                t.compareProducts.length > 0 &&
                                t.compareProducts.forEach(function (e) {
                                  t.pushToStorageData({
                                    id: e.general.product_id,
                                    data: {
                                      name: e.general.name,
                                      thumbnail: e.filterable.thumbnail,
                                      id: e.general.product_id,
                                      category_ids: e.general.categories.map(
                                        function (e) {
                                          return e.categoryId;
                                        }
                                      ),
                                      path: e.general.attributes.url_key,
                                    },
                                  });
                                }),
                              t.pushToStorageData({
                                id: e.general.product_id,
                                data: {
                                  name: e.general.name,
                                  thumbnail: e.filterable.thumbnail,
                                  id: e.general.product_id,
                                  category_ids: o,
                                  path: e.general.attributes.url_key,
                                },
                              }),
                              localStorage.setItem(
                                "compare_products",
                                JSON.stringify(t.storageCompareData)
                              ),
                              console.log(
                                localStorage.getItem("compare_products")
                              ),
                              t.showSelectProductModal(),
                              0 !== t.modalType)
                            ) {
                              r.next = 10;
                              break;
                            }
                            t.showCompareModal(), (r.next = 14);
                            break;
                          case 10:
                            return (
                              (r.next = 12),
                              t.newCompareUrl({
                                path: e.general.attributes.url_key,
                                route: t.$route.params.sosanh,
                              })
                            );
                          case 12:
                            (c = r.sent), (window.location.href = c);
                          case 14:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              loadMoreProducts: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.page += 1),
                              (t.next = 3),
                              e.searchProductToCompare({
                                categoryIds: [e.similarId],
                                keySearch: e.inputSearch,
                                price: e.productData.filterable.price,
                                isLoadMore: !0,
                                page: e.page,
                              })
                            );
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            }
          ),
        },
        f = r(42),
        component = Object(f.a)(
          h,
          function () {
            var e,
              t = this,
              r = t._self._c;
            return null !== (e = t.productData) && void 0 !== e && e.general
              ? r(
                  "div",
                  {
                    staticClass: "modal",
                    class: t.isShowSelectProductModal && "is-active",
                    attrs: { id: "search-to-compare" },
                  },
                  [
                    r("div", { staticClass: "modal-background" }),
                    t._v(" "),
                    r("div", { staticClass: "modal-card" }, [
                      r("header", { staticClass: "modal-card-head" }, [
                        r("p", { staticClass: "modal-card-title" }, [
                          t._v("Tìm sản phẩm để so sánh"),
                        ]),
                        t._v(" "),
                        r("button", {
                          staticClass: "delete",
                          attrs: { "aria-label": "close" },
                          on: {
                            click: function (e) {
                              t.showSelectProductModal(), t.showCompareModal();
                            },
                          },
                        }),
                      ]),
                      t._v(" "),
                      r("section", { staticClass: "modal-card-body" }, [
                        r(
                          "div",
                          { staticClass: "form-group box-search" },
                          [
                            r("RenderHtml", {
                              staticClass: "icon-search",
                              attrs: { html: t.$icons().Search },
                            }),
                            t._v(" "),
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.inputSearch,
                                  expression: "inputSearch",
                                },
                              ],
                              staticClass:
                                "input box-search__input button__compare-input",
                              attrs: {
                                type: "text",
                                placeholder: "Nhập tên sản phẩm muốn so sánh",
                                autocomplete: "off",
                              },
                              domProps: { value: t.inputSearch },
                              on: {
                                focusout: function (e) {
                                  return t.focusOutSearchInput();
                                },
                                click: function (e) {
                                  t.searching = !0;
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    (t.inputSearch = e.target.value);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        r("div", [
                          t.searchProducts.length > 0
                            ? r(
                                "div",
                                {
                                  staticClass:
                                    "compare-search-product-list product-list-filter is-flex is-flex-wrap-wrap mt-4",
                                },
                                t._l(t.searchProducts, function (e, o) {
                                  var c, n;
                                  return r(
                                    "div",
                                    {
                                      key: o,
                                      staticClass:
                                        "product-item product-info-container p-3",
                                      class: "item-".concat(
                                        null === (c = e.general) || void 0 === c
                                          ? void 0
                                          : c.product_id
                                      ),
                                    },
                                    [
                                      r(
                                        "div",
                                        { staticClass: "product-info" },
                                        [
                                          r("a", [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "product__image has-text-centered",
                                              },
                                              [
                                                r("nuxt-img", {
                                                  attrs: {
                                                    provider:
                                                      "CPS_IMG_PROVIDER",
                                                    format: "webp",
                                                    width: "160",
                                                    height: "160",
                                                    alt: e.general.name,
                                                    src: "https://cdn2.cellphones.com.vn/500x500/media/catalog/product/".concat(
                                                      e.filterable.thumbnail
                                                    ),
                                                    loading: "lazy",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            t._v(" "),
                                            r(
                                              "a",
                                              { staticClass: "product-name" },
                                              [
                                                t._v(
                                                  t._s(
                                                    null === (n = e.general) ||
                                                      void 0 === n
                                                      ? void 0
                                                      : n.name
                                                  )
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            r("p", { staticClass: "price" }, [
                                              t._v("Giá niêm yết: "),
                                              r("span", [
                                                t._v(
                                                  t._s(
                                                    t.formatMoney(
                                                      e.filterable.price
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            t._v(" "),
                                            e.filterable.special_price
                                              ? r(
                                                  "p",
                                                  { staticClass: "sale-price" },
                                                  [
                                                    t._v(
                                                      "Giá khuyến mãi:\n                  "
                                                    ),
                                                    r("span", [
                                                      t._v(
                                                        t._s(
                                                          t.formatMoney(
                                                            e.filterable
                                                              .special_price
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            r(
                                              "a",
                                              {
                                                staticClass:
                                                  "select-to-compare has-text-centered mt-1",
                                                on: {
                                                  click: function (r) {
                                                    return t.selectProduct(e);
                                                  },
                                                },
                                              },
                                              [t._v("+ Chọn để so sánh")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              )
                            : t._e(),
                          t._v(" "),
                          t.totalSearchProducts > t.searchProducts.length
                            ? r(
                                "div",
                                {
                                  staticClass:
                                    "compare-search-loadmore has-text-centered mt-3",
                                },
                                [
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (e) {
                                          return t.loadMoreProducts();
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "Xem thêm " +
                                          t._s(
                                            t.totalSearchProducts -
                                              t.searchProducts.length
                                          ) +
                                          " sản phẩm"
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : 0 === t.searchProducts.length
                            ? r("div", [
                                r("p", [
                                  t._v("Không tìm được sản phẩm phù hợp"),
                                ]),
                              ])
                            : t._e(),
                        ]),
                      ]),
                    ]),
                  ]
                )
              : t._e();
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
