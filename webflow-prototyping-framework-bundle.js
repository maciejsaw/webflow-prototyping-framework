/*
Copyright (c) 2010 Aaron BLohowiak
Dual licensed under the MIT and GPL licenses.
*/


// (function(exports){
//   var BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

//   exports.newId = function(len, radix) {
//     var chars = BASE64URICHARS, newId = [], i=0;
//     radix = radix || chars.length;
//     len = len || 22;

//     for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

//     return newId.join('');
//   };

// })(typeof exports === 'undefined'? this['newId']={}: exports);;


BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

newId = function(len, radix) {
	var chars = BASE64URICHARS, newId = [], i=0;
	radix = radix || chars.length;
	len = len || 22;

	for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

	return newId.join('');
};

(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});

/*! tooltipster v4.2.3 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.3",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state&&b.option("animationDuration",0)._close(null,null,!0),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created");
},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});

(function(deparam){
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        try {
            var jquery = require('jquery');
        } catch (e) {
        }
        module.exports = deparam(jquery);
    } else if (typeof define === 'function' && define.amd){
        define(['jquery'], function(jquery){
            return deparam(jquery);
        });
    } else {
        var global;
        try {
          global = (false || eval)('this'); // best cross-browser way to determine global for < ES5
        } catch (e) {
          global = window; // fails only if browser (https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives)
        }
        global.deparam = deparam(global.jQuery); // assume jQuery is in global namespace
    }
})(function ($) {
    var deparam = function( params, coerce ) {
        var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

        // If params is an empty string or otherwise falsy, return obj.
        if (!params) {
            return obj;
        }

        // Iterate over all name=value pairs.
        params.replace(/\+/g, ' ').split('&').forEach(function(v){
            var param = v.split( '=' ),
            key = decodeURIComponent( param[0] ),
            val,
            cur = obj,
            i = 0,

            // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
            // into its component parts.
            keys = key.split( '][' ),
            keys_last = keys.length - 1;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if ( /\[/.test( keys[0] ) && /\]$/.test( keys[ keys_last ] ) ) {
                // Remove the trailing ] from the last keys part.
                keys[ keys_last ] = keys[ keys_last ].replace( /\]$/, '' );

                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat( keys );

                keys_last = keys.length - 1;
            } else {
                // Basic 'foo' style key.
                keys_last = 0;
            }

            // Are we dealing with a name=value pair, or just a name?
            if ( param.length === 2 ) {
                val = decodeURIComponent( param[1] );

                // Coerce values.
                if ( coerce ) {
                    val = val && !isNaN(val) && ((+val + '') === val) ? +val        // number
                    : val === 'undefined'                       ? undefined         // undefined
                    : coerce_types[val] !== undefined           ? coerce_types[val] // true, false, null
                    : val;                                                          // string
                }

                if ( keys_last ) {
                    // Complex key, build deep object structure based on a few rules:
                    // * The 'cur' pointer starts at the object top-level.
                    // * [] = array push (n is set to array length), [n] = array if n is
                    //   numeric, otherwise object.
                    // * If at the last keys part, set the value.
                    // * For each keys part, if the current level is undefined create an
                    //   object or array based on the type of the next keys part.
                    // * Move the 'cur' pointer to the next level.
                    // * Rinse & repeat.
                    for ( ; i <= keys_last; i++ ) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                        ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
                        : val;
                    }

                } else {
                    // Simple key, even simpler rules, since only scalars and shallow
                    // arrays are allowed.

                    if ( Object.prototype.toString.call( obj[key] ) === '[object Array]' ) {
                        // val is already an array, so push on the next value.
                        obj[key].push( val );

                    } else if ( {}.hasOwnProperty.call(obj, key) ) {
                        // val isn't an array, but since a second value has been specified,
                        // convert val into an array.
                        obj[key] = [ obj[key], val ];

                    } else {
                        // val is a scalar.
                        obj[key] = val;
                    }
                }

            } else if ( key ) {
                // No value was defined, so set something meaningful.
                obj[key] = coerce
                ? undefined
                : '';
            }
        });

        return obj;
    };
    if ($) {
      $.prototype.deparam = $.deparam = deparam;
    }
    return deparam;
});


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));


//!!! Careful! One line in this lib changed to enable scroll on iPhone!!!


// DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

(function(fn) {
  if (typeof define === 'function' && define.amd) {
        define([], fn);
    } else if ((typeof module !== "undefined" && module !== null) && module.exports) {
        module.exports = fn;
  } else {
    fn();
  }
})(function(){
  var assign = Object.assign || window.jQuery && jQuery.extend;

  // Number of pixels a pressed pointer travels before movestart
  // event is fired.
  var threshold = 8;

  // Shim for requestAnimationFrame, falling back to timer. See:
  // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  var requestFrame = (function(){
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(fn, element){
        return window.setTimeout(function(){
          fn();
        }, 25);
      }
    );
  })();

  var ignoreTags = {
      textarea: true,
      input: true,
      select: true,
      button: true
    };

  var mouseevents = {
    move:   'mousemove',
    cancel: 'mouseup dragstart',
    end:    'mouseup'
  };

  var touchevents = {
    move:   'touchmove',
    cancel: 'touchend',
    end:    'touchend'
  };

  var rspaces = /\s+/;


  // DOM Events

  var eventOptions = { bubbles: true, cancelable: true };

  var eventsSymbol = Symbol('events');

  function createEvent(type) {
    return new CustomEvent(type, eventOptions);
  }

  function getEvents(node) {
    return node[eventsSymbol] || (node[eventsSymbol] = {});
  }

  function on(node, types, fn, data, selector) {
    types = types.split(rspaces);

    var events = getEvents(node);
    var i = types.length;
    var handlers, type;

    function handler(e) { fn(e, data); }

    while (i--) {
      type = types[i];
      handlers = events[type] || (events[type] = []);
      handlers.push([fn, handler]);
      node.addEventListener(type, handler);
    }
  }

  function off(node, types, fn, selector) {
    types = types.split(rspaces);

    var events = getEvents(node);
    var i = types.length;
    var type, handlers, k;

    if (!events) { return; }

    while (i--) {
      type = types[i];
      handlers = events[type];
      if (!handlers) { continue; }
      k = handlers.length;
      while (k--) {
        if (handlers[k][0] === fn) {
          node.removeEventListener(type, handlers[k][1]);
          handlers.splice(k, 1);
        }
      }
    }
  }

  function trigger(node, type, properties) {
    // Don't cache events. It prevents you from triggering an event of a
    // given type from inside the handler of another event of that type.
    var event = createEvent(type);
    if (properties) { assign(event, properties); }
    node.dispatchEvent(event);
  }


  // Constructors

  function Timer(fn){
    var callback = fn,
        active = false,
        running = false;

    function trigger(time) {
      if (active){
        callback();
        requestFrame(trigger);
        running = true;
        active = false;
      }
      else {
        running = false;
      }
    }

    this.kick = function(fn) {
      active = true;
      if (!running) { trigger(); }
    };

    this.end = function(fn) {
      var cb = callback;

      if (!fn) { return; }

      // If the timer is not running, simply call the end callback.
      if (!running) {
        fn();
      }
      // If the timer is running, and has been kicked lately, then
      // queue up the current callback and the end callback, otherwise
      // just the end callback.
      else {
        callback = active ?
          function(){ cb(); fn(); } :
          fn ;

        active = true;
      }
    };
  }


  // Functions

  function noop() {}

  function preventDefault(e) {
    e.preventDefault();
  }

  function isIgnoreTag(e) {
    return !!ignoreTags[e.target.tagName.toLowerCase()];
  }

  function isPrimaryButton(e) {
    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    return (e.which === 1 && !e.ctrlKey && !e.altKey);
  }

  function identifiedTouch(touchList, id) {
    var i, l;

    if (touchList.identifiedTouch) {
      return touchList.identifiedTouch(id);
    }

    // touchList.identifiedTouch() does not exist in
    // webkit yet… we must do the search ourselves...

    i = -1;
    l = touchList.length;

    while (++i < l) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
  }

  function changedTouch(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier);

    // This isn't the touch you're looking for.
    if (!touch) { return; }

    // Chrome Android (at least) includes touches that have not
    // changed in e.changedTouches. That's a bit annoying. Check
    // that this touch has changed.
    if (touch.pageX === data.pageX && touch.pageY === data.pageY) { return; }

    return touch;
  }


  // Handlers that decide when the first movestart is triggered

  function mousedown(e){
    // Ignore non-primary buttons
    if (!isPrimaryButton(e)) { return; }

    // Ignore form and interactive elements
    if (isIgnoreTag(e)) { return; }

    on(document, mouseevents.move, mousemove, e);
    on(document, mouseevents.cancel, mouseend, e);
  }

  function mousemove(e, data){
    checkThreshold(e, data, e, removeMouse);
  }

  function mouseend(e, data) {
    removeMouse();
  }

  function removeMouse() {
    off(document, mouseevents.move, mousemove);
    off(document, mouseevents.cancel, mouseend);
  }

  function touchstart(e) {
    // Don't get in the way of interaction with form elements
    if (ignoreTags[e.target.tagName.toLowerCase()]) { return; }

    var touch = e.changedTouches[0];

    // iOS live updates the touch objects whereas Android gives us copies.
    // That means we can't trust the touchstart object to stay the same,
    // so we must copy the data. This object acts as a template for
    // movestart, move and moveend event objects.
    var data = {
      target:     touch.target,
      pageX:      touch.pageX,
      pageY:      touch.pageY,
      identifier: touch.identifier,

      // The only way to make handlers individually unbindable is by
      // making them unique.
      touchmove:  function(e, data) { touchmove(e, data); },
      touchend:   function(e, data) { touchend(e, data); }
    };

    on(document, touchevents.move, data.touchmove, data);
    on(document, touchevents.cancel, data.touchend, data);
  }

  function touchmove(e, data) {
    var touch = changedTouch(e, data);
    if (!touch) { return; }
    checkThreshold(e, data, touch, removeTouch);
  }

  function touchend(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier);
    if (!touch) { return; }
    removeTouch(data);
  }

  function removeTouch(data) {
    off(document, touchevents.move, data.touchmove);
    off(document, touchevents.cancel, data.touchend);
  }

  function checkThreshold(e, data, touch, fn) {
    var distX = touch.pageX - data.pageX;
    var distY = touch.pageY - data.pageY;

    // Do nothing if the threshold has not been crossed.
    if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

    triggerStart(e, data, touch, distX, distY, fn);
  }

  function triggerStart(e, data, touch, distX, distY, fn) {
    var touches = e.targetTouches;
    var time = e.timeStamp - data.timeStamp;

    // Create a movestart object with some special properties that
    // are passed only to the movestart handlers.
    var template = {
      altKey:     e.altKey,
      ctrlKey:    e.ctrlKey,
      shiftKey:   e.shiftKey,
      startX:     data.pageX,
      startY:     data.pageY,
      distX:      distX,
      distY:      distY,
      deltaX:     distX,
      deltaY:     distY,
      pageX:      touch.pageX,
      pageY:      touch.pageY,
      velocityX:  distX / time,
      velocityY:  distY / time,
      identifier: data.identifier,
      targetTouches: touches,
      finger: touches ? touches.length : 1,
      enableMove: function() {
        this.moveEnabled = true;
        this.enableMove = noop;
        //e.preventDefault(); //commented out to allow scroll in menu on iphone
      }
    };

    // Trigger the movestart event.
    trigger(data.target, 'movestart', template);

    // Unbind handlers that tracked the touch or mouse up till now.
    fn(data);
  }


  // Handlers that control what happens following a movestart

  function activeMousemove(e, data) {
    var timer  = data.timer;

    data.touch = e;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeMouseend(e, data) {
    var target = data.target;
    var event  = data.event;
    var timer  = data.timer;

    removeActiveMouse();

    endEvent(target, event, timer, function() {
      // Unbind the click suppressor, waiting until after mouseup
      // has been handled.
      setTimeout(function(){
        off(target, 'click', preventDefault);
      }, 0);
    });
  }

  function removeActiveMouse() {
    off(document, mouseevents.move, activeMousemove);
    off(document, mouseevents.end, activeMouseend);
  }

  function activeTouchmove(e, data) {
    var event = data.event;
    var timer = data.timer;
    var touch = changedTouch(e, event);

    if (!touch) { return; }

    // Stop the interface from gesturing
    e.preventDefault();

    event.targetTouches = e.targetTouches;
    data.touch = touch;
    data.timeStamp = e.timeStamp;

    timer.kick();
  }

  function activeTouchend(e, data) {
    var target = data.target;
    var event  = data.event;
    var timer  = data.timer;
    var touch  = identifiedTouch(e.changedTouches, event.identifier);

    // This isn't the touch you're looking for.
    if (!touch) { return; }

    removeActiveTouch(data);
    endEvent(target, event, timer);
  }

  function removeActiveTouch(data) {
    off(document, touchevents.move, data.activeTouchmove);
    off(document, touchevents.end, data.activeTouchend);
  }


  // Logic for triggering move and moveend events

  function updateEvent(event, touch, timeStamp) {
    var time = timeStamp - event.timeStamp;

    event.distX =  touch.pageX - event.startX;
    event.distY =  touch.pageY - event.startY;
    event.deltaX = touch.pageX - event.pageX;
    event.deltaY = touch.pageY - event.pageY;

    // Average the velocity of the last few events using a decay
    // curve to even out spurious jumps in values.
    event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
    event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
    event.pageX =  touch.pageX;
    event.pageY =  touch.pageY;
  }

  function endEvent(target, event, timer, fn) {
    timer.end(function(){
      trigger(target, 'moveend', event);
      return fn && fn();
    });
  }


  // Set up the DOM

  function movestart(e) {
    if (e.defaultPrevented) { return; }
    if (!e.moveEnabled) { return; }

    var event = {
      startX:        e.startX,
      startY:        e.startY,
      pageX:         e.pageX,
      pageY:         e.pageY,
      distX:         e.distX,
      distY:         e.distY,
      deltaX:        e.deltaX,
      deltaY:        e.deltaY,
      velocityX:     e.velocityX,
      velocityY:     e.velocityY,
      identifier:    e.identifier,
      targetTouches: e.targetTouches,
      finger:        e.finger
    };

    var data = {
      target:    e.target,
      event:     event,
      timer:     new Timer(update),
      touch:     undefined,
      timeStamp: e.timeStamp
    };

    function update(time) {
      updateEvent(event, data.touch, data.timeStamp);
      trigger(data.target, 'move', event);
    }

    if (e.identifier === undefined) {
      // We're dealing with a mouse event.
      // Stop clicks from propagating during a move
      on(e.target, 'click', preventDefault);
      on(document, mouseevents.move, activeMousemove, data);
      on(document, mouseevents.end, activeMouseend, data);
    }
    else {
      // In order to unbind correct handlers they have to be unique
      data.activeTouchmove = function(e, data) { activeTouchmove(e, data); };
      data.activeTouchend = function(e, data) { activeTouchend(e, data); };

      // We're dealing with a touch.
      on(document, touchevents.move, data.activeTouchmove, data);
      on(document, touchevents.end, data.activeTouchend, data);
    }
  }

  on(document, 'mousedown', mousedown);
  on(document, 'touchstart', touchstart);
  on(document, 'movestart', movestart);


  // jQuery special events
  //
  // jQuery event objects are copies of DOM event objects. They need
  // a little help copying the move properties across.

  if (!window.jQuery) { return; }

  var properties = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');

  function enableMove1(e) { e.enableMove(); }
  function enableMove2(e) { e.enableMove(); }
  function enableMove3(e) { e.enableMove(); }

  function add(handleObj) {
    var handler = handleObj.handler;

    handleObj.handler = function(e) {
      // Copy move properties across from originalEvent
      var i = properties.length;
      var property;

      while(i--) {
        property = properties[i];
        e[property] = e.originalEvent[property];
      }

      handler.apply(this, arguments);
    };
  }

  jQuery.event.special.movestart = {
    setup: function() {
      // Movestart must be enabled to allow other move events
      on(this, 'movestart', enableMove1);

      // Do listen to DOM events
      return false;
    },

    teardown: function() {
      off(this, 'movestart', enableMove1);
      return false;
    },

    add: add
  };

  jQuery.event.special.move = {
    setup: function() {
      on(this, 'movestart', enableMove2);
      return false;
    },

    teardown: function() {
      off(this, 'movestart', enableMove2);
      return false;
    },

    add: add
  };

  jQuery.event.special.moveend = {
    setup: function() {
      on(this, 'movestart', enableMove3);
      return false;
    },

    teardown: function() {
      off(this, 'movestart', enableMove3);
      return false;
    },

    add: add
  };
});

//** END External Plugin **//
//TODO Move to separate file

