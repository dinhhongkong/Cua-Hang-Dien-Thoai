function gtm_ProductImpressions(n, t, i, r, u, f, e) {
  if (dataLayer === undefined) {
    console.log("dataLayer chÆ°a khai bĂ¡o");
    return;
  }
  var o = [
      { name: n, id: t, price: i, brand: r, category: u, list: f, position: e },
    ],
    s = { ecommerce: { impressions: o }, event: "productImpressions" };
  dataLayer.push(s);
}
function addListProductIntoImpression(n, t, i, r = false) {
  var e, u, h;
  if (n !== undefined && n.length > 0) {
    (i === undefined || i <= 0) && (i = 1);
    (t === undefined || t == null || t == "") && (t = "List product");
    var s = [],
      f = {},
      o = 0;
    for (e = 0; e < n.length; e++)
      o++,
        (u = n[e]),
        (h = u.parentNode.getAttribute("data-pos")),
        r && (h = u.getAttribute("data-pos")),
        (f.name = u.dataset.name),
        (f.id = u.dataset.id),
        (f.price = u.dataset.price),
        (f.brand = u.dataset.brand),
        (f.category = u.dataset.cate),
        (f.list = t),
        (f.position = h),
        gbl_siteId !== undefined &&
          (gbl_siteId == 1
            ? (f.dimension88 =
                u.dataset.isRecommended === undefined ||
                u.dataset.isRecommended === !1
                  ? "No"
                  : "Yes")
            : gbl_siteId == 2 &&
              (f.dimension79 =
                u.dataset.isRecommended === undefined ||
                u.dataset.isRecommended === !1
                  ? "No"
                  : "Yes")),
        s.push(f),
        (f = {}),
        ((e + 1 == n.length && o < i) || o == i) &&
          (gtm_ListProductImpressions(s), (o = 0), (s = []));
  }
}
function gtm_ListProductImpressions(n) {
  if (dataLayer === undefined) {
    console.log("dataLayer chÆ°a khai bĂ¡o");
    return;
  }
  if (n !== undefined && n != null && n.length > 0) {
    var t = { ecommerce: { impressions: n }, event: "productImpressions" };
    dataLayer.push(t);
  }
}
function gtm_ProductClick(n, t, i, r, u, f, e, o = false, s = "") {
  var h, c;
  if (dataLayer === undefined) {
    console.log("dataLayer chÆ°a khai bĂ¡o");
    return;
  }
  h = [
    {
      name: n,
      id: t === undefined ? "" : t.toString(),
      price: i === undefined ? "" : i.toString(),
      brand: r,
      category: u,
      list: f,
      position: e === undefined ? "" : e.toString(),
    },
  ];
  gbl_siteId !== undefined &&
    (gbl_siteId == 1
      ? ((h[0].dimension88 = o === undefined || o === !1 ? "No" : "Yes"),
        (h[0].dimension91 =
          s === undefined || s !== "CleanStock" ? "No" : "Yes"))
      : gbl_siteId == 2 &&
        ((h[0].dimension79 = o === undefined || o === !1 ? "No" : "Yes"),
        (h[0].dimension82 =
          s === undefined || s !== "CleanStock" ? "No" : "Yes")));
  c = {
    ecommerce: { click: { products: h, actionField: { list: f } } },
    event: "productClick",
  };
  dataLayer.push(c);
}
function gtm_ProductDetailView(
  n,
  t,
  i,
  r,
  u,
  f,
  e,
  o,
  s,
  h,
  c,
  l,
  a,
  v,
  y,
  p,
  w,
  b,
  k,
) {
  if (dataLayer === undefined) {
    console.log("dataLayer chÆ°a khai bĂ¡o");
    return;
  }
  var d = [
      {
        name: n,
        id: t,
        price: i,
        brand: r,
        category: u,
        dimension33: f,
        dimension34: e,
        dimension35: o,
        dimension36: s,
        dimension37: h,
        dimension16: c,
        dimension38: l,
        dimension39: a,
        dimension40: v,
        dimension41: y,
        dimension43: p,
        dimension44: w,
        dimension45: b,
      },
    ],
    g = {
      event: "productDetail",
      serviceOrder: k,
      ecommerce: { detail: { products: d } },
    };
  dataLayer.push(g);
}
function gtm_ProductAddtoCart(
  n,
  t,
  i,
  r,
  u,
  f,
  e,
  o,
  s,
  h,
  c,
  l,
  a,
  v,
  y,
  p,
  w,
  b,
  k,
  d,
  g,
  nt,
  tt,
) {
  if (dataLayer === undefined) {
    console.log("dataLayer chÆ°a khai bĂ¡o");
    return;
  }
  var it = [
      {
        name: n,
        id: t,
        price: i,
        brand: r,
        category: u,
        variant: f,
        quantity: e,
        dimension33: o,
        dimension34: s,
        dimension35: h,
        dimension36: c,
        dimension37: l,
        dimension16: a,
        dimension38: v,
        dimension39: y,
        dimension40: p,
        dimension41: w,
        dimension43: b,
        dimension44: k,
        dimension45: d,
        dimension42: g,
      },
    ],
    rt = {
      event: "productAddToCart",
      orderType: nt,
      serviceOrder: tt,
      ecommerce: { add: { products: it } },
    };
  dataLayer.push(rt);
}
function GetProductScroll() {
  var n, t, i, r, u, f;
  $(".flashsale-block").length > 0 && (n = $(".flashsale-block").offset().top);
  $(".hotdeal .prd-promo").length > 0 &&
    (t = $(".hotdeal .prd-promo").offset().top);
  $(".prd-promo.promo-7day").length > 0 &&
    (i = $(".prd-promo.promo-7day").offset().top);
  $(".prd-promo.prd-another").length > 0 &&
    (r = $(".prd-promo.prd-another").offset().top);
  $(".daily-sg").length > 0 && (u = $(".daily-sg").offset().top);
  $(".prd-promo.promo-muanong").length > 0 &&
    (f = $(".prd-promo.promo-muanong").offset().top);
  $(window).scroll(() => {
    var o =
        $(".flashsale-block .listproduct .slick-active .item > a").length > 0
          ? $(".flashsale-block .listproduct .slick-active .item > a")
          : $(".flashsale-block .listproduct .item > a"),
      s = $(".hotdeal .prd-promo .listproduct .active .item > a"),
      h = $(".prd-promo.promo-7day .listproduct .active .item > a"),
      c = $(".prd-promo.prd-another .listproduct .active .item > a"),
      l = $(".daily-sg .box-common__content")
        .eq(0)
        .find(".listproduct .item:not(.hide) > a"),
      a = $(".prd-promo.promo-muanong .box-common__content")
        .eq(0)
        .find(".listproduct .active .item > a"),
      e;
    flagGetProductScrollFlashsale = ComparePosition(
      n,
      o,
      flagGetProductScrollFlashsale,
      "Home page - " + FormatString($(".flashsale-block .gvdshock h3").text()),
    );
    flagGetProductScrollHotdeal = ComparePosition(
      t,
      s,
      flagGetProductScrollHotdeal,
      "Home page - Deal ngon má»—i ngĂ y",
    );
    e = $(".promo-7day .box-common__tab .active-tab");
    flagGetProductScrollKnockout = ComparePosition(
      i,
      h,
      flagGetProductScrollKnockout,
      `Home page - Tuáº§n lá»… knockout${
        e.length ? ` - ${FormatString(e.text())}` : ""
      }`,
    );
    flagGetProductScrollPromoManu = ComparePosition(
      r,
      c,
      flagGetProductScrollPromoManu,
      "Home page - Tuáº§n lá»… thÆ°Æ¡ng hiá»‡u",
    );
    flagGetProductScrollRecommend = ComparePosition(
      u,
      l,
      flagGetProductScrollRecommend,
      "Home page - Gá»£i Ă½ hĂ´m nay - " +
        FormatString($(".option-sg a").eq(0).find("span").text()),
    );
    flagGetProductScrollPromoteHotseason = ComparePosition(
      f,
      a,
      flagGetProductScrollPromoteHotseason,
      "Home page - Tuáº§n lá»… gia dá»¥ng - " +
        FormatString(
          $(".prd-promo.promo-muanong .box-common__tab .active-tab").text(),
        ),
    );
  });
}
function ComparePosition(n, t, i, r) {
  if (i) return !0;
  var u = $(this).scrollTop();
  return u >= n - 150 && u <= n + screen.height && t.length > 0
    ? (addListProductIntoImpression(t, r, 10), !0)
    : !1;
}
function FormatString(n) {
  return n.trim().replace("\n", "");
}
function GetTabByAttr(n) {
  let t = {
    isRecommendTab: n.data("is-recommend-tab"),
    campaignId: n.data("campaign"),
    groupId: n.data("group"),
  };
  return $(
    ".option-sg a" +
      (t.isRecommendTab == !0
        ? "[data-is-recommend-tab=" + t.isRecommendTab + "]"
        : ":not([data-is-recommend-tab])") +
      (t.campaignId != null
        ? "[data-campaign=" + t.campaignId + "]"
        : ":not([data-campaign])") +
      (t.groupId != null
        ? "[data-group=" + t.groupId + "]"
        : ":not([data-group])"),
  );
}
$(document).ready(function () {
  $(document).on(
    "click",
    ".hotdeal .prd-promo:not(.prd-another) .listproduct .item a",
    function () {
      var n = $(this).data("name"),
        t = $(this).data("id"),
        i = $(this).data("price"),
        r = $(this).data("brand"),
        u = $(this).data("cate"),
        f = $(this).parent().data("pos"),
        e = $(this).data("is-recommended"),
        o = $(this).data("s");
      gtm_ProductClick(
        n,
        t.toString(),
        i.toString(),
        r,
        u,
        "Home page - Deal ngon má»—i ngĂ y",
        f.toString(),
        e,
        o,
      );
    },
  );
  $(document).on(
    "click",
    ".prd-promo.promo-7day .listproduct .item a",
    function () {
      var t = $(this).data("name"),
        i = $(this).data("id"),
        r = $(this).data("price"),
        u = $(this).data("brand"),
        f = $(this).data("cate"),
        n = $(".promo-7day .box-common__tab .active-tab"),
        e = `Home page - Tuáº§n lá»… knockout${
          n.length ? ` - ${FormatString(n.text())}` : ""
        }`,
        o = $(this).parent().data("pos"),
        s = $(this).data("is-recommended"),
        h = $(this).data("s");
      gtm_ProductClick(
        t,
        i.toString(),
        r.toString(),
        u,
        f,
        e,
        o.toString(),
        s,
        h,
      );
    },
  );
  $(document).on("click", ".flashsale-block .listproduct .item a", function () {
    var n = $(this).data("name"),
      t = $(this).data("id"),
      i = $(this).data("price"),
      r = $(this).data("brand"),
      u = $(this).data("cate"),
      f =
        "Home page - " +
        FormatString(
          $(this).closest(".flashsale-block").find(".gvdshock h3").text(),
        ),
      e = $(this).parent().data("pos"),
      o = $(this).data("is-recommended"),
      s = $(this).data("s");
    gtm_ProductClick(
      n,
      t.toString(),
      i.toString(),
      r,
      u,
      f,
      e.toString(),
      o,
      s,
    );
  });
  $(document).on(
    "click",
    ".prd-promo.prd-another .listproduct .item a",
    function () {
      var n = $(this).data("name"),
        t = $(this).data("id"),
        i = $(this).data("price"),
        r = $(this).data("brand"),
        u = $(this).data("cate"),
        f = $(this).parent().data("pos"),
        e = $(this).data("is-recommended"),
        o = $(this).data("s");
      gtm_ProductClick(
        n,
        t.toString(),
        i.toString(),
        r,
        u,
        "Home page - Tuáº§n lá»… thÆ°Æ¡ng hiá»‡u",
        f.toString(),
        e,
        o,
      );
    },
  );
  $(document).on(
    "click",
    ".prd-promo.promo-muanong .listproduct .item a",
    function () {
      var n = $(this).data("name"),
        t = $(this).data("id"),
        i = $(this).data("price"),
        r = $(this).data("brand"),
        u = $(this).data("cate"),
        f =
          "Home page - Tuáº§n lá»… gia dá»¥ng - " +
          FormatString(
            $(".prd-promo.promo-muanong .box-common__tab .active-tab").text(),
          ),
        e = $(this).parent().data("pos"),
        o = $(this).data("is-recommended"),
        s = $(this).data("s");
      gtm_ProductClick(
        n,
        t.toString(),
        i.toString(),
        r,
        u,
        f,
        e.toString(),
        o,
        s,
      );
    },
  );
  $(document).on("click", ".daily-sg .listproduct .item a", function () {
    var n = $(this).data("name"),
      t = $(this).data("id"),
      i = $(this).data("price"),
      r = $(this).data("brand"),
      u = $(this).data("cate"),
      f =
        "Home page - Gá»£i Ă½ hĂ´m nay - " +
        FormatString($(".option-sg a").eq(0).find("span").text()),
      e = $(this).parent().data("pos"),
      o = $(this).data("is-recommended"),
      s = $(this).data("s");
    gtm_ProductClick(
      n,
      t.toString(),
      i.toString(),
      r,
      u,
      f,
      e.toString(),
      o,
      s,
    );
  });
  $(document).on("click", ".hotdeal .prd-promo .owl-nav button", function () {
    var n = $(".hotdeal .prd-promo .listproduct .active .item > a"),
      t = "";
    n.length > 0 &&
      ((t = "Home page - Deal ngon má»—i ngĂ y"),
      addListProductIntoImpression(n, t, 5));
  });
  $(document).on("click", ".prd-promo.promo-7day .owl-nav button", function () {
    var t = $(
        ".prd-promo.promo-7day .listproduct:not(.owl-hidden) .active .item > a",
      ),
      i = "",
      n;
    t.length > 0 &&
      ((n = $(".promo-7day .box-common__tab .active-tab")),
      (i = `Home page - Tuáº§n lá»… knockout${
        n.length ? ` - ${FormatString(n.text())}` : ""
      }`),
      addListProductIntoImpression(t, i, 5));
  });
  $(document).on("click", ".flashsale-block button.slick-arrow", function () {
    var n =
        $(".flashsale-block .listproduct .slick-active .item > a").length > 0
          ? $(".flashsale-block .listproduct .slick-active .item > a")
          : $(".flashsale-block .listproduct .item > a"),
      t = "";
    n.length > 0 &&
      ((t =
        "Home page - " +
        FormatString($(".flashsale-block .gvdshock h3").text())),
      addListProductIntoImpression(n, t, 5));
  });
  $(document).on(
    "click",
    ".prd-promo.promo-muanong .owl-nav button",
    function () {
      var n = $(
          ".prd-promo.promo-muanong .listproduct:not(.owl-hidden) .active .item > a",
        ),
        t = "";
      n.length > 0 &&
        ((t =
          "Home page - Tuáº§n lá»… gia dá»¥ng - " +
          FormatString(
            $(".prd-promo.promo-muanong .box-common__tab .active-tab").text(),
          )),
        addListProductIntoImpression(n, t, 5));
    },
  );
  $(document).on(
    "click",
    ".prd-promo.prd-another .owl-nav button",
    function () {
      var n = $(".prd-promo.prd-another .listproduct .active .item > a"),
        t = "";
      n.length > 0 &&
        ((t = "Home page -  Tuáº§n lá»… thÆ°Æ¡ng hiá»‡u"),
        addListProductIntoImpression(n, t, 5));
    },
  );
  GetProductScroll();
});
var flagGetProductScrollKnockout = !1,
  flagGetProductScrollHotdeal = !1,
  flagGetProductScrollFlashsale = !1,
  flagGetProductScrollPromoManu = !1,
  flagGetProductScrollRecommend = !1,
  flagGetProductScrollPromoteHotseason = !1;
1;
