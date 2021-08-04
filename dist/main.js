(() => {
    "use strict";
    var e, n, t, r, o, a, i, s, u, c, l, f, d, p, v = {
            426: (e, n, t) => {
                t.d(n, {
                    Z: () => a
                });
                var r = t(645),
                    o = t.n(r)()((function(e) {
                        return e[1]
                    }));
                o.push([e.id, ".form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10vh;\n}\n\n.form-element {\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\ninput:invalid:required {}\n", ""]);
                const a = o
            },
            645: e => {
                e.exports = function(e) {
                    var n = [];
                    return n.toString = function() {
                        return this.map((function(n) {
                            var t = e(n);
                            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
                        })).join("")
                    }, n.i = function(e, t, r) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var o = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (o[i] = !0)
                            }
                        for (var s = 0; s < e.length; s++) {
                            var u = [].concat(e[s]);
                            r && o[u[0]] || (t && (u[2] ? u[2] = "".concat(t, " and ").concat(u[2]) : u[2] = t), n.push(u))
                        }
                    }, n
                }
            },
            379: e => {
                var n = [];

                function t(e) {
                    for (var t = -1, r = 0; r < n.length; r++)
                        if (n[r].identifier === e) {
                            t = r;
                            break
                        } return t
                }

                function r(e, r) {
                    for (var a = {}, i = [], s = 0; s < e.length; s++) {
                        var u = e[s],
                            c = r.base ? u[0] + r.base : u[0],
                            l = a[c] || 0,
                            f = "".concat(c, " ").concat(l);
                        a[c] = l + 1;
                        var d = t(f),
                            p = {
                                css: u[1],
                                media: u[2],
                                sourceMap: u[3]
                            }; - 1 !== d ? (n[d].references++, n[d].updater(p)) : n.push({
                            identifier: f,
                            updater: o(p, r),
                            references: 1
                        }), i.push(f)
                    }
                    return i
                }

                function o(e, n) {
                    var t = n.domAPI(n);
                    return t.update(e),
                        function(n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                                t.update(e = n)
                            } else t.remove()
                        }
                }
                e.exports = function(e, o) {
                    var a = r(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var i = 0; i < a.length; i++) {
                            var s = t(a[i]);
                            n[s].references--
                        }
                        for (var u = r(e, o), c = 0; c < a.length; c++) {
                            var l = t(a[c]);
                            0 === n[l].references && (n[l].updater(), n.splice(l, 1))
                        }
                        a = u
                    }
                }
            },
            569: e => {
                var n = {};
                e.exports = function(e, t) {
                    var r = function(e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                t = t.contentDocument.head
                            } catch (e) {
                                t = null
                            }
                            n[e] = t
                        }
                        return n[e]
                    }(e);
                    if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    r.appendChild(t)
                }
            },
            216: e => {
                e.exports = function(e) {
                    var n = document.createElement("style");
                    return e.setAttributes(n, e.attributes), e.insert(n), n
                }
            },
            565: (e, n, t) => {
                e.exports = function(e) {
                    var n = t.nc;
                    n && e.setAttribute("nonce", n)
                }
            },
            795: e => {
                e.exports = function(e) {
                    var n = e.insertStyleElement(e);
                    return {
                        update: function(t) {
                            ! function(e, n, t) {
                                var r = t.css,
                                    o = t.media,
                                    a = t.sourceMap;
                                o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(r, e)
                            }(n, e, t)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(n)
                        }
                    }
                }
            },
            589: e => {
                e.exports = function(e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e;
                    else {
                        for (; n.firstChild;) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(e))
                    }
                }
            }
        },
        m = {};

    function h(e) {
        var n = m[e];
        if (void 0 !== n) return n.exports;
        var t = m[e] = {
            id: e,
            exports: {}
        };
        return v[e](t, t.exports, h), t.exports
    }
    h.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return h.d(n, {
            a: n
        }), n
    }, h.d = (e, n) => {
        for (var t in n) h.o(n, t) && !h.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, h.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), e = h(379), n = h.n(e), t = h(795), r = h.n(t), o = h(569), a = h.n(o), i = h(565), s = h.n(i), u = h(216), c = h.n(u), l = h(589), f = h.n(l), d = h(426), (p = {}).styleTagTransform = f(), p.setAttributes = s(), p.insert = a().bind(null, "head"), p.domAPI = r(), p.insertStyleElement = c(), n()(d.Z, p), d.Z && d.Z.locals && d.Z.locals
})();
