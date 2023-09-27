(window.webpackJsonp = window.webpackJsonp || []).push([
  [100, 145, 149, 180, 205, 207, 209, 220],
  {
    1108: function (t, e, n) {
      "use strict";
      n(818);
    },
    1405: function (t, e, n) {
      "use strict";
      n.r(e);
      n(17), n(24), n(18), n(30), n(11), n(31);
      var r = n(6),
        o = (n(5), n(33), n(36), n(52), n(15)),
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
      function m(t) {
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
      var d = {
          name: "ListComment",
          components: {
            TextareaComment: function () {
              return n.e(50).then(n.bind(null, 1406));
            },
          },
          props: {
            commentType: { type: String, default: "product", required: !0 },
          },
          computed: m(
            m(
              {},
              Object(o.d)("comment", [
                "commentList",
                "lastRecord",
                "pidId",
                "prevHits",
                "totalComments",
                "parentId",
                "page",
              ])
            ),
            Object(o.d)("product", ["productId"])
          ),
          methods: m(
            m(
              m(
                {
                  scrollToSmoothly: c.C,
                  handleDiffPostedDate: c.t,
                  customRegex: c.p,
                  convertHtmlToString: c.g,
                },
                Object(o.b)("comment", ["getComments", "getCommentsGraphql"])
              ),
              Object(o.c)("comment", ["setParentId"])
            ),
            {},
            {
              scrollToTextarea: function (t) {
                var e = this;
                this.setParentId(t);
                setTimeout(function () {
                  var element = document.getElementById("text-area-" + t),
                    n = window.scrollY || document.documentElement.scrollTop,
                    r = element.getBoundingClientRect().top + n - 104;
                  e.scrollToSmoothly(r, 300);
                }, 100);
              },
            }
          ),
        },
        f = (n(1108), n(42)),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "block-comment__box-list-comment" },
              [
                e("p", { staticStyle: { opacity: "0", height: "0" } }, [
                  t._v(
                    "\n    Xin mời để lại câu hỏi, CellphoneS sẽ trả lời lại trong 1h, các câu hỏi sau 22h - 8h sẽ được trả lời vào sáng hôm\n    sau\n  "
                  ),
                ]),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "list-comment",
                    attrs: { id: "page_comment_list" },
                  },
                  [
                    t.commentList.length > 0 ? e("hr") : t._e(),
                    t._v(" "),
                    t._l(t.commentList, function (n) {
                      var r;
                      return e(
                        "div",
                        { key: JSON.stringify(n), staticClass: "item-comment" },
                        [
                          1 === n.is_shown
                            ? e(
                                "div",
                                { staticClass: "item-comment__box-cmt" },
                                [
                                  e(
                                    "div",
                                    { staticClass: "box-cmt__box-info" },
                                    [
                                      e("div", { staticClass: "box-info" }, [
                                        e(
                                          "div",
                                          { staticClass: "box-info__avatar" },
                                          [
                                            n.is_admin
                                              ? e(
                                                  "em",
                                                  { staticClass: "icon-cps" },
                                                  [
                                                    e("RenderHtml", {
                                                      attrs: {
                                                        html: t.$icons()
                                                          .LogoCPS,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : e("span", [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        null ===
                                                          (r =
                                                            n.customer
                                                              .fullname) ||
                                                          void 0 === r
                                                          ? void 0
                                                          : r.charAt(0)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "p",
                                          { staticClass: "box-info__name" },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(n.customer.fullname) +
                                                "\n            "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n.is_admin
                                          ? e(
                                              "span",
                                              { staticClass: "box-info__tag" },
                                              [t._v("QTV")]
                                            )
                                          : t._e(),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "box-time-cmt" },
                                        [
                                          e("RenderHtml", {
                                            attrs: {
                                              html: t.$icons().ClockTime,
                                            },
                                          }),
                                          t._v(
                                            " " +
                                              t._s(
                                                t.handleDiffPostedDate(
                                                  n.created_at
                                                )
                                              ) +
                                              "\n          "
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "box-cmt__box-question" },
                                    [
                                      t._l(
                                        t.convertHtmlToString(n.content),
                                        function (line, n) {
                                          return e(
                                            "div",
                                            { key: n, staticClass: "content" },
                                            [e("p", [t._v(t._s(line))])]
                                          );
                                        }
                                      ),
                                      t._v(" "),
                                      e(
                                        "button",
                                        {
                                          staticClass:
                                            "btn-rep-cmt respondent button__cmt-rep",
                                          on: {
                                            click: function (e) {
                                              return t.scrollToTextarea(n.id);
                                            },
                                          },
                                        },
                                        [
                                          e("RenderHtml", {
                                            attrs: {
                                              html: t.$icons().ReplyComment,
                                            },
                                          }),
                                          t._v(" Trả lời\n          "),
                                        ],
                                        1
                                      ),
                                    ],
                                    2
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "item-comment__box-rep-comment",
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "list-rep-comment" },
                                        [
                                          t._l(n.children, function (r) {
                                            var o;
                                            return [
                                              e(
                                                "div",
                                                {
                                                  key: JSON.stringify(r),
                                                  staticClass:
                                                    "item-rep-comment",
                                                },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "box-cmt__box-info",
                                                    },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "box-info",
                                                        },
                                                        [
                                                          e(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "box-info__avatar",
                                                            },
                                                            [
                                                              r.is_admin
                                                                ? e(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "icon-cps",
                                                                    },
                                                                    [
                                                                      e(
                                                                        "RenderHtml",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              html: t.$icons()
                                                                                .LogoCPS,
                                                                            },
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  )
                                                                : e("span", [
                                                                    t._v(
                                                                      "\n                        " +
                                                                        t._s(
                                                                          null ===
                                                                            (o =
                                                                              r
                                                                                .customer
                                                                                .fullname) ||
                                                                            void 0 ===
                                                                              o
                                                                            ? void 0
                                                                            : o.charAt(
                                                                                0
                                                                              )
                                                                        ) +
                                                                        "\n                      "
                                                                    ),
                                                                  ]),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          e(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "box-info__name",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                      " +
                                                                  t._s(
                                                                    r.customer
                                                                      .fullname
                                                                  ) +
                                                                  "\n                    "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          r.is_admin
                                                            ? e(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "box-info__tag",
                                                                },
                                                                [t._v("QTV")]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "box-time-cmt",
                                                        },
                                                        [
                                                          e("RenderHtml", {
                                                            attrs: {
                                                              html: t.$icons()
                                                                .ClockTime,
                                                            },
                                                          }),
                                                          t._v(
                                                            " " +
                                                              t._s(
                                                                t.handleDiffPostedDate(
                                                                  r.created_at
                                                                )
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "box-cmt__box-question",
                                                    },
                                                    [
                                                      t._l(
                                                        t.convertHtmlToString(
                                                          r.content,
                                                          r.is_admin
                                                        ),
                                                        function (line, t) {
                                                          return e(
                                                            "div",
                                                            {
                                                              key: t,
                                                              staticClass:
                                                                "content",
                                                            },
                                                            [
                                                              e("RenderHtml", {
                                                                attrs: {
                                                                  html: line,
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          );
                                                        }
                                                      ),
                                                      t._v(" "),
                                                      e(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn-rep-cmt respondent button__cmt-rep",
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return t.scrollToTextarea(
                                                                n.id
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          e("RenderHtml", {
                                                            attrs: {
                                                              html: t.$icons()
                                                                .ReplyComment,
                                                            },
                                                          }),
                                                          t._v(
                                                            " Trả lời\n                  "
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    2
                                                  ),
                                                ]
                                              ),
                                            ];
                                          }),
                                        ],
                                        2
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n.id === t.parentId
                                    ? e(
                                        "div",
                                        { staticClass: "form_reply_wrap" },
                                        [
                                          e("TextareaComment", {
                                            attrs: {
                                              "is-sub-content": !0,
                                              "parent-id": n.id,
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ]
                              )
                            : t._e(),
                        ]
                      );
                    }),
                  ],
                  2
                ),
                t._v(" "),
                e(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          t.commentList.length < t.totalComments &&
                          t.page <= 10,
                        expression:
                          "commentList.length < totalComments && page<=10",
                      },
                    ],
                    staticClass: "btn-show-more button__cmt-showmore",
                    on: {
                      click: function (e) {
                        return t.getCommentsGraphql({
                          type: t.commentType,
                          productId: t.productId,
                          urlComment: "https://cellphones.com.vn".concat(
                            t.$route.path
                          ),
                        });
                      },
                    },
                  },
                  [
                    t._v(
                      "\n    Xem thêm " +
                        t._s(t.totalComments - t.commentList.length) +
                        " bình luận "
                    ),
                    e("RenderHtml", {
                      staticClass: "is-inline-block",
                      attrs: { html: t.$icons().ChevronDown },
                    }),
                  ],
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
            return O;
          }),
          n.d(e, "u", function () {
            return C;
          }),
          n.d(e, "x", function () {
            return x;
          }),
          n.d(e, "E", function () {
            return j;
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
            return T;
          }),
          n.d(e, "C", function () {
            return D;
          }),
          n.d(e, "y", function () {
            return A;
          }),
          n.d(e, "z", function () {
            return E;
          }),
          n.d(e, "o", function () {
            return I;
          }),
          n.d(e, "e", function () {
            return R;
          }),
          n.d(e, "i", function () {
            return L;
          }),
          n.d(e, "n", function () {
            return $;
          }),
          n.d(e, "j", function () {
            return N;
          }),
          n.d(e, "k", function () {
            return H;
          }),
          n.d(e, "m", function () {
            return M;
          }),
          n.d(e, "l", function () {
            return B;
          }),
          n.d(e, "D", function () {
            return V;
          }),
          n.d(e, "h", function () {
            return z;
          }),
          n.d(e, "A", function () {
            return F;
          }),
          n.d(e, "f", function () {
            return Q;
          }),
          n.d(e, "w", function () {
            return U;
          }),
          n.d(e, "a", function () {
            return Y;
          }),
          n.d(e, "v", function () {
            return J;
          }),
          n.d(e, "c", function () {
            return Z;
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
                if ("string" == typeof t) return m(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return m(t, e);
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
        function m(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function d(t) {
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
          return _(r.concat(n));
        }
        function x(t, e) {
          return 0 === e || 0 === t ? "0" : (100 - e / (t / 100)).toFixed(0);
        }
        function j() {
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
        function T() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function D(t, time) {
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
          return Object(o.a)(e, [t].map(d));
        }
        function I(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function R(t, e, n) {
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
        function $(path, t) {
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
        function N(t, path) {
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
        function H(t, path) {
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
            m = t.general.attributes.manufacturer,
            d = t.filterable.stock_available_id,
            f = "";
          if (
            ((f =
              46 === d
                ? c || "InStock"
                : 152 === d
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !m)
          ) {
            var h,
              v = l(t.specification.basic);
            try {
              for (v.s(); !(h = v.n()).done; ) {
                var y = h.value;
                "phone_accessory_brands" === y.key && (m = y.value);
              }
            } catch (t) {
              v.e(t);
            } finally {
              v.f();
            }
          }
          var _,
            w = [],
            O = {},
            C = l(r);
          try {
            for (C.s(); !(_ = C.n()).done; ) {
              var x = _.value;
              w.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(x.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(x.customer.fullname),
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
              (O = {
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
                brand: { "@type": "Brand", name: "".concat(m) },
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
              O
            )
          );
        }
        function B(t) {
          for (
            var image = t.image,
              e = t.url,
              n = t.city,
              address = t.address,
              r = t.listStore,
              o = t.googleLink,
              c = t.phone,
              l = t.googleMap,
              m = address.split(",")[0].split(" "),
              d = m.slice(1, m.length).join(" "),
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
              streetAddress: d,
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
        function Q() {
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
        function U(t) {
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
        function J() {
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
        function Z(text) {
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
        m = n(200),
        d = n(4),
        f = RangeError,
        h = String,
        v = Math.floor,
        y = o(m),
        _ = o("".slice),
        w = o((1).toFixed),
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
        x = function (data, t) {
          for (var e = 6, n = 0; --e >= 0; )
            (n += data[e]), (data[e] = v(n / t)), (n = (n % t) * 1e7);
        },
        j = function (data) {
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
            d(function () {
              return (
                "0.000" !== w(8e-5, 3) ||
                "1" !== w(0.9, 0) ||
                "1.25" !== w(1.255, 2) ||
                "1000000000000000128" !== w(0xde0b6b3a7640080, 0)
              );
            }) ||
            !d(function () {
              w({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              n,
              r,
              o,
              m = l(this),
              d = c(t),
              data = [0, 0, 0, 0, 0, 0],
              v = "",
              w = "0";
            if (d < 0 || d > 20) throw f("Incorrect fraction digits");
            if (m != m) return "NaN";
            if (m <= -1e21 || m >= 1e21) return h(m);
            if ((m < 0 && ((v = "-"), (m = -m)), m > 1e-21))
              if (
                ((n =
                  (e =
                    (function (t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(m * O(2, 69, 1)) - 69) < 0
                    ? m * O(2, -e, 1)
                    : m / O(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (C(data, 0, n), r = d; r >= 7; ) C(data, 1e7, 0), (r -= 7);
                for (C(data, O(10, r, 1), 0), r = e - 1; r >= 23; )
                  x(data, 1 << 23), (r -= 23);
                x(data, 1 << r), C(data, 1, 1), x(data, 2), (w = j(data));
              } else
                C(data, 0, n), C(data, 1 << -e, 0), (w = j(data) + y("0", d));
            return (w =
              d > 0
                ? v +
                  ((o = w.length) <= d
                    ? "0." + y("0", d - o) + w
                    : _(w, 0, o - d) + "." + _(w, o - d))
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
        m = Date.prototype;
      r(m, l) || o(m, l, c);
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
    818: function (t, e, n) {
      t.exports = {};
    },
  },
]);
