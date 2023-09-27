(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    1109: function (t, e, n) {
      "use strict";
      n(819);
    },
    1406: function (t, e, n) {
      "use strict";
      n.r(e);
      n(17), n(24), n(18), n(5), n(30), n(11), n(31);
      var o = n(0),
        r = n(6),
        c = (n(8), n(131), n(15));
      function m(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
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
          name: "TextareaComment",
          props: {
            isSubContent: { type: Boolean, default: !1 },
            parentId: { type: Number, default: 0 },
            commentType: { type: String, default: "product" },
            productId: { type: Number, default: 0 },
            pageName: { type: String, default: "" },
          },
          data: function () {
            return { commentContent: "" };
          },
          computed: l(
            l(
              l({}, Object(c.d)("comment", ["modalShow"])),
              Object(c.d)("login", ["user"])
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
          methods: l(
            l(
              l(
                l(
                  {},
                  Object(c.c)("comment", ["toggleModalComment", "setFormData"])
                ),
                Object(c.c)("login", ["toggleModalLogin"])
              ),
              Object(c.b)("comment", ["sendComment"])
            ),
            {},
            {
              toggleCommentModal: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("" === t.warningText) {
                              e.next = 4;
                              break;
                            }
                            t.$alertMessage({
                              message: t.warningText,
                              icon: "CircleExclamation",
                              type: "error",
                            }),
                              (e.next = 13);
                            break;
                          case 4:
                            if (!t.user.loggedIn) {
                              e.next = 11;
                              break;
                            }
                            return (
                              (e.next = 7),
                              t.setFormData({
                                key: "content",
                                data: t.commentContent,
                              })
                            );
                          case 7:
                            return (
                              (e.next = 9),
                              t.sendComment({
                                type: "product" === t.commentType ? 1 : 2,
                                pageUrl: window.location.href,
                                pageName: t.pageName,
                                productId:
                                  "product" === t.commentType ? t.productId : 0,
                              })
                            );
                          case 9:
                            e.next = 13;
                            break;
                          case 11:
                            t.setFormData({
                              key: "content",
                              data: t.commentContent,
                            }),
                              t.toggleModalLogin({
                                condition: !0,
                                title: "bình luận",
                              });
                          case 13:
                            t.commentContent = "";
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }
          ),
        },
        h = (n(1109), n(42)),
        component = Object(h.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "textarea-comment",
                style: !t.isSubContent || "width: calc(100% - 25px);",
              },
              [
                e("nuxt-img", {
                  staticClass: "cps-ant-cmt",
                  attrs: {
                    provider: "CPS_IMG_PROVIDER",
                    format: "webp",
                    width: "55",
                    height: "auto",
                    src: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/chibi2.png",
                    alt: "cps ant icon",
                  },
                }),
                t._v(" "),
                e("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.commentContent,
                      expression: "commentContent",
                    },
                  ],
                  staticClass: "textarea",
                  attrs: {
                    id: t.isSubContent ? "text-area-".concat(t.parentId) : "",
                    placeholder:
                      "Xin mời để lại câu hỏi, CellphoneS sẽ trả lời lại trong 1h, các câu hỏi sau 22h - 8h sẽ được trả lời vào sáng hôm sau",
                  },
                  domProps: { value: t.commentContent },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.commentContent = e.target.value);
                    },
                  },
                }),
                t._v(" "),
                e(
                  "button",
                  {
                    staticClass: "button button__cmt-send",
                    on: { click: t.toggleCommentModal },
                  },
                  [
                    e("RenderHtml", {
                      staticClass: "icon-paper-plane",
                      attrs: { html: t.$icons().PaperPlane },
                    }),
                    t._v("\n    Gửi\n  "),
                  ],
                  1
                ),
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
    819: function (t, e, n) {
      t.exports = {};
    },
  },
]);
