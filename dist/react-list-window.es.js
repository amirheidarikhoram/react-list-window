import He, { createContext as qe, useRef as $, useState as G, useContext as be, useMemo as pe, forwardRef as Et, useCallback as ve, useEffect as H, useImperativeHandle as Rt } from "react";
var ge = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Tt() {
  if ($e)
    return Z;
  $e = 1;
  var a = He, s = Symbol.for("react.element"), l = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(R, g, f) {
    var _, E = {}, S = null, D = null;
    f !== void 0 && (S = "" + f), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (D = g.ref);
    for (_ in g)
      p.call(g, _) && !w.hasOwnProperty(_) && (E[_] = g[_]);
    if (R && R.defaultProps)
      for (_ in g = R.defaultProps, g)
        E[_] === void 0 && (E[_] = g[_]);
    return { $$typeof: s, type: R, key: S, ref: D, props: E, _owner: v.current };
  }
  return Z.Fragment = l, Z.jsx = c, Z.jsxs = c, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Ot() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var a = He, s = Symbol.for("react.element"), l = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), R = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), A = Symbol.iterator, k = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = A && e[A] || e[k];
      return typeof n == "function" ? n : null;
    }
    var L = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          o[d - 1] = arguments[d];
        t("error", e, o);
      }
    }
    function t(e, n, o) {
      {
        var d = L.ReactDebugCurrentFrame, y = d.getStackAddendum();
        y !== "" && (n += "%s", o = o.concat([y]));
        var O = o.map(function(b) {
          return String(b);
        });
        O.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, O);
      }
    }
    var r = !1, i = !1, u = !1, h = !1, C = !1, x;
    x = Symbol.for("react.module.reference");
    function P(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === w || C || e === v || e === f || e === _ || h || e === D || r || i || u || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === c || e.$$typeof === R || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === x || e.getModuleId !== void 0));
    }
    function M(e, n, o) {
      var d = e.displayName;
      if (d)
        return d;
      var y = n.displayName || n.name || "";
      return y !== "" ? o + "(" + y + ")" : o;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case l:
          return "Portal";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case f:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var n = e;
            return V(n) + ".Consumer";
          case c:
            var o = e;
            return V(o._context) + ".Provider";
          case g:
            return M(e, e.render, "ForwardRef");
          case E:
            var d = e.displayName || null;
            return d !== null ? d : N(e.type) || "Memo";
          case S: {
            var y = e, O = y._payload, b = y._init;
            try {
              return N(b(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, K = 0, ye, we, Ee, Re, Te, Oe, Se;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (K === 0) {
          ye = console.log, we = console.info, Ee = console.warn, Re = console.error, Te = console.group, Oe = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
        K++;
      }
    }
    function Ze() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: ye
            }),
            info: z({}, e, {
              value: we
            }),
            warn: z({}, e, {
              value: Ee
            }),
            error: z({}, e, {
              value: Re
            }),
            group: z({}, e, {
              value: Te
            }),
            groupCollapsed: z({}, e, {
              value: Oe
            }),
            groupEnd: z({}, e, {
              value: Se
            })
          });
        }
        K < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = L.ReactCurrentDispatcher, se;
    function ee(e, n, o) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (y) {
            var d = y.stack.trim().match(/\n( *(at )?)/);
            se = d && d[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ue = !1, te;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Qe();
    }
    function De(e, n) {
      if (!e || ue)
        return "";
      {
        var o = te.get(e);
        if (o !== void 0)
          return o;
      }
      var d;
      ue = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = ae.current, ae.current = null, Xe();
      try {
        if (n) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (B) {
              d = B;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (B) {
              d = B;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            d = B;
          }
          e();
        }
      } catch (B) {
        if (B && d && typeof B.stack == "string") {
          for (var m = B.stack.split(`
`), F = d.stack.split(`
`), I = m.length - 1, j = F.length - 1; I >= 1 && j >= 0 && m[I] !== F[j]; )
            j--;
          for (; I >= 1 && j >= 0; I--, j--)
            if (m[I] !== F[j]) {
              if (I !== 1 || j !== 1)
                do
                  if (I--, j--, j < 0 || m[I] !== F[j]) {
                    var U = `
` + m[I].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, U), U;
                  }
                while (I >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ae.current = O, Ze(), Error.prepareStackTrace = y;
      }
      var J = e ? e.displayName || e.name : "", Ve = J ? ee(J) : "";
      return typeof e == "function" && te.set(e, Ve), Ve;
    }
    function et(e, n, o) {
      return De(e, !1);
    }
    function tt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function re(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return De(e, tt(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case f:
          return ee("Suspense");
        case _:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return et(e.render);
          case E:
            return re(e.type, n, o);
          case S: {
            var d = e, y = d._payload, O = d._init;
            try {
              return re(O(y), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ie = {}, Ce = L.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var n = e._owner, o = re(e.type, e._source, n ? n.type : null);
        Ce.setExtraStackFrame(o);
      } else
        Ce.setExtraStackFrame(null);
    }
    function rt(e, n, o, d, y) {
      {
        var O = Function.call.bind(ne);
        for (var b in e)
          if (O(e, b)) {
            var m = void 0;
            try {
              if (typeof e[b] != "function") {
                var F = Error((d || "React class") + ": " + o + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              m = e[b](n, b, d, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              m = I;
            }
            m && !(m instanceof Error) && (ie(y), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", o, b, typeof m), ie(null)), m instanceof Error && !(m.message in Ie) && (Ie[m.message] = !0, ie(y), T("Failed %s type: %s", o, m.message), ie(null));
          }
      }
    }
    var nt = Array.isArray;
    function le(e) {
      return nt(e);
    }
    function it(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ot(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function je(e) {
      if (ot(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(e)), Pe(e);
    }
    var X = L.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, ke, ce;
    ce = {};
    function st(e) {
      if (ne.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (ne.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lt(e, n) {
      if (typeof e.ref == "string" && X.current && n && X.current.stateNode !== n) {
        var o = N(X.current.type);
        ce[o] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(X.current.type), e.ref), ce[o] = !0);
      }
    }
    function ct(e, n) {
      {
        var o = function() {
          Ae || (Ae = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function ft(e, n) {
      {
        var o = function() {
          ke || (ke = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var ht = function(e, n, o, d, y, O, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: b,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function dt(e, n, o, d, y) {
      {
        var O, b = {}, m = null, F = null;
        o !== void 0 && (je(o), m = "" + o), ut(n) && (je(n.key), m = "" + n.key), st(n) && (F = n.ref, lt(n, y));
        for (O in n)
          ne.call(n, O) && !at.hasOwnProperty(O) && (b[O] = n[O]);
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (O in I)
            b[O] === void 0 && (b[O] = I[O]);
        }
        if (m || F) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ct(b, j), F && ft(b, j);
        }
        return ht(e, m, F, y, d, X.current, b);
      }
    }
    var fe = L.ReactCurrentOwner, Le = L.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var n = e._owner, o = re(e.type, e._source, n ? n.type : null);
        Le.setExtraStackFrame(o);
      } else
        Le.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Fe() {
      {
        if (fe.current) {
          var e = N(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vt(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + n + ":" + o + ".";
        }
        return "";
      }
    }
    var Me = {};
    function pt(e) {
      {
        var n = Fe();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function We(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = pt(n);
        if (Me[o])
          return;
        Me[o] = !0;
        var d = "";
        e && e._owner && e._owner !== fe.current && (d = " It was passed a child from " + N(e._owner.type) + "."), q(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, d), q(null);
      }
    }
    function Ne(e, n) {
      {
        if (typeof e != "object")
          return;
        if (le(e))
          for (var o = 0; o < e.length; o++) {
            var d = e[o];
            de(d) && We(d, n);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = W(e);
          if (typeof y == "function" && y !== e.entries)
            for (var O = y.call(e), b; !(b = O.next()).done; )
              de(b.value) && We(b.value, n);
        }
      }
    }
    function gt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === E))
          o = n.propTypes;
        else
          return;
        if (o) {
          var d = N(n);
          rt(o, e.props, "prop", d, e);
        } else if (n.PropTypes !== void 0 && !he) {
          he = !0;
          var y = N(n);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var d = n[o];
          if (d !== "children" && d !== "key") {
            q(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function Ue(e, n, o, d, y, O) {
      {
        var b = P(e);
        if (!b) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = vt(y);
          F ? m += F : m += Fe();
          var I;
          e === null ? I = "null" : le(e) ? I = "array" : e !== void 0 && e.$$typeof === s ? (I = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : I = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, m);
        }
        var j = dt(e, n, o, y, O);
        if (j == null)
          return j;
        if (b) {
          var U = n.children;
          if (U !== void 0)
            if (d)
              if (le(U)) {
                for (var J = 0; J < U.length; J++)
                  Ne(U[J], e);
                Object.freeze && Object.freeze(U);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(U, e);
        }
        return e === p ? mt(j) : gt(j), j;
      }
    }
    function bt(e, n, o) {
      return Ue(e, n, o, !0);
    }
    function _t(e, n, o) {
      return Ue(e, n, o, !1);
    }
    var yt = _t, wt = bt;
    Q.Fragment = p, Q.jsx = yt, Q.jsxs = wt;
  }()), Q;
}
process.env.NODE_ENV === "production" ? ge.exports = Tt() : ge.exports = Ot();
var Y = ge.exports;
const St = {
  data: [],
  page: 0,
  pageSize: 0,
  error: null,
  loading: !1,
  lastUpdateAt: 0,
  hasNextPage: !1,
  initialLoadDone: !1,
  handleLoadMore: () => {
  },
  handleReset: () => {
  }
}, _e = qe(St), xt = {
  defaultHeight: 0,
  defaultWidth: 0,
  fixedSize: !1,
  root: void 0,
  orientation: "vertical",
  isSet: !1,
  setDefaultHeight: () => {
  },
  setDefaultWidth: () => {
  },
  setRoot: () => {
  }
}, Je = qe(
  xt
), Dt = ({
  children: a,
  fixedSize: s,
  orientation: l = "vertical"
}) => {
  const p = $(), [v, w] = G({
    defaultHeight: 0,
    defaultWidth: 0,
    isSet: !1
  }), c = (f) => {
    w((_) => ({
      ..._,
      defaultHeight: f,
      isSet: !0
    }));
  }, R = (f) => {
    w((_) => ({
      ..._,
      defaultWidth: f,
      isSet: !0
    }));
  }, g = (f) => {
    p.current = f;
  };
  return /* @__PURE__ */ Y.jsx(
    Je.Provider,
    {
      value: {
        ...v,
        fixedSize: s,
        orientation: l,
        setDefaultHeight: c,
        setDefaultWidth: R,
        setRoot: g
      },
      children: a
    }
  );
};
function Yt({ children: a }) {
  const s = be(_e), l = pe(() => a == null ? void 0 : a(s), [s, a]);
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: l });
}
function It({
  apiFn: a,
  pageSize: s = 10,
  overridePageSize: l = !1,
  children: p,
  orientation: v = "vertical",
  fixedSize: w = !0,
  autoLoad: c = !1
}, R) {
  const g = $(!0), [f, _] = G({
    data: [],
    loading: !0,
    error: null,
    page: 1,
    pageSize: s,
    lastUpdateAt: Date.now(),
    hasNextPage: !0,
    initialLoadDone: !1
  }), E = $(), S = ve((k, W = f.pageSize) => {
    E.current && E.current.abort();
    const L = new AbortController();
    E.current = L, _((T) => ({ ...T, loading: !0 })), a(k, W, L.signal).then((T) => {
      _((t) => ({
        ...t,
        page: k,
        pageSize: W,
        error: null,
        data: [...t.data, ...T.data],
        loading: !1,
        lastUpdateAt: Date.now(),
        hasNextPage: T.hasNextPage,
        initialLoadDone: !0
      }));
    }).catch((T) => {
      _((t) => ({
        ...t,
        pageSize: W,
        error: T,
        loading: !1,
        lastUpdateAt: Date.now(),
        initialLoadDone: !1
      }));
    }).finally(() => {
      E.current = null;
    });
  }, []), D = ve(() => {
    S(f.page + 1, f.pageSize);
  }, [f.page, f.pageSize]), A = ve(
    (k) => {
      _({
        data: [],
        loading: !1,
        error: null,
        page: 1,
        pageSize: k ?? f.pageSize,
        hasNextPage: !1,
        lastUpdateAt: Date.now(),
        initialLoadDone: !1
      }), S(1, k ?? f.pageSize);
    },
    [f.page, f.pageSize]
  );
  return H(() => {
    !g.current && l && f.pageSize !== s && A(s);
  }, [s, f.pageSize, l]), H(() => {
    c && S(0, f.pageSize);
  }, []), Rt(R, () => ({
    reset: A,
    setPageSize: (k) => A(k),
    getData: () => f
  })), /* @__PURE__ */ Y.jsx(
    _e.Provider,
    {
      value: {
        ...f,
        handleLoadMore: D,
        handleReset: A
      },
      children: /* @__PURE__ */ Y.jsx(Dt, { orientation: v, fixedSize: w, children: /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: v === "vertical" ? "column" : "row"
          },
          children: p
        }
      ) })
    }
  );
}
const zt = Et(It);
var oe = function() {
  return oe = Object.assign || function(s) {
    for (var l, p = 1, v = arguments.length; p < v; p++) {
      l = arguments[p];
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (s[w] = l[w]);
    }
    return s;
  }, oe.apply(this, arguments);
};
function Ct(a) {
  var s = typeof Symbol == "function" && Symbol.iterator, l = s && a[s], p = 0;
  if (l)
    return l.call(a);
  if (a && typeof a.length == "number")
    return {
      next: function() {
        return a && p >= a.length && (a = void 0), { value: a && a[p++], done: !a };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ze(a, s) {
  var l = typeof Symbol == "function" && a[Symbol.iterator];
  if (!l)
    return a;
  var p = l.call(a), v, w = [], c;
  try {
    for (; (s === void 0 || s-- > 0) && !(v = p.next()).done; )
      w.push(v.value);
  } catch (R) {
    c = { error: R };
  } finally {
    try {
      v && !v.done && (l = p.return) && l.call(p);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return w;
}
var Ge = function(a) {
  return typeof a == "function";
}, Pt = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
const jt = Pt;
function Be(a, s) {
  if (a === s)
    return !0;
  for (var l = 0; l < a.length; l++)
    if (!Object.is(a[l], s[l]))
      return !1;
  return !0;
}
function At(a) {
  var s = $(a);
  return s.current = a, s;
}
var kt = function(a) {
  jt && (Ge(a) || console.error("useUnmount expected parameter is a function, got ".concat(typeof a)));
  var s = At(a);
  H(function() {
    return function() {
      s.current();
    };
  }, []);
};
const Lt = kt;
var Ft = !!(typeof window < "u" && window.document && window.document.createElement);
const Mt = Ft;
function me(a, s) {
  if (Mt) {
    if (!a)
      return s;
    var l;
    return Ge(a) ? l = a() : "current" in a ? l = a.current : l = a, l;
  }
}
var Wt = function(a) {
  var s = function(l, p, v) {
    var w = $(!1), c = $([]), R = $([]), g = $();
    a(function() {
      var f, _ = Array.isArray(v) ? v : [v], E = _.map(function(S) {
        return me(S);
      });
      if (!w.current) {
        w.current = !0, c.current = E, R.current = p, g.current = l();
        return;
      }
      (E.length !== c.current.length || !Be(E, c.current) || !Be(p, R.current)) && ((f = g.current) === null || f === void 0 || f.call(g), c.current = E, R.current = p, g.current = l());
    }), Lt(function() {
      var f;
      (f = g.current) === null || f === void 0 || f.call(g), w.current = !1;
    });
  };
  return s;
};
const Nt = Wt;
var Ut = Nt(H);
const Vt = Ut;
(function() {
  if (typeof window != "object")
    return;
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(
      window.IntersectionObserverEntry.prototype,
      "isIntersecting",
      {
        get: function() {
          return this.intersectionRatio > 0;
        }
      }
    );
    return;
  }
  function a(t) {
    try {
      return t.defaultView && t.defaultView.frameElement || null;
    } catch {
      return null;
    }
  }
  var s = function(t) {
    for (var r = t, i = a(r); i; )
      r = i.ownerDocument, i = a(r);
    return r;
  }(window.document), l = [], p = null, v = null;
  function w(t) {
    this.time = t.time, this.target = t.target, this.rootBounds = A(t.rootBounds), this.boundingClientRect = A(t.boundingClientRect), this.intersectionRect = A(t.intersectionRect || D()), this.isIntersecting = !!t.intersectionRect;
    var r = this.boundingClientRect, i = r.width * r.height, u = this.intersectionRect, h = u.width * u.height;
    i ? this.intersectionRatio = Number((h / i).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
  function c(t, r) {
    var i = r || {};
    if (typeof t != "function")
      throw new Error("callback must be a function");
    if (i.root && i.root.nodeType != 1 && i.root.nodeType != 9)
      throw new Error("root must be a Document or Element");
    this._checkForIntersections = g(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    ), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function(u) {
      return u.value + u.unit;
    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
  }
  c.prototype.THROTTLE_TIMEOUT = 100, c.prototype.POLL_INTERVAL = null, c.prototype.USE_MUTATION_OBSERVER = !0, c._setupCrossOriginUpdater = function() {
    return p || (p = function(t, r) {
      !t || !r ? v = D() : v = k(t, r), l.forEach(function(i) {
        i._checkForIntersections();
      });
    }), p;
  }, c._resetCrossOriginUpdater = function() {
    p = null, v = null;
  }, c.prototype.observe = function(t) {
    var r = this._observationTargets.some(function(i) {
      return i.element == t;
    });
    if (!r) {
      if (!(t && t.nodeType == 1))
        throw new Error("target must be an Element");
      this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections();
    }
  }, c.prototype.unobserve = function(t) {
    this._observationTargets = this._observationTargets.filter(function(r) {
      return r.element != t;
    }), this._unmonitorIntersections(t.ownerDocument), this._observationTargets.length == 0 && this._unregisterInstance();
  }, c.prototype.disconnect = function() {
    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
  }, c.prototype.takeRecords = function() {
    var t = this._queuedEntries.slice();
    return this._queuedEntries = [], t;
  }, c.prototype._initThresholds = function(t) {
    var r = t || [0];
    return Array.isArray(r) || (r = [r]), r.sort().filter(function(i, u, h) {
      if (typeof i != "number" || isNaN(i) || i < 0 || i > 1)
        throw new Error("threshold must be a number between 0 and 1 inclusively");
      return i !== h[u - 1];
    });
  }, c.prototype._parseRootMargin = function(t) {
    var r = t || "0px", i = r.split(/\s+/).map(function(u) {
      var h = /^(-?\d*\.?\d+)(px|%)$/.exec(u);
      if (!h)
        throw new Error("rootMargin must be specified in pixels or percent");
      return { value: parseFloat(h[1]), unit: h[2] };
    });
    return i[1] = i[1] || i[0], i[2] = i[2] || i[0], i[3] = i[3] || i[1], i;
  }, c.prototype._monitorIntersections = function(t) {
    var r = t.defaultView;
    if (r && this._monitoringDocuments.indexOf(t) == -1) {
      var i = this._checkForIntersections, u = null, h = null;
      this.POLL_INTERVAL ? u = r.setInterval(i, this.POLL_INTERVAL) : (f(r, "resize", i, !0), f(t, "scroll", i, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in r && (h = new r.MutationObserver(i), h.observe(t, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }))), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push(function() {
        var P = t.defaultView;
        P && (u && P.clearInterval(u), _(P, "resize", i, !0)), _(t, "scroll", i, !0), h && h.disconnect();
      });
      var C = this.root && (this.root.ownerDocument || this.root) || s;
      if (t != C) {
        var x = a(t);
        x && this._monitorIntersections(x.ownerDocument);
      }
    }
  }, c.prototype._unmonitorIntersections = function(t) {
    var r = this._monitoringDocuments.indexOf(t);
    if (r != -1) {
      var i = this.root && (this.root.ownerDocument || this.root) || s, u = this._observationTargets.some(function(x) {
        var P = x.element.ownerDocument;
        if (P == t)
          return !0;
        for (; P && P != i; ) {
          var M = a(P);
          if (P = M && M.ownerDocument, P == t)
            return !0;
        }
        return !1;
      });
      if (!u) {
        var h = this._monitoringUnsubscribes[r];
        if (this._monitoringDocuments.splice(r, 1), this._monitoringUnsubscribes.splice(r, 1), h(), t != i) {
          var C = a(t);
          C && this._unmonitorIntersections(C.ownerDocument);
        }
      }
    }
  }, c.prototype._unmonitorAllIntersections = function() {
    var t = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
    for (var r = 0; r < t.length; r++)
      t[r]();
  }, c.prototype._checkForIntersections = function() {
    if (!(!this.root && p && !v)) {
      var t = this._rootIsInDom(), r = t ? this._getRootRect() : D();
      this._observationTargets.forEach(function(i) {
        var u = i.element, h = S(u), C = this._rootContainsTarget(u), x = i.entry, P = t && C && this._computeTargetAndRootIntersection(u, h, r), M = null;
        this._rootContainsTarget(u) ? (!p || this.root) && (M = r) : M = D();
        var V = i.entry = new w({
          time: R(),
          target: u,
          boundingClientRect: h,
          rootBounds: M,
          intersectionRect: P
        });
        x ? t && C ? this._hasCrossedThreshold(x, V) && this._queuedEntries.push(V) : x && x.isIntersecting && this._queuedEntries.push(V) : this._queuedEntries.push(V);
      }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
    }
  }, c.prototype._computeTargetAndRootIntersection = function(t, r, i) {
    if (window.getComputedStyle(t).display != "none") {
      for (var u = r, h = L(t), C = !1; !C && h; ) {
        var x = null, P = h.nodeType == 1 ? window.getComputedStyle(h) : {};
        if (P.display == "none")
          return null;
        if (h == this.root || h.nodeType == /* DOCUMENT */
        9)
          if (C = !0, h == this.root || h == s)
            p && !this.root ? !v || v.width == 0 && v.height == 0 ? (h = null, x = null, u = null) : x = v : x = i;
          else {
            var M = L(h), V = M && S(M), N = M && this._computeTargetAndRootIntersection(M, V, i);
            V && N ? (h = M, x = k(V, N)) : (h = null, u = null);
          }
        else {
          var z = h.ownerDocument;
          h != z.body && h != z.documentElement && P.overflow != "visible" && (x = S(h));
        }
        if (x && (u = E(x, u)), !u)
          break;
        h = h && L(h);
      }
      return u;
    }
  }, c.prototype._getRootRect = function() {
    var t;
    if (this.root && !T(this.root))
      t = S(this.root);
    else {
      var r = T(this.root) ? this.root : s, i = r.documentElement, u = r.body;
      t = {
        top: 0,
        left: 0,
        right: i.clientWidth || u.clientWidth,
        width: i.clientWidth || u.clientWidth,
        bottom: i.clientHeight || u.clientHeight,
        height: i.clientHeight || u.clientHeight
      };
    }
    return this._expandRectByRootMargin(t);
  }, c.prototype._expandRectByRootMargin = function(t) {
    var r = this._rootMarginValues.map(function(u, h) {
      return u.unit == "px" ? u.value : u.value * (h % 2 ? t.width : t.height) / 100;
    }), i = {
      top: t.top - r[0],
      right: t.right + r[1],
      bottom: t.bottom + r[2],
      left: t.left - r[3]
    };
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i;
  }, c.prototype._hasCrossedThreshold = function(t, r) {
    var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, u = r.isIntersecting ? r.intersectionRatio || 0 : -1;
    if (i !== u)
      for (var h = 0; h < this.thresholds.length; h++) {
        var C = this.thresholds[h];
        if (C == i || C == u || C < i != C < u)
          return !0;
      }
  }, c.prototype._rootIsInDom = function() {
    return !this.root || W(s, this.root);
  }, c.prototype._rootContainsTarget = function(t) {
    var r = this.root && (this.root.ownerDocument || this.root) || s;
    return W(r, t) && (!this.root || r == t.ownerDocument);
  }, c.prototype._registerInstance = function() {
    l.indexOf(this) < 0 && l.push(this);
  }, c.prototype._unregisterInstance = function() {
    var t = l.indexOf(this);
    t != -1 && l.splice(t, 1);
  };
  function R() {
    return window.performance && performance.now && performance.now();
  }
  function g(t, r) {
    var i = null;
    return function() {
      i || (i = setTimeout(function() {
        t(), i = null;
      }, r));
    };
  }
  function f(t, r, i, u) {
    typeof t.addEventListener == "function" ? t.addEventListener(r, i, u || !1) : typeof t.attachEvent == "function" && t.attachEvent("on" + r, i);
  }
  function _(t, r, i, u) {
    typeof t.removeEventListener == "function" ? t.removeEventListener(r, i, u || !1) : typeof t.detachEvent == "function" && t.detachEvent("on" + r, i);
  }
  function E(t, r) {
    var i = Math.max(t.top, r.top), u = Math.min(t.bottom, r.bottom), h = Math.max(t.left, r.left), C = Math.min(t.right, r.right), x = C - h, P = u - i;
    return x >= 0 && P >= 0 && {
      top: i,
      bottom: u,
      left: h,
      right: C,
      width: x,
      height: P
    } || null;
  }
  function S(t) {
    var r;
    try {
      r = t.getBoundingClientRect();
    } catch {
    }
    return r ? (r.width && r.height || (r = {
      top: r.top,
      right: r.right,
      bottom: r.bottom,
      left: r.left,
      width: r.right - r.left,
      height: r.bottom - r.top
    }), r) : D();
  }
  function D() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function A(t) {
    return !t || "x" in t ? t : {
      top: t.top,
      y: t.top,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      right: t.right,
      width: t.width,
      height: t.height
    };
  }
  function k(t, r) {
    var i = r.top - t.top, u = r.left - t.left;
    return {
      top: i,
      left: u,
      height: r.height,
      width: r.width,
      bottom: i + r.height,
      right: u + r.width
    };
  }
  function W(t, r) {
    for (var i = r; i; ) {
      if (i == t)
        return !0;
      i = L(i);
    }
    return !1;
  }
  function L(t) {
    var r = t.parentNode;
    return t.nodeType == /* DOCUMENT */
    9 && t != s ? a(t) : (r && r.assignedSlot && (r = r.assignedSlot.parentNode), r && r.nodeType == 11 && r.host ? r.host : r);
  }
  function T(t) {
    return t && t.nodeType === 9;
  }
  window.IntersectionObserver = c, window.IntersectionObserverEntry = w;
})();
function Ke(a, s) {
  var l = ze(G(), 2), p = l[0], v = l[1], w = ze(G(), 2), c = w[0], R = w[1];
  return Vt(function() {
    var g = me(a);
    if (g) {
      var f = new IntersectionObserver(function(_) {
        var E, S;
        try {
          for (var D = Ct(_), A = D.next(); !A.done; A = D.next()) {
            var k = A.value;
            R(k.intersectionRatio), v(k.isIntersecting);
          }
        } catch (W) {
          E = {
            error: W
          };
        } finally {
          try {
            A && !A.done && (S = D.return) && S.call(D);
          } finally {
            if (E)
              throw E.error;
          }
        }
      }, oe(oe({}, s), {
        root: me(s == null ? void 0 : s.root)
      }));
      return f.observe(g), function() {
        f.disconnect();
      };
    }
  }, [s == null ? void 0 : s.rootMargin, s == null ? void 0 : s.threshold], a), [p, c];
}
function Bt({ countEnters: a, onLoadMore: s, loadMore: l = !0, children: p }) {
  const v = $(null), [w, c] = G(0), [R] = Ke(v.current), { handleLoadMore: g, loading: f, initialLoadDone: _, hasNextPage: E } = be(_e);
  return H(() => {
    a && R && c((S) => S + 1), _ && R && l && E && (s ?? g)();
  }, [R]), /* @__PURE__ */ Y.jsx("div", { ref: v, children: p({
    handleLoadMore: g,
    loading: f,
    hasNextPage: E,
    enterCount: w
  }) });
}
function Ht({ children: a, isReference: s }) {
  const l = $(null), p = $(null), [v, w] = G({
    width: 0,
    height: 0,
    isSet: !1
  }), {
    defaultHeight: c,
    defaultWidth: R,
    fixedSize: g,
    orientation: f,
    setDefaultWidth: _,
    setDefaultHeight: E,
    root: S,
    isSet: D
  } = be(Je), [A] = Ke(l.current, {
    root: S,
    rootMargin: "100px"
  }), { width: k, height: W } = pe(() => ({
    width: f === "vertical" ? void 0 : g ? R : v.width,
    height: f === "horizontal" ? void 0 : g ? c : v.height
  }), [f, g, R, c, v]);
  H(() => {
    if (p.current) {
      const { height: T, width: t } = p.current.getBoundingClientRect();
      w({
        width: t,
        height: T,
        isSet: !0
      });
    }
  }, []), H(() => {
    v.isSet && s && !D && (_(v.width), E(v.height));
  }, [v, D]);
  const L = pe(
    () => g && s && !v.isSet && !D || !g && !v.isSet,
    [g, s, v, D]
  );
  return /* @__PURE__ */ Y.jsx(
    "div",
    {
      ref: l,
      style: {
        width: k,
        height: W
      },
      children: /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
        L && /* @__PURE__ */ Y.jsx(
          "div",
          {
            ref: p,
            style: {
              visibility: "hidden",
              zIndex: -1e3,
              display: "flex"
            },
            children: a
          }
        ),
        A && a
      ] })
    }
  );
}
export {
  Yt as Data,
  zt as List,
  Bt as Trigger,
  Ht as Windowed
};