function formatDecimalNumber(numberToFormat, decimalNumbers) {
  if (typeof decimalNumbers === 'undefined') {
    decimalNumbers = 2;
  }
  var number = parseFloat(numberToFormat);
  var formatted = (number.toFixed(decimalNumbers)).replace('.', ',');
  return formatted;
}

function stringToDecimal(stringToFormat) {
  var number = stringToFormat.replace(',', '.');
  number = parseFloat(number);
  return number;
}

function replaceComa(stringToFormat) {
  var cleaned = stringToFormat.replace(',', '.');
  return cleaned;
}

function compareValues(currentValue, newValue) {
  if (!$.isNumeric(currentValue) || !$.isNumeric(newValue)) {
    return "cannot compare";
  }

  currentValue = currentValue * 1;
  newValue = newValue * 1;
  if ( currentValue == newValue ) {
    return "equal";
  }
  else if ( newValue > currentValue ) {
    return "new-is-larger";
  }
  else if ( newValue < currentValue ) {
    return "new-is-lower";
  }
}

function arrayToString(arrayToConvert) {
  if ($.isArray(arrayToConvert)) {
    return arrayToConvert.join(' ');
  } else {
    return '';
  }
}

//https://stackoverflow.com/questions/4597900/checking-something-isempty-in-javascript
function isEmpty(val) {

    // test results
    //---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    // true      false, boolean
    // false     false, boolean
    // Date      false
    // function  false

        if (val === undefined)
        return true;

    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;

    if (val == null || val.length === 0)        // null or 0 length array
        return true;

    if (typeof (val) == "object") {
        // empty object

        var r = true;

        for (var f in val)
            r = false;

        return r;
    }

    return false;
}

function isNotEmpty(val) {
  return !isEmpty(val);
}

//https://stackoverflow.com/questions/6921275/is-it-possible-to-chain-settimeout-functions-in-javascript
function delay(t, fn) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(t, fn) {
        timer = setTimeout(function() {
            timer = null;
            fn();

            if (queue.length) {
                var item = queue.shift();
                schedule(item.t, item.fn);
            }
        }, t);
    }
    self = {
        delay: function(t, fn) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(t, fn);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
            return self;
        }
    };
    return self.delay(t, fn);
}

//debouncing that allows easy code block handling in ReactibeLocalStorage, without separate functions and scopes
debounceGlobalTimers = {};
function debounce(debounceName, wait, fn) {

  if (typeof wait === 'function') {
    fn = wait;
    wait = 100;
  }

  if (debounceGlobalTimers[debounceName]) {
    clearTimeout(debounceGlobalTimers[debounceName]);
  }

  debounceGlobalTimers[debounceName] = setTimeout(function() {
    fn();
  }, wait);

}

function roundToNextMultiple(x, multiple) {
  return Math.ceil(x/multiple)*multiple;
}

function roundToPrevMultiple(x, multiple) {
  return Math.floor(x/multiple)*multiple;
}

//fix common typos
function fixCommonAttrTypos() {
  $('[action-shown-when-param-equals]').each(function() {
    var attrValue = $(this).attr('action-shown-when-param-equals');
    $(this).removeAttr('action-shown-when-param-equals');
    $(this).attr('action-show-when-param-equals', attrValue);
  });
}

fixCommonAttrTypos();
$(document).on('preloadingComplete', function() {
  fixCommonAttrTypos();
});



//helpful shortcuts for shorter code


/* shorter version of addClass and removeClass */
(function( $ ) {
  $.fn.isHidden = function(customClass) {

  	customClass = customClass || 'is-hidden';

    this.each(function() {
      $(this).addClass(customClass);
    });

    return this;
  };
}( jQuery ));

(function( $ ) {
  $.fn.isShown = function(customClass) {

  	customClass = customClass || 'is-hidden';

    this.each(function() {
      $(this).removeClass(customClass);
    });

    return this;
  };
}( jQuery ));

/* Synonyms for above functions */
(function( $ ) {
  $.fn.isNotShown = $.fn.isHidden;
}( jQuery ));

(function( $ ) {
  $.fn.isNotHidden = $.fn.isShown;
}( jQuery ));


/* One line show or hide based on expression */
(function( $ ) {
  $.fn.isShownWhen = function(expression) {

    var thisInstance = this;

  if (!!expression) {
    thisInstance.each(function() {
      $(this).isShown();
    });
  } else {
    thisInstance.each(function() {
      $(this).isHidden();
    });
  }

    return this;
  };
}( jQuery ));

/* One line show or hide based on expression */
(function( $ ) {
  $.fn.addClassWhen = function(expression, classToAdd) {

    var thisInstance = this;

    if (!!expression) {
      thisInstance.each(function() {
        $(this).addClass(classToAdd);
      });
    } else {
      thisInstance.each(function() {
        $(this).removeClass(classToAdd);
      });
    }

    return this;
  };
}( jQuery ));

/* One line to show or hide element selected by attribute if its value equal to specific value */
function showOnlyElementsWithAttributeXMatchingY(attributeName, valueToMatch) {
  $('['+attributeName+']').each(function() {
    var attrVal = $(this).attr(attributeName);
    $(this).isShownWhen(attrVal === valueToMatch);
  });
}

/* One line to show or hide element selected by attribute if its value equal to specific value */
function addClassToElementsWithAttributeXMatchingY(attributeName, valueToMatch, classToAdd) {
  $('['+attributeName+']').each(function() {
    var attrVal = $(this).attr(attributeName);
    $(this).addClassWhen(attrVal === valueToMatch, classToAdd);
  });
}

/* Quick one line showing or hiding element depending on reactive local storage param value */
(function( $ ) {
  $.fn.onlyShowWhenReactiveLocalStorageParamEquals = function(paramName, valueToEqual) {

    var thisInstance = this;

    ReactiveLocalStorage.onParamChange(paramName, function(value) {
      thisInstance.each(function() {
        $(this).isShownWhen(value === valueToEqual);
      });
    });

    return this;
  };
}( jQuery ));

/* Easier to write selecting by attribute */
(function( $ ) {
  $.elementWithAttr = function(attrName, attrValue) {
    if ($.isEmptyObject(attrValue)) {
      return $('['+attrName+']');
    } else {
      return $('['+attrName+'="'+attrValue+'"]');
    }
  };
}( jQuery ));

//easier to read syntax for attribute selectors
function elementWithAttr(attrName, attrValue) {
  if ($.isEmptyObject(attrValue)) {
    return '['+attrName+']';
  } else {
    return '['+attrName+'="'+attrValue+'"]';
  }
}

/* Easier to write document on */
(function( $ ) {
  $.On = function(event, selector, callbackFunction) {
    var returned = $(document).on(event, selector, callbackFunction);
    return returned;
  };
}( jQuery ));

/* Synonyms for state management libraries */
(function( $ ) {
  $.State = function(storageType) {
    storageType = storageType || 'localStorage';

    if (storageType === 'localStorage') {
      return ReactiveLocalStorage;
    } else if (storageType.toLoweCase() === 'url') {
      return QueryStringRouter;
    } else if (storageType.toLoweCase() === 'session') {
      //TODO
    }
  };
}( jQuery ));


$(document).on('click', '[action-set-param]', function() {
  var paramToSet = $(this).attr('action-set-param');
  var valueToSet = $(this).attr('value-to-set');
  ReactiveLocalStorage.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[set-param]', function() {
  var paramToSet = $(this).attr('set-param');
  var valueToSet = $(this).attr('set-value');
  ReactiveLocalStorage.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[action-set-querystring]', function() {
  var paramToSet = $(this).attr('action-set-querystring');
  var valueToSet = $(this).attr('value-to-set');
  QueryStringRouter.setParam(paramToSet, valueToSet);
});

$(document).on('click', '[set-querystring]', function() {
  var paramToSet = $(this).attr('set-querystring');
  var valueToSet = $(this).attr('set-value');
  QueryStringRouter.setParam(paramToSet, valueToSet);
});

$(document).on('preloadingComplete', function() {
  $('[action-text-input][default-value]').each(function() {
    var paramToSet = $(this).attr('action-text-input');
    var valueToSet = $(this).attr('default-value');
    ReactiveLocalStorage.setDefaultParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-text-input][value-on-load]').each(function() {
    var paramToSet = $(this).attr('action-text-input');
    var valueToSet = $(this).attr('value-on-load');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-set-param][default-value]').each(function() {
    var paramToSet = $(this).attr('action-set-param');
    var valueToSet = $(this).attr('default-value');
    ReactiveLocalStorage.setDefaultParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[action-set-param][value-on-load]').each(function() {
    var paramToSet = $(this).attr('action-set-param');
    var valueToSet = $(this).attr('value-on-load');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
  });
});

$(document).on('preloadingComplete', function() {
  $('[textarea-rows]').each(function() {
    var rows = $(this).attr('textarea-rows');
    $(this).attr('rows', rows);
  });
});

/*
$.State('localStorage').onParamChange('introShown', function(value) {
  $.elementWithAttr('ref-continue-button').isShownWhen(value === 'true');
});
*/
/*

IDEA

State.Storage.onChange('introShown', function(value) {
  $.elementWithAttr('ref-continue-button').isShownWhen(value === 'true');
});

*/
// function ReactiveLocalStorageIsSetToTrueWhen(paramName, expression) {
//   if (!!expression) {
//     ReactiveLocalStorage.setParam(paramName, 'true');
//   } else {
//     ReactiveLocalStorage.setParam(paramName, 'false');
//   }
// }

/*
IDEA TODO
make the params work like jquery, so that you can first select the param and then choose if you want to set it, add on param change etc
for example

ReactiveLocalStorage.param('is-logged-in').get();

or

$$('is-logged-in').onChange(function(value) {
  $('[some-element]').isShownWhen(value === true);
});

ReactiveState('is-logged-in').isSetToTrueWhen('is-finished-loggin-in', 'true');

//this way we can have more methods on params and support chaining?

*/

/*
IDEA add default subpage
Define default state from Webflow attribute
*/

//IDEA
// State Share, get URL that contains localStorage params




//QueryStringRouter - designed by Maciej Sawicki documented on https://github.com/maciejsaw/query-string-router

