webpackJsonp([3],{118:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var o=i(19),c=(i.n(o),i(11)),l=(i.n(c),i(25)),t=(i.n(l),i(17)),f=(i.n(t),i(22)),a=(i.n(f),i(14)),r=(i.n(a),i(12)),u=(i.n(r),i(16)),d=(i.n(u),i(15)),p=(i.n(d),i(24)),g=(i.n(p),i(35)),s=(i.n(g),i(50)),_=(i.n(s),i(13)),v=(i.n(_),i(49)),b=(i.n(v),i(45)),m=(i.n(b),i(37)),k=(i.n(m),i(18)),S=(i.n(k),i(42)),h=(i.n(S),i(38)),w=(i.n(h),i(26)),T=i(20),y=i(21),P=i(28);n(function(){T.init({layerHolder:".page-welcome__bg-media-holder",videoSrc:"media-background.mp4",gifSrc:"media-background.gif",className:"page-welcome__bg-media"}),w.touchevents().then(function(n){n||y.mousemove([{selector:".flip-panel",divider:0},{selector:".page-welcome__bg",divider:.01}])}),P.init({frontTogglerSelector:".flip-panel__front-toggler",backTogglerSelector:".flip-panel__back-toggler",flipPanelSelector:".flip-panel"})})}).call(e,i(0))},22:function(n,e){},24:function(n,e){},25:function(n,e){},28:function(n,e,i){(function(e){n.exports=function(){var n=void 0,i=void 0,o=void 0,c="flip-panel_state_flipped",l=function(l){n=e(l.frontTogglerSelector),i=e(l.backTogglerSelector),o=e(l.flipPanelSelector),n.one("click",function(){e(".flip-panel__side_side_back").css("visibility","visible")}),n.on("click",function(){o.addClass(c),n.hide()}),i.on("click",function(e){e.preventDefault(),o.removeClass(c),n.fadeIn()})};return{init:l}}()}).call(e,i(0))},35:function(n,e){},37:function(n,e){},38:function(n,e){},42:function(n,e){},45:function(n,e){},49:function(n,e){},50:function(n,e){}},[118]);