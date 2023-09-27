(window.webpackJsonp = window.webpackJsonp || []).push([
  [104, 145, 149, 180, 205, 207, 209, 220],
  {
    1031: function (e, t, n) {
      "use strict";
      n(767);
    },
    1363: function (e, t, n) {
      "use strict";
      n.r(t);
      n(10), n(16), n(44), n(32), n(17), n(24), n(30), n(31);
      var r = n(0),
        o = n(6),
        c = (n(8), n(52), n(5), n(11), n(18), n(78), n(15)),
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
      var f = {
          name: "HeaderSearch",
          data: function () {
            return {
              key: "",
              querySearch: "",
              overlay: !1,
              suggestBox: !1,
              html: "",
              lockScroll: !1,
              listUrl: [],
              placeholder:
                "https://cdn2.cellphones.com.vn/50x50,webp/media/wysiwyg/placehoder.png",
              cpsMain: "https://cellphones.com.vn/",
            };
          },
          computed: d(
            d(
              d(
                d(
                  d(
                    {},
                    Object(c.d)("search-graphql", [
                      "productResultQuickSearch",
                      "categoryResultArr",
                      "searchCateInfo",
                    ])
                  ),
                  Object(c.d)("banner", ["banner"])
                ),
                Object(c.d)("province", ["province"])
              ),
              Object(c.d)("json-server", ["jsonData"])
            ),
            Object(c.d)("search-history", ["searchKeys"])
          ),
          watch: {
            key: function () {
              var e = this;
              clearTimeout(this.timeOut),
                (this.timeOut = setTimeout(
                  Object(r.a)(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!(e.key.length >= 1 && e.overlay)) {
                                t.next = 5;
                                break;
                              }
                              return (
                                (t.next = 3), e.quickSearch({ keyword: e.key })
                              );
                            case 3:
                              t.next = 6;
                              break;
                            case 5:
                              0 === e.key.length &&
                                (e.resetSearchResult(), e.hover());
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  ),
                  100
                ));
            },
          },
          created: function () {
            (this.querySearch = this.$route.query.q),
              this.querySearch && (this.key = this.querySearch);
          },
          mounted: function () {
            this.banner.banner_search ||
              this.getBannerByUDGraphql("banner_search"),
              this.jsonData.trending ||
                this.getDataJsonServerGraphql({
                  idJson: "search_trending",
                  ud: "trending",
                });
          },
          methods: d(
            d(
              d(
                d(
                  d(
                    d(
                      d({}, Object(c.b)("banner", ["getBannerByUDGraphql"])),
                      Object(c.b)("search-history", [
                        "getHistorySearch",
                        "insertHistorySearch",
                        "deleteHistorySearch",
                      ])
                    ),
                    Object(c.b)("json-server", ["getDataJsonServerGraphql"])
                  ),
                  Object(c.b)("search-graphql", [
                    "searchByKeywordGraphql",
                    "submitSearchForm",
                    "quickSearch",
                    "getPathCategory",
                  ])
                ),
                Object(c.c)("search-graphql", [
                  "setProductResultQuickSearch",
                  "expandSearchInput",
                ])
              ),
              Object(c.c)("loader", ["switchLoading"])
            ),
            {},
            {
              formatMoney: l.r,
              submit: function () {
                this.trackingKeySearch(this.key, "search_page"),
                  this.submitSearchForm(this.key);
              },
              handleClickEnter: function () {
                this.insertHistorySearch(this.key),
                  (window.location.href = ""
                    .concat(this.cpsMain, "catalogsearch/result?q=")
                    .concat(this.key));
              },
              formatPrice: function (e) {
                return parseInt(e) ? this.formatMoney(parseInt(e)) : 0;
              },
              resetSearchResult: function () {
                this.setProductResultQuickSearch([]),
                  (this.overlay = !1),
                  (this.suggestBox = !1),
                  (this.key = ""),
                  this.toggleLockScroll(!1);
              },
              hover: function () {
                var e;
                0 ===
                  (null === (e = this.searchKeys) || void 0 === e
                    ? void 0
                    : e.length) && this.getHistorySearch(),
                  (this.overlay = !0),
                  (this.suggestBox = !0),
                  this.toggleLockScroll(!0);
              },
              createUrlBaseOnLevel: function (e, t) {
                var n = "".concat(this.cpsMain);
                return (
                  e.forEach(function (e, t) {
                    n += "".concat(0 !== t ? "/" : "").concat(e.uri);
                  }),
                  (n +=
                    0 === e.length
                      ? "".concat(t, ".html")
                      : "/".concat(t, ".html"))
                );
              },
              filterUniqueLevel: function () {
                var e,
                  t = 0;
                if (
                  null !== (e = this.searchCateInfo) &&
                  void 0 !== e &&
                  e.categories
                )
                  return this.searchCateInfo.categories
                    .filter(function (e, n, r) {
                      return e.level && e.level !== t && 1 !== e.level
                        ? ((t = e.level), e)
                        : "";
                    })
                    .sort(function (a, b) {
                      return a.level - b.level;
                    });
              },
              redirectToCategoryLink: function (e, t) {
                var n = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                n.switchLoading(!0),
                                (r.prev = 1),
                                (r.next = 4),
                                n.getPathCategory(e)
                              );
                            case 4:
                              (o = n.filterUniqueLevel()),
                                (window.location = n.createUrlBaseOnLevel(
                                  o,
                                  t
                                )),
                                (r.next = 12);
                              break;
                            case 8:
                              (r.prev = 8),
                                (r.t0 = r.catch(1)),
                                n.switchLoading(!1),
                                console.log(r.t0);
                            case 12:
                              n.switchLoading(!1);
                            case 13:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[1, 8]]
                    );
                  })
                )();
              },
              trackingKeySearch: function (e, t) {
                var n = this;
                setTimeout(function () {
                  var r = window.dataLayer || [];
                  r.push({
                    event: "site_search",
                    searchQuery: e,
                    type: t,
                    ecommerce: {
                      region_cps:
                        12869 === n.province.company_id
                          ? "Miền Nam_7"
                          : "Miền Bắc_1",
                      province: n.province.name,
                    },
                    eventModel: { value: 0 },
                  }),
                    console.log("DataLayer:"),
                    console.log(r);
                }, 1e3);
              },
              toggleLockScroll: function (e) {
                e
                  ? ((this.lockScroll = !0),
                    document
                      .getElementsByTagName("html")[0]
                      .classList.add("no-scroll"))
                  : ((this.lockScroll = !1),
                    document
                      .getElementsByTagName("html")[0]
                      .classList.remove("no-scroll"));
              },
            }
          ),
        },
        v = (n(1031), n(42)),
        component = Object(v.a)(
          f,
          function () {
            var e,
              t,
              n = this,
              r = n._self._c;
            return r("div", { staticClass: "box-search" }, [
              r(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return (
                        e.stopPropagation(), e.preventDefault(), n.submit()
                      );
                    },
                  },
                },
                [
                  r(
                    "div",
                    { staticClass: "cps-group-input is-flex" },
                    [
                      r("div", { staticClass: "input-group-btn" }, [
                        r(
                          "button",
                          {
                            staticClass:
                              "pr-0 border-0 shadow-none outline-none text-dark",
                            attrs: { type: "submit" },
                          },
                          [
                            r("RenderHtml", {
                              attrs: { html: n.$icons().Search },
                            }),
                          ],
                          1
                        ),
                      ]),
                      n._v(" "),
                      r("client-only", [
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: n.key,
                              expression: "key",
                            },
                          ],
                          staticClass: "cps-input",
                          attrs: {
                            id: "inp$earch",
                            type: "text",
                            placeholder: "Bạn cần tìm gì?",
                            autocomplete: "off",
                          },
                          domProps: { value: n.key },
                          on: {
                            focus: n.hover,
                            keyup: function (e) {
                              return !e.type.indexOf("key") &&
                                n._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : n.handleClickEnter.apply(null, arguments);
                            },
                            input: function (e) {
                              e.target.composing || (n.key = e.target.value);
                            },
                          },
                        }),
                      ]),
                      n._v(" "),
                      r(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: n.suggestBox,
                              expression: "suggestBox",
                            },
                          ],
                          attrs: { id: "btn-close-search" },
                          on: {
                            click: function (e) {
                              return n.resetSearchResult();
                            },
                          },
                        },
                        [n._v("×")]
                      ),
                      n._v(" "),
                      r(
                        "div",
                        {
                          staticClass: "box-search-result search-autocomplete",
                          class:
                            0 === n.productResultQuickSearch.length
                              ? "is-hidden"
                              : "block",
                          attrs: { id: "search_autocomplete" },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "mb-1 category-box",
                              class:
                                0 === n.categoryResultArr.length
                                  ? "is-hidden"
                                  : "block",
                            },
                            [
                              r("p", { staticClass: "title-box" }, [
                                n._v("Có phải bạn muốn tìm"),
                              ]),
                              n._v(" "),
                              r(
                                "div",
                                { staticClass: "list-cate" },
                                [
                                  n._l(n.categoryResultArr, function (e) {
                                    return [
                                      r(
                                        "a",
                                        n._b(
                                          {
                                            key: e.category_id,
                                            staticClass: "is-block",
                                            on: {
                                              click: function (t) {
                                                return n.insertHistorySearch(
                                                  e.title_h1
                                                );
                                              },
                                            },
                                          },
                                          "a",
                                          {
                                            href: ""
                                              .concat(n.cpsMain)
                                              .concat(e.uri.replace("/", "")),
                                          },
                                          !1
                                        ),
                                        [
                                          r("div", { staticClass: "wrapper" }, [
                                            n._v(
                                              n._s(e.title_h1) +
                                                "\n                "
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ];
                                  }),
                                ],
                                2
                              ),
                            ]
                          ),
                          n._v(" "),
                          r(
                            "div",
                            { staticClass: "mt-2 product-box" },
                            [
                              r("p", { staticClass: "title-box" }, [
                                n._v("Sản phẩm gợi ý"),
                              ]),
                              n._v(" "),
                              n._l(n.productResultQuickSearch, function (e) {
                                return r(
                                  "a",
                                  n._b(
                                    {
                                      key: e.product_id,
                                      staticClass:
                                        "header-search-item is-flex is-align-items-center",
                                      on: {
                                        click: function (t) {
                                          n.insertHistorySearch(e.name),
                                            n.trackingKeySearch(
                                              n.key,
                                              "normal"
                                            );
                                        },
                                      },
                                    },
                                    "a",
                                    {
                                      href: ""
                                        .concat(n.cpsMain)
                                        .concat(e.url_path),
                                    },
                                    !1
                                  ),
                                  [
                                    r("nuxt-img", {
                                      staticClass: "mr-1",
                                      attrs: {
                                        provider: "CPS_IMG_PROVIDER",
                                        format: "webp",
                                        width: "auto",
                                        height: "auto",
                                        src:
                                          "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                            e.thumbnail
                                          ) || !1,
                                        alt: e.name,
                                        loading: "lazy",
                                      },
                                    }),
                                    n._v(" "),
                                    r(
                                      "div",
                                      {
                                        staticClass: "header-search-item-info",
                                      },
                                      [
                                        r(
                                          "p",
                                          { staticClass: "header-search-name" },
                                          [n._v(n._s(e.name))]
                                        ),
                                        n._v(" "),
                                        r(
                                          "div",
                                          {
                                            staticClass:
                                              "is-flex is-align-items-flex-end",
                                          },
                                          [
                                            r(
                                              "p",
                                              {
                                                staticClass:
                                                  "header-search-special mr-1",
                                              },
                                              [
                                                n._v(
                                                  "\n                  " +
                                                    n._s(
                                                      n.formatPrice(
                                                        e.special_price
                                                      )
                                                        ? n.formatPrice(
                                                            e.special_price
                                                          ) || "Liên hệ"
                                                        : n.formatPrice(
                                                            e.price
                                                          ) || "Liên hệ"
                                                    )
                                                ),
                                              ]
                                            ),
                                            n._v(" "),
                                            r(
                                              "p",
                                              {
                                                staticClass:
                                                  "header-search-price",
                                              },
                                              [
                                                n._v(
                                                  n._s(
                                                    n.formatPrice(
                                                      e.special_price
                                                    )
                                                      ? n.formatPrice(
                                                          e.price
                                                        ) || "Liên hệ"
                                                      : ""
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                      n._v(" "),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                n.suggestBox &&
                                0 === n.productResultQuickSearch.length,
                              expression:
                                "suggestBox && productResultQuickSearch.length===0",
                            },
                          ],
                          staticClass: "suggest-search",
                        },
                        [
                          null !== (e = n.banner.banner_search) &&
                          void 0 !== e &&
                          e.length
                            ? r("div", { staticClass: "banner-search" }, [
                                r(
                                  "a",
                                  n._b(
                                    {},
                                    "a",
                                    { href: n.banner.banner_search[0].url },
                                    !1
                                  ),
                                  [
                                    r("nuxt-img", {
                                      attrs: {
                                        alt: n.banner.banner_search[0].name,
                                        src: "https://cdn2.cellphones.com.vn/720x,webp/https://dashboard.cellphones.com.vn/storage/".concat(
                                          n.banner.banner_search[0].path_desktop
                                        ),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          null !== (t = n.searchKeys) &&
                          void 0 !== t &&
                          t.length
                            ? r("div", { staticClass: "history-search" }, [
                                r(
                                  "div",
                                  {
                                    staticClass:
                                      "is-flex is-align-items-center is-justify-content-space-between",
                                  },
                                  [
                                    r(
                                      "div",
                                      {
                                        staticClass:
                                          "is-flex is-align-items-center",
                                      },
                                      [
                                        r(
                                          "p",
                                          {
                                            staticClass: "title-trending mr-1",
                                          },
                                          [n._v("Lịch sử tìm kiếm")]
                                        ),
                                        n._v(" "),
                                        r(
                                          "div",
                                          { staticClass: "icon-trending" },
                                          [
                                            r(
                                              "svg",
                                              {
                                                attrs: {
                                                  height: "16",
                                                  viewBox: "0 0 24 24",
                                                  fill: "none",
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                },
                                              },
                                              [
                                                r("path", {
                                                  attrs: {
                                                    d: "M12 7.13513V12L15.2432 15.2432",
                                                    stroke: "#121219",
                                                    "stroke-width": "1.5",
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                  },
                                                }),
                                                n._v(" "),
                                                r("path", {
                                                  attrs: {
                                                    d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
                                                    stroke: "#121219",
                                                    "stroke-width": "1.5",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    n._v(" "),
                                    r(
                                      "a",
                                      {
                                        staticClass:
                                          "del-history is-flex is-align-items-center",
                                        on: {
                                          click: function (e) {
                                            return n.deleteHistorySearch();
                                          },
                                        },
                                      },
                                      [
                                        n._v(
                                          "\n              Xóa tất cả \n              "
                                        ),
                                        r(
                                          "div",
                                          { staticClass: "icon-del-history" },
                                          [
                                            r(
                                              "svg",
                                              {
                                                attrs: {
                                                  width: "16",
                                                  height: "16",
                                                  viewBox: "0 0 24 24",
                                                  fill: "none",
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                },
                                              },
                                              [
                                                r("path", {
                                                  attrs: {
                                                    d: "M4.5 5L4.5 20C4.5 21.1046 5.39543 22 6.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20V5",
                                                    stroke: "#86888d",
                                                    "stroke-width": "1.5",
                                                  },
                                                }),
                                                n._v(" "),
                                                r("path", {
                                                  attrs: {
                                                    d: "M10 11V16",
                                                    stroke: "#86888d",
                                                    "stroke-width": "1.5",
                                                    "stroke-linecap": "round",
                                                  },
                                                }),
                                                n._v(" "),
                                                r("path", {
                                                  attrs: {
                                                    d: "M14 11V16",
                                                    stroke: "#86888d",
                                                    "stroke-width": "1.5",
                                                    "stroke-linecap": "round",
                                                  },
                                                }),
                                                n._v(" "),
                                                r("path", {
                                                  attrs: {
                                                    d: "M2.5 5H21.5",
                                                    stroke: "#86888d",
                                                    "stroke-width": "1.5",
                                                    "stroke-linecap": "round",
                                                  },
                                                }),
                                                n._v(" "),
                                                r("path", {
                                                  attrs: {
                                                    d: "M7 5L7.22147 3.6712C7.3822 2.70683 8.21658 2 9.19425 2H12H14.8057C15.7834 2 16.6178 2.70683 16.7785 3.6712L17 5",
                                                    stroke: "#86888d",
                                                    "stroke-width": "1.5",
                                                    "stroke-linecap": "round",
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
                                n._v(" "),
                                r(
                                  "div",
                                  {
                                    staticClass: "is-block search-history-box",
                                  },
                                  n._l(n.searchKeys, function (e) {
                                    return r(
                                      "a",
                                      n._b(
                                        {
                                          key: "".concat(e.id),
                                          staticClass:
                                            "is-flex search-history-item",
                                          on: {
                                            click: function (e) {
                                              return n.trackingKeySearch(
                                                n.key,
                                                "history"
                                              );
                                            },
                                          },
                                        },
                                        "a",
                                        {
                                          href: ""
                                            .concat(
                                              n.cpsMain,
                                              "catalogsearch/result?q="
                                            )
                                            .concat(e.search_key),
                                        },
                                        !1
                                      ),
                                      [r("p", [n._v(n._s(e.search_key))])]
                                    );
                                  }),
                                  0
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          n.jsonData.trending
                            ? r("div", { staticClass: "trending-search" }, [
                                r(
                                  "div",
                                  {
                                    staticClass:
                                      "is-flex is-align-items-center",
                                  },
                                  [
                                    r(
                                      "p",
                                      { staticClass: "title-trending mr-1" },
                                      [n._v("Xu hướng tìm kiếm")]
                                    ),
                                    n._v(" "),
                                    r(
                                      "svg",
                                      {
                                        staticStyle: {
                                          "enable-background":
                                            "new 0 0 92.27 122.88",
                                        },
                                        attrs: {
                                          width: "15",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          "xmlns:xlink":
                                            "http://www.w3.org/1999/xlink",
                                          x: "0px",
                                          y: "0px",
                                          viewBox: "0 0 92.27 122.88",
                                          "xml:space": "preserve",
                                        },
                                      },
                                      [
                                        r(
                                          "style",
                                          { attrs: { type: "text/css" } },
                                          [
                                            n._v(
                                              "\n                .st0 {\n                  fill-rule: evenodd;\n                  clip-rule: evenodd;\n                  fill: #EC6F59;\n                }\n\n                .st1 {\n                  fill-rule: evenodd;\n                  clip-rule: evenodd;\n                  fill: #FAD15C;\n                }\n              "
                                            ),
                                          ]
                                        ),
                                        n._v(" "),
                                        r("g", [
                                          r("path", {
                                            staticClass: "st0",
                                            attrs: {
                                              d: "M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z",
                                            },
                                          }),
                                          n._v(" "),
                                          r("path", {
                                            staticClass: "st1",
                                            attrs: {
                                              d: "M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z",
                                            },
                                          }),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                                n._v(" "),
                                r(
                                  "div",
                                  { staticClass: "is-flex trending-box" },
                                  n._l(
                                    n.jsonData.trending.trendingKey,
                                    function (e, t) {
                                      return r(
                                        "a",
                                        n._b(
                                          {
                                            key: ""
                                              .concat(e.url, "-")
                                              .concat(t),
                                            staticClass:
                                              "is-flex trending-item",
                                          },
                                          "a",
                                          { href: e.url },
                                          !1
                                        ),
                                        [
                                          r("nuxt-img", {
                                            attrs: {
                                              alt: "Search Trending ".concat(
                                                e.key
                                              ),
                                              src: e.img,
                                              provider: "CPS_IMG_PROVIDER",
                                              format: "webp",
                                              width: "40",
                                              height: "auto",
                                              quality: "100",
                                            },
                                          }),
                                          n._v(" "),
                                          r("p", [n._v(n._s(e.key))]),
                                        ],
                                        1
                                      );
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : n._e(),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              n._v(" "),
              r("div", {
                staticClass: "header-overlay",
                class:
                  n.productResultQuickSearch.length > 0 || n.overlay
                    ? "active"
                    : "",
                on: {
                  click: function (e) {
                    return n.resetSearchResult();
                  },
                },
              }),
            ]);
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
          return m;
        }),
          n.d(t, "B", function () {
            return y;
          }),
          n.d(t, "r", function () {
            return w;
          }),
          n.d(t, "q", function () {
            return _;
          }),
          n.d(t, "s", function () {
            return k;
          }),
          n.d(t, "u", function () {
            return C;
          }),
          n.d(t, "x", function () {
            return x;
          }),
          n.d(t, "E", function () {
            return O;
          }),
          n.d(t, "b", function () {
            return S;
          }),
          n.d(t, "t", function () {
            return j;
          }),
          n.d(t, "g", function () {
            return P;
          }),
          n.d(t, "d", function () {
            return L;
          }),
          n.d(t, "C", function () {
            return R;
          }),
          n.d(t, "y", function () {
            return D;
          }),
          n.d(t, "z", function () {
            return E;
          }),
          n.d(t, "o", function () {
            return M;
          }),
          n.d(t, "e", function () {
            return A;
          }),
          n.d(t, "i", function () {
            return B;
          }),
          n.d(t, "n", function () {
            return I;
          }),
          n.d(t, "j", function () {
            return N;
          }),
          n.d(t, "k", function () {
            return T;
          }),
          n.d(t, "m", function () {
            return H;
          }),
          n.d(t, "l", function () {
            return $;
          }),
          n.d(t, "D", function () {
            return V;
          }),
          n.d(t, "h", function () {
            return Q;
          }),
          n.d(t, "A", function () {
            return F;
          }),
          n.d(t, "f", function () {
            return U;
          }),
          n.d(t, "w", function () {
            return G;
          }),
          n.d(t, "a", function () {
            return K;
          }),
          n.d(t, "v", function () {
            return J;
          }),
          n.d(t, "c", function () {
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
        function l(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return h(e, t);
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
        function h(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
          return n;
        }
        function d(e) {
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
        function v(e) {
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
        function m(e, option) {
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
        function _(e) {
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
        function k(e, t) {
          return t > 0 ? t : e;
        }
        function C(e, t) {
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
        function O() {
          var data =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = "";
          for (var t in data) e += "".concat(t, "=").concat(data[t], "&");
          return e.slice(0, -1);
        }
        function S() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = { "Content-Type": "application/json" };
          return (
            e && (t = v(v({}, t), {}, { Authorization: "Bearer " + e })), t
          );
        }
        function j() {
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
        function L() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function R(e, time) {
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
        function D(title, e) {
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
          return Object(o.a)(t, [e].map(d));
        }
        function M(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function A(e, t, n) {
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
        function I(path, e) {
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
        function N(e, path) {
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
        function T(e, path) {
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
        function H(e, t, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            c = arguments.length > 5 ? arguments[5] : void 0,
            h = e.general.attributes.manufacturer,
            d = e.filterable.stock_available_id,
            f = "";
          if (
            ((f =
              46 === d
                ? c || "InStock"
                : 152 === d
                ? c || "PreOrder"
                : c || "OutOfStock"),
            !h)
          ) {
            var v,
              m = l(e.specification.basic);
            try {
              for (m.s(); !(v = m.n()).done; ) {
                var y = v.value;
                "phone_accessory_brands" === y.key && (h = y.value);
              }
            } catch (e) {
              m.e(e);
            } finally {
              m.f();
            }
          }
          var w,
            _ = [],
            k = {},
            C = l(r);
          try {
            for (C.s(); !(w = C.n()).done; ) {
              var x = w.value;
              _.push({
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
            C.e(e);
          } finally {
            C.f();
          }
          return (
            _.length > 0 &&
              (k = {
                review: _,
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
                brand: { "@type": "Brand", name: "".concat(h) },
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
              k
            )
          );
        }
        function $(e) {
          for (
            var image = e.image,
              t = e.url,
              n = e.city,
              address = e.address,
              r = e.listStore,
              o = e.googleLink,
              c = e.phone,
              l = e.googleMap,
              h = address.split(",")[0].split(" "),
              d = h.slice(1, h.length).join(" "),
              f = l.lastIndexOf(n) + n.length,
              v = l.slice(f, f + 1 + 6),
              m = [],
              i = 1;
            i < r.length;
            i++
          ) {
            var y = r[i].shop.address.split(",")[0].split(" "),
              w = y.slice(1, y.length).join(" ");
            m.push({
              "@type": "Store",
              name: "CellphoneS ".concat(r[i].shop.address),
              url: r[i].shop.store_opening_url,
              image: r[i].shop.store_opening_images,
              telephone: r[i].shop.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: w,
                addressLocality: n,
                postalCode: v,
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
              streetAddress: d,
              addressLocality: n,
              postalCode: v,
              addressCountry: "VN",
            },
            areaServed: [n],
            geo: {
              "@type": "GeoCoordinates",
              latitude: r[0].shop.latitude,
              longitude: r[0].shop.longitude,
            },
            department: m,
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
        function Q(e) {
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
        function U() {
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
        function G(e) {
          e
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function K(e) {
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
        function J() {
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
        function Z(text) {
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
        h = n(200),
        d = n(4),
        f = RangeError,
        v = String,
        m = Math.floor,
        y = o(h),
        w = o("".slice),
        _ = o((1).toFixed),
        k = function (e, t, n) {
          return 0 === t
            ? n
            : t % 2 == 1
            ? k(e, t - 1, n * e)
            : k(e * e, t / 2, n);
        },
        C = function (data, e, t) {
          for (var n = -1, r = t; ++n < 6; )
            (r += e * data[n]), (data[n] = r % 1e7), (r = m(r / 1e7));
        },
        x = function (data, e) {
          for (var t = 6, n = 0; --t >= 0; )
            (n += data[t]), (data[t] = m(n / e)), (n = (n % e) * 1e7);
        },
        O = function (data) {
          for (var e = 6, s = ""; --e >= 0; )
            if ("" !== s || 0 === e || 0 !== data[e]) {
              var t = v(data[e]);
              s = "" === s ? t : s + y("0", 7 - t.length) + t;
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
                "0.000" !== _(8e-5, 3) ||
                "1" !== _(0.9, 0) ||
                "1.25" !== _(1.255, 2) ||
                "1000000000000000128" !== _(0xde0b6b3a7640080, 0)
              );
            }) ||
            !d(function () {
              _({});
            }),
        },
        {
          toFixed: function (e) {
            var t,
              n,
              r,
              o,
              h = l(this),
              d = c(e),
              data = [0, 0, 0, 0, 0, 0],
              m = "",
              _ = "0";
            if (d < 0 || d > 20) throw f("Incorrect fraction digits");
            if (h != h) return "NaN";
            if (h <= -1e21 || h >= 1e21) return v(h);
            if ((h < 0 && ((m = "-"), (h = -h)), h > 1e-21))
              if (
                ((n =
                  (t =
                    (function (e) {
                      for (var t = 0, n = e; n >= 4096; )
                        (t += 12), (n /= 4096);
                      for (; n >= 2; ) (t += 1), (n /= 2);
                      return t;
                    })(h * k(2, 69, 1)) - 69) < 0
                    ? h * k(2, -t, 1)
                    : h / k(2, t, 1)),
                (n *= 4503599627370496),
                (t = 52 - t) > 0)
              ) {
                for (C(data, 0, n), r = d; r >= 7; ) C(data, 1e7, 0), (r -= 7);
                for (C(data, k(10, r, 1), 0), r = t - 1; r >= 23; )
                  x(data, 1 << 23), (r -= 23);
                x(data, 1 << r), C(data, 1, 1), x(data, 2), (_ = O(data));
              } else
                C(data, 0, n), C(data, 1 << -t, 0), (_ = O(data) + y("0", d));
            return (_ =
              d > 0
                ? m +
                  ((o = _.length) <= d
                    ? "0." + y("0", d - o) + _
                    : w(_, 0, o - d) + "." + w(_, o - d))
                : m + _);
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
        h = Date.prototype;
      r(h, l) || o(h, l, c);
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
    767: function (e, t, n) {
      e.exports = {};
    },
  },
]);