var QueryStringRouter = (function() {

	//decode query string
	function getQueryStringParams() {
		return deparam(window.location.search.substring(1));
	}

	function getQueryStringParam(key) {
		return deparam(window.location.search.substring(1))[key];
	}

	//we store the state in a simple variable
	//only on page open we will handle the query string URL, later we will always
	//use variable, because URL might be slow to update and we used to have race conditions
	var queryString = window.location.search.substring(1);

	//we diff against the previous params, so that we can remove the params that are not present
	//in the query string from the reactive params
	var previousQueryString = "";

	function processQueryStringParams() {
		var previous = deparam(previousQueryString);
		var updated = deparam(queryString);

		//check what previous params are not present in the new query string
		$.each(previous, function(key, value) {
			if (typeof updated[key] == 'undefined') {
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		$.each(updated, function(key, value) {
			if (JSON.stringify(updated[key]) !== JSON.stringify(previous[key]) )  { //only trigger event if param changed
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		previousQueryString = $.param(updated);
	}

	//when document loads
	//processQueryStringParams();

	$(window).on('popstate', function() {
		queryString = window.location.search.substring(1);
		processQueryStringParams();
	});

	var processingDebouncingTimer; //needed to limit number of processing when multiple params are changed
	$(window).on('queryStringRouter__processParams', function() {
		clearTimeout(processingDebouncingTimer);
		setTimeout(function() {
			processQueryStringParams();
		}, 50);
	});

	var doNotCreateHistoryState = true;
    var udpateURLTimer;
	function updateURL(options) {
		options = options || {};

		clearTimeout(udpateURLTimer);

		//if at least one ot trigger does not have the options doNotCreateHistoryState,
		//we should create a new state in the debounced function
		if (!options.doNotCreateHistoryState) {
			doNotCreateHistoryState = false;
		}

		udpateURLTimer = setTimeout(function() {
			var updated = deparam(queryString);
			var newQueryString = $.param(updated);

			if (doNotCreateHistoryState === true) {
				setTimeout(function() {
					window.history.replaceState(updated,'', '?'+newQueryString);
				}, 100);
			} else {
				setTimeout(function() {
					window.history.pushState(updated,'', '?'+newQueryString);
					doNotCreateHistoryState = true;
				}, 100);
			}

		}, 100);

	}

	function setParam(key, value, options) {
		var queryStringParams = deparam(queryString);

		if (queryStringParams[key] !== value) {
			queryStringParams[key] = value;
			queryString = $.param(queryStringParams);

			options = options || {};

			updateURL(options);

			$(window).trigger('queryStringRouter__processParams');
		}

	}

	function setDefaultParam(key, value) {
		var queryStringParams = deparam(queryString);

		if (typeof queryStringParams[key] == 'undefined') {
			setParam(key, value, {doNotCreateHistoryState: true});
		}
	}

	function removeParam(key, options) {
		var queryStringParams = deparam(queryString);

		if (typeof queryStringParams[key] !== 'undefined') {
			delete queryStringParams[key];
			queryString = $.param(queryStringParams);

			updateURL(options);

			$(window).trigger('queryStringRouter__processParams');
		}
	}

	function setFreshParams(newParamsObj, options) {
		queryString = $.param(newParamsObj);

		updateURL(options);

		$(window).trigger('queryStringRouter__processParams');
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		$(document).on('QueryStringRouter__'+key+'__paramChanged', function(event) {
			var paramsObject = deparam(queryString);
			var value = paramsObject[key];
			actionFunction(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);

		//when the onParamChanged is being defined, also retrigger the state
		//retriggerOnParamChange(key);
	}

	function retriggerOnParamChange(key) {
		var queryStringParams = deparam(queryString);
		var param = queryStringParams[key];
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	function setDefaultRootParams(paramsObjects) {
		$(document).ready(function() {
			if (window.location.pathname === "/" && window.location.search === "") {
				$.each(paramsObjects, function(key, value) {
					setParam(key, value, {doNotCreateHistoryState: true});
				});
			}
		});
	}

	return {
		setParam: setParam,
		setDefaultParam: setDefaultParam,
		getParam: getQueryStringParam,
		getAllParams: getQueryStringParams,
		setFreshParams: setFreshParams,
		setDefaultRootParams: setDefaultRootParams,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		version: '24',
		releaseNotes: {
			v24: 'the state variable stored as param string instead of object',
      v23: 'not getting the query string each time its updated, because it was buggy in some browsers and large params',
			v22: 'added optional counting of states inside modal and ability to go back before modal',
			v21: 'only fire events when param changed',
			v2: 'removed Meteor and uses simple jQuery events',
		}
	};

})();

if (typeof QSR === 'undefined') {
  var QSR = QueryStringRouter;
}

var ReactiveLocalStorage = (function() {

	var paramsString; //this will be a string containing params to save in local storage

	function isLocalStorageNameSupported() {
	    var testKey = 'test', storage = window.sessionStorage;
	    try
	    {
	        storage.setItem(testKey, '1');
	        storage.removeItem(testKey);
	        return true;
	    }
	    catch (error)
	    {
	    	console.error('Local Storage is not working in Safari incognito mode');
	        return false;
	    }
	}

	//the condition is to degrade to regular variables if localStorage is not supported,
	//especially happens in Safari iOS incognito mode
	var saveParamObjectToLocalStorageAsString;
	var saveParamObjectToLocalStorageAsString__debounceTimer;
	if ( isLocalStorageNameSupported() ) {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = JSON.stringify(paramsObject);
			clearTimeout(saveParamObjectToLocalStorageAsString__debounceTimer);
			saveParamObjectToLocalStorageAsString__debounceTimer = setTimeout(function() {
				localStorage.setItem('paramsString', paramsString);
			}, 50);
		};
		checkIfParamsAreAlreadyStoredInLocalStorage();
	} else {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = JSON.stringify(paramsObject);
		};
		var paramsObject = {};
		paramsString = JSON.stringify({});
	}

	function checkIfParamsAreAlreadyStoredInLocalStorage() {
		if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
			var paramsObject = {};
			saveParamObjectToLocalStorageAsString(paramsObject);
		} else {
			var stringFromLocalStorage = localStorage.getItem('paramsString');
			try {
				JSON.parse(stringFromLocalStorage);
				paramsString = stringFromLocalStorage;
			} catch(err) {
				console.error('couldn not parse local storage string');
				console.error(err);
				paramsString = JSON.stringify({});
			}

		}
	}

	//at the beginning, check if params are stored in local storage
	// if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
	// 	var paramsObject = {};
	// 	saveParamObjectToLocalStorageAsString(paramsObject);
	// } else {
	// 	paramsString = localStorage.getItem('paramsString');
	// }

	function getParam(key) {
		//this return only values, not direct access to paramsObject
		//that's why we JSON.parse here
		return JSON.parse(paramsString)[key];
	}

	function getAllParams() {
		return JSON.parse(paramsString);
	}

	function setParam(key, value, options) {
		options = options || {};

		var paramsObject = JSON.parse(paramsString);

		if (paramsObject[key] !== value) {
			paramsObject[key] = value;
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged');
		}

	}

	function setDefaultParam(key, value) {
		var paramsObject = JSON.parse(paramsString);

		if (typeof paramsObject[key] == 'undefined') {
			setParam(key, value);
		}
	}

	function appendToBeginningOfTheArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function appendToArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function removeElementFromArrayXWithIdY(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		setParam(paramNameThatContainsArray, array);
	}

	function updateObjectInArray(paramNameThatContainsArray, options) {
		var array = getParam(paramNameThatContainsArray);

		//this is to show the schema of options here in code
		var idToLookFor = options.findObjectWithId;
		var propertyToUpdate = options.propertyToUpdate;
		var newValue = options.newValue;

		$.grep(array, function(elementOfArray, indexInArray){
			if (elementOfArray['id'] === idToLookFor || elementOfArray['ID'] === idToLookFor) {
				elementOfArray[propertyToUpdate] = newValue;
			}
		});

		setParam(paramNameThatContainsArray, array);
	}

	function findInArrayXObjectWithPropertyYMatchingZ(paramNameThatContainsArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = getParam(paramNameThatContainsArray);

		if ($.isArray(array)) {
			var filteredData = $.grep(array, function(elementOfArray, indexInArray){
				return elementOfArray[objectPropertyToSearchIn] === propertyValueThatShouldMatch;
			});
			if (filteredData.length > 0) {
				return filteredData[0];
			} else {
				return [];
			}
		} else {
			return [];
		}

	}

	function findInArrayXObjectWithIdY(paramNameWithArray, idThatShouldMatch) {
		var result = findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'id', idThatShouldMatch);
		if (typeof result === 'undefined' || result.length === 0) {
			//fallback for differt way to write id --> ID
			result = findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'ID', idThatShouldMatch);
		}
		return result;
	}

	function removeParam(key, options) {
		var paramsObject = JSON.parse(paramsString);

		options = options || {};

		if (typeof paramsObject[key] !== 'undefined') {
			delete paramsObject[key];
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged');
		}
	}

	function setFreshParams(newParamsObj) {
		saveParamObjectToLocalStorageAsString(newParamsObj);
		retriggerOnParamChangeForAll();
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction, options) {
		$(document).on('reactiveLocalStorage__'+key+'__paramChanged', function(event) {
			var paramsObject = JSON.parse(paramsString);
			var value = paramsObject[key];
			actionFunction(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);
	}

	function retriggerOnParamChange(key) {
		var paramsObject = JSON.parse(paramsString);
		var param = paramsObject[key];
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	function toggleParam(key, value1, value2) {
		if (typeof value1 === 'undefined') {value1 = 'true'};
		if (typeof value2 === 'undefined') {value2 = 'false'};

		var previousValue = getParam(key);
		console.log(previousValue);

		if (previousValue !== value1) {
			setParam(key, value1);
		} else if (previousValue !== value2) {
			setParam(key, value2);
		}
	}

	function clearAllParams() {
		localStorage.removeItem('paramsString');
		saveParamObjectToLocalStorageAsString({});
	}

	function clearAllButLeave(paramsToLeaveArray) {

		if (typeof paramsToLeaveArray === 'undefined') {
			console.error('You need to provide paramsToLeaveArray');
			return;
		}

		var allParams = getAllParams();

		$.each(allParams, function(key, value) {
			if ( $.inArray(key, paramsToLeaveArray) === -1 ) {
				delete allParams[key];
			}
		});

		if ($.isEmptyObject(allParams)) {
			clearAllParams();
		} else {
			saveParamObjectToLocalStorageAsString(allParams);
		}
	}

	return {
		version: {
			version: 6,
			versionNotes: {
				6: 'Added debuncing for storing in localStorage',
				5: 'Removed default retrigger on param change while creating the onParamChage',
				4: 'Added options to disable retrigger on param change while creating onParamChange',
				3: 'Added fallback for Safari incognito not supporting localStorage',
			},
		},
		setParam: setParam,
		toggleParam: toggleParam,
		getAllParams: getAllParams,
		setFreshParams: setFreshParams,
		setDefaultParam: setDefaultParam,
		getParam: getParam,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		appendToBeginningOfTheArray: appendToBeginningOfTheArray,
		appendToArray: appendToArray,
		removeElementFromArrayXWithIdY: removeElementFromArrayXWithIdY,
		findInArrayXObjectWithIdY: findInArrayXObjectWithIdY,
		findInArrayXObjectWithPropertyYMatchingZ: findInArrayXObjectWithPropertyYMatchingZ,
		updateObjectInArray: updateObjectInArray,
		clearAllParams: clearAllParams,
		clearAllButLeave: clearAllButLeave,
	};

})();

if (typeof RLS === 'undefined') {
  var RLS = ReactiveLocalStorage;
}

//EXAMPLES:

// ReactiveLocalStorage.onParamChange('openModal' , function(value) {
// 	if (value === 'true') {
// 		console.log('modal will be open!');
// 	} else {
// 		console.log('hide  modal!');
// 	}
// });

// ReactiveLocalStorage.onParamChange('activeTab' , function(value) {
// 	if (value === 'comments') {
// 		console.log('switch tab to comments');
// 	} else if (value === 'products') {
// 		console.log('switch tab to products');
// 	} else if (value === 'pictures') {
// 		console.log('switch tab to pictures');
// 	}
// });

// ReactiveLocalStorage.onParamChange('centralPanelFolderPath' , function(value) {
// 	if (typeof value != 'undefined') { //how to make sure that you don't need to write this
// 		console.log('in the central panel, a folder with path '+value+' will be loaded');
// 	}
// });

// ReactiveLocalStorage.retriggerOnParamChange('activeTab');

//TODO: allow storing empty object
//


/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.validator=e()}(this,function(){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){var e;if(!("string"==typeof t||t instanceof String))throw e=null===t?"null":"object"===(e=a(t))&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e),new TypeError("Expected string but received ".concat(e,"."))}function n(t){return g(t),t=Date.parse(t),isNaN(t)?null:new Date(t)}function r(t){return g(t),parseFloat(t)}function i(t){return"object"===a(t)&&null!==t?t="function"==typeof t.toString?t.toString():"[object Object]":(null==t||isNaN(t)&&!t.length)&&(t=""),String(t)}function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length?arguments[1]:void 0;for(var r in e)void 0===t[r]&&(t[r]=e[r]);return t}function A(t,e){var r,o;g(t),o="object"===a(e)?(r=e.min||0,e.max):(r=e,arguments[2]);var n=encodeURI(t).split(/%..|./).length-1;return r<=n&&(void 0===o||n<=o)}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};function m(t,e){g(t),(e=h(e,l)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));for(var r=t.split("."),o=0;o<r.length;o++)if(63<r[o].length)return!1;if(e.require_tld){var n=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(n))return!1}for(var i,a=0;a<r.length;a++){if(i=r[a],e.allow_underscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}var s=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,u=/^[0-9A-F]{1,4}$/i;function $(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(g(t),!(e=String(e)))return $(t,4)||$(t,6);if("4"===e)return!!s.test(t)&&t.split(".").sort(function(t,e){return t-e})[3]<=255;if("6"!==e)return!1;var r=t.split(":"),o=!1,n=$(r[r.length-1],4),i=n?7:8;if(r.length>i)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(r.shift(),r.shift(),o=!0):"::"===t.substr(t.length-2)&&(r.pop(),r.pop(),o=!0);for(var a=0;a<r.length;++a)if(""===r[a]&&0<a&&a<r.length-1){if(o)return!1;o=!0}else if(n&&a===r.length-1);else if(!u.test(r[a]))return!1;return o?1<=r.length:r.length===i}var v={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,F=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,S=/^[a-z\d]+$/,R=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,E=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,C=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;var d={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},f=/^\[([^\]]+)\](?::([0-9]+))?$/;function p(t,e){for(var r=0;r<e.length;r++){var o=e[r];if(t===o||(n=o,"[object RegExp]"===Object.prototype.toString.call(n)&&o.test(t)))return!0}var n;return!1}var o=/^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,c=/^([0-9a-fA-F]){12}$/;var x=/^\d{1,2}$/;for(var t,M={"en-US":/^[A-Z]+$/i,"bg-BG":/^[А-Я]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"el-GR":/^[Α-ω]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[A-ZÀÉÈÌÎÓÒÙ]+$/i,"nb-NO":/^[A-ZÆØÅ]+$/i,"nl-NL":/^[A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[A-ZÆØÅ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"sl-SI":/^[A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[A-ZÅÄÖ]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},N={"en-US":/^[0-9A-Z]+$/i,"bg-BG":/^[0-9А-Я]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"el-GR":/^[0-9Α-ω]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nb-NO":/^[0-9A-ZÆØÅ]+$/i,"nl-NL":/^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[0-9A-ZÆØÅ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"sl-SI":/^[0-9A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[0-9A-ZÅÄÖ]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},w={"en-US":".",ar:"٫"},e=["AU","GB","HK","IN","NZ","ZA","ZM"],L=0;L<e.length;L++)t="en-".concat(e[L]),M[t]=M["en-US"],N[t]=N["en-US"],w[t]=w["en-US"];for(var I,T=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"],Z=0;Z<T.length;Z++)I="ar-".concat(T[Z]),M[I]=M.ar,N[I]=N.ar,w[I]=w.ar;for(var B=[],y=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","es-ES","fr-FR","it-IT","ku-IQ","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA"],b=0;b<B.length;b++)w[B[b]]=w["en-US"];for(var D=0;D<y.length;D++)w[y[D]]=",";M["pt-BR"]=M["pt-PT"],N["pt-BR"]=N["pt-PT"],w["pt-BR"]=w["pt-PT"],M["pl-Pl"]=M["pl-PL"],N["pl-Pl"]=N["pl-PL"],w["pl-Pl"]=w["pl-PL"];var U=Object.keys(M);var O=Object.keys(N),G=/^[+-]?([0-9]*[.])?[0-9]+$/,P=/^[0-9]+$/;var k=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,K=/^[-+]?[0-9]+$/;function H(t,e){g(t);var r=(e=e||{}).hasOwnProperty("allow_leading_zeroes")&&!e.allow_leading_zeroes?k:K,o=!e.hasOwnProperty("min")||t>=e.min,n=!e.hasOwnProperty("max")||t<=e.max,i=!e.hasOwnProperty("lt")||t<e.lt,a=!e.hasOwnProperty("gt")||t>e.gt;return r.test(t)&&o&&n&&i&&a}var z=/^[\x00-\x7F]+$/;var W=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;var Y=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;var V=/[^\x00-\x7F]/;var j=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;var J=Object.keys(w),q=function(t,e){return t.some(function(t){return e===t})};var Q={force_decimal:!1,decimal_digits:"1,",locale:"en-US"},X=["","-","+"];var tt=/^[0-9A-F]+$/i;function et(t){return g(t),tt.test(t)}var rt=/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;var ot=/^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;var nt=/^[a-f0-9]{32}$/;var it={md5:32,md4:32,sha1:40,sha256:64,sha384:96,sha512:128,ripemd128:32,ripemd160:40,tiger128:32,tiger160:40,tiger192:48,crc32:8,crc32b:8};var at=/^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;var lt={ignore_whitespace:!1};var st={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};var ut=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;var ct={ES:function(t){g(t);var e={X:0,Y:1,Z:2},r=t.trim().toUpperCase();if(!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(r))return!1;var o=r.slice(0,-1).replace(/[X,Y,Z]/g,function(t){return e[t]});return r.endsWith(["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][o%23])}};var dt=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;var ft=/^(?:[0-9]{9}X|[0-9]{10})$/,pt=/^(?:[0-9]{13})$/,gt=[1,3];var ht={"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-EG":/^((\+?20)|0)?1[012]\d{8}$/,"ar-IQ":/^(\+?964|0)?7[0-9]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-KW":/^(\+?965)[569]\d{7}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-TN":/^(\+?216)?[2459]\d{7}$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"bn-BD":/\+?(88)?0?1[356789][0-9]{8}\b/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-GH":/^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,"en-HK":/^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,"en-IE":/^(\+?353|0)8[356789]\d{7}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)?[7]\d{8}$/,"en-MU":/^(\+?230|0)?\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)[28]\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[89]\d{7}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"es-MX":/^(\+?52)?(1|01)?\d{10,11}$/,"es-UY":/^(\+598|0)9[1-9][\d]{6}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"ms-MY":/^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sl-SI":/^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"sv-SE":/^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"vi-VN":/^(\+?84|0)((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7})$/,"zh-CN":/^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};ht["en-CA"]=ht["en-US"],ht["fr-BE"]=ht["nl-BE"],ht["zh-HK"]=ht["en-HK"];var At=Object.keys(ht);var mt={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_decimal:!0,require_decimal:!1,digits_after_decimal:[2],allow_space_after_digits:!1};var $t=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;var vt=/([01][0-9]|2[0-3])/,_t=/[0-5][0-9]/,Ft=new RegExp("[-+]".concat(vt.source,":").concat(_t.source)),St=new RegExp("([zZ]|".concat(Ft.source,")")),Rt=new RegExp("".concat(vt.source,":").concat(_t.source,":").concat(/([0-5][0-9]|60)/.source).concat(/(\.[0-9]+)?/.source)),Et=new RegExp("".concat(/[0-9]{4}/.source,"-").concat(/(0[1-9]|1[0-2])/.source,"-").concat(/([12]\d|0[1-9]|3[01])/.source)),Ct=new RegExp("".concat(Rt.source).concat(St.source)),xt=new RegExp("".concat(Et.source,"[ tT]").concat(Ct.source));var Mt=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];var Nt=["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR","BFA","BDI","KHM","CMR","CAN","CPV","CYM","CAF","TCD","CHL","CHN","CXR","CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CUW","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB","VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"];var wt=/[^A-Z0-9+\/=]/i;var Lt=/^[a-z]+\/[a-z0-9\-\+]+$/i,It=/^[a-z\-]+=[a-z0-9\-]+$/i,Tt=/^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;var Zt=/^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;var Bt=/^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i,yt=/^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,bt=/^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;var Dt=/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,Ut=/^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,Ot=/^\d{4}$/,Gt=/^\d{5}$/,Pt=/^\d{6}$/,kt={AD:/^AD\d{3}$/,AT:Ot,AU:Ot,BE:Ot,BG:Ot,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:Ot,CZ:/^\d{3}\s?\d{2}$/,DE:Gt,DK:Ot,DZ:Gt,EE:Gt,ES:Gt,FI:Gt,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HU:Ot,IL:Gt,IN:Pt,IS:/^\d{3}$/,IT:Gt,JP:/^\d{3}\-\d{4}$/,KE:Gt,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:Ot,LV:/^LV\-\d{4}$/,MX:Gt,NL:/^\d{4}\s?[a-z]{2}$/i,NO:Ot,PL:/^\d{2}\-\d{3}$/,PT:/^\d{4}\-\d{3}?$/,RO:Pt,RU:Pt,SA:Gt,SE:/^\d{3}\s?\d{2}$/,SI:Ot,SK:/^\d{3}\s?\d{2}$/,TN:Ot,TW:/^\d{3}(\d{2})?$/,UA:Gt,US:/^\d{5}(-\d{4})?$/,ZA:Ot,ZM:Gt},Kt=Object.keys(kt);function Ht(t,e){g(t);var r=e?new RegExp("^[".concat(e,"]+"),"g"):/^\s+/g;return t.replace(r,"")}function zt(t,e){g(t);for(var r=e?new RegExp("[".concat(e,"]")):/\s/,o=t.length-1;0<=o&&r.test(t[o]);o--);return o<t.length?t.substr(0,o+1):t}function Wt(t,e){return g(t),t.replace(new RegExp("[".concat(e,"]+"),"g"),"")}var Yt={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,yandex_lowercase:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},Vt=["icloud.com","me.com"],jt=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],Jt=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"],qt=["yandex.ru","yandex.ua","yandex.kz","yandex.com","yandex.by","ya.ru"];function Qt(t){return 1<t.length?t:""}return{version:"10.11.0",toDate:n,toFloat:r,toInt:function(t,e){return g(t),parseInt(t,e||10)},toBoolean:function(t,e){return g(t),e?"1"===t||"true"===t:"0"!==t&&"false"!==t&&""!==t},equals:function(t,e){return g(t),t===e},contains:function(t,e){return g(t),0<=t.indexOf(i(e))},matches:function(t,e,r){return g(t),"[object RegExp]"!==Object.prototype.toString.call(e)&&(e=new RegExp(e,r)),e.test(t)},isEmail:function(t,e){if(g(t),(e=h(e,v)).require_display_name||e.allow_display_name){var r=t.match(_);if(r)t=r[1];else if(e.require_display_name)return!1}var o=t.split("@"),n=o.pop(),i=o.join("@"),a=n.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===a||"googlemail.com"===a)){var l=(i=i.toLowerCase()).split("+")[0];if(!A(l.replace(".",""),{min:6,max:30}))return!1;for(var s=l.split("."),u=0;u<s.length;u++)if(!S.test(s[u]))return!1}if(!A(i,{max:64})||!A(n,{max:254}))return!1;if(!m(n,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!$(n)){if(!n.startsWith("[")||!n.endsWith("]"))return!1;var c=n.substr(1,n.length-2);if(0===c.length||!$(c))return!1}}if('"'===i[0])return i=i.slice(1,i.length-1),e.allow_utf8_local_part?C.test(i):R.test(i);for(var d=e.allow_utf8_local_part?E:F,f=i.split("."),p=0;p<f.length;p++)if(!d.test(f[p]))return!1;return!0},isURL:function(t,e){if(g(t),!t||2083<=t.length||/[\s<>]/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;var r,o,n,i,a,l,s,u;if(e=h(e,d),1<(s=(t=(s=(t=(s=t.split("#")).shift()).split("?")).shift()).split("://")).length){if(r=s.shift().toLowerCase(),e.require_valid_protocol&&-1===e.protocols.indexOf(r))return!1}else{if(e.require_protocol)return!1;if("//"===t.substr(0,2)){if(!e.allow_protocol_relative_urls)return!1;s[0]=t.substr(2)}}if(""===(t=s.join("://")))return!1;if(""===(t=(s=t.split("/")).shift())&&!e.require_host)return!0;if(1<(s=t.split("@")).length){if(e.disallow_auth)return!1;if(0<=(o=s.shift()).indexOf(":")&&2<o.split(":").length)return!1}u=l=null;var c=(i=s.join("@")).match(f);return c?(n="",u=c[1],l=c[2]||null):(n=(s=i.split(":")).shift(),s.length&&(l=s.join(":"))),!(null!==l&&(a=parseInt(l,10),!/^[0-9]+$/.test(l)||a<=0||65535<a)||!($(n)||m(n,e)||u&&$(u,6))||(n=n||u,e.host_whitelist&&!p(n,e.host_whitelist)||e.host_blacklist&&p(n,e.host_blacklist)))},isMACAddress:function(t,e){return g(t),e&&e.no_colons?c.test(t):o.test(t)},isIP:$,isIPRange:function(t){g(t);var e=t.split("/");return 2===e.length&&!!x.test(e[1])&&!(1<e[1].length&&e[1].startsWith("0"))&&$(e[0],4)&&e[1]<=32&&0<=e[1]},isFQDN:m,isBoolean:function(t){return g(t),0<=["true","false","1","0"].indexOf(t)},isAlpha:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"en-US";if(g(t),e in M)return M[e].test(t);throw new Error("Invalid locale '".concat(e,"'"))},isAlphaLocales:U,isAlphanumeric:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"en-US";if(g(t),e in N)return N[e].test(t);throw new Error("Invalid locale '".concat(e,"'"))},isAlphanumericLocales:O,isNumeric:function(t,e){return g(t),e&&e.no_symbols?P.test(t):G.test(t)},isPort:function(t){return H(t,{min:0,max:65535})},isLowercase:function(t){return g(t),t===t.toLowerCase()},isUppercase:function(t){return g(t),t===t.toUpperCase()},isAscii:function(t){return g(t),z.test(t)},isFullWidth:function(t){return g(t),W.test(t)},isHalfWidth:function(t){return g(t),Y.test(t)},isVariableWidth:function(t){return g(t),W.test(t)&&Y.test(t)},isMultibyte:function(t){return g(t),V.test(t)},isSurrogatePair:function(t){return g(t),j.test(t)},isInt:H,isFloat:function(t,e){g(t),e=e||{};var r=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale?w[e.locale]:".","[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));if(""===t||"."===t||"-"===t||"+"===t)return!1;var o=parseFloat(t.replace(",","."));return r.test(t)&&(!e.hasOwnProperty("min")||o>=e.min)&&(!e.hasOwnProperty("max")||o<=e.max)&&(!e.hasOwnProperty("lt")||o<e.lt)&&(!e.hasOwnProperty("gt")||o>e.gt)},isFloatLocales:J,isDecimal:function(t,e){if(g(t),(e=h(e,Q)).locale in w)return!q(X,t.replace(/ /g,""))&&(r=e,new RegExp("^[-+]?([0-9]+)?(\\".concat(w[r.locale],"[0-9]{").concat(r.decimal_digits,"})").concat(r.force_decimal?"":"?","$"))).test(t);var r;throw new Error("Invalid locale '".concat(e.locale,"'"))},isHexadecimal:et,isDivisibleBy:function(t,e){return g(t),r(t)%parseInt(e,10)==0},isHexColor:function(t){return g(t),rt.test(t)},isISRC:function(t){return g(t),ot.test(t)},isMD5:function(t){return g(t),nt.test(t)},isHash:function(t,e){return g(t),new RegExp("^[a-f0-9]{".concat(it[e],"}$")).test(t)},isJWT:function(t){return g(t),at.test(t)},isJSON:function(t){g(t);try{var e=JSON.parse(t);return!!e&&"object"===a(e)}catch(t){}return!1},isEmpty:function(t,e){return g(t),0===((e=h(e,lt)).ignore_whitespace?t.trim().length:t.length)},isLength:function(t,e){var r,o;g(t),o="object"===a(e)?(r=e.min||0,e.max):(r=e,arguments[2]);var n=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],i=t.length-n.length;return r<=i&&(void 0===o||i<=o)},isByteLength:A,isUUID:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"all";g(t);var r=st[e];return r&&r.test(t)},isMongoId:function(t){return g(t),et(t)&&24===t.length},isAfter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:String(new Date);g(t);var r=n(e),o=n(t);return!!(o&&r&&r<o)},isBefore:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:String(new Date);g(t);var r=n(e),o=n(t);return!!(o&&r&&o<r)},isIn:function(t,e){var r;if(g(t),"[object Array]"!==Object.prototype.toString.call(e))return"object"===a(e)?e.hasOwnProperty(t):!(!e||"function"!=typeof e.indexOf)&&0<=e.indexOf(t);var o=[];for(r in e)({}).hasOwnProperty.call(e,r)&&(o[r]=i(e[r]));return 0<=o.indexOf(t)},isCreditCard:function(t){g(t);var e=t.replace(/[- ]+/g,"");if(!ut.test(e))return!1;for(var r,o,n,i=0,a=e.length-1;0<=a;a--)r=e.substring(a,a+1),o=parseInt(r,10),i+=n&&10<=(o*=2)?o%10+1:o,n=!n;return!(i%10!=0||!e)},isIdentityCard:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"any";if(g(t),e in ct)return ct[e](t);if("any"!==e)throw new Error("Invalid locale '".concat(e,"'"));for(var r in ct)if(ct.hasOwnProperty(r)&&(0,ct[r])(t))return!0;return!1},isISIN:function(t){if(g(t),!dt.test(t))return!1;for(var e,r,o=t.replace(/[A-Z]/g,function(t){return parseInt(t,36)}),n=0,i=!0,a=o.length-2;0<=a;a--)e=o.substring(a,a+1),r=parseInt(e,10),n+=i&&10<=(r*=2)?r+1:r,i=!i;return parseInt(t.substr(t.length-1),10)===(1e4-n)%10},isISBN:function t(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(g(e),!(r=String(r)))return t(e,10)||t(e,13);var o,n=e.replace(/[\s-]+/g,""),i=0;if("10"===r){if(!ft.test(n))return!1;for(o=0;o<9;o++)i+=(o+1)*n.charAt(o);if("X"===n.charAt(9)?i+=100:i+=10*n.charAt(9),i%11==0)return!!n}else if("13"===r){if(!pt.test(n))return!1;for(o=0;o<12;o++)i+=gt[o%2]*n.charAt(o);if(n.charAt(12)-(10-i%10)%10==0)return!!n}return!1},isISSN:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g(t);var r="^\\d{4}-?\\d{3}[\\dX]$";if(r=e.require_hyphen?r.replace("?",""):r,!(r=e.case_sensitive?new RegExp(r):new RegExp(r,"i")).test(t))return!1;for(var o=t.replace("-","").toUpperCase(),n=0,i=0;i<o.length;i++){var a=o[i];n+=("X"===a?10:+a)*(8-i)}return n%11==0},isMobilePhone:function(e,t,r){if(g(e),r&&r.strictMode&&!e.startsWith("+"))return!1;if(Array.isArray(t))return t.some(function(t){return!(!ht.hasOwnProperty(t)||!ht[t].test(e))});if(t in ht)return ht[t].test(e);if(t&&"any"!==t)throw new Error("Invalid locale '".concat(t,"'"));for(var o in ht)if(ht.hasOwnProperty(o)&&ht[o].test(e))return!0;return!1},isMobilePhoneLocales:At,isPostalCode:function(t,e){if(g(t),e in kt)return kt[e].test(t);if("any"!==e)throw new Error("Invalid locale '".concat(e,"'"));for(var r in kt)if(kt.hasOwnProperty(r)&&kt[r].test(t))return!0;return!1},isPostalCodeLocales:Kt,isCurrency:function(t,e){return g(t),function(t){var r="\\d{".concat(t.digits_after_decimal[0],"}");t.digits_after_decimal.forEach(function(t,e){0!==e&&(r="".concat(r,"|\\d{").concat(t,"}"))});var e="(\\".concat(t.symbol.replace(/\./g,"\\."),")").concat(t.require_symbol?"":"?"),o="[1-9]\\d{0,2}(\\".concat(t.thousands_separator,"\\d{3})*"),n="(".concat(["0","[1-9]\\d*",o].join("|"),")?"),i="(\\".concat(t.decimal_separator,"(").concat(r,"))").concat(t.require_decimal?"":"?"),a=n+(t.allow_decimal||t.require_decimal?i:"");return t.allow_negatives&&!t.parens_for_negatives&&(t.negative_sign_after_digits?a+="-?":t.negative_sign_before_digits&&(a="-?"+a)),t.allow_negative_sign_placeholder?a="( (?!\\-))?".concat(a):t.allow_space_after_symbol?a=" ?".concat(a):t.allow_space_after_digits&&(a+="( (?!$))?"),t.symbol_after_digits?a+=e:a=e+a,t.allow_negatives&&(t.parens_for_negatives?a="(\\(".concat(a,"\\)|").concat(a,")"):t.negative_sign_before_digits||t.negative_sign_after_digits||(a="-?"+a)),new RegExp("^(?!-? )(?=.*\\d)".concat(a,"$"))}(e=h(e,mt)).test(t)},isISO8601:function(t,e){g(t);var r=$t.test(t);return e&&r&&e.strict?function(t){var e=t.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(e){var r=Number(e[1]),o=Number(e[2]);return r%4==0&&r%100!=0?o<=366:o<=365}var n=t.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),i=n[1],a=n[2],l=n[3],s=a?"0".concat(a).slice(-2):a,u=l?"0".concat(l).slice(-2):l,c=new Date("".concat(i,"-").concat(s||"01","-").concat(u||"01"));return!isNaN(c.getUTCFullYear())&&(!a||!l||c.getUTCFullYear()===i&&c.getUTCMonth()+1===a&&c.getUTCDate()===l)}(t):r},isRFC3339:function(t){return g(t),xt.test(t)},isISO31661Alpha2:function(t){return g(t),q(Mt,t.toUpperCase())},isISO31661Alpha3:function(t){return g(t),q(Nt,t.toUpperCase())},isBase64:function(t){g(t);var e=t.length;if(!e||e%4!=0||wt.test(t))return!1;var r=t.indexOf("=");return-1===r||r===e-1||r===e-2&&"="===t[e-1]},isDataURI:function(t){g(t);var e=t.split(",");if(e.length<2)return!1;var r=e.shift().trim().split(";"),o=r.shift();if("data:"!==o.substr(0,5))return!1;var n=o.substr(5);if(""!==n&&!Lt.test(n))return!1;for(var i=0;i<r.length;i++)if(i===r.length-1&&"base64"===r[i].toLowerCase());else if(!It.test(r[i]))return!1;for(var a=0;a<e.length;a++)if(!Tt.test(e[a]))return!1;return!0},isMagnetURI:function(t){return g(t),Zt.test(t.trim())},isMimeType:function(t){return g(t),Bt.test(t)||yt.test(t)||bt.test(t)},isLatLong:function(t){if(g(t),!t.includes(","))return!1;var e=t.split(",");return Dt.test(e[0])&&Ut.test(e[1])},ltrim:Ht,rtrim:zt,trim:function(t,e){return zt(Ht(t,e),e)},escape:function(t){return g(t),t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")},unescape:function(t){return g(t),t.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")},stripLow:function(t,e){return g(t),Wt(t,e?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F")},whitelist:function(t,e){return g(t),t.replace(new RegExp("[^".concat(e,"]+"),"g"),"")},blacklist:Wt,isWhitelisted:function(t,e){g(t);for(var r=t.length-1;0<=r;r--)if(-1===e.indexOf(t[r]))return!1;return!0},normalizeEmail:function(t,e){e=h(e,Yt);var r=t.split("@"),o=r.pop(),n=[r.join("@"),o];if(n[1]=n[1].toLowerCase(),"gmail.com"===n[1]||"googlemail.com"===n[1]){if(e.gmail_remove_subaddress&&(n[0]=n[0].split("+")[0]),e.gmail_remove_dots&&(n[0]=n[0].replace(/\.+/g,Qt)),!n[0].length)return!1;(e.all_lowercase||e.gmail_lowercase)&&(n[0]=n[0].toLowerCase()),n[1]=e.gmail_convert_googlemaildotcom?"gmail.com":n[1]}else if(0<=Vt.indexOf(n[1])){if(e.icloud_remove_subaddress&&(n[0]=n[0].split("+")[0]),!n[0].length)return!1;(e.all_lowercase||e.icloud_lowercase)&&(n[0]=n[0].toLowerCase())}else if(0<=jt.indexOf(n[1])){if(e.outlookdotcom_remove_subaddress&&(n[0]=n[0].split("+")[0]),!n[0].length)return!1;(e.all_lowercase||e.outlookdotcom_lowercase)&&(n[0]=n[0].toLowerCase())}else if(0<=Jt.indexOf(n[1])){if(e.yahoo_remove_subaddress){var i=n[0].split("-");n[0]=1<i.length?i.slice(0,-1).join("-"):i[0]}if(!n[0].length)return!1;(e.all_lowercase||e.yahoo_lowercase)&&(n[0]=n[0].toLowerCase())}else 0<=qt.indexOf(n[1])?((e.all_lowercase||e.yandex_lowercase)&&(n[0]=n[0].toLowerCase()),n[1]="yandex.ru"):e.all_lowercase&&(n[0]=n[0].toLowerCase());return n.join("@")},toString:i}});

/*=================================================================
=            ReactiveLocalStorage validation extension            =
=================================================================*/

ReactiveLocalStorage.registeredValidators = {};

ReactiveLocalStorage.registerParamValidator = function(param, validationFunction) {
	ReactiveLocalStorage.registeredValidators[param] = validationFunction;
};

ReactiveLocalStorage.validateParam = function(paramToValidate, functionCallback) {
	var currentValue = ReactiveLocalStorage.getParam(paramToValidate);
	var validationResult = "";
	if (ReactiveLocalStorage.registeredValidators && ReactiveLocalStorage.registeredValidators[paramToValidate]) {
		validationResult = ReactiveLocalStorage.registeredValidators[paramToValidate](currentValue);
	} else {
		console.error('No validator registered for '+paramToValidate);
	}

	if (typeof functionCallback === 'function') {
		functionCallback(validationResult);
	}

	return validationResult;
};

function showErrorForElement(elm, validationResult) {
	if (typeof validationResult === 'undefined') {
		validationResult === "";
	}

	var errorMsg = "⚠ ⚠ ⚠"; //defaults to triangle exclamation
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	if (errorDiv.length === 0) {
		errorDiv = $('<div class="bem-error-text" js-selector="validation-error-msg"></div>');
	}

	errorMsgFromElm = elm.attr('err-txt__'+validationResult);

	if (typeof errorMsgFromElm !== "undefined") {
		errorMsg = errorMsgFromElm;
	}

	errorDiv.text(errorMsg);
	elm.after(errorDiv);
	elm.removeClass('is-correct');
	elm.find('[validation-add-class]').removeClass('is-correct');
	elm.addClass('is-error');
	elm.find('[validation-add-class]').addClass('is-error');
	elm.attr('has-error', 'true');
}

function hideErrorForElement(elm) {
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	elm.addClass('is-correct');
	elm.find('[validation-add-class]').addClass('is-correct');
	elm.removeClass('is-error');
	elm.find('[validation-add-class]').removeClass('is-error');
	elm.removeAttr('has-error');
	errorDiv.remove();
}

function handleErrorForElement(elm, validationResult) {
	if (validationResult === 'good') {
		hideErrorForElement(elm);
	} else {
		showErrorForElement(elm, validationResult);
	}
}

//automatically searches for DOM elements that need to be validated and show error for them
//based on DOM attributes
ReactiveLocalStorage.validateElementChildren = function(elm, callbacksObject) {
	elm.find('[validated-param]').filter(':visible').each(function() {
		var relatedField = $(this);
		var paramToValidate = $(this).attr('validated-param');
		ReactiveLocalStorage.validateParam(paramToValidate, function(validationResult) {
			handleErrorForElement(relatedField, validationResult);
		});
	});
	var numberOfErrors = elm.find('[has-error]').length;

	//var numberOfErrors = elm.find('[has-error]').length;
	if (numberOfErrors === 0) {
		if (callbacksObject && callbacksObject.onSuccess) {
			callbacksObject.onSuccess();
		}
	} else {
		if (callbacksObject && callbacksObject.onError) {
			callbacksObject.onError();
		}
	}
	//IDEA/TODO: validateElementChildren could return an array of errors
};

ReactiveLocalStorage.setDefaultParamAndValidationRules = function(param, options) {
	if (options && typeof options.default !== 'undefined') {
		ReactiveLocalStorage.setDefaultParam(param, options.default);
	}
	ReactiveLocalStorage.registerParamValidator(param, options.validationFunction);
}

// validation on blur for elements with additional attribute validate-on-blur
// we will show errors only if usered focused the field at least once
// if you want to validate after each entered character, you need to use "update-on-input" attr
// for text inputs
$(document).on('preloadingComplete', function() {
	$(document).on('focus', '[validated-param][validate-on-blur]:not([is-touched])', function() {

		var relatedInput = $(this);

		var relatedParam = $(this).attr('validated-param');

  	relatedInput.attr('is-touched', 'true');

    relatedInput.on('blur', function() {
    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});
    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-click' -- better for radio buttons
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-click]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
    	var relatedInput = $(this);

    	relatedInput.attr('is-touched', 'true');

    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});

    	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
	    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
	    		handleErrorForElement(relatedInput, validationResult);
	    	});
	    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-change' -- better for select dropdowns
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-change]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
  	var relatedInput = $(this);

  	relatedInput.attr('is-touched', 'true');

  	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});
    });

	});
});


