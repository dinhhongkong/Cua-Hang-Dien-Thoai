(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    1161: function (e, t, n) {
      "use strict";
      n.r(t);
      n(94), n(32), n(24), n(18), n(5), n(30), n(11), n(31);
      var r = n(0),
        o = n(6),
        c = (n(8), n(52), n(17), n(15)),
        l = n(499);
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
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
      var m = {
          name: "PopUp",
          data: function () {
            return { bannerPopup: {}, active: !1 };
          },
          computed: d({}, Object(c.d)("banner", ["banner"])),
          mounted: function () {
            var e = this;
            this.$cookies.get("POPUP_BANNER") ||
              setTimeout(
                Object(r.a)(
                  regeneratorRuntime.mark(function t() {
                    var n, r, o;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.getBannerByUDGraphql("pop_up_banner")
                            );
                          case 2:
                            (e.bannerPopup =
                              (null === (n = e.banner) || void 0 === n
                                ? void 0
                                : n.pop_up_banner) || {}),
                              Object.keys(e.bannerPopup).length > 0 &&
                                (e.$cookies.get("subscriber_popup") ||
                                  ((r = {
                                    maxAge: "2592000",
                                    path: "/",
                                    domain: "cellphones.com.vn",
                                  }),
                                  e.$cookies.set("subscriber_popup", !0, r)),
                                (o = {
                                  maxAge: "86400",
                                  path: "/",
                                  domain: "cellphones.com.vn",
                                }),
                                e.$cookies.set("POPUP_BANNER", !0, o)),
                              e.toggleActive();
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                7e3
              );
          },
          methods: d(
            d(
              { checkTimeBanner: l.f },
              Object(c.b)("banner", ["getBannerByUDGraphql"])
            ),
            {},
            {
              getImage: function (e) {
                return this.$device.isMobile ? e.path_mobile : e.path_desktop;
              },
              toggleActive: function () {
                this.active = !this.active;
              },
            }
          ),
        },
        v = (n(580), n(42)),
        component = Object(v.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return Object.entries(e.bannerPopup).length > 0
              ? t(
                  "div",
                  [
                    e._l(e.bannerPopup, function (n, r) {
                      return [
                        e.checkTimeBanner(n.schedule_from, n.schedule_to)
                          ? t(
                              "div",
                              {
                                key: r,
                                staticClass: "modal popup-banner",
                                class: { "is-active": e.active },
                              },
                              [
                                t("div", {
                                  staticClass: "modal-background",
                                  on: { click: e.toggleActive },
                                }),
                                e._v(" "),
                                t("div", { staticClass: "modal-content" }, [
                                  t(
                                    "a",
                                    e._b(
                                      { staticClass: "image" },
                                      "a",
                                      { href: n.url },
                                      !1
                                    ),
                                    [
                                      t("nuxt-img", {
                                        attrs: {
                                          src: "https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/".concat(
                                            e.getImage(n)
                                          ),
                                          alt: n.name,
                                          loading: "lazy",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  t("button", {
                                    staticClass: "modal-close is-large",
                                    attrs: { "aria-label": "close" },
                                    on: { click: e.toggleActive },
                                  }),
                                ]),
                              ]
                            )
                          : e._e(),
                      ];
                    }),
                  ],
                  2
                )
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    544: function (e, t, n) {
      e.exports = {};
    },
    580: function (e, t, n) {
      "use strict";
      n(544);
    },
  },
]);
