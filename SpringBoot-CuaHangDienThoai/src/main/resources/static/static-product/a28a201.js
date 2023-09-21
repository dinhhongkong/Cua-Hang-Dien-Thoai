(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    1117: function (t, e, l) {
      "use strict";
      l(827);
    },
    1414: function (t, e, l) {
      "use strict";
      l.r(e);
      l(32);
      var n = l(0),
        r = (l(8), l(530)),
        o = {
          name: "GalleryProductDetail",
          props: {
            gallery: {
              type: Object,
              default: function () {
                return {};
              },
            },
            keySellingPoints: { type: String, default: "" },
            featureImage: { type: String, default: "" },
            diffClass: { type: String, default: "" },
            tvcList: {
              type: Array,
              default: function () {
                return [];
              },
            },
            keySellingPointsTitle: { type: String, default: "" },
            showGalleryThumbs: { type: Boolean, default: !0 },
          },
          data: function () {
            return {
              imgPlaceHolder:
                "https://cdn2.cellphones.com.vn/690x300/media/wysiwyg/placehoder.png",
            };
          },
          mounted: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), t.slidingGalleryProduct(t.diffClass)
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            slidingGalleryProduct: r.a,
            handleClickShowBoxTvc: function () {
              this.$emit("showBoxTVCModal");
            },
          },
        },
        c = (l(1117), l(42)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "gallery-product-detail mb-2" }, [
              e(
                "div",
                { staticClass: "gallery-slide gallery-top swiper-container" },
                [
                  e(
                    "div",
                    { staticClass: "swiper-wrapper" },
                    [
                      t.keySellingPoints && t.$device.isDesktop
                        ? e(
                            "div",
                            {
                              staticClass: "swiper-slide ksp-gallery",
                              attrs: { id: "v2Gallery" },
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "box-ksp is-flex is-flex-direction-row",
                                },
                                [
                                  e("nuxt-img", {
                                    staticClass: "mb-1 mr-2",
                                    attrs: {
                                      alt: t.keySellingPointsTitle,
                                      provider: "CPS_IMG_PROVIDER",
                                      format: "webp",
                                      title: t.keySellingPointsTitle,
                                      placeholder:
                                        "https://cdn2.cellphones.com.vn/358x/media/wysiwyg/placehoder.png",
                                      src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                        t.featureImage
                                      ),
                                      height: "358",
                                      width: "358",
                                      loading: "lazy",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "div",
                                    [
                                      e("p", { staticClass: "title desktop" }, [
                                        t._v("Tính năng nổi bật"),
                                      ]),
                                      t._v(" "),
                                      e("RenderHtml", {
                                        staticClass: "desktop",
                                        attrs: { html: t.keySellingPoints },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "mobile" },
                                    [
                                      e("p", { staticClass: "title" }, [
                                        t._v("Tính năng nổi bật"),
                                      ]),
                                      t._v(" "),
                                      e("RenderHtml", {
                                        attrs: { html: t.keySellingPoints },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : t.keySellingPoints
                        ? e(
                            "div",
                            { staticClass: "swiper-slide ksp-gallery" },
                            [
                              e(
                                "div",
                                { staticClass: "box-ksp" },
                                [
                                  e("p", { staticClass: "title desktop" }, [
                                    t._v("Tính năng nổi bật"),
                                  ]),
                                  t._v(" "),
                                  e("nuxt-img", {
                                    staticClass: "mb-1",
                                    attrs: {
                                      alt: t.keySellingPointsTitle,
                                      provider: "CPS_IMG_PROVIDER",
                                      format: "webp",
                                      title: t.keySellingPointsTitle,
                                      placeholder:
                                        "https://cdn2.cellphones.com.vn/358x/media/wysiwyg/placehoder.png",
                                      src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(
                                        t.featureImage
                                      ),
                                      height: "358",
                                      loading: "lazy",
                                    },
                                  }),
                                  t._v(" "),
                                  e("RenderHtml", {
                                    staticClass: "desktop",
                                    attrs: { html: t.keySellingPoints },
                                  }),
                                  t._v(" "),
                                  e(
                                    "div",
                                    { staticClass: "mobile" },
                                    [
                                      e("p", { staticClass: "title" }, [
                                        t._v("Tính năng nổi bật"),
                                      ]),
                                      t._v(" "),
                                      e("RenderHtml", {
                                        attrs: { html: t.keySellingPoints },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t.tvcList.length > 0
                        ? e(
                            "div",
                            {
                              staticClass: "swiper-slide ksp-gallery",
                              on: { click: t.handleClickShowBoxTvc },
                            },
                            [
                              e(
                                "div",
                                { staticClass: "box-ksp ksp-video" },
                                [
                                  e("RenderHtml", {
                                    staticClass: "icon",
                                    attrs: {
                                      html: t.$icons().YoutubePlayButton,
                                    },
                                  }),
                                  t._v(" "),
                                  e("nuxt-img", {
                                    staticClass: "video-thumbnail",
                                    attrs: {
                                      alt: "Video",
                                      title: t.keySellingPointsTitle,
                                      src: "https://img.youtube.com/vi/".concat(
                                        t.tvcList[0].video_id,
                                        "/maxresdefault.jpg"
                                      ),
                                      loading: "lazy",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t._l(t.gallery, function (l, n) {
                        return e(
                          "div",
                          { key: n, staticClass: "swiper-slide" },
                          [
                            e(
                              "a",
                              t._b(
                                { staticClass: "spotlight" },
                                "a",
                                {
                                  href: "https://cdn2.cellphones.com.vn/x/media/catalog/product".concat(
                                    l.img
                                  ),
                                },
                                !1
                              ),
                              [
                                e("nuxt-img", {
                                  attrs: {
                                    src: "https://cdn2.cellphones.com.vn/x/media/catalog/product".concat(
                                      l.img
                                    ),
                                    alt: l.name,
                                    title: t.keySellingPointsTitle,
                                    placeholder:
                                      "https://cdn2.cellphones.com.vn/358x/media/wysiwyg/placehoder.png",
                                    provider: "CPS_IMG_PROVIDER",
                                    format: "webp",
                                    height: "358",
                                    rel: "preload",
                                    loading: "lazy",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                    ],
                    2
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass:
                        "swiper-button-next button__view-gallery-next",
                    },
                    [
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
                      staticClass:
                        "swiper-button-prev button__view-gallery-prev",
                    },
                    [
                      e("RenderHtml", {
                        staticClass: "icon",
                        attrs: { html: t.$icons().ChevronLeft },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              t._v(" "),
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.showGalleryThumbs,
                      expression: "showGalleryThumbs",
                    },
                  ],
                  staticClass:
                    "thumbnail-slide swiper-container gallery-thumbs",
                },
                [
                  e(
                    "div",
                    { staticClass: "swiper-wrapper" },
                    [
                      t.keySellingPoints
                        ? e(
                            "div",
                            {
                              staticClass:
                                "swiper-slide ksp-thumbs button__view-gallery-thumb",
                            },
                            [
                              e(
                                "svg",
                                {
                                  staticStyle: { "padding-bottom": "3px" },
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink":
                                      "http://www.w3.org/1999/xlink",
                                    viewBox: "0 0 21 20",
                                  },
                                },
                                [
                                  e("title", [t._v("star")]),
                                  t._v(" "),
                                  e(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Layer_2",
                                        "data-name": "Layer 2",
                                      },
                                    },
                                    [
                                      e(
                                        "g",
                                        {
                                          attrs: {
                                            id: "Layer_1-2",
                                            "data-name": "Layer 1",
                                          },
                                        },
                                        [
                                          e("image", {
                                            attrs: {
                                              width: "21",
                                              height: "20",
                                              "xlink:href":
                                                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABHNCSVQICAgIfAhkiAAAAZlJREFUOE+lVYtRQjEQ3FSgVoBUIB2gFWgHYgdLBUIFbgdCB3YgdgAVaAfSQZx9kzB5fwYzk5mXkGz27naPgDMGyQ2ARwBLSf4eHGHsAMkFgHcABwATAFNJx6F754D+ADDIE4BvAGtJq4tBC5YvDpvkB4D5GNtBpiR3AG4l3ZoZyXsAnym36mPbCUpyFkK4izG6KBXLDJAemoQQFjHGQ1d+A0mzeAZgFtcAZgUDXyrXZuu1I7gqznl9DCHsYoxbg7oQBtsD8LdndUiS91qDZH7chDz9kPec77VBfdFSeegDGZNdyneW3tKgOZx4KXChkq2kRVWo/wA3AY13qv4lwF2ANdAG450kO6h3JNXYYVXI5cGWTpMOIckSOwe0puMW08TWPt9I4ljVSbq4rV5QY5r099tlQ4cryRo+jb6omqDZ29asDWBlOF+vSeTec0+tTJH67FzStDenJB3yG4CbZFt/2zFfANyh/LuN4l6wBlA9KKlGrsnUfdKszMis3ZhZsLYVDexp7+dzp8iGJOVirfr+OlLuM/i+qZQ/ZTTSBXFK4lAAAAAASUVORK5CYII=",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e("p", [t._v("Tính năng nổi bật")]),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t.tvcList.length > 0
                        ? e(
                            "div",
                            {
                              staticClass:
                                "swiper-slide ksp-thumbs button__view-gallery-vid",
                            },
                            [
                              e("RenderHtml", {
                                attrs: { html: t.$icons().Movie },
                              }),
                              t._v(" "),
                              e("p", [t._v("Video")]),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      t._l(t.gallery, function (l, n) {
                        return e(
                          "div",
                          {
                            key: n,
                            staticClass: "swiper-slide button__view-gallery",
                          },
                          [
                            e("nuxt-img", {
                              attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                src: "https://cdn2.cellphones.com.vn/50x/media/catalog/product".concat(
                                  l.img
                                ),
                                alt: "".concat(l.name, " - thumb"),
                                placeholder:
                                  "https://cdn2.cellphones.com.vn/358x/media/wysiwyg/placehoder.png",
                                title: t.keySellingPointsTitle,
                                width: "58",
                                height: "58",
                                loading: "lazy",
                              },
                            }),
                          ],
                          1
                        );
                      }),
                    ],
                    2
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    530: function (t, e, l) {
      "use strict";
      l.d(e, "b", function () {
        return o;
      }),
        l.d(e, "a", function () {
          return c;
        });
      var n = l(0),
        r = (l(8), l(513));
      function o() {
        var t = new r.default(".block-sliding-home .gallery-thumbs", {
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
          swiperSlidingTop: new r.default(".block-sliding-home .gallery-top", {
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
            thumbs: { swiper: t },
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
            regeneratorRuntime.mark(function t() {
              var e,
                l,
                n,
                o = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = o.length > 0 && void 0 !== o[0] ? o[0] : ""),
                        (t.next = 3),
                        new r.default(
                          e + " .gallery-product-detail .gallery-thumbs",
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
                        (l = t.sent),
                        (n = new r.default(
                          e + " .gallery-product-detail .gallery-top",
                          {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            watchSlidesProgress: !0,
                            navigation: {
                              nextEl:
                                e +
                                " .gallery-product-detail .gallery-top .swiper-button-next",
                              prevEl:
                                e +
                                " .gallery-product-detail .gallery-top .swiper-button-prev",
                            },
                            thumbs: { swiper: l },
                          }
                        )),
                        t.abrupt("return", {
                          swiperGallery: n,
                          swiperGalleryThumbs: l,
                        })
                      );
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          d.apply(this, arguments)
        );
      }
    },
    827: function (t, e, l) {
      t.exports = {};
    },
  },
]);
