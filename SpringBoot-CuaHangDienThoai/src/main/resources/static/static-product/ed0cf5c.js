(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    1294: function (e, t, n) {
      "use strict";
      n.r(t);
      n(17);
      var o = n(0),
        r =
          (n(8),
          n(5),
          n(33),
          n(36),
          n(16),
          n(202),
          n(44),
          n(290),
          {
            components: {
              ProductDetailV2: function () {
                return Promise.resolve().then(n.bind(null, 851));
              },
              CategoryDetail: function () {
                return n.e(17).then(n.bind(null, 1326));
              },
              PageDetail: function () {
                return Promise.resolve().then(n.bind(null, 565));
              },
              NotFound: function () {
                return n.e(21).then(n.bind(null, 1188));
              },
              PopUp: function () {
                return n.e(33).then(n.bind(null, 1161));
              },
            },
            layout: function (e) {
              return e.$device.isMobile ? "default-mobile" : "default-desktop";
            },
            asyncData: function (e) {
              return Object(o.a)(
                regeneratorRuntime.mark(function t() {
                  var n, o, r, c, path, d, head, content, l, h, f, m, y, _;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((o = e.store),
                            (r = e.route),
                            (c = e.redirect),
                            !(
                              !(
                                null !== (n = o.state.banner) &&
                                void 0 !== n &&
                                null !== (n = n.banner_top) &&
                                void 0 !== n &&
                                n.length
                              ) > 0
                            ))
                          ) {
                            t.next = 4;
                            break;
                          }
                          return (
                            (t.next = 4),
                            o.dispatch(
                              "banner/getBannerByUDGraphql",
                              "banner_top"
                            )
                          );
                        case 4:
                          return (
                            (path = "".concat(r.path)),
                            (t.next = 7),
                            o.dispatch("meta-head/getMetaContentGraphql", {
                              path: path,
                            })
                          );
                        case 7:
                          if (
                            ((d = o.state["meta-head"].pageInfo),
                            (head = o.state["meta-head"].head),
                            "RP" !== d.option)
                          ) {
                            t.next = 13;
                            break;
                          }
                          c(
                            301,
                            "https://cellphones.com.vn/".concat(d.target_path)
                          ),
                            (t.next = 20);
                          break;
                        case 13:
                          if ("R" !== d.option) {
                            t.next = 17;
                            break;
                          }
                          c(
                            302,
                            "https://cellphones.com.vn/".concat(d.target_path)
                          ),
                            (t.next = 20);
                          break;
                        case 17:
                          if ("category" !== d.Type && !d.category_id) {
                            t.next = 20;
                            break;
                          }
                          return (
                            (t.next = 20),
                            o.dispatch("product/getProductByCateId", {
                              cateId: '"'.concat(d.category_id, '"'),
                              ud: "cate-id-".concat(d.category_id),
                              stockFrom: 0,
                              size: 20,
                            })
                          );
                        case 20:
                          return (
                            (content = d.content || ""),
                            (l = /product_group_ud="([^"]+)"/),
                            (h = /product_group_ud=&#34;([^&#34;]+)&#34;/),
                            (f = null == content ? void 0 : content.match(l)),
                            (m = null == content ? void 0 : content.match(h)),
                            (y = ""),
                            f && f.length > 1
                              ? (y = f[1])
                              : m && m.length > 1 && (y = m[1]),
                            (_ =
                              null == content
                                ? void 0
                                : content.replaceAll(/{{\s*(.*?)\s*}}/g, "")),
                            t.abrupt("return", {
                              pageInfo: d,
                              head: head,
                              contentTrim: _,
                              productUd: y,
                            })
                          );
                        case 29:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          }),
        c = n(42),
        component = Object(c.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                Object.keys(e.pageInfo).length && !e.pageInfo.is_error
                  ? [
                      "product" === e.pageInfo.Type
                        ? t("ProductDetailV2", {
                            attrs: {
                              "page-info": e.pageInfo,
                              "meta-head": e.head,
                            },
                          })
                        : "category" === e.pageInfo.Type
                        ? t("CategoryDetail", {
                            attrs: {
                              content: e.pageInfo.content,
                              "cate-id": e.pageInfo.category_id,
                              "meta-head": e.head,
                              "page-info": e.pageInfo,
                            },
                          })
                        : "page" === e.pageInfo.Type
                        ? t("PageDetail", {
                            attrs: {
                              content: e.contentTrim,
                              "meta-head": e.head,
                              "product-ud": e.productUd,
                              "page-info": e.pageInfo,
                            },
                          })
                        : e._e(),
                      e._v(" "),
                      t("PopUp"),
                    ]
                  : [t("NotFound")],
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, {
        ProductDetailV2: n(851).default,
        PageDetail: n(565).default,
      });
    },
  },
]);
