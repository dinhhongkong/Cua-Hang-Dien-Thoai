(window.webpackJsonp = window.webpackJsonp || []).push([
  [135],
  {
    1174: function (e, t, r) {
      "use strict";
      r.r(t);
      r(10), r(48), r(77), r(32), r(17), r(24), r(30), r(11), r(31);
      var n = r(0),
        l = r(6),
        o = (r(8), r(131), r(38), r(18), r(5), r(15)),
        c = r(499),
        d = r(530);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                Object(l.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = {
          name: "BoxVariant",
          props: {
            defaultId: { type: Number, default: 0 },
            variants: {
              type: Array,
              default: function () {
                return [];
              },
            },
            keySellingPoints: { type: String, default: "" },
            tvcList: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { isActive: 0, listIdInStock: [] };
          },
          computed: f({}, Object(o.d)("product", ["selectColorId"])),
          mounted: function () {
            console.log(this.variants),
              (this.listIdInStock = this.variants
                .filter(function (e) {
                  return [46, 152].includes(e.filterable.stock_available_id);
                })
                .map(function (e) {
                  var t;
                  return null === (t = e.general) || void 0 === t
                    ? void 0
                    : t.product_id;
                })),
              (this.isActive = parseInt(this.selectColorId));
          },
          methods: f(
            f(
              {
                slidingGalleryProduct: d.a,
                formatMoney: c.r,
                checkProductStatus: c.e,
              },
              Object(o.b)("product", ["handleChangeProductColor"])
            ),
            {},
            {
              changeColor: function (e) {
                this.listIdInStock.includes(e) &&
                  (this.handleChangeProductColor(e),
                  (this.isActive = this.selectColorId));
              },
              controlSwiperGallery: function (image, e) {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.next = 2), t.slidingGalleryProduct();
                          case 2:
                            return (r.next = 4), r.sent.swiperGallery;
                          case 4:
                            (n = r.sent).appendSlide(
                              '<div class="swiper-slide">\n                                  <img src="'
                                .concat(
                                  image,
                                  '"\n                                   alt="'
                                )
                                .concat(
                                  e,
                                  '"\n                                   title="'
                                )
                                .concat(
                                  e,
                                  '"\n                                  ></div>'
                                )
                            ),
                              n.slideTo(n.slides.length, 0);
                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
            }
          ),
        },
        w = r(42),
        component = Object(w.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "box-product-variants" }, [
              e._m(0),
              e._v(" "),
              t("div", { staticClass: "box-content" }, [
                t(
                  "ul",
                  { staticClass: "list-variants" },
                  e._l(e.variants, function (r, n) {
                    var l, o, c, d, v, f, h;
                    return t(
                      "li",
                      {
                        key:
                          null === (l = r.general) || void 0 === l
                            ? void 0
                            : l.attributes.id,
                        class: "item-variant "
                          .concat(
                            e.isActive ===
                              (null === (o = r.general) || void 0 === o
                                ? void 0
                                : o.attributes.id) && "active",
                            "\n          "
                          )
                          .concat(
                            !e.checkProductStatus(
                              r.filterable.stock_available_id,
                              r.filterable.stock,
                              r.filterable.price
                            ) && "disable"
                          ),
                      },
                      [
                        t(
                          "a",
                          {
                            staticClass:
                              "button__change-color is-flex is-align-items-center",
                            class:
                              !e.listIdInStock.includes(
                                null === (c = r.general) || void 0 === c
                                  ? void 0
                                  : c.attributes.id
                              ) && "disabled",
                            attrs: {
                              "data-index": n,
                              name: n,
                              title:
                                null === (d = r.general) || void 0 === d
                                  ? void 0
                                  : d.attributes.color,
                            },
                            on: {
                              click: function (t) {
                                var n, l, o;
                                e.changeColor(
                                  null === (n = r.general) || void 0 === n
                                    ? void 0
                                    : n.attributes.id
                                ),
                                  e.controlSwiperGallery(
                                    "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                      null === (l = r.general) || void 0 === l
                                        ? void 0
                                        : l.attributes.image
                                    ),
                                    null === (o = r.general) || void 0 === o
                                      ? void 0
                                      : o.attributes.color
                                  );
                              },
                            },
                          },
                          [
                            t("nuxt-img", {
                              attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "50",
                                height: "50",
                                src: "https://cdn2.cellphones.com.vn/35x/media/catalog/product".concat(
                                  null === (v = r.general) || void 0 === v
                                    ? void 0
                                    : v.attributes.image
                                ),
                                alt:
                                  null === (f = r.general) || void 0 === f
                                    ? void 0
                                    : f.name,
                                loading: "lazy",
                              },
                            }),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass: "is-flex is-flex-direction-column",
                              },
                              [
                                t(
                                  "strong",
                                  { staticClass: "item-variant-name" },
                                  [
                                    e._v(
                                      e._s(
                                        null === (h = r.general) || void 0 === h
                                          ? void 0
                                          : h.attributes.color
                                      )
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                t("span", [
                                  e._v(
                                    "\n                " +
                                      e._s(
                                        e.formatMoney(
                                          r.filterable.special_price ||
                                            r.filterable.price
                                        )
                                      ) +
                                      "₫\n            "
                                  ),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    );
                  }),
                  0
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this._self._c;
              return e("div", { staticClass: "box-title" }, [
                e("p", [this._v("Chọn màu để xem giá và chi nhánh có hàng")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    530: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return c;
        });
      var n = r(0),
        l = (r(8), r(513));
      function o() {
        var e = new l.default(".block-sliding-home .gallery-thumbs", {
          breakpoints: {
            320: { slidesPerView: 3 },
            717: { slidesPerView: 3.5 },
            820: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          },
          freeMode: !0,
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
        });
        return {
          swiperSlidingTop: new l.default(".block-sliding-home .gallery-top", {
            loop: !0,
            autoplay: { delay: 5e3 },
            pagination: {
              el: ".gallery-top + .swiper-pagination",
              clickable: !0,
            },
            disableOnInteraction: !0,
            navigation: {
              nextEl: ".block-sliding-home .swiper-button-next",
              prevEl: ".block-sliding-home .swiper-button-prev",
            },
            thumbs: { swiper: e },
            slidesPerView: "auto",
          }),
        };
      }
      function c() {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = Object(n.a)(
            regeneratorRuntime.mark(function e() {
              var t,
                r,
                n,
                o = arguments;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = o.length > 0 && void 0 !== o[0] ? o[0] : ""),
                        (e.next = 3),
                        new l.default(
                          t + " .gallery-product-detail .gallery-thumbs",
                          {
                            slidesPerView: "auto",
                            spaceBetween: 10,
                            freeMode: !0,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                          }
                        )
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        (n = new l.default(
                          t + " .gallery-product-detail .gallery-top",
                          {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            watchSlidesProgress: !0,
                            navigation: {
                              nextEl:
                                t +
                                " .gallery-product-detail .gallery-top .swiper-button-next",
                              prevEl:
                                t +
                                " .gallery-product-detail .gallery-top .swiper-button-prev",
                            },
                            thumbs: { swiper: r },
                          }
                        )),
                        e.abrupt("return", {
                          swiperGallery: n,
                          swiperGalleryThumbs: r,
                        })
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          d.apply(this, arguments)
        );
      }
    },
  },
]);
