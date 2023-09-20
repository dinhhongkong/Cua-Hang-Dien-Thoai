(window.webpackJsonp = window.webpackJsonp || []).push([
  [345],
  {
    1173: function (e, t, r) {
      "use strict";
      r.r(t);
      r(17), r(24), r(18), r(5), r(30), r(11), r(31);
      var c = r(6),
        n = (r(131), r(15)),
        o = r(499);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          t &&
            (c = c.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, c);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                Object(c.a)(e, t, r[t]);
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
      var d = {
          name: "TradePriceTabs",
          props: {
            price: { type: Number, default: 0 },
            specialPrice: { type: Number, default: 0 },
          },
          computed: f(
            f(
              f(
                {},
                Object(n.d)("pdp-trade", [
                  "tabActive",
                  "hasTradePromo",
                  "tradePromoValue",
                ])
              ),
              Object(n.d)("product", ["selectColorId"])
            ),
            {},
            {
              tradeFinalPrice: function () {
                return this.specialPrice > 0
                  ? this.specialPrice - this.tradePromoValue
                  : this.price - this.tradePromoValue;
              },
            }
          ),
          methods: f(
            f({}, Object(n.c)("pdp-trade", ["setTabActive"])),
            {},
            { formatMoney: o.r }
          ),
        },
        v = (r(594), r(42)),
        component = Object(v.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return e.hasTradePromo
              ? t("div", { attrs: { id: "trade-price-tabs" } }, [
                  t(
                    "div",
                    {
                      staticClass: "tpt-wrapper is-flex is-align-items-center",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "tpt-boxs is-flex is-flex-wrap-nowrap is-justify-content-space-between is-fullwidth",
                        },
                        [
                          t(
                            "div",
                            {
                              staticClass:
                                "tpt-box trade-price-box is-flex is-flex-wrap-nowrap is-justify-content-center is-align-items-center",
                              class: { active: 2 === e.tabActive },
                              on: {
                                click: function (t) {
                                  return e.setTabActive(2);
                                },
                              },
                            },
                            [
                              t("p", { staticClass: "tpt---sale-price" }, [
                                e._v(
                                  e._s(e.formatMoney(e.tradeFinalPrice)) + "đ"
                                ),
                                t("br"),
                                t("span", [e._v("Khi thu cũ lên đời")]),
                              ]),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "div",
                            {
                              staticClass:
                                "tpt-box has-text-centered is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-center is-align-items-center",
                              class: { active: 1 === e.tabActive },
                              on: {
                                click: function (t) {
                                  return e.setTabActive(1);
                                },
                              },
                            },
                            [
                              t("p", { staticClass: "tpt---sale-price" }, [
                                e._v(
                                  e._s(
                                    e.specialPrice > 0
                                      ? e.formatMoney(e.specialPrice)
                                      : e.formatMoney(e.price)
                                  ) + "đ"
                                ),
                              ]),
                              e._v(" "),
                              e.specialPrice > 0
                                ? t("p", { staticClass: "tpt---price" }, [
                                    e._v(e._s(e.formatMoney(e.price)) + "đ"),
                                  ])
                                : e._e(),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ])
              : t("div", { attrs: { id: "trade-price-tabs" } }, [
                  t("div", {
                    staticClass: "tpt-wrapper is-flex is-align-items-center",
                  }),
                ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    557: function (e, t, r) {
      e.exports = {};
    },
    594: function (e, t, r) {
      "use strict";
      r(557);
    },
  },
]);
