/*!
 * Webflow: Front-end site library
 * @license 
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var kv = Object.create;
    var Cn = Object.defineProperty;
    var Bv = Object.getOwnPropertyDescriptor;
    var Hv = Object.getOwnPropertyNames;
    var Wv = Object.getPrototypeOf
      , zv = Object.prototype.hasOwnProperty;
    var Ee = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var f = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Le = (e, t) => {
        for (var n in t)
            Cn(e, n, {
                get: t[n],
                enumerable: !0
            })
    }
      , da = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Hv(t))
                !zv.call(e, i) && i !== n && Cn(e, i, {
                    get: () => t[i],
                    enumerable: !(r = Bv(t, i)) || r.enumerable
                });
        return e
    }
    ;
    var de = (e, t, n) => (n = e != null ? kv(Wv(e)) : {},
    da(t || !e || !e.__esModule ? Cn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , Ye = e => da(Cn({}, "__esModule", {
        value: !0
    }), e);
    var Kr = f( () => {
        "use strict";
        window.tram = function(e) {
            function t(c, E) {
                var T = new se.Bare;
                return T.init(c, E)
            }
            function n(c) {
                return c.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }
            function r(c) {
                var E = parseInt(c.slice(1), 16)
                  , T = E >> 16 & 255
                  , S = E >> 8 & 255
                  , P = 255 & E;
                return [T, S, P]
            }
            function i(c, E, T) {
                return "#" + (1 << 24 | c << 16 | E << 8 | T).toString(16).slice(1)
            }
            function o() {}
            function a(c, E) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof E + "] " + E)
            }
            function s(c, E, T) {
                l("Units do not match [" + c + "]: " + E + ", " + T)
            }
            function u(c, E, T) {
                if (E !== void 0 && (T = E),
                c === void 0)
                    return T;
                var S = T;
                return ut.test(c) || !je.test(c) ? S = parseInt(c, 10) : je.test(c) && (S = 1e3 * parseFloat(c)),
                0 > S && (S = 0),
                S === S ? S : T
            }
            function l(c) {
                z.debug && window && window.console.warn(c)
            }
            function v(c) {
                for (var E = -1, T = c ? c.length : 0, S = []; ++E < T; ) {
                    var P = c[E];
                    P && S.push(P)
                }
                return S
            }
            var h = function(c, E, T) {
                function S(oe) {
                    return typeof oe == "object"
                }
                function P(oe) {
                    return typeof oe == "function"
                }
                function C() {}
                function ee(oe, te) {
                    function V() {
                        var Se = new ae;
                        return P(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function ae() {}
                    te === T && (te = oe,
                    oe = Object),
                    V.Bare = ae;
                    var ue, _e = C[c] = oe[c], Fe = ae[c] = V[c] = new C;
                    return Fe.constructor = V,
                    V.mixin = function(Se) {
                        return ae[c] = V[c] = ee(V, Se)[c],
                        V
                    }
                    ,
                    V.open = function(Se) {
                        if (ue = {},
                        P(Se) ? ue = Se.call(V, Fe, _e, V, oe) : S(Se) && (ue = Se),
                        S(ue))
                            for (var Jt in ue)
                                E.call(ue, Jt) && (Fe[Jt] = ue[Jt]);
                        return P(Fe.init) || (Fe.init = oe),
                        V
                    }
                    ,
                    V.open(te)
                }
                return ee
            }("prototype", {}.hasOwnProperty)
              , p = {
                ease: ["ease", function(c, E, T, S) {
                    var P = (c /= S) * c
                      , C = P * c;
                    return E + T * (-2.75 * C * P + 11 * P * P + -15.5 * C + 8 * P + .25 * c)
                }
                ],
                "ease-in": ["ease-in", function(c, E, T, S) {
                    var P = (c /= S) * c
                      , C = P * c;
                    return E + T * (-1 * C * P + 3 * P * P + -3 * C + 2 * P)
                }
                ],
                "ease-out": ["ease-out", function(c, E, T, S) {
                    var P = (c /= S) * c
                      , C = P * c;
                    return E + T * (.3 * C * P + -1.6 * P * P + 2.2 * C + -1.8 * P + 1.9 * c)
                }
                ],
                "ease-in-out": ["ease-in-out", function(c, E, T, S) {
                    var P = (c /= S) * c
                      , C = P * c;
                    return E + T * (2 * C * P + -5 * P * P + 2 * C + 2 * P)
                }
                ],
                linear: ["linear", function(c, E, T, S) {
                    return T * c / S + E
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, E, T, S) {
                    return T * (c /= S) * c + E
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, E, T, S) {
                    return -T * (c /= S) * (c - 2) + E
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, E, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c + E : -T / 2 * (--c * (c - 2) - 1) + E
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, E, T, S) {
                    return T * (c /= S) * c * c + E
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, E, T, S) {
                    return T * ((c = c / S - 1) * c * c + 1) + E
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, E, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c + E : T / 2 * ((c -= 2) * c * c + 2) + E
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, E, T, S) {
                    return T * (c /= S) * c * c * c + E
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, E, T, S) {
                    return -T * ((c = c / S - 1) * c * c * c - 1) + E
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, E, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c * c + E : -T / 2 * ((c -= 2) * c * c * c - 2) + E
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, E, T, S) {
                    return T * (c /= S) * c * c * c * c + E
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, E, T, S) {
                    return T * ((c = c / S - 1) * c * c * c * c + 1) + E
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, E, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c * c * c + E : T / 2 * ((c -= 2) * c * c * c * c + 2) + E
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, E, T, S) {
                    return -T * Math.cos(c / S * (Math.PI / 2)) + T + E
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, E, T, S) {
                    return T * Math.sin(c / S * (Math.PI / 2)) + E
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, E, T, S) {
                    return -T / 2 * (Math.cos(Math.PI * c / S) - 1) + E
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, E, T, S) {
                    return c === 0 ? E : T * Math.pow(2, 10 * (c / S - 1)) + E
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, E, T, S) {
                    return c === S ? E + T : T * (-Math.pow(2, -10 * c / S) + 1) + E
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, E, T, S) {
                    return c === 0 ? E : c === S ? E + T : (c /= S / 2) < 1 ? T / 2 * Math.pow(2, 10 * (c - 1)) + E : T / 2 * (-Math.pow(2, -10 * --c) + 2) + E
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, E, T, S) {
                    return -T * (Math.sqrt(1 - (c /= S) * c) - 1) + E
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, E, T, S) {
                    return T * Math.sqrt(1 - (c = c / S - 1) * c) + E
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, E, T, S) {
                    return (c /= S / 2) < 1 ? -T / 2 * (Math.sqrt(1 - c * c) - 1) + E : T / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + E
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, E, T, S, P) {
                    return P === void 0 && (P = 1.70158),
                    T * (c /= S) * c * ((P + 1) * c - P) + E
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, E, T, S, P) {
                    return P === void 0 && (P = 1.70158),
                    T * ((c = c / S - 1) * c * ((P + 1) * c + P) + 1) + E
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, E, T, S, P) {
                    return P === void 0 && (P = 1.70158),
                    (c /= S / 2) < 1 ? T / 2 * c * c * (((P *= 1.525) + 1) * c - P) + E : T / 2 * ((c -= 2) * c * (((P *= 1.525) + 1) * c + P) + 2) + E
                }
                ]
            }
              , g = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , _ = document
              , y = window
              , A = "bkwld-tram"
              , m = /[\-\.0-9]/g
              , O = /[A-Z]/
              , w = "number"
              , x = /^(rgb|#)/
              , L = /(em|cm|mm|in|pt|pc|px)$/
              , R = /(em|cm|mm|in|pt|pc|px|%)$/
              , B = /(deg|rad|turn)$/
              , K = "unitless"
              , j = /(all|none) 0s ease 0s/
              , Q = /^(width|height)$/
              , ne = " "
              , F = _.createElement("a")
              , b = ["Webkit", "Moz", "O", "ms"]
              , N = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , Y = function(c) {
                if (c in F.style)
                    return {
                        dom: c,
                        css: c
                    };
                var E, T, S = "", P = c.split("-");
                for (E = 0; E < P.length; E++)
                    S += P[E].charAt(0).toUpperCase() + P[E].slice(1);
                for (E = 0; E < b.length; E++)
                    if (T = b[E] + S,
                    T in F.style)
                        return {
                            dom: T,
                            css: N[E] + c
                        }
            }
              , k = t.support = {
                bind: Function.prototype.bind,
                transform: Y("transform"),
                transition: Y("transition"),
                backface: Y("backface-visibility"),
                timing: Y("transition-timing-function")
            };
            if (k.transition) {
                var D = k.timing.dom;
                if (F.style[D] = p["ease-in-back"][0],
                !F.style[D])
                    for (var M in g)
                        p[M][0] = g[M]
            }
            var W = t.frame = function() {
                var c = y.requestAnimationFrame || y.webkitRequestAnimationFrame || y.mozRequestAnimationFrame || y.oRequestAnimationFrame || y.msRequestAnimationFrame;
                return c && k.bind ? c.bind(y) : function(E) {
                    y.setTimeout(E, 16)
                }
            }()
              , ce = t.now = function() {
                var c = y.performance
                  , E = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return E && k.bind ? E.bind(c) : Date.now || function() {
                    return +new Date
                }
            }()
              , fe = h(function(c) {
                function E(re, le) {
                    var ye = v(("" + re).split(ne))
                      , pe = ye[0];
                    le = le || {};
                    var Oe = H[pe];
                    if (!Oe)
                        return l("Unsupported property: " + pe);
                    if (!le.weak || !this.props[pe]) {
                        var Ve = Oe[0]
                          , Pe = this.props[pe];
                        return Pe || (Pe = this.props[pe] = new Ve.Bare),
                        Pe.init(this.$el, ye, Oe, le),
                        Pe
                    }
                }
                function T(re, le, ye) {
                    if (re) {
                        var pe = typeof re;
                        if (le || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        pe == "number" && le)
                            return this.timer = new Z({
                                duration: re,
                                context: this,
                                complete: C
                            }),
                            void (this.active = !0);
                        if (pe == "string" && le) {
                            switch (re) {
                            case "hide":
                                V.call(this);
                                break;
                            case "stop":
                                ee.call(this);
                                break;
                            case "redraw":
                                ae.call(this);
                                break;
                            default:
                                E.call(this, re, ye && ye[1])
                            }
                            return C.call(this)
                        }
                        if (pe == "function")
                            return void re.call(this, this);
                        if (pe == "object") {
                            var Oe = 0;
                            Fe.call(this, re, function(Ie, Uv) {
                                Ie.span > Oe && (Oe = Ie.span),
                                Ie.stop(),
                                Ie.animate(Uv)
                            }, function(Ie) {
                                "wait"in Ie && (Oe = u(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Oe > 0 && (this.timer = new Z({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            le && (this.timer.complete = C));
                            var Ve = this
                              , Pe = !1
                              , Rn = {};
                            W(function() {
                                Fe.call(Ve, re, function(Ie) {
                                    Ie.active && (Pe = !0,
                                    Rn[Ie.name] = Ie.nextStyle)
                                }),
                                Pe && Ve.$el.css(Rn)
                            })
                        }
                    }
                }
                function S(re) {
                    re = u(re, 0),
                    this.active ? this.queue.push({
                        options: re
                    }) : (this.timer = new Z({
                        duration: re,
                        context: this,
                        complete: C
                    }),
                    this.active = !0)
                }
                function P(re) {
                    return this.active ? (this.queue.push({
                        options: re,
                        args: arguments
                    }),
                    void (this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function C() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var re = this.queue.shift();
                        T.call(this, re.options, !0, re.args)
                    }
                }
                function ee(re) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var le;
                    typeof re == "string" ? (le = {},
                    le[re] = 1) : le = typeof re == "object" && re != null ? re : this.props,
                    Fe.call(this, le, Se),
                    _e.call(this)
                }
                function oe(re) {
                    ee.call(this, re),
                    Fe.call(this, re, Jt, Xv)
                }
                function te(re) {
                    typeof re != "string" && (re = "block"),
                    this.el.style.display = re
                }
                function V() {
                    ee.call(this),
                    this.el.style.display = "none"
                }
                function ae() {
                    this.el.offsetHeight
                }
                function ue() {
                    ee.call(this),
                    e.removeData(this.el, A),
                    this.$el = this.el = null
                }
                function _e() {
                    var re, le, ye = [];
                    this.upstream && ye.push(this.upstream);
                    for (re in this.props)
                        le = this.props[re],
                        le.active && ye.push(le.string);
                    ye = ye.join(","),
                    this.style !== ye && (this.style = ye,
                    this.el.style[k.transition.dom] = ye)
                }
                function Fe(re, le, ye) {
                    var pe, Oe, Ve, Pe, Rn = le !== Se, Ie = {};
                    for (pe in re)
                        Ve = re[pe],
                        pe in he ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[pe] = Ve) : (O.test(pe) && (pe = n(pe)),
                        pe in H ? Ie[pe] = Ve : (Pe || (Pe = {}),
                        Pe[pe] = Ve));
                    for (pe in Ie) {
                        if (Ve = Ie[pe],
                        Oe = this.props[pe],
                        !Oe) {
                            if (!Rn)
                                continue;
                            Oe = E.call(this, pe)
                        }
                        le.call(this, Oe, Ve)
                    }
                    ye && Pe && ye.call(this, Pe)
                }
                function Se(re) {
                    re.stop()
                }
                function Jt(re, le) {
                    re.set(le)
                }
                function Xv(re) {
                    this.$el.css(re)
                }
                function Xe(re, le) {
                    c[re] = function() {
                        return this.children ? Vv.call(this, le, arguments) : (this.el && le.apply(this, arguments),
                        this)
                    }
                }
                function Vv(re, le) {
                    var ye, pe = this.children.length;
                    for (ye = 0; pe > ye; ye++)
                        re.apply(this.children[ye], le);
                    return this
                }
                c.init = function(re) {
                    if (this.$el = e(re),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    z.keepInherited && !z.fallback) {
                        var le = q(this.el, "transition");
                        le && !j.test(le) && (this.upstream = le)
                    }
                    k.backface && z.hideBackface && d(this.el, k.backface.css, "hidden")
                }
                ,
                Xe("add", E),
                Xe("start", T),
                Xe("wait", S),
                Xe("then", P),
                Xe("next", C),
                Xe("stop", ee),
                Xe("set", oe),
                Xe("show", te),
                Xe("hide", V),
                Xe("redraw", ae),
                Xe("destroy", ue)
            })
              , se = h(fe, function(c) {
                function E(T, S) {
                    var P = e.data(T, A) || e.data(T, A, new fe.Bare);
                    return P.el || P.init(T),
                    S ? P.start(S) : P
                }
                c.init = function(T, S) {
                    var P = e(T);
                    if (!P.length)
                        return this;
                    if (P.length === 1)
                        return E(P[0], S);
                    var C = [];
                    return P.each(function(ee, oe) {
                        C.push(E(oe, S))
                    }),
                    this.children = C,
                    this
                }
            })
              , I = h(function(c) {
                function E() {
                    var C = this.get();
                    this.update("auto");
                    var ee = this.get();
                    return this.update(C),
                    ee
                }
                function T(C, ee, oe) {
                    return ee !== void 0 && (oe = ee),
                    C in p ? C : oe
                }
                function S(C) {
                    var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                    return (ee ? i(ee[1], ee[2], ee[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var P = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                c.init = function(C, ee, oe, te) {
                    this.$el = C,
                    this.el = C[0];
                    var V = ee[0];
                    oe[2] && (V = oe[2]),
                    J[V] && (V = J[V]),
                    this.name = V,
                    this.type = oe[1],
                    this.duration = u(ee[1], this.duration, P.duration),
                    this.ease = T(ee[2], this.ease, P.ease),
                    this.delay = u(ee[3], this.delay, P.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Q.test(this.name),
                    this.unit = te.unit || this.unit || z.defaultUnit,
                    this.angle = te.angle || this.angle || z.defaultAngle,
                    z.fallback || te.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + ne + this.duration + "ms" + (this.ease != "ease" ? ne + p[this.ease][0] : "") + (this.delay ? ne + this.delay + "ms" : ""))
                }
                ,
                c.set = function(C) {
                    C = this.convert(C, this.type),
                    this.update(C),
                    this.redraw()
                }
                ,
                c.transition = function(C) {
                    this.active = !0,
                    C = this.convert(C, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    C == "auto" && (C = E.call(this))),
                    this.nextStyle = C
                }
                ,
                c.fallback = function(C) {
                    var ee = this.el.style[this.name] || this.convert(this.get(), this.type);
                    C = this.convert(C, this.type),
                    this.auto && (ee == "auto" && (ee = this.convert(this.get(), this.type)),
                    C == "auto" && (C = E.call(this))),
                    this.tween = new $({
                        from: ee,
                        to: C,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.get = function() {
                    return q(this.el, this.name)
                }
                ,
                c.update = function(C) {
                    d(this.el, this.name, C)
                }
                ,
                c.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    d(this.el, this.name, this.get()));
                    var C = this.tween;
                    C && C.context && C.destroy()
                }
                ,
                c.convert = function(C, ee) {
                    if (C == "auto" && this.auto)
                        return C;
                    var oe, te = typeof C == "number", V = typeof C == "string";
                    switch (ee) {
                    case w:
                        if (te)
                            return C;
                        if (V && C.replace(m, "") === "")
                            return +C;
                        oe = "number(unitless)";
                        break;
                    case x:
                        if (V) {
                            if (C === "" && this.original)
                                return this.original;
                            if (ee.test(C))
                                return C.charAt(0) == "#" && C.length == 7 ? C : S(C)
                        }
                        oe = "hex or rgb string";
                        break;
                    case L:
                        if (te)
                            return C + this.unit;
                        if (V && ee.test(C))
                            return C;
                        oe = "number(px) or string(unit)";
                        break;
                    case R:
                        if (te)
                            return C + this.unit;
                        if (V && ee.test(C))
                            return C;
                        oe = "number(px) or string(unit or %)";
                        break;
                    case B:
                        if (te)
                            return C + this.angle;
                        if (V && ee.test(C))
                            return C;
                        oe = "number(deg) or string(angle)";
                        break;
                    case K:
                        if (te || V && R.test(C))
                            return C;
                        oe = "number(unitless) or string(unit or %)"
                    }
                    return a(oe, C),
                    C
                }
                ,
                c.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , U = h(I, function(c, E) {
                c.init = function() {
                    E.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), x))
                }
            })
              , G = h(I, function(c, E) {
                c.init = function() {
                    E.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                c.get = function() {
                    return this.$el[this.name]()
                }
                ,
                c.update = function(T) {
                    this.$el[this.name](T)
                }
            })
              , X = h(I, function(c, E) {
                function T(S, P) {
                    var C, ee, oe, te, V;
                    for (C in S)
                        te = he[C],
                        oe = te[0],
                        ee = te[1] || C,
                        V = this.convert(S[C], oe),
                        P.call(this, ee, V, oe)
                }
                c.init = function() {
                    E.init.apply(this, arguments),
                    this.current || (this.current = {},
                    he.perspective && z.perspective && (this.current.perspective = z.perspective,
                    d(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                c.set = function(S) {
                    T.call(this, S, function(P, C) {
                        this.current[P] = C
                    }),
                    d(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                c.transition = function(S) {
                    var P = this.values(S);
                    this.tween = new ie({
                        current: this.current,
                        values: P,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var C, ee = {};
                    for (C in this.current)
                        ee[C] = C in P ? P[C] : this.current[C];
                    this.active = !0,
                    this.nextStyle = this.style(ee)
                }
                ,
                c.fallback = function(S) {
                    var P = this.values(S);
                    this.tween = new ie({
                        current: this.current,
                        values: P,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.update = function() {
                    d(this.el, this.name, this.style(this.current))
                }
                ,
                c.style = function(S) {
                    var P, C = "";
                    for (P in S)
                        C += P + "(" + S[P] + ") ";
                    return C
                }
                ,
                c.values = function(S) {
                    var P, C = {};
                    return T.call(this, S, function(ee, oe, te) {
                        C[ee] = oe,
                        this.current[ee] === void 0 && (P = 0,
                        ~ee.indexOf("scale") && (P = 1),
                        this.current[ee] = this.convert(P, te))
                    }),
                    C
                }
            })
              , $ = h(function(c) {
                function E(V) {
                    oe.push(V) === 1 && W(T)
                }
                function T() {
                    var V, ae, ue, _e = oe.length;
                    if (_e)
                        for (W(T),
                        ae = ce(),
                        V = _e; V--; )
                            ue = oe[V],
                            ue && ue.render(ae)
                }
                function S(V) {
                    var ae, ue = e.inArray(V, oe);
                    ue >= 0 && (ae = oe.slice(ue + 1),
                    oe.length = ue,
                    ae.length && (oe = oe.concat(ae)))
                }
                function P(V) {
                    return Math.round(V * te) / te
                }
                function C(V, ae, ue) {
                    return i(V[0] + ue * (ae[0] - V[0]), V[1] + ue * (ae[1] - V[1]), V[2] + ue * (ae[2] - V[2]))
                }
                var ee = {
                    ease: p.ease[1],
                    from: 0,
                    to: 1
                };
                c.init = function(V) {
                    this.duration = V.duration || 0,
                    this.delay = V.delay || 0;
                    var ae = V.ease || ee.ease;
                    p[ae] && (ae = p[ae][1]),
                    typeof ae != "function" && (ae = ee.ease),
                    this.ease = ae,
                    this.update = V.update || o,
                    this.complete = V.complete || o,
                    this.context = V.context || this,
                    this.name = V.name;
                    var ue = V.from
                      , _e = V.to;
                    ue === void 0 && (ue = ee.from),
                    _e === void 0 && (_e = ee.to),
                    this.unit = V.unit || "",
                    typeof ue == "number" && typeof _e == "number" ? (this.begin = ue,
                    this.change = _e - ue) : this.format(_e, ue),
                    this.value = this.begin + this.unit,
                    this.start = ce(),
                    V.autoplay !== !1 && this.play()
                }
                ,
                c.play = function() {
                    this.active || (this.start || (this.start = ce()),
                    this.active = !0,
                    E(this))
                }
                ,
                c.stop = function() {
                    this.active && (this.active = !1,
                    S(this))
                }
                ,
                c.render = function(V) {
                    var ae, ue = V - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var _e = this.ease(ue, 0, 1, this.duration);
                        return ae = this.startRGB ? C(this.startRGB, this.endRGB, _e) : P(this.begin + _e * this.change),
                        this.value = ae + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ae = this.endHex || this.begin + this.change,
                    this.value = ae + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                c.format = function(V, ae) {
                    if (ae += "",
                    V += "",
                    V.charAt(0) == "#")
                        return this.startRGB = r(ae),
                        this.endRGB = r(V),
                        this.endHex = V,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = ae.replace(m, "")
                          , _e = V.replace(m, "");
                        ue !== _e && s("tween", ae, V),
                        this.unit = ue
                    }
                    ae = parseFloat(ae),
                    V = parseFloat(V),
                    this.begin = this.value = ae,
                    this.change = V - ae
                }
                ,
                c.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var oe = []
                  , te = 1e3
            })
              , Z = h($, function(c) {
                c.init = function(E) {
                    this.duration = E.duration || 0,
                    this.complete = E.complete || o,
                    this.context = E.context,
                    this.play()
                }
                ,
                c.render = function(E) {
                    var T = E - this.start;
                    T < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , ie = h($, function(c, E) {
                c.init = function(T) {
                    this.context = T.context,
                    this.update = T.update,
                    this.tweens = [],
                    this.current = T.current;
                    var S, P;
                    for (S in T.values)
                        P = T.values[S],
                        this.current[S] !== P && this.tweens.push(new $({
                            name: S,
                            from: this.current[S],
                            to: P,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                c.render = function(T) {
                    var S, P, C = this.tweens.length, ee = !1;
                    for (S = C; S--; )
                        P = this.tweens[S],
                        P.context && (P.render(T),
                        this.current[P.name] = P.value,
                        ee = !0);
                    return ee ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                c.destroy = function() {
                    if (E.destroy.call(this),
                    this.tweens) {
                        var T, S = this.tweens.length;
                        for (T = S; T--; )
                            this.tweens[T].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , z = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !k.transition,
                agentTests: []
            };
            t.fallback = function(c) {
                if (!k.transition)
                    return z.fallback = !0;
                z.agentTests.push("(" + c + ")");
                var E = new RegExp(z.agentTests.join("|"),"i");
                z.fallback = E.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(c) {
                return new $(c)
            }
            ,
            t.delay = function(c, E, T) {
                return new Z({
                    complete: E,
                    duration: c,
                    context: T
                })
            }
            ,
            e.fn.tram = function(c) {
                return t.call(null, this, c)
            }
            ;
            var d = e.style
              , q = e.css
              , J = {
                transform: k.transform && k.transform.css
            }
              , H = {
                color: [U, x],
                background: [U, x, "background-color"],
                "outline-color": [U, x],
                "border-color": [U, x],
                "border-top-color": [U, x],
                "border-right-color": [U, x],
                "border-bottom-color": [U, x],
                "border-left-color": [U, x],
                "border-width": [I, L],
                "border-top-width": [I, L],
                "border-right-width": [I, L],
                "border-bottom-width": [I, L],
                "border-left-width": [I, L],
                "border-spacing": [I, L],
                "letter-spacing": [I, L],
                margin: [I, L],
                "margin-top": [I, L],
                "margin-right": [I, L],
                "margin-bottom": [I, L],
                "margin-left": [I, L],
                padding: [I, L],
                "padding-top": [I, L],
                "padding-right": [I, L],
                "padding-bottom": [I, L],
                "padding-left": [I, L],
                "outline-width": [I, L],
                opacity: [I, w],
                top: [I, R],
                right: [I, R],
                bottom: [I, R],
                left: [I, R],
                "font-size": [I, R],
                "text-indent": [I, R],
                "word-spacing": [I, R],
                width: [I, R],
                "min-width": [I, R],
                "max-width": [I, R],
                height: [I, R],
                "min-height": [I, R],
                "max-height": [I, R],
                "line-height": [I, K],
                "scroll-top": [G, w, "scrollTop"],
                "scroll-left": [G, w, "scrollLeft"]
            }
              , he = {};
            k.transform && (H.transform = [X],
            he = {
                x: [R, "translateX"],
                y: [R, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }),
            k.transform && k.backface && (he.z = [R, "translateZ"],
            he.rotateZ = [B],
            he.scaleZ = [w],
            he.perspective = [L]);
            var ut = /ms/
              , je = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ga = f( (OF, pa) => {
        "use strict";
        var Kv = window.$
          , jv = Kr() && Kv.tram;
        pa.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , n = Array.prototype
              , r = Object.prototype
              , i = Function.prototype
              , o = n.push
              , a = n.slice
              , s = n.concat
              , u = r.toString
              , l = r.hasOwnProperty
              , v = n.forEach
              , h = n.map
              , p = n.reduce
              , g = n.reduceRight
              , _ = n.filter
              , y = n.every
              , A = n.some
              , m = n.indexOf
              , O = n.lastIndexOf
              , w = Array.isArray
              , x = Object.keys
              , L = i.bind
              , R = e.each = e.forEach = function(b, N, Y) {
                if (b == null)
                    return b;
                if (v && b.forEach === v)
                    b.forEach(N, Y);
                else if (b.length === +b.length) {
                    for (var k = 0, D = b.length; k < D; k++)
                        if (N.call(Y, b[k], k, b) === t)
                            return
                } else
                    for (var M = e.keys(b), k = 0, D = M.length; k < D; k++)
                        if (N.call(Y, b[M[k]], M[k], b) === t)
                            return;
                return b
            }
            ;
            e.map = e.collect = function(b, N, Y) {
                var k = [];
                return b == null ? k : h && b.map === h ? b.map(N, Y) : (R(b, function(D, M, W) {
                    k.push(N.call(Y, D, M, W))
                }),
                k)
            }
            ,
            e.find = e.detect = function(b, N, Y) {
                var k;
                return B(b, function(D, M, W) {
                    if (N.call(Y, D, M, W))
                        return k = D,
                        !0
                }),
                k
            }
            ,
            e.filter = e.select = function(b, N, Y) {
                var k = [];
                return b == null ? k : _ && b.filter === _ ? b.filter(N, Y) : (R(b, function(D, M, W) {
                    N.call(Y, D, M, W) && k.push(D)
                }),
                k)
            }
            ;
            var B = e.some = e.any = function(b, N, Y) {
                N || (N = e.identity);
                var k = !1;
                return b == null ? k : A && b.some === A ? b.some(N, Y) : (R(b, function(D, M, W) {
                    if (k || (k = N.call(Y, D, M, W)))
                        return t
                }),
                !!k)
            }
            ;
            e.contains = e.include = function(b, N) {
                return b == null ? !1 : m && b.indexOf === m ? b.indexOf(N) != -1 : B(b, function(Y) {
                    return Y === N
                })
            }
            ,
            e.delay = function(b, N) {
                var Y = a.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, Y)
                }, N)
            }
            ,
            e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(b) {
                var N, Y, k;
                return function() {
                    N || (N = !0,
                    Y = arguments,
                    k = this,
                    jv.frame(function() {
                        N = !1,
                        b.apply(k, Y)
                    }))
                }
            }
            ,
            e.debounce = function(b, N, Y) {
                var k, D, M, W, ce, fe = function() {
                    var se = e.now() - W;
                    se < N ? k = setTimeout(fe, N - se) : (k = null,
                    Y || (ce = b.apply(M, D),
                    M = D = null))
                };
                return function() {
                    M = this,
                    D = arguments,
                    W = e.now();
                    var se = Y && !k;
                    return k || (k = setTimeout(fe, N)),
                    se && (ce = b.apply(M, D),
                    M = D = null),
                    ce
                }
            }
            ,
            e.defaults = function(b) {
                if (!e.isObject(b))
                    return b;
                for (var N = 1, Y = arguments.length; N < Y; N++) {
                    var k = arguments[N];
                    for (var D in k)
                        b[D] === void 0 && (b[D] = k[D])
                }
                return b
            }
            ,
            e.keys = function(b) {
                if (!e.isObject(b))
                    return [];
                if (x)
                    return x(b);
                var N = [];
                for (var Y in b)
                    e.has(b, Y) && N.push(Y);
                return N
            }
            ,
            e.has = function(b, N) {
                return l.call(b, N)
            }
            ,
            e.isObject = function(b) {
                return b === Object(b)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/
              , j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Q = /\\|'|\r|\n|\u2028|\u2029/g
              , ne = function(b) {
                return "\\" + j[b]
            }
              , F = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, N, Y) {
                !N && Y && (N = Y),
                N = e.defaults({}, N, e.templateSettings);
                var k = RegExp([(N.escape || K).source, (N.interpolate || K).source, (N.evaluate || K).source].join("|") + "|$", "g")
                  , D = 0
                  , M = "__p+='";
                b.replace(k, function(se, I, U, G, X) {
                    return M += b.slice(D, X).replace(Q, ne),
                    D = X + se.length,
                    I ? M += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : U ? M += `'+
((__t=(` + U + `))==null?'':__t)+
'` : G && (M += `';
` + G + `
__p+='`),
                    se
                }),
                M += `';
`;
                var W = N.variable;
                if (W) {
                    if (!F.test(W))
                        throw new Error("variable is not a bare identifier: " + W)
                } else
                    M = `with(obj||{}){
` + M + `}
`,
                    W = "obj";
                M = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + M + `return __p;
`;
                var ce;
                try {
                    ce = new Function(N.variable || "obj","_",M)
                } catch (se) {
                    throw se.source = M,
                    se
                }
                var fe = function(se) {
                    return ce.call(this, se, e)
                };
                return fe.source = "function(" + W + `){
` + M + "}",
                fe
            }
            ,
            e
        }()
    }
    );
    var qe = f( (xF, Ta) => {
        "use strict";
        var ge = {}
          , At = {}
          , wt = []
          , Yr = window.Webflow || []
          , ct = window.jQuery
          , ke = ct(window)
          , Yv = ct(document)
          , Qe = ct.isFunction
          , Ue = ge._ = ga()
          , va = ge.tram = Kr() && ct.tram
          , Ln = !1
          , Qr = !1;
        va.config.hideBackface = !1;
        va.config.keepInherited = !0;
        ge.define = function(e, t, n) {
            At[e] && ya(At[e]);
            var r = At[e] = t(ct, Ue, n) || {};
            return Ea(r),
            r
        }
        ;
        ge.require = function(e) {
            return At[e]
        }
        ;
        function Ea(e) {
            ge.env() && (Qe(e.design) && ke.on("__wf_design", e.design),
            Qe(e.preview) && ke.on("__wf_preview", e.preview)),
            Qe(e.destroy) && ke.on("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && Qv(e)
        }
        function Qv(e) {
            if (Ln) {
                e.ready();
                return
            }
            Ue.contains(wt, e.ready) || wt.push(e.ready)
        }
        function ya(e) {
            Qe(e.design) && ke.off("__wf_design", e.design),
            Qe(e.preview) && ke.off("__wf_preview", e.preview),
            Qe(e.destroy) && ke.off("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && $v(e)
        }
        function $v(e) {
            wt = Ue.filter(wt, function(t) {
                return t !== e.ready
            })
        }
        ge.push = function(e) {
            if (Ln) {
                Qe(e) && e();
                return
            }
            Yr.push(e)
        }
        ;
        ge.env = function(e) {
            var t = window.__wf_design
              , n = typeof t < "u";
            if (!e)
                return n;
            if (e === "design")
                return n && t;
            if (e === "preview")
                return n && !t;
            if (e === "slug")
                return n && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Pn = navigator.userAgent.toLowerCase()
          , ma = ge.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Zv = ge.env.chrome = /chrome/.test(Pn) && /Google/.test(navigator.vendor) && parseInt(Pn.match(/chrome\/(\d+)\./)[1], 10)
          , Jv = ge.env.ios = /(ipod|iphone|ipad)/.test(Pn);
        ge.env.safari = /safari/.test(Pn) && !Zv && !Jv;
        var jr;
        ma && Yv.on("touchstart mousedown", function(e) {
            jr = e.target
        });
        ge.validClick = ma ? function(e) {
            return e === jr || ct.contains(e, jr)
        }
        : function() {
            return !0
        }
        ;
        var _a = "resize.webflow orientationchange.webflow load.webflow"
          , eE = "scroll.webflow " + _a;
        ge.resize = $r(ke, _a);
        ge.scroll = $r(ke, eE);
        ge.redraw = $r();
        function $r(e, t) {
            var n = []
              , r = {};
            return r.up = Ue.throttle(function(i) {
                Ue.each(n, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, r.up),
            r.on = function(i) {
                typeof i == "function" && (Ue.contains(n, i) || n.push(i))
            }
            ,
            r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = Ue.filter(n, function(o) {
                    return o !== i
                })
            }
            ,
            r
        }
        ge.location = function(e) {
            window.location = e
        }
        ;
        ge.env() && (ge.location = function() {}
        );
        ge.ready = function() {
            Ln = !0,
            Qr ? tE() : Ue.each(wt, ha),
            Ue.each(Yr, ha),
            ge.resize.up()
        }
        ;
        function ha(e) {
            Qe(e) && e()
        }
        function tE() {
            Qr = !1,
            Ue.each(At, Ea)
        }
        var vt;
        ge.load = function(e) {
            vt.then(e)
        }
        ;
        function Ia() {
            vt && (vt.reject(),
            ke.off("load", vt.resolve)),
            vt = new ct.Deferred,
            ke.on("load", vt.resolve)
        }
        ge.destroy = function(e) {
            e = e || {},
            Qr = !0,
            ke.triggerHandler("__wf_destroy"),
            e.domready != null && (Ln = e.domready),
            Ue.each(At, ya),
            ge.resize.off(),
            ge.scroll.off(),
            ge.redraw.off(),
            wt = [],
            Yr = [],
            vt.state() === "pending" && Ia()
        }
        ;
        ct(ge.ready);
        Ia();
        Ta.exports = window.Webflow = ge
    }
    );
    var wa = f( (RF, Aa) => {
        "use strict";
        var ba = qe();
        ba.define("brand", Aa.exports = function(e) {
            var t = {}, n = document, r = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var g = r.attr("data-wf-status")
                  , _ = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(_) && a.hostname !== _ && (g = !0),
                g && !s && (l = l || h(),
                p(),
                setTimeout(p, 500),
                e(n).off(u, v).on(u, v))
            }
            ;
            function v() {
                var g = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", g ? "display: none !important;" : "")
            }
            function h() {
                var g = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return g.append(_, y),
                g[0]
            }
            function p() {
                var g = i.children(o)
                  , _ = g.length && g.get(0) === l
                  , y = ba.env("editor");
                if (_) {
                    y && g.remove();
                    return
                }
                g.length && g.remove(),
                y || i.append(l)
            }
            return t
        }
        )
    }
    );
    var Oa = f( (CF, Sa) => {
        "use strict";
        var Zr = qe();
        Zr.define("edit", Sa.exports = function(e, t, n) {
            if (n = n || {},
            (Zr.env("test") || Zr.env("frame")) && !n.fixture && !nE())
                return {
                    exit: 1
                };
            var r = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = n.load || p, v = !1;
            try {
                v = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            v ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, h).triggerHandler(s);
            function h() {
                u || /\?edit/.test(a.hash) && l()
            }
            function p() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, h),
                O(function(x) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: g(x)
                    })
                })
            }
            function g(x) {
                return function(L) {
                    if (!L) {
                        console.error("Could not load editor data");
                        return
                    }
                    L.thirdPartyCookiesSupported = x,
                    _(A(L.scriptPath), function() {
                        window.WebflowEditor(L)
                    })
                }
            }
            function _(x, L) {
                e.ajax({
                    type: "GET",
                    url: x,
                    dataType: "script",
                    cache: !0
                }).then(L, y)
            }
            function y(x, L, R) {
                throw console.error("Could not load editor script: " + L),
                R
            }
            function A(x) {
                return x.indexOf("//") >= 0 ? x : m("https://editor-api.webflow.com" + x)
            }
            function m(x) {
                return x.replace(/([^:])\/\//g, "$1/")
            }
            function O(x) {
                var L = window.document.createElement("iframe");
                L.src = "https://webflow.com/site/third-party-cookie-check.html",
                L.style.display = "none",
                L.sandbox = "allow-scripts allow-same-origin";
                var R = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (w(L, R),
                    x(!1)) : B.data === "WF_third_party_cookies_supported" && (w(L, R),
                    x(!0))
                };
                L.onerror = function() {
                    w(L, R),
                    x(!1)
                }
                ,
                window.addEventListener("message", R, !1),
                window.document.body.appendChild(L)
            }
            function w(x, L) {
                window.removeEventListener("message", L, !1),
                x.remove()
            }
            return r
        }
        );
        function nE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ra = f( (PF, xa) => {
        "use strict";
        var rE = qe();
        rE.define("focus-visible", xa.exports = function() {
            function e(n) {
                var r = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList"in w && "contains"in w.classList)
                }
                function u(w) {
                    var x = w.type
                      , L = w.tagName;
                    return !!(L === "INPUT" && a[x] && !w.readOnly || L === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }
                function l(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }
                function v(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }
                function h(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (s(n.activeElement) && l(n.activeElement),
                    r = !0)
                }
                function p() {
                    r = !1
                }
                function g(w) {
                    s(w.target) && (r || u(w.target)) && l(w.target)
                }
                function _(w) {
                    s(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    v(w.target))
                }
                function y() {
                    document.visibilityState === "hidden" && (i && (r = !0),
                    A())
                }
                function A() {
                    document.addEventListener("mousemove", O),
                    document.addEventListener("mousedown", O),
                    document.addEventListener("mouseup", O),
                    document.addEventListener("pointermove", O),
                    document.addEventListener("pointerdown", O),
                    document.addEventListener("pointerup", O),
                    document.addEventListener("touchmove", O),
                    document.addEventListener("touchstart", O),
                    document.addEventListener("touchend", O)
                }
                function m() {
                    document.removeEventListener("mousemove", O),
                    document.removeEventListener("mousedown", O),
                    document.removeEventListener("mouseup", O),
                    document.removeEventListener("pointermove", O),
                    document.removeEventListener("pointerdown", O),
                    document.removeEventListener("pointerup", O),
                    document.removeEventListener("touchmove", O),
                    document.removeEventListener("touchstart", O),
                    document.removeEventListener("touchend", O)
                }
                function O(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (r = !1,
                    m())
                }
                document.addEventListener("keydown", h, !0),
                document.addEventListener("mousedown", p, !0),
                document.addEventListener("pointerdown", p, !0),
                document.addEventListener("touchstart", p, !0),
                document.addEventListener("visibilitychange", y, !0),
                A(),
                n.addEventListener("focus", g, !0),
                n.addEventListener("blur", _, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var La = f( (LF, Pa) => {
        "use strict";
        var Ca = qe();
        Ca.define("focus", Pa.exports = function() {
            var e = []
              , t = !1;
            function n(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function r(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                r(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ca.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Mn = f( (NF, Da) => {
        "use strict";
        var Jr = window.jQuery
          , $e = {}
          , Nn = []
          , Na = ".w-ix"
          , Dn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Jr(t).triggerHandler($e.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Jr(t).triggerHandler($e.types.OUTRO))
            }
        };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Na,
            OUTRO: "w-ix-outro" + Na
        };
        $e.init = function() {
            for (var e = Nn.length, t = 0; t < e; t++) {
                var n = Nn[t];
                n[0](0, n[1])
            }
            Nn = [],
            Jr.extend($e.triggers, Dn)
        }
        ;
        $e.async = function() {
            for (var e in Dn) {
                var t = Dn[e];
                Dn.hasOwnProperty(e) && ($e.triggers[e] = function(n, r) {
                    Nn.push([t, r])
                }
                )
            }
        }
        ;
        $e.async();
        Da.exports = $e
    }
    );
    var Fa = f( (DF, Ma) => {
        "use strict";
        var Be = qe()
          , Fn = Mn();
        Be.define("ix", Ma.exports = function(e, t) {
            var n = {}, r, i = e(window), o = ".w-ix", a = e.tram, s = Be.env, u = s(), l = s.chrome && s.chrome < 35, v = "none 0s ease 0s", h = e(), p = {}, g = [], _ = [], y = [], A, m = 1, O = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
            n.init = function(D) {
                setTimeout(function() {
                    w(D)
                }, 1)
            }
            ,
            n.preview = function() {
                r = !1,
                m = 100,
                setTimeout(function() {
                    w(window.__wf_ix)
                }, 1)
            }
            ,
            n.design = function() {
                r = !0,
                n.destroy()
            }
            ,
            n.destroy = function() {
                A = !0,
                h.each(K),
                Be.scroll.off(j),
                Fn.async(),
                g = [],
                _ = [],
                y = []
            }
            ,
            n.ready = function() {
                if (u)
                    return s("design") ? n.design() : n.preview();
                p && A && (A = !1,
                x())
            }
            ,
            n.run = F,
            n.style = u ? N : Y;
            function w(D) {
                D && (p = {},
                t.each(D, function(M) {
                    p[M.slug] = M.value
                }),
                x())
            }
            function x() {
                L(),
                Fn.init(),
                Be.redraw.up()
            }
            function L() {
                var D = e("[data-ix]");
                D.length && (D.each(K),
                D.each(R),
                g.length && (Be.scroll.on(j),
                setTimeout(j, 1)),
                _.length && Be.load(Q),
                y.length && setTimeout(ne, m))
            }
            function R(D, M) {
                var W = e(M)
                  , ce = W.attr("data-ix")
                  , fe = p[ce];
                if (fe) {
                    var se = fe.triggers;
                    se && (n.style(W, fe.style),
                    t.each(se, function(I) {
                        var U = {}
                          , G = I.type
                          , X = I.stepsB && I.stepsB.length;
                        function $() {
                            F(I, W, {
                                group: "A"
                            })
                        }
                        function Z() {
                            F(I, W, {
                                group: "B"
                            })
                        }
                        if (G === "load") {
                            I.preload && !u ? _.push($) : y.push($);
                            return
                        }
                        if (G === "click") {
                            W.on("click" + o, function(d) {
                                Be.validClick(d.currentTarget) && (W.attr("href") === "#" && d.preventDefault(),
                                F(I, W, {
                                    group: U.clicked ? "B" : "A"
                                }),
                                X && (U.clicked = !U.clicked))
                            }),
                            h = h.add(W);
                            return
                        }
                        if (G === "hover") {
                            W.on("mouseenter" + o, $),
                            W.on("mouseleave" + o, Z),
                            h = h.add(W);
                            return
                        }
                        if (G === "scroll") {
                            g.push({
                                el: W,
                                trigger: I,
                                state: {
                                    active: !1
                                },
                                offsetTop: B(I.offsetTop),
                                offsetBot: B(I.offsetBot)
                            });
                            return
                        }
                        var ie = O[G];
                        if (ie) {
                            var z = W.closest(ie);
                            z.on(Fn.types.INTRO, $).on(Fn.types.OUTRO, Z),
                            h = h.add(z);
                            return
                        }
                    }))
                }
            }
            function B(D) {
                if (!D)
                    return 0;
                D = String(D);
                var M = parseInt(D, 10);
                return M !== M ? 0 : (D.indexOf("%") > 0 && (M /= 100,
                M >= 1 && (M = .999)),
                M)
            }
            function K(D, M) {
                e(M).off(o)
            }
            function j() {
                for (var D = i.scrollTop(), M = i.height(), W = g.length, ce = 0; ce < W; ce++) {
                    var fe = g[ce]
                      , se = fe.el
                      , I = fe.trigger
                      , U = I.stepsB && I.stepsB.length
                      , G = fe.state
                      , X = se.offset().top
                      , $ = se.outerHeight()
                      , Z = fe.offsetTop
                      , ie = fe.offsetBot;
                    Z < 1 && Z > 0 && (Z *= M),
                    ie < 1 && ie > 0 && (ie *= M);
                    var z = X + $ - Z >= D && X + ie <= D + M;
                    z !== G.active && (z === !1 && !U || (G.active = z,
                    F(I, se, {
                        group: z ? "A" : "B"
                    })))
                }
            }
            function Q() {
                for (var D = _.length, M = 0; M < D; M++)
                    _[M]()
            }
            function ne() {
                for (var D = y.length, M = 0; M < D; M++)
                    y[M]()
            }
            function F(D, M, W, ce) {
                W = W || {};
                var fe = W.done
                  , se = D.preserve3d;
                if (r && !W.force)
                    return;
                var I = W.group || "A"
                  , U = D["loop" + I]
                  , G = D["steps" + I];
                if (!G || !G.length)
                    return;
                if (G.length < 2 && (U = !1),
                !ce) {
                    var X = D.selector;
                    X && (D.descend ? M = M.find(X) : D.siblings ? M = M.siblings(X) : M = e(X),
                    u && M.attr("data-ix-affect", 1)),
                    l && M.addClass("w-ix-emptyfix"),
                    se && M.css("transform-style", "preserve-3d")
                }
                for (var $ = a(M), Z = {
                    omit3d: !se
                }, ie = 0; ie < G.length; ie++)
                    b($, G[ie], Z);
                function z() {
                    if (U)
                        return F(D, M, W, !0);
                    Z.width === "auto" && $.set({
                        width: "auto"
                    }),
                    Z.height === "auto" && $.set({
                        height: "auto"
                    }),
                    fe && fe()
                }
                Z.start ? $.then(z) : z()
            }
            function b(D, M, W) {
                var ce = "add"
                  , fe = "start";
                W.start && (ce = fe = "then");
                var se = M.transition;
                if (se) {
                    se = se.split(",");
                    for (var I = 0; I < se.length; I++) {
                        var U = se[I];
                        D[ce](U)
                    }
                }
                var G = k(M, W) || {};
                if (G.width != null && (W.width = G.width),
                G.height != null && (W.height = G.height),
                se == null) {
                    W.start ? D.then(function() {
                        var Z = this.queue;
                        this.set(G),
                        G.display && (D.redraw(),
                        Be.redraw.up()),
                        this.queue = Z,
                        this.next()
                    }) : (D.set(G),
                    G.display && (D.redraw(),
                    Be.redraw.up()));
                    var X = G.wait;
                    X != null && (D.wait(X),
                    W.start = !0)
                } else {
                    if (G.display) {
                        var $ = G.display;
                        delete G.display,
                        W.start ? D.then(function() {
                            var Z = this.queue;
                            this.set({
                                display: $
                            }).redraw(),
                            Be.redraw.up(),
                            this.queue = Z,
                            this.next()
                        }) : (D.set({
                            display: $
                        }).redraw(),
                        Be.redraw.up())
                    }
                    D[fe](G),
                    W.start = !0
                }
            }
            function N(D, M) {
                var W = a(D);
                if (!e.isEmptyObject(M)) {
                    D.css("transition", "");
                    var ce = D.css("transition");
                    ce === v && (ce = W.upstream = null),
                    W.upstream = v,
                    W.set(k(M)),
                    W.upstream = ce
                }
            }
            function Y(D, M) {
                a(D).set(k(M))
            }
            function k(D, M) {
                var W = M && M.omit3d
                  , ce = {}
                  , fe = !1;
                for (var se in D)
                    se !== "transition" && se !== "keysort" && (W && (se === "z" || se === "rotateX" || se === "rotateY" || se === "scaleZ") || (ce[se] = D[se],
                    fe = !0));
                return fe ? ce : null
            }
            return n
        }
        )
    }
    );
    var ti = f( (MF, Xa) => {
        "use strict";
        var ei = Mn();
        function qa(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var iE = window.jQuery
          , qn = {}
          , Ga = ".w-ix"
          , oE = {
            reset: function(e, t) {
                ei.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ei.triggers.intro(e, t),
                qa(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ei.triggers.outro(e, t),
                qa(t, "COMPONENT_INACTIVE")
            }
        };
        qn.triggers = {};
        qn.types = {
            INTRO: "w-ix-intro" + Ga,
            OUTRO: "w-ix-outro" + Ga
        };
        iE.extend(qn.triggers, oE);
        Xa.exports = qn
    }
    );
    var ni = f( (FF, Va) => {
        var aE = typeof global == "object" && global && global.Object === Object && global;
        Va.exports = aE
    }
    );
    var He = f( (qF, Ua) => {
        var sE = ni()
          , uE = typeof self == "object" && self && self.Object === Object && self
          , cE = sE || uE || Function("return this")();
        Ua.exports = cE
    }
    );
    var St = f( (GF, ka) => {
        var lE = He()
          , fE = lE.Symbol;
        ka.exports = fE
    }
    );
    var za = f( (XF, Wa) => {
        var Ba = St()
          , Ha = Object.prototype
          , dE = Ha.hasOwnProperty
          , pE = Ha.toString
          , en = Ba ? Ba.toStringTag : void 0;
        function gE(e) {
            var t = dE.call(e, en)
              , n = e[en];
            try {
                e[en] = void 0;
                var r = !0
            } catch {}
            var i = pE.call(e);
            return r && (t ? e[en] = n : delete e[en]),
            i
        }
        Wa.exports = gE
    }
    );
    var ja = f( (VF, Ka) => {
        var hE = Object.prototype
          , vE = hE.toString;
        function EE(e) {
            return vE.call(e)
        }
        Ka.exports = EE
    }
    );
    var lt = f( (UF, $a) => {
        var Ya = St()
          , yE = za()
          , mE = ja()
          , _E = "[object Null]"
          , IE = "[object Undefined]"
          , Qa = Ya ? Ya.toStringTag : void 0;
        function TE(e) {
            return e == null ? e === void 0 ? IE : _E : Qa && Qa in Object(e) ? yE(e) : mE(e)
        }
        $a.exports = TE
    }
    );
    var ri = f( (kF, Za) => {
        function bE(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        Za.exports = bE
    }
    );
    var ii = f( (BF, Ja) => {
        var AE = ri()
          , wE = AE(Object.getPrototypeOf, Object);
        Ja.exports = wE
    }
    );
    var rt = f( (HF, es) => {
        function SE(e) {
            return e != null && typeof e == "object"
        }
        es.exports = SE
    }
    );
    var oi = f( (WF, ns) => {
        var OE = lt()
          , xE = ii()
          , RE = rt()
          , CE = "[object Object]"
          , PE = Function.prototype
          , LE = Object.prototype
          , ts = PE.toString
          , NE = LE.hasOwnProperty
          , DE = ts.call(Object);
        function ME(e) {
            if (!RE(e) || OE(e) != CE)
                return !1;
            var t = xE(e);
            if (t === null)
                return !0;
            var n = NE.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && ts.call(n) == DE
        }
        ns.exports = ME
    }
    );
    var rs = f(ai => {
        "use strict";
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        ai.default = FE;
        function FE(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"),
            n.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var is = f( (ui, si) => {
        "use strict";
        Object.defineProperty(ui, "__esModule", {
            value: !0
        });
        var qE = rs()
          , GE = XE(qE);
        function XE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof si < "u" ? Ot = si : Ot = Function("return this")();
        var VE = (0,
        GE.default)(Ot);
        ui.default = VE
    }
    );
    var ci = f(tn => {
        "use strict";
        tn.__esModule = !0;
        tn.ActionTypes = void 0;
        tn.default = us;
        var UE = oi()
          , kE = ss(UE)
          , BE = is()
          , os = ss(BE);
        function ss(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var as = tn.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function us(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t,
            t = void 0),
            typeof n < "u") {
                if (typeof n != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return n(us)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function v() {
                return o
            }
            function h(y) {
                if (typeof y != "function")
                    throw new Error("Expected listener to be a function.");
                var A = !0;
                return l(),
                s.push(y),
                function() {
                    if (A) {
                        A = !1,
                        l();
                        var O = s.indexOf(y);
                        s.splice(O, 1)
                    }
                }
            }
            function p(y) {
                if (!(0,
                kE.default)(y))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof y.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, y)
                } finally {
                    u = !1
                }
                for (var A = a = s, m = 0; m < A.length; m++)
                    A[m]();
                return y
            }
            function g(y) {
                if (typeof y != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = y,
                p({
                    type: as.INIT
                })
            }
            function _() {
                var y, A = h;
                return y = {
                    subscribe: function(O) {
                        if (typeof O != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function w() {
                            O.next && O.next(v())
                        }
                        w();
                        var x = A(w);
                        return {
                            unsubscribe: x
                        }
                    }
                },
                y[os.default] = function() {
                    return this
                }
                ,
                y
            }
            return p({
                type: as.INIT
            }),
            r = {
                dispatch: p,
                subscribe: h,
                getState: v,
                replaceReducer: g
            },
            r[os.default] = _,
            r
        }
    }
    );
    var fi = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = HE;
        function HE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var fs = f(di => {
        "use strict";
        di.__esModule = !0;
        di.default = YE;
        var cs = ci()
          , WE = oi()
          , YF = ls(WE)
          , zE = fi()
          , QF = ls(zE);
        function ls(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function KE(e, t) {
            var n = t && t.type
              , r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function jE(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t]
                  , r = n(void 0, {
                    type: cs.ActionTypes.INIT
                });
                if (typeof r > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function YE(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1)
                var a;
            var s;
            try {
                jE(n)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , v = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var h;
                for (var p = !1, g = {}, _ = 0; _ < o.length; _++) {
                    var y = o[_]
                      , A = n[y]
                      , m = l[y]
                      , O = A(m, v);
                    if (typeof O > "u") {
                        var w = KE(y, v);
                        throw new Error(w)
                    }
                    g[y] = O,
                    p = p || O !== m
                }
                return p ? g : l
            }
        }
    }
    );
    var ps = f(pi => {
        "use strict";
        pi.__esModule = !0;
        pi.default = QE;
        function ds(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function QE(e, t) {
            if (typeof e == "function")
                return ds(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i]
                  , a = e[o];
                typeof a == "function" && (r[o] = ds(a, t))
            }
            return r
        }
    }
    );
    var hi = f(gi => {
        "use strict";
        gi.__esModule = !0;
        gi.default = $E;
        function $E() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var r = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    }
    );
    var gs = f(vi => {
        "use strict";
        vi.__esModule = !0;
        var ZE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        vi.default = ny;
        var JE = hi()
          , ey = ty(JE);
        function ty(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function ny() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(r) {
                return function(i, o, a) {
                    var s = r(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , v = {
                        getState: s.getState,
                        dispatch: function(p) {
                            return u(p)
                        }
                    };
                    return l = t.map(function(h) {
                        return h(v)
                    }),
                    u = ey.default.apply(void 0, l)(s.dispatch),
                    ZE({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var Ei = f(Ge => {
        "use strict";
        Ge.__esModule = !0;
        Ge.compose = Ge.applyMiddleware = Ge.bindActionCreators = Ge.combineReducers = Ge.createStore = void 0;
        var ry = ci()
          , iy = xt(ry)
          , oy = fs()
          , ay = xt(oy)
          , sy = ps()
          , uy = xt(sy)
          , cy = gs()
          , ly = xt(cy)
          , fy = hi()
          , dy = xt(fy)
          , py = fi()
          , t2 = xt(py);
        function xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ge.createStore = iy.default;
        Ge.combineReducers = ay.default;
        Ge.bindActionCreators = uy.default;
        Ge.applyMiddleware = ly.default;
        Ge.compose = dy.default
    }
    );
    var We, yi, Ze, gy, hy, Gn, vy, mi = Ee( () => {
        "use strict";
        We = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        yi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Ze = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        gy = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        hy = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Gn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        vy = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var xe, Ey, Xn = Ee( () => {
        "use strict";
        xe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        Ey = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var yy, hs = Ee( () => {
        "use strict";
        yy = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var my, _y, Iy, Ty, by, Ay, wy, _i, vs = Ee( () => {
        "use strict";
        Xn();
        ({TRANSFORM_MOVE: my, TRANSFORM_SCALE: _y, TRANSFORM_ROTATE: Iy, TRANSFORM_SKEW: Ty, STYLE_SIZE: by, STYLE_FILTER: Ay, STYLE_FONT_VARIATION: wy} = xe),
        _i = {
            [my]: !0,
            [_y]: !0,
            [Iy]: !0,
            [Ty]: !0,
            [by]: !0,
            [Ay]: !0,
            [wy]: !0
        }
    }
    );
    var Te = {};
    Le(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => ky,
        IX2_ANIMATION_FRAME_CHANGED: () => Fy,
        IX2_CLEAR_REQUESTED: () => Ny,
        IX2_ELEMENT_STATE_CHANGED: () => Uy,
        IX2_EVENT_LISTENER_ADDED: () => Dy,
        IX2_EVENT_STATE_CHANGED: () => My,
        IX2_INSTANCE_ADDED: () => Gy,
        IX2_INSTANCE_REMOVED: () => Vy,
        IX2_INSTANCE_STARTED: () => Xy,
        IX2_MEDIA_QUERIES_DEFINED: () => Hy,
        IX2_PARAMETER_CHANGED: () => qy,
        IX2_PLAYBACK_REQUESTED: () => Py,
        IX2_PREVIEW_REQUESTED: () => Cy,
        IX2_RAW_DATA_IMPORTED: () => Sy,
        IX2_SESSION_INITIALIZED: () => Oy,
        IX2_SESSION_STARTED: () => xy,
        IX2_SESSION_STOPPED: () => Ry,
        IX2_STOP_REQUESTED: () => Ly,
        IX2_TEST_FRAME_RENDERED: () => Wy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => By
    });
    var Sy, Oy, xy, Ry, Cy, Py, Ly, Ny, Dy, My, Fy, qy, Gy, Xy, Vy, Uy, ky, By, Hy, Wy, Es = Ee( () => {
        "use strict";
        Sy = "IX2_RAW_DATA_IMPORTED",
        Oy = "IX2_SESSION_INITIALIZED",
        xy = "IX2_SESSION_STARTED",
        Ry = "IX2_SESSION_STOPPED",
        Cy = "IX2_PREVIEW_REQUESTED",
        Py = "IX2_PLAYBACK_REQUESTED",
        Ly = "IX2_STOP_REQUESTED",
        Ny = "IX2_CLEAR_REQUESTED",
        Dy = "IX2_EVENT_LISTENER_ADDED",
        My = "IX2_EVENT_STATE_CHANGED",
        Fy = "IX2_ANIMATION_FRAME_CHANGED",
        qy = "IX2_PARAMETER_CHANGED",
        Gy = "IX2_INSTANCE_ADDED",
        Xy = "IX2_INSTANCE_STARTED",
        Vy = "IX2_INSTANCE_REMOVED",
        Uy = "IX2_ELEMENT_STATE_CHANGED",
        ky = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        By = "IX2_VIEWPORT_WIDTH_CHANGED",
        Hy = "IX2_MEDIA_QUERIES_DEFINED",
        Wy = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var we = {};
    Le(we, {
        ABSTRACT_NODE: () => Bm,
        AUTO: () => Lm,
        BACKGROUND: () => Sm,
        BACKGROUND_COLOR: () => wm,
        BAR_DELIMITER: () => Mm,
        BORDER_COLOR: () => Om,
        BOUNDARY_SELECTOR: () => Qy,
        CHILDREN: () => Fm,
        COLON_DELIMITER: () => Dm,
        COLOR: () => xm,
        COMMA_DELIMITER: () => Nm,
        CONFIG_UNIT: () => im,
        CONFIG_VALUE: () => em,
        CONFIG_X_UNIT: () => tm,
        CONFIG_X_VALUE: () => $y,
        CONFIG_Y_UNIT: () => nm,
        CONFIG_Y_VALUE: () => Zy,
        CONFIG_Z_UNIT: () => rm,
        CONFIG_Z_VALUE: () => Jy,
        DISPLAY: () => Rm,
        FILTER: () => Im,
        FLEX: () => Cm,
        FONT_VARIATION_SETTINGS: () => Tm,
        HEIGHT: () => Am,
        HTML_ELEMENT: () => Um,
        IMMEDIATE_CHILDREN: () => qm,
        IX2_ID_DELIMITER: () => zy,
        OPACITY: () => _m,
        PARENT: () => Xm,
        PLAIN_OBJECT: () => km,
        PRESERVE_3D: () => Vm,
        RENDER_GENERAL: () => Wm,
        RENDER_PLUGIN: () => Km,
        RENDER_STYLE: () => zm,
        RENDER_TRANSFORM: () => Hm,
        ROTATE_X: () => gm,
        ROTATE_Y: () => hm,
        ROTATE_Z: () => vm,
        SCALE_3D: () => pm,
        SCALE_X: () => lm,
        SCALE_Y: () => fm,
        SCALE_Z: () => dm,
        SIBLINGS: () => Gm,
        SKEW: () => Em,
        SKEW_X: () => ym,
        SKEW_Y: () => mm,
        TRANSFORM: () => om,
        TRANSLATE_3D: () => cm,
        TRANSLATE_X: () => am,
        TRANSLATE_Y: () => sm,
        TRANSLATE_Z: () => um,
        WF_PAGE: () => Ky,
        WIDTH: () => bm,
        WILL_CHANGE: () => Pm,
        W_MOD_IX: () => Yy,
        W_MOD_JS: () => jy
    });
    var zy, Ky, jy, Yy, Qy, $y, Zy, Jy, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, vm, Em, ym, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, qm, Gm, Xm, Vm, Um, km, Bm, Hm, Wm, zm, Km, ys = Ee( () => {
        "use strict";
        zy = "|",
        Ky = "data-wf-page",
        jy = "w-mod-js",
        Yy = "w-mod-ix",
        Qy = ".w-dyn-item",
        $y = "xValue",
        Zy = "yValue",
        Jy = "zValue",
        em = "value",
        tm = "xUnit",
        nm = "yUnit",
        rm = "zUnit",
        im = "unit",
        om = "transform",
        am = "translateX",
        sm = "translateY",
        um = "translateZ",
        cm = "translate3d",
        lm = "scaleX",
        fm = "scaleY",
        dm = "scaleZ",
        pm = "scale3d",
        gm = "rotateX",
        hm = "rotateY",
        vm = "rotateZ",
        Em = "skew",
        ym = "skewX",
        mm = "skewY",
        _m = "opacity",
        Im = "filter",
        Tm = "font-variation-settings",
        bm = "width",
        Am = "height",
        wm = "backgroundColor",
        Sm = "background",
        Om = "borderColor",
        xm = "color",
        Rm = "display",
        Cm = "flex",
        Pm = "willChange",
        Lm = "AUTO",
        Nm = ",",
        Dm = ":",
        Mm = "|",
        Fm = "CHILDREN",
        qm = "IMMEDIATE_CHILDREN",
        Gm = "SIBLINGS",
        Xm = "PARENT",
        Vm = "preserve-3d",
        Um = "HTML_ELEMENT",
        km = "PLAIN_OBJECT",
        Bm = "ABSTRACT_NODE",
        Hm = "RENDER_TRANSFORM",
        Wm = "RENDER_GENERAL",
        zm = "RENDER_STYLE",
        Km = "RENDER_PLUGIN"
    }
    );
    var ms = {};
    Le(ms, {
        ActionAppliesTo: () => Ey,
        ActionTypeConsts: () => xe,
        EventAppliesTo: () => yi,
        EventBasedOn: () => Ze,
        EventContinuousMouseAxes: () => gy,
        EventLimitAffectedElements: () => hy,
        EventTypeConsts: () => We,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => we,
        InteractionTypeConsts: () => yy,
        QuickEffectDirectionConsts: () => vy,
        QuickEffectIds: () => Gn,
        ReducedMotionTypes: () => _i
    });
    var Ne = Ee( () => {
        "use strict";
        mi();
        Xn();
        hs();
        vs();
        Es();
        ys();
        Xn();
        mi()
    }
    );
    var jm, _s, Is = Ee( () => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: jm} = Te),
        _s = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case jm:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Rt = f(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var Ym = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        me.clone = Un;
        me.addLast = As;
        me.addFirst = ws;
        me.removeLast = Ss;
        me.removeFirst = Os;
        me.insert = xs;
        me.removeAt = Rs;
        me.replaceAt = Cs;
        me.getIn = kn;
        me.set = Bn;
        me.setIn = Hn;
        me.update = Ls;
        me.updateIn = Ns;
        me.merge = Ds;
        me.mergeDeep = Ms;
        me.mergeIn = Fs;
        me.omit = qs;
        me.addDefaults = Gs;
        var Ts = "INVALID_ARGS";
        function bs(e) {
            throw new Error(e)
        }
        function Ii(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Qm = {}.hasOwnProperty;
        function Un(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Ii(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }
        function De(e, t, n) {
            var r = n;
            r == null && bs(Ts);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var v = Ii(l);
                    if (v.length)
                        for (var h = 0; h <= v.length; h++) {
                            var p = v[h];
                            if (!(e && r[p] !== void 0)) {
                                var g = l[p];
                                t && Vn(r[p]) && Vn(g) && (g = De(e, t, r[p], g)),
                                !(g === void 0 || g === r[p]) && (i || (i = !0,
                                r = Un(r)),
                                r[p] = g)
                            }
                        }
                }
            }
            return r
        }
        function Vn(e) {
            var t = typeof e > "u" ? "undefined" : Ym(e);
            return e != null && (t === "object" || t === "function")
        }
        function As(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function ws(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Ss(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Os(e) {
            return e.length ? e.slice(1) : e
        }
        function xs(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }
        function Rs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Cs(e, t, n) {
            if (e[t] === n)
                return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++)
                i[o] = e[o];
            return i[t] = n,
            i
        }
        function kn(e, t) {
            if (!Array.isArray(t) && bs(Ts),
            e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i],
                    n === void 0)
                        return n
                }
                return n
            }
        }
        function Bn(e, t, n) {
            var r = typeof t == "number" ? [] : {}
              , i = e ?? r;
            if (i[t] === n)
                return i;
            var o = Un(i);
            return o[t] = n,
            o
        }
        function Ps(e, t, n, r) {
            var i = void 0
              , o = t[r];
            if (r === t.length - 1)
                i = n;
            else {
                var a = Vn(e) && Vn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = Ps(a, t, n, r + 1)
            }
            return Bn(e, o, i)
        }
        function Hn(e, t, n) {
            return t.length ? Ps(e, t, n, 0) : n
        }
        function Ls(e, t, n) {
            var r = e?.[t]
              , i = n(r);
            return Bn(e, t, i)
        }
        function Ns(e, t, n) {
            var r = kn(e, t)
              , i = n(r);
            return Hn(e, t, i)
        }
        function Ds(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s)) : De(!1, !1, e, t, n, r, i, o)
        }
        function Ms(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s)) : De(!1, !0, e, t, n, r, i, o)
        }
        function Fs(e, t, n, r, i, o, a) {
            var s = kn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), h = 7; h < l; h++)
                v[h - 7] = arguments[h];
            return v.length ? u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(v)) : u = De(!1, !1, s, n, r, i, o, a),
            Hn(e, t, u)
        }
        function qs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (Qm.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r)
                return e;
            for (var o = {}, a = Ii(e), s = 0; s < a.length; s++) {
                var u = a[s];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Gs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s)) : De(!0, !1, e, t, n, r, i, o)
        }
        var $m = {
            clone: Un,
            addLast: As,
            addFirst: ws,
            removeLast: Ss,
            removeFirst: Os,
            insert: xs,
            removeAt: Rs,
            replaceAt: Cs,
            getIn: kn,
            set: Bn,
            setIn: Hn,
            update: Ls,
            updateIn: Ns,
            merge: Ds,
            mergeDeep: Ms,
            mergeIn: Fs,
            omit: qs,
            addDefaults: Gs
        };
        me.default = $m
    }
    );
    var Vs, Zm, Jm, e_, t_, n_, Xs, Us, ks = Ee( () => {
        "use strict";
        Ne();
        Vs = de(Rt()),
        {IX2_PREVIEW_REQUESTED: Zm, IX2_PLAYBACK_REQUESTED: Jm, IX2_STOP_REQUESTED: e_, IX2_CLEAR_REQUESTED: t_} = Te,
        n_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Xs = Object.create(null, {
            [Zm]: {
                value: "preview"
            },
            [Jm]: {
                value: "playback"
            },
            [e_]: {
                value: "stop"
            },
            [t_]: {
                value: "clear"
            }
        }),
        Us = (e=n_, t) => {
            if (t.type in Xs) {
                let n = [Xs[t.type]];
                return (0,
                Vs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Re, r_, i_, o_, a_, s_, u_, c_, l_, f_, d_, Bs, p_, Hs, Ws = Ee( () => {
        "use strict";
        Ne();
        Re = de(Rt()),
        {IX2_SESSION_INITIALIZED: r_, IX2_SESSION_STARTED: i_, IX2_TEST_FRAME_RENDERED: o_, IX2_SESSION_STOPPED: a_, IX2_EVENT_LISTENER_ADDED: s_, IX2_EVENT_STATE_CHANGED: u_, IX2_ANIMATION_FRAME_CHANGED: c_, IX2_ACTION_LIST_PLAYBACK_CHANGED: l_, IX2_VIEWPORT_WIDTH_CHANGED: f_, IX2_MEDIA_QUERIES_DEFINED: d_} = Te,
        Bs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        p_ = 20,
        Hs = (e=Bs, t) => {
            switch (t.type) {
            case r_:
                {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0,
                    Re.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
            case i_:
                return (0,
                Re.set)(e, "active", !0);
            case o_:
                {
                    let {payload: {step: n=p_}} = t;
                    return (0,
                    Re.set)(e, "tick", e.tick + n)
                }
            case a_:
                return Bs;
            case c_:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    Re.set)(e, "tick", n)
                }
            case s_:
                {
                    let n = (0,
                    Re.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Re.set)(e, "eventListeners", n)
                }
            case u_:
                {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0,
                    Re.setIn)(e, ["eventState", n], r)
                }
            case l_:
                {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0,
                    Re.setIn)(e, ["playbackState", n], r)
                }
            case f_:
                {
                    let {width: n, mediaQueries: r} = t.payload
                      , i = r.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = r[a];
                        if (n >= u && n <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Re.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: o
                    })
                }
            case d_:
                return (0,
                Re.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Ks = f( (I2, zs) => {
        function g_() {
            this.__data__ = [],
            this.size = 0
        }
        zs.exports = g_
    }
    );
    var Wn = f( (T2, js) => {
        function h_(e, t) {
            return e === t || e !== e && t !== t
        }
        js.exports = h_
    }
    );
    var nn = f( (b2, Ys) => {
        var v_ = Wn();
        function E_(e, t) {
            for (var n = e.length; n--; )
                if (v_(e[n][0], t))
                    return n;
            return -1
        }
        Ys.exports = E_
    }
    );
    var $s = f( (A2, Qs) => {
        var y_ = nn()
          , m_ = Array.prototype
          , __ = m_.splice;
        function I_(e) {
            var t = this.__data__
              , n = y_(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : __.call(t, n, 1),
            --this.size,
            !0
        }
        Qs.exports = I_
    }
    );
    var Js = f( (w2, Zs) => {
        var T_ = nn();
        function b_(e) {
            var t = this.__data__
              , n = T_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        Zs.exports = b_
    }
    );
    var tu = f( (S2, eu) => {
        var A_ = nn();
        function w_(e) {
            return A_(this.__data__, e) > -1
        }
        eu.exports = w_
    }
    );
    var ru = f( (O2, nu) => {
        var S_ = nn();
        function O_(e, t) {
            var n = this.__data__
              , r = S_(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        nu.exports = O_
    }
    );
    var rn = f( (x2, iu) => {
        var x_ = Ks()
          , R_ = $s()
          , C_ = Js()
          , P_ = tu()
          , L_ = ru();
        function Ct(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Ct.prototype.clear = x_;
        Ct.prototype.delete = R_;
        Ct.prototype.get = C_;
        Ct.prototype.has = P_;
        Ct.prototype.set = L_;
        iu.exports = Ct
    }
    );
    var au = f( (R2, ou) => {
        var N_ = rn();
        function D_() {
            this.__data__ = new N_,
            this.size = 0
        }
        ou.exports = D_
    }
    );
    var uu = f( (C2, su) => {
        function M_(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        su.exports = M_
    }
    );
    var lu = f( (P2, cu) => {
        function F_(e) {
            return this.__data__.get(e)
        }
        cu.exports = F_
    }
    );
    var du = f( (L2, fu) => {
        function q_(e) {
            return this.__data__.has(e)
        }
        fu.exports = q_
    }
    );
    var Je = f( (N2, pu) => {
        function G_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        pu.exports = G_
    }
    );
    var Ti = f( (D2, gu) => {
        var X_ = lt()
          , V_ = Je()
          , U_ = "[object AsyncFunction]"
          , k_ = "[object Function]"
          , B_ = "[object GeneratorFunction]"
          , H_ = "[object Proxy]";
        function W_(e) {
            if (!V_(e))
                return !1;
            var t = X_(e);
            return t == k_ || t == B_ || t == U_ || t == H_
        }
        gu.exports = W_
    }
    );
    var vu = f( (M2, hu) => {
        var z_ = He()
          , K_ = z_["__core-js_shared__"];
        hu.exports = K_
    }
    );
    var mu = f( (F2, yu) => {
        var bi = vu()
          , Eu = function() {
            var e = /[^.]+$/.exec(bi && bi.keys && bi.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function j_(e) {
            return !!Eu && Eu in e
        }
        yu.exports = j_
    }
    );
    var Ai = f( (q2, _u) => {
        var Y_ = Function.prototype
          , Q_ = Y_.toString;
        function $_(e) {
            if (e != null) {
                try {
                    return Q_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        _u.exports = $_
    }
    );
    var Tu = f( (G2, Iu) => {
        var Z_ = Ti()
          , J_ = mu()
          , eI = Je()
          , tI = Ai()
          , nI = /[\\^$.*+?()[\]{}|]/g
          , rI = /^\[object .+?Constructor\]$/
          , iI = Function.prototype
          , oI = Object.prototype
          , aI = iI.toString
          , sI = oI.hasOwnProperty
          , uI = RegExp("^" + aI.call(sI).replace(nI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function cI(e) {
            if (!eI(e) || J_(e))
                return !1;
            var t = Z_(e) ? uI : rI;
            return t.test(tI(e))
        }
        Iu.exports = cI
    }
    );
    var Au = f( (X2, bu) => {
        function lI(e, t) {
            return e?.[t]
        }
        bu.exports = lI
    }
    );
    var ft = f( (V2, wu) => {
        var fI = Tu()
          , dI = Au();
        function pI(e, t) {
            var n = dI(e, t);
            return fI(n) ? n : void 0
        }
        wu.exports = pI
    }
    );
    var zn = f( (U2, Su) => {
        var gI = ft()
          , hI = He()
          , vI = gI(hI, "Map");
        Su.exports = vI
    }
    );
    var on = f( (k2, Ou) => {
        var EI = ft()
          , yI = EI(Object, "create");
        Ou.exports = yI
    }
    );
    var Cu = f( (B2, Ru) => {
        var xu = on();
        function mI() {
            this.__data__ = xu ? xu(null) : {},
            this.size = 0
        }
        Ru.exports = mI
    }
    );
    var Lu = f( (H2, Pu) => {
        function _I(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Pu.exports = _I
    }
    );
    var Du = f( (W2, Nu) => {
        var II = on()
          , TI = "__lodash_hash_undefined__"
          , bI = Object.prototype
          , AI = bI.hasOwnProperty;
        function wI(e) {
            var t = this.__data__;
            if (II) {
                var n = t[e];
                return n === TI ? void 0 : n
            }
            return AI.call(t, e) ? t[e] : void 0
        }
        Nu.exports = wI
    }
    );
    var Fu = f( (z2, Mu) => {
        var SI = on()
          , OI = Object.prototype
          , xI = OI.hasOwnProperty;
        function RI(e) {
            var t = this.__data__;
            return SI ? t[e] !== void 0 : xI.call(t, e)
        }
        Mu.exports = RI
    }
    );
    var Gu = f( (K2, qu) => {
        var CI = on()
          , PI = "__lodash_hash_undefined__";
        function LI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = CI && t === void 0 ? PI : t,
            this
        }
        qu.exports = LI
    }
    );
    var Vu = f( (j2, Xu) => {
        var NI = Cu()
          , DI = Lu()
          , MI = Du()
          , FI = Fu()
          , qI = Gu();
        function Pt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Pt.prototype.clear = NI;
        Pt.prototype.delete = DI;
        Pt.prototype.get = MI;
        Pt.prototype.has = FI;
        Pt.prototype.set = qI;
        Xu.exports = Pt
    }
    );
    var Bu = f( (Y2, ku) => {
        var Uu = Vu()
          , GI = rn()
          , XI = zn();
        function VI() {
            this.size = 0,
            this.__data__ = {
                hash: new Uu,
                map: new (XI || GI),
                string: new Uu
            }
        }
        ku.exports = VI
    }
    );
    var Wu = f( (Q2, Hu) => {
        function UI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Hu.exports = UI
    }
    );
    var an = f( ($2, zu) => {
        var kI = Wu();
        function BI(e, t) {
            var n = e.__data__;
            return kI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        zu.exports = BI
    }
    );
    var ju = f( (Z2, Ku) => {
        var HI = an();
        function WI(e) {
            var t = HI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Ku.exports = WI
    }
    );
    var Qu = f( (J2, Yu) => {
        var zI = an();
        function KI(e) {
            return zI(this, e).get(e)
        }
        Yu.exports = KI
    }
    );
    var Zu = f( (eq, $u) => {
        var jI = an();
        function YI(e) {
            return jI(this, e).has(e)
        }
        $u.exports = YI
    }
    );
    var ec = f( (tq, Ju) => {
        var QI = an();
        function $I(e, t) {
            var n = QI(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        Ju.exports = $I
    }
    );
    var Kn = f( (nq, tc) => {
        var ZI = Bu()
          , JI = ju()
          , eT = Qu()
          , tT = Zu()
          , nT = ec();
        function Lt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Lt.prototype.clear = ZI;
        Lt.prototype.delete = JI;
        Lt.prototype.get = eT;
        Lt.prototype.has = tT;
        Lt.prototype.set = nT;
        tc.exports = Lt
    }
    );
    var rc = f( (rq, nc) => {
        var rT = rn()
          , iT = zn()
          , oT = Kn()
          , aT = 200;
        function sT(e, t) {
            var n = this.__data__;
            if (n instanceof rT) {
                var r = n.__data__;
                if (!iT || r.length < aT - 1)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new oT(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        nc.exports = sT
    }
    );
    var wi = f( (iq, ic) => {
        var uT = rn()
          , cT = au()
          , lT = uu()
          , fT = lu()
          , dT = du()
          , pT = rc();
        function Nt(e) {
            var t = this.__data__ = new uT(e);
            this.size = t.size
        }
        Nt.prototype.clear = cT;
        Nt.prototype.delete = lT;
        Nt.prototype.get = fT;
        Nt.prototype.has = dT;
        Nt.prototype.set = pT;
        ic.exports = Nt
    }
    );
    var ac = f( (oq, oc) => {
        var gT = "__lodash_hash_undefined__";
        function hT(e) {
            return this.__data__.set(e, gT),
            this
        }
        oc.exports = hT
    }
    );
    var uc = f( (aq, sc) => {
        function vT(e) {
            return this.__data__.has(e)
        }
        sc.exports = vT
    }
    );
    var lc = f( (sq, cc) => {
        var ET = Kn()
          , yT = ac()
          , mT = uc();
        function jn(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.__data__ = new ET; ++t < n; )
                this.add(e[t])
        }
        jn.prototype.add = jn.prototype.push = yT;
        jn.prototype.has = mT;
        cc.exports = jn
    }
    );
    var dc = f( (uq, fc) => {
        function _T(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        fc.exports = _T
    }
    );
    var gc = f( (cq, pc) => {
        function IT(e, t) {
            return e.has(t)
        }
        pc.exports = IT
    }
    );
    var Si = f( (lq, hc) => {
        var TT = lc()
          , bT = dc()
          , AT = gc()
          , wT = 1
          , ST = 2;
        function OT(e, t, n, r, i, o) {
            var a = n & wT
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , v = o.get(t);
            if (l && v)
                return l == t && v == e;
            var h = -1
              , p = !0
              , g = n & ST ? new TT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++h < s; ) {
                var _ = e[h]
                  , y = t[h];
                if (r)
                    var A = a ? r(y, _, h, t, e, o) : r(_, y, h, e, t, o);
                if (A !== void 0) {
                    if (A)
                        continue;
                    p = !1;
                    break
                }
                if (g) {
                    if (!bT(t, function(m, O) {
                        if (!AT(g, O) && (_ === m || i(_, m, n, r, o)))
                            return g.push(O)
                    })) {
                        p = !1;
                        break
                    }
                } else if (!(_ === y || i(_, y, n, r, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            p
        }
        hc.exports = OT
    }
    );
    var Ec = f( (fq, vc) => {
        var xT = He()
          , RT = xT.Uint8Array;
        vc.exports = RT
    }
    );
    var mc = f( (dq, yc) => {
        function CT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }),
            n
        }
        yc.exports = CT
    }
    );
    var Ic = f( (pq, _c) => {
        function PT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }),
            n
        }
        _c.exports = PT
    }
    );
    var Sc = f( (gq, wc) => {
        var Tc = St()
          , bc = Ec()
          , LT = Wn()
          , NT = Si()
          , DT = mc()
          , MT = Ic()
          , FT = 1
          , qT = 2
          , GT = "[object Boolean]"
          , XT = "[object Date]"
          , VT = "[object Error]"
          , UT = "[object Map]"
          , kT = "[object Number]"
          , BT = "[object RegExp]"
          , HT = "[object Set]"
          , WT = "[object String]"
          , zT = "[object Symbol]"
          , KT = "[object ArrayBuffer]"
          , jT = "[object DataView]"
          , Ac = Tc ? Tc.prototype : void 0
          , Oi = Ac ? Ac.valueOf : void 0;
        function YT(e, t, n, r, i, o, a) {
            switch (n) {
            case jT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case KT:
                return !(e.byteLength != t.byteLength || !o(new bc(e), new bc(t)));
            case GT:
            case XT:
            case kT:
                return LT(+e, +t);
            case VT:
                return e.name == t.name && e.message == t.message;
            case BT:
            case WT:
                return e == t + "";
            case UT:
                var s = DT;
            case HT:
                var u = r & FT;
                if (s || (s = MT),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                r |= qT,
                a.set(e, t);
                var v = NT(s(e), s(t), r, i, o, a);
                return a.delete(e),
                v;
            case zT:
                if (Oi)
                    return Oi.call(e) == Oi.call(t)
            }
            return !1
        }
        wc.exports = YT
    }
    );
    var Yn = f( (hq, Oc) => {
        function QT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
            return e
        }
        Oc.exports = QT
    }
    );
    var be = f( (vq, xc) => {
        var $T = Array.isArray;
        xc.exports = $T
    }
    );
    var xi = f( (Eq, Rc) => {
        var ZT = Yn()
          , JT = be();
        function eb(e, t, n) {
            var r = t(e);
            return JT(e) ? r : ZT(r, n(e))
        }
        Rc.exports = eb
    }
    );
    var Pc = f( (yq, Cc) => {
        function tb(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
        Cc.exports = tb
    }
    );
    var Ri = f( (mq, Lc) => {
        function nb() {
            return []
        }
        Lc.exports = nb
    }
    );
    var Ci = f( (_q, Dc) => {
        var rb = Pc()
          , ib = Ri()
          , ob = Object.prototype
          , ab = ob.propertyIsEnumerable
          , Nc = Object.getOwnPropertySymbols
          , sb = Nc ? function(e) {
            return e == null ? [] : (e = Object(e),
            rb(Nc(e), function(t) {
                return ab.call(e, t)
            }))
        }
        : ib;
        Dc.exports = sb
    }
    );
    var Fc = f( (Iq, Mc) => {
        function ub(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }
        Mc.exports = ub
    }
    );
    var Gc = f( (Tq, qc) => {
        var cb = lt()
          , lb = rt()
          , fb = "[object Arguments]";
        function db(e) {
            return lb(e) && cb(e) == fb
        }
        qc.exports = db
    }
    );
    var sn = f( (bq, Uc) => {
        var Xc = Gc()
          , pb = rt()
          , Vc = Object.prototype
          , gb = Vc.hasOwnProperty
          , hb = Vc.propertyIsEnumerable
          , vb = Xc(function() {
            return arguments
        }()) ? Xc : function(e) {
            return pb(e) && gb.call(e, "callee") && !hb.call(e, "callee")
        }
        ;
        Uc.exports = vb
    }
    );
    var Bc = f( (Aq, kc) => {
        function Eb() {
            return !1
        }
        kc.exports = Eb
    }
    );
    var Qn = f( (un, Dt) => {
        var yb = He()
          , mb = Bc()
          , zc = typeof un == "object" && un && !un.nodeType && un
          , Hc = zc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt
          , _b = Hc && Hc.exports === zc
          , Wc = _b ? yb.Buffer : void 0
          , Ib = Wc ? Wc.isBuffer : void 0
          , Tb = Ib || mb;
        Dt.exports = Tb
    }
    );
    var $n = f( (wq, Kc) => {
        var bb = 9007199254740991
          , Ab = /^(?:0|[1-9]\d*)$/;
        function wb(e, t) {
            var n = typeof e;
            return t = t ?? bb,
            !!t && (n == "number" || n != "symbol" && Ab.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Kc.exports = wb
    }
    );
    var Zn = f( (Sq, jc) => {
        var Sb = 9007199254740991;
        function Ob(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sb
        }
        jc.exports = Ob
    }
    );
    var Qc = f( (Oq, Yc) => {
        var xb = lt()
          , Rb = Zn()
          , Cb = rt()
          , Pb = "[object Arguments]"
          , Lb = "[object Array]"
          , Nb = "[object Boolean]"
          , Db = "[object Date]"
          , Mb = "[object Error]"
          , Fb = "[object Function]"
          , qb = "[object Map]"
          , Gb = "[object Number]"
          , Xb = "[object Object]"
          , Vb = "[object RegExp]"
          , Ub = "[object Set]"
          , kb = "[object String]"
          , Bb = "[object WeakMap]"
          , Hb = "[object ArrayBuffer]"
          , Wb = "[object DataView]"
          , zb = "[object Float32Array]"
          , Kb = "[object Float64Array]"
          , jb = "[object Int8Array]"
          , Yb = "[object Int16Array]"
          , Qb = "[object Int32Array]"
          , $b = "[object Uint8Array]"
          , Zb = "[object Uint8ClampedArray]"
          , Jb = "[object Uint16Array]"
          , eA = "[object Uint32Array]"
          , ve = {};
        ve[zb] = ve[Kb] = ve[jb] = ve[Yb] = ve[Qb] = ve[$b] = ve[Zb] = ve[Jb] = ve[eA] = !0;
        ve[Pb] = ve[Lb] = ve[Hb] = ve[Nb] = ve[Wb] = ve[Db] = ve[Mb] = ve[Fb] = ve[qb] = ve[Gb] = ve[Xb] = ve[Vb] = ve[Ub] = ve[kb] = ve[Bb] = !1;
        function tA(e) {
            return Cb(e) && Rb(e.length) && !!ve[xb(e)]
        }
        Yc.exports = tA
    }
    );
    var Zc = f( (xq, $c) => {
        function nA(e) {
            return function(t) {
                return e(t)
            }
        }
        $c.exports = nA
    }
    );
    var el = f( (cn, Mt) => {
        var rA = ni()
          , Jc = typeof cn == "object" && cn && !cn.nodeType && cn
          , ln = Jc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt
          , iA = ln && ln.exports === Jc
          , Pi = iA && rA.process
          , oA = function() {
            try {
                var e = ln && ln.require && ln.require("util").types;
                return e || Pi && Pi.binding && Pi.binding("util")
            } catch {}
        }();
        Mt.exports = oA
    }
    );
    var Jn = f( (Rq, rl) => {
        var aA = Qc()
          , sA = Zc()
          , tl = el()
          , nl = tl && tl.isTypedArray
          , uA = nl ? sA(nl) : aA;
        rl.exports = uA
    }
    );
    var Li = f( (Cq, il) => {
        var cA = Fc()
          , lA = sn()
          , fA = be()
          , dA = Qn()
          , pA = $n()
          , gA = Jn()
          , hA = Object.prototype
          , vA = hA.hasOwnProperty;
        function EA(e, t) {
            var n = fA(e)
              , r = !n && lA(e)
              , i = !n && !r && dA(e)
              , o = !n && !r && !i && gA(e)
              , a = n || r || i || o
              , s = a ? cA(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || vA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || pA(l, u))) && s.push(l);
            return s
        }
        il.exports = EA
    }
    );
    var er = f( (Pq, ol) => {
        var yA = Object.prototype;
        function mA(e) {
            var t = e && e.constructor
              , n = typeof t == "function" && t.prototype || yA;
            return e === n
        }
        ol.exports = mA
    }
    );
    var sl = f( (Lq, al) => {
        var _A = ri()
          , IA = _A(Object.keys, Object);
        al.exports = IA
    }
    );
    var tr = f( (Nq, ul) => {
        var TA = er()
          , bA = sl()
          , AA = Object.prototype
          , wA = AA.hasOwnProperty;
        function SA(e) {
            if (!TA(e))
                return bA(e);
            var t = [];
            for (var n in Object(e))
                wA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        ul.exports = SA
    }
    );
    var Et = f( (Dq, cl) => {
        var OA = Ti()
          , xA = Zn();
        function RA(e) {
            return e != null && xA(e.length) && !OA(e)
        }
        cl.exports = RA
    }
    );
    var fn = f( (Mq, ll) => {
        var CA = Li()
          , PA = tr()
          , LA = Et();
        function NA(e) {
            return LA(e) ? CA(e) : PA(e)
        }
        ll.exports = NA
    }
    );
    var dl = f( (Fq, fl) => {
        var DA = xi()
          , MA = Ci()
          , FA = fn();
        function qA(e) {
            return DA(e, FA, MA)
        }
        fl.exports = qA
    }
    );
    var hl = f( (qq, gl) => {
        var pl = dl()
          , GA = 1
          , XA = Object.prototype
          , VA = XA.hasOwnProperty;
        function UA(e, t, n, r, i, o) {
            var a = n & GA
              , s = pl(e)
              , u = s.length
              , l = pl(t)
              , v = l.length;
            if (u != v && !a)
                return !1;
            for (var h = u; h--; ) {
                var p = s[h];
                if (!(a ? p in t : VA.call(t, p)))
                    return !1
            }
            var g = o.get(e)
              , _ = o.get(t);
            if (g && _)
                return g == t && _ == e;
            var y = !0;
            o.set(e, t),
            o.set(t, e);
            for (var A = a; ++h < u; ) {
                p = s[h];
                var m = e[p]
                  , O = t[p];
                if (r)
                    var w = a ? r(O, m, p, t, e, o) : r(m, O, p, e, t, o);
                if (!(w === void 0 ? m === O || i(m, O, n, r, o) : w)) {
                    y = !1;
                    break
                }
                A || (A = p == "constructor")
            }
            if (y && !A) {
                var x = e.constructor
                  , L = t.constructor;
                x != L && "constructor"in e && "constructor"in t && !(typeof x == "function" && x instanceof x && typeof L == "function" && L instanceof L) && (y = !1)
            }
            return o.delete(e),
            o.delete(t),
            y
        }
        gl.exports = UA
    }
    );
    var El = f( (Gq, vl) => {
        var kA = ft()
          , BA = He()
          , HA = kA(BA, "DataView");
        vl.exports = HA
    }
    );
    var ml = f( (Xq, yl) => {
        var WA = ft()
          , zA = He()
          , KA = WA(zA, "Promise");
        yl.exports = KA
    }
    );
    var Il = f( (Vq, _l) => {
        var jA = ft()
          , YA = He()
          , QA = jA(YA, "Set");
        _l.exports = QA
    }
    );
    var Ni = f( (Uq, Tl) => {
        var $A = ft()
          , ZA = He()
          , JA = $A(ZA, "WeakMap");
        Tl.exports = JA
    }
    );
    var nr = f( (kq, Rl) => {
        var Di = El()
          , Mi = zn()
          , Fi = ml()
          , qi = Il()
          , Gi = Ni()
          , xl = lt()
          , Ft = Ai()
          , bl = "[object Map]"
          , e0 = "[object Object]"
          , Al = "[object Promise]"
          , wl = "[object Set]"
          , Sl = "[object WeakMap]"
          , Ol = "[object DataView]"
          , t0 = Ft(Di)
          , n0 = Ft(Mi)
          , r0 = Ft(Fi)
          , i0 = Ft(qi)
          , o0 = Ft(Gi)
          , yt = xl;
        (Di && yt(new Di(new ArrayBuffer(1))) != Ol || Mi && yt(new Mi) != bl || Fi && yt(Fi.resolve()) != Al || qi && yt(new qi) != wl || Gi && yt(new Gi) != Sl) && (yt = function(e) {
            var t = xl(e)
              , n = t == e0 ? e.constructor : void 0
              , r = n ? Ft(n) : "";
            if (r)
                switch (r) {
                case t0:
                    return Ol;
                case n0:
                    return bl;
                case r0:
                    return Al;
                case i0:
                    return wl;
                case o0:
                    return Sl
                }
            return t
        }
        );
        Rl.exports = yt
    }
    );
    var ql = f( (Bq, Fl) => {
        var Xi = wi()
          , a0 = Si()
          , s0 = Sc()
          , u0 = hl()
          , Cl = nr()
          , Pl = be()
          , Ll = Qn()
          , c0 = Jn()
          , l0 = 1
          , Nl = "[object Arguments]"
          , Dl = "[object Array]"
          , rr = "[object Object]"
          , f0 = Object.prototype
          , Ml = f0.hasOwnProperty;
        function d0(e, t, n, r, i, o) {
            var a = Pl(e)
              , s = Pl(t)
              , u = a ? Dl : Cl(e)
              , l = s ? Dl : Cl(t);
            u = u == Nl ? rr : u,
            l = l == Nl ? rr : l;
            var v = u == rr
              , h = l == rr
              , p = u == l;
            if (p && Ll(e)) {
                if (!Ll(t))
                    return !1;
                a = !0,
                v = !1
            }
            if (p && !v)
                return o || (o = new Xi),
                a || c0(e) ? a0(e, t, n, r, i, o) : s0(e, t, u, n, r, i, o);
            if (!(n & l0)) {
                var g = v && Ml.call(e, "__wrapped__")
                  , _ = h && Ml.call(t, "__wrapped__");
                if (g || _) {
                    var y = g ? e.value() : e
                      , A = _ ? t.value() : t;
                    return o || (o = new Xi),
                    i(y, A, n, r, o)
                }
            }
            return p ? (o || (o = new Xi),
            u0(e, t, n, r, i, o)) : !1
        }
        Fl.exports = d0
    }
    );
    var Vi = f( (Hq, Vl) => {
        var p0 = ql()
          , Gl = rt();
        function Xl(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Gl(e) && !Gl(t) ? e !== e && t !== t : p0(e, t, n, r, Xl, i)
        }
        Vl.exports = Xl
    }
    );
    var kl = f( (Wq, Ul) => {
        var g0 = wi()
          , h0 = Vi()
          , v0 = 1
          , E0 = 2;
        function y0(e, t, n, r) {
            var i = n.length
              , o = i
              , a = !r;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = n[i];
                var u = s[0]
                  , l = e[u]
                  , v = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var h = new g0;
                    if (r)
                        var p = r(l, v, u, e, t, h);
                    if (!(p === void 0 ? h0(v, l, v0 | E0, r, h) : p))
                        return !1
                }
            }
            return !0
        }
        Ul.exports = y0
    }
    );
    var Ui = f( (zq, Bl) => {
        var m0 = Je();
        function _0(e) {
            return e === e && !m0(e)
        }
        Bl.exports = _0
    }
    );
    var Wl = f( (Kq, Hl) => {
        var I0 = Ui()
          , T0 = fn();
        function b0(e) {
            for (var t = T0(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, I0(i)]
            }
            return t
        }
        Hl.exports = b0
    }
    );
    var ki = f( (jq, zl) => {
        function A0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        zl.exports = A0
    }
    );
    var jl = f( (Yq, Kl) => {
        var w0 = kl()
          , S0 = Wl()
          , O0 = ki();
        function x0(e) {
            var t = S0(e);
            return t.length == 1 && t[0][2] ? O0(t[0][0], t[0][1]) : function(n) {
                return n === e || w0(n, e, t)
            }
        }
        Kl.exports = x0
    }
    );
    var dn = f( (Qq, Yl) => {
        var R0 = lt()
          , C0 = rt()
          , P0 = "[object Symbol]";
        function L0(e) {
            return typeof e == "symbol" || C0(e) && R0(e) == P0
        }
        Yl.exports = L0
    }
    );
    var ir = f( ($q, Ql) => {
        var N0 = be()
          , D0 = dn()
          , M0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , F0 = /^\w*$/;
        function q0(e, t) {
            if (N0(e))
                return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || D0(e) ? !0 : F0.test(e) || !M0.test(e) || t != null && e in Object(t)
        }
        Ql.exports = q0
    }
    );
    var Jl = f( (Zq, Zl) => {
        var $l = Kn()
          , G0 = "Expected a function";
        function Bi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(G0);
            var n = function() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o,
                a
            };
            return n.cache = new (Bi.Cache || $l),
            n
        }
        Bi.Cache = $l;
        Zl.exports = Bi
    }
    );
    var tf = f( (Jq, ef) => {
        var X0 = Jl()
          , V0 = 500;
        function U0(e) {
            var t = X0(e, function(r) {
                return n.size === V0 && n.clear(),
                r
            })
              , n = t.cache;
            return t
        }
        ef.exports = U0
    }
    );
    var rf = f( (e1, nf) => {
        var k0 = tf()
          , B0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , H0 = /\\(\\)?/g
          , W0 = k0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(B0, function(n, r, i, o) {
                t.push(i ? o.replace(H0, "$1") : r || n)
            }),
            t
        });
        nf.exports = W0
    }
    );
    var Hi = f( (t1, of) => {
        function z0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
                i[n] = t(e[n], n, e);
            return i
        }
        of.exports = z0
    }
    );
    var ff = f( (n1, lf) => {
        var af = St()
          , K0 = Hi()
          , j0 = be()
          , Y0 = dn()
          , Q0 = 1 / 0
          , sf = af ? af.prototype : void 0
          , uf = sf ? sf.toString : void 0;
        function cf(e) {
            if (typeof e == "string")
                return e;
            if (j0(e))
                return K0(e, cf) + "";
            if (Y0(e))
                return uf ? uf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -Q0 ? "-0" : t
        }
        lf.exports = cf
    }
    );
    var pf = f( (r1, df) => {
        var $0 = ff();
        function Z0(e) {
            return e == null ? "" : $0(e)
        }
        df.exports = Z0
    }
    );
    var pn = f( (i1, gf) => {
        var J0 = be()
          , ew = ir()
          , tw = rf()
          , nw = pf();
        function rw(e, t) {
            return J0(e) ? e : ew(e, t) ? [e] : tw(nw(e))
        }
        gf.exports = rw
    }
    );
    var qt = f( (o1, hf) => {
        var iw = dn()
          , ow = 1 / 0;
        function aw(e) {
            if (typeof e == "string" || iw(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -ow ? "-0" : t
        }
        hf.exports = aw
    }
    );
    var or = f( (a1, vf) => {
        var sw = pn()
          , uw = qt();
        function cw(e, t) {
            t = sw(t, e);
            for (var n = 0, r = t.length; e != null && n < r; )
                e = e[uw(t[n++])];
            return n && n == r ? e : void 0
        }
        vf.exports = cw
    }
    );
    var ar = f( (s1, Ef) => {
        var lw = or();
        function fw(e, t, n) {
            var r = e == null ? void 0 : lw(e, t);
            return r === void 0 ? n : r
        }
        Ef.exports = fw
    }
    );
    var mf = f( (u1, yf) => {
        function dw(e, t) {
            return e != null && t in Object(e)
        }
        yf.exports = dw
    }
    );
    var If = f( (c1, _f) => {
        var pw = pn()
          , gw = sn()
          , hw = be()
          , vw = $n()
          , Ew = Zn()
          , yw = qt();
        function mw(e, t, n) {
            t = pw(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i; ) {
                var a = yw(t[r]);
                if (!(o = e != null && n(e, a)))
                    break;
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length,
            !!i && Ew(i) && vw(a, i) && (hw(e) || gw(e)))
        }
        _f.exports = mw
    }
    );
    var bf = f( (l1, Tf) => {
        var _w = mf()
          , Iw = If();
        function Tw(e, t) {
            return e != null && Iw(e, t, _w)
        }
        Tf.exports = Tw
    }
    );
    var wf = f( (f1, Af) => {
        var bw = Vi()
          , Aw = ar()
          , ww = bf()
          , Sw = ir()
          , Ow = Ui()
          , xw = ki()
          , Rw = qt()
          , Cw = 1
          , Pw = 2;
        function Lw(e, t) {
            return Sw(e) && Ow(t) ? xw(Rw(e), t) : function(n) {
                var r = Aw(n, e);
                return r === void 0 && r === t ? ww(n, e) : bw(t, r, Cw | Pw)
            }
        }
        Af.exports = Lw
    }
    );
    var sr = f( (d1, Sf) => {
        function Nw(e) {
            return e
        }
        Sf.exports = Nw
    }
    );
    var Wi = f( (p1, Of) => {
        function Dw(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Of.exports = Dw
    }
    );
    var Rf = f( (g1, xf) => {
        var Mw = or();
        function Fw(e) {
            return function(t) {
                return Mw(t, e)
            }
        }
        xf.exports = Fw
    }
    );
    var Pf = f( (h1, Cf) => {
        var qw = Wi()
          , Gw = Rf()
          , Xw = ir()
          , Vw = qt();
        function Uw(e) {
            return Xw(e) ? qw(Vw(e)) : Gw(e)
        }
        Cf.exports = Uw
    }
    );
    var dt = f( (v1, Lf) => {
        var kw = jl()
          , Bw = wf()
          , Hw = sr()
          , Ww = be()
          , zw = Pf();
        function Kw(e) {
            return typeof e == "function" ? e : e == null ? Hw : typeof e == "object" ? Ww(e) ? Bw(e[0], e[1]) : kw(e) : zw(e)
        }
        Lf.exports = Kw
    }
    );
    var zi = f( (E1, Nf) => {
        var jw = dt()
          , Yw = Et()
          , Qw = fn();
        function $w(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!Yw(t)) {
                    var o = jw(n, 3);
                    t = Qw(t),
                    n = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Nf.exports = $w
    }
    );
    var Ki = f( (y1, Df) => {
        function Zw(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Df.exports = Zw
    }
    );
    var Ff = f( (m1, Mf) => {
        var Jw = /\s/;
        function eS(e) {
            for (var t = e.length; t-- && Jw.test(e.charAt(t)); )
                ;
            return t
        }
        Mf.exports = eS
    }
    );
    var Gf = f( (_1, qf) => {
        var tS = Ff()
          , nS = /^\s+/;
        function rS(e) {
            return e && e.slice(0, tS(e) + 1).replace(nS, "")
        }
        qf.exports = rS
    }
    );
    var ur = f( (I1, Uf) => {
        var iS = Gf()
          , Xf = Je()
          , oS = dn()
          , Vf = 0 / 0
          , aS = /^[-+]0x[0-9a-f]+$/i
          , sS = /^0b[01]+$/i
          , uS = /^0o[0-7]+$/i
          , cS = parseInt;
        function lS(e) {
            if (typeof e == "number")
                return e;
            if (oS(e))
                return Vf;
            if (Xf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Xf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = iS(e);
            var n = sS.test(e);
            return n || uS.test(e) ? cS(e.slice(2), n ? 2 : 8) : aS.test(e) ? Vf : +e
        }
        Uf.exports = lS
    }
    );
    var Hf = f( (T1, Bf) => {
        var fS = ur()
          , kf = 1 / 0
          , dS = 17976931348623157e292;
        function pS(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = fS(e),
            e === kf || e === -kf) {
                var t = e < 0 ? -1 : 1;
                return t * dS
            }
            return e === e ? e : 0
        }
        Bf.exports = pS
    }
    );
    var ji = f( (b1, Wf) => {
        var gS = Hf();
        function hS(e) {
            var t = gS(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Wf.exports = hS
    }
    );
    var Kf = f( (A1, zf) => {
        var vS = Ki()
          , ES = dt()
          , yS = ji()
          , mS = Math.max;
        function _S(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = n == null ? 0 : yS(n);
            return i < 0 && (i = mS(r + i, 0)),
            vS(e, ES(t, 3), i)
        }
        zf.exports = _S
    }
    );
    var Yi = f( (w1, jf) => {
        var IS = zi()
          , TS = Kf()
          , bS = IS(TS);
        jf.exports = bS
    }
    );
    var $f = {};
    Le($f, {
        ELEMENT_MATCHES: () => AS,
        FLEX_PREFIXED: () => Qi,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => pt,
        TRANSFORM_STYLE_PREFIXED: () => lr,
        withBrowser: () => cr
    });
    var Qf, ze, cr, AS, Qi, pt, Yf, lr, fr = Ee( () => {
        "use strict";
        Qf = de(Yi()),
        ze = typeof window < "u",
        cr = (e, t) => ze ? e() : t,
        AS = cr( () => (0,
        Qf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Qi = cr( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , n = "";
            try {
                let {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return n
            } catch {
                return n
            }
        }
        , "flex"),
        pt = cr( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , n = "Transform"
                  , {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Yf = pt.split("transform")[0],
        lr = Yf ? Yf + "TransformStyle" : "transformStyle"
    }
    );
    var $i = f( (S1, nd) => {
        var wS = 4
          , SS = .001
          , OS = 1e-7
          , xS = 10
          , gn = 11
          , dr = 1 / (gn - 1)
          , RS = typeof Float32Array == "function";
        function Zf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Jf(e, t) {
            return 3 * t - 6 * e
        }
        function ed(e) {
            return 3 * e
        }
        function pr(e, t, n) {
            return ((Zf(t, n) * e + Jf(t, n)) * e + ed(t)) * e
        }
        function td(e, t, n) {
            return 3 * Zf(t, n) * e * e + 2 * Jf(t, n) * e + ed(t)
        }
        function CS(e, t, n, r, i) {
            var o, a, s = 0;
            do
                a = t + (n - t) / 2,
                o = pr(a, r, i) - e,
                o > 0 ? n = a : t = a;
            while (Math.abs(o) > OS && ++s < xS);
            return a
        }
        function PS(e, t, n, r) {
            for (var i = 0; i < wS; ++i) {
                var o = td(t, n, r);
                if (o === 0)
                    return t;
                var a = pr(t, n, r) - e;
                t -= a / o
            }
            return t
        }
        nd.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = RS ? new Float32Array(gn) : new Array(gn);
            if (t !== n || r !== i)
                for (var a = 0; a < gn; ++a)
                    o[a] = pr(a * dr, t, r);
            function s(u) {
                for (var l = 0, v = 1, h = gn - 1; v !== h && o[v] <= u; ++v)
                    l += dr;
                --v;
                var p = (u - o[v]) / (o[v + 1] - o[v])
                  , g = l + p * dr
                  , _ = td(g, t, r);
                return _ >= SS ? PS(u, g, t, r) : _ === 0 ? g : CS(u, l, l + dr, t, r)
            }
            return function(l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : pr(s(l), n, i)
            }
        }
    }
    );
    var vn = {};
    Le(vn, {
        bounce: () => pO,
        bouncePast: () => gO,
        ease: () => LS,
        easeIn: () => NS,
        easeInOut: () => MS,
        easeOut: () => DS,
        inBack: () => iO,
        inCirc: () => eO,
        inCubic: () => XS,
        inElastic: () => sO,
        inExpo: () => $S,
        inOutBack: () => aO,
        inOutCirc: () => nO,
        inOutCubic: () => US,
        inOutElastic: () => cO,
        inOutExpo: () => JS,
        inOutQuad: () => GS,
        inOutQuart: () => HS,
        inOutQuint: () => KS,
        inOutSine: () => QS,
        inQuad: () => FS,
        inQuart: () => kS,
        inQuint: () => WS,
        inSine: () => jS,
        outBack: () => oO,
        outBounce: () => rO,
        outCirc: () => tO,
        outCubic: () => VS,
        outElastic: () => uO,
        outExpo: () => ZS,
        outQuad: () => qS,
        outQuart: () => BS,
        outQuint: () => zS,
        outSine: () => YS,
        swingFrom: () => fO,
        swingFromTo: () => lO,
        swingTo: () => dO
    });
    function FS(e) {
        return Math.pow(e, 2)
    }
    function qS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function GS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function XS(e) {
        return Math.pow(e, 3)
    }
    function VS(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function US(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function kS(e) {
        return Math.pow(e, 4)
    }
    function BS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function HS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function WS(e) {
        return Math.pow(e, 5)
    }
    function zS(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function KS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function jS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function YS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function QS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function $S(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function ZS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function JS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function eO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function tO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function nO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function rO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function iO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }
    function oO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function aO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function sO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }
    function uO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }
    function cO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
    function lO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function fO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }
    function dO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function pO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function gO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var hn, it, LS, NS, DS, MS, Zi = Ee( () => {
        "use strict";
        hn = de($i()),
        it = 1.70158,
        LS = (0,
        hn.default)(.25, .1, .25, 1),
        NS = (0,
        hn.default)(.42, 0, 1, 1),
        DS = (0,
        hn.default)(0, 0, .58, 1),
        MS = (0,
        hn.default)(.42, 0, .58, 1)
    }
    );
    var id = {};
    Le(id, {
        applyEasing: () => vO,
        createBezierEasing: () => hO,
        optimizeFloat: () => En
    });
    function En(e, t=5, n=10) {
        let r = Math.pow(n, t)
          , i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function hO(e) {
        return (0,
        rd.default)(...e)
    }
    function vO(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : En(n ? t > 0 ? n(t) : t : t > 0 && e && vn[e] ? vn[e](t) : t)
    }
    var rd, Ji = Ee( () => {
        "use strict";
        Zi();
        rd = de($i())
    }
    );
    var sd = {};
    Le(sd, {
        createElementState: () => ad,
        ixElements: () => CO,
        mergeActionState: () => eo
    });
    function ad(e, t, n, r, i) {
        let o = n === EO ? (0,
        Gt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Gt.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }
    function eo(e, t, n, r, i) {
        let o = LO(i);
        return (0,
        Gt.mergeIn)(e, [t, RO, n], r, o)
    }
    function LO(e) {
        let {config: t} = e;
        return PO.reduce( (n, r) => {
            let i = r[0]
              , o = r[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (n[o] = s),
            n
        }
        , {})
    }
    var Gt, x1, EO, R1, yO, mO, _O, IO, TO, bO, AO, wO, SO, OO, xO, od, RO, CO, PO, ud = Ee( () => {
        "use strict";
        Gt = de(Rt());
        Ne();
        ({HTML_ELEMENT: x1, PLAIN_OBJECT: EO, ABSTRACT_NODE: R1, CONFIG_X_VALUE: yO, CONFIG_Y_VALUE: mO, CONFIG_Z_VALUE: _O, CONFIG_VALUE: IO, CONFIG_X_UNIT: TO, CONFIG_Y_UNIT: bO, CONFIG_Z_UNIT: AO, CONFIG_UNIT: wO} = we),
        {IX2_SESSION_STOPPED: SO, IX2_INSTANCE_ADDED: OO, IX2_ELEMENT_STATE_CHANGED: xO} = Te,
        od = {},
        RO = "refState",
        CO = (e=od, t={}) => {
            switch (t.type) {
            case SO:
                return od;
            case OO:
                {
                    let {elementId: n, element: r, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    Gt.getIn)(u, [n, r]) !== r && (u = ad(u, r, a, n, o)),
                    eo(u, n, s, i, o)
                }
            case xO:
                {
                    let {elementId: n, actionTypeId: r, current: i, actionItem: o} = t.payload;
                    return eo(e, n, r, i, o)
                }
            default:
                return e
            }
        }
        ;
        PO = [[yO, TO], [mO, bO], [_O, AO], [IO, wO]]
    }
    );
    var cd = f(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {
            value: !0
        });
        function NO(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        NO(to, {
            clearPlugin: function() {
                return VO
            },
            createPluginInstance: function() {
                return GO
            },
            getPluginConfig: function() {
                return DO
            },
            getPluginDestination: function() {
                return qO
            },
            getPluginDuration: function() {
                return MO
            },
            getPluginOrigin: function() {
                return FO
            },
            renderPlugin: function() {
                return XO
            }
        });
        var DO = e => e.value
          , MO = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , FO = e => e || {
            value: 0
        }
          , qO = e => ({
            value: e.value
        })
          , GO = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , XO = (e, t, n) => {
            if (!e)
                return;
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
          , VO = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var fd = f(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        function UO(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        UO(no, {
            clearPlugin: function() {
                return $O
            },
            createPluginInstance: function() {
                return YO
            },
            getPluginConfig: function() {
                return WO
            },
            getPluginDestination: function() {
                return jO
            },
            getPluginDuration: function() {
                return zO
            },
            getPluginOrigin: function() {
                return KO
            },
            renderPlugin: function() {
                return QO
            }
        });
        var kO = e => document.querySelector(`[data-w-id="${e}"]`)
          , BO = () => window.Webflow.require("spline")
          , HO = (e, t) => e.filter(n => !t.includes(n))
          , WO = (e, t) => e.value[t]
          , zO = () => null
          , ld = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , KO = (e, t) => {
            let n = t.config.value
              , r = Object.keys(n);
            if (e) {
                let o = Object.keys(e)
                  , a = HO(r, o);
                return a.length ? a.reduce( (u, l) => (u[l] = ld[l],
                u), e) : e
            }
            return r.reduce( (o, a) => (o[a] = ld[a],
            o), {})
        }
          , jO = e => e.value
          , YO = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? kO(n) : null
        }
          , QO = (e, t, n) => {
            let r = BO()
              , i = r.getInstance(e)
              , o = n.config.target.objectId
              , a = s => {
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : r.setLoadHandler(e, a)
        }
          , $O = () => null
    }
    );
    var dd = f(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        function ZO(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ZO(oo, {
            clearPlugin: function() {
                return sx
            },
            createPluginInstance: function() {
                return ox
            },
            getPluginConfig: function() {
                return tx
            },
            getPluginDestination: function() {
                return ix
            },
            getPluginDuration: function() {
                return nx
            },
            getPluginOrigin: function() {
                return rx
            },
            renderPlugin: function() {
                return ax
            }
        });
        var ro = "--wf-rive-fit"
          , io = "--wf-rive-alignment"
          , JO = e => document.querySelector(`[data-w-id="${e}"]`)
          , ex = () => window.Webflow.require("rive")
          , tx = (e, t) => e.value.inputs[t]
          , nx = () => null
          , rx = (e, t) => {
            if (e)
                return e;
            let n = {}
              , {inputs: r={}} = t.config.value;
            for (let i in r)
                r[i] == null && (n[i] = 0);
            return n
        }
          , ix = e => e.value.inputs ?? {}
          , ox = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0)
                return e;
            let r = t?.config?.target?.pluginElement;
            return r ? JO(r) : null
        }
          , ax = (e, {PLUGIN_RIVE: t}, n) => {
            let r = ex()
              , i = r.getInstance(e)
              , o = r.rive.StateMachineInputType
              , {name: a, inputs: s={}} = n.config.value || {};
            function u(l) {
                if (l.loaded)
                    v();
                else {
                    let h = () => {
                        v(),
                        l?.off("load", h)
                    }
                    ;
                    l?.on("load", h)
                }
                function v() {
                    let h = l.stateMachineInputs(a);
                    if (h != null) {
                        if (l.isPlaying || l.play(a, !1),
                        ro in s || io in s) {
                            let p = l.layout
                              , g = s[ro] ?? p.fit
                              , _ = s[io] ?? p.alignment;
                            (g !== p.fit || _ !== p.alignment) && (l.layout = p.copyWith({
                                fit: g,
                                alignment: _
                            }))
                        }
                        for (let p in s) {
                            if (p === ro || p === io)
                                continue;
                            let g = h.find(_ => _.name === p);
                            if (g != null)
                                switch (g.type) {
                                case o.Boolean:
                                    {
                                        if (s[p] != null) {
                                            let _ = !!s[p];
                                            g.value = _
                                        }
                                        break
                                    }
                                case o.Number:
                                    {
                                        let _ = t[p];
                                        _ != null && (g.value = _);
                                        break
                                    }
                                case o.Trigger:
                                    {
                                        s[p] && g.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            i?.rive ? u(i.rive) : r.setLoadHandler(e, u)
        }
          , sx = (e, t) => null
    }
    );
    var so = f(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        Object.defineProperty(ao, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return ux
            }
        });
        var pd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function ux(e) {
            let t, n, r, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof pd[o] == "string" ? pd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
                n = parseInt(u[1] + u[1], 16),
                r = parseInt(u[2] + u[2], 16),
                u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
                n = parseInt(u.substring(2, 4), 16),
                r = parseInt(u.substring(4, 6), 16),
                u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , v = parseFloat(u[1].replace("%", "")) / 100
                  , h = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * h - 1)) * v, g = p * (1 - Math.abs(l / 60 % 2 - 1)), _ = h - p / 2, y, A, m;
                l >= 0 && l < 60 ? (y = p,
                A = g,
                m = 0) : l >= 60 && l < 120 ? (y = g,
                A = p,
                m = 0) : l >= 120 && l < 180 ? (y = 0,
                A = p,
                m = g) : l >= 180 && l < 240 ? (y = 0,
                A = g,
                m = p) : l >= 240 && l < 300 ? (y = g,
                A = 0,
                m = p) : (y = p,
                A = 0,
                m = g),
                t = Math.round((y + _) * 255),
                n = Math.round((A + _) * 255),
                r = Math.round((m + _) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), v = parseFloat(u[1].replace("%", "")) / 100, h = parseFloat(u[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * h - 1)) * v, g = p * (1 - Math.abs(l / 60 % 2 - 1)), _ = h - p / 2, y, A, m;
                l >= 0 && l < 60 ? (y = p,
                A = g,
                m = 0) : l >= 60 && l < 120 ? (y = g,
                A = p,
                m = 0) : l >= 120 && l < 180 ? (y = 0,
                A = p,
                m = g) : l >= 180 && l < 240 ? (y = 0,
                A = g,
                m = p) : l >= 240 && l < 300 ? (y = g,
                A = 0,
                m = p) : (y = p,
                A = 0,
                m = g),
                t = Math.round((y + _) * 255),
                n = Math.round((A + _) * 255),
                r = Math.round((m + _) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    }
    );
    var gd = f(uo => {
        "use strict";
        Object.defineProperty(uo, "__esModule", {
            value: !0
        });
        function cx(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        cx(uo, {
            clearPlugin: function() {
                return yx
            },
            createPluginInstance: function() {
                return hx
            },
            getPluginConfig: function() {
                return fx
            },
            getPluginDestination: function() {
                return gx
            },
            getPluginDuration: function() {
                return dx
            },
            getPluginOrigin: function() {
                return px
            },
            renderPlugin: function() {
                return Ex
            }
        });
        var lx = so()
          , fx = (e, t) => e.value[t]
          , dx = () => null
          , px = (e, t) => {
            if (e)
                return e;
            let n = t.config.value
              , r = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (n.unit === "%" || n.unit === "-")
                return {
                    size: parseFloat(i)
                };
            if (n.red != null && n.green != null && n.blue != null)
                return (0,
                lx.normalizeColor)(i)
        }
          , gx = e => e.value
          , hx = () => null
          , vx = {
            color: {
                match: ({red: e, green: t, blue: n, alpha: r}) => [e, t, n, r].every(i => i != null),
                getValue: ({red: e, green: t, blue: n, alpha: r}) => `rgba(${e}, ${t}, ${n}, ${r})`
            },
            size: {
                match: ({size: e}) => e != null,
                getValue: ({size: e}, t) => {
                    switch (t) {
                    case "-":
                        return e;
                    default:
                        return `${e}${t}`
                    }
                }
            }
        }
          , Ex = (e, t, n) => {
            let {target: {objectId: r}, value: {unit: i}} = n.config
              , o = t.PLUGIN_VARIABLE
              , a = Object.values(vx).find(s => s.match(o, i));
            a && document.documentElement.style.setProperty(r, a.getValue(o, i))
        }
          , yx = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    }
    );
    var vd = f(co => {
        "use strict";
        Object.defineProperty(co, "__esModule", {
            value: !0
        });
        Object.defineProperty(co, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return bx
            }
        });
        var gr = (Ne(),
        Ye(ms))
          , mx = hr(cd())
          , _x = hr(fd())
          , Ix = hr(dd())
          , Tx = hr(gd());
        function hd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (hd = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function hr(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = hd(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var bx = new Map([[gr.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...mx
        }], [gr.ActionTypeConsts.PLUGIN_SPLINE, {
            ..._x
        }], [gr.ActionTypeConsts.PLUGIN_RIVE, {
            ...Ix
        }], [gr.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...Tx
        }]])
    }
    );
    var Ed = {};
    Le(Ed, {
        clearPlugin: () => vo,
        createPluginInstance: () => wx,
        getPluginConfig: () => fo,
        getPluginDestination: () => go,
        getPluginDuration: () => Ax,
        getPluginOrigin: () => po,
        isPluginType: () => mt,
        renderPlugin: () => ho
    });
    function mt(e) {
        return lo.pluginMethodMap.has(e)
    }
    var lo, _t, fo, po, Ax, go, wx, ho, vo, Eo = Ee( () => {
        "use strict";
        fr();
        lo = de(vd());
        _t = e => t => {
            if (!ze)
                return () => null;
            let n = lo.pluginMethodMap.get(t);
            if (!n)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }
        ,
        fo = _t("getPluginConfig"),
        po = _t("getPluginOrigin"),
        Ax = _t("getPluginDuration"),
        go = _t("getPluginDestination"),
        wx = _t("createPluginInstance"),
        ho = _t("renderPlugin"),
        vo = _t("clearPlugin")
    }
    );
    var md = f( (q1, yd) => {
        function Sx(e, t) {
            return e == null || e !== e ? t : e
        }
        yd.exports = Sx
    }
    );
    var Id = f( (G1, _d) => {
        function Ox(e, t, n, r) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o; )
                n = t(n, e[i], i, e);
            return n
        }
        _d.exports = Ox
    }
    );
    var bd = f( (X1, Td) => {
        function xx(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (n(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        Td.exports = xx
    }
    );
    var wd = f( (V1, Ad) => {
        var Rx = bd()
          , Cx = Rx();
        Ad.exports = Cx
    }
    );
    var yo = f( (U1, Sd) => {
        var Px = wd()
          , Lx = fn();
        function Nx(e, t) {
            return e && Px(e, t, Lx)
        }
        Sd.exports = Nx
    }
    );
    var xd = f( (k1, Od) => {
        var Dx = Et();
        function Mx(e, t) {
            return function(n, r) {
                if (n == null)
                    return n;
                if (!Dx(n))
                    return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
                    ;
                return n
            }
        }
        Od.exports = Mx
    }
    );
    var mo = f( (B1, Rd) => {
        var Fx = yo()
          , qx = xd()
          , Gx = qx(Fx);
        Rd.exports = Gx
    }
    );
    var Pd = f( (H1, Cd) => {
        function Xx(e, t, n, r, i) {
            return i(e, function(o, a, s) {
                n = r ? (r = !1,
                o) : t(n, o, a, s)
            }),
            n
        }
        Cd.exports = Xx
    }
    );
    var Nd = f( (W1, Ld) => {
        var Vx = Id()
          , Ux = mo()
          , kx = dt()
          , Bx = Pd()
          , Hx = be();
        function Wx(e, t, n) {
            var r = Hx(e) ? Vx : Bx
              , i = arguments.length < 3;
            return r(e, kx(t, 4), n, i, Ux)
        }
        Ld.exports = Wx
    }
    );
    var Md = f( (z1, Dd) => {
        var zx = Ki()
          , Kx = dt()
          , jx = ji()
          , Yx = Math.max
          , Qx = Math.min;
        function $x(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== void 0 && (i = jx(n),
            i = n < 0 ? Yx(r + i, 0) : Qx(i, r - 1)),
            zx(e, Kx(t, 3), i, !0)
        }
        Dd.exports = $x
    }
    );
    var qd = f( (K1, Fd) => {
        var Zx = zi()
          , Jx = Md()
          , eR = Zx(Jx);
        Fd.exports = eR
    }
    );
    function Gd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function tR(e, t) {
        if (Gd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !Gd(e[n[i]], t[n[i]]))
                return !1;
        return !0
    }
    var _o, Xd = Ee( () => {
        "use strict";
        _o = tR
    }
    );
    var rp = {};
    Le(rp, {
        cleanupHTMLElement: () => ZR,
        clearAllStyles: () => $R,
        clearObjectCache: () => yR,
        getActionListProgress: () => eC,
        getAffectedElements: () => wo,
        getComputedStyle: () => SR,
        getDestinationValues: () => NR,
        getElementId: () => TR,
        getInstanceId: () => _R,
        getInstanceOrigin: () => RR,
        getItemConfigByKey: () => LR,
        getMaxDurationItemIndex: () => np,
        getNamespacedParameterId: () => rC,
        getRenderType: () => Jd,
        getStyleProp: () => DR,
        mediaQueriesEqual: () => oC,
        observeStore: () => wR,
        reduceListToGroup: () => tC,
        reifyState: () => bR,
        renderHTMLElement: () => MR,
        shallowEqual: () => _o,
        shouldAllowMediaQuery: () => iC,
        shouldNamespaceEventParameter: () => nC,
        stringifyTarget: () => aC
    });
    function yR() {
        vr.clear()
    }
    function _R() {
        return "i" + mR++
    }
    function TR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t)
                return r.id
        }
        return "e" + IR++
    }
    function bR({events: e, actionLists: t, site: n}={}) {
        let r = (0,
        _r.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = n && n.mediaQueries
          , o = [];
        return i ? o = i.map(a => a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function wR({store: e, select: t, onChange: n, comparator: r=AR}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            r(l, s) || (s = l,
            n(s, e))
        }
        return a
    }
    function kd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function wo({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (F, b) => F.concat(wo({
                config: {
                    target: b
                },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: v, matchSelector: h, elementContains: p, isSiblingNode: g} = i
          , {target: _} = e;
        if (!_)
            return [];
        let {id: y, objectId: A, selector: m, selectorGuids: O, appliesTo: w, useEventTarget: x} = kd(_);
        if (A)
            return [vr.has(A) ? vr.get(A) : vr.set(A, {}).get(A)];
        if (w === yi.PAGE) {
            let F = a(y);
            return F ? [F] : []
        }
        let R = (t?.action?.config?.affectedElements ?? {})[y || m] || {}, B = !!(R.id || R.selector), K, j, Q, ne = t && s(kd(t.target));
        if (B ? (K = R.limitAffectedElements,
        j = ne,
        Q = s(R)) : j = Q = s({
            id: y,
            selector: m,
            selectorGuids: O
        }),
        t && x) {
            let F = n && (Q || x === !0) ? [n] : u(ne);
            if (Q) {
                if (x === hR)
                    return u(Q).filter(b => F.some(N => p(b, N)));
                if (x === Vd)
                    return u(Q).filter(b => F.some(N => p(N, b)));
                if (x === Ud)
                    return u(Q).filter(b => F.some(N => g(N, b)))
            }
            return F
        }
        return j == null || Q == null ? [] : ze && r ? u(Q).filter(F => r.contains(F)) : K === Vd ? u(j, Q) : K === gR ? l(u(j)).filter(h(Q)) : K === Ud ? v(u(j)).filter(h(Q)) : u(Q)
    }
    function SR({element: e, actionItem: t}) {
        if (!ze)
            return {};
        let {actionTypeId: n} = t;
        switch (n) {
        case Bt:
        case Ht:
        case Wt:
        case zt:
        case Tr:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function RR(e, t={}, n={}, r, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = r;
        if (mt(a))
            return po(a)(t[a], r);
        switch (r.actionTypeId) {
        case Vt:
        case Ut:
        case kt:
        case In:
            return t[r.actionTypeId] || So[r.actionTypeId];
        case Tn:
            return OR(t[r.actionTypeId], r.config.filters);
        case bn:
            return xR(t[r.actionTypeId], r.config.fontVariations);
        case Qd:
            return {
                value: (0,
                ot.default)(parseFloat(o(e, yr)), 1)
            };
        case Bt:
            {
                let s = o(e, et), u = o(e, tt), l, v;
                return r.config.widthUnit === gt ? l = Bd.test(s) ? parseFloat(s) : parseFloat(n.width) : l = (0,
                ot.default)(parseFloat(s), parseFloat(n.width)),
                r.config.heightUnit === gt ? v = Bd.test(u) ? parseFloat(u) : parseFloat(n.height) : v = (0,
                ot.default)(parseFloat(u), parseFloat(n.height)),
                {
                    widthValue: l,
                    heightValue: v
                }
            }
        case Ht:
        case Wt:
        case zt:
            return jR({
                element: e,
                actionTypeId: r.actionTypeId,
                computedStyle: n,
                getStyle: o
            });
        case Tr:
            return {
                value: (0,
                ot.default)(o(e, mr), n.display)
            };
        case ER:
            return t[r.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function NR({element: e, actionItem: t, elementApi: n}) {
        if (mt(t.actionTypeId))
            return go(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Vt:
        case Ut:
        case kt:
        case In:
            {
                let {xValue: r, yValue: i, zValue: o} = t.config;
                return {
                    xValue: r,
                    yValue: i,
                    zValue: o
                }
            }
        case Bt:
            {
                let {getStyle: r, setStyle: i, getProperty: o} = n
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!ze)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === gt) {
                    let v = r(e, et);
                    i(e, et, ""),
                    u = o(e, "offsetWidth"),
                    i(e, et, v)
                }
                if (s === gt) {
                    let v = r(e, tt);
                    i(e, tt, ""),
                    l = o(e, "offsetHeight"),
                    i(e, tt, v)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case Ht:
        case Wt:
        case zt:
            {
                let {rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = n
                      , l = u(e, s)
                      , v = (0,
                    zd.normalizeColor)(l);
                    return {
                        rValue: v.red,
                        gValue: v.green,
                        bValue: v.blue,
                        aValue: v.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Tn:
            return t.config.filters.reduce(CR, {});
        case bn:
            return t.config.fontVariations.reduce(PR, {});
        default:
            {
                let {value: r} = t.config;
                return {
                    value: r
                }
            }
        }
    }
    function Jd(e) {
        if (/^TRANSFORM_/.test(e))
            return jd;
        if (/^STYLE_/.test(e))
            return bo;
        if (/^GENERAL_/.test(e))
            return To;
        if (/^PLUGIN_/.test(e))
            return Yd
    }
    function DR(e, t) {
        return e === bo ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function MR(e, t, n, r, i, o, a, s, u) {
        switch (s) {
        case jd:
            return VR(e, t, n, i, a);
        case bo:
            return YR(e, t, n, i, o, a);
        case To:
            return QR(e, i, a);
        case Yd:
            {
                let {actionTypeId: l} = i;
                if (mt(l))
                    return ho(l)(u, t, i)
            }
        }
    }
    function VR(e, t, n, r, i) {
        let o = XR.map(s => {
            let u = So[s]
              , {xValue: l=u.xValue, yValue: v=u.yValue, zValue: h=u.zValue, xUnit: p="", yUnit: g="", zUnit: _=""} = t[s] || {};
            switch (s) {
            case Vt:
                return `${iR}(${l}${p}, ${v}${g}, ${h}${_})`;
            case Ut:
                return `${oR}(${l}${p}, ${v}${g}, ${h}${_})`;
            case kt:
                return `${aR}(${l}${p}) ${sR}(${v}${g}) ${uR}(${h}${_})`;
            case In:
                return `${cR}(${l}${p}, ${v}${g})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        It(e, pt, i),
        a(e, pt, o),
        BR(r, n) && a(e, lr, lR)
    }
    function UR(e, t, n, r) {
        let i = (0,
        _r.default)(t, (a, s, u) => `${a} ${u}(${s}${GR(u, n)})`, "")
          , {setStyle: o} = r;
        It(e, yn, r),
        o(e, yn, i)
    }
    function kR(e, t, n, r) {
        let i = (0,
        _r.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = r;
        It(e, mn, r),
        o(e, mn, i)
    }
    function BR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Vt && r !== void 0 || e === Ut && r !== void 0 || e === kt && (t !== void 0 || n !== void 0)
    }
    function KR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }
    function jR({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let i = Ao[t]
          , o = r(e, i)
          , a = WR.test(o) ? o : n[i]
          , s = KR(zR, a).split(_n);
        return {
            rValue: (0,
            ot.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            ot.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            ot.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            ot.default)(parseFloat(s[3]), 1)
        }
    }
    function YR(e, t, n, r, i, o) {
        let {setStyle: a} = o;
        switch (r.actionTypeId) {
        case Bt:
            {
                let {widthUnit: s="", heightUnit: u=""} = r.config
                  , {widthValue: l, heightValue: v} = n;
                l !== void 0 && (s === gt && (s = "px"),
                It(e, et, o),
                a(e, et, l + s)),
                v !== void 0 && (u === gt && (u = "px"),
                It(e, tt, o),
                a(e, tt, v + u));
                break
            }
        case Tn:
            {
                UR(e, n, r.config, o);
                break
            }
        case bn:
            {
                kR(e, n, r.config, o);
                break
            }
        case Ht:
        case Wt:
        case zt:
            {
                let s = Ao[r.actionTypeId]
                  , u = Math.round(n.rValue)
                  , l = Math.round(n.gValue)
                  , v = Math.round(n.bValue)
                  , h = n.aValue;
                It(e, s, o),
                a(e, s, h >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${h})`);
                break
            }
        default:
            {
                let {unit: s=""} = r.config;
                It(e, i, o),
                a(e, i, n.value + s);
                break
            }
        }
    }
    function QR(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
        case Tr:
            {
                let {value: i} = t.config;
                i === fR && ze ? r(e, mr, Qi) : r(e, mr, i);
                return
            }
        }
    }
    function It(e, t, n) {
        if (!ze)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Xt);
        if (!a) {
            o(e, Xt, r);
            return
        }
        let s = a.split(_n).map($d);
        s.indexOf(r) === -1 && o(e, Xt, s.concat(r).join(_n))
    }
    function ep(e, t, n) {
        if (!ze)
            return;
        let r = Zd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Xt);
        !a || a.indexOf(r) === -1 || o(e, Xt, a.split(_n).map($d).filter(s => s !== r).join(_n))
    }
    function $R({store: e, elementApi: t}) {
        let {ixData: n} = e.getState()
          , {events: r={}, actionLists: i={}} = n;
        Object.keys(r).forEach(o => {
            let a = r[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && Hd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Hd({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Hd({actionList: e={}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e;
        r && r.forEach(o => {
            Wd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                Wd({
                    actionGroup: s,
                    event: t,
                    elementApi: n
                })
            }
            )
        }
        )
    }
    function Wd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            mt(o) ? s = u => vo(o)(u, i) : s = tp({
                effect: JR,
                actionTypeId: o,
                elementApi: n
            }),
            wo({
                config: a,
                event: t,
                elementApi: n
            }).forEach(s)
        }
        )
    }
    function ZR(e, t, n) {
        let {setStyle: r, getStyle: i} = n
          , {actionTypeId: o} = t;
        if (o === Bt) {
            let {config: a} = t;
            a.widthUnit === gt && r(e, et, ""),
            a.heightUnit === gt && r(e, tt, "")
        }
        i(e, Xt) && tp({
            effect: ep,
            actionTypeId: o,
            elementApi: n
        })(e)
    }
    function JR(e, t, n) {
        let {setStyle: r} = n;
        ep(e, t, n),
        r(e, t, ""),
        t === pt && r(e, lr, "")
    }
    function np(e) {
        let t = 0
          , n = 0;
        return e.forEach( (r, i) => {
            let {config: o} = r
              , a = o.delay + o.duration;
            a >= t && (t = a,
            n = i)
        }
        ),
        n
    }
    function eC(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return n.forEach( (u, l) => {
            if (r && l === 0)
                return;
            let {actionItems: v} = u
              , h = v[np(v)]
              , {config: p, actionTypeId: g} = h;
            i.id === h.id && (s = a + o);
            let _ = Jd(g) === To ? 0 : p.duration;
            a += p.delay + _
        }
        ),
        a > 0 ? En(s / a) : 0
    }
    function tC({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e
          , o = []
          , a = s => (o.push((0,
        Ir.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return r && r.some( ({actionItems: s}) => s.some(a)),
        i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some( ({actionItems: l}) => l.some(a))
        }
        ),
        (0,
        Ir.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function nC(e, {basedOn: t}) {
        return e === We.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null) || e === We.MOUSE_MOVE && t === Ze.ELEMENT
    }
    function rC(e, t) {
        return e + vR + t
    }
    function iC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function oC(e, t) {
        return _o(e && e.sort(), t && t.sort())
    }
    function aC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Io + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: n="", useEventTarget: r=""} = e;
        return t + Io + n + Io + r
    }
    var ot, _r, Er, Ir, zd, nR, rR, iR, oR, aR, sR, uR, cR, lR, fR, yr, yn, mn, et, tt, Kd, dR, pR, Vd, gR, Ud, hR, mr, Xt, gt, _n, vR, Io, jd, To, bo, Yd, Vt, Ut, kt, In, Qd, Tn, bn, Bt, Ht, Wt, zt, Tr, ER, $d, Ao, Zd, vr, mR, IR, AR, Bd, OR, xR, CR, PR, LR, So, FR, qR, GR, XR, HR, WR, zR, tp, ip = Ee( () => {
        "use strict";
        ot = de(md()),
        _r = de(Nd()),
        Er = de(qd()),
        Ir = de(Rt());
        Ne();
        Xd();
        Ji();
        zd = de(so());
        Eo();
        fr();
        ({BACKGROUND: nR, TRANSFORM: rR, TRANSLATE_3D: iR, SCALE_3D: oR, ROTATE_X: aR, ROTATE_Y: sR, ROTATE_Z: uR, SKEW: cR, PRESERVE_3D: lR, FLEX: fR, OPACITY: yr, FILTER: yn, FONT_VARIATION_SETTINGS: mn, WIDTH: et, HEIGHT: tt, BACKGROUND_COLOR: Kd, BORDER_COLOR: dR, COLOR: pR, CHILDREN: Vd, IMMEDIATE_CHILDREN: gR, SIBLINGS: Ud, PARENT: hR, DISPLAY: mr, WILL_CHANGE: Xt, AUTO: gt, COMMA_DELIMITER: _n, COLON_DELIMITER: vR, BAR_DELIMITER: Io, RENDER_TRANSFORM: jd, RENDER_GENERAL: To, RENDER_STYLE: bo, RENDER_PLUGIN: Yd} = we),
        {TRANSFORM_MOVE: Vt, TRANSFORM_SCALE: Ut, TRANSFORM_ROTATE: kt, TRANSFORM_SKEW: In, STYLE_OPACITY: Qd, STYLE_FILTER: Tn, STYLE_FONT_VARIATION: bn, STYLE_SIZE: Bt, STYLE_BACKGROUND_COLOR: Ht, STYLE_BORDER: Wt, STYLE_TEXT_COLOR: zt, GENERAL_DISPLAY: Tr, OBJECT_VALUE: ER} = xe,
        $d = e => e.trim(),
        Ao = Object.freeze({
            [Ht]: Kd,
            [Wt]: dR,
            [zt]: pR
        }),
        Zd = Object.freeze({
            [pt]: rR,
            [Kd]: nR,
            [yr]: yr,
            [yn]: yn,
            [et]: et,
            [tt]: tt,
            [mn]: mn
        }),
        vr = new Map;
        mR = 1;
        IR = 1;
        AR = (e, t) => e === t;
        Bd = /px/,
        OR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = FR[r.type]),
        n), e || {}),
        xR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = qR[r.type] || r.defaultValue || 0),
        n), e || {});
        CR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        PR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        LR = (e, t, n) => {
            if (mt(e))
                return fo(e)(n, t);
            switch (e) {
            case Tn:
                {
                    let r = (0,
                    Er.default)(n.filters, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            case bn:
                {
                    let r = (0,
                    Er.default)(n.fontVariations, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        So = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ut]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [In]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        FR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        qR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        GR = (e, t) => {
            let n = (0,
            Er.default)(t.filters, ({type: r}) => r === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        XR = Object.keys(So);
        HR = "\\(([^)]+)\\)",
        WR = /^rgb/,
        zR = RegExp(`rgba?${HR}`);
        tp = ({effect: e, actionTypeId: t, elementApi: n}) => r => {
            switch (t) {
            case Vt:
            case Ut:
            case kt:
            case In:
                e(r, pt, n);
                break;
            case Tn:
                e(r, yn, n);
                break;
            case bn:
                e(r, mn, n);
                break;
            case Qd:
                e(r, yr, n);
                break;
            case Bt:
                e(r, et, n),
                e(r, tt, n);
                break;
            case Ht:
            case Wt:
            case zt:
                e(r, Ao[t], n);
                break;
            case Tr:
                e(r, mr, n);
                break
            }
        }
    }
    );
    var Tt = f(Oo => {
        "use strict";
        Object.defineProperty(Oo, "__esModule", {
            value: !0
        });
        function sC(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        sC(Oo, {
            IX2BrowserSupport: function() {
                return uC
            },
            IX2EasingUtils: function() {
                return lC
            },
            IX2Easings: function() {
                return cC
            },
            IX2ElementsReducer: function() {
                return fC
            },
            IX2VanillaPlugins: function() {
                return dC
            },
            IX2VanillaUtils: function() {
                return pC
            }
        });
        var uC = Kt((fr(),
        Ye($f)))
          , cC = Kt((Zi(),
        Ye(vn)))
          , lC = Kt((Ji(),
        Ye(id)))
          , fC = Kt((ud(),
        Ye(sd)))
          , dC = Kt((Eo(),
        Ye(Ed)))
          , pC = Kt((ip(),
        Ye(rp)));
        function op(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (op = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function Kt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = op(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
    }
    );
    var Ar, at, gC, hC, vC, EC, yC, mC, br, ap, _C, IC, xo, TC, bC, AC, wC, sp, up = Ee( () => {
        "use strict";
        Ne();
        Ar = de(Tt()),
        at = de(Rt()),
        {IX2_RAW_DATA_IMPORTED: gC, IX2_SESSION_STOPPED: hC, IX2_INSTANCE_ADDED: vC, IX2_INSTANCE_STARTED: EC, IX2_INSTANCE_REMOVED: yC, IX2_ANIMATION_FRAME_CHANGED: mC} = Te,
        {optimizeFloat: br, applyEasing: ap, createBezierEasing: _C} = Ar.IX2EasingUtils,
        {RENDER_GENERAL: IC} = we,
        {getItemConfigByKey: xo, getRenderType: TC, getStyleProp: bC} = Ar.IX2VanillaUtils,
        AC = (e, t) => {
            let {position: n, parameterId: r, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: v, skipToValue: h} = e
              , {parameters: p} = t.payload
              , g = Math.max(1 - a, .01)
              , _ = p[r];
            _ == null && (g = 1,
            _ = s);
            let y = Math.max(_, 0) || 0
              , A = br(y - n)
              , m = v ? h : br(n + A * g)
              , O = m * 100;
            if (m === n && e.current)
                return e;
            let w, x, L, R;
            for (let K = 0, {length: j} = i; K < j; K++) {
                let {keyframe: Q, actionItems: ne} = i[K];
                if (K === 0 && (w = ne[0]),
                O >= Q) {
                    w = ne[0];
                    let F = i[K + 1]
                      , b = F && O !== Q;
                    x = b ? F.actionItems[0] : null,
                    b && (L = Q / 100,
                    R = (F.keyframe - Q) / 100)
                }
            }
            let B = {};
            if (w && !x)
                for (let K = 0, {length: j} = o; K < j; K++) {
                    let Q = o[K];
                    B[Q] = xo(u, Q, w.config)
                }
            else if (w && x && L !== void 0 && R !== void 0) {
                let K = (m - L) / R
                  , j = w.config.easing
                  , Q = ap(j, K, l);
                for (let ne = 0, {length: F} = o; ne < F; ne++) {
                    let b = o[ne]
                      , N = xo(u, b, w.config)
                      , D = (xo(u, b, x.config) - N) * Q + N;
                    B[b] = D
                }
            }
            return (0,
            at.merge)(e, {
                position: m,
                current: B
            })
        }
        ,
        wC = (e, t) => {
            let {active: n, origin: r, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: v, pluginDuration: h, instanceDelay: p, customEasingFn: g, skipMotion: _} = e
              , y = u.config.easing
              , {duration: A, delay: m} = u.config;
            h != null && (A = h),
            m = p ?? m,
            a === IC ? A = 0 : (o || _) && (A = m = 0);
            let {now: O} = t.payload;
            if (n && r) {
                let w = O - (i + m);
                if (s) {
                    let K = O - i
                      , j = A + m
                      , Q = br(Math.min(Math.max(0, K / j), 1));
                    e = (0,
                    at.set)(e, "verboseTimeElapsed", j * Q)
                }
                if (w < 0)
                    return e;
                let x = br(Math.min(Math.max(0, w / A), 1))
                  , L = ap(y, x, g)
                  , R = {}
                  , B = null;
                return v.length && (B = v.reduce( (K, j) => {
                    let Q = l[j]
                      , ne = parseFloat(r[j]) || 0
                      , b = (parseFloat(Q) - ne) * L + ne;
                    return K[j] = b,
                    K
                }
                , {})),
                R.current = B,
                R.position = x,
                x === 1 && (R.active = !1,
                R.complete = !0),
                (0,
                at.merge)(e, R)
            }
            return e
        }
        ,
        sp = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case gC:
                return t.payload.ixInstances || Object.freeze({});
            case hC:
                return Object.freeze({});
            case vC:
                {
                    let {instanceId: n, elementId: r, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: v, origin: h, destination: p, immediate: g, verbose: _, continuous: y, parameterId: A, actionGroups: m, smoothing: O, restingValue: w, pluginInstance: x, pluginDuration: L, instanceDelay: R, skipMotion: B, skipToValue: K} = t.payload
                      , {actionTypeId: j} = i
                      , Q = TC(j)
                      , ne = bC(Q, j)
                      , F = Object.keys(p).filter(N => p[N] != null && typeof p[N] != "string")
                      , {easing: b} = i.config;
                    return (0,
                    at.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: h,
                        destination: p,
                        destinationKeys: F,
                        immediate: g,
                        verbose: _,
                        current: null,
                        actionItem: i,
                        actionTypeId: j,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Q,
                        isCarrier: v,
                        styleProp: ne,
                        continuous: y,
                        parameterId: A,
                        actionGroups: m,
                        smoothing: O,
                        restingValue: w,
                        pluginInstance: x,
                        pluginDuration: L,
                        instanceDelay: R,
                        skipMotion: B,
                        skipToValue: K,
                        customEasingFn: Array.isArray(b) && b.length === 4 ? _C(b) : void 0
                    })
                }
            case EC:
                {
                    let {instanceId: n, time: r} = t.payload;
                    return (0,
                    at.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
            case yC:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let r = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== n && (r[s] = e[s])
                    }
                    return r
                }
            case mC:
                {
                    let n = e
                      , r = Object.keys(e)
                      , {length: i} = r;
                    for (let o = 0; o < i; o++) {
                        let a = r[o]
                          , s = e[a]
                          , u = s.continuous ? AC : wC;
                        n = (0,
                        at.set)(n, a, u(s, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    }
    );
    var SC, OC, xC, cp, lp = Ee( () => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: SC, IX2_SESSION_STOPPED: OC, IX2_PARAMETER_CHANGED: xC} = Te),
        cp = (e={}, t) => {
            switch (t.type) {
            case SC:
                return t.payload.ixParameters || {};
            case OC:
                return {};
            case xC:
                {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var pp = {};
    Le(pp, {
        default: () => CC
    });
    var fp, dp, RC, CC, gp = Ee( () => {
        "use strict";
        fp = de(Ei());
        Is();
        ks();
        Ws();
        dp = de(Tt());
        up();
        lp();
        ({ixElements: RC} = dp.IX2ElementsReducer),
        CC = (0,
        fp.combineReducers)({
            ixData: _s,
            ixRequest: Us,
            ixSession: Hs,
            ixElements: RC,
            ixInstances: sp,
            ixParameters: cp
        })
    }
    );
    var vp = f( (fG, hp) => {
        var PC = lt()
          , LC = be()
          , NC = rt()
          , DC = "[object String]";
        function MC(e) {
            return typeof e == "string" || !LC(e) && NC(e) && PC(e) == DC
        }
        hp.exports = MC
    }
    );
    var yp = f( (dG, Ep) => {
        var FC = Wi()
          , qC = FC("length");
        Ep.exports = qC
    }
    );
    var _p = f( (pG, mp) => {
        var GC = "\\ud800-\\udfff"
          , XC = "\\u0300-\\u036f"
          , VC = "\\ufe20-\\ufe2f"
          , UC = "\\u20d0-\\u20ff"
          , kC = XC + VC + UC
          , BC = "\\ufe0e\\ufe0f"
          , HC = "\\u200d"
          , WC = RegExp("[" + HC + GC + kC + BC + "]");
        function zC(e) {
            return WC.test(e)
        }
        mp.exports = zC
    }
    );
    var Rp = f( (gG, xp) => {
        var Tp = "\\ud800-\\udfff"
          , KC = "\\u0300-\\u036f"
          , jC = "\\ufe20-\\ufe2f"
          , YC = "\\u20d0-\\u20ff"
          , QC = KC + jC + YC
          , $C = "\\ufe0e\\ufe0f"
          , ZC = "[" + Tp + "]"
          , Ro = "[" + QC + "]"
          , Co = "\\ud83c[\\udffb-\\udfff]"
          , JC = "(?:" + Ro + "|" + Co + ")"
          , bp = "[^" + Tp + "]"
          , Ap = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , wp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , eP = "\\u200d"
          , Sp = JC + "?"
          , Op = "[" + $C + "]?"
          , tP = "(?:" + eP + "(?:" + [bp, Ap, wp].join("|") + ")" + Op + Sp + ")*"
          , nP = Op + Sp + tP
          , rP = "(?:" + [bp + Ro + "?", Ro, Ap, wp, ZC].join("|") + ")"
          , Ip = RegExp(Co + "(?=" + Co + ")|" + rP + nP, "g");
        function iP(e) {
            for (var t = Ip.lastIndex = 0; Ip.test(e); )
                ++t;
            return t
        }
        xp.exports = iP
    }
    );
    var Pp = f( (hG, Cp) => {
        var oP = yp()
          , aP = _p()
          , sP = Rp();
        function uP(e) {
            return aP(e) ? sP(e) : oP(e)
        }
        Cp.exports = uP
    }
    );
    var Np = f( (vG, Lp) => {
        var cP = tr()
          , lP = nr()
          , fP = Et()
          , dP = vp()
          , pP = Pp()
          , gP = "[object Map]"
          , hP = "[object Set]";
        function vP(e) {
            if (e == null)
                return 0;
            if (fP(e))
                return dP(e) ? pP(e) : e.length;
            var t = lP(e);
            return t == gP || t == hP ? e.size : cP(e).length
        }
        Lp.exports = vP
    }
    );
    var Mp = f( (EG, Dp) => {
        var EP = "Expected a function";
        function yP(e) {
            if (typeof e != "function")
                throw new TypeError(EP);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Dp.exports = yP
    }
    );
    var Po = f( (yG, Fp) => {
        var mP = ft()
          , _P = function() {
            try {
                var e = mP(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Fp.exports = _P
    }
    );
    var Lo = f( (mG, Gp) => {
        var qp = Po();
        function IP(e, t, n) {
            t == "__proto__" && qp ? qp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        Gp.exports = IP
    }
    );
    var Vp = f( (_G, Xp) => {
        var TP = Lo()
          , bP = Wn()
          , AP = Object.prototype
          , wP = AP.hasOwnProperty;
        function SP(e, t, n) {
            var r = e[t];
            (!(wP.call(e, t) && bP(r, n)) || n === void 0 && !(t in e)) && TP(e, t, n)
        }
        Xp.exports = SP
    }
    );
    var Bp = f( (IG, kp) => {
        var OP = Vp()
          , xP = pn()
          , RP = $n()
          , Up = Je()
          , CP = qt();
        function PP(e, t, n, r) {
            if (!Up(e))
                return e;
            t = xP(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = CP(t[i])
                  , l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var v = s[u];
                    l = r ? r(v, u, s) : void 0,
                    l === void 0 && (l = Up(v) ? v : RP(t[i + 1]) ? [] : {})
                }
                OP(s, u, l),
                s = s[u]
            }
            return e
        }
        kp.exports = PP
    }
    );
    var Wp = f( (TG, Hp) => {
        var LP = or()
          , NP = Bp()
          , DP = pn();
        function MP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var a = t[r]
                  , s = LP(e, a);
                n(s, a) && NP(o, DP(a, e), s)
            }
            return o
        }
        Hp.exports = MP
    }
    );
    var Kp = f( (bG, zp) => {
        var FP = Yn()
          , qP = ii()
          , GP = Ci()
          , XP = Ri()
          , VP = Object.getOwnPropertySymbols
          , UP = VP ? function(e) {
            for (var t = []; e; )
                FP(t, GP(e)),
                e = qP(e);
            return t
        }
        : XP;
        zp.exports = UP
    }
    );
    var Yp = f( (AG, jp) => {
        function kP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        jp.exports = kP
    }
    );
    var $p = f( (wG, Qp) => {
        var BP = Je()
          , HP = er()
          , WP = Yp()
          , zP = Object.prototype
          , KP = zP.hasOwnProperty;
        function jP(e) {
            if (!BP(e))
                return WP(e);
            var t = HP(e)
              , n = [];
            for (var r in e)
                r == "constructor" && (t || !KP.call(e, r)) || n.push(r);
            return n
        }
        Qp.exports = jP
    }
    );
    var Jp = f( (SG, Zp) => {
        var YP = Li()
          , QP = $p()
          , $P = Et();
        function ZP(e) {
            return $P(e) ? YP(e, !0) : QP(e)
        }
        Zp.exports = ZP
    }
    );
    var tg = f( (OG, eg) => {
        var JP = xi()
          , eL = Kp()
          , tL = Jp();
        function nL(e) {
            return JP(e, tL, eL)
        }
        eg.exports = nL
    }
    );
    var rg = f( (xG, ng) => {
        var rL = Hi()
          , iL = dt()
          , oL = Wp()
          , aL = tg();
        function sL(e, t) {
            if (e == null)
                return {};
            var n = rL(aL(e), function(r) {
                return [r]
            });
            return t = iL(t),
            oL(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        ng.exports = sL
    }
    );
    var og = f( (RG, ig) => {
        var uL = dt()
          , cL = Mp()
          , lL = rg();
        function fL(e, t) {
            return lL(e, cL(uL(t)))
        }
        ig.exports = fL
    }
    );
    var sg = f( (CG, ag) => {
        var dL = tr()
          , pL = nr()
          , gL = sn()
          , hL = be()
          , vL = Et()
          , EL = Qn()
          , yL = er()
          , mL = Jn()
          , _L = "[object Map]"
          , IL = "[object Set]"
          , TL = Object.prototype
          , bL = TL.hasOwnProperty;
        function AL(e) {
            if (e == null)
                return !0;
            if (vL(e) && (hL(e) || typeof e == "string" || typeof e.splice == "function" || EL(e) || mL(e) || gL(e)))
                return !e.length;
            var t = pL(e);
            if (t == _L || t == IL)
                return !e.size;
            if (yL(e))
                return !dL(e).length;
            for (var n in e)
                if (bL.call(e, n))
                    return !1;
            return !0
        }
        ag.exports = AL
    }
    );
    var cg = f( (PG, ug) => {
        var wL = Lo()
          , SL = yo()
          , OL = dt();
        function xL(e, t) {
            var n = {};
            return t = OL(t, 3),
            SL(e, function(r, i, o) {
                wL(n, i, t(r, i, o))
            }),
            n
        }
        ug.exports = xL
    }
    );
    var fg = f( (LG, lg) => {
        function RL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        lg.exports = RL
    }
    );
    var pg = f( (NG, dg) => {
        var CL = sr();
        function PL(e) {
            return typeof e == "function" ? e : CL
        }
        dg.exports = PL
    }
    );
    var hg = f( (DG, gg) => {
        var LL = fg()
          , NL = mo()
          , DL = pg()
          , ML = be();
        function FL(e, t) {
            var n = ML(e) ? LL : NL;
            return n(e, DL(t))
        }
        gg.exports = FL
    }
    );
    var Eg = f( (MG, vg) => {
        var qL = He()
          , GL = function() {
            return qL.Date.now()
        };
        vg.exports = GL
    }
    );
    var _g = f( (FG, mg) => {
        var XL = Je()
          , No = Eg()
          , yg = ur()
          , VL = "Expected a function"
          , UL = Math.max
          , kL = Math.min;
        function BL(e, t, n) {
            var r, i, o, a, s, u, l = 0, v = !1, h = !1, p = !0;
            if (typeof e != "function")
                throw new TypeError(VL);
            t = yg(t) || 0,
            XL(n) && (v = !!n.leading,
            h = "maxWait"in n,
            o = h ? UL(yg(n.maxWait) || 0, t) : o,
            p = "trailing"in n ? !!n.trailing : p);
            function g(R) {
                var B = r
                  , K = i;
                return r = i = void 0,
                l = R,
                a = e.apply(K, B),
                a
            }
            function _(R) {
                return l = R,
                s = setTimeout(m, t),
                v ? g(R) : a
            }
            function y(R) {
                var B = R - u
                  , K = R - l
                  , j = t - B;
                return h ? kL(j, o - K) : j
            }
            function A(R) {
                var B = R - u
                  , K = R - l;
                return u === void 0 || B >= t || B < 0 || h && K >= o
            }
            function m() {
                var R = No();
                if (A(R))
                    return O(R);
                s = setTimeout(m, y(R))
            }
            function O(R) {
                return s = void 0,
                p && r ? g(R) : (r = i = void 0,
                a)
            }
            function w() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                r = u = i = s = void 0
            }
            function x() {
                return s === void 0 ? a : O(No())
            }
            function L() {
                var R = No()
                  , B = A(R);
                if (r = arguments,
                i = this,
                u = R,
                B) {
                    if (s === void 0)
                        return _(u);
                    if (h)
                        return clearTimeout(s),
                        s = setTimeout(m, t),
                        g(u)
                }
                return s === void 0 && (s = setTimeout(m, t)),
                a
            }
            return L.cancel = w,
            L.flush = x,
            L
        }
        mg.exports = BL
    }
    );
    var Tg = f( (qG, Ig) => {
        var HL = _g()
          , WL = Je()
          , zL = "Expected a function";
        function KL(e, t, n) {
            var r = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(zL);
            return WL(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            HL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        Ig.exports = KL
    }
    );
    var Ag = {};
    Le(Ag, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => Sr,
        clearRequested: () => yN,
        elementStateChanged: () => Uo,
        eventListenerAdded: () => wr,
        eventStateChanged: () => Go,
        instanceAdded: () => Xo,
        instanceRemoved: () => Vo,
        instanceStarted: () => Or,
        mediaQueriesDefined: () => Bo,
        parameterChanged: () => jt,
        playbackRequested: () => vN,
        previewRequested: () => hN,
        rawDataImported: () => Do,
        sessionInitialized: () => Mo,
        sessionStarted: () => Fo,
        sessionStopped: () => qo,
        stopRequested: () => EN,
        testFrameRendered: () => mN,
        viewportWidthChanged: () => ko
    });
    var bg, jL, YL, QL, $L, ZL, JL, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, gN, Do, Mo, Fo, qo, hN, vN, EN, yN, wr, mN, Go, Sr, jt, Xo, Or, Vo, Uo, Yt, ko, Bo, xr = Ee( () => {
        "use strict";
        Ne();
        bg = de(Tt()),
        {IX2_RAW_DATA_IMPORTED: jL, IX2_SESSION_INITIALIZED: YL, IX2_SESSION_STARTED: QL, IX2_SESSION_STOPPED: $L, IX2_PREVIEW_REQUESTED: ZL, IX2_PLAYBACK_REQUESTED: JL, IX2_STOP_REQUESTED: eN, IX2_CLEAR_REQUESTED: tN, IX2_EVENT_LISTENER_ADDED: nN, IX2_TEST_FRAME_RENDERED: rN, IX2_EVENT_STATE_CHANGED: iN, IX2_ANIMATION_FRAME_CHANGED: oN, IX2_PARAMETER_CHANGED: aN, IX2_INSTANCE_ADDED: sN, IX2_INSTANCE_STARTED: uN, IX2_INSTANCE_REMOVED: cN, IX2_ELEMENT_STATE_CHANGED: lN, IX2_ACTION_LIST_PLAYBACK_CHANGED: fN, IX2_VIEWPORT_WIDTH_CHANGED: dN, IX2_MEDIA_QUERIES_DEFINED: pN} = Te,
        {reifyState: gN} = bg.IX2VanillaUtils,
        Do = e => ({
            type: jL,
            payload: {
                ...gN(e)
            }
        }),
        Mo = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: YL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        Fo = () => ({
            type: QL
        }),
        qo = () => ({
            type: $L
        }),
        hN = ({rawData: e, defer: t}) => ({
            type: ZL,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        vN = ({actionTypeId: e=xe.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: r, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
            type: JL,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        EN = e => ({
            type: eN,
            payload: {
                actionListId: e
            }
        }),
        yN = () => ({
            type: tN
        }),
        wr = (e, t) => ({
            type: nN,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        mN = (e=1) => ({
            type: rN,
            payload: {
                step: e
            }
        }),
        Go = (e, t) => ({
            type: iN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        Sr = (e, t) => ({
            type: oN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        jt = (e, t) => ({
            type: aN,
            payload: {
                key: e,
                value: t
            }
        }),
        Xo = e => ({
            type: sN,
            payload: {
                ...e
            }
        }),
        Or = (e, t) => ({
            type: uN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Vo = e => ({
            type: cN,
            payload: {
                instanceId: e
            }
        }),
        Uo = (e, t, n, r) => ({
            type: lN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }),
        Yt = ({actionListId: e, isPlaying: t}) => ({
            type: fN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        ko = ({width: e, mediaQueries: t}) => ({
            type: dN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Bo = () => ({
            type: pN
        })
    }
    );
    var Ce = {};
    Le(Ce, {
        elementContains: () => zo,
        getChildElements: () => RN,
        getClosestElement: () => An,
        getProperty: () => AN,
        getQuerySelector: () => Wo,
        getRefType: () => Ko,
        getSiblingElements: () => CN,
        getStyle: () => bN,
        getValidDocument: () => SN,
        isSiblingNode: () => xN,
        matchSelector: () => wN,
        queryDocument: () => ON,
        setStyle: () => TN
    });
    function TN(e, t, n) {
        e.style[t] = n
    }
    function bN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function AN(e, t) {
        return e[t]
    }
    function wN(e) {
        return t => t[Ho](e)
    }
    function Wo({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(wg) !== -1) {
                let r = e.split(wg)
                  , i = r[0];
                if (n = r[1],
                i !== document.documentElement.getAttribute(Og))
                    return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }
    function SN(e) {
        return e == null || e === document.documentElement.getAttribute(Og) ? document : null
    }
    function ON(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function zo(e, t) {
        return e.contains(t)
    }
    function xN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function RN(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: i} = e[n]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function CN(e=[]) {
        let t = []
          , n = [];
        for (let r = 0, {length: i} = e; r < i; r++) {
            let {parentNode: o} = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
                continue;
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function Ko(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? _N : IN : null
    }
    var Sg, Ho, wg, _N, IN, Og, An, xg = Ee( () => {
        "use strict";
        Sg = de(Tt());
        Ne();
        ({ELEMENT_MATCHES: Ho} = Sg.IX2BrowserSupport),
        {IX2_ID_DELIMITER: wg, HTML_ELEMENT: _N, PLAIN_OBJECT: IN, WF_PAGE: Og} = we;
        An = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[Ho] && n[Ho](t))
                    return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    }
    );
    var jo = f( (VG, Cg) => {
        var PN = Je()
          , Rg = Object.create
          , LN = function() {
            function e() {}
            return function(t) {
                if (!PN(t))
                    return {};
                if (Rg)
                    return Rg(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        Cg.exports = LN
    }
    );
    var Rr = f( (UG, Pg) => {
        function NN() {}
        Pg.exports = NN
    }
    );
    var Pr = f( (kG, Lg) => {
        var DN = jo()
          , MN = Rr();
        function Cr(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Cr.prototype = DN(MN.prototype);
        Cr.prototype.constructor = Cr;
        Lg.exports = Cr
    }
    );
    var Fg = f( (BG, Mg) => {
        var Ng = St()
          , FN = sn()
          , qN = be()
          , Dg = Ng ? Ng.isConcatSpreadable : void 0;
        function GN(e) {
            return qN(e) || FN(e) || !!(Dg && e && e[Dg])
        }
        Mg.exports = GN
    }
    );
    var Xg = f( (HG, Gg) => {
        var XN = Yn()
          , VN = Fg();
        function qg(e, t, n, r, i) {
            var o = -1
              , a = e.length;
            for (n || (n = VN),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && n(s) ? t > 1 ? qg(s, t - 1, n, r, i) : XN(i, s) : r || (i[i.length] = s)
            }
            return i
        }
        Gg.exports = qg
    }
    );
    var Ug = f( (WG, Vg) => {
        var UN = Xg();
        function kN(e) {
            var t = e == null ? 0 : e.length;
            return t ? UN(e, 1) : []
        }
        Vg.exports = kN
    }
    );
    var Bg = f( (zG, kg) => {
        function BN(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        kg.exports = BN
    }
    );
    var zg = f( (KG, Wg) => {
        var HN = Bg()
          , Hg = Math.max;
        function WN(e, t, n) {
            return t = Hg(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, o = Hg(r.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = r[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = r[i];
                return s[t] = n(a),
                HN(e, this, s)
            }
        }
        Wg.exports = WN
    }
    );
    var jg = f( (jG, Kg) => {
        function zN(e) {
            return function() {
                return e
            }
        }
        Kg.exports = zN
    }
    );
    var $g = f( (YG, Qg) => {
        var KN = jg()
          , Yg = Po()
          , jN = sr()
          , YN = Yg ? function(e, t) {
            return Yg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: KN(t),
                writable: !0
            })
        }
        : jN;
        Qg.exports = YN
    }
    );
    var Jg = f( (QG, Zg) => {
        var QN = 800
          , $N = 16
          , ZN = Date.now;
        function JN(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = ZN()
                  , i = $N - (r - n);
                if (n = r,
                i > 0) {
                    if (++t >= QN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Zg.exports = JN
    }
    );
    var th = f( ($G, eh) => {
        var eD = $g()
          , tD = Jg()
          , nD = tD(eD);
        eh.exports = nD
    }
    );
    var rh = f( (ZG, nh) => {
        var rD = Ug()
          , iD = zg()
          , oD = th();
        function aD(e) {
            return oD(iD(e, void 0, rD), e + "")
        }
        nh.exports = aD
    }
    );
    var ah = f( (JG, oh) => {
        var ih = Ni()
          , sD = ih && new ih;
        oh.exports = sD
    }
    );
    var uh = f( (eX, sh) => {
        function uD() {}
        sh.exports = uD
    }
    );
    var Yo = f( (tX, lh) => {
        var ch = ah()
          , cD = uh()
          , lD = ch ? function(e) {
            return ch.get(e)
        }
        : cD;
        lh.exports = lD
    }
    );
    var dh = f( (nX, fh) => {
        var fD = {};
        fh.exports = fD
    }
    );
    var Qo = f( (rX, gh) => {
        var ph = dh()
          , dD = Object.prototype
          , pD = dD.hasOwnProperty;
        function gD(e) {
            for (var t = e.name + "", n = ph[t], r = pD.call(ph, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        gh.exports = gD
    }
    );
    var Nr = f( (iX, hh) => {
        var hD = jo()
          , vD = Rr()
          , ED = 4294967295;
        function Lr(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = ED,
            this.__views__ = []
        }
        Lr.prototype = hD(vD.prototype);
        Lr.prototype.constructor = Lr;
        hh.exports = Lr
    }
    );
    var Eh = f( (oX, vh) => {
        function yD(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Array(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        vh.exports = yD
    }
    );
    var mh = f( (aX, yh) => {
        var mD = Nr()
          , _D = Pr()
          , ID = Eh();
        function TD(e) {
            if (e instanceof mD)
                return e.clone();
            var t = new _D(e.__wrapped__,e.__chain__);
            return t.__actions__ = ID(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        yh.exports = TD
    }
    );
    var Th = f( (sX, Ih) => {
        var bD = Nr()
          , _h = Pr()
          , AD = Rr()
          , wD = be()
          , SD = rt()
          , OD = mh()
          , xD = Object.prototype
          , RD = xD.hasOwnProperty;
        function Dr(e) {
            if (SD(e) && !wD(e) && !(e instanceof bD)) {
                if (e instanceof _h)
                    return e;
                if (RD.call(e, "__wrapped__"))
                    return OD(e)
            }
            return new _h(e)
        }
        Dr.prototype = AD.prototype;
        Dr.prototype.constructor = Dr;
        Ih.exports = Dr
    }
    );
    var Ah = f( (uX, bh) => {
        var CD = Nr()
          , PD = Yo()
          , LD = Qo()
          , ND = Th();
        function DD(e) {
            var t = LD(e)
              , n = ND[t];
            if (typeof n != "function" || !(t in CD.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = PD(n);
            return !!r && e === r[0]
        }
        bh.exports = DD
    }
    );
    var xh = f( (cX, Oh) => {
        var wh = Pr()
          , MD = rh()
          , FD = Yo()
          , $o = Qo()
          , qD = be()
          , Sh = Ah()
          , GD = "Expected a function"
          , XD = 8
          , VD = 32
          , UD = 128
          , kD = 256;
        function BD(e) {
            return MD(function(t) {
                var n = t.length
                  , r = n
                  , i = wh.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    var o = t[r];
                    if (typeof o != "function")
                        throw new TypeError(GD);
                    if (i && !a && $o(o) == "wrapper")
                        var a = new wh([],!0)
                }
                for (r = a ? r : n; ++r < n; ) {
                    o = t[r];
                    var s = $o(o)
                      , u = s == "wrapper" ? FD(o) : void 0;
                    u && Sh(u[0]) && u[1] == (UD | XD | VD | kD) && !u[4].length && u[9] == 1 ? a = a[$o(u[0])].apply(a, u[3]) : a = o.length == 1 && Sh(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , v = l[0];
                    if (a && l.length == 1 && qD(v))
                        return a.plant(v).value();
                    for (var h = 0, p = n ? t[h].apply(this, l) : v; ++h < n; )
                        p = t[h].call(this, p);
                    return p
                }
            })
        }
        Oh.exports = BD
    }
    );
    var Ch = f( (lX, Rh) => {
        var HD = xh()
          , WD = HD();
        Rh.exports = WD
    }
    );
    var Lh = f( (fX, Ph) => {
        function zD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Ph.exports = zD
    }
    );
    var Dh = f( (dX, Nh) => {
        var KD = Lh()
          , Zo = ur();
        function jD(e, t, n) {
            return n === void 0 && (n = t,
            t = void 0),
            n !== void 0 && (n = Zo(n),
            n = n === n ? n : 0),
            t !== void 0 && (t = Zo(t),
            t = t === t ? t : 0),
            KD(Zo(e), t, n)
        }
        Nh.exports = jD
    }
    );
    var Bh, Hh, Wh, zh, YD, QD, $D, ZD, JD, eM, tM, nM, rM, iM, oM, aM, sM, uM, cM, Kh, jh, lM, fM, dM, Yh, pM, gM, Qh, hM, Jo, $h, Mh, Fh, Zh, Sn, vM, nt, Jh, EM, Me, Ke, On, ev, ea, qh, ta, yM, wn, mM, _M, IM, tv, Gh, TM, Xh, bM, AM, wM, Vh, Mr, Fr, Uh, kh, nv, rv = Ee( () => {
        "use strict";
        Bh = de(Ch()),
        Hh = de(ar()),
        Wh = de(Dh());
        Ne();
        na();
        xr();
        zh = de(Tt()),
        {MOUSE_CLICK: YD, MOUSE_SECOND_CLICK: QD, MOUSE_DOWN: $D, MOUSE_UP: ZD, MOUSE_OVER: JD, MOUSE_OUT: eM, DROPDOWN_CLOSE: tM, DROPDOWN_OPEN: nM, SLIDER_ACTIVE: rM, SLIDER_INACTIVE: iM, TAB_ACTIVE: oM, TAB_INACTIVE: aM, NAVBAR_CLOSE: sM, NAVBAR_OPEN: uM, MOUSE_MOVE: cM, PAGE_SCROLL_DOWN: Kh, SCROLL_INTO_VIEW: jh, SCROLL_OUT_OF_VIEW: lM, PAGE_SCROLL_UP: fM, SCROLLING_IN_VIEW: dM, PAGE_FINISH: Yh, ECOMMERCE_CART_CLOSE: pM, ECOMMERCE_CART_OPEN: gM, PAGE_START: Qh, PAGE_SCROLL: hM} = We,
        Jo = "COMPONENT_ACTIVE",
        $h = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Mh} = we,
        {getNamespacedParameterId: Fh} = zh.IX2VanillaUtils,
        Zh = e => t => typeof t == "object" && e(t) ? !0 : t,
        Sn = Zh( ({element: e, nativeEvent: t}) => e === t.target),
        vM = Zh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        nt = (0,
        Bh.default)([Sn, vM]),
        Jh = (e, t) => {
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: r} = n
                  , i = r[t];
                if (i && !yM[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        EM = ({store: e, event: t}) => {
            let {action: n} = t
              , {autoStopEventId: r} = n.config;
            return !!Jh(e, r)
        }
        ,
        Me = ({store: e, event: t, element: n, eventStateKey: r}, i) => {
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = Jh(e, u);
            return l && Qt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Mh + r.split(Mh)[1],
                actionListId: (0,
                Hh.default)(l, "action.config.actionListId")
            }),
            Qt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }),
            xn({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }),
            i
        }
        ,
        Ke = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
        On = {
            handler: Ke(nt, Me)
        },
        ev = {
            ...On,
            types: [Jo, $h].join(" ")
        },
        ea = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        qh = "mouseover mouseout",
        ta = {
            types: ea
        },
        yM = {
            PAGE_START: Qh,
            PAGE_FINISH: Yh
        },
        wn = ( () => {
            let e = window.pageXOffset !== void 0
              , n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0,
                Wh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        mM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        _M = ({element: e, nativeEvent: t}) => {
            let {type: n, target: r, relatedTarget: i} = t
              , o = e.contains(r);
            if (n === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(n === "mouseout" && o && a)
        }
        ,
        IM = e => {
            let {element: t, event: {config: n}} = e
              , {clientWidth: r, clientHeight: i} = wn()
              , o = n.scrollOffsetValue
              , u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return mM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }
        ,
        tv = e => (t, n) => {
            let {type: r} = t.nativeEvent
              , i = [Jo, $h].indexOf(r) !== -1 ? r === Jo : n.isActive
              , o = {
                ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }
        ,
        Gh = e => (t, n) => {
            let r = {
                elementHovered: _M(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }
        ,
        TM = e => (t, n) => {
            let r = {
                ...n,
                elementVisible: IM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }
        ,
        Xh = e => (t, n={}) => {
            let {stiffScrollTop: r, scrollHeight: i, innerHeight: o} = wn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , v = l === "PX"
              , h = i - o
              , p = Number((r / h).toFixed(2));
            if (n && n.percentTop === p)
                return n;
            let g = (v ? u : o * (u || 0) / 100) / h, _, y, A = 0;
            n && (_ = p > n.percentTop,
            y = n.scrollingDown !== _,
            A = y ? p : n.anchorTop);
            let m = s === Kh ? p >= A + g : p <= A - g
              , O = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: A,
                scrollingDown: _
            };
            return n && m && (y || O.inBounds !== n.inBounds) && e(t, O) || O
        }
        ,
        bM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        AM = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t),
            r
        }
        ,
        wM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t),
            r
        }
        ,
        Vh = e => (t, n={
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }
        ,
        Mr = (e=!0) => ({
            ...ev,
            handler: Ke(e ? nt : Sn, tv( (t, n) => n.isActive ? On.handler(t, n) : n))
        }),
        Fr = (e=!0) => ({
            ...ev,
            handler: Ke(e ? nt : Sn, tv( (t, n) => n.isActive ? n : On.handler(t, n)))
        }),
        Uh = {
            ...ta,
            handler: TM( (e, t) => {
                let {elementVisible: n} = t
                  , {event: r, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === jh === n ? (Me(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        kh = .05,
        nv = {
            [rM]: Mr(),
            [iM]: Fr(),
            [nM]: Mr(),
            [tM]: Fr(),
            [uM]: Mr(!1),
            [sM]: Fr(!1),
            [oM]: Mr(),
            [aM]: Fr(),
            [gM]: {
                types: "ecommerce-cart-open",
                handler: Ke(nt, Me)
            },
            [pM]: {
                types: "ecommerce-cart-close",
                handler: Ke(nt, Me)
            },
            [YD]: {
                types: "click",
                handler: Ke(nt, Vh( (e, {clickCount: t}) => {
                    EM(e) ? t === 1 && Me(e) : Me(e)
                }
                ))
            },
            [QD]: {
                types: "click",
                handler: Ke(nt, Vh( (e, {clickCount: t}) => {
                    t === 2 && Me(e)
                }
                ))
            },
            [$D]: {
                ...On,
                types: "mousedown"
            },
            [ZD]: {
                ...On,
                types: "mouseup"
            },
            [JD]: {
                types: qh,
                handler: Ke(nt, Gh( (e, t) => {
                    t.elementHovered && Me(e)
                }
                ))
            },
            [eM]: {
                types: qh,
                handler: Ke(nt, Gh( (e, t) => {
                    t.elementHovered || Me(e)
                }
                ))
            },
            [cM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: v=0} = n
                      , {clientX: h=o.clientX, clientY: p=o.clientY, pageX: g=o.pageX, pageY: _=o.pageY} = r
                      , y = s === "X_AXIS"
                      , A = r.type === "mouseout"
                      , m = v / 100
                      , O = u
                      , w = !1;
                    switch (a) {
                    case Ze.VIEWPORT:
                        {
                            m = y ? Math.min(h, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Ze.PAGE:
                        {
                            let {scrollLeft: x, scrollTop: L, scrollWidth: R, scrollHeight: B} = wn();
                            m = y ? Math.min(x + g, R) / R : Math.min(L + _, B) / B;
                            break
                        }
                    case Ze.ELEMENT:
                    default:
                        {
                            O = Fh(i, u);
                            let x = r.type.indexOf("mouse") === 0;
                            if (x && nt({
                                element: t,
                                nativeEvent: r
                            }) !== !0)
                                break;
                            let L = t.getBoundingClientRect()
                              , {left: R, top: B, width: K, height: j} = L;
                            if (!x && !bM({
                                left: h,
                                top: p
                            }, L))
                                break;
                            w = !0,
                            m = y ? (h - R) / K : (p - B) / j;
                            break
                        }
                    }
                    return A && (m > 1 - kh || m < kh) && (m = Math.round(m)),
                    (a !== Ze.ELEMENT || w || w !== o.elementHovered) && (m = l ? 1 - m : m,
                    e.dispatch(jt(O, m))),
                    {
                        elementHovered: w,
                        clientX: h,
                        clientY: p,
                        pageX: g,
                        pageY: _
                    }
                }
            },
            [hM]: {
                types: ea,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: n, reverse: r} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = wn()
                      , s = i / (o - a);
                    s = r ? 1 - s : s,
                    e.dispatch(jt(n, s))
                }
            },
            [dM]: {
                types: ea,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: r}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = wn()
                      , {basedOn: v, selectedAxis: h, continuousParameterGroupId: p, startsEntering: g, startsExiting: _, addEndOffset: y, addStartOffset: A, addOffsetValue: m=0, endOffsetValue: O=0} = n
                      , w = h === "X_AXIS";
                    if (v === Ze.VIEWPORT) {
                        let x = w ? o / s : a / u;
                        return x !== i.scrollPercent && t.dispatch(jt(p, x)),
                        {
                            scrollPercent: x
                        }
                    } else {
                        let x = Fh(r, p)
                          , L = e.getBoundingClientRect()
                          , R = (A ? m : 0) / 100
                          , B = (y ? O : 0) / 100;
                        R = g ? R : 1 - R,
                        B = _ ? B : 1 - B;
                        let K = L.top + Math.min(L.height * R, l)
                          , Q = L.top + L.height * B - K
                          , ne = Math.min(l + Q, u)
                          , b = Math.min(Math.max(0, l - K), ne) / ne;
                        return b !== i.scrollPercent && t.dispatch(jt(x, b)),
                        {
                            scrollPercent: b
                        }
                    }
                }
            },
            [jh]: Uh,
            [lM]: Uh,
            [Kh]: {
                ...ta,
                handler: Xh( (e, t) => {
                    t.scrollingDown && Me(e)
                }
                )
            },
            [fM]: {
                ...ta,
                handler: Xh( (e, t) => {
                    t.scrollingDown || Me(e)
                }
                )
            },
            [Yh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sn, AM(Me))
            },
            [Qh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sn, wM(Me))
            }
        }
    }
    );
    var _v = {};
    Le(_v, {
        observeRequests: () => WM,
        startActionGroup: () => xn,
        startEngine: () => kr,
        stopActionGroup: () => Qt,
        stopAllActionGroups: () => Ev,
        stopEngine: () => Br
    });
    function WM(e) {
        bt({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: jM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: YM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: QM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: $M
        })
    }
    function zM(e) {
        bt({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Br(e),
                pv({
                    store: e,
                    elementApi: Ce
                }),
                kr({
                    store: e,
                    allowEvents: !0
                }),
                gv()
            }
        })
    }
    function KM(e, t) {
        let n = bt({
            store: e,
            select: ({ixSession: r}) => r.tick,
            onChange: r => {
                t(r),
                n()
            }
        })
    }
    function jM({rawData: e, defer: t}, n) {
        let r = () => {
            kr({
                store: n,
                rawData: e,
                allowEvents: !0
            }),
            gv()
        }
        ;
        t ? setTimeout(r, 0) : r()
    }
    function gv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function YM(e, t) {
        let {actionTypeId: n, actionListId: r, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: v} = e;
        if (r && i && v && s) {
            let h = v.actionLists[r];
            h && (v = DM({
                actionList: h,
                actionItemId: i,
                rawData: v
            }))
        }
        if (kr({
            store: t,
            rawData: v,
            allowEvents: a,
            testManual: u
        }),
        r && n === xe.GENERAL_START_ACTION || ra(n)) {
            Qt({
                store: t,
                actionListId: r
            }),
            vv({
                store: t,
                actionListId: r,
                eventId: o
            });
            let h = xn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: s,
                verbose: l
            });
            l && h && t.dispatch(Yt({
                actionListId: r,
                isPlaying: !s
            }))
        }
    }
    function QM({actionListId: e}, t) {
        e ? Qt({
            store: t,
            actionListId: e
        }) : Ev({
            store: t
        }),
        Br(t)
    }
    function $M(e, t) {
        Br(t),
        pv({
            store: t,
            elementApi: Ce
        })
    }
    function kr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Do(t)),
        i.active || (e.dispatch(Mo({
            hasBoundaryNodes: !!document.querySelector(Gr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        n && (rF(e),
        ZM(),
        e.getState().ixSession.hasDefinedMediaQueries && zM(e)),
        e.dispatch(Fo()),
        JM(e, r))
    }
    function ZM() {
        let {documentElement: e} = document;
        e.className.indexOf(iv) === -1 && (e.className += ` ${iv}`)
    }
    function JM(e, t) {
        let n = r => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(Sr(r, o)),
            t ? KM(e, n) : requestAnimationFrame(n))
        }
        ;
        n(window.performance.now())
    }
    function Br(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach(eF),
            GM(),
            e.dispatch(qo())
        }
    }
    function eF({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function tF({store: e, eventStateKey: t, eventTarget: n, eventId: r, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: v} = e.getState()
          , {events: h} = l
          , p = h[r]
          , {eventTypeId: g} = p
          , _ = {}
          , y = {}
          , A = []
          , {continuousActionGroups: m} = a
          , {id: O} = a;
        MM(g, i) && (O = FM(t, O));
        let w = v.hasBoundaryNodes && n ? An(n, Gr) : null;
        m.forEach(x => {
            let {keyframe: L, actionItems: R} = x;
            R.forEach(B => {
                let {actionTypeId: K} = B
                  , {target: j} = B.config;
                if (!j)
                    return;
                let Q = j.boundaryMode ? w : null
                  , ne = XM(j) + ia + K;
                if (y[ne] = nF(y[ne], L, B),
                !_[ne]) {
                    _[ne] = !0;
                    let {config: F} = B;
                    Xr({
                        config: F,
                        event: p,
                        eventTarget: n,
                        elementRoot: Q,
                        elementApi: Ce
                    }).forEach(b => {
                        A.push({
                            element: b,
                            key: ne
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        A.forEach( ({element: x, key: L}) => {
            let R = y[L]
              , B = (0,
            st.default)(R, "[0].actionItems[0]", {})
              , {actionTypeId: K} = B
              , Q = (K === xe.PLUGIN_RIVE ? (B.config?.target?.selectorGuids || []).length === 0 : Ur(K)) ? aa(K)(x, B) : null
              , ne = oa({
                element: x,
                actionItem: B,
                elementApi: Ce
            }, Q);
            sa({
                store: e,
                element: x,
                eventId: r,
                actionListId: o,
                actionItem: B,
                destination: ne,
                continuous: !0,
                parameterId: O,
                actionGroups: R,
                smoothing: s,
                restingValue: u,
                pluginInstance: Q
            })
        }
        )
    }
    function nF(e=[], t, n) {
        let r = [...e], i;
        return r.some( (o, a) => o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = r.length,
        r.push({
            keyframe: t,
            actionItems: []
        })),
        r[i].actionItems.push(n),
        r
    }
    function rF(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: n} = t;
        hv(e),
        (0,
        $t.default)(n, (i, o) => {
            let a = nv[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            cF({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: r} = e.getState();
        r.eventListeners.length && oF(e)
    }
    function oF(e) {
        let t = () => {
            hv(e)
        }
        ;
        iF.forEach(n => {
            window.addEventListener(n, t),
            e.dispatch(wr(window, [n, t]))
        }
        ),
        t()
    }
    function hv(e) {
        let {ixSession: t, ixData: n} = e.getState()
          , r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: i} = n;
            e.dispatch(ko({
                width: r,
                mediaQueries: i
            }))
        }
    }
    function cF({logic: e, store: t, events: n}) {
        lF(n);
        let {types: r, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = aF(n, uF);
        if (!(0,
        sv.default)(s))
            return;
        (0,
        $t.default)(s, (h, p) => {
            let g = n[p]
              , {action: _, id: y, mediaQueries: A=o.mediaQueryKeys} = g
              , {actionListId: m} = _.config;
            VM(A, o.mediaQueryKeys) || t.dispatch(Bo()),
            _.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(g.config) ? g.config : [g.config]).forEach(w => {
                let {continuousParameterGroupId: x} = w
                  , L = (0,
                st.default)(a, `${m}.continuousParameterGroups`, [])
                  , R = (0,
                av.default)(L, ({id: j}) => j === x)
                  , B = (w.smoothing || 0) / 100
                  , K = (w.restingState || 0) / 100;
                R && h.forEach( (j, Q) => {
                    let ne = y + ia + Q;
                    tF({
                        store: t,
                        eventStateKey: ne,
                        eventTarget: j,
                        eventId: y,
                        eventConfig: w,
                        actionListId: m,
                        parameterGroup: R,
                        smoothing: B,
                        restingValue: K
                    })
                }
                )
            }
            ),
            (_.actionTypeId === xe.GENERAL_START_ACTION || ra(_.actionTypeId)) && vv({
                store: t,
                actionListId: m,
                eventId: y
            })
        }
        );
        let u = h => {
            let {ixSession: p} = t.getState();
            sF(s, (g, _, y) => {
                let A = n[_]
                  , m = p.eventState[y]
                  , {action: O, mediaQueries: w=o.mediaQueryKeys} = A;
                if (!Vr(w, p.mediaQueryKey))
                    return;
                let x = (L={}) => {
                    let R = i({
                        store: t,
                        element: g,
                        event: A,
                        eventConfig: L,
                        nativeEvent: h,
                        eventStateKey: y
                    }, m);
                    UM(R, m) || t.dispatch(Go(y, R))
                }
                ;
                O.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(x) : x()
            }
            )
        }
          , l = (0,
        fv.default)(u, HM)
          , v = ({target: h=document, types: p, throttle: g}) => {
            p.split(" ").filter(Boolean).forEach(_ => {
                let y = g ? l : u;
                h.addEventListener(_, y),
                t.dispatch(wr(h, [_, y]))
            }
            )
        }
        ;
        Array.isArray(r) ? r.forEach(v) : typeof r == "string" && v(e)
    }
    function lF(e) {
        if (!BM)
            return;
        let t = {}
          , n = "";
        for (let r in e) {
            let {eventTypeId: i, target: o} = e[r]
              , a = Wo(o);
            t[a] || (i === We.MOUSE_CLICK || i === We.MOUSE_SECOND_CLICK) && (t[a] = !0,
            n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n,
            document.body.appendChild(r)
        }
    }
    function vv({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = r
          , s = a[n]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            st.default)(u, "actionItemGroups[0].actionItems", [])
              , v = (0,
            st.default)(s, "mediaQueries", r.mediaQueryKeys);
            if (!Vr(v, i.mediaQueryKey))
                return;
            l.forEach(h => {
                let {config: p, actionTypeId: g} = h
                  , _ = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : p
                  , y = Xr({
                    config: _,
                    event: s,
                    elementApi: Ce
                })
                  , A = Ur(g);
                y.forEach(m => {
                    let O = A ? aa(g)(m, h) : null;
                    sa({
                        destination: oa({
                            element: m,
                            actionItem: h,
                            elementApi: Ce
                        }, O),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: h,
                        actionListId: t,
                        pluginInstance: O
                    })
                }
                )
            }
            )
        }
    }
    function Ev({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        $t.default)(t, n => {
            if (!n.continuous) {
                let {actionListId: r, verbose: i} = n;
                ua(n, e),
                i && e.dispatch(Yt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Qt({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && n ? An(n, Gr) : null;
        (0,
        $t.default)(o, u => {
            let l = (0,
            st.default)(u, "actionItem.config.target.boundaryMode")
              , v = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && v) {
                if (s && l && !zo(s, u.element))
                    return;
                ua(u, e),
                u.verbose && e.dispatch(Yt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function xn({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: v} = u
          , h = v[t] || {}
          , {mediaQueries: p=u.mediaQueryKeys} = h
          , g = (0,
        st.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: _, useFirstGroupAsInitialState: y} = g;
        if (!_ || !_.length)
            return !1;
        o >= _.length && (0,
        st.default)(h, "config.loop") && (o = 0),
        o === 0 && y && o++;
        let m = (o === 0 || o === 1 && y) && ra(h.action?.actionTypeId) ? h.config.delay : void 0
          , O = (0,
        st.default)(_, [o, "actionItems"], []);
        if (!O.length || !Vr(p, l.mediaQueryKey))
            return !1;
        let w = l.hasBoundaryNodes && n ? An(n, Gr) : null
          , x = PM(O)
          , L = !1;
        return O.forEach( (R, B) => {
            let {config: K, actionTypeId: j} = R
              , Q = Ur(j)
              , {target: ne} = K;
            if (!ne)
                return;
            let F = ne.boundaryMode ? w : null;
            Xr({
                config: K,
                event: h,
                eventTarget: n,
                elementRoot: F,
                elementApi: Ce
            }).forEach( (N, Y) => {
                let k = Q ? aa(j)(N, R) : null
                  , D = Q ? kM(j)(N, R) : null;
                L = !0;
                let M = x === B && Y === 0
                  , W = LM({
                    element: N,
                    actionItem: R
                })
                  , ce = oa({
                    element: N,
                    actionItem: R,
                    elementApi: Ce
                }, k);
                sa({
                    store: e,
                    element: N,
                    actionItem: R,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: M,
                    computedStyle: W,
                    destination: ce,
                    immediate: a,
                    verbose: s,
                    pluginInstance: k,
                    pluginDuration: D,
                    instanceDelay: m
                })
            }
            )
        }
        ),
        L
    }
    function sa(e) {
        let {store: t, computedStyle: n, ...r} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: v} = r, h = !u, p = RM(), {ixElements: g, ixSession: _, ixData: y} = t.getState(), A = xM(g, i), {refState: m} = g[A] || {}, O = Ko(i), w = _.reducedMotion && _i[o.actionTypeId], x;
        if (w && u)
            switch (y.events[v]?.eventTypeId) {
            case We.MOUSE_MOVE:
            case We.MOUSE_MOVE_IN_VIEWPORT:
                x = l;
                break;
            default:
                x = .5;
                break
            }
        let L = NM(i, m, n, o, Ce, s);
        if (t.dispatch(Xo({
            instanceId: p,
            elementId: A,
            origin: L,
            refType: O,
            skipMotion: w,
            skipToValue: x,
            ...r
        })),
        yv(document.body, "ix2-animation-started", p),
        a) {
            fF(t, p);
            return
        }
        bt({
            store: t,
            select: ({ixInstances: R}) => R[p],
            onChange: mv
        }),
        h && t.dispatch(Or(p, _.tick))
    }
    function ua(e, t) {
        yv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: n, actionItem: r} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[n] || {};
        a === dv && qM(o, r, Ce),
        t.dispatch(Vo(e.id))
    }
    function yv(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n),
        e.dispatchEvent(r)
    }
    function fF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(Or(t, 0)),
        e.dispatch(Sr(performance.now(), n));
        let {ixInstances: r} = e.getState();
        mv(r[t], e)
    }
    function mv(e, t) {
        let {active: n, continuous: r, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: v, eventId: h, eventTarget: p, eventStateKey: g, actionListId: _, isCarrier: y, styleProp: A, verbose: m, pluginInstance: O} = e
          , {ixData: w, ixSession: x} = t.getState()
          , {events: L} = w
          , R = L && L[h] ? L[h] : {}
          , {mediaQueries: B=w.mediaQueryKeys} = R;
        if (Vr(B, x.mediaQueryKey) && (r || n || i)) {
            if (l || u === OM && i) {
                t.dispatch(Uo(o, s, l, a));
                let {ixElements: K} = t.getState()
                  , {ref: j, refType: Q, refState: ne} = K[o] || {}
                  , F = ne && ne[s];
                (Q === dv || Ur(s)) && CM(j, ne, F, h, a, A, Ce, u, O)
            }
            if (i) {
                if (y) {
                    let K = xn({
                        store: t,
                        eventId: h,
                        eventTarget: p,
                        eventStateKey: g,
                        actionListId: _,
                        groupIndex: v + 1,
                        verbose: m
                    });
                    m && !K && t.dispatch(Yt({
                        actionListId: _,
                        isPlaying: !1
                    }))
                }
                ua(e, t)
            }
        }
    }
    var av, st, sv, uv, cv, lv, $t, fv, qr, SM, ra, ia, Gr, dv, OM, iv, Xr, xM, oa, bt, RM, CM, pv, PM, LM, NM, DM, MM, FM, Vr, qM, GM, XM, VM, UM, Ur, aa, kM, ov, BM, HM, iF, aF, sF, uF, na = Ee( () => {
        "use strict";
        av = de(Yi()),
        st = de(ar()),
        sv = de(Np()),
        uv = de(og()),
        cv = de(sg()),
        lv = de(cg()),
        $t = de(hg()),
        fv = de(Tg());
        Ne();
        qr = de(Tt());
        xr();
        xg();
        rv();
        SM = Object.keys(Gn),
        ra = e => SM.includes(e),
        {COLON_DELIMITER: ia, BOUNDARY_SELECTOR: Gr, HTML_ELEMENT: dv, RENDER_GENERAL: OM, W_MOD_IX: iv} = we,
        {getAffectedElements: Xr, getElementId: xM, getDestinationValues: oa, observeStore: bt, getInstanceId: RM, renderHTMLElement: CM, clearAllStyles: pv, getMaxDurationItemIndex: PM, getComputedStyle: LM, getInstanceOrigin: NM, reduceListToGroup: DM, shouldNamespaceEventParameter: MM, getNamespacedParameterId: FM, shouldAllowMediaQuery: Vr, cleanupHTMLElement: qM, clearObjectCache: GM, stringifyTarget: XM, mediaQueriesEqual: VM, shallowEqual: UM} = qr.IX2VanillaUtils,
        {isPluginType: Ur, createPluginInstance: aa, getPluginDuration: kM} = qr.IX2VanillaPlugins,
        ov = navigator.userAgent,
        BM = ov.match(/iPad/i) || ov.match(/iPhone/),
        HM = 12;
        iF = ["resize", "orientationchange"];
        aF = (e, t) => (0,
        uv.default)((0,
        lv.default)(e, t), cv.default),
        sF = (e, t) => {
            (0,
            $t.default)(e, (n, r) => {
                n.forEach( (i, o) => {
                    let a = r + ia + o;
                    t(i, r, a)
                }
                )
            }
            )
        }
        ,
        uF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Xr({
                config: t,
                elementApi: Ce
            })
        }
    }
    );
    var bv = f(la => {
        "use strict";
        Object.defineProperty(la, "__esModule", {
            value: !0
        });
        function dF(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        dF(la, {
            actions: function() {
                return hF
            },
            destroy: function() {
                return Tv
            },
            init: function() {
                return mF
            },
            setEnv: function() {
                return yF
            },
            store: function() {
                return Hr
            }
        });
        var pF = Ei()
          , gF = vF((gp(),
        Ye(pp)))
          , ca = (na(),
        Ye(_v))
          , hF = EF((xr(),
        Ye(Ag)));
        function vF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Iv(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (Iv = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function EF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = Iv(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var Hr = (0,
        pF.createStore)(gF.default);
        function yF(e) {
            e() && (0,
            ca.observeRequests)(Hr)
        }
        function mF(e) {
            Tv(),
            (0,
            ca.startEngine)({
                store: Hr,
                rawData: e,
                allowEvents: !0
            })
        }
        function Tv() {
            (0,
            ca.stopEngine)(Hr)
        }
    }
    );
    var Ov = f( (TX, Sv) => {
        "use strict";
        var Av = qe()
          , wv = bv();
        wv.setEnv(Av.env);
        Av.define("ix2", Sv.exports = function() {
            return wv
        }
        )
    }
    );
    var Rv = f( (bX, xv) => {
        "use strict";
        var Zt = qe();
        Zt.define("links", xv.exports = function(e, t) {
            var n = {}, r = e(window), i, o = Zt.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, v = /\/$/, h, p;
            n.ready = n.design = n.preview = g;
            function g() {
                i = o && Zt.env("design"),
                p = Zt.env("slug") || a.pathname || "",
                Zt.scroll.off(y),
                h = [];
                for (var m = document.links, O = 0; O < m.length; ++O)
                    _(m[O]);
                h.length && (Zt.scroll.on(y),
                y())
            }
            function _(m) {
                if (!m.getAttribute("hreflang")) {
                    var O = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = O,
                    !(O.indexOf(":") >= 0)) {
                        var w = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var x = e(s.hash);
                            x.length && h.push({
                                link: w,
                                sec: x,
                                active: !1
                            });
                            return
                        }
                        if (!(O === "#" || O === "")) {
                            var L = s.href === a.href || O === p || l.test(O) && v.test(p);
                            A(w, u, L)
                        }
                    }
                }
            }
            function y() {
                var m = r.scrollTop()
                  , O = r.height();
                t.each(h, function(w) {
                    if (!w.link.attr("hreflang")) {
                        var x = w.link
                          , L = w.sec
                          , R = L.offset().top
                          , B = L.outerHeight()
                          , K = O * .5
                          , j = L.is(":visible") && R + B - K >= m && R + K <= m + O;
                        w.active !== j && (w.active = j,
                        A(x, u, j))
                    }
                })
            }
            function A(m, O, w) {
                var x = m.hasClass(O);
                w && x || !w && !x || (w ? m.addClass(O) : m.removeClass(O))
            }
            return n
        }
        )
    }
    );
    var Pv = f( (AX, Cv) => {
        "use strict";
        var Wr = qe();
        Wr.define("scroll", Cv.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , r = _() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(F) {
                window.setTimeout(F, 15)
            }
              , u = Wr.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , v = 'a[href="#"]'
              , h = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")"
              , p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , g = document.createElement("style");
            g.appendChild(document.createTextNode(p));
            function _() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var y = /^#[a-zA-Z0-9][\w:.-]*$/;
            function A(F) {
                return y.test(F.hash) && F.host + F.pathname === n.host + n.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function O() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }
            function w(F, b) {
                var N;
                switch (b) {
                case "add":
                    N = F.attr("tabindex"),
                    N ? F.attr("data-wf-tabindex-swap", N) : F.attr("tabindex", "-1");
                    break;
                case "remove":
                    N = F.attr("data-wf-tabindex-swap"),
                    N ? (F.attr("tabindex", N),
                    F.removeAttr("data-wf-tabindex-swap")) : F.removeAttr("tabindex");
                    break
                }
                F.toggleClass("wf-force-outline-none", b === "add")
            }
            function x(F) {
                var b = F.currentTarget;
                if (!(Wr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var N = A(b) ? b.hash : "";
                    if (N !== "") {
                        var Y = e(N);
                        Y.length && (F && (F.preventDefault(),
                        F.stopPropagation()),
                        L(N, F),
                        window.setTimeout(function() {
                            R(Y, function() {
                                w(Y, "add"),
                                Y.get(0).focus({
                                    preventScroll: !0
                                }),
                                w(Y, "remove")
                            })
                        }, F ? 0 : 300))
                    }
                }
            }
            function L(F) {
                if (n.hash !== F && r && r.pushState && !(Wr.env.chrome && n.protocol === "file:")) {
                    var b = r.state && r.state.hash;
                    b !== F && r.pushState({
                        hash: F
                    }, "", F)
                }
            }
            function R(F, b) {
                var N = i.scrollTop()
                  , Y = B(F);
                if (N !== Y) {
                    var k = K(F, N, Y)
                      , D = Date.now()
                      , M = function() {
                        var W = Date.now() - D;
                        window.scroll(0, j(N, Y, W, k)),
                        W <= k ? s(M) : typeof b == "function" && b()
                    };
                    s(M)
                }
            }
            function B(F) {
                var b = e(l)
                  , N = b.css("position") === "fixed" ? b.outerHeight() : 0
                  , Y = F.offset().top - N;
                if (F.data("scroll") === "mid") {
                    var k = i.height() - N
                      , D = F.outerHeight();
                    D < k && (Y -= Math.round((k - D) / 2))
                }
                return Y
            }
            function K(F, b, N) {
                if (O())
                    return 0;
                var Y = 1;
                return a.add(F).each(function(k, D) {
                    var M = parseFloat(D.getAttribute("data-scroll-time"));
                    !isNaN(M) && M >= 0 && (Y = M)
                }),
                (472.143 * Math.log(Math.abs(b - N) + 125) - 2e3) * Y
            }
            function j(F, b, N, Y) {
                return N > Y ? b : F + (b - F) * Q(N / Y)
            }
            function Q(F) {
                return F < .5 ? 4 * F * F * F : (F - 1) * (2 * F - 2) * (2 * F - 2) + 1
            }
            function ne() {
                var {WF_CLICK_EMPTY: F, WF_CLICK_SCROLL: b} = t;
                o.on(b, h, x),
                o.on(F, v, function(N) {
                    N.preventDefault()
                }),
                document.head.insertBefore(g, document.head.firstChild)
            }
            return {
                ready: ne
            }
        }
        )
    }
    );
    var Nv = f( (wX, Lv) => {
        "use strict";
        var _F = qe();
        _F.define("touch", Lv.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new r(o) : null
            }
            ;
            function r(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, v;
                o.addEventListener("touchstart", h, !1),
                o.addEventListener("touchmove", p, !1),
                o.addEventListener("touchend", g, !1),
                o.addEventListener("touchcancel", _, !1),
                o.addEventListener("mousedown", h, !1),
                o.addEventListener("mousemove", p, !1),
                o.addEventListener("mouseup", g, !1),
                o.addEventListener("mouseout", _, !1);
                function h(A) {
                    var m = A.touches;
                    m && m.length > 1 || (a = !0,
                    m ? (s = !0,
                    l = m[0].clientX) : l = A.clientX,
                    v = l)
                }
                function p(A) {
                    if (a) {
                        if (s && A.type === "mousemove") {
                            A.preventDefault(),
                            A.stopPropagation();
                            return
                        }
                        var m = A.touches
                          , O = m ? m[0].clientX : A.clientX
                          , w = O - v;
                        v = O,
                        Math.abs(w) > u && n && String(n()) === "" && (i("swipe", A, {
                            direction: w > 0 ? "right" : "left"
                        }),
                        _())
                    }
                }
                function g(A) {
                    if (a && (a = !1,
                    s && A.type === "mouseup")) {
                        A.preventDefault(),
                        A.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function _() {
                    a = !1
                }
                function y() {
                    o.removeEventListener("touchstart", h, !1),
                    o.removeEventListener("touchmove", p, !1),
                    o.removeEventListener("touchend", g, !1),
                    o.removeEventListener("touchcancel", _, !1),
                    o.removeEventListener("mousedown", h, !1),
                    o.removeEventListener("mousemove", p, !1),
                    o.removeEventListener("mouseup", g, !1),
                    o.removeEventListener("mouseout", _, !1),
                    o = null
                }
                this.destroy = y
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var Dv = f(fa => {
        "use strict";
        Object.defineProperty(fa, "__esModule", {
            value: !0
        });
        Object.defineProperty(fa, "default", {
            enumerable: !0,
            get: function() {
                return IF
            }
        });
        function IF(e, t, n, r, i, o, a, s, u, l, v, h, p) {
            return function(g) {
                e(g);
                var _ = g.form
                  , y = {
                    name: _.attr("data-name") || _.attr("name") || "Untitled Form",
                    pageId: _.attr("data-wf-page-id") || "",
                    elementId: _.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(_.html()),
                    trackingCookies: r()
                };
                let A = _.attr("data-wf-flow");
                A && (y.wfFlow = A),
                i(g);
                var m = o(_, y.fields);
                if (m)
                    return a(m);
                if (y.fileUploads = s(_),
                u(g),
                !l) {
                    v(g);
                    return
                }
                h.ajax({
                    url: p,
                    type: "POST",
                    data: y,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(O) {
                    O && O.code === 200 && (g.success = !0),
                    v(g)
                }).fail(function() {
                    v(g)
                })
            }
        }
    }
    );
    var Fv = f( (OX, Mv) => {
        "use strict";
        var zr = qe()
          , TF = (e, t, n, r) => {
            let i = document.createElement("div");
            t.appendChild(i),
            turnstile.render(i, {
                sitekey: e,
                callback: function(o) {
                    n(o)
                },
                "error-callback": function() {
                    r()
                }
            })
        }
        ;
        zr.define("forms", Mv.exports = function(e, t) {
            let n = "TURNSTILE_LOADED";
            var r = {}, i = e(document), o, a = window.location, s = window.XDomainRequest && !window.atob, u = ".w-form", l, v = /e(-)?mail/i, h = /^\S+@\S+$/, p = window.alert, g = zr.env(), _, y, A;
            let m = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"), O;
            var w = /list-manage[1-9]?.com/i
              , x = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                R(),
                L(),
                !g && !_ && K()
            }
            ;
            function L() {
                l = e("html").attr("data-wf-site"),
                y = "https://webflow.com/api/v1/form/" + l,
                s && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")),
                A = `${y}/signFile`,
                o = e(u + " form"),
                o.length && o.each(B)
            }
            function R() {
                m && (O = document.createElement("script"),
                O.src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                document.head.appendChild(O),
                O.onload = () => {
                    i.trigger(n)
                }
                )
            }
            function B(I, U) {
                var G = e(U)
                  , X = e.data(U, u);
                X || (X = e.data(U, u, {
                    form: G
                })),
                j(X);
                var $ = G.closest("div.w-form");
                X.done = $.find("> .w-form-done"),
                X.fail = $.find("> .w-form-fail"),
                X.fileUploads = $.find(".w-file-upload"),
                X.fileUploads.each(function(z) {
                    ce(z, X)
                }),
                m && (X.wait = !1,
                Q(X),
                i.on(typeof turnstile < "u" ? "ready" : n, function() {
                    TF(m, U, z => {
                        X.turnstileToken = z,
                        j(X)
                    }
                    , () => {
                        Q(X)
                    }
                    )
                }));
                var Z = X.form.attr("aria-label") || X.form.attr("data-name") || "Form";
                X.done.attr("aria-label") || X.form.attr("aria-label", Z),
                X.done.attr("tabindex", "-1"),
                X.done.attr("role", "region"),
                X.done.attr("aria-label") || X.done.attr("aria-label", Z + " success"),
                X.fail.attr("tabindex", "-1"),
                X.fail.attr("role", "region"),
                X.fail.attr("aria-label") || X.fail.attr("aria-label", Z + " failure");
                var ie = X.action = G.attr("action");
                if (X.handler = null,
                X.redirect = G.attr("data-redirect"),
                w.test(ie)) {
                    X.handler = D;
                    return
                }
                if (!ie) {
                    if (l) {
                        X.handler = ( () => {
                            let z = Dv().default;
                            return z(j, a, zr, N, W, ne, p, F, Q, l, M, e, y)
                        }
                        )();
                        return
                    }
                    x()
                }
            }
            function K() {
                _ = !0,
                i.on("submit", u + " form", function(z) {
                    var d = e.data(this, u);
                    d.handler && (d.evt = z,
                    d.handler(d))
                });
                let I = ".w-checkbox-input"
                  , U = ".w-radio-input"
                  , G = "w--redirected-checked"
                  , X = "w--redirected-focus"
                  , $ = "w--redirected-focus-visible"
                  , Z = ":focus-visible, [data-wf-focus-visible]"
                  , ie = [["checkbox", I], ["radio", U]];
                i.on("change", u + ' form input[type="checkbox"]:not(' + I + ")", z => {
                    e(z.target).siblings(I).toggleClass(G)
                }
                ),
                i.on("change", u + ' form input[type="radio"]', z => {
                    e(`input[name="${z.target.name}"]:not(${I})`).map( (q, J) => e(J).siblings(U).removeClass(G));
                    let d = e(z.target);
                    d.hasClass("w-radio-input") || d.siblings(U).addClass(G)
                }
                ),
                ie.forEach( ([z,d]) => {
                    i.on("focus", u + ` form input[type="${z}"]:not(` + d + ")", q => {
                        e(q.target).siblings(d).addClass(X),
                        e(q.target).filter(Z).siblings(d).addClass($)
                    }
                    ),
                    i.on("blur", u + ` form input[type="${z}"]:not(` + d + ")", q => {
                        e(q.target).siblings(d).removeClass(`${X} ${$}`)
                    }
                    )
                }
                )
            }
            function j(I) {
                var U = I.btn = I.form.find(':input[type="submit"]');
                I.wait = I.btn.attr("data-wait") || null,
                I.success = !1,
                U.prop("disabled", !!(m && !I.turnstileToken)),
                I.label && U.val(I.label)
            }
            function Q(I) {
                var U = I.btn
                  , G = I.wait;
                U.prop("disabled", !0),
                G && (I.label = U.val(),
                U.val(G))
            }
            function ne(I, U) {
                var G = null;
                return U = U || {},
                I.find(':input:not([type="submit"]):not([type="file"])').each(function(X, $) {
                    var Z = e($)
                      , ie = Z.attr("type")
                      , z = Z.attr("data-name") || Z.attr("name") || "Field " + (X + 1);
                    z = encodeURIComponent(z);
                    var d = Z.val();
                    if (ie === "checkbox")
                        d = Z.is(":checked");
                    else if (ie === "radio") {
                        if (U[z] === null || typeof U[z] == "string")
                            return;
                        d = I.find('input[name="' + Z.attr("name") + '"]:checked').val() || null
                    }
                    typeof d == "string" && (d = e.trim(d)),
                    U[z] = d,
                    G = G || Y(Z, ie, z, d)
                }),
                G
            }
            function F(I) {
                var U = {};
                return I.find(':input[type="file"]').each(function(G, X) {
                    var $ = e(X)
                      , Z = $.attr("data-name") || $.attr("name") || "File " + (G + 1)
                      , ie = $.attr("data-value");
                    typeof ie == "string" && (ie = e.trim(ie)),
                    U[Z] = ie
                }),
                U
            }
            let b = {
                _mkto_trk: "marketo"
            };
            function N() {
                return document.cookie.split("; ").reduce(function(U, G) {
                    let X = G.split("=")
                      , $ = X[0];
                    if ($ in b) {
                        let Z = b[$]
                          , ie = X.slice(1).join("=");
                        U[Z] = ie
                    }
                    return U
                }, {})
            }
            function Y(I, U, G, X) {
                var $ = null;
                return U === "password" ? $ = "Passwords cannot be submitted." : I.attr("required") ? X ? v.test(I.attr("type")) && (h.test(X) || ($ = "Please enter a valid email address for: " + G)) : $ = "Please fill out the required field: " + G : G === "g-recaptcha-response" && !X && ($ = "Please confirm you\u2019re not a robot."),
                $
            }
            function k(I) {
                W(I),
                M(I)
            }
            function D(I) {
                j(I);
                var U = I.form
                  , G = {};
                if (/^https/.test(a.href) && !/^https/.test(I.action)) {
                    U.attr("method", "post");
                    return
                }
                W(I);
                var X = ne(U, G);
                if (X)
                    return p(X);
                Q(I);
                var $;
                t.each(G, function(d, q) {
                    v.test(q) && (G.EMAIL = d),
                    /^((full[ _-]?)?name)$/i.test(q) && ($ = d),
                    /^(first[ _-]?name)$/i.test(q) && (G.FNAME = d),
                    /^(last[ _-]?name)$/i.test(q) && (G.LNAME = d)
                }),
                $ && !G.FNAME && ($ = $.split(" "),
                G.FNAME = $[0],
                G.LNAME = G.LNAME || $[1]);
                var Z = I.action.replace("/post?", "/post-json?") + "&c=?"
                  , ie = Z.indexOf("u=") + 2;
                ie = Z.substring(ie, Z.indexOf("&", ie));
                var z = Z.indexOf("id=") + 3;
                z = Z.substring(z, Z.indexOf("&", z)),
                G["b_" + ie + "_" + z] = "",
                e.ajax({
                    url: Z,
                    data: G,
                    dataType: "jsonp"
                }).done(function(d) {
                    I.success = d.result === "success" || /already/.test(d.msg),
                    I.success || console.info("MailChimp error: " + d.msg),
                    M(I)
                }).fail(function() {
                    M(I)
                })
            }
            function M(I) {
                var U = I.form
                  , G = I.redirect
                  , X = I.success;
                if (X && G) {
                    zr.location(G);
                    return
                }
                I.done.toggle(X),
                I.fail.toggle(!X),
                X ? I.done.focus() : I.fail.focus(),
                U.toggle(!X),
                j(I)
            }
            function W(I) {
                I.evt && I.evt.preventDefault(),
                I.evt = null
            }
            function ce(I, U) {
                if (!U.fileUploads || !U.fileUploads[I])
                    return;
                var G, X = e(U.fileUploads[I]), $ = X.find("> .w-file-upload-default"), Z = X.find("> .w-file-upload-uploading"), ie = X.find("> .w-file-upload-success"), z = X.find("> .w-file-upload-error"), d = $.find(".w-file-upload-input"), q = $.find(".w-file-upload-label"), J = q.children(), H = z.find(".w-file-upload-error-msg"), he = ie.find(".w-file-upload-file"), ut = ie.find(".w-file-remove-link"), je = he.find(".w-file-upload-file-name"), c = H.attr("data-w-size-error"), E = H.attr("data-w-type-error"), T = H.attr("data-w-generic-error");
                if (g || q.on("click keydown", function(te) {
                    te.type === "keydown" && te.which !== 13 && te.which !== 32 || (te.preventDefault(),
                    d.click())
                }),
                q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                ut.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                g)
                    d.on("click", function(te) {
                        te.preventDefault()
                    }),
                    q.on("click", function(te) {
                        te.preventDefault()
                    }),
                    J.on("click", function(te) {
                        te.preventDefault()
                    });
                else {
                    ut.on("click keydown", function(te) {
                        if (te.type === "keydown") {
                            if (te.which !== 13 && te.which !== 32)
                                return;
                            te.preventDefault()
                        }
                        d.removeAttr("data-value"),
                        d.val(""),
                        je.html(""),
                        $.toggle(!0),
                        ie.toggle(!1),
                        q.focus()
                    }),
                    d.on("change", function(te) {
                        G = te.target && te.target.files && te.target.files[0],
                        G && ($.toggle(!1),
                        z.toggle(!1),
                        Z.toggle(!0),
                        Z.focus(),
                        je.text(G.name),
                        oe() || Q(U),
                        U.fileUploads[I].uploading = !0,
                        fe(G, C))
                    });
                    var S = q.outerHeight();
                    d.height(S),
                    d.width(1)
                }
                function P(te) {
                    var V = te.responseJSON && te.responseJSON.msg
                      , ae = T;
                    typeof V == "string" && V.indexOf("InvalidFileTypeError") === 0 ? ae = E : typeof V == "string" && V.indexOf("MaxFileSizeError") === 0 && (ae = c),
                    H.text(ae),
                    d.removeAttr("data-value"),
                    d.val(""),
                    Z.toggle(!1),
                    $.toggle(!0),
                    z.toggle(!0),
                    z.focus(),
                    U.fileUploads[I].uploading = !1,
                    oe() || j(U)
                }
                function C(te, V) {
                    if (te)
                        return P(te);
                    var ae = V.fileName
                      , ue = V.postData
                      , _e = V.fileId
                      , Fe = V.s3Url;
                    d.attr("data-value", _e),
                    se(Fe, ue, G, ae, ee)
                }
                function ee(te) {
                    if (te)
                        return P(te);
                    Z.toggle(!1),
                    ie.css("display", "inline-block"),
                    ie.focus(),
                    U.fileUploads[I].uploading = !1,
                    oe() || j(U)
                }
                function oe() {
                    var te = U.fileUploads && U.fileUploads.toArray() || [];
                    return te.some(function(V) {
                        return V.uploading
                    })
                }
            }
            function fe(I, U) {
                var G = new URLSearchParams({
                    name: I.name,
                    size: I.size
                });
                e.ajax({
                    type: "GET",
                    url: `${A}?${G}`,
                    crossDomain: !0
                }).done(function(X) {
                    U(null, X)
                }).fail(function(X) {
                    U(X)
                })
            }
            function se(I, U, G, X, $) {
                var Z = new FormData;
                for (var ie in U)
                    Z.append(ie, U[ie]);
                Z.append("file", G, X),
                e.ajax({
                    type: "POST",
                    url: I,
                    data: Z,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    $(null)
                }).fail(function(z) {
                    $(z)
                })
            }
            return r
        }
        )
    }
    );
    var Gv = f( (xX, qv) => {
        "use strict";
        var ht = qe()
          , bF = ti()
          , Ae = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        ht.define("navbar", qv.exports = function(e, t) {
            var n = {}, r = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, v, h = ht.env(), p = '<div class="w-nav-overlay" data-wf-ignore />', g = ".w-nav", _ = "w--open", y = "w--nav-dropdown-open", A = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", O = "w--nav-link-open", w = bF.triggers, x = e();
            n.ready = n.design = n.preview = L,
            n.destroy = function() {
                x = e(),
                R(),
                u && u.length && u.each(Q)
            }
            ;
            function L() {
                l = h && ht.env("design"),
                v = ht.env("editor"),
                s = e(document.body),
                u = o.find(g),
                u.length && (u.each(j),
                R(),
                B())
            }
            function R() {
                ht.resize.off(K)
            }
            function B() {
                ht.resize.on(K)
            }
            function K() {
                u.each(I)
            }
            function j(d, q) {
                var J = e(q)
                  , H = e.data(q, g);
                H || (H = e.data(q, g, {
                    open: !1,
                    el: J,
                    config: {},
                    selectedIdx: -1
                })),
                H.menu = J.find(".w-nav-menu"),
                H.links = H.menu.find(".w-nav-link"),
                H.dropdowns = H.menu.find(".w-dropdown"),
                H.dropdownToggle = H.menu.find(".w-dropdown-toggle"),
                H.dropdownList = H.menu.find(".w-dropdown-list"),
                H.button = J.find(".w-nav-button"),
                H.container = J.find(".w-container"),
                H.overlayContainerId = "w-nav-overlay-" + d,
                H.outside = fe(H);
                var he = J.find(".w-nav-brand");
                he && he.attr("href") === "/" && he.attr("aria-label") == null && he.attr("aria-label", "home"),
                H.button.attr("style", "-webkit-user-select: text;"),
                H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"),
                H.button.attr("role", "button"),
                H.button.attr("tabindex", "0"),
                H.button.attr("aria-controls", H.overlayContainerId),
                H.button.attr("aria-haspopup", "menu"),
                H.button.attr("aria-expanded", "false"),
                H.el.off(g),
                H.button.off(g),
                H.menu.off(g),
                b(H),
                l ? (ne(H),
                H.el.on("setting" + g, N(H))) : (F(H),
                H.button.on("click" + g, W(H)),
                H.menu.on("click" + g, "a", ce(H)),
                H.button.on("keydown" + g, Y(H)),
                H.el.on("keydown" + g, k(H))),
                I(d, q)
            }
            function Q(d, q) {
                var J = e.data(q, g);
                J && (ne(J),
                e.removeData(q, g))
            }
            function ne(d) {
                d.overlay && (z(d, !0),
                d.overlay.remove(),
                d.overlay = null)
            }
            function F(d) {
                d.overlay || (d.overlay = e(p).appendTo(d.el),
                d.overlay.attr("id", d.overlayContainerId),
                d.parent = d.menu.parent(),
                z(d, !0))
            }
            function b(d) {
                var q = {}
                  , J = d.config || {}
                  , H = q.animation = d.el.attr("data-animation") || "default";
                q.animOver = /^over/.test(H),
                q.animDirect = /left$/.test(H) ? -1 : 1,
                J.animation !== H && d.open && t.defer(M, d),
                q.easing = d.el.attr("data-easing") || "ease",
                q.easing2 = d.el.attr("data-easing2") || "ease";
                var he = d.el.attr("data-duration");
                q.duration = he != null ? Number(he) : 400,
                q.docHeight = d.el.attr("data-doc-height"),
                d.config = q
            }
            function N(d) {
                return function(q, J) {
                    J = J || {};
                    var H = i.width();
                    b(d),
                    J.open === !0 && Z(d, !0),
                    J.open === !1 && z(d, !0),
                    d.open && t.defer(function() {
                        H !== i.width() && M(d)
                    })
                }
            }
            function Y(d) {
                return function(q) {
                    switch (q.keyCode) {
                    case Ae.SPACE:
                    case Ae.ENTER:
                        return W(d)(),
                        q.preventDefault(),
                        q.stopPropagation();
                    case Ae.ESCAPE:
                        return z(d),
                        q.preventDefault(),
                        q.stopPropagation();
                    case Ae.ARROW_RIGHT:
                    case Ae.ARROW_DOWN:
                    case Ae.HOME:
                    case Ae.END:
                        return d.open ? (q.keyCode === Ae.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0,
                        D(d),
                        q.preventDefault(),
                        q.stopPropagation()) : (q.preventDefault(),
                        q.stopPropagation())
                    }
                }
            }
            function k(d) {
                return function(q) {
                    if (d.open)
                        switch (d.selectedIdx = d.links.index(document.activeElement),
                        q.keyCode) {
                        case Ae.HOME:
                        case Ae.END:
                            return q.keyCode === Ae.END ? d.selectedIdx = d.links.length - 1 : d.selectedIdx = 0,
                            D(d),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ESCAPE:
                            return z(d),
                            d.button.focus(),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ARROW_LEFT:
                        case Ae.ARROW_UP:
                            return d.selectedIdx = Math.max(-1, d.selectedIdx - 1),
                            D(d),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ARROW_RIGHT:
                        case Ae.ARROW_DOWN:
                            return d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1),
                            D(d),
                            q.preventDefault(),
                            q.stopPropagation()
                        }
                }
            }
            function D(d) {
                if (d.links[d.selectedIdx]) {
                    var q = d.links[d.selectedIdx];
                    q.focus(),
                    ce(q)
                }
            }
            function M(d) {
                d.open && (z(d, !0),
                Z(d, !0))
            }
            function W(d) {
                return a(function() {
                    d.open ? z(d) : Z(d)
                })
            }
            function ce(d) {
                return function(q) {
                    var J = e(this)
                      , H = J.attr("href");
                    if (!ht.validClick(q.currentTarget)) {
                        q.preventDefault();
                        return
                    }
                    H && H.indexOf("#") === 0 && d.open && z(d)
                }
            }
            function fe(d) {
                return d.outside && o.off("click" + g, d.outside),
                function(q) {
                    var J = e(q.target);
                    v && J.closest(".w-editor-bem-EditorOverlay").length || se(d, J)
                }
            }
            var se = a(function(d, q) {
                if (d.open) {
                    var J = q.closest(".w-nav-menu");
                    d.menu.is(J) || z(d)
                }
            });
            function I(d, q) {
                var J = e.data(q, g)
                  , H = J.collapsed = J.button.css("display") !== "none";
                if (J.open && !H && !l && z(J, !0),
                J.container.length) {
                    var he = G(J);
                    J.links.each(he),
                    J.dropdowns.each(he)
                }
                J.open && ie(J)
            }
            var U = "max-width";
            function G(d) {
                var q = d.container.css(U);
                return q === "none" && (q = ""),
                function(J, H) {
                    H = e(H),
                    H.css(U, ""),
                    H.css(U) === "none" && H.css(U, q)
                }
            }
            function X(d, q) {
                q.setAttribute("data-nav-menu-open", "")
            }
            function $(d, q) {
                q.removeAttribute("data-nav-menu-open")
            }
            function Z(d, q) {
                if (d.open)
                    return;
                d.open = !0,
                d.menu.each(X),
                d.links.addClass(O),
                d.dropdowns.addClass(y),
                d.dropdownToggle.addClass(A),
                d.dropdownList.addClass(m),
                d.button.addClass(_);
                var J = d.config
                  , H = J.animation;
                (H === "none" || !r.support.transform || J.duration <= 0) && (q = !0);
                var he = ie(d)
                  , ut = d.menu.outerHeight(!0)
                  , je = d.menu.outerWidth(!0)
                  , c = d.el.height()
                  , E = d.el[0];
                if (I(0, E),
                w.intro(0, E),
                ht.redraw.up(),
                l || o.on("click" + g, d.outside),
                q) {
                    P();
                    return
                }
                var T = "transform " + J.duration + "ms " + J.easing;
                if (d.overlay && (x = d.menu.prev(),
                d.overlay.show().append(d.menu)),
                J.animOver) {
                    r(d.menu).add(T).set({
                        x: J.animDirect * je,
                        height: he
                    }).start({
                        x: 0
                    }).then(P),
                    d.overlay && d.overlay.width(je);
                    return
                }
                var S = c + ut;
                r(d.menu).add(T).set({
                    y: -S
                }).start({
                    y: 0
                }).then(P);
                function P() {
                    d.button.attr("aria-expanded", "true")
                }
            }
            function ie(d) {
                var q = d.config
                  , J = q.docHeight ? o.height() : s.height();
                return q.animOver ? d.menu.height(J) : d.el.css("position") !== "fixed" && (J -= d.el.outerHeight(!0)),
                d.overlay && d.overlay.height(J),
                J
            }
            function z(d, q) {
                if (!d.open)
                    return;
                d.open = !1,
                d.button.removeClass(_);
                var J = d.config;
                if ((J.animation === "none" || !r.support.transform || J.duration <= 0) && (q = !0),
                w.outro(0, d.el[0]),
                o.off("click" + g, d.outside),
                q) {
                    r(d.menu).stop(),
                    E();
                    return
                }
                var H = "transform " + J.duration + "ms " + J.easing2
                  , he = d.menu.outerHeight(!0)
                  , ut = d.menu.outerWidth(!0)
                  , je = d.el.height();
                if (J.animOver) {
                    r(d.menu).add(H).start({
                        x: ut * J.animDirect
                    }).then(E);
                    return
                }
                var c = je + he;
                r(d.menu).add(H).start({
                    y: -c
                }).then(E);
                function E() {
                    d.menu.height(""),
                    r(d.menu).set({
                        x: 0,
                        y: 0
                    }),
                    d.menu.each($),
                    d.links.removeClass(O),
                    d.dropdowns.removeClass(y),
                    d.dropdownToggle.removeClass(A),
                    d.dropdownList.removeClass(m),
                    d.overlay && d.overlay.children().length && (x.length ? d.menu.insertAfter(x) : d.menu.prependTo(d.parent),
                    d.overlay.attr("style", "").hide()),
                    d.el.triggerHandler("w-close"),
                    d.button.attr("aria-expanded", "false")
                }
            }
            return n
        }
        )
    }
    );
    wa();
    Oa();
    Ra();
    La();
    Mn();
    Fa();
    ti();
    Ov();
    Rv();
    Pv();
    Nv();
    Fv();
    Gv();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "popup-subtext",
    "name": "Popup Subtext",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".popup-subtext",
            "siblings": true,
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 200 ease 0, opacity 200 ease 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 200 ease 0, opacity 200 ease 0",
                "x": "-5vw",
                "y": "0px",
                "z": "0px"
            }]
        }]
    }
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".load-text",
                "originalId": "5ff722ee958f537d9e67dac3|e0ba1677-55d2-42a6-a3b1-fae663140e35",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".load-text",
                "originalId": "5ff722ee958f537d9e67dac3|e0ba1677-55d2-42a6-a3b1-fae663140e35",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1608841278449
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-title",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1609108830254
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutLeft",
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-title",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": false
            },
            "createdOn": 1609108830254
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-epigraph",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-epigraph",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1609110209965
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutRight",
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-epigraph",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-epigraph",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": false
            },
            "createdOn": 1609110209966
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-text",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".article-text",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1609110239355
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SHRINK_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "shrinkOut",
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-text",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".article-text",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": false
            },
            "createdOn": 1609110239356
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f53766167dac6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f53766167dac6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 0,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 0,
                "restingState": 50
            }],
            "createdOn": 1609110474299
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f53766167dac6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f53766167dac6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1609110498693
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-hover-ix",
                "originalId": "5ff722ee958f537d9e67dac3|a696fda3-c783-edaa-a5b2-bc7cf8cf5212",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-hover-ix",
                "originalId": "5ff722ee958f537d9e67dac3|a696fda3-c783-edaa-a5b2-bc7cf8cf5212",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609112112298
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-hover-ix",
                "originalId": "5ff722ee958f537d9e67dac3|a696fda3-c783-edaa-a5b2-bc7cf8cf5212",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-hover-ix",
                "originalId": "5ff722ee958f537d9e67dac3|a696fda3-c783-edaa-a5b2-bc7cf8cf5212",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609112112299
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-load",
                "originalId": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-load",
                "originalId": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114234791
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-intro",
                "originalId": "5ff722ee958f537d9e67dac3|1a9b6693-a463-8ea7-1ae5-f62c03b8c5e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-intro",
                "originalId": "5ff722ee958f537d9e67dac3|1a9b6693-a463-8ea7-1ae5-f62c03b8c5e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114441794
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-companies",
                "originalId": "5ff722ee958f537d9e67dac3|82c446bf-1248-7321-9b17-4c8d018fba8b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-companies",
                "originalId": "5ff722ee958f537d9e67dac3|82c446bf-1248-7321-9b17-4c8d018fba8b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114481296
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-about",
                "originalId": "5ff722ee958f537d9e67dac3|60feaafb-5288-a0b4-4e7a-95bd760b4b79",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-about",
                "originalId": "5ff722ee958f537d9e67dac3|60feaafb-5288-a0b4-4e7a-95bd760b4b79",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114520824
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-writing",
                "originalId": "5ff722ee958f537d9e67dac3|77723beb-19e5-4e19-df5f-2fe59a2d9bd5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-writing",
                "originalId": "5ff722ee958f537d9e67dac3|77723beb-19e5-4e19-df5f-2fe59a2d9bd5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114538306
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-contact",
                "originalId": "5ff722ee958f537d9e67dac3|a57a7cfa-b016-da36-fe0c-7ff4090ae5f4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-contact",
                "originalId": "5ff722ee958f537d9e67dac3|a57a7cfa-b016-da36-fe0c-7ff4090ae5f4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1609114563504
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-load",
                "originalId": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": false
            },
            "createdOn": 1610017327976
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f537d9e67dac3|1a9b6693-a463-8ea7-1ae5-f62c03b8c5e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f537d9e67dac3|1a9b6693-a463-8ea7-1ae5-f62c03b8c5e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610028597394
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f3fe8bab20c129594df|d000c957-1e98-d749-eab1-312bf26ff67e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f3fe8bab20c129594df|d000c957-1e98-d749-eab1-312bf26ff67e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610559300146
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f620135f805beb35053|a00ddd13-1905-f420-a530-59ea9638d73d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f620135f805beb35053|a00ddd13-1905-f420-a530-59ea9638d73d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610559332935
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f820f16f4f11fea9f28|9f81b952-6e16-1010-4917-e2e38aac1472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f820f16f4f11fea9f28|9f81b952-6e16-1010-4917-e2e38aac1472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610559365912
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link",
                "originalId": "1ededfed-5ec5-50ca-20ac-5b9581b9013e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link",
                "originalId": "1ededfed-5ec5-50ca-20ac-5b9581b9013e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610560678727
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610561103752
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f3fe8bab20c129594df",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f3fe8bab20c129594df",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610561432820
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f620135f805beb35053",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f620135f805beb35053",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610561446333
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f820f16f4f11fea9f28",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f820f16f4f11fea9f28",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1610561459572
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "602542e966cdcc20fb528993|a00ddd13-1905-f420-a530-59ea9638d73d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "602542e966cdcc20fb528993|a00ddd13-1905-f420-a530-59ea9638d73d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1613054698097
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "602542e966cdcc20fb528993",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "602542e966cdcc20fb528993",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1613054698097
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-title-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1609108830254
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutLeft",
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-title-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb9559",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": false
            },
            "createdOn": 1609108830254
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-epigraph-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-epigraph-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1609110209965
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutRight",
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-epigraph-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-epigraph-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": false
            },
            "createdOn": 1609110209966
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-text-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".article-text-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1609110239355
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SHRINK_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "shrinkOut",
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".article-text-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".article-text-2",
                "originalId": "602544282b2c70df5afe5e13|2b0ca258-2a2f-d807-aa18-12ddc2fb955d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": false
            },
            "createdOn": 1609110239356
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616779879769
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ff722ee958f537d9e67dac3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616780204245
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f3fe8bab20c129594df",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f3fe8bab20c129594df",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616780464345
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f820f16f4f11fea9f28",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f820f16f4f11fea9f28",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616780481760
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5fff2f620135f805beb35053",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5fff2f620135f805beb35053",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616780532532
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "602542e966cdcc20fb528993",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "602542e966cdcc20fb528993",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1616780558369
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60b79726309a3c6949e77fa5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60b79726309a3c6949e77fa5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1623258471919
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60b79726309a3c6949e77fa5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60b79726309a3c6949e77fa5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1623258535081
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624154141881
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624154141881
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60cea01aa776ab059612879c|ef929a4d-ca74-47e2-7f30-06e27b8794f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624154141881
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60cea01aa776ab059612879c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60cea01aa776ab059612879c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624154141881
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60cea01aa776ab059612879c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60cea01aa776ab059612879c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1624154141881
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6361840ee3006463081f8e67",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6361840ee3006463081f8e67",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667335182737
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6361840ee3006463081f8e67",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6361840ee3006463081f8e67",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667335182737
        }
    },
    "actionLists": {
        "a-2": {
            "id": "a-2",
            "title": "inner dot",
            "continuousParameterGroups": [{
                "id": "a-2-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".inner-dot",
                                "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".inner-dot",
                                "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-2-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".inner-dot",
                                "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-2-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".inner-dot",
                                "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1608851771977
        },
        "a-3": {
            "id": "a-3",
            "title": "outer circle",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".outer-circle",
                                "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".outer-circle",
                                "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-3-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".outer-circle",
                                "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".outer-circle",
                                "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1608851966205
        },
        "a-5": {
            "id": "a-5",
            "title": "cursor on hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "widthValue": 35,
                        "heightValue": 35,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "value": 0.9,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".outer-circle",
                            "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "widthValue": 25,
                        "heightValue": 25,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1609112144723
        },
        "a-6": {
            "id": "a-6",
            "title": "cursor on hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "widthValue": 7,
                        "heightValue": 7,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".outer-circle",
                            "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1609112144723
        },
        "a-7": {
            "id": "a-7",
            "title": "Cursor White",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 50,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "globalSwatchId": "2be78bd2",
                        "rValue": 244,
                        "bValue": 247,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 50,
                        "target": {
                            "selector": ".outer-circle",
                            "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                        },
                        "globalSwatchId": "2be78bd2",
                        "rValue": 244,
                        "bValue": 247,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1609114243404
        },
        "a-8": {
            "id": "a-8",
            "title": "Cursor Blue",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 50,
                        "target": {
                            "selector": ".inner-dot",
                            "selectorGuids": ["77fd4de4-8e4c-e414-6bc8-473d1e6b62c3"]
                        },
                        "globalSwatchId": "1ee4da9b",
                        "rValue": 0,
                        "bValue": 149,
                        "gValue": 38,
                        "aValue": 1
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 50,
                        "target": {
                            "selector": ".outer-circle",
                            "selectorGuids": ["aed6c0eb-9cc3-df02-fbb5-049a64dd9756"]
                        },
                        "globalSwatchId": "1ee4da9b",
                        "rValue": 0,
                        "bValue": 149,
                        "gValue": 38,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1609114243404
        },
        "a-15": {
            "id": "a-15",
            "title": "Homepage Slide Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-load",
                            "selectorGuids": ["8c1d5454-a186-b7cb-433e-5a4d7778b139"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-copy",
                            "selectorGuids": ["b4d89a51-9e34-0914-3508-cf73dfed5c09"]
                        },
                        "xValue": 40,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".intro-heading",
                            "selectorGuids": ["b8237753-2119-a0e2-4e5f-084713aa534e"]
                        },
                        "xValue": -60,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section.pp-scrollable.section-wrapper.intro",
                            "selectorGuids": ["b7d2dc17-447c-737d-607f-d08054fbd355", "100f7410-f49a-a563-fb70-b1e583990ea7", "0c6621bd-dc60-b472-6d48-da2db0b832fb", "3eddbfb7-8063-3d9f-a34d-1a5ffdcd6328"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".menu-wrapper",
                            "selectorGuids": ["11c5f543-7bcb-9296-b8c6-13719a9a5edb"]
                        },
                        "xValue": -20,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 400,
                        "target": {
                            "selector": ".section-load",
                            "selectorGuids": ["8c1d5454-a186-b7cb-433e-5a4d7778b139"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 400,
                        "target": {
                            "selector": ".section.pp-scrollable.section-wrapper.intro",
                            "selectorGuids": ["b7d2dc17-447c-737d-607f-d08054fbd355", "100f7410-f49a-a563-fb70-b1e583990ea7", "0c6621bd-dc60-b472-6d48-da2db0b832fb", "3eddbfb7-8063-3d9f-a34d-1a5ffdcd6328"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 300,
                        "target": {
                            "selector": ".intro-heading",
                            "selectorGuids": ["b8237753-2119-a0e2-4e5f-084713aa534e"]
                        },
                        "xValue": 0,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 300,
                        "target": {
                            "selector": ".menu-wrapper",
                            "selectorGuids": ["11c5f543-7bcb-9296-b8c6-13719a9a5edb"]
                        },
                        "xValue": 0,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 300,
                        "target": {
                            "selector": ".intro-copy",
                            "selectorGuids": ["b4d89a51-9e34-0914-3508-cf73dfed5c09"]
                        },
                        "xValue": 0,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1610662828306
        },
        "a-11": {
            "id": "a-11",
            "title": "Menu Blue",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "selector": ".menu-link",
                            "selectorGuids": ["eccfe1de-36eb-7e36-5a10-93c1f8d18157"]
                        },
                        "globalSwatchId": "1ee4da9b",
                        "rValue": 0,
                        "bValue": 149,
                        "gValue": 38,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "selector": ".menu-link",
                            "selectorGuids": ["eccfe1de-36eb-7e36-5a10-93c1f8d18157"]
                        },
                        "globalSwatchId": "1ee4da9b",
                        "rValue": 0,
                        "bValue": 149,
                        "gValue": 38,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1610026724011
        },
        "a-12": {
            "id": "a-12",
            "title": "Menu White",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "selector": ".menu-link",
                            "selectorGuids": ["eccfe1de-36eb-7e36-5a10-93c1f8d18157"]
                        },
                        "globalSwatchId": "2be78bd2",
                        "rValue": 244,
                        "bValue": 247,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "selector": ".menu-link",
                            "selectorGuids": ["eccfe1de-36eb-7e36-5a10-93c1f8d18157"]
                        },
                        "globalSwatchId": "2be78bd2",
                        "rValue": 244,
                        "bValue": 247,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1610026799080
        },
        "a-13": {
            "id": "a-13",
            "title": "Page Transition Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1610560065990
        },
        "a-14": {
            "id": "a-14",
            "title": "Page Load Transition",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 400,
                        "target": {
                            "selector": ".top-div",
                            "selectorGuids": ["41e329d4-af20-7724-98a4-d788ccfd2af6"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-14-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 400,
                        "target": {
                            "selector": ".bottom-div",
                            "selectorGuids": ["b1fad733-bc83-1658-539c-410843999c68"]
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1610561136546
        },
        "a-16": {
            "id": "a-16",
            "title": "Blue screen fade in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 400,
                        "target": {
                            "id": "5ff722ee958f537d9e67dac3|ccf09738-76d5-02a0-f34b-dc866c884545"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1616779931909
        },
        "a-17": {
            "id": "a-17",
            "title": "menu fade in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 400,
                        "target": {
                            "id": "1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1616780209274
        },
        "a": {
            "id": "a",
            "title": "Slide from left",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "xValue": -5,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "xValue": 5,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1608841591916
        },
        "a-4": {
            "id": "a-4",
            "title": "Slide to left",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "xValue": -5,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".popup-subtext",
                            "selectorGuids": ["904e3dbc-2e86-e486-dfb6-dd16de44d618"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1608909803888
        },
        "a-18": {
            "id": "a-18",
            "title": "menu fade in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "60cea01aa776ab059612879c|1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 400,
                        "target": {
                            "id": "60cea01aa776ab059612879c|1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1616780209274
        },
        "a-21": {
            "id": "a-21",
            "title": "menu fade in 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6361840ee3006463081f8e67|1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 400,
                        "target": {
                            "id": "6361840ee3006463081f8e67|1ededfed-5ec5-50ca-20ac-5b9581b90139"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1616780209274
        },
        "growBigIn": {
            "id": "growBigIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutLeft": {
            "id": "slideOutLeft",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideOutRight": {
            "id": "slideOutRight",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "shrinkOut": {
            "id": "shrinkOut",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
