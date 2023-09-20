(window.webpackJsonp = window.webpackJsonp || []).push([
  [126],
  {
    1152: function (t, e, o) {
      "use strict";
      o.r(e);
      o(48), o(77), o(32), o(17), o(24), o(18), o(5), o(30), o(11), o(31);
      var r = o(0),
        n = o(6),
        c =
          (o(8),
          o(131),
          o(16),
          o(44),
          o(290),
          o(132),
          o(10),
          o(47),
          o(52),
          o(15)),
        d = o(499);
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
      var h = {
          name: "BoxOrderButton",
          props: {
            price: { type: Number, default: 0 },
            hcInstall: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
            name: {
              type: String,
              default: function () {
                return "";
              },
            },
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            isOrder: { type: Boolean, default: !0 },
            preOrderPrice: { type: Number, default: 0 },
            productType: { type: Number, default: 0 },
            additionalNote: { type: String, default: "" },
            pathCateIds: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {
              regionName: {
                1: "Miền Bắc_1",
                7: "Miền Nam_7",
                8: "Miền Trung_8",
              },
              isLoadingAddToCart: !1,
              quoteItemList: [],
              modalShowB2B: !1,
              cartType: {
                normal: "mua_ngay",
                preOrder: "dat_truoc",
                installmentHome: "tra_gop_qua_SDT",
                installment: "tra_gop_qua_the",
              },
            };
          },
          computed: m(
            m(
              m(
                m(
                  m(
                    m(
                      m(
                        {},
                        Object(c.d)("product", ["productId", "selectColorId"])
                      ),
                      Object(c.d)("company-installment-quote", [
                        "loan",
                        "isLoanLoaded",
                      ])
                    ),
                    Object(c.d)("block-by-id", ["blockData"])
                  ),
                  Object(c.d)("region", ["regionId"])
                ),
                Object(c.d)("cart", ["itemsInCart"])
              ),
              Object(c.d)("province", ["province"])
            ),
            {},
            {
              prepaidAmountPrice: function () {
                var t = 0.4 * this.price;
                return this.formatMoney(t);
              },
              isAppleProduct: function () {
                var t,
                  e,
                  o,
                  r = !1;
                return (
                  null === (t = this.productData.general) ||
                    void 0 === t ||
                    !t.attributes ||
                    ("Apple" !==
                      (null === (e = this.productData.general) || void 0 === e
                        ? void 0
                        : e.attributes.manufacturer) &&
                      "Apple Chính hãng" !==
                        (null === (o = this.productData.general) || void 0 === o
                          ? void 0
                          : o.attributes.phone_accessory_brands)) ||
                    (r = !0),
                  r
                );
              },
              minPrepaidAmount: function () {
                var t;
                return this.loan.length > 0 &&
                  0 ===
                    parseInt(
                      null === (t = this.loan[0]) || void 0 === t
                        ? void 0
                        : t.monthly_rate
                    )
                  ? this.formatMoney(parseInt(this.loan[0].prepaid_amount))
                  : this.isAppleProduct
                  ? this.formatMoney(0.1 * this.productData.filterable.price)
                  : this.formatMoney(0.1 * this.price);
              },
            }
          ),
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var o, r, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.$cookies.get("quote_id")),
                          !(n =
                            t.$cookies.get("token") ||
                            t.$cookies.get("guest_token")))
                        ) {
                          e.next = 7;
                          break;
                        }
                        if (((n = n.replaceAll('"', "")), !r)) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 7),
                          t.isHasItemInQuote(r, n, t.selectColorId)
                        );
                      case 7:
                        return (
                          (e.next = 9),
                          t.getLoanFromQuote({
                            productId: t.productId,
                            term: "",
                            price:
                              (null === (o = t.productData) ||
                              void 0 === o ||
                              null === (o = o.filterable) ||
                              void 0 === o
                                ? void 0
                                : o.price) || 0,
                            salePrice: t.price || 0,
                            percent: "",
                            insurance: !0,
                            isApple: t.isAppleProduct,
                          })
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: m(
            m(
              m(
                m(
                  m(
                    m({}, Object(c.b)("super-cart", ["addToSuperCart"])),
                    Object(c.c)("quote", ["setConditionModalB2b"])
                  ),
                  Object(c.b)("cart", [
                    "incrementItemsInCart",
                    "setItemsInCart",
                  ])
                ),
                Object(c.b)("block-by-id", ["getDataBlockId"])
              ),
              Object(c.b)("company-installment-quote", ["getLoanFromQuote"])
            ),
            {},
            {
              formatMoney: d.r,
              logDatalayer: function (t) {
                var e = t.customerId,
                  o = t.logLevel,
                  r = t.serviceName,
                  n = t.functionName,
                  c = t.currentPath,
                  d = t.stepByStep,
                  l = void 0 === d ? [] : d,
                  m = t.quoteId,
                  h = void 0 === m ? 0 : m,
                  _ = window.dataLayer || [],
                  v = new Date();
                _.push({
                  event: "exception",
                  exception_description: JSON.stringify({
                    "@timestamp": v.toISOString(),
                    service_name: r,
                    tag_index: "fe-cart.log",
                    log_level: o,
                    function_name: n,
                    current_path: c,
                    quote_id: h,
                    customer_id: e,
                    body: l,
                  }),
                });
              },
              pushSimpleEventToGA: d.y,
              addToCartEvent: function () {
                var t = arguments.length > 1 ? arguments[1] : void 0;
                arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  (this.isLoadingAddToCart = !0);
                var e = 12869 === this.province.company_id ? 7 : 1,
                  o =
                    this.$cookies.get("token") ||
                    this.$cookies.get("guest_token");
                if (o) {
                  var r, n, c, d;
                  o = o.replaceAll('"', "");
                  var l = window.dataLayer || [],
                    m = this.setCartType(t);
                  l.push({
                    event: "add_to_cart",
                    ecommerce: {
                      cart_type: m,
                      region_cps: "".concat(this.regionName[e]),
                      province: "".concat(this.province.name),
                      items: [
                        {
                          item_id: "".concat(
                            this.productData.general.attributes.product_id
                          ),
                          currency: "VND",
                          index: 0,
                          item_brand: "".concat(
                            this.productData.general.attributes.manufacturer ||
                              ""
                          ),
                          item_category: "".concat(
                            (null ===
                              (r = this.productData.general.categories[1]) ||
                            void 0 === r
                              ? void 0
                              : r.name) || ""
                          ),
                          item_category2: "".concat(
                            (null ===
                              (n = this.productData.general.categories[2]) ||
                            void 0 === n
                              ? void 0
                              : n.name) || ""
                          ),
                          item_category3: "".concat(
                            (null ===
                              (c = this.productData.general.categories[3]) ||
                            void 0 === c
                              ? void 0
                              : c.name) || ""
                          ),
                          item_category4: "".concat(
                            (null ===
                              (d = this.productData.general.categories[4]) ||
                            void 0 === d
                              ? void 0
                              : d.name) || ""
                          ),
                          item_image:
                            "https://cdn2.cellphones.com.vn/500x/media/catalog/product".concat(
                              this.productData.general.attributes.image
                            ),
                          item_list_id: "".concat(
                            this.productData.general.categories[
                              this.productData.general.categories.length - 1
                            ].uri
                          ),
                          item_list_name: "".concat(
                            this.productData.general.categories[
                              this.productData.general.categories.length - 1
                            ].name
                          ),
                          item_name: "".concat(this.productData.general.name),
                          item_sku: "".concat(
                            this.productData.general.attributes.url_key
                          ),
                          item_url: "https://cellphones.com.vn/".concat(
                            this.productData.general.attributes.url_path
                          ),
                          price: this.productData.filterable.price || 0,
                          saleprice:
                            this.productData.filterable.special_price || 0,
                          quantity: 1,
                        },
                      ],
                    },
                    eventModel: { value: 0 },
                  }),
                    console.log(l);
                  var h = this.$cookies.get("simNumbers") || [];
                  1 === this.productType &&
                    h.length < 3 &&
                    (h.push({
                      sim: this.additionalNote,
                      sku: this.productData.general.attributes
                        .additional_information,
                    }),
                    this.$cookies.set("simNumbers", JSON.stringify(h), {
                      path: "/",
                      domain: "cellphones.com.vn",
                    }));
                }
              },
              isHasItemInQuote: function (t, e, o) {
                var n = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function r() {
                    var c, d, l, code, path;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (
                                ((c = n.quoteItemList.findIndex(function (t) {
                                  return t.item_id === o;
                                })),
                                !t)
                              ) {
                                r.next = 17;
                                break;
                              }
                              return (
                                (d = {
                                  method: "get",
                                  url: ""
                                    .concat("https://api.cellphones.com.vn/")
                                    .concat("v4", "/quote/")
                                    .concat(t),
                                  headers: {
                                    authorization: "Bearer ".concat(e),
                                  },
                                }),
                                (r.prev = 3),
                                (r.next = 6),
                                n.$axios(d)
                              );
                            case 6:
                              if (200 !== (l = r.sent).status) {
                                r.next = 10;
                                break;
                              }
                              return (
                                (n.quoteItemList = l.data.quote_item),
                                r.abrupt("return", -1 !== c)
                              );
                            case 10:
                              r.next = 17;
                              break;
                            case 12:
                              (r.prev = 12),
                                (r.t0 = r.catch(3)),
                                ("token_expired" !==
                                  (code =
                                    r.t0.response.data.code || "not code") &&
                                  "session_not_found" !== code &&
                                  "quote_not_found_in_session" !== code &&
                                  "no_auth" !== code) ||
                                  (n.resetCookies(),
                                  (path = n.$route.path),
                                  (window.location.href = ""
                                    .concat("https://cellphones.com.vn/")
                                    .concat(path.slice(1, path.length)))),
                                console.log(r.t0);
                            case 17:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[3, 12]]
                    );
                  })
                )();
              },
              toggleModalTC: function (t) {
                this.setConditionModalB2b(t);
              },
              resetCookies: function () {
                var t = { path: "/", domain: "cellphones.com.vn" };
                this.$cookies.remove("USER", t),
                  this.$cookies.remove("token", t),
                  this.$cookies.remove("quote_type", t),
                  this.$cookies.remove("quote_id", t),
                  this.$cookies.remove("quote_id"),
                  this.$cookies.remove("items_in_cart", t),
                  this.$cookies.remove("step", t),
                  this.$cookies.remove("voucher", t),
                  this.$cookies.remove("order_id", t),
                  this.$cookies.remove("token_expired", t);
              },
              setCartType: function (t) {
                var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return "normal" === t
                  ? "mua_ngay"
                  : "preOrder" === t
                  ? "dat_truoc"
                  : "installment" === t && e
                  ? "tra_gop_qua_SDT"
                  : "installment" !== t || e
                  ? void 0
                  : "tra_gop_qua_the";
              },
              trackingAddToCart: function (t) {
                var e,
                  o,
                  r,
                  n,
                  c = this;
                (this.isLoadingAddToCart = !0),
                  setTimeout(function () {
                    c.isLoadingAddToCart = !1;
                  }, 1e3),
                  (this.isLoadingAddToCart = !0);
                var d = window.dataLayer || [],
                  l = this.cartType[t];
                d.push({
                  event: "add_to_cart",
                  ecommerce: {
                    cart_type: l,
                    region_cps:
                      12869 === this.province.company_id
                        ? "Miền Nam_7"
                        : "Miền Bắc_1",
                    province: "".concat(this.province.name),
                    items: [
                      {
                        item_id: "".concat(
                          this.productData.general.attributes.product_id
                        ),
                        currency: "VND",
                        index: 0,
                        item_brand: "".concat(
                          this.productData.general.attributes.manufacturer || ""
                        ),
                        item_category: "".concat(
                          (null ===
                            (e = this.productData.general.categories[1]) ||
                          void 0 === e
                            ? void 0
                            : e.name) || ""
                        ),
                        item_category2: "".concat(
                          (null ===
                            (o = this.productData.general.categories[2]) ||
                          void 0 === o
                            ? void 0
                            : o.name) || ""
                        ),
                        item_category3: "".concat(
                          (null ===
                            (r = this.productData.general.categories[3]) ||
                          void 0 === r
                            ? void 0
                            : r.name) || ""
                        ),
                        item_category4: "".concat(
                          (null ===
                            (n = this.productData.general.categories[4]) ||
                          void 0 === n
                            ? void 0
                            : n.name) || ""
                        ),
                        item_image:
                          "https://cdn2.cellphones.com.vn/500x/media/catalog/product".concat(
                            this.productData.general.attributes.image
                          ),
                        item_list_id: "".concat(
                          this.productData.general.categories[
                            this.productData.general.categories.length - 1
                          ].uri
                        ),
                        item_list_name: "".concat(
                          this.productData.general.categories[
                            this.productData.general.categories.length - 1
                          ].name
                        ),
                        item_name: "".concat(this.productData.general.name),
                        item_sku: "".concat(
                          this.productData.general.attributes.url_key
                        ),
                        item_url: "https://cellphones.com.vn/".concat(
                          this.productData.general.attributes.url_path
                        ),
                        price: this.productData.filterable.price || 0,
                        saleprice:
                          this.productData.filterable.special_price || 0,
                        quantity: 1,
                      },
                    ],
                  },
                  eventModel: { value: 0 },
                }),
                  console.log(d);
              },
            }
          ),
        },
        _ = h,
        v = (o(588), o(42)),
        component = Object(v.a)(
          _,
          function () {
            var t = this,
              e = t._self._c;
            return 0 === t.productType
              ? e("div", { staticClass: "box-order-button-container my-3" }, [
                  e(
                    "div",
                    {
                      staticClass: "is-flex is-justify-content-space-between",
                      staticStyle: { gap: "10px" },
                    },
                    [
                      e(
                        "button",
                        {
                          staticClass:
                            "btn-cta order-button button--large is-flex is-justify-content-center is-align-items-center",
                          class: {
                            "is-loading": t.isLoadingAddToCart,
                            "order-button-full": !t.isOrder,
                          },
                          on: {
                            click: function (e) {
                              t.trackingAddToCart(
                                t.isOrder ? "normal" : "preOrder"
                              ),
                                t.addToSuperCart({
                                  productItem: { itemId: t.selectColorId },
                                  cartType: t.isOrder ? "normal" : "preOrder",
                                });
                            },
                          },
                        },
                        [
                          t.isOrder
                            ? [
                                e("strong", [t._v("MUA NGAY")]),
                                t._v(" "),
                                e("span", [
                                  t._v(
                                    "(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)"
                                  ),
                                ]),
                              ]
                            : t.isOrder
                            ? t._e()
                            : [
                                e("strong", [t._v("ĐẶT TRƯỚC NGAY")]),
                                t._v(" "),
                                e("span", [
                                  t._v(
                                    "(Đặt trước " +
                                      t._s(t.formatMoney(t.preOrderPrice)) +
                                      " - Thanh toán online)"
                                  ),
                                ]),
                              ],
                        ],
                        2
                      ),
                      t._v(" "),
                      t.isOrder
                        ? e(
                            "button",
                            {
                              staticClass:
                                "btn-cta button button--small add-to-cart-button",
                              class: { "is-loading": t.isLoadingAddToCart },
                              on: {
                                click: function (e) {
                                  t.trackingAddToCart("normal"),
                                    t.addToSuperCart({
                                      productItem: { itemId: t.selectColorId },
                                      cartType: "normal",
                                      isGoToCart: !1,
                                    });
                                },
                              },
                            },
                            [
                              t.isLoadingAddToCart
                                ? t._e()
                                : [
                                    e("nuxt-img", {
                                      attrs: {
                                        provider: "CPS_IMG_PROVIDER",
                                        format: "webp",
                                        width: "50",
                                        quality: "70",
                                        src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/add-to-cart.png",
                                        alt: "cart-icon",
                                      },
                                    }),
                                    t._v(" "),
                                    e("span", [t._v("Thêm vào giỏ")]),
                                  ],
                            ],
                            2
                          )
                        : t._e(),
                    ]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "is-flex is-justify-content-space-between" },
                    [
                      t.price > 0 && t.isOrder && t.isLoanLoaded
                        ? e(
                            "button",
                            {
                              staticClass:
                                "btn-cta installment-button button--medium",
                              class: {
                                "is-loading": t.isLoadingAddToCart,
                                "installment-button-full":
                                  t.price < 3e6 && t.isOrder,
                              },
                              on: {
                                click: function (e) {
                                  t.trackingAddToCart("installmentHome"),
                                    t.addToSuperCart({
                                      productItem: {
                                        itemId: t.selectColorId,
                                        isHomeCredit: !0,
                                      },
                                      cartType: "installment",
                                    });
                                },
                              },
                            },
                            [
                              t._m(0),
                              e("br"),
                              t._v(" "),
                              e("span", { staticClass: "has-text-white" }, [
                                t._v(
                                  "Trả trước chỉ từ " +
                                    t._s(t.minPrepaidAmount) +
                                    "₫"
                                ),
                              ]),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t.price > 3e6 && t.isOrder && t.isLoanLoaded
                        ? e(
                            "button",
                            {
                              staticClass:
                                "btn-cta installment-button button--medium",
                              class: { "is-loading": t.isLoadingAddToCart },
                              on: {
                                click: function (e) {
                                  t.trackingAddToCart("installment"),
                                    t.addToSuperCart({
                                      productItem: {
                                        itemId: t.selectColorId,
                                        isHomeCredit: !1,
                                      },
                                      cartType: "installment",
                                    });
                                },
                              },
                            },
                            [
                              e("strong", { staticClass: "has-text-white" }, [
                                t._v("TRẢ GÓP QUA THẺ"),
                              ]),
                              e("br"),
                              t._v(" "),
                              e("span", { staticClass: "has-text-white" }, [
                                t._v("(Visa, Mastercard, JCB)"),
                              ]),
                            ]
                          )
                        : t._e(),
                    ]
                  ),
                  t._v(" "),
                  t.pathCateIds.includes("5")
                    ? e(
                        "a",
                        {
                          staticClass: "is-block button__timHieuThem",
                          attrs: {
                            href: "https://cellphones.com.vn/apple/mac",
                            target: "_blank",
                            rel: "noopener",
                          },
                          on: {
                            click: function (e) {
                              var o;
                              return t.pushSimpleEventToGA(
                                null === (o = t.productData) ||
                                  void 0 === o ||
                                  null === (o = o.general) ||
                                  void 0 === o
                                  ? void 0
                                  : o.name,
                                "tim_hieu_them"
                              );
                            },
                          },
                        },
                        [t._v("\n    Tìm hiểu thêm\n  ")]
                      )
                    : t._e(),
                  t._v(" "),
                  t.pathCateIds.includes("132")
                    ? e(
                        "a",
                        {
                          staticClass: "is-block button__timHieuThem",
                          attrs: {
                            href: "https://cellphones.com.vn/apple/iphone",
                            target: "_blank",
                            rel: "noopener",
                          },
                          on: {
                            click: function (e) {
                              var o;
                              return t.pushSimpleEventToGA(
                                null === (o = t.productData) ||
                                  void 0 === o ||
                                  null === (o = o.general) ||
                                  void 0 === o
                                  ? void 0
                                  : o.name,
                                "tim_hieu_them"
                              );
                            },
                          },
                        },
                        [t._v("\n    Tìm hiểu thêm\n  ")]
                      )
                    : t._e(),
                ])
              : 1 === t.productType
              ? e("div", { staticClass: "sim-number-add-to-cart" }, [
                  e(
                    "button",
                    {
                      on: {
                        click: function (e) {
                          t.trackingAddToCart("normal"),
                            t.addToSuperCart({
                              productItem: {
                                itemId: t.selectColorId,
                                simNumber: t.additionalNote,
                              },
                              cartType: "niceSim",
                            });
                        },
                      },
                    },
                    [t._v("Mua ngay\n  ")]
                  ),
                ])
              : t._e();
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e("strong", { staticClass: "has-text-white" }, [
                t._v("TRẢ GÓP "),
                e("span", [t._v("0%")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    551: function (t, e, o) {
      t.exports = {};
    },
    588: function (t, e, o) {
      "use strict";
      o(551);
    },
  },
]);
