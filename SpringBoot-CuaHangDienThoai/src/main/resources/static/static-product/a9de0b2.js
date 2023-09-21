(window.webpackJsonp = window.webpackJsonp || []).push([
  [54, 145, 149, 180, 205, 207, 209, 220],
  {
    1304: function (e, t, n) {
      "use strict";
      n.r(t);
      n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var r = n(0),
        o = n(6),
        c = (n(8), n(52), n(32), n(16), n(15)),
        l = n(499),
        d = n(203);
      function m(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = {
          name: "PopupEmail",
          data: function () {
            return { active: !1, email: "", phone: "" };
          },
          computed: h(
            h({}, Object(c.d)("province", ["province"])),
            Object(c.d)("login", ["user"])
          ),
          mounted: function () {
            var e = this;
            this.$nextTick(
              Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, title;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), e.$cookies.get("subscriber_popup")
                          );
                        case 2:
                          if (((t.t0 = t.sent), t.t0)) {
                            t.next = 5;
                            break;
                          }
                          t.t0 = !1;
                        case 5:
                          (n = t.t0),
                            e.user.loggedIn && (n = !0),
                            n ||
                              ((title =
                                document.getElementsByTagName("title")[0]
                                  .innerHTML),
                              setTimeout(function () {
                                e.pushSimpleEventToGA(
                                  title,
                                  "view_popup_email",
                                  {
                                    regionName:
                                      12869 === e.province.company_id
                                        ? "Miền Nam_7"
                                        : "Miền Bắc_1",
                                    provinceName: e.province.name,
                                  }
                                ),
                                  e.toggleActive();
                                e.$cookies.set("subscriber_popup", !0, {
                                  maxAge: "2592000",
                                  path: "/",
                                  domain: "cellphones.com.vn",
                                });
                              }, 3e4));
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )
            );
          },
          methods: h(
            h(
              { customRegex: l.p, pushSimpleEventToGA: d.c },
              Object(c.b)("loader", ["switchLoading"])
            ),
            {},
            {
              toggleActive: function () {
                this.active = !this.active;
              },
              submitForm: function () {
                var e = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function t() {
                    var n, r, o, c, l, d;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n =
                                  "https://05ae8dd7.sibforms.com/serve/MUIEAMlsGYN6mum00SQjZXbjgHqYZXv-iaNNgokkZriAJl5Yu5r1hVX7zDRWUN4BtfnaeTpy6SfhQmateLbj_dtph9dcQlY-bNIb9KZ2tbg7w2mOcev_e5-kju0SMozlSVCD3slmRZ-52junyg2YZB16lQoHy7Y4sutWopngT_L7DBgNOpuUmxUHVeeeOUcwkLIhalUUh8vOBuYw?isAjax=1"),
                                (r =
                                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),
                                (o = !0),
                                "" !== e.email && !1 !== r.test(e.email))
                              ) {
                                t.next = 7;
                                break;
                              }
                              return (
                                (o = !1),
                                e.$alertMessage({
                                  message: "Bạn chưa điền đúng email",
                                  icon: "CircleExclamation",
                                  type: "error",
                                }),
                                t.abrupt("return", !1)
                              );
                            case 7:
                              if (
                                (console.log("Check email:" + o),
                                "" === e.phone ||
                                  e.customRegex(e.phone, "phone"))
                              ) {
                                t.next = 12;
                                break;
                              }
                              return (
                                (o = !1),
                                e.$alertMessage({
                                  message: "Bạn chưa điền đúng số điện thoại",
                                  icon: "CircleExclamation",
                                  type: "error",
                                }),
                                t.abrupt("return", !1)
                              );
                            case 12:
                              if (
                                (console.log("Check phone:" + o),
                                (c = new FormData()).append("EMAIL", e.email),
                                c.append("SMS__COUNTRY_CODE", "+84"),
                                c.append("SMS", e.phone),
                                c.append("email_address_check", ""),
                                c.append("locale", "en"),
                                !0 !== o)
                              ) {
                                t.next = 34;
                                break;
                              }
                              return (
                                e.switchLoading(!0),
                                (t.prev = 21),
                                (t.next = 24),
                                e.$axios.post(n, c)
                              );
                            case 24:
                              200 === (l = t.sent).status &&
                                (e.$alertMessage({
                                  message: l.data.message,
                                  icon: "CircleCheck",
                                  type: "success",
                                }),
                                (d = {
                                  maxAge: 31536e5,
                                  path: "/",
                                  domain: "cellphones.com.vn",
                                }),
                                e.$cookies.set("subscriber_popup", !0, d),
                                e.toggleActive()),
                                e.switchLoading(!1),
                                (t.next = 34);
                              break;
                            case 29:
                              (t.prev = 29),
                                (t.t0 = t.catch(21)),
                                "Xin lỗi! Số điện thoại hoặc email của quý khách đã từng đăng ký chương trình này.",
                                e.$alertMessage({
                                  message:
                                    "Xin lỗi! Số điện thoại hoặc email của quý khách đã từng đăng ký chương trình này.",
                                  icon: "CircleExclamation",
                                  type: "warning",
                                }),
                                e.switchLoading(!1);
                            case 34:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[21, 29]]
                    );
                  })
                )();
              },
            }
          ),
        },
        v = (n(978), n(42)),
        component = Object(v.a)(
          f,
          function () {
            var e = this,
              t = e._self._c;
            return e.active
              ? t("div", { attrs: { id: "subscriberEmail" } }, [
                  t("div", { staticClass: "subscriber-popup box-banner" }, [
                    t("div", { staticClass: "subscriber-popup-body" }, [
                      t(
                        "button",
                        {
                          staticClass: "cancel-button-top",
                          on: {
                            click: function (t) {
                              return e.toggleActive();
                            },
                          },
                        },
                        [
                          t("RenderHtml", {
                            staticClass: "icon",
                            attrs: { html: e.$icons().XMark },
                          }),
                        ],
                        1
                      ),
                      e._v(" "),
                      t("div", { attrs: { id: "subscriber-form" } }, [
                        t("p", { staticClass: "subscribe-title" }, [
                          e._v("ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI"),
                        ]),
                        e._v(" "),
                        t("p", { staticClass: "subscribe-title text-red" }, [
                          e._v("(*) Nhận Ngay Voucher 10%"),
                        ]),
                        e._v(" "),
                        t("div", { staticClass: "control mb-3" }, [
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.email,
                                expression: "email",
                              },
                            ],
                            staticClass: "input subscriber-form-email",
                            attrs: {
                              id: "inputEmail",
                              type: "text",
                              name: "EMAIL",
                              autocomplete: "off",
                              placeholder: "Email *",
                              required: "",
                            },
                            domProps: { value: e.email },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.email = t.target.value);
                              },
                            },
                          }),
                        ]),
                        e._v(" "),
                        t("div", { staticClass: "control mb-3" }, [
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.phone,
                                expression: "phone",
                              },
                            ],
                            staticClass: "input subscriber-form-phone",
                            attrs: {
                              id: "inputPhone",
                              type: "tel",
                              name: "SMS",
                              autocomplete: "off",
                              maxlength: "10",
                              placeholder: "Số điện thoại",
                            },
                            domProps: { value: e.phone },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.phone = t.target.value);
                              },
                            },
                          }),
                        ]),
                        e._v(" "),
                        e._m(0),
                        e._v(" "),
                        t("div", { staticClass: "group-btn" }, [
                          t(
                            "button",
                            {
                              staticClass:
                                "subscriber-form-submit button button-default",
                              on: {
                                click: function (t) {
                                  return e.submitForm();
                                },
                              },
                            },
                            [e._v("\n            ĐĂNG KÝ NGAY\n          ")]
                          ),
                          e._v(" "),
                          t(
                            "button",
                            {
                              staticClass:
                                "subscriber-form-submit button cancel-button",
                              on: {
                                click: function (t) {
                                  return e.toggleActive();
                                },
                              },
                            },
                            [e._v("\n            Bữa khác nha!\n          ")]
                          ),
                        ]),
                      ]),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "subscriber-popup-header" }, [
                      t(
                        "div",
                        { staticClass: "subscriber-header-image" },
                        [
                          t("nuxt-img", {
                            attrs: {
                              src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/cps-ant-voucher-pop-up-email.png",
                              alt: "Pop up Email",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  e._v(" "),
                  t("div", {
                    staticClass: "header-overlay",
                    class: e.active ? "active" : "",
                    on: {
                      click: function (t) {
                        return e.toggleActive();
                      },
                    },
                  }),
                ])
              : e._e();
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "checkbox mb-3 disabled" }, [
                t("label", { staticClass: "subscriber-form-label-rule" }, [
                  t("input", {
                    staticClass: "subscriber-form-rule",
                    attrs: {
                      id: "OPT_IN",
                      checked: "",
                      disabled: "",
                      type: "checkbox",
                      value: "1",
                      name: "OPT_IN",
                    },
                  }),
                  e._v(" "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://cellphones.com.vn/chinh-sach-giao-hang",
                        target: "_blank",
                        rel: "noopener",
                      },
                    },
                    [
                      e._v(
                        "Tôi đồng ý với\n              điều khoản của\n              CellphoneS"
                      ),
                    ]
                  ),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "c9c63e08",
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
            return k;
          }),
          n.d(t, "x", function () {
            return x;
          }),
          n.d(t, "E", function () {
            return j;
          }),
          n.d(t, "b", function () {
            return C;
          }),
          n.d(t, "t", function () {
            return S;
          }),
          n.d(t, "g", function () {
            return A;
          }),
          n.d(t, "d", function () {
            return N;
          }),
          n.d(t, "C", function () {
            return P;
          }),
          n.d(t, "y", function () {
            return E;
          }),
          n.d(t, "z", function () {
            return M;
          }),
          n.d(t, "o", function () {
            return D;
          }),
          n.d(t, "e", function () {
            return I;
          }),
          n.d(t, "i", function () {
            return T;
          }),
          n.d(t, "n", function () {
            return $;
          }),
          n.d(t, "j", function () {
            return L;
          }),
          n.d(t, "k", function () {
            return R;
          }),
          n.d(t, "m", function () {
            return B;
          }),
          n.d(t, "l", function () {
            return U;
          }),
          n.d(t, "D", function () {
            return Y;
          }),
          n.d(t, "h", function () {
            return H;
          }),
          n.d(t, "A", function () {
            return V;
          }),
          n.d(t, "f", function () {
            return F;
          }),
          n.d(t, "w", function () {
            return Z;
          }),
          n.d(t, "a", function () {
            return G;
          }),
          n.d(t, "v", function () {
            return Q;
          }),
          n.d(t, "c", function () {
            return X;
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
        function m(e) {
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
        function h(e, t) {
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
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? h(Object(n), !0).forEach(function (t) {
                  Object(c.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
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
        function k(e, t) {
          for (
            var n = e.replaceAll(".", "").slice(t, t.length), r = "", i = 0;
            i < t;
            i++
          )
            r += "?";
          return w(r.concat(n));
        }
        function x(e, t) {
          return 0 === t || 0 === e ? "0" : (100 - t / (e / 100)).toFixed(0);
        }
        function j() {
          var data =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = "";
          for (var t in data) e += "".concat(t, "=").concat(data[t], "&");
          return e.slice(0, -1);
        }
        function C() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = { "Content-Type": "application/json" };
          return (
            e && (t = f(f({}, t), {}, { Authorization: "Bearer " + e })), t
          );
        }
        function S() {
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
        function A() {
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
        function P(e, time) {
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
        function E(title, e) {
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
        function M(e, t) {
          t[e];
          return Object(o.a)(t, [e].map(m));
        }
        function D(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function I(e, t, n) {
          return (46 === e || 152 === e) && t > 0 && n > 0;
        }
        function T(e, t) {
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
        function $(path, e) {
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
        function L(e, path) {
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
        function R(e, path) {
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
        function B(e, t, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            d = e.general.attributes.manufacturer,
            m = e.filterable.stock_available_id,
            h = "";
          if (
            ((h =
              46 === m
                ? c || "InStock"
                : 152 === m
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !d)
          ) {
            var f,
              v = l(e.specification.basic);
            try {
              for (v.s(); !(f = v.n()).done; ) {
                var y = f.value;
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
            k = l(r);
          try {
            for (k.s(); !(w = k.n()).done; ) {
              var x = w.value;
              O.push({
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
          } catch (e) {
            k.e(e);
          } finally {
            k.f();
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
                  availability: "https://schema.org/".concat(h),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              _
            )
          );
        }
        function U(e) {
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
              m = d.slice(1, d.length).join(" "),
              h = l.lastIndexOf(n) + n.length,
              f = l.slice(h, h + 1 + 6),
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
                postalCode: f,
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
              streetAddress: m,
              addressLocality: n,
              postalCode: f,
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
        function Y(e) {
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
        function H(e) {
          var t = (null == e ? void 0 : e.split(" ")) || [];
          if (t.length) return t[t.length - 1];
        }
        function V(e) {
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
        function F() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === t || (z(e) <= n && n <= z(t));
        }
        function z(e) {
          return "string" == typeof e && "" !== e
            ? new Date(e.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function Z(e) {
          e
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function G(e) {
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
        function Q() {
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
        function X(text) {
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
        m = n(4),
        h = RangeError,
        f = String,
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
        k = function (data, e, t) {
          for (var n = -1, r = t; ++n < 6; )
            (r += e * data[n]), (data[n] = r % 1e7), (r = v(r / 1e7));
        },
        x = function (data, e) {
          for (var t = 6, n = 0; --t >= 0; )
            (n += data[t]), (data[t] = v(n / e)), (n = (n % e) * 1e7);
        },
        j = function (data) {
          for (var e = 6, s = ""; --e >= 0; )
            if ("" !== s || 0 === e || 0 !== data[e]) {
              var t = f(data[e]);
              s = "" === s ? t : s + y("0", 7 - t.length) + t;
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
                "0.000" !== O(8e-5, 3) ||
                "1" !== O(0.9, 0) ||
                "1.25" !== O(1.255, 2) ||
                "1000000000000000128" !== O(0xde0b6b3a7640080, 0)
              );
            }) ||
            !m(function () {
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
              m = c(e),
              data = [0, 0, 0, 0, 0, 0],
              v = "",
              O = "0";
            if (m < 0 || m > 20) throw h("Incorrect fraction digits");
            if (d != d) return "NaN";
            if (d <= -1e21 || d >= 1e21) return f(d);
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
                for (k(data, 0, n), r = m; r >= 7; ) k(data, 1e7, 0), (r -= 7);
                for (k(data, _(10, r, 1), 0), r = t - 1; r >= 23; )
                  x(data, 1 << 23), (r -= 23);
                x(data, 1 << r), k(data, 1, 1), x(data, 2), (O = j(data));
              } else
                k(data, 0, n), k(data, 1 << -t, 0), (O = j(data) + y("0", m));
            return (O =
              m > 0
                ? v +
                  ((o = O.length) <= m
                    ? "0." + y("0", m - o) + O
                    : w(O, 0, o - m) + "." + w(O, o - m))
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
    716: function (e, t, n) {
      e.exports = {};
    },
    978: function (e, t, n) {
      "use strict";
      n(716);
    },
  },
]);
