(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    1072: function (t, e, n) {
      "use strict";
      n(786);
    },
    1375: function (t, e, n) {
      "use strict";
      n.r(e);
      n(94), n(32), n(501), n(296), n(5), n(205), n(17), n(24), n(30), n(31);
      var r = n(20),
        c = n(0),
        o = n(6),
        l =
          (n(8),
          n(33),
          n(36),
          n(48),
          n(77),
          n(38),
          n(18),
          n(10),
          n(57),
          n(47),
          n(297),
          n(209),
          n(167),
          n(294),
          n(110),
          n(11),
          n(16),
          n(107),
          n(15)),
        v = n(517),
        d = n(499);
      function h(t, e) {
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
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var f = {
          name: "BoxReview",
          components: {
            VueRecaptcha: v.a,
            BoxPrice: function () {
              return n.e(16).then(n.bind(null, 1168));
            },
          },
          props: {
            title: { type: String, default: "Đánh giá & nhận xét" },
            productInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
            titleProduct: { type: String, default: "" },
            isProductDetail: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              isReviewPage: !1,
              showReviewBox: !1,
              starLevel: [
                { level: 1, label: "Rất Tệ" },
                { level: 2, label: "Tệ" },
                { level: 3, label: "Bình thường" },
                { level: 4, label: "Tốt" },
                { level: 5, label: "Tuyệt vời" },
              ],
              formData: {
                fullName: "",
                phone: "",
                content: "",
                rating_id: 5,
                image: [],
                attributes: [],
              },
              isLoading: !1,
              isErrorGGCapcha: !1,
              tokenRecaptcha: "",
              showMoreReviewBtn: !0,
              numberOfImage: 0,
              imgIndex: 0,
              reviewFilterOption: {
                hasPhoto: !1,
                isPurchased: !1,
                ratingId: 0,
              },
              arrShowImg: [],
            };
          },
          computed: m(
            m(
              m(
                m(
                  {},
                  Object(l.d)("review", [
                    "rating",
                    "reviewData",
                    "page",
                    "totalReviews",
                    "reviewDataItems",
                    "reviewQuestionData",
                    "totalAllReviews",
                  ])
                ),
                Object(l.d)("product", ["productId"])
              ),
              Object(l.d)("login", ["user"])
            ),
            {},
            {
              listRatingCount: function () {
                var t;
                return (null === (t = this.rating.rating_count) || void 0 === t
                  ? void 0
                  : t.length) > 0
                  ? this.rating.rating_count
                  : [
                      { rating_id: 5, count: 0 },
                      { rating_id: 4, count: 0 },
                      { rating_id: 3, count: 0 },
                      { rating_id: 2, count: 0 },
                      { rating_id: 1, count: 0 },
                    ];
              },
            }
          ),
          mounted: function () {
            this.$route.path.includes("review") && (this.isReviewPage = !0);
          },
          methods: m(
            m(
              m(
                m(
                  {
                    formatDate: d.q,
                    convertHtmlToString: d.g,
                    customRegex: d.p,
                    formatMoney: d.r,
                    scrollToTabId: d.D,
                  },
                  Object(l.b)("review", [
                    "getRatingProduct",
                    "getReviewData",
                    "getReviewsGraphqlV2",
                    "getReviewQuestionGraphql",
                  ])
                ),
                Object(l.c)("login", ["toggleModalLogin"])
              ),
              Object(l.c)("review", ["clearReviewData"])
            ),
            {},
            {
              handleClickShowReviewBox: function () {
                var t = this;
                return Object(c.a)(
                  regeneratorRuntime.mark(function e() {
                    var n, r, c, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.user.loggedIn) {
                              e.next = 9;
                              break;
                            }
                            if (
                              0 !==
                                (null === (n = t.reviewQuestionData) ||
                                void 0 === n
                                  ? void 0
                                  : n.length) ||
                              !1 !== t.showReviewBox
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (c =
                                null === (r = t.productInfo.general) ||
                                void 0 === r ||
                                null === (r = r.categories) ||
                                void 0 === r
                                  ? void 0
                                  : r
                                      .filter(function (t) {
                                        return t.categoryId && t.level;
                                      })
                                      .map(function (t) {
                                        return {
                                          level: t.level,
                                          categoryId: t.categoryId,
                                        };
                                      })),
                              (e.next = 5),
                              t.getReviewQuestionGraphql({ arrCateId: c })
                            );
                          case 5:
                            t.reviewQuestionData &&
                              (t.formData.attributes =
                                null === (o = t.reviewQuestionData) ||
                                void 0 === o
                                  ? void 0
                                  : o
                                      .filter(function (t) {
                                        return t.attribute_name && t.id;
                                      })
                                      .map(function (t) {
                                        return {
                                          attribute_name: t.attribute_name,
                                          review_attribute_id: t.id,
                                          rating_id: 5,
                                        };
                                      }));
                          case 6:
                            (t.showReviewBox = !t.showReviewBox), (e.next = 10);
                            break;
                          case 9:
                            t.toggleModalLogin({
                              condition: !0,
                              title: "đánh giá",
                            });
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              handleClickReviewAll: function (t) {
                this.formData.rating_id = t;
              },
              handleClickReviewItem: function (t, e) {
                for (var i = 0; i < this.formData.attributes.length; i++)
                  this.formData.attributes[i].review_attribute_id === e &&
                    (this.formData.attributes[i].rating_id = t);
              },
              onImageChange: function (t) {
                if (
                  t.target.files.length > 0 &&
                  ((this.arrShowImg = []),
                  (this.formData.image = [].concat(
                    Object(r.a)(this.formData.image),
                    Object(r.a)(Array.from(t.target.files))
                  )),
                  this.formData.image.length > 3 &&
                    (this.$alertMessage({
                      message: "Vui lòng chỉ tải lên tối đa 3 hình ảnh",
                      icon: "CircleExclamation",
                      type: "error",
                    }),
                    (this.formData.image = this.formData.image.slice(0, 3))),
                  (this.numberOfImage =
                    this.formData.image.length > 3
                      ? 3
                      : this.formData.image.length),
                  t.target.files && t.target.files[0] && this.numberOfImage > 0)
                ) {
                  if (!t.target.files) return;
                  for (var i = 0; i < this.numberOfImage; i++)
                    this.arrShowImg.push(
                      URL.createObjectURL(this.formData.image[i])
                    );
                }
              },
              delImg: function (t) {
                this.arrShowImg.splice(t, 1),
                  this.formData.image.splice(t, 1),
                  (this.numberOfImage =
                    this.formData.image.length > 3
                      ? 3
                      : this.formData.image.length),
                  this.$forceUpdate();
              },
              handleSubmitForm: function () {
                (this.user &&
                  this.user.loggedIn &&
                  ((this.formData.fullName = this.user.name),
                  (this.formData.phone = this.user.phone)),
                this.formData.fullName.length <= 1)
                  ? this.$alertMessage({
                      message: "Họ và tên quá ngắn, vui lòng nhập lại",
                      icon: "CircleExclamation",
                      type: "error",
                    })
                  : Object(d.p)(this.formData.phone, "phone")
                  ? ((this.formData.content = this.formData.content.trim()),
                    this.formData.content.length < 15
                      ? this.$alertMessage({
                          message:
                            "Bình luận của bạn quá ngắn, vui lòng nhập lại",
                          icon: "CircleExclamation",
                          type: "error",
                        })
                      : this.formData.rating_id < 1
                      ? this.$alertMessage({
                          message: "Vui lòng chọn số sao tương ứng",
                          icon: "CircleExclamation",
                          type: "error",
                        })
                      : this.submitForm())
                  : this.$alertMessage({
                      message: "Vui lòng kiểm tra lại số điện thoại",
                      icon: "CircleExclamation",
                      type: "error",
                    });
              },
              submitForm: function () {
                var t = this;
                return Object(c.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, c, data, i, o, l;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t.isLoading = !0),
                                (r = n(533)),
                                (c = t.$route.params.slug
                                  ? t.$route.params.slug
                                  : t.$route.params.review + ".html"),
                                (data = new r()),
                                !(t.numberOfImage > 0))
                              ) {
                                e.next = 26;
                                break;
                              }
                              i = 0;
                            case 6:
                              if (!(i < t.numberOfImage)) {
                                e.next = 26;
                                break;
                              }
                              if (
                                null !== (o = t.formData.image[i].type) &&
                                void 0 !== o &&
                                o.startsWith("image/")
                              ) {
                                e.next = 13;
                                break;
                              }
                              return (
                                t.$alertMessage({
                                  message: "Vui lòng chỉ tải lên tệp hình ảnh",
                                  icon: "CircleExclamation",
                                  type: "error",
                                }),
                                (t.arrShowImg = []),
                                (t.formData.image = []),
                                (t.isLoading = !1),
                                e.abrupt("return")
                              );
                            case 13:
                              if (!(t.formData.image[i].size < 2097152)) {
                                e.next = 18;
                                break;
                              }
                              data.append("photos[]", t.formData.image[i]),
                                console.log(t.formData.image[i].size),
                                (e.next = 23);
                              break;
                            case 18:
                              return (
                                t.$alertMessage({
                                  message:
                                    "Hình ảnh vượt quá dung lượng cho phép, vui lòng chỉ tải các hình ảnh có dung lượng bé hơn 1MB",
                                  icon: "CircleExclamation",
                                  type: "error",
                                }),
                                (t.arrShowImg = []),
                                (t.formData.image = []),
                                (t.isLoading = !1),
                                e.abrupt("return")
                              );
                            case 23:
                              i++, (e.next = 6);
                              break;
                            case 26:
                              return (
                                t.formData.attributes.forEach(function (t, e) {
                                  data.append(
                                    "attributes[".concat(
                                      e,
                                      "][review_attribute_id]"
                                    ),
                                    t.review_attribute_id
                                  ),
                                    data.append(
                                      "attributes[".concat(e, "][rating_id]"),
                                      t.rating_id
                                    ),
                                    data.append(
                                      "attributes[".concat(
                                        e,
                                        "][attribute_name]"
                                      ),
                                      t.attribute_name
                                    );
                                }),
                                data.append("fullname", t.formData.fullName),
                                data.append("product_id", t.productId),
                                data.append(
                                  "product_url",
                                  "https://cellphones.com.vn/".concat(c)
                                ),
                                data.append("phone", t.formData.phone),
                                data.append("rating_id", t.formData.rating_id),
                                data.append("content", t.formData.content),
                                t.isErrorGGCapcha &&
                                  data.append(
                                    "g-recaptcha-response",
                                    t.tokenRecaptcha
                                  ),
                                (l = {
                                  method: "post",
                                  url: "https://customer.cps.onl/reviews-api/create",
                                  mimeType: "multipart/form-data",
                                  processData: !1,
                                  contentType: !1,
                                  timeOut: 5e3,
                                  headers: {
                                    accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest",
                                    authorization:
                                      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZWY1ZWQ5NjExYmYzNWRjZTM3OGUyYmY4NzJmODk0ZWQ0MjZiZThiMWE1NWYxZDI0MzJiMGRjMGI4ZTFhMTBhYzg3MGMwNjVmZjA3NTkyYjciLCJpYXQiOjE2MzY0NzI3NzIuNTg3NDc3LCJuYmYiOjE2MzY0NzI3NzIuNTg3NDgxLCJleHAiOjQ3OTIxNDYzNzIuNTg0MzQ2LCJzdWIiOiIiLCJzY29wZXMiOlsicmV2aWV3X2dldCJdfQ.dKwVnJzELP3lc7G5gFYEmmF0GaZxNgSI0kgIGP_HGzR1oPG8l0I8jFZCVOLrJgQijfSOHezMQfKzI2TUavOBvkwxQmD3clorx48S8faQ-23D2xdM_XdikkieamlXBSjTKyBQlntUqL9ZBu-o5IrWfICVes5uJ-olCtswxiWEycjq8k7sQYLsAaJLFsr6v1Z4iKwENMLqeOd_v8OHbMQYi_7aL5cphnOFdAnYx_uB2qhqgbCaNUIBGl-X2h0z1BC7-gyfqxpWI7v8KpZXdUrP9OG8pt0ixSYvVqVweVh1yHYIMHxq1bd22OHSIByrWxpfzPgz3VSpunGtAvSmkkz2kyTNuznkWV3O7qw1ZlgcyYzZ_vEI1mI1jGh_AB69FnWYpU_a_e1nErkl4pmZFLQAjC4PUVlYcZbccd-hLmh0cCL0Xjzl7CT97rzfqWZ-Xy6AP4_Q3R--VDHjMr9pHdYk6U7szioxYf181wmFFw0UHw4HLhuofHbYjVjAr_XI9qXGfuZ4nvR8cmbtrDK6dGQZ5MW6ZgbTs1C1SJvPyvNyEV7-2pa8DVfNQlMe_wWAPq0nD38zb8wF1memXm_nRNYEEfxYW3H9XpKBLsVL0pszyn-5oyLwz5FkLCYi-bdjrrx8ITW6O68tx1r4zb-CXZr8HJF9vvqT2grd0wd-YExDPZc",
                                  },
                                  data: data,
                                }),
                                (e.prev = 35),
                                (e.next = 38),
                                t.$axios(l)
                              );
                            case 38:
                              200 === e.sent.status &&
                                ((t.showReviewBox = !1),
                                t.$alertMessage({
                                  message:
                                    "CellphoneS đã nhận được phản hồi của bạn",
                                  icon: "CircleExclamation",
                                  type: "success",
                                }),
                                (t.formData = {
                                  fullName: "",
                                  phone: "",
                                  content: "",
                                  rating_id: 5,
                                  image: [],
                                  attributes: [],
                                }),
                                (t.arrShowImg = []),
                                (t.numberOfImage = 0)),
                                (e.next = 47);
                              break;
                            case 42:
                              (e.prev = 42),
                                (e.t0 = e.catch(35)),
                                (t.isLoading = !1),
                                t.$alertMessage({
                                  message: "Hệ thống đang gặp sự cố",
                                  icon: "CircleExclamation",
                                  type: "error",
                                }),
                                429 === e.t0.response.status &&
                                  (t.isErrorGGCapcha = !0);
                            case 47:
                              t.isLoading = !1;
                            case 48:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[35, 42]]
                    );
                  })
                )();
              },
              verifyToken: function (data) {
                this.tokenRecaptcha = data;
              },
              handleExpired: function () {
                this.tokenRecaptcha = "";
              },
              getMoreInfo: function () {
                if (this.$route.params.slug) {
                  var t = this.$route.params.slug;
                  window.open(
                    ""
                      .concat("https://cellphones.com.vn/")
                      .concat(t.slice(0, t.search(".html")), "/review"),
                    "_blank"
                  );
                } else
                  this.getReviewsGraphqlV2({
                    productId: this.productId,
                    ratingId: this.reviewFilterOption.ratingId,
                    hasPhoto: this.reviewFilterOption.hasPhoto,
                    isPurchased: this.reviewFilterOption.isPurchased,
                  });
              },
              calcAveragePercentStar: function (t) {
                return t ? (t / 5) * 100 + "%" : "0";
              },
              filterReview: function (t) {
                var e = this;
                return Object(c.a)(
                  regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((r = {
                                hasPhoto:
                                  "hasPhoto" in t
                                    ? t.hasPhoto
                                    : e.reviewFilterOption.hasPhoto,
                                isPurchased:
                                  "isPurchased" in t
                                    ? t.isPurchased
                                    : e.reviewFilterOption.isPurchased,
                                ratingId:
                                  "ratingId" in t
                                    ? t.ratingId
                                    : e.reviewFilterOption.ratingId,
                              }),
                              JSON.stringify(r) ===
                                JSON.stringify(e.reviewFilterOption))
                            ) {
                              n.next = 6;
                              break;
                            }
                            return (
                              (e.reviewFilterOption = r),
                              e.clearReviewData(),
                              (n.next = 6),
                              e.getReviewsGraphqlV2({
                                productId: e.productId,
                                ratingId: e.reviewFilterOption.ratingId,
                                hasPhoto: e.reviewFilterOption.hasPhoto,
                                isPurchased: e.reviewFilterOption.isPurchased,
                              })
                            );
                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              showAllReview: function () {
                if (this.isReviewPage) this.scrollToTabId("review");
                else {
                  var t = this.$route.params.slug;
                  window.location.href = ""
                    .concat("https://cellphones.com.vn/")
                    .concat(t.slice(0, t.search(".html")), "/review");
                }
              },
            }
          ),
        },
        _ = (n(1072), n(42)),
        component = Object(_.a)(
          f,
          function () {
            var t,
              e,
              n,
              r = this,
              c = r._self._c;
            return c(
              "div",
              { staticClass: "boxReview" },
              [
                r.isProductDetail
                  ? c("h2", { staticClass: "title is-6" }, [
                      r._v(r._s(r.title) + " " + r._s(r.titleProduct)),
                    ])
                  : c("h1", { staticClass: "title is-6" }, [
                      r._v(" " + r._s(r.title) + " " + r._s(r.titleProduct)),
                    ]),
                r._v(" "),
                r.isReviewPage && Object.entries(r.productInfo).length > 0
                  ? c("div", { staticClass: "block-product-review" }, [
                      c(
                        "a",
                        r._b(
                          {
                            staticClass:
                              "boxReview-product is-flex is-justify-content-center",
                          },
                          "a",
                          {
                            href: "https://cellphones.com.vn/".concat(
                              r.productInfo.general.url_path
                            ),
                          },
                          !1
                        ),
                        [
                          c("nuxt-img", {
                            staticClass: "image-review",
                            attrs: {
                              provider: "CPS_IMG_PROVIDER",
                              format: "webp",
                              width: "110",
                              height: "110",
                              quanlity: "80",
                              src: "https://cdn2.cellphones.com.vn/215x/media/catalog/product".concat(
                                r.productInfo.filterable.thumbnail
                              ),
                              alt: r.titleProduct,
                            },
                          }),
                          r._v(" "),
                          c(
                            "div",
                            {
                              staticClass:
                                "boxReview-product__info is-flex is-flex-direction-column",
                            },
                            [
                              c("p", { staticClass: "info__name" }, [
                                r._v(r._s(r.productInfo.general.name)),
                              ]),
                              r._v(" "),
                              c("BoxPrice", {
                                attrs: {
                                  price: r.productInfo.filterable.price,
                                  "special-price":
                                    r.productInfo.filterable.special_price,
                                },
                              }),
                              r._v(" "),
                              c("div", { staticClass: "btn-info" }, [
                                r._v("\n          Mua ngay\n        "),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : r._e(),
                r._v(" "),
                r.isReviewPage || 0 !== r.totalAllReviews
                  ? [
                      c("div", { staticClass: "boxReview-review is-flex" }, [
                        c(
                          "div",
                          {
                            staticClass:
                              "boxReview-score is-flex is-justify-content-center is-align-items-center",
                            class: {
                              "has-product":
                                Object.entries(r.productInfo).length > 0,
                            },
                          },
                          [
                            c("p", { staticClass: "title is-4 m-0 p-0" }, [
                              r._v(
                                r._s(
                                  (null === (t = r.rating.average_rating) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toFixed(1)) || 0
                                ) + "/5"
                              ),
                            ]),
                            r._v(" "),
                            c("div", { staticClass: "item-star" }, [
                              c(
                                "div",
                                { staticClass: "star-container" },
                                r._l(5, function (t) {
                                  return c("RenderHtml", {
                                    key: t,
                                    staticClass: "icon is-active",
                                    attrs: { html: r.$icons().Star },
                                  });
                                }),
                                1
                              ),
                              r._v(" "),
                              c(
                                "div",
                                {
                                  staticClass: "star-container-level",
                                  style: {
                                    width: r.calcAveragePercentStar(
                                      r.rating.average_rating
                                    ),
                                  },
                                },
                                r._l(5, function (t) {
                                  return c("RenderHtml", {
                                    key: t,
                                    staticClass: "icon is-active",
                                    attrs: { html: r.$icons().Star },
                                  });
                                }),
                                1
                              ),
                            ]),
                            r._v(" "),
                            c(
                              "p",
                              {
                                staticClass: "boxReview-score__count",
                                on: {
                                  click: function (t) {
                                    return r.showAllReview();
                                  },
                                },
                              },
                              [
                                c("strong", [
                                  r._v(r._s(r.rating.total_count || 0)),
                                ]),
                                r._v(" đánh giá"),
                              ]
                            ),
                          ]
                        ),
                        r._v(" "),
                        c(
                          "div",
                          {
                            staticClass:
                              "boxReview-star is-flex is-justify-content-space-evenly",
                            class: {
                              "has-product":
                                Object.entries(r.productInfo).length > 0,
                            },
                          },
                          r._l(r.listRatingCount, function (t, e) {
                            return c(
                              "div",
                              {
                                key: e,
                                staticClass:
                                  "rating-level is-flex is-align-items-center is-justify-content-space-evenly",
                              },
                              [
                                c(
                                  "div",
                                  {
                                    staticClass:
                                      "star-count is-flex is-align-items-center",
                                  },
                                  [
                                    c(
                                      "span",
                                      { staticClass: "has-text-weight-bold" },
                                      [r._v(r._s(t.rating_id || 0))]
                                    ),
                                    r._v(" "),
                                    c("RenderHtml", {
                                      staticClass: "is-active",
                                      attrs: { html: r.$icons().Star },
                                    }),
                                  ],
                                  1
                                ),
                                r._v(" "),
                                c("progress", {
                                  staticClass: "progress is-small m-0",
                                  attrs: { max: r.rating.total_count || 0 },
                                  domProps: { value: t.count || 0 },
                                }),
                                r._v(" "),
                                c("span", { staticClass: "is-size-7" }, [
                                  r._v(r._s(t.count || 0) + " đánh giá"),
                                ]),
                              ]
                            );
                          }),
                          0
                        ),
                      ]),
                      r._v(" "),
                      (null === (e = r.reviewDataItems) || void 0 === e
                        ? void 0
                        : e.length) > 0
                        ? c(
                            "div",
                            { staticClass: "box-experience-review" },
                            [
                              c("div", { staticClass: "title is-6" }, [
                                r._v("Đánh giá theo trải nghiệm"),
                              ]),
                              r._v(" "),
                              r._l(r.reviewDataItems, function (t, e) {
                                return c(
                                  "div",
                                  {
                                    key: e,
                                    staticClass:
                                      "experience-review__item is-flex is-justify-content-space-between is-align-items-center",
                                  },
                                  [
                                    c("div", { staticClass: "item-title" }, [
                                      r._v(
                                        "\n          " +
                                          r._s(t.attribute_name) +
                                          "\n        "
                                      ),
                                    ]),
                                    r._v(" "),
                                    c(
                                      "div",
                                      {
                                        staticClass:
                                          "item-review-result is-flex",
                                      },
                                      [
                                        c("div", { staticClass: "item-star" }, [
                                          c(
                                            "div",
                                            { staticClass: "star-container" },
                                            r._l(5, function (t) {
                                              return c("RenderHtml", {
                                                key: t,
                                                staticClass: "icon is-active",
                                                attrs: {
                                                  html: r.$icons().Star,
                                                },
                                              });
                                            }),
                                            1
                                          ),
                                          r._v(" "),
                                          c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-container-level",
                                              style: {
                                                width: r.calcAveragePercentStar(
                                                  t.average_rating
                                                ),
                                              },
                                            },
                                            r._l(5, function (t) {
                                              return c("RenderHtml", {
                                                key: t,
                                                staticClass: "icon is-active",
                                                attrs: {
                                                  html: r.$icons().Star,
                                                },
                                              });
                                            }),
                                            1
                                          ),
                                        ]),
                                        r._v(" "),
                                        c(
                                          "div",
                                          {
                                            staticClass:
                                              "item-point has-text-weight-bold",
                                          },
                                          [r._v(r._s(t.average_rating) + "/5")]
                                        ),
                                        r._v(" "),
                                        c(
                                          "div",
                                          { staticClass: "item-review-count" },
                                          [r._v("(" + r._s(t.count) + ")")]
                                        ),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                            ],
                            2
                          )
                        : r._e(),
                    ]
                  : r._e(),
                r._v(" "),
                r.totalAllReviews > 0
                  ? c("div", { staticClass: "button__review-container" }, [
                      c(
                        "p",
                        { staticClass: "has-text-centered my-2 subtitle is-6" },
                        [r._v("Bạn đánh giá sao về sản phẩm này?")]
                      ),
                      r._v(" "),
                      c("div", { staticClass: "has-text-centered" }, [
                        c(
                          "button",
                          {
                            staticClass: "button has-text-white button__review",
                            on: { click: r.handleClickShowReviewBox },
                          },
                          [r._v("Đánh giá ngay")]
                        ),
                      ]),
                    ])
                  : r._e(),
                r._v(" "),
                r.totalAllReviews > 0
                  ? c("div", { staticClass: "box-review-filter" }, [
                      c("div", { staticClass: "title is-6" }, [
                        r._v("Lọc theo"),
                      ]),
                      r._v(" "),
                      c("div", { staticClass: "filter-container is-flex" }, [
                        c(
                          "div",
                          {
                            staticClass: "filter-item",
                            class: {
                              active:
                                !r.reviewFilterOption.hasPhoto &&
                                !r.reviewFilterOption.isPurchased &&
                                0 === r.reviewFilterOption.ratingId,
                            },
                            on: {
                              click: function (t) {
                                return r.filterReview({
                                  hasPhoto: !1,
                                  isPurchased: !1,
                                  ratingId: 0,
                                });
                              },
                            },
                          },
                          [r._v("\n        Tất cả\n      ")]
                        ),
                        r._v(" "),
                        c(
                          "div",
                          {
                            staticClass: "filter-item",
                            class: { active: r.reviewFilterOption.hasPhoto },
                            on: {
                              click: function (t) {
                                return r.filterReview({
                                  hasPhoto: !r.reviewFilterOption.hasPhoto,
                                });
                              },
                            },
                          },
                          [
                            r._v("\n        Có hình ảnh\n        "),
                            c("RenderHtml", {
                              staticClass: "cps-x-icon",
                              attrs: { html: r.$icons().XMark },
                            }),
                          ],
                          1
                        ),
                        r._v(" "),
                        c(
                          "div",
                          {
                            staticClass: "filter-item",
                            class: { active: r.reviewFilterOption.isPurchased },
                            on: {
                              click: function (t) {
                                return r.filterReview({
                                  isPurchased:
                                    !r.reviewFilterOption.isPurchased,
                                });
                              },
                            },
                          },
                          [
                            r._v("Đã mua hàng\n        "),
                            c("RenderHtml", {
                              staticClass: "cps-x-icon",
                              attrs: { html: r.$icons().XMark },
                            }),
                          ],
                          1
                        ),
                      ]),
                      r._v(" "),
                      c(
                        "div",
                        { staticClass: "filter-container is-flex" },
                        r._l(5, function (t) {
                          return c(
                            "div",
                            {
                              key: t,
                              staticClass: "filter-item star",
                              class: {
                                active: r.reviewFilterOption.ratingId === 6 - t,
                              },
                              on: {
                                click: function (e) {
                                  return r.filterReview({ ratingId: 6 - t });
                                },
                              },
                            },
                            [
                              c("p", [r._v(r._s(6 - t))]),
                              r._v(" "),
                              c("RenderHtml", {
                                staticClass: "icon-star",
                                attrs: { html: r.$icons().Star },
                              }),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ])
                  : r._e(),
                r._v(" "),
                c("client-only", [
                  c(
                    "div",
                    {
                      staticClass: "modal modal-review",
                      class: { "is-active": r.showReviewBox },
                    },
                    [
                      c("div", {
                        staticClass: "modal-background",
                        on: { click: r.handleClickShowReviewBox },
                      }),
                      r._v(" "),
                      c("div", { staticClass: "modal-content" }, [
                        c("div", { staticClass: "review-container" }, [
                          c("div", {
                            staticClass: "content__close-btn modal__button",
                            on: { click: r.handleClickShowReviewBox },
                          }),
                          r._v(" "),
                          c(
                            "div",
                            {
                              staticClass:
                                "content__close-btn-desk modal__button",
                              on: { click: r.handleClickShowReviewBox },
                            },
                            [
                              c("RenderHtml", {
                                staticClass: "close-icon",
                                attrs: { html: r.$icons().XMark },
                              }),
                            ],
                            1
                          ),
                          r._v(" "),
                          c("div", { staticClass: "title is-6 mb-0 px-4" }, [
                            r._v("Đánh giá & nhận xét"),
                          ]),
                          r._v(" "),
                          r.user && r.user.loggedIn
                            ? c(
                                "div",
                                {
                                  staticClass:
                                    "modal-review-title is-flex is-align-items-center px-4",
                                },
                                [
                                  c("nuxt-img", {
                                    attrs: {
                                      provider: "CPS_IMG_PROVIDER",
                                      format: "webp",
                                      src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/cps-ant.png",
                                      width: "100",
                                      height: "100",
                                    },
                                  }),
                                  r._v(" "),
                                  c("p", { staticClass: "title-logged" }, [
                                    r._v(
                                      " " +
                                        r._s(
                                          null === (n = r.productInfo) ||
                                            void 0 === n ||
                                            null === (n = n.general) ||
                                            void 0 === n
                                            ? void 0
                                            : n.name
                                        )
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : r._e(),
                          r._v(" "),
                          c(
                            "form",
                            {
                              staticClass: "modal-review-content p-4",
                              attrs: { enctype: "multipart/form-data" },
                              on: {
                                submit: function (t) {
                                  return (
                                    t.preventDefault(),
                                    r.handleSubmitForm.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              c(
                                "div",
                                { staticClass: "title-review-star-items" },
                                [r._v("Đánh giá chung")]
                              ),
                              r._v(" "),
                              c(
                                "div",
                                {
                                  staticClass:
                                    "modal-review-star is-flex is-justify-content-space-between my-3",
                                  class: {
                                    "review-all":
                                      r.formData.attributes.length > 0,
                                  },
                                },
                                [
                                  c(
                                    "div",
                                    {
                                      staticClass:
                                        "star-all is-flex is-justify-content-space-evenly",
                                    },
                                    r._l(r.starLevel, function (t, e) {
                                      return c(
                                        "div",
                                        {
                                          key: e,
                                          staticClass:
                                            "modal__button has-text-centered",
                                          on: {
                                            click: function () {
                                              return r.handleClickReviewAll(
                                                t.level
                                              );
                                            },
                                          },
                                        },
                                        [
                                          c("RenderHtml", {
                                            staticClass: "icon",
                                            class:
                                              t.level <= r.formData.rating_id &&
                                              "is-active",
                                            staticStyle: { cursor: "pointer" },
                                            attrs: {
                                              html: r.$icons().Star,
                                              icon: "star",
                                            },
                                          }),
                                          r._v(" "),
                                          c("p", [r._v(r._s(t.label))]),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                              r._v(" "),
                              r.formData.attributes.length > 0
                                ? [
                                    c(
                                      "div",
                                      {
                                        staticClass: "title-review-star-items",
                                      },
                                      [r._v("Theo trải nghiệm")]
                                    ),
                                    r._v(" "),
                                    r._l(r.reviewQuestionData, function (t, e) {
                                      var n;
                                      return c(
                                        "div",
                                        {
                                          key: e,
                                          staticClass:
                                            "modal-review-star is-flex is-justify-content-space-between my-1 p-1",
                                        },
                                        [
                                          c(
                                            "p",
                                            { staticClass: "label-review" },
                                            [r._v(r._s(t.question))]
                                          ),
                                          r._v(" "),
                                          c(
                                            "div",
                                            {
                                              staticClass:
                                                "star is-flex is-justify-content-space-evenly",
                                            },
                                            r._l(5, function (e, n) {
                                              var o;
                                              return c(
                                                "div",
                                                {
                                                  key: n,
                                                  staticClass:
                                                    "modal__button has-text-centered",
                                                  on: {
                                                    click: function () {
                                                      return r.handleClickReviewItem(
                                                        e,
                                                        t.id
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  c("RenderHtml", {
                                                    staticClass: "icon",
                                                    class:
                                                      e <=
                                                        (null ===
                                                          (o =
                                                            r.formData.attributes.find(
                                                              function (e) {
                                                                return (
                                                                  e.review_attribute_id ===
                                                                  t.id
                                                                );
                                                              }
                                                            )) || void 0 === o
                                                          ? void 0
                                                          : o.rating_id) &&
                                                      "is-active",
                                                    staticStyle: {
                                                      cursor: "pointer",
                                                    },
                                                    attrs: {
                                                      html: r.$icons().Star,
                                                      icon: "star",
                                                    },
                                                  }),
                                                ],
                                                1
                                              );
                                            }),
                                            0
                                          ),
                                          r._v(" "),
                                          c(
                                            "div",
                                            {
                                              staticClass:
                                                "modal-review-star-status",
                                            },
                                            [
                                              r._v(
                                                "\n                  " +
                                                  r._s(
                                                    Object.values(
                                                      t.rating_label
                                                    )[
                                                      (null ===
                                                        (n =
                                                          r.formData.attributes.find(
                                                            function (e) {
                                                              return (
                                                                e.review_attribute_id ===
                                                                t.id
                                                              );
                                                            }
                                                          )) || void 0 === n
                                                        ? void 0
                                                        : n.rating_id) - 1
                                                    ]
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                  ]
                                : r._e(),
                              r._v(" "),
                              c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: r.formData.content,
                                    expression: "formData.content",
                                  },
                                ],
                                staticClass: "textarea",
                                attrs: {
                                  placeholder:
                                    "Xin mời chia sẻ một số cảm nhận về sản phẩm (nhập tối thiểu 15 kí tự)",
                                },
                                domProps: { value: r.formData.content },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      r.$set(
                                        r.formData,
                                        "content",
                                        t.target.value
                                      );
                                  },
                                },
                              }),
                              r._v(" "),
                              c("div", { staticClass: "group-input is-flex" }, [
                                r.arrShowImg.length > 0
                                  ? c(
                                      "div",
                                      {
                                        staticClass: "is-flex my-2 mr-2",
                                        attrs: { id: "previewImg" },
                                      },
                                      r._l(r.arrShowImg, function (img, t) {
                                        return c(
                                          "div",
                                          {
                                            key: t,
                                            staticClass: "img-container",
                                          },
                                          [
                                            c("nuxt-img", {
                                              attrs: {
                                                provider: "CPS_IMG_PROVIDER",
                                                format: "webp",
                                                src: img,
                                                alt: "hình của khách",
                                                loading: "lazy",
                                              },
                                            }),
                                            r._v(" "),
                                            c(
                                              "div",
                                              {
                                                staticClass: "del-img",
                                                on: {
                                                  click: function (e) {
                                                    return r.delImg(t);
                                                  },
                                                },
                                              },
                                              [
                                                c("RenderHtml", {
                                                  staticClass: "input-icon",
                                                  attrs: {
                                                    html: r.$icons()
                                                      .CircleXMarkTransparentBG,
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    )
                                  : r._e(),
                                r._v(" "),
                                c("input", {
                                  staticClass: "is-hidden modal__button",
                                  attrs: {
                                    id: "image",
                                    accept: "image/x-png,image/gif,image/jpeg",
                                    multiple: "",
                                    type: "file",
                                  },
                                  on: { change: r.onImageChange },
                                }),
                                r._v(" "),
                                r.numberOfImage < 3
                                  ? c(
                                      "label",
                                      {
                                        staticClass:
                                          "btn-add modal__button my-2 is-flex is-flex-direction-column is-align-items-center",
                                        attrs: { for: "image" },
                                      },
                                      [
                                        c("RenderHtml", {
                                          staticClass: "input-icon",
                                          attrs: { html: r.$icons().AddImage },
                                        }),
                                        r._v(
                                          "\n                Thêm hình ảnh\n              "
                                        ),
                                      ],
                                      1
                                    )
                                  : r._e(),
                              ]),
                              r._v(" "),
                              r.isErrorGGCapcha
                                ? c(
                                    "div",
                                    {
                                      staticClass:
                                        "recaptcha is-flex is-justify-content-center",
                                    },
                                    [
                                      c("vue-recaptcha", {
                                        ref: "recaptcha",
                                        attrs: {
                                          sitekey:
                                            "6LetVbYUAAAAABRM1I3VO6WD-xxhzTKiR9MDmbNK",
                                        },
                                        on: {
                                          verify: r.verifyToken,
                                          expired: r.handleExpired,
                                        },
                                      }),
                                      r._v(" "),
                                      r.isErrorGGCapcha &&
                                      0 === r.tokenRecaptcha.length
                                        ? c(
                                            "div",
                                            {
                                              staticClass: "error-text d-none",
                                            },
                                            [
                                              r._v(
                                                "\n                Quý khách vui lòng xác thực GoogleCapcha\n              "
                                              ),
                                            ]
                                          )
                                        : r._e(),
                                    ],
                                    1
                                  )
                                : r._e(),
                              r._v(" "),
                              c("div", { staticClass: "clear__review" }),
                              r._v(" "),
                              c("div", { staticClass: "button-container" }, [
                                c(
                                  "button",
                                  {
                                    staticClass:
                                      "button modal__button has-text-white",
                                    class: { "is-loading": r.isLoading },
                                    attrs: { type: "submit" },
                                  },
                                  [
                                    r._v(
                                      "GỬI\n                ĐÁNH GIÁ\n              "
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
                r._v(" "),
                r.totalReviews > 0
                  ? c(
                      "div",
                      {
                        staticClass: "boxReview-comment",
                        attrs: { id: "review" },
                      },
                      [
                        r._l(r.reviewData, function (t, e) {
                          var n, o;
                          return c(
                            "div",
                            { key: e, staticClass: "boxReview-comment-item" },
                            [
                              c(
                                "div",
                                {
                                  staticClass:
                                    "boxReview-comment-item-title is-flex",
                                },
                                [
                                  c(
                                    "div",
                                    {
                                      staticClass:
                                        "is-flex is-align-items-center",
                                    },
                                    [
                                      c(
                                        "p",
                                        {
                                          staticClass:
                                            "mr-2 is-flex is-align-items-center is-justify-content-center name-letter",
                                        },
                                        [
                                          r._v(
                                            "\n            " +
                                              r._s(
                                                t.customer.fullname.charAt(0)
                                              )
                                          ),
                                        ]
                                      ),
                                      r._v(" "),
                                      c("div", { staticClass: "block-info" }, [
                                        c(
                                          "div",
                                          { staticClass: "block-info__name" },
                                          [
                                            c("span", { staticClass: "name" }, [
                                              r._v(r._s(t.customer.fullname)),
                                            ]),
                                            r._v(" "),
                                            c(
                                              "p",
                                              { staticClass: "date-time" },
                                              [
                                                c("RenderHtml", {
                                                  staticClass: "icon-clock",
                                                  attrs: {
                                                    html: r.$icons().Clock,
                                                  },
                                                }),
                                                r._v(
                                                  "\n                " +
                                                    r._s(
                                                      r.formatDate(t.created_at)
                                                    ) +
                                                    "\n              "
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                        r._v(" "),
                                        t.is_purchased
                                          ? c(
                                              "span",
                                              {
                                                staticClass:
                                                  "bought-cps is-flex is-align-items-center",
                                              },
                                              [
                                                c("RenderHtml", {
                                                  staticClass: "tick-icon",
                                                  attrs: {
                                                    html: r.$icons()
                                                      .CircleCheckRevert,
                                                  },
                                                }),
                                                r._v(
                                                  "\n              Đã mua tại CellphoneS\n            "
                                                ),
                                              ],
                                              1
                                            )
                                          : r._e(),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                              r._v(" "),
                              c(
                                "div",
                                {
                                  staticClass: "boxReview-comment-item-review",
                                },
                                [
                                  c(
                                    "div",
                                    {
                                      staticClass:
                                        "item-review-rating is-flex is-align-items-center",
                                    },
                                    [
                                      c(
                                        "div",
                                        {
                                          staticClass:
                                            "item-review-rating__star",
                                          class: {
                                            "has-attribute":
                                              (null === (n = t.attributes) ||
                                              void 0 === n
                                                ? void 0
                                                : n.length) > 0,
                                          },
                                        },
                                        r._l(5, function (e) {
                                          return c("RenderHtml", {
                                            key: e,
                                            staticClass: "icon",
                                            class:
                                              e <= t.rating_id && "is-active",
                                            attrs: { html: r.$icons().Star },
                                          });
                                        }),
                                        1
                                      ),
                                      r._v(" "),
                                      (null === (o = t.attributes) ||
                                      void 0 === o
                                        ? void 0
                                        : o.length) > 0
                                        ? r._l(t.attributes, function (t, e) {
                                            return c(
                                              "div",
                                              {
                                                key: e,
                                                staticClass:
                                                  "item-review-rating__item-attribute",
                                              },
                                              [
                                                r._v(
                                                  "\n              " +
                                                    r._s(t.attribute_name) +
                                                    " " +
                                                    r._s(t.label) +
                                                    "\n            "
                                                ),
                                              ]
                                            );
                                          })
                                        : r._e(),
                                    ],
                                    2
                                  ),
                                  r._v(" "),
                                  c(
                                    "div",
                                    {
                                      staticClass:
                                        "item-review-comment is-flex is-justify-content-space-between is-flex-direction-column",
                                    },
                                    [
                                      c(
                                        "div",
                                        { staticClass: "comment-content" },
                                        r._l(
                                          r.convertHtmlToString(t.content),
                                          function (line, t) {
                                            return c("p", { key: t }, [
                                              r._v(
                                                "\n              " +
                                                  r._s(line) +
                                                  "\n            "
                                              ),
                                            ]);
                                          }
                                        ),
                                        0
                                      ),
                                      r._v(" "),
                                      "[]" !== t.photos
                                        ? c(
                                            "div",
                                            {
                                              staticClass:
                                                "comment-image is-flex",
                                            },
                                            r._l(
                                              JSON.parse(t.photos || "[]"),
                                              function (t, e) {
                                                return c(
                                                  "a",
                                                  r._b(
                                                    {
                                                      key: e,
                                                      staticClass: "spotlight",
                                                    },
                                                    "a",
                                                    { href: t.url },
                                                    !1
                                                  ),
                                                  [
                                                    c("nuxt-img", {
                                                      staticClass: "image",
                                                      attrs: {
                                                        provider:
                                                          "CPS_IMG_PROVIDER",
                                                        format: "webp",
                                                        width: "358",
                                                        height: "358",
                                                        src: t.url,
                                                        alt: t.name,
                                                        loading: "lazy",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                );
                                              }
                                            ),
                                            0
                                          )
                                        : r._e(),
                                    ]
                                  ),
                                ]
                              ),
                              r._v(" "),
                              0 !== t.children.length
                                ? c(
                                    "div",
                                    {
                                      staticClass:
                                        "boxReview-comment-item-child",
                                    },
                                    r._l(t.children, function (t, e) {
                                      return c(
                                        "div",
                                        {
                                          key: e,
                                          staticClass: "boxReview-comment-item",
                                        },
                                        [
                                          c(
                                            "div",
                                            {
                                              staticClass:
                                                "boxReview-comment-item-title is-flex",
                                            },
                                            [
                                              c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "is-flex is-align-items-center",
                                                },
                                                [
                                                  c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mr-2 is-flex is-align-items-center is-justify-content-center name-letter",
                                                    },
                                                    [
                                                      t.is_admin
                                                        ? c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "icon-cps",
                                                            },
                                                            [
                                                              c("RenderHtml", {
                                                                attrs: {
                                                                  html: r.$icons()
                                                                    .LogoCPS,
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          )
                                                        : c("span", [
                                                            r._v(
                                                              "\n                    " +
                                                                r._s(
                                                                  t.customer.fullname.charAt(
                                                                    0
                                                                  )
                                                                ) +
                                                                "\n                "
                                                            ),
                                                          ]),
                                                    ]
                                                  ),
                                                  r._v(" "),
                                                  c(
                                                    "span",
                                                    { staticClass: "name" },
                                                    [
                                                      r._v(
                                                        r._s(
                                                          t.customer.fullname
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  r._v(" "),
                                                  t.is_admin
                                                    ? c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "admin__tag",
                                                        },
                                                        [r._v("QTV")]
                                                      )
                                                    : r._e(),
                                                ]
                                              ),
                                              r._v(" "),
                                              c(
                                                "p",
                                                { staticClass: "date-time" },
                                                [
                                                  r._v(
                                                    r._s(
                                                      r.formatDate(t.created_at)
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          r._v(" "),
                                          c(
                                            "div",
                                            {
                                              staticClass:
                                                "boxReview-comment-item-review",
                                            },
                                            [
                                              c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "item-review-comment my-1",
                                                },
                                                r._l(
                                                  r.convertHtmlToString(
                                                    t.content
                                                  ),
                                                  function (line, t) {
                                                    return c("p", { key: t }, [
                                                      r._v(
                                                        "\n                " +
                                                          r._s(line) +
                                                          "\n              "
                                                      ),
                                                    ]);
                                                  }
                                                ),
                                                0
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  )
                                : r._e(),
                            ]
                          );
                        }),
                        r._v(" "),
                        r.reviewData.length < r.totalReviews && r.page < 11
                          ? c(
                              "a",
                              {
                                staticClass:
                                  "has-text-centered button__view-more-review is-flex is-align-items-center is-justify-content-center load-more",
                                on: { click: r.getMoreInfo },
                              },
                              [
                                r._v("Xem thêm\n      "),
                                c("RenderHtml", {
                                  staticClass: "icon",
                                  attrs: { html: r.$icons().ChevronDown },
                                }),
                              ],
                              1
                            )
                          : r._e(),
                      ],
                      2
                    )
                  : 0 === r.totalAllReviews
                  ? c(
                      "div",
                      {
                        staticClass:
                          "boxReview-no-comment my-6 is-flex is-justify-content-center is-flex-direction-column is-align-items-center",
                      },
                      [
                        c("nuxt-img", {
                          staticClass: "product__img",
                          attrs: {
                            provider: "CPS_IMG_PROVIDER",
                            format: "webp",
                            width: "150",
                            src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Review-empty.png",
                            alt: "Hiện chưa có đánh giá nào.Bạn sẽ là người đầu tiên đánh giá sản phẩm này chứ?",
                          },
                        }),
                        r._v(" "),
                        r._m(0),
                        r._v(" "),
                        c(
                          "div",
                          {
                            staticClass: "button__review",
                            on: { click: r.handleClickShowReviewBox },
                          },
                          [r._v("Đánh giá ngay")]
                        ),
                      ],
                      1
                    )
                  : c(
                      "div",
                      {
                        staticClass:
                          "boxReview-no-comment my-6 is-flex is-justify-content-center is-flex-direction-column is-align-items-center",
                      },
                      [
                        c("nuxt-img", {
                          staticClass: "product__img",
                          attrs: {
                            provider: "CPS_IMG_PROVIDER",
                            format: "webp",
                            width: "150",
                            src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Review-empty.png",
                            alt: "Hiện chưa có đánh giá nào thoả mãn",
                          },
                        }),
                        r._v(" "),
                        c("p", [r._v("Hiện chưa có đánh giá nào thoả mãn")]),
                      ],
                      1
                    ),
              ],
              2
            );
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e("p", [
                t._v("Hiện chưa có đánh giá nào. "),
                e("br"),
                t._v("Bạn sẽ là người đầu tiên đánh giá sản phẩm này chứ?"),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    517: function (t, e, n) {
      "use strict";
      function r() {
        return (
          (r =
            Object.assign ||
            function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var e in source)
                  Object.prototype.hasOwnProperty.call(source, e) &&
                    (t[e] = source[e]);
              }
              return t;
            }),
          r.apply(this, arguments)
        );
      }
      var c = Object.prototype.hasOwnProperty;
      var o,
        l,
        v,
        d =
          ((o = !1),
          (l = []),
          (v = {
            resolved: function () {
              return o;
            },
            resolve: function (t) {
              if (!o) {
                o = !0;
                for (var i = 0, e = l.length; i < e; i++) l[i](t);
              }
            },
            promise: {
              then: function (t) {
                o ? t() : l.push(t);
              },
            },
          }),
          {
            notify: function () {
              v.resolve();
            },
            wait: function () {
              return v.promise;
            },
            render: function (t, e, n) {
              this.wait().then(function () {
                n(window.grecaptcha.render(t, e));
              });
            },
            reset: function (t) {
              void 0 !== t &&
                (this.assertLoaded(),
                this.wait().then(function () {
                  return window.grecaptcha.reset(t);
                }));
            },
            execute: function (t) {
              void 0 !== t &&
                (this.assertLoaded(),
                this.wait().then(function () {
                  return window.grecaptcha.execute(t);
                }));
            },
            checkRecaptchaLoad: function () {
              c.call(window, "grecaptcha") &&
                c.call(window.grecaptcha, "render") &&
                this.notify();
            },
            assertLoaded: function () {
              if (!v.resolved())
                throw new Error("ReCAPTCHA has not been loaded");
            },
          });
      "undefined" != typeof window && (window.vueRecaptchaApiLoaded = d.notify);
      var h = {
        name: "VueRecaptcha",
        props: {
          sitekey: { type: String, required: !0 },
          theme: { type: String },
          badge: { type: String },
          type: { type: String },
          size: { type: String },
          tabindex: { type: String },
          loadRecaptchaScript: { type: Boolean, default: !1 },
          recaptchaScriptId: { type: String, default: "__RECAPTCHA_SCRIPT" },
          recaptchaHost: { type: String, default: "www.google.com" },
          language: { type: String, default: "" },
        },
        beforeMount: function () {
          if (
            this.loadRecaptchaScript &&
            !document.getElementById(this.recaptchaScriptId)
          ) {
            var script = document.createElement("script");
            (script.id = this.recaptchaScriptId),
              (script.src =
                "https://" +
                this.recaptchaHost +
                "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" +
                this.language),
              (script.async = !0),
              (script.defer = !0),
              document.head.appendChild(script);
          }
        },
        mounted: function () {
          var t = this;
          d.checkRecaptchaLoad();
          var e = r({}, this.$props, {
              callback: this.emitVerify,
              "expired-callback": this.emitExpired,
              "error-callback": this.emitError,
            }),
            n = this.$slots.default ? this.$el.children[0] : this.$el;
          d.render(n, e, function (e) {
            (t.$widgetId = e), t.$emit("render", e);
          });
        },
        methods: {
          reset: function () {
            d.reset(this.$widgetId);
          },
          execute: function () {
            d.execute(this.$widgetId);
          },
          emitVerify: function (t) {
            this.$emit("verify", t);
          },
          emitExpired: function () {
            this.$emit("expired");
          },
          emitError: function () {
            this.$emit("error");
          },
        },
        render: function (t) {
          return t("div", {}, this.$slots.default);
        },
      };
      e.a = h;
    },
    533: function (t, e) {
      t.exports = "object" == typeof self ? self.FormData : window.FormData;
    },
    786: function (t, e, n) {
      t.exports = {};
    },
  },
]);
