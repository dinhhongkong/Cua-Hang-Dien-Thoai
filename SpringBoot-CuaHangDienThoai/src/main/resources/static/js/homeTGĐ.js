function LoadJsComment() {
    var n = $(".rating-cmt-info-js").attr("data-js"),
        t = parseInt($(".rating-cmt-info-js").attr("siteid"));
    gl_getJsCmt ||
    (typeof cmtaddcommentclick == "undefined" &&
        ((gl_getJsCmt = !0),
            $.getScript(n).done(function () {
                console.log("get script cmt: " + n);
                setTimeout(function () {
                    t === 1 && cmtInitEvent();
                    reInitCmt2021();
                    reConfigCmtParam(t);
                    console.log(oParams);
                }, 200);
            })));
}
function reConfigCmtParam(n) {
    typeof oParams != "undefined" &&
    window.location.origin.includes("staging") &&
    (n == 1
        ? ((oParams = {
            sJsHome: "https://www.thegioididong.com/commentnew",
            sJsHomeU: "https://staging.thegioididong.com/commentmwg",
            sSiteName: "tgdd",
            sJsAjax: "https://www.thegioididong.com/commentnew/cmt/index",
            sStaticVersion: "977ce5003566dfb5058d954b0ea87d35",
            sGlobalTokenName: "core",
            bJsIsMobile: !1,
            "notification.notify_ajax_refresh": 2,
        }),
            (domainName = "http://www.thegioididong.com/commentnew"),
            (hostName = ".thegioididong.com"))
        : n == 2 && ((oParams.sJsAjax = window.location.origin + "/commentmwg/ajax/index"), (oParams.sJsHome = window.location.origin + "/commentmwg")),
        console.log("reConfig_cmt_: " + n));
}
function initUploadRatingImg() {
    console.log("initUploadRatingImg_mwg");
    var n = "",
        t = parseInt(rating_popup.find("#hdfSiteID").val());
    t == 1 ? (n = getParam("sJsHomeU") + "/aj/Cmt/PostRatingImage") : t == 2 && (n = getParam("sJsHome") + "/aj/Home/PostImage");
    setTimeout(function () {
        rating_popup.find(".send-img").unbind();
        rating_popup.find(".send-img").on("click", function () {
            if ((console.log("up Img Cmt"), rating_popup.find(".resRtImg li").length > 2)) return alert("ÄĂ£ up load quĂ¡ sá»‘ áº£nh quy Ä‘á»‹nh. "), !1;
            $("#hdFileRatingUpload").click();
        });
        rating_popup.find("#hdFileRatingUpload").unbind();
        rating_popup.find("#hdFileRatingUpload").html5Uploader({
            postUrl: n,
            onClientLoadStart: function () {
                console.log("onClientLoadStart - upload rating img_mwg_");
            },
            onServerLoadStart: function () {
                var n = "<li class='loading-img'>";
                n += "<img src='//cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/loading.gif' />";
                n += "<span class='fbDelImg disabled'>XĂ³a</span>";
                n += "</li>";
                rating_popup.find(".resRtImg").append(n);
                rating_popup.find(".resRtImg").removeClass("hide");
            },
            onServerProgress: function () {},
            onServerLoad: function () {},
            onSuccess: function (n) {
                var i = $.parseJSON(n.currentTarget.response),
                    t;
                if (i.status == -1) {
                    console.log(i);
                    alert("Xáº£y ra lá»—i, vui lĂ²ng thá»­ láº¡i sau. ");
                    return;
                }
                console.log("onSuccess - upload RatingCmtIMG");
                t = "<li data-imgName='" + i.imageName + "'  >";
                typeof gl_rt_siteID != "undefined" && gl_rt_siteID == 2 && (t = "<li data-imgName='" + i.ImageName + "'  >");
                t += "<img src='" + i.imageUrl + "' />";
                t += "<span class='fbDelImg' onclick='rtDelImg(this)'>XĂ³a</span>";
                t += "</li>";
                rating_popup.find(".resRtImg .loading-img").first().replaceWith(t);
                getRtImg();
                uploadedFileMap.set(`uploadedFile${rating_popup.data("index")}`, uploadedFileMap.get(`uploadedFile${rating_popup.data("index")}`) + 1);
            },
        });
    }, 1e3);
}
function getRtImg() {
    if ((console.log("getRtImg_mwg"), rating_popup.find(".resRtImg li").length > 0)) {
        var n = "";
        rating_popup.find(".resRtImg li").each(function () {
            var t = $(this).attr("data-imgname");
            t != null && t != "" && (n += t + "â•¬");
        });
        rating_popup.find(".hdfRtImg").val(n);
    } else rating_popup.find(".resRtImg li").length == 0 && rating_popup.find(".hdfRtImg").val("");
}
function rtDelImg(n) {
    rating_popup.find(n).parent().remove();
    getRtImg();
    rating_popup.find(".resRtImg li").length == 0 && rating_popup.find(".resRtImg").addClass("hide");
    uploadedFileMap.set(`uploadedFile${rating_popup.data("index")}`, uploadedFileMap.get(`uploadedFile${rating_popup.data("index")}`) - 1);
}
function rtMoveFile(n, t) {
    var i, r, u;
    console.log("rtMoveFile_mwg");
    i = "";
    r = parseInt(rating_popup.find("#hdfSiteID").val());
    r == 1 ? (i = getParam("sJsHomeU") + "/aj/Cmt/MoveFileRatingImage") : r == 2 && (i = getParam("sJsHome") + "/aj/Home/MoveFileRatingImage");
    n != null &&
    n != "" &&
    ((u = { attachFile: rating_popup.find("#hdfRtImg").val(), commentID: t }),
        $.ajax({
            url: i,
            type: "POST",
            data: u,
            cache: !1,
            beforeSend: function () {},
            success: function (n) {
                (n != null || n != "") && console.log(n);
                hideloading();
            },
            error: function () {
                hideloading();
            },
        }));
}
function lazyImgCmt() {
    $("#comment img.lazy").each(function () {
        var n = $(this).attr("data-src");
        $(this).attr("src", n);
    });
}
function reInitCmt2021() {
    if (!gl_getJsCmtDmx) {
        var n = parseInt($(".rating-cmt-info-js").attr("siteid")),
            t = $(".rating-cmt-info-js").attr("data-isMobile") === "True" ? !0 : !1;
        n == 2 && ($(".midcmt .s_comment i").removeClass("icondmx-search").addClass("icon-search"), console.log("reInitCmt2021_"), (gl_getJsCmtDmx = !0));
        $(".rating-cmt-info-js").attr("data-jsOvrCmt") != null &&
        $(".rating-cmt-info-js").attr("data-jsOvrCmt") != "" &&
        $.getScript($(".rating-cmt-info-js").attr("data-jsOvrCmt")).done(function () {
            console.log("getOverrideScript jsOverride-CMT");
            gl_getJsCmtDmx = !0;
        });
    }
}
function RemoveBlockPopup(n, t, i) {
    if (isMobile) {
        t.remove();
        i.remove();
        let r = n.find(".rating-product__block");
        r.length == 0 ? n.remove() : r.length == 1 && (n.addClass("one-cmt"), n.find(".slide-cmt.carousel").addClass("box-cmt").removeClass("slide-cmt").removeClass("carousel"), r.find(".text-cmt").append(r.find(".rating-product__star")));
    } else {
        let r = $(".slide-cmt");
        r.trigger("remove.owl.carousel", r.find(".owl-item .item").index(t));
        i.remove();
        let f = r.data("max-item"),
            u = n.find(".rating-product__block");
        if (u.length == 0) {
            n.remove();
            return;
        }
        u.length < f
            ? (u.each(function () {
                let n = $(this),
                    t = n.find(".rating-product__star");
                n.find(".text-cmt").after(t.addClass("flex"));
                n.find(".text-cmt").after(t.addClass("flex"));
                n.find(".rating-product__star li i").removeClass("iconratingnew-star--medium").addClass("iconratingnew-star--big");
            }),
                (r.data("owl.carousel").options.items = u.length))
            : u.length == f && ((r.data("owl.carousel").options.stagePadding = 0), r.removeClass("stage-padding"));
        r.trigger("refresh.owl.carousel");
    }
}
function initRating() {
    var t, n;
    rooturl = document.location.host;
    let i = document.location.href;
    productUrl != null && (i = window.location.origin + productUrl);
    rating_popup.find("#hdfRtLink").val(i);
    gl_productID = parseInt(rating_popup.find("#hdfProductID").val());
    gl_rt_siteID = parseInt(rating_popup.find("#hdfSiteID").attr("value"));
    rating_popup.find("#hdfIsRatingPage").length > 0 && (gl_rt_isRatingPage = 1);
    isMobile !== undefined && (gl_rt_isMobile = isMobile);
    readCKLikeCmt();
    $(".selStr").length > 0 &&
    ($(".selStr i").unbind(),
        $(".selStr i").hover(
            function () {
                var t, n;
                for ($(".selStr i").removeClass("active"), t = parseInt($(this).attr("id").replace("ss", "")), n = 0; n <= t; n++) $("#ss" + n).addClass("active");
            },
            function () {
                $(".selStr i").removeClass("active");
            }
        ));
    rating_popup.find(".ul-star li").unbind();
    rating_popup.find(".ul-star li").click(function () {
        var n, t;
        for (rating_popup.find(".ul-star li i").removeClass("active"), rating_popup.find(".ul-star li p").removeClass("active-slt"), n = parseInt($(this).attr("data-val")), t = 0; t < n; t++)
            rating_popup.find(".ul-star li i").eq(t).addClass("active");
        rating_popup
            .find(".ul-star li p")
            .eq(n - 1)
            .addClass("active-slt");
        rating_popup.find("#hdfStar").val(n);
        rating_popup.find(".ul-orslt, .read-assess-form").show();
    });
    rating_popup.find(".ul-orslt li .btn-assess").unbind();
    rating_popup.find(".ul-orslt li .btn-assess").click(function () {
        var n = $(this).attr("data-id"),
            t = $(this).attr("data-val");
        rating_popup.find(".criteriaID" + n + " .btn-assess").removeClass("checkact");
        $(this).addClass("checkact");
        rating_popup.find("#criteriaID" + n).attr("value", t);
    });
    rating_popup.find(".input .if [name=fRPhone]").unbind();
    rating_popup.find(".input .if [name=fRPhone]").keydown(function (n) {
        $.inArray(n.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (n.keyCode === 65 && (n.ctrlKey === !0 || n.metaKey === !0)) ||
        (n.keyCode >= 35 && n.keyCode <= 40) ||
        ((n.shiftKey || n.keyCode < 48 || n.keyCode > 57) && (n.keyCode < 96 || n.keyCode > 105) && n.preventDefault());
    });
    $(".ratingLst li .sttB").unbind();
    $(".ratingLst li .sttB").click(function () {
        var n = $(this).parents("li").attr("id");
        $("#" + n)
            .find(".rcf")
            .is(":visible")
            ? $("#" + n)
                .find(".rcf")
                .hide()
            : $("#" + n)
                .find(".rcf")
                .show();
    });
    $(".ratingLst .par").each(function () {
        var n = $(this).attr("id"),
            t;
        n = n.replace("r-", "");
        t = $(".ratingLst .rp-" + n).length;
        t > 0 &&
        $(this)
            .find(".cmtr")
            .html(t + " tháº£o luáº­n");
    });
    t = "tgdd_fullname";
    gl_rt_siteID == 2 && (t = "dm_fullname");
    n = getCookie(t);
    n != null &&
    n != "" &&
    ((n = Htmlentities(n)),
        $(".ratingLst .ifrl").each(function () {
            $(this).find("span").html(decodeURI(n));
            $(this).find("a").html("Sá»­a tĂªn");
        }));
    $(".ratingLst li").length == 0 && $(".frtip .ipt").removeClass("hide");
    $(".click-use").unbind();
    $(".click-use").click(function (n) {
        n.preventDefault();
        $(this).toggleClass("act");
    });
    $(".frtip .toprt .c").each(function () {
        var n = $(this).find("strong").html();
        n = parseInt(n);
        n == 0 && ($(this).attr("onclick", ""), $(this).addClass("n"));
    });
    $(".srhRtTxt").length > 0 &&
    $(".srhRtTxt")
        .unbind()
        .click(function () {
            $(".frtip .wrap_seasort").slideToggle();
        });
    $(".txt-agree").unbind();
    $(".txt-agree").click(function () {
        var n = parseInt($("#hdfIsShare").val());
        $(".txt-agree").removeClass("selected");
        n === 1 ? $("#hdfIsShare").val(0) : n === 0 && ($("#hdfIsShare").val(1), $(".txt-agree").addClass("selected"));
    });
    $(".icon-dots").unbind();
    $(".icon-dots").on("click", function (n) {
        n.preventDefault();
        $(this).next(".comment__item .txt-dots").fadeToggle(300);
    });
    $(".txt-dots").unbind();
    $(".txt-dots").click(function () {
        $(".show-history").fadeIn(400);
        $("body").css({ overflow: "hidden" });
    });
    $(".close-history,.close-history-href").unbind();
    $(".close-history,.close-history-href").click(function () {
        $(".show-history").fadeOut(400);
        $("body").css({ overflow: "scroll" });
        $(".comment__item .txt-dots").hide();
        gl_rt_isMobile || ($(".locationbox_overlayaccess").hide(), $(".bgback").removeClass("showbg"));
    });
    $(".c-checkitem").unbind();
    $(".c-checkitem").on("click", function () {
        $(this).toggleClass("act-check");
        var n = parseInt($(this).attr("data-val"));
        n == 0 ? $(this).attr("data-val", 1) : $(this).attr("data-val", 0);
        ratingCmtList(1, 0);
    });
    $(".boxsort__click-show").unbind();
    $(".boxsort__click-show").click(function () {
        $(this).toggleClass("active");
        $(".boxsort__list").fadeToggle(200);
    });
    $(".boxsort__list li").unbind();
    $(".boxsort__list li").click(function () {
        $(".boxsort").attr("data-val", $(this).attr("data-val"));
        $(".boxsort__click-show").html($(this).html());
        $(".boxsort__click-show").toggleClass("active");
        $(".boxsort__list").fadeToggle(200);
        ratingCmtList(1, 0);
    });
    calSizeThumpRtImg();
    $(".rating-img-rd").click(function () {
        gl_rt_isMobile
            ? ($(".gallery").addClass("showGlr"), $("body").css({ overflow: "hidden" }))
            : ($(".gallery").addClass("showGlr"), $("body").css({ overflow: "hidden" }), $(".bgback").addClass("showbg"), $(".locationbox_overlayaccess").show());
    });
    $(".gallery-close").click(function () {
        gl_rt_isMobile
            ? ($(".gallery").removeClass("showGlr"), $("body").css({ overflow: "scroll" }))
            : ($(".bgback").removeClass("showbg"), $(".show-comment").removeClass("blockshow").addClass("hide"), $(".gallery").removeClass("showGlr"), $(".locationbox_overlayaccess").hide());
    });
    $(".gallery__tab a").click(function (n) {
        n.preventDefault();
        $(".gallery__tab a").removeClass("act");
        var t = $(this).attr("href");
        t = t.substr(1);
        $(this).addClass("act");
        $(".gallery__content li").each(function () {
            $(this).hasClass(t) || t == "all" ? $(this).removeClass("hide") : $(this).addClass("hide");
        });
    });
}
function initRtSlide() {
    if (gl_rt_isMobile) console.log("slide m_111"), $(".show-comment-main").owlCarousel({ lazyLoad: !0, items: 1, loop: !0, dots: !1, autoplay: !1, nav: !0, autoHeight: !0 });
    else {
        console.log("slide d_1");
        var n = $("#cmt_sync1"),
            t = $("#cmt_sync2");
        n.owlCarousel({ lazyLoad: !0, items: 1, singleItem: !0, slideSpeed: 1e3, nav: !0, dots: !1, navigationText: ["", ""], pagination: !1, responsiveRefreshRate: 200 });
        n.on("changed.owl.carousel", function (n) {
            console.log("slide1 change: " + n.item.index);
            $("#cmt_sync2").trigger("to.owl.carousel", n.item.index);
        });
        t.owlCarousel({ items: 1, itemsDesktop: [1199, 1], itemsDesktopSmall: [979, 1], pagination: !1, responsiveRefreshRate: 100 });
        t.on("changed.owl.carousel", function (n) {
            console.log("slide2 change: " + n.item.index);
            $("#cmt_sync1").trigger("to.owl.carousel", n.item.index);
        });
    }
}
function getOverrideScript(n) {
    if (gl_isGetScriptMap.get(`gl_isGetScript${n}`)) return !1;
    gl_rt_isRatingPage == 1
        ? typeof initUploadRatingImg == "function" && (console.log("getOverrideScript jsOvrCmt_detail"), initUploadRatingImg(), gl_isGetScriptMap.set(`gl_isGetScript${n}`, !0))
        : (typeof initUploadRatingImg == "function" && (console.log("getOverrideScript jsOvrCmt_detail"), initUploadRatingImg()), gl_isGetScriptMap.set(`gl_isGetScript${n}`, !0));
}
function showRatingCmtChild(n) {
    var t = n.replace("r-", ""),
        i,
        r;
    $(".rp-" + t).removeClass("hide");
    $(".rr-" + t).removeClass("hide");
    i = "tgdd_fullname";
    gl_rt_siteID == 2 && (i = "dm_fullname");
    r = getCookie(i);
    (r == null || r == "") &&
    $(".rr-" + t + " .ifrl")
        .removeClass("hide")
        .addClass("hide");
}
function likeRating(n) {
    var t = { id: n },
        i = window.location.origin + "/Rating/LikeRating/";
    $.ajax({
        url: i,
        type: "POST",
        data: t,
        cache: !1,
        beforeSend: function () {},
        success: function (t) {
            var i, r;
            if (t != null || t != "")
                try {
                    i = parseInt($("#r-" + n + " .click-like").attr("data-like"));
                    i++;
                    $("#r-" + n).attr("data-like", i);
                    r = "<i class='icondetail-like'></i> Há»¯u Ă­ch (" + i + ")";
                    $("#r-" + n + " .click-like").html(r);
                    $("#r-" + n + " .click-like").attr("href", "javascript:;");
                    updateCKLikeCmt(n);
                } catch (u) {
                    console.log(u);
                }
        },
        error: function () {},
    });
}
function updateCKLikeCmt(n) {
    var i = "tgdd_cmtlike",
        t;
    if ((gl_rt_siteID == 2 && (i = "dmx_cmtlike"), (t = getCookie(i)), t !== undefined && t !== null && t !== "")) {
        for (var u = !0, r = 0, f = t.split("-"), r = 0; r < f.length; r++) parseInt(n) === parseInt(f[r]) && (u = !1);
        u && ((t = t + "-" + n), CreateCookie(i, t, 1));
    } else CreateCookie(i, n, 1);
}
function readCKLikeCmt() {
    var r = "tgdd_cmtlike",
        t,
        n,
        i;
    if ((gl_rt_siteID === 2 && (r = "dmx_cmtlike"), (t = getCookie(r)), t !== undefined && t !== null && t !== ""))
        for (n = 0, i = t.split("-"), n = 0; n < i.length; n++)
            rating_popup.find("#r-" + i[n]).length > 0 &&
            (rating_popup.find("#r-" + i[n] + " .click-like").attr("href", "javascript:;"), rating_popup.find("#r-" + i[n] + " .click-like").html("<i class='icondetail-like'></i> Há»¯u Ă­ch (1)"));
}
function ratingMore(n, t) {
    var i = 5,
        r,
        u;
    t != null && t >= 0 && ((i = t), (gl_rtCurStar = t));
    r = { productid: gl_productID, page: n, score: i };
    u = "/aj/Rating/RatingCommentList/";
    POSTAjax(
        u,
        r,
        function () {},
        function (t) {
            if (t != null || t != "")
                try {
                    $(".ratingMore").remove();
                    n == 1 ? $(".ratingLst").html(t) : $(".ratingLst").append(t);
                    initRating();
                    $("img.lazy").trigger("sporty");
                } catch (i) {}
        },
        function () {},
        !0
    );
}
function submitRatingComment() {
    if (!gl_sendRating) {
        if (((gl_sendRating = !0), !validateRating())) {
            gl_sendRating = !1;
            return;
        }
        var n = rating_popup.find(".frtip"),
            t = n.serialize(),
            i = window.location.origin + "/RatingV2/SubmitRatingComment/";
        $.ajax({
            url: i,
            type: "POST",
            data: t,
            cache: !1,
            beforeSend: function () {
                showloading();
            },
            success: function (t) {
                if (t != null || t != "")
                    try {
                        initRating();
                        gl_sendRating = !1;
                        var i = rating_popup.find("#hdfRtImg").val();
                        if (t.res == 1) {
                            parseInt(t.resCmt) > 0 && i != null && i != "" && (console.log("rtMoveFile: " + i), rtMoveFile(i, t.resCmt), hideloading());
                            let r = n.find(".box-cmt-popup .info-pro"),
                                u;
                            u =
                                gl_rt_siteID == 1
                                    ? {
                                        name: r.data("name"),
                                        id: r.data("id"),
                                        price: r.data("price"),
                                        brand: r.data("brand"),
                                        category: r.data("category"),
                                        reviewWithPhoto: i != null && i != "" ? "Yes" : "No",
                                        anonymousReview: "No",
                                        productName: r.data("name"),
                                        rateTotal: n.find("input[name=hdfStar]").val(),
                                        productPrice: r.data("price"),
                                        dimension33: "",
                                        dimension34: "",
                                        dimension35: "",
                                        dimension36: r.data("price"),
                                        dimension43: n.find("input[name=hdfStar]").val(),
                                    }
                                    : {
                                        name: r.data("name"),
                                        id: r.data("id"),
                                        price: r.data("price"),
                                        brand: r.data("brand"),
                                        category: r.data("category"),
                                        reviewWithPhoto: i != null && i != "" ? "Yes" : "No",
                                        anonymousReview: "No",
                                        productName: r.data("name"),
                                        rateTotal: n.find("input[name=hdfStar]").val(),
                                        productPrice: r.data("price"),
                                        dimension50: "",
                                        dimension51: "",
                                        dimension52: "",
                                        dimension53: r.data("price"),
                                        dimension60: n.find("input[name=hdfStar]").val(),
                                    };
                            let f = { event: "formSubmissionSuccess", formSubmissionSuccess: u };
                            dataLayer.push(f);
                            t.popupSuccess != ""
                                ? (gl_rt_isMobile && $(".locationbox_overlayaccess").show(), $(".rating-product").after(t.popupSuccess))
                                : (alert("ÄĂ¡nh giĂ¡ cá»§a báº¡n sáº½ Ä‘Æ°á»£c há»‡ thá»‘ng kiá»ƒm duyá»‡t. Xin cĂ¡m Æ¡n."), $(".locationbox_overlayaccess").hide());
                            console.log("resetRating: " + i);
                            RemoveBlockPopup(rating_container, rating_block, rating_popup);
                            hideloading();
                        } else t.res == 0 && alert(t.mes);
                        hideloading();
                    } catch (r) {
                        gl_sendRating = !1;
                        hideloading();
                    }
            },
            error: function () {
                gl_sendRating = !1;
                hideloading();
            },
        });
    }
}
function ratingRelply(n) {
    var i, r, t, u, f;
    if (gl_sendRating) return !1;
    if (
        ((gl_sendRating = !0),
            (i = $.trim(
                $(".rr-" + n)
                    .find("input")
                    .val()
            )),
        i == null || i == "")
    )
        return (gl_sendRating = !1), alert("Vui lĂ²ng nháº­p ná»™i dung cáº§n tháº£o luáº­n"), !1;
    if (((r = "tgdd_fullname"), gl_rt_siteID == 2 && (r = "dm_fullname"), (t = getCookie(r)), t == null || t == "")) return (gl_sendRating = !1), showReplyConfirmPopup(), !1;
    u = {
        productid: gl_productID,
        commentid: n,
        content: $(".rr-" + n)
            .find("input")
            .val(),
        name: t,
        siteID: gl_rt_siteID,
    };
    f = window.location.origin + "/Rating/SubmitRatingReply/";
    $.ajax({
        url: f,
        type: "POST",
        data: u,
        cache: !1,
        beforeSend: function () {
            $("#dlding").show();
        },
        success: function (n) {
            if (n != null || n != "")
                try {
                    n.res == 1 && ($(".ratingLst .reply input").val(""), alert("Tháº£o luáº­n cá»§a báº¡n sáº½ Ä‘Æ°á»£c há»‡ thá»‘ng kiá»ƒm duyá»‡t. Xin cĂ¡m Æ¡n."));
                    gl_sendRating = !1;
                } catch (t) {}
            hideloading();
        },
        error: function () {
            gl_sendRating = !1;
            hideloading();
        },
    });
}
function rCmtEditName() {
    showReplyConfirmPopup();
}
function clearBorder() {
    $(".frtip .ct").removeClass("borderWn");
    $(".frtip .if input").removeClass("borderWn");
}
function validateRating() {
    var n, i, t;
    return (clearBorder(), rating_popup.find(".lbMsgRt").removeClass("hide"), (n = $.trim(rating_popup.find(".input [name=fRContent]").val())), (i = parseInt(rating_popup.find("#hdfStar").val())), i == 0)
        ? (rating_popup.find(".lbMsgRt").html("Báº¡n chÆ°a Ä‘Ă¡nh giĂ¡ Ä‘iá»ƒm sao, vui lĂ²ng Ä‘Ă¡nh giĂ¡."), paddingForm(), !1)
        : (n == null || n == "") && confirm("Chá» Ä‘Ă£! Ná»™i dung chÆ°a Ä‘Æ°á»£c nháº­p, báº¡n sáºµn lĂ²ng nháº­p thĂªm chá»©?")
            ? (rating_popup.find(".frtip .ct").focus(), !1)
            : ((n = $.trim(rating_popup.find(".input [name=fRName]").val())), n == null || n == "")
                ? (rating_popup.find(".lbMsgRt").html("Vui lĂ²ng nháº­p há» tĂªn"), rating_popup.find(".input [name=fRName]").addClass("borderWn"), paddingForm(), !1)
                : ((n = $.trim(rating_popup.find(".input [name=fRPhone]").val())), n == null || n == "")
                    ? (rating_popup.find(".lbMsgRt").html("Vui lĂ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i."), rating_popup.find(".input [name=fRPhone]").addClass("borderWn"), paddingForm(), !1)
                    : rating_popup.find(".ul-orslt li").length > 0 && ((t = rating_popup.find(".ul-orslt .checkact").length), t > 0 && t != rating_popup.find(".ul-orslt li").length)
                        ? (rating_popup.find(".lbMsgRt").html("Vui LĂ²ng chá»n táº¥t cáº£ cĂ¡c tiĂªu chĂ­"), paddingForm(), !1)
                        : (rating_popup.find(".lbMsgRt").removeClass("hide").addClass("hide"), !0);
}
function paddingForm() {
    gl_rt_isMobile && $(".read-assess-form").css("padding-bottom", `${$(".submit-container").outerHeight()}px`);
}
function rSelGender(n, t) {
    $(".rCfmInfo .cgd i").removeClass("icondetail-radcheck").addClass("icondetail-rad");
    $(n).find("i").removeClass("icondetail-rad").addClass("icondetail-radcheck");
    $(".rCfmInfo").attr("data-gender", t);
}
function resetRating() {
    console.log("rs rt");
    clearBorder();
    rating_popup.find(".ul-star li i").removeClass("active");
    rating_popup.find(".ul-star li p").removeClass("active-slt");
    rating_popup.find(".ul-orslt .btn-assess").removeClass("checkact");
    rating_popup.find("#hdfStar").val("0");
    rating_popup.find(".input [name=fRContent]").val("");
    rating_popup.find(".input [name=fRName]").val("");
    rating_popup.find(".input [name=fRPhone]").val("");
    rating_popup.find(".input [name=fREmail]").val("");
    rating_popup.find(".rsStar").html("");
    rating_popup.find(".rsStar").addClass("hide");
    rating_popup.find(".lbMsgRt").html("");
    rating_popup.find(".resRtImg").html("");
    rating_popup.find(".resRtImg").addClass("hide");
    rating_popup.find("#hdfRtImg").val("");
}
function countTxtRating() {
    var n = $(".frtip textarea").val().length,
        t;
    n > 0 && n < 80 ? ((t = n + " kĂ½ tá»± (tá»‘i thiá»ƒu 80)"), $(".mintext").html(t)) : $(".mintext").html("");
}
function getImgRating() {
    if ($(".resImg li").length > 0) {
        var n = "";
        $(".resImg li").each(function () {
            var t = $(this).attr("data-imgname");
            t != null && t != "" && (n += t + "â•¬");
        });
        $(".hdfRatingImg").val(n);
    }
}
function checkPopupRating() {
    setTimeout(function () {
        var t = getUrlParameter("popuprating"),
            n,
            i,
            r;
        t != null && t != ""
            ? (console.log("popuprating: " + t),
                (n = t.split("-")),
            n.length > 2 &&
            n[0] == 1 &&
            (rating_popup.find(".frtip").remove(),
                rating_popup.find(".fsrt").remove(),
                rating_popup.find(".wrap_fdback").removeClass("hide"),
                rating_popup.find(".wrap_fdback form.input").show(),
                (i = n[1]),
                (r = n[2]),
            i != null && i != "" && (rating_popup.find(".wrap_fdback .input [name='fRName']").val(i), rating_popup.find(".wrap_fdback .input [name='fRPhone']").val(r))))
            : rating_popup.find(".wrap_fdback").remove();
    }, 1e3);
}
function ratingSearch() {
    var n, t, i, r;
    if ((console.log("ratingSearch0618_m"), (n = $(".cmtKey").val()), (n = $.trim(n)), n === null || n === "" || n.length < 3)) return !1;
    t = $(".rtpLnk").attr("data-orgLnk") + "?key=" + encodeURI(n);
    $(".rtpLnk").prop("href", t);
    gl_sendRating = !0;
    i = window.location.origin + "/Rating/SearchRating/";
    r = { sKey: n, productID: gl_productID };
    $.ajax({
        url: i,
        type: "POST",
        data: r,
        cache: !1,
        beforeSend: function () {},
        success: function (n) {
            (n !== null || n !== "") &&
            ($(".rFound").remove(), $(".rtPage .ratingLst").remove(), $(".rtPage .pgrc").remove(), gl_rt_isMobile ? $(".rtPage .boxsort").after(n) : $(".rtPage .content-wrap .rtFilter").after(n), (gl_sendRating = !1));
            $(".frtip .wrap_seasort").hide();
        },
        error: function () {
            gl_sendRating = !1;
        },
    });
}
function showRtHis(n) {
    $(".rtHislbl").addClass("hide");
    $("#r-" + n + " .rtHislbl").removeClass("hide");
}
function rtHis(n) {
    var t = { cmtID: n, productID: gl_productID },
        i = window.location.origin + "/RatingV2/GetRatingHistory/";
    $(".wrap_His .hList").html("");
    $.ajax({
        url: i,
        type: "POST",
        data: t,
        cache: !1,
        beforeSend: function () {
            $(".show-history").remove();
        },
        success: function (n) {
            (n !== null || n !== "") && ($(".ratingLst").after(n), $(".show-history").fadeIn(400), gl_rt_isMobile || ($(".bgback").addClass("showbg"), gl_rt_isRatingPage || $(".locationbox_overlayaccess").show()), initRating());
        },
        error: function () {},
    });
}
function closePopupRating() {
    $(".wrap_wrtp").removeClass("hide").addClass("hide");
}
function showRtImgListPop() {
    console.log("showRtImgListPop_");
    gl_rt_isMobile
        ? ($(".gallery").addClass("showGlr"), $("body").css({ overflow: "hidden" }))
        : ($(".gallery").addClass("showGlr"), $("body").css({ overflow: "hidden" }), $(".bgback").addClass("showbg"), $(".locationbox_overlayaccess").show());
    $(".show-comment").removeClass("blockshow");
}
function getFileUpload() {
    gl_isFeedbackLoad ||
    $.getScript("/lib/jquery-upload/jquery.html5uploader.min.js?v=20220613").done(function () {
        gl_isFeedbackLoad = !0;
        initUploadRating();
    });
}
function getUrlParameter(n) {
    for (var u = decodeURIComponent(window.location.search.substring(1)), r = u.split("&"), t, i = 0; i < r.length; i++) if (((t = r[i].split("=")), t[0] === n)) return t[1] === undefined ? !0 : t[1];
}
function ratingCmtList(n, t) {
    var i, r, u, f, e, o;
    console.log("ratingCmtList_");
    $(".cmtKey").val("");
    $(".rFound").length > 0 && $(".rFound").remove();
    i = gl_rtCurStar;
    t !== null && t >= 0 ? ((i = t), (gl_rtCurStar = t)) : gl_rtCurStar >= 0 && (t = gl_rtCurStar);
    gl_rt_currentPage = parseInt(n);
    gl_rtCurStar = parseInt(t);
    r = 0;
    $(".cIsImg").length > 0 && (r = parseInt($(".cIsImg").attr("data-val")));
    r === 1 && (gl_rt_currentImg = !0);
    u = 0;
    $(".cIsBuy").length > 0 && (u = parseInt($(".cIsBuy").attr("data-val")));
    f = 0;
    $(".boxsort").length > 0 && (f = parseInt($(".boxsort").attr("data-val")));
    gl_rt_currentOrder = parseInt($(".frtip .ftR .o").attr("data-order"));
    gl_rt_currentPage = n;
    e = { productid: gl_productID, page: n, score: i, iIsImage: r, iIsBuy: u, iOrder: f };
    o = window.location.origin + "/Rating/RatingCommentList/";
    $(".frtip .ftR .s").removeClass("act");
    $(".frtip .ftR .s" + t).addClass("act");
    showloading();
    $.ajax({
        url: o,
        type: "POST",
        data: e,
        cache: !1,
        beforeSend: function () {
            $("#dlding").show();
        },
        success: function (n) {
            if (n != null || n != "")
                try {
                    $(".rtPage .ratingLst").remove();
                    $(".rtPage .pgrc").remove();
                    gl_rt_isMobile ? $(".rtPage .boxsort").after(n) : $(".rtPage .content-wrap .rtFilter").after(n);
                    $(".rtPage .filter-choose").length > 0 && ($(".rtPage .filter-choose a").removeClass("active"), $(".rtPage .filter-choose .rtF" + i).addClass("active"));
                    $(".rtPage .list .rtQRp").remove();
                    $(".wrap_slide .rat").remove();
                    initRating();
                    reloadRatingUrl();
                    reInitRatingImg();
                    $("img.lazy").trigger("sporty");
                    hideloading();
                    $("html, body").animate({ scrollTop: $(".boxsort").offset().top - 20 }, "slow");
                } catch (t) {
                    console.log(t);
                    hideloading();
                }
        },
        error: function () {},
    });
}
function showloading() {
    $(".loadingcover").show();
}
function hideloading() {
    $(".loadingcover").hide();
}
function reloadRatingUrl() {
    removeURLParameter("s");
    removeURLParameter("i");
    removeURLParameter("o");
    removeURLParameter("p");
    gl_rtCurStar !== null && gl_rtCurStar > 0 && window.history.replaceState("", "", updateURLParameter(window.location.href, "s", gl_rtCurStar));
    gl_rt_currentImg !== null && gl_rt_currentImg && window.history.replaceState("", "", updateURLParameter(window.location.href, "i", "1"));
    gl_rt_currentOrder !== null && gl_rt_currentOrder > 0 && window.history.replaceState("", "", updateURLParameter(window.location.href, "o", gl_rt_currentOrder));
    gl_rt_currentPage !== null && gl_rt_currentPage > 0 && window.history.replaceState("", "", updateURLParameter(window.location.href, "p", gl_rt_currentPage));
}
function reInitRatingImg() {
    $(".ratingLst .isBuy .rat img").attr("onclick", "");
    $(".ratingLst .isBuy .rat img").unbind();
    $(".ratingLst .isBuy .rat img").click(function () {
        console.log("img click_");
        $(".wrap_slide").removeClass("hide");
        var n = $(this).attr("data-id");
        $(".wrap_slide .item img").each(function (t) {
            $(this).attr("data-id") === n &&
            setTimeout(function () {
                var n = $(".owl-carousel");
                n.trigger("owl.goTo", t);
            }, 100);
        });
    });
    $(".wrap_fullImg img").unbind();
    $(".wrap_fullImg img").click(function () {
        console.log("img click_2");
        $(".wrap_fullImg").removeClass("hide").addClass("hide");
        $(".wrap_slide").removeClass("hide");
        var n = $(this).attr("data-id");
        $(".wrap_slide .item img").each(function (t) {
            $(this).attr("data-id") === n &&
            setTimeout(function () {
                var n = $(".owl-carousel");
                n.trigger("owl.goTo", t);
            }, 100);
        });
    });
}
function goToRSlideByAttID(n) {
    $(".rtAtt-" + n).click();
}
function goToRSlide(n) {
    initRtSlide();
    gl_rt_isMobile
        ? ($(".show-comment").removeClass("hide").addClass("blockshow"), $("body").css({ overflow: "hidden" }), $("html").css({ overflow: "hidden" }))
        : ($(".gallery").removeClass("showGlr"),
            $(".show-comment").removeClass("hide").addClass("blockshow"),
            $(".bgback").addClass("showbg"),
            $("body").css({ overflow: "hidden" }),
        gl_rt_isRatingPage || $(".locationbox_overlayaccess").show());
    $(".locationbox_overlayaccess").show();
    var n = parseInt(n);
    n > 0 && (gl_rt_isMobile ? $(".show-comment-main").trigger("to.owl.carousel", n - 1) : $("#cmt_sync1").trigger("to.owl.carousel", n - 1));
}
function updateURLParameter(n, t, i) {
    var e = "",
        r = n.split("?"),
        h = r[0],
        o = r[1],
        f = "",
        u,
        s;
    if (o) for (r = o.split("&"), u = 0; u < r.length; u++) r[u].split("=")[0] != t && ((e += f + r[u]), (f = "&"));
    return (s = f + "" + t + "=" + i), h + "?" + e + s;
}
function removeURLParameter(n) {
    var t = document.location.href,
        u = t.split("?"),
        r;
    if (u.length >= 2) {
        var f = u.shift(),
            e = u.join("?"),
            o = encodeURIComponent(n) + "=",
            i = e.split(/[&;]/g);
        for (r = i.length; r-- > 0; ) i[r].lastIndexOf(o, 0) !== -1 && i.splice(r, 1);
        t = f + "?" + i.join("&");
        window.history.pushState("", document.title, t);
    }
    return t;
}
function showInputRating(n, t) {
    if (gl_getJsCmt) {
        showRatingForm(n, t);
        return;
    }
    if (typeof cmtaddcommentclick == "undefined") {
        let i = $(".rating-cmt-info-js").attr("data-js");
        gl_getJsCmt = !0;
        $.getScript(i).done(function () {
            console.log("get script cmt: " + i);
            setTimeout(function () {
                let i = parseInt($(".rating-cmt-info-js").attr("siteid"));
                (i === 1 && cmtInitEvent(), gl_getJsCmtDmx) ||
                (i == 2 && ($(".midcmt .s_comment i").removeClass("icondmx-search").addClass("icon-search"), console.log("reInitCmt2021_"), (gl_getJsCmtDmx = !0)),
                $(".rating-cmt-info-js").attr("data-jsOvrCmt") != null &&
                $(".rating-cmt-info-js").attr("data-jsOvrCmt") != "" &&
                $.getScript($(".rating-cmt-info-js").attr("data-jsOvrCmt")).done(function () {
                    console.log("getOverrideScript jsOverride-CMT");
                    gl_getJsCmtDmx = !0;
                    reConfigCmtParam(i);
                    console.log(oParams);
                    showRatingForm(n, t);
                }));
            }, 200);
        });
    }
}
function showRatingForm(n, t) {
    rating_container = $(".rating-product");
    rating_block = $(t).closest(".rating-product__block");
    rating_popup = rating_container.find(".rating-product__popup[data-index=" + rating_block.data("index") + "]");
    productUrl = null;
    productUrl = rating_block.data("url");
    LoadJsComment();
    initRating();
    checkPopupRating();
    hideRtContentText();
    gl_rt_isMobile ? rating_popup.find(".read-assess").removeClass("hide").addClass("blockshow") : (rating_popup.find(".read-assess").removeClass("hide").addClass("showR"), $(".locationbox_overlayaccess").show());
    parseInt(n) > 0 &&
    rating_popup.find(".ul-star li").each(function () {
        parseInt($(this).attr("data-val")) <= n && $(this).click();
    });
    getOverrideScript(rating_block.data("index"));
}
function hideInputRating() {
    rating_popup.find(".fbDelImg").click();
    rating_popup.find("#hdfStar").val() > 0 ? (confirm("Chá» Ä‘Ă£! Báº¡n chÆ°a gá»­i Ä‘Ă¡nh giĂ¡, báº¡n cĂ³ cĂ³ muá»‘n gá»­i Ä‘i khĂ´ng?") ? submitRatingComment() : closeRatingForm()) : closeRatingForm();
}
function closeRatingForm() {
    rating_popup.find(".frtip .input").fadeOut();
    rating_popup.find(".frtip .cipRating").removeClass("hide").addClass("hide");
    rating_popup.find(".frtip .sRt").removeClass("hide");
    rating_popup.find(".lnkFbk").removeClass("hide");
    rating_popup.find(".frtip .fsrt a").attr("href", "javascript:showInputRating()");
    rating_popup.find(".frtip .fsrt a span").html("Gá»­i Ä‘Ă¡nh giĂ¡ cá»§a báº¡n");
    gl_rt_isMobile ? rating_popup.find(".read-assess").removeClass("blockshow").addClass("hide") : (rating_popup.find(".read-assess").removeClass("showR").addClass("hide"), $(".locationbox_overlayaccess").hide());
}
function closeRtGallery() {
    $(".bgback").removeClass("showbg");
    $(".show-comment").removeClass("blockshow").addClass("hide");
    $("body").css({ overflow: "" });
    $("html").css({ overflow: "" });
    gl_rt_isMobile || gl_rt_isRatingPage ? $(".locationbox_overlayaccess").length > 0 && $(".locationbox_overlayaccess").hide() : $(".locationbox_overlayaccess").hide();
}
function showReplyConfirmPopup() {
    var r = "tgdd_fullname",
        u = "tgdd_email",
        f = "tgdd_gender",
        e = "tgdd_phone";
    gl_rt_siteID == 2 && ((r = "dm_fullname"), (u = "dm_email"), (f = "dm_gender"), (e = "dm_phone"));
    var n = getCookie(r),
        t = getCookie(u),
        i = getCookie(e),
        o = getCookie(f);
    n != null && n != "" && ((n = Htmlentities(n)), $(".cfmUserName").val(n));
    t != null && t != "" && $(".cfmUserEmail").val(t);
    i != null && i != "" && $(".cfmPhone").val(i);
    parseInt(o) == 1 && $(".c_male").click();
    parseInt(o) == 2 && $(".c_female").click();
    gl_rt_isMobile ? $(".rRepPopup").removeClass("hide").addClass("blockshow") : ($(".rRepPopup").removeClass("hide").addClass("blockshow"), $(".locationbox_overlayaccess").show());
}
function rCmtConfirmUser() {
    var u = "tgdd_fullname",
        f = "tgdd_email",
        e = "tgdd_gender",
        o = "tgdd_phone",
        n,
        t,
        i,
        r;
    gl_rt_siteID == 2 && ((u = "dm_fullname"), (f = "dm_email"), (e = "dm_gender"), (o = "dm_phone"));
    n = $(".cfmUserName").val();
    n != null && n != "" && ((n = Htmlentities(n)), CreateCookie(u, n));
    t = $(".cfmUserEmail").val();
    t != null && t != "" && CreateCookie(f, t);
    i = $(".cfmPhone").val();
    i != null && i != "" && CreateCookie(o, i);
    r = parseInt($(".rCfmInfo").attr("data-gender"));
    (r == 1 || r == 2) && CreateCookie(e, r);
    $(".ifrl span").html(n);
    $(".ifrl").removeClass("hide");
    $(".ifrl a").html("Sá»­a tĂªn");
    hideReplyConfirmPopup();
}
function hideReplyConfirmPopup() {
    $(".rRepPopup").removeClass("blockshow").addClass("hide");
    gl_rt_isMobile || $(".locationbox_overlayaccess").hide();
}
function hideRtContentText() {
    var n = 310;
    gl_rt_isRatingPage != 1 || gl_rt_isMobile || (n = 600);
    rating_popup.find(".ratingLst .comment-content").each(function () {
        if ($(this).find(".cmt-txt").length > 0 && $(this).find(".cmt-txt").html().length > n) {
            $(this).find(".cmt-txt").addClass("hideRtCt");
            var t = $(this).parent().attr("id");
            $(this).after("<span class='sRtXt' onclick='showFullRtCt(this)'>Xem tiáº¿p â–¾ </span>");
        }
    });
    rating_popup.find(".show-comment-main .comment-content").each(function () {
        if ($(this).find(".cmt-txt").length > 0 && $(this).find(".cmt-txt").html().length > 120) {
            $(this).find(".cmt-txt").addClass("hideRtCt");
            var n = $(this).attr("data-id");
            $(this).after('<span class="sRtXt sRtXt' + n + '" onclick="showFullRtCtPop(\'' + n + "')\">Xem tiáº¿p â–¾ </span>");
        }
    });
}
function showFullRtCt(n) {
    var t = $(n).parent().attr("id");
    $("#" + t + " .cmt-txt").removeClass("hideRtCt");
    $(n).remove();
}
function showFullRtCtPop(n) {
    $(".crtipu-" + n + " .cmt-txt").removeClass("hideRtCt");
    $(".sRtXt" + n).remove();
}
function calSizeThumpRtImg() {
    if (gl_rt_isMobile && window.screen.width >= 320 && window.screen.width <= 640) {
        var n = window.screen.width / 5 - 8;
        $(".rtPage .rating-img .rating-img-list .js-Showcmt img").each(function () {
            $(this).css("width", n + "px");
            $(this).css("height", n + "px");
        });
    }
}
function cmtValidateEmail(n) {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(n);
}
function Htmlentities(n) {
    return n.replace(/[\u00A0-\u9999<>\&]/g, function (n) {
        return "&#" + n.charCodeAt(0) + ";";
    });
}
function CreateCookie(n, t, i) {
    var r = new Date(),
        u;
    r.setDate(r.getDate() + i);
    u = escape(t) + (i == null ? "" : "; visited=true; path=/; domain=" + rooturl + "; expires=" + r.toUTCString() + ";");
    document.cookie = n + "=" + u;
}
function CreateCookieWithHour(n, t, i) {
    var r = new Date(),
        u;
    r.setMinutes(r.getMinutes() + i);
    u = escape(t) + (i == null ? "" : "; visited=true; path=/; domain=" + rooturl + "; expires=" + r.toUTCString() + ";");
    document.cookie = n + "=" + u;
}
function Delete_Cookie(n, t, i) {
    getCookie(n) && (document.cookie = n + "=" + (t ? ";path=" + t : "") + (i ? ";domain=" + i : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT");
}
function SetAllContentAttr() {
    let n = $(".option-sg a.active");
    n.each(function () {
        let n = $(this),
            t = n.closest(".daily-sg").find(".box-common__content:not([data-is-recommend-tab]):not([data-campaign]):not([data-group])");
        t != null &&
        (n.data("is-recommend-tab") != null && t.attr("data-is-recommend-tab", n.data("is-recommend-tab")),
        n.data("campaign") != null && t.attr("data-campaign", n.data("campaign")),
        n.data("group") != null && t.attr("data-group", n.data("group")));
    });
    let t = $("ul.box-common__tab li.active-tab");
    t.each(function () {
        let n = $(this),
            t = n.closest(".box-common").find(".box-common__content:not([data-cate-id]):not([data-prop-id]):not([data-prop-value-ids]):not([data-html-id]):not([data-product-ids]):not([data-url]):not([data-name]):not([data-frame])");
        t != null &&
        (n.data("cate-id") != null && t.attr("data-cate-id", n.data("cate-id")),
        n.data("prop-id") != null && t.attr("data-prop-id", n.data("prop-id")),
        n.data("prop-value-ids") != null && t.attr("data-prop-value-ids", n.data("prop-value-ids")),
        n.data("html-id") != null && t.attr("data-html-id", n.data("html-id")),
        n.data("product-ids") != null && t.attr("data-product-ids", n.data("product-ids")),
        n.data("url") != null && t.attr("data-url", n.data("url")),
        n.data("name") != null && t.attr("data-name", n.data("name")),
        n.data("frame") != null && t.attr("data-frame", n.data("frame")));
    });
}
function InitCarousel() {
    if ($(".home-slider.big-campaign").length > 0) {
        let n = $(".contain-banner .slider-banner a > img").height();
        $(".contain-banner .slider-banner").css("max-height", n);
    }
    $(".slider-banner").owlCarousel({ items: 1, loop: !0, dots: !0, margin: 5, nav: !1, autoplay: !0, autoplayTimeout: 1e4, autoplayHoverPause: !0 });
    $(".prd-another .item a img").css("height", `${Math.min(screen.width - 20, 640) / 3}px`);
    $(".discount-payonl .scroll-box").owlCarousel({ items: 1, loop: !1, dots: !0, margin: 0, nav: !1, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0 });
}
function InitOwlCarousel() {
    $(".discount-payonl .home-slider .slider-banner").owlCarousel({ items: 1, loop: !1, dots: !1, margin: 0, nav: !0, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0, slideBy: "page", rewind: !0 });
    $(".slider-banner").each(function () {
        var t = 3,
            n = 30;
        $(this).hasClass("home-top") && ((n = 10), (t = 2));
        $(this).parents(".another-slider").length && (n = 0);
        $(this).owlCarousel({ items: t, loop: !1, dots: !1, margin: n, nav: !0, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !0, slideBy: "page", rewind: !0 });
    });
    sliderPromoInitCarousel();
    $(".advise-slider").owlCarousel({ items: 3, margin: 10, slideBy: "page", nav: !0, rewind: !0, dots: !1 });
    $(".trademark-slider").owlCarousel({ items: 3, margin: 10, nav: !0, slideBy: "page", dots: !1, rewind: !0 });
}
function ConvertToArray(n) {
    let t = [];
    if (n != null) t = JSON.parse("[" + n.toString().replace(/[\u200B-\u200D\uFEFF]/g, "") + "]");
    return t;
}
function sliderPromoInitCarousel() {
    owlSliderPromo = $(".slider-promo").owlCarousel({ nav: !0, items: 5, nav: !0, dots: !1, slideBy: "page", rewind: !0, smartSpeed: 100 });
}
function InitProductOwlCarousel(n) {
    n.owlCarousel({ nav: !0, items: 5, slideBy: "page", rewind: !0, dots: !1, smartSpeed: 100 });
}
function InitInviteRatingOwlCarousel(n) {
    let t = n.find(".rating-product__block").length,
        i = n.data("max-item"),
        r = 0;
    r = t < i ? t : i;
    let u = 70;
    n.on("translate.owl.carousel", function () {
        setTimeout(function () {
            let t = n.find(".owl-item");
            t.last().hasClass("active") ? n.removeClass("padding-right") : n.addClass("padding-right");
            t.first().hasClass("active") ? n.removeClass("padding-left") : (n.addClass("padding-left"), n.find(".owl-stage").css("padding-left", `${u * 2}px`));
        }, 1);
    }).owlCarousel({ items: r, slideBy: "page", rewind: !0, dots: !1, margin: 10, nav: !0, lazyLoad: !0, stagePadding: n.data("has-half-item") ? u : 0 });
}
function ShowHideStickyButton() {
    let t = $(".bg-tophome"),
        n = $(".sticky-button");
    t.isInViewport() ? n.hide() : sessionStorage.getItem(keyStickyButton) == null && n.show();
}
function GetPopupRemindGiftVoucher() {
    var n = getCookie(getRemindGiftVoucherCookieName());
    console.log("CK_NAME:", getRemindGiftVoucherCookieName());
    console.log("CK_Val: ", n);
    n != "" &&
    n != undefined &&
    n != null &&
    $.ajax({
        url: "/cart/api/Common/getpopupremindgiftvoucher",
        method: "GET",
        beforeSend: function () {},
        success: function (n) {
            $("body").append(n);
        },
        complete: function () {},
    });
}
function GetRatingOrderHistoryBox() {
    if (!IsLoadRatingBox) {
        let n = decodeURIComponent(getCookie("_mwgorhis"));
        n != "" &&
        n != undefined &&
        n != null &&
        setTimeout(function () {
            $.ajax({
                url: "/HomeV2/GetRatingOrderHistory",
                method: "GET",
                cache: !1,
                beforeSend: function () {},
                success: function (n) {
                    var t = $("#rating-order-history-box");
                    t.html(n);
                    t.show();
                    InitInviteRatingOwlCarousel($(".slide-cmt.owl-carousel"));
                    $(".rating-product__block").each(function () {
                        let n = $(this).data("index");
                        gl_isGetScriptMap.set(`gl_isGetScript${n}`, !1);
                        uploadedFileMap.set(`uploadedFile${n}`, 0);
                    });
                },
                complete: function () {
                    IsLoadRatingBox = !0;
                },
            });
        }, 3e3);
    }
}
function ShowStickyButton() {
    var n = sessionStorage.getItem(keyStickyButton);
    n == null && $(".sticky-button").show();
}
function RemoveStickyButton() {
    sessionStorage.setItem(keyStickyButton, !1);
    $(".sticky-button").hide();
}
function trickJqueryEvent() {
    jQuery.event.special.touchstart = {
        setup: function (n, t, i) {
            this.addEventListener("touchstart", i, { passive: !t.includes("noPreventDefault") });
        },
    };
    jQuery.event.special.touchmove = {
        setup: function (n, t, i) {
            this.addEventListener("touchmove", i, { passive: !t.includes("noPreventDefault") });
        },
    };
    jQuery.event.special.wheel = {
        setup: function (n, t, i) {
            this.addEventListener("wheel", i, { passive: !0 });
        },
    };
    jQuery.event.special.mousewheel = {
        setup: function (n, t, i) {
            this.addEventListener("mousewheel", i, { passive: !0 });
        },
    };
}
function IsPersonalizeUser() {
    if (isRunLive && gbl_siteId == 2 && !1) {
        let i = "mwgisper",
            t = getCookie(i);
        if (t != undefined && t != null && t != "") return t == 1 ? !0 : !1;
        var n = Math.floor(Math.random() * 100) + 1 > 50;
        return (document.cookie = i + "=" + (n ? 1 : 0) + ";expires=" + new Date(new Date().setHours(23, 59, 59, 999) - 252e5) + ";path=/"), n;
    }
    return !1;
}
function GetPredictedProduct() {
    let n = $(".daily-sg .block-product"),
        t = n.find(".preloader");
    $.ajax({
        url: "/HomeV2/GetPredictedProduct",
        method: "GET",
        cache: !1,
        beforeSend: function () {
            t.show();
        },
        success: function (t) {
            let i = $(t);
            i.find(".listproduct").length && n.find(".box-common__content").html(i.children());
        },
        complete: function () {
            t.hide();
        },
    });
}
function flashsaleCountdown() {
    var o = $(".flashsale-block .endtime").data("countdown"),
        f = new Date(o),
        u,
        t;
    if (((f = Date.parse(f) / 1e3), (u = new Date()), (u = Date.parse(u) / 1e3), (t = f - u), t < 0)) {
        callHotDealHome();
        clearInterval(intervalFS);
        return;
    }
    var e = Math.floor(t / 86400),
        n = Math.floor((t - e * 86400) / 3600),
        i = Math.floor((t - e * 86400 - n * 3600) / 60),
        r = Math.floor(t - e * 86400 - n * 3600 - i * 60);
    if ((n < "10" && (n = "0" + n), i < "10" && (i = "0" + i), r < "10" && (r = "0" + r), parseInt(n) <= 0 && parseInt(i) <= 0 && parseInt(r) <= 0)) {
        $(".flashsale-block").addClass("shutdown");
        setTimeout(function () {
            $(".flashsale-block").hide();
            $(".hotdeal").css("opacity", "0").removeClass("hide");
            setTimeout(function () {
                $(".hotdeal").css("opacity", "1");
                clearInterval(intervalFS);
            }, 1e3);
        }, 1500);
        return;
    }
    $("#hour").html(n);
    $("#minute").html(i);
    $("#second").html(r);
    $(".countdown-timer").removeClass("calling");
}
function slickFS() {
    if ($(".slider-flashsale").data("mobile") != 1 && $(".slider-flashsale .item").length)
        if ($(".slider-flashsale .item").length >= 12)
            $(".slider-flashsale").removeClass("owl-carousel"),
                $(".slider-flashsale").addClass("has-slick"),
                $(".slider-flashsale").slick({
                    rows: 2,
                    dots: !1,
                    arrows: !0,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"></button>',
                });
        else {
            let n = $(".slider-flashsale");
            n.addClass("owl-carousel");
            n.removeClass("has-slick");
            $(".slider-flashsale.owl-loaded").length && n.owlCarousel("destroy");
            n.owlCarousel({ items: 6, loop: !0, nav: !0, dots: !1, autoplay: !0, autoplayTimeout: 1e4, autoplayHoverPause: !0, slideBy: "page" });
        }
}
function callHotDealHome() {
    typeof owlSliderPromo != "undefined" &&
    (owlSliderPromo.trigger("destroy.owl.carousel"),
        setTimeout(function () {
            sliderPromoInitCarousel();
        }, 1e3));
    $(".hotdeal").removeClass("hide");
}
function GetCrmFS() {
    $(".flashsale-block .slider-flashsale .item").each(function () {
        var i = $(this).data("id"),
            n = $(this);
        let t = n.find("a").data("crm");
        $.ajax({
            url: "/HomeV2/GetCrmCountByProductId",
            data: { productId: i, saleProgramId: t > 0 ? t : 0, beginfsdatetime: $(".flashsale-block .endtime").data("begin") },
            cache: !1,
            type: "POST",
            async: !0,
            beforeSend: function () {},
            success: function (t) {
                n.find(".fs-contain").hide().html(t).fadeIn();
                MoveSoldOutLayer(n);
            },
            error: function (n) {
                console.log(n);
            },
        });
    });
}
function GetListCrmFS() {
    $(".flashsale-block .slider-flashsale .item").each(function () {
        var i = $(this).data("id"),
            n = $(this).find("a").data("crm"),
            r = $(this),
            t;
        n > 0 != !1 && ((t = { ProductId: i, CrmProgramId: n, htmlViewResult: "" }), lstJsonModel.push(t));
    });
    $.ajax({
        url: "/HomeV2/GetCrmCountByProductList",
        data: { jsonModel: lstJsonModel, beginfsdatetime: $(".flashsale-block .endtime").data("begin") },
        cache: !1,
        type: "POST",
        async: !0,
        beforeSend: function () {},
        success: function (n) {
            if (n !== undefined && n.success === !0) {
                var t = n.result;
                $(".flashsale-block .slider-flashsale .item").each(function () {
                    let n = t.find((n) => n.productId == $(this).data("id"));
                    if (n !== undefined && n !== null) {
                        var i = $(this);
                        i.find(".fs-contain").hide().html(n.htmlViewResult).fadeIn();
                        MoveSoldOutLayer(i);
                    }
                });
            }
        },
        error: function (n) {
            console.log(n);
        },
    });
}
function MoveSoldOutLayer(n) {
    let t = n.find(".fs-contain"),
        i = t.find(".rq_count.fscount");
    i.hasClass("sold-out") && (i.removeClass("sold-out"), n.addClass("sold-out"), n.find(".item-img").append(t.find(".layer-sold-out")));
}
var gl_getJsCmt = !1,
    gl_getJsCmtDmx = !1,
    gl_siteID = 1,
    comment_cdn = "https://www.thegioididong.com/commentnew",
    tgddc_urlroot = "//www.thegioididong.com/commentnew",
    comment_detailmobile = "commentMWG_21",
    gl_rtCurStar,
    gl_sendRating,
    owlSliderPromo,
    IsLoadRatingBox,
    keyStickyButton,
    intervalFS,
    lstJsonModel;
const uploadedFileMap = new Map();
$(document).ready(function () {
    if ($(".rating-cmt-info-js").length != 0) {
        var n = parseInt($(".rating-cmt-info-js").attr("siteid"));
        n == 2 && ((gl_siteID = 2), (comment_cdn = "https://cdn.tgdd.vn/dienmay2015/comment"), (tgddc_urlroot = "//www.dienmayxanh.com/comment"));
        $(window).scroll(function () {});
    }
});
var rooturl = null,
    gl_productID = null,
    gl_isFeedbackLoad = !1,
    gl_rt_currentPage = 0,
    gl_rtCurStar = 0,
    gl_rt_currentImg = !1,
    gl_rt_currentOrder = 1,
    gl_rt_siteID = 1,
    gl_rt_isRatingPage = 0,
    gl_rt_isMobile = null,
    rating_container = null,
    rating_block = null,
    rating_popup = null,
    productUrl = null;
const gl_isGetScriptMap = new Map();
$(document).ready(function () {
    console.log("rtPage_m_v2");
    $(document).on("click", ".rating-product .close-cmt", function () {
        let t = $(".rating-product"),
            i = $(this),
            n = i.closest(".rating-product__block"),
            r = t.find(".rating-product__popup[data-index=" + n.data("index") + "]"),
            u = n.data("phone"),
            f = n.data("order-detail-id");
        var e = { customerPhone: u, orderDetailId: f };
        $.ajax({
            url: "/Home/HideInviteRatingProduct",
            data: e,
            method: "POST",
            beforeSend: function () {},
            success: function (i) {
                i.code == 200 && RemoveBlockPopup(t, n, r);
            },
            error: function () {},
        });
    });
    $(document).on("click", ".rt-success-popup__close", function () {
        $(".locationbox_overlayaccess").hide();
        $(this).closest(".rt-success-popup").remove();
    });
});
gl_rtCurStar = 0;
gl_sendRating = !1;
!(function (n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? (module.exports = n(require("jquery"))) : n(jQuery);
})(function (n) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
        var t = 0;
        return function (i, r) {
            var f,
                u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(i),
                appendDots: n(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, i) {
                    return n('<button type="button" />').text(i + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1,
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.focussed = !1;
            u.interrupted = !1;
            u.hidden = "hidden";
            u.paused = !0;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(i);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(i).data("slick") || {};
            u.options = n.extend({}, u.defaults, r, f);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            void 0 !== document.mozHidden ? ((u.hidden = "mozHidden"), (u.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((u.hidden = "webkitHidden"), (u.visibilityChange = "webkitvisibilitychange"));
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.instanceUid = t++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    };
    t.prototype.addSlide = t.prototype.slickAdd = function (t, i, r) {
        var u = this;
        if ("boolean" == typeof i) (r = i), (i = null);
        else if (i < 0 || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i
            ? 0 === i && 0 === u.$slides.length
                ? n(t).appendTo(u.$slideTrack)
                : r
                    ? n(t).insertBefore(u.$slides.eq(i))
                    : n(t).insertAfter(u.$slides.eq(i))
            : !0 === r
                ? n(t).prependTo(u.$slideTrack)
                : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function (t, i) {
            n(i).attr("data-slick-index", t);
        });
        u.$slidesCache = u.$slides;
        u.reinit();
    };
    t.prototype.animateHeight = function () {
        var n = this,
            t;
        1 === n.options.slidesToShow && !0 === n.options.adaptiveHeight && !1 === n.options.vertical && ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)), n.$list.animate({ height: t }, n.options.speed));
    };
    t.prototype.animateSlide = function (t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        !0 === r.options.rtl && !1 === r.options.vertical && (t = -t);
        !1 === r.transformsEnabled
            ? !1 === r.options.vertical
                ? r.$slideTrack.animate({ left: t }, r.options.speed, r.options.easing, i)
                : r.$slideTrack.animate({ top: t }, r.options.speed, r.options.easing, i)
            : !1 === r.cssTransitions
                ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
                    n({ animStart: r.currentLeft }).animate(
                        { animStart: t },
                        {
                            duration: r.options.speed,
                            easing: r.options.easing,
                            step: function (n) {
                                n = Math.ceil(n);
                                !1 === r.options.vertical ? ((u[r.animType] = "translate(" + n + "px, 0px)"), r.$slideTrack.css(u)) : ((u[r.animType] = "translate(0px," + n + "px)"), r.$slideTrack.css(u));
                            },
                            complete: function () {
                                i && i.call();
                            },
                        }
                    ))
                : (r.applyTransition(),
                    (t = Math.ceil(t)),
                    (u[r.animType] = !1 === r.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)"),
                    r.$slideTrack.css(u),
                i &&
                setTimeout(function () {
                    r.disableTransition();
                    i.call();
                }, r.options.speed));
    };
    t.prototype.getNavTarget = function () {
        var i = this,
            t = i.options.asNavFor;
        return t && null !== t && (t = n(t).not(i.$slider)), t;
    };
    t.prototype.asNavFor = function (t) {
        var i = this.getNavTarget();
        null !== i &&
        "object" == typeof i &&
        i.each(function () {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0);
        });
    };
    t.prototype.applyTransition = function (n) {
        var t = this,
            i = {};
        i[t.transitionType] = !1 === t.options.fade ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.autoPlay = function () {
        var n = this;
        n.autoPlayClear();
        n.slideCount > n.options.slidesToShow && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed));
    };
    t.prototype.autoPlayClear = function () {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
    };
    t.prototype.autoPlayIterator = function () {
        var n = this,
            t = n.currentSlide + n.options.slidesToScroll;
        n.paused ||
        n.interrupted ||
        n.focussed ||
        (!1 === n.options.infinite &&
        (1 === n.direction && n.currentSlide + 1 === n.slideCount - 1 ? (n.direction = 0) : 0 === n.direction && ((t = n.currentSlide - n.options.slidesToScroll), n.currentSlide - 1 == 0 && (n.direction = 1))),
            n.slideHandler(t));
    };
    t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
        ((t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow")),
            (t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow")),
            t.slideCount > t.options.slidesToShow
                ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    };
    t.prototype.buildDots = function () {
        var i,
            r,
            t = this;
        if (!0 === t.options.dots) {
            for (t.$slider.addClass("slick-dotted"), r = n("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = r.appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active");
        }
    };
    t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function (t, i) {
            n(i)
                .attr("data-slick-index", t)
                .data("originalStyling", n(i).attr("style") || "");
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        !0 === t.options.draggable && t.$list.addClass("draggable");
    };
    t.prototype.buildRows = function () {
        var t,
            i,
            r,
            f,
            c,
            u,
            e,
            n = this,
            o,
            s,
            h;
        if (((f = document.createDocumentFragment()), (u = n.$slider.children()), n.options.rows > 1)) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; t < c; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) (h = t * e + (i * n.options.slidesPerRow + r)), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s);
                }
                f.appendChild(o);
            }
            n.$slider.empty().append(f);
            n.$slider
                .children()
                .children()
                .children()
                .css({ width: 100 / n.options.slidesPerRow + "%", display: "inline-block" });
        }
    };
    t.prototype.checkResponsive = function (t, i) {
        var f,
            u,
            e,
            r = this,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if (("window" === r.respondTo ? (e = h) : "slider" === r.respondTo ? (e = s) : "min" === r.respondTo && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (!1 === r.originalSettings.mobileFirst ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u
                ? null !== r.activeBreakpoint
                    ? (u !== r.activeBreakpoint || i) &&
                    ((r.activeBreakpoint = u),
                        "unslick" === r.breakpointSettings[u] ? r.unslick(u) : ((r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u])), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                        (o = u))
                    : ((r.activeBreakpoint = u),
                        "unslick" === r.breakpointSettings[u] ? r.unslick(u) : ((r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u])), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                        (o = u))
                : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), (o = u));
            t || !1 === o || r.$slider.trigger("breakpoint", [r, o]);
        }
    };
    t.prototype.changeSlide = function (t, i) {
        var f,
            e,
            o,
            r = this,
            u = n(t.currentTarget),
            s;
        switch ((u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), (o = r.slideCount % r.options.slidesToScroll != 0), (f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), t.data.message)) {
            case "previous":
                e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = 0 === f ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return;
        }
    };
    t.prototype.checkNavigable = function (n) {
        var t, i, r;
        if (((t = this.getNavigableIndexes()), (i = 0), n > t[t.length - 1])) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break;
                }
                i = t[r];
            }
        return n;
    };
    t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
        null !== t.$dots &&
        (n("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", n.proxy(t.interrupt, t, !0)).off("mouseleave.slick", n.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler));
        t.$slider.off("focus.slick blur.slick");
        !0 === t.options.arrows &&
        t.slideCount > t.options.slidesToShow &&
        (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler)));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.cleanUpSlideEvents();
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
    };
    t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.cleanUpRows = function () {
        var t,
            n = this;
        n.options.rows > 1 && ((t = n.$slides.children().children()).removeAttr("style"), n.$slider.empty().append(t));
    };
    t.prototype.clickHandler = function (n) {
        !1 === this.shouldClick && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault());
    };
    t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow &&
        i.$prevArrow.length &&
        (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow &&
        i.$nextArrow.length &&
        (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides &&
        (i.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
                n(this).attr("style", n(this).data("originalStyling"));
            }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.$slider.removeClass("slick-dotted");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i]);
    };
    t.prototype.disableTransition = function (n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.fadeSlide = function (n, t) {
        var i = this;
        !1 === i.cssTransitions
            ? (i.$slides.eq(n).css({ zIndex: i.options.zIndex }), i.$slides.eq(n).animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
            : (i.applyTransition(n),
                i.$slides.eq(n).css({ opacity: 1, zIndex: i.options.zIndex }),
            t &&
            setTimeout(function () {
                i.disableTransition(n);
                t.call();
            }, i.options.speed));
    };
    t.prototype.fadeSlideOut = function (n) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(n).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function (n) {
        var t = this;
        null !== n && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit());
    };
    t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function () {
                t.options.pauseOnFocus && ((t.focussed = r.is(":focus")), t.autoPlay());
            }, 0);
        });
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
    };
    t.prototype.getDotCount = function () {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (!0 === n.options.infinite)
            if (n.slideCount <= n.options.slidesToShow) ++t;
            else for (; i < n.slideCount; ) ++t, (i = r + n.options.slidesToScroll), (r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        else if (!0 === n.options.centerMode) t = n.slideCount;
        else if (n.options.asNavFor) for (; i < n.slideCount; ) ++t, (i = r + n.options.slidesToScroll), (r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        else t = 1 + Math.ceil((n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll);
        return t - 1;
    };
    t.prototype.getLeft = function (n) {
        var f,
            r,
            i,
            e,
            t = this,
            u = 0;
        return (
            (t.slideOffset = 0),
                (r = t.$slides.first().outerHeight(!0)),
                !0 === t.options.infinite
                    ? (t.slideCount > t.options.slidesToShow &&
                    ((t.slideOffset = t.slideWidth * t.options.slidesToShow * -1),
                        (e = -1),
                    !0 === t.options.vertical && !0 === t.options.centerMode && (2 === t.options.slidesToShow ? (e = -1.5) : 1 === t.options.slidesToShow && (e = -2)),
                        (u = r * t.options.slidesToShow * e)),
                    t.slideCount % t.options.slidesToScroll != 0 &&
                    n + t.options.slidesToScroll > t.slideCount &&
                    t.slideCount > t.options.slidesToShow &&
                    (n > t.slideCount
                        ? ((t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1), (u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1))
                        : ((t.slideOffset = (t.slideCount % t.options.slidesToScroll) * t.slideWidth * -1), (u = (t.slideCount % t.options.slidesToScroll) * r * -1))))
                    : n + t.options.slidesToShow > t.slideCount && ((t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth), (u = (n + t.options.slidesToShow - t.slideCount) * r)),
            t.slideCount <= t.options.slidesToShow && ((t.slideOffset = 0), (u = 0)),
                !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow
                    ? (t.slideOffset = (t.slideWidth * Math.floor(t.options.slidesToShow)) / 2 - (t.slideWidth * t.slideCount) / 2)
                    : !0 === t.options.centerMode && !0 === t.options.infinite
                        ? (t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth)
                        : !0 === t.options.centerMode && ((t.slideOffset = 0), (t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2))),
                (f = !1 === t.options.vertical ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u),
            !0 === t.options.variableWidth &&
            ((i = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow)),
                (f = !0 === t.options.rtl ? (i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
            !0 === t.options.centerMode &&
            ((i = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1)),
                (f = !0 === t.options.rtl ? (i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                (f += (t.$list.width() - i.outerWidth()) / 2))),
                f
        );
    };
    t.prototype.getOption = t.prototype.slickGetOption = function (n) {
        return this.options[n];
    };
    t.prototype.getNavigableIndexes = function () {
        var i,
            n = this,
            t = 0,
            r = 0,
            u = [];
        for (!1 === n.options.infinite ? (i = n.slideCount) : ((t = -1 * n.options.slidesToScroll), (r = -1 * n.options.slidesToScroll), (i = 2 * n.slideCount)); t < i; )
            u.push(t), (t = r + n.options.slidesToScroll), (r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow);
        return u;
    };
    t.prototype.getSlick = function () {
        return this;
    };
    t.prototype.getSlideCount = function () {
        var i,
            r,
            t = this;
        return (
            (r = !0 === t.options.centerMode ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0),
                !0 === t.options.swipeToSlide
                    ? (t.$slideTrack.find(".slick-slide").each(function (u, f) {
                        if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return (i = f), !1;
                    }),
                    Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1)
                    : t.options.slidesToScroll
        );
    };
    t.prototype.goTo = t.prototype.slickGoTo = function (n, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(n) } }, t);
    };
    t.prototype.init = function (t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") ||
        (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler());
        t && i.$slider.trigger("init", [i]);
        !0 === i.options.accessibility && i.initADA();
        i.options.autoplay && ((i.paused = !1), i.autoPlay());
    };
    t.prototype.initADA = function () {
        var t = this,
            f = Math.ceil(t.slideCount / t.options.slidesToShow),
            r = t.getNavigableIndexes().filter(function (n) {
                return n >= 0 && n < t.slideCount;
            }),
            i,
            u;
        for (
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
            null !== t.$dots &&
            (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                var u = r.indexOf(i);
                n(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + i, tabindex: -1 });
                -1 !== u && n(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + u });
            }),
                t.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function (i) {
                        var u = r[i];
                        n(this).attr({ role: "presentation" });
                        n(this)
                            .find("button")
                            .first()
                            .attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + i, "aria-controls": "slick-slide" + t.instanceUid + u, "aria-label": i + 1 + " of " + f, "aria-selected": null, tabindex: "-1" });
                    })
                    .eq(t.currentSlide)
                    .find("button")
                    .attr({ "aria-selected": "true", tabindex: "0" })
                    .end()),
                i = t.currentSlide,
                u = i + t.options.slidesToShow;
            i < u;
            i++
        )
            t.$slides.eq(i).attr("tabindex", 0);
        t.activateADA();
    };
    t.prototype.initArrowEvents = function () {
        var n = this;
        !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        (n.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, n.changeSlide),
            n.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, n.changeSlide),
        !0 === n.options.accessibility && (n.$prevArrow.on("keydown.slick", n.keyHandler), n.$nextArrow.on("keydown.slick", n.keyHandler)));
    };
    t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (n("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler));
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.interrupt, t, !0)).on("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1)));
    };
    t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.initSlideEvents();
        t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(t.setPosition);
    };
    t.prototype.initUI = function () {
        var n = this;
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        !0 === n.options.dots && n.slideCount > n.options.slidesToShow && n.$dots.show();
    };
    t.prototype.keyHandler = function (n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === n.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
            : 39 === n.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
    };
    t.prototype.lazyLoad = function () {
        function f(i) {
            n("img[data-lazy]", i).each(function () {
                var i = n(this),
                    r = n(this).attr("data-lazy"),
                    f = n(this).attr("data-srcset"),
                    e = n(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
                    u = document.createElement("img");
                u.onload = function () {
                    i.animate({ opacity: 0 }, 100, function () {
                        f && (i.attr("srcset", f), e && i.attr("sizes", e));
                        i.attr("src", r).animate({ opacity: 1 }, 200, function () {
                            i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        });
                        t.$slider.trigger("lazyLoaded", [t, i, r]);
                    });
                };
                u.onerror = function () {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    t.$slider.trigger("lazyLoadError", [t, i, r]);
                };
                u.src = r;
            });
        }
        var u,
            i,
            r,
            t = this;
        if (
            (!0 === t.options.centerMode
                ? !0 === t.options.infinite
                    ? (r = (i = t.currentSlide + (t.options.slidesToShow / 2 + 1)) + t.options.slidesToShow + 2)
                    : ((i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1))), (r = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide))
                : ((i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide), (r = Math.ceil(i + t.options.slidesToShow)), !0 === t.options.fade && (i > 0 && i--, r <= t.slideCount && r++)),
                (u = t.$slider.find(".slick-slide").slice(i, r)),
            "anticipated" === t.options.lazyLoad)
        )
            for (var e = i - 1, o = r, s = t.$slider.find(".slick-slide"), h = 0; h < t.options.slidesToScroll; h++) e < 0 && (e = t.slideCount - 1), (u = (u = u.add(s.eq(e))).add(s.eq(o))), e--, o++;
        f(u);
        t.slideCount <= t.options.slidesToShow
            ? f(t.$slider.find(".slick-slide"))
            : t.currentSlide >= t.slideCount - t.options.slidesToShow
                ? f(t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow))
                : 0 === t.currentSlide && f(t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow));
    };
    t.prototype.loadSlider = function () {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({ opacity: 1 });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad();
    };
    t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } });
    };
    t.prototype.orientationChange = function () {
        var n = this;
        n.checkResponsive();
        n.setPosition();
    };
    t.prototype.pause = t.prototype.slickPause = function () {
        var n = this;
        n.autoPlayClear();
        n.paused = !0;
    };
    t.prototype.play = t.prototype.slickPlay = function () {
        var n = this;
        n.autoPlay();
        n.options.autoplay = !0;
        n.paused = !1;
        n.focussed = !1;
        n.interrupted = !1;
    };
    t.prototype.postSlide = function (t) {
        var i = this;
        i.unslicked ||
        (i.$slider.trigger("afterChange", [i, t]),
            (i.animating = !1),
        i.slideCount > i.options.slidesToShow && i.setPosition(),
            (i.swipeLeft = null),
        i.options.autoplay && i.autoPlay(),
        !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && n(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
    };
    t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } });
    };
    t.prototype.preventDefault = function (n) {
        n.preventDefault();
    };
    t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var r,
            u,
            f,
            e,
            o,
            i = this,
            s = n("img[data-lazy]", i.$slider);
        s.length
            ? ((r = s.first()),
                (u = r.attr("data-lazy")),
                (f = r.attr("data-srcset")),
                (e = r.attr("data-sizes") || i.$slider.attr("data-sizes")),
                ((o = document.createElement("img")).onload = function () {
                    f && (r.attr("srcset", f), e && r.attr("sizes", e));
                    r.attr("src", u).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                    !0 === i.options.adaptiveHeight && i.setPosition();
                    i.$slider.trigger("lazyLoaded", [i, r, u]);
                    i.progressiveLazyLoad();
                }),
                (o.onerror = function () {
                    t < 3
                        ? setTimeout(function () {
                            i.progressiveLazyLoad(t + 1);
                        }, 500)
                        : (r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, r, u]), i.progressiveLazyLoad());
                }),
                (o.src = u))
            : i.$slider.trigger("allImagesLoaded", [i]);
    };
    t.prototype.refresh = function (t) {
        var r,
            u,
            i = this;
        u = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > u && (i.currentSlide = u);
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0);
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, { currentSlide: r });
        i.init();
        t || i.changeSlide({ data: { message: "index", index: r } }, !1);
    };
    t.prototype.registerBreakpoints = function () {
        var u,
            f,
            i,
            t = this,
            r = t.options.responsive || null;
        if ("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (((i = t.breakpoints.length - 1), r.hasOwnProperty(u))) {
                    for (f = r[u].breakpoint; i >= 0; ) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings;
                }
            t.breakpoints.sort(function (n, i) {
                return t.options.mobileFirst ? n - i : i - n;
            });
        }
    };
    t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.cleanUpSlideEvents();
        t.initSlideEvents();
        t.checkResponsive(!1, !0);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.setPosition();
        t.focusHandler();
        t.paused = !t.options.autoplay;
        t.autoPlay();
        t.$slider.trigger("reInit", [t]);
    };
    t.prototype.resize = function () {
        var t = this;
        n(window).width() !== t.windowWidth &&
        (clearTimeout(t.windowDelay),
            (t.windowDelay = window.setTimeout(function () {
                t.windowWidth = n(window).width();
                t.checkResponsive();
                t.unslicked || t.setPosition();
            }, 50)));
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function (n, t, i) {
        var r = this;
        if (((n = "boolean" == typeof n ? (!0 === (t = n) ? 0 : r.slideCount - 1) : !0 === t ? --n : n), r.slideCount < 1 || n < 0 || n > r.slideCount - 1)) return !1;
        r.unload();
        !0 === i ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove();
        r.$slides = r.$slideTrack.children(this.options.slide);
        r.$slideTrack.children(this.options.slide).detach();
        r.$slideTrack.append(r.$slides);
        r.$slidesCache = r.$slides;
        r.reinit();
    };
    t.prototype.setCSS = function (n) {
        var r,
            u,
            t = this,
            i = {};
        !0 === t.options.rtl && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        !1 === t.transformsEnabled
            ? t.$slideTrack.css(i)
            : ((i = {}), !1 === t.cssTransitions ? ((i[t.animType] = "translate(" + r + ", " + u + ")"), t.$slideTrack.css(i)) : ((i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)"), t.$slideTrack.css(i)));
    };
    t.prototype.setDimensions = function () {
        var n = this,
            t;
        !1 === n.options.vertical
            ? !0 === n.options.centerMode && n.$list.css({ padding: "0px " + n.options.centerPadding })
            : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), !0 === n.options.centerMode && n.$list.css({ padding: n.options.centerPadding + " 0px" }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        !1 === n.options.vertical && !1 === n.options.variableWidth
            ? ((n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow)), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length)))
            : !0 === n.options.variableWidth
                ? n.$slideTrack.width(5e3 * n.slideCount)
                : ((n.slideWidth = Math.ceil(n.listWidth)), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        !1 === n.options.variableWidth && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t);
    };
    t.prototype.setFade = function () {
        var i,
            t = this;
        t.$slides.each(function (r, u) {
            i = t.slideWidth * r * -1;
            !0 === t.options.rtl ? n(u).css({ position: "relative", right: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : n(u).css({ position: "relative", left: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
        });
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    };
    t.prototype.setHeight = function () {
        var n = this,
            t;
        1 === n.options.slidesToShow && !0 === n.options.adaptiveHeight && !1 === n.options.vertical && ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)), n.$list.css("height", t));
    };
    t.prototype.setOption = t.prototype.slickSetOption = function () {
        var u,
            f,
            e,
            i,
            r,
            t = this,
            o = !1;
        if (
            ("object" === n.type(arguments[0])
                ? ((e = arguments[0]), (o = arguments[1]), (r = "multiple"))
                : "string" === n.type(arguments[0]) &&
                ((e = arguments[0]), (i = arguments[1]), (o = arguments[2]), "responsive" === arguments[0] && "array" === n.type(arguments[1]) ? (r = "responsive") : void 0 !== arguments[1] && (r = "single")),
            "single" === r)
        )
            t.options[e] = i;
        else if ("multiple" === r)
            n.each(e, function (n, i) {
                t.options[n] = i;
            });
        else if ("responsive" === r)
            for (f in i)
                if ("array" !== n.type(t.options.responsive)) t.options.responsive = [i[f]];
                else {
                    for (u = t.options.responsive.length - 1; u >= 0; ) t.options.responsive[u].breakpoint === i[f].breakpoint && t.options.responsive.splice(u, 1), u--;
                    t.options.responsive.push(i[f]);
                }
        o && (t.unload(), t.reinit());
    };
    t.prototype.setPosition = function () {
        var n = this;
        n.setDimensions();
        n.setHeight();
        !1 === n.options.fade ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n]);
    };
    t.prototype.setProps = function () {
        var n = this,
            t = document.body.style;
        n.positionProp = !0 === n.options.vertical ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === n.options.useCSS && (n.cssTransitions = !0));
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : (n.options.zIndex = n.defaults.zIndex));
        void 0 !== t.OTransform && ((n.animType = "OTransform"), (n.transformType = "-o-transform"), (n.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && ((n.animType = "MozTransform"), (n.transformType = "-moz-transform"), (n.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform &&
        ((n.animType = "webkitTransform"), (n.transformType = "-webkit-transform"), (n.transitionType = "webkitTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && ((n.animType = "msTransform"), (n.transformType = "-ms-transform"), (n.transitionType = "msTransition"), void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && !1 !== n.animType && ((n.animType = "transform"), (n.transformType = "transform"), (n.transitionType = "transition"));
        n.transformsEnabled = n.options.useTransform && null !== n.animType && !1 !== n.animType;
    };
    t.prototype.setSlideClasses = function (n) {
        var u,
            i,
            r,
            f,
            t = this,
            e;
        ((i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), t.$slides.eq(n).addClass("slick-current"), !0 === t.options.centerMode)
            ? ((e = t.options.slidesToShow % 2 == 0 ? 1 : 0),
                (u = Math.floor(t.options.slidesToShow / 2)),
            !0 === t.options.infinite &&
            (n >= u && n <= t.slideCount - 1 - u
                ? t.$slides
                    .slice(n - u + e, n + u + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((r = t.options.slidesToShow + n),
                    i
                        .slice(r - u + 1 + e, r + u + 2)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")),
                0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")),
                t.$slides.eq(n).addClass("slick-center"))
            : n >= 0 && n <= t.slideCount - t.options.slidesToShow
                ? t.$slides
                    .slice(n, n + t.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i.length <= t.options.slidesToShow
                    ? i.addClass("slick-active").attr("aria-hidden", "false")
                    : ((f = t.slideCount % t.options.slidesToShow),
                        (r = !0 === t.options.infinite ? t.options.slidesToShow + n : n),
                        t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow
                            ? i
                                .slice(r - (t.options.slidesToShow - f), r + f)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : i
                                .slice(r, r + t.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
        ("ondemand" !== t.options.lazyLoad && "anticipated" !== t.options.lazyLoad) || t.lazyLoad();
    };
    t.prototype.setupInfinite = function () {
        var i,
            r,
            u,
            t = this;
        if ((!0 === t.options.fade && (t.options.centerMode = !1), !0 === t.options.infinite && !1 === t.options.fade && ((r = null), t.slideCount > t.options.slidesToShow))) {
            for (u = !0 === t.options.centerMode ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1)
                (r = i - 1),
                    n(t.$slides[r])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", r - t.slideCount)
                        .prependTo(t.$slideTrack)
                        .addClass("slick-cloned");
            for (i = 0; i < u + t.slideCount; i += 1)
                (r = i),
                    n(t.$slides[r])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", r + t.slideCount)
                        .appendTo(t.$slideTrack)
                        .addClass("slick-cloned");
            t.$slideTrack
                .find(".slick-cloned")
                .find("[id]")
                .each(function () {
                    n(this).attr("id", "");
                });
        }
    };
    t.prototype.interrupt = function (n) {
        var t = this;
        n || t.autoPlay();
        t.interrupted = n;
    };
    t.prototype.selectHandler = function (t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        r || (r = 0);
        i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r);
    };
    t.prototype.slideHandler = function (n, t, i) {
        var u,
            f,
            s,
            e,
            o,
            h = null,
            r = this;
        if (((t = t || !1), !((!0 === r.animating && !0 === r.options.waitForAnimate) || (!0 === r.options.fade && r.currentSlide === n))))
            if (
                (!1 === t && r.asNavFor(n),
                    (u = n),
                    (h = r.getLeft(u)),
                    (e = r.getLeft(r.currentSlide)),
                    (r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft),
                !1 === r.options.infinite && !1 === r.options.centerMode && (n < 0 || n > r.getDotCount() * r.options.slidesToScroll))
            )
                !1 === r.options.fade &&
                ((u = r.currentSlide),
                    !0 !== i
                        ? r.animateSlide(e, function () {
                            r.postSlide(u);
                        })
                        : r.postSlide(u));
            else if (!1 === r.options.infinite && !0 === r.options.centerMode && (n < 0 || n > r.slideCount - r.options.slidesToScroll))
                !1 === r.options.fade &&
                ((u = r.currentSlide),
                    !0 !== i
                        ? r.animateSlide(e, function () {
                            r.postSlide(u);
                        })
                        : r.postSlide(u));
            else {
                if (
                    (r.options.autoplay && clearInterval(r.autoPlayTimer),
                        (f =
                            u < 0
                                ? r.slideCount % r.options.slidesToScroll != 0
                                    ? r.slideCount - (r.slideCount % r.options.slidesToScroll)
                                    : r.slideCount + u
                                : u >= r.slideCount
                                    ? r.slideCount % r.options.slidesToScroll != 0
                                        ? 0
                                        : u - r.slideCount
                                    : u),
                        (r.animating = !0),
                        r.$slider.trigger("beforeChange", [r, r.currentSlide, f]),
                        (s = r.currentSlide),
                        (r.currentSlide = f),
                        r.setSlideClasses(r.currentSlide),
                    r.options.asNavFor && (o = (o = r.getNavTarget()).slick("getSlick")).slideCount <= o.options.slidesToShow && o.setSlideClasses(r.currentSlide),
                        r.updateDots(),
                        r.updateArrows(),
                    !0 === r.options.fade)
                )
                    return (
                        !0 !== i
                            ? (r.fadeSlideOut(s),
                                r.fadeSlide(f, function () {
                                    r.postSlide(f);
                                }))
                            : r.postSlide(f),
                            void r.animateHeight()
                    );
                !0 !== i
                    ? r.animateSlide(h, function () {
                        r.postSlide(f);
                    })
                    : r.postSlide(f);
            }
    };
    t.prototype.startLoad = function () {
        var n = this;
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        !0 === n.options.dots && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading");
    };
    t.prototype.swipeDirection = function () {
        var i,
            r,
            u,
            n,
            t = this;
        return (
            (i = t.touchObject.startX - t.touchObject.curX),
                (r = t.touchObject.startY - t.touchObject.curY),
                (u = Math.atan2(r, i)),
            (n = Math.round((180 * u) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
                n <= 45 && n >= 0
                    ? !1 === t.options.rtl
                        ? "left"
                        : "right"
                    : n <= 360 && n >= 315
                        ? !1 === t.options.rtl
                            ? "left"
                            : "right"
                        : n >= 135 && n <= 225
                            ? !1 === t.options.rtl
                                ? "right"
                                : "left"
                            : !0 === t.options.verticalSwiping
                                ? n >= 35 && n <= 135
                                    ? "down"
                                    : "up"
                                : "vertical"
        );
    };
    t.prototype.swipeEnd = function () {
        var t,
            i,
            n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling)) return (n.scrolling = !1), !1;
        if (((n.interrupted = !1), (n.shouldClick = !(n.touchObject.swipeLength > 10)), void 0 === n.touchObject.curX)) return !1;
        if ((!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)) {
            switch ((i = n.swipeDirection())) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                    n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                    n.currentDirection = 1;
            }
            "vertical" != i && (n.slideHandler(t), (n.touchObject = {}), n.$slider.trigger("swipe", [n, i]));
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
    };
    t.prototype.swipeHandler = function (n) {
        var t = this;
        if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== n.type.indexOf("mouse"))))
            switch (
                ((t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1),
                    (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                    n.data.action)
                ) {
                case "start":
                    t.swipeStart(n);
                    break;
                case "move":
                    t.swipeMove(n);
                    break;
                case "end":
                    t.swipeEnd(n);
            }
    };
    t.prototype.swipeMove = function (n) {
        var f,
            e,
            r,
            u,
            i,
            o,
            t = this;
        return (
            (i = void 0 !== n.originalEvent ? n.originalEvent.touches : null),
            !(!t.dragging || t.scrolling || (i && 1 !== i.length)) &&
            ((f = t.getLeft(t.currentSlide)),
                (t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX),
                (t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY),
                (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2)))),
                (o = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))),
                !t.options.verticalSwiping && !t.swiping && o > 4
                    ? ((t.scrolling = !0), !1)
                    : (!0 === t.options.verticalSwiping && (t.touchObject.swipeLength = o),
                        (e = t.swipeDirection()),
                    void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && ((t.swiping = !0), n.preventDefault()),
                        (u = (!1 === t.options.rtl ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1)),
                    !0 === t.options.verticalSwiping && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
                        (r = t.touchObject.swipeLength),
                        (t.touchObject.edgeHit = !1),
                    !1 === t.options.infinite && ((0 === t.currentSlide && "right" === e) || (t.currentSlide >= t.getDotCount() && "left" === e)) && ((r = t.touchObject.swipeLength * t.options.edgeFriction), (t.touchObject.edgeHit = !0)),
                        (t.swipeLeft = !1 === t.options.vertical ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u),
                    !0 === t.options.verticalSwiping && (t.swipeLeft = f + r * u),
                    !0 !== t.options.fade && !1 !== t.options.touchMove && (!0 === t.animating ? ((t.swipeLeft = null), !1) : void t.setCSS(t.swipeLeft))))
        );
    };
    t.prototype.swipeStart = function (n) {
        var i,
            t = this;
        if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)) return (t.touchObject = {}), !1;
        void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]);
        t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX;
        t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY;
        t.dragging = !0;
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit());
    };
    t.prototype.unload = function () {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    };
    t.prototype.unslick = function (n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy();
    };
    t.prototype.updateArrows = function () {
        var n = this;
        Math.floor(n.options.slidesToShow / 2);
        !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        !n.options.infinite &&
        (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            0 === n.currentSlide
                ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                : n.currentSlide >= n.slideCount - n.options.slidesToShow && !1 === n.options.centerMode
                    ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                    : n.currentSlide >= n.slideCount - 1 && !0 === n.options.centerMode && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    };
    t.prototype.updateDots = function () {
        var n = this;
        null !== n.$dots &&
        (n.$dots.find("li").removeClass("slick-active").end(),
            n.$dots
                .find("li")
                .eq(Math.floor(n.currentSlide / n.options.slidesToScroll))
                .addClass("slick-active"));
    };
    t.prototype.visibility = function () {
        var n = this;
        n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1);
    };
    n.fn.slick = function () {
        for (var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; n < e; n++)
            if (("object" == typeof r || void 0 === r ? (i[n].slick = new t(i[n], r)) : (u = i[n].slick[r].apply(i[n].slick, f)), void 0 !== u)) return u;
        return i;
    };
});
$(document).ready(function () {
    GetRatingOrderHistoryBox();
    IsPersonalizeUser() && GetPredictedProduct();
    let n = $(".bottom-search__container");
    if ((n.length > 0 && n.html(n.html().replaceAll("&nbsp;", "")), isMobile)) {
        InitCarousel();
        ShowHideStickyButton();
        const n = document.siteid === 2;
        n && navigator.userAgent.indexOf("tgdd") > 0 && (window.location.href = "/app");
    } else InitOwlCarousel();
    if ((LoadViewedHistory(), SetAllContentAttr(), isMobile))
        $(".home-nav .iconnew-boxarrow").click(function () {
            $(".home-nav").toggleClass("active");
        }),
            $(window).scroll(function () {
                ShowHideStickyButton();
            });
    else {
        let t = $("section.main-container"),
            n = $(".sticky-sidebar");
        $(window).scroll(function () {
            t.isReachViewportTop() ? n.addClass("active") : n.removeClass("active");
        });
    }
    $(".option-sg a").click(function () {
        let t = $(this);
        if (t.hasClass("active")) return !1;
        let n = t.closest(".daily-sg"),
            f = n.find(".preloader"),
            e = t.data("is-recommend-tab"),
            r = t.data("campaign"),
            u = t.data("group"),
            i = n.find(
                ".box-common__content" +
                (e == !0 ? "[data-is-recommend-tab=" + e + "]" : ":not([data-is-recommend-tab])") +
                (r != null ? "[data-campaign=" + r + "]" : ":not([data-campaign])") +
                (u != null ? "[data-group=" + u + "]" : ":not([data-group])")
            );
        if (i != null && i.length > 0)
            return n.find(".option-sg a").removeClass("active"), t.addClass("active"), n.find(".box-common__content").hide(), n.find(".listproduct").removeClass("tracking"), i.show(), i.find(".listproduct").addClass("tracking"), !1;
        let o = { campaignId: r, groupId: u };
        $.ajax({
            url: "/HomeV2/GetListProduct",
            data: o,
            method: "POST",
            beforeSend: function () {
                n.find(".option-sg a").removeClass("active");
                t.addClass("active");
                f.show();
            },
            success: function (f) {
                n.find(".box-common__content").hide();
                n.find(".listproduct").removeClass("tracking");
                n.find(".block-product").append(f);
                i = n.find(".box-common__content").last();
                r != null && i.attr("data-campaign", r);
                u != null && i.attr("data-group", u);
                n.find(".listproduct").last().addClass("tracking");
                let e = i.find(".item > a");
                if (e.length > 0) {
                    let n = "Home page -  Gá»£i Ă½ hĂ´m nay - " + t.find("span").text().trim().replace("\n", "");
                    addListProductIntoImpression(e, n, 10);
                }
            },
            complete: function () {
                f.hide();
            },
        });
    });
    $(document).on("click", ".box-common__content .showmore", function () {
        let n = $(this),
            r = n.closest(".box-common__content"),
            e = r.find(".readmore-btn-link"),
            t = r.find(".listproduct"),
            o = t.find(".item"),
            i = parseInt(n.attr("data-page-index")),
            u = n.data("page-size"),
            s = t.data("total");
        container.find(".listproduct").last().addClass("tracking");
        var f = $(".daily-sg .box-common__content").eq(0).find(".listproduct .item.hide > a");
        if (f.length > 0) addListProductIntoImpression(f, "Home page -  Gá»£i Ă½ hĂ´m nay - Cho báº¡n", 10);
        o.slice(i * u, (i + 1) * u).removeClass("hide");
        t.find(".item:not(.hide)").length == s ? (n.remove(), e.removeClass("hide")) : n.attr("data-page-index", i + 1);
    });
    $("ul.box-common__tab li").click(function () {
        let t = $(this);
        if (t.hasClass("active-tab")) return !1;
        let i = t.closest(".box-common"),
            l = i.find(".preloader"),
            u = t.data("cate-id"),
            f = t.data("html-id"),
            e = t.data("prop-id"),
            o = t.data("prop-value-ids"),
            s = t.data("product-ids"),
            h = t.data("url"),
            r = t.data("name"),
            c = t.data("frame"),
            n = i.find(
                ".box-common__content" +
                (u != null ? "[data-cate-id=" + u + "]" : ":not([data-cate-id])") +
                (e != null ? '[data-prop-id="' + e + '"]' : ":not([data-prop-id])") +
                (o != null ? '[data-prop-value-ids="' + o + '"]' : ":not([data-prop-value-ids])") +
                (f != null ? '[data-html-id="' + f + '"]' : ":not([data-html-id])") +
                (s != null ? '[data-product-ids="' + s + '"]' : ":not([data-product-ids])") +
                (h != null ? '[data-url="' + h + '"]' : ":not([data-url])") +
                (r != null ? '[data-name="' + r + '"]' : ":not([data-name])") +
                (c != null ? '[data-frame="' + c + '"]' : ":not([data-frame])")
            );
        if (n != null && n.length > 0)
            return (
                t.siblings().removeClass("active-tab"),
                    t.addClass("active-tab"),
                    i.find(".box-common__content").hide(),
                    i.find(".listproduct").removeClass("tracking"),
                isMobile || InitProductOwlCarousel(i.find(".listproduct.owl-carousel:visible")),
                    n.show(),
                    n.find(".listproduct").addClass("tracking"),
                    !1
            );
        let a = { categoryId: u, htmlId: f, propertyId: e, propertyValueIds: ConvertToArray(o), productIds: ConvertToArray(s), categoryUrl: h, categoryName: r, frame: c };
        $.ajax({
            url: "/HomeV2/GetListProduct",
            data: a,
            method: "POST",
            beforeSend: function () {
                t.siblings().removeClass("active-tab");
                t.addClass("active-tab");
                l.show();
            },
            success: function (t) {
                i.find(".box-common__content").hide();
                i.find(".listproduct").removeClass("tracking");
                i.find(".box-common__main").append(t);
                n = i.find(".box-common__content").last();
                u != null && n.attr("data-cate-id", u);
                e != null && n.attr("data-prop-id", e);
                o != null && n.attr("data-prop-value-ids", o);
                f != null && n.attr("data-html-id", f);
                s != null && n.attr("data-product-ids", s);
                h != null && n.attr("data-url", h);
                r != null && n.attr("data-name", r);
                c != null && n.attr("data-frame", c);
                isMobile || InitProductOwlCarousel(n.find(".listproduct.owl-carousel"));
                l.hide();
                let a = "";
                i.parents().hasClass("promo-7day") ? (a = "Tuáº§n lá»… knockout") : i.parents().hasClass("promo-muanong") && (a = "Tuáº§n lá»… gia dá»¥ng");
                r != null && (a += " - " + r);
                let v = n.find(".listproduct .active .item > a").length > 1 ? n.find(".listproduct .active .item > a") : n.find(".listproduct li > a");
                if ((console.log(v), v.length > 0)) {
                    let n = "Home page - " + a;
                    addListProductIntoImpression(v, n, 10);
                }
            },
            error: function () {
                l.hide();
            },
        });
    });
    GetPopupRemindGiftVoucher();
    $(".box-cate.has-scroll").length &&
    !isMobile &&
    $(".box-cate.has-scroll").slick({
        rows: 2,
        dots: !1,
        arrows: !0,
        infinite: !1,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 10,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
    ShowStickyButton();
    trickJqueryEvent();
});
$.fn.isInViewport = function () {
    let n = $(this).offset().top,
        i = n + $(this).outerHeight(),
        t = $(window).scrollTop(),
        r = t + $(window).height();
    return i > t && n < r;
};
$.fn.isReachViewportTop = function (n = 0) {
    let t = $(this).offset().top,
        r = t + $(this).outerHeight(),
        i = $(window).scrollTop();
    return i < r - n && i >= t - n;
};
IsLoadRatingBox = !1;
keyStickyButton = "isShowStickyButton";
$(document).ready(function () {
    !1 && $(".slider-flashsale .item").length <= 0
        ? callHotDealHome()
        : ((intervalFS = setInterval(function () {
            flashsaleCountdown();
        }, 1e3)),
            slickFS(),
            GetListCrmFS(),
        window.location.hash == "#flashsale" && $("html, body").animate({ scrollTop: $(".flashsale-block").offset().top }, 500));
    $(".listing-timeline a").click(function (n) {
        n.preventDefault();
        var t = $(this);
        t.hasClass("active") ||
        ($(".listing-timeline a").removeClass("active"),
            t.addClass("active"),
            $.ajax({
                url: "/HomeV2/GetProductListFlashsale",
                data: { productIds: t.data("productlist"), isHappening: t.data("ishappening"), beginfsdatetime: $(".flashsale-block .endtime").data("begin") },
                cache: !1,
                type: "POST",
                beforeSend: function () {
                    $(".flashsale-block .stage-two").show();
                },
                success: function (n) {
                    if ($(".slider-flashsale").data("mobile") != 1)
                        try {
                            $(".slider-flashsale").slick("unslick");
                        } catch (i) {
                            console.log("call slick error!");
                        }
                    $(".listproduct.slider-flashsale").html(n);
                    $(".flashsale-block .slider-flashsale .item").each(function () {
                        MoveSoldOutLayer($(this));
                    });
                    var t = $(n).not("text").length;
                    $(".listproduct.slider-flashsale").removeClass("two-line").removeClass("has-scroll");
                    $(".listproduct.slider-flashsale").removeClass("has-slick");
                    $(".listproduct.slider-flashsale").removeClass("flow-row");
                    t > 3 && ($(".listproduct.slider-flashsale").addClass("two-line"), t > 6 && $(".listproduct.slider-flashsale").addClass("has-scroll"));
                    t > 12 && $(".listproduct.slider-flashsale").addClass("has-slick");
                    t <= 4 && $(".listproduct.slider-flashsale").addClass("flow-row");
                    slickFS();
                    $(".flashsale-block .stage-two").hide();
                },
                error: function (n) {
                    console.log(n);
                },
            }));
    });
});
lstJsonModel = [];
1;