$(document).on('preloadingComplete', function() {
  $(document).on('click', 'input[validated-param][has-error]', function() {
    var relatedParam = $(this).attr('validated-param');
    var relatedInput = $(this);

    if (!relatedInput.attr('was-clicked-when-had-error')) {
    	relatedInput.on('input', function() {
    		ReactiveLocalStorage.setParam(relatedParam, relatedInput.val());
    		ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		  handleErrorForElement(relatedInput, validationResult);
    		});
    	});

    	relatedInput.attr('was-clicked-when-had-error', 'true');
    }

  });
});

/*=====  End of ReactiveLocalStorage validation extension  ======*/


/* EXAMPLE

1. First register validators for each param separately

ReactiveLocalStorage.registerParamValidator('registration-email', function(value) {
	if (value === "") {
		return 'required';
	} else {
		return 'good';
	}
});

ReactiveLocalStorage.registerParamValidator('registration-password', function(value) {
	if (value === "") {
		return 'required';
	} else if (value.length < 8) {
		return 'too-short';
	} else {
		return 'good';
	}
});

2. When submitting form, you can use validateElementChildren thah will automatically
validate DOM elements that you marked with attribute "validated-param". You should store error
messages in DOM attributes "err-txt__your-validation-result", since different fields can have indiviudal more contextual errors

function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onSuccess: function() {
			registerUser();
		},
		onError: function() {
			var firstError = $('[has-error]').first();
			$('.page-wrapper').scrollTo(firstError); //you have full control of what happens after error
		}
	});
}

/*
EXAMPLE 2: more flexible - manually check params and handle Errors for each element
function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');

    ReactiveLocalStorage.validateParam('registration-email', function(validationResult) {
    	var relatedField = thisForm.find('[validated-param="registration-email"]');

    	if (validationResult !== 'good') {
    		handleErrorForElement(relatedField, validationResult);
			return;
    	}

    	registerUser();
    });

}
*/

