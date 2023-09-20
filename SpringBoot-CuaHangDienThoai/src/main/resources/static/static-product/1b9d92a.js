(window.webpackJsonp = window.webpackJsonp || []).push([
  [26, 156, 168, 215, 220],
  {
    500: function (t, e, r) {
      "use strict";
      var o = r(28),
        n = r(292),
        c = TypeError;
      t.exports = function (t) {
        if ((o(this), "string" === t || "default" === t)) t = "string";
        else if ("number" !== t) throw c("Incorrect hint");
        return n(this, t);
      };
    },
    501: function (t, e, r) {
      "use strict";
      var o = r(3),
        n = r(7),
        c = r(65),
        l = r(291),
        d = r(200),
        m = r(4),
        h = RangeError,
        f = String,
        v = Math.floor,
        P = n(d),
        w = n("".slice),
        y = n((1).toFixed),
        _ = function (t, e, r) {
          return 0 === e
            ? r
            : e % 2 == 1
            ? _(t, e - 1, r * t)
            : _(t * t, e / 2, r);
        },
        O = function (data, t, e) {
          for (var r = -1, o = e; ++r < 6; )
            (o += t * data[r]), (data[r] = o % 1e7), (o = v(o / 1e7));
        },
        x = function (data, t) {
          for (var e = 6, r = 0; --e >= 0; )
            (r += data[e]), (data[e] = v(r / t)), (r = (r % t) * 1e7);
        },
        k = function (data) {
          for (var t = 6, s = ""; --t >= 0; )
            if ("" !== s || 0 === t || 0 !== data[t]) {
              var e = f(data[t]);
              s = "" === s ? e : s + P("0", 7 - e.length) + e;
            }
          return s;
        };
      o(
        {
          target: "Number",
          proto: !0,
          forced:
            m(function () {
              return (
                "0.000" !== y(8e-5, 3) ||
                "1" !== y(0.9, 0) ||
                "1.25" !== y(1.255, 2) ||
                "1000000000000000128" !== y(0xde0b6b3a7640080, 0)
              );
            }) ||
            !m(function () {
              y({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              r,
              o,
              n,
              d = l(this),
              m = c(t),
              data = [0, 0, 0, 0, 0, 0],
              v = "",
              y = "0";
            if (m < 0 || m > 20) throw h("Incorrect fraction digits");
            if (d != d) return "NaN";
            if (d <= -1e21 || d >= 1e21) return f(d);
            if ((d < 0 && ((v = "-"), (d = -d)), d > 1e-21))
              if (
                ((r =
                  (e =
                    (function (t) {
                      for (var e = 0, r = t; r >= 4096; )
                        (e += 12), (r /= 4096);
                      for (; r >= 2; ) (e += 1), (r /= 2);
                      return e;
                    })(d * _(2, 69, 1)) - 69) < 0
                    ? d * _(2, -e, 1)
                    : d / _(2, e, 1)),
                (r *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (O(data, 0, r), o = m; o >= 7; ) O(data, 1e7, 0), (o -= 7);
                for (O(data, _(10, o, 1), 0), o = e - 1; o >= 23; )
                  x(data, 1 << 23), (o -= 23);
                x(data, 1 << o), O(data, 1, 1), x(data, 2), (y = k(data));
              } else
                O(data, 0, r), O(data, 1 << -e, 0), (y = k(data) + P("0", m));
            return (y =
              m > 0
                ? v +
                  ((n = y.length) <= m
                    ? "0." + P("0", m - n) + y
                    : w(y, 0, n - m) + "." + w(y, n - m))
                : v + y);
          },
        }
      );
    },
    502: function (t, e, r) {
      "use strict";
      var o = r(201),
        n = r(293);
      o("toPrimitive"), n();
    },
    503: function (t, e, r) {
      "use strict";
      var o = r(26),
        n = r(39),
        c = r(500),
        l = r(13)("toPrimitive"),
        d = Date.prototype;
      o(d, l) || n(d, l, c);
    },
    504: function (t, e, r) {
      "use strict";
      function o(source, t) {
        if (null == source) return {};
        var e,
          i,
          r = (function (source, t) {
            if (null == source) return {};
            var e,
              i,
              r = {},
              o = Object.keys(source);
            for (i = 0; i < o.length; i++)
              (e = o[i]), t.indexOf(e) >= 0 || (r[e] = source[e]);
            return r;
          })(source, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(source);
          for (i = 0; i < o.length; i++)
            (e = o[i]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, e) &&
                  (r[e] = source[e]));
        }
        return r;
      }
      r.d(e, "a", function () {
        return o;
      });
    },
    505: function (t, e, r) {
      t.exports = {};
    },
    506: function (t, e, r) {
      "use strict";
      r(505);
    },
    507: function (t, e, r) {
      "use strict";
      r.r(e);
      r(131);
      var o = {
          props: {
            id: { type: Number, default: 0 },
            keySellingPoints: { type: String, default: "" },
            content: { type: String, default: "" },
            showAll: { type: Boolean, default: !1 },
          },
          data: function () {
            return { showMoreBtn: !0 };
          },
          mounted: function () {
            var t;
            ((null === (t = this.content) || void 0 === t ? void 0 : t.length) <
              2e3 ||
              this.showAll) &&
              (this.showMoreBtn = !1);
          },
          methods: {
            handleShowMore: function () {
              this.showMoreBtn = !1;
            },
          },
        },
        n = (r(506), r(42)),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "cps-block-content",
                style: t.showMoreBtn ? "" : { "max-height": "100000px" },
              },
              [
                t.keySellingPoints
                  ? e(
                      "div",
                      { staticClass: "ksp-content p-2 mb-2" },
                      [
                        e(
                          "h2",
                          { staticClass: "ksp-title has-text-centered" },
                          [t._v("ĐẶC ĐIỂM NỔI BẬT")]
                        ),
                        t._v(" "),
                        e("RenderHtml", {
                          attrs: { html: t.keySellingPoints },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                e("RenderHtml", { attrs: { html: t.content } }),
                t._v(" "),
                e(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showMoreBtn,
                        expression: "showMoreBtn",
                      },
                    ],
                    staticClass: "cps-block-content_btn-showmore",
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "btn-show-more button__content-show-more",
                        on: { click: t.handleShowMore },
                      },
                      [
                        t._v("\n      Xem thêm  "),
                        e("RenderHtml", {
                          attrs: { html: t.$icons().ChevronDown },
                        }),
                      ],
                      1
                    ),
                  ]
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
    509: function (t, e, r) {
      t.exports = {};
    },
    510: function (t, e, r) {
      "use strict";
      r(509);
    },
    511: function (t, e, r) {
      "use strict";
      r.r(e);
      r(48), r(77), r(17), r(24), r(18), r(30), r(11), r(31);
      var o = r(0),
        n = r(6),
        c = (r(8), r(5), r(33), r(36), r(131), r(52), r(34), r(47), r(15)),
        l = r(203);
      function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(r), !0).forEach(function (e) {
                Object(n.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "HotSale",
          components: {
            PlaceHolderProductList: function () {
              return r.e(29).then(r.bind(null, 1366));
            },
            ProductList: function () {
              return Promise.all([r.e(1), r.e(15)]).then(r.bind(null, 1181));
            },
          },
          props: {
            listProduct: {
              type: Object,
              default: function () {
                return {};
              },
            },
            hasBoxCountDown: { type: Boolean, default: !0 },
            showDiscountPercent: { type: Boolean, default: !0 },
            itemPerColumn: { type: Number, default: 1 },
            replacePrice: { type: String, default: "" },
            showRating: { type: Boolean, default: !0 },
            showTradePrice: { type: Boolean, default: !1 },
            isHidePromotion: { type: Boolean, default: !0 },
            isShowMore: { type: Boolean, default: !1 },
            isRegister: { type: Boolean, default: !1 },
            linkShowMore: { type: String, default: "#" },
            showMoreText: { type: String, default: "Xem tất cả sản phẩm" },
            appleWeek: { type: Boolean, default: !1 },
            textNote: { type: String, default: "" },
            showSticker: { type: Boolean, default: !0 },
            isHidePrice: {
              type: Object,
              default: function () {
                return { status: !1, letters: 0 };
              },
            },
            optionSwiper: {
              type: Object,
              default: function () {
                return {
                  slidesPerView: 5,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                  slidesPerColumn: 1,
                  slidesPerColumnFill: "row",
                  loop: !1,
                  autoplay: { delay: 5e3, pauseOnMouseEnter: !0 },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    20: { slidesPerView: 2 },
                    717: { slidesPerView: 3.4 },
                    768: { slidesPerView: 3 },
                    990: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                  },
                };
              },
            },
            isTradeInType: { type: Boolean, default: !1 },
            isAutoplay: { type: Boolean, default: !0 },
            pushViewList: { type: Boolean, default: !1 },
            sortProductList: { type: String, default: "view: desc" },
          },
          data: function () {
            return {
              placeholder:
                "https://cdn2.cellphones.com.vn/200x50/media/wysiwyg/placehoder.png",
              loading: !0,
              ratingData: {},
              titleImage: "",
              timer: "",
              end: 0,
              start: 0,
              appear: 0,
              interval: 0,
              timeGroup: {},
              days: "",
              minutes: "",
              hours: "",
              seconds: "",
              statusType: "",
              message: "",
              activeGroup: 0,
              selectedListProduct: "",
              timeCallApi: 0,
              dataProducts: {},
              disableTab: [],
              disableHotsale: !0,
              loadingHotSale: !1,
              optionNoneAutoplay: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 10,
                slidesPerColumn: this.itemPerColumn,
                slidesPerColumnFill: "row",
                loop: !1,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  20: { slidesPerView: 2 },
                  717: { slidesPerView: 3.4 },
                  768: { slidesPerView: 3 },
                  990: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                },
              },
            };
          },
          computed: m(
            m(
              m(
                m(
                  {},
                  Object(c.d)("product", [
                    "productListGroup",
                    "infoGroupHotsale",
                    "listPriceGroupHotsale",
                    "listReviewData",
                  ])
                ),
                Object(c.d)("pdp-trade", ["productTradePromotions"])
              ),
              Object(c.d)("province", ["province"])
            ),
            {},
            {
              listProductLength: function () {
                return Object.keys(this.listProduct.listGroup).length;
              },
            }
          ),
          created: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.checkActive();
                      case 2:
                        t.hasBoxCountDown &&
                          (t.interval = setInterval(function () {
                            t.timerCount(t.start, t.end, t.appear);
                          }, 1e3)),
                          Object.keys(t.productListGroup).length > 0
                            ? (t.dataProducts = t.productListGroup)
                            : (t.disableHotsale = !0),
                          (t.titleImage = t.$device.isDesktop
                            ? t.listProduct.titleDesktop
                            : t.listProduct.titleMobile);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          mounted: function () {
            Object.keys(this.productListGroup).length > 0 &&
              this.pushViewList &&
              this.$emit(
                "emitCall",
                this.dataProducts[Object.keys(this.dataProducts)]
              );
          },
          methods: m(
            m({}, Object(c.b)("product", ["getProductsByGroupNameGraph"])),
            {},
            {
              timerCount: function (t, e, r) {
                var n = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function o() {
                    var c, l, d, m, h;
                    return regeneratorRuntime.wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              ((c = new Date().getTime()),
                              (l = e - c),
                              (m = r - c),
                              (d = t - c) < 0 && l < 0
                                ? ((n.statusType = "expired"),
                                  clearInterval(n.interval))
                                : d > 0 && l > 0 && m > 0
                                ? (n.statusType = "disappear")
                                : d < 0 && l > 0
                                ? (n.calcTime(l),
                                  (n.statusType = "running"),
                                  (n.message = "Kết thúc sau:"))
                                : d > 0 &&
                                  l > 0 &&
                                  (n.calcTime(d),
                                  (n.statusType = "upcoming"),
                                  (n.message = "Bắt đầu sau:")),
                              n.statusHotSale(n.statusType) ||
                                !(
                                  n.activeGroup <
                                  Object.keys(n.listProduct.listGroup).length
                                ))
                            ) {
                              o.next = 9;
                              break;
                            }
                            return (
                              n.disableTab.push(n.activeGroup),
                              (o.next = 9),
                              n.setActive(
                                (null === (h = parseInt(n.activeGroup) + 1) ||
                                void 0 === h
                                  ? void 0
                                  : h.toString()) || "0"
                              )
                            );
                          case 9:
                            Object.keys(n.listProduct.listGroup).length ===
                              n.disableTab.length && (n.disableHotsale = !0);
                          case 10:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  })
                )();
              },
              calcTime: function (t) {
                (this.days = Math.floor(t / 864e5)),
                  (this.hours = Math.floor((t % 864e5) / 36e5)),
                  (this.minutes = Math.floor((t % 36e5) / 6e4)),
                  (this.seconds = Math.floor((t % 6e4) / 1e3));
              },
              setActive: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, n, c, l, d;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              (e.switchLoading(!0),
                              (e.activeGroup = t),
                              (n =
                                null === (o = e.listProduct.listGroup[t]) ||
                                void 0 === o
                                  ? void 0
                                  : o.groupUd),
                              e.$emit("selected-ud", n),
                              (e.selectedListProduct = n),
                              Object.keys(e.productListGroup).includes(n) ||
                                !(e.timeCallApi < e.listProductLength))
                            ) {
                              r.next = 11;
                              break;
                            }
                            return (
                              (e.loading = !0),
                              e.timeCallApi++,
                              (r.next = 10),
                              e.getProductsByGroupNameGraph({
                                ud: n,
                                isGetRating: e.showRating,
                                isGetTrade: e.showTradePrice,
                                sort: e.sortProductList,
                              })
                            );
                          case 10:
                            e.dataProducts = e.productListGroup;
                          case 11:
                            if (
                              !e.hasBoxCountDown ||
                              !e.infoGroupHotsale[e.selectedListProduct]
                            ) {
                              r.next = 18;
                              break;
                            }
                            return (
                              e.timeGroup[e.selectedListProduct] ||
                                ((e.timeGroup[e.selectedListProduct] = {}),
                                (e.timeGroup[e.selectedListProduct].end =
                                  new Date(
                                    e.infoGroupHotsale[
                                      e.selectedListProduct
                                    ].to_date
                                  ).getTime()),
                                (e.timeGroup[e.selectedListProduct].start =
                                  new Date(
                                    e.infoGroupHotsale[
                                      e.selectedListProduct
                                    ].from_date
                                  ).getTime()),
                                (e.timeGroup[e.selectedListProduct].appear =
                                  new Date(
                                    e.infoGroupHotsale[
                                      e.selectedListProduct
                                    ].start_countdown_time
                                  ).getTime())),
                              (e.end =
                                null ===
                                  (c = e.timeGroup[e.selectedListProduct]) ||
                                void 0 === c
                                  ? void 0
                                  : c.end),
                              (e.start =
                                null ===
                                  (l = e.timeGroup[e.selectedListProduct]) ||
                                void 0 === l
                                  ? void 0
                                  : l.start),
                              (e.appear =
                                null ===
                                  (d = e.timeGroup[e.selectedListProduct]) ||
                                void 0 === d
                                  ? void 0
                                  : d.appear),
                              (r.next = 18),
                              e.timerCount(e.start, e.end, e.appear)
                            );
                          case 18:
                            (e.loading = !1), e.switchLoading(!1);
                          case 20:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              formatTime: function (t) {
                return ("0" + t).slice(-2);
              },
              statusHotSale: function (t) {
                return "expired" !== t && "disappear" !== t;
              },
              checkActive: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.hasBoxCountDown) {
                              e.next = 14;
                              break;
                            }
                            e.t0 = regeneratorRuntime.keys(
                              t.listProduct.listGroup
                            );
                          case 2:
                            if ((e.t1 = e.t0()).done) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (r = e.t1.value), (e.next = 6), t.setActive(r)
                            );
                          case 6:
                            if (!t.statusHotSale(t.statusType)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (t.disableHotsale = !1),
                              (t.interval = setInterval(function () {
                                t.timerCount(t.start, t.end, t.appear);
                              }, 1e3)),
                              e.abrupt("break", 12)
                            );
                          case 10:
                            e.next = 2;
                            break;
                          case 12:
                            e.next = 17;
                            break;
                          case 14:
                            return (e.next = 16), t.setActive("0");
                          case 16:
                            t.disableHotsale = !1;
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              switchLoading: function (t) {
                this.loadingHotSale = t;
              },
              addDataLayer: function (t) {
                Object(l.e)({
                  productList: t,
                  regionName:
                    12869 === this.province.company_id
                      ? "Miền Nam_7"
                      : "Miền Bắc_1",
                  provinceId: this.province.id,
                });
              },
            }
          ),
        },
        f = (r(510), r(42)),
        component = Object(f.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return t.disableHotsale
              ? 0 !== t.appear
                ? e(
                    "div",
                    {
                      staticClass: "block-hot-sale",
                      style: {
                        background: t.listProduct.background_image
                          ? "url('".concat(
                              t.listProduct.background_image,
                              "') no-repeat"
                            )
                          : "linear-gradient(to bottom," +
                            t.listProduct.colorTop +
                            "," +
                            t.listProduct.colorBot +
                            ")",
                        "background-size": "cover",
                      },
                    },
                    [
                      e("PlaceHolderProductList", {
                        attrs: {
                          "title-height": 20,
                          "number-of-line": t.itemPerColumn,
                          "number-of-product": 5,
                        },
                      }),
                    ],
                    1
                  )
                : t._e()
              : e(
                  "div",
                  {
                    staticClass: "block-hot-sale",
                    style: {
                      background: t.listProduct.background_image
                        ? "url('".concat(
                            t.listProduct.background_image,
                            "') no-repeat"
                          )
                        : "linear-gradient(to bottom," +
                          t.listProduct.colorTop +
                          "," +
                          t.listProduct.colorBot +
                          ")",
                      "background-size": "cover",
                    },
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "box-title",
                        class: { "mobile-title": !t.$device.isDesktop },
                      },
                      [
                        t.listProductLength > 1
                          ? e(
                              "div",
                              { staticClass: "box-tab-menu" },
                              t._l(t.listProduct.listGroup, function (r, o) {
                                return e(
                                  "p",
                                  {
                                    key: o,
                                    staticClass:
                                      "box-tab-item button__select-tab",
                                    class: {
                                      active: o === t.activeGroup,
                                      deactive:
                                        t.disableTab.includes(o) ||
                                        t.loadingHotSale,
                                    },
                                    style: {
                                      "background-color":
                                        o === t.activeGroup
                                          ? t.listProduct.color_theme
                                          : "",
                                      color:
                                        o !== t.activeGroup
                                          ? t.listProduct.color_theme
                                          : "",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.setActive(o);
                                      },
                                    },
                                  },
                                  [t._v("\n        " + t._s(r.groupTitle))]
                                );
                              }),
                              0
                            )
                          : t._e(),
                        t._v(" "),
                        e("RenderHtml", {
                          staticClass: "title-image",
                          class: t.hasBoxCountDown || "full",
                          attrs: { html: t.titleImage },
                        }),
                        t._v(" "),
                        t.hasBoxCountDown
                          ? e("div", { staticClass: "box-countdown" }, [
                              e(
                                "p",
                                {
                                  staticClass: "title",
                                  style: {
                                    color: t.listProduct.color_theme || "",
                                  },
                                },
                                [t._v(t._s(t.message) + " ")]
                              ),
                              t._v(" "),
                              e("ul", { staticClass: "box-time" }, [
                                e(
                                  "li",
                                  {
                                    style: {
                                      color: t.listProduct.color_theme || "",
                                    },
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "time",
                                        style: {
                                          color:
                                            t.listProduct.color_theme || "",
                                        },
                                      },
                                      [t._v(t._s(t.formatTime(t.days)))]
                                    ),
                                    t._v(" "),
                                    e("p", { staticClass: "separate" }, [
                                      t._v(":"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  {
                                    style: {
                                      color: t.listProduct.color_theme || "",
                                    },
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "time",
                                        style: {
                                          color:
                                            t.listProduct.color_theme || "",
                                        },
                                      },
                                      [t._v(t._s(t.formatTime(t.hours)))]
                                    ),
                                    t._v(" "),
                                    e("p", { staticClass: "separate" }, [
                                      t._v(":"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  {
                                    style: {
                                      color: t.listProduct.color_theme || "",
                                    },
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "time",
                                        style: {
                                          color:
                                            t.listProduct.color_theme || "",
                                        },
                                      },
                                      [t._v(t._s(t.formatTime(t.minutes)))]
                                    ),
                                    t._v(" "),
                                    e("p", { staticClass: "separate" }, [
                                      t._v(":"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "li",
                                  {
                                    style: {
                                      color: t.listProduct.color_theme || "",
                                    },
                                  },
                                  [
                                    e(
                                      "p",
                                      {
                                        staticClass: "time",
                                        style: {
                                          color:
                                            t.listProduct.color_theme || "",
                                        },
                                      },
                                      [t._v(t._s(t.formatTime(t.seconds)))]
                                    ),
                                    t._v(" "),
                                    e("p", {
                                      staticClass: "separate",
                                      staticStyle: { margin: "unset" },
                                    }),
                                  ]
                                ),
                              ]),
                            ])
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    t.textNote
                      ? e("span", { staticClass: "text-note" }, [
                          t._v(t._s(t.textNote)),
                        ])
                      : t._e(),
                    t._v(" "),
                    Object.keys(t.dataProducts).length > 0
                      ? e(
                          "div",
                          { staticClass: "box-content" },
                          [
                            t._l(t.dataProducts, function (r, o) {
                              var n;
                              return e("ProductList", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.selectedListProduct === o,
                                    expression: "selectedListProduct === key",
                                  },
                                ],
                                key: o,
                                attrs: {
                                  ud: o,
                                  "custom-box-promo-price":
                                    (null ===
                                      (n =
                                        t.listProduct.listGroup[
                                          t.activeGroup
                                        ]) || void 0 === n
                                      ? void 0
                                      : n.customBoxPromoPrice) || {},
                                  "item-per-column": t.itemPerColumn,
                                  "list-product": r,
                                  "is-show-discount-percent":
                                    t.showDiscountPercent,
                                  "list-review":
                                    t.listReviewData[
                                      "".concat(t.selectedListProduct)
                                    ],
                                  "is-hide-promotion": t.isHidePromotion,
                                  "is-hide-promotion-hotsale": !1,
                                  "show-sticker": t.showSticker,
                                  "is-hide-price": t.isHidePrice,
                                  "is-register": t.isRegister,
                                  "replace-price": t.replacePrice,
                                  "list-trade-promotion":
                                    t.productTradePromotions[
                                      "".concat(t.selectedListProduct)
                                    ],
                                  "is-trade-in-type": t.isTradeInType,
                                  "option-swiper": t.isAutoplay
                                    ? t.optionSwiper
                                    : t.optionNoneAutoplay,
                                  "tracking-itm": "",
                                },
                                on: { emitCall: t.addDataLayer },
                              });
                            }),
                            t._v(" "),
                            e(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.loading,
                                    expression: "loading",
                                  },
                                ],
                              },
                              [
                                e("p", { staticClass: "loading-text" }, [
                                  t._v("Đang tải ..."),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            t.isShowMore
                              ? e("div", { staticClass: "show-more" }, [
                                  e(
                                    "a",
                                    t._b(
                                      {
                                        staticClass: "btn-show-more",
                                        attrs: {
                                          target: "_blank",
                                          rel: "noopener",
                                        },
                                      },
                                      "a",
                                      { href: t.linkShowMore },
                                      !1
                                    ),
                                    [t._v(t._s(t.showMoreText))]
                                  ),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.listProduct.listGroup[t.activeGroup] &&
                            t.listProduct.listGroup[t.activeGroup].extendUrl
                              ? e(
                                  "a",
                                  t._b(
                                    {
                                      staticClass:
                                        "extend-url has-text-centered",
                                      attrs: { target: "_blank" },
                                    },
                                    "a",
                                    {
                                      href: "".concat(
                                        t.listProduct.listGroup[t.activeGroup]
                                          .extendUrl
                                      ),
                                    },
                                    !1
                                  ),
                                  [t._v("Xem thêm sản phẩm\n    ")]
                                )
                              : t._e(),
                          ],
                          2
                        )
                      : t._e(),
                  ]
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
    565: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(6),
        n = r(0),
        c =
          (r(8),
          r(5),
          r(33),
          r(36),
          r(47),
          r(17),
          r(24),
          r(18),
          r(30),
          r(11),
          r(31),
          r(15)),
        l = r(499);
      function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "PageDetail",
          components: {
            HotSale: function () {
              return Promise.resolve().then(r.bind(null, 511));
            },
            Content: function () {
              return Promise.resolve().then(r.bind(null, 507));
            },
            FaqModule: function () {
              return r.e(5).then(r.bind(null, 1361));
            },
            Comment: function () {
              return r.e(0).then(r.bind(null, 1359));
            },
          },
          props: {
            content: { type: String, default: "" },
            productUd: { type: String, default: "" },
            metaHead: {
              type: Object,
              default: function () {
                return {};
              },
            },
            pageInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              cpsMain: "https://cellphones.com.vn/",
              headPage: {},
              productGroup: {
                colorTop: "transparent",
                colorBot: "transparent",
                listGroup: { 0: { groupUd: "" } },
              },
            };
          },
          fetch: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var r, o, n, c, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = t.getCommentsGraphql({
                            type: "page",
                            urlComment: "https://cellphones.com.vn".concat(
                              t.$route.path
                            ),
                          })),
                          (e.next = 3),
                          r
                        );
                      case 3:
                        return (
                          (o = t.getDataFaq(
                            t.$route.path.slice(1, t.$route.path.length)
                          )),
                          (e.next = 6),
                          o
                        );
                      case 6:
                        (t.headPage = JSON.parse(JSON.stringify(t.metaHead))),
                          (t.headPage.script = []),
                          (n = t.createJsonSchemaWebpage(
                            t.$route.path.slice(1),
                            t.pageInfo
                          )),
                          t.headPage.script.push({
                            type: "application/ld+json",
                            json: n,
                          }),
                          t.dataFaq.length > 0
                            ? ((c = t.createJsonSchemaFaqNew(
                                t.dataFaq,
                                t.$route.path
                              )),
                              t.headPage.script.push({
                                type: "application/ld+json",
                                json: c,
                              }))
                            : t.commentList.length > 0 &&
                              ((l = t.createJsonSchemaFaq(
                                t.commentList,
                                t.$route.path
                              )),
                              t.headPage.script.push({
                                type: "application/ld+json",
                                json: l,
                              }));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          head: function () {
            return this.headPage;
          },
          computed: m(
            m({}, Object(c.d)("comment", ["commentList"])),
            Object(c.d)("faq", ["dataFaq"])
          ),
          created: function () {
            this.productGroup.listGroup[0].groupUd = this.productUd;
          },
          methods: m(
            m(
              {
                createJsonSchemaWebpage: l.n,
                createJsonSchemaFaqNew: l.k,
                createJsonSchemaFaq: l.j,
              },
              Object(c.b)("comment", ["getCommentsGraphql"])
            ),
            Object(c.b)("faq", ["getDataFaq"])
          ),
        },
        f = (r(970), r(42)),
        component = Object(f.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "cps-container", attrs: { id: "pageBody" } },
              [
                e("Content", { attrs: { "show-all": !0, content: t.content } }),
                t._v(" "),
                "" !== t.productUd
                  ? e("HotSale", {
                      attrs: {
                        "show-rating": !1,
                        "item-per-column": 1,
                        "list-product": t.productGroup,
                        "has-box-count-down": !1,
                      },
                    })
                  : t._e(),
                t._v(" "),
                e(
                  "render-on-scroll",
                  { attrs: { height: "250px", "offset-y": 50 } },
                  [e("FaqModule")],
                  1
                ),
                t._v(" "),
                e("Comment", {
                  attrs: {
                    "comment-type": "page",
                    "page-name": t.headPage.title,
                  },
                }),
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
      installComponents(component, {
        Content: r(507).default,
        HotSale: r(511).default,
      });
    },
    708: function (t, e, r) {
      t.exports = {};
    },
    970: function (t, e, r) {
      "use strict";
      r(708);
    },
  },
]);
