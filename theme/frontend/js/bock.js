$(window)
    .scroll(function() {
        if($(".blog,.detail_blog").length > 0) return false;
        var $window = $(window),
            $body = $("body"),
            $header = $("header"),
            $panel = $(".panel");
        $header_top = $(".header-top");
        $header_a = $(".header-lt ul li a");
        $span = $("nav#menu span");
        $span_a = $("nav#menu span.active a");
        $filter = $(".hearder-logo .images img");

        var scroll = $window.scrollTop();

        $panel.each(function(index, current) {
            var $this = $(this);
            var _halfElm = ($this.height() / 10) * 3;
            if (scroll + _halfElm * 2 >= $this.position().top) {
                $body.css("background-color", $(this).data("color"));
                $header_top.css("background-color", $(this).data("color"));
                //
                $header_a.removeClass(function(index, css) {
                    return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
                });
                $header_a.addClass("color-" + $(this).data("text"));
                //
                $span.removeClass(function(index, css) {
                    return (css.match(/(^|\s)span-\S+/g) || []).join(" ");
                });
                $span.addClass("span-" + $(this).data("span"));
                //
                $span_a.removeClass(function(index, css) {
                    return (css.match(/(^|\s)span_a-\S+/g) || []).join(" ");
                });
                $span_a.addClass("span_a-" + $(this).data("span"));
                //

                $filter.removeClass(function(index, css) {
                    return (css.match(/(^|\s)filter-\S+/g) || []).join(" ");
                });
                $filter.addClass("filter-" + $(this).data("filter"));
                if (index >= 1) {
                    $(".nav__page").addClass("active");
                } else {
                    $(".nav__page").removeClass("active");
                }
                $(".nav__page span").each(function(index, current) {
                    var currentId = $(current).data("id");
                    if (currentId == "#" + $this.attr("id")) {
                        $(".nav__page span").not($(this)).removeClass("active");
                        $(this).addClass("active");
                    }
                });
            }
        });
    })
    .scroll();

var $hide = $(".hide");

var INDEX = (function() {
    var _Sliderourexpertise = function() {
        if ($(".ourexpertise .mySwiper-ourexpertise").length > 0) {
            var ourexpertise = new Swiper(".ourexpertise .mySwiper-ourexpertise", {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".swiperourexpertise",
                    clickable: true,
                },
                breakpoints: {
                    1025: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    568: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });
        }
    };
    var _Slidersliderpartner = function() {
        if ($(".slider_partner").length > 0) {
            var partner = new Swiper(".slider_partner", {
                autoplay: true,
                speed: 500,
                loop: false,
                autoplay: {
                    delay: 3000,
                },
                slidesPerView: 3,
                slidesPerColumnFill: "row",
                grabCursor: true,
                slidesPerColumn: 3,
                slidesPerGroup: 1,
                spaceBetween: 0,
                pagination: {
                    el: ".log",
                    clickable: true,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 4,

                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 3,
                    },
                    736: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 3,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                    },
                    425: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 3,
                    },
                    374: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 4,
                    },
                    319: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 3,
                    },
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                    },
                },
            });
        }
    };
    var _My_slide_blog = function() {
        if ($(".my_slide_blog").length > 0) {
            var my_slide_blog = new Swiper(".my_slide_blog", {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".swiperourexpertise",
                    clickable: true,
                },
                breakpoints: {
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    568: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });
        }
    };
    var _loadPage = function() {
        var page = $(".nav__page");
    };
    return {
        _: function() {
            _Sliderourexpertise();
            _Slidersliderpartner();
            _loadPage();
            _My_slide_blog();
        },
    };
})();
jQuery(document).ready(function($) {
    if (/Lighthouse/.test(navigator.userAgent)) {
        return;
    }
    INDEX._();
});
var CONTACT = (function() {
    var showPopup = function(json) {
        if (json.code == 200) {
            toastr["success"](json.message);
            $("#successSendMail").modal("show");
        } else {
            toastr["error"](json.message);
        }
    };
    return {
        _: function(json) {
            showPopup(json);
        },
    };
})();

function openNav() {
    document.getElementById("myNav").style.left = "0%";
}

function closeNav() {
    document.getElementById("myNav").style.left = "-100%";
}