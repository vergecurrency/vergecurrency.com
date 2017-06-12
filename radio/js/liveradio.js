function calculateMenuItemsInRow(row) {
    $(row).children(".item").each(function () {
        if ($(this).prev().prev().length > 0) {
            if ($(this).position().top != $(this).prev().prev().position().top) {
                if ($("body").hasClass("rtl")) {
                    var rightMargin = $('.navbar-main-menu').width() - $('.navbar-main-menu .item:first').position().left - $('.navbar-main-menu .item:first').width();
                    $(this).css({
                        'marginRight': rightMargin
                    });
                } else {
                    var leftMargin = $('.navbar-main-menu .item:first').position().left;
                    $(this).css({
                        'marginLeft': leftMargin
                    });
                }
                $(this).before('<div class="navbar-main-menu-divider clearfix"></div>');
                return false;
            };
        }
    });
};

function checkMenuOverlay() {

    var overlaps = (function () {
        function getPositions(elem) {
            var pos, width, height;
            pos = $(elem).offset();
            width = $(elem).width();
            height = $(elem).height();
            return [
                [pos.left, pos.left + width],
                [pos.top, pos.top + height]
            ];
        }

        function comparePositions(p1, p2) {
            var r1, r2;
            r1 = p1[0] < p2[0] ? p1 : p2;
            r2 = p1[0] < p2[0] ? p2 : p1;
            return r1[1] > r2[0] || r1[0] === r2[0];
        }

        return function (a, b) {
            var pos1 = getPositions(a),
                pos2 = getPositions(b);
            return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);

        };
    })();

    $(".navbar-main-menu-divider").each(function () {
        $(this).remove()
    });

    var menu = $('.navbar-main-menu');
    var menu_item = $('.navbar-main-menu .item');

    var checkBoxOverlay = $('.navbar-search');

    var overlay = false;

    checkBoxOverlay.addClass('noTransition');
    menu_item.each(function () {
        var box = $(this),
            box1 = checkBoxOverlay;
        box.css({
            'background': 'none',
            'marginLeft': 0,
            'marginRight': 0
        });

        if (overlaps(box, box1)) {

            overlay = true;
            if ($("body").hasClass("rtl")) {
                var rightMargin = $('.navbar-main-menu').width() - $('.navbar-main-menu .item:first').position().left - $('.navbar-main-menu .item:first').width();
                box.css({
                    'marginRight': rightMargin
                });
            } else {
                var leftMargin = $('.navbar-main-menu .item:first').position().left;
                box.css({
                    'marginLeft': leftMargin
                });
            }
            $(this).before('<div class="navbar-main-menu-divider clearfix"></div>');
        }
    });
    if (overlay == false) {
        calculateMenuItemsInRow(menu)
    }
    var header = $("header .navbar"),
        menuHeightInner = $("header .navbar-height-inner");

    menuHeightInner.css({
        'height': $(".background", header).outerHeight(true)
    });
    checkBoxOverlay.removeClass('noTransition');

};

(function () {
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,
        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
        },
        scaleFix = function () {
            if (viewportmeta && (/iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua))) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false)
            }
        };
    scaleFix()
})();

jQuery(function ($) {
    "use strict";
    var socialItems = $('.social-widgets .items .item');
    var counter = 0;
    socialItems.each(function () {
        counter++;
        var itemclass = "item-0" + counter;
        $(this).addClass(itemclass)
    });
});

jQuery(function ($) {
    "use strict";
	$('#openPlaylist').on('click', function(){
		$('#playlist').toggleClass('open')
		$('.playlist-toggle').toggleClass('open');
	})
});	  

jQuery(function ($) {
    "use strict";
    var pageBody = $("body");

    function isTouchDevice() {
        return typeof window.ontouchstart != "undefined" ? true : false
    }
    if (isTouchDevice()) pageBody.addClass("touch");
    else pageBody.addClass("notouch")
});

jQuery(function ($) {
    "use strict";
    var loadmap = $(".social-widgets .item a");
    loadmap.click(function (e) {
        e.preventDefault()
    });
    loadmap.hover(function (e) {
        if (!$(this).parent().hasClass("load")) {
            var loadcontainer = $(this).parent().find(".loading");
            $.ajax({
                url: $(this).attr("href"),
                cache: false,
                success: function (data) {
                    setTimeout(function () {
                        loadcontainer.html(data)
                    }, 1000)
                }
            });
            $(this).parent().addClass("load")
        }
    })
});

