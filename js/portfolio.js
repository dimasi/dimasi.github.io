webpackJsonp([0],{1:function(n,e,t){var i=t(20),r=t(21);n.exports=function(){i.init({layerHolder:".page-header__bg-video",videoSrc:"media-background.mp4",gifSrc:"media-background.gif",className:"page-header__bg-video"}),r.scroll([{selector:".page-header__user",divider:.05},{selector:".page-header__bg-user",divider:.07},{selector:".page-header__bg",divider:.09}])}()},10:function(n,e){},119:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var i=t(19),r=(t.n(i),t(11)),o=(t.n(r),t(25)),a=(t.n(o),t(17)),s=(t.n(a),t(22)),c=(t.n(s),t(4)),u=(t.n(c),t(24)),d=(t.n(u),t(54)),l=(t.n(d),t(14)),f=(t.n(l),t(12)),v=(t.n(f),t(6)),_=(t.n(v),t(16)),m=(t.n(_),t(15)),p=(t.n(m),t(13)),g=(t.n(p),t(7)),h=(t.n(g),t(9)),b=(t.n(h),t(5)),$=(t.n(b),t(8)),x=(t.n($),t(10)),y=(t.n(x),t(18)),I=(t.n(y),t(46)),k=(t.n(I),t(36)),C=(t.n(k),t(34)),O=(t.n(C),t(53)),P=(t.n(O),t(55)),S=(t.n(P),t(48)),w=(t.n(S),t(47)),j=(t.n(w),t(39)),D=(t.n(j),t(2)),T=t(3),B=t(27);t(1),D.init(),T.init(),B.init(n(".combo-slider"))}).call(e,t(0))},2:function(n,e,t){(function(e){n.exports=function(){var n={duration:1100},t=function(t){n=Object.assign(n,t),e(document).on("click",".anchor-link",function(t){t.preventDefault();var i=e(t.currentTarget).attr("href"),r=e(i).offset().top;e("html, body").animate({scrollTop:r},n.duration)})};return{init:t}}()}).call(e,t(0))},22:function(n,e){},24:function(n,e){},25:function(n,e){},27:function(n,e,t){(function(e){var i=t(58),r=t(56);n.exports=function(){var n={duration:300,initialIndex:0},t=function(t,r){r=Object.assign(n,r);var a={$el:t,$toggler:t.find(".combo-slider__nav-btn"),$title:t.find(".combo-slider__slide-title"),$features:t.find(".combo-slider__work-features"),$slideLink:t.find(".combo-slider__slide-link"),data:l(t),duration:r.duration,currentIndex:r.initialIndex};a.slidesCount=a.data.length,o(a);var s=i.charsOneByOne(a.data[0].title);e(".combo-slider__slide-title").html(s),setTimeout(function(){s.addClass("chars-one-by-one_state_active")},1e3)},o=function(n){var t=n.$el.find(".combo-slider__main-slider"),i=n.$el.find(".combo-slider__nav-btn_slider_prev .combo-slider__nav-slider"),o=n.$el.find(".combo-slider__nav-btn_slider_next .combo-slider__nav-slider");n.$navSliders=t.add(i).add(o);var s=void 0;n.data.forEach(function(t){s=e("<span class='carousel__item'></span>").append(d(t.imgSrc,"carousel__img")),n.$navSliders.append(s)}),r.init(t,{type:"fade",initialIndex:n.currentIndex}),r.init(i,{type:"vertical",initialIndex:n.currentIndex-1<0?n.slidesCount-1:n.currentIndex-1}),r.init(o,{type:"vertical",reverse:!0,initialIndex:n.currentIndex+1>=n.slidesCount?0:n.currentIndex+1}),a(n)},a=function(n){n.$toggler.on("click",function(){return s(n)})},s=function(n){n.inProcess||(n.inProcess=!0,n.currentIndex=c(n,n.currentIndex))},c=function(n){var e=n.currentIndex==n.slidesCount-1?0:n.currentIndex+1,t=0;return n.$navSliders.on("carousel:move:complete",function(){return n.$el.trigger("change:complete")}),n.$el.on("change:complete",function(){t++,4==t&&(n.inProcess=!1)}),n.$navSliders.trigger("carousel:move"),u(n,e),e},u=function(n,e){var t=i.charsOneByOne(n.data[e].title);n.$title.html(t),n.$features.html(""),n.data[e].features.forEach(function(e){n.$features.append("<li class='work-features__item'>"+e+"</li>")}),n.$slideLink.attr("href",n.data[e].link),setTimeout(function(){t.addClass("chars-one-by-one_state_active")},150),n.$el.trigger("change:complete")},d=function(n,t){return e("<img>").attr("src",n).addClass(t)},l=function(n){var t=n.find(".slider-data__item"),i=t.toArray().map(function(n){var t=e(n);return{link:t.data("link"),imgSrc:t.find(".slider-data__img").attr("src"),title:t.find(".slider-data__title").text(),features:t.find(".slider-data__feature").toArray().map(function(n){return e(n).text()})}});return t.remove(),i};return{init:t}}()}).call(e,t(0))},3:function(n,e,t){(function(e){n.exports=function(){var n=void 0,t=void 0,i=!1,r=e("body, html");return{init:function(){n=e(".menu"),t=e(".hamburger"),t.on("click",function(e){e.preventDefault(),i?(r.css("overflow","visible"),n.removeClass("menu_state_active"),t.removeClass("hamburger_state_cross"),i=!1):(r.css("overflow","hidden"),n.addClass("menu_state_active"),t.addClass("hamburger_state_cross"),i=!0)})}}}()}).call(e,t(0))},34:function(n,e){},36:function(n,e){},39:function(n,e){},4:function(n,e){},46:function(n,e){},47:function(n,e){},48:function(n,e){},5:function(n,e){},53:function(n,e){},54:function(n,e){},55:function(n,e){},56:function(n,e,t){(function(e){n.exports=function(){var n={initialIndex:0,duration:400,type:"horizontal",reverse:!1,$toggler:!1},t=function(e,t){t=Object.assign(n,t);var r=e.find(".carousel__item"),o={$el:e,$slides:r,slidesCount:r.length,$toggler:t.$toggler,currentIndex:t.initialIndex,shiftProp:a(t),type:"fade"==t.type?"fade":"slide",duration:t.duration};s(o,-1),c(o,o.currentIndex),i(o)},i=function(n){n.$toggler&&n.$toggler.on("click",function(){return r(n)}),n.$el.on("carousel:move",function(){return r(n)})},r=function(n){n.inProcess||(n.inProcess=!0,n.currentIndex=o(n,n.currentIndex))},o=function(n){var t=n.currentIndex==n.slidesCount-1?0:n.currentIndex+1;return e.when(s(n,n.currentIndex)).done(c(n,t)).done(function(){n.inProcess=!1,n.$el.trigger("carousel:move:complete")}),t},a=function(n){return"vertical"==n.type?n.reverse?"bottom":"top":n.reverse?"right":"left"},s=function(n,t){var i=e.Deferred(),r={};return r[n.shiftProp]="-100%",t<0?("fade"==n.type&&n.$slides.hide(),"slide"==n.type&&(n.$slides.css(r),i.resolve())):("fade"==n.type&&e(n.$slides[t]).fadeOut(n.duration,function(){return i.resolve()}),"slide"==n.type&&(r[n.shiftProp]="100%",e(n.$slides[t]).animate(r,n.duration,function(){r[n.shiftProp]="-100%",e(n.$slides[t]).css(r),i.resolve()}))),i.promise()},c=function(n,t){var i=e.Deferred();if("fade"==n.type&&e(n.$slides[t]).fadeIn(n.duration,function(){return i.resolve()}),"slide"==n.type){var r={};r[n.shiftProp]="0%",e(n.$slides[t]).animate(r,n.duration,function(){return i.resolve()})}return i.promise()};return{init:t}}()}).call(e,t(0))},58:function(n,e,t){(function(e){n.exports=function(){var n=function(n,i){i=Object.assign({delay:30,duration:70},i);var r=void 0,o=t(n).map(function(n,t){return r="opacity "+i.duration+"ms linear "+i.delay*(t+1)+"ms",e(n).addClass("chars-one-by-one__item").css("transition",r)}).reduce(function(n,e){return n.add(e)});return e("<span class='chars-one-by-one'></span>").html(o)},t=function(n,e){return e=e||"span",n.split("").map(function(n){return"<"+e+">"+n+"</"+e+">"})};return{charsOneByOne:n}}()}).call(e,t(0))},6:function(n,e){},7:function(n,e){},8:function(n,e){},9:function(n,e){}},[119]);