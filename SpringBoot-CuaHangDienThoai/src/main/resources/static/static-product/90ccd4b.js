(window.webpackJsonp = window.webpackJsonp || []).push([
  [98, 145, 149, 180, 205, 207, 209, 220],
  {
    1027: function (t, e, n) {
      "use strict";
      n(763);
    },
    1357: function (t, e, n) {
      "use strict";
      n.r(e);
      n(32), n(17), n(24), n(18), n(30), n(11), n(31);
      var r = n(6),
        o = (n(52), n(5), n(15)),
        c = n(499);
      function l(t, e) {
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
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var f = {
          name: "ButtonLogin",
          data: function () {
            return {
              activeDropdown: !1,
              suggestionLogin: !1,
              suggestionLoginAnimation: !1,
              cpsMain: "https://cellphones.com.vn/",
            };
          },
          computed: d({}, Object(o.d)("login", ["user"])),
          mounted: function () {
            var t = this;
            if ("/" === this.$route.path) {
              setTimeout(function () {
                t.suggestionLogin = !0;
              }, 2e3);
              var e = this;
              new Promise(function (t, n) {
                setTimeout(function () {
                  (e.suggestionLoginAnimation = !0), t("ok");
                }, 1e4);
              }).then(function () {
                setTimeout(function () {
                  e.suggestionLogin = !1;
                }, 2e3);
              });
            } else this.suggestionLogin = !1;
          },
          methods: d(
            d(
              d(
                d({}, Object(o.c)("login", ["toggleModalLogin"])),
                Object(o.b)("login", ["logout"])
              ),
              Object(o.b)("cart", ["setItemsInCart"])
            ),
            {},
            { convertName: c.h }
          ),
        },
        m = (n(1027), n(42)),
        component = Object(m.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return t.user && t.user.loggedIn
              ? e("client-only", [
                  e(
                    "div",
                    {
                      staticClass: "dropdown is-right",
                      class: { "is-active": t.activeDropdown },
                      on: {
                        click: function (e) {
                          t.activeDropdown = !t.activeDropdown;
                        },
                      },
                    },
                    [
                      e("div", { staticClass: "dropdown-trigger" }, [
                        e(
                          "div",
                          {
                            staticClass:
                              "header-item about-5 about-smember cta-smember",
                            attrs: {
                              "aria-haspopup": "true",
                              "aria-controls": "dropdown-smem",
                            },
                          },
                          [
                            e("div", { staticClass: "about__box-icon" }, [
                              e(
                                "svg",
                                {
                                  attrs: {
                                    id: "icon-smember",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 560 560",
                                    width: "20",
                                  },
                                },
                                [
                                  e("title", [t._v("Smember")]),
                                  t._v(" "),
                                  e(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Layer_2",
                                        "data-name": "Layer 2",
                                      },
                                    },
                                    [
                                      e(
                                        "g",
                                        {
                                          attrs: {
                                            id: "Layer_1-2",
                                            "data-name": "Layer 1",
                                          },
                                        },
                                        [
                                          e("circle", {
                                            staticClass: "cls-1",
                                            attrs: {
                                              cx: "280",
                                              cy: "280",
                                              r: "265",
                                            },
                                          }),
                                          t._v(" "),
                                          e("circle", {
                                            staticClass: "cls-1",
                                            attrs: {
                                              cx: "280",
                                              cy: "210",
                                              r: "115",
                                            },
                                          }),
                                          t._v(" "),
                                          e("path", {
                                            staticClass: "cls-1",
                                            attrs: {
                                              d: "M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "about__box-content" }, [
                              e("span", { staticClass: "title" }, [
                                t._v(t._s(t.convertName(t.user.name))),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "dropdown-menu",
                          attrs: { id: "dropdown-smem", role: "menu" },
                        },
                        [
                          e("div", { staticClass: "dropdown-content" }, [
                            e("div", { staticClass: "dropdown-item" }, [
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://cellphones.com.vn/smember",
                                  },
                                },
                                [
                                  e(
                                    "svg",
                                    {
                                      staticClass:
                                        "svg-inline--fa fa-user-circle fa-w-16",
                                      attrs: {
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        "data-prefix": "fas",
                                        "data-icon": "user-circle",
                                        role: "img",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 496 512",
                                      },
                                    },
                                    [
                                      e("path", {
                                        attrs: {
                                          fill: "currentColor",
                                          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("span", [t._v(" Smember")]),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "dropdown-divider" }),
                            t._v(" "),
                            e("div", { staticClass: "dropdown-item" }, [
                              e(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function (e) {
                                      t.logout({
                                        token: t.user.token,
                                        path: t.$route.path,
                                      }),
                                        t.setItemsInCart(0);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "svg",
                                    {
                                      staticClass:
                                        "svg-inline--fa fa-sign-out-alt fa-w-16",
                                      attrs: {
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        "data-prefix": "fas",
                                        "data-icon": "sign-out-alt",
                                        role: "img",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 512 512",
                                      },
                                    },
                                    [
                                      e("path", {
                                        attrs: {
                                          "data-v-170b8c3e": "",
                                          fill: "currentColor",
                                          d: "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z",
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("span", [t._v(" Đăng xuất")]),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ])
              : e("client-only", [
                  e(
                    "div",
                    {
                      staticClass:
                        "header-item about-5 about-smember cta-smember button__login",
                      on: {
                        click: function (e) {
                          return t.toggleModalLogin({
                            condition: !0,
                            title: "có trải nghiệm mua sắm tốt hơn",
                          });
                        },
                      },
                    },
                    [
                      e("div", { staticClass: "about__box-icon" }, [
                        e(
                          "svg",
                          {
                            attrs: {
                              id: "icon-smember",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 560 560",
                              width: "20",
                            },
                          },
                          [
                            e("defs", [
                              e("style", [
                                t._v(
                                  "#icon-smember .cls-1 {\n            fill: none;\n            stroke: #fff;\n            stroke-width: 30px;\n          }"
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            e("title", [t._v("Smember")]),
                            t._v(" "),
                            e(
                              "g",
                              {
                                attrs: {
                                  id: "Layer_2",
                                  "data-name": "Layer 2",
                                },
                              },
                              [
                                e(
                                  "g",
                                  {
                                    attrs: {
                                      id: "Layer_1-2",
                                      "data-name": "Layer 1",
                                    },
                                  },
                                  [
                                    e("circle", {
                                      staticClass: "cls-1",
                                      attrs: { cx: "280", cy: "280", r: "265" },
                                    }),
                                    t._v(" "),
                                    e("circle", {
                                      staticClass: "cls-1",
                                      attrs: { cx: "280", cy: "210", r: "115" },
                                    }),
                                    t._v(" "),
                                    e("path", {
                                      staticClass: "cls-1",
                                      attrs: {
                                        d: "M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "about__box-content" }, [
                        e("span", { staticClass: "title" }, [
                          t._v("Đăng nhập"),
                        ]),
                      ]),
                      t._v(" "),
                      t.suggestionLogin
                        ? e(
                            "div",
                            {
                              staticClass: "suggestions-smember-login",
                              class: {
                                "slow-hidden": t.suggestionLoginAnimation,
                              },
                            },
                            [
                              e("nuxt-img", {
                                attrs: {
                                  provider: "CPS_IMG_PROVIDER",
                                  format: "webp",
                                  width: "100",
                                  height: "100",
                                  src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Fighting.png",
                                  alt: "cps login icon",
                                },
                              }),
                              t._v(
                                "\n      Đăng nhập để trải nghiệm mua\n      sắm thuận tiện và dễ dàng hơn\n    "
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]
                  ),
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
            return w;
          }),
          n.d(e, "q", function () {
            return _;
          }),
          n.d(e, "s", function () {
            return O;
          }),
          n.d(e, "u", function () {
            return C;
          }),
          n.d(e, "x", function () {
            return j;
          }),
          n.d(e, "E", function () {
            return x;
          }),
          n.d(e, "b", function () {
            return S;
          }),
          n.d(e, "t", function () {
            return P;
          }),
          n.d(e, "g", function () {
            return k;
          }),
          n.d(e, "d", function () {
            return L;
          }),
          n.d(e, "C", function () {
            return A;
          }),
          n.d(e, "y", function () {
            return D;
          }),
          n.d(e, "z", function () {
            return E;
          }),
          n.d(e, "o", function () {
            return I;
          }),
          n.d(e, "e", function () {
            return M;
          }),
          n.d(e, "i", function () {
            return N;
          }),
          n.d(e, "n", function () {
            return T;
          }),
          n.d(e, "j", function () {
            return $;
          }),
          n.d(e, "k", function () {
            return R;
          }),
          n.d(e, "m", function () {
            return B;
          }),
          n.d(e, "l", function () {
            return z;
          }),
          n.d(e, "D", function () {
            return V;
          }),
          n.d(e, "h", function () {
            return F;
          }),
          n.d(e, "A", function () {
            return H;
          }),
          n.d(e, "f", function () {
            return U;
          }),
          n.d(e, "w", function () {
            return Q;
          }),
          n.d(e, "a", function () {
            return Y;
          }),
          n.d(e, "v", function () {
            return Z;
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
        function h(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? m(Object(n), !0).forEach(function (e) {
                  Object(c.a)(t, e, n[e]);
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
        function _(t) {
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
        function C(t, e) {
          for (
            var n = t.replaceAll(".", "").slice(e, e.length), r = "", i = 0;
            i < e;
            i++
          )
            r += "?";
          return w(r.concat(n));
        }
        function j(t, e) {
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
        function P() {
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
        function k() {
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
        function L() {
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
        function D(title, t) {
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
        function I(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function M(t, e, n) {
          return (46 === t || 152 === t) && e > 0 && n > 0;
        }
        function N(t, e) {
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
        function T(path, t) {
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
        function $(t, path) {
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
        function R(t, path) {
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
        function B(t, e, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            d = t.general.attributes.manufacturer,
            f = t.filterable.stock_available_id,
            m = "";
          if (
            ((m =
              46 === f
                ? c || "InStock"
                : 152 === f
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
          var w,
            _ = [],
            O = {},
            C = l(r);
          try {
            for (C.s(); !(w = C.n()).done; ) {
              var j = w.value;
              _.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(j.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(j.customer.fullname),
                },
              });
            }
          } catch (t) {
            C.e(t);
          } finally {
            C.f();
          }
          return (
            _.length > 0 &&
              (O = {
                review: _,
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
                  availability: "https://schema.org/".concat(m),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              O
            )
          );
        }
        function z(t) {
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
              m = l.lastIndexOf(n) + n.length,
              h = l.slice(m, m + 1 + 6),
              v = [],
              i = 1;
            i < r.length;
            i++
          ) {
            var y = r[i].shop.address.split(",")[0].split(" "),
              w = y.slice(1, y.length).join(" ");
            v.push({
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
        function F(t) {
          var e = (null == t ? void 0 : t.split(" ")) || [];
          if (e.length) return e[e.length - 1];
        }
        function H(t) {
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
        function U() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === e || (G(t) <= n && n <= G(e));
        }
        function G(t) {
          return "string" == typeof t && "" !== t
            ? new Date(t.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function Q(t) {
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
        function Z() {
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
        m = RangeError,
        h = String,
        v = Math.floor,
        y = o(d),
        w = o("".slice),
        _ = o((1).toFixed),
        O = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
            ? O(t, e - 1, n * t)
            : O(t * t, e / 2, n);
        },
        C = function (data, t, e) {
          for (var n = -1, r = e; ++n < 6; )
            (r += t * data[n]), (data[n] = r % 1e7), (r = v(r / 1e7));
        },
        j = function (data, t) {
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
            f(function () {
              return (
                "0.000" !== _(8e-5, 3) ||
                "1" !== _(0.9, 0) ||
                "1.25" !== _(1.255, 2) ||
                "1000000000000000128" !== _(0xde0b6b3a7640080, 0)
              );
            }) ||
            !f(function () {
              _({});
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
              v = "",
              _ = "0";
            if (f < 0 || f > 20) throw m("Incorrect fraction digits");
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
                    })(d * O(2, 69, 1)) - 69) < 0
                    ? d * O(2, -e, 1)
                    : d / O(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (C(data, 0, n), r = f; r >= 7; ) C(data, 1e7, 0), (r -= 7);
                for (C(data, O(10, r, 1), 0), r = e - 1; r >= 23; )
                  j(data, 1 << 23), (r -= 23);
                j(data, 1 << r), C(data, 1, 1), j(data, 2), (_ = x(data));
              } else
                C(data, 0, n), C(data, 1 << -e, 0), (_ = x(data) + y("0", f));
            return (_ =
              f > 0
                ? v +
                  ((o = _.length) <= f
                    ? "0." + y("0", f - o) + _
                    : w(_, 0, o - f) + "." + w(_, o - f))
                : v + _);
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
    763: function (t, e, n) {
      t.exports = {};
    },
  },
]);
