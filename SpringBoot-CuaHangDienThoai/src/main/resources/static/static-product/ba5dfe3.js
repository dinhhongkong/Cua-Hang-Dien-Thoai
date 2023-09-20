(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1029: function (t, e, n) {
      "use strict";
      n(765);
    },
    1359: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(6),
        r =
          (n(5), n(33), n(36), n(17), n(24), n(18), n(30), n(11), n(31), n(15));
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var l = {
          name: "Comment",
          components: {
            ListComment: function () {
              return n.e(100).then(n.bind(null, 1405));
            },
            TextareaComment: function () {
              return n.e(50).then(n.bind(null, 1406));
            },
          },
          props: {
            commentType: { type: String, default: "product", required: !0 },
            pageName: { type: String, default: "" },
          },
          data: function () {
            return {
              commentContent: "",
              pageUrl: "",
              parentId: "",
              activeModalComment: !1,
            };
          },
          computed: m(
            m(
              m({}, Object(r.d)("comment", ["modalShow"])),
              Object(r.d)("product", ["productId"])
            ),
            {},
            {
              warningText: function () {
                return "" === this.commentContent
                  ? "Vui lòng nhập bình luận"
                  : this.commentContent.length < 10
                  ? "Bình luận của bạn quá ngắn. Vui lòng nhập lại"
                  : "";
              },
            }
          ),
          mounted: function () {
            this.pageUrl = "https://cellphones.com.vn".concat(this.$route.path);
          },
          methods: m(
            m(
              m(
                {},
                Object(r.c)("comment", ["toggleModalComment", "setFormData"])
              ),
              Object(r.b)("comment", ["getComments", "getCommentsGraphql"])
            ),
            {},
            {
              toggleCommentModal: function () {
                "" !== this.warningText
                  ? this.$alertMessage({
                      message: this.warningText,
                      icon: "CircleExclamation",
                      type: "error",
                    })
                  : (this.setFormData({
                      key: "content",
                      data: this.commentContent,
                    }),
                    this.toggleModalComment(!1));
              },
            }
          ),
        },
        d = (n(1029), n(42)),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "comment-container" },
              [
                e("div", { staticClass: "comment-form" }, [
                  e(
                    "p",
                    {
                      staticClass: "comment-form-title title is-5 p-0 mb-1",
                      attrs: { id: "total_comment" },
                    },
                    [t._v("Hỏi và đáp")]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass:
                        "comment-form-content is-flex is-justify-content-space-between",
                    },
                    [
                      e("TextareaComment", {
                        attrs: {
                          "comment-type": t.commentType,
                          "product-id": t.productId,
                          "page-name": t.pageName,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("ListComment", { attrs: { "comment-type": t.commentType } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    765: function (t, e, n) {
      t.exports = {};
    },
  },
]);
