/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [47, 71, 140],
  {
    1299: function (t, e, n) {
      "use strict";
      n.r(e);
      n(17), n(24), n(18), n(30), n(11), n(31);
      var r = n(6),
        o = n(0),
        l = (n(8), n(5), n(33), n(36), n(32), n(15));
      function c(t, e) {
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
            ? c(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "Header",
          components: {
            BannerTopHead: function () {
              return Promise.resolve().then(n.bind(null, 855));
            },
            HeaderSearch: function () {
              return n.e(104).then(n.bind(null, 1363));
            },
            MenuTree: function () {
              return n.e(52).then(n.bind(null, 1408));
            },
            PopupChangeRegion: function () {
              return n.e(99).then(n.bind(null, 1358));
            },
            ButtonLogin: function () {
              return n.e(98).then(n.bind(null, 1357));
            },
            Login: function () {
              return n.e(108).then(n.bind(null, 1413));
            },
          },
          props: { accessToken: { type: String, default: null } },
          data: function () {
            return {
              toggleMenu: !1,
              cartUrl: "https://cellphones.com.vn/cart/",
              cpsMain: "https://cellphones.com.vn/",
            };
          },
          fetch: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.getMenuDataGraphql({ id: 5, ud: "main" })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          computed: d(
            d(
              d(
                d(
                  d(
                    d({}, Object(l.d)("region", ["regionId"])),
                    Object(l.d)("login", ["user"])
                  ),
                  Object(l.d)("province", ["province"])
                ),
                Object(l.d)("search-graphql", ["productResultQuickSearch"])
              ),
              Object(l.d)("cart", ["itemsInCart"])
            ),
            {},
            {
              headerIndex: function () {
                return this.$device.isMobile && "index" === this.$route.name
                  ? "full"
                  : "";
              },
              phoneBaseOn: function () {
                return 12869 === this.province.company_id
                  ? { tel: "18002097", phone: "1800.2097" }
                  : { tel: "18002044", phone: "1800.2044" };
              },
            }
          ),
          mounted: function () {
            var t = this.$cookies.get("items_in_cart") || 0;
            this.setItemsInCart(t);
          },
          methods: d(
            d({}, Object(l.b)("menu", ["getMenuDataGraphql"])),
            Object(l.b)("cart", ["setItemsInCart"])
          ),
        },
        h = (n(974), n(42)),
        component = Object(h.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { attrs: { id: "cpsHeaderOutLine" } },
              [
                e(
                  "header",
                  {
                    class: "cps-header bannerTopHead sticky ".concat(
                      t.headerIndex
                    ),
                    attrs: { id: "cpsHeader" },
                  },
                  [
                    e("BannerTopHead"),
                    t._v(" "),
                    e("div", { staticClass: "cps-container nav-container" }, [
                      e(
                        "nav",
                        { staticClass: "cps-navbar" },
                        [
                          e(
                            "a",
                            t._b(
                              { staticClass: "navbar-brand button__home" },
                              "a",
                              { href: t.cpsMain },
                              !1
                            ),
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "box-logo cps-navbar__logo logo__desktop navbar-item",
                                },
                                [
                                  e(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink":
                                          "http://www.w3.org/1999/xlink",
                                        viewBox: "0 0 269.231 50",
                                      },
                                    },
                                    [
                                      e("defs", [
                                        e(
                                          "pattern",
                                          {
                                            attrs: {
                                              id: "patternLogo",
                                              preserveAspectRatio:
                                                "xMidYMid slice",
                                              width: "100%",
                                              height: "100%",
                                              viewBox: "0 0 530 95",
                                            },
                                          },
                                          [
                                            e("image", {
                                              attrs: {
                                                width: "530",
                                                height: "95",
                                                "xlink:href":
                                                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII=",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("rect", {
                                        attrs: {
                                          id: "header__logo--bg",
                                          width: "269.231",
                                          height: "50",
                                          fill: "url(#patternLogo)",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "box-logo cps-navbar__logo logo__mobile navbar-item",
                                },
                                [
                                  e(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink":
                                          "http://www.w3.org/1999/xlink",
                                        viewBox: "0 0 120 120",
                                      },
                                    },
                                    [
                                      e("title", [t._v("Logo CellphoneS")]),
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
                                              e("image", {
                                                attrs: {
                                                  width: "120",
                                                  height: "120",
                                                  "xlink:href":
                                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTFGN0JGRkVDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFGN0JGRkZDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MUY3QkZGQ0MwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MUY3QkZGREMwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgpTqXEAAAhlSURBVHja7JwLbBTH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",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "a",
                            {
                              staticClass: "header-item btn-menu button__menu",
                              attrs: { href: "#" },
                              on: {
                                click: function (e) {
                                  t.toggleMenu = !t.toggleMenu;
                                },
                              },
                            },
                            [
                              e("div", { staticClass: "about__box-icon" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 26.99 26.99",
                                    },
                                  },
                                  [
                                    e("defs", [
                                      e("style", [
                                        t._v(
                                          ".cls-1 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                  stroke-width: 1.8px;\n                }"
                                        ),
                                      ]),
                                    ]),
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
                                            e("line", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                x1: "7.06",
                                                y1: "7.52",
                                                x2: "19.92",
                                                y2: "7.52",
                                              },
                                            }),
                                            t._v(" "),
                                            e("line", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                x1: "7.06",
                                                y1: "13.49",
                                                x2: "19.92",
                                                y2: "13.49",
                                              },
                                            }),
                                            t._v(" "),
                                            e("line", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                x1: "7.06",
                                                y1: "19.47",
                                                x2: "11.95",
                                                y2: "19.47",
                                              },
                                            }),
                                            t._v(" "),
                                            e("rect", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                x: "0.9",
                                                y: "0.9",
                                                width: "25.19",
                                                height: "25.19",
                                                rx: "4.71",
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
                              t._m(0),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.toggleMenu,
                                  expression: "toggleMenu",
                                },
                              ],
                              staticClass: "menu-container",
                              attrs: { id: "menu-main" },
                            },
                            [e("MenuTree")],
                            1
                          ),
                          t._v(" "),
                          e("PopupChangeRegion", {
                            class:
                              t.productResultQuickSearch.length > 0
                                ? "expand"
                                : "",
                          }),
                          t._v(" "),
                          e("HeaderSearch", {
                            staticClass: "cps-navbar__search",
                          }),
                          t._v(" "),
                          e(
                            "a",
                            t._b(
                              {
                                staticClass:
                                  "header-item about-contact button__contact-header",
                              },
                              "a",
                              { href: "tel:".concat(t.phoneBaseOn.tel) },
                              !1
                            ),
                            [
                              e("div", { staticClass: "about__box-icon" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 30.83 30.94",
                                      width: "24",
                                      height: "24",
                                    },
                                  },
                                  [
                                    e("defs", [
                                      e("style", [
                                        t._v(
                                          ".cls-1 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                  stroke-width: 1.8px;\n                }"
                                        ),
                                      ]),
                                    ]),
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
                                            e("path", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                d: "M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z",
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
                                e("p", { staticClass: "title" }, [
                                  t._v("Gọi mua hàng"),
                                  e("br"),
                                  t._v(" "),
                                  e("strong", [
                                    t._v(t._s(t.phoneBaseOn.phone)),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "a",
                            {
                              staticClass:
                                "header-item about-store button__link-address",
                              attrs: {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://cellphones.com.vn/dia-chi-cua-hang",
                              },
                            },
                            [
                              e("div", { staticClass: "about__box-icon" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 23.22 30.36",
                                      width: "25",
                                      height: "25",
                                    },
                                  },
                                  [
                                    e("defs", [
                                      e("style", [
                                        t._v(
                                          ".cls-1 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                  stroke-width: 1.8px;\n                }"
                                        ),
                                      ]),
                                    ]),
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
                                            e("path", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                d: "M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                d: "M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z",
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
                              t._m(1),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "a",
                            {
                              staticClass:
                                "header-item about-delivery-tracking button__link-to-history",
                              attrs: {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://cellphones.com.vn/tra-cuu-don-hang-online",
                              },
                            },
                            [
                              e("div", { staticClass: "about__box-icon" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 44.22 25.85",
                                      height: "24",
                                    },
                                  },
                                  [
                                    e("defs", [
                                      e("style", [
                                        t._v(
                                          ".cls-1, .cls-2, .cls-3 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n\n                .cls-1 {\n                  stroke-width: 1.66px;\n                }\n\n                .cls-2 {\n                  stroke-width: 1.66px;\n                }\n\n                .cls-3 {\n                  stroke-width: 1.8px;\n                }"
                                        ),
                                      ]),
                                    ]),
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
                                                cx: "7.66",
                                                cy: "22.02",
                                                r: "3",
                                              },
                                            }),
                                            t._v(" "),
                                            e("circle", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                cx: "24.79",
                                                cy: "22.02",
                                                r: "3",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                d: "M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                d: "M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                d: "M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                d: "M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08",
                                              },
                                            }),
                                            t._v(" "),
                                            e("line", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                x1: "43.32",
                                                y1: "6.97",
                                                x2: "32.57",
                                                y2: "6.97",
                                              },
                                            }),
                                            t._v(" "),
                                            e("line", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                x1: "40.5",
                                                y1: "11.05",
                                                x2: "32.57",
                                                y2: "11.05",
                                              },
                                            }),
                                            t._v(" "),
                                            e("line", {
                                              staticClass: "cls-3",
                                              attrs: {
                                                x1: "42.09",
                                                y1: "16.33",
                                                x2: "38.07",
                                                y2: "16.33",
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
                              t._m(2),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "a",
                            t._b(
                              {
                                staticClass:
                                  "header-item about-cart button__link-to-cart",
                              },
                              "a",
                              { href: t.cartUrl },
                              !1
                            ),
                            [
                              e("div", { staticClass: "about__box-icon" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 28.95 35.07",
                                      width: "25",
                                      height: "25",
                                    },
                                  },
                                  [
                                    e("defs", [
                                      e("style", [
                                        t._v(
                                          ".cls-1 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                  stroke-width: 1.8px;\n                }"
                                        ),
                                      ]),
                                    ]),
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
                                            e("path", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                d: "M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19",
                                              },
                                            }),
                                            t._v(" "),
                                            e("path", {
                                              staticClass: "cls-1",
                                              attrs: {
                                                d: "M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z",
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
                                t._m(3),
                                t._v(" "),
                                e("span", { attrs: { id: "items_in_cart" } }, [
                                  t._v(t._s(t.itemsInCart)),
                                ]),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "login-btn" },
                            [e("ButtonLogin")],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e("div", { staticClass: "clear" }),
                t._v(" "),
                e("div", {
                  staticClass: "header-overlay",
                  class: t.toggleMenu ? "active" : "",
                  on: {
                    click: function (e) {
                      t.toggleMenu = !t.toggleMenu;
                    },
                  },
                }),
                t._v(" "),
                e("Login"),
              ],
              1
            );
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "about__box-content" }, [
                t("p", [this._v("Danh mục")]),
              ]);
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "about__box-content" }, [
                e("p", { staticClass: "title" }, [
                  t._v("Cửa hàng"),
                  e("br"),
                  t._v("gần bạn"),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "about__box-content" }, [
                e("p", { staticClass: "title" }, [
                  t._v("Tra cứu"),
                  e("br"),
                  t._v("đơn hàng"),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("p", { staticClass: "title" }, [
                t._v("Giỏ "),
                e("br"),
                t._v("hàng"),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { BannerTopHead: n(855).default });
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
          l,
          c = Object.freeze({
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
          })(l || (l = {}));
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
        function v() {
          for (var s = 0, i = 0, t = arguments.length; i < t; i++)
            s += arguments[i].length;
          var e = Array(s),
            n = 0;
          for (i = 0; i < t; i++)
            for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
              e[n] = a[r];
          return e;
        }
        var h,
          A = function (t) {
            return t
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/\s+/g, "-")
              .toLowerCase();
          },
          w = function (t, e, n) {
            var r, l, c;
            if (t && !t.destroyed) {
              var d =
                (null === (r = e.composedPath) || void 0 === r
                  ? void 0
                  : r.call(e)) || e.path;
              if ((null == e ? void 0 : e.target) && d) {
                var v = Array.from(t.slides),
                  h = Array.from(d);
                if (
                  v.includes(e.target) ||
                  h.some(function (t) {
                    return v.includes(t);
                  })
                ) {
                  var w = t.clickedIndex,
                    f = Number(
                      null ===
                        (c =
                          null === (l = t.clickedSlide) || void 0 === l
                            ? void 0
                            : l.dataset) || void 0 === c
                        ? void 0
                        : c.swiperSlideIndex
                    ),
                    y = Number.isInteger(f) ? f : null;
                  n(o.ClickSlide, w, y), n(A(o.ClickSlide), w, y);
                }
              }
            }
          },
          f = function (t, e) {
            d.forEach(function (n) {
              t.on(n, function () {
                for (
                  var t = arguments, r = [], o = 0;
                  o < arguments.length;
                  o++
                )
                  r[o] = t[o];
                e.apply(void 0, v([n], r));
                var l = A(n);
                l !== n && e.apply(void 0, v([l], r));
              });
            });
          },
          y = "instanceName";
        function m(t, e) {
          var n = function (t, e) {
              var n,
                r,
                o,
                l,
                c =
                  null ===
                    (r =
                      null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.attrs) || void 0 === r
                    ? void 0
                    : r[e];
              return void 0 !== c
                ? c
                : null ===
                    (l =
                      null === (o = t.data) || void 0 === o
                        ? void 0
                        : o.attrs) || void 0 === l
                ? void 0
                : l[A(e)];
            },
            d = function (element, t, e) {
              return t.arg || n(e, y) || element.id || r.SwiperInstance;
            },
            v = function (element, t, e) {
              var n = d(element, t, e);
              return e.context[n] || null;
            },
            h = function (t) {
              return t.value || e;
            },
            m = function (input) {
              return [!0, void 0, null, ""].includes(input);
            },
            C = function (t) {
              var e,
                n,
                r =
                  (null === (e = t.data) || void 0 === e ? void 0 : e.on) ||
                  (null === (n = t.componentOptions) || void 0 === n
                    ? void 0
                    : n.listeners);
              return function (t) {
                for (
                  var e, n = arguments, o = [], l = 1;
                  l < arguments.length;
                  l++
                )
                  o[l - 1] = n[l];
                var c = null === (e = r) || void 0 === e ? void 0 : e[t];
                c && c.fns.apply(c, o);
              };
            };
          return {
            bind: function (element, t, e) {
              -1 === element.className.indexOf(c.containerClass) &&
                (element.className +=
                  (element.className ? " " : "") + c.containerClass),
                element.addEventListener("click", function (n) {
                  var r = C(e),
                    o = v(element, t, e);
                  w(o, n, r);
                });
            },
            inserted: function (element, e, n) {
              var r = n.context,
                l = h(e),
                c = d(element, e, n),
                v = C(n),
                A = r,
                w = null == A ? void 0 : A[c];
              (w && !w.destroyed) ||
                ((w = new t(element, l)), (A[c] = w), f(w, v), v(o.Ready, w));
            },
            componentUpdated: function (element, t, e) {
              var r,
                o,
                c,
                d,
                A,
                w,
                f,
                y,
                C,
                I,
                O,
                k,
                S = n(e, l.AutoUpdate);
              if (m(S)) {
                var x = v(element, t, e);
                if (x) {
                  var j = h(t).loop;
                  j &&
                    (null ===
                      (o =
                        null === (r = x) || void 0 === r
                          ? void 0
                          : r.loopDestroy) ||
                      void 0 === o ||
                      o.call(r)),
                    null === (c = null == x ? void 0 : x.update) ||
                      void 0 === c ||
                      c.call(x),
                    null ===
                      (A =
                        null === (d = x.navigation) || void 0 === d
                          ? void 0
                          : d.update) ||
                      void 0 === A ||
                      A.call(d),
                    null ===
                      (f =
                        null === (w = x.pagination) || void 0 === w
                          ? void 0
                          : w.render) ||
                      void 0 === f ||
                      f.call(w),
                    null ===
                      (C =
                        null === (y = x.pagination) || void 0 === y
                          ? void 0
                          : y.update) ||
                      void 0 === C ||
                      C.call(y),
                    j &&
                      (null ===
                        (O =
                          null === (I = x) || void 0 === I
                            ? void 0
                            : I.loopCreate) ||
                        void 0 === O ||
                        O.call(I),
                      null === (k = null == x ? void 0 : x.update) ||
                        void 0 === k ||
                        k.call(x));
                }
              }
            },
            unbind: function (element, t, e) {
              var r,
                o = n(e, l.AutoDestroy);
              if (m(o)) {
                var c = v(element, t, e);
                c &&
                  c.initialized &&
                  (null === (r = null == c ? void 0 : c.destroy) ||
                    void 0 === r ||
                    r.call(
                      c,
                      m(n(e, l.DeleteInstanceOnDestroy)),
                      m(n(e, l.CleanupStylesOnDestroy))
                    ));
              }
            },
          };
        }
        function C(t) {
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
              (e[l.AutoUpdate] = { type: Boolean, default: !0 }),
              (e[l.AutoDestroy] = { type: Boolean, default: !0 }),
              (e[l.DeleteInstanceOnDestroy] = {
                type: Boolean,
                required: !1,
                default: !0,
              }),
              (e[l.CleanupStylesOnDestroy] = {
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
                return this.swiperOptions.wrapperClass || c.wrapperClass;
              },
            },
            methods: {
              handleSwiperClick: function (t) {
                w(this.swiperInstance, t, this.$emit.bind(this));
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
                var t, e, n, r, o, c, d, v;
                this[l.AutoUpdate] &&
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
                    (c =
                      null === (o = this.swiperInstance.pagination) ||
                      void 0 === o
                        ? void 0
                        : o.render) ||
                    void 0 === c ||
                    c.call(o),
                  null ===
                    (v =
                      null === (d = this.swiperInstance.pagination) ||
                      void 0 === d
                        ? void 0
                        : d.update) ||
                    void 0 === v ||
                    v.call(d));
              },
              destroySwiper: function () {
                var t, e;
                this[l.AutoDestroy] &&
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
                      this[l.DeleteInstanceOnDestroy],
                      this[l.CleanupStylesOnDestroy]
                    ));
              },
              initSwiper: function () {
                (this.swiperInstance = new t(this.$el, this.swiperOptions)),
                  f(this.swiperInstance, this.$emit.bind(this)),
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
                  staticClass: c.containerClass,
                  on: { click: this.handleSwiperClick },
                },
                [
                  this.$slots[h.ParallaxBg],
                  t("div", { class: this.wrapperClass }, this.$slots.default),
                  this.$slots[h.Pagination],
                  this.$slots[h.PrevButton],
                  this.$slots[h.NextButton],
                  this.$slots[h.Scrollbar],
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
        })(h || (h = {}));
        var I = n.extend({
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
                    : e.slideClass) || c.slideClass
                );
              },
            },
            methods: {
              update: function () {
                var t,
                  e = this.$parent;
                e[l.AutoUpdate] &&
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
          O = function (t) {
            var e = function (n, o) {
              if (!e.installed) {
                var l = C(t);
                o &&
                  (l.options.props.defaultOptions.default = function () {
                    return o;
                  }),
                  n.component(r.SwiperComponent, l),
                  n.component(r.SwiperSlideComponent, I),
                  n.directive(r.SwiperDirective, m(t, o)),
                  (e.installed = !0);
              }
            };
            return e;
          };
        function k(t) {
          var e;
          return (
            ((e = { version: "4.1.1", install: O(t), directive: m(t) })[
              r.SwiperComponent
            ] = C(t)),
            (e[r.SwiperSlideComponent] = I),
            e
          );
        }
        var S = k(e),
          x = S.version,
          j = S.install,
          M = S.directive,
          D = S.Swiper,
          _ = S.SwiperSlide;
        (t.Swiper = D),
          (t.SwiperSlide = _),
          (t.default = S),
          (t.directive = M),
          (t.install = j),
          (t.version = x),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e, n(513), n(2));
    },
    541: function (t, e, n) {
      t.exports = {};
    },
    577: function (t, e, n) {
      "use strict";
      n(541);
    },
    712: function (t, e, n) {
      t.exports = {};
    },
    855: function (t, e, n) {
      "use strict";
      n.r(e);
      n(10), n(32), n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var r = n(6),
        o = n(508),
        l = n(15);
      function c(t, e) {
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
      var d = {
          name: "BannerTopHead",
          components: { Swiper: o.Swiper, SwiperSlide: o.SwiperSlide },
          data: function () {
            return {
              cpsMain: "https://cellphones.com.vn/",
              optionsSlide: {
                slidesPerGroup: 1,
                slidesPerColumn: 1,
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerColumnFill: "row",
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                autoplay: { delay: 5e3, pauseOnMouseEnter: !0 },
                breakpoints: {
                  1: { slidesPerView: 1 },
                  540: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                },
              },
            };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? c(Object(n), !0).forEach(function (e) {
                    Object(r.a)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : c(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({}, Object(l.d)("banner", ["banner"])),
        },
        v = d,
        h = (n(577), n(42)),
        component = Object(h.a)(
          v,
          function () {
            var t,
              e = this,
              n = e._self._c;
            return (null === (t = e.banner.banner_top) || void 0 === t
              ? void 0
              : t.length) > 0
              ? n("div", { attrs: { id: "bannerTopHead" } }, [
                  n(
                    "div",
                    { staticClass: "cps-container" },
                    [
                      n(
                        "Swiper",
                        {
                          attrs: { options: e.optionsSlide },
                          scopedSlots: e._u(
                            [
                              {
                                key: "button-next",
                                fn: function () {
                                  return [
                                    n("div", {
                                      staticClass: "swiper-button-next",
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                              {
                                key: "button-prev",
                                fn: function () {
                                  return [
                                    n("div", {
                                      staticClass: "swiper-button-prev",
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                            ],
                            null,
                            !1,
                            2048286921
                          ),
                        },
                        e._l(e.banner.banner_top, function (t) {
                          return n("SwiperSlide", { key: t.path_mobile }, [
                            n(
                              "a",
                              e._b(
                                {},
                                "a",
                                {
                                  href: "".concat(
                                    t.url
                                      ? "".concat(e.cpsMain).concat(t.url)
                                      : "#"
                                  ),
                                },
                                !1
                              ),
                              [
                                n("nuxt-img", {
                                  attrs: {
                                    src: "https://cdn2.cellphones.com.vn/x30,webp,q100/https://dashboard.cellphones.com.vn/storage/".concat(
                                      t.path_mobile
                                    ),
                                    alt: t.name,
                                    loading: "lazy",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]);
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ])
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    974: function (t, e, n) {
      "use strict";
      n(712);
    },
  },
]);
