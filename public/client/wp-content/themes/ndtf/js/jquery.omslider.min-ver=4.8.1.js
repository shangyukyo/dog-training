/*
 * jQuery omSlider Plugin
 * Copyright (c) 2012 Strelkey, www.olevmedia.com
 * Version: 1.2.5
 */

;(function(e){function k(g,b,a,d){e(b).stop(!0,!0);a.resize&&g.stop(!0,!0);d=a.currSlide+d;d>b.length-1?d=0:0>d&&(d=b.length-1);e.isFunction(a.before)&&a.before(b[a.currSlide],b[d],a.currSlide,d);l(g,b,a,d)}function l(g,b,a,d){if(d!=a.currSlide){m(a.pager,d);e(b).stop(!0,!0);a.resize&&g.stop(!0,!0);var f=a.currSlide;a.currSlide=d;e(b[f]).css("z-index","1").removeClass("active");a.fadePrev&&e(b[f]).fadeTo(a.speed,0);e(b[d]).fadeTo(0,0).css({position:"absolute",top:0,left:0,right:0,zIndex:2}).addClass("active").fadeTo(a.speed, 1,function(){e(b[f]).hide();e(this).css({position:"static"});!a.resize&&e.isFunction(a.after)&&a.after(b[a.currSlide],b[d],a.currSlide,d)});if(a.resize){var c=e(b[d]).outerHeight();g.css("height",g.height()+"px").animate({height:c+"px"},a.speed,function(){e(this).css("height","auto");e.isFunction(a.after)&&a.after(b[a.currSlide],b[d],a.currSlide,d)})}}}function n(g,b,a){var d=e(a.pager);d.empty();for(var f,c=0;c<b.length;c++)f=e.isFunction(a.pagerAnchorBuilder)?a.pagerAnchorBuilder(c):'<a href="#">'+ (c+1)+"</a>",f=e(f),f.data("index",c),f.click(function(c){c.preventDefault();l(g,b,a,e(this).data("index"))}).appendTo(d);m(a.pager,a.currSlide)}function m(g,b){e(g).each(function(){e(this).children().removeClass("active").eq(b).addClass("active")})}e.fn.omSlider=function(g){return this.each(function(){g=g||{};var b=e(this),a,d=b.children(),f=d.get();if(!(2>f.length)){var c=e.extend({},e.fn.omSlider.defaults,g);"absolute"==b.css("position")?!0:b.css("position","relative");b.css("overflow","hidden"); d.filter(":eq("+c.active+")").length?(d.filter(":eq("+c.active+")").addClass("active").show(),d.filter(":not(:eq("+c.active+"))").hide(),c.currSlide=c.active):(d.filter(":first").addClass("active").show(),d.filter(":gt(0)").hide(),c.currSlide=0);e.isFunction(c.before)&&c.before(null,f[c.currSlide],null,c.currSlide);c.prev&&e(c.prev).bind("click",function(a){a.preventDefault();k(b,f,c,-1)});c.next&&e(c.next).bind("click",function(a){a.preventDefault();k(b,f,c,1)});c.pager&&n(b,f,c);c.timeout&&(a=setInterval(function(){k(b, f,c,1)},c.timeout));c.timeout&&c.pause&&b.mouseenter(function(){clearInterval(a)}).mouseleave(function(){a=setInterval(function(){k(b,f,c,1)},c.timeout)});var h=-1;b.bind("touchstart",function(a){h=(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0]).pageX});b.bind("touchmove",function(a){0<=h&&(a=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],30<a.pageX-h?(k(b,f,c,-1),h=-1):-30>a.pageX-h&&(k(b,f,c,1),h=-1))});e(document).bind("touchend",function(){h=-1})}})};e.fn.omSlider.defaults= {speed:1E3,next:null,prev:null,pager:null,pagerAnchorBuilder:null,resize:!0,fadePrev:!1,before:null,after:null,active:0,timeout:0,pause:0}})(jQuery);