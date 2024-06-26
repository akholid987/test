import { g as Xn, c as Vt, a as Lp } from "./@libs/$extension-api.js";
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, pr.apply(this, arguments);
}
var uf = {
  // minimum relative difference between two compared values,
  // used by all comparison functions
  epsilon: 1e-12,
  // type of default matrix output. Choose 'matrix' (default) or 'array'
  matrix: "Matrix",
  // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
  number: "number",
  // number of significant digits in BigNumbers
  precision: 64,
  // predictable output type of functions. When true, output type depends only
  // on the input types. When false (default), output type can vary depending
  // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
  // predictable is false, and returns `NaN` when true.
  predictable: !1,
  // random seed for seeded pseudo random number generation
  // null = randomly seed
  randomSeed: null
};
function Re(e) {
  return typeof e == "number";
}
function ze(e) {
  return !e || typeof e != "object" || typeof e.constructor != "function" ? !1 : e.isBigNumber === !0 && typeof e.constructor.prototype == "object" && e.constructor.prototype.isBigNumber === !0 || typeof e.constructor.isDecimal == "function" && e.constructor.isDecimal(e) === !0;
}
function bt(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isComplex === !0 || !1;
}
function Wn(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isFraction === !0 || !1;
}
function Yr(e) {
  return e && e.constructor.prototype.isUnit === !0 || !1;
}
function Er(e) {
  return typeof e == "string";
}
var Ke = Array.isArray;
function Fe(e) {
  return e && e.constructor.prototype.isMatrix === !0 || !1;
}
function Wr(e) {
  return Array.isArray(e) || Fe(e);
}
function Sa(e) {
  return e && e.isDenseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function Lt(e) {
  return e && e.isSparseMatrix && e.constructor.prototype.isMatrix === !0 || !1;
}
function Zi(e) {
  return e && e.constructor.prototype.isRange === !0 || !1;
}
function Wa(e) {
  return e && e.constructor.prototype.isIndex === !0 || !1;
}
function kp(e) {
  return typeof e == "boolean";
}
function Hp(e) {
  return e && e.constructor.prototype.isResultSet === !0 || !1;
}
function lf(e) {
  return e && e.constructor.prototype.isHelp === !0 || !1;
}
function Gp(e) {
  return typeof e == "function";
}
function Vp(e) {
  return e instanceof Date;
}
function Zp(e) {
  return e instanceof RegExp;
}
function Ja(e) {
  return !!(e && typeof e == "object" && e.constructor === Object && !bt(e) && !Wn(e));
}
function Yp(e) {
  return e === null;
}
function Xp(e) {
  return e === void 0;
}
function Ht(e) {
  return e && e.isAccessorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Zr(e) {
  return e && e.isArrayNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Wp(e) {
  return e && e.isAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Jp(e) {
  return e && e.isBlockNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Qp(e) {
  return e && e.isConditionalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Xe(e) {
  return e && e.isConstantNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Fi(e) {
  return Xe(e) || mr(e) && e.args.length === 1 && Xe(e.args[0]) && "-+~".includes(e.op);
}
function Jn(e) {
  return e && e.isFunctionAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Bt(e) {
  return e && e.isFunctionNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Nn(e) {
  return e && e.isIndexNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function er(e) {
  return e && e.isNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Qa(e) {
  return e && e.isObjectNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function mr(e) {
  return e && e.isOperatorNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function wt(e) {
  return e && e.isParenthesisNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function Kp(e) {
  return e && e.isRangeNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function jp(e) {
  return e && e.isRelationalNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function yr(e) {
  return e && e.isSymbolNode === !0 && e.constructor.prototype.isNode === !0 || !1;
}
function cf(e) {
  return e && e.constructor.prototype.isChain === !0 || !1;
}
function ar(e) {
  var r = typeof e;
  return r === "object" ? e === null ? "null" : ze(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : r;
}
function _e(e) {
  var r = typeof e;
  if (r === "number" || r === "string" || r === "boolean" || e === null || e === void 0)
    return e;
  if (typeof e.clone == "function")
    return e.clone();
  if (Array.isArray(e))
    return e.map(function(i) {
      return _e(i);
    });
  if (e instanceof Date)
    return new Date(e.valueOf());
  if (ze(e))
    return e;
  if (Ja(e))
    return ed(e, _e);
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e, ")"));
}
function ed(e, r) {
  var i = {};
  for (var a in e)
    Ee(e, a) && (i[a] = r(e[a]));
  return i;
}
function ff(e, r) {
  for (var i in r)
    Ee(r, i) && (e[i] = r[i]);
  return e;
}
function Gt(e, r) {
  var i, a, t;
  if (Array.isArray(e)) {
    if (!Array.isArray(r) || e.length !== r.length)
      return !1;
    for (a = 0, t = e.length; a < t; a++)
      if (!Gt(e[a], r[a]))
        return !1;
    return !0;
  } else {
    if (typeof e == "function")
      return e === r;
    if (e instanceof Object) {
      if (Array.isArray(r) || !(r instanceof Object))
        return !1;
      for (i in e)
        if (!(i in r) || !Gt(e[i], r[i]))
          return !1;
      for (i in r)
        if (!(i in e))
          return !1;
      return !0;
    } else
      return e === r;
  }
}
function rd(e, r, i) {
  var a = !0, t;
  Object.defineProperty(e, r, {
    get: function() {
      return a && (t = i(), a = !1), t;
    },
    set: function(o) {
      t = o, a = !1;
    },
    configurable: !0,
    enumerable: !0
  });
}
function Ee(e, r) {
  return e && Object.hasOwnProperty.call(e, r);
}
function td(e, r) {
  for (var i = {}, a = 0; a < r.length; a++) {
    var t = r[a], n = e[t];
    n !== void 0 && (i[t] = n);
  }
  return i;
}
var nd = ["Matrix", "Array"], ad = ["number", "BigNumber", "Fraction"], pe = function(r) {
  if (r)
    throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(uf);
};
pr(pe, uf, {
  MATRIX_OPTIONS: nd,
  NUMBER_OPTIONS: ad
});
function qo() {
  return !0;
}
function Vr() {
  return !1;
}
function nn() {
}
const Ro = "Argument is not a typed-function.";
function mf() {
  function e(R) {
    return typeof R == "object" && R !== null && R.constructor === Object;
  }
  const r = [{
    name: "number",
    test: function(R) {
      return typeof R == "number";
    }
  }, {
    name: "string",
    test: function(R) {
      return typeof R == "string";
    }
  }, {
    name: "boolean",
    test: function(R) {
      return typeof R == "boolean";
    }
  }, {
    name: "Function",
    test: function(R) {
      return typeof R == "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function(R) {
      return R instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function(R) {
      return R instanceof RegExp;
    }
  }, {
    name: "Object",
    test: e
  }, {
    name: "null",
    test: function(R) {
      return R === null;
    }
  }, {
    name: "undefined",
    test: function(R) {
      return R === void 0;
    }
  }], i = {
    name: "any",
    test: qo,
    isAny: !0
  };
  let a, t, n = 0, o = {
    createCount: 0
  };
  function f(R) {
    const U = a.get(R);
    if (U)
      return U;
    let J = 'Unknown type "' + R + '"';
    const ae = R.toLowerCase();
    let le;
    for (le of t)
      if (le.toLowerCase() === ae) {
        J += '. Did you mean "' + le + '" ?';
        break;
      }
    throw new TypeError(J);
  }
  function l(R) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const J = U ? f(U).index : t.length, ae = [];
    for (let ue = 0; ue < R.length; ++ue) {
      if (!R[ue] || typeof R[ue].name != "string" || typeof R[ue].test != "function")
        throw new TypeError("Object with properties {name: string, test: function} expected");
      const ge = R[ue].name;
      if (a.has(ge))
        throw new TypeError('Duplicate type name "' + ge + '"');
      ae.push(ge), a.set(ge, {
        name: ge,
        test: R[ue].test,
        isAny: R[ue].isAny,
        index: J + ue,
        conversionsTo: []
        // Newly added type can't have any conversions to it
      });
    }
    const le = t.slice(J);
    t = t.slice(0, J).concat(ae).concat(le);
    for (let ue = J + ae.length; ue < t.length; ++ue)
      a.get(t[ue]).index = ue;
  }
  function u() {
    a = /* @__PURE__ */ new Map(), t = [], n = 0, l([i], !1);
  }
  u(), l(r);
  function s() {
    let R;
    for (R of t)
      a.get(R).conversionsTo = [];
    n = 0;
  }
  function c(R) {
    const U = t.filter((J) => {
      const ae = a.get(J);
      return !ae.isAny && ae.test(R);
    });
    return U.length ? U : ["any"];
  }
  function m(R) {
    return R && typeof R == "function" && "_typedFunctionData" in R;
  }
  function v(R, U, J) {
    if (!m(R))
      throw new TypeError(Ro);
    const ae = J && J.exact, le = Array.isArray(U) ? U.join(",") : U, ue = b(le), ge = x(ue);
    if (!ae || ge in R.signatures) {
      const Ve = R._typedFunctionData.signatureMap.get(ge);
      if (Ve)
        return Ve;
    }
    const he = ue.length;
    let De;
    if (ae) {
      De = [];
      let Ve;
      for (Ve in R.signatures)
        De.push(R._typedFunctionData.signatureMap.get(Ve));
    } else
      De = R._typedFunctionData.signatures;
    for (let Ve = 0; Ve < he; ++Ve) {
      const Ye = ue[Ve], Ce = [];
      let lr;
      for (lr of De) {
        const M = S(lr.params, Ve);
        if (!(!M || Ye.restParam && !M.restParam)) {
          if (!M.hasAny) {
            const Z = h(M);
            if (Ye.types.some((ie) => !Z.has(ie.name)))
              continue;
          }
          Ce.push(lr);
        }
      }
      if (De = Ce, De.length === 0)
        break;
    }
    let ye;
    for (ye of De)
      if (ye.params.length <= he)
        return ye;
    throw new TypeError("Signature not found (signature: " + (R.name || "unnamed") + "(" + x(ue, ", ") + "))");
  }
  function d(R, U, J) {
    return v(R, U, J).implementation;
  }
  function p(R, U) {
    const J = f(U);
    if (J.test(R))
      return R;
    const ae = J.conversionsTo;
    if (ae.length === 0)
      throw new Error("There are no conversions to " + U + " defined.");
    for (let le = 0; le < ae.length; le++)
      if (f(ae[le].from).test(R))
        return ae[le].convert(R);
    throw new Error("Cannot convert " + R + " to " + U);
  }
  function x(R) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return R.map((J) => J.name).join(U);
  }
  function g(R) {
    const U = R.indexOf("...") === 0, ae = (U ? R.length > 3 ? R.slice(3) : "any" : R).split("|").map((he) => f(he.trim()));
    let le = !1, ue = U ? "..." : "";
    return {
      types: ae.map(function(he) {
        return le = he.isAny || le, ue += he.name + "|", {
          name: he.name,
          typeIndex: he.index,
          test: he.test,
          isAny: he.isAny,
          conversion: null,
          conversionIndex: -1
        };
      }),
      name: ue.slice(0, -1),
      // remove trailing '|' from above
      hasAny: le,
      hasConversion: !1,
      restParam: U
    };
  }
  function N(R) {
    const U = R.types.map((ge) => ge.name), J = B(U);
    let ae = R.hasAny, le = R.name;
    const ue = J.map(function(ge) {
      const he = f(ge.from);
      return ae = he.isAny || ae, le += "|" + ge.from, {
        name: ge.from,
        typeIndex: he.index,
        test: he.test,
        isAny: he.isAny,
        conversion: ge,
        conversionIndex: ge.index
      };
    });
    return {
      types: R.types.concat(ue),
      name: le,
      hasAny: ae,
      hasConversion: ue.length > 0,
      restParam: R.restParam
    };
  }
  function h(R) {
    return R.typeSet || (R.typeSet = /* @__PURE__ */ new Set(), R.types.forEach((U) => R.typeSet.add(U.name))), R.typeSet;
  }
  function b(R) {
    const U = [];
    if (typeof R != "string")
      throw new TypeError("Signatures must be strings");
    const J = R.trim();
    if (J === "")
      return U;
    const ae = J.split(",");
    for (let le = 0; le < ae.length; ++le) {
      const ue = g(ae[le].trim());
      if (ue.restParam && le !== ae.length - 1)
        throw new SyntaxError('Unexpected rest parameter "' + ae[le] + '": only allowed for the last parameter');
      if (ue.types.length === 0)
        return null;
      U.push(ue);
    }
    return U;
  }
  function w(R) {
    const U = ee(R);
    return U ? U.restParam : !1;
  }
  function y(R) {
    if (!R || R.types.length === 0)
      return qo;
    if (R.types.length === 1)
      return f(R.types[0].name).test;
    if (R.types.length === 2) {
      const U = f(R.types[0].name).test, J = f(R.types[1].name).test;
      return function(le) {
        return U(le) || J(le);
      };
    } else {
      const U = R.types.map(function(J) {
        return f(J.name).test;
      });
      return function(ae) {
        for (let le = 0; le < U.length; le++)
          if (U[le](ae))
            return !0;
        return !1;
      };
    }
  }
  function A(R) {
    let U, J, ae;
    if (w(R)) {
      U = oe(R).map(y);
      const le = U.length, ue = y(ee(R)), ge = function(he) {
        for (let De = le; De < he.length; De++)
          if (!ue(he[De]))
            return !1;
        return !0;
      };
      return function(De) {
        for (let ye = 0; ye < U.length; ye++)
          if (!U[ye](De[ye]))
            return !1;
        return ge(De) && De.length >= le + 1;
      };
    } else
      return R.length === 0 ? function(ue) {
        return ue.length === 0;
      } : R.length === 1 ? (J = y(R[0]), function(ue) {
        return J(ue[0]) && ue.length === 1;
      }) : R.length === 2 ? (J = y(R[0]), ae = y(R[1]), function(ue) {
        return J(ue[0]) && ae(ue[1]) && ue.length === 2;
      }) : (U = R.map(y), function(ue) {
        for (let ge = 0; ge < U.length; ge++)
          if (!U[ge](ue[ge]))
            return !1;
        return ue.length === U.length;
      });
  }
  function S(R, U) {
    return U < R.length ? R[U] : w(R) ? ee(R) : null;
  }
  function D(R, U) {
    const J = S(R, U);
    return J ? h(J) : /* @__PURE__ */ new Set();
  }
  function E(R) {
    return R.conversion === null || R.conversion === void 0;
  }
  function C(R, U) {
    const J = /* @__PURE__ */ new Set();
    return R.forEach((ae) => {
      const le = D(ae.params, U);
      let ue;
      for (ue of le)
        J.add(ue);
    }), J.has("any") ? ["any"] : Array.from(J);
  }
  function F(R, U, J) {
    let ae, le;
    const ue = R || "unnamed";
    let ge = J, he;
    for (he = 0; he < U.length; he++) {
      const Ye = [];
      if (ge.forEach((Ce) => {
        const lr = S(Ce.params, he), M = y(lr);
        (he < Ce.params.length || w(Ce.params)) && M(U[he]) && Ye.push(Ce);
      }), Ye.length === 0) {
        if (le = C(ge, he), le.length > 0) {
          const Ce = c(U[he]);
          return ae = new TypeError("Unexpected type of argument in function " + ue + " (expected: " + le.join(" or ") + ", actual: " + Ce.join(" | ") + ", index: " + he + ")"), ae.data = {
            category: "wrongType",
            fn: ue,
            index: he,
            actual: Ce,
            expected: le
          }, ae;
        }
      } else
        ge = Ye;
    }
    const De = ge.map(function(Ye) {
      return w(Ye.params) ? 1 / 0 : Ye.params.length;
    });
    if (U.length < Math.min.apply(null, De))
      return le = C(ge, he), ae = new TypeError("Too few arguments in function " + ue + " (expected: " + le.join(" or ") + ", index: " + U.length + ")"), ae.data = {
        category: "tooFewArgs",
        fn: ue,
        index: U.length,
        expected: le
      }, ae;
    const ye = Math.max.apply(null, De);
    if (U.length > ye)
      return ae = new TypeError("Too many arguments in function " + ue + " (expected: " + ye + ", actual: " + U.length + ")"), ae.data = {
        category: "tooManyArgs",
        fn: ue,
        index: U.length,
        expectedLength: ye
      }, ae;
    const Ve = [];
    for (let Ye = 0; Ye < U.length; ++Ye)
      Ve.push(c(U[Ye]).join("|"));
    return ae = new TypeError('Arguments of type "' + Ve.join(", ") + '" do not match any of the defined signatures of function ' + ue + "."), ae.data = {
      category: "mismatch",
      actual: Ve
    }, ae;
  }
  function _(R) {
    let U = t.length + 1;
    for (let J = 0; J < R.types.length; J++)
      E(R.types[J]) && (U = Math.min(U, R.types[J].typeIndex));
    return U;
  }
  function I(R) {
    let U = n + 1;
    for (let J = 0; J < R.types.length; J++)
      E(R.types[J]) || (U = Math.min(U, R.types[J].conversionIndex));
    return U;
  }
  function $(R, U) {
    if (R.hasAny) {
      if (!U.hasAny)
        return 1;
    } else if (U.hasAny)
      return -1;
    if (R.restParam) {
      if (!U.restParam)
        return 1;
    } else if (U.restParam)
      return -1;
    if (R.hasConversion) {
      if (!U.hasConversion)
        return 1;
    } else if (U.hasConversion)
      return -1;
    const J = _(R) - _(U);
    if (J < 0)
      return -1;
    if (J > 0)
      return 1;
    const ae = I(R) - I(U);
    return ae < 0 ? -1 : ae > 0 ? 1 : 0;
  }
  function T(R, U) {
    const J = R.params, ae = U.params, le = ee(J), ue = ee(ae), ge = w(J), he = w(ae);
    if (ge && le.hasAny) {
      if (!he || !ue.hasAny)
        return 1;
    } else if (he && ue.hasAny)
      return -1;
    let De = 0, ye = 0, Ve;
    for (Ve of J)
      Ve.hasAny && ++De, Ve.hasConversion && ++ye;
    let Ye = 0, Ce = 0;
    for (Ve of ae)
      Ve.hasAny && ++Ye, Ve.hasConversion && ++Ce;
    if (De !== Ye)
      return De - Ye;
    if (ge && le.hasConversion) {
      if (!he || !ue.hasConversion)
        return 1;
    } else if (he && ue.hasConversion)
      return -1;
    if (ye !== Ce)
      return ye - Ce;
    if (ge) {
      if (!he)
        return 1;
    } else if (he)
      return -1;
    const lr = (J.length - ae.length) * (ge ? -1 : 1);
    if (lr !== 0)
      return lr;
    const M = [];
    let Z = 0;
    for (let be = 0; be < J.length; ++be) {
      const Te = $(J[be], ae[be]);
      M.push(Te), Z += Te;
    }
    if (Z !== 0)
      return Z;
    let ie;
    for (ie of M)
      if (ie !== 0)
        return ie;
    return 0;
  }
  function B(R) {
    if (R.length === 0)
      return [];
    const U = R.map(f);
    R.length > 1 && U.sort((le, ue) => le.index - ue.index);
    let J = U[0].conversionsTo;
    if (R.length === 1)
      return J;
    J = J.concat([]);
    const ae = new Set(R);
    for (let le = 1; le < U.length; ++le) {
      let ue;
      for (ue of U[le].conversionsTo)
        ae.has(ue.from) || (J.push(ue), ae.add(ue.from));
    }
    return J;
  }
  function L(R, U) {
    let J = U;
    if (R.some((le) => le.hasConversion)) {
      const le = w(R), ue = R.map(O);
      J = function() {
        const he = [], De = le ? arguments.length - 1 : arguments.length;
        for (let ye = 0; ye < De; ye++)
          he[ye] = ue[ye](arguments[ye]);
        return le && (he[De] = arguments[De].map(ue[De])), U.apply(this, he);
      };
    }
    let ae = J;
    if (w(R)) {
      const le = R.length - 1;
      ae = function() {
        return J.apply(this, ne(arguments, 0, le).concat([ne(arguments, le)]));
      };
    }
    return ae;
  }
  function O(R) {
    let U, J, ae, le;
    const ue = [], ge = [];
    switch (R.types.forEach(function(he) {
      he.conversion && (ue.push(f(he.conversion.from).test), ge.push(he.conversion.convert));
    }), ge.length) {
      case 0:
        return function(De) {
          return De;
        };
      case 1:
        return U = ue[0], ae = ge[0], function(De) {
          return U(De) ? ae(De) : De;
        };
      case 2:
        return U = ue[0], J = ue[1], ae = ge[0], le = ge[1], function(De) {
          return U(De) ? ae(De) : J(De) ? le(De) : De;
        };
      default:
        return function(De) {
          for (let ye = 0; ye < ge.length; ye++)
            if (ue[ye](De))
              return ge[ye](De);
          return De;
        };
    }
  }
  function X(R) {
    function U(J, ae, le) {
      if (ae < J.length) {
        const ue = J[ae];
        let ge = [];
        if (ue.restParam) {
          const he = ue.types.filter(E);
          he.length < ue.types.length && ge.push({
            types: he,
            name: "..." + he.map((De) => De.name).join("|"),
            hasAny: he.some((De) => De.isAny),
            hasConversion: !1,
            restParam: !0
          }), ge.push(ue);
        } else
          ge = ue.types.map(function(he) {
            return {
              types: [he],
              name: he.name,
              hasAny: he.isAny,
              hasConversion: he.conversion,
              restParam: !1
            };
          });
        return ve(ge, function(he) {
          return U(J, ae + 1, le.concat([he]));
        });
      } else
        return [le];
    }
    return U(R, 0, []);
  }
  function K(R, U) {
    const J = Math.max(R.length, U.length);
    for (let he = 0; he < J; he++) {
      const De = D(R, he), ye = D(U, he);
      let Ve = !1, Ye;
      for (Ye of ye)
        if (De.has(Ye)) {
          Ve = !0;
          break;
        }
      if (!Ve)
        return !1;
    }
    const ae = R.length, le = U.length, ue = w(R), ge = w(U);
    return ue ? ge ? ae === le : le >= ae : ge ? ae >= le : ae === le;
  }
  function V(R) {
    return R.map((U) => te(U) ? P(U.referToSelf.callback) : H(U) ? Ae(U.referTo.references, U.referTo.callback) : U);
  }
  function z(R, U, J) {
    const ae = [];
    let le;
    for (le of R) {
      let ue = J[le];
      if (typeof ue != "number")
        throw new TypeError('No definition for referenced signature "' + le + '"');
      if (ue = U[ue], typeof ue != "function")
        return !1;
      ae.push(ue);
    }
    return ae;
  }
  function Q(R, U, J) {
    const ae = V(R), le = new Array(ae.length).fill(!1);
    let ue = !0;
    for (; ue; ) {
      ue = !1;
      let ge = !0;
      for (let he = 0; he < ae.length; ++he) {
        if (le[he])
          continue;
        const De = ae[he];
        if (te(De))
          ae[he] = De.referToSelf.callback(J), ae[he].referToSelf = De.referToSelf, le[he] = !0, ge = !1;
        else if (H(De)) {
          const ye = z(De.referTo.references, ae, U);
          ye ? (ae[he] = De.referTo.callback.apply(this, ye), ae[he].referTo = De.referTo, le[he] = !0, ge = !1) : ue = !0;
        }
      }
      if (ge && ue)
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return ae;
  }
  function ce(R) {
    const U = /\bthis(\(|\.signatures\b)/;
    Object.keys(R).forEach((J) => {
      const ae = R[J];
      if (U.test(ae.toString()))
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function j(R, U) {
    if (o.createCount++, Object.keys(U).length === 0)
      throw new SyntaxError("No signatures provided");
    o.warnAgainstDeprecatedThis && ce(U);
    const J = [], ae = [], le = {}, ue = [];
    let ge;
    for (ge in U) {
      if (!Object.prototype.hasOwnProperty.call(U, ge))
        continue;
      const rr = b(ge);
      if (!rr)
        continue;
      J.forEach(function(zn) {
        if (K(zn, rr))
          throw new TypeError('Conflicting signatures "' + x(zn) + '" and "' + x(rr) + '".');
      }), J.push(rr);
      const zr = ae.length;
      ae.push(U[ge]);
      const Pp = rr.map(N);
      let oa;
      for (oa of X(Pp)) {
        const zn = x(oa);
        ue.push({
          params: oa,
          name: zn,
          fn: zr
        }), oa.every((Up) => !Up.hasConversion) && (le[zn] = zr);
      }
    }
    ue.sort(T);
    const he = Q(ae, le, Rn);
    let De;
    for (De in le)
      Object.prototype.hasOwnProperty.call(le, De) && (le[De] = he[le[De]]);
    const ye = [], Ve = /* @__PURE__ */ new Map();
    for (De of ue)
      Ve.has(De.name) || (De.fn = he[De.fn], ye.push(De), Ve.set(De.name, De));
    const Ye = ye[0] && ye[0].params.length <= 2 && !w(ye[0].params), Ce = ye[1] && ye[1].params.length <= 2 && !w(ye[1].params), lr = ye[2] && ye[2].params.length <= 2 && !w(ye[2].params), M = ye[3] && ye[3].params.length <= 2 && !w(ye[3].params), Z = ye[4] && ye[4].params.length <= 2 && !w(ye[4].params), ie = ye[5] && ye[5].params.length <= 2 && !w(ye[5].params), be = Ye && Ce && lr && M && Z && ie;
    for (let rr = 0; rr < ye.length; ++rr)
      ye[rr].test = A(ye[rr].params);
    const Te = Ye ? y(ye[0].params[0]) : Vr, Ue = Ce ? y(ye[1].params[0]) : Vr, Lr = lr ? y(ye[2].params[0]) : Vr, bi = M ? y(ye[3].params[0]) : Vr, pp = Z ? y(ye[4].params[0]) : Vr, dp = ie ? y(ye[5].params[0]) : Vr, hp = Ye ? y(ye[0].params[1]) : Vr, gp = Ce ? y(ye[1].params[1]) : Vr, yp = lr ? y(ye[2].params[1]) : Vr, bp = M ? y(ye[3].params[1]) : Vr, xp = Z ? y(ye[4].params[1]) : Vr, wp = ie ? y(ye[5].params[1]) : Vr;
    for (let rr = 0; rr < ye.length; ++rr)
      ye[rr].implementation = L(ye[rr].params, ye[rr].fn);
    const Np = Ye ? ye[0].implementation : nn, Dp = Ce ? ye[1].implementation : nn, Ap = lr ? ye[2].implementation : nn, Ep = M ? ye[3].implementation : nn, Sp = Z ? ye[4].implementation : nn, Cp = ie ? ye[5].implementation : nn, Mp = Ye ? ye[0].params.length : -1, Fp = Ce ? ye[1].params.length : -1, Bp = lr ? ye[2].params.length : -1, Tp = M ? ye[3].params.length : -1, Op = Z ? ye[4].params.length : -1, _p = ie ? ye[5].params.length : -1, $p = be ? 6 : 0, Ip = ye.length, qp = ye.map((rr) => rr.test), Rp = ye.map((rr) => rr.implementation), zp = function() {
      for (let zr = $p; zr < Ip; zr++)
        if (qp[zr](arguments))
          return Rp[zr].apply(this, arguments);
      return o.onMismatch(R, arguments, ye);
    };
    function Rn(rr, zr) {
      return arguments.length === Mp && Te(rr) && hp(zr) ? Np.apply(this, arguments) : arguments.length === Fp && Ue(rr) && gp(zr) ? Dp.apply(this, arguments) : arguments.length === Bp && Lr(rr) && yp(zr) ? Ap.apply(this, arguments) : arguments.length === Tp && bi(rr) && bp(zr) ? Ep.apply(this, arguments) : arguments.length === Op && pp(rr) && xp(zr) ? Sp.apply(this, arguments) : arguments.length === _p && dp(rr) && wp(zr) ? Cp.apply(this, arguments) : zp.apply(this, arguments);
    }
    try {
      Object.defineProperty(Rn, "name", {
        value: R
      });
    } catch {
    }
    return Rn.signatures = le, Rn._typedFunctionData = {
      signatures: ye,
      signatureMap: Ve
    }, Rn;
  }
  function re(R, U, J) {
    throw F(R, U, J);
  }
  function oe(R) {
    return ne(R, 0, R.length - 1);
  }
  function ee(R) {
    return R[R.length - 1];
  }
  function ne(R, U, J) {
    return Array.prototype.slice.call(R, U, J);
  }
  function se(R, U) {
    for (let J = 0; J < R.length; J++)
      if (U(R[J]))
        return R[J];
  }
  function ve(R, U) {
    return Array.prototype.concat.apply([], R.map(U));
  }
  function we() {
    const R = oe(arguments).map((J) => x(b(J))), U = ee(arguments);
    if (typeof U != "function")
      throw new TypeError("Callback function expected as last argument");
    return Ae(R, U);
  }
  function Ae(R, U) {
    return {
      referTo: {
        references: R,
        callback: U
      }
    };
  }
  function P(R) {
    if (typeof R != "function")
      throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: R
      }
    };
  }
  function H(R) {
    return R && typeof R.referTo == "object" && Array.isArray(R.referTo.references) && typeof R.referTo.callback == "function";
  }
  function te(R) {
    return R && typeof R.referToSelf == "object" && typeof R.referToSelf.callback == "function";
  }
  function k(R, U) {
    if (!R)
      return U;
    if (U && U !== R) {
      const J = new Error("Function names do not match (expected: " + R + ", actual: " + U + ")");
      throw J.data = {
        actual: U,
        expected: R
      }, J;
    }
    return R;
  }
  function Y(R) {
    let U;
    for (const J in R)
      Object.prototype.hasOwnProperty.call(R, J) && (m(R[J]) || typeof R[J].signature == "string") && (U = k(U, R[J].name));
    return U;
  }
  function W(R, U) {
    let J;
    for (J in U)
      if (Object.prototype.hasOwnProperty.call(U, J)) {
        if (J in R && U[J] !== R[J]) {
          const ae = new Error('Signature "' + J + '" is defined twice');
          throw ae.data = {
            signature: J,
            sourceFunction: U[J],
            destFunction: R[J]
          }, ae;
        }
        R[J] = U[J];
      }
  }
  const me = o;
  o = function(R) {
    const U = typeof R == "string", J = U ? 1 : 0;
    let ae = U ? R : "";
    const le = {};
    for (let ue = J; ue < arguments.length; ++ue) {
      const ge = arguments[ue];
      let he = {}, De;
      if (typeof ge == "function" ? (De = ge.name, typeof ge.signature == "string" ? he[ge.signature] = ge : m(ge) && (he = ge.signatures)) : e(ge) && (he = ge, U || (De = Y(ge))), Object.keys(he).length === 0) {
        const ye = new TypeError("Argument to 'typed' at index " + ue + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw ye.data = {
          index: ue,
          argument: ge
        }, ye;
      }
      U || (ae = k(ae, De)), W(le, he);
    }
    return j(ae || "", le);
  }, o.create = mf, o.createCount = me.createCount, o.onMismatch = re, o.throwMismatchError = re, o.createError = F, o.clear = u, o.clearConversions = s, o.addTypes = l, o._findType = f, o.referTo = we, o.referToSelf = P, o.convert = p, o.findSignature = v, o.find = d, o.isTypedFunction = m, o.warnAgainstDeprecatedThis = !0, o.addType = function(R, U) {
    let J = "any";
    U !== !1 && a.has("Object") && (J = "Object"), o.addTypes([R], J);
  };
  function fe(R) {
    if (!R || typeof R.from != "string" || typeof R.to != "string" || typeof R.convert != "function")
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (R.to === R.from)
      throw new SyntaxError('Illegal to define conversion from "' + R.from + '" to itself.');
  }
  return o.addConversion = function(R) {
    fe(R);
    const U = f(R.to);
    if (U.conversionsTo.every(function(J) {
      return J.from !== R.from;
    }))
      U.conversionsTo.push({
        from: R.from,
        convert: R.convert,
        index: n++
      });
    else
      throw new Error('There is already a conversion from "' + R.from + '" to "' + U.name + '"');
  }, o.addConversions = function(R) {
    R.forEach(o.addConversion);
  }, o.removeConversion = function(R) {
    fe(R);
    const U = f(R.to), J = se(U.conversionsTo, (le) => le.from === R.from);
    if (!J)
      throw new Error("Attempt to remove nonexistent conversion from " + R.from + " to " + R.to);
    if (J.convert !== R.convert)
      throw new Error("Conversion to remove does not match existing conversion");
    const ae = U.conversionsTo.indexOf(J);
    U.conversionsTo.splice(ae, 1);
  }, o.resolve = function(R, U) {
    if (!m(R))
      throw new TypeError(Ro);
    const J = R._typedFunctionData.signatures;
    for (let ae = 0; ae < J.length; ++ae)
      if (J[ae].test(U))
        return J[ae];
    return null;
  }, o;
}
const un = mf();
function Se(e) {
  return typeof e == "boolean" ? !0 : isFinite(e) ? e === Math.round(e) : !1;
}
var Mt = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, id = Math.log2 || function(r) {
  return Math.log(r) / Math.LN2;
}, od = Math.log10 || function(r) {
  return Math.log(r) / Math.LN10;
}, sd = Math.log1p || function(e) {
  return Math.log(e + 1);
}, ud = Math.cbrt || function(r) {
  if (r === 0)
    return r;
  var i = r < 0, a;
  return i && (r = -r), isFinite(r) ? (a = Math.exp(Math.log(r) / 3), a = (r / (a * a) + 2 * a) / 3) : a = r, i ? -a : a;
}, ld = Math.expm1 || function(r) {
  return r >= 2e-4 || r <= -2e-4 ? Math.exp(r) - 1 : r + r * r / 2 + r * r * r / 6;
};
function xi(e, r, i) {
  var a = {
    2: "0b",
    8: "0o",
    16: "0x"
  }, t = a[r], n = "";
  if (i) {
    if (i < 1)
      throw new Error("size must be in greater than 0");
    if (!Se(i))
      throw new Error("size must be an integer");
    if (e > 2 ** (i - 1) - 1 || e < -(2 ** (i - 1)))
      throw new Error("Value must be in range [-2^".concat(i - 1, ", 2^").concat(i - 1, "-1]"));
    if (!Se(e))
      throw new Error("Value must be an integer");
    e < 0 && (e = e + 2 ** i), n = "i".concat(i);
  }
  var o = "";
  return e < 0 && (e = -e, o = "-"), "".concat(o).concat(t).concat(e.toString(r)).concat(n);
}
function kt(e, r) {
  if (typeof r == "function")
    return r(e);
  if (e === 1 / 0)
    return "Infinity";
  if (e === -1 / 0)
    return "-Infinity";
  if (isNaN(e))
    return "NaN";
  var {
    notation: i,
    precision: a,
    wordSize: t
  } = vf(r);
  switch (i) {
    case "fixed":
      return pf(e, a);
    case "exponential":
      return df(e, a);
    case "engineering":
      return cd(e, a);
    case "bin":
      return xi(e, 2, t);
    case "oct":
      return xi(e, 8, t);
    case "hex":
      return xi(e, 16, t);
    case "auto":
      return fd(e, a, r).replace(/((\.\d*?)(0+))($|e)/, function() {
        var n = arguments[2], o = arguments[4];
        return n !== "." ? n + o : o;
      });
    default:
      throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function vf(e) {
  var r = "auto", i, a;
  if (e !== void 0)
    if (Re(e))
      i = e;
    else if (ze(e))
      i = e.toNumber();
    else if (Ja(e))
      e.precision !== void 0 && (i = zo(e.precision, () => {
        throw new Error('Option "precision" must be a number or BigNumber');
      })), e.wordSize !== void 0 && (a = zo(e.wordSize, () => {
        throw new Error('Option "wordSize" must be a number or BigNumber');
      })), e.notation && (r = e.notation);
    else
      throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return {
    notation: r,
    precision: i,
    wordSize: a
  };
}
function Qn(e) {
  var r = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!r)
    throw new SyntaxError("Invalid number " + e);
  var i = r[1], a = r[2], t = parseFloat(r[4] || "0"), n = a.indexOf(".");
  t += n !== -1 ? n - 1 : a.length - 1;
  var o = a.replace(".", "").replace(/^0*/, function(f) {
    return t -= f.length, "";
  }).replace(/0*$/, "").split("").map(function(f) {
    return parseInt(f);
  });
  return o.length === 0 && (o.push(0), t++), {
    sign: i,
    coefficients: o,
    exponent: t
  };
}
function cd(e, r) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var i = Qn(e), a = Ka(i, r), t = a.exponent, n = a.coefficients, o = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3;
  if (Re(r))
    for (; r > n.length || t - o + 1 > n.length; )
      n.push(0);
  else
    for (var f = Math.abs(t - o) - (n.length - 1), l = 0; l < f; l++)
      n.push(0);
  for (var u = Math.abs(t - o), s = 1; u > 0; )
    s++, u--;
  var c = n.slice(s).join(""), m = Re(r) && c.length || c.match(/[1-9]/) ? "." + c : "", v = n.slice(0, s).join("") + m + "e" + (t >= 0 ? "+" : "") + o.toString();
  return a.sign + v;
}
function pf(e, r) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var i = Qn(e), a = typeof r == "number" ? Ka(i, i.exponent + 1 + r) : i, t = a.coefficients, n = a.exponent + 1, o = n + (r || 0);
  return t.length < o && (t = t.concat(fn(o - t.length))), n < 0 && (t = fn(-n + 1).concat(t), n = 1), n < t.length && t.splice(n, 0, n === 0 ? "0." : "."), a.sign + t.join("");
}
function df(e, r) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var i = Qn(e), a = r ? Ka(i, r) : i, t = a.coefficients, n = a.exponent;
  t.length < r && (t = t.concat(fn(r - t.length)));
  var o = t.shift();
  return a.sign + o + (t.length > 0 ? "." + t.join("") : "") + "e" + (n >= 0 ? "+" : "") + n;
}
function fd(e, r, i) {
  if (isNaN(e) || !isFinite(e))
    return String(e);
  var a = Po(i == null ? void 0 : i.lowerExp, -3), t = Po(i == null ? void 0 : i.upperExp, 5), n = Qn(e), o = r ? Ka(n, r) : n;
  if (o.exponent < a || o.exponent >= t)
    return df(e, r);
  var f = o.coefficients, l = o.exponent;
  f.length < r && (f = f.concat(fn(r - f.length))), f = f.concat(fn(l - f.length + 1 + (f.length < r ? r - f.length : 0))), f = fn(-l).concat(f);
  var u = l > 0 ? l : 0;
  return u < f.length - 1 && f.splice(u + 1, 0, "."), o.sign + f.join("");
}
function Ka(e, r) {
  for (var i = {
    sign: e.sign,
    coefficients: e.coefficients,
    exponent: e.exponent
  }, a = i.coefficients; r <= 0; )
    a.unshift(0), i.exponent++, r++;
  if (a.length > r) {
    var t = a.splice(r, a.length - r);
    if (t[0] >= 5) {
      var n = r - 1;
      for (a[n]++; a[n] === 10; )
        a.pop(), n === 0 && (a.unshift(0), i.exponent++, n++), n--, a[n]++;
    }
  }
  return i;
}
function fn(e) {
  for (var r = [], i = 0; i < e; i++)
    r.push(0);
  return r;
}
function md(e) {
  return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
var vd = Number.EPSILON || 2220446049250313e-31;
function _r(e, r, i) {
  if (i == null)
    return e === r;
  if (e === r)
    return !0;
  if (isNaN(e) || isNaN(r))
    return !1;
  if (isFinite(e) && isFinite(r)) {
    var a = Math.abs(e - r);
    return a <= vd ? !0 : a <= Math.max(Math.abs(e), Math.abs(r)) * i;
  }
  return !1;
}
var pd = Math.acosh || function(e) {
  return Math.log(Math.sqrt(e * e - 1) + e);
}, dd = Math.asinh || function(e) {
  return Math.log(Math.sqrt(e * e + 1) + e);
}, hd = Math.atanh || function(e) {
  return Math.log((1 + e) / (1 - e)) / 2;
}, gd = Math.cosh || function(e) {
  return (Math.exp(e) + Math.exp(-e)) / 2;
}, yd = Math.sinh || function(e) {
  return (Math.exp(e) - Math.exp(-e)) / 2;
}, bd = Math.tanh || function(e) {
  var r = Math.exp(2 * e);
  return (r - 1) / (r + 1);
};
function xd(e, r) {
  var i = e > 0 ? !0 : e < 0 ? !1 : 1 / e === 1 / 0, a = r > 0 ? !0 : r < 0 ? !1 : 1 / r === 1 / 0;
  return i ^ a ? -e : e;
}
function zo(e, r) {
  if (Re(e))
    return e;
  if (ze(e))
    return e.toNumber();
  r();
}
function Po(e, r) {
  return Re(e) ? e : ze(e) ? e.toNumber() : r;
}
function wi(e, r, i) {
  var a = e.constructor, t = new a(2), n = "";
  if (i) {
    if (i < 1)
      throw new Error("size must be in greater than 0");
    if (!Se(i))
      throw new Error("size must be an integer");
    if (e.greaterThan(t.pow(i - 1).sub(1)) || e.lessThan(t.pow(i - 1).mul(-1)))
      throw new Error("Value must be in range [-2^".concat(i - 1, ", 2^").concat(i - 1, "-1]"));
    if (!e.isInteger())
      throw new Error("Value must be an integer");
    e.lessThan(0) && (e = e.add(t.pow(i))), n = "i".concat(i);
  }
  switch (r) {
    case 2:
      return "".concat(e.toBinary()).concat(n);
    case 8:
      return "".concat(e.toOctal()).concat(n);
    case 16:
      return "".concat(e.toHexadecimal()).concat(n);
    default:
      throw new Error("Base ".concat(r, " not supported "));
  }
}
function wd(e, r) {
  if (typeof r == "function")
    return r(e);
  if (!e.isFinite())
    return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
  var {
    notation: i,
    precision: a,
    wordSize: t
  } = vf(r);
  switch (i) {
    case "fixed":
      return Dd(e, a);
    case "exponential":
      return Uo(e, a);
    case "engineering":
      return Nd(e, a);
    case "bin":
      return wi(e, 2, t);
    case "oct":
      return wi(e, 8, t);
    case "hex":
      return wi(e, 16, t);
    case "auto": {
      var n = Lo(r == null ? void 0 : r.lowerExp, -3), o = Lo(r == null ? void 0 : r.upperExp, 5);
      if (e.isZero())
        return "0";
      var f, l = e.toSignificantDigits(a), u = l.e;
      return u >= n && u < o ? f = l.toFixed() : f = Uo(e, a), f.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], c = arguments[4];
        return s !== "." ? s + c : c;
      });
    }
    default:
      throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Nd(e, r) {
  var i = e.e, a = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3, t = e.mul(Math.pow(10, -a)), n = t.toPrecision(r);
  if (n.indexOf("e") !== -1) {
    var o = e.constructor;
    n = new o(n).toFixed();
  }
  return n + "e" + (i >= 0 ? "+" : "") + a.toString();
}
function Uo(e, r) {
  return r !== void 0 ? e.toExponential(r - 1) : e.toExponential();
}
function Dd(e, r) {
  return e.toFixed(r);
}
function Lo(e, r) {
  return Re(e) ? e : ze(e) ? e.toNumber() : r;
}
function Ad(e, r) {
  var i = e.length - r.length, a = e.length;
  return e.substring(i, a) === r;
}
function Le(e, r) {
  var i = Ed(e, r);
  return r && typeof r == "object" && "truncate" in r && i.length > r.truncate ? i.substring(0, r.truncate - 3) + "..." : i;
}
function Ed(e, r) {
  if (typeof e == "number")
    return kt(e, r);
  if (ze(e))
    return wd(e, r);
  if (Sd(e))
    return !r || r.fraction !== "decimal" ? e.s * e.n + "/" + e.d : e.toString();
  if (Array.isArray(e))
    return hf(e, r);
  if (Er(e))
    return ln(e);
  if (typeof e == "function")
    return e.syntax ? String(e.syntax) : "function";
  if (e && typeof e == "object") {
    if (typeof e.format == "function")
      return e.format(r);
    if (e && e.toString(r) !== {}.toString())
      return e.toString(r);
    var i = Object.keys(e).map((a) => ln(a) + ": " + Le(e[a], r));
    return "{" + i.join(", ") + "}";
  }
  return String(e);
}
function ln(e) {
  for (var r = String(e), i = "", a = 0; a < r.length; ) {
    var t = r.charAt(a);
    i += t in ko ? ko[t] : t, a++;
  }
  return '"' + i + '"';
}
var ko = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};
function Xr(e) {
  var r = String(e);
  return r = r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), r;
}
function hf(e, r) {
  if (Array.isArray(e)) {
    for (var i = "[", a = e.length, t = 0; t < a; t++)
      t !== 0 && (i += ", "), i += hf(e[t], r);
    return i += "]", i;
  } else
    return Le(e, r);
}
function Sd(e) {
  return e && typeof e == "object" && typeof e.s == "number" && typeof e.n == "number" && typeof e.d == "number" || !1;
}
function Bi(e, r) {
  if (!Er(e))
    throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + ar(e) + ", index: 0)");
  if (!Er(r))
    throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + ar(r) + ", index: 1)");
  return e === r ? 0 : e > r ? 1 : -1;
}
function ke(e, r, i) {
  if (!(this instanceof ke))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = e, this.expected = r, this.relation = i, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + ")", this.stack = new Error().stack;
}
ke.prototype = new RangeError();
ke.prototype.constructor = RangeError;
ke.prototype.name = "DimensionError";
ke.prototype.isDimensionError = !0;
function at(e, r, i) {
  if (!(this instanceof at))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.index = e, arguments.length < 3 ? (this.min = 0, this.max = r) : (this.min = r, this.max = i), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
at.prototype = new RangeError();
at.prototype.constructor = RangeError;
at.prototype.name = "IndexError";
at.prototype.isIndexError = !0;
function qe(e) {
  for (var r = []; Array.isArray(e); )
    r.push(e.length), e = e[0];
  return r;
}
function gf(e, r, i) {
  var a, t = e.length;
  if (t !== r[i])
    throw new ke(t, r[i]);
  if (i < r.length - 1) {
    var n = i + 1;
    for (a = 0; a < t; a++) {
      var o = e[a];
      if (!Array.isArray(o))
        throw new ke(r.length - 1, r.length, "<");
      gf(e[a], r, n);
    }
  } else
    for (a = 0; a < t; a++)
      if (Array.isArray(e[a]))
        throw new ke(r.length + 1, r.length, ">");
}
function Ho(e, r) {
  var i = r.length === 0;
  if (i) {
    if (Array.isArray(e))
      throw new ke(e.length, 0);
  } else
    gf(e, r, 0);
}
function Ca(e, r) {
  var i = e.isMatrix ? e._size : qe(e), a = r._sourceSize;
  a.forEach((t, n) => {
    if (t !== null && t !== i[n])
      throw new ke(t, i[n]);
  });
}
function tr(e, r) {
  if (e !== void 0) {
    if (!Re(e) || !Se(e))
      throw new TypeError("Index must be an integer (value: " + e + ")");
    if (e < 0 || typeof r == "number" && e >= r)
      throw new at(e, r);
  }
}
function pn(e) {
  for (var r = 0; r < e._dimensions.length; ++r) {
    var i = e._dimensions[r];
    if (i._data && Ke(i._data)) {
      if (i._size[0] === 0)
        return !0;
    } else if (i.isRange) {
      if (i.start === i.end)
        return !0;
    } else if (Er(i) && i.length === 0)
      return !0;
  }
  return !1;
}
function dn(e, r, i) {
  if (!Array.isArray(r))
    throw new TypeError("Array expected");
  if (r.length === 0)
    throw new Error("Resizing to scalar is not supported");
  r.forEach(function(t) {
    if (!Re(t) || !Se(t) || t < 0)
      throw new TypeError("Invalid size, must contain positive integers (size: " + Le(r) + ")");
  }), (Re(e) || ze(e)) && (e = [e]);
  var a = i !== void 0 ? i : 0;
  return Ti(e, r, 0, a), e;
}
function Ti(e, r, i, a) {
  var t, n, o = e.length, f = r[i], l = Math.min(o, f);
  if (e.length = f, i < r.length - 1) {
    var u = i + 1;
    for (t = 0; t < l; t++)
      n = e[t], Array.isArray(n) || (n = [n], e[t] = n), Ti(n, r, u, a);
    for (t = l; t < f; t++)
      n = [], e[t] = n, Ti(n, r, u, a);
  } else {
    for (t = 0; t < l; t++)
      for (; Array.isArray(e[t]); )
        e[t] = e[t][0];
    for (t = l; t < f; t++)
      e[t] = a;
  }
}
function Yi(e, r) {
  var i = Qe(e), a = i.length;
  if (!Array.isArray(e) || !Array.isArray(r))
    throw new TypeError("Array expected");
  if (r.length === 0)
    throw new ke(0, a, "!=");
  r = Xi(r, a);
  var t = yf(r);
  if (a !== t)
    throw new ke(t, a, "!=");
  try {
    return Cd(i, r);
  } catch (n) {
    throw n instanceof ke ? new ke(t, a, "!=") : n;
  }
}
function Xi(e, r) {
  var i = yf(e), a = e.slice(), t = -1, n = e.indexOf(t), o = e.indexOf(t, n + 1) >= 0;
  if (o)
    throw new Error("More than one wildcard in sizes");
  var f = n >= 0, l = r % i === 0;
  if (f)
    if (l)
      a[n] = -r / i;
    else
      throw new Error("Could not replace wildcard, since " + r + " is no multiple of " + -i);
  return a;
}
function yf(e) {
  return e.reduce((r, i) => r * i, 1);
}
function Cd(e, r) {
  for (var i = e, a, t = r.length - 1; t > 0; t--) {
    var n = r[t];
    a = [];
    for (var o = i.length / n, f = 0; f < o; f++)
      a.push(i.slice(f * n, (f + 1) * n));
    i = a;
  }
  return i;
}
function Ma(e, r) {
  for (var i = r || qe(e); Array.isArray(e) && e.length === 1; )
    e = e[0], i.shift();
  for (var a = i.length; i[a - 1] === 1; )
    a--;
  return a < i.length && (e = bf(e, a, 0), i.length = a), e;
}
function bf(e, r, i) {
  var a, t;
  if (i < r) {
    var n = i + 1;
    for (a = 0, t = e.length; a < t; a++)
      e[a] = bf(e[a], r, n);
  } else
    for (; Array.isArray(e); )
      e = e[0];
  return e;
}
function xf(e, r, i, a) {
  var t = a || qe(e);
  if (i)
    for (var n = 0; n < i; n++)
      e = [e], t.unshift(1);
  for (e = wf(e, r, 0); t.length < r; )
    t.push(1);
  return e;
}
function wf(e, r, i) {
  var a, t;
  if (Array.isArray(e)) {
    var n = i + 1;
    for (a = 0, t = e.length; a < t; a++)
      e[a] = wf(e[a], r, n);
  } else
    for (var o = i; o < r; o++)
      e = [e];
  return e;
}
function Qe(e) {
  if (!Array.isArray(e))
    return e;
  var r = [];
  return e.forEach(function i(a) {
    Array.isArray(a) ? a.forEach(i) : r.push(a);
  }), r;
}
function xt(e, r) {
  return Array.prototype.map.call(e, r);
}
function ja(e, r) {
  Array.prototype.forEach.call(e, r);
}
function Nf(e, r) {
  if (qe(e).length !== 1)
    throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, r);
}
function Fa(e, r) {
  if (qe(e).length !== 1)
    throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, (i) => r.test(i));
}
function Go(e, r) {
  return Array.prototype.join.call(e, r);
}
function hn(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array input expected");
  if (e.length === 0)
    return e;
  var r = [], i = 0;
  r[0] = {
    value: e[0],
    identifier: 0
  };
  for (var a = 1; a < e.length; a++)
    e[a] === e[a - 1] ? i++ : i = 0, r.push({
      value: e[a],
      identifier: i
    });
  return r;
}
function Ba(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array input expected");
  if (e.length === 0)
    return e;
  for (var r = [], i = 0; i < e.length; i++)
    r.push(e[i].value);
  return r;
}
function Hn(e, r) {
  for (var i, a = 0, t = 0; t < e.length; t++) {
    var n = e[t], o = Array.isArray(n);
    if (t === 0 && o && (a = n.length), o && n.length !== a)
      return;
    var f = o ? Hn(n, r) : r(n);
    if (i === void 0)
      i = f;
    else if (i !== f)
      return "mixed";
  }
  return i;
}
function Df(e, r, i, a) {
  if (a < i) {
    if (e.length !== r.length)
      throw new ke(e.length, r.length);
    for (var t = [], n = 0; n < e.length; n++)
      t[n] = Df(e[n], r[n], i, a + 1);
    return t;
  } else
    return e.concat(r);
}
function Af() {
  var e = Array.prototype.slice.call(arguments, 0, -1), r = Array.prototype.slice.call(arguments, -1);
  if (e.length === 1)
    return e[0];
  if (e.length > 1)
    return e.slice(1).reduce(function(i, a) {
      return Df(i, a, r, 0);
    }, e[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function Md() {
  for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
    r[i] = arguments[i];
  for (var a = r.map((m) => m.length), t = Math.max(...a), n = new Array(t).fill(null), o = 0; o < r.length; o++)
    for (var f = r[o], l = a[o], u = 0; u < l; u++) {
      var s = t - l + u;
      f[u] > n[s] && (n[s] = f[u]);
    }
  for (var c = 0; c < r.length; c++)
    Ta(r[c], n);
  return n;
}
function Ta(e, r) {
  for (var i = r.length, a = e.length, t = 0; t < a; t++) {
    var n = i - a + t;
    if (e[t] < r[n] && e[t] > 1 || e[t] > r[n])
      throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(e, ") not possible to broadcast dimension ").concat(a, " with size ").concat(e[t], " to size ").concat(r[n]));
  }
}
function Vo(e, r) {
  var i = qe(e);
  if (Gt(i, r))
    return e;
  Ta(i, r);
  var a = Md(i, r), t = a.length, n = [...Array(t - i.length).fill(1), ...i], o = Bd(e);
  i.length < t && (o = Yi(o, n), i = qe(o));
  for (var f = 0; f < t; f++)
    i[f] < a[f] && (o = Fd(o, a[f], f), i = qe(o));
  return o;
}
function Fd(e, r, i) {
  return Af(...Array(r).fill(e), i);
}
function Bd(e) {
  return pr([], e);
}
function q(e, r, i, a) {
  function t(n) {
    var o = td(n, r.map(_d));
    return Td(e, r, n), i(o);
  }
  return t.isFactory = !0, t.fn = e, t.dependencies = r.slice().sort(), a && (t.meta = a), t;
}
function Td(e, r, i) {
  var a = r.filter((n) => !Od(n)).every((n) => i[n] !== void 0);
  if (!a) {
    var t = r.filter((n) => i[n] === void 0);
    throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(t.map((n) => '"'.concat(n, '"')).join(", "), "."));
  }
}
function Od(e) {
  return e && e[0] === "?";
}
function _d(e) {
  return e && e[0] === "?" ? e.slice(1) : e;
}
function Br(e, r) {
  if (Sf(e) && Ef(e, r))
    return e[r];
  throw typeof e[r] == "function" && Wi(e, r) ? new Error('Cannot access method "' + r + '" as a property') : new Error('No access to property "' + r + '"');
}
function gn(e, r, i) {
  if (Sf(e) && Ef(e, r))
    return e[r] = i, i;
  throw new Error('No access to property "' + r + '"');
}
function $d(e, r) {
  return r in e;
}
function Ef(e, r) {
  return !e || typeof e != "object" ? !1 : Ee(qd, r) ? !0 : !(r in Object.prototype || r in Function.prototype);
}
function Id(e, r) {
  if (!Wi(e, r))
    throw new Error('No access to method "' + r + '"');
  return e[r];
}
function Wi(e, r) {
  return e == null || typeof e[r] != "function" || Ee(e, r) && Object.getPrototypeOf && r in Object.getPrototypeOf(e) ? !1 : Ee(Rd, r) ? !0 : !(r in Object.prototype || r in Function.prototype);
}
function Sf(e) {
  return typeof e == "object" && e && e.constructor === Object;
}
var qd = {
  length: !0,
  name: !0
}, Rd = {
  toString: !0,
  valueOf: !0,
  toLocaleString: !0
};
class ei {
  constructor(r) {
    this.wrappedObject = r, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).values();
  }
  get(r) {
    return Br(this.wrappedObject, r);
  }
  set(r, i) {
    return gn(this.wrappedObject, r, i), this;
  }
  has(r) {
    return $d(this.wrappedObject, r);
  }
  entries() {
    return Mf(this.keys(), (r) => [r, this.get(r)]);
  }
  forEach(r) {
    for (var i of this.keys())
      r(this.get(i), i, this);
  }
  delete(r) {
    delete this.wrappedObject[r];
  }
  clear() {
    for (var r of this.keys())
      this.delete(r);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
class Cf {
  /**
   * @param {Map} a
   * @param {Map} b
   * @param {Set} bKeys
   */
  constructor(r, i, a) {
    this.a = r, this.b = i, this.bKeys = a, this[Symbol.iterator] = this.entries;
  }
  get(r) {
    return this.bKeys.has(r) ? this.b.get(r) : this.a.get(r);
  }
  set(r, i) {
    return this.bKeys.has(r) ? this.b.set(r, i) : this.a.set(r, i), this;
  }
  has(r) {
    return this.b.has(r) || this.a.has(r);
  }
  keys() {
    return (/* @__PURE__ */ new Set([...this.a.keys(), ...this.b.keys()]))[Symbol.iterator]();
  }
  entries() {
    return Mf(this.keys(), (r) => [r, this.get(r)]);
  }
  forEach(r) {
    for (var i of this.keys())
      r(this.get(i), i, this);
  }
  delete(r) {
    return this.bKeys.has(r) ? this.b.delete(r) : this.a.delete(r);
  }
  clear() {
    this.a.clear(), this.b.clear();
  }
  get size() {
    return [...this.keys()].length;
  }
}
function Mf(e, r) {
  return {
    next: () => {
      var i = e.next();
      return i.done ? i : {
        value: r(i.value),
        done: !1
      };
    }
  };
}
function Gn() {
  return /* @__PURE__ */ new Map();
}
function mn(e) {
  if (!e)
    return Gn();
  if (Ff(e))
    return e;
  if (Ja(e))
    return new ei(e);
  throw new Error("createMap can create maps from objects or Maps");
}
function zd(e) {
  if (e instanceof ei)
    return e.wrappedObject;
  var r = {};
  for (var i of e.keys()) {
    var a = e.get(i);
    gn(r, i, a);
  }
  return r;
}
function Ff(e) {
  return e ? e instanceof Map || e instanceof ei || typeof e.set == "function" && typeof e.get == "function" && typeof e.keys == "function" && typeof e.has == "function" : !1;
}
var Bf = function() {
  return Bf = un.create, un;
}, Pd = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], Ud = /* @__PURE__ */ q("typed", Pd, function(r) {
  var {
    BigNumber: i,
    Complex: a,
    DenseMatrix: t,
    Fraction: n
  } = r, o = Bf();
  return o.clear(), o.addTypes([
    {
      name: "number",
      test: Re
    },
    {
      name: "Complex",
      test: bt
    },
    {
      name: "BigNumber",
      test: ze
    },
    {
      name: "Fraction",
      test: Wn
    },
    {
      name: "Unit",
      test: Yr
    },
    // The following type matches a valid variable name, i.e., an alphanumeric
    // string starting with an alphabetic character. It is used (at least)
    // in the definition of the derivative() function, as the argument telling
    // what to differentiate over must (currently) be a variable.
    {
      name: "identifier",
      test: (f) => Er && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(f)
    },
    {
      name: "string",
      test: Er
    },
    {
      name: "Chain",
      test: cf
    },
    {
      name: "Array",
      test: Ke
    },
    {
      name: "Matrix",
      test: Fe
    },
    {
      name: "DenseMatrix",
      test: Sa
    },
    {
      name: "SparseMatrix",
      test: Lt
    },
    {
      name: "Range",
      test: Zi
    },
    {
      name: "Index",
      test: Wa
    },
    {
      name: "boolean",
      test: kp
    },
    {
      name: "ResultSet",
      test: Hp
    },
    {
      name: "Help",
      test: lf
    },
    {
      name: "function",
      test: Gp
    },
    {
      name: "Date",
      test: Vp
    },
    {
      name: "RegExp",
      test: Zp
    },
    {
      name: "null",
      test: Yp
    },
    {
      name: "undefined",
      test: Xp
    },
    {
      name: "AccessorNode",
      test: Ht
    },
    {
      name: "ArrayNode",
      test: Zr
    },
    {
      name: "AssignmentNode",
      test: Wp
    },
    {
      name: "BlockNode",
      test: Jp
    },
    {
      name: "ConditionalNode",
      test: Qp
    },
    {
      name: "ConstantNode",
      test: Xe
    },
    {
      name: "FunctionNode",
      test: Bt
    },
    {
      name: "FunctionAssignmentNode",
      test: Jn
    },
    {
      name: "IndexNode",
      test: Nn
    },
    {
      name: "Node",
      test: er
    },
    {
      name: "ObjectNode",
      test: Qa
    },
    {
      name: "OperatorNode",
      test: mr
    },
    {
      name: "ParenthesisNode",
      test: wt
    },
    {
      name: "RangeNode",
      test: Kp
    },
    {
      name: "RelationalNode",
      test: jp
    },
    {
      name: "SymbolNode",
      test: yr
    },
    {
      name: "Map",
      test: Ff
    },
    {
      name: "Object",
      test: Ja
    }
    // order 'Object' last, it matches on other classes too
  ]), o.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function(l) {
      if (i || Ni(l), md(l) > 15)
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + l + "). Use function bignumber(x) to convert to BigNumber.");
      return new i(l);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function(l) {
      return a || sa(l), new a(l, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function(l) {
      return a || sa(l), new a(l.toNumber(), 0);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function(l) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function(l) {
      return a || sa(l), new a(l.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function(l) {
      n || Di(l);
      var u = new n(l);
      if (u.valueOf() !== l)
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + l + "). Use function fraction(x) to convert to Fraction.");
      return u;
    }
  }, {
    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
    //  from: 'Fraction',
    //  to: 'number',
    //  convert: function (x) {
    //    return x.valueOf()
    //  }
    // }, {
    from: "string",
    to: "number",
    convert: function(l) {
      var u = Number(l);
      if (isNaN(u))
        throw new Error('Cannot convert "' + l + '" to a number');
      return u;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function(l) {
      i || Ni(l);
      try {
        return new i(l);
      } catch {
        throw new Error('Cannot convert "' + l + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function(l) {
      n || Di(l);
      try {
        return new n(l);
      } catch {
        throw new Error('Cannot convert "' + l + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function(l) {
      a || sa(l);
      try {
        return new a(l);
      } catch {
        throw new Error('Cannot convert "' + l + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function(l) {
      return +l;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function(l) {
      return i || Ni(l), new i(+l);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function(l) {
      return n || Di(l), new n(+l);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function(l) {
      return String(l);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function(l) {
      return t || Ld(), new t(l);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function(l) {
      return l.valueOf();
    }
  }]), o.onMismatch = (f, l, u) => {
    var s = o.createError(f, l, u);
    if (["wrongType", "mismatch"].includes(s.data.category) && l.length === 1 && Wr(l[0]) && // check if the function can be unary:
    u.some((m) => !m.params.includes(","))) {
      var c = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
      throw c.data = s.data, c;
    }
    throw s;
  }, o.onMismatch = (f, l, u) => {
    var s = o.createError(f, l, u);
    if (["wrongType", "mismatch"].includes(s.data.category) && l.length === 1 && Wr(l[0]) && // check if the function can be unary:
    u.some((m) => !m.params.includes(","))) {
      var c = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
      throw c.data = s.data, c;
    }
    throw s;
  }, o;
});
function Ni(e) {
  throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"));
}
function sa(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"));
}
function Ld() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function Di(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."));
}
var kd = "ResultSet", Hd = [], Gd = /* @__PURE__ */ q(kd, Hd, () => {
  function e(r) {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
    this.entries = r || [];
  }
  return e.prototype.type = "ResultSet", e.prototype.isResultSet = !0, e.prototype.valueOf = function() {
    return this.entries;
  }, e.prototype.toString = function() {
    return "[" + this.entries.join(", ") + "]";
  }, e.prototype.toJSON = function() {
    return {
      mathjs: "ResultSet",
      entries: this.entries
    };
  }, e.fromJSON = function(r) {
    return new e(r.entries);
  }, e;
}, {
  isClass: !0
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var cn = 9e15, _t = 1e9, Oi = "0123456789abcdef", Oa = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", _a = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", _i = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -cn,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: cn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Tf, gt, $e = !0, ri = "[DecimalError] ", Tt = ri + "Invalid argument: ", Of = ri + "Precision limit exceeded", _f = ri + "crypto unavailable", $f = "[object Decimal]", Cr = Math.floor, vr = Math.pow, Vd = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Zd = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Yd = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, If = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, tt = 1e7, Be = 7, Xd = 9007199254740991, Wd = Oa.length - 1, $i = _a.length - 1, de = { toStringTag: $f };
de.absoluteValue = de.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Me(e);
};
de.ceil = function() {
  return Me(new this.constructor(this), this.e + 1, 2);
};
de.clampedTo = de.clamp = function(e, r) {
  var i, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(Tt + r);
  return i = a.cmp(e), i < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
de.comparedTo = de.cmp = function(e) {
  var r, i, a, t, n = this, o = n.d, f = (e = new n.constructor(e)).d, l = n.s, u = e.s;
  if (!o || !f)
    return !l || !u ? NaN : l !== u ? l : o === f ? 0 : !o ^ l < 0 ? 1 : -1;
  if (!o[0] || !f[0])
    return o[0] ? l : f[0] ? -u : 0;
  if (l !== u)
    return l;
  if (n.e !== e.e)
    return n.e > e.e ^ l < 0 ? 1 : -1;
  for (a = o.length, t = f.length, r = 0, i = a < t ? a : t; r < i; ++r)
    if (o[r] !== f[r])
      return o[r] > f[r] ^ l < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ l < 0 ? 1 : -1;
};
de.cosine = de.cos = function() {
  var e, r, i = this, a = i.constructor;
  return i.d ? i.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(i.e, i.sd()) + Be, a.rounding = 1, i = Jd(a, Uf(a, i)), a.precision = e, a.rounding = r, Me(gt == 2 || gt == 3 ? i.neg() : i, e, r, !0)) : new a(1) : new a(NaN);
};
de.cubeRoot = de.cbrt = function() {
  var e, r, i, a, t, n, o, f, l, u, s = this, c = s.constructor;
  if (!s.isFinite() || s.isZero())
    return new c(s);
  for ($e = !1, n = s.s * vr(s.s * s, 1 / 3), !n || Math.abs(n) == 1 / 0 ? (i = wr(s.d), e = s.e, (n = (e - i.length + 1) % 3) && (i += n == 1 || n == -2 ? "0" : "00"), n = vr(i, 1 / 3), e = Cr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), n == 1 / 0 ? i = "5e" + e : (i = n.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), a = new c(i), a.s = s.s) : a = new c(n.toString()), o = (e = c.precision) + 3; ; )
    if (f = a, l = f.times(f).times(f), u = l.plus(s), a = sr(u.plus(s).times(f), u.plus(l), o + 2, 1), wr(f.d).slice(0, o) === (i = wr(a.d)).slice(0, o))
      if (i = i.slice(o - 3, o + 1), i == "9999" || !t && i == "4999") {
        if (!t && (Me(f, e + 1, 0), f.times(f).times(f).eq(s))) {
          a = f;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+i || !+i.slice(1) && i.charAt(0) == "5") && (Me(a, e + 1, 1), r = !a.times(a).times(a).eq(s));
        break;
      }
  return $e = !0, Me(a, e, c.rounding, r);
};
de.decimalPlaces = de.dp = function() {
  var e, r = this.d, i = NaN;
  if (r) {
    if (e = r.length - 1, i = (e - Cr(this.e / Be)) * Be, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        i--;
    i < 0 && (i = 0);
  }
  return i;
};
de.dividedBy = de.div = function(e) {
  return sr(this, new this.constructor(e));
};
de.dividedToIntegerBy = de.divToInt = function(e) {
  var r = this, i = r.constructor;
  return Me(sr(r, new i(e), 0, 1, 1), i.precision, i.rounding);
};
de.equals = de.eq = function(e) {
  return this.cmp(e) === 0;
};
de.floor = function() {
  return Me(new this.constructor(this), this.e + 1, 3);
};
de.greaterThan = de.gt = function(e) {
  return this.cmp(e) > 0;
};
de.greaterThanOrEqualTo = de.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
de.hyperbolicCosine = de.cosh = function() {
  var e, r, i, a, t, n = this, o = n.constructor, f = new o(1);
  if (!n.isFinite())
    return new o(n.s ? 1 / 0 : NaN);
  if (n.isZero())
    return f;
  i = o.precision, a = o.rounding, o.precision = i + Math.max(n.e, n.sd()) + 4, o.rounding = 1, t = n.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / ni(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), n = yn(o, 1, n.times(r), new o(1), !0);
  for (var l, u = e, s = new o(8); u--; )
    l = n.times(n), n = f.minus(l.times(s.minus(l.times(s))));
  return Me(n, o.precision = i, o.rounding = a, !0);
};
de.hyperbolicSine = de.sinh = function() {
  var e, r, i, a, t = this, n = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new n(t);
  if (r = n.precision, i = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + 4, n.rounding = 1, a = t.d.length, a < 3)
    t = yn(n, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / ni(5, e)), t = yn(n, 2, t, t, !0);
    for (var o, f = new n(5), l = new n(16), u = new n(20); e--; )
      o = t.times(t), t = t.times(f.plus(o.times(l.times(o).plus(u))));
  }
  return n.precision = r, n.rounding = i, Me(t, r, i, !0);
};
de.hyperbolicTangent = de.tanh = function() {
  var e, r, i = this, a = i.constructor;
  return i.isFinite() ? i.isZero() ? new a(i) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, sr(i.sinh(), i.cosh(), a.precision = e, a.rounding = r)) : new a(i.s);
};
de.inverseCosine = de.acos = function() {
  var e, r = this, i = r.constructor, a = r.abs().cmp(1), t = i.precision, n = i.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? rt(i, t, n) : new i(0) : new i(NaN) : r.isZero() ? rt(i, t + 4, n).times(0.5) : (i.precision = t + 6, i.rounding = 1, r = r.asin(), e = rt(i, t + 4, n).times(0.5), i.precision = t, i.rounding = n, e.minus(r));
};
de.inverseHyperbolicCosine = de.acosh = function() {
  var e, r, i = this, a = i.constructor;
  return i.lte(1) ? new a(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, a.rounding = 1, $e = !1, i = i.times(i).minus(1).sqrt().plus(i), $e = !0, a.precision = e, a.rounding = r, i.ln()) : new a(i);
};
de.inverseHyperbolicSine = de.asinh = function() {
  var e, r, i = this, a = i.constructor;
  return !i.isFinite() || i.isZero() ? new a(i) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, a.rounding = 1, $e = !1, i = i.times(i).plus(1).sqrt().plus(i), $e = !0, a.precision = e, a.rounding = r, i.ln());
};
de.inverseHyperbolicTangent = de.atanh = function() {
  var e, r, i, a, t = this, n = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new n(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = n.precision, r = n.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? Me(new n(t), e, r, !0) : (n.precision = i = a - t.e, t = sr(t.plus(1), new n(1).minus(t), i + e, 1), n.precision = e + 4, n.rounding = 1, t = t.ln(), n.precision = e, n.rounding = r, t.times(0.5))) : new n(NaN);
};
de.inverseSine = de.asin = function() {
  var e, r, i, a, t = this, n = t.constructor;
  return t.isZero() ? new n(t) : (r = t.abs().cmp(1), i = n.precision, a = n.rounding, r !== -1 ? r === 0 ? (e = rt(n, i + 4, a).times(0.5), e.s = t.s, e) : new n(NaN) : (n.precision = i + 6, n.rounding = 1, t = t.div(new n(1).minus(t.times(t)).sqrt().plus(1)).atan(), n.precision = i, n.rounding = a, t.times(2)));
};
de.inverseTangent = de.atan = function() {
  var e, r, i, a, t, n, o, f, l, u = this, s = u.constructor, c = s.precision, m = s.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new s(u);
    if (u.abs().eq(1) && c + 4 <= $i)
      return o = rt(s, c + 4, m).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new s(NaN);
    if (c + 4 <= $i)
      return o = rt(s, c + 4, m).times(0.5), o.s = u.s, o;
  }
  for (s.precision = f = c + 10, s.rounding = 1, i = Math.min(28, f / Be + 2 | 0), e = i; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for ($e = !1, r = Math.ceil(f / Be), a = 1, l = u.times(u), o = new s(u), t = u; e !== -1; )
    if (t = t.times(l), n = o.minus(t.div(a += 2)), t = t.times(l), o = n.plus(t.div(a += 2)), o.d[r] !== void 0)
      for (e = r; o.d[e] === n.d[e] && e--; )
        ;
  return i && (o = o.times(2 << i - 1)), $e = !0, Me(o, s.precision = c, s.rounding = m, !0);
};
de.isFinite = function() {
  return !!this.d;
};
de.isInteger = de.isInt = function() {
  return !!this.d && Cr(this.e / Be) > this.d.length - 2;
};
de.isNaN = function() {
  return !this.s;
};
de.isNegative = de.isNeg = function() {
  return this.s < 0;
};
de.isPositive = de.isPos = function() {
  return this.s > 0;
};
de.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
de.lessThan = de.lt = function(e) {
  return this.cmp(e) < 0;
};
de.lessThanOrEqualTo = de.lte = function(e) {
  return this.cmp(e) < 1;
};
de.logarithm = de.log = function(e) {
  var r, i, a, t, n, o, f, l, u = this, s = u.constructor, c = s.precision, m = s.rounding, v = 5;
  if (e == null)
    e = new s(10), r = !0;
  else {
    if (e = new s(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1))
      return new s(NaN);
    r = e.eq(10);
  }
  if (i = u.d, u.s < 0 || !i || !i[0] || u.eq(1))
    return new s(i && !i[0] ? -1 / 0 : u.s != 1 ? NaN : i ? 0 : 1 / 0);
  if (r)
    if (i.length > 1)
      n = !0;
    else {
      for (t = i[0]; t % 10 === 0; )
        t /= 10;
      n = t !== 1;
    }
  if ($e = !1, f = c + v, o = Ft(u, f), a = r ? $a(s, f + 10) : Ft(e, f), l = sr(o, a, f, 1), Vn(l.d, t = c, m))
    do
      if (f += 10, o = Ft(u, f), a = r ? $a(s, f + 10) : Ft(e, f), l = sr(o, a, f, 1), !n) {
        +wr(l.d).slice(t + 1, t + 15) + 1 == 1e14 && (l = Me(l, c + 1, 0));
        break;
      }
    while (Vn(l.d, t += 10, m));
  return $e = !0, Me(l, c, m);
};
de.minus = de.sub = function(e) {
  var r, i, a, t, n, o, f, l, u, s, c, m, v = this, d = v.constructor;
  if (e = new d(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new d(NaN) : v.d ? e.s = -e.s : e = new d(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, m = e.d, f = d.precision, l = d.rounding, !u[0] || !m[0]) {
    if (m[0])
      e.s = -e.s;
    else if (u[0])
      e = new d(v);
    else
      return new d(l === 3 ? -0 : 0);
    return $e ? Me(e, f, l) : e;
  }
  if (i = Cr(e.e / Be), s = Cr(v.e / Be), u = u.slice(), n = s - i, n) {
    for (c = n < 0, c ? (r = u, n = -n, o = m.length) : (r = m, i = s, o = u.length), a = Math.max(Math.ceil(f / Be), o) + 2, n > a && (n = a, r.length = 1), r.reverse(), a = n; a--; )
      r.push(0);
    r.reverse();
  } else {
    for (a = u.length, o = m.length, c = a < o, c && (o = a), a = 0; a < o; a++)
      if (u[a] != m[a]) {
        c = u[a] < m[a];
        break;
      }
    n = 0;
  }
  for (c && (r = u, u = m, m = r, e.s = -e.s), o = u.length, a = m.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = m.length; a > n; ) {
    if (u[--a] < m[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = tt - 1;
      --u[t], u[a] += tt;
    }
    u[a] -= m[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --i;
  return u[0] ? (e.d = u, e.e = ti(u, i), $e ? Me(e, f, l) : e) : new d(l === 3 ? -0 : 0);
};
de.modulo = de.mod = function(e) {
  var r, i = this, a = i.constructor;
  return e = new a(e), !i.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || i.d && !i.d[0] ? Me(new a(i), a.precision, a.rounding) : ($e = !1, a.modulo == 9 ? (r = sr(i, e.abs(), 0, 3, 1), r.s *= e.s) : r = sr(i, e, 0, a.modulo, 1), r = r.times(e), $e = !0, i.minus(r));
};
de.naturalExponential = de.exp = function() {
  return Ii(this);
};
de.naturalLogarithm = de.ln = function() {
  return Ft(this);
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Me(e);
};
de.plus = de.add = function(e) {
  var r, i, a, t, n, o, f, l, u, s, c = this, m = c.constructor;
  if (e = new m(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new m(NaN) : c.d || (e = new m(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, s = e.d, f = m.precision, l = m.rounding, !u[0] || !s[0])
    return s[0] || (e = new m(c)), $e ? Me(e, f, l) : e;
  if (n = Cr(c.e / Be), a = Cr(e.e / Be), u = u.slice(), t = n - a, t) {
    for (t < 0 ? (i = u, t = -t, o = s.length) : (i = s, a = n, o = u.length), n = Math.ceil(f / Be), o = n > o ? n + 1 : o + 1, t > o && (t = o, i.length = 1), i.reverse(); t--; )
      i.push(0);
    i.reverse();
  }
  for (o = u.length, t = s.length, o - t < 0 && (t = o, i = s, s = u, u = i), r = 0; t; )
    r = (u[--t] = u[t] + s[t] + r) / tt | 0, u[t] %= tt;
  for (r && (u.unshift(r), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = ti(u, a), $e ? Me(e, f, l) : e;
};
de.precision = de.sd = function(e) {
  var r, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Tt + e);
  return i.d ? (r = qf(i.d), e && i.e + 1 > r && (r = i.e + 1)) : r = NaN, r;
};
de.round = function() {
  var e = this, r = e.constructor;
  return Me(new r(e), e.e + 1, r.rounding);
};
de.sine = de.sin = function() {
  var e, r, i = this, a = i.constructor;
  return i.isFinite() ? i.isZero() ? new a(i) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(i.e, i.sd()) + Be, a.rounding = 1, i = Kd(a, Uf(a, i)), a.precision = e, a.rounding = r, Me(gt > 2 ? i.neg() : i, e, r, !0)) : new a(NaN);
};
de.squareRoot = de.sqrt = function() {
  var e, r, i, a, t, n, o = this, f = o.d, l = o.e, u = o.s, s = o.constructor;
  if (u !== 1 || !f || !f[0])
    return new s(!u || u < 0 && (!f || f[0]) ? NaN : f ? o : 1 / 0);
  for ($e = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (r = wr(f), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = Cr((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), a = new s(r)) : a = new s(u.toString()), i = (l = s.precision) + 3; ; )
    if (n = a, a = n.plus(sr(o, n, i + 2, 1)).times(0.5), wr(n.d).slice(0, i) === (r = wr(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (Me(n, l + 1, 0), n.times(n).eq(o))) {
          a = n;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (Me(a, l + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return $e = !0, Me(a, l, s.rounding, e);
};
de.tangent = de.tan = function() {
  var e, r, i = this, a = i.constructor;
  return i.isFinite() ? i.isZero() ? new a(i) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, i = i.sin(), i.s = 1, i = sr(i, new a(1).minus(i.times(i)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, Me(gt == 2 || gt == 4 ? i.neg() : i, e, r, !0)) : new a(NaN);
};
de.times = de.mul = function(e) {
  var r, i, a, t, n, o, f, l, u, s = this, c = s.constructor, m = s.d, v = (e = new c(e)).d;
  if (e.s *= s.s, !m || !m[0] || !v || !v[0])
    return new c(!e.s || m && !m[0] && !v || v && !v[0] && !m ? NaN : !m || !v ? e.s / 0 : e.s * 0);
  for (i = Cr(s.e / Be) + Cr(e.e / Be), l = m.length, u = v.length, l < u && (n = m, m = v, v = n, o = l, l = u, u = o), n = [], o = l + u, a = o; a--; )
    n.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = l + a; t > a; )
      f = n[t] + v[a] * m[t - a - 1] + r, n[t--] = f % tt | 0, r = f / tt | 0;
    n[t] = (n[t] + r) % tt | 0;
  }
  for (; !n[--o]; )
    n.pop();
  return r ? ++i : n.shift(), e.d = n, e.e = ti(n, i), $e ? Me(e, c.precision, c.rounding) : e;
};
de.toBinary = function(e, r) {
  return Ji(this, 2, e, r);
};
de.toDecimalPlaces = de.toDP = function(e, r) {
  var i = this, a = i.constructor;
  return i = new a(i), e === void 0 ? i : (Ur(e, 0, _t), r === void 0 ? r = a.rounding : Ur(r, 0, 8), Me(i, e + i.e + 1, r));
};
de.toExponential = function(e, r) {
  var i, a = this, t = a.constructor;
  return e === void 0 ? i = ct(a, !0) : (Ur(e, 0, _t), r === void 0 ? r = t.rounding : Ur(r, 0, 8), a = Me(new t(a), e + 1, r), i = ct(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + i : i;
};
de.toFixed = function(e, r) {
  var i, a, t = this, n = t.constructor;
  return e === void 0 ? i = ct(t) : (Ur(e, 0, _t), r === void 0 ? r = n.rounding : Ur(r, 0, 8), a = Me(new n(t), e + t.e + 1, r), i = ct(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i;
};
de.toFraction = function(e) {
  var r, i, a, t, n, o, f, l, u, s, c, m, v = this, d = v.d, p = v.constructor;
  if (!d)
    return new p(v);
  if (u = i = new p(1), a = l = new p(0), r = new p(a), n = r.e = qf(d) - v.e - 1, o = n % Be, r.d[0] = vr(10, o < 0 ? Be + o : o), e == null)
    e = n > 0 ? r : u;
  else {
    if (f = new p(e), !f.isInt() || f.lt(u))
      throw Error(Tt + f);
    e = f.gt(r) ? n > 0 ? r : u : f;
  }
  for ($e = !1, f = new p(wr(d)), s = p.precision, p.precision = n = d.length * Be * 2; c = sr(f, r, 0, 1, 1), t = i.plus(c.times(a)), t.cmp(e) != 1; )
    i = a, a = t, t = u, u = l.plus(c.times(t)), l = t, t = r, r = f.minus(c.times(t)), f = t;
  return t = sr(e.minus(i), a, 0, 1, 1), l = l.plus(t.times(u)), i = i.plus(t.times(a)), l.s = u.s = v.s, m = sr(u, a, n, 1).minus(v).abs().cmp(sr(l, i, n, 1).minus(v).abs()) < 1 ? [u, a] : [l, i], p.precision = s, $e = !0, m;
};
de.toHexadecimal = de.toHex = function(e, r) {
  return Ji(this, 16, e, r);
};
de.toNearest = function(e, r) {
  var i = this, a = i.constructor;
  if (i = new a(i), e == null) {
    if (!i.d)
      return i;
    e = new a(1), r = a.rounding;
  } else {
    if (e = new a(e), r === void 0 ? r = a.rounding : Ur(r, 0, 8), !i.d)
      return e.s ? i : e;
    if (!e.d)
      return e.s && (e.s = i.s), e;
  }
  return e.d[0] ? ($e = !1, i = sr(i, e, 0, r, 1).times(e), $e = !0, Me(i)) : (e.s = i.s, i = e), i;
};
de.toNumber = function() {
  return +this;
};
de.toOctal = function(e, r) {
  return Ji(this, 8, e, r);
};
de.toPower = de.pow = function(e) {
  var r, i, a, t, n, o, f = this, l = f.constructor, u = +(e = new l(e));
  if (!f.d || !e.d || !f.d[0] || !e.d[0])
    return new l(vr(+f, u));
  if (f = new l(f), f.eq(1))
    return f;
  if (a = l.precision, n = l.rounding, e.eq(1))
    return Me(f, a, n);
  if (r = Cr(e.e / Be), r >= e.d.length - 1 && (i = u < 0 ? -u : u) <= Xd)
    return t = Rf(l, f, i, a), e.s < 0 ? new l(1).div(t) : Me(t, a, n);
  if (o = f.s, o < 0) {
    if (r < e.d.length - 1)
      return new l(NaN);
    if (e.d[r] & 1 || (o = 1), f.e == 0 && f.d[0] == 1 && f.d.length == 1)
      return f.s = o, f;
  }
  return i = vr(+f, u), r = i == 0 || !isFinite(i) ? Cr(u * (Math.log("0." + wr(f.d)) / Math.LN10 + f.e + 1)) : new l(i + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? o / 0 : 0) : ($e = !1, l.rounding = f.s = 1, i = Math.min(12, (r + "").length), t = Ii(e.times(Ft(f, a + i)), a), t.d && (t = Me(t, a + 5, 1), Vn(t.d, a, n) && (r = a + 10, t = Me(Ii(e.times(Ft(f, r + i)), r), r + 5, 1), +wr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = Me(t, a + 1, 0)))), t.s = o, $e = !0, l.rounding = n, Me(t, a, n));
};
de.toPrecision = function(e, r) {
  var i, a = this, t = a.constructor;
  return e === void 0 ? i = ct(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (Ur(e, 1, _t), r === void 0 ? r = t.rounding : Ur(r, 0, 8), a = Me(new t(a), e, r), i = ct(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + i : i;
};
de.toSignificantDigits = de.toSD = function(e, r) {
  var i = this, a = i.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (Ur(e, 1, _t), r === void 0 ? r = a.rounding : Ur(r, 0, 8)), Me(new a(i), e, r);
};
de.toString = function() {
  var e = this, r = e.constructor, i = ct(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + i : i;
};
de.truncated = de.trunc = function() {
  return Me(new this.constructor(this), this.e + 1, 1);
};
de.valueOf = de.toJSON = function() {
  var e = this, r = e.constructor, i = ct(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + i : i;
};
function wr(e) {
  var r, i, a, t = e.length - 1, n = "", o = e[0];
  if (t > 0) {
    for (n += o, r = 1; r < t; r++)
      a = e[r] + "", i = Be - a.length, i && (n += St(i)), n += a;
    o = e[r], a = o + "", i = Be - a.length, i && (n += St(i));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return n + o;
}
function Ur(e, r, i) {
  if (e !== ~~e || e < r || e > i)
    throw Error(Tt + e);
}
function Vn(e, r, i, a) {
  var t, n, o, f;
  for (n = e[0]; n >= 10; n /= 10)
    --r;
  return --r < 0 ? (r += Be, t = 0) : (t = Math.ceil((r + 1) / Be), r %= Be), n = vr(10, Be - r), f = e[t] % n | 0, a == null ? r < 3 ? (r == 0 ? f = f / 100 | 0 : r == 1 && (f = f / 10 | 0), o = i < 4 && f == 99999 || i > 3 && f == 49999 || f == 5e4 || f == 0) : o = (i < 4 && f + 1 == n || i > 3 && f + 1 == n / 2) && (e[t + 1] / n / 100 | 0) == vr(10, r - 2) - 1 || (f == n / 2 || f == 0) && (e[t + 1] / n / 100 | 0) == 0 : r < 4 ? (r == 0 ? f = f / 1e3 | 0 : r == 1 ? f = f / 100 | 0 : r == 2 && (f = f / 10 | 0), o = (a || i < 4) && f == 9999 || !a && i > 3 && f == 4999) : o = ((a || i < 4) && f + 1 == n || !a && i > 3 && f + 1 == n / 2) && (e[t + 1] / n / 1e3 | 0) == vr(10, r - 3) - 1, o;
}
function Ea(e, r, i) {
  for (var a, t = [0], n, o = 0, f = e.length; o < f; ) {
    for (n = t.length; n--; )
      t[n] *= r;
    for (t[0] += Oi.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > i - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / i | 0, t[a] %= i);
  }
  return t.reverse();
}
function Jd(e, r) {
  var i, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (i = Math.ceil(a / 3), t = (1 / ni(4, i)).toString()) : (i = 16, t = "2.3283064365386962890625e-10"), e.precision += i, r = yn(e, 1, r.times(t), new e(1));
  for (var n = i; n--; ) {
    var o = r.times(r);
    r = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= i, r;
}
var sr = /* @__PURE__ */ function() {
  function e(a, t, n) {
    var o, f = 0, l = a.length;
    for (a = a.slice(); l--; )
      o = a[l] * t + f, a[l] = o % n | 0, f = o / n | 0;
    return f && a.unshift(f), a;
  }
  function r(a, t, n, o) {
    var f, l;
    if (n != o)
      l = n > o ? 1 : -1;
    else
      for (f = l = 0; f < n; f++)
        if (a[f] != t[f]) {
          l = a[f] > t[f] ? 1 : -1;
          break;
        }
    return l;
  }
  function i(a, t, n, o) {
    for (var f = 0; n--; )
      a[n] -= f, f = a[n] < t[n] ? 1 : 0, a[n] = f * o + a[n] - t[n];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, n, o, f, l) {
    var u, s, c, m, v, d, p, x, g, N, h, b, w, y, A, S, D, E, C, F, _ = a.constructor, I = a.s == t.s ? 1 : -1, $ = a.d, T = t.d;
    if (!$ || !$[0] || !T || !T[0])
      return new _(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || ($ ? T && $[0] == T[0] : !T) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          $ && $[0] == 0 || !T ? I * 0 : I / 0
        )
      );
    for (l ? (v = 1, s = a.e - t.e) : (l = tt, v = Be, s = Cr(a.e / v) - Cr(t.e / v)), C = T.length, D = $.length, g = new _(I), N = g.d = [], c = 0; T[c] == ($[c] || 0); c++)
      ;
    if (T[c] > ($[c] || 0) && s--, n == null ? (y = n = _.precision, o = _.rounding) : f ? y = n + (a.e - t.e) + 1 : y = n, y < 0)
      N.push(1), d = !0;
    else {
      if (y = y / v + 2 | 0, c = 0, C == 1) {
        for (m = 0, T = T[0], y++; (c < D || m) && y--; c++)
          A = m * l + ($[c] || 0), N[c] = A / T | 0, m = A % T | 0;
        d = m || c < D;
      } else {
        for (m = l / (T[0] + 1) | 0, m > 1 && (T = e(T, m, l), $ = e($, m, l), C = T.length, D = $.length), S = C, h = $.slice(0, C), b = h.length; b < C; )
          h[b++] = 0;
        F = T.slice(), F.unshift(0), E = T[0], T[1] >= l / 2 && ++E;
        do
          m = 0, u = r(T, h, C, b), u < 0 ? (w = h[0], C != b && (w = w * l + (h[1] || 0)), m = w / E | 0, m > 1 ? (m >= l && (m = l - 1), p = e(T, m, l), x = p.length, b = h.length, u = r(p, h, x, b), u == 1 && (m--, i(p, C < x ? F : T, x, l))) : (m == 0 && (u = m = 1), p = T.slice()), x = p.length, x < b && p.unshift(0), i(h, p, b, l), u == -1 && (b = h.length, u = r(T, h, C, b), u < 1 && (m++, i(h, C < b ? F : T, b, l))), b = h.length) : u === 0 && (m++, h = [0]), N[c++] = m, u && h[0] ? h[b++] = $[S] || 0 : (h = [$[S]], b = 1);
        while ((S++ < D || h[0] !== void 0) && y--);
        d = h[0] !== void 0;
      }
      N[0] || N.shift();
    }
    if (v == 1)
      g.e = s, Tf = d;
    else {
      for (c = 1, m = N[0]; m >= 10; m /= 10)
        c++;
      g.e = c + s * v - 1, Me(g, f ? n + g.e + 1 : n, o, d);
    }
    return g;
  };
}();
function Me(e, r, i, a) {
  var t, n, o, f, l, u, s, c, m, v = e.constructor;
  e:
    if (r != null) {
      if (c = e.d, !c)
        return e;
      for (t = 1, f = c[0]; f >= 10; f /= 10)
        t++;
      if (n = r - t, n < 0)
        n += Be, o = r, s = c[m = 0], l = s / vr(10, t - o - 1) % 10 | 0;
      else if (m = Math.ceil((n + 1) / Be), f = c.length, m >= f)
        if (a) {
          for (; f++ <= m; )
            c.push(0);
          s = l = 0, t = 1, n %= Be, o = n - Be + 1;
        } else
          break e;
      else {
        for (s = f = c[m], t = 1; f >= 10; f /= 10)
          t++;
        n %= Be, o = n - Be + t, l = o < 0 ? 0 : s / vr(10, t - o - 1) % 10 | 0;
      }
      if (a = a || r < 0 || c[m + 1] !== void 0 || (o < 0 ? s : s % vr(10, t - o - 1)), u = i < 4 ? (l || a) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (i == 4 || a || i == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (n > 0 ? o > 0 ? s / vr(10, t - o) : 0 : c[m - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), r < 1 || !c[0])
        return c.length = 0, u ? (r -= e.e + 1, c[0] = vr(10, (Be - r % Be) % Be), e.e = -r || 0) : c[0] = e.e = 0, e;
      if (n == 0 ? (c.length = m, f = 1, m--) : (c.length = m + 1, f = vr(10, Be - n), c[m] = o > 0 ? (s / vr(10, t - o) % vr(10, o) | 0) * f : 0), u)
        for (; ; )
          if (m == 0) {
            for (n = 1, o = c[0]; o >= 10; o /= 10)
              n++;
            for (o = c[0] += f, f = 1; o >= 10; o /= 10)
              f++;
            n != f && (e.e++, c[0] == tt && (c[0] = 1));
            break;
          } else {
            if (c[m] += f, c[m] != tt)
              break;
            c[m--] = 0, f = 1;
          }
      for (n = c.length; c[--n] === 0; )
        c.pop();
    }
  return $e && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function ct(e, r, i) {
  if (!e.isFinite())
    return Pf(e);
  var a, t = e.e, n = wr(e.d), o = n.length;
  return r ? (i && (a = i - o) > 0 ? n = n.charAt(0) + "." + n.slice(1) + St(a) : o > 1 && (n = n.charAt(0) + "." + n.slice(1)), n = n + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (n = "0." + St(-t - 1) + n, i && (a = i - o) > 0 && (n += St(a))) : t >= o ? (n += St(t + 1 - o), i && (a = i - t - 1) > 0 && (n = n + "." + St(a))) : ((a = t + 1) < o && (n = n.slice(0, a) + "." + n.slice(a)), i && (a = i - o) > 0 && (t + 1 === o && (n += "."), n += St(a))), n;
}
function ti(e, r) {
  var i = e[0];
  for (r *= Be; i >= 10; i /= 10)
    r++;
  return r;
}
function $a(e, r, i) {
  if (r > Wd)
    throw $e = !0, i && (e.precision = i), Error(Of);
  return Me(new e(Oa), r, 1, !0);
}
function rt(e, r, i) {
  if (r > $i)
    throw Error(Of);
  return Me(new e(_a), r, i, !0);
}
function qf(e) {
  var r = e.length - 1, i = r * Be + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      i--;
    for (r = e[0]; r >= 10; r /= 10)
      i++;
  }
  return i;
}
function St(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Rf(e, r, i, a) {
  var t, n = new e(1), o = Math.ceil(a / Be + 4);
  for ($e = !1; ; ) {
    if (i % 2 && (n = n.times(r), Yo(n.d, o) && (t = !0)), i = Cr(i / 2), i === 0) {
      i = n.d.length - 1, t && n.d[i] === 0 && ++n.d[i];
      break;
    }
    r = r.times(r), Yo(r.d, o);
  }
  return $e = !0, n;
}
function Zo(e) {
  return e.d[e.d.length - 1] & 1;
}
function zf(e, r, i) {
  for (var a, t = new e(r[0]), n = 0; ++n < r.length; )
    if (a = new e(r[n]), a.s)
      t[i](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Ii(e, r) {
  var i, a, t, n, o, f, l, u = 0, s = 0, c = 0, m = e.constructor, v = m.rounding, d = m.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (r == null ? ($e = !1, l = d) : l = r, f = new m(0.03125); e.e > -2; )
    e = e.times(f), c += 5;
  for (a = Math.log(vr(2, c)) / Math.LN10 * 2 + 5 | 0, l += a, i = n = o = new m(1), m.precision = l; ; ) {
    if (n = Me(n.times(e), l, 1), i = i.times(++s), f = o.plus(sr(n, i, l, 1)), wr(f.d).slice(0, l) === wr(o.d).slice(0, l)) {
      for (t = c; t--; )
        o = Me(o.times(o), l, 1);
      if (r == null)
        if (u < 3 && Vn(o.d, l - a, v, u))
          m.precision = l += 10, i = n = f = new m(1), s = 0, u++;
        else
          return Me(o, m.precision = d, v, $e = !0);
      else
        return m.precision = d, o;
    }
    o = f;
  }
}
function Ft(e, r) {
  var i, a, t, n, o, f, l, u, s, c, m, v = 1, d = 10, p = e, x = p.d, g = p.constructor, N = g.rounding, h = g.precision;
  if (p.s < 0 || !x || !x[0] || !p.e && x[0] == 1 && x.length == 1)
    return new g(x && !x[0] ? -1 / 0 : p.s != 1 ? NaN : x ? 0 : p);
  if (r == null ? ($e = !1, s = h) : s = r, g.precision = s += d, i = wr(x), a = i.charAt(0), Math.abs(n = p.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && i.charAt(1) > 3; )
      p = p.times(e), i = wr(p.d), a = i.charAt(0), v++;
    n = p.e, a > 1 ? (p = new g("0." + i), n++) : p = new g(a + "." + i.slice(1));
  } else
    return u = $a(g, s + 2, h).times(n + ""), p = Ft(new g(a + "." + i.slice(1)), s - d).plus(u), g.precision = h, r == null ? Me(p, h, N, $e = !0) : p;
  for (c = p, l = o = p = sr(p.minus(1), p.plus(1), s, 1), m = Me(p.times(p), s, 1), t = 3; ; ) {
    if (o = Me(o.times(m), s, 1), u = l.plus(sr(o, new g(t), s, 1)), wr(u.d).slice(0, s) === wr(l.d).slice(0, s))
      if (l = l.times(2), n !== 0 && (l = l.plus($a(g, s + 2, h).times(n + ""))), l = sr(l, new g(v), s, 1), r == null)
        if (Vn(l.d, s - d, N, f))
          g.precision = s += d, u = o = p = sr(c.minus(1), c.plus(1), s, 1), m = Me(p.times(p), s, 1), t = f = 1;
        else
          return Me(l, g.precision = h, N, $e = !0);
      else
        return g.precision = h, l;
    l = u, t += 2;
  }
}
function Pf(e) {
  return String(e.s * e.s / 0);
}
function qi(e, r) {
  var i, a, t;
  for ((i = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (i < 0 && (i = a), i += +r.slice(a + 1), r = r.substring(0, a)) : i < 0 && (i = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = i = i - a - 1, e.d = [], a = (i + 1) % Be, i < 0 && (a += Be), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= Be; a < t; )
        e.d.push(+r.slice(a, a += Be));
      r = r.slice(a), a = Be - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), $e && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Qd(e, r) {
  var i, a, t, n, o, f, l, u, s;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), If.test(r))
      return qi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Zd.test(r))
    i = 16, r = r.toLowerCase();
  else if (Vd.test(r))
    i = 2;
  else if (Yd.test(r))
    i = 8;
  else
    throw Error(Tt + r);
  for (n = r.search(/p/i), n > 0 ? (l = +r.slice(n + 1), r = r.substring(2, n)) : r = r.slice(2), n = r.indexOf("."), o = n >= 0, a = e.constructor, o && (r = r.replace(".", ""), f = r.length, n = f - n, t = Rf(a, new a(i), n, n * 2)), u = Ea(r, i, tt), s = u.length - 1, n = s; u[n] === 0; --n)
    u.pop();
  return n < 0 ? new a(e.s * 0) : (e.e = ti(u, s), e.d = u, $e = !1, o && (e = sr(e, t, f * 4)), l && (e = e.times(Math.abs(l) < 54 ? vr(2, l) : Ot.pow(2, l))), $e = !0, e);
}
function Kd(e, r) {
  var i, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : yn(e, 2, r, r);
  i = 1.4 * Math.sqrt(a), i = i > 16 ? 16 : i | 0, r = r.times(1 / ni(5, i)), r = yn(e, 2, r, r);
  for (var t, n = new e(5), o = new e(16), f = new e(20); i--; )
    t = r.times(r), r = r.times(n.plus(t.times(o.times(t).minus(f))));
  return r;
}
function yn(e, r, i, a, t) {
  var n, o, f, l, u = e.precision, s = Math.ceil(u / Be);
  for ($e = !1, l = i.times(i), f = new e(a); ; ) {
    if (o = sr(f.times(l), new e(r++ * r++), u, 1), f = t ? a.plus(o) : a.minus(o), a = sr(o.times(l), new e(r++ * r++), u, 1), o = f.plus(a), o.d[s] !== void 0) {
      for (n = s; o.d[n] === f.d[n] && n--; )
        ;
      if (n == -1)
        break;
    }
    n = f, f = a, a = o, o = n;
  }
  return $e = !0, o.d.length = s + 1, o;
}
function ni(e, r) {
  for (var i = e; --r; )
    i *= e;
  return i;
}
function Uf(e, r) {
  var i, a = r.s < 0, t = rt(e, e.precision, 1), n = t.times(0.5);
  if (r = r.abs(), r.lte(n))
    return gt = a ? 4 : 1, r;
  if (i = r.divToInt(t), i.isZero())
    gt = a ? 3 : 2;
  else {
    if (r = r.minus(i.times(t)), r.lte(n))
      return gt = Zo(i) ? a ? 2 : 3 : a ? 4 : 1, r;
    gt = Zo(i) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Ji(e, r, i, a) {
  var t, n, o, f, l, u, s, c, m, v = e.constructor, d = i !== void 0;
  if (d ? (Ur(i, 1, _t), a === void 0 ? a = v.rounding : Ur(a, 0, 8)) : (i = v.precision, a = v.rounding), !e.isFinite())
    s = Pf(e);
  else {
    for (s = ct(e), o = s.indexOf("."), d ? (t = 2, r == 16 ? i = i * 4 - 3 : r == 8 && (i = i * 3 - 2)) : t = r, o >= 0 && (s = s.replace(".", ""), m = new v(1), m.e = s.length - o, m.d = Ea(ct(m), 10, t), m.e = m.d.length), c = Ea(s, 10, t), n = l = c.length; c[--l] == 0; )
      c.pop();
    if (!c[0])
      s = d ? "0p+0" : "0";
    else {
      if (o < 0 ? n-- : (e = new v(e), e.d = c, e.e = n, e = sr(e, m, i, a, 0, t), c = e.d, n = e.e, u = Tf), o = c[i], f = t / 2, u = u || c[i + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > f || o === f && (a === 4 || u || a === 6 && c[i - 1] & 1 || a === (e.s < 0 ? 8 : 7)), c.length = i, u)
        for (; ++c[--i] > t - 1; )
          c[i] = 0, i || (++n, c.unshift(1));
      for (l = c.length; !c[l - 1]; --l)
        ;
      for (o = 0, s = ""; o < l; o++)
        s += Oi.charAt(c[o]);
      if (d) {
        if (l > 1)
          if (r == 16 || r == 8) {
            for (o = r == 16 ? 4 : 3, --l; l % o; l++)
              s += "0";
            for (c = Ea(s, t, r), l = c.length; !c[l - 1]; --l)
              ;
            for (o = 1, s = "1."; o < l; o++)
              s += Oi.charAt(c[o]);
          } else
            s = s.charAt(0) + "." + s.slice(1);
        s = s + (n < 0 ? "p" : "p+") + n;
      } else if (n < 0) {
        for (; ++n; )
          s = "0" + s;
        s = "0." + s;
      } else if (++n > l)
        for (n -= l; n--; )
          s += "0";
      else
        n < l && (s = s.slice(0, n) + "." + s.slice(n));
    }
    s = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + s;
  }
  return e.s < 0 ? "-" + s : s;
}
function Yo(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function jd(e) {
  return new this(e).abs();
}
function eh(e) {
  return new this(e).acos();
}
function rh(e) {
  return new this(e).acosh();
}
function th(e, r) {
  return new this(e).plus(r);
}
function nh(e) {
  return new this(e).asin();
}
function ah(e) {
  return new this(e).asinh();
}
function ih(e) {
  return new this(e).atan();
}
function oh(e) {
  return new this(e).atanh();
}
function sh(e, r) {
  e = new this(e), r = new this(r);
  var i, a = this.precision, t = this.rounding, n = a + 4;
  return !e.s || !r.s ? i = new this(NaN) : !e.d && !r.d ? (i = rt(this, n, 1).times(r.s > 0 ? 0.25 : 0.75), i.s = e.s) : !r.d || e.isZero() ? (i = r.s < 0 ? rt(this, a, t) : new this(0), i.s = e.s) : !e.d || r.isZero() ? (i = rt(this, n, 1).times(0.5), i.s = e.s) : r.s < 0 ? (this.precision = n, this.rounding = 1, i = this.atan(sr(e, r, n, 1)), r = rt(this, n, 1), this.precision = a, this.rounding = t, i = e.s < 0 ? i.minus(r) : i.plus(r)) : i = this.atan(sr(e, r, n, 1)), i;
}
function uh(e) {
  return new this(e).cbrt();
}
function lh(e) {
  return Me(e = new this(e), e.e + 1, 2);
}
function ch(e, r, i) {
  return new this(e).clamp(r, i);
}
function fh(e) {
  if (!e || typeof e != "object")
    throw Error(ri + "Object expected");
  var r, i, a, t = e.defaults === !0, n = [
    "precision",
    1,
    _t,
    "rounding",
    0,
    8,
    "toExpNeg",
    -cn,
    0,
    "toExpPos",
    0,
    cn,
    "maxE",
    0,
    cn,
    "minE",
    -cn,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < n.length; r += 3)
    if (i = n[r], t && (this[i] = _i[i]), (a = e[i]) !== void 0)
      if (Cr(a) === a && a >= n[r + 1] && a <= n[r + 2])
        this[i] = a;
      else
        throw Error(Tt + i + ": " + a);
  if (i = "crypto", t && (this[i] = _i[i]), (a = e[i]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[i] = !0;
        else
          throw Error(_f);
      else
        this[i] = !1;
    else
      throw Error(Tt + i + ": " + a);
  return this;
}
function mh(e) {
  return new this(e).cos();
}
function vh(e) {
  return new this(e).cosh();
}
function Lf(e) {
  var r, i, a;
  function t(n) {
    var o, f, l, u = this;
    if (!(u instanceof t))
      return new t(n);
    if (u.constructor = t, Xo(n)) {
      u.s = n.s, $e ? !n.d || n.e > t.maxE ? (u.e = NaN, u.d = null) : n.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = n.e, u.d = n.d.slice()) : (u.e = n.e, u.d = n.d ? n.d.slice() : n.d);
      return;
    }
    if (l = typeof n, l === "number") {
      if (n === 0) {
        u.s = 1 / n < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (n < 0 ? (n = -n, u.s = -1) : u.s = 1, n === ~~n && n < 1e7) {
        for (o = 0, f = n; f >= 10; f /= 10)
          o++;
        $e ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [n]) : (u.e = o, u.d = [n]);
        return;
      } else if (n * 0 !== 0) {
        n || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return qi(u, n.toString());
    } else if (l !== "string")
      throw Error(Tt + n);
    return (f = n.charCodeAt(0)) === 45 ? (n = n.slice(1), u.s = -1) : (f === 43 && (n = n.slice(1)), u.s = 1), If.test(n) ? qi(u, n) : Qd(u, n);
  }
  if (t.prototype = de, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = fh, t.clone = Lf, t.isDecimal = Xo, t.abs = jd, t.acos = eh, t.acosh = rh, t.add = th, t.asin = nh, t.asinh = ah, t.atan = ih, t.atanh = oh, t.atan2 = sh, t.cbrt = uh, t.ceil = lh, t.clamp = ch, t.cos = mh, t.cosh = vh, t.div = ph, t.exp = dh, t.floor = hh, t.hypot = gh, t.ln = yh, t.log = bh, t.log10 = wh, t.log2 = xh, t.max = Nh, t.min = Dh, t.mod = Ah, t.mul = Eh, t.pow = Sh, t.random = Ch, t.round = Mh, t.sign = Fh, t.sin = Bh, t.sinh = Th, t.sqrt = Oh, t.sub = _h, t.sum = $h, t.tan = Ih, t.tanh = qh, t.trunc = Rh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(i = a[r++]) || (e[i] = this[i]);
  return t.config(e), t;
}
function ph(e, r) {
  return new this(e).div(r);
}
function dh(e) {
  return new this(e).exp();
}
function hh(e) {
  return Me(e = new this(e), e.e + 1, 3);
}
function gh() {
  var e, r, i = new this(0);
  for ($e = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      i.d && (i = i.plus(r.times(r)));
    else {
      if (r.s)
        return $e = !0, new this(1 / 0);
      i = r;
    }
  return $e = !0, i.sqrt();
}
function Xo(e) {
  return e instanceof Ot || e && e.toStringTag === $f || !1;
}
function yh(e) {
  return new this(e).ln();
}
function bh(e, r) {
  return new this(e).log(r);
}
function xh(e) {
  return new this(e).log(2);
}
function wh(e) {
  return new this(e).log(10);
}
function Nh() {
  return zf(this, arguments, "lt");
}
function Dh() {
  return zf(this, arguments, "gt");
}
function Ah(e, r) {
  return new this(e).mod(r);
}
function Eh(e, r) {
  return new this(e).mul(r);
}
function Sh(e, r) {
  return new this(e).pow(r);
}
function Ch(e) {
  var r, i, a, t, n = 0, o = new this(1), f = [];
  if (e === void 0 ? e = this.precision : Ur(e, 1, _t), a = Math.ceil(e / Be), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); n < a; )
        t = r[n], t >= 429e7 ? r[n] = crypto.getRandomValues(new Uint32Array(1))[0] : f[n++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); n < a; )
        t = r[n] + (r[n + 1] << 8) + (r[n + 2] << 16) + ((r[n + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, n) : (f.push(t % 1e7), n += 4);
      n = a / 4;
    } else
      throw Error(_f);
  else
    for (; n < a; )
      f[n++] = Math.random() * 1e7 | 0;
  for (a = f[--n], e %= Be, a && e && (t = vr(10, Be - e), f[n] = (a / t | 0) * t); f[n] === 0; n--)
    f.pop();
  if (n < 0)
    i = 0, f = [0];
  else {
    for (i = -1; f[0] === 0; i -= Be)
      f.shift();
    for (a = 1, t = f[0]; t >= 10; t /= 10)
      a++;
    a < Be && (i -= Be - a);
  }
  return o.e = i, o.d = f, o;
}
function Mh(e) {
  return Me(e = new this(e), e.e + 1, this.rounding);
}
function Fh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Bh(e) {
  return new this(e).sin();
}
function Th(e) {
  return new this(e).sinh();
}
function Oh(e) {
  return new this(e).sqrt();
}
function _h(e, r) {
  return new this(e).sub(r);
}
function $h() {
  var e = 0, r = arguments, i = new this(r[e]);
  for ($e = !1; i.s && ++e < r.length; )
    i = i.plus(r[e]);
  return $e = !0, Me(i, this.precision, this.rounding);
}
function Ih(e) {
  return new this(e).tan();
}
function qh(e) {
  return new this(e).tanh();
}
function Rh(e) {
  return Me(e = new this(e), e.e + 1, 1);
}
de[Symbol.for("nodejs.util.inspect.custom")] = de.toString;
de[Symbol.toStringTag] = "Decimal";
var Ot = de.constructor = Lf(_i);
Oa = new Ot(Oa);
_a = new Ot(_a);
var zh = "BigNumber", Ph = ["?on", "config"], Uh = /* @__PURE__ */ q(zh, Ph, (e) => {
  var {
    on: r,
    config: i
  } = e, a = Ot.clone({
    precision: i.precision,
    modulo: Ot.EUCLID
  });
  return a.prototype = Object.create(a.prototype), a.prototype.type = "BigNumber", a.prototype.isBigNumber = !0, a.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  }, a.fromJSON = function(t) {
    return new a(t.value);
  }, r && r("config", function(t, n) {
    t.precision !== n.precision && a.config({
      precision: t.precision
    });
  }), a;
}, {
  isClass: !0
}), kf = { exports: {} };
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, r) {
  (function(i) {
    var a = Math.cosh || function(c) {
      return Math.abs(c) < 1e-9 ? 1 - c : (Math.exp(c) + Math.exp(-c)) * 0.5;
    }, t = Math.sinh || function(c) {
      return Math.abs(c) < 1e-9 ? c : (Math.exp(c) - Math.exp(-c)) * 0.5;
    }, n = function(c) {
      var m = Math.PI / 4;
      if (-m > c || c > m)
        return Math.cos(c) - 1;
      var v = c * c;
      return v * (v * (v * (v * (v * (v * (v * (v / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, o = function(c, m) {
      var v = Math.abs(c), d = Math.abs(m);
      return v < 3e3 && d < 3e3 ? Math.sqrt(v * v + d * d) : (v < d ? (v = d, d = c / m) : d = m / c, v * Math.sqrt(1 + d * d));
    }, f = function() {
      throw SyntaxError("Invalid Param");
    };
    function l(c, m) {
      var v = Math.abs(c), d = Math.abs(m);
      return c === 0 ? Math.log(d) : m === 0 ? Math.log(v) : v < 3e3 && d < 3e3 ? Math.log(c * c + m * m) * 0.5 : (c = c / 2, m = m / 2, 0.5 * Math.log(c * c + m * m) + Math.LN2);
    }
    var u = function(c, m) {
      var v = { re: 0, im: 0 };
      if (c == null)
        v.re = v.im = 0;
      else if (m !== void 0)
        v.re = c, v.im = m;
      else
        switch (typeof c) {
          case "object":
            if ("im" in c && "re" in c)
              v.re = c.re, v.im = c.im;
            else if ("abs" in c && "arg" in c) {
              if (!Number.isFinite(c.abs) && Number.isFinite(c.arg))
                return s.INFINITY;
              v.re = c.abs * Math.cos(c.arg), v.im = c.abs * Math.sin(c.arg);
            } else if ("r" in c && "phi" in c) {
              if (!Number.isFinite(c.r) && Number.isFinite(c.phi))
                return s.INFINITY;
              v.re = c.r * Math.cos(c.phi), v.im = c.r * Math.sin(c.phi);
            } else
              c.length === 2 ? (v.re = c[0], v.im = c[1]) : f();
            break;
          case "string":
            v.im = /* void */
            v.re = 0;
            var d = c.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), p = 1, x = 0;
            d === null && f();
            for (var g = 0; g < d.length; g++) {
              var N = d[g];
              N === " " || N === "	" || N === `
` || (N === "+" ? p++ : N === "-" ? x++ : N === "i" || N === "I" ? (p + x === 0 && f(), d[g + 1] !== " " && !isNaN(d[g + 1]) ? (v.im += parseFloat((x % 2 ? "-" : "") + d[g + 1]), g++) : v.im += parseFloat((x % 2 ? "-" : "") + "1"), p = x = 0) : ((p + x === 0 || isNaN(N)) && f(), d[g + 1] === "i" || d[g + 1] === "I" ? (v.im += parseFloat((x % 2 ? "-" : "") + N), g++) : v.re += parseFloat((x % 2 ? "-" : "") + N), p = x = 0));
            }
            p + x > 0 && f();
            break;
          case "number":
            v.im = 0, v.re = c;
            break;
          default:
            f();
        }
      return isNaN(v.re) || isNaN(v.im), v;
    };
    function s(c, m) {
      if (!(this instanceof s))
        return new s(c, m);
      var v = u(c, m);
      this.re = v.re, this.im = v.im;
    }
    s.prototype = {
      re: 0,
      im: 0,
      /**
       * Calculates the sign of a complex number, which is a normalized complex
       *
       * @returns {Complex}
       */
      sign: function() {
        var c = this.abs();
        return new s(
          this.re / c,
          this.im / c
        );
      },
      /**
       * Adds two complex numbers
       *
       * @returns {Complex}
       */
      add: function(c, m) {
        var v = new s(c, m);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(
          this.re + v.re,
          this.im + v.im
        );
      },
      /**
       * Subtracts two complex numbers
       *
       * @returns {Complex}
       */
      sub: function(c, m) {
        var v = new s(c, m);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(
          this.re - v.re,
          this.im - v.im
        );
      },
      /**
       * Multiplies two complex numbers
       *
       * @returns {Complex}
       */
      mul: function(c, m) {
        var v = new s(c, m);
        return this.isInfinite() && v.isZero() || this.isZero() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : v.im === 0 && this.im === 0 ? new s(this.re * v.re, 0) : new s(
          this.re * v.re - this.im * v.im,
          this.re * v.im + this.im * v.re
        );
      },
      /**
       * Divides two complex numbers
       *
       * @returns {Complex}
       */
      div: function(c, m) {
        var v = new s(c, m);
        if (this.isZero() && v.isZero() || this.isInfinite() && v.isInfinite())
          return s.NAN;
        if (this.isInfinite() || v.isZero())
          return s.INFINITY;
        if (this.isZero() || v.isInfinite())
          return s.ZERO;
        c = this.re, m = this.im;
        var d = v.re, p = v.im, x, g;
        return p === 0 ? new s(c / d, m / d) : Math.abs(d) < Math.abs(p) ? (g = d / p, x = d * g + p, new s(
          (c * g + m) / x,
          (m * g - c) / x
        )) : (g = p / d, x = p * g + d, new s(
          (c + m * g) / x,
          (m - c * g) / x
        ));
      },
      /**
       * Calculate the power of two complex numbers
       *
       * @returns {Complex}
       */
      pow: function(c, m) {
        var v = new s(c, m);
        if (c = this.re, m = this.im, v.isZero())
          return s.ONE;
        if (v.im === 0) {
          if (m === 0 && c > 0)
            return new s(Math.pow(c, v.re), 0);
          if (c === 0)
            switch ((v.re % 4 + 4) % 4) {
              case 0:
                return new s(Math.pow(m, v.re), 0);
              case 1:
                return new s(0, Math.pow(m, v.re));
              case 2:
                return new s(-Math.pow(m, v.re), 0);
              case 3:
                return new s(0, -Math.pow(m, v.re));
            }
        }
        if (c === 0 && m === 0 && v.re > 0 && v.im >= 0)
          return s.ZERO;
        var d = Math.atan2(m, c), p = l(c, m);
        return c = Math.exp(v.re * p - v.im * d), m = v.im * p + v.re * d, new s(
          c * Math.cos(m),
          c * Math.sin(m)
        );
      },
      /**
       * Calculate the complex square root
       *
       * @returns {Complex}
       */
      sqrt: function() {
        var c = this.re, m = this.im, v = this.abs(), d, p;
        if (c >= 0) {
          if (m === 0)
            return new s(Math.sqrt(c), 0);
          d = 0.5 * Math.sqrt(2 * (v + c));
        } else
          d = Math.abs(m) / Math.sqrt(2 * (v - c));
        return c <= 0 ? p = 0.5 * Math.sqrt(2 * (v - c)) : p = Math.abs(m) / Math.sqrt(2 * (v + c)), new s(d, m < 0 ? -p : p);
      },
      /**
       * Calculate the complex exponent
       *
       * @returns {Complex}
       */
      exp: function() {
        var c = Math.exp(this.re);
        return this.im, new s(
          c * Math.cos(this.im),
          c * Math.sin(this.im)
        );
      },
      /**
       * Calculate the complex exponent and subtracts one.
       *
       * This may be more accurate than `Complex(x).exp().sub(1)` if
       * `x` is small.
       *
       * @returns {Complex}
       */
      expm1: function() {
        var c = this.re, m = this.im;
        return new s(
          Math.expm1(c) * Math.cos(m) + n(m),
          Math.exp(c) * Math.sin(m)
        );
      },
      /**
       * Calculate the natural log
       *
       * @returns {Complex}
       */
      log: function() {
        var c = this.re, m = this.im;
        return new s(
          l(c, m),
          Math.atan2(m, c)
        );
      },
      /**
       * Calculate the magnitude of the complex number
       *
       * @returns {number}
       */
      abs: function() {
        return o(this.re, this.im);
      },
      /**
       * Calculate the angle of the complex number
       *
       * @returns {number}
       */
      arg: function() {
        return Math.atan2(this.im, this.re);
      },
      /**
       * Calculate the sine of the complex number
       *
       * @returns {Complex}
       */
      sin: function() {
        var c = this.re, m = this.im;
        return new s(
          Math.sin(c) * a(m),
          Math.cos(c) * t(m)
        );
      },
      /**
       * Calculate the cosine
       *
       * @returns {Complex}
       */
      cos: function() {
        var c = this.re, m = this.im;
        return new s(
          Math.cos(c) * a(m),
          -Math.sin(c) * t(m)
        );
      },
      /**
       * Calculate the tangent
       *
       * @returns {Complex}
       */
      tan: function() {
        var c = 2 * this.re, m = 2 * this.im, v = Math.cos(c) + a(m);
        return new s(
          Math.sin(c) / v,
          t(m) / v
        );
      },
      /**
       * Calculate the cotangent
       *
       * @returns {Complex}
       */
      cot: function() {
        var c = 2 * this.re, m = 2 * this.im, v = Math.cos(c) - a(m);
        return new s(
          -Math.sin(c) / v,
          t(m) / v
        );
      },
      /**
       * Calculate the secant
       *
       * @returns {Complex}
       */
      sec: function() {
        var c = this.re, m = this.im, v = 0.5 * a(2 * m) + 0.5 * Math.cos(2 * c);
        return new s(
          Math.cos(c) * a(m) / v,
          Math.sin(c) * t(m) / v
        );
      },
      /**
       * Calculate the cosecans
       *
       * @returns {Complex}
       */
      csc: function() {
        var c = this.re, m = this.im, v = 0.5 * a(2 * m) - 0.5 * Math.cos(2 * c);
        return new s(
          Math.sin(c) * a(m) / v,
          -Math.cos(c) * t(m) / v
        );
      },
      /**
       * Calculate the complex arcus sinus
       *
       * @returns {Complex}
       */
      asin: function() {
        var c = this.re, m = this.im, v = new s(
          m * m - c * c + 1,
          -2 * c * m
        ).sqrt(), d = new s(
          v.re - m,
          v.im + c
        ).log();
        return new s(d.im, -d.re);
      },
      /**
       * Calculate the complex arcus cosinus
       *
       * @returns {Complex}
       */
      acos: function() {
        var c = this.re, m = this.im, v = new s(
          m * m - c * c + 1,
          -2 * c * m
        ).sqrt(), d = new s(
          v.re - m,
          v.im + c
        ).log();
        return new s(Math.PI / 2 - d.im, d.re);
      },
      /**
       * Calculate the complex arcus tangent
       *
       * @returns {Complex}
       */
      atan: function() {
        var c = this.re, m = this.im;
        if (c === 0) {
          if (m === 1)
            return new s(0, 1 / 0);
          if (m === -1)
            return new s(0, -1 / 0);
        }
        var v = c * c + (1 - m) * (1 - m), d = new s(
          (1 - m * m - c * c) / v,
          -2 * c / v
        ).log();
        return new s(-0.5 * d.im, 0.5 * d.re);
      },
      /**
       * Calculate the complex arcus cotangent
       *
       * @returns {Complex}
       */
      acot: function() {
        var c = this.re, m = this.im;
        if (m === 0)
          return new s(Math.atan2(1, c), 0);
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).atan() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).atan();
      },
      /**
       * Calculate the complex arcus secant
       *
       * @returns {Complex}
       */
      asec: function() {
        var c = this.re, m = this.im;
        if (c === 0 && m === 0)
          return new s(0, 1 / 0);
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).acos() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).acos();
      },
      /**
       * Calculate the complex arcus cosecans
       *
       * @returns {Complex}
       */
      acsc: function() {
        var c = this.re, m = this.im;
        if (c === 0 && m === 0)
          return new s(Math.PI / 2, 1 / 0);
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).asin() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).asin();
      },
      /**
       * Calculate the complex sinh
       *
       * @returns {Complex}
       */
      sinh: function() {
        var c = this.re, m = this.im;
        return new s(
          t(c) * Math.cos(m),
          a(c) * Math.sin(m)
        );
      },
      /**
       * Calculate the complex cosh
       *
       * @returns {Complex}
       */
      cosh: function() {
        var c = this.re, m = this.im;
        return new s(
          a(c) * Math.cos(m),
          t(c) * Math.sin(m)
        );
      },
      /**
       * Calculate the complex tanh
       *
       * @returns {Complex}
       */
      tanh: function() {
        var c = 2 * this.re, m = 2 * this.im, v = a(c) + Math.cos(m);
        return new s(
          t(c) / v,
          Math.sin(m) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      coth: function() {
        var c = 2 * this.re, m = 2 * this.im, v = a(c) - Math.cos(m);
        return new s(
          t(c) / v,
          -Math.sin(m) / v
        );
      },
      /**
       * Calculate the complex coth
       *
       * @returns {Complex}
       */
      csch: function() {
        var c = this.re, m = this.im, v = Math.cos(2 * m) - a(2 * c);
        return new s(
          -2 * t(c) * Math.cos(m) / v,
          2 * a(c) * Math.sin(m) / v
        );
      },
      /**
       * Calculate the complex sech
       *
       * @returns {Complex}
       */
      sech: function() {
        var c = this.re, m = this.im, v = Math.cos(2 * m) + a(2 * c);
        return new s(
          2 * a(c) * Math.cos(m) / v,
          -2 * t(c) * Math.sin(m) / v
        );
      },
      /**
       * Calculate the complex asinh
       *
       * @returns {Complex}
       */
      asinh: function() {
        var c = this.im;
        this.im = -this.re, this.re = c;
        var m = this.asin();
        return this.re = -this.im, this.im = c, c = m.re, m.re = -m.im, m.im = c, m;
      },
      /**
       * Calculate the complex acosh
       *
       * @returns {Complex}
       */
      acosh: function() {
        var c = this.acos();
        if (c.im <= 0) {
          var m = c.re;
          c.re = -c.im, c.im = m;
        } else {
          var m = c.im;
          c.im = -c.re, c.re = m;
        }
        return c;
      },
      /**
       * Calculate the complex atanh
       *
       * @returns {Complex}
       */
      atanh: function() {
        var c = this.re, m = this.im, v = c > 1 && m === 0, d = 1 - c, p = 1 + c, x = d * d + m * m, g = x !== 0 ? new s(
          (p * d - m * m) / x,
          (m * d + p * m) / x
        ) : new s(
          c !== -1 ? c / 0 : 0,
          m !== 0 ? m / 0 : 0
        ), N = g.re;
        return g.re = l(g.re, g.im) / 2, g.im = Math.atan2(g.im, N) / 2, v && (g.im = -g.im), g;
      },
      /**
       * Calculate the complex acoth
       *
       * @returns {Complex}
       */
      acoth: function() {
        var c = this.re, m = this.im;
        if (c === 0 && m === 0)
          return new s(0, Math.PI / 2);
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).atanh() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).atanh();
      },
      /**
       * Calculate the complex acsch
       *
       * @returns {Complex}
       */
      acsch: function() {
        var c = this.re, m = this.im;
        if (m === 0)
          return new s(
            c !== 0 ? Math.log(c + Math.sqrt(c * c + 1)) : 1 / 0,
            0
          );
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).asinh() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).asinh();
      },
      /**
       * Calculate the complex asech
       *
       * @returns {Complex}
       */
      asech: function() {
        var c = this.re, m = this.im;
        if (this.isZero())
          return s.INFINITY;
        var v = c * c + m * m;
        return v !== 0 ? new s(
          c / v,
          -m / v
        ).acosh() : new s(
          c !== 0 ? c / 0 : 0,
          m !== 0 ? -m / 0 : 0
        ).acosh();
      },
      /**
       * Calculate the complex inverse 1/z
       *
       * @returns {Complex}
       */
      inverse: function() {
        if (this.isZero())
          return s.INFINITY;
        if (this.isInfinite())
          return s.ZERO;
        var c = this.re, m = this.im, v = c * c + m * m;
        return new s(c / v, -m / v);
      },
      /**
       * Returns the complex conjugate
       *
       * @returns {Complex}
       */
      conjugate: function() {
        return new s(this.re, -this.im);
      },
      /**
       * Gets the negated complex number
       *
       * @returns {Complex}
       */
      neg: function() {
        return new s(-this.re, -this.im);
      },
      /**
       * Ceils the actual complex number
       *
       * @returns {Complex}
       */
      ceil: function(c) {
        return c = Math.pow(10, c || 0), new s(
          Math.ceil(this.re * c) / c,
          Math.ceil(this.im * c) / c
        );
      },
      /**
       * Floors the actual complex number
       *
       * @returns {Complex}
       */
      floor: function(c) {
        return c = Math.pow(10, c || 0), new s(
          Math.floor(this.re * c) / c,
          Math.floor(this.im * c) / c
        );
      },
      /**
       * Ceils the actual complex number
       *
       * @returns {Complex}
       */
      round: function(c) {
        return c = Math.pow(10, c || 0), new s(
          Math.round(this.re * c) / c,
          Math.round(this.im * c) / c
        );
      },
      /**
       * Compares two complex numbers
       *
       * **Note:** new Complex(Infinity).equals(Infinity) === false
       *
       * @returns {boolean}
       */
      equals: function(c, m) {
        var v = new s(c, m);
        return Math.abs(v.re - this.re) <= s.EPSILON && Math.abs(v.im - this.im) <= s.EPSILON;
      },
      /**
       * Clones the actual object
       *
       * @returns {Complex}
       */
      clone: function() {
        return new s(this.re, this.im);
      },
      /**
       * Gets a string of the actual complex number
       *
       * @returns {string}
       */
      toString: function() {
        var c = this.re, m = this.im, v = "";
        return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(c) < s.EPSILON && (c = 0), Math.abs(m) < s.EPSILON && (m = 0), m === 0 ? v + c : (c !== 0 ? (v += c, v += " ", m < 0 ? (m = -m, v += "-") : v += "+", v += " ") : m < 0 && (m = -m, v += "-"), m !== 1 && (v += m), v + "i"));
      },
      /**
       * Returns the actual number as a vector
       *
       * @returns {Array}
       */
      toVector: function() {
        return [this.re, this.im];
      },
      /**
       * Returns the actual real value of the current object
       *
       * @returns {number|null}
       */
      valueOf: function() {
        return this.im === 0 ? this.re : null;
      },
      /**
       * Determines whether a complex number is not on the Riemann sphere.
       *
       * @returns {boolean}
       */
      isNaN: function() {
        return isNaN(this.re) || isNaN(this.im);
      },
      /**
       * Determines whether or not a complex number is at the zero pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isZero: function() {
        return this.im === 0 && this.re === 0;
      },
      /**
       * Determines whether a complex number is not at the infinity pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isFinite: function() {
        return isFinite(this.re) && isFinite(this.im);
      },
      /**
       * Determines whether or not a complex number is at the infinity pole of the
       * Riemann sphere.
       *
       * @returns {boolean}
       */
      isInfinite: function() {
        return !(this.isNaN() || this.isFinite());
      }
    }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-15, Object.defineProperty(s, "__esModule", { value: !0 }), s.default = s, s.Complex = s, e.exports = s;
  })();
})(kf);
var Lh = kf.exports;
const xr = /* @__PURE__ */ Xn(Lh);
var kh = "Complex", Hh = [], Gh = /* @__PURE__ */ q(kh, Hh, () => (Object.defineProperty(xr, "name", {
  value: "Complex"
}), xr.prototype.constructor = xr, xr.prototype.type = "Complex", xr.prototype.isComplex = !0, xr.prototype.toJSON = function() {
  return {
    mathjs: "Complex",
    re: this.re,
    im: this.im
  };
}, xr.prototype.toPolar = function() {
  return {
    r: this.abs(),
    phi: this.arg()
  };
}, xr.prototype.format = function(e) {
  var r = "", i = this.im, a = this.re, t = kt(this.re, e), n = kt(this.im, e), o = Re(e) ? e : e ? e.precision : null;
  if (o !== null) {
    var f = Math.pow(10, -o);
    Math.abs(a / i) < f && (a = 0), Math.abs(i / a) < f && (i = 0);
  }
  return i === 0 ? r = t : a === 0 ? i === 1 ? r = "i" : i === -1 ? r = "-i" : r = n + "i" : i < 0 ? i === -1 ? r = t + " - i" : r = t + " - " + n.substring(1) + "i" : i === 1 ? r = t + " + i" : r = t + " + " + n + "i", r;
}, xr.fromPolar = function(e) {
  switch (arguments.length) {
    case 1: {
      var r = arguments[0];
      if (typeof r == "object")
        return xr(r);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var i = arguments[0], a = arguments[1];
      if (Re(i)) {
        if (Yr(a) && a.hasBase("ANGLE") && (a = a.toNumber("rad")), Re(a))
          return new xr({
            r: i,
            phi: a
          });
        throw new TypeError("Phi is not a number nor an angle unit.");
      } else
        throw new TypeError("Radius r is not a number.");
    }
    default:
      throw new SyntaxError("Wrong number of arguments in function fromPolar");
  }
}, xr.prototype.valueOf = xr.prototype.toString, xr.fromJSON = function(e) {
  return new xr(e);
}, xr.compare = function(e, r) {
  return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0;
}, xr), {
  isClass: !0
}), Hf = { exports: {} };
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, r) {
  (function(i) {
    var a = 2e3, t = {
      s: 1,
      n: 0,
      d: 1
    };
    function n(g, N) {
      if (isNaN(g = parseInt(g, 10)))
        throw p();
      return g * N;
    }
    function o(g, N) {
      if (N === 0)
        throw d();
      var h = Object.create(v.prototype);
      h.s = g < 0 ? -1 : 1, g = g < 0 ? -g : g;
      var b = m(g, N);
      return h.n = g / b, h.d = N / b, h;
    }
    function f(g) {
      for (var N = {}, h = g, b = 2, w = 4; w <= h; ) {
        for (; h % b === 0; )
          h /= b, N[b] = (N[b] || 0) + 1;
        w += 1 + 2 * b++;
      }
      return h !== g ? h > 1 && (N[h] = (N[h] || 0) + 1) : N[g] = (N[g] || 0) + 1, N;
    }
    var l = function(g, N) {
      var h = 0, b = 1, w = 1, y = 0, A = 0, S = 0, D = 1, E = 1, C = 0, F = 1, _ = 1, I = 1, $ = 1e7, T;
      if (g != null)
        if (N !== void 0) {
          if (h = g, b = N, w = h * b, h % 1 !== 0 || b % 1 !== 0)
            throw x();
        } else
          switch (typeof g) {
            case "object": {
              if ("d" in g && "n" in g)
                h = g.n, b = g.d, "s" in g && (h *= g.s);
              else if (0 in g)
                h = g[0], 1 in g && (b = g[1]);
              else
                throw p();
              w = h * b;
              break;
            }
            case "number": {
              if (g < 0 && (w = g, g = -g), g % 1 === 0)
                h = g;
              else if (g > 0) {
                for (g >= 1 && (E = Math.pow(10, Math.floor(1 + Math.log(g) / Math.LN10)), g /= E); F <= $ && I <= $; )
                  if (T = (C + _) / (F + I), g === T) {
                    F + I <= $ ? (h = C + _, b = F + I) : I > F ? (h = _, b = I) : (h = C, b = F);
                    break;
                  } else
                    g > T ? (C += _, F += I) : (_ += C, I += F), F > $ ? (h = _, b = I) : (h = C, b = F);
                h *= E;
              } else
                (isNaN(g) || isNaN(N)) && (b = h = NaN);
              break;
            }
            case "string": {
              if (F = g.match(/\d+|./g), F === null)
                throw p();
              if (F[C] === "-" ? (w = -1, C++) : F[C] === "+" && C++, F.length === C + 1 ? A = n(F[C++], w) : F[C + 1] === "." || F[C] === "." ? (F[C] !== "." && (y = n(F[C++], w)), C++, (C + 1 === F.length || F[C + 1] === "(" && F[C + 3] === ")" || F[C + 1] === "'" && F[C + 3] === "'") && (A = n(F[C], w), D = Math.pow(10, F[C].length), C++), (F[C] === "(" && F[C + 2] === ")" || F[C] === "'" && F[C + 2] === "'") && (S = n(F[C + 1], w), E = Math.pow(10, F[C + 1].length) - 1, C += 3)) : F[C + 1] === "/" || F[C + 1] === ":" ? (A = n(F[C], w), D = n(F[C + 2], 1), C += 3) : F[C + 3] === "/" && F[C + 1] === " " && (y = n(F[C], w), A = n(F[C + 2], w), D = n(F[C + 4], 1), C += 5), F.length <= C) {
                b = D * E, w = /* void */
                h = S + b * y + E * A;
                break;
              }
            }
            default:
              throw p();
          }
      if (b === 0)
        throw d();
      t.s = w < 0 ? -1 : 1, t.n = Math.abs(h), t.d = Math.abs(b);
    };
    function u(g, N, h) {
      for (var b = 1; N > 0; g = g * g % h, N >>= 1)
        N & 1 && (b = b * g % h);
      return b;
    }
    function s(g, N) {
      for (; N % 2 === 0; N /= 2)
        ;
      for (; N % 5 === 0; N /= 5)
        ;
      if (N === 1)
        return 0;
      for (var h = 10 % N, b = 1; h !== 1; b++)
        if (h = h * 10 % N, b > a)
          return 0;
      return b;
    }
    function c(g, N, h) {
      for (var b = 1, w = u(10, h, N), y = 0; y < 300; y++) {
        if (b === w)
          return y;
        b = b * 10 % N, w = w * 10 % N;
      }
      return 0;
    }
    function m(g, N) {
      if (!g)
        return N;
      if (!N)
        return g;
      for (; ; ) {
        if (g %= N, !g)
          return N;
        if (N %= g, !N)
          return g;
      }
    }
    function v(g, N) {
      if (l(g, N), this instanceof v)
        g = m(t.d, t.n), this.s = t.s, this.n = t.n / g, this.d = t.d / g;
      else
        return o(t.s * t.n, t.d);
    }
    var d = function() {
      return new Error("Division by Zero");
    }, p = function() {
      return new Error("Invalid argument");
    }, x = function() {
      return new Error("Parameters must be integer");
    };
    v.prototype = {
      s: 1,
      n: 0,
      d: 1,
      /**
       * Calculates the absolute value
       *
       * Ex: new Fraction(-4).abs() => 4
       **/
      abs: function() {
        return o(this.n, this.d);
      },
      /**
       * Inverts the sign of the current fraction
       *
       * Ex: new Fraction(-4).neg() => 4
       **/
      neg: function() {
        return o(-this.s * this.n, this.d);
      },
      /**
       * Adds two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
       **/
      add: function(g, N) {
        return l(g, N), o(
          this.s * this.n * t.d + t.s * this.d * t.n,
          this.d * t.d
        );
      },
      /**
       * Subtracts two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
       **/
      sub: function(g, N) {
        return l(g, N), o(
          this.s * this.n * t.d - t.s * this.d * t.n,
          this.d * t.d
        );
      },
      /**
       * Multiplies two rational numbers
       *
       * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
       **/
      mul: function(g, N) {
        return l(g, N), o(
          this.s * t.s * this.n * t.n,
          this.d * t.d
        );
      },
      /**
       * Divides two rational numbers
       *
       * Ex: new Fraction("-17.(345)").inverse().div(3)
       **/
      div: function(g, N) {
        return l(g, N), o(
          this.s * t.s * this.n * t.d,
          this.d * t.n
        );
      },
      /**
       * Clones the actual object
       *
       * Ex: new Fraction("-17.(345)").clone()
       **/
      clone: function() {
        return o(this.s * this.n, this.d);
      },
      /**
       * Calculates the modulo of two rational numbers - a more precise fmod
       *
       * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
       **/
      mod: function(g, N) {
        if (isNaN(this.n) || isNaN(this.d))
          return new v(NaN);
        if (g === void 0)
          return o(this.s * this.n % this.d, 1);
        if (l(g, N), t.n === 0 && this.d === 0)
          throw d();
        return o(
          this.s * (t.d * this.n) % (t.n * this.d),
          t.d * this.d
        );
      },
      /**
       * Calculates the fractional gcd of two rational numbers
       *
       * Ex: new Fraction(5,8).gcd(3,7) => 1/56
       */
      gcd: function(g, N) {
        return l(g, N), o(m(t.n, this.n) * m(t.d, this.d), t.d * this.d);
      },
      /**
       * Calculates the fractional lcm of two rational numbers
       *
       * Ex: new Fraction(5,8).lcm(3,7) => 15
       */
      lcm: function(g, N) {
        return l(g, N), t.n === 0 && this.n === 0 ? o(0, 1) : o(t.n * this.n, m(t.n, this.n) * m(t.d, this.d));
      },
      /**
       * Calculates the ceil of a rational number
       *
       * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
       **/
      ceil: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.ceil(g * this.s * this.n / this.d), g);
      },
      /**
       * Calculates the floor of a rational number
       *
       * Ex: new Fraction('4.(3)').floor() => (4 / 1)
       **/
      floor: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.floor(g * this.s * this.n / this.d), g);
      },
      /**
       * Rounds a rational numbers
       *
       * Ex: new Fraction('4.(3)').round() => (4 / 1)
       **/
      round: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.round(g * this.s * this.n / this.d), g);
      },
      /**
       * Gets the inverse of the fraction, means numerator and denominator are exchanged
       *
       * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
       **/
      inverse: function() {
        return o(this.s * this.d, this.n);
      },
      /**
       * Calculates the fraction to some rational exponent, if possible
       *
       * Ex: new Fraction(-1,2).pow(-3) => -8
       */
      pow: function(g, N) {
        if (l(g, N), t.d === 1)
          return t.s < 0 ? o(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : o(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
        if (this.s < 0)
          return null;
        var h = f(this.n), b = f(this.d), w = 1, y = 1;
        for (var A in h)
          if (A !== "1") {
            if (A === "0") {
              w = 0;
              break;
            }
            if (h[A] *= t.n, h[A] % t.d === 0)
              h[A] /= t.d;
            else
              return null;
            w *= Math.pow(A, h[A]);
          }
        for (var A in b)
          if (A !== "1") {
            if (b[A] *= t.n, b[A] % t.d === 0)
              b[A] /= t.d;
            else
              return null;
            y *= Math.pow(A, b[A]);
          }
        return t.s < 0 ? o(y, w) : o(w, y);
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      equals: function(g, N) {
        return l(g, N), this.s * this.n * t.d === t.s * t.n * this.d;
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      compare: function(g, N) {
        l(g, N);
        var h = this.s * this.n * t.d - t.s * t.n * this.d;
        return (0 < h) - (h < 0);
      },
      simplify: function(g) {
        if (isNaN(this.n) || isNaN(this.d))
          return this;
        g = g || 1e-3;
        for (var N = this.abs(), h = N.toContinued(), b = 1; b < h.length; b++) {
          for (var w = o(h[b - 1], 1), y = b - 2; y >= 0; y--)
            w = w.inverse().add(h[y]);
          if (Math.abs(w.sub(N).valueOf()) < g)
            return w.mul(this.s);
        }
        return this;
      },
      /**
       * Check if two rational numbers are divisible
       *
       * Ex: new Fraction(19.6).divisible(1.5);
       */
      divisible: function(g, N) {
        return l(g, N), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
      },
      /**
       * Returns a decimal representation of the fraction
       *
       * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
       **/
      valueOf: function() {
        return this.s * this.n / this.d;
      },
      /**
       * Returns a string-fraction representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
       **/
      toFraction: function(g) {
        var N, h = "", b = this.n, w = this.d;
        return this.s < 0 && (h += "-"), w === 1 ? h += b : (g && (N = Math.floor(b / w)) > 0 && (h += N, h += " ", b %= w), h += b, h += "/", h += w), h;
      },
      /**
       * Returns a latex representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
       **/
      toLatex: function(g) {
        var N, h = "", b = this.n, w = this.d;
        return this.s < 0 && (h += "-"), w === 1 ? h += b : (g && (N = Math.floor(b / w)) > 0 && (h += N, b %= w), h += "\\frac{", h += b, h += "}{", h += w, h += "}"), h;
      },
      /**
       * Returns an array of continued fraction elements
       *
       * Ex: new Fraction("7/8").toContinued() => [0,1,7]
       */
      toContinued: function() {
        var g, N = this.n, h = this.d, b = [];
        if (isNaN(N) || isNaN(h))
          return b;
        do
          b.push(Math.floor(N / h)), g = N % h, N = h, h = g;
        while (N !== 1);
        return b;
      },
      /**
       * Creates a string representation of a fraction with all digits
       *
       * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
       **/
      toString: function(g) {
        var N = this.n, h = this.d;
        if (isNaN(N) || isNaN(h))
          return "NaN";
        g = g || 15;
        var b = s(N, h), w = c(N, h, b), y = this.s < 0 ? "-" : "";
        if (y += N / h | 0, N %= h, N *= 10, N && (y += "."), b) {
          for (var A = w; A--; )
            y += N / h | 0, N %= h, N *= 10;
          y += "(";
          for (var A = b; A--; )
            y += N / h | 0, N %= h, N *= 10;
          y += ")";
        } else
          for (var A = g; N && A--; )
            y += N / h | 0, N %= h, N *= 10;
        return y;
      }
    }, Object.defineProperty(v, "__esModule", { value: !0 }), v.default = v, v.Fraction = v, e.exports = v;
  })();
})(Hf);
var Vh = Hf.exports;
const dt = /* @__PURE__ */ Xn(Vh);
var Zh = "Fraction", Yh = [], Xh = /* @__PURE__ */ q(Zh, Yh, () => (Object.defineProperty(dt, "name", {
  value: "Fraction"
}), dt.prototype.constructor = dt, dt.prototype.type = "Fraction", dt.prototype.isFraction = !0, dt.prototype.toJSON = function() {
  return {
    mathjs: "Fraction",
    n: this.s * this.n,
    d: this.d
  };
}, dt.fromJSON = function(e) {
  return new dt(e);
}, dt), {
  isClass: !0
}), Wh = "Range", Jh = [], Qh = /* @__PURE__ */ q(Wh, Jh, () => {
  function e(r, i, a) {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
    var t = r != null, n = i != null, o = a != null;
    if (t) {
      if (ze(r))
        r = r.toNumber();
      else if (typeof r != "number")
        throw new TypeError("Parameter start must be a number");
    }
    if (n) {
      if (ze(i))
        i = i.toNumber();
      else if (typeof i != "number")
        throw new TypeError("Parameter end must be a number");
    }
    if (o) {
      if (ze(a))
        a = a.toNumber();
      else if (typeof a != "number")
        throw new TypeError("Parameter step must be a number");
    }
    this.start = t ? parseFloat(r) : 0, this.end = n ? parseFloat(i) : 0, this.step = o ? parseFloat(a) : 1;
  }
  return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse = function(r) {
    if (typeof r != "string")
      return null;
    var i = r.split(":"), a = i.map(function(n) {
      return parseFloat(n);
    }), t = a.some(function(n) {
      return isNaN(n);
    });
    if (t)
      return null;
    switch (a.length) {
      case 2:
        return new e(a[0], a[1]);
      case 3:
        return new e(a[0], a[2], a[1]);
      default:
        return null;
    }
  }, e.prototype.clone = function() {
    return new e(this.start, this.end, this.step);
  }, e.prototype.size = function() {
    var r = 0, i = this.start, a = this.step, t = this.end, n = t - i;
    return Mt(a) === Mt(n) ? r = Math.ceil(n / a) : n === 0 && (r = 0), isNaN(r) && (r = 0), [r];
  }, e.prototype.min = function() {
    var r = this.size()[0];
    if (r > 0)
      return this.step > 0 ? this.start : this.start + (r - 1) * this.step;
  }, e.prototype.max = function() {
    var r = this.size()[0];
    if (r > 0)
      return this.step > 0 ? this.start + (r - 1) * this.step : this.start;
  }, e.prototype.forEach = function(r) {
    var i = this.start, a = this.step, t = this.end, n = 0;
    if (a > 0)
      for (; i < t; )
        r(i, [n], this), i += a, n++;
    else if (a < 0)
      for (; i > t; )
        r(i, [n], this), i += a, n++;
  }, e.prototype.map = function(r) {
    var i = [];
    return this.forEach(function(a, t, n) {
      i[t[0]] = r(a, t, n);
    }), i;
  }, e.prototype.toArray = function() {
    var r = [];
    return this.forEach(function(i, a) {
      r[a[0]] = i;
    }), r;
  }, e.prototype.valueOf = function() {
    return this.toArray();
  }, e.prototype.format = function(r) {
    var i = kt(this.start, r);
    return this.step !== 1 && (i += ":" + kt(this.step, r)), i += ":" + kt(this.end, r), i;
  }, e.prototype.toString = function() {
    return this.format();
  }, e.prototype.toJSON = function() {
    return {
      mathjs: "Range",
      start: this.start,
      end: this.end,
      step: this.step
    };
  }, e.fromJSON = function(r) {
    return new e(r.start, r.end, r.step);
  }, e;
}, {
  isClass: !0
}), Kh = "Matrix", jh = [], e0 = /* @__PURE__ */ q(Kh, jh, () => {
  function e() {
    if (!(this instanceof e))
      throw new SyntaxError("Constructor must be called with the new operator");
  }
  return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, e.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, e.prototype.create = function(r, i) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, e.prototype.subset = function(r, i, a) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, e.prototype.get = function(r) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, e.prototype.set = function(r, i, a) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, e.prototype.resize = function(r, i) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, e.prototype.reshape = function(r, i) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, e.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, e.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, e.prototype.map = function(r, i) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, e.prototype.forEach = function(r) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, e.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, e.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, e.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, e.prototype.format = function(r) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, e.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, e;
}, {
  isClass: !0
});
function r0(e) {
  var r = 0, i = 1, a = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null), n = 0, o = function(l) {
    var u = t[l];
    if (u && (delete a[u], delete t[l], --r, i === u)) {
      if (!r) {
        n = 0, i = 1;
        return;
      }
      for (; !Object.prototype.hasOwnProperty.call(a, ++i); )
        ;
    }
  };
  return e = Math.abs(e), {
    hit: function(l) {
      var u = t[l], s = ++n;
      if (a[s] = l, t[l] = s, !u)
        return ++r, r <= e ? void 0 : (l = a[i], o(l), l);
      if (delete a[u], i === u)
        for (; !Object.prototype.hasOwnProperty.call(a, ++i); )
          ;
    },
    delete: o,
    clear: function() {
      r = n = 0, i = 1, a = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
    }
  };
}
function Kn(e) {
  var {
    hasher: r,
    limit: i
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return i = i ?? Number.POSITIVE_INFINITY, r = r ?? JSON.stringify, function a() {
    typeof a.cache != "object" && (a.cache = {
      values: /* @__PURE__ */ new Map(),
      lru: r0(i || Number.POSITIVE_INFINITY)
    });
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var o = r(t);
    if (a.cache.values.has(o))
      return a.cache.lru.hit(o), a.cache.values.get(o);
    var f = e.apply(e, t);
    return a.cache.values.set(o, f), a.cache.values.delete(a.cache.lru.hit(o)), f;
  };
}
function Gf(e) {
  return Object.keys(e.signatures || {}).reduce(function(r, i) {
    var a = (i.match(/,/g) || []).length + 1;
    return Math.max(r, a);
  }, -1);
}
var t0 = "DenseMatrix", n0 = ["Matrix"], a0 = /* @__PURE__ */ q(t0, n0, (e) => {
  var {
    Matrix: r
  } = e;
  function i(s, c) {
    if (!(this instanceof i))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (c && !Er(c))
      throw new Error("Invalid datatype: " + c);
    if (Fe(s))
      s.type === "DenseMatrix" ? (this._data = _e(s._data), this._size = _e(s._size), this._datatype = c || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = c || s._datatype);
    else if (s && Ke(s.data) && Ke(s.size))
      this._data = s.data, this._size = s.size, Ho(this._data, this._size), this._datatype = c || s.datatype;
    else if (Ke(s))
      this._data = u(s), this._size = qe(this._data), Ho(this._data, this._size), this._datatype = c;
    else {
      if (s)
        throw new TypeError("Unsupported type of data (" + ar(s) + ")");
      this._data = [], this._size = [0], this._datatype = c;
    }
  }
  i.prototype = new r(), i.prototype.createDenseMatrix = function(s, c) {
    return new i(s, c);
  }, Object.defineProperty(i, "name", {
    value: "DenseMatrix"
  }), i.prototype.constructor = i, i.prototype.type = "DenseMatrix", i.prototype.isDenseMatrix = !0, i.prototype.getDataType = function() {
    return Hn(this._data, ar);
  }, i.prototype.storage = function() {
    return "dense";
  }, i.prototype.datatype = function() {
    return this._datatype;
  }, i.prototype.create = function(s, c) {
    return new i(s, c);
  }, i.prototype.subset = function(s, c, m) {
    switch (arguments.length) {
      case 1:
        return a(this, s);
      case 2:
      case 3:
        return n(this, s, c, m);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, i.prototype.get = function(s) {
    if (!Ke(s))
      throw new TypeError("Array expected");
    if (s.length !== this._size.length)
      throw new ke(s.length, this._size.length);
    for (var c = 0; c < s.length; c++)
      tr(s[c], this._size[c]);
    for (var m = this._data, v = 0, d = s.length; v < d; v++) {
      var p = s[v];
      tr(p, m.length), m = m[p];
    }
    return m;
  }, i.prototype.set = function(s, c, m) {
    if (!Ke(s))
      throw new TypeError("Array expected");
    if (s.length < this._size.length)
      throw new ke(s.length, this._size.length, "<");
    var v, d, p, x = s.map(function(N) {
      return N + 1;
    });
    l(this, x, m);
    var g = this._data;
    for (v = 0, d = s.length - 1; v < d; v++)
      p = s[v], tr(p, g.length), g = g[p];
    return p = s[s.length - 1], tr(p, g.length), g[p] = c, this;
  };
  function a(s, c) {
    if (!Wa(c))
      throw new TypeError("Invalid index");
    var m = c.isScalar();
    if (m)
      return s.get(c.min());
    var v = c.size();
    if (v.length !== s._size.length)
      throw new ke(v.length, s._size.length);
    for (var d = c.min(), p = c.max(), x = 0, g = s._size.length; x < g; x++)
      tr(d[x], s._size[x]), tr(p[x], s._size[x]);
    return new i(t(s._data, c, v.length, 0), s._datatype);
  }
  function t(s, c, m, v) {
    var d = v === m - 1, p = c.dimension(v);
    return d ? p.map(function(x) {
      return tr(x, s.length), s[x];
    }).valueOf() : p.map(function(x) {
      tr(x, s.length);
      var g = s[x];
      return t(g, c, m, v + 1);
    }).valueOf();
  }
  function n(s, c, m, v) {
    if (!c || c.isIndex !== !0)
      throw new TypeError("Invalid index");
    var d = c.size(), p = c.isScalar(), x;
    if (Fe(m) ? (x = m.size(), m = m.valueOf()) : x = qe(m), p) {
      if (x.length !== 0)
        throw new TypeError("Scalar expected");
      s.set(c.min(), m, v);
    } else {
      if (!Gt(x, d))
        try {
          x.length === 0 ? m = Vo([m], d) : m = Vo(m, d), x = qe(m);
        } catch {
        }
      if (d.length < s._size.length)
        throw new ke(d.length, s._size.length, "<");
      if (x.length < d.length) {
        for (var g = 0, N = 0; d[g] === 1 && x[g] === 1; )
          g++;
        for (; d[g] === 1; )
          N++, g++;
        m = xf(m, d.length, N, x);
      }
      if (!Gt(d, x))
        throw new ke(d, x, ">");
      var h = c.max().map(function(y) {
        return y + 1;
      });
      l(s, h, v);
      var b = d.length, w = 0;
      o(s._data, c, m, b, w);
    }
    return s;
  }
  function o(s, c, m, v, d) {
    var p = d === v - 1, x = c.dimension(d);
    p ? x.forEach(function(g, N) {
      tr(g), s[g] = m[N[0]];
    }) : x.forEach(function(g, N) {
      tr(g), o(s[g], c, m[N[0]], v, d + 1);
    });
  }
  i.prototype.resize = function(s, c, m) {
    if (!Wr(s))
      throw new TypeError("Array or Matrix expected");
    var v = s.valueOf().map((p) => Array.isArray(p) && p.length === 1 ? p[0] : p), d = m ? this.clone() : this;
    return f(d, v, c);
  };
  function f(s, c, m) {
    if (c.length === 0) {
      for (var v = s._data; Ke(v); )
        v = v[0];
      return v;
    }
    return s._size = c.slice(0), s._data = dn(s._data, s._size, m), s;
  }
  i.prototype.reshape = function(s, c) {
    var m = c ? this.clone() : this;
    m._data = Yi(m._data, s);
    var v = m._size.reduce((d, p) => d * p);
    return m._size = Xi(s, v), m;
  };
  function l(s, c, m) {
    for (var v = s._size.slice(0), d = !1; v.length < c.length; )
      v.push(0), d = !0;
    for (var p = 0, x = c.length; p < x; p++)
      c[p] > v[p] && (v[p] = c[p], d = !0);
    d && f(s, v, m);
  }
  i.prototype.clone = function() {
    var s = new i({
      data: _e(this._data),
      size: _e(this._size),
      datatype: this._datatype
    });
    return s;
  }, i.prototype.size = function() {
    return this._size.slice(0);
  }, i.prototype.map = function(s) {
    var c = this, m = Gf(s), v = function x(g, N) {
      return Ke(g) ? g.map(function(h, b) {
        return x(h, N.concat(b));
      }) : m === 1 ? s(g) : m === 2 ? s(g, N) : s(g, N, c);
    }, d = v(this._data, []), p = this._datatype !== void 0 ? Hn(d, ar) : void 0;
    return new i(d, p);
  }, i.prototype.forEach = function(s) {
    var c = this, m = function v(d, p) {
      Ke(d) ? d.forEach(function(x, g) {
        v(x, p.concat(g));
      }) : s(d, p, c);
    };
    m(this._data, []);
  }, i.prototype[Symbol.iterator] = function* () {
    var s = function* c(m, v) {
      if (Ke(m))
        for (var d = 0; d < m.length; d++)
          yield* c(m[d], v.concat(d));
      else
        yield {
          value: m,
          index: v
        };
    };
    yield* s(this._data, []);
  }, i.prototype.rows = function() {
    var s = [], c = this.size();
    if (c.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    var m = this._data;
    for (var v of m)
      s.push(new i([v], this._datatype));
    return s;
  }, i.prototype.columns = function() {
    var s = this, c = [], m = this.size();
    if (m.length !== 2)
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var v = this._data, d = function(g) {
      var N = v.map((h) => [h[g]]);
      c.push(new i(N, s._datatype));
    }, p = 0; p < m[1]; p++)
      d(p);
    return c;
  }, i.prototype.toArray = function() {
    return _e(this._data);
  }, i.prototype.valueOf = function() {
    return this._data;
  }, i.prototype.format = function(s) {
    return Le(this._data, s);
  }, i.prototype.toString = function() {
    return Le(this._data);
  }, i.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, i.prototype.diagonal = function(s) {
    if (s) {
      if (ze(s) && (s = s.toNumber()), !Re(s) || !Se(s))
        throw new TypeError("The parameter k must be an integer number");
    } else
      s = 0;
    for (var c = s > 0 ? s : 0, m = s < 0 ? -s : 0, v = this._size[0], d = this._size[1], p = Math.min(v - m, d - c), x = [], g = 0; g < p; g++)
      x[g] = this._data[g + m][g + c];
    return new i({
      data: x,
      size: [p],
      datatype: this._datatype
    });
  }, i.diagonal = function(s, c, m, v) {
    if (!Ke(s))
      throw new TypeError("Array expected, size parameter");
    if (s.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(A) {
      if (ze(A) && (A = A.toNumber()), !Re(A) || !Se(A) || A < 1)
        throw new Error("Size values must be positive integers");
      return A;
    }), m) {
      if (ze(m) && (m = m.toNumber()), !Re(m) || !Se(m))
        throw new TypeError("The parameter k must be an integer number");
    } else
      m = 0;
    var d = m > 0 ? m : 0, p = m < 0 ? -m : 0, x = s[0], g = s[1], N = Math.min(x - p, g - d), h;
    if (Ke(c)) {
      if (c.length !== N)
        throw new Error("Invalid value array length");
      h = function(S) {
        return c[S];
      };
    } else if (Fe(c)) {
      var b = c.size();
      if (b.length !== 1 || b[0] !== N)
        throw new Error("Invalid matrix length");
      h = function(S) {
        return c.get([S]);
      };
    } else
      h = function() {
        return c;
      };
    v || (v = ze(h(0)) ? h(0).mul(0) : 0);
    var w = [];
    if (s.length > 0) {
      w = dn(w, s, v);
      for (var y = 0; y < N; y++)
        w[y + p][y + d] = h(y);
    }
    return new i({
      data: w,
      size: [x, g]
    });
  }, i.fromJSON = function(s) {
    return new i(s);
  }, i.prototype.swapRows = function(s, c) {
    if (!Re(s) || !Se(s) || !Re(c) || !Se(c))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return tr(s, this._size[0]), tr(c, this._size[0]), i._swapRows(s, c, this._data), this;
  }, i._swapRows = function(s, c, m) {
    var v = m[s];
    m[s] = m[c], m[c] = v;
  };
  function u(s) {
    return Fe(s) ? u(s.valueOf()) : Ke(s) ? s.map(u) : s;
  }
  return i;
}, {
  isClass: !0
}), Wo = "clone", i0 = ["typed"], o0 = /* @__PURE__ */ q(Wo, i0, (e) => {
  var {
    typed: r
  } = e;
  return r(Wo, {
    any: _e
  });
});
function Vf(e) {
  var r = e.length, i = e[0].length, a, t, n = [];
  for (t = 0; t < i; t++) {
    var o = [];
    for (a = 0; a < r; a++)
      o.push(e[a][t]);
    n.push(o);
  }
  return n;
}
function Dn(e) {
  for (var r = 0; r < e.length; r++)
    if (Wr(e[r]))
      return !0;
  return !1;
}
function Nt(e, r) {
  Fe(e) && (e = e.valueOf());
  for (var i = 0, a = e.length; i < a; i++) {
    var t = e[i];
    Array.isArray(t) ? Nt(t, r) : r(t);
  }
}
function He(e, r, i) {
  return e && typeof e.map == "function" ? e.map(function(a) {
    return He(a, r);
  }) : r(e);
}
function ai(e, r, i) {
  var a = Array.isArray(e) ? qe(e) : e.size();
  if (r < 0 || r >= a.length)
    throw new at(r, a.length);
  return Fe(e) ? e.create(Ia(e.valueOf(), r, i)) : Ia(e, r, i);
}
function Ia(e, r, i) {
  var a, t, n, o;
  if (r <= 0)
    if (Array.isArray(e[0])) {
      for (o = Vf(e), t = [], a = 0; a < o.length; a++)
        t[a] = Ia(o[a], r - 1, i);
      return t;
    } else {
      for (n = e[0], a = 1; a < e.length; a++)
        n = i(n, e[a]);
      return n;
    }
  else {
    for (t = [], a = 0; a < e.length; a++)
      t[a] = Ia(e[a], r - 1, i);
    return t;
  }
}
function Jo(e, r, i, a, t, n, o, f, l, u, s) {
  var c = e._values, m = e._index, v = e._ptr, d, p, x, g;
  if (a)
    for (p = v[r], x = v[r + 1], d = p; d < x; d++)
      g = m[d], i[g] !== n ? (i[g] = n, o.push(g), u ? (a[g] = l ? f(c[d], s) : f(s, c[d]), t[g] = n) : a[g] = c[d]) : (a[g] = l ? f(c[d], a[g]) : f(a[g], c[d]), t[g] = n);
  else
    for (p = v[r], x = v[r + 1], d = p; d < x; d++)
      g = m[d], i[g] !== n ? (i[g] = n, o.push(g)) : t[g] = n;
}
var Qo = "isInteger", s0 = ["typed"], u0 = /* @__PURE__ */ q(Qo, s0, (e) => {
  var {
    typed: r
  } = e;
  return r(Qo, {
    number: Se,
    // TODO: what to do with isInteger(add(0.1, 0.2))  ?
    BigNumber: function(a) {
      return a.isInt();
    },
    Fraction: function(a) {
      return a.d === 1 && isFinite(a.n);
    },
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), it = "number", An = "number, number";
function Zf(e) {
  return Math.abs(e);
}
Zf.signature = it;
function Yf(e, r) {
  return e + r;
}
Yf.signature = An;
function Xf(e, r) {
  return e - r;
}
Xf.signature = An;
function Wf(e, r) {
  return e * r;
}
Wf.signature = An;
function Jf(e) {
  return -e;
}
Jf.signature = it;
function Qf(e) {
  return e;
}
Qf.signature = it;
function Ln(e) {
  return ud(e);
}
Ln.signature = it;
function Kf(e) {
  return e * e * e;
}
Kf.signature = it;
function jf(e) {
  return Math.exp(e);
}
jf.signature = it;
function em(e) {
  return ld(e);
}
em.signature = it;
function rm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Parameters in function lcm must be integer numbers");
  if (e === 0 || r === 0)
    return 0;
  for (var i, a = e * r; r !== 0; )
    i = r, r = e % i, e = i;
  return Math.abs(a / e);
}
rm.signature = An;
function l0(e, r) {
  return r ? Math.log(e) / Math.log(r) : Math.log(e);
}
function tm(e) {
  return od(e);
}
tm.signature = it;
function nm(e) {
  return id(e);
}
nm.signature = it;
function Ko(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, i = r < 0;
  if (i && (r = -r), r === 0)
    throw new Error("Root must be non-zero");
  if (e < 0 && Math.abs(r) % 2 !== 1)
    throw new Error("Root must be odd when a is negative.");
  if (e === 0)
    return i ? 1 / 0 : 0;
  if (!isFinite(e))
    return i ? 0 : e;
  var a = Math.pow(Math.abs(e), 1 / r);
  return a = e < 0 ? -a : a, i ? 1 / a : a;
}
function Ri(e) {
  return Mt(e);
}
Ri.signature = it;
function am(e) {
  return e * e;
}
am.signature = it;
function im(e, r) {
  var i, a, t, n = 0, o = 1, f = 1, l = 0;
  if (!Se(e) || !Se(r))
    throw new Error("Parameters in function xgcd must be integer numbers");
  for (; r; )
    a = Math.floor(e / r), t = e - a * r, i = n, n = o - a * n, o = i, i = f, f = l - a * f, l = i, e = r, r = t;
  var u;
  return e < 0 ? u = [-e, -o, -l] : u = [e, e ? o : 0, l], u;
}
im.signature = An;
function om(e, r) {
  return e * e < 1 && r === 1 / 0 || e * e > 1 && r === -1 / 0 ? 0 : Math.pow(e, r);
}
om.signature = An;
function Pn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!Se(r) || r < 0 || r > 15)
    throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
  return parseFloat(pf(e, r));
}
var c0 = "number", En = "number, number";
function sm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function bitAnd");
  return e & r;
}
sm.signature = En;
function um(e) {
  if (!Se(e))
    throw new Error("Integer expected in function bitNot");
  return ~e;
}
um.signature = c0;
function lm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function bitOr");
  return e | r;
}
lm.signature = En;
function cm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function bitXor");
  return e ^ r;
}
cm.signature = En;
function fm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function leftShift");
  return e << r;
}
fm.signature = En;
function mm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function rightArithShift");
  return e >> r;
}
mm.signature = En;
function vm(e, r) {
  if (!Se(e) || !Se(r))
    throw new Error("Integers expected in function rightLogShift");
  return e >>> r;
}
vm.signature = En;
function yt(e, r) {
  if (r < e)
    return 1;
  if (r === e)
    return r;
  var i = r + e >> 1;
  return yt(e, i) * yt(i + 1, r);
}
function pm(e, r) {
  if (!Se(e) || e < 0)
    throw new TypeError("Positive integer value expected in function combinations");
  if (!Se(r) || r < 0)
    throw new TypeError("Positive integer value expected in function combinations");
  if (r > e)
    throw new TypeError("k must be less than or equal to n");
  for (var i = e - r, a = 1, t = r < i ? i + 1 : r + 1, n = 2, o = r < i ? r : i, f = t; f <= e; ++f)
    for (a *= f; n <= o && a % n === 0; )
      a /= n, ++n;
  return n <= o && (a /= yt(n, o)), a;
}
pm.signature = "number, number";
var f0 = Math.PI, m0 = 2 * Math.PI, v0 = Math.E, p0 = 1.618033988749895, d0 = "number", Qi = "number, number";
function dm(e) {
  return !e;
}
dm.signature = d0;
function hm(e, r) {
  return !!(e || r);
}
hm.signature = Qi;
function gm(e, r) {
  return !!e != !!r;
}
gm.signature = Qi;
function ym(e, r) {
  return !!(e && r);
}
ym.signature = Qi;
function qa(e) {
  var r;
  if (Se(e))
    return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : e > 171 ? 1 / 0 : yt(1, e - 1);
  if (e < 0.5)
    return Math.PI / (Math.sin(Math.PI * e) * qa(1 - e));
  if (e >= 171.35)
    return 1 / 0;
  if (e > 85) {
    var i = e * e, a = i * e, t = a * e, n = t * e;
    return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * i) - 139 / (51840 * a) - 571 / (2488320 * t) + 163879 / (209018880 * n) + 5246819 / (75246796800 * n * e));
  }
  --e, r = vn[0];
  for (var o = 1; o < vn.length; ++o)
    r += vn[o] / (e + o);
  var f = e + bm + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(f, e + 0.5) * Math.exp(-f) * r;
}
qa.signature = "number";
var bm = 4.7421875, vn = [0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, 1580887032249125e-19, -21026444172410488e-20, 21743961811521265e-20, -1643181065367639e-19, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22], xm = 0.9189385332046728, h0 = 5, g0 = 7, jo = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5395239384953e-18];
function Ra(e) {
  if (e < 0)
    return NaN;
  if (e === 0)
    return 1 / 0;
  if (!isFinite(e))
    return e;
  if (e < 0.5)
    return Math.log(Math.PI / Math.sin(Math.PI * e)) - Ra(1 - e);
  e = e - 1;
  for (var r = e + h0 + 0.5, i = jo[0], a = g0 - 1; a >= 1; a--)
    i += jo[a] / (e + a);
  return xm + (e + 0.5) * Math.log(r) - r + Math.log(i);
}
Ra.signature = "number";
var Mr = "number";
function wm(e) {
  return pd(e);
}
wm.signature = Mr;
function Nm(e) {
  return Math.atan(1 / e);
}
Nm.signature = Mr;
function Dm(e) {
  return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0;
}
Dm.signature = Mr;
function Am(e) {
  return Math.asin(1 / e);
}
Am.signature = Mr;
function Em(e) {
  var r = 1 / e;
  return Math.log(r + Math.sqrt(r * r + 1));
}
Em.signature = Mr;
function Sm(e) {
  return Math.acos(1 / e);
}
Sm.signature = Mr;
function Cm(e) {
  var r = 1 / e, i = Math.sqrt(r * r - 1);
  return Math.log(i + r);
}
Cm.signature = Mr;
function Mm(e) {
  return dd(e);
}
Mm.signature = Mr;
function Fm(e) {
  return hd(e);
}
Fm.signature = Mr;
function Bm(e) {
  return 1 / Math.tan(e);
}
Bm.signature = Mr;
function Tm(e) {
  var r = Math.exp(2 * e);
  return (r + 1) / (r - 1);
}
Tm.signature = Mr;
function Om(e) {
  return 1 / Math.sin(e);
}
Om.signature = Mr;
function _m(e) {
  return e === 0 ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * Mt(e);
}
_m.signature = Mr;
function $m(e) {
  return 1 / Math.cos(e);
}
$m.signature = Mr;
function Im(e) {
  return 2 / (Math.exp(e) + Math.exp(-e));
}
Im.signature = Mr;
function qm(e) {
  return yd(e);
}
qm.signature = Mr;
var ii = "number";
function Rm(e) {
  return e < 0;
}
Rm.signature = ii;
function zm(e) {
  return e > 0;
}
zm.signature = ii;
function Pm(e) {
  return e === 0;
}
Pm.signature = ii;
function Um(e) {
  return Number.isNaN(e);
}
Um.signature = ii;
var es = "isNegative", y0 = ["typed"], b0 = /* @__PURE__ */ q(es, y0, (e) => {
  var {
    typed: r
  } = e;
  return r(es, {
    number: Rm,
    BigNumber: function(a) {
      return a.isNeg() && !a.isZero() && !a.isNaN();
    },
    Fraction: function(a) {
      return a.s < 0;
    },
    Unit: r.referToSelf((i) => (a) => r.find(i, a.valueType())(a.value)),
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), rs = "isNumeric", x0 = ["typed"], w0 = /* @__PURE__ */ q(rs, x0, (e) => {
  var {
    typed: r
  } = e;
  return r(rs, {
    "number | BigNumber | Fraction | boolean": () => !0,
    "Complex | Unit | string | null | undefined | Node": () => !1,
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), ts = "hasNumericValue", N0 = ["typed", "isNumeric"], D0 = /* @__PURE__ */ q(ts, N0, (e) => {
  var {
    typed: r,
    isNumeric: i
  } = e;
  return r(ts, {
    boolean: () => !0,
    string: function(t) {
      return t.trim().length > 0 && !isNaN(Number(t));
    },
    any: function(t) {
      return i(t);
    }
  });
}), ns = "isPositive", A0 = ["typed"], E0 = /* @__PURE__ */ q(ns, A0, (e) => {
  var {
    typed: r
  } = e;
  return r(ns, {
    number: zm,
    BigNumber: function(a) {
      return !a.isNeg() && !a.isZero() && !a.isNaN();
    },
    Fraction: function(a) {
      return a.s > 0 && a.n > 0;
    },
    Unit: r.referToSelf((i) => (a) => r.find(i, a.valueType())(a.value)),
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), as = "isZero", S0 = ["typed"], C0 = /* @__PURE__ */ q(as, S0, (e) => {
  var {
    typed: r
  } = e;
  return r(as, {
    number: Pm,
    BigNumber: function(a) {
      return a.isZero();
    },
    Complex: function(a) {
      return a.re === 0 && a.im === 0;
    },
    Fraction: function(a) {
      return a.d === 1 && a.n === 0;
    },
    Unit: r.referToSelf((i) => (a) => r.find(i, a.valueType())(a.value)),
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), is = "isNaN", M0 = ["typed"], F0 = /* @__PURE__ */ q(is, M0, (e) => {
  var {
    typed: r
  } = e;
  return r(is, {
    number: Um,
    BigNumber: function(a) {
      return a.isNaN();
    },
    Fraction: function(a) {
      return !1;
    },
    Complex: function(a) {
      return a.isNaN();
    },
    Unit: function(a) {
      return Number.isNaN(a.value);
    },
    "Array | Matrix": function(a) {
      return He(a, Number.isNaN);
    }
  });
}), os = "typeOf", B0 = ["typed"], T0 = /* @__PURE__ */ q(os, B0, (e) => {
  var {
    typed: r
  } = e;
  return r(os, {
    any: ar
  });
});
function Jr(e, r, i) {
  if (i == null)
    return e.eq(r);
  if (e.eq(r))
    return !0;
  if (e.isNaN() || r.isNaN())
    return !1;
  if (e.isFinite() && r.isFinite()) {
    var a = e.minus(r).abs();
    if (a.isZero())
      return !0;
    var t = e.constructor.max(e.abs(), r.abs());
    return a.lte(t.times(i));
  }
  return !1;
}
function O0(e, r, i) {
  return _r(e.re, r.re, i) && _r(e.im, r.im, i);
}
var Sn = /* @__PURE__ */ q("compareUnits", ["typed"], (e) => {
  var {
    typed: r
  } = e;
  return {
    "Unit, Unit": r.referToSelf((i) => (a, t) => {
      if (!a.equalBase(t))
        throw new Error("Cannot compare units with different base");
      return r.find(i, [a.valueType(), t.valueType()])(a.value, t.value);
    })
  };
}), za = "equalScalar", _0 = ["typed", "config"], $0 = /* @__PURE__ */ q(za, _0, (e) => {
  var {
    typed: r,
    config: i
  } = e, a = Sn({
    typed: r
  });
  return r(za, {
    "boolean, boolean": function(n, o) {
      return n === o;
    },
    "number, number": function(n, o) {
      return _r(n, o, i.epsilon);
    },
    "BigNumber, BigNumber": function(n, o) {
      return n.eq(o) || Jr(n, o, i.epsilon);
    },
    "Fraction, Fraction": function(n, o) {
      return n.equals(o);
    },
    "Complex, Complex": function(n, o) {
      return O0(n, o, i.epsilon);
    }
  }, a);
});
q(za, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(za, {
    "number, number": function(t, n) {
      return _r(t, n, i.epsilon);
    }
  });
});
var I0 = "SparseMatrix", q0 = ["typed", "equalScalar", "Matrix"], R0 = /* @__PURE__ */ q(I0, q0, (e) => {
  var {
    typed: r,
    equalScalar: i,
    Matrix: a
  } = e;
  function t(p, x) {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (x && !Er(x))
      throw new Error("Invalid datatype: " + x);
    if (Fe(p))
      n(this, p, x);
    else if (p && Ke(p.index) && Ke(p.ptr) && Ke(p.size))
      this._values = p.values, this._index = p.index, this._ptr = p.ptr, this._size = p.size, this._datatype = x || p.datatype;
    else if (Ke(p))
      o(this, p, x);
    else {
      if (p)
        throw new TypeError("Unsupported type of data (" + ar(p) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = x;
    }
  }
  function n(p, x, g) {
    x.type === "SparseMatrix" ? (p._values = x._values ? _e(x._values) : void 0, p._index = _e(x._index), p._ptr = _e(x._ptr), p._size = _e(x._size), p._datatype = g || x._datatype) : o(p, x.valueOf(), g || x._datatype);
  }
  function o(p, x, g) {
    p._values = [], p._index = [], p._ptr = [], p._datatype = g;
    var N = x.length, h = 0, b = i, w = 0;
    if (Er(g) && (b = r.find(i, [g, g]) || i, w = r.convert(0, g)), N > 0) {
      var y = 0;
      do {
        p._ptr.push(p._index.length);
        for (var A = 0; A < N; A++) {
          var S = x[A];
          if (Ke(S)) {
            if (y === 0 && h < S.length && (h = S.length), y < S.length) {
              var D = S[y];
              b(D, w) || (p._values.push(D), p._index.push(A));
            }
          } else
            y === 0 && h < 1 && (h = 1), b(S, w) || (p._values.push(S), p._index.push(A));
        }
        y++;
      } while (y < h);
    }
    p._ptr.push(p._index.length), p._size = [N, h];
  }
  t.prototype = new a(), t.prototype.createSparseMatrix = function(p, x) {
    return new t(p, x);
  }, Object.defineProperty(t, "name", {
    value: "SparseMatrix"
  }), t.prototype.constructor = t, t.prototype.type = "SparseMatrix", t.prototype.isSparseMatrix = !0, t.prototype.getDataType = function() {
    return Hn(this._values, ar);
  }, t.prototype.storage = function() {
    return "sparse";
  }, t.prototype.datatype = function() {
    return this._datatype;
  }, t.prototype.create = function(p, x) {
    return new t(p, x);
  }, t.prototype.density = function() {
    var p = this._size[0], x = this._size[1];
    return p !== 0 && x !== 0 ? this._index.length / (p * x) : 0;
  }, t.prototype.subset = function(p, x, g) {
    if (!this._values)
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return f(this, p);
      case 2:
      case 3:
        return l(this, p, x, g);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function f(p, x) {
    if (!Wa(x))
      throw new TypeError("Invalid index");
    var g = x.isScalar();
    if (g)
      return p.get(x.min());
    var N = x.size();
    if (N.length !== p._size.length)
      throw new ke(N.length, p._size.length);
    var h, b, w, y, A = x.min(), S = x.max();
    for (h = 0, b = p._size.length; h < b; h++)
      tr(A[h], p._size[h]), tr(S[h], p._size[h]);
    var D = p._values, E = p._index, C = p._ptr, F = x.dimension(0), _ = x.dimension(1), I = [], $ = [];
    F.forEach(function(O, X) {
      $[O] = X[0], I[O] = !0;
    });
    var T = D ? [] : void 0, B = [], L = [];
    return _.forEach(function(O) {
      for (L.push(B.length), w = C[O], y = C[O + 1]; w < y; w++)
        h = E[w], I[h] === !0 && (B.push($[h]), T && T.push(D[w]));
    }), L.push(B.length), new t({
      values: T,
      index: B,
      ptr: L,
      size: N,
      datatype: p._datatype
    });
  }
  function l(p, x, g, N) {
    if (!x || x.isIndex !== !0)
      throw new TypeError("Invalid index");
    var h = x.size(), b = x.isScalar(), w;
    if (Fe(g) ? (w = g.size(), g = g.toArray()) : w = qe(g), b) {
      if (w.length !== 0)
        throw new TypeError("Scalar expected");
      p.set(x.min(), g, N);
    } else {
      if (h.length !== 1 && h.length !== 2)
        throw new ke(h.length, p._size.length, "<");
      if (w.length < h.length) {
        for (var y = 0, A = 0; h[y] === 1 && w[y] === 1; )
          y++;
        for (; h[y] === 1; )
          A++, y++;
        g = xf(g, h.length, A, w);
      }
      if (!Gt(h, w))
        throw new ke(h, w, ">");
      if (h.length === 1) {
        var S = x.dimension(0);
        S.forEach(function(C, F) {
          tr(C), p.set([C, 0], g[F[0]], N);
        });
      } else {
        var D = x.dimension(0), E = x.dimension(1);
        D.forEach(function(C, F) {
          tr(C), E.forEach(function(_, I) {
            tr(_), p.set([C, _], g[F[0]][I[0]], N);
          });
        });
      }
    }
    return p;
  }
  t.prototype.get = function(p) {
    if (!Ke(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new ke(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke get on a Pattern only matrix");
    var x = p[0], g = p[1];
    tr(x, this._size[0]), tr(g, this._size[1]);
    var N = u(x, this._ptr[g], this._ptr[g + 1], this._index);
    return N < this._ptr[g + 1] && this._index[N] === x ? this._values[N] : 0;
  }, t.prototype.set = function(p, x, g) {
    if (!Ke(p))
      throw new TypeError("Array expected");
    if (p.length !== this._size.length)
      throw new ke(p.length, this._size.length);
    if (!this._values)
      throw new Error("Cannot invoke set on a Pattern only matrix");
    var N = p[0], h = p[1], b = this._size[0], w = this._size[1], y = i, A = 0;
    Er(this._datatype) && (y = r.find(i, [this._datatype, this._datatype]) || i, A = r.convert(0, this._datatype)), (N > b - 1 || h > w - 1) && (m(this, Math.max(N + 1, b), Math.max(h + 1, w), g), b = this._size[0], w = this._size[1]), tr(N, b), tr(h, w);
    var S = u(N, this._ptr[h], this._ptr[h + 1], this._index);
    return S < this._ptr[h + 1] && this._index[S] === N ? y(x, A) ? s(S, h, this._values, this._index, this._ptr) : this._values[S] = x : y(x, A) || c(S, N, h, x, this._values, this._index, this._ptr), this;
  };
  function u(p, x, g, N) {
    if (g - x === 0)
      return g;
    for (var h = x; h < g; h++)
      if (N[h] === p)
        return h;
    return x;
  }
  function s(p, x, g, N, h) {
    g.splice(p, 1), N.splice(p, 1);
    for (var b = x + 1; b < h.length; b++)
      h[b]--;
  }
  function c(p, x, g, N, h, b, w) {
    h.splice(p, 0, N), b.splice(p, 0, x);
    for (var y = g + 1; y < w.length; y++)
      w[y]++;
  }
  t.prototype.resize = function(p, x, g) {
    if (!Wr(p))
      throw new TypeError("Array or Matrix expected");
    var N = p.valueOf().map((b) => Array.isArray(b) && b.length === 1 ? b[0] : b);
    if (N.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    N.forEach(function(b) {
      if (!Re(b) || !Se(b) || b < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Le(N) + ")");
    });
    var h = g ? this.clone() : this;
    return m(h, N[0], N[1], x);
  };
  function m(p, x, g, N) {
    var h = N || 0, b = i, w = 0;
    Er(p._datatype) && (b = r.find(i, [p._datatype, p._datatype]) || i, w = r.convert(0, p._datatype), h = r.convert(h, p._datatype));
    var y = !b(h, w), A = p._size[0], S = p._size[1], D, E, C;
    if (g > S) {
      for (E = S; E < g; E++)
        if (p._ptr[E] = p._values.length, y)
          for (D = 0; D < A; D++)
            p._values.push(h), p._index.push(D);
      p._ptr[g] = p._values.length;
    } else
      g < S && (p._ptr.splice(g + 1, S - g), p._values.splice(p._ptr[g], p._values.length), p._index.splice(p._ptr[g], p._index.length));
    if (S = g, x > A) {
      if (y) {
        var F = 0;
        for (E = 0; E < S; E++) {
          p._ptr[E] = p._ptr[E] + F, C = p._ptr[E + 1] + F;
          var _ = 0;
          for (D = A; D < x; D++, _++)
            p._values.splice(C + _, 0, h), p._index.splice(C + _, 0, D), F++;
        }
        p._ptr[S] = p._values.length;
      }
    } else if (x < A) {
      var I = 0;
      for (E = 0; E < S; E++) {
        p._ptr[E] = p._ptr[E] - I;
        var $ = p._ptr[E], T = p._ptr[E + 1] - I;
        for (C = $; C < T; C++)
          D = p._index[C], D > x - 1 && (p._values.splice(C, 1), p._index.splice(C, 1), I++);
      }
      p._ptr[E] = p._values.length;
    }
    return p._size[0] = x, p._size[1] = g, p;
  }
  t.prototype.reshape = function(p, x) {
    if (!Ke(p))
      throw new TypeError("Array expected");
    if (p.length !== 2)
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    p.forEach(function(O) {
      if (!Re(O) || !Se(O) || O <= -2 || O === 0)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Le(p) + ")");
    });
    var g = this._size[0] * this._size[1];
    p = Xi(p, g);
    var N = p[0] * p[1];
    if (g !== N)
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var h = x ? this.clone() : this;
    if (this._size[0] === p[0] && this._size[1] === p[1])
      return h;
    for (var b = [], w = 0; w < h._ptr.length; w++)
      for (var y = 0; y < h._ptr[w + 1] - h._ptr[w]; y++)
        b.push(w);
    for (var A = h._values.slice(), S = h._index.slice(), D = 0; D < h._index.length; D++) {
      var E = S[D], C = b[D], F = E * h._size[1] + C;
      b[D] = F % p[1], S[D] = Math.floor(F / p[1]);
    }
    h._values.length = 0, h._index.length = 0, h._ptr.length = p[1] + 1, h._size = p.slice();
    for (var _ = 0; _ < h._ptr.length; _++)
      h._ptr[_] = 0;
    for (var I = 0; I < A.length; I++) {
      var $ = S[I], T = b[I], B = A[I], L = u($, h._ptr[T], h._ptr[T + 1], h._index);
      c(L, $, T, B, h._values, h._index, h._ptr);
    }
    return h;
  }, t.prototype.clone = function() {
    var p = new t({
      values: this._values ? _e(this._values) : void 0,
      index: _e(this._index),
      ptr: _e(this._ptr),
      size: _e(this._size),
      datatype: this._datatype
    });
    return p;
  }, t.prototype.size = function() {
    return this._size.slice(0);
  }, t.prototype.map = function(p, x) {
    if (!this._values)
      throw new Error("Cannot invoke map on a Pattern only matrix");
    var g = this, N = this._size[0], h = this._size[1], b = Gf(p), w = function(A, S, D) {
      return b === 1 ? p(A) : b === 2 ? p(A, [S, D]) : p(A, [S, D], g);
    };
    return v(this, 0, N - 1, 0, h - 1, w, x);
  };
  function v(p, x, g, N, h, b, w) {
    var y = [], A = [], S = [], D = i, E = 0;
    Er(p._datatype) && (D = r.find(i, [p._datatype, p._datatype]) || i, E = r.convert(0, p._datatype));
    for (var C = function(z, Q, ce) {
      z = b(z, Q, ce), D(z, E) || (y.push(z), A.push(Q));
    }, F = N; F <= h; F++) {
      S.push(y.length);
      var _ = p._ptr[F], I = p._ptr[F + 1];
      if (w)
        for (var $ = _; $ < I; $++) {
          var T = p._index[$];
          T >= x && T <= g && C(p._values[$], T - x, F - N);
        }
      else {
        for (var B = {}, L = _; L < I; L++) {
          var O = p._index[L];
          B[O] = p._values[L];
        }
        for (var X = x; X <= g; X++) {
          var K = X in B ? B[X] : 0;
          C(K, X - x, F - N);
        }
      }
    }
    return S.push(y.length), new t({
      values: y,
      index: A,
      ptr: S,
      size: [g - x + 1, h - N + 1]
    });
  }
  t.prototype.forEach = function(p, x) {
    if (!this._values)
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var g = this, N = this._size[0], h = this._size[1], b = 0; b < h; b++) {
      var w = this._ptr[b], y = this._ptr[b + 1];
      if (x)
        for (var A = w; A < y; A++) {
          var S = this._index[A];
          p(this._values[A], [S, b], g);
        }
      else {
        for (var D = {}, E = w; E < y; E++) {
          var C = this._index[E];
          D[C] = this._values[E];
        }
        for (var F = 0; F < N; F++) {
          var _ = F in D ? D[F] : 0;
          p(_, [F, b], g);
        }
      }
    }
  }, t.prototype[Symbol.iterator] = function* () {
    if (!this._values)
      throw new Error("Cannot iterate a Pattern only matrix");
    for (var p = this._size[1], x = 0; x < p; x++)
      for (var g = this._ptr[x], N = this._ptr[x + 1], h = g; h < N; h++) {
        var b = this._index[h];
        yield {
          value: this._values[h],
          index: [b, x]
        };
      }
  }, t.prototype.toArray = function() {
    return d(this._values, this._index, this._ptr, this._size, !0);
  }, t.prototype.valueOf = function() {
    return d(this._values, this._index, this._ptr, this._size, !1);
  };
  function d(p, x, g, N, h) {
    var b = N[0], w = N[1], y = [], A, S;
    for (A = 0; A < b; A++)
      for (y[A] = [], S = 0; S < w; S++)
        y[A][S] = 0;
    for (S = 0; S < w; S++)
      for (var D = g[S], E = g[S + 1], C = D; C < E; C++)
        A = x[C], y[A][S] = p ? h ? _e(p[C]) : p[C] : 1;
    return y;
  }
  return t.prototype.format = function(p) {
    for (var x = this._size[0], g = this._size[1], N = this.density(), h = "Sparse Matrix [" + Le(x, p) + " x " + Le(g, p) + "] density: " + Le(N, p) + `
`, b = 0; b < g; b++)
      for (var w = this._ptr[b], y = this._ptr[b + 1], A = w; A < y; A++) {
        var S = this._index[A];
        h += `
    (` + Le(S, p) + ", " + Le(b, p) + ") ==> " + (this._values ? Le(this._values[A], p) : "X");
      }
    return h;
  }, t.prototype.toString = function() {
    return Le(this.toArray());
  }, t.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  }, t.prototype.diagonal = function(p) {
    if (p) {
      if (ze(p) && (p = p.toNumber()), !Re(p) || !Se(p))
        throw new TypeError("The parameter k must be an integer number");
    } else
      p = 0;
    var x = p > 0 ? p : 0, g = p < 0 ? -p : 0, N = this._size[0], h = this._size[1], b = Math.min(N - g, h - x), w = [], y = [], A = [];
    A[0] = 0;
    for (var S = x; S < h && w.length < b; S++)
      for (var D = this._ptr[S], E = this._ptr[S + 1], C = D; C < E; C++) {
        var F = this._index[C];
        if (F === S - x + g) {
          w.push(this._values[C]), y[w.length - 1] = F - g;
          break;
        }
      }
    return A.push(w.length), new t({
      values: w,
      index: y,
      ptr: A,
      size: [b, 1]
    });
  }, t.fromJSON = function(p) {
    return new t(p);
  }, t.diagonal = function(p, x, g, N, h) {
    if (!Ke(p))
      throw new TypeError("Array expected, size parameter");
    if (p.length !== 2)
      throw new Error("Only two dimensions matrix are supported");
    if (p = p.map(function(O) {
      if (ze(O) && (O = O.toNumber()), !Re(O) || !Se(O) || O < 1)
        throw new Error("Size values must be positive integers");
      return O;
    }), g) {
      if (ze(g) && (g = g.toNumber()), !Re(g) || !Se(g))
        throw new TypeError("The parameter k must be an integer number");
    } else
      g = 0;
    var b = i, w = 0;
    Er(h) && (b = r.find(i, [h, h]) || i, w = r.convert(0, h));
    var y = g > 0 ? g : 0, A = g < 0 ? -g : 0, S = p[0], D = p[1], E = Math.min(S - A, D - y), C;
    if (Ke(x)) {
      if (x.length !== E)
        throw new Error("Invalid value array length");
      C = function(X) {
        return x[X];
      };
    } else if (Fe(x)) {
      var F = x.size();
      if (F.length !== 1 || F[0] !== E)
        throw new Error("Invalid matrix length");
      C = function(X) {
        return x.get([X]);
      };
    } else
      C = function() {
        return x;
      };
    for (var _ = [], I = [], $ = [], T = 0; T < D; T++) {
      $.push(_.length);
      var B = T - y;
      if (B >= 0 && B < E) {
        var L = C(B);
        b(L, w) || (I.push(B + A), _.push(L));
      }
    }
    return $.push(_.length), new t({
      values: _,
      index: I,
      ptr: $,
      size: [S, D]
    });
  }, t.prototype.swapRows = function(p, x) {
    if (!Re(p) || !Se(p) || !Re(x) || !Se(x))
      throw new Error("Row index must be positive integers");
    if (this._size.length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    return tr(p, this._size[0]), tr(x, this._size[0]), t._swapRows(p, x, this._size[1], this._values, this._index, this._ptr), this;
  }, t._forEachRow = function(p, x, g, N, h) {
    for (var b = N[p], w = N[p + 1], y = b; y < w; y++)
      h(g[y], x[y]);
  }, t._swapRows = function(p, x, g, N, h, b) {
    for (var w = 0; w < g; w++) {
      var y = b[w], A = b[w + 1], S = u(p, y, A, h), D = u(x, y, A, h);
      if (S < A && D < A && h[S] === p && h[D] === x) {
        if (N) {
          var E = N[S];
          N[S] = N[D], N[D] = E;
        }
        continue;
      }
      if (S < A && h[S] === p && (D >= A || h[D] !== x)) {
        var C = N ? N[S] : void 0;
        h.splice(D, 0, x), N && N.splice(D, 0, C), h.splice(D <= S ? S + 1 : S, 1), N && N.splice(D <= S ? S + 1 : S, 1);
        continue;
      }
      if (D < A && h[D] === x && (S >= A || h[S] !== p)) {
        var F = N ? N[D] : void 0;
        h.splice(S, 0, p), N && N.splice(S, 0, F), h.splice(S <= D ? D + 1 : D, 1), N && N.splice(S <= D ? D + 1 : D, 1);
      }
    }
  }, t;
}, {
  isClass: !0
}), z0 = "number", P0 = ["typed"];
function U0(e) {
  var r = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (r) {
    var i = {
      "0b": 2,
      "0o": 8,
      "0x": 16
    }[r[1]], a = r[2], t = r[3];
    return {
      input: e,
      radix: i,
      integerPart: a,
      fractionalPart: t
    };
  } else
    return null;
}
function L0(e) {
  for (var r = parseInt(e.integerPart, e.radix), i = 0, a = 0; a < e.fractionalPart.length; a++) {
    var t = parseInt(e.fractionalPart[a], e.radix);
    i += t / Math.pow(e.radix, a + 1);
  }
  var n = r + i;
  if (isNaN(n))
    throw new SyntaxError('String "' + e.input + '" is not a valid number');
  return n;
}
var k0 = /* @__PURE__ */ q(z0, P0, (e) => {
  var {
    typed: r
  } = e, i = r("number", {
    "": function() {
      return 0;
    },
    number: function(t) {
      return t;
    },
    string: function(t) {
      if (t === "NaN")
        return NaN;
      var n = U0(t);
      if (n)
        return L0(n);
      var o = 0, f = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      f && (o = Number(f[2]), t = f[1]);
      var l = Number(t);
      if (isNaN(l))
        throw new SyntaxError('String "' + t + '" is not a valid number');
      if (f) {
        if (l > 2 ** o - 1)
          throw new SyntaxError('String "'.concat(t, '" is out of range'));
        l >= 2 ** (o - 1) && (l = l - 2 ** o);
      }
      return l;
    },
    BigNumber: function(t) {
      return t.toNumber();
    },
    Fraction: function(t) {
      return t.valueOf();
    },
    Unit: r.referToSelf((a) => (t) => {
      var n = t.clone();
      return n.value = a(t.value), n;
    }),
    null: function(t) {
      return 0;
    },
    "Unit, string | Unit": function(t, n) {
      return t.toNumber(n);
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
  return i.fromJSON = function(a) {
    return parseFloat(a.value);
  }, i;
}), ss = "string", H0 = ["typed"], G0 = /* @__PURE__ */ q(ss, H0, (e) => {
  var {
    typed: r
  } = e;
  return r(ss, {
    "": function() {
      return "";
    },
    number: kt,
    null: function(a) {
      return "null";
    },
    boolean: function(a) {
      return a + "";
    },
    string: function(a) {
      return a;
    },
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i)),
    any: function(a) {
      return String(a);
    }
  });
}), us = "boolean", V0 = ["typed"], Z0 = /* @__PURE__ */ q(us, V0, (e) => {
  var {
    typed: r
  } = e;
  return r(us, {
    "": function() {
      return !1;
    },
    boolean: function(a) {
      return a;
    },
    number: function(a) {
      return !!a;
    },
    null: function(a) {
      return !1;
    },
    BigNumber: function(a) {
      return !a.isZero();
    },
    string: function(a) {
      var t = a.toLowerCase();
      if (t === "true")
        return !0;
      if (t === "false")
        return !1;
      var n = Number(a);
      if (a !== "" && !isNaN(n))
        return !!n;
      throw new Error('Cannot convert "' + a + '" to a boolean');
    },
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Y0 = "bignumber", X0 = ["typed", "BigNumber"], W0 = /* @__PURE__ */ q(Y0, X0, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r("bignumber", {
    "": function() {
      return new i(0);
    },
    number: function(t) {
      return new i(t + "");
    },
    string: function(t) {
      var n = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (n) {
        var o = n[2], f = i(n[1]), l = new i(2).pow(Number(o));
        if (f.gt(l.sub(1)))
          throw new SyntaxError('String "'.concat(t, '" is out of range'));
        var u = new i(2).pow(Number(o) - 1);
        return f.gte(u) ? f.sub(l) : f;
      }
      return new i(t);
    },
    BigNumber: function(t) {
      return t;
    },
    Unit: r.referToSelf((a) => (t) => {
      var n = t.clone();
      return n.value = a(t.value), n;
    }),
    Fraction: function(t) {
      return new i(t.n).div(t.d).times(t.s);
    },
    null: function(t) {
      return new i(0);
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
}), J0 = "complex", Q0 = ["typed", "Complex"], K0 = /* @__PURE__ */ q(J0, Q0, (e) => {
  var {
    typed: r,
    Complex: i
  } = e;
  return r("complex", {
    "": function() {
      return i.ZERO;
    },
    number: function(t) {
      return new i(t, 0);
    },
    "number, number": function(t, n) {
      return new i(t, n);
    },
    // TODO: this signature should be redundant
    "BigNumber, BigNumber": function(t, n) {
      return new i(t.toNumber(), n.toNumber());
    },
    Fraction: function(t) {
      return new i(t.valueOf(), 0);
    },
    Complex: function(t) {
      return t.clone();
    },
    string: function(t) {
      return i(t);
    },
    null: function(t) {
      return i(0);
    },
    Object: function(t) {
      if ("re" in t && "im" in t)
        return new i(t.re, t.im);
      if ("r" in t && "phi" in t || "abs" in t && "arg" in t)
        return new i(t);
      throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
}), j0 = "fraction", eg = ["typed", "Fraction"], rg = /* @__PURE__ */ q(j0, eg, (e) => {
  var {
    typed: r,
    Fraction: i
  } = e;
  return r("fraction", {
    number: function(t) {
      if (!isFinite(t) || isNaN(t))
        throw new Error(t + " cannot be represented as a fraction");
      return new i(t);
    },
    string: function(t) {
      return new i(t);
    },
    "number, number": function(t, n) {
      return new i(t, n);
    },
    null: function(t) {
      return new i(0);
    },
    BigNumber: function(t) {
      return new i(t.toString());
    },
    Fraction: function(t) {
      return t;
    },
    Unit: r.referToSelf((a) => (t) => {
      var n = t.clone();
      return n.value = a(t.value), n;
    }),
    Object: function(t) {
      return new i(t);
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
}), ls = "matrix", tg = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], ng = /* @__PURE__ */ q(ls, tg, (e) => {
  var {
    typed: r,
    Matrix: i,
    DenseMatrix: a,
    SparseMatrix: t
  } = e;
  return r(ls, {
    "": function() {
      return n([]);
    },
    string: function(f) {
      return n([], f);
    },
    "string, string": function(f, l) {
      return n([], f, l);
    },
    Array: function(f) {
      return n(f);
    },
    Matrix: function(f) {
      return n(f, f.storage());
    },
    "Array | Matrix, string": n,
    "Array | Matrix, string, string": n
  });
  function n(o, f, l) {
    if (f === "dense" || f === "default" || f === void 0)
      return new a(o, l);
    if (f === "sparse")
      return new t(o, l);
    throw new TypeError("Unknown matrix type " + JSON.stringify(f) + ".");
  }
}), cs = "matrixFromFunction", ag = ["typed", "matrix", "isZero"], ig = /* @__PURE__ */ q(cs, ag, (e) => {
  var {
    typed: r,
    matrix: i,
    isZero: a
  } = e;
  return r(cs, {
    "Array | Matrix, function, string, string": function(o, f, l, u) {
      return t(o, f, l, u);
    },
    "Array | Matrix, function, string": function(o, f, l) {
      return t(o, f, l);
    },
    "Matrix, function": function(o, f) {
      return t(o, f, "dense");
    },
    "Array, function": function(o, f) {
      return t(o, f, "dense").toArray();
    },
    "Array | Matrix, string, function": function(o, f, l) {
      return t(o, l, f);
    },
    "Array | Matrix, string, string, function": function(o, f, l, u) {
      return t(o, u, f, l);
    }
  });
  function t(n, o, f, l) {
    var u;
    return l !== void 0 ? u = i(f, l) : u = i(f), u.resize(n), u.forEach(function(s, c) {
      var m = o(c);
      a(m) || u.set(c, m);
    }), u;
  }
}), fs = "matrixFromRows", og = ["typed", "matrix", "flatten", "size"], sg = /* @__PURE__ */ q(fs, og, (e) => {
  var {
    typed: r,
    matrix: i,
    flatten: a,
    size: t
  } = e;
  return r(fs, {
    "...Array": function(l) {
      return n(l);
    },
    "...Matrix": function(l) {
      return i(n(l.map((u) => u.toArray())));
    }
    // TODO implement this properly for SparseMatrix
  });
  function n(f) {
    if (f.length === 0)
      throw new TypeError("At least one row is needed to construct a matrix.");
    var l = o(f[0]), u = [];
    for (var s of f) {
      var c = o(s);
      if (c !== l)
        throw new TypeError("The vectors had different length: " + (l | 0) + " ≠ " + (c | 0));
      u.push(a(s));
    }
    return u;
  }
  function o(f) {
    var l = t(f);
    if (l.length === 1)
      return l[0];
    if (l.length === 2) {
      if (l[0] === 1)
        return l[1];
      if (l[1] === 1)
        return l[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), ms = "matrixFromColumns", ug = ["typed", "matrix", "flatten", "size"], lg = /* @__PURE__ */ q(ms, ug, (e) => {
  var {
    typed: r,
    matrix: i,
    flatten: a,
    size: t
  } = e;
  return r(ms, {
    "...Array": function(l) {
      return n(l);
    },
    "...Matrix": function(l) {
      return i(n(l.map((u) => u.toArray())));
    }
    // TODO implement this properly for SparseMatrix
  });
  function n(f) {
    if (f.length === 0)
      throw new TypeError("At least one column is needed to construct a matrix.");
    for (var l = o(f[0]), u = [], s = 0; s < l; s++)
      u[s] = [];
    for (var c of f) {
      var m = o(c);
      if (m !== l)
        throw new TypeError("The vectors had different length: " + (l | 0) + " ≠ " + (m | 0));
      for (var v = a(c), d = 0; d < l; d++)
        u[d].push(v[d]);
    }
    return u;
  }
  function o(f) {
    var l = t(f);
    if (l.length === 1)
      return l[0];
    if (l.length === 2) {
      if (l[0] === 1)
        return l[1];
      if (l[1] === 1)
        return l[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), vs = "splitUnit", cg = ["typed"], fg = /* @__PURE__ */ q(vs, cg, (e) => {
  var {
    typed: r
  } = e;
  return r(vs, {
    "Unit, Array": function(a, t) {
      return a.splitUnit(t);
    }
  });
}), ps = "unaryMinus", mg = ["typed"], vg = /* @__PURE__ */ q(ps, mg, (e) => {
  var {
    typed: r
  } = e;
  return r(ps, {
    number: Jf,
    "Complex | BigNumber | Fraction": (i) => i.neg(),
    Unit: r.referToSelf((i) => (a) => {
      var t = a.clone();
      return t.value = r.find(i, t.valueType())(a.value), t;
    }),
    // deep map collection, skip zeros since unaryMinus(0) = 0
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
    // TODO: add support for string
  });
}), ds = "unaryPlus", pg = ["typed", "config", "BigNumber"], dg = /* @__PURE__ */ q(ds, pg, (e) => {
  var {
    typed: r,
    config: i,
    BigNumber: a
  } = e;
  return r(ds, {
    number: Qf,
    Complex: function(n) {
      return n;
    },
    BigNumber: function(n) {
      return n;
    },
    Fraction: function(n) {
      return n;
    },
    Unit: function(n) {
      return n.clone();
    },
    // deep map collection, skip zeros since unaryPlus(0) = 0
    "Array | Matrix": r.referToSelf((t) => (n) => He(n, t)),
    "boolean | string": function(n) {
      return i.number === "BigNumber" ? new a(+n) : +n;
    }
  });
}), hs = "abs", hg = ["typed"], gg = /* @__PURE__ */ q(hs, hg, (e) => {
  var {
    typed: r
  } = e;
  return r(hs, {
    number: Zf,
    "Complex | BigNumber | Fraction | Unit": (i) => i.abs(),
    // deep map collection, skip zeros since abs(0) = 0
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), gs = "apply", yg = ["typed", "isInteger"], Ki = /* @__PURE__ */ q(gs, yg, (e) => {
  var {
    typed: r,
    isInteger: i
  } = e;
  return r(gs, {
    "Array | Matrix, number | BigNumber, function": function(t, n, o) {
      if (!i(n))
        throw new TypeError("Integer number expected for dimension");
      var f = Array.isArray(t) ? qe(t) : t.size();
      if (n < 0 || n >= f.length)
        throw new at(n, f.length);
      return Fe(t) ? t.create(Pa(t.valueOf(), n, o)) : Pa(t, n, o);
    }
  });
});
function Pa(e, r, i) {
  var a, t, n;
  if (r <= 0)
    if (Array.isArray(e[0])) {
      for (n = bg(e), t = [], a = 0; a < n.length; a++)
        t[a] = Pa(n[a], r - 1, i);
      return t;
    } else
      return i(e);
  else {
    for (t = [], a = 0; a < e.length; a++)
      t[a] = Pa(e[a], r - 1, i);
    return t;
  }
}
function bg(e) {
  var r = e.length, i = e[0].length, a, t, n = [];
  for (t = 0; t < i; t++) {
    var o = [];
    for (a = 0; a < r; a++)
      o.push(e[a][t]);
    n.push(o);
  }
  return n;
}
var ys = "addScalar", xg = ["typed"], wg = /* @__PURE__ */ q(ys, xg, (e) => {
  var {
    typed: r
  } = e;
  return r(ys, {
    "number, number": Yf,
    "Complex, Complex": function(a, t) {
      return a.add(t);
    },
    "BigNumber, BigNumber": function(a, t) {
      return a.plus(t);
    },
    "Fraction, Fraction": function(a, t) {
      return a.add(t);
    },
    "Unit, Unit": r.referToSelf((i) => (a, t) => {
      if (a.value === null || a.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (t.value === null || t.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!a.equalBase(t))
        throw new Error("Units do not match");
      var n = a.clone();
      return n.value = r.find(i, [n.valueType(), t.valueType()])(n.value, t.value), n.fixPrefix = !1, n;
    })
  });
}), bs = "subtractScalar", Ng = ["typed"], Dg = /* @__PURE__ */ q(bs, Ng, (e) => {
  var {
    typed: r
  } = e;
  return r(bs, {
    "number, number": Xf,
    "Complex, Complex": function(a, t) {
      return a.sub(t);
    },
    "BigNumber, BigNumber": function(a, t) {
      return a.minus(t);
    },
    "Fraction, Fraction": function(a, t) {
      return a.sub(t);
    },
    "Unit, Unit": r.referToSelf((i) => (a, t) => {
      if (a.value === null || a.value === void 0)
        throw new Error("Parameter x contains a unit with undefined value");
      if (t.value === null || t.value === void 0)
        throw new Error("Parameter y contains a unit with undefined value");
      if (!a.equalBase(t))
        throw new Error("Units do not match");
      var n = a.clone();
      return n.value = r.find(i, [n.valueType(), t.valueType()])(n.value, t.value), n.fixPrefix = !1, n;
    })
  });
}), xs = "cbrt", Ag = ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"], Eg = /* @__PURE__ */ q(xs, Ag, (e) => {
  var {
    config: r,
    typed: i,
    isNegative: a,
    unaryMinus: t,
    matrix: n,
    Complex: o,
    BigNumber: f,
    Fraction: l
  } = e;
  return i(xs, {
    number: Ln,
    // note: signature 'number, boolean' is also supported,
    //       created by typed as it knows how to convert number to Complex
    Complex: u,
    "Complex, boolean": u,
    BigNumber: function(m) {
      return m.cbrt();
    },
    Unit: s
  });
  function u(c, m) {
    var v = c.arg() / 3, d = c.abs(), p = new o(Ln(d), 0).mul(new o(0, v).exp());
    if (m) {
      var x = [p, new o(Ln(d), 0).mul(new o(0, v + Math.PI * 2 / 3).exp()), new o(Ln(d), 0).mul(new o(0, v - Math.PI * 2 / 3).exp())];
      return r.matrix === "Array" ? x : n(x);
    } else
      return p;
  }
  function s(c) {
    if (c.value && bt(c.value)) {
      var m = c.clone();
      return m.value = 1, m = m.pow(1 / 3), m.value = u(c.value), m;
    } else {
      var v = a(c.value);
      v && (c.value = t(c.value));
      var d;
      ze(c.value) ? d = new f(1).div(3) : Wn(c.value) ? d = new l(1, 3) : d = 1 / 3;
      var p = c.pow(d);
      return v && (p.value = t(p.value)), p;
    }
  }
}), Sg = "matAlgo11xS0s", Cg = ["typed", "equalScalar"], Dr = /* @__PURE__ */ q(Sg, Cg, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o, f) {
    var l = t._values, u = t._index, s = t._ptr, c = t._size, m = t._datatype;
    if (!l)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = c[0], d = c[1], p, x = i, g = 0, N = o;
    typeof m == "string" && (p = m, x = r.find(i, [p, p]), g = r.convert(0, p), n = r.convert(n, p), N = r.find(o, [p, p]));
    for (var h = [], b = [], w = [], y = 0; y < d; y++) {
      w[y] = b.length;
      for (var A = s[y], S = s[y + 1], D = A; D < S; D++) {
        var E = u[D], C = f ? N(n, l[D]) : N(l[D], n);
        x(C, g) || (b.push(E), h.push(C));
      }
    }
    return w[d] = b.length, t.createSparseMatrix({
      values: h,
      index: b,
      ptr: w,
      size: [v, d],
      datatype: p
    });
  };
}), Mg = "matAlgo12xSfs", Fg = ["typed", "DenseMatrix"], hr = /* @__PURE__ */ q(Mg, Fg, (e) => {
  var {
    typed: r,
    DenseMatrix: i
  } = e;
  return function(t, n, o, f) {
    var l = t._values, u = t._index, s = t._ptr, c = t._size, m = t._datatype;
    if (!l)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = c[0], d = c[1], p, x = o;
    typeof m == "string" && (p = m, n = r.convert(n, p), x = r.find(o, [p, p]));
    for (var g = [], N = [], h = [], b = 0; b < d; b++) {
      for (var w = b + 1, y = s[b], A = s[b + 1], S = y; S < A; S++) {
        var D = u[S];
        N[D] = l[S], h[D] = w;
      }
      for (var E = 0; E < v; E++)
        b === 0 && (g[E] = []), h[E] === w ? g[E][b] = f ? x(n, N[E]) : x(N[E], n) : g[E][b] = f ? x(n, 0) : x(0, n);
    }
    return new i({
      data: g,
      size: [v, d],
      datatype: p
    });
  };
}), Bg = "matAlgo14xDs", Tg = ["typed"], ot = /* @__PURE__ */ q(Bg, Tg, (e) => {
  var {
    typed: r
  } = e;
  return function(t, n, o, f) {
    var l = t._data, u = t._size, s = t._datatype, c, m = o;
    typeof s == "string" && (c = s, n = r.convert(n, c), m = r.find(o, [c, c]));
    var v = u.length > 0 ? i(m, 0, u, u[0], l, n, f) : [];
    return t.createDenseMatrix({
      data: v,
      size: _e(u),
      datatype: c
    });
  };
  function i(a, t, n, o, f, l, u) {
    var s = [];
    if (t === n.length - 1)
      for (var c = 0; c < o; c++)
        s[c] = u ? a(l, f[c]) : a(f[c], l);
    else
      for (var m = 0; m < o; m++)
        s[m] = i(a, t + 1, n, n[t + 1], f[m], l, u);
    return s;
  }
}), zi = "ceil", Og = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], _g = /* @__PURE__ */ q(zi, ["typed", "config", "round"], (e) => {
  var {
    typed: r,
    config: i,
    round: a
  } = e;
  return r(zi, {
    number: function(n) {
      return _r(n, a(n), i.epsilon) ? a(n) : Math.ceil(n);
    },
    "number, number": function(n, o) {
      if (_r(n, a(n, o), i.epsilon))
        return a(n, o);
      var [f, l] = "".concat(n, "e").split("e"), u = Math.ceil(Number("".concat(f, "e").concat(Number(l) + o)));
      return [f, l] = "".concat(u, "e").split("e"), Number("".concat(f, "e").concat(Number(l) - o));
    }
  });
}), $g = /* @__PURE__ */ q(zi, Og, (e) => {
  var {
    typed: r,
    config: i,
    round: a,
    matrix: t,
    equalScalar: n,
    zeros: o,
    DenseMatrix: f
  } = e, l = Dr({
    typed: r,
    equalScalar: n
  }), u = hr({
    typed: r,
    DenseMatrix: f
  }), s = ot({
    typed: r
  }), c = _g({
    typed: r,
    config: i,
    round: a
  });
  return r("ceil", {
    number: c.signatures.number,
    "number,number": c.signatures["number,number"],
    Complex: function(v) {
      return v.ceil();
    },
    "Complex, number": function(v, d) {
      return v.ceil(d);
    },
    "Complex, BigNumber": function(v, d) {
      return v.ceil(d.toNumber());
    },
    BigNumber: function(v) {
      return Jr(v, a(v), i.epsilon) ? a(v) : v.ceil();
    },
    "BigNumber, BigNumber": function(v, d) {
      return Jr(v, a(v, d), i.epsilon) ? a(v, d) : v.toDecimalPlaces(d.toNumber(), Ot.ROUND_CEIL);
    },
    Fraction: function(v) {
      return v.ceil();
    },
    "Fraction, number": function(v, d) {
      return v.ceil(d);
    },
    "Fraction, BigNumber": function(v, d) {
      return v.ceil(d.toNumber());
    },
    "Array | Matrix": r.referToSelf((m) => (v) => He(v, m)),
    "Array, number | BigNumber": r.referToSelf((m) => (v, d) => He(v, (p) => m(p, d))),
    "SparseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => l(v, d, m, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => s(v, d, m, !1)),
    "number | Complex | Fraction | BigNumber, Array": r.referToSelf((m) => (v, d) => s(t(d), v, m, !0).valueOf()),
    "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf((m) => (v, d) => n(v, 0) ? o(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
  });
}), ws = "cube", Ig = ["typed"], qg = /* @__PURE__ */ q(ws, Ig, (e) => {
  var {
    typed: r
  } = e;
  return r(ws, {
    number: Kf,
    Complex: function(a) {
      return a.mul(a).mul(a);
    },
    BigNumber: function(a) {
      return a.times(a).times(a);
    },
    Fraction: function(a) {
      return a.pow(3);
    },
    Unit: function(a) {
      return a.pow(3);
    }
  });
}), Ns = "exp", Rg = ["typed"], zg = /* @__PURE__ */ q(Ns, Rg, (e) => {
  var {
    typed: r
  } = e;
  return r(Ns, {
    number: jf,
    Complex: function(a) {
      return a.exp();
    },
    BigNumber: function(a) {
      return a.exp();
    }
  });
}), Ds = "expm1", Pg = ["typed", "Complex"], Ug = /* @__PURE__ */ q(Ds, Pg, (e) => {
  var {
    typed: r,
    Complex: i
  } = e;
  return r(Ds, {
    number: em,
    Complex: function(t) {
      var n = Math.exp(t.re);
      return new i(n * Math.cos(t.im) - 1, n * Math.sin(t.im));
    },
    BigNumber: function(t) {
      return t.exp().minus(1);
    }
  });
}), Pi = "fix", Lg = ["typed", "Complex", "matrix", "ceil", "floor", "equalScalar", "zeros", "DenseMatrix"], kg = /* @__PURE__ */ q(Pi, ["typed", "ceil", "floor"], (e) => {
  var {
    typed: r,
    ceil: i,
    floor: a
  } = e;
  return r(Pi, {
    number: function(n) {
      return n > 0 ? a(n) : i(n);
    },
    "number, number": function(n, o) {
      return n > 0 ? a(n, o) : i(n, o);
    }
  });
}), Hg = /* @__PURE__ */ q(Pi, Lg, (e) => {
  var {
    typed: r,
    Complex: i,
    matrix: a,
    ceil: t,
    floor: n,
    equalScalar: o,
    zeros: f,
    DenseMatrix: l
  } = e, u = hr({
    typed: r,
    DenseMatrix: l
  }), s = ot({
    typed: r
  }), c = kg({
    typed: r,
    ceil: t,
    floor: n
  });
  return r("fix", {
    number: c.signatures.number,
    "number, number | BigNumber": c.signatures["number,number"],
    Complex: function(v) {
      return new i(v.re > 0 ? Math.floor(v.re) : Math.ceil(v.re), v.im > 0 ? Math.floor(v.im) : Math.ceil(v.im));
    },
    "Complex, number": function(v, d) {
      return new i(v.re > 0 ? n(v.re, d) : t(v.re, d), v.im > 0 ? n(v.im, d) : t(v.im, d));
    },
    "Complex, BigNumber": function(v, d) {
      var p = d.toNumber();
      return new i(v.re > 0 ? n(v.re, p) : t(v.re, p), v.im > 0 ? n(v.im, p) : t(v.im, p));
    },
    BigNumber: function(v) {
      return v.isNegative() ? t(v) : n(v);
    },
    "BigNumber, number | BigNumber": function(v, d) {
      return v.isNegative() ? t(v, d) : n(v, d);
    },
    Fraction: function(v) {
      return v.s < 0 ? v.ceil() : v.floor();
    },
    "Fraction, number | BigNumber": function(v, d) {
      return v.s < 0 ? t(v, d) : n(v, d);
    },
    "Array | Matrix": r.referToSelf((m) => (v) => He(v, m)),
    "Array | Matrix, number | BigNumber": r.referToSelf((m) => (v, d) => He(v, (p) => m(p, d))),
    "number | Complex | Fraction | BigNumber, Array": r.referToSelf((m) => (v, d) => s(a(d), v, m, !0).valueOf()),
    "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf((m) => (v, d) => o(v, 0) ? f(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
  });
}), Ui = "floor", Gg = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], Vg = /* @__PURE__ */ q(Ui, ["typed", "config", "round"], (e) => {
  var {
    typed: r,
    config: i,
    round: a
  } = e;
  return r(Ui, {
    number: function(n) {
      return _r(n, a(n), i.epsilon) ? a(n) : Math.floor(n);
    },
    "number, number": function(n, o) {
      if (_r(n, a(n, o), i.epsilon))
        return a(n, o);
      var [f, l] = "".concat(n, "e").split("e"), u = Math.floor(Number("".concat(f, "e").concat(Number(l) + o)));
      return [f, l] = "".concat(u, "e").split("e"), Number("".concat(f, "e").concat(Number(l) - o));
    }
  });
}), Lm = /* @__PURE__ */ q(Ui, Gg, (e) => {
  var {
    typed: r,
    config: i,
    round: a,
    matrix: t,
    equalScalar: n,
    zeros: o,
    DenseMatrix: f
  } = e, l = Dr({
    typed: r,
    equalScalar: n
  }), u = hr({
    typed: r,
    DenseMatrix: f
  }), s = ot({
    typed: r
  }), c = Vg({
    typed: r,
    config: i,
    round: a
  });
  return r("floor", {
    number: c.signatures.number,
    "number,number": c.signatures["number,number"],
    Complex: function(v) {
      return v.floor();
    },
    "Complex, number": function(v, d) {
      return v.floor(d);
    },
    "Complex, BigNumber": function(v, d) {
      return v.floor(d.toNumber());
    },
    BigNumber: function(v) {
      return Jr(v, a(v), i.epsilon) ? a(v) : v.floor();
    },
    "BigNumber, BigNumber": function(v, d) {
      return Jr(v, a(v, d), i.epsilon) ? a(v, d) : v.toDecimalPlaces(d.toNumber(), Ot.ROUND_FLOOR);
    },
    Fraction: function(v) {
      return v.floor();
    },
    "Fraction, number": function(v, d) {
      return v.floor(d);
    },
    "Fraction, BigNumber": function(v, d) {
      return v.floor(d.toNumber());
    },
    "Array | Matrix": r.referToSelf((m) => (v) => He(v, m)),
    "Array, number | BigNumber": r.referToSelf((m) => (v, d) => He(v, (p) => m(p, d))),
    "SparseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => l(v, d, m, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => s(v, d, m, !1)),
    "number | Complex | Fraction | BigNumber, Array": r.referToSelf((m) => (v, d) => s(t(d), v, m, !0).valueOf()),
    "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf((m) => (v, d) => n(v, 0) ? o(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
  });
}), Zg = "matAlgo02xDS0", Yg = ["typed", "equalScalar"], st = /* @__PURE__ */ q(Zg, Yg, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o, f) {
    var l = t._data, u = t._size, s = t._datatype || t.getDataType(), c = n._values, m = n._index, v = n._ptr, d = n._size, p = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (u.length !== d.length)
      throw new ke(u.length, d.length);
    if (u[0] !== d[0] || u[1] !== d[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + d + ")");
    if (!c)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var x = u[0], g = u[1], N, h = i, b = 0, w = o;
    typeof s == "string" && s === p && s !== "mixed" && (N = s, h = r.find(i, [N, N]), b = r.convert(0, N), w = r.find(o, [N, N]));
    for (var y = [], A = [], S = [], D = 0; D < g; D++) {
      S[D] = A.length;
      for (var E = v[D], C = v[D + 1], F = E; F < C; F++) {
        var _ = m[F], I = f ? w(c[F], l[_][D]) : w(l[_][D], c[F]);
        h(I, b) || (A.push(_), y.push(I));
      }
    }
    return S[g] = A.length, n.createSparseMatrix({
      values: y,
      index: A,
      ptr: S,
      size: [x, g],
      datatype: s === t._datatype && p === n._datatype ? N : void 0
    });
  };
}), Xg = "matAlgo03xDSf", Wg = ["typed"], Ir = /* @__PURE__ */ q(Xg, Wg, (e) => {
  var {
    typed: r
  } = e;
  return function(a, t, n, o) {
    var f = a._data, l = a._size, u = a._datatype || a.getDataType(), s = t._values, c = t._index, m = t._ptr, v = t._size, d = t._datatype || t._data === void 0 ? t._datatype : t.getDataType();
    if (l.length !== v.length)
      throw new ke(l.length, v.length);
    if (l[0] !== v[0] || l[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = l[0], x = l[1], g, N = 0, h = n;
    typeof u == "string" && u === d && u !== "mixed" && (g = u, N = r.convert(0, g), h = r.find(n, [g, g]));
    for (var b = [], w = 0; w < p; w++)
      b[w] = [];
    for (var y = [], A = [], S = 0; S < x; S++) {
      for (var D = S + 1, E = m[S], C = m[S + 1], F = E; F < C; F++) {
        var _ = c[F];
        y[_] = o ? h(s[F], f[_][S]) : h(f[_][S], s[F]), A[_] = D;
      }
      for (var I = 0; I < p; I++)
        A[I] === D ? b[I][S] = y[I] : b[I][S] = o ? h(N, f[I][S]) : h(f[I][S], N);
    }
    return a.createDenseMatrix({
      data: b,
      size: [p, x],
      datatype: u === a._datatype && d === t._datatype ? g : void 0
    });
  };
}), Jg = "matAlgo05xSfSf", Qg = ["typed", "equalScalar"], oi = /* @__PURE__ */ q(Jg, Qg, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o) {
    var f = t._values, l = t._index, u = t._ptr, s = t._size, c = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), m = n._values, v = n._index, d = n._ptr, p = n._size, x = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (s.length !== p.length)
      throw new ke(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var g = s[0], N = s[1], h, b = i, w = 0, y = o;
    typeof c == "string" && c === x && c !== "mixed" && (h = c, b = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
    var A = f && m ? [] : void 0, S = [], D = [], E = A ? [] : void 0, C = A ? [] : void 0, F = [], _ = [], I, $, T, B;
    for ($ = 0; $ < N; $++) {
      D[$] = S.length;
      var L = $ + 1;
      for (T = u[$], B = u[$ + 1]; T < B; T++)
        I = l[T], S.push(I), F[I] = L, E && (E[I] = f[T]);
      for (T = d[$], B = d[$ + 1]; T < B; T++)
        I = v[T], F[I] !== L && S.push(I), _[I] = L, C && (C[I] = m[T]);
      if (A)
        for (T = D[$]; T < S.length; ) {
          I = S[T];
          var O = F[I], X = _[I];
          if (O === L || X === L) {
            var K = O === L ? E[I] : w, V = X === L ? C[I] : w, z = y(K, V);
            b(z, w) ? S.splice(T, 1) : (A.push(z), T++);
          }
        }
    }
    return D[N] = S.length, t.createSparseMatrix({
      values: A,
      index: S,
      ptr: D,
      size: [g, N],
      datatype: c === t._datatype && x === n._datatype ? h : void 0
    });
  };
}), Kg = "matAlgo13xDD", jg = ["typed"], e1 = /* @__PURE__ */ q(Kg, jg, (e) => {
  var {
    typed: r
  } = e;
  return function(t, n, o) {
    var f = t._data, l = t._size, u = t._datatype, s = n._data, c = n._size, m = n._datatype, v = [];
    if (l.length !== c.length)
      throw new ke(l.length, c.length);
    for (var d = 0; d < l.length; d++) {
      if (l[d] !== c[d])
        throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + c + ")");
      v[d] = l[d];
    }
    var p, x = o;
    typeof u == "string" && u === m && (p = u, x = r.find(o, [p, p]));
    var g = v.length > 0 ? i(x, 0, v, v[0], f, s) : [];
    return t.createDenseMatrix({
      data: g,
      size: v,
      datatype: p
    });
  };
  function i(a, t, n, o, f, l) {
    var u = [];
    if (t === n.length - 1)
      for (var s = 0; s < o; s++)
        u[s] = a(f[s], l[s]);
    else
      for (var c = 0; c < o; c++)
        u[c] = i(a, t + 1, n, n[t + 1], f[c], l[c]);
    return u;
  }
}), r1 = "broadcast", t1 = ["concat"], n1 = /* @__PURE__ */ q(r1, t1, (e) => {
  var {
    concat: r
  } = e;
  return function(t, n) {
    var o = Math.max(t._size.length, n._size.length);
    if (t._size.length === n._size.length && t._size.every((d, p) => d === n._size[p]))
      return [t, n];
    for (var f = i(t._size, o, 0), l = i(n._size, o, 0), u = [], s = 0; s < o; s++)
      u[s] = Math.max(f[s], l[s]);
    Ta(f, u), Ta(l, u);
    var c = t.clone(), m = n.clone();
    c._size.length < o ? c.reshape(i(c._size, o, 1)) : m._size.length < o && m.reshape(i(m._size, o, 1));
    for (var v = 0; v < o; v++)
      c._size[v] < u[v] && (c = a(c, u[v], v)), m._size[v] < u[v] && (m = a(m, u[v], v));
    return [c, m];
  };
  function i(t, n, o) {
    return [...Array(n - t.length).fill(o), ...t];
  }
  function a(t, n, o) {
    return r(...Array(n).fill(t), o);
  }
}), a1 = "matrixAlgorithmSuite", i1 = ["typed", "matrix", "concat"], or = /* @__PURE__ */ q(a1, i1, (e) => {
  var {
    typed: r,
    matrix: i,
    concat: a
  } = e, t = e1({
    typed: r
  }), n = ot({
    typed: r
  }), o = n1({
    concat: a
  });
  return function(l) {
    var u = l.elop, s = l.SD || l.DS, c;
    u ? (c = {
      "DenseMatrix, DenseMatrix": (p, x) => t(...o(p, x), u),
      "Array, Array": (p, x) => t(...o(i(p), i(x)), u).valueOf(),
      "Array, DenseMatrix": (p, x) => t(...o(i(p), x), u),
      "DenseMatrix, Array": (p, x) => t(...o(p, i(x)), u)
    }, l.SS && (c["SparseMatrix, SparseMatrix"] = (p, x) => l.SS(...o(p, x), u, !1)), l.DS && (c["DenseMatrix, SparseMatrix"] = (p, x) => l.DS(...o(p, x), u, !1), c["Array, SparseMatrix"] = (p, x) => l.DS(...o(i(p), x), u, !1)), s && (c["SparseMatrix, DenseMatrix"] = (p, x) => s(...o(x, p), u, !0), c["SparseMatrix, Array"] = (p, x) => s(...o(i(x), p), u, !0))) : (c = {
      "DenseMatrix, DenseMatrix": r.referToSelf((p) => (x, g) => t(...o(x, g), p)),
      "Array, Array": r.referToSelf((p) => (x, g) => t(...o(i(x), i(g)), p).valueOf()),
      "Array, DenseMatrix": r.referToSelf((p) => (x, g) => t(...o(i(x), g), p)),
      "DenseMatrix, Array": r.referToSelf((p) => (x, g) => t(...o(x, i(g)), p))
    }, l.SS && (c["SparseMatrix, SparseMatrix"] = r.referToSelf((p) => (x, g) => l.SS(...o(x, g), p, !1))), l.DS && (c["DenseMatrix, SparseMatrix"] = r.referToSelf((p) => (x, g) => l.DS(...o(x, g), p, !1)), c["Array, SparseMatrix"] = r.referToSelf((p) => (x, g) => l.DS(...o(i(x), g), p, !1))), s && (c["SparseMatrix, DenseMatrix"] = r.referToSelf((p) => (x, g) => s(...o(g, x), p, !0)), c["SparseMatrix, Array"] = r.referToSelf((p) => (x, g) => s(...o(i(g), x), p, !0))));
    var m = l.scalar || "any", v = l.Ds || l.Ss;
    v && (u ? (c["DenseMatrix," + m] = (p, x) => n(p, x, u, !1), c[m + ", DenseMatrix"] = (p, x) => n(x, p, u, !0), c["Array," + m] = (p, x) => n(i(p), x, u, !1).valueOf(), c[m + ", Array"] = (p, x) => n(i(x), p, u, !0).valueOf()) : (c["DenseMatrix," + m] = r.referToSelf((p) => (x, g) => n(x, g, p, !1)), c[m + ", DenseMatrix"] = r.referToSelf((p) => (x, g) => n(g, x, p, !0)), c["Array," + m] = r.referToSelf((p) => (x, g) => n(i(x), g, p, !1).valueOf()), c[m + ", Array"] = r.referToSelf((p) => (x, g) => n(i(g), x, p, !0).valueOf())));
    var d = l.sS !== void 0 ? l.sS : l.Ss;
    return u ? (l.Ss && (c["SparseMatrix," + m] = (p, x) => l.Ss(p, x, u, !1)), d && (c[m + ", SparseMatrix"] = (p, x) => d(x, p, u, !0))) : (l.Ss && (c["SparseMatrix," + m] = r.referToSelf((p) => (x, g) => l.Ss(x, g, p, !1))), d && (c[m + ", SparseMatrix"] = r.referToSelf((p) => (x, g) => d(g, x, p, !0)))), u && u.signatures && ff(c, u.signatures), c;
  };
}), As = "mod", o1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"], km = /* @__PURE__ */ q(As, o1, (e) => {
  var {
    typed: r,
    config: i,
    round: a,
    matrix: t,
    equalScalar: n,
    zeros: o,
    DenseMatrix: f,
    concat: l
  } = e, u = Lm({
    typed: r,
    config: i,
    round: a,
    matrix: t,
    equalScalar: n,
    zeros: o,
    DenseMatrix: f
  }), s = st({
    typed: r,
    equalScalar: n
  }), c = Ir({
    typed: r
  }), m = oi({
    typed: r,
    equalScalar: n
  }), v = Dr({
    typed: r,
    equalScalar: n
  }), d = hr({
    typed: r,
    DenseMatrix: f
  }), p = or({
    typed: r,
    matrix: t,
    concat: l
  });
  return r(As, {
    "number, number": x,
    "BigNumber, BigNumber": function(N, h) {
      return h.isZero() ? N : N.sub(h.mul(u(N.div(h))));
    },
    "Fraction, Fraction": function(N, h) {
      return h.equals(0) ? N : N.sub(h.mul(u(N.div(h))));
    }
  }, p({
    SS: m,
    DS: c,
    SD: s,
    Ss: v,
    sS: d
  }));
  function x(g, N) {
    return N === 0 ? g : g - N * u(g / N);
  }
}), s1 = "matAlgo01xDSid", u1 = ["typed"], $t = /* @__PURE__ */ q(s1, u1, (e) => {
  var {
    typed: r
  } = e;
  return function(a, t, n, o) {
    var f = a._data, l = a._size, u = a._datatype || a.getDataType(), s = t._values, c = t._index, m = t._ptr, v = t._size, d = t._datatype || t._data === void 0 ? t._datatype : t.getDataType();
    if (l.length !== v.length)
      throw new ke(l.length, v.length);
    if (l[0] !== v[0] || l[1] !== v[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + v + ")");
    if (!s)
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var p = l[0], x = l[1], g = typeof u == "string" && u !== "mixed" && u === d ? u : void 0, N = g ? r.find(n, [g, g]) : n, h, b, w = [];
    for (h = 0; h < p; h++)
      w[h] = [];
    var y = [], A = [];
    for (b = 0; b < x; b++) {
      for (var S = b + 1, D = m[b], E = m[b + 1], C = D; C < E; C++)
        h = c[C], y[h] = o ? N(s[C], f[h][b]) : N(f[h][b], s[C]), A[h] = S;
      for (h = 0; h < p; h++)
        A[h] === S ? w[h][b] = y[h] : w[h][b] = f[h][b];
    }
    return a.createDenseMatrix({
      data: w,
      size: [p, x],
      datatype: u === a._datatype && d === t._datatype ? g : void 0
    });
  };
}), l1 = "matAlgo04xSidSid", c1 = ["typed", "equalScalar"], ji = /* @__PURE__ */ q(l1, c1, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o) {
    var f = t._values, l = t._index, u = t._ptr, s = t._size, c = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), m = n._values, v = n._index, d = n._ptr, p = n._size, x = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (s.length !== p.length)
      throw new ke(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var g = s[0], N = s[1], h, b = i, w = 0, y = o;
    typeof c == "string" && c === x && c !== "mixed" && (h = c, b = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
    var A = f && m ? [] : void 0, S = [], D = [], E = f && m ? [] : void 0, C = f && m ? [] : void 0, F = [], _ = [], I, $, T, B, L;
    for ($ = 0; $ < N; $++) {
      D[$] = S.length;
      var O = $ + 1;
      for (B = u[$], L = u[$ + 1], T = B; T < L; T++)
        I = l[T], S.push(I), F[I] = O, E && (E[I] = f[T]);
      for (B = d[$], L = d[$ + 1], T = B; T < L; T++)
        if (I = v[T], F[I] === O) {
          if (E) {
            var X = y(E[I], m[T]);
            b(X, w) ? F[I] = null : E[I] = X;
          }
        } else
          S.push(I), _[I] = O, C && (C[I] = m[T]);
      if (E && C)
        for (T = D[$]; T < S.length; )
          I = S[T], F[I] === O ? (A[T] = E[I], T++) : _[I] === O ? (A[T] = C[I], T++) : S.splice(T, 1);
    }
    return D[N] = S.length, t.createSparseMatrix({
      values: A,
      index: S,
      ptr: D,
      size: [g, N],
      datatype: c === t._datatype && x === n._datatype ? h : void 0
    });
  };
}), f1 = "matAlgo10xSids", m1 = ["typed", "DenseMatrix"], Zt = /* @__PURE__ */ q(f1, m1, (e) => {
  var {
    typed: r,
    DenseMatrix: i
  } = e;
  return function(t, n, o, f) {
    var l = t._values, u = t._index, s = t._ptr, c = t._size, m = t._datatype;
    if (!l)
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = c[0], d = c[1], p, x = o;
    typeof m == "string" && (p = m, n = r.convert(n, p), x = r.find(o, [p, p]));
    for (var g = [], N = [], h = [], b = 0; b < d; b++) {
      for (var w = b + 1, y = s[b], A = s[b + 1], S = y; S < A; S++) {
        var D = u[S];
        N[D] = l[S], h[D] = w;
      }
      for (var E = 0; E < v; E++)
        b === 0 && (g[E] = []), h[E] === w ? g[E][b] = f ? x(n, N[E]) : x(N[E], n) : g[E][b] = n;
    }
    return new i({
      data: g,
      size: [v, d],
      datatype: p
    });
  };
});
function Yt(e, r, i, a) {
  if (!(this instanceof Yt))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.fn = e, this.count = r, this.min = i, this.max = a, this.message = "Wrong number of arguments in function " + e + " (" + r + " provided, " + i + (a != null ? "-" + a : "") + " expected)", this.stack = new Error().stack;
}
Yt.prototype = new Error();
Yt.prototype.constructor = Error;
Yt.prototype.name = "ArgumentsError";
Yt.prototype.isArgumentsError = !0;
var Es = "gcd", v1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix", "concat"], Ai = "number | BigNumber | Fraction | Matrix | Array", p1 = "".concat(Ai, ", ").concat(Ai, ", ...").concat(Ai);
function Ss(e) {
  return !e.some((r) => Array.isArray(r));
}
var d1 = /* @__PURE__ */ q(Es, v1, (e) => {
  var {
    typed: r,
    matrix: i,
    config: a,
    round: t,
    equalScalar: n,
    zeros: o,
    BigNumber: f,
    DenseMatrix: l,
    concat: u
  } = e, s = km({
    typed: r,
    config: a,
    round: t,
    matrix: i,
    equalScalar: n,
    zeros: o,
    DenseMatrix: l,
    concat: u
  }), c = $t({
    typed: r
  }), m = ji({
    typed: r,
    equalScalar: n
  }), v = Zt({
    typed: r,
    DenseMatrix: l
  }), d = or({
    typed: r,
    matrix: i,
    concat: u
  });
  return r(Es, {
    "number, number": p,
    "BigNumber, BigNumber": x,
    "Fraction, Fraction": (g, N) => g.gcd(N)
  }, d({
    SS: m,
    DS: c,
    Ss: v
  }), {
    [p1]: r.referToSelf((g) => (N, h, b) => {
      for (var w = g(N, h), y = 0; y < b.length; y++)
        w = g(w, b[y]);
      return w;
    }),
    Array: r.referToSelf((g) => (N) => {
      if (N.length === 1 && Array.isArray(N[0]) && Ss(N[0]))
        return g(...N[0]);
      if (Ss(N))
        return g(...N);
      throw new Yt("gcd() supports only 1d matrices!");
    }),
    Matrix: r.referToSelf((g) => (N) => g(N.toArray()))
  });
  function p(g, N) {
    if (!Se(g) || !Se(N))
      throw new Error("Parameters in function gcd must be integer numbers");
    for (var h; N !== 0; )
      h = s(g, N), g = N, N = h;
    return g < 0 ? -g : g;
  }
  function x(g, N) {
    if (!g.isInt() || !N.isInt())
      throw new Error("Parameters in function gcd must be integer numbers");
    for (var h = new f(0); !N.isZero(); ) {
      var b = s(g, N);
      g = N, N = b;
    }
    return g.lt(h) ? g.neg() : g;
  }
}), h1 = "matAlgo06xS0S0", g1 = ["typed", "equalScalar"], si = /* @__PURE__ */ q(h1, g1, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o) {
    var f = t._values, l = t._size, u = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), s = n._values, c = n._size, m = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (l.length !== c.length)
      throw new ke(l.length, c.length);
    if (l[0] !== c[0] || l[1] !== c[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + c + ")");
    var v = l[0], d = l[1], p, x = i, g = 0, N = o;
    typeof u == "string" && u === m && u !== "mixed" && (p = u, x = r.find(i, [p, p]), g = r.convert(0, p), N = r.find(o, [p, p]));
    for (var h = f && s ? [] : void 0, b = [], w = [], y = h ? [] : void 0, A = [], S = [], D = 0; D < d; D++) {
      w[D] = b.length;
      var E = D + 1;
      if (Jo(t, D, A, y, S, E, b, N), Jo(n, D, A, y, S, E, b, N), y)
        for (var C = w[D]; C < b.length; ) {
          var F = b[C];
          if (S[F] === E) {
            var _ = y[F];
            x(_, g) ? b.splice(C, 1) : (h.push(_), C++);
          } else
            b.splice(C, 1);
        }
      else
        for (var I = w[D]; I < b.length; ) {
          var $ = b[I];
          S[$] !== E ? b.splice(I, 1) : I++;
        }
    }
    return w[d] = b.length, t.createSparseMatrix({
      values: h,
      index: b,
      ptr: w,
      size: [v, d],
      datatype: u === t._datatype && m === n._datatype ? p : void 0
    });
  };
}), Cs = "lcm", y1 = ["typed", "matrix", "equalScalar", "concat"], b1 = /* @__PURE__ */ q(Cs, y1, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    concat: t
  } = e, n = st({
    typed: r,
    equalScalar: a
  }), o = si({
    typed: r,
    equalScalar: a
  }), f = Dr({
    typed: r,
    equalScalar: a
  }), l = or({
    typed: r,
    matrix: i,
    concat: t
  }), u = "number | BigNumber | Fraction | Matrix | Array", s = {};
  return s["".concat(u, ", ").concat(u, ", ...").concat(u)] = r.referToSelf((m) => (v, d, p) => {
    for (var x = m(v, d), g = 0; g < p.length; g++)
      x = m(x, p[g]);
    return x;
  }), r(Cs, {
    "number, number": rm,
    "BigNumber, BigNumber": c,
    "Fraction, Fraction": (m, v) => m.lcm(v)
  }, l({
    SS: o,
    DS: n,
    Ss: f
  }), s);
  function c(m, v) {
    if (!m.isInt() || !v.isInt())
      throw new Error("Parameters in function lcm must be integer numbers");
    if (m.isZero())
      return m;
    if (v.isZero())
      return v;
    for (var d = m.times(v); !v.isZero(); ) {
      var p = v;
      v = m.mod(p), m = p;
    }
    return d.div(m).abs();
  }
}), Ms = "log10", x1 = ["typed", "config", "Complex"], w1 = /* @__PURE__ */ q(Ms, x1, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(Ms, {
    number: function(n) {
      return n >= 0 || i.predictable ? tm(n) : new a(n, 0).log().div(Math.LN10);
    },
    Complex: function(n) {
      return new a(n).log().div(Math.LN10);
    },
    BigNumber: function(n) {
      return !n.isNegative() || i.predictable ? n.log() : new a(n.toNumber(), 0).log().div(Math.LN10);
    },
    "Array | Matrix": r.referToSelf((t) => (n) => He(n, t))
  });
}), Fs = "log2", N1 = ["typed", "config", "Complex"], D1 = /* @__PURE__ */ q(Fs, N1, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(Fs, {
    number: function(o) {
      return o >= 0 || i.predictable ? nm(o) : t(new a(o, 0));
    },
    Complex: t,
    BigNumber: function(o) {
      return !o.isNegative() || i.predictable ? o.log(2) : t(new a(o.toNumber(), 0));
    },
    "Array | Matrix": r.referToSelf((n) => (o) => He(o, n))
  });
  function t(n) {
    var o = Math.sqrt(n.re * n.re + n.im * n.im);
    return new a(Math.log2 ? Math.log2(o) : Math.log(o) / Math.LN2, Math.atan2(n.im, n.re) / Math.LN2);
  }
}), A1 = "multiplyScalar", E1 = ["typed"], S1 = /* @__PURE__ */ q(A1, E1, (e) => {
  var {
    typed: r
  } = e;
  return r("multiplyScalar", {
    "number, number": Wf,
    "Complex, Complex": function(a, t) {
      return a.mul(t);
    },
    "BigNumber, BigNumber": function(a, t) {
      return a.times(t);
    },
    "Fraction, Fraction": function(a, t) {
      return a.mul(t);
    },
    "number | Fraction | BigNumber | Complex, Unit": (i, a) => a.multiply(i),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (i, a) => i.multiply(a)
  });
}), Bs = "multiply", C1 = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], M1 = /* @__PURE__ */ q(Bs, C1, (e) => {
  var {
    typed: r,
    matrix: i,
    addScalar: a,
    multiplyScalar: t,
    equalScalar: n,
    dot: o
  } = e, f = Dr({
    typed: r,
    equalScalar: n
  }), l = ot({
    typed: r
  });
  function u(w, y) {
    switch (w.length) {
      case 1:
        switch (y.length) {
          case 1:
            if (w[0] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (w[0] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + w[0] + ") must match Matrix rows (" + y[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)");
        }
        break;
      case 2:
        switch (y.length) {
          case 1:
            if (w[1] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + w[1] + ") must match Vector length (" + y[0] + ")");
            break;
          case 2:
            if (w[1] !== y[0])
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + w[1] + ") must match Matrix B rows (" + y[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + w.length + " dimensions)");
    }
  }
  function s(w, y, A) {
    if (A === 0)
      throw new Error("Cannot multiply two empty vectors");
    return o(w, y);
  }
  function c(w, y) {
    if (y.storage() !== "dense")
      throw new Error("Support for SparseMatrix not implemented");
    return m(w, y);
  }
  function m(w, y) {
    var A = w._data, S = w._size, D = w._datatype || w.getDataType(), E = y._data, C = y._size, F = y._datatype || y.getDataType(), _ = S[0], I = C[1], $, T = a, B = t;
    D && F && D === F && typeof D == "string" && D !== "mixed" && ($ = D, T = r.find(a, [$, $]), B = r.find(t, [$, $]));
    for (var L = [], O = 0; O < I; O++) {
      for (var X = B(A[0], E[0][O]), K = 1; K < _; K++)
        X = T(X, B(A[K], E[K][O]));
      L[O] = X;
    }
    return w.createDenseMatrix({
      data: L,
      size: [I],
      datatype: D === w._datatype && F === y._datatype ? $ : void 0
    });
  }
  var v = r("_multiplyMatrixVector", {
    "DenseMatrix, any": p,
    "SparseMatrix, any": N
  }), d = r("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": x,
    "DenseMatrix, SparseMatrix": g,
    "SparseMatrix, DenseMatrix": h,
    "SparseMatrix, SparseMatrix": b
  });
  function p(w, y) {
    var A = w._data, S = w._size, D = w._datatype || w.getDataType(), E = y._data, C = y._datatype || y.getDataType(), F = S[0], _ = S[1], I, $ = a, T = t;
    D && C && D === C && typeof D == "string" && D !== "mixed" && (I = D, $ = r.find(a, [I, I]), T = r.find(t, [I, I]));
    for (var B = [], L = 0; L < F; L++) {
      for (var O = A[L], X = T(O[0], E[0]), K = 1; K < _; K++)
        X = $(X, T(O[K], E[K]));
      B[L] = X;
    }
    return w.createDenseMatrix({
      data: B,
      size: [F],
      datatype: D === w._datatype && C === y._datatype ? I : void 0
    });
  }
  function x(w, y) {
    var A = w._data, S = w._size, D = w._datatype || w.getDataType(), E = y._data, C = y._size, F = y._datatype || y.getDataType(), _ = S[0], I = S[1], $ = C[1], T, B = a, L = t;
    D && F && D === F && typeof D == "string" && D !== "mixed" && D !== "mixed" && (T = D, B = r.find(a, [T, T]), L = r.find(t, [T, T]));
    for (var O = [], X = 0; X < _; X++) {
      var K = A[X];
      O[X] = [];
      for (var V = 0; V < $; V++) {
        for (var z = L(K[0], E[0][V]), Q = 1; Q < I; Q++)
          z = B(z, L(K[Q], E[Q][V]));
        O[X][V] = z;
      }
    }
    return w.createDenseMatrix({
      data: O,
      size: [_, $],
      datatype: D === w._datatype && F === y._datatype ? T : void 0
    });
  }
  function g(w, y) {
    var A = w._data, S = w._size, D = w._datatype || w.getDataType(), E = y._values, C = y._index, F = y._ptr, _ = y._size, I = y._datatype || y._data === void 0 ? y._datatype : y.getDataType();
    if (!E)
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var $ = S[0], T = _[1], B, L = a, O = t, X = n, K = 0;
    D && I && D === I && typeof D == "string" && D !== "mixed" && (B = D, L = r.find(a, [B, B]), O = r.find(t, [B, B]), X = r.find(n, [B, B]), K = r.convert(0, B));
    for (var V = [], z = [], Q = [], ce = y.createSparseMatrix({
      values: V,
      index: z,
      ptr: Q,
      size: [$, T],
      datatype: D === w._datatype && I === y._datatype ? B : void 0
    }), j = 0; j < T; j++) {
      Q[j] = z.length;
      var re = F[j], oe = F[j + 1];
      if (oe > re)
        for (var ee = 0, ne = 0; ne < $; ne++) {
          for (var se = ne + 1, ve = void 0, we = re; we < oe; we++) {
            var Ae = C[we];
            ee !== se ? (ve = O(A[ne][Ae], E[we]), ee = se) : ve = L(ve, O(A[ne][Ae], E[we]));
          }
          ee === se && !X(ve, K) && (z.push(ne), V.push(ve));
        }
    }
    return Q[T] = z.length, ce;
  }
  function N(w, y) {
    var A = w._values, S = w._index, D = w._ptr, E = w._datatype || w._data === void 0 ? w._datatype : w.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var C = y._data, F = y._datatype || y.getDataType(), _ = w._size[0], I = y._size[0], $ = [], T = [], B = [], L, O = a, X = t, K = n, V = 0;
    E && F && E === F && typeof E == "string" && E !== "mixed" && (L = E, O = r.find(a, [L, L]), X = r.find(t, [L, L]), K = r.find(n, [L, L]), V = r.convert(0, L));
    var z = [], Q = [];
    B[0] = 0;
    for (var ce = 0; ce < I; ce++) {
      var j = C[ce];
      if (!K(j, V))
        for (var re = D[ce], oe = D[ce + 1], ee = re; ee < oe; ee++) {
          var ne = S[ee];
          Q[ne] ? z[ne] = O(z[ne], X(j, A[ee])) : (Q[ne] = !0, T.push(ne), z[ne] = X(j, A[ee]));
        }
    }
    for (var se = T.length, ve = 0; ve < se; ve++) {
      var we = T[ve];
      $[ve] = z[we];
    }
    return B[1] = T.length, w.createSparseMatrix({
      values: $,
      index: T,
      ptr: B,
      size: [_, 1],
      datatype: E === w._datatype && F === y._datatype ? L : void 0
    });
  }
  function h(w, y) {
    var A = w._values, S = w._index, D = w._ptr, E = w._datatype || w._data === void 0 ? w._datatype : w.getDataType();
    if (!A)
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var C = y._data, F = y._datatype || y.getDataType(), _ = w._size[0], I = y._size[0], $ = y._size[1], T, B = a, L = t, O = n, X = 0;
    E && F && E === F && typeof E == "string" && E !== "mixed" && (T = E, B = r.find(a, [T, T]), L = r.find(t, [T, T]), O = r.find(n, [T, T]), X = r.convert(0, T));
    for (var K = [], V = [], z = [], Q = w.createSparseMatrix({
      values: K,
      index: V,
      ptr: z,
      size: [_, $],
      datatype: E === w._datatype && F === y._datatype ? T : void 0
    }), ce = [], j = [], re = 0; re < $; re++) {
      z[re] = V.length;
      for (var oe = re + 1, ee = 0; ee < I; ee++) {
        var ne = C[ee][re];
        if (!O(ne, X))
          for (var se = D[ee], ve = D[ee + 1], we = se; we < ve; we++) {
            var Ae = S[we];
            j[Ae] !== oe ? (j[Ae] = oe, V.push(Ae), ce[Ae] = L(ne, A[we])) : ce[Ae] = B(ce[Ae], L(ne, A[we]));
          }
      }
      for (var P = z[re], H = V.length, te = P; te < H; te++) {
        var k = V[te];
        K[te] = ce[k];
      }
    }
    return z[$] = V.length, Q;
  }
  function b(w, y) {
    var A = w._values, S = w._index, D = w._ptr, E = w._datatype || w._data === void 0 ? w._datatype : w.getDataType(), C = y._values, F = y._index, _ = y._ptr, I = y._datatype || y._data === void 0 ? y._datatype : y.getDataType(), $ = w._size[0], T = y._size[1], B = A && C, L, O = a, X = t;
    E && I && E === I && typeof E == "string" && E !== "mixed" && (L = E, O = r.find(a, [L, L]), X = r.find(t, [L, L]));
    for (var K = B ? [] : void 0, V = [], z = [], Q = w.createSparseMatrix({
      values: K,
      index: V,
      ptr: z,
      size: [$, T],
      datatype: E === w._datatype && I === y._datatype ? L : void 0
    }), ce = B ? [] : void 0, j = [], re, oe, ee, ne, se, ve, we, Ae, P = 0; P < T; P++) {
      z[P] = V.length;
      var H = P + 1;
      for (se = _[P], ve = _[P + 1], ne = se; ne < ve; ne++)
        if (Ae = F[ne], B)
          for (oe = D[Ae], ee = D[Ae + 1], re = oe; re < ee; re++)
            we = S[re], j[we] !== H ? (j[we] = H, V.push(we), ce[we] = X(C[ne], A[re])) : ce[we] = O(ce[we], X(C[ne], A[re]));
        else
          for (oe = D[Ae], ee = D[Ae + 1], re = oe; re < ee; re++)
            we = S[re], j[we] !== H && (j[we] = H, V.push(we));
      if (B)
        for (var te = z[P], k = V.length, Y = te; Y < k; Y++) {
          var W = V[Y];
          K[Y] = ce[W];
        }
    }
    return z[T] = V.length, Q;
  }
  return r(Bs, t, {
    // we extend the signatures of multiplyScalar with signatures dealing with matrices
    "Array, Array": r.referTo("Matrix, Matrix", (w) => (y, A) => {
      u(qe(y), qe(A));
      var S = w(i(y), i(A));
      return Fe(S) ? S.valueOf() : S;
    }),
    "Matrix, Matrix": function(y, A) {
      var S = y.size(), D = A.size();
      return u(S, D), S.length === 1 ? D.length === 1 ? s(y, A, S[0]) : c(y, A) : D.length === 1 ? v(y, A) : d(y, A);
    },
    "Matrix, Array": r.referTo("Matrix,Matrix", (w) => (y, A) => w(y, i(A))),
    "Array, Matrix": r.referToSelf((w) => (y, A) => w(i(y, A.storage()), A)),
    "SparseMatrix, any": function(y, A) {
      return f(y, A, t, !1);
    },
    "DenseMatrix, any": function(y, A) {
      return l(y, A, t, !1);
    },
    "any, SparseMatrix": function(y, A) {
      return f(A, y, t, !0);
    },
    "any, DenseMatrix": function(y, A) {
      return l(A, y, t, !0);
    },
    "Array, any": function(y, A) {
      return l(i(y), A, t, !1).valueOf();
    },
    "any, Array": function(y, A) {
      return l(i(A), y, t, !0).valueOf();
    },
    "any, any": t,
    "any, any, ...any": r.referToSelf((w) => (y, A, S) => {
      for (var D = w(y, A), E = 0; E < S.length; E++)
        D = w(D, S[E]);
      return D;
    })
  });
}), Ts = "nthRoot", F1 = ["typed", "matrix", "equalScalar", "BigNumber", "concat"], B1 = /* @__PURE__ */ q(Ts, F1, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    BigNumber: t,
    concat: n
  } = e, o = $t({
    typed: r
  }), f = st({
    typed: r,
    equalScalar: a
  }), l = si({
    typed: r,
    equalScalar: a
  }), u = Dr({
    typed: r,
    equalScalar: a
  }), s = or({
    typed: r,
    matrix: i,
    concat: n
  });
  function c() {
    throw new Error("Complex number not supported in function nthRoot. Use nthRoots instead.");
  }
  return r(Ts, {
    number: Ko,
    "number, number": Ko,
    BigNumber: (v) => m(v, new t(2)),
    "BigNumber, BigNumber": m,
    Complex: c,
    "Complex, number": c,
    Array: r.referTo("DenseMatrix,number", (v) => (d) => v(i(d), 2).valueOf()),
    DenseMatrix: r.referTo("DenseMatrix,number", (v) => (d) => v(d, 2)),
    SparseMatrix: r.referTo("SparseMatrix,number", (v) => (d) => v(d, 2)),
    "SparseMatrix, SparseMatrix": r.referToSelf((v) => (d, p) => {
      if (p.density() === 1)
        return l(d, p, v);
      throw new Error("Root must be non-zero");
    }),
    "DenseMatrix, SparseMatrix": r.referToSelf((v) => (d, p) => {
      if (p.density() === 1)
        return o(d, p, v, !1);
      throw new Error("Root must be non-zero");
    }),
    "Array, SparseMatrix": r.referTo("DenseMatrix,SparseMatrix", (v) => (d, p) => v(i(d), p)),
    "number | BigNumber, SparseMatrix": r.referToSelf((v) => (d, p) => {
      if (p.density() === 1)
        return u(p, d, v, !0);
      throw new Error("Root must be non-zero");
    })
  }, s({
    scalar: "number | BigNumber",
    SD: f,
    Ss: u,
    sS: !1
  }));
  function m(v, d) {
    var p = t.precision, x = t.clone({
      precision: p + 2
    }), g = new t(0), N = new x(1), h = d.isNegative();
    if (h && (d = d.neg()), d.isZero())
      throw new Error("Root must be non-zero");
    if (v.isNegative() && !d.abs().mod(2).equals(1))
      throw new Error("Root must be odd when a is negative.");
    if (v.isZero())
      return h ? new x(1 / 0) : 0;
    if (!v.isFinite())
      return h ? g : v;
    var b = v.abs().pow(N.div(d));
    return b = v.isNeg() ? b.neg() : b, new t((h ? N.div(b) : b).toPrecision(p));
  }
}), Os = "sign", T1 = ["typed", "BigNumber", "Fraction", "complex"], O1 = /* @__PURE__ */ q(Os, T1, (e) => {
  var {
    typed: r,
    BigNumber: i,
    complex: a,
    Fraction: t
  } = e;
  return r(Os, {
    number: Ri,
    Complex: function(o) {
      return o.im === 0 ? a(Ri(o.re)) : o.sign();
    },
    BigNumber: function(o) {
      return new i(o.cmp(0));
    },
    Fraction: function(o) {
      return new t(o.s, 1);
    },
    // deep map collection, skip zeros since sign(0) = 0
    "Array | Matrix": r.referToSelf((n) => (o) => He(o, n)),
    Unit: r.referToSelf((n) => (o) => {
      if (!o._isDerived() && o.units[0].unit.offset !== 0)
        throw new TypeError("sign is ambiguous for units with offset");
      return r.find(n, o.valueType())(o.value);
    })
  });
}), _1 = "sqrt", $1 = ["config", "typed", "Complex"], I1 = /* @__PURE__ */ q(_1, $1, (e) => {
  var {
    config: r,
    typed: i,
    Complex: a
  } = e;
  return i("sqrt", {
    number: t,
    Complex: function(o) {
      return o.sqrt();
    },
    BigNumber: function(o) {
      return !o.isNegative() || r.predictable ? o.sqrt() : t(o.toNumber());
    },
    Unit: function(o) {
      return o.pow(0.5);
    }
  });
  function t(n) {
    return isNaN(n) ? NaN : n >= 0 || r.predictable ? Math.sqrt(n) : new a(n, 0).sqrt();
  }
}), _s = "square", q1 = ["typed"], R1 = /* @__PURE__ */ q(_s, q1, (e) => {
  var {
    typed: r
  } = e;
  return r(_s, {
    number: am,
    Complex: function(a) {
      return a.mul(a);
    },
    BigNumber: function(a) {
      return a.times(a);
    },
    Fraction: function(a) {
      return a.mul(a);
    },
    Unit: function(a) {
      return a.pow(2);
    }
  });
}), $s = "subtract", z1 = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], P1 = /* @__PURE__ */ q($s, z1, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    subtractScalar: t,
    unaryMinus: n,
    DenseMatrix: o,
    concat: f
  } = e, l = $t({
    typed: r
  }), u = Ir({
    typed: r
  }), s = oi({
    typed: r,
    equalScalar: a
  }), c = Zt({
    typed: r,
    DenseMatrix: o
  }), m = hr({
    typed: r,
    DenseMatrix: o
  }), v = or({
    typed: r,
    matrix: i,
    concat: f
  });
  return r($s, {
    "any, any": t
  }, v({
    elop: t,
    SS: s,
    DS: l,
    SD: u,
    Ss: m,
    sS: c
  }));
}), Is = "xgcd", U1 = ["typed", "config", "matrix", "BigNumber"], L1 = /* @__PURE__ */ q(Is, U1, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    BigNumber: t
  } = e;
  return r(Is, {
    "number, number": function(f, l) {
      var u = im(f, l);
      return i.matrix === "Array" ? u : a(u);
    },
    "BigNumber, BigNumber": n
    // TODO: implement support for Fraction
  });
  function n(o, f) {
    var l, u, s, c = new t(0), m = new t(1), v = c, d = m, p = m, x = c;
    if (!o.isInt() || !f.isInt())
      throw new Error("Parameters in function xgcd must be integer numbers");
    for (; !f.isZero(); )
      u = o.div(f).floor(), s = o.mod(f), l = v, v = d.minus(u.times(v)), d = l, l = p, p = x.minus(u.times(p)), x = l, o = f, f = s;
    var g;
    return o.lt(c) ? g = [o.neg(), d.neg(), x.neg()] : g = [o, o.isZero() ? 0 : d, x], i.matrix === "Array" ? g : a(g);
  }
}), qs = "invmod", k1 = ["typed", "config", "BigNumber", "xgcd", "equal", "smaller", "mod", "add", "isInteger"], H1 = /* @__PURE__ */ q(qs, k1, (e) => {
  var {
    typed: r,
    config: i,
    BigNumber: a,
    xgcd: t,
    equal: n,
    smaller: o,
    mod: f,
    add: l,
    isInteger: u
  } = e;
  return r(qs, {
    "number, number": s,
    "BigNumber, BigNumber": s
  });
  function s(c, m) {
    if (!u(c) || !u(m))
      throw new Error("Parameters in function invmod must be integer numbers");
    if (c = f(c, m), n(m, 0))
      throw new Error("Divisor must be non zero");
    var v = t(c, m);
    v = v.valueOf();
    var [d, p] = v;
    return n(d, a(1)) ? (p = f(p, m), o(p, a(0)) && (p = l(p, m)), p) : NaN;
  }
}), G1 = "matAlgo09xS0Sf", V1 = ["typed", "equalScalar"], Hm = /* @__PURE__ */ q(G1, V1, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o) {
    var f = t._values, l = t._index, u = t._ptr, s = t._size, c = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), m = n._values, v = n._index, d = n._ptr, p = n._size, x = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (s.length !== p.length)
      throw new ke(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    var g = s[0], N = s[1], h, b = i, w = 0, y = o;
    typeof c == "string" && c === x && c !== "mixed" && (h = c, b = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
    var A = f && m ? [] : void 0, S = [], D = [], E = A ? [] : void 0, C = [], F, _, I, $, T;
    for (_ = 0; _ < N; _++) {
      D[_] = S.length;
      var B = _ + 1;
      if (E)
        for ($ = d[_], T = d[_ + 1], I = $; I < T; I++)
          F = v[I], C[F] = B, E[F] = m[I];
      for ($ = u[_], T = u[_ + 1], I = $; I < T; I++)
        if (F = l[I], E) {
          var L = C[F] === B ? E[F] : w, O = y(f[I], L);
          b(O, w) || (S.push(F), A.push(O));
        } else
          S.push(F);
    }
    return D[N] = S.length, t.createSparseMatrix({
      values: A,
      index: S,
      ptr: D,
      size: [g, N],
      datatype: c === t._datatype && x === n._datatype ? h : void 0
    });
  };
}), Rs = "dotMultiply", Z1 = ["typed", "matrix", "equalScalar", "multiplyScalar", "concat"], Y1 = /* @__PURE__ */ q(Rs, Z1, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    multiplyScalar: t,
    concat: n
  } = e, o = st({
    typed: r,
    equalScalar: a
  }), f = Hm({
    typed: r,
    equalScalar: a
  }), l = Dr({
    typed: r,
    equalScalar: a
  }), u = or({
    typed: r,
    matrix: i,
    concat: n
  });
  return r(Rs, u({
    elop: t,
    SS: f,
    DS: o,
    Ss: l
  }));
});
function X1(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger())
    throw new Error("Integers expected in function bitAnd");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN())
    return new i(NaN);
  if (e.isZero() || r.eq(-1) || e.eq(r))
    return e;
  if (r.isZero() || e.eq(-1))
    return r;
  if (!e.isFinite() || !r.isFinite()) {
    if (!e.isFinite() && !r.isFinite())
      return e.isNegative() === r.isNegative() ? e : new i(0);
    if (!e.isFinite())
      return r.isNegative() ? e : e.isNegative() ? new i(0) : r;
    if (!r.isFinite())
      return e.isNegative() ? r : r.isNegative() ? new i(0) : e;
  }
  return eo(e, r, function(a, t) {
    return a & t;
  });
}
function Zn(e) {
  if (e.isFinite() && !e.isInteger())
    throw new Error("Integer expected in function bitNot");
  var r = e.constructor, i = r.precision;
  r.config({
    precision: 1e9
  });
  var a = e.plus(new r(1));
  return a.s = -a.s || null, r.config({
    precision: i
  }), a;
}
function W1(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger())
    throw new Error("Integers expected in function bitOr");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN())
    return new i(NaN);
  var a = new i(-1);
  return e.isZero() || r.eq(a) || e.eq(r) ? r : r.isZero() || e.eq(a) ? e : !e.isFinite() || !r.isFinite() ? !e.isFinite() && !e.isNegative() && r.isNegative() || e.isNegative() && !r.isNegative() && !r.isFinite() ? a : e.isNegative() && r.isNegative() ? e.isFinite() ? e : r : e.isFinite() ? r : e : eo(e, r, function(t, n) {
    return t | n;
  });
}
function eo(e, r, i) {
  var a = e.constructor, t, n, o = +(e.s < 0), f = +(r.s < 0);
  if (o) {
    t = ua(Zn(e));
    for (var l = 0; l < t.length; ++l)
      t[l] ^= 1;
  } else
    t = ua(e);
  if (f) {
    n = ua(Zn(r));
    for (var u = 0; u < n.length; ++u)
      n[u] ^= 1;
  } else
    n = ua(r);
  var s, c, m;
  t.length <= n.length ? (s = t, c = n, m = o) : (s = n, c = t, m = f);
  var v = s.length, d = c.length, p = i(o, f) ^ 1, x = new a(p ^ 1), g = new a(1), N = new a(2), h = a.precision;
  for (a.config({
    precision: 1e9
  }); v > 0; )
    i(s[--v], c[--d]) === p && (x = x.plus(g)), g = g.times(N);
  for (; d > 0; )
    i(m, c[--d]) === p && (x = x.plus(g)), g = g.times(N);
  return a.config({
    precision: h
  }), p === 0 && (x.s = -x.s), x;
}
function ua(e) {
  for (var r = e.d, i = r[0] + "", a = 1; a < r.length; ++a) {
    for (var t = r[a] + "", n = 7 - t.length; n--; )
      t = "0" + t;
    i += t;
  }
  for (var o = i.length; i.charAt(o) === "0"; )
    o--;
  var f = e.e, l = i.slice(0, o + 1 || 1), u = l.length;
  if (f > 0)
    if (++f > u)
      for (f -= u; f--; )
        l += "0";
    else
      f < u && (l = l.slice(0, f) + "." + l.slice(f));
  for (var s = [0], c = 0; c < l.length; ) {
    for (var m = s.length; m--; )
      s[m] *= 10;
    s[0] += parseInt(l.charAt(c++));
    for (var v = 0; v < s.length; ++v)
      s[v] > 1 && ((s[v + 1] === null || s[v + 1] === void 0) && (s[v + 1] = 0), s[v + 1] += s[v] >> 1, s[v] &= 1);
  }
  return s.reverse();
}
function J1(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger())
    throw new Error("Integers expected in function bitXor");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN())
    return new i(NaN);
  if (e.isZero())
    return r;
  if (r.isZero())
    return e;
  if (e.eq(r))
    return new i(0);
  var a = new i(-1);
  return e.eq(a) ? Zn(r) : r.eq(a) ? Zn(e) : !e.isFinite() || !r.isFinite() ? !e.isFinite() && !r.isFinite() ? a : new i(e.isNegative() === r.isNegative() ? 1 / 0 : -1 / 0) : eo(e, r, function(t, n) {
    return t ^ n;
  });
}
function Q1(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger())
    throw new Error("Integers expected in function leftShift");
  var i = e.constructor;
  return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new i(NaN) : e.isZero() || r.isZero() ? e : !e.isFinite() && !r.isFinite() ? new i(NaN) : r.lt(55) ? e.times(Math.pow(2, r.toNumber()) + "") : e.times(new i(2).pow(r));
}
function K1(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger())
    throw new Error("Integers expected in function rightArithShift");
  var i = e.constructor;
  return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new i(NaN) : e.isZero() || r.isZero() ? e : r.isFinite() ? r.lt(55) ? e.div(Math.pow(2, r.toNumber()) + "").floor() : e.div(new i(2).pow(r)).floor() : e.isNegative() ? new i(-1) : e.isFinite() ? new i(0) : new i(NaN);
}
var zs = "bitAnd", j1 = ["typed", "matrix", "equalScalar", "concat"], Gm = /* @__PURE__ */ q(zs, j1, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    concat: t
  } = e, n = st({
    typed: r,
    equalScalar: a
  }), o = si({
    typed: r,
    equalScalar: a
  }), f = Dr({
    typed: r,
    equalScalar: a
  }), l = or({
    typed: r,
    matrix: i,
    concat: t
  });
  return r(zs, {
    "number, number": sm,
    "BigNumber, BigNumber": X1
  }, l({
    SS: o,
    DS: n,
    Ss: f
  }));
}), Ps = "bitNot", ey = ["typed"], ry = /* @__PURE__ */ q(Ps, ey, (e) => {
  var {
    typed: r
  } = e;
  return r(Ps, {
    number: um,
    BigNumber: Zn,
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Us = "bitOr", ty = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], Vm = /* @__PURE__ */ q(Us, ty, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  } = e, o = $t({
    typed: r
  }), f = ji({
    typed: r,
    equalScalar: a
  }), l = Zt({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: i,
    concat: n
  });
  return r(Us, {
    "number, number": lm,
    "BigNumber, BigNumber": W1
  }, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), ny = "matAlgo07xSSf", ay = ["typed", "DenseMatrix"], ft = /* @__PURE__ */ q(ny, ay, (e) => {
  var {
    typed: r,
    DenseMatrix: i
  } = e;
  return function(n, o, f) {
    var l = n._size, u = n._datatype || n._data === void 0 ? n._datatype : n.getDataType(), s = o._size, c = o._datatype || o._data === void 0 ? o._datatype : o.getDataType();
    if (l.length !== s.length)
      throw new ke(l.length, s.length);
    if (l[0] !== s[0] || l[1] !== s[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + s + ")");
    var m = l[0], v = l[1], d, p = 0, x = f;
    typeof u == "string" && u === c && u !== "mixed" && (d = u, p = r.convert(0, d), x = r.find(f, [d, d]));
    var g, N, h = [];
    for (g = 0; g < m; g++)
      h[g] = [];
    var b = [], w = [], y = [], A = [];
    for (N = 0; N < v; N++) {
      var S = N + 1;
      for (a(n, N, y, b, S), a(o, N, A, w, S), g = 0; g < m; g++) {
        var D = y[g] === S ? b[g] : p, E = A[g] === S ? w[g] : p;
        h[g][N] = x(D, E);
      }
    }
    return new i({
      data: h,
      size: [m, v],
      datatype: u === n._datatype && c === o._datatype ? d : void 0
    });
  };
  function a(t, n, o, f, l) {
    for (var u = t._values, s = t._index, c = t._ptr, m = c[n], v = c[n + 1]; m < v; m++) {
      var d = s[m];
      o[d] = l, f[d] = u[m];
    }
  }
}), Ls = "bitXor", iy = ["typed", "matrix", "DenseMatrix", "concat"], oy = /* @__PURE__ */ q(Ls, iy, (e) => {
  var {
    typed: r,
    matrix: i,
    DenseMatrix: a,
    concat: t
  } = e, n = Ir({
    typed: r
  }), o = ft({
    typed: r,
    DenseMatrix: a
  }), f = hr({
    typed: r,
    DenseMatrix: a
  }), l = or({
    typed: r,
    matrix: i,
    concat: t
  });
  return r(Ls, {
    "number, number": cm,
    "BigNumber, BigNumber": J1
  }, l({
    SS: o,
    DS: n,
    Ss: f
  }));
}), ks = "arg", sy = ["typed"], uy = /* @__PURE__ */ q(ks, sy, (e) => {
  var {
    typed: r
  } = e;
  return r(ks, {
    number: function(a) {
      return Math.atan2(0, a);
    },
    BigNumber: function(a) {
      return a.constructor.atan2(0, a);
    },
    Complex: function(a) {
      return a.arg();
    },
    // TODO: implement BigNumber support for function arg
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Hs = "conj", ly = ["typed"], cy = /* @__PURE__ */ q(Hs, ly, (e) => {
  var {
    typed: r
  } = e;
  return r(Hs, {
    "number | BigNumber | Fraction": (i) => i,
    Complex: (i) => i.conjugate(),
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Gs = "im", fy = ["typed"], my = /* @__PURE__ */ q(Gs, fy, (e) => {
  var {
    typed: r
  } = e;
  return r(Gs, {
    number: () => 0,
    "BigNumber | Fraction": (i) => i.mul(0),
    Complex: (i) => i.im,
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Vs = "re", vy = ["typed"], py = /* @__PURE__ */ q(Vs, vy, (e) => {
  var {
    typed: r
  } = e;
  return r(Vs, {
    "number | BigNumber | Fraction": (i) => i,
    Complex: (i) => i.re,
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Zs = "not", dy = ["typed"], hy = /* @__PURE__ */ q(Zs, dy, (e) => {
  var {
    typed: r
  } = e;
  return r(Zs, {
    "null | undefined": () => !0,
    number: dm,
    Complex: function(a) {
      return a.re === 0 && a.im === 0;
    },
    BigNumber: function(a) {
      return a.isZero() || a.isNaN();
    },
    Unit: r.referToSelf((i) => (a) => r.find(i, a.valueType())(a.value)),
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), Ys = "or", gy = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], Zm = /* @__PURE__ */ q(Ys, gy, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = oi({
    typed: r,
    equalScalar: a
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: i,
    concat: n
  });
  return r(Ys, {
    "number, number": hm,
    "Complex, Complex": function(c, m) {
      return c.re !== 0 || c.im !== 0 || m.re !== 0 || m.im !== 0;
    },
    "BigNumber, BigNumber": function(c, m) {
      return !c.isZero() && !c.isNaN() || !m.isZero() && !m.isNaN();
    },
    "Unit, Unit": r.referToSelf((s) => (c, m) => s(c.value || 0, m.value || 0))
  }, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), Xs = "xor", yy = ["typed", "matrix", "DenseMatrix", "concat"], by = /* @__PURE__ */ q(Xs, yy, (e) => {
  var {
    typed: r,
    matrix: i,
    DenseMatrix: a,
    concat: t
  } = e, n = Ir({
    typed: r
  }), o = ft({
    typed: r,
    DenseMatrix: a
  }), f = hr({
    typed: r,
    DenseMatrix: a
  }), l = or({
    typed: r,
    matrix: i,
    concat: t
  });
  return r(Xs, {
    "number, number": gm,
    "Complex, Complex": function(s, c) {
      return (s.re !== 0 || s.im !== 0) != (c.re !== 0 || c.im !== 0);
    },
    "BigNumber, BigNumber": function(s, c) {
      return (!s.isZero() && !s.isNaN()) != (!c.isZero() && !c.isNaN());
    },
    "Unit, Unit": r.referToSelf((u) => (s, c) => u(s.value || 0, c.value || 0))
  }, l({
    SS: o,
    DS: n,
    Ss: f
  }));
}), Ws = "concat", xy = ["typed", "matrix", "isInteger"], Ym = /* @__PURE__ */ q(Ws, xy, (e) => {
  var {
    typed: r,
    matrix: i,
    isInteger: a
  } = e;
  return r(Ws, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    "...Array | Matrix | number | BigNumber": function(n) {
      var o, f = n.length, l = -1, u, s = !1, c = [];
      for (o = 0; o < f; o++) {
        var m = n[o];
        if (Fe(m) && (s = !0), Re(m) || ze(m)) {
          if (o !== f - 1)
            throw new Error("Dimension must be specified as last argument");
          if (u = l, l = m.valueOf(), !a(l))
            throw new TypeError("Integer number expected for dimension");
          if (l < 0 || o > 0 && l > u)
            throw new at(l, u + 1);
        } else {
          var v = _e(m).valueOf(), d = qe(v);
          if (c[o] = v, u = l, l = d.length - 1, o > 0 && l !== u)
            throw new ke(u + 1, l + 1);
        }
      }
      if (c.length === 0)
        throw new SyntaxError("At least one matrix expected");
      for (var p = c.shift(); c.length; )
        p = Af(p, c.shift(), l);
      return s ? i(p) : p;
    },
    "...string": function(n) {
      return n.join("");
    }
  });
}), Js = "column", wy = ["typed", "Index", "matrix", "range"], Xm = /* @__PURE__ */ q(Js, wy, (e) => {
  var {
    typed: r,
    Index: i,
    matrix: a,
    range: t
  } = e;
  return r(Js, {
    "Matrix, number": n,
    "Array, number": function(f, l) {
      return n(a(_e(f)), l).valueOf();
    }
  });
  function n(o, f) {
    if (o.size().length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    tr(f, o.size()[1]);
    var l = t(0, o.size()[0]), u = new i(l, f), s = o.subset(u);
    return Fe(s) ? s : a([[s]]);
  }
}), Qs = "count", Ny = ["typed", "size", "prod"], Dy = /* @__PURE__ */ q(Qs, Ny, (e) => {
  var {
    typed: r,
    size: i,
    prod: a
  } = e;
  return r(Qs, {
    string: function(n) {
      return n.length;
    },
    "Matrix | Array": function(n) {
      return a(i(n));
    }
  });
}), Ks = "cross", Ay = ["typed", "matrix", "subtract", "multiply"], Ey = /* @__PURE__ */ q(Ks, Ay, (e) => {
  var {
    typed: r,
    matrix: i,
    subtract: a,
    multiply: t
  } = e;
  return r(Ks, {
    "Matrix, Matrix": function(f, l) {
      return i(n(f.toArray(), l.toArray()));
    },
    "Matrix, Array": function(f, l) {
      return i(n(f.toArray(), l));
    },
    "Array, Matrix": function(f, l) {
      return i(n(f, l.toArray()));
    },
    "Array, Array": n
  });
  function n(o, f) {
    var l = Math.max(qe(o).length, qe(f).length);
    o = Ma(o), f = Ma(f);
    var u = qe(o), s = qe(f);
    if (u.length !== 1 || s.length !== 1 || u[0] !== 3 || s[0] !== 3)
      throw new RangeError("Vectors with length 3 expected (Size A = [" + u.join(", ") + "], B = [" + s.join(", ") + "])");
    var c = [a(t(o[1], f[2]), t(o[2], f[1])), a(t(o[2], f[0]), t(o[0], f[2])), a(t(o[0], f[1]), t(o[1], f[0]))];
    return l > 1 ? [c] : c;
  }
}), js = "diag", Sy = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], Cy = /* @__PURE__ */ q(js, Sy, (e) => {
  var {
    typed: r,
    matrix: i,
    DenseMatrix: a,
    SparseMatrix: t
  } = e;
  return r(js, {
    // FIXME: simplify this huge amount of signatures as soon as typed-function supports optional arguments
    Array: function(u) {
      return n(u, 0, qe(u), null);
    },
    "Array, number": function(u, s) {
      return n(u, s, qe(u), null);
    },
    "Array, BigNumber": function(u, s) {
      return n(u, s.toNumber(), qe(u), null);
    },
    "Array, string": function(u, s) {
      return n(u, 0, qe(u), s);
    },
    "Array, number, string": function(u, s, c) {
      return n(u, s, qe(u), c);
    },
    "Array, BigNumber, string": function(u, s, c) {
      return n(u, s.toNumber(), qe(u), c);
    },
    Matrix: function(u) {
      return n(u, 0, u.size(), u.storage());
    },
    "Matrix, number": function(u, s) {
      return n(u, s, u.size(), u.storage());
    },
    "Matrix, BigNumber": function(u, s) {
      return n(u, s.toNumber(), u.size(), u.storage());
    },
    "Matrix, string": function(u, s) {
      return n(u, 0, u.size(), s);
    },
    "Matrix, number, string": function(u, s, c) {
      return n(u, s, u.size(), c);
    },
    "Matrix, BigNumber, string": function(u, s, c) {
      return n(u, s.toNumber(), u.size(), c);
    }
  });
  function n(l, u, s, c) {
    if (!Se(u))
      throw new TypeError("Second parameter in function diag must be an integer");
    var m = u > 0 ? u : 0, v = u < 0 ? -u : 0;
    switch (s.length) {
      case 1:
        return o(l, u, c, s[0], v, m);
      case 2:
        return f(l, u, c, s, v, m);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function o(l, u, s, c, m, v) {
    var d = [c + m, c + v];
    if (s && s !== "sparse" && s !== "dense")
      throw new TypeError("Unknown matrix type ".concat(s, '"'));
    var p = s === "sparse" ? t.diagonal(d, l, u) : a.diagonal(d, l, u);
    return s !== null ? p : p.valueOf();
  }
  function f(l, u, s, c, m, v) {
    if (Fe(l)) {
      var d = l.diagonal(u);
      return s !== null ? s !== d.storage() ? i(d, s) : d : d.valueOf();
    }
    for (var p = Math.min(c[0] - m, c[1] - v), x = [], g = 0; g < p; g++)
      x[g] = l[g + m][g + v];
    return s !== null ? i(x) : x;
  }
});
function Cn(e, r, i, a, t) {
  if (un.isTypedFunction(e)) {
    var n = [r, i, a], o = un.resolve(e, n);
    if (o)
      return c(o.implementation, n);
    var f = [r, i], l = un.resolve(e, f);
    if (l)
      return c(l.implementation, f);
    var u = [r], s = un.resolve(e, u);
    return s ? c(s.implementation, u) : c(e, n);
  } else
    return e(r, i, a);
  function c(m, v) {
    try {
      return m.apply(m, v);
    } catch (x) {
      var d;
      if (x instanceof TypeError && ((d = x.data) === null || d === void 0 ? void 0 : d.category) === "wrongType") {
        var p = [];
        throw p.push("value: ".concat(ar(r))), v.length >= 2 && p.push("index: ".concat(ar(i))), v.length >= 3 && p.push("array: ".concat(ar(a))), new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "".concat(e.name, "(").concat(p.join(", "), ") at index ").concat(JSON.stringify(i)));
      } else
        throw new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "to function ".concat(e.name, ": ").concat(x.message));
    }
  }
}
var My = "filter", Fy = ["typed"], By = /* @__PURE__ */ q(My, Fy, (e) => {
  var {
    typed: r
  } = e;
  return r("filter", {
    "Array, function": eu,
    "Matrix, function": function(a, t) {
      return a.create(eu(a.toArray(), t));
    },
    "Array, RegExp": Fa,
    "Matrix, RegExp": function(a, t) {
      return a.create(Fa(a.toArray(), t));
    }
  });
});
function eu(e, r) {
  return Nf(e, function(i, a, t) {
    return Cn(r, i, [a], t, "filter");
  });
}
var ru = "flatten", Ty = ["typed", "matrix"], Oy = /* @__PURE__ */ q(ru, Ty, (e) => {
  var {
    typed: r,
    matrix: i
  } = e;
  return r(ru, {
    Array: function(t) {
      return Qe(t);
    },
    Matrix: function(t) {
      var n = Qe(t.toArray());
      return i(n);
    }
  });
}), tu = "forEach", _y = ["typed"], $y = /* @__PURE__ */ q(tu, _y, (e) => {
  var {
    typed: r
  } = e;
  return r(tu, {
    "Array, function": Iy,
    "Matrix, function": function(a, t) {
      a.forEach(t);
    }
  });
});
function Iy(e, r) {
  var i = function a(t, n) {
    if (Array.isArray(t))
      ja(t, function(o, f) {
        a(o, n.concat(f));
      });
    else
      return Cn(r, t, n, e, "forEach");
  };
  i(e, []);
}
var nu = "getMatrixDataType", qy = ["typed"], Ry = /* @__PURE__ */ q(nu, qy, (e) => {
  var {
    typed: r
  } = e;
  return r(nu, {
    Array: function(a) {
      return Hn(a, ar);
    },
    Matrix: function(a) {
      return a.getDataType();
    }
  });
}), au = "identity", zy = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], Py = /* @__PURE__ */ q(au, zy, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    BigNumber: t,
    DenseMatrix: n,
    SparseMatrix: o
  } = e;
  return r(au, {
    "": function() {
      return i.matrix === "Matrix" ? a([]) : [];
    },
    string: function(s) {
      return a(s);
    },
    "number | BigNumber": function(s) {
      return l(s, s, i.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, string": function(s, c) {
      return l(s, s, c);
    },
    "number | BigNumber, number | BigNumber": function(s, c) {
      return l(s, c, i.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, number | BigNumber, string": function(s, c, m) {
      return l(s, c, m);
    },
    Array: function(s) {
      return f(s);
    },
    "Array, string": function(s, c) {
      return f(s, c);
    },
    Matrix: function(s) {
      return f(s.valueOf(), s.storage());
    },
    "Matrix, string": function(s, c) {
      return f(s.valueOf(), c);
    }
  });
  function f(u, s) {
    switch (u.length) {
      case 0:
        return s ? a(s) : [];
      case 1:
        return l(u[0], u[0], s);
      case 2:
        return l(u[0], u[1], s);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function l(u, s, c) {
    var m = ze(u) || ze(s) ? t : null;
    if (ze(u) && (u = u.toNumber()), ze(s) && (s = s.toNumber()), !Se(u) || u < 1)
      throw new Error("Parameters in function identity must be positive integers");
    if (!Se(s) || s < 1)
      throw new Error("Parameters in function identity must be positive integers");
    var v = m ? new t(1) : 1, d = m ? new m(0) : 0, p = [u, s];
    if (c) {
      if (c === "sparse")
        return o.diagonal(p, v, 0, d);
      if (c === "dense")
        return n.diagonal(p, v, 0, d);
      throw new TypeError('Unknown matrix type "'.concat(c, '"'));
    }
    for (var x = dn([], p, d), g = u < s ? u : s, N = 0; N < g; N++)
      x[N][N] = v;
    return x;
  }
}), iu = "kron", Uy = ["typed", "matrix", "multiplyScalar"], Ly = /* @__PURE__ */ q(iu, Uy, (e) => {
  var {
    typed: r,
    matrix: i,
    multiplyScalar: a
  } = e;
  return r(iu, {
    "Matrix, Matrix": function(o, f) {
      return i(t(o.toArray(), f.toArray()));
    },
    "Matrix, Array": function(o, f) {
      return i(t(o.toArray(), f));
    },
    "Array, Matrix": function(o, f) {
      return i(t(o, f.toArray()));
    },
    "Array, Array": t
  });
  function t(n, o) {
    if (qe(n).length === 1 && (n = [n]), qe(o).length === 1 && (o = [o]), qe(n).length > 2 || qe(o).length > 2)
      throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(n.length) + ", y = " + JSON.stringify(o.length) + ")");
    var f = [], l = [];
    return n.map(function(u) {
      return o.map(function(s) {
        return l = [], f.push(l), u.map(function(c) {
          return s.map(function(m) {
            return l.push(a(c, m));
          });
        });
      });
    }) && f;
  }
}), ou = "map", ky = ["typed"], Hy = /* @__PURE__ */ q(ou, ky, (e) => {
  var {
    typed: r
  } = e;
  return r(ou, {
    "Array, function": Gy,
    "Matrix, function": function(a, t) {
      return a.map(t);
    }
  });
});
function Gy(e, r) {
  var i = function a(t, n) {
    return Array.isArray(t) ? t.map(function(o, f) {
      return a(o, n.concat(f));
    }) : Cn(r, t, n, e, "map");
  };
  return i(e, []);
}
var su = "diff", Vy = ["typed", "matrix", "subtract", "number"], Wm = /* @__PURE__ */ q(su, Vy, (e) => {
  var {
    typed: r,
    matrix: i,
    subtract: a,
    number: t
  } = e;
  return r(su, {
    "Array | Matrix": function(s) {
      return Fe(s) ? i(o(s.toArray())) : o(s);
    },
    "Array | Matrix, number": function(s, c) {
      if (!Se(c))
        throw new RangeError("Dimension must be a whole number");
      return Fe(s) ? i(n(s.toArray(), c)) : n(s, c);
    },
    "Array, BigNumber": r.referTo("Array,number", (u) => (s, c) => u(s, t(c))),
    "Matrix, BigNumber": r.referTo("Matrix,number", (u) => (s, c) => u(s, t(c)))
  });
  function n(u, s) {
    if (Fe(u) && (u = u.toArray()), !Array.isArray(u))
      throw RangeError("Array/Matrix does not have that many dimensions");
    if (s > 0) {
      var c = [];
      return u.forEach((m) => {
        c.push(n(m, s - 1));
      }), c;
    } else {
      if (s === 0)
        return o(u);
      throw RangeError("Cannot have negative dimension");
    }
  }
  function o(u) {
    for (var s = [], c = u.length, m = 1; m < c; m++)
      s.push(f(u[m - 1], u[m]));
    return s;
  }
  function f(u, s) {
    Fe(u) && (u = u.toArray()), Fe(s) && (s = s.toArray());
    var c = Array.isArray(u), m = Array.isArray(s);
    if (c && m)
      return l(u, s);
    if (!c && !m)
      return a(s, u);
    throw TypeError("Cannot calculate difference between 1 array and 1 non-array");
  }
  function l(u, s) {
    if (u.length !== s.length)
      throw RangeError("Not all sub-arrays have the same length");
    for (var c = [], m = u.length, v = 0; v < m; v++)
      c.push(f(u[v], s[v]));
    return c;
  }
}), Zy = "ones", Yy = ["typed", "config", "matrix", "BigNumber"], Xy = /* @__PURE__ */ q(Zy, Yy, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    BigNumber: t
  } = e;
  return r("ones", {
    "": function() {
      return i.matrix === "Array" ? n([]) : n([], "default");
    },
    // math.ones(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    "...number | BigNumber | string": function(u) {
      var s = u[u.length - 1];
      if (typeof s == "string") {
        var c = u.pop();
        return n(u, c);
      } else
        return i.matrix === "Array" ? n(u) : n(u, "default");
    },
    Array: n,
    Matrix: function(u) {
      var s = u.storage();
      return n(u.valueOf(), s);
    },
    "Array | Matrix, string": function(u, s) {
      return n(u.valueOf(), s);
    }
  });
  function n(l, u) {
    var s = o(l), c = s ? new t(1) : 1;
    if (f(l), u) {
      var m = a(u);
      return l.length > 0 ? m.resize(l, c) : m;
    } else {
      var v = [];
      return l.length > 0 ? dn(v, l, c) : v;
    }
  }
  function o(l) {
    var u = !1;
    return l.forEach(function(s, c, m) {
      ze(s) && (u = !0, m[c] = s.toNumber());
    }), u;
  }
  function f(l) {
    l.forEach(function(u) {
      if (typeof u != "number" || !Se(u) || u < 0)
        throw new Error("Parameters in function ones must be positive integers");
    });
  }
});
function ro() {
  throw new Error('No "bignumber" implementation available');
}
function Jm() {
  throw new Error('No "fraction" implementation available');
}
function Qm() {
  throw new Error('No "matrix" implementation available');
}
var uu = "range", Wy = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], Km = /* @__PURE__ */ q(uu, Wy, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    bignumber: t,
    smaller: n,
    smallerEq: o,
    larger: f,
    largerEq: l,
    add: u,
    isPositive: s
  } = e;
  return r(uu, {
    // TODO: simplify signatures when typed-function supports default values and optional arguments
    // TODO: a number or boolean should not be converted to string here
    string: m,
    "string, boolean": m,
    "number, number": function(x, g) {
      return c(v(x, g, 1, !1));
    },
    "number, number, number": function(x, g, N) {
      return c(v(x, g, N, !1));
    },
    "number, number, boolean": function(x, g, N) {
      return c(v(x, g, 1, N));
    },
    "number, number, number, boolean": function(x, g, N, h) {
      return c(v(x, g, N, h));
    },
    "BigNumber, BigNumber": function(x, g) {
      var N = x.constructor;
      return c(v(x, g, new N(1), !1));
    },
    "BigNumber, BigNumber, BigNumber": function(x, g, N) {
      return c(v(x, g, N, !1));
    },
    "BigNumber, BigNumber, boolean": function(x, g, N) {
      var h = x.constructor;
      return c(v(x, g, new h(1), N));
    },
    "BigNumber, BigNumber, BigNumber, boolean": function(x, g, N, h) {
      return c(v(x, g, N, h));
    },
    "Unit, Unit, Unit": function(x, g, N) {
      return c(v(x, g, N, !1));
    },
    "Unit, Unit, Unit, boolean": function(x, g, N, h) {
      return c(v(x, g, N, h));
    }
  });
  function c(p) {
    return i.matrix === "Matrix" ? a ? a(p) : Qm() : p;
  }
  function m(p, x) {
    var g = d(p);
    if (!g)
      throw new SyntaxError('String "' + p + '" is no valid range');
    return i.number === "BigNumber" ? (t === void 0 && ro(), c(v(t(g.start), t(g.end), t(g.step)))) : c(v(g.start, g.end, g.step, x));
  }
  function v(p, x, g, N) {
    for (var h = [], b = s(g) ? N ? o : n : N ? l : f, w = p; b(w, x); )
      h.push(w), w = u(w, g);
    return h;
  }
  function d(p) {
    var x = p.split(":"), g = x.map(function(h) {
      return Number(h);
    }), N = g.some(function(h) {
      return isNaN(h);
    });
    if (N)
      return null;
    switch (g.length) {
      case 2:
        return {
          start: g[0],
          end: g[1],
          step: 1
        };
      case 3:
        return {
          start: g[0],
          end: g[2],
          step: g[1]
        };
      default:
        return null;
    }
  }
}), lu = "reshape", Jy = ["typed", "isInteger", "matrix"], Qy = /* @__PURE__ */ q(lu, Jy, (e) => {
  var {
    typed: r,
    isInteger: i
  } = e;
  return r(lu, {
    "Matrix, Array": function(t, n) {
      return t.reshape(n, !0);
    },
    "Array, Array": function(t, n) {
      return n.forEach(function(o) {
        if (!i(o))
          throw new TypeError("Invalid size for dimension: " + o);
      }), Yi(t, n);
    }
  });
}), Ky = "resize", jy = ["config", "matrix"], eb = /* @__PURE__ */ q(Ky, jy, (e) => {
  var {
    config: r,
    matrix: i
  } = e;
  return function(n, o, f) {
    if (arguments.length !== 2 && arguments.length !== 3)
      throw new Yt("resize", arguments.length, 2, 3);
    if (Fe(o) && (o = o.valueOf()), ze(o[0]) && (o = o.map(function(s) {
      return ze(s) ? s.toNumber() : s;
    })), Fe(n))
      return n.resize(o, f, !0);
    if (typeof n == "string")
      return a(n, o, f);
    var l = Array.isArray(n) ? !1 : r.matrix !== "Array";
    if (o.length === 0) {
      for (; Array.isArray(n); )
        n = n[0];
      return _e(n);
    } else {
      Array.isArray(n) || (n = [n]), n = _e(n);
      var u = dn(n, o, f);
      return l ? i(u) : u;
    }
  };
  function a(t, n, o) {
    if (o !== void 0) {
      if (typeof o != "string" || o.length !== 1)
        throw new TypeError("Single character expected as defaultValue");
    } else
      o = " ";
    if (n.length !== 1)
      throw new ke(n.length, 1);
    var f = n[0];
    if (typeof f != "number" || !Se(f))
      throw new TypeError("Invalid size, must contain positive integers (size: " + Le(n) + ")");
    if (t.length > f)
      return t.substring(0, f);
    if (t.length < f) {
      for (var l = t, u = 0, s = f - t.length; u < s; u++)
        l += o;
      return l;
    } else
      return t;
  }
}), cu = "rotate", rb = ["typed", "multiply", "rotationMatrix"], tb = /* @__PURE__ */ q(cu, rb, (e) => {
  var {
    typed: r,
    multiply: i,
    rotationMatrix: a
  } = e;
  return r(cu, {
    "Array , number | BigNumber | Complex | Unit": function(o, f) {
      t(o, 2);
      var l = i(a(f), o);
      return l.toArray();
    },
    "Matrix , number | BigNumber | Complex | Unit": function(o, f) {
      return t(o, 2), i(a(f), o);
    },
    "Array, number | BigNumber | Complex | Unit, Array | Matrix": function(o, f, l) {
      t(o, 3);
      var u = i(a(f, l), o);
      return u;
    },
    "Matrix, number | BigNumber | Complex | Unit, Array | Matrix": function(o, f, l) {
      return t(o, 3), i(a(f, l), o);
    }
  });
  function t(n, o) {
    var f = Array.isArray(n) ? qe(n) : n.size();
    if (f.length > 2)
      throw new RangeError("Vector must be of dimensions 1x".concat(o));
    if (f.length === 2 && f[1] !== 1)
      throw new RangeError("Vector must be of dimensions 1x".concat(o));
    if (f[0] !== o)
      throw new RangeError("Vector must be of dimensions 1x".concat(o));
  }
}), fu = "rotationMatrix", nb = ["typed", "config", "multiplyScalar", "addScalar", "unaryMinus", "norm", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix", "cos", "sin"], ab = /* @__PURE__ */ q(fu, nb, (e) => {
  var {
    typed: r,
    config: i,
    multiplyScalar: a,
    addScalar: t,
    unaryMinus: n,
    norm: o,
    BigNumber: f,
    matrix: l,
    DenseMatrix: u,
    SparseMatrix: s,
    cos: c,
    sin: m
  } = e;
  return r(fu, {
    "": function() {
      return i.matrix === "Matrix" ? l([]) : [];
    },
    string: function(h) {
      return l(h);
    },
    "number | BigNumber | Complex | Unit": function(h) {
      return v(h, i.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber | Complex | Unit, string": function(h, b) {
      return v(h, b);
    },
    "number | BigNumber | Complex | Unit, Array": function(h, b) {
      var w = l(b);
      return d(w), g(h, w, void 0);
    },
    "number | BigNumber | Complex | Unit, Matrix": function(h, b) {
      d(b);
      var w = b.storage() || (i.matrix === "Matrix" ? "dense" : void 0);
      return g(h, b, w);
    },
    "number | BigNumber | Complex | Unit, Array, string": function(h, b, w) {
      var y = l(b);
      return d(y), g(h, y, w);
    },
    "number | BigNumber | Complex | Unit, Matrix, string": function(h, b, w) {
      return d(b), g(h, b, w);
    }
  });
  function v(N, h) {
    var b = ze(N), w = b ? new f(-1) : -1, y = c(N), A = m(N), S = [[y, a(w, A)], [A, y]];
    return x(S, h);
  }
  function d(N) {
    var h = N.size();
    if (h.length < 1 || h[0] !== 3)
      throw new RangeError("Vector must be of dimensions 1x3");
  }
  function p(N) {
    return N.reduce((h, b) => a(h, b));
  }
  function x(N, h) {
    if (h) {
      if (h === "sparse")
        return new s(N);
      if (h === "dense")
        return new u(N);
      throw new TypeError('Unknown matrix type "'.concat(h, '"'));
    }
    return N;
  }
  function g(N, h, b) {
    var w = o(h);
    if (w === 0)
      throw new RangeError("Rotation around zero vector");
    var y = ze(N) ? f : null, A = y ? new y(1) : 1, S = y ? new y(-1) : -1, D = y ? new y(h.get([0]) / w) : h.get([0]) / w, E = y ? new y(h.get([1]) / w) : h.get([1]) / w, C = y ? new y(h.get([2]) / w) : h.get([2]) / w, F = c(N), _ = t(A, n(F)), I = m(N), $ = t(F, p([D, D, _])), T = t(p([D, E, _]), p([S, C, I])), B = t(p([D, C, _]), p([E, I])), L = t(p([D, E, _]), p([C, I])), O = t(F, p([E, E, _])), X = t(p([E, C, _]), p([S, D, I])), K = t(p([D, C, _]), p([S, E, I])), V = t(p([E, C, _]), p([D, I])), z = t(F, p([C, C, _])), Q = [[$, T, B], [L, O, X], [K, V, z]];
    return x(Q, b);
  }
}), mu = "row", ib = ["typed", "Index", "matrix", "range"], jm = /* @__PURE__ */ q(mu, ib, (e) => {
  var {
    typed: r,
    Index: i,
    matrix: a,
    range: t
  } = e;
  return r(mu, {
    "Matrix, number": n,
    "Array, number": function(f, l) {
      return n(a(_e(f)), l).valueOf();
    }
  });
  function n(o, f) {
    if (o.size().length !== 2)
      throw new Error("Only two dimensional matrix is supported");
    tr(f, o.size()[0]);
    var l = t(0, o.size()[1]), u = new i(f, l), s = o.subset(u);
    return Fe(s) ? s : a([[s]]);
  }
}), vu = "size", ob = ["typed", "config", "?matrix"], sb = /* @__PURE__ */ q(vu, ob, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a
  } = e;
  return r(vu, {
    Matrix: function(n) {
      return n.create(n.size());
    },
    Array: qe,
    string: function(n) {
      return i.matrix === "Array" ? [n.length] : a([n.length]);
    },
    "number | Complex | BigNumber | Unit | boolean | null": function(n) {
      return i.matrix === "Array" ? [] : a ? a([]) : Qm();
    }
  });
}), pu = "squeeze", ub = ["typed", "matrix"], lb = /* @__PURE__ */ q(pu, ub, (e) => {
  var {
    typed: r,
    matrix: i
  } = e;
  return r(pu, {
    Array: function(t) {
      return Ma(_e(t));
    },
    Matrix: function(t) {
      var n = Ma(t.toArray());
      return Array.isArray(n) ? i(n) : n;
    },
    any: function(t) {
      return _e(t);
    }
  });
}), du = "subset", cb = ["typed", "matrix", "zeros", "add"], ev = /* @__PURE__ */ q(du, cb, (e) => {
  var {
    typed: r,
    matrix: i,
    zeros: a,
    add: t
  } = e;
  return r(du, {
    // get subset
    "Matrix, Index": function(f, l) {
      return pn(l) ? i() : (Ca(f, l), f.subset(l));
    },
    "Array, Index": r.referTo("Matrix, Index", function(o) {
      return function(f, l) {
        var u = o(i(f), l);
        return l.isScalar() ? u : u.valueOf();
      };
    }),
    "Object, Index": mb,
    "string, Index": fb,
    // set subset
    "Matrix, Index, any, any": function(f, l, u, s) {
      return pn(l) ? f : (Ca(f, l), f.clone().subset(l, n(u, l), s));
    },
    "Array, Index, any, any": r.referTo("Matrix, Index, any, any", function(o) {
      return function(f, l, u, s) {
        var c = o(i(f), l, u, s);
        return c.isMatrix ? c.valueOf() : c;
      };
    }),
    "Array, Index, any": r.referTo("Matrix, Index, any, any", function(o) {
      return function(f, l, u) {
        return o(i(f), l, u, void 0).valueOf();
      };
    }),
    "Matrix, Index, any": r.referTo("Matrix, Index, any, any", function(o) {
      return function(f, l, u) {
        return o(f, l, u, void 0);
      };
    }),
    "string, Index, string": hu,
    "string, Index, string, string": hu,
    "Object, Index, any": vb
  });
  function n(o, f) {
    if (typeof o == "string")
      throw new Error("can't boradcast a string");
    if (f._isScalar)
      return o;
    var l = f.size();
    if (l.every((u) => u > 0))
      try {
        return t(o, a(l));
      } catch {
        return o;
      }
    else
      return o;
  }
});
function fb(e, r) {
  if (!Wa(r))
    throw new TypeError("Index expected");
  if (pn(r))
    return "";
  if (Ca(Array.from(e), r), r.size().length !== 1)
    throw new ke(r.size().length, 1);
  var i = e.length;
  tr(r.min()[0], i), tr(r.max()[0], i);
  var a = r.dimension(0), t = "";
  return a.forEach(function(n) {
    t += e.charAt(n);
  }), t;
}
function hu(e, r, i, a) {
  if (!r || r.isIndex !== !0)
    throw new TypeError("Index expected");
  if (pn(r))
    return e;
  if (Ca(Array.from(e), r), r.size().length !== 1)
    throw new ke(r.size().length, 1);
  if (a !== void 0) {
    if (typeof a != "string" || a.length !== 1)
      throw new TypeError("Single character expected as defaultValue");
  } else
    a = " ";
  var t = r.dimension(0), n = t.size()[0];
  if (n !== i.length)
    throw new ke(t.size()[0], i.length);
  var o = e.length;
  tr(r.min()[0]), tr(r.max()[0]);
  for (var f = [], l = 0; l < o; l++)
    f[l] = e.charAt(l);
  if (t.forEach(function(c, m) {
    f[c] = i.charAt(m[0]);
  }), f.length > o)
    for (var u = o - 1, s = f.length; u < s; u++)
      f[u] || (f[u] = a);
  return f.join("");
}
function mb(e, r) {
  if (!pn(r)) {
    if (r.size().length !== 1)
      throw new ke(r.size(), 1);
    var i = r.dimension(0);
    if (typeof i != "string")
      throw new TypeError("String expected as index to retrieve an object property");
    return Br(e, i);
  }
}
function vb(e, r, i) {
  if (pn(r))
    return e;
  if (r.size().length !== 1)
    throw new ke(r.size(), 1);
  var a = r.dimension(0);
  if (typeof a != "string")
    throw new TypeError("String expected as index to retrieve an object property");
  var t = _e(e);
  return gn(t, a, i), t;
}
var gu = "transpose", pb = ["typed", "matrix"], db = /* @__PURE__ */ q(gu, pb, (e) => {
  var {
    typed: r,
    matrix: i
  } = e;
  return r(gu, {
    Array: (o) => a(i(o)).valueOf(),
    Matrix: a,
    any: _e
    // scalars
  });
  function a(o) {
    var f = o.size(), l;
    switch (f.length) {
      case 1:
        l = o.clone();
        break;
      case 2:
        {
          var u = f[0], s = f[1];
          if (s === 0)
            throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Le(f) + ")");
          switch (o.storage()) {
            case "dense":
              l = t(o, u, s);
              break;
            case "sparse":
              l = n(o, u, s);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + Le(f) + ")");
    }
    return l;
  }
  function t(o, f, l) {
    for (var u = o._data, s = [], c, m = 0; m < l; m++) {
      c = s[m] = [];
      for (var v = 0; v < f; v++)
        c[v] = _e(u[v][m]);
    }
    return o.createDenseMatrix({
      data: s,
      size: [l, f],
      datatype: o._datatype
    });
  }
  function n(o, f, l) {
    for (var u = o._values, s = o._index, c = o._ptr, m = u ? [] : void 0, v = [], d = [], p = [], x = 0; x < f; x++)
      p[x] = 0;
    var g, N, h;
    for (g = 0, N = s.length; g < N; g++)
      p[s[g]]++;
    for (var b = 0, w = 0; w < f; w++)
      d.push(b), b += p[w], p[w] = d[w];
    for (d.push(b), h = 0; h < l; h++)
      for (var y = c[h], A = c[h + 1], S = y; S < A; S++) {
        var D = p[s[S]]++;
        v[D] = h, u && (m[D] = _e(u[S]));
      }
    return o.createSparseMatrix({
      values: m,
      index: v,
      ptr: d,
      size: [l, f],
      datatype: o._datatype
    });
  }
}), yu = "ctranspose", hb = ["typed", "transpose", "conj"], gb = /* @__PURE__ */ q(yu, hb, (e) => {
  var {
    typed: r,
    transpose: i,
    conj: a
  } = e;
  return r(yu, {
    any: function(n) {
      return a(i(n));
    }
  });
}), bu = "zeros", yb = ["typed", "config", "matrix", "BigNumber"], bb = /* @__PURE__ */ q(bu, yb, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    BigNumber: t
  } = e;
  return r(bu, {
    "": function() {
      return i.matrix === "Array" ? n([]) : n([], "default");
    },
    // math.zeros(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    "...number | BigNumber | string": function(u) {
      var s = u[u.length - 1];
      if (typeof s == "string") {
        var c = u.pop();
        return n(u, c);
      } else
        return i.matrix === "Array" ? n(u) : n(u, "default");
    },
    Array: n,
    Matrix: function(u) {
      var s = u.storage();
      return n(u.valueOf(), s);
    },
    "Array | Matrix, string": function(u, s) {
      return n(u.valueOf(), s);
    }
  });
  function n(l, u) {
    var s = o(l), c = s ? new t(0) : 0;
    if (f(l), u) {
      var m = a(u);
      return l.length > 0 ? m.resize(l, c) : m;
    } else {
      var v = [];
      return l.length > 0 ? dn(v, l, c) : v;
    }
  }
  function o(l) {
    var u = !1;
    return l.forEach(function(s, c, m) {
      ze(s) && (u = !0, m[c] = s.toNumber());
    }), u;
  }
  function f(l) {
    l.forEach(function(u) {
      if (typeof u != "number" || !Se(u) || u < 0)
        throw new Error("Parameters in function zeros must be positive integers");
    });
  }
}), xu = "fft", xb = ["typed", "matrix", "addScalar", "multiplyScalar", "divideScalar", "exp", "tau", "i", "dotDivide", "conj", "pow", "ceil", "log2"], wb = /* @__PURE__ */ q(xu, xb, (e) => {
  var {
    typed: r,
    matrix: i,
    addScalar: a,
    multiplyScalar: t,
    divideScalar: n,
    exp: o,
    tau: f,
    i: l,
    dotDivide: u,
    conj: s,
    pow: c,
    ceil: m,
    log2: v
  } = e;
  return r(xu, {
    Array: d,
    Matrix: function(h) {
      return h.create(d(h.toArray()));
    }
  });
  function d(N) {
    var h = qe(N);
    return h.length === 1 ? g(N, h[0]) : p(N.map((b) => d(b, h.slice(1))), 0);
  }
  function p(N, h) {
    var b = qe(N);
    if (h !== 0)
      return new Array(b[0]).fill(0).map((y, A) => p(N[A], h - 1));
    if (b.length === 1)
      return g(N);
    function w(y) {
      var A = qe(y);
      return new Array(A[1]).fill(0).map((S, D) => new Array(A[0]).fill(0).map((E, C) => y[C][D]));
    }
    return w(p(w(N), 1));
  }
  function x(N) {
    for (var h = N.length, b = o(n(t(-1, t(l, f)), h)), w = [], y = 1 - h; y < h; y++)
      w.push(c(b, n(c(y, 2), 2)));
    for (var A = c(2, m(v(h + h - 1))), S = [...new Array(h).fill(0).map((T, B) => t(N[B], w[h - 1 + B])), ...new Array(A - h).fill(0)], D = [...new Array(h + h - 1).fill(0).map((T, B) => n(1, w[B])), ...new Array(A - (h + h - 1)).fill(0)], E = g(S), C = g(D), F = new Array(A).fill(0).map((T, B) => t(E[B], C[B])), _ = u(s(d(s(F))), A), I = [], $ = h - 1; $ < h + h - 1; $++)
      I.push(t(_[$], w[$]));
    return I;
  }
  function g(N) {
    var h = N.length;
    if (h === 1)
      return [N[0]];
    if (h % 2 === 0) {
      for (var b = [...g(N.filter((S, D) => D % 2 === 0)), ...g(N.filter((S, D) => D % 2 === 1))], w = 0; w < h / 2; w++) {
        var y = b[w], A = t(b[w + h / 2], o(t(t(f, l), n(-w, h))));
        b[w] = a(y, A), b[w + h / 2] = a(y, t(-1, A));
      }
      return b;
    } else
      return x(N);
  }
}), wu = "ifft", Nb = ["typed", "fft", "dotDivide", "conj"], Db = /* @__PURE__ */ q(wu, Nb, (e) => {
  var {
    typed: r,
    fft: i,
    dotDivide: a,
    conj: t
  } = e;
  return r(wu, {
    "Array | Matrix": function(o) {
      var f = Fe(o) ? o.size() : qe(o);
      return a(t(i(t(o))), f.reduce((l, u) => l * u, 1));
    }
  });
});
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Yn(e);
}
function Ab(e, r) {
  if (Yn(e) != "object" || !e)
    return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(e, r || "default");
    if (Yn(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Eb(e) {
  var r = Ab(e, "string");
  return Yn(r) == "symbol" ? r : r + "";
}
function dr(e, r, i) {
  return r = Eb(r), r in e ? Object.defineProperty(e, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = i, e;
}
function Nu(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Sb(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Nu(Object(i), !0).forEach(function(a) {
      dr(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Nu(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
var Cb = "solveODE", Mb = ["typed", "add", "subtract", "multiply", "divide", "max", "map", "abs", "isPositive", "isNegative", "larger", "smaller", "matrix", "bignumber", "unaryMinus"], Fb = /* @__PURE__ */ q(Cb, Mb, (e) => {
  var {
    typed: r,
    add: i,
    subtract: a,
    multiply: t,
    divide: n,
    max: o,
    map: f,
    abs: l,
    isPositive: u,
    isNegative: s,
    larger: c,
    smaller: m,
    matrix: v,
    bignumber: d,
    unaryMinus: p
  } = e;
  function x(S) {
    return function(D, E, C, F) {
      var _ = !(E.length === 2 && (E.every(y) || E.every(Yr)));
      if (_)
        throw new Error('"tspan" must be an Array of two numeric values or two units [tStart, tEnd]');
      var I = E[0], $ = E[1], T = c($, I), B = F.firstStep;
      if (B !== void 0 && !u(B))
        throw new Error('"firstStep" must be positive');
      var L = F.maxStep;
      if (L !== void 0 && !u(L))
        throw new Error('"maxStep" must be positive');
      var O = F.minStep;
      if (O && s(O))
        throw new Error('"minStep" must be positive or zero');
      var X = [I, $, B, O, L].filter((R) => R !== void 0);
      if (!(X.every(y) || X.every(Yr)))
        throw new Error('Inconsistent type of "t" dependant variables');
      for (var K = 1, V = F.tol ? F.tol : 1e-4, z = F.minDelta ? F.minDelta : 0.2, Q = F.maxDelta ? F.maxDelta : 5, ce = F.maxIter ? F.maxIter : 1e4, j = [I, $, ...C, L, O].some(ze), [re, oe, ee, ne] = j ? [d(S.a), d(S.c), d(S.b), d(S.bp)] : [S.a, S.c, S.b, S.bp], se = B ? T ? B : p(B) : n(a($, I), K), ve = [I], we = [C], Ae = a(ee, ne), P = 0, H = 0, te = b(T), k = w(T); te(ve[P], $); ) {
        var Y = [];
        se = k(ve[P], $, se), Y.push(D(ve[P], we[P]));
        for (var W = 1; W < oe.length; ++W)
          Y.push(D(i(ve[P], t(oe[W], se)), i(we[P], t(se, re[W], Y))));
        var me = o(l(f(t(Ae, Y), (R) => Yr(R) ? R.value : R)));
        me < V && V / me > 1 / 4 && (ve.push(i(ve[P], se)), we.push(i(we[P], t(se, ee, Y))), P++);
        var fe = 0.84 * (V / me) ** (1 / 5);
        if (m(fe, z) ? fe = z : c(fe, Q) && (fe = Q), fe = j ? d(fe) : fe, se = t(se, fe), L && c(l(se), L) ? se = T ? L : p(L) : O && m(l(se), O) && (se = T ? O : p(O)), H++, H > ce)
          throw new Error("Maximum number of iterations reached, try changing options");
      }
      return {
        t: ve,
        y: we
      };
    };
  }
  function g(S, D, E, C) {
    var F = [[], [0.5], [0, 0.75], [0.2222222222222222, 0.3333333333333333, 0.4444444444444444]], _ = [null, 1 / 2, 3 / 4, 1], I = [2 / 9, 1 / 3, 4 / 9, 0], $ = [7 / 24, 1 / 4, 1 / 3, 1 / 8], T = {
      a: F,
      c: _,
      b: I,
      bp: $
    };
    return x(T)(S, D, E, C);
  }
  function N(S, D, E, C) {
    var F = [[], [0.2], [0.075, 0.225], [0.9777777777777777, -3.7333333333333334, 3.5555555555555554], [2.9525986892242035, -11.595793324188385, 9.822892851699436, -0.2908093278463649], [2.8462752525252526, -10.757575757575758, 8.906422717743473, 0.2784090909090909, -0.2735313036020583], [0.09114583333333333, 0, 0.44923629829290207, 0.6510416666666666, -0.322376179245283, 0.13095238095238096]], _ = [null, 1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1], I = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0], $ = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40], T = {
      a: F,
      c: _,
      b: I,
      bp: $
    };
    return x(T)(S, D, E, C);
  }
  function h(S, D, E, C) {
    var F = C.method ? C.method : "RK45", _ = {
      RK23: g,
      RK45: N
    };
    if (F.toUpperCase() in _) {
      var I = Sb({}, C);
      return delete I.method, _[F.toUpperCase()](S, D, E, I);
    } else {
      var $ = Object.keys(_).map((B) => '"'.concat(B, '"')), T = "".concat($.slice(0, -1).join(", "), " and ").concat($.slice(-1));
      throw new Error('Unavailable method "'.concat(F, '". Available methods are ').concat(T));
    }
  }
  function b(S) {
    return S ? m : c;
  }
  function w(S) {
    var D = S ? c : m;
    return function(E, C, F) {
      var _ = i(E, F);
      return D(_, C) ? a(C, E) : F;
    };
  }
  function y(S) {
    return ze(S) || Re(S);
  }
  function A(S, D, E, C) {
    var F = h(S, D.toArray(), E.toArray(), C);
    return {
      t: v(F.t),
      y: v(F.y)
    };
  }
  return r("solveODE", {
    "function, Array, Array, Object": h,
    "function, Matrix, Matrix, Object": A,
    "function, Array, Array": (S, D, E) => h(S, D, E, {}),
    "function, Matrix, Matrix": (S, D, E) => A(S, D, E, {}),
    "function, Array, number | BigNumber | Unit": (S, D, E) => {
      var C = h(S, D, [E], {});
      return {
        t: C.t,
        y: C.y.map((F) => F[0])
      };
    },
    "function, Matrix, number | BigNumber | Unit": (S, D, E) => {
      var C = h(S, D.toArray(), [E], {});
      return {
        t: v(C.t),
        y: v(C.y.map((F) => F[0]))
      };
    },
    "function, Array, number | BigNumber | Unit, Object": (S, D, E, C) => {
      var F = h(S, D, [E], C);
      return {
        t: F.t,
        y: F.y.map((_) => _[0])
      };
    },
    "function, Matrix, number | BigNumber | Unit, Object": (S, D, E, C) => {
      var F = h(S, D.toArray(), [E], C);
      return {
        t: v(F.t),
        y: v(F.y.map((_) => _[0]))
      };
    }
  });
}), Bb = "erf", Tb = ["typed"], Ob = /* @__PURE__ */ q(Bb, Tb, (e) => {
  var {
    typed: r
  } = e;
  return r("name", {
    number: function(o) {
      var f = Math.abs(o);
      return f >= Ib ? Mt(o) : f <= _b ? Mt(o) * i(f) : f <= 4 ? Mt(o) * (1 - a(f)) : Mt(o) * (1 - t(f));
    },
    "Array | Matrix": r.referToSelf((n) => (o) => He(o, n))
    // TODO: For complex numbers, use the approximation for the Faddeeva function
    //  from "More Efficient Computation of the Complex Error Function" (AMS)
  });
  function i(n) {
    var o = n * n, f = ht[0][4] * o, l = o, u;
    for (u = 0; u < 3; u += 1)
      f = (f + ht[0][u]) * o, l = (l + an[0][u]) * o;
    return n * (f + ht[0][3]) / (l + an[0][3]);
  }
  function a(n) {
    var o = ht[1][8] * n, f = n, l;
    for (l = 0; l < 7; l += 1)
      o = (o + ht[1][l]) * n, f = (f + an[1][l]) * n;
    var u = (o + ht[1][7]) / (f + an[1][7]), s = parseInt(n * 16) / 16, c = (n - s) * (n + s);
    return Math.exp(-s * s) * Math.exp(-c) * u;
  }
  function t(n) {
    var o = 1 / (n * n), f = ht[2][5] * o, l = o, u;
    for (u = 0; u < 4; u += 1)
      f = (f + ht[2][u]) * o, l = (l + an[2][u]) * o;
    var s = o * (f + ht[2][4]) / (l + an[2][4]);
    s = ($b - s) / n, o = parseInt(n * 16) / 16;
    var c = (n - o) * (n + o);
    return Math.exp(-o * o) * Math.exp(-c) * s;
  }
}), _b = 0.46875, $b = 0.5641895835477563, ht = [[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, 0.18577770618460315], [0.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 21531153547440383e-24], [0.30532663496123236, 0.36034489994980445, 0.12578172611122926, 0.016083785148742275, 6587491615298378e-19, 0.016315387137302097]], an = [[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171], [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495], [2.568520192289822, 1.8729528499234604, 0.5279051029514285, 0.06051834131244132, 0.0023352049762686918]], Ib = Math.pow(2, 53), Du = "zeta", qb = ["typed", "config", "multiply", "pow", "divide", "factorial", "equal", "smallerEq", "isNegative", "gamma", "sin", "subtract", "add", "?Complex", "?BigNumber", "pi"], Rb = /* @__PURE__ */ q(Du, qb, (e) => {
  var {
    typed: r,
    config: i,
    multiply: a,
    pow: t,
    divide: n,
    factorial: o,
    equal: f,
    smallerEq: l,
    isNegative: u,
    gamma: s,
    sin: c,
    subtract: m,
    add: v,
    Complex: d,
    BigNumber: p,
    pi: x
  } = e;
  return r(Du, {
    number: (y) => g(y, (A) => A, () => 20),
    BigNumber: (y) => g(y, (A) => new p(A), () => Math.abs(Math.log10(i.epsilon))),
    Complex: N
  });
  function g(y, A, S) {
    return f(y, 0) ? A(-0.5) : f(y, 1) ? A(NaN) : isFinite(y) ? h(y, A, S, (D) => D) : u(y) ? A(NaN) : A(1);
  }
  function N(y) {
    return y.re === 0 && y.im === 0 ? new d(-0.5) : y.re === 1 ? new d(NaN, NaN) : y.re === 1 / 0 && y.im === 0 ? new d(1) : y.im === 1 / 0 || y.re === -1 / 0 ? new d(NaN, NaN) : h(y, (A) => A, (A) => Math.round(1.3 * 15 + 0.9 * Math.abs(A.im)), (A) => A.re);
  }
  function h(y, A, S, D) {
    var E = S(y);
    if (D(y) > -(E - 1) / 2)
      return w(y, A(E), A);
    var C = a(t(2, y), t(A(x), m(y, 1)));
    return C = a(C, c(a(n(A(x), 2), y))), C = a(C, s(m(1, y))), a(C, h(m(1, y), A, S, D));
  }
  function b(y, A) {
    for (var S = y, D = y; l(D, A); D = v(D, 1)) {
      var E = n(a(o(v(A, m(D, 1))), t(4, D)), a(o(m(A, D)), o(a(2, D))));
      S = v(S, E);
    }
    return a(A, S);
  }
  function w(y, A, S) {
    for (var D = n(1, a(b(S(0), A), m(1, t(2, m(1, y))))), E = S(0), C = S(1); l(C, A); C = v(C, 1))
      E = v(E, n(a((-1) ** (C - 1), b(C, A)), t(C, y)));
    return a(D, E);
  }
}), Au = "mode", zb = ["typed", "isNaN", "isNumeric"], Pb = /* @__PURE__ */ q(Au, zb, (e) => {
  var {
    typed: r,
    isNaN: i,
    isNumeric: a
  } = e;
  return r(Au, {
    "Array | Matrix": t,
    "...": function(o) {
      return t(o);
    }
  });
  function t(n) {
    n = Qe(n.valueOf());
    var o = n.length;
    if (o === 0)
      throw new Error("Cannot calculate mode of an empty array");
    for (var f = {}, l = [], u = 0, s = 0; s < n.length; s++) {
      var c = n[s];
      if (a(c) && i(c))
        throw new Error("Cannot calculate mode of an array containing NaN values");
      c in f || (f[c] = 0), f[c]++, f[c] === u ? l.push(c) : f[c] > u && (u = f[c], l = [c]);
    }
    return l;
  }
});
function $r(e, r, i) {
  var a;
  return String(e).indexOf("Unexpected type") !== -1 ? (a = arguments.length > 2 ? " (type: " + ar(i) + ", value: " + JSON.stringify(i) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + r + ", unexpected type of argument" + a)) : String(e).indexOf("complex numbers") !== -1 ? (a = arguments.length > 2 ? " (type: " + ar(i) + ", value: " + JSON.stringify(i) + ")" : "", new TypeError("Cannot calculate " + r + ", no ordering relation is defined for complex numbers" + a)) : e;
}
var Eu = "prod", Ub = ["typed", "config", "multiplyScalar", "numeric"], Lb = /* @__PURE__ */ q(Eu, Ub, (e) => {
  var {
    typed: r,
    config: i,
    multiplyScalar: a,
    numeric: t
  } = e;
  return r(Eu, {
    // prod([a, b, c, d, ...])
    "Array | Matrix": n,
    // prod([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": function(f, l) {
      throw new Error("prod(A, dim) is not yet supported");
    },
    // prod(a, b, c, d, ...)
    "...": function(f) {
      return n(f);
    }
  });
  function n(o) {
    var f;
    if (Nt(o, function(l) {
      try {
        f = f === void 0 ? l : a(f, l);
      } catch (u) {
        throw $r(u, "prod", l);
      }
    }), typeof f == "string" && (f = t(f, i.number)), f === void 0)
      throw new Error("Cannot calculate prod of an empty array");
    return f;
  }
}), Su = "format", kb = ["typed"], Hb = /* @__PURE__ */ q(Su, kb, (e) => {
  var {
    typed: r
  } = e;
  return r(Su, {
    any: Le,
    "any, Object | function | number | BigNumber": Le
  });
}), Cu = "bin", Gb = ["typed", "format"], Vb = q(Cu, Gb, (e) => {
  var {
    typed: r,
    format: i
  } = e;
  return r(Cu, {
    "number | BigNumber": function(t) {
      return i(t, {
        notation: "bin"
      });
    },
    "number | BigNumber, number | BigNumber": function(t, n) {
      return i(t, {
        notation: "bin",
        wordSize: n
      });
    }
  });
}), Mu = "oct", Zb = ["typed", "format"], Yb = q(Mu, Zb, (e) => {
  var {
    typed: r,
    format: i
  } = e;
  return r(Mu, {
    "number | BigNumber": function(t) {
      return i(t, {
        notation: "oct"
      });
    },
    "number | BigNumber, number | BigNumber": function(t, n) {
      return i(t, {
        notation: "oct",
        wordSize: n
      });
    }
  });
}), Fu = "hex", Xb = ["typed", "format"], Wb = q(Fu, Xb, (e) => {
  var {
    typed: r,
    format: i
  } = e;
  return r(Fu, {
    "number | BigNumber": function(t) {
      return i(t, {
        notation: "hex"
      });
    },
    "number | BigNumber, number | BigNumber": function(t, n) {
      return i(t, {
        notation: "hex",
        wordSize: n
      });
    }
  });
}), rv = /\$([\w.]+)/g, Bu = "print", Jb = ["typed"], tv = /* @__PURE__ */ q(Bu, Jb, (e) => {
  var {
    typed: r
  } = e;
  return r(Bu, {
    // note: Matrix will be converted automatically to an Array
    "string, Object | Array": Tu,
    "string, Object | Array, number | Object": Tu
  });
});
function Tu(e, r, i) {
  return e.replace(rv, function(a, t) {
    var n = t.split("."), o = r[n.shift()];
    for (o !== void 0 && o.isMatrix && (o = o.toArray()); n.length && o !== void 0; ) {
      var f = n.shift();
      o = f ? o[f] : o + ".";
    }
    return o !== void 0 ? Er(o) ? o : Le(o, i) : a;
  });
}
var Ou = "to", Qb = ["typed", "matrix", "concat"], Kb = /* @__PURE__ */ q(Ou, Qb, (e) => {
  var {
    typed: r,
    matrix: i,
    concat: a
  } = e, t = or({
    typed: r,
    matrix: i,
    concat: a
  });
  return r(Ou, {
    "Unit, Unit | string": (n, o) => n.to(o)
  }, t({
    Ds: !0
  }));
}), _u = "isPrime", jb = ["typed"], ex = /* @__PURE__ */ q(_u, jb, (e) => {
  var {
    typed: r
  } = e;
  return r(_u, {
    number: function(a) {
      if (a * 0 !== 0)
        return !1;
      if (a <= 3)
        return a > 1;
      if (a % 2 === 0 || a % 3 === 0)
        return !1;
      for (var t = 5; t * t <= a; t += 6)
        if (a % t === 0 || a % (t + 2) === 0)
          return !1;
      return !0;
    },
    BigNumber: function(a) {
      if (a.toNumber() * 0 !== 0)
        return !1;
      if (a.lte(3))
        return a.gt(1);
      if (a.mod(2).eq(0) || a.mod(3).eq(0))
        return !1;
      if (a.lt(Math.pow(2, 32))) {
        for (var t = a.toNumber(), n = 5; n * n <= t; n += 6)
          if (t % n === 0 || t % (n + 2) === 0)
            return !1;
        return !0;
      }
      function o(N, h, b) {
        for (var w = 1; !h.eq(0); )
          h.mod(2).eq(0) ? (h = h.div(2), N = N.mul(N).mod(b)) : (h = h.sub(1), w = N.mul(w).mod(b));
        return w;
      }
      var f = a.constructor.clone({
        precision: a.toFixed(0).length * 2
      });
      a = new f(a);
      for (var l = 0, u = a.sub(1); u.mod(2).eq(0); )
        u = u.div(2), l += 1;
      var s = null;
      if (a.lt("3317044064679887385961981"))
        s = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter((N) => N < a);
      else {
        var c = Math.min(a.toNumber() - 2, Math.floor(2 * Math.pow(a.toFixed(0).length * Math.log(10), 2)));
        s = [];
        for (var m = 2; m <= c; m += 1)
          s.push(c);
      }
      for (var v = 0; v < s.length; v += 1) {
        var d = s[v], p = o(a.sub(a).add(d), u, a);
        if (!p.eq(1)) {
          for (var x = 0, g = p; !g.eq(a.sub(1)); x += 1, g = g.mul(g).mod(a))
            if (x === l - 1)
              return !1;
        }
      }
      return !0;
    },
    "Array | Matrix": r.referToSelf((i) => (a) => He(a, i))
  });
}), rx = "numeric", tx = ["number", "?bignumber", "?fraction"], nx = /* @__PURE__ */ q(rx, tx, (e) => {
  var {
    number: r,
    bignumber: i,
    fraction: a
  } = e, t = {
    string: !0,
    number: !0,
    BigNumber: !0,
    Fraction: !0
  }, n = {
    number: (o) => r(o),
    BigNumber: i ? (o) => i(o) : ro,
    Fraction: a ? (o) => a(o) : Jm
  };
  return function(f) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", u = arguments.length > 2 ? arguments[2] : void 0;
    if (u !== void 0)
      throw new SyntaxError("numeric() takes one or two arguments");
    var s = ar(f);
    if (!(s in t))
      throw new TypeError("Cannot convert " + f + ' of type "' + s + '"; valid input types are ' + Object.keys(t).join(", "));
    if (!(l in n))
      throw new TypeError("Cannot convert " + f + ' to type "' + l + '"; valid output types are ' + Object.keys(n).join(", "));
    return l === s ? f : n[l](f);
  };
}), $u = "divideScalar", ax = ["typed", "numeric"], ix = /* @__PURE__ */ q($u, ax, (e) => {
  var {
    typed: r,
    numeric: i
  } = e;
  return r($u, {
    "number, number": function(t, n) {
      return t / n;
    },
    "Complex, Complex": function(t, n) {
      return t.div(n);
    },
    "BigNumber, BigNumber": function(t, n) {
      return t.div(n);
    },
    "Fraction, Fraction": function(t, n) {
      return t.div(n);
    },
    "Unit, number | Complex | Fraction | BigNumber | Unit": (a, t) => a.divide(t),
    "number | Fraction | Complex | BigNumber, Unit": (a, t) => t.divideInto(a)
  });
}), Iu = "pow", ox = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], sx = /* @__PURE__ */ q(Iu, ox, (e) => {
  var {
    typed: r,
    config: i,
    identity: a,
    multiply: t,
    matrix: n,
    inv: o,
    number: f,
    fraction: l,
    Complex: u
  } = e;
  return r(Iu, {
    "number, number": s,
    "Complex, Complex": function(d, p) {
      return d.pow(p);
    },
    "BigNumber, BigNumber": function(d, p) {
      return p.isInteger() || d >= 0 || i.predictable ? d.pow(p) : new u(d.toNumber(), 0).pow(p.toNumber(), 0);
    },
    "Fraction, Fraction": function(d, p) {
      var x = d.pow(p);
      if (x != null)
        return x;
      if (i.predictable)
        throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
      return s(d.valueOf(), p.valueOf());
    },
    "Array, number": c,
    "Array, BigNumber": function(d, p) {
      return c(d, p.toNumber());
    },
    "Matrix, number": m,
    "Matrix, BigNumber": function(d, p) {
      return m(d, p.toNumber());
    },
    "Unit, number | BigNumber": function(d, p) {
      return d.pow(p);
    }
  });
  function s(v, d) {
    if (i.predictable && !Se(d) && v < 0)
      try {
        var p = l(d), x = f(p);
        if ((d === x || Math.abs((d - x) / d) < 1e-14) && p.d % 2 === 1)
          return (p.n % 2 === 0 ? 1 : -1) * Math.pow(-v, d);
      } catch {
      }
    return i.predictable && (v < -1 && d === 1 / 0 || v > -1 && v < 0 && d === -1 / 0) ? NaN : Se(d) || v >= 0 || i.predictable ? om(v, d) : v * v < 1 && d === 1 / 0 || v * v > 1 && d === -1 / 0 ? 0 : new u(v, 0).pow(d, 0);
  }
  function c(v, d) {
    if (!Se(d))
      throw new TypeError("For A^b, b must be an integer (value is " + d + ")");
    var p = qe(v);
    if (p.length !== 2)
      throw new Error("For A^b, A must be 2 dimensional (A has " + p.length + " dimensions)");
    if (p[0] !== p[1])
      throw new Error("For A^b, A must be square (size is " + p[0] + "x" + p[1] + ")");
    if (d < 0)
      try {
        return c(o(v), -d);
      } catch (N) {
        throw N.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + d + ")") : N;
      }
    for (var x = a(p[0]).valueOf(), g = v; d >= 1; )
      (d & 1) === 1 && (x = t(g, x)), d >>= 1, g = t(g, g);
    return x;
  }
  function m(v, d) {
    return n(c(v.valueOf(), d));
  }
}), on = "Number of decimals in function round must be an integer", qu = "round", ux = ["typed", "config", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"], lx = /* @__PURE__ */ q(qu, ux, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    equalScalar: t,
    zeros: n,
    BigNumber: o,
    DenseMatrix: f
  } = e, l = Dr({
    typed: r,
    equalScalar: t
  }), u = hr({
    typed: r,
    DenseMatrix: f
  }), s = ot({
    typed: r
  });
  function c(m) {
    return Math.abs(Qn(m).exponent);
  }
  return r(qu, {
    number: function(v) {
      var d = Pn(v, c(i.epsilon)), p = _r(v, d, i.epsilon) ? d : v;
      return Pn(p);
    },
    "number, number": function(v, d) {
      var p = c(i.epsilon);
      if (d >= p)
        return Pn(v, d);
      var x = Pn(v, p), g = _r(v, x, i.epsilon) ? x : v;
      return Pn(g, d);
    },
    "number, BigNumber": function(v, d) {
      if (!d.isInteger())
        throw new TypeError(on);
      return new o(v).toDecimalPlaces(d.toNumber());
    },
    Complex: function(v) {
      return v.round();
    },
    "Complex, number": function(v, d) {
      if (d % 1)
        throw new TypeError(on);
      return v.round(d);
    },
    "Complex, BigNumber": function(v, d) {
      if (!d.isInteger())
        throw new TypeError(on);
      var p = d.toNumber();
      return v.round(p);
    },
    BigNumber: function(v) {
      var d = new o(v).toDecimalPlaces(c(i.epsilon)), p = Jr(v, d, i.epsilon) ? d : v;
      return p.toDecimalPlaces(0);
    },
    "BigNumber, BigNumber": function(v, d) {
      if (!d.isInteger())
        throw new TypeError(on);
      var p = c(i.epsilon);
      if (d >= p)
        return v.toDecimalPlaces(d.toNumber());
      var x = v.toDecimalPlaces(p), g = Jr(v, x, i.epsilon) ? x : v;
      return g.toDecimalPlaces(d.toNumber());
    },
    Fraction: function(v) {
      return v.round();
    },
    "Fraction, number": function(v, d) {
      if (d % 1)
        throw new TypeError(on);
      return v.round(d);
    },
    "Fraction, BigNumber": function(v, d) {
      if (!d.isInteger())
        throw new TypeError(on);
      return v.round(d.toNumber());
    },
    "Unit, number, Unit": r.referToSelf((m) => function(v, d, p) {
      var x = v.toNumeric(p);
      return p.multiply(m(x, d));
    }),
    "Unit, BigNumber, Unit": r.referToSelf((m) => (v, d, p) => m(v, d.toNumber(), p)),
    "Unit, Unit": r.referToSelf((m) => (v, d) => m(v, 0, d)),
    "Array | Matrix, number, Unit": r.referToSelf((m) => (v, d, p) => He(v, (x) => m(x, d, p))),
    "Array | Matrix, BigNumber, Unit": r.referToSelf((m) => (v, d, p) => m(v, d.toNumber(), p)),
    "Array | Matrix, Unit": r.referToSelf((m) => (v, d) => m(v, 0, d)),
    "Array | Matrix": r.referToSelf((m) => (v) => He(v, m)),
    "SparseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => l(v, d, m, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((m) => (v, d) => s(v, d, m, !1)),
    "Array, number | BigNumber": r.referToSelf((m) => (v, d) => s(a(v), d, m, !1).valueOf()),
    "number | Complex | BigNumber | Fraction, SparseMatrix": r.referToSelf((m) => (v, d) => t(v, 0) ? n(d.size(), d.storage()) : u(d, v, m, !0)),
    "number | Complex | BigNumber | Fraction, DenseMatrix": r.referToSelf((m) => (v, d) => t(v, 0) ? n(d.size(), d.storage()) : s(d, v, m, !0)),
    "number | Complex | BigNumber | Fraction, Array": r.referToSelf((m) => (v, d) => s(a(d), v, m, !0).valueOf())
  });
}), Ru = "log", cx = ["config", "typed", "divideScalar", "Complex"], fx = /* @__PURE__ */ q(Ru, cx, (e) => {
  var {
    typed: r,
    config: i,
    divideScalar: a,
    Complex: t
  } = e;
  return r(Ru, {
    number: function(o) {
      return o >= 0 || i.predictable ? l0(o) : new t(o, 0).log();
    },
    Complex: function(o) {
      return o.log();
    },
    BigNumber: function(o) {
      return !o.isNegative() || i.predictable ? o.ln() : new t(o.toNumber(), 0).log();
    },
    "any, any": r.referToSelf((n) => (o, f) => a(n(o), n(f)))
  });
}), zu = "log1p", mx = ["typed", "config", "divideScalar", "log", "Complex"], vx = /* @__PURE__ */ q(zu, mx, (e) => {
  var {
    typed: r,
    config: i,
    divideScalar: a,
    log: t,
    Complex: n
  } = e;
  return r(zu, {
    number: function(l) {
      return l >= -1 || i.predictable ? sd(l) : o(new n(l, 0));
    },
    Complex: o,
    BigNumber: function(l) {
      var u = l.plus(1);
      return !u.isNegative() || i.predictable ? u.ln() : o(new n(l.toNumber(), 0));
    },
    "Array | Matrix": r.referToSelf((f) => (l) => He(l, f)),
    "any, any": r.referToSelf((f) => (l, u) => a(f(l), t(u)))
  });
  function o(f) {
    var l = f.re + 1;
    return new n(Math.log(Math.sqrt(l * l + f.im * f.im)), Math.atan2(f.im, l));
  }
}), Pu = "nthRoots", px = ["config", "typed", "divideScalar", "Complex"], dx = /* @__PURE__ */ q(Pu, px, (e) => {
  var {
    typed: r,
    config: i,
    divideScalar: a,
    Complex: t
  } = e, n = [function(l) {
    return new t(l, 0);
  }, function(l) {
    return new t(0, l);
  }, function(l) {
    return new t(-l, 0);
  }, function(l) {
    return new t(0, -l);
  }];
  function o(f, l) {
    if (l < 0)
      throw new Error("Root must be greater than zero");
    if (l === 0)
      throw new Error("Root must be non-zero");
    if (l % 1 !== 0)
      throw new Error("Root must be an integer");
    if (f === 0 || f.abs() === 0)
      return [new t(0, 0)];
    var u = typeof f == "number", s;
    (u || f.re === 0 || f.im === 0) && (u ? s = 2 * +(f < 0) : f.im === 0 ? s = 2 * +(f.re < 0) : s = 2 * +(f.im < 0) + 1);
    for (var c = f.arg(), m = f.abs(), v = [], d = Math.pow(m, 1 / l), p = 0; p < l; p++) {
      var x = (s + 4 * p) / l;
      if (x === Math.round(x)) {
        v.push(n[x % 4](d));
        continue;
      }
      v.push(new t({
        r: d,
        phi: (c + 2 * Math.PI * p) / l
      }));
    }
    return v;
  }
  return r(Pu, {
    Complex: function(l) {
      return o(l, 2);
    },
    "Complex, number": o
  });
}), Uu = "dotPow", hx = ["typed", "equalScalar", "matrix", "pow", "DenseMatrix", "concat"], gx = /* @__PURE__ */ q(Uu, hx, (e) => {
  var {
    typed: r,
    equalScalar: i,
    matrix: a,
    pow: t,
    DenseMatrix: n,
    concat: o
  } = e, f = Ir({
    typed: r
  }), l = ft({
    typed: r,
    DenseMatrix: n
  }), u = Dr({
    typed: r,
    equalScalar: i
  }), s = hr({
    typed: r,
    DenseMatrix: n
  }), c = or({
    typed: r,
    matrix: a,
    concat: o
  }), m = {};
  for (var v in t.signatures)
    Object.prototype.hasOwnProperty.call(t.signatures, v) && !v.includes("Matrix") && !v.includes("Array") && (m[v] = t.signatures[v]);
  var d = r(m);
  return r(Uu, c({
    elop: d,
    SS: l,
    DS: f,
    Ss: u,
    sS: s
  }));
}), Lu = "dotDivide", yx = ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix", "concat"], bx = /* @__PURE__ */ q(Lu, yx, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    divideScalar: t,
    DenseMatrix: n,
    concat: o
  } = e, f = st({
    typed: r,
    equalScalar: a
  }), l = Ir({
    typed: r
  }), u = ft({
    typed: r,
    DenseMatrix: n
  }), s = Dr({
    typed: r,
    equalScalar: a
  }), c = hr({
    typed: r,
    DenseMatrix: n
  }), m = or({
    typed: r,
    matrix: i,
    concat: o
  });
  return r(Lu, m({
    elop: t,
    SS: u,
    DS: l,
    SD: f,
    Ss: s,
    sS: c
  }));
});
function jn(e) {
  var {
    DenseMatrix: r
  } = e;
  return function(a, t, n) {
    var o = a.size();
    if (o.length !== 2)
      throw new RangeError("Matrix must be two dimensional (size: " + Le(o) + ")");
    var f = o[0], l = o[1];
    if (f !== l)
      throw new RangeError("Matrix must be square (size: " + Le(o) + ")");
    var u = [];
    if (Fe(t)) {
      var s = t.size(), c = t._data;
      if (s.length === 1) {
        if (s[0] !== f)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var m = 0; m < f; m++)
          u[m] = [c[m]];
        return new r({
          data: u,
          size: [f, 1],
          datatype: t._datatype
        });
      }
      if (s.length === 2) {
        if (s[0] !== f || s[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (Sa(t)) {
          if (n) {
            u = [];
            for (var v = 0; v < f; v++)
              u[v] = [c[v][0]];
            return new r({
              data: u,
              size: [f, 1],
              datatype: t._datatype
            });
          }
          return t;
        }
        if (Lt(t)) {
          for (var d = 0; d < f; d++)
            u[d] = [0];
          for (var p = t._values, x = t._index, g = t._ptr, N = g[1], h = g[0]; h < N; h++) {
            var b = x[h];
            u[b][0] = p[h];
          }
          return new r({
            data: u,
            size: [f, 1],
            datatype: t._datatype
          });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (Ke(t)) {
      var w = qe(t);
      if (w.length === 1) {
        if (w[0] !== f)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var y = 0; y < f; y++)
          u[y] = [t[y]];
        return new r({
          data: u,
          size: [f, 1]
        });
      }
      if (w.length === 2) {
        if (w[0] !== f || w[1] !== 1)
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var A = 0; A < f; A++)
          u[A] = [t[A][0]];
        return new r({
          data: u,
          size: [f, 1]
        });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var ku = "lsolve", xx = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], wx = /* @__PURE__ */ q(ku, xx, (e) => {
  var {
    typed: r,
    matrix: i,
    divideScalar: a,
    multiplyScalar: t,
    subtractScalar: n,
    equalScalar: o,
    DenseMatrix: f
  } = e, l = jn({
    DenseMatrix: f
  });
  return r(ku, {
    "SparseMatrix, Array | Matrix": function(m, v) {
      return s(m, v);
    },
    "DenseMatrix, Array | Matrix": function(m, v) {
      return u(m, v);
    },
    "Array, Array | Matrix": function(m, v) {
      var d = i(m), p = u(d, v);
      return p.valueOf();
    }
  });
  function u(c, m) {
    m = l(c, m, !0);
    for (var v = m._data, d = c._size[0], p = c._size[1], x = [], g = c._data, N = 0; N < p; N++) {
      var h = v[N][0] || 0, b = void 0;
      if (o(h, 0))
        b = 0;
      else {
        var w = g[N][N];
        if (o(w, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        b = a(h, w);
        for (var y = N + 1; y < d; y++)
          v[y] = [n(v[y][0] || 0, t(b, g[y][N]))];
      }
      x[N] = [b];
    }
    return new f({
      data: x,
      size: [d, 1]
    });
  }
  function s(c, m) {
    m = l(c, m, !0);
    for (var v = m._data, d = c._size[0], p = c._size[1], x = c._values, g = c._index, N = c._ptr, h = [], b = 0; b < p; b++) {
      var w = v[b][0] || 0;
      if (o(w, 0))
        h[b] = [0];
      else {
        for (var y = 0, A = [], S = [], D = N[b], E = N[b + 1], C = D; C < E; C++) {
          var F = g[C];
          F === b ? y = x[C] : F > b && (A.push(x[C]), S.push(F));
        }
        if (o(y, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var _ = a(w, y), I = 0, $ = S.length; I < $; I++) {
          var T = S[I];
          v[T] = [n(v[T][0] || 0, t(_, A[I]))];
        }
        h[b] = [_];
      }
    }
    return new f({
      data: h,
      size: [d, 1]
    });
  }
}), Hu = "usolve", Nx = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Dx = /* @__PURE__ */ q(Hu, Nx, (e) => {
  var {
    typed: r,
    matrix: i,
    divideScalar: a,
    multiplyScalar: t,
    subtractScalar: n,
    equalScalar: o,
    DenseMatrix: f
  } = e, l = jn({
    DenseMatrix: f
  });
  return r(Hu, {
    "SparseMatrix, Array | Matrix": function(m, v) {
      return s(m, v);
    },
    "DenseMatrix, Array | Matrix": function(m, v) {
      return u(m, v);
    },
    "Array, Array | Matrix": function(m, v) {
      var d = i(m), p = u(d, v);
      return p.valueOf();
    }
  });
  function u(c, m) {
    m = l(c, m, !0);
    for (var v = m._data, d = c._size[0], p = c._size[1], x = [], g = c._data, N = p - 1; N >= 0; N--) {
      var h = v[N][0] || 0, b = void 0;
      if (o(h, 0))
        b = 0;
      else {
        var w = g[N][N];
        if (o(w, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        b = a(h, w);
        for (var y = N - 1; y >= 0; y--)
          v[y] = [n(v[y][0] || 0, t(b, g[y][N]))];
      }
      x[N] = [b];
    }
    return new f({
      data: x,
      size: [d, 1]
    });
  }
  function s(c, m) {
    m = l(c, m, !0);
    for (var v = m._data, d = c._size[0], p = c._size[1], x = c._values, g = c._index, N = c._ptr, h = [], b = p - 1; b >= 0; b--) {
      var w = v[b][0] || 0;
      if (o(w, 0))
        h[b] = [0];
      else {
        for (var y = 0, A = [], S = [], D = N[b], E = N[b + 1], C = E - 1; C >= D; C--) {
          var F = g[C];
          F === b ? y = x[C] : F < b && (A.push(x[C]), S.push(F));
        }
        if (o(y, 0))
          throw new Error("Linear system cannot be solved since matrix is singular");
        for (var _ = a(w, y), I = 0, $ = S.length; I < $; I++) {
          var T = S[I];
          v[T] = [n(v[T][0], t(_, A[I]))];
        }
        h[b] = [_];
      }
    }
    return new f({
      data: h,
      size: [d, 1]
    });
  }
}), Gu = "lsolveAll", Ax = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Ex = /* @__PURE__ */ q(Gu, Ax, (e) => {
  var {
    typed: r,
    matrix: i,
    divideScalar: a,
    multiplyScalar: t,
    subtractScalar: n,
    equalScalar: o,
    DenseMatrix: f
  } = e, l = jn({
    DenseMatrix: f
  });
  return r(Gu, {
    "SparseMatrix, Array | Matrix": function(m, v) {
      return s(m, v);
    },
    "DenseMatrix, Array | Matrix": function(m, v) {
      return u(m, v);
    },
    "Array, Array | Matrix": function(m, v) {
      var d = i(m), p = u(d, v);
      return p.map((x) => x.valueOf());
    }
  });
  function u(c, m) {
    for (var v = [l(c, m, !0)._data.map((S) => S[0])], d = c._data, p = c._size[0], x = c._size[1], g = 0; g < x; g++)
      for (var N = v.length, h = 0; h < N; h++) {
        var b = v[h];
        if (o(d[g][g], 0))
          if (o(b[g], 0)) {
            if (h === 0) {
              var y = [...b];
              y[g] = 1;
              for (var A = g + 1; A < x; A++)
                y[A] = n(y[A], d[A][g]);
              v.push(y);
            }
          } else {
            if (h === 0)
              return [];
            v.splice(h, 1), h -= 1, N -= 1;
          }
        else {
          b[g] = a(b[g], d[g][g]);
          for (var w = g + 1; w < x; w++)
            b[w] = n(b[w], t(b[g], d[w][g]));
        }
      }
    return v.map((S) => new f({
      data: S.map((D) => [D]),
      size: [p, 1]
    }));
  }
  function s(c, m) {
    for (var v = [l(c, m, !0)._data.map((K) => K[0])], d = c._size[0], p = c._size[1], x = c._values, g = c._index, N = c._ptr, h = 0; h < p; h++)
      for (var b = v.length, w = 0; w < b; w++) {
        for (var y = v[w], A = [], S = [], D = N[h], E = N[h + 1], C = 0, F = D; F < E; F++) {
          var _ = g[F];
          _ === h ? C = x[F] : _ > h && (A.push(x[F]), S.push(_));
        }
        if (o(C, 0))
          if (o(y[h], 0)) {
            if (w === 0) {
              var B = [...y];
              B[h] = 1;
              for (var L = 0, O = S.length; L < O; L++) {
                var X = S[L];
                B[X] = n(B[X], A[L]);
              }
              v.push(B);
            }
          } else {
            if (w === 0)
              return [];
            v.splice(w, 1), w -= 1, b -= 1;
          }
        else {
          y[h] = a(y[h], C);
          for (var I = 0, $ = S.length; I < $; I++) {
            var T = S[I];
            y[T] = n(y[T], t(y[h], A[I]));
          }
        }
      }
    return v.map((K) => new f({
      data: K.map((V) => [V]),
      size: [d, 1]
    }));
  }
}), Vu = "usolveAll", Sx = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Cx = /* @__PURE__ */ q(Vu, Sx, (e) => {
  var {
    typed: r,
    matrix: i,
    divideScalar: a,
    multiplyScalar: t,
    subtractScalar: n,
    equalScalar: o,
    DenseMatrix: f
  } = e, l = jn({
    DenseMatrix: f
  });
  return r(Vu, {
    "SparseMatrix, Array | Matrix": function(m, v) {
      return s(m, v);
    },
    "DenseMatrix, Array | Matrix": function(m, v) {
      return u(m, v);
    },
    "Array, Array | Matrix": function(m, v) {
      var d = i(m), p = u(d, v);
      return p.map((x) => x.valueOf());
    }
  });
  function u(c, m) {
    for (var v = [l(c, m, !0)._data.map((S) => S[0])], d = c._data, p = c._size[0], x = c._size[1], g = x - 1; g >= 0; g--)
      for (var N = v.length, h = 0; h < N; h++) {
        var b = v[h];
        if (o(d[g][g], 0))
          if (o(b[g], 0)) {
            if (h === 0) {
              var y = [...b];
              y[g] = 1;
              for (var A = g - 1; A >= 0; A--)
                y[A] = n(y[A], d[A][g]);
              v.push(y);
            }
          } else {
            if (h === 0)
              return [];
            v.splice(h, 1), h -= 1, N -= 1;
          }
        else {
          b[g] = a(b[g], d[g][g]);
          for (var w = g - 1; w >= 0; w--)
            b[w] = n(b[w], t(b[g], d[w][g]));
        }
      }
    return v.map((S) => new f({
      data: S.map((D) => [D]),
      size: [p, 1]
    }));
  }
  function s(c, m) {
    for (var v = [l(c, m, !0)._data.map((K) => K[0])], d = c._size[0], p = c._size[1], x = c._values, g = c._index, N = c._ptr, h = p - 1; h >= 0; h--)
      for (var b = v.length, w = 0; w < b; w++) {
        for (var y = v[w], A = [], S = [], D = N[h], E = N[h + 1], C = 0, F = E - 1; F >= D; F--) {
          var _ = g[F];
          _ === h ? C = x[F] : _ < h && (A.push(x[F]), S.push(_));
        }
        if (o(C, 0))
          if (o(y[h], 0)) {
            if (w === 0) {
              var B = [...y];
              B[h] = 1;
              for (var L = 0, O = S.length; L < O; L++) {
                var X = S[L];
                B[X] = n(B[X], A[L]);
              }
              v.push(B);
            }
          } else {
            if (w === 0)
              return [];
            v.splice(w, 1), w -= 1, b -= 1;
          }
        else {
          y[h] = a(y[h], C);
          for (var I = 0, $ = S.length; I < $; I++) {
            var T = S[I];
            y[T] = n(y[T], t(y[h], A[I]));
          }
        }
      }
    return v.map((K) => new f({
      data: K.map((V) => [V]),
      size: [d, 1]
    }));
  }
}), Mx = "matAlgo08xS0Sid", Fx = ["typed", "equalScalar"], to = /* @__PURE__ */ q(Mx, Fx, (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return function(t, n, o) {
    var f = t._values, l = t._index, u = t._ptr, s = t._size, c = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), m = n._values, v = n._index, d = n._ptr, p = n._size, x = n._datatype || n._data === void 0 ? n._datatype : n.getDataType();
    if (s.length !== p.length)
      throw new ke(s.length, p.length);
    if (s[0] !== p[0] || s[1] !== p[1])
      throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
    if (!f || !m)
      throw new Error("Cannot perform operation on Pattern Sparse Matrices");
    var g = s[0], N = s[1], h, b = i, w = 0, y = o;
    typeof c == "string" && c === x && c !== "mixed" && (h = c, b = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
    for (var A = [], S = [], D = [], E = [], C = [], F, _, I, $, T = 0; T < N; T++) {
      D[T] = S.length;
      var B = T + 1;
      for (_ = u[T], I = u[T + 1], F = _; F < I; F++)
        $ = l[F], C[$] = B, E[$] = f[F], S.push($);
      for (_ = d[T], I = d[T + 1], F = _; F < I; F++)
        $ = v[F], C[$] === B && (E[$] = y(E[$], m[F]));
      for (F = D[T]; F < S.length; ) {
        $ = S[F];
        var L = E[$];
        b(L, w) ? S.splice(F, 1) : (A.push(L), F++);
      }
    }
    return D[N] = S.length, t.createSparseMatrix({
      values: A,
      index: S,
      ptr: D,
      size: [g, N],
      datatype: c === t._datatype && x === n._datatype ? h : void 0
    });
  };
}), no = /* @__PURE__ */ q("useMatrixForArrayScalar", ["typed", "matrix"], (e) => {
  var {
    typed: r,
    matrix: i
  } = e;
  return {
    "Array, number": r.referTo("DenseMatrix, number", (a) => (t, n) => a(i(t), n).valueOf()),
    "Array, BigNumber": r.referTo("DenseMatrix, BigNumber", (a) => (t, n) => a(i(t), n).valueOf()),
    "number, Array": r.referTo("number, DenseMatrix", (a) => (t, n) => a(t, i(n)).valueOf()),
    "BigNumber, Array": r.referTo("BigNumber, DenseMatrix", (a) => (t, n) => a(t, i(n)).valueOf())
  };
}), Zu = "leftShift", Bx = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"], Tx = /* @__PURE__ */ q(Zu, Bx, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    DenseMatrix: n,
    concat: o
  } = e, f = $t({
    typed: r
  }), l = st({
    typed: r,
    equalScalar: a
  }), u = to({
    typed: r,
    equalScalar: a
  }), s = Zt({
    typed: r,
    DenseMatrix: n
  }), c = Dr({
    typed: r,
    equalScalar: a
  }), m = ot({
    typed: r
  }), v = or({
    typed: r,
    matrix: i,
    concat: o
  }), d = no({
    typed: r,
    matrix: i
  });
  return r(Zu, {
    "number, number": fm,
    "BigNumber, BigNumber": Q1,
    "SparseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : c(x, g, p, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : m(x, g, p, !1)),
    "number | BigNumber, SparseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : s(g, x, p, !0)),
    "number | BigNumber, DenseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : m(g, x, p, !0))
  }, d, v({
    SS: u,
    DS: f,
    SD: l
  }));
}), Yu = "rightArithShift", Ox = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"], _x = /* @__PURE__ */ q(Yu, Ox, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    DenseMatrix: n,
    concat: o
  } = e, f = $t({
    typed: r
  }), l = st({
    typed: r,
    equalScalar: a
  }), u = to({
    typed: r,
    equalScalar: a
  }), s = Zt({
    typed: r,
    DenseMatrix: n
  }), c = Dr({
    typed: r,
    equalScalar: a
  }), m = ot({
    typed: r
  }), v = or({
    typed: r,
    matrix: i,
    concat: o
  }), d = no({
    typed: r,
    matrix: i
  });
  return r(Yu, {
    "number, number": mm,
    "BigNumber, BigNumber": K1,
    "SparseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : c(x, g, p, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : m(x, g, p, !1)),
    "number | BigNumber, SparseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : s(g, x, p, !0)),
    "number | BigNumber, DenseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : m(g, x, p, !0))
  }, d, v({
    SS: u,
    DS: f,
    SD: l
  }));
}), Xu = "rightLogShift", $x = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"], Ix = /* @__PURE__ */ q(Xu, $x, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    DenseMatrix: n,
    concat: o
  } = e, f = $t({
    typed: r
  }), l = st({
    typed: r,
    equalScalar: a
  }), u = to({
    typed: r,
    equalScalar: a
  }), s = Zt({
    typed: r,
    DenseMatrix: n
  }), c = Dr({
    typed: r,
    equalScalar: a
  }), m = ot({
    typed: r
  }), v = or({
    typed: r,
    matrix: i,
    concat: o
  }), d = no({
    typed: r,
    matrix: i
  });
  return r(Xu, {
    "number, number": vm,
    // 'BigNumber, BigNumber': ..., // TODO: implement BigNumber support for rightLogShift
    "SparseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : c(x, g, p, !1)),
    "DenseMatrix, number | BigNumber": r.referToSelf((p) => (x, g) => a(g, 0) ? x.clone() : m(x, g, p, !1)),
    "number | BigNumber, SparseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : s(g, x, p, !0)),
    "number | BigNumber, DenseMatrix": r.referToSelf((p) => (x, g) => a(x, 0) ? t(g.size(), g.storage()) : m(g, x, p, !0))
  }, d, v({
    SS: u,
    DS: f,
    SD: l
  }));
}), Wu = "and", qx = ["typed", "matrix", "equalScalar", "zeros", "not", "concat"], nv = /* @__PURE__ */ q(Wu, qx, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    not: n,
    concat: o
  } = e, f = st({
    typed: r,
    equalScalar: a
  }), l = si({
    typed: r,
    equalScalar: a
  }), u = Dr({
    typed: r,
    equalScalar: a
  }), s = ot({
    typed: r
  }), c = or({
    typed: r,
    matrix: i,
    concat: o
  });
  return r(Wu, {
    "number, number": ym,
    "Complex, Complex": function(v, d) {
      return (v.re !== 0 || v.im !== 0) && (d.re !== 0 || d.im !== 0);
    },
    "BigNumber, BigNumber": function(v, d) {
      return !v.isZero() && !d.isZero() && !v.isNaN() && !d.isNaN();
    },
    "Unit, Unit": r.referToSelf((m) => (v, d) => m(v.value || 0, d.value || 0)),
    "SparseMatrix, any": r.referToSelf((m) => (v, d) => n(d) ? t(v.size(), v.storage()) : u(v, d, m, !1)),
    "DenseMatrix, any": r.referToSelf((m) => (v, d) => n(d) ? t(v.size(), v.storage()) : s(v, d, m, !1)),
    "any, SparseMatrix": r.referToSelf((m) => (v, d) => n(v) ? t(v.size(), v.storage()) : u(d, v, m, !0)),
    "any, DenseMatrix": r.referToSelf((m) => (v, d) => n(v) ? t(v.size(), v.storage()) : s(d, v, m, !0)),
    "Array, any": r.referToSelf((m) => (v, d) => m(i(v), d).valueOf()),
    "any, Array": r.referToSelf((m) => (v, d) => m(v, i(d)).valueOf())
  }, c({
    SS: l,
    DS: f
  }));
}), Ua = "compare", Rx = ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"], zx = /* @__PURE__ */ q(Ua, Rx, (e) => {
  var {
    typed: r,
    config: i,
    equalScalar: a,
    matrix: t,
    BigNumber: n,
    Fraction: o,
    DenseMatrix: f,
    concat: l
  } = e, u = Ir({
    typed: r
  }), s = oi({
    typed: r,
    equalScalar: a
  }), c = hr({
    typed: r,
    DenseMatrix: f
  }), m = or({
    typed: r,
    matrix: t,
    concat: l
  }), v = Sn({
    typed: r
  });
  return r(Ua, Px({
    typed: r,
    config: i
  }), {
    "boolean, boolean": function(p, x) {
      return p === x ? 0 : p > x ? 1 : -1;
    },
    "BigNumber, BigNumber": function(p, x) {
      return Jr(p, x, i.epsilon) ? new n(0) : new n(p.cmp(x));
    },
    "Fraction, Fraction": function(p, x) {
      return new o(p.compare(x));
    },
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, v, m({
    SS: s,
    DS: u,
    Ss: c
  }));
}), Px = /* @__PURE__ */ q(Ua, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(Ua, {
    "number, number": function(t, n) {
      return _r(t, n, i.epsilon) ? 0 : t > n ? 1 : -1;
    }
  });
}), Ux = function e(r, i) {
  var a = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, t = /(^[ ]*|[ ]*$)/g, n = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, o = /^0x[0-9a-f]+$/i, f = /^0/, l = function(h) {
    return e.insensitive && ("" + h).toLowerCase() || "" + h;
  }, u = l(r).replace(t, "") || "", s = l(i).replace(t, "") || "", c = u.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), m = s.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), v = parseInt(u.match(o), 16) || c.length !== 1 && u.match(n) && Date.parse(u), d = parseInt(s.match(o), 16) || v && s.match(n) && Date.parse(s) || null, p, x;
  if (d) {
    if (v < d)
      return -1;
    if (v > d)
      return 1;
  }
  for (var g = 0, N = Math.max(c.length, m.length); g < N; g++) {
    if (p = !(c[g] || "").match(f) && parseFloat(c[g]) || c[g] || 0, x = !(m[g] || "").match(f) && parseFloat(m[g]) || m[g] || 0, isNaN(p) !== isNaN(x))
      return isNaN(p) ? 1 : -1;
    if (typeof p != typeof x && (p += "", x += ""), p < x)
      return -1;
    if (p > x)
      return 1;
  }
  return 0;
};
const sn = /* @__PURE__ */ Xn(Ux);
var Ju = "compareNatural", Lx = ["typed", "compare"], kx = /* @__PURE__ */ q(Ju, Lx, (e) => {
  var {
    typed: r,
    compare: i
  } = e, a = i.signatures["boolean,boolean"];
  return r(Ju, {
    "any, any": t
  });
  function t(l, u) {
    var s = ar(l), c = ar(u), m;
    if ((s === "number" || s === "BigNumber" || s === "Fraction") && (c === "number" || c === "BigNumber" || c === "Fraction"))
      return m = i(l, u), m.toString() !== "0" ? m > 0 ? 1 : -1 : sn(s, c);
    var v = ["Array", "DenseMatrix", "SparseMatrix"];
    if (v.includes(s) || v.includes(c))
      return m = n(t, l, u), m !== 0 ? m : sn(s, c);
    if (s !== c)
      return sn(s, c);
    if (s === "Complex")
      return Hx(l, u);
    if (s === "Unit")
      return l.equalBase(u) ? t(l.value, u.value) : o(t, l.formatUnits(), u.formatUnits());
    if (s === "boolean")
      return a(l, u);
    if (s === "string")
      return sn(l, u);
    if (s === "Object")
      return f(t, l, u);
    if (s === "null" || s === "undefined")
      return 0;
    throw new TypeError('Unsupported type of value "' + s + '"');
  }
  function n(l, u, s) {
    return Lt(u) && Lt(s) ? o(l, u.toJSON().values, s.toJSON().values) : Lt(u) ? n(l, u.toArray(), s) : Lt(s) ? n(l, u, s.toArray()) : Sa(u) ? n(l, u.toJSON().data, s) : Sa(s) ? n(l, u, s.toJSON().data) : Array.isArray(u) ? Array.isArray(s) ? o(l, u, s) : n(l, u, [s]) : n(l, [u], s);
  }
  function o(l, u, s) {
    for (var c = 0, m = Math.min(u.length, s.length); c < m; c++) {
      var v = l(u[c], s[c]);
      if (v !== 0)
        return v;
    }
    return u.length > s.length ? 1 : u.length < s.length ? -1 : 0;
  }
  function f(l, u, s) {
    var c = Object.keys(u), m = Object.keys(s);
    c.sort(sn), m.sort(sn);
    var v = o(l, c, m);
    if (v !== 0)
      return v;
    for (var d = 0; d < c.length; d++) {
      var p = l(u[c[d]], s[m[d]]);
      if (p !== 0)
        return p;
    }
    return 0;
  }
});
function Hx(e, r) {
  return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0;
}
var Qu = "compareText", Gx = ["typed", "matrix", "concat"];
Bi.signature = "any, any";
var Vx = /* @__PURE__ */ q(Qu, Gx, (e) => {
  var {
    typed: r,
    matrix: i,
    concat: a
  } = e, t = or({
    typed: r,
    matrix: i,
    concat: a
  });
  return r(Qu, Bi, t({
    elop: Bi,
    Ds: !0
  }));
}), La = "equal", Zx = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], Yx = /* @__PURE__ */ q(La, Zx, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = ft({
    typed: r,
    DenseMatrix: t
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: i,
    concat: n
  });
  return r(La, Xx({
    typed: r,
    equalScalar: a
  }), u({
    elop: a,
    SS: f,
    DS: o,
    Ss: l
  }));
}), Xx = q(La, ["typed", "equalScalar"], (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return r(La, {
    "any, any": function(t, n) {
      return t === null ? n === null : n === null ? t === null : t === void 0 ? n === void 0 : n === void 0 ? t === void 0 : i(t, n);
    }
  });
}), Ku = "equalText", Wx = ["typed", "compareText", "isZero"], Jx = /* @__PURE__ */ q(Ku, Wx, (e) => {
  var {
    typed: r,
    compareText: i,
    isZero: a
  } = e;
  return r(Ku, {
    "any, any": function(n, o) {
      return a(i(n, o));
    }
  });
}), ka = "smaller", Qx = ["typed", "config", "matrix", "DenseMatrix", "concat"], Kx = /* @__PURE__ */ q(ka, Qx, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = ft({
    typed: r,
    DenseMatrix: t
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: a,
    concat: n
  }), s = Sn({
    typed: r
  });
  return r(ka, jx({
    typed: r,
    config: i
  }), {
    "boolean, boolean": (c, m) => c < m,
    "BigNumber, BigNumber": function(m, v) {
      return m.lt(v) && !Jr(m, v, i.epsilon);
    },
    "Fraction, Fraction": (c, m) => c.compare(m) === -1,
    "Complex, Complex": function(m, v) {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), jx = /* @__PURE__ */ q(ka, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(ka, {
    "number, number": function(t, n) {
      return t < n && !_r(t, n, i.epsilon);
    }
  });
}), Ha = "smallerEq", ew = ["typed", "config", "matrix", "DenseMatrix", "concat"], rw = /* @__PURE__ */ q(Ha, ew, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = ft({
    typed: r,
    DenseMatrix: t
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: a,
    concat: n
  }), s = Sn({
    typed: r
  });
  return r(Ha, tw({
    typed: r,
    config: i
  }), {
    "boolean, boolean": (c, m) => c <= m,
    "BigNumber, BigNumber": function(m, v) {
      return m.lte(v) || Jr(m, v, i.epsilon);
    },
    "Fraction, Fraction": (c, m) => c.compare(m) !== 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), tw = /* @__PURE__ */ q(Ha, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(Ha, {
    "number, number": function(t, n) {
      return t <= n || _r(t, n, i.epsilon);
    }
  });
}), Ga = "larger", nw = ["typed", "config", "matrix", "DenseMatrix", "concat"], aw = /* @__PURE__ */ q(Ga, nw, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = ft({
    typed: r,
    DenseMatrix: t
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: a,
    concat: n
  }), s = Sn({
    typed: r
  });
  return r(Ga, iw({
    typed: r,
    config: i
  }), {
    "boolean, boolean": (c, m) => c > m,
    "BigNumber, BigNumber": function(m, v) {
      return m.gt(v) && !Jr(m, v, i.epsilon);
    },
    "Fraction, Fraction": (c, m) => c.compare(m) === 1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), iw = /* @__PURE__ */ q(Ga, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(Ga, {
    "number, number": function(t, n) {
      return t > n && !_r(t, n, i.epsilon);
    }
  });
}), Va = "largerEq", ow = ["typed", "config", "matrix", "DenseMatrix", "concat"], sw = /* @__PURE__ */ q(Va, ow, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Ir({
    typed: r
  }), f = ft({
    typed: r,
    DenseMatrix: t
  }), l = hr({
    typed: r,
    DenseMatrix: t
  }), u = or({
    typed: r,
    matrix: a,
    concat: n
  }), s = Sn({
    typed: r
  });
  return r(Va, uw({
    typed: r,
    config: i
  }), {
    "boolean, boolean": (c, m) => c >= m,
    "BigNumber, BigNumber": function(m, v) {
      return m.gte(v) || Jr(m, v, i.epsilon);
    },
    "Fraction, Fraction": (c, m) => c.compare(m) !== -1,
    "Complex, Complex": function() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, s, u({
    SS: f,
    DS: o,
    Ss: l
  }));
}), uw = /* @__PURE__ */ q(Va, ["typed", "config"], (e) => {
  var {
    typed: r,
    config: i
  } = e;
  return r(Va, {
    "number, number": function(t, n) {
      return t >= n || _r(t, n, i.epsilon);
    }
  });
}), ju = "deepEqual", lw = ["typed", "equal"], cw = /* @__PURE__ */ q(ju, lw, (e) => {
  var {
    typed: r,
    equal: i
  } = e;
  return r(ju, {
    "any, any": function(n, o) {
      return a(n.valueOf(), o.valueOf());
    }
  });
  function a(t, n) {
    if (Array.isArray(t))
      if (Array.isArray(n)) {
        var o = t.length;
        if (o !== n.length)
          return !1;
        for (var f = 0; f < o; f++)
          if (!a(t[f], n[f]))
            return !1;
        return !0;
      } else
        return !1;
    else
      return Array.isArray(n) ? !1 : i(t, n);
  }
}), Za = "unequal", fw = ["typed", "config", "equalScalar", "matrix", "DenseMatrix", "concat"], mw = /* @__PURE__ */ q(Za, fw, (e) => {
  var {
    typed: r,
    config: i,
    equalScalar: a,
    matrix: t,
    DenseMatrix: n,
    concat: o
  } = e, f = Ir({
    typed: r
  }), l = ft({
    typed: r,
    DenseMatrix: n
  }), u = hr({
    typed: r,
    DenseMatrix: n
  }), s = or({
    typed: r,
    matrix: t,
    concat: o
  });
  return r(Za, vw({
    typed: r,
    equalScalar: a
  }), s({
    elop: c,
    SS: l,
    DS: f,
    Ss: u
  }));
  function c(m, v) {
    return !a(m, v);
  }
}), vw = q(Za, ["typed", "equalScalar"], (e) => {
  var {
    typed: r,
    equalScalar: i
  } = e;
  return r(Za, {
    "any, any": function(t, n) {
      return t === null ? n !== null : n === null ? t !== null : t === void 0 ? n !== void 0 : n === void 0 ? t !== void 0 : !i(t, n);
    }
  });
}), el = "partitionSelect", pw = ["typed", "isNumeric", "isNaN", "compare"], dw = /* @__PURE__ */ q(el, pw, (e) => {
  var {
    typed: r,
    isNumeric: i,
    isNaN: a,
    compare: t
  } = e, n = t, o = (u, s) => -t(u, s);
  return r(el, {
    "Array | Matrix, number": function(s, c) {
      return f(s, c, n);
    },
    "Array | Matrix, number, string": function(s, c, m) {
      if (m === "asc")
        return f(s, c, n);
      if (m === "desc")
        return f(s, c, o);
      throw new Error('Compare string must be "asc" or "desc"');
    },
    "Array | Matrix, number, function": f
  });
  function f(u, s, c) {
    if (!Se(s) || s < 0)
      throw new Error("k must be a non-negative integer");
    if (Fe(u)) {
      var m = u.size();
      if (m.length > 1)
        throw new Error("Only one dimensional matrices supported");
      return l(u.valueOf(), s, c);
    }
    if (Array.isArray(u))
      return l(u, s, c);
  }
  function l(u, s, c) {
    if (s >= u.length)
      throw new Error("k out of bounds");
    for (var m = 0; m < u.length; m++)
      if (i(u[m]) && a(u[m]))
        return u[m];
    for (var v = 0, d = u.length - 1; v < d; ) {
      for (var p = v, x = d, g = u[Math.floor(Math.random() * (d - v + 1)) + v]; p < x; )
        if (c(u[p], g) >= 0) {
          var N = u[x];
          u[x] = u[p], u[p] = N, --x;
        } else
          ++p;
      c(u[p], g) > 0 && --p, s <= p ? d = p : v = p + 1;
    }
    return u[s];
  }
}), rl = "sort", hw = ["typed", "matrix", "compare", "compareNatural"], gw = /* @__PURE__ */ q(rl, hw, (e) => {
  var {
    typed: r,
    matrix: i,
    compare: a,
    compareNatural: t
  } = e, n = a, o = (s, c) => -a(s, c);
  return r(rl, {
    Array: function(c) {
      return l(c), c.sort(n);
    },
    Matrix: function(c) {
      return u(c), i(c.toArray().sort(n), c.storage());
    },
    "Array, function": function(c, m) {
      return l(c), c.sort(m);
    },
    "Matrix, function": function(c, m) {
      return u(c), i(c.toArray().sort(m), c.storage());
    },
    "Array, string": function(c, m) {
      return l(c), c.sort(f(m));
    },
    "Matrix, string": function(c, m) {
      return u(c), i(c.toArray().sort(f(m)), c.storage());
    }
  });
  function f(s) {
    if (s === "asc")
      return n;
    if (s === "desc")
      return o;
    if (s === "natural")
      return t;
    throw new Error('String "asc", "desc", or "natural" expected');
  }
  function l(s) {
    if (qe(s).length !== 1)
      throw new Error("One dimensional array expected");
  }
  function u(s) {
    if (s.size().length !== 1)
      throw new Error("One dimensional matrix expected");
  }
}), tl = "max", yw = ["typed", "config", "numeric", "larger"], av = /* @__PURE__ */ q(tl, yw, (e) => {
  var {
    typed: r,
    config: i,
    numeric: a,
    larger: t
  } = e;
  return r(tl, {
    // max([a, b, c, d, ...])
    "Array | Matrix": o,
    // max([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": function(l, u) {
      return ai(l, u.valueOf(), n);
    },
    // max(a, b, c, d, ...)
    "...": function(l) {
      if (Dn(l))
        throw new TypeError("Scalar values expected in function max");
      return o(l);
    }
  });
  function n(f, l) {
    try {
      return t(f, l) ? f : l;
    } catch (u) {
      throw $r(u, "max", l);
    }
  }
  function o(f) {
    var l;
    if (Nt(f, function(u) {
      try {
        isNaN(u) && typeof u == "number" ? l = NaN : (l === void 0 || t(u, l)) && (l = u);
      } catch (s) {
        throw $r(s, "max", u);
      }
    }), l === void 0)
      throw new Error("Cannot calculate max of an empty array");
    return typeof l == "string" && (l = a(l, i.number)), l;
  }
}), nl = "min", bw = ["typed", "config", "numeric", "smaller"], iv = /* @__PURE__ */ q(nl, bw, (e) => {
  var {
    typed: r,
    config: i,
    numeric: a,
    smaller: t
  } = e;
  return r(nl, {
    // min([a, b, c, d, ...])
    "Array | Matrix": o,
    // min([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": function(l, u) {
      return ai(l, u.valueOf(), n);
    },
    // min(a, b, c, d, ...)
    "...": function(l) {
      if (Dn(l))
        throw new TypeError("Scalar values expected in function min");
      return o(l);
    }
  });
  function n(f, l) {
    try {
      return t(f, l) ? f : l;
    } catch (u) {
      throw $r(u, "min", l);
    }
  }
  function o(f) {
    var l;
    if (Nt(f, function(u) {
      try {
        isNaN(u) && typeof u == "number" ? l = NaN : (l === void 0 || t(u, l)) && (l = u);
      } catch (s) {
        throw $r(s, "min", u);
      }
    }), l === void 0)
      throw new Error("Cannot calculate min of an empty array");
    return typeof l == "string" && (l = a(l, i.number)), l;
  }
}), xw = "ImmutableDenseMatrix", ww = ["smaller", "DenseMatrix"], Nw = /* @__PURE__ */ q(xw, ww, (e) => {
  var {
    smaller: r,
    DenseMatrix: i
  } = e;
  function a(t, n) {
    if (!(this instanceof a))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (n && !Er(n))
      throw new Error("Invalid datatype: " + n);
    if (Fe(t) || Ke(t)) {
      var o = new i(t, n);
      this._data = o._data, this._size = o._size, this._datatype = o._datatype, this._min = null, this._max = null;
    } else if (t && Ke(t.data) && Ke(t.size))
      this._data = t.data, this._size = t.size, this._datatype = t.datatype, this._min = typeof t.min < "u" ? t.min : null, this._max = typeof t.max < "u" ? t.max : null;
    else {
      if (t)
        throw new TypeError("Unsupported type of data (" + ar(t) + ")");
      this._data = [], this._size = [0], this._datatype = n, this._min = null, this._max = null;
    }
  }
  return a.prototype = new i(), a.prototype.type = "ImmutableDenseMatrix", a.prototype.isImmutableDenseMatrix = !0, a.prototype.subset = function(t) {
    switch (arguments.length) {
      case 1: {
        var n = i.prototype.subset.call(this, t);
        return Fe(n) ? new a({
          data: n._data,
          size: n._size,
          datatype: n._datatype
        }) : n;
      }
      case 2:
      case 3:
        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, a.prototype.set = function() {
    throw new Error("Cannot invoke set on an Immutable Matrix instance");
  }, a.prototype.resize = function() {
    throw new Error("Cannot invoke resize on an Immutable Matrix instance");
  }, a.prototype.reshape = function() {
    throw new Error("Cannot invoke reshape on an Immutable Matrix instance");
  }, a.prototype.clone = function() {
    return new a({
      data: _e(this._data),
      size: _e(this._size),
      datatype: this._datatype
    });
  }, a.prototype.toJSON = function() {
    return {
      mathjs: "ImmutableDenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  }, a.fromJSON = function(t) {
    return new a(t);
  }, a.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  }, a.prototype.min = function() {
    if (this._min === null) {
      var t = null;
      this.forEach(function(n) {
        (t === null || r(n, t)) && (t = n);
      }), this._min = t !== null ? t : void 0;
    }
    return this._min;
  }, a.prototype.max = function() {
    if (this._max === null) {
      var t = null;
      this.forEach(function(n) {
        (t === null || r(t, n)) && (t = n);
      }), this._max = t !== null ? t : void 0;
    }
    return this._max;
  }, a;
}, {
  isClass: !0
}), Dw = "Index", Aw = ["ImmutableDenseMatrix", "getMatrixDataType"], Ew = /* @__PURE__ */ q(Dw, Aw, (e) => {
  var {
    ImmutableDenseMatrix: r,
    getMatrixDataType: i
  } = e;
  function a(n) {
    if (!(this instanceof a))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = !0;
    for (var o = 0, f = arguments.length; o < f; o++) {
      var l = arguments[o], u = Ke(l), s = Fe(l), c = null;
      if (Zi(l))
        this._dimensions.push(l), this._isScalar = !1;
      else if (u || s) {
        var m = void 0;
        i(l) === "boolean" ? (u && (m = t(al(l).valueOf())), s && (m = t(al(l._data).valueOf())), c = l.valueOf().length) : m = t(l.valueOf()), this._dimensions.push(m);
        var v = m.size();
        (v.length !== 1 || v[0] !== 1 || c !== null) && (this._isScalar = !1);
      } else if (typeof l == "number")
        this._dimensions.push(t([l]));
      else if (typeof l == "string")
        this._dimensions.push(l);
      else
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      this._sourceSize.push(c);
    }
  }
  a.prototype.type = "Index", a.prototype.isIndex = !0;
  function t(n) {
    for (var o = 0, f = n.length; o < f; o++)
      if (typeof n[o] != "number" || !Se(n[o]))
        throw new TypeError("Index parameters must be positive integer numbers");
    return new r(n);
  }
  return a.prototype.clone = function() {
    var n = new a();
    return n._dimensions = _e(this._dimensions), n._isScalar = this._isScalar, n._sourceSize = this._sourceSize, n;
  }, a.create = function(n) {
    var o = new a();
    return a.apply(o, n), o;
  }, a.prototype.size = function() {
    for (var n = [], o = 0, f = this._dimensions.length; o < f; o++) {
      var l = this._dimensions[o];
      n[o] = typeof l == "string" ? 1 : l.size()[0];
    }
    return n;
  }, a.prototype.max = function() {
    for (var n = [], o = 0, f = this._dimensions.length; o < f; o++) {
      var l = this._dimensions[o];
      n[o] = typeof l == "string" ? l : l.max();
    }
    return n;
  }, a.prototype.min = function() {
    for (var n = [], o = 0, f = this._dimensions.length; o < f; o++) {
      var l = this._dimensions[o];
      n[o] = typeof l == "string" ? l : l.min();
    }
    return n;
  }, a.prototype.forEach = function(n) {
    for (var o = 0, f = this._dimensions.length; o < f; o++)
      n(this._dimensions[o], o, this);
  }, a.prototype.dimension = function(n) {
    return this._dimensions[n] || null;
  }, a.prototype.isObjectProperty = function() {
    return this._dimensions.length === 1 && typeof this._dimensions[0] == "string";
  }, a.prototype.getObjectProperty = function() {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  }, a.prototype.isScalar = function() {
    return this._isScalar;
  }, a.prototype.toArray = function() {
    for (var n = [], o = 0, f = this._dimensions.length; o < f; o++) {
      var l = this._dimensions[o];
      n.push(typeof l == "string" ? l : l.toArray());
    }
    return n;
  }, a.prototype.valueOf = a.prototype.toArray, a.prototype.toString = function() {
    for (var n = [], o = 0, f = this._dimensions.length; o < f; o++) {
      var l = this._dimensions[o];
      typeof l == "string" ? n.push(JSON.stringify(l)) : n.push(l.toString());
    }
    return "[" + n.join(", ") + "]";
  }, a.prototype.toJSON = function() {
    return {
      mathjs: "Index",
      dimensions: this._dimensions
    };
  }, a.fromJSON = function(n) {
    return a.create(n.dimensions);
  }, a;
}, {
  isClass: !0
});
function al(e) {
  var r = [];
  return e.forEach((i, a) => {
    i && r.push(a);
  }), r;
}
var Sw = "FibonacciHeap", Cw = ["smaller", "larger"], Mw = /* @__PURE__ */ q(Sw, Cw, (e) => {
  var {
    smaller: r,
    larger: i
  } = e, a = 1 / Math.log((1 + Math.sqrt(5)) / 2);
  function t() {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._minimum = null, this._size = 0;
  }
  t.prototype.type = "FibonacciHeap", t.prototype.isFibonacciHeap = !0, t.prototype.insert = function(s, c) {
    var m = {
      key: s,
      value: c,
      degree: 0
    };
    if (this._minimum) {
      var v = this._minimum;
      m.left = v, m.right = v.right, v.right = m, m.right.left = m, r(s, v.key) && (this._minimum = m);
    } else
      m.left = m, m.right = m, this._minimum = m;
    return this._size++, m;
  }, t.prototype.size = function() {
    return this._size;
  }, t.prototype.clear = function() {
    this._minimum = null, this._size = 0;
  }, t.prototype.isEmpty = function() {
    return this._size === 0;
  }, t.prototype.extractMinimum = function() {
    var s = this._minimum;
    if (s === null)
      return s;
    for (var c = this._minimum, m = s.degree, v = s.child; m > 0; ) {
      var d = v.right;
      v.left.right = v.right, v.right.left = v.left, v.left = c, v.right = c.right, c.right = v, v.right.left = v, v.parent = null, v = d, m--;
    }
    return s.left.right = s.right, s.right.left = s.left, s === s.right ? c = null : (c = s.right, c = u(c, this._size)), this._size--, this._minimum = c, s;
  }, t.prototype.remove = function(s) {
    this._minimum = n(this._minimum, s, -1), this.extractMinimum();
  };
  function n(s, c, m) {
    c.key = m;
    var v = c.parent;
    return v && r(c.key, v.key) && (o(s, c, v), f(s, v)), r(c.key, s.key) && (s = c), s;
  }
  function o(s, c, m) {
    c.left.right = c.right, c.right.left = c.left, m.degree--, m.child === c && (m.child = c.right), m.degree === 0 && (m.child = null), c.left = s, c.right = s.right, s.right = c, c.right.left = c, c.parent = null, c.mark = !1;
  }
  function f(s, c) {
    var m = c.parent;
    m && (c.mark ? (o(s, c, m), f(m)) : c.mark = !0);
  }
  var l = function(c, m) {
    c.left.right = c.right, c.right.left = c.left, c.parent = m, m.child ? (c.left = m.child, c.right = m.child.right, m.child.right = c, c.right.left = c) : (m.child = c, c.right = c, c.left = c), m.degree++, c.mark = !1;
  };
  function u(s, c) {
    var m = Math.floor(Math.log(c) * a) + 1, v = new Array(m), d = 0, p = s;
    if (p)
      for (d++, p = p.right; p !== s; )
        d++, p = p.right;
    for (var x; d > 0; ) {
      for (var g = p.degree, N = p.right; x = v[g], !!x; ) {
        if (i(p.key, x.key)) {
          var h = x;
          x = p, p = h;
        }
        l(x, p), v[g] = null, g++;
      }
      v[g] = p, p = N, d--;
    }
    s = null;
    for (var b = 0; b < m; b++)
      x = v[b], x && (s ? (x.left.right = x.right, x.right.left = x.left, x.left = s, x.right = s.right, s.right = x, x.right.left = x, r(x.key, s.key) && (s = x)) : s = x);
    return s;
  }
  return t;
}, {
  isClass: !0
}), Fw = "Spa", Bw = ["addScalar", "equalScalar", "FibonacciHeap"], Tw = /* @__PURE__ */ q(Fw, Bw, (e) => {
  var {
    addScalar: r,
    equalScalar: i,
    FibonacciHeap: a
  } = e;
  function t() {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    this._values = [], this._heap = new a();
  }
  return t.prototype.type = "Spa", t.prototype.isSpa = !0, t.prototype.set = function(n, o) {
    if (this._values[n])
      this._values[n].value = o;
    else {
      var f = this._heap.insert(n, o);
      this._values[n] = f;
    }
  }, t.prototype.get = function(n) {
    var o = this._values[n];
    return o ? o.value : 0;
  }, t.prototype.accumulate = function(n, o) {
    var f = this._values[n];
    f ? f.value = r(f.value, o) : (f = this._heap.insert(n, o), this._values[n] = f);
  }, t.prototype.forEach = function(n, o, f) {
    var l = this._heap, u = this._values, s = [], c = l.extractMinimum();
    for (c && s.push(c); c && c.key <= o; )
      c.key >= n && (i(c.value, 0) || f(c.key, c.value, this)), c = l.extractMinimum(), c && s.push(c);
    for (var m = 0; m < s.length; m++) {
      var v = s[m];
      c = l.insert(v.key, v.value), u[c.key] = c;
    }
  }, t.prototype.swap = function(n, o) {
    var f = this._values[n], l = this._values[o];
    if (!f && l)
      f = this._heap.insert(n, l.value), this._heap.remove(l), this._values[n] = f, this._values[o] = void 0;
    else if (f && !l)
      l = this._heap.insert(o, f.value), this._heap.remove(f), this._values[o] = l, this._values[n] = void 0;
    else if (f && l) {
      var u = f.value;
      f.value = l.value, l.value = u;
    }
  }, t;
}, {
  isClass: !0
}), Ow = Kn(function(e) {
  return new e(1).exp();
}, {
  hasher: ui
}), _w = Kn(function(e) {
  return new e(1).plus(new e(5).sqrt()).div(2);
}, {
  hasher: ui
}), ao = Kn(function(e) {
  return e.acos(-1);
}, {
  hasher: ui
}), $w = Kn(function(e) {
  return ao(e).times(2);
}, {
  hasher: ui
});
function ui(e) {
  return e[0].precision;
}
function il(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Ei(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? il(Object(i), !0).forEach(function(a) {
      dr(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : il(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
var Iw = "Unit", qw = ["?on", "config", "addScalar", "subtractScalar", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"], Rw = /* @__PURE__ */ q(Iw, qw, (e) => {
  var {
    on: r,
    config: i,
    addScalar: a,
    subtractScalar: t,
    multiplyScalar: n,
    divideScalar: o,
    pow: f,
    abs: l,
    fix: u,
    round: s,
    equal: c,
    isNumeric: m,
    format: v,
    number: d,
    Complex: p,
    BigNumber: x,
    Fraction: g
  } = e, N = d;
  function h(P, H) {
    if (!(this instanceof h))
      throw new Error("Constructor must be called with the new operator");
    if (!(P == null || m(P) || bt(P)))
      throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
    if (this.fixPrefix = !1, this.skipAutomaticSimplification = !0, H === void 0)
      this.units = [], this.dimensions = L.map((k) => 0);
    else if (typeof H == "string") {
      var te = h.parse(H);
      this.units = te.units, this.dimensions = te.dimensions;
    } else if (Yr(H) && H.value === null)
      this.fixPrefix = H.fixPrefix, this.skipAutomaticSimplification = H.skipAutomaticSimplification, this.dimensions = H.dimensions.slice(0), this.units = H.units.map((k) => pr({}, k));
    else
      throw new TypeError("Second parameter in Unit constructor must be a string or valueless Unit");
    this.value = this._normalize(P);
  }
  Object.defineProperty(h, "name", {
    value: "Unit"
  }), h.prototype.constructor = h, h.prototype.type = "Unit", h.prototype.isUnit = !0;
  var b, w, y;
  function A() {
    for (; y === " " || y === "	"; )
      E();
  }
  function S(P) {
    return P >= "0" && P <= "9" || P === ".";
  }
  function D(P) {
    return P >= "0" && P <= "9";
  }
  function E() {
    w++, y = b.charAt(w);
  }
  function C(P) {
    w = P, y = b.charAt(w);
  }
  function F() {
    var P = "", H = w;
    if (y === "+" ? E() : y === "-" && (P += y, E()), !S(y))
      return C(H), null;
    if (y === ".") {
      if (P += y, E(), !D(y))
        return C(H), null;
    } else {
      for (; D(y); )
        P += y, E();
      y === "." && (P += y, E());
    }
    for (; D(y); )
      P += y, E();
    if (y === "E" || y === "e") {
      var te = "", k = w;
      if (te += y, E(), (y === "+" || y === "-") && (te += y, E()), !D(y))
        return C(k), P;
      for (P = P + te; D(y); )
        P += y, E();
    }
    return P;
  }
  function _() {
    for (var P = ""; D(y) || h.isValidAlpha(y); )
      P += y, E();
    var H = P.charAt(0);
    return h.isValidAlpha(H) ? P : null;
  }
  function I(P) {
    return y === P ? (E(), P) : null;
  }
  h.parse = function(P, H) {
    if (H = H || {}, b = P, w = -1, y = "", typeof b != "string")
      throw new TypeError("Invalid argument in Unit.parse, string expected");
    var te = new h();
    te.units = [];
    var k = 1, Y = !1;
    E(), A();
    var W = F(), me = null;
    if (W) {
      if (i.number === "BigNumber")
        me = new x(W);
      else if (i.number === "Fraction")
        try {
          me = new g(W);
        } catch {
          me = parseFloat(W);
        }
      else
        me = parseFloat(W);
      A(), I("*") ? (k = 1, Y = !0) : I("/") && (k = -1, Y = !0);
    }
    for (var fe = [], R = 1; ; ) {
      for (A(); y === "("; )
        fe.push(k), R *= k, k = 1, E(), A();
      var U = void 0;
      if (y) {
        var J = y;
        if (U = _(), U === null)
          throw new SyntaxError('Unexpected "' + J + '" in "' + b + '" at index ' + w.toString());
      } else
        break;
      var ae = $(U);
      if (ae === null)
        throw new SyntaxError('Unit "' + U + '" not found.');
      var le = k * R;
      if (A(), I("^")) {
        A();
        var ue = F();
        if (ue === null)
          throw new SyntaxError('In "' + P + '", "^" must be followed by a floating-point number');
        le *= ue;
      }
      te.units.push({
        unit: ae.unit,
        prefix: ae.prefix,
        power: le
      });
      for (var ge = 0; ge < L.length; ge++)
        te.dimensions[ge] += (ae.unit.dimensions[ge] || 0) * le;
      for (A(); y === ")"; ) {
        if (fe.length === 0)
          throw new SyntaxError('Unmatched ")" in "' + b + '" at index ' + w.toString());
        R /= fe.pop(), E(), A();
      }
      if (Y = !1, I("*") ? (k = 1, Y = !0) : I("/") ? (k = -1, Y = !0) : k = 1, ae.unit.base) {
        var he = ae.unit.base.key;
        j.auto[he] = {
          unit: ae.unit,
          prefix: ae.prefix
        };
      }
    }
    if (A(), y)
      throw new SyntaxError('Could not parse: "' + P + '"');
    if (Y)
      throw new SyntaxError('Trailing characters: "' + P + '"');
    if (fe.length !== 0)
      throw new SyntaxError('Unmatched "(" in "' + b + '"');
    if (te.units.length === 0 && !H.allowNoUnits)
      throw new SyntaxError('"' + P + '" contains no units');
    return te.value = me !== void 0 ? te._normalize(me) : null, te;
  }, h.prototype.clone = function() {
    var P = new h();
    P.fixPrefix = this.fixPrefix, P.skipAutomaticSimplification = this.skipAutomaticSimplification, P.value = _e(this.value), P.dimensions = this.dimensions.slice(0), P.units = [];
    for (var H = 0; H < this.units.length; H++) {
      P.units[H] = {};
      for (var te in this.units[H])
        Ee(this.units[H], te) && (P.units[H][te] = this.units[H][te]);
    }
    return P;
  }, h.prototype.valueType = function() {
    return ar(this.value);
  }, h.prototype._isDerived = function() {
    return this.units.length === 0 ? !1 : this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15;
  }, h.prototype._normalize = function(P) {
    if (P == null || this.units.length === 0)
      return P;
    for (var H = P, te = h._getNumberConverter(ar(P)), k = 0; k < this.units.length; k++) {
      var Y = te(this.units[k].unit.value), W = te(this.units[k].prefix.value), me = te(this.units[k].power);
      H = n(H, f(n(Y, W), me));
    }
    return H;
  }, h.prototype._denormalize = function(P, H) {
    if (P == null || this.units.length === 0)
      return P;
    for (var te = P, k = h._getNumberConverter(ar(P)), Y = 0; Y < this.units.length; Y++) {
      var W = k(this.units[Y].unit.value), me = k(this.units[Y].prefix.value), fe = k(this.units[Y].power);
      te = o(te, f(n(W, me), fe));
    }
    return te;
  };
  var $ = Kn((P) => {
    if (Ee(z, P)) {
      var H = z[P], te = H.prefixes[""];
      return {
        unit: H,
        prefix: te
      };
    }
    for (var k in z)
      if (Ee(z, k) && Ad(P, k)) {
        var Y = z[k], W = P.length - k.length, me = P.substring(0, W), fe = Ee(Y.prefixes, me) ? Y.prefixes[me] : void 0;
        if (fe !== void 0)
          return {
            unit: Y,
            prefix: fe
          };
      }
    return null;
  }, {
    hasher: (P) => P[0],
    limit: 100
  });
  h.isValuelessUnit = function(P) {
    return $(P) !== null;
  }, h.prototype.hasBase = function(P) {
    if (typeof P == "string" && (P = O[P]), !P)
      return !1;
    for (var H = 0; H < L.length; H++)
      if (Math.abs((this.dimensions[H] || 0) - (P.dimensions[H] || 0)) > 1e-12)
        return !1;
    return !0;
  }, h.prototype.equalBase = function(P) {
    for (var H = 0; H < L.length; H++)
      if (Math.abs((this.dimensions[H] || 0) - (P.dimensions[H] || 0)) > 1e-12)
        return !1;
    return !0;
  }, h.prototype.equals = function(P) {
    return this.equalBase(P) && c(this.value, P.value);
  }, h.prototype.multiply = function(P) {
    for (var H = this.clone(), te = Yr(P) ? P : new h(P), k = 0; k < L.length; k++)
      H.dimensions[k] = (this.dimensions[k] || 0) + (te.dimensions[k] || 0);
    for (var Y = 0; Y < te.units.length; Y++) {
      var W = Ei({}, te.units[Y]);
      H.units.push(W);
    }
    if (this.value !== null || te.value !== null) {
      var me = this.value === null ? this._normalize(1) : this.value, fe = te.value === null ? te._normalize(1) : te.value;
      H.value = n(me, fe);
    } else
      H.value = null;
    return Yr(P) && (H.skipAutomaticSimplification = !1), T(H);
  }, h.prototype.divideInto = function(P) {
    return new h(P).divide(this);
  }, h.prototype.divide = function(P) {
    for (var H = this.clone(), te = Yr(P) ? P : new h(P), k = 0; k < L.length; k++)
      H.dimensions[k] = (this.dimensions[k] || 0) - (te.dimensions[k] || 0);
    for (var Y = 0; Y < te.units.length; Y++) {
      var W = Ei(Ei({}, te.units[Y]), {}, {
        power: -te.units[Y].power
      });
      H.units.push(W);
    }
    if (this.value !== null || te.value !== null) {
      var me = this.value === null ? this._normalize(1) : this.value, fe = te.value === null ? te._normalize(1) : te.value;
      H.value = o(me, fe);
    } else
      H.value = null;
    return Yr(P) && (H.skipAutomaticSimplification = !1), T(H);
  }, h.prototype.pow = function(P) {
    for (var H = this.clone(), te = 0; te < L.length; te++)
      H.dimensions[te] = (this.dimensions[te] || 0) * P;
    for (var k = 0; k < H.units.length; k++)
      H.units[k].power *= P;
    return H.value !== null ? H.value = f(H.value, P) : H.value = null, H.skipAutomaticSimplification = !1, T(H);
  };
  function T(P) {
    return P.equalBase(O.NONE) && P.value !== null && !i.predictable ? P.value : P;
  }
  h.prototype.abs = function() {
    var P = this.clone();
    if (P.value !== null)
      if (P._isDerived() || P.units.length === 0 || P.units[0].unit.offset === 0)
        P.value = l(P.value);
      else {
        var H = P._numberConverter(), te = H(P.units[0].unit.value), k = H(P.units[0].unit.offset), Y = n(te, k);
        P.value = t(l(a(P.value, Y)), Y);
      }
    for (var W in P.units)
      (P.units[W].unit.name === "VA" || P.units[W].unit.name === "VAR") && (P.units[W].unit = z.W);
    return P;
  }, h.prototype.to = function(P) {
    var H = this.value === null ? this._normalize(1) : this.value, te;
    if (typeof P == "string")
      te = h.parse(P);
    else if (Yr(P))
      te = P.clone();
    else
      throw new Error("String or Unit expected as parameter");
    if (!this.equalBase(te))
      throw new Error("Units do not match ('".concat(te.toString(), "' != '").concat(this.toString(), "')"));
    if (te.value !== null)
      throw new Error("Cannot convert to a unit with a value");
    if (this.value === null || this._isDerived() || this.units.length === 0 || te.units.length === 0 || this.units[0].unit.offset === te.units[0].unit.offset)
      te.value = _e(H);
    else {
      var k = h._getNumberConverter(ar(H)), Y = this.units[0].unit.value, W = this.units[0].unit.offset, me = n(Y, W), fe = te.units[0].unit.value, R = te.units[0].unit.offset, U = n(fe, R);
      te.value = a(H, k(t(me, U)));
    }
    return te.fixPrefix = !0, te.skipAutomaticSimplification = !0, te;
  }, h.prototype.toNumber = function(P) {
    return N(this.toNumeric(P));
  }, h.prototype.toNumeric = function(P) {
    var H;
    return P ? H = this.to(P) : H = this.clone(), H._isDerived() || H.units.length === 0 ? H._denormalize(H.value) : H._denormalize(H.value, H.units[0].prefix.value);
  }, h.prototype.toString = function() {
    return this.format();
  }, h.prototype.toJSON = function() {
    return {
      mathjs: "Unit",
      value: this._denormalize(this.value),
      unit: this.formatUnits(),
      fixPrefix: this.fixPrefix
    };
  }, h.fromJSON = function(P) {
    var H = new h(P.value, P.unit);
    return H.fixPrefix = P.fixPrefix || !1, H;
  }, h.prototype.valueOf = h.prototype.toString, h.prototype.simplify = function() {
    var P = this.clone(), H = [], te;
    for (var k in re)
      if (Ee(re, k) && P.hasBase(O[k])) {
        te = k;
        break;
      }
    if (te === "NONE")
      P.units = [];
    else {
      var Y;
      if (te && Ee(re, te) && (Y = re[te]), Y)
        P.units = [{
          unit: Y.unit,
          prefix: Y.prefix,
          power: 1
        }];
      else {
        for (var W = !1, me = 0; me < L.length; me++) {
          var fe = L[me];
          Math.abs(P.dimensions[me] || 0) > 1e-12 && (Ee(re, fe) ? H.push({
            unit: re[fe].unit,
            prefix: re[fe].prefix,
            power: P.dimensions[me] || 0
          }) : W = !0);
        }
        H.length < P.units.length && !W && (P.units = H);
      }
    }
    return P;
  }, h.prototype.toSI = function() {
    for (var P = this.clone(), H = [], te = 0; te < L.length; te++) {
      var k = L[te];
      if (Math.abs(P.dimensions[te] || 0) > 1e-12)
        if (Ee(j.si, k))
          H.push({
            unit: j.si[k].unit,
            prefix: j.si[k].prefix,
            power: P.dimensions[te] || 0
          });
        else
          throw new Error("Cannot express custom unit " + k + " in SI units");
    }
    return P.units = H, P.fixPrefix = !0, P.skipAutomaticSimplification = !0, this.value !== null ? (P.value = null, this.to(P)) : P;
  }, h.prototype.formatUnits = function() {
    for (var P = "", H = "", te = 0, k = 0, Y = 0; Y < this.units.length; Y++)
      this.units[Y].power > 0 ? (te++, P += " " + this.units[Y].prefix.name + this.units[Y].unit.name, Math.abs(this.units[Y].power - 1) > 1e-15 && (P += "^" + this.units[Y].power)) : this.units[Y].power < 0 && k++;
    if (k > 0)
      for (var W = 0; W < this.units.length; W++)
        this.units[W].power < 0 && (te > 0 ? (H += " " + this.units[W].prefix.name + this.units[W].unit.name, Math.abs(this.units[W].power + 1) > 1e-15 && (H += "^" + -this.units[W].power)) : (H += " " + this.units[W].prefix.name + this.units[W].unit.name, H += "^" + this.units[W].power));
    P = P.substr(1), H = H.substr(1), te > 1 && k > 0 && (P = "(" + P + ")"), k > 1 && te > 0 && (H = "(" + H + ")");
    var me = P;
    return te > 0 && k > 0 && (me += " / "), me += H, me;
  }, h.prototype.format = function(P) {
    var H = this.skipAutomaticSimplification || this.value === null ? this.clone() : this.simplify(), te = !1;
    typeof H.value < "u" && H.value !== null && bt(H.value) && (te = Math.abs(H.value.re) < 1e-14);
    for (var k in H.units)
      Ee(H.units, k) && H.units[k].unit && (H.units[k].unit.name === "VA" && te ? H.units[k].unit = z.VAR : H.units[k].unit.name === "VAR" && !te && (H.units[k].unit = z.VA));
    H.units.length === 1 && !H.fixPrefix && Math.abs(H.units[0].power - Math.round(H.units[0].power)) < 1e-14 && (H.units[0].prefix = H._bestPrefix());
    var Y = H._denormalize(H.value), W = H.value !== null ? v(Y, P || {}) : "", me = H.formatUnits();
    return H.value && bt(H.value) && (W = "(" + W + ")"), me.length > 0 && W.length > 0 && (W += " "), W += me, W;
  }, h.prototype._bestPrefix = function() {
    if (this.units.length !== 1)
      throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
    if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14)
      throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
    var P = this.value !== null ? l(this.value) : 0, H = l(this.units[0].unit.value), te = this.units[0].prefix;
    if (P === 0)
      return te;
    var k = this.units[0].power, Y = Math.log(P / Math.pow(te.value * H, k)) / Math.LN10 - 1.2;
    if (Y > -2.200001 && Y < 1.800001)
      return te;
    Y = Math.abs(Y);
    var W = this.units[0].unit.prefixes;
    for (var me in W)
      if (Ee(W, me)) {
        var fe = W[me];
        if (fe.scientific) {
          var R = Math.abs(Math.log(P / Math.pow(fe.value * H, k)) / Math.LN10 - 1.2);
          (R < Y || R === Y && fe.name.length < te.name.length) && (te = fe, Y = R);
        }
      }
    return te;
  }, h.prototype.splitUnit = function(P) {
    for (var H = this.clone(), te = [], k = 0; k < P.length && (H = H.to(P[k]), k !== P.length - 1); k++) {
      var Y = H.toNumeric(), W = s(Y), me = void 0, fe = c(W, Y);
      fe ? me = W : me = u(H.toNumeric());
      var R = new h(me, P[k].toString());
      te.push(R), H = t(H, R);
    }
    for (var U = 0, J = 0; J < te.length; J++)
      U = a(U, te[J].value);
    return c(U, this.value) && (H.value = 0), te.push(H), te;
  };
  var B = {
    NONE: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      }
    },
    SHORT: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      da: {
        name: "da",
        value: 10,
        scientific: !1
      },
      h: {
        name: "h",
        value: 100,
        scientific: !1
      },
      k: {
        name: "k",
        value: 1e3,
        scientific: !0
      },
      M: {
        name: "M",
        value: 1e6,
        scientific: !0
      },
      G: {
        name: "G",
        value: 1e9,
        scientific: !0
      },
      T: {
        name: "T",
        value: 1e12,
        scientific: !0
      },
      P: {
        name: "P",
        value: 1e15,
        scientific: !0
      },
      E: {
        name: "E",
        value: 1e18,
        scientific: !0
      },
      Z: {
        name: "Z",
        value: 1e21,
        scientific: !0
      },
      Y: {
        name: "Y",
        value: 1e24,
        scientific: !0
      },
      R: {
        name: "R",
        value: 1e27,
        scientific: !0
      },
      Q: {
        name: "Q",
        value: 1e30,
        scientific: !0
      },
      d: {
        name: "d",
        value: 0.1,
        scientific: !1
      },
      c: {
        name: "c",
        value: 0.01,
        scientific: !1
      },
      m: {
        name: "m",
        value: 1e-3,
        scientific: !0
      },
      u: {
        name: "u",
        value: 1e-6,
        scientific: !0
      },
      n: {
        name: "n",
        value: 1e-9,
        scientific: !0
      },
      p: {
        name: "p",
        value: 1e-12,
        scientific: !0
      },
      f: {
        name: "f",
        value: 1e-15,
        scientific: !0
      },
      a: {
        name: "a",
        value: 1e-18,
        scientific: !0
      },
      z: {
        name: "z",
        value: 1e-21,
        scientific: !0
      },
      y: {
        name: "y",
        value: 1e-24,
        scientific: !0
      },
      r: {
        name: "r",
        value: 1e-27,
        scientific: !0
      },
      q: {
        name: "q",
        value: 1e-30,
        scientific: !0
      }
    },
    LONG: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      deca: {
        name: "deca",
        value: 10,
        scientific: !1
      },
      hecto: {
        name: "hecto",
        value: 100,
        scientific: !1
      },
      kilo: {
        name: "kilo",
        value: 1e3,
        scientific: !0
      },
      mega: {
        name: "mega",
        value: 1e6,
        scientific: !0
      },
      giga: {
        name: "giga",
        value: 1e9,
        scientific: !0
      },
      tera: {
        name: "tera",
        value: 1e12,
        scientific: !0
      },
      peta: {
        name: "peta",
        value: 1e15,
        scientific: !0
      },
      exa: {
        name: "exa",
        value: 1e18,
        scientific: !0
      },
      zetta: {
        name: "zetta",
        value: 1e21,
        scientific: !0
      },
      yotta: {
        name: "yotta",
        value: 1e24,
        scientific: !0
      },
      ronna: {
        name: "ronna",
        value: 1e27,
        scientific: !0
      },
      quetta: {
        name: "quetta",
        value: 1e30,
        scientific: !0
      },
      deci: {
        name: "deci",
        value: 0.1,
        scientific: !1
      },
      centi: {
        name: "centi",
        value: 0.01,
        scientific: !1
      },
      milli: {
        name: "milli",
        value: 1e-3,
        scientific: !0
      },
      micro: {
        name: "micro",
        value: 1e-6,
        scientific: !0
      },
      nano: {
        name: "nano",
        value: 1e-9,
        scientific: !0
      },
      pico: {
        name: "pico",
        value: 1e-12,
        scientific: !0
      },
      femto: {
        name: "femto",
        value: 1e-15,
        scientific: !0
      },
      atto: {
        name: "atto",
        value: 1e-18,
        scientific: !0
      },
      zepto: {
        name: "zepto",
        value: 1e-21,
        scientific: !0
      },
      yocto: {
        name: "yocto",
        value: 1e-24,
        scientific: !0
      },
      ronto: {
        name: "ronto",
        value: 1e-27,
        scientific: !0
      },
      quecto: {
        name: "quecto",
        value: 1e-30,
        scientific: !0
      }
    },
    SQUARED: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      da: {
        name: "da",
        value: 100,
        scientific: !1
      },
      h: {
        name: "h",
        value: 1e4,
        scientific: !1
      },
      k: {
        name: "k",
        value: 1e6,
        scientific: !0
      },
      M: {
        name: "M",
        value: 1e12,
        scientific: !0
      },
      G: {
        name: "G",
        value: 1e18,
        scientific: !0
      },
      T: {
        name: "T",
        value: 1e24,
        scientific: !0
      },
      P: {
        name: "P",
        value: 1e30,
        scientific: !0
      },
      E: {
        name: "E",
        value: 1e36,
        scientific: !0
      },
      Z: {
        name: "Z",
        value: 1e42,
        scientific: !0
      },
      Y: {
        name: "Y",
        value: 1e48,
        scientific: !0
      },
      R: {
        name: "R",
        value: 1e54,
        scientific: !0
      },
      Q: {
        name: "Q",
        value: 1e60,
        scientific: !0
      },
      d: {
        name: "d",
        value: 0.01,
        scientific: !1
      },
      c: {
        name: "c",
        value: 1e-4,
        scientific: !1
      },
      m: {
        name: "m",
        value: 1e-6,
        scientific: !0
      },
      u: {
        name: "u",
        value: 1e-12,
        scientific: !0
      },
      n: {
        name: "n",
        value: 1e-18,
        scientific: !0
      },
      p: {
        name: "p",
        value: 1e-24,
        scientific: !0
      },
      f: {
        name: "f",
        value: 1e-30,
        scientific: !0
      },
      a: {
        name: "a",
        value: 1e-36,
        scientific: !0
      },
      z: {
        name: "z",
        value: 1e-42,
        scientific: !0
      },
      y: {
        name: "y",
        value: 1e-48,
        scientific: !0
      },
      r: {
        name: "r",
        value: 1e-54,
        scientific: !0
      },
      q: {
        name: "q",
        value: 1e-60,
        scientific: !0
      }
    },
    CUBIC: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      da: {
        name: "da",
        value: 1e3,
        scientific: !1
      },
      h: {
        name: "h",
        value: 1e6,
        scientific: !1
      },
      k: {
        name: "k",
        value: 1e9,
        scientific: !0
      },
      M: {
        name: "M",
        value: 1e18,
        scientific: !0
      },
      G: {
        name: "G",
        value: 1e27,
        scientific: !0
      },
      T: {
        name: "T",
        value: 1e36,
        scientific: !0
      },
      P: {
        name: "P",
        value: 1e45,
        scientific: !0
      },
      E: {
        name: "E",
        value: 1e54,
        scientific: !0
      },
      Z: {
        name: "Z",
        value: 1e63,
        scientific: !0
      },
      Y: {
        name: "Y",
        value: 1e72,
        scientific: !0
      },
      R: {
        name: "R",
        value: 1e81,
        scientific: !0
      },
      Q: {
        name: "Q",
        value: 1e90,
        scientific: !0
      },
      d: {
        name: "d",
        value: 1e-3,
        scientific: !1
      },
      c: {
        name: "c",
        value: 1e-6,
        scientific: !1
      },
      m: {
        name: "m",
        value: 1e-9,
        scientific: !0
      },
      u: {
        name: "u",
        value: 1e-18,
        scientific: !0
      },
      n: {
        name: "n",
        value: 1e-27,
        scientific: !0
      },
      p: {
        name: "p",
        value: 1e-36,
        scientific: !0
      },
      f: {
        name: "f",
        value: 1e-45,
        scientific: !0
      },
      a: {
        name: "a",
        value: 1e-54,
        scientific: !0
      },
      z: {
        name: "z",
        value: 1e-63,
        scientific: !0
      },
      y: {
        name: "y",
        value: 1e-72,
        scientific: !0
      },
      r: {
        name: "r",
        value: 1e-81,
        scientific: !0
      },
      q: {
        name: "q",
        value: 1e-90,
        scientific: !0
      }
    },
    BINARY_SHORT_SI: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      k: {
        name: "k",
        value: 1e3,
        scientific: !0
      },
      M: {
        name: "M",
        value: 1e6,
        scientific: !0
      },
      G: {
        name: "G",
        value: 1e9,
        scientific: !0
      },
      T: {
        name: "T",
        value: 1e12,
        scientific: !0
      },
      P: {
        name: "P",
        value: 1e15,
        scientific: !0
      },
      E: {
        name: "E",
        value: 1e18,
        scientific: !0
      },
      Z: {
        name: "Z",
        value: 1e21,
        scientific: !0
      },
      Y: {
        name: "Y",
        value: 1e24,
        scientific: !0
      }
    },
    BINARY_SHORT_IEC: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      Ki: {
        name: "Ki",
        value: 1024,
        scientific: !0
      },
      Mi: {
        name: "Mi",
        value: Math.pow(1024, 2),
        scientific: !0
      },
      Gi: {
        name: "Gi",
        value: Math.pow(1024, 3),
        scientific: !0
      },
      Ti: {
        name: "Ti",
        value: Math.pow(1024, 4),
        scientific: !0
      },
      Pi: {
        name: "Pi",
        value: Math.pow(1024, 5),
        scientific: !0
      },
      Ei: {
        name: "Ei",
        value: Math.pow(1024, 6),
        scientific: !0
      },
      Zi: {
        name: "Zi",
        value: Math.pow(1024, 7),
        scientific: !0
      },
      Yi: {
        name: "Yi",
        value: Math.pow(1024, 8),
        scientific: !0
      }
    },
    BINARY_LONG_SI: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      kilo: {
        name: "kilo",
        value: 1e3,
        scientific: !0
      },
      mega: {
        name: "mega",
        value: 1e6,
        scientific: !0
      },
      giga: {
        name: "giga",
        value: 1e9,
        scientific: !0
      },
      tera: {
        name: "tera",
        value: 1e12,
        scientific: !0
      },
      peta: {
        name: "peta",
        value: 1e15,
        scientific: !0
      },
      exa: {
        name: "exa",
        value: 1e18,
        scientific: !0
      },
      zetta: {
        name: "zetta",
        value: 1e21,
        scientific: !0
      },
      yotta: {
        name: "yotta",
        value: 1e24,
        scientific: !0
      }
    },
    BINARY_LONG_IEC: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      kibi: {
        name: "kibi",
        value: 1024,
        scientific: !0
      },
      mebi: {
        name: "mebi",
        value: Math.pow(1024, 2),
        scientific: !0
      },
      gibi: {
        name: "gibi",
        value: Math.pow(1024, 3),
        scientific: !0
      },
      tebi: {
        name: "tebi",
        value: Math.pow(1024, 4),
        scientific: !0
      },
      pebi: {
        name: "pebi",
        value: Math.pow(1024, 5),
        scientific: !0
      },
      exi: {
        name: "exi",
        value: Math.pow(1024, 6),
        scientific: !0
      },
      zebi: {
        name: "zebi",
        value: Math.pow(1024, 7),
        scientific: !0
      },
      yobi: {
        name: "yobi",
        value: Math.pow(1024, 8),
        scientific: !0
      }
    },
    BTU: {
      "": {
        name: "",
        value: 1,
        scientific: !0
      },
      MM: {
        name: "MM",
        value: 1e6,
        scientific: !0
      }
    }
  };
  B.SHORTLONG = pr({}, B.SHORT, B.LONG), B.BINARY_SHORT = pr({}, B.BINARY_SHORT_SI, B.BINARY_SHORT_IEC), B.BINARY_LONG = pr({}, B.BINARY_LONG_SI, B.BINARY_LONG_IEC);
  var L = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"], O = {
    NONE: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    MASS: {
      dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    LENGTH: {
      dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    TIME: {
      dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
    },
    CURRENT: {
      dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
    },
    TEMPERATURE: {
      dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
    },
    LUMINOUS_INTENSITY: {
      dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
    },
    AMOUNT_OF_SUBSTANCE: {
      dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
    },
    FORCE: {
      dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
    },
    SURFACE: {
      dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
    },
    VOLUME: {
      dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
    },
    ENERGY: {
      dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
    },
    POWER: {
      dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
    },
    PRESSURE: {
      dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CHARGE: {
      dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CAPACITANCE: {
      dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_POTENTIAL: {
      dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
    },
    ELECTRIC_RESISTANCE: {
      dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_INDUCTANCE: {
      dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CONDUCTANCE: {
      dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX: {
      dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX_DENSITY: {
      dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
    },
    FREQUENCY: {
      dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
    },
    ANGLE: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
    },
    BIT: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
    }
  };
  for (var X in O)
    Ee(O, X) && (O[X].key = X);
  var K = {}, V = {
    name: "",
    base: K,
    value: 1,
    offset: 0,
    dimensions: L.map((P) => 0)
  }, z = {
    // length
    meter: {
      name: "meter",
      base: O.LENGTH,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    inch: {
      name: "inch",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.0254,
      offset: 0
    },
    foot: {
      name: "foot",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.3048,
      offset: 0
    },
    yard: {
      name: "yard",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.9144,
      offset: 0
    },
    mile: {
      name: "mile",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 1609.344,
      offset: 0
    },
    link: {
      name: "link",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.201168,
      offset: 0
    },
    rod: {
      name: "rod",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 5.0292,
      offset: 0
    },
    chain: {
      name: "chain",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 20.1168,
      offset: 0
    },
    angstrom: {
      name: "angstrom",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 1e-10,
      offset: 0
    },
    m: {
      name: "m",
      base: O.LENGTH,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    in: {
      name: "in",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.0254,
      offset: 0
    },
    ft: {
      name: "ft",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.3048,
      offset: 0
    },
    yd: {
      name: "yd",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.9144,
      offset: 0
    },
    mi: {
      name: "mi",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 1609.344,
      offset: 0
    },
    li: {
      name: "li",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 0.201168,
      offset: 0
    },
    rd: {
      name: "rd",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 5.02921,
      offset: 0
    },
    ch: {
      name: "ch",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 20.1168,
      offset: 0
    },
    mil: {
      name: "mil",
      base: O.LENGTH,
      prefixes: B.NONE,
      value: 254e-7,
      offset: 0
    },
    // 1/1000 inch
    // Surface
    m2: {
      name: "m2",
      base: O.SURFACE,
      prefixes: B.SQUARED,
      value: 1,
      offset: 0
    },
    sqin: {
      name: "sqin",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 64516e-8,
      offset: 0
    },
    // 645.16 mm2
    sqft: {
      name: "sqft",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 0.09290304,
      offset: 0
    },
    // 0.09290304 m2
    sqyd: {
      name: "sqyd",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 0.83612736,
      offset: 0
    },
    // 0.83612736 m2
    sqmi: {
      name: "sqmi",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 2589988110336e-6,
      offset: 0
    },
    // 2.589988110336 km2
    sqrd: {
      name: "sqrd",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 25.29295,
      offset: 0
    },
    // 25.29295 m2
    sqch: {
      name: "sqch",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 404.6873,
      offset: 0
    },
    // 404.6873 m2
    sqmil: {
      name: "sqmil",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 64516e-14,
      offset: 0
    },
    // 6.4516 * 10^-10 m2
    acre: {
      name: "acre",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 4046.86,
      offset: 0
    },
    // 4046.86 m2
    hectare: {
      name: "hectare",
      base: O.SURFACE,
      prefixes: B.NONE,
      value: 1e4,
      offset: 0
    },
    // 10000 m2
    // Volume
    m3: {
      name: "m3",
      base: O.VOLUME,
      prefixes: B.CUBIC,
      value: 1,
      offset: 0
    },
    L: {
      name: "L",
      base: O.VOLUME,
      prefixes: B.SHORT,
      value: 1e-3,
      offset: 0
    },
    // litre
    l: {
      name: "l",
      base: O.VOLUME,
      prefixes: B.SHORT,
      value: 1e-3,
      offset: 0
    },
    // litre
    litre: {
      name: "litre",
      base: O.VOLUME,
      prefixes: B.LONG,
      value: 1e-3,
      offset: 0
    },
    cuin: {
      name: "cuin",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 16387064e-12,
      offset: 0
    },
    // 1.6387064e-5 m3
    cuft: {
      name: "cuft",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.028316846592,
      offset: 0
    },
    // 28.316 846 592 L
    cuyd: {
      name: "cuyd",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.764554857984,
      offset: 0
    },
    // 764.554 857 984 L
    teaspoon: {
      name: "teaspoon",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 5e-6,
      offset: 0
    },
    // 5 mL
    tablespoon: {
      name: "tablespoon",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 15e-6,
      offset: 0
    },
    // 15 mL
    // {name: 'cup', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.000240, offset: 0}, // 240 mL  // not possible, we have already another cup
    drop: {
      name: "drop",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 5e-8,
      offset: 0
    },
    // 0.05 mL = 5e-8 m3
    gtt: {
      name: "gtt",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 5e-8,
      offset: 0
    },
    // 0.05 mL = 5e-8 m3
    // Liquid volume
    minim: {
      name: "minim",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 6161152e-14,
      offset: 0
    },
    // 0.06161152 mL
    fluiddram: {
      name: "fluiddram",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 36966911e-13,
      offset: 0
    },
    // 3.696691 mL
    fluidounce: {
      name: "fluidounce",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 2957353e-11,
      offset: 0
    },
    // 29.57353 mL
    gill: {
      name: "gill",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 1182941e-10,
      offset: 0
    },
    // 118.2941 mL
    cc: {
      name: "cc",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 1e-6,
      offset: 0
    },
    // 1e-6 L
    cup: {
      name: "cup",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 2365882e-10,
      offset: 0
    },
    // 236.5882 mL
    pint: {
      name: "pint",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 4731765e-10,
      offset: 0
    },
    // 473.1765 mL
    quart: {
      name: "quart",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 9463529e-10,
      offset: 0
    },
    // 946.3529 mL
    gallon: {
      name: "gallon",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 3785412e-9,
      offset: 0
    },
    // 3.785412 L
    beerbarrel: {
      name: "beerbarrel",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.1173478,
      offset: 0
    },
    // 117.3478 L
    oilbarrel: {
      name: "oilbarrel",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.1589873,
      offset: 0
    },
    // 158.9873 L
    hogshead: {
      name: "hogshead",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.238481,
      offset: 0
    },
    // 238.4810 L
    // {name: 'min', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.00000006161152, offset: 0}, // 0.06161152 mL // min is already in use as minute
    fldr: {
      name: "fldr",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 36966911e-13,
      offset: 0
    },
    // 3.696691 mL
    floz: {
      name: "floz",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 2957353e-11,
      offset: 0
    },
    // 29.57353 mL
    gi: {
      name: "gi",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 1182941e-10,
      offset: 0
    },
    // 118.2941 mL
    cp: {
      name: "cp",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 2365882e-10,
      offset: 0
    },
    // 236.5882 mL
    pt: {
      name: "pt",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 4731765e-10,
      offset: 0
    },
    // 473.1765 mL
    qt: {
      name: "qt",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 9463529e-10,
      offset: 0
    },
    // 946.3529 mL
    gal: {
      name: "gal",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 3785412e-9,
      offset: 0
    },
    // 3.785412 L
    bbl: {
      name: "bbl",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.1173478,
      offset: 0
    },
    // 117.3478 L
    obl: {
      name: "obl",
      base: O.VOLUME,
      prefixes: B.NONE,
      value: 0.1589873,
      offset: 0
    },
    // 158.9873 L
    // {name: 'hogshead', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.2384810, offset: 0}, // 238.4810 L // TODO: hh?
    // Mass
    g: {
      name: "g",
      base: O.MASS,
      prefixes: B.SHORT,
      value: 1e-3,
      offset: 0
    },
    gram: {
      name: "gram",
      base: O.MASS,
      prefixes: B.LONG,
      value: 1e-3,
      offset: 0
    },
    ton: {
      name: "ton",
      base: O.MASS,
      prefixes: B.SHORT,
      value: 907.18474,
      offset: 0
    },
    t: {
      name: "t",
      base: O.MASS,
      prefixes: B.SHORT,
      value: 1e3,
      offset: 0
    },
    tonne: {
      name: "tonne",
      base: O.MASS,
      prefixes: B.LONG,
      value: 1e3,
      offset: 0
    },
    grain: {
      name: "grain",
      base: O.MASS,
      prefixes: B.NONE,
      value: 6479891e-11,
      offset: 0
    },
    dram: {
      name: "dram",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.0017718451953125,
      offset: 0
    },
    ounce: {
      name: "ounce",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.028349523125,
      offset: 0
    },
    poundmass: {
      name: "poundmass",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.45359237,
      offset: 0
    },
    hundredweight: {
      name: "hundredweight",
      base: O.MASS,
      prefixes: B.NONE,
      value: 45.359237,
      offset: 0
    },
    stick: {
      name: "stick",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.115,
      offset: 0
    },
    stone: {
      name: "stone",
      base: O.MASS,
      prefixes: B.NONE,
      value: 6.35029318,
      offset: 0
    },
    gr: {
      name: "gr",
      base: O.MASS,
      prefixes: B.NONE,
      value: 6479891e-11,
      offset: 0
    },
    dr: {
      name: "dr",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.0017718451953125,
      offset: 0
    },
    oz: {
      name: "oz",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.028349523125,
      offset: 0
    },
    lbm: {
      name: "lbm",
      base: O.MASS,
      prefixes: B.NONE,
      value: 0.45359237,
      offset: 0
    },
    cwt: {
      name: "cwt",
      base: O.MASS,
      prefixes: B.NONE,
      value: 45.359237,
      offset: 0
    },
    // Time
    s: {
      name: "s",
      base: O.TIME,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    min: {
      name: "min",
      base: O.TIME,
      prefixes: B.NONE,
      value: 60,
      offset: 0
    },
    h: {
      name: "h",
      base: O.TIME,
      prefixes: B.NONE,
      value: 3600,
      offset: 0
    },
    second: {
      name: "second",
      base: O.TIME,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    sec: {
      name: "sec",
      base: O.TIME,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    minute: {
      name: "minute",
      base: O.TIME,
      prefixes: B.NONE,
      value: 60,
      offset: 0
    },
    hour: {
      name: "hour",
      base: O.TIME,
      prefixes: B.NONE,
      value: 3600,
      offset: 0
    },
    day: {
      name: "day",
      base: O.TIME,
      prefixes: B.NONE,
      value: 86400,
      offset: 0
    },
    week: {
      name: "week",
      base: O.TIME,
      prefixes: B.NONE,
      value: 7 * 86400,
      offset: 0
    },
    month: {
      name: "month",
      base: O.TIME,
      prefixes: B.NONE,
      value: 2629800,
      // 1/12th of Julian year
      offset: 0
    },
    year: {
      name: "year",
      base: O.TIME,
      prefixes: B.NONE,
      value: 31557600,
      // Julian year
      offset: 0
    },
    decade: {
      name: "decade",
      base: O.TIME,
      prefixes: B.NONE,
      value: 315576e3,
      // Julian decade
      offset: 0
    },
    century: {
      name: "century",
      base: O.TIME,
      prefixes: B.NONE,
      value: 315576e4,
      // Julian century
      offset: 0
    },
    millennium: {
      name: "millennium",
      base: O.TIME,
      prefixes: B.NONE,
      value: 315576e5,
      // Julian millennium
      offset: 0
    },
    // Frequency
    hertz: {
      name: "Hertz",
      base: O.FREQUENCY,
      prefixes: B.LONG,
      value: 1,
      offset: 0,
      reciprocal: !0
    },
    Hz: {
      name: "Hz",
      base: O.FREQUENCY,
      prefixes: B.SHORT,
      value: 1,
      offset: 0,
      reciprocal: !0
    },
    // Angle
    rad: {
      name: "rad",
      base: O.ANGLE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    radian: {
      name: "radian",
      base: O.ANGLE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    // deg = rad / (2*pi) * 360 = rad / 0.017453292519943295769236907684888
    deg: {
      name: "deg",
      base: O.ANGLE,
      prefixes: B.SHORT,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    degree: {
      name: "degree",
      base: O.ANGLE,
      prefixes: B.LONG,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    // grad = rad / (2*pi) * 400  = rad / 0.015707963267948966192313216916399
    grad: {
      name: "grad",
      base: O.ANGLE,
      prefixes: B.SHORT,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    gradian: {
      name: "gradian",
      base: O.ANGLE,
      prefixes: B.LONG,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    // cycle = rad / (2*pi) = rad / 6.2831853071795864769252867665793
    cycle: {
      name: "cycle",
      base: O.ANGLE,
      prefixes: B.NONE,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    // arcsec = rad / (3600 * (360 / 2 * pi)) = rad / 0.0000048481368110953599358991410235795
    arcsec: {
      name: "arcsec",
      base: O.ANGLE,
      prefixes: B.NONE,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    // arcmin = rad / (60 * (360 / 2 * pi)) = rad / 0.00029088820866572159615394846141477
    arcmin: {
      name: "arcmin",
      base: O.ANGLE,
      prefixes: B.NONE,
      value: null,
      // will be filled in by calculateAngleValues()
      offset: 0
    },
    // Electric current
    A: {
      name: "A",
      base: O.CURRENT,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    ampere: {
      name: "ampere",
      base: O.CURRENT,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    // Temperature
    // K(C) = °C + 273.15
    // K(F) = (°F + 459.67) * (5 / 9)
    // K(R) = °R * (5 / 9)
    K: {
      name: "K",
      base: O.TEMPERATURE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    degC: {
      name: "degC",
      base: O.TEMPERATURE,
      prefixes: B.SHORT,
      value: 1,
      offset: 273.15
    },
    degF: {
      name: "degF",
      base: O.TEMPERATURE,
      prefixes: B.SHORT,
      value: new g(5, 9),
      offset: 459.67
    },
    degR: {
      name: "degR",
      base: O.TEMPERATURE,
      prefixes: B.SHORT,
      value: new g(5, 9),
      offset: 0
    },
    kelvin: {
      name: "kelvin",
      base: O.TEMPERATURE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    celsius: {
      name: "celsius",
      base: O.TEMPERATURE,
      prefixes: B.LONG,
      value: 1,
      offset: 273.15
    },
    fahrenheit: {
      name: "fahrenheit",
      base: O.TEMPERATURE,
      prefixes: B.LONG,
      value: new g(5, 9),
      offset: 459.67
    },
    rankine: {
      name: "rankine",
      base: O.TEMPERATURE,
      prefixes: B.LONG,
      value: new g(5, 9),
      offset: 0
    },
    // amount of substance
    mol: {
      name: "mol",
      base: O.AMOUNT_OF_SUBSTANCE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    mole: {
      name: "mole",
      base: O.AMOUNT_OF_SUBSTANCE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    // luminous intensity
    cd: {
      name: "cd",
      base: O.LUMINOUS_INTENSITY,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    candela: {
      name: "candela",
      base: O.LUMINOUS_INTENSITY,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    // TODO: units STERADIAN
    // {name: 'sr', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1, offset: 0},
    // {name: 'steradian', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1, offset: 0},
    // Force
    N: {
      name: "N",
      base: O.FORCE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    newton: {
      name: "newton",
      base: O.FORCE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    dyn: {
      name: "dyn",
      base: O.FORCE,
      prefixes: B.SHORT,
      value: 1e-5,
      offset: 0
    },
    dyne: {
      name: "dyne",
      base: O.FORCE,
      prefixes: B.LONG,
      value: 1e-5,
      offset: 0
    },
    lbf: {
      name: "lbf",
      base: O.FORCE,
      prefixes: B.NONE,
      value: 4.4482216152605,
      offset: 0
    },
    poundforce: {
      name: "poundforce",
      base: O.FORCE,
      prefixes: B.NONE,
      value: 4.4482216152605,
      offset: 0
    },
    kip: {
      name: "kip",
      base: O.FORCE,
      prefixes: B.LONG,
      value: 4448.2216,
      offset: 0
    },
    kilogramforce: {
      name: "kilogramforce",
      base: O.FORCE,
      prefixes: B.NONE,
      value: 9.80665,
      offset: 0
    },
    // Energy
    J: {
      name: "J",
      base: O.ENERGY,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    joule: {
      name: "joule",
      base: O.ENERGY,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    erg: {
      name: "erg",
      base: O.ENERGY,
      prefixes: B.SHORTLONG,
      // Both kiloerg and kerg are acceptable
      value: 1e-7,
      offset: 0
    },
    Wh: {
      name: "Wh",
      base: O.ENERGY,
      prefixes: B.SHORT,
      value: 3600,
      offset: 0
    },
    BTU: {
      name: "BTU",
      base: O.ENERGY,
      prefixes: B.BTU,
      value: 1055.05585262,
      offset: 0
    },
    eV: {
      name: "eV",
      base: O.ENERGY,
      prefixes: B.SHORT,
      value: 1602176565e-28,
      offset: 0
    },
    electronvolt: {
      name: "electronvolt",
      base: O.ENERGY,
      prefixes: B.LONG,
      value: 1602176565e-28,
      offset: 0
    },
    // Power
    W: {
      name: "W",
      base: O.POWER,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    watt: {
      name: "watt",
      base: O.POWER,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    hp: {
      name: "hp",
      base: O.POWER,
      prefixes: B.NONE,
      value: 745.6998715386,
      offset: 0
    },
    // Electrical power units
    VAR: {
      name: "VAR",
      base: O.POWER,
      prefixes: B.SHORT,
      value: p.I,
      offset: 0
    },
    VA: {
      name: "VA",
      base: O.POWER,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Pressure
    Pa: {
      name: "Pa",
      base: O.PRESSURE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    psi: {
      name: "psi",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 6894.75729276459,
      offset: 0
    },
    atm: {
      name: "atm",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 101325,
      offset: 0
    },
    bar: {
      name: "bar",
      base: O.PRESSURE,
      prefixes: B.SHORTLONG,
      value: 1e5,
      offset: 0
    },
    torr: {
      name: "torr",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 133.322,
      offset: 0
    },
    mmHg: {
      name: "mmHg",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 133.322,
      offset: 0
    },
    mmH2O: {
      name: "mmH2O",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 9.80665,
      offset: 0
    },
    cmH2O: {
      name: "cmH2O",
      base: O.PRESSURE,
      prefixes: B.NONE,
      value: 98.0665,
      offset: 0
    },
    // Electric charge
    coulomb: {
      name: "coulomb",
      base: O.ELECTRIC_CHARGE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    C: {
      name: "C",
      base: O.ELECTRIC_CHARGE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Electric capacitance
    farad: {
      name: "farad",
      base: O.ELECTRIC_CAPACITANCE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    F: {
      name: "F",
      base: O.ELECTRIC_CAPACITANCE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Electric potential
    volt: {
      name: "volt",
      base: O.ELECTRIC_POTENTIAL,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    V: {
      name: "V",
      base: O.ELECTRIC_POTENTIAL,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Electric resistance
    ohm: {
      name: "ohm",
      base: O.ELECTRIC_RESISTANCE,
      prefixes: B.SHORTLONG,
      // Both Mohm and megaohm are acceptable
      value: 1,
      offset: 0
    },
    /*
     * Unicode breaks in browsers if charset is not specified
    Ω: {
      name: 'Ω',
      base: BASE_UNITS.ELECTRIC_RESISTANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    */
    // Electric inductance
    henry: {
      name: "henry",
      base: O.ELECTRIC_INDUCTANCE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    H: {
      name: "H",
      base: O.ELECTRIC_INDUCTANCE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Electric conductance
    siemens: {
      name: "siemens",
      base: O.ELECTRIC_CONDUCTANCE,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    S: {
      name: "S",
      base: O.ELECTRIC_CONDUCTANCE,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Magnetic flux
    weber: {
      name: "weber",
      base: O.MAGNETIC_FLUX,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    Wb: {
      name: "Wb",
      base: O.MAGNETIC_FLUX,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Magnetic flux density
    tesla: {
      name: "tesla",
      base: O.MAGNETIC_FLUX_DENSITY,
      prefixes: B.LONG,
      value: 1,
      offset: 0
    },
    T: {
      name: "T",
      base: O.MAGNETIC_FLUX_DENSITY,
      prefixes: B.SHORT,
      value: 1,
      offset: 0
    },
    // Binary
    b: {
      name: "b",
      base: O.BIT,
      prefixes: B.BINARY_SHORT,
      value: 1,
      offset: 0
    },
    bits: {
      name: "bits",
      base: O.BIT,
      prefixes: B.BINARY_LONG,
      value: 1,
      offset: 0
    },
    B: {
      name: "B",
      base: O.BIT,
      prefixes: B.BINARY_SHORT,
      value: 8,
      offset: 0
    },
    bytes: {
      name: "bytes",
      base: O.BIT,
      prefixes: B.BINARY_LONG,
      value: 8,
      offset: 0
    }
  }, Q = {
    meters: "meter",
    inches: "inch",
    feet: "foot",
    yards: "yard",
    miles: "mile",
    links: "link",
    rods: "rod",
    chains: "chain",
    angstroms: "angstrom",
    lt: "l",
    litres: "litre",
    liter: "litre",
    liters: "litre",
    teaspoons: "teaspoon",
    tablespoons: "tablespoon",
    minims: "minim",
    fluiddrams: "fluiddram",
    fluidounces: "fluidounce",
    gills: "gill",
    cups: "cup",
    pints: "pint",
    quarts: "quart",
    gallons: "gallon",
    beerbarrels: "beerbarrel",
    oilbarrels: "oilbarrel",
    hogsheads: "hogshead",
    gtts: "gtt",
    grams: "gram",
    tons: "ton",
    tonnes: "tonne",
    grains: "grain",
    drams: "dram",
    ounces: "ounce",
    poundmasses: "poundmass",
    hundredweights: "hundredweight",
    sticks: "stick",
    lb: "lbm",
    lbs: "lbm",
    kips: "kip",
    kgf: "kilogramforce",
    acres: "acre",
    hectares: "hectare",
    sqfeet: "sqft",
    sqyard: "sqyd",
    sqmile: "sqmi",
    sqmiles: "sqmi",
    mmhg: "mmHg",
    mmh2o: "mmH2O",
    cmh2o: "cmH2O",
    seconds: "second",
    secs: "second",
    minutes: "minute",
    mins: "minute",
    hours: "hour",
    hr: "hour",
    hrs: "hour",
    days: "day",
    weeks: "week",
    months: "month",
    years: "year",
    decades: "decade",
    centuries: "century",
    millennia: "millennium",
    hertz: "hertz",
    radians: "radian",
    degrees: "degree",
    gradians: "gradian",
    cycles: "cycle",
    arcsecond: "arcsec",
    arcseconds: "arcsec",
    arcminute: "arcmin",
    arcminutes: "arcmin",
    BTUs: "BTU",
    watts: "watt",
    joules: "joule",
    amperes: "ampere",
    amps: "ampere",
    amp: "ampere",
    coulombs: "coulomb",
    volts: "volt",
    ohms: "ohm",
    farads: "farad",
    webers: "weber",
    teslas: "tesla",
    electronvolts: "electronvolt",
    moles: "mole",
    bit: "bits",
    byte: "bytes"
  };
  function ce(P) {
    if (P.number === "BigNumber") {
      var H = ao(x);
      z.rad.value = new x(1), z.deg.value = H.div(180), z.grad.value = H.div(200), z.cycle.value = H.times(2), z.arcsec.value = H.div(648e3), z.arcmin.value = H.div(10800);
    } else
      z.rad.value = 1, z.deg.value = Math.PI / 180, z.grad.value = Math.PI / 200, z.cycle.value = Math.PI * 2, z.arcsec.value = Math.PI / 648e3, z.arcmin.value = Math.PI / 10800;
    z.radian.value = z.rad.value, z.degree.value = z.deg.value, z.gradian.value = z.grad.value;
  }
  ce(i), r && r("config", function(P, H) {
    P.number !== H.number && ce(P);
  });
  var j = {
    si: {
      // Base units
      NONE: {
        unit: V,
        prefix: B.NONE[""]
      },
      LENGTH: {
        unit: z.m,
        prefix: B.SHORT[""]
      },
      MASS: {
        unit: z.g,
        prefix: B.SHORT.k
      },
      TIME: {
        unit: z.s,
        prefix: B.SHORT[""]
      },
      CURRENT: {
        unit: z.A,
        prefix: B.SHORT[""]
      },
      TEMPERATURE: {
        unit: z.K,
        prefix: B.SHORT[""]
      },
      LUMINOUS_INTENSITY: {
        unit: z.cd,
        prefix: B.SHORT[""]
      },
      AMOUNT_OF_SUBSTANCE: {
        unit: z.mol,
        prefix: B.SHORT[""]
      },
      ANGLE: {
        unit: z.rad,
        prefix: B.SHORT[""]
      },
      BIT: {
        unit: z.bits,
        prefix: B.SHORT[""]
      },
      // Derived units
      FORCE: {
        unit: z.N,
        prefix: B.SHORT[""]
      },
      ENERGY: {
        unit: z.J,
        prefix: B.SHORT[""]
      },
      POWER: {
        unit: z.W,
        prefix: B.SHORT[""]
      },
      PRESSURE: {
        unit: z.Pa,
        prefix: B.SHORT[""]
      },
      ELECTRIC_CHARGE: {
        unit: z.C,
        prefix: B.SHORT[""]
      },
      ELECTRIC_CAPACITANCE: {
        unit: z.F,
        prefix: B.SHORT[""]
      },
      ELECTRIC_POTENTIAL: {
        unit: z.V,
        prefix: B.SHORT[""]
      },
      ELECTRIC_RESISTANCE: {
        unit: z.ohm,
        prefix: B.SHORT[""]
      },
      ELECTRIC_INDUCTANCE: {
        unit: z.H,
        prefix: B.SHORT[""]
      },
      ELECTRIC_CONDUCTANCE: {
        unit: z.S,
        prefix: B.SHORT[""]
      },
      MAGNETIC_FLUX: {
        unit: z.Wb,
        prefix: B.SHORT[""]
      },
      MAGNETIC_FLUX_DENSITY: {
        unit: z.T,
        prefix: B.SHORT[""]
      },
      FREQUENCY: {
        unit: z.Hz,
        prefix: B.SHORT[""]
      }
    }
  };
  j.cgs = JSON.parse(JSON.stringify(j.si)), j.cgs.LENGTH = {
    unit: z.m,
    prefix: B.SHORT.c
  }, j.cgs.MASS = {
    unit: z.g,
    prefix: B.SHORT[""]
  }, j.cgs.FORCE = {
    unit: z.dyn,
    prefix: B.SHORT[""]
  }, j.cgs.ENERGY = {
    unit: z.erg,
    prefix: B.NONE[""]
  }, j.us = JSON.parse(JSON.stringify(j.si)), j.us.LENGTH = {
    unit: z.ft,
    prefix: B.NONE[""]
  }, j.us.MASS = {
    unit: z.lbm,
    prefix: B.NONE[""]
  }, j.us.TEMPERATURE = {
    unit: z.degF,
    prefix: B.NONE[""]
  }, j.us.FORCE = {
    unit: z.lbf,
    prefix: B.NONE[""]
  }, j.us.ENERGY = {
    unit: z.BTU,
    prefix: B.BTU[""]
  }, j.us.POWER = {
    unit: z.hp,
    prefix: B.NONE[""]
  }, j.us.PRESSURE = {
    unit: z.psi,
    prefix: B.NONE[""]
  }, j.auto = JSON.parse(JSON.stringify(j.si));
  var re = j.auto;
  h.setUnitSystem = function(P) {
    if (Ee(j, P))
      re = j[P];
    else
      throw new Error("Unit system " + P + " does not exist. Choices are: " + Object.keys(j).join(", "));
  }, h.getUnitSystem = function() {
    for (var P in j)
      if (Ee(j, P) && j[P] === re)
        return P;
  }, h.typeConverters = {
    BigNumber: function(H) {
      return H != null && H.isFraction ? new x(H.n).div(H.d).times(H.s) : new x(H + "");
    },
    Fraction: function(H) {
      return new g(H);
    },
    Complex: function(H) {
      return H;
    },
    number: function(H) {
      return H != null && H.isFraction ? d(H) : H;
    }
  }, h.prototype._numberConverter = function() {
    var P = h.typeConverters[this.valueType()];
    if (P)
      return P;
    throw new TypeError('Unsupported Unit value type "' + this.valueType() + '"');
  }, h._getNumberConverter = function(P) {
    if (!h.typeConverters[P])
      throw new TypeError('Unsupported type "' + P + '"');
    return h.typeConverters[P];
  };
  for (var oe in z)
    if (Ee(z, oe)) {
      var ee = z[oe];
      ee.dimensions = ee.base.dimensions;
    }
  for (var ne in Q)
    if (Ee(Q, ne)) {
      var se = z[Q[ne]], ve = {};
      for (var we in se)
        Ee(se, we) && (ve[we] = se[we]);
      ve.name = ne, z[ne] = ve;
    }
  h.isValidAlpha = function(H) {
    return /^[a-zA-Z]$/.test(H);
  };
  function Ae(P) {
    for (var H = 0; H < P.length; H++) {
      if (y = P.charAt(H), H === 0 && !h.isValidAlpha(y))
        throw new Error('Invalid unit name (must begin with alpha character): "' + P + '"');
      if (H > 0 && !(h.isValidAlpha(y) || D(y)))
        throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + P + '"');
    }
  }
  return h.createUnit = function(P, H) {
    if (typeof P != "object")
      throw new TypeError("createUnit expects first parameter to be of type 'Object'");
    if (H && H.override) {
      for (var te in P)
        if (Ee(P, te) && h.deleteUnit(te), P[te].aliases)
          for (var k = 0; k < P[te].aliases.length; k++)
            h.deleteUnit(P[te].aliases[k]);
    }
    var Y;
    for (var W in P)
      Ee(P, W) && (Y = h.createUnitSingle(W, P[W]));
    return Y;
  }, h.createUnitSingle = function(P, H) {
    if ((typeof H > "u" || H === null) && (H = {}), typeof P != "string")
      throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
    if (Ee(z, P))
      throw new Error('Cannot create unit "' + P + '": a unit with that name already exists');
    Ae(P);
    var te = null, k = [], Y = 0, W, me, fe;
    if (H && H.type === "Unit")
      te = H.clone();
    else if (typeof H == "string")
      H !== "" && (W = H);
    else if (typeof H == "object")
      W = H.definition, me = H.prefixes, Y = H.offset, fe = H.baseName, H.aliases && (k = H.aliases.valueOf());
    else
      throw new TypeError('Cannot create unit "' + P + '" from "' + H.toString() + '": expecting "string" or "Unit" or "Object"');
    if (k) {
      for (var R = 0; R < k.length; R++)
        if (Ee(z, k[R]))
          throw new Error('Cannot create alias "' + k[R] + '": a unit with that name already exists');
    }
    if (W && typeof W == "string" && !te)
      try {
        te = h.parse(W, {
          allowNoUnits: !0
        });
      } catch (M) {
        throw M.message = 'Could not create unit "' + P + '" from "' + W + '": ' + M.message, M;
      }
    else
      W && W.type === "Unit" && (te = W.clone());
    k = k || [], Y = Y || 0, me && me.toUpperCase ? me = B[me.toUpperCase()] || B.NONE : me = B.NONE;
    var U = {};
    if (te) {
      U = {
        name: P,
        value: te.value,
        dimensions: te.dimensions.slice(0),
        prefixes: me,
        offset: Y
      };
      var ue = !1;
      for (var ge in O)
        if (Ee(O, ge)) {
          for (var he = !0, De = 0; De < L.length; De++)
            if (Math.abs((U.dimensions[De] || 0) - (O[ge].dimensions[De] || 0)) > 1e-12) {
              he = !1;
              break;
            }
          if (he) {
            ue = !0, U.base = O[ge];
            break;
          }
        }
      if (!ue) {
        fe = fe || P + "_STUFF";
        var ye = {
          dimensions: te.dimensions.slice(0)
        };
        ye.key = fe, O[fe] = ye, re[fe] = {
          unit: U,
          prefix: B.NONE[""]
        }, U.base = O[fe];
      }
    } else {
      if (fe = fe || P + "_STUFF", L.indexOf(fe) >= 0)
        throw new Error('Cannot create new base unit "' + P + '": a base unit with that name already exists (and cannot be overridden)');
      L.push(fe);
      for (var J in O)
        Ee(O, J) && (O[J].dimensions[L.length - 1] = 0);
      for (var ae = {
        dimensions: []
      }, le = 0; le < L.length; le++)
        ae.dimensions[le] = 0;
      ae.dimensions[L.length - 1] = 1, ae.key = fe, O[fe] = ae, U = {
        name: P,
        value: 1,
        dimensions: O[fe].dimensions.slice(0),
        prefixes: me,
        offset: Y,
        base: O[fe]
      }, re[fe] = {
        unit: U,
        prefix: B.NONE[""]
      };
    }
    h.UNITS[P] = U;
    for (var Ve = 0; Ve < k.length; Ve++) {
      var Ye = k[Ve], Ce = {};
      for (var lr in U)
        Ee(U, lr) && (Ce[lr] = U[lr]);
      Ce.name = Ye, h.UNITS[Ye] = Ce;
    }
    return delete $.cache, new h(null, P);
  }, h.deleteUnit = function(P) {
    delete h.UNITS[P], delete $.cache;
  }, h.PREFIXES = B, h.BASE_DIMENSIONS = L, h.BASE_UNITS = O, h.UNIT_SYSTEMS = j, h.UNITS = z, h;
}, {
  isClass: !0
}), ol = "unit", zw = ["typed", "Unit"], Pw = /* @__PURE__ */ q(ol, zw, (e) => {
  var {
    typed: r,
    Unit: i
  } = e;
  return r(ol, {
    Unit: function(t) {
      return t.clone();
    },
    string: function(t) {
      return i.isValuelessUnit(t) ? new i(null, t) : i.parse(t, {
        allowNoUnits: !0
      });
    },
    "number | BigNumber | Fraction | Complex, string | Unit": function(t, n) {
      return new i(t, n);
    },
    "number | BigNumber | Fraction": function(t) {
      return new i(t);
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
}), sl = "sparse", Uw = ["typed", "SparseMatrix"], Lw = /* @__PURE__ */ q(sl, Uw, (e) => {
  var {
    typed: r,
    SparseMatrix: i
  } = e;
  return r(sl, {
    "": function() {
      return new i([]);
    },
    string: function(t) {
      return new i([], t);
    },
    "Array | Matrix": function(t) {
      return new i(t);
    },
    "Array | Matrix, string": function(t, n) {
      return new i(t, n);
    }
  });
}), ul = "createUnit", kw = ["typed", "Unit"], Hw = /* @__PURE__ */ q(ul, kw, (e) => {
  var {
    typed: r,
    Unit: i
  } = e;
  return r(ul, {
    // General function signature. First parameter is an object where each property is the definition of a new unit. The object keys are the unit names and the values are the definitions. The values can be objects, strings, or Units. If a property is an empty object or an empty string, a new base unit is created. The second parameter is the options.
    "Object, Object": function(t, n) {
      return i.createUnit(t, n);
    },
    // Same as above but without the options.
    Object: function(t) {
      return i.createUnit(t, {});
    },
    // Shortcut method for creating one unit.
    "string, Unit | string | Object, Object": function(t, n, o) {
      var f = {};
      return f[t] = n, i.createUnit(f, o);
    },
    // Same as above but without the options.
    "string, Unit | string | Object": function(t, n) {
      var o = {};
      return o[t] = n, i.createUnit(o, {});
    },
    // Without a definition, creates a base unit.
    string: function(t) {
      var n = {};
      return n[t] = {}, i.createUnit(n, {});
    }
  });
}), ll = "acos", Gw = ["typed", "config", "Complex"], Vw = /* @__PURE__ */ q(ll, Gw, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(ll, {
    number: function(n) {
      return n >= -1 && n <= 1 || i.predictable ? Math.acos(n) : new a(n, 0).acos();
    },
    Complex: function(n) {
      return n.acos();
    },
    BigNumber: function(n) {
      return n.acos();
    }
  });
}), cl = "acosh", Zw = ["typed", "config", "Complex"], Yw = /* @__PURE__ */ q(cl, Zw, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(cl, {
    number: function(n) {
      return n >= 1 || i.predictable ? wm(n) : n <= -1 ? new a(Math.log(Math.sqrt(n * n - 1) - n), Math.PI) : new a(n, 0).acosh();
    },
    Complex: function(n) {
      return n.acosh();
    },
    BigNumber: function(n) {
      return n.acosh();
    }
  });
}), fl = "acot", Xw = ["typed", "BigNumber"], Ww = /* @__PURE__ */ q(fl, Xw, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r(fl, {
    number: Nm,
    Complex: function(t) {
      return t.acot();
    },
    BigNumber: function(t) {
      return new i(1).div(t).atan();
    }
  });
}), ml = "acoth", Jw = ["typed", "config", "Complex", "BigNumber"], Qw = /* @__PURE__ */ q(ml, Jw, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a,
    BigNumber: t
  } = e;
  return r(ml, {
    number: function(o) {
      return o >= 1 || o <= -1 || i.predictable ? Dm(o) : new a(o, 0).acoth();
    },
    Complex: function(o) {
      return o.acoth();
    },
    BigNumber: function(o) {
      return new t(1).div(o).atanh();
    }
  });
}), vl = "acsc", Kw = ["typed", "config", "Complex", "BigNumber"], jw = /* @__PURE__ */ q(vl, Kw, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a,
    BigNumber: t
  } = e;
  return r(vl, {
    number: function(o) {
      return o <= -1 || o >= 1 || i.predictable ? Am(o) : new a(o, 0).acsc();
    },
    Complex: function(o) {
      return o.acsc();
    },
    BigNumber: function(o) {
      return new t(1).div(o).asin();
    }
  });
}), pl = "acsch", eN = ["typed", "BigNumber"], rN = /* @__PURE__ */ q(pl, eN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r(pl, {
    number: Em,
    Complex: function(t) {
      return t.acsch();
    },
    BigNumber: function(t) {
      return new i(1).div(t).asinh();
    }
  });
}), dl = "asec", tN = ["typed", "config", "Complex", "BigNumber"], nN = /* @__PURE__ */ q(dl, tN, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a,
    BigNumber: t
  } = e;
  return r(dl, {
    number: function(o) {
      return o <= -1 || o >= 1 || i.predictable ? Sm(o) : new a(o, 0).asec();
    },
    Complex: function(o) {
      return o.asec();
    },
    BigNumber: function(o) {
      return new t(1).div(o).acos();
    }
  });
}), hl = "asech", aN = ["typed", "config", "Complex", "BigNumber"], iN = /* @__PURE__ */ q(hl, aN, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a,
    BigNumber: t
  } = e;
  return r(hl, {
    number: function(o) {
      if (o <= 1 && o >= -1 || i.predictable) {
        var f = 1 / o;
        if (f > 0 || i.predictable)
          return Cm(o);
        var l = Math.sqrt(f * f - 1);
        return new a(Math.log(l - f), Math.PI);
      }
      return new a(o, 0).asech();
    },
    Complex: function(o) {
      return o.asech();
    },
    BigNumber: function(o) {
      return new t(1).div(o).acosh();
    }
  });
}), gl = "asin", oN = ["typed", "config", "Complex"], sN = /* @__PURE__ */ q(gl, oN, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(gl, {
    number: function(n) {
      return n >= -1 && n <= 1 || i.predictable ? Math.asin(n) : new a(n, 0).asin();
    },
    Complex: function(n) {
      return n.asin();
    },
    BigNumber: function(n) {
      return n.asin();
    }
  });
}), uN = "asinh", lN = ["typed"], cN = /* @__PURE__ */ q(uN, lN, (e) => {
  var {
    typed: r
  } = e;
  return r("asinh", {
    number: Mm,
    Complex: function(a) {
      return a.asinh();
    },
    BigNumber: function(a) {
      return a.asinh();
    }
  });
}), fN = "atan", mN = ["typed"], vN = /* @__PURE__ */ q(fN, mN, (e) => {
  var {
    typed: r
  } = e;
  return r("atan", {
    number: function(a) {
      return Math.atan(a);
    },
    Complex: function(a) {
      return a.atan();
    },
    BigNumber: function(a) {
      return a.atan();
    }
  });
}), yl = "atan2", pN = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix", "concat"], dN = /* @__PURE__ */ q(yl, pN, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    BigNumber: t,
    DenseMatrix: n,
    concat: o
  } = e, f = st({
    typed: r,
    equalScalar: a
  }), l = Ir({
    typed: r
  }), u = Hm({
    typed: r,
    equalScalar: a
  }), s = Dr({
    typed: r,
    equalScalar: a
  }), c = hr({
    typed: r,
    DenseMatrix: n
  }), m = or({
    typed: r,
    matrix: i,
    concat: o
  });
  return r(yl, {
    "number, number": Math.atan2,
    // Complex numbers doesn't seem to have a reasonable implementation of
    // atan2(). Even Matlab removed the support, after they only calculated
    // the atan only on base of the real part of the numbers and ignored
    // the imaginary.
    "BigNumber, BigNumber": (v, d) => t.atan2(v, d)
  }, m({
    scalar: "number | BigNumber",
    SS: u,
    DS: l,
    SD: f,
    Ss: s,
    sS: c
  }));
}), bl = "atanh", hN = ["typed", "config", "Complex"], gN = /* @__PURE__ */ q(bl, hN, (e) => {
  var {
    typed: r,
    config: i,
    Complex: a
  } = e;
  return r(bl, {
    number: function(n) {
      return n <= 1 && n >= -1 || i.predictable ? Fm(n) : new a(n, 0).atanh();
    },
    Complex: function(n) {
      return n.atanh();
    },
    BigNumber: function(n) {
      return n.atanh();
    }
  });
}), Mn = /* @__PURE__ */ q("trigUnit", ["typed"], (e) => {
  var {
    typed: r
  } = e;
  return {
    Unit: r.referToSelf((i) => (a) => {
      if (!a.hasBase(a.constructor.BASE_UNITS.ANGLE))
        throw new TypeError("Unit in function cot is no angle");
      return r.find(i, a.valueType())(a.value);
    })
  };
}), xl = "cos", yN = ["typed"], bN = /* @__PURE__ */ q(xl, yN, (e) => {
  var {
    typed: r
  } = e, i = Mn({
    typed: r
  });
  return r(xl, {
    number: Math.cos,
    "Complex | BigNumber": (a) => a.cos()
  }, i);
}), wl = "cosh", xN = ["typed"], wN = /* @__PURE__ */ q(wl, xN, (e) => {
  var {
    typed: r
  } = e;
  return r(wl, {
    number: gd,
    "Complex | BigNumber": (i) => i.cosh()
  });
}), Nl = "cot", NN = ["typed", "BigNumber"], DN = /* @__PURE__ */ q(Nl, NN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e, a = Mn({
    typed: r
  });
  return r(Nl, {
    number: Bm,
    Complex: (t) => t.cot(),
    BigNumber: (t) => new i(1).div(t.tan())
  }, a);
}), Dl = "coth", AN = ["typed", "BigNumber"], EN = /* @__PURE__ */ q(Dl, AN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r(Dl, {
    number: Tm,
    Complex: (a) => a.coth(),
    BigNumber: (a) => new i(1).div(a.tanh())
  });
}), Al = "csc", SN = ["typed", "BigNumber"], CN = /* @__PURE__ */ q(Al, SN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e, a = Mn({
    typed: r
  });
  return r(Al, {
    number: Om,
    Complex: (t) => t.csc(),
    BigNumber: (t) => new i(1).div(t.sin())
  }, a);
}), El = "csch", MN = ["typed", "BigNumber"], FN = /* @__PURE__ */ q(El, MN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r(El, {
    number: _m,
    Complex: (a) => a.csch(),
    BigNumber: (a) => new i(1).div(a.sinh())
  });
}), Sl = "sec", BN = ["typed", "BigNumber"], TN = /* @__PURE__ */ q(Sl, BN, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e, a = Mn({
    typed: r
  });
  return r(Sl, {
    number: $m,
    Complex: (t) => t.sec(),
    BigNumber: (t) => new i(1).div(t.cos())
  }, a);
}), Cl = "sech", ON = ["typed", "BigNumber"], _N = /* @__PURE__ */ q(Cl, ON, (e) => {
  var {
    typed: r,
    BigNumber: i
  } = e;
  return r(Cl, {
    number: Im,
    Complex: (a) => a.sech(),
    BigNumber: (a) => new i(1).div(a.cosh())
  });
}), Ml = "sin", $N = ["typed"], IN = /* @__PURE__ */ q(Ml, $N, (e) => {
  var {
    typed: r
  } = e, i = Mn({
    typed: r
  });
  return r(Ml, {
    number: Math.sin,
    "Complex | BigNumber": (a) => a.sin()
  }, i);
}), Fl = "sinh", qN = ["typed"], RN = /* @__PURE__ */ q(Fl, qN, (e) => {
  var {
    typed: r
  } = e;
  return r(Fl, {
    number: qm,
    "Complex | BigNumber": (i) => i.sinh()
  });
}), Bl = "tan", zN = ["typed"], PN = /* @__PURE__ */ q(Bl, zN, (e) => {
  var {
    typed: r
  } = e, i = Mn({
    typed: r
  });
  return r(Bl, {
    number: Math.tan,
    "Complex | BigNumber": (a) => a.tan()
  }, i);
}), UN = "tanh", LN = ["typed"], kN = /* @__PURE__ */ q(UN, LN, (e) => {
  var {
    typed: r
  } = e;
  return r("tanh", {
    number: bd,
    "Complex | BigNumber": (i) => i.tanh()
  });
}), Tl = "setCartesian", HN = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], GN = /* @__PURE__ */ q(Tl, HN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n,
    DenseMatrix: o
  } = e;
  return r(Tl, {
    "Array | Matrix, Array | Matrix": function(l, u) {
      var s = [];
      if (a(i(l), new n(0)) !== 0 && a(i(u), new n(0)) !== 0) {
        var c = Qe(Array.isArray(l) ? l : l.toArray()).sort(t), m = Qe(Array.isArray(u) ? u : u.toArray()).sort(t);
        s = [];
        for (var v = 0; v < c.length; v++)
          for (var d = 0; d < m.length; d++)
            s.push([c[v], m[d]]);
      }
      return Array.isArray(l) && Array.isArray(u) ? s : new o(s);
    }
  });
}), Ol = "setDifference", VN = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], ZN = /* @__PURE__ */ q(Ol, VN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n,
    DenseMatrix: o
  } = e;
  return r(Ol, {
    "Array | Matrix, Array | Matrix": function(l, u) {
      var s;
      if (a(i(l), new n(0)) === 0)
        s = [];
      else {
        if (a(i(u), new n(0)) === 0)
          return Qe(l.toArray());
        var c = hn(Qe(Array.isArray(l) ? l : l.toArray()).sort(t)), m = hn(Qe(Array.isArray(u) ? u : u.toArray()).sort(t));
        s = [];
        for (var v, d = 0; d < c.length; d++) {
          v = !1;
          for (var p = 0; p < m.length; p++)
            if (t(c[d].value, m[p].value) === 0 && c[d].identifier === m[p].identifier) {
              v = !0;
              break;
            }
          v || s.push(c[d]);
        }
      }
      return Array.isArray(l) && Array.isArray(u) ? Ba(s) : new o(Ba(s));
    }
  });
}), _l = "setDistinct", YN = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], XN = /* @__PURE__ */ q(_l, YN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n,
    DenseMatrix: o
  } = e;
  return r(_l, {
    "Array | Matrix": function(l) {
      var u;
      if (a(i(l), new n(0)) === 0)
        u = [];
      else {
        var s = Qe(Array.isArray(l) ? l : l.toArray()).sort(t);
        u = [], u.push(s[0]);
        for (var c = 1; c < s.length; c++)
          t(s[c], s[c - 1]) !== 0 && u.push(s[c]);
      }
      return Array.isArray(l) ? u : new o(u);
    }
  });
}), $l = "setIntersect", WN = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], JN = /* @__PURE__ */ q($l, WN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n,
    DenseMatrix: o
  } = e;
  return r($l, {
    "Array | Matrix, Array | Matrix": function(l, u) {
      var s;
      if (a(i(l), new n(0)) === 0 || a(i(u), new n(0)) === 0)
        s = [];
      else {
        var c = hn(Qe(Array.isArray(l) ? l : l.toArray()).sort(t)), m = hn(Qe(Array.isArray(u) ? u : u.toArray()).sort(t));
        s = [];
        for (var v = 0; v < c.length; v++)
          for (var d = 0; d < m.length; d++)
            if (t(c[v].value, m[d].value) === 0 && c[v].identifier === m[d].identifier) {
              s.push(c[v]);
              break;
            }
      }
      return Array.isArray(l) && Array.isArray(u) ? Ba(s) : new o(Ba(s));
    }
  });
}), Il = "setIsSubset", QN = ["typed", "size", "subset", "compareNatural", "Index"], KN = /* @__PURE__ */ q(Il, QN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n
  } = e;
  return r(Il, {
    "Array | Matrix, Array | Matrix": function(f, l) {
      if (a(i(f), new n(0)) === 0)
        return !0;
      if (a(i(l), new n(0)) === 0)
        return !1;
      for (var u = hn(Qe(Array.isArray(f) ? f : f.toArray()).sort(t)), s = hn(Qe(Array.isArray(l) ? l : l.toArray()).sort(t)), c, m = 0; m < u.length; m++) {
        c = !1;
        for (var v = 0; v < s.length; v++)
          if (t(u[m].value, s[v].value) === 0 && u[m].identifier === s[v].identifier) {
            c = !0;
            break;
          }
        if (c === !1)
          return !1;
      }
      return !0;
    }
  });
}), ql = "setMultiplicity", jN = ["typed", "size", "subset", "compareNatural", "Index"], e2 = /* @__PURE__ */ q(ql, jN, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n
  } = e;
  return r(ql, {
    "number | BigNumber | Fraction | Complex, Array | Matrix": function(f, l) {
      if (a(i(l), new n(0)) === 0)
        return 0;
      for (var u = Qe(Array.isArray(l) ? l : l.toArray()), s = 0, c = 0; c < u.length; c++)
        t(u[c], f) === 0 && s++;
      return s;
    }
  });
}), Rl = "setPowerset", r2 = ["typed", "size", "subset", "compareNatural", "Index"], t2 = /* @__PURE__ */ q(Rl, r2, (e) => {
  var {
    typed: r,
    size: i,
    subset: a,
    compareNatural: t,
    Index: n
  } = e;
  return r(Rl, {
    "Array | Matrix": function(u) {
      if (a(i(u), new n(0)) === 0)
        return [];
      for (var s = Qe(Array.isArray(u) ? u : u.toArray()).sort(t), c = [], m = 0; m.toString(2).length <= s.length; )
        c.push(o(s, m.toString(2).split("").reverse())), m++;
      return f(c);
    }
  });
  function o(l, u) {
    for (var s = [], c = 0; c < u.length; c++)
      u[c] === "1" && s.push(l[c]);
    return s;
  }
  function f(l) {
    for (var u = [], s = l.length - 1; s > 0; s--)
      for (var c = 0; c < s; c++)
        l[c].length > l[c + 1].length && (u = l[c], l[c] = l[c + 1], l[c + 1] = u);
    return l;
  }
}), zl = "setSize", n2 = ["typed", "compareNatural"], a2 = /* @__PURE__ */ q(zl, n2, (e) => {
  var {
    typed: r,
    compareNatural: i
  } = e;
  return r(zl, {
    "Array | Matrix": function(t) {
      return Array.isArray(t) ? Qe(t).length : Qe(t.toArray()).length;
    },
    "Array | Matrix, boolean": function(t, n) {
      if (n === !1 || t.length === 0)
        return Array.isArray(t) ? Qe(t).length : Qe(t.toArray()).length;
      for (var o = Qe(Array.isArray(t) ? t : t.toArray()).sort(i), f = 1, l = 1; l < o.length; l++)
        i(o[l], o[l - 1]) !== 0 && f++;
      return f;
    }
  });
}), Pl = "setSymDifference", i2 = ["typed", "size", "concat", "subset", "setDifference", "Index"], o2 = /* @__PURE__ */ q(Pl, i2, (e) => {
  var {
    typed: r,
    size: i,
    concat: a,
    subset: t,
    setDifference: n,
    Index: o
  } = e;
  return r(Pl, {
    "Array | Matrix, Array | Matrix": function(l, u) {
      if (t(i(l), new o(0)) === 0)
        return Qe(u);
      if (t(i(u), new o(0)) === 0)
        return Qe(l);
      var s = Qe(l), c = Qe(u);
      return a(n(s, c), n(c, s));
    }
  });
}), Ul = "setUnion", s2 = ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"], u2 = /* @__PURE__ */ q(Ul, s2, (e) => {
  var {
    typed: r,
    size: i,
    concat: a,
    subset: t,
    setIntersect: n,
    setSymDifference: o,
    Index: f
  } = e;
  return r(Ul, {
    "Array | Matrix, Array | Matrix": function(u, s) {
      if (t(i(u), new f(0)) === 0)
        return Qe(s);
      if (t(i(s), new f(0)) === 0)
        return Qe(u);
      var c = Qe(u), m = Qe(s);
      return a(o(c, m), n(c, m));
    }
  });
}), Ll = "add", l2 = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], c2 = /* @__PURE__ */ q(Ll, l2, (e) => {
  var {
    typed: r,
    matrix: i,
    addScalar: a,
    equalScalar: t,
    DenseMatrix: n,
    SparseMatrix: o,
    concat: f
  } = e, l = $t({
    typed: r
  }), u = ji({
    typed: r,
    equalScalar: t
  }), s = Zt({
    typed: r,
    DenseMatrix: n
  }), c = or({
    typed: r,
    matrix: i,
    concat: f
  });
  return r(Ll, {
    "any, any": a,
    "any, any, ...any": r.referToSelf((m) => (v, d, p) => {
      for (var x = m(v, d), g = 0; g < p.length; g++)
        x = m(x, p[g]);
      return x;
    })
  }, c({
    elop: a,
    DS: l,
    SS: u,
    Ss: s
  }));
}), kl = "hypot", f2 = ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"], m2 = /* @__PURE__ */ q(kl, f2, (e) => {
  var {
    typed: r,
    abs: i,
    addScalar: a,
    divideScalar: t,
    multiplyScalar: n,
    sqrt: o,
    smaller: f,
    isPositive: l
  } = e;
  return r(kl, {
    "... number | BigNumber": u,
    Array: u,
    Matrix: (s) => u(Qe(s.toArray()))
  });
  function u(s) {
    for (var c = 0, m = 0, v = 0; v < s.length; v++) {
      if (bt(s[v]))
        throw new TypeError("Unexpected type of argument to hypot");
      var d = i(s[v]);
      f(m, d) ? (c = n(c, n(t(m, d), t(m, d))), c = a(c, 1), m = d) : c = a(c, l(d) ? n(t(d, m), t(d, m)) : d);
    }
    return n(m, o(c));
  }
}), Hl = "norm", v2 = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], p2 = /* @__PURE__ */ q(Hl, v2, (e) => {
  var {
    typed: r,
    abs: i,
    add: a,
    pow: t,
    conj: n,
    sqrt: o,
    multiply: f,
    equalScalar: l,
    larger: u,
    smaller: s,
    matrix: c,
    ctranspose: m,
    eigs: v
  } = e;
  return r(Hl, {
    number: Math.abs,
    Complex: function(S) {
      return S.abs();
    },
    BigNumber: function(S) {
      return S.abs();
    },
    boolean: function(S) {
      return Math.abs(S);
    },
    Array: function(S) {
      return y(c(S), 2);
    },
    Matrix: function(S) {
      return y(S, 2);
    },
    "Array, number | BigNumber | string": function(S, D) {
      return y(c(S), D);
    },
    "Matrix, number | BigNumber | string": function(S, D) {
      return y(S, D);
    }
  });
  function d(A) {
    var S = 0;
    return A.forEach(function(D) {
      var E = i(D);
      u(E, S) && (S = E);
    }, !0), S;
  }
  function p(A) {
    var S;
    return A.forEach(function(D) {
      var E = i(D);
      (!S || s(E, S)) && (S = E);
    }, !0), S || 0;
  }
  function x(A, S) {
    if (S === Number.POSITIVE_INFINITY || S === "inf")
      return d(A);
    if (S === Number.NEGATIVE_INFINITY || S === "-inf")
      return p(A);
    if (S === "fro")
      return y(A, 2);
    if (typeof S == "number" && !isNaN(S)) {
      if (!l(S, 0)) {
        var D = 0;
        return A.forEach(function(E) {
          D = a(t(i(E), S), D);
        }, !0), t(D, 1 / S);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function g(A) {
    var S = 0;
    return A.forEach(function(D, E) {
      S = a(S, f(D, n(D)));
    }), i(o(S));
  }
  function N(A) {
    var S = [], D = 0;
    return A.forEach(function(E, C) {
      var F = C[1], _ = a(S[F] || 0, i(E));
      u(_, D) && (D = _), S[F] = _;
    }, !0), D;
  }
  function h(A) {
    var S = A.size();
    if (S[0] !== S[1])
      throw new RangeError("Invalid matrix dimensions");
    var D = m(A), E = f(D, A), C = v(E).values.toArray(), F = C[C.length - 1];
    return i(o(F));
  }
  function b(A) {
    var S = [], D = 0;
    return A.forEach(function(E, C) {
      var F = C[0], _ = a(S[F] || 0, i(E));
      u(_, D) && (D = _), S[F] = _;
    }, !0), D;
  }
  function w(A, S) {
    if (S === 1)
      return N(A);
    if (S === Number.POSITIVE_INFINITY || S === "inf")
      return b(A);
    if (S === "fro")
      return g(A);
    if (S === 2)
      return h(A);
    throw new Error("Unsupported parameter value " + S);
  }
  function y(A, S) {
    var D = A.size();
    if (D.length === 1)
      return x(A, S);
    if (D.length === 2) {
      if (D[0] && D[1])
        return w(A, S);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), Gl = "dot", d2 = ["typed", "addScalar", "multiplyScalar", "conj", "size"], h2 = /* @__PURE__ */ q(Gl, d2, (e) => {
  var {
    typed: r,
    addScalar: i,
    multiplyScalar: a,
    conj: t,
    size: n
  } = e;
  return r(Gl, {
    "Array | DenseMatrix, Array | DenseMatrix": f,
    "SparseMatrix, SparseMatrix": l
  });
  function o(s, c) {
    var m = u(s), v = u(c), d, p;
    if (m.length === 1)
      d = m[0];
    else if (m.length === 2 && m[1] === 1)
      d = m[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + m.join(", ") + ")");
    if (v.length === 1)
      p = v[0];
    else if (v.length === 2 && v[1] === 1)
      p = v[0];
    else
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + v.join(", ") + ")");
    if (d !== p)
      throw new RangeError("Vectors must have equal length (" + d + " != " + p + ")");
    if (d === 0)
      throw new RangeError("Cannot calculate the dot product of empty vectors");
    return d;
  }
  function f(s, c) {
    var m = o(s, c), v = Fe(s) ? s._data : s, d = Fe(s) ? s._datatype || s.getDataType() : void 0, p = Fe(c) ? c._data : c, x = Fe(c) ? c._datatype || c.getDataType() : void 0, g = u(s).length === 2, N = u(c).length === 2, h = i, b = a;
    if (d && x && d === x && typeof d == "string" && d !== "mixed") {
      var w = d;
      h = r.find(i, [w, w]), b = r.find(a, [w, w]);
    }
    if (!g && !N) {
      for (var y = b(t(v[0]), p[0]), A = 1; A < m; A++)
        y = h(y, b(t(v[A]), p[A]));
      return y;
    }
    if (!g && N) {
      for (var S = b(t(v[0]), p[0][0]), D = 1; D < m; D++)
        S = h(S, b(t(v[D]), p[D][0]));
      return S;
    }
    if (g && !N) {
      for (var E = b(t(v[0][0]), p[0]), C = 1; C < m; C++)
        E = h(E, b(t(v[C][0]), p[C]));
      return E;
    }
    if (g && N) {
      for (var F = b(t(v[0][0]), p[0][0]), _ = 1; _ < m; _++)
        F = h(F, b(t(v[_][0]), p[_][0]));
      return F;
    }
  }
  function l(s, c) {
    o(s, c);
    for (var m = s._index, v = s._values, d = c._index, p = c._values, x = 0, g = i, N = a, h = 0, b = 0; h < m.length && b < d.length; ) {
      var w = m[h], y = d[b];
      if (w < y) {
        h++;
        continue;
      }
      if (w > y) {
        b++;
        continue;
      }
      w === y && (x = g(x, N(v[h], p[b])), h++, b++);
    }
    return x;
  }
  function u(s) {
    return Fe(s) ? s.size() : n(s);
  }
}), g2 = "trace", y2 = ["typed", "matrix", "add"], b2 = /* @__PURE__ */ q(g2, y2, (e) => {
  var {
    typed: r,
    matrix: i,
    add: a
  } = e;
  return r("trace", {
    Array: function(f) {
      return t(i(f));
    },
    SparseMatrix: n,
    DenseMatrix: t,
    any: _e
  });
  function t(o) {
    var f = o._size, l = o._data;
    switch (f.length) {
      case 1:
        if (f[0] === 1)
          return _e(l[0]);
        throw new RangeError("Matrix must be square (size: " + Le(f) + ")");
      case 2: {
        var u = f[0], s = f[1];
        if (u === s) {
          for (var c = 0, m = 0; m < u; m++)
            c = a(c, l[m][m]);
          return c;
        } else
          throw new RangeError("Matrix must be square (size: " + Le(f) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + Le(f) + ")");
    }
  }
  function n(o) {
    var f = o._values, l = o._index, u = o._ptr, s = o._size, c = s[0], m = s[1];
    if (c === m) {
      var v = 0;
      if (f.length > 0)
        for (var d = 0; d < m; d++)
          for (var p = u[d], x = u[d + 1], g = p; g < x; g++) {
            var N = l[g];
            if (N === d) {
              v = a(v, f[g]);
              break;
            }
            if (N > d)
              break;
          }
      return v;
    }
    throw new RangeError("Matrix must be square (size: " + Le(s) + ")");
  }
}), Vl = "index", x2 = ["typed", "Index"], w2 = /* @__PURE__ */ q(Vl, x2, (e) => {
  var {
    typed: r,
    Index: i
  } = e;
  return r(Vl, {
    "...number | string | BigNumber | Range | Array | Matrix": function(t) {
      var n = t.map(function(f) {
        return ze(f) ? f.toNumber() : Ke(f) || Fe(f) ? f.map(function(l) {
          return ze(l) ? l.toNumber() : l;
        }) : f;
      }), o = new i();
      return i.apply(o, n), o;
    }
  });
}), ov = /* @__PURE__ */ new Set(["end"]), N2 = "Node", D2 = ["mathWithTransform"], A2 = /* @__PURE__ */ q(N2, D2, (e) => {
  var {
    mathWithTransform: r
  } = e;
  function i(t) {
    for (var n of [...ov])
      if (t.has(n))
        throw new Error('Scope contains an illegal symbol, "' + n + '" is a reserved keyword');
  }
  class a {
    get type() {
      return "Node";
    }
    get isNode() {
      return !0;
    }
    /**
     * Evaluate the node
     * @param {Object} [scope]  Scope to read/write variables
     * @return {*}              Returns the result
     */
    evaluate(n) {
      return this.compile().evaluate(n);
    }
    /**
     * Compile the node into an optimized, evauatable JavaScript function
     * @return {{evaluate: function([Object])}} object
     *                Returns an object with a function 'evaluate',
     *                which can be invoked as expr.evaluate([scope: Object]),
     *                where scope is an optional object with
     *                variables.
     */
    compile() {
      var n = this._compile(r, {}), o = {}, f = null;
      function l(u) {
        var s = mn(u);
        return i(s), n(s, o, f);
      }
      return {
        evaluate: l
      };
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      throw new Error("Method _compile must be implemented by type " + this.type);
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      throw new Error("Cannot run forEach on a Node interface");
    }
    /**
     * Create a new Node whose children are the results of calling the
     * provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {OperatorNode} Returns a transformed copy of the node
     */
    map(n) {
      throw new Error("Cannot run map on a Node interface");
    }
    /**
     * Validate whether an object is a Node, for use with map
     * @param {Node} node
     * @returns {Node} Returns the input if it's a node, else throws an Error
     * @protected
     */
    _ifNode(n) {
      if (!er(n))
        throw new TypeError("Callback function must return a Node");
      return n;
    }
    /**
     * Recursively traverse all nodes in a node tree. Executes given callback for
     * this node and each of its child nodes.
     * @param {function(node: Node, path: string, parent: Node)} callback
     *          A callback called for every node in the node tree.
     */
    traverse(n) {
      n(this, null, null);
      function o(f, l) {
        f.forEach(function(u, s, c) {
          l(u, s, c), o(u, l);
        });
      }
      o(this, n);
    }
    /**
     * Recursively transform a node tree via a transform function.
     *
     * For example, to replace all nodes of type SymbolNode having name 'x' with
     * a ConstantNode with value 2:
     *
     *     const res = Node.transform(function (node, path, parent) {
     *       if (node && node.isSymbolNode) && (node.name === 'x')) {
     *         return new ConstantNode(2)
     *       }
     *       else {
     *         return node
     *       }
     *     })
     *
     * @param {function(node: Node, path: string, parent: Node) : Node} callback
     *          A mapping function accepting a node, and returning
     *          a replacement for the node or the original node. The "signature"
     *          of the callback must be:
     *          callback(node: Node, index: string, parent: Node) : Node
     * @return {Node} Returns the original node or its replacement
     */
    transform(n) {
      function o(f, l, u) {
        var s = n(f, l, u);
        return s !== f ? s : f.map(o);
      }
      return o(this, null, null);
    }
    /**
     * Find any node in the node tree matching given filter function. For
     * example, to find all nodes of type SymbolNode having name 'x':
     *
     *     const results = Node.filter(function (node) {
     *       return (node && node.isSymbolNode) && (node.name === 'x')
     *     })
     *
     * @param {function(node: Node, path: string, parent: Node) : Node} callback
     *            A test function returning true when a node matches, and false
     *            otherwise. Function signature:
     *            callback(node: Node, index: string, parent: Node) : boolean
     * @return {Node[]} nodes
     *            An array with nodes matching given filter criteria
     */
    filter(n) {
      var o = [];
      return this.traverse(function(f, l, u) {
        n(f, l, u) && o.push(f);
      }), o;
    }
    /**
     * Create a shallow clone of this node
     * @return {Node}
     */
    clone() {
      throw new Error("Cannot clone a Node interface");
    }
    /**
     * Create a deep clone of this node
     * @return {Node}
     */
    cloneDeep() {
      return this.map(function(n) {
        return n.cloneDeep();
      });
    }
    /**
     * Deep compare this node with another node.
     * @param {Node} other
     * @return {boolean} Returns true when both nodes are of the same type and
     *                   contain the same values (as do their childs)
     */
    equals(n) {
      return n ? this.type === n.type && Gt(this, n) : !1;
    }
    /**
     * Get string representation. (wrapper function)
     *
     * This function can get an object of the following form:
     * {
     *    handler: //This can be a callback function of the form
     *             // "function callback(node, options)"or
     *             // a map that maps function names (used in FunctionNodes)
     *             // to callbacks
     *    parenthesis: "keep" //the parenthesis option (This is optional)
     * }
     *
     * @param {Object} [options]
     * @return {string}
     */
    toString(n) {
      var o = this._getCustomString(n);
      return typeof o < "u" ? o : this._toString(n);
    }
    /**
     * Internal function to generate the string output.
     * This has to be implemented by every Node
     *
     * @throws {Error}
     */
    _toString() {
      throw new Error("_toString not implemented for " + this.type);
    }
    /**
     * Get a JSON representation of the node
     * Both .toJSON() and the static .fromJSON(json) should be implemented by all
     * implementations of Node
     * @returns {Object}
     */
    toJSON() {
      throw new Error("Cannot serialize object: toJSON not implemented by " + this.type);
    }
    /**
     * Get HTML representation. (wrapper function)
     *
     * This function can get an object of the following form:
     * {
     *    handler: //This can be a callback function of the form
     *             // "function callback(node, options)" or
     *             // a map that maps function names (used in FunctionNodes)
     *             // to callbacks
     *    parenthesis: "keep" //the parenthesis option (This is optional)
     * }
     *
     * @param {Object} [options]
     * @return {string}
     */
    toHTML(n) {
      var o = this._getCustomString(n);
      return typeof o < "u" ? o : this._toHTML(n);
    }
    /**
     * Internal function to generate the HTML output.
     * This has to be implemented by every Node
     *
     * @throws {Error}
     */
    _toHTML() {
      throw new Error("_toHTML not implemented for " + this.type);
    }
    /**
     * Get LaTeX representation. (wrapper function)
     *
     * This function can get an object of the following form:
     * {
     *    handler: //This can be a callback function of the form
     *             // "function callback(node, options)"or
     *             // a map that maps function names (used in FunctionNodes)
     *             // to callbacks
     *    parenthesis: "keep" //the parenthesis option (This is optional)
     * }
     *
     * @param {Object} [options]
     * @return {string}
     */
    toTex(n) {
      var o = this._getCustomString(n);
      return typeof o < "u" ? o : this._toTex(n);
    }
    /**
     * Internal function to generate the LaTeX output.
     * This has to be implemented by every Node
     *
     * @param {Object} [options]
     * @throws {Error}
     */
    _toTex(n) {
      throw new Error("_toTex not implemented for " + this.type);
    }
    /**
     * Helper used by `to...` functions.
     */
    _getCustomString(n) {
      if (n && typeof n == "object")
        switch (typeof n.handler) {
          case "object":
          case "undefined":
            return;
          case "function":
            return n.handler(this, n);
          default:
            throw new TypeError("Object or function expected as callback");
        }
    }
    /**
     * Get identifier.
     * @return {string}
     */
    getIdentifier() {
      return this.type;
    }
    /**
     * Get the content of the current Node.
     * @return {Node} node
     **/
    getContent() {
      return this;
    }
  }
  return a;
}, {
  isClass: !0,
  isNode: !0
});
function qr(e) {
  return e && e.isIndexError ? new at(e.index + 1, e.min + 1, e.max !== void 0 ? e.max + 1 : void 0) : e;
}
function sv(e) {
  var {
    subset: r
  } = e;
  return function(a, t) {
    try {
      if (Array.isArray(a))
        return r(a, t);
      if (a && typeof a.subset == "function")
        return a.subset(t);
      if (typeof a == "string")
        return r(a, t);
      if (typeof a == "object") {
        if (!t.isObjectProperty())
          throw new TypeError("Cannot apply a numeric index as object property");
        return Br(a, t.getObjectProperty());
      } else
        throw new TypeError("Cannot apply index: unsupported type of object");
    } catch (n) {
      throw qr(n);
    }
  };
}
var la = "AccessorNode", E2 = ["subset", "Node"], S2 = /* @__PURE__ */ q(la, E2, (e) => {
  var {
    subset: r,
    Node: i
  } = e, a = sv({
    subset: r
  });
  function t(o) {
    return !(Ht(o) || Zr(o) || Xe(o) || Bt(o) || Qa(o) || wt(o) || yr(o));
  }
  class n extends i {
    /**
     * @constructor AccessorNode
     * @extends {Node}
     * Access an object property or get a matrix subset
     *
     * @param {Node} object                 The object from which to retrieve
     *                                      a property or subset.
     * @param {IndexNode} index             IndexNode containing ranges
     */
    constructor(f, l) {
      if (super(), !er(f))
        throw new TypeError('Node expected for parameter "object"');
      if (!Nn(l))
        throw new TypeError('IndexNode expected for parameter "index"');
      this.object = f, this.index = l;
    }
    // readonly property name
    get name() {
      return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
    }
    get type() {
      return la;
    }
    get isAccessorNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(f, l) {
      var u = this.object._compile(f, l), s = this.index._compile(f, l);
      if (this.index.isObjectProperty()) {
        var c = this.index.getObjectProperty();
        return function(v, d, p) {
          return Br(u(v, d, p), c);
        };
      } else
        return function(v, d, p) {
          var x = u(v, d, p), g = s(v, d, x);
          return a(x, g);
        };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(f) {
      f(this.object, "object", this), f(this.index, "index", this);
    }
    /**
     * Create a new AccessorNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {AccessorNode} Returns a transformed copy of the node
     */
    map(f) {
      return new n(this._ifNode(f(this.object, "object", this)), this._ifNode(f(this.index, "index", this)));
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {AccessorNode}
     */
    clone() {
      return new n(this.object, this.index);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string}
     */
    _toString(f) {
      var l = this.object.toString(f);
      return t(this.object) && (l = "(" + l + ")"), l + this.index.toString(f);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string}
     */
    _toHTML(f) {
      var l = this.object.toHTML(f);
      return t(this.object) && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l + this.index.toHTML(f);
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string}
     */
    _toTex(f) {
      var l = this.object.toTex(f);
      return t(this.object) && (l = "\\left(' + object + '\\right)"), l + this.index.toTex(f);
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: la,
        object: this.object,
        index: this.index
      };
    }
    /**
     * Instantiate an AccessorNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "AccessorNode", object: ..., index: ...}`,
     *     where mathjs is optional
     * @returns {AccessorNode}
     */
    static fromJSON(f) {
      return new n(f.object, f.index);
    }
  }
  return dr(n, "name", la), n;
}, {
  isClass: !0,
  isNode: !0
}), ca = "ArrayNode", C2 = ["Node"], M2 = /* @__PURE__ */ q(ca, C2, (e) => {
  var {
    Node: r
  } = e;
  class i extends r {
    /**
     * @constructor ArrayNode
     * @extends {Node}
     * Holds an 1-dimensional array with items
     * @param {Node[]} [items]   1 dimensional array with items
     */
    constructor(t) {
      if (super(), this.items = t || [], !Array.isArray(this.items) || !this.items.every(er))
        throw new TypeError("Array containing Nodes expected");
    }
    get type() {
      return ca;
    }
    get isArrayNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(t, n) {
      var o = xt(this.items, function(u) {
        return u._compile(t, n);
      }), f = t.config.matrix !== "Array";
      if (f) {
        var l = t.matrix;
        return function(s, c, m) {
          return l(xt(o, function(v) {
            return v(s, c, m);
          }));
        };
      } else
        return function(s, c, m) {
          return xt(o, function(v) {
            return v(s, c, m);
          });
        };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(t) {
      for (var n = 0; n < this.items.length; n++) {
        var o = this.items[n];
        t(o, "items[" + n + "]", this);
      }
    }
    /**
     * Create a new ArrayNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {ArrayNode} Returns a transformed copy of the node
     */
    map(t) {
      for (var n = [], o = 0; o < this.items.length; o++)
        n[o] = this._ifNode(t(this.items[o], "items[" + o + "]", this));
      return new i(n);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {ArrayNode}
     */
    clone() {
      return new i(this.items.slice(0));
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(t) {
      var n = this.items.map(function(o) {
        return o.toString(t);
      });
      return "[" + n.join(", ") + "]";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: ca,
        items: this.items
      };
    }
    /**
     * Instantiate an ArrayNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "ArrayNode", items: [...]}`,
     *                       where mathjs is optional
     * @returns {ArrayNode}
     */
    static fromJSON(t) {
      return new i(t.items);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(t) {
      var n = this.items.map(function(o) {
        return o.toHTML(t);
      });
      return '<span class="math-parenthesis math-square-parenthesis">[</span>' + n.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(t) {
      function n(o, f) {
        var l = o.some(Zr) && !o.every(Zr), u = f || l, s = u ? "&" : "\\\\", c = o.map(function(m) {
          return m.items ? n(m.items, !f) : m.toTex(t);
        }).join(s);
        return l || !u || u && !f ? "\\begin{bmatrix}" + c + "\\end{bmatrix}" : c;
      }
      return n(this.items, !1);
    }
  }
  return dr(i, "name", ca), i;
}, {
  isClass: !0,
  isNode: !0
});
function F2(e) {
  var {
    subset: r,
    matrix: i
  } = e;
  return function(t, n, o) {
    try {
      if (Array.isArray(t)) {
        var f = i(t).subset(n, o).valueOf();
        return f.forEach((l, u) => {
          t[u] = l;
        }), t;
      } else {
        if (t && typeof t.subset == "function")
          return t.subset(n, o);
        if (typeof t == "string")
          return r(t, n, o);
        if (typeof t == "object") {
          if (!n.isObjectProperty())
            throw TypeError("Cannot apply a numeric index as object property");
          return gn(t, n.getObjectProperty(), o), t;
        } else
          throw new TypeError("Cannot apply index: unsupported type of object");
      }
    } catch (l) {
      throw qr(l);
    }
  };
}
var et = [{
  // assignment
  AssignmentNode: {},
  FunctionAssignmentNode: {}
}, {
  // conditional expression
  ConditionalNode: {
    latexLeftParens: !1,
    latexRightParens: !1,
    latexParens: !1
    // conditionals don't need parentheses in LaTeX because
    // they are 2 dimensional
  }
}, {
  // logical or
  "OperatorNode:or": {
    op: "or",
    associativity: "left",
    associativeWith: []
  }
}, {
  // logical xor
  "OperatorNode:xor": {
    op: "xor",
    associativity: "left",
    associativeWith: []
  }
}, {
  // logical and
  "OperatorNode:and": {
    op: "and",
    associativity: "left",
    associativeWith: []
  }
}, {
  // bitwise or
  "OperatorNode:bitOr": {
    op: "|",
    associativity: "left",
    associativeWith: []
  }
}, {
  // bitwise xor
  "OperatorNode:bitXor": {
    op: "^|",
    associativity: "left",
    associativeWith: []
  }
}, {
  // bitwise and
  "OperatorNode:bitAnd": {
    op: "&",
    associativity: "left",
    associativeWith: []
  }
}, {
  // relational operators
  "OperatorNode:equal": {
    op: "==",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:unequal": {
    op: "!=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smaller": {
    op: "<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:larger": {
    op: ">",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smallerEq": {
    op: "<=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:largerEq": {
    op: ">=",
    associativity: "left",
    associativeWith: []
  },
  RelationalNode: {
    associativity: "left",
    associativeWith: []
  }
}, {
  // bitshift operators
  "OperatorNode:leftShift": {
    op: "<<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightArithShift": {
    op: ">>",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightLogShift": {
    op: ">>>",
    associativity: "left",
    associativeWith: []
  }
}, {
  // unit conversion
  "OperatorNode:to": {
    op: "to",
    associativity: "left",
    associativeWith: []
  }
}, {
  // range
  RangeNode: {}
}, {
  // addition, subtraction
  "OperatorNode:add": {
    op: "+",
    associativity: "left",
    associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
  },
  "OperatorNode:subtract": {
    op: "-",
    associativity: "left",
    associativeWith: []
  }
}, {
  // multiply, divide, modulus
  "OperatorNode:multiply": {
    op: "*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  },
  "OperatorNode:divide": {
    op: "/",
    associativity: "left",
    associativeWith: [],
    latexLeftParens: !1,
    latexRightParens: !1,
    latexParens: !1
    // fractions don't require parentheses because
    // they're 2 dimensional, so parens aren't needed
    // in LaTeX
  },
  "OperatorNode:dotMultiply": {
    op: ".*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
  },
  "OperatorNode:dotDivide": {
    op: "./",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:mod": {
    op: "mod",
    associativity: "left",
    associativeWith: []
  }
}, {
  // Repeat multiplication for implicit multiplication
  "OperatorNode:multiply": {
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  }
}, {
  // unary prefix operators
  "OperatorNode:unaryPlus": {
    op: "+",
    associativity: "right"
  },
  "OperatorNode:unaryMinus": {
    op: "-",
    associativity: "right"
  },
  "OperatorNode:bitNot": {
    op: "~",
    associativity: "right"
  },
  "OperatorNode:not": {
    op: "not",
    associativity: "right"
  }
}, {
  // exponentiation
  "OperatorNode:pow": {
    op: "^",
    associativity: "right",
    associativeWith: [],
    latexRightParens: !1
    // the exponent doesn't need parentheses in
    // LaTeX because it's 2 dimensional
    // (it's on top)
  },
  "OperatorNode:dotPow": {
    op: ".^",
    associativity: "right",
    associativeWith: []
  }
}, {
  // factorial
  "OperatorNode:factorial": {
    op: "!",
    associativity: "left"
  }
}, {
  // matrix transpose
  "OperatorNode:ctranspose": {
    op: "'",
    associativity: "left"
  }
}];
function fa(e, r) {
  if (!r || r !== "auto")
    return e;
  for (var i = e; wt(i); )
    i = i.content;
  return i;
}
function nr(e, r, i, a) {
  var t = e;
  r !== "keep" && (t = e.getContent());
  for (var n = t.getIdentifier(), o = null, f = 0; f < et.length; f++)
    if (n in et[f]) {
      o = f;
      break;
    }
  if (n === "OperatorNode:multiply" && t.implicit && i !== "show") {
    var l = fa(t.args[0], r);
    !(Xe(l) && a && a.getIdentifier() === "OperatorNode:divide" && Fi(fa(a.args[0], r))) && !(l.getIdentifier() === "OperatorNode:divide" && Fi(fa(l.args[0], r)) && Xe(fa(l.args[1]))) && (o += 1);
  }
  return o;
}
function Un(e, r) {
  var i = e;
  r !== "keep" && (i = e.getContent());
  var a = i.getIdentifier(), t = nr(i, r);
  if (t === null)
    return null;
  var n = et[t][a];
  if (Ee(n, "associativity")) {
    if (n.associativity === "left")
      return "left";
    if (n.associativity === "right")
      return "right";
    throw Error("'" + a + "' has the invalid associativity '" + n.associativity + "'.");
  }
  return null;
}
function Si(e, r, i) {
  var a = i !== "keep" ? e.getContent() : e, t = i !== "keep" ? e.getContent() : r, n = a.getIdentifier(), o = t.getIdentifier(), f = nr(a, i);
  if (f === null)
    return null;
  var l = et[f][n];
  if (Ee(l, "associativeWith") && l.associativeWith instanceof Array) {
    for (var u = 0; u < l.associativeWith.length; u++)
      if (l.associativeWith[u] === o)
        return !0;
    return !1;
  }
  return null;
}
function B2(e) {
  var r = "OperatorNode:" + e;
  for (var i of et)
    if (r in i)
      return i[r].op;
  return null;
}
var ma = "AssignmentNode", T2 = [
  "subset",
  "?matrix",
  // FIXME: should not be needed at all, should be handled by subset
  "Node"
], O2 = /* @__PURE__ */ q(ma, T2, (e) => {
  var {
    subset: r,
    matrix: i,
    Node: a
  } = e, t = sv({
    subset: r
  }), n = F2({
    subset: r,
    matrix: i
  });
  function o(l, u, s) {
    u || (u = "keep");
    var c = nr(l, u, s), m = nr(l.value, u, s);
    return u === "all" || m !== null && m <= c;
  }
  class f extends a {
    /**
     * @constructor AssignmentNode
     * @extends {Node}
     *
     * Define a symbol, like `a=3.2`, update a property like `a.b=3.2`, or
     * replace a subset of a matrix like `A[2,2]=42`.
     *
     * Syntax:
     *
     *     new AssignmentNode(symbol, value)
     *     new AssignmentNode(object, index, value)
     *
     * Usage:
     *
     *    new AssignmentNode(new SymbolNode('a'), new ConstantNode(2))  // a=2
     *    new AssignmentNode(new SymbolNode('a'),
     *                       new IndexNode('b'),
     *                       new ConstantNode(2))   // a.b=2
     *    new AssignmentNode(new SymbolNode('a'),
     *                       new IndexNode(1, 2),
     *                       new ConstantNode(3))  // a[1,2]=3
     *
     * @param {SymbolNode | AccessorNode} object
     *     Object on which to assign a value
     * @param {IndexNode} [index=null]
     *     Index, property name or matrix index. Optional. If not provided
     *     and `object` is a SymbolNode, the property is assigned to the
     *     global scope.
     * @param {Node} value
     *     The value to be assigned
     */
    constructor(u, s, c) {
      if (super(), this.object = u, this.index = c ? s : null, this.value = c || s, !yr(u) && !Ht(u))
        throw new TypeError('SymbolNode or AccessorNode expected as "object"');
      if (yr(u) && u.name === "end")
        throw new Error('Cannot assign to symbol "end"');
      if (this.index && !Nn(this.index))
        throw new TypeError('IndexNode expected as "index"');
      if (!er(this.value))
        throw new TypeError('Node expected as "value"');
    }
    // class name for typing purposes:
    // readonly property name
    get name() {
      return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
    }
    get type() {
      return ma;
    }
    get isAssignmentNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(u, s) {
      var c = this.object._compile(u, s), m = this.index ? this.index._compile(u, s) : null, v = this.value._compile(u, s), d = this.object.name;
      if (this.index)
        if (this.index.isObjectProperty()) {
          var p = this.index.getObjectProperty();
          return function(b, w, y) {
            var A = c(b, w, y), S = v(b, w, y);
            return gn(A, p, S), S;
          };
        } else {
          if (yr(this.object))
            return function(b, w, y) {
              var A = c(b, w, y), S = v(b, w, y), D = m(b, w, A);
              return b.set(d, n(A, D, S)), S;
            };
          var x = this.object.object._compile(u, s);
          if (this.object.index.isObjectProperty()) {
            var g = this.object.index.getObjectProperty();
            return function(b, w, y) {
              var A = x(b, w, y), S = Br(A, g), D = m(b, w, S), E = v(b, w, y);
              return gn(A, g, n(S, D, E)), E;
            };
          } else {
            var N = this.object.index._compile(u, s);
            return function(b, w, y) {
              var A = x(b, w, y), S = N(b, w, A), D = t(A, S), E = m(b, w, D), C = v(b, w, y);
              return n(A, S, n(D, E, C)), C;
            };
          }
        }
      else {
        if (!yr(this.object))
          throw new TypeError("SymbolNode expected as object");
        return function(b, w, y) {
          var A = v(b, w, y);
          return b.set(d, A), A;
        };
      }
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(u) {
      u(this.object, "object", this), this.index && u(this.index, "index", this), u(this.value, "value", this);
    }
    /**
     * Create a new AssignmentNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {AssignmentNode} Returns a transformed copy of the node
     */
    map(u) {
      var s = this._ifNode(u(this.object, "object", this)), c = this.index ? this._ifNode(u(this.index, "index", this)) : null, m = this._ifNode(u(this.value, "value", this));
      return new f(s, c, m);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {AssignmentNode}
     */
    clone() {
      return new f(this.object, this.index, this.value);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string}
     */
    _toString(u) {
      var s = this.object.toString(u), c = this.index ? this.index.toString(u) : "", m = this.value.toString(u);
      return o(this, u && u.parenthesis, u && u.implicit) && (m = "(" + m + ")"), s + c + " = " + m;
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: ma,
        object: this.object,
        index: this.index,
        value: this.value
      };
    }
    /**
     * Instantiate an AssignmentNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "AssignmentNode", object: ..., index: ..., value: ...}`,
     *     where mathjs is optional
     * @returns {AssignmentNode}
     */
    static fromJSON(u) {
      return new f(u.object, u.index, u.value);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string}
     */
    _toHTML(u) {
      var s = this.object.toHTML(u), c = this.index ? this.index.toHTML(u) : "", m = this.value.toHTML(u);
      return o(this, u && u.parenthesis, u && u.implicit) && (m = '<span class="math-paranthesis math-round-parenthesis">(</span>' + m + '<span class="math-paranthesis math-round-parenthesis">)</span>'), s + c + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + m;
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string}
     */
    _toTex(u) {
      var s = this.object.toTex(u), c = this.index ? this.index.toTex(u) : "", m = this.value.toTex(u);
      return o(this, u && u.parenthesis, u && u.implicit) && (m = "\\left(".concat(m, "\\right)")), s + c + "=" + m;
    }
  }
  return dr(f, "name", ma), f;
}, {
  isClass: !0,
  isNode: !0
}), va = "BlockNode", _2 = ["ResultSet", "Node"], $2 = /* @__PURE__ */ q(va, _2, (e) => {
  var {
    ResultSet: r,
    Node: i
  } = e;
  class a extends i {
    /**
     * @constructor BlockNode
     * @extends {Node}
     * Holds a set with blocks
     * @param {Array.<{node: Node} | {node: Node, visible: boolean}>} blocks
     *            An array with blocks, where a block is constructed as an
     *            Object with properties block, which is a Node, and visible,
     *            which is a boolean. The property visible is optional and
     *            is true by default
     */
    constructor(n) {
      if (super(), !Array.isArray(n))
        throw new Error("Array expected");
      this.blocks = n.map(function(o) {
        var f = o && o.node, l = o && o.visible !== void 0 ? o.visible : !0;
        if (!er(f))
          throw new TypeError('Property "node" must be a Node');
        if (typeof l != "boolean")
          throw new TypeError('Property "visible" must be a boolean');
        return {
          node: f,
          visible: l
        };
      });
    }
    get type() {
      return va;
    }
    get isBlockNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      var f = xt(this.blocks, function(l) {
        return {
          evaluate: l.node._compile(n, o),
          visible: l.visible
        };
      });
      return function(u, s, c) {
        var m = [];
        return ja(f, function(d) {
          var p = d.evaluate(u, s, c);
          d.visible && m.push(p);
        }), new r(m);
      };
    }
    /**
     * Execute a callback for each of the child blocks of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      for (var o = 0; o < this.blocks.length; o++)
        n(this.blocks[o].node, "blocks[" + o + "].node", this);
    }
    /**
     * Create a new BlockNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {BlockNode} Returns a transformed copy of the node
     */
    map(n) {
      for (var o = [], f = 0; f < this.blocks.length; f++) {
        var l = this.blocks[f], u = this._ifNode(n(l.node, "blocks[" + f + "].node", this));
        o[f] = {
          node: u,
          visible: l.visible
        };
      }
      return new a(o);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {BlockNode}
     */
    clone() {
      var n = this.blocks.map(function(o) {
        return {
          node: o.node,
          visible: o.visible
        };
      });
      return new a(n);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(n) {
      return this.blocks.map(function(o) {
        return o.node.toString(n) + (o.visible ? "" : ";");
      }).join(`
`);
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: va,
        blocks: this.blocks
      };
    }
    /**
     * Instantiate an BlockNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "BlockNode", blocks: [{node: ..., visible: false}, ...]}`,
     *     where mathjs is optional
     * @returns {BlockNode}
     */
    static fromJSON(n) {
      return new a(n.blocks);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(n) {
      return this.blocks.map(function(o) {
        return o.node.toHTML(n) + (o.visible ? "" : '<span class="math-separator">;</span>');
      }).join('<span class="math-separator"><br /></span>');
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(n) {
      return this.blocks.map(function(o) {
        return o.node.toTex(n) + (o.visible ? "" : ";");
      }).join(`\\;\\;
`);
    }
  }
  return dr(a, "name", va), a;
}, {
  isClass: !0,
  isNode: !0
}), pa = "ConditionalNode", I2 = ["Node"], q2 = /* @__PURE__ */ q(pa, I2, (e) => {
  var {
    Node: r
  } = e;
  function i(t) {
    if (typeof t == "number" || typeof t == "boolean" || typeof t == "string")
      return !!t;
    if (t) {
      if (ze(t))
        return !t.isZero();
      if (bt(t))
        return !!(t.re || t.im);
      if (Yr(t))
        return !!t.value;
    }
    if (t == null)
      return !1;
    throw new TypeError('Unsupported type of condition "' + ar(t) + '"');
  }
  class a extends r {
    /**
     * A lazy evaluating conditional operator: 'condition ? trueExpr : falseExpr'
     *
     * @param {Node} condition   Condition, must result in a boolean
     * @param {Node} trueExpr    Expression evaluated when condition is true
     * @param {Node} falseExpr   Expression evaluated when condition is true
     *
     * @constructor ConditionalNode
     * @extends {Node}
     */
    constructor(n, o, f) {
      if (super(), !er(n))
        throw new TypeError("Parameter condition must be a Node");
      if (!er(o))
        throw new TypeError("Parameter trueExpr must be a Node");
      if (!er(f))
        throw new TypeError("Parameter falseExpr must be a Node");
      this.condition = n, this.trueExpr = o, this.falseExpr = f;
    }
    get type() {
      return pa;
    }
    get isConditionalNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      var f = this.condition._compile(n, o), l = this.trueExpr._compile(n, o), u = this.falseExpr._compile(n, o);
      return function(c, m, v) {
        return i(f(c, m, v)) ? l(c, m, v) : u(c, m, v);
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      n(this.condition, "condition", this), n(this.trueExpr, "trueExpr", this), n(this.falseExpr, "falseExpr", this);
    }
    /**
     * Create a new ConditionalNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {ConditionalNode} Returns a transformed copy of the node
     */
    map(n) {
      return new a(this._ifNode(n(this.condition, "condition", this)), this._ifNode(n(this.trueExpr, "trueExpr", this)), this._ifNode(n(this.falseExpr, "falseExpr", this)));
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {ConditionalNode}
     */
    clone() {
      return new a(this.condition, this.trueExpr, this.falseExpr);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(n) {
      var o = n && n.parenthesis ? n.parenthesis : "keep", f = nr(this, o, n && n.implicit), l = this.condition.toString(n), u = nr(this.condition, o, n && n.implicit);
      (o === "all" || this.condition.type === "OperatorNode" || u !== null && u <= f) && (l = "(" + l + ")");
      var s = this.trueExpr.toString(n), c = nr(this.trueExpr, o, n && n.implicit);
      (o === "all" || this.trueExpr.type === "OperatorNode" || c !== null && c <= f) && (s = "(" + s + ")");
      var m = this.falseExpr.toString(n), v = nr(this.falseExpr, o, n && n.implicit);
      return (o === "all" || this.falseExpr.type === "OperatorNode" || v !== null && v <= f) && (m = "(" + m + ")"), l + " ? " + s + " : " + m;
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: pa,
        condition: this.condition,
        trueExpr: this.trueExpr,
        falseExpr: this.falseExpr
      };
    }
    /**
     * Instantiate an ConditionalNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "ConditionalNode",
     *      "condition": ...,
     *      "trueExpr": ...,
     *      "falseExpr": ...}
     *     ```
     *     where mathjs is optional
     * @returns {ConditionalNode}
     */
    static fromJSON(n) {
      return new a(n.condition, n.trueExpr, n.falseExpr);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(n) {
      var o = n && n.parenthesis ? n.parenthesis : "keep", f = nr(this, o, n && n.implicit), l = this.condition.toHTML(n), u = nr(this.condition, o, n && n.implicit);
      (o === "all" || this.condition.type === "OperatorNode" || u !== null && u <= f) && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>');
      var s = this.trueExpr.toHTML(n), c = nr(this.trueExpr, o, n && n.implicit);
      (o === "all" || this.trueExpr.type === "OperatorNode" || c !== null && c <= f) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>');
      var m = this.falseExpr.toHTML(n), v = nr(this.falseExpr, o, n && n.implicit);
      return (o === "all" || this.falseExpr.type === "OperatorNode" || v !== null && v <= f) && (m = '<span class="math-parenthesis math-round-parenthesis">(</span>' + m + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l + '<span class="math-operator math-conditional-operator">?</span>' + s + '<span class="math-operator math-conditional-operator">:</span>' + m;
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(n) {
      return "\\begin{cases} {" + this.trueExpr.toTex(n) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(n) + "}\\\\{" + this.falseExpr.toTex(n) + "}, &\\quad{\\text{otherwise}}\\end{cases}";
    }
  }
  return dr(a, "name", pa), a;
}, {
  isClass: !0,
  isNode: !0
}), Li = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r];
    for (var a in i)
      Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
  }
  return e;
}, R2 = {
  "{": "\\{",
  "}": "\\}",
  "\\": "\\textbackslash{}",
  "#": "\\#",
  $: "\\$",
  "%": "\\%",
  "&": "\\&",
  "^": "\\textasciicircum{}",
  _: "\\_",
  "~": "\\textasciitilde{}"
}, z2 = {
  "–": "\\--",
  "—": "\\---",
  " ": "~",
  "	": "\\qquad{}",
  "\r\n": "\\newline{}",
  "\n": "\\newline{}"
}, P2 = function(r, i) {
  return Li({}, r, i);
}, U2 = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.preserveFormatting, a = i === void 0 ? !1 : i, t = r.escapeMapFn, n = t === void 0 ? P2 : t, o = String(e), f = "", l = n(Li({}, R2), a ? Li({}, z2) : {}), u = Object.keys(l), s = function() {
    var m = !1;
    u.forEach(function(v, d) {
      m || o.length >= v.length && o.slice(0, v.length) === v && (f += l[u[d]], o = o.slice(v.length, o.length), m = !0);
    }), m || (f += o.slice(0, 1), o = o.slice(1, o.length));
  }; o; )
    s();
  return f;
};
const L2 = /* @__PURE__ */ Xn(U2);
var ki = {
  // GREEK LETTERS
  Alpha: "A",
  alpha: "\\alpha",
  Beta: "B",
  beta: "\\beta",
  Gamma: "\\Gamma",
  gamma: "\\gamma",
  Delta: "\\Delta",
  delta: "\\delta",
  Epsilon: "E",
  epsilon: "\\epsilon",
  varepsilon: "\\varepsilon",
  Zeta: "Z",
  zeta: "\\zeta",
  Eta: "H",
  eta: "\\eta",
  Theta: "\\Theta",
  theta: "\\theta",
  vartheta: "\\vartheta",
  Iota: "I",
  iota: "\\iota",
  Kappa: "K",
  kappa: "\\kappa",
  varkappa: "\\varkappa",
  Lambda: "\\Lambda",
  lambda: "\\lambda",
  Mu: "M",
  mu: "\\mu",
  Nu: "N",
  nu: "\\nu",
  Xi: "\\Xi",
  xi: "\\xi",
  Omicron: "O",
  omicron: "o",
  Pi: "\\Pi",
  pi: "\\pi",
  varpi: "\\varpi",
  Rho: "P",
  rho: "\\rho",
  varrho: "\\varrho",
  Sigma: "\\Sigma",
  sigma: "\\sigma",
  varsigma: "\\varsigma",
  Tau: "T",
  tau: "\\tau",
  Upsilon: "\\Upsilon",
  upsilon: "\\upsilon",
  Phi: "\\Phi",
  phi: "\\phi",
  varphi: "\\varphi",
  Chi: "X",
  chi: "\\chi",
  Psi: "\\Psi",
  psi: "\\psi",
  Omega: "\\Omega",
  omega: "\\omega",
  // logic
  true: "\\mathrm{True}",
  false: "\\mathrm{False}",
  // other
  i: "i",
  // TODO use \i ??
  inf: "\\infty",
  Inf: "\\infty",
  infinity: "\\infty",
  Infinity: "\\infty",
  oo: "\\infty",
  lim: "\\lim",
  undefined: "\\mathbf{?}"
}, Je = {
  transpose: "^\\top",
  ctranspose: "^H",
  factorial: "!",
  pow: "^",
  dotPow: ".^\\wedge",
  // TODO find ideal solution
  unaryPlus: "+",
  unaryMinus: "-",
  bitNot: "\\~",
  // TODO find ideal solution
  not: "\\neg",
  multiply: "\\cdot",
  divide: "\\frac",
  // TODO how to handle that properly?
  dotMultiply: ".\\cdot",
  // TODO find ideal solution
  dotDivide: ".:",
  // TODO find ideal solution
  mod: "\\mod",
  add: "+",
  subtract: "-",
  to: "\\rightarrow",
  leftShift: "<<",
  rightArithShift: ">>",
  rightLogShift: ">>>",
  equal: "=",
  unequal: "\\neq",
  smaller: "<",
  larger: ">",
  smallerEq: "\\leq",
  largerEq: "\\geq",
  bitAnd: "\\&",
  bitXor: "\\underline{|}",
  bitOr: "|",
  and: "\\wedge",
  xor: "\\veebar",
  or: "\\vee"
}, Zl = {
  // arithmetic
  abs: {
    1: "\\left|${args[0]}\\right|"
  },
  add: {
    2: "\\left(${args[0]}".concat(Je.add, "${args[1]}\\right)")
  },
  cbrt: {
    1: "\\sqrt[3]{${args[0]}}"
  },
  ceil: {
    1: "\\left\\lceil${args[0]}\\right\\rceil"
  },
  cube: {
    1: "\\left(${args[0]}\\right)^3"
  },
  divide: {
    2: "\\frac{${args[0]}}{${args[1]}}"
  },
  dotDivide: {
    2: "\\left(${args[0]}".concat(Je.dotDivide, "${args[1]}\\right)")
  },
  dotMultiply: {
    2: "\\left(${args[0]}".concat(Je.dotMultiply, "${args[1]}\\right)")
  },
  dotPow: {
    2: "\\left(${args[0]}".concat(Je.dotPow, "${args[1]}\\right)")
  },
  exp: {
    1: "\\exp\\left(${args[0]}\\right)"
  },
  expm1: "\\left(e".concat(Je.pow, "{${args[0]}}-1\\right)"),
  fix: {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  },
  floor: {
    1: "\\left\\lfloor${args[0]}\\right\\rfloor"
  },
  gcd: "\\gcd\\left(${args}\\right)",
  hypot: "\\hypot\\left(${args}\\right)",
  log: {
    1: "\\ln\\left(${args[0]}\\right)",
    2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
  },
  log10: {
    1: "\\log_{10}\\left(${args[0]}\\right)"
  },
  log1p: {
    1: "\\ln\\left(${args[0]}+1\\right)",
    2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
  },
  log2: "\\log_{2}\\left(${args[0]}\\right)",
  mod: {
    2: "\\left(${args[0]}".concat(Je.mod, "${args[1]}\\right)")
  },
  multiply: {
    2: "\\left(${args[0]}".concat(Je.multiply, "${args[1]}\\right)")
  },
  norm: {
    1: "\\left\\|${args[0]}\\right\\|",
    2: void 0
    // use default template
  },
  nthRoot: {
    2: "\\sqrt[${args[1]}]{${args[0]}}"
  },
  nthRoots: {
    2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
  },
  pow: {
    2: "\\left(${args[0]}\\right)".concat(Je.pow, "{${args[1]}}")
  },
  round: {
    1: "\\left\\lfloor${args[0]}\\right\\rceil",
    2: void 0
    // use default template
  },
  sign: {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  },
  sqrt: {
    1: "\\sqrt{${args[0]}}"
  },
  square: {
    1: "\\left(${args[0]}\\right)^2"
  },
  subtract: {
    2: "\\left(${args[0]}".concat(Je.subtract, "${args[1]}\\right)")
  },
  unaryMinus: {
    1: "".concat(Je.unaryMinus, "\\left(${args[0]}\\right)")
  },
  unaryPlus: {
    1: "".concat(Je.unaryPlus, "\\left(${args[0]}\\right)")
  },
  // bitwise
  bitAnd: {
    2: "\\left(${args[0]}".concat(Je.bitAnd, "${args[1]}\\right)")
  },
  bitNot: {
    1: Je.bitNot + "\\left(${args[0]}\\right)"
  },
  bitOr: {
    2: "\\left(${args[0]}".concat(Je.bitOr, "${args[1]}\\right)")
  },
  bitXor: {
    2: "\\left(${args[0]}".concat(Je.bitXor, "${args[1]}\\right)")
  },
  leftShift: {
    2: "\\left(${args[0]}".concat(Je.leftShift, "${args[1]}\\right)")
  },
  rightArithShift: {
    2: "\\left(${args[0]}".concat(Je.rightArithShift, "${args[1]}\\right)")
  },
  rightLogShift: {
    2: "\\left(${args[0]}".concat(Je.rightLogShift, "${args[1]}\\right)")
  },
  // combinatorics
  bellNumbers: {
    1: "\\mathrm{B}_{${args[0]}}"
  },
  catalan: {
    1: "\\mathrm{C}_{${args[0]}}"
  },
  stirlingS2: {
    2: "\\mathrm{S}\\left(${args}\\right)"
  },
  // complex
  arg: {
    1: "\\arg\\left(${args[0]}\\right)"
  },
  conj: {
    1: "\\left(${args[0]}\\right)^*"
  },
  im: {
    1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
  },
  re: {
    1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
  },
  // logical
  and: {
    2: "\\left(${args[0]}".concat(Je.and, "${args[1]}\\right)")
  },
  not: {
    1: Je.not + "\\left(${args[0]}\\right)"
  },
  or: {
    2: "\\left(${args[0]}".concat(Je.or, "${args[1]}\\right)")
  },
  xor: {
    2: "\\left(${args[0]}".concat(Je.xor, "${args[1]}\\right)")
  },
  // matrix
  cross: {
    2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
  },
  ctranspose: {
    1: "\\left(${args[0]}\\right)".concat(Je.ctranspose)
  },
  det: {
    1: "\\det\\left(${args[0]}\\right)"
  },
  dot: {
    2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
  },
  expm: {
    1: "\\exp\\left(${args[0]}\\right)"
  },
  inv: {
    1: "\\left(${args[0]}\\right)^{-1}"
  },
  pinv: {
    1: "\\left(${args[0]}\\right)^{+}"
  },
  sqrtm: {
    1: "{${args[0]}}".concat(Je.pow, "{\\frac{1}{2}}")
  },
  trace: {
    1: "\\mathrm{tr}\\left(${args[0]}\\right)"
  },
  transpose: {
    1: "\\left(${args[0]}\\right)".concat(Je.transpose)
  },
  // probability
  combinations: {
    2: "\\binom{${args[0]}}{${args[1]}}"
  },
  combinationsWithRep: {
    2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"
  },
  factorial: {
    1: "\\left(${args[0]}\\right)".concat(Je.factorial)
  },
  gamma: {
    1: "\\Gamma\\left(${args[0]}\\right)"
  },
  lgamma: {
    1: "\\ln\\Gamma\\left(${args[0]}\\right)"
  },
  // relational
  equal: {
    2: "\\left(${args[0]}".concat(Je.equal, "${args[1]}\\right)")
  },
  larger: {
    2: "\\left(${args[0]}".concat(Je.larger, "${args[1]}\\right)")
  },
  largerEq: {
    2: "\\left(${args[0]}".concat(Je.largerEq, "${args[1]}\\right)")
  },
  smaller: {
    2: "\\left(${args[0]}".concat(Je.smaller, "${args[1]}\\right)")
  },
  smallerEq: {
    2: "\\left(${args[0]}".concat(Je.smallerEq, "${args[1]}\\right)")
  },
  unequal: {
    2: "\\left(${args[0]}".concat(Je.unequal, "${args[1]}\\right)")
  },
  // special
  erf: {
    1: "erf\\left(${args[0]}\\right)"
  },
  // statistics
  max: "\\max\\left(${args}\\right)",
  min: "\\min\\left(${args}\\right)",
  variance: "\\mathrm{Var}\\left(${args}\\right)",
  // trigonometry
  acos: {
    1: "\\cos^{-1}\\left(${args[0]}\\right)"
  },
  acosh: {
    1: "\\cosh^{-1}\\left(${args[0]}\\right)"
  },
  acot: {
    1: "\\cot^{-1}\\left(${args[0]}\\right)"
  },
  acoth: {
    1: "\\coth^{-1}\\left(${args[0]}\\right)"
  },
  acsc: {
    1: "\\csc^{-1}\\left(${args[0]}\\right)"
  },
  acsch: {
    1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
  },
  asec: {
    1: "\\sec^{-1}\\left(${args[0]}\\right)"
  },
  asech: {
    1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
  },
  asin: {
    1: "\\sin^{-1}\\left(${args[0]}\\right)"
  },
  asinh: {
    1: "\\sinh^{-1}\\left(${args[0]}\\right)"
  },
  atan: {
    1: "\\tan^{-1}\\left(${args[0]}\\right)"
  },
  atan2: {
    2: "\\mathrm{atan2}\\left(${args}\\right)"
  },
  atanh: {
    1: "\\tanh^{-1}\\left(${args[0]}\\right)"
  },
  cos: {
    1: "\\cos\\left(${args[0]}\\right)"
  },
  cosh: {
    1: "\\cosh\\left(${args[0]}\\right)"
  },
  cot: {
    1: "\\cot\\left(${args[0]}\\right)"
  },
  coth: {
    1: "\\coth\\left(${args[0]}\\right)"
  },
  csc: {
    1: "\\csc\\left(${args[0]}\\right)"
  },
  csch: {
    1: "\\mathrm{csch}\\left(${args[0]}\\right)"
  },
  sec: {
    1: "\\sec\\left(${args[0]}\\right)"
  },
  sech: {
    1: "\\mathrm{sech}\\left(${args[0]}\\right)"
  },
  sin: {
    1: "\\sin\\left(${args[0]}\\right)"
  },
  sinh: {
    1: "\\sinh\\left(${args[0]}\\right)"
  },
  tan: {
    1: "\\tan\\left(${args[0]}\\right)"
  },
  tanh: {
    1: "\\tanh\\left(${args[0]}\\right)"
  },
  // unit
  to: {
    2: "\\left(${args[0]}".concat(Je.to, "${args[1]}\\right)")
  },
  // utils
  numeric: function(r, i) {
    return r.args[0].toTex();
  },
  // type
  number: {
    0: "0",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
  },
  string: {
    0: '\\mathtt{""}',
    1: "\\mathrm{string}\\left(${args[0]}\\right)"
  },
  bignumber: {
    0: "0",
    1: "\\left(${args[0]}\\right)"
  },
  complex: {
    0: "0",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)+".concat(ki.i, "\\cdot\\left(${args[1]}\\right)\\right)")
  },
  matrix: {
    0: "\\begin{bmatrix}\\end{bmatrix}",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(${args[0]}\\right)"
  },
  sparse: {
    0: "\\begin{bsparse}\\end{bsparse}",
    1: "\\left(${args[0]}\\right)"
  },
  unit: {
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
  }
}, k2 = "\\mathrm{${name}}\\left(${args}\\right)", Yl = {
  deg: "^\\circ"
};
function Hi(e) {
  return L2(e, {
    preserveFormatting: !0
  });
}
function uv(e, r) {
  return r = typeof r > "u" ? !1 : r, r ? Ee(Yl, e) ? Yl[e] : "\\mathrm{" + Hi(e) + "}" : Ee(ki, e) ? ki[e] : Hi(e);
}
var da = "ConstantNode", H2 = ["Node"], G2 = /* @__PURE__ */ q(da, H2, (e) => {
  var {
    Node: r
  } = e;
  class i extends r {
    /**
     * A ConstantNode holds a constant value like a number or string.
     *
     * Usage:
     *
     *     new ConstantNode(2.3)
     *     new ConstantNode('hello')
     *
     * @param {*} value    Value can be any type (number, BigNumber, string, ...)
     * @constructor ConstantNode
     * @extends {Node}
     */
    constructor(t) {
      super(), this.value = t;
    }
    get type() {
      return da;
    }
    get isConstantNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(t, n) {
      var o = this.value;
      return function() {
        return o;
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(t) {
    }
    /**
     * Create a new ConstantNode with children produced by the given callback.
     * Trivial because there are no children.
     * @param {function(child: Node, path: string, parent: Node) : Node} callback
     * @returns {ConstantNode} Returns a clone of the node
     */
    map(t) {
      return this.clone();
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {ConstantNode}
     */
    clone() {
      return new i(this.value);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(t) {
      return Le(this.value, t);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(t) {
      var n = this._toString(t);
      switch (ar(this.value)) {
        case "number":
        case "BigNumber":
        case "Fraction":
          return '<span class="math-number">' + n + "</span>";
        case "string":
          return '<span class="math-string">' + n + "</span>";
        case "boolean":
          return '<span class="math-boolean">' + n + "</span>";
        case "null":
          return '<span class="math-null-symbol">' + n + "</span>";
        case "undefined":
          return '<span class="math-undefined">' + n + "</span>";
        default:
          return '<span class="math-symbol">' + n + "</span>";
      }
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: da,
        value: this.value
      };
    }
    /**
     * Instantiate a ConstantNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "SymbolNode", value: 2.3}`,
     *                       where mathjs is optional
     * @returns {ConstantNode}
     */
    static fromJSON(t) {
      return new i(t.value);
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(t) {
      var n = this._toString(t), o = ar(this.value);
      switch (o) {
        case "string":
          return "\\mathtt{" + Hi(n) + "}";
        case "number":
        case "BigNumber": {
          var f = o === "BigNumber" ? this.value.isFinite() : isFinite(this.value);
          if (!f)
            return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
          var l = n.toLowerCase().indexOf("e");
          return l !== -1 ? n.substring(0, l) + "\\cdot10^{" + n.substring(l + 1) + "}" : n;
        }
        case "Fraction":
          return this.value.toLatex();
        default:
          return n;
      }
    }
  }
  return dr(i, "name", da), i;
}, {
  isClass: !0,
  isNode: !0
}), ha = "FunctionAssignmentNode", V2 = ["typed", "Node"], Z2 = /* @__PURE__ */ q(ha, V2, (e) => {
  var {
    typed: r,
    Node: i
  } = e;
  function a(n, o, f) {
    var l = nr(n, o, f), u = nr(n.expr, o, f);
    return o === "all" || u !== null && u <= l;
  }
  class t extends i {
    /**
     * @constructor FunctionAssignmentNode
     * @extends {Node}
     * Function assignment
     *
     * @param {string} name           Function name
     * @param {string[] | Array.<{name: string, type: string}>} params
     *                                Array with function parameter names, or an
     *                                array with objects containing the name
     *                                and type of the parameter
     * @param {Node} expr             The function expression
     */
    constructor(o, f, l) {
      if (super(), typeof o != "string")
        throw new TypeError('String expected for parameter "name"');
      if (!Array.isArray(f))
        throw new TypeError('Array containing strings or objects expected for parameter "params"');
      if (!er(l))
        throw new TypeError('Node expected for parameter "expr"');
      if (ov.has(o))
        throw new Error('Illegal function name, "' + o + '" is a reserved keyword');
      var u = /* @__PURE__ */ new Set();
      for (var s of f) {
        var c = typeof s == "string" ? s : s.name;
        if (u.has(c))
          throw new Error('Duplicate parameter name "'.concat(c, '"'));
        u.add(c);
      }
      this.name = o, this.params = f.map(function(m) {
        return m && m.name || m;
      }), this.types = f.map(function(m) {
        return m && m.type || "any";
      }), this.expr = l;
    }
    get type() {
      return ha;
    }
    get isFunctionAssignmentNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(o, f) {
      var l = Object.create(f);
      ja(this.params, function(d) {
        l[d] = !0;
      });
      var u = this.expr._compile(o, l), s = this.name, c = this.params, m = Go(this.types, ","), v = s + "(" + Go(this.params, ", ") + ")";
      return function(p, x, g) {
        var N = {};
        N[m] = function() {
          for (var b = Object.create(x), w = 0; w < c.length; w++)
            b[c[w]] = arguments[w];
          return u(p, b, g);
        };
        var h = r(s, N);
        return h.syntax = v, p.set(s, h), h;
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(o) {
      o(this.expr, "expr", this);
    }
    /**
     * Create a new FunctionAssignmentNode whose children are the results of
     * calling the provided callback function for each child of the original
     * node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {FunctionAssignmentNode} Returns a transformed copy of the node
     */
    map(o) {
      var f = this._ifNode(o(this.expr, "expr", this));
      return new t(this.name, this.params.slice(0), f);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {FunctionAssignmentNode}
     */
    clone() {
      return new t(this.name, this.params.slice(0), this.expr);
    }
    /**
     * get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(o) {
      var f = o && o.parenthesis ? o.parenthesis : "keep", l = this.expr.toString(o);
      return a(this, f, o && o.implicit) && (l = "(" + l + ")"), this.name + "(" + this.params.join(", ") + ") = " + l;
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      var o = this.types;
      return {
        mathjs: ha,
        name: this.name,
        params: this.params.map(function(f, l) {
          return {
            name: f,
            type: o[l]
          };
        }),
        expr: this.expr
      };
    }
    /**
     * Instantiate an FunctionAssignmentNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "FunctionAssignmentNode",
     *      name: ..., params: ..., expr: ...}
     *     ```
     *     where mathjs is optional
     * @returns {FunctionAssignmentNode}
     */
    static fromJSON(o) {
      return new t(o.name, o.params, o.expr);
    }
    /**
     * get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(o) {
      for (var f = o && o.parenthesis ? o.parenthesis : "keep", l = [], u = 0; u < this.params.length; u++)
        l.push('<span class="math-symbol math-parameter">' + Xr(this.params[u]) + "</span>");
      var s = this.expr.toHTML(o);
      return a(this, f, o && o.implicit) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + Xr(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + l.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + s;
    }
    /**
     * get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(o) {
      var f = o && o.parenthesis ? o.parenthesis : "keep", l = this.expr.toTex(o);
      return a(this, f, o && o.implicit) && (l = "\\left(".concat(l, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(uv).join(",") + "\\right)=" + l;
    }
  }
  return dr(t, "name", ha), t;
}, {
  isClass: !0,
  isNode: !0
}), ga = "IndexNode", Y2 = ["Node", "size"], X2 = /* @__PURE__ */ q(ga, Y2, (e) => {
  var {
    Node: r,
    size: i
  } = e;
  class a extends r {
    /**
     * @constructor IndexNode
     * @extends Node
     *
     * Describes a subset of a matrix or an object property.
     * Cannot be used on its own, needs to be used within an AccessorNode or
     * AssignmentNode.
     *
     * @param {Node[]} dimensions
     * @param {boolean} [dotNotation=false]
     *     Optional property describing whether this index was written using dot
     *     notation like `a.b`, or using bracket notation like `a["b"]`
     *     (which is the default). This property is used for string conversion.
     */
    constructor(n, o) {
      if (super(), this.dimensions = n, this.dotNotation = o || !1, !Array.isArray(n) || !n.every(er))
        throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
      if (this.dotNotation && !this.isObjectProperty())
        throw new Error("dotNotation only applicable for object properties");
    }
    get type() {
      return ga;
    }
    get isIndexNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      var f = xt(this.dimensions, function(u, s) {
        var c = u.filter((d) => d.isSymbolNode && d.name === "end").length > 0;
        if (c) {
          var m = Object.create(o);
          m.end = !0;
          var v = u._compile(n, m);
          return function(p, x, g) {
            if (!Fe(g) && !Ke(g) && !Er(g))
              throw new TypeError('Cannot resolve "end": context must be a Matrix, Array, or string but is ' + ar(g));
            var N = i(g).valueOf(), h = Object.create(x);
            return h.end = N[s], v(p, h, g);
          };
        } else
          return u._compile(n, o);
      }), l = Br(n, "index");
      return function(s, c, m) {
        var v = xt(f, function(d) {
          return d(s, c, m);
        });
        return l(...v);
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      for (var o = 0; o < this.dimensions.length; o++)
        n(this.dimensions[o], "dimensions[" + o + "]", this);
    }
    /**
     * Create a new IndexNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {IndexNode} Returns a transformed copy of the node
     */
    map(n) {
      for (var o = [], f = 0; f < this.dimensions.length; f++)
        o[f] = this._ifNode(n(this.dimensions[f], "dimensions[" + f + "]", this));
      return new a(o, this.dotNotation);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {IndexNode}
     */
    clone() {
      return new a(this.dimensions.slice(0), this.dotNotation);
    }
    /**
     * Test whether this IndexNode contains a single property name
     * @return {boolean}
     */
    isObjectProperty() {
      return this.dimensions.length === 1 && Xe(this.dimensions[0]) && typeof this.dimensions[0].value == "string";
    }
    /**
     * Returns the property name if IndexNode contains a property.
     * If not, returns null.
     * @return {string | null}
     */
    getObjectProperty() {
      return this.isObjectProperty() ? this.dimensions[0].value : null;
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(n) {
      return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: ga,
        dimensions: this.dimensions,
        dotNotation: this.dotNotation
      };
    }
    /**
     * Instantiate an IndexNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "IndexNode", dimensions: [...], dotNotation: false}`,
     *     where mathjs is optional
     * @returns {IndexNode}
     */
    static fromJSON(n) {
      return new a(n.dimensions, n.dotNotation);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(n) {
      for (var o = [], f = 0; f < this.dimensions.length; f++)
        o[f] = this.dimensions[f].toHTML();
      return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + Xr(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + o.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(n) {
      var o = this.dimensions.map(function(f) {
        return f.toTex(n);
      });
      return this.dotNotation ? "." + this.getObjectProperty() : "_{" + o.join(",") + "}";
    }
  }
  return dr(a, "name", ga), a;
}, {
  isClass: !0,
  isNode: !0
}), ya = "ObjectNode", W2 = ["Node"], J2 = /* @__PURE__ */ q(ya, W2, (e) => {
  var {
    Node: r
  } = e;
  class i extends r {
    /**
     * @constructor ObjectNode
     * @extends {Node}
     * Holds an object with keys/values
     * @param {Object.<string, Node>} [properties]   object with key/value pairs
     */
    constructor(t) {
      if (super(), this.properties = t || {}, t && (typeof t != "object" || !Object.keys(t).every(function(n) {
        return er(t[n]);
      })))
        throw new TypeError("Object containing Nodes expected");
    }
    get type() {
      return ya;
    }
    get isObjectNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(t, n) {
      var o = {};
      for (var f in this.properties)
        if (Ee(this.properties, f)) {
          var l = ln(f), u = JSON.parse(l), s = Br(this.properties, f);
          o[u] = s._compile(t, n);
        }
      return function(m, v, d) {
        var p = {};
        for (var x in o)
          Ee(o, x) && (p[x] = o[x](m, v, d));
        return p;
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(t) {
      for (var n in this.properties)
        Ee(this.properties, n) && t(this.properties[n], "properties[" + ln(n) + "]", this);
    }
    /**
     * Create a new ObjectNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {ObjectNode} Returns a transformed copy of the node
     */
    map(t) {
      var n = {};
      for (var o in this.properties)
        Ee(this.properties, o) && (n[o] = this._ifNode(t(this.properties[o], "properties[" + ln(o) + "]", this)));
      return new i(n);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {ObjectNode}
     */
    clone() {
      var t = {};
      for (var n in this.properties)
        Ee(this.properties, n) && (t[n] = this.properties[n]);
      return new i(t);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(t) {
      var n = [];
      for (var o in this.properties)
        Ee(this.properties, o) && n.push(ln(o) + ": " + this.properties[o].toString(t));
      return "{" + n.join(", ") + "}";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: ya,
        properties: this.properties
      };
    }
    /**
     * Instantiate an OperatorNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "ObjectNode", "properties": {...}}`,
     *                       where mathjs is optional
     * @returns {ObjectNode}
     */
    static fromJSON(t) {
      return new i(t.properties);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(t) {
      var n = [];
      for (var o in this.properties)
        Ee(this.properties, o) && n.push('<span class="math-symbol math-property">' + Xr(o) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[o].toHTML(t));
      return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + n.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(t) {
      var n = [];
      for (var o in this.properties)
        Ee(this.properties, o) && n.push("\\mathbf{" + o + ":} & " + this.properties[o].toTex(t) + "\\\\");
      var f = "\\left\\{\\begin{array}{ll}" + n.join(`
`) + "\\end{array}\\right\\}";
      return f;
    }
  }
  return dr(i, "name", ya), i;
}, {
  isClass: !0,
  isNode: !0
});
function kn(e, r) {
  return new Cf(e, new ei(r), new Set(Object.keys(r)));
}
var ba = "OperatorNode", Q2 = ["Node"], K2 = /* @__PURE__ */ q(ba, Q2, (e) => {
  var {
    Node: r
  } = e;
  function i(n, o) {
    var f = n;
    if (o === "auto")
      for (; wt(f); )
        f = f.content;
    return Xe(f) ? !0 : mr(f) ? i(f.args[0], o) : !1;
  }
  function a(n, o, f, l, u) {
    var s = nr(n, o, f), c = Un(n, o);
    if (o === "all" || l.length > 2 && n.getIdentifier() !== "OperatorNode:add" && n.getIdentifier() !== "OperatorNode:multiply")
      return l.map(function(E) {
        switch (E.getContent().type) {
          case "ArrayNode":
          case "ConstantNode":
          case "SymbolNode":
          case "ParenthesisNode":
            return !1;
          default:
            return !0;
        }
      });
    var m;
    switch (l.length) {
      case 0:
        m = [];
        break;
      case 1:
        {
          var v = nr(l[0], o, f, n);
          if (u && v !== null) {
            var d, p;
            if (o === "keep" ? (d = l[0].getIdentifier(), p = n.getIdentifier()) : (d = l[0].getContent().getIdentifier(), p = n.getContent().getIdentifier()), et[s][p].latexLeftParens === !1) {
              m = [!1];
              break;
            }
            if (et[v][d].latexParens === !1) {
              m = [!1];
              break;
            }
          }
          if (v === null) {
            m = [!1];
            break;
          }
          if (v <= s) {
            m = [!0];
            break;
          }
          m = [!1];
        }
        break;
      case 2:
        {
          var x, g = nr(l[0], o, f, n), N = Si(n, l[0], o);
          g === null ? x = !1 : g === s && c === "right" && !N || g < s ? x = !0 : x = !1;
          var h, b = nr(l[1], o, f, n), w = Si(n, l[1], o);
          if (b === null ? h = !1 : b === s && c === "left" && !w || b < s ? h = !0 : h = !1, u) {
            var y, A, S;
            o === "keep" ? (y = n.getIdentifier(), A = n.args[0].getIdentifier(), S = n.args[1].getIdentifier()) : (y = n.getContent().getIdentifier(), A = n.args[0].getContent().getIdentifier(), S = n.args[1].getContent().getIdentifier()), g !== null && (et[s][y].latexLeftParens === !1 && (x = !1), et[g][A].latexParens === !1 && (x = !1)), b !== null && (et[s][y].latexRightParens === !1 && (h = !1), et[b][S].latexParens === !1 && (h = !1));
          }
          m = [x, h];
        }
        break;
      default:
        (n.getIdentifier() === "OperatorNode:add" || n.getIdentifier() === "OperatorNode:multiply") && (m = l.map(function(E) {
          var C = nr(E, o, f, n), F = Si(n, E, o), _ = Un(E, o);
          return C === null ? !1 : s === C && c === _ && !F ? !0 : C < s;
        }));
        break;
    }
    if (l.length >= 2 && n.getIdentifier() === "OperatorNode:multiply" && n.implicit && o !== "all" && f === "hide")
      for (var D = 1; D < m.length; ++D)
        i(l[D], o) && !m[D - 1] && (o !== "keep" || !wt(l[D - 1])) && (m[D] = !0);
    return m;
  }
  class t extends r {
    /**
     * @constructor OperatorNode
     * @extends {Node}
     * An operator with two arguments, like 2+3
     *
     * @param {string} op           Operator name, for example '+'
     * @param {string} fn           Function name, for example 'add'
     * @param {Node[]} args         Operator arguments
     * @param {boolean} [implicit]  Is this an implicit multiplication?
     * @param {boolean} [isPercentage] Is this an percentage Operation?
     */
    constructor(o, f, l, u, s) {
      if (super(), typeof o != "string")
        throw new TypeError('string expected for parameter "op"');
      if (typeof f != "string")
        throw new TypeError('string expected for parameter "fn"');
      if (!Array.isArray(l) || !l.every(er))
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      this.implicit = u === !0, this.isPercentage = s === !0, this.op = o, this.fn = f, this.args = l || [];
    }
    get type() {
      return ba;
    }
    get isOperatorNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(o, f) {
      if (typeof this.fn != "string" || !Wi(o, this.fn))
        throw o[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
      var l = Br(o, this.fn), u = xt(this.args, function(d) {
        return d._compile(o, f);
      });
      if (typeof l == "function" && l.rawArgs === !0) {
        var s = this.args;
        return function(p, x, g) {
          return l(s, o, kn(p, x));
        };
      } else if (u.length === 1) {
        var c = u[0];
        return function(p, x, g) {
          return l(c(p, x, g));
        };
      } else if (u.length === 2) {
        var m = u[0], v = u[1];
        return function(p, x, g) {
          return l(m(p, x, g), v(p, x, g));
        };
      } else
        return function(p, x, g) {
          return l.apply(null, xt(u, function(N) {
            return N(p, x, g);
          }));
        };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(o) {
      for (var f = 0; f < this.args.length; f++)
        o(this.args[f], "args[" + f + "]", this);
    }
    /**
     * Create a new OperatorNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {OperatorNode} Returns a transformed copy of the node
     */
    map(o) {
      for (var f = [], l = 0; l < this.args.length; l++)
        f[l] = this._ifNode(o(this.args[l], "args[" + l + "]", this));
      return new t(this.op, this.fn, f, this.implicit, this.isPercentage);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {OperatorNode}
     */
    clone() {
      return new t(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage);
    }
    /**
     * Check whether this is an unary OperatorNode:
     * has exactly one argument, like `-a`.
     * @return {boolean}
     *     Returns true when an unary operator node, false otherwise.
     */
    isUnary() {
      return this.args.length === 1;
    }
    /**
     * Check whether this is a binary OperatorNode:
     * has exactly two arguments, like `a + b`.
     * @return {boolean}
     *     Returns true when a binary operator node, false otherwise.
     */
    isBinary() {
      return this.args.length === 2;
    }
    /**
     * Get string representation.
     * @param {Object} options
     * @return {string} str
     */
    _toString(o) {
      var f = o && o.parenthesis ? o.parenthesis : "keep", l = o && o.implicit ? o.implicit : "hide", u = this.args, s = a(this, f, l, u, !1);
      if (u.length === 1) {
        var c = Un(this, f), m = u[0].toString(o);
        s[0] && (m = "(" + m + ")");
        var v = /[a-zA-Z]+/.test(this.op);
        return c === "right" ? this.op + (v ? " " : "") + m : c === "left" ? m + (v ? " " : "") + this.op : m + this.op;
      } else if (u.length === 2) {
        var d = u[0].toString(o), p = u[1].toString(o);
        return s[0] && (d = "(" + d + ")"), s[1] && (p = "(" + p + ")"), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && l === "hide" ? d + " " + p : d + " " + this.op + " " + p;
      } else if (u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var x = u.map(function(g, N) {
          return g = g.toString(o), s[N] && (g = "(" + g + ")"), g;
        });
        return this.implicit && this.getIdentifier() === "OperatorNode:multiply" && l === "hide" ? x.join(" ") : x.join(" " + this.op + " ");
      } else
        return this.fn + "(" + this.args.join(", ") + ")";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: ba,
        op: this.op,
        fn: this.fn,
        args: this.args,
        implicit: this.implicit,
        isPercentage: this.isPercentage
      };
    }
    /**
     * Instantiate an OperatorNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "OperatorNode",
     *      "op": "+", "fn": "add", "args": [...],
     *      "implicit": false,
     *      "isPercentage":false}
     *     ```
     *     where mathjs is optional
     * @returns {OperatorNode}
     */
    static fromJSON(o) {
      return new t(o.op, o.fn, o.args, o.implicit, o.isPercentage);
    }
    /**
     * Get HTML representation.
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(o) {
      var f = o && o.parenthesis ? o.parenthesis : "keep", l = o && o.implicit ? o.implicit : "hide", u = this.args, s = a(this, f, l, u, !1);
      if (u.length === 1) {
        var c = Un(this, f), m = u[0].toHTML(o);
        return s[0] && (m = '<span class="math-parenthesis math-round-parenthesis">(</span>' + m + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c === "right" ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + Xr(this.op) + "</span>" + m : m + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + Xr(this.op) + "</span>";
      } else if (u.length === 2) {
        var v = u[0].toHTML(o), d = u[1].toHTML(o);
        return s[0] && (v = '<span class="math-parenthesis math-round-parenthesis">(</span>' + v + '<span class="math-parenthesis math-round-parenthesis">)</span>'), s[1] && (d = '<span class="math-parenthesis math-round-parenthesis">(</span>' + d + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && l === "hide" ? v + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + d : v + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Xr(this.op) + "</span>" + d;
      } else {
        var p = u.map(function(x, g) {
          return x = x.toHTML(o), s[g] && (x = '<span class="math-parenthesis math-round-parenthesis">(</span>' + x + '<span class="math-parenthesis math-round-parenthesis">)</span>'), x;
        });
        return u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply") ? this.implicit && this.getIdentifier() === "OperatorNode:multiply" && l === "hide" ? p.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : p.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Xr(this.op) + "</span>") : '<span class="math-function">' + Xr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + p.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(o) {
      var f = o && o.parenthesis ? o.parenthesis : "keep", l = o && o.implicit ? o.implicit : "hide", u = this.args, s = a(this, f, l, u, !0), c = Je[this.fn];
      if (c = typeof c > "u" ? this.op : c, u.length === 1) {
        var m = Un(this, f), v = u[0].toTex(o);
        return s[0] && (v = "\\left(".concat(v, "\\right)")), m === "right" ? c + v : v + c;
      } else if (u.length === 2) {
        var d = u[0], p = d.toTex(o);
        s[0] && (p = "\\left(".concat(p, "\\right)"));
        var x = u[1], g = x.toTex(o);
        s[1] && (g = "\\left(".concat(g, "\\right)"));
        var N;
        switch (f === "keep" ? N = d.getIdentifier() : N = d.getContent().getIdentifier(), this.getIdentifier()) {
          case "OperatorNode:divide":
            return c + "{" + p + "}{" + g + "}";
          case "OperatorNode:pow":
            switch (p = "{" + p + "}", g = "{" + g + "}", N) {
              case "ConditionalNode":
              case "OperatorNode:divide":
                p = "\\left(".concat(p, "\\right)");
            }
            break;
          case "OperatorNode:multiply":
            if (this.implicit && l === "hide")
              return p + "~" + g;
        }
        return p + c + g;
      } else if (u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var h = u.map(function(b, w) {
          return b = b.toTex(o), s[w] && (b = "\\left(".concat(b, "\\right)")), b;
        });
        return this.getIdentifier() === "OperatorNode:multiply" && this.implicit && l === "hide" ? h.join("~") : h.join(c);
      } else
        return "\\mathrm{" + this.fn + "}\\left(" + u.map(function(b) {
          return b.toTex(o);
        }).join(",") + "\\right)";
    }
    /**
     * Get identifier.
     * @return {string}
     */
    getIdentifier() {
      return this.type + ":" + this.fn;
    }
  }
  return dr(t, "name", ba), t;
}, {
  isClass: !0,
  isNode: !0
}), xa = "ParenthesisNode", j2 = ["Node"], eD = /* @__PURE__ */ q(xa, j2, (e) => {
  var {
    Node: r
  } = e;
  class i extends r {
    /**
     * @constructor ParenthesisNode
     * @extends {Node}
     * A parenthesis node describes manual parenthesis from the user input
     * @param {Node} content
     * @extends {Node}
     */
    constructor(t) {
      if (super(), !er(t))
        throw new TypeError('Node expected for parameter "content"');
      this.content = t;
    }
    get type() {
      return xa;
    }
    get isParenthesisNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(t, n) {
      return this.content._compile(t, n);
    }
    /**
     * Get the content of the current Node.
     * @return {Node} content
     * @override
     **/
    getContent() {
      return this.content.getContent();
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(t) {
      t(this.content, "content", this);
    }
    /**
     * Create a new ParenthesisNode whose child is the result of calling
     * the provided callback function on the child of this node.
     * @param {function(child: Node, path: string, parent: Node) : Node} callback
     * @returns {ParenthesisNode} Returns a clone of the node
     */
    map(t) {
      var n = t(this.content, "content", this);
      return new i(n);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {ParenthesisNode}
     */
    clone() {
      return new i(this.content);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(t) {
      return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? "(" + this.content.toString(t) + ")" : this.content.toString(t);
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: xa,
        content: this.content
      };
    }
    /**
     * Instantiate an ParenthesisNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "ParenthesisNode", "content": ...}`,
     *                       where mathjs is optional
     * @returns {ParenthesisNode}
     */
    static fromJSON(t) {
      return new i(t.content);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(t) {
      return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(t) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(t);
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toTex(t) {
      return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? "\\left(".concat(this.content.toTex(t), "\\right)") : this.content.toTex(t);
    }
  }
  return dr(i, "name", xa), i;
}, {
  isClass: !0,
  isNode: !0
}), wa = "RangeNode", rD = ["Node"], tD = /* @__PURE__ */ q(wa, rD, (e) => {
  var {
    Node: r
  } = e;
  function i(t, n, o) {
    var f = nr(t, n, o), l = {}, u = nr(t.start, n, o);
    if (l.start = u !== null && u <= f || n === "all", t.step) {
      var s = nr(t.step, n, o);
      l.step = s !== null && s <= f || n === "all";
    }
    var c = nr(t.end, n, o);
    return l.end = c !== null && c <= f || n === "all", l;
  }
  class a extends r {
    /**
     * @constructor RangeNode
     * @extends {Node}
     * create a range
     * @param {Node} start  included lower-bound
     * @param {Node} end    included upper-bound
     * @param {Node} [step] optional step
     */
    constructor(n, o, f) {
      if (super(), !er(n))
        throw new TypeError("Node expected");
      if (!er(o))
        throw new TypeError("Node expected");
      if (f && !er(f))
        throw new TypeError("Node expected");
      if (arguments.length > 3)
        throw new Error("Too many arguments");
      this.start = n, this.end = o, this.step = f || null;
    }
    get type() {
      return wa;
    }
    get isRangeNode() {
      return !0;
    }
    /**
     * Check whether the RangeNode needs the `end` symbol to be defined.
     * This end is the size of the Matrix in current dimension.
     * @return {boolean}
     */
    needsEnd() {
      var n = this.filter(function(o) {
        return yr(o) && o.name === "end";
      });
      return n.length > 0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      var f = n.range, l = this.start._compile(n, o), u = this.end._compile(n, o);
      if (this.step) {
        var s = this.step._compile(n, o);
        return function(m, v, d) {
          return f(l(m, v, d), u(m, v, d), s(m, v, d));
        };
      } else
        return function(m, v, d) {
          return f(l(m, v, d), u(m, v, d));
        };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      n(this.start, "start", this), n(this.end, "end", this), this.step && n(this.step, "step", this);
    }
    /**
     * Create a new RangeNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {RangeNode} Returns a transformed copy of the node
     */
    map(n) {
      return new a(this._ifNode(n(this.start, "start", this)), this._ifNode(n(this.end, "end", this)), this.step && this._ifNode(n(this.step, "step", this)));
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {RangeNode}
     */
    clone() {
      return new a(this.start, this.end, this.step && this.step);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(n) {
      var o = n && n.parenthesis ? n.parenthesis : "keep", f = i(this, o, n && n.implicit), l, u = this.start.toString(n);
      if (f.start && (u = "(" + u + ")"), l = u, this.step) {
        var s = this.step.toString(n);
        f.step && (s = "(" + s + ")"), l += ":" + s;
      }
      var c = this.end.toString(n);
      return f.end && (c = "(" + c + ")"), l += ":" + c, l;
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: wa,
        start: this.start,
        end: this.end,
        step: this.step
      };
    }
    /**
     * Instantiate an RangeNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "RangeNode", "start": ..., "end": ..., "step": ...}`,
     *     where mathjs is optional
     * @returns {RangeNode}
     */
    static fromJSON(n) {
      return new a(n.start, n.end, n.step);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(n) {
      var o = n && n.parenthesis ? n.parenthesis : "keep", f = i(this, o, n && n.implicit), l, u = this.start.toHTML(n);
      if (f.start && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l = u, this.step) {
        var s = this.step.toHTML(n);
        f.step && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l += '<span class="math-operator math-range-operator">:</span>' + s;
      }
      var c = this.end.toHTML(n);
      return f.end && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l += '<span class="math-operator math-range-operator">:</span>' + c, l;
    }
    /**
     * Get LaTeX representation
     * @params {Object} options
     * @return {string} str
     */
    _toTex(n) {
      var o = n && n.parenthesis ? n.parenthesis : "keep", f = i(this, o, n && n.implicit), l = this.start.toTex(n);
      if (f.start && (l = "\\left(".concat(l, "\\right)")), this.step) {
        var u = this.step.toTex(n);
        f.step && (u = "\\left(".concat(u, "\\right)")), l += ":" + u;
      }
      var s = this.end.toTex(n);
      return f.end && (s = "\\left(".concat(s, "\\right)")), l += ":" + s, l;
    }
  }
  return dr(a, "name", wa), a;
}, {
  isClass: !0,
  isNode: !0
}), Na = "RelationalNode", nD = ["Node"], aD = /* @__PURE__ */ q(Na, nD, (e) => {
  var {
    Node: r
  } = e, i = {
    equal: "==",
    unequal: "!=",
    smaller: "<",
    larger: ">",
    smallerEq: "<=",
    largerEq: ">="
  };
  class a extends r {
    /**
     * A node representing a chained conditional expression, such as 'x > y > z'
     *
     * @param {String[]} conditionals
     *     An array of conditional operators used to compare the parameters
     * @param {Node[]} params
     *     The parameters that will be compared
     *
     * @constructor RelationalNode
     * @extends {Node}
     */
    constructor(n, o) {
      if (super(), !Array.isArray(n))
        throw new TypeError("Parameter conditionals must be an array");
      if (!Array.isArray(o))
        throw new TypeError("Parameter params must be an array");
      if (n.length !== o.length - 1)
        throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
      this.conditionals = n, this.params = o;
    }
    get type() {
      return Na;
    }
    get isRelationalNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(n, o) {
      var f = this, l = this.params.map((u) => u._compile(n, o));
      return function(s, c, m) {
        for (var v, d = l[0](s, c, m), p = 0; p < f.conditionals.length; p++) {
          v = d, d = l[p + 1](s, c, m);
          var x = Br(n, f.conditionals[p]);
          if (!x(v, d))
            return !1;
        }
        return !0;
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(n) {
      this.params.forEach((o, f) => n(o, "params[" + f + "]", this), this);
    }
    /**
     * Create a new RelationalNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {RelationalNode} Returns a transformed copy of the node
     */
    map(n) {
      return new a(this.conditionals.slice(), this.params.map((o, f) => this._ifNode(n(o, "params[" + f + "]", this)), this));
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {RelationalNode}
     */
    clone() {
      return new a(this.conditionals, this.params);
    }
    /**
     * Get string representation.
     * @param {Object} options
     * @return {string} str
     */
    _toString(n) {
      for (var o = n && n.parenthesis ? n.parenthesis : "keep", f = nr(this, o, n && n.implicit), l = this.params.map(function(c, m) {
        var v = nr(c, o, n && n.implicit);
        return o === "all" || v !== null && v <= f ? "(" + c.toString(n) + ")" : c.toString(n);
      }), u = l[0], s = 0; s < this.conditionals.length; s++)
        u += " " + i[this.conditionals[s]], u += " " + l[s + 1];
      return u;
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: Na,
        conditionals: this.conditionals,
        params: this.params
      };
    }
    /**
     * Instantiate a RelationalNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "RelationalNode", "conditionals": ..., "params": ...}`,
     *     where mathjs is optional
     * @returns {RelationalNode}
     */
    static fromJSON(n) {
      return new a(n.conditionals, n.params);
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(n) {
      for (var o = n && n.parenthesis ? n.parenthesis : "keep", f = nr(this, o, n && n.implicit), l = this.params.map(function(c, m) {
        var v = nr(c, o, n && n.implicit);
        return o === "all" || v !== null && v <= f ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + c.toHTML(n) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : c.toHTML(n);
      }), u = l[0], s = 0; s < this.conditionals.length; s++)
        u += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Xr(i[this.conditionals[s]]) + "</span>" + l[s + 1];
      return u;
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(n) {
      for (var o = n && n.parenthesis ? n.parenthesis : "keep", f = nr(this, o, n && n.implicit), l = this.params.map(function(c, m) {
        var v = nr(c, o, n && n.implicit);
        return o === "all" || v !== null && v <= f ? "\\left(" + c.toTex(n) + "\right)" : c.toTex(n);
      }), u = l[0], s = 0; s < this.conditionals.length; s++)
        u += Je[this.conditionals[s]] + l[s + 1];
      return u;
    }
  }
  return dr(a, "name", Na), a;
}, {
  isClass: !0,
  isNode: !0
}), iD = "SymbolNode", oD = ["math", "?Unit", "Node"], sD = /* @__PURE__ */ q(iD, oD, (e) => {
  var {
    math: r,
    Unit: i,
    Node: a
  } = e;
  function t(o) {
    return i ? i.isValuelessUnit(o) : !1;
  }
  class n extends a {
    /**
     * @constructor SymbolNode
     * @extends {Node}
     * A symbol node can hold and resolve a symbol
     * @param {string} name
     * @extends {Node}
     */
    constructor(f) {
      if (super(), typeof f != "string")
        throw new TypeError('String expected for parameter "name"');
      this.name = f;
    }
    get type() {
      return "SymbolNode";
    }
    get isSymbolNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(f, l) {
      var u = this.name;
      if (l[u] === !0)
        return function(c, m, v) {
          return Br(m, u);
        };
      if (u in f)
        return function(c, m, v) {
          return c.has(u) ? c.get(u) : Br(f, u);
        };
      var s = t(u);
      return function(c, m, v) {
        return c.has(u) ? c.get(u) : s ? new i(null, u) : n.onUndefinedSymbol(u);
      };
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(f) {
    }
    /**
     * Create a new SymbolNode with children produced by the given callback.
     * Trivial since a SymbolNode has no children
     * @param {function(child: Node, path: string, parent: Node) : Node} callback
     * @returns {SymbolNode} Returns a clone of the node
     */
    map(f) {
      return this.clone();
    }
    /**
     * Throws an error 'Undefined symbol {name}'
     * @param {string} name
     */
    static onUndefinedSymbol(f) {
      throw new Error("Undefined symbol " + f);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {SymbolNode}
     */
    clone() {
      return new n(this.name);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(f) {
      return this.name;
    }
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(f) {
      var l = Xr(this.name);
      return l === "true" || l === "false" ? '<span class="math-symbol math-boolean">' + l + "</span>" : l === "i" ? '<span class="math-symbol math-imaginary-symbol">' + l + "</span>" : l === "Infinity" ? '<span class="math-symbol math-infinity-symbol">' + l + "</span>" : l === "NaN" ? '<span class="math-symbol math-nan-symbol">' + l + "</span>" : l === "null" ? '<span class="math-symbol math-null-symbol">' + l + "</span>" : l === "undefined" ? '<span class="math-symbol math-undefined-symbol">' + l + "</span>" : '<span class="math-symbol">' + l + "</span>";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: "SymbolNode",
        name: this.name
      };
    }
    /**
     * Instantiate a SymbolNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "SymbolNode", name: "x"}`,
     *                       where mathjs is optional
     * @returns {SymbolNode}
     */
    static fromJSON(f) {
      return new n(f.name);
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toTex(f) {
      var l = !1;
      typeof r[this.name] > "u" && t(this.name) && (l = !0);
      var u = uv(this.name, l);
      return u[0] === "\\" ? u : " " + u;
    }
  }
  return n;
}, {
  isClass: !0,
  isNode: !0
}), Da = "FunctionNode", uD = ["math", "Node", "SymbolNode"], lD = /* @__PURE__ */ q(Da, uD, (e) => {
  var r, {
    math: i,
    Node: a,
    SymbolNode: t
  } = e, n = (l) => Le(l, {
    truncate: 78
  });
  function o(l, u, s) {
    for (var c = "", m = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, v = 0, d; (d = m.exec(l)) !== null; )
      if (c += l.substring(v, d.index), v = d.index, d[0] === "$$")
        c += "$", v++;
      else {
        v += d[0].length;
        var p = u[d[1]];
        if (!p)
          throw new ReferenceError("Template: Property " + d[1] + " does not exist.");
        if (d[2] === void 0)
          switch (typeof p) {
            case "string":
              c += p;
              break;
            case "object":
              if (er(p))
                c += p.toTex(s);
              else if (Array.isArray(p))
                c += p.map(function(x, g) {
                  if (er(x))
                    return x.toTex(s);
                  throw new TypeError("Template: " + d[1] + "[" + g + "] is not a Node.");
                }).join(",");
              else
                throw new TypeError("Template: " + d[1] + " has to be a Node, String or array of Nodes");
              break;
            default:
              throw new TypeError("Template: " + d[1] + " has to be a Node, String or array of Nodes");
          }
        else if (er(p[d[2]] && p[d[2]]))
          c += p[d[2]].toTex(s);
        else
          throw new TypeError("Template: " + d[1] + "[" + d[2] + "] is not a Node.");
      }
    return c += l.slice(v), c;
  }
  class f extends a {
    /**
     * @constructor FunctionNode
     * @extends {./Node}
     * invoke a list with arguments on a node
     * @param {./Node | string} fn
     *     Item resolving to a function on which to invoke
     *     the arguments, typically a SymboNode or AccessorNode
     * @param {./Node[]} args
     */
    constructor(u, s) {
      if (super(), typeof u == "string" && (u = new t(u)), !er(u))
        throw new TypeError('Node expected as parameter "fn"');
      if (!Array.isArray(s) || !s.every(er))
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      this.fn = u, this.args = s || [];
    }
    // readonly property name
    get name() {
      return this.fn.name || "";
    }
    get type() {
      return Da;
    }
    get isFunctionNode() {
      return !0;
    }
    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(u, s) {
      var c = this.args.map((S) => S._compile(u, s));
      if (yr(this.fn)) {
        var m = this.fn.name;
        if (s[m]) {
          var g = this.args;
          return function(D, E, C) {
            var F = Br(E, m);
            if (typeof F != "function")
              throw new TypeError("Argument '".concat(m, "' was not a function; received: ").concat(n(F)));
            if (F.rawArgs)
              return F(g, u, kn(D, E));
            var _ = c.map((I) => I(D, E, C));
            return F.apply(F, _);
          };
        } else {
          var v = m in u ? Br(u, m) : void 0, d = typeof v == "function" && v.rawArgs === !0, p = (S) => {
            var D;
            if (S.has(m))
              D = S.get(m);
            else if (m in u)
              D = Br(u, m);
            else
              return f.onUndefinedFunction(m);
            if (typeof D == "function")
              return D;
            throw new TypeError("'".concat(m, `' is not a function; its value is:
  `).concat(n(D)));
          };
          if (d) {
            var x = this.args;
            return function(D, E, C) {
              var F = p(D);
              return F(x, u, kn(D, E));
            };
          } else
            switch (c.length) {
              case 0:
                return function(D, E, C) {
                  var F = p(D);
                  return F();
                };
              case 1:
                return function(D, E, C) {
                  var F = p(D), _ = c[0];
                  return F(_(D, E, C));
                };
              case 2:
                return function(D, E, C) {
                  var F = p(D), _ = c[0], I = c[1];
                  return F(_(D, E, C), I(D, E, C));
                };
              default:
                return function(D, E, C) {
                  var F = p(D), _ = c.map((I) => I(D, E, C));
                  return F(..._);
                };
            }
        }
      } else if (Ht(this.fn) && Nn(this.fn.index) && this.fn.index.isObjectProperty()) {
        var N = this.fn.object._compile(u, s), h = this.fn.index.getObjectProperty(), b = this.args;
        return function(D, E, C) {
          var F = N(D, E, C), _ = Id(F, h);
          if (_ != null && _.rawArgs)
            return _(b, u, kn(D, E));
          var I = c.map(($) => $(D, E, C));
          return _.apply(F, I);
        };
      } else {
        var w = this.fn.toString(), y = this.fn._compile(u, s), A = this.args;
        return function(D, E, C) {
          var F = y(D, E, C);
          if (typeof F != "function")
            throw new TypeError("Expression '".concat(w, "' did not evaluate to a function; value is:") + `
  `.concat(n(F)));
          if (F.rawArgs)
            return F(A, u, kn(D, E));
          var _ = c.map((I) => I(D, E, C));
          return F.apply(F, _);
        };
      }
    }
    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(u) {
      u(this.fn, "fn", this);
      for (var s = 0; s < this.args.length; s++)
        u(this.args[s], "args[" + s + "]", this);
    }
    /**
     * Create a new FunctionNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {FunctionNode} Returns a transformed copy of the node
     */
    map(u) {
      for (var s = this._ifNode(u(this.fn, "fn", this)), c = [], m = 0; m < this.args.length; m++)
        c[m] = this._ifNode(u(this.args[m], "args[" + m + "]", this));
      return new f(s, c);
    }
    /**
     * Create a clone of this node, a shallow copy
     * @return {FunctionNode}
     */
    clone() {
      return new f(this.fn, this.args.slice(0));
    }
    /**
     * Throws an error 'Undefined function {name}'
     * @param {string} name
     */
    /**
     * Get string representation. (wrapper function)
     * This overrides parts of Node's toString function.
     * If callback is an object containing callbacks, it
     * calls the correct callback for the current node,
     * otherwise it falls back to calling Node's toString
     * function.
     *
     * @param {Object} options
     * @return {string} str
     * @override
     */
    toString(u) {
      var s, c = this.fn.toString(u);
      return u && typeof u.handler == "object" && Ee(u.handler, c) && (s = u.handler[c](this, u)), typeof s < "u" ? s : super.toString(u);
    }
    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(u) {
      var s = this.args.map(function(m) {
        return m.toString(u);
      }), c = Jn(this.fn) ? "(" + this.fn.toString(u) + ")" : this.fn.toString(u);
      return c + "(" + s.join(", ") + ")";
    }
    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: Da,
        fn: this.fn,
        args: this.args
      };
    }
    /**
     * Instantiate an AssignmentNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "FunctionNode", fn: ..., args: ...}`,
     *                       where mathjs is optional
     * @returns {FunctionNode}
     */
    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(u) {
      var s = this.args.map(function(c) {
        return c.toHTML(u);
      });
      return '<span class="math-function">' + Xr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + s.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
    }
    /**
     * Get LaTeX representation. (wrapper function)
     * This overrides parts of Node's toTex function.
     * If callback is an object containing callbacks, it
     * calls the correct callback for the current node,
     * otherwise it falls back to calling Node's toTex
     * function.
     *
     * @param {Object} options
     * @return {string}
     */
    toTex(u) {
      var s;
      return u && typeof u.handler == "object" && Ee(u.handler, this.name) && (s = u.handler[this.name](this, u)), typeof s < "u" ? s : super.toTex(u);
    }
    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(u) {
      var s = this.args.map(function(v) {
        return v.toTex(u);
      }), c;
      Zl[this.name] && (c = Zl[this.name]), i[this.name] && (typeof i[this.name].toTex == "function" || typeof i[this.name].toTex == "object" || typeof i[this.name].toTex == "string") && (c = i[this.name].toTex);
      var m;
      switch (typeof c) {
        case "function":
          m = c(this, u);
          break;
        case "string":
          m = o(c, this, u);
          break;
        case "object":
          switch (typeof c[s.length]) {
            case "function":
              m = c[s.length](this, u);
              break;
            case "string":
              m = o(c[s.length], this, u);
              break;
          }
      }
      return typeof m < "u" ? m : o(k2, this, u);
    }
    /**
     * Get identifier.
     * @return {string}
     */
    getIdentifier() {
      return this.type + ":" + this.name;
    }
  }
  return r = f, dr(f, "name", Da), dr(f, "onUndefinedFunction", function(l) {
    throw new Error("Undefined function " + l);
  }), dr(f, "fromJSON", function(l) {
    return new r(l.fn, l.args);
  }), f;
}, {
  isClass: !0,
  isNode: !0
}), Xl = "parse", cD = ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"], fD = /* @__PURE__ */ q(Xl, cD, (e) => {
  var {
    typed: r,
    numeric: i,
    config: a,
    AccessorNode: t,
    ArrayNode: n,
    AssignmentNode: o,
    BlockNode: f,
    ConditionalNode: l,
    ConstantNode: u,
    FunctionAssignmentNode: s,
    FunctionNode: c,
    IndexNode: m,
    ObjectNode: v,
    OperatorNode: d,
    ParenthesisNode: p,
    RangeNode: x,
    RelationalNode: g,
    SymbolNode: N
  } = e, h = r(Xl, {
    string: function(Z) {
      return K(Z, {});
    },
    "Array | Matrix": function(Z) {
      return b(Z, {});
    },
    "string, Object": function(Z, ie) {
      var be = ie.nodes !== void 0 ? ie.nodes : {};
      return K(Z, be);
    },
    "Array | Matrix, Object": b
  });
  function b(M) {
    var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ie = Z.nodes !== void 0 ? Z.nodes : {};
    return He(M, function(be) {
      if (typeof be != "string")
        throw new TypeError("String expected");
      return K(be, ie);
    });
  }
  var w = {
    NULL: 0,
    DELIMITER: 1,
    NUMBER: 2,
    SYMBOL: 3,
    UNKNOWN: 4
  }, y = {
    ",": !0,
    "(": !0,
    ")": !0,
    "[": !0,
    "]": !0,
    "{": !0,
    "}": !0,
    '"': !0,
    "'": !0,
    ";": !0,
    "+": !0,
    "-": !0,
    "*": !0,
    ".*": !0,
    "/": !0,
    "./": !0,
    "%": !0,
    "^": !0,
    ".^": !0,
    "~": !0,
    "!": !0,
    "&": !0,
    "|": !0,
    "^|": !0,
    "=": !0,
    ":": !0,
    "?": !0,
    "==": !0,
    "!=": !0,
    "<": !0,
    ">": !0,
    "<=": !0,
    ">=": !0,
    "<<": !0,
    ">>": !0,
    ">>>": !0
  }, A = {
    mod: !0,
    to: !0,
    in: !0,
    and: !0,
    xor: !0,
    or: !0,
    not: !0
  }, S = {
    true: !0,
    false: !1,
    null: null,
    undefined: void 0
  }, D = ["NaN", "Infinity"], E = {
    '"': '"',
    "'": "'",
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	"
    // note that \u is handled separately in parseStringToken()
  };
  function C() {
    return {
      extraNodes: {},
      // current extra nodes, must be careful not to mutate
      expression: "",
      // current expression
      comment: "",
      // last parsed comment
      index: 0,
      // current index in expr
      token: "",
      // current token
      tokenType: w.NULL,
      // type of the token
      nestingLevel: 0,
      // level of nesting inside parameters, used to ignore newline characters
      conditionalLevel: null
      // when a conditional is being parsed, the level of the conditional is stored here
    };
  }
  function F(M, Z) {
    return M.expression.substr(M.index, Z);
  }
  function _(M) {
    return F(M, 1);
  }
  function I(M) {
    M.index++;
  }
  function $(M) {
    return M.expression.charAt(M.index - 1);
  }
  function T(M) {
    return M.expression.charAt(M.index + 1);
  }
  function B(M) {
    for (M.tokenType = w.NULL, M.token = "", M.comment = ""; ; ) {
      if (_(M) === "#")
        for (; _(M) !== `
` && _(M) !== ""; )
          M.comment += _(M), I(M);
      if (h.isWhitespace(_(M), M.nestingLevel))
        I(M);
      else
        break;
    }
    if (_(M) === "") {
      M.tokenType = w.DELIMITER;
      return;
    }
    if (_(M) === `
` && !M.nestingLevel) {
      M.tokenType = w.DELIMITER, M.token = _(M), I(M);
      return;
    }
    var Z = _(M), ie = F(M, 2), be = F(M, 3);
    if (be.length === 3 && y[be]) {
      M.tokenType = w.DELIMITER, M.token = be, I(M), I(M), I(M);
      return;
    }
    if (ie.length === 2 && y[ie]) {
      M.tokenType = w.DELIMITER, M.token = ie, I(M), I(M);
      return;
    }
    if (y[Z]) {
      M.tokenType = w.DELIMITER, M.token = Z, I(M);
      return;
    }
    if (h.isDigitDot(Z)) {
      M.tokenType = w.NUMBER;
      var Te = F(M, 2);
      if (Te === "0b" || Te === "0o" || Te === "0x") {
        for (M.token += _(M), I(M), M.token += _(M), I(M); h.isHexDigit(_(M)); )
          M.token += _(M), I(M);
        if (_(M) === ".")
          for (M.token += ".", I(M); h.isHexDigit(_(M)); )
            M.token += _(M), I(M);
        else if (_(M) === "i")
          for (M.token += "i", I(M); h.isDigit(_(M)); )
            M.token += _(M), I(M);
        return;
      }
      if (_(M) === ".") {
        if (M.token += _(M), I(M), !h.isDigit(_(M))) {
          M.tokenType = w.DELIMITER;
          return;
        }
      } else {
        for (; h.isDigit(_(M)); )
          M.token += _(M), I(M);
        h.isDecimalMark(_(M), T(M)) && (M.token += _(M), I(M));
      }
      for (; h.isDigit(_(M)); )
        M.token += _(M), I(M);
      if (_(M) === "E" || _(M) === "e") {
        if (h.isDigit(T(M)) || T(M) === "-" || T(M) === "+") {
          if (M.token += _(M), I(M), (_(M) === "+" || _(M) === "-") && (M.token += _(M), I(M)), !h.isDigit(_(M)))
            throw Ce(M, 'Digit expected, got "' + _(M) + '"');
          for (; h.isDigit(_(M)); )
            M.token += _(M), I(M);
          if (h.isDecimalMark(_(M), T(M)))
            throw Ce(M, 'Digit expected, got "' + _(M) + '"');
        } else if (T(M) === ".")
          throw I(M), Ce(M, 'Digit expected, got "' + _(M) + '"');
      }
      return;
    }
    if (h.isAlpha(_(M), $(M), T(M))) {
      for (; h.isAlpha(_(M), $(M), T(M)) || h.isDigit(_(M)); )
        M.token += _(M), I(M);
      Ee(A, M.token) ? M.tokenType = w.DELIMITER : M.tokenType = w.SYMBOL;
      return;
    }
    for (M.tokenType = w.UNKNOWN; _(M) !== ""; )
      M.token += _(M), I(M);
    throw Ce(M, 'Syntax error in part "' + M.token + '"');
  }
  function L(M) {
    do
      B(M);
    while (M.token === `
`);
  }
  function O(M) {
    M.nestingLevel++;
  }
  function X(M) {
    M.nestingLevel--;
  }
  h.isAlpha = function(Z, ie, be) {
    return h.isValidLatinOrGreek(Z) || h.isValidMathSymbol(Z, be) || h.isValidMathSymbol(ie, Z);
  }, h.isValidLatinOrGreek = function(Z) {
    return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(Z);
  }, h.isValidMathSymbol = function(Z, ie) {
    return /^[\uD835]$/.test(Z) && /^[\uDC00-\uDFFF]$/.test(ie) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(ie);
  }, h.isWhitespace = function(Z, ie) {
    return Z === " " || Z === "	" || Z === `
` && ie > 0;
  }, h.isDecimalMark = function(Z, ie) {
    return Z === "." && ie !== "/" && ie !== "*" && ie !== "^";
  }, h.isDigitDot = function(Z) {
    return Z >= "0" && Z <= "9" || Z === ".";
  }, h.isDigit = function(Z) {
    return Z >= "0" && Z <= "9";
  }, h.isHexDigit = function(Z) {
    return Z >= "0" && Z <= "9" || Z >= "a" && Z <= "f" || Z >= "A" && Z <= "F";
  };
  function K(M, Z) {
    var ie = C();
    pr(ie, {
      expression: M,
      extraNodes: Z
    }), B(ie);
    var be = V(ie);
    if (ie.token !== "")
      throw ie.tokenType === w.DELIMITER ? lr(ie, "Unexpected operator " + ie.token) : Ce(ie, 'Unexpected part "' + ie.token + '"');
    return be;
  }
  function V(M) {
    var Z, ie = [], be;
    for (M.token !== "" && M.token !== `
` && M.token !== ";" && (Z = z(M), M.comment && (Z.comment = M.comment)); M.token === `
` || M.token === ";"; )
      ie.length === 0 && Z && (be = M.token !== ";", ie.push({
        node: Z,
        visible: be
      })), B(M), M.token !== `
` && M.token !== ";" && M.token !== "" && (Z = z(M), M.comment && (Z.comment = M.comment), be = M.token !== ";", ie.push({
        node: Z,
        visible: be
      }));
    return ie.length > 0 ? new f(ie) : (Z || (Z = new u(void 0), M.comment && (Z.comment = M.comment)), Z);
  }
  function z(M) {
    var Z, ie, be, Te, Ue = Q(M);
    if (M.token === "=") {
      if (yr(Ue))
        return Z = Ue.name, L(M), be = z(M), new o(new N(Z), be);
      if (Ht(Ue))
        return L(M), be = z(M), new o(Ue.object, Ue.index, be);
      if (Bt(Ue) && yr(Ue.fn) && (Te = !0, ie = [], Z = Ue.name, Ue.args.forEach(function(Lr, bi) {
        yr(Lr) ? ie[bi] = Lr.name : Te = !1;
      }), Te))
        return L(M), be = z(M), new s(Z, ie, be);
      throw Ce(M, "Invalid left hand side of assignment operator =");
    }
    return Ue;
  }
  function Q(M) {
    for (var Z = ce(M); M.token === "?"; ) {
      var ie = M.conditionalLevel;
      M.conditionalLevel = M.nestingLevel, L(M);
      var be = Z, Te = z(M);
      if (M.token !== ":")
        throw Ce(M, "False part of conditional expression expected");
      M.conditionalLevel = null, L(M);
      var Ue = z(M);
      Z = new l(be, Te, Ue), M.conditionalLevel = ie;
    }
    return Z;
  }
  function ce(M) {
    for (var Z = j(M); M.token === "or"; )
      L(M), Z = new d("or", "or", [Z, j(M)]);
    return Z;
  }
  function j(M) {
    for (var Z = re(M); M.token === "xor"; )
      L(M), Z = new d("xor", "xor", [Z, re(M)]);
    return Z;
  }
  function re(M) {
    for (var Z = oe(M); M.token === "and"; )
      L(M), Z = new d("and", "and", [Z, oe(M)]);
    return Z;
  }
  function oe(M) {
    for (var Z = ee(M); M.token === "|"; )
      L(M), Z = new d("|", "bitOr", [Z, ee(M)]);
    return Z;
  }
  function ee(M) {
    for (var Z = ne(M); M.token === "^|"; )
      L(M), Z = new d("^|", "bitXor", [Z, ne(M)]);
    return Z;
  }
  function ne(M) {
    for (var Z = se(M); M.token === "&"; )
      L(M), Z = new d("&", "bitAnd", [Z, se(M)]);
    return Z;
  }
  function se(M) {
    for (var Z = [ve(M)], ie = [], be = {
      "==": "equal",
      "!=": "unequal",
      "<": "smaller",
      ">": "larger",
      "<=": "smallerEq",
      ">=": "largerEq"
    }; Ee(be, M.token); ) {
      var Te = {
        name: M.token,
        fn: be[M.token]
      };
      ie.push(Te), L(M), Z.push(ve(M));
    }
    return Z.length === 1 ? Z[0] : Z.length === 2 ? new d(ie[0].name, ie[0].fn, Z) : new g(ie.map((Ue) => Ue.fn), Z);
  }
  function ve(M) {
    var Z, ie, be, Te;
    Z = we(M);
    for (var Ue = {
      "<<": "leftShift",
      ">>": "rightArithShift",
      ">>>": "rightLogShift"
    }; Ee(Ue, M.token); )
      ie = M.token, be = Ue[ie], L(M), Te = [Z, we(M)], Z = new d(ie, be, Te);
    return Z;
  }
  function we(M) {
    var Z, ie, be, Te;
    Z = Ae(M);
    for (var Ue = {
      to: "to",
      in: "to"
      // alias of 'to'
    }; Ee(Ue, M.token); )
      ie = M.token, be = Ue[ie], L(M), ie === "in" && M.token === "" ? Z = new d("*", "multiply", [Z, new N("in")], !0) : (Te = [Z, Ae(M)], Z = new d(ie, be, Te));
    return Z;
  }
  function Ae(M) {
    var Z, ie = [];
    if (M.token === ":" ? Z = new u(1) : Z = P(M), M.token === ":" && M.conditionalLevel !== M.nestingLevel) {
      for (ie.push(Z); M.token === ":" && ie.length < 3; )
        L(M), M.token === ")" || M.token === "]" || M.token === "," || M.token === "" ? ie.push(new N("end")) : ie.push(P(M));
      ie.length === 3 ? Z = new x(ie[0], ie[2], ie[1]) : Z = new x(ie[0], ie[1]);
    }
    return Z;
  }
  function P(M) {
    var Z, ie, be, Te;
    Z = H(M);
    for (var Ue = {
      "+": "add",
      "-": "subtract"
    }; Ee(Ue, M.token); ) {
      ie = M.token, be = Ue[ie], L(M);
      var Lr = H(M);
      Lr.isPercentage ? Te = [Z, new d("*", "multiply", [Z, Lr])] : Te = [Z, Lr], Z = new d(ie, be, Te);
    }
    return Z;
  }
  function H(M) {
    var Z, ie, be, Te;
    Z = te(M), ie = Z;
    for (var Ue = {
      "*": "multiply",
      ".*": "dotMultiply",
      "/": "divide",
      "./": "dotDivide"
    }; Ee(Ue, M.token); )
      be = M.token, Te = Ue[be], L(M), ie = te(M), Z = new d(be, Te, [Z, ie]);
    return Z;
  }
  function te(M) {
    var Z, ie;
    for (Z = k(M), ie = Z; M.tokenType === w.SYMBOL || M.token === "in" && Xe(Z) || M.tokenType === w.NUMBER && !Xe(ie) && (!mr(ie) || ie.op === "!") || M.token === "("; )
      ie = k(M), Z = new d(
        "*",
        "multiply",
        [Z, ie],
        !0
        /* implicit */
      );
    return Z;
  }
  function k(M) {
    for (var Z = Y(M), ie = Z, be = []; M.token === "/" && Fi(ie); )
      if (be.push(pr({}, M)), L(M), M.tokenType === w.NUMBER)
        if (be.push(pr({}, M)), L(M), M.tokenType === w.SYMBOL || M.token === "(")
          pr(M, be.pop()), be.pop(), ie = Y(M), Z = new d("/", "divide", [Z, ie]);
        else {
          be.pop(), pr(M, be.pop());
          break;
        }
      else {
        pr(M, be.pop());
        break;
      }
    return Z;
  }
  function Y(M) {
    var Z, ie, be, Te;
    Z = W(M);
    for (var Ue = {
      "%": "mod",
      mod: "mod"
    }; Ee(Ue, M.token); )
      ie = M.token, be = Ue[ie], L(M), ie === "%" && M.tokenType === w.DELIMITER && M.token !== "(" ? Z = new d("/", "divide", [Z, new u(100)], !1, !0) : (Te = [Z, W(M)], Z = new d(ie, be, Te));
    return Z;
  }
  function W(M) {
    var Z, ie, be, Te = {
      "-": "unaryMinus",
      "+": "unaryPlus",
      "~": "bitNot",
      not: "not"
    };
    return Ee(Te, M.token) ? (be = Te[M.token], Z = M.token, L(M), ie = [W(M)], new d(Z, be, ie)) : me(M);
  }
  function me(M) {
    var Z, ie, be, Te;
    return Z = fe(M), (M.token === "^" || M.token === ".^") && (ie = M.token, be = ie === "^" ? "pow" : "dotPow", L(M), Te = [Z, W(M)], Z = new d(ie, be, Te)), Z;
  }
  function fe(M) {
    var Z, ie, be, Te;
    Z = R(M);
    for (var Ue = {
      "!": "factorial",
      "'": "ctranspose"
    }; Ee(Ue, M.token); )
      ie = M.token, be = Ue[ie], B(M), Te = [Z], Z = new d(ie, be, Te), Z = J(M, Z);
    return Z;
  }
  function R(M) {
    var Z = [];
    if (M.tokenType === w.SYMBOL && Ee(M.extraNodes, M.token)) {
      var ie = M.extraNodes[M.token];
      if (B(M), M.token === "(") {
        if (Z = [], O(M), B(M), M.token !== ")")
          for (Z.push(z(M)); M.token === ","; )
            B(M), Z.push(z(M));
        if (M.token !== ")")
          throw Ce(M, "Parenthesis ) expected");
        X(M), B(M);
      }
      return new ie(Z);
    }
    return U(M);
  }
  function U(M) {
    var Z, ie;
    return M.tokenType === w.SYMBOL || M.tokenType === w.DELIMITER && M.token in A ? (ie = M.token, B(M), Ee(S, ie) ? Z = new u(S[ie]) : D.indexOf(ie) !== -1 ? Z = new u(i(ie, "number")) : Z = new N(ie), Z = J(M, Z), Z) : ae(M);
  }
  function J(M, Z, ie) {
    for (var be; (M.token === "(" || M.token === "[" || M.token === ".") && (!ie || ie.indexOf(M.token) !== -1); )
      if (be = [], M.token === "(")
        if (yr(Z) || Ht(Z)) {
          if (O(M), B(M), M.token !== ")")
            for (be.push(z(M)); M.token === ","; )
              B(M), be.push(z(M));
          if (M.token !== ")")
            throw Ce(M, "Parenthesis ) expected");
          X(M), B(M), Z = new c(Z, be);
        } else
          return Z;
      else if (M.token === "[") {
        if (O(M), B(M), M.token !== "]")
          for (be.push(z(M)); M.token === ","; )
            B(M), be.push(z(M));
        if (M.token !== "]")
          throw Ce(M, "Parenthesis ] expected");
        X(M), B(M), Z = new t(Z, new m(be));
      } else {
        B(M);
        var Te = M.tokenType === w.SYMBOL || M.tokenType === w.DELIMITER && M.token in A;
        if (!Te)
          throw Ce(M, "Property name expected after dot");
        be.push(new u(M.token)), B(M);
        var Ue = !0;
        Z = new t(Z, new m(be, Ue));
      }
    return Z;
  }
  function ae(M) {
    var Z, ie;
    return M.token === '"' || M.token === "'" ? (ie = le(M, M.token), Z = new u(ie), Z = J(M, Z), Z) : ue(M);
  }
  function le(M, Z) {
    for (var ie = ""; _(M) !== "" && _(M) !== Z; )
      if (_(M) === "\\") {
        I(M);
        var be = _(M), Te = E[be];
        if (Te !== void 0)
          ie += Te, M.index += 1;
        else if (be === "u") {
          var Ue = M.expression.slice(M.index + 1, M.index + 5);
          if (/^[0-9A-Fa-f]{4}$/.test(Ue))
            ie += String.fromCharCode(parseInt(Ue, 16)), M.index += 5;
          else
            throw Ce(M, "Invalid unicode character \\u".concat(Ue));
        } else
          throw Ce(M, "Bad escape character \\".concat(be));
      } else
        ie += _(M), I(M);
    if (B(M), M.token !== Z)
      throw Ce(M, "End of string ".concat(Z, " expected"));
    return B(M), ie;
  }
  function ue(M) {
    var Z, ie, be, Te;
    if (M.token === "[") {
      if (O(M), B(M), M.token !== "]") {
        var Ue = ge(M);
        if (M.token === ";") {
          for (be = 1, ie = [Ue]; M.token === ";"; )
            B(M), M.token !== "]" && (ie[be] = ge(M), be++);
          if (M.token !== "]")
            throw Ce(M, "End of matrix ] expected");
          X(M), B(M), Te = ie[0].items.length;
          for (var Lr = 1; Lr < be; Lr++)
            if (ie[Lr].items.length !== Te)
              throw lr(M, "Column dimensions mismatch (" + ie[Lr].items.length + " !== " + Te + ")");
          Z = new n(ie);
        } else {
          if (M.token !== "]")
            throw Ce(M, "End of matrix ] expected");
          X(M), B(M), Z = Ue;
        }
      } else
        X(M), B(M), Z = new n([]);
      return J(M, Z);
    }
    return he(M);
  }
  function ge(M) {
    for (var Z = [z(M)], ie = 1; M.token === ","; )
      B(M), M.token !== "]" && M.token !== ";" && (Z[ie] = z(M), ie++);
    return new n(Z);
  }
  function he(M) {
    if (M.token === "{") {
      O(M);
      var Z, ie = {};
      do
        if (B(M), M.token !== "}") {
          if (M.token === '"' || M.token === "'")
            Z = le(M, M.token);
          else if (M.tokenType === w.SYMBOL || M.tokenType === w.DELIMITER && M.token in A)
            Z = M.token, B(M);
          else
            throw Ce(M, "Symbol or string expected as object key");
          if (M.token !== ":")
            throw Ce(M, "Colon : expected after object key");
          B(M), ie[Z] = z(M);
        }
      while (M.token === ",");
      if (M.token !== "}")
        throw Ce(M, "Comma , or bracket } expected after object value");
      X(M), B(M);
      var be = new v(ie);
      return be = J(M, be), be;
    }
    return De(M);
  }
  function De(M) {
    var Z;
    return M.tokenType === w.NUMBER ? (Z = M.token, B(M), new u(i(Z, a.number))) : ye(M);
  }
  function ye(M) {
    var Z;
    if (M.token === "(") {
      if (O(M), B(M), Z = z(M), M.token !== ")")
        throw Ce(M, "Parenthesis ) expected");
      return X(M), B(M), Z = new p(Z), Z = J(M, Z), Z;
    }
    return Ve(M);
  }
  function Ve(M) {
    throw M.token === "" ? Ce(M, "Unexpected end of expression") : Ce(M, "Value expected");
  }
  function Ye(M) {
    return M.index - M.token.length + 1;
  }
  function Ce(M, Z) {
    var ie = Ye(M), be = new SyntaxError(Z + " (char " + ie + ")");
    return be.char = ie, be;
  }
  function lr(M, Z) {
    var ie = Ye(M), be = new SyntaxError(Z + " (char " + ie + ")");
    return be.char = ie, be;
  }
  return r.addConversion({
    from: "string",
    to: "Node",
    convert: h
  }), h;
}), Wl = "compile", mD = ["typed", "parse"], vD = /* @__PURE__ */ q(Wl, mD, (e) => {
  var {
    typed: r,
    parse: i
  } = e;
  return r(Wl, {
    string: function(t) {
      return i(t).compile();
    },
    "Array | Matrix": function(t) {
      return He(t, function(n) {
        return i(n).compile();
      });
    }
  });
}), Jl = "evaluate", pD = ["typed", "parse"], dD = /* @__PURE__ */ q(Jl, pD, (e) => {
  var {
    typed: r,
    parse: i
  } = e;
  return r(Jl, {
    string: function(t) {
      var n = Gn();
      return i(t).compile().evaluate(n);
    },
    "string, Map | Object": function(t, n) {
      return i(t).compile().evaluate(n);
    },
    "Array | Matrix": function(t) {
      var n = Gn();
      return He(t, function(o) {
        return i(o).compile().evaluate(n);
      });
    },
    "Array | Matrix, Map | Object": function(t, n) {
      return He(t, function(o) {
        return i(o).compile().evaluate(n);
      });
    }
  });
}), hD = "Parser", gD = ["evaluate"], yD = /* @__PURE__ */ q(hD, gD, (e) => {
  var {
    evaluate: r
  } = e;
  function i() {
    if (!(this instanceof i))
      throw new SyntaxError("Constructor must be called with the new operator");
    Object.defineProperty(this, "scope", {
      value: Gn(),
      writable: !1
    });
  }
  return i.prototype.type = "Parser", i.prototype.isParser = !0, i.prototype.evaluate = function(a) {
    return r(a, this.scope);
  }, i.prototype.get = function(a) {
    if (this.scope.has(a))
      return this.scope.get(a);
  }, i.prototype.getAll = function() {
    return zd(this.scope);
  }, i.prototype.getAllAsMap = function() {
    return this.scope;
  }, i.prototype.set = function(a, t) {
    return this.scope.set(a, t), t;
  }, i.prototype.remove = function(a) {
    this.scope.delete(a);
  }, i.prototype.clear = function() {
    this.scope.clear();
  }, i;
}, {
  isClass: !0
}), Ql = "parser", bD = ["typed", "Parser"], xD = /* @__PURE__ */ q(Ql, bD, (e) => {
  var {
    typed: r,
    Parser: i
  } = e;
  return r(Ql, {
    "": function() {
      return new i();
    }
  });
}), Kl = "lup", wD = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], ND = /* @__PURE__ */ q(Kl, wD, (e) => {
  var {
    typed: r,
    matrix: i,
    abs: a,
    addScalar: t,
    divideScalar: n,
    multiplyScalar: o,
    subtractScalar: f,
    larger: l,
    equalScalar: u,
    unaryMinus: s,
    DenseMatrix: c,
    SparseMatrix: m,
    Spa: v
  } = e;
  return r(Kl, {
    DenseMatrix: function(g) {
      return d(g);
    },
    SparseMatrix: function(g) {
      return p(g);
    },
    Array: function(g) {
      var N = i(g), h = d(N);
      return {
        L: h.L.valueOf(),
        U: h.U.valueOf(),
        p: h.p
      };
    }
  });
  function d(x) {
    var g = x._size[0], N = x._size[1], h = Math.min(g, N), b = _e(x._data), w = [], y = [g, h], A = [], S = [h, N], D, E, C, F = [];
    for (D = 0; D < g; D++)
      F[D] = D;
    for (E = 0; E < N; E++) {
      if (E > 0)
        for (D = 0; D < g; D++) {
          var _ = Math.min(D, E), I = 0;
          for (C = 0; C < _; C++)
            I = t(I, o(b[D][C], b[C][E]));
          b[D][E] = f(b[D][E], I);
        }
      var $ = E, T = 0, B = 0;
      for (D = E; D < g; D++) {
        var L = b[D][E], O = a(L);
        l(O, T) && ($ = D, T = O, B = L);
      }
      if (E !== $ && (F[E] = [F[$], F[$] = F[E]][0], c._swapRows(E, $, b)), E < g)
        for (D = E + 1; D < g; D++) {
          var X = b[D][E];
          u(X, 0) || (b[D][E] = n(b[D][E], B));
        }
    }
    for (E = 0; E < N; E++)
      for (D = 0; D < g; D++) {
        if (E === 0 && (D < N && (A[D] = []), w[D] = []), D < E) {
          D < N && (A[D][E] = b[D][E]), E < g && (w[D][E] = 0);
          continue;
        }
        if (D === E) {
          D < N && (A[D][E] = b[D][E]), E < g && (w[D][E] = 1);
          continue;
        }
        D < N && (A[D][E] = 0), E < g && (w[D][E] = b[D][E]);
      }
    var K = new c({
      data: w,
      size: y
    }), V = new c({
      data: A,
      size: S
    }), z = [];
    for (D = 0, h = F.length; D < h; D++)
      z[F[D]] = D;
    return {
      L: K,
      U: V,
      p: z,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
  function p(x) {
    var g = x._size[0], N = x._size[1], h = Math.min(g, N), b = x._values, w = x._index, y = x._ptr, A = [], S = [], D = [], E = [g, h], C = [], F = [], _ = [], I = [h, N], $, T, B, L = [], O = [];
    for ($ = 0; $ < g; $++)
      L[$] = $, O[$] = $;
    var X = function(z, Q) {
      var ce = O[z], j = O[Q];
      L[ce] = Q, L[j] = z, O[z] = j, O[Q] = ce;
    }, K = function() {
      var z = new v();
      T < g && (D.push(A.length), A.push(1), S.push(T)), _.push(C.length);
      var Q = y[T], ce = y[T + 1];
      for (B = Q; B < ce; B++)
        $ = w[B], z.set(L[$], b[B]);
      T > 0 && z.forEach(0, T - 1, function(ee, ne) {
        m._forEachRow(ee, A, S, D, function(se, ve) {
          se > ee && z.accumulate(se, s(o(ve, ne)));
        });
      });
      var j = T, re = z.get(T), oe = a(re);
      z.forEach(T + 1, g - 1, function(ee, ne) {
        var se = a(ne);
        l(se, oe) && (j = ee, oe = se, re = ne);
      }), T !== j && (m._swapRows(T, j, E[1], A, S, D), m._swapRows(T, j, I[1], C, F, _), z.swap(T, j), X(T, j)), z.forEach(0, g - 1, function(ee, ne) {
        ee <= T ? (C.push(ne), F.push(ee)) : (ne = n(ne, re), u(ne, 0) || (A.push(ne), S.push(ee)));
      });
    };
    for (T = 0; T < N; T++)
      K();
    return _.push(C.length), D.push(A.length), {
      L: new m({
        values: A,
        index: S,
        ptr: D,
        size: E
      }),
      U: new m({
        values: C,
        index: F,
        ptr: _,
        size: I
      }),
      p: L,
      toString: function() {
        return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p;
      }
    };
  }
}), jl = "qr", DD = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], AD = /* @__PURE__ */ q(jl, DD, (e) => {
  var {
    typed: r,
    matrix: i,
    zeros: a,
    identity: t,
    isZero: n,
    equal: o,
    sign: f,
    sqrt: l,
    conj: u,
    unaryMinus: s,
    addScalar: c,
    divideScalar: m,
    multiplyScalar: v,
    subtractScalar: d,
    complex: p
  } = e;
  return pr(r(jl, {
    DenseMatrix: function(b) {
      return g(b);
    },
    SparseMatrix: function(b) {
      return N();
    },
    Array: function(b) {
      var w = i(b), y = g(w);
      return {
        Q: y.Q.valueOf(),
        R: y.R.valueOf()
      };
    }
  }), {
    _denseQRimpl: x
  });
  function x(h) {
    var b = h._size[0], w = h._size[1], y = t([b], "dense"), A = y._data, S = h.clone(), D = S._data, E, C, F, _ = a([b], "");
    for (F = 0; F < Math.min(w, b); ++F) {
      var I = D[F][F], $ = s(o(I, 0) ? 1 : f(I)), T = u($), B = 0;
      for (E = F; E < b; E++)
        B = c(B, v(D[E][F], u(D[E][F])));
      var L = v($, l(B));
      if (!n(L)) {
        var O = d(I, L);
        for (_[F] = 1, E = F + 1; E < b; E++)
          _[E] = m(D[E][F], O);
        var X = s(u(m(O, L))), K = void 0;
        for (C = F; C < w; C++) {
          for (K = 0, E = F; E < b; E++)
            K = c(K, v(u(_[E]), D[E][C]));
          for (K = v(K, X), E = F; E < b; E++)
            D[E][C] = v(d(D[E][C], v(_[E], K)), T);
        }
        for (E = 0; E < b; E++) {
          for (K = 0, C = F; C < b; C++)
            K = c(K, v(A[E][C], _[C]));
          for (K = v(K, X), C = F; C < b; ++C)
            A[E][C] = m(d(A[E][C], v(K, u(_[C]))), T);
        }
      }
    }
    return {
      Q: y,
      R: S,
      toString: function() {
        return "Q: " + this.Q.toString() + `
R: ` + this.R.toString();
      }
    };
  }
  function g(h) {
    var b = x(h), w = b.R._data;
    if (h._data.length > 0)
      for (var y = w[0][0].type === "Complex" ? p(0) : 0, A = 0; A < w.length; ++A)
        for (var S = 0; S < A && S < (w[0] || []).length; ++S)
          w[A][S] = y;
    return b;
  }
  function N(h) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
});
function ED(e, r, i, a) {
  for (var t = e._values, n = e._index, o = e._ptr, f = e._size, l = e._datatype, u = f[0], s = f[1], c = a && e._values ? [] : null, m = [], v = [], d = 0, p = 0; p < s; p++) {
    v[p] = d;
    for (var x = i ? i[p] : p, g = o[x], N = o[x + 1], h = g; h < N; h++) {
      var b = r ? r[n[h]] : n[h];
      m[d] = b, c && (c[d] = t[h]), d++;
    }
  }
  return v[s] = d, e.createSparseMatrix({
    values: c,
    index: m,
    ptr: v,
    size: [u, s],
    datatype: l
  });
}
function lv(e, r, i, a, t, n, o) {
  var f = 0;
  for (i[o] = e; f >= 0; ) {
    var l = i[o + f], u = i[a + l];
    u === -1 ? (f--, n[r++] = l) : (i[a + l] = i[t + u], ++f, i[o + f] = u);
  }
  return r;
}
function SD(e, r) {
  if (!e)
    return null;
  var i = 0, a, t = [], n = [], o = 0, f = r, l = 2 * r;
  for (a = 0; a < r; a++)
    n[o + a] = -1;
  for (a = r - 1; a >= 0; a--)
    e[a] !== -1 && (n[f + a] = n[o + e[a]], n[o + e[a]] = a);
  for (a = 0; a < r; a++)
    e[a] === -1 && (i = lv(a, i, n, o, f, t, l));
  return t;
}
function CD(e, r) {
  if (!e)
    return null;
  var i = e._index, a = e._ptr, t = e._size, n = t[0], o = t[1], f = [], l = [], u = 0, s = o, c, m;
  if (r)
    for (c = 0; c < n; c++)
      l[s + c] = -1;
  for (var v = 0; v < o; v++) {
    f[v] = -1, l[u + v] = -1;
    for (var d = a[v], p = a[v + 1], x = d; x < p; x++) {
      var g = i[x];
      for (c = r ? l[s + g] : g; c !== -1 && c < v; c = m)
        m = l[u + c], l[u + c] = v, m === -1 && (f[c] = v);
      r && (l[s + g] = v);
    }
  }
  return f;
}
function MD(e, r, i) {
  for (var a = e._values, t = e._index, n = e._ptr, o = e._size, f = o[1], l = 0, u = 0; u < f; u++) {
    var s = n[u];
    for (n[u] = l; s < n[u + 1]; s++)
      r(t[s], u, a ? a[s] : 1, i) && (t[l] = t[s], a && (a[l] = a[s]), l++);
  }
  return n[f] = l, t.splice(l, t.length - l), a && a.splice(l, a.length - l), l;
}
function Ct(e) {
  return -e - 2;
}
var FD = "csAmd", BD = ["add", "multiply", "transpose"], TD = /* @__PURE__ */ q(FD, BD, (e) => {
  var {
    add: r,
    multiply: i,
    transpose: a
  } = e;
  return function(s, c) {
    if (!c || s <= 0 || s > 3)
      return null;
    var m = c._size, v = m[0], d = m[1], p = 0, x = Math.max(16, 10 * Math.sqrt(d));
    x = Math.min(d - 2, x);
    var g = t(s, c, v, d, x);
    MD(g, l, null);
    for (var N = g._index, h = g._ptr, b = h[d], w = [], y = [], A = 0, S = d + 1, D = 2 * (d + 1), E = 3 * (d + 1), C = 4 * (d + 1), F = 5 * (d + 1), _ = 6 * (d + 1), I = 7 * (d + 1), $ = w, T = n(d, h, y, A, E, $, D, I, S, _, C, F), B = o(d, h, y, F, C, _, x, S, E, $, D), L = 0, O, X, K, V, z, Q, ce, j, re, oe, ee, ne, se, ve, we, Ae; B < d; ) {
      for (K = -1; L < d && (K = y[E + L]) === -1; L++)
        ;
      y[D + K] !== -1 && ($[y[D + K]] = -1), y[E + L] = y[D + K];
      var P = y[C + K], H = y[S + K];
      B += H;
      var te = 0;
      y[S + K] = -H;
      var k = h[K], Y = P === 0 ? k : b, W = Y;
      for (V = 1; V <= P + 1; V++) {
        for (V > P ? (Q = K, ce = k, j = y[A + K] - P) : (Q = N[k++], ce = h[Q], j = y[A + Q]), z = 1; z <= j; z++)
          O = N[ce++], !((re = y[S + O]) <= 0) && (te += re, y[S + O] = -re, N[W++] = O, y[D + O] !== -1 && ($[y[D + O]] = $[O]), $[O] !== -1 ? y[D + $[O]] = y[D + O] : y[E + y[F + O]] = y[D + O]);
        Q !== K && (h[Q] = Ct(K), y[_ + Q] = 0);
      }
      for (P !== 0 && (b = W), y[F + K] = te, h[K] = Y, y[A + K] = W - Y, y[C + K] = -2, T = f(T, p, y, _, d), oe = Y; oe < W; oe++)
        if (O = N[oe], !((ee = y[C + O]) <= 0)) {
          re = -y[S + O];
          var me = T - re;
          for (k = h[O], ne = h[O] + ee - 1; k <= ne; k++)
            Q = N[k], y[_ + Q] >= T ? y[_ + Q] -= re : y[_ + Q] !== 0 && (y[_ + Q] = y[F + Q] + me);
        }
      for (oe = Y; oe < W; oe++) {
        for (O = N[oe], ne = h[O], se = ne + y[C + O] - 1, ve = ne, we = 0, Ae = 0, k = ne; k <= se; k++)
          if (Q = N[k], y[_ + Q] !== 0) {
            var fe = y[_ + Q] - T;
            fe > 0 ? (Ae += fe, N[ve++] = Q, we += Q) : (h[Q] = Ct(K), y[_ + Q] = 0);
          }
        y[C + O] = ve - ne + 1;
        var R = ve, U = ne + y[A + O];
        for (k = se + 1; k < U; k++) {
          X = N[k];
          var J = y[S + X];
          J <= 0 || (Ae += J, N[ve++] = X, we += X);
        }
        Ae === 0 ? (h[O] = Ct(K), re = -y[S + O], te -= re, H += re, B += re, y[S + O] = 0, y[C + O] = -1) : (y[F + O] = Math.min(y[F + O], Ae), N[ve] = N[R], N[R] = N[ne], N[ne] = K, y[A + O] = ve - ne + 1, we = (we < 0 ? -we : we) % d, y[D + O] = y[I + we], y[I + we] = O, $[O] = we);
      }
      for (y[F + K] = te, p = Math.max(p, te), T = f(T + p, p, y, _, d), oe = Y; oe < W; oe++)
        if (O = N[oe], !(y[S + O] >= 0))
          for (we = $[O], O = y[I + we], y[I + we] = -1; O !== -1 && y[D + O] !== -1; O = y[D + O], T++) {
            for (j = y[A + O], ee = y[C + O], k = h[O] + 1; k <= h[O] + j - 1; k++)
              y[_ + N[k]] = T;
            var ae = O;
            for (X = y[D + O]; X !== -1; ) {
              var le = y[A + X] === j && y[C + X] === ee;
              for (k = h[X] + 1; le && k <= h[X] + j - 1; k++)
                y[_ + N[k]] !== T && (le = 0);
              le ? (h[X] = Ct(O), y[S + O] += y[S + X], y[S + X] = 0, y[C + X] = -1, X = y[D + X], y[D + ae] = X) : (ae = X, X = y[D + X]);
            }
          }
      for (k = Y, oe = Y; oe < W; oe++)
        O = N[oe], !((re = -y[S + O]) <= 0) && (y[S + O] = re, Ae = y[F + O] + te - re, Ae = Math.min(Ae, d - B - re), y[E + Ae] !== -1 && ($[y[E + Ae]] = O), y[D + O] = y[E + Ae], $[O] = -1, y[E + Ae] = O, L = Math.min(L, Ae), y[F + O] = Ae, N[k++] = O);
      y[S + K] = H, (y[A + K] = k - Y) === 0 && (h[K] = -1, y[_ + K] = 0), P !== 0 && (b = k);
    }
    for (O = 0; O < d; O++)
      h[O] = Ct(h[O]);
    for (X = 0; X <= d; X++)
      y[E + X] = -1;
    for (X = d; X >= 0; X--)
      y[S + X] > 0 || (y[D + X] = y[E + h[X]], y[E + h[X]] = X);
    for (Q = d; Q >= 0; Q--)
      y[S + Q] <= 0 || h[Q] !== -1 && (y[D + Q] = y[E + h[Q]], y[E + h[Q]] = Q);
    for (K = 0, O = 0; O <= d; O++)
      h[O] === -1 && (K = lv(O, K, y, E, D, w, _));
    return w.splice(w.length - 1, 1), w;
  };
  function t(u, s, c, m, v) {
    var d = a(s);
    if (u === 1 && m === c)
      return r(s, d);
    if (u === 2) {
      for (var p = d._index, x = d._ptr, g = 0, N = 0; N < c; N++) {
        var h = x[N];
        if (x[N] = g, !(x[N + 1] - h > v))
          for (var b = x[N + 1]; h < b; h++)
            p[g++] = p[h];
      }
      return x[c] = g, s = a(d), i(d, s);
    }
    return i(d, s);
  }
  function n(u, s, c, m, v, d, p, x, g, N, h, b) {
    for (var w = 0; w < u; w++)
      c[m + w] = s[w + 1] - s[w];
    c[m + u] = 0;
    for (var y = 0; y <= u; y++)
      c[v + y] = -1, d[y] = -1, c[p + y] = -1, c[x + y] = -1, c[g + y] = 1, c[N + y] = 1, c[h + y] = 0, c[b + y] = c[m + y];
    var A = f(0, 0, c, N, u);
    return c[h + u] = -2, s[u] = -1, c[N + u] = 0, A;
  }
  function o(u, s, c, m, v, d, p, x, g, N, h) {
    for (var b = 0, w = 0; w < u; w++) {
      var y = c[m + w];
      if (y === 0)
        c[v + w] = -2, b++, s[w] = -1, c[d + w] = 0;
      else if (y > p)
        c[x + w] = 0, c[v + w] = -1, b++, s[w] = Ct(u), c[x + u]++;
      else {
        var A = c[g + y];
        A !== -1 && (N[A] = w), c[h + w] = c[g + y], c[g + y] = w;
      }
    }
    return b;
  }
  function f(u, s, c, m, v) {
    if (u < 2 || u + s < 0) {
      for (var d = 0; d < v; d++)
        c[m + d] !== 0 && (c[m + d] = 1);
      u = 2;
    }
    return u;
  }
  function l(u, s) {
    return u !== s;
  }
});
function OD(e, r, i, a, t, n, o) {
  var f, l, u = 0, s;
  if (e <= r || i[a + r] <= i[t + e])
    return -1;
  i[t + e] = i[a + r];
  var c = i[n + e];
  if (i[n + e] = r, c === -1)
    u = 1, s = e;
  else {
    for (u = 2, s = c; s !== i[o + s]; s = i[o + s])
      ;
    for (f = c; f !== s; f = l)
      l = i[o + f], i[o + f] = s;
  }
  return {
    jleaf: u,
    q: s
  };
}
var _D = "csCounts", $D = ["transpose"], ID = /* @__PURE__ */ q(_D, $D, (e) => {
  var {
    transpose: r
  } = e;
  return function(i, a, t, n) {
    if (!i || !a || !t)
      return null;
    var o = i._size, f = o[0], l = o[1], u, s, c, m, v, d, p, x = 4 * l + (n ? l + f + 1 : 0), g = [], N = 0, h = l, b = 2 * l, w = 3 * l, y = 4 * l, A = 5 * l + 1;
    for (c = 0; c < x; c++)
      g[c] = -1;
    var S = [], D = r(i), E = D._index, C = D._ptr;
    for (c = 0; c < l; c++)
      for (s = t[c], S[s] = g[w + s] === -1 ? 1 : 0; s !== -1 && g[w + s] === -1; s = a[s])
        g[w + s] = c;
    if (n) {
      for (c = 0; c < l; c++)
        g[t[c]] = c;
      for (u = 0; u < f; u++) {
        for (c = l, d = C[u], p = C[u + 1], v = d; v < p; v++)
          c = Math.min(c, g[E[v]]);
        g[A + u] = g[y + c], g[y + c] = u;
      }
    }
    for (u = 0; u < l; u++)
      g[N + u] = u;
    for (c = 0; c < l; c++) {
      for (s = t[c], a[s] !== -1 && S[a[s]]--, m = n ? g[y + c] : s; m !== -1; m = n ? g[A + m] : -1)
        for (v = C[m]; v < C[m + 1]; v++) {
          u = E[v];
          var F = OD(u, s, g, w, h, b, N);
          F.jleaf >= 1 && S[s]++, F.jleaf === 2 && S[F.q]--;
        }
      a[s] !== -1 && (g[N + s] = a[s]);
    }
    for (s = 0; s < l; s++)
      a[s] !== -1 && (S[a[s]] += S[s]);
    return S;
  };
}), qD = "csSqr", RD = ["add", "multiply", "transpose"], zD = /* @__PURE__ */ q(qD, RD, (e) => {
  var {
    add: r,
    multiply: i,
    transpose: a
  } = e, t = TD({
    add: r,
    multiply: i,
    transpose: a
  }), n = ID({
    transpose: a
  });
  return function(l, u, s) {
    var c = u._ptr, m = u._size, v = m[1], d, p = {};
    if (p.q = t(l, u), l && !p.q)
      return null;
    if (s) {
      var x = l ? ED(u, null, p.q, 0) : u;
      p.parent = CD(x, 1);
      var g = SD(p.parent, v);
      if (p.cp = n(x, p.parent, g, 1), x && p.parent && p.cp && o(x, p))
        for (p.unz = 0, d = 0; d < v; d++)
          p.unz += p.cp[d];
    } else
      p.unz = 4 * c[v] + v, p.lnz = p.unz;
    return p;
  };
  function o(f, l) {
    var u = f._ptr, s = f._index, c = f._size, m = c[0], v = c[1];
    l.pinv = [], l.leftmost = [];
    var d = l.parent, p = l.pinv, x = l.leftmost, g = [], N = 0, h = m, b = m + v, w = m + 2 * v, y, A, S, D, E;
    for (A = 0; A < v; A++)
      g[h + A] = -1, g[b + A] = -1, g[w + A] = 0;
    for (y = 0; y < m; y++)
      x[y] = -1;
    for (A = v - 1; A >= 0; A--)
      for (D = u[A], E = u[A + 1], S = D; S < E; S++)
        x[s[S]] = A;
    for (y = m - 1; y >= 0; y--)
      p[y] = -1, A = x[y], A !== -1 && (g[w + A]++ === 0 && (g[b + A] = y), g[N + y] = g[h + A], g[h + A] = y);
    for (l.lnz = 0, l.m2 = m, A = 0; A < v; A++)
      if (y = g[h + A], l.lnz++, y < 0 && (y = l.m2++), p[y] = A, !(--w[A] <= 0)) {
        l.lnz += g[w + A];
        var C = d[A];
        C !== -1 && (g[w + C] === 0 && (g[b + C] = g[b + A]), g[N + g[b + A]] = g[h + C], g[h + C] = g[N + y], g[w + C] += g[w + A]);
      }
    for (y = 0; y < m; y++)
      p[y] < 0 && (p[y] = A++);
    return !0;
  }
});
function Gi(e, r) {
  return e[r] < 0;
}
function cv(e, r) {
  e[r] = Ct(e[r]);
}
function ec(e) {
  return e < 0 ? Ct(e) : e;
}
function PD(e, r, i, a, t) {
  var n = r._index, o = r._ptr, f = r._size, l = f[1], u, s, c, m = 0;
  for (a[0] = e; m >= 0; ) {
    e = a[m];
    var v = t ? t[e] : e;
    Gi(o, e) || (cv(o, e), a[l + m] = v < 0 ? 0 : ec(o[v]));
    var d = 1;
    for (s = a[l + m], c = v < 0 ? 0 : ec(o[v + 1]); s < c; s++)
      if (u = n[s], !Gi(o, u)) {
        a[l + m] = s, a[++m] = u, d = 0;
        break;
      }
    d && (m--, a[--i] = e);
  }
  return i;
}
function UD(e, r, i, a, t) {
  var n = e._ptr, o = e._size, f = r._index, l = r._ptr, u = o[1], s, c, m, v = u;
  for (c = l[i], m = l[i + 1], s = c; s < m; s++) {
    var d = f[s];
    Gi(n, d) || (v = PD(d, e, v, a, t));
  }
  for (s = v; s < u; s++)
    cv(n, a[s]);
  return v;
}
var LD = "csSpsolve", kD = ["divideScalar", "multiply", "subtract"], HD = /* @__PURE__ */ q(LD, kD, (e) => {
  var {
    divideScalar: r,
    multiply: i,
    subtract: a
  } = e;
  return function(n, o, f, l, u, s, c) {
    var m = n._values, v = n._index, d = n._ptr, p = n._size, x = p[1], g = o._values, N = o._index, h = o._ptr, b, w, y, A, S = UD(n, o, f, l, s);
    for (b = S; b < x; b++)
      u[l[b]] = 0;
    for (w = h[f], y = h[f + 1], b = w; b < y; b++)
      u[N[b]] = g[b];
    for (var D = S; D < x; D++) {
      var E = l[D], C = s ? s[E] : E;
      if (!(C < 0))
        for (w = d[C], y = d[C + 1], u[E] = r(u[E], m[c ? w : y - 1]), b = c ? w + 1 : w, A = c ? y : y - 1; b < A; b++) {
          var F = v[b];
          u[F] = a(u[F], i(m[b], u[E]));
        }
    }
    return S;
  };
}), GD = "csLu", VD = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], ZD = /* @__PURE__ */ q(GD, VD, (e) => {
  var {
    abs: r,
    divideScalar: i,
    multiply: a,
    subtract: t,
    larger: n,
    largerEq: o,
    SparseMatrix: f
  } = e, l = HD({
    divideScalar: i,
    multiply: a,
    subtract: t
  });
  return function(s, c, m) {
    if (!s)
      return null;
    var v = s._size, d = v[1], p, x = 100, g = 100;
    c && (p = c.q, x = c.lnz || x, g = c.unz || g);
    var N = [], h = [], b = [], w = new f({
      values: N,
      index: h,
      ptr: b,
      size: [d, d]
    }), y = [], A = [], S = [], D = new f({
      values: y,
      index: A,
      ptr: S,
      size: [d, d]
    }), E = [], C, F, _ = [], I = [];
    for (C = 0; C < d; C++)
      _[C] = 0, E[C] = -1, b[C + 1] = 0;
    x = 0, g = 0;
    for (var $ = 0; $ < d; $++) {
      b[$] = x, S[$] = g;
      var T = p ? p[$] : $, B = l(w, s, T, I, _, E, 1), L = -1, O = -1;
      for (F = B; F < d; F++)
        if (C = I[F], E[C] < 0) {
          var X = r(_[C]);
          n(X, O) && (O = X, L = C);
        } else
          A[g] = E[C], y[g++] = _[C];
      if (L === -1 || O <= 0)
        return null;
      E[T] < 0 && o(r(_[T]), a(O, m)) && (L = T);
      var K = _[L];
      for (A[g] = $, y[g++] = K, E[L] = $, h[x] = L, N[x++] = 1, F = B; F < d; F++)
        C = I[F], E[C] < 0 && (h[x] = C, N[x++] = i(_[C], K)), _[C] = 0;
    }
    for (b[d] = x, S[d] = g, F = 0; F < x; F++)
      h[F] = E[h[F]];
    return N.splice(x, N.length - x), h.splice(x, h.length - x), y.splice(g, y.length - g), A.splice(g, A.length - g), {
      L: w,
      U: D,
      pinv: E
    };
  };
}), rc = "slu", YD = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], XD = /* @__PURE__ */ q(rc, YD, (e) => {
  var {
    typed: r,
    abs: i,
    add: a,
    multiply: t,
    transpose: n,
    divideScalar: o,
    subtract: f,
    larger: l,
    largerEq: u,
    SparseMatrix: s
  } = e, c = zD({
    add: a,
    multiply: t,
    transpose: n
  }), m = ZD({
    abs: i,
    divideScalar: o,
    multiply: t,
    subtract: f,
    larger: l,
    largerEq: u,
    SparseMatrix: s
  });
  return r(rc, {
    "SparseMatrix, number, number": function(d, p, x) {
      if (!Se(p) || p < 0 || p > 3)
        throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
      if (x < 0 || x > 1)
        throw new Error("Partial pivoting threshold must be a number from 0 to 1");
      var g = c(p, d, !1), N = m(d, g, x);
      return {
        L: N.L,
        U: N.U,
        p: N.pinv,
        q: g.q,
        toString: function() {
          return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
p: ` + this.p.toString() + (this.q ? `
q: ` + this.q.toString() : "") + `
`;
        }
      };
    }
  });
});
function tc(e, r) {
  var i, a = r.length, t = [];
  if (e)
    for (i = 0; i < a; i++)
      t[e[i]] = r[i];
  else
    for (i = 0; i < a; i++)
      t[i] = r[i];
  return t;
}
var nc = "lusolve", WD = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], JD = /* @__PURE__ */ q(nc, WD, (e) => {
  var {
    typed: r,
    matrix: i,
    lup: a,
    slu: t,
    usolve: n,
    lsolve: o,
    DenseMatrix: f
  } = e, l = jn({
    DenseMatrix: f
  });
  return r(nc, {
    "Array, Array | Matrix": function(m, v) {
      m = i(m);
      var d = a(m), p = s(d.L, d.U, d.p, null, v);
      return p.valueOf();
    },
    "DenseMatrix, Array | Matrix": function(m, v) {
      var d = a(m);
      return s(d.L, d.U, d.p, null, v);
    },
    "SparseMatrix, Array | Matrix": function(m, v) {
      var d = a(m);
      return s(d.L, d.U, d.p, null, v);
    },
    "SparseMatrix, Array | Matrix, number, number": function(m, v, d, p) {
      var x = t(m, d, p);
      return s(x.L, x.U, x.p, x.q, v);
    },
    "Object, Array | Matrix": function(m, v) {
      return s(m.L, m.U, m.p, m.q, v);
    }
  });
  function u(c) {
    if (Fe(c))
      return c;
    if (Ke(c))
      return i(c);
    throw new TypeError("Invalid Matrix LU decomposition");
  }
  function s(c, m, v, d, p) {
    c = u(c), m = u(m), v && (p = l(c, p, !0), p._data = tc(v, p._data));
    var x = o(c, p), g = n(m, x);
    return d && (g._data = tc(d, g._data)), g;
  }
}), ac = "polynomialRoot", QD = ["typed", "isZero", "equalScalar", "add", "subtract", "multiply", "divide", "sqrt", "unaryMinus", "cbrt", "typeOf", "im", "re"], KD = /* @__PURE__ */ q(ac, QD, (e) => {
  var {
    typed: r,
    isZero: i,
    equalScalar: a,
    add: t,
    subtract: n,
    multiply: o,
    divide: f,
    sqrt: l,
    unaryMinus: u,
    cbrt: s,
    typeOf: c,
    im: m,
    re: v
  } = e;
  return r(ac, {
    "number|Complex, ...number|Complex": (d, p) => {
      for (var x = [d, ...p]; x.length > 0 && i(x[x.length - 1]); )
        x.pop();
      if (x.length < 2)
        throw new RangeError("Polynomial [".concat(d, ", ").concat(p, "] must have a non-zero non-constant coefficient"));
      switch (x.length) {
        case 2:
          return [u(f(x[0], x[1]))];
        case 3: {
          var [g, N, h] = x, b = o(2, h), w = o(N, N), y = o(4, h, g);
          if (a(w, y))
            return [f(u(N), b)];
          var A = l(n(w, y));
          return [f(n(A, N), b), f(n(u(A), N), b)];
        }
        case 4: {
          var [S, D, E, C] = x, F = u(o(3, C)), _ = o(E, E), I = o(3, C, D), $ = t(o(2, E, E, E), o(27, C, C, S)), T = o(9, C, E, D);
          if (a(_, I) && a($, T))
            return [f(E, F)];
          var B = n(_, I), L = n($, T), O = t(o(18, C, E, D, S), o(E, E, D, D)), X = t(o(4, E, E, E, S), o(4, C, D, D, D), o(27, C, C, S, S));
          if (a(O, X))
            return [
              f(n(o(4, C, E, D), t(o(9, C, C, S), o(E, E, E))), o(C, B)),
              // simple root
              f(n(o(9, C, S), o(E, D)), o(2, B))
              // double root
            ];
          var K;
          a(_, I) ? K = L : K = f(t(L, l(n(o(L, L), o(4, B, B, B)))), 2);
          var V = !0, z = s(K, V).toArray().map((Q) => f(t(E, Q, f(B, Q)), F));
          return z.map((Q) => c(Q) === "Complex" && a(v(Q), v(Q) + m(Q)) ? v(Q) : Q);
        }
        default:
          throw new RangeError("only implemented for cubic or lower-order polynomials, not ".concat(x));
      }
    }
  });
}), jD = "Help", eA = ["evaluate"], rA = /* @__PURE__ */ q(jD, eA, (e) => {
  var {
    evaluate: r
  } = e;
  function i(a) {
    if (!(this instanceof i))
      throw new SyntaxError("Constructor must be called with the new operator");
    if (!a)
      throw new Error('Argument "doc" missing');
    this.doc = a;
  }
  return i.prototype.type = "Help", i.prototype.isHelp = !0, i.prototype.toString = function() {
    var a = this.doc || {}, t = `
`;
    if (a.name && (t += "Name: " + a.name + `

`), a.category && (t += "Category: " + a.category + `

`), a.description && (t += `Description:
    ` + a.description + `

`), a.syntax && (t += `Syntax:
    ` + a.syntax.join(`
    `) + `

`), a.examples) {
      t += `Examples:
`;
      for (var n = !1, o = r("config()"), f = {
        config: (c) => (n = !0, r("config(newConfig)", {
          newConfig: c
        }))
      }, l = 0; l < a.examples.length; l++) {
        var u = a.examples[l];
        t += "    " + u + `
`;
        var s = void 0;
        try {
          s = r(u, f);
        } catch (c) {
          s = c;
        }
        s !== void 0 && !lf(s) && (t += "        " + Le(s, {
          precision: 14
        }) + `
`);
      }
      t += `
`, n && r("config(originalConfig)", {
        originalConfig: o
      });
    }
    return a.mayThrow && a.mayThrow.length && (t += "Throws: " + a.mayThrow.join(", ") + `

`), a.seealso && a.seealso.length && (t += "See also: " + a.seealso.join(", ") + `
`), t;
  }, i.prototype.toJSON = function() {
    var a = _e(this.doc);
    return a.mathjs = "Help", a;
  }, i.fromJSON = function(a) {
    var t = {};
    return Object.keys(a).filter((n) => n !== "mathjs").forEach((n) => {
      t[n] = a[n];
    }), new i(t);
  }, i.prototype.valueOf = i.prototype.toString, i;
}, {
  isClass: !0
}), tA = "Chain", nA = ["?on", "math", "typed"], aA = /* @__PURE__ */ q(tA, nA, (e) => {
  var {
    on: r,
    math: i,
    typed: a
  } = e;
  function t(u) {
    if (!(this instanceof t))
      throw new SyntaxError("Constructor must be called with the new operator");
    cf(u) ? this.value = u.value : this.value = u;
  }
  t.prototype.type = "Chain", t.prototype.isChain = !0, t.prototype.done = function() {
    return this.value;
  }, t.prototype.valueOf = function() {
    return this.value;
  }, t.prototype.toString = function() {
    return Le(this.value);
  }, t.prototype.toJSON = function() {
    return {
      mathjs: "Chain",
      value: this.value
    };
  }, t.fromJSON = function(u) {
    return new t(u.value);
  };
  function n(u, s) {
    typeof s == "function" && (t.prototype[u] = f(s));
  }
  function o(u, s) {
    rd(t.prototype, u, function() {
      var m = s();
      if (typeof m == "function")
        return f(m);
    });
  }
  function f(u) {
    return function() {
      if (arguments.length === 0)
        return new t(u(this.value));
      for (var s = [this.value], c = 0; c < arguments.length; c++)
        s[c + 1] = arguments[c];
      if (a.isTypedFunction(u)) {
        var m = a.resolve(u, s);
        if (m.params.length === 1)
          throw new Error("chain function " + u.name + " cannot match rest parameter between chain value and additional arguments.");
        return new t(m.implementation.apply(u, s));
      }
      return new t(u.apply(u, s));
    };
  }
  t.createProxy = function(u, s) {
    if (typeof u == "string")
      n(u, s);
    else {
      var c = function(d) {
        Ee(u, d) && l[d] === void 0 && o(d, () => u[d]);
      };
      for (var m in u)
        c(m);
    }
  };
  var l = {
    expression: !0,
    docs: !0,
    type: !0,
    classes: !0,
    json: !0,
    error: !0,
    isChain: !0
    // conflicts with the property isChain of a Chain instance
  };
  return t.createProxy(i), r && r("import", function(u, s, c) {
    c || o(u, s);
  }), t;
}, {
  isClass: !0
}), ic = {
  name: "e",
  category: "Constants",
  syntax: ["e"],
  description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
  examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
  seealso: ["exp"]
}, iA = {
  name: "false",
  category: "Constants",
  syntax: ["false"],
  description: "Boolean value false",
  examples: ["false"],
  seealso: ["true"]
}, oA = {
  name: "i",
  category: "Constants",
  syntax: ["i"],
  description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
  examples: ["i", "i * i", "sqrt(-1)"],
  seealso: []
}, sA = {
  name: "Infinity",
  category: "Constants",
  syntax: ["Infinity"],
  description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
  examples: ["Infinity", "1 / 0"],
  seealso: []
}, uA = {
  name: "LN10",
  category: "Constants",
  syntax: ["LN10"],
  description: "Returns the natural logarithm of 10, approximately equal to 2.302",
  examples: ["LN10", "log(10)"],
  seealso: []
}, lA = {
  name: "LN2",
  category: "Constants",
  syntax: ["LN2"],
  description: "Returns the natural logarithm of 2, approximately equal to 0.693",
  examples: ["LN2", "log(2)"],
  seealso: []
}, cA = {
  name: "LOG10E",
  category: "Constants",
  syntax: ["LOG10E"],
  description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
  examples: ["LOG10E", "log(e, 10)"],
  seealso: []
}, fA = {
  name: "LOG2E",
  category: "Constants",
  syntax: ["LOG2E"],
  description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
  examples: ["LOG2E", "log(e, 2)"],
  seealso: []
}, mA = {
  name: "NaN",
  category: "Constants",
  syntax: ["NaN"],
  description: "Not a number",
  examples: ["NaN", "0 / 0"],
  seealso: []
}, vA = {
  name: "null",
  category: "Constants",
  syntax: ["null"],
  description: "Value null",
  examples: ["null"],
  seealso: ["true", "false"]
}, pA = {
  name: "phi",
  category: "Constants",
  syntax: ["phi"],
  description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
  examples: ["phi"],
  seealso: []
}, oc = {
  name: "pi",
  category: "Constants",
  syntax: ["pi"],
  description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
  examples: ["pi", "sin(pi/2)"],
  seealso: ["tau"]
}, dA = {
  name: "SQRT1_2",
  category: "Constants",
  syntax: ["SQRT1_2"],
  description: "Returns the square root of 1/2, approximately equal to 0.707",
  examples: ["SQRT1_2", "sqrt(1/2)"],
  seealso: []
}, hA = {
  name: "SQRT2",
  category: "Constants",
  syntax: ["SQRT2"],
  description: "Returns the square root of 2, approximately equal to 1.414",
  examples: ["SQRT2", "sqrt(2)"],
  seealso: []
}, gA = {
  name: "tau",
  category: "Constants",
  syntax: ["tau"],
  description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
  examples: ["tau", "2 * pi"],
  seealso: ["pi"]
}, yA = {
  name: "true",
  category: "Constants",
  syntax: ["true"],
  description: "Boolean value true",
  examples: ["true"],
  seealso: ["false"]
}, bA = {
  name: "version",
  category: "Constants",
  syntax: ["version"],
  description: "A string with the version number of math.js",
  examples: ["version"],
  seealso: []
}, xA = {
  name: "bignumber",
  category: "Construction",
  syntax: ["bignumber(x)"],
  description: "Create a big number from a number or string.",
  examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
  seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
}, wA = {
  name: "boolean",
  category: "Construction",
  syntax: ["x", "boolean(x)"],
  description: "Convert a string or number into a boolean.",
  examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
  seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
}, NA = {
  name: "complex",
  category: "Construction",
  syntax: ["complex()", "complex(re, im)", "complex(string)"],
  description: "Create a complex number.",
  examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
  seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
}, DA = {
  name: "createUnit",
  category: "Construction",
  syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
  description: "Create a user-defined unit and register it with the Unit type.",
  examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'],
  seealso: ["unit", "splitUnit"]
}, AA = {
  name: "fraction",
  category: "Construction",
  syntax: ["fraction(num)", "fraction(matrix)", "fraction(num,den)", "fraction({n: num, d: den})"],
  description: "Create a fraction from a number or from integer numerator and denominator.",
  examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)", "fraction({n: 333, d: 53})", "fraction([sqrt(9), sqrt(10), sqrt(11)])"],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
}, EA = {
  name: "index",
  category: "Construction",
  syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
  description: "Create an index to get or replace a subset of a matrix",
  examples: ["A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[1:2, 1:2] = 1", "B = [1, 2, 3]", "B[B>1 and B<3]"],
  seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
}, SA = {
  name: "matrix",
  category: "Construction",
  syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
  description: "Create a matrix.",
  examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
  seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
}, CA = {
  name: "number",
  category: "Construction",
  syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
  description: "Create a number or convert a string or boolean into a number.",
  examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'],
  seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
}, MA = {
  name: "sparse",
  category: "Construction",
  syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
  description: "Create a sparse matrix.",
  examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
  seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
}, FA = {
  name: "splitUnit",
  category: "Construction",
  syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
  description: "Split a unit in an array of units whose sum is equal to the original unit.",
  examples: ['splitUnit(1 m, ["feet", "inch"])'],
  seealso: ["unit", "createUnit"]
}, BA = {
  name: "string",
  category: "Construction",
  syntax: ['"text"', "string(x)"],
  description: "Create a string or convert a value to a string",
  examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
}, TA = {
  name: "unit",
  category: "Construction",
  syntax: ["value unit", "unit(value, unit)", "unit(string)"],
  description: "Create a unit.",
  examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
}, OA = {
  name: "config",
  category: "Core",
  syntax: ["config()", "config(options)"],
  description: "Get configuration or change configuration.",
  examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"],
  seealso: []
}, _A = {
  name: "import",
  category: "Core",
  syntax: ["import(functions)", "import(functions, options)"],
  description: "Import functions or constants from an object.",
  examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"],
  seealso: []
}, $A = {
  name: "typed",
  category: "Core",
  syntax: ["typed(signatures)", "typed(name, signatures)"],
  description: "Create a typed function.",
  examples: ['double = typed({ "number": f(x)=x+x, "string": f(x)=concat(x,x) })', "double(2)", 'double("hello")'],
  seealso: []
}, IA = {
  name: "derivative",
  category: "Algebra",
  syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"],
  description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
  examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"],
  seealso: ["simplify", "parse", "evaluate"]
}, qA = {
  name: "leafCount",
  category: "Algebra",
  syntax: ["leafCount(expr)"],
  description: "Computes the number of leaves in the parse tree of the given expression",
  examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'],
  seealso: ["simplify"]
}, RA = {
  name: "lsolve",
  category: "Algebra",
  syntax: ["x=lsolve(L, b)"],
  description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
  seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"]
}, zA = {
  name: "lsolveAll",
  category: "Algebra",
  syntax: ["x=lsolveAll(L, b)"],
  description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
  seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"]
}, PA = {
  name: "lup",
  category: "Algebra",
  syntax: ["lup(m)"],
  description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
  examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
  seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
}, UA = {
  name: "lusolve",
  category: "Algebra",
  syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
  description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
  seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
}, LA = {
  name: "polynomialRoot",
  category: "Algebra",
  syntax: ["x=polynomialRoot(-6, 3)", "x=polynomialRoot(4, -4, 1)", "x=polynomialRoot(-8, 12, -6, 1)"],
  description: "Finds the roots of a univariate polynomial given by its coefficients starting from constant, linear, and so on, increasing in degree.",
  examples: ["a = polynomialRoot(-6, 11, -6, 1)"],
  seealso: ["cbrt", "sqrt"]
}, kA = {
  name: "qr",
  category: "Algebra",
  syntax: ["qr(A)"],
  description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
  examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
  seealso: ["lup", "slu", "matrix"]
}, HA = {
  name: "rationalize",
  category: "Algebra",
  syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
  description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
  examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'],
  seealso: ["simplify"]
}, GA = {
  name: "resolve",
  category: "Algebra",
  syntax: ["resolve(node, scope)"],
  description: "Recursively substitute variables in an expression tree.",
  examples: ['resolve(parse("1 + x"), { x: 7 })', 'resolve(parse("size(text)"), { text: "Hello World" })', 'resolve(parse("x + y"), { x: parse("3z") })', 'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'],
  seealso: ["simplify", "evaluate"],
  mayThrow: ["ReferenceError"]
}, VA = {
  name: "simplify",
  category: "Algebra",
  syntax: ["simplify(expr)", "simplify(expr, rules)"],
  description: "Simplify an expression tree.",
  examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
  seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize", "resolve"]
}, ZA = {
  name: "simplifyConstant",
  category: "Algebra",
  syntax: ["simplifyConstant(expr)", "simplifyConstant(expr, options)"],
  description: "Replace constant subexpressions of node with their values.",
  examples: ['simplifyConstant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'],
  seealso: ["simplify", "simplifyCore", "evaluate"]
}, YA = {
  name: "simplifyCore",
  category: "Algebra",
  syntax: ["simplifyCore(node)"],
  description: "Perform simple one-pass simplifications on an expression tree.",
  examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'],
  seealso: ["simplify", "simplifyConstant", "evaluate"]
}, XA = {
  name: "slu",
  category: "Algebra",
  syntax: ["slu(A, order, threshold)"],
  description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
  examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
  seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
}, WA = {
  name: "symbolicEqual",
  category: "Algebra",
  syntax: ["symbolicEqual(expr1, expr2)", "symbolicEqual(expr1, expr2, options)"],
  description: "Returns true if the difference of the expressions simplifies to 0",
  examples: ['symbolicEqual("x*y","y*x")', 'symbolicEqual("abs(x^2)", "x^2")', 'symbolicEqual("abs(x)", "x", {context: {abs: {trivial: true}}})'],
  seealso: ["simplify", "evaluate"]
}, JA = {
  name: "usolve",
  category: "Algebra",
  syntax: ["x=usolve(U, b)"],
  description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
  examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
  seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"]
}, QA = {
  name: "usolveAll",
  category: "Algebra",
  syntax: ["x=usolve(U, b)"],
  description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
  examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
  seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"]
}, KA = {
  name: "abs",
  category: "Arithmetic",
  syntax: ["abs(x)"],
  description: "Compute the absolute value.",
  examples: ["abs(3.5)", "abs(-4.2)"],
  seealso: ["sign"]
}, jA = {
  name: "add",
  category: "Operators",
  syntax: ["x + y", "add(x, y)"],
  description: "Add two values.",
  examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
  seealso: ["subtract"]
}, eE = {
  name: "cbrt",
  category: "Arithmetic",
  syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
  description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
  examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
  seealso: ["square", "sqrt", "cube", "multiply"]
}, rE = {
  name: "ceil",
  category: "Arithmetic",
  syntax: ["ceil(x)"],
  description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
  examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
  seealso: ["floor", "fix", "round"]
}, tE = {
  name: "cube",
  category: "Arithmetic",
  syntax: ["cube(x)"],
  description: "Compute the cube of a value. The cube of x is x * x * x.",
  examples: ["cube(2)", "2^3", "2 * 2 * 2"],
  seealso: ["multiply", "square", "pow"]
}, nE = {
  name: "divide",
  category: "Operators",
  syntax: ["x / y", "divide(x, y)"],
  description: "Divide two values.",
  examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
  seealso: ["multiply"]
}, aE = {
  name: "dotDivide",
  category: "Operators",
  syntax: ["x ./ y", "dotDivide(x, y)"],
  description: "Divide two values element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
  seealso: ["multiply", "dotMultiply", "divide"]
}, iE = {
  name: "dotMultiply",
  category: "Operators",
  syntax: ["x .* y", "dotMultiply(x, y)"],
  description: "Multiply two values element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
  seealso: ["multiply", "divide", "dotDivide"]
}, oE = {
  name: "dotPow",
  category: "Operators",
  syntax: ["x .^ y", "dotPow(x, y)"],
  description: "Calculates the power of x to y element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
  seealso: ["pow"]
}, sE = {
  name: "exp",
  category: "Arithmetic",
  syntax: ["exp(x)"],
  description: "Calculate the exponent of a value.",
  examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
  seealso: ["expm", "expm1", "pow", "log"]
}, uE = {
  name: "expm",
  category: "Arithmetic",
  syntax: ["exp(x)"],
  description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
  examples: ["expm([[0,2],[0,0]])"],
  seealso: ["exp"]
}, lE = {
  name: "expm1",
  category: "Arithmetic",
  syntax: ["expm1(x)"],
  description: "Calculate the value of subtracting 1 from the exponential value.",
  examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
  seealso: ["exp", "pow", "log"]
}, cE = {
  name: "fix",
  category: "Arithmetic",
  syntax: ["fix(x)"],
  description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
  examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
  seealso: ["ceil", "floor", "round"]
}, fE = {
  name: "floor",
  category: "Arithmetic",
  syntax: ["floor(x)"],
  description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
  examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
  seealso: ["ceil", "fix", "round"]
}, mE = {
  name: "gcd",
  category: "Arithmetic",
  syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
  description: "Compute the greatest common divisor.",
  examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
  seealso: ["lcm", "xgcd"]
}, vE = {
  name: "hypot",
  category: "Arithmetic",
  syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
  description: "Calculate the hypotenusa of a list with values. ",
  examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
  seealso: ["abs", "norm"]
}, pE = {
  name: "invmod",
  category: "Arithmetic",
  syntax: ["invmod(a, b)"],
  description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax ≣ 1 (mod b)",
  examples: ["invmod(8, 12)", "invmod(7, 13)", "invmod(15151, 15122)"],
  seealso: ["gcd", "xgcd"]
}, dE = {
  name: "lcm",
  category: "Arithmetic",
  syntax: ["lcm(x, y)"],
  description: "Compute the least common multiple.",
  examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
  seealso: ["gcd"]
}, hE = {
  name: "log",
  category: "Arithmetic",
  syntax: ["log(x)", "log(x, base)"],
  description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
  examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
  seealso: ["exp", "log1p", "log2", "log10"]
}, gE = {
  name: "log10",
  category: "Arithmetic",
  syntax: ["log10(x)"],
  description: "Compute the 10-base logarithm of a value.",
  examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
  seealso: ["exp", "log"]
}, yE = {
  name: "log1p",
  category: "Arithmetic",
  syntax: ["log1p(x)", "log1p(x, base)"],
  description: "Calculate the logarithm of a `value+1`",
  examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"],
  seealso: ["exp", "log", "log2", "log10"]
}, bE = {
  name: "log2",
  category: "Arithmetic",
  syntax: ["log2(x)"],
  description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
  examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
  seealso: ["exp", "log1p", "log", "log10"]
}, xE = {
  name: "mod",
  category: "Operators",
  syntax: ["x % y", "x mod y", "mod(x, y)"],
  description: "Calculates the modulus, the remainder of an integer division.",
  examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
  seealso: ["divide"]
}, wE = {
  name: "multiply",
  category: "Operators",
  syntax: ["x * y", "multiply(x, y)"],
  description: "multiply two values.",
  examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
  seealso: ["divide"]
}, NE = {
  name: "norm",
  category: "Arithmetic",
  syntax: ["norm(x)", "norm(x, p)"],
  description: "Calculate the norm of a number, vector or matrix.",
  examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
}, DE = {
  name: "nthRoot",
  category: "Arithmetic",
  syntax: ["nthRoot(a)", "nthRoot(a, root)"],
  description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
  examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
  seealso: ["nthRoots", "pow", "sqrt"]
}, AE = {
  name: "nthRoots",
  category: "Arithmetic",
  syntax: ["nthRoots(A)", "nthRoots(A, root)"],
  description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
  examples: ["nthRoots(1)", "nthRoots(1, 3)"],
  seealso: ["sqrt", "pow", "nthRoot"]
}, EE = {
  name: "pow",
  category: "Operators",
  syntax: ["x ^ y", "pow(x, y)"],
  description: "Calculates the power of x to y, x^y.",
  examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)", "pow([[1, 2], [4, 3]], 2)", "pow([[1, 2], [4, 3]], -1)"],
  seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
}, SE = {
  name: "round",
  category: "Arithmetic",
  syntax: ["round(x)", "round(x, n)", "round(unit, valuelessUnit)", "round(unit, n, valuelessUnit)"],
  description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
  examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)", "round(3.241cm, 2, cm)", "round([3.2, 3.8, -4.7])"],
  seealso: ["ceil", "floor", "fix"]
}, CE = {
  name: "sign",
  category: "Arithmetic",
  syntax: ["sign(x)"],
  description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
  examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
  seealso: ["abs"]
}, ME = {
  name: "sqrt",
  category: "Arithmetic",
  syntax: ["sqrt(x)"],
  description: "Compute the square root value. If x = y * y, then y is the square root of x.",
  examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
  seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
}, FE = {
  name: "sqrtm",
  category: "Arithmetic",
  syntax: ["sqrtm(x)"],
  description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
  examples: ["sqrtm([[33, 24], [48, 57]])"],
  seealso: ["sqrt", "abs", "square", "multiply"]
}, BE = {
  name: "sylvester",
  category: "Algebra",
  syntax: ["sylvester(A,B,C)"],
  description: "Solves the real-valued Sylvester equation AX+XB=C for X",
  examples: ["sylvester([[-1, -2], [1, 1]], [[-2, 1], [-1, 2]], [[-3, 2], [3, 0]])", "A = [[-1, -2], [1, 1]]; B = [[2, -1], [1, -2]]; C = [[-3, 2], [3, 0]]", "sylvester(A, B, C)"],
  seealso: ["schur", "lyap"]
}, TE = {
  name: "schur",
  category: "Algebra",
  syntax: ["schur(A)"],
  description: "Performs a real Schur decomposition of the real matrix A = UTU'",
  examples: ["schur([[1, 0], [-4, 3]])", "A = [[1, 0], [-4, 3]]", "schur(A)"],
  seealso: ["lyap", "sylvester"]
}, OE = {
  name: "lyap",
  category: "Algebra",
  syntax: ["lyap(A,Q)"],
  description: "Solves the Continuous-time Lyapunov equation AP+PA'+Q=0 for P",
  examples: ["lyap([[-2, 0], [1, -4]], [[3, 1], [1, 3]])", "A = [[-2, 0], [1, -4]]", "Q = [[3, 1], [1, 3]]", "lyap(A,Q)"],
  seealso: ["schur", "sylvester"]
}, _E = {
  name: "square",
  category: "Arithmetic",
  syntax: ["square(x)"],
  description: "Compute the square of a value. The square of x is x * x.",
  examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
  seealso: ["multiply", "pow", "sqrt", "cube"]
}, $E = {
  name: "subtract",
  category: "Operators",
  syntax: ["x - y", "subtract(x, y)"],
  description: "subtract two values.",
  examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
  seealso: ["add"]
}, IE = {
  name: "unaryMinus",
  category: "Operators",
  syntax: ["-x", "unaryMinus(x)"],
  description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
  examples: ["-4.5", "-(-5.6)", '-"22"'],
  seealso: ["add", "subtract", "unaryPlus"]
}, qE = {
  name: "unaryPlus",
  category: "Operators",
  syntax: ["+x", "unaryPlus(x)"],
  description: "Converts booleans and strings to numbers.",
  examples: ["+true", '+"2"'],
  seealso: ["add", "subtract", "unaryMinus"]
}, RE = {
  name: "xgcd",
  category: "Arithmetic",
  syntax: ["xgcd(a, b)"],
  description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
  examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
  seealso: ["gcd", "lcm"]
}, zE = {
  name: "bitAnd",
  category: "Bitwise",
  syntax: ["x & y", "bitAnd(x, y)"],
  description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
  examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
  seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
}, PE = {
  name: "bitNot",
  category: "Bitwise",
  syntax: ["~x", "bitNot(x)"],
  description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
  examples: ["~1", "~2", "bitNot([2, -3, 4])"],
  seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
}, UE = {
  name: "bitOr",
  category: "Bitwise",
  syntax: ["x | y", "bitOr(x, y)"],
  description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
  examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
  seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
}, LE = {
  name: "bitXor",
  category: "Bitwise",
  syntax: ["bitXor(x, y)"],
  description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
  examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
  seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
}, kE = {
  name: "leftShift",
  category: "Bitwise",
  syntax: ["x << y", "leftShift(x, y)"],
  description: "Bitwise left logical shift of a value x by y number of bits.",
  examples: ["4 << 1", "8 >> 1"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
}, HE = {
  name: "rightArithShift",
  category: "Bitwise",
  syntax: ["x >> y", "rightArithShift(x, y)"],
  description: "Bitwise right arithmetic shift of a value x by y number of bits.",
  examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
}, GE = {
  name: "rightLogShift",
  category: "Bitwise",
  syntax: ["x >>> y", "rightLogShift(x, y)"],
  description: "Bitwise right logical shift of a value x by y number of bits.",
  examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
}, VE = {
  name: "bellNumbers",
  category: "Combinatorics",
  syntax: ["bellNumbers(n)"],
  description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
  examples: ["bellNumbers(3)", "bellNumbers(8)"],
  seealso: ["stirlingS2"]
}, ZE = {
  name: "catalan",
  category: "Combinatorics",
  syntax: ["catalan(n)"],
  description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
  examples: ["catalan(3)", "catalan(8)"],
  seealso: ["bellNumbers"]
}, YE = {
  name: "composition",
  category: "Combinatorics",
  syntax: ["composition(n, k)"],
  description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
  examples: ["composition(5, 3)"],
  seealso: ["combinations"]
}, XE = {
  name: "stirlingS2",
  category: "Combinatorics",
  syntax: ["stirlingS2(n, k)"],
  description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
  examples: ["stirlingS2(5, 3)"],
  seealso: ["bellNumbers"]
}, WE = {
  name: "arg",
  category: "Complex",
  syntax: ["arg(x)"],
  description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
  examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
  seealso: ["re", "im", "conj", "abs"]
}, JE = {
  name: "conj",
  category: "Complex",
  syntax: ["conj(x)"],
  description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
  examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
  seealso: ["re", "im", "abs", "arg"]
}, QE = {
  name: "im",
  category: "Complex",
  syntax: ["im(x)"],
  description: "Get the imaginary part of a complex number.",
  examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
  seealso: ["re", "conj", "abs", "arg"]
}, KE = {
  name: "re",
  category: "Complex",
  syntax: ["re(x)"],
  description: "Get the real part of a complex number.",
  examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
  seealso: ["im", "conj", "abs", "arg"]
}, jE = {
  name: "evaluate",
  category: "Expression",
  syntax: ["evaluate(expression)", "evaluate(expression, scope)", "evaluate([expr1, expr2, expr3, ...])", "evaluate([expr1, expr2, expr3, ...], scope)"],
  description: "Evaluate an expression or an array with expressions.",
  examples: ['evaluate("2 + 3")', 'evaluate("sqrt(16)")', 'evaluate("2 inch to cm")', 'evaluate("sin(x * pi)", { "x": 1/2 })', 'evaluate(["width=2", "height=4","width*height"])'],
  seealso: []
}, eS = {
  name: "help",
  category: "Expression",
  syntax: ["help(object)", "help(string)"],
  description: "Display documentation on a function or data type.",
  examples: ["help(sqrt)", 'help("complex")'],
  seealso: []
}, rS = {
  name: "distance",
  category: "Geometry",
  syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"],
  description: "Calculates the Euclidean distance between two points.",
  examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
  seealso: []
}, tS = {
  name: "intersect",
  category: "Geometry",
  syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
  description: "Computes the intersection point of lines and/or planes.",
  examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
  seealso: []
}, nS = {
  name: "and",
  category: "Logical",
  syntax: ["x and y", "and(x, y)"],
  description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
  examples: ["true and false", "true and true", "2 and 4"],
  seealso: ["not", "or", "xor"]
}, aS = {
  name: "not",
  category: "Logical",
  syntax: ["not x", "not(x)"],
  description: "Logical not. Flips the boolean value of given argument.",
  examples: ["not true", "not false", "not 2", "not 0"],
  seealso: ["and", "or", "xor"]
}, iS = {
  name: "or",
  category: "Logical",
  syntax: ["x or y", "or(x, y)"],
  description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
  examples: ["true or false", "false or false", "0 or 4"],
  seealso: ["not", "and", "xor"]
}, oS = {
  name: "xor",
  category: "Logical",
  syntax: ["x xor y", "xor(x, y)"],
  description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
  examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
  seealso: ["not", "and", "or"]
}, sS = {
  name: "column",
  category: "Matrix",
  syntax: ["column(x, index)"],
  description: "Return a column from a matrix or array.",
  examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
  seealso: ["row", "matrixFromColumns"]
}, uS = {
  name: "concat",
  category: "Matrix",
  syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
  description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
  examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
  seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, lS = {
  name: "count",
  category: "Matrix",
  syntax: ["count(x)"],
  description: "Count the number of elements of a matrix, array or string.",
  examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)", 'count("hello world")'],
  seealso: ["size"]
}, cS = {
  name: "cross",
  category: "Matrix",
  syntax: ["cross(A, B)"],
  description: "Calculate the cross product for two vectors in three dimensional space.",
  examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
  seealso: ["multiply", "dot"]
}, fS = {
  name: "ctranspose",
  category: "Matrix",
  syntax: ["x'", "ctranspose(x)"],
  description: "Complex Conjugate and Transpose a matrix",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
}, mS = {
  name: "det",
  category: "Matrix",
  syntax: ["det(x)"],
  description: "Calculate the determinant of a matrix",
  examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
  seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, vS = {
  name: "diag",
  category: "Matrix",
  syntax: ["diag(x)", "diag(x, k)"],
  description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
  examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
  seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, pS = {
  name: "diff",
  category: "Matrix",
  syntax: ["diff(arr)", "diff(arr, dim)"],
  description: ["Create a new matrix or array with the difference of the passed matrix or array.", "Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference", "If no dimension parameter is passed it is assumed as dimension 0", "Dimension is zero-based in javascript and one-based in the parser", "Arrays must be 'rectangular' meaning arrays like [1, 2]", "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"],
  examples: ["A = [1, 2, 4, 7, 0]", "diff(A)", "diff(A, 1)", "B = [[1, 2], [3, 4]]", "diff(B)", "diff(B, 1)", "diff(B, 2)", "diff(B, bignumber(2))", "diff([[1, 2], matrix([3, 4])], 2)"],
  seealso: ["subtract", "partitionSelect"]
}, dS = {
  name: "dot",
  category: "Matrix",
  syntax: ["dot(A, B)", "A * B"],
  description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
  examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
  seealso: ["multiply", "cross"]
}, hS = {
  name: "eigs",
  category: "Matrix",
  syntax: ["eigs(x)"],
  description: "Calculate the eigenvalues and optionally eigenvectors of a square matrix",
  examples: ["eigs([[5, 2.3], [2.3, 1]])", "eigs([[1, 2, 3], [4, 5, 6], [7, 8, 9]], { precision: 1e-6, eigenvectors: false })"],
  seealso: ["inv"]
}, gS = {
  name: "filter",
  category: "Matrix",
  syntax: ["filter(x, test)"],
  description: "Filter items in a matrix.",
  examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
  seealso: ["sort", "map", "forEach"]
}, yS = {
  name: "flatten",
  category: "Matrix",
  syntax: ["flatten(x)"],
  description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
  seealso: ["concat", "resize", "size", "squeeze"]
}, bS = {
  name: "forEach",
  category: "Matrix",
  syntax: ["forEach(x, callback)"],
  description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
  examples: ["numberOfPets = {}", "addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;", 'forEach(["Dog","Cat","Cat"], addPet)', "numberOfPets"],
  seealso: ["map", "sort", "filter"]
}, xS = {
  name: "getMatrixDataType",
  category: "Matrix",
  syntax: ["getMatrixDataType(x)"],
  description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
  examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"],
  seealso: ["matrix", "sparse", "typeOf"]
}, wS = {
  name: "identity",
  category: "Matrix",
  syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
  description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
  examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"],
  seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, NS = {
  name: "inv",
  category: "Matrix",
  syntax: ["inv(x)"],
  description: "Calculate the inverse of a matrix",
  examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
  seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, DS = {
  name: "pinv",
  category: "Matrix",
  syntax: ["pinv(x)"],
  description: "Calculate the Moore–Penrose inverse of a matrix",
  examples: ["pinv([1, 2; 3, 4])", "pinv([[1, 0], [0, 1], [0, 1]])", "pinv(4)"],
  seealso: ["inv"]
}, AS = {
  name: "kron",
  category: "Matrix",
  syntax: ["kron(x, y)"],
  description: "Calculates the kronecker product of 2 matrices or vectors.",
  examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
  seealso: ["multiply", "dot", "cross"]
}, ES = {
  name: "map",
  category: "Matrix",
  syntax: ["map(x, callback)"],
  description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
  examples: ["map([1, 2, 3], square)"],
  seealso: ["filter", "forEach"]
}, SS = {
  name: "matrixFromColumns",
  category: "Matrix",
  syntax: ["matrixFromColumns(...arr)", "matrixFromColumns(row1, row2)", "matrixFromColumns(row1, row2, row3)"],
  description: "Create a dense matrix from vectors as individual columns.",
  examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"],
  seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"]
}, CS = {
  name: "matrixFromFunction",
  category: "Matrix",
  syntax: ["matrixFromFunction(size, fn)", "matrixFromFunction(size, fn, format)", "matrixFromFunction(size, fn, format, datatype)", "matrixFromFunction(size, format, fn)", "matrixFromFunction(size, format, datatype, fn)"],
  description: "Create a matrix by evaluating a generating function at each index.",
  examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)", "g(I) = I[1] - I[2] == 1 ? 4 : 0", 'matrixFromFunction([100, 100], "sparse", g)', "matrixFromFunction([5], random)"],
  seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"]
}, MS = {
  name: "matrixFromRows",
  category: "Matrix",
  syntax: ["matrixFromRows(...arr)", "matrixFromRows(row1, row2)", "matrixFromRows(row1, row2, row3)"],
  description: "Create a dense matrix from vectors as individual rows.",
  examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"],
  seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"]
}, FS = {
  name: "ones",
  category: "Matrix",
  syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"],
  description: "Create a matrix containing ones.",
  examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, BS = {
  name: "partitionSelect",
  category: "Matrix",
  syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
  description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
  examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1, compareText)', "arr = [5, 2, 1]", "partitionSelect(arr, 0) # returns 1, arr is now: [1, 2, 5]", "arr", "partitionSelect(arr, 1, 'desc') # returns 2, arr is now: [5, 2, 1]", "arr"],
  seealso: ["sort"]
}, TS = {
  name: "range",
  category: "Type",
  syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
  description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
  examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "range(1m, 1m, 3m)", "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
}, OS = {
  name: "reshape",
  category: "Matrix",
  syntax: ["reshape(x, sizes)"],
  description: "Reshape a multi dimensional array to fit the specified dimensions.",
  examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])", "reshape([1, 2, 3, 4], [-1, 2])"],
  seealso: ["size", "squeeze", "resize"]
}, _S = {
  name: "resize",
  category: "Matrix",
  syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
  description: "Resize a matrix.",
  examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
  seealso: ["size", "subset", "squeeze", "reshape"]
}, $S = {
  name: "rotate",
  category: "Matrix",
  syntax: ["rotate(w, theta)", "rotate(w, theta, v)"],
  description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
  examples: ["rotate([1, 0], pi / 2)", 'rotate(matrix([1, 0]), unit("35deg"))', 'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])', 'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'],
  seealso: ["matrix", "rotationMatrix"]
}, IS = {
  name: "rotationMatrix",
  category: "Matrix",
  syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)", "rotationMatrix(theta, v, format)"],
  description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
  examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])', 'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'],
  seealso: ["cos", "sin"]
}, qS = {
  name: "row",
  category: "Matrix",
  syntax: ["row(x, index)"],
  description: "Return a row from a matrix or array.",
  examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
  seealso: ["column", "matrixFromRows"]
}, RS = {
  name: "size",
  category: "Matrix",
  syntax: ["size(x)"],
  description: "Calculate the size of a matrix.",
  examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
  seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
}, zS = {
  name: "sort",
  category: "Matrix",
  syntax: ["sort(x)", "sort(x, compare)"],
  description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
  examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"], "natural")', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
  seealso: ["map", "filter", "forEach"]
}, PS = {
  name: "squeeze",
  category: "Matrix",
  syntax: ["squeeze(x)"],
  description: "Remove inner and outer singleton dimensions from a matrix.",
  examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
}, US = {
  name: "subset",
  category: "Matrix",
  syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
  description: "Get or set a subset of the entries of a matrix or characters of a string. Indexes are one-based. There should be one index specification for each dimension of the target. Each specification can be a single index, a list of indices, or a range in colon notation `l:u`. In a range, both the lower bound l and upper bound u are included; and if a bound is omitted it defaults to the most extreme valid value. The cartesian product of the indices specified in each dimension determines the target of the operation.",
  examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]", "f[[1,2], [1,3]] = [9, 10; 11, 12]", "f"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
}, LS = {
  name: "trace",
  category: "Matrix",
  syntax: ["trace(A)"],
  description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
  examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
}, kS = {
  name: "transpose",
  category: "Matrix",
  syntax: ["x'", "transpose(x)"],
  description: "Transpose a matrix",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
}, HS = {
  name: "zeros",
  category: "Matrix",
  syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"],
  description: "Create a matrix containing zeros.",
  examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
}, GS = {
  name: "fft",
  category: "Matrix",
  syntax: ["fft(x)"],
  description: "Calculate N-dimensional fourier transform",
  examples: ["fft([[1, 0], [1, 0]])"],
  seealso: ["ifft"]
}, VS = {
  name: "ifft",
  category: "Matrix",
  syntax: ["ifft(x)"],
  description: "Calculate N-dimensional inverse fourier transform",
  examples: ["ifft([[2, 2], [0, 0]])"],
  seealso: ["fft"]
}, ZS = {
  name: "combinations",
  category: "Probability",
  syntax: ["combinations(n, k)"],
  description: "Compute the number of combinations of n items taken k at a time",
  examples: ["combinations(7, 5)"],
  seealso: ["combinationsWithRep", "permutations", "factorial"]
}, YS = {
  name: "combinationsWithRep",
  category: "Probability",
  syntax: ["combinationsWithRep(n, k)"],
  description: "Compute the number of combinations of n items taken k at a time with replacements.",
  examples: ["combinationsWithRep(7, 5)"],
  seealso: ["combinations", "permutations", "factorial"]
}, XS = {
  name: "factorial",
  category: "Probability",
  syntax: ["n!", "factorial(n)"],
  description: "Compute the factorial of a value",
  examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
  seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"]
}, WS = {
  name: "gamma",
  category: "Probability",
  syntax: ["gamma(n)"],
  description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
  examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
  seealso: ["factorial"]
}, JS = {
  name: "lgamma",
  category: "Probability",
  syntax: ["lgamma(n)"],
  description: "Logarithm of the gamma function for real, positive numbers and complex numbers, using Lanczos approximation for numbers and Stirling series for complex numbers.",
  examples: ["lgamma(4)", "lgamma(1/2)", "lgamma(i)", "lgamma(complex(1.1, 2))"],
  seealso: ["gamma"]
}, QS = {
  name: "kldivergence",
  category: "Probability",
  syntax: ["kldivergence(x, y)"],
  description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
  examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
  seealso: []
}, KS = {
  name: "multinomial",
  category: "Probability",
  syntax: ["multinomial(A)"],
  description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
  examples: ["multinomial([1, 2, 1])"],
  seealso: ["combinations", "factorial"]
}, jS = {
  name: "permutations",
  category: "Probability",
  syntax: ["permutations(n)", "permutations(n, k)"],
  description: "Compute the number of permutations of n items taken k at a time",
  examples: ["permutations(5)", "permutations(5, 3)"],
  seealso: ["combinations", "combinationsWithRep", "factorial"]
}, eC = {
  name: "pickRandom",
  category: "Probability",
  syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"],
  description: "Pick a random entry from a given array.",
  examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"],
  seealso: ["random", "randomInt"]
}, rC = {
  name: "random",
  category: "Probability",
  syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
  description: "Return a random number.",
  examples: ["random()", "random(10, 20)", "random([2, 3])"],
  seealso: ["pickRandom", "randomInt"]
}, tC = {
  name: "randomInt",
  category: "Probability",
  syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"],
  description: "Return a random integer number",
  examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
  seealso: ["pickRandom", "random"]
}, nC = {
  name: "compare",
  category: "Relational",
  syntax: ["compare(x, y)"],
  description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"]
}, aC = {
  name: "compareNatural",
  category: "Relational",
  syntax: ["compareNatural(x, y)"],
  description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
}, iC = {
  name: "compareText",
  category: "Relational",
  syntax: ["compareText(x, y)"],
  description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'],
  seealso: ["compare", "compareNatural"]
}, oC = {
  name: "deepEqual",
  category: "Relational",
  syntax: ["deepEqual(x, y)"],
  description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
  examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
  seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
}, sC = {
  name: "equal",
  category: "Relational",
  syntax: ["x == y", "equal(x, y)"],
  description: "Check equality of two values. Returns true if the values are equal, and false if not.",
  examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
  seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"]
}, uC = {
  name: "equalText",
  category: "Relational",
  syntax: ["equalText(x, y)"],
  description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
  examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'],
  seealso: ["compare", "compareNatural", "compareText", "equal"]
}, lC = {
  name: "larger",
  category: "Relational",
  syntax: ["x > y", "larger(x, y)"],
  description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
  examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
}, cC = {
  name: "largerEq",
  category: "Relational",
  syntax: ["x >= y", "largerEq(x, y)"],
  description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
  examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
  seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
}, fC = {
  name: "smaller",
  category: "Relational",
  syntax: ["x < y", "smaller(x, y)"],
  description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
  examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
  seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
}, mC = {
  name: "smallerEq",
  category: "Relational",
  syntax: ["x <= y", "smallerEq(x, y)"],
  description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
  examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
  seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
}, vC = {
  name: "unequal",
  category: "Relational",
  syntax: ["x != y", "unequal(x, y)"],
  description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
  examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
  seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
}, pC = {
  name: "setCartesian",
  category: "Set",
  syntax: ["setCartesian(set1, set2)"],
  description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.",
  examples: ["setCartesian([1, 2], [3, 4])"],
  seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
}, dC = {
  name: "setDifference",
  category: "Set",
  syntax: ["setDifference(set1, set2)"],
  description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setIntersect", "setSymDifference"]
}, hC = {
  name: "setDistinct",
  category: "Set",
  syntax: ["setDistinct(set)"],
  description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
  seealso: ["setMultiplicity"]
}, gC = {
  name: "setIntersect",
  category: "Set",
  syntax: ["setIntersect(set1, set2)"],
  description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setDifference"]
}, yC = {
  name: "setIsSubset",
  category: "Set",
  syntax: ["setIsSubset(set1, set2)"],
  description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
}, bC = {
  name: "setMultiplicity",
  category: "Set",
  syntax: ["setMultiplicity(element, set)"],
  description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"],
  seealso: ["setDistinct", "setSize"]
}, xC = {
  name: "setPowerset",
  category: "Set",
  syntax: ["setPowerset(set)"],
  description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setPowerset([1, 2, 3])"],
  seealso: ["setCartesian"]
}, wC = {
  name: "setSize",
  category: "Set",
  syntax: ["setSize(set)", "setSize(set, unique)"],
  description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
  examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
}, NC = {
  name: "setSymDifference",
  category: "Set",
  syntax: ["setSymDifference(set1, set2)"],
  description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
}, DC = {
  name: "setUnion",
  category: "Set",
  syntax: ["setUnion(set1, set2)"],
  description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setIntersect", "setDifference"]
}, AC = {
  name: "zpk2tf",
  category: "Signal",
  syntax: ["zpk2tf(z, p, k)"],
  description: "Compute the transfer function of a zero-pole-gain model.",
  examples: ["zpk2tf([1, 2], [-1, -2], 1)", "zpk2tf([1, 2], [-1, -2])", "zpk2tf([1 - 3i, 2 + 2i], [-1, -2])"],
  seealso: []
}, EC = {
  name: "freqz",
  category: "Signal",
  syntax: ["freqz(b, a)", "freqz(b, a, w)"],
  description: "Calculates the frequency response of a filter given its numerator and denominator coefficients.",
  examples: ["freqz([1, 2], [1, 2, 3])", "freqz([1, 2], [1, 2, 3], [0, 1])", "freqz([1, 2], [1, 2, 3], 512)"],
  seealso: []
}, SC = {
  name: "erf",
  category: "Special",
  syntax: ["erf(x)"],
  description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
  examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
  seealso: []
}, CC = {
  name: "zeta",
  category: "Special",
  syntax: ["zeta(s)"],
  description: "Compute the Riemann Zeta Function using an infinite series and Riemanns Functional Equation for the entire complex plane",
  examples: ["zeta(0.2)", "zeta(-0.5)", "zeta(4)"],
  seealso: []
}, MC = {
  name: "mad",
  category: "Statistics",
  syntax: ["mad(a, b, c, ...)", "mad(A)"],
  description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
  examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
  seealso: ["mean", "median", "std", "abs"]
}, FC = {
  name: "max",
  category: "Statistics",
  syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dimension)"],
  description: "Compute the maximum value of a list of values.",
  examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
  seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
}, BC = {
  name: "mean",
  category: "Statistics",
  syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dimension)"],
  description: "Compute the arithmetic mean of a list of values.",
  examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
  seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
}, TC = {
  name: "median",
  category: "Statistics",
  syntax: ["median(a, b, c, ...)", "median(A)"],
  description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
  examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
  seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
}, OC = {
  name: "min",
  category: "Statistics",
  syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dimension)"],
  description: "Compute the minimum value of a list of values.",
  examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
  seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
}, _C = {
  name: "mode",
  category: "Statistics",
  syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
  description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
  examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"],
  seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
}, $C = {
  name: "prod",
  category: "Statistics",
  syntax: ["prod(a, b, c, ...)", "prod(A)"],
  description: "Compute the product of all values.",
  examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
  seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
}, IC = {
  name: "quantileSeq",
  category: "Statistics",
  syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
  description: `Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. 

In case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.`,
  examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
  seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
}, qC = {
  name: "std",
  category: "Statistics",
  syntax: ["std(a, b, c, ...)", "std(A)", "std(A, dimension)", "std(A, normalization)", "std(A, dimension, normalization)"],
  description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
  examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
  seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"]
}, RC = {
  name: "cumsum",
  category: "Statistics",
  syntax: ["cumsum(a, b, c, ...)", "cumsum(A)"],
  description: "Compute the cumulative sum of all values.",
  examples: ["cumsum(2, 3, 4, 1)", "cumsum([2, 3, 4, 1])", "cumsum([1, 2; 3, 4])", "cumsum([1, 2; 3, 4], 1)", "cumsum([1, 2; 3, 4], 2)"],
  seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
}, zC = {
  name: "sum",
  category: "Statistics",
  syntax: ["sum(a, b, c, ...)", "sum(A)", "sum(A, dimension)"],
  description: "Compute the sum of all values.",
  examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
  seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
}, PC = {
  name: "variance",
  category: "Statistics",
  syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, dimension)", "variance(A, normalization)", "variance(A, dimension, normalization)"],
  description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
  examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"],
  seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
}, UC = {
  name: "corr",
  category: "Statistics",
  syntax: ["corr(A,B)"],
  description: "Compute the correlation coefficient of a two list with values, For matrices, the matrix correlation coefficient is calculated.",
  examples: ["corr([2, 4, 6, 8],[1, 2, 3, 6])", "corr(matrix([[1, 2.2, 3, 4.8, 5], [1, 2, 3, 4, 5]]), matrix([[4, 5.3, 6.6, 7, 8], [1, 2, 3, 4, 5]]))"],
  seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
}, LC = {
  name: "acos",
  category: "Trigonometry",
  syntax: ["acos(x)"],
  description: "Compute the inverse cosine of a value in radians.",
  examples: ["acos(0.5)", "acos(cos(2.3))"],
  seealso: ["cos", "atan", "asin"]
}, kC = {
  name: "acosh",
  category: "Trigonometry",
  syntax: ["acosh(x)"],
  description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
  examples: ["acosh(1.5)"],
  seealso: ["cosh", "asinh", "atanh"]
}, HC = {
  name: "acot",
  category: "Trigonometry",
  syntax: ["acot(x)"],
  description: "Calculate the inverse cotangent of a value.",
  examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
  seealso: ["cot", "atan"]
}, GC = {
  name: "acoth",
  category: "Trigonometry",
  syntax: ["acoth(x)"],
  description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
  examples: ["acoth(2)", "acoth(0.5)"],
  seealso: ["acsch", "asech"]
}, VC = {
  name: "acsc",
  category: "Trigonometry",
  syntax: ["acsc(x)"],
  description: "Calculate the inverse cotangent of a value.",
  examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
  seealso: ["csc", "asin", "asec"]
}, ZC = {
  name: "acsch",
  category: "Trigonometry",
  syntax: ["acsch(x)"],
  description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
  examples: ["acsch(0.5)"],
  seealso: ["asech", "acoth"]
}, YC = {
  name: "asec",
  category: "Trigonometry",
  syntax: ["asec(x)"],
  description: "Calculate the inverse secant of a value.",
  examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
  seealso: ["acos", "acot", "acsc"]
}, XC = {
  name: "asech",
  category: "Trigonometry",
  syntax: ["asech(x)"],
  description: "Calculate the inverse secant of a value.",
  examples: ["asech(0.5)"],
  seealso: ["acsch", "acoth"]
}, WC = {
  name: "asin",
  category: "Trigonometry",
  syntax: ["asin(x)"],
  description: "Compute the inverse sine of a value in radians.",
  examples: ["asin(0.5)", "asin(sin(0.5))"],
  seealso: ["sin", "acos", "atan"]
}, JC = {
  name: "asinh",
  category: "Trigonometry",
  syntax: ["asinh(x)"],
  description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
  examples: ["asinh(0.5)"],
  seealso: ["acosh", "atanh"]
}, QC = {
  name: "atan",
  category: "Trigonometry",
  syntax: ["atan(x)"],
  description: "Compute the inverse tangent of a value in radians.",
  examples: ["atan(0.5)", "atan(tan(0.5))"],
  seealso: ["tan", "acos", "asin"]
}, KC = {
  name: "atan2",
  category: "Trigonometry",
  syntax: ["atan2(y, x)"],
  description: "Computes the principal value of the arc tangent of y/x in radians.",
  examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
  seealso: ["sin", "cos", "tan"]
}, jC = {
  name: "atanh",
  category: "Trigonometry",
  syntax: ["atanh(x)"],
  description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
  examples: ["atanh(0.5)"],
  seealso: ["acosh", "asinh"]
}, eM = {
  name: "cos",
  category: "Trigonometry",
  syntax: ["cos(x)"],
  description: "Compute the cosine of x in radians.",
  examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
  seealso: ["acos", "sin", "tan"]
}, rM = {
  name: "cosh",
  category: "Trigonometry",
  syntax: ["cosh(x)"],
  description: "Compute the hyperbolic cosine of x in radians.",
  examples: ["cosh(0.5)"],
  seealso: ["sinh", "tanh", "coth"]
}, tM = {
  name: "cot",
  category: "Trigonometry",
  syntax: ["cot(x)"],
  description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
  examples: ["cot(2)", "1 / tan(2)"],
  seealso: ["sec", "csc", "tan"]
}, nM = {
  name: "coth",
  category: "Trigonometry",
  syntax: ["coth(x)"],
  description: "Compute the hyperbolic cotangent of x in radians.",
  examples: ["coth(2)", "1 / tanh(2)"],
  seealso: ["sech", "csch", "tanh"]
}, aM = {
  name: "csc",
  category: "Trigonometry",
  syntax: ["csc(x)"],
  description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
  examples: ["csc(2)", "1 / sin(2)"],
  seealso: ["sec", "cot", "sin"]
}, iM = {
  name: "csch",
  category: "Trigonometry",
  syntax: ["csch(x)"],
  description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
  examples: ["csch(2)", "1 / sinh(2)"],
  seealso: ["sech", "coth", "sinh"]
}, oM = {
  name: "sec",
  category: "Trigonometry",
  syntax: ["sec(x)"],
  description: "Compute the secant of x in radians. Defined as 1/cos(x)",
  examples: ["sec(2)", "1 / cos(2)"],
  seealso: ["cot", "csc", "cos"]
}, sM = {
  name: "sech",
  category: "Trigonometry",
  syntax: ["sech(x)"],
  description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
  examples: ["sech(2)", "1 / cosh(2)"],
  seealso: ["coth", "csch", "cosh"]
}, uM = {
  name: "sin",
  category: "Trigonometry",
  syntax: ["sin(x)"],
  description: "Compute the sine of x in radians.",
  examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
  seealso: ["asin", "cos", "tan"]
}, lM = {
  name: "sinh",
  category: "Trigonometry",
  syntax: ["sinh(x)"],
  description: "Compute the hyperbolic sine of x in radians.",
  examples: ["sinh(0.5)"],
  seealso: ["cosh", "tanh"]
}, cM = {
  name: "tan",
  category: "Trigonometry",
  syntax: ["tan(x)"],
  description: "Compute the tangent of x in radians.",
  examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
  seealso: ["atan", "sin", "cos"]
}, fM = {
  name: "tanh",
  category: "Trigonometry",
  syntax: ["tanh(x)"],
  description: "Compute the hyperbolic tangent of x in radians.",
  examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
  seealso: ["sinh", "cosh"]
}, mM = {
  name: "to",
  category: "Units",
  syntax: ["x to unit", "to(x, unit)"],
  description: "Change the unit of a value.",
  examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
  seealso: []
}, vM = {
  name: "bin",
  category: "Utils",
  syntax: ["bin(value)"],
  description: "Format a number as binary",
  examples: ["bin(2)"],
  seealso: ["oct", "hex"]
}, pM = {
  name: "clone",
  category: "Utils",
  syntax: ["clone(x)"],
  description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
  examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
  seealso: []
}, dM = {
  name: "format",
  category: "Utils",
  syntax: ["format(value)", "format(value, precision)"],
  description: "Format a value of any type as string.",
  examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
  seealso: ["print"]
}, hM = {
  name: "hasNumericValue",
  category: "Utils",
  syntax: ["hasNumericValue(x)"],
  description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
  examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'],
  seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"]
}, gM = {
  name: "hex",
  category: "Utils",
  syntax: ["hex(value)"],
  description: "Format a number as hexadecimal",
  examples: ["hex(240)"],
  seealso: ["bin", "oct"]
}, yM = {
  name: "isInteger",
  category: "Utils",
  syntax: ["isInteger(x)"],
  description: "Test whether a value is an integer number.",
  examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
  seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
}, bM = {
  name: "isNaN",
  category: "Utils",
  syntax: ["isNaN(x)"],
  description: "Test whether a value is NaN (not a number)",
  examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
  seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
}, xM = {
  name: "isNegative",
  category: "Utils",
  syntax: ["isNegative(x)"],
  description: "Test whether a value is negative: smaller than zero.",
  examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
  seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
}, wM = {
  name: "isNumeric",
  category: "Utils",
  syntax: ["isNumeric(x)"],
  description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
  examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
  seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
}, NM = {
  name: "isPositive",
  category: "Utils",
  syntax: ["isPositive(x)"],
  description: "Test whether a value is positive: larger than zero.",
  examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
}, DM = {
  name: "isPrime",
  category: "Utils",
  syntax: ["isPrime(x)"],
  description: "Test whether a value is prime: has no divisors other than itself and one.",
  examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
}, AM = {
  name: "isZero",
  category: "Utils",
  syntax: ["isZero(x)"],
  description: "Test whether a value is zero.",
  examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
}, EM = {
  name: "numeric",
  category: "Utils",
  syntax: ["numeric(x)"],
  description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
  examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction")', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number")'],
  seealso: ["number", "fraction", "bignumber", "string", "format"]
}, SM = {
  name: "oct",
  category: "Utils",
  syntax: ["oct(value)"],
  description: "Format a number as octal",
  examples: ["oct(56)"],
  seealso: ["bin", "hex"]
}, CM = {
  name: "print",
  category: "Utils",
  syntax: ["print(template, values)", "print(template, values, precision)"],
  description: "Interpolate values into a string template.",
  examples: ['print("Lucy is $age years old", {age: 5})', 'print("The value of pi is $pi", {pi: pi}, 3)', 'print("Hello, $user.name!", {user: {name: "John"}})', 'print("Values: $1, $2, $3", [6, 9, 4])'],
  seealso: ["format"]
}, MM = {
  name: "typeOf",
  category: "Utils",
  syntax: ["typeOf(x)"],
  description: "Get the type of a variable.",
  examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'],
  seealso: ["getMatrixDataType"]
}, FM = {
  name: "solveODE",
  category: "Numeric",
  syntax: ["solveODE(func, tspan, y0)", "solveODE(func, tspan, y0, options)"],
  description: "Numerical Integration of Ordinary Differential Equations.",
  examples: ["f(t,y) = y", "tspan = [0, 4]", "solveODE(f, tspan, 1)", "solveODE(f, tspan, [1, 2])", 'solveODE(f, tspan, 1, { method:"RK23", maxStep:0.1 })'],
  seealso: ["derivative", "simplifyCore"]
}, BM = {
  // construction functions
  bignumber: xA,
  boolean: wA,
  complex: NA,
  createUnit: DA,
  fraction: AA,
  index: EA,
  matrix: SA,
  number: CA,
  sparse: MA,
  splitUnit: FA,
  string: BA,
  unit: TA,
  // constants
  e: ic,
  E: ic,
  false: iA,
  i: oA,
  Infinity: sA,
  LN2: lA,
  LN10: uA,
  LOG2E: fA,
  LOG10E: cA,
  NaN: mA,
  null: vA,
  pi: oc,
  PI: oc,
  phi: pA,
  SQRT1_2: dA,
  SQRT2: hA,
  tau: gA,
  true: yA,
  version: bA,
  // physical constants
  // TODO: more detailed docs for physical constants
  speedOfLight: {
    description: "Speed of light in vacuum",
    examples: ["speedOfLight"]
  },
  gravitationConstant: {
    description: "Newtonian constant of gravitation",
    examples: ["gravitationConstant"]
  },
  planckConstant: {
    description: "Planck constant",
    examples: ["planckConstant"]
  },
  reducedPlanckConstant: {
    description: "Reduced Planck constant",
    examples: ["reducedPlanckConstant"]
  },
  magneticConstant: {
    description: "Magnetic constant (vacuum permeability)",
    examples: ["magneticConstant"]
  },
  electricConstant: {
    description: "Electric constant (vacuum permeability)",
    examples: ["electricConstant"]
  },
  vacuumImpedance: {
    description: "Characteristic impedance of vacuum",
    examples: ["vacuumImpedance"]
  },
  coulomb: {
    description: "Coulomb's constant",
    examples: ["coulomb"]
  },
  elementaryCharge: {
    description: "Elementary charge",
    examples: ["elementaryCharge"]
  },
  bohrMagneton: {
    description: "Borh magneton",
    examples: ["bohrMagneton"]
  },
  conductanceQuantum: {
    description: "Conductance quantum",
    examples: ["conductanceQuantum"]
  },
  inverseConductanceQuantum: {
    description: "Inverse conductance quantum",
    examples: ["inverseConductanceQuantum"]
  },
  // josephson: {description: 'Josephson constant', examples: ['josephson']},
  magneticFluxQuantum: {
    description: "Magnetic flux quantum",
    examples: ["magneticFluxQuantum"]
  },
  nuclearMagneton: {
    description: "Nuclear magneton",
    examples: ["nuclearMagneton"]
  },
  klitzing: {
    description: "Von Klitzing constant",
    examples: ["klitzing"]
  },
  bohrRadius: {
    description: "Borh radius",
    examples: ["bohrRadius"]
  },
  classicalElectronRadius: {
    description: "Classical electron radius",
    examples: ["classicalElectronRadius"]
  },
  electronMass: {
    description: "Electron mass",
    examples: ["electronMass"]
  },
  fermiCoupling: {
    description: "Fermi coupling constant",
    examples: ["fermiCoupling"]
  },
  fineStructure: {
    description: "Fine-structure constant",
    examples: ["fineStructure"]
  },
  hartreeEnergy: {
    description: "Hartree energy",
    examples: ["hartreeEnergy"]
  },
  protonMass: {
    description: "Proton mass",
    examples: ["protonMass"]
  },
  deuteronMass: {
    description: "Deuteron Mass",
    examples: ["deuteronMass"]
  },
  neutronMass: {
    description: "Neutron mass",
    examples: ["neutronMass"]
  },
  quantumOfCirculation: {
    description: "Quantum of circulation",
    examples: ["quantumOfCirculation"]
  },
  rydberg: {
    description: "Rydberg constant",
    examples: ["rydberg"]
  },
  thomsonCrossSection: {
    description: "Thomson cross section",
    examples: ["thomsonCrossSection"]
  },
  weakMixingAngle: {
    description: "Weak mixing angle",
    examples: ["weakMixingAngle"]
  },
  efimovFactor: {
    description: "Efimov factor",
    examples: ["efimovFactor"]
  },
  atomicMass: {
    description: "Atomic mass constant",
    examples: ["atomicMass"]
  },
  avogadro: {
    description: "Avogadro's number",
    examples: ["avogadro"]
  },
  boltzmann: {
    description: "Boltzmann constant",
    examples: ["boltzmann"]
  },
  faraday: {
    description: "Faraday constant",
    examples: ["faraday"]
  },
  firstRadiation: {
    description: "First radiation constant",
    examples: ["firstRadiation"]
  },
  loschmidt: {
    description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
    examples: ["loschmidt"]
  },
  gasConstant: {
    description: "Gas constant",
    examples: ["gasConstant"]
  },
  molarPlanckConstant: {
    description: "Molar Planck constant",
    examples: ["molarPlanckConstant"]
  },
  molarVolume: {
    description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
    examples: ["molarVolume"]
  },
  sackurTetrode: {
    description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
    examples: ["sackurTetrode"]
  },
  secondRadiation: {
    description: "Second radiation constant",
    examples: ["secondRadiation"]
  },
  stefanBoltzmann: {
    description: "Stefan-Boltzmann constant",
    examples: ["stefanBoltzmann"]
  },
  wienDisplacement: {
    description: "Wien displacement law constant",
    examples: ["wienDisplacement"]
  },
  // spectralRadiance: {description: 'First radiation constant for spectral radiance', examples: ['spectralRadiance']},
  molarMass: {
    description: "Molar mass constant",
    examples: ["molarMass"]
  },
  molarMassC12: {
    description: "Molar mass constant of carbon-12",
    examples: ["molarMassC12"]
  },
  gravity: {
    description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
    examples: ["gravity"]
  },
  planckLength: {
    description: "Planck length",
    examples: ["planckLength"]
  },
  planckMass: {
    description: "Planck mass",
    examples: ["planckMass"]
  },
  planckTime: {
    description: "Planck time",
    examples: ["planckTime"]
  },
  planckCharge: {
    description: "Planck charge",
    examples: ["planckCharge"]
  },
  planckTemperature: {
    description: "Planck temperature",
    examples: ["planckTemperature"]
  },
  // functions - algebra
  derivative: IA,
  lsolve: RA,
  lsolveAll: zA,
  lup: PA,
  lusolve: UA,
  leafCount: qA,
  polynomialRoot: LA,
  resolve: GA,
  simplify: VA,
  simplifyConstant: ZA,
  simplifyCore: YA,
  symbolicEqual: WA,
  rationalize: HA,
  slu: XA,
  usolve: JA,
  usolveAll: QA,
  qr: kA,
  // functions - arithmetic
  abs: KA,
  add: jA,
  cbrt: eE,
  ceil: rE,
  cube: tE,
  divide: nE,
  dotDivide: aE,
  dotMultiply: iE,
  dotPow: oE,
  exp: sE,
  expm: uE,
  expm1: lE,
  fix: cE,
  floor: fE,
  gcd: mE,
  hypot: vE,
  lcm: dE,
  log: hE,
  log2: bE,
  log1p: yE,
  log10: gE,
  mod: xE,
  multiply: wE,
  norm: NE,
  nthRoot: DE,
  nthRoots: AE,
  pow: EE,
  round: SE,
  sign: CE,
  sqrt: ME,
  sqrtm: FE,
  square: _E,
  subtract: $E,
  unaryMinus: IE,
  unaryPlus: qE,
  xgcd: RE,
  invmod: pE,
  // functions - bitwise
  bitAnd: zE,
  bitNot: PE,
  bitOr: UE,
  bitXor: LE,
  leftShift: kE,
  rightArithShift: HE,
  rightLogShift: GE,
  // functions - combinatorics
  bellNumbers: VE,
  catalan: ZE,
  composition: YE,
  stirlingS2: XE,
  // functions - core
  config: OA,
  import: _A,
  typed: $A,
  // functions - complex
  arg: WE,
  conj: JE,
  re: KE,
  im: QE,
  // functions - expression
  evaluate: jE,
  help: eS,
  // functions - geometry
  distance: rS,
  intersect: tS,
  // functions - logical
  and: nS,
  not: aS,
  or: iS,
  xor: oS,
  // functions - matrix
  concat: uS,
  count: lS,
  cross: cS,
  column: sS,
  ctranspose: fS,
  det: mS,
  diag: vS,
  diff: pS,
  dot: dS,
  getMatrixDataType: xS,
  identity: wS,
  filter: gS,
  flatten: yS,
  forEach: bS,
  inv: NS,
  pinv: DS,
  eigs: hS,
  kron: AS,
  matrixFromFunction: CS,
  matrixFromRows: MS,
  matrixFromColumns: SS,
  map: ES,
  ones: FS,
  partitionSelect: BS,
  range: TS,
  resize: _S,
  reshape: OS,
  rotate: $S,
  rotationMatrix: IS,
  row: qS,
  size: RS,
  sort: zS,
  squeeze: PS,
  subset: US,
  trace: LS,
  transpose: kS,
  zeros: HS,
  fft: GS,
  ifft: VS,
  sylvester: BE,
  schur: TE,
  lyap: OE,
  // functions - numeric
  solveODE: FM,
  // functions - probability
  combinations: ZS,
  combinationsWithRep: YS,
  // distribution: distributionDocs,
  factorial: XS,
  gamma: WS,
  kldivergence: QS,
  lgamma: JS,
  multinomial: KS,
  permutations: jS,
  pickRandom: eC,
  random: rC,
  randomInt: tC,
  // functions - relational
  compare: nC,
  compareNatural: aC,
  compareText: iC,
  deepEqual: oC,
  equal: sC,
  equalText: uC,
  larger: lC,
  largerEq: cC,
  smaller: fC,
  smallerEq: mC,
  unequal: vC,
  // functions - set
  setCartesian: pC,
  setDifference: dC,
  setDistinct: hC,
  setIntersect: gC,
  setIsSubset: yC,
  setMultiplicity: bC,
  setPowerset: xC,
  setSize: wC,
  setSymDifference: NC,
  setUnion: DC,
  // functions - signal
  zpk2tf: AC,
  freqz: EC,
  // functions - special
  erf: SC,
  zeta: CC,
  // functions - statistics
  cumsum: RC,
  mad: MC,
  max: FC,
  mean: BC,
  median: TC,
  min: OC,
  mode: _C,
  prod: $C,
  quantileSeq: IC,
  std: qC,
  sum: zC,
  variance: PC,
  corr: UC,
  // functions - trigonometry
  acos: LC,
  acosh: kC,
  acot: HC,
  acoth: GC,
  acsc: VC,
  acsch: ZC,
  asec: YC,
  asech: XC,
  asin: WC,
  asinh: JC,
  atan: QC,
  atanh: jC,
  atan2: KC,
  cos: eM,
  cosh: rM,
  cot: tM,
  coth: nM,
  csc: aM,
  csch: iM,
  sec: oM,
  sech: sM,
  sin: uM,
  sinh: lM,
  tan: cM,
  tanh: fM,
  // functions - units
  to: mM,
  // functions - utils
  clone: pM,
  format: dM,
  bin: vM,
  oct: SM,
  hex: gM,
  isNaN: bM,
  isInteger: yM,
  isNegative: xM,
  isNumeric: wM,
  hasNumericValue: hM,
  isPositive: NM,
  isPrime: DM,
  isZero: AM,
  print: CM,
  typeOf: MM,
  numeric: EM
}, sc = "help", TM = ["typed", "mathWithTransform", "Help"], OM = /* @__PURE__ */ q(sc, TM, (e) => {
  var {
    typed: r,
    mathWithTransform: i,
    Help: a
  } = e;
  return r(sc, {
    any: function(n) {
      var o, f = n;
      if (typeof n != "string") {
        for (o in i)
          if (Ee(i, o) && n === i[o]) {
            f = o;
            break;
          }
      }
      var l = Br(BM, f);
      if (!l) {
        var u = typeof f == "function" ? f.name : f;
        throw new Error('No documentation found on "' + u + '"');
      }
      return new a(l);
    }
  });
}), uc = "chain", _M = ["typed", "Chain"], $M = /* @__PURE__ */ q(uc, _M, (e) => {
  var {
    typed: r,
    Chain: i
  } = e;
  return r(uc, {
    "": function() {
      return new i();
    },
    any: function(t) {
      return new i(t);
    }
  });
}), lc = "det", IM = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], qM = /* @__PURE__ */ q(lc, IM, (e) => {
  var {
    typed: r,
    matrix: i,
    subtractScalar: a,
    multiply: t,
    divideScalar: n,
    isZero: o,
    unaryMinus: f
  } = e;
  return r(lc, {
    any: function(s) {
      return _e(s);
    },
    "Array | Matrix": function(s) {
      var c;
      switch (Fe(s) ? c = s.size() : Array.isArray(s) ? (s = i(s), c = s.size()) : c = [], c.length) {
        case 0:
          return _e(s);
        case 1:
          if (c[0] === 1)
            return _e(s.valueOf()[0]);
          if (c[0] === 0)
            return 1;
          throw new RangeError("Matrix must be square (size: " + Le(c) + ")");
        case 2: {
          var m = c[0], v = c[1];
          if (m === v)
            return l(s.clone().valueOf(), m);
          if (v === 0)
            return 1;
          throw new RangeError("Matrix must be square (size: " + Le(c) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(c) + ")");
      }
    }
  });
  function l(u, s, c) {
    if (s === 1)
      return _e(u[0][0]);
    if (s === 2)
      return a(t(u[0][0], u[1][1]), t(u[1][0], u[0][1]));
    for (var m = !1, v = new Array(s).fill(0).map((A, S) => S), d = 0; d < s; d++) {
      var p = v[d];
      if (o(u[p][d])) {
        var x = void 0;
        for (x = d + 1; x < s; x++)
          if (!o(u[v[x]][d])) {
            p = v[x], v[x] = v[d], v[d] = p, m = !m;
            break;
          }
        if (x === s)
          return u[p][d];
      }
      for (var g = u[p][d], N = d === 0 ? 1 : u[v[d - 1]][d - 1], h = d + 1; h < s; h++)
        for (var b = v[h], w = d + 1; w < s; w++)
          u[b][w] = n(a(t(u[b][w], g), t(u[b][d], u[p][w])), N);
    }
    var y = u[v[s - 1]][s - 1];
    return m ? f(y) : y;
  }
}), cc = "inv", RM = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], zM = /* @__PURE__ */ q(cc, RM, (e) => {
  var {
    typed: r,
    matrix: i,
    divideScalar: a,
    addScalar: t,
    multiply: n,
    unaryMinus: o,
    det: f,
    identity: l,
    abs: u
  } = e;
  return r(cc, {
    "Array | Matrix": function(m) {
      var v = Fe(m) ? m.size() : qe(m);
      switch (v.length) {
        case 1:
          if (v[0] === 1)
            return Fe(m) ? i([a(1, m.valueOf()[0])]) : [a(1, m[0])];
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        case 2: {
          var d = v[0], p = v[1];
          if (d === p)
            return Fe(m) ? i(s(m.valueOf(), d, p), m.storage()) : s(m, d, p);
          throw new RangeError("Matrix must be square (size: " + Le(v) + ")");
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(v) + ")");
      }
    },
    any: function(m) {
      return a(1, m);
    }
  });
  function s(c, m, v) {
    var d, p, x, g, N;
    if (m === 1) {
      if (g = c[0][0], g === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[a(1, g)]];
    } else if (m === 2) {
      var h = f(c);
      if (h === 0)
        throw Error("Cannot calculate inverse, determinant is zero");
      return [[a(c[1][1], h), a(o(c[0][1]), h)], [a(o(c[1][0]), h), a(c[0][0], h)]];
    } else {
      var b = c.concat();
      for (d = 0; d < m; d++)
        b[d] = b[d].concat();
      for (var w = l(m).valueOf(), y = 0; y < v; y++) {
        var A = u(b[y][y]), S = y;
        for (d = y + 1; d < m; )
          u(b[d][y]) > A && (A = u(b[d][y]), S = d), d++;
        if (A === 0)
          throw Error("Cannot calculate inverse, determinant is zero");
        d = S, d !== y && (N = b[y], b[y] = b[d], b[d] = N, N = w[y], w[y] = w[d], w[d] = N);
        var D = b[y], E = w[y];
        for (d = 0; d < m; d++) {
          var C = b[d], F = w[d];
          if (d !== y) {
            if (C[y] !== 0) {
              for (x = a(o(C[y]), D[y]), p = y; p < v; p++)
                C[p] = t(C[p], n(x, D[p]));
              for (p = 0; p < v; p++)
                F[p] = t(F[p], n(x, E[p]));
            }
          } else {
            for (x = D[y], p = y; p < v; p++)
              C[p] = a(C[p], x);
            for (p = 0; p < v; p++)
              F[p] = a(F[p], x);
          }
        }
      }
      return w;
    }
  }
}), fc = "pinv", PM = ["typed", "matrix", "inv", "deepEqual", "equal", "dotDivide", "dot", "ctranspose", "divideScalar", "multiply", "add", "Complex"], UM = /* @__PURE__ */ q(fc, PM, (e) => {
  var {
    typed: r,
    matrix: i,
    inv: a,
    deepEqual: t,
    equal: n,
    dotDivide: o,
    dot: f,
    ctranspose: l,
    divideScalar: u,
    multiply: s,
    add: c,
    Complex: m
  } = e;
  return r(fc, {
    "Array | Matrix": function(h) {
      var b = Fe(h) ? h.size() : qe(h);
      switch (b.length) {
        case 1:
          return g(h) ? l(h) : b[0] === 1 ? a(h) : o(l(h), f(h, h));
        case 2: {
          if (g(h))
            return l(h);
          var w = b[0], y = b[1];
          if (w === y)
            try {
              return a(h);
            } catch (A) {
              if (!(A instanceof Error && A.message.match(/Cannot calculate inverse, determinant is zero/)))
                throw A;
            }
          return Fe(h) ? i(v(h.valueOf(), w, y), h.storage()) : v(h, w, y);
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + Le(b) + ")");
      }
    },
    any: function(h) {
      return n(h, 0) ? _e(h) : u(1, h);
    }
  });
  function v(N, h, b) {
    var {
      C: w,
      F: y
    } = p(N, h, b), A = s(a(s(l(w), w)), l(w)), S = s(l(y), a(s(y, l(y))));
    return s(S, A);
  }
  function d(N, h, b) {
    for (var w = _e(N), y = 0, A = 0; A < h; A++) {
      if (b <= y)
        return w;
      for (var S = A; x(w[S][y]); )
        if (S++, h === S && (S = A, y++, b === y))
          return w;
      [w[S], w[A]] = [w[A], w[S]];
      for (var D = w[A][y], E = 0; E < b; E++)
        w[A][E] = o(w[A][E], D);
      for (var C = 0; C < h; C++)
        if (C !== A) {
          D = w[C][y];
          for (var F = 0; F < b; F++)
            w[C][F] = c(w[C][F], s(-1, s(D, w[A][F])));
        }
      y++;
    }
    return w;
  }
  function p(N, h, b) {
    var w = d(N, h, b), y = N.map((S, D) => S.filter((E, C) => C < h && !x(f(w[C], w[C])))), A = w.filter((S, D) => !x(f(w[D], w[D])));
    return {
      C: y,
      F: A
    };
  }
  function x(N) {
    return n(c(N, m(1, 1)), c(0, m(1, 1)));
  }
  function g(N) {
    return t(c(N, m(1, 1)), c(s(N, 0), m(1, 1)));
  }
});
function LM(e) {
  var {
    addScalar: r,
    subtract: i,
    flatten: a,
    multiply: t,
    multiplyScalar: n,
    divideScalar: o,
    sqrt: f,
    abs: l,
    bignumber: u,
    diag: s,
    size: c,
    reshape: m,
    inv: v,
    qr: d,
    usolve: p,
    usolveAll: x,
    equal: g,
    complex: N,
    larger: h,
    smaller: b,
    matrixFromColumns: w,
    dot: y
  } = e;
  function A(V, z, Q, ce) {
    var j = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, re = S(V, z, Q, ce, j);
    D(V, z, Q, ce, j, re);
    var {
      values: oe,
      C: ee
    } = E(V, z, Q, ce, j);
    if (j) {
      var ne = C(V, z, ee, re, oe, Q, ce);
      return {
        values: oe,
        eigenvectors: ne
      };
    }
    return {
      values: oe
    };
  }
  function S(V, z, Q, ce, j) {
    var re = ce === "BigNumber", oe = ce === "Complex", ee = re ? u(0) : 0, ne = re ? u(1) : oe ? N(1) : 1, se = re ? u(1) : 1, ve = re ? u(10) : 2, we = n(ve, ve), Ae;
    j && (Ae = Array(z).fill(ne));
    for (var P = !1; !P; ) {
      P = !0;
      for (var H = 0; H < z; H++) {
        for (var te = ee, k = ee, Y = 0; Y < z; Y++)
          H !== Y && (te = r(te, l(V[Y][H])), k = r(k, l(V[H][Y])));
        if (!g(te, 0) && !g(k, 0)) {
          for (var W = se, me = te, fe = o(k, ve), R = n(k, ve); b(me, fe); )
            me = n(me, we), W = n(W, ve);
          for (; h(me, R); )
            me = o(me, we), W = o(W, ve);
          var U = b(o(r(me, k), W), n(r(te, k), 0.95));
          if (U) {
            P = !1;
            for (var J = o(1, W), ae = 0; ae < z; ae++)
              H !== ae && (V[H][ae] = n(V[H][ae], J), V[ae][H] = n(V[ae][H], W));
            j && (Ae[H] = n(Ae[H], J));
          }
        }
      }
    }
    return j ? s(Ae) : null;
  }
  function D(V, z, Q, ce, j, re) {
    var oe = ce === "BigNumber", ee = ce === "Complex", ne = oe ? u(0) : ee ? N(0) : 0;
    oe && (Q = u(Q));
    for (var se = 0; se < z - 2; se++) {
      for (var ve = 0, we = ne, Ae = se + 1; Ae < z; Ae++) {
        var P = V[Ae][se];
        b(l(we), l(P)) && (we = P, ve = Ae);
      }
      if (!b(l(we), Q)) {
        if (ve !== se + 1) {
          var H = V[ve];
          V[ve] = V[se + 1], V[se + 1] = H;
          for (var te = 0; te < z; te++) {
            var k = V[te][ve];
            V[te][ve] = V[te][se + 1], V[te][se + 1] = k;
          }
          if (j) {
            var Y = re[ve];
            re[ve] = re[se + 1], re[se + 1] = Y;
          }
        }
        for (var W = se + 2; W < z; W++) {
          var me = o(V[W][se], we);
          if (me !== 0) {
            for (var fe = 0; fe < z; fe++)
              V[W][fe] = i(V[W][fe], n(me, V[se + 1][fe]));
            for (var R = 0; R < z; R++)
              V[R][se + 1] = r(V[R][se + 1], n(me, V[R][W]));
            if (j)
              for (var U = 0; U < z; U++)
                re[W][U] = i(re[W][U], n(me, re[se + 1][U]));
          }
        }
      }
    }
    return re;
  }
  function E(V, z, Q, ce, j) {
    var re = ce === "BigNumber", oe = ce === "Complex", ee = re ? u(1) : oe ? N(1) : 1;
    re && (Q = u(Q));
    for (var ne = _e(V), se = [], ve = z, we = [], Ae = j ? s(Array(z).fill(ee)) : void 0, P = j ? s(Array(ve).fill(ee)) : void 0, H = 0; H <= 100; ) {
      H += 1;
      for (var te = ne[ve - 1][ve - 1], k = 0; k < ve; k++)
        ne[k][k] = i(ne[k][k], te);
      var {
        Q: Y,
        R: W
      } = d(ne);
      ne = t(W, Y);
      for (var me = 0; me < ve; me++)
        ne[me][me] = r(ne[me][me], te);
      if (j && (P = t(P, Y)), ve === 1 || b(l(ne[ve - 1][ve - 2]), Q)) {
        H = 0, se.push(ne[ve - 1][ve - 1]), j && (we.unshift([[1]]), I(P, z), Ae = t(Ae, P), ve > 1 && (P = s(Array(ve - 1).fill(ee)))), ve -= 1, ne.pop();
        for (var fe = 0; fe < ve; fe++)
          ne[fe].pop();
      } else if (ve === 2 || b(l(ne[ve - 2][ve - 3]), Q)) {
        H = 0;
        var R = F(ne[ve - 2][ve - 2], ne[ve - 2][ve - 1], ne[ve - 1][ve - 2], ne[ve - 1][ve - 1]);
        se.push(...R), j && (we.unshift(_(ne[ve - 2][ve - 2], ne[ve - 2][ve - 1], ne[ve - 1][ve - 2], ne[ve - 1][ve - 1], R[0], R[1], Q, ce)), I(P, z), Ae = t(Ae, P), ve > 2 && (P = s(Array(ve - 2).fill(ee)))), ve -= 2, ne.pop(), ne.pop();
        for (var U = 0; U < ve; U++)
          ne[U].pop(), ne[U].pop();
      }
      if (ve === 0)
        break;
    }
    if (se.sort((le, ue) => +i(l(le), l(ue))), H > 100) {
      var J = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + se.join(", "));
      throw J.values = se, J.vectors = [], J;
    }
    var ae = j ? t(Ae, $(we, z)) : void 0;
    return {
      values: se,
      C: ae
    };
  }
  function C(V, z, Q, ce, j, re, oe) {
    var ee = v(Q), ne = t(ee, V, Q), se = oe === "BigNumber", ve = oe === "Complex", we = se ? u(0) : ve ? N(0) : 0, Ae = se ? u(1) : ve ? N(1) : 1, P = [], H = [];
    for (var te of j) {
      var k = T(P, te, g);
      k === -1 ? (P.push(te), H.push(1)) : H[k] += 1;
    }
    for (var Y = [], W = P.length, me = Array(z).fill(we), fe = s(Array(z).fill(Ae)), R = function() {
      var ae = P[U], le = i(ne, t(ae, fe)), ue = x(le, me);
      for (ue.shift(); ue.length < H[U]; ) {
        var ge = B(le, z, ue, re, oe);
        if (ge === null)
          break;
        ue.push(ge);
      }
      var he = t(v(ce), Q);
      ue = ue.map((De) => t(he, De)), Y.push(...ue.map((De) => ({
        value: ae,
        vector: a(De)
      })));
    }, U = 0; U < W; U++)
      R();
    return Y;
  }
  function F(V, z, Q, ce) {
    var j = r(V, ce), re = i(n(V, ce), n(z, Q)), oe = n(j, 0.5), ee = n(f(i(n(j, j), n(4, re))), 0.5);
    return [r(oe, ee), i(oe, ee)];
  }
  function _(V, z, Q, ce, j, re, oe, ee) {
    var ne = ee === "BigNumber", se = ee === "Complex", ve = ne ? u(0) : se ? N(0) : 0, we = ne ? u(1) : se ? N(1) : 1;
    if (b(l(Q), oe))
      return [[we, ve], [ve, we]];
    if (h(l(i(j, re)), oe))
      return [[i(j, ce), i(re, ce)], [Q, Q]];
    var Ae = i(V, j), P = i(ce, j);
    return b(l(z), oe) && b(l(P), oe) ? [[Ae, we], [Q, ve]] : [[z, ve], [P, we]];
  }
  function I(V, z) {
    for (var Q = 0; Q < V.length; Q++)
      V[Q].push(...Array(z - V[Q].length).fill(0));
    for (var ce = V.length; ce < z; ce++)
      V.push(Array(z).fill(0)), V[ce][ce] = 1;
    return V;
  }
  function $(V, z) {
    for (var Q = [], ce = 0; ce < z; ce++)
      Q[ce] = Array(z).fill(0);
    var j = 0;
    for (var re of V) {
      for (var oe = re.length, ee = 0; ee < oe; ee++)
        for (var ne = 0; ne < oe; ne++)
          Q[j + ee][j + ne] = re[ee][ne];
      j += oe;
    }
    return Q;
  }
  function T(V, z, Q) {
    for (var ce = 0; ce < V.length; ce++)
      if (Q(V[ce], z))
        return ce;
    return -1;
  }
  function B(V, z, Q, ce, j) {
    for (var re = j === "BigNumber" ? u(1e3) : 1e3, oe, ee = 0; ee < 5; ++ee) {
      oe = L(z, Q, j);
      try {
        oe = p(V, oe);
      } catch {
        continue;
      }
      if (h(X(oe), re))
        break;
    }
    if (ee >= 5)
      return null;
    for (ee = 0; ; ) {
      var ne = p(V, oe);
      if (b(X(O(oe, [ne])), ce))
        break;
      if (++ee >= 10)
        return null;
      oe = K(ne);
    }
    return oe;
  }
  function L(V, z, Q) {
    var ce = Q === "BigNumber", j = Q === "Complex", re = Array(V).fill(0).map((oe) => 2 * Math.random() - 1);
    return ce && (re = re.map((oe) => u(oe))), j && (re = re.map((oe) => N(oe))), re = O(re, z), K(re, Q);
  }
  function O(V, z) {
    var Q = c(V);
    for (var ce of z)
      ce = m(ce, Q), V = i(V, t(o(y(ce, V), y(ce, ce)), ce));
    return V;
  }
  function X(V) {
    return l(f(y(V, V)));
  }
  function K(V, z) {
    var Q = z === "BigNumber", ce = z === "Complex", j = Q ? u(1) : ce ? N(1) : 1;
    return t(o(j, X(V)), V);
  }
  return A;
}
function kM(e) {
  var {
    config: r,
    addScalar: i,
    subtract: a,
    abs: t,
    atan: n,
    cos: o,
    sin: f,
    multiplyScalar: l,
    inv: u,
    bignumber: s,
    multiply: c,
    add: m
  } = e;
  function v(D, E) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : r.epsilon, F = arguments.length > 3 ? arguments[3] : void 0, _ = arguments.length > 4 ? arguments[4] : void 0;
    if (F === "number")
      return d(D, C, _);
    if (F === "BigNumber")
      return p(D, C, _);
    throw TypeError("Unsupported data type: " + F);
  }
  function d(D, E, C) {
    var F = D.length, _ = Math.abs(E / F), I, $;
    if (C) {
      $ = new Array(F);
      for (var T = 0; T < F; T++)
        $[T] = Array(F).fill(0), $[T][T] = 1;
    }
    for (var B = y(D); Math.abs(B[1]) >= Math.abs(_); ) {
      var L = B[0][0], O = B[0][1];
      I = x(D[L][L], D[O][O], D[L][O]), D = w(D, I, L, O), C && ($ = N($, I, L, O)), B = y(D);
    }
    for (var X = Array(F).fill(0), K = 0; K < F; K++)
      X[K] = D[K][K];
    return S(_e(X), $, C);
  }
  function p(D, E, C) {
    var F = D.length, _ = t(E / F), I, $;
    if (C) {
      $ = new Array(F);
      for (var T = 0; T < F; T++)
        $[T] = Array(F).fill(0), $[T][T] = 1;
    }
    for (var B = A(D); t(B[1]) >= t(_); ) {
      var L = B[0][0], O = B[0][1];
      I = g(D[L][L], D[O][O], D[L][O]), D = b(D, I, L, O), C && ($ = h($, I, L, O)), B = A(D);
    }
    for (var X = Array(F).fill(0), K = 0; K < F; K++)
      X[K] = D[K][K];
    return S(_e(X), $, C);
  }
  function x(D, E, C) {
    var F = E - D;
    return Math.abs(F) <= r.epsilon ? Math.PI / 4 : 0.5 * Math.atan(2 * C / (E - D));
  }
  function g(D, E, C) {
    var F = a(E, D);
    return t(F) <= r.epsilon ? s(-1).acos().div(4) : l(0.5, n(c(2, C, u(F))));
  }
  function N(D, E, C, F) {
    for (var _ = D.length, I = Math.cos(E), $ = Math.sin(E), T = Array(_).fill(0), B = Array(_).fill(0), L = 0; L < _; L++)
      T[L] = I * D[L][C] - $ * D[L][F], B[L] = $ * D[L][C] + I * D[L][F];
    for (var O = 0; O < _; O++)
      D[O][C] = T[O], D[O][F] = B[O];
    return D;
  }
  function h(D, E, C, F) {
    for (var _ = D.length, I = o(E), $ = f(E), T = Array(_).fill(s(0)), B = Array(_).fill(s(0)), L = 0; L < _; L++)
      T[L] = a(l(I, D[L][C]), l($, D[L][F])), B[L] = i(l($, D[L][C]), l(I, D[L][F]));
    for (var O = 0; O < _; O++)
      D[O][C] = T[O], D[O][F] = B[O];
    return D;
  }
  function b(D, E, C, F) {
    for (var _ = D.length, I = s(o(E)), $ = s(f(E)), T = l(I, I), B = l($, $), L = Array(_).fill(s(0)), O = Array(_).fill(s(0)), X = c(s(2), I, $, D[C][F]), K = i(a(l(T, D[C][C]), X), l(B, D[F][F])), V = m(l(B, D[C][C]), X, l(T, D[F][F])), z = 0; z < _; z++)
      L[z] = a(l(I, D[C][z]), l($, D[F][z])), O[z] = i(l($, D[C][z]), l(I, D[F][z]));
    D[C][C] = K, D[F][F] = V, D[C][F] = s(0), D[F][C] = s(0);
    for (var Q = 0; Q < _; Q++)
      Q !== C && Q !== F && (D[C][Q] = L[Q], D[Q][C] = L[Q], D[F][Q] = O[Q], D[Q][F] = O[Q]);
    return D;
  }
  function w(D, E, C, F) {
    for (var _ = D.length, I = Math.cos(E), $ = Math.sin(E), T = I * I, B = $ * $, L = Array(_).fill(0), O = Array(_).fill(0), X = T * D[C][C] - 2 * I * $ * D[C][F] + B * D[F][F], K = B * D[C][C] + 2 * I * $ * D[C][F] + T * D[F][F], V = 0; V < _; V++)
      L[V] = I * D[C][V] - $ * D[F][V], O[V] = $ * D[C][V] + I * D[F][V];
    D[C][C] = X, D[F][F] = K, D[C][F] = 0, D[F][C] = 0;
    for (var z = 0; z < _; z++)
      z !== C && z !== F && (D[C][z] = L[z], D[z][C] = L[z], D[F][z] = O[z], D[z][F] = O[z]);
    return D;
  }
  function y(D) {
    for (var E = D.length, C = 0, F = [0, 1], _ = 0; _ < E; _++)
      for (var I = _ + 1; I < E; I++)
        Math.abs(C) < Math.abs(D[_][I]) && (C = Math.abs(D[_][I]), F = [_, I]);
    return [F, C];
  }
  function A(D) {
    for (var E = D.length, C = 0, F = [0, 1], _ = 0; _ < E; _++)
      for (var I = _ + 1; I < E; I++)
        t(C) < t(D[_][I]) && (C = t(D[_][I]), F = [_, I]);
    return [F, C];
  }
  function S(D, E, C) {
    var F = D.length, _ = Array(F), I;
    if (C) {
      I = Array(F);
      for (var $ = 0; $ < F; $++)
        I[$] = Array(F);
    }
    for (var T = 0; T < F; T++) {
      for (var B = 0, L = D[0], O = 0; O < D.length; O++)
        t(D[O]) < t(L) && (B = O, L = D[B]);
      if (_[T] = D.splice(B, 1)[0], C)
        for (var X = 0; X < F; X++)
          I[T][X] = E[X][B], E[X].splice(B, 1);
    }
    if (!C)
      return {
        values: _
      };
    var K = I.map((V, z) => ({
      value: _[z],
      vector: V
    }));
    return {
      values: _,
      eigenvectors: K
    };
  }
  return v;
}
var HM = "eigs", GM = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], VM = /* @__PURE__ */ q(HM, GM, (e) => {
  var {
    config: r,
    typed: i,
    matrix: a,
    addScalar: t,
    subtract: n,
    equal: o,
    abs: f,
    atan: l,
    cos: u,
    sin: s,
    multiplyScalar: c,
    divideScalar: m,
    inv: v,
    bignumber: d,
    multiply: p,
    add: x,
    larger: g,
    column: N,
    flatten: h,
    number: b,
    complex: w,
    sqrt: y,
    diag: A,
    size: S,
    reshape: D,
    qr: E,
    usolve: C,
    usolveAll: F,
    im: _,
    re: I,
    smaller: $,
    matrixFromColumns: T,
    dot: B
  } = e, L = kM({
    config: r,
    addScalar: t,
    subtract: n,
    column: N,
    flatten: h,
    equal: o,
    abs: f,
    atan: l,
    cos: u,
    sin: s,
    multiplyScalar: c,
    inv: v,
    bignumber: d,
    complex: w,
    multiply: p,
    add: x
  }), O = LM({
    config: r,
    addScalar: t,
    subtract: n,
    multiply: p,
    multiplyScalar: c,
    flatten: h,
    divideScalar: m,
    sqrt: y,
    abs: f,
    bignumber: d,
    diag: A,
    size: S,
    reshape: D,
    qr: E,
    inv: v,
    usolve: C,
    usolveAll: F,
    equal: o,
    complex: w,
    larger: g,
    smaller: $,
    matrixFromColumns: T,
    dot: B
  });
  return i("eigs", {
    // The conversion to matrix in the first two implementations,
    // just to convert back to an array right away in
    // computeValuesAndVectors, is unfortunate, and should perhaps be
    // streamlined. It is done because the Matrix object carries some
    // type information about its entries, and so constructing the matrix
    // is a roundabout way of doing type detection.
    Array: function(re) {
      return X(a(re));
    },
    "Array, number|BigNumber": function(re, oe) {
      return X(a(re), {
        precision: oe
      });
    },
    "Array, Object"(j, re) {
      return X(a(j), re);
    },
    Matrix: function(re) {
      return X(re, {
        matricize: !0
      });
    },
    "Matrix, number|BigNumber": function(re, oe) {
      return X(re, {
        precision: oe,
        matricize: !0
      });
    },
    "Matrix, Object": function(re, oe) {
      var ee = {
        matricize: !0
      };
      return pr(ee, oe), X(re, ee);
    }
  });
  function X(j) {
    var re, oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = "eigenvectors" in oe ? oe.eigenvectors : !0, ne = (re = oe.precision) !== null && re !== void 0 ? re : r.epsilon, se = K(j, ne, ee);
    return oe.matricize && (se.values = a(se.values), ee && (se.eigenvectors = se.eigenvectors.map((ve) => {
      var {
        value: we,
        vector: Ae
      } = ve;
      return {
        value: we,
        vector: a(Ae)
      };
    }))), ee && Object.defineProperty(se, "vectors", {
      enumerable: !1,
      // to make sure that the eigenvectors can still be
      // converted to string.
      get: () => {
        throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors");
      }
    }), se;
  }
  function K(j, re, oe) {
    var ee = j.toArray(), ne = j.size();
    if (ne.length !== 2 || ne[0] !== ne[1])
      throw new RangeError("Matrix must be square (size: ".concat(Le(ne), ")"));
    var se = ne[0];
    if (z(ee, se, re) && (Q(ee, se), V(ee, se, re))) {
      var ve = ce(j, ee, se);
      return L(ee, se, re, ve, oe);
    }
    var we = ce(j, ee, se);
    return O(ee, se, re, we, oe);
  }
  function V(j, re, oe) {
    for (var ee = 0; ee < re; ee++)
      for (var ne = ee; ne < re; ne++)
        if (g(d(f(n(j[ee][ne], j[ne][ee]))), oe))
          return !1;
    return !0;
  }
  function z(j, re, oe) {
    for (var ee = 0; ee < re; ee++)
      for (var ne = 0; ne < re; ne++)
        if (g(d(f(_(j[ee][ne]))), oe))
          return !1;
    return !0;
  }
  function Q(j, re) {
    for (var oe = 0; oe < re; oe++)
      for (var ee = 0; ee < re; ee++)
        j[oe][ee] = I(j[oe][ee]);
  }
  function ce(j, re, oe) {
    var ee = j.datatype();
    if (ee === "number" || ee === "BigNumber" || ee === "Complex")
      return ee;
    for (var ne = !1, se = !1, ve = !1, we = 0; we < oe; we++)
      for (var Ae = 0; Ae < oe; Ae++) {
        var P = re[we][Ae];
        if (Re(P) || Wn(P))
          ne = !0;
        else if (ze(P))
          se = !0;
        else if (bt(P))
          ve = !0;
        else
          throw TypeError("Unsupported type in Matrix: " + ar(P));
      }
    if (se && ve && console.warn("Complex BigNumbers not supported, this operation will lose precission."), ve) {
      for (var H = 0; H < oe; H++)
        for (var te = 0; te < oe; te++)
          re[H][te] = w(re[H][te]);
      return "Complex";
    }
    if (se) {
      for (var k = 0; k < oe; k++)
        for (var Y = 0; Y < oe; Y++)
          re[k][Y] = d(re[k][Y]);
      return "BigNumber";
    }
    if (ne) {
      for (var W = 0; W < oe; W++)
        for (var me = 0; me < oe; me++)
          re[W][me] = b(re[W][me]);
      return "number";
    } else
      throw TypeError("Matrix contains unsupported types only.");
  }
}), mc = "expm", ZM = ["typed", "abs", "add", "identity", "inv", "multiply"], YM = /* @__PURE__ */ q(mc, ZM, (e) => {
  var {
    typed: r,
    abs: i,
    add: a,
    identity: t,
    inv: n,
    multiply: o
  } = e;
  return r(mc, {
    Matrix: function(c) {
      var m = c.size();
      if (m.length !== 2 || m[0] !== m[1])
        throw new RangeError("Matrix must be square (size: " + Le(m) + ")");
      for (var v = m[0], d = 1e-15, p = f(c), x = l(p, d), g = x.q, N = x.j, h = o(c, Math.pow(2, -N)), b = t(v), w = t(v), y = 1, A = h, S = -1, D = 1; D <= g; D++)
        D > 1 && (A = o(A, h), S = -S), y = y * (g - D + 1) / ((2 * g - D + 1) * D), b = a(b, o(y, A)), w = a(w, o(y * S, A));
      for (var E = o(n(w), b), C = 0; C < N; C++)
        E = o(E, E);
      return Lt(c) ? c.createSparseMatrix(E) : E;
    }
  });
  function f(s) {
    for (var c = s.size()[0], m = 0, v = 0; v < c; v++) {
      for (var d = 0, p = 0; p < c; p++)
        d += i(s.get([v, p]));
      m = Math.max(d, m);
    }
    return m;
  }
  function l(s, c) {
    for (var m = 30, v = 0; v < m; v++)
      for (var d = 0; d <= v; d++) {
        var p = v - d;
        if (u(s, d, p) < c)
          return {
            q: d,
            j: p
          };
      }
    throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)");
  }
  function u(s, c, m) {
    for (var v = 1, d = 2; d <= c; d++)
      v *= d;
    for (var p = v, x = c + 1; x <= 2 * c; x++)
      p *= x;
    var g = p * (2 * c + 1);
    return 8 * Math.pow(s / Math.pow(2, m), 2 * c) * v * v / (p * g);
  }
}), vc = "sqrtm", XM = ["typed", "abs", "add", "multiply", "map", "sqrt", "subtract", "inv", "size", "max", "identity"], WM = /* @__PURE__ */ q(vc, XM, (e) => {
  var {
    typed: r,
    abs: i,
    add: a,
    multiply: t,
    map: n,
    sqrt: o,
    subtract: f,
    inv: l,
    size: u,
    max: s,
    identity: c
  } = e, m = 1e3, v = 1e-6;
  function d(p) {
    var x, g = 0, N = p, h = c(u(p));
    do {
      var b = N;
      if (N = t(0.5, a(b, l(h))), h = t(0.5, a(h, l(b))), x = s(i(f(N, b))), x > v && ++g > m)
        throw new Error("computing square root of matrix: iterative method could not converge");
    } while (x > v);
    return N;
  }
  return r(vc, {
    "Array | Matrix": function(x) {
      var g = Fe(x) ? x.size() : qe(x);
      switch (g.length) {
        case 1:
          if (g[0] === 1)
            return n(x, o);
          throw new RangeError("Matrix must be square (size: " + Le(g) + ")");
        case 2: {
          var N = g[0], h = g[1];
          if (N === h)
            return d(x);
          throw new RangeError("Matrix must be square (size: " + Le(g) + ")");
        }
        default:
          throw new RangeError("Matrix must be at most two dimensional (size: " + Le(g) + ")");
      }
    }
  });
}), pc = "sylvester", JM = ["typed", "schur", "matrixFromColumns", "matrix", "multiply", "range", "concat", "transpose", "index", "subset", "add", "subtract", "identity", "lusolve", "abs"], QM = /* @__PURE__ */ q(pc, JM, (e) => {
  var {
    typed: r,
    schur: i,
    matrixFromColumns: a,
    matrix: t,
    multiply: n,
    range: o,
    concat: f,
    transpose: l,
    index: u,
    subset: s,
    add: c,
    subtract: m,
    identity: v,
    lusolve: d,
    abs: p
  } = e;
  return r(pc, {
    "Matrix, Matrix, Matrix": x,
    "Array, Matrix, Matrix": function(N, h, b) {
      return x(t(N), h, b);
    },
    "Array, Array, Matrix": function(N, h, b) {
      return x(t(N), t(h), b);
    },
    "Array, Matrix, Array": function(N, h, b) {
      return x(t(N), h, t(b));
    },
    "Matrix, Array, Matrix": function(N, h, b) {
      return x(N, t(h), b);
    },
    "Matrix, Array, Array": function(N, h, b) {
      return x(N, t(h), t(b));
    },
    "Matrix, Matrix, Array": function(N, h, b) {
      return x(N, h, t(b));
    },
    "Array, Array, Array": function(N, h, b) {
      return x(t(N), t(h), t(b)).toArray();
    }
  });
  function x(g, N, h) {
    for (var b = N.size()[0], w = g.size()[0], y = i(g), A = y.T, S = y.U, D = i(n(-1, N)), E = D.T, C = D.U, F = n(n(l(S), h), C), _ = o(0, w), I = [], $ = (ve, we) => f(ve, we, 1), T = (ve, we) => f(ve, we, 0), B = 0; B < b; B++)
      if (B < b - 1 && p(s(E, u(B + 1, B))) > 1e-5) {
        for (var L = T(s(F, u(_, B)), s(F, u(_, B + 1))), O = 0; O < B; O++)
          L = c(L, T(n(I[O], s(E, u(O, B))), n(I[O], s(E, u(O, B + 1)))));
        var X = n(v(w), n(-1, s(E, u(B, B)))), K = n(v(w), n(-1, s(E, u(B + 1, B)))), V = n(v(w), n(-1, s(E, u(B, B + 1)))), z = n(v(w), n(-1, s(E, u(B + 1, B + 1)))), Q = T($(c(A, X), K), $(V, c(A, z))), ce = d(Q, L);
        I[B] = ce.subset(u(o(0, w), 0)), I[B + 1] = ce.subset(u(o(w, 2 * w), 0)), B++;
      } else {
        for (var j = s(F, u(_, B)), re = 0; re < B; re++)
          j = c(j, n(I[re], s(E, u(re, B))));
        var oe = s(E, u(B, B)), ee = m(A, n(oe, v(w)));
        I[B] = d(ee, j);
      }
    var ne = t(a(...I)), se = n(S, n(ne, l(C)));
    return se;
  }
}), dc = "schur", KM = ["typed", "matrix", "identity", "multiply", "qr", "norm", "subtract"], jM = /* @__PURE__ */ q(dc, KM, (e) => {
  var {
    typed: r,
    matrix: i,
    identity: a,
    multiply: t,
    qr: n,
    norm: o,
    subtract: f
  } = e;
  return r(dc, {
    Array: function(s) {
      var c = l(i(s));
      return {
        U: c.U.valueOf(),
        T: c.T.valueOf()
      };
    },
    Matrix: function(s) {
      return l(s);
    }
  });
  function l(u) {
    var s = u.size()[0], c = u, m = a(s), v = 0, d;
    do {
      d = c;
      var p = n(c), x = p.Q, g = p.R;
      if (c = t(g, x), m = t(m, x), v++ > 100)
        break;
    } while (o(f(c, d)) > 1e-4);
    return {
      U: m,
      T: c
    };
  }
}), hc = "lyap", e3 = ["typed", "matrix", "sylvester", "multiply", "transpose"], r3 = /* @__PURE__ */ q(hc, e3, (e) => {
  var {
    typed: r,
    matrix: i,
    sylvester: a,
    multiply: t,
    transpose: n
  } = e;
  return r(hc, {
    "Matrix, Matrix": function(f, l) {
      return a(f, n(f), t(-1, l));
    },
    "Array, Matrix": function(f, l) {
      return a(i(f), n(i(f)), t(-1, l));
    },
    "Matrix, Array": function(f, l) {
      return a(f, n(i(f)), i(t(-1, l)));
    },
    "Array, Array": function(f, l) {
      return a(i(f), n(i(f)), i(t(-1, l))).toArray();
    }
  });
}), t3 = "divide", n3 = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], a3 = /* @__PURE__ */ q(t3, n3, (e) => {
  var {
    typed: r,
    matrix: i,
    multiply: a,
    equalScalar: t,
    divideScalar: n,
    inv: o
  } = e, f = Dr({
    typed: r,
    equalScalar: t
  }), l = ot({
    typed: r
  });
  return r("divide", ff({
    // we extend the signatures of divideScalar with signatures dealing with matrices
    "Array | Matrix, Array | Matrix": function(s, c) {
      return a(s, o(c));
    },
    "DenseMatrix, any": function(s, c) {
      return l(s, c, n, !1);
    },
    "SparseMatrix, any": function(s, c) {
      return f(s, c, n, !1);
    },
    "Array, any": function(s, c) {
      return l(i(s), c, n, !1).valueOf();
    },
    "any, Array | Matrix": function(s, c) {
      return a(s, o(c));
    }
  }, n.signatures));
}), gc = "distance", i3 = ["typed", "addScalar", "subtractScalar", "divideScalar", "multiplyScalar", "deepEqual", "sqrt", "abs"], o3 = /* @__PURE__ */ q(gc, i3, (e) => {
  var {
    typed: r,
    addScalar: i,
    subtractScalar: a,
    multiplyScalar: t,
    divideScalar: n,
    deepEqual: o,
    sqrt: f,
    abs: l
  } = e;
  return r(gc, {
    "Array, Array, Array": function(w, y, A) {
      if (w.length === 2 && y.length === 2 && A.length === 2) {
        if (!s(w))
          throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        if (!s(y))
          throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
        if (!s(A))
          throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
        if (o(y, A))
          throw new TypeError("LinePoint1 should not be same with LinePoint2");
        var S = a(A[1], y[1]), D = a(y[0], A[0]), E = a(t(A[0], y[1]), t(y[0], A[1]));
        return x(w[0], w[1], S, D, E);
      } else
        throw new TypeError("Invalid Arguments: Try again");
    },
    "Object, Object, Object": function(w, y, A) {
      if (Object.keys(w).length === 2 && Object.keys(y).length === 2 && Object.keys(A).length === 2) {
        if (!s(w))
          throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
        if (!s(y))
          throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
        if (!s(A))
          throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
        if (o(d(y), d(A)))
          throw new TypeError("LinePoint1 should not be same with LinePoint2");
        if ("pointX" in w && "pointY" in w && "lineOnePtX" in y && "lineOnePtY" in y && "lineTwoPtX" in A && "lineTwoPtY" in A) {
          var S = a(A.lineTwoPtY, y.lineOnePtY), D = a(y.lineOnePtX, A.lineTwoPtX), E = a(t(A.lineTwoPtX, y.lineOnePtY), t(y.lineOnePtX, A.lineTwoPtY));
          return x(w.pointX, w.pointY, S, D, E);
        } else
          throw new TypeError("Key names do not match");
      } else
        throw new TypeError("Invalid Arguments: Try again");
    },
    "Array, Array": function(w, y) {
      if (w.length === 2 && y.length === 3) {
        if (!s(w))
          throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        if (!c(y))
          throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
        return x(w[0], w[1], y[0], y[1], y[2]);
      } else if (w.length === 3 && y.length === 6) {
        if (!c(w))
          throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
        if (!v(y))
          throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
        return g(w[0], w[1], w[2], y[0], y[1], y[2], y[3], y[4], y[5]);
      } else if (w.length === y.length && w.length > 0) {
        if (!m(w))
          throw new TypeError("All values of an array should be numbers or BigNumbers");
        if (!m(y))
          throw new TypeError("All values of an array should be numbers or BigNumbers");
        return N(w, y);
      } else
        throw new TypeError("Invalid Arguments: Try again");
    },
    "Object, Object": function(w, y) {
      if (Object.keys(w).length === 2 && Object.keys(y).length === 3) {
        if (!s(w))
          throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
        if (!c(y))
          throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
        if ("pointX" in w && "pointY" in w && "xCoeffLine" in y && "yCoeffLine" in y && "constant" in y)
          return x(w.pointX, w.pointY, y.xCoeffLine, y.yCoeffLine, y.constant);
        throw new TypeError("Key names do not match");
      } else if (Object.keys(w).length === 3 && Object.keys(y).length === 6) {
        if (!c(w))
          throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
        if (!v(y))
          throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
        if ("pointX" in w && "pointY" in w && "x0" in y && "y0" in y && "z0" in y && "a" in y && "b" in y && "c" in y)
          return g(w.pointX, w.pointY, w.pointZ, y.x0, y.y0, y.z0, y.a, y.b, y.c);
        throw new TypeError("Key names do not match");
      } else if (Object.keys(w).length === 2 && Object.keys(y).length === 2) {
        if (!s(w))
          throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
        if (!s(y))
          throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
        if ("pointOneX" in w && "pointOneY" in w && "pointTwoX" in y && "pointTwoY" in y)
          return N([w.pointOneX, w.pointOneY], [y.pointTwoX, y.pointTwoY]);
        throw new TypeError("Key names do not match");
      } else if (Object.keys(w).length === 3 && Object.keys(y).length === 3) {
        if (!c(w))
          throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
        if (!c(y))
          throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
        if ("pointOneX" in w && "pointOneY" in w && "pointOneZ" in w && "pointTwoX" in y && "pointTwoY" in y && "pointTwoZ" in y)
          return N([w.pointOneX, w.pointOneY, w.pointOneZ], [y.pointTwoX, y.pointTwoY, y.pointTwoZ]);
        throw new TypeError("Key names do not match");
      } else
        throw new TypeError("Invalid Arguments: Try again");
    },
    Array: function(w) {
      if (!p(w))
        throw new TypeError("Incorrect array format entered for pairwise distance calculation");
      return h(w);
    }
  });
  function u(b) {
    return typeof b == "number" || ze(b);
  }
  function s(b) {
    return b.constructor !== Array && (b = d(b)), u(b[0]) && u(b[1]);
  }
  function c(b) {
    return b.constructor !== Array && (b = d(b)), u(b[0]) && u(b[1]) && u(b[2]);
  }
  function m(b) {
    return Array.isArray(b) || (b = d(b)), b.every(u);
  }
  function v(b) {
    return b.constructor !== Array && (b = d(b)), u(b[0]) && u(b[1]) && u(b[2]) && u(b[3]) && u(b[4]) && u(b[5]);
  }
  function d(b) {
    for (var w = Object.keys(b), y = [], A = 0; A < w.length; A++)
      y.push(b[w[A]]);
    return y;
  }
  function p(b) {
    if (b[0].length === 2 && u(b[0][0]) && u(b[0][1])) {
      if (b.some((w) => w.length !== 2 || !u(w[0]) || !u(w[1])))
        return !1;
    } else if (b[0].length === 3 && u(b[0][0]) && u(b[0][1]) && u(b[0][2])) {
      if (b.some((w) => w.length !== 3 || !u(w[0]) || !u(w[1]) || !u(w[2])))
        return !1;
    } else
      return !1;
    return !0;
  }
  function x(b, w, y, A, S) {
    var D = l(i(i(t(y, b), t(A, w)), S)), E = f(i(t(y, y), t(A, A)));
    return n(D, E);
  }
  function g(b, w, y, A, S, D, E, C, F) {
    var _ = [a(t(a(S, w), F), t(a(D, y), C)), a(t(a(D, y), E), t(a(A, b), F)), a(t(a(A, b), C), t(a(S, w), E))];
    _ = f(i(i(t(_[0], _[0]), t(_[1], _[1])), t(_[2], _[2])));
    var I = f(i(i(t(E, E), t(C, C)), t(F, F)));
    return n(_, I);
  }
  function N(b, w) {
    for (var y = b.length, A = 0, S = 0, D = 0; D < y; D++)
      S = a(b[D], w[D]), A = i(t(S, S), A);
    return f(A);
  }
  function h(b) {
    for (var w = [], y = [], A = [], S = 0; S < b.length - 1; S++)
      for (var D = S + 1; D < b.length; D++)
        b[0].length === 2 ? (y = [b[S][0], b[S][1]], A = [b[D][0], b[D][1]]) : b[0].length === 3 && (y = [b[S][0], b[S][1], b[S][2]], A = [b[D][0], b[D][1], b[D][2]]), w.push(N(y, A));
    return w;
  }
}), s3 = "intersect", u3 = ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar", "flatten", "isZero", "isNumeric"], l3 = /* @__PURE__ */ q(s3, u3, (e) => {
  var {
    typed: r,
    config: i,
    abs: a,
    add: t,
    addScalar: n,
    matrix: o,
    multiply: f,
    multiplyScalar: l,
    divideScalar: u,
    subtract: s,
    smaller: c,
    equalScalar: m,
    flatten: v,
    isZero: d,
    isNumeric: p
  } = e;
  return r("intersect", {
    "Array, Array, Array": x,
    "Array, Array, Array, Array": g,
    "Matrix, Matrix, Matrix": function(C, F, _) {
      var I = x(C.valueOf(), F.valueOf(), _.valueOf());
      return I === null ? null : o(I);
    },
    "Matrix, Matrix, Matrix, Matrix": function(C, F, _, I) {
      var $ = g(C.valueOf(), F.valueOf(), _.valueOf(), I.valueOf());
      return $ === null ? null : o($);
    }
  });
  function x(E, C, F) {
    if (E = N(E), C = N(C), F = N(F), !b(E))
      throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
    if (!b(C))
      throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
    if (!w(F))
      throw new TypeError("Array with 4 numbers expected as third argument");
    return D(E[0], E[1], E[2], C[0], C[1], C[2], F[0], F[1], F[2], F[3]);
  }
  function g(E, C, F, _) {
    if (E = N(E), C = N(C), F = N(F), _ = N(_), E.length === 2) {
      if (!h(E))
        throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
      if (!h(C))
        throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
      if (!h(F))
        throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
      if (!h(_))
        throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
      return y(E, C, F, _);
    } else if (E.length === 3) {
      if (!b(E))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
      if (!b(C))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
      if (!b(F))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
      if (!b(_))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
      return S(E[0], E[1], E[2], C[0], C[1], C[2], F[0], F[1], F[2], _[0], _[1], _[2]);
    } else
      throw new TypeError("Arrays with two or thee dimensional points expected");
  }
  function N(E) {
    return E.length === 1 ? E[0] : E.length > 1 && Array.isArray(E[0]) && E.every((C) => Array.isArray(C) && C.length === 1) ? v(E) : E;
  }
  function h(E) {
    return E.length === 2 && p(E[0]) && p(E[1]);
  }
  function b(E) {
    return E.length === 3 && p(E[0]) && p(E[1]) && p(E[2]);
  }
  function w(E) {
    return E.length === 4 && p(E[0]) && p(E[1]) && p(E[2]) && p(E[3]);
  }
  function y(E, C, F, _) {
    var I = E, $ = F, T = s(I, C), B = s($, _), L = s(l(T[0], B[1]), l(B[0], T[1]));
    if (d(L) || c(a(L), i.epsilon))
      return null;
    var O = l(B[0], I[1]), X = l(B[1], I[0]), K = l(B[0], $[1]), V = l(B[1], $[0]), z = u(n(s(s(O, X), K), V), L);
    return t(f(T, z), I);
  }
  function A(E, C, F, _, I, $, T, B, L, O, X, K) {
    var V = l(s(E, C), s(F, _)), z = l(s(I, $), s(T, B)), Q = l(s(L, O), s(X, K));
    return n(n(V, z), Q);
  }
  function S(E, C, F, _, I, $, T, B, L, O, X, K) {
    var V = A(E, T, O, T, C, B, X, B, F, L, K, L), z = A(O, T, _, E, X, B, I, C, K, L, $, F), Q = A(E, T, _, E, C, B, I, C, F, L, $, F), ce = A(O, T, O, T, X, B, X, B, K, L, K, L), j = A(_, E, _, E, I, C, I, C, $, F, $, F), re = s(l(V, z), l(Q, ce)), oe = s(l(j, ce), l(z, z));
    if (d(oe))
      return null;
    var ee = u(re, oe), ne = u(n(V, l(ee, z)), ce), se = n(E, l(ee, s(_, E))), ve = n(C, l(ee, s(I, C))), we = n(F, l(ee, s($, F))), Ae = n(T, l(ne, s(O, T))), P = n(B, l(ne, s(X, B))), H = n(L, l(ne, s(K, L)));
    return m(se, Ae) && m(ve, P) && m(we, H) ? [se, ve, we] : null;
  }
  function D(E, C, F, _, I, $, T, B, L, O) {
    var X = l(E, T), K = l(_, T), V = l(C, B), z = l(I, B), Q = l(F, L), ce = l($, L), j = s(s(s(O, X), V), Q), re = s(s(s(n(n(K, z), ce), X), V), Q), oe = u(j, re), ee = n(E, l(oe, s(_, E))), ne = n(C, l(oe, s(I, C))), se = n(F, l(oe, s($, F)));
    return [ee, ne, se];
  }
}), yc = "sum", c3 = ["typed", "config", "add", "numeric"], fv = /* @__PURE__ */ q(yc, c3, (e) => {
  var {
    typed: r,
    config: i,
    add: a,
    numeric: t
  } = e;
  return r(yc, {
    // sum([a, b, c, d, ...])
    "Array | Matrix": n,
    // sum([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": o,
    // sum(a, b, c, d, ...)
    "...": function(l) {
      if (Dn(l))
        throw new TypeError("Scalar values expected in function sum");
      return n(l);
    }
  });
  function n(f) {
    var l;
    return Nt(f, function(u) {
      try {
        l = l === void 0 ? u : a(l, u);
      } catch (s) {
        throw $r(s, "sum", u);
      }
    }), l === void 0 && (l = t(0, i.number)), typeof l == "string" && (l = t(l, i.number)), l;
  }
  function o(f, l) {
    try {
      var u = ai(f, l, a);
      return u;
    } catch (s) {
      throw $r(s, "sum");
    }
  }
}), Aa = "cumsum", f3 = ["typed", "add", "unaryPlus"], mv = /* @__PURE__ */ q(Aa, f3, (e) => {
  var {
    typed: r,
    add: i,
    unaryPlus: a
  } = e;
  return r(Aa, {
    // sum([a, b, c, d, ...])
    Array: t,
    Matrix: function(u) {
      return u.create(t(u.valueOf()));
    },
    // sum([a, b, c, d, ...], dim)
    "Array, number | BigNumber": o,
    "Matrix, number | BigNumber": function(u, s) {
      return u.create(o(u.valueOf(), s));
    },
    // cumsum(a, b, c, d, ...)
    "...": function(u) {
      if (Dn(u))
        throw new TypeError("All values expected to be scalar in function cumsum");
      return t(u);
    }
  });
  function t(l) {
    try {
      return n(l);
    } catch (u) {
      throw $r(u, Aa);
    }
  }
  function n(l) {
    if (l.length === 0)
      return [];
    for (var u = [a(l[0])], s = 1; s < l.length; ++s)
      u.push(i(u[s - 1], l[s]));
    return u;
  }
  function o(l, u) {
    var s = qe(l);
    if (u < 0 || u >= s.length)
      throw new at(u, s.length);
    try {
      return f(l, u);
    } catch (c) {
      throw $r(c, Aa);
    }
  }
  function f(l, u) {
    var s, c, m;
    if (u <= 0) {
      var v = l[0][0];
      if (Array.isArray(v)) {
        for (m = Vf(l), c = [], s = 0; s < m.length; s++)
          c[s] = f(m[s], u - 1);
        return c;
      } else
        return n(l);
    } else {
      for (c = [], s = 0; s < l.length; s++)
        c[s] = f(l[s], u - 1);
      return c;
    }
  }
}), bc = "mean", m3 = ["typed", "add", "divide"], vv = /* @__PURE__ */ q(bc, m3, (e) => {
  var {
    typed: r,
    add: i,
    divide: a
  } = e;
  return r(bc, {
    // mean([a, b, c, d, ...])
    "Array | Matrix": n,
    // mean([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": t,
    // mean(a, b, c, d, ...)
    "...": function(f) {
      if (Dn(f))
        throw new TypeError("Scalar values expected in function mean");
      return n(f);
    }
  });
  function t(o, f) {
    try {
      var l = ai(o, f, i), u = Array.isArray(o) ? qe(o) : o.size();
      return a(l, u[f]);
    } catch (s) {
      throw $r(s, "mean");
    }
  }
  function n(o) {
    var f, l = 0;
    if (Nt(o, function(u) {
      try {
        f = f === void 0 ? u : i(f, u), l++;
      } catch (s) {
        throw $r(s, "mean", u);
      }
    }), l === 0)
      throw new Error("Cannot calculate the mean of an empty array");
    return a(f, l);
  }
}), xc = "median", v3 = ["typed", "add", "divide", "compare", "partitionSelect"], p3 = /* @__PURE__ */ q(xc, v3, (e) => {
  var {
    typed: r,
    add: i,
    divide: a,
    compare: t,
    partitionSelect: n
  } = e;
  function o(u) {
    try {
      u = Qe(u.valueOf());
      var s = u.length;
      if (s === 0)
        throw new Error("Cannot calculate median of an empty array");
      if (s % 2 === 0) {
        for (var c = s / 2 - 1, m = n(u, c + 1), v = u[c], d = 0; d < c; ++d)
          t(u[d], v) > 0 && (v = u[d]);
        return l(v, m);
      } else {
        var p = n(u, (s - 1) / 2);
        return f(p);
      }
    } catch (x) {
      throw $r(x, "median");
    }
  }
  var f = r({
    "number | BigNumber | Complex | Unit": function(s) {
      return s;
    }
  }), l = r({
    "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function(s, c) {
      return a(i(s, c), 2);
    }
  });
  return r(xc, {
    // median([a, b, c, d, ...])
    "Array | Matrix": o,
    // median([a, b, c, d, ...], dim)
    "Array | Matrix, number | BigNumber": function(s, c) {
      throw new Error("median(A, dim) is not yet supported");
    },
    // median(a, b, c, d, ...)
    "...": function(s) {
      if (Dn(s))
        throw new TypeError("Scalar values expected in function median");
      return o(s);
    }
  });
}), wc = "mad", d3 = ["typed", "abs", "map", "median", "subtract"], h3 = /* @__PURE__ */ q(wc, d3, (e) => {
  var {
    typed: r,
    abs: i,
    map: a,
    median: t,
    subtract: n
  } = e;
  return r(wc, {
    // mad([a, b, c, d, ...])
    "Array | Matrix": o,
    // mad(a, b, c, d, ...)
    "...": function(l) {
      return o(l);
    }
  });
  function o(f) {
    if (f = Qe(f.valueOf()), f.length === 0)
      throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
    try {
      var l = t(f);
      return t(a(f, function(u) {
        return i(n(u, l));
      }));
    } catch (u) {
      throw u instanceof TypeError && u.message.indexOf("median") !== -1 ? new TypeError(u.message.replace("median", "mad")) : $r(u, "mad");
    }
  }
}), Ci = "unbiased", Nc = "variance", g3 = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], pv = /* @__PURE__ */ q(Nc, g3, (e) => {
  var {
    typed: r,
    add: i,
    subtract: a,
    multiply: t,
    divide: n,
    apply: o,
    isNaN: f
  } = e;
  return r(Nc, {
    // variance([a, b, c, d, ...])
    "Array | Matrix": function(c) {
      return l(c, Ci);
    },
    // variance([a, b, c, d, ...], normalization)
    "Array | Matrix, string": l,
    // variance([a, b, c, c, ...], dim)
    "Array | Matrix, number | BigNumber": function(c, m) {
      return u(c, m, Ci);
    },
    // variance([a, b, c, c, ...], dim, normalization)
    "Array | Matrix, number | BigNumber, string": u,
    // variance(a, b, c, d, ...)
    "...": function(c) {
      return l(c, Ci);
    }
  });
  function l(s, c) {
    var m, v = 0;
    if (s.length === 0)
      throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
    if (Nt(s, function(x) {
      try {
        m = m === void 0 ? x : i(m, x), v++;
      } catch (g) {
        throw $r(g, "variance", x);
      }
    }), v === 0)
      throw new Error("Cannot calculate variance of an empty array");
    var d = n(m, v);
    if (m = void 0, Nt(s, function(x) {
      var g = a(x, d);
      m = m === void 0 ? t(g, g) : i(m, t(g, g));
    }), f(m))
      return m;
    switch (c) {
      case "uncorrected":
        return n(m, v);
      case "biased":
        return n(m, v + 1);
      case "unbiased": {
        var p = ze(m) ? m.mul(0) : 0;
        return v === 1 ? p : n(m, v - 1);
      }
      default:
        throw new Error('Unknown normalization "' + c + '". Choose "unbiased" (default), "uncorrected", or "biased".');
    }
  }
  function u(s, c, m) {
    try {
      if (s.length === 0)
        throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
      return o(s, c, (v) => l(v, m));
    } catch (v) {
      throw $r(v, "variance");
    }
  }
}), Dc = "quantileSeq", y3 = ["typed", "?bignumber", "add", "subtract", "divide", "multiply", "partitionSelect", "compare", "isInteger", "smaller", "smallerEq", "larger"], dv = /* @__PURE__ */ q(Dc, y3, (e) => {
  var {
    typed: r,
    bignumber: i,
    add: a,
    subtract: t,
    divide: n,
    multiply: o,
    partitionSelect: f,
    compare: l,
    isInteger: u,
    smaller: s,
    smallerEq: c,
    larger: m
  } = e, v = Ki({
    typed: r,
    isInteger: u
  });
  return r(Dc, {
    "Array | Matrix, number | BigNumber": (N, h) => p(N, h, !1),
    "Array | Matrix, number | BigNumber, number": (N, h, b) => d(N, h, !1, b, p),
    "Array | Matrix, number | BigNumber, boolean": p,
    "Array | Matrix, number | BigNumber, boolean, number": (N, h, b, w) => d(N, h, b, w, p),
    "Array | Matrix, Array | Matrix": (N, h) => x(N, h, !1),
    "Array | Matrix, Array | Matrix, number": (N, h, b) => d(N, h, !1, b, x),
    "Array | Matrix, Array | Matrix, boolean": x,
    "Array | Matrix, Array | Matrix, boolean, number": (N, h, b, w) => d(N, h, b, w, x)
  });
  function d(N, h, b, w, y) {
    return v(N, w, (A) => y(A, h, b));
  }
  function p(N, h, b) {
    var w, y = N.valueOf();
    if (s(h, 0))
      throw new Error("N/prob must be non-negative");
    if (c(h, 1))
      return Re(h) ? g(y, h, b) : i(g(y, h, b));
    if (m(h, 1)) {
      if (!u(h))
        throw new Error("N must be a positive integer");
      if (m(h, 4294967295))
        throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
      var A = a(h, 1);
      w = [];
      for (var S = 0; s(S, h); S++) {
        var D = n(S + 1, A);
        w.push(g(y, D, b));
      }
      return Re(h) ? w : i(w);
    }
  }
  function x(N, h, b) {
    for (var w = N.valueOf(), y = h.valueOf(), A = [], S = 0; S < y.length; ++S)
      A.push(g(w, y[S], b));
    return A;
  }
  function g(N, h, b) {
    var w = Qe(N), y = w.length;
    if (y === 0)
      throw new Error("Cannot calculate quantile of an empty sequence");
    var A = Re(h) ? h * (y - 1) : h.times(y - 1), S = Re(h) ? Math.floor(A) : A.floor().toNumber(), D = Re(h) ? A % 1 : A.minus(S);
    if (u(A))
      return b ? w[A] : f(w, Re(h) ? A : A.valueOf());
    var E, C;
    if (b)
      E = w[S], C = w[S + 1];
    else {
      C = f(w, S + 1), E = w[S];
      for (var F = 0; F < S; ++F)
        l(w[F], E) > 0 && (E = w[F]);
    }
    return a(o(E, t(1, D)), o(C, D));
  }
}), Ac = "std", b3 = ["typed", "map", "sqrt", "variance"], hv = /* @__PURE__ */ q(Ac, b3, (e) => {
  var {
    typed: r,
    map: i,
    sqrt: a,
    variance: t
  } = e;
  return r(Ac, {
    // std([a, b, c, d, ...])
    "Array | Matrix": n,
    // std([a, b, c, d, ...], normalization)
    "Array | Matrix, string": n,
    // std([a, b, c, c, ...], dim)
    "Array | Matrix, number | BigNumber": n,
    // std([a, b, c, c, ...], dim, normalization)
    "Array | Matrix, number | BigNumber, string": n,
    // std(a, b, c, d, ...)
    "...": function(f) {
      return n(f);
    }
  });
  function n(o, f) {
    if (o.length === 0)
      throw new SyntaxError("Function std requires one or more parameters (0 provided)");
    try {
      var l = t.apply(null, arguments);
      return Wr(l) ? i(l, a) : a(l);
    } catch (u) {
      throw u instanceof TypeError && u.message.indexOf(" variance") !== -1 ? new TypeError(u.message.replace(" variance", " std")) : u;
    }
  }
}), Ec = "corr", x3 = ["typed", "matrix", "mean", "sqrt", "sum", "add", "subtract", "multiply", "pow", "divide"], w3 = /* @__PURE__ */ q(Ec, x3, (e) => {
  var {
    typed: r,
    matrix: i,
    sqrt: a,
    sum: t,
    add: n,
    subtract: o,
    multiply: f,
    pow: l,
    divide: u
  } = e;
  return r(Ec, {
    "Array, Array": function(v, d) {
      return s(v, d);
    },
    "Matrix, Matrix": function(v, d) {
      var p = s(v.toArray(), d.toArray());
      return Array.isArray(p) ? i(p) : p;
    }
  });
  function s(m, v) {
    var d = [];
    if (Array.isArray(m[0]) && Array.isArray(v[0])) {
      if (m.length !== v.length)
        throw new SyntaxError("Dimension mismatch. Array A and B must have the same length.");
      for (var p = 0; p < m.length; p++) {
        if (m[p].length !== v[p].length)
          throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
        d.push(c(m[p], v[p]));
      }
      return d;
    } else {
      if (m.length !== v.length)
        throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
      return c(m, v);
    }
  }
  function c(m, v) {
    var d = m.length, p = t(m), x = t(v), g = m.reduce((y, A, S) => n(y, f(A, v[S])), 0), N = t(m.map((y) => l(y, 2))), h = t(v.map((y) => l(y, 2))), b = o(f(d, g), f(p, x)), w = a(f(o(f(d, N), l(p, 2)), o(f(d, h), l(x, 2))));
    return u(b, w);
  }
}), Sc = "combinations", N3 = ["typed"], D3 = /* @__PURE__ */ q(Sc, N3, (e) => {
  var {
    typed: r
  } = e;
  return r(Sc, {
    "number, number": pm,
    "BigNumber, BigNumber": function(a, t) {
      var n = a.constructor, o, f, l = a.minus(t), u = new n(1);
      if (!Cc(a) || !Cc(t))
        throw new TypeError("Positive integer value expected in function combinations");
      if (t.gt(a))
        throw new TypeError("k must be less than n in function combinations");
      if (o = u, t.lt(l))
        for (f = u; f.lte(l); f = f.plus(u))
          o = o.times(t.plus(f)).dividedBy(f);
      else
        for (f = u; f.lte(t); f = f.plus(u))
          o = o.times(l.plus(f)).dividedBy(f);
      return o;
    }
    // TODO: implement support for collection in combinations
  });
});
function Cc(e) {
  return e.isInteger() && e.gte(0);
}
var Mc = "combinationsWithRep", A3 = ["typed"], E3 = /* @__PURE__ */ q(Mc, A3, (e) => {
  var {
    typed: r
  } = e;
  return r(Mc, {
    "number, number": function(a, t) {
      if (!Se(a) || a < 0)
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      if (!Se(t) || t < 0)
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      if (a < 1)
        throw new TypeError("k must be less than or equal to n + k - 1");
      if (t < a - 1) {
        var n = yt(a, a + t - 1);
        return n / yt(1, t);
      }
      var o = yt(t + 1, a + t - 1);
      return o / yt(1, a - 1);
    },
    "BigNumber, BigNumber": function(a, t) {
      var n = a.constructor, o, f, l = new n(1), u = a.minus(l);
      if (!Fc(a) || !Fc(t))
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      if (a.lt(l))
        throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep");
      if (o = l, t.lt(u))
        for (f = l; f.lte(u); f = f.plus(l))
          o = o.times(t.plus(f)).dividedBy(f);
      else
        for (f = l; f.lte(t); f = f.plus(l))
          o = o.times(u.plus(f)).dividedBy(f);
      return o;
    }
  });
});
function Fc(e) {
  return e.isInteger() && e.gte(0);
}
var Bc = "gamma", S3 = ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], C3 = /* @__PURE__ */ q(Bc, S3, (e) => {
  var {
    typed: r,
    config: i,
    multiplyScalar: a,
    pow: t,
    BigNumber: n,
    Complex: o
  } = e;
  function f(u) {
    if (u.im === 0)
      return qa(u.re);
    if (u.re < 0.5) {
      var s = new o(1 - u.re, -u.im), c = new o(Math.PI * u.re, Math.PI * u.im);
      return new o(Math.PI).div(c.sin()).div(f(s));
    }
    u = new o(u.re - 1, u.im);
    for (var m = new o(vn[0], 0), v = 1; v < vn.length; ++v) {
      var d = new o(vn[v], 0);
      m = m.add(d.div(u.add(v)));
    }
    var p = new o(u.re + bm + 0.5, u.im), x = Math.sqrt(2 * Math.PI), g = p.pow(u.add(0.5)), N = p.neg().exp();
    return m.mul(x).mul(g).mul(N);
  }
  return r(Bc, {
    number: qa,
    Complex: f,
    BigNumber: function(s) {
      if (s.isInteger())
        return s.isNegative() || s.isZero() ? new n(1 / 0) : l(s.minus(1));
      if (!s.isFinite())
        return new n(s.isNegative() ? NaN : 1 / 0);
      throw new Error("Integer BigNumber expected");
    }
  });
  function l(u) {
    if (u < 8)
      return new n([1, 1, 2, 6, 24, 120, 720, 5040][u]);
    var s = i.precision + (Math.log(u.toNumber()) | 0), c = n.clone({
      precision: s
    });
    if (u % 2 === 1)
      return u.times(l(new n(u - 1)));
    for (var m = u, v = new c(u), d = u.toNumber(); m > 2; )
      m -= 2, d += m, v = v.times(d);
    return new n(v.toPrecision(n.precision));
  }
}), Tc = "lgamma", M3 = ["Complex", "typed"], F3 = /* @__PURE__ */ q(Tc, M3, (e) => {
  var {
    Complex: r,
    typed: i
  } = e, a = 7, t = 7, n = [-0.029550653594771242, 0.00641025641025641, -0.0019175269175269176, 8417508417508417e-19, -5952380952380953e-19, 7936507936507937e-19, -0.002777777777777778, 0.08333333333333333];
  return i(Tc, {
    number: Ra,
    Complex: o,
    BigNumber: function() {
      throw new Error("mathjs doesn't yet provide an implementation of the algorithm lgamma for BigNumber");
    }
  });
  function o(u) {
    var s = 6.283185307179586, c = 1.1447298858494002, m = 0.1;
    if (u.isNaN())
      return new r(NaN, NaN);
    if (u.im === 0)
      return new r(Ra(u.re), 0);
    if (u.re >= a || Math.abs(u.im) >= t)
      return f(u);
    if (u.re <= m) {
      var v = xd(s, u.im) * Math.floor(0.5 * u.re + 0.25), d = u.mul(Math.PI).sin().log(), p = o(new r(1 - u.re, -u.im));
      return new r(c, v).sub(d).sub(p);
    } else
      return u.im >= 0 ? l(u) : l(u.conjugate()).conjugate();
  }
  function f(u) {
    for (var s = u.sub(0.5).mul(u.log()).sub(u).add(xm), c = new r(1, 0).div(u), m = c.div(u), v = n[0], d = n[1], p = 2 * m.re, x = m.re * m.re + m.im * m.im, g = 2; g < 8; g++) {
      var N = d;
      d = -x * v + n[g], v = p * v + N;
    }
    var h = c.mul(m.mul(v).add(d));
    return s.add(h);
  }
  function l(u) {
    var s = 0, c = 0, m = u;
    for (u = u.add(1); u.re <= a; ) {
      m = m.mul(u);
      var v = m.im < 0 ? 1 : 0;
      v !== 0 && c === 0 && s++, c = v, u = u.add(1);
    }
    return f(u).sub(m.log()).sub(new r(0, s * 2 * Math.PI * 1));
  }
}), Oc = "factorial", B3 = ["typed", "gamma"], T3 = /* @__PURE__ */ q(Oc, B3, (e) => {
  var {
    typed: r,
    gamma: i
  } = e;
  return r(Oc, {
    number: function(t) {
      if (t < 0)
        throw new Error("Value must be non-negative");
      return i(t + 1);
    },
    BigNumber: function(t) {
      if (t.isNegative())
        throw new Error("Value must be non-negative");
      return i(t.plus(1));
    },
    "Array | Matrix": r.referToSelf((a) => (t) => He(t, a))
  });
}), _c = "kldivergence", O3 = ["typed", "matrix", "divide", "sum", "multiply", "map", "dotDivide", "log", "isNumeric"], _3 = /* @__PURE__ */ q(_c, O3, (e) => {
  var {
    typed: r,
    matrix: i,
    divide: a,
    sum: t,
    multiply: n,
    map: o,
    dotDivide: f,
    log: l,
    isNumeric: u
  } = e;
  return r(_c, {
    "Array, Array": function(m, v) {
      return s(i(m), i(v));
    },
    "Matrix, Array": function(m, v) {
      return s(m, i(v));
    },
    "Array, Matrix": function(m, v) {
      return s(i(m), v);
    },
    "Matrix, Matrix": function(m, v) {
      return s(m, v);
    }
  });
  function s(c, m) {
    var v = m.size().length, d = c.size().length;
    if (v > 1)
      throw new Error("first object must be one dimensional");
    if (d > 1)
      throw new Error("second object must be one dimensional");
    if (v !== d)
      throw new Error("Length of two vectors must be equal");
    var p = t(c);
    if (p === 0)
      throw new Error("Sum of elements in first object must be non zero");
    var x = t(m);
    if (x === 0)
      throw new Error("Sum of elements in second object must be non zero");
    var g = a(c, t(c)), N = a(m, t(m)), h = t(n(g, o(f(g, N), (b) => l(b))));
    return u(h) ? h : Number.NaN;
  }
}), $c = "multinomial", $3 = ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"], I3 = /* @__PURE__ */ q($c, $3, (e) => {
  var {
    typed: r,
    add: i,
    divide: a,
    multiply: t,
    factorial: n,
    isInteger: o,
    isPositive: f
  } = e;
  return r($c, {
    "Array | Matrix": function(u) {
      var s = 0, c = 1;
      return Nt(u, function(m) {
        if (!o(m) || !f(m))
          throw new TypeError("Positive integer value expected in function multinomial");
        s = i(s, m), c = t(c, n(m));
      }), a(n(s), c);
    }
  });
}), Ic = "permutations", q3 = ["typed", "factorial"], R3 = /* @__PURE__ */ q(Ic, q3, (e) => {
  var {
    typed: r,
    factorial: i
  } = e;
  return r(Ic, {
    "number | BigNumber": i,
    "number, number": function(t, n) {
      if (!Se(t) || t < 0)
        throw new TypeError("Positive integer value expected in function permutations");
      if (!Se(n) || n < 0)
        throw new TypeError("Positive integer value expected in function permutations");
      if (n > t)
        throw new TypeError("second argument k must be less than or equal to first argument n");
      return yt(t - n + 1, t);
    },
    "BigNumber, BigNumber": function(t, n) {
      var o, f;
      if (!qc(t) || !qc(n))
        throw new TypeError("Positive integer value expected in function permutations");
      if (n.gt(t))
        throw new TypeError("second argument k must be less than or equal to first argument n");
      var l = t.mul(0).add(1);
      for (o = l, f = t.minus(n).plus(1); f.lte(t); f = f.plus(1))
        o = o.times(f);
      return o;
    }
    // TODO: implement support for collection in permutations
  });
});
function qc(e) {
  return e.isInteger() && e.gte(0);
}
var io = { exports: {} };
io.exports;
(function(e) {
  (function(r, i, a) {
    function t(l) {
      var u = this, s = f();
      u.next = function() {
        var c = 2091639 * u.s0 + u.c * 23283064365386963e-26;
        return u.s0 = u.s1, u.s1 = u.s2, u.s2 = c - (u.c = c | 0);
      }, u.c = 1, u.s0 = s(" "), u.s1 = s(" "), u.s2 = s(" "), u.s0 -= s(l), u.s0 < 0 && (u.s0 += 1), u.s1 -= s(l), u.s1 < 0 && (u.s1 += 1), u.s2 -= s(l), u.s2 < 0 && (u.s2 += 1), s = null;
    }
    function n(l, u) {
      return u.c = l.c, u.s0 = l.s0, u.s1 = l.s1, u.s2 = l.s2, u;
    }
    function o(l, u) {
      var s = new t(l), c = u && u.state, m = s.next;
      return m.int32 = function() {
        return s.next() * 4294967296 | 0;
      }, m.double = function() {
        return m() + (m() * 2097152 | 0) * 11102230246251565e-32;
      }, m.quick = m, c && (typeof c == "object" && n(c, s), m.state = function() {
        return n(s, {});
      }), m;
    }
    function f() {
      var l = 4022871197, u = function(s) {
        s = String(s);
        for (var c = 0; c < s.length; c++) {
          l += s.charCodeAt(c);
          var m = 0.02519603282416938 * l;
          l = m >>> 0, m -= l, m *= l, l = m >>> 0, m -= l, l += m * 4294967296;
        }
        return (l >>> 0) * 23283064365386963e-26;
      };
      return u;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.alea = o;
  })(
    Vt,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(io);
var z3 = io.exports, oo = { exports: {} };
oo.exports;
(function(e) {
  (function(r, i, a) {
    function t(f) {
      var l = this, u = "";
      l.x = 0, l.y = 0, l.z = 0, l.w = 0, l.next = function() {
        var c = l.x ^ l.x << 11;
        return l.x = l.y, l.y = l.z, l.z = l.w, l.w ^= l.w >>> 19 ^ c ^ c >>> 8;
      }, f === (f | 0) ? l.x = f : u += f;
      for (var s = 0; s < u.length + 64; s++)
        l.x ^= u.charCodeAt(s) | 0, l.next();
    }
    function n(f, l) {
      return l.x = f.x, l.y = f.y, l.z = f.z, l.w = f.w, l;
    }
    function o(f, l) {
      var u = new t(f), s = l && l.state, c = function() {
        return (u.next() >>> 0) / 4294967296;
      };
      return c.double = function() {
        do
          var m = u.next() >>> 11, v = (u.next() >>> 0) / 4294967296, d = (m + v) / (1 << 21);
        while (d === 0);
        return d;
      }, c.int32 = u.next, c.quick = c, s && (typeof s == "object" && n(s, u), c.state = function() {
        return n(u, {});
      }), c;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.xor128 = o;
  })(
    Vt,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(oo);
var P3 = oo.exports, so = { exports: {} };
so.exports;
(function(e) {
  (function(r, i, a) {
    function t(f) {
      var l = this, u = "";
      l.next = function() {
        var c = l.x ^ l.x >>> 2;
        return l.x = l.y, l.y = l.z, l.z = l.w, l.w = l.v, (l.d = l.d + 362437 | 0) + (l.v = l.v ^ l.v << 4 ^ (c ^ c << 1)) | 0;
      }, l.x = 0, l.y = 0, l.z = 0, l.w = 0, l.v = 0, f === (f | 0) ? l.x = f : u += f;
      for (var s = 0; s < u.length + 64; s++)
        l.x ^= u.charCodeAt(s) | 0, s == u.length && (l.d = l.x << 10 ^ l.x >>> 4), l.next();
    }
    function n(f, l) {
      return l.x = f.x, l.y = f.y, l.z = f.z, l.w = f.w, l.v = f.v, l.d = f.d, l;
    }
    function o(f, l) {
      var u = new t(f), s = l && l.state, c = function() {
        return (u.next() >>> 0) / 4294967296;
      };
      return c.double = function() {
        do
          var m = u.next() >>> 11, v = (u.next() >>> 0) / 4294967296, d = (m + v) / (1 << 21);
        while (d === 0);
        return d;
      }, c.int32 = u.next, c.quick = c, s && (typeof s == "object" && n(s, u), c.state = function() {
        return n(u, {});
      }), c;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.xorwow = o;
  })(
    Vt,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(so);
var U3 = so.exports, uo = { exports: {} };
uo.exports;
(function(e) {
  (function(r, i, a) {
    function t(f) {
      var l = this;
      l.next = function() {
        var s = l.x, c = l.i, m, v;
        return m = s[c], m ^= m >>> 7, v = m ^ m << 24, m = s[c + 1 & 7], v ^= m ^ m >>> 10, m = s[c + 3 & 7], v ^= m ^ m >>> 3, m = s[c + 4 & 7], v ^= m ^ m << 7, m = s[c + 7 & 7], m = m ^ m << 13, v ^= m ^ m << 9, s[c] = v, l.i = c + 1 & 7, v;
      };
      function u(s, c) {
        var m, v = [];
        if (c === (c | 0))
          v[0] = c;
        else
          for (c = "" + c, m = 0; m < c.length; ++m)
            v[m & 7] = v[m & 7] << 15 ^ c.charCodeAt(m) + v[m + 1 & 7] << 13;
        for (; v.length < 8; )
          v.push(0);
        for (m = 0; m < 8 && v[m] === 0; ++m)
          ;
        for (m == 8 ? v[7] = -1 : v[m], s.x = v, s.i = 0, m = 256; m > 0; --m)
          s.next();
      }
      u(l, f);
    }
    function n(f, l) {
      return l.x = f.x.slice(), l.i = f.i, l;
    }
    function o(f, l) {
      f == null && (f = +/* @__PURE__ */ new Date());
      var u = new t(f), s = l && l.state, c = function() {
        return (u.next() >>> 0) / 4294967296;
      };
      return c.double = function() {
        do
          var m = u.next() >>> 11, v = (u.next() >>> 0) / 4294967296, d = (m + v) / (1 << 21);
        while (d === 0);
        return d;
      }, c.int32 = u.next, c.quick = c, s && (s.x && n(s, u), c.state = function() {
        return n(u, {});
      }), c;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.xorshift7 = o;
  })(
    Vt,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(uo);
var L3 = uo.exports, lo = { exports: {} };
lo.exports;
(function(e) {
  (function(r, i, a) {
    function t(f) {
      var l = this;
      l.next = function() {
        var s = l.w, c = l.X, m = l.i, v, d;
        return l.w = s = s + 1640531527 | 0, d = c[m + 34 & 127], v = c[m = m + 1 & 127], d ^= d << 13, v ^= v << 17, d ^= d >>> 15, v ^= v >>> 12, d = c[m] = d ^ v, l.i = m, d + (s ^ s >>> 16) | 0;
      };
      function u(s, c) {
        var m, v, d, p, x, g = [], N = 128;
        for (c === (c | 0) ? (v = c, c = null) : (c = c + "\0", v = 0, N = Math.max(N, c.length)), d = 0, p = -32; p < N; ++p)
          c && (v ^= c.charCodeAt((p + 32) % c.length)), p === 0 && (x = v), v ^= v << 10, v ^= v >>> 15, v ^= v << 4, v ^= v >>> 13, p >= 0 && (x = x + 1640531527 | 0, m = g[p & 127] ^= v + x, d = m == 0 ? d + 1 : 0);
        for (d >= 128 && (g[(c && c.length || 0) & 127] = -1), d = 127, p = 4 * 128; p > 0; --p)
          v = g[d + 34 & 127], m = g[d = d + 1 & 127], v ^= v << 13, m ^= m << 17, v ^= v >>> 15, m ^= m >>> 12, g[d] = v ^ m;
        s.w = x, s.X = g, s.i = d;
      }
      u(l, f);
    }
    function n(f, l) {
      return l.i = f.i, l.w = f.w, l.X = f.X.slice(), l;
    }
    function o(f, l) {
      f == null && (f = +/* @__PURE__ */ new Date());
      var u = new t(f), s = l && l.state, c = function() {
        return (u.next() >>> 0) / 4294967296;
      };
      return c.double = function() {
        do
          var m = u.next() >>> 11, v = (u.next() >>> 0) / 4294967296, d = (m + v) / (1 << 21);
        while (d === 0);
        return d;
      }, c.int32 = u.next, c.quick = c, s && (s.X && n(s, u), c.state = function() {
        return n(u, {});
      }), c;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.xor4096 = o;
  })(
    Vt,
    // window object or global
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(lo);
var k3 = lo.exports, co = { exports: {} };
co.exports;
(function(e) {
  (function(r, i, a) {
    function t(f) {
      var l = this, u = "";
      l.next = function() {
        var c = l.b, m = l.c, v = l.d, d = l.a;
        return c = c << 25 ^ c >>> 7 ^ m, m = m - v | 0, v = v << 24 ^ v >>> 8 ^ d, d = d - c | 0, l.b = c = c << 20 ^ c >>> 12 ^ m, l.c = m = m - v | 0, l.d = v << 16 ^ m >>> 16 ^ d, l.a = d - c | 0;
      }, l.a = 0, l.b = 0, l.c = -1640531527, l.d = 1367130551, f === Math.floor(f) ? (l.a = f / 4294967296 | 0, l.b = f | 0) : u += f;
      for (var s = 0; s < u.length + 20; s++)
        l.b ^= u.charCodeAt(s) | 0, l.next();
    }
    function n(f, l) {
      return l.a = f.a, l.b = f.b, l.c = f.c, l.d = f.d, l;
    }
    function o(f, l) {
      var u = new t(f), s = l && l.state, c = function() {
        return (u.next() >>> 0) / 4294967296;
      };
      return c.double = function() {
        do
          var m = u.next() >>> 11, v = (u.next() >>> 0) / 4294967296, d = (m + v) / (1 << 21);
        while (d === 0);
        return d;
      }, c.int32 = u.next, c.quick = c, s && (typeof s == "object" && n(s, u), c.state = function() {
        return n(u, {});
      }), c;
    }
    i && i.exports ? i.exports = o : a && a.amd ? a(function() {
      return o;
    }) : this.tychei = o;
  })(
    Vt,
    e,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(co);
var H3 = co.exports, gv = { exports: {} };
const G3 = {}, V3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G3
}, Symbol.toStringTag, { value: "Module" })), Z3 = /* @__PURE__ */ Lp(V3);
(function(e) {
  (function(r, i, a) {
    var t = 256, n = 6, o = 52, f = "random", l = a.pow(t, n), u = a.pow(2, o), s = u * 2, c = t - 1, m;
    function v(b, w, y) {
      var A = [];
      w = w == !0 ? { entropy: !0 } : w || {};
      var S = g(x(
        w.entropy ? [b, h(i)] : b ?? N(),
        3
      ), A), D = new d(A), E = function() {
        for (var C = D.g(n), F = l, _ = 0; C < u; )
          C = (C + _) * t, F *= t, _ = D.g(1);
        for (; C >= s; )
          C /= 2, F /= 2, _ >>>= 1;
        return (C + _) / F;
      };
      return E.int32 = function() {
        return D.g(4) | 0;
      }, E.quick = function() {
        return D.g(4) / 4294967296;
      }, E.double = E, g(h(D.S), i), (w.pass || y || function(C, F, _, I) {
        return I && (I.S && p(I, D), C.state = function() {
          return p(D, {});
        }), _ ? (a[f] = C, F) : C;
      })(
        E,
        S,
        "global" in w ? w.global : this == a,
        w.state
      );
    }
    function d(b) {
      var w, y = b.length, A = this, S = 0, D = A.i = A.j = 0, E = A.S = [];
      for (y || (b = [y++]); S < t; )
        E[S] = S++;
      for (S = 0; S < t; S++)
        E[S] = E[D = c & D + b[S % y] + (w = E[S])], E[D] = w;
      (A.g = function(C) {
        for (var F, _ = 0, I = A.i, $ = A.j, T = A.S; C--; )
          F = T[I = c & I + 1], _ = _ * t + T[c & (T[I] = T[$ = c & $ + F]) + (T[$] = F)];
        return A.i = I, A.j = $, _;
      })(t);
    }
    function p(b, w) {
      return w.i = b.i, w.j = b.j, w.S = b.S.slice(), w;
    }
    function x(b, w) {
      var y = [], A = typeof b, S;
      if (w && A == "object")
        for (S in b)
          try {
            y.push(x(b[S], w - 1));
          } catch {
          }
      return y.length ? y : A == "string" ? b : b + "\0";
    }
    function g(b, w) {
      for (var y = b + "", A, S = 0; S < y.length; )
        w[c & S] = c & (A ^= w[c & S] * 19) + y.charCodeAt(S++);
      return h(w);
    }
    function N() {
      try {
        var b;
        return m && (b = m.randomBytes) ? b = b(t) : (b = new Uint8Array(t), (r.crypto || r.msCrypto).getRandomValues(b)), h(b);
      } catch {
        var w = r.navigator, y = w && w.plugins;
        return [+/* @__PURE__ */ new Date(), r, y, r.screen, h(i)];
      }
    }
    function h(b) {
      return String.fromCharCode.apply(0, b);
    }
    if (g(a.random(), i), e.exports) {
      e.exports = v;
      try {
        m = Z3;
      } catch {
      }
    } else
      a["seed" + f] = v;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : Vt,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(gv);
var Y3 = gv.exports, X3 = z3, W3 = P3, J3 = U3, Q3 = L3, K3 = k3, j3 = H3, Xt = Y3;
Xt.alea = X3;
Xt.xor128 = W3;
Xt.xorwow = J3;
Xt.xorshift7 = Q3;
Xt.xor4096 = K3;
Xt.tychei = j3;
var eF = Xt;
const yv = /* @__PURE__ */ Xn(eF);
var rF = /* @__PURE__ */ yv(Date.now());
function bn(e) {
  var r;
  function i(t) {
    r = t === null ? rF : yv(String(t));
  }
  i(e);
  function a() {
    return r();
  }
  return a;
}
var Rc = "pickRandom", tF = ["typed", "config", "?on"], nF = /* @__PURE__ */ q(Rc, tF, (e) => {
  var {
    typed: r,
    config: i,
    on: a
  } = e, t = bn(i.randomSeed);
  return a && a("config", function(o, f) {
    o.randomSeed !== f.randomSeed && (t = bn(o.randomSeed));
  }), r(Rc, {
    "Array | Matrix": function(f) {
      return n(f, {});
    },
    "Array | Matrix, Object": function(f, l) {
      return n(f, l);
    },
    "Array | Matrix, number": function(f, l) {
      return n(f, {
        number: l
      });
    },
    "Array | Matrix, Array | Matrix": function(f, l) {
      return n(f, {
        weights: l
      });
    },
    "Array | Matrix, Array | Matrix, number": function(f, l, u) {
      return n(f, {
        number: u,
        weights: l
      });
    },
    "Array | Matrix, number, Array | Matrix": function(f, l, u) {
      return n(f, {
        number: l,
        weights: u
      });
    }
  });
  function n(o, f) {
    var {
      number: l,
      weights: u,
      elementWise: s = !0
    } = f, c = typeof l > "u";
    c && (l = 1);
    var m = Fe(o) ? o.create : Fe(u) ? u.create : null;
    o = o.valueOf(), u && (u = u.valueOf()), s === !0 && (o = Qe(o), u = Qe(u));
    var v = 0;
    if (typeof u < "u") {
      if (u.length !== o.length)
        throw new Error("Weights must have the same length as possibles");
      for (var d = 0, p = u.length; d < p; d++) {
        if (!Re(u[d]) || u[d] < 0)
          throw new Error("Weights must be an array of positive numbers");
        v += u[d];
      }
    }
    for (var x = o.length, g = [], N; g.length < l; ) {
      if (typeof u > "u")
        N = o[Math.floor(t() * x)];
      else
        for (var h = t() * v, b = 0, w = o.length; b < w; b++)
          if (h -= u[b], h < 0) {
            N = o[b];
            break;
          }
      g.push(N);
    }
    return c ? g[0] : m ? m(g) : g;
  }
});
function fo(e, r) {
  var i = [];
  if (e = e.slice(0), e.length > 1)
    for (var a = 0, t = e.shift(); a < t; a++)
      i.push(fo(e, r));
  else
    for (var n = 0, o = e.shift(); n < o; n++)
      i.push(r());
  return i;
}
var zc = "random", aF = ["typed", "config", "?on"], iF = /* @__PURE__ */ q(zc, aF, (e) => {
  var {
    typed: r,
    config: i,
    on: a
  } = e, t = bn(i.randomSeed);
  return a && a("config", function(f, l) {
    f.randomSeed !== l.randomSeed && (t = bn(f.randomSeed));
  }), r(zc, {
    "": () => o(0, 1),
    number: (f) => o(0, f),
    "number, number": (f, l) => o(f, l),
    "Array | Matrix": (f) => n(f, 0, 1),
    "Array | Matrix, number": (f, l) => n(f, 0, l),
    "Array | Matrix, number, number": (f, l, u) => n(f, l, u)
  });
  function n(f, l, u) {
    var s = fo(f.valueOf(), () => o(l, u));
    return Fe(f) ? f.create(s) : s;
  }
  function o(f, l) {
    return f + t() * (l - f);
  }
}), Pc = "randomInt", oF = ["typed", "config", "?on"], sF = /* @__PURE__ */ q(Pc, oF, (e) => {
  var {
    typed: r,
    config: i,
    on: a
  } = e, t = bn(i.randomSeed);
  return a && a("config", function(f, l) {
    f.randomSeed !== l.randomSeed && (t = bn(f.randomSeed));
  }), r(Pc, {
    "": () => o(0, 1),
    number: (f) => o(0, f),
    "number, number": (f, l) => o(f, l),
    "Array | Matrix": (f) => n(f, 0, 1),
    "Array | Matrix, number": (f, l) => n(f, 0, l),
    "Array | Matrix, number, number": (f, l, u) => n(f, l, u)
  });
  function n(f, l, u) {
    var s = fo(f.valueOf(), () => o(l, u));
    return Fe(f) ? f.create(s) : s;
  }
  function o(f, l) {
    return Math.floor(f + t() * (l - f));
  }
}), Uc = "stirlingS2", uF = ["typed", "addScalar", "subtractScalar", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "number", "?bignumber", "larger"], lF = /* @__PURE__ */ q(Uc, uF, (e) => {
  var {
    typed: r,
    addScalar: i,
    subtractScalar: a,
    multiplyScalar: t,
    divideScalar: n,
    pow: o,
    factorial: f,
    combinations: l,
    isNegative: u,
    isInteger: s,
    number: c,
    bignumber: m,
    larger: v
  } = e, d = [], p = [];
  return r(Uc, {
    "number | BigNumber, number | BigNumber": function(g, N) {
      if (!s(g) || u(g) || !s(N) || u(N))
        throw new TypeError("Non-negative integer value expected in function stirlingS2");
      if (v(N, g))
        throw new TypeError("k must be less than or equal to n in function stirlingS2");
      var h = !(Re(g) && Re(N)), b = h ? p : d, w = h ? m : c, y = c(g), A = c(N);
      if (b[y] && b[y].length > A)
        return b[y][A];
      for (var S = 0; S <= y; ++S)
        if (b[S] || (b[S] = [w(S === 0 ? 1 : 0)]), S !== 0)
          for (var D = b[S], E = b[S - 1], C = D.length; C <= S && C <= A; ++C)
            C === S ? D[C] = 1 : D[C] = i(t(w(C), E[C]), E[C - 1]);
      return b[y][A];
    }
  });
}), Lc = "bellNumbers", cF = ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"], fF = /* @__PURE__ */ q(Lc, cF, (e) => {
  var {
    typed: r,
    addScalar: i,
    isNegative: a,
    isInteger: t,
    stirlingS2: n
  } = e;
  return r(Lc, {
    "number | BigNumber": function(f) {
      if (!t(f) || a(f))
        throw new TypeError("Non-negative integer value expected in function bellNumbers");
      for (var l = 0, u = 0; u <= f; u++)
        l = i(l, n(f, u));
      return l;
    }
  });
}), kc = "catalan", mF = ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"], vF = /* @__PURE__ */ q(kc, mF, (e) => {
  var {
    typed: r,
    addScalar: i,
    divideScalar: a,
    multiplyScalar: t,
    combinations: n,
    isNegative: o,
    isInteger: f
  } = e;
  return r(kc, {
    "number | BigNumber": function(u) {
      if (!f(u) || o(u))
        throw new TypeError("Non-negative integer value expected in function catalan");
      return a(n(t(u, 2), u), i(u, 1));
    }
  });
}), Hc = "composition", pF = ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"], dF = /* @__PURE__ */ q(Hc, pF, (e) => {
  var {
    typed: r,
    addScalar: i,
    combinations: a,
    isPositive: t,
    isNegative: n,
    isInteger: o,
    larger: f
  } = e;
  return r(Hc, {
    "number | BigNumber, number | BigNumber": function(u, s) {
      if (!o(u) || !t(u) || !o(s) || !t(s))
        throw new TypeError("Positive integer value expected in function composition");
      if (f(s, u))
        throw new TypeError("k must be less than or equal to n in function composition");
      return a(i(u, -1), i(s, -1));
    }
  });
}), Gc = "leafCount", hF = ["parse", "typed"], gF = /* @__PURE__ */ q(Gc, hF, (e) => {
  var {
    parse: r,
    typed: i
  } = e;
  function a(t) {
    var n = 0;
    return t.forEach((o) => {
      n += a(o);
    }), n || 1;
  }
  return i(Gc, {
    Node: function(n) {
      return a(n);
    }
  });
});
function Vc(e) {
  return Xe(e) || mr(e) && e.isUnary() && Xe(e.args[0]);
}
function Ya(e) {
  return !!(Xe(e) || (Bt(e) || mr(e)) && e.args.every(Ya) || wt(e) && Ya(e.content));
}
function Zc(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Mi(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Zc(Object(i), !0).forEach(function(a) {
      dr(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Zc(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
var yF = "simplifyUtil", bF = ["FunctionNode", "OperatorNode", "SymbolNode"], mo = /* @__PURE__ */ q(yF, bF, (e) => {
  var {
    FunctionNode: r,
    OperatorNode: i,
    SymbolNode: a
  } = e, t = !0, n = !1, o = "defaultF", f = {
    /*      */
    add: {
      trivial: t,
      total: t,
      commutative: t,
      associative: t
    },
    /**/
    unaryPlus: {
      trivial: t,
      total: t,
      commutative: t,
      associative: t
    },
    /* */
    subtract: {
      trivial: n,
      total: t,
      commutative: n,
      associative: n
    },
    /* */
    multiply: {
      trivial: t,
      total: t,
      commutative: t,
      associative: t
    },
    /*   */
    divide: {
      trivial: n,
      total: t,
      commutative: n,
      associative: n
    },
    /*    */
    paren: {
      trivial: t,
      total: t,
      commutative: t,
      associative: n
    },
    /* */
    defaultF: {
      trivial: n,
      total: t,
      commutative: n,
      associative: n
    }
  }, l = {
    divide: {
      total: n
    },
    log: {
      total: n
    }
  }, u = {
    subtract: {
      total: n
    },
    abs: {
      trivial: t
    },
    log: {
      total: t
    }
  };
  function s(h, b) {
    var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f, y = o;
    if (typeof h == "string" ? y = h : mr(h) ? y = h.fn.toString() : Bt(h) ? y = h.name : wt(h) && (y = "paren"), Ee(w, y)) {
      var A = w[y];
      if (Ee(A, b))
        return A[b];
      if (Ee(f, y))
        return f[y][b];
    }
    if (Ee(w, o)) {
      var S = w[o];
      return Ee(S, b) ? S[b] : f[o][b];
    }
    if (Ee(f, y)) {
      var D = f[y];
      if (Ee(D, b))
        return D[b];
    }
    return f[o][b];
  }
  function c(h) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    return s(h, "commutative", b);
  }
  function m(h) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    return s(h, "associative", b);
  }
  function v(h, b) {
    var w = Mi({}, h);
    for (var y in b)
      Ee(h, y) ? w[y] = Mi(Mi({}, b[y]), h[y]) : w[y] = b[y];
    return w;
  }
  function d(h, b) {
    if (!h.args || h.args.length === 0)
      return h;
    h.args = p(h, b);
    for (var w = 0; w < h.args.length; w++)
      d(h.args[w], b);
  }
  function p(h, b) {
    var w, y = [], A = function S(D) {
      for (var E = 0; E < D.args.length; E++) {
        var C = D.args[E];
        mr(C) && w === C.op ? S(C) : y.push(C);
      }
    };
    return m(h, b) ? (w = h.op, A(h), y) : h.args;
  }
  function x(h, b) {
    if (!(!h.args || h.args.length === 0)) {
      for (var w = N(h), y = h.args.length, A = 0; A < y; A++)
        x(h.args[A], b);
      if (y > 2 && m(h, b)) {
        for (var S = h.args.pop(); h.args.length > 0; )
          S = w([h.args.pop(), S]);
        h.args = S.args;
      }
    }
  }
  function g(h, b) {
    if (!(!h.args || h.args.length === 0)) {
      for (var w = N(h), y = h.args.length, A = 0; A < y; A++)
        g(h.args[A], b);
      if (y > 2 && m(h, b)) {
        for (var S = h.args.shift(); h.args.length > 0; )
          S = w([S, h.args.shift()]);
        h.args = S.args;
      }
    }
  }
  function N(h) {
    return mr(h) ? function(b) {
      try {
        return new i(h.op, h.fn, b, h.implicit);
      } catch (w) {
        return console.error(w), [];
      }
    } : function(b) {
      return new r(new a(h.name), b);
    };
  }
  return {
    createMakeNodeFunction: N,
    hasProperty: s,
    isCommutative: c,
    isAssociative: m,
    mergeContext: v,
    flatten: d,
    allChildren: p,
    unflattenr: x,
    unflattenl: g,
    defaultContext: f,
    realContext: l,
    positiveContext: u
  };
}), xF = "simplify", wF = ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "resolve", "simplifyConstant", "simplifyCore", "?fraction", "?bignumber", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], NF = /* @__PURE__ */ q(xF, wF, (e) => {
  var {
    config: r,
    typed: i,
    parse: a,
    add: t,
    subtract: n,
    multiply: o,
    divide: f,
    pow: l,
    isZero: u,
    equal: s,
    resolve: c,
    simplifyConstant: m,
    simplifyCore: v,
    fraction: d,
    bignumber: p,
    mathWithTransform: x,
    matrix: g,
    AccessorNode: N,
    ArrayNode: h,
    ConstantNode: b,
    FunctionNode: w,
    IndexNode: y,
    ObjectNode: A,
    OperatorNode: S,
    ParenthesisNode: D,
    SymbolNode: E
  } = e, {
    hasProperty: C,
    isCommutative: F,
    isAssociative: _,
    mergeContext: I,
    flatten: $,
    unflattenr: T,
    unflattenl: B,
    createMakeNodeFunction: L,
    defaultContext: O,
    realContext: X,
    positiveContext: K
  } = mo({
    FunctionNode: w,
    OperatorNode: S,
    SymbolNode: E
  });
  i.addConversion({
    from: "Object",
    to: "Map",
    convert: mn
  });
  var V = i("simplify", {
    Node: ee,
    "Node, Map": (k, Y) => ee(k, !1, Y),
    "Node, Map, Object": (k, Y, W) => ee(k, !1, Y, W),
    "Node, Array": ee,
    "Node, Array, Map": ee,
    "Node, Array, Map, Object": ee
  });
  i.removeConversion({
    from: "Object",
    to: "Map",
    convert: mn
  }), V.defaultContext = O, V.realContext = X, V.positiveContext = K;
  function z(k) {
    return k.transform(function(Y, W, me) {
      return wt(Y) ? z(Y.content) : Y;
    });
  }
  var Q = {
    true: !0,
    false: !0,
    e: !0,
    i: !0,
    Infinity: !0,
    LN2: !0,
    LN10: !0,
    LOG2E: !0,
    LOG10E: !0,
    NaN: !0,
    phi: !0,
    pi: !0,
    SQRT1_2: !0,
    SQRT2: !0,
    tau: !0
    // null: false,
    // undefined: false,
    // version: false,
  };
  V.rules = [
    v,
    // { l: 'n+0', r: 'n' },     // simplifyCore
    // { l: 'n^0', r: '1' },     // simplifyCore
    // { l: '0*n', r: '0' },     // simplifyCore
    // { l: 'n/n', r: '1'},      // simplifyCore
    // { l: 'n^1', r: 'n' },     // simplifyCore
    // { l: '+n1', r:'n1' },     // simplifyCore
    // { l: 'n--n1', r:'n+n1' }, // simplifyCore
    {
      l: "log(e)",
      r: "1"
    },
    // temporary rules
    // Note initially we tend constants to the right because like-term
    // collection prefers the left, and we would rather collect nonconstants
    {
      s: "n-n1 -> n+-n1",
      // temporarily replace 'subtract' so we can further flatten the 'add' operator
      assuming: {
        subtract: {
          total: !0
        }
      }
    },
    {
      s: "n-n -> 0",
      // partial alternative when we can't always subtract
      assuming: {
        subtract: {
          total: !1
        }
      }
    },
    {
      s: "-(cl*v) -> v * (-cl)",
      // make non-constant terms positive
      assuming: {
        multiply: {
          commutative: !0
        },
        subtract: {
          total: !0
        }
      }
    },
    {
      s: "-(cl*v) -> (-cl) * v",
      // non-commutative version, part 1
      assuming: {
        multiply: {
          commutative: !1
        },
        subtract: {
          total: !0
        }
      }
    },
    {
      s: "-(v*cl) -> v * (-cl)",
      // non-commutative version, part 2
      assuming: {
        multiply: {
          commutative: !1
        },
        subtract: {
          total: !0
        }
      }
    },
    {
      l: "-(n1/n2)",
      r: "-n1/n2"
    },
    {
      l: "-v",
      r: "v * (-1)"
    },
    // finish making non-constant terms positive
    {
      l: "(n1 + n2)*(-1)",
      r: "n1*(-1) + n2*(-1)",
      repeat: !0
    },
    // expand negations to achieve as much sign cancellation as possible
    {
      l: "n/n1^n2",
      r: "n*n1^-n2"
    },
    // temporarily replace 'divide' so we can further flatten the 'multiply' operator
    {
      l: "n/n1",
      r: "n*n1^-1"
    },
    {
      s: "(n1*n2)^n3 -> n1^n3 * n2^n3",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
    },
    {
      s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    // expand nested exponentiation
    {
      s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)",
      assuming: {
        divide: {
          total: !0
        }
      }
      // 1/(1/n) = n needs 1/n to exist
    },
    // collect like factors; into a sum, only do this for nonconstants
    {
      l: " vd   * ( vd   * n1 + n2)",
      r: "vd^2       * n1 +  vd   * n2"
    },
    {
      s: " vd   * (vd^n4 * n1 + n2)   ->  vd^(1+n4)  * n1 +  vd   * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
      // v*1/v = v^(1+-1) needs 1/v
    },
    {
      s: "vd^n3 * ( vd   * n1 + n2)   ->  vd^(n3+1)  * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
    },
    {
      s: "vd^n3 * (vd^n4 * n1 + n2)   ->  vd^(n3+n4) * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
    },
    {
      l: "n*n",
      r: "n^2"
    },
    {
      s: "n * n^n1 -> n^(n1+1)",
      assuming: {
        divide: {
          total: !0
        }
      }
      // n*1/n = n^(-1+1) needs 1/n
    },
    {
      s: "n^n1 * n^n2 -> n^(n1+n2)",
      assuming: {
        divide: {
          total: !0
        }
      }
      // ditto for n^2*1/n^2
    },
    // Unfortunately, to deal with more complicated cancellations, it
    // becomes necessary to simplify constants twice per pass. It's not
    // terribly expensive compared to matching rules, so this should not
    // pose a performance problem.
    m,
    // First: before collecting like terms
    // collect like terms
    {
      s: "n+n -> 2*n",
      assuming: {
        add: {
          total: !0
        }
      }
      // 2 = 1 + 1 needs to exist
    },
    {
      l: "n+-n",
      r: "0"
    },
    {
      l: "vd*n + vd",
      r: "vd*(n+1)"
    },
    // NOTE: leftmost position is special:
    {
      l: "n3*n1 + n3*n2",
      r: "n3*(n1+n2)"
    },
    // All sub-monomials tried there.
    {
      l: "n3^(-n4)*n1 +   n3  * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)"
    },
    {
      l: "n3^(-n4)*n1 + n3^n5 * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)"
    },
    // noncommutative additional cases (term collection & factoring)
    {
      s: "n*vd + vd -> (n+1)*vd",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "vd + n*vd -> (1+n)*vd",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "n1*n3 + n2*n3 -> (n1+n2)*n3",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "n^n1 * n -> n^(n1+1)",
      assuming: {
        divide: {
          total: !0
        },
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      l: "n*cd + cd",
      r: "(n+1)*cd"
    },
    {
      s: "cd*n + cd -> cd*(n+1)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    {
      s: "cd + cd*n -> cd*(1+n)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    },
    m,
    // Second: before returning expressions to "standard form"
    // make factors positive (and undo 'make non-constant terms positive')
    {
      s: "(-n)*n1 -> -(n*n1)",
      assuming: {
        subtract: {
          total: !0
        }
      }
    },
    {
      s: "n1*(-n) -> -(n1*n)",
      // in case * non-commutative
      assuming: {
        subtract: {
          total: !0
        },
        multiply: {
          commutative: !1
        }
      }
    },
    // final ordering of constants
    {
      s: "ce+ve -> ve+ce",
      assuming: {
        add: {
          commutative: !0
        }
      },
      imposeContext: {
        add: {
          commutative: !1
        }
      }
    },
    {
      s: "vd*cd -> cd*vd",
      assuming: {
        multiply: {
          commutative: !0
        }
      },
      imposeContext: {
        multiply: {
          commutative: !1
        }
      }
    },
    // undo temporary rules
    // { l: '(-1) * n', r: '-n' }, // #811 added test which proved this is redundant
    {
      l: "n+-n1",
      r: "n-n1"
    },
    // undo replace 'subtract'
    {
      l: "n+-(n1)",
      r: "n-(n1)"
    },
    {
      s: "n*(n1^-1) -> n/n1",
      // undo replace 'divide'; for * commutative
      assuming: {
        multiply: {
          commutative: !0
        }
      }
      // o.w. / not conventional
    },
    {
      s: "n*n1^-n2 -> n/n1^n2",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
      // o.w. / not conventional
    },
    {
      s: "n^-1 -> 1/n",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
      // o.w. / not conventional
    },
    {
      l: "n^1",
      r: "n"
    },
    // can be produced by power cancellation
    {
      s: "n*(n1/n2) -> (n*n1)/n2",
      // '*' before '/'
      assuming: {
        multiply: {
          associative: !0
        }
      }
    },
    {
      s: "n-(n1+n2) -> n-n1-n2",
      // '-' before '+'
      assuming: {
        addition: {
          associative: !0,
          commutative: !0
        }
      }
    },
    // { l: '(n1/n2)/n3', r: 'n1/(n2*n3)' },
    // { l: '(n*n1)/(n*n2)', r: 'n1/n2' },
    // simplifyConstant can leave an extra factor of 1, which can always
    // be eliminated, since the identity always commutes
    {
      l: "1*n",
      r: "n",
      imposeContext: {
        multiply: {
          commutative: !0
        }
      }
    },
    {
      s: "n1/(n2/n3) -> (n1*n3)/n2",
      assuming: {
        multiply: {
          associative: !0
        }
      }
    },
    {
      l: "n1/(-n2)",
      r: "-n1/n2"
    }
  ];
  function ce(k, Y) {
    var W = {};
    if (k.s) {
      var me = k.s.split("->");
      if (me.length === 2)
        W.l = me[0], W.r = me[1];
      else
        throw SyntaxError("Could not parse rule: " + k.s);
    } else
      W.l = k.l, W.r = k.r;
    W.l = z(a(W.l)), W.r = z(a(W.r));
    for (var fe of ["imposeContext", "repeat", "assuming"])
      fe in k && (W[fe] = k[fe]);
    if (k.evaluate && (W.evaluate = a(k.evaluate)), _(W.l, Y)) {
      var R = !F(W.l, Y), U;
      R && (U = oe());
      var J = L(W.l), ae = oe();
      W.expanded = {}, W.expanded.l = J([W.l, ae]), $(W.expanded.l, Y), T(W.expanded.l, Y), W.expanded.r = J([W.r, ae]), R && (W.expandedNC1 = {}, W.expandedNC1.l = J([U, W.l]), W.expandedNC1.r = J([U, W.r]), W.expandedNC2 = {}, W.expandedNC2.l = J([U, W.expanded.l]), W.expandedNC2.r = J([U, W.expanded.r]));
    }
    return W;
  }
  function j(k, Y) {
    for (var W = [], me = 0; me < k.length; me++) {
      var fe = k[me], R = void 0, U = typeof fe;
      switch (U) {
        case "string":
          fe = {
            s: fe
          };
        case "object":
          R = ce(fe, Y);
          break;
        case "function":
          R = fe;
          break;
        default:
          throw TypeError("Unsupported type of rule: " + U);
      }
      W.push(R);
    }
    return W;
  }
  var re = 0;
  function oe() {
    return new E("_p" + re++);
  }
  function ee(k, Y) {
    var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn(), me = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, fe = me.consoleDebug;
    Y = j(Y || V.rules, me.context);
    var R = c(k, W);
    R = z(R);
    for (var U = {}, J = R.toString({
      parenthesis: "all"
    }); !U[J]; ) {
      U[J] = !0, re = 0;
      var ae = J;
      fe && console.log("Working on: ", J);
      for (var le = 0; le < Y.length; le++) {
        var ue = "";
        if (typeof Y[le] == "function" ? (R = Y[le](R, me), fe && (ue = Y[le].name)) : ($(R, me.context), R = se(R, Y[le], me.context), fe && (ue = "".concat(Y[le].l.toString(), " -> ").concat(Y[le].r.toString()))), fe) {
          var ge = R.toString({
            parenthesis: "all"
          });
          ge !== ae && (console.log("Applying", ue, "produced", ge), ae = ge);
        }
        B(R, me.context);
      }
      J = R.toString({
        parenthesis: "all"
      });
    }
    return R;
  }
  function ne(k, Y, W) {
    var me = k;
    if (k)
      for (var fe = 0; fe < k.length; ++fe) {
        var R = se(k[fe], Y, W);
        R !== k[fe] && (me === k && (me = k.slice()), me[fe] = R);
      }
    return me;
  }
  function se(k, Y, W) {
    if (Y.assuming) {
      for (var me in Y.assuming)
        for (var fe in Y.assuming[me])
          if (C(me, fe, W) !== Y.assuming[me][fe])
            return k;
    }
    var R = I(Y.imposeContext, W), U = k;
    if (U instanceof S || U instanceof w) {
      var J = ne(U.args, Y, W);
      J !== U.args && (U = U.clone(), U.args = J);
    } else if (U instanceof D) {
      if (U.content) {
        var ae = se(U.content, Y, W);
        ae !== U.content && (U = new D(ae));
      }
    } else if (U instanceof h) {
      var le = ne(U.items, Y, W);
      le !== U.items && (U = new h(le));
    } else if (U instanceof N) {
      var ue = U.object;
      U.object && (ue = se(U.object, Y, W));
      var ge = U.index;
      U.index && (ge = se(U.index, Y, W)), (ue !== U.object || ge !== U.index) && (U = new N(ue, ge));
    } else if (U instanceof y) {
      var he = ne(U.dimensions, Y, W);
      he !== U.dimensions && (U = new y(he));
    } else if (U instanceof A) {
      var De = !1, ye = {};
      for (var Ve in U.properties)
        ye[Ve] = se(U.properties[Ve], Y, W), ye[Ve] !== U.properties[Ve] && (De = !0);
      De && (U = new A(ye));
    }
    var Ye = Y.r, Ce = H(Y.l, U, R)[0];
    if (!Ce && Y.expanded && (Ye = Y.expanded.r, Ce = H(Y.expanded.l, U, R)[0]), !Ce && Y.expandedNC1 && (Ye = Y.expandedNC1.r, Ce = H(Y.expandedNC1.l, U, R)[0], Ce || (Ye = Y.expandedNC2.r, Ce = H(Y.expandedNC2.l, U, R)[0])), Ce) {
      var lr = U.implicit;
      U = Ye.clone(), lr && "implicit" in Ye && (U.implicit = !0), U = U.transform(function(M) {
        return M.isSymbolNode && Ee(Ce.placeholders, M.name) ? Ce.placeholders[M.name].clone() : M;
      });
    }
    return Y.repeat && U !== k && (U = se(U, Y, W)), U;
  }
  function ve(k, Y) {
    var W = [], me, fe, R = L(k);
    if (F(k, Y))
      for (var U = 0; U < k.args.length; U++)
        fe = k.args.slice(0), fe.splice(U, 1), me = fe.length === 1 ? fe[0] : R(fe), W.push(R([k.args[U], me]));
    else
      for (var J = 1; J < k.args.length; J++) {
        var ae = k.args[0];
        J > 1 && (ae = R(k.args.slice(0, J))), fe = k.args.slice(J), me = fe.length === 1 ? fe[0] : R(fe), W.push(R([ae, me]));
      }
    return W;
  }
  function we(k, Y) {
    var W = {
      placeholders: {}
    };
    if (!k.placeholders && !Y.placeholders)
      return W;
    if (k.placeholders) {
      if (!Y.placeholders)
        return k;
    } else
      return Y;
    for (var me in k.placeholders)
      if (Ee(k.placeholders, me) && (W.placeholders[me] = k.placeholders[me], Ee(Y.placeholders, me) && !te(k.placeholders[me], Y.placeholders[me])))
        return null;
    for (var fe in Y.placeholders)
      Ee(Y.placeholders, fe) && (W.placeholders[fe] = Y.placeholders[fe]);
    return W;
  }
  function Ae(k, Y) {
    var W = [];
    if (k.length === 0 || Y.length === 0)
      return W;
    for (var me, fe = 0; fe < k.length; fe++)
      for (var R = 0; R < Y.length; R++)
        me = we(k[fe], Y[R]), me && W.push(me);
    return W;
  }
  function P(k) {
    if (k.length === 0)
      return k;
    for (var Y = k.reduce(Ae), W = [], me = {}, fe = 0; fe < Y.length; fe++) {
      var R = JSON.stringify(Y[fe]);
      me[R] || (me[R] = !0, W.push(Y[fe]));
    }
    return W;
  }
  function H(k, Y, W, me) {
    var fe = [{
      placeholders: {}
    }];
    if (k instanceof S && Y instanceof S || k instanceof w && Y instanceof w) {
      if (k instanceof S) {
        if (k.op !== Y.op || k.fn !== Y.fn)
          return [];
      } else if (k instanceof w && k.name !== Y.name)
        return [];
      if (Y.args.length === 1 && k.args.length === 1 || !_(Y, W) && Y.args.length === k.args.length || me) {
        for (var R = [], U = 0; U < k.args.length; U++) {
          var J = H(k.args[U], Y.args[U], W);
          if (J.length === 0)
            break;
          R.push(J);
        }
        if (R.length !== k.args.length) {
          if (!F(Y, W) || // exact match in order needed
          k.args.length === 1)
            return [];
          if (k.args.length > 2)
            throw new Error("permuting >2 commutative non-associative rule arguments not yet implemented");
          var ae = H(k.args[0], Y.args[1], W);
          if (ae.length === 0)
            return [];
          var le = H(k.args[1], Y.args[0], W);
          if (le.length === 0)
            return [];
          R = [ae, le];
        }
        fe = P(R);
      } else if (Y.args.length >= 2 && k.args.length === 2) {
        for (var ue = ve(Y, W), ge = [], he = 0; he < ue.length; he++) {
          var De = H(k, ue[he], W, !0);
          ge = ge.concat(De);
        }
        return ge;
      } else {
        if (k.args.length > 2)
          throw Error("Unexpected non-binary associative function: " + k.toString());
        return [];
      }
    } else if (k instanceof E) {
      if (k.name.length === 0)
        throw new Error("Symbol in rule has 0 length...!?");
      if (Q[k.name]) {
        if (k.name !== Y.name)
          return [];
      } else
        switch (k.name[1] >= "a" && k.name[1] <= "z" ? k.name.substring(0, 2) : k.name[0]) {
          case "n":
          case "_p":
            fe[0].placeholders[k.name] = Y;
            break;
          case "c":
          case "cl":
            if (Xe(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "v":
            if (!Xe(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "vl":
            if (yr(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "cd":
            if (Vc(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "vd":
            if (!Vc(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "ce":
            if (Ya(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          case "ve":
            if (!Ya(Y))
              fe[0].placeholders[k.name] = Y;
            else
              return [];
            break;
          default:
            throw new Error("Invalid symbol in rule: " + k.name);
        }
    } else if (k instanceof b) {
      if (!s(k.value, Y.value))
        return [];
    } else
      return [];
    return fe;
  }
  function te(k, Y) {
    if (k instanceof b && Y instanceof b) {
      if (!s(k.value, Y.value))
        return !1;
    } else if (k instanceof E && Y instanceof E) {
      if (k.name !== Y.name)
        return !1;
    } else if (k instanceof S && Y instanceof S || k instanceof w && Y instanceof w) {
      if (k instanceof S) {
        if (k.op !== Y.op || k.fn !== Y.fn)
          return !1;
      } else if (k instanceof w && k.name !== Y.name)
        return !1;
      if (k.args.length !== Y.args.length)
        return !1;
      for (var W = 0; W < k.args.length; W++)
        if (!te(k.args[W], Y.args[W]))
          return !1;
    } else
      return !1;
    return !0;
  }
  return V;
}), DF = "simplifyConstant", AF = ["typed", "config", "mathWithTransform", "matrix", "?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"], EF = /* @__PURE__ */ q(DF, AF, (e) => {
  var {
    typed: r,
    config: i,
    mathWithTransform: a,
    matrix: t,
    fraction: n,
    bignumber: o,
    AccessorNode: f,
    ArrayNode: l,
    ConstantNode: u,
    FunctionNode: s,
    IndexNode: c,
    ObjectNode: m,
    OperatorNode: v,
    SymbolNode: d
  } = e, {
    isCommutative: p,
    isAssociative: x,
    allChildren: g,
    createMakeNodeFunction: N
  } = mo({
    FunctionNode: s,
    OperatorNode: v,
    SymbolNode: d
  }), h = r("simplifyConstant", {
    Node: ($) => A(I($, {})),
    "Node, Object": function(T, B) {
      return A(I(T, B));
    }
  });
  function b($) {
    return Wn($) ? $.valueOf() : $ instanceof Array ? $.map(b) : Fe($) ? t(b($.valueOf())) : $;
  }
  function w($, T, B) {
    try {
      return a[$].apply(null, T);
    } catch {
      return T = T.map(b), D(a[$].apply(null, T), B);
    }
  }
  var y = r({
    Fraction: C,
    number: function(T) {
      return T < 0 ? E(new u(-T)) : new u(T);
    },
    BigNumber: function(T) {
      return T < 0 ? E(new u(-T)) : new u(T);
    },
    Complex: function(T) {
      throw new Error("Cannot convert Complex number to Node");
    },
    string: function(T) {
      return new u(T);
    },
    Matrix: function(T) {
      return new l(T.valueOf().map((B) => y(B)));
    }
  });
  function A($) {
    return er($) ? $ : y($);
  }
  function S($, T) {
    var B = T && T.exactFractions !== !1;
    if (B && isFinite($) && n) {
      var L = n($), O = T && typeof T.fractionsLimit == "number" ? T.fractionsLimit : 1 / 0;
      if (L.valueOf() === $ && L.n < O && L.d < O)
        return L;
    }
    return $;
  }
  var D = r({
    "string, Object": function(T, B) {
      if (i.number === "BigNumber")
        return o === void 0 && ro(), o(T);
      if (i.number === "Fraction")
        return n === void 0 && Jm(), n(T);
      var L = parseFloat(T);
      return S(L, B);
    },
    "Fraction, Object": function(T, B) {
      return T;
    },
    // we don't need options here
    "BigNumber, Object": function(T, B) {
      return T;
    },
    // we don't need options here
    "number, Object": function(T, B) {
      return S(T, B);
    },
    "Complex, Object": function(T, B) {
      return T.im !== 0 ? T : S(T.re, B);
    },
    "Matrix, Object": function(T, B) {
      return t(S(T.valueOf()));
    },
    "Array, Object": function(T, B) {
      return T.map(S);
    }
  });
  function E($) {
    return new v("-", "unaryMinus", [$]);
  }
  function C($) {
    var T, B = $.s * $.n;
    return B < 0 ? T = new v("-", "unaryMinus", [new u(-B)]) : T = new u(B), $.d === 1 ? T : new v("/", "divide", [T, new u($.d)]);
  }
  function F($, T, B) {
    if (!Nn(T))
      return new f(A($), A(T));
    if (Zr($) || Fe($)) {
      for (var L = Array.from(T.dimensions); L.length > 0; )
        if (Xe(L[0]) && typeof L[0].value != "string") {
          var O = D(L.shift().value, B);
          Zr($) ? $ = $.items[O - 1] : ($ = $.valueOf()[O - 1], $ instanceof Array && ($ = t($)));
        } else if (L.length > 1 && Xe(L[1]) && typeof L[1].value != "string") {
          var X = D(L[1].value, B), K = [], V = Zr($) ? $.items : $.valueOf();
          for (var z of V)
            if (Zr(z))
              K.push(z.items[X - 1]);
            else if (Fe($))
              K.push(z[X - 1]);
            else
              break;
          if (K.length === V.length)
            Zr($) ? $ = new l(K) : $ = t(K), L.splice(1, 1);
          else
            break;
        } else
          break;
      return L.length === T.dimensions.length ? new f(A($), T) : L.length > 0 ? (T = new c(L), new f(A($), T)) : $;
    }
    if (Qa($) && T.dimensions.length === 1 && Xe(T.dimensions[0])) {
      var Q = T.dimensions[0].value;
      return Q in $.properties ? $.properties[Q] : new u();
    }
    return new f(A($), T);
  }
  function _($, T, B, L) {
    var O = T.shift(), X = T.reduce((K, V) => {
      if (!er(V)) {
        var z = K.pop();
        if (er(z))
          return [z, V];
        try {
          return K.push(w($, [z, V], L)), K;
        } catch {
          K.push(z);
        }
      }
      K.push(A(K.pop()));
      var Q = K.length === 1 ? K[0] : B(K);
      return [B([Q, A(V)])];
    }, [O]);
    return X.length === 1 ? X[0] : B([X[0], y(X[1])]);
  }
  function I($, T) {
    switch ($.type) {
      case "SymbolNode":
        return $;
      case "ConstantNode":
        switch (typeof $.value) {
          case "number":
            return D($.value, T);
          case "string":
            return $.value;
          default:
            if (!isNaN($.value))
              return D($.value, T);
        }
        return $;
      case "FunctionNode":
        if (a[$.name] && a[$.name].rawArgs)
          return $;
        {
          var B = ["add", "multiply"];
          if (B.indexOf($.name) === -1) {
            var L = $.args.map((se) => I(se, T));
            if (!L.some(er))
              try {
                return w($.name, L, T);
              } catch {
              }
            if ($.name === "size" && L.length === 1 && Zr(L[0])) {
              for (var O = [], X = L[0]; Zr(X); )
                O.push(X.items.length), X = X.items[0];
              return t(O);
            }
            return new s($.name, L.map(A));
          }
        }
      case "OperatorNode": {
        var K = $.fn.toString(), V, z, Q = N($);
        if (mr($) && $.isUnary())
          V = [I($.args[0], T)], er(V[0]) ? z = Q(V) : z = w(K, V, T);
        else if (x($, T.context))
          if (V = g($, T.context), V = V.map((se) => I(se, T)), p(K, T.context)) {
            for (var ce = [], j = [], re = 0; re < V.length; re++)
              er(V[re]) ? j.push(V[re]) : ce.push(V[re]);
            ce.length > 1 ? (z = _(K, ce, Q, T), j.unshift(z), z = _(K, j, Q, T)) : z = _(K, V, Q, T);
          } else
            z = _(K, V, Q, T);
        else
          V = $.args.map((se) => I(se, T)), z = _(K, V, Q, T);
        return z;
      }
      case "ParenthesisNode":
        return I($.content, T);
      case "AccessorNode":
        return F(I($.object, T), I($.index, T), T);
      case "ArrayNode": {
        var oe = $.items.map((se) => I(se, T));
        return oe.some(er) ? new l(oe.map(A)) : t(oe);
      }
      case "IndexNode":
        return new c($.dimensions.map((se) => h(se, T)));
      case "ObjectNode": {
        var ee = {};
        for (var ne in $.properties)
          ee[ne] = h($.properties[ne], T);
        return new m(ee);
      }
      case "AssignmentNode":
      case "BlockNode":
      case "FunctionAssignmentNode":
      case "RangeNode":
      case "ConditionalNode":
      default:
        throw new Error("Unimplemented node type in simplifyConstant: ".concat($.type));
    }
  }
  return h;
}), Yc = "simplifyCore", SF = ["typed", "parse", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], CF = /* @__PURE__ */ q(Yc, SF, (e) => {
  var {
    typed: r,
    parse: i,
    equal: a,
    isZero: t,
    add: n,
    subtract: o,
    multiply: f,
    divide: l,
    pow: u,
    AccessorNode: s,
    ArrayNode: c,
    ConstantNode: m,
    FunctionNode: v,
    IndexNode: d,
    ObjectNode: p,
    OperatorNode: x,
    ParenthesisNode: g,
    SymbolNode: N
  } = e, h = new m(0), b = new m(1), w = new m(!0), y = new m(!1);
  function A(C) {
    return mr(C) && ["and", "not", "or"].includes(C.op);
  }
  var {
    hasProperty: S,
    isCommutative: D
  } = mo({
    FunctionNode: v,
    OperatorNode: x,
    SymbolNode: N
  });
  function E(C) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = F ? F.context : void 0;
    if (S(C, "trivial", _)) {
      if (Bt(C) && C.args.length === 1)
        return E(C.args[0], F);
      var I = !1, $ = 0;
      if (C.forEach((j) => {
        ++$, $ === 1 && (I = E(j, F));
      }), $ === 1)
        return I;
    }
    var T = C;
    if (Bt(T)) {
      var B = B2(T.name);
      if (B) {
        if (T.args.length > 2 && S(T, "associative", _))
          for (; T.args.length > 2; ) {
            var L = T.args.pop(), O = T.args.pop();
            T.args.push(new x(B, T.name, [L, O]));
          }
        T = new x(B, T.name, T.args);
      } else
        return new v(E(T.fn), T.args.map((j) => E(j, F)));
    }
    if (mr(T) && T.isUnary()) {
      var X = E(T.args[0], F);
      if (T.op === "~" && mr(X) && X.isUnary() && X.op === "~" || T.op === "not" && mr(X) && X.isUnary() && X.op === "not" && A(X.args[0]))
        return X.args[0];
      var K = !0;
      if (T.op === "-" && mr(X) && (X.isBinary() && X.fn === "subtract" && (T = new x("-", "subtract", [X.args[1], X.args[0]]), K = !1), X.isUnary() && X.op === "-"))
        return X.args[0];
      if (K)
        return new x(T.op, T.fn, [X]);
    }
    if (mr(T) && T.isBinary()) {
      var V = E(T.args[0], F), z = E(T.args[1], F);
      if (T.op === "+") {
        if (Xe(V) && t(V.value))
          return z;
        if (Xe(z) && t(z.value))
          return V;
        mr(z) && z.isUnary() && z.op === "-" && (z = z.args[0], T = new x("-", "subtract", [V, z]));
      }
      if (T.op === "-")
        return mr(z) && z.isUnary() && z.op === "-" ? E(new x("+", "add", [V, z.args[0]]), F) : Xe(V) && t(V.value) ? E(new x("-", "unaryMinus", [z])) : Xe(z) && t(z.value) ? V : new x(T.op, T.fn, [V, z]);
      if (T.op === "*") {
        if (Xe(V)) {
          if (t(V.value))
            return h;
          if (a(V.value, 1))
            return z;
        }
        if (Xe(z)) {
          if (t(z.value))
            return h;
          if (a(z.value, 1))
            return V;
          if (D(T, _))
            return new x(T.op, T.fn, [z, V], T.implicit);
        }
        return new x(T.op, T.fn, [V, z], T.implicit);
      }
      if (T.op === "/")
        return Xe(V) && t(V.value) ? h : Xe(z) && a(z.value, 1) ? V : new x(T.op, T.fn, [V, z]);
      if (T.op === "^" && Xe(z)) {
        if (t(z.value))
          return b;
        if (a(z.value, 1))
          return V;
      }
      if (T.op === "and") {
        if (Xe(V))
          if (V.value) {
            if (A(z))
              return z;
            if (Xe(z))
              return z.value ? w : y;
          } else
            return y;
        if (Xe(z))
          if (z.value) {
            if (A(V))
              return V;
          } else
            return y;
      }
      if (T.op === "or") {
        if (Xe(V)) {
          if (V.value)
            return w;
          if (A(z))
            return z;
        }
        if (Xe(z)) {
          if (z.value)
            return w;
          if (A(V))
            return V;
        }
      }
      return new x(T.op, T.fn, [V, z]);
    }
    if (mr(T))
      return new x(T.op, T.fn, T.args.map((j) => E(j, F)));
    if (Zr(T))
      return new c(T.items.map((j) => E(j, F)));
    if (Ht(T))
      return new s(E(T.object, F), E(T.index, F));
    if (Nn(T))
      return new d(T.dimensions.map((j) => E(j, F)));
    if (Qa(T)) {
      var Q = {};
      for (var ce in T.properties)
        Q[ce] = E(T.properties[ce], F);
      return new p(Q);
    }
    return T;
  }
  return r(Yc, {
    Node: E,
    "Node,Object": E
  });
}), MF = "resolve", FF = ["typed", "parse", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode"], BF = /* @__PURE__ */ q(MF, FF, (e) => {
  var {
    typed: r,
    parse: i,
    ConstantNode: a,
    FunctionNode: t,
    OperatorNode: n,
    ParenthesisNode: o
  } = e;
  function f(l, u) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Set();
    if (!u)
      return l;
    if (yr(l)) {
      if (s.has(l.name)) {
        var c = Array.from(s).join(", ");
        throw new ReferenceError("recursive loop of variable definitions among {".concat(c, "}"));
      }
      var m = u.get(l.name);
      if (er(m)) {
        var v = new Set(s);
        return v.add(l.name), f(m, u, v);
      } else
        return typeof m == "number" ? i(String(m)) : m !== void 0 ? new a(m) : l;
    } else if (mr(l)) {
      var d = l.args.map(function(x) {
        return f(x, u, s);
      });
      return new n(l.op, l.fn, d, l.implicit);
    } else {
      if (wt(l))
        return new o(f(l.content, u, s));
      if (Bt(l)) {
        var p = l.args.map(function(x) {
          return f(x, u, s);
        });
        return new t(l.name, p);
      }
    }
    return l.map((x) => f(x, u, s));
  }
  return r("resolve", {
    Node: f,
    "Node, Map | null | undefined": f,
    "Node, Object": (l, u) => f(l, mn(u)),
    // For arrays and matrices, we map `self` rather than `_resolve`
    // because resolve is fairly expensive anyway, and this way
    // we get nice error messages if one entry in the array has wrong type.
    "Array | Matrix": r.referToSelf((l) => (u) => u.map((s) => l(s))),
    "Array | Matrix, null | undefined": r.referToSelf((l) => (u) => u.map((s) => l(s))),
    "Array, Object": r.referTo("Array,Map", (l) => (u, s) => l(u, mn(s))),
    "Matrix, Object": r.referTo("Matrix,Map", (l) => (u, s) => l(u, mn(s))),
    "Array | Matrix, Map": r.referToSelf((l) => (u, s) => u.map((c) => l(c, s)))
  });
}), Xc = "symbolicEqual", TF = ["parse", "simplify", "typed", "OperatorNode"], OF = /* @__PURE__ */ q(Xc, TF, (e) => {
  var {
    parse: r,
    simplify: i,
    typed: a,
    OperatorNode: t
  } = e;
  function n(o, f) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = new t("-", "subtract", [o, f]), s = i(u, {}, l);
    return Xe(s) && !s.value;
  }
  return a(Xc, {
    "Node, Node": n,
    "Node, Node, Object": n
  });
}), Wc = "derivative", _F = ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], $F = /* @__PURE__ */ q(Wc, _F, (e) => {
  var {
    typed: r,
    config: i,
    parse: a,
    simplify: t,
    equal: n,
    isZero: o,
    numeric: f,
    ConstantNode: l,
    FunctionNode: u,
    OperatorNode: s,
    ParenthesisNode: c,
    SymbolNode: m
  } = e;
  function v(h, b) {
    var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      simplify: !0
    }, y = {};
    x(y, h, b.name);
    var A = g(h, y);
    return w.simplify ? t(A) : A;
  }
  r.addConversion({
    from: "identifier",
    to: "SymbolNode",
    convert: a
  });
  var d = r(Wc, {
    "Node, SymbolNode": v,
    "Node, SymbolNode, Object": v
    /* TODO: implement and test syntax with order of derivatives -> implement as an option {order: number}
    'Node, SymbolNode, ConstantNode': function (expr, variable, {order}) {
      let res = expr
      for (let i = 0; i < order; i++) {
        let constNodes = {}
        constTag(constNodes, expr, variable.name)
        res = _derivative(res, constNodes)
      }
      return res
    }
    */
  });
  r.removeConversion({
    from: "identifier",
    to: "SymbolNode",
    convert: a
  }), d._simplify = !0, d.toTex = function(h) {
    return p.apply(null, h.args);
  };
  var p = r("_derivTex", {
    "Node, SymbolNode": function(b, w) {
      return Xe(b) && ar(b.value) === "string" ? p(a(b.value).toString(), w.toString(), 1) : p(b.toTex(), w.toString(), 1);
    },
    "Node, ConstantNode": function(b, w) {
      if (ar(w.value) === "string")
        return p(b, a(w.value));
      throw new Error("The second parameter to 'derivative' is a non-string constant");
    },
    "Node, SymbolNode, ConstantNode": function(b, w, y) {
      return p(b.toString(), w.name, y.value);
    },
    "string, string, number": function(b, w, y) {
      var A;
      return y === 1 ? A = "{d\\over d" + w + "}" : A = "{d^{" + y + "}\\over d" + w + "^{" + y + "}}", A + "\\left[".concat(b, "\\right]");
    }
  }), x = r("constTag", {
    "Object, ConstantNode, string": function(b, w) {
      return b[w] = !0, !0;
    },
    "Object, SymbolNode, string": function(b, w, y) {
      return w.name !== y ? (b[w] = !0, !0) : !1;
    },
    "Object, ParenthesisNode, string": function(b, w, y) {
      return x(b, w.content, y);
    },
    "Object, FunctionAssignmentNode, string": function(b, w, y) {
      return w.params.indexOf(y) === -1 ? (b[w] = !0, !0) : x(b, w.expr, y);
    },
    "Object, FunctionNode | OperatorNode, string": function(b, w, y) {
      if (w.args.length > 0) {
        for (var A = x(b, w.args[0], y), S = 1; S < w.args.length; ++S)
          A = x(b, w.args[S], y) && A;
        if (A)
          return b[w] = !0, !0;
      }
      return !1;
    }
  }), g = r("_derivative", {
    "ConstantNode, Object": function(b) {
      return N(0);
    },
    "SymbolNode, Object": function(b, w) {
      return w[b] !== void 0 ? N(0) : N(1);
    },
    "ParenthesisNode, Object": function(b, w) {
      return new c(g(b.content, w));
    },
    "FunctionAssignmentNode, Object": function(b, w) {
      return w[b] !== void 0 ? N(0) : g(b.expr, w);
    },
    "FunctionNode, Object": function(b, w) {
      if (w[b] !== void 0)
        return N(0);
      var y = b.args[0], A, S = !1, D = !1, E;
      switch (b.name) {
        case "cbrt":
          S = !0, E = new s("*", "multiply", [N(3), new s("^", "pow", [y, new s("/", "divide", [N(2), N(3)])])]);
          break;
        case "sqrt":
        case "nthRoot":
          if (b.args.length === 1)
            S = !0, E = new s("*", "multiply", [N(2), new u("sqrt", [y])]);
          else if (b.args.length === 2)
            return A = new s("/", "divide", [N(1), b.args[1]]), w[A] = w[b.args[1]], g(new s("^", "pow", [y, A]), w);
          break;
        case "log10":
          A = N(10);
        case "log":
          if (!A && b.args.length === 1)
            E = y.clone(), S = !0;
          else if (b.args.length === 1 && A || b.args.length === 2 && w[b.args[1]] !== void 0)
            E = new s("*", "multiply", [y.clone(), new u("log", [A || b.args[1]])]), S = !0;
          else if (b.args.length === 2)
            return g(new s("/", "divide", [new u("log", [y]), new u("log", [b.args[1]])]), w);
          break;
        case "pow":
          if (b.args.length === 2)
            return w[A] = w[b.args[1]], g(new s("^", "pow", [y, b.args[1]]), w);
          break;
        case "exp":
          E = new u("exp", [y.clone()]);
          break;
        case "sin":
          E = new u("cos", [y.clone()]);
          break;
        case "cos":
          E = new s("-", "unaryMinus", [new u("sin", [y.clone()])]);
          break;
        case "tan":
          E = new s("^", "pow", [new u("sec", [y.clone()]), N(2)]);
          break;
        case "sec":
          E = new s("*", "multiply", [b, new u("tan", [y.clone()])]);
          break;
        case "csc":
          D = !0, E = new s("*", "multiply", [b, new u("cot", [y.clone()])]);
          break;
        case "cot":
          D = !0, E = new s("^", "pow", [new u("csc", [y.clone()]), N(2)]);
          break;
        case "asin":
          S = !0, E = new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])]);
          break;
        case "acos":
          S = !0, D = !0, E = new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])]);
          break;
        case "atan":
          S = !0, E = new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)]);
          break;
        case "asec":
          S = !0, E = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
          break;
        case "acsc":
          S = !0, D = !0, E = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
          break;
        case "acot":
          S = !0, D = !0, E = new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)]);
          break;
        case "sinh":
          E = new u("cosh", [y.clone()]);
          break;
        case "cosh":
          E = new u("sinh", [y.clone()]);
          break;
        case "tanh":
          E = new s("^", "pow", [new u("sech", [y.clone()]), N(2)]);
          break;
        case "sech":
          D = !0, E = new s("*", "multiply", [b, new u("tanh", [y.clone()])]);
          break;
        case "csch":
          D = !0, E = new s("*", "multiply", [b, new u("coth", [y.clone()])]);
          break;
        case "coth":
          D = !0, E = new s("^", "pow", [new u("csch", [y.clone()]), N(2)]);
          break;
        case "asinh":
          S = !0, E = new u("sqrt", [new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)])]);
          break;
        case "acosh":
          S = !0, E = new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])]);
          break;
        case "atanh":
          S = !0, E = new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])]);
          break;
        case "asech":
          S = !0, D = !0, E = new s("*", "multiply", [y.clone(), new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])])]);
          break;
        case "acsch":
          S = !0, D = !0, E = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
          break;
        case "acoth":
          S = !0, D = !0, E = new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])]);
          break;
        case "abs":
          E = new s("/", "divide", [new u(new m("abs"), [y.clone()]), y.clone()]);
          break;
        case "gamma":
        default:
          throw new Error('Cannot process function "' + b.name + '" in derivative: the function is not supported, undefined, or the number of arguments passed to it are not supported');
      }
      var C, F;
      S ? (C = "/", F = "divide") : (C = "*", F = "multiply");
      var _ = g(y, w);
      return D && (_ = new s("-", "unaryMinus", [_])), new s(C, F, [_, E]);
    },
    "OperatorNode, Object": function(b, w) {
      if (w[b] !== void 0)
        return N(0);
      if (b.op === "+")
        return new s(b.op, b.fn, b.args.map(function($) {
          return g($, w);
        }));
      if (b.op === "-") {
        if (b.isUnary())
          return new s(b.op, b.fn, [g(b.args[0], w)]);
        if (b.isBinary())
          return new s(b.op, b.fn, [g(b.args[0], w), g(b.args[1], w)]);
      }
      if (b.op === "*") {
        var y = b.args.filter(function($) {
          return w[$] !== void 0;
        });
        if (y.length > 0) {
          var A = b.args.filter(function($) {
            return w[$] === void 0;
          }), S = A.length === 1 ? A[0] : new s("*", "multiply", A), D = y.concat(g(S, w));
          return new s("*", "multiply", D);
        }
        return new s("+", "add", b.args.map(function($) {
          return new s("*", "multiply", b.args.map(function(T) {
            return T === $ ? g(T, w) : T.clone();
          }));
        }));
      }
      if (b.op === "/" && b.isBinary()) {
        var E = b.args[0], C = b.args[1];
        return w[C] !== void 0 ? new s("/", "divide", [g(E, w), C]) : w[E] !== void 0 ? new s("*", "multiply", [new s("-", "unaryMinus", [E]), new s("/", "divide", [g(C, w), new s("^", "pow", [C.clone(), N(2)])])]) : new s("/", "divide", [new s("-", "subtract", [new s("*", "multiply", [g(E, w), C.clone()]), new s("*", "multiply", [E.clone(), g(C, w)])]), new s("^", "pow", [C.clone(), N(2)])]);
      }
      if (b.op === "^" && b.isBinary()) {
        var F = b.args[0], _ = b.args[1];
        if (w[F] !== void 0)
          return Xe(F) && (o(F.value) || n(F.value, 1)) ? N(0) : new s("*", "multiply", [b, new s("*", "multiply", [new u("log", [F.clone()]), g(_.clone(), w)])]);
        if (w[_] !== void 0) {
          if (Xe(_)) {
            if (o(_.value))
              return N(0);
            if (n(_.value, 1))
              return g(F, w);
          }
          var I = new s("^", "pow", [F.clone(), new s("-", "subtract", [_, N(1)])]);
          return new s("*", "multiply", [_.clone(), new s("*", "multiply", [g(F, w), I])]);
        }
        return new s("*", "multiply", [new s("^", "pow", [F.clone(), _.clone()]), new s("+", "add", [new s("*", "multiply", [g(F, w), new s("/", "divide", [_.clone(), F.clone()])]), new s("*", "multiply", [g(_, w), new u("log", [F.clone()])])])]);
      }
      throw new Error('Cannot process operator "' + b.op + '" in derivative: the operator is not supported, undefined, or the number of arguments passed to it are not supported');
    }
  });
  function N(h, b) {
    return new l(f(h, b || i.number));
  }
  return d;
}), Jc = "rationalize", IF = ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplifyConstant", "simplifyCore", "simplify", "?bignumber", "?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode", "ParenthesisNode"], qF = /* @__PURE__ */ q(Jc, IF, (e) => {
  var {
    config: r,
    typed: i,
    equal: a,
    isZero: t,
    add: n,
    subtract: o,
    multiply: f,
    divide: l,
    pow: u,
    parse: s,
    simplifyConstant: c,
    simplifyCore: m,
    simplify: v,
    fraction: d,
    bignumber: p,
    mathWithTransform: x,
    matrix: g,
    AccessorNode: N,
    ArrayNode: h,
    ConstantNode: b,
    FunctionNode: w,
    IndexNode: y,
    ObjectNode: A,
    OperatorNode: S,
    SymbolNode: D,
    ParenthesisNode: E
  } = e;
  function C(T) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, O = _(), X = F(T, B, !0, O.firstRules), K = X.variables.length, V = {
      exactFractions: !1
    }, z = {
      exactFractions: !0
    };
    if (T = X.expression, K >= 1) {
      T = I(T);
      var Q, ce, j = !0, re = !1;
      T = v(T, O.firstRules, {}, V);
      for (var oe; ce = j ? O.distrDivRules : O.sucDivRules, T = v(T, ce, {}, z), j = !j, oe = T.toString(), oe !== Q; )
        re = !0, Q = oe;
      re && (T = v(T, O.firstRulesAgain, {}, V)), T = v(T, O.finalRules, {}, V);
    }
    var ee = [], ne = {};
    return T.type === "OperatorNode" && T.isBinary() && T.op === "/" ? (K === 1 && (T.args[0] = $(T.args[0], ee), T.args[1] = $(T.args[1])), L && (ne.numerator = T.args[0], ne.denominator = T.args[1])) : (K === 1 && (T = $(T, ee)), L && (ne.numerator = T, ne.denominator = null)), L ? (ne.coefficients = ee, ne.variables = X.variables, ne.expression = T, ne) : T;
  }
  return i(Jc, {
    Node: C,
    "Node, boolean": (T, B) => C(T, {}, B),
    "Node, Object": C,
    "Node, Object, boolean": C
  });
  function F(T, B, L, O) {
    var X = [], K = v(T, O, B, {
      exactFractions: !1
    });
    L = !!L;
    var V = "+-*" + (L ? "/" : "");
    Q(K);
    var z = {};
    return z.expression = K, z.variables = X, z;
    function Q(ce) {
      var j = ce.type;
      if (j === "FunctionNode")
        throw new Error("There is an unsolved function call");
      if (j === "OperatorNode")
        if (ce.op === "^") {
          if (ce.args[1].type !== "ConstantNode" || !Se(parseFloat(ce.args[1].value)))
            throw new Error("There is a non-integer exponent");
          Q(ce.args[0]);
        } else {
          if (V.indexOf(ce.op) === -1)
            throw new Error("Operator " + ce.op + " invalid in polynomial expression");
          for (var re = 0; re < ce.args.length; re++)
            Q(ce.args[re]);
        }
      else if (j === "SymbolNode") {
        var oe = ce.name, ee = X.indexOf(oe);
        ee === -1 && X.push(oe);
      } else if (j === "ParenthesisNode")
        Q(ce.content);
      else if (j !== "ConstantNode")
        throw new Error("type " + j + " is not allowed in polynomial expression");
    }
  }
  function _() {
    var T = [
      m,
      // sCore
      {
        l: "n+n",
        r: "2*n"
      },
      {
        l: "n+-n",
        r: "0"
      },
      c,
      // sConstant
      {
        l: "n*(n1^-1)",
        r: "n/n1"
      },
      {
        l: "n*n1^-n2",
        r: "n/n1^n2"
      },
      {
        l: "n1^-1",
        r: "1/n1"
      },
      {
        l: "n*(n1/n2)",
        r: "(n*n1)/n2"
      },
      {
        l: "1*n",
        r: "n"
      }
    ], B = [
      {
        l: "(-n1)/(-n2)",
        r: "n1/n2"
      },
      // Unary division
      {
        l: "(-n1)*(-n2)",
        r: "n1*n2"
      },
      // Unary multiplication
      {
        l: "n1--n2",
        r: "n1+n2"
      },
      // '--' elimination
      {
        l: "n1-n2",
        r: "n1+(-n2)"
      },
      // Subtraction turn into add with un�ry minus
      {
        l: "(n1+n2)*n3",
        r: "(n1*n3 + n2*n3)"
      },
      // Distributive 1
      {
        l: "n1*(n2+n3)",
        r: "(n1*n2+n1*n3)"
      },
      // Distributive 2
      {
        l: "c1*n + c2*n",
        r: "(c1+c2)*n"
      },
      // Joining constants
      {
        l: "c1*n + n",
        r: "(c1+1)*n"
      },
      // Joining constants
      {
        l: "c1*n - c2*n",
        r: "(c1-c2)*n"
      },
      // Joining constants
      {
        l: "c1*n - n",
        r: "(c1-1)*n"
      },
      // Joining constants
      {
        l: "v/c",
        r: "(1/c)*v"
      },
      // variable/constant (new!)
      {
        l: "v/-c",
        r: "-(1/c)*v"
      },
      // variable/constant (new!)
      {
        l: "-v*-c",
        r: "c*v"
      },
      // Inversion constant and variable 1
      {
        l: "-v*c",
        r: "-c*v"
      },
      // Inversion constant and variable 2
      {
        l: "v*-c",
        r: "-c*v"
      },
      // Inversion constant and variable 3
      {
        l: "v*c",
        r: "c*v"
      },
      // Inversion constant and variable 4
      {
        l: "-(-n1*n2)",
        r: "(n1*n2)"
      },
      // Unary propagation
      {
        l: "-(n1*n2)",
        r: "(-n1*n2)"
      },
      // Unary propagation
      {
        l: "-(-n1+n2)",
        r: "(n1-n2)"
      },
      // Unary propagation
      {
        l: "-(n1+n2)",
        r: "(-n1-n2)"
      },
      // Unary propagation
      {
        l: "(n1^n2)^n3",
        r: "(n1^(n2*n3))"
      },
      // Power to Power
      {
        l: "-(-n1/n2)",
        r: "(n1/n2)"
      },
      // Division and Unary
      {
        l: "-(n1/n2)",
        r: "(-n1/n2)"
      }
    ], L = [
      {
        l: "(n1/n2 + n3/n4)",
        r: "((n1*n4 + n3*n2)/(n2*n4))"
      },
      // Sum of fractions
      {
        l: "(n1/n2 + n3)",
        r: "((n1 + n3*n2)/n2)"
      },
      // Sum fraction with number 1
      {
        l: "(n1 + n2/n3)",
        r: "((n1*n3 + n2)/n3)"
      }
    ], O = [
      {
        l: "(n1/(n2/n3))",
        r: "((n1*n3)/n2)"
      },
      // Division simplification
      {
        l: "(n1/n2/n3)",
        r: "(n1/(n2*n3))"
      }
    ], X = {};
    return X.firstRules = T.concat(B, O), X.distrDivRules = L, X.sucDivRules = O, X.firstRulesAgain = T.concat(B), X.finalRules = [
      m,
      // simplify.rules[0]
      {
        l: "n*-n",
        r: "-n^2"
      },
      // Joining multiply with power 1
      {
        l: "n*n",
        r: "n^2"
      },
      // Joining multiply with power 2
      c,
      // simplify.rules[14] old 3rd index in oldRules
      {
        l: "n*-n^n1",
        r: "-n^(n1+1)"
      },
      // Joining multiply with power 3
      {
        l: "n*n^n1",
        r: "n^(n1+1)"
      },
      // Joining multiply with power 4
      {
        l: "n^n1*-n^n2",
        r: "-n^(n1+n2)"
      },
      // Joining multiply with power 5
      {
        l: "n^n1*n^n2",
        r: "n^(n1+n2)"
      },
      // Joining multiply with power 6
      {
        l: "n^n1*-n",
        r: "-n^(n1+1)"
      },
      // Joining multiply with power 7
      {
        l: "n^n1*n",
        r: "n^(n1+1)"
      },
      // Joining multiply with power 8
      {
        l: "n^n1/-n",
        r: "-n^(n1-1)"
      },
      // Joining multiply with power 8
      {
        l: "n^n1/n",
        r: "n^(n1-1)"
      },
      // Joining division with power 1
      {
        l: "n/-n^n1",
        r: "-n^(1-n1)"
      },
      // Joining division with power 2
      {
        l: "n/n^n1",
        r: "n^(1-n1)"
      },
      // Joining division with power 3
      {
        l: "n^n1/-n^n2",
        r: "n^(n1-n2)"
      },
      // Joining division with power 4
      {
        l: "n^n1/n^n2",
        r: "n^(n1-n2)"
      },
      // Joining division with power 5
      {
        l: "n1+(-n2*n3)",
        r: "n1-n2*n3"
      },
      // Solving useless parenthesis 1
      {
        l: "v*(-c)",
        r: "-c*v"
      },
      // Solving useless unary 2
      {
        l: "n1+-n2",
        r: "n1-n2"
      },
      // Solving +- together (new!)
      {
        l: "v*c",
        r: "c*v"
      },
      // inversion constant with variable
      {
        l: "(n1^n2)^n3",
        r: "(n1^(n2*n3))"
      }
      // Power to Power
    ], X;
  }
  function I(T, B, L) {
    var O = T.type, X = arguments.length > 1;
    if (O === "OperatorNode" && T.isBinary()) {
      var K = !1, V;
      if (T.op === "^" && (T.args[0].type === "ParenthesisNode" || T.args[0].type === "OperatorNode") && T.args[1].type === "ConstantNode" && (V = parseFloat(T.args[1].value), K = V >= 2 && Se(V)), K) {
        if (V > 2) {
          var z = T.args[0], Q = new S("^", "pow", [T.args[0].cloneDeep(), new b(V - 1)]);
          T = new S("*", "multiply", [z, Q]);
        } else
          T = new S("*", "multiply", [T.args[0], T.args[0].cloneDeep()]);
        X && (L === "content" ? B.content = T : B.args[L] = T);
      }
    }
    if (O === "ParenthesisNode")
      I(T.content, T, "content");
    else if (O !== "ConstantNode" && O !== "SymbolNode")
      for (var ce = 0; ce < T.args.length; ce++)
        I(T.args[ce], T, ce);
    if (!X)
      return T;
  }
  function $(T, B) {
    B === void 0 && (B = []), B[0] = 0;
    var L = {};
    L.cte = 1, L.oper = "+", L.fire = "";
    var O = 0, X = "";
    oe(T, null, L), O = B.length - 1;
    for (var K = !0, V, z = O; z >= 0; z--)
      if (B[z] !== 0) {
        var Q = new b(K ? B[z] : Math.abs(B[z])), ce = B[z] < 0 ? "-" : "+";
        if (z > 0) {
          var j = new D(X);
          if (z > 1) {
            var re = new b(z);
            j = new S("^", "pow", [j, re]);
          }
          B[z] === -1 && K ? Q = new S("-", "unaryMinus", [j]) : Math.abs(B[z]) === 1 ? Q = j : Q = new S("*", "multiply", [Q, j]);
        }
        K ? V = Q : ce === "+" ? V = new S("+", "add", [V, Q]) : V = new S("-", "subtract", [V, Q]), K = !1;
      }
    if (K)
      return new b(0);
    return V;
    function oe(ee, ne, se) {
      var ve = ee.type;
      if (ve === "FunctionNode")
        throw new Error("There is an unsolved function call");
      if (ve === "OperatorNode") {
        if ("+-*^".indexOf(ee.op) === -1)
          throw new Error("Operator " + ee.op + " invalid");
        if (ne !== null) {
          if ((ee.fn === "unaryMinus" || ee.fn === "pow") && ne.fn !== "add" && ne.fn !== "subtract" && ne.fn !== "multiply")
            throw new Error("Invalid " + ee.op + " placing");
          if ((ee.fn === "subtract" || ee.fn === "add" || ee.fn === "multiply") && ne.fn !== "add" && ne.fn !== "subtract")
            throw new Error("Invalid " + ee.op + " placing");
          if ((ee.fn === "subtract" || ee.fn === "add" || ee.fn === "unaryMinus") && se.noFil !== 0)
            throw new Error("Invalid " + ee.op + " placing");
        }
        (ee.op === "^" || ee.op === "*") && (se.fire = ee.op);
        for (var we = 0; we < ee.args.length; we++)
          ee.fn === "unaryMinus" && (se.oper = "-"), (ee.op === "+" || ee.fn === "subtract") && (se.fire = "", se.cte = 1, se.oper = we === 0 ? "+" : ee.op), se.noFil = we, oe(ee.args[we], ee, se);
      } else if (ve === "SymbolNode") {
        if (ee.name !== X && X !== "")
          throw new Error("There is more than one variable");
        if (X = ee.name, ne === null) {
          B[1] = 1;
          return;
        }
        if (ne.op === "^" && se.noFil !== 0)
          throw new Error("In power the variable should be the first parameter");
        if (ne.op === "*" && se.noFil !== 1)
          throw new Error("In multiply the variable should be the second parameter");
        (se.fire === "" || se.fire === "*") && (O < 1 && (B[1] = 0), B[1] += se.cte * (se.oper === "+" ? 1 : -1), O = Math.max(1, O));
      } else if (ve === "ConstantNode") {
        var Ae = parseFloat(ee.value);
        if (ne === null) {
          B[0] = Ae;
          return;
        }
        if (ne.op === "^") {
          if (se.noFil !== 1)
            throw new Error("Constant cannot be powered");
          if (!Se(Ae) || Ae <= 0)
            throw new Error("Non-integer exponent is not allowed");
          for (var P = O + 1; P < Ae; P++)
            B[P] = 0;
          Ae > O && (B[Ae] = 0), B[Ae] += se.cte * (se.oper === "+" ? 1 : -1), O = Math.max(Ae, O);
          return;
        }
        se.cte = Ae, se.fire === "" && (B[0] += se.cte * (se.oper === "+" ? 1 : -1));
      } else
        throw new Error("Type " + ve + " is not allowed");
    }
  }
}), Qc = "zpk2tf", RF = ["typed", "add", "multiply", "Complex", "number"], zF = /* @__PURE__ */ q(Qc, RF, (e) => {
  var {
    typed: r,
    add: i,
    multiply: a,
    Complex: t,
    number: n
  } = e;
  return r(Qc, {
    "Array,Array,number": function(u, s, c) {
      return o(u, s, c);
    },
    "Array,Array": function(u, s) {
      return o(u, s, 1);
    },
    "Matrix,Matrix,number": function(u, s, c) {
      return o(u.valueOf(), s.valueOf(), c);
    },
    "Matrix,Matrix": function(u, s) {
      return o(u.valueOf(), s.valueOf(), 1);
    }
  });
  function o(l, u, s) {
    l.some((N) => N.type === "BigNumber") && (l = l.map((N) => n(N))), u.some((N) => N.type === "BigNumber") && (u = u.map((N) => n(N)));
    for (var c = [t(1, 0)], m = [t(1, 0)], v = 0; v < l.length; v++) {
      var d = l[v];
      typeof d == "number" && (d = t(d, 0)), c = f(c, [t(1, 0), t(-d.re, -d.im)]);
    }
    for (var p = 0; p < u.length; p++) {
      var x = u[p];
      typeof x == "number" && (x = t(x, 0)), m = f(m, [t(1, 0), t(-x.re, -x.im)]);
    }
    for (var g = 0; g < c.length; g++)
      c[g] = a(c[g], s);
    return [c, m];
  }
  function f(l, u) {
    for (var s = [], c = 0; c < l.length + u.length - 1; c++) {
      s[c] = t(0, 0);
      for (var m = 0; m < l.length; m++)
        c - m >= 0 && c - m < u.length && (s[c] = i(s[c], a(l[m], u[c - m])));
    }
    return s;
  }
}), Kc = "freqz", PF = ["typed", "add", "multiply", "Complex", "divide", "matrix"], UF = /* @__PURE__ */ q(Kc, PF, (e) => {
  var {
    typed: r,
    add: i,
    multiply: a,
    Complex: t,
    divide: n,
    matrix: o
  } = e;
  return r(Kc, {
    "Array, Array": function(s, c) {
      var m = l(512);
      return f(s, c, m);
    },
    "Array, Array, Array": function(s, c, m) {
      return f(s, c, m);
    },
    "Array, Array, number": function(s, c, m) {
      if (m < 0)
        throw new Error("w must be a positive number");
      var v = l(m);
      return f(s, c, v);
    },
    "Matrix, Matrix": function(s, c) {
      var m = l(512), {
        w: v,
        h: d
      } = f(s.valueOf(), c.valueOf(), m);
      return {
        w: o(v),
        h: o(d)
      };
    },
    "Matrix, Matrix, Matrix": function(s, c, m) {
      var {
        h: v
      } = f(s.valueOf(), c.valueOf(), m.valueOf());
      return {
        h: o(v),
        w: o(m)
      };
    },
    "Matrix, Matrix, number": function(s, c, m) {
      if (m < 0)
        throw new Error("w must be a positive number");
      var v = l(m), {
        h: d
      } = f(s.valueOf(), c.valueOf(), v);
      return {
        h: o(d),
        w: o(v)
      };
    }
  });
  function f(u, s, c) {
    for (var m = [], v = [], d = 0; d < c.length; d++) {
      for (var p = t(0, 0), x = t(0, 0), g = 0; g < u.length; g++)
        p = i(p, a(u[g], t(Math.cos(-g * c[d]), Math.sin(-g * c[d]))));
      for (var N = 0; N < s.length; N++)
        x = i(x, a(s[N], t(Math.cos(-N * c[d]), Math.sin(-N * c[d]))));
      m.push(p), v.push(x);
    }
    for (var h = [], b = 0; b < m.length; b++)
      h.push(n(m[b], v[b]));
    return {
      h,
      w: c
    };
  }
  function l(u) {
    for (var s = [], c = 0; c < u; c++)
      s.push(c / u * Math.PI);
    return s;
  }
}), LF = "reviver", kF = ["classes"], HF = /* @__PURE__ */ q(LF, kF, (e) => {
  var {
    classes: r
  } = e;
  return function(a, t) {
    var n = r[t && t.mathjs];
    return n && typeof n.fromJSON == "function" ? n.fromJSON(t) : t;
  };
}), GF = "replacer", VF = [], ZF = /* @__PURE__ */ q(GF, VF, () => function(r, i) {
  return typeof i == "number" && (!isFinite(i) || isNaN(i)) ? {
    mathjs: "number",
    value: String(i)
  } : i;
}), YF = "12.4.1", XF = /* @__PURE__ */ q("true", [], () => !0), WF = /* @__PURE__ */ q("false", [], () => !1), JF = /* @__PURE__ */ q("null", [], () => null), QF = /* @__PURE__ */ Hr("Infinity", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(1 / 0) : 1 / 0;
}), KF = /* @__PURE__ */ Hr("NaN", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(NaN) : NaN;
}), jF = /* @__PURE__ */ Hr("pi", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? ao(i) : f0;
}), e4 = /* @__PURE__ */ Hr("tau", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? $w(i) : m0;
}), r4 = /* @__PURE__ */ Hr("e", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? Ow(i) : v0;
}), t4 = /* @__PURE__ */ Hr("phi", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? _w(i) : p0;
}), n4 = /* @__PURE__ */ Hr("LN2", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(2).ln() : Math.LN2;
}), a4 = /* @__PURE__ */ Hr("LN10", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(10).ln() : Math.LN10;
}), i4 = /* @__PURE__ */ Hr("LOG2E", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(1).div(new i(2).ln()) : Math.LOG2E;
}), o4 = /* @__PURE__ */ Hr("LOG10E", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(1).div(new i(10).ln()) : Math.LOG10E;
}), s4 = /* @__PURE__ */ Hr(
  // eslint-disable-line camelcase
  "SQRT1_2",
  ["config", "?BigNumber"],
  (e) => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i("0.5").sqrt() : Math.SQRT1_2;
  }
), u4 = /* @__PURE__ */ Hr("SQRT2", ["config", "?BigNumber"], (e) => {
  var {
    config: r,
    BigNumber: i
  } = e;
  return r.number === "BigNumber" ? new i(2).sqrt() : Math.SQRT2;
}), l4 = /* @__PURE__ */ Hr("i", ["Complex"], (e) => {
  var {
    Complex: r
  } = e;
  return r.I;
}), c4 = /* @__PURE__ */ q("version", [], () => YF);
function Hr(e, r, i) {
  return q(e, r, i, {
    recreateOnConfigChange: !0
  });
}
var f4 = /* @__PURE__ */ Ie("speedOfLight", "299792458", "m s^-1"), m4 = /* @__PURE__ */ Ie("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"), v4 = /* @__PURE__ */ Ie("planckConstant", "6.62607015e-34", "J s"), p4 = /* @__PURE__ */ Ie("reducedPlanckConstant", "1.0545718176461565e-34", "J s"), d4 = /* @__PURE__ */ Ie("magneticConstant", "1.25663706212e-6", "N A^-2"), h4 = /* @__PURE__ */ Ie("electricConstant", "8.8541878128e-12", "F m^-1"), g4 = /* @__PURE__ */ Ie("vacuumImpedance", "376.730313667", "ohm"), y4 = /* @__PURE__ */ Ie("coulomb", "8.987551792261171e9", "N m^2 C^-2"), b4 = /* @__PURE__ */ Ie("elementaryCharge", "1.602176634e-19", "C"), x4 = /* @__PURE__ */ Ie("bohrMagneton", "9.2740100783e-24", "J T^-1"), w4 = /* @__PURE__ */ Ie("conductanceQuantum", "7.748091729863649e-5", "S"), N4 = /* @__PURE__ */ Ie("inverseConductanceQuantum", "12906.403729652257", "ohm"), D4 = /* @__PURE__ */ Ie("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"), A4 = /* @__PURE__ */ Ie("nuclearMagneton", "5.0507837461e-27", "J T^-1"), E4 = /* @__PURE__ */ Ie("klitzing", "25812.807459304513", "ohm"), S4 = /* @__PURE__ */ Ie("bohrRadius", "5.29177210903e-11", "m"), C4 = /* @__PURE__ */ Ie("classicalElectronRadius", "2.8179403262e-15", "m"), M4 = /* @__PURE__ */ Ie("electronMass", "9.1093837015e-31", "kg"), F4 = /* @__PURE__ */ Ie("fermiCoupling", "1.1663787e-5", "GeV^-2"), B4 = li("fineStructure", 0.0072973525693), T4 = /* @__PURE__ */ Ie("hartreeEnergy", "4.3597447222071e-18", "J"), O4 = /* @__PURE__ */ Ie("protonMass", "1.67262192369e-27", "kg"), _4 = /* @__PURE__ */ Ie("deuteronMass", "3.3435830926e-27", "kg"), $4 = /* @__PURE__ */ Ie("neutronMass", "1.6749271613e-27", "kg"), I4 = /* @__PURE__ */ Ie("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"), q4 = /* @__PURE__ */ Ie("rydberg", "10973731.568160", "m^-1"), R4 = /* @__PURE__ */ Ie("thomsonCrossSection", "6.6524587321e-29", "m^2"), z4 = li("weakMixingAngle", 0.2229), P4 = li("efimovFactor", 22.7), U4 = /* @__PURE__ */ Ie("atomicMass", "1.66053906660e-27", "kg"), L4 = /* @__PURE__ */ Ie("avogadro", "6.02214076e23", "mol^-1"), k4 = /* @__PURE__ */ Ie("boltzmann", "1.380649e-23", "J K^-1"), H4 = /* @__PURE__ */ Ie("faraday", "96485.33212331001", "C mol^-1"), G4 = /* @__PURE__ */ Ie("firstRadiation", "3.7417718521927573e-16", "W m^2"), V4 = /* @__PURE__ */ Ie("loschmidt", "2.686780111798444e25", "m^-3"), Z4 = /* @__PURE__ */ Ie("gasConstant", "8.31446261815324", "J K^-1 mol^-1"), Y4 = /* @__PURE__ */ Ie("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"), X4 = /* @__PURE__ */ Ie("molarVolume", "0.022413969545014137", "m^3 mol^-1"), W4 = li("sackurTetrode", -1.16487052358), J4 = /* @__PURE__ */ Ie("secondRadiation", "0.014387768775039337", "m K"), Q4 = /* @__PURE__ */ Ie("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"), K4 = /* @__PURE__ */ Ie("wienDisplacement", "2.897771955e-3", "m K"), j4 = /* @__PURE__ */ Ie("molarMass", "0.99999999965e-3", "kg mol^-1"), eB = /* @__PURE__ */ Ie("molarMassC12", "11.9999999958e-3", "kg mol^-1"), rB = /* @__PURE__ */ Ie("gravity", "9.80665", "m s^-2"), tB = /* @__PURE__ */ Ie("planckLength", "1.616255e-35", "m"), nB = /* @__PURE__ */ Ie("planckMass", "2.176435e-8", "kg"), aB = /* @__PURE__ */ Ie("planckTime", "5.391245e-44", "s"), iB = /* @__PURE__ */ Ie("planckCharge", "1.87554603778e-18", "C"), oB = /* @__PURE__ */ Ie("planckTemperature", "1.416785e+32", "K");
function Ie(e, r, i) {
  var a = ["config", "Unit", "BigNumber"];
  return q(e, a, (t) => {
    var {
      config: n,
      Unit: o,
      BigNumber: f
    } = t, l = n.number === "BigNumber" ? new f(r) : parseFloat(r), u = new o(l, i);
    return u.fixPrefix = !0, u;
  });
}
function li(e, r) {
  var i = ["config", "BigNumber"];
  return q(e, i, (a) => {
    var {
      config: t,
      BigNumber: n
    } = a;
    return t.number === "BigNumber" ? new n(r) : r;
  });
}
var sB = "apply", uB = ["typed", "isInteger"], lB = /* @__PURE__ */ q(sB, uB, (e) => {
  var {
    typed: r,
    isInteger: i
  } = e, a = Ki({
    typed: r,
    isInteger: i
  });
  return r("apply", {
    "...any": function(n) {
      var o = n[1];
      Re(o) ? n[1] = o - 1 : ze(o) && (n[1] = o.minus(1));
      try {
        return a.apply(null, n);
      } catch (f) {
        throw qr(f);
      }
    }
  });
}, {
  isTransformFunction: !0
}), cB = "column", fB = ["typed", "Index", "matrix", "range"], mB = /* @__PURE__ */ q(cB, fB, (e) => {
  var {
    typed: r,
    Index: i,
    matrix: a,
    range: t
  } = e, n = Xm({
    typed: r,
    Index: i,
    matrix: a,
    range: t
  });
  return r("column", {
    "...any": function(f) {
      var l = f.length - 1, u = f[l];
      Re(u) && (f[l] = u - 1);
      try {
        return n.apply(null, f);
      } catch (s) {
        throw qr(s);
      }
    }
  });
}, {
  isTransformFunction: !0
});
function vo(e, r, i) {
  var a = e.filter(function(l) {
    return yr(l) && !(l.name in r) && !i.has(l.name);
  })[0];
  if (!a)
    throw new Error('No undefined variable found in inline expression "' + e + '"');
  var t = a.name, n = /* @__PURE__ */ new Map(), o = new Cf(i, n, /* @__PURE__ */ new Set([t])), f = e.compile();
  return function(u) {
    return n.set(t, u), f.evaluate(o);
  };
}
var vB = "filter", pB = ["typed"], dB = /* @__PURE__ */ q(vB, pB, (e) => {
  var {
    typed: r
  } = e;
  function i(t, n, o) {
    var f, l;
    return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || Jn(t[1]) ? l = t[1].compile().evaluate(o) : l = vo(t[1], n, o)), a(f, l);
  }
  i.rawArgs = !0;
  var a = r("filter", {
    "Array, function": jc,
    "Matrix, function": function(n, o) {
      return n.create(jc(n.toArray(), o));
    },
    "Array, RegExp": Fa,
    "Matrix, RegExp": function(n, o) {
      return n.create(Fa(n.toArray(), o));
    }
  });
  return i;
}, {
  isTransformFunction: !0
});
function jc(e, r) {
  return Nf(e, function(i, a, t) {
    return Cn(r, i, [a + 1], t, "filter");
  });
}
var hB = "forEach", gB = ["typed"], yB = /* @__PURE__ */ q(hB, gB, (e) => {
  var {
    typed: r
  } = e;
  function i(t, n, o) {
    var f, l;
    return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || Jn(t[1]) ? l = t[1].compile().evaluate(o) : l = vo(t[1], n, o)), a(f, l);
  }
  i.rawArgs = !0;
  var a = r("forEach", {
    "Array | Matrix, function": function(n, o) {
      var f = function l(u, s) {
        if (Array.isArray(u))
          ja(u, function(c, m) {
            l(c, s.concat(m + 1));
          });
        else
          return Cn(o, u, s, n, "forEach");
      };
      f(n.valueOf(), []);
    }
  });
  return i;
}, {
  isTransformFunction: !0
}), bB = "index", xB = ["Index", "getMatrixDataType"], wB = /* @__PURE__ */ q(bB, xB, (e) => {
  var {
    Index: r,
    getMatrixDataType: i
  } = e;
  return function() {
    for (var t = [], n = 0, o = arguments.length; n < o; n++) {
      var f = arguments[n];
      if (Zi(f))
        f.start--, f.end -= f.step > 0 ? 0 : 2;
      else if (f && f.isSet === !0)
        f = f.map(function(u) {
          return u - 1;
        });
      else if (Ke(f) || Fe(f))
        i(f) !== "boolean" && (f = f.map(function(u) {
          return u - 1;
        }));
      else if (Re(f))
        f--;
      else if (ze(f))
        f = f.toNumber() - 1;
      else if (typeof f != "string")
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      t[n] = f;
    }
    var l = new r();
    return r.apply(l, t), l;
  };
}, {
  isTransformFunction: !0
}), NB = "map", DB = ["typed"], AB = /* @__PURE__ */ q(NB, DB, (e) => {
  var {
    typed: r
  } = e;
  function i(t, n, o) {
    var f, l;
    return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || Jn(t[1]) ? l = t[1].compile().evaluate(o) : l = vo(t[1], n, o)), a(f, l);
  }
  i.rawArgs = !0;
  var a = r("map", {
    "Array, function": function(n, o) {
      return ef(n, o, n);
    },
    "Matrix, function": function(n, o) {
      return n.create(ef(n.valueOf(), o, n));
    }
  });
  return i;
}, {
  isTransformFunction: !0
});
function ef(e, r, i) {
  function a(t, n) {
    return Array.isArray(t) ? xt(t, function(o, f) {
      return a(o, n.concat(f + 1));
    }) : Cn(r, t, n, i, "map");
  }
  return a(e, []);
}
function It(e) {
  if (e.length === 2 && Wr(e[0])) {
    e = e.slice();
    var r = e[1];
    Re(r) ? e[1] = r - 1 : ze(r) && (e[1] = r.minus(1));
  }
  return e;
}
var EB = "max", SB = ["typed", "config", "numeric", "larger"], CB = /* @__PURE__ */ q(EB, SB, (e) => {
  var {
    typed: r,
    config: i,
    numeric: a,
    larger: t
  } = e, n = av({
    typed: r,
    config: i,
    numeric: a,
    larger: t
  });
  return r("max", {
    "...any": function(f) {
      f = It(f);
      try {
        return n.apply(null, f);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), MB = "mean", FB = ["typed", "add", "divide"], BB = /* @__PURE__ */ q(MB, FB, (e) => {
  var {
    typed: r,
    add: i,
    divide: a
  } = e, t = vv({
    typed: r,
    add: i,
    divide: a
  });
  return r("mean", {
    "...any": function(o) {
      o = It(o);
      try {
        return t.apply(null, o);
      } catch (f) {
        throw qr(f);
      }
    }
  });
}, {
  isTransformFunction: !0
}), TB = "min", OB = ["typed", "config", "numeric", "smaller"], _B = /* @__PURE__ */ q(TB, OB, (e) => {
  var {
    typed: r,
    config: i,
    numeric: a,
    smaller: t
  } = e, n = iv({
    typed: r,
    config: i,
    numeric: a,
    smaller: t
  });
  return r("min", {
    "...any": function(f) {
      f = It(f);
      try {
        return n.apply(null, f);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), $B = "range", IB = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], qB = /* @__PURE__ */ q($B, IB, (e) => {
  var {
    typed: r,
    config: i,
    matrix: a,
    bignumber: t,
    smaller: n,
    smallerEq: o,
    larger: f,
    largerEq: l,
    add: u,
    isPositive: s
  } = e, c = Km({
    typed: r,
    config: i,
    matrix: a,
    bignumber: t,
    smaller: n,
    smallerEq: o,
    larger: f,
    largerEq: l,
    add: u,
    isPositive: s
  });
  return r("range", {
    "...any": function(v) {
      var d = v.length - 1, p = v[d];
      return typeof p != "boolean" && v.push(!0), c.apply(null, v);
    }
  });
}, {
  isTransformFunction: !0
}), RB = "row", zB = ["typed", "Index", "matrix", "range"], PB = /* @__PURE__ */ q(RB, zB, (e) => {
  var {
    typed: r,
    Index: i,
    matrix: a,
    range: t
  } = e, n = jm({
    typed: r,
    Index: i,
    matrix: a,
    range: t
  });
  return r("row", {
    "...any": function(f) {
      var l = f.length - 1, u = f[l];
      Re(u) && (f[l] = u - 1);
      try {
        return n.apply(null, f);
      } catch (s) {
        throw qr(s);
      }
    }
  });
}, {
  isTransformFunction: !0
}), UB = "subset", LB = ["typed", "matrix", "zeros", "add"], kB = /* @__PURE__ */ q(UB, LB, (e) => {
  var {
    typed: r,
    matrix: i,
    zeros: a,
    add: t
  } = e, n = ev({
    typed: r,
    matrix: i,
    zeros: a,
    add: t
  });
  return r("subset", {
    "...any": function(f) {
      try {
        return n.apply(null, f);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), HB = "concat", GB = ["typed", "matrix", "isInteger"], VB = /* @__PURE__ */ q(HB, GB, (e) => {
  var {
    typed: r,
    matrix: i,
    isInteger: a
  } = e, t = Ym({
    typed: r,
    matrix: i,
    isInteger: a
  });
  return r("concat", {
    "...any": function(o) {
      var f = o.length - 1, l = o[f];
      Re(l) ? o[f] = l - 1 : ze(l) && (o[f] = l.minus(1));
      try {
        return t.apply(null, o);
      } catch (u) {
        throw qr(u);
      }
    }
  });
}, {
  isTransformFunction: !0
}), rf = "diff", ZB = ["typed", "matrix", "subtract", "number", "bignumber"], YB = /* @__PURE__ */ q(rf, ZB, (e) => {
  var {
    typed: r,
    matrix: i,
    subtract: a,
    number: t,
    bignumber: n
  } = e, o = Wm({
    typed: r,
    matrix: i,
    subtract: a,
    number: t,
    bignumber: n
  });
  return r(rf, {
    "...any": function(l) {
      l = It(l);
      try {
        return o.apply(null, l);
      } catch (u) {
        throw qr(u);
      }
    }
  });
}, {
  isTransformFunction: !0
}), XB = "std", WB = ["typed", "map", "sqrt", "variance"], JB = /* @__PURE__ */ q(XB, WB, (e) => {
  var {
    typed: r,
    map: i,
    sqrt: a,
    variance: t
  } = e, n = hv({
    typed: r,
    map: i,
    sqrt: a,
    variance: t
  });
  return r("std", {
    "...any": function(f) {
      f = It(f);
      try {
        return n.apply(null, f);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), tf = "sum", QB = ["typed", "config", "add", "numeric"], KB = /* @__PURE__ */ q(tf, QB, (e) => {
  var {
    typed: r,
    config: i,
    add: a,
    numeric: t
  } = e, n = fv({
    typed: r,
    config: i,
    add: a,
    numeric: t
  });
  return r(tf, {
    "...any": function(f) {
      f = It(f);
      try {
        return n.apply(null, f);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), jB = "quantileSeq", eT = ["typed", "bignumber", "add", "subtract", "divide", "multiply", "partitionSelect", "compare", "isInteger", "smaller", "smallerEq", "larger"], rT = /* @__PURE__ */ q(jB, eT, (e) => {
  var {
    typed: r,
    bignumber: i,
    add: a,
    subtract: t,
    divide: n,
    multiply: o,
    partitionSelect: f,
    compare: l,
    isInteger: u,
    smaller: s,
    smallerEq: c,
    larger: m
  } = e, v = dv({
    typed: r,
    bignumber: i,
    add: a,
    subtract: t,
    divide: n,
    multiply: o,
    partitionSelect: f,
    compare: l,
    isInteger: u,
    smaller: s,
    smallerEq: c,
    larger: m
  });
  return r("quantileSeq", {
    "Array | Matrix, number | BigNumber": v,
    "Array | Matrix, number | BigNumber, number": (p, x, g) => v(p, x, d(g)),
    "Array | Matrix, number | BigNumber, boolean": v,
    "Array | Matrix, number | BigNumber, boolean, number": (p, x, g, N) => v(p, x, g, d(N)),
    "Array | Matrix, Array | Matrix": v,
    "Array | Matrix, Array | Matrix, number": (p, x, g) => v(p, x, d(g)),
    "Array | Matrix, Array | Matrix, boolean": v,
    "Array | Matrix, Array | Matrix, boolean, number": (p, x, g, N) => v(p, x, g, d(N))
  });
  function d(p) {
    return It([[], p])[1];
  }
}, {
  isTransformFunction: !0
}), nf = "cumsum", tT = ["typed", "add", "unaryPlus"], nT = /* @__PURE__ */ q(nf, tT, (e) => {
  var {
    typed: r,
    add: i,
    unaryPlus: a
  } = e, t = mv({
    typed: r,
    add: i,
    unaryPlus: a
  });
  return r(nf, {
    "...any": function(o) {
      if (o.length === 2 && Wr(o[0])) {
        var f = o[1];
        Re(f) ? o[1] = f - 1 : ze(f) && (o[1] = f.minus(1));
      }
      try {
        return t.apply(null, o);
      } catch (l) {
        throw qr(l);
      }
    }
  });
}, {
  isTransformFunction: !0
}), af = "variance", aT = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], iT = /* @__PURE__ */ q(af, aT, (e) => {
  var {
    typed: r,
    add: i,
    subtract: a,
    multiply: t,
    divide: n,
    apply: o,
    isNaN: f
  } = e, l = pv({
    typed: r,
    add: i,
    subtract: a,
    multiply: t,
    divide: n,
    apply: o,
    isNaN: f
  });
  return r(af, {
    "...any": function(s) {
      s = It(s);
      try {
        return l.apply(null, s);
      } catch (c) {
        throw qr(c);
      }
    }
  });
}, {
  isTransformFunction: !0
}), of = "print", oT = ["typed", "matrix", "zeros", "add"], sT = /* @__PURE__ */ q(of, oT, (e) => {
  var {
    typed: r,
    matrix: i,
    zeros: a,
    add: t
  } = e, n = tv({
    typed: r,
    matrix: i,
    zeros: a,
    add: t
  });
  return r(of, {
    "string, Object | Array": function(l, u) {
      return n(o(l), u);
    },
    "string, Object | Array, number | Object": function(l, u, s) {
      return n(o(l), u, s);
    }
  });
  function o(f) {
    return f.replace(rv, (l) => {
      var u = l.slice(1).split("."), s = u.map(function(c) {
        return !isNaN(c) && c.length > 0 ? parseInt(c) - 1 : c;
      });
      return "$" + s.join(".");
    });
  }
}, {
  isTransformFunction: !0
}), uT = "and", lT = ["typed", "matrix", "zeros", "add", "equalScalar", "not", "concat"], cT = /* @__PURE__ */ q(uT, lT, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    not: n,
    concat: o
  } = e, f = nv({
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    not: n,
    concat: o
  });
  function l(u, s, c) {
    var m = u[0].compile().evaluate(c);
    if (!Wr(m) && !f(m, !0))
      return !1;
    var v = u[1].compile().evaluate(c);
    return f(m, v);
  }
  return l.rawArgs = !0, l;
}, {
  isTransformFunction: !0
}), fT = "or", mT = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], vT = /* @__PURE__ */ q(fT, mT, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Zm({
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  });
  function f(l, u, s) {
    var c = l[0].compile().evaluate(s);
    if (!Wr(c) && o(c, !1))
      return !0;
    var m = l[1].compile().evaluate(s);
    return o(c, m);
  }
  return f.rawArgs = !0, f;
}, {
  isTransformFunction: !0
}), pT = "bitAnd", dT = ["typed", "matrix", "zeros", "add", "equalScalar", "not", "concat"], hT = /* @__PURE__ */ q(pT, dT, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    not: n,
    concat: o
  } = e, f = Gm({
    typed: r,
    matrix: i,
    equalScalar: a,
    zeros: t,
    not: n,
    concat: o
  });
  function l(u, s, c) {
    var m = u[0].compile().evaluate(c);
    if (!Wr(m)) {
      if (isNaN(m))
        return NaN;
      if (m === 0 || m === !1)
        return 0;
    }
    var v = u[1].compile().evaluate(c);
    return f(m, v);
  }
  return l.rawArgs = !0, l;
}, {
  isTransformFunction: !0
}), gT = "bitOr", yT = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], bT = /* @__PURE__ */ q(gT, yT, (e) => {
  var {
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  } = e, o = Vm({
    typed: r,
    matrix: i,
    equalScalar: a,
    DenseMatrix: t,
    concat: n
  });
  function f(l, u, s) {
    var c = l[0].compile().evaluate(s);
    if (!Wr(c)) {
      if (isNaN(c))
        return NaN;
      if (c === -1)
        return -1;
      if (c === !0)
        return 1;
    }
    var m = l[1].compile().evaluate(s);
    return o(c, m);
  }
  return f.rawArgs = !0, f;
}, {
  isTransformFunction: !0
}), Ne = /* @__PURE__ */ Uh({
  config: pe
}), ir = /* @__PURE__ */ Gh({}), sf = /* @__PURE__ */ r4({
  BigNumber: Ne,
  config: pe
}), xT = /* @__PURE__ */ WF({}), wT = /* @__PURE__ */ B4({
  BigNumber: Ne,
  config: pe
}), Wt = /* @__PURE__ */ Xh({}), bv = /* @__PURE__ */ l4({
  Complex: ir
}), NT = /* @__PURE__ */ QF({
  BigNumber: Ne,
  config: pe
}), DT = /* @__PURE__ */ a4({
  BigNumber: Ne,
  config: pe
}), AT = /* @__PURE__ */ o4({
  BigNumber: Ne,
  config: pe
}), ci = /* @__PURE__ */ e0({}), ET = /* @__PURE__ */ KF({
  BigNumber: Ne,
  config: pe
}), ST = /* @__PURE__ */ JF({}), CT = /* @__PURE__ */ t4({
  BigNumber: Ne,
  config: pe
}), MT = /* @__PURE__ */ Qh({}), xv = /* @__PURE__ */ Gd({}), FT = /* @__PURE__ */ s4({
  BigNumber: Ne,
  config: pe
}), BT = /* @__PURE__ */ W4({
  BigNumber: Ne,
  config: pe
}), wv = /* @__PURE__ */ e4({
  BigNumber: Ne,
  config: pe
}), TT = /* @__PURE__ */ XF({}), OT = /* @__PURE__ */ c4({}), Pe = /* @__PURE__ */ a0({
  Matrix: ci
}), _T = /* @__PURE__ */ P4({
  BigNumber: Ne,
  config: pe
}), $T = /* @__PURE__ */ n4({
  BigNumber: Ne,
  config: pe
}), Vi = /* @__PURE__ */ jF({
  BigNumber: Ne,
  config: pe
}), IT = /* @__PURE__ */ ZF({}), qT = /* @__PURE__ */ u4({
  BigNumber: Ne,
  config: pe
}), G = /* @__PURE__ */ Ud({
  BigNumber: Ne,
  Complex: ir,
  DenseMatrix: Pe,
  Fraction: Wt
}), po = /* @__PURE__ */ dg({
  BigNumber: Ne,
  config: pe,
  typed: G
}), RT = /* @__PURE__ */ z4({
  BigNumber: Ne,
  config: pe
}), Rr = /* @__PURE__ */ gg({
  typed: G
}), zT = /* @__PURE__ */ Vw({
  Complex: ir,
  config: pe,
  typed: G
}), PT = /* @__PURE__ */ Ww({
  BigNumber: Ne,
  typed: G
}), UT = /* @__PURE__ */ jw({
  BigNumber: Ne,
  Complex: ir,
  config: pe,
  typed: G
}), gr = /* @__PURE__ */ wg({
  typed: G
}), LT = /* @__PURE__ */ uy({
  typed: G
}), kT = /* @__PURE__ */ iN({
  BigNumber: Ne,
  Complex: ir,
  config: pe,
  typed: G
}), HT = /* @__PURE__ */ cN({
  typed: G
}), Nv = /* @__PURE__ */ vN({
  typed: G
}), GT = /* @__PURE__ */ gN({
  Complex: ir,
  config: pe,
  typed: G
}), kr = /* @__PURE__ */ W0({
  BigNumber: Ne,
  typed: G
}), VT = /* @__PURE__ */ ry({
  typed: G
}), ZT = /* @__PURE__ */ Z0({
  typed: G
}), YT = /* @__PURE__ */ o0({
  typed: G
}), fi = /* @__PURE__ */ D3({
  typed: G
}), mi = /* @__PURE__ */ K0({
  Complex: ir,
  typed: G
}), Jt = /* @__PURE__ */ cy({
  typed: G
}), ho = /* @__PURE__ */ bN({
  typed: G
}), XT = /* @__PURE__ */ DN({
  BigNumber: Ne,
  typed: G
}), WT = /* @__PURE__ */ CN({
  BigNumber: Ne,
  typed: G
}), JT = /* @__PURE__ */ qg({
  typed: G
}), Ge = /* @__PURE__ */ $0({
  config: pe,
  typed: G
}), QT = /* @__PURE__ */ Ob({
  typed: G
}), Dv = /* @__PURE__ */ zg({
  typed: G
}), KT = /* @__PURE__ */ Ug({
  Complex: ir,
  typed: G
}), jT = /* @__PURE__ */ By({
  typed: G
}), eO = /* @__PURE__ */ $y({
  typed: G
}), ea = /* @__PURE__ */ Hb({
  typed: G
}), go = /* @__PURE__ */ Ry({
  typed: G
}), rO = /* @__PURE__ */ Wb({
  format: ea,
  typed: G
}), yo = /* @__PURE__ */ my({
  typed: G
}), Pr = /* @__PURE__ */ u0({
  typed: G
}), qt = /* @__PURE__ */ b0({
  typed: G
}), Qt = /* @__PURE__ */ E0({
  typed: G
}), ut = /* @__PURE__ */ C0({
  typed: G
}), tO = /* @__PURE__ */ i4({
  BigNumber: Ne,
  config: pe
}), nO = /* @__PURE__ */ F3({
  Complex: ir,
  typed: G
}), aO = /* @__PURE__ */ w1({
  Complex: ir,
  config: pe,
  typed: G
}), Av = /* @__PURE__ */ D1({
  Complex: ir,
  config: pe,
  typed: G
}), Kt = /* @__PURE__ */ Hy({
  typed: G
}), fr = /* @__PURE__ */ S1({
  typed: G
}), Xa = /* @__PURE__ */ hy({
  typed: G
}), Dt = /* @__PURE__ */ k0({
  typed: G
}), iO = /* @__PURE__ */ Yb({
  format: ea,
  typed: G
}), oO = /* @__PURE__ */ nF({
  config: pe,
  typed: G
}), sO = /* @__PURE__ */ tv({
  typed: G
}), uO = /* @__PURE__ */ iF({
  config: pe,
  typed: G
}), bo = /* @__PURE__ */ py({
  typed: G
}), lO = /* @__PURE__ */ TN({
  BigNumber: Ne,
  typed: G
}), Ev = /* @__PURE__ */ O1({
  BigNumber: Ne,
  Fraction: Wt,
  complex: mi,
  typed: G
}), vi = /* @__PURE__ */ IN({
  typed: G
}), At = /* @__PURE__ */ R0({
  Matrix: ci,
  equalScalar: Ge,
  typed: G
}), cO = /* @__PURE__ */ fg({
  typed: G
}), fO = /* @__PURE__ */ R1({
  typed: G
}), mO = /* @__PURE__ */ G0({
  typed: G
}), Qr = /* @__PURE__ */ Dg({
  typed: G
}), vO = /* @__PURE__ */ PN({
  typed: G
}), Sv = /* @__PURE__ */ T0({
  typed: G
}), pO = /* @__PURE__ */ Yw({
  Complex: ir,
  config: pe,
  typed: G
}), dO = /* @__PURE__ */ rN({
  BigNumber: Ne,
  typed: G
}), xo = /* @__PURE__ */ Ki({
  isInteger: Pr,
  typed: G
}), hO = /* @__PURE__ */ nN({
  BigNumber: Ne,
  Complex: ir,
  config: pe,
  typed: G
}), gO = /* @__PURE__ */ Vb({
  format: ea,
  typed: G
}), yO = /* @__PURE__ */ E3({
  typed: G
}), bO = /* @__PURE__ */ wN({
  typed: G
}), xO = /* @__PURE__ */ FN({
  BigNumber: Ne,
  typed: G
}), ra = /* @__PURE__ */ F0({
  typed: G
}), wO = /* @__PURE__ */ ex({
  typed: G
}), NO = /* @__PURE__ */ sF({
  config: pe,
  typed: G
}), DO = /* @__PURE__ */ _N({
  BigNumber: Ne,
  typed: G
}), AO = /* @__PURE__ */ RN({
  typed: G
}), EO = /* @__PURE__ */ Lw({
  SparseMatrix: At,
  typed: G
}), lt = /* @__PURE__ */ I1({
  Complex: ir,
  config: pe,
  typed: G
}), SO = /* @__PURE__ */ kN({
  typed: G
}), mt = /* @__PURE__ */ vg({
  typed: G
}), CO = /* @__PURE__ */ Qw({
  BigNumber: Ne,
  Complex: ir,
  config: pe,
  typed: G
}), MO = /* @__PURE__ */ EN({
  BigNumber: Ne,
  typed: G
}), Fn = /* @__PURE__ */ rg({
  Fraction: Wt,
  typed: G
}), jt = /* @__PURE__ */ w0({
  typed: G
}), xe = /* @__PURE__ */ ng({
  DenseMatrix: Pe,
  Matrix: ci,
  SparseMatrix: At,
  typed: G
}), FO = /* @__PURE__ */ ig({
  isZero: ut,
  matrix: xe,
  typed: G
}), BO = /* @__PURE__ */ Pb({
  isNaN: ra,
  isNumeric: jt,
  typed: G
}), nt = /* @__PURE__ */ nx({
  bignumber: kr,
  fraction: Fn,
  number: Dt
}), Cv = /* @__PURE__ */ Lb({
  config: pe,
  multiplyScalar: fr,
  numeric: nt,
  typed: G
}), Mv = /* @__PURE__ */ Qy({
  isInteger: Pr,
  matrix: xe,
  typed: G
}), Ar = /* @__PURE__ */ sb({
  matrix: xe,
  config: pe,
  typed: G
}), TO = /* @__PURE__ */ lb({
  matrix: xe,
  typed: G
}), ta = /* @__PURE__ */ db({
  matrix: xe,
  typed: G
}), Fv = /* @__PURE__ */ L1({
  BigNumber: Ne,
  config: pe,
  matrix: xe,
  typed: G
}), Nr = /* @__PURE__ */ bb({
  BigNumber: Ne,
  config: pe,
  matrix: xe,
  typed: G
}), OO = /* @__PURE__ */ sN({
  Complex: ir,
  config: pe,
  typed: G
}), Bv = /* @__PURE__ */ Eg({
  BigNumber: Ne,
  Complex: ir,
  Fraction: Wt,
  config: pe,
  isNegative: qt,
  matrix: xe,
  typed: G,
  unaryMinus: mt
}), We = /* @__PURE__ */ Ym({
  isInteger: Pr,
  matrix: xe,
  typed: G
}), _O = /* @__PURE__ */ Dy({
  prod: Cv,
  size: Ar,
  typed: G
}), wo = /* @__PURE__ */ gb({
  conj: Jt,
  transpose: ta,
  typed: G
}), Tv = /* @__PURE__ */ Cy({
  DenseMatrix: Pe,
  SparseMatrix: At,
  matrix: xe,
  typed: G
}), ur = /* @__PURE__ */ ix({
  numeric: nt,
  typed: G
}), na = /* @__PURE__ */ bx({
  DenseMatrix: Pe,
  concat: We,
  divideScalar: ur,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), Kr = /* @__PURE__ */ Yx({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), aa = /* @__PURE__ */ Oy({
  matrix: xe,
  typed: G
}), $O = /* @__PURE__ */ D0({
  isNumeric: jt,
  typed: G
}), Rt = /* @__PURE__ */ Py({
  BigNumber: Ne,
  DenseMatrix: Pe,
  SparseMatrix: At,
  config: pe,
  matrix: xe,
  typed: G
}), IO = /* @__PURE__ */ Ly({
  matrix: xe,
  multiplyScalar: fr,
  typed: G
}), pi = /* @__PURE__ */ sw({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  matrix: xe,
  typed: G
}), qO = /* @__PURE__ */ Tx({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G,
  zeros: Nr
}), Ov = /* @__PURE__ */ wx({
  DenseMatrix: Pe,
  divideScalar: ur,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  subtractScalar: Qr,
  typed: G
}), No = /* @__PURE__ */ lg({
  flatten: aa,
  matrix: xe,
  size: Ar,
  typed: G
}), RO = /* @__PURE__ */ B1({
  BigNumber: Ne,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), zO = /* @__PURE__ */ Xy({
  BigNumber: Ne,
  config: pe,
  matrix: xe,
  typed: G
}), Do = /* @__PURE__ */ AD({
  addScalar: gr,
  complex: mi,
  conj: Jt,
  divideScalar: ur,
  equal: Kr,
  identity: Rt,
  isZero: ut,
  matrix: xe,
  multiplyScalar: fr,
  sign: Ev,
  sqrt: lt,
  subtractScalar: Qr,
  typed: G,
  unaryMinus: mt,
  zeros: Nr
}), PO = /* @__PURE__ */ eb({
  config: pe,
  matrix: xe
}), UO = /* @__PURE__ */ _x({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G,
  zeros: Nr
}), Bn = /* @__PURE__ */ lx({
  BigNumber: Ne,
  DenseMatrix: Pe,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  typed: G,
  zeros: Nr
}), Tr = /* @__PURE__ */ Kx({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  matrix: xe,
  typed: G
}), cr = /* @__PURE__ */ P1({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  subtractScalar: Qr,
  typed: G,
  unaryMinus: mt
}), LO = /* @__PURE__ */ Kb({
  concat: We,
  matrix: xe,
  typed: G
}), kO = /* @__PURE__ */ mw({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), Ao = /* @__PURE__ */ Dx({
  DenseMatrix: Pe,
  divideScalar: ur,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  subtractScalar: Qr,
  typed: G
}), HO = /* @__PURE__ */ by({
  DenseMatrix: Pe,
  concat: We,
  matrix: xe,
  typed: G
}), Ze = /* @__PURE__ */ c2({
  DenseMatrix: Pe,
  SparseMatrix: At,
  addScalar: gr,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), GO = /* @__PURE__ */ dN({
  BigNumber: Ne,
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), VO = /* @__PURE__ */ Gm({
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), ZO = /* @__PURE__ */ Vm({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), YO = /* @__PURE__ */ oy({
  DenseMatrix: Pe,
  concat: We,
  matrix: xe,
  typed: G
}), XO = /* @__PURE__ */ vF({
  addScalar: gr,
  combinations: fi,
  divideScalar: ur,
  isInteger: Pr,
  isNegative: qt,
  multiplyScalar: fr,
  typed: G
}), en = /* @__PURE__ */ zx({
  BigNumber: Ne,
  DenseMatrix: Pe,
  Fraction: Wt,
  concat: We,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), _v = /* @__PURE__ */ Vx({
  concat: We,
  matrix: xe,
  typed: G
}), WO = /* @__PURE__ */ mv({
  add: Ze,
  typed: G,
  unaryPlus: po
}), Eo = /* @__PURE__ */ cw({
  equal: Kr,
  typed: G
}), JO = /* @__PURE__ */ Wm({
  matrix: xe,
  number: Dt,
  subtract: cr,
  typed: G
}), QO = /* @__PURE__ */ o3({
  abs: Rr,
  addScalar: gr,
  deepEqual: Eo,
  divideScalar: ur,
  multiplyScalar: fr,
  sqrt: lt,
  subtractScalar: Qr,
  typed: G
}), di = /* @__PURE__ */ h2({
  addScalar: gr,
  conj: Jt,
  multiplyScalar: fr,
  size: Ar,
  typed: G
}), KO = /* @__PURE__ */ Jx({
  compareText: _v,
  isZero: ut,
  typed: G
}), $v = /* @__PURE__ */ Lm({
  DenseMatrix: Pe,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  round: Bn,
  typed: G,
  zeros: Nr
}), jO = /* @__PURE__ */ d1({
  BigNumber: Ne,
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  round: Bn,
  typed: G,
  zeros: Nr
}), e5 = /* @__PURE__ */ m2({
  abs: Rr,
  addScalar: gr,
  divideScalar: ur,
  isPositive: Qt,
  multiplyScalar: fr,
  smaller: Tr,
  sqrt: lt,
  typed: G
}), Iv = /* @__PURE__ */ Nw({
  DenseMatrix: Pe,
  smaller: Tr
}), Sr = /* @__PURE__ */ Ew({
  ImmutableDenseMatrix: Iv,
  getMatrixDataType: go
}), Or = /* @__PURE__ */ aw({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  matrix: xe,
  typed: G
}), So = /* @__PURE__ */ fx({
  Complex: ir,
  config: pe,
  divideScalar: ur,
  typed: G
}), r5 = /* @__PURE__ */ Ex({
  DenseMatrix: Pe,
  divideScalar: ur,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  subtractScalar: Qr,
  typed: G
}), t5 = /* @__PURE__ */ sg({
  flatten: aa,
  matrix: xe,
  size: Ar,
  typed: G
}), n5 = /* @__PURE__ */ iv({
  config: pe,
  numeric: nt,
  smaller: Tr,
  typed: G
}), qv = /* @__PURE__ */ km({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  round: Bn,
  typed: G,
  zeros: Nr
}), je = /* @__PURE__ */ M1({
  addScalar: gr,
  dot: di,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  typed: G
}), a5 = /* @__PURE__ */ dx({
  Complex: ir,
  config: pe,
  divideScalar: ur,
  typed: G
}), i5 = /* @__PURE__ */ Zm({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), hi = /* @__PURE__ */ dw({
  compare: en,
  isNaN: ra,
  isNumeric: jt,
  typed: G
}), o5 = /* @__PURE__ */ Ix({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G,
  zeros: Nr
}), Rv = /* @__PURE__ */ XD({
  SparseMatrix: At,
  abs: Rr,
  add: Ze,
  divideScalar: ur,
  larger: Or,
  largerEq: pi,
  multiply: je,
  subtract: cr,
  transpose: ta,
  typed: G
}), Gr = /* @__PURE__ */ ev({
  add: Ze,
  matrix: xe,
  typed: G,
  zeros: Nr
}), Co = /* @__PURE__ */ fv({
  add: Ze,
  config: pe,
  numeric: nt,
  typed: G
}), s5 = /* @__PURE__ */ b2({
  add: Ze,
  matrix: xe,
  typed: G
}), zv = /* @__PURE__ */ Cx({
  DenseMatrix: Pe,
  divideScalar: ur,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  subtractScalar: Qr,
  typed: G
}), u5 = /* @__PURE__ */ zF({
  Complex: ir,
  add: Ze,
  multiply: je,
  number: Dt,
  typed: G
}), Mo = /* @__PURE__ */ $g({
  DenseMatrix: Pe,
  config: pe,
  equalScalar: Ge,
  matrix: xe,
  round: Bn,
  typed: G,
  zeros: Nr
}), vt = /* @__PURE__ */ kx({
  compare: en,
  typed: G
}), l5 = /* @__PURE__ */ dF({
  addScalar: gr,
  combinations: fi,
  isInteger: Pr,
  isNegative: qt,
  isPositive: Qt,
  larger: Or,
  typed: G
}), c5 = /* @__PURE__ */ Ey({
  matrix: xe,
  multiply: je,
  subtract: cr,
  typed: G
}), Pv = /* @__PURE__ */ qM({
  divideScalar: ur,
  isZero: ut,
  matrix: xe,
  multiply: je,
  subtractScalar: Qr,
  typed: G,
  unaryMinus: mt
}), f5 = /* @__PURE__ */ Y1({
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  multiplyScalar: fr,
  typed: G
}), Uv = /* @__PURE__ */ Mw({
  larger: Or,
  smaller: Tr
}), Lv = /* @__PURE__ */ Hg({
  Complex: ir,
  DenseMatrix: Pe,
  ceil: Mo,
  equalScalar: Ge,
  floor: $v,
  matrix: xe,
  typed: G,
  zeros: Nr
}), kv = /* @__PURE__ */ w2({
  Index: Sr,
  typed: G
}), m5 = /* @__PURE__ */ l3({
  abs: Rr,
  add: Ze,
  addScalar: gr,
  config: pe,
  divideScalar: ur,
  equalScalar: Ge,
  flatten: aa,
  isNumeric: jt,
  isZero: ut,
  matrix: xe,
  multiply: je,
  multiplyScalar: fr,
  smaller: Tr,
  subtract: cr,
  typed: G
}), v5 = /* @__PURE__ */ H1({
  BigNumber: Ne,
  add: Ze,
  config: pe,
  equal: Kr,
  isInteger: Pr,
  mod: qv,
  smaller: Tr,
  typed: G,
  xgcd: Fv
}), p5 = /* @__PURE__ */ b1({
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  typed: G
}), d5 = /* @__PURE__ */ vx({
  Complex: ir,
  config: pe,
  divideScalar: ur,
  log: So,
  typed: G
}), Fo = /* @__PURE__ */ av({
  config: pe,
  larger: Or,
  numeric: nt,
  typed: G
}), h5 = /* @__PURE__ */ GN({
  DenseMatrix: Pe,
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), g5 = /* @__PURE__ */ XN({
  DenseMatrix: Pe,
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), y5 = /* @__PURE__ */ KN({
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), b5 = /* @__PURE__ */ t2({
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), xn = /* @__PURE__ */ rw({
  DenseMatrix: Pe,
  concat: We,
  config: pe,
  matrix: xe,
  typed: G
}), x5 = /* @__PURE__ */ gw({
  compare: en,
  compareNatural: vt,
  matrix: xe,
  typed: G
}), w5 = /* @__PURE__ */ nv({
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  not: Xa,
  typed: G,
  zeros: Nr
}), wn = /* @__PURE__ */ Km({
  bignumber: kr,
  matrix: xe,
  add: Ze,
  config: pe,
  isPositive: Qt,
  larger: Or,
  largerEq: pi,
  smaller: Tr,
  smallerEq: xn,
  typed: G
}), N5 = /* @__PURE__ */ jm({
  Index: Sr,
  matrix: xe,
  range: wn,
  typed: G
}), Hv = /* @__PURE__ */ ZN({
  DenseMatrix: Pe,
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), D5 = /* @__PURE__ */ e2({
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), Gv = /* @__PURE__ */ o2({
  Index: Sr,
  concat: We,
  setDifference: Hv,
  size: Ar,
  subset: Gr,
  typed: G
}), Vv = /* @__PURE__ */ Tw({
  FibonacciHeap: Uv,
  addScalar: gr,
  equalScalar: Ge
}), Zv = /* @__PURE__ */ Xm({
  Index: Sr,
  matrix: xe,
  range: wn,
  typed: G
}), rn = /* @__PURE__ */ zM({
  abs: Rr,
  addScalar: gr,
  det: Pv,
  divideScalar: ur,
  identity: Rt,
  matrix: xe,
  multiply: je,
  typed: G,
  unaryMinus: mt
}), Yv = /* @__PURE__ */ ND({
  DenseMatrix: Pe,
  Spa: Vv,
  SparseMatrix: At,
  abs: Rr,
  addScalar: gr,
  divideScalar: ur,
  equalScalar: Ge,
  larger: Or,
  matrix: xe,
  multiplyScalar: fr,
  subtractScalar: Qr,
  typed: G,
  unaryMinus: mt
}), A5 = /* @__PURE__ */ UM({
  Complex: ir,
  add: Ze,
  ctranspose: wo,
  deepEqual: Eo,
  divideScalar: ur,
  dot: di,
  dotDivide: na,
  equal: Kr,
  inv: rn,
  matrix: xe,
  multiply: je,
  typed: G
}), jr = /* @__PURE__ */ sx({
  Complex: ir,
  config: pe,
  fraction: Fn,
  identity: Rt,
  inv: rn,
  matrix: xe,
  multiply: je,
  number: Dt,
  typed: G
}), Xv = /* @__PURE__ */ JN({
  DenseMatrix: Pe,
  Index: Sr,
  compareNatural: vt,
  size: Ar,
  subset: Gr,
  typed: G
}), E5 = /* @__PURE__ */ u2({
  Index: Sr,
  concat: We,
  setIntersect: Xv,
  setSymDifference: Gv,
  size: Ar,
  subset: Gr,
  typed: G
}), S5 = /* @__PURE__ */ WM({
  abs: Rr,
  add: Ze,
  identity: Rt,
  inv: rn,
  map: Kt,
  max: Fo,
  multiply: je,
  size: Ar,
  sqrt: lt,
  subtract: cr,
  typed: G
}), Oe = /* @__PURE__ */ Rw({
  BigNumber: Ne,
  Complex: ir,
  Fraction: Wt,
  abs: Rr,
  addScalar: gr,
  config: pe,
  divideScalar: ur,
  equal: Kr,
  fix: Lv,
  format: ea,
  isNumeric: jt,
  multiplyScalar: fr,
  number: Dt,
  pow: jr,
  round: Bn,
  subtractScalar: Qr
}), C5 = /* @__PURE__ */ g4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), M5 = /* @__PURE__ */ K4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), F5 = /* @__PURE__ */ U4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), B5 = /* @__PURE__ */ x4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), T5 = /* @__PURE__ */ k4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), O5 = /* @__PURE__ */ w4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), _5 = /* @__PURE__ */ y4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), $5 = /* @__PURE__ */ _4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), I5 = /* @__PURE__ */ gx({
  DenseMatrix: Pe,
  concat: We,
  equalScalar: Ge,
  matrix: xe,
  pow: jr,
  typed: G
}), q5 = /* @__PURE__ */ h4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), R5 = /* @__PURE__ */ b4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), z5 = /* @__PURE__ */ YM({
  abs: Rr,
  add: Ze,
  identity: Rt,
  inv: rn,
  multiply: je,
  typed: G
}), P5 = /* @__PURE__ */ H4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), Wv = /* @__PURE__ */ wb({
  addScalar: gr,
  ceil: Mo,
  conj: Jt,
  divideScalar: ur,
  dotDivide: na,
  exp: Dv,
  i: bv,
  log2: Av,
  matrix: xe,
  multiplyScalar: fr,
  pow: jr,
  tau: wv,
  typed: G
}), Bo = /* @__PURE__ */ C3({
  BigNumber: Ne,
  Complex: ir,
  config: pe,
  multiplyScalar: fr,
  pow: jr,
  typed: G
}), U5 = /* @__PURE__ */ m4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), L5 = /* @__PURE__ */ T4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), k5 = /* @__PURE__ */ Db({
  conj: Jt,
  dotDivide: na,
  fft: Wv,
  typed: G
}), H5 = /* @__PURE__ */ E4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), G5 = /* @__PURE__ */ V4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), V5 = /* @__PURE__ */ d4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), Z5 = /* @__PURE__ */ j4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), Y5 = /* @__PURE__ */ Y4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), X5 = /* @__PURE__ */ $4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), W5 = /* @__PURE__ */ A4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), J5 = /* @__PURE__ */ iB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), Q5 = /* @__PURE__ */ tB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), K5 = /* @__PURE__ */ oB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), j5 = /* @__PURE__ */ O4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), e8 = /* @__PURE__ */ I4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), r8 = /* @__PURE__ */ p4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), t8 = /* @__PURE__ */ q4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), n8 = /* @__PURE__ */ J4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), a8 = /* @__PURE__ */ f4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), i8 = /* @__PURE__ */ Q4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), o8 = /* @__PURE__ */ R4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), s8 = /* @__PURE__ */ L4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), u8 = /* @__PURE__ */ S4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), l8 = /* @__PURE__ */ Hw({
  Unit: Oe,
  typed: G
}), br = /* @__PURE__ */ a3({
  divideScalar: ur,
  equalScalar: Ge,
  inv: rn,
  matrix: xe,
  multiply: je,
  typed: G
}), c8 = /* @__PURE__ */ M4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), ia = /* @__PURE__ */ T3({
  gamma: Bo,
  typed: G
}), f8 = /* @__PURE__ */ G4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), m8 = /* @__PURE__ */ rB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), v8 = /* @__PURE__ */ N4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), Jv = /* @__PURE__ */ JD({
  DenseMatrix: Pe,
  lsolve: Ov,
  lup: Yv,
  matrix: xe,
  slu: Rv,
  typed: G,
  usolve: Ao
}), p8 = /* @__PURE__ */ D4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), d8 = /* @__PURE__ */ eB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), h8 = /* @__PURE__ */ I3({
  add: Ze,
  divide: br,
  factorial: ia,
  isInteger: Pr,
  isPositive: Qt,
  multiply: je,
  typed: G
}), g8 = /* @__PURE__ */ R3({
  factorial: ia,
  typed: G
}), y8 = /* @__PURE__ */ nB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), b8 = /* @__PURE__ */ KD({
  add: Ze,
  cbrt: Bv,
  divide: br,
  equalScalar: Ge,
  im: yo,
  isZero: ut,
  multiply: je,
  re: bo,
  sqrt: lt,
  subtract: cr,
  typeOf: Sv,
  typed: G,
  unaryMinus: mt
}), x8 = /* @__PURE__ */ a2({
  compareNatural: vt,
  typed: G
}), w8 = /* @__PURE__ */ Fb({
  abs: Rr,
  add: Ze,
  bignumber: kr,
  divide: br,
  isNegative: qt,
  isPositive: Qt,
  larger: Or,
  map: Kt,
  matrix: xe,
  max: Fo,
  multiply: je,
  smaller: Tr,
  subtract: cr,
  typed: G,
  unaryMinus: mt
}), Qv = /* @__PURE__ */ lF({
  bignumber: kr,
  addScalar: gr,
  combinations: fi,
  divideScalar: ur,
  factorial: ia,
  isInteger: Pr,
  isNegative: qt,
  larger: Or,
  multiplyScalar: fr,
  number: Dt,
  pow: jr,
  subtractScalar: Qr,
  typed: G
}), N8 = /* @__PURE__ */ Pw({
  Unit: Oe,
  typed: G
}), D8 = /* @__PURE__ */ fF({
  addScalar: gr,
  isInteger: Pr,
  isNegative: qt,
  stirlingS2: Qv,
  typed: G
}), Kv = /* @__PURE__ */ VM({
  abs: Rr,
  add: Ze,
  addScalar: gr,
  atan: Nv,
  bignumber: kr,
  column: Zv,
  complex: mi,
  config: pe,
  cos: ho,
  diag: Tv,
  divideScalar: ur,
  dot: di,
  equal: Kr,
  flatten: aa,
  im: yo,
  inv: rn,
  larger: Or,
  matrix: xe,
  matrixFromColumns: No,
  multiply: je,
  multiplyScalar: fr,
  number: Dt,
  qr: Do,
  re: bo,
  reshape: Mv,
  sin: vi,
  size: Ar,
  smaller: Tr,
  sqrt: lt,
  subtract: cr,
  typed: G,
  usolve: Ao,
  usolveAll: zv
}), A8 = /* @__PURE__ */ F4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), E8 = /* @__PURE__ */ Z4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), S8 = /* @__PURE__ */ _3({
  divide: br,
  dotDivide: na,
  isNumeric: jt,
  log: So,
  map: Kt,
  matrix: xe,
  multiply: je,
  sum: Co,
  typed: G
}), jv = /* @__PURE__ */ vv({
  add: Ze,
  divide: br,
  typed: G
}), C8 = /* @__PURE__ */ X4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), M8 = /* @__PURE__ */ v4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), F8 = /* @__PURE__ */ dv({
  bignumber: kr,
  add: Ze,
  compare: en,
  divide: br,
  isInteger: Pr,
  larger: Or,
  multiply: je,
  partitionSelect: hi,
  smaller: Tr,
  smallerEq: xn,
  subtract: cr,
  typed: G
}), To = /* @__PURE__ */ pv({
  add: Ze,
  apply: xo,
  divide: br,
  isNaN: ra,
  multiply: je,
  subtract: cr,
  typed: G
}), B8 = /* @__PURE__ */ C4({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), ep = /* @__PURE__ */ p3({
  add: Ze,
  compare: en,
  divide: br,
  partitionSelect: hi,
  typed: G
}), T8 = /* @__PURE__ */ w3({
  add: Ze,
  divide: br,
  matrix: xe,
  mean: jv,
  multiply: je,
  pow: jr,
  sqrt: lt,
  subtract: cr,
  sum: Co,
  typed: G
}), O8 = /* @__PURE__ */ UF({
  Complex: ir,
  add: Ze,
  divide: br,
  matrix: xe,
  multiply: je,
  typed: G
}), _8 = /* @__PURE__ */ h3({
  abs: Rr,
  map: Kt,
  median: ep,
  subtract: cr,
  typed: G
}), $8 = /* @__PURE__ */ hv({
  map: Kt,
  sqrt: lt,
  typed: G,
  variance: To
}), I8 = /* @__PURE__ */ Rb({
  BigNumber: Ne,
  Complex: ir,
  add: Ze,
  config: pe,
  divide: br,
  equal: Kr,
  factorial: ia,
  gamma: Bo,
  isNegative: qt,
  multiply: je,
  pi: Vi,
  pow: jr,
  sin: vi,
  smallerEq: xn,
  subtract: cr,
  typed: G
}), Oo = /* @__PURE__ */ p2({
  abs: Rr,
  add: Ze,
  conj: Jt,
  ctranspose: wo,
  eigs: Kv,
  equalScalar: Ge,
  larger: Or,
  matrix: xe,
  multiply: je,
  pow: jr,
  smaller: Tr,
  sqrt: lt,
  typed: G
}), rp = /* @__PURE__ */ ab({
  BigNumber: Ne,
  DenseMatrix: Pe,
  SparseMatrix: At,
  addScalar: gr,
  config: pe,
  cos: ho,
  matrix: xe,
  multiplyScalar: fr,
  norm: Oo,
  sin: vi,
  typed: G,
  unaryMinus: mt
}), q8 = /* @__PURE__ */ aB({
  BigNumber: Ne,
  Unit: Oe,
  config: pe
}), tp = /* @__PURE__ */ jM({
  identity: Rt,
  matrix: xe,
  multiply: je,
  norm: Oo,
  qr: Do,
  subtract: cr,
  typed: G
}), R8 = /* @__PURE__ */ tb({
  multiply: je,
  rotationMatrix: rp,
  typed: G
}), np = /* @__PURE__ */ QM({
  abs: Rr,
  add: Ze,
  concat: We,
  identity: Rt,
  index: kv,
  lusolve: Jv,
  matrix: xe,
  matrixFromColumns: No,
  multiply: je,
  range: wn,
  schur: tp,
  subset: Gr,
  subtract: cr,
  transpose: ta,
  typed: G
}), z8 = /* @__PURE__ */ r3({
  matrix: xe,
  multiply: je,
  sylvester: np,
  transpose: ta,
  typed: G
}), Tn = {}, On = {}, ap = {}, Fr = A2({
  mathWithTransform: On
}), _n = J2({
  Node: Fr
}), Et = K2({
  Node: Fr
}), tn = eD({
  Node: Fr
}), ip = aD({
  Node: Fr
}), $n = M2({
  Node: Fr
}), op = $2({
  Node: Fr,
  ResultSet: xv
}), sp = q2({
  Node: Fr
}), zt = G2({
  Node: Fr
}), up = tD({
  Node: Fr
}), P8 = HF({
  classes: ap
}), _o = aA({
  math: Tn,
  typed: G
}), lp = Z2({
  Node: Fr,
  typed: G
}), U8 = $M({
  Chain: _o,
  typed: G
}), In = X2({
  Node: Fr,
  size: Ar
}), qn = S2({
  Node: Fr,
  subset: Gr
}), cp = O2({
  matrix: xe,
  Node: Fr,
  subset: Gr
}), Pt = sD({
  Unit: Oe,
  Node: Fr,
  math: Tn
}), Ut = lD({
  Node: Fr,
  SymbolNode: Pt,
  math: Tn
}), pt = fD({
  AccessorNode: qn,
  ArrayNode: $n,
  AssignmentNode: cp,
  BlockNode: op,
  ConditionalNode: sp,
  ConstantNode: zt,
  FunctionAssignmentNode: lp,
  FunctionNode: Ut,
  IndexNode: In,
  ObjectNode: _n,
  OperatorNode: Et,
  ParenthesisNode: tn,
  RangeNode: up,
  RelationalNode: ip,
  SymbolNode: Pt,
  config: pe,
  numeric: nt,
  typed: G
}), fp = BF({
  ConstantNode: zt,
  FunctionNode: Ut,
  OperatorNode: Et,
  ParenthesisNode: tn,
  parse: pt,
  typed: G
}), $o = EF({
  bignumber: kr,
  fraction: Fn,
  AccessorNode: qn,
  ArrayNode: $n,
  ConstantNode: zt,
  FunctionNode: Ut,
  IndexNode: In,
  ObjectNode: _n,
  OperatorNode: Et,
  SymbolNode: Pt,
  config: pe,
  mathWithTransform: On,
  matrix: xe,
  typed: G
}), L8 = vD({
  parse: pt,
  typed: G
}), Io = CF({
  AccessorNode: qn,
  ArrayNode: $n,
  ConstantNode: zt,
  FunctionNode: Ut,
  IndexNode: In,
  ObjectNode: _n,
  OperatorNode: Et,
  ParenthesisNode: tn,
  SymbolNode: Pt,
  add: Ze,
  divide: br,
  equal: Kr,
  isZero: ut,
  multiply: je,
  parse: pt,
  pow: jr,
  subtract: cr,
  typed: G
}), gi = dD({
  parse: pt,
  typed: G
}), mp = rA({
  evaluate: gi
}), vp = yD({
  evaluate: gi
}), yi = NF({
  bignumber: kr,
  fraction: Fn,
  AccessorNode: qn,
  ArrayNode: $n,
  ConstantNode: zt,
  FunctionNode: Ut,
  IndexNode: In,
  ObjectNode: _n,
  OperatorNode: Et,
  ParenthesisNode: tn,
  SymbolNode: Pt,
  add: Ze,
  config: pe,
  divide: br,
  equal: Kr,
  isZero: ut,
  mathWithTransform: On,
  matrix: xe,
  multiply: je,
  parse: pt,
  pow: jr,
  resolve: fp,
  simplifyConstant: $o,
  simplifyCore: Io,
  subtract: cr,
  typed: G
}), k8 = OF({
  OperatorNode: Et,
  parse: pt,
  simplify: yi,
  typed: G
}), H8 = gF({
  parse: pt,
  typed: G
}), G8 = xD({
  Parser: vp,
  typed: G
}), V8 = qF({
  bignumber: kr,
  fraction: Fn,
  AccessorNode: qn,
  ArrayNode: $n,
  ConstantNode: zt,
  FunctionNode: Ut,
  IndexNode: In,
  ObjectNode: _n,
  OperatorNode: Et,
  ParenthesisNode: tn,
  SymbolNode: Pt,
  add: Ze,
  config: pe,
  divide: br,
  equal: Kr,
  isZero: ut,
  mathWithTransform: On,
  matrix: xe,
  multiply: je,
  parse: pt,
  pow: jr,
  simplify: yi,
  simplifyConstant: $o,
  simplifyCore: Io,
  subtract: cr,
  typed: G
}), Z8 = $F({
  ConstantNode: zt,
  FunctionNode: Ut,
  OperatorNode: Et,
  ParenthesisNode: tn,
  SymbolNode: Pt,
  config: pe,
  equal: Kr,
  isZero: ut,
  numeric: nt,
  parse: pt,
  simplify: yi,
  typed: G
}), Y8 = OM({
  Help: mp,
  mathWithTransform: On,
  typed: G
});
pr(Tn, {
  e: sf,
  false: xT,
  fineStructure: wT,
  i: bv,
  Infinity: NT,
  LN10: DT,
  LOG10E: AT,
  NaN: ET,
  null: ST,
  phi: CT,
  SQRT1_2: FT,
  sackurTetrode: BT,
  tau: wv,
  true: TT,
  E: sf,
  version: OT,
  efimovFactor: _T,
  LN2: $T,
  pi: Vi,
  replacer: IT,
  reviver: P8,
  SQRT2: qT,
  typed: G,
  unaryPlus: po,
  PI: Vi,
  weakMixingAngle: RT,
  abs: Rr,
  acos: zT,
  acot: PT,
  acsc: UT,
  addScalar: gr,
  arg: LT,
  asech: kT,
  asinh: HT,
  atan: Nv,
  atanh: GT,
  bignumber: kr,
  bitNot: VT,
  boolean: ZT,
  clone: YT,
  combinations: fi,
  complex: mi,
  conj: Jt,
  cos: ho,
  cot: XT,
  csc: WT,
  cube: JT,
  equalScalar: Ge,
  erf: QT,
  exp: Dv,
  expm1: KT,
  filter: jT,
  forEach: eO,
  format: ea,
  getMatrixDataType: go,
  hex: rO,
  im: yo,
  isInteger: Pr,
  isNegative: qt,
  isPositive: Qt,
  isZero: ut,
  LOG2E: tO,
  lgamma: nO,
  log10: aO,
  log2: Av,
  map: Kt,
  multiplyScalar: fr,
  not: Xa,
  number: Dt,
  oct: iO,
  pickRandom: oO,
  print: sO,
  random: uO,
  re: bo,
  sec: lO,
  sign: Ev,
  sin: vi,
  splitUnit: cO,
  square: fO,
  string: mO,
  subtractScalar: Qr,
  tan: vO,
  typeOf: Sv,
  acosh: pO,
  acsch: dO,
  apply: xo,
  asec: hO,
  bin: gO,
  chain: U8,
  combinationsWithRep: yO,
  cosh: bO,
  csch: xO,
  isNaN: ra,
  isPrime: wO,
  randomInt: NO,
  sech: DO,
  sinh: AO,
  sparse: EO,
  sqrt: lt,
  tanh: SO,
  unaryMinus: mt,
  acoth: CO,
  coth: MO,
  fraction: Fn,
  isNumeric: jt,
  matrix: xe,
  matrixFromFunction: FO,
  mode: BO,
  numeric: nt,
  prod: Cv,
  reshape: Mv,
  size: Ar,
  squeeze: TO,
  transpose: ta,
  xgcd: Fv,
  zeros: Nr,
  asin: OO,
  cbrt: Bv,
  concat: We,
  count: _O,
  ctranspose: wo,
  diag: Tv,
  divideScalar: ur,
  dotDivide: na,
  equal: Kr,
  flatten: aa,
  hasNumericValue: $O,
  identity: Rt,
  kron: IO,
  largerEq: pi,
  leftShift: qO,
  lsolve: Ov,
  matrixFromColumns: No,
  nthRoot: RO,
  ones: zO,
  qr: Do,
  resize: PO,
  rightArithShift: UO,
  round: Bn,
  smaller: Tr,
  subtract: cr,
  to: LO,
  unequal: kO,
  usolve: Ao,
  xor: HO,
  add: Ze,
  atan2: GO,
  bitAnd: VO,
  bitOr: ZO,
  bitXor: YO,
  catalan: XO,
  compare: en,
  compareText: _v,
  cumsum: WO,
  deepEqual: Eo,
  diff: JO,
  distance: QO,
  dot: di,
  equalText: KO,
  floor: $v,
  gcd: jO,
  hypot: e5,
  larger: Or,
  log: So,
  lsolveAll: r5,
  matrixFromRows: t5,
  min: n5,
  mod: qv,
  multiply: je,
  nthRoots: a5,
  or: i5,
  partitionSelect: hi,
  rightLogShift: o5,
  slu: Rv,
  subset: Gr,
  sum: Co,
  trace: s5,
  usolveAll: zv,
  zpk2tf: u5,
  ceil: Mo,
  compareNatural: vt,
  composition: l5,
  cross: c5,
  det: Pv,
  dotMultiply: f5,
  fix: Lv,
  index: kv,
  intersect: m5,
  invmod: v5,
  lcm: p5,
  log1p: d5,
  max: Fo,
  setCartesian: h5,
  setDistinct: g5,
  setIsSubset: y5,
  setPowerset: b5,
  smallerEq: xn,
  sort: x5,
  and: w5,
  range: wn,
  row: N5,
  setDifference: Hv,
  setMultiplicity: D5,
  setSymDifference: Gv,
  column: Zv,
  inv: rn,
  lup: Yv,
  pinv: A5,
  pow: jr,
  setIntersect: Xv,
  setUnion: E5,
  sqrtm: S5,
  vacuumImpedance: C5,
  wienDisplacement: M5,
  atomicMass: F5,
  bohrMagneton: B5,
  boltzmann: T5,
  conductanceQuantum: O5,
  coulomb: _5,
  deuteronMass: $5,
  dotPow: I5,
  electricConstant: q5,
  elementaryCharge: R5,
  expm: z5,
  faraday: P5,
  fft: Wv,
  gamma: Bo,
  gravitationConstant: U5,
  hartreeEnergy: L5,
  ifft: k5,
  klitzing: H5,
  loschmidt: G5,
  magneticConstant: V5,
  molarMass: Z5,
  molarPlanckConstant: Y5,
  neutronMass: X5,
  nuclearMagneton: W5,
  planckCharge: J5,
  planckLength: Q5,
  planckTemperature: K5,
  protonMass: j5,
  quantumOfCirculation: e8,
  reducedPlanckConstant: r8,
  rydberg: t8,
  secondRadiation: n8,
  speedOfLight: a8,
  stefanBoltzmann: i8,
  thomsonCrossSection: o8,
  avogadro: s8,
  bohrRadius: u8,
  createUnit: l8,
  divide: br,
  electronMass: c8,
  factorial: ia,
  firstRadiation: f8,
  gravity: m8,
  inverseConductanceQuantum: v8,
  lusolve: Jv,
  magneticFluxQuantum: p8,
  molarMassC12: d8,
  multinomial: h8,
  parse: pt,
  permutations: g8,
  planckMass: y8,
  polynomialRoot: b8,
  resolve: fp,
  setSize: x8,
  simplifyConstant: $o,
  solveODE: w8,
  stirlingS2: Qv,
  unit: N8,
  bellNumbers: D8,
  compile: L8,
  eigs: Kv,
  fermiCoupling: A8,
  gasConstant: E8,
  kldivergence: S8,
  mean: jv,
  molarVolume: C8,
  planckConstant: M8,
  quantileSeq: F8,
  simplifyCore: Io,
  variance: To,
  classicalElectronRadius: B8,
  evaluate: gi,
  median: ep,
  simplify: yi,
  symbolicEqual: k8,
  corr: T8,
  freqz: O8,
  leafCount: H8,
  mad: _8,
  parser: G8,
  rationalize: V8,
  std: $8,
  zeta: I8,
  derivative: Z8,
  norm: Oo,
  rotationMatrix: rp,
  help: Y8,
  planckTime: q8,
  schur: tp,
  rotate: R8,
  sylvester: np,
  lyap: z8,
  config: pe
});
pr(On, Tn, {
  filter: dB({
    typed: G
  }),
  forEach: yB({
    typed: G
  }),
  map: AB({
    typed: G
  }),
  apply: lB({
    isInteger: Pr,
    typed: G
  }),
  or: vT({
    DenseMatrix: Pe,
    concat: We,
    equalScalar: Ge,
    matrix: xe,
    typed: G
  }),
  and: cT({
    add: Ze,
    concat: We,
    equalScalar: Ge,
    matrix: xe,
    not: Xa,
    typed: G,
    zeros: Nr
  }),
  concat: VB({
    isInteger: Pr,
    matrix: xe,
    typed: G
  }),
  max: CB({
    config: pe,
    larger: Or,
    numeric: nt,
    typed: G
  }),
  print: sT({
    add: Ze,
    matrix: xe,
    typed: G,
    zeros: Nr
  }),
  bitAnd: hT({
    add: Ze,
    concat: We,
    equalScalar: Ge,
    matrix: xe,
    not: Xa,
    typed: G,
    zeros: Nr
  }),
  diff: YB({
    bignumber: kr,
    matrix: xe,
    number: Dt,
    subtract: cr,
    typed: G
  }),
  min: _B({
    config: pe,
    numeric: nt,
    smaller: Tr,
    typed: G
  }),
  subset: kB({
    add: Ze,
    matrix: xe,
    typed: G,
    zeros: Nr
  }),
  bitOr: bT({
    DenseMatrix: Pe,
    concat: We,
    equalScalar: Ge,
    matrix: xe,
    typed: G
  }),
  cumsum: nT({
    add: Ze,
    typed: G,
    unaryPlus: po
  }),
  index: wB({
    Index: Sr,
    getMatrixDataType: go
  }),
  sum: KB({
    add: Ze,
    config: pe,
    numeric: nt,
    typed: G
  }),
  range: qB({
    bignumber: kr,
    matrix: xe,
    add: Ze,
    config: pe,
    isPositive: Qt,
    larger: Or,
    largerEq: pi,
    smaller: Tr,
    smallerEq: xn,
    typed: G
  }),
  row: PB({
    Index: Sr,
    matrix: xe,
    range: wn,
    typed: G
  }),
  column: mB({
    Index: Sr,
    matrix: xe,
    range: wn,
    typed: G
  }),
  mean: BB({
    add: Ze,
    divide: br,
    typed: G
  }),
  quantileSeq: rT({
    add: Ze,
    bignumber: kr,
    compare: en,
    divide: br,
    isInteger: Pr,
    larger: Or,
    multiply: je,
    partitionSelect: hi,
    smaller: Tr,
    smallerEq: xn,
    subtract: cr,
    typed: G
  }),
  variance: iT({
    add: Ze,
    apply: xo,
    divide: br,
    isNaN: ra,
    multiply: je,
    subtract: cr,
    typed: G
  }),
  std: JB({
    map: Kt,
    sqrt: lt,
    typed: G,
    variance: To
  })
});
pr(ap, {
  BigNumber: Ne,
  Complex: ir,
  Fraction: Wt,
  Matrix: ci,
  Node: Fr,
  ObjectNode: _n,
  OperatorNode: Et,
  ParenthesisNode: tn,
  Range: MT,
  RelationalNode: ip,
  ResultSet: xv,
  ArrayNode: $n,
  BlockNode: op,
  ConditionalNode: sp,
  ConstantNode: zt,
  DenseMatrix: Pe,
  RangeNode: up,
  Chain: _o,
  FunctionAssignmentNode: lp,
  SparseMatrix: At,
  IndexNode: In,
  ImmutableDenseMatrix: Iv,
  Index: Sr,
  AccessorNode: qn,
  AssignmentNode: cp,
  FibonacciHeap: Uv,
  Spa: Vv,
  Unit: Oe,
  SymbolNode: Pt,
  FunctionNode: Ut,
  Help: mp,
  Parser: vp
});
_o.createProxy(Tn);
const W8 = ({ updateView: e }) => (console.log("hello world CLEAR"), _extension.ui.searchPanel.clearValue(), _extension.ui.searchPanel.onChanged.addListener((r) => {
  if (r.trim()) {
    console.log("changed", r);
    try {
      const i = gi(r);
      e({
        type: "list",
        shouldFilter: !1,
        items: [
          {
            title: i,
            value: "result",
            icon: "icon:Calculator",
            description: "Copy to clipboard",
            actions: [
              { type: "copy", content: i.toString(), defaultAction: !0 }
            ]
          }
        ]
      });
    } catch {
      e(null);
    }
  }
}), {
  type: "list",
  items: [
    {
      title: "Copy URL",
      value: "copy-url",
      icon: "icon:MousePointer2",
      actions: [
        { type: "copy", content: "https://google.com" },
        { type: "open-url", url: "https://google.com", defaultAction: !0 }
      ]
    },
    {
      title: "Paste",
      icon: "icon:Clipboard",
      value: "paste",
      actions: [{ type: "paste", content: "haha" }, { type: "show-in-folder", path: "c:\\" }]
    }
  ]
});
export {
  W8 as default
};