function hideWebflowDropdowns() {
    $(".w-dropdown-list").removeClass("w--open").removeAttr('is-open');
    $(".w-dropdown-toggle").removeClass("w--open").removeAttr('is-open');
}

//open and close Webflow dropdowns in ajax-loaded content
$(document).on('click', '.w-dropdown-toggle', function(event) {
    event.preventDefault();

    var thisDropdownButton = $(this);
    var thisDropdownList = $(this).next(".w-dropdown-list");
    var otherDropdownLists = $('.w-dropdown-list').not(thisDropdownList);
    var otherDropdownButtons = $('.w-dropdown-toggle').not(thisDropdownButton);

    var isOpen = thisDropdownButton.hasClass('w--open') || thisDropdownButton.is('[is-open]');

    //TODO clean up webflow.js from unneccessary functions like dropdowns
    //because it is conflicting with our scripts
    if (isOpen) {
        setTimeout(function() {
            thisDropdownButton.removeClass('w--open').removeAttr('is-open');
            thisDropdownList.removeClass("w--open").removeAttr('is-open');
        }, 0);
    } else {
        setTimeout(function() {
            thisDropdownButton.addClass('w--open').attr('is-open', 'true');
            thisDropdownList.addClass("w--open").attr('is-open', 'true');
        }, 0);
    }

    otherDropdownLists.removeClass('w--open').removeAttr('is-open');
    otherDropdownButtons.removeClass('w--open').removeAttr('is-open');
});

