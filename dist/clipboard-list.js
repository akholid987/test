import { jsx as A, jsxs as X } from "/@preload/react-runtime.js";
import { c as tt, g as et, f as nt, z, i as rt, L as st } from "./@libs/$extension-api.js";
import { useState as it, useEffect as at } from "/@preload/react.js";
var B = { exports: {} };
(function(F, J) {
  (function(_, M) {
    F.exports = M();
  })(tt, function() {
    var _ = 1e3, M = 6e4, I = 36e5, f = "millisecond", b = "second", x = "minute", O = "hour", g = "day", C = "week", p = "month", P = "quarter", v = "year", T = "date", V = "Invalid Date", K = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, G = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Q = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, N = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, R = { s: N, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + N(r, 2, "0") + ":" + N(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, p), i = t - e < 0, a = n.clone().add(r + (i ? -1 : 1), p);
      return +(-(r + (t - e) / (i ? e - a : a - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: p, y: v, w: C, d: g, D: T, h: O, m: x, s: b, ms: f, Q: P }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, k = "en", D = {};
    D[k] = Q;
    var Z = "$isDayjsObject", U = function(s) {
      return s instanceof W || !(!s || !s[Z]);
    }, j = function s(n, t, r) {
      var e;
      if (!n)
        return k;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        D[i] && (e = i), t && (D[i] = t, e = i);
        var a = n.split("-");
        if (!e && a.length > 1)
          return s(a[0]);
      } else {
        var u = n.name;
        D[u] = n, e = u;
      }
      return !r && e && (k = e), e || !r && k;
    }, l = function(s, n) {
      if (U(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new W(t);
    }, o = R;
    o.l = j, o.i = U, o.w = function(s, n) {
      return l(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var W = function() {
      function s(t) {
        this.$L = j(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[Z] = !0;
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, i = r.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (o.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var a = e.match(K);
            if (a) {
              var u = a[2] - 1 || 0, c = (a[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c)) : new Date(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return o;
      }, n.isValid = function() {
        return this.$d.toString() !== V;
      }, n.isSame = function(t, r) {
        var e = l(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return l(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < l(t);
      }, n.$g = function(t, r, e) {
        return o.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, i = !!o.u(r) || r, a = o.p(t), u = function(S, $) {
          var y = o.w(e.$u ? Date.UTC(e.$y, $, S) : new Date(e.$y, $, S), e);
          return i ? y : y.endOf(g);
        }, c = function(S, $) {
          return o.w(e.toDate()[S].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), e);
        }, d = this.$W, h = this.$M, m = this.$D, Y = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case v:
            return i ? u(1, 0) : u(31, 11);
          case p:
            return i ? u(1, h) : u(0, h + 1);
          case C:
            var w = this.$locale().weekStart || 0, H = (d < w ? d + 7 : d) - w;
            return u(i ? m - H : m + (6 - H), h);
          case g:
          case T:
            return c(Y + "Hours", 0);
          case O:
            return c(Y + "Minutes", 1);
          case x:
            return c(Y + "Seconds", 2);
          case b:
            return c(Y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, i = o.p(t), a = "set" + (this.$u ? "UTC" : ""), u = (e = {}, e[g] = a + "Date", e[T] = a + "Date", e[p] = a + "Month", e[v] = a + "FullYear", e[O] = a + "Hours", e[x] = a + "Minutes", e[b] = a + "Seconds", e[f] = a + "Milliseconds", e)[i], c = i === g ? this.$D + (r - this.$W) : r;
        if (i === p || i === v) {
          var d = this.clone().set(T, 1);
          d.$d[u](c), d.init(), this.$d = d.set(T, Math.min(this.$D, d.daysInMonth())).$d;
        } else
          u && this.$d[u](c);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[o.p(t)]();
      }, n.add = function(t, r) {
        var e, i = this;
        t = Number(t);
        var a = o.p(r), u = function(h) {
          var m = l(i);
          return o.w(m.date(m.date() + Math.round(h * t)), i);
        };
        if (a === p)
          return this.set(p, this.$M + t);
        if (a === v)
          return this.set(v, this.$y + t);
        if (a === g)
          return u(1);
        if (a === C)
          return u(7);
        var c = (e = {}, e[x] = M, e[O] = I, e[b] = _, e)[a] || 1, d = this.$d.getTime() + t * c;
        return o.w(d, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || V;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", a = o.z(this), u = this.$H, c = this.$m, d = this.$M, h = e.weekdays, m = e.months, Y = e.meridiem, w = function($, y, L, E) {
          return $ && ($[y] || $(r, i)) || L[y].slice(0, E);
        }, H = function($) {
          return o.s(u % 12 || 12, $, "0");
        }, S = Y || function($, y, L) {
          var E = $ < 12 ? "AM" : "PM";
          return L ? E.toLowerCase() : E;
        };
        return i.replace(G, function($, y) {
          return y || function(L) {
            switch (L) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return o.s(r.$y, 4, "0");
              case "M":
                return d + 1;
              case "MM":
                return o.s(d + 1, 2, "0");
              case "MMM":
                return w(e.monthsShort, d, m, 3);
              case "MMMM":
                return w(m, d);
              case "D":
                return r.$D;
              case "DD":
                return o.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return w(e.weekdaysMin, r.$W, h, 2);
              case "ddd":
                return w(e.weekdaysShort, r.$W, h, 3);
              case "dddd":
                return h[r.$W];
              case "H":
                return String(u);
              case "HH":
                return o.s(u, 2, "0");
              case "h":
                return H(1);
              case "hh":
                return H(2);
              case "a":
                return S(u, c, !0);
              case "A":
                return S(u, c, !1);
              case "m":
                return String(c);
              case "mm":
                return o.s(c, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return o.s(r.$s, 2, "0");
              case "SSS":
                return o.s(r.$ms, 3, "0");
              case "Z":
                return a;
            }
            return null;
          }($) || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var i, a = this, u = o.p(r), c = l(t), d = (c.utcOffset() - this.utcOffset()) * M, h = this - c, m = function() {
          return o.m(a, c);
        };
        switch (u) {
          case v:
            i = m() / 12;
            break;
          case p:
            i = m();
            break;
          case P:
            i = m() / 3;
            break;
          case C:
            i = (h - d) / 6048e5;
            break;
          case g:
            i = (h - d) / 864e5;
            break;
          case O:
            i = h / I;
            break;
          case x:
            i = h / M;
            break;
          case b:
            i = h / _;
            break;
          default:
            i = h;
        }
        return e ? i : o.a(i);
      }, n.daysInMonth = function() {
        return this.endOf(p).$D;
      }, n.$locale = function() {
        return D[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = j(t, r, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return o.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), q = W.prototype;
    return l.prototype = q, [["$ms", f], ["$s", b], ["$m", x], ["$H", O], ["$W", g], ["$M", p], ["$y", v], ["$D", T]].forEach(function(s) {
      q[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), l.extend = function(s, n) {
      return s.$i || (s(n, W, l), s.$i = !0), l;
    }, l.locale = j, l.isDayjs = U, l.unix = function(s) {
      return l(1e3 * s);
    }, l.en = D[k], l.Ls = D, l.p = {}, l;
  });
})(B);
var ot = B.exports;
const ut = /* @__PURE__ */ et(ot);
function ct() {
  return /* @__PURE__ */ A("div", { children: /* @__PURE__ */ A("p", { children: "Hello world" }) });
}
function lt() {
  const [F, J] = it([]), _ = _extension.ui.createToast({
    title: "Toast"
  });
  at(() => {
    console.log("Today date is", ut().format("DD MMMM YYYY")), _extension.shell.installedApps.query("").then(J), _extension.ui.searchPanel.onChanged.addListener((f) => {
      console.log("onChange", f);
    }), _extension.ui.searchPanel.onKeydown.addListener((f) => {
      console.log("onKeydown", f);
    }), _extension.runtime.config.getValues("command").then(console.log), _extension.browser.activeTab.get().then(console.log), _extension.browser.activeTab.type('textarea[name="q"]', "Hello 世界").then(console.log);
  }, []);
  const M = [
    {
      title: "Hello world",
      value: "testing",
      async onSelected() {
        await (await _extension.browser.activeTab.findElement("input")).type("hello");
      }
    },
    {
      title: "Toast",
      value: "toast",
      onSelected() {
        console.log("toast"), _.show({ type: "loading" });
      },
      actions: [
        {
          title: "Hide toast",
          value: "hide-toast",
          color: "destructive",
          icon: z.Bike,
          onAction() {
            _.hide();
          }
        }
      ]
    }
  ], I = F.map((f) => ({
    title: f.name,
    value: f.appId,
    onSelected() {
      _extension.shell.installedApps.launch(f.appId);
    },
    actions: [
      {
        icon: z.Clipboard,
        title: "Paste",
        value: "paste",
        onAction() {
          _extension.clipboard.paste(f.name);
        }
      },
      {
        icon: z.FolderOpen,
        title: "Open file location",
        value: "open-file",
        onAction() {
          _extension.shell.installedApps.showInFolder(f.appId);
        }
      }
    ],
    icon: /* @__PURE__ */ A(rt, { src: _extension.shell.installedApps.getIconURL(f.appId), style: { height: "100%", width: "100%" } })
  }));
  return /* @__PURE__ */ X("div", { className: "p-2", children: [
    /* @__PURE__ */ A(ct, {}),
    /* @__PURE__ */ A(st, { items: [...M, ...I] })
  ] });
}
const $t = nt(lt);
export {
  $t as default
};
