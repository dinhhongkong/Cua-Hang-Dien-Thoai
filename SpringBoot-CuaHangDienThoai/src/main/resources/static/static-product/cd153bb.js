(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    1028: function (e, t, n) {
      "use strict";
      n(764);
    },
    1358: function (e, t, n) {
      "use strict";
      n.r(t);
      n(32), n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var o = n(6),
        r = (n(52), n(15));
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = {
          name: "PopupChangeRegion",
          data: function () {
            return { dropdownActive: !1, suggestedRegion: !0 };
          },
          computed: l(
            l(
              l({}, Object(r.d)("region", ["regionId"])),
              Object(r.d)("province", ["province"])
            ),
            {},
            {
              region: function () {
                return 7 === this.regionId
                  ? "Hồ Chí Minh"
                  : 1 === this.regionId
                  ? "Miền Bắc"
                  : "Miền Trung";
              },
            }
          ),
          created: function () {
            var e = this;
            this.$cookies.get("POPUP_CHOOSE-STORE") ||
              setTimeout(function () {
                e.suggestedRegion = !1;
              }, 5e3);
          },
          methods: l(
            l(
              l({}, Object(r.c)("province", ["toggleModalChangeProvince"])),
              Object(r.b)("region", ["handleChangeRegion"])
            ),
            {},
            {
              changeRegionId: function (e, t) {
                t !== this.regionId &&
                  (console.log(e + "----" + t),
                  this.handleChangeRegion({ currentId: e, regionId: t })),
                  (this.dropdownActive = !this.dropdownActive);
              },
              hidePopupSuggestRegion: function () {
                this.suggestedRegion = !0;
                this.$cookies.set("POPUP_CHOOSE-STORE", !0, {
                  maxAge: "604800",
                  path: "/",
                  domain: "cellphones.com.vn",
                });
              },
              lockScroll: function () {
                document
                  .getElementsByTagName("html")[0]
                  .classList.add("no-scroll");
              },
            }
          ),
        },
        h = (n(1028), n(42)),
        component = Object(h.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "dropdown",
                attrs: { id: "dropdown-region", role: "menu" },
              },
              [
                t("div", { staticClass: "dropdown-trigger" }, [
                  t(
                    "div",
                    {
                      staticClass: "box-local-store button__change-province",
                      style:
                        2 === e.province.id && e.$device.isMobile
                          ? "width: 123px"
                          : "",
                      on: {
                        click: function (t) {
                          e.toggleModalChangeProvince({ condition: !0 }),
                            e.lockScroll();
                        },
                      },
                    },
                    [
                      t(
                        "div",
                        { staticClass: "box-icon" },
                        [
                          t("RenderHtml", {
                            attrs: { html: e.$icons().MapMarket },
                          }),
                        ],
                        1
                      ),
                      e._v(" "),
                      t("div", { staticClass: "box-content" }, [
                        t(
                          "p",
                          {
                            staticClass:
                              "title is-flex is-justify-content-space-between",
                          },
                          [
                            e._v("Xem giá tại\n          "),
                            t(
                              "svg",
                              {
                                attrs: {
                                  fill: "#FFFFFF",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 448 512",
                                  width: "10",
                                  height: "10",
                                },
                              },
                              [
                                t("path", {
                                  attrs: {
                                    d: "M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        t("p", [
                          t(
                            "span",
                            {
                              style:
                                2 === e.province.id ? "font-size: 10px" : "",
                            },
                            [e._v(e._s(e.province.name))]
                          ),
                          e._v(" \n        "),
                        ]),
                      ]),
                    ]
                  ),
                ]),
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
    764: function (e, t, n) {
      e.exports = {};
    },
  },
]);
