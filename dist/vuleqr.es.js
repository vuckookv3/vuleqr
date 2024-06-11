import Ne, { useState as V, useEffect as M, useRef as fe } from "react";
var de = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function dr() {
  if (Ie)
    return Y;
  Ie = 1;
  var C = Ne, l = Symbol.for("react.element"), b = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, g = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(i, v, E) {
    var c, f = {}, w = null, k = null;
    E !== void 0 && (w = "" + E), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (k = v.ref);
    for (c in v)
      d.call(v, c) && !R.hasOwnProperty(c) && (f[c] = v[c]);
    if (i && i.defaultProps)
      for (c in v = i.defaultProps, v)
        f[c] === void 0 && (f[c] = v[c]);
    return { $$typeof: l, type: i, key: w, ref: k, props: f, _owner: g.current };
  }
  return Y.Fragment = b, Y.jsx = m, Y.jsxs = m, Y;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function vr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Ne, l = Symbol.for("react.element"), b = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), i = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), T = Symbol.iterator, B = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = T && e[T] || e[B];
      return typeof r == "function" ? r : null;
    }
    var D = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        re("error", e, t);
      }
    }
    function re(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var S = !1, F = !1, W = !1, x = !1, G = !1, J;
    J = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === R || G || e === g || e === E || e === c || x || e === k || S || F || W || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === f || e.$$typeof === m || e.$$typeof === i || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case b:
          return "Portal";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case E:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ve(r) + ".Consumer";
          case m:
            var t = e;
            return ve(t._context) + ".Provider";
          case v:
            return $e(e, e.render, "ForwardRef");
          case f:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case w: {
            var u = e, s = u._payload, o = u._init;
            try {
              return P(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, N = 0, pe, he, ge, me, ye, be, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Ye() {
      {
        if (N === 0) {
          pe = console.log, he = console.info, ge = console.warn, me = console.error, ye = console.group, be = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function qe() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: pe
            }),
            info: L({}, e, {
              value: he
            }),
            warn: L({}, e, {
              value: ge
            }),
            error: L({}, e, {
              value: me
            }),
            group: L({}, e, {
              value: ye
            }),
            groupCollapsed: L({}, e, {
              value: be
            }),
            groupEnd: L({}, e, {
              value: Ee
            })
          });
        }
        N < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = D.ReactCurrentDispatcher, ae;
    function z(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            ae = n && n[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var ie = !1, H;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ue();
    }
    function Re(e, r) {
      if (!e || ie)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ie = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ne.current, ne.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (j) {
              n = j;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var a = j.stack.split(`
`), _ = n.stack.split(`
`), p = a.length - 1, h = _.length - 1; p >= 1 && h >= 0 && a[p] !== _[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (a[p] !== _[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || a[p] !== _[h]) {
                    var O = `
` + a[p].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, O), O;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = s, qe(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", Ae = I ? z(I) : "";
      return typeof e == "function" && H.set(e, Ae), Ae;
    }
    function Ve(e, r, t) {
      return Re(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Be(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case E:
          return z("Suspense");
        case c:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ve(e.render);
          case f:
            return K(e.type, r, t);
          case w: {
            var n = e, u = n._payload, s = n._init;
            try {
              return K(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, we = {}, Ce = D.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, u) {
      {
        var s = Function.call.bind(Q);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              a = p;
            }
            a && !(a instanceof Error) && (X(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), X(null)), a instanceof Error && !(a.message in we) && (we[a.message] = !0, X(u), y("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Ge = Array.isArray;
    function oe(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Se(e) {
      if (ze(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Te(e);
    }
    var $ = D.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, xe, ue;
    ue = {};
    function Ke(e) {
      if (Q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = P($.current.type);
        ue[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P($.current.type), e.ref), ue[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, u) {
      {
        var s, o = {}, a = null, _ = null;
        t !== void 0 && (Se(t), a = "" + t), Qe(r) && (Se(r.key), a = "" + r.key), Ke(r) && (_ = r.ref, Xe(r, u));
        for (s in r)
          Q.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (s in p)
            o[s] === void 0 && (o[s] = p[s]);
        }
        if (a || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, h), _ && rr(o, h);
        }
        return tr(e, a, _, u, n, $.current, o);
      }
    }
    var se = D.ReactCurrentOwner, Pe = D.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function je() {
      {
        if (se.current) {
          var e = P(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ir(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + P(e._owner.type) + "."), A(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && De(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Z(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), o; !(o = s.next()).done; )
              le(o.value) && De(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === f))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var u = P(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Le(e, r, t, n, u, s) {
      {
        var o = te(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar(u);
          _ ? a += _ : a += je();
          var p;
          e === null ? p = "null" : oe(e) ? p = "array" : e !== void 0 && e.$$typeof === l ? (p = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, a);
        }
        var h = nr(e, r, t, u, s);
        if (h == null)
          return h;
        if (o) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (oe(O)) {
                for (var I = 0; I < O.length; I++)
                  Fe(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(O, e);
        }
        return e === d ? ur(h) : or(h), h;
      }
    }
    function sr(e, r, t) {
      return Le(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Le(e, r, t, !1);
    }
    var lr = cr, fr = sr;
    q.Fragment = d, q.jsx = lr, q.jsxs = fr;
  }()), q;
}
process.env.NODE_ENV === "production" ? de.exports = dr() : de.exports = vr();
var ee = de.exports;
function pr(C = 750, l = 150, b = 5) {
  try {
    const d = new window.AudioContext(), g = d.createOscillator(), R = d.createGain();
    g.connect(R), g.frequency.value = C, g.type = "square", R.connect(d.destination), R.gain.value = b * 0.01, g.start(d.currentTime), g.stop(d.currentTime + l * 1e-3);
  } catch {
    console.warn("Sorry, Web Audio API is not supported by your browser");
  }
}
function hr(C) {
  const [l, b] = V(null), [d, g] = V(null);
  return M(() => {
    function R() {
      try {
        const m = new Worker("vuleqr/zbarWorker.js"), i = new Worker("vuleqr/zxingWorker.js"), v = (E) => async (c) => {
          if (c.data !== null) {
            const f = c.data, w = f.data, k = f.type, T = c.data.ms;
            C({ rawcode: w, milliseconds: T, alg: E, type: k });
          }
        };
        m.onmessage = v("zbar"), i.onmessage = v("zxing"), b(m), g(i);
      } catch {
        return null;
      }
    }
    R();
  }, []), M(() => () => {
    l && l.terminate(), d && d.terminate();
  }, [l, d]), [l, d];
}
function gr(C) {
  const [l, b] = V(null), [d, g] = V(null);
  return M(() => {
    if (mr())
      return;
    async function m() {
      try {
        const i = await navigator.mediaDevices.getUserMedia(C);
        b(i);
      } catch {
        g(new Error("Error accessing media devices.")), b(null);
      }
    }
    return m(), () => {
      l && (l.getTracks().forEach((i) => {
        i.stop();
      }), b(null));
    };
  }, []), [l, d];
}
function mr() {
  return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ? new Error("Browser API navigator.mediaDevices.getUserMedia not available") : null;
}
const U = {
  svg: "M288,298 L288,326 C288,335.388841 280.388841,343 271,343 L243.328859,343 L243.328,319 L249,319 C257.284271,319 264,312.284271 264,304 L264,298 L288,298 Z M56,298 L56,304 C56,312.284271 62.7157288,319 71,319 L76.671,319 L76.6711409,343 L49,343 C39.6111593,343 32,335.388841 32,326 L32,298 L56,298 Z M271,87 C280.388841,87 288,94.6111593 288,104 L288,133 L264,133 L264,126 C264,117.715729 257.284271,111 249,111 L243.328,111 L243.328859,87 L271,87 Z M32,104 C32,94.6111593 39.6111593,87 49,87 L76.6711409,87 L76.671,111 L71,111 C62.7157288,111 56,117.715729 56,126 L56,133 L32,133 L32,104 Z",
  width: 256,
  height: 256,
  x0: 32,
  y0: 87
}, yr = {
  audio: !1,
  video: { facingMode: "environment" }
}, We = {
  width: 320,
  height: 430
};
function _r({
  onCapture: C,
  crosshair: l = !0,
  beepOn: b = !0,
  scanRate: d = 250,
  onError: g,
  isLoading: R
}) {
  const m = fe(null), i = fe(null), v = fe(0), [E, c] = hr(re), f = {
    width: We.width,
    height: We.height
  }, [w, k] = V(null);
  M(() => {
    w && (b && pr(), C(w), i.current = null);
  }, [w]);
  const [T, B] = gr(yr);
  if (T && i.current && !i.current.srcObject && (i.current.srcObject = T), M(() => {
    T && i.current && (i.current.onloadedmetadata = () => {
      R && R(!1);
    });
  }, [T]), M(() => () => {
    T && T.getTracks().forEach((S) => S.stop());
  }, [T]), B)
    return g == null || g(B), null;
  function Z(S) {
    if (i.current && i.current.readyState === 4 && m.current) {
      const F = m.current.getContext("2d", {
        willReadFrequently: !0
      });
      if (!F)
        return;
      F.drawImage(
        i.current,
        (i.current.videoWidth - f.width) / 2,
        (i.current.videoHeight - f.height) / 2,
        f.width,
        f.height,
        0,
        0,
        f.width,
        f.height
      ), l && br(m.current), requestAnimationFrame(Z), i.current && y(S);
    }
  }
  function D() {
    var S;
    (S = i == null ? void 0 : i.current) == null || S.play(), requestAnimationFrame(Z);
  }
  function y(S) {
    var F;
    if (S - v.current > d) {
      v.current = S;
      const W = (F = m.current) == null ? void 0 : F.getContext("2d", {
        willReadFrequently: !0
      });
      if (!W)
        return;
      let x;
      l ? x = W.getImageData(
        U.x0,
        U.y0,
        U.width,
        U.height
      ) : x = W.getImageData(0, 0, f.width, f.height);
      const G = { width: x.width, height: x.height }, J = x.data.buffer.slice(0), te = x.data.buffer.slice(0);
      E == null || E.postMessage(G), c == null || c.postMessage(G), E == null || E.postMessage(x, [J]), c == null || c.postMessage(x, [te]);
    }
  }
  function re(S) {
    i.current && (i.current.pause(), w || k(S));
  }
  return T ? /* @__PURE__ */ ee.jsx("div", { className: "vuleqr__wrapper", children: /* @__PURE__ */ ee.jsxs("div", { className: "vuleqr__container", children: [
    /* @__PURE__ */ ee.jsx(
      "video",
      {
        className: "vuleqr__video",
        ref: i,
        onCanPlay: D,
        autoPlay: !0,
        playsInline: !0,
        muted: !0
      }
    ),
    /* @__PURE__ */ ee.jsx(
      "canvas",
      {
        className: "vuleqr__canvas",
        ref: m,
        width: f.width,
        height: f.height
      }
    )
  ] }) }) : null;
}
function br(C) {
  const l = C.getContext("2d", { willReadFrequently: !0 });
  if (!l)
    return;
  l.fillStyle = "rgba(255,255,255,0.4)";
  const b = new Path2D(U.svg);
  l.fill(b);
}
export {
  _r as default
};
