(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    1030: function (t, e, n) {
      "use strict";
      n(766);
    },
    1361: function (t, e, n) {
      "use strict";
      n.r(e);
      n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var r = n(6),
        c = (n(47), n(15));
      function o(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
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
          name: "FaqBlock",
          components: {},
          data: function () {
            return { selectedElement: -1 };
          },
          computed: l({}, Object(c.d)("faq", ["dataFaq"])),
          mounted: function () {
            0 === this.dataFaq.length &&
              this.getDataFaq(
                this.$route.path.slice(1, this.$route.path.length)
              );
          },
          methods: l(
            l({}, Object(c.b)("faq", ["getDataFaq"])),
            {},
            {
              collapsible: function (t) {
                var e = this.selectedElement;
                (this.selectedElement = t),
                  e === t && (this.selectedElement = -1);
              },
            }
          ),
        },
        f = (n(1030), n(42)),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return t.dataFaq.length
              ? e("div", { attrs: { id: "boxFAQ" } }, [
                  e("p", { staticClass: "title" }, [
                    t._v("Câu hỏi thường gặp"),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "accordion", attrs: { role: "tablist" } },
                    t._l(t.dataFaq, function (n) {
                      return e("div", { key: n.score, staticClass: "mb-1" }, [
                        e(
                          "div",
                          {
                            staticClass: "b-button button__show-faq",
                            on: {
                              click: function (e) {
                                return t.collapsible(n.score);
                              },
                            },
                          },
                          [
                            e("p", [t._v(t._s(n.question))]),
                            t._v(" "),
                            e("RenderHtml", {
                              staticClass: "icon",
                              attrs: { html: t.$icons().ChevronRight },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "accordion__content",
                            class: { active: t.selectedElement === n.score },
                          },
                          [
                            e(
                              "div",
                              { staticClass: "content-wrapper" },
                              [e("RenderHtml", { attrs: { html: n.answer } })],
                              1
                            ),
                          ]
                        ),
                      ]);
                    }),
                    0
                  ),
                ])
              : e("div");
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    766: function (t, e, n) {
      t.exports = {};
    },
  },
]);
