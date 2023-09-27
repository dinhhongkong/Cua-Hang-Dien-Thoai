/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [67, 71, 145, 149, 177, 180, 205, 207, 209, 220],
  {
    1078: function (t, e, n) {
      "use strict";
      n(792);
    },
    1380: function (t, e, n) {
      "use strict";
      n.r(e);
      n(32), n(10), n(17), n(24), n(30), n(11), n(31);
      var r = n(0),
        o = n(6),
        c = (n(8), n(38), n(18), n(5), n(508)),
        l = n(15),
        d = n(499);
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
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
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
      var h = {
          name: "ExchangeProducts",
          components: { Swiper: c.Swiper, SwiperSlide: c.SwiperSlide },
          props: {
            optionSwiper: {
              type: Object,
              default: function () {
                return {
                  slidesPerView: 5,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                  slidesPerColumn: this.itemPerColumn,
                  slidesPerColumnFill: "row",
                  loop: !1,
                  autoplay: { delay: 5e3, pauseOnMouseEnter: !0 },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    320: { slidesPerView: 2 },
                    375: { slidesPerView: 2.2 },
                    717: { slidesPerView: 3.4 },
                    768: { slidesPerView: 3 },
                    990: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                  },
                };
              },
            },
            listProduct: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {
              exchangeProduct: [],
              mainDomain: "https://cellphones.com.vn/",
            };
          },
          computed: v(
            v({}, Object(l.d)("pdp-trade", ["exchangeProductSheetData"])),
            Object(l.d)("product", ["productListByArrayId", "productId"])
          ),
          watch: {
            exchangeProductSheetData: function () {
              this.getExchangeData();
            },
          },
          mounted: function () {
            this.getExchangeData();
          },
          methods: v(
            v({}, Object(l.b)("product", ["getProductListByArrayId"])),
            {},
            {
              formatMoney: d.r,
              getExchangeData: function () {
                var t = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, r;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = []),
                              !(
                                (r = t.listProduct.map(function (t) {
                                  return t.webId;
                                })).length > 0
                              ))
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 5),
                              t.getProductListByArrayId({ arrayId: r })
                            );
                          case 5:
                            n = t.productListByArrayId.map(function (e) {
                              var n = t.listProduct.filter(function (t) {
                                return t.webId === e.general.product_id;
                              });
                              return {
                                name: e.general.name,
                                thumbnail: e.filterable.thumbnail,
                                product_id: e.general.product_id,
                                type_1_price: t.formatMoney(n[0].thuLoai1),
                              };
                            });
                          case 6:
                            t.exchangeProduct = n;
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }
          ),
        },
        m = (n(1078), n(42)),
        component = Object(m.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "product-list-swiper" },
              [
                e(
                  "Swiper",
                  {
                    staticClass: "p-2",
                    attrs: { options: t.optionSwiper },
                    scopedSlots: t._u([
                      {
                        key: "button-next",
                        fn: function () {
                          return [
                            e("div", {
                              staticClass:
                                "swiper-button-next button__view-product-next",
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "button-prev",
                        fn: function () {
                          return [
                            e("div", {
                              staticClass:
                                "swiper-button-prev button__view-product-prev",
                            }),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    t.exchangeProduct
                      ? [
                          t._l(t.exchangeProduct, function (n) {
                            return e("SwiperSlide", { key: n.product_id }, [
                              e(
                                "div",
                                { staticClass: "product-info-container" },
                                [
                                  e("div", { staticClass: "product-info" }, [
                                    e(
                                      "a",
                                      {
                                        staticClass:
                                          "product__link button__link",
                                      },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "product__image" },
                                          [
                                            e("nuxt-img", {
                                              staticClass: "product__img",
                                              attrs: {
                                                provider: "CPS_IMG_PROVIDER",
                                                format: "webp",
                                                width: "358",
                                                height: "358",
                                                alt: n.name,
                                                src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                                  n.thumbnail
                                                ),
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        e(
                                          "span",
                                          { staticClass: "product__name" },
                                          [e("h3", [t._v(t._s(n.name))])]
                                        ),
                                        t._v(" "),
                                        e(
                                          "p",
                                          { staticClass: "trade--price" },
                                          [
                                            t._v("Giá thu đến: "),
                                            e("strong", [
                                              t._v(t._s(n.type_1_price) + "đ"),
                                            ]),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "a",
                                      t._b(
                                        {
                                          staticClass:
                                            "exchange button__compare is-flex is-justify-content-center is-align-items-center",
                                          attrs: { target: "_blank" },
                                        },
                                        "a",
                                        {
                                          href: ""
                                            .concat(
                                              t.mainDomain,
                                              "thu-cu-doi-moi?exchange="
                                            )
                                            .concat(n.product_id, "-")
                                            .concat(t.productId),
                                        },
                                        !1
                                      ),
                                      [t._v("Lên đời ngay")]
                                    ),
                                  ]),
                                ]
                              ),
                            ]);
                          }),
                          t._v(" "),
                          e("SwiperSlide", [
                            e(
                              "div",
                              {
                                staticClass:
                                  "product-info-container more-trade-product is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center",
                              },
                              [
                                e("div", { staticClass: "product-info" }, [
                                  e(
                                    "a",
                                    {
                                      staticClass: "product__link button__link",
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "product__image" },
                                        [
                                          e("nuxt-img", {
                                            staticClass: "product__img",
                                            attrs: {
                                              provider: "CPS_IMG_PROVIDER",
                                              format: "webp",
                                              width: "69",
                                              height: "69",
                                              alt: "Thu cũ đổi mới",
                                              src: "https://cdn2.cellphones.com.vn/69x/media/cps-images/trade-placeholder.png",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "a",
                                    t._b(
                                      {
                                        staticClass:
                                          "exchange button__compare is-flex is-justify-content-center is-align-items-center",
                                        attrs: { target: "_blank" },
                                      },
                                      "a",
                                      {
                                        href: ""
                                          .concat(
                                            t.mainDomain,
                                            "thu-cu-doi-moi?id="
                                          )
                                          .concat(t.productId),
                                      },
                                      !1
                                    ),
                                    [t._v("Chọn sản phẩm khác")]
                                  ),
                                ]),
                              ]
                            ),
                          ]),
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
    499: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "p", function () {
          return m;
        }),
          n.d(e, "B", function () {
            return y;
          }),
          n.d(e, "r", function () {
            return w;
          }),
          n.d(e, "q", function () {
            return S;
          }),
          n.d(e, "s", function () {
            return O;
          }),
          n.d(e, "u", function () {
            return _;
          }),
          n.d(e, "x", function () {
            return C;
          }),
          n.d(e, "E", function () {
            return x;
          }),
          n.d(e, "b", function () {
            return P;
          }),
          n.d(e, "t", function () {
            return j;
          }),
          n.d(e, "g", function () {
            return I;
          }),
          n.d(e, "d", function () {
            return D;
          }),
          n.d(e, "C", function () {
            return k;
          }),
          n.d(e, "y", function () {
            return A;
          }),
          n.d(e, "z", function () {
            return E;
          }),
          n.d(e, "o", function () {
            return $;
          }),
          n.d(e, "e", function () {
            return N;
          }),
          n.d(e, "i", function () {
            return L;
          }),
          n.d(e, "n", function () {
            return B;
          }),
          n.d(e, "j", function () {
            return R;
          }),
          n.d(e, "k", function () {
            return T;
          }),
          n.d(e, "m", function () {
            return M;
          }),
          n.d(e, "l", function () {
            return V;
          }),
          n.d(e, "D", function () {
            return z;
          }),
          n.d(e, "h", function () {
            return U;
          }),
          n.d(e, "A", function () {
            return F;
          }),
          n.d(e, "f", function () {
            return G;
          }),
          n.d(e, "w", function () {
            return Z;
          }),
          n.d(e, "a", function () {
            return Q;
          }),
          n.d(e, "v", function () {
            return Y;
          }),
          n.d(e, "c", function () {
            return J;
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
        function f(t) {
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
        function v(t, e) {
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
              ? v(Object(n), !0).forEach(function (e) {
                  Object(c.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function m(t, option) {
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
        function w(t) {
          return "" === t
            ? "0"
            : String(t)
                .split("")
                .reverse()
                .reduce(function (t, e, n) {
                  return (n % 3 ? e : e + ".") + t;
                });
        }
        function S(t) {
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
        function O(t, e) {
          return e > 0 ? e : t;
        }
        function _(t, e) {
          for (
            var n = t.replaceAll(".", "").slice(e, e.length), r = "", i = 0;
            i < e;
            i++
          )
            r += "?";
          return w(r.concat(n));
        }
        function C(t, e) {
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
        function P() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = { "Content-Type": "application/json" };
          return (
            t && (e = h(h({}, e), {}, { Authorization: "Bearer " + t })), e
          );
        }
        function j() {
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
        function I() {
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
        function D() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function k(t, time) {
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
        function A(title, t) {
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
        function E(t, e) {
          e[t];
          return Object(o.a)(e, [t].map(f));
        }
        function $(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function N(t, e, n) {
          return (46 === t || 152 === t) && e > 0 && n > 0;
        }
        function L(t, e) {
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
        function B(path, t) {
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
        function T(t, path) {
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
        function M(t, e, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            d = t.general.attributes.manufacturer,
            f = t.filterable.stock_available_id,
            v = "";
          if (
            ((v =
              46 === f
                ? c || "InStock"
                : 152 === f
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !d)
          ) {
            var h,
              m = l(t.specification.basic);
            try {
              for (m.s(); !(h = m.n()).done; ) {
                var y = h.value;
                "phone_accessory_brands" === y.key && (d = y.value);
              }
            } catch (t) {
              m.e(t);
            } finally {
              m.f();
            }
          }
          var w,
            S = [],
            O = {},
            _ = l(r);
          try {
            for (_.s(); !(w = _.n()).done; ) {
              var C = w.value;
              S.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(C.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(C.customer.fullname),
                },
              });
            }
          } catch (t) {
            _.e(t);
          } finally {
            _.f();
          }
          return (
            S.length > 0 &&
              (O = {
                review: S,
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
                  availability: "https://schema.org/".concat(v),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              O
            )
          );
        }
        function V(t) {
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
              f = d.slice(1, d.length).join(" "),
              v = l.lastIndexOf(n) + n.length,
              h = l.slice(v, v + 1 + 6),
              m = [],
              i = 1;
            i < r.length;
            i++
          ) {
            var y = r[i].shop.address.split(",")[0].split(" "),
              w = y.slice(1, y.length).join(" ");
            m.push({
              "@type": "Store",
              name: "CellphoneS ".concat(r[i].shop.address),
              url: r[i].shop.store_opening_url,
              image: r[i].shop.store_opening_images,
              telephone: r[i].shop.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: w,
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
              streetAddress: f,
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
            department: m,
          };
        }
        function z(t) {
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
        function U(t) {
          var e = (null == t ? void 0 : t.split(" ")) || [];
          if (e.length) return e[e.length - 1];
        }
        function F(t) {
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
        function G() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === e || (H(t) <= n && n <= H(e));
        }
        function H(t) {
          return "string" == typeof t && "" !== t
            ? new Date(t.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function Z(t) {
          t
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function Q(t) {
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
        function Y() {
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
        function J(text) {
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
        f = n(4),
        v = RangeError,
        h = String,
        m = Math.floor,
        y = o(d),
        w = o("".slice),
        S = o((1).toFixed),
        O = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
            ? O(t, e - 1, n * t)
            : O(t * t, e / 2, n);
        },
        _ = function (data, t, e) {
          for (var n = -1, r = e; ++n < 6; )
            (r += t * data[n]), (data[n] = r % 1e7), (r = m(r / 1e7));
        },
        C = function (data, t) {
          for (var e = 6, n = 0; --e >= 0; )
            (n += data[e]), (data[e] = m(n / t)), (n = (n % t) * 1e7);
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
            f(function () {
              return (
                "0.000" !== S(8e-5, 3) ||
                "1" !== S(0.9, 0) ||
                "1.25" !== S(1.255, 2) ||
                "1000000000000000128" !== S(0xde0b6b3a7640080, 0)
              );
            }) ||
            !f(function () {
              S({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              n,
              r,
              o,
              d = l(this),
              f = c(t),
              data = [0, 0, 0, 0, 0, 0],
              m = "",
              S = "0";
            if (f < 0 || f > 20) throw v("Incorrect fraction digits");
            if (d != d) return "NaN";
            if (d <= -1e21 || d >= 1e21) return h(d);
            if ((d < 0 && ((m = "-"), (d = -d)), d > 1e-21))
              if (
                ((n =
                  (e =
                    (function (t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(d * O(2, 69, 1)) - 69) < 0
                    ? d * O(2, -e, 1)
                    : d / O(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (_(data, 0, n), r = f; r >= 7; ) _(data, 1e7, 0), (r -= 7);
                for (_(data, O(10, r, 1), 0), r = e - 1; r >= 23; )
                  C(data, 1 << 23), (r -= 23);
                C(data, 1 << r), _(data, 1, 1), C(data, 2), (S = x(data));
              } else
                _(data, 0, n), _(data, 1 << -e, 0), (S = x(data) + y("0", f));
            return (S =
              f > 0
                ? m +
                  ((o = S.length) <= f
                    ? "0." + y("0", f - o) + S
                    : w(S, 0, o - f) + "." + w(S, o - f))
                : m + S);
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
    508: function (t, e, n) {
      !(function (t, e, n) {
        "use strict";
        var r;
        (e =
          e && Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e),
          (n =
            n && Object.prototype.hasOwnProperty.call(n, "default")
              ? n.default
              : n),
          (function (t) {
            (t.SwiperComponent = "Swiper"),
              (t.SwiperSlideComponent = "SwiperSlide"),
              (t.SwiperDirective = "swiper"),
              (t.SwiperInstance = "$swiper");
          })(r || (r = {}));
        var o,
          c,
          l = Object.freeze({
            containerClass: "swiper-container",
            wrapperClass: "swiper-wrapper",
            slideClass: "swiper-slide",
          });
        (function (t) {
          (t.Ready = "ready"), (t.ClickSlide = "clickSlide");
        })(o || (o = {})),
          (function (t) {
            (t.AutoUpdate = "autoUpdate"),
              (t.AutoDestroy = "autoDestroy"),
              (t.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy"),
              (t.CleanupStylesOnDestroy = "cleanupStylesOnDestroy");
          })(c || (c = {}));
        var d = [
          "init",
          "beforeDestroy",
          "slideChange",
          "slideChangeTransitionStart",
          "slideChangeTransitionEnd",
          "slideNextTransitionStart",
          "slideNextTransitionEnd",
          "slidePrevTransitionStart",
          "slidePrevTransitionEnd",
          "transitionStart",
          "transitionEnd",
          "touchStart",
          "touchMove",
          "touchMoveOpposite",
          "sliderMove",
          "touchEnd",
          "click",
          "tap",
          "doubleTap",
          "imagesReady",
          "progress",
          "reachBeginning",
          "reachEnd",
          "fromEdge",
          "setTranslate",
          "setTransition",
          "resize",
          "observerUpdate",
          "beforeLoopFix",
          "loopFix",
        ];
        function f() {
          for (var s = 0, i = 0, t = arguments.length; i < t; i++)
            s += arguments[i].length;
          var e = Array(s),
            n = 0;
          for (i = 0; i < t; i++)
            for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
              e[n] = a[r];
          return e;
        }
        var v,
          h = function (t) {
            return t
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/\s+/g, "-")
              .toLowerCase();
          },
          m = function (t, e, n) {
            var r, c, l;
            if (t && !t.destroyed) {
              var d =
                (null === (r = e.composedPath) || void 0 === r
                  ? void 0
                  : r.call(e)) || e.path;
              if ((null == e ? void 0 : e.target) && d) {
                var f = Array.from(t.slides),
                  v = Array.from(d);
                if (
                  f.includes(e.target) ||
                  v.some(function (t) {
                    return f.includes(t);
                  })
                ) {
                  var m = t.clickedIndex,
                    y = Number(
                      null ===
                        (l =
                          null === (c = t.clickedSlide) || void 0 === c
                            ? void 0
                            : c.dataset) || void 0 === l
                        ? void 0
                        : l.swiperSlideIndex
                    ),
                    w = Number.isInteger(y) ? y : null;
                  n(o.ClickSlide, m, w), n(h(o.ClickSlide), m, w);
                }
              }
            }
          },
          y = function (t, e) {
            d.forEach(function (n) {
              t.on(n, function () {
                for (
                  var t = arguments, r = [], o = 0;
                  o < arguments.length;
                  o++
                )
                  r[o] = t[o];
                e.apply(void 0, f([n], r));
                var c = h(n);
                c !== n && e.apply(void 0, f([c], r));
              });
            });
          },
          w = "instanceName";
        function S(t, e) {
          var n = function (t, e) {
              var n,
                r,
                o,
                c,
                l =
                  null ===
                    (r =
                      null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.attrs) || void 0 === r
                    ? void 0
                    : r[e];
              return void 0 !== l
                ? l
                : null ===
                    (c =
                      null === (o = t.data) || void 0 === o
                        ? void 0
                        : o.attrs) || void 0 === c
                ? void 0
                : c[h(e)];
            },
            d = function (element, t, e) {
              return t.arg || n(e, w) || element.id || r.SwiperInstance;
            },
            f = function (element, t, e) {
              var n = d(element, t, e);
              return e.context[n] || null;
            },
            v = function (t) {
              return t.value || e;
            },
            S = function (input) {
              return [!0, void 0, null, ""].includes(input);
            },
            O = function (t) {
              var e,
                n,
                r =
                  (null === (e = t.data) || void 0 === e ? void 0 : e.on) ||
                  (null === (n = t.componentOptions) || void 0 === n
                    ? void 0
                    : n.listeners);
              return function (t) {
                for (
                  var e, n = arguments, o = [], c = 1;
                  c < arguments.length;
                  c++
                )
                  o[c - 1] = n[c];
                var l = null === (e = r) || void 0 === e ? void 0 : e[t];
                l && l.fns.apply(l, o);
              };
            };
          return {
            bind: function (element, t, e) {
              -1 === element.className.indexOf(l.containerClass) &&
                (element.className +=
                  (element.className ? " " : "") + l.containerClass),
                element.addEventListener("click", function (n) {
                  var r = O(e),
                    o = f(element, t, e);
                  m(o, n, r);
                });
            },
            inserted: function (element, e, n) {
              var r = n.context,
                c = v(e),
                l = d(element, e, n),
                f = O(n),
                h = r,
                m = null == h ? void 0 : h[l];
              (m && !m.destroyed) ||
                ((m = new t(element, c)), (h[l] = m), y(m, f), f(o.Ready, m));
            },
            componentUpdated: function (element, t, e) {
              var r,
                o,
                l,
                d,
                h,
                m,
                y,
                w,
                O,
                _,
                C,
                x,
                P = n(e, c.AutoUpdate);
              if (S(P)) {
                var j = f(element, t, e);
                if (j) {
                  var I = v(t).loop;
                  I &&
                    (null ===
                      (o =
                        null === (r = j) || void 0 === r
                          ? void 0
                          : r.loopDestroy) ||
                      void 0 === o ||
                      o.call(r)),
                    null === (l = null == j ? void 0 : j.update) ||
                      void 0 === l ||
                      l.call(j),
                    null ===
                      (h =
                        null === (d = j.navigation) || void 0 === d
                          ? void 0
                          : d.update) ||
                      void 0 === h ||
                      h.call(d),
                    null ===
                      (y =
                        null === (m = j.pagination) || void 0 === m
                          ? void 0
                          : m.render) ||
                      void 0 === y ||
                      y.call(m),
                    null ===
                      (O =
                        null === (w = j.pagination) || void 0 === w
                          ? void 0
                          : w.update) ||
                      void 0 === O ||
                      O.call(w),
                    I &&
                      (null ===
                        (C =
                          null === (_ = j) || void 0 === _
                            ? void 0
                            : _.loopCreate) ||
                        void 0 === C ||
                        C.call(_),
                      null === (x = null == j ? void 0 : j.update) ||
                        void 0 === x ||
                        x.call(j));
                }
              }
            },
            unbind: function (element, t, e) {
              var r,
                o = n(e, c.AutoDestroy);
              if (S(o)) {
                var l = f(element, t, e);
                l &&
                  l.initialized &&
                  (null === (r = null == l ? void 0 : l.destroy) ||
                    void 0 === r ||
                    r.call(
                      l,
                      S(n(e, c.DeleteInstanceOnDestroy)),
                      S(n(e, c.CleanupStylesOnDestroy))
                    ));
              }
            },
          };
        }
        function O(t) {
          var e;
          return n.extend({
            name: r.SwiperComponent,
            props:
              ((e = {
                defaultOptions: {
                  type: Object,
                  required: !1,
                  default: function () {
                    return {};
                  },
                },
                options: { type: Object, required: !1 },
              }),
              (e[c.AutoUpdate] = { type: Boolean, default: !0 }),
              (e[c.AutoDestroy] = { type: Boolean, default: !0 }),
              (e[c.DeleteInstanceOnDestroy] = {
                type: Boolean,
                required: !1,
                default: !0,
              }),
              (e[c.CleanupStylesOnDestroy] = {
                type: Boolean,
                required: !1,
                default: !0,
              }),
              e),
            data: function () {
              var t;
              return ((t = {})[r.SwiperInstance] = null), t;
            },
            computed: {
              swiperInstance: {
                cache: !1,
                set: function (t) {
                  this[r.SwiperInstance] = t;
                },
                get: function () {
                  return this[r.SwiperInstance];
                },
              },
              swiperOptions: function () {
                return this.options || this.defaultOptions;
              },
              wrapperClass: function () {
                return this.swiperOptions.wrapperClass || l.wrapperClass;
              },
            },
            methods: {
              handleSwiperClick: function (t) {
                m(this.swiperInstance, t, this.$emit.bind(this));
              },
              autoReLoopSwiper: function () {
                var t, e;
                if (this.swiperInstance && this.swiperOptions.loop) {
                  var n = this.swiperInstance;
                  null === (t = null == n ? void 0 : n.loopDestroy) ||
                    void 0 === t ||
                    t.call(n),
                    null === (e = null == n ? void 0 : n.loopCreate) ||
                      void 0 === e ||
                      e.call(n);
                }
              },
              updateSwiper: function () {
                var t, e, n, r, o, l, d, f;
                this[c.AutoUpdate] &&
                  this.swiperInstance &&
                  (this.autoReLoopSwiper(),
                  null ===
                    (e =
                      null === (t = this.swiperInstance) || void 0 === t
                        ? void 0
                        : t.update) ||
                    void 0 === e ||
                    e.call(t),
                  null ===
                    (r =
                      null === (n = this.swiperInstance.navigation) ||
                      void 0 === n
                        ? void 0
                        : n.update) ||
                    void 0 === r ||
                    r.call(n),
                  null ===
                    (l =
                      null === (o = this.swiperInstance.pagination) ||
                      void 0 === o
                        ? void 0
                        : o.render) ||
                    void 0 === l ||
                    l.call(o),
                  null ===
                    (f =
                      null === (d = this.swiperInstance.pagination) ||
                      void 0 === d
                        ? void 0
                        : d.update) ||
                    void 0 === f ||
                    f.call(d));
              },
              destroySwiper: function () {
                var t, e;
                this[c.AutoDestroy] &&
                  this.swiperInstance &&
                  this.swiperInstance.initialized &&
                  (null ===
                    (e =
                      null === (t = this.swiperInstance) || void 0 === t
                        ? void 0
                        : t.destroy) ||
                    void 0 === e ||
                    e.call(
                      t,
                      this[c.DeleteInstanceOnDestroy],
                      this[c.CleanupStylesOnDestroy]
                    ));
              },
              initSwiper: function () {
                (this.swiperInstance = new t(this.$el, this.swiperOptions)),
                  y(this.swiperInstance, this.$emit.bind(this)),
                  this.$emit(o.Ready, this.swiperInstance);
              },
            },
            mounted: function () {
              this.swiperInstance || this.initSwiper();
            },
            activated: function () {
              this.updateSwiper();
            },
            updated: function () {
              this.updateSwiper();
            },
            beforeDestroy: function () {
              this.$nextTick(this.destroySwiper);
            },
            render: function (t) {
              return t(
                "div",
                {
                  staticClass: l.containerClass,
                  on: { click: this.handleSwiperClick },
                },
                [
                  this.$slots[v.ParallaxBg],
                  t("div", { class: this.wrapperClass }, this.$slots.default),
                  this.$slots[v.Pagination],
                  this.$slots[v.PrevButton],
                  this.$slots[v.NextButton],
                  this.$slots[v.Scrollbar],
                ]
              );
            },
          });
        }
        !(function (t) {
          (t.ParallaxBg = "parallax-bg"),
            (t.Pagination = "pagination"),
            (t.Scrollbar = "scrollbar"),
            (t.PrevButton = "button-prev"),
            (t.NextButton = "button-next");
        })(v || (v = {}));
        var _ = n.extend({
            name: r.SwiperSlideComponent,
            computed: {
              slideClass: function () {
                var t, e;
                return (
                  (null ===
                    (e =
                      null === (t = this.$parent) || void 0 === t
                        ? void 0
                        : t.swiperOptions) || void 0 === e
                    ? void 0
                    : e.slideClass) || l.slideClass
                );
              },
            },
            methods: {
              update: function () {
                var t,
                  e = this.$parent;
                e[c.AutoUpdate] &&
                  (null === (t = null == e ? void 0 : e.swiperInstance) ||
                    void 0 === t ||
                    t.update());
              },
            },
            mounted: function () {
              this.update();
            },
            updated: function () {
              this.update();
            },
            render: function (t) {
              return t("div", { class: this.slideClass }, this.$slots.default);
            },
          }),
          C = function (t) {
            var e = function (n, o) {
              if (!e.installed) {
                var c = O(t);
                o &&
                  (c.options.props.defaultOptions.default = function () {
                    return o;
                  }),
                  n.component(r.SwiperComponent, c),
                  n.component(r.SwiperSlideComponent, _),
                  n.directive(r.SwiperDirective, S(t, o)),
                  (e.installed = !0);
              }
            };
            return e;
          };
        function x(t) {
          var e;
          return (
            ((e = { version: "4.1.1", install: C(t), directive: S(t) })[
              r.SwiperComponent
            ] = O(t)),
            (e[r.SwiperSlideComponent] = _),
            e
          );
        }
        var P = x(e),
          j = P.version,
          I = P.install,
          D = P.directive,
          k = P.Swiper,
          A = P.SwiperSlide;
        (t.Swiper = k),
          (t.SwiperSlide = A),
          (t.default = P),
          (t.directive = D),
          (t.install = I),
          (t.version = j),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e, n(513), n(2));
    },
    792: function (t, e, n) {
      t.exports = {};
    },
  },
]);
