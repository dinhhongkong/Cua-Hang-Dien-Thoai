(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    1071: function (t, e, o) {
      "use strict";
      o(785);
    },
    1374: function (t, e, o) {
      "use strict";
      o.r(e);
      o(47),
        o(5),
        o(34),
        o(32),
        o(57),
        o(33),
        o(16),
        o(24),
        o(58),
        o(59),
        o(36);
      function n(t, e) {
        var o =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!o) {
          if (
            Array.isArray(t) ||
            (o = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return l(t, e);
              var o = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === o && t.constructor && (o = t.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(t);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return l(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            o && (t = o);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          r = !0,
          d = !1;
        return {
          s: function () {
            o = o.call(t);
          },
          n: function () {
            var t = o.next();
            return (r = t.done), t;
          },
          e: function (t) {
            (d = !0), (c = t);
          },
          f: function () {
            try {
              r || null == o.return || o.return();
            } finally {
              if (d) throw c;
            }
          },
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
        return o;
      }
      var c = {
          name: "BoxProductTVC",
          props: {
            tvcList: {
              type: Array,
              default: function () {
                return [];
              },
            },
            showModal: { type: Boolean, default: !1 },
          },
          data: function () {
            return { isShowModal: !1, tvcListMini: [], selectedVideo: 0 };
          },
          watch: {
            showModal: function () {
              this.isShowModal = this.showModal;
            },
          },
          mounted: function () {
            var t = [];
            if (this.tvcList.length < 4) {
              var e,
                o = n(this.tvcList);
              try {
                for (o.s(); !(e = o.n()).done; ) {
                  var l = e.value;
                  t.push(l);
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
              this.tvcListMini = t;
            } else {
              for (var i = 0; i < 4; i++) t.push(this.tvcList[i]);
              this.tvcListMini = t;
            }
          },
          methods: {
            handleClickShowModal: function () {
              (this.isShowModal = !this.isShowModal),
                this.$emit("hideTVCModal");
            },
            handleClickVideo: function (t) {
              (this.isShowModal = !this.isShowModal), (this.selectedVideo = t);
            },
            handleClickVideoItem: function (t) {
              this.selectedVideo = t;
            },
          },
        },
        r = (o(1071), o(42)),
        component = Object(r.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "cps-block-boxProductTvc mb-3 ml-3 p-3" },
              [
                e("div", { staticClass: "boxProductTvc-title" }, [
                  e(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21.429",
                        height: "15",
                        viewBox: "0 0 21.429 15",
                      },
                    },
                    [
                      e("path", {
                        attrs: {
                          d: "M21.429,6.943V5.656a.855.855,0,0,0-.856-.856H.858A.856.856,0,0,0,0,5.656V6.943H2.143V9.086H0v2.143H2.143v2.143H0v2.143H2.143v2.143H0v1.284a.859.859,0,0,0,.858.858H20.573a.857.857,0,0,0,.856-.858V17.657H19.286V15.514h2.143V13.371H19.286V11.229h2.143V9.086H19.286V6.943h2.143ZM8.571,15.514V9.086L13.929,12.3,8.571,15.514Z",
                          transform: "translate(0 -4.8)",
                          fill: "#d70018",
                        },
                      }),
                    ]
                  ),
                  t._v(" "),
                  e("span", { staticClass: "ml-2 title is-6" }, [
                    t._v("Video đánh giá sản phẩm"),
                  ]),
                ]),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "boxProductTvc-content" },
                  t._l(t.tvcListMini, function (o, n) {
                    return e(
                      "div",
                      {
                        key: n,
                        staticClass:
                          "boxProductTvc-content-item button__click-vid my-3 is-flex is-justify-content-space-between",
                        on: {
                          click: function () {
                            return t.handleClickVideo(n);
                          },
                        },
                      },
                      [
                        e("nuxt-img", {
                          attrs: {
                            src: "https://img.youtube.com/vi/".concat(
                              o.video_id,
                              "/maxresdefault.jpg"
                            ),
                            alt: o.video_title,
                            loading: "lazy",
                          },
                        }),
                        t._v(" "),
                        e("p", [t._v(t._s(o.video_title))]),
                      ],
                      1
                    );
                  }),
                  0
                ),
                t._v(" "),
                t.tvcList.length > 4
                  ? e(
                      "button",
                      {
                        staticClass:
                          "boxProductTvc-button-modal is-flex is-justify-content-center is-align-items-center",
                        on: { click: t.handleClickShowModal },
                      },
                      [
                        e("span", [t._v("Xem tất cả video")]),
                        t._v(" "),
                        e("RenderHtml", {
                          staticClass: "ml-1",
                          attrs: { html: t.$icons().ChevronDown },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "modal", class: t.isShowModal && "is-active" },
                  [
                    e("div", {
                      staticClass: "modal-background",
                      on: { click: t.handleClickShowModal },
                    }),
                    t._v(" "),
                    e("div", { staticClass: "modal-content" }, [
                      e(
                        "div",
                        { staticClass: "boxProductTvc-modal-video-player" },
                        [
                          t.isShowModal
                            ? e("iframe", {
                                attrs: {
                                  width: "932",
                                  height: "524",
                                  src: "https://www.youtube.com/embed/".concat(
                                    t.tvcList[t.selectedVideo].video_id
                                  ),
                                  title: "YouTube video player",
                                  allow:
                                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                  allowfullscreen: "",
                                },
                              })
                            : t._e(),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "boxProductTvc-modal-video-list my-2" },
                        t._l(t.tvcList, function (o, n) {
                          return e(
                            "div",
                            {
                              key: n,
                              staticClass:
                                "boxProductTvc-modal-video-item is-flex is-justify-content-center mr-2",
                              class: t.selectedVideo === n && "is-active",
                              on: {
                                click: function () {
                                  return t.handleClickVideoItem(n);
                                },
                              },
                            },
                            [
                              e("nuxt-img", {
                                attrs: {
                                  src: "https://img.youtube.com/vi/".concat(
                                    o.video_id,
                                    "/maxresdefault.jpg"
                                  ),
                                  alt: o.video_title,
                                  loading: "lazy",
                                },
                              }),
                              t._v(" "),
                              e("p", { staticClass: "p-1" }, [
                                t._v(t._s(o.video_title) + " "),
                              ]),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ]),
                    t._v(" "),
                    e(
                      "button",
                      {
                        staticClass: "modal-close modal__button is-large",
                        attrs: { "aria-label": "close" },
                        on: { click: t.handleClickShowModal },
                      },
                      [t._v("X")]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "4f376769",
          null
        );
      e.default = component.exports;
    },
    785: function (t, e, o) {
      t.exports = {};
    },
  },
]);
