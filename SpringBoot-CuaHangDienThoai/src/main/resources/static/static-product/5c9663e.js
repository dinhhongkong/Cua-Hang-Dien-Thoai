(window.webpackJsonp = window.webpackJsonp || []).push([
  [66, 68, 142],
  {
    512: function (t, e, r) {
      t.exports = {};
    },
    516: function (t, e, r) {
      "use strict";
      r(512);
    },
    519: function (t, e, r) {
      "use strict";
      r.r(e);
      r(47);
      var n = {
          name: "RightContent",
          props: {
            data: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              placeHolder:
                "https://cdn2.cellphones.com.vn/90x65/media/wysiwyg/placehoder.png",
            };
          },
        },
        o = (r(516), r(42)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "block-sforum" }, [
              e(
                "div",
                { staticClass: "sforum__title" },
                [
                  e("RenderHtml", {
                    staticClass: "icon",
                    attrs: { html: t.$icons().NewsPaper },
                  }),
                  t._v("\n    " + t._s(t.data.title) + "\n  "),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                { staticClass: "sforum__content" },
                t._l(t.data.dataItem.slice(0, 5), function (r, n) {
                  return e(
                    "a",
                    t._b(
                      {
                        key: n,
                        staticClass:
                          "sforum__content-item button__link is-flex",
                        attrs: { target: "_blank" },
                      },
                      "a",
                      { href: r.post_name },
                      !1
                    ),
                    [
                      e("nuxt-img", {
                        staticClass: "content-item__img",
                        attrs: {
                          src: r.image,
                          alt: r.post_title,
                          loading: "lazy",
                        },
                      }),
                      t._v(" "),
                      e("RenderHtml", {
                        staticClass: "content-item__text",
                        attrs: { html: r.post_title },
                      }),
                    ],
                    1
                  );
                }),
                0
              ),
              t._v(" "),
              e("div", { staticClass: "block-sforum_btn-showmore" }, [
                e(
                  "a",
                  t._b(
                    {
                      staticClass: "btn-show-more button__link",
                      attrs: { target: "_blank" },
                    },
                    "a",
                    {
                      href: "https://cellphones.com.vn/sforum/tag/".concat(
                        t.data.tag
                      ),
                    },
                    !1
                  ),
                  [
                    t._v("\n      Xem tất cả bài viết "),
                    e("RenderHtml", {
                      attrs: { html: t.$icons().ChevronDown },
                    }),
                  ],
                  1
                ),
              ]),
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
    576: function (t, e, r) {
      "use strict";
      r(3)({ target: "Math", stat: !0 }, { trunc: r(208) });
    },
    706: function (t, e, r) {
      t.exports = {};
    },
    851: function (t, e, r) {
      "use strict";
      r.r(e);
      r(17), r(32), r(48), r(576), r(24), r(30), r(31);
      var n = r(6),
        o = r(0),
        c =
          (r(8),
          r(5),
          r(33),
          r(36),
          r(132),
          r(38),
          r(10),
          r(16),
          r(44),
          r(11),
          r(18),
          r(77),
          r(52),
          r(34),
          r(15)),
        l = r(499),
        d = r(203);
      function m(t, e) {
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
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(r), !0).forEach(function (e) {
                Object(n.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "DetailV2",
          components: {
            TimerBanner: function () {
              return r.e(20).then(r.bind(null, 1315));
            },
            Content: function () {
              return Promise.resolve().then(r.bind(null, 507));
            },
            Comment: function () {
              return r.e(0).then(r.bind(null, 1359));
            },
            WishList: function () {
              return r.e(28).then(r.bind(null, 1365));
            },
            BoxPrice: function () {
              return r.e(16).then(r.bind(null, 1168));
            },
            ModalB2b: function () {
              return r.e(53).then(r.bind(null, 1412));
            },
            FaqModule: function () {
              return r.e(5).then(r.bind(null, 1361));
            },
            BlockSforum: function () {
              return Promise.resolve().then(r.bind(null, 519));
            },
            BoxReview: function () {
              return r.e(39).then(r.bind(null, 1375));
            },
            BoxLinked: function () {
              return r.e(123).then(r.bind(null, 1167));
            },
            BoxSimSo: function () {
              return r.e(63).then(r.bind(null, 1367));
            },
            TechnicalInfo: function () {
              return Promise.resolve().then(r.bind(null, 520));
            },
            BoxVariants: function () {
              return Promise.all([r.e(1), r.e(135)]).then(r.bind(null, 1174));
            },
            Breadcrumbs: function () {
              return r.e(7).then(r.bind(null, 1355));
            },
            BoxWarranty: function () {
              return r.e(64).then(r.bind(null, 1378));
            },
            ExtendedWarranty: function () {
              return r.e(131).then(r.bind(null, 1177));
            },
            BoxNewProduct: function () {
              return r.e(57).then(r.bind(null, 1370));
            },
            BoxOnStockStores: function () {
              return r.e(58).then(r.bind(null, 1371));
            },
            BoxPromotion: function () {
              return r.e(127).then(r.bind(null, 1169));
            },
            BoxProductTVC: function () {
              return r.e(60).then(r.bind(null, 1374));
            },
            BoxSameProduct: function () {
              return r.e(61).then(r.bind(null, 1376));
            },
            BoxOrderButton: function () {
              return r.e(126).then(r.bind(null, 1152));
            },
            BoxMorePromotion: function () {
              return r.e(56).then(r.bind(null, 1369));
            },
            BoxCheckingSmember: function () {
              return r.e(130).then(r.bind(null, 1175));
            },
            BoxRegisterProduct: function () {
              return r.e(128).then(r.bind(null, 1170));
            },
            BoxOutOfStockButton: function () {
              return r.e(59).then(r.bind(null, 1373));
            },
            BoxCountdownProduct: function () {
              return r.e(55).then(r.bind(null, 1368));
            },
            BoxSpecialPromotion: function () {
              return r.e(129).then(r.bind(null, 1171));
            },
            BoxSameProductMobile: function () {
              return r.e(62).then(r.bind(null, 1377));
            },
            BoxOrderButtonMobile: function () {
              return r.e(70).then(r.bind(null, 1372));
            },
            GalleryProductDetail: function () {
              return Promise.all([r.e(1), r.e(38)]).then(r.bind(null, 1414));
            },
            TradePriceTabs: function () {
              return r.e(345).then(r.bind(null, 1173));
            },
            PdpTradeCtaBox: function () {
              return r.e(344).then(r.bind(null, 1172));
            },
            PdpCompareButton: function () {
              return r.e(86).then(r.bind(null, 1333));
            },
            PdpCompareModal: function () {
              return r.e(85).then(r.bind(null, 1332));
            },
            PdpSelectProductCompareModal: function () {
              return r.e(136).then(r.bind(null, 1162));
            },
          },
          props: {
            pageInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
            metaHead: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              head: {},
              breadcrumbsArr: [],
              productData: {},
              productContent: {},
              listChildProduct: [],
              relationProduct: [],
              listLinked: [],
              variants: [],
              strCategoryIds: "",
              selectColorVariantsIndex: -1,
              gallery: {},
              promotionPack: {},
              sforumPost: { title: "Tin tức về sản phẩm", dataItem: [] },
              active: !1,
              specialBanner: {},
              accessoriesList: { title: "", items: [] },
              similarList: { title: "", items: [] },
              oldProductList: { title: "", items: [] },
              contentBlockOldProduct: "",
              isOldProduct: !1,
              componentProductList: { title: "", items: [] },
              reviewSimilar: {},
              showModalTVC: !1,
              regionName: {
                1: "Miền Bắc_1",
                7: "Miền Nam_7",
                8: "Miền Trung_8",
              },
              isSimProduct: !1,
              placeHolderContent:
                "https://cdn2.cellphones.com.vn/100x/media/wysiwyg/placehoder.png",
              latestPrice: {},
              isCountdownPromotion: !1,
              infoSale: {
                uu_dai_tet: {
                  is_sale: !0,
                  type: "normal_sale",
                  bg_image:
                    "https://cdn2.cellphones.com.vn/800x,webp,q90/media/landing-page/xa-kho/xa-kho-2023/background_countdown_hot.png",
                  show_time: "2022-06-20T22:00:00",
                  start_time: "2023-06-23T00:00:00",
                  end_time: "2023-06-30T22:00:00",
                },
              },
              typeSale: "uu_dai_tet",
              isLoading: !0,
              pathCateIds: [],
            };
          },
          fetchKey: "product-detail",
          fetch: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var r,
                  n,
                  data,
                  o,
                  c,
                  l,
                  d,
                  m,
                  h,
                  v,
                  _,
                  i,
                  f,
                  k,
                  x,
                  D,
                  P,
                  y,
                  C,
                  S,
                  w,
                  B,
                  O;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (data = JSON.stringify({
                              query: t.queryGraphqlStringProduct(t.productId),
                              variables: {},
                            })),
                            (o = t.graphqlConfig(data)),
                            (e.prev = 2),
                            (e.next = 5),
                            t.$axios(o)
                          );
                        case 5:
                          if (200 !== (c = e.sent).status) {
                            e.next = 43;
                            break;
                          }
                          return (h = c.data.data.product), (e.next = 10), h;
                        case 10:
                          if (
                            ((t.productData = e.sent),
                            (t.relationProduct =
                              t.productData.general.relation || []),
                            !(t.relationProduct.length > 0))
                          ) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 15), t.getListLink();
                        case 15:
                          return (
                            (t.listChildProduct =
                              t.productData.general.child_product),
                            t.handleChangeProductColor(
                              (null === (l = t.productData.filterable) ||
                              void 0 === l
                                ? void 0
                                : l.default.product_id) || t.productId
                            ),
                            (v = t.getListComboDetail(
                              (null === (d = h.general) || void 0 === d
                                ? void 0
                                : d.categories) || []
                            )),
                            (e.next = 20),
                            v
                          );
                        case 20:
                          if (!t.listChildProduct) {
                            e.next = 23;
                            break;
                          }
                          return (
                            (e.next = 23),
                            t.getDataProductChild(t.listChildProduct)
                          );
                        case 23:
                          if (
                            ((t.selectColorVariantsIndex =
                              null === (m = t.variants) || void 0 === m
                                ? void 0
                                : m.findIndex(function (e) {
                                    return (
                                      e.general.attributes.id ===
                                      t.selectColorId
                                    );
                                  })),
                            !(t.selectColorVariantsIndex >= 0))
                          ) {
                            e.next = 29;
                            break;
                          }
                          return (e.next = 27), t.getListPromotion();
                        case 27:
                          e.next = 30;
                          break;
                        case 29:
                          t.promotionPack =
                            t.productData.filterable.promotion_pack;
                        case 30:
                          if (!t.productData.general.galleries) {
                            e.next = 43;
                            break;
                          }
                          return (
                            (e.next = 33),
                            t.productData.general.galleries.map(function (
                              e,
                              r
                            ) {
                              var n;
                              return {
                                image: e,
                                color: ""
                                  .concat(
                                    null === (n = t.productData) ||
                                      void 0 === n ||
                                      null === (n = n.general) ||
                                      void 0 === n
                                      ? void 0
                                      : n.name,
                                    " - "
                                  )
                                  .concat(r + 1),
                              };
                            })
                          );
                        case 33:
                          (_ = e.sent), (i = 0);
                        case 35:
                          if (!(i < _.length)) {
                            e.next = 43;
                            break;
                          }
                          return (
                            (e.next = 38),
                            _[i].image.replace(
                              "https://image.cellphones.com.vn/200x",
                              ""
                            )
                          );
                        case 38:
                          (f = e.sent),
                            (t.gallery["".concat(i)] = {
                              img: f,
                              name: _[i].color,
                            });
                        case 40:
                          i++, (e.next = 35);
                          break;
                        case 43:
                          e.next = 48;
                          break;
                        case 45:
                          (e.prev = 45),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0);
                        case 48:
                          return (
                            (e.next = 50),
                            t.getShopStockGraphql(
                              t.selectColorId || t.productId
                            )
                          );
                        case 50:
                          if (
                            ((k = t.productData.general.categories || []),
                            (t.breadcrumbsArr = k),
                            k.forEach(function (e, r) {
                              r < k.length - 1
                                ? (t.strCategoryIds += "".concat(
                                    e.categoryId,
                                    ","
                                  ))
                                : (t.strCategoryIds += "".concat(e.categoryId));
                            }),
                            !(t.breadcrumbsArr.length > 0))
                          ) {
                            e.next = 62;
                            break;
                          }
                          if (
                            ((t.pathCateIds =
                              t.breadcrumbsArr[
                                t.breadcrumbsArr.length - 1
                              ].path.split("/")),
                            (x = t.breadcrumbsArr.length),
                            (D = t.breadcrumbsArr[x - 1].path),
                            (t.breadcrumbsArr = t.breadcrumbsArr.filter(
                              function (e) {
                                return (
                                  123 === e.categoryId && (t.isSimProduct = !0),
                                  D.includes(e.categoryId) ? e : ""
                                );
                              }
                            )),
                            !t.isSimProduct)
                          ) {
                            e.next = 61;
                            break;
                          }
                          return (
                            (e.next = 61),
                            t.getListOfPhoneNumbers({
                              productCode:
                                t.productData.general.attributes
                                  .additional_information,
                              currentPage: 1,
                              keySearch: "",
                              groupName: "",
                            })
                          );
                        case 61:
                          0 === t.productDetailNumberList.size &&
                            (t.isSimProduct = !1);
                        case 62:
                          return (
                            (e.next = 64),
                            t.checkTradePromo({
                              productId: t.productId,
                              categories:
                                (null === (r = t.productData.general) ||
                                void 0 === r
                                  ? void 0
                                  : r.categories) || [],
                            })
                          );
                        case 64:
                          return (
                            (P = t.getReviewsGraphqlV2({
                              productId: t.productId,
                            })),
                            (y = t.getReviewAttributeItemGraphql({
                              productId: t.productId,
                            })),
                            (C = t.getCommentsGraphql({
                              type: "product",
                              productId: t.productId,
                            })),
                            (e.next = 69),
                            P
                          );
                        case 69:
                          return (e.next = 71), y;
                        case 71:
                          return (e.next = 73), C;
                        case 73:
                          return (
                            t.setAllTotalReviews(t.totalReviews),
                            (t.head = JSON.parse(JSON.stringify(t.metaHead))),
                            t.head.meta.push({
                              property: "og:image",
                              content:
                                "https://cdn2.cellphones.com.vn/200x/media/catalog/product".concat(
                                  t.pageInfo.meta_image
                                ),
                            }),
                            (S = t.createJsonSchemaBreadcrumb(
                              t.breadcrumbsArr,
                              t.productData.general.name
                            )),
                            (w = t.createJsonSchemaProduct(
                              t.productData,
                              t.pageInfo,
                              t.rating,
                              t.reviewData,
                              t.tradePromoValue || 0
                            )),
                            (B = {
                              "@context": "https://schema.org",
                              "@type": "BreadcrumbList",
                              itemListElement: S,
                            }),
                            (t.head.script = [
                              { type: "application/ld+json", json: B },
                            ]),
                            t.head.script.push({
                              type: "application/ld+json",
                              json: w,
                            }),
                            (null === (n = t.commentList) || void 0 === n
                              ? void 0
                              : n.length) > 0 &&
                              ((O = t.createJsonSchemaFaq(
                                t.commentList,
                                t.$route.path
                              )),
                              t.head.script.push({
                                type: "application/ld+json",
                                json: O,
                              })),
                            (e.next = 84),
                            t.getDataSpecialBanner()
                          );
                        case 84:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 45]]
                );
              })
            )();
          },
          head: function () {
            return this.head;
          },
          computed: h(
            h(
              h(
                h(
                  h(
                    h(
                      h(
                        h(
                          h(
                            h(
                              h(
                                h(
                                  h({}, Object(c.d)("sforum", ["sforumNews"])),
                                  Object(c.d)("block-by-id", ["blockData"])
                                ),
                                Object(c.d)("product", [
                                  "productId",
                                  "selectColorId",
                                ])
                              ),
                              Object(c.d)("review", [
                                "rating",
                                "reviewData",
                                "prevHits",
                                "totalComments",
                                "totalReviews",
                              ])
                            ),
                            Object(c.d)("region", ["regionId"])
                          ),
                          Object(c.d)("province", [
                            "province",
                            "listShopStock",
                            "loadedShopList",
                          ])
                        ),
                        Object(c.d)("smember", ["isShowCheckSmemberComponent"])
                      ),
                      Object(c.d)("comment", ["commentList"])
                    ),
                    Object(c.d)("banner", ["banner"])
                  ),
                  Object(c.d)("sim-so", ["productDetailNumberList"])
                ),
                Object(c.d)("json-server", ["jsonData"])
              ),
              Object(c.d)("pdp-trade", [
                "tabActive",
                "pdpTradeData",
                "hasTradePromo",
                "tradePromoValue",
              ])
            ),
            {},
            {
              updatePrice: function () {
                var t, e;
                return this.selectColorVariantsIndex >= 0
                  ? {
                      special_price:
                        null ===
                          (t = this.variants[this.selectColorVariantsIndex]) ||
                        void 0 === t
                          ? void 0
                          : t.filterable.special_price,
                      price:
                        null ===
                          (e = this.variants[this.selectColorVariantsIndex]) ||
                        void 0 === e
                          ? void 0
                          : e.filterable.price,
                    }
                  : null;
              },
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
              tradeFinalPrice: function () {
                return this.specialPrice > 0
                  ? this.specialPrice - this.tradePromoValue
                  : this.price - this.tradePromoValue;
              },
            }
          ),
          watch: {
            selectColorId: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n, o;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t.selectColorVariantsIndex =
                              null === (r = t.variants) || void 0 === r
                                ? void 0
                                : r.findIndex(function (e) {
                                    return (
                                      e.general.attributes.id ===
                                      t.selectColorId
                                    );
                                  })),
                            !(t.selectColorVariantsIndex >= 0))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 4), t.getListPromotion();
                        case 4:
                          return (
                            (o = t.getListComboDetail(
                              (null === (n = t.productData.general) ||
                              void 0 === n
                                ? void 0
                                : n.categories) || []
                            )),
                            (e.next = 7),
                            o
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            productData: function () {
              var t,
                e = this;
              if (
                (null !== (t = this.productData.general) &&
                  void 0 !== t &&
                  t.product_components,
                (this.breadcrumbsArr =
                  this.productData.general.categories || []),
                this.breadcrumbsArr.length > 0)
              ) {
                var r = this.breadcrumbsArr.length,
                  n = this.breadcrumbsArr[r - 1].path;
                (this.breadcrumbsArr = this.breadcrumbsArr.filter(function (t) {
                  return (
                    123 === t.categoryId && (e.isSimProduct = !0),
                    n.includes(t.categoryId) ? t : ""
                  );
                })),
                  this.isSimProduct &&
                    this.getListOfPhoneNumbers({
                      productCode:
                        this.productData.general.attributes
                          .additional_information,
                      currentPage: 1,
                      keySearch: "",
                      groupName: "",
                    }),
                  (this.productDetailNumberList.size &&
                    0 !== this.productDetailNumberList.size) ||
                    (this.isSimProduct = !1);
              }
            },
            tradePromoValue: function () {
              this.pdpTradeData.product_id !==
                this.productData.general.product_id &&
                (this.hasTradePromo = !1);
            },
          },
          mounted: function () {
            var t,
              e = this;
            46 !==
              (null === (t = this.productData.filterable) || void 0 === t
                ? void 0
                : t.stock_available_id) && this.setStateLoaded(!0);
            try {
              setTimeout(
                Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, n, o, c, l, d, m, h, v, _, f;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !(
                                Object.keys(e.productData).length > 0 &&
                                null !== (r = e.productData.general) &&
                                void 0 !== r &&
                                r.categories
                              )
                            ) {
                              t.next = 36;
                              break;
                            }
                            if (
                              e.breadcrumbsArr[
                                e.breadcrumbsArr.length - 1
                              ].path.includes(1166) ||
                              e.breadcrumbsArr[
                                e.breadcrumbsArr.length - 1
                              ].path.includes(1170)
                            ) {
                              t.next = 11;
                              break;
                            }
                            if (
                              ((v =
                                null === (h = e.productData.general) ||
                                void 0 === h
                                  ? void 0
                                  : h.categories),
                              !v[v.length - 1].path.includes("29"))
                            ) {
                              t.next = 11;
                              break;
                            }
                            return (
                              (e.isOldProduct = !0),
                              (_ = {
                                12869: "hang-cu-mien-nam",
                                3759: "hang-cu-mien-bac",
                              }[e.province.company_id]),
                              (t.next = 10),
                              e.getDataBlockId({ block: _, ud: _ })
                            );
                          case 10:
                            e.contentBlockOldProduct = e.blockData[_];
                          case 11:
                            return (
                              console.log("ProductID:", e.productId),
                              console.log(
                                "Default selectedId: ",
                                e.selectColorId
                              ),
                              console.log(
                                "SKU: ",
                                null === (n = e.productData.general) ||
                                  void 0 === n
                                  ? void 0
                                  : n.sku
                              ),
                              console.log(
                                "Stock available: ",
                                null === (o = e.productData.filterable) ||
                                  void 0 === o
                                  ? void 0
                                  : o.stock_available_id
                              ),
                              console.log(
                                "Stock quantity: ",
                                null === (c = e.productData.filterable) ||
                                  void 0 === c
                                  ? void 0
                                  : c.stock
                              ),
                              console.log(
                                "Category ID: ",
                                (null === (l = e.productData.general) ||
                                void 0 === l
                                  ? void 0
                                  : l.categories) || ""
                              ),
                              (t.next = 19),
                              e.getLastedPrice(e.selectColorId)
                            );
                          case 19:
                            if (!e.productData.general.child_product) {
                              t.next = 22;
                              break;
                            }
                            return (
                              (t.next = 22),
                              e.getDataProductChild(
                                e.productData.general.child_product
                              )
                            );
                          case 22:
                            if (
                              null === (d = e.productData.filterable.sticker) ||
                              void 0 === d ||
                              !d.show_flashsale
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (
                              (t.next = 25),
                              e.checkShowCountDownPromotion("black_friday")
                            );
                          case 25:
                            t.next = 30;
                            break;
                          case 27:
                            if (
                              null === (m = e.productData.filterable.sticker) ||
                              void 0 === m ||
                              !m.uu_dai_tet
                            ) {
                              t.next = 30;
                              break;
                            }
                            return (
                              (t.next = 30),
                              e.checkShowCountDownPromotion("uu_dai_tet")
                            );
                          case 30:
                            return (
                              (t.next = 32),
                              e.getSforumNewsGraphql({
                                newsType: "tag",
                                value:
                                  e.productData.general.attributes.tag_sforum,
                              })
                            );
                          case 32:
                            return (
                              (e.sforumPost = {
                                title: "Tin tức về sản phẩm",
                                dataItem: e.sforumNews || [],
                                tag: e.productData.general.attributes
                                  .tag_sforum,
                              }),
                              (f =
                                localStorage.getItem("compare_products") ||
                                "{}"),
                              (t.next = 36),
                              e.setCompareStorageData(JSON.parse(f))
                            );
                          case 36:
                            e.isLoading = !1;
                          case 37:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                2e3
              );
            } catch (t) {
              console.error(t.message);
            }
            setTimeout(function () {
              e.pushToGA(),
                e.pushEventPageView({
                  pageType: "product",
                  listCate: e.breadcrumbsArr || [],
                });
            }, 2e3);
          },
          methods: h(
            h(
              h(
                h(
                  h(
                    h(
                      h(
                        h(
                          h(
                            h(
                              h(
                                h(
                                  h(
                                    h(
                                      h(
                                        h(
                                          {
                                            pushEventPageView: d.b,
                                            createJsonSchemaBreadcrumb: l.i,
                                            createJsonSchemaFaq: l.j,
                                            createJsonSchemaProduct: l.m,
                                          },
                                          Object(c.c)("product", [
                                            "setProductId",
                                            "handleChangeChildProduct",
                                            "handleChangeProductColor",
                                          ])
                                        ),
                                        Object(c.c)("province", [
                                          "setStateLoaded",
                                        ])
                                      ),
                                      Object(c.c)("pdp-compare", [
                                        "setCompareStorageData",
                                      ])
                                    ),
                                    Object(c.c)("review", [
                                      "setAllTotalReviews",
                                    ])
                                  ),
                                  Object(c.b)("sforum", [
                                    "getSforumNewsGraphql",
                                  ])
                                ),
                                Object(c.b)("comment", [
                                  "getComments",
                                  "getCommentsGraphql",
                                ])
                              ),
                              Object(c.b)("review", [
                                "getListRatingGraphql",
                                "getReviewsGraphqlV2",
                                "getReviewAttributeItemGraphql",
                              ])
                            ),
                            Object(c.b)("cross-sell", ["getListCombo"])
                          ),
                          Object(c.b)("banner", ["getBannerByUDGraphql"])
                        ),
                        Object(c.b)("block-by-id", ["getDataBlockId"])
                      ),
                      Object(c.b)("sim-so", ["getListOfPhoneNumbers"])
                    ),
                    Object(c.b)("json-server", ["getDataJsonServerGraphql"])
                  ),
                  Object(c.b)("product", ["getInforGroupByProductId"])
                ),
                Object(c.b)("province", ["getShopStockGraphql"])
              ),
              Object(c.b)("pdp-trade", ["checkTradePromo"])
            ),
            {},
            {
              getDataSpecialBanner: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, c, l, d, m, h, v, _, f, k, x, D;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = [
                                66512, 54335, 39233, 34219, 36804, 30501, 29061,
                                31823, 50877,
                              ]),
                              ![
                                54945, 65140, 57233, 65139, 64057, 65141, 57232,
                                65142, 57231, 64204, 64205,
                              ].includes(t.productId))
                            ) {
                              e.next = 6;
                              break;
                            }
                            (t.specialBanner = {
                              name: "b2s111",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "2023-02-01T12:00:00Z",
                              schedule_to: "2023-10-31T21:00:00Z",
                              path_desktop: "860x120_KhungKM_B2S.jpg",
                              path_mobile: "860x120_KhungKM_B2S.jpg",
                            }),
                              (e.next = 114);
                            break;
                          case 6:
                            if (!r.includes(t.productId)) {
                              e.next = 10;
                              break;
                            }
                            (t.specialBanner = {
                              name: "b2s111",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "2023-02-01T12:00:00Z",
                              schedule_to: "2023-10-31T21:00:00Z",
                              path_desktop:
                                "product-banner-tablet-samsung-edit.jpeg",
                              path_mobile:
                                "product-banner-tablet-samsung-edit.jpeg",
                            }),
                              (e.next = 114);
                            break;
                          case 10:
                            if (
                              ((o = [
                                "5",
                                "1126",
                                "1122",
                                "22",
                                "874",
                                "23",
                                "387",
                              ]),
                              (c = [
                                "1125",
                                "160",
                                "120",
                                "1155",
                                "138",
                                "526",
                                "466",
                                "888",
                              ]),
                              (l = [
                                "132",
                                "384",
                                "690",
                                "132",
                                "43",
                                "966",
                                "563",
                                "465",
                              ]),
                              (d =
                                null === (n = t.productData.general) ||
                                void 0 === n
                                  ? void 0
                                  : n.categories),
                              (m = d[d.length - 1].path),
                              !t.findCommonElements(
                                ["133", "1292", "1092"],
                                m.split("/")
                              ))
                            ) {
                              e.next = 19;
                              break;
                            }
                            (t.specialBanner = {
                              name: "oppo-banner",
                              url: "https://cellphones.com.vn/mobile/oppo.html",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop:
                                "product-600-100-banner-oppo-month.png",
                              path_mobile:
                                "product-600-100-banner-oppo-month.png",
                            }),
                              (e.next = 114);
                            break;
                          case 19:
                            if (!t.findCommonElements(["786"], m.split("/"))) {
                              e.next = 23;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorAsusB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "product-banner-man-hinh-asus.webp",
                              path_mobile: "product-banner-man-hinh-asus.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 23:
                            if (!t.findCommonElements(["849"], m.split("/"))) {
                              e.next = 27;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorLpB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "product-banner-man-hinh-lg.png",
                              path_mobile: "product-banner-man-hinh-lg.png",
                            }),
                              (e.next = 114);
                            break;
                          case 27:
                            if (!t.findCommonElements(["1595"], m.split("/"))) {
                              e.next = 31;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorMsiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "product-banner-man-hinh-msi.png",
                              path_mobile: "product-banner-man-hinh-msi.png",
                            }),
                              (e.next = 114);
                            break;
                          case 31:
                            if (!t.findCommonElements(["980"], m.split("/"))) {
                              e.next = 35;
                              break;
                            }
                            (t.specialBanner = {
                              name: "tabletXiaomiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop:
                                "product-banner-tablet-xiaomi-deit-en.jpeg",
                              path_mobile:
                                "product-banner-tablet-xiaomi-deit-en.jpeg",
                            }),
                              (e.next = 114);
                            break;
                          case 35:
                            if (!t.findCommonElements(["340"], m.split("/"))) {
                              e.next = 39;
                              break;
                            }
                            (t.specialBanner = {
                              name: "mobileXiaomiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "dt-xiaomi-new-b2s-lp-01edit.png",
                              path_mobile: "dt-xiaomi-new-b2s-lp-01edit.png",
                            }),
                              (e.next = 114);
                            break;
                          case 39:
                            if (!t.findCommonElements(["35"], m.split("/"))) {
                              e.next = 43;
                              break;
                            }
                            (t.specialBanner = {
                              name: "mobileSamsungB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop:
                                "product-banner-dt-samsung-edit.jpeg",
                              path_mobile:
                                "product-banner-dt-samsung-edit.jpeg",
                            }),
                              (e.next = 114);
                            break;
                          case 43:
                            if (!t.findCommonElements(["77"], m.split("/"))) {
                              e.next = 47;
                              break;
                            }
                            (t.specialBanner = {
                              name: "Product_Galaxy_Watch",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "du-ss-b2s-product-new-edit.png",
                              path_mobile: "du-ss-b2s-product-new-edit.png",
                            }),
                              (e.next = 114);
                            break;
                          case 47:
                            if (
                              !t.findCommonElements(
                                ["74", "648", "752", "1629"],
                                m.split("/")
                              )
                            ) {
                              e.next = 51;
                              break;
                            }
                            (t.specialBanner = {
                              name: "Product_dong_ho",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "Product_dong_ho.webp",
                              path_mobile: "Product_dong_ho.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 51:
                            if (!t.findCommonElements(["1378"], m.split("/"))) {
                              e.next = 55;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-2",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "banner-khai-truong-02-2.webp",
                              path_mobile: "banner-khai-truong-02-2.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 55:
                            if (!t.findCommonElements(["1301"], m.split("/"))) {
                              e.next = 59;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-3",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "banner-khai-truong-02-3.webp",
                              path_mobile: "banner-khai-truong-02-3.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 59:
                            if (!t.findCommonElements(["1491"], m.split("/"))) {
                              e.next = 63;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "banner-khai-truong-02.webp",
                              path_mobile: "banner-khai-truong-02.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 63:
                            if (!t.findCommonElements(["122"], m.split("/"))) {
                              e.next = 67;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-07",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "banner-khai-truong-07.webp",
                              path_mobile: "banner-khai-truong-07.webp",
                            }),
                              (e.next = 114);
                            break;
                          case 67:
                            if (!t.findCommonElements(["1309"], m.split("/"))) {
                              e.next = 71;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-1",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "banner-khai-truong-02-1.png",
                              path_mobile: "banner-khai-truong-02-1.png",
                            }),
                              (e.next = 114);
                            break;
                          case 71:
                            if (
                              !t.findCommonElements(
                                ["314", "906", "606", "215"],
                                m.split("/")
                              )
                            ) {
                              e.next = 75;
                              break;
                            }
                            (t.specialBanner = {
                              name: "phoneB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "dt-product-banner-b2s-th09.jpg",
                              path_mobile: "dt-product-banner-b2s-th09.jpg",
                            }),
                              (e.next = 114);
                            break;
                          case 75:
                            if (!t.findCommonElements(l, m.split("/"))) {
                              e.next = 81;
                              break;
                            }
                            return (
                              (e.next = 78),
                              t.getBannerByUDGraphql(
                                "special_banner_bottom_product"
                              )
                            );
                          case 78:
                            (t.specialBanner =
                              (null === (h = t.banner) || void 0 === h
                                ? void 0
                                : h.special_banner_bottom_product[0]) || {}),
                              (e.next = 114);
                            break;
                          case 81:
                            if (!t.findCommonElements(c, m.split("/"))) {
                              e.next = 87;
                              break;
                            }
                            return (
                              (e.next = 84),
                              t.getBannerByUDGraphql("product_banner_samsung")
                            );
                          case 84:
                            (t.specialBanner =
                              (null === (v = t.banner) || void 0 === v
                                ? void 0
                                : v.product_banner_samsung[0]) || {}),
                              (e.next = 114);
                            break;
                          case 87:
                            if (!t.findCommonElements(["667"], m.split("/"))) {
                              e.next = 93;
                              break;
                            }
                            return (
                              (e.next = 90),
                              t.getBannerByUDGraphql("Product_banner_camera")
                            );
                          case 90:
                            (t.specialBanner =
                              (null === (_ = t.banner) || void 0 === _
                                ? void 0
                                : _.Product_banner_camera[0]) || {}),
                              (e.next = 114);
                            break;
                          case 93:
                            if (
                              !t.findCommonElements(["380"], m.split("/")) ||
                              t.findCommonElements(o, m.split("/"))
                            ) {
                              e.next = 99;
                              break;
                            }
                            return (
                              (e.next = 96),
                              t.getBannerByUDGraphql("product_laptop_banner")
                            );
                          case 96:
                            (t.specialBanner =
                              (null === (f = t.banner) || void 0 === f
                                ? void 0
                                : f.product_laptop_banner[0]) || {}),
                              (e.next = 114);
                            break;
                          case 99:
                            if (
                              !t.findCommonElements(["88"], m.split("/")) ||
                              t.findCommonElements(o, m.split("/"))
                            ) {
                              e.next = 105;
                              break;
                            }
                            return (
                              (e.next = 102),
                              t.getBannerByUDGraphql("product_apple_watch")
                            );
                          case 102:
                            (t.specialBanner =
                              (null === (k = t.banner) || void 0 === k
                                ? void 0
                                : k.product_apple_watch[0]) || {}),
                              (e.next = 114);
                            break;
                          case 105:
                            if (!t.findCommonElements(["5"], m.split("/"))) {
                              e.next = 111;
                              break;
                            }
                            return (
                              (e.next = 108),
                              t.getBannerByUDGraphql("product_banner_macbook")
                            );
                          case 108:
                            (t.specialBanner =
                              (null === (x = t.banner) || void 0 === x
                                ? void 0
                                : x.product_banner_macbook[0]) || {}),
                              (e.next = 114);
                            break;
                          case 111:
                            return (
                              (e.next = 113),
                              t.getBannerByUDGraphql(
                                "special_banner_bottom_product_exclude_samsung"
                              )
                            );
                          case 113:
                            t.specialBanner =
                              (null === (D = t.banner) || void 0 === D
                                ? void 0
                                : D
                                    .special_banner_bottom_product_exclude_samsung[0]) ||
                              {};
                          case 114:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              queryGraphqlStringProduct: function (t) {
                var e = this.$cookies.get("cps_province") || this.province;
                return "query {\n                product(\n                    id : "
                  .concat(t, ",\n                    provinceId: ")
                  .concat(
                    e.id,
                    ",\n                ){\n                    general{\n                       attributes\n                       attribute_set_id\n                       galleries\n                       name\n                       relation\n                       url_path\n                       child_product\n                       up_sell\n                       youtube\n                       sku\n                       product_components\n                       categories{\n                       categoryId\n                        similar\n                        name\n                        uri\n                        level\n                        path\n                      }\n                    }\n                    filterable {\n                      promotion_information\n                      promotion_pack\n                      price\n                      special_price\n                      thumbnail\n                      product_state\n                      included_accessories\n                      warranty_information\n                      sticker\n                      short_description\n                      stock\n                      stock_available_id\n                      default {\n                        product_id\n                      }\n                    }\n                    specification {\n                        basic\n                        full_by_group\n                    }\n                }\n              }"
                  );
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
                    "\n                    }\n                    sort: [{view: desc}]\n                    size: 15\n                  ) {\n                   filterable{\n                      price\n                      special_price\n                      stock\n                      thumbnail\n                      promotion_pack\n                      sticker\n                      product_id\n                      filter_price\n                      price\n                      sticker\n                      special_price\n                      stock_available_id\n                      stock\n                      filter{\n                        id\n                        value\n                      }\n                   }\n                   general {\n                      attributes\n                      url_path\n                      doc_quyen\n                      url_key\n                      manufacturer\n                      name\n                      product_id\n                    }\n                  }\n                }"
                  );
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
              getDataProductChild: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, o, data, c, l;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (n = []),
                                t || n.push(e.productId),
                                t && (n = t),
                                e.handleChangeChildProduct(n),
                                (o = JSON.stringify(
                                  n.map(function (t) {
                                    return t.toString();
                                  })
                                )),
                                (r.prev = 5),
                                (data = JSON.stringify({
                                  query: e.queryGraphqlStringProductS(
                                    o,
                                    "",
                                    "false",
                                    "",
                                    "",
                                    ""
                                  ),
                                  variables: {},
                                })),
                                (c = e.graphqlConfig(data)),
                                (r.next = 10),
                                e.$axios(c)
                              );
                            case 10:
                              200 === (l = r.sent).status &&
                                (e.variants = l.data.data.products),
                                (r.next = 17);
                              break;
                            case 14:
                              (r.prev = 14),
                                (r.t0 = r.catch(5)),
                                console.log(r.t0);
                            case 17:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[5, 14]]
                    );
                  })
                )();
              },
              formatPrice: function (t) {
                return Math.floor(t);
              },
              getListLink: function () {
                var t,
                  e,
                  r = this,
                  n = [];
                this.getListPromotion(),
                  0 !== this.relationProduct.length &&
                    (this.relationProduct.map(function (t) {
                      var data = JSON.stringify({
                          query: r.queryGraphqlStringProduct(t),
                          variables: {},
                        }),
                        e = r.graphqlConfig(data),
                        c = (function () {
                          var t = Object(o.a)(
                            regeneratorRuntime.mark(function t() {
                              var o, c, l, d, m, h;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          (t.next = 3),
                                          r.$axios(e)
                                        );
                                      case 3:
                                        200 === (o = t.sent).status &&
                                          (c = o.data.data.product).general &&
                                          n.push({
                                            name:
                                              null === (l = c.general) ||
                                              void 0 === l ||
                                              null === (l = l.attributes) ||
                                              void 0 === l
                                                ? void 0
                                                : l.related_name,
                                            price:
                                              (null === (d = c.filterable) ||
                                              void 0 === d
                                                ? void 0
                                                : d.special_price) ||
                                              (null === (m = c.filterable) ||
                                              void 0 === m
                                                ? void 0
                                                : m.price),
                                            link:
                                              null === (h = c.general) ||
                                              void 0 === h
                                                ? void 0
                                                : h.url_path,
                                          }),
                                          (t.next = 10);
                                        break;
                                      case 7:
                                        (t.prev = 7),
                                          (t.t0 = t.catch(0)),
                                          console.log(t.t0);
                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })();
                      return c(), null;
                    }),
                    n.push({
                      name: this.productData.general.attributes.related_name,
                      price:
                        (null === (t = this.productData.filterable) ||
                        void 0 === t
                          ? void 0
                          : t.special_price) ||
                        (null === (e = this.productData.filterable) ||
                        void 0 === e
                          ? void 0
                          : e.price),
                      link: this.productData.general.url_path,
                    }),
                    (this.listLinked = n));
              },
              getListPromotion: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, data, c, l;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o =
                                  (null === (r = t.variants) ||
                                  void 0 === r ||
                                  null ===
                                    (r = r[t.selectColorVariantsIndex]) ||
                                  void 0 === r ||
                                  null === (r = r.general) ||
                                  void 0 === r
                                    ? void 0
                                    : r.attributes.id) ||
                                  (null === (n = t.listChildProduct) ||
                                  void 0 === n
                                    ? void 0
                                    : n[0]) ||
                                  t.productData.general.attributes.id),
                                (data = JSON.stringify({
                                  query: t.queryGraphqlStringProduct(
                                    JSON.stringify(o)
                                  ),
                                  variables: {},
                                })),
                                (c = t.graphqlConfig(data)),
                                console.log("ID GET PROMO: ".concat(o)),
                                console.log(
                                  "INDEX: ".concat(t.selectColorVariantsIndex)
                                ),
                                (e.prev = 5),
                                (e.next = 8),
                                t.$axios(c)
                              );
                            case 8:
                              200 === (l = e.sent).status &&
                                (t.promotionPack =
                                  l.data.data.product.filterable.promotion_pack),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(5)),
                                console.log(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 12]]
                    );
                  })
                )();
              },
              handleClickShowBoxTVCModal: function () {
                this.showModalTVC = !this.showModalTVC;
              },
              IsShowBoxOrderButton: function (t, e, r) {
                return (46 === t && e > 0 && r > 0) || 152 === t;
              },
              checkingProductStatus: function (t, e, r) {
                return 46 === t && e > 0 && r > 0
                  ? "in stock"
                  : 152 === t
                  ? "order now"
                  : 43 === t
                  ? "out of stock"
                  : "subscribe";
              },
              pushToGA: function () {
                var t,
                  e,
                  r,
                  n,
                  o,
                  c,
                  l,
                  d,
                  m,
                  h,
                  v,
                  _,
                  f,
                  k,
                  x,
                  D = 12869 === this.province.company_id ? 7 : 1,
                  P = [];
                P.push({
                  currency: "VND",
                  index: 0,
                  item_brand: "".concat(
                    (null === (t = this.productData.general) || void 0 === t
                      ? void 0
                      : t.attributes.manufacturer) || ""
                  ),
                  item_category: "".concat(
                    (null === (e = this.breadcrumbsArr[0]) || void 0 === e
                      ? void 0
                      : e.name) || ""
                  ),
                  item_category2: "".concat(
                    (null === (r = this.breadcrumbsArr[1]) || void 0 === r
                      ? void 0
                      : r.name) || ""
                  ),
                  item_category3: "".concat(
                    (null === (n = this.breadcrumbsArr[2]) || void 0 === n
                      ? void 0
                      : n.name) || ""
                  ),
                  item_category4: "".concat(
                    (null === (o = this.breadcrumbsArr[3]) || void 0 === o
                      ? void 0
                      : o.name) || ""
                  ),
                  item_id: "".concat(this.productId),
                  item_image:
                    "https://cdn2.cellphones.com.vn/500x/media/catalog/product".concat(
                      null === (c = this.productData.general) || void 0 === c
                        ? void 0
                        : c.attributes.image
                    ),
                  item_list_id: "".concat(
                    (null ===
                      (l =
                        this.breadcrumbsArr[
                          (null === (d = this.breadcrumbsArr) || void 0 === d
                            ? void 0
                            : d.length) - 1
                        ]) || void 0 === l
                      ? void 0
                      : l.uri) || ""
                  ),
                  item_list_name: "".concat(
                    (null ===
                      (m =
                        this.breadcrumbsArr[
                          (null === (h = this.breadcrumbsArr) || void 0 === h
                            ? void 0
                            : h.length) - 1
                        ]) || void 0 === m
                      ? void 0
                      : m.name) || ""
                  ),
                  item_name: "".concat(
                    null === (v = this.productData.general) || void 0 === v
                      ? void 0
                      : v.name
                  ),
                  item_sku: "".concat(
                    null === (_ = this.productData.general) || void 0 === _
                      ? void 0
                      : _.attributes.url_key
                  ),
                  item_url: "https://cellphones.com.vn/".concat(
                    null === (f = this.productData.general) || void 0 === f
                      ? void 0
                      : f.attributes.url_path
                  ),
                  price:
                    null === (k = this.productData.filterable) || void 0 === k
                      ? void 0
                      : k.price,
                  saleprice:
                    null === (x = this.productData.filterable) || void 0 === x
                      ? void 0
                      : x.special_price,
                  quantity: 1,
                });
                var y = window.dataLayer || [];
                y.push({
                  event: "view_item",
                  ecommerce: {
                    region_cps: "".concat(this.regionName[D]),
                    province: "".concat(this.province.name),
                    currency: "VND",
                    items: P,
                  },
                  eventModel: { value: 0 },
                }),
                  console.log("DataLayer:"),
                  console.log(y);
              },
              getLastedPrice: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, o, c, data, l, d;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (n =
                                  e.$cookies.get("cps_province") || e.province),
                                (o =
                                  '\n        query PRODUCT{\n          product(\n              id : "'
                                    .concat(t, '",\n              provinceId: ')
                                    .concat(
                                      n.id,
                                      ",\n          ){\n              filterable {\n                price\n                special_price\n              }\n          }\n        }"
                                    )),
                                (c = "".concat(
                                  "https://api.cellphones.com.vn/",
                                  "v2/graphql/query"
                                )),
                                (data = JSON.stringify({
                                  query: o,
                                  variables: {},
                                })),
                                (l = {
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (r.prev = 5),
                                (r.next = 8),
                                e.$axios.post(c, data, l)
                              );
                            case 8:
                              200 === (d = r.sent).status &&
                                (console.log("=======New Price======="),
                                (e.latestPrice =
                                  d.data.data.product.filterable),
                                console.log(e.latestPrice),
                                console.log("=====End New Price=====")),
                                (r.next = 16);
                              break;
                            case 12:
                              (r.prev = 12),
                                (r.t0 = r.catch(5)),
                                console.error(r.t0),
                                console.error("Lỗi Graphql!!! Check");
                            case 16:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[5, 12]]
                    );
                  })
                )();
              },
              checkShowCountDownPromotion: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ("black_friday" !== t) {
                              r.next = 10;
                              break;
                            }
                            return (
                              (e.typeSale = t),
                              (r.next = 4),
                              e.getInforGroupByProductId(e.productId)
                            );
                          case 4:
                            (n = r.sent),
                              console.log(n),
                              (e.infoSale.black_friday = {
                                is_sale: !0,
                                type: "flash_sale",
                                bg_image:
                                  "https://cdn2.cellphones.com.vn/800x,webp,q90/media/landing-page/xa-kho/xa-kho-2023/background_countdown_flash.png",
                                show_time: "".concat(
                                  n.group.start_countdown_time
                                ),
                                start_time: "".concat(n.group.from_date),
                                end_time: "".concat(n.group.to_date),
                              }),
                              (e.isCountdownPromotion = e.infoSale[t].is_sale),
                              (r.next = 17);
                            break;
                          case 10:
                            return (
                              (e.typeSale = t),
                              (r.next = 13),
                              e.getInforGroupByProductId(e.productId)
                            );
                          case 13:
                            (o = r.sent),
                              console.log(o),
                              (e.infoSale.uu_dai_tet = {
                                is_sale: !0,
                                type: "normal_sale",
                                bg_image:
                                  "https://cdn2.cellphones.com.vn/800x,webp,q90/media/landing-page/xa-kho/xa-kho-2023/background_countdown_hot.png",
                                show_time: "".concat(
                                  o.group.start_countdown_time
                                ),
                                start_time: "".concat(o.group.from_date),
                                end_time: "".concat(o.group.to_date),
                              }),
                              (e.isCountdownPromotion = e.infoSale[t].is_sale);
                          case 17:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              findCommonElements: function (t, e) {
                return t.some(function (t) {
                  return e.includes(t);
                });
              },
              getListComboDetail: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (n = []),
                              null == t ||
                                t.forEach(function (t) {
                                  n.push(t.categoryId);
                                }),
                              (r.next = 4),
                              e.getListCombo({
                                productId: e.selectColorId,
                                arrCategoryId: n.toString(),
                              })
                            );
                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
            }
          ),
        },
        _ = v,
        f = (r(968), r(42)),
        component = Object(f.a)(
          _,
          function () {
            var t,
              e,
              r,
              n,
              o,
              c,
              l,
              d,
              m,
              h,
              v,
              _,
              f,
              k,
              x,
              D,
              P,
              y,
              C,
              S,
              w,
              B,
              O,
              I,
              j,
              L,
              T,
              M,
              A,
              R,
              N,
              E,
              G,
              V,
              $,
              J,
              H,
              U,
              z,
              W,
              K,
              F,
              X,
              Z,
              Q,
              Y,
              tt,
              et,
              at,
              nt,
              ot,
              it,
              ct,
              lt,
              st,
              ut,
              pt,
              mt,
              bt,
              ht,
              vt,
              _t,
              gt,
              ft,
              kt,
              xt,
              Dt,
              Pt,
              yt,
              Ct,
              St = this,
              wt = St._self._c;
            return Object.keys(St.productData).length > 0
              ? wt(
                  "div",
                  { attrs: { id: "productDetailV2" } },
                  [
                    wt("Breadcrumbs", {
                      attrs: {
                        "list-breadcrumb": St.breadcrumbsArr,
                        "last-one":
                          null === (t = St.productData.general) || void 0 === t
                            ? void 0
                            : t.name,
                      },
                    }),
                    St._v(" "),
                    wt(
                      "section",
                      { staticClass: "block-detail-product" },
                      [
                        St.$device.isMobile
                          ? St._e()
                          : wt(
                              "div",
                              {
                                staticClass:
                                  "box-header is-flex is-align-items-center box-header-desktop",
                              },
                              [
                                wt("div", { staticClass: "box-product-name" }, [
                                  wt("h1", [
                                    St._v(
                                      " " +
                                        St._s(
                                          null ===
                                            (e = St.productData.general) ||
                                            void 0 === e
                                            ? void 0
                                            : e.name
                                        ) +
                                        " "
                                    ),
                                  ]),
                                ]),
                                St._v(" "),
                                23 ===
                                  (null === (r = St.productData.general) ||
                                  void 0 === r
                                    ? void 0
                                    : r.attribute_set_id) ||
                                12 ===
                                  (null === (n = St.productData.general) ||
                                  void 0 === n
                                    ? void 0
                                    : n.attribute_set_id)
                                  ? wt(
                                      "div",
                                      {
                                        staticClass:
                                          "additional-information mr-2",
                                      },
                                      [
                                        St._v(
                                          "\n        " +
                                            St._s(
                                              null ===
                                                (o = St.productData.general) ||
                                                void 0 === o
                                                ? void 0
                                                : o.attributes
                                                    .additional_information
                                            ) +
                                            "\n      "
                                        ),
                                      ]
                                    )
                                  : St._e(),
                                St._v(" "),
                                St.rating.average_rating
                                  ? wt(
                                      "div",
                                      { staticClass: "box-rating" },
                                      [
                                        St._l(5, function (t) {
                                          return wt("RenderHtml", {
                                            key: t,
                                            staticClass: "icon",
                                            class:
                                              St.rating.average_rating >=
                                                t - 0.5 && "is-active",
                                            attrs: {
                                              html: St.$icons().Star,
                                              icon: "star",
                                            },
                                          });
                                        }),
                                        St._v(
                                          "\n         " +
                                            St._s(St.rating.total_count || 0) +
                                            " đánh giá\n      "
                                        ),
                                      ],
                                      2
                                    )
                                  : St._e(),
                                St._v(" "),
                                wt("PdpCompareButton", {
                                  attrs: { "product-data": St.productData },
                                }),
                              ],
                              1
                            ),
                        St._v(" "),
                        wt("hr"),
                        St._v(" "),
                        wt(
                          "div",
                          { staticClass: "box-detail-product columns m-0" },
                          [
                            wt(
                              "div",
                              {
                                staticClass:
                                  "box-detail-product__box-left column is-three-fifths",
                              },
                              [
                                wt(
                                  "div",
                                  { staticClass: "box-gallery" },
                                  [
                                    wt("GalleryProductDetail", {
                                      attrs: {
                                        gallery: St.gallery,
                                        "key-selling-points":
                                          (null ===
                                            (c = St.productData.general) ||
                                          void 0 === c
                                            ? void 0
                                            : c.attributes
                                                .key_selling_points) || "",
                                        "feature-image":
                                          null ===
                                            (l = St.productData.general) ||
                                          void 0 === l
                                            ? void 0
                                            : l.attributes.image,
                                        "key-selling-points-title":
                                          null ===
                                            (d = St.productData.general) ||
                                          void 0 === d
                                            ? void 0
                                            : d.name,
                                        "tvc-list":
                                          null ===
                                            (m = St.productData.general) ||
                                          void 0 === m
                                            ? void 0
                                            : m.youtube,
                                      },
                                      on: {
                                        showBoxTVCModal:
                                          St.handleClickShowBoxTVCModal,
                                      },
                                    }),
                                    St._v(" "),
                                    wt("WishList", {
                                      attrs: { "product-id": St.productId },
                                    }),
                                  ],
                                  1
                                ),
                                St._v(" "),
                                St.$device.isMobile
                                  ? wt(
                                      "div",
                                      {
                                        staticClass:
                                          "box-header is-flex is-align-content-flex-end box-header-mobile",
                                      },
                                      [
                                        wt(
                                          "div",
                                          { staticClass: "box-product-name" },
                                          [
                                            wt("h1", [
                                              St._v(
                                                St._s(
                                                  null ===
                                                    (h =
                                                      St.productData.general) ||
                                                    void 0 === h
                                                    ? void 0
                                                    : h.name
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        St._v(" "),
                                        23 ===
                                          St.productData.general
                                            .attribute_set_id ||
                                        12 ===
                                          St.productData.general
                                            .attribute_set_id
                                          ? wt(
                                              "div",
                                              {
                                                staticClass:
                                                  "additional-information mr-2",
                                              },
                                              [
                                                St._v(
                                                  "\n            " +
                                                    St._s(
                                                      St.productData.general
                                                        .attributes
                                                        .additional_information
                                                    ) +
                                                    "\n          "
                                                ),
                                              ]
                                            )
                                          : St._e(),
                                        St._v(" "),
                                        St.rating.average_rating
                                          ? wt(
                                              "div",
                                              { staticClass: "box-rating" },
                                              [
                                                St._l(5, function (t) {
                                                  return wt("RenderHtml", {
                                                    key: t,
                                                    staticClass: "icon",
                                                    class:
                                                      St.rating
                                                        .average_rating >=
                                                        t - 0.5 && "is-active",
                                                    attrs: {
                                                      html: St.$icons().Star,
                                                      icon: "star",
                                                    },
                                                  });
                                                }),
                                                St._v(
                                                  "\n             " +
                                                    St._s(
                                                      St.rating.total_count || 0
                                                    ) +
                                                    " đánh giá\n          "
                                                ),
                                              ],
                                              2
                                            )
                                          : St._e(),
                                        St._v(" "),
                                        wt("PdpCompareButton", {
                                          attrs: {
                                            "product-data": St.productData,
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : St._e(),
                                St._v(" "),
                                St.$device.isMobile
                                  ? St._e()
                                  : wt("div", { staticClass: "columns mt-1" }, [
                                      wt(
                                        "div",
                                        { staticClass: "column is-half" },
                                        [
                                          (null !==
                                            (v = St.productData.filterable) &&
                                            void 0 !== v &&
                                            v.product_state) ||
                                          (null !==
                                            (_ = St.productData.filterable) &&
                                            void 0 !== _ &&
                                            _.included_accessories) ||
                                          (null !==
                                            (f = St.productData.filterable) &&
                                            void 0 !== f &&
                                            f.warranty_information)
                                            ? wt("BoxWarranty", {
                                                attrs: {
                                                  "product-state":
                                                    null ===
                                                      (k =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === k
                                                      ? void 0
                                                      : k.product_state,
                                                  "product-accessories":
                                                    null ===
                                                      (x =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === x
                                                      ? void 0
                                                      : x.included_accessories,
                                                  "warranty-content":
                                                    null ===
                                                      (D =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === D
                                                      ? void 0
                                                      : D.warranty_information,
                                                },
                                              })
                                            : St._e(),
                                        ],
                                        1
                                      ),
                                      St._v(" "),
                                      wt(
                                        "div",
                                        { staticClass: "column is-half" },
                                        [
                                          wt(
                                            "client-only",
                                            [
                                              0 !== St.selectColorId &&
                                              46 ===
                                                (null ===
                                                  (P =
                                                    St.productData
                                                      .filterable) ||
                                                void 0 === P
                                                  ? void 0
                                                  : P.stock_available_id)
                                                ? wt("BoxOnStockStores")
                                                : St._e(),
                                              St._v(" "),
                                              St.isOldProduct
                                                ? wt(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "box-warranty-info",
                                                    },
                                                    [
                                                      wt(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "box-content warranty-info",
                                                          staticStyle: {
                                                            "padding-bottom":
                                                              "10px",
                                                          },
                                                        },
                                                        [
                                                          wt(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "description",
                                                              staticStyle: {
                                                                "max-width":
                                                                  "100%",
                                                              },
                                                            },
                                                            [
                                                              wt("RenderHtml", {
                                                                attrs: {
                                                                  html: St.contentBlockOldProduct,
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : St._e(),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ]),
                                St._v(" "),
                                wt(
                                  "render-on-scroll",
                                  { attrs: { "offset-y": 10 } },
                                  [
                                    St.$device.isDesktop &&
                                    ![43, 56].includes(
                                      null ===
                                        (y = St.productData.filterable) ||
                                        void 0 === y
                                        ? void 0
                                        : y.stock_available_id
                                    )
                                      ? wt("BoxSameProductMobile", {
                                          staticClass: "upsell",
                                          attrs: {
                                            "product-data": St.productData,
                                            type: "upsell",
                                            title: "Phụ kiện mua cùng",
                                            "has-option": !0,
                                          },
                                        })
                                      : St._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            St._v(" "),
                            wt(
                              "div",
                              {
                                staticClass:
                                  "box-detail-product__box-center column",
                              },
                              [
                                St.isCountdownPromotion && St.infoSale
                                  ? wt("BoxCountdownProduct", {
                                      attrs: {
                                        start:
                                          St.infoSale[St.typeSale].start_time,
                                        end: St.infoSale[St.typeSale].end_time,
                                        appear:
                                          St.infoSale[St.typeSale].show_time,
                                        "style-inline":
                                          "\n              border: 1px solid #d81f18;\n              border-radius: 5px;\n              background: url(".concat(
                                            St.infoSale[St.typeSale].bg_image,
                                            ");\n              background-repeat: no-repeat;\n              background-position: left;\n              background-size: contain;\n              background-color: #cb3117"
                                          ),
                                        "sale-type": "",
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                !St.hasTradePromo ||
                                (![152, 46].includes(
                                  St.productData.filterable.stock_available_id
                                ) &&
                                  St.hasTradePromo)
                                  ? wt("BoxPrice", {
                                      attrs: {
                                        price: St.updatePrice
                                          ? St.formatPrice(St.updatePrice.price)
                                          : Object.keys(St.latestPrice).length
                                          ? St.formatPrice(St.latestPrice.price)
                                          : St.formatPrice(
                                              null ===
                                                (C =
                                                  St.productData.filterable) ||
                                                void 0 === C
                                                ? void 0
                                                : C.price
                                            ),
                                        "special-price": St.updatePrice
                                          ? St.formatPrice(
                                              St.updatePrice.special_price
                                            )
                                          : Object.keys(St.latestPrice).length
                                          ? St.formatPrice(
                                              St.latestPrice.special_price
                                            )
                                          : St.formatPrice(
                                              null ===
                                                (S =
                                                  St.productData.filterable) ||
                                                void 0 === S
                                                ? void 0
                                                : S.special_price
                                            ),
                                        "hc-install":
                                          St.productData.general.attributes
                                            .hc_zero_install,
                                        "warranty-old-product":
                                          St.productData.general.attributes
                                            .tinh_trang_may_cu,
                                        "is-show-discount-percent": !1,
                                        "title-price":
                                          St.productData.general.attributes
                                            .title_price,
                                        "stock-available":
                                          null ===
                                            (w = St.productData.filterable) ||
                                          void 0 === w
                                            ? void 0
                                            : w.stock_available_id,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.listLinked.length > 1
                                  ? wt("BoxLinked", {
                                      attrs: {
                                        "list-linked": St.listLinked,
                                        url: St.productData.general.url_path,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.variants &&
                                St.variants.length > 0 &&
                                46 ===
                                  (null === (B = St.productData.filterable) ||
                                  void 0 === B
                                    ? void 0
                                    : B.stock_available_id) &&
                                (null === (O = St.productData.filterable) ||
                                void 0 === O
                                  ? void 0
                                  : O.stock) > 0
                                  ? wt("BoxVariants", {
                                      attrs: {
                                        variants: St.variants,
                                        "key-selling-points":
                                          St.productData.general.attributes
                                            .key_selling_points,
                                        "tvc-list":
                                          St.productData.general.youtube,
                                        "default-id": St.selectColorId,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.hasTradePromo &&
                                St.loadedShopList &&
                                (46 ===
                                  (null === (I = St.productData.filterable) ||
                                  void 0 === I
                                    ? void 0
                                    : I.stock_available_id) ||
                                  152 ===
                                    (null === (j = St.productData.filterable) ||
                                    void 0 === j
                                      ? void 0
                                      : j.stock_available_id))
                                  ? wt("TradePriceTabs", {
                                      attrs: {
                                        price: St.updatePrice
                                          ? St.updatePrice.price
                                          : Object.keys(St.latestPrice).length
                                          ? St.latestPrice.price
                                          : null ===
                                              (L = St.productData.filterable) ||
                                            void 0 === L
                                          ? void 0
                                          : L.price,
                                        "special-price": St.updatePrice
                                          ? St.updatePrice.special_price
                                          : Object.keys(St.latestPrice).length
                                          ? St.latestPrice.special_price
                                          : null ===
                                              (T = St.productData.filterable) ||
                                            void 0 === T
                                          ? void 0
                                          : T.special_price,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                wt("BoxSpecialPromotion", {
                                  staticClass: "my-3",
                                  attrs: {
                                    "special-promotion": St.specialBanner,
                                  },
                                }),
                                St._v(" "),
                                (null === (M = St.productData.filterable) ||
                                void 0 === M
                                  ? void 0
                                  : M.stock) > 0 ||
                                [152, 56].includes(
                                  null === (A = St.productData.filterable) ||
                                    void 0 === A
                                    ? void 0
                                    : A.stock_available_id
                                )
                                  ? wt("BoxPromotion", {
                                      attrs: {
                                        "promotion-pack":
                                          St.promotionPack.km_chung || {},
                                        "product-promotion-pack":
                                          St.promotionPack.km_rieng || {},
                                        "hot-sale":
                                          null ===
                                            (R = St.productData.filterable) ||
                                          void 0 === R ||
                                          null === (R = R.short_description) ||
                                          void 0 === R
                                            ? void 0
                                            : R.value,
                                        "time-start-hotsale":
                                          null ===
                                            (N = St.productData.filterable) ||
                                          void 0 === N ||
                                          null === (N = N.short_description) ||
                                          void 0 === N
                                            ? void 0
                                            : N.show_time,
                                        "time-end-hotsale":
                                          null ===
                                            (E = St.productData.filterable) ||
                                          void 0 === E ||
                                          null === (E = E.short_description) ||
                                          void 0 === E
                                            ? void 0
                                            : E.hidden_time,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.isShowCheckSmemberComponent
                                  ? wt("BoxCheckingSmember")
                                  : St._e(),
                                St._v(" "),
                                46 !==
                                  (null === (G = St.productData.filterable) ||
                                  void 0 === G
                                    ? void 0
                                    : G.stock_available_id) &&
                                152 !==
                                  (null === (V = St.productData.filterable) ||
                                  void 0 === V
                                    ? void 0
                                    : V.stock_available_id) &&
                                43 !==
                                  (null === ($ = St.productData.filterable) ||
                                  void 0 === $
                                    ? void 0
                                    : $.stock_available_id)
                                  ? wt("BoxRegisterProduct", {
                                      attrs: {
                                        "product-name":
                                          St.productData.general.name,
                                        sku: St.productData.general.sku,
                                        "attribute-set-id":
                                          St.productData.general
                                            .attribute_set_id,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.loadedShopList
                                  ? wt(
                                      "div",
                                      [
                                        2 !== St.tabActive ||
                                        (!St.IsShowBoxOrderButton(
                                          null ===
                                            (J = St.productData.filterable) ||
                                            void 0 === J
                                            ? void 0
                                            : J.stock_available_id,
                                          St.listShopStock.length,
                                          null ===
                                            (H = St.productData.filterable) ||
                                            void 0 === H
                                            ? void 0
                                            : H.price
                                        ) &&
                                          152 !==
                                            (null ===
                                              (U = St.productData.filterable) ||
                                            void 0 === U
                                              ? void 0
                                              : U.stock_available_id))
                                          ? St._e()
                                          : wt("PdpTradeCtaBox", {
                                              attrs: {
                                                "product-data": St.productData,
                                                "is-order":
                                                  46 ===
                                                    (null ===
                                                      (z =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === z
                                                      ? void 0
                                                      : z.stock_available_id) &&
                                                  (null ===
                                                    (W =
                                                      St.productData
                                                        .filterable) ||
                                                  void 0 === W
                                                    ? void 0
                                                    : W.stock) > 0 &&
                                                  0 !==
                                                    (null ===
                                                      (K =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === K
                                                      ? void 0
                                                      : K.price),
                                              },
                                            }),
                                        St._v(" "),
                                        !St.IsShowBoxOrderButton(
                                          null ===
                                            (F = St.productData.filterable) ||
                                            void 0 === F
                                            ? void 0
                                            : F.stock_available_id,
                                          St.listShopStock.length,
                                          null ===
                                            (X = St.productData.filterable) ||
                                            void 0 === X
                                            ? void 0
                                            : X.price
                                        ) ||
                                        St.isSimProduct ||
                                        (1 !== St.tabActive &&
                                          152 !==
                                            (null ===
                                              (Z = St.productData.filterable) ||
                                            void 0 === Z
                                              ? void 0
                                              : Z.stock_available_id))
                                          ? 0 === St.listShopStock.length ||
                                            43 ===
                                              (null ===
                                                (nt =
                                                  St.productData.filterable) ||
                                              void 0 === nt
                                                ? void 0
                                                : nt.stock_available_id) ||
                                            0 ===
                                              (null ===
                                                (ot =
                                                  St.productData.filterable) ||
                                              void 0 === ot
                                                ? void 0
                                                : ot.stock)
                                            ? wt("BoxOutOfStockButton", {
                                                attrs: {
                                                  "product-id":
                                                    St.selectColorId,
                                                  "uri-list": St.breadcrumbsArr,
                                                },
                                              })
                                            : St._e()
                                          : wt("BoxOrderButton", {
                                              attrs: {
                                                price: St.updatePrice
                                                  ? St.updatePrice
                                                      .special_price ||
                                                    St.updatePrice.price
                                                  : Object.keys(St.latestPrice)
                                                      .length
                                                  ? St.latestPrice
                                                      .special_price ||
                                                    St.latestPrice.price
                                                  : (null ===
                                                      (Q =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === Q
                                                      ? void 0
                                                      : Q.special_price) ||
                                                    (null ===
                                                      (Y =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === Y
                                                      ? void 0
                                                      : Y.price),
                                                "pre-order-price": Math.trunc(
                                                  parseInt(
                                                    St.productData.general
                                                      .attributes.tien_coc
                                                  )
                                                ),
                                                "hc-install":
                                                  St.productData.general
                                                    .attributes.hc_zero_install,
                                                name: St.productData.general
                                                  .attributes.name,
                                                "is-order":
                                                  46 ===
                                                    (null ===
                                                      (tt =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === tt
                                                      ? void 0
                                                      : tt.stock_available_id) &&
                                                  (null ===
                                                    (et =
                                                      St.productData
                                                        .filterable) ||
                                                  void 0 === et
                                                    ? void 0
                                                    : et.stock) > 0 &&
                                                  0 !==
                                                    (null ===
                                                      (at =
                                                        St.productData
                                                          .filterable) ||
                                                    void 0 === at
                                                      ? void 0
                                                      : at.price),
                                                "product-data": St.productData,
                                                "path-cate-ids": St.pathCateIds,
                                              },
                                            }),
                                      ],
                                      1
                                    )
                                  : St._e(),
                                St._v(" "),
                                wt(
                                  "render-on-scroll",
                                  { attrs: { "offset-y": 10 } },
                                  [
                                    St.$device.isMobile &&
                                    [56, 43].includes(
                                      null ===
                                        (it = St.productData.filterable) ||
                                        void 0 === it
                                        ? void 0
                                        : it.stock_available_id
                                    )
                                      ? wt("BoxSameProductMobile", {
                                          staticClass: "mobile",
                                          attrs: {
                                            "is-compare": !0,
                                            "product-data": St.productData,
                                            type: "similar",
                                            title: "Sản phẩm tương tự",
                                          },
                                        })
                                      : St._e(),
                                  ],
                                  1
                                ),
                                St._v(" "),
                                St.productData.general.attribute_set_id
                                  ? wt("BoxMorePromotion", {
                                      staticClass: "my-3",
                                      attrs: {
                                        "attribute-set-id":
                                          St.productData.general
                                            .attribute_set_id,
                                      },
                                    })
                                  : St._e(),
                                St._v(" "),
                                St.$device.isMobile
                                  ? wt(
                                      "div",
                                      [
                                        wt(
                                          "render-on-scroll",
                                          { attrs: { "offset-y": 10 } },
                                          [
                                            0 !== St.selectColorId &&
                                            46 ===
                                              (null ===
                                                (ct =
                                                  St.productData.filterable) ||
                                              void 0 === ct
                                                ? void 0
                                                : ct.stock_available_id)
                                              ? wt("BoxOnStockStores", {
                                                  staticClass: "mt-3",
                                                })
                                              : St._e(),
                                            St._v(" "),
                                            St.isOldProduct
                                              ? wt(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "box-warranty-info mt-3",
                                                  },
                                                  [
                                                    wt(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "box-content warranty-info",
                                                        staticStyle: {
                                                          "padding-bottom":
                                                            "10px",
                                                        },
                                                      },
                                                      [
                                                        wt(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "description",
                                                            staticStyle: {
                                                              "max-width":
                                                                "100%",
                                                            },
                                                          },
                                                          [
                                                            wt("RenderHtml", {
                                                              attrs: {
                                                                html: St.contentBlockOldProduct,
                                                              },
                                                            }),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : St._e(),
                                          ],
                                          1
                                        ),
                                        St._v(" "),
                                        (null !==
                                          (lt = St.productData.filterable) &&
                                          void 0 !== lt &&
                                          lt.product_state) ||
                                        (null !==
                                          (st = St.productData.filterable) &&
                                          void 0 !== st &&
                                          st.included_accessories) ||
                                        (null !==
                                          (ut = St.productData.filterable) &&
                                          void 0 !== ut &&
                                          ut.warranty_information)
                                          ? wt("BoxWarranty", {
                                              attrs: {
                                                "product-state":
                                                  null ===
                                                    (pt =
                                                      St.productData
                                                        .filterable) ||
                                                  void 0 === pt
                                                    ? void 0
                                                    : pt.product_state,
                                                "product-accessories":
                                                  null ===
                                                    (mt =
                                                      St.productData
                                                        .filterable) ||
                                                  void 0 === mt
                                                    ? void 0
                                                    : mt.included_accessories,
                                                "warranty-content":
                                                  null ===
                                                    (bt =
                                                      St.productData
                                                        .filterable) ||
                                                  void 0 === bt
                                                    ? void 0
                                                    : bt.warranty_information,
                                              },
                                            })
                                          : St._e(),
                                      ],
                                      1
                                    )
                                  : St._e(),
                                St._v(" "),
                                wt(
                                  "render-on-scroll",
                                  { attrs: { "offset-y": 10 } },
                                  [
                                    St.listShopStock.length > 0
                                      ? wt("ExtendedWarranty", {
                                          key: St.selectColorId,
                                          staticClass: "my-3",
                                          attrs: {
                                            price:
                                              null ===
                                                (ht =
                                                  St.productData.filterable) ||
                                              void 0 === ht
                                                ? void 0
                                                : ht.price,
                                            "category-ids": St.strCategoryIds
                                              ? St.strCategoryIds
                                              : "",
                                            "product-name":
                                              St.productData.general.name,
                                          },
                                        })
                                      : St._e(),
                                  ],
                                  1
                                ),
                                St._v(" "),
                                St.productData.general.attributes
                                  .related_new_product_id &&
                                St.isOldProduct &&
                                !St.isLoading
                                  ? wt("BoxNewProduct", {
                                      staticClass: "mb-3",
                                      attrs: {
                                        "related-new-product-id":
                                          St.productData.general.attributes
                                            .related_new_product_id,
                                      },
                                    })
                                  : St._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                        St._v(" "),
                        wt("hr"),
                        St._v(" "),
                        St.isSimProduct
                          ? wt("BoxSimSo", {
                              attrs: {
                                "product-code":
                                  St.productData.general.attributes
                                    .additional_information,
                                "product-data": St.productData,
                              },
                            })
                          : St._e(),
                        St._v(" "),
                        wt(
                          "render-on-scroll",
                          { attrs: { "offset-y": 10 } },
                          [
                            Object.keys(St.productData).length > 0 &&
                            !St.$device.isMobile &&
                            !St.isLoading
                              ? wt("BoxSameProduct", {
                                  attrs: {
                                    "product-data": St.productData,
                                    "is-new-product": !St.isOldProduct,
                                  },
                                })
                              : St._e(),
                          ],
                          1
                        ),
                        St._v(" "),
                        St.$device.isMobile
                          ? [
                              wt("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  "product-data": St.productData,
                                  type: "component_product",
                                  title: "Linh kiện cấu thành",
                                },
                              }),
                              St._v(" "),
                              wt("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  "product-data": St.productData,
                                  type: "upsell",
                                  "has-option": !0,
                                  title: "Phụ kiện mua cùng",
                                },
                              }),
                              St._v(" "),
                              wt("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  type: "exchange",
                                  "product-data": St.productData,
                                  "is-exchange": !0,
                                  title: "Bán máy cũ lên đời tiết kiệm hơn",
                                },
                              }),
                            ]
                          : St._e(),
                        St._v(" "),
                        wt("hr"),
                        St._v(" "),
                        wt("div", { staticClass: "block-content-product" }, [
                          wt(
                            "div",
                            { staticClass: "block-content-product-left" },
                            [
                              St.productData.specification &&
                              St.$device.isMobile
                                ? wt("TechnicalInfo", {
                                    staticClass: "mobile",
                                    attrs: {
                                      "technical-info-basic":
                                        St.productData.specification.basic,
                                      "technical-info-full":
                                        St.productData.specification
                                          .full_by_group,
                                    },
                                  })
                                : St._e(),
                              St._v(" "),
                              St.pageInfo.content ||
                              St.productData.general.attributes
                                .key_selling_points
                                ? wt("Content", {
                                    attrs: {
                                      "key-selling-points":
                                        St.productData.general.attributes
                                          .key_selling_points,
                                      content: St.pageInfo.content,
                                    },
                                  })
                                : St._e(),
                              St._v(" "),
                              St.$device.isMobile
                                ? wt(
                                    "render-on-scroll",
                                    { attrs: { "offset-y": 10 } },
                                    [
                                      St.sforumPost.dataItem.length > 0
                                        ? wt("BlockSforum", {
                                            staticClass: "mobile",
                                            attrs: { data: St.sforumPost },
                                          })
                                        : St._e(),
                                      St._v(" "),
                                      (null === (vt = St.productData.general) ||
                                      void 0 === vt
                                        ? void 0
                                        : vt.youtube.length) > 0
                                        ? wt("BoxProductTVC", {
                                            staticClass: "mobile",
                                            attrs: {
                                              "tvc-list":
                                                null ===
                                                  (_t =
                                                    St.productData.general) ||
                                                void 0 === _t
                                                  ? void 0
                                                  : _t.youtube,
                                              "show-modal": St.showModalTVC,
                                            },
                                          })
                                        : St._e(),
                                      St._v(" "),
                                      [43, 56].includes(
                                        null ===
                                          (gt = St.productData.filterable) ||
                                          void 0 === gt
                                          ? void 0
                                          : gt.stock_available_id
                                      )
                                        ? St._e()
                                        : wt("BoxSameProductMobile", {
                                            staticClass: "mobile",
                                            attrs: {
                                              "is-compare": !0,
                                              "product-data": St.productData,
                                              type: "similar",
                                              title: "Sản phẩm tương tự",
                                            },
                                          }),
                                      St._v(" "),
                                      St.isOldProduct
                                        ? St._e()
                                        : wt("BoxSameProductMobile", {
                                            staticClass: "mobile",
                                            attrs: {
                                              "product-data": St.productData,
                                              type: "old_product",
                                              title: "Tham khảo thêm hàng cũ",
                                              "is-old": !0,
                                            },
                                          }),
                                    ],
                                    1
                                  )
                                : St._e(),
                              St._v(" "),
                              wt(
                                "render-on-scroll",
                                { attrs: { height: "250px", "offset-y": 50 } },
                                [wt("FaqModule")],
                                1
                              ),
                              St._v(" "),
                              St.productData.general.name
                                ? wt("BoxReview", {
                                    attrs: {
                                      "title-product":
                                        St.productData.general.name,
                                      "product-info": St.productData,
                                      "is-product-detail": !0,
                                    },
                                  })
                                : St._e(),
                              St._v(" "),
                              wt("Comment", {
                                attrs: {
                                  "comment-type": "product",
                                  "product-id": St.productId,
                                  "page-name":
                                    null === (ft = St.productData.general) ||
                                    void 0 === ft
                                      ? void 0
                                      : ft.name,
                                },
                              }),
                            ],
                            1
                          ),
                          St._v(" "),
                          wt(
                            "div",
                            { staticClass: "block-content-product-right" },
                            [
                              wt(
                                "render-on-scroll",
                                { attrs: { "offset-y": 10 } },
                                [
                                  St.productData.specification &&
                                  !St.$device.isMobile
                                    ? wt("TechnicalInfo", {
                                        attrs: {
                                          "technical-info-basic":
                                            St.productData.specification.basic,
                                          "technical-info-full":
                                            St.productData.specification
                                              .full_by_group,
                                          "product-info": St.productData,
                                          "promotion-pack":
                                            St.promotionPack || {},
                                          "show-button-print": !0,
                                        },
                                      })
                                    : St._e(),
                                  St._v(" "),
                                  St.sforumPost.dataItem.length > 0
                                    ? wt("BlockSforum", {
                                        attrs: { data: St.sforumPost },
                                      })
                                    : St._e(),
                                ],
                                1
                              ),
                              St._v(" "),
                              (null === (kt = St.productData.general) ||
                              void 0 === kt
                                ? void 0
                                : kt.youtube.length) > 0
                                ? wt("BoxProductTVC", {
                                    attrs: {
                                      "tvc-list":
                                        null ===
                                          (xt = St.productData.general) ||
                                        void 0 === xt
                                          ? void 0
                                          : xt.youtube,
                                      "show-modal": St.showModalTVC,
                                    },
                                  })
                                : St._e(),
                            ],
                            1
                          ),
                        ]),
                      ],
                      2
                    ),
                    St._v(" "),
                    "" !==
                    (null === (Dt = St.blockData) || void 0 === Dt
                      ? void 0
                      : Dt.b2b)
                      ? wt("ModalB2b")
                      : St._e(),
                    St._v(" "),
                    wt("BoxOrderButtonMobile", {
                      attrs: {
                        "product-data": St.productData,
                        status: St.checkingProductStatus(
                          null === (Pt = St.productData.filterable) ||
                            void 0 === Pt
                            ? void 0
                            : Pt.stock_available_id,
                          null === (yt = St.productData.filterable) ||
                            void 0 === yt
                            ? void 0
                            : yt.stock,
                          null === (Ct = St.productData.filterable) ||
                            void 0 === Ct
                            ? void 0
                            : Ct.price
                        ),
                        "pre-order-price": Math.trunc(
                          St.productData.general.attributes.tien_coc
                        ),
                        "uri-list": St.productData.general.categories,
                      },
                    }),
                    St._v(" "),
                    wt("TimerBanner", { attrs: { "type-page": "product" } }),
                    St._v(" "),
                    wt("PdpCompareModal", {
                      attrs: { "product-data": St.productData },
                    }),
                    St._v(" "),
                    wt("PdpSelectProductCompareModal", {
                      attrs: { "product-data": St.productData },
                    }),
                  ],
                  1
                )
              : St._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        TechnicalInfo: r(520).default,
        Content: r(507).default,
        BlockSforum: r(519).default,
      });
    },
    968: function (t, e, r) {
      "use strict";
      r(706);
    },
  },
]);
