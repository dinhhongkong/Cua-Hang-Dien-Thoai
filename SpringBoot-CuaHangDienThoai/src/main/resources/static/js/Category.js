/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
function addToCompare(n, t, i, r = false) {
  var c, d, v, o, u, f, s, l, g, y, p, nt, w, e, a, b, k, h;
  if (
    (t != undefined && t.preventDefault(),
    isFirstSS || showCompare(),
    (c = 3),
    closeTipCompare(),
    closeCompareBox(),
    $(".stickcompare label.error").hide(),
    (d =
      "<li class=formsg><a href='javascript:' class='cp-plus cp-plus_new' onclick='OpenPopup(this)'><i class='icImageCompareNew'></i><p>Thêm sản phẩm</p></a>"),
    n <= 0)
  )
    return (
      (idcompare == undefined || idcompare.length <= 0) &&
        (createCookie("ck_idcompare", "", 30), $("#ss-now").hide()),
      !1
    );
  if (idcompare.indexOf(n) >= 0)
    return (
      r || cacheError("already"),
      (u = $(".listproduct *[data-id=" + n + "]").first()),
      (u == undefined || u.length <= 0) &&
        (u = $(".compare-popup *[data-id=" + n + "]").first()),
      u.find("a.item-ss").removeClass("active").html("<i></i> So sánh"),
      (e = $(".box02 *[data-id=" + n + "]").first()),
      e != undefined &&
        e.length > 0 &&
        e
          .removeClass("active")
          .html("<i class='icondetail-sosanh'></i> So sánh"),
      removeCompare(n),
      ClosePopup(),
      countCompare(),
      $(".stickcompare").length > 0 &&
        $(".stickcompare").is(":hidden") == !1 &&
        $("#ss-now").hide(),
      !1
    );
  if (
    ((v = !1),
    $(".listcompare li.formsg").remove(),
    (o =
      '<li id={id}><a href="javascript:void(0)" id="{id}"><img src="{image}" alt=""><h3>{manu}</h3></a><span class="remove-ic-compare" onclick="removeCompare({id},event);"><i class="iconcate-closess"></i></span></li>'),
    (u = $(".listproduct *[data-id=" + n + "]").first()),
    (u == undefined || u.length <= 0) &&
      (u = $(".compare-popup *[data-id=" + n + "]").first()),
    u.find("a.item-ss").addClass("active").html("<i></i> Đã thêm so sánh"),
    (e = $(".box02 *[data-id=" + n + "]").first()),
    e != undefined &&
      e.length > 0 &&
      e
        .addClass("active")
        .html("<i class='icondetail-sosanh'></i> Đã thêm so sánh"),
    u != undefined && u.length > 0 && (v = !0),
    i !== undefined
      ? ((u = $(i)),
        (f = u.data("href")),
        (s = u.data("img")),
        (l = u.data("name")))
      : ((f =
          u.find("a").attr("href") == "javascript:;"
            ? u.data("url")
            : u.find("a").attr("href")),
        (s = u.find(".item-img img").attr("src")),
        (l =
          u.find("a > h3").text() != ""
            ? u.find("a > h3").text()
            : u.find(".item-info h3").text()),
        u.find("a > h3").attr("title") !== undefined &&
          u.find("a > h3").attr("title") !== "" &&
          (l = u.find("a > h3").attr("title")),
        (s == undefined || s == "undefined") &&
          (s = u.find(".item-img img").attr("data-src"))),
    (y = f.indexOf("?")),
    (f = f.substring(0, y != -1 ? y : f.length)),
    (p = ""),
    (nt =
      urlcompare.length > 0
        ? urlcompare[0].slice(1, urlcompare[0].slice(1, -1).indexOf("/") + 1)
        : ""),
    f.charAt(0) == "/" &&
      ((w = f.replace(f.charAt(0), "").split("/")),
      w.length == 2 && (p = w[0])),
    urlcompare.length > 0 && nt.indexOf(p) < 0)
  )
    return (
      $(".listcompare li").each(function () {
        var n = parseInt($(this).attr("id"));
        n > 0 && removeCompare(n);
      }),
      cacheError("same"),
      addToCompare(n, t, i),
      !1
    );
  if (
    (v && localStorage.setItem("CompareCateName", document.cateName),
    idcompare.length >= c)
  )
    return (
      $(".listcompare li.formsg").remove(),
      cacheError("full"),
      u.parent("ul.pro-compare").length <= 0 &&
        u.find("a.item-ss").removeClass("active").html("<i></i> So sánh"),
      (e = $(".box02 *[data-id=" + n + "]").first()),
      e != undefined &&
        e
          .removeClass("active")
          .html("<i class='icondetail-sosanh'></i> So sánh"),
      !1
    );
  if (
    ((g = document.cateName !== undefined ? document.cateName : ""),
    idcompare.push(parseInt(n)),
    urlcompare.push(f.indexOf("/") === 0 ? f : "/" + f),
    (o = o.replace(/{id}/g, n)),
    (o = o.replace("{image}", s)),
    (o = o.replace("{manu}", l)),
    $(".stickcompare").length
      ? $(".stickcompare").addClass("spaceInDown").show()
      : ((a =
          document.isDesktop == !0
            ? "<div class='stickcompare stickcompare_new cp-desktop'><label class='error'></label><a href='javascript:;' onclick='clearCompare(event);' class='clearall'><i class='iconcate-closess'></i>Thu gọn</a><ul class='listcompare' data-catename='" +
              document.cateName +
              "'></ul></div> "
            : "<div class='stickcompare stickcompare_new'><label class='error'></label><ul class='listcompare' data-catename='" +
              document.cateName +
              "'></ul></div>"),
        (a = a.replace("{catename}", g.toLowerCase())),
        $("body").append(a)),
    $(".stickcompare").find("ul").append(o),
    $(".compare-box").length > 0 &&
      $(".compare-box > ul > li").length == 2 &&
      ((b = $(".compare-box > ul").html()),
      console.log(b),
      $(".compare-box").remove(),
      $(".stickcompare").find("ul").append(b)),
    idcompare.length < c)
  )
    for (k = 0; k <= c; k++)
      $(".stickcompare .listcompare li").length < c &&
        $(".stickcompare .listcompare").append(d);
  else idcompare.length == 3 && closeAddCmp();
  return (
    (h = !1),
    idcompare.length < 2 && (h = !0),
    createCookie("ck_idcompare", idcompare.toString(), 30),
    countCompare(),
    (isFirstSS = !1),
    $(".closecompare").remove(),
    document.isDesktop == !0
      ? $(".stickcompare").append(
          '<div class="closecompare"><a href="javascript:;" onclick="' +
            (h ? "" : "doCompare();") +
            '"class="doss' +
            (h ? " prevent" : "") +
            '">So sánh ngay</a><a href="javascript:;" onclick="RemoveAllIdCompare()" class="txtremoveall">Xóa tất cả sản phẩm</a></div>',
        )
      : $(".stickcompare").append(
          '<div class="closecompare"><a href="javascript:;" onclick="clearCompare(event);" class="clearall">Thu gọn</a><a href="javascript:;" onclick="' +
            (h ? "" : "doCompare();") +
            '"class="doss' +
            (h ? " prevent" : "") +
            '">So sánh ngay</a></div>',
        ),
    $(".stickcompare").addClass("spaceInDown").show(),
    ClosePopup(),
    $(".stickcompare").length > 0 &&
      $(".stickcompare").is(":hidden") == !1 &&
      $("#ss-now").hide(),
    !1
  );
}

function removeCompare(n, t) {
  var r, e, o, u, i, f;
  if (
    (t !== undefined && t.preventDefault(),
    (r = 3),
    $(".listcompare li.formsg").remove(),
    (e =
      "<li class=formsg><a href='javascript:' class='cp-plus cp-plus_new' onclick='OpenPopup(this)'><i class='icImageCompareNew'></i><p>Thêm sản phẩm</p></a>"),
    idcompare.indexOf(n) >= 0)
  ) {
    for (
      urlcompare.splice(idcompare.indexOf(n), 1),
        idcompare.splice(idcompare.indexOf(n), 1),
        createCookie("ck_idcompare", idcompare.toString(), 30),
        countCompare(),
        o = $(".listproduct *[data-id=" + n + "]").first(),
        o.find("a.item-ss").removeClass("active").html("<i></i> So sánh"),
        u = $(".box02 *[data-id=" + n + "]").first(),
        u != undefined &&
          u
            .removeClass("active")
            .html("<i class='icondetail-sosanh'></i> So sánh"),
        idcompare.length == 0
          ? clearCompare()
          : idcompare.length < 2 &&
            $(".stickcompare").find(".boxcompare").remove(),
        i = !1,
        idcompare.length < 2 && (i = !0),
        $(".stickcompare")
          .find("li#" + n)
          .remove(),
        $(".closecompare").remove(),
        f = 0;
      f <= r;
      f++
    )
      $(".stickcompare .listcompare li").length < r &&
        $(".stickcompare .listcompare").append(e);
    $(".stickcompare label.error").removeAttr("style").hide();
    document.isDesktop == !0
      ? $(".stickcompare").append(
          '<div class="closecompare"><a href="javascript:;" onclick="' +
            (i ? "" : "doCompare();") +
            '"class="doss' +
            (i ? " prevent" : "") +
            '">So sánh ngay</a><a href="javascript:;" onclick="RemoveAllIdCompare()" class="txtremoveall">Xóa tất cả sản phẩm</a></div>',
        )
      : $(".stickcompare").append(
          '<div class="closecompare"><a href="javascript:;" onclick="clearCompare(event);" class="clearall">Thu gọn</a><a href="javascript:;" onclick="' +
            (i ? "" : "doCompare();") +
            '"class="doss' +
            (i ? " prevent" : "") +
            '">So sánh ngay</a></div>',
        );
  }
  return !1;
}

function clearCompare() {
  $(".stickcompare").hide();
  document.isDesktop == !0 &&
    ($(".overlay").hide(), $(".overlay").removeClass("v2"));
  $(".stickcompare label.error").removeAttr("style").hide();
  var n = getCookie("ck_idcompare"),
    t = n != "" && n != null ? n.split(",") : [];
  t.length > 0
    ? ($("#ss-now").show(),
      document.isDesktop == !1 && document.productId > 0 && $("#ss-now").hide())
    : $("#ss-now").hide();
}

function showCompare(n, t, i = false) {
  var r, u;
  $(".stickcompare").length <= 0 &&
    ((r = getCookie("ck_idcompare")),
    r !== "" && r !== null
      ? getCompareListByListID(r, n > 0 ? n : 0, t)
      : n > 0 && t !== undefined
      ? getCompareListByListID(n, 0, t, i)
      : $(".box02__right").length > 0 &&
        ((u = $(".box02__right").data("id")),
        u > 0 &&
          ($(".stickcompare").length <= 0
            ? showCompare(u, "div.box02__right", !0)
            : addToCompare(u, event, "div.box02__right"))));
  $(".stickcompare").show();
  isFirstSS && $("#ss-now").append(appendLoadingViewMore());
  $(".stickcompare label.error").removeAttr("style").hide();
  $(".stickcompare").length > 0 &&
    $(".stickcompare").is(":hidden") == !1 &&
    $("#ss-now").hide();
}

function doCompare(n) {
  var t = document.cateUrl,
    i,
    r,
    u;
  return (
    t !== "" && urlcompare.length >= 2
      ? (urlcompare[0].indexOf(t) < 0 &&
          urlcompare[1].indexOf(t) < 0 &&
          (t = urlcompare[0].slice(
            1,
            urlcompare[0].slice(1, -1).indexOf("/") + 1,
          )),
        (i = "itm_source=so-sanh-trang-nganh-hang"),
        n !== undefined &&
          n == !0 &&
          (i = "itm_source=goi-y-so-sanh-trang-nganh-hang"),
        (r = ""),
        (r =
          idcompare.length == 3
            ? "?productid=" + idcompare[2] + "&" + i
            : "?" + i),
        (u =
          "/" +
          t +
          "/" +
          urlcompare[0].replace("/" + t + "/", "") +
          "-vs-" +
          urlcompare[1].replace("/" + t + "/", "") +
          r),
        $(".stickcompare").remove(),
        $(".box02__right").length <= 0 && loadingRedirect(),
        (window.location = u),
        (idcompare = []),
        (urlcompare = []))
      : cacheError("least"),
    !1
  );
}

function setProductIdCompare(n, t) {
  $.ajax({
    url: "/Category/SetProductIdCompare",
    type: "POST",
    data: { id: n },
    cache: !1,
    beforeSend: function () {},
    success: function () {
      loadingRedirect();
      window.location = t;
    },
    error: function () {
      loadingRedirect();
      window.location = t;
    },
  });
}

function closeCompareBox() {
  $(".compare-box").length > 0 &&
    ($(".compare-box").remove(), $("#notifychatmsg").show());
}

function callCompareSuggestion(n) {
  typeof showSuggest != "undefined" &&
    showSuggest == "true" &&
    (n == undefined || n === !0) &&
    ($("#lstp .cate > li").each(function () {
      var n = parseInt($(this).find("a").first().data("pid"));
      n > 0 && addToCompareAuto(n);
    }),
    idcompare.length >= 2 && $(window).scrollTop() > 100
      ? $(".compare-box").show("slow")
      : $(".compare-box").hide());
}

function addToCompareAuto(n, t, i) {
  t != undefined && t.preventDefault();
  $("ul.listcompare").find("li").length > 0 &&
    idcompare.length > 0 &&
    ((urlcompare = []), (idcompare = []), $(".stickcompare").remove());
  var u = $(".cate a[data-pid='" + n + "']"),
    r;
  return (i == undefined
    ? (r = u.attr("href"))
    : ((u = $(i)), (r = u.attr("data-src"))),
  urlcompare.length > 0 &&
    r.indexOf(
      urlcompare[0].slice(1, urlcompare[0].slice(1, -1).indexOf("/") + 1),
    ) < 0)
    ? !1
    : ((idcompare[idcompare.length] = parseInt(n)),
      (urlcompare[urlcompare.length] = r.indexOf("/") === 0 ? r : "/" + r),
      $(".compare-box > p > span").html(idcompare.length),
      !1);
}

function closeTipCompare(n) {
  n != undefined && n.preventDefault();
  $(".cate li .tip-abs.show").length > 0 &&
    ($(".cate li .tip-abs").next().show(), $(".cate li .tip-abs").remove());
}

function showTipCompare() {
  var n = $(".locationbox__popup:visible").length == 0,
    t = getCookie("DMX_CompareTip");
  t == null &&
    typeof isShowTipCompare != "undefined" &&
    isShowTipCompare.toString().toLowerCase() === "true" &&
    $(window).scrollTop() > 150 &&
    $("#lstp .cate > li").length <= 10 &&
    n &&
    ($(".cate li .tip-abs").append(
      '<div class="overlaytip" onclick="closeTipCompare(event)"></div>',
    ),
    setTimeout(function () {
      $(".cate li .tip-abs").addClass("show");
      $("html,body").animate(
        { scrollTop: $(".cate li .tip-abs").offset().top - 300 },
        "slow",
      );
      $(".cate li .tip-abs").next().hide();
      createCookie("DMX_CompareTip", 1, 365);
    }, 2e3),
    (isShowTipCompare = !1));
}

function loadPopupAddProd() {
  $(".addcompare").length
    ? $("#suggestss").show()
    : ($("body").append(
        "<div id=suggestss><div class=overlay></div><div class='addcompare' onsubmit='return false;'><label>Mời bạn nhập tên sản phẩm</label><input id='kcc' type='text' onsubmit='return false;' placeholder='Nhập tên sản phẩm' autocomplete='off' autofocus='' /><a class=closeacp href=javascript: onclick=closeAddCmp()>&#10006;</a></div></div>",
      ),
      $(".overlay").show());
  initSuggest();
}

function closeAddCmp() {
  $("#suggestss").hide();
  $(".overlay").hide();
}

function initSuggest() {
  function t() {
    $(".input-text i.iconcate-closess").show();
    $(".autocomplete").show();
    $("#loading-compare").length <= 0 &&
      $(".autocomplete").append(appendLoadingCompare());
    $("#loading-compare").show();
  }

  function n() {
    $(".autocomplete").hide();
    $("#loading-compare").hide();
  }

  if (document.getElementById("kcc") != undefined) {
    isInitSuggest = !0;
    var i = AutoComplete.defaults.KeyboardMappings;
    i.Enter.Callback = function () {
      return;
    };
    return;
  }
}

function appendLoadingCompare() {
  return '<div id="loading-compare"><p class="ccsslder"><span class="ccsswrap"><span class="ccssdot"></span><span class="ccssdot"></span><span class="ccssdot"></span></span></p></div>';
}

function getCompareListByListID(n, t, i, r = false) {
  $.ajax({
    url: "/Category/SuggestForCompareBoxOnCategory",
    type: "GET",
    data: { key: "", cid: document.cateID, lstProductID: n },
    cache: !1,
    beforeSend: function () {},
    success: function (n) {
      if (n !== null && n !== "") {
        var u = $(n).find("li");
        $("#ss-now .stage").remove();
        u !== undefined &&
          (u.each(function () {
            addToCompare($(this).data("id"), null, this);
          }),
          createCookie("ck_idcompare", idcompare.toString(), 30),
          $(".stickcompare").addClass("spaceInDown").show());
      }
      i !== undefined && t > 0
        ? addToCompare(t, event, "div.box02__right", r)
        : t > 0 && addToCompare(t);
    },
    error: function (n) {
      console.log(n);
    },
  });
}

function countCompare() {
  var t = getCookie("ck_idcompare"),
    n;
  let i = !1;
  t !== "" &&
    t !== null &&
    ((n = t.split(",")),
    n.length > 0
      ? ((i = !0),
        $(".sticky-bar-ss").length > 0
          ? isMobile
            ? $(".sticky-bar-ss span").text("(" + n.length + ")")
            : $(".sticky-bar-ss").append(
                "<span class='sticky-bar-number'>" + n.length + "</span>",
              )
          : ($(".stickcompare").length > 0 &&
            $(".stickcompare").is(":hidden") == !1
              ? $("#ss-now").hide()
              : $("#ss-now").show(),
            document.isDesktop == !1 &&
              document.productId > 0 &&
              $("#ss-now").hide(),
            $("#count-ss").text("(" + n.length + ")")))
      : $(".sticky-bar-ss .sticky-bar-number").length > 0 &&
        $(".sticky-bar-ss .sticky-bar-number").remove());
  i ||
    ($(".sticky-bar-ss").length == 0
      ? $("#ss-now").hide()
      : isMobile
      ? $(".sticky-bar-ss span").text("")
      : $(".sticky-bar-ss .sticky-bar-number").remove());
}

function cacheError(n) {
  var t = "",
    i;
  switch (n) {
    case "full":
      t = "Vui lòng xóa bớt sản phẩm để tiếp tục so sánh!";
      break;
    case "least":
      t = "Bạn phải chọn ít nhất 2 sản phẩm để có thể so sánh!";
      break;
    case "already":
      t = "Bạn đã chọn sản phẩm này rồi, vui lòng chọn sản phẩm khác!";
      break;
    case "same":
      i = localStorage.getItem("CompareCateName");
      i = i == null || i == undefined ? "Sản phẩm" : capitalizeFirstLetter(i);
      t =
        "Chỉ có thể so sánh sản phẩm cùng nhóm hàng. " +
        i +
        " đã được xoá khỏi giỏ so sánh.";
  }
  t !== "" &&
    ($(".stickcompare label.error").show().text(t).animate({ opacity: 1 }, 800),
    $(".stickcompare").length > 0 &&
      $(".stickcompare").is(":hidden") &&
      $(".errorcompare").text(t).show(),
    setTimeout(function () {
      $(".stickcompare label.error").hide();
      $(".errorcompare").text("").hide();
    }, 4e3));
}

function appendLoadingViewMore() {
  return '<div class="stage"><div class="dot-stretching"></div></div>';
}

function OpenPopup(n) {
  var e, t, i, f, r, u;
  if (flagOpenPopup) return !1;
  if (((flagOpenPopup = !0), idcompare.length >= 3))
    return cacheError("full"), !1;
  if (
    ($(n).append(appendLoadingViewMore()),
    (e = document.cateID),
    (t = localStorage.getItem("viewedHistory")),
    t != null &&
      !JSON.stringify(t).includes("proId") &&
      !JSON.stringify(t).includes("cateId"))
  )
    return localStorage.removeItem("viewedHistory"), !1;
  if (
    ((t = JSON.parse(t)),
    (u = []),
    (i = t != null ? t.filter((n) => n.cateId == e) : null),
    i != null && i.length > 0)
  ) {
    for (f = [], r = 0; r < i.length; r++)
      i[r] !== "" && i[r] !== null && i[r].proId !== undefined && f.push(i[r]);
    u = f.map((n) => n.proId);
    u.length > 3 && (u = u.slice(0, 3));
  }
  $("#dlding").show();
  $.ajax({
    url: "/Compare/OpenPopup",
    type: "POST",
    data: { productIds: u },
    cache: !0,
    success: function (t) {
      $("#dlding").hide();
      $(n).find(".stage").remove();
      flagOpenPopup = !1;
      $(".popup-addsp").show();
      t != null && t.errorCode == 1
        ? ($(".popup-addsp .pro-compare_viewed").html(t.html),
          t.html == "" && t.html.trim() == ""
            ? $(".compare-popup h4").hide()
            : $(".compare-popup h4").show(),
          RemoveOnclickHtml($(".pro-compare li a.pro-nrview")),
          RemoveOnclickHtml($(".pro-compare li a:first-child")),
          CheckButtonCompareCategory())
        : $(".compare-popup h4").hide();
    },
  });
}

function ClosePopup() {
  $(".popup-addsp").hide();
  $(".popup-addsp .pro-compare_search").html("").hide();
  $(".popup-addsp .pro-compare_viewed").html("");
  $("#searchproductcompare input").val("");
}

function SearchProductCompare(n, t) {
  $(".pro-compare_search").hide();
  var r = document.cateID,
    i = $(n).val();
  if (i == "" || i.length < 2 || r <= 0) return !1;
  if (
    (xhrCompare && xhrCompare.abort(), typeof t == "undefined" && (t = !1), !t)
  )
    return (
      clearTimeout(timmer),
      (timmer = setTimeout(function () {
        SearchProductCompare(n, !0);
      }, 400)),
      !1
    );
  xhrCompare = $.ajax({
    url: "/Compare/SearchProductCompare",
    type: "POST",
    data: { categoryId: r, keyword: i, hasWebStatusList: !0 },
    cache: !0,
    success: function (n) {
      $(".pro-compare_search").show();
      n != null && n.errorCode == 1 && n.html != ""
        ? ($(".pro-compare_search").html(n.html),
          $(".pro-compare_search ul").show(),
          RemoveOnclickHtml($(".pro-compare li a.pro-nrview")),
          RemoveOnclickHtml($(".pro-compare li a:first-child")),
          CheckButtonCompareCategory())
        : $(".pro-compare_search").html(
            "<li class='text-center'>Không tìm thấy kết quả cho từ khóa: <b>" +
              n.keyword +
              "</b></li>",
          );
      xhrCompare = !1;
    },
  });
}

function RemoveOnclickHtml(n) {
  n.each(function () {
    $(this).attr("onclick", null);
    $(this).hasClass("pro-nrview") && $(this).addClass("item-ss");
  });
}

function RemoveAllIdCompare() {
  createCookie("ck_idcompare", "", 30);
  idcompare = [];
  $(".stickcompare.stickcompare_new .listcompare").html("");
  $(".closecompare").remove();
  $("a.item-ss").each(function () {
    $(this).removeClass("active").html("<i></i> So sánh");
  });
  $(".box02").each(function () {
    $(this)
      .find(".box02__right")
      .removeClass("active")
      .html("<i class='icondetail-sosanh'></i> So sánh");
  });
  ClosePopup();
  clearCompare();
  closeCompareBox();
  countCompare();
}

function capitalizeFirstLetter(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}

function hasHorizontalScrollBar(n) {
  return n == undefined || n.length <= 0
    ? !1
    : n.get(0).scrollWidth > n.innerWidth();
}

function callFilterFromHash(n) {
  if ((GetValueFromHashKey(n), MapHashToFilter(), n.indexOf("curl") < 0)) {
    varFilterObj.isCallTotal = !0;
    var t = $("#paging").length > 0;
    pIdxActive = document.pageIndex;
    pIdxActive > 0 &&
      $("#paging").length == 0 &&
      ((isPageIndexLoading = !0), (document.pageIndex = 0));
    varFilterObj.isCallTotal = !0;
    varFilterObj.pIndexGoto = t ? pIdxActive : -1;
    varFilterObj.isMore = t ? !0 : !1;
    filterPros(varFilterObj);
  } else filterProsPKGenuine();
}

function gotoPageIndex(n) {
  varFilterObj.isMore = !0;
  varFilterObj.isCallTotal = !0;
  varFilterObj.isViewNow = !1;
  varFilterObj.pIndexGoto = n - 1;
  filterPros(varFilterObj);
  showSurvey();
}

function closePopup() {
  $(".show-total").removeClass("active");
  $(".filter-show").fadeOut(300);
  $(".jsTitle").removeClass("showing");
  activeOrUnActiveBlock();
  getTextActiveSliderRange();
  $("body").removeClass("bg-black");
  $("body").removeClass("overlay-filter");
  $(".bg-black .bsc-block").removeClass("fix-padding");
}