$(document).on('click.dropdown', document, function(event) {
    //if clicked outside the dropdown button and content, close it
    if ($(event.target).closest(".w-dropdown-toggle").length === 0 && $(event.target).closest(".w-dropdown-list").length === 0) {
        console.log("hide all dropdowns");
        hideWebflowDropdowns()
    } else {
        //console.log("don't hide dropdowns");
    }
});

//Webflow tabs need this to work with Ajax content
//Add attribute ajax-true for tabs loaded with ajax. This is needed to prevent Webflow switching the tabs twice.
$(document).on('click', '[data-w-tab][ajax="true"]', function() {
    var tabToActivate = $(this).attr('data-w-tab');
    $(this).closest('.w-tabs').find('.w-tab-menu').find('.w--current').removeClass('w--current');
    $(this).closest('.w-tabs').find('.w-tab-content').find('.w--tab-active').removeClass('w--tab-active').end();
    $(this).addClass('w--current').closest('.w-tabs').find('.w-tab-content').find('[data-w-tab="'+tabToActivate+'"]').addClass('w--tab-active').end();
    console.log('ajaxTabs');
});

//links with attributes, without link blocks
$(document).on('click', '[click-link]', function(e) {
    e.preventDefault();
    window.location.href = $(this).attr('click-link');
});

//links with attributes, without link blocks
$(document).on('click', '[action-go-to-url]', function(e) {
    e.preventDefault();
    window.location.href = $(this).attr('action-go-to-url');
});

//IDEA todo - add auto wrapping in link block with address

$(document).on('preloadingComplete', function() {
    $('[js-is-disabled]').attr('disabled', '').addClass('is-disabled');
});

jQuery.fn.extend({
    fadeOutAndHide: function(duration, classToAdd, functionAfterFadeOut) {

        if (typeof classToAdd === 'undefined') {
            classToAdd = 'is-hidden';
        } else if (typeof classToAdd === 'function') {
            functionAfterFadeOut = classToAdd;
            classToAdd = 'is-hidden';
        }

        if (this.hasClass(classToAdd) === false) {
            this.transition({opacity: 0}, duration, function() {
                $(this).addClass(classToAdd);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
            });
        }
    },
    showWithFunctionBeforeShowing: function(classToRemove, functionBeforeShowing) {
        if (typeof classToRemove === 'undefined') {
            classToRemove = 'is-hidden';
        } else if (typeof classToRemove === 'function') {
            functionBeforeShowing = classToRemove;
            classToRemove = 'is-hidden';
        }

        if (this.hasClass(classToRemove) === true) {
            if (typeof functionBeforeShowing !== 'undefined') {
                functionBeforeShowing();
            }

            $(this).removeClass(classToRemove);
        }
    },
    showAndFadeIn: function(duration, classToRemove, functionBeforeShowing) {
        if (typeof classToRemove === 'undefined') {
            classToRemove = 'is-hidden';
        } else if (typeof classToRemove === 'function') {
            functionBeforeShowing = classToRemove;
            classToRemove = 'is-hidden';
        }

        if (this.hasClass(classToRemove) === true) {
            this.transition({opacity: 0}, 0, function() {
                $(this).removeClass(classToRemove);
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
                $(this).transition({opacity: 1}, duration);
            });
        }
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },
    hideWithScaleEffect: function(duration, classToToggle, functionAfterFadeOut) {

        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionAfterFadeOut = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (this.hasClass(classToToggle) === false) {
            this.transition({opacity: 0, scale: 0.8}, duration, function() {
                $(this).addClass(classToToggle);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
            });
        }
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }

        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },
    loadAndFadeIn: function(whatToLoad, duration, callbackFunctionBeforeFadeIn) {
        var containerToLoadAndFadeIn = this;
        containerToLoadAndFadeIn.transition({opacity: 0}, 0, function() {
            containerToLoadAndFadeIn.load(whatToLoad, function() {
                if (typeof callbackFunctionBeforeFadeIn !== 'undefined') callbackFunctionBeforeFadeIn();
                containerToLoadAndFadeIn.transition({opacity: 1}, duration);
            });
        });
    },
    // showWithVerticalSlideEffect: function(duration, classToToggle, functionBeforeShowing) {
    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionBeforeShowing = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);

    //     if ($thisElement.hasClass(classToToggle) === true) {
    //         $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0, overflow: 'hidden'}, 0, function() {
    //             if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
    //             $thisElement.removeClass(classToToggle);
    //             var originalHeight = $thisElement.height();
    //             $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200}, duration, function() {
    //                 $thisTransitionWrapper.attr({style: ''});
    //             });
    //         });
    //     }
    // },
    // hideWithVerticalSlideEffect: function(duration, classToToggle, functionAfterFadeOut) {

    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionAfterFadeOut = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);

    //     var originalHeight = $thisTransitionWrapper.height();
    //     console.log(originalHeight);

    //     if ($thisElement.hasClass(classToToggle) === false) {
    //         $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200, overflow: 'hidden'}, 0, function() {
    //             $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0}, duration, function() {
    //                 $thisElement.addClass(classToToggle);
    //                 if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
    //                 $thisElement.attr({style: ''});
    //             });
    //         });
    //     }
    // },
});

//Idea: show with directional effect, coming from where mouse was clicked
//Get XY coordinates where mouse was clicked on screen
//Get coordinates where the target element is shown on screen
//Calculate the delta between them
//Use this delta for CSS transition XY
jQuery.fn.extend({
    showWithClickTransitionEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }

        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.2}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);

                var clickX = event.pageX;
                var clickY = event.pageY;

                var leftPos  = this[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
                var rightPos = this[0].getBoundingClientRect().right  + $(window)['scrollLeft']();
                var topPos   = this[0].getBoundingClientRect().top    + $(window)['scrollTop']();
                var bottomPos= this[0].getBoundingClientRect().bottom + $(window)['scrollTop']();
                var centerX = (leftPos+rightPos)/2;
                var centerY = (topPos+bottomPos)/2;

                var xDelta = centerX - clickX;
                var yDelta = centerY - clickY;

                console.log(event);
                console.log(clickY)
                console.log(topPos);
                console.log(xDelta);
                console.log(yDelta);

                $(this).transition({x: -xDelta*2.5, y: -yDelta*2.5}, 0, function() {
                    $(this).transition({opacity: 1, scale: 1, x: 0, y: 0}, duration);
                });
            });
        }

    }
});

var tooltipsterTrigger = 'custom';

var tooltipsterTriggerOpen = {
    mouseenter: true,
    touchstart: true,
    tap: true,
    click: true
};

var tooltipsterTriggerClose = {
    mouseleave: true,
    scroll: true,
    tap: true
};

function initTooltipster(containerToInit) {
    containerToInit = containerToInit || 'body';
    console.log(containerToInit);
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right-delay"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top-delay"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left-delay"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom-delay"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
}

//also init tooltipster immediately, to prevent bugs and calling methods on uninitialised elements
initTooltipster();

$(document).on('preloadingComplete', function() {
    initTooltipster();
});

//Elements with action-open-modal should show modals container and
// and show the respective modal modal
$(document).on('click', '[action-open-modal]', function(event) {
    var modalToLoad = $(this).attr("action-open-modal");
    QueryStringRouter.setParam('modalContent', modalToLoad);

    hideWebflowDropdowns();
});

$(document).on('click', '[action-close-modal="true"]', function(event) {
    QueryStringRouter.removeParam('modalContent');
});

function bindEscButtonToCloseModal() {
    $(document).one('keydown.modal', function(event) {
        if (event.which === 27) {
            QueryStringRouter.removeParam('modalContent');
        }
    });
}

function closeModal() {
    //deselectAll();
    $(".modal-wrapper").fadeOutAndHide(300);
    $('[modal-id]').addClass('hidden');
}

QueryStringRouter.onParamChange('modalContent', function(value) {
    if (typeof value != 'undefined') {
        if ($(".modal-wrapper").hasClass('is-hidden')) {
            $(".modal-wrapper").showAndFadeIn(200, function() {
                $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
                $('[modal-id="'+value+'"]').removeClass('is-hidden');
            });
        } else {
            $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
            $('[modal-id="'+value+'"]').removeClass('is-hidden');
        }

        //esc button closes modal, binded only after modal was opened
        bindEscButtonToCloseModal();
    } else {
        closeModal();
    }
});


//modal generic action
$(document).on('click', '[action-show-modal]', function() {
    var modalContentToShow = $(this).attr('action-show-modal');
    QueryStringRouter.setParam('modalContent', modalContentToShow);
});

//Webflow dropdowns as select dropdown
//Each dropdown state is stored in a separate reactive local storage state
$(document).on('click', '[choice-value]', function() {
    var valueToSet = $(this).attr('choice-value');
    var paramToSet = $(this).closest('[action-select-dropdown]').attr('action-select-dropdown');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
    $(this).closest('[action-select-dropdown]').find('.select-dropdown__list.w-dropdown-list').removeClass('w--open');
    hideWebflowDropdowns();
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-select-dropdown]').each(function() {
        var thisDropdown = $(this);
        var paramToChange = thisDropdown.attr('action-select-dropdown');

        //default state is the first from the dropdown chosen-values options
        //only if no other default was set, waiting 3 seconds
        //TODO remove this after old code updated
        setTimeout(function() {
            var firstAvailableChoice = thisDropdown.find('[chosen-value]').attr('chosen-value');
            ReactiveLocalStorage.setDefaultParam(paramToChange, firstAvailableChoice );
        }, 3000);

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.removeClass('is-hidden');
            otherNotChosenItems.addClass('is-hidden');

            if (thisDropdown.find('[js-select-dropdown-chosen-text]').length > 0) {
                renderSelectDropdownChosenValue(thisDropdown, value, '[js-select-dropdown-chosen-text]');
            }
        });
    });
});

//TODO think how to create easy syntax for situation, when displayed chosen value should
//be different from choice values in the list, for example with suffix "1000 EUR"
function renderSelectDropdownChosenValue($dropdown, value, targetSelector) {
    var target = $dropdown.find(targetSelector);
    if (target.length > 0) {
        var chosen = $dropdown.find('[chosen-value]').not('[chosen-value="not-selected"]').first();
        chosen.find(targetSelector).text(value);
        chosen.attr('chosen-value', value);
        if (isNotEmpty(value) && value !== 'not-selected') {
            chosen.removeClass('is-hidden');
        } else {
            chosen.addClass('is-hidden');
        }
    }
}

$(document).on('input', '[action-select-dropdown-search-input]', function() {
  var thisDropdown = $(this).closest('[action-select-dropdown]');
  var thisChoices = thisDropdown.find('[choice-value]').not('[data-bind-repeatable-template]');
  var searchQuery = $(this).val().toLowerCase();

  thisChoices.each(function() {
    var attrVal = $(this).attr('choice-value').toLowerCase();
    var textVal = $(this).html();
    if (attrVal.includes(searchQuery) || textVal.includes(searchQuery)) {
        $(this).isShown();
    } else {
        $(this).isHidden();
    }
  });
});

//Each checkbox state is stored in reactivelocalstorage
$(document).on('click', '[action-radio-buttons] [chosen-value]', function(event) {
    var paramToChange = $(this).closest('[action-radio-buttons]').attr('action-radio-buttons');
    var valueToSet = $(this).attr('chosen-value');

    ReactiveLocalStorage.setParam(paramToChange, valueToSet );
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-radio-buttons]').each(function() {
        var paramToChange = $(this).attr('action-radio-buttons');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.addClass('is-selected');
            chosenItem.find('[chosen-icon-inside]').removeClass('is-hidden');
            otherNotChosenItems.removeClass('is-selected');
            otherNotChosenItems.find('[chosen-icon-inside]').addClass('is-hidden');
        });
    });
});

//This will bind all the input fields for the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('blur', '[action-text-input]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
});

$(document).on('input', '[action-text-input][update-on-input="true"]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    var thisInputValue = $(this).val();
    console.log(thisInputValue);
    if (typeof thisInputValue !== 'undefined' && event.target.validity.valid) {
        ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
    }
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //for each input field existing in the html we check if there's a matching state
    $('[action-text-input]').each(function() {
        var paramToChange = $(this).attr('action-text-input');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            $('[action-text-input="'+paramToChange+'"]').val(value);
        });
    });

});

$(document).on('keypress', '[allow-only-integer]', function(event) {

    // Old browsers fallback
    if (!event || !event.key) {
      return true;
    }

    var isNumber = !!event.key.match(/^[0-9]*$/) || (event.charCode >= 47 && event.charCode <= 57);
    var isEnter = event.key === 'Enter';
    var isDelete = event.key === 'Backspace' || event.key === 'Delete';
    var isArrow = event.key.includes('Arrow');
    return isNumber || isEnter || isDelete || isArrow;
});

