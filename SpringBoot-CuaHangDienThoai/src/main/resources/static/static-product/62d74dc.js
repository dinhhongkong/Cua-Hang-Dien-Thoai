(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    1315: function (e, t, n) {
      "use strict";
      n.r(t);
      n(32), n(17), n(24), n(18), n(30), n(31);
      var r = n(0),
        o = n(6),
        c = (n(5), n(11), n(8), n(15));
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
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
          name: "TimerBanner",
          props: { typePage: { type: String, default: "" } },
          data: function () {
            return {
              toggle_flash_banner: !0,
              flash_voucher: [],
              show_flash_banner: !1,
              flash_banner: {},
            };
          },
          computed: h({}, Object(c.d)("json-server", ["jsonData"])),
          mounted: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.getFlashVoucher();
                      case 2:
                        return (t.next = 4), e.enableFlashVoucher();
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: h(
            h({}, Object(c.b)("json-server", ["getDataJsonServerGraphql"])),
            {},
            {
              getFlashVoucher: function () {
                var e = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.getDataJsonServerGraphql({
                                idJson: "flash_timer_banner",
                                ud: "flash_timer_banner",
                              })
                            );
                          case 2:
                            e.jsonData.flash_timer_banner[e.typePage] &&
                              (e.flash_voucher =
                                e.jsonData.flash_timer_banner.listFlashVoucher);
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              enableFlashVoucher: function () {
                var e = this,
                  t = new Date().getTime();
                console.log(t),
                  this.flash_voucher.length > 0 &&
                    this.flash_voucher.forEach(function (n) {
                      var r = e.convertStringToTimestamp(n.time.start),
                        o = e.convertStringToTimestamp(n.time.finish);
                      e.isBetweenTime(t, r, o) &&
                        ((e.flash_banner = n), (e.show_flash_banner = !0));
                    });
              },
              isBetweenTime: function (time, e, t) {
                return time >= e && time <= t;
              },
              convertStringToTimestamp: function (e) {
                return new Date(e).getTime();
              },
              toggleBanner: function () {
                this.toggle_flash_banner = !this.toggle_flash_banner;
              },
            }
          ),
        },
        _ = (n(986), n(42)),
        component = Object(_.a)(
          f,
          function () {
            var e = this,
              t = e._self._c;
            return e.show_flash_banner
              ? t("div", [
                  t(
                    "div",
                    {
                      class: e.toggle_flash_banner ? "" : "left",
                      attrs: { id: "fixed-banner" },
                    },
                    [
                      e.toggle_flash_banner
                        ? [
                            t("nuxt-img", {
                              staticClass: "desktop",
                              attrs: {
                                width: "1200",
                                height: "auto",
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                src: e.flash_banner.image_d,
                                alt: e.flash_banner.name,
                              },
                            }),
                            e._v(" "),
                            t("nuxt-img", {
                              staticClass: "mobile",
                              attrs: {
                                width: "640",
                                height: "auto",
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                src: e.flash_banner.image_m,
                                alt: e.flash_banner.name,
                              },
                            }),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "btn-close is-flex",
                                on: {
                                  click: function (t) {
                                    return e.toggleBanner();
                                  },
                                },
                              },
                              [
                                e._v("\n        Ẩn "),
                                t("RenderHtml", {
                                  attrs: { html: e.$icons().ChevronDown },
                                }),
                              ],
                              1
                            ),
                          ]
                        : t(
                            "div",
                            {
                              staticClass: "btn-open",
                              on: {
                                click: function (t) {
                                  return e.toggleBanner();
                                },
                              },
                            },
                            [
                              t("p", [
                                e._v("Voucher chớp nhoáng - giảm đến 300k"),
                              ]),
                              e._v(" "),
                              t("RenderHtml", {
                                attrs: { html: e.$icons().ChevronUp },
                              }),
                            ],
                            1
                          ),
                    ],
                    2
                  ),
                  e._v(" "),
                  t("div", { staticClass: "fixed-banner-clear" }),
                ])
              : t("div");
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    724: function (e, t, n) {
      e.exports = {};
    },
    986: function (e, t, n) {
      "use strict";
      n(724);
    },
  },
]);