jQuery(function ($) {
    "use strict";
    var usualmenu = $("ul.sf-menu");
    if (usualmenu.length != 0) usualmenu.supersubs({
        minWidth: 18,
        maxWidth: 27,
        extraWidth: 1
    }).superfish({onBeforeShow: function() {
   if($(this).parents("ul").length > 1){
      var w = $(window).width();  
      var ul_offset = $(this).parents("ul").offset();
      var ul_width = $(this).parents("ul").outerWidth();
      ul_width = ul_width + 50;
      if((ul_offset.left+ul_width > w-(ul_width/2)) && (ul_offset.left-ul_width > 0)) {
         $(this).addClass('offscreen_fix');
      }
      else {
         $(this).removeClass('offscreen_fix');
      }
   };
}})
});

jQuery(function ($) {
    "use strict";
    $(".blog-widget .posts").flexslider({
        animation: "slide",
        keyboard: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        prevText: "",
        nextText: "",
        itemMargin: 50
    });
    $(".blog-widget-small .posts").flexslider({
        animation: "slide",
        keyboard: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        prevText: "",
        nextText: "",
        itemMargin: 0
    });
});

jQuery(function($) {
    "use strict";
    if ($('.gallery').length) {
        $('.gallery .img-popup').magnificPopup({
			type:'image',
			  gallery:{
			enabled:true
		  }});
	}

});

