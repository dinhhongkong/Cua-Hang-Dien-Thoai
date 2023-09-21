(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    1168: function (t, e, r) {
      "use strict";
      r.r(e);
      r(131), r(48);
      var c = r(499),
        n = {
          name: "BoxPrice",
          components: { RenderHtml: r(204).default },
          props: {
            price: { type: Number, default: 0 },
            specialPrice: { type: Number, default: 0 },
            hcInstall: { type: Boolean, default: !1 },
            warrantyOldProduct: { type: String, default: "" },
            isShowDiscountPercent: { type: Boolean, default: !1 },
            isOld: { type: Boolean, default: !1 },
            isHidePrice: {
              type: Object,
              default: function () {
                return { status: !1, letters: 0 };
              },
            },
            stockAvailable: { type: Number, default: 46 },
            titlePrice: { type: String, default: "" },
          },
          computed: {
            warranty: function () {
              return [
                "cũ đẹp",
                "trầy xước",
                "xước cấn",
                "đổi bảo hành",
              ].includes(this.warrantyOldProduct.toLowerCase())
                ? '<div class="old-product-warranty-tag p-1">Bảo hành 6 tháng</div>\n                <div class="old-product-warranty-tag p-1">Đổi trả 30 ngày</div>'
                : ["đã kích hoạt", "hàng trưng bày"].includes(
                    this.warrantyOldProduct.toLowerCase()
                  )
                ? '<div class="old-product-warranty-tag p-1">Bảo hành 12 tháng</div>\n                <div class="old-product-warranty-tag p-1">Đổi trả 30 ngày</div>'
                : "";
            },
          },
          methods: {
            formatMoney: c.r,
            productPercentSale: c.x,
            getShowPrice: c.s,
            hidePrice: c.u,
          },
        },
        o = (r(589), r(42)),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "block-box-price" },
              [
                t.hcInstall
                  ? e("div", { staticClass: "box-info__installment" }, [
                      t._v("Trả góp 0%"),
                    ])
                  : t._e(),
                t._v(" "),
                t.warrantyOldProduct
                  ? e("RenderHtml", {
                      staticClass: "is-flex mb-3 box-old-product-warranty",
                      attrs: { html: t.warranty },
                    })
                  : t._e(),
                t._v(" "),
                e(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: 56 === t.stockAvailable,
                        expression: "stockAvailable===56",
                      },
                    ],
                    staticClass: "title-price",
                  },
                  [
                    t._v(
                      "\n            " + t._s(t.titlePrice) + ":\n          "
                    ),
                  ]
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "box-info__box-price" },
                  [
                    t.getShowPrice(t.price, t.specialPrice) > 0
                      ? e("p", { staticClass: "product__price--show" }, [
                          t._v(
                            "\n      " +
                              t._s(
                                t.isHidePrice.status
                                  ? t.hidePrice(
                                      t.formatMoney(
                                        t.getShowPrice(t.price, t.specialPrice)
                                      ),
                                      t.isHidePrice.letters
                                    )
                                  : t.formatMoney(
                                      t.getShowPrice(t.price, t.specialPrice)
                                    )
                              ) +
                              "₫\n    "
                          ),
                        ])
                      : e("p", { staticClass: "product__price--show" }, [
                          t._v("\n      Giá Liên Hệ\n    "),
                        ]),
                    t._v(" "),
                    t.specialPrice !== t.price && t.specialPrice > 0 && t.price
                      ? [
                          t.isOld
                            ? t._e()
                            : e(
                                "p",
                                { staticClass: "product__price--through" },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(t.formatMoney(t.price)) +
                                      "₫\n      "
                                  ),
                                ]
                              ),
                          t._v(" "),
                          t.isShowDiscountPercent
                            ? e(
                                "div",
                                { staticClass: "product__price--percent" },
                                [
                                  e(
                                    "p",
                                    {
                                      staticClass:
                                        "product__price--percent-detail",
                                    },
                                    [
                                      t._v(
                                        "\n          Giảm " +
                                          t._s(
                                            t.productPercentSale(
                                              t.price,
                                              t.specialPrice
                                            )
                                          ) +
                                          "%\n        "
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                        ]
                      : t._e(),
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
      e.default = component.exports;
    },
    552: function (t, e, r) {
      t.exports = {};
    },
    589: function (t, e, r) {
      "use strict";
      r(552);
    },
  },
]);
