(window.webpackJsonp = window.webpackJsonp || []).push([
  [131],
  {
    1177: function (t, e, r) {
      "use strict";
      r.r(e);
      r(24), r(18), r(5), r(30), r(11), r(31);
      var o = r(0),
        c = r(6),
        n = (r(8), r(131), r(17), r(15)),
        d = r(499);
      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(r), !0).forEach(function (e) {
                Object(c.a)(t, e, r[e]);
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
      var k = {
          name: "ExtendedWarranty",
          components: {},
          props: {
            price: { type: Number, default: 0 },
            productName: { type: String, default: "" },
            categoryIds: { type: String, default: "" },
          },
          data: function () {
            return {
              selectedPackId: {},
              dataExWa: {},
              packLocalStorage: {},
              isShowModal: !1,
              contentModal: "",
            };
          },
          computed: h(
            h({}, Object(n.d)("extended-warranty", ["extendedWarranty"])),
            Object(n.d)("product", ["productId", "selectColorId"])
          ),
          mounted: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.getDataExtendedWarranty({
                            productId: t.productId,
                            price: t.price,
                            categories: t.categoryIds,
                          })
                        );
                      case 2:
                        (t.dataExWa = t.extendedWarranty || {}),
                          (t.packLocalStorage = JSON.parse(
                            localStorage.getItem("ExWarrantyPack") || "{}"
                          )),
                          t.$set(
                            t.selectedPackId,
                            t.selectColorId,
                            null ===
                              (r = t.packLocalStorage[t.selectColorId]) ||
                              void 0 === r
                              ? void 0
                              : r.pack_id
                          );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: h(
            h(
              { formatMoney: d.r },
              Object(n.b)("extended-warranty", ["getDataExtendedWarranty"])
            ),
            {},
            {
              changePack: function (t) {
                this.selectedPackId[this.selectColorId] === t.pack_id
                  ? (this.$set(this.selectedPackId, this.selectColorId, 0),
                    delete this.packLocalStorage[this.selectColorId])
                  : (this.$set(
                      this.selectedPackId,
                      this.selectColorId,
                      t.pack_id
                    ),
                    this.$set(this.packLocalStorage, this.selectColorId, t),
                    (this.packLocalStorage[this.selectColorId].product_name =
                      this.productName)),
                  localStorage.setItem(
                    "ExWarrantyPack",
                    JSON.stringify(this.packLocalStorage)
                  );
              },
              openModalPack: function (t) {
                (this.contentModal = t), (this.isShowModal = !0);
              },
            }
          ),
        },
        v = (r(596), r(42)),
        component = Object(v.a)(
          k,
          function () {
            var t,
              e = this,
              r = e._self._c;
            return null !== (t = e.dataExWa[e.productId]) &&
              void 0 !== t &&
              t.warranty_packs
              ? r(
                  "div",
                  {
                    staticClass: "box-warranty-info",
                    attrs: { id: "extendedWarranty" },
                  },
                  [
                    r("div", { staticClass: "box-head" }, [
                      r("div", { staticClass: "icon" }, [
                        r(
                          "svg",
                          {
                            attrs: {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            r("path", {
                              attrs: {
                                d: "M21.0463 5.49846C21.1395 6.71873 21.2804 10.0468 20.5004 14C19.7028 18.0424 14.6383 20.7776 12.7277 21.6769C12.2638 21.8953 11.7352 21.8953 11.2713 21.6769C9.36088 20.7775 4.29699 18.0424 3.49952 14C2.7196 10.0465 2.86094 6.71827 2.95427 5.49821C2.97838 5.18299 3.15935 4.90933 3.43857 4.7611C4.77687 4.05062 8.90731 2 11.9989 2C15.0904 2 19.2228 4.05058 20.5618 4.76108C20.8412 4.90932 21.0222 5.18311 21.0463 5.49846Z",
                                stroke: "#121219",
                                "stroke-width": "1.5",
                              },
                            }),
                            e._v(" "),
                            r("path", {
                              attrs: {
                                d: "M9.00017 11.665L10.9365 13.878C11.1428 14.1137 11.5125 14.1039 11.706 13.8577L15.0002 9.66504",
                                stroke: "#121219",
                                "stroke-width": "1.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            }),
                          ]
                        ),
                      ]),
                      e._v(" "),
                      r("div", { staticClass: "box-title" }, [
                        r("p", [
                          e._v(
                            "\n        Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng\n        "
                          ),
                          e.dataExWa[e.productId].warranty_url
                            ? r(
                                "a",
                                e._b(
                                  {
                                    staticClass: "button__link-warranty",
                                    attrs: { target: "_blank" },
                                  },
                                  "a",
                                  {
                                    href: e.dataExWa[e.productId].warranty_url,
                                  },
                                  !1
                                ),
                                [r("em", [e._v("Xem chi tiết")])]
                              )
                            : e._e(),
                        ]),
                        e._v(" "),
                        r("p", { staticClass: "note" }, [
                          e._v(
                            "(Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại cửa hàng nhanh nhất, số\n        tiền phải thanh toán chưa bao gồm giá trị của gói bảo hành mở rộng)"
                          ),
                        ]),
                      ]),
                    ]),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "list-warranty" },
                      [
                        e._l(
                          e.dataExWa[e.productId].warranty_packs,
                          function (t) {
                            return r(
                              "label",
                              {
                                key: t.pack_id,
                                staticClass: "radio button__choose-warranty",
                                class: {
                                  active:
                                    t.pack_id ===
                                    e.selectedPackId[e.selectColorId],
                                },
                                attrs: {
                                  "data-one": t.pack_id,
                                  "data-two": e.selectedPackId[e.selectColorId],
                                },
                              },
                              [
                                r("input", {
                                  staticClass: "button__choose-warranty",
                                  attrs: {
                                    type: "radio",
                                    name: "extendedWarranty",
                                  },
                                  domProps: {
                                    checked:
                                      t.pack_id ===
                                      e.selectedPackId[e.selectColorId],
                                  },
                                  on: {
                                    click: function (r) {
                                      return e.changePack(t);
                                    },
                                  },
                                }),
                                e._v(
                                  "\n      " + e._s(t.pack_title) + "\n      "
                                ),
                                r(
                                  "span",
                                  {
                                    staticClass:
                                      "is-flex is-justify-content-space-between is-align-content-center",
                                  },
                                  [
                                    r(
                                      "span",
                                      { staticClass: "is-block price" },
                                      [
                                        e._v(
                                          e._s(e.formatMoney(t.value)) + " đ"
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    r(
                                      "button",
                                      {
                                        staticClass:
                                          "btn-pop-up button__show-warranty",
                                        on: {
                                          click: function (r) {
                                            return e.openModalPack(t);
                                          },
                                        },
                                      },
                                      [r("em", [e._v("Xem chi tiết")])]
                                    ),
                                  ]
                                ),
                              ]
                            );
                          }
                        ),
                        e._v(" "),
                        r(
                          "div",
                          {
                            staticClass: "modal",
                            class: !e.isShowModal || "is-active",
                            attrs: { id: "modalExtendedWarranty" },
                          },
                          [
                            r("div", {
                              staticClass: "modal-background",
                              on: {
                                click: function (t) {
                                  e.isShowModal = !1;
                                },
                              },
                            }),
                            e._v(" "),
                            r("div", { staticClass: "modal-card" }, [
                              r("header", { staticClass: "modal-card-head" }, [
                                r("p", { staticClass: "modal-card-title" }, [
                                  e._v(e._s(e.contentModal.pack_title)),
                                ]),
                                e._v(" "),
                                r("button", {
                                  staticClass: "delete",
                                  attrs: { "aria-label": "close" },
                                  on: {
                                    click: function (t) {
                                      e.isShowModal = !1;
                                    },
                                  },
                                }),
                              ]),
                              e._v(" "),
                              r(
                                "section",
                                { staticClass: "modal-card-body" },
                                [
                                  r("RenderHtml", {
                                    attrs: {
                                      html: e.contentModal.pack_tooltip,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]
                )
              : r("div");
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    559: function (t, e, r) {
      t.exports = {};
    },
    596: function (t, e, r) {
      "use strict";
      r(559);
    },
  },
]);
