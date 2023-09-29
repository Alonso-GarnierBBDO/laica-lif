"use strict";
/**
 * Swiper 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Swiper = (function () {
    "use strict";
    function e(e) {
        return (null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object);
    }
    function t(s, a) {
        void 0 === s && (s = {}),
            void 0 === a && (a = {}),
            Object.keys(a).forEach(function (i) {
                void 0 === s[i]
                    ? (s[i] = a[i])
                    : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
            });
    }
    var s = {
        body: {},
        addEventListener: function () { },
        removeEventListener: function () { },
        activeElement: { blur: function () { }, nodeName: "" },
        querySelector: function () { return null; },
        querySelectorAll: function () { return []; },
        getElementById: function () { return null; },
        createEvent: function () { return ({ initEvent: function () { } }); },
        createElement: function () { return ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () { return []; },
        }); },
        createElementNS: function () { return ({}); },
        importNode: function () { return null; },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
        },
    };
    function a() {
        var e = "undefined" != typeof document ? document : {};
        return t(e, s), e;
    }
    var i = {
        document: s,
        navigator: { userAgent: "" },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
        },
        history: { replaceState: function () { }, pushState: function () { }, go: function () { }, back: function () { } },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () { },
        removeEventListener: function () { },
        getComputedStyle: function () { return ({ getPropertyValue: function () { return ""; } }); },
        Image: function () { },
        Date: function () { },
        screen: {},
        setTimeout: function () { },
        clearTimeout: function () { },
        matchMedia: function () { return ({}); },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };
    function r() {
        var e = "undefined" != typeof window ? window : {};
        return t(e, i), e;
    }
    function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function l() {
        return Date.now();
    }
    function o(e, t) {
        void 0 === t && (t = "x");
        var s = r();
        var a, i, n;
        var l = (function (e) {
            var t = r();
            var s;
            return (t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                !s && e.currentStyle && (s = e.currentStyle),
                s || (s = e.style),
                s);
        })(e);
        return (s.WebKitCSSMatrix
            ? ((i = l.transform || l.webkitTransform),
                i.split(",").length > 6 &&
                    (i = i
                        .split(", ")
                        .map(function (e) { return e.replace(",", "."); })
                        .join(", ")),
                (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
            : ((n =
                l.MozTransform ||
                    l.OTransform ||
                    l.MsTransform ||
                    l.msTransform ||
                    l.transform ||
                    l
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                (a = n.toString().split(","))),
            "x" === t &&
                (i = s.WebKitCSSMatrix
                    ? n.m41
                    : 16 === a.length
                        ? parseFloat(a[12])
                        : parseFloat(a[4])),
            "y" === t &&
                (i = s.WebKitCSSMatrix
                    ? n.m42
                    : 16 === a.length
                        ? parseFloat(a[13])
                        : parseFloat(a[5])),
            i || 0);
    }
    function d(e) {
        return ("object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1));
    }
    function c() {
        var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (var a_1 = 1; a_1 < arguments.length; a_1 += 1) {
            var i_1 = a_1 < 0 || arguments.length <= a_1 ? void 0 : arguments[a_1];
            if (null != i_1 &&
                ((s = i_1),
                    !("undefined" != typeof window && void 0 !== window.HTMLElement
                        ? s instanceof HTMLElement
                        : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                var s_1 = Object.keys(Object(i_1)).filter(function (e) { return t.indexOf(e) < 0; });
                for (var t_1 = 0, a_2 = s_1.length; t_1 < a_2; t_1 += 1) {
                    var a_3 = s_1[t_1], r_1 = Object.getOwnPropertyDescriptor(i_1, a_3);
                    void 0 !== r_1 &&
                        r_1.enumerable &&
                        (d(e[a_3]) && d(i_1[a_3])
                            ? i_1[a_3].__swiper__
                                ? (e[a_3] = i_1[a_3])
                                : c(e[a_3], i_1[a_3])
                            : !d(e[a_3]) && d(i_1[a_3])
                                ? ((e[a_3] = {}), i_1[a_3].__swiper__ ? (e[a_3] = i_1[a_3]) : c(e[a_3], i_1[a_3]))
                                : (e[a_3] = i_1[a_3]));
                }
            }
        }
        var s;
        return e;
    }
    function p(e, t, s) {
        e.style.setProperty(t, s);
    }
    function u(e) {
        var t = e.swiper, s = e.targetPosition, a = e.side;
        var i = r(), n = -t.translate;
        var l, o = null;
        var d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
            i.cancelAnimationFrame(t.cssModeFrameID);
        var c = s > n ? "next" : "prev", p = function (e, t) { return ("next" === c && e >= t) || ("prev" === c && e <= t); }, u = function () {
            var _a;
            (l = new Date().getTime()), null === o && (o = l);
            var e = Math.max(Math.min((l - o) / d, 1), 0), r = 0.5 - Math.cos(e * Math.PI) / 2;
            var c = n + r * (s - n);
            if ((p(c, s) && (c = s), t.wrapperEl.scrollTo((_a = {}, _a[a] = c, _a)), p(c, s)))
                return ((t.wrapperEl.style.overflow = "hidden"),
                    (t.wrapperEl.style.scrollSnapType = ""),
                    setTimeout(function () {
                        var _a;
                        (t.wrapperEl.style.overflow = ""),
                            t.wrapperEl.scrollTo((_a = {}, _a[a] = c, _a));
                    }),
                    void i.cancelAnimationFrame(t.cssModeFrameID));
            t.cssModeFrameID = i.requestAnimationFrame(u);
        };
        u();
    }
    function m(e) {
        return (e.querySelector(".swiper-slide-transform") ||
            (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
            e);
    }
    function h(e, t) {
        return (void 0 === t && (t = ""), __spreadArray([], e.children, true).filter(function (e) { return e.matches(t); }));
    }
    function f(e, t) {
        var _a;
        void 0 === t && (t = []);
        var s = document.createElement(e);
        return (_a = s.classList).add.apply(_a, (Array.isArray(t) ? t : [t])), s;
    }
    function g(e) {
        var t = r(), s = a(), i = e.getBoundingClientRect(), n = s.body, l = e.clientTop || n.clientTop || 0, o = e.clientLeft || n.clientLeft || 0, d = e === t ? t.scrollY : e.scrollTop, c = e === t ? t.scrollX : e.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
    }
    function v(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t);
    }
    function w(e) {
        var t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling);)
                1 === s.nodeType && (t += 1);
            return t;
        }
    }
    function b(e, t) {
        var s = [];
        var a = e.parentElement;
        for (; a;)
            t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
        return s;
    }
    function y(e, t) {
        t &&
            e.addEventListener("transitionend", function s(a) {
                a.target === e &&
                    (t.call(e, a), e.removeEventListener("transitionend", s));
            });
    }
    function E(e, t, s) {
        var a = r();
        return s
            ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
                parseFloat(a
                    .getComputedStyle(e, null)
                    .getPropertyValue("width" === t ? "margin-right" : "margin-top")) +
                parseFloat(a
                    .getComputedStyle(e, null)
                    .getPropertyValue("width" === t ? "margin-left" : "margin-bottom"))
            : e.offsetWidth;
    }
    var x, S, T;
    function M() {
        return (x ||
            (x = (function () {
                var e = r(), t = a();
                return {
                    smoothScroll: t.documentElement &&
                        t.documentElement.style &&
                        "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e ||
                        (e.DocumentTouch && t instanceof e.DocumentTouch)),
                };
            })()),
            x);
    }
    function C(e) {
        return (void 0 === e && (e = {}),
            S ||
                (S = (function (e) {
                    var t = (void 0 === e ? {} : e).userAgent;
                    var s = M(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = { ios: !1, android: !1 }, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    var p = n.match(/(iPad).*OS\s([\d_]+)/);
                    var u = n.match(/(iPod)(.*OS\s([\d_]+))?/), m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === i;
                    var f = "MacIntel" === i;
                    return (!p &&
                        f &&
                        s.touch &&
                        [
                            "1024x1366",
                            "1366x1024",
                            "834x1194",
                            "1194x834",
                            "834x1112",
                            "1112x834",
                            "768x1024",
                            "1024x768",
                            "820x1180",
                            "1180x820",
                            "810x1080",
                            "1080x810",
                        ].indexOf("".concat(o, "x").concat(d)) >= 0 &&
                        ((p = n.match(/(Version)\/([\d.]+)/)),
                            p || (p = [0, 1, "13_0_0"]),
                            (f = !1)),
                        c && !h && ((l.os = "android"), (l.android = !0)),
                        (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
                        l);
                })(e)),
            S);
    }
    function P() {
        return (T ||
            (T = (function () {
                var e = r();
                var t = !1;
                function s() {
                    var t = e.navigator.userAgent.toLowerCase();
                    return (t.indexOf("safari") >= 0 &&
                        t.indexOf("chrome") < 0 &&
                        t.indexOf("android") < 0);
                }
                if (s()) {
                    var s_2 = String(e.navigator.userAgent);
                    if (s_2.includes("Version/")) {
                        var _a = s_2
                            .split("Version/")[1]
                            .split(" ")[0]
                            .split(".")
                            .map(function (e) { return Number(e); }), e_1 = _a[0], a_4 = _a[1];
                        t = e_1 < 16 || (16 === e_1 && a_4 < 2);
                    }
                }
                return {
                    isSafari: t || s(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                };
            })()),
            T);
    }
    var L = {
        on: function (e, t, s) {
            var a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            var i = s ? "unshift" : "push";
            return (e.split(" ").forEach(function (e) {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                    a.eventsListeners[e][i](t);
            }),
                a);
        },
        once: function (e, t, s) {
            var a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                    r[n] = arguments[n];
                t.apply(a, r);
            }
            return (i.__emitterProxy = t), a.on(e, i, s);
        },
        onAny: function (e, t) {
            var s = this;
            if (!s.eventsListeners || s.destroyed)
                return s;
            if ("function" != typeof e)
                return s;
            var a = t ? "unshift" : "push";
            return (s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s);
        },
        offAny: function (e) {
            var t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            var s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off: function (e, t) {
            var s = this;
            return !s.eventsListeners || s.destroyed
                ? s
                : s.eventsListeners
                    ? (e.split(" ").forEach(function (e) {
                        void 0 === t
                            ? (s.eventsListeners[e] = [])
                            : s.eventsListeners[e] &&
                                s.eventsListeners[e].forEach(function (a, i) {
                                    (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                                        s.eventsListeners[e].splice(i, 1);
                                });
                    }),
                        s)
                    : s;
        },
        emit: function () {
            var e = this;
            if (!e.eventsListeners || e.destroyed)
                return e;
            if (!e.eventsListeners)
                return e;
            var t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0])
                ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
                : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
                s.unshift(a);
            return ((Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
                e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach(function (e) {
                        e.apply(a, __spreadArray([t], s, true));
                    }),
                    e.eventsListeners &&
                        e.eventsListeners[t] &&
                        e.eventsListeners[t].forEach(function (e) {
                            e.apply(a, s);
                        });
            }),
                e);
        },
    };
    var z = function (e, t) {
        if (!e || e.destroyed || !e.params)
            return;
        var s = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
        if (s) {
            var t_2 = s.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t_2 &&
                e.isElement &&
                (s.shadowRoot
                    ? (t_2 = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)))
                    : requestAnimationFrame(function () {
                        s.shadowRoot &&
                            ((t_2 = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass))),
                                t_2 && t_2.remove());
                    })),
                t_2 && t_2.remove();
        }
    }, A = function (e, t) {
        if (!e.slides[t])
            return;
        var s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
    }, $ = function (e) {
        if (!e || e.destroyed || !e.params)
            return;
        var t = e.params.lazyPreloadPrevNext;
        var s = e.slides.length;
        if (!s || !t || t < 0)
            return;
        t = Math.min(t, s);
        var a = "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            var s_3 = i, r_2 = [s_3 - t];
            return (r_2.push.apply(r_2, Array.from({ length: t }).map(function (e, t) { return s_3 + a + t; })),
                void e.slides.forEach(function (t, s) {
                    r_2.includes(t.column) && A(e, s);
                }));
        }
        var r = i + a - 1;
        if (e.params.rewind || e.params.loop)
            for (var a_5 = i - t; a_5 <= r + t; a_5 += 1) {
                var t_3 = ((a_5 % s) + s) % s;
                (t_3 < i || t_3 > r) && A(e, t_3);
            }
        else
            for (var a_6 = Math.max(i - t, 0); a_6 <= Math.min(r + t, s - 1); a_6 += 1)
                a_6 !== i && (a_6 > r || a_6 < i) && A(e, a_6);
    };
    var I = {
        updateSize: function () {
            var e = this;
            var t, s;
            var a = e.el;
            (t =
                void 0 !== e.params.width && null !== e.params.width
                    ? e.params.width
                    : a.clientWidth),
                (s =
                    void 0 !== e.params.height && null !== e.params.height
                        ? e.params.height
                        : a.clientHeight),
                (0 === t && e.isHorizontal()) ||
                    (0 === s && e.isVertical()) ||
                    ((t =
                        t -
                            parseInt(v(a, "padding-left") || 0, 10) -
                            parseInt(v(a, "padding-right") || 0, 10)),
                        (s =
                            s -
                                parseInt(v(a, "padding-top") || 0, 10) -
                                parseInt(v(a, "padding-bottom") || 0, 10)),
                        Number.isNaN(t) && (t = 0),
                        Number.isNaN(s) && (s = 0),
                        Object.assign(e, {
                            width: t,
                            height: s,
                            size: e.isHorizontal() ? t : s,
                        }));
        },
        updateSlides: function () {
            var e = this;
            function t(t) {
                return e.isHorizontal()
                    ? t
                    : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom",
                    }[t];
            }
            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0);
            }
            var a = e.params, i = e.wrapperEl, r = e.slidesEl, n = e.size, l = e.rtlTranslate, o = e.wrongRTL, d = e.virtual && a.virtual.enabled, c = d ? e.virtual.slides.length : e.slides.length, u = h(r, ".".concat(e.params.slideClass, ", swiper-slide")), m = d ? e.virtual.slides.length : u.length;
            var f = [];
            var g = [], w = [];
            var b = a.slidesOffsetBefore;
            "function" == typeof b && (b = a.slidesOffsetBefore.call(e));
            var y = a.slidesOffsetAfter;
            "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
            var x = e.snapGrid.length, S = e.slidesGrid.length;
            var T = a.spaceBetween, M = -b, C = 0, P = 0;
            if (void 0 === n)
                return;
            "string" == typeof T && T.indexOf("%") >= 0
                ? (T = (parseFloat(T.replace("%", "")) / 100) * n)
                : "string" == typeof T && (T = parseFloat(T)),
                (e.virtualSize = -T),
                u.forEach(function (e) {
                    l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                        (e.style.marginBottom = ""),
                        (e.style.marginTop = "");
                }),
                a.centeredSlides &&
                    a.cssMode &&
                    (p(i, "--swiper-centered-offset-before", ""),
                        p(i, "--swiper-centered-offset-after", ""));
            var L = a.grid && a.grid.rows > 1 && e.grid;
            var z;
            L && e.grid.initSlides(m);
            var A = "auto" === a.slidesPerView &&
                a.breakpoints &&
                Object.keys(a.breakpoints).filter(function (e) { return void 0 !== a.breakpoints[e].slidesPerView; }).length > 0;
            for (var i_2 = 0; i_2 < m; i_2 += 1) {
                var r_3 = void 0;
                if (((z = 0),
                    u[i_2] && (r_3 = u[i_2]),
                    L && e.grid.updateSlide(i_2, r_3, m, t),
                    !u[i_2] || "none" !== v(r_3, "display"))) {
                    if ("auto" === a.slidesPerView) {
                        A && (u[i_2].style[t("width")] = "");
                        var n_1 = getComputedStyle(r_3), l_1 = r_3.style.transform, o_1 = r_3.style.webkitTransform;
                        if ((l_1 && (r_3.style.transform = "none"),
                            o_1 && (r_3.style.webkitTransform = "none"),
                            a.roundLengths))
                            z = e.isHorizontal() ? E(r_3, "width", !0) : E(r_3, "height", !0);
                        else {
                            var e_2 = s(n_1, "width"), t_4 = s(n_1, "padding-left"), a_7 = s(n_1, "padding-right"), i_3 = s(n_1, "margin-left"), l_2 = s(n_1, "margin-right"), o_2 = n_1.getPropertyValue("box-sizing");
                            if (o_2 && "border-box" === o_2)
                                z = e_2 + i_3 + l_2;
                            else {
                                var s_4 = r_3.clientWidth, n_2 = r_3.offsetWidth;
                                z = e_2 + t_4 + a_7 + i_3 + l_2 + (n_2 - s_4);
                            }
                        }
                        l_1 && (r_3.style.transform = l_1),
                            o_1 && (r_3.style.webkitTransform = o_1),
                            a.roundLengths && (z = Math.floor(z));
                    }
                    else
                        (z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView),
                            a.roundLengths && (z = Math.floor(z)),
                            u[i_2] && (u[i_2].style[t("width")] = "".concat(z, "px"));
                    u[i_2] && (u[i_2].swiperSlideSize = z),
                        w.push(z),
                        a.centeredSlides
                            ? ((M = M + z / 2 + C / 2 + T),
                                0 === C && 0 !== i_2 && (M = M - n / 2 - T),
                                0 === i_2 && (M = M - n / 2 - T),
                                Math.abs(M) < 0.001 && (M = 0),
                                a.roundLengths && (M = Math.floor(M)),
                                P % a.slidesPerGroup == 0 && f.push(M),
                                g.push(M))
                            : (a.roundLengths && (M = Math.floor(M)),
                                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                                    e.params.slidesPerGroup ==
                                    0 && f.push(M),
                                g.push(M),
                                (M = M + z + T)),
                        (e.virtualSize += z + T),
                        (C = z),
                        (P += 1);
                }
            }
            if (((e.virtualSize = Math.max(e.virtualSize, n) + y),
                l &&
                    o &&
                    ("slide" === a.effect || "coverflow" === a.effect) &&
                    (i.style.width = "".concat(e.virtualSize + T, "px")),
                a.setWrapperSize && (i.style[t("width")] = "".concat(e.virtualSize + T, "px")),
                L && e.grid.updateWrapperSize(z, f, t),
                !a.centeredSlides)) {
                var t_5 = [];
                for (var s_5 = 0; s_5 < f.length; s_5 += 1) {
                    var i_4 = f[s_5];
                    a.roundLengths && (i_4 = Math.floor(i_4)),
                        f[s_5] <= e.virtualSize - n && t_5.push(i_4);
                }
                (f = t_5),
                    Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
                        f.push(e.virtualSize - n);
            }
            if (d && a.loop) {
                var t_6 = w[0] + T;
                if (a.slidesPerGroup > 1) {
                    var s_6 = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) /
                        a.slidesPerGroup), i_5 = t_6 * a.slidesPerGroup;
                    for (var e_3 = 0; e_3 < s_6; e_3 += 1)
                        f.push(f[f.length - 1] + i_5);
                }
                for (var s_7 = 0; s_7 < e.virtual.slidesBefore + e.virtual.slidesAfter; s_7 += 1)
                    1 === a.slidesPerGroup && f.push(f[f.length - 1] + t_6),
                        g.push(g[g.length - 1] + t_6),
                        (e.virtualSize += t_6);
            }
            if ((0 === f.length && (f = [0]), 0 !== T)) {
                var s_8 = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                u.filter(function (e, t) { return !(a.cssMode && !a.loop) || t !== u.length - 1; }).forEach(function (e) {
                    e.style[s_8] = "".concat(T, "px");
                });
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                var e_4 = 0;
                w.forEach(function (t) {
                    e_4 += t + (T || 0);
                }),
                    (e_4 -= T);
                var t_7 = e_4 - n;
                f = f.map(function (e) { return (e <= 0 ? -b : e > t_7 ? t_7 + y : e); });
            }
            if (a.centerInsufficientSlides) {
                var e_5 = 0;
                if ((w.forEach(function (t) {
                    e_5 += t + (T || 0);
                }),
                    (e_5 -= T),
                    e_5 < n)) {
                    var t_8 = (n - e_5) / 2;
                    f.forEach(function (e, s) {
                        f[s] = e - t_8;
                    }),
                        g.forEach(function (e, s) {
                            g[s] = e + t_8;
                        });
                }
            }
            if ((Object.assign(e, {
                slides: u,
                snapGrid: f,
                slidesGrid: g,
                slidesSizesGrid: w,
            }),
                a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)) {
                p(i, "--swiper-centered-offset-before", -f[0] + "px"),
                    p(i, "--swiper-centered-offset-after", e.size / 2 - w[w.length - 1] / 2 + "px");
                var t_9 = -e.snapGrid[0], s_9 = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map(function (e) { return e + t_9; })),
                    (e.slidesGrid = e.slidesGrid.map(function (e) { return e + s_9; }));
            }
            if ((m !== c && e.emit("slidesLengthChange"),
                f.length !== x &&
                    (e.params.watchOverflow && e.checkOverflow(),
                        e.emit("snapGridLengthChange")),
                g.length !== S && e.emit("slidesGridLengthChange"),
                a.watchSlidesProgress && e.updateSlidesOffset(),
                !(d || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))) {
                var t_10 = "".concat(a.containerModifierClass, "backface-hidden"), s_10 = e.el.classList.contains(t_10);
                m <= a.maxBackfaceHiddenSlides
                    ? s_10 || e.el.classList.add(t_10)
                    : s_10 && e.el.classList.remove(t_10);
            }
        },
        updateAutoHeight: function (e) {
            var t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            var i, r = 0;
            "number" == typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed);
            var n = function (e) { return (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]); };
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach(function (e) {
                        s.push(e);
                    });
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        var e_6 = t.activeIndex + i;
                        if (e_6 > t.slides.length && !a)
                            break;
                        s.push(n(e_6));
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    var e_7 = s[i].offsetHeight;
                    r = e_7 > r ? e_7 : r;
                }
            (r || 0 === r) && (t.wrapperEl.style.height = "".concat(r, "px"));
        },
        updateSlidesOffset: function () {
            var e = this, t = e.slides, s = e.isElement
                ? e.isHorizontal()
                    ? e.wrapperEl.offsetLeft
                    : e.wrapperEl.offsetTop
                : 0;
            for (var a_8 = 0; a_8 < t.length; a_8 += 1)
                t[a_8].swiperSlideOffset =
                    (e.isHorizontal() ? t[a_8].offsetLeft : t[a_8].offsetTop) -
                        s -
                        e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this, s = t.params, a = t.slides, i = t.rtlTranslate, r = t.snapGrid;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            var n = -e;
            i && (n = e),
                a.forEach(function (e) {
                    e.classList.remove(s.slideVisibleClass);
                }),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
            var l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
                : "string" == typeof l && (l = parseFloat(l));
            for (var e_8 = 0; e_8 < a.length; e_8 += 1) {
                var o_3 = a[e_8];
                var d_1 = o_3.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d_1 -= a[0].swiperSlideOffset);
                var c_1 = (n + (s.centeredSlides ? t.minTranslate() : 0) - d_1) /
                    (o_3.swiperSlideSize + l), p_1 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d_1) /
                    (o_3.swiperSlideSize + l), u_1 = -(n - d_1), m_1 = u_1 + t.slidesSizesGrid[e_8];
                ((u_1 >= 0 && u_1 < t.size - 1) ||
                    (m_1 > 1 && m_1 <= t.size) ||
                    (u_1 <= 0 && m_1 >= t.size)) &&
                    (t.visibleSlides.push(o_3),
                        t.visibleSlidesIndexes.push(e_8),
                        a[e_8].classList.add(s.slideVisibleClass)),
                    (o_3.progress = i ? -c_1 : c_1),
                    (o_3.originalProgress = i ? -p_1 : p_1);
            }
        },
        updateProgress: function (e) {
            var t = this;
            if (void 0 === e) {
                var s_11 = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * s_11) || 0;
            }
            var s = t.params, a = t.maxTranslate() - t.minTranslate();
            var i = t.progress, r = t.isBeginning, n = t.isEnd, l = t.progressLoop;
            var o = r, d = n;
            if (0 === a)
                (i = 0), (r = !0), (n = !0);
            else {
                i = (e - t.minTranslate()) / a;
                var s_12 = Math.abs(e - t.minTranslate()) < 1, l_3 = Math.abs(e - t.maxTranslate()) < 1;
                (r = s_12 || i <= 0), (n = l_3 || i >= 1), s_12 && (i = 0), l_3 && (i = 1);
            }
            if (s.loop) {
                var s_13 = t.getSlideIndexByData(0), a_9 = t.getSlideIndexByData(t.slides.length - 1), i_6 = t.slidesGrid[s_13], r_4 = t.slidesGrid[a_9], n_3 = t.slidesGrid[t.slidesGrid.length - 1], o_4 = Math.abs(e);
                (l = o_4 >= i_6 ? (o_4 - i_6) / n_3 : (o_4 + n_3 - r_4) / n_3), l > 1 && (l -= 1);
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n,
            }),
                (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
                    t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                n && !d && t.emit("reachEnd toEdge"),
                ((o && !r) || (d && !n)) && t.emit("fromEdge"),
                t.emit("progress", i);
        },
        updateSlidesClasses: function () {
            var e = this, t = e.slides, s = e.params, a = e.slidesEl, i = e.activeIndex, r = e.virtual && s.virtual.enabled, n = function (e) { return h(a, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0]; };
            var l;
            if ((t.forEach(function (e) {
                e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
            }),
                r))
                if (s.loop) {
                    var t_11 = i - e.virtual.slidesBefore;
                    t_11 < 0 && (t_11 = e.virtual.slides.length + t_11),
                        t_11 >= e.virtual.slides.length && (t_11 -= e.virtual.slides.length),
                        (l = n("[data-swiper-slide-index=\"".concat(t_11, "\"]")));
                }
                else
                    l = n("[data-swiper-slide-index=\"".concat(i, "\"]"));
            else
                l = t[i];
            if (l) {
                l.classList.add(s.slideActiveClass);
                var e_9 = (function (e, t) {
                    var s = [];
                    for (; e.nextElementSibling;) {
                        var a_10 = e.nextElementSibling;
                        t ? a_10.matches(t) && s.push(a_10) : s.push(a_10), (e = a_10);
                    }
                    return s;
                })(l, ".".concat(s.slideClass, ", swiper-slide"))[0];
                s.loop && !e_9 && (e_9 = t[0]), e_9 && e_9.classList.add(s.slideNextClass);
                var a_11 = (function (e, t) {
                    var s = [];
                    for (; e.previousElementSibling;) {
                        var a_12 = e.previousElementSibling;
                        t ? a_12.matches(t) && s.push(a_12) : s.push(a_12), (e = a_12);
                    }
                    return s;
                })(l, ".".concat(s.slideClass, ", swiper-slide"))[0];
                s.loop && 0 === !a_11 && (a_11 = t[t.length - 1]),
                    a_11 && a_11.classList.add(s.slidePrevClass);
            }
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
            var t = this, s = t.rtlTranslate ? t.translate : -t.translate, a = t.snapGrid, i = t.params, r = t.activeIndex, n = t.realIndex, l = t.snapIndex;
            var o, d = e;
            var c = function (e) {
                var s = e - t.virtual.slidesBefore;
                return (s < 0 && (s = t.virtual.slides.length + s),
                    s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                    s);
            };
            if ((void 0 === d &&
                (d = (function (e) {
                    var t = e.slidesGrid, s = e.params, a = e.rtlTranslate ? e.translate : -e.translate;
                    var i;
                    for (var e_10 = 0; e_10 < t.length; e_10 += 1)
                        void 0 !== t[e_10 + 1]
                            ? a >= t[e_10] && a < t[e_10 + 1] - (t[e_10 + 1] - t[e_10]) / 2
                                ? (i = e_10)
                                : a >= t[e_10] && a < t[e_10 + 1] && (i = e_10 + 1)
                            : a >= t[e_10] && (i = e_10);
                    return (s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i);
                })(t)),
                a.indexOf(s) >= 0))
                o = a.indexOf(s);
            else {
                var e_11 = Math.min(i.slidesPerGroupSkip, d);
                o = e_11 + Math.floor((d - e_11) / i.slidesPerGroup);
            }
            if ((o >= a.length && (o = a.length - 1), d === r))
                return (o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
                    void (t.params.loop &&
                        t.virtual &&
                        t.params.virtual.enabled &&
                        (t.realIndex = c(d))));
            var p;
            (p =
                t.virtual && i.virtual.enabled && i.loop
                    ? c(d)
                    : t.slides[d]
                        ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10)
                        : d),
                Object.assign(t, {
                    previousSnapIndex: l,
                    snapIndex: o,
                    previousRealIndex: n,
                    realIndex: p,
                    previousIndex: r,
                    activeIndex: d,
                }),
                t.initialized && $(t),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) &&
                    (n !== p && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
            var s = this, a = s.params;
            var i = e.closest(".".concat(a.slideClass, ", swiper-slide"));
            !i &&
                s.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                __spreadArray([], t.slice(t.indexOf(e) + 1, t.length), true).forEach(function (e) {
                    !i &&
                        e.matches &&
                        e.matches(".".concat(a.slideClass, ", swiper-slide")) &&
                        (i = e);
                });
            var r, n = !1;
            if (i)
                for (var e_12 = 0; e_12 < s.slides.length; e_12 += 1)
                    if (s.slides[e_12] === i) {
                        (n = !0), (r = e_12);
                        break;
                    }
            if (!i || !n)
                return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
            (s.clickedSlide = i),
                s.virtual && s.params.virtual.enabled
                    ? (s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10))
                    : (s.clickedIndex = r),
                a.slideToClickedSlide &&
                    void 0 !== s.clickedIndex &&
                    s.clickedIndex !== s.activeIndex &&
                    s.slideToClickedSlide();
        },
    };
    var k = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var _a = this, t = _a.params, s = _a.rtlTranslate, a = _a.translate, i = _a.wrapperEl;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            var r = o(i, e);
            return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
            var s = this, a = s.rtlTranslate, i = s.params, r = s.wrapperEl, n = s.progress;
            var l, o = 0, d = 0;
            s.isHorizontal() ? (o = a ? -e : e) : (d = e),
                i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? o : d),
                i.cssMode
                    ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
                        ? -o
                        : -d)
                    : i.virtualTranslate ||
                        (s.isHorizontal()
                            ? (o -= s.cssOverflowAdjustment())
                            : (d -= s.cssOverflowAdjustment()),
                            (r.style.transform = "translate3d(".concat(o, "px, ").concat(d, "px, 0px)")));
            var c = s.maxTranslate() - s.minTranslate();
            (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
                l !== n && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, a, i) {
            var _a;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === a && (a = !0);
            var r = this, n = r.params, l = r.wrapperEl;
            if (r.animating && n.preventInteractionOnTransition)
                return !1;
            var o = r.minTranslate(), d = r.maxTranslate();
            var c;
            if (((c = a && e > o ? o : a && e < d ? d : e),
                r.updateProgress(c),
                n.cssMode)) {
                var e_13 = r.isHorizontal();
                if (0 === t)
                    l[e_13 ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return (u({ swiper: r, targetPosition: -c, side: e_13 ? "left" : "top" }), !0);
                    l.scrollTo((_a = {}, _a[e_13 ? "left" : "top"] = -c, _a.behavior = "smooth", _a));
                }
                return !0;
            }
            return (0 === t
                ? (r.setTransition(0),
                    r.setTranslate(c),
                    s &&
                        (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
                : (r.setTransition(t),
                    r.setTranslate(c),
                    s &&
                        (r.emit("beforeTransitionStart", t, i),
                            r.emit("transitionStart")),
                    r.animating ||
                        ((r.animating = !0),
                            r.onTranslateToWrapperTransitionEnd ||
                                (r.onTranslateToWrapperTransitionEnd = function (e) {
                                    r &&
                                        !r.destroyed &&
                                        e.target === this &&
                                        (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                            (r.onTranslateToWrapperTransitionEnd = null),
                                            delete r.onTranslateToWrapperTransitionEnd,
                                            s && r.emit("transitionEnd"));
                                }),
                            r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
                !0);
        },
    };
    function O(e) {
        var t = e.swiper, s = e.runCallbacks, a = e.direction, i = e.step;
        var r = t.activeIndex, n = t.previousIndex;
        var l = a;
        if ((l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
            t.emit("transition".concat(i)),
            s && r !== n)) {
            if ("reset" === l)
                return void t.emit("slideResetTransition".concat(i));
            t.emit("slideChangeTransition".concat(i)),
                "next" === l
                    ? t.emit("slideNextTransition".concat(i))
                    : t.emit("slidePrevTransition".concat(i));
        }
    }
    var D = {
        slideTo: function (e, t, s, a, i) {
            var _a;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof e && (e = parseInt(e, 10));
            var r = this;
            var n = e;
            n < 0 && (n = 0);
            var l = r.params, o = r.snapGrid, d = r.slidesGrid, c = r.previousIndex, p = r.activeIndex, m = r.rtlTranslate, h = r.wrapperEl, f = r.enabled;
            if ((r.animating && l.preventInteractionOnTransition) || (!f && !a && !i))
                return !1;
            var g = Math.min(r.params.slidesPerGroupSkip, n);
            var v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            var w = -o[v];
            if (l.normalizeSlideIndex)
                for (var e_14 = 0; e_14 < d.length; e_14 += 1) {
                    var t_12 = -Math.floor(100 * w), s_14 = Math.floor(100 * d[e_14]), a_13 = Math.floor(100 * d[e_14 + 1]);
                    void 0 !== d[e_14 + 1]
                        ? t_12 >= s_14 && t_12 < a_13 - (a_13 - s_14) / 2
                            ? (n = e_14)
                            : t_12 >= s_14 && t_12 < a_13 && (n = e_14 + 1)
                        : t_12 >= s_14 && (n = e_14);
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext &&
                    (m
                        ? w > r.translate && w > r.minTranslate()
                        : w < r.translate && w < r.minTranslate()))
                    return !1;
                if (!r.allowSlidePrev &&
                    w > r.translate &&
                    w > r.maxTranslate() &&
                    (p || 0) !== n)
                    return !1;
            }
            var b;
            if ((n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
                r.updateProgress(w),
                (b = n > p ? "next" : n < p ? "prev" : "reset"),
                (m && -w === r.translate) || (!m && w === r.translate)))
                return (r.updateActiveIndex(n),
                    l.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== l.effect && r.setTranslate(w),
                    "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
                    !1);
            if (l.cssMode) {
                var e_15 = r.isHorizontal(), s_15 = m ? w : -w;
                if (0 === t) {
                    var t_13 = r.virtual && r.params.virtual.enabled;
                    t_13 &&
                        ((r.wrapperEl.style.scrollSnapType = "none"),
                            (r._immediateVirtual = !0)),
                        t_13 && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                            ? ((r._cssModeVirtualInitialSet = !0),
                                requestAnimationFrame(function () {
                                    h[e_15 ? "scrollLeft" : "scrollTop"] = s_15;
                                }))
                            : (h[e_15 ? "scrollLeft" : "scrollTop"] = s_15),
                        t_13 &&
                            requestAnimationFrame(function () {
                                (r.wrapperEl.style.scrollSnapType = ""),
                                    (r._immediateVirtual = !1);
                            });
                }
                else {
                    if (!r.support.smoothScroll)
                        return (u({ swiper: r, targetPosition: s_15, side: e_15 ? "left" : "top" }), !0);
                    h.scrollTo((_a = {}, _a[e_15 ? "left" : "top"] = s_15, _a.behavior = "smooth", _a));
                }
                return !0;
            }
            return (r.setTransition(t),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                0 === t
                    ? r.transitionEnd(s, b)
                    : r.animating ||
                        ((r.animating = !0),
                            r.onSlideToWrapperTransitionEnd ||
                                (r.onSlideToWrapperTransitionEnd = function (e) {
                                    r &&
                                        !r.destroyed &&
                                        e.target === this &&
                                        (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                            (r.onSlideToWrapperTransitionEnd = null),
                                            delete r.onSlideToWrapperTransitionEnd,
                                            r.transitionEnd(s, b));
                                }),
                            r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
                !0);
        },
        slideToLoop: function (e, t, s, a) {
            if ((void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof e)) {
                e = parseInt(e, 10);
            }
            var i = this;
            var r = e;
            return (i.params.loop &&
                (i.virtual && i.params.virtual.enabled
                    ? (r += i.virtual.slidesBefore)
                    : (r = i.getSlideIndexByData(r))),
                i.slideTo(r, t, s, a));
        },
        slideNext: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this, i = a.enabled, r = a.params, n = a.animating;
            if (!i)
                return a;
            var l = r.slidesPerGroup;
            "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            var o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding)
                    return !1;
                if ((a.loopFix({ direction: "next" }),
                    (a._clientLeft = a.wrapperEl.clientLeft),
                    a.activeIndex === a.slides.length - 1 && r.cssMode))
                    return (requestAnimationFrame(function () {
                        a.slideTo(a.activeIndex + o, e, t, s);
                    }),
                        !0);
            }
            return r.rewind && a.isEnd
                ? a.slideTo(0, e, t, s)
                : a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this, i = a.params, r = a.snapGrid, n = a.slidesGrid, l = a.rtlTranslate, o = a.enabled, d = a.animating;
            if (!o)
                return a;
            var c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding)
                    return !1;
                a.loopFix({ direction: "prev" }),
                    (a._clientLeft = a.wrapperEl.clientLeft);
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var u = p(l ? a.translate : -a.translate), m = r.map(function (e) { return p(e); });
            var h = r[m.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
                var e_16;
                r.forEach(function (t, s) {
                    u >= t && (e_16 = s);
                }),
                    void 0 !== e_16 && (h = r[e_16 > 0 ? e_16 - 1 : e_16]);
            }
            var f = 0;
            if ((void 0 !== h &&
                ((f = n.indexOf(h)),
                    f < 0 && (f = a.activeIndex - 1),
                    "auto" === i.slidesPerView &&
                        1 === i.slidesPerGroup &&
                        i.slidesPerGroupAuto &&
                        ((f = f - a.slidesPerViewDynamic("previous", !0) + 1),
                            (f = Math.max(f, 0)))),
                i.rewind && a.isBeginning)) {
                var i_7 = a.params.virtual && a.params.virtual.enabled && a.virtual
                    ? a.virtual.slides.length - 1
                    : a.slides.length - 1;
                return a.slideTo(i_7, e, t, s);
            }
            return i.loop && 0 === a.activeIndex && i.cssMode
                ? (requestAnimationFrame(function () {
                    a.slideTo(f, e, t, s);
                }),
                    !0)
                : a.slideTo(f, e, t, s);
        },
        slideReset: function (e, t, s) {
            return (void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, s));
        },
        slideToClosest: function (e, t, s, a) {
            void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === a && (a = 0.5);
            var i = this;
            var r = i.activeIndex;
            var n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                var e_17 = i.snapGrid[l];
                o - e_17 > (i.snapGrid[l + 1] - e_17) * a && (r += i.params.slidesPerGroup);
            }
            else {
                var e_18 = i.snapGrid[l - 1];
                o - e_18 <= (i.snapGrid[l] - e_18) * a && (r -= i.params.slidesPerGroup);
            }
            return ((r = Math.max(r, 0)),
                (r = Math.min(r, i.slidesGrid.length - 1)),
                i.slideTo(r, e, t, s));
        },
        slideToClickedSlide: function () {
            var e = this, t = e.params, s = e.slidesEl, a = "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
            var i, r = e.clickedIndex;
            var l = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
            if (t.loop) {
                if (e.animating)
                    return;
                (i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
                    t.centeredSlides
                        ? r < e.loopedSlides - a / 2 ||
                            r > e.slides.length - e.loopedSlides + a / 2
                            ? (e.loopFix(),
                                (r = e.getSlideIndex(h(s, "".concat(l, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0])),
                                n(function () {
                                    e.slideTo(r);
                                }))
                            : e.slideTo(r)
                        : r > e.slides.length - a
                            ? (e.loopFix(),
                                (r = e.getSlideIndex(h(s, "".concat(l, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0])),
                                n(function () {
                                    e.slideTo(r);
                                }))
                            : e.slideTo(r);
            }
            else
                e.slideTo(r);
        },
    };
    var G = {
        loopCreate: function (e) {
            var t = this, s = t.params, a = t.slidesEl;
            if (!s.loop || (t.virtual && t.params.virtual.enabled))
                return;
            h(a, ".".concat(s.slideClass, ", swiper-slide")).forEach(function (e, t) {
                e.setAttribute("data-swiper-slide-index", t);
            }),
                t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next",
                });
        },
        loopFix: function (e) {
            var _a = void 0 === e ? {} : e, t = _a.slideRealIndex, _b = _a.slideTo, s = _b === void 0 ? !0 : _b, a = _a.direction, i = _a.setTranslate, r = _a.activeSlideIndex, n = _a.byController, l = _a.byMousewheel;
            var o = this;
            if (!o.params.loop)
                return;
            o.emit("beforeLoopFix");
            var d = o.slides, c = o.allowSlidePrev, p = o.allowSlideNext, u = o.slidesEl, m = o.params;
            if (((o.allowSlidePrev = !0),
                (o.allowSlideNext = !0),
                o.virtual && m.virtual.enabled))
                return (s &&
                    (m.centeredSlides || 0 !== o.snapIndex
                        ? m.centeredSlides && o.snapIndex < m.slidesPerView
                            ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                            : o.snapIndex === o.snapGrid.length - 1 &&
                                o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                        : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                    (o.allowSlidePrev = c),
                    (o.allowSlideNext = p),
                    void o.emit("loopFix"));
            var h = "auto" === m.slidesPerView
                ? o.slidesPerViewDynamic()
                : Math.ceil(parseFloat(m.slidesPerView, 10));
            var f = m.loopedSlides || h;
            f % m.slidesPerGroup != 0 &&
                (f += m.slidesPerGroup - (f % m.slidesPerGroup)),
                (o.loopedSlides = f);
            var g = [], v = [];
            var w = o.activeIndex;
            void 0 === r
                ? (r = o.getSlideIndex(o.slides.filter(function (e) { return e.classList.contains(m.slideActiveClass); })[0]))
                : (w = r);
            var b = "next" === a || !a, y = "prev" === a || !a;
            var E = 0, x = 0;
            if (r < f) {
                E = Math.max(f - r, m.slidesPerGroup);
                for (var e_19 = 0; e_19 < f - r; e_19 += 1) {
                    var t_14 = e_19 - Math.floor(e_19 / d.length) * d.length;
                    g.push(d.length - t_14 - 1);
                }
            }
            else if (r > o.slides.length - 2 * f) {
                x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
                for (var e_20 = 0; e_20 < x; e_20 += 1) {
                    var t_15 = e_20 - Math.floor(e_20 / d.length) * d.length;
                    v.push(t_15);
                }
            }
            if ((y &&
                g.forEach(function (e) {
                    (o.slides[e].swiperLoopMoveDOM = !0),
                        u.prepend(o.slides[e]),
                        (o.slides[e].swiperLoopMoveDOM = !1);
                }),
                b &&
                    v.forEach(function (e) {
                        (o.slides[e].swiperLoopMoveDOM = !0),
                            u.append(o.slides[e]),
                            (o.slides[e].swiperLoopMoveDOM = !1);
                    }),
                o.recalcSlides(),
                "auto" === m.slidesPerView && o.updateSlides(),
                m.watchSlidesProgress && o.updateSlidesOffset(),
                s))
                if (g.length > 0 && y)
                    if (void 0 === t) {
                        var e_21 = o.slidesGrid[w], t_16 = o.slidesGrid[w + E] - e_21;
                        l
                            ? o.setTranslate(o.translate - t_16)
                            : (o.slideTo(w + E, 0, !1, !0),
                                i &&
                                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t_16),
                                        (o.touchEventsData.currentTranslate = o.translate)));
                    }
                    else
                        i &&
                            (o.slideToLoop(t, 0, !1, !0),
                                (o.touchEventsData.currentTranslate = o.translate));
                else if (v.length > 0 && b)
                    if (void 0 === t) {
                        var e_22 = o.slidesGrid[w], t_17 = o.slidesGrid[w - x] - e_22;
                        l
                            ? o.setTranslate(o.translate - t_17)
                            : (o.slideTo(w - x, 0, !1, !0),
                                i &&
                                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t_17),
                                        (o.touchEventsData.currentTranslate = o.translate)));
                    }
                    else
                        o.slideToLoop(t, 0, !1, !0);
            if (((o.allowSlidePrev = c),
                (o.allowSlideNext = p),
                o.controller && o.controller.control && !n)) {
                var e_23 = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0,
                };
                Array.isArray(o.controller.control)
                    ? o.controller.control.forEach(function (t) {
                        !t.destroyed &&
                            t.params.loop &&
                            t.loopFix(__assign(__assign({}, e_23), { slideTo: t.params.slidesPerView === m.slidesPerView && s }));
                    })
                    : o.controller.control instanceof o.constructor &&
                        o.controller.control.params.loop &&
                        o.controller.control.loopFix(__assign(__assign({}, e_23), { slideTo: o.controller.control.params.slidesPerView === m.slidesPerView &&
                                s }));
            }
            o.emit("loopFix");
        },
        loopDestroy: function () {
            var e = this, t = e.params, s = e.slidesEl;
            if (!t.loop || (e.virtual && e.params.virtual.enabled))
                return;
            e.recalcSlides();
            var a = [];
            e.slides.forEach(function (e) {
                var t = void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex;
                a[t] = e;
            }),
                e.slides.forEach(function (e) {
                    e.removeAttribute("data-swiper-slide-index");
                }),
                a.forEach(function (e) {
                    s.append(e);
                }),
                e.recalcSlides(),
                e.slideTo(e.realIndex, 0);
        },
    };
    function H(e) {
        var t = this, s = a(), i = r(), n = t.touchEventsData;
        n.evCache.push(e);
        var o = t.params, d = t.touches, c = t.enabled;
        if (!c)
            return;
        if (!o.simulateTouch && "mouse" === e.pointerType)
            return;
        if (t.animating && o.preventInteractionOnTransition)
            return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        var p = e;
        p.originalEvent && (p = p.originalEvent);
        var u = p.target;
        if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u))
            return;
        if ("which" in p && 3 === p.which)
            return;
        if ("button" in p && p.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        var m = !!o.noSwipingClass && "" !== o.noSwipingClass, h = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && h && (u = h[0]);
        var f = o.noSwipingSelector
            ? o.noSwipingSelector
            : ".".concat(o.noSwipingClass), g = !(!p.target || !p.target.shadowRoot);
        if (o.noSwiping &&
            (g
                ? (function (e, t) {
                    return (void 0 === t && (t = this),
                        (function t(s) {
                            if (!s || s === a() || s === r())
                                return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            var i = s.closest(e);
                            return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                        })(t));
                })(f, u)
                : u.closest(f)))
            return void (t.allowClick = !0);
        if (o.swipeHandler && !u.closest(o.swipeHandler))
            return;
        (d.currentX = p.pageX), (d.currentY = p.pageY);
        var v = d.currentX, w = d.currentY, b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection, y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (b && (v <= y || v >= i.innerWidth - y)) {
            if ("prevent" !== b)
                return;
            e.preventDefault();
        }
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
        }),
            (d.startX = v),
            (d.startY = w),
            (n.touchStartTime = l()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            o.threshold > 0 && (n.allowThresholdMove = !1);
        var E = !0;
        u.matches(n.focusableElements) &&
            ((E = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
            s.activeElement &&
                s.activeElement.matches(n.focusableElements) &&
                s.activeElement !== u &&
                s.activeElement.blur();
        var x = E && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !x) ||
            u.isContentEditable ||
            p.preventDefault(),
            o.freeMode &&
                o.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !o.cssMode &&
                t.freeMode.onTouchStart(),
            t.emit("touchStart", p);
    }
    function X(e) {
        var t = a(), s = this, i = s.touchEventsData, r = s.params, n = s.touches, o = s.rtlTranslate, d = s.enabled;
        if (!d)
            return;
        if (!r.simulateTouch && "mouse" === e.pointerType)
            return;
        var c = e;
        if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
            return void (i.startMoving &&
                i.isScrolling &&
                s.emit("touchMoveOpposite", c));
        var p = i.evCache.findIndex(function (e) { return e.pointerId === c.pointerId; });
        p >= 0 && (i.evCache[p] = c);
        var u = i.evCache.length > 1 ? i.evCache[0] : c, m = u.pageX, h = u.pageY;
        if (c.preventedByNestedSwiper)
            return (n.startX = m), void (n.startY = h);
        if (!s.allowTouchMove)
            return (c.target.matches(i.focusableElements) || (s.allowClick = !1),
                void (i.isTouched &&
                    (Object.assign(n, {
                        startX: m,
                        startY: h,
                        prevX: s.touches.currentX,
                        prevY: s.touches.currentY,
                        currentX: m,
                        currentY: h,
                    }),
                        (i.touchStartTime = l()))));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if ((h < n.startY && s.translate <= s.maxTranslate()) ||
                    (h > n.startY && s.translate >= s.minTranslate()))
                    return (i.isTouched = !1), void (i.isMoved = !1);
            }
            else if ((m < n.startX && s.translate <= s.maxTranslate()) ||
                (m > n.startX && s.translate >= s.minTranslate()))
                return;
        if (t.activeElement &&
            c.target === t.activeElement &&
            c.target.matches(i.focusableElements))
            return (i.isMoved = !0), void (s.allowClick = !1);
        if ((i.allowTouchCallbacks && s.emit("touchMove", c),
            c.targetTouches && c.targetTouches.length > 1))
            return;
        (n.currentX = m), (n.currentY = h);
        var f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            var e_24;
            (s.isHorizontal() && n.currentY === n.startY) ||
                (s.isVertical() && n.currentX === n.startX)
                ? (i.isScrolling = !1)
                : f * f + g * g >= 25 &&
                    ((e_24 = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
                        (i.isScrolling = s.isHorizontal()
                            ? e_24 > r.touchAngle
                            : 90 - e_24 > r.touchAngle));
        }
        if ((i.isScrolling && s.emit("touchMoveOpposite", c),
            void 0 === i.startMoving &&
                ((n.currentX === n.startX && n.currentY === n.startY) ||
                    (i.startMoving = !0)),
            i.isScrolling ||
                (s.zoom &&
                    s.params.zoom &&
                    s.params.zoom.enabled &&
                    i.evCache.length > 1)))
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        (s.allowClick = !1),
            !r.cssMode && c.cancelable && c.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
        var v = s.isHorizontal() ? f : g, w = s.isHorizontal()
            ? n.currentX - n.previousX
            : n.currentY - n.previousY;
        r.oneWayMovement &&
            ((v = Math.abs(v) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
            (n.diff = v),
            (v *= r.touchRatio),
            o && ((v = -v), (w = -w));
        var b = s.touchesDirection;
        (s.swipeDirection = v > 0 ? "prev" : "next"),
            (s.touchesDirection = w > 0 ? "prev" : "next");
        var y = s.params.loop && !r.cssMode, E = ("next" === s.swipeDirection && s.allowSlideNext) ||
            ("prev" === s.swipeDirection && s.allowSlidePrev);
        if (!i.isMoved) {
            if ((y && E && s.loopFix({ direction: s.swipeDirection }),
                (i.startTranslate = s.getTranslate()),
                s.setTransition(0),
                s.animating)) {
                var e_25 = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                });
                s.wrapperEl.dispatchEvent(e_25);
            }
            (i.allowMomentumBounce = !1),
                !r.grabCursor ||
                    (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
                    s.setGrabCursor(!0),
                s.emit("sliderFirstMove", c);
        }
        var x;
        i.isMoved &&
            b !== s.touchesDirection &&
            y &&
            E &&
            Math.abs(v) >= 1 &&
            (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (x = !0)),
            s.emit("sliderMove", c),
            (i.isMoved = !0),
            (i.currentTranslate = v + i.startTranslate);
        var S = !0, T = r.resistanceRatio;
        if ((r.touchReleaseOnEdges && (T = 0),
            v > 0
                ? (y &&
                    E &&
                    !x &&
                    i.currentTranslate >
                        (r.centeredSlides
                            ? s.minTranslate() - s.size / 2
                            : s.minTranslate()) &&
                    s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0,
                    }),
                    i.currentTranslate > s.minTranslate() &&
                        ((S = !1),
                            r.resistance &&
                                (i.currentTranslate =
                                    s.minTranslate() -
                                        1 +
                                        Math.pow((-s.minTranslate() + i.startTranslate + v), T))))
                : v < 0 &&
                    (y &&
                        E &&
                        !x &&
                        i.currentTranslate <
                            (r.centeredSlides
                                ? s.maxTranslate() + s.size / 2
                                : s.maxTranslate()) &&
                        s.loopFix({
                            direction: "next",
                            setTranslate: !0,
                            activeSlideIndex: s.slides.length -
                                ("auto" === r.slidesPerView
                                    ? s.slidesPerViewDynamic()
                                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
                        }),
                        i.currentTranslate < s.maxTranslate() &&
                            ((S = !1),
                                r.resistance &&
                                    (i.currentTranslate =
                                        s.maxTranslate() +
                                            1 -
                                            Math.pow((s.maxTranslate() - i.startTranslate - v), T)))),
            S && (c.preventedByNestedSwiper = !0),
            !s.allowSlideNext &&
                "next" === s.swipeDirection &&
                i.currentTranslate < i.startTranslate &&
                (i.currentTranslate = i.startTranslate),
            !s.allowSlidePrev &&
                "prev" === s.swipeDirection &&
                i.currentTranslate > i.startTranslate &&
                (i.currentTranslate = i.startTranslate),
            s.allowSlidePrev ||
                s.allowSlideNext ||
                (i.currentTranslate = i.startTranslate),
            r.threshold > 0)) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return ((i.allowThresholdMove = !0),
                    (n.startX = n.currentX),
                    (n.startY = n.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (n.diff = s.isHorizontal()
                        ? n.currentX - n.startX
                        : n.currentY - n.startY));
        }
        r.followFinger &&
            !r.cssMode &&
            (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
                r.watchSlidesProgress) &&
                (s.updateActiveIndex(), s.updateSlidesClasses()),
                r.freeMode &&
                    r.freeMode.enabled &&
                    s.freeMode &&
                    s.freeMode.onTouchMove(),
                s.updateProgress(i.currentTranslate),
                s.setTranslate(i.currentTranslate));
    }
    function Y(e) {
        var t = this, s = t.touchEventsData, a = s.evCache.findIndex(function (t) { return t.pointerId === e.pointerId; });
        if ((a >= 0 && s.evCache.splice(a, 1),
            ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type))) {
            if (!(["pointercancel", "contextmenu"].includes(e.type) &&
                (t.browser.isSafari || t.browser.isWebView)))
                return;
        }
        var i = t.params, r = t.touches, o = t.rtlTranslate, d = t.slidesGrid, c = t.enabled;
        if (!c)
            return;
        if (!i.simulateTouch && "mouse" === e.pointerType)
            return;
        var p = e;
        if ((p.originalEvent && (p = p.originalEvent),
            s.allowTouchCallbacks && t.emit("touchEnd", p),
            (s.allowTouchCallbacks = !1),
            !s.isTouched))
            return (s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                (s.isMoved = !1),
                void (s.startMoving = !1));
        i.grabCursor &&
            s.isMoved &&
            s.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        var u = l(), m = u - s.touchStartTime;
        if (t.allowClick) {
            var e_26 = p.path || (p.composedPath && p.composedPath());
            t.updateClickedSlide((e_26 && e_26[0]) || p.target, e_26),
                t.emit("tap click", p),
                m < 300 &&
                    u - s.lastClickTime < 300 &&
                    t.emit("doubleTap doubleClick", p);
        }
        if (((s.lastClickTime = l()),
            n(function () {
                t.destroyed || (t.allowClick = !0);
            }),
            !s.isTouched ||
                !s.isMoved ||
                !t.swipeDirection ||
                0 === r.diff ||
                s.currentTranslate === s.startTranslate))
            return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
        var h;
        if (((s.isTouched = !1),
            (s.isMoved = !1),
            (s.startMoving = !1),
            (h = i.followFinger
                ? o
                    ? t.translate
                    : -t.translate
                : -s.currentTranslate),
            i.cssMode))
            return;
        if (i.freeMode && i.freeMode.enabled)
            return void t.freeMode.onTouchEnd({ currentPos: h });
        var f = 0, g = t.slidesSizesGrid[0];
        for (var e_27 = 0; e_27 < d.length; e_27 += e_27 < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            var t_18 = e_27 < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== d[e_27 + t_18]
                ? h >= d[e_27] && h < d[e_27 + t_18] && ((f = e_27), (g = d[e_27 + t_18] - d[e_27]))
                : h >= d[e_27] && ((f = e_27), (g = d[d.length - 1] - d[d.length - 2]));
        }
        var v = null, w = null;
        i.rewind &&
            (t.isBeginning
                ? (w =
                    i.virtual && i.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                : t.isEnd && (v = 0));
        var b = (h - d[f]) / g, y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (m > i.longSwipesMs) {
            if (!i.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
                (b >= i.longSwipesRatio
                    ? t.slideTo(i.rewind && t.isEnd ? v : f + y)
                    : t.slideTo(f)),
                "prev" === t.swipeDirection &&
                    (b > 1 - i.longSwipesRatio
                        ? t.slideTo(f + y)
                        : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio
                            ? t.slideTo(w)
                            : t.slideTo(f));
        }
        else {
            if (!i.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation &&
                (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
                ? p.target === t.navigation.nextEl
                    ? t.slideTo(f + y)
                    : t.slideTo(f)
                : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
                    "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
        }
    }
    function N() {
        var e = this, t = e.params, s = e.el;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        var a = e.allowSlideNext, i = e.allowSlidePrev, r = e.snapGrid, n = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
        var l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
            !e.isEnd ||
            e.isBeginning ||
            e.params.centeredSlides ||
            l
            ? e.params.loop && !n
                ? e.slideToLoop(e.realIndex, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                (clearTimeout(e.autoplay.resizeTimeout),
                    (e.autoplay.resizeTimeout = setTimeout(function () {
                        e.autoplay &&
                            e.autoplay.running &&
                            e.autoplay.paused &&
                            e.autoplay.resume();
                    }, 500))),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = a),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function B(e) {
        var t = this;
        t.enabled &&
            (t.allowClick ||
                (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                        t.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function R() {
        var e = this, t = e.wrapperEl, s = e.rtlTranslate, a = e.enabled;
        if (!a)
            return;
        var i;
        (e.previousTranslate = e.translate),
            e.isHorizontal()
                ? (e.translate = -t.scrollLeft)
                : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
            i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
    }
    function q(e) {
        var t = this;
        z(t, e.target),
            t.params.cssMode ||
                ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
                t.update();
    }
    var V = !1;
    function F() { }
    var _ = function (e, t) {
        var s = a(), i = e.params, r = e.el, n = e.wrapperEl, l = e.device, o = !!i.nested, d = "on" === t ? "addEventListener" : "removeEventListener", c = t;
        r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (i.preventClicks || i.preventClicksPropagation) &&
                r[d]("click", e.onClick, !0),
            i.cssMode && n[d]("scroll", e.onScroll),
            i.updateOnWindowResize
                ? e[c](l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate", N, !0)
                : e[c]("observerUpdate", N, !0),
            r[d]("load", e.onLoad, { capture: !0 });
    };
    var j = function (e, t) { return e.grid && t.grid && t.grid.rows > 1; };
    var W = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
    function U(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            var a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i
                ? (!0 === e[a] && (e[a] = { enabled: !0 }),
                    "navigation" === a &&
                        e[a] &&
                        e[a].enabled &&
                        !e[a].prevEl &&
                        !e[a].nextEl &&
                        (e[a].auto = !0),
                    ["pagination", "scrollbar"].indexOf(a) >= 0 &&
                        e[a] &&
                        e[a].enabled &&
                        !e[a].el &&
                        (e[a].auto = !0),
                    a in e && "enabled" in i
                        ? ("object" != typeof e[a] ||
                            "enabled" in e[a] ||
                            (e[a].enabled = !0),
                            e[a] || (e[a] = { enabled: !1 }),
                            c(t, s))
                        : c(t, s))
                : c(t, s);
        };
    }
    var K = {
        eventsEmitter: L,
        update: I,
        translate: k,
        transition: {
            setTransition: function (e, t) {
                var s = this;
                s.params.cssMode ||
                    ((s.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
                        (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                    s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                var s = this, a = s.params;
                a.cssMode ||
                    (a.autoHeight && s.updateAutoHeight(),
                        O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                var s = this, a = s.params;
                (s.animating = !1),
                    a.cssMode ||
                        (s.setTransition(0),
                            O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
        },
        slide: D,
        loop: G,
        grabCursor: {
            setGrabCursor: function (e) {
                var t = this;
                if (!t.params.simulateTouch ||
                    (t.params.watchOverflow && t.isLocked) ||
                    t.params.cssMode)
                    return;
                var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                    (s.style.cursor = "move"),
                    (s.style.cursor = e ? "grabbing" : "grab"),
                    t.isElement &&
                        requestAnimationFrame(function () {
                            t.__preventObserver__ = !1;
                        });
            },
            unsetGrabCursor: function () {
                var e = this;
                (e.params.watchOverflow && e.isLocked) ||
                    e.params.cssMode ||
                    (e.isElement && (e.__preventObserver__ = !0),
                        (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""),
                        e.isElement &&
                            requestAnimationFrame(function () {
                                e.__preventObserver__ = !1;
                            }));
            },
        },
        events: {
            attachEvents: function () {
                var e = this, t = a(), s = e.params;
                (e.onTouchStart = H.bind(e)),
                    (e.onTouchMove = X.bind(e)),
                    (e.onTouchEnd = Y.bind(e)),
                    s.cssMode && (e.onScroll = R.bind(e)),
                    (e.onClick = B.bind(e)),
                    (e.onLoad = q.bind(e)),
                    V || (t.addEventListener("touchstart", F), (V = !0)),
                    _(e, "on");
            },
            detachEvents: function () {
                _(this, "off");
            },
        },
        breakpoints: {
            setBreakpoint: function () {
                var e = this, t = e.realIndex, s = e.initialized, a = e.params, i = e.el, r = a.breakpoints;
                if (!r || (r && 0 === Object.keys(r).length))
                    return;
                var n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                if (!n || e.currentBreakpoint === n)
                    return;
                var l = (n in r ? r[n] : void 0) || e.originalParams, o = j(e, a), d = j(e, l), p = a.enabled;
                o && !d
                    ? (i.classList.remove("".concat(a.containerModifierClass, "grid"), "".concat(a.containerModifierClass, "grid-column")),
                        e.emitContainerClasses())
                    : !o &&
                        d &&
                        (i.classList.add("".concat(a.containerModifierClass, "grid")),
                            ((l.grid.fill && "column" === l.grid.fill) ||
                                (!l.grid.fill && "column" === a.grid.fill)) &&
                                i.classList.add("".concat(a.containerModifierClass, "grid-column")),
                            e.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                        if (void 0 === l[t])
                            return;
                        var s = a[t] && a[t].enabled, i = l[t] && l[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable();
                    });
                var u = l.direction && l.direction !== a.direction, m = a.loop && (l.slidesPerView !== a.slidesPerView || u), h = a.loop;
                u && s && e.changeDirection(), c(e.params, l);
                var f = e.params.enabled, g = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                }),
                    p && !f ? e.disable() : !p && f && e.enable(),
                    (e.currentBreakpoint = n),
                    e.emit("_beforeBreakpoint", l),
                    s &&
                        (m
                            ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                            : !h && g
                                ? (e.loopCreate(t), e.updateSlides())
                                : h && !g && e.loopDestroy()),
                    e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t, s) {
                if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
                    return;
                var a = !1;
                var i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map(function (e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        var t_19 = parseFloat(e.substr(1));
                        return { value: n * t_19, point: e };
                    }
                    return { value: e, point: e };
                });
                l.sort(function (e, t) { return parseInt(e.value, 10) - parseInt(t.value, 10); });
                for (var e_28 = 0; e_28 < l.length; e_28 += 1) {
                    var _a = l[e_28], r_5 = _a.point, n_4 = _a.value;
                    "window" === t
                        ? i.matchMedia("(min-width: ".concat(n_4, "px)")).matches && (a = r_5)
                        : n_4 <= s.clientWidth && (a = r_5);
                }
                return a || "max";
            },
        },
        checkOverflow: {
            checkOverflow: function () {
                var e = this, t = e.isLocked, s = e.params, a = s.slidesOffsetBefore;
                if (a) {
                    var t_20 = e.slides.length - 1, s_16 = e.slidesGrid[t_20] + e.slidesSizesGrid[t_20] + 2 * a;
                    e.isLocked = e.size > s_16;
                }
                else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
        },
        classes: {
            addClasses: function () {
                var _a;
                var e = this, t = e.classNames, s = e.params, a = e.rtl, i = e.el, r = e.device, n = (function (e, t) {
                    var s = [];
                    return (e.forEach(function (e) {
                        "object" == typeof e
                            ? Object.keys(e).forEach(function (a) {
                                e[a] && s.push(t + a);
                            })
                            : "string" == typeof e && s.push(t + e);
                    }),
                        s);
                })([
                    "initialized",
                    s.direction,
                    { "free-mode": e.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: a },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                    { "watch-progress": s.watchSlidesProgress },
                ], s.containerModifierClass);
                t.push.apply(t, n), (_a = i.classList).add.apply(_a, t), e.emitContainerClasses();
            },
            removeClasses: function () {
                var _a;
                var _b = this, e = _b.el, t = _b.classNames;
                (_a = e.classList).remove.apply(_a, t), this.emitContainerClasses();
            },
        },
    }, Z = {};
    var Q = /** @class */ (function () {
        function Q() {
            var _a;
            var e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
                i[r] = arguments[r];
            1 === i.length &&
                i[0].constructor &&
                "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
                ? (t = i[0])
                : (e = i[0], t = i[1], i),
                t || (t = {}),
                (t = c({}, t)),
                e && !t.el && (t.el = e);
            var n = a();
            if (t.el &&
                "string" == typeof t.el &&
                n.querySelectorAll(t.el).length > 1) {
                var e_29 = [];
                return (n.querySelectorAll(t.el).forEach(function (s) {
                    var a = c({}, t, { el: s });
                    e_29.push(new Q(a));
                }),
                    e_29);
            }
            var l = this;
            (l.__swiper__ = !0),
                (l.support = M()),
                (l.device = C({ userAgent: t.userAgent })),
                (l.browser = P()),
                (l.eventsListeners = {}),
                (l.eventsAnyListeners = []),
                (l.modules = __spreadArray([], l.__modules__, true)),
                t.modules && Array.isArray(t.modules) && (_a = l.modules).push.apply(_a, t.modules);
            var o = {};
            l.modules.forEach(function (e) {
                e({
                    params: t,
                    swiper: l,
                    extendParams: U(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l),
                });
            });
            var d = c({}, W, o);
            return ((l.params = c({}, d, Z, t)),
                (l.originalParams = c({}, l.params)),
                (l.passedParams = c({}, t)),
                l.params &&
                    l.params.on &&
                    Object.keys(l.params.on).forEach(function (e) {
                        l.on(e, l.params.on[e]);
                    }),
                l.params && l.params.onAny && l.onAny(l.params.onAny),
                Object.assign(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () { return "horizontal" === l.params.direction; },
                    isVertical: function () { return "vertical" === l.params.direction; },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment: function () {
                        return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
                    },
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: l.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: [],
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                }),
                l.emit("_swiper"),
                l.params.init && l.init(),
                l);
        }
        Q.prototype.getSlideIndex = function (e) {
            var _a = this, t = _a.slidesEl, s = _a.params, a = w(h(t, ".".concat(s.slideClass, ", swiper-slide"))[0]);
            return w(e) - a;
        };
        Q.prototype.getSlideIndexByData = function (e) {
            return this.getSlideIndex(this.slides.filter(function (t) { return 1 * t.getAttribute("data-swiper-slide-index") === e; })[0]);
        };
        Q.prototype.recalcSlides = function () {
            var _a = this, e = _a.slidesEl, t = _a.params;
            this.slides = h(e, ".".concat(t.slideClass, ", swiper-slide"));
        };
        Q.prototype.enable = function () {
            var e = this;
            e.enabled ||
                ((e.enabled = !0),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"));
        };
        Q.prototype.disable = function () {
            var e = this;
            e.enabled &&
                ((e.enabled = !1),
                    e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"));
        };
        Q.prototype.setProgress = function (e, t) {
            var s = this;
            e = Math.min(Math.max(e, 0), 1);
            var a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
                s.updateActiveIndex(),
                s.updateSlidesClasses();
        };
        Q.prototype.emitContainerClasses = function () {
            var e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            var t = e.el.className
                .split(" ")
                .filter(function (t) {
                return 0 === t.indexOf("swiper") ||
                    0 === t.indexOf(e.params.containerModifierClass);
            });
            e.emit("_containerClasses", t.join(" "));
        };
        Q.prototype.getSlideClasses = function (e) {
            var t = this;
            return t.destroyed
                ? ""
                : e.className
                    .split(" ")
                    .filter(function (e) {
                    return 0 === e.indexOf("swiper-slide") ||
                        0 === e.indexOf(t.params.slideClass);
                })
                    .join(" ");
        };
        Q.prototype.emitSlidesClasses = function () {
            var e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            var t = [];
            e.slides.forEach(function (s) {
                var a = e.getSlideClasses(s);
                t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
            }),
                e.emit("_slideClasses", t);
        };
        Q.prototype.slidesPerViewDynamic = function (e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            var _a = this, s = _a.params, a = _a.slides, i = _a.slidesGrid, r = _a.slidesSizesGrid, n = _a.size, l = _a.activeIndex;
            var o = 1;
            if ("number" == typeof s.slidesPerView)
                return s.slidesPerView;
            if (s.centeredSlides) {
                var e_30, t_21 = a[l] ? a[l].swiperSlideSize : 0;
                for (var s_17 = l + 1; s_17 < a.length; s_17 += 1)
                    a[s_17] &&
                        !e_30 &&
                        ((t_21 += a[s_17].swiperSlideSize), (o += 1), t_21 > n && (e_30 = !0));
                for (var s_18 = l - 1; s_18 >= 0; s_18 -= 1)
                    a[s_18] &&
                        !e_30 &&
                        ((t_21 += a[s_18].swiperSlideSize), (o += 1), t_21 > n && (e_30 = !0));
            }
            else if ("current" === e)
                for (var e_31 = l + 1; e_31 < a.length; e_31 += 1) {
                    (t ? i[e_31] + r[e_31] - i[l] < n : i[e_31] - i[l] < n) && (o += 1);
                }
            else
                for (var e_32 = l - 1; e_32 >= 0; e_32 -= 1) {
                    i[l] - i[e_32] < n && (o += 1);
                }
            return o;
        };
        Q.prototype.update = function () {
            var e = this;
            if (!e || e.destroyed)
                return;
            var t = e.snapGrid, s = e.params;
            function a() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            var i;
            if ((s.breakpoints && e.setBreakpoint(),
                __spreadArray([], e.el.querySelectorAll('[loading="lazy"]'), true).forEach(function (t) {
                    t.complete && z(e, t);
                }),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode))
                a(), s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) &&
                    e.isEnd &&
                    !s.centeredSlides) {
                    var t_22 = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t_22.length - 1, 0, !1, !0);
                }
                else
                    i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a();
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
        };
        Q.prototype.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var s = this, a = s.params.direction;
            return (e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                e === a ||
                    ("horizontal" !== e && "vertical" !== e) ||
                    (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(a)),
                        s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)),
                        s.emitContainerClasses(),
                        (s.params.direction = e),
                        s.slides.forEach(function (t) {
                            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                        }),
                        s.emit("changeDirection"),
                        t && s.update()),
                s);
        };
        Q.prototype.changeLanguageDirection = function (e) {
            var t = this;
            (t.rtl && "rtl" === e) ||
                (!t.rtl && "ltr" === e) ||
                ((t.rtl = "rtl" === e),
                    (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
                    t.rtl
                        ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")),
                            (t.el.dir = "rtl"))
                        : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")),
                            (t.el.dir = "ltr")),
                    t.update());
        };
        Q.prototype.mount = function (e) {
            var t = this;
            if (t.mounted)
                return !0;
            var s = e || t.params.el;
            if (("string" == typeof s && (s = document.querySelector(s)), !s))
                return !1;
            (s.swiper = t),
                s.parentNode &&
                    s.parentNode.host &&
                    "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
                    (t.isElement = !0);
            var a = function () {
                return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
            };
            var i = (function () {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a());
                }
                return h(s, a())[0];
            })();
            return (!i &&
                t.params.createElements &&
                ((i = f("div", t.params.wrapperClass)),
                    s.append(i),
                    h(s, ".".concat(t.params.slideClass)).forEach(function (e) {
                        i.append(e);
                    })),
                Object.assign(t, {
                    el: s,
                    wrapperEl: i,
                    slidesEl: t.isElement && !s.parentNode.host.slideSlots
                        ? s.parentNode.host
                        : i,
                    hostEl: t.isElement ? s.parentNode.host : s,
                    mounted: !0,
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction &&
                        ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
                    wrongRTL: "-webkit-box" === v(i, "display"),
                }),
                !0);
        };
        Q.prototype.init = function (e) {
            var t = this;
            if (t.initialized)
                return t;
            if (!1 === t.mount(e))
                return t;
            t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled
                    ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
                    : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(),
                t.attachEvents();
            var s = __spreadArray([], t.el.querySelectorAll('[loading="lazy"]'), true);
            return (t.isElement && s.push.apply(s, t.hostEl.querySelectorAll('[loading="lazy"]')),
                s.forEach(function (e) {
                    e.complete
                        ? z(t, e)
                        : e.addEventListener("load", function (e) {
                            z(t, e.target);
                        });
                }),
                $(t),
                (t.initialized = !0),
                $(t),
                t.emit("init"),
                t.emit("afterInit"),
                t);
        };
        Q.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var s = this, a = s.params, i = s.el, r = s.wrapperEl, n = s.slides;
            return (void 0 === s.params ||
                s.destroyed ||
                (s.emit("beforeDestroy"),
                    (s.initialized = !1),
                    s.detachEvents(),
                    a.loop && s.loopDestroy(),
                    t &&
                        (s.removeClasses(),
                            i.removeAttribute("style"),
                            r.removeAttribute("style"),
                            n &&
                                n.length &&
                                n.forEach(function (e) {
                                    e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                                        e.removeAttribute("style"),
                                        e.removeAttribute("data-swiper-slide-index");
                                })),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach(function (e) {
                        s.off(e);
                    }),
                    !1 !== e &&
                        ((s.el.swiper = null),
                            (function (e) {
                                var t = e;
                                Object.keys(t).forEach(function (e) {
                                    try {
                                        t[e] = null;
                                    }
                                    catch (e) { }
                                    try {
                                        delete t[e];
                                    }
                                    catch (e) { }
                                });
                            })(s)),
                    (s.destroyed = !0)),
                null);
        };
        Q.extendDefaults = function (e) {
            c(Z, e);
        };
        Object.defineProperty(Q, "extendedDefaults", {
            get: function () {
                return Z;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Q, "defaults", {
            get: function () {
                return W;
            },
            enumerable: false,
            configurable: true
        });
        Q.installModule = function (e) {
            Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
            var t = Q.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        };
        Q.use = function (e) {
            return Array.isArray(e)
                ? (e.forEach(function (e) { return Q.installModule(e); }), Q)
                : (Q.installModule(e), Q);
        };
        return Q;
    }());
    function J(e, t, s, a) {
        return (e.params.createElements &&
            Object.keys(a).forEach(function (i) {
                if (!s[i] && !0 === s.auto) {
                    var r_6 = h(e.el, ".".concat(a[i]))[0];
                    r_6 || ((r_6 = f("div", a[i])), (r_6.className = a[i]), e.el.append(r_6)),
                        (s[i] = r_6),
                        (t[i] = r_6);
                }
            }),
            s);
    }
    function ee(e) {
        return (void 0 === e && (e = ""),
            ".".concat(e
                .trim()
                .replace(/([\.:!+\/])/g, "\\$1")
                .replace(/ /g, ".")));
    }
    function te(e) {
        var t = this, s = t.params, a = t.slidesEl;
        s.loop && t.loopDestroy();
        var i = function (e) {
            if ("string" == typeof e) {
                var t_23 = document.createElement("div");
                (t_23.innerHTML = e), a.append(t_23.children[0]), (t_23.innerHTML = "");
            }
            else
                a.append(e);
        };
        if ("object" == typeof e && "length" in e)
            for (var t_24 = 0; t_24 < e.length; t_24 += 1)
                e[t_24] && i(e[t_24]);
        else
            i(e);
        t.recalcSlides(),
            s.loop && t.loopCreate(),
            (s.observer && !t.isElement) || t.update();
    }
    function se(e) {
        var t = this, s = t.params, a = t.activeIndex, i = t.slidesEl;
        s.loop && t.loopDestroy();
        var r = a + 1;
        var n = function (e) {
            if ("string" == typeof e) {
                var t_25 = document.createElement("div");
                (t_25.innerHTML = e), i.prepend(t_25.children[0]), (t_25.innerHTML = "");
            }
            else
                i.prepend(e);
        };
        if ("object" == typeof e && "length" in e) {
            for (var t_26 = 0; t_26 < e.length; t_26 += 1)
                e[t_26] && n(e[t_26]);
            r = a + e.length;
        }
        else
            n(e);
        t.recalcSlides(),
            s.loop && t.loopCreate(),
            (s.observer && !t.isElement) || t.update(),
            t.slideTo(r, 0, !1);
    }
    function ae(e, t) {
        var s = this, a = s.params, i = s.activeIndex, r = s.slidesEl;
        var n = i;
        a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
        var l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        var o = n > e ? n + 1 : n;
        var d = [];
        for (var t_27 = l - 1; t_27 >= e; t_27 -= 1) {
            var e_33 = s.slides[t_27];
            e_33.remove(), d.unshift(e_33);
        }
        if ("object" == typeof t && "length" in t) {
            for (var e_34 = 0; e_34 < t.length; e_34 += 1)
                t[e_34] && r.append(t[e_34]);
            o = n > e ? n + t.length : n;
        }
        else
            r.append(t);
        for (var e_35 = 0; e_35 < d.length; e_35 += 1)
            r.append(d[e_35]);
        s.recalcSlides(),
            a.loop && s.loopCreate(),
            (a.observer && !s.isElement) || s.update(),
            a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function ie(e) {
        var t = this, s = t.params, a = t.activeIndex;
        var i = a;
        s.loop && ((i -= t.loopedSlides), t.loopDestroy());
        var r, n = i;
        if ("object" == typeof e && "length" in e) {
            for (var s_19 = 0; s_19 < e.length; s_19 += 1)
                (r = e[s_19]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
            n = Math.max(n, 0);
        }
        else
            (r = e),
                t.slides[r] && t.slides[r].remove(),
                r < n && (n -= 1),
                (n = Math.max(n, 0));
        t.recalcSlides(),
            s.loop && t.loopCreate(),
            (s.observer && !t.isElement) || t.update(),
            s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    }
    function re() {
        var e = this, t = [];
        for (var s_20 = 0; s_20 < e.slides.length; s_20 += 1)
            t.push(s_20);
        e.removeSlide(t);
    }
    function ne(e) {
        var t = e.effect, s = e.swiper, a = e.on, i = e.setTranslate, r = e.setTransition, n = e.overwriteParams, l = e.perspective, o = e.recreateShadows, d = e.getEffectParams;
        var c;
        a("beforeInit", function () {
            if (s.params.effect !== t)
                return;
            s.classNames.push("".concat(s.params.containerModifierClass).concat(t)),
                l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
            var e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
            a("setTranslate", function () {
                s.params.effect === t && i();
            }),
            a("setTransition", function (e, a) {
                s.params.effect === t && r(a);
            }),
            a("transitionEnd", function () {
                if (s.params.effect === t && o) {
                    if (!d || !d().slideShadows)
                        return;
                    s.slides.forEach(function (e) {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (e) { return e.remove(); });
                    }),
                        o();
                }
            }),
            a("virtualUpdate", function () {
                s.params.effect === t &&
                    (s.slides.length || (c = !0),
                        requestAnimationFrame(function () {
                            c && s.slides && s.slides.length && (i(), (c = !1));
                        }));
            });
    }
    function le(e, t) {
        var s = m(t);
        return (s !== t &&
            ((s.style.backfaceVisibility = "hidden"),
                (s.style["-webkit-backface-visibility"] = "hidden")),
            s);
    }
    function oe(e) {
        var t = e.swiper, s = e.duration, a = e.transformElements, i = e.allSlides;
        var r = t.activeIndex;
        if (t.params.virtualTranslate && 0 !== s) {
            var e_36, s_21 = !1;
            (e_36 = i
                ? a
                : a.filter(function (e) {
                    var s = e.classList.contains("swiper-slide-transform")
                        ? (function (e) {
                            if (!e.parentElement)
                                return t.slides.filter(function (t) { return t.shadowRoot && t.shadowRoot === e.parentNode; })[0];
                            return e.parentElement;
                        })(e)
                        : e;
                    return t.getSlideIndex(s) === r;
                })),
                e_36.forEach(function (e) {
                    y(e, function () {
                        if (s_21)
                            return;
                        if (!t || t.destroyed)
                            return;
                        (s_21 = !0), (t.animating = !1);
                        var e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                        });
                        t.wrapperEl.dispatchEvent(e);
                    });
                });
        }
    }
    function de(e, t, s) {
        var a = "swiper-slide-shadow".concat(s ? "-".concat(s) : "").concat(e ? " swiper-slide-shadow-".concat(e) : ""), i = m(t);
        var r = i.querySelector(".".concat(a.split(" ").join(".")));
        return r || ((r = f("div", a.split(" "))), i.append(r)), r;
    }
    Object.keys(K).forEach(function (e) {
        Object.keys(K[e]).forEach(function (t) {
            Q.prototype[t] = K[e][t];
        });
    }),
        Q.use([
            function (e) {
                var t = e.swiper, s = e.on, a = e.emit;
                var i = r();
                var n = null, l = null;
                var o = function () {
                    t &&
                        !t.destroyed &&
                        t.initialized &&
                        (a("beforeResize"), a("resize"));
                }, d = function () {
                    t && !t.destroyed && t.initialized && a("orientationchange");
                };
                s("init", function () {
                    t.params.resizeObserver && void 0 !== i.ResizeObserver
                        ? t &&
                            !t.destroyed &&
                            t.initialized &&
                            ((n = new ResizeObserver(function (e) {
                                l = i.requestAnimationFrame(function () {
                                    var s = t.width, a = t.height;
                                    var i = s, r = a;
                                    e.forEach(function (e) {
                                        var s = e.contentBoxSize, a = e.contentRect, n = e.target;
                                        (n && n !== t.el) ||
                                            ((i = a ? a.width : (s[0] || s).inlineSize),
                                                (r = a ? a.height : (s[0] || s).blockSize));
                                    }),
                                        (i === s && r === a) || o();
                                });
                            })),
                                n.observe(t.el))
                        : (i.addEventListener("resize", o),
                            i.addEventListener("orientationchange", d));
                }),
                    s("destroy", function () {
                        l && i.cancelAnimationFrame(l),
                            n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                            i.removeEventListener("resize", o),
                            i.removeEventListener("orientationchange", d);
                    });
            },
            function (e) {
                var t = e.swiper, s = e.extendParams, a = e.on, i = e.emit;
                var n = [], l = r(), o = function (e, s) {
                    void 0 === s && (s = {});
                    var a = new (l.MutationObserver || l.WebkitMutationObserver)(function (e) {
                        if (t.__preventObserver__)
                            return;
                        if (1 === e.length)
                            return void i("observerUpdate", e[0]);
                        var s = function () {
                            i("observerUpdate", e[0]);
                        };
                        l.requestAnimationFrame
                            ? l.requestAnimationFrame(s)
                            : l.setTimeout(s, 0);
                    });
                    a.observe(e, {
                        attributes: void 0 === s.attributes || s.attributes,
                        childList: void 0 === s.childList || s.childList,
                        characterData: void 0 === s.characterData || s.characterData,
                    }),
                        n.push(a);
                };
                s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                    a("init", function () {
                        if (t.params.observer) {
                            if (t.params.observeParents) {
                                var e_37 = b(t.hostEl);
                                for (var t_28 = 0; t_28 < e_37.length; t_28 += 1)
                                    o(e_37[t_28]);
                            }
                            o(t.hostEl, { childList: t.params.observeSlideChildren }),
                                o(t.wrapperEl, { attributes: !1 });
                        }
                    }),
                    a("destroy", function () {
                        n.forEach(function (e) {
                            e.disconnect();
                        }),
                            n.splice(0, n.length);
                    });
            },
        ]);
    var ce = [
        function (e) {
            var t, s = e.swiper, i = e.extendParams, r = e.on, n = e.emit;
            i({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            });
            var l = a();
            s.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: [],
            };
            var o = l.createElement("div");
            function d(e, t) {
                var a = s.params.virtual;
                if (a.cache && s.virtual.cache[t])
                    return s.virtual.cache[t];
                var i;
                return (a.renderSlide
                    ? ((i = a.renderSlide.call(s, e, t)),
                        "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
                    : (i = s.isElement
                        ? f("swiper-slide")
                        : f("div", s.params.slideClass)),
                    i.setAttribute("data-swiper-slide-index", t),
                    a.renderSlide || (i.innerHTML = e),
                    a.cache && (s.virtual.cache[t] = i),
                    i);
            }
            function c(e) {
                var _a = s.params, t = _a.slidesPerView, a = _a.slidesPerGroup, i = _a.centeredSlides, r = _a.loop, _b = s.params.virtual, l = _b.addSlidesBefore, o = _b.addSlidesAfter, _c = s.virtual, c = _c.from, p = _c.to, u = _c.slides, m = _c.slidesGrid, f = _c.offset;
                s.params.cssMode || s.updateActiveIndex();
                var g = s.activeIndex || 0;
                var v, w, b;
                (v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
                    i
                        ? ((w = Math.floor(t / 2) + a + o), (b = Math.floor(t / 2) + a + l))
                        : ((w = t + (a - 1) + o), (b = (r ? t : a) + l));
                var y = g - b, E = g + w;
                r || ((y = Math.max(y, 0)), (E = Math.min(E, u.length - 1)));
                var x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
                function S() {
                    s.updateSlides(),
                        s.updateProgress(),
                        s.updateSlidesClasses(),
                        n("virtualUpdate");
                }
                if ((r && g >= b
                    ? ((y -= b), i || (x += s.slidesGrid[0]))
                    : r && g < b && ((y = -b), i && (x += s.slidesGrid[0])),
                    Object.assign(s.virtual, {
                        from: y,
                        to: E,
                        offset: x,
                        slidesGrid: s.slidesGrid,
                        slidesBefore: b,
                        slidesAfter: w,
                    }),
                    c === y && p === E && !e))
                    return (s.slidesGrid !== m &&
                        x !== f &&
                        s.slides.forEach(function (e) {
                            e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
                        }),
                        s.updateProgress(),
                        void n("virtualUpdate"));
                if (s.params.virtual.renderExternal)
                    return (s.params.virtual.renderExternal.call(s, {
                        offset: x,
                        from: y,
                        to: E,
                        slides: (function () {
                            var e = [];
                            for (var t_29 = y; t_29 <= E; t_29 += 1)
                                e.push(u[t_29]);
                            return e;
                        })(),
                    }),
                        void (s.params.virtual.renderExternalUpdate
                            ? S()
                            : n("virtualUpdate")));
                var T = [], M = [], C = function (e) {
                    var t = e;
                    return (e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t);
                };
                if (e)
                    s.slides
                        .filter(function (e) { return e.matches(".".concat(s.params.slideClass, ", swiper-slide")); })
                        .forEach(function (e) {
                        e.remove();
                    });
                else {
                    var _loop_1 = function (e_38) {
                        if (e_38 < y || e_38 > E) {
                            var t_30 = C(e_38);
                            s.slides
                                .filter(function (e) {
                                return e.matches(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(t_30, "\"], swiper-slide[data-swiper-slide-index=\"").concat(t_30, "\"]"));
                            })
                                .forEach(function (e) {
                                e.remove();
                            });
                        }
                    };
                    for (var e_38 = c; e_38 <= p; e_38 += 1) {
                        _loop_1(e_38);
                    }
                }
                var P = r ? -u.length : 0, L = r ? 2 * u.length : u.length;
                for (var t_31 = P; t_31 < L; t_31 += 1)
                    if (t_31 >= y && t_31 <= E) {
                        var s_22 = C(t_31);
                        void 0 === p || e
                            ? M.push(s_22)
                            : (t_31 > p && M.push(s_22), t_31 < c && T.push(s_22));
                    }
                if ((M.forEach(function (e) {
                    s.slidesEl.append(d(u[e], e));
                }),
                    r))
                    for (var e_39 = T.length - 1; e_39 >= 0; e_39 -= 1) {
                        var t_32 = T[e_39];
                        s.slidesEl.prepend(d(u[t_32], t_32));
                    }
                else
                    T.sort(function (e, t) { return t - e; }),
                        T.forEach(function (e) {
                            s.slidesEl.prepend(d(u[e], e));
                        });
                h(s.slidesEl, ".swiper-slide, swiper-slide").forEach(function (e) {
                    e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
                }),
                    S();
            }
            r("beforeInit", function () {
                if (!s.params.virtual.enabled)
                    return;
                var e;
                if (void 0 === s.passedParams.virtual.slides) {
                    var t_33 = __spreadArray([], s.slidesEl.children, true).filter(function (e) {
                        return e.matches(".".concat(s.params.slideClass, ", swiper-slide"));
                    });
                    t_33 &&
                        t_33.length &&
                        ((s.virtual.slides = __spreadArray([], t_33, true)),
                            (e = !0),
                            t_33.forEach(function (e, t) {
                                e.setAttribute("data-swiper-slide-index", t),
                                    (s.virtual.cache[t] = e),
                                    e.remove();
                            }));
                }
                e || (s.virtual.slides = s.params.virtual.slides),
                    s.classNames.push("".concat(s.params.containerModifierClass, "virtual")),
                    (s.params.watchSlidesProgress = !0),
                    (s.originalParams.watchSlidesProgress = !0),
                    c();
            }),
                r("setTranslate", function () {
                    s.params.virtual.enabled &&
                        (s.params.cssMode && !s._immediateVirtual
                            ? (clearTimeout(t),
                                (t = setTimeout(function () {
                                    c();
                                }, 100)))
                            : c());
                }),
                r("init update resize", function () {
                    s.params.virtual.enabled &&
                        s.params.cssMode &&
                        p(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
                }),
                Object.assign(s.virtual, {
                    appendSlide: function (e) {
                        if ("object" == typeof e && "length" in e)
                            for (var t_34 = 0; t_34 < e.length; t_34 += 1)
                                e[t_34] && s.virtual.slides.push(e[t_34]);
                        else
                            s.virtual.slides.push(e);
                        c(!0);
                    },
                    prependSlide: function (e) {
                        var t = s.activeIndex;
                        var a = t + 1, i = 1;
                        if (Array.isArray(e)) {
                            for (var t_35 = 0; t_35 < e.length; t_35 += 1)
                                e[t_35] && s.virtual.slides.unshift(e[t_35]);
                            (a = t + e.length), (i = e.length);
                        }
                        else
                            s.virtual.slides.unshift(e);
                        if (s.params.virtual.cache) {
                            var e_40 = s.virtual.cache, t_36 = {};
                            Object.keys(e_40).forEach(function (s) {
                                var a = e_40[s], r = a.getAttribute("data-swiper-slide-index");
                                r &&
                                    a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i),
                                    (t_36[parseInt(s, 10) + i] = a);
                            }),
                                (s.virtual.cache = t_36);
                        }
                        c(!0), s.slideTo(a, 0);
                    },
                    removeSlide: function (e) {
                        if (null == e)
                            return;
                        var t = s.activeIndex;
                        if (Array.isArray(e))
                            for (var a_14 = e.length - 1; a_14 >= 0; a_14 -= 1)
                                s.params.virtual.cache &&
                                    (delete s.virtual.cache[e[a_14]],
                                        Object.keys(s.virtual.cache).forEach(function (t) {
                                            t > e &&
                                                ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                                                    s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                                                    delete s.virtual.cache[t]);
                                        })),
                                    s.virtual.slides.splice(e[a_14], 1),
                                    e[a_14] < t && (t -= 1),
                                    (t = Math.max(t, 0));
                        else
                            s.params.virtual.cache &&
                                (delete s.virtual.cache[e],
                                    Object.keys(s.virtual.cache).forEach(function (t) {
                                        t > e &&
                                            ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                                                s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                                                delete s.virtual.cache[t]);
                                    })),
                                s.virtual.slides.splice(e, 1),
                                e < t && (t -= 1),
                                (t = Math.max(t, 0));
                        c(!0), s.slideTo(t, 0);
                    },
                    removeAllSlides: function () {
                        (s.virtual.slides = []),
                            s.params.virtual.cache && (s.virtual.cache = {}),
                            c(!0),
                            s.slideTo(0, 0);
                    },
                    update: c,
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, i = e.on, n = e.emit;
            var l = a(), o = r();
            function d(e) {
                if (!t.enabled)
                    return;
                var s = t.rtlTranslate;
                var a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, m = 38 === i, h = 40 === i;
                if (!t.allowSlideNext &&
                    ((t.isHorizontal() && u) || (t.isVertical() && h) || c))
                    return !1;
                if (!t.allowSlidePrev &&
                    ((t.isHorizontal() && p) || (t.isVertical() && m) || d))
                    return !1;
                if (!(a.shiftKey ||
                    a.altKey ||
                    a.ctrlKey ||
                    a.metaKey ||
                    (l.activeElement &&
                        l.activeElement.nodeName &&
                        ("input" === l.activeElement.nodeName.toLowerCase() ||
                            "textarea" === l.activeElement.nodeName.toLowerCase())))) {
                    if (t.params.keyboard.onlyInViewport &&
                        (d || c || p || u || m || h)) {
                        var e_41 = !1;
                        if (b(t.el, ".".concat(t.params.slideClass, ", swiper-slide")).length > 0 &&
                            0 === b(t.el, ".".concat(t.params.slideActiveClass)).length)
                            return;
                        var a_15 = t.el, i_8 = a_15.clientWidth, r_7 = a_15.clientHeight, n_5 = o.innerWidth, l_4 = o.innerHeight, d_2 = g(a_15);
                        s && (d_2.left -= a_15.scrollLeft);
                        var c_2 = [
                            [d_2.left, d_2.top],
                            [d_2.left + i_8, d_2.top],
                            [d_2.left, d_2.top + r_7],
                            [d_2.left + i_8, d_2.top + r_7],
                        ];
                        for (var t_37 = 0; t_37 < c_2.length; t_37 += 1) {
                            var s_23 = c_2[t_37];
                            if (s_23[0] >= 0 && s_23[0] <= n_5 && s_23[1] >= 0 && s_23[1] <= l_4) {
                                if (0 === s_23[0] && 0 === s_23[1])
                                    continue;
                                e_41 = !0;
                            }
                        }
                        if (!e_41)
                            return;
                    }
                    t.isHorizontal()
                        ? ((d || c || p || u) &&
                            (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                            (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
                            (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
                        : ((d || c || m || h) &&
                            (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                            (c || h) && t.slideNext(),
                            (d || m) && t.slidePrev()),
                        n("keyPress", i);
                }
            }
            function c() {
                t.keyboard.enabled ||
                    (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
            }
            function p() {
                t.keyboard.enabled &&
                    (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
            }
            (t.keyboard = { enabled: !1 }),
                s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                i("init", function () {
                    t.params.keyboard.enabled && c();
                }),
                i("destroy", function () {
                    t.keyboard.enabled && p();
                }),
                Object.assign(t.keyboard, { enable: c, disable: p });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on, i = e.emit;
            var o = r();
            var d;
            s({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel",
                },
            }),
                (t.mousewheel = { enabled: !1 });
            var c, p = l();
            var u = [];
            function m() {
                t.enabled && (t.mouseEntered = !0);
            }
            function h() {
                t.enabled && (t.mouseEntered = !1);
            }
            function f(e) {
                return (!(t.params.mousewheel.thresholdDelta &&
                    e.delta < t.params.mousewheel.thresholdDelta) &&
                    !(t.params.mousewheel.thresholdTime &&
                        l() - p < t.params.mousewheel.thresholdTime) &&
                    ((e.delta >= 6 && l() - p < 60) ||
                        (e.direction < 0
                            ? (t.isEnd && !t.params.loop) ||
                                t.animating ||
                                (t.slideNext(), i("scroll", e.raw))
                            : (t.isBeginning && !t.params.loop) ||
                                t.animating ||
                                (t.slidePrev(), i("scroll", e.raw)),
                            (p = new o.Date().getTime()),
                            !1)));
            }
            function g(e) {
                var s = e, a = !0;
                if (!t.enabled)
                    return;
                if (e.target.closest(".".concat(t.params.mousewheel.noMousewheelClass)))
                    return;
                var r = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                var o = t.el;
                "container" !== t.params.mousewheel.eventsTarget &&
                    (o = document.querySelector(t.params.mousewheel.eventsTarget));
                var p = o && o.contains(s.target);
                if (!t.mouseEntered && !p && !r.releaseOnEdges)
                    return !0;
                s.originalEvent && (s = s.originalEvent);
                var m = 0;
                var h = t.rtlTranslate ? -1 : 1, g = (function (e) {
                    var t = 0, s = 0, a = 0, i = 0;
                    return ("detail" in e && (s = e.detail),
                        "wheelDelta" in e && (s = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                        (a = 10 * t),
                        (i = 10 * s),
                        "deltaY" in e && (i = e.deltaY),
                        "deltaX" in e && (a = e.deltaX),
                        e.shiftKey && !a && ((a = i), (i = 0)),
                        (a || i) &&
                            e.deltaMode &&
                            (1 === e.deltaMode
                                ? ((a *= 40), (i *= 40))
                                : ((a *= 800), (i *= 800))),
                        a && !t && (t = a < 1 ? -1 : 1),
                        i && !s && (s = i < 1 ? -1 : 1),
                        { spinX: t, spinY: s, pixelX: a, pixelY: i });
                })(s);
                if (r.forceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                            return !0;
                        m = -g.pixelX * h;
                    }
                    else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                            return !0;
                        m = -g.pixelY;
                    }
                else
                    m =
                        Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
                if (0 === m)
                    return !0;
                r.invert && (m = -m);
                var v = t.getTranslate() + m * r.sensitivity;
                if ((v >= t.minTranslate() && (v = t.minTranslate()),
                    v <= t.maxTranslate() && (v = t.maxTranslate()),
                    (a =
                        !!t.params.loop ||
                            !(v === t.minTranslate() || v === t.maxTranslate())),
                    a && t.params.nested && s.stopPropagation(),
                    t.params.freeMode && t.params.freeMode.enabled)) {
                    var e_42 = { time: l(), delta: Math.abs(m), direction: Math.sign(m) }, a_16 = c &&
                        e_42.time < c.time + 500 &&
                        e_42.delta <= c.delta &&
                        e_42.direction === c.direction;
                    if (!a_16) {
                        c = void 0;
                        var l_5 = t.getTranslate() + m * r.sensitivity;
                        var o_5 = t.isBeginning, p_2 = t.isEnd;
                        if ((l_5 >= t.minTranslate() && (l_5 = t.minTranslate()),
                            l_5 <= t.maxTranslate() && (l_5 = t.maxTranslate()),
                            t.setTransition(0),
                            t.setTranslate(l_5),
                            t.updateProgress(),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses(),
                            ((!o_5 && t.isBeginning) || (!p_2 && t.isEnd)) &&
                                t.updateSlidesClasses(),
                            t.params.loop &&
                                t.loopFix({
                                    direction: e_42.direction < 0 ? "next" : "prev",
                                    byMousewheel: !0,
                                }),
                            t.params.freeMode.sticky)) {
                            clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
                            var s_24 = u.length ? u[u.length - 1] : void 0, a_17 = u[0];
                            if ((u.push(e_42),
                                s_24 && (e_42.delta > s_24.delta || e_42.direction !== s_24.direction)))
                                u.splice(0);
                            else if (u.length >= 15 &&
                                e_42.time - a_17.time < 500 &&
                                a_17.delta - e_42.delta >= 1 &&
                                e_42.delta <= 6) {
                                var s_25 = m > 0 ? 0.8 : 0.2;
                                (c = e_42),
                                    u.splice(0),
                                    (d = n(function () {
                                        t.slideToClosest(t.params.speed, !0, void 0, s_25);
                                    }, 0));
                            }
                            d ||
                                (d = n(function () {
                                    (c = e_42),
                                        u.splice(0),
                                        t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if ((a_16 || i("scroll", s),
                            t.params.autoplay &&
                                t.params.autoplayDisableOnInteraction &&
                                t.autoplay.stop(),
                            r.releaseOnEdges &&
                                (l_5 === t.minTranslate() || l_5 === t.maxTranslate())))
                            return !0;
                    }
                }
                else {
                    var s_26 = {
                        time: l(),
                        delta: Math.abs(m),
                        direction: Math.sign(m),
                        raw: e,
                    };
                    u.length >= 2 && u.shift();
                    var a_18 = u.length ? u[u.length - 1] : void 0;
                    if ((u.push(s_26),
                        a_18
                            ? (s_26.direction !== a_18.direction ||
                                s_26.delta > a_18.delta ||
                                s_26.time > a_18.time + 150) &&
                                f(s_26)
                            : f(s_26),
                        (function (e) {
                            var s = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                                    return !0;
                            }
                            else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                                return !0;
                            return !1;
                        })(s_26)))
                        return !0;
                }
                return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
            }
            function v(e) {
                var s = t.el;
                "container" !== t.params.mousewheel.eventsTarget &&
                    (s = document.querySelector(t.params.mousewheel.eventsTarget)),
                    s[e]("mouseenter", m),
                    s[e]("mouseleave", h),
                    s[e]("wheel", g);
            }
            function w() {
                return t.params.cssMode
                    ? (t.wrapperEl.removeEventListener("wheel", g), !0)
                    : !t.mousewheel.enabled &&
                        (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
            }
            function b() {
                return t.params.cssMode
                    ? (t.wrapperEl.addEventListener(event, g), !0)
                    : !!t.mousewheel.enabled &&
                        (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
            }
            a("init", function () {
                !t.params.mousewheel.enabled && t.params.cssMode && b(),
                    t.params.mousewheel.enabled && w();
            }),
                a("destroy", function () {
                    t.params.cssMode && w(), t.mousewheel.enabled && b();
                }),
                Object.assign(t.mousewheel, { enable: w, disable: b });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on, i = e.emit;
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled",
                },
            }),
                (t.navigation = { nextEl: null, prevEl: null });
            var r = function (e) { return (Array.isArray(e) ? e : [e]).filter(function (e) { return !!e; }); };
            function n(e) {
                var s;
                return e &&
                    "string" == typeof e &&
                    t.isElement &&
                    ((s = t.el.querySelector(e)), s)
                    ? s
                    : (e &&
                        ("string" == typeof e && (s = __spreadArray([], document.querySelectorAll(e), true)),
                            t.params.uniqueNavElements &&
                                "string" == typeof e &&
                                s.length > 1 &&
                                1 === t.el.querySelectorAll(e).length &&
                                (s = t.el.querySelector(e))),
                        e && !s ? e : s);
            }
            function l(e, s) {
                var a = t.params.navigation;
                (e = r(e)).forEach(function (e) {
                    var _a;
                    e &&
                        ((_a = e.classList)[s ? "add" : "remove"].apply(_a, a.disabledClass.split(" ")),
                            "BUTTON" === e.tagName && (e.disabled = s),
                            t.params.watchOverflow &&
                                t.enabled &&
                                e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
                });
            }
            function o() {
                var _a = t.navigation, e = _a.nextEl, s = _a.prevEl;
                if (t.params.loop)
                    return l(s, !1), void l(e, !1);
                l(s, t.isBeginning && !t.params.rewind),
                    l(e, t.isEnd && !t.params.rewind);
            }
            function d(e) {
                e.preventDefault(),
                    (!t.isBeginning || t.params.loop || t.params.rewind) &&
                        (t.slidePrev(), i("navigationPrev"));
            }
            function c(e) {
                e.preventDefault(),
                    (!t.isEnd || t.params.loop || t.params.rewind) &&
                        (t.slideNext(), i("navigationNext"));
            }
            function p() {
                var e = t.params.navigation;
                if (((t.params.navigation = J(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })),
                    !e.nextEl && !e.prevEl))
                    return;
                var s = n(e.nextEl), a = n(e.prevEl);
                Object.assign(t.navigation, { nextEl: s, prevEl: a }),
                    (s = r(s)),
                    (a = r(a));
                var i = function (s, a) {
                    var _a;
                    s && s.addEventListener("click", "next" === a ? c : d),
                        !t.enabled && s && (_a = s.classList).add.apply(_a, e.lockClass.split(" "));
                };
                s.forEach(function (e) { return i(e, "next"); }), a.forEach(function (e) { return i(e, "prev"); });
            }
            function u() {
                var _a = t.navigation, e = _a.nextEl, s = _a.prevEl;
                (e = r(e)), (s = r(s));
                var a = function (e, s) {
                    var _a;
                    e.removeEventListener("click", "next" === s ? c : d), (_a = e.classList).remove.apply(_a, t.params.navigation.disabledClass.split(" "));
                };
                e.forEach(function (e) { return a(e, "next"); }), s.forEach(function (e) { return a(e, "prev"); });
            }
            a("init", function () {
                !1 === t.params.navigation.enabled ? m() : (p(), o());
            }),
                a("toEdge fromEdge lock unlock", function () {
                    o();
                }),
                a("destroy", function () {
                    u();
                }),
                a("enable disable", function () {
                    var _a = t.navigation, e = _a.nextEl, s = _a.prevEl;
                    (e = r(e)),
                        (s = r(s)),
                        t.enabled
                            ? o()
                            : __spreadArray(__spreadArray([], e, true), s, true).filter(function (e) { return !!e; })
                                .forEach(function (e) {
                                return e.classList.add(t.params.navigation.lockClass);
                            });
                }),
                a("click", function (e, s) {
                    var _a = t.navigation, a = _a.nextEl, n = _a.prevEl;
                    (a = r(a)), (n = r(n));
                    var l = s.target;
                    if (t.params.navigation.hideOnClick &&
                        !n.includes(l) &&
                        !a.includes(l)) {
                        if (t.pagination &&
                            t.params.pagination &&
                            t.params.pagination.clickable &&
                            (t.pagination.el === l || t.pagination.el.contains(l)))
                            return;
                        var e_43;
                        a.length
                            ? (e_43 = a[0].classList.contains(t.params.navigation.hiddenClass))
                            : n.length &&
                                (e_43 = n[0].classList.contains(t.params.navigation.hiddenClass)),
                            i(!0 === e_43 ? "navigationShow" : "navigationHide"),
                            __spreadArray(__spreadArray([], a, true), n, true).filter(function (e) { return !!e; })
                                .forEach(function (e) {
                                return e.classList.toggle(t.params.navigation.hiddenClass);
                            });
                    }
                });
            var m = function () {
                var _a;
                (_a = t.el.classList).add.apply(_a, t.params.navigation.navigationDisabledClass.split(" ")),
                    u();
            };
            Object.assign(t.navigation, {
                enable: function () {
                    var _a;
                    (_a = t.el.classList).remove.apply(_a, t.params.navigation.navigationDisabledClass.split(" ")),
                        p(),
                        o();
                },
                disable: m,
                update: o,
                init: p,
                destroy: u,
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on, i = e.emit;
            var r = "swiper-pagination";
            var n;
            s({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) { return e; },
                    formatFractionTotal: function (e) { return e; },
                    bulletClass: "".concat(r, "-bullet"),
                    bulletActiveClass: "".concat(r, "-bullet-active"),
                    modifierClass: "".concat(r, "-"),
                    currentClass: "".concat(r, "-current"),
                    totalClass: "".concat(r, "-total"),
                    hiddenClass: "".concat(r, "-hidden"),
                    progressbarFillClass: "".concat(r, "-progressbar-fill"),
                    progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
                    clickableClass: "".concat(r, "-clickable"),
                    lockClass: "".concat(r, "-lock"),
                    horizontalClass: "".concat(r, "-horizontal"),
                    verticalClass: "".concat(r, "-vertical"),
                    paginationDisabledClass: "".concat(r, "-disabled"),
                },
            }),
                (t.pagination = { el: null, bullets: [] });
            var l = 0;
            var o = function (e) { return (Array.isArray(e) ? e : [e]).filter(function (e) { return !!e; }); };
            function d() {
                return (!t.params.pagination.el ||
                    !t.pagination.el ||
                    (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length));
            }
            function c(e, s) {
                var a = t.params.pagination.bulletActiveClass;
                e &&
                    (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
                    (e.classList.add("".concat(a, "-").concat(s)),
                        (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
                            e.classList.add("".concat(a, "-").concat(s, "-").concat(s)));
            }
            function p(e) {
                var s = e.target.closest(ee(t.params.pagination.bulletClass));
                if (!s)
                    return;
                e.preventDefault();
                var a = w(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === a)
                        return;
                    var e_44 = t.realIndex, s_27 = t.getSlideIndexByData(a), i_9 = t.getSlideIndexByData(t.realIndex), r_8 = function (a) {
                        var i = t.activeIndex;
                        t.loopFix({ direction: a, activeSlideIndex: s_27, slideTo: !1 });
                        i === t.activeIndex && t.slideToLoop(e_44, 0, !1, !0);
                    };
                    if (s_27 > t.slides.length - t.loopedSlides)
                        r_8(s_27 > i_9 ? "next" : "prev");
                    else if (t.params.centeredSlides) {
                        var e_45 = "auto" === t.params.slidesPerView
                            ? t.slidesPerViewDynamic()
                            : Math.ceil(parseFloat(t.params.slidesPerView, 10));
                        s_27 < Math.floor(e_45 / 2) && r_8("prev");
                    }
                    t.slideToLoop(a);
                }
                else
                    t.slideTo(a);
            }
            function u() {
                var _a, _b;
                var e = t.rtl, s = t.params.pagination;
                if (d())
                    return;
                var a, r, p = t.pagination.el;
                p = o(p);
                var u = t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length, m = t.params.loop
                    ? Math.ceil(u / t.params.slidesPerGroup)
                    : t.snapGrid.length;
                if ((t.params.loop
                    ? ((r = t.previousRealIndex || 0),
                        (a =
                            t.params.slidesPerGroup > 1
                                ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                                : t.realIndex))
                    : void 0 !== t.snapIndex
                        ? ((a = t.snapIndex), (r = t.previousSnapIndex))
                        : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
                    "bullets" === s.type &&
                        t.pagination.bullets &&
                        t.pagination.bullets.length > 0)) {
                    var i_10 = t.pagination.bullets;
                    var o_6, d_3, u_2;
                    if ((s.dynamicBullets &&
                        ((n = E(i_10[0], t.isHorizontal() ? "width" : "height", !0)),
                            p.forEach(function (e) {
                                e.style[t.isHorizontal() ? "width" : "height"] =
                                    n * (s.dynamicMainBullets + 4) + "px";
                            }),
                            s.dynamicMainBullets > 1 &&
                                void 0 !== r &&
                                ((l += a - (r || 0)),
                                    l > s.dynamicMainBullets - 1
                                        ? (l = s.dynamicMainBullets - 1)
                                        : l < 0 && (l = 0)),
                            (o_6 = Math.max(a - l, 0)),
                            (d_3 = o_6 + (Math.min(i_10.length, s.dynamicMainBullets) - 1)),
                            (u_2 = (d_3 + o_6) / 2)),
                        i_10.forEach(function (e) {
                            var _a;
                            var t = __spreadArray([], [
                                "",
                                "-next",
                                "-next-next",
                                "-prev",
                                "-prev-prev",
                                "-main",
                            ].map(function (e) { return "".concat(s.bulletActiveClass).concat(e); }), true).map(function (e) {
                                return "string" == typeof e && e.includes(" ") ? e.split(" ") : e;
                            })
                                .flat();
                            (_a = e.classList).remove.apply(_a, t);
                        }),
                        p.length > 1))
                        i_10.forEach(function (e) {
                            var _a, _b;
                            var i = w(e);
                            i === a
                                ? (_a = e.classList).add.apply(_a, s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
                                s.dynamicBullets &&
                                    (i >= o_6 &&
                                        i <= d_3 && (_b = e.classList).add.apply(_b, "".concat(s.bulletActiveClass, "-main").split(" ")),
                                        i === o_6 && c(e, "prev"),
                                        i === d_3 && c(e, "next"));
                        });
                    else {
                        var e_46 = i_10[a];
                        if ((e_46 && (_a = e_46.classList).add.apply(_a, s.bulletActiveClass.split(" ")),
                            t.isElement &&
                                i_10.forEach(function (e, t) {
                                    e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                                }),
                            s.dynamicBullets)) {
                            var e_47 = i_10[o_6], t_38 = i_10[d_3];
                            for (var e_48 = o_6; e_48 <= d_3; e_48 += 1)
                                i_10[e_48] && (_b = i_10[e_48].classList).add.apply(_b, "".concat(s.bulletActiveClass, "-main").split(" "));
                            c(e_47, "prev"), c(t_38, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        var a_19 = Math.min(i_10.length, s.dynamicMainBullets + 4), r_9 = (n * a_19 - n) / 2 - u_2 * n, l_6 = e ? "right" : "left";
                        i_10.forEach(function (e) {
                            e.style[t.isHorizontal() ? l_6 : "top"] = "".concat(r_9, "px");
                        });
                    }
                }
                p.forEach(function (e, r) {
                    if (("fraction" === s.type &&
                        (e.querySelectorAll(ee(s.currentClass)).forEach(function (e) {
                            e.textContent = s.formatFractionCurrent(a + 1);
                        }),
                            e.querySelectorAll(ee(s.totalClass)).forEach(function (e) {
                                e.textContent = s.formatFractionTotal(m);
                            })),
                        "progressbar" === s.type)) {
                        var i_11;
                        i_11 = s.progressbarOpposite
                            ? t.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : t.isHorizontal()
                                ? "horizontal"
                                : "vertical";
                        var r_10 = (a + 1) / m;
                        var n_6 = 1, l_7 = 1;
                        "horizontal" === i_11 ? (n_6 = r_10) : (l_7 = r_10),
                            e.querySelectorAll(ee(s.progressbarFillClass)).forEach(function (e) {
                                (e.style.transform = "translate3d(0,0,0) scaleX(".concat(n_6, ") scaleY(").concat(l_7, ")")),
                                    (e.style.transitionDuration = "".concat(t.params.speed, "ms"));
                            });
                    }
                    "custom" === s.type && s.renderCustom
                        ? ((e.innerHTML = s.renderCustom(t, a + 1, m)),
                            0 === r && i("paginationRender", e))
                        : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
                        t.params.watchOverflow &&
                            t.enabled &&
                            e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
                });
            }
            function m() {
                var e = t.params.pagination;
                if (d())
                    return;
                var s = t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length;
                var a = t.pagination.el;
                a = o(a);
                var r = "";
                if ("bullets" === e.type) {
                    var a_20 = t.params.loop
                        ? Math.ceil(s / t.params.slidesPerGroup)
                        : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && a_20 > s && (a_20 = s);
                    for (var s_28 = 0; s_28 < a_20; s_28 += 1)
                        e.renderBullet
                            ? (r += e.renderBullet.call(t, s_28, e.bulletClass))
                            : (r += "<".concat(e.bulletElement, " ").concat(t.isElement ? 'part="bullet"' : "", " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">"));
                }
                "fraction" === e.type &&
                    (r = e.renderFraction
                        ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                        : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>")),
                    "progressbar" === e.type &&
                        (r = e.renderProgressbar
                            ? e.renderProgressbar.call(t, e.progressbarFillClass)
                            : "<span class=\"".concat(e.progressbarFillClass, "\"></span>")),
                    (t.pagination.bullets = []),
                    a.forEach(function (s) {
                        var _a;
                        "custom" !== e.type && (s.innerHTML = r || ""),
                            "bullets" === e.type && (_a = t.pagination.bullets).push.apply(_a, s.querySelectorAll(ee(e.bulletClass)));
                    }),
                    "custom" !== e.type && i("paginationRender", a[0]);
            }
            function h() {
                t.params.pagination = J(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
                var e = t.params.pagination;
                if (!e.el)
                    return;
                var s;
                "string" == typeof e.el &&
                    t.isElement &&
                    (s = t.el.querySelector(e.el)),
                    s ||
                        "string" != typeof e.el ||
                        (s = __spreadArray([], document.querySelectorAll(e.el), true)),
                    s || (s = e.el),
                    s &&
                        0 !== s.length &&
                        (t.params.uniqueNavElements &&
                            "string" == typeof e.el &&
                            Array.isArray(s) &&
                            s.length > 1 &&
                            ((s = __spreadArray([], t.el.querySelectorAll(e.el), true)),
                                s.length > 1 &&
                                    (s = s.filter(function (e) { return b(e, ".swiper")[0] === t.el; })[0])),
                            Array.isArray(s) && 1 === s.length && (s = s[0]),
                            Object.assign(t.pagination, { el: s }),
                            (s = o(s)),
                            s.forEach(function (s) {
                                var _a;
                                "bullets" === e.type &&
                                    e.clickable && (_a = s.classList).add.apply(_a, (e.clickableClass || "").split(" ")),
                                    s.classList.add(e.modifierClass + e.type),
                                    s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                                    "bullets" === e.type &&
                                        e.dynamicBullets &&
                                        (s.classList.add("".concat(e.modifierClass).concat(e.type, "-dynamic")),
                                            (l = 0),
                                            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                                    "progressbar" === e.type &&
                                        e.progressbarOpposite &&
                                        s.classList.add(e.progressbarOppositeClass),
                                    e.clickable && s.addEventListener("click", p),
                                    t.enabled || s.classList.add(e.lockClass);
                            }));
            }
            function f() {
                var e = t.params.pagination;
                if (d())
                    return;
                var s = t.pagination.el;
                s &&
                    ((s = o(s)),
                        s.forEach(function (s) {
                            var _a;
                            s.classList.remove(e.hiddenClass),
                                s.classList.remove(e.modifierClass + e.type),
                                s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                                e.clickable &&
                                    ((_a = s.classList).remove.apply(_a, (e.clickableClass || "").split(" ")),
                                        s.removeEventListener("click", p));
                        })),
                    t.pagination.bullets &&
                        t.pagination.bullets.forEach(function (t) {
                            var _a;
                            return (_a = t.classList).remove.apply(_a, e.bulletActiveClass.split(" "));
                        });
            }
            a("changeDirection", function () {
                if (!t.pagination || !t.pagination.el)
                    return;
                var e = t.params.pagination;
                var s = t.pagination.el;
                (s = o(s)),
                    s.forEach(function (s) {
                        s.classList.remove(e.horizontalClass, e.verticalClass),
                            s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
                    });
            }),
                a("init", function () {
                    !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
                }),
                a("activeIndexChange", function () {
                    void 0 === t.snapIndex && u();
                }),
                a("snapIndexChange", function () {
                    u();
                }),
                a("snapGridLengthChange", function () {
                    m(), u();
                }),
                a("destroy", function () {
                    f();
                }),
                a("enable disable", function () {
                    var e = t.pagination.el;
                    e &&
                        ((e = o(e)),
                            e.forEach(function (e) {
                                return e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass);
                            }));
                }),
                a("lock unlock", function () {
                    u();
                }),
                a("click", function (e, s) {
                    var a = s.target, r = o(t.pagination.el);
                    if (t.params.pagination.el &&
                        t.params.pagination.hideOnClick &&
                        r &&
                        r.length > 0 &&
                        !a.classList.contains(t.params.pagination.bulletClass)) {
                        if (t.navigation &&
                            ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                                (t.navigation.prevEl && a === t.navigation.prevEl)))
                            return;
                        var e_49 = r[0].classList.contains(t.params.pagination.hiddenClass);
                        i(!0 === e_49 ? "paginationShow" : "paginationHide"),
                            r.forEach(function (e) {
                                return e.classList.toggle(t.params.pagination.hiddenClass);
                            });
                    }
                });
            var g = function () {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                var e = t.pagination.el;
                e &&
                    ((e = o(e)),
                        e.forEach(function (e) {
                            return e.classList.add(t.params.pagination.paginationDisabledClass);
                        })),
                    f();
            };
            Object.assign(t.pagination, {
                enable: function () {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    var e = t.pagination.el;
                    e &&
                        ((e = o(e)),
                            e.forEach(function (e) {
                                return e.classList.remove(t.params.pagination.paginationDisabledClass);
                            })),
                        h(),
                        m(),
                        u();
                },
                disable: g,
                render: m,
                update: u,
                init: h,
                destroy: f,
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, i = e.on, r = e.emit;
            var l = a();
            var o, d, c, p, u = !1, m = null, h = null;
            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el)
                    return;
                var e = t.scrollbar, s = t.rtlTranslate, a = e.dragEl, i = e.el, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop : t.progress;
                var l = d, o = (c - d) * n;
                s
                    ? ((o = -o),
                        o > 0 ? ((l = d - o), (o = 0)) : -o + d > c && (l = c + o))
                    : o < 0
                        ? ((l = d + o), (o = 0))
                        : o + d > c && (l = c - o),
                    t.isHorizontal()
                        ? ((a.style.transform = "translate3d(".concat(o, "px, 0, 0)")),
                            (a.style.width = "".concat(l, "px")))
                        : ((a.style.transform = "translate3d(0px, ".concat(o, "px, 0)")),
                            (a.style.height = "".concat(l, "px"))),
                    r.hide &&
                        (clearTimeout(m),
                            (i.style.opacity = 1),
                            (m = setTimeout(function () {
                                (i.style.opacity = 0), (i.style.transitionDuration = "400ms");
                            }, 1e3)));
            }
            function w() {
                if (!t.params.scrollbar.el || !t.scrollbar.el)
                    return;
                var e = t.scrollbar, s = e.dragEl, a = e.el;
                (s.style.width = ""),
                    (s.style.height = ""),
                    (c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
                    (p =
                        t.size /
                            (t.virtualSize +
                                t.params.slidesOffsetBefore -
                                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
                    (d =
                        "auto" === t.params.scrollbar.dragSize
                            ? c * p
                            : parseInt(t.params.scrollbar.dragSize, 10)),
                    t.isHorizontal()
                        ? (s.style.width = "".concat(d, "px"))
                        : (s.style.height = "".concat(d, "px")),
                    (a.style.display = p >= 1 ? "none" : ""),
                    t.params.scrollbar.hide && (a.style.opacity = 0),
                    t.params.watchOverflow &&
                        t.enabled &&
                        e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
            }
            function b(e) {
                return t.isHorizontal() ? e.clientX : e.clientY;
            }
            function y(e) {
                var s = t.scrollbar, a = t.rtlTranslate, i = s.el;
                var r;
                (r =
                    (b(e) -
                        g(i)[t.isHorizontal() ? "left" : "top"] -
                        (null !== o ? o : d / 2)) /
                        (c - d)),
                    (r = Math.max(Math.min(r, 1), 0)),
                    a && (r = 1 - r);
                var n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                t.updateProgress(n),
                    t.setTranslate(n),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
            }
            function E(e) {
                var s = t.params.scrollbar, a = t.scrollbar, i = t.wrapperEl, n = a.el, l = a.dragEl;
                (u = !0),
                    (o =
                        e.target === l
                            ? b(e) -
                                e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"]
                            : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    (i.style.transitionDuration = "100ms"),
                    (l.style.transitionDuration = "100ms"),
                    y(e),
                    clearTimeout(h),
                    (n.style.transitionDuration = "0ms"),
                    s.hide && (n.style.opacity = 1),
                    t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
                    r("scrollbarDragStart", e);
            }
            function x(e) {
                var s = t.scrollbar, a = t.wrapperEl, i = s.el, n = s.dragEl;
                u &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                        y(e),
                        (a.style.transitionDuration = "0ms"),
                        (i.style.transitionDuration = "0ms"),
                        (n.style.transitionDuration = "0ms"),
                        r("scrollbarDragMove", e));
            }
            function S(e) {
                var s = t.params.scrollbar, a = t.scrollbar, i = t.wrapperEl, l = a.el;
                u &&
                    ((u = !1),
                        t.params.cssMode &&
                            ((t.wrapperEl.style["scroll-snap-type"] = ""),
                                (i.style.transitionDuration = "")),
                        s.hide &&
                            (clearTimeout(h),
                                (h = n(function () {
                                    (l.style.opacity = 0), (l.style.transitionDuration = "400ms");
                                }, 1e3))),
                        r("scrollbarDragEnd", e),
                        s.snapOnRelease && t.slideToClosest());
            }
            function T(e) {
                var s = t.scrollbar, a = t.params, i = s.el;
                if (!i)
                    return;
                var r = i, n = !!a.passiveListeners && { passive: !1, capture: !1 }, o = !!a.passiveListeners && { passive: !0, capture: !1 };
                if (!r)
                    return;
                var d = "on" === e ? "addEventListener" : "removeEventListener";
                r[d]("pointerdown", E, n),
                    l[d]("pointermove", x, n),
                    l[d]("pointerup", S, o);
            }
            function M() {
                var e = t.scrollbar, s = t.el;
                t.params.scrollbar = J(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
                var a = t.params.scrollbar;
                if (!a.el)
                    return;
                var i, r;
                "string" == typeof a.el &&
                    t.isElement &&
                    (i = t.el.querySelector(a.el)),
                    i || "string" != typeof a.el
                        ? i || (i = a.el)
                        : (i = l.querySelectorAll(a.el)),
                    t.params.uniqueNavElements &&
                        "string" == typeof a.el &&
                        i.length > 1 &&
                        1 === s.querySelectorAll(a.el).length &&
                        (i = s.querySelector(a.el)),
                    i.length > 0 && (i = i[0]),
                    i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass),
                    i &&
                        ((r = i.querySelector(".".concat(t.params.scrollbar.dragClass))),
                            r || ((r = f("div", t.params.scrollbar.dragClass)), i.append(r))),
                    Object.assign(e, { el: i, dragEl: r }),
                    a.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"),
                    i &&
                        i.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
            }
            function C() {
                var e = t.params.scrollbar, s = t.scrollbar.el;
                s &&
                    s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    t.params.scrollbar.el && t.scrollbar.el && T("off");
            }
            s({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical",
                },
            }),
                (t.scrollbar = { el: null, dragEl: null }),
                i("init", function () {
                    !1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
                }),
                i("update resize observerUpdate lock unlock", function () {
                    w();
                }),
                i("setTranslate", function () {
                    v();
                }),
                i("setTransition", function (e, s) {
                    !(function (e) {
                        t.params.scrollbar.el &&
                            t.scrollbar.el &&
                            (t.scrollbar.dragEl.style.transitionDuration = "".concat(e, "ms"));
                    })(s);
                }),
                i("enable disable", function () {
                    var e = t.scrollbar.el;
                    e &&
                        e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
                }),
                i("destroy", function () {
                    C();
                });
            var P = function () {
                t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
                    t.scrollbar.el &&
                        t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
                    C();
            };
            Object.assign(t.scrollbar, {
                enable: function () {
                    t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
                        t.scrollbar.el &&
                            t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
                        M(),
                        w(),
                        v();
                },
                disable: P,
                updateSize: w,
                setTranslate: v,
                init: M,
                destroy: C,
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({ parallax: { enabled: !1 } });
            var i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", r = function (e, s) {
                var a = t.rtl, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
                var n = e.getAttribute("data-swiper-parallax-x"), l = e.getAttribute("data-swiper-parallax-y");
                var o = e.getAttribute("data-swiper-parallax-scale"), d = e.getAttribute("data-swiper-parallax-opacity"), c = e.getAttribute("data-swiper-parallax-rotate");
                if ((n || l
                    ? ((n = n || "0"), (l = l || "0"))
                    : t.isHorizontal()
                        ? ((n = r), (l = "0"))
                        : ((l = r), (n = "0")),
                    (n =
                        n.indexOf("%") >= 0
                            ? parseInt(n, 10) * s * i + "%"
                            : n * s * i + "px"),
                    (l =
                        l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
                    null != d)) {
                    var t_39 = d - (d - 1) * (1 - Math.abs(s));
                    e.style.opacity = t_39;
                }
                var p = "translate3d(".concat(n, ", ").concat(l, ", 0px)");
                if (null != o) {
                    p += " scale(".concat(o - (o - 1) * (1 - Math.abs(s)), ")");
                }
                if (c && null != c) {
                    p += " rotate(".concat(c * s * -1, "deg)");
                }
                e.style.transform = p;
            }, n = function () {
                var e = t.el, s = t.slides, a = t.progress, n = t.snapGrid, l = t.isElement, o = h(e, i);
                t.isElement && o.push.apply(o, h(t.hostEl, i)),
                    o.forEach(function (e) {
                        r(e, a);
                    }),
                    s.forEach(function (e, s) {
                        var l = e.progress;
                        t.params.slidesPerGroup > 1 &&
                            "auto" !== t.params.slidesPerView &&
                            (l += Math.ceil(s / 2) - a * (n.length - 1)),
                            (l = Math.min(Math.max(l, -1), 1)),
                            e
                                .querySelectorAll("".concat(i, ", [data-swiper-parallax-rotate]"))
                                .forEach(function (e) {
                                r(e, l);
                            });
                    });
            };
            a("beforeInit", function () {
                t.params.parallax.enabled &&
                    ((t.params.watchSlidesProgress = !0),
                        (t.originalParams.watchSlidesProgress = !0));
            }),
                a("init", function () {
                    t.params.parallax.enabled && n();
                }),
                a("setTranslate", function () {
                    t.params.parallax.enabled && n();
                }),
                a("setTransition", function (e, s) {
                    t.params.parallax.enabled &&
                        (function (e) {
                            void 0 === e && (e = t.params.speed);
                            var s = t.el, a = t.hostEl, r = __spreadArray([], s.querySelectorAll(i), true);
                            t.isElement && r.push.apply(r, a.querySelectorAll(i)),
                                r.forEach(function (t) {
                                    var s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                                    0 === e && (s = 0), (t.style.transitionDuration = "".concat(s, "ms"));
                                });
                        })(s);
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on, i = e.emit;
            var n = r();
            s({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed",
                },
            }),
                (t.zoom = { enabled: !1 });
            var l, d, c = 1, p = !1;
            var u = [], m = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3,
            }, f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
            }, v = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
            };
            var w = 1;
            function y() {
                if (u.length < 2)
                    return 1;
                var e = u[0].pageX, t = u[0].pageY, s = u[1].pageX, a = u[1].pageY;
                return Math.sqrt(Math.pow((s - e), 2) + Math.pow((a - t), 2));
            }
            function E(e) {
                var s = t.isElement ? "swiper-slide" : ".".concat(t.params.slideClass);
                return (!!e.target.matches(s) ||
                    t.slides.filter(function (t) { return t.contains(e.target); }).length > 0);
            }
            function x(e) {
                if (("mouse" === e.pointerType && u.splice(0, u.length), !E(e)))
                    return;
                var s = t.params.zoom;
                if (((l = !1), (d = !1), u.push(e), !(u.length < 2))) {
                    if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
                        (m.slideEl = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"))),
                            m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                        var a_21 = m.slideEl.querySelector(".".concat(s.containerClass));
                        if ((a_21 &&
                            (a_21 = a_21.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                            (m.imageEl = a_21),
                            (m.imageWrapEl = a_21
                                ? b(m.imageEl, ".".concat(s.containerClass))[0]
                                : void 0),
                            !m.imageWrapEl))
                            return void (m.imageEl = void 0);
                        m.maxRatio =
                            m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
                    }
                    if (m.imageEl) {
                        var _a = (function () {
                            if (u.length < 2)
                                return { x: null, y: null };
                            var e = m.imageEl.getBoundingClientRect();
                            return [
                                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) /
                                    c,
                                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) /
                                    c,
                            ];
                        })(), e_50 = _a[0], t_40 = _a[1];
                        (m.originX = e_50),
                            (m.originY = t_40),
                            (m.imageEl.style.transitionDuration = "0ms");
                    }
                    p = !0;
                }
            }
            function S(e) {
                if (!E(e))
                    return;
                var s = t.params.zoom, a = t.zoom, i = u.findIndex(function (t) { return t.pointerId === e.pointerId; });
                i >= 0 && (u[i] = e),
                    u.length < 2 ||
                        ((d = !0),
                            (m.scaleMove = y()),
                            m.imageEl &&
                                ((a.scale = (m.scaleMove / m.scaleStart) * c),
                                    a.scale > m.maxRatio &&
                                        (a.scale = m.maxRatio - 1 + Math.pow((a.scale - m.maxRatio + 1), 0.5)),
                                    a.scale < s.minRatio &&
                                        (a.scale = s.minRatio + 1 - Math.pow((s.minRatio - a.scale + 1), 0.5)),
                                    (m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")"))));
            }
            function T(e) {
                if (!E(e))
                    return;
                if ("mouse" === e.pointerType && "pointerout" === e.type)
                    return;
                var s = t.params.zoom, a = t.zoom, i = u.findIndex(function (t) { return t.pointerId === e.pointerId; });
                i >= 0 && u.splice(i, 1),
                    l &&
                        d &&
                        ((l = !1),
                            (d = !1),
                            m.imageEl &&
                                ((a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio)),
                                    (m.imageEl.style.transitionDuration = "".concat(t.params.speed, "ms")),
                                    (m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")")),
                                    (c = a.scale),
                                    (p = !1),
                                    a.scale > 1 && m.slideEl
                                        ? m.slideEl.classList.add("".concat(s.zoomedSlideClass))
                                        : a.scale <= 1 &&
                                            m.slideEl &&
                                            m.slideEl.classList.remove("".concat(s.zoomedSlideClass)),
                                    1 === a.scale &&
                                        ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
            }
            function M(e) {
                if (!E(e) ||
                    !(function (e) {
                        var s = ".".concat(t.params.zoom.containerClass);
                        return (!!e.target.matches(s) ||
                            __spreadArray([], t.hostEl.querySelectorAll(s), true).filter(function (t) {
                                return t.contains(e.target);
                            }).length > 0);
                    })(e))
                    return;
                var s = t.zoom;
                if (!m.imageEl)
                    return;
                if (!f.isTouched || !m.slideEl)
                    return;
                f.isMoved ||
                    ((f.width = m.imageEl.offsetWidth),
                        (f.height = m.imageEl.offsetHeight),
                        (f.startX = o(m.imageWrapEl, "x") || 0),
                        (f.startY = o(m.imageWrapEl, "y") || 0),
                        (m.slideWidth = m.slideEl.offsetWidth),
                        (m.slideHeight = m.slideEl.offsetHeight),
                        (m.imageWrapEl.style.transitionDuration = "0ms"));
                var a = f.width * s.scale, i = f.height * s.scale;
                if (a < m.slideWidth && i < m.slideHeight)
                    return;
                (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
                    (f.maxX = -f.minX),
                    (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
                    (f.maxY = -f.minY),
                    (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
                    (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
                if ((Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (t.allowClick = !1),
                    !f.isMoved && !p)) {
                    if (t.isHorizontal() &&
                        ((Math.floor(f.minX) === Math.floor(f.startX) &&
                            f.touchesCurrent.x < f.touchesStart.x) ||
                            (Math.floor(f.maxX) === Math.floor(f.startX) &&
                                f.touchesCurrent.x > f.touchesStart.x)))
                        return void (f.isTouched = !1);
                    if (!t.isHorizontal() &&
                        ((Math.floor(f.minY) === Math.floor(f.startY) &&
                            f.touchesCurrent.y < f.touchesStart.y) ||
                            (Math.floor(f.maxY) === Math.floor(f.startY) &&
                                f.touchesCurrent.y > f.touchesStart.y)))
                        return void (f.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    (f.isMoved = !0);
                var r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio), n = m.originX, l = m.originY;
                (f.currentX =
                    f.touchesCurrent.x -
                        f.touchesStart.x +
                        f.startX +
                        r * (f.width - 2 * n)),
                    (f.currentY =
                        f.touchesCurrent.y -
                            f.touchesStart.y +
                            f.startY +
                            r * (f.height - 2 * l)),
                    f.currentX < f.minX &&
                        (f.currentX = f.minX + 1 - Math.pow((f.minX - f.currentX + 1), 0.8)),
                    f.currentX > f.maxX &&
                        (f.currentX = f.maxX - 1 + Math.pow((f.currentX - f.maxX + 1), 0.8)),
                    f.currentY < f.minY &&
                        (f.currentY = f.minY + 1 - Math.pow((f.minY - f.currentY + 1), 0.8)),
                    f.currentY > f.maxY &&
                        (f.currentY = f.maxY - 1 + Math.pow((f.currentY - f.maxY + 1), 0.8)),
                    v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x),
                    v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y),
                    v.prevTime || (v.prevTime = Date.now()),
                    (v.x =
                        (f.touchesCurrent.x - v.prevPositionX) /
                            (Date.now() - v.prevTime) /
                            2),
                    (v.y =
                        (f.touchesCurrent.y - v.prevPositionY) /
                            (Date.now() - v.prevTime) /
                            2),
                    Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
                    Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
                    (v.prevPositionX = f.touchesCurrent.x),
                    (v.prevPositionY = f.touchesCurrent.y),
                    (v.prevTime = Date.now()),
                    (m.imageWrapEl.style.transform = "translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
            }
            function C() {
                var e = t.zoom;
                m.slideEl &&
                    t.activeIndex !== t.slides.indexOf(m.slideEl) &&
                    (m.imageEl &&
                        (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                        m.imageWrapEl &&
                            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                        m.slideEl.classList.remove("".concat(t.params.zoom.zoomedSlideClass)),
                        (e.scale = 1),
                        (c = 1),
                        (m.slideEl = void 0),
                        (m.imageEl = void 0),
                        (m.imageWrapEl = void 0),
                        (m.originX = 0),
                        (m.originY = 0));
            }
            function P(e) {
                var s = t.zoom, a = t.params.zoom;
                if (!m.slideEl) {
                    e &&
                        e.target &&
                        (m.slideEl = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"))),
                        m.slideEl ||
                            (t.params.virtual && t.params.virtual.enabled && t.virtual
                                ? (m.slideEl = h(t.slidesEl, ".".concat(t.params.slideActiveClass))[0])
                                : (m.slideEl = t.slides[t.activeIndex]));
                    var s_29 = m.slideEl.querySelector(".".concat(a.containerClass));
                    s_29 &&
                        (s_29 = s_29.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                        (m.imageEl = s_29),
                        (m.imageWrapEl = s_29
                            ? b(m.imageEl, ".".concat(a.containerClass))[0]
                            : void 0);
                }
                if (!m.imageEl || !m.imageWrapEl)
                    return;
                var i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
                t.params.cssMode &&
                    ((t.wrapperEl.style.overflow = "hidden"),
                        (t.wrapperEl.style.touchAction = "none")),
                    m.slideEl.classList.add("".concat(a.zoomedSlideClass)),
                    void 0 === f.touchesStart.x && e
                        ? ((i = e.pageX), (r = e.pageY))
                        : ((i = f.touchesStart.x), (r = f.touchesStart.y));
                var z = "number" == typeof e ? e : null;
                1 === c && z && ((i = void 0), (r = void 0)),
                    (s.scale =
                        z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
                    (c =
                        z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
                    !e || (1 === c && z)
                        ? ((u = 0), (v = 0))
                        : ((P = m.slideEl.offsetWidth),
                            (L = m.slideEl.offsetHeight),
                            (l = g(m.slideEl).left + n.scrollX),
                            (o = g(m.slideEl).top + n.scrollY),
                            (d = l + P / 2 - i),
                            (p = o + L / 2 - r),
                            (w = m.imageEl.offsetWidth),
                            (y = m.imageEl.offsetHeight),
                            (E = w * s.scale),
                            (x = y * s.scale),
                            (S = Math.min(P / 2 - E / 2, 0)),
                            (T = Math.min(L / 2 - x / 2, 0)),
                            (M = -S),
                            (C = -T),
                            (u = d * s.scale),
                            (v = p * s.scale),
                            u < S && (u = S),
                            u > M && (u = M),
                            v < T && (v = T),
                            v > C && (v = C)),
                    z && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
                    (m.imageWrapEl.style.transitionDuration = "300ms"),
                    (m.imageWrapEl.style.transform = "translate3d(".concat(u, "px, ").concat(v, "px,0)")),
                    (m.imageEl.style.transitionDuration = "300ms"),
                    (m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(s.scale, ")"));
            }
            function L() {
                var e = t.zoom, s = t.params.zoom;
                if (!m.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? (m.slideEl = h(t.slidesEl, ".".concat(t.params.slideActiveClass))[0])
                        : (m.slideEl = t.slides[t.activeIndex]);
                    var e_51 = m.slideEl.querySelector(".".concat(s.containerClass));
                    e_51 &&
                        (e_51 = e_51.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                        (m.imageEl = e_51),
                        (m.imageWrapEl = e_51
                            ? b(m.imageEl, ".".concat(s.containerClass))[0]
                            : void 0);
                }
                m.imageEl &&
                    m.imageWrapEl &&
                    (t.params.cssMode &&
                        ((t.wrapperEl.style.overflow = ""),
                            (t.wrapperEl.style.touchAction = "")),
                        (e.scale = 1),
                        (c = 1),
                        (m.imageWrapEl.style.transitionDuration = "300ms"),
                        (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                        (m.imageEl.style.transitionDuration = "300ms"),
                        (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                        m.slideEl.classList.remove("".concat(s.zoomedSlideClass)),
                        (m.slideEl = void 0),
                        (m.originX = 0),
                        (m.originY = 0));
            }
            function z(e) {
                var s = t.zoom;
                s.scale && 1 !== s.scale ? L() : P(e);
            }
            function A() {
                return {
                    passiveListener: !!t.params.passiveListeners && {
                        passive: !0,
                        capture: !1,
                    },
                    activeListenerWithCapture: !t.params.passiveListeners || {
                        passive: !1,
                        capture: !0,
                    },
                };
            }
            function $() {
                var e = t.zoom;
                if (e.enabled)
                    return;
                e.enabled = !0;
                var _a = A(), s = _a.passiveListener, a = _a.activeListenerWithCapture;
                t.wrapperEl.addEventListener("pointerdown", x, s),
                    t.wrapperEl.addEventListener("pointermove", S, a),
                    ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
                        t.wrapperEl.addEventListener(e, T, s);
                    }),
                    t.wrapperEl.addEventListener("pointermove", M, a);
            }
            function I() {
                var e = t.zoom;
                if (!e.enabled)
                    return;
                e.enabled = !1;
                var _a = A(), s = _a.passiveListener, a = _a.activeListenerWithCapture;
                t.wrapperEl.removeEventListener("pointerdown", x, s),
                    t.wrapperEl.removeEventListener("pointermove", S, a),
                    ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
                        t.wrapperEl.removeEventListener(e, T, s);
                    }),
                    t.wrapperEl.removeEventListener("pointermove", M, a);
            }
            Object.defineProperty(t.zoom, "scale", {
                get: function () { return w; },
                set: function (e) {
                    if (w !== e) {
                        var t_41 = m.imageEl, s_30 = m.slideEl;
                        i("zoomChange", e, t_41, s_30);
                    }
                    w = e;
                },
            }),
                a("init", function () {
                    t.params.zoom.enabled && $();
                }),
                a("destroy", function () {
                    I();
                }),
                a("touchStart", function (e, s) {
                    t.zoom.enabled &&
                        (function (e) {
                            var s = t.device;
                            if (!m.imageEl)
                                return;
                            if (f.isTouched)
                                return;
                            s.android && e.cancelable && e.preventDefault(),
                                (f.isTouched = !0);
                            var a = u.length > 0 ? u[0] : e;
                            (f.touchesStart.x = a.pageX), (f.touchesStart.y = a.pageY);
                        })(s);
                }),
                a("touchEnd", function (e, s) {
                    t.zoom.enabled &&
                        (function () {
                            var e = t.zoom;
                            if (!m.imageEl)
                                return;
                            if (!f.isTouched || !f.isMoved)
                                return (f.isTouched = !1), void (f.isMoved = !1);
                            (f.isTouched = !1), (f.isMoved = !1);
                            var s = 300, a = 300;
                            var i = v.x * s, r = f.currentX + i, n = v.y * a, l = f.currentY + n;
                            0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)),
                                0 !== v.y && (a = Math.abs((l - f.currentY) / v.y));
                            var o = Math.max(s, a);
                            (f.currentX = r), (f.currentY = l);
                            var d = f.width * e.scale, c = f.height * e.scale;
                            (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                                (f.maxX = -f.minX),
                                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                                (f.maxY = -f.minY),
                                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                                (m.imageWrapEl.style.transitionDuration = "".concat(o, "ms")),
                                (m.imageWrapEl.style.transform = "translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
                        })();
                }),
                a("doubleTap", function (e, s) {
                    !t.animating &&
                        t.params.zoom.enabled &&
                        t.zoom.enabled &&
                        t.params.zoom.toggle &&
                        z(s);
                }),
                a("transitionEnd", function () {
                    t.zoom.enabled && t.params.zoom.enabled && C();
                }),
                a("slideChange", function () {
                    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
                }),
                Object.assign(t.zoom, {
                    enable: $,
                    disable: I,
                    in: P,
                    out: L,
                    toggle: z,
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            function i(e, t) {
                var s = (function () {
                    var e, t, s;
                    return function (a, i) {
                        for (t = -1, e = a.length; e - t > 1;)
                            (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
                        return e;
                    };
                })();
                var a, i;
                return ((this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e
                            ? ((i = s(this.x, e)),
                                (a = i - 1),
                                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                                    (this.x[i] - this.x[a]) +
                                    this.y[a])
                            : 0;
                    }),
                    this);
            }
            function r() {
                t.controller.control &&
                    t.controller.spline &&
                    ((t.controller.spline = void 0), delete t.controller.spline);
            }
            s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
                (t.controller = { control: void 0 }),
                a("beforeInit", function () {
                    if ("undefined" != typeof window &&
                        ("string" == typeof t.params.controller.control ||
                            t.params.controller.control instanceof HTMLElement)) {
                        var e_52 = document.querySelector(t.params.controller.control);
                        if (e_52 && e_52.swiper)
                            t.controller.control = e_52.swiper;
                        else if (e_52) {
                            var s_31 = function (a) {
                                (t.controller.control = a.detail[0]),
                                    t.update(),
                                    e_52.removeEventListener("init", s_31);
                            };
                            e_52.addEventListener("init", s_31);
                        }
                    }
                    else
                        t.controller.control = t.params.controller.control;
                }),
                a("update", function () {
                    r();
                }),
                a("resize", function () {
                    r();
                }),
                a("observerUpdate", function () {
                    r();
                }),
                a("setTranslate", function (e, s, a) {
                    t.controller.control &&
                        !t.controller.control.destroyed &&
                        t.controller.setTranslate(s, a);
                }),
                a("setTransition", function (e, s, a) {
                    t.controller.control &&
                        !t.controller.control.destroyed &&
                        t.controller.setTransition(s, a);
                }),
                Object.assign(t.controller, {
                    setTranslate: function (e, s) {
                        var a = t.controller.control;
                        var r, n;
                        var l = t.constructor;
                        function o(e) {
                            if (e.destroyed)
                                return;
                            var s = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by &&
                                (!(function (e) {
                                    t.controller.spline = t.params.loop
                                        ? new i(t.slidesGrid, e.slidesGrid)
                                        : new i(t.snapGrid, e.snapGrid);
                                })(e),
                                    (n = -t.controller.spline.interpolate(-s))),
                                (n && "container" !== t.params.controller.by) ||
                                    ((r =
                                        (e.maxTranslate() - e.minTranslate()) /
                                            (t.maxTranslate() - t.minTranslate())),
                                        (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                                        (n = (s - t.minTranslate()) * r + e.minTranslate())),
                                t.params.controller.inverse && (n = e.maxTranslate() - n),
                                e.updateProgress(n),
                                e.setTranslate(n, t),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses();
                        }
                        if (Array.isArray(a))
                            for (var e_53 = 0; e_53 < a.length; e_53 += 1)
                                a[e_53] !== s && a[e_53] instanceof l && o(a[e_53]);
                        else
                            a instanceof l && s !== a && o(a);
                    },
                    setTransition: function (e, s) {
                        var a = t.constructor, i = t.controller.control;
                        var r;
                        function l(s) {
                            s.destroyed ||
                                (s.setTransition(e, t),
                                    0 !== e &&
                                        (s.transitionStart(),
                                            s.params.autoHeight &&
                                                n(function () {
                                                    s.updateAutoHeight();
                                                }),
                                            y(s.wrapperEl, function () {
                                                i && s.transitionEnd();
                                            })));
                        }
                        if (Array.isArray(i))
                            for (r = 0; r < i.length; r += 1)
                                i[r] !== s && i[r] instanceof a && l(i[r]);
                        else
                            i instanceof a && s !== i && l(i);
                    },
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null,
                },
            }),
                (t.a11y = { clicked: !1 });
            var i = null;
            function r(e) {
                var t = i;
                0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
            }
            var n = function (e) { return (Array.isArray(e) ? e : [e]).filter(function (e) { return !!e; }); };
            function l(e) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("tabIndex", "0");
                });
            }
            function o(e) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("tabIndex", "-1");
                });
            }
            function d(e, t) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("role", t);
                });
            }
            function c(e, t) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("aria-roledescription", t);
                });
            }
            function p(e, t) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("aria-label", t);
                });
            }
            function u(e) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("aria-disabled", !0);
                });
            }
            function m(e) {
                (e = n(e)).forEach(function (e) {
                    e.setAttribute("aria-disabled", !1);
                });
            }
            function h(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode)
                    return;
                var s = t.params.a11y, a = e.target;
                (t.pagination &&
                    t.pagination.el &&
                    (a === t.pagination.el || t.pagination.el.contains(e.target)) &&
                    !e.target.matches(ee(t.params.pagination.bulletClass))) ||
                    (t.navigation &&
                        t.navigation.nextEl &&
                        a === t.navigation.nextEl &&
                        ((t.isEnd && !t.params.loop) || t.slideNext(),
                            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
                        t.navigation &&
                            t.navigation.prevEl &&
                            a === t.navigation.prevEl &&
                            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                                t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
                        t.pagination &&
                            a.matches(ee(t.params.pagination.bulletClass)) &&
                            a.click());
            }
            function g() {
                return (t.pagination && t.pagination.bullets && t.pagination.bullets.length);
            }
            function v() {
                return g() && t.params.pagination.clickable;
            }
            var b = function (e, t, s) {
                l(e),
                    "BUTTON" !== e.tagName &&
                        (d(e, "button"), e.addEventListener("keydown", h)),
                    p(e, s),
                    (function (e, t) {
                        (e = n(e)).forEach(function (e) {
                            e.setAttribute("aria-controls", t);
                        });
                    })(e, t);
            }, y = function () {
                t.a11y.clicked = !0;
            }, E = function () {
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        t.destroyed || (t.a11y.clicked = !1);
                    });
                });
            }, x = function (e) {
                if (t.a11y.clicked)
                    return;
                var s = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"));
                if (!s || !t.slides.includes(s))
                    return;
                var a = t.slides.indexOf(s) === t.activeIndex, i = t.params.watchSlidesProgress &&
                    t.visibleSlides &&
                    t.visibleSlides.includes(s);
                a ||
                    i ||
                    (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
                    (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
                        t.slideTo(t.slides.indexOf(s), 0));
            }, S = function () {
                var e = t.params.a11y;
                e.itemRoleDescriptionMessage &&
                    c(t.slides, e.itemRoleDescriptionMessage),
                    e.slideRole && d(t.slides, e.slideRole);
                var s = t.slides.length;
                e.slideLabelMessage &&
                    t.slides.forEach(function (a, i) {
                        var r = t.params.loop
                            ? parseInt(a.getAttribute("data-swiper-slide-index"), 10)
                            : i;
                        p(a, e.slideLabelMessage
                            .replace(/\{\{index\}\}/, r + 1)
                            .replace(/\{\{slidesLength\}\}/, s));
                    });
            }, T = function () {
                var e = t.params.a11y;
                t.el.append(i);
                var s = t.el;
                e.containerRoleDescriptionMessage &&
                    c(s, e.containerRoleDescriptionMessage),
                    e.containerMessage && p(s, e.containerMessage);
                var a = t.wrapperEl, r = e.id ||
                    a.getAttribute("id") ||
                    "swiper-wrapper-".concat(((l = 16),
                        void 0 === l && (l = 16),
                        "x"
                            .repeat(l)
                            .replace(/x/g, function () {
                            return Math.round(16 * Math.random()).toString(16);
                        })));
                var l;
                var o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var d;
                (d = r),
                    n(a).forEach(function (e) {
                        e.setAttribute("id", d);
                    }),
                    (function (e, t) {
                        (e = n(e)).forEach(function (e) {
                            e.setAttribute("aria-live", t);
                        });
                    })(a, o),
                    S();
                var _a = t.navigation ? t.navigation : {}, u = _a.nextEl, m = _a.prevEl;
                if (((u = n(u)),
                    (m = n(m)),
                    u && u.forEach(function (t) { return b(t, r, e.nextSlideMessage); }),
                    m && m.forEach(function (t) { return b(t, r, e.prevSlideMessage); }),
                    v())) {
                    (Array.isArray(t.pagination.el)
                        ? t.pagination.el
                        : [t.pagination.el]).forEach(function (e) {
                        e.addEventListener("keydown", h);
                    });
                }
                t.el.addEventListener("focus", x, !0),
                    t.el.addEventListener("pointerdown", y, !0),
                    t.el.addEventListener("pointerup", E, !0);
            };
            a("beforeInit", function () {
                (i = f("span", t.params.a11y.notificationClass)),
                    i.setAttribute("aria-live", "assertive"),
                    i.setAttribute("aria-atomic", "true");
            }),
                a("afterInit", function () {
                    t.params.a11y.enabled && T();
                }),
                a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
                    t.params.a11y.enabled && S();
                }),
                a("fromEdge toEdge afterInit lock unlock", function () {
                    t.params.a11y.enabled &&
                        (function () {
                            if (t.params.loop || t.params.rewind || !t.navigation)
                                return;
                            var _a = t.navigation, e = _a.nextEl, s = _a.prevEl;
                            s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
                                e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
                        })();
                }),
                a("paginationUpdate", function () {
                    t.params.a11y.enabled &&
                        (function () {
                            var e = t.params.a11y;
                            g() &&
                                t.pagination.bullets.forEach(function (s) {
                                    t.params.pagination.clickable &&
                                        (l(s),
                                            t.params.pagination.renderBullet ||
                                                (d(s, "button"),
                                                    p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, w(s) + 1)))),
                                        s.matches(ee(t.params.pagination.bulletActiveClass))
                                            ? s.setAttribute("aria-current", "true")
                                            : s.removeAttribute("aria-current");
                                });
                        })();
                }),
                a("destroy", function () {
                    t.params.a11y.enabled &&
                        (function () {
                            i && i.remove();
                            var _a = t.navigation ? t.navigation : {}, e = _a.nextEl, s = _a.prevEl;
                            (e = n(e)),
                                (s = n(s)),
                                e && e.forEach(function (e) { return e.removeEventListener("keydown", h); }),
                                s && s.forEach(function (e) { return e.removeEventListener("keydown", h); }),
                                v() &&
                                    (Array.isArray(t.pagination.el)
                                        ? t.pagination.el
                                        : [t.pagination.el]).forEach(function (e) {
                                        e.removeEventListener("keydown", h);
                                    });
                            t.el.removeEventListener("focus", x, !0),
                                t.el.removeEventListener("pointerdown", y, !0),
                                t.el.removeEventListener("pointerup", E, !0);
                        })();
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1,
                },
            });
            var i = !1, n = {};
            var l = function (e) {
                return e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            }, o = function (e) {
                var t = r();
                var s;
                s = e ? new URL(e) : t.location;
                var a = s.pathname
                    .slice(1)
                    .split("/")
                    .filter(function (e) { return "" !== e; }), i = a.length;
                return { key: a[i - 2], value: a[i - 1] };
            }, d = function (e, s) {
                var a = r();
                if (!i || !t.params.history.enabled)
                    return;
                var n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                var o = t.slides[s];
                var d = l(o.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    var s_32 = t.params.history.root;
                    "/" === s_32[s_32.length - 1] && (s_32 = s_32.slice(0, s_32.length - 1)),
                        (d = "".concat(s_32, "/").concat(e ? "".concat(e, "/") : "").concat(d));
                }
                else
                    n.pathname.includes(e) || (d = "".concat(e ? "".concat(e, "/") : "").concat(d));
                t.params.history.keepQuery && (d += n.search);
                var c = a.history.state;
                (c && c.value === d) ||
                    (t.params.history.replaceState
                        ? a.history.replaceState({ value: d }, null, d)
                        : a.history.pushState({ value: d }, null, d));
            }, c = function (e, s, a) {
                if (s)
                    for (var i_12 = 0, r_11 = t.slides.length; i_12 < r_11; i_12 += 1) {
                        var r_12 = t.slides[i_12];
                        if (l(r_12.getAttribute("data-history")) === s) {
                            var s_33 = t.getSlideIndex(r_12);
                            t.slideTo(s_33, e, a);
                        }
                    }
                else
                    t.slideTo(0, e, a);
            }, p = function () {
                (n = o(t.params.url)), c(t.params.speed, n.value, !1);
            };
            a("init", function () {
                t.params.history.enabled &&
                    (function () {
                        var e = r();
                        if (t.params.history) {
                            if (!e.history || !e.history.pushState)
                                return ((t.params.history.enabled = !1),
                                    void (t.params.hashNavigation.enabled = !0));
                            (i = !0),
                                (n = o(t.params.url)),
                                n.key || n.value
                                    ? (c(0, n.value, t.params.runCallbacksOnInit),
                                        t.params.history.replaceState ||
                                            e.addEventListener("popstate", p))
                                    : t.params.history.replaceState ||
                                        e.addEventListener("popstate", p);
                        }
                    })();
            }),
                a("destroy", function () {
                    t.params.history.enabled &&
                        (function () {
                            var e = r();
                            t.params.history.replaceState ||
                                e.removeEventListener("popstate", p);
                        })();
                }),
                a("transitionEnd _freeModeNoMomentumRelease", function () {
                    i && d(t.params.history.key, t.activeIndex);
                }),
                a("slideChange", function () {
                    i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, i = e.emit, n = e.on, l = !1;
            var o = a(), d = r();
            s({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1,
                    getSlideIndex: function (e, s) {
                        if (t.virtual && t.params.virtual.enabled) {
                            var e_54 = t.slides.filter(function (e) { return e.getAttribute("data-hash") === s; })[0];
                            if (!e_54)
                                return 0;
                            return parseInt(e_54.getAttribute("data-swiper-slide-index"), 10);
                        }
                        return t.getSlideIndex(h(t.slidesEl, ".".concat(t.params.slideClass, "[data-hash=\"").concat(s, "\"], swiper-slide[data-hash=\"").concat(s, "\"]"))[0]);
                    },
                },
            });
            var c = function () {
                i("hashChange");
                var e = o.location.hash.replace("#", ""), s = t.virtual && t.params.virtual.enabled
                    ? t.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(t.activeIndex, "\"]"))
                    : t.slides[t.activeIndex];
                if (e !== (s ? s.getAttribute("data-hash") : "")) {
                    var s_34 = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === s_34 || Number.isNaN(s_34))
                        return;
                    t.slideTo(s_34);
                }
            }, p = function () {
                if (!l || !t.params.hashNavigation.enabled)
                    return;
                var e = t.virtual && t.params.virtual.enabled
                    ? t.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(t.activeIndex, "\"]"))
                    : t.slides[t.activeIndex], s = e
                    ? e.getAttribute("data-hash") || e.getAttribute("data-history")
                    : "";
                t.params.hashNavigation.replaceState &&
                    d.history &&
                    d.history.replaceState
                    ? (d.history.replaceState(null, null, "#".concat(s) || ""), i("hashSet"))
                    : ((o.location.hash = s || ""), i("hashSet"));
            };
            n("init", function () {
                t.params.hashNavigation.enabled &&
                    (function () {
                        if (!t.params.hashNavigation.enabled ||
                            (t.params.history && t.params.history.enabled))
                            return;
                        l = !0;
                        var e = o.location.hash.replace("#", "");
                        if (e) {
                            var s_35 = 0, a_22 = t.params.hashNavigation.getSlideIndex(t, e);
                            t.slideTo(a_22 || 0, s_35, t.params.runCallbacksOnInit, !0);
                        }
                        t.params.hashNavigation.watchState &&
                            d.addEventListener("hashchange", c);
                    })();
            }),
                n("destroy", function () {
                    t.params.hashNavigation.enabled &&
                        t.params.hashNavigation.watchState &&
                        d.removeEventListener("hashchange", c);
                }),
                n("transitionEnd _freeModeNoMomentumRelease", function () {
                    l && p();
                }),
                n("slideChange", function () {
                    l && t.params.cssMode && p();
                });
        },
        function (e) {
            var t, s, i = e.swiper, r = e.extendParams, n = e.on, l = e.emit, o = e.params;
            (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
                r({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1,
                    },
                });
            var d, c, p, u, m, h, f, g = o && o.autoplay ? o.autoplay.delay : 3e3, v = o && o.autoplay ? o.autoplay.delay : 3e3, w = new Date().getTime;
            function b(e) {
                i &&
                    !i.destroyed &&
                    i.wrapperEl &&
                    e.target === i.wrapperEl &&
                    (i.wrapperEl.removeEventListener("transitionend", b), M());
            }
            var y = function () {
                if (i.destroyed || !i.autoplay.running)
                    return;
                i.autoplay.paused ? (c = !0) : c && ((v = d), (c = !1));
                var e = i.autoplay.paused ? d : w + v - new Date().getTime();
                (i.autoplay.timeLeft = e),
                    l("autoplayTimeLeft", e, e / g),
                    (s = requestAnimationFrame(function () {
                        y();
                    }));
            }, E = function (e) {
                if (i.destroyed || !i.autoplay.running)
                    return;
                cancelAnimationFrame(s), y();
                var a = void 0 === e ? i.params.autoplay.delay : e;
                (g = i.params.autoplay.delay), (v = i.params.autoplay.delay);
                var r = (function () {
                    var e;
                    if (((e =
                        i.virtual && i.params.virtual.enabled
                            ? i.slides.filter(function (e) {
                                return e.classList.contains("swiper-slide-active");
                            })[0]
                            : i.slides[i.activeIndex]),
                        !e))
                        return;
                    return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                })();
                !Number.isNaN(r) &&
                    r > 0 &&
                    void 0 === e &&
                    ((a = r), (g = r), (v = r)),
                    (d = a);
                var n = i.params.speed, o = function () {
                    i &&
                        !i.destroyed &&
                        (i.params.autoplay.reverseDirection
                            ? !i.isBeginning || i.params.loop || i.params.rewind
                                ? (i.slidePrev(n, !0, !0), l("autoplay"))
                                : i.params.autoplay.stopOnLastSlide ||
                                    (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                            : !i.isEnd || i.params.loop || i.params.rewind
                                ? (i.slideNext(n, !0, !0), l("autoplay"))
                                : i.params.autoplay.stopOnLastSlide ||
                                    (i.slideTo(0, n, !0, !0), l("autoplay")),
                            i.params.cssMode &&
                                ((w = new Date().getTime()),
                                    requestAnimationFrame(function () {
                                        E();
                                    })));
                };
                return (a > 0
                    ? (clearTimeout(t),
                        (t = setTimeout(function () {
                            o();
                        }, a)))
                    : requestAnimationFrame(function () {
                        o();
                    }),
                    a);
            }, x = function () {
                (i.autoplay.running = !0), E(), l("autoplayStart");
            }, S = function () {
                (i.autoplay.running = !1),
                    clearTimeout(t),
                    cancelAnimationFrame(s),
                    l("autoplayStop");
            }, T = function (e, s) {
                if (i.destroyed || !i.autoplay.running)
                    return;
                clearTimeout(t), e || (f = !0);
                var a = function () {
                    l("autoplayPause"),
                        i.params.autoplay.waitForTransition
                            ? i.wrapperEl.addEventListener("transitionend", b)
                            : M();
                };
                if (((i.autoplay.paused = !0), s))
                    return h && (d = i.params.autoplay.delay), (h = !1), void a();
                var r = d || i.params.autoplay.delay;
                (d = r - (new Date().getTime() - w)),
                    (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a());
            }, M = function () {
                (i.isEnd && d < 0 && !i.params.loop) ||
                    i.destroyed ||
                    !i.autoplay.running ||
                    ((w = new Date().getTime()),
                        f ? ((f = !1), E(d)) : E(),
                        (i.autoplay.paused = !1),
                        l("autoplayResume"));
            }, C = function () {
                if (i.destroyed || !i.autoplay.running)
                    return;
                var e = a();
                "hidden" === e.visibilityState && ((f = !0), T(!0)),
                    "visible" === e.visibilityState && M();
            }, P = function (e) {
                "mouse" === e.pointerType &&
                    ((f = !0), i.animating || i.autoplay.paused || T(!0));
            }, L = function (e) {
                "mouse" === e.pointerType && i.autoplay.paused && M();
            };
            n("init", function () {
                i.params.autoplay.enabled &&
                    (i.params.autoplay.pauseOnMouseEnter &&
                        (i.el.addEventListener("pointerenter", P),
                            i.el.addEventListener("pointerleave", L)),
                        a().addEventListener("visibilitychange", C),
                        (w = new Date().getTime()),
                        x());
            }),
                n("destroy", function () {
                    i.el.removeEventListener("pointerenter", P),
                        i.el.removeEventListener("pointerleave", L),
                        a().removeEventListener("visibilitychange", C),
                        i.autoplay.running && S();
                }),
                n("beforeTransitionStart", function (e, t, s) {
                    !i.destroyed &&
                        i.autoplay.running &&
                        (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
                }),
                n("sliderFirstMove", function () {
                    !i.destroyed &&
                        i.autoplay.running &&
                        (i.params.autoplay.disableOnInteraction
                            ? S()
                            : ((p = !0),
                                (u = !1),
                                (f = !1),
                                (m = setTimeout(function () {
                                    (f = !0), (u = !0), T(!0);
                                }, 200))));
                }),
                n("touchEnd", function () {
                    if (!i.destroyed && i.autoplay.running && p) {
                        if ((clearTimeout(m),
                            clearTimeout(t),
                            i.params.autoplay.disableOnInteraction))
                            return (u = !1), void (p = !1);
                        u && i.params.cssMode && M(), (u = !1), (p = !1);
                    }
                }),
                n("slideChange", function () {
                    !i.destroyed && i.autoplay.running && (h = !0);
                }),
                Object.assign(i.autoplay, { start: x, stop: S, pause: T, resume: M });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, i = e.on;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs",
                },
            });
            var r = !1, n = !1;
            function l() {
                var e = t.thumbs.swiper;
                if (!e || e.destroyed)
                    return;
                var s = e.clickedIndex, a = e.clickedSlide;
                if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
                    return;
                if (null == s)
                    return;
                var i;
                (i = e.params.loop
                    ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
                    : s),
                    t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
            }
            function o() {
                var e = t.params.thumbs;
                if (r)
                    return !1;
                r = !0;
                var s = t.constructor;
                if (e.swiper instanceof s)
                    (t.thumbs.swiper = e.swiper),
                        Object.assign(t.thumbs.swiper.originalParams, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1,
                        }),
                        Object.assign(t.thumbs.swiper.params, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1,
                        }),
                        t.thumbs.swiper.update();
                else if (d(e.swiper)) {
                    var a_23 = Object.assign({}, e.swiper);
                    Object.assign(a_23, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1,
                    }),
                        (t.thumbs.swiper = new s(a_23)),
                        (n = !0);
                }
                return (t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
                    t.thumbs.swiper.on("tap", l),
                    !0);
            }
            function c(e) {
                var s = t.thumbs.swiper;
                if (!s || s.destroyed)
                    return;
                var a = "auto" === s.params.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : s.params.slidesPerView;
                var i = 1;
                var r = t.params.thumbs.slideThumbActiveClass;
                if ((t.params.slidesPerView > 1 &&
                    !t.params.centeredSlides &&
                    (i = t.params.slidesPerView),
                    t.params.thumbs.multipleActiveThumbs || (i = 1),
                    (i = Math.floor(i)),
                    s.slides.forEach(function (e) { return e.classList.remove(r); }),
                    s.params.loop || (s.params.virtual && s.params.virtual.enabled)))
                    for (var e_55 = 0; e_55 < i; e_55 += 1)
                        h(s.slidesEl, "[data-swiper-slide-index=\"".concat(t.realIndex + e_55, "\"]")).forEach(function (e) {
                            e.classList.add(r);
                        });
                else
                    for (var e_56 = 0; e_56 < i; e_56 += 1)
                        s.slides[t.realIndex + e_56] &&
                            s.slides[t.realIndex + e_56].classList.add(r);
                var n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
                if (t.realIndex !== s.realIndex || l) {
                    var i_13 = s.activeIndex;
                    var r_13, o_7;
                    if (s.params.loop) {
                        var e_57 = s.slides.filter(function (e) {
                            return e.getAttribute("data-swiper-slide-index") === "".concat(t.realIndex);
                        })[0];
                        (r_13 = s.slides.indexOf(e_57)),
                            (o_7 = t.activeIndex > t.previousIndex ? "next" : "prev");
                    }
                    else
                        (r_13 = t.realIndex), (o_7 = r_13 > t.previousIndex ? "next" : "prev");
                    l && (r_13 += "next" === o_7 ? n : -1 * n),
                        s.visibleSlidesIndexes &&
                            s.visibleSlidesIndexes.indexOf(r_13) < 0 &&
                            (s.params.centeredSlides
                                ? (r_13 =
                                    r_13 > i_13
                                        ? r_13 - Math.floor(a / 2) + 1
                                        : r_13 + Math.floor(a / 2) - 1)
                                : r_13 > i_13 && s.params.slidesPerGroup,
                                s.slideTo(r_13, e ? 0 : void 0));
                }
            }
            (t.thumbs = { swiper: null }),
                i("beforeInit", function () {
                    var e = t.params.thumbs;
                    if (e && e.swiper)
                        if ("string" == typeof e.swiper ||
                            e.swiper instanceof HTMLElement) {
                            var s_36 = a(), i_14 = function () {
                                var a = "string" == typeof e.swiper
                                    ? s_36.querySelector(e.swiper)
                                    : e.swiper;
                                if (a && a.swiper)
                                    (e.swiper = a.swiper), o(), c(!0);
                                else if (a) {
                                    var s_37 = function (i) {
                                        (e.swiper = i.detail[0]),
                                            a.removeEventListener("init", s_37),
                                            o(),
                                            c(!0),
                                            e.swiper.update(),
                                            t.update();
                                    };
                                    a.addEventListener("init", s_37);
                                }
                                return a;
                            }, r_14 = function () {
                                if (t.destroyed)
                                    return;
                                i_14() || requestAnimationFrame(r_14);
                            };
                            requestAnimationFrame(r_14);
                        }
                        else
                            o(), c(!0);
                }),
                i("slideChange update resize observerUpdate", function () {
                    c();
                }),
                i("setTransition", function (e, s) {
                    var a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s);
                }),
                i("beforeDestroy", function () {
                    var e = t.thumbs.swiper;
                    e && !e.destroyed && n && e.destroy();
                }),
                Object.assign(t.thumbs, { init: o, update: c });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.emit, i = e.once;
            s({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: 0.02,
                },
            }),
                Object.assign(t, {
                    freeMode: {
                        onTouchStart: function () {
                            if (t.params.cssMode)
                                return;
                            var e = t.getTranslate();
                            t.setTranslate(e),
                                t.setTransition(0),
                                (t.touchEventsData.velocities.length = 0),
                                t.freeMode.onTouchEnd({
                                    currentPos: t.rtl ? t.translate : -t.translate,
                                });
                        },
                        onTouchMove: function () {
                            if (t.params.cssMode)
                                return;
                            var e = t.touchEventsData, s = t.touches;
                            0 === e.velocities.length &&
                                e.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: e.touchStartTime,
                                }),
                                e.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: l(),
                                });
                        },
                        onTouchEnd: function (e) {
                            var s = e.currentPos;
                            if (t.params.cssMode)
                                return;
                            var r = t.params, n = t.wrapperEl, o = t.rtlTranslate, d = t.snapGrid, c = t.touchEventsData, p = l() - c.touchStartTime;
                            if (s < -t.minTranslate())
                                t.slideTo(t.activeIndex);
                            else if (s > -t.maxTranslate())
                                t.slides.length < d.length
                                    ? t.slideTo(d.length - 1)
                                    : t.slideTo(t.slides.length - 1);
                            else {
                                if (r.freeMode.momentum) {
                                    if (c.velocities.length > 1) {
                                        var e_58 = c.velocities.pop(), s_38 = c.velocities.pop(), a_24 = e_58.position - s_38.position, i_15 = e_58.time - s_38.time;
                                        (t.velocity = a_24 / i_15),
                                            (t.velocity /= 2),
                                            Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                                                (t.velocity = 0),
                                            (i_15 > 150 || l() - e_58.time > 300) && (t.velocity = 0);
                                    }
                                    else
                                        t.velocity = 0;
                                    (t.velocity *= r.freeMode.momentumVelocityRatio),
                                        (c.velocities.length = 0);
                                    var e_59 = 1e3 * r.freeMode.momentumRatio;
                                    var s_39 = t.velocity * e_59;
                                    var p_3 = t.translate + s_39;
                                    o && (p_3 = -p_3);
                                    var u_3, m_2 = !1;
                                    var h_1 = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                                    var f_1;
                                    if (p_3 < t.maxTranslate())
                                        r.freeMode.momentumBounce
                                            ? (p_3 + t.maxTranslate() < -h_1 &&
                                                (p_3 = t.maxTranslate() - h_1),
                                                (u_3 = t.maxTranslate()),
                                                (m_2 = !0),
                                                (c.allowMomentumBounce = !0))
                                            : (p_3 = t.maxTranslate()),
                                            r.loop && r.centeredSlides && (f_1 = !0);
                                    else if (p_3 > t.minTranslate())
                                        r.freeMode.momentumBounce
                                            ? (p_3 - t.minTranslate() > h_1 && (p_3 = t.minTranslate() + h_1),
                                                (u_3 = t.minTranslate()),
                                                (m_2 = !0),
                                                (c.allowMomentumBounce = !0))
                                            : (p_3 = t.minTranslate()),
                                            r.loop && r.centeredSlides && (f_1 = !0);
                                    else if (r.freeMode.sticky) {
                                        var e_60;
                                        for (var t_42 = 0; t_42 < d.length; t_42 += 1)
                                            if (d[t_42] > -p_3) {
                                                e_60 = t_42;
                                                break;
                                            }
                                        (p_3 =
                                            Math.abs(d[e_60] - p_3) < Math.abs(d[e_60 - 1] - p_3) ||
                                                "next" === t.swipeDirection
                                                ? d[e_60]
                                                : d[e_60 - 1]),
                                            (p_3 = -p_3);
                                    }
                                    if ((f_1 &&
                                        i("transitionEnd", function () {
                                            t.loopFix();
                                        }),
                                        0 !== t.velocity)) {
                                        if (((e_59 = o
                                            ? Math.abs((-p_3 - t.translate) / t.velocity)
                                            : Math.abs((p_3 - t.translate) / t.velocity)),
                                            r.freeMode.sticky)) {
                                            var s_40 = Math.abs((o ? -p_3 : p_3) - t.translate), a_25 = t.slidesSizesGrid[t.activeIndex];
                                            e_59 =
                                                s_40 < a_25
                                                    ? r.speed
                                                    : s_40 < 2 * a_25
                                                        ? 1.5 * r.speed
                                                        : 2.5 * r.speed;
                                        }
                                    }
                                    else if (r.freeMode.sticky)
                                        return void t.slideToClosest();
                                    r.freeMode.momentumBounce && m_2
                                        ? (t.updateProgress(u_3),
                                            t.setTransition(e_59),
                                            t.setTranslate(p_3),
                                            t.transitionStart(!0, t.swipeDirection),
                                            (t.animating = !0),
                                            y(n, function () {
                                                t &&
                                                    !t.destroyed &&
                                                    c.allowMomentumBounce &&
                                                    (a("momentumBounce"),
                                                        t.setTransition(r.speed),
                                                        setTimeout(function () {
                                                            t.setTranslate(u_3),
                                                                y(n, function () {
                                                                    t && !t.destroyed && t.transitionEnd();
                                                                });
                                                        }, 0));
                                            }))
                                        : t.velocity
                                            ? (a("_freeModeNoMomentumRelease"),
                                                t.updateProgress(p_3),
                                                t.setTransition(e_59),
                                                t.setTranslate(p_3),
                                                t.transitionStart(!0, t.swipeDirection),
                                                t.animating ||
                                                    ((t.animating = !0),
                                                        y(n, function () {
                                                            t && !t.destroyed && t.transitionEnd();
                                                        })))
                                            : t.updateProgress(p_3),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses();
                                }
                                else {
                                    if (r.freeMode.sticky)
                                        return void t.slideToClosest();
                                    r.freeMode && a("_freeModeNoMomentumRelease");
                                }
                                (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                                    (t.updateProgress(),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses());
                            }
                        },
                    },
                });
        },
        function (e) {
            var t, s, a, i, r = e.swiper, n = e.extendParams, l = e.on;
            n({ grid: { rows: 1, fill: "column" } });
            var o = function () {
                var e = r.params.spaceBetween;
                return ("string" == typeof e && e.indexOf("%") >= 0
                    ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size)
                    : "string" == typeof e && (e = parseFloat(e)),
                    e);
            };
            l("init", function () {
                i = r.params.grid && r.params.grid.rows > 1;
            }),
                l("update", function () {
                    var e = r.params, t = r.el, s = e.grid && e.grid.rows > 1;
                    i && !s
                        ? (t.classList.remove("".concat(e.containerModifierClass, "grid"), "".concat(e.containerModifierClass, "grid-column")),
                            (a = 1),
                            r.emitContainerClasses())
                        : !i &&
                            s &&
                            (t.classList.add("".concat(e.containerModifierClass, "grid")),
                                "column" === e.grid.fill &&
                                    t.classList.add("".concat(e.containerModifierClass, "grid-column")),
                                r.emitContainerClasses()),
                        (i = s);
                }),
                (r.grid = {
                    initSlides: function (e) {
                        var i = r.params.slidesPerView, _a = r.params.grid, n = _a.rows, l = _a.fill;
                        (a = Math.floor(e / n)),
                            (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
                            "auto" !== i && "row" === l && (t = Math.max(t, i * n)),
                            (s = t / n);
                    },
                    updateSlide: function (e, i, n, l) {
                        var d = r.params.slidesPerGroup, c = o(), _a = r.params.grid, p = _a.rows, u = _a.fill;
                        var m, h, f;
                        if ("row" === u && d > 1) {
                            var s_41 = Math.floor(e / (d * p)), a_26 = e - p * d * s_41, r_15 = 0 === s_41 ? d : Math.min(Math.ceil((n - s_41 * p * d) / p), d);
                            (f = Math.floor(a_26 / r_15)),
                                (h = a_26 - f * r_15 + s_41 * d),
                                (m = h + (f * t) / p),
                                (i.style.order = m);
                        }
                        else
                            "column" === u
                                ? ((h = Math.floor(e / p)),
                                    (f = e - h * p),
                                    (h > a || (h === a && f === p - 1)) &&
                                        ((f += 1), f >= p && ((f = 0), (h += 1))))
                                : ((f = Math.floor(e / s)), (h = e - f * s));
                        (i.row = f),
                            (i.column = h),
                            (i.style[l("margin-top")] = 0 !== f ? c && "".concat(c, "px") : "");
                    },
                    updateWrapperSize: function (e, s, a) {
                        var _a = r.params, i = _a.centeredSlides, n = _a.roundLengths, l = o(), d = r.params.grid.rows;
                        if (((r.virtualSize = (e + l) * t),
                            (r.virtualSize = Math.ceil(r.virtualSize / d) - l),
                            (r.wrapperEl.style[a("width")] = "".concat(r.virtualSize + l, "px")),
                            i)) {
                            var e_61 = [];
                            for (var t_43 = 0; t_43 < s.length; t_43 += 1) {
                                var a_27 = s[t_43];
                                n && (a_27 = Math.floor(a_27)),
                                    s[t_43] < r.virtualSize + s[0] && e_61.push(a_27);
                            }
                            s.splice(0, s.length), s.push.apply(s, e_61);
                        }
                    },
                });
        },
        function (e) {
            var t = e.swiper;
            Object.assign(t, {
                appendSlide: te.bind(t),
                prependSlide: se.bind(t),
                addSlide: ae.bind(t),
                removeSlide: ie.bind(t),
                removeAllSlides: re.bind(t),
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({ fadeEffect: { crossFade: !1 } }),
                ne({
                    effect: "fade",
                    swiper: t,
                    on: a,
                    setTranslate: function () {
                        var e = t.slides;
                        t.params.fadeEffect;
                        for (var s_42 = 0; s_42 < e.length; s_42 += 1) {
                            var e_62 = t.slides[s_42];
                            var a_28 = -e_62.swiperSlideOffset;
                            t.params.virtualTranslate || (a_28 -= t.translate);
                            var i_16 = 0;
                            t.isHorizontal() || ((i_16 = a_28), (a_28 = 0));
                            var r_16 = t.params.fadeEffect.crossFade
                                ? Math.max(1 - Math.abs(e_62.progress), 0)
                                : 1 + Math.min(Math.max(e_62.progress, -1), 0), n_7 = le(0, e_62);
                            (n_7.style.opacity = r_16),
                                (n_7.style.transform = "translate3d(".concat(a_28, "px, ").concat(i_16, "px, 0px)"));
                        }
                    },
                    setTransition: function (e) {
                        var s = t.slides.map(function (e) { return m(e); });
                        s.forEach(function (t) {
                            t.style.transitionDuration = "".concat(e, "ms");
                        }),
                            oe({
                                swiper: t,
                                duration: e,
                                transformElements: s,
                                allSlides: !0,
                            });
                    },
                    overwriteParams: function () { return ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode,
                    }); },
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                },
            });
            var i = function (e, t, s) {
                var a = s
                    ? e.querySelector(".swiper-slide-shadow-left")
                    : e.querySelector(".swiper-slide-shadow-top"), i = s
                    ? e.querySelector(".swiper-slide-shadow-right")
                    : e.querySelector(".swiper-slide-shadow-bottom");
                a ||
                    ((a = f("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" +
                        (s ? "left" : "top")).split(" "))),
                        e.append(a)),
                    i ||
                        ((i = f("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" +
                            (s ? "right" : "bottom")).split(" "))),
                            e.append(i)),
                    a && (a.style.opacity = Math.max(-t, 0)),
                    i && (i.style.opacity = Math.max(t, 0));
            };
            ne({
                effect: "cube",
                swiper: t,
                on: a,
                setTranslate: function () {
                    var e = t.el, s = t.wrapperEl, a = t.slides, r = t.width, n = t.height, l = t.rtlTranslate, o = t.size, d = t.browser, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                    var m, h = 0;
                    c.shadow &&
                        (p
                            ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                                m ||
                                    ((m = f("div", "swiper-cube-shadow")), t.wrapperEl.append(m)),
                                (m.style.height = "".concat(r, "px")))
                            : ((m = e.querySelector(".swiper-cube-shadow")),
                                m || ((m = f("div", "swiper-cube-shadow")), e.append(m))));
                    for (var e_63 = 0; e_63 < a.length; e_63 += 1) {
                        var t_44 = a[e_63];
                        var s_43 = e_63;
                        u && (s_43 = parseInt(t_44.getAttribute("data-swiper-slide-index"), 10));
                        var r_17 = 90 * s_43, n_8 = Math.floor(r_17 / 360);
                        l && ((r_17 = -r_17), (n_8 = Math.floor(-r_17 / 360)));
                        var d_4 = Math.max(Math.min(t_44.progress, 1), -1);
                        var m_3 = 0, f_2 = 0, g_1 = 0;
                        s_43 % 4 == 0
                            ? ((m_3 = 4 * -n_8 * o), (g_1 = 0))
                            : (s_43 - 1) % 4 == 0
                                ? ((m_3 = 0), (g_1 = 4 * -n_8 * o))
                                : (s_43 - 2) % 4 == 0
                                    ? ((m_3 = o + 4 * n_8 * o), (g_1 = o))
                                    : (s_43 - 3) % 4 == 0 && ((m_3 = -o), (g_1 = 3 * o + 4 * o * n_8)),
                            l && (m_3 = -m_3),
                            p || ((f_2 = m_3), (m_3 = 0));
                        var v_1 = "rotateX(".concat(p ? 0 : -r_17, "deg) rotateY(").concat(p ? r_17 : 0, "deg) translate3d(").concat(m_3, "px, ").concat(f_2, "px, ").concat(g_1, "px)");
                        d_4 <= 1 &&
                            d_4 > -1 &&
                            ((h = 90 * s_43 + 90 * d_4), l && (h = 90 * -s_43 - 90 * d_4)),
                            (t_44.style.transform = v_1),
                            c.slideShadows && i(t_44, d_4, p);
                    }
                    if (((s.style.transformOrigin = "50% 50% -".concat(o / 2, "px")),
                        (s.style["-webkit-transform-origin"] = "50% 50% -".concat(o / 2, "px")),
                        c.shadow))
                        if (p)
                            m.style.transform = "translate3d(0px, ".concat(r / 2 + c.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")");
                        else {
                            var e_64 = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90), t_45 = 1.5 -
                                (Math.sin((2 * e_64 * Math.PI) / 360) / 2 +
                                    Math.cos((2 * e_64 * Math.PI) / 360) / 2), s_44 = c.shadowScale, a_29 = c.shadowScale / t_45, i_17 = c.shadowOffset;
                            m.style.transform = "scale3d(".concat(s_44, ", 1, ").concat(a_29, ") translate3d(0px, ").concat(n / 2 + i_17, "px, ").concat(-n / 2 / a_29, "px) rotateX(-90deg)");
                        }
                    var g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                    (s.style.transform = "translate3d(0px,0,".concat(g, "px) rotateX(").concat(t.isHorizontal() ? 0 : h, "deg) rotateY(").concat(t.isHorizontal() ? -h : 0, "deg)")),
                        s.style.setProperty("--swiper-cube-translate-z", "".concat(g, "px"));
                },
                setTransition: function (e) {
                    var s = t.el, a = t.slides;
                    if ((a.forEach(function (t) {
                        (t.style.transitionDuration = "".concat(e, "ms")),
                            t
                                .querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                                .forEach(function (t) {
                                t.style.transitionDuration = "".concat(e, "ms");
                            });
                    }),
                        t.params.cubeEffect.shadow && !t.isHorizontal())) {
                        var t_46 = s.querySelector(".swiper-cube-shadow");
                        t_46 && (t_46.style.transitionDuration = "".concat(e, "ms"));
                    }
                },
                recreateShadows: function () {
                    var e = t.isHorizontal();
                    t.slides.forEach(function (t) {
                        var s = Math.max(Math.min(t.progress, 1), -1);
                        i(t, s, e);
                    });
                },
                getEffectParams: function () { return t.params.cubeEffect; },
                perspective: function () { return !0; },
                overwriteParams: function () { return ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                }); },
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
            var i = function (e, s) {
                var a = t.isHorizontal()
                    ? e.querySelector(".swiper-slide-shadow-left")
                    : e.querySelector(".swiper-slide-shadow-top"), i = t.isHorizontal()
                    ? e.querySelector(".swiper-slide-shadow-right")
                    : e.querySelector(".swiper-slide-shadow-bottom");
                a || (a = de("flip", e, t.isHorizontal() ? "left" : "top")),
                    i || (i = de("flip", e, t.isHorizontal() ? "right" : "bottom")),
                    a && (a.style.opacity = Math.max(-s, 0)),
                    i && (i.style.opacity = Math.max(s, 0));
            };
            ne({
                effect: "flip",
                swiper: t,
                on: a,
                setTranslate: function () {
                    var e = t.slides, s = t.rtlTranslate, a = t.params.flipEffect;
                    for (var r_18 = 0; r_18 < e.length; r_18 += 1) {
                        var n_9 = e[r_18];
                        var l_8 = n_9.progress;
                        t.params.flipEffect.limitRotation &&
                            (l_8 = Math.max(Math.min(n_9.progress, 1), -1));
                        var o_8 = n_9.swiperSlideOffset;
                        var d_5 = -180 * l_8, c_3 = 0, p_4 = t.params.cssMode ? -o_8 - t.translate : -o_8, u_4 = 0;
                        t.isHorizontal()
                            ? s && (d_5 = -d_5)
                            : ((u_4 = p_4), (p_4 = 0), (c_3 = -d_5), (d_5 = 0)),
                            (n_9.style.zIndex = -Math.abs(Math.round(l_8)) + e.length),
                            a.slideShadows && i(n_9, l_8);
                        var m_4 = "translate3d(".concat(p_4, "px, ").concat(u_4, "px, 0px) rotateX(").concat(c_3, "deg) rotateY(").concat(d_5, "deg)");
                        le(0, n_9).style.transform = m_4;
                    }
                },
                setTransition: function (e) {
                    var s = t.slides.map(function (e) { return m(e); });
                    s.forEach(function (t) {
                        (t.style.transitionDuration = "".concat(e, "ms")),
                            t
                                .querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                                .forEach(function (t) {
                                t.style.transitionDuration = "".concat(e, "ms");
                            });
                    }),
                        oe({ swiper: t, duration: e, transformElements: s });
                },
                recreateShadows: function () {
                    t.params.flipEffect,
                        t.slides.forEach(function (e) {
                            var s = e.progress;
                            t.params.flipEffect.limitRotation &&
                                (s = Math.max(Math.min(e.progress, 1), -1)),
                                i(e, s);
                        });
                },
                getEffectParams: function () { return t.params.flipEffect; },
                perspective: function () { return !0; },
                overwriteParams: function () { return ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode,
                }); },
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                },
            }),
                ne({
                    effect: "coverflow",
                    swiper: t,
                    on: a,
                    setTranslate: function () {
                        var e = t.width, s = t.height, a = t.slides, i = t.slidesSizesGrid, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                        for (var e_65 = 0, t_47 = a.length; e_65 < t_47; e_65 += 1) {
                            var t_48 = a[e_65], s_45 = i[e_65], l_9 = (o - t_48.swiperSlideOffset - s_45 / 2) / s_45, p_5 = "function" == typeof r.modifier
                                ? r.modifier(l_9)
                                : l_9 * r.modifier;
                            var u_5 = n ? d * p_5 : 0, m_5 = n ? 0 : d * p_5, h_2 = -c * Math.abs(p_5), f_3 = r.stretch;
                            "string" == typeof f_3 &&
                                -1 !== f_3.indexOf("%") &&
                                (f_3 = (parseFloat(r.stretch) / 100) * s_45);
                            var g_2 = n ? 0 : f_3 * p_5, v_2 = n ? f_3 * p_5 : 0, w_1 = 1 - (1 - r.scale) * Math.abs(p_5);
                            Math.abs(v_2) < 0.001 && (v_2 = 0),
                                Math.abs(g_2) < 0.001 && (g_2 = 0),
                                Math.abs(h_2) < 0.001 && (h_2 = 0),
                                Math.abs(u_5) < 0.001 && (u_5 = 0),
                                Math.abs(m_5) < 0.001 && (m_5 = 0),
                                Math.abs(w_1) < 0.001 && (w_1 = 0);
                            var b_1 = "translate3d(".concat(v_2, "px,").concat(g_2, "px,").concat(h_2, "px)  rotateX(").concat(m_5, "deg) rotateY(").concat(u_5, "deg) scale(").concat(w_1, ")");
                            if (((le(0, t_48).style.transform = b_1),
                                (t_48.style.zIndex = 1 - Math.abs(Math.round(p_5))),
                                r.slideShadows)) {
                                var e_66 = n
                                    ? t_48.querySelector(".swiper-slide-shadow-left")
                                    : t_48.querySelector(".swiper-slide-shadow-top"), s_46 = n
                                    ? t_48.querySelector(".swiper-slide-shadow-right")
                                    : t_48.querySelector(".swiper-slide-shadow-bottom");
                                e_66 || (e_66 = de("coverflow", t_48, n ? "left" : "top")),
                                    s_46 || (s_46 = de("coverflow", t_48, n ? "right" : "bottom")),
                                    e_66 && (e_66.style.opacity = p_5 > 0 ? p_5 : 0),
                                    s_46 && (s_46.style.opacity = -p_5 > 0 ? -p_5 : 0);
                            }
                        }
                    },
                    setTransition: function (e) {
                        t.slides
                            .map(function (e) { return m(e); })
                            .forEach(function (t) {
                            (t.style.transitionDuration = "".concat(e, "ms")),
                                t
                                    .querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                                    .forEach(function (t) {
                                    t.style.transitionDuration = "".concat(e, "ms");
                                });
                        });
                    },
                    perspective: function () { return !0; },
                    overwriteParams: function () { return ({ watchSlidesProgress: !0 }); },
                });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1,
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1,
                    },
                },
            });
            var i = function (e) { return ("string" == typeof e ? e : "".concat(e, "px")); };
            ne({
                effect: "creative",
                swiper: t,
                on: a,
                setTranslate: function () {
                    var e = t.slides, s = t.wrapperEl, a = t.slidesSizesGrid, r = t.params.creativeEffect, n = r.progressMultiplier, l = t.params.centeredSlides;
                    if (l) {
                        var e_67 = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.style.transform = "translateX(calc(50% - ".concat(e_67, "px))");
                    }
                    var _loop_2 = function (s_47) {
                        var a_30 = e[s_47], o_9 = a_30.progress, d_6 = Math.min(Math.max(a_30.progress, -r.limitProgress), r.limitProgress);
                        var c_4 = d_6;
                        l ||
                            (c_4 = Math.min(Math.max(a_30.originalProgress, -r.limitProgress), r.limitProgress));
                        var p_6 = a_30.swiperSlideOffset, u_6 = [t.params.cssMode ? -p_6 - t.translate : -p_6, 0, 0], m_6 = [0, 0, 0];
                        var h_3 = !1;
                        t.isHorizontal() || ((u_6[1] = u_6[0]), (u_6[0] = 0));
                        var f_4 = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1,
                        };
                        d_6 < 0
                            ? ((f_4 = r.next), (h_3 = !0))
                            : d_6 > 0 && ((f_4 = r.prev), (h_3 = !0)),
                            u_6.forEach(function (e, t) {
                                u_6[t] = "calc(".concat(e, "px + (").concat(i(f_4.translate[t]), " * ").concat(Math.abs(d_6 * n), "))");
                            }),
                            m_6.forEach(function (e, t) {
                                m_6[t] = f_4.rotate[t] * Math.abs(d_6 * n);
                            }),
                            (a_30.style.zIndex = -Math.abs(Math.round(o_9)) + e.length);
                        var g_3 = u_6.join(", "), v_3 = "rotateX(".concat(m_6[0], "deg) rotateY(").concat(m_6[1], "deg) rotateZ(").concat(m_6[2], "deg)"), w_2 = c_4 < 0
                            ? "scale(".concat(1 + (1 - f_4.scale) * c_4 * n, ")")
                            : "scale(".concat(1 - (1 - f_4.scale) * c_4 * n, ")"), b_2 = c_4 < 0
                            ? 1 + (1 - f_4.opacity) * c_4 * n
                            : 1 - (1 - f_4.opacity) * c_4 * n, y_1 = "translate3d(".concat(g_3, ") ").concat(v_3, " ").concat(w_2);
                        if ((h_3 && f_4.shadow) || !h_3) {
                            var e_68 = a_30.querySelector(".swiper-slide-shadow");
                            if ((!e_68 && f_4.shadow && (e_68 = de("creative", a_30)), e_68)) {
                                var t_49 = r.shadowPerProgress ? d_6 * (1 / r.limitProgress) : d_6;
                                e_68.style.opacity = Math.min(Math.max(Math.abs(t_49), 0), 1);
                            }
                        }
                        var E_1 = le(0, a_30);
                        (E_1.style.transform = y_1),
                            (E_1.style.opacity = b_2),
                            f_4.origin && (E_1.style.transformOrigin = f_4.origin);
                    };
                    for (var s_47 = 0; s_47 < e.length; s_47 += 1) {
                        _loop_2(s_47);
                    }
                },
                setTransition: function (e) {
                    var s = t.slides.map(function (e) { return m(e); });
                    s.forEach(function (t) {
                        (t.style.transitionDuration = "".concat(e, "ms")),
                            t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
                                t.style.transitionDuration = "".concat(e, "ms");
                            });
                    }),
                        oe({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
                },
                perspective: function () { return t.params.creativeEffect.perspective; },
                overwriteParams: function () { return ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode,
                }); },
            });
        },
        function (e) {
            var t = e.swiper, s = e.extendParams, a = e.on;
            s({
                cardsEffect: {
                    slideShadows: !0,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8,
                },
            }),
                ne({
                    effect: "cards",
                    swiper: t,
                    on: a,
                    setTranslate: function () {
                        var e = t.slides, s = t.activeIndex, a = t.rtlTranslate, i = t.params.cardsEffect, _a = t.touchEventsData, r = _a.startTranslate, n = _a.isTouched, l = a ? -t.translate : t.translate;
                        for (var o_10 = 0; o_10 < e.length; o_10 += 1) {
                            var d_7 = e[o_10], c_5 = d_7.progress, p_7 = Math.min(Math.max(c_5, -4), 4);
                            var u_7 = d_7.swiperSlideOffset;
                            t.params.centeredSlides &&
                                !t.params.cssMode &&
                                (t.wrapperEl.style.transform = "translateX(".concat(t.minTranslate(), "px)")),
                                t.params.centeredSlides &&
                                    t.params.cssMode &&
                                    (u_7 -= e[0].swiperSlideOffset);
                            var m_7 = t.params.cssMode ? -u_7 - t.translate : -u_7, h_4 = 0;
                            var f_5 = -100 * Math.abs(p_7);
                            var g_4 = 1, v_4 = -i.perSlideRotate * p_7, w_3 = i.perSlideOffset - 0.75 * Math.abs(p_7);
                            var b_3 = t.virtual && t.params.virtual.enabled
                                ? t.virtual.from + o_10
                                : o_10, y_2 = (b_3 === s || b_3 === s - 1) &&
                                p_7 > 0 &&
                                p_7 < 1 &&
                                (n || t.params.cssMode) &&
                                l < r, E_2 = (b_3 === s || b_3 === s + 1) &&
                                p_7 < 0 &&
                                p_7 > -1 &&
                                (n || t.params.cssMode) &&
                                l > r;
                            if (y_2 || E_2) {
                                var e_69 = Math.pow((1 - Math.abs((Math.abs(p_7) - 0.5) / 0.5)), 0.5);
                                (v_4 += -28 * p_7 * e_69),
                                    (g_4 += -0.5 * e_69),
                                    (w_3 += 96 * e_69),
                                    (h_4 = -25 * e_69 * Math.abs(p_7) + "%");
                            }
                            if (((m_7 =
                                p_7 < 0
                                    ? "calc(".concat(m_7, "px ").concat(a ? "-" : "+", " (").concat(w_3 * Math.abs(p_7), "%))")
                                    : p_7 > 0
                                        ? "calc(".concat(m_7, "px ").concat(a ? "-" : "+", " (-").concat(w_3 * Math.abs(p_7), "%))")
                                        : "".concat(m_7, "px")),
                                !t.isHorizontal())) {
                                var e_70 = h_4;
                                (h_4 = m_7), (m_7 = e_70);
                            }
                            var x_1 = p_7 < 0 ? "" + (1 + (1 - g_4) * p_7) : "" + (1 - (1 - g_4) * p_7), S_1 = "\n        translate3d(".concat(m_7, ", ").concat(h_4, ", ").concat(f_5, "px)\n        rotateZ(").concat(i.rotate ? (a ? -v_4 : v_4) : 0, "deg)\n        scale(").concat(x_1, ")\n      ");
                            if (i.slideShadows) {
                                var e_71 = d_7.querySelector(".swiper-slide-shadow");
                                e_71 || (e_71 = de("cards", d_7)),
                                    e_71 &&
                                        (e_71.style.opacity = Math.min(Math.max((Math.abs(p_7) - 0.5) / 0.5, 0), 1));
                            }
                            d_7.style.zIndex = -Math.abs(Math.round(c_5)) + e.length;
                            le(0, d_7).style.transform = S_1;
                        }
                    },
                    setTransition: function (e) {
                        var s = t.slides.map(function (e) { return m(e); });
                        s.forEach(function (t) {
                            (t.style.transitionDuration = "".concat(e, "ms")),
                                t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
                                    t.style.transitionDuration = "".concat(e, "ms");
                                });
                        }),
                            oe({ swiper: t, duration: e, transformElements: s });
                    },
                    perspective: function () { return !0; },
                    overwriteParams: function () { return ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode,
                    }); },
                });
        },
    ];
    return Q.use(ce), Q;
})();
//# sourceMappingURL=swiper-bundle.min.js.map
