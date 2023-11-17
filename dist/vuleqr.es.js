import Me, { useState as z, useEffect as Y, useRef as se } from "react";
var ce = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function dr() {
  if (Fe)
    return W;
  Fe = 1;
  var _ = Me, l = Symbol.for("react.element"), w = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, h = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(y, c, m) {
    var d, R = {}, C = null, x = null;
    m !== void 0 && (C = "" + m), c.key !== void 0 && (C = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (d in c)
      f.call(c, d) && !u.hasOwnProperty(d) && (R[d] = c[d]);
    if (y && y.defaultProps)
      for (d in c = y.defaultProps, c)
        R[d] === void 0 && (R[d] = c[d]);
    return { $$typeof: l, type: y, key: C, ref: x, props: R, _owner: h.current };
  }
  return W.Fragment = w, W.jsx = T, W.jsxs = T, W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Me, l = Symbol.for("react.element"), w = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), y = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), D = Symbol.iterator, H = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[H];
      return typeof r == "function" ? r : null;
    }
    var b = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        A("error", e, t);
      }
    }
    function A(e, r, t) {
      {
        var n = b.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = !1, U = !1, K = !1, X = !1, We = !1, le;
    le = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === u || We || e === h || e === m || e === d || X || e === x || O || U || K || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === T || e.$$typeof === y || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case w:
          return "Portal";
        case u:
          return "Profiler";
        case h:
          return "StrictMode";
        case m:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return fe(r) + ".Consumer";
          case T:
            var t = e;
            return fe(t._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case C: {
            var o = e, s = o._payload, i = o._init;
            try {
              return P(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, de, ve, pe, he, ge, me, ye;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        I++;
      }
    }
    function Ue() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: de
            }),
            info: k({}, e, {
              value: ve
            }),
            warn: k({}, e, {
              value: pe
            }),
            error: k({}, e, {
              value: he
            }),
            group: k({}, e, {
              value: ge
            }),
            groupCollapsed: k({}, e, {
              value: me
            }),
            groupEnd: k({}, e, {
              value: ye
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = b.ReactCurrentDispatcher, re;
    function q(e, r, t) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            re = n && n[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, V;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new qe();
    }
    function Ee(e, r) {
      if (!e || te)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      te = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ee.current, ee.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              n = j;
            }
            e.call(i.prototype);
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
`), E = n.stack.split(`
`), p = a.length - 1, g = E.length - 1; p >= 1 && g >= 0 && a[p] !== E[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (a[p] !== E[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || a[p] !== E[g]) {
                    var S = `
` + a[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, S), S;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = s, Ue(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", Le = F ? q(F) : "";
      return typeof e == "function" && V.set(e, Le), Le;
    }
    function Ve(e, r, t) {
      return Ee(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Be(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case m:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case R:
            return B(e.type, r, t);
          case C: {
            var n = e, o = n._payload, s = n._init;
            try {
              return B(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, _e = {}, Re = b.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, o) {
      {
        var s = Function.call.bind(Z);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              a = p;
            }
            a && !(a instanceof Error) && (G(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), G(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, G(o), v("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ne(e) {
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
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Ce(e) {
      if (ze(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), we(e);
    }
    var M = b.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Se, ae;
    ae = {};
    function Qe(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = P(M.current.type);
        ae[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(M.current.type), e.ref), ae[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Te || (Te = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, E = null;
        t !== void 0 && (Ce(t), a = "" + t), Ke(r) && (Ce(r.key), a = "" + r.key), Qe(r) && (E = r.ref, Xe(r, o));
        for (s in r)
          Z.call(r, s) && !He.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (s in p)
            i[s] === void 0 && (i[s] = p[s]);
        }
        if (a || E) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, g), E && rr(i, g);
        }
        return tr(e, a, E, o, n, M.current, i);
      }
    }
    var ie = b.ReactCurrentOwner, Oe = b.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function xe() {
      {
        if (ie.current) {
          var e = P(ie.current.type);
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
    var Pe = {};
    function ir(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + P(e._owner.type) + "."), L(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && je(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Q(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              ue(i.value) && je(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var o = P(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function De(e, r, t, n, o, s) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ar(o);
          E ? a += E : a += xe();
          var p;
          e === null ? p = "null" : ne(e) ? p = "array" : e !== void 0 && e.$$typeof === l ? (p = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, a);
        }
        var g = nr(e, r, t, o, s);
        if (g == null)
          return g;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (ne(S)) {
                for (var F = 0; F < S.length; F++)
                  ke(S[F], e);
                Object.freeze && Object.freeze(S);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        return e === f ? ur(g) : or(g), g;
      }
    }
    function sr(e, r, t) {
      return De(e, r, t, !0);
    }
    function cr(e, r, t) {
      return De(e, r, t, !1);
    }
    var lr = cr, fr = sr;
    $.Fragment = f, $.jsx = lr, $.jsxs = fr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ce.exports = dr() : ce.exports = vr();
var J = ce.exports;
function pr(_ = 750, l = 150, w = 5) {
  try {
    const f = new window.AudioContext(), h = f.createOscillator(), u = f.createGain();
    h.connect(u), h.frequency.value = _, h.type = "square", u.connect(f.destination), u.gain.value = w * 0.01, h.start(f.currentTime), h.stop(f.currentTime + l * 1e-3);
  } catch {
    console.warn("Sorry, Web Audio API is not supported by your browser");
  }
}
function hr(_) {
  const [l, w] = z(null), [f, h] = z(null);
  return Y(() => {
    function u() {
      try {
        const T = new Worker("vuleqr/zbarWorker.js"), y = new Worker("vuleqr/zxingWorker.js"), c = (m) => async (d) => {
          if (d.data !== null) {
            const R = d.data, C = R.data, x = R.type, D = d.data.ms;
            _({ rawcode: C, milliseconds: D, alg: m, type: x });
          }
        };
        T.onmessage = c("zbar"), y.onmessage = c("zxing"), w(T), h(y);
      } catch {
        return null;
      }
    }
    u();
  }, []), Y(() => () => {
    l && l.terminate(), f && f.terminate();
  }, [l, f]), [l, f];
}
function gr(_) {
  const [l, w] = z(null);
  return Y(() => {
    if (mr())
      return;
    async function h() {
      try {
        const u = await navigator.mediaDevices.getUserMedia(_);
        w(u);
      } catch {
        return null;
      }
    }
    h();
  }, [_]), Y(() => () => {
    l && l.getTracks().forEach((f) => f.stop());
  }, []), l;
}
function mr() {
  return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ? new Error("Browser API navigator.mediaDevices.getUserMedia not available") : null;
}
const N = {
  svg: "M288,298 L288,326 C288,335.388841 280.388841,343 271,343 L243.328859,343 L243.328,319 L249,319 C257.284271,319 264,312.284271 264,304 L264,298 L288,298 Z M56,298 L56,304 C56,312.284271 62.7157288,319 71,319 L76.671,319 L76.6711409,343 L49,343 C39.6111593,343 32,335.388841 32,326 L32,298 L56,298 Z M271,87 C280.388841,87 288,94.6111593 288,104 L288,133 L264,133 L264,126 C264,117.715729 257.284271,111 249,111 L243.328,111 L243.328859,87 L271,87 Z M32,104 C32,94.6111593 39.6111593,87 49,87 L76.6711409,87 L76.671,111 L71,111 C62.7157288,111 56,117.715729 56,126 L56,133 L32,133 L32,104 Z",
  width: 256,
  height: 256,
  x0: 32,
  y0: 87
}, yr = {
  audio: !1,
  video: { facingMode: "environment" }
}, Ie = {
  width: 320,
  height: 430
};
function _r({
  onCapture: _,
  crosshair: l = !0,
  beepOn: w = !0,
  scanRate: f = 250
}) {
  const h = se(null), u = se(null), T = se(0), [y, c] = hr(Q), m = {
    width: Ie.width,
    height: Ie.height
  }, [d, R] = z(null);
  Y(() => {
    d && (w && pr(), _(d));
  }, [d]);
  const C = gr(yr);
  C && u.current && !u.current.srcObject && (u.current.srcObject = C);
  function x(b) {
    if (u.current && u.current.readyState === 4 && h.current) {
      const v = h.current.getContext("2d", {
        willReadFrequently: !0
      });
      if (!v)
        return;
      v.drawImage(
        u.current,
        (u.current.videoWidth - m.width) / 2,
        (u.current.videoHeight - m.height) / 2,
        m.width,
        m.height,
        0,
        0,
        m.width,
        m.height
      ), l && br(h.current), requestAnimationFrame(x), u.current && H(b);
    }
  }
  function D() {
    var b;
    (b = u == null ? void 0 : u.current) == null || b.play(), requestAnimationFrame(x);
  }
  function H(b) {
    var v;
    if (b - T.current > f) {
      T.current = b;
      const A = (v = h.current) == null ? void 0 : v.getContext("2d", {
        willReadFrequently: !0
      });
      if (!A)
        return;
      let O;
      l ? O = A.getImageData(
        N.x0,
        N.y0,
        N.width,
        N.height
      ) : O = A.getImageData(0, 0, m.width, m.height);
      const U = { width: O.width, height: O.height }, K = O.data.buffer.slice(0), X = O.data.buffer.slice(0);
      y == null || y.postMessage(U), c == null || c.postMessage(U), y == null || y.postMessage(O, [K]), c == null || c.postMessage(O, [X]);
    }
  }
  function Q(b) {
    u.current && (u.current.pause(), d || R(b));
  }
  return C ? /* @__PURE__ */ J.jsx("div", { className: "vuleqr__wrapper", children: /* @__PURE__ */ J.jsxs("div", { className: "vuleqr__container", children: [
    /* @__PURE__ */ J.jsx(
      "video",
      {
        className: "vuleqr__video",
        ref: u,
        onCanPlay: D,
        autoPlay: !0,
        playsInline: !0,
        muted: !0
      }
    ),
    /* @__PURE__ */ J.jsx(
      "canvas",
      {
        className: "vuleqr__canvas",
        ref: h,
        width: m.width,
        height: m.height
      }
    )
  ] }) }) : null;
}
function br(_) {
  const l = _.getContext("2d", { willReadFrequently: !0 });
  if (!l)
    return;
  l.fillStyle = "rgba(255,255,255,0.4)";
  const w = new Path2D(N.svg);
  l.fill(w);
}
export {
  _r as VuleQR
};