jQuery(function ($) {
    "use strict";
    var duration = {
            menuShow: 500,
            menuSlide: 500,
            headerTransform: 500,
            switcherFade: 500
        },
        $header = $("header .navbar"),
        $window = $(window),
        $backToTop = $("header .back-to-top"),
        $body = $("body"),
        $switcher = $(".navbar-switcher", $header),
        $menu = $(".navbar-main-menu", $header),
        $menuItems = $(".item", $menu),
        $menuContainer = $("<dd class='item-content' id='menuScrollerWrapper'></dd>"),
        $menuScroller = $("<div style='overflow: hidden;' id='menuScroller'></div>"),
        $menuHeight = $("header .navbar-compact"),
        menuHeightInner = $("header .navbar-height-inner"),
        menuInner = $("header .navbar-height-inner").length,
        $menuForSlide =
        $menuContainer.add($menuHeight),
        menuWidth = 0,
        menuActive = false,
        headerHeight = $header.outerHeight(),
        latent = $window.scrollTop() >= headerHeight,
        positionHeader = false,
        active = false;

    var reculcPosHeader = function () {
        var headerCompact = false,
            menuShow = false;
        if (menuActive) {
            // $menuForSlide.hide();
            menuShow = true
        }
        if (!$header.hasClass("navbar-compact")) {
            headerCompact = true;
            $header.addClass("navbar-compact");
        }
        headerHeight = $header.outerHeight();
        positionHeader = -$header.height() + 3;
        if (headerCompact) $header.removeClass("navbar-compact");
        if (menuShow) $menuForSlide.show();
        if (parseInt($header.css("top")) < -1) $header.css("top", positionHeader + "px");
    };
    if (latent) {
        $switcher.show();
        $header.addClass("navbar-compact").css("top", positionHeader + "px")
    }

     $(window).load(function () {  
  
		checkMenuOverlay();
		reculcPosHeader();
	 })
    $backToTop.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400)
    });
    $(window).resize(function () {
		checkMenuOverlay();
        reculcPosHeader();
    });
    var menuTimer;
    $menuItems.each(function () {
        var $this = $(this),
            $dropdown = $this.next("dd.item-content");
        if ($dropdown.length) {
            var pos =
                menuWidth;
            menuWidth += 100;
            $dropdown = $("<div style='width: 50%; float: left;'></div>").append($dropdown.html());
            $menuScroller.append($dropdown);
            $this.addClass("with-sub").mouseenter(function (e) {
                e.preventDefault();
                if (menuTimer) {
                    clearTimeout(menuTimer);
                }
                if (menuActive || menuActive === 0) {
                    if (menuActive !== pos) {

                        var posN = pos / 100;


                        menuActive = pos;
                        $menuItems.removeClass("active");
                        $this.addClass("active");
                        $menuScroller.stop().animate({
                            marginLeft: -pos + "%"
                        }, {
                            duration: duration.menuSlide
                        }, function () {
                            reculcPosHeader();
                        })
                    }
                } else {
                    $menuScroller.css({
                        marginLeft: -pos + "%"
                    });
                    menuActive = pos;
                    $menuItems.removeClass("active");
                    $this.addClass("active");
                    $switcher.hide();
                    var posN = pos / 100;
                    $("#menuScrollerWrapper").css({
                        display: 'block'
                    });

                    $("#menuScrollerWrapper").css({
                        display: 'none'
                    });

                    $menuForSlide.stop().slideDown(duration.menuShow, function () {
                        reculcPosHeader();
                    });
                }
            }).mouseleave(function (e) {
                    menuTimer = setTimeout(function () {
                        $menuItems.removeClass("active");
                        $menuForSlide.slideUp(duration.menuShow, function () {
                            if (latent) $switcher.fadeIn(duration.switcherFade);
                            reculcPosHeader();
                        });
                        menuActive = false;
                    }, 200);
                });;

        }
    });
    $menuScroller.mouseenter(function (e) {
        if (menuTimer) {
            clearTimeout(menuTimer);
        }
    })
        .mouseleave(function (e) {
            menuTimer = setTimeout(function () {
                $menuItems.removeClass("active");
                $menuForSlide.slideUp(duration.menuShow, function () {
                    if (latent) $switcher.fadeIn(duration.switcherFade);
                    reculcPosHeader();
                });
                menuActive = false;
            }, 200);
        });
    $menuScroller.css("width",
        menuWidth + "%");
    $menuScroller.children("div").css("width", 100 / (menuWidth / 100) + "%");
    $menu.append($menuContainer.append($menuScroller));
    $menuHeight.css({
        height: $menuContainer.height() + (menuInner ? 0 : headerHeight - 14) + "px",
        display: "none"
    });
    $window.scroll(function () {
        if (!latent && $window.scrollTop() >= headerHeight) {
            $menuForSlide.slideUp(duration.menuShow, function () {
                if (latent) $switcher.fadeIn(duration.switcherFade)
            });
            menuActive = false;
            $switcher.show();
            $backToTop.stop().fadeIn(300);
            $header.addClass("navbar-compact");
            checkMenuOverlay();
            reculcPosHeader();
            $header.css("top", positionHeader + "px");
            latent = true;
            $body.click()
        } else if (latent && $window.scrollTop() < headerHeight) {
            $switcher.hide();
            $header.stop().css("top", "").removeClass("navbar-compact").css("top", "0px");
            checkMenuOverlay();
            $backToTop.stop().fadeOut(300);
            $switcher.removeClass("active");
            active = false;
            latent = false;
            $body.click()
        }
    });
    $switcher.click(function () {
        active = !active;
        $switcher.toggleClass("active");
        $header.animate({
            top: active ? "0" : positionHeader
        }, {
            duration: duration.headerTransform
        })
    })
}); 
jQuery(function ($) {
    "use strict";
	$("#slider .scroll-down").click(function () {
        $("html, body").animate({
            scrollTop: $("#slider").height()
        }, 400);
    });	
	$(window).scroll(function () {
        if ( $(window).scrollTop() > 0) {$(".scroll-down").stop(true.false).fadeOut(100)}
		else {$(".scroll-down").stop(true.false).fadeIn()}
	})
});
jQuery(function ($) {
    "use strict";
    $("#off-canvas-menu-toggle").bind("click", function (e) {
        $("body").toggleClass("off-canvas-menu-open");
        $("header .navbar").removeClass("navbar-compact");
        $("html, body").animate({
            scrollTop: 0
        }, "300");
        e.preventDefault()
    });
    $("#off-canvas-menu-close").bind("click", function (e) {
        $("body").removeClass("off-canvas-menu-open");
        $mobileNavItems.removeClass("active")
    });
    var $mobileNavItems = $(".mobile-nav .nav-item"),
        $mobileNavItemsLink = $(".mobile-nav .nav-item > a");
    $mobileNavItemsLink.each(function () {
        var $this =
            $(this),
            timer;
        $this.on("click", function (e) {
            e.preventDefault();
            if (!$this.parent().hasClass("active")) {
                $mobileNavItems.removeClass("active");
                $this.parent().addClass("active")
            } else $this.parent().removeClass("active")
        })
    })
});
jQuery(function ($) {
    "use strict";
    $(".social-widgets .item").each(function () {
        var $this = $(this),
            timer;
        $this.on("mouseenter", function () {
            var $this = $(this);
            if (timer) clearTimeout(timer);
            timer = setTimeout(function () {
                $this.addClass("active")
            }, 200)
        }).on("mouseleave", function () {
            var $this = $(this);
            if (timer) clearTimeout(timer);
            timer = setTimeout(function () {
                $this.removeClass("active")
            }, 100)
        }).on("click", function (e) {
            e.preventDefault()
        })
    })
});
jQuery(function ($) {
    "use strict";
    $(".expander-list").find("ul").hide().end().find(" .expander").text("+").end().find(".active").each(function () {
        $(this).parents("li ").each(function () {
            var $this = $(this),
                $ul = $this.find("> ul"),
                $name = $this.find("> .name a"),
                $expander = $this.find("> .name .expander");
            $ul.show();
            $name.css("font-weight", "bold");
            $expander.html("&minus;")
        })
    }).end().find(" .expander").each(function () {
        var $this = $(this),
            hide = $this.text() === "+",
            $ul = $this.parent(".name").next("ul"),
            $name = $this.next("a");
        $this.click(function () {
            if ($ul.css("display") ==
                "block") $ul.slideUp("slow");
            else $ul.slideDown("slow");
            $(this).html(hide ? "&minus;" : "+");
            $name.css("font-weight", hide ? "bold" : "normal");
            hide = !hide
        })
    })
});
jQuery(function ($) {
    "use strict";
    $(".collapsed-block .expander").click(function (e) {
        var collapse_content_selector = $(this).attr("href");
        var expander = $(this);
        if (!$(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
        else expander.removeClass("open").html("+"); if (!$(collapse_content_selector).hasClass("open")) $(collapse_content_selector).addClass("open").slideDown("normal");
        else $(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    })
});
jQuery(function ($) {
	
    "use strict";
	
	if ($('.slider').length > 0) {
		$('.slider').height($(window).height()-$('header').height()+10);
		$(".slider .scroll-down").click(function () {
			$("html, body").animate({
				scrollTop: $(".slider").height()
			}, 400);
		});
		var glide = $('.slider').glide().data('api_glide');
	}
	
	if ($('.scrollpane').length > 0) {
		if ($(window).width() > 767) $('#content-player .scrollpane').height($('.equal-height').height());
		$('#content-player .scrollpane').mCustomScrollbar();
	}
	$(window).resize(function(){
	if ($('.slider').length > 0) {
		$('.slider').height($(window).height()-$('header').height()+10);
		$(".slider .scroll-down").click(function () {
			$("html, body").animate({
				scrollTop: $(".slider").height()
			}, 400);
		});
		var glide = $('.slider').glide().data('api_glide');
	}
	
	if ($('.scrollpane').length > 0) {
		if ($(window).width() > 767) $('#content-player .scrollpane').height($('.equal-height').height());
		$('#content-player .scrollpane').mCustomScrollbar();
		}  			
	}); 
  
 jQuery(function ($) {
	
    "use strict";   
  	
    $('#subscribe').validate({
        rules: {
            subscribemail: {
                required: true,
                email: true
            }

        },
        messages: {
			subscribemail: {
                required: "Please enter your email"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process-subscribe.php",
                success: function() {
                      $('#subscribeSuccess').fadeIn();
					  $( '#subscribe' ).each(function(){this.reset();});
                },
                error: function() {
                    $('#subscribe').fadeTo( "slow", 0, function() {
                        $('#subscribeError').fadeIn();
                    });
                }
            });
        }
    });

  });
	
  $(".img-gallery-thumb .item a").on("click", function(e) {
	    e.preventDefault();
        $('#img-gallery-big img').addClass('hiddenImg');
        $('#img-gallery-big').addClass('load');
        var i = $('<img />').attr('src',this.href).load(function() {
            $('#img-gallery-big img').attr('src', i.attr('src'));
        $('#img-gallery-big').removeClass('load');
        $('#img-gallery-big img').removeClass('hiddenImg');
        });
    });

 });

$(window).load(function () {
	
	$("body").width($("body").width() + 1).width("auto");

    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var animate = $(".notouch .animate");
    var animateDelay = $(".notouch .animate-delay-outer");
    var animateDelayItem = $(".notouch .animate-delay");
    if (windowWidth > 767) {
        animate.bind("inview", function (event, visible) {
            if (visible && !$(this).hasClass("animated")) $(this).addClass("animated")
        });
        animateDelay.bind("inview", function (event, visible) {
            if (visible && !$(this).hasClass("animated")) {
                var j = -1;
                var $this = $(this).find(".animate-delay");
                $this.each(function () {
                    var $this = jQuery(this);
                    j++;
                    setTimeout(function () {
                        $this.addClass("animated")
                    }, 200 * j)
                });
                $(this).addClass("animated")
            }
        })
    } else {
        animate.each(function () {
            $(this).removeClass("animate")
        });
        animateDelayItem.each(function () {
            $(this).removeClass("animate-delay")
        })
    }

    $(".loader").fadeOut("slow");
    if ($(".notouch .parallax").length > 0) $(".notouch .parallax").parallax({
        speed: 0,
        axis: "y"
    });
	
            
	
	var $isotopPost = $(".gallery")
    if ($isotopPost.length) {
        $isotopPost.isotope({
			masonry: {
			   itemSelector: ".item",
			   gutter: 12
			  }        
		});
        var $optionSets = $(".option-set"),
            $optionLinks = $optionSets.find("a");
        $optionLinks.click(function () {
            var $this = $(this);
            if ($this.hasClass("selected")) return false;
            var $optionSet = $this.parents(".option-set");
            $optionSet.find(".selected").removeClass("selected");
            $this.addClass("selected");
            var options = {},
                key = $optionSet.attr("data-option-key"),
                value = $this.attr("data-option-value");
            value = value === "false" ? false : value;
            options[key] = value;
            if (key === "layoutMode" && typeof changeLayoutMode === "function") changeLayoutMode($this, options);
            else $isotopPost.isotope(options);
            return false
        })

    }
    $(window).resize(function () {

        checkMenuOverlay();

    })
});