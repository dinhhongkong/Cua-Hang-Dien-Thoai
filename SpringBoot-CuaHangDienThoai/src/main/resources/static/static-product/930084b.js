(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    1073: function (e, t, r) {
      "use strict";
      r(787);
    },
    1376: function (e, t, r) {
      "use strict";
      r.r(t);
      r(17), r(24), r(30), r(31);
      var n = r(0),
        o = r(6),
        c =
          (r(8),
          r(5),
          r(33),
          r(36),
          r(52),
          r(16),
          r(44),
          r(38),
          r(10),
          r(18),
          r(34),
          r(11),
          r(92),
          r(15));
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var v = {
          name: "BoxSameProduct",
          components: {
            ProductList: function () {
              return Promise.all([r.e(1), r.e(15)]).then(r.bind(null, 1181));
            },
            CrossSell: function () {
              return Promise.all([r.e(1), r.e(22), r.e(65)]).then(
                r.bind(null, 1379)
              );
            },
            SearchCompare: function () {
              return r.e(41).then(r.bind(null, 1309));
            },
            ExchangeProducts: function () {
              return Promise.all([r.e(1), r.e(67)]).then(r.bind(null, 1380));
            },
          },
          props: {
            listReview: {
              type: Object,
              default: function () {
                return {};
              },
            },
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            isNewProduct: { type: Boolean, default: !0 },
          },
          data: function () {
            return {
              activeBlock: this.renderOptions
                ? this.renderOptions[Object.keys(this.renderOptions)[0]]
                : "",
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
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  717: {
                    slidesPerView: 3.4,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  990: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesPerGroup: 4,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    slidesPerColumn: this.slidesPerColumn,
                    slidesPerColumnFill: "row",
                  },
                },
              },
              inputSearch: "",
              searchData: [],
              loading: !1,
              searching: !1,
              accessoriesData: {},
              exchangeProductData: {},
              similarData: {},
              componentData: {},
              oldData: {},
              renderOptions: {},
            };
          },
          computed: d(
            d(
              d(
                d(
                  d(
                    d(
                      d({}, Object(c.d)("compare", ["searchResults"])),
                      Object(c.d)("cross-sell", ["dataCombo"])
                    ),
                    Object(c.d)("review", ["reviewData"])
                  ),
                  Object(c.d)("province", ["province"])
                ),
                Object(c.d)("product", ["listProductUpSell", "productId"])
              ),
              Object(c.d)("pdp-trade", ["exchangeProductSheetData"])
            ),
            {},
            {
              renderTitle: function () {
                var e, t;
                return null !== (e = this.renderOptions) &&
                  void 0 !== e &&
                  null !== (e = e[this.activeBlock]) &&
                  void 0 !== e &&
                  e.isExchange
                  ? "Bán máy cũ lên đời tiết kiệm hơn"
                  : null === (t = this.renderOptions) ||
                    void 0 === t ||
                    null === (t = t[this.activeBlock]) ||
                    void 0 === t
                  ? void 0
                  : t.title;
              },
              sameProductLowPrice: function () {
                var e, t, r, n;
                return JSON.stringify(
                  (null === (e = this.productData.filterable) || void 0 === e
                    ? void 0
                    : e.special_price) -
                    0.1 *
                      (null === (t = this.productData.filterable) ||
                      void 0 === t
                        ? void 0
                        : t.special_price) ||
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
                var e, t, r, n;
                return JSON.stringify(
                  (null === (e = this.productData.filterable) || void 0 === e
                    ? void 0
                    : e.special_price) +
                    0.1 *
                      (null === (t = this.productData.filterable) ||
                      void 0 === t
                        ? void 0
                        : t.special_price) ||
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
          watch: {
            inputSearch: function () {
              var e = this;
              clearTimeout(this.timeOut),
                (this.loading = !0),
                (this.timeOut = setTimeout(
                  Object(n.a)(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!(e.inputSearch.length >= 3)) {
                                t.next = 4;
                                break;
                              }
                              return (
                                (t.next = 3),
                                e.searchProductToCompare(e.inputSearch)
                              );
                            case 3:
                              e.searchResults && (e.loading = !1);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  ),
                  500
                ));
            },
            activeBlock: function () {
              this.options = {
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
                  717: { slidesPerView: 3.4 },
                  768: { slidesPerView: 3 },
                  990: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                },
              };
            },
          },
          mounted: function () {
            var e = this;
            this.$nextTick(
              Object(n.a)(
                regeneratorRuntime.mark(function t() {
                  var r, n, o;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.getTradeProducts();
                        case 2:
                          return (t.next = 4), e.getListSimilar();
                        case 4:
                          if (!e.isNewProduct) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 7), e.getOldProduct();
                        case 7:
                          if (
                            null === (r = e.productData.general) ||
                            void 0 === r ||
                            !r.product_components
                          ) {
                            t.next = 10;
                            break;
                          }
                          return (
                            (t.next = 10),
                            e.getProductComponents(
                              e.productData.general.product_components
                            )
                          );
                        case 10:
                          for (o in ((n = []), e.renderOptions))
                            e.renderOptions[o].show && n.push(o);
                          e.activeBlock = n[0];
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )
            );
          },
          methods: d(
            d(
              d(
                d(
                  d({}, Object(c.b)("review", ["getListRatingGraphql"])),
                  Object(c.b)("compare", ["searchProductToCompare"])
                ),
                Object(c.b)("product", [
                  "getListUpSellByProduct",
                  "getListUpsellByCateIds",
                ])
              ),
              Object(c.b)("pdp-trade", ["getTradeProductLinked"])
            ),
            {},
            {
              focusOutSearchInput: function () {
                var e = this;
                setTimeout(function () {
                  e.searching = !1;
                }, 500);
              },
              newCompareUrl: function (path) {
                return (
                  "/so-sanh" +
                  this.$route.path.replace(".html", "") +
                  "-vs-" +
                  (path = path.replace(".html", ""))
                );
              },
              handleClickItem: function (e) {
                this.activeBlock = e;
              },
              getListSimilar: function () {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, n, o, c, l, d, data, v, h, m, f, P, w, O, C, x;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                0 !==
                                  (null ===
                                    (r = e.productData.general.categories) ||
                                  void 0 === r
                                    ? void 0
                                    : r.length) &&
                                e.productData.general.categories
                              ) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              return (
                                (o =
                                  null === (n = e.productData.general) ||
                                  void 0 === n ||
                                  null === (n = n.categories) ||
                                  void 0 === n
                                    ? void 0
                                    : n.map(function (e) {
                                        return e.similar.split(",");
                                      })),
                                (c = [].concat.apply([], o)),
                                (l = c.filter(function (e) {
                                  return e;
                                })),
                                (d = JSON.stringify(
                                  l.map(function (e) {
                                    return e.toString();
                                  })
                                )),
                                (data = JSON.stringify({
                                  query: e.queryGraphqlStringProductS(
                                    "",
                                    d,
                                    "true",
                                    e.sameProductLowPrice,
                                    e.sameProductHighPrice
                                  ),
                                  variables: {},
                                })),
                                (v = e.graphqlConfig(data)),
                                (t.prev = 8),
                                (t.next = 11),
                                e.$axios(v)
                              );
                            case 11:
                              if (200 !== (h = t.sent).status) {
                                t.next = 23;
                                break;
                              }
                              return (
                                (w = []),
                                (O =
                                  null === (m = h.data.data.products) ||
                                  void 0 === m
                                    ? void 0
                                    : m.filter(function (e) {
                                        return null !== e.general;
                                      })),
                                (t.next = 17),
                                null == O
                                  ? void 0
                                  : O.forEach(function (e) {
                                      w.push(e.general.product_id);
                                    })
                              );
                            case 17:
                              return (
                                (t.next = 19),
                                e.getListRatingGraphql({ productIds: w })
                              );
                            case 19:
                              (C = t.sent),
                                (x =
                                  null === (f = h.data.data.products) ||
                                  void 0 === f
                                    ? void 0
                                    : f.filter(function (t) {
                                        return (
                                          t.general.product_id !==
                                            e.productData.general.attributes
                                              .id && t.filterable.stock > 0
                                        );
                                      })),
                                (e.similarData = {
                                  title: "SẢN PHẨM TƯƠNG TỰ",
                                  items: x,
                                  reviews: C,
                                }),
                                Object.assign(e.renderOptions, {
                                  similar: {
                                    title: e.similarData.title,
                                    show:
                                      (null == e ||
                                      null === (P = e.similarData.items) ||
                                      void 0 === P
                                        ? void 0
                                        : P.length) > 0,
                                    items: e.similarData.items,
                                    reviews: e.similarData.reviews,
                                  },
                                });
                            case 23:
                              t.next = 28;
                              break;
                            case 25:
                              (t.prev = 25),
                                (t.t0 = t.catch(8)),
                                console.log(t.t0);
                            case 28:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[8, 25]]
                    );
                  })
                )();
              },
              getOldProduct: function () {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function t() {
                    var data, r, n, o, c, l, d;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (data = JSON.stringify({
                                  query: e.queryGraphqlStringProductS(
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    !0,
                                    JSON.stringify(e.productData.general.sku)
                                  ),
                                  variables: {},
                                })),
                                (r = e.graphqlConfig(data)),
                                (t.prev = 2),
                                (t.next = 5),
                                e.$axios(r)
                              );
                            case 5:
                              if (200 !== (n = t.sent).status) {
                                t.next = 18;
                                break;
                              }
                              if (n.data.data.products) {
                                t.next = 9;
                                break;
                              }
                              return t.abrupt("return");
                            case 9:
                              return (
                                (c = []),
                                (l =
                                  null === (o = n.data.data.products) ||
                                  void 0 === o
                                    ? void 0
                                    : o.filter(function (e) {
                                        return null !== e.general;
                                      })),
                                (t.next = 13),
                                null == l
                                  ? void 0
                                  : l.forEach(function (e) {
                                      c.push(e.general.product_id);
                                    })
                              );
                            case 13:
                              return (
                                (t.next = 15),
                                e.getListRatingGraphql({ productIds: c })
                              );
                            case 15:
                              (d = t.sent),
                                (e.oldProductList = {
                                  title: "THAM KHẢO THÊM HÀNG CŨ",
                                  items: n.data.data.products,
                                  reviews: d,
                                }),
                                Object.assign(e.renderOptions, {
                                  oldProduct: {
                                    title: e.oldProductList.title,
                                    show: !0,
                                    items: e.oldProductList.items,
                                    reviews: e.oldProductList.reviews,
                                  },
                                });
                            case 18:
                              t.next = 23;
                              break;
                            case 20:
                              (t.prev = 20),
                                (t.t0 = t.catch(2)),
                                console.log(t.t0);
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 20]]
                    );
                  })
                )();
              },
              getProductComponents: function (e) {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, data, o, c, l, d;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (n = JSON.stringify(
                                  e.map(function (e) {
                                    return e.toString();
                                  })
                                )),
                                (data = JSON.stringify({
                                  query: t.queryGraphqlStringProductS(n),
                                  variables: {},
                                })),
                                (o = t.graphqlConfig(data)),
                                (r.prev = 3),
                                (r.next = 6),
                                t.$axios(o)
                              );
                            case 6:
                              if (200 !== (c = r.sent).status) {
                                r.next = 16;
                                break;
                              }
                              if (c.data.data.products) {
                                r.next = 10;
                                break;
                              }
                              return r.abrupt("return");
                            case 10:
                              return (
                                (l = e.join(",")),
                                (r.next = 13),
                                t.getListRatingGraphql({ productIds: l })
                              );
                            case 13:
                              (d = r.sent),
                                (t.componentData = {
                                  title: "LINH KIỆN CẤU THÀNH",
                                  items: c.data.data.products,
                                  reviews: d,
                                }),
                                Object.assign(t.renderOptions, {
                                  component: {
                                    title: t.componentData.title,
                                    show: !0,
                                    items: t.componentData.items,
                                    reviews: t.componentData.reviews,
                                  },
                                });
                            case 16:
                              r.next = 21;
                              break;
                            case 18:
                              (r.prev = 18),
                                (r.t0 = r.catch(3)),
                                console.log(r.t0);
                            case 21:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[3, 18]]
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
              queryGraphqlStringProductS: function (e, t, r, n, o, c, l) {
                var d = this.$cookies.get("cps_province") || this.province;
                return "query  {\n                  products(\n                    filter: {\n                      static: {\n                      "
                  .concat(
                    r ? "is_parent: ".concat(JSON.stringify(r)) : "",
                    "\n                      "
                  )
                  .concat(
                    e ? "product_id : ".concat(e, ",") : "",
                    "\n                      "
                  )
                  .concat(
                    t ? "categories : ".concat(t) : "",
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
                    "\n                    }\n                    sort: [{view: desc}]\n                    size: 10\n                  ) {\n                   "
                  )
                  .concat(this.queryString(), "\n                }");
              },
              queryString: function () {
                return "\n       filterable{\n                      price\n                      special_price\n                      stock\n                      thumbnail\n                      promotion_pack\n                      sticker\n                      product_id\n                      filter_price\n                      price\n                      sticker\n                      special_price\n                      stock_available_id\n                      stock\n                      filter{\n                        id\n                        value\n                      }\n                   }\n                   general {\n                      attributes\n                      url_path\n                      doc_quyen\n                      url_key\n                      manufacturer\n                      name\n                      product_id\n                    }\n                  }";
              },
              getListUpsell: function () {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function t() {
                    var r,
                      n,
                      o,
                      c,
                      l,
                      d,
                      v,
                      h,
                      m,
                      f,
                      P,
                      w,
                      O,
                      C,
                      x,
                      k,
                      D,
                      S,
                      y,
                      _,
                      j;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              null !== (r = e.dataCombo) &&
                              void 0 !== r &&
                              r.length
                            ) {
                              t.next = 32;
                              break;
                            }
                            if (
                              ((n = e.productData.general.up_sell),
                              (o = e.province.id),
                              (c = []),
                              0 !== (null == n ? void 0 : n.length))
                            ) {
                              t.next = 19;
                              break;
                            }
                            return (
                              (h =
                                null === (l = e.productData.general) ||
                                void 0 === l ||
                                null === (l = l.categories) ||
                                void 0 === l
                                  ? void 0
                                  : l.map(function (e) {
                                      return e.categoryId;
                                    })),
                              (m = e.getListUpsellByCateIds({
                                cateIds: h,
                                provinceId: o,
                              })),
                              (t.next = 9),
                              m
                            );
                          case 9:
                            return (
                              (f = []),
                              0 === e.listProductUpSell.length &&
                                ((e.accessoriesData = {
                                  title: "PHỤ KIỆN MUA CÙNG",
                                  items: [],
                                  isCrossSell: !0,
                                }),
                                Object.assign(e.renderOptions, {
                                  accessories: {
                                    title: e.accessoriesData.title,
                                    show:
                                      null === (P = e.accessoriesData) ||
                                      void 0 === P
                                        ? void 0
                                        : P.isCrossSell,
                                    isCrossSell:
                                      null === (w = e.accessoriesData) ||
                                      void 0 === w
                                        ? void 0
                                        : w.isCrossSell,
                                    items: e.accessoriesData.items,
                                  },
                                })),
                              null === (d = e.listProductUpSell) ||
                                void 0 === d ||
                                d.forEach(function (e) {
                                  c.push(e.products.general.product_id),
                                    f.push(e.products);
                                }),
                              (t.next = 14),
                              e.getListRatingGraphql({ productIds: c })
                            );
                          case 14:
                            (O = t.sent),
                              (e.accessoriesData = {
                                title: "PHỤ KIỆN MUA CÙNG",
                                items: f,
                                isCrossSell: !1,
                                reviews: O,
                              }),
                              Object.assign(e.renderOptions, {
                                accessories: {
                                  title: e.accessoriesData.title,
                                  show:
                                    (null == e ||
                                    null === (v = e.accessoriesData.items) ||
                                    void 0 === v
                                      ? void 0
                                      : v.length) > 0,
                                  items: e.accessoriesData.items,
                                  reviews: e.accessoriesData.reviews,
                                },
                              }),
                              (t.next = 30);
                            break;
                          case 19:
                            return (
                              (k = e.getListUpSellByProduct({
                                listUpsell: n,
                                provinceId: o,
                              })),
                              (t.next = 22),
                              k
                            );
                          case 22:
                            return (
                              0 === e.listProductUpSell.length &&
                                ((e.accessoriesData = {
                                  title: "PHỤ KIỆN MUA CÙNG",
                                  items: [],
                                  isCrossSell: !0,
                                }),
                                Object.assign(e.renderOptions, {
                                  accessories: {
                                    title: e.accessoriesData.title,
                                    show:
                                      null === (D = e.accessoriesData) ||
                                      void 0 === D
                                        ? void 0
                                        : D.isCrossSell,
                                    isCrossSell:
                                      null === (S = e.accessoriesData) ||
                                      void 0 === S
                                        ? void 0
                                        : S.isCrossSell,
                                    items: e.accessoriesData.items,
                                  },
                                })),
                              (t.next = 25),
                              null === (C = e.listProductUpSell) || void 0 === C
                                ? void 0
                                : C.forEach(function (e) {
                                    c.push(e.general.product_id);
                                  })
                            );
                          case 25:
                            return (
                              (t.next = 27),
                              e.getListRatingGraphql({ productIds: c })
                            );
                          case 27:
                            (y = t.sent),
                              (e.accessoriesData = {
                                title: "PHỤ KIỆN MUA CÙNG",
                                items: e.listProductUpSell,
                                isCrossSell: !1,
                                reviews: y,
                              }),
                              Object.assign(e.renderOptions, {
                                accessories: {
                                  title: e.accessoriesData.title,
                                  show:
                                    (null == e ||
                                    null === (x = e.accessoriesData.items) ||
                                    void 0 === x
                                      ? void 0
                                      : x.length) > 0,
                                  items: e.accessoriesData.items,
                                  reviews: e.accessoriesData.reviews,
                                },
                              });
                          case 30:
                            t.next = 34;
                            break;
                          case 32:
                            (e.accessoriesData = {
                              title: "PHỤ KIỆN MUA CÙNG",
                              items: [],
                              isCrossSell: !0,
                            }),
                              Object.assign(e.renderOptions, {
                                accessories: {
                                  title: e.accessoriesData.title,
                                  show:
                                    null === (_ = e.accessoriesData) ||
                                    void 0 === _
                                      ? void 0
                                      : _.isCrossSell,
                                  isCrossSell:
                                    null === (j = e.accessoriesData) ||
                                    void 0 === j
                                      ? void 0
                                      : j.isCrossSell,
                                  items: e.accessoriesData.items,
                                },
                              });
                          case 34:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              getTradeProducts: function () {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              null !== (r = e.productData.general) &&
                              void 0 !== r &&
                              null !== (r = r.attributes) &&
                              void 0 !== r &&
                              r.product_condition &&
                              46 ===
                                (null === (n = e.productData.filterable) ||
                                void 0 === n
                                  ? void 0
                                  : n.stock_available_id)
                            ) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.next = 4),
                              e.getTradeProductLinked({
                                productId: e.productId,
                                exchangeProductCondition:
                                  "Cũ" ===
                                  (null === (o = e.productData.general) ||
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
                            e.exchangeProductSheetData.length > 0 &&
                              ((e.exchangeProductsData = {
                                title: "THU CŨ ĐỔI MỚI GIÁ TỐT",
                                items: e.exchangeProductSheetData,
                                isExchange: !0,
                              }),
                              Object.assign(e.renderOptions, {
                                exchange: {
                                  title: e.exchangeProductsData.title,
                                  show: !0,
                                  items: e.exchangeProductsData.items,
                                  isExchange: e.exchangeProductsData.isExchange,
                                },
                              }));
                          case 5:
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
        h = (r(1073), r(42)),
        component = Object(h.a)(
          v,
          function () {
            var e,
              t = this,
              r = t._self._c;
            return r(
              "div",
              { staticClass: "block-same-product" },
              [
                r(
                  "div",
                  {
                    staticClass:
                      "same-product-options-list is-flex is-justify-content-space-between",
                  },
                  [
                    r(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: Object.keys(t.renderOptions).length > 1,
                            expression: "Object.keys(renderOptions).length>1",
                          },
                        ],
                        staticClass: "product-options-tabs",
                      },
                      [
                        t._l(t.renderOptions, function (e, n, o) {
                          return [
                            e.show
                              ? r(
                                  "div",
                                  {
                                    key: o,
                                    staticClass: "item button__tab",
                                    class: [
                                      n === t.activeBlock && "active",
                                      !e.title && "hidden",
                                    ],
                                    on: {
                                      click: function () {
                                        return t.handleClickItem(n);
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(e.title) +
                                        "\n        "
                                    ),
                                  ]
                                )
                              : t._e(),
                          ];
                        }),
                      ],
                      2
                    ),
                  ]
                ),
                t._v(" "),
                r(
                  "div",
                  { staticClass: "same-product-head" },
                  [
                    null !== (e = t.renderOptions[t.activeBlock]) &&
                    void 0 !== e &&
                    null !== (e = e.items) &&
                    void 0 !== e &&
                    e.length
                      ? r("h2", { staticClass: "same-product-title mt-2" }, [
                          t._v(t._s(t.renderTitle)),
                        ])
                      : t._e(),
                    t._v(" "),
                    r("SearchCompare", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "similar" === t.activeBlock,
                          expression: "activeBlock==='similar'",
                        },
                      ],
                    }),
                  ],
                  1
                ),
                t._v(" "),
                "exchange" === t.activeBlock &&
                t.renderOptions[t.activeBlock].isExchange
                  ? r("ExchangeProducts", {
                      attrs: {
                        "list-product": t.renderOptions[t.activeBlock].items,
                      },
                    })
                  : t._e(),
                t._v(" "),
                "accessories" === t.activeBlock &&
                t.renderOptions[t.activeBlock].isCrossSell
                  ? r("CrossSell", {
                      attrs: {
                        "price-main-product":
                          t.productData.filterable.special_price,
                        "product-data": t.productData,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t._l(t.renderOptions, function (e, n) {
                  return [
                    e.isExchange
                      ? t._e()
                      : r("ProductList", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.activeBlock === n && !e.isCrossSell,
                              expression:
                                "activeBlock === key && !item.isCrossSell",
                            },
                          ],
                          key: n,
                          attrs: {
                            "option-swiper": t.options,
                            "list-product": e.items,
                            "list-review": t.renderOptions[n].reviews,
                            "is-compare": "similar" === t.activeBlock,
                            "is-show-discount-percent": !0,
                            "is-old": "oldProduct" === t.activeBlock,
                            "tracking-itm": "",
                          },
                        }),
                  ];
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "335cffc8",
          null
        );
      t.default = component.exports;
    },
    787: function (e, t, r) {
      e.exports = {};
    },
  },
]);
