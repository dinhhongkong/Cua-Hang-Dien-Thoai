(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    1075: function (t, n, e) {
      "use strict";
      e(789);
    },
    1378: function (t, n, e) {
      "use strict";
      e.r(n);
      e(10);
      var r = {
          name: "BoxWarranty",
          props: {
            productState: { type: String, default: "" },
            productAccessories: { type: String, default: "" },
            warrantyContent: { type: String, default: "" },
          },
          computed: {
            detail: function () {
              return '<a style="color:red" v-bind="{href:\'https://cellphones.com.vn/chinh-sach-bao-hanh\'}" target="_blank">(xem chi tiết)</a>';
            },
          },
        },
        c = (e(1075), e(42)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "box-warranty-info" }, [
              t._m(0),
              t._v(" "),
              n("div", { staticClass: "box-content warranty-info" }, [
                t.productState
                  ? n(
                      "div",
                      { staticClass: "item-warranty-info" },
                      [
                        n("RenderHtml", {
                          staticClass: "icon",
                          attrs: { html: t.$icons().Cellphone },
                        }),
                        t._v(" "),
                        n("RenderHtml", {
                          staticClass: "description",
                          attrs: { html: t.productState },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t.productAccessories
                  ? n(
                      "div",
                      { staticClass: "item-warranty-info" },
                      [
                        n("RenderHtml", {
                          staticClass: "icon",
                          attrs: { html: t.$icons().Box },
                        }),
                        t._v(" "),
                        n("RenderHtml", {
                          staticClass: "description",
                          attrs: { html: t.productAccessories },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t.warrantyContent
                  ? n(
                      "div",
                      { staticClass: "item-warranty-info" },
                      [
                        n("RenderHtml", {
                          staticClass: "icon",
                          attrs: { html: t.$icons().Shield },
                        }),
                        t._v(" "),
                        n("RenderHtml", {
                          staticClass: "description",
                          attrs: {
                            html: "".concat(t.warrantyContent).concat(t.detail),
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "item-warranty-info" },
                  [
                    n("RenderHtml", {
                      staticClass: "icon icon-vat",
                      attrs: { html: t.$icons().VatIcon },
                    }),
                    t._v(" "),
                    n("div", { staticClass: "description" }, [
                      t._v("Giá sản phẩm đã bao gồm VAT"),
                    ]),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "box-title" }, [
                t("p", [this._v("Thông tin sản phẩm")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
    789: function (t, n, e) {
      t.exports = {};
    },
  },
]);
