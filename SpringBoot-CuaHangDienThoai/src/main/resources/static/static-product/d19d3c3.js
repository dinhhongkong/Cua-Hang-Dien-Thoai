(window.webpackJsonp = window.webpackJsonp || []).push([
  [4, 205],
  {
    499: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "p", function () {
          return w;
        }),
          n.d(e, "B", function () {
            return m;
          }),
          n.d(e, "r", function () {
            return v;
          }),
          n.d(e, "q", function () {
            return O;
          }),
          n.d(e, "s", function () {
            return B;
          }),
          n.d(e, "u", function () {
            return C;
          }),
          n.d(e, "x", function () {
            return D;
          }),
          n.d(e, "E", function () {
            return z;
          }),
          n.d(e, "b", function () {
            return H;
          }),
          n.d(e, "t", function () {
            return S;
          }),
          n.d(e, "g", function () {
            return k;
          }),
          n.d(e, "d", function () {
            return y;
          }),
          n.d(e, "C", function () {
            return M;
          }),
          n.d(e, "y", function () {
            return P;
          }),
          n.d(e, "z", function () {
            return Y;
          }),
          n.d(e, "o", function () {
            return Q;
          }),
          n.d(e, "e", function () {
            return I;
          }),
          n.d(e, "i", function () {
            return x;
          }),
          n.d(e, "n", function () {
            return j;
          }),
          n.d(e, "j", function () {
            return L;
          }),
          n.d(e, "k", function () {
            return E;
          }),
          n.d(e, "m", function () {
            return J;
          }),
          n.d(e, "l", function () {
            return G;
          }),
          n.d(e, "D", function () {
            return N;
          }),
          n.d(e, "h", function () {
            return K;
          }),
          n.d(e, "A", function () {
            return Z;
          }),
          n.d(e, "f", function () {
            return X;
          }),
          n.d(e, "w", function () {
            return R;
          }),
          n.d(e, "a", function () {
            return F;
          }),
          n.d(e, "v", function () {
            return U;
          }),
          n.d(e, "c", function () {
            return W;
          });
        n(24),
          n(30),
          n(31),
          n(502),
          n(503),
          n(58),
          n(34),
          n(57),
          n(33),
          n(59),
          n(36);
        var c = n(25),
          o = n(504),
          r = n(6);
        n(21),
          n(16),
          n(5),
          n(10),
          n(44),
          n(290),
          n(47),
          n(501),
          n(131),
          n(11),
          n(17),
          n(202),
          n(32),
          n(52),
          n(38),
          n(18),
          n(92),
          n(294);
        function A(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return l(t, e);
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              n && (t = n);
              var i = 0,
                c = function () {};
              return {
                s: c,
                n: function () {
                  return i >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[i++] };
                },
                e: function (t) {
                  throw t;
                },
                f: c,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            r = !0,
            A = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              var t = n.next();
              return (r = t.done), t;
            },
            e: function (t) {
              (A = !0), (o = t);
            },
            f: function () {
              try {
                r || null == n.return || n.return();
              } finally {
                if (A) throw o;
              }
            },
          };
        }
        function l(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function d(t) {
          var e = (function (input, t) {
            if ("object" !== Object(c.a)(input) || null === input) return input;
            var e = input[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(input, t || "default");
              if ("object" !== Object(c.a)(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(input);
          })(t, "string");
          return "symbol" === Object(c.a)(e) ? e : String(e);
        }
        function f(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(t);
            e &&
              (c = c.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, c);
          }
          return n;
        }
        function h(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  Object(r.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function w(t, option) {
          return (function (t, e) {
            return e.test(t);
          })(
            t,
            {
              phone: { regex: /^((09|03|07|08|05)+(\d{8}))$/g },
              fullName: { regex: /^[^!@#$%^&*()_+=\-[\]:'";.?<>|\\0-9]+$/g },
              email: {
                regex:
                  /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
              },
              otp: { regex: /^\d{4}$/g },
              luckyNumber: { regex: /^\d{4}$/g },
            }[option].regex
          );
        }
        function m(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e4;
          return this.formatMoney(Math.round(t / e) * e);
        }
        function v(t) {
          return "" === t
            ? "0"
            : String(t)
                .split("")
                .reverse()
                .reduce(function (t, e, n) {
                  return (n % 3 ? e : e + ".") + t;
                });
        }
        function O(t) {
          var e = new Date(t),
            n = e.getDate(),
            c = e.getMonth() + 1,
            o = e.getFullYear(),
            r = (e.getHours() < 10 ? "0" : "") + e.getHours(),
            A = (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
          return ""
            .concat(n, "/")
            .concat(c, "/")
            .concat(o, " ")
            .concat(r, ":")
            .concat(A);
        }
        function B(t, e) {
          return e > 0 ? e : t;
        }
        function C(t, e) {
          for (
            var n = t.replaceAll(".", "").slice(e, e.length), c = "", i = 0;
            i < e;
            i++
          )
            c += "?";
          return v(c.concat(n));
        }
        function D(t, e) {
          return 0 === e || 0 === t ? "0" : (100 - e / (t / 100)).toFixed(0);
        }
        function z() {
          var data =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = "";
          for (var e in data) t += "".concat(e, "=").concat(data[e], "&");
          return t.slice(0, -1);
        }
        function H() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = { "Content-Type": "application/json" };
          return (
            t && (e = h(h({}, e), {}, { Authorization: "Bearer " + t })), e
          );
        }
        function S() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = new Date(),
            n = "" === t ? new Date() : new Date(t),
            c = Math.abs(e - n) / 1e3,
            o = {},
            s = {
              năm: 31536e3,
              tháng: 2592e3,
              tuần: 604800,
              ngày: 86400,
              tiếng: 3600,
              phút: 60,
              giây: 1,
            },
            r = "vài giây trước";
          for (var A in (Object.keys(s).forEach(function (t) {
            (o[t] = Math.floor(c / s[t])), (c -= o[t] * s[t]);
          }),
          o))
            if (o[A] > 0) {
              r = "".concat(o[A], " ").concat(A, " trước");
              break;
            }
          return r;
        }
        function k() {
          var content =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e =
              /((https|http):\/\/cellphones.com.vn)[-A-Za-z0-9+&#/%?=_|:,.]+/gm,
            n = [];
          if (content) {
            if (
              ((content = content.replace(
                /(?:\r\n|\r|\n)|(<br\s*\/?>)|(\\n)/gm,
                "$"
              )),
              e.test(content) && t)
            )
              for (var c = content.match(e), i = 0; i < c.length; i++) {
                var o = c[i];
                content = content.replace(
                  o,
                  "<a href='"
                    .concat(o, "' target='_blank' rel='noopener'>")
                    .concat(o, "</a>")
                );
              }
            n = content.split("$");
          }
          return n;
        }
        function y() {
          document.querySelector(".block-breadcrumbs") ||
            (document.getElementsByClassName("menu-wrapper")[0].style.top =
              "70px");
        }
        function M(t, time) {
          var e = window.scrollY,
            n = null;
          null == time && (time = 500),
            (t = +t),
            (time = +time),
            window.requestAnimationFrame(function c(o) {
              var progress = o - (n = n || o);
              e < t
                ? window.scrollTo(0, ((t - e) * progress) / time + e)
                : window.scrollTo(0, e - ((e - t) * progress) / time),
                progress < time
                  ? window.requestAnimationFrame(c)
                  : window.scrollTo(0, t);
            });
        }
        function P(title, t) {
          var e,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            o =
              (null === (e = window) ||
              void 0 === e ||
              null === (e = e.__NUXT__) ||
              void 0 === e ||
              null === (e = e.state) ||
              void 0 === e
                ? void 0
                : e.province) || null;
          o &&
            ((n = o.regionName[o.province.company_id]), (c = o.province.name)),
            setTimeout(function () {
              var e = window.dataLayer || [];
              e.push({
                event: t,
                ecommerce: {
                  items: [{ item_name: title }],
                  region_cps: n,
                  province: c,
                },
                eventModel: { value: 0 },
              }),
                console.log("DataLayer:"),
                console.log(e);
            }, 1e3);
        }
        function Y(t, e) {
          e[t];
          return Object(o.a)(e, [t].map(d));
        }
        function Q(object) {
          return "".concat(object.order, ": ").concat(object.dir);
        }
        function I(t, e, n) {
          return (46 === t || 152 === t) && e > 0 && n > 0;
        }
        function x(t, e) {
          for (
            var n = [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://cellphones.com.vn/",
                    name: "CELLPHONES",
                  },
                },
              ],
              c = "".concat("https://cellphones.com.vn/"),
              o = 0,
              r = t.filter(function (t, e, n) {
                return t.level !== o && 1 !== t.level ? ((o = t.level), t) : "";
              }),
              i = 0;
            i < r.length;
            i++
          )
            (c += "".concat(0 !== i ? "/" : "").concat(r[i].uri)),
              n.push({
                "@type": "ListItem",
                position: i + 2,
                item: { "@id": "".concat(c, ".html"), name: r[i].name },
              });
          return (
            n.push({
              "@type": "ListItem",
              position: r.length + 2,
              item: {
                "@id": "https://cellphones.com.vn" + this.$route.path,
                name: e,
              },
            }),
            n
          );
        }
        function j(path, t) {
          var e = "".concat("https://cellphones.com.vn/").concat(path);
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "".concat(e, "/#webpage"),
            name: "".concat(t.h1_title),
            url: "".concat(e),
            lastReviewed: "".concat(t.updated_at || ""),
            dateCreated: "".concat(t.created_at || ""),
            inLanguage: "vi-VN",
            description: "".concat(t.meta_description),
            mainEntity: {
              "@type": "WebPage",
              mainEntityOfPage: "".concat(e),
              headline: "".concat(t.h1_title),
              description: "".concat(t.meta_description),
              keywords: "".concat(t.meta_keywords),
              datePublished: "".concat(t.created_at || ""),
              dateModified: "".concat(t.updated_at || ""),
              author: {
                "@type": "Organization",
                name: "CellphoneS",
                url: "https://cellphones.com.vn",
                image: {
                  "@type": "ImageObject",
                  url: "https://cdn2.cellphones.com.vn/200x/media/favicon/default/logo-cps.png",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "CellphoneS",
                url: "https://cellphones.com.vn",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cdn2.cellphones.com.vn/200x/media/favicon/default/logo-cps.png",
                },
              },
              image: {
                "@type": "ImageObject",
                "@id": "".concat(e, "/#webpage"),
                url: "".concat(
                  t.meta_image
                    ? "https://cdn2.cellphones.com.vn/200x/media/catalog/product" +
                        t.meta_image
                    : ""
                ),
              },
            },
            speakable: {
              "@type": "SpeakableSpecification",
              xpath: [
                "/html/head/title",
                "/html/head/meta[@name='description']/@content",
              ],
            },
          };
        }
        function L(t, path) {
          var e = [];
          if (!t.length > 0) return {};
          for (var i = 0; i < t.length; i++)
            if (Object.keys(t[i].children).length > 0) {
              var n = {
                "@type": "Question",
                name: t[i].content,
                acceptedAnswer: [],
              };
              n.acceptedAnswer.push({
                "@type": "Answer",
                text: "".concat(
                  Object.keys(t[i].children).length > 0
                    ? t[i].children[0].content
                    : " "
                ),
              }),
                e.push(n);
            }
          return e.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: e,
              }
            : {};
        }
        function E(t, path) {
          var e = [];
          if (!t.length > 0) return {};
          for (var i = 0; i < t.length; i++) {
            var n = {
              "@type": "Question",
              name: t[i].question,
              acceptedAnswer: [],
            };
            n.acceptedAnswer.push({ "@type": "Answer", text: t[i].answer }),
              e.push(n);
          }
          return e.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://cellphones.com.vn".concat(
                  path,
                  "#total_comment"
                ),
                url: "https://cellphones.com.vn".concat(path),
                mainEntity: e,
              }
            : {};
        }
        function J(t, e, n, c) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            r = arguments.length > 5 ? arguments[5] : void 0,
            l = t.general.attributes.manufacturer,
            d = t.filterable.stock_available_id,
            f = "";
          if (
            ((f =
              46 === d
                ? r || "InStock"
                : 152 === d
                ? r || "PreOrder"
                : r || "OutOfStock"),
            !l)
          ) {
            var h,
              w = A(t.specification.basic);
            try {
              for (w.s(); !(h = w.n()).done; ) {
                var m = h.value;
                "phone_accessory_brands" === m.key && (l = m.value);
              }
            } catch (t) {
              w.e(t);
            } finally {
              w.f();
            }
          }
          var v,
            O = [],
            B = {},
            C = A(c);
          try {
            for (C.s(); !(v = C.n()).done; ) {
              var D = v.value;
              O.push({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "".concat(D.rating_id || 0),
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "".concat(D.customer.fullname),
                },
              });
            }
          } catch (t) {
            C.e(t);
          } finally {
            C.f();
          }
          return (
            O.length > 0 &&
              (B = {
                review: O,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "".concat(n.average_rating || 0),
                  reviewCount: "".concat(n.total_count || 0),
                },
              }),
            Object.assign(
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "".concat(t.general.name),
                image:
                  "https://cdn2.cellphones.com.vn/200x/media/catalog/product".concat(
                    e.meta_image
                  ),
                description: "".concat(e.meta_description),
                sku: "".concat(t.general.sku),
                mpn: "".concat(t.general.sku),
                brand: { "@type": "Brand", name: "".concat(l) },
                offers: {
                  "@type": "Offer",
                  url: "https://cellphones.com.vn".concat(this.$route.path),
                  priceCurrency: "VND",
                  price: "".concat(
                    (t.filterable.special_price || t.filterable.price) - o
                  ),
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/".concat(f),
                  seller: { "@type": "Organization", name: "CELLPHONES" },
                },
              },
              B
            )
          );
        }
        function G(t) {
          for (
            var image = t.image,
              e = t.url,
              n = t.city,
              address = t.address,
              c = t.listStore,
              o = t.googleLink,
              r = t.phone,
              A = t.googleMap,
              l = address.split(",")[0].split(" "),
              d = l.slice(1, l.length).join(" "),
              f = A.lastIndexOf(n) + n.length,
              h = A.slice(f, f + 1 + 6),
              w = [],
              i = 1;
            i < c.length;
            i++
          ) {
            var m = c[i].shop.address.split(",")[0].split(" "),
              v = m.slice(1, m.length).join(" ");
            w.push({
              "@type": "Store",
              name: "CellphoneS ".concat(c[i].shop.address),
              url: c[i].shop.store_opening_url,
              image: c[i].shop.store_opening_images,
              telephone: c[i].shop.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: v,
                addressLocality: n,
                postalCode: h,
                addressCountry: "VN",
              },
              priceRange: "VND",
              areaServed: [n],
              geo: {
                "@type": "GeoCoordinates",
                latitude: c[i].shop.latitude,
                longitude: c[i].shop.longitude,
              },
            });
          }
          return {
            "@context": "https://schema.org",
            "@type": "Store",
            name: "CellphoneS ".concat(address),
            image: image,
            "@id": "".concat(e, "#LocalBussiness"),
            url: o,
            telephone: r,
            priceRange: "VND",
            address: {
              "@type": "PostalAddress",
              streetAddress: d,
              addressLocality: n,
              postalCode: h,
              addressCountry: "VN",
            },
            areaServed: [n],
            geo: {
              "@type": "GeoCoordinates",
              latitude: c[0].shop.latitude,
              longitude: c[0].shop.longitude,
            },
            department: w,
          };
        }
        function N(t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 50,
            c = (
              null === (e = document) || void 0 === e
                ? void 0
                : e.getElementById("cpsHeader")
            ).offsetHeight,
            o =
              document.querySelector("#".concat(t)).getBoundingClientRect()
                .top + window.scrollY;
          window.scrollTo({ top: o - n - c, behavior: "smooth" });
        }
        function K(t) {
          var e = (null == t ? void 0 : t.split(" ")) || [];
          if (e.length) return e[e.length - 1];
        }
        function Z(t) {
          return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t =
            (t = (t = (t = (t = (t = (t = (t = t.replace(
              /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
              "a"
            )).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(
              /ì|í|ị|ỉ|ĩ/g,
              "i"
            )).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(
              /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
              "u"
            )).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(
              /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,
              "A"
            )).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(
            /Ì|Í|Ị|Ỉ|Ĩ/g,
            "I"
          )).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(
            /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,
            "U"
          )).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(
            /\u0300|\u0301|\u0303|\u0309|\u0323/g,
            ""
          )).replace(/\u02C6|\u0306|\u031B/g, "")).replace(
            / + /g,
            " "
          )).trim()).replace(
            /!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            " "
          ));
        }
        function X() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = new Date().getTime();
          return "" === e || (T(t) <= n && n <= T(e));
        }
        function T(t) {
          return "string" == typeof t && "" !== t
            ? new Date(t.replace("Z", "")).getTime()
            : new Date().getTime();
        }
        function R(t) {
          t
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("no-scroll")
            : document
                .getElementsByTagName("html")[0]
                .classList.remove("no-scroll");
        }
        function F(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 100;
          return this.$img.getImage(t, {
            provider: "CPS_IMG_PROVIDER",
            modifiers: { format: "webp", width: e, height: n, quality: c },
          }).url;
        }
        function U() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "login";
          if (window) {
            var n = { path: "/", domain: "cellphones.com.vn" };
            this.$cookies.remove("token", n),
              this.$cookies.remove("USER", n),
              (window.location =
                "login" === e
                  ? ""
                      .concat("https://account.cellphones.com.vn/")
                      .concat(t ? "?redirect_uri=" + t : "")
                  : ""
                      .concat("https://account.cellphones.com.vn/", "register")
                      .concat(t ? "?redirect_uri=" + t : ""));
          }
        }
        function W(text) {
          return (function (text) {
            return text.replace(/(^|\s)\S/g, function (t) {
              return t.toUpperCase();
            });
          })(text);
        }
      }.call(this, n(93)));
    },
    520: function (t, e, n) {
      "use strict";
      n.r(e);
      n(17), n(24), n(18), n(30), n(31);
      var c = n(0),
        o = n(6),
        r =
          (n(8),
          n(205),
          n(38),
          n(10),
          n(5),
          n(11),
          n(32),
          n(52),
          n(16),
          n(107),
          n(48),
          n(77),
          n(15)),
        A = n(499);
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          e &&
            (c = c.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, c);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
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
          name: "TechnicalInfo",
          props: {
            technicalInfoBasic: {
              type: Array,
              default: function () {
                return [];
              },
            },
            technicalInfoFull: {
              type: Array,
              default: function () {
                return [];
              },
            },
            productInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
            suffixTitle: { type: String, default: "" },
            promotionPack: {
              type: Object,
              default: function () {
                return {};
              },
            },
            showButtonPrint: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              tech: [],
              ipAdress: "",
              techModal: [],
              showMoreTechnical: !1,
              isShowPrintButton: !1,
            };
          },
          computed: d(
            {
              technicalGroup: function () {
                return Object.values(this.technicalInfoFull).map(function (t) {
                  return Object.values(t);
                });
              },
            },
            Object(r.d)("json-server", ["jsonData"])
          ),
          mounted: function () {
            this.checkIp();
          },
          methods: d(
            d(
              {
                formatMoney: A.r,
                productPercentSale: A.x,
                convertHtmlToString: A.g,
              },
              Object(r.b)("json-server", ["getDataJsonServerGraphql"])
            ),
            {},
            {
              handleClickShowMoreBtn: function () {
                (this.showMoreTechnical = !this.showMoreTechnical),
                  this.showMoreTechnical
                    ? document
                        .getElementsByTagName("html")[0]
                        .classList.add("no-scroll")
                    : document
                        .getElementsByTagName("html")[0]
                        .classList.remove("no-scroll");
              },
              printPdf: function () {
                var t,
                  e,
                  n = window.open(
                    "",
                    "",
                    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
                  ),
                  c = this.productPercentSale(
                    this.productInfo.filterable.price,
                    this.productInfo.filterable.special_price
                  ),
                  o = "<strong>".concat(
                    this.formatMoney(this.productInfo.filterable.special_price),
                    "đ</strong>"
                  ),
                  r = "",
                  A = "",
                  l = "https://cellphones.com.vn".concat(this.$route.path);
                if (
                  (0 !== this.productInfo.filterable.special_price &&
                    0 !== c &&
                    (o = "\n        <strong>"
                      .concat(
                        this.formatMoney(
                          this.productInfo.filterable.special_price
                        ),
                        "đ</strong>\n        <del>"
                      )
                      .concat(
                        this.formatMoney(this.productInfo.filterable.price),
                        'đ</del>\n        <div class="percent">\n          <span>'
                      )
                      .concat(
                        c,
                        '%</span>\n          <img src="https://cdn2.cellphones.com.vn/50x,webp/media/wysiwyg/10-percent.png" alt="Percent">\n        </div>'
                      )),
                  this.promotionPack.km_chung)
                ) {
                  r +=
                    ' <p>\n                            <strong>\n                                <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                                    <path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"></path>\n                                </svg>\n                                &nbsp;Nhận thêm khuyến mãi sau\n                            </strong>\n                        </p>';
                  var d = Object.values(this.promotionPack.km_chung);
                  (r += "<ol>"),
                    d.forEach(function (t) {
                      t.items.forEach(function (t) {
                        r += "<li> ".concat(t.name, " </li>");
                      });
                    }),
                    (r += "</ol>");
                }
                if (
                  null !== (t = this.productInfo) &&
                  void 0 !== t &&
                  null !== (t = t.general) &&
                  void 0 !== t &&
                  t.attributes
                ) {
                  var f,
                    h =
                      null === (f = this.productInfo) ||
                      void 0 === f ||
                      null === (f = f.general) ||
                      void 0 === f
                        ? void 0
                        : f.attributes;
                  (A += h.pc_lap_rap_cpu
                    ? "<li>CPU: ".concat(h.pc_lap_rap_cpu, "</li>")
                    : ""),
                    (A += h.pc_lap_rap_vga
                      ? "<li>VGA: ".concat(h.pc_lap_rap_vga, "</li>")
                      : ""),
                    (A += h.pc_lap_rap_ram
                      ? "<li>RAM: ".concat(h.pc_lap_rap_ram, "</li>")
                      : ""),
                    (A += h.pc_lap_rap_ssd
                      ? "<li>SSD: ".concat(h.pc_lap_rap_ssd, "</li>")
                      : ""),
                    (A += h.pc_lap_rap_main
                      ? "<li>MAINBOARD: ".concat(h.pc_lap_rap_main, "</li>")
                      : ""),
                    (A += h.pc_lap_rap_nguon
                      ? "<li>NGUỒN: ".concat(h.pc_lap_rap_nguon, "</li>")
                      : ""),
                    (A += h.dimensions
                      ? "<li>KÍCH THƯỚC: ".concat(h.dimensions, "</li>")
                      : "");
                }
                n.document.write(
                  '\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <title></title>\n            <style type="text/css">\n                body {\n                    font-family: sans-serif, Arial, Verdana, Tahoma;\n                    font-weight: 300;\n                    max-width: 380px;\n                    margin: auto;\n                    position: relative;\n                }\n\n                h3 {\n                    font-weight: 500;\n                    margin: 0 auto 10px;\n                }\n\n                .block {\n                    border: 1px #aaaaaa solid;\n                    border-radius: 8px;\n                    padding: 10px;\n                    margin: 10px;\n                }\n\n                .top .percent {\n                    width: 50px;\n                    height: 50px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    position: absolute;\n                    top: 0;\n                    right: 15px;\n                }\n\n                .top .percent span {\n                    transform: rotate(-34.5deg);\n                    margin: 10px 5px 6px 0;\n                    font-size: 14px;\n                    position: absolute;\n                }\n\n                .bottom .center {\n                    text-align: center;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .bottom ul, .top ol {\n                    padding-inline-start: 20px;\n                }\n\n                ul li, ol li {\n                    font-size: 14px;\n                    margin-block-start: 10px;\n                }\n\n                ol {\n                    list-style: none;\n                    counter-reset: section;\n                }\n\n                ol li {\n                    counter-increment: item;\n                }\n\n                ol li:before {\n                    display: inline-flex;\n                    border: 1px solid #000;\n                    padding: 5px;\n                    border-radius: 50%;\n                    width: 8px;\n                    height: 8px;\n                    margin-right: 5px;\n                    justify-content: center;\n                    align-items: center;\n                    counter-increment: section;\n                    content: counter(section);\n                }\n\n                p {\n                    font-size: 14px;\n                }\n            </style>\n        </head>\n        <body>\n        <div class="top block">\n            <h3>'
                    .concat(
                      null === (e = this.productInfo) ||
                        void 0 === e ||
                        null === (e = e.general) ||
                        void 0 === e
                        ? void 0
                        : e.name,
                      "</h3>\n            "
                    )
                    .concat(o, "\n            ")
                    .concat(
                      r,
                      '\n        </div>\n        <div class="bottom block">\n            <h3 class="center">\n                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"\n                     xmlns:xlink="http://www.w3.org/1999/xlink">\n                    <rect width="20" height="20" fill="url(#pattern0)"/>\n                    <defs>\n                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\n                            <use xlink:href="#image0_1_17" transform="scale(0.00195312)"/>\n                        </pattern>\n                        <image id="image0_1_17" width="512" height="512"\n                               xlink:href="data:image/png;base64,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"/>\n                    </defs>\n                </svg>\n                &nbsp;Cấu hình chi tiết\n            </h3>\n            <ul>\n                '
                    )
                    .concat(
                      A,
                      '\n            </ul>\n            <div class="center">\n                <img width="150" src="https://link.cellphones.com.vn/qr/qrlogo.php?data='
                    )
                    .concat(
                      l,
                      '" alt="QR">\n            </div>\n            <p class="center">Quét mã để xem thông tin chi tiết sản phẩm</p>\n        </div>\n        </body>\n        </html>\n      '
                    )
                ),
                  n.document.close(),
                  setTimeout(function () {
                    n.focus(), n.print(), n.close();
                  }, 2e3);
              },
              listPromotion: function () {
                var t = this;
                if (0 === Object.values(this.promotionPack).length) return [];
                var e = Object.values(this.promotionPack.km_chung).map(
                  function (e) {
                    return 0 !== e.value &&
                      "0" !== e.value &&
                      !e.items.length > 1
                      ? {
                          name: "Tặng phiếu mua hàng ".concat(
                            t.formatMoney(e.value)
                          ),
                          id: e.id,
                          product_code: e.product_code,
                          promotionpackdetail_id: e.promotionpackdetail_id,
                          url: e.url,
                        }
                      : e.items;
                  }
                );
                return [].concat.apply([], e);
              },
              getIpAdress: function () {
                return fetch("https://www.cloudflare.com/cdn-cgi/trace").then(
                  (function () {
                    var t = Object(c.a)(
                      regeneratorRuntime.mark(function t(e) {
                        var n, c, o;
                        return regeneratorRuntime.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.text();
                              case 2:
                                return (
                                  (n = t.sent),
                                  (c = n.search("ip=")),
                                  (o = n.search("\nts=")),
                                  t.abrupt("return", n.substring(c + 3, o))
                                );
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
              },
              checkIp: function () {
                var t = this;
                return Object(c.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.getIpAdress();
                          case 2:
                            return (
                              (t.ipAdress = e.sent),
                              (e.next = 5),
                              t.getDataJsonServerGraphql({
                                idJson: "ip_shop_cps",
                                ud: "ip_shop_cps",
                              })
                            );
                          case 5:
                            t.showButtonPrint &&
                              t.jsonData.ip_shop_cps.ip_cps.includes(
                                t.ipAdress
                              ) &&
                              (t.isShowPrintButton = !0);
                          case 6:
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
        h = f,
        w = (n(969), n(42)),
        component = Object(w.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "cps-block-technicalInfo mb-3 ml-3 px-3 pt-3 pb-1",
              },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "is-flex is-justify-content-space-between is-align-items-center",
                  },
                  [
                    e("h2", { staticClass: "title is-6 mb-3" }, [
                      t._v("Thông số kỹ thuật" + t._s(t.suffixTitle)),
                    ]),
                    t._v(" "),
                    t.isShowPrintButton
                      ? e(
                          "button",
                          {
                            staticClass:
                              "button button__printPdf is-light mb-3 is-flex is-justify-content-space-between is-align-items-center",
                            staticStyle: { width: "120px" },
                            on: {
                              click: function (e) {
                                return t.printPdf();
                              },
                            },
                          },
                          [
                            e("RenderHtml", {
                              staticClass: "icon-svg",
                              attrs: { html: t.$icons().Download },
                            }),
                            t._v("\n      In cấu hình\n    "),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                ),
                t._v(" "),
                e(
                  "ul",
                  { staticClass: "technical-content" },
                  t._l(t.technicalInfoBasic, function (n, c) {
                    return e(
                      "li",
                      {
                        key: c,
                        staticClass:
                          "technical-content-item is-flex is-align-items-center is-justify-content-space-between p-2",
                      },
                      [
                        e("p", [t._v(t._s(n.label))]),
                        t._v(" "),
                        e("RenderHtml", { attrs: { html: n.value } }),
                      ],
                      1
                    );
                  }),
                  0
                ),
                t._v(" "),
                e(
                  "button",
                  {
                    staticClass:
                      "button button__show-modal-technical my-3 is-flex is-justify-content-center",
                    on: { click: t.handleClickShowMoreBtn },
                  },
                  [
                    t._v("\n    Xem cấu hình chi tiết\n    "),
                    e("RenderHtml", {
                      staticClass: "icon-svg",
                      attrs: { html: t.$icons().ChevronDown },
                    }),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "modal",
                    class: t.showMoreTechnical && "is-active",
                  },
                  [
                    e("div", {
                      staticClass: "modal-background",
                      on: { click: t.handleClickShowMoreBtn },
                    }),
                    t._v(" "),
                    e("div", { staticClass: "modal-card" }, [
                      e(
                        "header",
                        {
                          staticClass:
                            "modal-card-head technical-title-modal is-flex is-justify-content-space-between is-align-items-center px-4",
                        },
                        [
                          e(
                            "p",
                            {
                              staticClass:
                                "modal-card-title title is-5 p-0 m-0 has-text-white",
                            },
                            [t._v("Thông số kỹ thuật")]
                          ),
                          t._v(" "),
                          e("button", {
                            staticClass: "delete modal__button",
                            attrs: { "aria-label": "close" },
                            on: { click: t.handleClickShowMoreBtn },
                          }),
                        ]
                      ),
                      t._v(" "),
                      e("section", { staticClass: "modal-card-body" }, [
                        e("div", { staticClass: "modal-content" }, [
                          e(
                            "ul",
                            { staticClass: "technical-content-modal" },
                            t._l(t.technicalInfoFull, function (n, title, c) {
                              return e(
                                "li",
                                {
                                  key: c,
                                  staticClass:
                                    "technical-content-modal-item m-3",
                                },
                                [
                                  e("p", { staticClass: "title is-6 m-2" }, [
                                    t._v(t._s(n.label)),
                                  ]),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "modal-item-description mx-2",
                                    },
                                    t._l(n.value, function (n, c) {
                                      return e(
                                        "div",
                                        {
                                          key: c,
                                          staticClass:
                                            "px-3 py-2 is-flex is-align-items-center is-justify-content-space-between",
                                        },
                                        [
                                          n.label_url
                                            ? [
                                                e("p", [
                                                  e(
                                                    "a",
                                                    t._b(
                                                      {
                                                        attrs: {
                                                          target: "_blank",
                                                          rel: "nofollow",
                                                        },
                                                      },
                                                      "a",
                                                      { href: n.label_url },
                                                      !1
                                                    ),
                                                    [t._v(t._s(n.label))]
                                                  ),
                                                ]),
                                              ]
                                            : [e("p", [t._v(t._s(n.label))])],
                                          t._v(" "),
                                          e("RenderHtml", {
                                            attrs: { html: n.value },
                                          }),
                                        ],
                                        2
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("footer", { staticClass: "modal-card-foot" }, [
                        e(
                          "button",
                          {
                            staticClass:
                              "button modal__button close-button-modal is-flex is-align-items-center",
                            on: { click: t.handleClickShowMoreBtn },
                          },
                          [t._v("\n          ×\n          Đóng\n        ")]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
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
    707: function (t, e, n) {
      t.exports = {};
    },
    969: function (t, e, n) {
      "use strict";
      n(707);
    },
  },
]);
