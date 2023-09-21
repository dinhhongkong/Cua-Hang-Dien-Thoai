(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    1301: function (t, e, n) {
      "use strict";
      n.r(e);
      n(518), n(32);
      var o = n(6),
        r = n(0),
        l =
          (n(8),
          n(5),
          n(33),
          n(36),
          n(17),
          n(24),
          n(18),
          n(30),
          n(11),
          n(31),
          n(15));
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
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
      var f = {
          name: "Footer",
          components: {
            RenderHtml: function () {
              return Promise.resolve().then(n.bind(null, 204));
            },
          },
          data: function () {
            return { regionId: 7 };
          },
          fetch: function () {
            var t = this;
            return Object(r.a)(
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
          computed: _(
            _({}, Object(l.d)("footer", ["dataFooter"])),
            Object(l.d)("province", ["province"])
          ),
          mounted: function () {
            this.regionId = 12869 === this.province.company_id ? 7 : 1;
          },
          methods: _({}, Object(l.b)("footer", ["getDataFooter"])),
        },
        v = (n(976), n(42)),
        component = Object(v.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e("footer", { staticClass: "cps-footer" }, [
              e("div", { staticClass: "cps-footer__top" }, [
                e("div", { staticClass: "cps-container" }, [
                  e(
                    "div",
                    {
                      staticClass: "columns columns is-flex is-flex-wrap-wrap",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-one",
                        },
                        [
                          e("div", { staticClass: "box-one__store mb-3" }, [
                            t._m(0),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "box-two__call mb-3 box-content" },
                              [
                                e(
                                  "ul",
                                  { staticClass: "list-link" },
                                  t._l(t.dataFooter.Phones, function (n, o) {
                                    return e(
                                      "li",
                                      { key: o, staticClass: "link" },
                                      [
                                        e("RenderHtml", {
                                          attrs: {
                                            html: n[t.regionId].content,
                                          },
                                        }),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                ),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "box-one__pay-gate-way" }, [
                            t._m(1),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "pay-gate-way__content box-content",
                              },
                              [
                                e(
                                  "ul",
                                  { staticClass: "list-link" },
                                  t._l(
                                    t.dataFooter.PaymentMethods,
                                    function (n, o) {
                                      return e(
                                        "li",
                                        {
                                          key: o,
                                          staticClass:
                                            "link border icon-cps rounded",
                                        },
                                        [
                                          e(
                                            "a",
                                            t._b({}, "a", { href: n.link }, !1),
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
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-two",
                        },
                        [
                          t._m(2),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "box-three__search box-content" },
                            [
                              e(
                                "ul",
                                { staticClass: "list-link" },
                                t._l(t.dataFooter.Search, function (n) {
                                  return e(
                                    "li",
                                    {
                                      key: JSON.stringify(n),
                                      staticClass: "link",
                                    },
                                    [
                                      e(
                                        "a",
                                        t._b(
                                          {
                                            attrs: {
                                              target: "_blank",
                                              rel: n.rel,
                                            },
                                          },
                                          "a",
                                          { href: n.link },
                                          !1
                                        ),
                                        [t._v(t._s(n.title))]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-three",
                        },
                        [
                          t._m(3),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass: "box-four--information box-content",
                            },
                            [
                              e(
                                "ul",
                                { staticClass: "list-link" },
                                t._l(t.dataFooter.Information, function (n) {
                                  return e(
                                    "li",
                                    {
                                      key: JSON.stringify(n),
                                      staticClass: "link",
                                    },
                                    [
                                      e(
                                        "a",
                                        t._b(
                                          {
                                            attrs: {
                                              target: "_blank",
                                              rel: n.rel,
                                            },
                                          },
                                          "a",
                                          { href: n.link },
                                          !1
                                        ),
                                        [t._v(t._s(n.title))]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-four",
                        },
                        [
                          t._m(4),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "box-tow__social is-flex" },
                            [
                              t._l(t.dataFooter.Social, function (n, o) {
                                return [
                                  e(
                                    "div",
                                    { key: o, staticClass: "social-logo" },
                                    [
                                      e(
                                        "a",
                                        t._b(
                                          {
                                            attrs: {
                                              target: "_blank",
                                              rel: "nofollow",
                                            },
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
                                    ]
                                  ),
                                ];
                              }),
                            ],
                            2
                          ),
                          t._v(" "),
                          t._m(5),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "box-tow__corp-members is-flex is-flex-wrap-wrap",
                            },
                            [
                              t._l(t.dataFooter.CorpMembers, function (n, o) {
                                return [
                                  e(
                                    "div",
                                    { key: o, staticClass: "corp-member" },
                                    [
                                      e(
                                        "p",
                                        { staticClass: "corp-member__name" },
                                        [t._v(t._s(n.name))]
                                      ),
                                      t._v(" "),
                                      e(
                                        "a",
                                        t._b(
                                          {
                                            attrs: {
                                              target: "_blank",
                                              rel: n.rel,
                                            },
                                          },
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
                                    ]
                                  ),
                                ];
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
              t._v(" "),
              e("div", { staticClass: "cps-footer__bottom" }, [
                e("div", { staticClass: "cps-container" }, [
                  e("div", { staticClass: "bottom__cms" }, [
                    e(
                      "div",
                      { staticClass: "columns" },
                      t._l(t.dataFooter.CMS, function (n) {
                        return e(
                          "div",
                          {
                            key: JSON.stringify(n),
                            staticClass: "column cms__cms-row",
                          },
                          t._l(n, function (o, r) {
                            return e(
                              "span",
                              {
                                key: JSON.stringify(o),
                                staticClass: "cms-row__cms-line",
                              },
                              [
                                t._l(o, function (n, r) {
                                  return e("span", { key: JSON.stringify(n) }, [
                                    "" !== n.link
                                      ? e("span", [
                                          e(
                                            "a",
                                            t._b(
                                              {
                                                attrs: {
                                                  target: "_blank",
                                                  rel: "noopener",
                                                },
                                              },
                                              "a",
                                              { href: n.link },
                                              !1
                                            ),
                                            [e("span", [t._v(t._s(n.title))])]
                                          ),
                                          t._v(" "),
                                          r !== o.length - 1
                                            ? e("span", [t._v(" – ")])
                                            : t._e(),
                                        ])
                                      : e("span", [
                                          e(
                                            "a",
                                            {
                                              attrs: {
                                                target: "_blank",
                                                rel: "noopener",
                                              },
                                            },
                                            [e("span", [t._v(t._s(n.title))])]
                                          ),
                                          t._v(" "),
                                          r !== o.length - 1
                                            ? e("span", [t._v(" – ")])
                                            : t._e(),
                                        ]),
                                  ]);
                                }),
                                t._v(" "),
                                r !== n.length - 1 ? e("br") : t._e(),
                              ],
                              2
                            );
                          }),
                          0
                        );
                      }),
                      0
                    ),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "bottom__company-information" }, [
                    e("div", [
                      e(
                        "div",
                        { staticClass: "company-information__address is-flex" },
                        [
                          12869 === t.province.company_id
                            ? e("p", [
                                t._v(
                                  "\n              Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM.\n              Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện\n              thoại: 028.7108.9666.\n            "
                                ),
                              ])
                            : e("p", [
                                t._v(
                                  "\n              Công ty TNHH Thương Mại Tổng Hợp HTV- GPĐKKD: 0108075931 cấp tại Sở KH & ĐT TP. Hà Nội. Địa chỉ văn\n              phòng: 543 Nguyễn Trãi, phường Thanh Xuân Nam. quận Thanh Xuân, Thành phố Hà Nội, Việt Nam. Điện thoại:\n              024.7303.0119.\n            "
                                ),
                              ]),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "company-information__certification is-flex",
                        },
                        [
                          e(
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
                              e("nuxt-img", {
                                attrs: {
                                  src: "https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png",
                                  alt: "Đã thông báo",
                                  loading: "lazy",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
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
                              e("nuxt-img", {
                                attrs: {
                                  src: "https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022",
                                  alt: "DMCA.com Protection Status",
                                  height: "20",
                                  width: "96",
                                  loading: "lazy",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "store__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Tổng đài hỗ trợ miễn phí"),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "pay-gate-way__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Phương thức thanh toán"),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "store__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Thông tin và chính sách"),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "store__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Dịch vụ và thông tin khác"),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "store__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Kết nối với CellphoneS"),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "store__title" }, [
                t("p", { staticClass: "mb-3 title" }, [
                  this._v("Website thành viên"),
                ]),
              ]);
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
      var o = n(7),
        r = n(49),
        l = n(27),
        c = /"/g,
        _ = o("".replace);
      t.exports = function (t, e, n, o) {
        var f = l(r(t)),
          v = "<" + e;
        return (
          "" !== n && (v += " " + n + '="' + _(l(o), c, "&quot;") + '"'),
          v + ">" + f + "</" + e + ">"
        );
      };
    },
    515: function (t, e, n) {
      "use strict";
      var o = n(4);
      t.exports = function (t) {
        return o(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    518: function (t, e, n) {
      "use strict";
      var o = n(3),
        r = n(514);
      o(
        { target: "String", proto: !0, forced: n(515)("link") },
        {
          link: function (t) {
            return r(this, "a", "href", t);
          },
        }
      );
    },
    714: function (t, e, n) {
      t.exports = {};
    },
    976: function (t, e, n) {
      "use strict";
      n(714);
    },
  },
]);
