(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    1066: function (t, e, r) {
      "use strict";
      r(780);
    },
    1369: function (t, e, r) {
      "use strict";
      r.r(e);
      r(17), r(24), r(18), r(5), r(30), r(11), r(31);
      var n = r(0),
        o = r(6),
        c = (r(8), r(131), r(48), r(16), r(44), r(290), r(15));
      function l(t, e) {
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
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var m = {
          name: "BoxMorePromotion",
          components: { RenderHtml: r(204).default },
          props: {
            attributeSetId: {
              type: Number,
              default: function () {
                return 0;
              },
            },
          },
          data: function () {
            return { data: "" };
          },
          fetch: function () {
            this.getData();
          },
          computed: d({}, Object(c.d)("block-by-id", ["blockData"])),
          methods: d(
            d({}, Object(c.b)("block-by-id", ["getDataBlockId"])),
            {},
            {
              getData: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = ""),
                              10 === t.attributeSetId &&
                                (r = "thong-tin-km-may-chung"),
                              23 === t.attributeSetId &&
                                (r = "thong-tin-km-laptop-chung"),
                              [12, 27, 28].includes(t.attributeSetId) &&
                                (r = "thong-tin-km-phu-kien-chung"),
                              r)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (
                              (e.next = 8),
                              t.getDataBlockId({ block: r, ud: "promoMore" })
                            );
                          case 8:
                            (n = t.blockData.promoMore),
                              (o = n.replaceAll(
                                "https://cdn.cellphones.com.vn",
                                "https://cdn2.cellphones.com.vn/x"
                              )),
                              (t.data = o.replaceAll(
                                "<img",
                                "<nuxt-img provider='CPS_IMG_PROVIDER' format='webp' loading='lazy' "
                              ));
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }
          ),
        },
        f = (r(1066), r(42)),
        component = Object(f.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return t.data.length > 0
              ? e(
                  "div",
                  { staticClass: "box-more-promotion" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "box-more-promotion-title has-text-black has-text-weight-semibold",
                      },
                      [t._v("ƯU ĐÃI THÊM")]
                    ),
                    t._v(" "),
                    e("RenderHtml", {
                      staticClass: "render-promotion",
                      class:
                        (10 === t.attributeSetId || 23 === t.attributeSetId) &&
                        "fix-ul-height",
                      attrs: { html: t.data },
                    }),
                  ],
                  1
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    780: function (t, e, r) {
      t.exports = {};
    },
  },
]);
