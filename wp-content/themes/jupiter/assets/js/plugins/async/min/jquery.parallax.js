!function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(o,i){function r(){var r=t.scrollTop();l.each(function(){var t=n(this),a=t.offset().top,s=u(t);r>a+s||a>r+e||l.css("backgroundPosition",o+" "+Math.round((h-r)*i)+"px")})}var u,h,l=n(this);l.each(function(){h=l.offset().top}),u=function(n){return n.outerHeight(!0)},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===outerHeight)&&(outerHeight=!0),t.bind("scroll",r).resize(r),r()}}(jQuery);