function filterPros(n) {
  let t = $(".hot-product");
  t.length > 0 && t.remove();
  CheckRemoveParamChildFilter();
  countTotal();
  var i = LoadCheckAjax();
  if (i) {
    let i = $(n.e),
      t = n.isMore,
      r = n.isCallTotal,
      u = $("#paging").length > 0;
    if (
      (n.isViewNow !== !0 && resetProductsObj(),
      t == undefined || t == "false"
        ? (t = !1)
        : (t || t == "true") && (t = !0),
      t || pIdxActive > 0
        ? (pIdxActive > 0 && document.pageIndex == 0 && !isIgnorePageIndex
            ? (isIgnorePageIndex = !0)
            : n.pIndexGoto >= 0
            ? (document.pageIndex = n.pIndexGoto)
            : (document.pageIndex += 1),
          resetProductsObj())
        : (document.pageIndex = pIinFor > 0 ? pIinFor : 0),
      BuildLinkHash(!1, t),
      showOrOffManuAndPropDescription(),
      xhrFilter && pIdxActive <= 0 && xhrFilter.abort(),
      !1)
    ) {
      $("#preloader").show();
      setTimeout(function () {
        successXhrFilter(i, productFilterObj, r, t);
        $("#paging").length > 0 &&
          (document.TotalCount > 0
            ? ($("#paging").show(),
              genPaging(
                document.TotalCount,
                document.pageSize,
                document.pageIndex,
              ))
            : $("#paging").hide());
      }, 300);
      return;
    }
    xhrFilter = $.ajax({
      url: "/Category/FilterProductBox" + linkRedirectHash,
      type: "POST",
      cache: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      data: {
        IsParentCate: document.isParentCate,
        IsShowCompare: document.isShowCompare,
        prevent: !0,
      },
      async: document.pageIndex == 0 || pIdxActive == 0,
      beforeSend: function () {
        t && document.pageIndex > 0 && pIdxActive == 0 && !u
          ? ($(".view-more a").addClass("prevent"),
            $(".view-more a").append(appendLoadingViewMoreNew()))
          : (isPageIndexLoading && $("#preloader").addClass("fixed"),
            $("#preloader").show(),
            $(".box-filter.top-box").addClass("disabled"),
            $(".box-sort").addClass("disabled"));
      },
      success: function (u) {
        if (
          ($(".box-filter").removeClass("disabled"),
          $(".box-sort").removeClass("disabled"),
          $(".view-more a").removeClass("prevent"),
          (productFilterObj = {
            total: u.total,
            listproducts: u.listproducts,
            textResponseApi: u.textResponseApi,
          }),
          console.log(productFilterObj.textResponseApi),
          (document.TotalCount = u.total),
          $("#paging").length > 0 &&
            ((n.pIndexGoto = n.pIndexGoto < 0 ? 0 : n.pIndexGoto),
            $("#paging").show(),
            (pIdxActive = 0),
            genPaging(document.TotalCount, document.pageSize, n.pIndexGoto)),
          document.TotalCount <= 0 && $("#paging").hide(),
          pIdxActive > 0)
        ) {
          var f = parseInt(document.TotalCount / document.pageSize);
          pIdxActive = pIdxActive > f ? f : pIdxActive;
        }
        successXhrFilter(i, u, r, t);
        xhrFilter = !1;
        resetVarFilterObj();
        showSurvey();
        u !== undefined && u.param !== "" && console.log("param: ", u.param);
      },
      error: function (n) {
        $(".view-more a").removeClass("prevent");
        console.log(n);
      },
    });
  }
}

function totalFilterPros(n = false) {
  CheckRemoveParamChildFilter();
  $(".total-reloading .stage").length <= 0 &&
    $(".total-reloading").html(appendLoading());
  countTotal();
  n || resetProductsObj();
  xhr && xhr.abort();
  previousRequest = linkRedirectHash;
  BuildLinkHash(!0);
  console.log("previousRequest: " + previousRequest);
  previousRequest == linkRedirectHash && xhr && xhr.abort();
  productFilterObj.total >= 0
    ? (console.log(productFilterObj.textResponseApi),
      successXhrTotal(productFilterObj.total, n))
    : ($(".block-manu .filter-show").addClass("hascount"),
      (xhr = $.ajax({
        url: "/Category/FilterProductBox" + linkRedirectHashTotal,
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: !0,
        data: { IsParentCate: document.isParentCate, prevent: !0 },
        async: !0,
        beforeSend: function () {
          $(".btn-filter-readmore").addClass("prevent");
        },
        success: function (t) {
          productFilterObj = {
            total: t.total,
            listproducts: t.listproducts,
            textResponseApi: t.textResponseApi,
          };
          console.log(productFilterObj.textResponseApi);
          successXhrTotal(t.total, n, previousRequest);
          showSurvey();
        },
        error: function (n) {
          console.log(n);
        },
      })));
}

function successXhrTotal(n, t = false, i = "") {
  $(".btn-filter-readmore").removeClass("prevent");
  totalAjax = n;
  $(".total-reloading").html(n);
  document.TotalCount = n;
  t && (showHideViewMore(document.TotalCount), $(".sort-total b").html(n));
  parseInt(n) > 0
    ? $(".btn-filter-readmore").removeClass("prevent").removeClass("disabled")
    : $(".btn-filter-readmore").addClass("prevent").addClass("disabled");
  i = linkRedirectHash;
  hideShowListActiveFilter();
  hideShowClrFilter();
}

function successXhrFilter(n, t, i = false, r = false) {
  var o, u, e, h, f;
  if (
    ($("#empty").remove(),
    (pIdxActive = pIdxActive == undefined ? 0 : parseInt(pIdxActive)),
    (document.pageIndex == 0 || varFilterObj.pIndexGoto >= 0) &&
      (isPageIndexLoading || scrollByTag(".block-scroll-main.box-filter")),
    n !== undefined &&
      n.parent().hasClass("f-smooth") &&
      window.location.hash.length <= 0)
  ) {
    o = $(this).attr("href");
    window.location.href = o;
    return;
  }
  if (
    (r || (linkRedirectHashTotal = linkRedirectHash),
    i && successXhrTotal(t.total, !0),
    $(".box-quicklink:not(.child-filter-outer)").remove(),
    $(".box-sort").removeClass("hide-ext"),
    $(".box-sort .manu-sort").show(),
    t.listproducts !== "" && t.listproducts !== null && t.total > 0)
  ) {
    if (
      ($(".box-sort .sort-total").show(),
      $(".box-checkbox.extend").removeClass("hide"),
      document.pageIndex == 0 || varFilterObj.pIndexGoto >= 0)
    )
      $(".listproduct").not(".owl-carousel").html(t.listproducts),
        prGetDeliveryStatus(),
        (totalAjax = document.TotalCount),
        isPageIndexLoading &&
          ((pIinFor += 1),
          pIinFor < pIdxActive + 1 ? filterPros(varFilterObj) : (pIinFor = 0));
    else {
      $(".listproduct").not(".owl-carousel").append(t.listproducts);
      prGetDeliveryStatus();
      var s = parseInt(document.TotalCount),
        c = parseInt(document.pageIndex) + 1,
        l = parseInt(document.pageSize);
      totalAjax = s > c * l ? s : 0;
      isPageIndexLoading &&
        ((pIinFor += 1),
        afterDoneActivePageIndex(),
        pIinFor < pIdxActive + 1 ? filterPros(varFilterObj) : (pIinFor = 0));
      linkRedirectHash == linkRedirectHashTotal &&
        $(".btn-filter-readmore.disabled").length > 0 &&
        $(".btn-filter-readmore")
          .removeClass("prevent")
          .removeClass("disabled");
    }
    showHideViewMore(totalAjax);
    manuParams.length == 1
      ? ((u = $(".filter-list.manu a.check").data("name")),
        u !== undefined && u !== "" && $(".box-sort .manu-sort").text(u))
      : $(".box-sort .manu-sort").hide();
  } else
    !r || varFilterObj.pIndexGoto >= 0
      ? ((e = ""),
        (h =
          '<div id="empty"><i class="empty"></i>Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm!{back-to-category}</div>'),
        document.cateName !== undefined &&
          document.cateName !== "" &&
          (e =
            '<p><a href="javascript:;" onclick="reloadURL()">Xem tất cả ' +
            document.cateName.toLowerCase() +
            "</a></p>"),
        $(".listproduct")
          .not(".owl-carousel")
          .html(h.replace("{back-to-category}", e)),
        $(".box-sort").addClass("hide-ext"),
        endActivePageIndex())
      : $(".view-more").hide();
  linkRedirectHash.charAt(0) == "?" &&
    (linkRedirectHash = linkRedirectHash.replace(
      linkRedirectHash.charAt(0),
      "",
    ));
  linkRedirectHash[linkRedirectHash.length - 1] == "&" &&
    (linkRedirectHash = linkRedirectHash.substring(
      0,
      linkRedirectHash.length - 1,
    ));
  location.hash = linkRedirectHash;
  activeOrUnActiveBlock();
  pIdxActive == 0 && $("#preloader").hide();
  $(".view-more .bubblingG").remove();
  $(".props a.check").length > 0
    ? $(".props a.check").each(function () {
        textActiveFilter($(this), "");
      })
    : $(".props a").length > 0 && textActiveFilter($(this), "");
  $(".manu a.check").length > 0
    ? $(".manu a.check").each(function () {
        textActiveFilter($(this), "Hãng");
      })
    : $(".manu a").length > 0 && textActiveFilter($(".manu a"), "Hãng");
  $(".price a.check").length > 0
    ? $(".price a.check").each(function () {
        textActiveFilter($(this), "Giá");
      })
    : $(".price a").length > 0 && textActiveFilter($(".price a"), "Giá");
  $(".colors a.check").length > 0
    ? $(".colors a.check").each(function () {
        textActiveFilter($(this), "Màu");
      })
    : $(".colors a").length > 0 && textActiveFilter($(".colors a"), "Màu");
  $(".box-filter").removeClass("wrap");
  $(".btn-right-scroll").show();
  fixShowFilterLeftRight();
  resetProductsObj();
  CheckButtonCompareCategory();
  $(".prop-minmax-input.has-value").length <= 0 &&
    $(".prop-slider-active").remove();
  hideShowListActiveFilter();
  hideShowClrFilter();
  $(".price-slider").length > 0 && getTextActiveSliderRange();
  reLoadChildFilter();
  $(".listproduct").not(".owl-carousel").find("li .fast-deli").remove();
  extParams.indexOf("fast") >= 0 &&
    $(".listproduct").not(".owl-carousel").find("li").length > 0 &&
    ((f =
      "<div class='fast-deli'>" +
      $(".box-checkbox a[data-type='fast']")[0].outerHTML +
      "</div>"),
    $(".listproduct li").find(".item-ss").length > 0
      ? ($(f).insertBefore(".item-ss"),
        $(".listproduct li")
          .find(".item-bottom")
          .each(function () {
            $(this).parents(".item").find(".fast-deli").length <= 0 &&
              $(this).parents(".item").find(".item-bottom").prepend(f);
          }))
      : $(".listproduct").not(".owl-carousel").find("li").append(f));
  extParams.indexOf("cbspk") >= 0
    ? $(".extend a.fastdeli").hide()
    : $(".extend a.fastdeli").is(":visible") == !1 &&
      $(".extend a.fastdeli").show();
}

function LoadCheckAjax() {
  var t;
  if (typeof searchQuery != "undefined" && searchQuery !== undefined) return !0;
  var n = "",
    u = "",
    f = "",
    i = "",
    e = "?g=",
    r = 0;
  if (varFilterObj.isMore || varFilterObj.isViewNow == !1)
    return (isLoadAjax = !0), !0;
  if (
    ((t = document.isWatch == "True"),
    manuParams != null && manuParams.length > 0)
  )
    if (manuParams.length == 1)
      $(".manu a").each(function () {
        if (
          manuParams.indexOf($(this).data("id") + "") >= 0 &&
          $(this).data("href") !== undefined &&
          $(this).data("href") !== ""
        )
          return (u = "-" + $(this).data("href")), (isLoadAjax = !1), r++, !1;
      });
    else if (((isLoadAjax = !0), !t)) return !0;
  if (extParams.length > 0 || $(".extend a.active").length > 0)
    return (isLoadAjax = !0), !0;
  if (rangeParams.length > 0)
    if (rangeParams.length == 1)
      $(".price a").each(function () {
        if (
          rangeParams.indexOf($(this).data("id") + "") >= 0 &&
          $(this).data("href") !== undefined &&
          $(this).data("href") !== ""
        )
          return (
            (f = "?p=" + $(this).data("href")),
            (e = "&g="),
            (isLoadAjax = !1),
            r++,
            !1
          );
      });
    else if (((isLoadAjax = !0), !t)) return !0;
  if (propsParams != null && propsParams.length > 0)
    if (propsParams.length == 1)
      $(".props a").each(function () {
        if (
          propsParams.indexOf($(this).data("id") + "") >= 0 &&
          $(this).data("href") !== undefined
        )
          return (
            (i =
              $(this).data("smooth") == 1
                ? "-" + $(this).data("href")
                : e + $(this).data("href")),
            (isLoadAjax = !1),
            r++,
            !1
          );
      });
    else if (((isLoadAjax = !0), !t)) return !0;
  if (
    (clsParams != null && clsParams.length > 0) ||
    (!t &&
      GetParamLinkHashMinMax() !== "" &&
      GetParamLinkHashMinMax().indexOf("&") >= 0)
  )
    return !0;
  if ((t || (isLoadAjax = r <= 2 ? !1 : !0), isLoadAjax == !1)) {
    if (((n = n !== "" ? n : i.includes("&") ? u + f + i : u + i + f), n != ""))
      return reloadURL(n, t), !1;
    reloadURL("");
  }
  if (t) {
    if (((n = linkRedirectHashTotal), n.charAt(0) == "?")) {
      n = n.replace(n.charAt(0), "#");
      reloadURL(n, t);
      return;
    }
  } else return (isLoadAjax = !0), !0;
}

function LoadCheckAjaxExtend(n) {
  var i = $(n);
  if (i == undefined || i.data("href") == undefined || i.data("href") == "")
    return !0;
  let t = i.data("href"),
    r = !0;
  return (location.hash == "" &&
    manuParams.length == 0 &&
    rangeParams.length == 0 &&
    propsParams == 0 &&
    clsParams == 0 &&
    (extParams.length == 1 && $(".extend a.active").length == 0
      ? (r = !1)
      : extParams.length == 0 && i.data("newv2") == "True" && (r = !1)),
  r == !1 &&
    ((t =
      t !== ""
        ? t
        : urlProp.includes("&")
        ? urlManu + urlPrice + urlProp
        : urlManu + urlProp + urlPrice),
    t != ""))
    ? (t.charAt(0) == "?" && (t = t.replace(t.charAt(0), "#")),
      reloadURL(t),
      !1)
    : r;
}

function reloadURL(n, t = false) {
  if (
    (n == undefined && (n = ""),
    loadingRedirect(),
    t == !0 &&
      document.cateUrl.indexOf("dong-ho") >= 0 &&
      (document.cateUrl = "dong-ho-deo-tay"),
    t)
  ) {
    var i = document.cateUrl + n;
    history.pushState({}, "", i);
    reloadPage();
  } else window.location = document.cateUrl + n;
  return;
}

function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 1e3);
  return;
}

function callLazy() {}

function appendLoading() {
  return '<div class="stage-two"><div class="load"></div></div>';
}

function appendLoadingViewMore() {
  return '<div class="stage"><div class="dot-stretching"></div></div>';
}

function appendLoadingViewMoreNew() {
  return '<div class="bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div>';
}

function countTotal() {
  var i = 0,
    n;
  $("a.active[data-newv2='True']").length &&
    (i = $(".newyearFilter").eq(0).find("a").length);
  n = 0;
  priceRangeParams !== "" ? (n += 1) : 0;
  RangeObj.CapacityRangeParams !== "" ? (n += 1) : 0;
  RangeObj.HeightRangeParams !== "" ? (n += 1) : 0;
  RangeObj.WidthRangeParams !== "" ? (n += 1) : 0;
  RangeObj.DeepRangeParams !== "" ? (n += 1) : 0;
  let t =
    manuParams.length +
    propsParams.length +
    clsParams.length +
    rangeParams.length +
    n;
  t = t - i;
  t > 0
    ? ($(".count-total").html(t).show().addClass("active"),
      $(".filter-button").fadeIn())
    : $(".count-total").html(0).hide();
}

function unActiveFilter(n) {
  var t = $(n),
    u = !1,
    r,
    i = "",
    s,
    f,
    e,
    o,
    h;
  if (
    (t.parents(".filter-show").not(".show-total").find(".filter-list a.check")
      .length > 0
      ? (r = t
          .parents(".filter-show")
          .not(".show-total")
          .find(".filter-list a.check"))
      : t.parents(".show-total").find(".filter-list a.check").length > 0 &&
        (r = t.parents(".show-total").find(".filter-list a.check")),
    t.parents(".filter-show").not(".show-total").find(".prop-minmax").length > 0
      ? t
          .parents(".filter-show")
          .not(".show-total")
          .find(".prop-minmax")
          .each(function (n) {
            n > 0 && (i += ",");
            i += $(this).attr("data-type");
          })
      : t.parents(".show-total").find(".prop-minmax").length > 0 &&
        t
          .parents(".show-total")
          .find(".prop-minmax")
          .each(function (n) {
            n > 0 && (i += ",");
            i += $(this).attr("data-type");
          }),
    (t.parents(".filter-show").not(".show-total").find(".price-slider").length >
      0 ||
      t.parents(".show-total").find(".price-slider").length > 0) &&
      ((s = i.split(",")), (i += (s.length > 1 ? "," : "") + "price")),
    (r != undefined && r.length) || i != "")
  ) {
    if (
      ((f = ""),
      t.parents(".filter-show").not(".show-total").find(".manu").length > 0
        ? (f = "manu")
        : t.parents(".filter-show").not(".show-total").find(".props").length > 0
        ? (f = "prop")
        : t.parents(".filter-show").not(".show-total").find(".price").length >
            0 && (f = "price"),
      removeActiveChildFilter(f == "manu" ? !0 : !1),
      resetTextActiveFilter(f),
      r != undefined &&
        r.length > 0 &&
        r.each(function () {
          let n = this.dataset.id;
          manuParams.indexOf(n) >= 0 &&
            ((u = !0),
            $(".manu a[data-id=" + n + "]").removeClass("check"),
            manuParams.splice(manuParams.indexOf(n), 1),
            autoAddorRemoveFilterActive(
              $(".show-total .manu a[data-id=" + n + "]"),
              null,
            ));
          propsParams.indexOf(n) >= 0 &&
            ((u = !0),
            $(".props a[data-id=" + n + "]").removeClass("check"),
            propsParams.splice(propsParams.indexOf(n), 1),
            autoAddorRemoveFilterActive(
              $(".show-total .props a[data-id=" + n + "]"),
              null,
            ));
          clsParams.indexOf(n) >= 0 &&
            ((u = !0),
            $(".colors a[data-id=" + n + "]").removeClass("check"),
            clsParams.splice(clsParams.indexOf(n), 1),
            autoAddorRemoveFilterActive(
              $(".show-total .colors a[data-id=" + n + "]"),
              null,
            ));
          rangeParams.indexOf(n) >= 0 &&
            ((u = !0),
            $(".price a[data-id=" + n + "]").removeClass("check"),
            rangeParams.splice(rangeParams.indexOf(n), 1),
            autoAddorRemoveFilterActive(
              $(".show-total .price a[data-id=" + n + "]"),
              null,
            ));
        }),
      i !== "" && i !== undefined)
    )
      if (
        ((u = !0),
        i.indexOf("price") >= 0 &&
          $(".price-slider")
            .find("input")
            .each(function () {
              $(".filter-list.price a").length > 0
                ? ($(".price-slider .range-toggle span").removeClass("down"),
                  $(".price-slider .container").slideUp())
                : textActiveFilter($(".price-slider"), "Giá", !0);
              resetPriceRange();
              callFilterRangeSlider(!0);
            }),
        (e = i.split(",")),
        e.length > 1)
      )
        for (o = 0; o < e.length; o++)
          $(".prop-minmax." + e[o])
            .find("input")
            .each(function () {
              getOrRemoveRangeParamByName($(this), !0);
            });
      else
        $(".prop-minmax." + i)
          .find("input")
          .each(function () {
            getOrRemoveRangeParamByName($(this), !0);
          });
    if (u) {
      h =
        priceRangeParams !== "" ||
        RangeObj.CapacityRangeParams !== "" ||
        RangeObj.WidthRangeParams !== "" ||
        RangeObj.HeightRangeParams !== "" ||
        RangeObj.DeepRangeParams !== "";
      manuParams.length +
        propsParams.length +
        clsParams.length +
        rangeParams.length +
        extParams.length ==
        0 &&
        (h || (location.href = document.cateUrl));
      varFilterObj.isCallTotal = !0;
      varFilterObj.isMore = !1;
      varFilterObj.isViewNow = !1;
      filterPros(varFilterObj);
      return;
    }
  }
}

function showHideViewMore(n) {
  if (n > 0) {
    var t = n - $(".listproduct > li").length;
    t > 0
      ? ($(".view-more").removeClass("hide").show(),
        $(".view-more .remain").html(t))
      : $(".view-more").hide();
  } else $(".view-more").hide();
}

function GetValueFromHashKey(n) {
  var i, r, u, t;
  if (
    ((n === undefined || n == "") && (n = location.hash.replace("#", "")),
    n === undefined || n == "") ||
    ((i = n.split("&")), i.length == 0)
  )
    return null;
  for (r in i)
    ((u = i[r]), (t = u.split("=")), t.length == 2) &&
      (t[0] == "m"
        ? (manuParams = t[1].split(","))
        : t[0] == "r"
        ? (rangeParams = t[1].split(","))
        : t[0] == "p"
        ? (propsParams = t[1].split(","))
        : t[0] == "cls"
        ? (clsParams = t[1].split(","))
        : t[0] == "ext"
        ? ((extParams = t[1].split(",")),
          extParams.indexOf("fast") >= 0 &&
            getLocationCustomer().wardID > 0 == !1 &&
            extParams.splice(extParams.indexOf("fast"), 1))
        : t[0] == "o"
        ? (ordersParams = parseInt(t[1]))
        : t[0] == "add"
        ? (additionFilterParam = parseInt(t[1]))
        : t[0] == "pi"
        ? (document.pageIndex = parseInt(t[1]))
        : t[0] == "ps"
        ? (document.pageSize = parseInt(t[1]))
        : t[0] == "cids"
        ? (cidsParams = t[1].split(","))
        : t[0] == "cls"
        ? (clsParams = t[1].split(","))
        : t[0] == "mGenius"
        ? (manuPKGenius = t[1])
        : t[0] == "priceminmax"
        ? (priceRangeParams = t[1])
        : t[0] == "capacityminmax"
        ? (RangeObj.CapacityRangeParams = t[1])
        : t[0] == "widthminmax"
        ? (RangeObj.WidthRangeParams = t[1])
        : t[0] == "heightminmax"
        ? (RangeObj.HeightRangeParams = t[1])
        : t[0] == "deepminmax" && (RangeObj.DeepRangeParams = t[1]));
}

function MapHashToFilter() {
  var n;
  location.hash != "" &&
    ($(".extend a.active").removeClass("active"),
    $(".manu a.check").removeClass("check"),
    $(".price a.check").removeClass("check"),
    $(".props a.check").removeClass("check"),
    $(".group-manu a.active").removeClass("active"));
  manuParams != null &&
    manuParams.length > 0 &&
    $(".manu a").each(function () {
      manuParams.indexOf($(this).data("id") + "") >= 0
        ? ($(this).addClass("check"),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), "Hãng"))
        : $(this).removeClass("check");
    });
  clsParams != null &&
    clsParams.length > 0 &&
    $(".colors a").each(function () {
      clsParams.indexOf($(this).data("id") + "") >= 0
        ? ($(this).addClass("check"),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), "Màu"))
        : $(this).removeClass("check");
    });
  rangeParams != null &&
    rangeParams.length > 0 &&
    ($(".price a").each(function () {
      rangeParams.indexOf($(this).data("id") + "") >= 0
        ? ($(this).addClass("check"),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), "Giá"))
        : $(this).removeClass("check");
    }),
    $(".price-slider .container").slideUp(),
    $(".price-slider .range-toggle a span").removeClass("down"));
  propsParams != null &&
    propsParams.length > 0 &&
    $(".props a").each(function () {
      if (propsParams.indexOf($(this).data("id") + "") >= 0) {
        $(this).addClass("check");
        autoAddorRemoveFilterActive(null, this);
        var n = $("a[data-newv2='True']").length > 0;
        n &&
          $(this).parents(".filter-item").attr("propertyid") ==
            $("a[data-newv2='True']").data("prop").toString() &&
          $("a[data-newv2='True']").addClass("active");
        activeNewFilterV2($(this).data("id").toString());
        textActiveFilter($(this), "");
      } else $(this).removeClass("check");
    });
  extParams != null &&
    extParams.length > 0 &&
    $(".extend a").each(function () {
      extParams.indexOf($(this).data("type") + "") >= 0 &&
        $(this).addClass("active");
    });
  ordersParams > 0 &&
    ($(".sort a").removeClass("check"),
    $(".sort a[data-id=" + ordersParams + "]").addClass("check"),
    $(".sort-show").html($(".sort a.check").text()));
  cidsParams != null &&
    cidsParams.length > 0 &&
    $(".box-quicklink.accessories a").each(function () {
      cidsParams.indexOf($(this).data("id") + "") >= 0
        ? $(this).addClass("check")
        : $(this).removeClass("check");
    });
  priceRangeParams !== "" &&
    ((n = priceRangeParams.split("-")),
    n.length == 2 &&
      (rangePriceSlider.noUiSlider.set([n[0], n[1]]),
      rangePriceSliderTotal.noUiSlider.set([n[0], n[1]]),
      updateValAndAttrValue(
        $("input[name='price-min-value']"),
        ToNumberFormat(n[0]),
      ),
      updateValAndAttrValue(
        $("input[name='price-max-value']"),
        ToNumberFormat(n[1]),
      ),
      $(".price-slider .container").slideDown(),
      $(".price-slider .range-toggle a span").addClass("down")));
  RangeObj.CapacityRangeParams !== "" &&
    ((n = RangeObj.CapacityRangeParams.split("-")),
    autoFillMinMaxFromHash("capacity", n));
  RangeObj.WidthRangeParams !== "" &&
    ((n = RangeObj.WidthRangeParams.split("-")),
    autoFillMinMaxFromHash("width", n));
  RangeObj.HeightRangeParams !== "" &&
    ((n = RangeObj.HeightRangeParams.split("-")),
    autoFillMinMaxFromHash("height", n));
  RangeObj.DeepRangeParams !== "" &&
    ((n = RangeObj.DeepRangeParams.split("-")),
    autoFillMinMaxFromHash("deep", n));
  manuPKGenius != null &&
    manuPKGenius.length > 0 &&
    $(".group-manu a").each(function () {
      manuPKGenius.indexOf($(this).data("checkurl") + "") >= 0
        ? $(this).addClass("active")
        : $(this).removeClass("active");
    });
  $(".group-manu a.active").length > 0 && (isClickFilterManuGenius = !0);
}