$(document).on('keypress', '[allow-only-number]', function(event) {

    // Old browsers fallback
    if (!event || !event.key) {
      return true;
    }

    var isNumber = !!event.key.match(/^[0-9]*$/) || (event.charCode >= 47 && event.charCode <= 57);
    var isEnter = event.key === 'Enter';
    var isDelete = event.key === 'Backspace' || event.key === 'Delete';
    var isArrow = event.key.includes('Arrow');
    var isComa = event.key.includes('.');
    var isDot = event.key.includes(',');

    if ($(event.currentTarget).val().includes('.') || $(event.currentTarget).val().includes(',')) {
        return isNumber || isEnter || isDelete || isArrow;
    } else {
        return isNumber || isEnter || isDelete || isArrow || isComa || isDot;
    }

});

//This will bind all checkboxes with attribute [action-checkbox] the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //Each checkbox state is stored in reactivelocalstorage
    $(document).on('click', '[action-checkbox]', function(event) {
        var paramToChange = $(this).attr('action-checkbox');
        var valueToSet;
        if (ReactiveLocalStorage.getParam(paramToChange) == 'true') {
            valueToSet = 'false';
        } else {
            valueToSet = 'true';
        }

        ReactiveLocalStorage.setParam(paramToChange, valueToSet );
    });

    $('[action-checkbox]').each(function() {
        var paramToChange = $(this).attr('action-checkbox');

        //default state is the Webflow default state based on the class
        var $thisCheckmark = $(this).find('.bem-checkbox__checkmark');
        var initialCheckedState;
        if ($thisCheckmark.hasClass('is-unchecked') ) {
            initialCheckedState = 'false';
        } else if ( $thisCheckmark.hasClass('is-checked') ) {
            initialCheckedState = 'true';
        }
        ReactiveLocalStorage.setDefaultParam(paramToChange, initialCheckedState );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            //fallback for weid autofill behaviour
            if (value !== "false" && value !== "true") {value = "false";}

            if (value == 'true') {
                $thisCheckmark.addClass('is-checked').removeClass('is-unchecked');
            } else if (value == 'false') {
                $thisCheckmark.removeClass('is-checked').addClass('is-unchecked');
            }
        });
    });

});

function initSlidersDragging() {

  function getAngleRatio(x, y) {
    if (y === 0) {y = 0.0001; } //prevent divide by zero
    var angleRatio = Math.abs(x) / Math.abs(y);
    return angleRatio;
  }

  function mathRound(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  function roundToClosestMultipleOf(interval, inputNumber) {
    var intervalNumber = Number(interval);
    var inputNumberRounded = mathRound(inputNumber, 10);
    var ceil = Math.ceil(inputNumber/intervalNumber);
    var toReturn = ceil*interval;
    return toReturn;
  }

  $('[action-slider]').each(function() {

    var $swipableArea = $(this);
    var $sliderHandle = $(this).find('[js-slider-handle]');
    var bindedParam = $(this).attr('action-slider');
    var minValue = Number($(this).attr('action-slider-min'));
    var maxValue = Number($(this).attr('action-slider-max'));
    var interval = Number($(this).attr('action-slider-interval')) || 1;

    function setSliderHandleToPercentage(percentageToSet) {
      $sliderHandle.css('left', maxWidth*percentageToSet + 'px');
    }

    function setSliderHandleToValue(valueToSet) {

      if (valueToSet > maxValue) { valueToSet = maxValue }
      if (valueToSet < minValue) { valueToSet = minValue }

      var percentage = (valueToSet - minValue)/(maxValue - minValue);
      var sliderWidth = $swipableArea.outerWidth();
      var pixels = (sliderWidth*percentage).toFixed(0)+'px';
      $sliderHandle.css('left', pixels);
    }

    /* Bind sliders positino to params value */
    ReactiveLocalStorage.onParamChange(bindedParam, function(value) {
      value = Number(value);

      //TODO replace with validation
      // if (value > maxValue) {
      //   ReactiveLocalStorage.setParam(bindedParam, maxValue);
      //   return;
      // }

      // if (value < minValue) {
      //   ReactiveLocalStorage.setParam(bindedParam, minValue);
      //   return;
      // }

      setSliderHandleToValue(value);
    });



    //we need function handler so that we can add and remove event listener later
    var handleTouchmovePreventDefault = function(e) {
      e.preventDefault();
    };

    $sliderHandle.on('movestart.sliderMove', function(event) {

      console.log('test');

      //if move angle is less than 45 degrees...
      var angleRatio = getAngleRatio(event.deltaX, event.deltaY);
      if (angleRatio > 1 ) {

        //attempt to prevent window scrolling while vertical movement
        //https://stackoverflow.com/questions/21817397/event-handler-namespace-in-vanilla-javascript
        //not always works well on new iOS but helps a bit to prevent page bounce
        window.addEventListener('touchmove', handleTouchmovePreventDefault, { passive: false });

        var sliderWidth = $swipableArea.outerWidth();
        var currentHandlePosition = $sliderHandle.position().left;
        var distanceLimitRight = sliderWidth - currentHandlePosition;
        var distanceLimitLeft = -currentHandlePosition;

        //...we bind other events that handle dragging handle
        $swipableArea.on('move.sliderMove', function(moveEvent) {

          var distanceToMove = moveEvent.distX;

          //limit distance to move by amounts from left and right for the handle
          //wasn't enough to add this in condition, because the events are throttled
          //so with dropped frames it cause menu not to open/close fully
          if (distanceToMove > distanceLimitRight) { distanceToMove = distanceLimitRight; }
          if (distanceToMove < distanceLimitLeft) { distanceToMove = distanceLimitLeft; }

          //we round up pixels for better performance
          var pixelsToMove = (currentHandlePosition + distanceToMove).toFixed(0);

          var percetangeThatWasSet = pixelsToMove / sliderWidth;
          var resultNumber = (maxValue - minValue)*percetangeThatWasSet + Number(minValue);
          var resultNumberRounded = roundToClosestMultipleOf(interval, resultNumber);

          ReactiveLocalStorage.setParam(bindedParam, resultNumberRounded);

        });

        $swipableArea.on('moveend.sliderMove', function(moveendEvent) {

          //unbind events previously attached on movestart
          $swipableArea.off('move.sliderMove');
          window.removeEventListener('touchmove', handleTouchmovePreventDefault, { passive: false });

        });
      }
    });

    $swipableArea.on('click', function(event) {
      console.log(event);
      //only apply click logic if an area outside of handle is clicked
      if ($(event.target).closest('[js-slider-handle]').length === 0) {
        var eventVieportPageX = event.pageX - window.scrollX;
        var rect = $swipableArea[0].getBoundingClientRect();
        var clickedDistanceInElem = eventVieportPageX.toFixed(0) - rect.left.toFixed(0);
        var sliderWidth = $swipableArea.outerWidth();
        var clickedPercentage = clickedDistanceInElem / sliderWidth;
        var resultNumber = (maxValue - minValue)*clickedPercentage + Number(minValue);
        if (resultNumber > maxValue) {resultNumber = maxValue }
        if (resultNumber < minValue) {resultNumber = minValue }
        var resultNumberRounded = roundToClosestMultipleOf(interval, resultNumber);
        ReactiveLocalStorage.setParam(bindedParam, resultNumberRounded);
      }

    });

  });
}

$(document).on('preloadingComplete', function() {
  initSlidersDragging();
});

/*
How to bind an array?
Add attributes to the DOM
- data-bind-array="paramWithArrayToBind"
- data-bind-repeatable-template="true"
 for the item that will repeat
- data-bind-array-empty-state="true" for empty state container

Then initialise the binding by function, do it in a separate file related to the specific feature
ReactiveLocalStorageDataBindArrayList('transactionsInProgressList', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	if (elementData.status === 'pending') {
		$elementToAppend.find('[data-bind="status__is-pending"]').addClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__is-pending"]').removeClass('is-hidden');
	}
});

*/


function ReactiveLocalStorageDataBindArrayList(paramNameWithArray, functionToModifyEachItemBeforeShowing) {

	//DON"T SET DEFAULT EMPTY ARRAY, BECAUSE THERE"S A BUG WITH $.PARAM IN REACTIVELOCALSTORAGE
	//ReactiveLocalStorage.setDefaultParam(paramNameWithArray, []);

	ReactiveLocalStorage.onParamChange(paramNameWithArray, function(value) {

		var $thisList = $('[data-bind-array="'+paramNameWithArray+'"]');

		//there might be more than one table binded to the same array, hence "each"
		$thisList.each(function(thisListIndex, thisListValue) {

			var $repeatableElementTemplate = $thisList.find('[data-bind-repeatable-template]').first();
			var $parentContainerWhereWeAppend = $repeatableElementTemplate.parent();

			//the template is stored in html, so we want to hide it and only use it later
			//as a tempalte source for repeatable items
			$repeatableElementTemplate.find('.tooltipstered').tooltipster('destroy');
			$repeatableElementTemplate.addClass('is-hidden');

			//empty the list before rerendering
			$thisList.find('[data-bind-repeatable-clone]').remove();

			if (typeof value !== 'undefined' && value.length !== 0 && !$.isEmptyObject(value) ) {
				$thisList.find('[data-bind-array-empty-state]').addClass('is-hidden');

				$.each(value, function(arrayIndex, arrayValue) {

					//prepare template
					var $elementToAppend = $repeatableElementTemplate.clone();
					$elementToAppend.removeAttr('data-bind-repeatable-template');
					$elementToAppend.attr('data-bind-repeatable-clone', 'true');

					//map object attributes as attributes to DOM
					//we need this to quickly reference respective object in ReactiveLocalStorage
					if (typeof arrayValue == 'object') {
						$.each(arrayValue, function(objectIndex, objectValue) {
							$elementToAppend.attr('item-data-'+objectIndex, objectValue);
						});
					}

					$elementToAppend.appendTo($parentContainerWhereWeAppend);

					$elementToAppend.showWithFunctionBeforeShowing(function() {
						//we pass the $elementToAppend to the function, so that we can
						//refer to it from other places where we init the binding
						functionToModifyEachItemBeforeShowing($elementToAppend, arrayValue);
					});
				});
			} else {
				$thisList.find('[data-bind-array-empty-state]').removeClass('is-hidden');
			}

			initTooltipster($thisList);

		});
	});
}

//use this to bind elements with attribute data-bind to selected reactive local storage params
function ReactiveLocalStorageDataBindText(objectWithAttrubiteValuePairs) {
	$.each(objectWithAttrubiteValuePairs, function(attribute, bidedParamValue) {
		ReactiveLocalStorage.onParamChange(bidedParamValue, function(value) {
			$('[data-bind="'+attribute+'"]').text(value);
		});
	});
}

//automatically bind [data-bind-param] to related local storage param
$(document).on('preloadingComplete', function() {
	$('[data-bind-param]').each(function() {
		var paramToBind = $(this).attr('data-bind-param');
		ReactiveLocalStorage.onParamChange(paramToBind, function(value) {
			$('[data-bind-param="'+paramToBind+'"]').text(value);
		});
	});
});

function ReactiveLocalStorageOnParamChangeShowElementsOnlyWhenParamXEqualsY(param, paramValue) {
	ReactiveLocalStorage.onParamChange(param, function(value) {
		if (value === paramValue) {
		    $('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		    $('[show-when-'+param+'='+paramValue+']').removeClass('is-hidden');
		} else {
			$('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageDependVisibilityOnParam(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		//TODO refactor needed
		$('[depends-on-param="'+paramName+'"]').not('[action-show-when-param-equals="'+value+'"]').not('[action-hide-when-param-equals]').not('[action-show-when-param-not-equals]').addClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-equals="'+value+'"]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-not-equals]').each(function() {
			var paramToCompare = $(this).attr('action-show-when-param-not-equals');
			if (paramToCompare !== value && typeof value !== 'undefined') {
				$(this).removeClass('is-hidden');
			} else if (typeof value !== 'undefined') {
				$(this).addClass('is-hidden');
			}
		});
	});
}

$(document).on('preloadingComplete', function() {
	$('[depends-on-param][show-by-default]').each(function() {
		var param = $(this).attr('depends-on-param');
		var valueToSet = $(this).attr('action-show-when-param-equals');
		ReactiveLocalStorage.setDefaultParam(param, valueToSet);
	});
});

$(document).on('preloadingComplete', function() {
	$('[depends-on-param][show-on-load]').each(function() {
		var param = $(this).attr('depends-on-param');
		var valueToSet = $(this).attr('action-show-when-param-equals');
		ReactiveLocalStorage.setParam(param, valueToSet);
	});
});

//IDEA todo add synonym for "shown" and not only show, common typo

function ReactiveLocalStorageHideWhenParamEquals(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		$('[depends-on-param="'+paramName+'"]').not('[action-hide-when-param-equals="'+value+'"]').not('[action-show-when-param-equals]').not('[action-show-when-param-not-equals]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-param-equals="'+value+'"]').addClass('is-hidden');
	});
}


function ReactiveLocalStorageHideIfParamNotUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value !== 'undefined') || (value !== 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').removeClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageShowIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').removeClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageHideIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').removeClass('is-hidden');
		}
	});
}

$(document).on('preloadingComplete', function() {
	$('[is-hidden-on-load]').isHidden();
	$('[hide-on-load]').isHidden();
	$('[add-class-on-load]').each(function() {
		var classToAdd = $(this).attr('add-class-on-load');
		$(this).addClass(classToAdd);
	});

	$('[depends-on-param]').each(function() {
		var paramToDependOn = $(this).attr('depends-on-param');
		ReactiveLocalStorageDependVisibilityOnParam(paramToDependOn);
		ReactiveLocalStorageHideWhenParamEquals(paramToDependOn);
		ReactiveLocalStorageHideIfParamNotUndefined(paramToDependOn);
		ReactiveLocalStorageShowIfParamUndefined(paramToDependOn);
		ReactiveLocalStorageHideIfParamUndefined(paramToDependOn);
	});

	ReactiveLocalStorage.setDefaultParam('show-elements-hidden-for-future', 'false');
	$('[hide-for-future]').each(function() {
		if (ReactiveLocalStorage.getParam('show-elements-hidden-for-future') === 'false') {
			$(this).remove();
		} else {
			//keep the elements
		}
	});

	$('[is-hidden-on-load]').removeAttr('is-hidden-on-load').attr('was-hidden-on-load', 'true');
	$('[hide-on-load]').removeAttr('hide-on-load').attr('was-hidden-on-load', 'true');
});




