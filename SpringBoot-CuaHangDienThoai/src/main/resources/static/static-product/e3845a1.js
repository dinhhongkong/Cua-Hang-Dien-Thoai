(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    1025: function (t, e, r) {
      "use strict";
      r(761);
    },
    1355: function (t, e, r) {
      "use strict";
      r.r(e);
      r(32), r(17), r(24), r(30), r(31);
      var n = r(0),
        c = r(6),
        l = (r(8), r(78), r(5), r(11), r(48), r(77), r(10), r(18), r(15));
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var h = {
          name: "Breadcrumbs",
          props: {
            listBreadcrumb: {
              type: Array,
              default: function () {
                return [];
              },
            },
            lastOne: { type: String, default: "" },
          },
          data: function () {
            return { breadcrumbsArr: [], listUrl: [], homeUrl: "" };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? o(Object(r), !0).forEach(function (e) {
                    Object(c.a)(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : o(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          })({}, Object(l.d)("product", ["filterData"])),
          mounted: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.filterUniqueLevel();
                      case 2:
                        (t.breadcrumbsArr = e.sent),
                          (t.breadcrumbsArr = t.breadcrumbsArr.sort(function (
                            a,
                            b
                          ) {
                            return a.level - b.level;
                          })),
                          t.createUrlBaseOnLevel(),
                          (t.homeUrl = "https://cellphones.com.vn/");
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            createUrlBaseOnLevel: function () {
              var t = this,
                e = "".concat(this.homeUrl);
              this.breadcrumbsArr &&
                this.breadcrumbsArr.forEach(function (r, n) {
                  r.uri.includes("https://cellphones.com.vn")
                    ? t.listUrl.push(r.uri)
                    : ((e += "".concat(0 !== n ? "/" : "").concat(r.uri)),
                      t.listUrl.push(
                        "https://cellphones.com.vn/".concat(e, ".html")
                      ));
                });
            },
            filterUniqueLevel: function () {
              var t = 0;
              if (this.listBreadcrumb)
                return this.listBreadcrumb.filter(function (e, r, n) {
                  return e.level && e.level !== t && 1 !== e.level
                    ? ((t = e.level), e)
                    : "";
                });
            },
          },
        },
        v = h,
        f = (r(1025), r(42)),
        component = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "bannerTopHead", attrs: { id: "breadcrumbs" } },
              [
                e("div", { staticClass: "block-breadcrumbs affix" }, [
                  e("div", { staticClass: "cps-container" }, [
                    e(
                      "ul",
                      [
                        e("li", [
                          e("div", [
                            e(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "12",
                                  height: "10.633",
                                  viewBox: "0 0 12 10.633",
                                },
                              },
                              [
                                e("path", {
                                  attrs: {
                                    id: "home",
                                    d: "M13.2,9.061H12.1v3.965a.6.6,0,0,1-.661.661H8.793V9.721H6.15v3.965H3.507a.6.6,0,0,1-.661-.661V9.061h-1.1c-.4,0-.311-.214-.04-.494L7,3.259a.634.634,0,0,1,.936,0l5.3,5.307c.272.281.356.495-.039.495Z",
                                    transform: "translate(-1.471 -3.053)",
                                    fill: "#d70018",
                                  },
                                }),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          e(
                            "a",
                            t._b(
                              { staticClass: "button__home" },
                              "a",
                              { href: t.homeUrl },
                              !1
                            ),
                            [t._v("Trang chủ")]
                          ),
                        ]),
                        t._v(" "),
                        t._l(t.breadcrumbsArr, function (r, n) {
                          return e(
                            "li",
                            { key: n },
                            [
                              e("RenderHtml", {
                                attrs: { html: t.$icons().ChevronRight },
                              }),
                              t._v(" "),
                              e(
                                "a",
                                t._b(
                                  { staticClass: "button__breadcrumb-item" },
                                  "a",
                                  { href: t.listUrl[n] },
                                  !1
                                ),
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(r.name) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ],
                            1
                          );
                        }),
                        t._v(" "),
                        t.lastOne
                          ? e(
                              "li",
                              [
                                e("RenderHtml", {
                                  attrs: { html: t.$icons().ChevronRight },
                                }),
                                t._v(" "),
                                e("p", [
                                  t._v(
                                    "\n            " +
                                      t._s(t.lastOne) +
                                      "\n          "
                                  ),
                                ]),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      2
                    ),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "clear" }),
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
    761: function (t, e, r) {
      t.exports = {};
    },
  },
]);
