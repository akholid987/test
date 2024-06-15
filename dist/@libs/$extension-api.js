import * as V from "/@preload/react.js";
import Wn, { useCallback as F, createElement as T, Fragment as Gt, forwardRef as _, Children as ve, isValidElement as We, cloneElement as ft, createContext as Te, useMemo as ce, useContext as pt, useLayoutEffect as Zt, useRef as z, useEffect as L, useState as G, useReducer as Gn, useSyncExternalStore as Zn, useImperativeHandle as Kn, useId as Xn } from "/@preload/react.js";
import { jsx as I, jsxs as ge, Fragment as Yn } from "/@preload/react-runtime.js";
import * as Jn from "/@preload/react-dom.js";
import { flushSync as Kt } from "/@preload/react-dom.js";
var Zc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Kc(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
function Xt(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = Xt(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function er() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = Xt(e)) && (r && (r += " "), r += t);
  return r;
}
const ht = "-";
function tr(e) {
  const t = rr(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function a(i) {
    const c = i.split(ht);
    return c[0] === "" && c.length !== 1 && c.shift(), Yt(c, t) || nr(i);
  }
  function o(i, c) {
    const s = n[i] || [];
    return c && r[i] ? [...s, ...r[i]] : s;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  };
}
function Yt(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? Yt(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const o = e.join(ht);
  return (i = t.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : i.classGroupId;
}
const Ot = /^\[(.+)\]$/;
function nr(e) {
  if (Ot.test(e)) {
    const t = Ot.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function rr(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ar(Object.entries(e.classGroups), n).forEach(([o, i]) => {
    at(i, r, o, t);
  }), r;
}
function at(e, t, n, r) {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : Et(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (or(a)) {
        at(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, i]) => {
      at(i, Et(t, o), n, r);
    });
  });
}
function Et(e, t) {
  let n = e;
  return t.split(ht).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function or(e) {
  return e.isThemeGetter;
}
function ar(e, t) {
  return t ? e.map(([n, r]) => {
    const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, c]) => [t + i, c])) : o);
    return [n, a];
  }) : e;
}
function ir(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(o, i) {
    n.set(o, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let i = n.get(o);
      if (i !== void 0)
        return i;
      if ((i = r.get(o)) !== void 0)
        return a(o, i), i;
    },
    set(o, i) {
      n.has(o) ? n.set(o, i) : a(o, i);
    }
  };
}
const Jt = "!";
function sr(e) {
  const t = e.separator, n = t.length === 1, r = t[0], a = t.length;
  return function(i) {
    const c = [];
    let s = 0, l = 0, u;
    for (let v = 0; v < i.length; v++) {
      let k = i[v];
      if (s === 0) {
        if (k === r && (n || i.slice(v, v + a) === t)) {
          c.push(i.slice(l, v)), l = v + a;
          continue;
        }
        if (k === "/") {
          u = v;
          continue;
        }
      }
      k === "[" ? s++ : k === "]" && s--;
    }
    const d = c.length === 0 ? i : i.substring(l), h = d.startsWith(Jt), p = h ? d.substring(1) : d, y = u && u > l ? u - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: y
    };
  };
}
function cr(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function lr(e) {
  return {
    cache: ir(e.cacheSize),
    splitModifiers: sr(e),
    ...tr(e)
  };
}
const dr = /\s+/;
function ur(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(dr).map((i) => {
    const {
      modifiers: c,
      hasImportantModifier: s,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = n(i);
    let d = r(u ? l.substring(0, u) : l), h = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (d = r(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      h = !1;
    }
    const p = cr(c).join(":");
    return {
      isTailwindClass: !0,
      modifierId: s ? p + Jt : p,
      classGroupId: d,
      originalClassName: i,
      hasPostfixModifier: h
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: c,
      classGroupId: s,
      hasPostfixModifier: l
    } = i, u = c + s;
    return o.has(u) ? !1 : (o.add(u), a(s, l).forEach((d) => o.add(c + d)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function fr() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Qt(t)) && (r && (r += " "), r += n);
  return r;
}
function Qt(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Qt(e[r])) && (n && (n += " "), n += t);
  return n;
}
function pr(e, ...t) {
  let n, r, a, o = i;
  function i(s) {
    const l = t.reduce((u, d) => d(u), e());
    return n = lr(l), r = n.cache.get, a = n.cache.set, o = c, c(s);
  }
  function c(s) {
    const l = r(s);
    if (l)
      return l;
    const u = ur(s, n);
    return a(s, u), u;
  }
  return function() {
    return o(fr.apply(null, arguments));
  };
}
function D(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const en = /^\[(?:([a-z-]+):)?(.+)\]$/i, hr = /^\d+\/\d+$/, yr = /* @__PURE__ */ new Set(["px", "full", "screen"]), mr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ee(e) {
  return fe(e) || yr.has(e) || hr.test(e);
}
function ie(e) {
  return we(e, "length", Sr);
}
function fe(e) {
  return !!e && !Number.isNaN(Number(e));
}
function qe(e) {
  return we(e, "number", fe);
}
function Se(e) {
  return !!e && Number.isInteger(Number(e));
}
function br(e) {
  return e.endsWith("%") && fe(e.slice(0, -1));
}
function P(e) {
  return en.test(e);
}
function se(e) {
  return mr.test(e);
}
const wr = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Mr(e) {
  return we(e, wr, tn);
}
function Cr(e) {
  return we(e, "position", tn);
}
const $r = /* @__PURE__ */ new Set(["image", "url"]);
function Ar(e) {
  return we(e, $r, Er);
}
function Pr(e) {
  return we(e, "", Or);
}
function Oe() {
  return !0;
}
function we(e, t, n) {
  const r = en.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function Sr(e) {
  return gr.test(e) && !vr.test(e);
}
function tn() {
  return !1;
}
function Or(e) {
  return kr.test(e);
}
function Er(e) {
  return xr.test(e);
}
function Tr() {
  const e = D("colors"), t = D("spacing"), n = D("blur"), r = D("brightness"), a = D("borderColor"), o = D("borderRadius"), i = D("borderSpacing"), c = D("borderWidth"), s = D("contrast"), l = D("grayscale"), u = D("hueRotate"), d = D("invert"), h = D("gap"), p = D("gradientColorStops"), y = D("gradientColorStopPositions"), v = D("inset"), k = D("margin"), b = D("opacity"), m = D("padding"), g = D("saturate"), x = D("scale"), w = D("sepia"), M = D("skew"), A = D("space"), $ = D("translate"), R = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", P, t], C = () => [P, t], q = () => ["", ee, ie], E = () => ["auto", fe, P], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], B = () => ["", "0", P], Ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [fe, qe], he = () => [fe, P];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Oe],
      spacing: [ee, ie],
      blur: ["none", "", se, P],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", se, P],
      borderSpacing: C(),
      borderWidth: q(),
      contrast: J(),
      grayscale: B(),
      hueRotate: he(),
      invert: B(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [br, ie],
      inset: O(),
      margin: O(),
      opacity: J(),
      padding: C(),
      saturate: J(),
      scale: J(),
      sepia: B(),
      skew: he(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", P]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [se]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), P]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Se, P]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: B()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: B()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Se, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Oe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Se, P]
        }, P]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Oe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Se, P]
        }, P]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", P]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", P]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...X(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [A]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [P, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [P, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [se]
        }, se]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [P, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [P, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", se, ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Oe]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", fe, qe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ee, P]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", P]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", P]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ee, ie]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ee, P]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", P]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Cr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Mr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ar]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ee, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ee, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: q()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ee, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", se, Pr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Oe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": S()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": S()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", se, P]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", P]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Se, P]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", P]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ee, ie, qe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Lr = /* @__PURE__ */ pr(Tr);
function Ye(...e) {
  return Lr(er(e));
}
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, W.apply(this, arguments);
}
function Ir(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function nn(...e) {
  return (t) => e.forEach(
    (n) => Ir(n, t)
  );
}
function Me(...e) {
  return F(nn(...e), e);
}
const rn = /* @__PURE__ */ _((e, t) => {
  const { children: n, ...r } = e, a = ve.toArray(n), o = a.find(Rr);
  if (o) {
    const i = o.props.children, c = a.map((s) => s === o ? ve.count(i) > 1 ? ve.only(null) : /* @__PURE__ */ We(i) ? i.props.children : null : s);
    return /* @__PURE__ */ T(it, W({}, r, {
      ref: t
    }), /* @__PURE__ */ We(i) ? /* @__PURE__ */ ft(i, void 0, c) : null);
  }
  return /* @__PURE__ */ T(it, W({}, r, {
    ref: t
  }), n);
});
rn.displayName = "Slot";
const it = /* @__PURE__ */ _((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ We(n) ? /* @__PURE__ */ ft(n, {
    ...Dr(r, n.props),
    ref: t ? nn(t, n.ref) : n.ref
  }) : ve.count(n) > 1 ? ve.only(null) : null;
});
it.displayName = "SlotClone";
const on = ({ children: e }) => /* @__PURE__ */ T(Gt, null, e);
function Rr(e) {
  return /* @__PURE__ */ We(e) && e.type === on;
}
function Dr(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...c) => {
      o(...c), a(...c);
    } : a && (n[r] = a) : r === "style" ? n[r] = {
      ...a,
      ...o
    } : r === "className" && (n[r] = [
      a,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function an(e, t = []) {
  let n = [];
  function r(o, i) {
    const c = /* @__PURE__ */ Te(i), s = n.length;
    n = [
      ...n,
      i
    ];
    function l(d) {
      const { scope: h, children: p, ...y } = d, v = (h == null ? void 0 : h[e][s]) || c, k = ce(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ T(v.Provider, {
        value: k
      }, p);
    }
    function u(d, h) {
      const p = (h == null ? void 0 : h[e][s]) || c, y = pt(p);
      if (y)
        return y;
      if (i !== void 0)
        return i;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return l.displayName = o + "Provider", [
      l,
      u
    ];
  }
  const a = () => {
    const o = n.map((i) => /* @__PURE__ */ Te(i));
    return function(c) {
      const s = (c == null ? void 0 : c[e]) || o;
      return ce(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: s
          }
        }),
        [
          c,
          s
        ]
      );
    };
  };
  return a.scopeName = e, [
    r,
    zr(a, ...t)
  ];
}
function zr(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return function(o) {
      const i = r.reduce((c, { useScope: s, scopeName: l }) => {
        const d = s(o)[`__scope${l}`];
        return {
          ...c,
          ...d
        };
      }, {});
      return ce(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const xe = globalThis != null && globalThis.document ? Zt : () => {
}, Hr = V.useId || (() => {
});
let Nr = 0;
function jr(e) {
  const [t, n] = V.useState(Hr());
  return xe(() => {
    e || n(
      (r) => r ?? String(Nr++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Ce(e) {
  const t = z(e);
  return L(() => {
    t.current = e;
  }), ce(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Vr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = _r({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, c = Ce(n), s = F((l) => {
    if (o) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && c(d);
    } else
      a(l);
  }, [
    o,
    e,
    a,
    c
  ]);
  return [
    i,
    s
  ];
}
function _r({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, a = z(r), o = Ce(t);
  return L(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
const qr = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], De = qr.reduce((e, t) => {
  const n = /* @__PURE__ */ _((r, a) => {
    const { asChild: o, ...i } = r, c = o ? rn : t;
    return L(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ T(c, W({}, i, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Fr(e, t) {
  e && Kt(
    () => e.dispatchEvent(t)
  );
}
function Br(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e);
  L(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const st = "dismissableLayer.update", Ur = "dismissableLayer.pointerDownOutside", Wr = "dismissableLayer.focusOutside";
let Tt;
const Gr = /* @__PURE__ */ Te({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zr = /* @__PURE__ */ _((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: c, onDismiss: s, ...l } = e, u = pt(Gr), [d, h] = G(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, y] = G({}), v = Me(
    t,
    ($) => h($)
  ), k = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), m = k.indexOf(b), g = d ? k.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= m, M = Kr(($) => {
    const R = $.target, N = [
      ...u.branches
    ].some(
      (O) => O.contains(R)
    );
    !w || N || (o == null || o($), c == null || c($), $.defaultPrevented || s == null || s());
  }, p), A = Xr(($) => {
    const R = $.target;
    [
      ...u.branches
    ].some(
      (O) => O.contains(R)
    ) || (i == null || i($), c == null || c($), $.defaultPrevented || s == null || s());
  }, p);
  return Br(($) => {
    g === u.layers.size - 1 && (a == null || a($), !$.defaultPrevented && s && ($.preventDefault(), s()));
  }, p), L(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Tt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Lt(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Tt);
      };
  }, [
    d,
    p,
    r,
    u
  ]), L(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Lt());
  }, [
    d,
    u
  ]), L(() => {
    const $ = () => y({});
    return document.addEventListener(st, $), () => document.removeEventListener(st, $);
  }, []), /* @__PURE__ */ T(De.div, W({}, l, {
    ref: v,
    style: {
      pointerEvents: x ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: te(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: te(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: te(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function Kr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e), r = z(!1), a = z(() => {
  });
  return L(() => {
    const o = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          sn(Ur, n, s, {
            discrete: !0
          });
        };
        const s = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = l, t.addEventListener("click", a.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Xr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ce(e), r = z(!1);
  return L(() => {
    const a = (o) => {
      o.target && !r.current && sn(Wr, n, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Lt() {
  const e = new CustomEvent(st);
  document.dispatchEvent(e);
}
function sn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? Fr(a, o) : a.dispatchEvent(o);
}
function Yr(e, t) {
  return Gn((n, r) => {
    const a = t[n][r];
    return a ?? n;
  }, e);
}
const cn = (e) => {
  const { present: t, children: n } = e, r = Jr(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : ve.only(n), o = Me(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ft(a, {
    ref: o
  }) : null;
};
cn.displayName = "Presence";
function Jr(e) {
  const [t, n] = G(), r = z({}), a = z(e), o = z("none"), i = e ? "mounted" : "unmounted", [c, s] = Yr(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return L(() => {
    const l = Fe(r.current);
    o.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), xe(() => {
    const l = r.current, u = a.current;
    if (u !== e) {
      const h = o.current, p = Fe(l);
      e ? s("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? s("UNMOUNT") : s(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    s
  ]), xe(() => {
    if (t) {
      const l = (d) => {
        const p = Fe(r.current).includes(d.animationName);
        d.target === t && p && Kt(
          () => s("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (o.current = Fe(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: F((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Fe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
var Qr = _(({ alt: e, fallbackSrc: t, ...n }, r) => {
  let a = z(!1);
  return I("img", { ...n, ref: r, alt: e, onError: (o) => {
    var i;
    (i = n.onError) == null || i.call(n, o), !(!t || a.current) && (a.current = !0, o.target.src = t);
  } });
});
Qr.displayName = "UiImage";
const eo = ["top", "right", "bottom", "left"], le = Math.min, Z = Math.max, Ge = Math.round, Be = Math.floor, de = (e) => ({
  x: e,
  y: e
}), to = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, no = {
  start: "end",
  end: "start"
};
function ct(e, t, n) {
  return Z(e, le(t, n));
}
function ne(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function re(e) {
  return e.split("-")[0];
}
function $e(e) {
  return e.split("-")[1];
}
function yt(e) {
  return e === "x" ? "y" : "x";
}
function mt(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(re(e)) ? "y" : "x";
}
function gt(e) {
  return yt(Ae(e));
}
function ro(e, t, n) {
  n === void 0 && (n = !1);
  const r = $e(e), a = gt(e), o = mt(a);
  let i = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = Ze(i)), [i, Ze(i)];
}
function oo(e) {
  const t = Ze(e);
  return [lt(e), t, lt(t)];
}
function lt(e) {
  return e.replace(/start|end/g, (t) => no[t]);
}
function ao(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? o : i;
    default:
      return [];
  }
}
function io(e, t, n, r) {
  const a = $e(e);
  let o = ao(re(e), n === "start", r);
  return a && (o = o.map((i) => i + "-" + a), t && (o = o.concat(o.map(lt)))), o;
}
function Ze(e) {
  return e.replace(/left|right|bottom|top/g, (t) => to[t]);
}
function so(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ln(e) {
  return typeof e != "number" ? so(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ke(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function It(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = Ae(t), i = gt(t), c = mt(i), s = re(t), l = o === "y", u = r.x + r.width / 2 - a.width / 2, d = r.y + r.height / 2 - a.height / 2, h = r[c] / 2 - a[c] / 2;
  let p;
  switch (s) {
    case "top":
      p = {
        x: u,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch ($e(t)) {
    case "start":
      p[i] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[i] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const co = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: i
  } = n, c = o.filter(Boolean), s = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: d
  } = It(l, r, s), h = r, p = {}, y = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: k,
      fn: b
    } = c[v], {
      x: m,
      y: g,
      data: x,
      reset: w
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: a,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = m ?? u, d = g ?? d, p = {
      ...p,
      [k]: {
        ...p[k],
        ...x
      }
    }, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : w.rects), {
      x: u,
      y: d
    } = It(l, h, s)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: a,
    middlewareData: p
  };
};
async function Le(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: i,
    elements: c,
    strategy: s
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = ne(t, e), y = ln(p), k = c[h ? d === "floating" ? "reference" : "floating" : d], b = Ke(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(k))) == null || n ? k : k.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: s
  })), m = d === "floating" ? {
    ...i.floating,
    x: r,
    y: a
  } : i.reference, g = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), x = await (o.isElement == null ? void 0 : o.isElement(g)) ? await (o.getScale == null ? void 0 : o.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ke(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: m,
    offsetParent: g,
    strategy: s
  }) : m);
  return {
    top: (b.top - w.top + y.top) / x.y,
    bottom: (w.bottom - b.bottom + y.bottom) / x.y,
    left: (b.left - w.left + y.left) / x.x,
    right: (w.right - b.right + y.right) / x.x
  };
}
const lo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: o,
      platform: i,
      elements: c,
      middlewareData: s
    } = t, {
      element: l,
      padding: u = 0
    } = ne(e, t) || {};
    if (l == null)
      return {};
    const d = ln(u), h = {
      x: n,
      y: r
    }, p = gt(a), y = mt(p), v = await i.getDimensions(l), k = p === "y", b = k ? "top" : "left", m = k ? "bottom" : "right", g = k ? "clientHeight" : "clientWidth", x = o.reference[y] + o.reference[p] - h[p] - o.floating[y], w = h[p] - o.reference[p], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let A = M ? M[g] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(M))) && (A = c.floating[g] || o.floating[y]);
    const $ = x / 2 - w / 2, R = A / 2 - v[y] / 2 - 1, N = le(d[b], R), O = le(d[m], R), C = N, q = A - v[y] - O, E = A / 2 - v[y] / 2 + $, H = ct(C, E, q), j = !s.arrow && $e(a) != null && E !== H && o.reference[y] / 2 - (E < C ? N : O) - v[y] / 2 < 0, S = j ? E < C ? E - C : E - q : 0;
    return {
      [p]: h[p] + S,
      data: {
        [p]: H,
        centerOffset: E - H - S,
        ...j && {
          alignmentOffset: S
        }
      },
      reset: j
    };
  }
}), uo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: o,
        rects: i,
        initialPlacement: c,
        platform: s,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: v = !0,
        ...k
      } = ne(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const b = re(a), m = re(c) === c, g = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), x = h || (m || !v ? [Ze(c)] : oo(c));
      !h && y !== "none" && x.push(...io(c, v, y, g));
      const w = [c, ...x], M = await Le(t, k), A = [];
      let $ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (u && A.push(M[b]), d) {
        const C = ro(a, i, g);
        A.push(M[C[0]], M[C[1]]);
      }
      if ($ = [...$, {
        placement: a,
        overflows: A
      }], !A.every((C) => C <= 0)) {
        var R, N;
        const C = (((R = o.flip) == null ? void 0 : R.index) || 0) + 1, q = w[C];
        if (q)
          return {
            data: {
              index: C,
              overflows: $
            },
            reset: {
              placement: q
            }
          };
        let E = (N = $.filter((H) => H.overflows[0] <= 0).sort((H, j) => H.overflows[1] - j.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!E)
          switch (p) {
            case "bestFit": {
              var O;
              const H = (O = $.map((j) => [j.placement, j.overflows.filter((S) => S > 0).reduce((S, X) => S + X, 0)]).sort((j, S) => j[1] - S[1])[0]) == null ? void 0 : O[0];
              H && (E = H);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (a !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function Rt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dt(e) {
  return eo.some((t) => e[t] >= 0);
}
const fo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = ne(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Le(t, {
            ...a,
            elementContext: "reference"
          }), i = Rt(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Dt(i)
            }
          };
        }
        case "escaped": {
          const o = await Le(t, {
            ...a,
            altBoundary: !0
          }), i = Rt(o, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Dt(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function po(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), i = re(n), c = $e(n), s = Ae(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = o && s ? -1 : 1, d = ne(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof y == "number" && (p = c === "end" ? y * -1 : y), s ? {
    x: p * u,
    y: h * l
  } : {
    x: h * l,
    y: p * u
  };
}
const ho = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: o,
        placement: i,
        middlewareData: c
      } = t, s = await po(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: a + s.x,
        y: o + s.y,
        data: {
          ...s,
          placement: i
        }
      };
    }
  };
}, yo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: o = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (k) => {
            let {
              x: b,
              y: m
            } = k;
            return {
              x: b,
              y: m
            };
          }
        },
        ...s
      } = ne(e, t), l = {
        x: n,
        y: r
      }, u = await Le(t, s), d = Ae(re(a)), h = yt(d);
      let p = l[h], y = l[d];
      if (o) {
        const k = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", m = p + u[k], g = p - u[b];
        p = ct(m, p, g);
      }
      if (i) {
        const k = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", m = y + u[k], g = y - u[b];
        y = ct(m, y, g);
      }
      const v = c.fn({
        ...t,
        [h]: p,
        [d]: y
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, mo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: o,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: s = !0,
        crossAxis: l = !0
      } = ne(e, t), u = {
        x: n,
        y: r
      }, d = Ae(a), h = yt(d);
      let p = u[h], y = u[d];
      const v = ne(c, t), k = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (s) {
        const g = h === "y" ? "height" : "width", x = o.reference[h] - o.floating[g] + k.mainAxis, w = o.reference[h] + o.reference[g] - k.mainAxis;
        p < x ? p = x : p > w && (p = w);
      }
      if (l) {
        var b, m;
        const g = h === "y" ? "width" : "height", x = ["top", "left"].includes(re(a)), w = o.reference[d] - o.floating[g] + (x && ((b = i.offset) == null ? void 0 : b[d]) || 0) + (x ? 0 : k.crossAxis), M = o.reference[d] + o.reference[g] + (x ? 0 : ((m = i.offset) == null ? void 0 : m[d]) || 0) - (x ? k.crossAxis : 0);
        y < w ? y = w : y > M && (y = M);
      }
      return {
        [h]: p,
        [d]: y
      };
    }
  };
}, go = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: a,
        elements: o
      } = t, {
        apply: i = () => {
        },
        ...c
      } = ne(e, t), s = await Le(t, c), l = re(n), u = $e(n), d = Ae(n) === "y", {
        width: h,
        height: p
      } = r.floating;
      let y, v;
      l === "top" || l === "bottom" ? (y = l, v = u === (await (a.isRTL == null ? void 0 : a.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (v = l, y = u === "end" ? "top" : "bottom");
      const k = p - s[y], b = h - s[v], m = !t.middlewareData.shift;
      let g = k, x = b;
      if (d) {
        const M = h - s.left - s.right;
        x = u || m ? le(b, M) : M;
      } else {
        const M = p - s.top - s.bottom;
        g = u || m ? le(k, M) : M;
      }
      if (m && !u) {
        const M = Z(s.left, 0), A = Z(s.right, 0), $ = Z(s.top, 0), R = Z(s.bottom, 0);
        d ? x = h - 2 * (M !== 0 || A !== 0 ? M + A : Z(s.left, s.right)) : g = p - 2 * ($ !== 0 || R !== 0 ? $ + R : Z(s.top, s.bottom));
      }
      await i({
        ...t,
        availableWidth: x,
        availableHeight: g
      });
      const w = await a.getDimensions(o.floating);
      return h !== w.width || p !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ue(e) {
  return dn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (dn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dn(e) {
  return e instanceof Node || e instanceof K(e).Node;
}
function oe(e) {
  return e instanceof Element || e instanceof K(e).Element;
}
function Q(e) {
  return e instanceof HTMLElement || e instanceof K(e).HTMLElement;
}
function zt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
function ze(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function vo(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function vt(e) {
  const t = kt(), n = Y(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ko(e) {
  let t = be(e);
  for (; Q(t) && !Je(t); ) {
    if (vt(t))
      return t;
    t = be(t);
  }
  return null;
}
function kt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Je(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
function Y(e) {
  return K(e).getComputedStyle(e);
}
function Qe(e) {
  return oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function be(e) {
  if (ue(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zt(e) && e.host || // Fallback.
    ae(e)
  );
  return zt(t) ? t.host : t;
}
function un(e) {
  const t = be(e);
  return Je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Q(t) && ze(t) ? t : un(t);
}
function Ie(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = un(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = K(a);
  return o ? t.concat(i, i.visualViewport || [], ze(a) ? a : [], i.frameElement && n ? Ie(i.frameElement) : []) : t.concat(a, Ie(a, [], n));
}
function fn(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Q(e), o = a ? e.offsetWidth : n, i = a ? e.offsetHeight : r, c = Ge(n) !== o || Ge(r) !== i;
  return c && (n = o, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function xt(e) {
  return oe(e) ? e : e.contextElement;
}
function ke(e) {
  const t = xt(e);
  if (!Q(t))
    return de(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = fn(t);
  let i = (o ? Ge(n.width) : n.width) / r, c = (o ? Ge(n.height) : n.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const xo = /* @__PURE__ */ de(0);
function pn(e) {
  const t = K(e);
  return !kt() || !t.visualViewport ? xo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== K(e) ? !1 : t;
}
function pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = xt(e);
  let i = de(1);
  t && (r ? oe(r) && (i = ke(r)) : i = ke(e));
  const c = bo(o, n, r) ? pn(o) : de(0);
  let s = (a.left + c.x) / i.x, l = (a.top + c.y) / i.y, u = a.width / i.x, d = a.height / i.y;
  if (o) {
    const h = K(o), p = r && oe(r) ? K(r) : r;
    let y = h, v = y.frameElement;
    for (; v && r && p !== y; ) {
      const k = ke(v), b = v.getBoundingClientRect(), m = Y(v), g = b.left + (v.clientLeft + parseFloat(m.paddingLeft)) * k.x, x = b.top + (v.clientTop + parseFloat(m.paddingTop)) * k.y;
      s *= k.x, l *= k.y, u *= k.x, d *= k.y, s += g, l += x, y = K(v), v = y.frameElement;
    }
  }
  return Ke({
    width: u,
    height: d,
    x: s,
    y: l
  });
}
const wo = [":popover-open", ":modal"];
function hn(e) {
  return wo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Mo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", i = ae(r), c = t ? hn(t.floating) : !1;
  if (r === i || c && o)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = de(1);
  const u = de(0), d = Q(r);
  if ((d || !d && !o) && ((ue(r) !== "body" || ze(i)) && (s = Qe(r)), Q(r))) {
    const h = pe(r);
    l = ke(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - s.scrollLeft * l.x + u.x,
    y: n.y * l.y - s.scrollTop * l.y + u.y
  };
}
function Co(e) {
  return Array.from(e.getClientRects());
}
function yn(e) {
  return pe(ae(e)).left + Qe(e).scrollLeft;
}
function $o(e) {
  const t = ae(e), n = Qe(e), r = e.ownerDocument.body, a = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + yn(e);
  const c = -n.scrollTop;
  return Y(r).direction === "rtl" && (i += Z(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: c
  };
}
function Ao(e, t) {
  const n = K(e), r = ae(e), a = n.visualViewport;
  let o = r.clientWidth, i = r.clientHeight, c = 0, s = 0;
  if (a) {
    o = a.width, i = a.height;
    const l = kt();
    (!l || l && t === "fixed") && (c = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: c,
    y: s
  };
}
function Po(e, t) {
  const n = pe(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = Q(e) ? ke(e) : de(1), i = e.clientWidth * o.x, c = e.clientHeight * o.y, s = a * o.x, l = r * o.y;
  return {
    width: i,
    height: c,
    x: s,
    y: l
  };
}
function Ht(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ao(e, n);
  else if (t === "document")
    r = $o(ae(e));
  else if (oe(t))
    r = Po(t, n);
  else {
    const a = pn(e);
    r = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Ke(r);
}
function mn(e, t) {
  const n = be(e);
  return n === t || !oe(n) || Je(n) ? !1 : Y(n).position === "fixed" || mn(n, t);
}
function So(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ie(e, [], !1).filter((c) => oe(c) && ue(c) !== "body"), a = null;
  const o = Y(e).position === "fixed";
  let i = o ? be(e) : e;
  for (; oe(i) && !Je(i); ) {
    const c = Y(i), s = vt(i);
    !s && c.position === "fixed" && (a = null), (o ? !s && !a : !s && c.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ze(i) && !s && mn(e, i)) ? r = r.filter((u) => u !== i) : a = c, i = be(i);
  }
  return t.set(e, r), r;
}
function Oo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const i = [...n === "clippingAncestors" ? So(t, this._c) : [].concat(n), r], c = i[0], s = i.reduce((l, u) => {
    const d = Ht(t, u, a);
    return l.top = Z(d.top, l.top), l.right = le(d.right, l.right), l.bottom = le(d.bottom, l.bottom), l.left = Z(d.left, l.left), l;
  }, Ht(t, c, a));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Eo(e) {
  const {
    width: t,
    height: n
  } = fn(e);
  return {
    width: t,
    height: n
  };
}
function To(e, t, n) {
  const r = Q(t), a = ae(t), o = n === "fixed", i = pe(e, !0, o, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = de(0);
  if (r || !r && !o)
    if ((ue(t) !== "body" || ze(a)) && (c = Qe(t)), r) {
      const d = pe(t, !0, o, t);
      s.x = d.x + t.clientLeft, s.y = d.y + t.clientTop;
    } else
      a && (s.x = yn(a));
  const l = i.left + c.scrollLeft - s.x, u = i.top + c.scrollTop - s.y;
  return {
    x: l,
    y: u,
    width: i.width,
    height: i.height
  };
}
function Nt(e, t) {
  return !Q(e) || Y(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function gn(e, t) {
  const n = K(e);
  if (!Q(e) || hn(e))
    return n;
  let r = Nt(e, t);
  for (; r && vo(r) && Y(r).position === "static"; )
    r = Nt(r, t);
  return r && (ue(r) === "html" || ue(r) === "body" && Y(r).position === "static" && !vt(r)) ? n : r || ko(e) || n;
}
const Lo = async function(e) {
  const t = this.getOffsetParent || gn, n = this.getDimensions;
  return {
    reference: To(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Io(e) {
  return Y(e).direction === "rtl";
}
const Ro = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mo,
  getDocumentElement: ae,
  getClippingRect: Oo,
  getOffsetParent: gn,
  getElementRects: Lo,
  getClientRects: Co,
  getDimensions: Eo,
  getScale: ke,
  isElement: oe,
  isRTL: Io
};
function Do(e, t) {
  let n = null, r;
  const a = ae(e);
  function o() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, s) {
    c === void 0 && (c = !1), s === void 0 && (s = 1), o();
    const {
      left: l,
      top: u,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !d || !h)
      return;
    const p = Be(u), y = Be(a.clientWidth - (l + d)), v = Be(a.clientHeight - (u + h)), k = Be(l), m = {
      rootMargin: -p + "px " + -y + "px " + -v + "px " + -k + "px",
      threshold: Z(0, le(1, s)) || 1
    };
    let g = !0;
    function x(w) {
      const M = w[0].intersectionRatio;
      if (M !== s) {
        if (!g)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...m,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, m);
    }
    n.observe(e);
  }
  return i(!0), o;
}
function zo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, l = xt(e), u = a || o ? [...l ? Ie(l) : [], ...Ie(t)] : [];
  u.forEach((b) => {
    a && b.addEventListener("scroll", n, {
      passive: !0
    }), o && b.addEventListener("resize", n);
  });
  const d = l && c ? Do(l, n) : null;
  let h = -1, p = null;
  i && (p = new ResizeObserver((b) => {
    let [m] = b;
    m && m.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var g;
      (g = p) == null || g.observe(t);
    })), n();
  }), l && !s && p.observe(l), p.observe(t));
  let y, v = s ? pe(e) : null;
  s && k();
  function k() {
    const b = pe(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, y = requestAnimationFrame(k);
  }
  return n(), () => {
    var b;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", n), o && m.removeEventListener("resize", n);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, s && cancelAnimationFrame(y);
  };
}
const Ho = yo, No = uo, jo = go, Vo = fo, jt = lo, _o = mo, qo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: Ro,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return co(e, t, {
    ...a,
    platform: o
  });
}, Fo = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? jt({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? jt({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
};
var Ue = typeof document < "u" ? Zt : L;
function Xe(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Xe(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = a[r];
      if (!(o === "_owner" && e.$$typeof) && !Xe(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vt(e, t) {
  const n = vn(e);
  return Math.round(t * n) / n;
}
function _t(e) {
  const t = V.useRef(e);
  return Ue(() => {
    t.current = e;
  }), t;
}
function Bo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: s,
    open: l
  } = e, [u, d] = V.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = V.useState(r);
  Xe(h, r) || p(r);
  const [y, v] = V.useState(null), [k, b] = V.useState(null), m = V.useCallback((S) => {
    S !== M.current && (M.current = S, v(S));
  }, []), g = V.useCallback((S) => {
    S !== A.current && (A.current = S, b(S));
  }, []), x = o || y, w = i || k, M = V.useRef(null), A = V.useRef(null), $ = V.useRef(u), R = s != null, N = _t(s), O = _t(a), C = V.useCallback(() => {
    if (!M.current || !A.current)
      return;
    const S = {
      placement: t,
      strategy: n,
      middleware: h
    };
    O.current && (S.platform = O.current), qo(M.current, A.current, S).then((X) => {
      const B = {
        ...X,
        isPositioned: !0
      };
      q.current && !Xe($.current, B) && ($.current = B, Jn.flushSync(() => {
        d(B);
      }));
    });
  }, [h, t, n, O]);
  Ue(() => {
    l === !1 && $.current.isPositioned && ($.current.isPositioned = !1, d((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [l]);
  const q = V.useRef(!1);
  Ue(() => (q.current = !0, () => {
    q.current = !1;
  }), []), Ue(() => {
    if (x && (M.current = x), w && (A.current = w), x && w) {
      if (N.current)
        return N.current(x, w, C);
      C();
    }
  }, [x, w, C, N, R]);
  const E = V.useMemo(() => ({
    reference: M,
    floating: A,
    setReference: m,
    setFloating: g
  }), [m, g]), H = V.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), j = V.useMemo(() => {
    const S = {
      position: n,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return S;
    const X = Vt(H.floating, u.x), B = Vt(H.floating, u.y);
    return c ? {
      ...S,
      transform: "translate(" + X + "px, " + B + "px)",
      ...vn(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: X,
      top: B
    };
  }, [n, c, H.floating, u.x, u.y]);
  return V.useMemo(() => ({
    ...u,
    update: C,
    refs: E,
    elements: H,
    floatingStyles: j
  }), [u, C, E, H, j]);
}
function Uo(e) {
  const [t, n] = G(void 0);
  return xe(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let i, c;
        if ("borderBoxSize" in o) {
          const s = o.borderBoxSize, l = Array.isArray(s) ? s[0] : s;
          i = l.inlineSize, c = l.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        n({
          width: i,
          height: c
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const kn = "Popper", [xn, bn] = an(kn), [Wo, wn] = xn(kn), Go = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = G(null);
  return /* @__PURE__ */ T(Wo, {
    scope: t,
    anchor: r,
    onAnchorChange: a
  }, n);
}, Zo = "PopperAnchor", Ko = /* @__PURE__ */ _((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...a } = e, o = wn(Zo, n), i = z(null), c = Me(t, i);
  return L(() => {
    o.onAnchorChange((r == null ? void 0 : r.current) || i.current);
  }), r ? null : /* @__PURE__ */ T(De.div, W({}, a, {
    ref: c
  }));
}), Mn = "PopperContent", [Xo, Xc] = xn(Mn), Yo = /* @__PURE__ */ _((e, t) => {
  var n, r, a, o, i, c, s, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: h = 0, align: p = "center", alignOffset: y = 0, arrowPadding: v = 0, avoidCollisions: k = !0, collisionBoundary: b = [], collisionPadding: m = 0, sticky: g = "partial", hideWhenDetached: x = !1, updatePositionStrategy: w = "optimized", onPlaced: M, ...A } = e, $ = wn(Mn, u), [R, N] = G(null), O = Me(
    t,
    (Pe) => N(Pe)
  ), [C, q] = G(null), E = Uo(C), H = (n = E == null ? void 0 : E.width) !== null && n !== void 0 ? n : 0, j = (r = E == null ? void 0 : E.height) !== null && r !== void 0 ? r : 0, S = d + (p !== "center" ? "-" + p : ""), X = typeof m == "number" ? m : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...m
  }, B = Array.isArray(b) ? b : [
    b
  ], Ne = B.length > 0, J = {
    padding: X,
    boundary: B.filter(Jo),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Ne
  }, { refs: he, floatingStyles: At, placement: Dn, isPositioned: je, middlewareData: ye } = Bo({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: S,
    whileElementsMounted: (...Pe) => zo(...Pe, {
      animationFrame: w === "always"
    }),
    elements: {
      reference: $.anchor
    },
    middleware: [
      ho({
        mainAxis: h + j,
        alignmentAxis: y
      }),
      k && Ho({
        mainAxis: !0,
        crossAxis: !1,
        limiter: g === "partial" ? _o() : void 0,
        ...J
      }),
      k && No({
        ...J
      }),
      jo({
        ...J,
        apply: ({ elements: Pe, rects: St, availableWidth: qn, availableHeight: Fn }) => {
          const { width: Bn, height: Un } = St.reference, _e = Pe.floating.style;
          _e.setProperty("--radix-popper-available-width", `${qn}px`), _e.setProperty("--radix-popper-available-height", `${Fn}px`), _e.setProperty("--radix-popper-anchor-width", `${Bn}px`), _e.setProperty("--radix-popper-anchor-height", `${Un}px`);
        }
      }),
      C && Fo({
        element: C,
        padding: v
      }),
      Qo({
        arrowWidth: H,
        arrowHeight: j
      }),
      x && Vo({
        strategy: "referenceHidden",
        ...J
      })
    ]
  }), [Pt, zn] = Cn(Dn), Ve = Ce(M);
  xe(() => {
    je && (Ve == null || Ve());
  }, [
    je,
    Ve
  ]);
  const Hn = (a = ye.arrow) === null || a === void 0 ? void 0 : a.x, Nn = (o = ye.arrow) === null || o === void 0 ? void 0 : o.y, jn = ((i = ye.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [Vn, _n] = G();
  return xe(() => {
    R && _n(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ T("div", {
    ref: he.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...At,
      transform: je ? At.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Vn,
      "--radix-popper-transform-origin": [
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (s = ye.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ T(Xo, {
    scope: u,
    placedSide: Pt,
    onArrowChange: q,
    arrowX: Hn,
    arrowY: Nn,
    shouldHideArrow: jn
  }, /* @__PURE__ */ T(De.div, W({
    "data-side": Pt,
    "data-align": zn
  }, A, {
    ref: O,
    style: {
      ...A.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: je ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Jo(e) {
  return e !== null;
}
const Qo = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, a, o, i;
    const { placement: c, rects: s, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, h = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [y, v] = Cn(c), k = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && r !== void 0 ? r : 0) + h / 2, m = ((o = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && o !== void 0 ? o : 0) + p / 2;
    let g = "", x = "";
    return y === "bottom" ? (g = d ? k : `${b}px`, x = `${-p}px`) : y === "top" ? (g = d ? k : `${b}px`, x = `${s.floating.height + p}px`) : y === "right" ? (g = `${-p}px`, x = d ? k : `${m}px`) : y === "left" && (g = `${s.floating.width + p}px`, x = d ? k : `${m}px`), {
      data: {
        x: g,
        y: x
      }
    };
  }
});
function Cn(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const ea = Go, ta = Ko, na = Yo, ra = /* @__PURE__ */ _((e, t) => /* @__PURE__ */ T(De.span, W({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), oa = ra, [et, Yc] = an("Tooltip", [
  bn
]), bt = bn(), aa = "TooltipProvider", ia = 700, dt = "tooltip.open", [sa, wt] = et(aa), ca = (e) => {
  const { __scopeTooltip: t, delayDuration: n = ia, skipDelayDuration: r = 300, disableHoverableContent: a = !1, children: o } = e, [i, c] = G(!0), s = z(!1), l = z(0);
  return L(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ T(sa, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: F(() => {
      window.clearTimeout(l.current), c(!1);
    }, []),
    onClose: F(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => c(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: s,
    onPointerInTransitChange: F((u) => {
      s.current = u;
    }, []),
    disableHoverableContent: a
  }, o);
}, Mt = "Tooltip", [la, tt] = et(Mt), da = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: a = !1, onOpenChange: o, disableHoverableContent: i, delayDuration: c } = e, s = wt(Mt, e.__scopeTooltip), l = bt(t), [u, d] = G(null), h = jr(), p = z(0), y = i ?? s.disableHoverableContent, v = c ?? s.delayDuration, k = z(!1), [b = !1, m] = Vr({
    prop: r,
    defaultProp: a,
    onChange: (A) => {
      A ? (s.onOpen(), document.dispatchEvent(new CustomEvent(dt))) : s.onClose(), o == null || o(A);
    }
  }), g = ce(() => b ? k.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), x = F(() => {
    window.clearTimeout(p.current), k.current = !1, m(!0);
  }, [
    m
  ]), w = F(() => {
    window.clearTimeout(p.current), m(!1);
  }, [
    m
  ]), M = F(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      k.current = !0, m(!0);
    }, v);
  }, [
    v,
    m
  ]);
  return L(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ T(ea, l, /* @__PURE__ */ T(la, {
    scope: t,
    contentId: h,
    open: b,
    stateAttribute: g,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: F(() => {
      s.isOpenDelayed ? M() : x();
    }, [
      s.isOpenDelayed,
      M,
      x
    ]),
    onTriggerLeave: F(() => {
      y ? w() : window.clearTimeout(p.current);
    }, [
      w,
      y
    ]),
    onOpen: x,
    onClose: w,
    disableHoverableContent: y
  }, n));
}, qt = "TooltipTrigger", ua = /* @__PURE__ */ _((e, t) => {
  const { __scopeTooltip: n, ...r } = e, a = tt(qt, n), o = wt(qt, n), i = bt(n), c = z(null), s = Me(t, c, a.onTriggerChange), l = z(!1), u = z(!1), d = F(
    () => l.current = !1,
    []
  );
  return L(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ T(ta, W({
    asChild: !0
  }, i), /* @__PURE__ */ T(De.button, W({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": a.open ? a.contentId : void 0,
    "data-state": a.stateAttribute
  }, r, {
    ref: s,
    onPointerMove: te(e.onPointerMove, (h) => {
      h.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: te(e.onPointerLeave, () => {
      a.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: te(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: te(e.onFocus, () => {
      l.current || a.onOpen();
    }),
    onBlur: te(e.onBlur, a.onClose),
    onClick: te(e.onClick, a.onClose)
  })));
}), fa = "TooltipPortal", [Jc, pa] = et(fa, {
  forceMount: void 0
}), Re = "TooltipContent", ha = /* @__PURE__ */ _((e, t) => {
  const n = pa(Re, e.__scopeTooltip), { forceMount: r = n.forceMount, side: a = "top", ...o } = e, i = tt(Re, e.__scopeTooltip);
  return /* @__PURE__ */ T(cn, {
    present: r || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ T($n, W({
    side: a
  }, o, {
    ref: t
  })) : /* @__PURE__ */ T(ya, W({
    side: a
  }, o, {
    ref: t
  })));
}), ya = /* @__PURE__ */ _((e, t) => {
  const n = tt(Re, e.__scopeTooltip), r = wt(Re, e.__scopeTooltip), a = z(null), o = Me(t, a), [i, c] = G(null), { trigger: s, onClose: l } = n, u = a.current, { onPointerInTransitChange: d } = r, h = F(() => {
    c(null), d(!1);
  }, [
    d
  ]), p = F((y, v) => {
    const k = y.currentTarget, b = {
      x: y.clientX,
      y: y.clientY
    }, m = ga(b, k.getBoundingClientRect()), g = va(b, m), x = ka(v.getBoundingClientRect()), w = ba([
      ...g,
      ...x
    ]);
    c(w), d(!0);
  }, [
    d
  ]);
  return L(() => () => h(), [
    h
  ]), L(() => {
    if (s && u) {
      const y = (k) => p(k, u), v = (k) => p(k, s);
      return s.addEventListener("pointerleave", y), u.addEventListener("pointerleave", v), () => {
        s.removeEventListener("pointerleave", y), u.removeEventListener("pointerleave", v);
      };
    }
  }, [
    s,
    u,
    p,
    h
  ]), L(() => {
    if (i) {
      const y = (v) => {
        const k = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, m = (s == null ? void 0 : s.contains(k)) || (u == null ? void 0 : u.contains(k)), g = !xa(b, i);
        m ? h() : g && (h(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [
    s,
    u,
    i,
    l,
    h
  ]), /* @__PURE__ */ T($n, W({}, e, {
    ref: o
  }));
}), [ma, Qc] = et(Mt, {
  isInside: !1
}), $n = /* @__PURE__ */ _((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: i, ...c } = e, s = tt(Re, n), l = bt(n), { onClose: u } = s;
  return L(() => (document.addEventListener(dt, u), () => document.removeEventListener(dt, u)), [
    u
  ]), L(() => {
    if (s.trigger) {
      const d = (h) => {
        const p = h.target;
        p != null && p.contains(s.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    s.trigger,
    u
  ]), /* @__PURE__ */ T(Zr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: o,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ T(na, W({
    "data-state": s.stateAttribute
  }, l, c, {
    ref: t,
    style: {
      ...c.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ T(on, null, r), /* @__PURE__ */ T(ma, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ T(oa, {
    id: s.contentId,
    role: "tooltip"
  }, a || r))));
});
function ga(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, a, o)) {
    case o:
      return "left";
    case a:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function va(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function ka(e) {
  const { top: t, right: n, bottom: r, left: a } = e;
  return [
    {
      x: a,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: a,
      y: r
    }
  ];
}
function xa(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const c = t[o].x, s = t[o].y, l = t[i].x, u = t[i].y;
    s > r != u > r && n < (l - c) * (r - s) / (u - s) + c && (a = !a);
  }
  return a;
}
function ba(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), wa(t);
}
function wa(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], i = t[t.length - 2];
      if ((o.x - i.x) * (a.y - i.y) >= (o.y - i.y) * (a.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(a);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const a = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1], i = n[n.length - 2];
      if ((o.x - i.x) * (a.y - i.y) >= (o.y - i.y) * (a.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(a);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Ma = ca, Ca = da, $a = ua, An = ha;
var Aa = Ma, Pn = V.forwardRef(({ open: e, children: t, className: n, label: r = "", defaultOpen: a, renderLabel: o, onOpenChange: i, sideOffset: c = 5, delayDuration: s = 500, disableHoverableContent: l, ...u }, d) => ge(Ca, { defaultOpen: a, open: e, onOpenChange: i, delayDuration: s, disableHoverableContent: l, children: [I($a, { asChild: !0, children: t }), I(An, { ref: d, sideOffset: c, className: Ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n), ...u, children: o || r })] }));
Pn.displayName = An.displayName;
function Ft(e) {
  let t = z();
  return t.current === void 0 && (t.current = e()), t;
}
var Sn = Te(void 0);
function He() {
  return pt(Sn);
}
function nt(e) {
  let t = He(), n = () => e(t.snapshot());
  return Zn(t.subscribe, n, n);
}
var Pa = ["INPUT", "TEXTAREA"];
function Sa({ children: e }) {
  let t = Ft(() => /* @__PURE__ */ new Set()), n = Ft(() => ({ search: "", selectedItem: { id: "", index: -1, actions: [], metadata: {}, actionIndex: -1 } })), r = z(null), a = ce(() => ({ emit() {
    t.current.forEach((o) => o());
  }, setState(o, i, c = !0) {
    Object.is(n.current[o], i) || (n.current[o] = i, c && a.emit());
  }, setSelectedItem(o, i = !0) {
    Object.is(n.current.selectedItem.id, o.id) || (i ? n.current.selectedItem = o : n.current.selectedItem = { ...n.current.selectedItem, ...o }, a.emit());
  }, snapshot() {
    return n.current;
  }, subscribe(o) {
    return t.current.add(o), () => t.current.delete(o);
  }, setController(o) {
    r.current = o;
  }, listControllerKeyBind(o) {
    var c;
    let i = r.current;
    if (!(!i || (((c = r.current) == null ? void 0 : c.runActionByShortcut(o)) ?? !1)))
      switch (o.key) {
        case "Home":
          o.preventDefault(), i.firstItem();
          break;
        case "End":
          o.preventDefault(), i.lastItem();
          break;
        case "Enter":
          o.preventDefault(), i.selectItem();
          break;
        case "ArrowUp":
          o.preventDefault(), o.altKey ? i.prevGroup() : i.prevItem();
          break;
        case "ArrowDown":
          o.preventDefault(), o.altKey ? i.nextGroup() : i.nextItem();
          break;
        case "ArrowLeft":
        case "ArrowRight": {
          let s = o.target, l = o.key === "ArrowLeft", { id: u, actionIndex: d, actions: h } = n.current.selectedItem, p = s ? !Pa.includes(s.tagName) || s.selectionStart !== s.selectionEnd || s.selectionStart !== s.value.length : !1;
          if (!u || h.length <= 0 || p || l && d <= -1 || !l && d >= h.length - 1)
            return;
          o.preventDefault(), n.current.selectedItem.actionIndex += o.key === "ArrowLeft" ? -1 : 1, a.emit();
          break;
        }
      }
  } }), []);
  return L(() => {
    let o = t.current;
    return () => {
      n.current = { search: "", selectedItem: { id: "", index: -1, actions: [], metadata: {}, actionIndex: -1 } }, o.clear();
    };
  }, []), I(Sn.Provider, { value: { ...a, listController: r }, children: e });
}
function Oa(...e) {
  let t = e.filter(Boolean);
  return t.length <= 1 ? t[0] || null : function(n) {
    t.forEach((r) => {
      typeof r == "function" ? r(n) : r && (r.current = n);
    });
  };
}
var rt = { exports: {} }, On = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ả: "A",
  Ạ: "A",
  Ẩ: "A",
  Ẫ: "A",
  Ậ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ẻ: "E",
  Ẽ: "E",
  Ẹ: "E",
  Ể: "E",
  Ễ: "E",
  Ệ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ỉ: "I",
  Ị: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ỏ: "O",
  Ọ: "O",
  Ổ: "O",
  Ỗ: "O",
  Ộ: "O",
  Ờ: "O",
  Ở: "O",
  Ỡ: "O",
  Ớ: "O",
  Ợ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ủ: "U",
  Ụ: "U",
  Ử: "U",
  Ữ: "U",
  Ự: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ả: "a",
  ạ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ỉ: "i",
  ị: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ỏ: "o",
  ọ: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ờ: "o",
  ở: "o",
  ỡ: "o",
  ớ: "o",
  ợ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ủ: "u",
  ụ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z",
  й: "и",
  Й: "И",
  ё: "е",
  Ё: "Е"
}, En = Object.keys(On).join("|"), Ea = new RegExp(En, "g"), Ta = new RegExp(En, "");
function La(e) {
  return On[e];
}
var Tn = function(e) {
  return e.replace(Ea, La);
}, Ia = function(e) {
  return !!e.match(Ta);
};
rt.exports = Tn;
rt.exports.has = Ia;
rt.exports.remove = Tn;
var Ra = rt.exports;
const Da = /* @__PURE__ */ Qn(Ra);
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const U = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
}, za = (e, t) => String(e.rankedValue).localeCompare(String(t.rankedValue));
function Ee(e, t, n) {
  n === void 0 && (n = {});
  const {
    keys: r,
    threshold: a = U.MATCHES,
    baseSort: o = za,
    sorter: i = (l) => l.sort((u, d) => Va(u, d, o))
  } = n, c = e.reduce(s, []);
  return i(c).map((l) => {
    let {
      item: u
    } = l;
    return u;
  });
  function s(l, u, d) {
    const h = Ha(u, r, t, n), {
      rank: p,
      keyThreshold: y = a
    } = h;
    return p >= y && l.push({
      ...h,
      item: u,
      index: d
    }), l;
  }
}
Ee.rankings = U;
function Ha(e, t, n, r) {
  if (!t) {
    const o = e;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: o,
      rank: Bt(o, n, r),
      keyIndex: -1,
      keyThreshold: r.threshold
    };
  }
  return Fa(e, t).reduce((o, i, c) => {
    let {
      rank: s,
      rankedValue: l,
      keyIndex: u,
      keyThreshold: d
    } = o, {
      itemValue: h,
      attributes: p
    } = i, y = Bt(h, n, r), v = l;
    const {
      minRanking: k,
      maxRanking: b,
      threshold: m
    } = p;
    return y < k && y >= U.MATCHES ? y = k : y > b && (y = b), y > s && (s = y, u = c, d = m, v = h), {
      rankedValue: v,
      rank: s,
      keyIndex: u,
      keyThreshold: d
    };
  }, {
    rankedValue: e,
    rank: U.NO_MATCH,
    keyIndex: -1,
    keyThreshold: r.threshold
  });
}
function Bt(e, t, n) {
  return e = Ut(e, n), t = Ut(t, n), t.length > e.length ? U.NO_MATCH : e === t ? U.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? U.EQUAL : e.startsWith(t) ? U.STARTS_WITH : e.includes(` ${t}`) ? U.WORD_STARTS_WITH : e.includes(t) ? U.CONTAINS : t.length === 1 ? U.NO_MATCH : Na(e).includes(t) ? U.ACRONYM : ja(e, t));
}
function Na(e) {
  let t = "";
  return e.split(" ").forEach((r) => {
    r.split("-").forEach((o) => {
      t += o.substr(0, 1);
    });
  }), t;
}
function ja(e, t) {
  let n = 0, r = 0;
  function a(s, l, u) {
    for (let d = u, h = l.length; d < h; d++)
      if (l[d] === s)
        return n += 1, d + 1;
    return -1;
  }
  function o(s) {
    const l = 1 / s, u = n / t.length;
    return U.MATCHES + u * l;
  }
  const i = a(t[0], e, 0);
  if (i < 0)
    return U.NO_MATCH;
  r = i;
  for (let s = 1, l = t.length; s < l; s++) {
    const u = t[s];
    if (r = a(u, e, r), !(r > -1))
      return U.NO_MATCH;
  }
  const c = r - i;
  return o(c);
}
function Va(e, t, n) {
  const {
    rank: o,
    keyIndex: i
  } = e, {
    rank: c,
    keyIndex: s
  } = t;
  return o === c ? i === s ? n(e, t) : i < s ? -1 : 1 : o > c ? -1 : 1;
}
function Ut(e, t) {
  let {
    keepDiacritics: n
  } = t;
  return e = `${e}`, n || (e = Da(e)), e;
}
function _a(e, t) {
  typeof t == "object" && (t = t.key);
  let n;
  if (typeof t == "function")
    n = t(e);
  else if (e == null)
    n = null;
  else if (Object.hasOwnProperty.call(e, t))
    n = e[t];
  else {
    if (t.includes("."))
      return qa(t, e);
    n = null;
  }
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function qa(e, t) {
  const n = e.split(".");
  let r = [t];
  for (let a = 0, o = n.length; a < o; a++) {
    const i = n[a];
    let c = [];
    for (let s = 0, l = r.length; s < l; s++) {
      const u = r[s];
      if (u != null)
        if (Object.hasOwnProperty.call(u, i)) {
          const d = u[i];
          d != null && c.push(d);
        } else
          i === "*" && (c = c.concat(u));
    }
    r = c;
  }
  return Array.isArray(r[0]) ? [].concat(...r) : r;
}
function Fa(e, t) {
  const n = [];
  for (let r = 0, a = t.length; r < a; r++) {
    const o = t[r], i = Ba(o), c = _a(e, o);
    for (let s = 0, l = c.length; s < l; s++)
      n.push({
        itemValue: c[s],
        attributes: i
      });
  }
  return n;
}
const Wt = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function Ba(e) {
  return typeof e == "string" ? Wt : {
    ...Wt,
    ...e
  };
}
const ot = {
  mod: "Ctrl",
  ArrowUp: "⇧",
  altKey: "Alt",
  ArrowDown: "⇩",
  ArrowLeft: "⇦",
  ctrlKey: "Ctrl",
  metaKey: "Meta",
  ArrowRight: "⇨",
  shiftKey: "Shift"
};
function Ua(e, t = !0) {
  if (!e)
    return "";
  let n = ot[e.mod1] ?? e.mod1;
  return e.mod2 && (n += `+${ot[e.mod2] ?? e.mod2}`), n += `+${ot[e.key] ?? e.key.toUpperCase()}`, t ? `(${n})` : n;
}
var ut = "ui-list-item-selected";
function me(e, t) {
  let { findGroup: n, direction: r, startIndex: a } = { startIndex: 0, direction: "next", findGroup: !1, ...t }, o = r === "next";
  for (let i = a; i >= 0 && i < e.length; i += o ? 1 : -1) {
    let c = e[i];
    if (!(!c || typeof c == "string")) {
      if (n) {
        let s = e[a], l = e[i - 1];
        if (s.group === c.group || s.group === l || typeof l != "string")
          continue;
      }
      return { item: c, index: i };
    }
  }
  return null;
}
function Wa(e, t) {
  return Ee(e, t, { keys: ["title", { threshold: Ee.rankings.STARTS_WITH, key: "keywords" }, { threshold: Ee.rankings.EQUAL, key: "alias" }, { minRanking: Ee.rankings.EQUAL, key: "subtitle" }] });
}
var Ln = _(({ items: e, search: t, noDataSlot: n, renderItem: r, customFilter: a, onItemSelected: o, renderGroupHeader: i, shouldFilter: c = !0, disabledItemSelection: s, ...l }, u) => {
  let d = He(), h = nt((m) => t || m.search), p = z(null), y = ce(() => {
    let m = e;
    c && (h != null && h.trim()) && (m = a ? a(m, h) : Wa(m, h));
    let g = [], x = /* @__PURE__ */ new Map();
    for (let w of m) {
      if (!w.group) {
        g.push(w);
        continue;
      }
      let M = x.get(w.group);
      if (typeof M != "number") {
        M = g.length, x.set(w.group, M), g.push([w.group, [w]]);
        continue;
      }
      g[M][1].push(w);
    }
    return g.flat(2);
  }, [h, c, e, a]), v = ce(() => {
    let m = (g) => {
      var M;
      let { index: x, item: w } = g ?? { index: -1, item: { value: "", metadata: {} } };
      d.setSelectedItem({ index: x, id: w.value, actionIndex: -1, metadata: w.metadata, actions: ((M = w.actions) == null ? void 0 : M.map((A) => ({ value: A.value, onAction: A.onAction, shortcut: A.shortcut }))) ?? [] });
    };
    return { selectItem() {
      var $;
      let { index: g, actionIndex: x, actions: w, id: M } = d.snapshot().selectedItem, A = y[g];
      if (!(!M || !A || typeof A == "string")) {
        if (x >= 0 && w && w[x]) {
          w[x].onAction();
          return;
        }
        ($ = document.querySelector(`[data-item-value="${M}"]`)) == null || $.dispatchEvent(new Event(ut)), o == null || o(M);
      }
    }, runActionByShortcut(g) {
      let { actions: x } = d.snapshot().selectedItem;
      if (!x)
        return !1;
      let { altKey: w, ctrlKey: M, metaKey: A, shiftKey: $ } = g;
      if (!w && !M && !A && !$)
        return !1;
      let R = (O) => O === "mod" ? M || A : g[O], N = x.find(({ shortcut: O }) => {
        if (!O)
          return;
        let C = R(O.mod1) && (O.mod2 ? R(O.mod2) : !0), q = g.key.toLowerCase() === O.key.toLowerCase();
        return C && q;
      });
      return N && (N.onAction(), g.preventDefault()), !!N;
    }, nextAction() {
      let { actionIndex: g, actions: x, ...w } = d.snapshot().selectedItem;
      g >= x.length - 1 || d.setSelectedItem({ ...w, actions: x, actionIndex: g + 1 });
    }, prevAction() {
      let { actionIndex: g, actions: x, ...w } = d.snapshot().selectedItem;
      g <= 0 || d.setSelectedItem({ ...w, actions: x, actionIndex: g - 1 });
    }, firstItem() {
      let g = me(y);
      m(g);
    }, lastItem() {
      let g = me(y, { direction: "prev", startIndex: y.length - 1 });
      g && m(g);
    }, nextGroup() {
      let g = d.snapshot().selectedItem.index;
      if (g === y.length - 1)
        return;
      let x = me(y, { findGroup: !0, startIndex: g });
      x && m(x);
    }, prevGroup() {
      let g = d.snapshot().selectedItem.index;
      if (g === 0)
        return;
      let x = me(y, { findGroup: !0, direction: "prev", startIndex: g });
      x && m(x);
    }, nextItem() {
      let g = d.snapshot().selectedItem.index, x = me(y, { startIndex: g + 1 });
      x && m(x);
    }, prevItem() {
      let g = d.snapshot().selectedItem.index, x = me(y, { direction: "prev", startIndex: g - 1 });
      x && m(x);
    } };
  }, [y]);
  Kn(u, () => ({ controller: v, el: p }), [v]);
  let k = F((m, g) => {
    s || d.snapshot().selectedItem.id === m.value || d.setSelectedItem({ index: g, actions: [], id: m.value, actionIndex: -1, metadata: m.metadata }, !0);
  }, [o]), b = F((m) => {
    var g;
    (g = m.onSelected) == null || g.call(m), o == null || o(m.value);
  }, [o]);
  return L(() => {
    if (!s)
      return v.firstItem(), d.setController(v), () => {
        d.setController(null);
      };
  }, [y, s]), L(() => () => {
    d.setSelectedItem({ id: "", index: -1, actions: [], metadata: {}, actionIndex: -1 });
  }, []), ge("div", { ref: p, ...l, children: [y.length === 0 && (n || I("p", { className: "text-center text-muted-foreground my-4", children: "No data" })), y.map((m, g) => typeof m == "string" ? I(Gt, { children: i ? i(m, g) : I(Ct, { children: m }, m) }, m) : m.searchOnly && !(h != null && h.trim()) ? null : I(Ga, { item: m, index: g, value: m.value, renderItem: r, onClick: () => b(m), onPointerMove: () => k(m, g) }, m.value))] });
});
Ln.displayName = "UiListRoot";
function Ga({ item: e, value: t, index: n, onClick: r, renderItem: a, onPointerMove: o }) {
  let i = Xn(), c = z(t || i), s = nt((u) => u.selectedItem.id === c.current), l = z(null);
  return L(() => {
    var d;
    if (!s || !l.current)
      return;
    let u = l.current.parentElement;
    u != null && u.classList.contains("group-list") && u.firstElementChild === l.current && ((d = u.previousElementSibling) == null || d.scrollIntoView({ block: "nearest" })), l.current.scrollIntoView({ block: "nearest" });
  }, [s]), a ? a({ item: e, ref: l, selected: s, props: { onPointerMove: o, onClick: r } }, n) : I($t, { ref: l, icon: e.icon, alias: e.alias, title: e.title, value: e.value, suffix: e.suffix, actions: e.actions, selected: s, subtitle: e.subtitle, description: e.description, onClick: r, onPointerMove: o });
}
var Ct = _(({ children: e, className: t, ...n }, r) => I("span", { ...n, ref: r, className: Ye("px-2 py-1.5 text-xs font-medium text-muted-foreground", t), children: e }));
Ct.displayName = "UiListGroupHeading";
var Za = { default: "", primary: "text-primary", destructive: "text-destructive-text" };
function Ka({ actions: e }) {
  let t = He(), n = nt((o) => o.selectedItem.actionIndex), [r, a] = G(-1);
  return L(() => {
    a(n);
  }, [n]), L(() => {
    t.setSelectedItem({ actions: e.map((o) => ({ value: o.value, shortcut: o.shortcut, onAction: o.onAction })) }, !1);
  }, [e]), I("div", { className: "flex items-center absolute rounded-sm top-0 h-full right-0 pr-2 pl-6 pointer-events-none bg-gradient-to-tl from-40% from-card to-100% to-transparent", children: e.map(({ icon: o, onAction: i, title: c, value: s, shortcut: l, color: u = "default" }, d) => I(Pn, { align: "end", sideOffset: 4, open: r === d, label: `${c} ${Ua(l)}`, onOpenChange: (h) => a(h ? d : -1), children: I("button", { tabIndex: -1, "aria-pressed": n === d, onClick: (h) => {
    h.preventDefault(), h.stopPropagation(), i == null || i();
  }, className: "h-9 w-9 aria-pressed:bg-secondary hover:bg-secondary rounded-sm inline-flex items-center justify-center pointer-events-auto", children: I(o, { className: `h-4 w-4 ${Za[u ?? "default"] ?? ""}` }) }) }, s)) });
}
var $t = _(({ icon: e, alias: t, title: n, value: r, suffix: a, actions: o, onClick: i, subtitle: c, selected: s, children: l, className: u, onSelected: d, description: h, ...p }, y) => {
  let v = z(null), k = Oa(y, v);
  return L(() => {
    let b = v.current;
    if (!b)
      return;
    let m = () => d == null ? void 0 : d(r);
    return b.addEventListener(ut, m), () => {
      b.removeEventListener(ut, m);
    };
  }, [d, r]), I("div", { className: Ye("relative group/item min-h-12 flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-card aria-selected:text-accent-foreground", u), ...p, "aria-selected": s, ref: k, "data-item-value": r, role: "option", onClick: (b) => {
    d ? d(r) : i == null || i(b);
  }, children: l || ge(Yn, { children: [e && I("span", { className: "h-8 w-8 mr-2 inline-flex items-center justify-center group-aria-selected/item:text-foreground text-muted-foreground", children: e }), ge("div", { className: "flex-1", children: [ge("p", { className: "leading-tight line-clamp-1", children: [n, I("span", { className: "text-muted-foreground leading-tight ml-2 text-xs", children: c }), t && ge("span", { className: "text-muted-foreground leading-tight ml-2 text-xs", children: ["• ", t] })] }), I("span", { className: "text-muted-foreground leading-tight", children: h })] }), a, o && o.length > 0 && s && I(Ka, { actions: o })] }) });
});
$t.displayName = "UiListItem";
var In = _(({ icon: e, className: t, ...n }, r) => I("span", { ref: r, className: Ye("group-aria-selected/item:text-foreground text-muted-foreground inline-flex justify-center items-center bg-card rounded-sm border border-border/40 h-full w-full", t), ...n, children: typeof e == "string" ? e : I(e, { className: "h-4 w-4" }) }));
In.displayName = "ExtCommandListIcon";
var Rn = _(({ onKeyDown: e, onChange: t, ...n }, r) => {
  let a = He(), o = nt((i) => i.search);
  return I("input", { ref: r, ...n, value: o, onKeyDown: (i) => {
    e == null || e(i), a.listControllerKeyBind(i.nativeEvent);
  }, onChange: (i) => {
    t == null || t(i), a.setState("search", i.target.value);
  } });
});
Rn.displayName = "ExtCommandListIcon";
var Xa = Object.assign(Ln, { Icon: In, Item: $t, Input: Rn, GroupHeading: Ct }), el = Xa;
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ya = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), f = (e, t) => {
  const n = _(
    ({
      color: r = "currentColor",
      size: a = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: c = "",
      children: s,
      ...l
    }, u) => T(
      "svg",
      {
        ref: u,
        ...Ya,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(a) : o,
        className: ["lucide", `lucide-${Ja(e)}`, c].join(" "),
        ...l
      },
      [
        ...t.map(([d, h]) => T(d, h)),
        ...Array.isArray(s) ? s : [s]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = f("Atom", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = f("AudioLines", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = f("BadgeDollarSign", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = f("BarChartBig", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1", key: "14u6mf" }],
  ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1", key: "b3pek6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = f("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = f("BellRing", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = f("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = f("Bike", [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = f("Bird", [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = f("Bitcoin", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = f("BookMarked", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = f("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = f("Book", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = f("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = f("Braces", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = f("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = f("Cake", [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h0.01", key: "hsw7lv" }],
  ["path", { d: "M12 4h0.01", key: "1e3d8f" }],
  ["path", { d: "M17 4h0.01", key: "p7cxgy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mi = f("Calculator", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = f("CaseSensitive", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
  ["path", { d: "M21 9v6", key: "anns31" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vi = f("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = f("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = f("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = f("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = f("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = f("CircleUserRound", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = f("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = f("ClipboardCheck", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = f("ClipboardList", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pi = f("Clipboard", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = f("Clock1", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = f("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ei = f("CloudHail", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v2", key: "a1is7l" }],
  ["path", { d: "M8 14v2", key: "1e9m6t" }],
  ["path", { d: "M16 20h.01", key: "xwek51" }],
  ["path", { d: "M8 20h.01", key: "1vjney" }],
  ["path", { d: "M12 16v2", key: "z66u1j" }],
  ["path", { d: "M12 22h.01", key: "1urd7a" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ti = f("CloudLightning", [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
  ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = f("CloudMoon", [
  ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" }],
  ["path", { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197", key: "16nha0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = f("CloudRain", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = f("CloudSunRain", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = f("CloudSun", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zi = f("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = f("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ni = f("Coffee", [
  ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
  ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
  ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = f("Command", [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = f("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = f("CornerDownRight", [
  ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = f("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = f("DatabaseBackup", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
  ["path", { d: "M21 9.3V5", key: "6k6cib" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
  ["path", { d: "M12 12v4h4", key: "1bxaet" }],
  [
    "path",
    {
      d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
      key: "1f4ei9"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = f("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = f("Divide", [
  ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wi = f("Equal", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = f("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = f("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = f("FileArchive", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18", key: "1oywqq" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = f("FileAudio", [
  ["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "rslqgf" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",
      key: "9f7x3i"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = f("FileCode", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
  ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = f("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = f("FileLock", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1", key: "3yr8at" }],
  ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2", key: "j4i8d" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = f("FileSearch", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "1vg67v" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = f("FileVideo", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = f("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = f("Files", [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z", key: "18t6ie" }],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = f("Film", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = f("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = f("FolderArchive", [
  ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
      key: "1jj40k"
    }
  ],
  ["path", { d: "M15 11v-1", key: "cntcp" }],
  ["path", { d: "M15 17v-2", key: "1279jj" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = f("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = f("FolderTree", [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = f("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = f("Gamepad", [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = f("GitBranchPlus", [
  ["path", { d: "M6 3v12", key: "qpgusn" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = f("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = f("GitCommitHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = f("GitCompare", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = f("GitFork", [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = f("GitMerge", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = f("GitPullRequestArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = f("GitPullRequestCreateArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
  ["path", { d: "M19 15v6", key: "10aioa" }],
  ["path", { d: "M22 18h-6", key: "1d5gi5" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = f("GitPullRequestDraft", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M18 6V5", key: "1oao2s" }],
  ["path", { d: "M18 11v-1", key: "11c8tz" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = f("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = f("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = f("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = f("Images", [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = f("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = f("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = f("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = f("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = f("MailCheck", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = f("MailOpen", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = f("MailPlus", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = f("MailX", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m17 17 4 4", key: "1b3523" }],
  ["path", { d: "m21 17-4 4", key: "uinynz" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = f("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = f("Mails", [
  ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2", key: "1drq3f" }],
  ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" }],
  ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = f("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = f("MapPinned", [
  ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
      key: "112zkj"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = f("Map", [
  ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
  ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = f("MousePointer2", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = f("MousePointerClick", [
  ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z", key: "1b76lo" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = f("Mouse", [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
  ["path", { d: "M12 6v4", key: "16clxf" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = f("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = f("PlaneLanding", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
      key: "1ma21e"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = f("PlaneTakeoff", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = f("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = f("PlayCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = f("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = f("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = f("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = f("PowerCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 12V6", key: "30zewn" }],
  ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5", key: "1r0tk2" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = f("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = f("RadioTower", [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = f("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = f("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = f("ScanBarcode", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = f("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = f("ScrollText", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M15 12h-5", key: "r7krc0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = f("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = f("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = f("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = f("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = f("Sparkle", [
  [
    "path",
    {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
      key: "nraa5p"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = f("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = f("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = f("StarOff", [
  ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }],
  ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = f("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = f("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = f("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = f("Store", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = f("SunDim", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M20 12h.01", key: "1ykeid" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M4 12h.01", key: "158zrr" }],
  ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
  ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
  ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
  ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = f("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = f("SunMoon", [
  ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
  ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
  ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = f("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = f("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = f("TerminalSquare", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = f("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = f("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = f("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = f("TicketPercent", [
  [
    "path",
    {
      d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "1l48ns"
    }
  ],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = f("TimerOff", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M12 12v-2", key: "fwoke6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $c = f("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = f("ToggleRight", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = f("Undo", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = f("UnlockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = f("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = f("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = f("Video", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = f("Volume1", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = f("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = f("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = f("Volume", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = f("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = f("Wand", [
  ["path", { d: "M15 4V2", key: "z1p9b7" }],
  ["path", { d: "M15 16v-2", key: "px0unx" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
  ["path", { d: "M15 9h0", key: "kg5t1u" }],
  ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = f("WifiOff", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = f("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = f("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
var tl = { Clipboard: Pi, BadgeDollarSign: ti, Atom: Qa, AudioLines: ei, BarChartBig: ni, BellOff: ri, Bell: ai, BellRing: oi, Bike: ii, Book: ui, BookMarked: li, BookOpen: di, Bookmark: fi, Braces: pi, Bird: si, Bitcoin: ci, Brush: hi, Calculator: mi, Cake: yi, CaseSensitive: gi, CheckCheck: vi, Check: xi, CheckCircle: ki, ChevronDown: bi, ChevronsDown: wi, CircleUserRound: Mi, Circle: Ci, ClipboardCheck: $i, ClipboardList: Ai, Clock1: Si, Clock3: Oi, CloudHail: Ei, CloudLightning: Ti, CloudMoon: Li, CloudRain: Ii, CloudSunRain: Ri, CloudSun: Di, Cloud: zi, Code2: Hi, Coffee: Ni, Compass: Vi, Command: ji, CornerDownRight: _i, Crop: qi, Database: Bi, DatabaseBackup: Fi, Expand: Gi, Divide: Ui, Equal: Wi, Eye: Zi, FileArchive: Ki, FileAudio: Xi, FileCode: Yi, FileJson: Ji, FileLock: Qi, FileSearch: es, FileVideo: ts, File: ns, Filter: as, Files: rs, Film: os, FolderArchive: is, Folder: ls, FolderOpen: ss, FolderTree: cs, Gamepad: ds, GitBranchPlus: us, GitBranch: fs, GitCommitHorizontal: ps, GitCompare: hs, GitFork: ys, GitMerge: ms, GitPullRequestArrow: gs, GitPullRequestCreateArrow: vs, GitPullRequestDraft: ks, HardDrive: xs, Image: ws, ImagePlus: bs, Images: Ms, Languages: Cs, Laptop: $s, Layers: As, LayoutDashboard: Ps, Mail: Ls, MailCheck: Ss, MailOpen: Os, MailPlus: Es, MailX: Ts, Mails: Is, MapPin: Rs, Map: zs, MapPinned: Ds, MousePointer2: Hs, MousePointerClick: Ns, Mouse: js, Plus: Gs, PlusCircle: Ws, Pipette: Vs, PlaneLanding: _s, PlaneTakeoff: qs, Plane: Fs, PlayCircle: Bs, Play: Us, Power: Ks, PowerCircle: Zs, RadioTower: Xs, RotateCw: Ys, Ruler: Js, ScanBarcode: Qs, ScanLine: ec, Search: nc, ScrollText: tc, Settings: rc, StepForward: uc, SkipForward: ac, SunDim: hc, SunMedium: yc, SunMoon: mc, Sun: gc, ShoppingCart: oc, Sparkle: ic, Sparkles: sc, SquarePen: cc, Star: dc, StarOff: lc, StickyNote: fc, Store: pc, Tag: vc, Terminal: xc, TerminalSquare: kc, ThumbsUp: wc, ThumbsDown: bc, TicketPercent: Mc, Timer: $c, TimerOff: Cc, ToggleRight: Ac, Undo: Pc, UnlockKeyhole: Sc, User: Oc, Users: Ec, Video: Tc, Volume1: Lc, VolumeX: Rc, Volume2: Ic, Volume: Dc, Wallet: zc, Wand: Hc, Wifi: jc, WifiOff: Nc, XCircle: Vc }, _c = Te({ query: "" });
function qc({ children: e, messagePort: t, value: n }) {
  let r = He(), [a, o] = G(() => n ?? "");
  return L(() => {
    let i = (s) => {
      o(s), r.setState("search", s);
    }, c = (s) => {
      r.listControllerKeyBind(new KeyboardEvent("keydown", { bubbles: !0, ...s }));
    };
    return t.on("extension:query-change", i), t.on("extension:keydown-event", c), () => {
      t.on("extension:query-change", i), t.on("extension:keydown-event", c);
    };
  }, [t]), I(_c.Provider, { value: { query: a }, children: e });
}
function Fc(e) {
  let t = Wn.memo(e);
  return function({ messagePort: n, context: r }) {
    return I(Sa, { children: I(Aa, { children: I(qc, { messagePort: n, children: I(t, { ...r }) }) }) });
  };
}
var nl = Fc, Bc = ((e) => (e.USER = "user", e.COMMAND = "command", e.WORKFLOW = "workflow", e.DEEP_LINK = "deep-link", e))(Bc || {});
export {
  el as L,
  Kc as a,
  Zc as c,
  nl as f,
  Qn as g,
  Qr as i,
  tl as z
};
