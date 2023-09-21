(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    1333: function (t, e, o) {
      "use strict";
      o.r(e);
      o(17), o(24), o(18), o(30), o(11), o(31);
      var r = o(0),
        n = o(6),
        c = (o(38), o(32), o(5), o(48), o(77), o(8), o(15));
      function l(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(o), !0).forEach(function (e) {
                Object(n.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : l(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "PdpCompareButton",
          props: {
            productData: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return { displayButtonCondition: !1 };
          },
          computed: d(
            {},
            Object(c.d)("pdp-compare", [
              "storageCompareData",
              "isShowModal",
              "isShowButton",
              "storageCompareDataValues",
            ])
          ),
          watch: {
            storageCompareDataValues: function () {
              !this.storageCompareData[
                "".concat(this.productData.general.attributes.product_id)
              ] && this.storageCompareDataValues.length < 3
                ? (this.displayButtonCondition = !0)
                : (this.displayButtonCondition = !1);
            },
          },
          mounted: function () {
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: d(
            d(
              {},
              Object(c.c)("pdp-compare", [
                "setCompareStorageData",
                "pushToStorageData",
                "showCompareModal",
                "showButton",
              ])
            ),
            {},
            {
              addToLocalStorage: function () {
                if (this.displayButtonCondition) {
                  this.checkSimilarCategory() ||
                    (localStorage.removeItem("compare_products"),
                    this.setCompareStorageData({}));
                  var t = this.productData.general.categories.map(function (t) {
                    return t.categoryId;
                  });
                  this.pushToStorageData({
                    id: this.productData.general.attributes.product_id,
                    data: {
                      name: this.productData.general.name,
                      thumbnail: this.productData.filterable.thumbnail,
                      id: this.productData.general.attributes.product_id,
                      category_ids: t,
                      path: this.productData.general.attributes.url_key,
                    },
                  }),
                    localStorage.setItem(
                      "compare_products",
                      JSON.stringify(this.storageCompareData)
                    );
                }
                this.showButton(), this.isShowModal || this.showCompareModal();
              },
              checkSimilarCategory: function () {
                var t = this;
                return (
                  0 === this.storageCompareDataValues.length ||
                  (console.log(this.storageCompareDataValues[0].category_ids),
                  this.productData.general.categories.some(function (e) {
                    return t.storageCompareDataValues[0].category_ids.includes(
                      parseInt(e.similar)
                    );
                  }))
                );
              },
            }
          ),
        },
        m = o(42),
        component = Object(m.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return t.displayButtonCondition && t.isShowButton
              ? e(
                  "div",
                  {
                    staticClass:
                      "pdp-compare-button-box is-flex is-align-items-center",
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "btn",
                        on: {
                          click: function (e) {
                            return t.addToLocalStorage();
                          },
                        },
                      },
                      [t._v("+ So sánh")]
                    ),
                  ]
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
  },
]);
