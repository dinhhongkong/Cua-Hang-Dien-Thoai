(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    1074: function (t, e, r) {
      "use strict";
      r(788);
    },
    1377: function (t, e, r) {
      "use strict";
      r.r(e);
      r(17), r(24), r(30), r(31);
      var n = r(0),
        o = r(6),
        c =
          (r(8),
          r(5),
          r(33),
          r(36),
          r(38),
          r(10),
          r(18),
          r(34),
          r(11),
          r(92),
          r(15));
      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var f = {
          name: "BoxSameProductMobile",
          components: {
            CrossSell: function () {
              return Promise.all([r.e(1), r.e(22), r.e(65)]).then(
                r.bind(null, 1379)
              );
            },
            ProductList: function () {
              return Promise.all([r.e(1), r.e(15)]).then(r.bind(null, 1181));
            },
            SearchCompare: function () {
              return r.e(41).then(r.bind(null, 1309));
            },
            ExchangeProducts: function () {
              return Promise.all([r.e(1), r.e(67)]).then(r.bind(null, 1380));
            },
          },
          props: {
            title: { type: String, default: "" },
            data: {
              type: Array,
              default: function () {
                return [];
              },
            },
            listReview: {
              type: Object,
              default: function () {
                return {};
              },
            },
            isOld: { type: Boolean, default: !1 },
            isCompare: { type: Boolean, default: !1 },
            isExchange: { type: Boolean, default: !1 },
            type: { type: String, default: "" },
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            hasOption: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              selectedOption: "isCrossSell",
              renderOptions: {},
              isCrossSell: !1,
              dataList: [],
              trackingItm: "",
              options: {
                slidesPerView: 5,
                slidesPerGroup: 2,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerColumnFill: "row",
                loop: !1,
                autoplay: { delay: 2e3, pauseOnMouseEnter: !0 },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  320: { slidesPerView: 2 },
                  375: { slidesPerView: 2.5 },
                  540: { slidesPerView: 3.5 },
                },
              },
            };
          },
          computed: d(
            d(
              d(
                d(
                  d({}, Object(c.d)("cross-sell", ["dataCombo"])),
                  Object(c.d)("product", ["listProductUpSell", "productId"])
                ),
                Object(c.d)("province", ["province"])
              ),
              Object(c.d)("pdp-trade", ["exchangeProductSheetData"])
            ),
            {},
            {
              sameProductLowPrice: function () {
                var t, e, r, n;
                return JSON.stringify(
                  (null === (t = this.productData.filterable) || void 0 === t
                    ? void 0
                    : t.special_price) -
                    0.1 *
                      (null === (e = this.productData.filterable) ||
                      void 0 === e
                        ? void 0
                        : e.special_price) ||
                    (null === (r = this.productData.filterable) || void 0 === r
                      ? void 0
                      : r.price) -
                      0.1 *
                        (null === (n = this.productData.filterable) ||
                        void 0 === n
                          ? void 0
                          : n.price)
                );
              },
              sameProductHighPrice: function () {
                var t, e, r, n;
                return JSON.stringify(
                  (null === (t = this.productData.filterable) || void 0 === t
                    ? void 0
                    : t.special_price) +
                    0.1 *
                      (null === (e = this.productData.filterable) ||
                      void 0 === e
                        ? void 0
                        : e.special_price) ||
                    (null === (r = this.productData.filterable) || void 0 === r
                      ? void 0
                      : r.price) +
                      0.1 *
                        (null === (n = this.productData.filterable) ||
                        void 0 === n
                          ? void 0
                          : n.price)
                );
              },
            }
          ),
          mounted: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (e.t0 = t.type),
                          (e.next =
                            "component_product" === e.t0
                              ? 3
                              : "similar" === e.t0
                              ? 6
                              : "old_product" === e.t0
                              ? 10
                              : "upsell" === e.t0
                              ? 14
                              : "exchange" === e.t0
                              ? 18
                              : 21);
                        break;
                      case 3:
                        return (
                          (e.next = 5),
                          t.getProductComponents(
                            t.productData.general.product_components
                          )
                        );
                      case 5:
                      case 20:
                      case 21:
                        return e.abrupt("break", 22);
                      case 6:
                        return (e.next = 8), t.getListSimilar();
                      case 8:
                      case 12:
                      case 16:
                        return (t.trackingItm = ""), e.abrupt("break", 22);
                      case 10:
                        return (e.next = 12), t.getOldProduct();
                      case 14:
                        return (e.next = 16), t.getListUpsell();
                      case 18:
                        return (e.next = 20), t.getTradeProducts();
                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: d(
            d(
              d(
                d({}, Object(c.b)("review", ["getListRatingGraphql"])),
                Object(c.b)("product", [
                  "getListUpSellByProduct",
                  "getListUpsellByCateIds",
                ])
              ),
              Object(c.b)("pdp-trade", ["getTradeProductLinked"])
            ),
            {},
            {
              getListSimilar: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, c, l, d, data, f, v, h, m, O;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                0 !==
                                  (null ===
                                    (r = t.productData.general.categories) ||
                                  void 0 === r
                                    ? void 0
                                    : r.length) &&
                                t.productData.general.categories
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (o =
                                  null === (n = t.productData.general) ||
                                  void 0 === n ||
                                  null === (n = n.categories) ||
                                  void 0 === n
                                    ? void 0
                                    : n.map(function (t) {
                                        return t.similar.split(",");
                                      })),
                                (c = [].concat.apply([], o)),
                                (l = c.filter(function (t) {
                                  return t;
                                })),
                                (d = JSON.stringify(
                                  l.map(function (t) {
                                    return t.toString();
                                  })
                                )),
                                (data = JSON.stringify({
                                  query: t.queryGraphqlStringProductS(
                                    "",
                                    d,
                                    "true",
                                    t.sameProductLowPrice,
                                    t.sameProductHighPrice
                                  ),
                                  variables: {},
                                })),
                                (f = t.graphqlConfig(data)),
                                (e.prev = 8),
                                (e.next = 11),
                                t.$axios(f)
                              );
                            case 11:
                              if (200 !== (v = e.sent).status) {
                                e.next = 22;
                                break;
                              }
                              return (
                                (h = []),
                                (m = v.data.data.products.filter(function (e) {
                                  return (
                                    null !== e.general &&
                                    e.general.product_id !==
                                      t.productData.general.attributes.id &&
                                    e.filterable.stock > 0
                                  );
                                })),
                                (e.next = 17),
                                m.forEach(function (t) {
                                  h.push(t.general.product_id);
                                })
                              );
                            case 17:
                              return (
                                (e.next = 19),
                                t.getListRatingGraphql({ productIds: h })
                              );
                            case 19:
                              (O = e.sent),
                                (t.dataList = m),
                                (t.dataList.reviews = O);
                            case 22:
                              e.next = 27;
                              break;
                            case 24:
                              (e.prev = 24),
                                (e.t0 = e.catch(8)),
                                console.log(e.t0);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[8, 24]]
                    );
                  })
                )();
              },
              getOldProduct: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var data, r, n, o, c, l;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (data = JSON.stringify({
                                  query: t.queryGraphqlStringProductS(
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    !0,
                                    JSON.stringify(t.productData.general.sku)
                                  ),
                                  variables: {},
                                })),
                                (r = t.graphqlConfig(data)),
                                (e.prev = 2),
                                (e.next = 5),
                                t.$axios(r)
                              );
                            case 5:
                              if (200 !== (n = e.sent).status) {
                                e.next = 18;
                                break;
                              }
                              if (n.data.data.products) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return");
                            case 9:
                              return (
                                (o = []),
                                (c = n.data.data.products.filter(function (t) {
                                  return null !== t.general;
                                })),
                                (e.next = 13),
                                c.forEach(function (t) {
                                  o.push(t.general.product_id);
                                })
                              );
                            case 13:
                              return (
                                (e.next = 15),
                                t.getListRatingGraphql({ productIds: o })
                              );
                            case 15:
                              (l = e.sent),
                                (t.dataList = n.data.data.products),
                                (t.dataList.reviews = l);
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              (e.prev = 20),
                                (e.t0 = e.catch(2)),
                                console.log(e.t0);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 20]]
                    );
                  })
                )();
              },
              getProductComponents: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, data, o, c, l, d;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (null == t || !t.length) {
                                r.next = 22;
                                break;
                              }
                              return (
                                (n = JSON.stringify(
                                  t.map(function (t) {
                                    return t.toString();
                                  })
                                )),
                                (data = JSON.stringify({
                                  query: e.queryGraphqlStringProductS(n),
                                  variables: {},
                                })),
                                (o = e.graphqlConfig(data)),
                                (r.prev = 4),
                                (r.next = 7),
                                e.$axios(o)
                              );
                            case 7:
                              if (200 !== (c = r.sent).status) {
                                r.next = 17;
                                break;
                              }
                              if (c.data.data.products) {
                                r.next = 11;
                                break;
                              }
                              return r.abrupt("return");
                            case 11:
                              return (
                                (l = t.join(",")),
                                (r.next = 14),
                                e.getListRatingGraphql({ productIds: l })
                              );
                            case 14:
                              (d = r.sent),
                                (e.dataList = c.data.data.products),
                                (e.dataList.reviews = d);
                            case 17:
                              r.next = 22;
                              break;
                            case 19:
                              (r.prev = 19),
                                (r.t0 = r.catch(4)),
                                console.log(r.t0);
                            case 22:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[4, 19]]
                    );
                  })
                )();
              },
              graphqlConfig: function (data) {
                return {
                  method: "post",
                  url: "".concat(
                    "https://api.cellphones.com.vn/",
                    "v2/graphql/query"
                  ),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  data: data,
                };
              },
              queryGraphqlStringProductS: function (t, e, r, n, o, c, l) {
                var d = this.$cookies.get("cps_province") || this.province;
                return "query  {\n                  products(\n                    filter: {\n                      static: {\n                      "
                  .concat(
                    r ? "is_parent: ".concat(JSON.stringify(r)) : "",
                    "\n                      "
                  )
                  .concat(
                    t ? "product_id : ".concat(t, ",") : "",
                    "\n                      "
                  )
                  .concat(
                    e ? "categories : ".concat(e) : "",
                    "\n                      province_id: "
                  )
                  .concat(d.id, ",\n                      ")
                  .concat(
                    c
                      ? "stock: {\n                        from: 1\n                      }"
                      : "",
                    "\n                      "
                  )
                  .concat(
                    n || o
                      ? ",filter_price: {\n                        from: "
                          .concat(n, ", to: ")
                          .concat(o, "\n                      },")
                      : "",
                    "\n                      }\n                      "
                  )
                  .concat(
                    l
                      ? "dynamic: {\n                        sku: {\n                          prefix: ".concat(
                          l,
                          '\n                        }\n                        product_condition: {\n                          eq: "Cũ"\n                        }\n                      }'
                        )
                      : "",
                    "\n                    }\n                    sort: [{view: desc}]\n                    size: 10\n                  ) {\n                   filterable{\n                      price\n                      special_price\n                      stock\n                      thumbnail\n                      promotion_pack\n                      sticker\n                      product_id\n                      filter_price\n                      price\n                      sticker\n                      special_price\n                      stock_available_id\n                      stock\n                      filter{\n                        id\n                        value\n                      }\n                   }\n                   general {\n                      attributes\n                      url_path\n                      doc_quyen\n                      url_key\n                      manufacturer\n                      name\n                      product_id\n                    }\n                  }\n                }"
                  );
              },
              getListUpsell: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, c, l, d, f, v, h, m, O, x, P;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t.isCrossSell =
                                (null === (r = t.dataCombo) || void 0 === r
                                  ? void 0
                                  : r.length) > 0),
                              (t.dataList = t.dataCombo),
                              (n = t.productData.general.up_sell),
                              (o = t.province.id),
                              (c = []),
                              0 !== (null == n ? void 0 : n.length))
                            ) {
                              e.next = 21;
                              break;
                            }
                            return (
                              (d =
                                null === (l = t.productData.general) ||
                                void 0 === l ||
                                null === (l = l.categories) ||
                                void 0 === l
                                  ? void 0
                                  : l.map(function (t) {
                                      return t.categoryId;
                                    })),
                              (f = t.getListUpsellByCateIds({
                                cateIds: d,
                                provinceId: o,
                              })),
                              (e.next = 10),
                              f
                            );
                          case 10:
                            return (
                              (v = []),
                              0 === t.listProductUpSell.length &&
                                ((t.accessoriesData = {
                                  title: "PHỤ KIỆN MUA CÙNG",
                                  items: [],
                                  isCrossSell: !0,
                                }),
                                Object.assign(t.renderOptions, {
                                  accessories: {
                                    title: t.accessoriesData.title,
                                    show:
                                      null === (h = t.accessoriesData) ||
                                      void 0 === h
                                        ? void 0
                                        : h.isCrossSell,
                                    isCrossSell:
                                      null === (m = t.accessoriesData) ||
                                      void 0 === m
                                        ? void 0
                                        : m.isCrossSell,
                                    items: t.accessoriesData.items,
                                  },
                                })),
                              (e.next = 14),
                              t.listProductUpSell.forEach(function (t) {
                                c.push(t.products.general.product_id),
                                  v.push(t.products);
                              })
                            );
                          case 14:
                            return (
                              (e.next = 16),
                              t.getListRatingGraphql({ productIds: c })
                            );
                          case 16:
                            (O = e.sent),
                              (t.dataList = v),
                              (t.dataList.reviews = O),
                              (e.next = 31);
                            break;
                          case 21:
                            return (
                              (x = t.getListUpSellByProduct({
                                listUpsell: n,
                                provinceId: o,
                              })),
                              (e.next = 24),
                              x
                            );
                          case 24:
                            return (
                              0 === t.listProductUpSell.length &&
                                (t.dataList = []),
                              t.listProductUpSell.forEach(function (t) {
                                c.push(t.general.product_id);
                              }),
                              (e.next = 28),
                              t.getListRatingGraphql({ productIds: c })
                            );
                          case 28:
                            (P = e.sent),
                              (t.dataList = t.listProductUpSell),
                              (t.dataList.reviews = P);
                          case 31:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              getTradeProducts: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              null !== (r = t.productData.general) &&
                              void 0 !== r &&
                              null !== (r = r.attributes) &&
                              void 0 !== r &&
                              r.product_condition &&
                              46 ===
                                (null === (n = t.productData.filterable) ||
                                void 0 === n
                                  ? void 0
                                  : n.stock_available_id)
                            ) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.next = 4),
                              t.getTradeProductLinked({
                                productId: t.productId,
                                exchangeProductCondition:
                                  "Cũ" ===
                                  (null === (o = t.productData.general) ||
                                  void 0 === o ||
                                  null === (o = o.attributes) ||
                                  void 0 === o
                                    ? void 0
                                    : o.product_condition)
                                    ? 2
                                    : 1,
                              })
                            );
                          case 4:
                            t.dataList = t.exchangeProductSheetData;
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              handleOption: function (t) {
                (this.selectedOption = t),
                  (this.isCrossSell = "isCrossSell" === t);
              },
            }
          ),
        },
        v = (r(1074), r(42)),
        component = Object(v.a)(
          f,
          function () {
            var t,
              e,
              r,
              n = this,
              o = n._self._c;
            return (null === (t = n.dataList) || void 0 === t
              ? void 0
              : t.length) > 0
              ? o(
                  "div",
                  { staticClass: "block-same-product-mobile" },
                  [
                    n.hasOption &&
                    (null === (e = n.dataCombo) || void 0 === e
                      ? void 0
                      : e.length) > 0
                      ? o(
                          "div",
                          { staticClass: "same-product-title-option is-flex" },
                          [
                            o(
                              "div",
                              {
                                staticClass: "same-product-title-option__item",
                                class: {
                                  active: "isCrossSell" === n.selectedOption,
                                },
                                on: {
                                  click: function (t) {
                                    return n.handleOption("isCrossSell");
                                  },
                                },
                              },
                              [n._v("Mua kèm giá sốc\n    ")]
                            ),
                            n._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "same-product-title-option__item",
                                class: {
                                  active: "normal" === n.selectedOption,
                                },
                                on: {
                                  click: function (t) {
                                    return n.handleOption("normal");
                                  },
                                },
                              },
                              [n._v("Phụ kiện mua cùng\n    ")]
                            ),
                          ]
                        )
                      : o("h2", { staticClass: "same-product-title" }, [
                          n._v(n._s(n.title)),
                        ]),
                    n._v(" "),
                    n.isCrossSell
                      ? o("CrossSell", {
                          attrs: {
                            "price-main-product":
                              n.productData.filterable.special_price,
                            "product-data": n.productData,
                          },
                        })
                      : n.isExchange
                      ? o("ExchangeProducts", {
                          attrs: { "list-product": n.exchangeProductSheetData },
                        })
                      : o("ProductList", {
                          attrs: {
                            "option-swiper": n.options,
                            "list-product": n.dataList,
                            "is-old": n.isOld,
                            "list-review":
                              (null === (r = n.dataList) || void 0 === r
                                ? void 0
                                : r.reviews) || {},
                            "is-compare": n.isCompare,
                            "tracking-itm": n.trackingItm,
                          },
                        }),
                    n._v(" "),
                    o("SearchCompare", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: n.isCompare,
                          expression: "isCompare",
                        },
                      ],
                    }),
                  ],
                  1
                )
              : n._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    788: function (t, e, r) {
      t.exports = {};
    },
  },
]);
