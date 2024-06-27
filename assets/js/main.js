(function ($) {
    ("use strict");
    // Page loading
    $(window).on("load", function () {
        $("#preloader-active").fadeOut("slow");
    });
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $(".sticky-bar");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass("stick");
            $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
            $(".header-style-2 .categories-button-active").removeClass("open");
        } else {
            header.addClass("stick");
        }
    });
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5998 24.2694C10.7522 24.1169 10.8485 23.9083 10.8485 23.6676L10.8503 1.20328C10.8504 0.737952 10.4653 0.35288 9.99997 0.352917C9.53464 0.352955 9.14951 0.738087 9.14947 1.20342L9.14766 23.6678C9.14762 24.1331 9.53269 24.5182 9.99802 24.5181C10.2387 24.5181 10.4473 24.4218 10.5998 24.2694Z" fill=""/><path d="M18.8405 10.0441C19.1695 9.71509 19.1695 9.16953 18.8406 8.84061L10.6017 0.601675C10.2728 0.272759 9.7272 0.272803 9.39823 0.601772L1.15796 8.84204C0.828992 9.17101 0.828948 9.71657 1.15786 10.0455C1.48678 10.3744 2.03234 10.3744 2.36131 10.0454L9.99981 2.40689L17.6371 10.0442C17.966 10.3731 18.5115 10.373 18.8405 10.0441Z" fill=""/></svg>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    //sidebar sticky
    if ($(".sticky-sidebar").length) {
        $(".sticky-sidebar").theiaStickySidebar();
    }
    //Header search form
    $(document).on('click', function(event) {
        var menu_text = $(".menu-texts");
        var btnOpen = $(".btn-search");
        var formSearch = $(".form-search");
        var _ele_lang = $(".icon-lang");
        var _ele_currency = $(".icon-cart");
        if (!_ele_lang.is(event.target) && _ele_lang.has(event.target).length === 0) {
            $(".dropdown-account").removeClass("dropdown-open");
        }
        if (!_ele_currency.is(event.target) && _ele_currency.has(event.target).length === 0) {
            $(".dropdown-cart").removeClass("dropdown-open");
        }
        if (!menu_text.is(event.target) && menu_text.has(event.target).length === 0) {
            menu_text.addClass("menu-close");
            menu_text.css("style", "");
        }
        if (!formSearch.is(event.target) && formSearch.has(event.target).length === 0 && !btnOpen.is(event.target) && btnOpen.has(event.target).length === 0) {
            $(".form-search").slideUp();
        }
    });
    // btn search
    $(".btn-search").on('click', function(e){
        e.preventDefault();
        var _form_search = $(".form-search");
        if (_form_search.css('display') == 'none') {
            _form_search.slideDown();
        } else {
            _form_search.slideUp();
        }
    });
    /*----------------------------
        Category toggle function
    ------------------------------*/
    if ($(".categories-button-active").length) {
        var searchToggle = $(".categories-button-active");
        searchToggle.on("click", function (e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).siblings(".categories-dropdown-active-large").removeClass("open");
            } else {
                $(this).addClass("open");
                $(this).siblings(".categories-dropdown-active-large").addClass("open");
            }
        });
    }
    /*------ Wow Active ----*/
    new WOW().init();
    /*---------------------
        Select active
    --------------------- */
    if ($(".select-active").length) {
        $(".select-active").select2();
    }
    /*---- CounterUp ----*/
    if ($(".count").length) {
        $(".count").counterUp({
            delay: 10,
            time: 1000
        });
    }
    // Isotope active
    if ($(".grid").length) {
        $(".grid").imagesLoaded(function () {
            // init Isotope
            var $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                layoutMode: "masonry",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: ".grid-item"
                }
            });
        });
    }
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $(".search-active"),
            endTriggersearch = $(".search-close"),
            container = $(".main-search-active");
        searchTrigger.on("click", function (e) {
            e.preventDefault();
            container.addClass("search-visible");
        });
        endTriggersearch.on("click", function () {
            container.removeClass("search-visible");
        });
    }
    sidebarSearch();
    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".burger-icon"),
            navCanvas = $(".burger-icon-2"),
            closeCanvas = $(".close-canvas"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            containerCanvas = $(".sidebar-canvas-wrapper"),
            wrapper4 = $("body");
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on("click", function (e) {
            navbarTrigger.toggleClass("burger-close");
            e.preventDefault();
            container.toggleClass("sidebar-visible");
            wrapper4.toggleClass("mobile-menu-active");
        });
        navCanvas.on("click", function (e) {
            navCanvas.toggleClass("burger-2-close");
            e.preventDefault();
            containerCanvas.toggleClass("sidebar-canvas-visible");
            wrapper4.toggleClass("canvas-menu-active");
        });
        closeCanvas.on("click", function (e) {
            containerCanvas.removeClass("sidebar-canvas-visible");
            wrapper4.removeClass("canvas-menu-active");
            navCanvas.removeClass("burger-2-close");
        });
        endTrigger.on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });
        $(".body-overlay-1").on("click", function () {
            container.removeClass("sidebar-visible");
            containerCanvas.removeClass("sidebar-canvas-visible");
            wrapper4.removeClass("mobile-menu-active");
            wrapper4.removeClass("canvas-menu-active");
            navbarTrigger.removeClass("burger-close");
            navCanvas.removeClass("burger-2-close");
        });
    }
    mobileHeaderActive();
    /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $(".mobile-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="arrow-small-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });
    /*--- language currency active ----*/
    $(".mobile-language-active").on("click", function (e) {
        e.preventDefault();
        $(".lang-dropdown-active").slideToggle(900);
    });
    /*--- categories-button-active-2 ----*/
    $(".categories-button-active-2").on("click", function (e) {
        e.preventDefault();
        $(".categori-dropdown-active-small").slideToggle(900);
    });
    /*--- Mobile demo active ----*/
    var demo = $(".tm-demo-options-wrapper");
    $(".view-demo-btn-active").on("click", function (e) {
        e.preventDefault();
        demo.toggleClass("demo-open");
    });
    /*-----More Menu Open----*/
    $(".more_slide_open").slideUp();
    $(".more_categories").on("click", function () {
        $(this).toggleClass("show");
        $(".more_slide_open").slideToggle();
    });
    /* --- SwiperJS --- */
    $(".swiper-group-logo-13").each(function () {
        var swiper_payment_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 13,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-logo-13",
                prevEl: ".swiper-button-prev-logo-13"
            },
            autoplay: {
                delay: 1500
            },
            breakpoints: {
                1199: {
                    slidesPerView: 13
                },
                800: {
                    slidesPerView: 10
                },
                650: {
                    slidesPerView: 8
                },
                575: {
                    slidesPerView: 6
                },
                450: {
                    slidesPerView: 5
                },
                320: {
                    slidesPerView: 4
                },
                250: {
                    slidesPerView: 3
                }
            }
        });
    });
    $(".swiper-group-1").each(function () {
        var swiper_1_item = new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 50,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            pagination: {
                el: ".swiper-pagination-group-1",
                clickable: true
            },
            autoplay: {
                delay: 100000
            }
        });
    });
    var swiper_animate_items = null;
    $(".swiper-group-slide-text").each(function () {
        swiper_animate_items = new Swiper(this, {
            spaceBetween: 40,
            slidesPerView: "auto",
            slidesPerGroup: 1,
            loop: true,
            speed: 50000,
            centeredSlides: true,
            allowTouchMove: false,
            effect: "slide",
            navigation: {
                nextEl: ".swiper-button-next-animate",
                prevEl: ".swiper-button-prev-animate",
                clickable: false
            },
            autoplay: {
                enabled: 1,
                delay: 1,
                waitForTransition: 1,
                disableOnInteraction: 0,
                stopOnLastSlide: 1,
                reverseDirection: 1
            },
            breakpoints: {
                1199: {
                    slidesPerView: "auto"
                },
                600: {
                    slidesPerView: "auto"
                },
                575: {
                    slidesPerView: 1
                },
                350: {
                    slidesPerView: 1
                }
            }
        });
    });
    var swiper_center_4 = new Swiper('.swiper-group-center-4', {
        navigation: {
            nextEl: ".swiper-button-next-center-4",
            prevEl: ".swiper-button-prev-center-4"
        },
        slidesPerView: 'auto',
        watchOverflow: true,
        // centeredSlides: true,
        // paginationClickable: true,
        loop: true,
        spaceBetween: 18,
        slideToClickedSlide: true
    });
    //Dropdown selected item
    $(".dropdown-menu li a").on("click", function (e) {
        e.preventDefault();
        $(this)
            .parents(".dropdown")
            .find(".btn span")
            .html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
    });
    $(".list-tags-job .remove-tags-job").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".job-tag").remove();
    });
    // Video popup
    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    var msnry = null;
    if ($("#masonry").length > 0) {
        msnry = new Masonry("#masonry", {
            itemSelector: ".col-lg-4",
            percentPosition: true
        });
    }
    $(".box-button-filters a.btn").on("click", function (e) {
        e.preventDefault();
        var _filter = $(this).attr("data-filter");
        $(".box-button-filters a.btn").removeClass("active");
        $(this).addClass("active");
        if (_filter == "all") {
            $(".item-filter").show();
        } else {
            $(".item-filter").hide();
            $("." + _filter).show();
        }
        msnry.layout();
    });
    /*------ Timer Countdown ----*/
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime("" + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%D</span><span class="countdown-period lh-14 font-xs"> days </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%H</span><span class="countdown-period font-xs lh-14"> hours </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%M</span><span class="countdown-period font-xs lh-14"> mins </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%S</span><span class="countdown-period font-xs lh-14"> secs </span></span>'));
        });
    });
    /*------ Text Type Countdown ----*/
    var typeText = document.querySelector(".typeText")
    var textToBeTypedArr = ["Travel Booking", "Hotel Booking", "Car Rent", "Ticket Booking", "Flight Booking", "Properties Rent"]
    var index = 0, isAdding = true, textToBeTypedIndex = 0
    function playAnim() {
    setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
            if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                isAdding = false
                typeText.classList.add("showAnim")
                setTimeout(function () {
                typeText.classList.remove("showAnim")
                playAnim()
                }, 500)
                return
            } else {
                index++
            }
            } else {
                if (index === 0) {
                    isAdding = true
                    textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
                } else {
                    index--
                }
            }
            playAnim()
        }, isAdding ? 120 : 60)
    }
    playAnim()
})(jQuery);
// Check billed
function switchBilled() {
    var checkBox = $("#cb_billed_type");
    var forMonth = $(".for-month");
    var forYear = $(".for-year");
    var billMonth = $(".text-billed-month");
    var billYear = $(".text-billed-year");
    for (var i = 0; i < forMonth.length; i++) {
        if (checkBox.is(":checked")) {
            forYear.eq(i).addClass("display-year");
            billYear.addClass("active");
            billMonth.removeClass("active");
            forMonth.eq(i).removeClass("display-month");
        } else {
            forYear.eq(i).removeClass("display-year");
            billMonth.addClass("active");
            billYear.removeClass("active");
            forMonth.eq(i).addClass("display-month");
        }
    }
}
function switchBilledType2(val) {
    var forMonth = $(".for-month");
    var forYear = $(".for-year");
    var billMonth = $(".text-billed-month");
    var billYear = $(".text-billed-year");
    for (var i = 0; i < forMonth.length; i++) {
        if (val == 1) {
            forYear.eq(i).addClass("display-year");
            billYear.addClass("active");
            billMonth.removeClass("active");
            forMonth.eq(i).removeClass("display-month");
        } else {
            forYear.eq(i).removeClass("display-year");
            billMonth.addClass("active");
            billYear.removeClass("active");
            forMonth.eq(i).addClass("display-month");
        }
    }
}
//Perfect Scrollbar
const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