//unfinished idea
// function ReactiveLocalStorageShowWhen(paramName) {
// 	ReactiveLocalStorage.onParamChange(paramName, function(value) {
// 		var bindedItems = $('[when-'+paramName+'-equals-'+value+']');
// 		$.each(bindedItems, function() {
// 			var attrVal = $this.attr('[when-'+paramName+'-equals-'+value+']');

// 			if (attrVal === 'show') {
// 				$(this).removeClass('is-hidden');
// 			} else if (attrVal === 'hide') {
// 				$(this).addClass('is-hidden');
// 			}
// 		});
// 	});
// }

//idea  - fallback hiding if is-hidden class is not set TODO

//idea - todo - reusable attribute that makes element visible only when its value matches param value
//is-shown-when-param__param-name="yourvalue"



$(document).on('preloadingComplete', function() {

	var bindedTabParams = {};

	$('[action-tab]').each(function() {
		var tabsGroup = $(this).attr('tabs-group');
		var tabIdToBind = $(this).attr('action-tab');

		if (!bindedTabParams[tabsGroup]) {
			QueryStringRouter.onParamChange('tabs__'+tabsGroup, function(value) {
				if (typeof value != 'undefined') {
					$('[tabs-group="'+tabsGroup+'"][tab-id="'+value+'"]').removeClass('is-hidden');
					$('[tabs-group="'+tabsGroup+'"][tab-id]').not('[tab-id="'+value+'"]').addClass('is-hidden');

					$('[tabs-group="'+tabsGroup+'"][action-tab]').not('[action-tab="'+value+'"]').removeClass('is-current');
					$('[tabs-group="'+tabsGroup+'"][action-tab="'+value+'"]').addClass('is-current');
				}
			});
			bindedTabParams[tabsGroup] = true;
		}
	});

	$(document).on('click', '[action-tab]', function(event) {
		var clickedTab = $(this).attr('action-tab');
		var clickedTabGroup = $(this).attr('tabs-group');
		QueryStringRouter.setParam('tabs__'+clickedTabGroup, clickedTab, {doNotCreateHistoryState: true});
	});
});

//prevent submitting forms by clicking enter
$(document).on('preloadingComplete', function() {
	$('form').not('.w-password-page').not('[js-selector]').each(function() {
		$(this).on('submit', function (event){
			event.preventDefault();
			console.log('Form submit prevented by webflow prototyping framework...');
		});
	});
});

$(document).on('click', '[prevent-default]', function(event) {
	event.preventDefault();
});

$(document).on('click', '[stop-propagation]', function(event) {
	event.stopPropagation();
});

function showSpinnerInClickedButton(clickedButtonElm, actionAfter) {
	var button = clickedButtonElm.closest('[js-selector="button-with-spinner"]');
	var spinnerIcon = clickedButtonElm.find('[js-selector="button-spinner-icon"]');
	var textNearSpinner = clickedButtonElm.find('[js-selector="button-text-near-spinner"]');

	button.addClass('is-inactive-with-preloader');
	clickedButtonElm.addClass('is-inactive-with-preloader');
	spinnerIcon.removeClass('is-hidden');
	textNearSpinner.addClass('is-with-spinner-shown');

	setTimeout(function() {
		clickedButtonElm.removeClass('is-inactive-with-preloader');
		button.removeClass('is-inactive-with-preloader');
		spinnerIcon.addClass('is-hidden');
		textNearSpinner.removeClass('is-with-spinner-shown');

		actionAfter();
	}, 1500);
}

var showSpinnerInButton = showSpinnerInClickedButton;

/* showing spinner briefly inside a button (only for ptototyping) */
(function( $ ) {
  $.fn.showSpinnerInsideThisButton = function(actionAfter) {

    this.each(function() {
      var clickedButtonElm = $(this);
      var spinnerIcon = clickedButtonElm.find('[js-selector="button-spinner-icon"]');
      var textNearSpinner = $(this).find('[js-selector="button-text-near-spinner"]');

      clickedButtonElm.addClass('is-inactive-with-preloader');
      spinnerIcon.removeClass('is-hidden');
      textNearSpinner.addClass('is-with-spinner-shown');

      setTimeout(function() {
      	clickedButtonElm.removeClass('is-inactive-with-preloader');
      	spinnerIcon.addClass('is-hidden');
      	textNearSpinner.removeClass('is-with-spinner-shown');

      	actionAfter();
      }, 1500);
    });

    return this;
  };
}( jQuery ));

//TODO refactor multiple ways to show loading in spinner
function showLoadingInButton(elm) {
	elm = $(elm);
	elm.addClass('is-grayed-out');
	elm.addClass('is-with-spinner-shown');
	elm.parent().attr('is-inactive-with-preloader', 'true')
	.find('[js-selector="button-spinner-icon"]').removeClass('is-hidden');
}

function hideLoadingInButton(elm) {
	elm = $(elm);
	elm.removeClass('is-grayed-out');
	elm.removeClass('is-with-spinner-shown');
	elm.parent().removeAttr('is-inactive-with-preloader')
	.find('[js-selector="button-spinner-icon"]').addClass('is-hidden');
}

$(document).on('click', '[is-inactive-with-preloader]', function(e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	return false;
})

//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker
//we can define for what specific events we wait until we show the UI,
//for example we may want to preload not only subpages, but additional promo modals etc.

function recursivelyPreloadElements() {
	var preloadMissingElements = function() {
		var elementsThatWillBePreloaded = $('[preload-from]').not('[preloading-started]').not('[preloading-done]');
		//mark all elements that will be preloaded
		elementsThatWillBePreloaded.attr('preloading-started', 'true');

		elementsThatWillBePreloaded.each(function() {
			var elemToLoad = $(this).attr('preload-from');
			var $this = $(this);
			var loadURL = window.location.origin+'/'+elemToLoad;
			$this.load(loadURL + " .content-to-load", function() {
				$this.attr('preloading-done', 'true');
				checkIfEverythingIsPreloaded();
			});
		});
	};

	var checkIfEverythingIsPreloaded = function() {
		//check if there are no elements that has not yet been started preloading
		var numberOfUnitialisedElements = $('[preload-from]').not('[preloading-started]').not('[preloading-done]').length;
		var numberOfInProgressElements = $('[preload-from][preloading-started]').not('[preloading-done]').length;

		if (numberOfUnitialisedElements === 0 && numberOfInProgressElements === 0) {
			console.log('Everything preloaded and nothing in progress');
			$(document).trigger('preloadedElementsReady');
		} else if (numberOfUnitialisedElements === 0 && numberOfInProgressElements > 0) {
			//console.log('Preloading still in progress...');
			//do nothing because other elements will continue recursive preloading
		} else if (numberOfUnitialisedElements > 0){
			console.log('Noticed elements to preload...');
			preloadMissingElements(); //rerun the checking function
		}
	};

	checkIfEverythingIsPreloaded();
}

function initTheUIAfterPreloading() {
	$(document).trigger('preloadingComplete');
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	var $initalLoadOverlay = $('.initial-load-overlay, [initial-load-overlay]');
	if ($initalLoadOverlay.length > 0) {
		$initalLoadOverlay.fadeOutAndHide(500);
	}
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			//TODO refactor so that it checks if the specific events happened, not number of elements
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				if (typeof callbackFunction === 'function') { callbackFunction(); }
			}
		});
	});
}

waitForInitialAjaxLoadingToFinishThenShowUI([
	// reserved place in case we need to wait for more events
	'preloadedElementsReady'
], function() {
	$(document).ready(function() {
		console.log('document ready');
		initTheUIAfterPreloading();
	});
});

recursivelyPreloadElements();

/*========================================================================================================
=            FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications            =
========================================================================================================*/
var FlashingNotifications = (function() {

	var FlashingNotifications__timerOne = {};
	var FlashingNotifications__timerTwo = {};

	function hideNotification(notificationType, timeReservedForAnimation) {
		if (typeof timeReservedForAnimation !== 'number') {
			timeReservedForAnimation = 800;
		}

		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');

		$notificationBox.addClass('is-transparent');
		clearTimeout(FlashingNotifications__timerTwo[notificationType]);
		FlashingNotifications__timerTwo[notificationType] = setTimeout(function() {
			$notificationBox.addClass('is-hidden');
		}, timeReservedForAnimation);
	}

	var closeButtonAlreadyBinded = false;
	function bindCloseButton(timeReservedForAnimation) {
		if (typeof timeReservedForAnimation !== 'number') {
			timeReservedForAnimation = 800;
		}

		if (closeButtonAlreadyBinded === false) {
			$(document).on('click.flashingNotifications', '[flashing-notifications__action-close-notification="true"]', function() {
				closeButtonAlreadyBinded = true;
				var $notificationBox = $(this).closest('[js-selector^="flashing-notification__"]');
				$notificationBox.addClass('is-transparent');
				setTimeout(function() {
					$notificationBox.addClass('is-hidden');
				}, timeReservedForAnimation);
			});
		}
	}

	function showAndHideNotification(notificationType, htmlToPlaceInsideNotification, timeToWaitBeforeHiding) {

		//default arguments
		if (typeof notificationType === 'undefined' || notificationType === "") {
			notificationType = "neutral";
		}
		if (typeof timeToWaitBeforeHiding === 'undefined' || timeToWaitBeforeHiding === "") {
			timeToWaitBeforeHiding = 3500;
		}
    
		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');    

		var updateNotificationBoxText = function() {
			//only update html if argument provided
			if (htmlToPlaceInsideNotification !== "" || typeof htmlToPlaceInsideNotification !== 'undefined'); {
				$notificationBox.find('[js-selector="flashing-notification-text"]').html(htmlToPlaceInsideNotification);
			}
		};

		var showAndHideNotificationBox = function() {
			$notificationBox.removeClass('is-hidden');
			setTimeout(function() {
				$notificationBox.removeClass('is-transparent');

				clearTimeout(FlashingNotifications__timerOne[notificationType]);
				clearTimeout(FlashingNotifications__timerTwo[notificationType]);

				FlashingNotifications__timerOne[notificationType] = setTimeout(function() {
					hideNotification(notificationType);
				}, timeToWaitBeforeHiding);

			}, 20);
		};

		//If there's already a notification shown, first hide it and then show another one
		if ($notificationBox.hasClass('is-hidden') === false && $notificationBox.hasClass('is-transparent') === false) {
			hideNotification(notificationType);
			setTimeout(function() {
				updateNotificationBoxText();
				showAndHideNotificationBox();
			}, 1000);
		} else { //else simply show and hide notification
			updateNotificationBoxText();
			showAndHideNotificationBox();
		}

		bindCloseButton();

	}

	function hideAllNotifications() {
		hideNotification('success');
		hideNotification('error');
		hideNotification('neutral');
	}

	function immediatelyHideAllNotifications() {
		hideNotification('success', 0);
		hideNotification('error', 0);
		hideNotification('neutral', 0);
	}

	//TODO: options to disable hiding or separate method to just show and then automatically enforce X button, option to show and hide X button

	return {
		showAndHideNotification: showAndHideNotification,
		hideNotification: hideNotification,
		hideAllNotifications: hideAllNotifications,
		immediatelyHideAllNotifications: immediatelyHideAllNotifications,
	};

})();
/*=====  End of FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications  ======*/

$(document).on('click', '[action-collapse-next-div]', function() {
	$(this).next().toggleClass('is-hidden');
	$(this).find('[icon-to-rotate-when-expanding]').toggleClass('is-expanded');
});

$(document).on('click', '[action-show-next-section-and-hide-button]', function() {
	$(this).next().toggleClass('is-hidden');
	$(this).addClass('is-hidden');
});

On = {};

On.touchstartOrClick = function(selector, eventHandlerFunction) {
	$(document).on('click touchstart', selector, function(event) {

		var clickedElement = $(event.currentTarget);

		if (typeof eventHandlerFunction === 'function') {
			if (event.type === 'touchstart') {
			    $(document).off('click', selector);
		       	eventHandlerFunction(event);
		    	$(document).on('click', selector, function(event) {
		    		event.stopPropagation();
		    		event.preventDefault();
		    		return false;
		    	});
			} else {
				eventHandlerFunction(event);
			}
		} else {
			console.error('onTouchstartOrClick event handler is not a function');
		}
	});
};

function webflowPrototypingFrameworkShowDebugOverlay() {

	var allParams = ReactiveLocalStorage.getAllParams();

	var allParamsOrdered = {};
	Object.keys(allParams).sort().forEach(function(key) {
	  allParamsOrdered[key] = allParams[key];
	});

	var overlay = $('<div js-debug-overlay style="position:fixed; left: 30px; bottom: 0; padding: 10px; max-height: 300px; max-width: 600px; background: #fff; overflow: auto; z-index: 1000; box-shadow: 10px 10px 108px 0px rgba(0,0,0,0.75); border-radius: 5px; font-size: 13px;"></div>');

	$.each(allParamsOrdered, function(key, value) {
		var row = $('<div><span style="padding-right: 8px;">'+key+'</span><input value="'+value+'" action-text-input="'+key+'" update-on-input="true" js-debug-input="'+key+'"></input></div>');
		row.appendTo(overlay);
	});

	overlay.appendTo('body');

	$(document).on('click.debugOverlay', function() {
		$('[js-debug-input]').each(function() {
			var param = $(this).attr('js-debug-input');
			$(this).val(ReactiveLocalStorage.getParam(param));
		});
	});

}

function webflowPrototypingFrameworkHideDebugOverlay() {
	$('[js-debug-overlay]').remove();

	$(document).off('click.debugOverlay');
}

$(document).on('keydown', function(e) {
	if ( e.shiftKey && ( e.which === 192 ) ) {
	 	if ($('[js-debug-overlay]').length === 0) {
	 		webflowPrototypingFrameworkShowDebugOverlay();
	 	} else {
	 		webflowPrototypingFrameworkHideDebugOverlay();
	 	}

	}
});

//IDEA TODO - show attributes on hover

//IDEA TODO - show elements binded to this param on hover

//IDEA TODO - in reactive local storage add onAnyParamChange

//# sourceMappingURL=webflow-prototyping-framework-bundle.js.map