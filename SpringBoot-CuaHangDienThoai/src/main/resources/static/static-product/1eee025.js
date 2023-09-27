(window.webpackJsonp = window.webpackJsonp || []).push([
  [27, 132, 145, 149, 180, 205, 207, 209, 220],
  {
    1178: function (t, e, n) {
      "use strict";
      n.r(e);
      n(32),
        n(17),
        n(10),
        n(24),
        n(18),
        n(30),
        n(11),
        n(31),
        n(34),
        n(57),
        n(58),
        n(59);
      var r = n(6),
        o =
          (n(5),
          n(33),
          n(36),
          n(131),
          n(16),
          n(44),
          n(47),
          n(107),
          n(52),
          n(290),
          n(48),
          n(77),
          n(202),
          n(15)),
        c = n(499);
      function l(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return d(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return d(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "Detail",
          components: {
            BoxPrice: function () {
              return n.e(16).then(n.bind(null, 1168));
            },
            WishList: function () {
              return n.e(28).then(n.bind(null, 1365));
            },
          },
          props: {
            isShowRating: { type: Boolean, default: !1 },
            customBoxPromoPrice: {
              type: Object,
              default: function () {
                return {};
              },
            },
            isMonopoly: { type: Boolean, default: !1 },
            isCompare: { type: Boolean, default: !1 },
            replacePrice: { type: String, default: "" },
            isShowDiscountPercent: { type: Boolean, default: !1 },
            isOld: { type: Boolean, default: !1 },
            isRegister: { type: Boolean, default: !1 },
            popupType: { type: String, default: "" },
            ratingData: {
              type: Object,
              default: function () {
                return {};
              },
            },
            tradePromotion: {
              type: Object,
              default: function () {
                return {};
              },
            },
            url: { type: String, default: "" },
            isTradeInType: { type: Boolean, default: !1 },
            applyNormalPrice: { type: Boolean, default: !1 },
            id: { type: Number, default: 0 },
            specialPriceOriginal: { type: Number, default: 0 },
            childId: { type: Number, default: 0 },
            path: { type: String, default: "" },
            name: { type: String, default: "" },
            thumbnail: { type: String, default: "" },
            promotionInformation: { type: String, default: "" },
            additionalText: { type: String, default: "" },
            promotionHotsale: { type: String, default: "" },
            price: { type: Number, default: 0 },
            specialPrice: { type: Number, default: 0 },
            crossSellPrice: { type: Number, default: 0 },
            thumbnailFullPath: { type: Boolean, default: !1 },
            stockAvailable: { type: Number, default: 46 },
            stock: { type: Number, default: 0 },
            listLabelBadge: {
              type: Object,
              default: function () {
                return {};
              },
            },
            listKeyBadgeShow: { type: String, default: "" },
            productId: { type: Number, default: 0 },
            hasTetPromotion: {
              type: Object,
              default: function () {
                return {};
              },
            },
            isHidePrice: {
              type: Object,
              default: function () {
                return { status: !1, letters: 0 };
              },
            },
            maxValue: { type: Number, default: 0 },
            discountPercent: { type: Number, default: 0 },
            listChildColorId: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {
              salePrice: 0,
              listBadge: [],
              selectedColor: {},
              cpsMain: "https://cellphones.com.vn/",
            };
          },
          computed: f(
            f(
              f({}, Object(o.d)("build-pc-page", ["selectedCateId"])),
              Object(o.d)("pdp-trade", ["productTradePromotions"])
            ),
            {},
            {
              createCompareLink: function () {
                var t =
                    this.$route.params.slug ||
                    this.$route.name.replace("/", ""),
                  e = t.slice(0, t.search(".html")),
                  n = this.path.slice(0, this.path.search(".html"));
                return "https://cellphones.com.vn/so-sanh/"
                  .concat(e, "-vs-")
                  .concat(n);
              },
              isShowFreeShipTag: function () {
                return !1;
              },
              tradePriceCalculator: function () {
                return this.specialPrice
                  ? this.specialPrice - this.tradePromotion.promo_value
                  : this.price - this.tradePromotion.promo_value;
              },
            }
          ),
          mounted: function () {
            var t = this;
            this.listBadgeFilter(),
              setTimeout(function () {
                t.listChildColorId.length > 0
                  ? t.$set(
                      t.selectedColor,
                      "id",
                      t.listChildColorId[0].filterable.product_id
                    )
                  : t.$set(t.selectedColor, "id", t.childId);
              }, 500);
          },
          methods: f(
            f(
              f(
                { formatMoney: c.r, lockScroll: c.w },
                Object(o.c)("modalPopup", [
                  "togglePopup",
                  "handleChangeChoosenProductId",
                ])
              ),
              Object(o.b)("build-pc-page", ["handleSelectComponentItem"])
            ),
            {},
            {
              stockStatus: function (t) {
                return 46 === t
                  ? ""
                  : 56 === t
                  ? "Sắp về hàng"
                  : 43 === t
                  ? "Hết hàng"
                  : "Hàng đặt trước";
              },
              listBadgeFilter: function () {
                var t,
                  e = l(this.listKeyBadgeShow.split(","));
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var n = t.value.replaceAll(" ", "");
                    n.includes("%") &&
                      (n = n.match(/^%(.*?)%$/)[1].replaceAll("%", "") || null),
                      this.listLabelBadge[n] &&
                        this.listBadge.push({
                          id: n,
                          Label: this.listLabelBadge[n],
                        });
                  }
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
                return this.listBadge;
              },
              handleColorId: function (t) {
                this.$set(this.selectedColor, "id", t.product_id),
                  this.$set(this.selectedColor, "thumbnail", t.thumbnail),
                  this.$set(this.selectedColor, "price", t.price);
              },
              calculatePriceCombo: function (t) {
                var e = t.price,
                  n = t.percent,
                  r = t.maxValue,
                  o = 0 !== n ? e * (n / 100) : e;
                return (
                  (o = 1e3 * Math.round(o / 1e3)) > r && 0 !== r && (o = r),
                  e - o
                );
              },
              calculatePricePercent: function (t, e, n, r) {
                return this.roundPrice(
                  ((n !== e ? e : n) || t) * (1 - r / 100)
                );
              },
              roundPrice: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1e3;
                return Math.round(t / e) * e;
              },
            }
          ),
        },
        v = h,
        y = (n(597), n(42)),
        component = Object(y.a)(
          v,
          function () {
            var t,
              e,
              n = this,
              r = n._self._c;
            return r("div", { staticClass: "product-info-container" }, [
              r("div", { staticClass: "product-info" }, [
                r(
                  "a",
                  n._b(
                    {
                      staticClass: "product__link button__link",
                      attrs: { target: !!n.popupType && "_blank" },
                    },
                    "a",
                    { href: n.url },
                    !1
                  ),
                  [
                    r(
                      "div",
                      { staticClass: "product__image" },
                      [
                        n.thumbnailFullPath
                          ? r("nuxt-img", {
                              staticClass: "product__img",
                              attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "358",
                                height: "358",
                                alt: n.name,
                                src: "".concat(n.thumbnail),
                                loading: "lazy",
                              },
                            })
                          : r("nuxt-img", {
                              staticClass: "product__img",
                              attrs: {
                                alt: n.name,
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "358",
                                height: "358",
                                placeholder:
                                  "https://cdn2.cellphones.com.vn/358x358,webp,q10/media/wysiwyg/placehoder.png",
                                src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                  n.selectedColor.thumbnail || n.thumbnail
                                ),
                                loading: "lazy",
                              },
                            }),
                      ],
                      1
                    ),
                    n._v(" "),
                    r("div", { staticClass: "product__name" }, [
                      r("h3", [n._v(n._s(n.name))]),
                    ]),
                    n._v(" "),
                    "" !== n.listKeyBadgeShow
                      ? r(
                          "div",
                          { staticClass: "product__badge" },
                          n._l(n.listBadge, function (t, e) {
                            return r(
                              "p",
                              {
                                key: e,
                                staticClass: "product__more-info__item",
                              },
                              [n._v(n._s(t.Label))]
                            );
                          }),
                          0
                        )
                      : n._e(),
                    n._v(" "),
                    "" !== n.stockStatus(n.stockAvailable)
                      ? r(
                          "div",
                          {
                            staticClass:
                              "product__more-info is-flex is is-flex-wrap-wrap",
                          },
                          [
                            r(
                              "p",
                              {
                                staticClass:
                                  "product__more-info__item notification is-danger is-light",
                              },
                              [
                                n._v(
                                  "\n          " +
                                    n._s(n.stockStatus(n.stockAvailable))
                                ),
                              ]
                            ),
                          ]
                        )
                      : n._e(),
                    n._v(" "),
                    "comboSelection" !== n.popupType
                      ? r("BoxPrice", {
                          attrs: {
                            "is-old": n.isOld,
                            price: n.price,
                            "special-price": n.specialPrice,
                            "is-show-discount-percent": n.isShowDiscountPercent,
                            "is-hide-price": n.isHidePrice,
                          },
                        })
                      : n._e(),
                    n._v(" "),
                    Object.keys(n.customBoxPromoPrice).length > 0
                      ? r("div", { staticClass: "customBoxPromoPrice" }, [
                          r("p", { staticClass: "text-normal" }, [
                            n._v("Giá bán lẻ: "),
                            r("span", [
                              n._v(
                                n._s(
                                  n.formatMoney(
                                    n.specialPriceOriginal || n.price
                                  )
                                ) + "đ"
                              ),
                            ]),
                          ]),
                          n._v(" "),
                          r("div", { staticClass: "box-text-save" }, [
                            r("p", { staticClass: "text-sale" }, [
                              r("span", [
                                n._v(
                                  n._s(n.customBoxPromoPrice.textSale) + ": "
                                ),
                              ]),
                              n._v(" "),
                              r("span", [
                                n._v(
                                  "\n            " +
                                    n._s(
                                      n.formatMoney(
                                        n.calculatePricePercent(
                                          n.price,
                                          n.specialPrice,
                                          n.specialPriceOriginal,
                                          n.customBoxPromoPrice.discountPercent
                                        )
                                      )
                                    ) +
                                    "đ\n          "
                                ),
                              ]),
                            ]),
                            n._v(" "),
                            r("p", { staticClass: "currency-sale" }, [
                              r("span", [
                                n._v(
                                  n._s(n.customBoxPromoPrice.textSave) + ": "
                                ),
                              ]),
                              n._v(" "),
                              r("span", [
                                n._v(
                                  "\n            " +
                                    n._s(
                                      n.formatMoney(
                                        (n.specialPriceOriginal || n.price) -
                                          n.calculatePricePercent(
                                            n.price,
                                            n.specialPrice,
                                            n.specialPriceOriginal,
                                            n.customBoxPromoPrice
                                              .discountPercent
                                          )
                                      )
                                    ) +
                                    "đ\n          "
                                ),
                              ]),
                            ]),
                          ]),
                        ])
                      : n._e(),
                    n._v(" "),
                    "" !== n.replacePrice
                      ? r("div", { staticClass: "product__priceWithPrefix" }, [
                          r("div", { staticClass: "priceWithPrefix" }, [
                            r("p", { staticClass: "gift-cont" }, [
                              n._v(
                                n._s(n.replacePrice) +
                                  n._s(n.formatMoney(n.specialPrice)) +
                                  "đ"
                              ),
                            ]),
                          ]),
                        ])
                      : n._e(),
                    n._v(" "),
                    Object.keys(n.tradePromotion).length > 0 &&
                    n.tradePromotion.promo_value > 0 &&
                    46 === n.stockAvailable
                      ? r(
                          "div",
                          { staticClass: "block-trade-price" },
                          [
                            n._v("Giá lên đời: "),
                            "comboSelection" !== n.popupType
                              ? r("BoxPrice", {
                                  attrs: {
                                    "is-old": n.isOld,
                                    price: n.tradePriceCalculator,
                                    "is-hide-price": n.isHidePrice,
                                  },
                                })
                              : n._e(),
                          ],
                          1
                        )
                      : n._e(),
                    n._v(" "),
                    r(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: n.promotionInformation && !n.isRegister,
                            expression: "promotionInformation && !isRegister",
                          },
                        ],
                        staticClass: "product__promotions",
                      },
                      [
                        r("RenderHtml", {
                          attrs: { html: n.promotionInformation },
                        }),
                      ],
                      1
                    ),
                    n._v(" "),
                    r(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: n.promotionHotsale,
                            expression: "promotionHotsale",
                          },
                        ],
                        staticClass: "product__promotions",
                      },
                      [
                        r("div", { staticClass: "promotion" }, [
                          r("p", { staticClass: "gift-cont" }, [
                            n._v(n._s(n.promotionHotsale)),
                          ]),
                        ]),
                      ]
                    ),
                    n._v(" "),
                    n.additionalText
                      ? r("div", { staticClass: "product__additional-text" }, [
                          r(
                            "div",
                            { staticClass: "additional-text-out-line" },
                            [
                              r("p", { staticClass: "additional-text" }, [
                                n._v(n._s(n.additionalText)),
                              ]),
                            ]
                          ),
                        ])
                      : n._e(),
                  ],
                  1
                ),
                n._v(" "),
                n.isShowFreeShipTag
                  ? r("div", { staticClass: "free-ship-tag" }, [
                      n._v("\n      Giao nhanh miễn phí\n    "),
                    ])
                  : n._e(),
                n._v(" "),
                r("div", { staticClass: "product__box-rating" }, [
                  !n.isOld && n.isShowRating && n.ratingData.review_count > 0
                    ? r(
                        "div",
                        n._l(5, function (t) {
                          return r("RenderHtml", {
                            key: t,
                            staticClass: "icon-star",
                            class:
                              n.ratingData.average_rating >= t - 0.5 &&
                              "is-active",
                            attrs: { html: n.$icons().Star },
                          });
                        }),
                        1
                      )
                    : n._e(),
                ]),
                n._v(" "),
                r("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: n.isMonopoly,
                      expression: "isMonopoly",
                    },
                    {
                      name: "lazy",
                      rawName: "v-lazy:background-image",
                      value:
                        "https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg",
                      expression:
                        "`https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg`",
                      arg: "background-image",
                    },
                  ],
                  staticClass: "product__sticker-doc-quyen",
                }),
                n._v(" "),
                n._e(),
                n._v(" "),
                n.isOld
                  ? r("div", { staticClass: "old-product-parent-price py-2" }, [
                      n._v("Giá hàng mới: "),
                      r("span", [n._v(n._s(n.formatMoney(n.price)))]),
                    ])
                  : n._e(),
                n._v(" "),
                n.isOld && n.price - n.specialPrice > 0
                  ? r(
                      "div",
                      {
                        staticClass:
                          "old-product-calculate p-1 is-flex is-justify-content-center is-align-items-center",
                      },
                      [
                        n._v(
                          "\n      Tiết kiệm: " +
                            n._s(n.formatMoney(n.price - n.specialPrice)) +
                            "\n    "
                        ),
                      ]
                    )
                  : n._e(),
                n._v(" "),
                "buildPc" === n.popupType || "comboSelection" === n.popupType
                  ? r(
                      "div",
                      {
                        staticClass:
                          "block-popup-product is-flex is-flex-direction-column",
                      },
                      [
                        "comboSelection" === n.popupType
                          ? r("div", { staticClass: "block-combo" }, [
                              r("div", { staticClass: "block-combo__price" }, [
                                n._v(
                                  "Giá niêm yết: " +
                                    n._s(n.formatMoney(n.price)) +
                                    "₫"
                                ),
                              ]),
                              n._v(" "),
                              r(
                                "div",
                                { staticClass: "block-combo__special-price" },
                                [
                                  n._v(
                                    "Giá mua kèm: " +
                                      n._s(
                                        n.formatMoney(
                                          n.calculatePriceCombo({
                                            price: n.applyNormalPrice
                                              ? n.price
                                              : n.specialPrice || n.price,
                                            maxValue: n.maxValue,
                                            percent: n.discountPercent,
                                          })
                                        )
                                      ) +
                                      "₫\n        "
                                  ),
                                ]
                              ),
                              n._v(" "),
                              n.listChildColorId.length > 0
                                ? r(
                                    "div",
                                    {
                                      staticClass:
                                        "block-combo__product-color is-flex is-flex-wrap-wrap",
                                    },
                                    n._l(n.listChildColorId, function (t, e) {
                                      return r(
                                        "div",
                                        {
                                          key: e,
                                          staticClass:
                                            "img-container button__color modal__button",
                                          class: {
                                            "active-color":
                                              t.filterable.product_id ===
                                              n.selectedColor.id,
                                          },
                                          on: {
                                            click: function (e) {
                                              return n.handleColorId(
                                                t.filterable
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r("nuxt-img", {
                                            attrs: {
                                              src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                                t.filterable.thumbnail
                                              ),
                                              alt: "Thumbnail Color",
                                              loading: "lazy",
                                            },
                                          }),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  )
                                : n._e(),
                            ])
                          : n._e(),
                        n._v(" "),
                        n.price > 0
                          ? r(
                              "div",
                              {
                                staticClass:
                                  "group-option is-flex is-justify-content-space-between is-align-items-center mt-auto",
                              },
                              [
                                r(
                                  "a",
                                  n._b(
                                    {
                                      staticClass:
                                        "build-pc-option button__link modal__button p-1 has-text-centered has-text-white",
                                      attrs: {
                                        target: "_blank",
                                        rel: "noopener",
                                      },
                                    },
                                    "a",
                                    { href: n.url },
                                    !1
                                  ),
                                  [n._v("CHI\n          TIẾT")]
                                ),
                                n._v(" "),
                                r(
                                  "a",
                                  {
                                    staticClass:
                                      "build-pc-option button__select modal__button p-1 has-text-centered has-text-white",
                                    on: {
                                      click: function (t) {
                                        n.handleSelectComponentItem({
                                          image:
                                            n.selectedColor.thumbnail ||
                                            n.thumbnail,
                                          price:
                                            n.selectedColor.price || n.price,
                                          specialPrice: n.specialPrice,
                                          name: n.name,
                                          id: n.selectedColor.id || n.id,
                                          stockAvailable: n.stockAvailable,
                                          quantity: 1,
                                          stock: n.stock,
                                          url: n.url,
                                        }),
                                          n.lockScroll(!1);
                                      },
                                    },
                                  },
                                  [n._v("\n          CHỌN\n        ")]
                                ),
                              ]
                            )
                          : n._e(),
                      ]
                    )
                  : n._e(),
                n._v(" "),
                n.isRegister
                  ? r("div", { staticClass: "register-open-modal" }, [
                      r(
                        "button",
                        {
                          on: {
                            click: function (t) {
                              return n.togglePopup({
                                isPopup: !0,
                                productId: n.productId,
                              });
                            },
                          },
                        },
                        [n._v("ĐĂNG KÝ NGAY\n      ")]
                      ),
                    ])
                  : n._e(),
                n._v(" "),
                n.isTradeInType
                  ? r("div", { staticClass: "ctaTrade" }, [
                      r(
                        "a",
                        n._b(
                          {
                            staticClass:
                              "btn__trade is-flex is-justify-content-center is-align-items-center",
                            attrs: { target: "_blank", rel: "noopener" },
                          },
                          "a",
                          {
                            href: ""
                              .concat(n.cpsMain, "thu-cu-doi-moi?id=")
                              .concat(n.productId),
                          },
                          !1
                        ),
                        [n._v("\n        Lên đời ngay\n      ")]
                      ),
                    ])
                  : n._e(),
              ]),
              n._v(" "),
              0 !== n.productId
                ? r(
                    "div",
                    { staticClass: "btn-wish-list" },
                    [
                      r("span", [n._v("Yêu thích  ")]),
                      n._v(" "),
                      r("WishList", { attrs: { "product-id": n.productId } }),
                    ],
                    1
                  )
                : n._e(),
              n._v(" "),
              null !== (t = n.hasTetPromotion) &&
              void 0 !== t &&
              t.show_flashsale
                ? r(
                    "div",
                    { staticClass: "tet-promotion" },
                    [
                      r("nuxt-img", {
                        attrs: {
                          provider: "CPS_IMG_PROVIDER",
                          format: "webp",
                          width: "40",
                          height: "auto",
                          src: "https://cdn2.cellphones.com.vn/70x/media/landing-page/xa-kho/xa-kho-2023/Sticker_Xakho_Flashsale.png",
                          alt: "cps-promotion",
                          loading: "lazy",
                        },
                      }),
                    ],
                    1
                  )
                : null !== (e = n.hasTetPromotion) &&
                  void 0 !== e &&
                  e.uu_dai_tet
                ? r(
                    "div",
                    { staticClass: "tet-promotion" },
                    [
                      r("nuxt-img", {
                        staticClass: "tet-promotion-img",
                        attrs: {
                          provider: "CPS_IMG_PROVIDER",
                          format: "webp",
                          width: "40",
                          quality: "120",
                          src: "https://cdn2.cellphones.com.vn/70x/media/landing-page/xa-kho/xa-kho-2023/Sticker_XaKho.png",
                          alt: "cps-promotion",
                          loading: "lazy",
                        },
                      }),
                    ],
                    1
                  )
                : n._e(),
              n._v(" "),
              -1 === n.specialPrice
                ? r(
                    "div",
                    { staticClass: "sold-out-tag" },
                    [
                      r("nuxt-img", {
                        attrs: {
                          provider: "CPS_IMG_PROVIDER",
                          format: "webp",
                          width: "200",
                          height: "auto",
                          src: "https://cdn2.cellphones.com.vn/200x/media/blackfriday/2022/theme/sold_out.png",
                          loading: "lazy",
                        },
                      }),
                    ],
                    1
                  )
                : n._e(),
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
    499: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "p", function () {
          return v;
        }),
          n.d(e, "B", function () {
            return y;
          }),
          n.d(e, "r", function () {
            return _;
          }),
          n.d(e, "q", function () {
            return w;
          }),
          n.d(e, "s", function () {
            return P;
          }),
          n.d(e, "u", function () {
            return C;
          }),
          n.d(e, "x", function () {
            return O;
          }),
          n.d(e, "E", function () {
            return x;
          }),
          n.d(e, "b", function () {
            return S;
          }),
          n.d(e, "t", function () {
            return k;
          }),
          n.d(e, "g", function () {
            return j;
          }),
          n.d(e, "d", function () {
            return I;
          }),
          n.d(e, "C", function () {
            return A;
          }),
          n.d(e, "y", function () {
            return T;
          }),
          n.d(e, "z", function () {
            return B;
          }),
          n.d(e, "o", function () {
            return N;
          }),
          n.d(e, "e", function () {
            return D;
          }),
          n.d(e, "i", function () {
            return M;
          }),
          n.d(e, "n", function () {
            return E;
          }),
          n.d(e, "j", function () {
            return R;
          }),
          n.d(e, "k", function () {
            return $;
          }),
          n.d(e, "m", function () {
            return L;
          }),
          n.d(e, "l", function () {
            return H;
          }),
          n.d(e, "D", function () {
            return V;
          }),
          n.d(e, "h", function () {
            return z;
          }),
          n.d(e, "A", function () {
            return G;
          }),
          n.d(e, "f", function () {
            return F;
          }),
          n.d(e, "w", function () {
            return W;
          }),
          n.d(e, "a", function () {
            return Y;
          }),
          n.d(e, "v", function () {
            return K;
          }),
          n.d(e, "c", function () {
            return Q;
          });
        n(24),
          n(30),
          n(31),
          n(502),
          n(503),
          n(58),
          n(34),
          n(57),
          n(33),
          n(59),
          n(36);
        var r = n(25),
          o = n(504),
          c = n(6);
        n(21),
          n(16),
          n(5),
          n(10),
          n(44),
          n(290),
          n(47),
          n(501),
          n(131),
          n(11),
          n(17),
          n(202),
          n(32),
          n(52),
          n(38),
          n(18),
          n(92),
          n(294);
        function l(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return d(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return d(t, e);
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              n && (t = n);
              var i = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return i >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[i++] };
                },
                e: function (t) {
                  throw t;
                },
                f: r,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            c = !0,
            l = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              var t = n.next();
              return (c = t.done), t;
            },
            e: function (t) {
              (l = !0), (o = t);
            },
            f: function () {
              try {
                c || null == n.return || n.return();
              } finally {
                if (l) throw o;
              }
            },
          };
        }
        function d(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function m(t) {
          var e = (function (input, t) {
            if ("object" !== Object(r.a)(input) || null === input) return input;
            var e = input[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(input, t || "default");
              if ("object" !== Object(r.a)(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(input);
          })(t, "string");
          return "symbol" === Object(r.a)(e) ? e : String(e);
        }
        function f(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function h(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  Object(c.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function v(t, option) {
          return (function (t, e) {
            return e.test(t);
          })(
            t,
            {
              phone: { regex: /^((09|03|07|08|05)+(\d{8}))$/g },
              fullName: { regex: /^[^!@#$%^&*()_+=\-[\]:'";.?<>|\\0-9]+$/g },
              email: {
                regex:
                  /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
              },
              otp: { regex: /^\d{4}$/g },
              luckyNumber: { regex: /^\d{4}$/g },
            }[option].regex
          );
        }
        function y(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e4;
          return this.formatMoney(Math.round(t / e) * e);
        }
        function _(t) {
          return "" === t
            ? "0"
            : String(t)
                .split("")
                .reverse()
                .reduce(function (t, e, n) {
                  return (n % 3 ? e : e + ".") + t;
                });
        }
        function w(t) {
          var e = new Date(t),
            n = e.getDate(),
            r = e.getMonth() + 1,
            o = e.getFullYear(),
            c = (e.getHours() < 10 ? "0" : "") + e.getHours(),
            l = (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
          return ""
            .concat(n, "/")
            .concat(r, "/")
            .concat(o, " ")
            .concat(c, ":")
            .concat(l);
        }
        function P(t, e) {
          return e > 0 ? e : t;
        }
        function C(t, e) {
          for (
            var n = t.replaceAll(".", "").slice(e, e.length), r = "", i = 0;
            i < e;
            i++
          )
            r += "?";
          return _(r.concat(n));
        }
        function O(t, e) {
          return 0 === e || 0 === t ? "0" : (100 - e / (t / 100)).toFixed(0);
        }
        function x() {
          var data =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = "";
          for (var e in data) t += "".concat(e, "=").concat(data[e], "&");
          return t.slice(0, -1);
        }
        function S() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = { "Content-Type": "application/json" };
          return (
            t && (e = h(h({}, e), {}, { Authorization: "Bearer " + t })), e
          );
        }
        function k() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = new Date(),
            n = "" === t ? new Date() : new Date(t),
            r = Math.abs(e - n) / 1e3,
            o = {},
            s = {
              năm: 31536e3,
              tháng: 2592e3,
              tuần: 604800,
              ngày: 86400,
              tiếng: 3600,
              phút: 60,
              giây: 1,
            },
            c = "vài giây trước";
          for (var l in (Object.keys(s).forEach(function (t) {
            (o[t] = Math.floor(r / s[t])), (r -= o[t] * s[t]);
          }),
          o))
            if (o[l] > 0) {
              c = "".concat(o[l], " ").concat(l, " trước");
              break;
            }
          return c;
        }
        function j() {
          var content =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e =
              /((https|http):\/\/cellphones.com.vn)[-A-Za-z0-9+&#/%?=_|:,.]+/gm,
            n = [];
          if (content) {
            if (
              ((content = content.replace(
                /(?:\r\n|\r|\n)|(<br\s*\/?>)|(\\n)/gm,
                "$"
              )),
              e.test(content) && t)
            )
              for (var r = content.match(e), i = 0; i < r.length; i++) {
                var o = r[i];
                content = content.replace(
                  o,
                  "<a href='"
                    .concat(o, "' target='_blank' rel='noopener'>")
                    .concat(o, "</a>")
                );
              }
            n = content.split("$");
          }
          return n;
        }
        function I() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function A(t, time) {
          var e = window.scrollY,
            n = null;
          null == time && (time = 500),
            (t = +t),
            (time = +time),
            window.requestAnimationFrame(function r(o) {
              var progress = o - (n = n || o);
              e < t
                ? window.scrollTo(0, ((t - e) * progress) / time + e)
                : window.scrollTo(0, e - ((e - t) * progress) / time),
                progress < time
                  ? window.requestAnimationFrame(r)
                  : window.scrollTo(0, t);
            });
        }
        function T(title, t) {
          var e,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            o =
              (null === (e = window) ||
              void 0 === e ||
              null === (e = e.__NUXT__) ||
              void 0 === e ||
              null === (e = e.state) ||
              void 0 === e
                ? void 0
                : e.province) || null;
          o &&
            ((n = o.regionName[o.province.company_id]), (r = o.province.name)),
            setTimeout(function () {
              var e = window.dataLayer || [];
              e.push({
                event: t,
                ecommerce: {
                  items: [{ item_name: title }],
                  region_cps: n,
                  province: r,
                },
                eventModel: { value: 0 },
              }),
                console.log("DataLayer:"),
                console.log(e);
            }, 1e3);
        }
        function B(t, e) {
          e[t];
          return Object(o.a)(e, [t].map(m));
        }
        function N(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function D(t, e, n) {
          return (46 === t || 152 === t) && e > 0 && n > 0;
        }
        function M(t, e) {
          for (
            var n = [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://cellphones.com.vn/",
                    name: "CELLPHONES",
                  },
                },
              ],
              r = "".concat("https://cellphones.com.vn/"),
              o = 0,
              c = t.filter(function (t, e, n) {
                return t.level !== o && 1 !== t.level ? ((o = t.level), t) : "";
              }),
              i = 0;
            i < c.length;
            i++
          )
            (r += "".concat(0 !== i ? "/" : "").concat(c[i].uri)),
              n.push({
                "@type": "ListItem",
                position: i + 2,
                item: { "@id": "".concat(r, ".html"), name: c[i].name },
              });
          return (
            n.push({
              "@type": "ListItem",
              position: c.length + 2,
              item: {
                "@id": "https://cellphones.com.vn" + this.$route.path,
                name: e,
              },
            }),
            n
          );
        }
        function E(path, t) {
          var e = "".concat("https://cellphones.com.vn/").concat(path);
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "".concat(e, "/#webpage"),
            name: "".concat(t.h1_title),
            url: "".concat(e),
            lastReviewed: "".concat(t.updated_at || ""),
            dateCreated: "".concat(t.created_at || ""),
            inLanguage: "vi-VN",
            description: "".concat(t.meta_description),
            mainEntity: {
              "@type": "WebPage",
              mainEntityOfPage: "".concat(e),
              headline: "".concat(t.h1_title),
              description: "".concat(t.meta_description),
              keywords: "".concat(t.meta_keywords),
              datePublished: "".concat(t.created_at || ""),
              dateModified: "".concat(t.updated_at || ""),
              author: {
                "@type": "Organization",
                name: "CellphoneS",
                url: "https://cellphones.com.vn",
                image: {
                  "@type": "ImageObject",
                  url: "https://cdn2.cellphones.com.vn/200x/media/favicon/default/logo-cps.png",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "CellphoneS",
                url: "https://cellphones.com.vn",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cdn2.cellphones.com.vn/200x/media/favicon/default/logo-cps.png",
                },
              },
              image: {
                "@type": "ImageObject",
                "@id": "".concat(e, "/#webpage"),
                url: "".concat(
                  t.meta_image
                    ? "https://cdn2.cellphones.com.vn/200x/media/catalog/product" +
                        t.meta_image
                    : ""
                ),
              },
            },
            speakable: {
              "@type": "SpeakableSpecification",
              xpath: [
                "/html/head/title",
                "/html/head/meta[@name='description']/@content",
              ],
            },
          };
        }
        function R(t, path) {
          var e = [];
          if (!t.length > 0) return {};
          for (var i = 0; i < t.length; i++)
            if (Object.keys(t[i].children).length > 0) {
              var n = {
                "@type": "Question",
                name: t[i].content,
                acceptedAnswer: [],
              };
              n.acceptedAnswer.push({
                "@type": "Answer",
                text: "".concat(
                  Object.keys(t[i].children).length > 0
                    ? t[i].children[0].content
                    : " "
                ),
              }),
                e.push(n);
            }
          return e.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: e,
              }
            : {};
        }
        function $(t, path) {
          var e = [];
          if (!t.length > 0) return {};
          for (var i = 0; i < t.length; i++) {
            var n = {
              "@type": "Question",
              name: t[i].question,
              acceptedAnswer: [],
            };
            n.acceptedAnswer.push({ "@type": "Answer", text: t[i].answer }),
              e.push(n);
          }
          return e.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: e,
              }
            : {};
        }
        function L(t, e, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            d = t.general.attributes.manufacturer,
            m = t.filterable.stock_available_id,
            f = "";
          if (
            ((f =
              46 === m
                ? c || "InStock"
                : 152 === m
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !d)
          ) {
            var h,
              v = l(t.specification.basic);
            try {
              for (v.s(); !(h = v.n()).done; ) {
                var y = h.value;
                "phone_accessory_brands" === y.key && (d = y.value);
              }
            } catch (t) {
              v.e(t);
            } finally {
              v.f();
            }
          }
          var _,
            w = [],
            P = {},
            C = l(r);
          try {
            for (C.s(); !(_ = C.n()).done; ) {
              var O = _.value;
              w.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(O.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(O.customer.fullname),
                },
              });
            }
          } catch (t) {
            C.e(t);
          } finally {
            C.f();
          }
          return (
            w.length > 0 &&
              (P = {
                review: w,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "".concat(n.average_rating || 0),
                  reviewCount: "".concat(n.total_count || 0),
                },
              }),
            Object.assign(
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "".concat(t.general.name),
                image:
                  "https://cdn2.cellphones.com.vn/200x/media/catalog/product".concat(
                    e.meta_image
                  ),
                description: "".concat(e.meta_description),
                sku: "".concat(t.general.sku),
                mpn: "".concat(t.general.sku),
                brand: { "@type": "Brand", name: "".concat(d) },
                offers: {
                  "@type": "Offer",
                  url: "https://cellphones.com.vn".concat(this.$route.path),
                  priceCurrency: "VND",
                  price: "".concat(
                    (t.filterable.special_price || t.filterable.price) - o
                  ),
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/".concat(f),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              P
            )
          );
        }
        function H(t) {
          for (
            var image = t.image,
              e = t.url,
              n = t.city,
              address = t.address,
              r = t.listStore,
              o = t.googleLink,
              c = t.phone,
              l = t.googleMap,
              d = address.split(",")[0].split(" "),
              m = d.slice(1, d.length).join(" "),
              f = l.lastIndexOf(n) + n.length,
              h = l.slice(f, f + 1 + 6),
              v = [],
              i = 1;
            i < r.length;
            i++
          ) {
            var y = r[i].shop.address.split(",")[0].split(" "),
              _ = y.slice(1, y.length).join(" ");
            v.push({
              "@type": "Store",
              name: "CellphoneS ".concat(r[i].shop.address),
              url: r[i].shop.store_opening_url,
              image: r[i].shop.store_opening_images,
              telephone: r[i].shop.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: _,
                addressLocality: n,
                postalCode: h,
                addressCountry: "VN",
              },
              priceRange: "VND",
              areaServed: [n],
              geo: {
                "@type": "GeoCoordinates",
                latitude: r[i].shop.latitude,
                longitude: r[i].shop.longitude,
              },
            });
          }
          return {
            "@context": "https://schema.org",
            "@type": "Store",
            name: "CellphoneS ".concat(address),
            image: image,
            "@id": "".concat(e, "#LocalBussiness"),
            url: o,
            telephone: c,
            priceRange: "VND",
            address: {
              "@type": "PostalAddress",
              streetAddress: m,
              addressLocality: n,
              postalCode: h,
              addressCountry: "VN",
            },
            areaServed: [n],
            geo: {
              "@type": "GeoCoordinates",
              latitude: r[0].shop.latitude,
              longitude: r[0].shop.longitude,
            },
            department: v,
          };
        }
        function V(t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 50,
            r = (
              null === (e = document) || void 0 === e
                ? void 0
                : e.getElementById("cpsHeader")
            ).offsetHeight,
            o =
              document.querySelector("#".concat(t)).getBoundingClientRect()
                .top + window.scrollY;
          window.scrollTo({ top: o - n - r, behavior: "smooth" });
        }
        function z(t) {
          var e = (null == t ? void 0 : t.split(" ")) || [];
          if (e.length) return e[e.length - 1];
        }
        function G(t) {
          return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t =
            (t = (t = (t = (t = (t = (t = (t = t.replace(
              /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
              "a"
            )).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(
              /ì|í|ị|ỉ|ĩ/g,
              "i"
            )).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(
              /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
              "u"
            )).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(
              /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,
              "A"
            )).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(
            /Ì|Í|Ị|Ỉ|Ĩ/g,
            "I"
          )).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(
            /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,
            "U"
          )).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(
            /\u0300|\u0301|\u0303|\u0309|\u0323/g,
            ""
          )).replace(/\u02C6|\u0306|\u031B/g, "")).replace(
            / + /g,
            " "
          )).trim()).replace(
            /!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            " "
          ));
        }
        function F() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === e || (U(t) <= n && n <= U(e));
        }
        function U(t) {
          return "string" == typeof t && "" !== t
            ? new Date(t.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function W(t) {
          t
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function Y(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 100;
          return this.$img.getImage(t, {
            provider: "CPS_IMG_PROVIDER",
            modifiers: { format: "webp", width: e, height: n, quality: r },
          }).url;
        }
        function K() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "login";
          if (window) {
            var n = { path: "/", domain: "cellphones.com.vn" };
            this.$cookies.remove("token", n),
              this.$cookies.remove("USER", n),
              (window.location =
                "login" === e
                  ? ""
                      .concat("https://account.cellphones.com.vn/")
                      .concat(t ? "?redirect_uri=" + t : "")
                  : ""
                      .concat("https://account.cellphones.com.vn/", "register")
                      .concat(t ? "?redirect_uri=" + t : ""));
          }
        }
        function Q(text) {
          return (function (text) {
            return text.replace(/(^|\s)\S/g, function (t) {
              return t.toUpperCase();
            });
          })(text);
        }
      }.call(this, n(93)));
    },
    500: function (t, e, n) {
      "use strict";
      var r = n(28),
        o = n(292),
        c = TypeError;
      t.exports = function (t) {
        if ((r(this), "string" === t || "default" === t)) t = "string";
        else if ("number" !== t) throw c("Incorrect hint");
        return o(this, t);
      };
    },
    501: function (t, e, n) {
      "use strict";
      var r = n(3),
        o = n(7),
        c = n(65),
        l = n(291),
        d = n(200),
        m = n(4),
        f = RangeError,
        h = String,
        v = Math.floor,
        y = o(d),
        _ = o("".slice),
        w = o((1).toFixed),
        P = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
            ? P(t, e - 1, n * t)
            : P(t * t, e / 2, n);
        },
        C = function (data, t, e) {
          for (var n = -1, r = e; ++n < 6; )
            (r += t * data[n]), (data[n] = r % 1e7), (r = v(r / 1e7));
        },
        O = function (data, t) {
          for (var e = 6, n = 0; --e >= 0; )
            (n += data[e]), (data[e] = v(n / t)), (n = (n % t) * 1e7);
        },
        x = function (data) {
          for (var t = 6, s = ""; --t >= 0; )
            if ("" !== s || 0 === t || 0 !== data[t]) {
              var e = h(data[t]);
              s = "" === s ? e : s + y("0", 7 - e.length) + e;
            }
          return s;
        };
      r(
        {
          target: "Number",
          proto: !0,
          forced:
            m(function () {
              return (
                "0.000" !== w(8e-5, 3) ||
                "1" !== w(0.9, 0) ||
                "1.25" !== w(1.255, 2) ||
                "1000000000000000128" !== w(0xde0b6b3a7640080, 0)
              );
            }) ||
            !m(function () {
              w({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              n,
              r,
              o,
              d = l(this),
              m = c(t),
              data = [0, 0, 0, 0, 0, 0],
              v = "",
              w = "0";
            if (m < 0 || m > 20) throw f("Incorrect fraction digits");
            if (d != d) return "NaN";
            if (d <= -1e21 || d >= 1e21) return h(d);
            if ((d < 0 && ((v = "-"), (d = -d)), d > 1e-21))
              if (
                ((n =
                  (e =
                    (function (t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(d * P(2, 69, 1)) - 69) < 0
                    ? d * P(2, -e, 1)
                    : d / P(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (C(data, 0, n), r = m; r >= 7; ) C(data, 1e7, 0), (r -= 7);
                for (C(data, P(10, r, 1), 0), r = e - 1; r >= 23; )
                  O(data, 1 << 23), (r -= 23);
                O(data, 1 << r), C(data, 1, 1), O(data, 2), (w = x(data));
              } else
                C(data, 0, n), C(data, 1 << -e, 0), (w = x(data) + y("0", m));
            return (w =
              m > 0
                ? v +
                  ((o = w.length) <= m
                    ? "0." + y("0", m - o) + w
                    : _(w, 0, o - m) + "." + _(w, o - m))
                : v + w);
          },
        }
      );
    },
    502: function (t, e, n) {
      "use strict";
      var r = n(201),
        o = n(293);
      r("toPrimitive"), o();
    },
    503: function (t, e, n) {
      "use strict";
      var r = n(26),
        o = n(39),
        c = n(500),
        l = n(13)("toPrimitive"),
        d = Date.prototype;
      r(d, l) || o(d, l, c);
    },
    504: function (t, e, n) {
      "use strict";
      function r(source, t) {
        if (null == source) return {};
        var e,
          i,
          n = (function (source, t) {
            if (null == source) return {};
            var e,
              i,
              n = {},
              r = Object.keys(source);
            for (i = 0; i < r.length; i++)
              (e = r[i]), t.indexOf(e) >= 0 || (n[e] = source[e]);
            return n;
          })(source, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(source);
          for (i = 0; i < r.length; i++)
            (e = r[i]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, e) &&
                  (n[e] = source[e]));
        }
        return n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    560: function (t, e, n) {
      t.exports = {};
    },
    597: function (t, e, n) {
      "use strict";
      n(560);
    },
  },
]);
