(window.webpackJsonp = window.webpackJsonp || []).push([
  [52, 145, 149, 180, 205, 207, 209, 220],
  {
    1111: function (e, t, n) {
      "use strict";
      n(821);
    },
    1408: function (e, t, n) {
      "use strict";
      n.r(t);
      n(17), n(32), n(24), n(30), n(11), n(31);
      var r = n(6),
        o = (n(5), n(33), n(36), n(18), n(15)),
        c = n(499);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var d = {
          name: "MenuTree",
          components: {
            MenuTreeChild: function () {
              return n.e(105).then(n.bind(null, 1409));
            },
          },
          data: function () {
            return { childrenData: [], showByIndex: null, menuMain: [] };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(n), !0).forEach(function (t) {
                    Object(r.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, Object(o.d)("menu", ["menu"])),
          created: function () {
            this.menu.main &&
              (this.menuMain = this.menu.main.filter(function (e) {
                return "1" === JSON.parse(e.data).isShowOnDesktop;
              }));
          },
          mounted: function () {
            this.checkBreadcrumb();
          },
          methods: {
            checkBreadcrumb: c.d,
            transferDataChild: function (data) {
              this.childrenData = data;
            },
            tranformMultipleLink: function (data) {
              return JSON.parse(JSON.parse(data).multiple_link);
            },
          },
        },
        h = d,
        f = (n(1111), n(42)),
        component = Object(f.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "menu-wrapper space-bread-crumb",
                on: {
                  mouseleave: function (t) {
                    (e.showByIndex = null), e.transferDataChild([]);
                  },
                },
              },
              [
                e.menuMain.length > 0
                  ? t(
                      "div",
                      { staticClass: "menu-tree" },
                      e._l(e.menuMain, function (n, r) {
                        return t(
                          "div",
                          e._b(
                            {
                              key: r,
                              staticClass: "label-menu-tree",
                              class: e.showByIndex !== n.id || "active",
                              on: {
                                mouseover: function (t) {
                                  (e.showByIndex = n.id),
                                    e.transferDataChild(n.children);
                                },
                              },
                            },
                            "div",
                            {
                              href: n.data ? JSON.parse(n.data).url : "",
                              target: n.target,
                            },
                            !1
                          ),
                          [
                            JSON.parse(n.data).multiple_link
                              ? t(
                                  "div",
                                  { staticClass: "label-item multiple" },
                                  [
                                    t(
                                      "div",
                                      { staticClass: "right-content" },
                                      [
                                        t("i", {
                                          staticClass: "icons-cate",
                                          style:
                                            "background-image: url(".concat(
                                              null !== n.data
                                                ? JSON.parse(n.data).icon
                                                : "",
                                              ");"
                                            ),
                                        }),
                                        e._v(" "),
                                        e._l(
                                          JSON.parse(
                                            JSON.parse(n.data).multiple_link
                                          ),
                                          function (r, o, c) {
                                            return t(
                                              "a",
                                              e._b(
                                                {
                                                  key: o,
                                                  staticClass: "multiple-link",
                                                },
                                                "a",
                                                { href: r },
                                                !1
                                              ),
                                              [
                                                c <
                                                Object.keys(
                                                  JSON.parse(
                                                    JSON.parse(n.data)
                                                      .multiple_link
                                                  )
                                                ).length -
                                                  1
                                                  ? t("span", [
                                                      e._v(e._s(o) + ", "),
                                                    ])
                                                  : t("span", [e._v(e._s(o))]),
                                              ]
                                            );
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                    e._v(" "),
                                    t("RenderHtml", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: n.children.length > 0,
                                          expression: "item.children.length>0",
                                        },
                                      ],
                                      staticClass: "icon-right",
                                      attrs: { html: e.$icons().ChevronRight },
                                    }),
                                  ],
                                  1
                                )
                              : t(
                                  "a",
                                  e._b(
                                    { staticClass: "label-item" },
                                    "a",
                                    {
                                      href: n.data
                                        ? JSON.parse(n.data).url
                                        : "",
                                      target: n.target,
                                    },
                                    !1
                                  ),
                                  [
                                    t("div", { staticClass: "right-content" }, [
                                      t("i", {
                                        staticClass: "icons-cate",
                                        style: "background-image: url(".concat(
                                          null !== n.data
                                            ? JSON.parse(n.data).icon
                                            : "",
                                          ");"
                                        ),
                                      }),
                                      e._v(" "),
                                      t(
                                        "span",
                                        { staticClass: "single-link" },
                                        [e._v(e._s(n.name))]
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("RenderHtml", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: n.children.length > 0,
                                          expression: "item.children.length>0",
                                        },
                                      ],
                                      staticClass: "icon-right",
                                      attrs: { html: e.$icons().ChevronRight },
                                    }),
                                  ],
                                  1
                                ),
                          ]
                        );
                      }),
                      0
                    )
                  : e._e(),
                e._v(" "),
                t(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          e.childrenData.length > 0 &&
                          e.showByIndex === e.childrenData[0].parent_id,
                        expression:
                          "childrenData.length>0 && showByIndex===childrenData[0].parent_id",
                      },
                    ],
                    staticClass: "menu-tree-child columns m-0 box",
                  },
                  e._l(e.childrenData, function (e, n) {
                    return t("MenuTreeChild", {
                      key: n,
                      attrs: {
                        children: e.children,
                        name: e.name,
                        type: e.type,
                        url: e.data ? JSON.parse(e.data).url : "",
                      },
                    });
                  }),
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    499: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "p", function () {
          return v;
        }),
          n.d(t, "B", function () {
            return y;
          }),
          n.d(t, "r", function () {
            return w;
          }),
          n.d(t, "q", function () {
            return O;
          }),
          n.d(t, "s", function () {
            return _;
          }),
          n.d(t, "u", function () {
            return j;
          }),
          n.d(t, "x", function () {
            return S;
          }),
          n.d(t, "E", function () {
            return C;
          }),
          n.d(t, "b", function () {
            return k;
          }),
          n.d(t, "t", function () {
            return x;
          }),
          n.d(t, "g", function () {
            return P;
          }),
          n.d(t, "d", function () {
            return N;
          }),
          n.d(t, "C", function () {
            return D;
          }),
          n.d(t, "y", function () {
            return A;
          }),
          n.d(t, "z", function () {
            return E;
          }),
          n.d(t, "o", function () {
            return I;
          }),
          n.d(t, "e", function () {
            return M;
          }),
          n.d(t, "i", function () {
            return B;
          }),
          n.d(t, "n", function () {
            return R;
          }),
          n.d(t, "j", function () {
            return T;
          }),
          n.d(t, "k", function () {
            return $;
          }),
          n.d(t, "m", function () {
            return L;
          }),
          n.d(t, "l", function () {
            return J;
          }),
          n.d(t, "D", function () {
            return V;
          }),
          n.d(t, "h", function () {
            return z;
          }),
          n.d(t, "A", function () {
            return F;
          }),
          n.d(t, "f", function () {
            return H;
          }),
          n.d(t, "w", function () {
            return Q;
          }),
          n.d(t, "a", function () {
            return Y;
          }),
          n.d(t, "v", function () {
            return Z;
          }),
          n.d(t, "c", function () {
            return G;
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
        function l(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return d(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var i = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return i >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[i++] };
                },
                e: function (e) {
                  throw e;
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
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (c = e.done), e;
            },
            e: function (e) {
              (l = !0), (o = e);
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
        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
          return n;
        }
        function h(e) {
          var t = (function (input, e) {
            if ("object" !== Object(r.a)(input) || null === input) return input;
            var t = input[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(input, e || "default");
              if ("object" !== Object(r.a)(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(input);
          })(e, "string");
          return "symbol" === Object(r.a)(t) ? t : String(t);
        }
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function m(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  Object(c.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function v(e, option) {
          return (function (e, t) {
            return t.test(e);
          })(
            e,
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
        function y(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e4;
          return this.formatMoney(Math.round(e / t) * t);
        }
        function w(e) {
          return "" === e
            ? "0"
            : String(e)
                .split("")
                .reverse()
                .reduce(function (e, t, n) {
                  return (n % 3 ? t : t + ".") + e;
                });
        }
        function O(e) {
          var t = new Date(e),
            n = t.getDate(),
            r = t.getMonth() + 1,
            o = t.getFullYear(),
            c = (t.getHours() < 10 ? "0" : "") + t.getHours(),
            l = (t.getMinutes() < 10 ? "0" : "") + t.getMinutes();
          return ""
            .concat(n, "/")
            .concat(r, "/")
            .concat(o, " ")
            .concat(c, ":")
            .concat(l);
        }
        function _(e, t) {
          return t > 0 ? t : e;
        }
        function j(e, t) {
          for (
            var n = e.replaceAll(".", "").slice(t, t.length), r = "", i = 0;
            i < t;
            i++
          )
            r += "?";
          return w(r.concat(n));
        }
        function S(e, t) {
          return 0 === t || 0 === e ? "0" : (100 - t / (e / 100)).toFixed(0);
        }
        function C() {
          var data =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = "";
          for (var t in data) e += "".concat(t, "=").concat(data[t], "&");
          return e.slice(0, -1);
        }
        function k() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = { "Content-Type": "application/json" };
          return (
            e && (t = m(m({}, t), {}, { Authorization: "Bearer " + e })), t
          );
        }
        function x() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = new Date(),
            n = "" === e ? new Date() : new Date(e),
            r = Math.abs(t - n) / 1e3,
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
          for (var l in (Object.keys(s).forEach(function (e) {
            (o[e] = Math.floor(r / s[e])), (r -= o[e] * s[e]);
          }),
          o))
            if (o[l] > 0) {
              c = "".concat(o[l], " ").concat(l, " trước");
              break;
            }
          return c;
        }
        function P() {
          var content =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t =
              /((https|http):\/\/cellphones.com.vn)[-A-Za-z0-9+&#/%?=_|:,.]+/gm,
            n = [];
          if (content) {
            if (
              ((content = content.replace(
                /(?:\r\n|\r|\n)|(<br\s*\/?>)|(\\n)/gm,
                "$"
              )),
              t.test(content) && e)
            )
              for (var r = content.match(t), i = 0; i < r.length; i++) {
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
        function N() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function D(e, time) {
          var t = window.scrollY,
            n = null;
          null == time && (time = 500),
            (e = +e),
            (time = +time),
            window.requestAnimationFrame(function r(o) {
              var progress = o - (n = n || o);
              t < e
                ? window.scrollTo(0, ((e - t) * progress) / time + t)
                : window.scrollTo(0, t - ((t - e) * progress) / time),
                progress < time
                  ? window.requestAnimationFrame(r)
                  : window.scrollTo(0, e);
            });
        }
        function A(title, e) {
          var t,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            o =
              (null === (t = window) ||
              void 0 === t ||
              null === (t = t.__NUXT__) ||
              void 0 === t ||
              null === (t = t.state) ||
              void 0 === t
                ? void 0
                : t.province) || null;
          o &&
            ((n = o.regionName[o.province.company_id]), (r = o.province.name)),
            setTimeout(function () {
              var t = window.dataLayer || [];
              t.push({
                event: e,
                ecommerce: {
                  items: [{ item_name: title }],
                  region_cps: n,
                  province: r,
                },
                eventModel: { value: 0 },
              }),
                console.log("DataLayer:"),
                console.log(t);
            }, 1e3);
        }
        function E(e, t) {
          t[e];
          return Object(o.a)(t, [e].map(h));
        }
        function I(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function M(e, t, n) {
          return (46 === e || 152 === e) && t > 0 && n > 0;
        }
        function B(e, t) {
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
              c = e.filter(function (e, t, n) {
                return e.level !== o && 1 !== e.level ? ((o = e.level), e) : "";
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
                name: t,
              },
            }),
            n
          );
        }
        function R(path, e) {
          var t = "".concat("https://cellphones.com.vn/").concat(path);
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "".concat(t, "/#webpage"),
            name: "".concat(e.h1_title),
            url: "".concat(t),
            lastReviewed: "".concat(e.updated_at || ""),
            dateCreated: "".concat(e.created_at || ""),
            inLanguage: "vi-VN",
            description: "".concat(e.meta_description),
            mainEntity: {
              "@type": "WebPage",
              mainEntityOfPage: "".concat(t),
              headline: "".concat(e.h1_title),
              description: "".concat(e.meta_description),
              keywords: "".concat(e.meta_keywords),
              datePublished: "".concat(e.created_at || ""),
              dateModified: "".concat(e.updated_at || ""),
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
                "@id": "".concat(t, "/#webpage"),
                url: "".concat(
                  e.meta_image
                    ? "https://cdn2.cellphones.com.vn/200x/media/catalog/product" +
                        e.meta_image
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
        function T(e, path) {
          var t = [];
          if (!e.length > 0) return {};
          for (var i = 0; i < e.length; i++)
            if (Object.keys(e[i].children).length > 0) {
              var n = {
                "@type": "Question",
                name: e[i].content,
                acceptedAnswer: [],
              };
              n.acceptedAnswer.push({
                "@type": "Answer",
                text: "".concat(
                  Object.keys(e[i].children).length > 0
                    ? e[i].children[0].content
                    : " "
                ),
              }),
                t.push(n);
            }
          return t.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: t,
              }
            : {};
        }
        function $(e, path) {
          var t = [];
          if (!e.length > 0) return {};
          for (var i = 0; i < e.length; i++) {
            var n = {
              "@type": "Question",
              name: e[i].question,
              acceptedAnswer: [],
            };
            n.acceptedAnswer.push({ "@type": "Answer", text: e[i].answer }),
              t.push(n);
          }
          return t.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: t,
              }
            : {};
        }
        function L(e, t, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            d = e.general.attributes.manufacturer,
            h = e.filterable.stock_available_id,
            f = "";
          if (
            ((f =
              46 === h
                ? c || "InStock"
                : 152 === h
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !d)
          ) {
            var m,
              v = l(e.specification.basic);
            try {
              for (v.s(); !(m = v.n()).done; ) {
                var y = m.value;
                "phone_accessory_brands" === y.key && (d = y.value);
              }
            } catch (e) {
              v.e(e);
            } finally {
              v.f();
            }
          }
          var w,
            O = [],
            _ = {},
            j = l(r);
          try {
            for (j.s(); !(w = j.n()).done; ) {
              var S = w.value;
              O.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(S.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(S.customer.fullname),
                },
              });
            }
          } catch (e) {
            j.e(e);
          } finally {
            j.f();
          }
          return (
            O.length > 0 &&
              (_ = {
                review: O,
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
                name: "".concat(e.general.name),
                image:
                  "https://cdn2.cellphones.com.vn/200x/media/catalog/product".concat(
                    t.meta_image
                  ),
                description: "".concat(t.meta_description),
                sku: "".concat(e.general.sku),
                mpn: "".concat(e.general.sku),
                brand: { "@type": "Brand", name: "".concat(d) },
                offers: {
                  "@type": "Offer",
                  url: "https://cellphones.com.vn".concat(this.$route.path),
                  priceCurrency: "VND",
                  price: "".concat(
                    (e.filterable.special_price || e.filterable.price) - o
                  ),
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/".concat(f),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              _
            )
          );
        }
        function J(e) {
          for (
            var image = e.image,
              t = e.url,
              n = e.city,
              address = e.address,
              r = e.listStore,
              o = e.googleLink,
              c = e.phone,
              l = e.googleMap,
              d = address.split(",")[0].split(" "),
              h = d.slice(1, d.length).join(" "),
              f = l.lastIndexOf(n) + n.length,
              m = l.slice(f, f + 1 + 6),
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
                postalCode: m,
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
            "@id": "".concat(t, "#LocalBussiness"),
            url: o,
            telephone: c,
            priceRange: "VND",
            address: {
              "@type": "PostalAddress",
              streetAddress: h,
              addressLocality: n,
              postalCode: m,
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
        function V(e) {
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 50,
            r = (
              null === (t = document) || void 0 === t
                ? void 0
                : t.getElementById("cpsHeader")
            ).offsetHeight,
            o =
              document.querySelector("#".concat(e)).getBoundingClientRect()
                .top + window.scrollY;
          window.scrollTo({ top: o - n - r, behavior: "smooth" });
        }
        function z(e) {
          var t = (null == e ? void 0 : e.split(" ")) || [];
          if (t.length) return t[t.length - 1];
        }
        function F(e) {
          return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
            (e = (e = (e = (e = (e = (e = (e = e.replace(
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
        function H() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === t || (U(e) <= n && n <= U(t));
        }
        function U(e) {
          return "string" == typeof e && "" !== e
            ? new Date(e.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function Q(e) {
          e
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function Y(e) {
          var t =
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
          return this.$img.getImage(e, {
            provider: "CPS_IMG_PROVIDER",
            modifiers: { format: "webp", width: t, height: n, quality: r },
          }).url;
        }
        function Z() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "login";
          if (window) {
            var n = { path: "/", domain: "cellphones.com.vn" };
            this.$cookies.remove("token", n),
              this.$cookies.remove("USER", n),
              (window.location =
                "login" === t
                  ? ""
                      .concat("https://account.cellphones.com.vn/")
                      .concat(e ? "?redirect_uri=" + e : "")
                  : ""
                      .concat("https://account.cellphones.com.vn/", "register")
                      .concat(e ? "?redirect_uri=" + e : ""));
          }
        }
        function G(text) {
          return (function (text) {
            return text.replace(/(^|\s)\S/g, function (e) {
              return e.toUpperCase();
            });
          })(text);
        }
      }.call(this, n(93)));
    },
    500: function (e, t, n) {
      "use strict";
      var r = n(28),
        o = n(292),
        c = TypeError;
      e.exports = function (e) {
        if ((r(this), "string" === e || "default" === e)) e = "string";
        else if ("number" !== e) throw c("Incorrect hint");
        return o(this, e);
      };
    },
    501: function (e, t, n) {
      "use strict";
      var r = n(3),
        o = n(7),
        c = n(65),
        l = n(291),
        d = n(200),
        h = n(4),
        f = RangeError,
        m = String,
        v = Math.floor,
        y = o(d),
        w = o("".slice),
        O = o((1).toFixed),
        _ = function (e, t, n) {
          return 0 === t
            ? n
            : t % 2 == 1
            ? _(e, t - 1, n * e)
            : _(e * e, t / 2, n);
        },
        j = function (data, e, t) {
          for (var n = -1, r = t; ++n < 6; )
            (r += e * data[n]), (data[n] = r % 1e7), (r = v(r / 1e7));
        },
        S = function (data, e) {
          for (var t = 6, n = 0; --t >= 0; )
            (n += data[t]), (data[t] = v(n / e)), (n = (n % e) * 1e7);
        },
        C = function (data) {
          for (var e = 6, s = ""; --e >= 0; )
            if ("" !== s || 0 === e || 0 !== data[e]) {
              var t = m(data[e]);
              s = "" === s ? t : s + y("0", 7 - t.length) + t;
            }
          return s;
        };
      r(
        {
          target: "Number",
          proto: !0,
          forced:
            h(function () {
              return (
                "0.000" !== O(8e-5, 3) ||
                "1" !== O(0.9, 0) ||
                "1.25" !== O(1.255, 2) ||
                "1000000000000000128" !== O(0xde0b6b3a7640080, 0)
              );
            }) ||
            !h(function () {
              O({});
            }),
        },
        {
          toFixed: function (e) {
            var t,
              n,
              r,
              o,
              d = l(this),
              h = c(e),
              data = [0, 0, 0, 0, 0, 0],
              v = "",
              O = "0";
            if (h < 0 || h > 20) throw f("Incorrect fraction digits");
            if (d != d) return "NaN";
            if (d <= -1e21 || d >= 1e21) return m(d);
            if ((d < 0 && ((v = "-"), (d = -d)), d > 1e-21))
              if (
                ((n =
                  (t =
                    (function (e) {
                      for (var t = 0, n = e; n >= 4096; )
                        (t += 12), (n /= 4096);
                      for (; n >= 2; ) (t += 1), (n /= 2);
                      return t;
                    })(d * _(2, 69, 1)) - 69) < 0
                    ? d * _(2, -t, 1)
                    : d / _(2, t, 1)),
                (n *= 4503599627370496),
                (t = 52 - t) > 0)
              ) {
                for (j(data, 0, n), r = h; r >= 7; ) j(data, 1e7, 0), (r -= 7);
                for (j(data, _(10, r, 1), 0), r = t - 1; r >= 23; )
                  S(data, 1 << 23), (r -= 23);
                S(data, 1 << r), j(data, 1, 1), S(data, 2), (O = C(data));
              } else
                j(data, 0, n), j(data, 1 << -t, 0), (O = C(data) + y("0", h));
            return (O =
              h > 0
                ? v +
                  ((o = O.length) <= h
                    ? "0." + y("0", h - o) + O
                    : w(O, 0, o - h) + "." + w(O, o - h))
                : v + O);
          },
        }
      );
    },
    502: function (e, t, n) {
      "use strict";
      var r = n(201),
        o = n(293);
      r("toPrimitive"), o();
    },
    503: function (e, t, n) {
      "use strict";
      var r = n(26),
        o = n(39),
        c = n(500),
        l = n(13)("toPrimitive"),
        d = Date.prototype;
      r(d, l) || o(d, l, c);
    },
    504: function (e, t, n) {
      "use strict";
      function r(source, e) {
        if (null == source) return {};
        var t,
          i,
          n = (function (source, e) {
            if (null == source) return {};
            var t,
              i,
              n = {},
              r = Object.keys(source);
            for (i = 0; i < r.length; i++)
              (t = r[i]), e.indexOf(t) >= 0 || (n[t] = source[t]);
            return n;
          })(source, e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(source);
          for (i = 0; i < r.length; i++)
            (t = r[i]),
              e.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, t) &&
                  (n[t] = source[t]));
        }
        return n;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    821: function (e, t, n) {
      e.exports = {};
    },
  },
]);
