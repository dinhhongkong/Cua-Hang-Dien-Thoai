(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    1026: function (t, e, n) {
      "use strict";
      n(762);
    },
    1356: function (t, e, n) {
      "use strict";
      n.r(e);
      n(32), n(518), n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var r = n(6),
        c = n(0),
        o = (n(8), n(15));
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
      function h(t) {
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
          name: "FooterMobile",
          data: function () {
            return { regionId: 7 };
          },
          fetch: function () {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.getDataFooter();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          computed: h(
            h({}, Object(o.d)("footer", ["dataFooter"])),
            Object(o.d)("province", ["province"])
          ),
          mounted: function () {
            this.regionId = 12869 === this.province.company_id ? 7 : 1;
          },
          methods: h({}, Object(o.b)("footer", ["getDataFooter"])),
        },
        v = (n(1026), n(42)),
        component = Object(v.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "footer-mobile" } }, [
              e("div", { staticClass: "footer-mobile-banner" }),
              t._v(" "),
              e("div", { staticClass: "footer-mobile-container" }, [
                e("div", { staticClass: "content-block" }, [
                  e("p", { staticClass: "box-title" }, [
                    t._v("Tra cứu thông tin"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e("div", { staticClass: "list-check-info" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "item-check-info check-smember cta-smember",
                          attrs: { href: "https://cellphones.com.vn/smember" },
                        },
                        [
                          e(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 17.52 17.52",
                              },
                            },
                            [
                              e("defs", [
                                e("style", [
                                  t._v(
                                    ".cls-1, .cls-2 {\n                  fill: none;\n                  stroke: #231f20;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n\n                .cls-2 {\n                  stroke-width: 1.07px;\n                }"
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
                                      e("rect", {
                                        staticClass: "cls-1",
                                        attrs: {
                                          x: "6.36",
                                          y: "5.47",
                                          width: "4.81",
                                          height: "4.81",
                                          rx: "2.4",
                                        },
                                      }),
                                      t._v(" "),
                                      e("circle", {
                                        staticClass: "cls-2",
                                        attrs: {
                                          cx: "8.76",
                                          cy: "8.76",
                                          r: "8.22",
                                        },
                                      }),
                                      t._v(" "),
                                      e("path", {
                                        staticClass: "cls-2",
                                        attrs: {
                                          d: "M12.55,12H5a1.33,1.33,0,0,0-1.32,1.33v1.88a8.19,8.19,0,0,0,10.22,0V13.31A1.33,1.33,0,0,0,12.55,12Z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e("p", [t._v("Smember")]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "item-check-info check-rank-smember",
                          attrs: {
                            href: "https://cellphones.com.vn/smember/hang-thanh-vien",
                          },
                        },
                        [
                          e(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "15.4",
                                viewBox: "0 0 22 15.4",
                              },
                            },
                            [
                              e(
                                "g",
                                {
                                  attrs: {
                                    id: "Group_217",
                                    "data-name": "Group 217",
                                    transform: "translate(-162 -147)",
                                  },
                                },
                                [
                                  e("path", {
                                    attrs: {
                                      id: "v-card",
                                      d: "M20.9,4.8H1.1A1.1,1.1,0,0,0,0,5.9V19.1a1.1,1.1,0,0,0,1.1,1.1H20.9A1.1,1.1,0,0,0,22,19.1V5.9a1.1,1.1,0,0,0-1.1-1.1ZM13.09,9.2H18.7v1.1H13.09Zm6.71,4.4H13.09V12.5H19.8Z",
                                      transform: "translate(162 142.2)",
                                      fill: "#d70018",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "text",
                                    {
                                      attrs: {
                                        id: "S",
                                        transform: "translate(168.5 158)",
                                        fill: "#fff",
                                        "font-size": "9",
                                        "font-family": "Roboto-Bold, Roboto",
                                        "font-weight": "700",
                                      },
                                    },
                                    [
                                      e(
                                        "tspan",
                                        { attrs: { x: "-2.854", y: "0" } },
                                        [t._v("S")]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e("p", [t._v("Điểm Smember")]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "item-check-info check-history",
                          attrs: {
                            href: "https://cellphones.com.vn/smember/lich-su-mua-hang",
                          },
                        },
                        [
                          e(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 17 22.42",
                              },
                            },
                            [
                              e("defs", [
                                e("style", [
                                  t._v(
                                    ".cls-1, .cls-2 {\n                  fill: none;\n                  stroke: #231f20;\n                  stroke-linecap: round;\n                }\n\n                .cls-1 {\n                  stroke-linejoin: round;\n                  stroke-width: 1.07px;\n                }\n\n                .cls-2 {\n                  stroke-miterlimit: 10;\n                  stroke-width: 1.5px;\n                }"
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
                                          cx: "12.44",
                                          cy: "16.6",
                                          r: "3.56",
                                        },
                                      }),
                                      t._v(" "),
                                      e("path", {
                                        staticClass: "cls-1",
                                        attrs: {
                                          d: "M5.4,5.67V2.91A2.37,2.37,0,0,1,7.76.54h0a2.37,2.37,0,0,1,2.37,2.37V5.67",
                                        },
                                      }),
                                      t._v(" "),
                                      e("path", {
                                        staticClass: "cls-1",
                                        attrs: {
                                          d: "M7.62,18.25H3A2.44,2.44,0,0,1,.54,15.63l.85-10.9A.76.76,0,0,1,2.15,4H13.37a.77.77,0,0,1,.77.7L14.7,12",
                                        },
                                      }),
                                      t._v(" "),
                                      e("line", {
                                        staticClass: "cls-2",
                                        attrs: {
                                          x1: "14.7",
                                          y1: "19.67",
                                          x2: "16.25",
                                          y2: "21.67",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e("p", [t._v("Lịch sử mua hàng")]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass:
                            "item-check-info check-delivery-tracking cta-tra-cuu-dh",
                          attrs: {
                            href: "https://cellphones.com.vn/tra-cuu-don-hang-online",
                          },
                        },
                        [
                          e(
                            "svg",
                            {
                              staticStyle: { width: "auto" },
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 44.22 25.85",
                              },
                            },
                            [
                              e("defs", [
                                e("style", [
                                  t._v(
                                    ".check-delivery-tracking .cls-1, .check-delivery-tracking .cls-2, .check-delivery-tracking .cls-3 {\n                  fill: none;\n                  stroke: #fff;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n\n                .check-delivery-tracking .cls-1 {\n                  stroke-width: 1.66px;\n                }\n\n                .check-delivery-tracking .cls-2 {\n                  stroke-width: 1.66px;\n                }\n\n                .check-delivery-tracking .cls-3 {\n                  stroke-width: 1.8px;\n                }"
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
                                        staticClass: "cls-2",
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
                          t._v(" "),
                          e("p", [t._v("Tra cứu đơn hàng")]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "item-check-info check-warranty",
                          attrs: {
                            rel: "nofollow",
                            href: "https://dienthoaivui.com.vn/kt/",
                          },
                        },
                        [
                          e(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 16.54 18.52",
                              },
                            },
                            [
                              e("defs", [
                                e("style", [
                                  t._v(
                                    ".check-warranty path {\n                  fill: #D70018;\n                }\n\n                .check-warranty .cls-1 {\n                  fill: none;\n                  stroke: #231f20;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                  stroke-width: 1.07px;\n                }"
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
                                          d: "M10.63,17,8.27,18,5.92,17A8.7,8.7,0,0,1,.54,9V1.71L8.27.54,16,1.71V9A8.72,8.72,0,0,1,10.63,17Z",
                                        },
                                      }),
                                      t._v(" "),
                                      e("path", {
                                        attrs: {
                                          d: "M5.84,4.11c1.3,0,1.82.62,1.82,1.86v.39c0,.89-.25,1.44-1,1.67.81.23,1.12.88,1.12,1.8v.71a1.72,1.72,0,0,1-1.92,2H4V4.11ZM5.61,7.67c.74,0,1.13-.24,1.13-1.11v-.5c0-.74-.26-1.1-.93-1.1H4.89V7.67Zm.27,4c.69,0,1-.36,1-1.14V9.77c0-.94-.37-1.25-1.18-1.25H4.89v3.13Z",
                                        },
                                      }),
                                      t._v(" "),
                                      e("path", {
                                        attrs: {
                                          d: "M9.59,8.73V12.5H8.66V4.11h.93V7.89h2.07V4.11h.93V12.5h-.93V8.73Z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e("p", [t._v("Tình trạng Bảo Hành")]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "item-check-info check-receipt-vat",
                          attrs: { href: "https://hddt.cellphones.com.vn/" },
                        },
                        [
                          e(
                            "svg",
                            {
                              attrs: {
                                id: "clipboard",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "17.5",
                                height: "20",
                                viewBox: "0 0 17.5 20",
                              },
                            },
                            [
                              e("path", {
                                attrs: {
                                  id: "Path_974",
                                  "data-name": "Path 974",
                                  d: "M18.875,2.5H13.25a2.5,2.5,0,0,0-5,0H2.625A.625.625,0,0,0,2,3.125v16.25A.625.625,0,0,0,2.625,20h16.25a.625.625,0,0,0,.625-.625V3.125A.625.625,0,0,0,18.875,2.5ZM10.75,1.25A1.25,1.25,0,1,1,9.5,2.5,1.25,1.25,0,0,1,10.75,1.25Zm7.5,17.5h-15v-15h2.5V5.625a.625.625,0,0,0,.625.625h8.75a.625.625,0,0,0,.625-.625V3.75h2.5Z",
                                  transform: "translate(-2)",
                                  fill: "#d70018",
                                },
                              }),
                              t._v(" "),
                              e("line", {
                                attrs: {
                                  id: "Line_55",
                                  "data-name": "Line 55",
                                  x2: "11.625",
                                  transform: "translate(3 8.4)",
                                  fill: "none",
                                  stroke: "#d70018",
                                  "stroke-width": "1",
                                },
                              }),
                              t._v(" "),
                              e("line", {
                                attrs: {
                                  id: "Line_56",
                                  "data-name": "Line 56",
                                  x2: "11.625",
                                  transform: "translate(3 10.8)",
                                  fill: "none",
                                  stroke: "#d70018",
                                  "stroke-width": "1",
                                },
                              }),
                              t._v(" "),
                              e("line", {
                                attrs: {
                                  id: "Line_57",
                                  "data-name": "Line 57",
                                  x2: "11.625",
                                  transform: "translate(3 13.2)",
                                  fill: "none",
                                  stroke: "#d70018",
                                  "stroke-width": "1",
                                },
                              }),
                              t._v(" "),
                              e("line", {
                                attrs: {
                                  id: "Line_58",
                                  "data-name": "Line 58",
                                  x2: "11",
                                  transform: "translate(3 15.6)",
                                  fill: "none",
                                  stroke: "#d70018",
                                  "stroke-width": "1",
                                },
                              }),
                            ]
                          ),
                          t._v(" "),
                          e("p", [t._v("Tra cứu HĐ VAT")]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "content-block" }, [
                  e("p", { staticClass: "box-title" }, [
                    t._v("Thông tin liên hệ"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e(
                      "div",
                      { staticClass: "list-about" },
                      [
                        t._l(t.dataFooter.Phones, function (n, r) {
                          return e(
                            "a",
                            t._b(
                              {
                                key: r,
                                staticClass: "item-about cta-goi-mua-hang",
                              },
                              "a",
                              { href: "tel:".concat(n[t.regionId].phone) },
                              !1
                            ),
                            [
                              e(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 30.83 30.94",
                                  },
                                },
                                [
                                  e("defs"),
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
                              t._v(" "),
                              e("RenderHtml", {
                                staticClass: "text",
                                attrs: { html: n[t.regionId].contentMobile },
                              }),
                            ],
                            1
                          );
                        }),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "item-about cta-ch-gan-ban",
                            attrs: {
                              href: "https://cellphones.com.vn/dia-chi-cua-hang",
                            },
                          },
                          [
                            e(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 23.22 30.36",
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
                            t._v(" "),
                            e("p", { staticClass: "text" }, [
                              t._v("Tìm cửa hàng gần nhất"),
                            ]),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]),
                  t._v(" "),
                  e("p", { staticClass: "box-title" }, [
                    t._v("Website thành viên"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e(
                      "div",
                      { staticClass: "corp-members" },
                      [
                        t._l(t.dataFooter.CorpMembers, function (n, r) {
                          return [
                            e("div", { key: r, staticClass: "corp-member" }, [
                              e("p", { staticClass: "corp-member__name" }, [
                                t._v(t._s(n.name)),
                              ]),
                              t._v(" "),
                              e(
                                "a",
                                t._b(
                                  { attrs: { rel: n.rel, target: "_blank" } },
                                  "a",
                                  { href: n.homepage },
                                  !1
                                ),
                                [
                                  e("nuxt-img", {
                                    attrs: {
                                      src: n.logo,
                                      alt: n.name,
                                      loading: "lazy",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ];
                        }),
                      ],
                      2
                    ),
                  ]),
                  t._v(" "),
                  e("p", { staticClass: "box-title" }, [
                    t._v("Kết nối với CellphoneS"),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "box-content is-flex" },
                    [
                      t._l(t.dataFooter.Social, function (n, r) {
                        return [
                          e("div", { key: r, staticClass: "social-logo" }, [
                            e(
                              "a",
                              t._b(
                                {
                                  attrs: { rel: "nofollow", target: "_blank" },
                                },
                                "a",
                                { href: n.link },
                                !1
                              ),
                              [
                                e("nuxt-img", {
                                  attrs: {
                                    src: n.image,
                                    alt: n.name,
                                    loading: "lazy",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ];
                      }),
                    ],
                    2
                  ),
                ]),
                t._v(" "),
                e("div", { staticClass: "content-box" }, [
                  e("p", { staticClass: "box-title" }, [
                    t._v("Chính sách mua hàng và bảo hành"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e(
                      "ul",
                      t._l(t.dataFooter.Search, function (n) {
                        return e(
                          "li",
                          { key: JSON.stringify(n), staticClass: "link" },
                          [
                            e(
                              "a",
                              t._b(
                                { attrs: { target: "_blank", rel: n.rel } },
                                "a",
                                { href: n.link },
                                !1
                              ),
                              [
                                e("span", [t._v(t._s(n.title))]),
                                t._v(" "),
                                e("RenderHtml", {
                                  staticClass: "icon-right",
                                  attrs: { html: t.$icons().ChevronRight },
                                }),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "content-box" }, [
                  e("p", { staticClass: "box-title" }, [
                    t._v("Các thông tin khác"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e(
                      "ul",
                      t._l(t.dataFooter.Information, function (n) {
                        return e(
                          "li",
                          { key: JSON.stringify(n), staticClass: "link" },
                          [
                            e(
                              "a",
                              t._b(
                                { attrs: { target: "_blank", rel: n.rel } },
                                "a",
                                { href: n.link },
                                !1
                              ),
                              [
                                e("span", [t._v(t._s(n.title))]),
                                t._v(" "),
                                e("RenderHtml", {
                                  staticClass: "icon-right",
                                  attrs: { html: t.$icons().ChevronRight },
                                }),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "content-box payment" }, [
                  e("p", { staticClass: "box-title" }, [
                    t._v("Phương thức thanh toán"),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "box-content" }, [
                    e(
                      "ul",
                      {
                        directives: [
                          {
                            name: "lazy-container",
                            rawName: "v-lazy-container",
                            value: {
                              selector: "img",
                              error:
                                "https://cdn2.cellphones.com.vn/25x/media/wysiwyg/placehoder.png",
                              loading:
                                "https://cdn2.cellphones.com.vn/25x/media/wysiwyg/placehoder.png",
                            },
                            expression:
                              "{selector: 'img',  error: 'https://cdn2.cellphones.com.vn/25x/media/wysiwyg/placehoder.png', loading: 'https://cdn2.cellphones.com.vn/25x/media/wysiwyg/placehoder.png'}",
                          },
                        ],
                      },
                      t._l(t.dataFooter.PaymentMethods, function (n, r) {
                        return e(
                          "li",
                          {
                            key: r,
                            staticClass: "link border icon-cps rounded",
                          },
                          [
                            e("a", t._b({}, "a", { href: n.link }, !1), [
                              e("img", {
                                attrs: { "data-src": n.image, alt: n.name },
                              }),
                            ]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "content-block" }, [
                  e("p", { staticClass: "text-information" }, [
                    t._v(
                      "\n        Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ\n        văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại:\n        028.7108.9666.\n      "
                    ),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    {
                      directives: [
                        {
                          name: "lazy-container",
                          rawName: "v-lazy-container",
                          value: {
                            selector: "img",
                            error:
                              "https://cdn2.cellphones.com.vn/50x/media/wysiwyg/placehoder.png",
                            loading:
                              "https://cdn2.cellphones.com.vn/50x/media/wysiwyg/placehoder.png",
                          },
                          expression:
                            "{selector: 'img',  error: 'https://cdn2.cellphones.com.vn/50x/media/wysiwyg/placehoder.png', loading: 'https://cdn2.cellphones.com.vn/50x/media/wysiwyg/placehoder.png'}",
                        },
                      ],
                      staticClass: "box-certification",
                    },
                    [t._m(0), t._v(" "), t._m(1)]
                  ),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "a",
                {
                  staticClass: "icon-cps icon-cps-tb",
                  attrs: {
                    target: "_blank",
                    href: "http://online.gov.vn/Home/WebDetails/75641",
                    rel: "nofollow noopener",
                  },
                },
                [
                  t("img", {
                    attrs: {
                      "data-src":
                        "https://cdn2.cellphones.com.vn/80x/media/logo/logoSaleNoti.png",
                      alt: "logo Sale Noti",
                    },
                  }),
                ]
              );
            },
            function () {
              var t = this._self._c;
              return t(
                "a",
                {
                  staticClass: "dmca-badge m-l-5",
                  attrs: {
                    target: "_blank",
                    rel: "noopener nofollow",
                    href: "https://www.dmca.com/Protection/Status.aspx?ID=158f5667-cce3-4a18-b2d1-826225e6b022",
                    title: "DMCA.com Protection Status",
                  },
                },
                [
                  t("img", {
                    attrs: {
                      "data-src":
                        "https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022",
                      alt: "DMCA.com Protection Status",
                      height: "20",
                      width: "96",
                    },
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    514: function (t, e, n) {
      "use strict";
      var r = n(7),
        c = n(49),
        o = n(27),
        l = /"/g,
        h = r("".replace);
      t.exports = function (t, e, n, r) {
        var d = o(c(t)),
          v = "<" + e;
        return (
          "" !== n && (v += " " + n + '="' + h(o(r), l, "&quot;") + '"'),
          v + ">" + d + "</" + e + ">"
        );
      };
    },
    515: function (t, e, n) {
      "use strict";
      var r = n(4);
      t.exports = function (t) {
        return r(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    518: function (t, e, n) {
      "use strict";
      var r = n(3),
        c = n(514);
      r(
        { target: "String", proto: !0, forced: n(515)("link") },
        {
          link: function (t) {
            return c(this, "a", "href", t);
          },
        }
      );
    },
    762: function (t, e, n) {
      t.exports = {};
    },
  },
]);
