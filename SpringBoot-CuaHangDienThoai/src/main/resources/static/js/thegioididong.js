/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
function initCpKids() {
  if (!isInitCpKids) {
    if (
      (openPopupcode(), console.log("initCpKids_"), $(".couponform").length > 0)
    ) {
      $(".couponform").unbind();
      $(".couponform").on(
        "keyup change paste",
        "input, select, textarea",
        function () {
          validateCpKids();
        },
      );
    }
    $(window).keydown(function (n) {
      if (n.keyCode == 13)
        return console.log("prevent enter"), n.preventDefault(), !1;
    });
    isInitCpKids = !0;
    $("#sendFirstCp")
      .unbind()
      .click(function (n) {
        if (
          (n.preventDefault(), console.log("sendfrsCp"), isSendingFcp !== !0) &&
          validatefrsCp() !== !1
        ) {
          let t = $(".formcode").serialize();
          isSendingFcp = !0;
          $.ajax({
            url: "/Product/SendFirstCp",
            data: t,
            method: "POST",
            beforeSend: function () {},
            success: function (n) {
              console.log(n);
              n.status != null && parseInt(n.status) == 0
                ? ($(".code-title").addClass("hide"),
                  $(".formcode").addClass("hide"),
                  $(".code-note").addClass("hide"),
                  $(".code-note .required").html(""),
                  $(".code-form-list .sfcpPhone").html($("#fcpPhone").val()),
                  $(".code-form-list").removeClass("hide"),
                  $(".code-form-img").removeClass("hide"))
                : ($(".code-note .required").html(n.message),
                  $(".code-note .required").removeClass("hide"));
              isSendingFcp = !1;
              return;
            },
            complete: function () {},
          });
        }
      });
    $("#submitCp")
      .unbind()
      .click(function (n) {
        if (
          (n.preventDefault(),
          console.log("sendCpKids__"),
          isSendingCpKids !== !0) &&
          validateCpKids() !== !1
        ) {
          let t = $(".couponform").serialize();
          isSendingCpKids = !0;
          $.ajax({
            url: "/Product/SendFirstCp",
            data: t,
            method: "POST",
            beforeSend: function () {},
            success: function (n) {
              console.log(n);
              n.status != null && parseInt(n.status) == 0
                ? ($(".promote__form .couponform").addClass("hide"),
                  $(".promote__form .form-note").addClass("hide"),
                  $(".promote__form .form-noti").addClass("hide"),
                  $(".promote__form .required").html(""),
                  $(".promote-done span").html($("#cpKPhone").val()),
                  $(".promote-done").removeClass("hide"))
                : ($(".promote__form .required").html(n.message),
                  $(".promote__form .required").removeClass("hide"));
              isSendingCpKids = !1;
              return;
            },
            complete: function () {},
          });
        }
      });
  }
}
function sendCpKids(n) {
  if (
    (n.preventDefault(), console.log("sendCpKids__"), isSendingCpKids !== !0) &&
    validateCpKids() !== !1
  ) {
    let t = $(".couponform").serialize();
    isSendingCpKids = !0;
    $.ajax({
      url: "/Product/SendFirstCp",
      data: t,
      method: "POST",
      beforeSend: function () {},
      success: function (n) {
        console.log(n);
        n.status != null && parseInt(n.status) == 0
          ? ($(".promote__form .couponform").addClass("hide"),
            $(".promote__form .form-note").addClass("hide"),
            $(".promote__form .form-noti").addClass("hide"),
            $(".promote__form .required").html(""),
            $(".promote-done span").html($("#cpKPhone").val()),
            $(".promote-done").removeClass("hide"))
          : ($(".promote__form .required").html(n.message),
            $(".promote__form .required").removeClass("hide"));
        isSendingCpKids = !1;
        return;
      },
      complete: function () {},
    });
  }
}
function validateCpKids() {
  var n = !0;
  return (
    $("#cpKPhone").val().length > 9 && $("#cpKName").val().length > 3
      ? $(".couponform button").removeClass("hasvalue").addClass("hasvalue")
      : ($(".couponform button").removeClass("hasvalue"), (n = !1)),
    n
  );
}
function openPopupcode() {
  if ((console.log("openPopupcode"), $(".code-form").length > 0)) {
    $(".bannerFirstCp").click(function () {
      $(".code-form").fadeIn();
      $(".bg-code").fadeIn();
      $(".formcode #fcpName").val("");
      $(".formcode #fcpPhone").val("");
      $(".formcode").removeClass("hide");
      $(".code-note").removeClass("hide");
      $(".code-title").removeClass("hide");
      $(".code-note .required").html("");
      $(".code-form-list .sfcpPhone").html("");
      $(".code-form-list").removeClass("hide").addClass("hide");
      $(".code-form-img").removeClass("hide").addClass("hide");
    });
    $(".bg-code").click(function () {
      $(".code-form").fadeOut();
      $(".bg-code").fadeOut();
    });
    $(".code-btnclose").click(function () {
      $(".code-form").fadeOut();
      $(".bg-code").fadeOut();
    });
    $(".formcode").on(
      "keyup change paste",
      "input, select, textarea",
      function () {
        validatefrsCp();
      },
    );
  }
}
function validatefrsCp() {
  var n = !0;
  return (
    $(".code-note .required").html(""),
    $(".code-note .required").removeClass("hide").addClass("hide"),
    $("#fcpPhone").val().length > 9 && $("#fcpName").val().length > 3
      ? $(".formcode button").removeClass("hasvalue").addClass("hasvalue")
      : ($(".formcode button").removeClass("hasvalue"), (n = !1)),
    n
  );
}
function sendfrsCp(n) {
  if (
    (n.preventDefault(), console.log("sendfrsCp"), isSendingFcp !== !0) &&
    validatefrsCp() !== !1
  ) {
    let t = $(".formcode").serialize();
    isSendingFcp = !0;
    $.ajax({
      url: "/Product/SendFirstCp",
      data: t,
      method: "POST",
      beforeSend: function () {},
      success: function (n) {
        console.log(n);
        n.status != null && parseInt(n.status) == 0
          ? ($(".code-title").addClass("hide"),
            $(".formcode").addClass("hide"),
            $(".code-note").addClass("hide"),
            $(".code-note .required").html(""),
            $(".code-form-list .sfcpPhone").html($("#fcpPhone").val()),
            $(".code-form-list").removeClass("hide"),
            $(".code-form-img").removeClass("hide"))
          : ($(".code-note .required").html(n.message),
            $(".code-note .required").removeClass("hide"));
        isSendingFcp = !1;
        return;
      },
      complete: function () {},
    });
  }
}
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
function getAutocomplete() {
  typeof AutoComplete == "undefined"
    ? include("/wwwroot/js/Global/autocomplete.js", function () {
        globalEvent.emit("autocomplete");
      })
    : globalEvent.emit("autocomplete");
}
function OpenLocation(n) {
  isLoadPopupLocation
    ? $(".locationbox-v2").length > 0
      ? LoadPopupLocationV2()
      : LoadPopupLocation()
    : ($(".locationbox-v2").length > 0
        ? (callFirstLoadPopup(),
          clearPopupLocation($(".locationbox-v2").is(":visible")),
          $(".locationbox-v2").toggle())
        : $(".locationbox").toggle(),
      $(".locationbox__overlay").toggle(),
      $("#lc_pop--sugg").remove(),
      $("html,body").toggleClass("over-flow"));
  n
    ? ($(".locationbox").addClass("atdetailpage"),
      $("#lc_title").addClass("hide"),
      $(".box-re").removeClass("hide"),
      $("#hdLocationWardId").val() == 0 &&
        ($(".locationbox__popup .accept .btnConfirm").addClass("disabled"),
        $(".locationbox__popup .accept .btnConfirm").html(
          "Má»i báº¡n chá»n Ä‘áº§y Ä‘á»§ Ä‘á»‹a chá»‰",
        )))
    : ($(".locationbox").removeClass("atdetailpage"),
      $("#lc_title").removeClass("hide"),
      $(".box-re").addClass("hide"),
      $(".locationbox__popup .accept .btnConfirm").removeClass("disabled"),
      $(".locationbox__popup .accept .btnConfirm").html("XĂ¡c nháº­n"),
      $(".header__address").toggleClass("active"));
}
function LocaltionShowAll(n) {
  var t = $(n).next();
  $(".locationbox__popup .boxprov__listTT--scroll").not(t).hide();
  $(t).slideToggle();
}
function changePoupProv(n, t) {
  if (n == parseInt($("#hdLocationProvinceId").val()))
    return (
      $(t).closest(".locationbox__popup .boxprov__listTT--scroll").hide(), !1
    );
  $("#lc_detail").hide();
  $("#boxprovDistrict").text("Vui lĂ²ng chá»n Quáº­n/Huyá»‡n");
  $("#boxprovWard").text("Vui lĂ²ng chá»n PhÆ°á»ng/XĂ£");
  $("#hdLocationDisId").val(0);
  $("#hdLocationWardId").val(0);
  $("#boxprovWard").addClass("disabled");
  $(".locationbox").hasClass("atdetailpage") &&
    ($(".locationbox__popup .accept .btnConfirm").addClass("disabled"),
    $(".locationbox__popup .accept .btnConfirm").html(
      "Má»i báº¡n chá»n Ä‘áº§y Ä‘á»§ Ä‘á»‹a chá»‰",
    ));
  $.ajax({
    url: urlRoot + "/Store/GetAllDistrictsByProvince",
    type: "POST",
    data: { provinceId: n, viewName: "PopUpDistrict" },
    cache: !1,
    beforeSend: function () {
      $("#dldingtext").show();
    },
    success: function (i) {
      i != "" &&
        (locationShowFull(),
        $("#locationAddress").val(""),
        $("#province-box li a").removeClass("active"),
        $(t).addClass("active"),
        $(t)
          .parents(".locationbox__popup .boxprov__listTT--scroll")
          .slideToggle(),
        $("#boxprovProvince").text(
          $("#province-box .scroll-box ul")
            .find("a[data-value=" + n + "]")
            .text(),
        ),
        $("#district-box-poup").replaceWith(i),
        $("#boxprovDistrict").click(),
        $("#hdLocationProvinceId").val(n),
        $("#district-box-poup li").length == 0
          ? ($("#district-box-poup").hide(),
            $("#boxprovDistrict").addClass("disabled"))
          : ($("#district-box-poup").show(),
            $("#boxprovDistrict").removeClass("disabled")),
        n != 3 && $(".boxprov__listTT--scroll .warning-text").hide());
      $("#dldingtext").hide();
    },
    error: function () {
      $("#dldingtext").hide();
    },
  });
}
function changePoupDistrict(n, t, i) {
  if (t == parseInt($("#hdLocationDisId").val()))
    return (
      $(i).closest(".locationbox__popup .boxprov__listTT--scroll").hide(), !1
    );
  $("#lc_detail-dis").hide();
  $("#lc_detail-ward").hide();
  $("#lc_detail-address").hide();
  $("#hdLocationWardId").val(0);
  $("#boxprovWard").text("Vui lĂ²ng chá»n PhÆ°á»ng/XĂ£");
  $("#boxprovWard").addClass("disabled");
  $(".locationbox__popup .accept .btnConfirm").addClass("disabled");
  $(".locationbox").hasClass("atdetailpage") &&
    $(".locationbox__popup .accept .btnConfirm").html(
      "Má»i báº¡n chá»n Ä‘áº§y Ä‘á»§ Ä‘á»‹a chá»‰",
    );
  $.ajax({
    url: urlRoot + "/Store/GetAllWardsByProvince",
    type: "POST",
    data: { provinceId: n, districtId: t },
    cache: !1,
    beforeSend: function () {
      $("#dldingtext").show();
    },
    success: function (n) {
      n != "" &&
        ($("#district-box-poup li a").removeClass("active"),
        $(i).addClass("active"),
        $(i)
          .parents(".locationbox__popup .boxprov__listTT--scroll")
          .slideToggle(),
        $("#boxprovDistrict").text(
          $("#district-box-poup .scroll-box ul")
            .find("a[data-dis=" + t + "]")
            .text(),
        ),
        $("#ward-box").replaceWith(n),
        $("#boxprovWard").click(),
        $("#boxprovWard").removeClass("disabled"),
        $("#hdLocationDisId").val(t),
        $("#ward-box li").length == 0
          ? ($("#ward-box").hide(),
            $("#boxprovWard").addClass("disabled"),
            $("#lc_btn-Confirm").addClass("disabled"))
          : $("#hdLocationWardId").val() > 0 &&
            ($("#ward-box").show(),
            $("#boxprovWard").removeClass("disabled"),
            $("#lc_btn-Confirm").removeClass("disabled")));
      $("#dldingtext").hide();
    },
    error: function () {
      $("#dldingtext").hide();
    },
  });
}
function changePoupWard(n, t) {
  if (n == parseInt($("#hdLocationWardId").val()))
    return (
      $(t)
        .parents(".locationbox__popup .boxprov__listTT--scroll")
        .slideToggle(),
      !1
    );
  $("#boxprovWard").text(
    $("#ward-box .scroll-box ul")
      .find("a[data-value=" + n + "]")
      .text(),
  );
  $("#ward-box li a").removeClass("active");
  $(t).addClass("active");
  $(t).parents(".locationbox__popup .boxprov__listTT--scroll").slideToggle();
  $("#hdLocationWardId").val(n);
  $(".locationbox__popup .accept .btnConfirm").removeClass("disabled");
  $(".locationbox__popup .accept .btnConfirm").html("XĂ¡c nháº­n");
}
function searchLocation(n) {
  var t = $(n).val().toString().toLowerCase();
  $(n)
    .closest(".stores-box")
    .find("ul")
    .find("a")
    .each(function (n, i) {
      var r = $(i).text().toString().toLowerCase();
      stringToSlug(r).includes(stringToSlug(t))
        ? $(i).parent("li").show()
        : $(i).parent("li").hide();
    });
}
function locationConfirm() {
  var n = {
    Address: $("#locationAddress").val(),
    ProvinceId: $("#hdLocationProvinceId").val(),
    DistrictId: $("#hdLocationDisId").val(),
    WardId: $("#hdLocationWardId").val(),
    CustomerSex: getLocationCustomer().Sex,
  };
  $.ajax({
    url: urlRoot + "/Common/locationConfirm",
    type: "POST",
    xhrFields: {
      withCredentials:
        urlRoot.includes("thegioididong.com") ||
        urlRoot.includes("dienmayxanh.com")
          ? !1
          : !0,
    },
    data: {
      newcustomer: n,
      cateUrl:
        location.pathname.split("/").length > 2
          ? location.pathname.split("/")[1]
          : location.pathname.replace("/", ""),
      productUrl:
        location.pathname.split("/").length > 2
          ? location.pathname.split("/")[2]
          : "",
    },
    cache: !1,
    beforeSend: function () {
      $(".preloader").last().show();
    },
    success: function (n) {
      if (n != "" && n.status == 1) {
        if (
          typeof extParams != "undefined" &&
          ((isCallFastDeli &&
            parseInt(document.cateID) > 0 &&
            extParams !== undefined) ||
            extParams.indexOf("fast") >= 0)
        ) {
          getLocationCustomer().wardID > 0 && extParams.indexOf("fast") < 0
            ? extParams.push("fast")
            : extParams.splice(extParams.indexOf("fast"), 1);
          BuildLinkHash(!1, !1);
          linkRedirectHash.charAt(0) == "?" &&
            (linkRedirectHash = linkRedirectHash.replace(
              linkRedirectHash.charAt(0),
              "#",
            ));
          let n = location.pathname.replace("/", "") + linkRedirectHash;
          history.pushState({}, "", n);
          reloadPage();
        } else
          typeof searchQuery != "undefined" &&
            isCallFastDeliSearch &&
            searchQuery !== undefined &&
            searchQuery.CateID > 0 &&
            (location.hash =
              $(".extend-filter a.fastdeli").hasClass("active") == !1 &&
              getLocationCustomer().wardID > 0
                ? "#fastdeli&c=" + searchQuery.CateID
                : "");
        window.location.reload();
      } else
        n != "" && n.status == 2 && n.message !== null && n.message !== ""
          ? (location.href = location.origin + n.message)
          : $(".preloader").last().hide();
    },
    error: function () {
      $(".preloader").last().hide();
    },
  });
}
function locationShowFull() {
  $(".locationbox__area").removeClass("hide");
  $(".locationbox__showfull").css("color", "#000");
}
function stringToSlug(n) {
  return (
    (n = n.replace(
      /Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,
      "a",
    )),
    (n = n.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e")),
    (n = n.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i")),
    (n = n.replace(
      /Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,
      "o",
    )),
    (n = n.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u")),
    (n = n.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y")),
    (n = n.replace(/Ä‘/g, "d")),
    (n = n.replace(
      /Ă€|Ă|áº |áº¢|Ăƒ|Ă‚|áº¦|áº¤|áº¬|áº¨|áºª|Ä‚|áº°|áº®|áº¶|áº²|áº´/g,
      "A",
    )),
    (n = n.replace(/Ăˆ|Ă‰|áº¸|áºº|áº¼|Ă|á»€|áº¾|á»†|á»‚|á»„/g, "E")),
    (n = n.replace(/ĂŒ|Ă|á»|á»ˆ|Ä¨/g, "I")),
    (n = n.replace(
      /Ă’|Ă“|á»Œ|á»|Ă•|Ă”|á»’|á»|á»˜|á»”|á»–|Æ |á»œ|á»|á»¢|á»|á» /g,
      "O",
    )),
    (n = n.replace(/Ă™|Ă|á»¤|á»¦|Å¨|Æ¯|á»ª|á»¨|á»°|á»¬|á»®/g, "U")),
    (n = n.replace(/á»²|Ă|á»´|á»¶|á»¸/g, "Y")),
    (n = n.replace(/Ä/g, "D")),
    (n = n.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")),
    (n = n.replace(/\u02C6|\u0306|\u031B/g, "")),
    (n = n.replace(/ + /g, " ")),
    (n = n.trim()),
    n.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " ",
    )
  );
}
function slugify(n) {
  return n
    .toString()
    .toLowerCase()
    .replace(
      /Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,
      "a",
    )
    .replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e")
    .replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i")
    .replace(
      /Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,
      "o",
    )
    .replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u")
    .replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y")
    .replace(/Ä‘/g, "d")
    .replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|-|\"|\&|\#|\[|\]|~|$|_/g,
      "",
    )
    .replace(/\./g, "-")
    .replace(/ /g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
function locationChangeLocation() {
  $("#lc_detail").addClass("hide");
  $("#locationbox__showfull").removeClass("hide");
  locationShowFull();
}
function add3DotLoading(n) {
  $(n).append(
    '<div class="overlayloading"><span class="cswrap"><span class="csdot"></span><span class="csdot"></span><span class="csdot"></span></span></div>',
  );
}
function remove3DotLoading(n) {
  $(n).find(".overlayloading").remove();
}
function GetDataInfor() {
  var f, t, r, n, i, e, u;
  if (!isLoadData) {
    try {
      f = GetNamCookiesRunlive("DMX_Personal");
      let o = decodeURIComponent(getCookie(f));
      if (
        ((t = 3),
        (r = 0),
        o != null &&
          o !== "null" &&
          o !== undefined &&
          ((n = JSON.parse(o)),
          (t = n != null && n != undefined ? n.ProvinceId : 0),
          (r = n != null && n != undefined ? n.DistrictId : 0)),
        getCookie("utm_province") == "1" &&
          window.location.href.indexOf("?utm_province") == -1 &&
          $(".detail .box_right .box04__txt").html() !== undefined &&
          ((i = parseInt($(".detail .box_right .box04__txt").data("province"))),
          console.log("province header: " + t + " - province detail: " + i),
          t != i &&
            (window.location.href =
              window.location.origin +
              window.location.pathname +
              "?utm_province=" +
              i +
              "-" +
              t)),
        (e = GetNamCookiesRunlive("_mwgorhis")),
        (u = getCookie(e)),
        t == 3 && r == 0 && (u == undefined || u == ""))
      ) {
        $(".header__address span").html("Há»“ ChĂ­ Minh");
        return;
      }
    } catch (o) {
      $(".header__address span").html("Há»“ ChĂ­ Minh");
      return;
    }
    $.ajax({
      url: urlRoot + "/Common/GetDataInfor",
      type: "POST",
      cache: !1,
      xhrFields: {
        withCredentials:
          urlRoot.includes("thegioididong.com") ||
          urlRoot.includes("dienmayxanh.com")
            ? !1
            : !0,
      },
      beforeSend: function () {
        $(".header__address span").html("");
        isLoadData = !0;
      },
      success: function (n) {
        n != ""
          ? n.status == 0 || n.status == -1
            ? ($(".header__address span").html(n.fullAdress),
              (fullAddress = n.fullAdressPopup))
            : n.status == 1 &&
              ($(".header__address span").html(n.fullAdress),
              (fullAddress = n.fullAdressPopup),
              n.name != undefined &&
                n.name != null &&
                $(".header__history").html(
                  "ÄÆ¡n hĂ ng " + n.name.replace("(", "").replace(")", ""),
                ))
          : $(".header__address span").html("Há»“ ChĂ­ Minh");
      },
      error: function () {},
      complete: function () {
        IsLoadingPersonalize = !1;
        isLoadData = !1;
      },
    });
  }
}
function GetQuanatyCart() {
  $.ajax({
    url: urlRoot + "/cart/api/cart/info",
    type: "GET",
    cache: !1,
    success: function (n) {
      n != "" &&
        (n.items_count > 0
          ? ($(".header__cart").addClass("active"),
            $(".header__cart .cart-number").html(n.items_count),
            $(".header__cart .cart-number").addClass("has-cart"),
            $(".header__cart .icon-cart").html(n.items_count),
            $(".sticky-bar-cart").length > 0 &&
              $(".sticky-bar-cart").append(
                "<span class='sticky-bar-number'>" + n.items_count + "</span>",
              ))
          : ($(".header__cart").removeClass("active"),
            $(".header__cart .cart-number").html(""),
            $(".header__cart .cart-number").removeClass("has-cart"),
            $(".header__cart .icon-cart").html("")));
    },
    error: function () {},
  });
}
function UpDownSuggest(n) {
  var t = "#search-result ul.suggest li:not(.ttitle)",
    i;
  n == 40
    ? $(t + ".selected").length == 0
      ? $(t + ":first").addClass("selected")
      : $(t).last().hasClass("selected")
      ? ($(t + ".selected").removeClass("selected"),
        $(t + ":first").addClass("selected"))
      : ((i = $(t + ".selected").next()),
        i.hasClass("ttitle") && (i = i.next()),
        $(t + ".selected").removeClass("selected"),
        i.addClass("selected"))
    : n == 38 &&
      ($(t + ".selected").length == 0
        ? $(t + ":last").addClass("selected")
        : $(t).first().hasClass("selected")
        ? ($(t + ".selected").removeClass("selected"),
          $(t + ":last").addClass("selected"))
        : ((i = $(t + ".selected").prev()),
          i.hasClass("ttitle") && (i = i.prev()),
          $(t + ".selected").removeClass("selected"),
          i.addClass("selected")));
  return;
}
function callSuggestSearch(n) {
  if (!searching) {
    searching = !0;
    n.preventDefault();
    var r = $("#skw")
        .val()
        .replace(
          /:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|`|~|\+|=|_|-|\(|\)|{|}|\[|\]|\\|\|/gi,
          "",
        ),
      i = r.trim().toString().toLowerCase(),
      t = $("#search-result");
    if (i.length < MIN_SSKEYWORD_LENGTH) {
      t.html("");
      searching = !1;
      return;
    }
    i.length >= MIN_SSKEYWORD_LENGTH &&
      ($.ajax({
        url: urlRoot + "/Common/SuggestSearch",
        type: "GET",
        data: { keywords: i },
        cache: !1,
        beforeSend: function () {},
        success: function (n) {
          n != "" ? t.html(n) : t.html("");
          $("#search-result li").length > 0 ? t.show() : t.hide();
        },
        error: function () {},
      }),
      (searching = !1));
  }
}
function UpdateSearchKeywordHistory(n, t) {
  $.ajax({
    url: urlRoot + "/Common/UpdateSearchKeywordHistory",
    type: "POST",
    data: { keyword: n, url: t },
    cache: !1,
    success: function () {},
    error: function () {},
  });
}
function ViewSearchKeywordHistory() {
  isSearchHis = !1;
  var n = $("#search-result");
  $.ajax({
    url: urlRoot + "/Common/ViewSearchKeywordHistory",
    type: "POST",
    cache: !1,
    success: function (t) {
      t != "" ? n.html(t) : n.html("");
      $("#search-result li").length > 0
        ? (n.show(),
          $(".btnClosePop").click(function () {
            n.hide();
            isSearchHis = !0;
          }))
        : n.hide();
    },
    error: function () {},
  });
}
function getAutocomplete() {
  typeof AutoComplete == "undefined"
    ? include("/wwwroot/js/Global/autocomplete.js", function () {
        globalEvent.emit("autocomplete");
      })
    : globalEvent.emit("autocomplete");
}
function LoadPopupLocation() {
  IsLoadingPersonalize ||
    subID == 4 ||
    $.ajax({
      url: urlRoot + "/Common/LoadPopupLocation",
      data: { isMobile: isMobile },
      type: "POST",
      xhrFields: {
        withCredentials:
          urlRoot.includes("thegioididong.com") ||
          urlRoot.includes("dienmayxanh.com")
            ? !1
            : !0,
      },
      cache: !1,
      beforeSend: function () {
        IsLoadingPersonalize = !0;
      },
      success: function (n) {
        var t, i, r;
        n != "" &&
          ((isLoadPopupLocation = !1),
          $(".locationbox__overlay").remove(),
          $(".locationbox").remove(),
          $("#lc_pop--sugg").remove(),
          $("header").after(n),
          (t = $("#hdLocationProvinceId").val()),
          t > 0 && $("#province-box li").length > 0
            ? ($("#province-box li a").removeClass("active"),
              $("#province-box li")
                .find("a[data-value=" + t + "]")
                .addClass("active"))
            : $("#province-box li").length == 0 &&
              ($("#province-box").hide(),
              $("#boxprovProvince").addClass("disabled")),
          (i = $("#hdLocationDisId").val()),
          i > 0 && $("#district-box-poup li").length > 0
            ? ($("#district-box-poup li a").removeClass("active"),
              $("#district-box-poup li")
                .find("a[data-dis=" + i + "]")
                .addClass("active"))
            : $("#district-box-poup li").length == 0 &&
              ($("#district-box-poup").hide(),
              $("#boxprovDistrict").addClass("disabled")),
          (r = $("#hdLocationWardId").val()),
          r > 0 && $("#ward-box li").length > 0
            ? ($("#ward-box li a").removeClass("active"),
              $("#ward-box li")
                .find("a[data-value=" + r + "]")
                .addClass("active"))
            : $("#ward-box li").length == 0 &&
              ($("#ward-box").hide(), $("#boxprovWard").addClass("disabled")),
          $(".topinstall .headinstall .headinfo .province").length > 0 &&
            $(".topinstall .headinstall .headinfo .province").html(
              $("#h-provincename").text(),
            ),
          $(".locationbox__overlay").show(),
          $(".locationbox").show(),
          $("#lc_pop--sugg").remove(),
          $("html,body").toggleClass("over-flow"));
      },
      error: function () {},
      complete: function () {
        IsLoadingPersonalize = !1;
        CheckLocationSuggest();
      },
    });
}
function LoadPopupLocationV2() {
  IsLoadingPersonalize ||
    subID == 4 ||
    $.ajax({
      url: urlRoot + "/Common/LoadPopupLocationV2",
      data: { isMobile: isMobile },
      type: "POST",
      xhrFields: {
        withCredentials:
          urlRoot.includes("thegioididong.com") ||
          urlRoot.includes("dienmayxanh.com")
            ? !1
            : !0,
      },
      cache: !1,
      beforeSend: function () {
        IsLoadingPersonalize = !0;
      },
      success: function (n) {
        var t, i, r;
        n != "" &&
          ((isLoadPopupLocation = !1),
          CheckLocationSuggest(),
          $(".locationbox__overlay").remove(),
          $(".locationbox-v2").remove(),
          $("#lc_pop--sugg").remove(),
          $("header").after(n),
          (t = $("#hdLocationProvinceId").val()),
          t > 0 &&
            $("#lst-prov li").length > 0 &&
            ($("#lst-prov li a").removeClass("active"),
            $("#lst-prov li")
              .find("a[data-value=" + t + "]")
              .addClass("active")),
          (i = $("#hdLocationDisId").val()),
          i > 0 &&
            $("#lst-dis li").length > 0 &&
            ($("#lst-dis li a").removeClass("active"),
            $("#lst-dis li")
              .find("a[data-dis=" + i + "]")
              .addClass("active")),
          (r = $("#hdLocationWardId").val()),
          r > 0 &&
            $("#lst-ward li").length > 0 &&
            ($("#lst-ward li a").removeClass("active"),
            $("#lst-ward li")
              .find("a[data-value=" + r + "]")
              .addClass("active")),
          $(".topinstall .headinstall .headinfo .province").length > 0 &&
            $(".topinstall .headinstall .headinfo .province").html(
              $("#h-provincename").text(),
            ),
          callFirstLoadPopup(),
          backLocation(!0),
          $(".locationbox__overlay").show(),
          $(".locationbox-v2").show(),
          $("#lc_pop--sugg").remove(),
          $("html,body").toggleClass("over-flow"));
      },
      error: function () {},
      complete: function () {
        IsLoadingPersonalize = !1;
      },
    });
}
function OverrideRootUrl(n) {
  n != "" &&
    (location.href.includes("dmx.com")
      ? (urlRoot = "http://newstaging.dmx.com")
      : location.href.includes("tgdd2015.com") &&
        (urlRoot = "http://newstaging.tgdd2015.com"));
}
function LogOutHistory() {
  $.ajax({
    url: urlRoot + "/lich-su-mua-hang/home/LogoutForNewWeb",
    type: "GET",
    cache: !1,
    success: function (n) {
      n != "" &&
        n.status == 1 &&
        $(".txt-history").html("Lá»‹ch sá»­ mua hĂ ng");
    },
    error: function () {},
  });
}
function getCookie(n) {
  var i, t;
  try {
    var r = n + "=",
      f = decodeURIComponent(document.cookie),
      u = f.split(";");
    for (i = 0; i < u.length; i++) {
      for (t = u[i]; t.charAt(0) == " "; ) t = t.substring(1);
      if (t.indexOf(r) == 0) return t.substring(r.length, t.length);
    }
    return "";
  } catch (e) {
    return "";
  }
}
function setCookie(n, t, i) {
  var r = new Date(),
    u;
  r.setTime(r.getTime() + i * 864e5);
  u = "expires=" + r.toUTCString();
  document.cookie = n + "=" + t + ";" + u + ";path=/";
}
function GetNamCookiesRunlive(n) {
  return isRunLive ? n : n + "_Staging";
}
function ConvertFromDataToQueryString(n) {
  var t = new FormData($(n).get(0));
  return "?" + new URLSearchParams(t).toString();
}
function CheckLocationSuggest() {
  if (!IsLoadingSuggest) {
    IsLoadingSuggest = !0;
    var n = GetNamCookiesRunlive("ShowLocationSuggest"),
      t = getCookie(n);
    t == undefined || t == ""
      ? (setCookie(n, "hide", 365), $("#lc_pop--sugg").removeClass("hide"))
      : $("#lc_pop--sugg").remove();
    return;
  }
}
function SkipLocation() {
  $("#lc_pop--sugg").remove();
}
function LoadViewedHistory(n = "home") {
  var t, f;
  if (
    container.length == 0 ||
    ((t = localStorage.getItem(keyViewedHistory)), $.isEmptyObject(t))
  )
    return !1;
  var u = JSON.parse(t),
    i = u.map((n) => n.proId),
    r = u.map((n) => n.cateId);
  r = Array.from(new Set(r));
  i != null &&
    i.length > 0 &&
    ((f = { productIds: i, categoryIds: r, Viewname: n }),
    $.ajax({
      url: "/Home/GetViewedHistory",
      method: "POST",
      data: f,
      success: function (n) {
        container.html(n);
        container
          .find(".owl-carousel")
          .owlCarousel({
            nav: !0,
            items: 5,
            slideBy: "page",
            rewind: !0,
            smartSpeed: 100,
          });
      },
    }));
}
function LoadViewedHistoryByCate(n, t) {
  var i, f;
  if (
    container.length == 0 ||
    ((i = localStorage.getItem(keyViewedHistory)),
    $.isEmptyObject(i) || n.proId == undefined || n.proId == 0)
  )
    return !1;
  var e = JSON.parse(i),
    u = e.filter((t) => t.proId != n.proId),
    r = u.map((n) => n.proId),
    o = u.map((n) => n.cateId);
  r != null &&
    r.length > 0 &&
    ((f = { productIds: r, categoryIds: o, Viewname: t }),
    $.ajax({
      url: "/Home/GetViewedHistory",
      method: "POST",
      data: f,
      success: function (n) {
        container.html(n);
        container
          .find(".p-slide .owl-carousel")
          .owlCarousel({ nav: !0, items: 5, slideBy: 5, dots: !1 });
      },
    }));
}
function SetViewedHistory(n, t) {
  var r, i, u;
  if ($.isEmptyObject(n) || n.proId == undefined || n.proId == 0) return !1;
  r = localStorage.getItem(keyViewedHistory);
  $.isEmptyObject(r) && (r = "[]");
  i = JSON.parse(r);
  i != null &&
    ((u = i.find((t) => t.proId == n.proId)),
    u != null && i.splice(i.indexOf(u), 1));
  i.unshift(n);
  i.length > t && i.pop();
  localStorage.setItem(keyViewedHistory, JSON.stringify(i));
}
function DeleteViewedHistory() {
  localStorage.removeItem(keyViewedHistory);
  container.html("");
}
function GetProductBHX() {
  setTimeout(function () {
    $.ajax({
      url: urlRoot + "/Common/GetProductBHX",
      type: "POST",
      cache: !1,
      beforeSend: function () {},
      success: function (n) {
        n != "" && n.status == 1
          ? ($(".zone-bhx").html(n.message),
            $(".footer").css("margin-top", 10),
            $("#form-zone-bhx button").click(function (n) {
              n.preventDefault();
              pdbxbhxapi.sendCoupon();
            }))
          : $(".zone-bhx").remove();
      },
      error: function () {},
    });
  }, 15e3);
}
function ShowProductBHX() {
  setTimeout(function () {
    $.ajax({
      url: urlRoot + "/Common/ShowProductBHX",
      type: "POST",
      cache: !1,
      beforeSend: function () {},
      success: function (n) {
        n != "" && n.status == 1
          ? ($("#showPromoteBHX").html(n.message),
            $(".footer").css("margin-top", 10),
            $(".prmotebanner-bhx-footer").owlCarousel({
              items: 5,
              slideSpeed: 5e3,
              nav: !0,
              dots: !1,
              slideBy: 5,
              responsiveRefreshRate: 200,
            }),
            CheckBoxBHX(),
            $("#form-zone-bhx button").click(function (n) {
              n.preventDefault();
              pdbxbhxapi.sendCoupon();
            }))
          : $(".zone-bhx").remove();
      },
      error: function () {},
    });
  }, 15e3);
}
function HtmlPromoteProduct() {
  setTimeout(function () {
    $.ajax({
      url: urlRoot + "/Common/HtmlPromoteProduct",
      type: "POST",
      cache: !1,
      beforeSend: function () {},
      success: function (n) {
        n != ""
          ? ($(".zone-bhx").html(n),
            $(".footer").css("margin-top", 10),
            location.href.includes("kinh-nghiem-hay") && calllazyload())
          : $(".zone-bhx").remove();
      },
      error: function () {},
    });
  }, 2e3);
}
function CloseBHX() {
  $(".zone-bhx").remove();
  $.ajax({
    url: urlRoot + "/Common/AddCookiesBHX",
    type: "POST",
    cache: !1,
    beforeSend: function () {},
    success: function () {},
    error: function () {},
  });
}
function FeedbackGlobal() {
  hasSusses = !1;
  $.ajax({
    url: urlRoot + "/Common/FeedbackGlobal",
    type: "POST",
    cache: !1,
    beforeSend: function () {},
    success: function (n) {
      var t, i;
      n != "" &&
        ($("#global_form").html(n),
        (t = $(".feedback_global #global_form .check-option>div")),
        t.click(function () {
          $(this).find("i").hasClass("active") ||
            (t.find("i").removeClass("active"),
            $(this).find("i").addClass("active"),
            $("#Gender").val($(this).data("value")));
        }),
        (i = $(".feedback_global #global_form button")),
        $(".form_more").click(function () {
          $(this).hide();
          $(this).next().removeClass("hide");
        }),
        i.click(function (n) {
          var t, i;
          if ((n.preventDefault(), !Summiting)) {
            if ($("#Description").val().trim() == "") {
              alert("Vui lĂ²ng nháº­p ná»™i dung gĂ³p Ă½");
              return;
            }
            if (
              ((t = $("#PhoneNumber").val().trim()),
              t != "" &&
                ((i = /((09|03|07|08|05)+([0-9]{8})\b)/g), i.test(t) == !1))
            ) {
              alert(
                "Sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n khĂ´ng Ä‘Ăºng Ä‘á»‹nh dáº¡ng!",
              );
              return;
            }
            $("#NewsLink").val(location.href);
            $.ajax({
              url: urlRoot + "/Common/sendFeedbackGlobal",
              type: "POST",
              data: $("#global_form").serializeArray(),
              cache: !1,
              beforeSend: function () {
                Summiting = !0;
                $("#dldingtext").show();
              },
              success: function (n) {
                Summiting = !1;
                $("#dldingtext").hide();
                n.status > 0 &&
                  ((hasSusses = !0),
                  $("#global_form").addClass("form_success"),
                  $("#global_form").html(
                    "<a href='javascript:OpenFeedbackGlobal()'>ÄĂ³ng</a><span>ChĂ¢n thĂ nh cáº£m Æ¡n Ă½ kiáº¿n Ä‘Ă³ng gĂ³p cá»§a quĂ½ khĂ¡ch!<span>",
                  ));
              },
              error: function () {
                $("#dldingtext").hide();
              },
            });
          }
        }));
    },
    error: function () {},
  });
}
function OpenFeedbackGlobal() {
  hasSusses && FeedbackGlobal();
  $("#global_form").removeClass("form_success");
  $(".locationbox__overlay").toggle();
  $("#global_form").toggle();
  $("html,body").toggleClass("over-flow");
}
function CheckButtonCompareCategory() {
  var r = getCookie("ck_idcompare"),
    i,
    u,
    f,
    n,
    t,
    e,
    o,
    s;
  if (
    r !== "" &&
    r !== null &&
    r != undefined &&
    ((i = r.split(",")), i != null && i.length > 0)
  )
    for (u = 0; u < i.length; u++) {
      if (
        ((f = i[u]),
        (n = $(".listproduct *[data-id=" + f + "]").first()),
        n != undefined &&
          n.length > 0 &&
          n.find("a.item-ss") != undefined &&
          n.find("a.item-ss").hasClass("active") == !1 &&
          n
            .find("a.item-ss")
            .addClass("active")
            .html("<i></i> ÄĂ£ thĂªm so sĂ¡nh"),
        (t = $(".compare-popup .pro-compare *[data-id=" + f + "]")),
        t != undefined && t.length > 0)
      )
        for (e = 0; e < t.length; e++)
          (o = $(t[e])),
            o.find("a.item-ss") != undefined &&
              o.find("a.item-ss").hasClass("active") == !1 &&
              o
                .find("a.item-ss")
                .addClass("active")
                .html("<i></i> ÄĂ£ thĂªm so sĂ¡nh");
      s = $(".box02 *[data-id=" + f + "]").first();
      s != undefined &&
        s.length > 0 &&
        t.hasClass("active") == !1 &&
        s
          .addClass("active")
          .html("<i class='icondetail-sosanh'></i> ÄĂ£ thĂªm so sĂ¡nh");
    }
}
function randomBannerTop() {
  var s, f, t, e, h, i;
  if (!isRandomBannerTop) {
    var c = document.querySelector(".banner-media"),
      r = document.querySelector(".media-slider"),
      o = window.location.pathname,
      u = sessionStorage.getItem(bannerTopIndexKey),
      n = parseInt(u);
    if (
      (o != "/" && u == null && randomizeChild(r),
      u != null &&
        !isNaN(n) &&
        (n + 1 >= document.querySelectorAll(".media-slider .item").length
          ? (n = 0)
          : n++,
        n > 0))
    ) {
      for (
        s = document.querySelectorAll(".media-slider .item"),
          f = document.createDocumentFragment(),
          t = 0;
        t < n;
        t++
      )
        f.appendChild(s[t]);
      r.append(f);
    }
    document.querySelectorAll(".media-slider .item").length > 1 &&
      ((e = document.querySelector(".media-slider .item")),
      (h = document
        .querySelector(".media-slider .item a")
        .getAttribute("href")),
      o == h && (e.remove(), r.appendChild(e)));
    i = document.querySelector(".media-slider .item");
    c.style.backgroundColor = i.dataset.backgroundColor;
    i.classList.add("visible");
    n = i.dataset.order;
    sessionStorage.setItem(bannerTopIndexKey, n != null ? n - 1 : 0);
    isRandomBannerTop = !0;
  }
}
function randomizeChild(n) {
  const r = n.cloneNode(!0),
    t = r.children,
    i = document.createDocumentFragment();
  while (t.length > 0) i.appendChild(t[Math.floor(Math.random() * t.length)]);
  n.innerHTML = "";
  n.appendChild(i);
}
function initCarousel() {
  var i = document.querySelector(".banner-media"),
    r = document.querySelector(".media-slider .prev"),
    u = document.querySelector(".media-slider .next"),
    n = 0,
    t = document.querySelectorAll(".media-slider .item"),
    f = t.length;
  lazyLoadImg(t[n].querySelector("a img"));
  r != null &&
    r.addEventListener("click", function () {
      t[n].classList.remove("visible");
      n--;
      n < 0 && (n = f - 1);
      t[n].classList.add("visible");
      i.style.backgroundColor = t[n].dataset.backgroundColor;
      lazyLoadImg(t[n].querySelector("a img"));
    });
  u != null &&
    u.addEventListener("click", function () {
      t[n].classList.remove("visible");
      n++;
      n > f - 1 && (n = 0);
      t[n].classList.add("visible");
      i.style.backgroundColor = t[n].dataset.backgroundColor;
      lazyLoadImg(t[n].querySelector("a img"));
    });
}
function lazyLoadImg(n) {
  n.classList.contains("lazyload") &&
    (n.classList.remove("lazyload"),
    n.classList.add("lazyloaded"),
    n.setAttribute("src", n.getAttribute("data-src")));
}
function closenotify() {
  $(".locationbox__popup_notify").remove();
  $.ajax({
    url: urlRoot + "/Common/AddCookiesCovid",
    type: "POST",
    cache: !1,
    beforeSend: function () {},
    success: function () {},
    error: function () {},
  });
}
function changePoupProvinceV2(n, t, i = 0) {
  $("#lst-prov a").removeClass("active");
  $("#lst-dis a").removeClass("active");
  $("#hdLocationDisId").val(0);
  $("#hdLocationWardId").val(0);
  $.ajax({
    url: urlRoot + "/Store/GetAllDistrictsByProvinceV2",
    type: "POST",
    data: { provinceId: n, viewName: "ListDistrict" },
    cache: !1,
    beforeSend: function () {
      $("#dldingtext").show();
    },
    success: function (r) {
      r != "" &&
        ($(t).addClass("active"),
        $("#hdLocationProvinceId").val(n),
        $("#lst-prov").addClass("hide").hide(),
        $("#lst-dis").html(r).removeClass("hide").show(),
        callTitleLocation(),
        i > 0 &&
          $("#lst-dis li")
            .find("a[data-dis=" + i + "]")
            .click());
      i > 0 == !1 && $("#dldingtext").hide();
    },
    error: function () {
      $("#dldingtext").hide();
    },
  });
}
function changePoupDistrictV2(n, t, i) {
  $("#lst-dis a").removeClass("active");
  $("#hdLocationWardId").val(0);
  $(".choose-province").addClass("hide").hide();
  $.ajax({
    url: urlRoot + "/Store/GetAllWardsByProvinceV2",
    type: "POST",
    data: { provinceId: n, districtId: t, viewName: "ListWard" },
    cache: !1,
    beforeSend: function () {
      $("#dldingtext").show();
    },
    success: function (n) {
      n != "" &&
        ($(i).addClass("active"),
        $("#lst-dis").addClass("hide").hide(),
        $("#lst-ward").html(n).removeClass("hide").show(),
        $("#hdLocationDisId").val(t),
        callTitleLocation());
      $("#dldingtext").hide();
    },
    error: function () {
      $("#dldingtext").hide();
    },
  });
}
function changePoupWardV2(n, t) {
  if (n == parseInt($("#hdLocationWardId").val())) return OpenLocation(), !1;
  $("#lst-ward li a").removeClass("active");
  $("#hdLocationWardId").val(n);
  $(t).addClass("active");
  locationConfirm();
  backLocation(!0);
}
function callTitleLocation() {
  $(".top-location").addClass("hide").hide();
  $(".location-title").removeClass("hide").show();
  $(".choose-province").addClass("hide").hide();
  checkingBackIcon();
  var n = "",
    t = "",
    i = "";
  $("#lst-dis li a").length > 0 &&
    $("#lst-dis").is(":visible") &&
    ((t = "Quáº­n, huyá»‡n táº¡i "),
    (n = $("#lst-prov li a.active").text().trimStart().trimEnd()));
  $("#lst-ward li a").length > 0 &&
    $("#lst-ward").is(":visible") &&
    ((i = "PhÆ°á»ng xĂ£ táº¡i "),
    (t = $("#lst-dis li a.active").text().trimStart().trimEnd() + ", "),
    (n = $("#lst-prov li a.active").text().trimStart().trimEnd()));
  $(".province-name-default").text(n);
  $(".district-name-default").text(t);
  $(".ward-name-default").text(i);
}
function backLocation(n = false) {
  $("#lst-ward").addClass("hide").hide();
  $("#lst-dis").hasClass("hide") && n == !1
    ? $("#lst-dis").removeClass("hide").show()
    : ($("#lst-dis").addClass("hide").hide(),
      $("#lst-prov").removeClass("hide").show(),
      resetPopupLocation());
  checkingBackIcon();
  $("#lst-dis").is(":visible") && n == !1 && callTitleLocation();
}
function checkingBackIcon() {
  !$("#lst-prov").hasClass("hide") || $("#lst-prov").is(":visible")
    ? $("a.back-ic").hide()
    : $("a.back-ic").show();
}
function getLocationCustomer() {
  var s, h, n;
  let t = 0,
    i = 0,
    r = 0,
    u = -1,
    f = "",
    e = "",
    o = "";
  try {
    let c = decodeURIComponent(getCookie("DMX_Personal"));
    s =
      window.location.hostname.indexOf("newstaging") > -1 ||
      window.location.hostname.indexOf("localhost") > -1;
    h = window.location.hostname.indexOf("newsbeta") > -1;
    s && (c = decodeURIComponent(getCookie("DMX_Personal_Staging")));
    h && (c = decodeURIComponent(getCookie("DMX_Personal_Beta")));
    c != null &&
      c !== "null" &&
      c !== undefined &&
      ((n = JSON.parse(c)),
      (t = n != null && n != undefined ? n.ProvinceId : 0),
      (f = n != null && n != undefined ? n.ProvinceName : ""),
      (i = n != null && n != undefined ? n.DistrictId : 0),
      (e =
        n != null && n != undefined
          ? n.DistrictType + " " + n.DistrictName
          : ""),
      (r = n != null && n != undefined ? n.WardId : 0),
      (o = n != null && n != undefined ? n.WardType + " " + n.WardName : ""),
      (u =
        n != null && n != undefined && n.CustomerSex >= 0
          ? n.CustomerSex
          : -1));
  } catch (c) {
    t = 0;
    i = 0;
    r = 0;
    u = -1;
  }
  return {
    provinceID: t > 0 ? t : 0,
    provinceName: f,
    districtID: i > 0 ? i : 0,
    districtName: e,
    wardID: r > 0 ? r : 0,
    wardName: o,
    Sex: u >= 0 ? u : -1,
  };
}
function clearPopupLocation(n = false) {
  if (
    ($("#hdLocationDisId").val(0),
    $("#hdLocationWardId").val(0),
    n &&
      $("#hdLocationProvinceId").val() !==
        getLocationCustomer().provinceID.toString())
  ) {
    locationConfirm();
    return;
  }
  backLocation(n);
}
function suggestLocation(n) {
  if (!searching) {
    searching = !0;
    n.preventDefault();
    var r = $("#locationSearch")
        .val()
        .replace(
          /:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|`|~|\+|=|_|-|\(|\)|{|}|\[|\]|\\|\|/gi,
          "",
        ),
      i = r.trim().toString().toLowerCase(),
      t = $("#suggest-location");
    if (i.length < MIN_SSKEYWORD_LENGTH) {
      t.html("");
      t.hide();
      $(".clear-searchbox").hide();
      searching = !1;
      return;
    }
    i.length >= MIN_SSKEYWORD_LENGTH &&
      ($.ajax({
        url: urlRoot + "/Store/SearchSuggestWardByKeyword",
        type: "GET",
        data: { keywords: i },
        cache: !1,
        beforeSend: function () {
          $(".clear-searchbox").show();
        },
        success: function (n) {
          n != "" ? t.html(n) : t.html("");
          t.find("li").length > 0 ? t.show() : t.hide();
        },
        error: function () {},
      }),
      (searching = !1));
  }
}
function gotoSuggestLocation(n) {
  var r = $(n);
  let t = r.parent("li").data("prov"),
    i = r.parent("li").data("dis"),
    u = r.parent("li").data("ward");
  u > 0 && i > 0
    ? ($("#hdLocationProvinceId").val(t),
      $("#hdLocationDisId").val(i),
      $("#hdLocationWardId").val(u),
      locationConfirm())
    : i > 0 && t > 0
    ? changePoupProvinceV2(
        t,
        $("#lst-prov ul").find("a[data-value=" + t + "]"),
        i,
      )
    : t > 0 &&
      (backLocation(!0),
      changePoupProvinceV2(
        t,
        $("#lst-prov ul").find("a[data-value=" + t + "]"),
      ));
  $("#suggest-location").hide();
  $("input[name=locationSearch]").val("");
  $(".clear-searchbox").hide();
  return;
}
function resetPopupLocation() {
  $(".location-title").addClass("hide").hide();
  $(".top-location").removeClass("hide").show();
  $(".choose-province").removeClass("hide").show();
  getLocationCustomer().wardID > 0
    ? ($(".top-location .default-title").addClass("hide").hide(),
      $(".top-location .full-location").removeClass("hide").show())
    : ($(".top-location .default-title").removeClass("hide").show(),
      $(".top-location .full-location").addClass("hide").hide());
}
function callFirstLoadPopup() {
  getLocationCustomer().wardID > 0
    ? ($("p.default-title").addClass("hide").hide(),
      $("p.full-location").removeClass("hide").show(),
      (fullAddress == "" || fullAddress == undefined) &&
        (fullAddress =
          $("#lst-prov li a.active").length > 0
            ? $("#lst-prov li a.active").text()
            : "Há»“ ChĂ­ Minh"),
      $(".fulladdress-v2").html(fullAddress))
    : ($("p.default-title").removeClass("hide").show(),
      $("p.full-location").addClass("hide").hide());
}
function clearSearchBox() {
  $("input[name=locationSearch]").val("");
  $(".clear-searchbox").hide();
  var n = $.Event("keypress", { which: 13 });
  suggestLocation(n);
}
function CheckBoxBHX() {
  $("#form-zone-bhx .productbox-bhxapi-item").length >= 5 &&
    $("#form-zone-bhx").removeClass("hide");
}
function getRemindGiftVoucherCookieName() {
  var n = "CartRemindVoucherCookie";
  return isBeta ? (n += "_Beta") : isStaging && (n += "_Staging"), n;
}
function ScrollBar() {
  return !1;
}
function AddColorBox(n, t, i) {
  if (typeof i == "object") i.status == -1 && alert(i.error);
  else {
    if (i == null || i == "") return;
    $(n).length == 0
      ? ($("body").addClass("hidden").append(i),
        $(t).colorbox({
          inline: !0,
          closeButton: !1,
          maxHeight: "90%",
          fixed: !0,
          onClosed: function () {
            $(n).remove();
            $("body").removeClass("hidden");
            $("section, footer").removeClass("fixbody");
          },
        }),
        $(t).trigger("click").remove())
      : ($(n).replaceWith(i),
        $.colorbox.resize({ width: $(n).width() + "px" }),
        $(t).remove());
  }
}
function PopupHTML(n) {
  flagPopupHTML ||
    ((flagPopupHTML = !0),
    $("#dldingtext").show(),
    $.ajax({
      url: "/Common/PopupHTML",
      type: "POST",
      data: { htmlId: n },
      success: function (n) {
        $("#dldingtext").hide();
        flagPopupHTML = !1;
        AddColorBox("#popupbox", "#lpopup", n);
        ScrollBar();
      },
    }));
}
function GetLivestreamHeader() {
  $.ajax({
    url: "/Livestream/GetLivestreamHeader",
    success: function (n) {
      n !== undefined &&
        n !== null &&
        n.code == 200 &&
        $(".header-top-bar").html(n.data);
    },
  });
}
function suggestSearch(n) {
  var i, t, r, u;
  if (
    (n.preventDefault(),
    (i = "#search-result"),
    (t = $("#skw").val()),
    $(".header__search .dropdownsearch").length > 0
      ? ((r = $(".header__search .dropdownsearch a").data("id")),
        r == 1 &&
          (t = t
            .toString()
            .replace(
              /:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|`|~|\+|=|\(|\)|{|}|\[|\]|\\|\|/gi,
              "",
            )))
      : (t = t
          .toString()
          .replace(
            /:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|`|~|\+|=|_|-|\(|\)|{|}|\[|\]|\\|\|/gi,
            "",
          )),
    (u = t.trim().toLowerCase()),
    u.length < MIN_SSKEYWORD_LENGTH)
  ) {
    $(i).html("");
    return;
  }
  if (n.which == 40 || n.which == 38) {
    UpDownSuggest(n.which);
    return;
  }
  if (n.which == 13) {
    if ($("#search-result ul.suggest li.selected").length > 0) {
      location.href = $("#search-result ul.suggest li.selected a").attr("href");
      return;
    }
  } else
    n.type == "submit"
      ? goToSearchPage(t)
      : searching ||
        isHasSub ||
        isUsedProduct ||
        (clearTimeout(timmer),
        (timmer = setTimeout(function () {
          callSuggestSearch(n);
        }, 600)));
}
function goToSearchPage(n, t) {
  var i,
    e = n
      .toString()
      .replace(
        /:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|`|~|\+|=|_|-|\(|\)|{|}|\[|\]|\\|\|/gi,
        "",
      ),
    f = e.trim(),
    r = encodeURIComponent(f)
      .replace(/\./g, "+")
      .replace(/%20/gi, "+")
      .replace(/ /g, "+"),
    u;
  t !== undefined && t > 0 && (r = r + "&cate=" + t);
  $(".header__search .dropdownsearch").length > 0
    ? ((u = $(".header__search .dropdownsearch a").data("id")),
      u == 1
        ? (i = "/game-app/tim-kiem?key=" + r)
        : u == 2
        ? (i = "/tim-kiem?key=" + r)
        : u == 3 && (i = "/tin-tuc/tim-kiem?key=" + r))
    : isUsedProduct
    ? (i = usedProductPath + "/search?key=" + r)
    : location.href.indexOf(".com/may-doi-tra") > 0
    ? (i = "/may-doi-tra/tim-kiem?key=" + r)
    : location.href.indexOf(".com/tin-tuc") > 0
    ? (i = "/tin-tuc/tim-kiem?key=" + r)
    : location.href.indexOf(".com/game-app") > 0
    ? (i = "/game-app/tim-kiem?key=" + r)
    : ((i = "/tim-kiem?key=" + r), UpdateSearchKeywordHistory(f, urlRoot + i));
  location.href = i;
}
var ConditionOperator,
  AutoComplete,
  isInitCpKids,
  isSendingCpKids,
  isSendingFcp,
  laodBHX,
  loadBHX,
  isLoadPopupLocation,
  IsLoadingPersonalize,
  IsLoadingSuggest,
  keyViewedHistory,
  container,
  Summiting,
  bannerTopIndexKey,
  isRandomBannerTop,
  pdbxbhxapi,
  onloadCallbackcaptcha_1318718959,
  flagPopupHTML;
!(function (n, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n.document
        ? t(n, !0)
        : function (n) {
            if (!n.document)
              throw new Error("jQuery requires a window with a document");
            return t(n);
          })
    : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
  "use strict";
  function br(n, t, i) {
    var r,
      e,
      u = (i = i || f).createElement("script");
    if (((u.text = n), t))
      for (r in oe)
        (e = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          u.setAttribute(r, e);
    i.head.appendChild(u).parentNode.removeChild(u);
  }
  function ut(n) {
    return null == n
      ? n + ""
      : "object" == typeof n || "function" == typeof n
      ? ri[pr.call(n)] || "object"
      : typeof n;
  }
  function pi(n) {
    var t = !!n && "length" in n && n.length,
      i = ut(n);
    return (
      !u(n) &&
      !rt(n) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in n))
    );
  }
  function c(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
  }
  function bi(n, t, r) {
    return u(t)
      ? i.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        })
      : t.nodeType
      ? i.grep(n, function (n) {
          return (n === t) !== r;
        })
      : "string" != typeof t
      ? i.grep(n, function (n) {
          return -1 < ii.call(t, n) !== r;
        })
      : i.filter(t, n, r);
  }
  function uu(n, t) {
    while ((n = n[t]) && 1 !== n.nodeType);
    return n;
  }
  function et(n) {
    return n;
  }
  function fi(n) {
    throw n;
  }
  function fu(n, t, i, r) {
    var f;
    try {
      n && u((f = n.promise))
        ? f.call(n).done(t).fail(i)
        : n && u((f = n.then))
        ? f.call(n, t, i)
        : t.apply(void 0, [n].slice(r));
    } catch (n) {
      i.apply(void 0, [n]);
    }
  }
  function oi() {
    f.removeEventListener("DOMContentLoaded", oi);
    n.removeEventListener("load", oi);
    i.ready();
  }
  function ce(n, t) {
    return t.toUpperCase();
  }
  function y(n) {
    return n.replace(se, "ms-").replace(he, ce);
  }
  function bt() {
    this.expando = i.expando + bt.uid++;
  }
  function ou(n, t, i) {
    var u, r;
    if (void 0 === i && 1 === n.nodeType)
      if (
        ((u = "data-" + t.replace(ae, "-$&").toLowerCase()),
        "string" == typeof (i = n.getAttribute(u)))
      ) {
        try {
          i =
            "true" === (r = i) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : le.test(r)
                ? JSON.parse(r)
                : r));
        } catch (n) {}
        o.set(n, t, i);
      } else i = void 0;
    return i;
  }
  function hu(n, t, r, u) {
    var s,
      h,
      c = 20,
      l = u
        ? function () {
            return u.cur();
          }
        : function () {
            return i.css(n, t, "");
          },
      o = l(),
      e = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
      f =
        n.nodeType &&
        (i.cssNumber[t] || ("px" !== e && +o)) &&
        kt.exec(i.css(n, t));
    if (f && f[3] !== e) {
      for (o /= 2, e = e || f[3], f = +o || 1; c--; )
        i.style(n, t, f + e),
          (1 - h) * (1 - (h = l() / o || 0.5)) <= 0 && (c = 0),
          (f /= h);
      f *= 2;
      i.style(n, t, f + e);
      r = r || [];
    }
    return (
      r &&
        ((f = +f || +o || 0),
        (s = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
        u && ((u.unit = e), (u.start = f), (u.end = s))),
      s
    );
  }
  function ht(n, t) {
    for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)
      (f = n[u]).style &&
        ((h = f.style.display),
        t
          ? ("none" === h &&
              ((o[u] = r.get(f, "display") || null),
              o[u] || (f.style.display = "")),
            "" === f.style.display &&
              dt(f) &&
              (o[u] =
                ((e = c = s = void 0),
                (c = (a = f).ownerDocument),
                (l = a.nodeName),
                (e = ki[l]) ||
                  ((s = c.body.appendChild(c.createElement(l))),
                  (e = i.css(s, "display")),
                  s.parentNode.removeChild(s),
                  "none" === e && (e = "block"),
                  (ki[l] = e)))))
          : "none" !== h && ((o[u] = "none"), r.set(f, "display", h)));
    for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
    return n;
  }
  function s(n, t) {
    var r;
    return (
      (r =
        "undefined" != typeof n.getElementsByTagName
          ? n.getElementsByTagName(t || "*")
          : "undefined" != typeof n.querySelectorAll
          ? n.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && c(n, t)) ? i.merge([n], r) : r
    );
  }
  function di(n, t) {
    for (var i = 0, u = n.length; i < u; i++)
      r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
  }
  function vu(n, t, r, u, f) {
    for (
      var e,
        o,
        p,
        a,
        w,
        v,
        c = t.createDocumentFragment(),
        y = [],
        l = 0,
        b = n.length;
      l < b;
      l++
    )
      if ((e = n[l]) || 0 === e)
        if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
        else if (au.test(e)) {
          for (
            o = o || c.appendChild(t.createElement("div")),
              p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
              a = h[p] || h._default,
              o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
              v = a[0];
            v--;

          )
            o = o.lastChild;
          i.merge(y, o.childNodes);
          (o = c.firstChild).textContent = "";
        } else y.push(t.createTextNode(e));
    for (c.textContent = "", l = 0; (e = y[l++]); )
      if (u && -1 < i.inArray(e, u)) f && f.push(e);
      else if (
        ((w = st(e)), (o = s(c.appendChild(e), "script")), w && di(o), r)
      )
        for (v = 0; (e = o[v++]); ) lu.test(e.type || "") && r.push(e);
    return c;
  }
  function ct() {
    return !0;
  }
  function lt() {
    return !1;
  }
  function we(n, t) {
    return (
      (n ===
        (function () {
          try {
            return f.activeElement;
          } catch (n) {}
        })()) ==
      ("focus" === t)
    );
  }
  function gi(n, t, r, u, f, e) {
    var o, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof r && ((u = u || r), (r = void 0)), t))
        gi(n, s, r, u, t[s], e);
      return n;
    }
    if (
      (null == u && null == f
        ? ((f = r), (u = r = void 0))
        : null == f &&
          ("string" == typeof r
            ? ((f = u), (u = void 0))
            : ((f = u), (u = r), (r = void 0))),
      !1 === f)
    )
      f = lt;
    else if (!f) return n;
    return (
      1 === e &&
        ((o = f),
        ((f = function (n) {
          return i().off(n), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = i.guid++))),
      n.each(function () {
        i.event.add(this, t, f, u, r);
      })
    );
  }
  function hi(n, t, u) {
    u
      ? (r.set(n, t, !1),
        i.event.add(n, t, {
          namespace: !1,
          handler: function (n) {
            var o,
              e,
              f = r.get(this, t);
            if (1 & n.isTrigger && this[t]) {
              if (f.length)
                (i.event.special[t] || {}).delegateType && n.stopPropagation();
              else if (
                ((f = k.call(arguments)),
                r.set(this, t, f),
                (o = u(this, t)),
                this[t](),
                f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : (e = {}),
                f !== e)
              )
                return (
                  n.stopImmediatePropagation(), n.preventDefault(), e.value
                );
            } else
              f.length &&
                (r.set(this, t, {
                  value: i.event.trigger(
                    i.extend(f[0], i.Event.prototype),
                    f.slice(1),
                    this,
                  ),
                }),
                n.stopImmediatePropagation());
          },
        }))
      : void 0 === r.get(n, t) && i.event.add(n, t, ct);
  }
  function pu(n, t) {
    return (
      (c(n, "table") &&
        c(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        i(n).children("tbody")[0]) ||
      n
    );
  }
  function ge(n) {
    return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
  }
  function no(n) {
    return (
      "true/" === (n.type || "").slice(0, 5)
        ? (n.type = n.type.slice(5))
        : n.removeAttribute("type"),
      n
    );
  }
  function wu(n, t) {
    var u, s, f, h, c, e;
    if (1 === t.nodeType) {
      if (r.hasData(n) && (e = r.get(n).events))
        for (f in (r.remove(t, "handle events"), e))
          for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
      o.hasData(n) && ((h = o.access(n)), (c = i.extend({}, h)), o.set(t, c));
    }
  }
  function at(n, t, f, o) {
    t = yr(t);
    var a,
      b,
      l,
      v,
      h,
      y,
      c = 0,
      p = n.length,
      d = p - 1,
      w = t[0],
      k = u(w);
    if (k || (1 < p && "string" == typeof w && !e.checkClone && ke.test(w)))
      return n.each(function (i) {
        var r = n.eq(i);
        k && (t[0] = w.call(this, i, r.html()));
        at(r, t, f, o);
      });
    if (
      p &&
      ((b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === a.childNodes.length && (a = b),
      b || o)
    ) {
      for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++)
        (h = a),
          c !== d &&
            ((h = i.clone(h, !0, !0)), v && i.merge(l, s(h, "script"))),
          f.call(n[c], h, c);
      if (v)
        for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++)
          (h = l[c]),
            lu.test(h.type || "") &&
              !r.access(h, "globalEval") &&
              i.contains(y, h) &&
              (h.src && "module" !== (h.type || "").toLowerCase()
                ? i._evalUrl &&
                  !h.noModule &&
                  i._evalUrl(
                    h.src,
                    { nonce: h.nonce || h.getAttribute("nonce") },
                    y,
                  )
                : br(h.textContent.replace(de, ""), h, y));
    }
    return n;
  }
  function bu(n, t, r) {
    for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
      r || 1 !== u.nodeType || i.cleanData(s(u)),
        u.parentNode &&
          (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u));
    return n;
  }
  function ni(n, t, r) {
    var o,
      s,
      h,
      f,
      u = n.style;
    return (
      (r = r || ci(n)) &&
        ("" !== (f = r.getPropertyValue(t) || r[t]) ||
          st(n) ||
          (f = i.style(n, t)),
        !e.pixelBoxStyles() &&
          nr.test(f) &&
          to.test(t) &&
          ((o = u.width),
          (s = u.minWidth),
          (h = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = f),
          (f = r.width),
          (u.width = o),
          (u.minWidth = s),
          (u.maxWidth = h))),
      void 0 !== f ? f + "" : f
    );
  }
  function du(n, t) {
    return {
      get: function () {
        if (!n()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function tr(n) {
    var t = i.cssProps[n] || tf[n];
    return (
      t ||
      (n in nf
        ? n
        : (tf[n] =
            (function (n) {
              for (
                var i = n[0].toUpperCase() + n.slice(1), t = gu.length;
                t--;

              )
                if ((n = gu[t] + i) in nf) return n;
            })(n) || n))
    );
  }
  function ff(n, t, i) {
    var r = kt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
  }
  function ir(n, t, r, u, f, e) {
    var o = "width" === t ? 1 : 0,
      h = 0,
      s = 0;
    if (r === (u ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === r && (s += i.css(n, r + b[o], !0, f)),
        u
          ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f)))
          : ((s += i.css(n, "padding" + b[o], !0, f)),
            "padding" !== r
              ? (s += i.css(n, "border" + b[o] + "Width", !0, f))
              : (h += i.css(n, "border" + b[o] + "Width", !0, f)));
    return (
      !u &&
        0 <= e &&
        (s +=
          Math.max(
            0,
            Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - 0.5,
            ),
          ) || 0),
      s
    );
  }
  function ef(n, t, r) {
    var f = ci(n),
      o =
        (!e.boxSizingReliable() || r) &&
        "border-box" === i.css(n, "boxSizing", !1, f),
      s = o,
      u = ni(n, t, f),
      h = "offset" + t[0].toUpperCase() + t.slice(1);
    if (nr.test(u)) {
      if (!r) return u;
      u = "auto";
    }
    return (
      ((!e.boxSizingReliable() && o) ||
        (!e.reliableTrDimensions() && c(n, "tr")) ||
        "auto" === u ||
        (!parseFloat(u) && "inline" === i.css(n, "display", !1, f))) &&
        n.getClientRects().length &&
        ((o = "border-box" === i.css(n, "boxSizing", !1, f)),
        (s = h in n) && (u = n[h])),
      (u = parseFloat(u) || 0) +
        ir(n, t, r || (o ? "border" : "content"), s, f, u) +
        "px"
    );
  }
  function a(n, t, i, r, u) {
    return new a.prototype.init(n, t, i, r, u);
  }
  function rr() {
    li &&
      (!1 === f.hidden && n.requestAnimationFrame
        ? n.requestAnimationFrame(rr)
        : n.setTimeout(rr, i.fx.interval),
      i.fx.tick());
  }
  function cf() {
    return (
      n.setTimeout(function () {
        vt = void 0;
      }),
      (vt = Date.now())
    );
  }
  function ai(n, t) {
    var u,
      r = 0,
      i = { height: n };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (u = b[r])] = i["padding" + u] = n;
    return t && (i.opacity = i.width = n), i;
  }
  function lf(n, t, i) {
    for (
      var u,
        f = (v.tweeners[t] || []).concat(v.tweeners["*"]),
        r = 0,
        e = f.length;
      r < e;
      r++
    )
      if ((u = f[r].call(i, t, n))) return u;
  }
  function v(n, t, r) {
    var o,
      s,
      h = 0,
      a = v.prefilters.length,
      e = i.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var o = vt || cf(),
            t = Math.max(0, f.startTime + f.duration - o),
            i = 1 - (t / f.duration || 0),
            r = 0,
            u = f.tweens.length;
          r < u;
          r++
        )
          f.tweens[r].run(i);
        return (
          e.notifyWith(n, [f, i, t]),
          i < 1 && u
            ? t
            : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
        );
      },
      f = e.promise({
        elem: n,
        props: i.extend({}, t),
        opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: vt || cf(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var u = i.Tween(
            n,
            f.opts,
            t,
            r,
            f.opts.specialEasing[t] || f.opts.easing,
          );
          return f.tweens.push(u), u;
        },
        stop: function (t) {
          var i = 0,
            r = t ? f.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < r; i++) f.tweens[i].run(1);
          return (
            t
              ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t]))
              : e.rejectWith(n, [f, t]),
            this
          );
        },
      }),
      c = f.props;
    for (
      !(function (n, t) {
        var r, f, e, u, o;
        for (r in n)
          if (
            ((e = t[(f = y(r))]),
            (u = n[r]),
            Array.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
            r !== f && ((n[f] = u), delete n[r]),
            (o = i.cssHooks[f]) && ("expand" in o))
          )
            for (r in ((u = o.expand(u)), delete n[f], u))
              (r in n) || ((n[r] = u[r]), (t[r] = e));
          else t[f] = e;
      })(c, f.opts.specialEasing);
      h < a;
      h++
    )
      if ((o = v.prefilters[h].call(f, n, c, f.opts)))
        return (
          u(o.stop) &&
            (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      i.map(c, lf, f),
      u(f.opts.start) && f.opts.start.call(n, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })),
      f
    );
  }
  function tt(n) {
    return (n.match(l) || []).join(" ");
  }
  function it(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }
  function ur(n) {
    return Array.isArray(n) ? n : ("string" == typeof n && n.match(l)) || [];
  }
  function sr(n, t, r, u) {
    var f;
    if (Array.isArray(t))
      i.each(t, function (t, i) {
        r || uo.test(n)
          ? u(n, i)
          : sr(
              n + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              r,
              u,
            );
      });
    else if (r || "object" !== ut(t)) u(n, t);
    else for (f in t) sr(n + "[" + f + "]", t[f], r, u);
  }
  function gf(n) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var r,
        f = 0,
        e = t.toLowerCase().match(l) || [];
      if (u(i))
        while ((r = e[f++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(i))
            : (n[r] = n[r] || []).push(i);
    };
  }
  function ne(n, t, r, u) {
    function e(s) {
      var h;
      return (
        (f[s] = !0),
        i.each(n[s] || [], function (n, i) {
          var s = i(t, r, u);
          return "string" != typeof s || o || f[s]
            ? o
              ? !(h = s)
              : void 0
            : (t.dataTypes.unshift(s), e(s), !1);
        }),
        h
      );
    }
    var f = {},
      o = n === hr;
    return e(t.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function lr(n, t) {
    var r,
      u,
      f = i.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u), n;
  }
  var p = [],
    vr = Object.getPrototypeOf,
    k = p.slice,
    yr = p.flat
      ? function (n) {
          return p.flat.call(n);
        }
      : function (n) {
          return p.concat.apply([], n);
        },
    yi = p.push,
    ii = p.indexOf,
    ri = {},
    pr = ri.toString,
    ui = ri.hasOwnProperty,
    wr = ui.toString,
    ee = wr.call(Object),
    e = {},
    u = function (n) {
      return "function" == typeof n && "number" != typeof n.nodeType;
    },
    rt = function (n) {
      return null != n && n === n.window;
    },
    f = n.document,
    oe = { type: !0, src: !0, nonce: !0, noModule: !0 },
    kr = "3.5.1",
    i = function (n, t) {
      return new i.fn.init(n, t);
    },
    d,
    wi,
    nu,
    tu,
    iu,
    ru,
    l,
    eu,
    ei,
    ot,
    dt,
    ki,
    h,
    au,
    vt,
    li,
    yt,
    of,
    sf,
    hf,
    af,
    pt,
    vf,
    yf,
    pf,
    fr,
    er,
    te,
    wt,
    ie,
    ar,
    vi,
    re,
    ue,
    fe;
  i.fn = i.prototype = {
    jquery: kr,
    constructor: i,
    length: 0,
    toArray: function () {
      return k.call(this);
    },
    get: function (n) {
      return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n];
    },
    pushStack: function (n) {
      var t = i.merge(this.constructor(), n);
      return (t.prevObject = this), t;
    },
    each: function (n) {
      return i.each(this, n);
    },
    map: function (n) {
      return this.pushStack(
        i.map(this, function (t, i) {
          return n.call(t, i, t);
        }),
      );
    },
    slice: function () {
      return this.pushStack(k.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return (t + 1) % 2;
        }),
      );
    },
    odd: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return t % 2;
        }),
      );
    },
    eq: function (n) {
      var i = this.length,
        t = +n + (n < 0 ? i : 0);
      return this.pushStack(0 <= t && t < i ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: yi,
    sort: p.sort,
    splice: p.splice,
  };
  i.extend = i.fn.extend = function () {
    var s,
      f,
      e,
      t,
      o,
      c,
      n = arguments[0] || {},
      r = 1,
      l = arguments.length,
      h = !1;
    for (
      "boolean" == typeof n && ((h = n), (n = arguments[r] || {}), r++),
        "object" == typeof n || u(n) || (n = {}),
        r === l && ((n = this), r--);
      r < l;
      r++
    )
      if (null != (s = arguments[r]))
        for (f in s)
          (t = s[f]),
            "__proto__" !== f &&
              n !== t &&
              (h && t && (i.isPlainObject(t) || (o = Array.isArray(t)))
                ? ((e = n[f]),
                  (c =
                    o && !Array.isArray(e)
                      ? []
                      : o || i.isPlainObject(e)
                      ? e
                      : {}),
                  (o = !1),
                  (n[f] = i.extend(h, c, t)))
                : void 0 !== t && (n[f] = t));
    return n;
  };
  i.extend({
    expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (n) {
      throw new Error(n);
    },
    noop: function () {},
    isPlainObject: function (n) {
      var t, i;
      return (
        !(!n || "[object Object]" !== pr.call(n)) &&
        (!(t = vr(n)) ||
          ("function" ==
            typeof (i = ui.call(t, "constructor") && t.constructor) &&
            wr.call(i) === ee))
      );
    },
    isEmptyObject: function (n) {
      for (var t in n) return !1;
      return !0;
    },
    globalEval: function (n, t, i) {
      br(n, { nonce: t && t.nonce }, i);
    },
    each: function (n, t) {
      var r,
        i = 0;
      if (pi(n)) {
        for (r = n.length; i < r; i++) if (!1 === t.call(n[i], i, n[i])) break;
      } else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
      return n;
    },
    makeArray: function (n, t) {
      var r = t || [];
      return (
        null != n &&
          (pi(Object(n))
            ? i.merge(r, "string" == typeof n ? [n] : n)
            : yi.call(r, n)),
        r
      );
    },
    inArray: function (n, t, i) {
      return null == t ? -1 : ii.call(t, n, i);
    },
    merge: function (n, t) {
      for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
      return (n.length = r), n;
    },
    grep: function (n, t, i) {
      for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
        !t(n[r], r) !== e && u.push(n[r]);
      return u;
    },
    map: function (n, t, i) {
      var e,
        u,
        r = 0,
        f = [];
      if (pi(n))
        for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
      else for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
      return yr(f);
    },
    guid: 1,
    support: e,
  });
  "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
  i.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " ",
    ),
    function (n, t) {
      ri["[object " + t + "]"] = t.toLowerCase();
    },
  );
  d = (function (n) {
    function u(n, t, r, u) {
      var s,
        y,
        c,
        l,
        p,
        w,
        d,
        v = t && t.ownerDocument,
        a = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof n || !n || (1 !== a && 9 !== a && 11 !== a))
      )
        return r;
      if (!u && (b(t), (t = t || i), h)) {
        if (11 !== a && (p = ar.exec(n)))
          if ((s = p[1])) {
            if (9 === a) {
              if (!(c = t.getElementById(s))) return r;
              if (c.id === s) return r.push(c), r;
            } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s)
              return r.push(c), r;
          } else {
            if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r;
            if (
              (s = p[3]) &&
              f.getElementsByClassName &&
              t.getElementsByClassName
            )
              return k.apply(r, t.getElementsByClassName(s)), r;
          }
        if (
          f.qsa &&
          !lt[n + " "] &&
          (!o || !o.test(n)) &&
          (1 !== a || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((d = n), (v = t), 1 === a && (er.test(n) || yi.test(n)))) {
            for (
              ((v = (ti.test(n) && ri(t.parentNode)) || t) === t && f.scope) ||
                ((l = t.getAttribute("id"))
                  ? (l = l.replace(pi, wi))
                  : t.setAttribute("id", (l = e))),
                y = (w = ft(n)).length;
              y--;

            )
              w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
            d = w.join(",");
          }
          try {
            return k.apply(r, v.querySelectorAll(d)), r;
          } catch (t) {
            lt(n, !0);
          } finally {
            l === e && t.removeAttribute("id");
          }
        }
      }
      return si(n.replace(at, "$1"), t, r, u);
    }
    function yt() {
      var n = [];
      return function i(r, u) {
        return (
          n.push(r + " ") > t.cacheLength && delete i[n.shift()],
          (i[r + " "] = u)
        );
      };
    }
    function l(n) {
      return (n[e] = !0), n;
    }
    function a(n) {
      var t = i.createElement("fieldset");
      try {
        return !!n(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null;
      }
    }
    function ii(n, i) {
      for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
    }
    function ki(n, t) {
      var i = t && n,
        r =
          i &&
          1 === n.nodeType &&
          1 === t.nodeType &&
          n.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (i) while ((i = i.nextSibling)) if (i === t) return -1;
      return n ? 1 : -1;
    }
    function yr(n) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n;
      };
    }
    function pr(n) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === n;
      };
    }
    function di(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && vr(t) === n)
            : t.disabled === n
          : "label" in t && t.disabled === n;
      };
    }
    function it(n) {
      return l(function (t) {
        return (
          (t = +t),
          l(function (i, r) {
            for (var u, f = n([], i.length, t), e = f.length; e--; )
              i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
          })
        );
      });
    }
    function ri(n) {
      return n && "undefined" != typeof n.getElementsByTagName && n;
    }
    function gi() {}
    function pt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
      return i;
    }
    function wt(n, t, i) {
      var r = t.dir,
        u = t.next,
        f = u || r,
        o = i && "parentNode" === f,
        s = nr++;
      return t.first
        ? function (t, i, u) {
            while ((t = t[r])) if (1 === t.nodeType || o) return n(t, i, u);
            return !1;
          }
        : function (t, i, h) {
            var c,
              l,
              a,
              y = [v, s];
            if (h) {
              while ((t = t[r]))
                if ((1 === t.nodeType || o) && n(t, i, h)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || o)
                  if (
                    ((l =
                      (a = t[e] || (t[e] = {}))[t.uniqueID] ||
                      (a[t.uniqueID] = {})),
                    u && u === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = l[f]) && c[0] === v && c[1] === s)
                      return (y[2] = c[2]);
                    if (((l[f] = y)[2] = n(t, i, h))) return !0;
                  }
            return !1;
          };
    }
    function ui(n) {
      return 1 < n.length
        ? function (t, i, r) {
            for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
            return !0;
          }
        : n[0];
    }
    function bt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
        (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
      return o;
    }
    function fi(n, t, i, r, f, o) {
      return (
        r && !r[e] && (r = fi(r)),
        f && !f[e] && (f = fi(f, o)),
        l(function (e, o, s, h) {
          var a,
            l,
            v,
            w = [],
            p = [],
            b = o.length,
            d =
              e ||
              (function (n, t, i) {
                for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                return i;
              })(t || "*", s.nodeType ? [s] : s, []),
            y = !n || (!e && t) ? d : bt(d, w, n, s, h),
            c = i ? (f || (e ? n : b || r) ? [] : o) : y;
          if ((i && i(y, c, s, h), r))
            for (a = bt(c, p), r(a, [], s, h), l = a.length; l--; )
              (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
          if (e) {
            if (f || n) {
              if (f) {
                for (a = [], l = c.length; l--; )
                  (v = c[l]) && a.push((y[l] = v));
                f(null, (c = []), a, h);
              }
              for (l = c.length; l--; )
                (v = c[l]) &&
                  -1 < (a = f ? nt(e, v) : w[l]) &&
                  (e[a] = !(o[a] = v));
            }
          } else
            (c = bt(c === o ? c.splice(b, c.length) : c)),
              f ? f(null, o, c, h) : k.apply(o, c);
        })
      );
    }
    function ei(n) {
      for (
        var o,
          u,
          r,
          s = n.length,
          h = t.relative[n[0].type],
          c = h || t.relative[" "],
          i = h ? 1 : 0,
          l = wt(
            function (n) {
              return n === o;
            },
            c,
            !0,
          ),
          a = wt(
            function (n) {
              return -1 < nt(o, n);
            },
            c,
            !0,
          ),
          f = [
            function (n, t, i) {
              var r =
                (!h && (i || t !== ht)) ||
                ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
              return (o = null), r;
            },
          ];
        i < s;
        i++
      )
        if ((u = t.relative[n[i].type])) f = [wt(ui(f), u)];
        else {
          if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
            for (r = ++i; r < s; r++) if (t.relative[n[r].type]) break;
            return fi(
              1 < i && ui(f),
              1 < i &&
                pt(
                  n
                    .slice(0, i - 1)
                    .concat({ value: " " === n[i - 2].type ? "*" : "" }),
                ).replace(at, "$1"),
              u,
              i < r && ei(n.slice(i, r)),
              r < s && ei((n = n.slice(r))),
              r < s && pt(n),
            );
          }
          f.push(u);
        }
      return ui(f);
    }
    var rt,
      f,
      t,
      st,
      oi,
      ft,
      kt,
      si,
      ht,
      w,
      ut,
      b,
      i,
      s,
      h,
      o,
      d,
      ct,
      et,
      e = "sizzle" + 1 * new Date(),
      c = n.document,
      v = 0,
      nr = 0,
      hi = yt(),
      ci = yt(),
      li = yt(),
      lt = yt(),
      dt = function (n, t) {
        return n === t && (ut = !0), 0;
      },
      tr = {}.hasOwnProperty,
      g = [],
      ir = g.pop,
      rr = g.push,
      k = g.push,
      ai = g.slice,
      nt = function (n, t) {
        for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
        return -1;
      },
      gt =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      r = "[\\x20\\t\\r\\n\\f]",
      tt =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        r +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      vi =
        "\\[" +
        r +
        "*(" +
        tt +
        ")(?:" +
        r +
        "*([*^$|!~]?=)" +
        r +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        tt +
        "))|)" +
        r +
        "*\\]",
      ni =
        ":(" +
        tt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        vi +
        ")*)|.*)\\)|)",
      ur = new RegExp(r + "+", "g"),
      at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
      fr = new RegExp("^" + r + "*," + r + "*"),
      yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
      er = new RegExp(r + "|>"),
      or = new RegExp(ni),
      sr = new RegExp("^" + tt + "$"),
      vt = {
        ID: new RegExp("^#(" + tt + ")"),
        CLASS: new RegExp("^\\.(" + tt + ")"),
        TAG: new RegExp("^(" + tt + "|[*])"),
        ATTR: new RegExp("^" + vi),
        PSEUDO: new RegExp("^" + ni),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            r +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            r +
            "*(?:([+-]|)" +
            r +
            "*(\\d+)|))" +
            r +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + gt + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            r +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            r +
            "*((?:-\\d)?\\d*)" +
            r +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      hr = /HTML$/i,
      cr = /^(?:input|select|textarea|button)$/i,
      lr = /^h\d$/i,
      ot = /^[^{]+\{\s*\[native \w/,
      ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ti = /[+~]/,
      y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
      p = function (n, t) {
        var i = "0x" + n.slice(1) - 65536;
        return (
          t ||
          (i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
        );
      },
      pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      wi = function (n, t) {
        return t
          ? "\0" === n
            ? "ï¿½"
            : n.slice(0, -1) +
              "\\" +
              n.charCodeAt(n.length - 1).toString(16) +
              " "
          : "\\" + n;
      },
      bi = function () {
        b();
      },
      vr = wt(
        function (n) {
          return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      k.apply((g = ai.call(c.childNodes)), c.childNodes);
      g[c.childNodes.length].nodeType;
    } catch (rt) {
      k = {
        apply: g.length
          ? function (n, t) {
              rr.apply(n, ai.call(t));
            }
          : function (n, t) {
              for (var i = n.length, r = 0; (n[i++] = t[r++]); );
              n.length = i - 1;
            },
      };
    }
    for (rt in ((f = u.support = {}),
    (oi = u.isXML =
      function (n) {
        var i = n.namespaceURI,
          t = (n.ownerDocument || n).documentElement;
        return !hr.test(i || (t && t.nodeName) || "HTML");
      }),
    (b = u.setDocument =
      function (n) {
        var v,
          u,
          l = n ? n.ownerDocument || n : c;
        return (
          l != i &&
            9 === l.nodeType &&
            l.documentElement &&
            ((s = (i = l).documentElement),
            (h = !oi(i)),
            c != i &&
              (u = i.defaultView) &&
              u.top !== u &&
              (u.addEventListener
                ? u.addEventListener("unload", bi, !1)
                : u.attachEvent && u.attachEvent("onunload", bi)),
            (f.scope = a(function (n) {
              return (
                s.appendChild(n).appendChild(i.createElement("div")),
                "undefined" != typeof n.querySelectorAll &&
                  !n.querySelectorAll(":scope fieldset div").length
              );
            })),
            (f.attributes = a(function (n) {
              return (n.className = "i"), !n.getAttribute("className");
            })),
            (f.getElementsByTagName = a(function (n) {
              return (
                n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
              );
            })),
            (f.getElementsByClassName = ot.test(i.getElementsByClassName)),
            (f.getById = a(function (n) {
              return (
                (s.appendChild(n).id = e),
                !i.getElementsByName || !i.getElementsByName(e).length
              );
            })),
            f.getById
              ? ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    return n.getAttribute("id") === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : [];
                  }
                }))
              : ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    var i =
                      "undefined" != typeof n.getAttributeNode &&
                      n.getAttributeNode("id");
                    return i && i.value === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if ("undefined" != typeof t.getElementById && h) {
                    var r,
                      u,
                      f,
                      i = t.getElementById(n);
                    if (i) {
                      if ((r = i.getAttributeNode("id")) && r.value === n)
                        return [i];
                      for (f = t.getElementsByName(n), u = 0; (i = f[u++]); )
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                          return [i];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = f.getElementsByTagName
              ? function (n, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(n)
                    : f.qsa
                    ? t.querySelectorAll(n)
                    : void 0;
                }
              : function (n, t) {
                  var i,
                    r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                  if ("*" === n) {
                    while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                    return r;
                  }
                  return u;
                }),
            (t.find.CLASS =
              f.getElementsByClassName &&
              function (n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                  return t.getElementsByClassName(n);
              }),
            (d = []),
            (o = []),
            (f.qsa = ot.test(i.querySelectorAll)) &&
              (a(function (n) {
                var t;
                s.appendChild(n).innerHTML =
                  "<a id='" +
                  e +
                  "'></a><select id='" +
                  e +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                n.querySelectorAll("[msallowcapture^='']").length &&
                  o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length ||
                  o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                (t = i.createElement("input")).setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length ||
                  o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length ||
                  o.push(".#.+[+~]");
                n.querySelectorAll("\\\f");
                o.push("[\\r\\n\\f]");
              }),
              a(function (n) {
                n.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length &&
                  o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length &&
                  o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length &&
                  o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:");
              })),
            (f.matchesSelector = ot.test(
              (ct =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector),
            )) &&
              a(function (n) {
                f.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni);
              }),
            (o = o.length && new RegExp(o.join("|"))),
            (d = d.length && new RegExp(d.join("|"))),
            (v = ot.test(s.compareDocumentPosition)),
            (et =
              v || ot.test(s.contains)
                ? function (n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                      i = t && t.parentNode;
                    return (
                      n === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(r.contains
                          ? r.contains(i)
                          : n.compareDocumentPosition &&
                            16 & n.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (n, t) {
                    if (t) while ((t = t.parentNode)) if (t === n) return !0;
                    return !1;
                  }),
            (dt = v
              ? function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r =
                    !n.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (n.ownerDocument || n) == (t.ownerDocument || t)
                          ? n.compareDocumentPosition(t)
                          : 1) ||
                    (!f.sortDetached && t.compareDocumentPosition(n) === r)
                      ? n == i || (n.ownerDocument == c && et(c, n))
                        ? -1
                        : t == i || (t.ownerDocument == c && et(c, t))
                        ? 1
                        : w
                        ? nt(w, n) - nt(w, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r,
                    u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                  if (!o || !s)
                    return n == i
                      ? -1
                      : t == i
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : w
                      ? nt(w, n) - nt(w, t)
                      : 0;
                  if (o === s) return ki(n, t);
                  for (r = n; (r = r.parentNode); ) f.unshift(r);
                  for (r = t; (r = r.parentNode); ) e.unshift(r);
                  while (f[u] === e[u]) u++;
                  return u
                    ? ki(f[u], e[u])
                    : f[u] == c
                    ? -1
                    : e[u] == c
                    ? 1
                    : 0;
                })),
          i
        );
      }),
    (u.matches = function (n, t) {
      return u(n, null, null, t);
    }),
    (u.matchesSelector = function (n, t) {
      if (
        (b(n),
        f.matchesSelector &&
          h &&
          !lt[t + " "] &&
          (!d || !d.test(t)) &&
          (!o || !o.test(t)))
      )
        try {
          var r = ct.call(n, t);
          if (
            r ||
            f.disconnectedMatch ||
            (n.document && 11 !== n.document.nodeType)
          )
            return r;
        } catch (n) {
          lt(t, !0);
        }
      return 0 < u(t, i, null, [n]).length;
    }),
    (u.contains = function (n, t) {
      return (n.ownerDocument || n) != i && b(n), et(n, t);
    }),
    (u.attr = function (n, r) {
      (n.ownerDocument || n) != i && b(n);
      var e = t.attrHandle[r.toLowerCase()],
        u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
      return void 0 !== u
        ? u
        : f.attributes || !h
        ? n.getAttribute(r)
        : (u = n.getAttributeNode(r)) && u.specified
        ? u.value
        : null;
    }),
    (u.escape = function (n) {
      return (n + "").replace(pi, wi);
    }),
    (u.error = function (n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    }),
    (u.uniqueSort = function (n) {
      var r,
        u = [],
        t = 0,
        i = 0;
      if (
        ((ut = !f.detectDuplicates),
        (w = !f.sortStable && n.slice(0)),
        n.sort(dt),
        ut)
      ) {
        while ((r = n[i++])) r === n[i] && (t = u.push(i));
        while (t--) n.splice(u[t], 1);
      }
      return (w = null), n;
    }),
    (st = u.getText =
      function (n) {
        var r,
          i = "",
          u = 0,
          t = n.nodeType;
        if (t) {
          if (1 === t || 9 === t || 11 === t) {
            if ("string" == typeof n.textContent) return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
          } else if (3 === t || 4 === t) return n.nodeValue;
        } else while ((r = n[u++])) i += st(r);
        return i;
      }),
    ((t = u.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (n) {
            return (
              (n[1] = n[1].replace(y, p)),
              (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)),
              "~=" === n[2] && (n[3] = " " + n[3] + " "),
              n.slice(0, 4)
            );
          },
          CHILD: function (n) {
            return (
              (n[1] = n[1].toLowerCase()),
              "nth" === n[1].slice(0, 3)
                ? (n[3] || u.error(n[0]),
                  (n[4] = +(n[4]
                    ? n[5] + (n[6] || 1)
                    : 2 * ("even" === n[3] || "odd" === n[3]))),
                  (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                : n[3] && u.error(n[0]),
              n
            );
          },
          PSEUDO: function (n) {
            var i,
              t = !n[6] && n[2];
            return vt.CHILD.test(n[0])
              ? null
              : (n[3]
                  ? (n[2] = n[4] || n[5] || "")
                  : t &&
                    or.test(t) &&
                    (i = ft(t, !0)) &&
                    (i = t.indexOf(")", t.length - i) - t.length) &&
                    ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
                n.slice(0, 3));
          },
        },
        filter: {
          TAG: function (n) {
            var t = n.replace(y, p).toLowerCase();
            return "*" === n
              ? function () {
                  return !0;
                }
              : function (n) {
                  return n.nodeName && n.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (n) {
            var t = hi[n + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
                hi(n, function (n) {
                  return t.test(
                    ("string" == typeof n.className && n.className) ||
                      ("undefined" != typeof n.getAttribute &&
                        n.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, t, i) {
            return function (r) {
              var f = u.attr(r, n);
              return null == f
                ? "!=" === t
                : !t ||
                    ((f += ""),
                    "=" === t
                      ? f === i
                      : "!=" === t
                      ? f !== i
                      : "^=" === t
                      ? i && 0 === f.indexOf(i)
                      : "*=" === t
                      ? i && -1 < f.indexOf(i)
                      : "$=" === t
                      ? i && f.slice(-i.length) === i
                      : "~=" === t
                      ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i)
                      : "|=" === t &&
                        (f === i || f.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (n, t, i, r, u) {
            var s = "nth" !== n.slice(0, 3),
              o = "last" !== n.slice(-4),
              f = "of-type" === t;
            return 1 === r && 0 === u
              ? function (n) {
                  return !!n.parentNode;
                }
              : function (t, i, h) {
                  var p,
                    d,
                    y,
                    c,
                    a,
                    w,
                    b = s !== o ? "nextSibling" : "previousSibling",
                    k = t.parentNode,
                    nt = f && t.nodeName.toLowerCase(),
                    g = !h && !f,
                    l = !1;
                  if (k) {
                    if (s) {
                      while (b) {
                        for (c = t; (c = c[b]); )
                          if (
                            f
                              ? c.nodeName.toLowerCase() === nt
                              : 1 === c.nodeType
                          )
                            return !1;
                        w = b = "only" === n && !w && "nextSibling";
                      }
                      return !0;
                    }
                    if (((w = [o ? k.firstChild : k.lastChild]), o && g)) {
                      for (
                        l =
                          (a =
                            (p =
                              (d =
                                (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] ||
                                (y[c.uniqueID] = {}))[n] || [])[0] === v &&
                            p[1]) && p[2],
                          c = a && k.childNodes[a];
                        (c = (++a && c && c[b]) || (l = a = 0) || w.pop());

                      )
                        if (1 === c.nodeType && ++l && c === t) {
                          d[n] = [v, a, l];
                          break;
                        }
                    } else if (
                      (g &&
                        (l = a =
                          (p =
                            (d =
                              (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                      !1 === l)
                    )
                      while ((c = (++a && c && c[b]) || (l = a = 0) || w.pop()))
                        if (
                          (f
                            ? c.nodeName.toLowerCase() === nt
                            : 1 === c.nodeType) &&
                          ++l &&
                          (g &&
                            ((d =
                              (y = c[e] || (c[e] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] = [v, l]),
                          c === t)
                        )
                          break;
                    return (l -= u) === r || (l % r == 0 && 0 <= l / r);
                  }
                };
          },
          PSEUDO: function (n, i) {
            var f,
              r =
                t.pseudos[n] ||
                t.setFilters[n.toLowerCase()] ||
                u.error("unsupported pseudo: " + n);
            return r[e]
              ? r(i)
              : 1 < r.length
              ? ((f = [n, n, "", i]),
                t.setFilters.hasOwnProperty(n.toLowerCase())
                  ? l(function (n, t) {
                      for (var e, u = r(n, i), f = u.length; f--; )
                        n[(e = nt(n, u[f]))] = !(t[e] = u[f]);
                    })
                  : function (n) {
                      return r(n, 0, f);
                    })
              : r;
          },
        },
        pseudos: {
          not: l(function (n) {
            var t = [],
              r = [],
              i = kt(n.replace(at, "$1"));
            return i[e]
              ? l(function (n, t, r, u) {
                  for (var e, o = i(n, null, u, []), f = n.length; f--; )
                    (e = o[f]) && (n[f] = !(t[f] = e));
                })
              : function (n, u, f) {
                  return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
                };
          }),
          has: l(function (n) {
            return function (t) {
              return 0 < u(n, t).length;
            };
          }),
          contains: l(function (n) {
            return (
              (n = n.replace(y, p)),
              function (t) {
                return -1 < (t.textContent || st(t)).indexOf(n);
              }
            );
          }),
          lang: l(function (n) {
            return (
              sr.test(n || "") || u.error("unsupported lang: " + n),
              (n = n.replace(y, p).toLowerCase()),
              function (t) {
                var i;
                do
                  if (
                    (i = h
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var i = n.location && n.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function (n) {
            return n === s;
          },
          focus: function (n) {
            return (
              n === i.activeElement &&
              (!i.hasFocus || i.hasFocus()) &&
              !!(n.type || n.href || ~n.tabIndex)
            );
          },
          enabled: di(!1),
          disabled: di(!0),
          checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return (
              ("input" === t && !!n.checked) || ("option" === t && !!n.selected)
            );
          },
          selected: function (n) {
            return (
              n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
            );
          },
          empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling)
              if (n.nodeType < 6) return !1;
            return !0;
          },
          parent: function (n) {
            return !t.pseudos.empty(n);
          },
          header: function (n) {
            return lr.test(n.nodeName);
          },
          input: function (n) {
            return cr.test(n.nodeName);
          },
          button: function (n) {
            var t = n.nodeName.toLowerCase();
            return ("input" === t && "button" === n.type) || "button" === t;
          },
          text: function (n) {
            var t;
            return (
              "input" === n.nodeName.toLowerCase() &&
              "text" === n.type &&
              (null == (t = n.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: it(function () {
            return [0];
          }),
          last: it(function (n, t) {
            return [t - 1];
          }),
          eq: it(function (n, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: it(function (n, t) {
            for (var i = 0; i < t; i += 2) n.push(i);
            return n;
          }),
          odd: it(function (n, t) {
            for (var i = 1; i < t; i += 2) n.push(i);
            return n;
          }),
          lt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r; ) n.push(r);
            return n;
          }),
          gt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
            return n;
          }),
        },
      }).pseudos.nth = t.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      t.pseudos[rt] = yr(rt);
    for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt);
    return (
      (gi.prototype = t.filters = t.pseudos),
      (t.setFilters = new gi()),
      (ft = u.tokenize =
        function (n, i) {
          var e,
            f,
            s,
            o,
            r,
            h,
            c,
            l = ci[n + " "];
          if (l) return i ? 0 : l.slice(0);
          for (r = n, h = [], c = t.preFilter; r; ) {
            for (o in ((e && !(f = fr.exec(r))) ||
              (f && (r = r.slice(f[0].length) || r), h.push((s = []))),
            (e = !1),
            (f = yi.exec(r)) &&
              ((e = f.shift()),
              s.push({ value: e, type: f[0].replace(at, " ") }),
              (r = r.slice(e.length))),
            t.filter))
              (f = vt[o].exec(r)) &&
                (!c[o] || (f = c[o](f))) &&
                ((e = f.shift()),
                s.push({ value: e, type: o, matches: f }),
                (r = r.slice(e.length)));
            if (!e) break;
          }
          return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
        }),
      (kt = u.compile =
        function (n, r) {
          var s,
            c,
            a,
            o,
            y,
            p,
            w = [],
            d = [],
            f = li[n + " "];
          if (!f) {
            for (r || (r = ft(n)), s = r.length; s--; )
              (f = ei(r[s]))[e] ? w.push(f) : d.push(f);
            (f = li(
              n,
              ((c = d),
              (o = 0 < (a = w).length),
              (y = 0 < c.length),
              (p = function (n, r, f, e, s) {
                var l,
                  nt,
                  d,
                  g = 0,
                  p = "0",
                  tt = n && [],
                  w = [],
                  it = ht,
                  rt = n || (y && t.find.TAG("*", s)),
                  ut = (v += null == it ? 1 : Math.random() || 0.1),
                  ft = rt.length;
                for (
                  s && (ht = r == i || r || s);
                  p !== ft && null != (l = rt[p]);
                  p++
                ) {
                  if (y && l) {
                    for (
                      nt = 0, r || l.ownerDocument == i || (b(l), (f = !h));
                      (d = c[nt++]);

                    )
                      if (d(l, r || i, f)) {
                        e.push(l);
                        break;
                      }
                    s && (v = ut);
                  }
                  o && ((l = !d && l) && g--, n && tt.push(l));
                }
                if (((g += p), o && p !== g)) {
                  for (nt = 0; (d = a[nt++]); ) d(tt, w, r, f);
                  if (n) {
                    if (0 < g) while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                    w = bt(w);
                  }
                  k.apply(e, w);
                  s &&
                    !n &&
                    0 < w.length &&
                    1 < g + a.length &&
                    u.uniqueSort(e);
                }
                return s && ((v = ut), (ht = it)), tt;
              }),
              o ? l(p) : p),
            )).selector = n;
          }
          return f;
        }),
      (si = u.select =
        function (n, i, r, u) {
          var o,
            f,
            e,
            l,
            a,
            c = "function" == typeof n && n,
            s = !u && ft((n = c.selector || n));
          if (((r = r || []), 1 === s.length)) {
            if (
              2 < (f = s[0] = s[0].slice(0)).length &&
              "ID" === (e = f[0]).type &&
              9 === i.nodeType &&
              h &&
              t.relative[f[1].type]
            ) {
              if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                return r;
              c && (i = i.parentNode);
              n = n.slice(f.shift().value.length);
            }
            for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
              if (((e = f[o]), t.relative[(l = e.type)])) break;
              if (
                (a = t.find[l]) &&
                (u = a(
                  e.matches[0].replace(y, p),
                  (ti.test(f[0].type) && ri(i.parentNode)) || i,
                ))
              ) {
                if ((f.splice(o, 1), !(n = u.length && pt(f))))
                  return k.apply(r, u), r;
                break;
              }
            }
          }
          return (
            (c || kt(n, s))(
              u,
              i,
              !h,
              r,
              !i || (ti.test(n) && ri(i.parentNode)) || i,
            ),
            r
          );
        }),
      (f.sortStable = e.split("").sort(dt).join("") === e),
      (f.detectDuplicates = !!ut),
      b(),
      (f.sortDetached = a(function (n) {
        return 1 & n.compareDocumentPosition(i.createElement("fieldset"));
      })),
      a(function (n) {
        return (
          (n.innerHTML = "<a href='#'></a>"),
          "#" === n.firstChild.getAttribute("href")
        );
      }) ||
        ii("type|href|height|width", function (n, t, i) {
          if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (f.attributes &&
        a(function (n) {
          return (
            (n.innerHTML = "<input/>"),
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
          );
        })) ||
        ii("value", function (n, t, i) {
          if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
        }),
      a(function (n) {
        return null == n.getAttribute("disabled");
      }) ||
        ii(gt, function (n, t, i) {
          var r;
          if (!i)
            return !0 === n[t]
              ? t.toLowerCase()
              : (r = n.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      u
    );
  })(n);
  i.find = d;
  i.expr = d.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.uniqueSort = i.unique = d.uniqueSort;
  i.text = d.getText;
  i.isXMLDoc = d.isXML;
  i.contains = d.contains;
  i.escapeSelector = d.escape;
  var ft = function (n, t, r) {
      for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
        if (1 === n.nodeType) {
          if (f && i(n).is(r)) break;
          u.push(n);
        }
      return u;
    },
    dr = function (n, t) {
      for (var i = []; n; n = n.nextSibling)
        1 === n.nodeType && n !== t && i.push(n);
      return i;
    },
    gr = i.expr.match.needsContext;
  wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  i.filter = function (n, t, r) {
    var u = t[0];
    return (
      r && (n = ":not(" + n + ")"),
      1 === t.length && 1 === u.nodeType
        ? i.find.matchesSelector(u, n)
          ? [u]
          : []
        : i.find.matches(
            n,
            i.grep(t, function (n) {
              return 1 === n.nodeType;
            }),
          )
    );
  };
  i.fn.extend({
    find: function (n) {
      var t,
        r,
        u = this.length,
        f = this;
      if ("string" != typeof n)
        return this.pushStack(
          i(n).filter(function () {
            for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
          }),
        );
      for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
      return 1 < u ? i.uniqueSort(r) : r;
    },
    filter: function (n) {
      return this.pushStack(bi(this, n || [], !1));
    },
    not: function (n) {
      return this.pushStack(bi(this, n || [], !0));
    },
    is: function (n) {
      return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1)
        .length;
    },
  });
  tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (i.fn.init = function (n, t, r) {
    var e, o;
    if (!n) return this;
    if (((r = r || nu), "string" == typeof n)) {
      if (
        !(e =
          "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length
            ? [null, n, null]
            : tu.exec(n)) ||
        (!e[1] && t)
      )
        return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
      if (e[1]) {
        if (
          ((t = t instanceof i ? t[0] : t),
          i.merge(
            this,
            i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0),
          ),
          wi.test(e[1]) && i.isPlainObject(t))
        )
          for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
        return this;
      }
      return (
        (o = f.getElementById(e[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return n.nodeType
      ? ((this[0] = n), (this.length = 1), this)
      : u(n)
      ? void 0 !== r.ready
        ? r.ready(n)
        : n(i)
      : i.makeArray(n, this);
  }).prototype = i.fn;
  nu = i(f);
  iu = /^(?:parents|prev(?:Until|All))/;
  ru = { children: !0, contents: !0, next: !0, prev: !0 };
  i.fn.extend({
    has: function (n) {
      var t = i(n, this),
        r = t.length;
      return this.filter(function () {
        for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0;
      });
    },
    closest: function (n, t) {
      var r,
        f = 0,
        o = this.length,
        u = [],
        e = "string" != typeof n && i(n);
      if (!gr.test(n))
        for (; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (e
                ? -1 < e.index(r)
                : 1 === r.nodeType && i.find.matchesSelector(r, n))
            ) {
              u.push(r);
              break;
            }
      return this.pushStack(1 < u.length ? i.uniqueSort(u) : u);
    },
    index: function (n) {
      return n
        ? "string" == typeof n
          ? ii.call(i(n), this[0])
          : ii.call(this, n.jquery ? n[0] : n)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, t) {
      return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
    },
    addBack: function (n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    },
  });
  i.each(
    {
      parent: function (n) {
        var t = n.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (n) {
        return ft(n, "parentNode");
      },
      parentsUntil: function (n, t, i) {
        return ft(n, "parentNode", i);
      },
      next: function (n) {
        return uu(n, "nextSibling");
      },
      prev: function (n) {
        return uu(n, "previousSibling");
      },
      nextAll: function (n) {
        return ft(n, "nextSibling");
      },
      prevAll: function (n) {
        return ft(n, "previousSibling");
      },
      nextUntil: function (n, t, i) {
        return ft(n, "nextSibling", i);
      },
      prevUntil: function (n, t, i) {
        return ft(n, "previousSibling", i);
      },
      siblings: function (n) {
        return dr((n.parentNode || {}).firstChild, n);
      },
      children: function (n) {
        return dr(n.firstChild);
      },
      contents: function (n) {
        return null != n.contentDocument && vr(n.contentDocument)
          ? n.contentDocument
          : (c(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes));
      },
    },
    function (n, t) {
      i.fn[n] = function (r, u) {
        var f = i.map(this, t, r);
        return (
          "Until" !== n.slice(-5) && (u = r),
          u && "string" == typeof u && (f = i.filter(u, f)),
          1 < this.length &&
            (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()),
          this.pushStack(f)
        );
      };
    },
  );
  l = /[^\x20\t\r\n\f]+/g;
  i.Callbacks = function (n) {
    var a, h;
    n =
      "string" == typeof n
        ? ((a = n),
          (h = {}),
          i.each(a.match(l) || [], function (n, t) {
            h[t] = !0;
          }),
          h)
        : i.extend({}, n);
    var o,
      r,
      v,
      f,
      t = [],
      s = [],
      e = -1,
      y = function () {
        for (f = f || n.once, v = o = !0; s.length; e = -1)
          for (r = s.shift(); ++e < t.length; )
            !1 === t[e].apply(r[0], r[1]) &&
              n.stopOnFalse &&
              ((e = t.length), (r = !1));
        n.memory || (r = !1);
        o = !1;
        f && (t = r ? [] : "");
      },
      c = {
        add: function () {
          return (
            t &&
              (r && !o && ((e = t.length - 1), s.push(r)),
              (function f(r) {
                i.each(r, function (i, r) {
                  u(r)
                    ? (n.unique && c.has(r)) || t.push(r)
                    : r && r.length && "string" !== ut(r) && f(r);
                });
              })(arguments),
              r && !o && y()),
            this
          );
        },
        remove: function () {
          return (
            i.each(arguments, function (n, r) {
              for (var u; -1 < (u = i.inArray(r, t, u)); )
                t.splice(u, 1), u <= e && e--;
            }),
            this
          );
        },
        has: function (n) {
          return n ? -1 < i.inArray(n, t) : 0 < t.length;
        },
        empty: function () {
          return t && (t = []), this;
        },
        disable: function () {
          return (f = s = []), (t = r = ""), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (f = s = []), r || o || (t = r = ""), this;
        },
        locked: function () {
          return !!f;
        },
        fireWith: function (n, t) {
          return (
            f ||
              ((t = [n, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              o || y()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!v;
        },
      };
    return c;
  };
  i.extend({
    Deferred: function (t) {
      var f = [
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        o = "pending",
        e = {
          state: function () {
            return o;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          catch: function (n) {
            return e.then(null, n);
          },
          pipe: function () {
            var n = arguments;
            return i
              .Deferred(function (t) {
                i.each(f, function (i, f) {
                  var e = u(n[f[4]]) && n[f[4]];
                  r[f[1]](function () {
                    var n = e && e.apply(this, arguments);
                    n && u(n.promise)
                      ? n
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[f[0] + "With"](this, e ? [n] : arguments);
                  });
                });
                n = null;
              })
              .promise();
          },
          then: function (t, r, e) {
            function s(t, r, f, e) {
              return function () {
                var h = this,
                  c = arguments,
                  l = function () {
                    var n, i;
                    if (!(t < o)) {
                      if ((n = f.apply(h, c)) === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      i =
                        n &&
                        ("object" == typeof n || "function" == typeof n) &&
                        n.then;
                      u(i)
                        ? e
                          ? i.call(n, s(o, r, et, e), s(o, r, fi, e))
                          : (o++,
                            i.call(
                              n,
                              s(o, r, et, e),
                              s(o, r, fi, e),
                              s(o, r, et, r.notifyWith),
                            ))
                        : (f !== et && ((h = void 0), (c = [n])),
                          (e || r.resolveWith)(h, c));
                    }
                  },
                  a = e
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (l) {
                          i.Deferred.exceptionHook &&
                            i.Deferred.exceptionHook(l, a.stackTrace);
                          o <= t + 1 &&
                            (f !== fi && ((h = void 0), (c = [l])),
                            r.rejectWith(h, c));
                        }
                      };
                t
                  ? a()
                  : (i.Deferred.getStackHook &&
                      (a.stackTrace = i.Deferred.getStackHook()),
                    n.setTimeout(a));
              };
            }
            var o = 0;
            return i
              .Deferred(function (n) {
                f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                f[1][3].add(s(0, n, u(t) ? t : et));
                f[2][3].add(s(0, n, u(r) ? r : fi));
              })
              .promise();
          },
          promise: function (n) {
            return null != n ? i.extend(n, e) : e;
          },
        },
        r = {};
      return (
        i.each(f, function (n, t) {
          var i = t[2],
            u = t[5];
          e[t[1]] = i.add;
          u &&
            i.add(
              function () {
                o = u;
              },
              f[3 - n][2].disable,
              f[3 - n][3].disable,
              f[0][2].lock,
              f[0][3].lock,
            );
          i.add(t[3].fire);
          r[t[0]] = function () {
            return (
              r[t[0] + "With"](this === r ? void 0 : this, arguments), this
            );
          };
          r[t[0] + "With"] = i.fireWith;
        }),
        e.promise(r),
        t && t.call(r, r),
        r
      );
    },
    when: function (n) {
      var e = arguments.length,
        t = e,
        o = Array(t),
        f = k.call(arguments),
        r = i.Deferred(),
        s = function (n) {
          return function (t) {
            o[n] = this;
            f[n] = 1 < arguments.length ? k.call(arguments) : t;
            --e || r.resolveWith(o, f);
          };
        };
      if (
        e <= 1 &&
        (fu(n, r.done(s(t)).resolve, r.reject, !e),
        "pending" === r.state() || u(f[t] && f[t].then))
      )
        return r.then();
      while (t--) fu(f[t], s(t), r.reject);
      return r.promise();
    },
  });
  eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  i.Deferred.exceptionHook = function (t, i) {
    n.console &&
      n.console.warn &&
      t &&
      eu.test(t.name) &&
      n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  };
  i.readyException = function (t) {
    n.setTimeout(function () {
      throw t;
    });
  };
  ei = i.Deferred();
  i.fn.ready = function (n) {
    return (
      ei.then(n)["catch"](function (n) {
        i.readyException(n);
      }),
      this
    );
  };
  i.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (n) {
      (!0 === n ? --i.readyWait : i.isReady) ||
        ((i.isReady = !0) !== n && 0 < --i.readyWait) ||
        ei.resolveWith(f, [i]);
    },
  });
  i.ready.then = ei.then;
  "complete" === f.readyState ||
  ("loading" !== f.readyState && !f.documentElement.doScroll)
    ? n.setTimeout(i.ready)
    : (f.addEventListener("DOMContentLoaded", oi),
      n.addEventListener("load", oi));
  var w = function (n, t, r, f, e, o, s) {
      var h = 0,
        l = n.length,
        c = null == r;
      if ("object" === ut(r))
        for (h in ((e = !0), r)) w(n, t, h, r[h], !0, o, s);
      else if (
        void 0 !== f &&
        ((e = !0),
        u(f) || (s = !0),
        c &&
          (s
            ? (t.call(n, f), (t = null))
            : ((c = t),
              (t = function (n, t, r) {
                return c.call(i(n), r);
              }))),
        t)
      )
        for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
      return e ? n : c ? t.call(n) : l ? t(n[0], r) : o;
    },
    se = /^-ms-/,
    he = /-([a-z])/g;
  ot = function (n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
  };
  bt.uid = 1;
  bt.prototype = {
    cache: function (n) {
      var t = n[this.expando];
      return (
        t ||
          ((t = {}),
          ot(n) &&
            (n.nodeType
              ? (n[this.expando] = t)
              : Object.defineProperty(n, this.expando, {
                  value: t,
                  configurable: !0,
                }))),
        t
      );
    },
    set: function (n, t, i) {
      var r,
        u = this.cache(n);
      if ("string" == typeof t) u[y(t)] = i;
      else for (r in t) u[y(r)] = t[r];
      return u;
    },
    get: function (n, t) {
      return void 0 === t
        ? this.cache(n)
        : n[this.expando] && n[this.expando][y(t)];
    },
    access: function (n, t, i) {
      return void 0 === t || (t && "string" == typeof t && void 0 === i)
        ? this.get(n, t)
        : (this.set(n, t, i), void 0 !== i ? i : t);
    },
    remove: function (n, t) {
      var u,
        r = n[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t)
          for (
            u = (t = Array.isArray(t)
              ? t.map(y)
              : ((t = y(t)) in r)
              ? [t]
              : t.match(l) || []).length;
            u--;

          )
            delete r[t[u]];
        (void 0 === t || i.isEmptyObject(r)) &&
          (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
      }
    },
    hasData: function (n) {
      var t = n[this.expando];
      return void 0 !== t && !i.isEmptyObject(t);
    },
  };
  var r = new bt(),
    o = new bt(),
    le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ae = /[A-Z]/g;
  i.extend({
    hasData: function (n) {
      return o.hasData(n) || r.hasData(n);
    },
    data: function (n, t, i) {
      return o.access(n, t, i);
    },
    removeData: function (n, t) {
      o.remove(n, t);
    },
    _data: function (n, t, i) {
      return r.access(n, t, i);
    },
    _removeData: function (n, t) {
      r.remove(n, t);
    },
  });
  i.fn.extend({
    data: function (n, t) {
      var f,
        u,
        e,
        i = this[0],
        s = i && i.attributes;
      if (void 0 === n) {
        if (
          this.length &&
          ((e = o.get(i)), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))
        ) {
          for (f = s.length; f--; )
            s[f] &&
              0 === (u = s[f].name).indexOf("data-") &&
              ((u = y(u.slice(5))), ou(i, u, e[u]));
          r.set(i, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof n
        ? this.each(function () {
            o.set(this, n);
          })
        : w(
            this,
            function (t) {
              var r;
              if (i && void 0 === t)
                return void 0 !== (r = o.get(i, n))
                  ? r
                  : void 0 !== (r = ou(i, n))
                  ? r
                  : void 0;
              this.each(function () {
                o.set(this, n, t);
              });
            },
            null,
            t,
            1 < arguments.length,
            null,
            !0,
          );
    },
    removeData: function (n) {
      return this.each(function () {
        o.remove(this, n);
      });
    },
  });
  i.extend({
    queue: function (n, t, u) {
      var f;
      if (n)
        return (
          (t = (t || "fx") + "queue"),
          (f = r.get(n, t)),
          u &&
            (!f || Array.isArray(u)
              ? (f = r.access(n, t, i.makeArray(u)))
              : f.push(u)),
          f || []
        );
    },
    dequeue: function (n, t) {
      t = t || "fx";
      var r = i.queue(n, t),
        e = r.length,
        u = r.shift(),
        f = i._queueHooks(n, t);
      "inprogress" === u && ((u = r.shift()), e--);
      u &&
        ("fx" === t && r.unshift("inprogress"),
        delete f.stop,
        u.call(
          n,
          function () {
            i.dequeue(n, t);
          },
          f,
        ));
      !e && f && f.empty.fire();
    },
    _queueHooks: function (n, t) {
      var u = t + "queueHooks";
      return (
        r.get(n, u) ||
        r.access(n, u, {
          empty: i.Callbacks("once memory").add(function () {
            r.remove(n, [t + "queue", u]);
          }),
        })
      );
    },
  });
  i.fn.extend({
    queue: function (n, t) {
      var r = 2;
      return (
        "string" != typeof n && ((t = n), (n = "fx"), r--),
        arguments.length < r
          ? i.queue(this[0], n)
          : void 0 === t
          ? this
          : this.each(function () {
              var r = i.queue(this, n, t);
              i._queueHooks(this, n);
              "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
            })
      );
    },
    dequeue: function (n) {
      return this.each(function () {
        i.dequeue(this, n);
      });
    },
    clearQueue: function (n) {
      return this.queue(n || "fx", []);
    },
    promise: function (n, t) {
      var u,
        e = 1,
        o = i.Deferred(),
        f = this,
        s = this.length,
        h = function () {
          --e || o.resolveWith(f, [f]);
        };
      for (
        "string" != typeof n && ((t = n), (n = void 0)), n = n || "fx";
        s--;

      )
        (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
      return h(), o.promise(t);
    },
  });
  var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
    b = ["Top", "Right", "Bottom", "Left"],
    g = f.documentElement,
    st = function (n) {
      return i.contains(n.ownerDocument, n);
    },
    ve = { composed: !0 };
  g.getRootNode &&
    (st = function (n) {
      return (
        i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
      );
    });
  dt = function (n, t) {
    return (
      "none" === (n = t || n).style.display ||
      ("" === n.style.display && st(n) && "none" === i.css(n, "display"))
    );
  };
  ki = {};
  i.fn.extend({
    show: function () {
      return ht(this, !0);
    },
    hide: function () {
      return ht(this);
    },
    toggle: function (n) {
      return "boolean" == typeof n
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            dt(this) ? i(this).show() : i(this).hide();
          });
    },
  });
  var nt,
    si,
    gt = /^(?:checkbox|radio)$/i,
    cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    lu = /^$|^module$|\/(?:java|ecma)script/i;
  nt = f.createDocumentFragment().appendChild(f.createElement("div"));
  (si = f.createElement("input")).setAttribute("type", "radio");
  si.setAttribute("checked", "checked");
  si.setAttribute("name", "t");
  nt.appendChild(si);
  e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
  nt.innerHTML = "<textarea>x</textarea>";
  e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
  nt.innerHTML = "<option></option>";
  e.option = !!nt.lastChild;
  h = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
  h.th = h.td;
  e.option ||
    (h.optgroup = h.option = [1, "<select multiple='multiple'>", "</select>"]);
  au = /<|&#?\w+;/;
  var ye = /^key/,
    pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    yu = /^([^.]*)(?:\.(.+)|)/;
  i.event = {
    global: {},
    add: function (n, t, u, f, e) {
      var p,
        a,
        k,
        v,
        w,
        h,
        s,
        c,
        o,
        b,
        d,
        y = r.get(n);
      if (ot(n))
        for (
          u.handler && ((u = (p = u).handler), (e = p.selector)),
            e && i.find.matchesSelector(g, e),
            u.guid || (u.guid = i.guid++),
            (v = y.events) || (v = y.events = Object.create(null)),
            (a = y.handle) ||
              (a = y.handle =
                function (t) {
                  if ("undefined" != typeof i && i.event.triggered !== t.type)
                    return i.event.dispatch.apply(n, arguments);
                }),
            w = (t = (t || "").match(l) || [""]).length;
          w--;

        )
          (o = d = (k = yu.exec(t[w]) || [])[1]),
            (b = (k[2] || "").split(".").sort()),
            o &&
              ((s = i.event.special[o] || {}),
              (o = (e ? s.delegateType : s.bindType) || o),
              (s = i.event.special[o] || {}),
              (h = i.extend(
                {
                  type: o,
                  origType: d,
                  data: f,
                  handler: u,
                  guid: u.guid,
                  selector: e,
                  needsContext: e && i.expr.match.needsContext.test(e),
                  namespace: b.join("."),
                },
                p,
              )),
              (c = v[o]) ||
                (((c = v[o] = []).delegateCount = 0),
                (s.setup && !1 !== s.setup.call(n, f, b, a)) ||
                  (n.addEventListener && n.addEventListener(o, a))),
              s.add &&
                (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)),
              e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
              (i.event.global[o] = !0));
    },
    remove: function (n, t, u, f, e) {
      var y,
        k,
        c,
        v,
        p,
        s,
        h,
        a,
        o,
        b,
        d,
        w = r.hasData(n) && r.get(n);
      if (w && (v = w.events)) {
        for (p = (t = (t || "").match(l) || [""]).length; p--; )
          if (
            ((o = d = (c = yu.exec(t[p]) || [])[1]),
            (b = (c[2] || "").split(".").sort()),
            o)
          ) {
            for (
              h = i.event.special[o] || {},
                a = v[(o = (f ? h.delegateType : h.bindType) || o)] || [],
                c =
                  c[2] &&
                  new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                k = y = a.length;
              y--;

            )
              (s = a[y]),
                (!e && d !== s.origType) ||
                  (u && u.guid !== s.guid) ||
                  (c && !c.test(s.namespace)) ||
                  (f && f !== s.selector && ("**" !== f || !s.selector)) ||
                  (a.splice(y, 1),
                  s.selector && a.delegateCount--,
                  h.remove && h.remove.call(n, s));
            k &&
              !a.length &&
              ((h.teardown && !1 !== h.teardown.call(n, b, w.handle)) ||
                i.removeEvent(n, o, w.handle),
              delete v[o]);
          } else for (o in v) i.event.remove(n, o + t[p], u, f, !0);
        i.isEmptyObject(v) && r.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var u,
        h,
        c,
        e,
        f,
        l,
        s = new Array(arguments.length),
        t = i.event.fix(n),
        a = (r.get(this, "events") || Object.create(null))[t.type] || [],
        o = i.event.special[t.type] || {};
      for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
      if (
        ((t.delegateTarget = this),
        !o.preDispatch || !1 !== o.preDispatch.call(this, t))
      ) {
        for (
          l = i.event.handlers.call(this, t, a), u = 0;
          (e = l[u++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = e.elem, h = 0;
            (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace &&
              !1 !== f.namespace &&
              !t.rnamespace.test(f.namespace)) ||
              ((t.handleObj = f),
              (t.data = f.data),
              void 0 !==
                (c = (
                  (i.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, s)) &&
                !1 === (t.result = c) &&
                (t.preventDefault(), t.stopPropagation()));
        return o.postDispatch && o.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (n, t) {
      var f,
        h,
        u,
        e,
        o,
        c = [],
        s = t.delegateCount,
        r = n.target;
      if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
        for (; r !== this; r = r.parentNode || this)
          if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
            for (e = [], o = {}, f = 0; f < s; f++)
              void 0 === o[(u = (h = t[f]).selector + " ")] &&
                (o[u] = h.needsContext
                  ? -1 < i(u, this).index(r)
                  : i.find(u, this, null, [r]).length),
                o[u] && e.push(h);
            e.length && c.push({ elem: r, handlers: e });
          }
      return (
        (r = this), s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c
      );
    },
    addProp: function (n, t) {
      Object.defineProperty(i.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: u(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (n) {
      return n[i.expando] ? n : new i.Event(n);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (n) {
          var t = this || n;
          return (
            gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct),
            !1
          );
        },
        trigger: function (n) {
          var t = this || n;
          return (
            gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0
          );
        },
        _default: function (n) {
          var t = n.target;
          return (
            (gt.test(t.type) &&
              t.click &&
              c(t, "input") &&
              r.get(t, "click")) ||
            c(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (n) {
          void 0 !== n.result &&
            n.originalEvent &&
            (n.originalEvent.returnValue = n.result);
        },
      },
    },
  };
  i.removeEvent = function (n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i);
  };
  i.Event = function (n, t) {
    if (!(this instanceof i.Event)) return new i.Event(n, t);
    n && n.type
      ? ((this.originalEvent = n),
        (this.type = n.type),
        (this.isDefaultPrevented =
          n.defaultPrevented ||
          (void 0 === n.defaultPrevented && !1 === n.returnValue)
            ? ct
            : lt),
        (this.target =
          n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
        (this.currentTarget = n.currentTarget),
        (this.relatedTarget = n.relatedTarget))
      : (this.type = n);
    t && i.extend(this, t);
    this.timeStamp = (n && n.timeStamp) || Date.now();
    this[i.expando] = !0;
  };
  i.Event.prototype = {
    constructor: i.Event,
    isDefaultPrevented: lt,
    isPropagationStopped: lt,
    isImmediatePropagationStopped: lt,
    isSimulated: !1,
    preventDefault: function () {
      var n = this.originalEvent;
      this.isDefaultPrevented = ct;
      n && !this.isSimulated && n.preventDefault();
    },
    stopPropagation: function () {
      var n = this.originalEvent;
      this.isPropagationStopped = ct;
      n && !this.isSimulated && n.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = ct;
      n && !this.isSimulated && n.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  i.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (n) {
        var t = n.button;
        return null == n.which && ye.test(n.type)
          ? null != n.charCode
            ? n.charCode
            : n.keyCode
          : !n.which && void 0 !== t && pe.test(n.type)
          ? 1 & t
            ? 1
            : 2 & t
            ? 3
            : 4 & t
            ? 2
            : 0
          : n.which;
      },
    },
    i.event.addProp,
  );
  i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
    i.event.special[n] = {
      setup: function () {
        return hi(this, n, we), !1;
      },
      trigger: function () {
        return hi(this, n), !0;
      },
      delegateType: t,
    };
  });
  i.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (n, t) {
      i.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function (n) {
          var u,
            r = n.relatedTarget,
            f = n.handleObj;
          return (
            (r && (r === this || i.contains(this, r))) ||
              ((n.type = f.origType),
              (u = f.handler.apply(this, arguments)),
              (n.type = t)),
            u
          );
        },
      };
    },
  );
  i.fn.extend({
    on: function (n, t, i, r) {
      return gi(this, n, t, i, r);
    },
    one: function (n, t, i, r) {
      return gi(this, n, t, i, r, 1);
    },
    off: function (n, t, r) {
      var u, f;
      if (n && n.preventDefault && n.handleObj)
        return (
          (u = n.handleObj),
          i(n.delegateTarget).off(
            u.namespace ? u.origType + "." + u.namespace : u.origType,
            u.selector,
            u.handler,
          ),
          this
        );
      if ("object" == typeof n) {
        for (f in n) this.off(f, t, n[f]);
        return this;
      }
      return (
        (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
        !1 === r && (r = lt),
        this.each(function () {
          i.event.remove(this, n, r, t);
        })
      );
    },
  });
  var be = /<script|<style|<link/i,
    ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  i.extend({
    htmlPrefilter: function (n) {
      return n;
    },
    clone: function (n, t, r) {
      var u,
        c,
        o,
        f,
        l,
        a,
        v,
        h = n.cloneNode(!0),
        y = st(n);
      if (
        !(
          e.noCloneChecked ||
          (1 !== n.nodeType && 11 !== n.nodeType) ||
          i.isXMLDoc(n)
        )
      )
        for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++)
          (l = o[u]),
            (a = f[u]),
            void 0,
            "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type)
              ? (a.checked = l.checked)
              : ("input" !== v && "textarea" !== v) ||
                (a.defaultValue = l.defaultValue);
      if (t)
        if (r)
          for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++)
            wu(o[u], f[u]);
        else wu(n, h);
      return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h;
    },
    cleanData: function (n) {
      for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
        if (ot(t)) {
          if ((u = t[r.expando])) {
            if (u.events)
              for (f in u.events)
                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
            t[r.expando] = void 0;
          }
          t[o.expando] && (t[o.expando] = void 0);
        }
    },
  });
  i.fn.extend({
    detach: function (n) {
      return bu(this, n, !0);
    },
    remove: function (n) {
      return bu(this, n);
    },
    text: function (n) {
      return w(
        this,
        function (n) {
          return void 0 === n
            ? i.text(this)
            : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = n);
              });
        },
        null,
        n,
        arguments.length,
      );
    },
    append: function () {
      return at(this, arguments, function (n) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          pu(this, n).appendChild(n);
      });
    },
    prepend: function () {
      return at(this, arguments, function (n) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var t = pu(this, n);
          t.insertBefore(n, t.firstChild);
        }
      });
    },
    before: function () {
      return at(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this);
      });
    },
    after: function () {
      return at(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
      });
    },
    empty: function () {
      for (var n, t = 0; null != (n = this[t]); t++)
        1 === n.nodeType && (i.cleanData(s(n, !1)), (n.textContent = ""));
      return this;
    },
    clone: function (n, t) {
      return (
        (n = null != n && n),
        (t = null == t ? n : t),
        this.map(function () {
          return i.clone(this, n, t);
        })
      );
    },
    html: function (n) {
      return w(
        this,
        function (n) {
          var t = this[0] || {},
            r = 0,
            u = this.length;
          if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
          if (
            "string" == typeof n &&
            !be.test(n) &&
            !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]
          ) {
            n = i.htmlPrefilter(n);
            try {
              for (; r < u; r++)
                1 === (t = this[r] || {}).nodeType &&
                  (i.cleanData(s(t, !1)), (t.innerHTML = n));
              t = 0;
            } catch (n) {}
          }
          t && this.empty().append(n);
        },
        null,
        n,
        arguments.length,
      );
    },
    replaceWith: function () {
      var n = [];
      return at(
        this,
        arguments,
        function (t) {
          var r = this.parentNode;
          i.inArray(this, n) < 0 &&
            (i.cleanData(s(this)), r && r.replaceChild(t, this));
        },
        n,
      );
    },
  });
  i.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (n, t) {
      i.fn[n] = function (n) {
        for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
          (u = r === o ? this : this.clone(!0)),
            i(e[r])[t](u),
            yi.apply(f, u.get());
        return this.pushStack(f);
      };
    },
  );
  var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
    ci = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = n), i.getComputedStyle(t);
    },
    ku = function (n, t, i) {
      var u,
        r,
        f = {};
      for (r in t) (f[r] = n.style[r]), (n.style[r] = t[r]);
      for (r in ((u = i.call(n)), t)) n.style[r] = f[r];
      return u;
    },
    to = new RegExp(b.join("|"), "i");
  !(function () {
    function r() {
      if (t) {
        s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        t.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        g.appendChild(s).appendChild(t);
        var i = n.getComputedStyle(t);
        h = "1%" !== i.top;
        v = 12 === u(i.marginLeft);
        t.style.right = "60%";
        a = 36 === u(i.right);
        c = 36 === u(i.width);
        t.style.position = "absolute";
        l = 12 === u(t.offsetWidth / 3);
        g.removeChild(s);
        t = null;
      }
    }
    function u(n) {
      return Math.round(parseFloat(n));
    }
    var h,
      c,
      l,
      a,
      o,
      v,
      s = f.createElement("div"),
      t = f.createElement("div");
    t.style &&
      ((t.style.backgroundClip = "content-box"),
      (t.cloneNode(!0).style.backgroundClip = ""),
      (e.clearCloneStyle = "content-box" === t.style.backgroundClip),
      i.extend(e, {
        boxSizingReliable: function () {
          return r(), c;
        },
        pixelBoxStyles: function () {
          return r(), a;
        },
        pixelPosition: function () {
          return r(), h;
        },
        reliableMarginLeft: function () {
          return r(), v;
        },
        scrollboxSize: function () {
          return r(), l;
        },
        reliableTrDimensions: function () {
          var t, i, r, u;
          return (
            null == o &&
              ((t = f.createElement("table")),
              (i = f.createElement("tr")),
              (r = f.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (i.style.height = "1px"),
              (r.style.height = "9px"),
              g.appendChild(t).appendChild(i).appendChild(r),
              (u = n.getComputedStyle(i)),
              (o = 3 < parseInt(u.height)),
              g.removeChild(t)),
            o
          );
        },
      }));
  })();
  var gu = ["Webkit", "Moz", "ms"],
    nf = f.createElement("div").style,
    tf = {};
  var io = /^(none|table(?!-c[ea]).+)/,
    rf = /^--/,
    ro = { position: "absolute", visibility: "hidden", display: "block" },
    uf = { letterSpacing: "0", fontWeight: "400" };
  i.extend({
    cssHooks: {
      opacity: {
        get: function (n, t) {
          if (t) {
            var i = ni(n, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (n, t, r, u) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var f,
          h,
          o,
          c = y(t),
          l = rf.test(t),
          s = n.style;
        if (
          (l || (t = tr(c)), (o = i.cssHooks[t] || i.cssHooks[c]), void 0 === r)
        )
          return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
        "string" == (h = typeof r) &&
          (f = kt.exec(r)) &&
          f[1] &&
          ((r = hu(n, t, f)), (h = "number"));
        null != r &&
          r == r &&
          ("number" !== h ||
            l ||
            (r += (f && f[3]) || (i.cssNumber[c] ? "" : "px")),
          e.clearCloneStyle ||
            "" !== r ||
            0 !== t.indexOf("background") ||
            (s[t] = "inherit"),
          (o && "set" in o && void 0 === (r = o.set(n, r, u))) ||
            (l ? s.setProperty(t, r) : (s[t] = r)));
      }
    },
    css: function (n, t, r, u) {
      var f,
        e,
        o,
        s = y(t);
      return (
        rf.test(t) || (t = tr(s)),
        (o = i.cssHooks[t] || i.cssHooks[s]) &&
          "get" in o &&
          (f = o.get(n, !0, r)),
        void 0 === f && (f = ni(n, t, u)),
        "normal" === f && t in uf && (f = uf[t]),
        "" === r || r
          ? ((e = parseFloat(f)), !0 === r || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  });
  i.each(["height", "width"], function (n, t) {
    i.cssHooks[t] = {
      get: function (n, r, u) {
        if (r)
          return !io.test(i.css(n, "display")) ||
            (n.getClientRects().length && n.getBoundingClientRect().width)
            ? ef(n, t, u)
            : ku(n, ro, function () {
                return ef(n, t, u);
              });
      },
      set: function (n, r, u) {
        var s,
          f = ci(n),
          h = !e.scrollboxSize() && "absolute" === f.position,
          c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
          o = u ? ir(n, t, u, c, f) : 0;
        return (
          c &&
            h &&
            (o -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] -
                parseFloat(f[t]) -
                ir(n, t, "border", !1, f) -
                0.5,
            )),
          o &&
            (s = kt.exec(r)) &&
            "px" !== (s[3] || "px") &&
            ((n.style[t] = r), (r = i.css(n, t))),
          ff(0, r, o)
        );
      },
    };
  });
  i.cssHooks.marginLeft = du(e.reliableMarginLeft, function (n, t) {
    if (t)
      return (
        (parseFloat(ni(n, "marginLeft")) ||
          n.getBoundingClientRect().left -
            ku(n, { marginLeft: 0 }, function () {
              return n.getBoundingClientRect().left;
            })) + "px"
      );
  });
  i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
    i.cssHooks[n + t] = {
      expand: function (i) {
        for (
          var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i];
          r < 4;
          r++
        )
          f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
        return f;
      },
    };
    "margin" !== n && (i.cssHooks[n + t].set = ff);
  });
  i.fn.extend({
    css: function (n, t) {
      return w(
        this,
        function (n, t, r) {
          var f,
            e,
            o = {},
            u = 0;
          if (Array.isArray(t)) {
            for (f = ci(n), e = t.length; u < e; u++)
              o[t[u]] = i.css(n, t[u], !1, f);
            return o;
          }
          return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
        },
        n,
        t,
        1 < arguments.length,
      );
    },
  });
  ((i.Tween = a).prototype = {
    constructor: a,
    init: function (n, t, r, u, f, e) {
      this.elem = n;
      this.prop = r;
      this.easing = f || i.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = u;
      this.unit = e || (i.cssNumber[r] ? "" : "px");
    },
    cur: function () {
      var n = a.propHooks[this.prop];
      return n && n.get ? n.get(this) : a.propHooks._default.get(this);
    },
    run: function (n) {
      var t,
        r = a.propHooks[this.prop];
      return (
        (this.pos = this.options.duration
          ? (t = i.easing[this.easing](
              n,
              this.options.duration * n,
              0,
              1,
              this.options.duration,
            ))
          : (t = n)),
        (this.now = (this.end - this.start) * t + this.start),
        this.options.step && this.options.step.call(this.elem, this.now, this),
        r && r.set ? r.set(this) : a.propHooks._default.set(this),
        this
      );
    },
  }).init.prototype = a.prototype;
  (a.propHooks = {
    _default: {
      get: function (n) {
        var t;
        return 1 !== n.elem.nodeType ||
          (null != n.elem[n.prop] && null == n.elem.style[n.prop])
          ? n.elem[n.prop]
          : (t = i.css(n.elem, n.prop, "")) && "auto" !== t
          ? t
          : 0;
      },
      set: function (n) {
        i.fx.step[n.prop]
          ? i.fx.step[n.prop](n)
          : 1 !== n.elem.nodeType ||
            (!i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)])
          ? (n.elem[n.prop] = n.now)
          : i.style(n.elem, n.prop, n.now + n.unit);
      },
    },
  }).scrollTop = a.propHooks.scrollLeft = {
    set: function (n) {
      n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
    },
  };
  i.easing = {
    linear: function (n) {
      return n;
    },
    swing: function (n) {
      return 0.5 - Math.cos(n * Math.PI) / 2;
    },
    _default: "swing",
  };
  i.fx = a.prototype.init;
  i.fx.step = {};
  sf = /^(?:toggle|show|hide)$/;
  hf = /queueHooks$/;
  i.Animation = i.extend(v, {
    tweeners: {
      "*": [
        function (n, t) {
          var i = this.createTween(n, t);
          return hu(i.elem, n, kt.exec(t), i), i;
        },
      ],
    },
    tweener: function (n, t) {
      u(n) ? ((t = n), (n = ["*"])) : (n = n.match(l));
      for (var i, r = 0, f = n.length; r < f; r++)
        (i = n[r]),
          (v.tweeners[i] = v.tweeners[i] || []),
          v.tweeners[i].unshift(t);
    },
    prefilters: [
      function (n, t, u) {
        var f,
          y,
          w,
          c,
          b,
          h,
          o,
          l,
          k = "width" in t || "height" in t,
          v = this,
          p = {},
          s = n.style,
          a = n.nodeType && dt(n),
          e = r.get(n, "fxshow");
        for (f in (u.queue ||
          (null == (c = i._queueHooks(n, "fx")).unqueued &&
            ((c.unqueued = 0),
            (b = c.empty.fire),
            (c.empty.fire = function () {
              c.unqueued || b();
            })),
          c.unqueued++,
          v.always(function () {
            v.always(function () {
              c.unqueued--;
              i.queue(n, "fx").length || c.empty.fire();
            });
          })),
        t))
          if (((y = t[f]), sf.test(y))) {
            if (
              (delete t[f],
              (w = w || "toggle" === y),
              y === (a ? "hide" : "show"))
            ) {
              if ("show" !== y || !e || void 0 === e[f]) continue;
              a = !0;
            }
            p[f] = (e && e[f]) || i.style(n, f);
          }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
          for (f in (k &&
            1 === n.nodeType &&
            ((u.overflow = [s.overflow, s.overflowX, s.overflowY]),
            null == (o = e && e.display) && (o = r.get(n, "display")),
            "none" === (l = i.css(n, "display")) &&
              (o
                ? (l = o)
                : (ht([n], !0),
                  (o = n.style.display || o),
                  (l = i.css(n, "display")),
                  ht([n]))),
            ("inline" === l || ("inline-block" === l && null != o)) &&
              "none" === i.css(n, "float") &&
              (h ||
                (v.done(function () {
                  s.display = o;
                }),
                null == o && ((l = s.display), (o = "none" === l ? "" : l))),
              (s.display = "inline-block"))),
          u.overflow &&
            ((s.overflow = "hidden"),
            v.always(function () {
              s.overflow = u.overflow[0];
              s.overflowX = u.overflow[1];
              s.overflowY = u.overflow[2];
            })),
          (h = !1),
          p))
            h ||
              (e
                ? "hidden" in e && (a = e.hidden)
                : (e = r.access(n, "fxshow", { display: o })),
              w && (e.hidden = !a),
              a && ht([n], !0),
              v.done(function () {
                for (f in (a || ht([n]), r.remove(n, "fxshow"), p))
                  i.style(n, f, p[f]);
              })),
              (h = lf(a ? e[f] : 0, f, v)),
              f in e ||
                ((e[f] = h.start), a && ((h.end = h.start), (h.start = 0)));
      },
    ],
    prefilter: function (n, t) {
      t ? v.prefilters.unshift(n) : v.prefilters.push(n);
    },
  });
  i.speed = function (n, t, r) {
    var f =
      n && "object" == typeof n
        ? i.extend({}, n)
        : {
            complete: r || (!r && t) || (u(n) && n),
            duration: n,
            easing: (r && t) || (t && !u(t) && t),
          };
    return (
      i.fx.off
        ? (f.duration = 0)
        : "number" != typeof f.duration &&
          (f.duration =
            f.duration in i.fx.speeds
              ? i.fx.speeds[f.duration]
              : i.fx.speeds._default),
      (null != f.queue && !0 !== f.queue) || (f.queue = "fx"),
      (f.old = f.complete),
      (f.complete = function () {
        u(f.old) && f.old.call(this);
        f.queue && i.dequeue(this, f.queue);
      }),
      f
    );
  };
  i.fn.extend({
    fadeTo: function (n, t, i, r) {
      return this.filter(dt)
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, n, i, r);
    },
    animate: function (n, t, u, f) {
      var s = i.isEmptyObject(n),
        o = i.speed(t, u, f),
        e = function () {
          var t = v(this, i.extend({}, n), o);
          (s || r.get(this, "finish")) && t.stop(!0);
        };
      return (
        (e.finish = e),
        s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
      );
    },
    stop: function (n, t, u) {
      var f = function (n) {
        var t = n.stop;
        delete n.stop;
        t(u);
      };
      return (
        "string" != typeof n && ((u = t), (t = n), (n = void 0)),
        t && this.queue(n || "fx", []),
        this.each(function () {
          var s = !0,
            t = null != n && n + "queueHooks",
            o = i.timers,
            e = r.get(this);
          if (t) e[t] && e[t].stop && f(e[t]);
          else for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
          for (t = o.length; t--; )
            o[t].elem !== this ||
              (null != n && o[t].queue !== n) ||
              (o[t].anim.stop(u), (s = !1), o.splice(t, 1));
          (!s && u) || i.dequeue(this, n);
        })
      );
    },
    finish: function (n) {
      return (
        !1 !== n && (n = n || "fx"),
        this.each(function () {
          var t,
            e = r.get(this),
            u = e[n + "queue"],
            o = e[n + "queueHooks"],
            f = i.timers,
            s = u ? u.length : 0;
          for (
            e.finish = !0,
              i.queue(this, n, []),
              o && o.stop && o.stop.call(this, !0),
              t = f.length;
            t--;

          )
            f[t].elem === this &&
              f[t].queue === n &&
              (f[t].anim.stop(!0), f.splice(t, 1));
          for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
          delete e.finish;
        })
      );
    },
  });
  i.each(["toggle", "show", "hide"], function (n, t) {
    var r = i.fn[t];
    i.fn[t] = function (n, i, u) {
      return null == n || "boolean" == typeof n
        ? r.apply(this, arguments)
        : this.animate(ai(t, !0), n, i, u);
    };
  });
  i.each(
    {
      slideDown: ai("show"),
      slideUp: ai("hide"),
      slideToggle: ai("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (n, t) {
      i.fn[n] = function (n, i, r) {
        return this.animate(t, n, i, r);
      };
    },
  );
  i.timers = [];
  i.fx.tick = function () {
    var r,
      n = 0,
      t = i.timers;
    for (vt = Date.now(); n < t.length; n++)
      (r = t[n])() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    vt = void 0;
  };
  i.fx.timer = function (n) {
    i.timers.push(n);
    i.fx.start();
  };
  i.fx.interval = 13;
  i.fx.start = function () {
    li || ((li = !0), rr());
  };
  i.fx.stop = function () {
    li = null;
  };
  i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
  i.fn.delay = function (t, r) {
    return (
      (t = (i.fx && i.fx.speeds[t]) || t),
      (r = r || "fx"),
      this.queue(r, function (i, r) {
        var u = n.setTimeout(i, t);
        r.stop = function () {
          n.clearTimeout(u);
        };
      })
    );
  };
  yt = f.createElement("input");
  of = f.createElement("select").appendChild(f.createElement("option"));
  yt.type = "checkbox";
  e.checkOn = "" !== yt.value;
  e.optSelected = of.selected;
  (yt = f.createElement("input")).value = "t";
  yt.type = "radio";
  e.radioValue = "t" === yt.value;
  pt = i.expr.attrHandle;
  i.fn.extend({
    attr: function (n, t) {
      return w(this, i.attr, n, t, 1 < arguments.length);
    },
    removeAttr: function (n) {
      return this.each(function () {
        i.removeAttr(this, n);
      });
    },
  });
  i.extend({
    attr: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return "undefined" == typeof n.getAttribute
          ? i.prop(n, t, r)
          : ((1 === e && i.isXMLDoc(n)) ||
              (u =
                i.attrHooks[t.toLowerCase()] ||
                (i.expr.match.bool.test(t) ? af : void 0)),
            void 0 !== r
              ? null === r
                ? void i.removeAttr(n, t)
                : u && "set" in u && void 0 !== (f = u.set(n, r, t))
                ? f
                : (n.setAttribute(t, r + ""), r)
              : u && "get" in u && null !== (f = u.get(n, t))
              ? f
              : null == (f = i.find.attr(n, t))
              ? void 0
              : f);
    },
    attrHooks: {
      type: {
        set: function (n, t) {
          if (!e.radioValue && "radio" === t && c(n, "input")) {
            var i = n.value;
            return n.setAttribute("type", t), i && (n.value = i), t;
          }
        },
      },
    },
    removeAttr: function (n, t) {
      var i,
        u = 0,
        r = t && t.match(l);
      if (r && 1 === n.nodeType) while ((i = r[u++])) n.removeAttribute(i);
    },
  });
  af = {
    set: function (n, t, r) {
      return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
    },
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
    var r = pt[t] || i.find.attr;
    pt[t] = function (n, t, i) {
      var f,
        e,
        u = t.toLowerCase();
      return (
        i ||
          ((e = pt[u]),
          (pt[u] = f),
          (f = null != r(n, t, i) ? u : null),
          (pt[u] = e)),
        f
      );
    };
  });
  vf = /^(?:input|select|textarea|button)$/i;
  yf = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function (n, t) {
      return w(this, i.prop, n, t, 1 < arguments.length);
    },
    removeProp: function (n) {
      return this.each(function () {
        delete this[i.propFix[n] || n];
      });
    },
  });
  i.extend({
    prop: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return (
          (1 === e && i.isXMLDoc(n)) ||
            ((t = i.propFix[t] || t), (u = i.propHooks[t])),
          void 0 !== r
            ? u && "set" in u && void 0 !== (f = u.set(n, r, t))
              ? f
              : (n[t] = r)
            : u && "get" in u && null !== (f = u.get(n, t))
            ? f
            : n[t]
        );
    },
    propHooks: {
      tabIndex: {
        get: function (n) {
          var t = i.find.attr(n, "tabindex");
          return t
            ? parseInt(t, 10)
            : vf.test(n.nodeName) || (yf.test(n.nodeName) && n.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: { for: "htmlFor", class: "className" },
  });
  e.optSelected ||
    (i.propHooks.selected = {
      get: function (n) {
        var t = n.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (n) {
        var t = n.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      },
    });
  i.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable",
    ],
    function () {
      i.propFix[this.toLowerCase()] = this;
    },
  );
  i.fn.extend({
    addClass: function (n) {
      var o,
        t,
        r,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).addClass(n.call(this, t, it(this)));
        });
      if ((o = ur(n)).length)
        while ((t = this[c++]))
          if (((f = it(t)), (r = 1 === t.nodeType && " " + tt(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              r.indexOf(" " + e + " ") < 0 && (r += e + " ");
            f !== (h = tt(r)) && t.setAttribute("class", h);
          }
      return this;
    },
    removeClass: function (n) {
      var o,
        r,
        t,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).removeClass(n.call(this, t, it(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((o = ur(n)).length)
        while ((r = this[c++]))
          if (((f = it(r)), (t = 1 === r.nodeType && " " + tt(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              while (-1 < t.indexOf(" " + e + " "))
                t = t.replace(" " + e + " ", " ");
            f !== (h = tt(t)) && r.setAttribute("class", h);
          }
      return this;
    },
    toggleClass: function (n, t) {
      var f = typeof n,
        e = "string" === f || Array.isArray(n);
      return "boolean" == typeof t && e
        ? t
          ? this.addClass(n)
          : this.removeClass(n)
        : u(n)
        ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, it(this), t), t);
          })
        : this.each(function () {
            var t, o, u, s;
            if (e)
              for (o = 0, u = i(this), s = ur(n); (t = s[o++]); )
                u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
            else
              (void 0 !== n && "boolean" !== f) ||
                ((t = it(this)) && r.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || !1 === n ? "" : r.get(this, "__className__") || "",
                  ));
          });
    },
    hasClass: function (n) {
      for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
        if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i))
          return !0;
      return !1;
    },
  });
  pf = /\r/g;
  i.fn.extend({
    val: function (n) {
      var t,
        r,
        e,
        f = this[0];
      return arguments.length
        ? ((e = u(n)),
          this.each(function (r) {
            var u;
            1 === this.nodeType &&
              (null == (u = e ? n.call(this, r, i(this).val()) : n)
                ? (u = "")
                : "number" == typeof u
                ? (u += "")
                : Array.isArray(u) &&
                  (u = i.map(u, function (n) {
                    return null == n ? "" : n + "";
                  })),
              ((t =
                i.valHooks[this.type] ||
                i.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, u, "value")) ||
                (this.value = u));
          }))
        : f
        ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (r = t.get(f, "value"))
          ? r
          : "string" == typeof (r = f.value)
          ? r.replace(pf, "")
          : null == r
          ? ""
          : r
        : void 0;
    },
  });
  i.extend({
    valHooks: {
      option: {
        get: function (n) {
          var t = i.find.attr(n, "value");
          return null != t ? t : tt(i.text(n));
        },
      },
      select: {
        get: function (n) {
          for (
            var e,
              t,
              o = n.options,
              u = n.selectedIndex,
              f = "select-one" === n.type,
              s = f ? null : [],
              h = f ? u + 1 : o.length,
              r = u < 0 ? h : f ? u : 0;
            r < h;
            r++
          )
            if (
              ((t = o[r]).selected || r === u) &&
              !t.disabled &&
              (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))
            ) {
              if (((e = i(t).val()), f)) return e;
              s.push(e);
            }
          return s;
        },
        set: function (n, t) {
          for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
            ((u = f[o]).selected =
              -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
          return r || (n.selectedIndex = -1), e;
        },
      },
    },
  });
  i.each(["radio", "checkbox"], function () {
    i.valHooks[this] = {
      set: function (n, t) {
        if (Array.isArray(t))
          return (n.checked = -1 < i.inArray(i(n).val(), t));
      },
    };
    e.checkOn ||
      (i.valHooks[this].get = function (n) {
        return null === n.getAttribute("value") ? "on" : n.value;
      });
  });
  e.focusin = "onfocusin" in n;
  fr = /^(?:focusinfocus|focusoutblur)$/;
  er = function (n) {
    n.stopPropagation();
  };
  i.extend(i.event, {
    trigger: function (t, e, o, s) {
      var k,
        c,
        l,
        d,
        v,
        y,
        a,
        p,
        w = [o || f],
        h = ui.call(t, "type") ? t.type : t,
        b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((c = p = l = o = o || f),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !fr.test(h + i.event.triggered) &&
          (-1 < h.indexOf(".") && ((h = (b = h.split(".")).shift()), b.sort()),
          (v = h.indexOf(":") < 0 && "on" + h),
          ((t = t[i.expando]
            ? t
            : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (e = null == e ? [t] : i.makeArray(e, [t])),
          (a = i.event.special[h] || {}),
          s || !a.trigger || !1 !== a.trigger.apply(o, e)))
      ) {
        if (!s && !a.noBubble && !rt(o)) {
          for (
            d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            w.push(c), (l = c);
          l === (o.ownerDocument || f) &&
            w.push(l.defaultView || l.parentWindow || n);
        }
        for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
          (p = c),
            (t.type = 1 < k ? d : a.bindType || h),
            (y =
              (r.get(c, "events") || Object.create(null))[t.type] &&
              r.get(c, "handle")) && y.apply(c, e),
            (y = v && c[v]) &&
              y.apply &&
              ot(c) &&
              ((t.result = y.apply(c, e)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          s ||
            t.isDefaultPrevented() ||
            (a._default && !1 !== a._default.apply(w.pop(), e)) ||
            !ot(o) ||
            (v &&
              u(o[h]) &&
              !rt(o) &&
              ((l = o[v]) && (o[v] = null),
              (i.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, er),
              o[h](),
              t.isPropagationStopped() && p.removeEventListener(h, er),
              (i.event.triggered = void 0),
              l && (o[v] = l))),
          t.result
        );
      }
    },
    simulate: function (n, t, r) {
      var u = i.extend(new i.Event(), r, { type: n, isSimulated: !0 });
      i.event.trigger(u, null, t);
    },
  });
  i.fn.extend({
    trigger: function (n, t) {
      return this.each(function () {
        i.event.trigger(n, t, this);
      });
    },
    triggerHandler: function (n, t) {
      var r = this[0];
      if (r) return i.event.trigger(n, t, r, !0);
    },
  });
  e.focusin ||
    i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
      var u = function (n) {
        i.event.simulate(t, n.target, i.event.fix(n));
      };
      i.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this.document || this,
            f = r.access(i, t);
          f || i.addEventListener(n, u, !0);
          r.access(i, t, (f || 0) + 1);
        },
        teardown: function () {
          var i = this.ownerDocument || this.document || this,
            f = r.access(i, t) - 1;
          f
            ? r.access(i, t, f)
            : (i.removeEventListener(n, u, !0), r.remove(i, t));
        },
      };
    });
  var ti = n.location,
    wf = { guid: Date.now() },
    or = /\?/;
  i.parseXML = function (t) {
    var r;
    if (!t || "string" != typeof t) return null;
    try {
      r = new n.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      r = void 0;
    }
    return (
      (r && !r.getElementsByTagName("parsererror").length) ||
        i.error("Invalid XML: " + t),
      r
    );
  };
  var uo = /\[\]$/,
    bf = /\r?\n/g,
    fo = /^(?:submit|button|image|reset|file)$/i,
    eo = /^(?:input|select|textarea|keygen)/i;
  i.param = function (n, t) {
    var r,
      f = [],
      e = function (n, t) {
        var i = u(t) ? t() : t;
        f[f.length] =
          encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (null == n) return "";
    if (Array.isArray(n) || (n.jquery && !i.isPlainObject(n)))
      i.each(n, function () {
        e(this.name, this.value);
      });
    else for (r in n) sr(r, n[r], t, e);
    return f.join("&");
  };
  i.fn.extend({
    serialize: function () {
      return i.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var n = i.prop(this, "elements");
        return n ? i.makeArray(n) : this;
      })
        .filter(function () {
          var n = this.type;
          return (
            this.name &&
            !i(this).is(":disabled") &&
            eo.test(this.nodeName) &&
            !fo.test(n) &&
            (this.checked || !gt.test(n))
          );
        })
        .map(function (n, t) {
          var r = i(this).val();
          return null == r
            ? null
            : Array.isArray(r)
            ? i.map(r, function (n) {
                return { name: t.name, value: n.replace(bf, "\r\n") };
              })
            : { name: t.name, value: r.replace(bf, "\r\n") };
        })
        .get();
    },
  });
  var oo = /%20/g,
    so = /#.*$/,
    ho = /([?&])_=[^&]*/,
    co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    lo = /^(?:GET|HEAD)$/,
    ao = /^\/\//,
    kf = {},
    hr = {},
    df = "*/".concat("*"),
    cr = f.createElement("a");
  return (
    (cr.href = ti.href),
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ti.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ti.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": df,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (n, t) {
        return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n);
      },
      ajaxPrefilter: gf(kf),
      ajaxTransport: gf(hr),
      ajax: function (t, r) {
        function b(t, r, f, c) {
          var v,
            rt,
            b,
            p,
            g,
            l = r;
          s ||
            ((s = !0),
            d && n.clearTimeout(d),
            (a = void 0),
            (k = c || ""),
            (e.readyState = 0 < t ? 4 : 0),
            (v = (200 <= t && t < 300) || 304 === t),
            f &&
              (p = (function (n, t, i) {
                for (
                  var e, u, f, o, s = n.contents, r = n.dataTypes;
                  "*" === r[0];

                )
                  r.shift(),
                    void 0 === e &&
                      (e = n.mimeType || t.getResponseHeader("Content-Type"));
                if (e)
                  for (u in s)
                    if (s[u] && s[u].test(e)) {
                      r.unshift(u);
                      break;
                    }
                if (r[0] in i) f = r[0];
                else {
                  for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                      f = u;
                      break;
                    }
                    o || (o = u);
                  }
                  f = f || o;
                }
                if (f) return f !== r[0] && r.unshift(f), i[f];
              })(u, e, f)),
            !v &&
              -1 < i.inArray("script", u.dataTypes) &&
              (u.converters["text script"] = function () {}),
            (p = (function (n, t, i, r) {
              var h,
                u,
                f,
                s,
                e,
                o = {},
                c = n.dataTypes.slice();
              if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
              for (u = c.shift(); u; )
                if (
                  (n.responseFields[u] && (i[n.responseFields[u]] = t),
                  !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                  (e = u),
                  (u = c.shift()))
                )
                  if ("*" === u) u = e;
                  else if ("*" !== e && e !== u) {
                    if (!(f = o[e + " " + u] || o["* " + u]))
                      for (h in o)
                        if (
                          (s = h.split(" "))[1] === u &&
                          (f = o[e + " " + s[0]] || o["* " + s[0]])
                        ) {
                          !0 === f
                            ? (f = o[h])
                            : !0 !== o[h] && ((u = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== f)
                      if (f && n.throws) t = f(t);
                      else
                        try {
                          t = f(t);
                        } catch (n) {
                          return {
                            state: "parsererror",
                            error: f
                              ? n
                              : "No conversion from " + e + " to " + u,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(u, p, e, v)),
            v
              ? (u.ifModified &&
                  ((g = e.getResponseHeader("Last-Modified")) &&
                    (i.lastModified[o] = g),
                  (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type
                  ? (l = "nocontent")
                  : 304 === t
                  ? (l = "notmodified")
                  : ((l = p.state), (rt = p.data), (v = !(b = p.error))))
              : ((b = l), (!t && l) || ((l = "error"), t < 0 && (t = 0))),
            (e.status = t),
            (e.statusText = (r || l) + ""),
            v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
            e.statusCode(w),
            (w = void 0),
            y &&
              nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
            it.fireWith(h, [e, l]),
            y &&
              (nt.trigger("ajaxComplete", [e, u]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((r = t), (t = void 0));
        r = r || {};
        var a,
          o,
          k,
          v,
          d,
          c,
          s,
          y,
          g,
          p,
          u = i.ajaxSetup({}, r),
          h = u.context || u,
          nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          tt = i.Deferred(),
          it = i.Callbacks("once memory"),
          w = u.statusCode || {},
          rt = {},
          ut = {},
          ft = "canceled",
          e = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (s) {
                if (!v)
                  for (v = {}; (t = co.exec(k)); )
                    v[t[1].toLowerCase() + " "] = (
                      v[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = v[n.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return s ? k : null;
            },
            setRequestHeader: function (n, t) {
              return (
                null == s &&
                  ((n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n),
                  (rt[n] = t)),
                this
              );
            },
            overrideMimeType: function (n) {
              return null == s && (u.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (s) e.always(n[e.status]);
                else for (t in n) w[t] = [w[t], n[t]];
              return this;
            },
            abort: function (n) {
              var t = n || ft;
              return a && a.abort(t), b(0, t), this;
            },
          };
        if (
          (tt.promise(e),
          (u.url = ((t || u.url || ti.href) + "").replace(
            ao,
            ti.protocol + "//",
          )),
          (u.type = r.method || r.type || u.method || u.type),
          (u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""]),
          null == u.crossDomain)
        ) {
          c = f.createElement("a");
          try {
            c.href = u.url;
            c.href = c.href;
            u.crossDomain =
              cr.protocol + "//" + cr.host != c.protocol + "//" + c.host;
          } catch (t) {
            u.crossDomain = !0;
          }
        }
        if (
          (u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = i.param(u.data, u.traditional)),
          ne(kf, u, r, e),
          s)
        )
          return e;
        for (g in ((y = i.event && u.global) &&
          0 == i.active++ &&
          i.event.trigger("ajaxStart"),
        (u.type = u.type.toUpperCase()),
        (u.hasContent = !lo.test(u.type)),
        (o = u.url.replace(so, "")),
        u.hasContent
          ? u.data &&
            u.processData &&
            0 ===
              (u.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (u.data = u.data.replace(oo, "+"))
          : ((p = u.url.slice(o.length)),
            u.data &&
              (u.processData || "string" == typeof u.data) &&
              ((o += (or.test(o) ? "&" : "?") + u.data), delete u.data),
            !1 === u.cache &&
              ((o = o.replace(ho, "$1")),
              (p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p)),
            (u.url = o + p)),
        u.ifModified &&
          (i.lastModified[o] &&
            e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
          i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
        ((u.data && u.hasContent && !1 !== u.contentType) || r.contentType) &&
          e.setRequestHeader("Content-Type", u.contentType),
        e.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "")
            : u.accepts["*"],
        ),
        u.headers))
          e.setRequestHeader(g, u.headers[g]);
        if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
          return e.abort();
        if (
          ((ft = "abort"),
          it.add(u.complete),
          e.done(u.success),
          e.fail(u.error),
          (a = ne(hr, u, r, e)))
        ) {
          if (((e.readyState = 1), y && nt.trigger("ajaxSend", [e, u]), s))
            return e;
          u.async &&
            0 < u.timeout &&
            (d = n.setTimeout(function () {
              e.abort("timeout");
            }, u.timeout));
          try {
            s = !1;
            a.send(rt, b);
          } catch (t) {
            if (s) throw t;
            b(-1, t);
          }
        } else b(-1, "No Transport");
        return e;
      },
      getJSON: function (n, t, r) {
        return i.get(n, t, r, "json");
      },
      getScript: function (n, t) {
        return i.get(n, void 0, t, "script");
      },
    }),
    i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, f, e) {
        return (
          u(r) && ((e = e || f), (f = r), (r = void 0)),
          i.ajax(
            i.extend(
              { url: n, type: t, dataType: e, data: r, success: f },
              i.isPlainObject(n) && n,
            ),
          )
        );
      };
    }),
    i.ajaxPrefilter(function (n) {
      for (var t in n.headers)
        "content-type" === t.toLowerCase() &&
          (n.contentType = n.headers[t] || "");
    }),
    (i._evalUrl = function (n, t, r) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (n) {
          i.globalEval(n, t, r);
        },
      });
    }),
    i.fn.extend({
      wrapAll: function (n) {
        var t;
        return (
          this[0] &&
            (u(n) && (n = n.call(this[0])),
            (t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var n = this; n.firstElementChild; )
                  n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return u(n)
          ? this.each(function (t) {
              i(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = i(this),
                r = t.contents();
              r.length ? r.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (n) {
        var t = u(n);
        return this.each(function (r) {
          i(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              i(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (i.expr.pseudos.hidden = function (n) {
      return !i.expr.pseudos.visible(n);
    }),
    (i.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (i.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    }),
    (te = { 0: 200, 1223: 204 }),
    (wt = i.ajaxSettings.xhr()),
    (e.cors = !!wt && "withCredentials" in wt),
    (e.ajax = wt = !!wt),
    i.ajaxTransport(function (t) {
      var i, r;
      if (e.cors || (wt && !t.crossDomain))
        return {
          send: function (u, f) {
            var o,
              e = t.xhr();
            if (
              (e.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) e[o] = t.xhrFields[o];
            for (o in (t.mimeType &&
              e.overrideMimeType &&
              e.overrideMimeType(t.mimeType),
            t.crossDomain ||
              u["X-Requested-With"] ||
              (u["X-Requested-With"] = "XMLHttpRequest"),
            u))
              e.setRequestHeader(o, u[o]);
            i = function (n) {
              return function () {
                i &&
                  ((i =
                    r =
                    e.onload =
                    e.onerror =
                    e.onabort =
                    e.ontimeout =
                    e.onreadystatechange =
                      null),
                  "abort" === n
                    ? e.abort()
                    : "error" === n
                    ? "number" != typeof e.status
                      ? f(0, "error")
                      : f(e.status, e.statusText)
                    : f(
                        te[e.status] || e.status,
                        e.statusText,
                        "text" !== (e.responseType || "text") ||
                          "string" != typeof e.responseText
                          ? { binary: e.response }
                          : { text: e.responseText },
                        e.getAllResponseHeaders(),
                      ));
              };
            };
            e.onload = i();
            r = e.onerror = e.ontimeout = i("error");
            void 0 !== e.onabort
              ? (e.onabort = r)
              : (e.onreadystatechange = function () {
                  4 === e.readyState &&
                    n.setTimeout(function () {
                      i && r();
                    });
                });
            i = i("abort");
            try {
              e.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (i) throw u;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    i.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    i.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (n) {
          return i.globalEval(n), n;
        },
      },
    }),
    i.ajaxPrefilter("script", function (n) {
      void 0 === n.cache && (n.cache = !1);
      n.crossDomain && (n.type = "GET");
    }),
    i.ajaxTransport("script", function (n) {
      var r, t;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (u, e) {
            r = i("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (t = function (n) {
                  r.remove();
                  t = null;
                  n && e("error" === n.type ? 404 : 200, n.type);
                }),
              );
            f.head.appendChild(r[0]);
          },
          abort: function () {
            t && t();
          },
        };
    }),
    (ar = []),
    (vi = /(=)\?(?=&|$)|\?\?/),
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var n = ar.pop() || i.expando + "_" + wf.guid++;
        return (this[n] = !0), n;
      },
    }),
    i.ajaxPrefilter("json jsonp", function (t, r, f) {
      var e,
        o,
        s,
        h =
          !1 !== t.jsonp &&
          (vi.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              vi.test(t.data) &&
              "data");
      if (h || "jsonp" === t.dataTypes[0])
        return (
          (e = t.jsonpCallback =
            u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          h
            ? (t[h] = t[h].replace(vi, "$1" + e))
            : !1 !== t.jsonp &&
              (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
          (t.converters["script json"] = function () {
            return s || i.error(e + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = n[e]),
          (n[e] = function () {
            s = arguments;
          }),
          f.always(function () {
            void 0 === o ? i(n).removeProp(e) : (n[e] = o);
            t[e] && ((t.jsonpCallback = r.jsonpCallback), ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0;
          }),
          "script"
        );
    }),
    (e.createHTMLDocument =
      (((ie = f.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === ie.childNodes.length)),
    (i.parseHTML = function (n, t, r) {
      return "string" != typeof n
        ? []
        : ("boolean" == typeof t && ((r = t), (t = !1)),
          t ||
            (e.createHTMLDocument
              ? (((s = (t =
                  f.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = f.location.href),
                t.head.appendChild(s))
              : (t = f)),
          (u = !r && []),
          (o = wi.exec(n))
            ? [t.createElement(o[1])]
            : ((o = vu([n], t, u)),
              u && u.length && i(u).remove(),
              i.merge([], o.childNodes)));
      var s, o, u;
    }),
    (i.fn.load = function (n, t, r) {
      var f,
        s,
        h,
        e = this,
        o = n.indexOf(" ");
      return (
        -1 < o && ((f = tt(n.slice(o))), (n = n.slice(0, o))),
        u(t)
          ? ((r = t), (t = void 0))
          : t && "object" == typeof t && (s = "POST"),
        0 < e.length &&
          i
            .ajax({ url: n, type: s || "GET", dataType: "html", data: t })
            .done(function (n) {
              h = arguments;
              e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
            })
            .always(
              r &&
                function (n, t) {
                  e.each(function () {
                    r.apply(this, h || [n.responseText, t, n]);
                  });
                },
            ),
        this
      );
    }),
    (i.expr.pseudos.animated = function (n) {
      return i.grep(i.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (i.offset = {
      setOffset: function (n, t, r) {
        var v,
          o,
          s,
          h,
          e,
          c,
          l = i.css(n, "position"),
          a = i(n),
          f = {};
        "static" === l && (n.style.position = "relative");
        e = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto")
          ? ((h = (v = a.position()).top), (o = v.left))
          : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
        u(t) && (t = t.call(n, r, i.extend({}, e)));
        null != t.top && (f.top = t.top - e.top + h);
        null != t.left && (f.left = t.left - e.left + o);
        "using" in t
          ? t.using.call(n, f)
          : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            a.css(f));
      },
    }),
    i.fn.extend({
      offset: function (n) {
        if (arguments.length)
          return void 0 === n
            ? this
            : this.each(function (t) {
                i.offset.setOffset(this, n, t);
              });
        var r,
          u,
          t = this[0];
        if (t)
          return t.getClientRects().length
            ? ((r = t.getBoundingClientRect()),
              (u = t.ownerDocument.defaultView),
              { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var n,
            r,
            u,
            t = this[0],
            f = { top: 0, left: 0 };
          if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
          else {
            for (
              r = this.offset(),
                u = t.ownerDocument,
                n = t.offsetParent || u.documentElement;
              n &&
              (n === u.body || n === u.documentElement) &&
              "static" === i.css(n, "position");

            )
              n = n.parentNode;
            n &&
              n !== t &&
              1 === n.nodeType &&
              (((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0)),
              (f.left += i.css(n, "borderLeftWidth", !0)));
          }
          return {
            top: r.top - f.top - i.css(t, "marginTop", !0),
            left: r.left - f.left - i.css(t, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var n = this.offsetParent;
            n && "static" === i.css(n, "position");

          )
            n = n.offsetParent;
          return n || g;
        });
      },
    }),
    i.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
          return w(
            this,
            function (n, i, u) {
              var f;
              if (
                (rt(n) ? (f = n) : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
              )
                return f ? f[t] : n[i];
              f
                ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset)
                : (n[i] = u);
            },
            n,
            i,
            arguments.length,
          );
        };
      },
    ),
    i.each(["top", "left"], function (n, t) {
      i.cssHooks[t] = du(e.pixelPosition, function (n, r) {
        if (r)
          return (r = ni(n, t)), nr.test(r) ? i(n).position()[t] + "px" : r;
      });
    }),
    i.each({ Height: "height", Width: "width" }, function (n, t) {
      i.each(
        { padding: "inner" + n, content: t, "": "outer" + n },
        function (r, u) {
          i.fn[u] = function (f, e) {
            var o = arguments.length && (r || "boolean" != typeof f),
              s = r || (!0 === f || !0 === e ? "margin" : "border");
            return w(
              this,
              function (t, r, f) {
                var e;
                return rt(t)
                  ? 0 === u.indexOf("outer")
                    ? t["inner" + n]
                    : t.document.documentElement["client" + n]
                  : 9 === t.nodeType
                  ? ((e = t.documentElement),
                    Math.max(
                      t.body["scroll" + n],
                      e["scroll" + n],
                      t.body["offset" + n],
                      e["offset" + n],
                      e["client" + n],
                    ))
                  : void 0 === f
                  ? i.css(t, r, s)
                  : i.style(t, r, f, s);
              },
              t,
              o ? f : void 0,
              o,
            );
          };
        },
      );
    }),
    i.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (n, t) {
        i.fn[t] = function (n) {
          return this.on(t, n);
        };
      },
    ),
    i.fn.extend({
      bind: function (n, t, i) {
        return this.on(n, null, t, i);
      },
      unbind: function (n, t) {
        return this.off(n, null, t);
      },
      delegate: function (n, t, i, r) {
        return this.on(t, n, i, r);
      },
      undelegate: function (n, t, i) {
        return 1 === arguments.length
          ? this.off(n, "**")
          : this.off(t, n || "**", i);
      },
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      },
    }),
    i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (n, t) {
        i.fn[t] = function (n, i) {
          return 0 < arguments.length
            ? this.on(t, null, n, i)
            : this.trigger(t);
        };
      },
    ),
    (re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
    (i.proxy = function (n, t) {
      var r, f, e;
      if (("string" == typeof t && ((r = n[t]), (t = n), (n = r)), u(n)))
        return (
          (f = k.call(arguments, 2)),
          ((e = function () {
            return n.apply(t || this, f.concat(k.call(arguments)));
          }).guid = n.guid =
            n.guid || i.guid++),
          e
        );
    }),
    (i.holdReady = function (n) {
      n ? i.readyWait++ : i.ready(!0);
    }),
    (i.isArray = Array.isArray),
    (i.parseJSON = JSON.parse),
    (i.nodeName = c),
    (i.isFunction = u),
    (i.isWindow = rt),
    (i.camelCase = y),
    (i.type = ut),
    (i.now = Date.now),
    (i.isNumeric = function (n) {
      var t = i.type(n);
      return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
    }),
    (i.trim = function (n) {
      return null == n ? "" : (n + "").replace(re, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return i;
      }),
    (ue = n.jQuery),
    (fe = n.$),
    (i.noConflict = function (t) {
      return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i;
    }),
    "undefined" == typeof t && (n.jQuery = n.$ = i),
    i
  );
});
/*! jQuery Migrate v3.3.3-pre | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (t) {
          return n(t, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(require("jquery"), window))
      : n(jQuery, window);
  })(function (n, t) {
    "use strict";
    function u(t) {
      return (
        0 <=
        (function (n, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              u = r.exec(n) || [],
              f = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+f[i] < +u[i]) return 1;
            if (+u[i] < +f[i]) return -1;
          }
          return 0;
        })(n.fn.jquery, t)
      );
    }
    function i(i) {
      var r = t.console;
      (n.migrateDeduplicateWarnings && e[i]) ||
        ((e[i] = !0),
        n.migrateWarnings.push(i),
        r &&
          r.warn &&
          !n.migrateMute &&
          (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()));
    }
    function h(n, t, r, u) {
      Object.defineProperty(n, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return i(u), r;
        },
        set: function (n) {
          i(u);
          r = n;
        },
      });
    }
    function r(n, t, r, u) {
      n[t] = function () {
        return i(u), r.apply(this, arguments);
      };
    }
    function l(n) {
      return n.replace(/-([a-z])/g, function (n, t) {
        return t.toUpperCase();
      });
    }
    function tt(n) {
      var i = t.document.implementation.createHTMLDocument("");
      return (i.body.innerHTML = n), i.body && i.body.innerHTML;
    }
    function it(n) {
      var t = n.replace(p, "<$1></$2>");
      t !== n &&
        tt(n) !== tt(t) &&
        i("HTML tags must be properly nested and closed: " + n);
    }
    var e, v, y, g, nt, f, p, rt, ut, ft, w, et, ot;
    n.migrateVersion = "3.3.3-pre";
    t.console &&
      t.console.log &&
      ((n && u("3.0.0")) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
      n.migrateWarnings &&
        t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
      t.console.log(
        "JQMIGRATE: Migrate is installed" +
          (n.migrateMute ? "" : " with logging active") +
          ", version " +
          n.migrateVersion,
      ));
    e = {};
    n.migrateDeduplicateWarnings = !0;
    n.migrateWarnings = [];
    void 0 === n.migrateTrace && (n.migrateTrace = !0);
    n.migrateReset = function () {
      e = {};
      n.migrateWarnings.length = 0;
    };
    "BackCompat" === t.document.compatMode &&
      i("jQuery is not compatible with Quirks Mode");
    var o,
      b,
      c,
      k = {},
      st = n.fn.init,
      s = n.find,
      ht = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      ct = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (o in ((n.fn.init = function (n) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof n &&
          "#" === n &&
          (i("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        st.apply(this, t)
      );
    }),
    (n.fn.init.prototype = n.fn),
    (n.find = function (n) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof n && ht.test(n))
        try {
          t.document.querySelector(n);
        } catch (u) {
          n = n.replace(ct, function (n, t, i, r) {
            return "[" + t + i + '"' + r + '"]';
          });
          try {
            t.document.querySelector(n);
            i("Attribute selector with '#' must be quoted: " + r[0]);
            r[0] = n;
          } catch (u) {
            i("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return s.apply(this, r);
    }),
    s))
      Object.prototype.hasOwnProperty.call(s, o) && (n.find[o] = s[o]);
    r(
      n.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property",
    );
    r(
      n,
      "parseJSON",
      function () {
        return JSON.parse.apply(null, arguments);
      },
      "jQuery.parseJSON is deprecated; use JSON.parse",
    );
    r(n, "holdReady", n.holdReady, "jQuery.holdReady is deprecated");
    r(
      n,
      "unique",
      n.uniqueSort,
      "jQuery.unique is deprecated; use jQuery.uniqueSort",
    );
    h(
      n.expr,
      "filters",
      n.expr.pseudos,
      "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos",
    );
    h(
      n.expr,
      ":",
      n.expr.pseudos,
      "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos",
    );
    u("3.1.1") &&
      r(
        n,
        "trim",
        function (n) {
          return null == n ? "" : (n + "").replace(lt, "");
        },
        "jQuery.trim is deprecated; use String.prototype.trim",
      );
    u("3.2.0") &&
      (r(
        n,
        "nodeName",
        function (n, t) {
          return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
        },
        "jQuery.nodeName is deprecated",
      ),
      r(
        n,
        "isArray",
        Array.isArray,
        "jQuery.isArray is deprecated; use Array.isArray",
      ));
    u("3.3.0") &&
      (r(
        n,
        "isNumeric",
        function (n) {
          var t = typeof n;
          return ("number" == t || "string" == t) && !isNaN(n - parseFloat(n));
        },
        "jQuery.isNumeric() is deprecated",
      ),
      n.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " ",
        ),
        function (n, t) {
          k["[object " + t + "]"] = t.toLowerCase();
        },
      ),
      r(
        n,
        "type",
        function (n) {
          return null == n
            ? n + ""
            : "object" == typeof n || "function" == typeof n
            ? k[Object.prototype.toString.call(n)] || "object"
            : typeof n;
        },
        "jQuery.type is deprecated",
      ),
      r(
        n,
        "isFunction",
        function (n) {
          return "function" == typeof n;
        },
        "jQuery.isFunction() is deprecated",
      ),
      r(
        n,
        "isWindow",
        function (n) {
          return null != n && n === n.window;
        },
        "jQuery.isWindow() is deprecated",
      ));
    n.ajax &&
      ((b = n.ajax),
      (c = /(=)\?(?=&|$)|\?\?/),
      (n.ajax = function () {
        var n = b.apply(this, arguments);
        return (
          n.promise &&
            (r(n, "success", n.done, "jQXHR.success is deprecated and removed"),
            r(n, "error", n.fail, "jQXHR.error is deprecated and removed"),
            r(
              n,
              "complete",
              n.always,
              "jQXHR.complete is deprecated and removed",
            )),
          n
        );
      }),
      u("4.0.0") ||
        n.ajaxPrefilter("+json", function (n) {
          !1 !== n.jsonp &&
            (c.test(n.url) ||
              ("string" == typeof n.data &&
                0 ===
                  (n.contentType || "").indexOf(
                    "application/x-www-form-urlencoded",
                  ) &&
                c.test(n.data))) &&
            i("JSON-to-JSONP auto-promotion is deprecated");
        }));
    var at = n.fn.removeAttr,
      vt = n.fn.toggleClass,
      yt = /\S+/g;
    n.fn.removeAttr = function (t) {
      var r = this;
      return (
        n.each(t.match(yt), function (t, u) {
          n.expr.match.bool.test(u) &&
            (i("jQuery.fn.removeAttr no longer sets boolean properties: " + u),
            r.prop(u, !1));
        }),
        at.apply(this, arguments)
      );
    };
    var d,
      a = !(n.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? vt.apply(this, arguments)
          : (i("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var i = (this.getAttribute && this.getAttribute("class")) || "";
              i && n.data(this, "__className__", i);
              this.setAttribute &&
                this.setAttribute(
                  "class",
                  (!i && !1 !== t && n.data(this, "__className__")) || "",
                );
            }));
      }),
      pt = /^[a-z]/,
      wt =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    n.swap &&
      n.each(["height", "width", "reliableMarginRight"], function (t, i) {
        var r = n.cssHooks[i] && n.cssHooks[i].get;
        r &&
          (n.cssHooks[i].get = function () {
            var n;
            return (a = !0), (n = r.apply(this, arguments)), (a = !1), n;
          });
      });
    n.swap = function (n, t, r, u) {
      var e,
        f,
        o = {};
      for (f in (a || i("jQuery.swap() is undocumented and deprecated"), t))
        (o[f] = n.style[f]), (n.style[f] = t[f]);
      for (f in ((e = r.apply(n, u || [])), t)) n.style[f] = o[f];
      return e;
    };
    u("3.4.0") &&
      "undefined" != typeof Proxy &&
      (n.cssProps = new Proxy(n.cssProps || {}, {
        set: function () {
          return (
            i("JQMIGRATE: jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
          );
        },
      }));
    n.cssNumber || (n.cssNumber = {});
    d = n.fn.css;
    n.fn.css = function (t, r) {
      var f,
        u,
        e = this;
      return t && "object" == typeof t && !Array.isArray(t)
        ? (n.each(t, function (t, i) {
            n.fn.css.call(e, t, i);
          }),
          this)
        : ("number" == typeof r &&
            ((f = l(t)),
            (u = f),
            (pt.test(u) && wt.test(u[0].toUpperCase() + u.slice(1))) ||
              n.cssNumber[f] ||
              i(
                'Number-typed values are deprecated for jQuery.fn.css( "' +
                  t +
                  '", value )',
              )),
          d.apply(this, arguments));
    };
    f = n.data;
    n.data = function (t, r, u) {
      var o, s, e;
      if (r && "object" == typeof r && 2 === arguments.length) {
        for (e in ((o = n.hasData(t) && f.call(this, t)), (s = {}), r))
          e !== l(e)
            ? (i("jQuery.data() always sets/gets camelCased names: " + e),
              (o[e] = r[e]))
            : (s[e] = r[e]);
        return f.call(this, t, s), r;
      }
      return r &&
        "string" == typeof r &&
        r !== l(r) &&
        (o = n.hasData(t) && f.call(this, t)) &&
        r in o
        ? (i("jQuery.data() always sets/gets camelCased names: " + r),
          2 < arguments.length && (o[r] = u),
          o[r])
        : f.apply(this, arguments);
    };
    n.fx &&
      ((g = n.Tween.prototype.run),
      (nt = function (n) {
        return n;
      }),
      (n.Tween.prototype.run = function () {
        1 < n.easing[this.easing].length &&
          (i(
            "'jQuery.easing." +
              this.easing.toString() +
              "' should use only one argument",
          ),
          (n.easing[this.easing] = nt));
        g.apply(this, arguments);
      }),
      (v = n.fx.interval || 13),
      (y = "jQuery.fx.interval is deprecated"),
      t.requestAnimationFrame &&
        Object.defineProperty(n.fx, "interval", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return t.document.hidden || i(y), v;
          },
          set: function (n) {
            i(y);
            v = n;
          },
        }));
    var bt = n.fn.load,
      kt = n.event.add,
      dt = n.event.fix;
    return (
      (n.event.props = []),
      (n.event.fixHooks = {}),
      h(
        n.event.props,
        "concat",
        n.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed",
      ),
      (n.event.fix = function (t) {
        var f,
          e = t.type,
          u = this.fixHooks[e],
          r = n.event.props;
        if (r.length)
          for (
            i("jQuery.event.props are deprecated and removed: " + r.join());
            r.length;

          )
            n.event.addProp(r.pop());
        if (
          u &&
          !u._migrated_ &&
          ((u._migrated_ = !0),
          i("jQuery.event.fixHooks are deprecated and removed: " + e),
          (r = u.props) && r.length)
        )
          while (r.length) n.event.addProp(r.pop());
        return (f = dt.call(this, t)), u && u.filter ? u.filter(f, t) : f;
      }),
      (n.event.add = function (n, r) {
        return (
          n === t &&
            "load" === r &&
            "complete" === t.document.readyState &&
            i("jQuery(window).on('load'...) called after load event occurred"),
          kt.apply(this, arguments)
        );
      }),
      n.each(["load", "unload", "error"], function (t, r) {
        n.fn[r] = function () {
          var n = Array.prototype.slice.call(arguments, 0);
          return "load" === r && "string" == typeof n[0]
            ? bt.apply(this, n)
            : (i("jQuery.fn." + r + "() is deprecated"),
              n.splice(0, 0, r),
              arguments.length
                ? this.on.apply(this, n)
                : (this.triggerHandler.apply(this, n), this));
        };
      }),
      n.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " ",
        ),
        function (t, r) {
          n.fn[r] = function (n, t) {
            return (
              i("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, n, t) : this.trigger(r)
            );
          };
        },
      ),
      n(function () {
        n(t.document).triggerHandler("ready");
      }),
      (n.event.special.ready = {
        setup: function () {
          this === t.document && i("'ready' event is deprecated");
        },
      }),
      n.fn.extend({
        bind: function (n, t, r) {
          return i("jQuery.fn.bind() is deprecated"), this.on(n, null, t, r);
        },
        unbind: function (n, t) {
          return i("jQuery.fn.unbind() is deprecated"), this.off(n, null, t);
        },
        delegate: function (n, t, r, u) {
          return i("jQuery.fn.delegate() is deprecated"), this.on(t, n, r, u);
        },
        undelegate: function (n, t, r) {
          return (
            i("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(n, "**")
              : this.off(t, n || "**", r)
          );
        },
        hover: function (n, t) {
          return (
            i("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", n).on("mouseleave", t || n)
          );
        },
      }),
      (p =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
      (rt = n.htmlPrefilter),
      (n.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        n.htmlPrefilter = function (n) {
          return it(n), n.replace(p, "<$1></$2>");
        };
      }),
      (n.htmlPrefilter = function (n) {
        return it(n), rt(n);
      }),
      (ft = n.fn.offset),
      (n.fn.offset = function () {
        var n = this[0];
        return !n || (n.nodeType && n.getBoundingClientRect)
          ? ft.apply(this, arguments)
          : (i("jQuery.fn.offset() requires a valid DOM element"),
            arguments.length ? this : void 0);
      }),
      n.ajax &&
        ((ut = n.param),
        (n.param = function (t, r) {
          var u = n.ajaxSettings && n.ajaxSettings.traditional;
          return (
            void 0 === r &&
              u &&
              (i(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional",
              ),
              (r = u)),
            ut.call(this, t, r)
          );
        })),
      (ot = n.fn.andSelf || n.fn.addBack),
      (n.fn.andSelf = function () {
        return (
          i(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()",
          ),
          ot.apply(this, arguments)
        );
      }),
      n.Deferred &&
        ((w = n.Deferred),
        (et = [
          [
            "resolve",
            "done",
            n.Callbacks("once memory"),
            n.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            n.Callbacks("once memory"),
            n.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", n.Callbacks("memory"), n.Callbacks("memory")],
        ]),
        (n.Deferred = function (t) {
          var r = w(),
            u = r.promise();
          return (
            (r.pipe = u.pipe =
              function () {
                var t = arguments;
                return (
                  i("deferred.pipe() is deprecated"),
                  n
                    .Deferred(function (i) {
                      n.each(et, function (n, f) {
                        var e = "function" == typeof t[n] && t[n];
                        r[f[1]](function () {
                          var n = e && e.apply(this, arguments);
                          n && "function" == typeof n.promise
                            ? n
                                .promise()
                                .done(i.resolve)
                                .fail(i.reject)
                                .progress(i.notify)
                            : i[f[0] + "With"](
                                this === u ? i.promise() : this,
                                e ? [n] : arguments,
                              );
                        });
                      });
                      t = null;
                    })
                    .promise()
                );
              }),
            t && t.call(r, r),
            r
          );
        }),
        (n.Deferred.exceptionHook = w.exceptionHook)),
      n
    );
  });
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 1;
/*! lazysizes - v5.3.0 */
!(function (n) {
  var t = (function (n, t, i) {
    "use strict";
    var e, r;
    if (
      ((function () {
        var t,
          i = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            fastLoadedClass: "ls-is-cached",
            iframeLoadMode: 0,
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        r = n.lazySizesConfig || n.lazysizesConfig || {};
        for (t in i) t in r || (r[t] = i[t]);
      })(),
      !t || !t.getElementsByClassName)
    )
      return { init: function () {}, cfg: r, noSupport: !0 };
    var s = t.documentElement,
      ot = n.HTMLPictureElement,
      h = "addEventListener",
      u = "getAttribute",
      o = n[h].bind(n),
      f = n.setTimeout,
      it = n.requestAnimationFrame || f,
      k = n.requestIdleCallback,
      rt = /^picture$/i,
      st = ["load", "error", "lazyincluded", "_lazyloaded"],
      p = {},
      ht = Array.prototype.forEach,
      c = function (n, t) {
        return (
          p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
          p[t].test(n[u]("class") || "") && p[t]
        );
      },
      l = function (n, t) {
        c(n, t) ||
          n.setAttribute("class", (n[u]("class") || "").trim() + " " + t);
      },
      d = function (n, t) {
        var i;
        (i = c(n, t)) &&
          n.setAttribute("class", (n[u]("class") || "").replace(i, " "));
      },
      g = function (n, t, i) {
        var r = i ? h : "removeEventListener";
        i && g(n, t);
        st.forEach(function (i) {
          n[r](i, t);
        });
      },
      a = function (n, i, r, u, f) {
        var o = t.createEvent("Event");
        return (
          r || (r = {}),
          (r.instance = e),
          o.initEvent(i, !u, !f),
          (o.detail = r),
          n.dispatchEvent(o),
          o
        );
      },
      nt = function (t, i) {
        var f;
        !ot && (f = n.picturefill || r.pf)
          ? (i && i.src && !t[u]("srcset") && t.setAttribute("srcset", i.src),
            f({ reevaluate: !0, elements: [t] }))
          : i && i.src && (t.src = i.src);
      },
      v = function (n, t) {
        return (getComputedStyle(n, null) || {})[t];
      },
      ut = function (n, t, i) {
        for (i = i || n.offsetWidth; i < r.minSize && t && !n._lazysizesWidth; )
          (i = t.offsetWidth), (t = t.parentNode);
        return i;
      },
      y = (function () {
        var n,
          i,
          r = [],
          s = [],
          u = r,
          e = function () {
            var t = u;
            for (u = r.length ? s : r, n = !0, i = !1; t.length; ) t.shift()();
            n = !1;
          },
          o = function (r, o) {
            n && !o
              ? r.apply(this, arguments)
              : (u.push(r), i || ((i = !0), (t.hidden ? f : it)(e)));
          };
        return (o._lsFlush = e), o;
      })(),
      w = function (n, t) {
        return t
          ? function () {
              y(n);
            }
          : function () {
              var t = this,
                i = arguments;
              y(function () {
                n.apply(t, i);
              });
            };
      },
      ct = function (n) {
        var u,
          e = 0,
          h = r.throttleDelay,
          t = r.ricTimeout,
          o = function () {
            u = !1;
            e = i.now();
            n();
          },
          s =
            k && t > 49
              ? function () {
                  k(o, { timeout: t });
                  t !== r.ricTimeout && (t = r.ricTimeout);
                }
              : w(function () {
                  f(o);
                }, !0);
        return function (n) {
          var r;
          ((n = n === !0) && (t = 33), u) ||
            ((u = !0),
            (r = h - (i.now() - e)),
            r < 0 && (r = 0),
            n || r < 9 ? s() : f(s, r));
        };
      },
      ft = function (n) {
        var t,
          u,
          r = 99,
          e = function () {
            t = null;
            n();
          },
          o = function () {
            var n = i.now() - u;
            n < r ? f(o, r - n) : (k || e)(e);
          };
        return function () {
          u = i.now();
          t || (t = f(o, r));
        };
      },
      et = (function () {
        var pt,
          ut,
          kt,
          et,
          dt,
          gt,
          ni,
          ot,
          st,
          lt,
          at,
          wt,
          oi = /^img$/i,
          si = /^iframe$/i,
          hi = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent),
          ci = 0,
          vt = 0,
          b = 0,
          k = -1,
          ti = function (n) {
            b--;
            (!n || b < 0 || !n.target) && (b = 0);
          },
          ii = function (n) {
            return (
              wt == null && (wt = v(t.body, "visibility") == "hidden"),
              wt ||
                !(
                  v(n.parentNode, "visibility") == "hidden" &&
                  v(n, "visibility") == "hidden"
                )
            );
          },
          li = function (n, i) {
            var u,
              r = n,
              f = ii(n);
            for (
              ot -= i, at += i, st -= i, lt += i;
              f && (r = r.offsetParent) && r != t.body && r != s;

            )
              (f = (v(r, "opacity") || 1) > 0),
                f &&
                  v(r, "overflow") != "visible" &&
                  ((u = r.getBoundingClientRect()),
                  (f =
                    lt > u.left &&
                    st < u.right &&
                    at > u.top - 1 &&
                    ot < u.bottom + 1));
            return f;
          },
          ri = function () {
            var w,
              n,
              o,
              c,
              a,
              f,
              v,
              l,
              d,
              h,
              y,
              p,
              i = e.elements;
            if ((et = r.loadMode) && b < 8 && (w = i.length)) {
              for (n = 0, k++; n < w; n++)
                if (i[n] && !i[n]._lazyRace) {
                  if (!hi || (e.prematureUnveil && e.prematureUnveil(i[n]))) {
                    yt(i[n]);
                    continue;
                  }
                  if (
                    (((l = i[n][u]("data-expand")) && (f = l * 1)) || (f = vt),
                    h ||
                      ((h =
                        !r.expand || r.expand < 1
                          ? s.clientHeight > 500 && s.clientWidth > 500
                            ? 500
                            : 370
                          : r.expand),
                      (e._defEx = h),
                      (y = h * r.expFactor),
                      (p = r.hFac),
                      (wt = null),
                      vt < y && b < 1 && k > 2 && et > 2 && !t.hidden
                        ? ((vt = y), (k = 0))
                        : (vt = et > 1 && k > 1 && b < 6 ? h : ci)),
                    d !== f &&
                      ((gt = innerWidth + f * p),
                      (ni = innerHeight + f),
                      (v = f * -1),
                      (d = f)),
                    (o = i[n].getBoundingClientRect()),
                    (at = o.bottom) >= v &&
                      (ot = o.top) <= ni &&
                      (lt = o.right) >= v * p &&
                      (st = o.left) <= gt &&
                      (at || lt || st || ot) &&
                      (r.loadHidden || ii(i[n])) &&
                      ((ut && b < 3 && !l && (et < 3 || k < 4)) || li(i[n], f)))
                  ) {
                    if ((yt(i[n]), (a = !0), b > 9)) break;
                  } else
                    !a &&
                      ut &&
                      !c &&
                      b < 4 &&
                      k < 4 &&
                      et > 2 &&
                      (pt[0] || r.preloadAfterLoad) &&
                      (pt[0] ||
                        (!l &&
                          (at ||
                            lt ||
                            st ||
                            ot ||
                            i[n][u](r.sizesAttr) != "auto"))) &&
                      (c = pt[0] || i[n]);
                }
              c && !a && yt(c);
            }
          },
          p = ct(ri),
          ui = function (n) {
            var t = n.target;
            if (t._lazyCache) {
              delete t._lazyCache;
              return;
            }
            ti(n);
            l(t, r.loadedClass);
            d(t, r.loadingClass);
            g(t, fi);
            a(t, "lazyloaded");
          },
          ai = w(ui),
          fi = function (n) {
            ai({ target: n.target });
          },
          vi = function (n, t) {
            var i = n.getAttribute("data-load-mode") || r.iframeLoadMode;
            i == 0
              ? n.contentWindow.location.replace(t)
              : i == 1 && (n.src = t);
          },
          yi = function (n) {
            var t,
              i = n[u](r.srcsetAttr);
            (t = r.customMedia[n[u]("data-media") || n[u]("media")]) &&
              n.setAttribute("media", t);
            i && n.setAttribute("srcset", i);
          },
          pi = w(function (n, t, i, e, o) {
            var s, h, v, c, p, w;
            (p = a(n, "lazybeforeunveil", t)).defaultPrevented ||
              (e && (i ? l(n, r.autosizesClass) : n.setAttribute("sizes", e)),
              (h = n[u](r.srcsetAttr)),
              (s = n[u](r.srcAttr)),
              o && ((v = n.parentNode), (c = v && rt.test(v.nodeName || ""))),
              (w = t.firesLoad || ("src" in n && (h || s || c))),
              (p = { target: n }),
              l(n, r.loadingClass),
              w && (clearTimeout(kt), (kt = f(ti, 2500)), g(n, fi, !0)),
              c && ht.call(v.getElementsByTagName("source"), yi),
              h
                ? n.setAttribute("srcset", h)
                : s && !c && (si.test(n.nodeName) ? vi(n, s) : (n.src = s)),
              o && (h || c) && nt(n, { src: s }));
            n._lazyRace && delete n._lazyRace;
            d(n, r.lazyClass);
            y(function () {
              var t = n.complete && n.naturalWidth > 1;
              (!w || t) &&
                (t && l(n, r.fastLoadedClass),
                ui(p),
                (n._lazyCache = !0),
                f(function () {
                  "_lazyCache" in n && delete n._lazyCache;
                }, 9));
              n.loading == "lazy" && b--;
            }, !0);
          }),
          yt = function (n) {
            if (!n._lazyRace) {
              var f,
                t = oi.test(n.nodeName),
                e = t && (n[u](r.sizesAttr) || n[u]("sizes")),
                i = e == "auto";
              ((i || !ut) &&
                t &&
                (n[u]("src") || n.srcset) &&
                !n.complete &&
                !c(n, r.errorClass) &&
                c(n, r.lazyClass)) ||
                ((f = a(n, "lazyunveilread").detail),
                i && tt.updateElem(n, !0, n.offsetWidth),
                (n._lazyRace = !0),
                b++,
                pi(n, f, i, e, t));
            }
          },
          wi = ft(function () {
            r.loadMode = 3;
            p();
          }),
          ei = function () {
            r.loadMode == 3 && (r.loadMode = 2);
            wi();
          },
          bt = function () {
            if (!ut) {
              if (i.now() - dt < 999) {
                f(bt, 999);
                return;
              }
              ut = !0;
              r.loadMode = 3;
              p();
              o("scroll", ei, !0);
            }
          };
        return {
          _: function () {
            dt = i.now();
            e.elements = t.getElementsByClassName(r.lazyClass);
            pt = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass);
            o("scroll", p, !0);
            o("resize", p, !0);
            o("pageshow", function (n) {
              if (n.persisted) {
                var i = t.querySelectorAll("." + r.loadingClass);
                i.length &&
                  i.forEach &&
                  it(function () {
                    i.forEach(function (n) {
                      n.complete && yt(n);
                    });
                  });
              }
            });
            n.MutationObserver
              ? new MutationObserver(p).observe(s, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                })
              : (s[h]("DOMNodeInserted", p, !0),
                s[h]("DOMAttrModified", p, !0),
                setInterval(p, 999));
            o("hashchange", p, !0);
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (n) {
              t[h](n, p, !0);
            });
            /d$|^c/.test(t.readyState)
              ? bt()
              : (o("load", bt), t[h]("DOMContentLoaded", p), f(bt, 2e4));
            e.elements.length ? (ri(), y._lsFlush()) : p();
          },
          checkElems: p,
          unveil: yt,
          _aLSL: ei,
        };
      })(),
      tt = (function () {
        var n,
          f = w(function (n, t, i, r) {
            var f, u, e;
            if (
              ((n._lazysizesWidth = r),
              (r += "px"),
              n.setAttribute("sizes", r),
              rt.test(t.nodeName || ""))
            )
              for (
                f = t.getElementsByTagName("source"), u = 0, e = f.length;
                u < e;
                u++
              )
                f[u].setAttribute("sizes", r);
            i.detail.dataAttr || nt(n, i.detail);
          }),
          i = function (n, t, i) {
            var r,
              u = n.parentNode;
            u &&
              ((i = ut(n, u, i)),
              (r = a(n, "lazybeforesizes", { width: i, dataAttr: !!t })),
              r.defaultPrevented ||
                ((i = r.detail.width),
                i && i !== n._lazysizesWidth && f(n, u, r, i)));
          },
          e = function () {
            var t,
              r = n.length;
            if (r) for (t = 0; t < r; t++) i(n[t]);
          },
          u = ft(e);
        return {
          _: function () {
            n = t.getElementsByClassName(r.autosizesClass);
            o("resize", u);
          },
          checkElems: u,
          updateElem: i,
        };
      })(),
      b = function () {
        !b.i && t.getElementsByClassName && ((b.i = !0), tt._(), et._());
      };
    return (
      f(function () {
        r.init && b();
      }),
      (e = {
        cfg: r,
        autoSizer: tt,
        loader: et,
        init: b,
        uP: nt,
        aC: l,
        rC: d,
        hC: c,
        fire: a,
        gW: ut,
        rAF: y,
      })
    );
  })(n, n.document, Date);
  n.lazySizes = t;
  "object" == typeof module && module.exports && (module.exports = t);
})("undefined" != typeof window ? window : {}),
  (function (n) {
    n[(n.AND = 0)] = "AND";
    n[(n.OR = 1)] = "OR";
  })(ConditionOperator || (ConditionOperator = {}));
AutoComplete = (function () {
  function n(t, i) {
    if (
      (t === void 0 && (t = {}),
      i === void 0 && (i = "[data-autocomplete]"),
      Array.isArray(i))
    )
      i.forEach(function (i) {
        new n(t, i);
      });
    else if (typeof i == "string") {
      var r = document.querySelectorAll(i);
      Array.prototype.forEach.call(r, function (i) {
        new n(t, i);
      });
    } else
      n.prototype.create(
        n.merge(n.defaults, t, { DOMResults: document.createElement("div") }),
        i,
      );
  }
  return (
    (n.prototype.create = function (t, i) {
      if (
        ((t.Input = i),
        t.Input.nodeName.match(/^INPUT$/i) &&
          (t.Input.hasAttribute("type") === !1 ||
            t.Input.getAttribute("type").match(/^TEXT|SEARCH$/i)))
      ) {
        t.Input.setAttribute("autocomplete", "off");
        t._Position(t);
        t.Input.parentNode.appendChild(t.DOMResults);
        t.$Listeners.focus = t._Focus.bind(t);
        t.$Listeners.keydown = n.prototype.event.bind(null, t);
        t.$Listeners.blur = t._Blur.bind(t);
        t.$Listeners.position = t._Position.bind(t);
        t.$Listeners.destroy = n.prototype.destroy.bind(null, t);
        for (var r in t.$Listeners)
          t.Input.addEventListener(r, t.$Listeners[r]);
      }
    }),
    (n.prototype.event = function (t, i) {
      var f, u, r;
      for (f in t.KeyboardMappings)
        (u = n.merge(
          { Operator: ConditionOperator.AND },
          t.KeyboardMappings[f],
        )),
          (r = ConditionOperator.AND == u.Operator),
          u.Conditions.forEach(function (t) {
            ((r === !0 && u.Operator == ConditionOperator.AND) ||
              (r === !1 && ConditionOperator.OR)) &&
              ((t = n.merge({ Not: !1 }, t)),
              t.hasOwnProperty("Is")
                ? (r = t.Is == i.keyCode ? !t.Not : t.Not)
                : t.hasOwnProperty("From") &&
                  t.hasOwnProperty("To") &&
                  (r =
                    i.keyCode >= t.From && i.keyCode <= t.To ? !t.Not : t.Not));
          }),
          r === !0 && u.Callback.bind(t, i)();
    }),
    (n.prototype.ajax = function (t, i, r) {
      var u;
      if (
        (r === void 0 && (r = !0),
        t.$AjaxTimer && window.clearTimeout(t.$AjaxTimer),
        r === !0)
      )
        t.$AjaxTimer = window.setTimeout(
          n.prototype.ajax.bind(null, t, i, !1),
          t.Delay,
        );
      else {
        t.Request && t.Request.abort();
        var f = Object.getOwnPropertyNames(t.HttpHeaders),
          e = t._HttpMethod(),
          o = t._Url(),
          s = t._QueryArg() + "=" + t._Pre();
        for (
          e.match(/^GET$/i) && (o += "?" + s),
            t.Request = new XMLHttpRequest(),
            t.Request.open(e, o, !0),
            u = f.length - 1;
          u >= 0;
          u--
        )
          t.Request.setRequestHeader(f[u], t.HttpHeaders[f[u]]);
        t.Request.onreadystatechange = i;
        t.Request.send(s);
      }
    }),
    (n.prototype.destroy = function (n) {
      for (var t in n.$Listeners)
        n.Input.removeEventListener(t, n.$Listeners[t]);
      n.DOMResults.parentNode.removeChild(n.DOMResults);
    }),
    (n.prototype.slugify = function (n) {
      return n
        .toLowerCase()
        .replace(
          /Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,
          "a",
        )
        .replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e")
        .replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i")
        .replace(
          /Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,
          "o",
        )
        .replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u")
        .replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y")
        .replace(/Ä‘/g, "d")
        .replace(
          /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
          "-",
        )
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }),
    (n.merge = function () {
      for (var i = {}, t, n = 0; n < arguments.length; n++)
        for (t in arguments[n]) i[t] = arguments[n][t];
      return i;
    }),
    (n.defaults = {
      Delay: 150,
      EmptyMessage: "KhĂ´ng tĂ¬m tháº¥y káº¿t quáº£ phĂ¹ há»£p",
      HttpHeaders: { "Content-type": "application/x-www-form-urlencoded" },
      Limit: 0,
      HttpMethod: "GET",
      QueryArg: "q",
      Url: null,
      KeyboardMappings: {
        Enter: {
          Conditions: [{ Is: 13, Not: !1 }],
          Callback: function (n) {
            if (this.DOMResults.getAttribute("class").indexOf("open") != -1) {
              var t = this.DOMResults.querySelector("li.active");
              t !== null &&
                (this._Select(t),
                this.DOMResults.setAttribute("class", "autocomplete"));
              n.preventDefault();
            }
          },
          Operator: ConditionOperator.AND,
        },
        KeyUpAndDown: {
          Conditions: [
            { Is: 38, Not: !1 },
            { Is: 40, Not: !1 },
          ],
          Callback: function (n) {
            var r = this.DOMResults.querySelector(
                "li:first-child:not(.locked)",
              ),
              t = this.DOMResults.querySelector("li.active");
            if (t) {
              var f = Array.prototype.indexOf.call(t.parentNode.children, t),
                i = f + (n.keyCode - 39),
                u = this.DOMResults.getElementsByTagName("li").length;
              i < 0 ? (i = u - 1) : i >= u && (i = 0);
              t.setAttribute("class", "");
              t.parentElement.children.item(i).setAttribute("class", "active");
            } else r && r.setAttribute("class", "active");
          },
          Operator: ConditionOperator.OR,
        },
        AlphaNum: {
          Conditions: [
            { Is: 13, Not: !0 },
            { From: 35, To: 40, Not: !0 },
          ],
          Callback: function () {
            var t = this.Input.getAttribute("data-autocomplete-old-value"),
              i = this._Pre();
            i !== "" &&
              ((t && i == t) ||
                this.DOMResults.setAttribute("class", "autocomplete open"),
              n.prototype.ajax(
                this,
                function () {
                  this.Request.readyState == 4 &&
                    this.Request.status == 200 &&
                    (this._Render(this._Post(this.Request.response)),
                    this._Open());
                }.bind(this),
              ));
          },
          Operator: ConditionOperator.AND,
        },
      },
      DOMResults: null,
      Request: null,
      Input: null,
      _EmptyMessage: function () {
        return "";
      },
      _Limit: function () {
        var n = this.Input.getAttribute("data-autocomplete-limit");
        return isNaN(n) ? this.Limit : parseInt(n);
      },
      _HttpMethod: function () {
        return this.Input.hasAttribute("data-autocomplete-method")
          ? this.Input.getAttribute("data-autocomplete-method")
          : this.HttpMethod;
      },
      _QueryArg: function () {
        return this.Input.hasAttribute("data-autocomplete-param-name")
          ? this.Input.getAttribute("data-autocomplete-param-name")
          : this.QueryArg;
      },
      _Url: function () {
        return this.Input.hasAttribute("data-autocomplete")
          ? this.Input.getAttribute("data-autocomplete")
          : this.Url;
      },
      _Blur: function (n) {
        var t, i;
        n === void 0 && (n = !1);
        t = document.querySelectorAll(".autocomplete:hover");
        n && t.length === 0
          ? this.DOMResults.setAttribute("class", "autocomplete")
          : ((i = this),
            setTimeout(function () {
              i._Blur(!0);
            }, 150));
      },
      _Focus: function () {
        var n = this.Input.getAttribute("data-autocomplete-old-value");
        (n && this.Input.value == n) ||
          this.DOMResults.setAttribute("class", "autocomplete open");
      },
      _Open: function () {
        var n = this;
        Array.prototype.forEach.call(
          this.DOMResults.getElementsByTagName("li"),
          function (t) {
            t.getAttribute("class") != "locked" &&
              (t.onclick = function () {
                n._Select(t);
              });
          },
        );
      },
      _Position: function () {
        this.DOMResults.setAttribute("class", "autocomplete");
        this.DOMResults.setAttribute(
          "style",
          "top:" +
            (this.Input.offsetTop + this.Input.offsetHeight) +
            "px;left:" +
            this.Input.offsetLeft +
            "px;width:" +
            this.Input.clientWidth +
            "px;",
        );
      },
      _Render: function (n) {
        var r = document.createElement("ul"),
          t = document.createElement("li"),
          u,
          i;
        if (typeof n == "string") {
          n.length > 0
            ? (this.DOMResults.innerHTML = n)
            : ((this.DOMResults.innerHTML = ""),
              (u = this._EmptyMessage()),
              u !== "" &&
                ((t.innerHTML = u),
                t.setAttribute("class", "locked"),
                r.appendChild(t),
                this.DOMResults.hasChildNodes() &&
                  this.DOMResults.removeChild(this.DOMResults.childNodes[0]),
                this.DOMResults.appendChild(r)));
          return;
        }
        for (this._Limit() < 0 && (n = n.reverse()), i = 0; i < n.length; i++)
          (t.innerHTML = n[i].Label),
            t.setAttribute("data-autocomplete-value", n[i].Value),
            r.appendChild(t),
            (t = document.createElement("li"));
        this.DOMResults.hasChildNodes() &&
          this.DOMResults.removeChild(this.DOMResults.childNodes[0]);
        this.DOMResults.appendChild(r);
      },
      _Post: function (n) {
        var i, t, r, u;
        try {
          if (((i = []), (t = JSON.parse(n)), Object.keys(t).length == 0))
            return "";
          if (Array.isArray(t))
            for (r = 0; r < Object.keys(t).length; r++)
              i[i.length] = { Value: t[r], Label: t[r] };
          else for (u in t) i.push({ Value: u, Label: t[u] });
          return i;
        } catch (f) {
          return n;
        }
      },
      _Pre: function () {
        return this.Input.value;
      },
      _Select: function (n) {
        this.Input.value = n.hasAttribute("data-autocomplete-value")
          ? n.getAttribute("data-autocomplete-value")
          : n.innerHTML;
        this.Input.setAttribute(
          "data-autocomplete-old-value",
          this.Input.value,
        );
      },
      $AjaxTimer: null,
      $Listeners: {},
    }),
    n
  );
})();
smokesignals = {
  convert: function (n, t) {
    return (
      (t = {}),
      (n.on = function (i, r) {
        return (t[i] = t[i] || []).push(r), n;
      }),
      (n.once = function (t, i) {
        function r() {
          i.apply(n.off(t, r), arguments);
        }
        r.h = i;
        return n.on(t, r);
      }),
      (n.off = function (i, r) {
        for (var f = t[i], u = 0; r && f && f[u]; u++)
          (f[u] != r && f[u].h != r) || f.splice(u--, 1);
        return u || delete t[i], n;
      }),
      (n.emit = function (i) {
        for (var r = t[i], u = 0; r && r[u]; )
          r[u++].apply(n, r.slice.call(arguments, 1));
        return n;
      }),
      n
    );
  },
};
isInitCpKids = !1;
isSendingCpKids = !1;
isSendingFcp = !1;
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function (n, t, i, r) {
  function u(t, i) {
    this.settings = null;
    this.options = n.extend({}, u.Defaults, i);
    this.$element = n(t);
    this._handlers = {};
    this._plugins = {};
    this._supress = {};
    this._current = null;
    this._speed = null;
    this._coordinates = [];
    this._breakpoint = null;
    this._width = null;
    this._items = [];
    this._clones = [];
    this._mergers = [];
    this._widths = [];
    this._invalidated = {};
    this._pipe = [];
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: { start: null, current: null },
      direction: null,
    };
    this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"],
      },
    };
    n.each(
      ["onResize", "onThrottledResize"],
      n.proxy(function (t, i) {
        this._handlers[i] = n.proxy(this[i], this);
      }, this),
    );
    n.each(
      u.Plugins,
      n.proxy(function (n, t) {
        this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this);
      }, this),
    );
    n.each(
      u.Workers,
      n.proxy(function (t, i) {
        this._pipe.push({ filter: i.filter, run: n.proxy(i.run, this) });
      }, this),
    );
    this.setup();
    this.initialize();
  }
  u.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: t,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  };
  u.Width = { Default: "default", Inner: "inner", Outer: "outer" };
  u.Type = { Event: "event", State: "state" };
  u.Plugins = {};
  u.Workers = [
    {
      filter: ["width", "settings"],
      run: function () {
        this._width = this.$element.width();
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        n.current = this._items && this._items[this.relative(this._current)];
      },
    },
    {
      filter: ["items", "settings"],
      run: function () {
        this.$stage.children(".cloned").remove();
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        var t = this.settings.margin || "",
          u = !this.settings.autoWidth,
          i = this.settings.rtl,
          r = {
            width: "auto",
            "margin-left": i ? t : "",
            "margin-right": i ? "" : t,
          };
        u || this.$stage.children().css(r);
        n.css = r;
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        var r =
            (this.width() / this.settings.items).toFixed(3) -
            this.settings.margin,
          t = null,
          i = this._items.length,
          f = !this.settings.autoWidth,
          u = [];
        for (n.items = { merge: !1, width: r }; i--; )
          (t = this._mergers[i]),
            (t =
              (this.settings.mergeFit && Math.min(t, this.settings.items)) ||
              t),
            (n.items.merge = t > 1 || n.items.merge),
            (u[i] = f ? r * t : this._items[i].width());
        this._widths = u;
      },
    },
    {
      filter: ["items", "settings"],
      run: function () {
        var t = [],
          i = this._items,
          r = this.settings,
          o = Math.max(r.items * 2, 4),
          s = Math.ceil(i.length / 2) * 2,
          u = r.loop && i.length ? (r.rewind ? o : Math.max(o, s)) : 0,
          f = "",
          e = "";
        for (u /= 2; u > 0; )
          t.push(this.normalize(t.length / 2, !0)),
            (f = f + i[t[t.length - 1]][0].outerHTML),
            t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)),
            (e = i[t[t.length - 1]][0].outerHTML + e),
            (u -= 1);
        this._clones = t;
        n(f).addClass("cloned").appendTo(this.$stage);
        n(e).addClass("cloned").prependTo(this.$stage);
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function () {
        for (
          var u = this.settings.rtl ? 1 : -1,
            f = this._clones.length + this._items.length,
            n = -1,
            i = 0,
            r = 0,
            t = [];
          ++n < f;

        )
          (i = t[n - 1] || 0),
            (r = this._widths[this.relative(n)] + this.settings.margin),
            t.push(i + r * u);
        this._coordinates = t;
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function () {
        var n = this.settings.stagePadding,
          t = this._coordinates,
          i = {
            width: Math.ceil(Math.abs(t[t.length - 1])) + n * 2,
            "padding-left": n || "",
            "padding-right": n || "",
          };
        this.$stage.css(i);
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        var t = this._coordinates.length,
          i = !this.settings.autoWidth,
          r = this.$stage.children();
        if (i && n.items.merge)
          while (t--)
            (n.css.width = this._widths[this.relative(t)]), r.eq(t).css(n.css);
        else i && ((n.css.width = n.items.width), r.css(n.css));
      },
    },
    {
      filter: ["items"],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr("style");
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        n.current = n.current ? this.$stage.children().index(n.current) : 0;
        n.current = Math.max(
          this.minimum(),
          Math.min(this.maximum(), n.current),
        );
        this.reset(n.current);
      },
    },
    {
      filter: ["position"],
      run: function () {
        this.animate(this.coordinates(this._current));
      },
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: function () {
        for (
          var u = this.settings.rtl ? 1 : -1,
            f = this.settings.stagePadding * 2,
            t = this.coordinates(this.current()) + f,
            e = t + this.width() * u,
            i,
            r,
            o = [],
            n = 0,
            s = this._coordinates.length;
          n < s;
          n++
        )
          (i = this._coordinates[n - 1] || 0),
            (r = Math.abs(this._coordinates[n]) + f * u),
            ((this.op(i, "<=", t) && this.op(i, ">", e)) ||
              (this.op(r, "<", t) && this.op(r, ">", e))) &&
              o.push(n);
        this.$stage.children(".active").removeClass("active");
        this.$stage
          .children(":eq(" + o.join("), :eq(") + ")")
          .addClass("active");
        this.$stage.children(".center").removeClass("center");
        this.settings.center &&
          this.$stage.children().eq(this.current()).addClass("center");
      },
    },
  ];
  u.prototype.initializeStage = function () {
    ((this.$stage = this.$element.find("." + this.settings.stageClass)),
    this.$stage.length) ||
      (this.$element.addClass(this.options.loadingClass),
      (this.$stage = n("<" + this.settings.stageElement + ">", {
        class: this.settings.stageClass,
      }).wrap(n("<div/>", { class: this.settings.stageOuterClass }))),
      this.$element.append(this.$stage.parent()));
  };
  u.prototype.initializeItems = function () {
    var t = this.$element.find(".owl-item");
    if (t.length) {
      this._items = t.get().map(function (t) {
        return n(t);
      });
      this._mergers = this._items.map(function () {
        return 1;
      });
      this.refresh();
      return;
    }
    this.replace(this.$element.children().not(this.$stage.parent()));
    this.isVisible() ? this.refresh() : this.invalidate("width");
    this.$element
      .removeClass(this.options.loadingClass)
      .addClass(this.options.loadedClass);
  };
  u.prototype.initialize = function () {
    if (
      (this.enter("initializing"),
      this.trigger("initialize"),
      this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
      this.settings.autoWidth && !this.is("pre-loading"))
    ) {
      var n, t, i;
      n = this.$element.find("img");
      t = this.settings.nestedItemSelector
        ? "." + this.settings.nestedItemSelector
        : r;
      i = this.$element.children(t).width();
      n.length && i <= 0 && this.preloadAutoWidthImages(n);
    }
    this.initializeStage();
    this.initializeItems();
    this.registerEventHandlers();
    this.leave("initializing");
    this.trigger("initialized");
  };
  u.prototype.isVisible = function () {
    return this.settings.checkVisibility ? this.$element.is(":visible") : !0;
  };
  u.prototype.setup = function () {
    var u = this.viewport(),
      r = this.options.responsive,
      i = -1,
      t = null;
    r
      ? (n.each(r, function (n) {
          n <= u && n > i && (i = Number(n));
        }),
        (t = n.extend({}, this.options, r[i])),
        typeof t.stagePadding == "function" &&
          (t.stagePadding = t.stagePadding()),
        delete t.responsive,
        t.responsiveClass &&
          this.$element.attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(
                  "(" + this.options.responsiveClass + "-)\\S+\\s",
                  "g",
                ),
                "$1" + i,
              ),
          ))
      : (t = n.extend({}, this.options));
    this.trigger("change", { property: { name: "settings", value: t } });
    this._breakpoint = i;
    this.settings = t;
    this.invalidate("settings");
    this.trigger("changed", {
      property: { name: "settings", value: this.settings },
    });
  };
  u.prototype.optionsLogic = function () {
    this.settings.autoWidth &&
      ((this.settings.stagePadding = !1), (this.settings.merge = !1));
  };
  u.prototype.prepare = function (t) {
    var i = this.trigger("prepare", { content: t });
    return (
      i.data ||
        (i.data = n("<" + this.settings.itemElement + "/>")
          .addClass(this.options.itemClass)
          .append(t)),
      this.trigger("prepared", { content: i.data }),
      i.data
    );
  };
  u.prototype.update = function () {
    for (
      var t = 0,
        i = this._pipe.length,
        r = n.proxy(function (n) {
          return this[n];
        }, this._invalidated),
        u = {};
      t < i;

    )
      (this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) &&
        this._pipe[t].run(u),
        t++;
    this._invalidated = {};
    this.is("valid") || this.enter("valid");
  };
  u.prototype.width = function (n) {
    n = n || u.Width.Default;
    switch (n) {
      case u.Width.Inner:
      case u.Width.Outer:
        return this._width;
      default:
        return (
          this._width - this.settings.stagePadding * 2 + this.settings.margin
        );
    }
  };
  u.prototype.refresh = function () {
    this.enter("refreshing");
    this.trigger("refresh");
    this.setup();
    this.optionsLogic();
    this.$element.addClass(this.options.refreshClass);
    this.update();
    this.$element.removeClass(this.options.refreshClass);
    this.leave("refreshing");
    this.trigger("refreshed");
  };
  u.prototype.onThrottledResize = function () {
    t.clearTimeout(this.resizeTimer);
    this.resizeTimer = t.setTimeout(
      this._handlers.onResize,
      this.settings.responsiveRefreshRate,
    );
  };
  u.prototype.onResize = function () {
    if (
      !this._items.length ||
      this._width === this.$element.width() ||
      !this.isVisible()
    )
      return !1;
    if ((this.enter("resizing"), this.trigger("resize").isDefaultPrevented()))
      return this.leave("resizing"), !1;
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this.trigger("resized");
  };
  u.prototype.registerEventHandlers = function () {
    if (n.support.transition)
      this.$stage.on(
        n.support.transition.end + ".owl.core",
        n.proxy(this.onTransitionEnd, this),
      );
    if (this.settings.responsive !== !1)
      this.on(t, "resize", this._handlers.onThrottledResize);
    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this));
      this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
        return !1;
      });
    }
    if (this.settings.touchDrag) {
      this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this));
      this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this));
    }
  };
  u.prototype.onDragStart = function (t) {
    var r = null;
    if (t.which !== 3) {
      n.support.transform
        ? ((r = this.$stage
            .css("transform")
            .replace(/.*\(|\)| /g, "")
            .split(",")),
          (r = {
            x: r[r.length === 16 ? 12 : 4],
            y: r[r.length === 16 ? 13 : 5],
          }))
        : ((r = this.$stage.position()),
          (r = {
            x: this.settings.rtl
              ? r.left +
                this.$stage.width() -
                this.width() +
                this.settings.margin
              : r.left,
            y: r.top,
          }));
      this.is("animating") &&
        (n.support.transform ? this.animate(r.x) : this.$stage.stop(),
        this.invalidate("position"));
      this.$element.toggleClass(this.options.grabClass, t.type === "mousedown");
      this.speed(0);
      this._drag.time = new Date().getTime();
      this._drag.target = n(t.target);
      this._drag.stage.start = r;
      this._drag.stage.current = r;
      this._drag.pointer = this.pointer(t);
      n(i).on(
        "mouseup.owl.core touchend.owl.core",
        n.proxy(this.onDragEnd, this),
      );
      n(i).one(
        "mousemove.owl.core touchmove.owl.core",
        n.proxy(function (t) {
          var r = this.difference(this._drag.pointer, this.pointer(t));
          n(i).on(
            "mousemove.owl.core touchmove.owl.core",
            n.proxy(this.onDragMove, this),
          );
          (Math.abs(r.x) < Math.abs(r.y) && this.is("valid")) ||
            (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this),
      );
    }
  };
  u.prototype.onDragMove = function (n) {
    var t = null,
      i = null,
      u = null,
      f = this.difference(this._drag.pointer, this.pointer(n)),
      r = this.difference(this._drag.stage.start, f);
    this.is("dragging") &&
      (n.preventDefault(),
      this.settings.loop
        ? ((t = this.coordinates(this.minimum())),
          (i = this.coordinates(this.maximum() + 1) - t),
          (r.x = ((((r.x - t) % i) + i) % i) + t))
        : ((t = this.settings.rtl
            ? this.coordinates(this.maximum())
            : this.coordinates(this.minimum())),
          (i = this.settings.rtl
            ? this.coordinates(this.minimum())
            : this.coordinates(this.maximum())),
          (u = this.settings.pullDrag ? f.x / -5 : 0),
          (r.x = Math.max(Math.min(r.x, t + u), i + u))),
      (this._drag.stage.current = r),
      this.animate(r.x));
  };
  u.prototype.onDragEnd = function (t) {
    var r = this.difference(this._drag.pointer, this.pointer(t)),
      f = this._drag.stage.current,
      u = (r.x > 0) ^ this.settings.rtl ? "left" : "right";
    if (
      (n(i).off(".owl.core"),
      this.$element.removeClass(this.options.grabClass),
      ((r.x !== 0 && this.is("dragging")) || !this.is("valid")) &&
        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(f.x, r.x !== 0 ? u : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        (this._drag.direction = u),
        Math.abs(r.x) > 3 || new Date().getTime() - this._drag.time > 300))
    )
      this._drag.target.one("click.owl.core", function () {
        return !1;
      });
    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  };
  u.prototype.closest = function (t, i) {
    var u = -1,
      e = 30,
      o = this.width(),
      f = this.coordinates();
    return (
      this.settings.freeDrag ||
        n.each(
          f,
          n.proxy(function (n, s) {
            return (
              i === "left" && t > s - e && t < s + e
                ? (u = n)
                : i === "right" && t > s - o - e && t < s - o + e
                ? (u = n + 1)
                : this.op(t, "<", s) &&
                  this.op(t, ">", f[n + 1] !== r ? f[n + 1] : s - o) &&
                  (u = i === "left" ? n + 1 : n),
              u === -1
            );
          }, this),
        ),
      this.settings.loop ||
        (this.op(t, ">", f[this.minimum()])
          ? (u = t = this.minimum())
          : this.op(t, "<", f[this.maximum()]) && (u = t = this.maximum())),
      u
    );
  };
  u.prototype.animate = function (t) {
    var i = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd();
    i && (this.enter("animating"), this.trigger("translate"));
    n.support.transform3d && n.support.transition
      ? this.$stage.css({
          transform: "translate3d(" + t + "px,0px,0px)",
          transition:
            this.speed() / 1e3 +
            "s" +
            (this.settings.slideTransition
              ? " " + this.settings.slideTransition
              : ""),
        })
      : i
      ? this.$stage.animate(
          { left: t + "px" },
          this.speed(),
          this.settings.fallbackEasing,
          n.proxy(this.onTransitionEnd, this),
        )
      : this.$stage.css({ left: t + "px" });
  };
  u.prototype.is = function (n) {
    return this._states.current[n] && this._states.current[n] > 0;
  };
  u.prototype.current = function (n) {
    if (n === r) return this._current;
    if (this._items.length === 0) return r;
    if (((n = this.normalize(n)), this._current !== n)) {
      var t = this.trigger("change", {
        property: { name: "position", value: n },
      });
      t.data !== r && (n = this.normalize(t.data));
      this._current = n;
      this.invalidate("position");
      this.trigger("changed", {
        property: { name: "position", value: this._current },
      });
    }
    return this._current;
  };
  u.prototype.invalidate = function (t) {
    return (
      n.type(t) === "string" &&
        ((this._invalidated[t] = !0), this.is("valid") && this.leave("valid")),
      n.map(this._invalidated, function (n, t) {
        return t;
      })
    );
  };
  u.prototype.reset = function (n) {
    ((n = this.normalize(n)), n !== r) &&
      ((this._speed = 0),
      (this._current = n),
      this.suppress(["translate", "translated"]),
      this.animate(this.coordinates(n)),
      this.release(["translate", "translated"]));
  };
  u.prototype.normalize = function (n, t) {
    var i = this._items.length,
      u = t ? 0 : this._clones.length;
    return (
      !this.isNumeric(n) || i < 1
        ? (n = r)
        : (n < 0 || n >= i + u) && (n = ((((n - u / 2) % i) + i) % i) + u / 2),
      n
    );
  };
  u.prototype.relative = function (n) {
    return (n -= this._clones.length / 2), this.normalize(n, !0);
  };
  u.prototype.maximum = function (n) {
    var i = this.settings,
      r = this._coordinates.length,
      t,
      u,
      f;
    if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
    else if (i.autoWidth || i.merge) {
      if (((t = this._items.length), t))
        for (u = this._items[--t].width(), f = this.$element.width(); t--; )
          if (((u += this._items[t].width() + this.settings.margin), u > f))
            break;
      r = t + 1;
    } else r = i.center ? this._items.length - 1 : this._items.length - i.items;
    return n && (r -= this._clones.length / 2), Math.max(r, 0);
  };
  u.prototype.minimum = function (n) {
    return n ? 0 : this._clones.length / 2;
  };
  u.prototype.items = function (n) {
    return n === r
      ? this._items.slice()
      : ((n = this.normalize(n, !0)), this._items[n]);
  };
  u.prototype.mergers = function (n) {
    return n === r
      ? this._mergers.slice()
      : ((n = this.normalize(n, !0)), this._mergers[n]);
  };
  u.prototype.clones = function (t) {
    var i = this._clones.length / 2,
      f = i + this._items.length,
      u = function (n) {
        return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2;
      };
    return t === r
      ? n.map(this._clones, function (n, t) {
          return u(t);
        })
      : n.map(this._clones, function (n, i) {
          return n === t ? u(i) : null;
        });
  };
  u.prototype.speed = function (n) {
    return n !== r && (this._speed = n), this._speed;
  };
  u.prototype.coordinates = function (t) {
    var f = 1,
      u = t - 1,
      i;
    return t === r
      ? n.map(
          this._coordinates,
          n.proxy(function (n, t) {
            return this.coordinates(t);
          }, this),
        )
      : (this.settings.center
          ? (this.settings.rtl && ((f = -1), (u = t + 1)),
            (i = this._coordinates[t]),
            (i += ((this.width() - i + (this._coordinates[u] || 0)) / 2) * f))
          : (i = this._coordinates[u] || 0),
        Math.ceil(i));
  };
  u.prototype.duration = function (n, t, i) {
    return i === 0
      ? 0
      : Math.min(Math.max(Math.abs(t - n), 1), 6) *
          Math.abs(i || this.settings.smartSpeed);
  };
  u.prototype.to = function (n, t) {
    var f = this.current(),
      r = null,
      i = n - this.relative(f),
      s = (i > 0) - (i < 0),
      e = this._items.length,
      o = this.minimum(),
      u = this.maximum();
    this.settings.loop
      ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += s * -1 * e),
        (n = f + i),
        (r = ((((n - o) % e) + e) % e) + o),
        r !== n &&
          r - i <= u &&
          r - i > 0 &&
          ((f = r - i), (n = r), this.reset(f)))
      : this.settings.rewind
      ? ((u += 1), (n = ((n % u) + u) % u))
      : (n = Math.max(o, Math.min(u, n)));
    this.speed(this.duration(f, n, t));
    this.current(n);
    this.isVisible() && this.update();
  };
  u.prototype.next = function (n) {
    n = n || !1;
    this.to(this.relative(this.current()) + 1, n);
  };
  u.prototype.prev = function (n) {
    n = n || !1;
    this.to(this.relative(this.current()) - 1, n);
  };
  u.prototype.onTransitionEnd = function (n) {
    if (
      n !== r &&
      (n.stopPropagation(),
      (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))
    )
      return !1;
    this.leave("animating");
    this.trigger("translated");
  };
  u.prototype.viewport = function () {
    var r;
    return (
      this.options.responsiveBaseElement !== t
        ? (r = n(this.options.responsiveBaseElement).width())
        : t.innerWidth
        ? (r = t.innerWidth)
        : i.documentElement && i.documentElement.clientWidth
        ? (r = i.documentElement.clientWidth)
        : console.warn("Can not detect viewport width."),
      r
    );
  };
  u.prototype.replace = function (t) {
    this.$stage.empty();
    this._items = [];
    t && (t = t instanceof jQuery ? t : n(t));
    this.settings.nestedItemSelector &&
      (t = t.find("." + this.settings.nestedItemSelector));
    t.filter(function () {
      return this.nodeType === 1;
    }).each(
      n.proxy(function (n, t) {
        t = this.prepare(t);
        this.$stage.append(t);
        this._items.push(t);
        this._mergers.push(
          t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") *
            1 || 1,
        );
      }, this),
    );
    this.reset(
      this.isNumeric(this.settings.startPosition)
        ? this.settings.startPosition
        : 0,
    );
    this.invalidate("items");
  };
  u.prototype.add = function (t, i) {
    var u = this.relative(this._current);
    i = i === r ? this._items.length : this.normalize(i, !0);
    t = t instanceof jQuery ? t : n(t);
    this.trigger("add", { content: t, position: i });
    t = this.prepare(t);
    this._items.length === 0 || i === this._items.length
      ? (this._items.length === 0 && this.$stage.append(t),
        this._items.length !== 0 && this._items[i - 1].after(t),
        this._items.push(t),
        this._mergers.push(
          t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") *
            1 || 1,
        ))
      : (this._items[i].before(t),
        this._items.splice(i, 0, t),
        this._mergers.splice(
          i,
          0,
          t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") *
            1 || 1,
        ));
    this._items[u] && this.reset(this._items[u].index());
    this.invalidate("items");
    this.trigger("added", { content: t, position: i });
  };
  u.prototype.remove = function (n) {
    ((n = this.normalize(n, !0)), n !== r) &&
      (this.trigger("remove", { content: this._items[n], position: n }),
      this._items[n].remove(),
      this._items.splice(n, 1),
      this._mergers.splice(n, 1),
      this.invalidate("items"),
      this.trigger("removed", { content: null, position: n }));
  };
  u.prototype.preloadAutoWidthImages = function (t) {
    t.each(
      n.proxy(function (t, i) {
        this.enter("pre-loading");
        i = n(i);
        n(new Image())
          .one(
            "load",
            n.proxy(function (n) {
              i.attr("src", n.target.src);
              i.css("opacity", 1);
              this.leave("pre-loading");
              this.is("pre-loading") ||
                this.is("initializing") ||
                this.refresh();
            }, this),
          )
          .attr(
            "src",
            i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"),
          );
      }, this),
    );
  };
  u.prototype.destroy = function () {
    this.$element.off(".owl.core");
    this.$stage.off(".owl.core");
    n(i).off(".owl.core");
    this.settings.responsive !== !1 &&
      (t.clearTimeout(this.resizeTimer),
      this.off(t, "resize", this._handlers.onThrottledResize));
    for (var r in this._plugins) this._plugins[r].destroy();
    this.$stage.children(".cloned").remove();
    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.remove();
    this.$element
      .removeClass(this.options.refreshClass)
      .removeClass(this.options.loadingClass)
      .removeClass(this.options.loadedClass)
      .removeClass(this.options.rtlClass)
      .removeClass(this.options.dragClass)
      .removeClass(this.options.grabClass)
      .attr(
        "class",
        this.$element
          .attr("class")
          .replace(
            new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
            "",
          ),
      )
      .removeData("owl.carousel");
  };
  u.prototype.op = function (n, t, i) {
    var r = this.settings.rtl;
    switch (t) {
      case "<":
        return r ? n > i : n < i;
      case ">":
        return r ? n < i : n > i;
      case ">=":
        return r ? n <= i : n >= i;
      case "<=":
        return r ? n >= i : n <= i;
    }
  };
  u.prototype.on = function (n, t, i, r) {
    n.addEventListener
      ? n.addEventListener(t, i, r)
      : n.attachEvent && n.attachEvent("on" + t, i);
  };
  u.prototype.off = function (n, t, i, r) {
    n.removeEventListener
      ? n.removeEventListener(t, i, r)
      : n.detachEvent && n.detachEvent("on" + t, i);
  };
  u.prototype.trigger = function (t, i, r) {
    var o = { item: { count: this._items.length, index: this.current() } },
      e = n.camelCase(
        n
          .grep(["on", t, r], function (n) {
            return n;
          })
          .join("-")
          .toLowerCase(),
      ),
      f = n.Event(
        [t, "owl", r || "carousel"].join(".").toLowerCase(),
        n.extend({ relatedTarget: this }, o, i),
      );
    return (
      this._supress[t] ||
        (n.each(this._plugins, function (n, t) {
          if (t.onTrigger) t.onTrigger(f);
        }),
        this.register({ type: u.Type.Event, name: t }),
        this.$element.trigger(f),
        this.settings &&
          typeof this.settings[e] == "function" &&
          this.settings[e].call(this, f)),
      f
    );
  };
  u.prototype.enter = function (t) {
    n.each(
      [t].concat(this._states.tags[t] || []),
      n.proxy(function (n, t) {
        this._states.current[t] === r && (this._states.current[t] = 0);
        this._states.current[t]++;
      }, this),
    );
  };
  u.prototype.leave = function (t) {
    n.each(
      [t].concat(this._states.tags[t] || []),
      n.proxy(function (n, t) {
        this._states.current[t]--;
      }, this),
    );
  };
  u.prototype.register = function (t) {
    if (t.type === u.Type.Event) {
      if (
        (n.event.special[t.name] || (n.event.special[t.name] = {}),
        !n.event.special[t.name].owl)
      ) {
        var i = n.event.special[t.name]._default;
        n.event.special[t.name]._default = function (n) {
          return i &&
            i.apply &&
            (!n.namespace || n.namespace.indexOf("owl") === -1)
            ? i.apply(this, arguments)
            : n.namespace && n.namespace.indexOf("owl") > -1;
        };
        n.event.special[t.name].owl = !0;
      }
    } else
      t.type === u.Type.State &&
        ((this._states.tags[t.name] = this._states.tags[t.name]
          ? this._states.tags[t.name].concat(t.tags)
          : t.tags),
        (this._states.tags[t.name] = n.grep(
          this._states.tags[t.name],
          n.proxy(function (i, r) {
            return n.inArray(i, this._states.tags[t.name]) === r;
          }, this),
        )));
  };
  u.prototype.suppress = function (t) {
    n.each(
      t,
      n.proxy(function (n, t) {
        this._supress[t] = !0;
      }, this),
    );
  };
  u.prototype.release = function (t) {
    n.each(
      t,
      n.proxy(function (n, t) {
        delete this._supress[t];
      }, this),
    );
  };
  u.prototype.pointer = function (n) {
    var i = { x: null, y: null };
    return (
      (n = n.originalEvent || n || t.event),
      (n =
        n.touches && n.touches.length
          ? n.touches[0]
          : n.changedTouches && n.changedTouches.length
          ? n.changedTouches[0]
          : n),
      n.pageX
        ? ((i.x = n.pageX), (i.y = n.pageY))
        : ((i.x = n.clientX), (i.y = n.clientY)),
      i
    );
  };
  u.prototype.isNumeric = function (n) {
    return !isNaN(parseFloat(n));
  };
  u.prototype.difference = function (n, t) {
    return { x: n.x - t.x, y: n.y - t.y };
  };
  n.fn.owlCarousel = function (t) {
    var i = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var f = n(this),
        r = f.data("owl.carousel");
      r ||
        ((r = new u(this, typeof t == "object" && t)),
        f.data("owl.carousel", r),
        n.each(
          [
            "next",
            "prev",
            "to",
            "destroy",
            "refresh",
            "replace",
            "add",
            "remove",
          ],
          function (t, i) {
            r.register({ type: u.Type.Event, name: i });
            r.$element.on(
              i + ".owl.carousel.core",
              n.proxy(function (n) {
                n.namespace &&
                  n.relatedTarget !== this &&
                  (this.suppress([i]),
                  r[i].apply(this, [].slice.call(arguments, 1)),
                  this.release([i]));
              }, r),
            );
          },
        ));
      typeof t == "string" && t.charAt(0) !== "_" && r[t].apply(r, i);
    });
  };
  n.fn.owlCarousel.Constructor = u;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t) {
  var i = function (t) {
    this._core = t;
    this._interval = null;
    this._visible = null;
    this._handlers = {
      "initialized.owl.carousel": n.proxy(function (n) {
        n.namespace && this._core.settings.autoRefresh && this.watch();
      }, this),
    };
    this._core.options = n.extend({}, i.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  i.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 };
  i.prototype.watch = function () {
    this._interval ||
      ((this._visible = this._core.isVisible()),
      (this._interval = t.setInterval(
        n.proxy(this.refresh, this),
        this._core.settings.autoRefreshInterval,
      )));
  };
  i.prototype.refresh = function () {
    this._core.isVisible() !== this._visible &&
      ((this._visible = !this._visible),
      this._core.$element.toggleClass("owl-hidden", !this._visible),
      this._visible && this._core.invalidate("width") && this._core.refresh());
  };
  i.prototype.destroy = function () {
    var n, i;
    t.clearInterval(this._interval);
    for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
    for (i in Object.getOwnPropertyNames(this))
      typeof this[i] != "function" && (this[i] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i;
})(window.Zepto || window.jQuery, window, document);
/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t, i, r) {
  var u = function (t) {
    this._core = t;
    this._loaded = [];
    this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
        n.proxy(function (t) {
          if (
            t.namespace &&
            this._core.settings &&
            this._core.settings.lazyLoad &&
            ((t.property && t.property.name == "position") ||
              t.type == "initialized")
          ) {
            var i = this._core.settings,
              u = (i.center && Math.ceil(i.items / 2)) || i.items,
              e = (i.center && u * -1) || 0,
              f =
                (t.property && t.property.value !== r
                  ? t.property.value
                  : this._core.current()) + e,
              o = this._core.clones().length,
              s = n.proxy(function (n, t) {
                this.load(t);
              }, this);
            for (
              i.lazyLoadEager > 0 &&
              ((u += i.lazyLoadEager), i.loop && ((f -= i.lazyLoadEager), u++));
              e++ < u;

            )
              this.load(o / 2 + this._core.relative(f)),
                o && n.each(this._core.clones(this._core.relative(f)), s),
                f++;
          }
        }, this),
    };
    this._core.options = n.extend({}, u.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  u.Defaults = { lazyLoad: !1, lazyLoadEager: 0 };
  u.prototype.load = function (i) {
    var r = this._core.$stage.children().eq(i),
      u = r && r.find(".owl-lazy");
    !u ||
      n.inArray(r.get(0), this._loaded) > -1 ||
      (u.each(
        n.proxy(function (i, r) {
          var u = n(r),
            e,
            f =
              (t.devicePixelRatio > 1 && u.attr("data-src-retina")) ||
              u.attr("data-src") ||
              u.attr("data-srcset");
          this._core.trigger("load", { element: u, url: f }, "lazy");
          u.is("img")
            ? u
                .one(
                  "load.owl.lazy",
                  n.proxy(function () {
                    u.css("opacity", 1);
                    this._core.trigger(
                      "loaded",
                      { element: u, url: f },
                      "lazy",
                    );
                  }, this),
                )
                .attr("src", f)
            : u.is("source")
            ? u
                .one(
                  "load.owl.lazy",
                  n.proxy(function () {
                    this._core.trigger(
                      "loaded",
                      { element: u, url: f },
                      "lazy",
                    );
                  }, this),
                )
                .attr("srcset", f)
            : ((e = new Image()),
              (e.onload = n.proxy(function () {
                u.css({ "background-image": 'url("' + f + '")', opacity: "1" });
                this._core.trigger("loaded", { element: u, url: f }, "lazy");
              }, this)),
              (e.src = f));
        }, this),
      ),
      this._loaded.push(r.get(0)));
  };
  u.prototype.destroy = function () {
    var n, t;
    for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
    for (t in Object.getOwnPropertyNames(this))
      typeof this[t] != "function" && (this[t] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.Lazy = u;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t) {
  var i = function (r) {
    this._core = r;
    this._previousHeight = null;
    this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function (n) {
        n.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.settings.autoHeight &&
          n.property.name === "position" &&
          this.update();
      }, this),
      "loaded.owl.lazy": n.proxy(function (n) {
        n.namespace &&
          this._core.settings.autoHeight &&
          n.element.closest("." + this._core.settings.itemClass).index() ===
            this._core.current() &&
          this.update();
      }, this),
    };
    this._core.options = n.extend({}, i.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
    this._intervalId = null;
    var u = this;
    n(t).on("load", function () {
      u._core.settings.autoHeight && u.update();
    });
    n(t).resize(function () {
      u._core.settings.autoHeight &&
        (u._intervalId != null && clearTimeout(u._intervalId),
        (u._intervalId = setTimeout(function () {
          u.update();
        }, 250)));
    });
  };
  i.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" };
  i.prototype.update = function () {
    var i = this._core._current,
      u = i + this._core.settings.items,
      f = this._core.settings.lazyLoad,
      e = this._core.$stage.children().toArray().slice(i, u),
      r = [],
      t = 0;
    n.each(e, function (t, i) {
      r.push(n(i).height());
    });
    t = Math.max.apply(null, r);
    t <= 1 && f && this._previousHeight && (t = this._previousHeight);
    this._previousHeight = t;
    this._core.$stage
      .parent()
      .height(t)
      .addClass(this._core.settings.autoHeightClass);
  };
  i.prototype.destroy = function () {
    var n, t;
    for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
    for (t in Object.getOwnPropertyNames(this))
      typeof this[t] != "function" && (this[t] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.AutoHeight = i;
})(window.Zepto || window.jQuery, window, document);
/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t, i) {
  var r = function (t) {
    this._core = t;
    this._videos = {};
    this._playing = null;
    this._handlers = {
      "initialized.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.register({
            type: "state",
            name: "playing",
            tags: ["interacting"],
          });
      }, this),
      "resize.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.settings.video &&
          this.isInFullScreen() &&
          n.preventDefault();
      }, this),
      "refreshed.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.is("resizing") &&
          this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          n.property.name === "position" &&
          this._playing &&
          this.stop();
      }, this),
      "prepared.owl.carousel": n.proxy(function (t) {
        if (t.namespace) {
          var i = n(t.content).find(".owl-video");
          i.length && (i.css("display", "none"), this.fetch(i, n(t.content)));
        }
      }, this),
    };
    this._core.options = n.extend({}, r.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
    this._core.$element.on(
      "click.owl.video",
      ".owl-video-play-icon",
      n.proxy(function (n) {
        this.play(n);
      }, this),
    );
  };
  r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 };
  r.prototype.fetch = function (n, t) {
    var u = (function () {
        return n.attr("data-vimeo-id")
          ? "vimeo"
          : n.attr("data-vzaar-id")
          ? "vzaar"
          : "youtube";
      })(),
      i =
        n.attr("data-vimeo-id") ||
        n.attr("data-youtube-id") ||
        n.attr("data-vzaar-id"),
      f = n.attr("data-width") || this._core.settings.videoWidth,
      e = n.attr("data-height") || this._core.settings.videoHeight,
      r = n.attr("href");
    if (r) {
      if (
        ((i = r.match(
          /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
        )),
        i[3].indexOf("youtu") > -1)
      )
        u = "youtube";
      else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
      else if (i[3].indexOf("vzaar") > -1) u = "vzaar";
      else throw new Error("Video URL not supported.");
      i = i[6];
    } else throw new Error("Missing video URL.");
    this._videos[r] = { type: u, id: i, width: f, height: e };
    t.attr("data-video", r);
    this.thumbnail(n, this._videos[r]);
  };
  r.prototype.thumbnail = function (t, i) {
    var f,
      o,
      r,
      c =
        i.width && i.height
          ? "width:" + i.width + "px;height:" + i.height + "px;"
          : "",
      e = t.find("img"),
      s = "src",
      h = "",
      l = this._core.settings,
      u = function (i) {
        o = '<div class="owl-video-play-icon"></div>';
        f = l.lazyLoad
          ? n("<div/>", { class: "owl-video-tn " + h, srcType: i })
          : n("<div/>", {
              class: "owl-video-tn",
              style: "opacity:1;background-image:url(" + i + ")",
            });
        t.after(f);
        t.after(o);
      };
    if (
      (t.wrap(n("<div/>", { class: "owl-video-wrapper", style: c })),
      this._core.settings.lazyLoad && ((s = "data-src"), (h = "owl-lazy")),
      e.length)
    )
      return u(e.attr(s)), e.remove(), !1;
    i.type === "youtube"
      ? ((r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), u(r))
      : i.type === "vimeo"
      ? n.ajax({
          type: "GET",
          url: "//vimeo.com/api/v2/video/" + i.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (n) {
            r = n[0].thumbnail_large;
            u(r);
          },
        })
      : i.type === "vzaar" &&
        n.ajax({
          type: "GET",
          url: "//vzaar.com/api/videos/" + i.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (n) {
            r = n.framegrab_url;
            u(r);
          },
        });
  };
  r.prototype.stop = function () {
    this._core.trigger("stop", null, "video");
    this._playing.find(".owl-video-frame").remove();
    this._playing.removeClass("owl-video-playing");
    this._playing = null;
    this._core.leave("playing");
    this._core.trigger("stopped", null, "video");
  };
  r.prototype.play = function (t) {
    var f = n(t.target),
      u = f.closest("." + this._core.settings.itemClass),
      i = this._videos[u.attr("data-video")],
      e = i.width || "100%",
      o = i.height || this._core.$stage.height(),
      r,
      s;
    this._playing ||
      (this._core.enter("playing"),
      this._core.trigger("play", null, "video"),
      (u = this._core.items(this._core.relative(u.index()))),
      this._core.reset(u.index()),
      (r = n(
        '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>',
      )),
      r.attr("height", o),
      r.attr("width", e),
      i.type === "youtube"
        ? r.attr(
            "src",
            "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id,
          )
        : i.type === "vimeo"
        ? r.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1")
        : i.type === "vzaar" &&
          r.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"),
      (s = n(r)
        .wrap('<div class="owl-video-frame" />')
        .insertAfter(u.find(".owl-video"))),
      (this._playing = u.addClass("owl-video-playing")));
  };
  r.prototype.isInFullScreen = function () {
    var t =
      i.fullscreenElement ||
      i.mozFullScreenElement ||
      i.webkitFullscreenElement;
    return t && n(t).parent().hasClass("owl-video-frame");
  };
  r.prototype.destroy = function () {
    var n, t;
    this._core.$element.off("click.owl.video");
    for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
    for (t in Object.getOwnPropertyNames(this))
      typeof this[t] != "function" && (this[t] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.Video = r;
})(window.Zepto || window.jQuery, window, document);
/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t, i, r) {
  var u = function (t) {
    this.core = t;
    this.core.options = n.extend({}, u.Defaults, this.core.options);
    this.swapping = !0;
    this.previous = r;
    this.next = r;
    this.handlers = {
      "change.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          n.property.name == "position" &&
          ((this.previous = this.core.current()),
          (this.next = n.property.value));
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(
        function (n) {
          n.namespace && (this.swapping = n.type == "translated");
        },
        this,
      ),
      "translate.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this.swapping &&
          (this.core.options.animateOut || this.core.options.animateIn) &&
          this.swap();
      }, this),
    };
    this.core.$element.on(this.handlers);
  };
  u.Defaults = { animateOut: !1, animateIn: !1 };
  u.prototype.swap = function () {
    if (
      this.core.settings.items === 1 &&
      n.support.animation &&
      n.support.transition
    ) {
      this.core.speed(0);
      var t,
        i = n.proxy(this.clear, this),
        f = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        r = this.core.settings.animateIn,
        u = this.core.settings.animateOut;
      this.core.current() !== this.previous &&
        (u &&
          ((t =
            this.core.coordinates(this.previous) -
            this.core.coordinates(this.next)),
          f
            .one(n.support.animation.end, i)
            .css({ left: t + "px" })
            .addClass("animated owl-animated-out")
            .addClass(u)),
        r &&
          e
            .one(n.support.animation.end, i)
            .addClass("animated owl-animated-in")
            .addClass(r));
    }
  };
  u.prototype.clear = function (t) {
    n(t.target)
      .css({ left: "" })
      .removeClass("animated owl-animated-out owl-animated-in")
      .removeClass(this.core.settings.animateIn)
      .removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };
  u.prototype.destroy = function () {
    var n, t;
    for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
    for (t in Object.getOwnPropertyNames(this))
      typeof this[t] != "function" && (this[t] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.Animate = u;
})(window.Zepto || window.jQuery, window, document);
/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De CaluwĂ©
 * @license The MIT License (MIT)
 */
(function (n, t, i) {
  var r = function (t) {
    this._core = t;
    this._call = null;
    this._time = 0;
    this._timeout = 0;
    this._paused = !0;
    this._handlers = {
      "changed.owl.carousel": n.proxy(function (n) {
        n.namespace && n.property.name === "settings"
          ? this._core.settings.autoplay
            ? this.play()
            : this.stop()
          : n.namespace &&
            n.property.name === "position" &&
            this._paused &&
            (this._time = 0);
      }, this),
      "initialized.owl.carousel": n.proxy(function (n) {
        n.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": n.proxy(function (n, t, i) {
        n.namespace && this.play(t, i);
      }, this),
      "stop.owl.autoplay": n.proxy(function (n) {
        n.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": n.proxy(function () {
        this._core.settings.autoplayHoverPause &&
          this._core.is("rotating") &&
          this.pause();
      }, this),
      "mouseleave.owl.autoplay": n.proxy(function () {
        this._core.settings.autoplayHoverPause &&
          this._core.is("rotating") &&
          this.play();
      }, this),
      "touchstart.owl.core": n.proxy(function () {
        this._core.settings.autoplayHoverPause &&
          this._core.is("rotating") &&
          this.pause();
      }, this),
      "touchend.owl.core": n.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this),
    };
    this._core.$element.on(this._handlers);
    this._core.options = n.extend({}, r.Defaults, this._core.options);
  };
  r.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1,
  };
  r.prototype._next = function (r) {
    ((this._call = t.setTimeout(
      n.proxy(this._next, this, r),
      this._timeout * (Math.round(this.read() / this._timeout) + 1) -
        this.read(),
    )),
    this._core.is("interacting") || i.hidden) ||
      this._core.next(r || this._core.settings.autoplaySpeed);
  };
  r.prototype.read = function () {
    return new Date().getTime() - this._time;
  };
  r.prototype.play = function (i, r) {
    var u;
    this._core.is("rotating") || this._core.enter("rotating");
    i = i || this._core.settings.autoplayTimeout;
    u = Math.min(this._time % (this._timeout || i), i);
    this._paused
      ? ((this._time = this.read()), (this._paused = !1))
      : t.clearTimeout(this._call);
    this._time += (this.read() % i) - u;
    this._timeout = i;
    this._call = t.setTimeout(n.proxy(this._next, this, r), i - u);
  };
  r.prototype.stop = function () {
    this._core.is("rotating") &&
      ((this._time = 0),
      (this._paused = !0),
      t.clearTimeout(this._call),
      this._core.leave("rotating"));
  };
  r.prototype.pause = function () {
    this._core.is("rotating") &&
      !this._paused &&
      ((this._time = this.read()),
      (this._paused = !0),
      t.clearTimeout(this._call));
  };
  r.prototype.destroy = function () {
    var n, t;
    this.stop();
    for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
    for (t in Object.getOwnPropertyNames(this))
      typeof this[t] != "function" && (this[t] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.autoplay = r;
})(window.Zepto || window.jQuery, window, document);
/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n) {
  "use strict";
  var t = function (i) {
    this._core = i;
    this._initialized = !1;
    this._pages = [];
    this._controls = {};
    this._templates = [];
    this.$element = this._core.$element;
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to,
    };
    this._handlers = {
      "prepared.owl.carousel": n.proxy(function (t) {
        t.namespace &&
          this._core.settings.dotsData &&
          this._templates.push(
            '<div class="' +
              this._core.settings.dotClass +
              '">' +
              n(t.content)
                .find("[data-dot]")
                .addBack("[data-dot]")
                .attr("data-dot") +
              "</div>",
          );
      }, this),
      "added.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.settings.dotsData &&
          this._templates.splice(n.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._core.settings.dotsData &&
          this._templates.splice(n.position, 1);
      }, this),
      "changed.owl.carousel": n.proxy(function (n) {
        n.namespace && n.property.name == "position" && this.draw();
      }, this),
      "initialized.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          !this._initialized &&
          (this._core.trigger("initialize", null, "navigation"),
          this.initialize(),
          this.update(),
          this.draw(),
          (this._initialized = !0),
          this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": n.proxy(function (n) {
        n.namespace &&
          this._initialized &&
          (this._core.trigger("refresh", null, "navigation"),
          this.update(),
          this.draw(),
          this._core.trigger("refreshed", null, "navigation"));
      }, this),
    };
    this._core.options = n.extend({}, t.Defaults, this._core.options);
    this.$element.on(this._handlers);
  };
  t.Defaults = {
    nav: !1,
    navText: [
      '<span aria-label="Previous">&#x2039;</span>',
      '<span aria-label="Next">&#x203a;</span>',
    ],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1,
  };
  t.prototype.initialize = function () {
    var i,
      t = this._core.settings;
    this._controls.$relative = (
      t.navContainer
        ? n(t.navContainer)
        : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)
    ).addClass("disabled");
    this._controls.$previous = n("<" + t.navElement + ">")
      .addClass(t.navClass[0])
      .html(t.navText[0])
      .prependTo(this._controls.$relative)
      .on(
        "click",
        n.proxy(function () {
          this.prev(t.navSpeed);
        }, this),
      );
    this._controls.$next = n("<" + t.navElement + ">")
      .addClass(t.navClass[1])
      .html(t.navText[1])
      .appendTo(this._controls.$relative)
      .on(
        "click",
        n.proxy(function () {
          this.next(t.navSpeed);
        }, this),
      );
    t.dotsData ||
      (this._templates = [
        n('<button role="button">')
          .addClass(t.dotClass)
          .append(n("<span>"))
          .prop("outerHTML"),
      ]);
    this._controls.$absolute = (
      t.dotsContainer
        ? n(t.dotsContainer)
        : n("<div>").addClass(t.dotsClass).appendTo(this.$element)
    ).addClass("disabled");
    this._controls.$absolute.on(
      "click",
      "button",
      n.proxy(function (i) {
        var r = n(i.target).parent().is(this._controls.$absolute)
          ? n(i.target).index()
          : n(i.target).parent().index();
        i.preventDefault();
        this.to(r, t.dotsSpeed);
      }, this),
    );
    for (i in this._overrides) this._core[i] = n.proxy(this[i], this);
  };
  t.prototype.destroy = function () {
    var t,
      n,
      i,
      r,
      u = this._core.settings;
    for (t in this._handlers) this.$element.off(t, this._handlers[t]);
    for (n in this._controls)
      n === "$relative" && u.navContainer
        ? this._controls[n].html("")
        : this._controls[n].remove();
    for (r in this.overides) this._core[r] = this._overrides[r];
    for (i in Object.getOwnPropertyNames(this))
      typeof this[i] != "function" && (this[i] = null);
  };
  t.prototype.update = function () {
    var t,
      i,
      f,
      r = this._core.clones().length / 2,
      o = r + this._core.items().length,
      u = this._core.maximum(!0),
      n = this._core.settings,
      e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
    if (
      (n.slideBy !== "page" && (n.slideBy = Math.min(n.slideBy, n.items)),
      n.dots || n.slideBy == "page")
    )
      for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) {
        if (i >= e || i === 0) {
          if (
            (this._pages.push({
              start: Math.min(u, t - r),
              end: t - r + e - 1,
            }),
            Math.min(u, t - r) === u)
          )
            break;
          i = 0;
          ++f;
        }
        i += this._core.mergers(this._core.relative(t));
      }
  };
  t.prototype.draw = function () {
    var i,
      t = this._core.settings,
      r = this._core.items().length <= t.items,
      u = this._core.relative(this._core.current()),
      f = t.loop || t.rewind;
    this._controls.$relative.toggleClass("disabled", !t.nav || r);
    t.nav &&
      (this._controls.$previous.toggleClass(
        "disabled",
        !f && u <= this._core.minimum(!0),
      ),
      this._controls.$next.toggleClass(
        "disabled",
        !f && u >= this._core.maximum(!0),
      ));
    this._controls.$absolute.toggleClass("disabled", !t.dots || r);
    t.dots &&
      ((i = this._pages.length - this._controls.$absolute.children().length),
      t.dotsData && i !== 0
        ? this._controls.$absolute.html(this._templates.join(""))
        : i > 0
        ? this._controls.$absolute.append(
            new Array(i + 1).join(this._templates[0]),
          )
        : i < 0 && this._controls.$absolute.children().slice(i).remove(),
      this._controls.$absolute.find(".active").removeClass("active"),
      this._controls.$absolute
        .children()
        .eq(n.inArray(this.current(), this._pages))
        .addClass("active"));
  };
  t.prototype.onTrigger = function (t) {
    var i = this._core.settings;
    t.page = {
      index: n.inArray(this.current(), this._pages),
      count: this._pages.length,
      size:
        i &&
        (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
    };
  };
  t.prototype.current = function () {
    var t = this._core.relative(this._core.current());
    return n
      .grep(
        this._pages,
        n.proxy(function (n) {
          return n.start <= t && n.end >= t;
        }, this),
      )
      .pop();
  };
  t.prototype.getPosition = function (t) {
    var i,
      r,
      u = this._core.settings;
    return (
      u.slideBy == "page"
        ? ((i = n.inArray(this.current(), this._pages)),
          (r = this._pages.length),
          t ? ++i : --i,
          (i = this._pages[((i % r) + r) % r].start))
        : ((i = this._core.relative(this._core.current())),
          (r = this._core.items().length),
          t ? (i += u.slideBy) : (i -= u.slideBy)),
      i
    );
  };
  t.prototype.next = function (t) {
    n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
  };
  t.prototype.prev = function (t) {
    n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
  };
  t.prototype.to = function (t, i, r) {
    var u;
    !r && this._pages.length
      ? ((u = this._pages.length),
        n.proxy(this._overrides.to, this._core)(
          this._pages[((t % u) + u) % u].start,
          i,
        ))
      : n.proxy(this._overrides.to, this._core)(t, i);
  };
  n.fn.owlCarousel.Constructor.Plugins.Navigation = t;
})(window.Zepto || window.jQuery, window, document);
/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t, i, r) {
  "use strict";
  var u = function (i) {
    this._core = i;
    this._hashes = {};
    this.$element = this._core.$element;
    this._handlers = {
      "initialized.owl.carousel": n.proxy(function (i) {
        i.namespace &&
          this._core.settings.startPosition === "URLHash" &&
          n(t).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": n.proxy(function (t) {
        if (t.namespace) {
          var i = n(t.content)
            .find("[data-hash]")
            .addBack("[data-hash]")
            .attr("data-hash");
          if (!i) return;
          this._hashes[i] = t.content;
        }
      }, this),
      "changed.owl.carousel": n.proxy(function (i) {
        if (i.namespace && i.property.name === "position") {
          var u = this._core.items(this._core.relative(this._core.current())),
            r = n
              .map(this._hashes, function (n, t) {
                return n === u ? t : null;
              })
              .join();
          if (!r || t.location.hash.slice(1) === r) return;
          t.location.hash = r;
        }
      }, this),
    };
    this._core.options = n.extend({}, u.Defaults, this._core.options);
    this.$element.on(this._handlers);
    n(t).on(
      "hashchange.owl.navigation",
      n.proxy(function () {
        var i = t.location.hash.substring(1),
          u = this._core.$stage.children(),
          n = this._hashes[i] && u.index(this._hashes[i]);
        n !== r &&
          n !== this._core.current() &&
          this._core.to(this._core.relative(n), !1, !0);
      }, this),
    );
  };
  u.Defaults = { URLhashListener: !1 };
  u.prototype.destroy = function () {
    var i, r;
    n(t).off("hashchange.owl.navigation");
    for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
    for (r in Object.getOwnPropertyNames(this))
      typeof this[r] != "function" && (this[r] = null);
  };
  n.fn.owlCarousel.Constructor.Plugins.Hash = u;
})(window.Zepto || window.jQuery, window, document);
/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function (n, t, i, r) {
  function u(t, i) {
    var u = !1,
      f = t.charAt(0).toUpperCase() + t.slice(1);
    return (
      n.each((t + " " + h.join(f + " ") + f).split(" "), function (n, t) {
        if (s[t] !== r) return (u = i ? t : !0), !1;
      }),
      u
    );
  }
  function e(n) {
    return u(n, !0);
  }
  var s = n("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    o = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend",
        },
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend",
        },
      },
    },
    f = {
      csstransforms: function () {
        return !!u("transform");
      },
      csstransforms3d: function () {
        return !!u("perspective");
      },
      csstransitions: function () {
        return !!u("transition");
      },
      cssanimations: function () {
        return !!u("animation");
      },
    };
  f.csstransitions() &&
    ((n.support.transition = new String(e("transition"))),
    (n.support.transition.end = o.transition.end[n.support.transition]));
  f.cssanimations() &&
    ((n.support.animation = new String(e("animation"))),
    (n.support.animation.end = o.animation.end[n.support.animation]));
  f.csstransforms() &&
    ((n.support.transform = new String(e("transform"))),
    (n.support.transform3d = f.csstransforms3d()));
})(window.Zepto || window.jQuery, window, document);
/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (n, t, i) {
  function o(i, r, u) {
    var f = t.createElement(i);
    return r && (f.id = e + r), u && (f.style.cssText = u), n(f);
  }
  function ai() {
    return i.innerHeight ? i.innerHeight : n(i).height();
  }
  function kt(t, i) {
    i !== Object(i) && (i = {});
    this.cache = {};
    this.el = t;
    this.value = function (t) {
      var r;
      return (
        this.cache[t] === undefined &&
          ((r = n(this.el).attr("data-cbox-" + t)),
          r !== undefined
            ? (this.cache[t] = r)
            : i[t] !== undefined
            ? (this.cache[t] = i[t])
            : ni[t] !== undefined && (this.cache[t] = ni[t])),
        this.cache[t]
      );
    };
    this.get = function (t) {
      var i = this.value(t);
      return n.isFunction(i) ? i.call(this.el, this) : i;
    };
  }
  function dt(n) {
    var i = c.length,
      t = (v + n) % i;
    return t < 0 ? i + t : t;
  }
  function a(n, t) {
    return Math.round(
      (/%/.test(n) ? (t === "x" ? g.width() : ai()) / 100 : 1) *
        parseInt(n, 10),
    );
  }
  function pi(n, t) {
    return n.get("photo") || n.get("photoRegex").test(t);
  }
  function wi(n, t) {
    return n.get("retinaUrl") && i.devicePixelRatio > 1
      ? t.replace(n.get("photoRegex"), n.get("retinaSuffix"))
      : t;
  }
  function bi(n) {
    "contains" in u[0] &&
      !u[0].contains(n.target) &&
      n.target !== d[0] &&
      (n.stopPropagation(), u.focus());
  }
  function at(n) {
    at.str !== n && (u.add(d).removeClass(at.str).addClass(n), (at.str = n));
  }
  function gi(t) {
    v = 0;
    t && t !== !1 && t !== "nofollow"
      ? ((c = n("." + ft).filter(function () {
          var i = n.data(this, y),
            r = new kt(this, i);
          return r.get("rel") === t;
        })),
        (v = c.index(r.el)),
        v === -1 && ((c = c.add(r.el)), (v = c.length - 1)))
      : (c = n(r.el));
  }
  function ut(i) {
    n(t).trigger(i);
    w.triggerHandler(i);
  }
  function gt(i) {
    var e, f;
    if (!lt) {
      if (((e = n(i).data(y)), (r = new kt(i, e)), gi(r.get("rel")), !it)) {
        it = ct = !0;
        at(r.get("className"));
        u.css({ visibility: "hidden", display: "block", opacity: "" });
        l = o(
          h,
          "LoadedContent",
          "width:0; height:0; overflow:hidden; visibility:hidden",
        );
        p.css({ width: "", height: "" }).append(l);
        b = ri.height() + ei.height() + p.outerHeight(!0) - p.height();
        k = ui.width() + fi.width() + p.outerWidth(!0) - p.width();
        nt = l.outerHeight(!0);
        tt = l.outerWidth(!0);
        var c = a(r.get("initialWidth"), "x"),
          v = a(r.get("initialHeight"), "y"),
          g = r.get("maxWidth"),
          rt = r.get("maxHeight");
        if (
          ((r.w = Math.max(
            (g !== !1 ? Math.min(c, a(g, "x")) : c) - tt - k,
            0,
          )),
          (r.h = Math.max(
            (rt !== !1 ? Math.min(v, a(rt, "y")) : v) - nt - b,
            0,
          )),
          l.css({ width: "", height: r.h }),
          s.position(),
          ut(di),
          r.get("onOpen"),
          hi.add(oi).hide(),
          u.focus(),
          r.get("trapFocus") && t.addEventListener)
        ) {
          t.addEventListener("focus", bi, !0);
          w.one(ii, function () {
            t.removeEventListener("focus", bi, !0);
          });
        }
        if (r.get("returnFocus"))
          w.one(ii, function () {
            n(r.el).focus();
          });
      }
      f = parseFloat(r.get("opacity"));
      d.css({
        opacity: f === f ? f : "",
        cursor: r.get("overlayClose") ? "pointer" : "",
        visibility: "visible",
      }).show();
      r.get("closeButton")
        ? bt.html(r.get("close")).appendTo(p)
        : bt.appendTo("<div/>");
      ir();
    }
  }
  function ki() {
    u ||
      ((li = !1),
      (g = n(i)),
      (u = o(h)
        .attr({
          id: y,
          class: n.support.opacity === !1 ? e + "IE" : "",
          role: "dialog",
          tabindex: "-1",
        })
        .hide()),
      (d = o(h, "Overlay").hide()),
      (wt = n([o(h, "LoadingOverlay")[0], o(h, "LoadingGraphic")[0]])),
      (rt = o(h, "Wrapper")),
      (p = o(h, "Content").append(
        (oi = o(h, "Title")),
        (si = o(h, "Current")),
        (ht = n('<button type="button"/>').attr({ id: e + "Previous" })),
        (st = n('<button type="button"/>').attr({ id: e + "Next" })),
        (et = o("button", "Slideshow")),
        wt,
      )),
      (bt = n('<button type="button"/>').attr({ id: e + "Close" })),
      rt
        .append(
          o(h).append(
            o(h, "TopLeft"),
            (ri = o(h, "TopCenter")),
            o(h, "TopRight"),
          ),
          o(h, !1, "clear:left").append(
            (ui = o(h, "MiddleLeft")),
            p,
            (fi = o(h, "MiddleRight")),
          ),
          o(h, !1, "clear:left").append(
            o(h, "BottomLeft"),
            (ei = o(h, "BottomCenter")),
            o(h, "BottomRight"),
          ),
        )
        .find("div div")
        .css({ float: "left" }),
      (ot = o(
        h,
        !1,
        "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;",
      )),
      (hi = st.add(ht).add(si).add(et)));
    t.body && !u.parent().length && n(t.body).append(d, u.append(rt, ot));
  }
  function tr() {
    function i(n) {
      n.which > 1 ||
        n.shiftKey ||
        n.altKey ||
        n.metaKey ||
        n.ctrlKey ||
        (n.preventDefault(), gt(this));
    }
    if (u) {
      if (!li)
        if (
          ((li = !0),
          st.click(function () {
            s.next();
          }),
          ht.click(function () {
            s.prev();
          }),
          bt.click(function () {
            s.close();
          }),
          d.click(function () {
            r.get("overlayClose") && s.close();
          }),
          n(t).bind("keydown." + e, function (n) {
            var t = n.keyCode;
            it &&
              r.get("escKey") &&
              t === 27 &&
              (n.preventDefault(), s.close());
            it &&
              r.get("arrowKey") &&
              c[1] &&
              !n.altKey &&
              (t === 37
                ? (n.preventDefault(), ht.click())
                : t === 39 && (n.preventDefault(), st.click()));
          }),
          n.isFunction(n.fn.on))
        )
          n(t).on("click." + e, "." + ft, i);
        else n("." + ft).live("click." + e, i);
      return !0;
    }
    return !1;
  }
  function ir() {
    var t,
      y,
      u = s.prep,
      p,
      d = ++ci,
      l;
    if (
      ((ct = !0),
      (f = !1),
      ut(pt),
      ut(vt),
      r.get("onLoad"),
      (r.h = r.get("height")
        ? a(r.get("height"), "y") - nt - b
        : r.get("innerHeight") && a(r.get("innerHeight"), "y")),
      (r.w = r.get("width")
        ? a(r.get("width"), "x") - tt - k
        : r.get("innerWidth") && a(r.get("innerWidth"), "x")),
      (r.mw = r.w),
      (r.mh = r.h),
      r.get("maxWidth") &&
        ((r.mw = a(r.get("maxWidth"), "x") - tt - k),
        (r.mw = r.w && r.w < r.mw ? r.w : r.mw)),
      r.get("maxHeight") &&
        ((r.mh = a(r.get("maxHeight"), "y") - nt - b),
        (r.mh = r.h && r.h < r.mh ? r.h : r.mh)),
      (t = r.get("href")),
      (vi = setTimeout(function () {
        wt.show();
      }, 100)),
      r.get("inline"))
    ) {
      l = n(t);
      p = n("<div>").hide().insertBefore(l);
      w.one(pt, function () {
        p.replaceWith(l);
      });
      u(l);
    } else if (r.get("iframe")) u(" ");
    else if (r.get("html")) u(r.get("html"));
    else if (pi(r, t)) {
      t = wi(r, t);
      f = r.get("createImg");
      n(f)
        .addClass(e + "Photo")
        .bind("error." + e, function () {
          u(o(h, "Error").html(r.get("imgError")));
        })
        .one("load", function () {
          d === ci &&
            setTimeout(function () {
              var t;
              r.get("retinaImage") &&
                i.devicePixelRatio > 1 &&
                ((f.height = f.height / i.devicePixelRatio),
                (f.width = f.width / i.devicePixelRatio));
              r.get("scalePhotos") &&
                ((y = function () {
                  f.height -= f.height * t;
                  f.width -= f.width * t;
                }),
                r.mw &&
                  f.width > r.mw &&
                  ((t = (f.width - r.mw) / f.width), y()),
                r.mh &&
                  f.height > r.mh &&
                  ((t = (f.height - r.mh) / f.height), y()));
              r.h &&
                (f.style.marginTop = Math.max(r.mh - f.height, 0) / 2 + "px");
              c[1] &&
                (r.get("loop") || c[v + 1]) &&
                ((f.style.cursor = "pointer"),
                n(f).bind("click." + e, function () {
                  s.next();
                }));
              f.style.width = f.width + "px";
              f.style.height = f.height + "px";
              u(f);
            }, 1);
        });
      f.src = t;
    } else
      t &&
        ot.load(t, r.get("data"), function (t, i) {
          d === ci &&
            u(
              i === "error"
                ? o(h, "Error").html(r.get("xhrError"))
                : n(this).contents(),
            );
        });
  }
  var ni = {
      html: !1,
      photo: !1,
      iframe: !1,
      inline: !1,
      transition: "elastic",
      speed: 300,
      fadeOut: 300,
      width: !1,
      initialWidth: "600",
      innerWidth: !1,
      maxWidth: !1,
      height: !1,
      initialHeight: "450",
      innerHeight: !1,
      maxHeight: !1,
      scalePhotos: !0,
      scrolling: !0,
      opacity: 0.9,
      preloading: !0,
      className: !1,
      overlayClose: !0,
      escKey: !0,
      arrowKey: !0,
      top: !1,
      bottom: !1,
      left: !1,
      right: !1,
      fixed: !1,
      data: undefined,
      closeButton: !0,
      fastIframe: !0,
      open: !1,
      reposition: !0,
      loop: !0,
      slideshow: !1,
      slideshowAuto: !0,
      slideshowSpeed: 2500,
      slideshowStart: "start slideshow",
      slideshowStop: "stop slideshow",
      photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
      retinaImage: !1,
      retinaUrl: !1,
      retinaSuffix: "@2x.$1",
      current: "image {current} of {total}",
      previous: "previous",
      next: "next",
      close: "close",
      xhrError: "This content failed to load.",
      imgError: "This image failed to load.",
      returnFocus: !0,
      trapFocus: !0,
      onOpen: !1,
      onLoad: !1,
      onComplete: !1,
      onCleanup: !1,
      onClosed: !1,
      rel: function () {
        return this.rel;
      },
      href: function () {
        return n(this).attr("href");
      },
      title: function () {
        return this.title;
      },
      createImg: function () {
        var t = new Image(),
          i = n(this).data("cbox-img-attrs");
        return (
          typeof i == "object" &&
            n.each(i, function (n, i) {
              t[n] = i;
            }),
          t
        );
      },
      createIframe: function () {
        var i = t.createElement("iframe"),
          r = n(this).data("cbox-iframe-attrs");
        return (
          typeof r == "object" &&
            n.each(r, function (n, t) {
              i[n] = t;
            }),
          "frameBorder" in i && (i.frameBorder = 0),
          "allowTransparency" in i && (i.allowTransparency = "true"),
          (i.name = new Date().getTime()),
          (i.allowFullscreen = !0),
          i
        );
      },
    },
    y = "colorbox",
    e = "cbox",
    ft = e + "Element",
    di = e + "_open",
    vt = e + "_load",
    yt = e + "_complete",
    ti = e + "_cleanup",
    ii = e + "_closed",
    pt = e + "_purge",
    d,
    u,
    rt,
    p,
    ri,
    ui,
    fi,
    ei,
    c,
    g,
    l,
    ot,
    wt,
    oi,
    si,
    et,
    st,
    ht,
    bt,
    hi,
    w = n("<a/>"),
    r,
    b,
    k,
    nt,
    tt,
    v,
    f,
    it,
    ct,
    lt,
    vi,
    s,
    h = "div",
    ci = 0,
    yi = {},
    li,
    nr = (function () {
      function t() {
        clearTimeout(l);
      }
      function o() {
        (r.get("loop") || c[v + 1]) &&
          (t(), (l = setTimeout(s.next, r.get("slideshowSpeed"))));
      }
      function a() {
        et.html(r.get("slideshowStop")).unbind(i).one(i, y);
        w.bind(yt, o).bind(vt, t);
        u.removeClass(n + "off").addClass(n + "on");
      }
      function y() {
        t();
        w.unbind(yt, o).unbind(vt, t);
        et.html(r.get("slideshowStart"))
          .unbind(i)
          .one(i, function () {
            s.next();
            a();
          });
        u.removeClass(n + "on").addClass(n + "off");
      }
      function h() {
        f = !1;
        et.hide();
        t();
        w.unbind(yt, o).unbind(vt, t);
        u.removeClass(n + "off " + n + "on");
      }
      var f,
        n = e + "Slideshow_",
        i = "click." + e,
        l;
      return function () {
        if (f) r.get("slideshow") || (w.unbind(ti, h), h());
        else if (r.get("slideshow") && c[1]) {
          f = !0;
          w.one(ti, h);
          r.get("slideshowAuto") ? a() : y();
          et.show();
        }
      };
    })();
  n[y] ||
    (n(ki),
    (s =
      n.fn[y] =
      n[y] =
        function (t, i) {
          var u,
            r = this;
          return ((t = t || {}),
          n.isFunction(r) && ((r = n("<a/>")), (t.open = !0)),
          !r[0])
            ? r
            : (ki(),
              tr() &&
                (i && (t.onComplete = i),
                r
                  .each(function () {
                    var i = n.data(this, y) || {};
                    n.data(this, y, n.extend(i, t));
                  })
                  .addClass(ft),
                (u = new kt(r[0], t)),
                u.get("open") && gt(r[0])),
              r);
        }),
    (s.position = function (t, i) {
      function w() {
        ri[0].style.width =
          ei[0].style.width =
          p[0].style.width =
            parseInt(u[0].style.width, 10) - k + "px";
        p[0].style.height =
          ui[0].style.height =
          fi[0].style.height =
            parseInt(u[0].style.height, 10) - b + "px";
      }
      var f,
        h = 0,
        c = 0,
        o = u.offset(),
        l,
        v,
        y;
      g.unbind("resize." + e);
      u.css({ top: -9e4, left: -9e4 });
      l = g.scrollTop();
      v = g.scrollLeft();
      r.get("fixed")
        ? ((o.top -= l), (o.left -= v), u.css({ position: "fixed" }))
        : ((h = l), (c = v), u.css({ position: "absolute" }));
      c +=
        r.get("right") !== !1
          ? Math.max(g.width() - r.w - tt - k - a(r.get("right"), "x"), 0)
          : r.get("left") !== !1
          ? a(r.get("left"), "x")
          : Math.round(Math.max(g.width() - r.w - tt - k, 0) / 2);
      h +=
        r.get("bottom") !== !1
          ? Math.max(ai() - r.h - nt - b - a(r.get("bottom"), "y"), 0)
          : r.get("top") !== !1
          ? a(r.get("top"), "y")
          : Math.round(Math.max(ai() - r.h - nt - b, 0) / 2);
      u.css({ top: o.top, left: o.left, visibility: "visible" });
      rt[0].style.width = rt[0].style.height = "9999px";
      f = { width: r.w + tt + k, height: r.h + nt + b, top: h, left: c };
      t &&
        ((y = 0),
        n.each(f, function (n) {
          if (f[n] !== yi[n]) {
            y = t;
            return;
          }
        }),
        (t = y));
      yi = f;
      t || u.css(f);
      u.dequeue().animate(f, {
        duration: t || 0,
        complete: function () {
          w();
          ct = !1;
          rt[0].style.width = r.w + tt + k + "px";
          rt[0].style.height = r.h + nt + b + "px";
          r.get("reposition") &&
            setTimeout(function () {
              g.bind("resize." + e, s.position);
            }, 1);
          n.isFunction(i) && i();
        },
        step: w,
      });
    }),
    (s.resize = function (n) {
      var t;
      it &&
        ((n = n || {}),
        n.width && (r.w = a(n.width, "x") - tt - k),
        n.innerWidth && (r.w = a(n.innerWidth, "x")),
        l.css({ width: r.w }),
        n.height && (r.h = a(n.height, "y") - nt - b),
        n.innerHeight && (r.h = a(n.innerHeight, "y")),
        n.innerHeight ||
          n.height ||
          ((t = l.scrollTop()), l.css({ height: "auto" }), (r.h = l.height())),
        l.css({ height: r.h }),
        t && l.scrollTop(t),
        s.position(r.get("transition") === "none" ? 0 : r.get("speed")));
    }),
    (s.prep = function (i) {
      function k() {
        return (
          (r.w = r.w || l.width()), (r.w = r.mw && r.mw < r.w ? r.mw : r.w), r.w
        );
      }
      function d() {
        return (
          (r.h = r.h || l.height()),
          (r.h = r.mh && r.mh < r.h ? r.mh : r.h),
          r.h
        );
      }
      if (it) {
        var a,
          b = r.get("transition") === "none" ? 0 : r.get("speed");
        l.remove();
        l = o(h, "LoadedContent").append(i);
        l.hide()
          .appendTo(ot.show())
          .css({ width: k(), overflow: r.get("scrolling") ? "auto" : "hidden" })
          .css({ height: d() })
          .prependTo(p);
        ot.hide();
        n(f).css({ float: "none" });
        at(r.get("className"));
        a = function () {
          function s() {
            n.support.opacity === !1 && u[0].style.removeAttribute("filter");
          }
          var f = c.length,
            i,
            o;
          if (it) {
            if (
              ((o = function () {
                clearTimeout(vi);
                wt.hide();
                ut(yt);
                r.get("onComplete");
              }),
              oi.html(r.get("title")).show(),
              l.show(),
              f > 1
                ? (typeof r.get("current") == "string" &&
                    si
                      .html(
                        r
                          .get("current")
                          .replace("{current}", v + 1)
                          .replace("{total}", f),
                      )
                      .show(),
                  st[r.get("loop") || v < f - 1 ? "show" : "hide"]().html(
                    r.get("next"),
                  ),
                  ht[r.get("loop") || v ? "show" : "hide"]().html(
                    r.get("previous"),
                  ),
                  nr(),
                  r.get("preloading") &&
                    n.each([dt(-1), dt(1)], function () {
                      var u,
                        f = c[this],
                        r = new kt(f, n.data(f, y)),
                        i = r.get("href");
                      i &&
                        pi(r, i) &&
                        ((i = wi(r, i)),
                        (u = t.createElement("img")),
                        (u.src = i));
                    }))
                : hi.hide(),
              r.get("iframe"))
            ) {
              i = r.get("createIframe");
              r.get("scrolling") || (i.scrolling = "no");
              n(i)
                .attr({ src: r.get("href"), class: e + "Iframe" })
                .one("load", o)
                .appendTo(l);
              w.one(pt, function () {
                i.src = "//about:blank";
              });
              r.get("fastIframe") && n(i).trigger("load");
            } else o();
            r.get("transition") === "fade" ? u.fadeTo(b, 1, s) : s();
          }
        };
        r.get("transition") === "fade"
          ? u.fadeTo(b, 0, function () {
              s.position(0, a);
            })
          : s.position(b, a);
      }
    }),
    (s.next = function () {
      !ct && c[1] && (r.get("loop") || c[v + 1]) && ((v = dt(1)), gt(c[v]));
    }),
    (s.prev = function () {
      !ct && c[1] && (r.get("loop") || v) && ((v = dt(-1)), gt(c[v]));
    }),
    (s.close = function () {
      it &&
        !lt &&
        ((lt = !0),
        (it = !1),
        ut(ti),
        r.get("onCleanup"),
        g.unbind("." + e),
        d.fadeTo(r.get("fadeOut") || 0, 0),
        u.stop().fadeTo(r.get("fadeOut") || 0, 0, function () {
          u.hide();
          d.hide();
          ut(pt);
          l.remove();
          setTimeout(function () {
            lt = !1;
            ut(ii);
            r.get("onClosed");
          }, 1);
        }));
    }),
    (s.remove = function () {
      u &&
        (u.stop(),
        n[y].close(),
        u.stop(!1, !0).remove(),
        d.remove(),
        (lt = !1),
        (u = null),
        n("." + ft)
          .removeData(y)
          .removeClass(ft),
        n(t)
          .unbind("click." + e)
          .unbind("keydown." + e));
    }),
    (s.element = function () {
      return n(r.el);
    }),
    (s.settings = ni));
})(jQuery, document, window);
var MIN_SSKEYWORD_LENGTH = 2,
  searching = !1,
  timmer,
  json = {},
  globalEvent = {};
smokesignals.convert(globalEvent);
var urlRoot = window.location.origin,
  isHasSub = !1,
  isSearchHis = !0,
  isMobile = !1,
  isCallFastDeli = !1,
  isCallFastDeliSearch = !1,
  hasSusses = !1,
  subID = 0,
  isLoadData = !1,
  fullAddress = "",
  isRunLive =
    urlRoot.indexOf("www.thegioididong.com") > -1 ||
    urlRoot.indexOf("www.dienmayxanh.com") > -1,
  isStaging =
    urlRoot.indexOf("staging.thegioididong.com") > -1 ||
    urlRoot.indexOf("staging.dienmayxanh.com") > -1 ||
    urlRoot.indexOf("newstaging.thegioididong.com") > -1 ||
    urlRoot.indexOf("newstaging.dienmayxanh.com") > -1,
  isBeta =
    urlRoot.indexOf("beta.thegioididong.com") > -1 ||
    urlRoot.indexOf("beta.dienmayxanh.com") > -1 ||
    urlRoot.indexOf("newsbeta.thegioididong.com") > -1 ||
    urlRoot.indexOf("newsbeta.dienmayxanh.com") > -1,
  usedProductPath = "/may-doi-tra",
  isUsedProduct = location.href.indexOf(".com" + usedProductPath) > -1;
$(document).ready(function () {
  var i, u, t;
  if (
    (OverrideRootUrl(urlRoot),
    ($(".header__search .dropdownsearch").length > 0 ||
      $(".focused").length > 0) &&
      ((isHasSub = !0), (subID = $("header.header").data("sub"))),
    $(".showtaga").click(function () {
      $(".footer").addClass("footer--expand");
      $(this).hide();
      $("li.hidden").slideToggle().removeClass("hidden");
    }),
    $("#gb-top-page").click(function () {
      return $("body,html").animate({ scrollTop: 0 }, 800), !1;
    }),
    $(".btn-reset").click(function () {
      $("#skw").val("");
      $("#skw").trigger("keyup");
    }),
    isHasSub ||
      $("#skw").click(function () {
        $(".bg-black").length > 0 && closePopup();
        $(".stickcompare").length > 0 && clearCompare();
        $(".suggest_search li").length > 0
          ? $("#search-result").show()
          : $(this).val() != ""
          ? (console.log("1"), $("#skw").trigger("keyup"))
          : isSearchHis &&
            !isUsedProduct &&
            ($("#search-result").html(""), ViewSearchKeywordHistory());
      }),
    GetDataInfor(),
    GetQuanatyCart(),
    $(".dmca-badge").length > 0 &&
      ((i = $(".dmca-badge").attr("href") + "&refurl=" + location.href),
      $(".dmca-badge").attr("href", i)),
    $(".banner-texttop ._left a").length > 0)
  ) {
    var n = $(".banner-texttop ._left a"),
      e = n.length,
      r = 0;
    function t() {
      n.eq(r % e).show();
      setTimeout(function () {
        r++;
        n.hide();
        t();
      }, 6e3);
    }
    t();
  }
  $(".listproduct .price.twoprice").click(function () {
    $(this).parent().preventDefault();
    window.location.href = $(this).parent().attr("href") + "#2gia";
  });
  CheckButtonCompareCategory();
  u = document.querySelector(".media-slider");
  t = document.querySelectorAll(".media-slider .item");
  u != null && t != null && t.length > 0 && (randomBannerTop(), initCarousel());
  !isRunLive;
  document.querySelectorAll(".lazyload-after").forEach((n) => io.observe(n));
  let f = [];
  f.push('[class^="iconlogo-"], [class*="iconlogo-"]');
  let o = [].slice.call(document.querySelectorAll(f.join()));
  if ("IntersectionObserver" in window) {
    let n = new IntersectionObserver(function (t) {
      t.forEach(function (t) {
        t.isIntersecting &&
          (t.target.classList.add("visible"), n.unobserve(t.target));
      });
    });
    o.forEach(function (t) {
      n.observe(t);
    });
  }
});
const io = new IntersectionObserver((n) =>
  n.forEach((n) => {
    if (n.isIntersecting)
      try {
        const t = n.target;
        t.src = t.dataset.src;
        t.className = t.className.replace("lazyload-after", "lazyloaded");
        io.unobserve(t);
      } catch (t) {
        return console.log(t), !1;
      }
  }),
);
$(document).click(function (n) {
  var t = $("#skw");
  t.is(n.target) || t.has(n.target).length !== 0 || $("#search-result").hide();
});
laodBHX = !1;
loadBHX = !1;
$(window).scroll(function () {
  !laodBHX &&
    $(".zone-bhx").length > 0 &&
    ((laodBHX = !0),
    (typeof callfromsub == "undefined" || callfromsub == !1) &&
      GetProductBHX());
  !loadBHX &&
    $("#showPromoteBHX").length > 0 &&
    ((loadBHX = !0),
    (typeof callfromsub == "undefined" || callfromsub == !1) &&
      ShowProductBHX());
});
isLoadPopupLocation = !0;
IsLoadingPersonalize = !1;
IsLoadingSuggest = !1;
keyViewedHistory = "viewedHistory";
container = $(".watched");
$(document).on("click", ".clean-watch", function () {
  DeleteViewedHistory();
});
Summiting = !1;
bannerTopIndexKey = "BannerTopIndex";
isRandomBannerTop = !1;
pdbxbhxapi = {
  loading: !1,
  validEmail: function () {
    var n = $(".voucherproduct-bhx input[name=email]").val(),
      t = pdbxbhxapi.checkEmail(n);
    return t
      ? ($(".voucherproduct-bhx input[name=email]").removeClass(
          "input-warning",
        ),
        $(".voucherproduct-bhx .voucher-error").addClass("hidden"),
        !0)
      : ($(".voucherproduct-bhx .voucher-error").text(
          "Email khĂ´ng Ä‘Ăºng Ä‘á»‹nh dáº¡ng",
        ),
        $(".voucherproduct-bhx .voucher-error").removeClass("hidden"),
        $(".voucherproduct-bhx input[name=email]").addClass("input-warning"),
        !1);
  },
  validPhone: function () {
    var n = $(".voucherproduct-bhx input[name=phone]").val(),
      t = pdbxbhxapi.checkPhone(n);
    return t
      ? ($(".voucherproduct-bhx input[name=phone]").removeClass(
          "input-warning",
        ),
        $(".voucherproduct-bhx .voucher-error").addClass("hidden"),
        !0)
      : ($(".voucherproduct-bhx .voucher-error span").text(
          "Sá»‘ Ä‘iá»‡n thoáº¡i khĂ´ng Ä‘Ăºng Ä‘á»‹nh dáº¡ng",
        ),
        $(".voucherproduct-bhx input[name=phone]").addClass("input-warning"),
        $(".voucherproduct-bhx .voucher-error").removeClass("hidden"),
        !1);
  },
  sendCoupon: function () {
    if (!pdbxbhxapi.checkValid()) return !1;
    if (!pdbxbhxapi.loading) {
      var n = {
        email: $(".voucherproduct-bhx input[name=email]").val(),
        phone: $(".voucherproduct-bhx input[name=phone]").val(),
      };
      $.ajax({
        url: urlRoot + "/Common/SendCouponGift",
        type: "POST",
        data: $("#form-zone-bhx").serialize(),
        beforeSend: function () {
          pdbxbhxapi.loading = !0;
        },
        success: function (t) {
          if (((pdbxbhxapi.loading = !1), t.result)) {
            var i = '<div class="voucher-success">';
            i +=
              '<div class="s-img"><img width="44" height="44" src="https://cdn.tgdd.vn/bachhoaxanh/www/Content/images/dmxtgdd/dmxtgdd-check.png"></div>';
            i += '<div class="s-title">MĂ£ giáº£m <b>10%</b></div>';
            i += '<div class="s-pm">ÄÆ°á»£c gá»­i Ä‘áº¿n mail {email}</div>';
            i += '<div class="s-pm">Chá»‰ sá»­ dá»¥ng cho sá»‘ {phone}</div>';
            i += "</div>";
            i = i.replace("{email}", n.email).replace("{phone}", n.phone);
            $(".productbox-bhxapi div._voucher").append(i);
          } else
            $(".voucherproduct-bhx .voucher-error").text(t.message),
              $(".voucherproduct-bhx .voucher-error").removeClass("hidden"),
              isMobile &&
                ($(".productbox-bhxapi div._voucher").addClass(
                  "hide-voucher-note",
                ),
                $(".voucherproduct-bhx .voucher-note").hide());
        },
        error: function () {
          pdbxbhxapi.loading = !1;
        },
      });
    }
  },
  checkValid: function (n) {
    var i = $(".voucherproduct-bhx input[name=email]").val(),
      r = $(".voucherproduct-bhx input[name=phone]").val(),
      t;
    if (n == "email" || n == undefined) {
      if (i == "")
        return (
          $(".voucherproduct-bhx .voucher-error").text(
            "Email khĂ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng",
          ),
          $(".voucherproduct-bhx .voucher-error").removeClass("hidden"),
          $(".voucherproduct-bhx input[name=email]").addClass("input-warning"),
          $(".voucherproduct-bhx button").attr("disabled", "disabled"),
          !1
        );
      if (((t = pdbxbhxapi.validEmail()), !t))
        return $(".voucherproduct-bhx button").attr("disabled", "disabled"), !1;
    }
    if (n == "phone" || n == undefined) {
      if (r == "")
        return (
          $(".voucherproduct-bhx .voucher-error").text(
            "Sá»‘ Ä‘iá»‡n thoáº¡i khĂ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng",
          ),
          $(".voucherproduct-bhx .voucher-error").removeClass("hidden"),
          $(".voucherproduct-bhx input[name=phone]").addClass("input-warning"),
          $(".voucherproduct-bhx button").attr("disabled", "disabled"),
          !1
        );
      if (((t = pdbxbhxapi.validPhone()), !t))
        return $(".voucherproduct-bhx button").attr("disabled", "disabled"), !1;
    }
    return n == "email" && r != "" && ((t = pdbxbhxapi.validPhone()), !t)
      ? ($(".voucherproduct-bhx button").attr("disabled", "disabled"), !1)
      : n == "phone" && i != "" && ((t = pdbxbhxapi.validEmail()), !t)
      ? ($(".voucherproduct-bhx button").attr("disabled", "disabled"), !1)
      : r != "" && i != ""
      ? ($(".voucherproduct-bhx .voucher-error").addClass("hidden"),
        $(".voucherproduct-bhx input").removeClass("input-warning"),
        $(".voucherproduct-bhx button").removeAttr("disabled"),
        !0)
      : void 0;
  },
  checkEmail: function (n) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      n,
    );
  },
  checkPhone: function (n) {
    return /^[0-9]+$/.test(n);
  },
  checkActiveSubmit: function () {
    var n = $(".voucherproduct-bhx input[name=phone]").val(),
      t = $(".voucherproduct-bhx input[name=email]").val();
    pdbxbhxapi.checkPhone(n) &&
      pdbxbhxapi.checkEmail(t) &&
      ($(".voucherproduct-bhx button").removeAttr("disabled"),
      $(".voucherproduct-bhx .voucher-error").addClass("hidden"),
      $(".voucherproduct-bhx input").removeClass("input-warning"));
    pdbxbhxapi.checkPhone(n) &&
      ($(".voucherproduct-bhx input[name=phone]").removeClass("input-warning"),
      $(".voucherproduct-bhx .voucher-error")
        .text()
        .indexOf("Sá»‘ Ä‘iá»‡n thoáº¡i") != -1 &&
        $(".voucherproduct-bhx .voucher-error").addClass("hidden"));
    pdbxbhxapi.checkEmail(t) &&
      ($(".voucherproduct-bhx input[name=email]").removeClass("input-warning"),
      $(".voucherproduct-bhx .voucher-error").text().indexOf("Email") != -1 &&
        $(".voucherproduct-bhx .voucher-error").addClass("hidden"));
  },
  isNumberKey: function (n) {
    var t = n.which ? n.which : n.keyCode;
    return t !== 46 && t > 31 && (t < 48 || t > 57) ? !1 : !0;
  },
};
onloadCallbackcaptcha_1318718959 = function () {
  var t = $(form.find(".submit")[0]),
    i,
    n;
  t.after("<div class='dcap'></div>");
  i = !1;
  n = !1;
  t.clone(!1, !1)
    .unbind("click")
    .on("click", function () {
      return (
        n ||
          ((n = !0),
          pdbxbhxapi.sendCoupon(),
          setTimeout(() => {
            n = !1;
          }, 5e3)),
        i
      );
    })
    .prependTo(form.find(".dcap")[0])
    .each(function () {
      t.hide();
    });
};
flagPopupHTML = !1;
const gbl_siteId = 1;
$(document).ready(function () {
  isHasSub &&
    ($(".dropdownsearch").click(function () {
      $(this).find("ul").slideToggle(300);
    }),
    $(".dropdownsearch ul li").click(function () {
      $(".dropdownsearch ul li").removeClass("active");
      $(this).addClass("active");
      $(".dropdownsearch a#type").attr("data-id", $(this).data("id"));
      $(".dropdownsearch a#type").html($(this).text());
    }));
  $(".main-menu .phukien").hover(
    function () {
      $(".bg-black").length > 0 && closePopup();
    },
    function () {},
  );
  setTimeout(function () {
    var t = $(".linkversion").attr("href"),
      n;
    t != undefined &&
      t.includes("issub") &&
      ((hrefnewdv = location.href),
      (n = location.pathname + location.search),
      (hrefnewdv = location.pathname.includes("?")
        ? urlRoot + n + "&sclient=mobile" + location.hash
        : urlRoot + n + "?sclient=mobile" + location.hash),
      $(".linkversion").attr("href", hrefnewdv));
  }, 600);
  $(".main-menu li").length > 0 &&
    $(".main-menu li").each(function () {
      if (
        location.pathname.split("/")[1] ==
        $(this).find("a").attr("href").replace("/", "")
      )
        return $(this).addClass("active"), !1;
    });
  $(".header__listtop .divitem").length > 0 &&
    $(".header__listtop .divitem").each(function () {
      if (location.pathname.includes($(this).find("a").attr("href")))
        return $(this).addClass("active"), !1;
    });
});
$(document).ready(function () {
  $(".open-menu").click(function () {
    $(".show-menu").addClass("active");
    $(".box-fixed").addClass("active");
    $("body").css({ overflow: "hidden" });
  });
  $(".btn-closemenu").click(function () {
    $(".show-menu").removeClass("active");
    $(".box-fixed").removeClass("active");
    $("body").css({ overflow: "scroll" });
  });
  $(".header__main .main-menu li").each(function (n, t) {
    n > parseInt($(".header__main .main-menu li").length / 2) &&
      $(t).addClass("show-left");
  });
});
1;
