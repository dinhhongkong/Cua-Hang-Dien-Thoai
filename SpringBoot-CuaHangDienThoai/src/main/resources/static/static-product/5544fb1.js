(window.webpackJsonp = window.webpackJsonp || []).push([
  [123],
  {
    1167: function (t, n, e) {
      "use strict";
      e.r(n);
      e(10), e(518), e(32), e(78);
      var r = e(499),
        o = {
          name: "BoxLinked",
          components: { RenderHtml: e(204).default },
          props: {
            listLinked: {
              type: Array,
              default: function () {
                return [];
              },
            },
            url: { type: String, default: "" },
          },
          data: function () {
            return { main_url: "https://cellphones.com.vn/" };
          },
          computed: {
            sortListLinked: function () {
              if (!(this.listLinked.length < 0)) {
                var t = this.listLinked;
                return (
                  t.sort(function (a, b) {
                    return b.price - a.price;
                  }),
                  t
                );
              }
            },
          },
          methods: { formatMoney: r.r },
        },
        c = (e(587), e(42)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "box-linked" }, [
              n(
                "div",
                { staticClass: "list-linked" },
                t._l(t.sortListLinked, function (e, r, o) {
                  return n(
                    "a",
                    t._b(
                      {
                        key: r,
                        class: "item-linked button__link linked-"
                          .concat(o, " ")
                          .concat(t.url === e.link && "active"),
                      },
                      "a",
                      { href: "".concat(t.main_url).concat(e.link) },
                      !1
                    ),
                    [
                      n("RenderHtml", {
                        attrs: { html: "<strong>".concat(e.name, "</strong>") },
                      }),
                      t._v(" "),
                      0 !== e.price
                        ? n("span", [t._v(t._s(t.formatMoney(e.price)) + " đ")])
                        : n("span", [t._v("Giá liên hệ")]),
                    ],
                    1
                  );
                }),
                0
              ),
            ]);
          },
          [],
          !1,
          null,
          "da80e888",
          null
        );
      n.default = component.exports;
    },
    514: function (t, n, e) {
      "use strict";
      var r = e(7),
        o = e(49),
        c = e(27),
        l = /"/g,
        f = r("".replace);
      t.exports = function (t, n, e, r) {
        var d = c(o(t)),
          k = "<" + n;
        return (
          "" !== e && (k += " " + e + '="' + f(c(r), l, "&quot;") + '"'),
          k + ">" + d + "</" + n + ">"
        );
      };
    },
    515: function (t, n, e) {
      "use strict";
      var r = e(4);
      t.exports = function (t) {
        return r(function () {
          var n = ""[t]('"');
          return n !== n.toLowerCase() || n.split('"').length > 3;
        });
      };
    },
    518: function (t, n, e) {
      "use strict";
      var r = e(3),
        o = e(514);
      r(
        { target: "String", proto: !0, forced: e(515)("link") },
        {
          link: function (t) {
            return o(this, "a", "href", t);
          },
        }
      );
    },
    550: function (t, n, e) {
      t.exports = {};
    },
    587: function (t, n, e) {
      "use strict";
      e(550);
    },
  },
]);