function autoFillMinMaxFromHash(n, t) {
  t !== undefined &&
    t.length == 2 &&
    (updateValAndAttrValue(
      $("input[name=" + n + "-min-value]"),
      ToNumberFormat(t[0]),
    ),
    updateValAndAttrValue(
      $("input[name=" + n + "-max-value]"),
      ToNumberFormat(t[1]),
    ),
    $(".prop-minmax." + n).parents(".props").length > 0 &&
      ($(".prop-minmax." + n)
        .parents(".props")
        .find(".container")
        .slideDown(),
      $(".prop-minmax." + n)
        .parents(".props")
        .find(".range-toggle span")
        .addClass("down")));
}

function BuildLinkHash(n = false, t = false) {
  var h = manuParams.length > 0 ? "m=" + manuParams.toString() + "&" : "",
    c = propsParams.length > 0 ? "p=" + propsParams.toString() + "&" : "",
    l = clsParams.length > 0 ? "cls=" + clsParams.toString() + "&" : "",
    a = rangeParams.length > 0 ? "r=" + rangeParams.toString() + "&" : "",
    u = ordersParams != -1 ? "o=" + ordersParams + "&" : "",
    f = extParams.length > 0 ? "ext=" + extParams + "&" : "",
    e = additionFilterParam > 0 ? "add=" + additionFilterParam + "&" : "",
    o = document.cateID !== undefined ? "c=" + document.cateID + "&" : 0,
    s = "",
    i,
    r;
  if (
    (typeof searchQuery != "undefined" &&
      searchQuery !== undefined &&
      searchQuery.KeyWord !== "" &&
      searchQuery.KeyWord !== undefined &&
      (s = "kw=" + searchQuery.KeyWord + "&"),
    (i = ""),
    (r = "pi=" + (document.pageIndex !== undefined ? document.pageIndex : 0)),
    n)
  )
    (i = "ps=1&"),
      (linkRedirectHashTotal =
        o + h + c + l + a + f + u + e + i + GetParamLinkHashMinMax() + "pi=0"),
      (linkRedirectHashTotal =
        linkRedirectHashTotal.trim() !== "" ? "?" + linkRedirectHashTotal : "");
  else {
    let n = $("#paging").length > 0;
    t && !n && location.hash.trim() !== ""
      ? ((linkRedirectHash = linkRedirectHash.replace(
          "pi=" + (document.pageIndex - 1),
          "",
        )),
        (linkRedirectHash = linkRedirectHash + r))
      : (linkRedirectHash =
          t && !n && linkRedirectHash !== linkRedirectHashTotal
            ? o + s + f + u + e + r
            : o +
              s +
              h +
              c +
              l +
              a +
              f +
              u +
              e +
              i +
              GetParamLinkHashMinMax() +
              r);
    linkRedirectHash =
      linkRedirectHash.trim() !== "" ? "?" + linkRedirectHash : "";
    linkRedirectHash = linkRedirectHash.replace("??", "?");
  }
}

function GetParamLinkHashMinMax() {
  var n =
      priceRangeParams !== ""
        ? "priceminmax=" + priceRangeParams.split(".").join("").toString() + "&"
        : "",
    t =
      RangeObj.CapacityRangeParams !== ""
        ? "capacityminmax=" + RangeObj.CapacityRangeParams.toString() + "&"
        : "",
    i =
      RangeObj.HeightRangeParams !== ""
        ? "heightminmax=" + RangeObj.HeightRangeParams.toString() + "&"
        : "",
    r =
      RangeObj.WidthRangeParams !== ""
        ? "widthminmax=" + RangeObj.WidthRangeParams.toString() + "&"
        : "",
    u =
      RangeObj.DeepRangeParams !== ""
        ? "deepminmax=" + RangeObj.DeepRangeParams.toString() + "&"
        : "";
  return n + t + i + r + u;
}

function resetProductsObj() {
  productFilterObj.total = -1;
  productFilterObj.listproducts = null;
  productFilterObj.textResponseApi = "";
}

function resetVarFilterObj() {
  varFilterObj.e = null;
  varFilterObj.isMore = !1;
  varFilterObj.isCallTotal = !1;
  varFilterObj.isViewNow = !1;
  varFilterObj.pIndexGoto = -1;
}

function scrollByHash(n) {
  $(n).on("click", function (n) {
    if (this.hash !== "") {
      n.preventDefault();
      var t = this.hash;
      $("html, body").animate(
        { scrollTop: $(t).offset().top },
        800,
        function () {
          window.location.hash = t;
        },
      );
    }
  });
}

function scrollByTag(n, t = false, i = false) {
  var r = $(n),
    u,
    f;
  if (r != undefined && !(r.length <= 0)) {
    if (
      ((u = 0),
      t &&
        ($(".jsfix").addClass("fixed"),
        closePopup(),
        (u = $(".jsfix").innerHeight() + 1)),
      i)
    ) {
      $("html, body").animate({ scrollTop: r.offset().top }, 300);
      return;
    }
    f = setTimeout(function () {
      if ($(window).scrollTop() == r.offset().top - u) {
        clearTimeout(f);
        return;
      }
      $("html, body").animate({ scrollTop: r.offset().top - u }, 800);
    }, 300);
  }
}

function reLoadChildFilter() {
  if (manuParams.length == 1) {
    if (
      $(".child-filter .props").length > 0 &&
      $(".child-filter .props a").first().data("manuid") == manuParams[0]
    )
      return !1;
    var n = "?manuId=" + manuParams;
    document.cateID !== undefined &&
      document.cateID > 0 &&
      (n += "&cateId=" + document.cateID.toString());
    $.ajax({
      url: "/Category/GetChildFilter" + n,
      type: "POST",
      cache: !0,
      beforeSend: function () {},
      success: function (n) {
        n != "" &&
          ($(".child-filter .props").html(n),
          $(".child-filter-outer .props").html(n),
          $(".child-filter").removeClass("hide"),
          $(".child-filter-outer").removeClass("hide"),
          $(".child-filter-outer .props a").each(function () {
            propsParams.indexOf($(this).data("id").toString()) >= 0 &&
              $(".props a[data-id=" + $(this).data("id") + "]").addClass(
                "check",
              );
          }));
      },
      error: function (n) {
        console.log(n);
      },
    });
  } else
    $(".child-filter").addClass("hide"),
      $(".child-filter-outer .single-prop").length <= 0 &&
        $(".child-filter-outer").addClass("hide");
}

function loadingRedirect() {
  $("#progressTop").remove();
  $(".overlay").show();
  $("body").append($("<div><b></b><i></i></div>").attr("id", "progressTop"));
  $("#progressTop").width("105%");
}

function fadeOutBorder(n) {
  setTimeout(function () {
    var t = $("." + n);
    t.addClass("inside");
    $({ alpha: 1 }).animate(
      { alpha: 0 },
      {
        duration: 3e3,
        step: function () {
          t.css("outline", "rgba(73, 183, 255," + this.alpha + ") solid 3px");
          setTimeout(function () {
            t.css("outline", "none");
          }, 3e3);
        },
      },
    );
  }, 1e3);
}

function resetTextActiveFilter(n) {
  switch (n) {
    case "manu":
      $(".manu a.check").length > 0 &&
        $(".manu a.check").each(function () {
          textActiveFilter(this, "Hãng", !0);
        });
      break;
    case "prop":
      $(".props a.check").length > 0 &&
        $(".props a.check").each(function () {
          textActiveFilter(this, "", !0);
        });
      break;
    case "price":
      $(".price a.check").length > 0 &&
        $(".price a.check").each(function () {
          textActiveFilter(this, "Giá", !0);
        });
      break;
    default:
      $(".manu a.check").length > 0 &&
        $(".manu a.check").each(function () {
          textActiveFilter(this, "Hãng", !0);
        });
      $(".price a.check").length > 0 &&
        $(".price a.check").each(function () {
          textActiveFilter(this, "Giá", !0);
        });
      $(".props a.check").length > 0 &&
        $(".props a.check").each(function () {
          textActiveFilter(this, "", !0);
        });
  }
}

function textActiveFilter(n, t, i = false) {
  var u = $(n),
    r,
    f,
    e,
    s,
    o;
  if (u.parents(".filter-item").length > 0) r = u.parents(".filter-item");
  else if (u.parents(".show-total-item").length > 0)
    r = u.parents(".show-total-item");
  else return;
  r.find(".manu").length > 0 && (f = ".manu");
  r.find(".props").length > 0 && (f = ".props");
  r.find(".price").length > 0 && (f = ".price");
  r.find(".colors").length > 0 && (f = ".colors");
  r.find(".c-btnbox.check").length > 0 && !i
    ? ((e = ""),
      r.find(".jsTitle").length > 0 && r.find(".jsTitle").addClass("active"),
      (e =
        r.find(".c-btnbox.check").find("img").length > 0
          ? u.hasClass("check")
            ? u.find("img").attr("alt")
            : r.find(".c-btnbox.check img").last().attr("alt")
          : u.find(".prop-hrd").length > 0
          ? u.hasClass("check")
            ? u.find(".prop-hrd").text()
            : r.find(".c-btnbox.check").last().find(".prop-hrd").text()
          : u.hasClass("check")
          ? u.text()
          : r.find(".c-btnbox.check").last().text()),
      f == ".props"
        ? ((s = u.data("id")),
          e == undefined && (e = u.text()),
          $("a[data-id=" + s + "]")
            .parents(".filter-item")
            .find(".jsTitle span")
            .text(e + (r.find(".c-btnbox.check").length > 1 ? ",..." : "")))
        : $(f)
            .parents(".filter-item")
            .find(".jsTitle span")
            .text(e + (r.find(".c-btnbox.check").length > 1 ? ",..." : "")))
    : f == ".props"
    ? ((s = u.data("id")),
      (o = $("a[data-id=" + s + "]")
        .parents(".filter-item")
        .find(".jsTitle")
        .data("textorg")),
      o !== undefined && (t = o),
      $("a[data-id=" + s + "]")
        .parents(".filter-item")
        .find(".jsTitle span")
        .text(t))
    : ((o = r.find(".jsTitle").data("textorg")),
      o !== undefined && (t = o),
      f == undefined && u.hasClass("price-slider") && (f = ".price-slider"),
      $(f).parents(".filter-item").find(".jsTitle span").text(t));
  getTextActiveSliderRange();
}

function getTextActiveSliderRange() {
  updateTextActiveRangeMinMax();
  $(".text-active").each(function () {
    var n, t;
    $(this).attr("data-activetxt") !== undefined &&
      ($(this).attr("data-activetxt") !== ""
        ? $(this).parents(".filter-item").length > 0 &&
          $(this).parents(".filter-item").find(".jsTitle").length > 0 &&
          ($(this)
            .parents(".filter-item")
            .find(".jsTitle span")
            .text($(this).attr("data-activetxt")),
          $(this).parents(".filter-item").find(".jsTitle").addClass("active"))
        : ((n = !1),
          $(this)
            .parents(".filter-item")
            .find(".text-active")
            .each(function () {
              $(this).attr("data-activetxt") !== "" && (n = !0);
            }),
          $(this).parents(".filter-item").find(".props a.check").length > 0 &&
            (n = !0),
          n ||
            ((t = $(this)
              .parents(".filter-item")
              .find(".jsTitle")
              .data("textorg")),
            t !== undefined &&
              t !== "" &&
              $(this).parents(".filter-item").find(".jsTitle span").text(t))));
  });
}

function activeOrUnActiveBlock() {
  $(".filter-total .jsTitle.showing").hasClass("active")
    ? $(".filter-item .jsTitle").removeClass("active")
    : $(".jsTitle").removeClass("active");
  $(".c-btnbox.check").each(function () {
    $(this).parents(".filter-item").length > 0 &&
      $(this).parents(".filter-item").find(".jsTitle").addClass("active");
  });
  $("div")
    .find("[data-activetxt]")
    .each(function () {
      $(this).attr("data-activetxt") !== "" &&
        $(this).parents(".filter-item").find(".jsTitle").addClass("active");
    });
}

function activeNewFilterV2(n) {
  if (n > 0 && $("a[data-newv2='True']").length > 0) {
    var t = $(".filter-item.hide .props a.check[data-id='" + n + "']");
    if (t.length > 0) return $("a[data-newv2='True']").addClass("active"), !0;
  }
  return !1;
}

function showOrOffManuAndPropDescription() {
  document.isShowManuDes == "True" && showOrOffManuDescription();
  showOrOffPropDescription();
  editPossionBoxDescription();
}

function showOrOffManuDescription() {
  if (manuParams.length == 1) {
    var n = 0;
    $(".manu a").each(function () {
      if (manuParams.indexOf($(this).data("id") + "") >= 0)
        return (n = $(this).data("id")), !1;
    });
    $.ajax({
      url: "/Category/GetDescriptionManu",
      type: "POST",
      data: {
        categoryId: document.cateID === undefined ? 0 : document.cateID,
        manuId: n,
      },
      cache: !0,
      beforeSend: function () {},
      success: function (n) {
        n != "" && n.trim() != ""
          ? $(".warpper-manuinfo-new").length > 0
            ? $(".warpper-manuinfo-new").replaceWith(n)
            : $(n).insertBefore($(".box-sort"))
          : $(".warpper-manuinfo-new").addClass("hide");
      },
      error: function (n) {
        console.log(n);
      },
    });
  } else $(".warpper-manuinfo-new").addClass("hide");
}

function showOrOffPropDescription() {
  if (propsParams.length == 1) {
    var n = 0;
    $(".props a").each(function () {
      if (propsParams.indexOf($(this).data("id") + "") >= 0)
        return (n = $(this).data("id")), !1;
    });
    $.ajax({
      url: "/Category/GetDescriptionProp",
      type: "POST",
      data: {
        categoryId: document.cateID === undefined ? 0 : document.cateID,
        propId: n,
      },
      cache: !0,
      beforeSend: function () {},
      success: function (n) {
        n != "" && n.trim() != ""
          ? $(".info:not(.warpper-manuinfo-new)").length > 0
            ? $(".info:not(.warpper-manuinfo-new)").replaceWith(n)
            : $(n).insertAfter($(".block-scroll.filter"))
          : $(".info:not(.warpper-manuinfo-new)").addClass("hide");
      },
      error: function (n) {
        console.log(n);
      },
    });
  } else $(".info:not(.warpper-manuinfo-new)").addClass("hide");
}

function afterDoneActivePageIndex() {
  var t = pIdxActive * parseInt(document.pageSize),
    n,
    i;
  pIdxActive > 0 &&
    isPageIndexLoading == !0 &&
    $(".listproduct > li").eq(t).length > 0 &&
    ((isPageIndexLoading = !1),
    (n = $(".listproduct > li").eq(t)),
    $("html, body").animate({ scrollTop: n.offset().top }, 0),
    (i = setTimeout(function () {
      if ($(window).scrollTop() == n.offset().top) {
        clearTimeout(i);
        endActivePageIndex();
        return;
      }
      $("html, body").animate({ scrollTop: n.offset().top }, 1e3, function () {
        endActivePageIndex();
      });
    }, 500)));
}

function endActivePageIndex() {
  pIdxActive = 0;
  pIinFor = 0;
  $("#preloader").hide().removeClass("fixed");
}

function getCookie(n) {
  var i = document.cookie,
    u = n + "=",
    t = i.indexOf("; " + u),
    r;
  if (t == -1) {
    if (((t = i.indexOf(u)), t != 0)) return null;
  } else
    (t += 2), (r = document.cookie.indexOf(";", t)), r == -1 && (r = i.length);
  return decodeURI(i.substring(t + u.length, r));
}

function genPaging(n, t, i) {
  var r = parseInt(n / t);
  n == 0 ||
    i > r ||
    $.ajax({
      url: "/Category/GenPaging",
      type: "GET",
      data: { total: n, pageSize: t, pageIndex: i },
      cache: !1,
      beforeSend: function () {},
      success: function (n) {
        $("#paging").html(n);
      },
      error: function () {},
    });
}

function prGetDeliveryStatus() {
  var n, i, t;
  xhrDelivery;
  n = $(".listproduct > li:not(.ajaxed)").not(".loadingdelivery");
  i = getLocationCustomer().wardID;
  let r = extParams.indexOf("fast") >= 0;
  i > 0 &&
    n.length > 0 &&
    r !== !0 &&
    ((t = []),
    n.each(function (n, i) {
      var r = {
        PRODUCTID: $(i).data("productcode"),
        QUANTITY: 1,
        INTVENTORYSTATUSID: 1,
        OrderTypeID: $(i).data("ordertypeid"),
        MAINGROUPID: $(i).data("maingroup"),
        SUBGROUPID: $(i).data("subgroup"),
        SALEPRICE: $(i).data("price"),
        ProductType: $(i).data("type"),
        IsProductOnlineOnly: $(i).data("type") == 2,
        ISSETUPPRODUCT: $(i).data("issetup"),
      };
      $(i).addClass("loadingdelivery");
      t.push(r);
    }),
    (xhrDelivery = $.ajax({
      url: "/Category/GetStatusDeliveryV2",
      type: "POST",
      data: { products: t.slice(0, 51) },
      cache: !1,
    })
      .done(function (t) {
        if (t != undefined && t != "") {
          var i = JSON.parse(t);
          n.each(function (n, t) {
            console.log(i[n]);
            $(t).find(".shiping").replaceWith(i[n]);
            $(t).addClass("ajaxed");
            n++;
          });
        }
      })
      .fail(function () {})));
}

function CheckRemoveParamChildFilter() {
  manuParams.length > 1 &&
    propsParams.length > 0 &&
    $(".child-filter .props a.check").length > 0 &&
    $(".child-filter .props a.check").each(function () {
      propsParams.indexOf($(this).data("id") + "") >= 0 &&
        propsParams.splice(propsParams.indexOf($(this).data("id"), 1));
    });
}

function showHideManu(n) {
  var t = remove_unicode($(n).val());
  $(".filter-show .manu a").each(function () {
    if (t.trim() == "") $(this).removeClass("hide").css("display", "flex");
    else {
      var n = remove_unicode($(this).data("href"));
      n.indexOf(t) >= 0
        ? $(this).removeClass("hide").css("display", "flex")
        : $(this).addClass("hide").css("display", "none");
    }
  });
}

function remove_unicode(n) {
  return n === undefined
    ? ""
    : ((n = n.toLowerCase()),
      (n = n.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")),
      (n = n.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")),
      (n = n.replace(/ì|í|ị|ỉ|ĩ/g, "i")),
      (n = n.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")),
      (n = n.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")),
      (n = n.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")),
      (n = n.replace(/đ/g, "d")),
      (n = n.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
        "-",
      )),
      (n = n.replace(/-+-/g, "-")),
      n.replace(/^\-+|\-+$/g, ""));
}

function showBlockGroupCate(n) {
  var i = $(n),
    t;
  $(".navlink-title").removeClass("act");
  $(".navlink-item .c-listcat-fadeIn").hide();
  t = i.data("id");
  setTimeout(function () {
    $(".navlink-title[data-id=" + t + "]").addClass("act");
    $(".navlink-title[data-id=" + t + "]")
      .next(".navlink-item .c-listcat-fadeIn")
      .fadeIn(200);
  }, 400);
}

function showHideGroupCate(n) {
  var t = remove_unicode($(n).val());
  $(".c-listcat li a").each(function () {
    if (t.trim() == "") resetGroupCateSide();
    else {
      var n = remove_unicode($(this).find(".c-listcat__txt").text());
      n.indexOf(t) >= 0
        ? ($(".navlink-title").hide(),
          $(".navlink-item").addClass("border-none"),
          $(this).parents(".c-listcat").show(),
          $(this).parents("li").show(),
          $(this).show())
        : ($(this).parents("li").hide(), $(this).hide());
    }
  });
  t.trim() == "" && $(".txtnb-readmore").removeClass("hide").show();
}

function resetGroupCateSide() {
  $(".navlink-title").show();
  $("#scate").val("");
  $(".navlink-title").removeClass("act");
  $(".c-listcat li a").show();
  $(".c-listcat").hide();
  $(".c-listcat li").show();
  $(".navlink-item").removeClass("border-none");
}

function loadMoreProductOther(n) {
  var i = $(n),
    t = i.prev("ul"),
    r;
  t.length > 0 &&
    ((r = 10),
    $(t)
      .find("li.hide")
      .each(function (n, t) {
        n < r && $(t).removeClass("hide").addClass("show");
      }),
    $(t).find("li.hide").length > 0
      ? i.find(".remain").text($(t).find("li.hide").length)
      : i.hide());
}

function showTabIndexOther(n) {
  function f() {
    var n, r;
    $(".stage-two").remove();
    n = $("ul.listproduct[id=" + t + "]").find("li").length;
    $("a.vm-pros-other").hide();
    n > i &&
      ($("ul.listproduct[id=" + t + "]")
        .find("li")
        .each(function (n) {
          n >= i ? $(this).addClass("hide") : $(this).addClass("show");
        }),
      (r = $("ul.listproduct[id=" + t + "]").next("a")),
      r
        .removeClass("hide")
        .show()
        .find(".remain")
        .text(n - i));
    $("#preloader").hide();
    $("ul.listproduct[id=" + t + "]")
      .removeClass("hide")
      .show();
  }

  var r = $(n),
    u = r.data("placeid"),
    t = r.data("bannerid"),
    i = 15;
  u > 0 &&
    ($("ul.listproduct[id=" + t + "]").find("li").length > 0
      ? ($("ul.listproduct").hide(), f())
      : $.ajax({
          url: "/Category/GetProductListByHtmlOrBanner",
          data: {
            htmlId: 0,
            placeId: parseInt(u),
            bannerId: parseInt(t),
            pageSize: 0,
            pageIndex: 0,
          },
          cache: !0,
          type: "POST",
          async: !0,
          beforeSend: function () {
            $("#preloader").show();
          },
          success: function (n) {
            if (
              ($("#empty").remove(),
              $("ul.listproduct").hide(),
              $("ul.listproduct[id=" + t + "]").html(n),
              n == "" || n.trim() == "")
            )
              $("ul.listproduct[id=" + t + "]").append(
                '<div id="empty"><i class="empty"></i>Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm!</div>',
              );
            f();
          },
          error: function (n) {
            console.log(n);
          },
        }));
}

function showAllManuAccessories(n) {
  $(n).remove();
  $(".trademark__list").find("a").removeClass("hide");
}

function loadMoreProductAccessories(n) {
  var t = $(n),
    i,
    r;
  t.find(".bubblingG").length > 0 ||
    ((i = parseInt(t.data("pagesize"))),
    (r = 0),
    (pageIndexAccessories += 1),
    $.ajax({
      url: "/Category/ViewMoreProductAccessories",
      data: { cateID: r, pageSize: i, pageIndex: pageIndexAccessories },
      type: "POST",
      cache: !0,
      beforeSend: function () {
        t.append(appendLoadingViewMoreNew());
      },
      success: function (n) {
        var u = n.total,
          r = u - i * (pageIndexAccessories + 1);
        r <= 0
          ? t.hide()
          : ($(".bubblingG").remove(), t.find(".remain").text(r));
        n.listproducts !== "" &&
          n.listproducts !== null &&
          n.total > 0 &&
          $("#pk_discount .listproduct").append(n.listproducts);
      },
      error: function (n) {
        console.log(n);
      },
    }));
}

function replaceListProductWatchPage() {
  console.log("replaceListProductWatchPage_");
  $(document).on("click", ".watch-type .tabs-type span", function (n) {
    var a, f, e, o, c, t, u, r, i;
    if ((n.preventDefault(), !$(this).hasClass("current"))) {
      a = $(this);
      f = !1;
      $(this).hasClass("watch-smart-watch") && (f = !0);
      e = !1;
      o = !1;
      $(this).hasClass("luxury-watch") && (e = !0);
      $(this).hasClass("monopoly-watch") && (o = !0);
      c = 0;
      t = $(this).data("id");
      e && (c = t);
      var s = $(this).data("prop"),
        h = $(this).text(),
        l = $(this).data("url");
      t !== undefined &&
        t != "" &&
        ($(this)
          .parent()
          .find("span")
          .removeClass("current")
          .removeClass("active-tab"),
        $(this).addClass("current").addClass("active-tab"),
        (u = $(this)
          .parent()
          .parent()
          .parent()
          .find(".prt-watch .listproduct")),
        u.length == 1 &&
          ((r = $(this).parent().parent().find("a.see-all")),
          (i = {
            CategoryId: f ? t : document.cateID,
            PageSize: 15,
            StrPropID: f == !1 ? t : s !== undefined && s != "" ? s : "",
            ManuId: c,
            IsLuxuryWatch: !1,
            IsWatchPage: document.isWatch,
            OrderType: 8,
          }),
          e && ((i.StrPropID = ""), (i.IsLuxuryWatch = !0)),
          o && ((i.StrPropID = "182616"), (i.ManuId = t)),
          t != null && t === 147889 && (i.CategoryId = "7077"),
          $.ajax({
            url: "/Category/GetProductList",
            type: "POST",
            data: i,
            cache: !0,
            beforeSend: function () {
              $("#preloader").show();
            },
            success: function (n) {
              var c, a;
              $("#preloader").hide();
              n != ""
                ? (u.html(n),
                  u.owlCarousel("destroy"),
                  InitProductOwlCarousel(u),
                  r !== undefined &&
                    r.length > 0 &&
                    ((c = "/dong-ho-deo-tay"),
                    f
                      ? ((c = "/dong-ho-thong-minh#p=" + s), r.attr("href", c))
                      : e == !1
                      ? ((c = c + "#p=" + i.StrPropID),
                        o &&
                          i.ManuId != "" &&
                          ((c = c + "&m=" + i.ManuId),
                          l != undefined && l != "" && (c = l)),
                        t != null &&
                          t === 147889 &&
                          (c = $(".propDVTE").attr("data-link")),
                        r.attr("href", c))
                      : ((c =
                          c +
                          `#c=7264&m=${i.ManuId}&r=781,782,783,784&o=8&pi=0`),
                        r.attr("href", c)),
                    (a = r.data("text")),
                    f
                      ? (a = a.replace("thời trang", "thông minh"))
                      : (e == !1 && (h = h.toLowerCase()),
                        h.toLowerCase() != "đồng hồ thời trang" &&
                          (a = a + " " + h)),
                    r.text(a),
                    r.show()))
                : (u.owlCarousel("destroy"), u.find("li").remove(), r.hide());
            },
            error: function (n) {
              console.log(n);
            },
          })));
    }
  });
}

function replaceTextSeeAllWatchPage() {
  if ($(".watch-type .tabs-type span.current").length > 0) {
    var r = "",
      i = 0,
      n = "",
      t = "";
    $(".watch-type .tabs-type span.current").each(function () {
      n = "/dong-ho-deo-tay";
      var u = $(this).parent().parent().find("a.see-all");
      r = u.data("text");
      t = $(this).text();
      i = $(this).data("id");
      $(this).hasClass("watch-smart-watch")
        ? ((n = "/dong-ho-thong-minh#p=" + i),
          u.attr("href", n),
          (t = t.toLowerCase()))
        : $(this).hasClass("luxury-watch")
        ? ((n = n + `#c=7264&m=${i}&r=781,782,783,784&o=8&pi=0`),
          u.attr("href", n))
        : $(this).hasClass("monopoly-watch")
        ? ((n = n + "#m=" + i + "&p=182616"),
          $(this).data("url") != undefined &&
            $(this).data("url") != "" &&
            (n = $(this).data("url")),
          u.attr("href", n))
        : ((n = n + "#p=" + i), u.attr("href", n), (t = t.toLowerCase()));
      t.includes("đồng hồ thời trang") || u.text(r + " " + t);
    });
  }
}

function filterProsPKGenuine(n = false) {
  xhrPKGenuine && xhrPKGenuine.abort();
  n ? (document.pageIndex += 1) : (document.pageIndex = 0);
  var i = cidsParams.length > 0 ? "cids=" + cidsParams.toString() + "&" : "",
    r = "pi=" + (document.pageIndex !== undefined ? document.pageIndex : 0),
    u = extParams.length > 0 ? "ext=" + extParams + "&" : "",
    f = ordersParams != -1 ? "o=" + ordersParams + "&" : "",
    e = additionFilterParam > 0 ? "add=" + additionFilterParam + "&" : "",
    o = document.cateUrl !== "" ? "curl=" + document.cateUrl + "&" : "",
    t = manuPKGenius,
    s =
      manuPKGenius !== ""
        ? "mGenius=" + manuPKGenius.replace("-", " ") + "&"
        : "";
  linkHashPKGenuine = o + i + s + u + f + e + r;
  linkHashPKGenuine =
    linkHashPKGenuine.trim() !== "" ? "?" + linkHashPKGenuine : "";
  xhrPKGenuine = $.ajax({
    url: "/Category/FilterAccessoryGenuine" + linkHashPKGenuine,
    type: "POST",
    cache: !0,
    beforeSend: function () {
      n
        ? ($(".view-more a").addClass("prevent"),
          $(".view-more a").append(appendLoadingViewMoreNew()))
        : ($("#preloader").addClass("fixed"), $("#preloader").show());
    },
    success: function (n) {
      var s, c, l;
      if (
        (console.log(n.textResponseApi),
        $(".box-sort").removeClass("hide-ext"),
        $(".box-sort .manu-sort").show(),
        (document.TotalCount = n.total),
        $(".group-manu a.active").length > 0 &&
        $(".group-manu a.active").data("name") !== undefined &&
        $(".group-manu a.active").data("name") !== ""
          ? ($(".breadcrumb .sort-total").text(
              "Phụ kiện " + $(".group-manu a.active").data("name"),
            ),
            $(".box-sort.genuine .sort-total").text(
              n.total + " Phụ kiện " + $(".group-manu a.active").data("name"),
            ))
          : $(".sort-total b").html(n.total),
        n.listproducts !== "" && n.listproducts !== null && n.total > 0)
      ) {
        if (document.pageIndex == 0)
          $(".listproduct").html(n.listproducts),
            (totalAjax = document.TotalCount);
        else {
          $(".listproduct").append(n.listproducts);
          var h = parseInt(document.TotalCount),
            a = parseInt(document.pageIndex) + 1,
            v = parseInt(document.pageSize);
          totalAjax = h > a * v ? h : 0;
        }
        showHideViewMore(totalAjax);
        totalAjax > 0 && totalAjax < 5
          ? $(".sort-select").hasClass("hide")
            ? console.log("nothing to do")
            : $(".sort-select").addClass("hide")
          : $(".sort-select.hide").removeClass("hide");
      } else
        (s = ""),
          (c =
            '<div id="empty"><i class="empty"></i>Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm!{back-to-category}</div>'),
          document.cateName !== undefined &&
            document.cateName !== "" &&
            (s =
              '<p><a href="javascript:;" onclick="reloadURL()">Xem tất cả ' +
              document.cateName.toLowerCase() +
              "</a></p>"),
          $(".listproduct").html(c.replace("{back-to-category}", s)),
          $(".box-sort").addClass("hide-ext"),
          $(".view-more").hide();
      isClickFilterManuGenius &&
        $(".box-quicklink.accessories").html(n.listcategory);
      isClickFilterManuGenius = !1;
      linkHashPKGenuine.charAt(0) == "?" &&
        (linkHashPKGenuine = linkHashPKGenuine.replace(
          linkHashPKGenuine.charAt(0),
          "",
        ));
      linkHashPKGenuine[linkHashPKGenuine.length - 1] == "&" &&
        (linkHashPKGenuine = linkHashPKGenuine.substring(
          0,
          linkHashPKGenuine.length - 1,
        ));
      t !== undefined &&
        t !== "" &&
        (linkHashPKGenuine =
          o + i + "mGenius=" + t.replace(" ", "-") + "&" + u + f + e + r);
      l = linkHashPKGenuine.replace("#?", "#");
      location.hash = l;
      $("#preloader").hide();
      $(".view-more .bubblingG").remove();
      showSurvey();
    },
    error: function (n) {
      console.log(n);
    },
  });
}

function closeBannerCate() {
  $(".warpper-banner").hide();
  sessionStorage.setItem(keyNameSession, 1);
}

function InitProductOwlCarousel(n) {
  var t = n;
  if (
    (t.owlCarousel({
      nav: !0,
      items: 5,
      loop: !1,
      rewind: !0,
      dots: !1,
      autoplay: !1,
      slideBy: 5,
      lazyLoad: !0,
      autoplayTimeout: 2e3,
      autoplayHoverPause: !0,
    }),
    $(".pk-sale.isCarousel.max-height").length > 0)
  )
    t.on("translated.owl.carousel", function () {
      $(this).parents(".pk-sale").removeClass("max-height");
    });
}

function initSuggestAccess() {
  if (!($("#access-keyword").length <= 0)) {
    isInitSuggestAccess = !0;
    var n = AutoComplete.defaults.KeyboardMappings;
    n.Enter.Callback = function () {
      redirectSearchAccess(".searchacc");
    };
    AutoComplete(
      {
        Url: "/Category/SuggestAccessories",
        _QueryArg: function () {
          return (
            "catId=" +
            document.cateID +
            "&cateBaseUrl=" +
            document.cateUrl +
            "&term"
          );
        },
        _Pre: function () {
          return (
            this.Input.value == "" && $(".autocomplete").hide(),
            this.Input.value
          );
        },
        _Blur: function (n) {
          $(n.relatedTarget).parents(".autocomplete") ||
            ($(".suggest-accessory .autocomplete").length > 0 &&
              $(".suggest-accessory .autocomplete").hide());
        },
        _Focus: function () {
          $(".suggest-accessory .autocomplete ul li").length > 0 &&
            $(".suggest-accessory .autocomplete").show();
        },
        _Position: function () {
          this.DOMResults.setAttribute("class", "autocomplete");
          this.DOMResults.setAttribute("class", "hide");
        },
        _Post: function (n) {
          return $(n).find("li").length > 0 && $(".autocomplete").show(), n;
        },
        _Select: function (n) {
          location.href = n.firstElementChild.href;
        },
      },
      "#access-keyword",
    );
  }
}

function redirectSearchAccess(n) {
  var t = $(n),
    i = t.data("cateid");
  goToSearchPage($("#access-keyword").val(), i);
}

function getRangeAndStepByMinMax(n, t) {
  var i = null,
    u = 0,
    f = 0,
    r;
  let e = t.toString(),
    o = n.toString();
  if (((u = e.length), (f = o.length), (r = u - f), t > 1e4))
    if (t < 1e5)
      switch (r) {
        case 0:
          i = { min: [n, 1e3], max: [t] };
          break;
        case 1:
          i = { min: [n, 100], "60%": [1e4, 1e3], max: [t] };
          break;
        case 2:
          i = { min: [n, 100], "60%": [1e4, 1e3], max: [t] };
          break;
        case 3:
          i = {
            min: [n],
            "5%": [0, 100],
            "30%": [1e3, 100],
            "60%": [1e4, 1e3],
            max: [t],
          };
      }
    else if (t < 1e6)
      switch (r) {
        case 0:
          i = { min: [n], "1%": [1e5, 1e4], max: [t] };
          break;
        case 1:
          i = { min: [n], "30%": [1e4, 1e3], "60%": [1e5, 1e4], max: [t] };
          break;
        case 2:
          i = { min: [n], "1%": [1e3, 1e3], "30%": [1e4, 1e3], max: [t, 1e4] };
          break;
        case 3:
          i = {
            min: [n],
            "1%": [100, 100],
            "5%": [1e3, 1e3],
            "30%": [1e4, 1e3],
            "60%": [1e5, 1e4],
            max: [t],
          };
      }
    else if (t < 1e7)
      switch (r) {
        case 0:
        case 1:
          i = { min: [n], "1%": [0, 1e5], max: [t] };
          break;
        case 2:
          i = {
            min: [n],
            "1%": [1e4, 1e3],
            "50%": [1e5, 1e4],
            "70%": [1e6, 1e5],
            max: [t],
          };
          break;
        case 3:
          i = {
            min: [n],
            "1%": [1e3, 1e3],
            "10%": [1e4, 1e3],
            "50%": [1e5, 1e4],
            "80%": [1e6, 1e5],
            max: [t],
          };
      }
  return i == null && (i = { min: [n, 100], max: [t] }), i;
}

function EventPriceRange() {
  function t(t = false) {
    var i = n.from($("input[name='price-min-value']").val()),
      r = n.from($("input[name='price-max-value']").val());
    i > r || i < minval
      ? (updateValAndAttrValue(
          $("input[name='price-min-value']"),
          ToNumberFormat(minval),
        ),
        (i = minval))
      : updateValAndAttrValue(
          $("input[name='price-min-value']"),
          ToNumberFormat(i),
        );
    rangePriceSlider.noUiSlider.set([i, r]);
    rangePriceSliderTotal.noUiSlider.set([i, r]);
    t || callFilterRangeSlider();
  }

  function i(t = false) {
    var r = n.from($("input[name='price-min-value']").val()),
      i = n.from($("input[name='price-max-value']").val());
    r > i || i > maxval
      ? (updateValAndAttrValue(
          $("input[name='price-max-value']"),
          ToNumberFormat(maxval),
        ),
        (i = maxval))
      : updateValAndAttrValue(
          $("input[name='price-max-value']"),
          ToNumberFormat(i),
        );
    rangePriceSlider.noUiSlider.set([r, i]);
    rangePriceSliderTotal.noUiSlider.set([r, i]);
    t || callFilterRangeSlider();
  }

  if (minval != 0 || maxval != 0) {
    $(".noUi-handle").on("click", function () {
      $(this).width(50);
    });
    var n = wNumb({ decimals: 0, thousand: ".", prefix: "", postfix: "" });
    noUiSlider.create(rangePriceSlider, {
      start: [minval, maxval],
      step: 1e3,
      range: getRangeAndStepByMinMax(minval, maxval),
      format: n,
      connect: !0,
    });
    noUiSlider.create(rangePriceSliderTotal, {
      start: [minval, maxval],
      step: 1e3,
      range: getRangeAndStepByMinMax(minval, maxval),
      format: n,
      connect: !0,
    });
    rangePriceSlider.noUiSlider.on("update", function (n, t) {
      t == 0
        ? $('input[name="price-min-value"]').val(n[0])
        : $('input[name="price-max-value"]').val(n[1]);
    });
    rangePriceSliderTotal.noUiSlider.on("update", function (n, t) {
      t == 0
        ? $('input[name="price-min-value"]').val(n[0])
        : $('input[name="price-max-value"]').val(n[1]);
    });
    rangePriceSlider.noUiSlider.on("slide", function (n, t) {
      t == 0
        ? ($(".noUi-handle-upper .popup-price").remove(),
          $(".noUi-handle-lower .popup-price").length <= 0 &&
            $(".noUi-handle-lower").append('<div class="popup-price"></div>'))
        : t == 1 &&
          ($(".noUi-handle-lower .popup-price").remove(),
          $(".noUi-handle-upper .popup-price").length <= 0 &&
            $(".noUi-handle-upper").append('<div class="popup-price"></div>'));
    });
    rangePriceSliderTotal.noUiSlider.on("slide", function (n, t) {
      t == 0
        ? ($(".noUi-handle-upper .popup-price").remove(),
          $(".noUi-handle-lower .popup-price").length <= 0 &&
            $(".noUi-handle-lower").append('<div class="popup-price"></div>'))
        : t == 1 &&
          ($(".noUi-handle-lower .popup-price").remove(),
          $(".noUi-handle-upper .popup-price").length <= 0 &&
            $(".noUi-handle-upper").append('<div class="popup-price"></div>'));
    });
    rangePriceSlider.noUiSlider.on("change", function (n) {
      updateValAndAttrValue($("input[name='price-min-value']"), n[0]);
      updateValAndAttrValue($("input[name='price-max-value']"), n[1]);
      rangePriceSliderTotal.noUiSlider.set([n[0], n[1]]);
      $(".popup-price").fadeOut();
      callFilterRangeSlider();
    });
    rangePriceSliderTotal.noUiSlider.on("change", function (n) {
      updateValAndAttrValue($("input[name='price-min-value']"), n[0]);
      updateValAndAttrValue($("input[name='price-max-value']"), n[1]);
      rangePriceSlider.noUiSlider.set([n[0], n[1]]);
      $(".popup-price").fadeOut();
      callFilterRangeSlider();
    });
    $('input[name="price-min-value"]').keyup(function (n) {
      if (n.keyCode == 13) t();
      else {
        var i = ToNumberFormat(
          n.currentTarget.value.replaceAll(".", ""),
        ).toString();
        $('input[name="price-min-value"]').attr("value", i);
        $('input[name="price-min-value"]').val(i);
      }
    });
    $("input[name='price-max-value']").keyup(function (n) {
      if (n.keyCode == 13) i();
      else {
        var t = ToNumberFormat(
          n.currentTarget.value.replaceAll(".", ""),
        ).toString();
        $("input[name='price-max-value']").attr("value", t);
        $("input[name='price-max-value']").val(t);
      }
    });
    $("input[name='price-min-value']").focus(function () {
      this.setSelectionRange(0, this.value.length);
    });
    $("input[name='price-max-value']").focus(function () {
      this.setSelectionRange(0, this.value.length);
    });
    $("input[name='price-min-value']").blur(function () {
      return t(), !1;
    });
    $("input[name='price-max-value']").blur(function () {
      return i(), !1;
    });
  }
}

function EventPropRange() {
  function t(n) {
    var t = $(n),
      i = t.val(),
      u = t.hasClass("min"),
      f = t.hasClass("max"),
      r = !1;
    return (
      (u && parseInt(i) < parseInt(t.data("minvalue"))) ||
      parseInt(i) > parseInt(t.parents(".prop-minmax").find("input.max").val())
        ? (r = !0)
        : ((f && parseInt(i) > parseInt(t.data("maxvalue"))) ||
            parseInt(i) <
              parseInt(t.parents(".prop-minmax").find("input.min").val())) &&
          (r = !0),
      r
    );
  }

  function n(n) {
    var r = $(n).val(),
      u = $(n).hasClass("min"),
      f = $(n).hasClass("max"),
      i = !1;
    (r == "" || t(n)) && (i = !0);
    i &&
      (u
        ? updateValAndAttrValue($(n), ToNumberFormat($(n).data("minvalue")))
        : f &&
          updateValAndAttrValue($(n), ToNumberFormat($(n).data("maxvalue"))));
    getOrRemoveRangeParamByName($(n));
    updateTextActiveRangeMinMax();
  }

  $(".prop-minmax input").keyup(function (t) {
    var i = $(this).val();
    updateValAndAttrValue($(this), ToNumberFormat(i));
    t.keyCode == 13 && (n(this), totalFilterPros());
  });
  $(".prop-minmax input").blur(function (t) {
    n(this);
    $(t.relatedTarget).hasClass("btn-filter-readmore") || totalFilterPros();
  });
}

function ToNumberFormat(n) {
  return numeral(n).format("0,0").replaceAll(",", ".");
}

function resetPriceRange() {
  $(".price-slider-active").remove();
  rangePriceSlider !== null &&
    (rangePriceSlider.noUiSlider.set([minval, maxval]),
    rangePriceSliderTotal.noUiSlider.set([minval, maxval]),
    updateValAndAttrValue(
      $("input[name='price-min-value']"),
      ToNumberFormat(minval),
    ),
    updateValAndAttrValue(
      $("input[name='price-max-value']"),
      ToNumberFormat(maxval),
    ),
    $(".price-slider").attr("data-activetxt", ""));
}

function resetPropRange(n) {
  var t = $(n);
  t.find("input").each(function () {
    updateValAndAttrValue(
      t.find("input.min"),
      ToNumberFormat($(this).data("minvalue")),
    );
    updateValAndAttrValue(
      t.find("input.max"),
      ToNumberFormat($(this).data("maxvalue")),
    );
  });
  t.find(".text-active").attr("data-activetxt", "");
}

function loadPriceRangeSlider(n) {
  var t = $(n);
  $(".price-slider").find(".range-toggle span").toggleClass("down");
  resetPriceRange();
  $(".price-slider .container").is(":visible") == !1
    ? ($(".price-slider .container").slideDown(),
      $(".price a.check").length > 0 &&
        ($(".price a.check").each(function () {
          var n = this.dataset.id;
          rangeParams.indexOf(n) >= 0 &&
            (rangeParams.splice(rangeParams.indexOf(n), 1),
            autoAddorRemoveFilterActive(this, null),
            $(".price a[data-id=" + n + "]").removeClass("check"));
        }),
        totalFilterPros()))
    : ($(".price-slider .container").slideUp(), callFilterRangeSlider(!0));
}

function loadRangeInput(n) {
  var i = $(n),
    t;
  resetPropRange(n);
  t = i.parents(".prop-minmax").attr("data-type");
  $(".prop-minmax." + t)
    .find(".range-toggle span")
    .toggleClass("down");
  $(".prop-minmax." + t).find("span.down").length > 0
    ? ($(".prop-minmax." + t)
        .find(".container")
        .slideDown(),
      $(".prop-minmax." + t)
        .parents(".props")
        .find("a.check").length > 0 &&
        ($(".prop-minmax." + t)
          .parents(".props")
          .find("a.check")
          .each(function () {
            var n = this.dataset.id;
            propsParams.indexOf(n) >= 0 &&
              (propsParams.splice(propsParams.indexOf(n), 1),
              $(".props a[data-id=" + n + "]").removeClass("check"));
          }),
        totalFilterPros()))
    : $(".prop-minmax." + t)
        .parents(".props")
        .find(".container")
        .slideUp();
}

function callFilterRangeSlider(n = false) {
  priceRangeParams = n
    ? ""
    : $('input[name="price-min-value"]').val().split(".").join("") +
      "-" +
      $('input[name="price-max-value"]').val().split(".").join("");
  totalFilterPros();
  updateTextActiveRangeMinMax();
}

function updateValAndAttrValue(n, t) {
  n.each(function () {
    $(this).attr("value", t);
    $(this).val(t);
  });
}

function updateTextActiveRangeMinMax() {
  function n(n) {
    $(".text-active." + n).attr("data-activetxt", "");
  }

  function t(n) {
    var r =
        $("input[name=" + n + "-min-value").val() !== "0"
          ? $("input[name=" + n + "-min-value").val()
          : "0",
      u =
        $("input[name=" + n + "-max-value").val() !== "0"
          ? $("input[name=" + n + "-max-value").val()
          : "0",
      t = $(".text-active." + n).attr("data-unit"),
      i,
      f;
    (r == "0" && u == "0") || (r == "" && u == "")
      ? $(".text-active." + n).attr("data-activetxt", "")
      : t !== undefined &&
        t !== "" &&
        ($(".filter-item .text-active." + n)
          .find(".prop-minmax-input")
          .addClass("has-value"),
        (t = " " + t),
        (i = "Từ "),
        (f = !1),
        $(".text-active." + n)
          .parent()
          .find(".prop-minmax").length > 1 &&
          $(".filter-item .prop-minmax-input.has-value").length > 1 &&
          (f = !0),
        n == "width"
          ? (i = "Ngang ")
          : n == "height"
          ? (i = "Cao ")
          : n == "deep" && (i = "Sâu "),
        $(".text-active." + n).attr(
          "data-activetxt",
          i + r + t + " - " + u + t + (f ? ",..." : ""),
        ));
    autoAddorRemoveFilterActive();
  }

  var u, e, f;
  if (priceRangeParams !== "") {
    var i =
        $('input[name="price-min-value"]').val() !== "0"
          ? $('input[name="price-min-value"]').val() + ".000"
          : "0",
      r =
        $('input[name="price-max-value"]').val() !== "0"
          ? $('input[name="price-max-value"]').val() + ".000"
          : "0",
      o =
        parseInt(
          $('input[name="price-min-value"]').val().replaceAll(".", ""),
        ) >= minval &&
        parseInt(
          $('input[name="price-min-value"]').val().replaceAll(".", ""),
        ) <= maxval;
    o ||
      ((u = ToNumberFormat(minval)),
      updateValAndAttrValue($('input[name="price-min-value"]'), u),
      (i = u));
    e =
      parseInt($('input[name="price-max-value"]').val().replaceAll(".", "")) <=
        maxval &&
      parseInt($('input[name="price-max-value"]').val().replaceAll(".", "")) >=
        minval;
    e ||
      ((f = ToNumberFormat(maxval)),
      updateValAndAttrValue($('input[name="price-max-value"]'), f),
      (r = f));
    i == "0" && r == "0"
      ? $(".price-slider").attr("data-activetxt", "")
      : $(".price-slider").attr("data-activetxt", "Từ " + i + "đ - " + r + "đ");
    autoAddorRemoveFilterActive();
  }
  RangeObj.CapacityRangeParams !== "" ? t("capacity") : n("capacity");
  RangeObj.HeightRangeParams !== "" ? t("height") : n("height");
  RangeObj.WidthRangeParams !== "" ? t("width") : n("width");
  RangeObj.DeepRangeParams !== "" ? t("deep") : n("deep");
}

function getOrRemoveRangeParamByName(n, t = false) {
  function r(n, t, i = false) {
    var r = n.hasClass("min")
        ? n.val()
        : $("input[name=" + t + "-min-value]").val(),
      u = n.hasClass("max")
        ? n.val()
        : $("input[name=" + t + "-max-value]").val();
    r =
      r == "" ? $("input[name=" + t + "-min-value]").attr("data-minvalue") : r;
    u =
      u == "" ? $("input[name=" + t + "-max-value]").attr("data-maxvalue") : u;
    i
      ? (n.parents(".prop-minmax-input").removeClass("has-value"),
        (r = ""),
        (u = ""))
      : n.parents(".prop-minmax-input").addClass("has-value");
    updateValAndAttrValue($("input[name=" + t + "-min-value]"), r);
    updateValAndAttrValue($("input[name=" + t + "-max-value]"), u);
  }

  var i = $(n);
  if (document.cateID == "1943" || document.cateID == "1944") {
    if (i.attr("name").indexOf("capacity") >= 0) {
      if ((r(i, "capacity", t), t)) {
        RangeObj.CapacityRangeParams = "";
        i.parents(".props").find(".prop-minmax .container").slideUp();
        i.parents(".props")
          .find(".prop-minmax .range-toggle span")
          .removeClass("down");
        return;
      }
      RangeObj.CapacityRangeParams =
        $("input[name=capacity-min-value]").attr("value") +
        "-" +
        $("input[name=capacity-max-value]").attr("value");
    }
    if (i.attr("name").indexOf("height") >= 0) {
      if ((r(i, "height", t), t)) {
        RangeObj.HeightRangeParams = "";
        return;
      }
      RangeObj.HeightRangeParams =
        $("input[name=height-min-value]").attr("value") +
        "-" +
        $("input[name=height-max-value]").attr("value");
    }
    if (i.attr("name").indexOf("width") >= 0) {
      if ((r(i, "width", t), t)) {
        RangeObj.WidthRangeParams = "";
        return;
      }
      RangeObj.WidthRangeParams =
        $("input[name=width-min-value]").attr("value") +
        "-" +
        $("input[name=width-max-value]").attr("value");
    }
    if (i.attr("name").indexOf("deep") >= 0) {
      if ((r(i, "deep", t), t)) {
        RangeObj.DeepRangeParams = "";
        return;
      }
      RangeObj.DeepRangeParams =
        $("input[name=deep-min-value]").attr("value") +
        "-" +
        $("input[name=deep-max-value]").attr("value");
    }
  }
}

function editPossionBoxDescription() {
  $(".info__title.manu_title").length > 0 &&
    $(".info__content.manu_content").css(
      "left",
      $(".info__title.manu_title").width() + 20,
    );
  $(".info__title:not(.manu_title)").length > 0 &&
    $(".info__content:not(.manu_content)").css(
      "left",
      $(".info__title:not(.manu_title)").width() + 20,
    );
}

function AutoActiveBoxOther() {
  var n = window.location.hash.replace("#", "");
  if (n !== undefined && n !== "" && n.indexOf("&") < 0) {
    if ($("#" + n).length > 0) {
      $("body,html").animate({ scrollTop: $("#" + n).offset().top }, 300);
      return;
    }
    $(".ht-sale .ht-sale__tab li").each(function () {
      var t = $(this).data("activeurl");
      if (t !== undefined && t.trim() === n)
        return $(this).trigger("click"), scrollByTag(".ht-sale"), !1;
    });
  }
}

function fixShowFilterLeftRight() {
  $(".filter-item__title").each(function () {
    $(this).next(".filter-show").length > 0 && $(this).offset().left >= 800
      ? $(this).next(".filter-show").addClass("filter-show--right")
      : $(this).next(".filter-show").removeClass("filter-show--right");
  });
}

function LoadNewProductMergingByID() {
  $(document).on("click", ".prods-group ul li", function (n) {
    var t = $(this);
    if (
      (n.preventDefault(), !$(this).hasClass("act")) &&
      t.data("id") !== "" &&
      parseInt(t.data("id")) > 0
    ) {
      var i = t.parents(".prods-group").data("lstarranged"),
        u = t.parents(".prods-group").data("mergename"),
        r = t.parents(".prods-group").data("iscompare");
      $.ajax({
        url: "/Category/LoadNewProductMergingByID",
        type: "POST",
        cache: !0,
        data: {
          productId: parseInt(t.data("id")),
          lstProductArranged: i,
          isFilter: document.IsFilter == "True",
          isCompare: r == "True",
        },
        async: !0,
        beforeSend: function () {
          t.parents("li.item")
            .addClass("loading-border")
            .append(appendLoadingViewMoreNew());
          t.parents(".prods-group").find("li").removeClass("act");
        },
        success: function (n) {
          $(".loading-border .bubblingG").remove();
          t.parents("li.item").removeClass("loading-border");
          t.parents("li.item").replaceWith(n);
        },
        error: function (n) {
          console.log(n);
        },
      });
    }
  });
}

function autoAddorRemoveFilterActive(n, t) {
  var u;
  if (!($(".list-filter-active").length <= 0)) {
    if (n !== undefined && n !== null && $(n).length > 0) {
      $(".list-filter-active a[data-id=" + $(n).data("id") + "]").length > 0 &&
        $(".list-filter-active a[data-id=" + $(n).data("id") + "]").remove();
      return;
    }
    var f = !1,
      r = 0,
      i =
        '<a href="javascript:;" onclick="removeFilterActive(this)" data-type="{type}" data-id="{id}"><span>{text}</span><i class="iconcate-closess"></i></a>';
    if (
      (t !== undefined &&
        t !== null &&
        $(t).length > 0 &&
        ((f = !0),
        (r = $(t).parents(".manu").length > 0 ? 1 : 0),
        (r = r <= 0 ? ($(t).parents(".price").length > 0 ? 2 : 0) : r),
        (r = r <= 0 ? ($(t).parents(".props").length > 0 ? 3 : 0) : r),
        (r = r <= 0 ? ($(t).parents(".colors").length > 0 ? 4 : 0) : r)),
      f)
    ) {
      i = i.replace("{type}", r);
      switch (r) {
        case 1:
          if (
            $(".list-filter-active .manu a[data-id=" + $(t).data("id") + "]")
              .length > 0
          )
            break;
          i = i.replace("{id}", $(t).data("id"));
          i = i.replace("{text}", $(t).data("name"));
          $(".list-filter-active .manu").append(i);
          break;
        case 2:
          if (
            $(".list-filter-active .price a[data-id=" + $(t).data("id") + "]")
              .length > 0
          )
            break;
          i = i.replace("{id}", $(t).data("id"));
          i = i.replace("{text}", $(t).text());
          $(".list-filter-active .price").append(i);
          break;
        case 3:
          if (
            $(".list-filter-active .props a[data-id=" + $(t).data("id") + "]")
              .length > 0
          )
            break;
          i = i.replace("{id}", $(t).data("id"));
          i = i.replace("{text}", $(t).text());
          $(".list-filter-active .props").append(i);
          break;
        case 4:
          if (
            $(".list-filter-active .colors a[data-id=" + $(t).data("id") + "]")
              .length > 0
          )
            break;
          i = i.replace("{id}", $(t).data("id"));
          i = i.replace("{text}", $(t).text());
          $(".list-filter-active .colors").append(i);
      }
    } else
      $(".price-slider").length > 0 &&
        $(".price-slider").first()[0].dataset.activetxt !== "" &&
        ($(".price-slider-active").remove(),
        (u =
          '<a href="javascript:;" class="price-slider-active" onclick="resetPriceRangeOnLstFilterActive()"><span>{text}</span><i class="iconcate-closess"></i></a>'),
        (u = u.replace(
          "{text}",
          $(".price-slider").first()[0].dataset.activetxt,
        )),
        $(".list-filter-active .price").append(u)),
        $(".prop-minmax-input.has-value").length > 0 &&
          $(".prop-minmax-input.has-value").each(function () {
            let n = $(this).parents(".prop-minmax");
            if ($(n).length > 0 && parseInt($(n).attr("data-type")) !== "") {
              var t =
                  '<a href="javascript:;" class="prop-slider-active" data-type="{type}"><span>{text}</span><i class="iconcate-closess"></i></a>',
                i = $(n).attr("data-type");
              if (
                ($(".prop-slider-active[data-type=" + i + "]").length > 0 &&
                  $(".prop-slider-active[data-type=" + i + "]").remove(),
                $(n).attr("data-activetxt") == undefined ||
                  $(n).attr("data-activetxt") == "")
              )
                return !1;
              t = t.replaceAll("{type}", $(n).attr("data-type"));
              t = t.replace(
                "{text}",
                $(n).attr("data-activetxt").replace(",...", ""),
              );
              $(".list-filter-active .props-slider").append(t);
            }
          });
  }
}

function removeFilterActive(n) {
  var t = parseInt($(n).data("type"));
  if (t > 0) $(n).remove();
  else return;
  switch (t) {
    case 1:
      $(".show-total-item .manu a[data-id=" + $(n).data("id") + "]").hasClass(
        "check",
      ) &&
        $(".show-total-item .manu a[data-id=" + $(n).data("id") + "]").trigger(
          "click",
        );
      break;
    case 2:
      $(".show-total-item .price a[data-id=" + $(n).data("id") + "]").hasClass(
        "check",
      ) &&
        $(".show-total-item .price a[data-id=" + $(n).data("id") + "]").trigger(
          "click",
        );
      break;
    case 3:
      $(".show-total-item .props a[data-id=" + $(n).data("id") + "]").hasClass(
        "check",
      ) &&
        $(".show-total-item .props a[data-id=" + $(n).data("id") + "]").trigger(
          "click",
        );
      break;
    case 4:
      $(".show-total-item .colors a[data-id=" + $(n).data("id") + "]").hasClass(
        "check",
      ) &&
        $(
          ".show-total-item .colors a[data-id=" + $(n).data("id") + "]",
        ).trigger("click");
  }
}

function removeAllFilterActive() {
  $(".show-total-main .btn-filter-close").trigger("click");
}

function hideShowClrFilter() {
  $(".list-filter-active a").not(".clr-filter").length >= 2
    ? $(".list-filter-active a.clr-filter").show()
    : $(".list-filter-active a.clr-filter").hide();
}

function hideShowListActiveFilter() {
  $(".list-filter-active a").not(".clr-filter").length >= 1
    ? $(".list-filter-active").show()
    : $(".list-filter-active").hide();
}

function resetPriceRangeOnLstFilterActive() {
  resetPriceRange();
  callFilterRangeSlider(!0);
}

function resetPropRangeLstFilterActive(n) {
  $(".prop-minmax." + n)
    .find("input")
    .each(function () {
      getOrRemoveRangeParamByName($(this), !0);
    });
  totalFilterPros();
  $(".prop-minmax." + n)
    .find("input")
    .val("");
}

function LoadProductPromote() {
  var n = !1;
  $(window).scroll(function () {
    if (!n && $(".banner__promote").length > 0 && $(this).scrollTop() > 1e3)
      if (((n = !0), !1))
        $(".banner__promote").each(function (n, t) {
          var i = $(t).find("ul"),
            r = i.data("placeid"),
            u = i.data("bannerid");
          $.ajax({
            url: "/Category/GetProductListByHtmlOrBanner",
            data: {
              htmlId: 0,
              placeId: parseInt(r),
              bannerId: parseInt(u),
              pageSize: 0,
              pageIndex: 0,
            },
            cache: !0,
            type: "POST",
            async: !0,
            beforeSend: function () {},
            success: function (n) {
              if (n != "" || n.trim() != "") {
                i.html(n);
                i.addClass("listproduct listproduct-col4");
                var t = i.find("li").length > 8 ? 4 : 1;
                i.owlCarousel({
                  nav: !0,
                  items: 4,
                  slideBy: t,
                  loop: !1,
                  rewind: !0,
                  dots: !0,
                  lazyLoad: !0,
                });
              }
            },
            error: function () {},
          });
        });
      else {
        var t = [];
        $(".banner__promote").each(function (n, i) {
          var r = $(i).find("ul"),
            u = { placeId: r.data("placeid"), bannerId: r.data("bannerid") };
          t.push(u);
        });
        $.ajax({
          url: "/Category/GetProductListByBanner",
          data: { banners: t },
          cache: !0,
          type: "POST",
          async: !0,
          beforeSend: function () {},
          success: function (n) {
            (n != "" || n.trim() != "") &&
              $(".banner__promote").each(function (t, i) {
                var r = $(i).find("ul"),
                  u;
                r.html(n[t]);
                r.addClass("listproduct listproduct-col4");
                u = r.find("li").length > 8 ? 4 : 1;
                r.owlCarousel({
                  nav: !0,
                  items: 4,
                  slideBy: u,
                  loop: !1,
                  rewind: !0,
                  dots: !0,
                  lazyLoad: !0,
                });
              });
          },
          error: function () {},
        });
      }
  });
}

function AddListProductImpressions() {
  var f = $(".listproduct .item a.main-contain"),
    r = 0,
    t = {},
    e = [],
    u,
    i,
    n;
  if (f.length > 0)
    for (u = 0; u < f.length; u++)
      r++,
        (i = f[u]),
        (t.name = i.dataset.name),
        (t.id = i.dataset.id),
        (t.price = i.dataset.price),
        (t.brand = i.dataset.brand),
        (t.category = i.dataset.cate),
        (t.list = "List product in cate page"),
        (n =
          i.parentNode.parentNode.parentNode.parentNode.parentNode.dataset
            .block),
        n !== undefined && n != null && n != ""
          ? (t.list = n)
          : ((n = i.parentNode.parentNode.dataset.block),
            n !== undefined && n != null && n != ""
              ? (t.list = n)
              : ((n = $(".ht-sale__tab li.active").text()),
                n !== undefined && n != null && n != "" && (t.list = n))),
        (t.position = r),
        e.push(t),
        (t = {}),
        ((u + 1 == f.length && r < 5) || r == 5) &&
          (gtm_ListProductImpressions(e), (r = 0), (e = []));
}

function AddListProductImpressionsForIndexOtherTempPage(n) {
  var u, i, f;
  if (n !== undefined && n != null && n.length > 0) {
    var r = 0,
      t = {},
      e = [];
    for (u = 0; u < n.length; u++)
      r++,
        (i = n[u]),
        (t.name = i.dataset.name),
        (t.id = i.dataset.id),
        (t.price = i.dataset.price),
        (t.brand = i.dataset.brand),
        (t.category = i.dataset.cate),
        (t.list = "List product in cate page"),
        (f =
          i.parentNode.parentNode.parentNode.parentNode.parentNode.dataset
            .block),
        f !== undefined && f != null && f != "" && (t.list = f),
        (t.position = r),
        e.push(t),
        (t = {}),
        ((u + 1 == n.length && r < 5) || r == 5) &&
          (gtm_ListProductImpressions(e), (r = 0), (e = []));
  }
}

function removeActiveChildFilter(n = false) {
  n !== undefined &&
    n == !0 &&
    $(".props.props-child a.check").length > 0 &&
    ($(".props.props-child a.check").each(function () {
      var n = this.dataset.id;
      propsParams.indexOf(n) >= 0 &&
        (propsParams.splice(propsParams.indexOf(n), 1),
        $(".props a[data-id=" + n + "]").removeClass("check"));
    }),
    $(".child-filter").addClass("hide"),
    $(".child-filter-outer .single-prop").length <= 0 &&
      $(".child-filter-outer").addClass("hide"));
}

function resetFilterCateAccessoryGenius() {
  $(".box-quicklink.accessories a").removeClass("check");
  $(".box-quicklink.accessories a:first").addClass("check");
  cidsParams = [];
}

function checkFilterApple() {
  var n = 0;
  return (
    manuParams !== undefined &&
      manuParams.length > 0 &&
      $(".filter-list.manu .filter-manu.check").each(function () {
        return (
          (manu_name = $(this).attr("data-name").toUpperCase()),
          manu_name !== undefined &&
          (manu_name.includes("APPLE") ||
            manu_name.includes("MACBOOK") ||
            manu_name.includes("IPAD") ||
            manu_name.includes("IPHONE"))
            ? (n = 1)
            : void 0
        );
      }),
    n
  );
}

function showVideoWater(n) {
  document.getElementById("youtube").src =
    "https://www.youtube.com/embed/" + n + "?showinfo=0&autoplay=1&mute=1";
  document.getElementById("video").style.display = "block";
}

function hideVideoWater() {
  document.getElementById("youtube").src = "https://www.youtube.com/embed/";
  document.getElementById("video").style.display = "none";
}

function showAllContentSEO() {
  $(".article .btn-viewshort").show();
  $(".article .btn-seemore").hide();
  $(".article .bg-article").hide();
  $(".article .article__content").removeClass("short");
  $(".article .article__content").removeClass("shortnew");
}

function viewShortContentSEO() {
  $(".article .btn-viewshort").hide();
  $(".article .btn-seemore").show();
  $(".article .bg-article").show();
  $(".article__content a:first").find("img").length > 0 &&
    $(".article .article__content").addClass("shortnew");
  $(".article .article__content").addClass("short");
}

function delFstIndexTitle(n, t) {
  var i = n.indexOf(t);
  return i == 0 ? n.substring(t.length) : n;
}

function createQuickMenu() {
  var t = $(".article__content").find("h3").not(".info h3"),
    f = $(".article__content").find("h4"),
    e = t.length - 1 + f.length,
    u;
  if (t.length && e > 1) {
    var i =
        '<div class="anchor-hd" id="QuickViewId"><p class="txt">Nội dung chính</p><div class="click-anchor crt" id="click-anchor"></div><div class="anchor-hd-list">',
      r = 0,
      n = 0;
    t.each(function (u) {
      var f, e, o, h, s;
      if (((r += 1), (n += 1), u == t.length)) return !1;
      $(this).attr("id", "hmenuid" + r);
      f = $(this).text().trim().replace(/^\d+/gm, "").trim();
      f = delFstIndexTitle(f, ".").trim();
      e = $(this).clone();
      e.find(".dropcap") != null &&
        e.find(".dropcap").length &&
        (e.find(".dropcap").remove(),
        (f = e.text().trim().replace(/^\d+/gm, "").trim()),
        (f = delFstIndexTitle(f, ".").trim()));
      i +=
        "<h3 class='" +
        (n > 10 ? "hideItemReadmore" : "") +
        "'><a href='#hmenuid" +
        n +
        "' data-id='hmenuid" +
        n +
        "' onclick='autoCloseMenu(this, event)'>" +
        (u + 1) +
        ". " +
        f +
        "</a></h3>";
      o = $(this).nextUntil("h3");
      o != null &&
        o.length > 0 &&
        ((h = !1),
        (s = ' <ul class="subtitle">'),
        o.each(function () {
          if ($(this).is("h4")) {
            h = !0;
            r += 1;
            n += 1;
            $(this).attr("id", "hmenuid" + r);
            var t = $(this)
              .text()
              .trim()
              .replace(/^\d+.?\d*/gm, "")
              .trim();
            t = delFstIndexTitle(t, ".").trim();
            s +=
              "<li class='" +
              (n > 10 ? "hideItemReadmore" : "") +
              "'><a href='#hmenuid" +
              n +
              "' data-id='hmenuid" +
              n +
              "' onclick='autoCloseMenu(this, event)'>" +
              t +
              "</a></li>";
          }
        }),
        (s += "</ul>"),
        h && (i += s));
    });
    $(".article__content h2").length
      ? ((u = $(".article__content h2").length),
        $(".article__content h2").each(function (n) {
          n == u - 1 && $(this).after(i);
        }))
      : $(".article__content").length && $(".article__content").prepend(i);
  }
}

function toogleMenuQuick() {
  $(".lstscroll").toggleClass("blockDislayChange");
  $("#arow").toggleClass("rotateUp");
}

function autoCloseMenu(n, t) {
  t.preventDefault();
  $(".lstscroll").removeClass("blockDislayChange");
  $("#arow").removeClass("rotateUp");
  let i = $(".box-filter .fixed").height(),
    r = "#" + $(n).data("id"),
    u = $(r).offset().top;
  i = i + 20;
  $(".article .btn-viewshort").show();
  $(".article .btn-seemore").hide();
  $(".article .bg-article").hide();
  $(".article .article__content").removeClass("short");
  window.scrollTo(0, u - i);
}

function BuildActiveFilter(n = false) {
  var t = $(".sort.accessories a.check[data-id=9]");
  if (n) $(".sort.accessories a").parent().removeClass("hide");
  else {
    if (ordersParams != 9) return;
    t.removeClass("check");
    t.parent().addClass("hide");
    $($(".sort.accessories p:not(.hide)")[0]).find("a").addClass("check");
    ordersParams = parseInt($(".sort a.check").data("id"));
    $(".sort-show").html($(".sort a.check").text());
  }
}

function showSurvey() {
  $(".survey-wrap-cate").length > 0 && $(".survey-wrap-cate").addClass("show");
}

var flagOpenPopup,
  xhrCompare,
  xhrFilter,
  xhr,
  previousRequest,
  createCookie,
  xhrDelivery,
  xhrPKGenuine,
  linkHashPKGenuine,
  rangePriceSlider,
  rangePriceSliderTotal,
  manu_name;
!(function (n, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (n.numeral = t());
})(this, function () {
  function e(n, t) {
    this._input = n;
    this._value = t;
  }

  var n,
    i,
    r = {},
    f = {},
    u = {
      currentLocale: "en",
      zeroFormat: null,
      nullFormat: null,
      defaultFormat: "0,0",
      scalePercentBy100: !0,
    },
    t = {
      currentLocale: u.currentLocale,
      zeroFormat: u.zeroFormat,
      nullFormat: u.nullFormat,
      defaultFormat: u.defaultFormat,
      scalePercentBy100: u.scalePercentBy100,
    };
  return (
    (n = function (u) {
      var f, o, s, h;
      if (n.isNumeral(u)) f = u.value();
      else if (0 === u || "undefined" == typeof u) f = 0;
      else if (null === u || i.isNaN(u)) f = null;
      else if ("string" == typeof u)
        if (t.zeroFormat && u === t.zeroFormat) f = 0;
        else if (
          (t.nullFormat && u === t.nullFormat) ||
          !u.replace(/[^0-9]+/g, "").length
        )
          f = null;
        else {
          for (o in r)
            if (
              ((h =
                "function" == typeof r[o].regexps.unformat
                  ? r[o].regexps.unformat()
                  : r[o].regexps.unformat),
              h && u.match(h))
            ) {
              s = r[o].unformat;
              break;
            }
          s = s || n._.stringToNumber;
          f = s(u);
        }
      else f = Number(u) || null;
      return new e(u, f);
    }),
    (n.version = "2.0.6"),
    (n.isNumeral = function (n) {
      return n instanceof e;
    }),
    (n._ = i =
      {
        numberToFormat: function (t, i, r) {
          var o,
            a,
            u,
            h,
            p,
            nt,
            c,
            s = f[n.options.currentLocale],
            y = !1,
            tt = !1,
            w = 0,
            e = "",
            b = 1e12,
            k = 1e9,
            d = 1e6,
            it = 1e3,
            l = "",
            v = !1,
            g;
          if (
            ((t = t || 0),
            (a = Math.abs(t)),
            n._.includes(i, "(")
              ? ((y = !0), (i = i.replace(/[\(|\)]/g, "")))
              : (n._.includes(i, "+") || n._.includes(i, "-")) &&
                ((p = n._.includes(i, "+")
                  ? i.indexOf("+")
                  : 0 > t
                  ? i.indexOf("-")
                  : -1),
                (i = i.replace(/[\+|\-]/g, ""))),
            n._.includes(i, "a") &&
              ((o = i.match(/a(k|m|b|t)?/)),
              (o = o ? o[1] : !1),
              n._.includes(i, " a") && (e = " "),
              (i = i.replace(new RegExp(e + "a[kmbt]?"), "")),
              (a >= b && !o) || "t" === o
                ? ((e += s.abbreviations.trillion), (t /= b))
                : (b > a && a >= k && !o) || "b" === o
                ? ((e += s.abbreviations.billion), (t /= k))
                : (k > a && a >= d && !o) || "m" === o
                ? ((e += s.abbreviations.million), (t /= d))
                : ((d > a && a >= it && !o) || "k" === o) &&
                  ((e += s.abbreviations.thousand), (t /= it))),
            n._.includes(i, "[.]") && ((tt = !0), (i = i.replace("[.]", "."))),
            (u = t.toString().split(".")[0]),
            (h = i.split(".")[1]),
            (nt = i.indexOf(",")),
            (w = (i.split(".")[0].split(",")[0].match(/0/g) || []).length),
            h
              ? (n._.includes(h, "[")
                  ? ((h = h.replace("]", "")),
                    (h = h.split("[")),
                    (l = n._.toFixed(
                      t,
                      h[0].length + h[1].length,
                      r,
                      h[1].length,
                    )))
                  : (l = n._.toFixed(t, h.length, r)),
                (u = l.split(".")[0]),
                (l = n._.includes(l, ".")
                  ? s.delimiters.decimal + l.split(".")[1]
                  : ""),
                tt && 0 === Number(l.slice(1)) && (l = ""))
              : (u = n._.toFixed(t, 0, r)),
            e && !o && Number(u) >= 1e3 && e !== s.abbreviations.trillion)
          )
            switch (((u = String(Number(u) / 1e3)), e)) {
              case s.abbreviations.thousand:
                e = s.abbreviations.million;
                break;
              case s.abbreviations.million:
                e = s.abbreviations.billion;
                break;
              case s.abbreviations.billion:
                e = s.abbreviations.trillion;
            }
          if (
            (n._.includes(u, "-") && ((u = u.slice(1)), (v = !0)), u.length < w)
          )
            for (g = w - u.length; g > 0; g--) u = "0" + u;
          return (
            nt > -1 &&
              (u = u
                .toString()
                .replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  "$1" + s.delimiters.thousands,
                )),
            0 === i.indexOf(".") && (u = ""),
            (c = u + l + (e ? e : "")),
            y
              ? (c = (y && v ? "(" : "") + c + (y && v ? ")" : ""))
              : p >= 0
              ? (c = 0 === p ? (v ? "-" : "+") + c : c + (v ? "-" : "+"))
              : v && (c = "-" + c),
            c
          );
        },
        stringToNumber: function (n) {
          var u,
            i,
            e,
            r = f[t.currentLocale],
            s = n,
            o = { thousand: 3, million: 6, billion: 9, trillion: 12 };
          if (t.zeroFormat && n === t.zeroFormat) i = 0;
          else if (
            (t.nullFormat && n === t.nullFormat) ||
            !n.replace(/[^0-9]+/g, "").length
          )
            i = null;
          else {
            i = 1;
            "." !== r.delimiters.decimal &&
              (n = n.replace(/\./g, "").replace(r.delimiters.decimal, "."));
            for (u in o)
              if (
                ((e = new RegExp(
                  "[^a-zA-Z]" +
                    r.abbreviations[u] +
                    "(?:\\)|(\\" +
                    r.currency.symbol +
                    ")?(?:\\))?)?$",
                )),
                s.match(e))
              ) {
                i *= Math.pow(10, o[u]);
                break;
              }
            i *=
              (n.split("-").length +
                Math.min(n.split("(").length - 1, n.split(")").length - 1)) %
              2
                ? 1
                : -1;
            n = n.replace(/[^0-9\.]+/g, "");
            i *= Number(n);
          }
          return i;
        },
        isNaN: function (n) {
          return "number" == typeof n && isNaN(n);
        },
        includes: function (n, t) {
          return -1 !== n.indexOf(t);
        },
        insert: function (n, t, i) {
          return n.slice(0, i) + t + n.slice(i);
        },
        reduce: function (n, t) {
          if (null === this)
            throw new TypeError(
              "Array.prototype.reduce called on null or undefined",
            );
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          var u,
            r = Object(n),
            f = r.length >>> 0,
            i = 0;
          if (3 === arguments.length) u = arguments[2];
          else {
            for (; f > i && !(i in r); ) i++;
            if (i >= f)
              throw new TypeError(
                "Reduce of empty array with no initial value",
              );
            u = r[i++];
          }
          for (; f > i; i++) i in r && (u = t(u, r[i], i, r));
          return u;
        },
        multiplier: function (n) {
          var t = n.toString().split(".");
          return t.length < 2 ? 1 : Math.pow(10, t[1].length);
        },
        correctionFactor: function () {
          var n = Array.prototype.slice.call(arguments);
          return n.reduce(function (n, t) {
            var r = i.multiplier(t);
            return n > r ? n : r;
          }, 1);
        },
        toFixed: function (n, t, i, r) {
          var u,
            e,
            o,
            f,
            s = n.toString().split("."),
            h = t - (r || 0);
          return (
            (u = 2 === s.length ? Math.min(Math.max(s[1].length, h), t) : h),
            (o = Math.pow(10, u)),
            (f = (i(n + "e+" + u) / o).toFixed(u)),
            r > t - u &&
              ((e = new RegExp("\\.?0{1," + (r - (t - u)) + "}$")),
              (f = f.replace(e, ""))),
            f
          );
        },
      }),
    (n.options = t),
    (n.formats = r),
    (n.locales = f),
    (n.locale = function (n) {
      return n && (t.currentLocale = n.toLowerCase()), t.currentLocale;
    }),
    (n.localeData = function (n) {
      if (!n) return f[t.currentLocale];
      if (((n = n.toLowerCase()), !f[n]))
        throw new Error("Unknown locale : " + n);
      return f[n];
    }),
    (n.reset = function () {
      for (var n in u) t[n] = u[n];
    }),
    (n.zeroFormat = function (n) {
      t.zeroFormat = "string" == typeof n ? n : null;
    }),
    (n.nullFormat = function (n) {
      t.nullFormat = "string" == typeof n ? n : null;
    }),
    (n.defaultFormat = function (n) {
      t.defaultFormat = "string" == typeof n ? n : "0.0";
    }),
    (n.register = function (n, t, i) {
      if (((t = t.toLowerCase()), this[n + "s"][t]))
        throw new TypeError(t + " " + n + " already registered.");
      return (this[n + "s"][t] = i), i;
    }),
    (n.validate = function (t, i) {
      var s, h, c, r, e, o, f, u;
      if (
        ("string" != typeof t &&
          ((t += ""),
          console.warn &&
            console.warn(
              "Numeral.js: Value is not string. It has been co-erced to: ",
              t,
            )),
        (t = t.trim()),
        t.match(/^\d+$/))
      )
        return !0;
      if ("" === t) return !1;
      try {
        f = n.localeData(i);
      } catch (l) {
        f = n.localeData(n.locale());
      }
      return (
        (c = f.currency.symbol),
        (e = f.abbreviations),
        (s = f.delimiters.decimal),
        (h = "." === f.delimiters.thousands ? "\\." : f.delimiters.thousands),
        (u = t.match(/^[^\d]+/)),
        null !== u && ((t = t.substr(1)), u[0] !== c)
          ? !1
          : ((u = t.match(/[^\d]+$/)),
            null !== u &&
            ((t = t.slice(0, -1)),
            u[0] !== e.thousand &&
              u[0] !== e.million &&
              u[0] !== e.billion &&
              u[0] !== e.trillion)
              ? !1
              : ((o = new RegExp(h + "{2}")),
                t.match(/[^\d.,]/g)
                  ? !1
                  : ((r = t.split(s)),
                    r.length > 2
                      ? !1
                      : r.length < 2
                      ? !!r[0].match(/^\d+.*\d$/) && !r[0].match(o)
                      : 1 === r[0].length
                      ? !!r[0].match(/^\d+$/) &&
                        !r[0].match(o) &&
                        !!r[1].match(/^\d+$/)
                      : !!r[0].match(/^\d+.*\d$/) &&
                        !r[0].match(o) &&
                        !!r[1].match(/^\d+$/))))
      );
    }),
    (n.fn = e.prototype =
      {
        clone: function () {
          return n(this);
        },
        format: function (i, u) {
          var o,
            f,
            e,
            s = this._value,
            h = i || t.defaultFormat;
          if (((u = u || Math.round), 0 === s && null !== t.zeroFormat))
            f = t.zeroFormat;
          else if (null === s && null !== t.nullFormat) f = t.nullFormat;
          else {
            for (o in r)
              if (h.match(r[o].regexps.format)) {
                e = r[o].format;
                break;
              }
            e = e || n._.numberToFormat;
            f = e(s, h, u);
          }
          return f;
        },
        value: function () {
          return this._value;
        },
        input: function () {
          return this._input;
        },
        set: function (n) {
          return (this._value = Number(n)), this;
        },
        add: function (n) {
          function r(n, i) {
            return n + Math.round(t * i);
          }

          var t = i.correctionFactor.call(null, this._value, n);
          return (this._value = i.reduce([this._value, n], r, 0) / t), this;
        },
        subtract: function (n) {
          function r(n, i) {
            return n - Math.round(t * i);
          }

          var t = i.correctionFactor.call(null, this._value, n);
          return (
            (this._value = i.reduce([n], r, Math.round(this._value * t)) / t),
            this
          );
        },
        multiply: function (n) {
          function t(n, t) {
            var r = i.correctionFactor(n, t);
            return (Math.round(n * r) * Math.round(t * r)) / Math.round(r * r);
          }

          return (this._value = i.reduce([this._value, n], t, 1)), this;
        },
        divide: function (n) {
          function t(n, t) {
            var r = i.correctionFactor(n, t);
            return Math.round(n * r) / Math.round(t * r);
          }

          return (this._value = i.reduce([this._value, n], t)), this;
        },
        difference: function (t) {
          return Math.abs(n(this._value).subtract(t).value());
        },
      }),
    n.register("locale", "en", {
      delimiters: { thousands: ",", decimal: "." },
      abbreviations: {
        thousand: "k",
        million: "m",
        billion: "b",
        trillion: "t",
      },
      ordinal: function (n) {
        var t = n % 10;
        return 1 == ~~((n % 100) / 10)
          ? "th"
          : 1 === t
          ? "st"
          : 2 === t
          ? "nd"
          : 3 === t
          ? "rd"
          : "th";
      },
      currency: { symbol: "$" },
    }),
    (function () {
      n.register("format", "bps", {
        regexps: { format: /(BPS)/, unformat: /(BPS)/ },
        format: function (t, i, r) {
          var u,
            f = n._.includes(i, " BPS") ? " " : "";
          return (
            (t = 1e4 * t),
            (i = i.replace(/\s?BPS/, "")),
            (u = n._.numberToFormat(t, i, r)),
            n._.includes(u, ")")
              ? ((u = u.split("")),
                u.splice(-1, 0, f + "BPS"),
                (u = u.join("")))
              : (u = u + f + "BPS"),
            u
          );
        },
        unformat: function (t) {
          return +(0.0001 * n._.stringToNumber(t)).toFixed(15);
        },
      });
    })(),
    (function () {
      var t = {
          base: 1e3,
          suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        },
        i = {
          base: 1024,
          suffixes: [
            "B",
            "KiB",
            "MiB",
            "GiB",
            "TiB",
            "PiB",
            "EiB",
            "ZiB",
            "YiB",
          ],
        },
        u = t.suffixes.concat(
          i.suffixes.filter(function (n) {
            return t.suffixes.indexOf(n) < 0;
          }),
        ),
        r = u.join("|");
      r = "(" + r.replace("B", "B(?!PS)") + ")";
      n.register("format", "bytes", {
        regexps: { format: /([0\s]i?b)/, unformat: new RegExp(r) },
        format: function (r, u, f) {
          var h,
            e,
            o,
            c,
            s = n._.includes(u, "ib") ? i : t,
            l = n._.includes(u, " b") || n._.includes(u, " ib") ? " " : "";
          for (u = u.replace(/\s?i?b/, ""), e = 0; e <= s.suffixes.length; e++)
            if (
              ((o = Math.pow(s.base, e)),
              (c = Math.pow(s.base, e + 1)),
              null === r || 0 === r || (r >= o && c > r))
            ) {
              l += s.suffixes[e];
              o > 0 && (r /= o);
              break;
            }
          return (h = n._.numberToFormat(r, u, f)), h + l;
        },
        unformat: function (r) {
          var u,
            f,
            e = n._.stringToNumber(r);
          if (e) {
            for (u = t.suffixes.length - 1; u >= 0; u--) {
              if (n._.includes(r, t.suffixes[u])) {
                f = Math.pow(t.base, u);
                break;
              }
              if (n._.includes(r, i.suffixes[u])) {
                f = Math.pow(i.base, u);
                break;
              }
            }
            e *= f || 1;
          }
          return e;
        },
      });
    })(),
    (function () {
      n.register("format", "currency", {
        regexps: { format: /(\$)/ },
        format: function (t, i, r) {
          var e,
            s,
            f,
            o = n.locales[n.options.currentLocale],
            u = {
              before: i.match(/^([\+|\-|\(|\s|\$]*)/)[0],
              after: i.match(/([\+|\-|\)|\s|\$]*)$/)[0],
            };
          for (
            i = i.replace(/\s?\$\s?/, ""),
              e = n._.numberToFormat(t, i, r),
              t >= 0
                ? ((u.before = u.before.replace(/[\-\(]/, "")),
                  (u.after = u.after.replace(/[\-\)]/, "")))
                : 0 > t &&
                  !n._.includes(u.before, "-") &&
                  !n._.includes(u.before, "(") &&
                  (u.before = "-" + u.before),
              f = 0;
            f < u.before.length;
            f++
          )
            switch ((s = u.before[f])) {
              case "$":
                e = n._.insert(e, o.currency.symbol, f);
                break;
              case " ":
                e = n._.insert(e, " ", f + o.currency.symbol.length - 1);
            }
          for (f = u.after.length - 1; f >= 0; f--)
            switch ((s = u.after[f])) {
              case "$":
                e =
                  f === u.after.length - 1
                    ? e + o.currency.symbol
                    : n._.insert(
                        e,
                        o.currency.symbol,
                        -(u.after.length - (1 + f)),
                      );
                break;
              case " ":
                e =
                  f === u.after.length - 1
                    ? e + " "
                    : n._.insert(
                        e,
                        " ",
                        -(
                          u.after.length -
                          (1 + f) +
                          o.currency.symbol.length -
                          1
                        ),
                      );
            }
          return e;
        },
      });
    })(),
    (function () {
      n.register("format", "exponential", {
        regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
        format: function (t, i, r) {
          var u,
            e =
              "number" != typeof t || n._.isNaN(t) ? "0e+0" : t.toExponential(),
            f = e.split("e");
          return (
            (i = i.replace(/e[\+|\-]{1}0/, "")),
            (u = n._.numberToFormat(Number(f[0]), i, r)),
            u + "e" + f[1]
          );
        },
        unformat: function (t) {
          function u(t, i) {
            var r = n._.correctionFactor(t, i);
            return (t * r * i * r) / (r * r);
          }

          var r = n._.includes(t, "e+") ? t.split("e+") : t.split("e-"),
            f = Number(r[0]),
            i = Number(r[1]);
          return (
            (i = n._.includes(t, "e-") ? (i *= -1) : i),
            n._.reduce([f, Math.pow(10, i)], u, 1)
          );
        },
      });
    })(),
    (function () {
      n.register("format", "ordinal", {
        regexps: { format: /(o)/ },
        format: function (t, i, r) {
          var u,
            e = n.locales[n.options.currentLocale],
            f = n._.includes(i, " o") ? " " : "";
          return (
            (i = i.replace(/\s?o/, "")),
            (f += e.ordinal(t)),
            (u = n._.numberToFormat(t, i, r)),
            u + f
          );
        },
      });
    })(),
    (function () {
      n.register("format", "percentage", {
        regexps: { format: /(%)/, unformat: /(%)/ },
        format: function (t, i, r) {
          var u,
            f = n._.includes(i, " %") ? " " : "";
          return (
            n.options.scalePercentBy100 && (t = 100 * t),
            (i = i.replace(/\s?\%/, "")),
            (u = n._.numberToFormat(t, i, r)),
            n._.includes(u, ")")
              ? ((u = u.split("")), u.splice(-1, 0, f + "%"), (u = u.join("")))
              : (u = u + f + "%"),
            u
          );
        },
        unformat: function (t) {
          var i = n._.stringToNumber(t);
          return n.options.scalePercentBy100 ? 0.01 * i : i;
        },
      });
    })(),
    (function () {
      n.register("format", "time", {
        regexps: { format: /(:)/, unformat: /(:)/ },
        format: function (n) {
          var i = Math.floor(n / 3600),
            t = Math.floor((n - 3600 * i) / 60),
            r = Math.round(n - 3600 * i - 60 * t);
          return (
            i + ":" + (10 > t ? "0" + t : t) + ":" + (10 > r ? "0" + r : r)
          );
        },
        unformat: function (n) {
          var t = n.split(":"),
            i = 0;
          return (
            3 === t.length
              ? ((i += 3600 * Number(t[0])),
                (i += 60 * Number(t[1])),
                (i += Number(t[2])))
              : 2 === t.length &&
                ((i += 60 * Number(t[0])), (i += Number(t[1]))),
            Number(i)
          );
        },
      });
    })(),
    n
  );
});
$(document).ready(function () {}),
  (function (n) {
    typeof define == "function" && define.amd
      ? define([], n)
      : typeof exports == "object"
      ? (module.exports = n())
      : (window.noUiSlider = n());
  })(function () {
    "use strict";

    function p(n) {
      return n.filter(function (n) {
        return this[n] ? !1 : (this[n] = !0);
      }, {});
    }

    function w(n, t) {
      return Math.round(n / t) * t;
    }

    function o(n) {
      var i = n.getBoundingClientRect(),
        u = n.ownerDocument,
        r = u.documentElement,
        t = a();
      return (
        /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0),
        { top: i.top + t.y - r.clientTop, left: i.left + t.x - r.clientLeft }
      );
    }

    function r(n) {
      return typeof n == "number" && !isNaN(n) && isFinite(n);
    }

    function b(n) {
      var t = Math.pow(10, 7);
      return Number((Math.round(n * t) / t).toFixed(7));
    }

    function l(t, i, r) {
      n(t, i);
      setTimeout(function () {
        f(t, i);
      }, r);
    }

    function s(n) {
      return Math.max(Math.min(n, 100), 0);
    }

    function u(n) {
      return Array.isArray(n) ? n : [n];
    }

    function k(n) {
      var t = n.split(".");
      return t.length > 1 ? t[1].length : 0;
    }

    function n(n, t) {
      n.classList ? n.classList.add(t) : (n.className += " " + t);
    }

    function f(n, t) {
      n.classList
        ? n.classList.remove(t)
        : (n.className = n.className.replace(
            new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
            " ",
          ));
    }

    function d(n, t) {
      return n.classList
        ? n.classList.contains(t)
        : new RegExp("\\b" + t + "\\b").test(n.className);
    }

    function a() {
      var n = window.pageXOffset !== undefined,
        t = (document.compatMode || "") === "CSS1Compat",
        i = n
          ? window.pageXOffset
          : t
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft,
        r = n
          ? window.pageYOffset
          : t
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      return { x: i, y: r };
    }

    function g(n) {
      n.stopPropagation();
    }

    function nt(n) {
      return function (t) {
        return n + t;
      };
    }

    function h(n, t) {
      return 100 / (t - n);
    }

    function c(n, t) {
      return (t * 100) / (n[1] - n[0]);
    }

    function it(n, t) {
      return c(n, n[0] < 0 ? t + Math.abs(n[0]) : t - n[0]);
    }

    function rt(n, t) {
      return (t * (n[1] - n[0])) / 100 + n[0];
    }

    function e(n, t) {
      for (var i = 1; n >= t[i]; ) i += 1;
      return i;
    }

    function ut(n, t, i) {
      if (i >= n.slice(-1)[0]) return 100;
      var r = e(i, n),
        f,
        o,
        u,
        s;
      return (
        (f = n[r - 1]),
        (o = n[r]),
        (u = t[r - 1]),
        (s = t[r]),
        u + it([f, o], i) / h(u, s)
      );
    }

    function ft(n, t, i) {
      if (i >= 100) return n.slice(-1)[0];
      var r = e(i, t),
        f,
        o,
        u,
        s;
      return (
        (f = n[r - 1]),
        (o = n[r]),
        (u = t[r - 1]),
        (s = t[r]),
        rt([f, o], (i - u) * h(u, s))
      );
    }

    function et(n, t, i, r) {
      if (r === 100) return r;
      var u = e(r, n),
        f,
        o;
      return i
        ? ((f = n[u - 1]), (o = n[u]), r - f > (o - f) / 2)
          ? o
          : f
        : t[u - 1]
        ? n[u - 1] + w(r - n[u - 1], t[u - 1])
        : r;
    }

    function ot(n, t, i) {
      var u;
      if (
        (typeof t == "number" && (t = [t]),
        Object.prototype.toString.call(t) !== "[object Array]")
      )
        throw new Error("noUiSlider: 'range' contains invalid value.");
      if (
        ((u = n === "min" ? 0 : n === "max" ? 100 : parseFloat(n)),
        !r(u) || !r(t[0]))
      )
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      i.xPct.push(u);
      i.xVal.push(t[0]);
      u
        ? i.xSteps.push(isNaN(t[1]) ? !1 : t[1])
        : isNaN(t[1]) || (i.xSteps[0] = t[1]);
    }

    function st(n, t, i) {
      if (!t) return !0;
      i.xSteps[n] =
        c([i.xVal[n], i.xVal[n + 1]], t) / h(i.xPct[n], i.xPct[n + 1]);
    }

    function i(n, t, i, r) {
      this.xPct = [];
      this.xVal = [];
      this.xSteps = [r || !1];
      this.xNumSteps = [!1];
      this.snap = t;
      this.direction = i;
      var u,
        f = [];
      for (u in n) n.hasOwnProperty(u) && f.push([n[u], u]);
      for (
        f.length && typeof f[0][0] == "object"
          ? f.sort(function (n, t) {
              return n[0][0] - t[0][0];
            })
          : f.sort(function (n, t) {
              return n[0] - t[0];
            }),
          u = 0;
        u < f.length;
        u++
      )
        ot(f[u][1], f[u][0], this);
      for (
        this.xNumSteps = this.xSteps.slice(0), u = 0;
        u < this.xNumSteps.length;
        u++
      )
        st(u, this.xNumSteps[u], this);
    }

    function ht(n, t) {
      if (!r(t)) throw new Error("noUiSlider: 'step' is not numeric.");
      n.singleStep = t;
    }

    function ct(n, t) {
      if (typeof t != "object" || Array.isArray(t))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (t.min === undefined || t.max === undefined)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      if (t.min === t.max)
        throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
      n.spectrum = new i(t, n.snap, n.dir, n.singleStep);
    }

    function lt(n, t) {
      if (((t = u(t)), !Array.isArray(t) || !t.length || t.length > 2))
        throw new Error("noUiSlider: 'start' option is incorrect.");
      n.handles = t.length;
      n.start = t;
    }

    function at(n, t) {
      if (((n.snap = t), typeof t != "boolean"))
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }

    function vt(n, t) {
      if (((n.animate = t), typeof t != "boolean"))
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }

    function yt(n, t) {
      if (t === "lower" && n.handles === 1) n.connect = 1;
      else if (t === "upper" && n.handles === 1) n.connect = 2;
      else if (t === !0 && n.handles === 2) n.connect = 3;
      else if (t === !1) n.connect = 0;
      else
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count.",
        );
    }

    function pt(n, t) {
      switch (t) {
        case "horizontal":
          n.ort = 0;
          break;
        case "vertical":
          n.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }

    function wt(n, t) {
      if (!r(t))
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      if (t !== 0 && ((n.margin = n.spectrum.getMargin(t)), !n.margin))
        throw new Error(
          "noUiSlider: 'margin' option is only supported on linear sliders.",
        );
    }

    function bt(n, t) {
      if (!r(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (((n.limit = n.spectrum.getMargin(t)), !n.limit))
        throw new Error(
          "noUiSlider: 'limit' option is only supported on linear sliders.",
        );
    }

    function kt(n, t) {
      switch (t) {
        case "ltr":
          n.dir = 0;
          break;
        case "rtl":
          n.dir = 1;
          n.connect = [0, 2, 1, 3][n.connect];
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }

    function dt(n, t) {
      if (typeof t != "string")
        throw new Error(
          "noUiSlider: 'behaviour' must be a string containing options.",
        );
      var u = t.indexOf("tap") >= 0,
        i = t.indexOf("drag") >= 0,
        f = t.indexOf("fixed") >= 0,
        r = t.indexOf("snap") >= 0,
        e = t.indexOf("hover") >= 0;
      if (i && !n.connect)
        throw new Error(
          "noUiSlider: 'drag' behaviour must be used with 'connect': true.",
        );
      n.events = { tap: u || r, drag: i, fixed: f, snap: r, hover: e };
    }

    function gt(n, t) {
      var i;
      if (t !== !1)
        if (t === !0)
          for (n.tooltips = [], i = 0; i < n.handles; i++) n.tooltips.push(!0);
        else {
          if (((n.tooltips = u(t)), n.tooltips.length !== n.handles))
            throw new Error(
              "noUiSlider: must pass a formatter for all handles.",
            );
          n.tooltips.forEach(function (n) {
            if (
              typeof n != "boolean" &&
              (typeof n != "object" || typeof n.to != "function")
            )
              throw new Error(
                "noUiSlider: 'tooltips' must be passed a formatter or 'false'.",
              );
          });
        }
    }

    function ni(n, t) {
      if (
        ((n.format = t),
        typeof t.to == "function" && typeof t.from == "function")
      )
        return !0;
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }

    function ti(n, t) {
      if (t !== undefined && typeof t != "string")
        throw new Error("noUiSlider: 'cssPrefix' must be a string.");
      n.cssPrefix = t;
    }

    function y(n) {
      var t = { margin: 0, limit: 0, animate: !0, format: v },
        i,
        r;
      return (
        (i = {
          step: { r: !1, t: ht },
          start: { r: !0, t: lt },
          connect: { r: !0, t: yt },
          direction: { r: !0, t: kt },
          snap: { r: !1, t: at },
          animate: { r: !1, t: vt },
          range: { r: !0, t: ct },
          orientation: { r: !1, t: pt },
          margin: { r: !1, t: wt },
          limit: { r: !1, t: bt },
          behaviour: { r: !0, t: dt },
          format: { r: !1, t: ni },
          tooltips: { r: !1, t: gt },
          cssPrefix: { r: !1, t: ti },
        }),
        (r = {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
        }),
        Object.keys(i).forEach(function (u) {
          if (n[u] === undefined && r[u] === undefined) {
            if (i[u].r) throw new Error("noUiSlider: '" + u + "' is required.");
            return !0;
          }
          i[u].t(t, n[u] === undefined ? r[u] : n[u]);
        }),
        (t.pips = n.pips),
        (t.style = t.ort ? "top" : "left"),
        t
      );
    }

    function ii(i, r) {
      function wt(n, t, i) {
        var r = n + t[0],
          u = n + t[1];
        return i
          ? (r < 0 && (u += Math.abs(r)),
            u > 100 && (r -= u - 100),
            [s(r), s(u)])
          : [r, u];
      }

      function bt(n, t) {
        n.cancelable && n.preventDefault();
        var o = n.type.indexOf("touch") === 0,
          e = n.type.indexOf("mouse") === 0,
          r = n.type.indexOf("pointer") === 0,
          u,
          f,
          i = n;
        return (
          n.type.indexOf("MSPointer") === 0 && (r = !0),
          o &&
            ((u = n.changedTouches[0].pageX), (f = n.changedTouches[0].pageY)),
          (t = t || a()),
          (e || r) && ((u = n.clientX + t.x), (f = n.clientY + t.y)),
          (i.pageOffset = t),
          (i.points = [u, f]),
          (i.cursor = e || r),
          i
        );
      }

      function kt(t, i) {
        var r = document.createElement("div"),
          u = document.createElement("div"),
          f = ["-lower", "-upper"];
        return (
          t && f.reverse(),
          n(u, h[3]),
          n(u, h[3] + f[i]),
          n(r, h[2]),
          r.appendChild(u),
          r
        );
      }

      function dt(t, i, r) {
        switch (t) {
          case 1:
            n(i, h[7]);
            n(r[0], h[6]);
            break;
          case 3:
            n(r[1], h[6]);
          case 2:
            n(r[0], h[7]);
          case 0:
            n(i, h[6]);
        }
      }

      function gt(n, t, i) {
        for (var u = [], r = 0; r < n; r += 1) u.push(i.appendChild(kt(t, r)));
        return u;
      }

      function ni(t, i, r) {
        n(r, h[0]);
        n(r, h[8 + t]);
        n(r, h[4 + i]);
        var u = document.createElement("div");
        return n(u, h[1]), r.appendChild(u), u;
      }

      function ti(n, t) {
        if (!r.tooltips[t]) return !1;
        var i = document.createElement("div");
        return (i.className = h[18]), n.firstChild.appendChild(i);
      }

      function ii() {
        r.dir && r.tooltips.reverse();
        var n = e.map(ti);
        r.dir && (n.reverse(), r.tooltips.reverse());
        pt("update", function (t, i, u) {
          n[i] &&
            (n[i].innerHTML =
              r.tooltips[i] === !0 ? t[i] : r.tooltips[i].to(u[i]));
        });
      }

      function ri(n, t, i) {
        if (n === "range" || n === "steps") return c.xVal;
        if (n === "count") {
          var u = 100 / (t - 1),
            r,
            f = 0;
          for (t = []; (r = f++ * u) <= 100; ) t.push(r);
          n = "positions";
        }
        return n === "positions"
          ? t.map(function (n) {
              return c.fromStepping(i ? c.getStep(n) : n);
            })
          : n === "values"
          ? i
            ? t.map(function (n) {
                return c.fromStepping(c.getStep(c.toStepping(n)));
              })
            : t
          : void 0;
      }

      function ui(n, t, i) {
        function h(n, t) {
          return (n + t).toFixed(7) / 1;
        }

        var l = c.direction,
          r = {},
          f = c.xVal[0],
          e = c.xVal[c.xVal.length - 1],
          o = !1,
          s = !1,
          u = 0;
        return (
          (c.direction = 0),
          (i = p(
            i.slice().sort(function (n, t) {
              return n - t;
            }),
          )),
          i[0] !== f && (i.unshift(f), (o = !0)),
          i[i.length - 1] !== e && (i.push(e), (s = !0)),
          i.forEach(function (f, e) {
            var a,
              l,
              v,
              w = f,
              y = i[e + 1],
              p,
              b,
              g,
              k,
              nt,
              d,
              tt;
            if (
              (t === "steps" && (a = c.xNumSteps[e]),
              a || (a = y - w),
              w !== !1 && y !== undefined)
            )
              for (l = w; l <= y; l = h(l, a)) {
                for (
                  p = c.toStepping(l),
                    b = p - u,
                    nt = b / n,
                    d = Math.round(nt),
                    tt = b / d,
                    v = 1;
                  v <= d;
                  v += 1
                )
                  (g = u + v * tt), (r[g.toFixed(5)] = ["x", 0]);
                k = i.indexOf(l) > -1 ? 1 : t === "steps" ? 2 : 0;
                !e && o && (k = 0);
                (l === y && s) || (r[p.toFixed(5)] = [l, k]);
                u = p;
              }
          }),
          (c.direction = l),
          r
        );
      }

      function fi(t, i, u) {
        function l(n) {
          return ["-normal", "-large", "-sub"][n];
        }

        function s(n, t, i) {
          return (
            'class="' +
            t +
            " " +
            t +
            "-" +
            o +
            " " +
            t +
            l(i[1]) +
            '" style="' +
            r.style +
            ": " +
            n +
            '%"'
          );
        }

        function a(n, t) {
          c.direction && (n = 100 - n);
          t[1] = t[1] && i ? i(t[0], t[1]) : t[1];
          e += "<div " + s(n, h[21], t) + "></div>";
          t[1] && (e += "<div " + s(n, h[22], t) + ">" + u.to(t[0]) + "</div>");
        }

        var o = ["horizontal", "vertical"][r.ort],
          f = document.createElement("div"),
          e = "";
        return (
          n(f, h[20]),
          n(f, h[20] + "-" + o),
          Object.keys(t).forEach(function (n) {
            a(n, t[n]);
          }),
          (f.innerHTML = e),
          f
        );
      }

      function vt(n) {
        var t = n.mode,
          i = n.density || 1,
          r = n.filter || !1,
          u = n.values || !1,
          f = n.stepped || !1,
          e = ri(t, u, f),
          o = ui(i, t, e),
          s = n.format || { to: Math.round };
        return v.appendChild(fi(o, r, s));
      }

      function st() {
        var n = it.getBoundingClientRect(),
          t = "offset" + ["Width", "Height"][r.ort];
        return r.ort === 0 ? n.width || it[t] : n.height || it[t];
      }

      function w(n, t, i) {
        t !== undefined && r.handles !== 1 && (t = Math.abs(t - r.dir));
        Object.keys(rt).forEach(function (r) {
          var f = r.split(".")[0];
          n === f &&
            rt[r].forEach(function (n) {
              n.call(
                et,
                u(at()),
                t,
                u(ht(Array.prototype.slice.call(ft))),
                i || !1,
                b,
              );
            });
        });
      }

      function ht(n) {
        return n.length === 1 ? n[0] : r.dir ? n.reverse() : n;
      }

      function ut(n, i, u, f) {
        var e = function (i) {
            if (
              v.hasAttribute("disabled") ||
              d(v, h[14]) ||
              ((i = bt(i, f.pageOffset)),
              n === t.start && i.buttons !== undefined && i.buttons > 1) ||
              (f.hover && i.buttons)
            )
              return !1;
            i.calcPoint = i.points[r.ort];
            u(i, f);
          },
          o = [];
        return (
          n.split(" ").forEach(function (n) {
            i.addEventListener(n, e, !1);
            o.push([n, e]);
          }),
          o
        );
      }

      function ei(n, t) {
        if (
          navigator.appVersion.indexOf("MSIE 9") === -1 &&
          n.buttons === 0 &&
          t.buttonsProperty !== 0
        )
          return ct(n, t);
        var i = t.handles || e,
          f,
          r = !1,
          s = ((n.calcPoint - t.start) * 100) / t.baseSize,
          o = i[0] === e[0] ? 0 : 1,
          u;
        if (
          ((f = wt(s, t.positions, i.length > 1)),
          (r = ot(i[0], f[o], i.length === 1)),
          i.length > 1)
        ) {
          if (((r = ot(i[1], f[o ? 0 : 1], !1) || r), r))
            for (u = 0; u < t.handles.length; u++) w("slide", u);
        } else r && w("slide", o);
      }

      function ct(n, t) {
        var r = it.querySelector("." + h[15]),
          u = t.handles[0] === e[0] ? 0 : 1,
          i;
        r !== null && f(r, h[15]);
        n.cursor &&
          ((document.body.style.cursor = ""),
          document.body.removeEventListener(
            "selectstart",
            document.body.noUiListener,
          ));
        i = document.documentElement;
        i.noUiListeners.forEach(function (n) {
          i.removeEventListener(n[0], n[1]);
        });
        f(v, h[12]);
        w("set", u);
        w("change", u);
        t.handleNumber !== undefined && w("end", t.handleNumber);
      }

      function oi(n, t) {
        n.type === "mouseout" &&
          n.target.nodeName === "HTML" &&
          n.relatedTarget === null &&
          ct(n, t);
      }

      function lt(i, r) {
        var u = document.documentElement,
          f;
        if (
          r.handles.length === 1 &&
          (n(r.handles[0].children[0], h[15]),
          r.handles[0].hasAttribute("disabled"))
        )
          return !1;
        i.cancelable && i.preventDefault();
        i.stopPropagation();
        var o = ut(t.move, u, ei, {
            start: i.calcPoint,
            baseSize: st(),
            pageOffset: i.pageOffset,
            handles: r.handles,
            handleNumber: r.handleNumber,
            buttonsProperty: i.buttons,
            positions: [b[0], b[e.length - 1]],
          }),
          s = ut(t.end, u, ct, {
            handles: r.handles,
            handleNumber: r.handleNumber,
          }),
          c = ut("mouseout", u, oi, {
            handles: r.handles,
            handleNumber: r.handleNumber,
          });
        u.noUiListeners = o.concat(s, c);
        i.cursor &&
          ((document.body.style.cursor = getComputedStyle(i.target).cursor),
          e.length > 1 && n(v, h[12]),
          (f = function () {
            return !1;
          }),
          (document.body.noUiListener = f),
          document.body.addEventListener("selectstart", f, !1));
        r.handleNumber !== undefined && w("start", r.handleNumber);
      }

      function si(n) {
        var i = n.calcPoint,
          u = 0,
          t,
          f;
        if (
          (n.stopPropagation(),
          e.forEach(function (n) {
            u += o(n)[r.style];
          }),
          (t = i < u / 2 || e.length === 1 ? 0 : 1),
          e[t].hasAttribute("disabled") && (t = t ? 0 : 1),
          (i -= o(it)[r.style]),
          (f = (i * 100) / st()),
          r.events.snap || l(v, h[14], 300),
          e[t].hasAttribute("disabled"))
        )
          return !1;
        ot(e[t], f);
        w("slide", t, !0);
        w("set", t, !0);
        w("change", t, !0);
        r.events.snap && lt(n, { handles: [e[t]] });
      }

      function hi(n) {
        var t = n.calcPoint - o(it)[r.style],
          i = c.getStep((t * 100) / st()),
          u = c.fromStepping(i);
        Object.keys(rt).forEach(function (n) {
          "hover" === n.split(".")[0] &&
            rt[n].forEach(function (n) {
              n.call(et, u);
            });
        });
      }

      function ci(i) {
        var r, u;
        if (!i.fixed)
          for (r = 0; r < e.length; r += 1)
            ut(t.start, e[r].children[0], lt, {
              handles: [e[r]],
              handleNumber: r,
            });
        if ((i.tap && ut(t.start, it, si, { handles: e }), i.hover))
          for (ut(t.move, it, hi, { hover: !0 }), r = 0; r < e.length; r += 1)
            ["mousemove MSPointerMove pointermove"].forEach(function (n) {
              e[r].children[0].addEventListener(n, g, !1);
            });
        i.drag &&
          ((u = [it.querySelector("." + h[7])]),
          n(u[0], h[10]),
          i.fixed && u.push(e[u[0] === e[0] ? 1 : 0].children[0]),
          u.forEach(function (n) {
            ut(t.start, n, lt, { handles: e });
          }));
      }

      function ot(t, i, u) {
        var o = t !== e[0] ? 1 : 0,
          l = b[0] + r.margin,
          a = b[1] - r.margin,
          v = b[0] + r.limit,
          y = b[1] - r.limit;
        return (e.length > 1 && (i = o ? Math.max(i, l) : Math.min(i, a)),
        u !== !1 &&
          r.limit &&
          e.length > 1 &&
          (i = o ? Math.min(i, v) : Math.max(i, y)),
        (i = c.getStep(i)),
        (i = s(parseFloat(i.toFixed(7)))),
        i === b[o])
          ? !1
          : (window.requestAnimationFrame
              ? window.requestAnimationFrame(function () {
                  t.style[r.style] = i + "%";
                })
              : (t.style[r.style] = i + "%"),
            t.previousSibling || (f(t, h[17]), i > 50 && n(t, h[17])),
            (b[o] = i),
            (ft[o] = c.fromStepping(i)),
            w("update", o),
            !0);
      }

      function li(n, t) {
        var u, f, i;
        for (r.limit && (n += 1), u = 0; u < n; u += 1)
          (f = u % 2),
            (i = t[f]),
            i !== null &&
              i !== !1 &&
              (typeof i == "number" && (i = String(i)),
              (i = r.format.from(i)),
              (i === !1 ||
                isNaN(i) ||
                ot(e[f], c.toStepping(i), u === 3 - r.dir) === !1) &&
                w("update", f));
      }

      function yt(n) {
        var f,
          i = u(n),
          t;
        for (
          r.dir && r.handles > 1 && i.reverse(),
            r.animate && b[0] !== -1 && l(v, h[14], 300),
            f = e.length > 1 ? 3 : 1,
            i.length === 1 && (f = 1),
            li(f, i),
            t = 0;
          t < e.length;
          t++
        )
          i[t] !== null && w("set", t);
      }

      function at() {
        for (var t = [], n = 0; n < r.handles; n += 1)
          t[n] = r.format.to(ft[n]);
        return ht(t);
      }

      function ai() {
        for (
          h.forEach(function (n) {
            n && f(v, n);
          });
          v.firstChild;

        )
          v.removeChild(v.firstChild);
        delete v.noUiSlider;
      }

      function vi() {
        var n = b.map(function (n, t) {
          var i = c.getApplicableStep(n),
            r = k(String(i[2])),
            u = ft[t],
            f = n === 100 ? null : i[2],
            e = Number((u - i[2]).toFixed(r)),
            o = n === 0 ? null : e >= i[1] ? i[2] : i[0] || !1;
          return [o, f];
        });
        return ht(n);
      }

      function pt(n, t) {
        rt[n] = rt[n] || [];
        rt[n].push(t);
        n.split(".")[0] === "update" &&
          e.forEach(function (n, t) {
            w("update", t);
          });
      }

      function yi(n) {
        var t = n.split(".")[0],
          i = n.substring(t.length);
        Object.keys(rt).forEach(function (n) {
          var r = n.split(".")[0],
            u = n.substring(r.length);
          (t && t !== r) || (i && i !== u) || delete rt[n];
        });
      }

      function pi(n) {
        var u = at(),
          t,
          i = y({
            start: [0, 0],
            margin: n.margin,
            limit: n.limit,
            step: n.step,
            range: n.range,
            animate: n.animate,
            snap: n.snap === undefined ? r.snap : n.snap,
          });
        for (
          ["margin", "limit", "step", "range", "animate"].forEach(function (t) {
            n[t] !== undefined && (r[t] = n[t]);
          }),
            i.spectrum.direction = c.direction,
            c = i.spectrum,
            b = [-1, -1],
            yt(u),
            t = 0;
          t < e.length;
          t++
        )
          w("update", t);
      }

      var v = i,
        b = [-1, -1],
        it,
        e,
        c = r.spectrum,
        ft = [],
        rt = {},
        et,
        h = [
          "target",
          "base",
          "origin",
          "handle",
          "horizontal",
          "vertical",
          "background",
          "connect",
          "ltr",
          "rtl",
          "draggable",
          "",
          "state-drag",
          "",
          "state-tap",
          "active",
          "",
          "stacking",
          "tooltip",
          "",
          "pips",
          "marker",
          "value",
        ].map(nt(r.cssPrefix || tt));
      if (v.noUiSlider) throw new Error("Slider was already initialized.");
      return (
        (it = ni(r.dir, r.ort, v)),
        (e = gt(r.handles, r.dir, it)),
        dt(r.connect, v, e),
        r.pips && vt(r.pips),
        r.tooltips && ii(),
        (et = {
          destroy: ai,
          steps: vi,
          on: pt,
          off: yi,
          get: at,
          set: yt,
          updateOptions: pi,
          options: r,
          target: v,
          pips: vt,
        }),
        ci(r.events),
        et
      );
    }

    function ri(n, t) {
      if (!n.nodeName)
        throw new Error("noUiSlider.create requires a single element.");
      var r = y(t, n),
        i = ii(n, r);
      return i.set(r.start), (n.noUiSlider = i), i;
    }

    var t = window.navigator.pointerEnabled
        ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
        : window.navigator.msPointerEnabled
        ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
        : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend",
          },
      tt = "noUi-",
      v;
    return (
      (i.prototype.getMargin = function (n) {
        return this.xPct.length === 2 ? c(this.xVal, n) : !1;
      }),
      (i.prototype.toStepping = function (n) {
        return (
          (n = ut(this.xVal, this.xPct, n)), this.direction && (n = 100 - n), n
        );
      }),
      (i.prototype.fromStepping = function (n) {
        return this.direction && (n = 100 - n), b(ft(this.xVal, this.xPct, n));
      }),
      (i.prototype.getStep = function (n) {
        return (
          this.direction && (n = 100 - n),
          (n = et(this.xPct, this.xSteps, this.snap, n)),
          this.direction && (n = 100 - n),
          n
        );
      }),
      (i.prototype.getApplicableStep = function (n) {
        var t = e(n, this.xPct),
          i = n === 100 ? 2 : 1;
        return [this.xNumSteps[t - 2], this.xVal[t - i], this.xNumSteps[t - i]];
      }),
      (i.prototype.convert = function (n) {
        return this.getStep(this.toStepping(n));
      }),
      (v = {
        to: function (n) {
          return n !== undefined && n.toFixed(2);
        },
        from: Number,
      }),
      { create: ri }
    );
  }),
  (function () {
    "use strict";

    function t(n) {
      return n.split("").reverse().join("");
    }

    function i(n, t) {
      return n.substring(0, t.length) === t;
    }

    function o(n, t) {
      return n.slice(-1 * t.length) === t;
    }

    function r(n, t, i) {
      if ((n[t] || n[i]) && n[t] === n[i]) throw new Error(t);
    }

    function f(n) {
      return typeof n == "number" && isFinite(n);
    }

    function s(n, t) {
      var i = Math.pow(10, t);
      return (Math.round(n * i) / i).toFixed(t);
    }

    function h(n, i, r, u, e, o, h, c, l, a, v, y) {
      var g = y,
        b,
        k,
        w,
        d = "",
        p = "";
      return (o && (y = o(y)), !f(y))
        ? !1
        : (n !== !1 && parseFloat(y.toFixed(n)) === 0 && (y = 0),
          y < 0 && ((b = !0), (y = Math.abs(y))),
          n !== !1 && (y = s(y, n)),
          (y = y.toString()),
          y.indexOf(".") !== -1
            ? ((k = y.split(".")), (w = k[0]), r && (d = r + k[1]))
            : (w = y),
          i && ((w = t(w).match(/.{1,3}/g)), (w = t(w.join(t(i))))),
          b && c && (p += c),
          u && (p += u),
          b && l && (p += l),
          (p += w),
          (p += d),
          e && (p += e),
          a && (p = a(p, g)),
          p);
    }

    function c(n, t, r, u, e, s, h, c, l, a, v, y) {
      var b = y,
        w,
        p = "";
      return (v && (y = v(y)), !y || typeof y != "string")
        ? !1
        : (c && i(y, c) && ((y = y.replace(c, "")), (w = !0)),
          u && i(y, u) && (y = y.replace(u, "")),
          l && i(y, l) && ((y = y.replace(l, "")), (w = !0)),
          e && o(y, e) && (y = y.slice(0, -1 * e.length)),
          t && (y = y.split(t).join("")),
          r && (y = y.replace(r, ".")),
          w && (p += "-"),
          (p += y),
          (p = p.replace(/[^0-9\.\-.]/g, "")),
          p === "")
        ? !1
        : ((p = Number(p)), h && (p = h(p)), !f(p))
        ? !1
        : p;
    }

    function l(t) {
      for (var i, f, u = {}, e = 0; e < n.length; e += 1)
        if (((i = n[e]), (f = t[i]), f === undefined))
          u[i] =
            i !== "negative" || u.negativeBefore
              ? i === "mark" && u.thousand !== "."
                ? "."
                : !1
              : "-";
        else if (i === "decimals")
          if (f >= 0 && f < 8) u[i] = f;
          else throw new Error(i);
        else if (
          i === "encoder" ||
          i === "decoder" ||
          i === "edit" ||
          i === "undo"
        )
          if (typeof f == "function") u[i] = f;
          else throw new Error(i);
        else if (typeof f == "string") u[i] = f;
        else throw new Error(i);
      return (
        r(u, "mark", "thousand"),
        r(u, "prefix", "negative"),
        r(u, "prefix", "negativeBefore"),
        u
      );
    }

    function e(t, i, r) {
      for (var f = [], u = 0; u < n.length; u += 1) f.push(t[n[u]]);
      return f.push(r), i.apply("", f);
    }

    function u(n) {
      if (!(this instanceof u)) return new u(n);
      typeof n == "object" &&
        ((n = l(n)),
        (this.to = function (t) {
          return e(n, h, t);
        }),
        (this.from = function (t) {
          return e(n, c, t);
        }));
    }

    var n = [
      "decimals",
      "thousand",
      "mark",
      "prefix",
      "postfix",
      "encoder",
      "decoder",
      "negativeBefore",
      "negative",
      "edit",
      "undo",
    ];
    window.wNumb = u;
  })();
var idcompare = [],
  urlcompare = [],
  isInitSuggest = !1,
  isFirstSS = !0;
$(document).ready(function () {
  $(document).on("click", "#kcc", function () {
    isInitSuggest || initSuggest();
  });
  $(document).on("click", ".close-comppare", function () {
    clearCompare();
  });
  if (document.isDesktop == !0)
    $(document).on("click", ".overlay.v2", function () {
      clearCompare();
    });
  $(document).on("click", ".input-text i.iconcate-closess", function () {
    $("#kcc").val("");
    $(".autocomplete").hide();
    $(".input-text i.iconcate-closess").hide();
  });
  $(document).on("click", ".listcompare .cp-plus.cp-plus_new", function () {});
});
let getHeight = 0;
globalEvent.on("autocomplete", initSuggest);
flagOpenPopup = !1;
var linkRedirectHash = "",
  linkRedirectHashTotal = "",
  linkHashRangeSlider = "",
  manuParams = [],
  propsParams = [],
  extParams = [],
  rangeParams = [],
  cidsParams = [],
  clsParams = [],
  ordersParams = -1,
  additionFilterParam = 0,
  itemBlockFilter = 0,
  isLoadAjax = !1,
  isIgnorePageIndex = !1,
  isInitSuggestAccess = !1,
  totalAjax = 0,
  pIdxActive = 0,
  pIinFor = 0,
  isPageIndexLoading = !1,
  manuPKGenius = "",
  isClickFilterManuGenius = !1,
  rootUrlDMX = "https://newstaging.dienmayxanh.com",
  keyNameSession = "closed-banner" + document.cateID + document.isWatch,
  varFilterObj = {
    e: null,
    isMore: !1,
    isCallTotal: !1,
    isViewNow: !1,
    pIndexGoto: -1,
  },
  productFilterObj = { total: -1, listproducts: null, textResponseApi: "" },
  priceRangeParams = "",
  RangeObj = {
    WidthRangeParams: "",
    HeightRangeParams: "",
    CapacityRangeParams: "",
    DeepRangeParams: "",
  },
  timer = null;
$(document).ready(function () {
  var n, t, i, r;
  $("#progressTop").remove();
  $(".overlay").hide();
  $(".slider-bannertop").owlCarousel({
    items: 1,
    loop: !1,
    rewind: !0,
    dots: !0,
    autoplay: !1,
    lazyLoad: !0,
    nav: !0,
    autoplayTimeout: 2e3,
    autoplayHoverPause: !0,
  });
  InitProductOwlCarousel($(".pk-sale.isCarousel .listproduct "));
  $("#homeWatchPage").length > 0 &&
    (InitProductOwlCarousel($(".owl-carousel.listproduct")),
    $(".owl-carousel.slide-collection").owlCarousel({
      nav: !0,
      items: 4,
      loop: !1,
      rewind: !0,
      dots: !1,
      lazyLoad: !0,
    }));
  $(".slider-listcat").owlCarousel({
    nav: !0,
    items: 10,
    loop: !1,
    rewind: !0,
    dots: !0,
    lazyLoad: !0,
  });
  $(".hot-product .listproduct.owl-carousel").owlCarousel({
    nav: !0,
    items: 5,
    slideBy: "page",
    rewind: !0,
    dots: !1,
    smartSpeed: 100,
  });
  $(".click-sort").click(function () {
    $(".sort-select-main").fadeToggle(300);
  });
  $(document).on("click", ".bg-black", function (n) {
    n.target == this && closePopup();
  });
  $(document).on("click", ".close-popup-total", function () {
    closePopup();
    $(".filter-button--total").is(":visible") === !0 &&
      $(".show-total .btn-filter-readmore").trigger("click");
  });
  $(".warpper-banner").height() > 0
    ? $(".closed-banner").show()
    : $(".closed-banner").hide();
  sessionStorage.getItem(keyNameSession) == 1
    ? $(".warpper-banner").hide()
    : $(".warpper-banner").show();
  $(document).on("click", ".jsTitle", function (n) {
    n.preventDefault();
    var i = $(this);
    let t = !1;
    if (
      ($("html, body").animate(
        { scrollTop: $(".box-filter").offset().top - 10 },
        500,
        function () {
          t && (i.click(), (t = !1));
        },
      ),
      $(".jsfix.fixed").length > 0)
    ) {
      t = !0;
      return;
    }
    $(".filter-item").removeClass("isShowing");
    $("body").hasClass("bg-black")
      ? ($(this).hasClass("showing")
          ? ($("body").removeClass("bg-black"),
            $(".jsTitle").removeClass("showing"),
            activeOrUnActiveBlock(),
            $(".filter-show").fadeOut(300),
            $(".bg-black .bsc-block").removeClass("fix-padding"))
          : ($(".jsTitle.showing").removeClass("showing"),
            $(".filter-show").fadeOut(),
            activeOrUnActiveBlock(),
            $(this).next(".filter-show").fadeIn(300),
            $(this).addClass("active").addClass("showing"),
            $(this).parents(".filter-item").addClass("isShowing")),
        getTextActiveSliderRange())
      : ($(this).addClass("active"),
        $(this).addClass("showing"),
        $(this).parents(".filter-item").addClass("isShowing"),
        $("body").addClass("bg-black"),
        $(this).parent().hasClass("filter-total")
          ? $("body.bg-black").addClass("overlay-filter")
          : $("body.bg-black").removeClass("overlay-filter"),
        $(this)
          .next(".filter-show")
          .fadeIn(300, function () {
            $(".filter-item .filter-list--hang").hasScrollBarDoc() &&
              $(".block-manu .filter-show").addClass("has-scroll");
          }),
        $(".sort-select-main").fadeOut(0),
        $(".info__content").hide(),
        $(".bsc-block .breadcrumb.hide").length > 0
          ? $(".bg-black .bsc-block").addClass("fix-padding")
          : $(".bg-black .bsc-block").removeClass("fix-padding"));
  });
  $(document).on("click", "a.item-ss", function () {
    var n = $(this).parents("li").data("id"),
      r,
      i,
      t,
      u;
    n > 0 == !1 && (n = $(this).closest(".item").data("id"));
    n > 0 &&
      ((r = !1),
      $(".stickcompare").length <= 0 &&
        ((i = getCookie("ck_idcompare")),
        i !== "" &&
          i !== null &&
          ((t = i.split(",")),
          t.indexOf(n.toString()) >= 0
            ? ((u = t.indexOf(n.toString())),
              t.splice(u, 1),
              (n = 0),
              $(this).removeClass("active").html("<i></i> So sánh"))
            : $(this).addClass("active").html("<i></i> Đã thêm so sánh"),
          t.length > 0 && ((r = !0), getCompareListByListID(t.toString(), n)))),
      r || addToCompare(n));
  });
  countCompare();
  $(document).on("click", ".btn-filter-close", function () {
    closePopup();
    unActiveFilter(this);
  });
  $(document).on("click", ".lst-quicklink a", function (n) {
    var t, i, r, u;
    n.preventDefault();
    t = $(this).attr("href");
    i = t.replace("/", "").split("#");
    i.length == 2
      ? ((r = location.pathname.replace("/", "")),
        (u = i[1]),
        i[0] == r ? callFilterFromHash(u) : (window.location = t))
      : (window.location = t);
  });
  $(".slider-bannertop.owl-carousel .owl-item a").click(function () {
    var t = $(this).attr("href").split("#"),
      n;
    if (
      t !== undefined &&
      t.length == 2 &&
      (t[0].replace("/", "") == document.cateUrl ||
        location.pathname.replace("/", "") == document.cateUrl) &&
      ((n = t[1]), n != "")
    ) {
      if (n.indexOf("&") < 0 && $("#" + n).length > 0) {
        $("body,html").animate({ scrollTop: $("#" + n).offset().top }, 300);
        return;
      }
      callFilterFromHash(n);
    }
  });
  $(".promote-banner a").click(function () {
    var n = $(this).attr("href").split("#"),
      t;
    n !== undefined &&
      n.length == 2 &&
      (n[0].replace("/", "") == document.cateUrl ||
        location.pathname.replace("/", "") == document.cateUrl) &&
      ((t = n[1]), t != "" && callFilterFromHash(t));
  });
  $(".btn-filter-readmore").click(function (n) {
    (n.preventDefault(),
    $(".sort-select-main").fadeOut(0),
    $(this).hasClass("prevent")) ||
      (closePopup(),
      (varFilterObj.isMore = !1),
      (varFilterObj.isCallTotal = !0),
      (varFilterObj.isViewNow = !0),
      filterPros(varFilterObj));
  });
  $(".filter-total").click(function () {
    $(".jsfix.fixed").length > 0 &&
      $("html, body").animate({ scrollTop: $(".box-filter").offset().top }, 0);
    $(".show-total").addClass("active");
    $(".menu").hide();
    $("#gb-top-page").hide();
    scrollByTag(".box-filter", !1, !0);
    $(".stickcompare").length > 0 && clearCompare();
    $(".price-slider .range-toggle span.down").length > 0 &&
      $(".bg-whitefix").remove();
  });
  $(".btn-closefilter").click(function () {
    $(".show-total").removeClass("active");
    $(".menu").show();
    $("#gb-top-page").show();
  });
  editPossionBoxDescription();
  $(document).on("click", ".info__title:not(.manu_title)", function () {
    $(this).toggleClass("active");
    $(this).toggleClass("remove-arrow");
    $(".info__content.manu_content").css("display") == "block" &&
      ($(".info__content.manu_content").hide(),
      $(".info__title.manu_title").removeClass("active"),
      $(".info__title.manu_title").removeClass("remove-arrow"));
    $(".info__content:not(.manu_content)").fadeToggle(200);
  });
  $(document).on(
    "click",
    ".info__content:not(.manu_content) button",
    function () {
      $(".info__content:not(.manu_content)").hide();
      $(".info__title:not(.manu_title)").removeClass("active");
      $(".info__title:not(.manu_title)").removeClass("remove-arrow");
    },
  );
  $(document).on("click", ".info__title.manu_title", function () {
    $(this).toggleClass("active");
    $(this).toggleClass("remove-arrow");
    $(".info__content:not(.manu_content)").css("display") == "block" &&
      ($(".info__content:not(.manu_content)").hide(),
      $(".info__title:not(.manu_title)").removeClass("active"),
      $(".info__title:not(.manu_title)").removeClass("remove-arrow"));
    $(".info__content.manu_content").fadeToggle(200);
  });
  $(document).on("click", ".info__content.manu_content button", function () {
    $(".info__content.manu_content").hide();
    $(".info__title.manu_title").removeClass("active");
    $(".info__title.manu_title").removeClass("remove-arrow");
  });
  $(".item-ss").click(function () {
    $(".content-ss").toggleClass("active");
  });
  $(".btn-ss--close").click(function () {
    $(".content-ss").removeClass("active");
  });
  itemBlockFilter = $(".jsfix").length > 0 ? $(".jsfix").offset().top + 30 : 0;
  $(window).scroll(function () {
    $(".jsfix").length > 0 &&
      $(".onlymanu").length <= 0 &&
      (itemBlockFilter <= 0 &&
        (itemBlockFilter =
          $(".jsfix").length > 0 ? $(".jsfix").offset().top + 30 : 0),
      $(this).scrollTop() > itemBlockFilter
        ? ($(".jsfix").addClass("fixed"),
          closePopup(),
          $(".fixed .box-filter").length > 0 &&
            (hasHorizontalScrollBar($(".fixed .box-filter")) == !1
              ? $(".fixed .scroll-btn").hide()
              : $(".fixed .scroll-btn").show()))
        : ($(".jsfix").removeClass("fixed"),
          $(".fixed .scroll-btn").hide(),
          fixShowFilterLeftRight()));
  });
  $(".btn-right-scroll").click(function () {
    $(this).hide();
    $(".fixed .box-filter").addClass("wrap");
    fixShowFilterLeftRight();
  });
  $(".filter-list.price").length <= 0 &&
    $(".price-slider .range-toggle").hide();
  document.getElementById("wrapper") !== null &&
    ((n = document.getElementById("wrapper")),
    n.scrollTop + window.innerHeight >= n.scrollHeight &&
      $(".bg-whitefix").hide(),
    (n.onscroll = function () {
      n.scrollTop + window.innerHeight >= n.scrollHeight
        ? $(".bg-whitefix").hide()
        : $(".bg-whitefix").fadeIn(400);
    }));
  $(".quickfilter").on("scroll", function () {
    var n = $(this).parent();
    $(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth
      ? n.hasClass("show-bg") && n.removeClass("show-bg")
      : n.hasClass("show-bg") || n.addClass("show-bg");
  });
  $(".filter-list--hang").on("scroll", function () {
    let n = $(this);
    console.log("this.scrollTop", this.scrollTop);
    this.scrollTop > 50
      ? n.parent().find(".filter-blur").fadeOut()
      : n.parent().find(".filter-blur").fadeIn();
  });
  $(".scrolling").on("scroll", function () {
    var n = $(this).parent();
    $(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth
      ? n.hasClass("scroll-right") && n.removeClass("scroll-right")
      : $(this).scrollLeft() === 0
      ? n.hasClass("scroll-left") && n.removeClass("scroll-left")
      : (n.hasClass("scroll-right") || n.addClass("scroll-right"),
        n.hasClass("scroll-left") || n.addClass("scroll-left"));
  });
  for (
    scrolling_tables = document.getElementsByClassName("scrolling"), t = 0;
    t < scrolling_tables.length;
    t++
  )
    (scrolling_div = scrolling_tables[t]),
      scrolling_div.offsetWidth < scrolling_div.scrollWidth &&
        ($(".scrolling_inner").hasClass("scroll-right") ||
          $(".scrolling_inner").addClass("scroll-right"));
  document.TotalCount <= 0 &&
    ($(".box-sort .sort-total").hide(), $(".box-sort").addClass("hide-ext"));
  setTimeout(function () {
    callLazy();
    countTotal();
    $(".total-reloading").html(document.TotalCount);
  }, 1e3);
  $(".txtnb-readmore").click(function (n) {
    n.preventDefault();
    $(".txtnb-readmore").fadeOut(100);
    $(".filter-list--hang .c-btnbox").hide().removeClass("hide").slideToggle();
    return;
  });
  $(".manu a")
    .not(".txtnb-readmore")
    .click(function (n) {
      n.preventDefault();
      var t = this.dataset.id;
      manuParams.indexOf(t) >= 0
        ? (manuParams.splice(manuParams.indexOf(t), 1),
          $(".manu a[data-id=" + t + "]").removeClass("check"),
          autoAddorRemoveFilterActive(this, null))
        : (manuParams.push(t),
          $(".manu a[data-id=" + t + "]").addClass("check"),
          autoAddorRemoveFilterActive(null, this));
      reLoadChildFilter();
      $(this).parent().hasClass("single-manu")
        ? ($(".sort-select-main").fadeOut(0),
          closePopup(),
          (varFilterObj.isMore = !1),
          (varFilterObj.isCallTotal = !0),
          (varFilterObj.isViewNow = !0),
          filterPros(varFilterObj))
        : (activeOrUnActiveBlock(), totalFilterPros());
    });
  $(document).on("click", ".box-quicklink.accessories a", function (n) {
    n.preventDefault();
    var t = this.dataset.id;
    if (t == "999") {
      if ($(this).hasClass("check") && cidsParams.length <= 0) return;
      cidsParams = [];
      $(".box-quicklink.accessories a.check").removeClass("check");
      $(this).addClass("check");
      BuildActiveFilter(!0);
    } else
      $(".box-quicklink.accessories a[data-id='999']").removeClass("check"),
        cidsParams.indexOf(t) >= 0
          ? (cidsParams.splice(cidsParams.indexOf(t), 1),
            $(".box-quicklink.accessories a[data-id=" + t + "]").removeClass(
              "check",
            ))
          : (cidsParams.push(t),
            $.unique(cidsParams),
            $(".box-quicklink.accessories a[data-id=" + t + "]").addClass(
              "check",
            ),
            BuildActiveFilter());
    filterProsPKGenuine(!1);
  });
  $(document).on("click", ".props a", function (n) {
    var i, t;
    (n.preventDefault(), $(this).hasClass("prevent")) ||
      ($(this).parents(".props").find(".prop-minmax").length > 0 &&
        ($(this)
          .parents(".props")
          .find(".prop-minmax input")
          .each(function () {
            getOrRemoveRangeParamByName($(this), !0);
          }),
        (i = $(this).parents(".props").find(".prop-minmax").attr("data-type")),
        $(".prop-minmax." + i)
          .find(".container")
          .slideUp(),
        $(".prop-minmax." + i)
          .find(".range-toggle span")
          .removeClass("down")),
      (t = this.dataset.id),
      propsParams.indexOf(t) >= 0
        ? (propsParams.splice(propsParams.indexOf(t), 1),
          $(".props a[data-id=" + t + "]").removeClass("check"),
          autoAddorRemoveFilterActive(this, null))
        : (propsParams.push(t),
          $.unique(propsParams),
          $(".props a[data-id=" + t + "]").addClass("check"),
          autoAddorRemoveFilterActive(null, this)),
      $(this).parent().hasClass("props-child")
        ? ($(".sort-select-main").fadeOut(0),
          closePopup(),
          (varFilterObj.isMore = !1),
          (varFilterObj.isCallTotal = !0),
          (varFilterObj.isViewNow = !0),
          filterPros(varFilterObj))
        : (activeOrUnActiveBlock(), totalFilterPros()));
  });
  $(document).on("click", ".colors a", function (n) {
    if ((n.preventDefault(), !$(this).hasClass("prevent"))) {
      var t = this.dataset.id;
      clsParams.indexOf(t) >= 0
        ? (clsParams.splice(clsParams.indexOf(t), 1),
          $(".colors a[data-id=" + t + "]").removeClass("check"),
          autoAddorRemoveFilterActive(this, null))
        : (clsParams.push(t),
          $.unique(clsParams),
          $(".colors a[data-id=" + t + "]").addClass("check"),
          autoAddorRemoveFilterActive(null, this));
      activeOrUnActiveBlock();
      totalFilterPros();
    }
  });
  $(document).on("click", ".extend a", function () {
    var n = this.dataset.type,
      i = n == "new" && $("a[data-newv2='True']").length,
      t;
    if (i) {
      if ($(this).hasClass("active"))
        $(this).removeClass("active"),
          $(".newyearFilter")
            .eq(0)
            .find("a")
            .each(function () {
              var n = this.dataset.id;
              propsParams.indexOf(n) >= 0 &&
                propsParams.splice(propsParams.indexOf(n), 1);
            });
      else if (((t = LoadCheckAjaxExtend(this)), t))
        $(this).addClass("active"),
          $(".newyearFilter")
            .eq(0)
            .find("a")
            .each(function () {
              var n = this.dataset.id;
              propsParams.push(n);
              $.unique(propsParams);
            });
      else return;
      varFilterObj.isCallTotal = !0;
      filterPros(varFilterObj);
      return;
    }
    if (extParams.indexOf(n) >= 0)
      extParams.splice(extParams.indexOf(n), 1),
        $(".extend a[data-type=" + n + "]").removeClass("active");
    else {
      if (n == "fast" && getLocationCustomer().wardID > 0 == !1) {
        isCallFastDeli = !0;
        OpenLocation();
        return;
      }
      if ((extParams.push(n), (t = LoadCheckAjaxExtend(this)), t))
        $(".extend a[data-type=" + n + "]").addClass("active");
      else return;
    }
    extParams.indexOf("fast") >= 0 &&
      extParams.indexOf("cbspk") >= 0 &&
      ($(".extend a.fastdeli").removeClass("active"),
      extParams.splice(extParams.indexOf("fast"), 1));
    $(this).hasClass("accessories")
      ? filterProsPKGenuine()
      : ((varFilterObj.isCallTotal = !0), filterPros(varFilterObj));
    return;
  });
  $(".price-slider").length > 0 && EventPriceRange();
  $(".props a").length > 0 && EventPropRange();
  $(document).on("click", ".price a", function (n) {
    n.preventDefault();
    var t = this.dataset.id;
    $(".price-slider .container").slideUp();
    $(".price-slider .range-toggle span").removeClass("down");
    priceRangeParams !== "" &&
      ((priceRangeParams = ""), resetPriceRange(), totalFilterPros());
    rangeParams.indexOf(t) >= 0
      ? (rangeParams.splice(rangeParams.indexOf(t), 1),
        $(".price a[data-id=" + t + "]").removeClass("check"),
        autoAddorRemoveFilterActive(this, null))
      : (rangeParams.push(t),
        $.unique(rangeParams),
        $(".price a[data-id=" + t + "]").addClass("check"),
        autoAddorRemoveFilterActive(null, this));
    activeOrUnActiveBlock();
    totalFilterPros();
  });
  $(".sort a.check").length > 0 &&
    ((ordersParams = parseInt($(".sort a.check").data("id"))),
    (additionFilterParam =
      $(".sort a.check").data("propid") !== undefined &&
      $(".sort a.check").data("propid") > 0
        ? parseInt($(".sort a.check").data("propid"))
        : 0));
  $(document).on("click", ".sort a", function (n) {
    n.preventDefault();
    var i = this.dataset.id,
      t = $(this).data("propid");
    $(".sort a").removeClass("check");
    $(this).addClass("check");
    ordersParams = i;
    additionFilterParam = t !== undefined && t > 0 ? t : 0;
    $(".sort-select-main").fadeToggle(300);
    $(".sort-show").html($(this).text());
    varFilterObj.isCallTotal = !0;
    $(this).parents(".sort").hasClass("accessories")
      ? filterProsPKGenuine()
      : filterPros(varFilterObj);
  });
  $(document).on("click", ".criteria", function () {
    $(".criteria").not(this).next().hide();
    $(this).next().slideToggle(200);
    $(".barpage").length > 0 &&
      $("body,html").animate({ scrollTop: $(".barpage").position().top }, 600);
  });
  $(document).on("click", ".closefilter", function () {
    $(".filter li div").fadeOut();
  });
  $(document).on("click", ".view-more a", function (n) {
    (n.preventDefault(), $(this).find(".bubblingG").length > 0) ||
      ((varFilterObj.e = this),
      (varFilterObj.isMore = !0),
      $(this).hasClass("accessories-genuine")
        ? filterProsPKGenuine(!0)
        : filterPros(varFilterObj),
      CheckButtonCompareCategory());
  });
  $(".ht-sale__tab li").click(function () {
    $(".ht-sale__tab li").removeClass("active");
    $(".show-sale").removeClass("active");
    $(this).addClass("active");
    showTabIndexOther(this);
  });
  $(".navnh-link a").click(function () {
    $(".show-navlink").addClass("view");
    showBlockGroupCate(this);
  });
  $(".btn-navlink-close").click(function () {
    $(".show-navlink").removeClass("view");
    resetGroupCateSide();
  });
  $(".navlink-title").on("click", function (n) {
    n.preventDefault();
    $(this).toggleClass("act");
    $(this).next(".navlink-item .c-listcat-fadeIn").fadeToggle(200);
  });
  $(".c-listcat-havemore li").slice(0, 9).show();
  $(".js-moreall").on("click", function () {
    $(this).hide();
    $(".c-listcat-havemore li").addClass("sitem");
  });
  document.isWatch &&
    (replaceTextSeeAllWatchPage(), replaceListProductWatchPage());
  $(document).on("click", "a.info-txt__rdmore", function () {
    $(".info-txt").hide();
    $(".manuinfo.hide").removeClass("hide");
  });
  $(document).on("click", ".manuinfo .d2", function () {
    $(this).hasClass("expand")
      ? $(this).removeClass("expand").addClass("collapse")
      : $(this).addClass("expand").removeClass("collapse");
    $(this).next().slideToggle();
  });
  let e = location.hash.indexOf("cids") >= 0;
  if (
    location.hash != "" &&
    document.cateID !== undefined &&
    (document.cateID > 0 || e)
  ) {
    i = location.hash.replace("#", "");
    r = !1;
    try {
      $("#" + i).length > 0 && (r = !0);
    } catch (o) {}
    i != "" && r == !1 && callFilterFromHash(i);
    manuParams.length == 1
      ? ($(".child-filter.hide").removeClass("hide"),
        $(".child-filter-outer.hide").removeClass("hide"))
      : ($(".child-filter").hasClass("hide")
          ? console.log("đã ẩn filter theo dòng")
          : $(".child-filter").addClass("hide"),
        $(".child-filter-outer").hasClass("hide")
          ? console.log("đã ẩn filter theo dòng ở quicklink")
          : $(".child-filter-outer .single-prop").length <= 0 &&
            $(".child-filter-outer").addClass("hide"));
  } else
    $(".price a.check").each(function () {
      return (
        rangeParams.push($(this).data("id").toString()),
        autoAddorRemoveFilterActive(null, this),
        $(".price-slider .range-toggle span").removeClass("down"),
        $(".price-slider .container").slideUp(),
        resetPriceRange(),
        textActiveFilter($(this), "Giá"),
        activeOrUnActiveBlock(),
        !1
      );
    }),
      $(".manu a.check").each(function () {
        return (
          manuParams.push($(this).data("id").toString()),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), "Hãng"),
          activeOrUnActiveBlock(),
          !1
        );
      }),
      $(".props a.check").each(function () {
        (propsParams != null &&
          propsParams.indexOf($(this).data("id").toString()) >= 0) ||
          (propsParams.push($(this).data("id").toString()),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), ""),
          $.unique(propsParams),
          activeOrUnActiveBlock());
      }),
      $(".colors a.check").each(function () {
        (clsParams != null &&
          clsParams.indexOf($(this).data("id").toString()) >= 0) ||
          (clsParams.push($(this).data("id").toString()),
          autoAddorRemoveFilterActive(null, this),
          textActiveFilter($(this), "Màu"),
          $.unique(clsParams),
          activeOrUnActiveBlock());
      }),
      $(".extend a.active").each(function () {
        return (
          $(this).data("newv2") !== "True" &&
            extParams.push($(this).data("type").toString()),
          !1
        );
      }),
      prGetDeliveryStatus(),
      hideShowClrFilter(),
      hideShowListActiveFilter();
  fixShowFilterLeftRight();
  $("#paging").length > 0 &&
    genPaging(document.TotalCount, document.pageSize, document.pageIndex);
  $(document).on("click", "#access-keyword", function () {
    isInitSuggestAccess || initSuggestAccess();
  });
  $(".searchacc").submit(function (n) {
    n.preventDefault();
    redirectSearchAccess(".searchacc");
  });
  $(".count-item").length > 0
    ? $(".count-item").each(function (n, t) {
        $(".count-item").length <= 3 &&
          $(".show-total-main .bg-whitefix").remove();
        (n + 1 + $(".show-full").length) % 3 == 0 &&
          $(".count-item").length > 3 &&
          $(t).after('<div class="filter-border"></div>');
      })
    : $(".show-total-main .filter-border").remove();
  AutoActiveBoxOther();
  LoadNewProductMergingByID();
  CheckButtonCompareCategory();
  $(document).on("click", ".props-slider a", function () {
    $(this).remove();
    resetPropRangeLstFilterActive($(this).data("type"));
    return;
  });
  $(document).on("click", ".listproduct .item a.main-contain", function () {
    var u = $(this).data("name"),
      f = $(this).data("id"),
      e = $(this).data("price"),
      o = $(this).data("brand"),
      s = $(this).data("cate"),
      t = "List product in category",
      n = $(this).parent().parent().parent().parent().parent().data("block"),
      i,
      r;
    n !== undefined && n != null && n != "" && (t = n);
    i = $(this).parent().data("pos");
    r = $(this).data("s");
    gtm_ProductClick(u, f, e, o, s, t, i, !1, r);
  });
  if ((LoadProductPromote(), document.cateUrl == "laptop")) {
    let n = decodeURIComponent(getCookie("prevUrl"));
    if (n != null && n == "/laptop-ldp") {
      let n = document.createElement("script");
      n.src = "/lib/hot-jar/hot-jar.js";
      $("head").append(n);
    } else setCookie("prevUrl", window.location.pathname, 1);
  }
  $(".viewmore-manupk").click(function () {
    $(this).remove();
    $(".group-manu a.hide").removeClass("hide");
  });
  $(document).on("click", ".group-manu a:not(.viewmore-manupk)", function () {
    $(this).hasClass("active") ||
      ($(".group-manu a:not(.viewmore-manupk)").removeClass("active"),
      (isClickFilterManuGenius = !0),
      $(this).addClass("active"),
      resetFilterCateAccessoryGenius(),
      (manuPKGenius = $(this).data("name")),
      filterProsPKGenuine());
  });
  document.isBannerTopZone !== undefined &&
  document.isBannerTopZone == "1" &&
  manuParams !== undefined &&
  manuParams.length <= 1 &&
  checkFilterApple() == 1
    ? $("#form-zone-bhx").length > 0 && $("#form-zone-bhx").addClass("hide")
    : $(".banner__topzone").length > 0 &&
      $(".banner__topzone").addClass("hide");
  $(".game-slider").length > 0 &&
    $(".game-slider").owlCarousel({
      nav: !0,
      items: 1,
      loop: !1,
      rewind: !0,
      dots: !1,
      lazyLoad: !0,
    });
  $("._product_hot .owl-carousel").owlCarousel({
    nav: !0,
    items: 5,
    slideBy: "page",
    rewind: !0,
    dots: !1,
    smartSpeed: 100,
  });
  $(document).on("input", "#Cus-Phone", function () {
    $("#contain input").removeClass("border-red-error");
    $("#Check-Phone").removeAttr("disabled");
  });
  $(document).on("input", "#Cus-Otp", function () {
    $("#contain input").removeClass("border-red-error");
    $("#Check-Otp").removeAttr("disabled");
  });
  $(".filter-show").each(function () {
    $(this).find(".explain-filter").first().css("height", "25px");
    $(this).find(".explain-filter").first().css("overflow", "hidden");
    $(this)
      .find(".explain-filter")
      .first()
      .find(".explain-filter-detail")
      .show();
  });
  $(document).on("click", ".explain-filter", function () {
    var n, t;
    $(".explain-filter").removeClass("handle");
    $(this).addClass("handle");
    $(".explain-filter").each(function (n, t) {
      if ($(t).hasClass("handle") == !1) {
        var i = $(t).parent(".filter-show");
        $(i).css("height", "fit-content");
        $(i).removeClass("filter-scroll");
        $(t).find(".explain-filter-text").removeClass("active");
        $(t).data("stt") != 1
          ? $(t).find(".explain-filter-detail").hide()
          : ($(t).removeClass("active"),
            $(t).css("height", "25px"),
            $(t).css("overflow", "hidden"));
        $(t).find(".explain-filter-detail").removeClass("opacityClass");
      }
    });
    $(this).data("stt") != 1
      ? $(this).find(".explain-filter-detail").toggle()
      : $(this).hasClass("active") == !1
      ? ($(this).addClass("active"),
        $(this).css("height", "fit-content"),
        $(this).css("overflow", "unset"))
      : ($(this).removeClass("active"),
        $(this).css("height", "25px"),
        $(this).css("overflow", "hidden"));
    $(this).find(".explain-filter-text").toggleClass("active");
    $(this).find(".explain-filter-detail").toggleClass("opacityClass");
    n = $(this).parent(".filter-show");
    $(n).css("height", "fit-content");
    t = n.outerHeight(!0);
    t > 600
      ? ($(n).addClass("filter-scroll"), $(n).css("height", 600))
      : t < 600 &&
        n.hasClass("filter-scroll") &&
        ($(n).removeClass("filter-scroll"), $(n).css("height", "fit-content"));
  });
  typeof itemBlockFilter != "undefined" &&
    (itemBlockFilter =
      $(".jsfix").length > 0 ? $(".jsfix").offset().top + 30 : 0);
  $(document).on("click", "#myBtn", function () {
    var n = $("#video-popup").data("videoid");
    $("#video-popup iframe").length == 0 &&
      $("#video-popup").append(
        '<iframe class="iframe" id="videotivi" src="https://www.youtube.com/embed/' +
          n +
          "?playlist=" +
          n +
          '&loop=1&autoplay=1&mute=1" frameborder="0" allowfullscreen="">',
      );
    $(".dmx-site").addClass("overlay-filter");
    $("#myModal").show();
  });
  $("#myModal .close").click(function () {
    $("#video-popup iframe").remove();
    $(".dmx-site").removeClass("overlay-filter");
    $("#myModal").hide();
  });
  createQuickMenu();
  viewShortContentSEO();
  $("#click-anchor").click(function () {
    $(this).toggleClass("crt");
    $(".anchor-hd-list").fadeToggle();
  });
  let u = $("div.cate-main-container"),
    f = $(".sticky-sidebar");
  $(".article__content a:first").find("img").length > 0 &&
    $(".article .article__content").addClass("shortnew");
  $(window).scroll(function () {
    u != "undefined" &&
      (u.isReachViewportTop() ? f.addClass("active") : f.removeClass("active"));
  });
});
$.fn.isReachViewportTop = function (n = 0) {
  let t = $(this).offset().top,
    r = t + $(this).outerHeight(),
    i = $(window).scrollTop();
  return i < r - n && i >= t - n;
};
window.onpageshow = function (n) {
  console.log("onpageshow is calling...");
  n.persisted &&
    (console.log("onpageshow is called"),
    $("#progressTop").remove(),
    $(".overlay").hide());
};
$(window).scroll(function () {
  $(".item img.lazy").length > 0 && callLazy();
  typeof idcompare != "undefined" &&
    idcompare.length >= 2 &&
    $(window).scrollTop() > 100 &&
    ($(".compare-box").show("slow"),
    $("#notifychatmsg").length > 0 && $("#notifychatmsg").hide());
  $(".cate li .tip-abs").length > 0 &&
    $(window).scrollTop() > 150 &&
    showTipCompare();
});
previousRequest = "";
createCookie = function (n, t, i) {
  var u, r;
  i
    ? ((r = new Date()),
      r.setTime(r.getTime() + i * 864e5),
      (u = "; expires=" + r.toGMTString()))
    : (u = "");
  document.cookie = n + "=" + t + u + "; path=/";
};
let pageIndexAccessories = 0;
linkHashPKGenuine = "";
globalEvent.on("autocomplete", initSuggestAccess);
rangePriceSlider = document.getElementById("slider-range");
rangePriceSliderTotal = document.getElementById("slider-range-total");
const minval =
    $("input[name='price-min-value']").length > 0
      ? parseInt($("input[name='price-min-value']").attr("data-minvalue")) / 1e3
      : 0,
  maxval =
    $("input[name='price-max-value']").length > 0
      ? parseInt($("input[name='price-max-value']").attr("data-maxvalue")) / 1e3
      : 0,
  isTivi = document.cateID == "1942";
$(window).on("hashchange", function () {
  (location.pathname.replace("/", "") == "gia-dung" ||
    location.pathname.replace("/", "") == "do-dung-gia-dinh") &&
    AutoActiveBoxOther();
});
jQuery.fn.hasScrollBarDoc = function () {
  return this.get(0) === undefined || this.get(0) == null
    ? !1
    : this.get(0).scrollHeight > this.innerHeight();
};
manu_name = "";
