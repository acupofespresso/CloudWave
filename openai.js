import {
  r as y,
  j as B,
  b as gd,
  u as Mo,
  e as Oo,
  g as vd,
  M as mt,
  m as bd,
} from "./ows5kkl4yp5s8tva.js";
import {
  aC as No,
  cC as yd,
  ch as Pn,
  aA as kd,
  ki as re,
  au as Lo,
  dq as Sd,
  a as Cr,
  dC as Td,
  e9 as Hn,
  kn as Uo,
  ax as Cd,
  a2 as zi,
  aL as Wi,
  aM as Gi,
  qy as Fo,
  bt as wd,
  aB as Pd,
  aY as Ki,
  aX as jo,
  qz as Ed,
  fh as Rd,
  qA as _d,
  bm as Id,
  oJ as xd,
  gN as Ad,
  ih as es,
  k as Bo,
  ac as Lt,
  B as En,
  aq as ts,
  a_ as Dd,
  U as Md,
  aV as Od,
  P as Nd,
  dL as Ld,
  D as Ud,
} from "./dyx20gdpr72lkgi8.js";
import {
  i7 as Pe,
  jf as Vo,
  ja as Fd,
  qM as jd,
  pq as Se,
  qN as Bd,
  qO as xt,
  qP as Vd,
  qQ as qd,
  qR as zd,
  qS as Wd,
  qT as ns,
  qU as Gd,
  qV as Kd,
  qW as Hd,
  qX as Jd,
  qY as $d,
  qZ as Qd,
  q_ as qo,
  q$ as Hi,
  r0 as Yd,
  r1 as Xd,
  r2 as Zd,
  pG as zo,
  pD as Ae,
  pH as eu,
  r3 as mn,
  r4 as Jn,
  i6 as gt,
  f as tu,
  pJ as pe,
  r5 as nu,
  r6 as Wo,
  jc as pt,
  r7 as iu,
  ag as Go,
  cz as ru,
  pr as su,
  r8 as qe,
  b_ as Ko,
  r9 as ou,
  ra as au,
  rb as cu,
  rc as du,
  pA as is,
  py as rs,
  pz as uu,
  hE as lu,
  rd as hu,
  re as fu,
  ps as pu,
  dB as Ho,
  rf as Jo,
  rg as mu,
  rh as gu,
  d as vu,
  gB as bu,
  pI as yu,
  i3 as gi,
  ri as ku,
  eE as Su,
  em as Tu,
} from "./ot39avpnirhhqzcp.js";
import { u as Cu } from "./b2nkcf5v91g46v8n.js";
const wu = () => {
    const n = No(),
      e = Pe(),
      t = y.useCallback(() => e.getState().isVoiceModeActive, [e]);
    return y.useMemo(
      () =>
        new Proxy(n, {
          get(i, r) {
            const s = i[r];
            return t() || r === "closeAll" ? s : () => {};
          },
        }),
      [t, n]
    );
  },
  ss = async (n, e) => (
    e || (e = await Vo.getLocalDevices()),
    e.find((i) => i.deviceId === n)?.label ?? n
  );
function $o() {
  const n = Fd();
  if (!n) return { video: !1, screenshare: !1 };
  const e = jd(n);
  return {
    video: e?.features?.video ?? !1,
    screenshare: e?.features?.screen_sharing ?? !1,
  };
}
var os = {};
function Pu(n, e) {
  return (
    e.forEach(function (t) {
      t &&
        typeof t != "string" &&
        !Array.isArray(t) &&
        Object.keys(t).forEach(function (i) {
          if (i !== "default" && !(i in n)) {
            var r = Object.getOwnPropertyDescriptor(t, i);
            Object.defineProperty(
              n,
              i,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return t[i];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(n)
  );
}
var Eu = Object.defineProperty,
  Ru = (n, e, t) =>
    e in n
      ? Eu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  as = (n, e, t) => Ru(n, typeof e != "symbol" ? e + "" : e, t);
class Re {
  constructor() {
    as(this, "_locking"),
      as(this, "_locks"),
      (this._locking = Promise.resolve()),
      (this._locks = 0);
  }
  isLocked() {
    return this._locks > 0;
  }
  lock() {
    this._locks += 1;
    let e;
    const t = new Promise(
        (r) =>
          (e = () => {
            (this._locks -= 1), r();
          })
      ),
      i = this._locking.then(() => e);
    return (this._locking = this._locking.then(() => t)), i;
  }
}
function ce(n, e) {
  if (!n) throw new Error(e);
}
const _u = 34028234663852886e22,
  Iu = -34028234663852886e22,
  xu = 4294967295,
  Au = 2147483647,
  Du = -2147483648;
function An(n) {
  if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > Au || n < Du)
    throw new Error("invalid int 32: " + n);
}
function Ji(n) {
  if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > xu || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function Qo(n) {
  if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > _u || n < Iu))
    throw new Error("invalid float 32: " + n);
}
const Yo = Symbol("@bufbuild/protobuf/enum-type");
function Mu(n) {
  const e = n[Yo];
  return ce(e, "missing enum type on enum object"), e;
}
function Xo(n, e, t, i) {
  n[Yo] = Zo(
    e,
    t.map((r) => ({ no: r.no, name: r.name, localName: n[r.no] }))
  );
}
function Zo(n, e, t) {
  const i = Object.create(null),
    r = Object.create(null),
    s = [];
  for (const o of e) {
    const a = ea(o);
    s.push(a), (i[o.name] = a), (r[o.no] = a);
  }
  return {
    typeName: n,
    values: s,
    findName(o) {
      return i[o];
    },
    findNumber(o) {
      return r[o];
    },
  };
}
function Ou(n, e, t) {
  const i = {};
  for (const r of e) {
    const s = ea(r);
    (i[s.localName] = s.no), (i[s.no] = s.localName);
  }
  return Xo(i, n, e), i;
}
function ea(n) {
  return "localName" in n
    ? n
    : Object.assign(Object.assign({}, n), { localName: n.name });
}
class wr {
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(e, t) {
    const i = this.getType(),
      r = i.runtime.bin,
      s = r.makeReadOptions(t);
    return r.readMessage(this, s.readerFactory(e), e.byteLength, s), this;
  }
  fromJson(e, t) {
    const i = this.getType(),
      r = i.runtime.json,
      s = r.makeReadOptions(t);
    return r.readMessage(i, e, s, this), this;
  }
  fromJsonString(e, t) {
    let i;
    try {
      i = JSON.parse(e);
    } catch (r) {
      throw new Error(
        "cannot decode "
          .concat(this.getType().typeName, " from JSON: ")
          .concat(r instanceof Error ? r.message : String(r))
      );
    }
    return this.fromJson(i, t);
  }
  toBinary(e) {
    const t = this.getType(),
      i = t.runtime.bin,
      r = i.makeWriteOptions(e),
      s = r.writerFactory();
    return i.writeMessage(this, s, r), s.finish();
  }
  toJson(e) {
    const t = this.getType(),
      i = t.runtime.json,
      r = i.makeWriteOptions(e);
    return i.writeMessage(this, r);
  }
  toJsonString(e) {
    var t;
    const i = this.toJson(e);
    return JSON.stringify(
      i,
      null,
      (t = e?.prettySpaces) !== null && t !== void 0 ? t : 0
    );
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: !0 });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
}
function Nu(n, e, t, i) {
  var r;
  const s =
      (r = i?.localName) !== null && r !== void 0
        ? r
        : e.substring(e.lastIndexOf(".") + 1),
    o = {
      [s]: function (a) {
        n.util.initFields(this), n.util.initPartial(a, this);
      },
    }[s];
  return (
    Object.setPrototypeOf(o.prototype, new wr()),
    Object.assign(o, {
      runtime: n,
      typeName: e,
      fields: n.util.newFieldList(t),
      fromBinary(a, c) {
        return new o().fromBinary(a, c);
      },
      fromJson(a, c) {
        return new o().fromJson(a, c);
      },
      fromJsonString(a, c) {
        return new o().fromJsonString(a, c);
      },
      equals(a, c) {
        return n.util.equals(o, a, c);
      },
    }),
    o
  );
}
function Lu() {
  let n = 0,
    e = 0;
  for (let i = 0; i < 28; i += 7) {
    let r = this.buf[this.pos++];
    if (((n |= (r & 127) << i), (r & 128) == 0))
      return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (((n |= (t & 15) << 28), (e = (t & 112) >> 4), (t & 128) == 0))
    return this.assertBounds(), [n, e];
  for (let i = 3; i <= 31; i += 7) {
    let r = this.buf[this.pos++];
    if (((e |= (r & 127) << i), (r & 128) == 0))
      return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function vi(n, e, t) {
  for (let s = 0; s < 28; s = s + 7) {
    const o = n >>> s,
      a = !(!(o >>> 7) && e == 0),
      c = (a ? o | 128 : o) & 255;
    if ((t.push(c), !a)) return;
  }
  const i = ((n >>> 28) & 15) | ((e & 7) << 4),
    r = e >> 3 != 0;
  if ((t.push((r ? i | 128 : i) & 255), !!r)) {
    for (let s = 3; s < 31; s = s + 7) {
      const o = e >>> s,
        a = !!(o >>> 7),
        c = (a ? o | 128 : o) & 255;
      if ((t.push(c), !a)) return;
    }
    t.push((e >>> 31) & 1);
  }
}
const Dn = 4294967296;
function cs(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let i = 0,
    r = 0;
  function s(o, a) {
    const c = Number(n.slice(o, a));
    (r *= t),
      (i = i * t + c),
      i >= Dn && ((r = r + ((i / Dn) | 0)), (i = i % Dn));
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? na(i, r) : Pr(i, r);
}
function Uu(n, e) {
  let t = Pr(n, e);
  const i = t.hi & 2147483648;
  i && (t = na(t.lo, t.hi));
  const r = ta(t.lo, t.hi);
  return i ? "-" + r : r;
}
function ta(n, e) {
  if ((({ lo: n, hi: e } = Fu(n, e)), e <= 2097151)) return String(Dn * e + n);
  const t = n & 16777215,
    i = ((n >>> 24) | (e << 8)) & 16777215,
    r = (e >> 16) & 65535;
  let s = t + i * 6777216 + r * 6710656,
    o = i + r * 8147497,
    a = r * 2;
  const c = 1e7;
  return (
    s >= c && ((o += Math.floor(s / c)), (s %= c)),
    o >= c && ((a += Math.floor(o / c)), (o %= c)),
    a.toString() + ds(o) + ds(s)
  );
}
function Fu(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function Pr(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function na(n, e) {
  return (e = ~e), n ? (n = ~n + 1) : (e += 1), Pr(n, e);
}
const ds = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function us(n, e) {
  if (n >= 0) {
    for (; n > 127; ) e.push((n & 127) | 128), (n = n >>> 7);
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++) e.push((n & 127) | 128), (n = n >> 7);
    e.push(1);
  }
}
function ju() {
  let n = this.buf[this.pos++],
    e = n & 127;
  if ((n & 128) == 0) return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 7), (n & 128) == 0))
    return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 14), (n & 128) == 0))
    return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 21), (n & 128) == 0))
    return this.assertBounds(), e;
  (n = this.buf[this.pos++]), (e |= (n & 15) << 28);
  for (let t = 5; (n & 128) !== 0 && t < 10; t++) n = this.buf[this.pos++];
  if ((n & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function Bu() {
  const n = new DataView(new ArrayBuffer(8));
  if (
    typeof BigInt == "function" &&
    typeof n.getBigInt64 == "function" &&
    typeof n.getBigUint64 == "function" &&
    typeof n.setBigInt64 == "function" &&
    typeof n.setBigUint64 == "function" &&
    (typeof process != "object" ||
      typeof os != "object" ||
      os.BUF_BIGINT_DISABLE !== "1")
  ) {
    const r = BigInt("-9223372036854775808"),
      s = BigInt("9223372036854775807"),
      o = BigInt("0"),
      a = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > s || d < r) throw new Error("int64 invalid: ".concat(c));
        return d;
      },
      uParse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > a || d < o) throw new Error("uint64 invalid: ".concat(c));
        return d;
      },
      enc(c) {
        return (
          n.setBigInt64(0, this.parse(c), !0),
          { lo: n.getInt32(0, !0), hi: n.getInt32(4, !0) }
        );
      },
      uEnc(c) {
        return (
          n.setBigInt64(0, this.uParse(c), !0),
          { lo: n.getInt32(0, !0), hi: n.getInt32(4, !0) }
        );
      },
      dec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0);
      },
      uDec(c, d) {
        return (
          n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0)
        );
      },
    };
  }
  const t = (r) => ce(/^-?[0-9]+$/.test(r), "int64 invalid: ".concat(r)),
    i = (r) => ce(/^[0-9]+$/.test(r), "uint64 invalid: ".concat(r));
  return {
    zero: "0",
    supported: !1,
    parse(r) {
      return typeof r != "string" && (r = r.toString()), t(r), r;
    },
    uParse(r) {
      return typeof r != "string" && (r = r.toString()), i(r), r;
    },
    enc(r) {
      return typeof r != "string" && (r = r.toString()), t(r), cs(r);
    },
    uEnc(r) {
      return typeof r != "string" && (r = r.toString()), i(r), cs(r);
    },
    dec(r, s) {
      return Uu(r, s);
    },
    uDec(r, s) {
      return ta(r, s);
    },
  };
}
const ne = Bu();
var _;
(function (n) {
  (n[(n.DOUBLE = 1)] = "DOUBLE"),
    (n[(n.FLOAT = 2)] = "FLOAT"),
    (n[(n.INT64 = 3)] = "INT64"),
    (n[(n.UINT64 = 4)] = "UINT64"),
    (n[(n.INT32 = 5)] = "INT32"),
    (n[(n.FIXED64 = 6)] = "FIXED64"),
    (n[(n.FIXED32 = 7)] = "FIXED32"),
    (n[(n.BOOL = 8)] = "BOOL"),
    (n[(n.STRING = 9)] = "STRING"),
    (n[(n.BYTES = 12)] = "BYTES"),
    (n[(n.UINT32 = 13)] = "UINT32"),
    (n[(n.SFIXED32 = 15)] = "SFIXED32"),
    (n[(n.SFIXED64 = 16)] = "SFIXED64"),
    (n[(n.SINT32 = 17)] = "SINT32"),
    (n[(n.SINT64 = 18)] = "SINT64");
})(_ || (_ = {}));
var ft;
(function (n) {
  (n[(n.BIGINT = 0)] = "BIGINT"), (n[(n.STRING = 1)] = "STRING");
})(ft || (ft = {}));
function ct(n, e, t) {
  if (e === t) return !0;
  if (n == _.BYTES) {
    if (
      !(e instanceof Uint8Array) ||
      !(t instanceof Uint8Array) ||
      e.length !== t.length
    )
      return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  switch (n) {
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return e == t;
  }
  return !1;
}
function Kt(n, e) {
  switch (n) {
    case _.BOOL:
      return !1;
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return e == 0 ? ne.zero : "0";
    case _.DOUBLE:
    case _.FLOAT:
      return 0;
    case _.BYTES:
      return new Uint8Array(0);
    case _.STRING:
      return "";
    default:
      return 0;
  }
}
function ia(n, e) {
  switch (n) {
    case _.BOOL:
      return e === !1;
    case _.STRING:
      return e === "";
    case _.BYTES:
      return e instanceof Uint8Array && !e.byteLength;
    default:
      return e == 0;
  }
}
var ue;
(function (n) {
  (n[(n.Varint = 0)] = "Varint"),
    (n[(n.Bit64 = 1)] = "Bit64"),
    (n[(n.LengthDelimited = 2)] = "LengthDelimited"),
    (n[(n.StartGroup = 3)] = "StartGroup"),
    (n[(n.EndGroup = 4)] = "EndGroup"),
    (n[(n.Bit32 = 5)] = "Bit32");
})(ue || (ue = {}));
class Vu {
  constructor(e) {
    (this.stack = []),
      (this.textEncoder = e ?? new TextEncoder()),
      (this.chunks = []),
      (this.buf = []);
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
    let t = new Uint8Array(e),
      i = 0;
    for (let r = 0; r < this.chunks.length; r++)
      t.set(this.chunks[r], i), (i += this.chunks[r].length);
    return (this.chunks = []), t;
  }
  fork() {
    return (
      this.stack.push({ chunks: this.chunks, buf: this.buf }),
      (this.chunks = []),
      (this.buf = []),
      this
    );
  }
  join() {
    let e = this.finish(),
      t = this.stack.pop();
    if (!t) throw new Error("invalid state, fork stack empty");
    return (
      (this.chunks = t.chunks),
      (this.buf = t.buf),
      this.uint32(e.byteLength),
      this.raw(e)
    );
  }
  tag(e, t) {
    return this.uint32(((e << 3) | t) >>> 0);
  }
  raw(e) {
    return (
      this.buf.length &&
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
      this.chunks.push(e),
      this
    );
  }
  uint32(e) {
    for (Ji(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
    return this.buf.push(e), this;
  }
  int32(e) {
    return An(e), us(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    Qo(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  fixed32(e) {
    Ji(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  sfixed32(e) {
    An(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  sint32(e) {
    return An(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), us(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      r = ne.enc(e);
    return i.setInt32(0, r.lo, !0), i.setInt32(4, r.hi, !0), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      r = ne.uEnc(e);
    return i.setInt32(0, r.lo, !0), i.setInt32(4, r.hi, !0), this.raw(t);
  }
  int64(e) {
    let t = ne.enc(e);
    return vi(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = ne.enc(e),
      i = t.hi >> 31,
      r = (t.lo << 1) ^ i,
      s = ((t.hi << 1) | (t.lo >>> 31)) ^ i;
    return vi(r, s, this.buf), this;
  }
  uint64(e) {
    let t = ne.uEnc(e);
    return vi(t.lo, t.hi, this.buf), this;
  }
}
class qu {
  constructor(e, t) {
    (this.varint64 = Lu),
      (this.uint32 = ju),
      (this.buf = e),
      (this.len = e.length),
      (this.pos = 0),
      (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
      (this.textDecoder = t ?? new TextDecoder());
  }
  tag() {
    let e = this.uint32(),
      t = e >>> 3,
      i = e & 7;
    if (t <= 0 || i < 0 || i > 5)
      throw new Error("illegal tag: field no " + t + " wire type " + i);
    return [t, i];
  }
  skip(e, t) {
    let i = this.pos;
    switch (e) {
      case ue.Varint:
        for (; this.buf[this.pos++] & 128; );
        break;
      case ue.Bit64:
        this.pos += 4;
      case ue.Bit32:
        this.pos += 4;
        break;
      case ue.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case ue.StartGroup:
        for (;;) {
          const [s, o] = this.tag();
          if (o === ue.EndGroup) {
            if (t !== void 0 && s !== t)
              throw new Error("invalid end group tag");
            break;
          }
          this.skip(o, s);
        }
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(i, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let e = this.uint32();
    return (e >>> 1) ^ -(e & 1);
  }
  int64() {
    return ne.dec(...this.varint64());
  }
  uint64() {
    return ne.uDec(...this.varint64());
  }
  sint64() {
    let [e, t] = this.varint64(),
      i = -(e & 1);
    return (
      (e = ((e >>> 1) | ((t & 1) << 31)) ^ i), (t = (t >>> 1) ^ i), ne.dec(e, t)
    );
  }
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  fixed64() {
    return ne.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return ne.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  bytes() {
    let e = this.uint32(),
      t = this.pos;
    return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function zu(n, e, t, i) {
  let r;
  return {
    typeName: e,
    extendee: t,
    get field() {
      if (!r) {
        const s = typeof i == "function" ? i() : i;
        (s.name = e.split(".").pop()),
          (s.jsonName = "[".concat(e, "]")),
          (r = n.util.newFieldList([s]).list()[0]);
      }
      return r;
    },
    runtime: n,
  };
}
function ra(n) {
  const e = n.field.localName,
    t = Object.create(null);
  return (t[e] = Wu(n)), [t, () => t[e]];
}
function Wu(n) {
  const e = n.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Kt(e.T, e.L);
    case "message":
      const t = e.T,
        i = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function Gu(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t].no == e.no) return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
let Ze =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      ""
    ),
  di = [];
for (let n = 0; n < Ze.length; n++) di[Ze[n].charCodeAt(0)] = n;
di[45] = Ze.indexOf("+");
di[95] = Ze.indexOf("/");
const sa = {
  dec(n) {
    let e = (n.length * 3) / 4;
    n[n.length - 2] == "=" ? (e -= 2) : n[n.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      i = 0,
      r = 0,
      s,
      o = 0;
    for (let a = 0; a < n.length; a++) {
      if (((s = di[n.charCodeAt(a)]), s === void 0))
        switch (n[a]) {
          case "=":
            r = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (r) {
        case 0:
          (o = s), (r = 1);
          break;
        case 1:
          (t[i++] = (o << 2) | ((s & 48) >> 4)), (o = s), (r = 2);
          break;
        case 2:
          (t[i++] = ((o & 15) << 4) | ((s & 60) >> 2)), (o = s), (r = 3);
          break;
        case 3:
          (t[i++] = ((o & 3) << 6) | s), (r = 0);
          break;
      }
    }
    if (r == 1) throw Error("invalid base64 string.");
    return t.subarray(0, i);
  },
  enc(n) {
    let e = "",
      t = 0,
      i,
      r = 0;
    for (let s = 0; s < n.length; s++)
      switch (((i = n[s]), t)) {
        case 0:
          (e += Ze[i >> 2]), (r = (i & 3) << 4), (t = 1);
          break;
        case 1:
          (e += Ze[r | (i >> 4)]), (r = (i & 15) << 2), (t = 2);
          break;
        case 2:
          (e += Ze[r | (i >> 6)]), (e += Ze[i & 63]), (t = 0);
          break;
      }
    return t && ((e += Ze[r]), (e += "="), t == 1 && (e += "=")), e;
  },
};
function Ku(n, e, t) {
  aa(e, n);
  const i = e.runtime.bin.makeReadOptions(t),
    r = Gu(n.getType().runtime.bin.listUnknownFields(n), e.field),
    [s, o] = ra(e);
  for (const a of r)
    e.runtime.bin.readField(s, i.readerFactory(a.data), e.field, a.wireType, i);
  return o();
}
function Hu(n, e, t, i) {
  aa(e, n);
  const r = e.runtime.bin.makeReadOptions(i),
    s = e.runtime.bin.makeWriteOptions(i);
  if (oa(n, e)) {
    const d = n
      .getType()
      .runtime.bin.listUnknownFields(n)
      .filter((u) => u.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const u of d)
      n.getType().runtime.bin.onUnknownField(n, u.no, u.wireType, u.data);
  }
  const o = s.writerFactory();
  let a = e.field;
  !a.opt &&
    !a.repeated &&
    (a.kind == "enum" || a.kind == "scalar") &&
    (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
    e.runtime.bin.writeField(a, t, o, s);
  const c = r.readerFactory(o.finish());
  for (; c.pos < c.len; ) {
    const [d, u] = c.tag(),
      l = c.skip(u, d);
    n.getType().runtime.bin.onUnknownField(n, d, u, l);
  }
}
function oa(n, e) {
  const t = n.getType();
  return (
    e.extendee.typeName === t.typeName &&
    !!t.runtime.bin.listUnknownFields(n).find((i) => i.no == e.field.no)
  );
}
function aa(n, e) {
  ce(
    n.extendee.typeName == e.getType().typeName,
    "extension "
      .concat(n.typeName, " can only be applied to message ")
      .concat(n.extendee.typeName)
  );
}
function ca(n, e) {
  const t = n.localName;
  if (n.repeated) return e[t].length > 0;
  if (n.oneof) return e[n.oneof.localName].case === t;
  switch (n.kind) {
    case "enum":
    case "scalar":
      return n.opt || n.req
        ? e[t] !== void 0
        : n.kind == "enum"
        ? e[t] !== n.T.values[0].no
        : !ia(n.T, e[t]);
    case "message":
      return e[t] !== void 0;
    case "map":
      return Object.keys(e[t]).length > 0;
  }
}
function ls(n, e) {
  const t = n.localName,
    i = !n.opt && !n.req;
  if (n.repeated) e[t] = [];
  else if (n.oneof) e[n.oneof.localName] = { case: void 0 };
  else
    switch (n.kind) {
      case "map":
        e[t] = {};
        break;
      case "enum":
        e[t] = i ? n.T.values[0].no : void 0;
        break;
      case "scalar":
        e[t] = i ? Kt(n.T, n.L) : void 0;
        break;
      case "message":
        e[t] = void 0;
        break;
    }
}
function vt(n, e) {
  if (
    n === null ||
    typeof n != "object" ||
    !Object.getOwnPropertyNames(wr.prototype).every(
      (i) => i in n && typeof n[i] == "function"
    )
  )
    return !1;
  const t = n.getType();
  return t === null ||
    typeof t != "function" ||
    !("typeName" in t) ||
    typeof t.typeName != "string"
    ? !1
    : e === void 0
    ? !0
    : t.typeName == e.typeName;
}
function da(n, e) {
  return vt(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
_.DOUBLE,
  _.FLOAT,
  _.INT64,
  _.UINT64,
  _.INT32,
  _.UINT32,
  _.BOOL,
  _.STRING,
  _.BYTES;
const hs = { ignoreUnknownFields: !1 },
  fs = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0,
  };
function Ju(n) {
  return n ? Object.assign(Object.assign({}, hs), n) : hs;
}
function $u(n) {
  return n ? Object.assign(Object.assign({}, fs), n) : fs;
}
const $n = Symbol(),
  Mn = Symbol();
function Qu() {
  return {
    makeReadOptions: Ju,
    makeWriteOptions: $u,
    readMessage(n, e, t, i) {
      if (e == null || Array.isArray(e) || typeof e != "object")
        throw new Error(
          "cannot decode message "
            .concat(n.typeName, " from JSON: ")
            .concat(Ge(e))
        );
      i = i ?? new n();
      const r = new Map(),
        s = t.typeRegistry;
      for (const [o, a] of Object.entries(e)) {
        const c = n.fields.findJsonName(o);
        if (c) {
          if (c.oneof) {
            if (a === null && c.kind == "scalar") continue;
            const d = r.get(c.oneof);
            if (d !== void 0)
              throw new Error(
                "cannot decode message "
                  .concat(n.typeName, ' from JSON: multiple keys for oneof "')
                  .concat(c.oneof.name, '" present: "')
                  .concat(d, '", "')
                  .concat(o, '"')
              );
            r.set(c.oneof, o);
          }
          ps(i, a, c, t, n);
        } else {
          let d = !1;
          if (s?.findExtension && o.startsWith("[") && o.endsWith("]")) {
            const u = s.findExtension(o.substring(1, o.length - 1));
            if (u && u.extendee.typeName == n.typeName) {
              d = !0;
              const [l, h] = ra(u);
              ps(l, a, u.field, t, u), Hu(i, u, h(), t);
            }
          }
          if (!d && !t.ignoreUnknownFields)
            throw new Error(
              "cannot decode message "
                .concat(n.typeName, ' from JSON: key "')
                .concat(o, '" is unknown')
            );
        }
      }
      return i;
    },
    writeMessage(n, e) {
      const t = n.getType(),
        i = {};
      let r;
      try {
        for (r of t.fields.byNumber()) {
          if (!ca(r, n)) {
            if (r.req) throw "required field not set";
            if (!e.emitDefaultValues || !Xu(r)) continue;
          }
          const o = r.oneof ? n[r.oneof.localName].value : n[r.localName],
            a = ms(r, o, e);
          a !== void 0 && (i[e.useProtoFieldName ? r.name : r.jsonName] = a);
        }
        const s = e.typeRegistry;
        if (s?.findExtensionFor)
          for (const o of t.runtime.bin.listUnknownFields(n)) {
            const a = s.findExtensionFor(t.typeName, o.no);
            if (a && oa(n, a)) {
              const c = Ku(n, a, e),
                d = ms(a.field, c, e);
              d !== void 0 && (i[a.field.jsonName] = d);
            }
          }
      } catch (s) {
        const o = r
            ? "cannot encode field "
                .concat(t.typeName, ".")
                .concat(r.name, " to JSON")
            : "cannot encode message ".concat(t.typeName, " to JSON"),
          a = s instanceof Error ? s.message : String(s);
        throw new Error(o + (a.length > 0 ? ": ".concat(a) : ""));
      }
      return i;
    },
    readScalar(n, e, t) {
      return dn(n, e, t ?? ft.BIGINT, !0);
    },
    writeScalar(n, e, t) {
      if (e !== void 0 && (t || ia(n, e))) return On(n, e);
    },
    debug: Ge,
  };
}
function Ge(n) {
  if (n === null) return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100
        ? "string"
        : '"'.concat(n.split('"').join('\\"'), '"');
    default:
      return String(n);
  }
}
function ps(n, e, t, i, r) {
  let s = t.localName;
  if (t.repeated) {
    if ((ce(t.kind != "map"), e === null)) return;
    if (!Array.isArray(e))
      throw new Error(
        "cannot decode field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Ge(e))
      );
    const o = n[s];
    for (const a of e) {
      if (a === null)
        throw new Error(
          "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: ")
            .concat(Ge(a))
        );
      switch (t.kind) {
        case "message":
          o.push(t.T.fromJson(a, i));
          break;
        case "enum":
          const c = bi(t.T, a, i.ignoreUnknownFields, !0);
          c !== Mn && o.push(c);
          break;
        case "scalar":
          try {
            o.push(dn(t.T, a, t.L, !0));
          } catch (d) {
            let u = "cannot decode field "
              .concat(r.typeName, ".")
              .concat(t.name, " from JSON: ")
              .concat(Ge(a));
            throw (
              (d instanceof Error &&
                d.message.length > 0 &&
                (u += ": ".concat(d.message)),
              new Error(u))
            );
          }
          break;
      }
    }
  } else if (t.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e))
      throw new Error(
        "cannot decode field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Ge(e))
      );
    const o = n[s];
    for (const [a, c] of Object.entries(e)) {
      if (c === null)
        throw new Error(
          "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: map value null")
        );
      let d;
      try {
        d = Yu(t.K, a);
      } catch (u) {
        let l = "cannot decode map key for field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Ge(e));
        throw (
          (u instanceof Error &&
            u.message.length > 0 &&
            (l += ": ".concat(u.message)),
          new Error(l))
        );
      }
      switch (t.V.kind) {
        case "message":
          o[d] = t.V.T.fromJson(c, i);
          break;
        case "enum":
          const u = bi(t.V.T, c, i.ignoreUnknownFields, !0);
          u !== Mn && (o[d] = u);
          break;
        case "scalar":
          try {
            o[d] = dn(t.V.T, c, ft.BIGINT, !0);
          } catch (l) {
            let h = "cannot decode map value for field "
              .concat(r.typeName, ".")
              .concat(t.name, " from JSON: ")
              .concat(Ge(e));
            throw (
              (l instanceof Error &&
                l.message.length > 0 &&
                (h += ": ".concat(l.message)),
              new Error(h))
            );
          }
          break;
      }
    }
  } else
    switch (
      (t.oneof && ((n = n[t.oneof.localName] = { case: s }), (s = "value")),
      t.kind)
    ) {
      case "message":
        const o = t.T;
        if (e === null && o.typeName != "google.protobuf.Value") return;
        let a = n[s];
        vt(a)
          ? a.fromJson(e, i)
          : ((n[s] = a = o.fromJson(e, i)),
            o.fieldWrapper &&
              !t.oneof &&
              (n[s] = o.fieldWrapper.unwrapField(a)));
        break;
      case "enum":
        const c = bi(t.T, e, i.ignoreUnknownFields, !1);
        switch (c) {
          case $n:
            ls(t, n);
            break;
          case Mn:
            break;
          default:
            n[s] = c;
            break;
        }
        break;
      case "scalar":
        try {
          const d = dn(t.T, e, t.L, !1);
          switch (d) {
            case $n:
              ls(t, n);
              break;
            default:
              n[s] = d;
              break;
          }
        } catch (d) {
          let u = "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: ")
            .concat(Ge(e));
          throw (
            (d instanceof Error &&
              d.message.length > 0 &&
              (u += ": ".concat(d.message)),
            new Error(u))
          );
        }
        break;
    }
}
function Yu(n, e) {
  if (n === _.BOOL)
    switch (e) {
      case "true":
        e = !0;
        break;
      case "false":
        e = !1;
        break;
    }
  return dn(n, e, ft.BIGINT, !0).toString();
}
function dn(n, e, t, i) {
  if (e === null) return i ? Kt(n, t) : $n;
  switch (n) {
    case _.DOUBLE:
    case _.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (
        e === "" ||
        (typeof e == "string" && e.trim().length !== e.length) ||
        (typeof e != "string" && typeof e != "number")
      )
        break;
      const r = Number(e);
      if (Number.isNaN(r) || !Number.isFinite(r)) break;
      return n == _.FLOAT && Qo(r), r;
    case _.INT32:
    case _.FIXED32:
    case _.SFIXED32:
    case _.SINT32:
    case _.UINT32:
      let s;
      if (
        (typeof e == "number"
          ? (s = e)
          : typeof e == "string" &&
            e.length > 0 &&
            e.trim().length === e.length &&
            (s = Number(e)),
        s === void 0)
      )
        break;
      return n == _.UINT32 || n == _.FIXED32 ? Ji(s) : An(s), s;
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = ne.parse(e);
      return t ? o.toString() : o;
    case _.FIXED64:
    case _.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const a = ne.uParse(e);
      return t ? a.toString() : a;
    case _.BOOL:
      if (typeof e != "boolean") break;
      return e;
    case _.STRING:
      if (typeof e != "string") break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case _.BYTES:
      if (e === "") return new Uint8Array(0);
      if (typeof e != "string") break;
      return sa.dec(e);
  }
  throw new Error();
}
function bi(n, e, t, i) {
  if (e === null)
    return n.typeName == "google.protobuf.NullValue"
      ? 0
      : i
      ? n.values[0].no
      : $n;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const r = n.findName(e);
      if (r !== void 0) return r.no;
      if (t) return Mn;
      break;
  }
  throw new Error(
    "cannot decode enum ".concat(n.typeName, " from JSON: ").concat(Ge(e))
  );
}
function Xu(n) {
  return n.repeated || n.kind == "map"
    ? !0
    : !(n.oneof || n.kind == "message" || n.opt || n.req);
}
function ms(n, e, t) {
  if (n.kind == "map") {
    ce(typeof e == "object" && e != null);
    const i = {},
      r = Object.entries(e);
    switch (n.V.kind) {
      case "scalar":
        for (const [o, a] of r) i[o.toString()] = On(n.V.T, a);
        break;
      case "message":
        for (const [o, a] of r) i[o.toString()] = a.toJson(t);
        break;
      case "enum":
        const s = n.V.T;
        for (const [o, a] of r) i[o.toString()] = yi(s, a, t.enumAsInteger);
        break;
    }
    return t.emitDefaultValues || r.length > 0 ? i : void 0;
  }
  if (n.repeated) {
    ce(Array.isArray(e));
    const i = [];
    switch (n.kind) {
      case "scalar":
        for (let r = 0; r < e.length; r++) i.push(On(n.T, e[r]));
        break;
      case "enum":
        for (let r = 0; r < e.length; r++)
          i.push(yi(n.T, e[r], t.enumAsInteger));
        break;
      case "message":
        for (let r = 0; r < e.length; r++) i.push(e[r].toJson(t));
        break;
    }
    return t.emitDefaultValues || i.length > 0 ? i : void 0;
  }
  switch (n.kind) {
    case "scalar":
      return On(n.T, e);
    case "enum":
      return yi(n.T, e, t.enumAsInteger);
    case "message":
      return da(n.T, e).toJson(t);
  }
}
function yi(n, e, t) {
  var i;
  if ((ce(typeof e == "number"), n.typeName == "google.protobuf.NullValue"))
    return null;
  if (t) return e;
  const r = n.findNumber(e);
  return (i = r?.name) !== null && i !== void 0 ? i : e;
}
function On(n, e) {
  switch (n) {
    case _.INT32:
    case _.SFIXED32:
    case _.SINT32:
    case _.FIXED32:
    case _.UINT32:
      return ce(typeof e == "number"), e;
    case _.FLOAT:
    case _.DOUBLE:
      return (
        ce(typeof e == "number"),
        Number.isNaN(e)
          ? "NaN"
          : e === Number.POSITIVE_INFINITY
          ? "Infinity"
          : e === Number.NEGATIVE_INFINITY
          ? "-Infinity"
          : e
      );
    case _.STRING:
      return ce(typeof e == "string"), e;
    case _.BOOL:
      return ce(typeof e == "boolean"), e;
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return (
        ce(
          typeof e == "bigint" || typeof e == "string" || typeof e == "number"
        ),
        e.toString()
      );
    case _.BYTES:
      return ce(e instanceof Uint8Array), sa.enc(e);
  }
}
const At = Symbol("@bufbuild/protobuf/unknown-fields"),
  gs = { readUnknownFields: !0, readerFactory: (n) => new qu(n) },
  vs = { writeUnknownFields: !0, writerFactory: () => new Vu() };
function Zu(n) {
  return n ? Object.assign(Object.assign({}, gs), n) : gs;
}
function el(n) {
  return n ? Object.assign(Object.assign({}, vs), n) : vs;
}
function tl() {
  return {
    makeReadOptions: Zu,
    makeWriteOptions: el,
    listUnknownFields(n) {
      var e;
      return (e = n[At]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[At];
    },
    writeUnknownFields(n, e) {
      const i = n[At];
      if (i) for (const r of i) e.tag(r.no, r.wireType).raw(r.data);
    },
    onUnknownField(n, e, t, i) {
      const r = n;
      Array.isArray(r[At]) || (r[At] = []),
        r[At].push({ no: e, wireType: t, data: i });
    },
    readMessage(n, e, t, i, r) {
      const s = n.getType(),
        o = r ? e.len : e.pos + t;
      let a, c;
      for (
        ;
        e.pos < o && (([a, c] = e.tag()), !(r === !0 && c == ue.EndGroup));

      ) {
        const d = s.fields.find(a);
        if (!d) {
          const u = e.skip(c, a);
          i.readUnknownFields && this.onUnknownField(n, a, c, u);
          continue;
        }
        bs(n, e, d, c, i);
      }
      if (r && (c != ue.EndGroup || a !== t))
        throw new Error("invalid end group tag");
    },
    readField: bs,
    writeMessage(n, e, t) {
      const i = n.getType();
      for (const r of i.fields.byNumber()) {
        if (!ca(r, n)) {
          if (r.req)
            throw new Error(
              "cannot encode field "
                .concat(i.typeName, ".")
                .concat(r.name, " to binary: required field not set")
            );
          continue;
        }
        const s = r.oneof ? n[r.oneof.localName].value : n[r.localName];
        ys(r, s, e, t);
      }
      return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
    },
    writeField(n, e, t, i) {
      e !== void 0 && ys(n, e, t, i);
    },
  };
}
function bs(n, e, t, i, r) {
  let { repeated: s, localName: o } = t;
  switch (
    (t.oneof &&
      ((n = n[t.oneof.localName]),
      n.case != o && delete n.value,
      (n.case = o),
      (o = "value")),
    t.kind)
  ) {
    case "scalar":
    case "enum":
      const a = t.kind == "enum" ? _.INT32 : t.T;
      let c = Qn;
      if ((t.kind == "scalar" && t.L > 0 && (c = il), s)) {
        let h = n[o];
        if (i == ue.LengthDelimited && a != _.STRING && a != _.BYTES) {
          let g = e.uint32() + e.pos;
          for (; e.pos < g; ) h.push(c(e, a));
        } else h.push(c(e, a));
      } else n[o] = c(e, a);
      break;
    case "message":
      const d = t.T;
      s
        ? n[o].push(Nn(e, new d(), r, t))
        : vt(n[o])
        ? Nn(e, n[o], r, t)
        : ((n[o] = Nn(e, new d(), r, t)),
          d.fieldWrapper &&
            !t.oneof &&
            !t.repeated &&
            (n[o] = d.fieldWrapper.unwrapField(n[o])));
      break;
    case "map":
      let [u, l] = nl(t, e, r);
      n[o][u] = l;
      break;
  }
}
function Nn(n, e, t, i) {
  const r = e.getType().runtime.bin,
    s = i?.delimited;
  return r.readMessage(e, n, s ? i.no : n.uint32(), t, s), e;
}
function nl(n, e, t) {
  const i = e.uint32(),
    r = e.pos + i;
  let s, o;
  for (; e.pos < r; ) {
    const [a] = e.tag();
    switch (a) {
      case 1:
        s = Qn(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            o = Qn(e, n.V.T);
            break;
          case "enum":
            o = e.int32();
            break;
          case "message":
            o = Nn(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (
    (s === void 0 && (s = Kt(n.K, ft.BIGINT)),
    typeof s != "string" && typeof s != "number" && (s = s.toString()),
    o === void 0)
  )
    switch (n.V.kind) {
      case "scalar":
        o = Kt(n.V.T, ft.BIGINT);
        break;
      case "enum":
        o = n.V.T.values[0].no;
        break;
      case "message":
        o = new n.V.T();
        break;
    }
  return [s, o];
}
function il(n, e) {
  const t = Qn(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function Qn(n, e) {
  switch (e) {
    case _.STRING:
      return n.string();
    case _.BOOL:
      return n.bool();
    case _.DOUBLE:
      return n.double();
    case _.FLOAT:
      return n.float();
    case _.INT32:
      return n.int32();
    case _.INT64:
      return n.int64();
    case _.UINT64:
      return n.uint64();
    case _.FIXED64:
      return n.fixed64();
    case _.BYTES:
      return n.bytes();
    case _.FIXED32:
      return n.fixed32();
    case _.SFIXED32:
      return n.sfixed32();
    case _.SFIXED64:
      return n.sfixed64();
    case _.SINT64:
      return n.sint64();
    case _.UINT32:
      return n.uint32();
    case _.SINT32:
      return n.sint32();
  }
}
function ys(n, e, t, i) {
  ce(e !== void 0);
  const r = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let s = n.kind == "enum" ? _.INT32 : n.T;
      if (r)
        if ((ce(Array.isArray(e)), n.packed)) sl(t, s, n.no, e);
        else for (const o of e) un(t, s, n.no, o);
      else un(t, s, n.no, e);
      break;
    case "message":
      if (r) {
        ce(Array.isArray(e));
        for (const o of e) ks(t, i, n, o);
      } else ks(t, i, n, e);
      break;
    case "map":
      ce(typeof e == "object" && e != null);
      for (const [o, a] of Object.entries(e)) rl(t, i, n, o, a);
      break;
  }
}
function rl(n, e, t, i, r) {
  n.tag(t.no, ue.LengthDelimited), n.fork();
  let s = i;
  switch (t.K) {
    case _.INT32:
    case _.FIXED32:
    case _.UINT32:
    case _.SFIXED32:
    case _.SINT32:
      s = Number.parseInt(i);
      break;
    case _.BOOL:
      ce(i == "true" || i == "false"), (s = i == "true");
      break;
  }
  switch ((un(n, t.K, 1, s), t.V.kind)) {
    case "scalar":
      un(n, t.V.T, 2, r);
      break;
    case "enum":
      un(n, _.INT32, 2, r);
      break;
    case "message":
      ce(r !== void 0), n.tag(2, ue.LengthDelimited).bytes(r.toBinary(e));
      break;
  }
  n.join();
}
function ks(n, e, t, i) {
  const r = da(t.T, i);
  t.delimited
    ? n.tag(t.no, ue.StartGroup).raw(r.toBinary(e)).tag(t.no, ue.EndGroup)
    : n.tag(t.no, ue.LengthDelimited).bytes(r.toBinary(e));
}
function un(n, e, t, i) {
  ce(i !== void 0);
  let [r, s] = ua(e);
  n.tag(t, r)[s](i);
}
function sl(n, e, t, i) {
  if (!i.length) return;
  n.tag(t, ue.LengthDelimited).fork();
  let [, r] = ua(e);
  for (let s = 0; s < i.length; s++) n[r](i[s]);
  n.join();
}
function ua(n) {
  let e = ue.Varint;
  switch (n) {
    case _.BYTES:
    case _.STRING:
      e = ue.LengthDelimited;
      break;
    case _.DOUBLE:
    case _.FIXED64:
    case _.SFIXED64:
      e = ue.Bit64;
      break;
    case _.FIXED32:
    case _.SFIXED32:
    case _.FLOAT:
      e = ue.Bit32;
      break;
  }
  const t = _[n].toLowerCase();
  return [e, t];
}
function ol() {
  return {
    setEnumType: Xo,
    initPartial(n, e) {
      if (n === void 0) return;
      const t = e.getType();
      for (const i of t.fields.byMember()) {
        const r = i.localName,
          s = e,
          o = n;
        if (o[r] != null)
          switch (i.kind) {
            case "oneof":
              const a = o[r].case;
              if (a === void 0) continue;
              const c = i.findField(a);
              let d = o[r].value;
              c && c.kind == "message" && !vt(d, c.T)
                ? (d = new c.T(d))
                : c && c.kind === "scalar" && c.T === _.BYTES && (d = Zt(d)),
                (s[r] = { case: a, value: d });
              break;
            case "scalar":
            case "enum":
              let u = o[r];
              i.T === _.BYTES && (u = i.repeated ? u.map(Zt) : Zt(u)),
                (s[r] = u);
              break;
            case "map":
              switch (i.V.kind) {
                case "scalar":
                case "enum":
                  if (i.V.T === _.BYTES)
                    for (const [f, g] of Object.entries(o[r])) s[r][f] = Zt(g);
                  else Object.assign(s[r], o[r]);
                  break;
                case "message":
                  const h = i.V.T;
                  for (const f of Object.keys(o[r])) {
                    let g = o[r][f];
                    h.fieldWrapper || (g = new h(g)), (s[r][f] = g);
                  }
                  break;
              }
              break;
            case "message":
              const l = i.T;
              if (i.repeated) s[r] = o[r].map((h) => (vt(h, l) ? h : new l(h)));
              else {
                const h = o[r];
                l.fieldWrapper
                  ? l.typeName === "google.protobuf.BytesValue"
                    ? (s[r] = Zt(h))
                    : (s[r] = h)
                  : (s[r] = vt(h, l) ? h : new l(h));
              }
              break;
          }
      }
    },
    equals(n, e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : n.fields.byMember().every((i) => {
            const r = e[i.localName],
              s = t[i.localName];
            if (i.repeated) {
              if (r.length !== s.length) return !1;
              switch (i.kind) {
                case "message":
                  return r.every((o, a) => i.T.equals(o, s[a]));
                case "scalar":
                  return r.every((o, a) => ct(i.T, o, s[a]));
                case "enum":
                  return r.every((o, a) => ct(_.INT32, o, s[a]));
              }
              throw new Error("repeated cannot contain ".concat(i.kind));
            }
            switch (i.kind) {
              case "message":
                return i.T.equals(r, s);
              case "enum":
                return ct(_.INT32, r, s);
              case "scalar":
                return ct(i.T, r, s);
              case "oneof":
                if (r.case !== s.case) return !1;
                const o = i.findField(r.case);
                if (o === void 0) return !0;
                switch (o.kind) {
                  case "message":
                    return o.T.equals(r.value, s.value);
                  case "enum":
                    return ct(_.INT32, r.value, s.value);
                  case "scalar":
                    return ct(o.T, r.value, s.value);
                }
                throw new Error("oneof cannot contain ".concat(o.kind));
              case "map":
                const a = Object.keys(r).concat(Object.keys(s));
                switch (i.V.kind) {
                  case "message":
                    const c = i.V.T;
                    return a.every((u) => c.equals(r[u], s[u]));
                  case "enum":
                    return a.every((u) => ct(_.INT32, r[u], s[u]));
                  case "scalar":
                    const d = i.V.T;
                    return a.every((u) => ct(d, r[u], s[u]));
                }
                break;
            }
          });
    },
    clone(n) {
      const e = n.getType(),
        t = new e(),
        i = t;
      for (const r of e.fields.byMember()) {
        const s = n[r.localName];
        let o;
        if (r.repeated) o = s.map(Rn);
        else if (r.kind == "map") {
          o = i[r.localName];
          for (const [a, c] of Object.entries(s)) o[a] = Rn(c);
        } else
          r.kind == "oneof"
            ? (o = r.findField(s.case)
                ? { case: s.case, value: Rn(s.value) }
                : { case: void 0 })
            : (o = Rn(s));
        i[r.localName] = o;
      }
      for (const r of e.runtime.bin.listUnknownFields(n))
        e.runtime.bin.onUnknownField(i, r.no, r.wireType, r.data);
      return t;
    },
  };
}
function Rn(n) {
  if (n === void 0) return n;
  if (vt(n)) return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Zt(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
function al(n, e, t) {
  return {
    syntax: n,
    json: Qu(),
    bin: tl(),
    util: Object.assign(Object.assign({}, ol()), {
      newFieldList: e,
      initFields: t,
    }),
    makeMessageType(i, r, s) {
      return Nu(this, i, r, s);
    },
    makeEnum: Ou,
    makeEnumType: Zo,
    getEnumType: Mu,
    makeExtension(i, r, s) {
      return zu(this, i, r, s);
    },
  };
}
class cl {
  constructor(e, t) {
    (this._fields = e), (this._normalizer = t);
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const i of this.list()) t[i.jsonName] = t[i.name] = i;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const i of this.list()) t[i.no] = i;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return (
      this.numbersAsc ||
        (this.numbersAsc = this.list()
          .concat()
          .sort((e, t) => e.no - t.no)),
      this.numbersAsc
    );
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const i of this.list())
        i.oneof ? i.oneof !== t && ((t = i.oneof), e.push(t)) : e.push(i);
    }
    return this.members;
  }
}
function la(n, e) {
  const t = ha(n);
  return e ? t : pl(fl(t));
}
function dl(n) {
  return la(n, !1);
}
const ul = ha;
function ha(n) {
  let e = !1;
  const t = [];
  for (let i = 0; i < n.length; i++) {
    let r = n.charAt(i);
    switch (r) {
      case "_":
        e = !0;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(r), (e = !1);
        break;
      default:
        e && ((e = !1), (r = r.toUpperCase())), t.push(r);
        break;
    }
  }
  return t.join("");
}
const ll = new Set(["constructor", "toString", "toJSON", "valueOf"]),
  hl = new Set([
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    "toObject",
  ]),
  fa = (n) => "".concat(n, "$"),
  fl = (n) => (hl.has(n) ? fa(n) : n),
  pl = (n) => (ll.has(n) ? fa(n) : n);
class ml {
  constructor(e) {
    (this.kind = "oneof"),
      (this.repeated = !1),
      (this.packed = !1),
      (this.opt = !1),
      (this.req = !1),
      (this.default = void 0),
      (this.fields = []),
      (this.name = e),
      (this.localName = dl(e));
  }
  addField(e) {
    ce(
      e.oneof === this,
      "field ".concat(e.name, " not one of ").concat(this.name)
    ),
      this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = Object.create(null);
      for (let t = 0; t < this.fields.length; t++)
        this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
function gl(n, e) {
  var t, i, r, s, o, a;
  const c = [];
  let d;
  for (const u of typeof n == "function" ? n() : n) {
    const l = u;
    if (
      ((l.localName = la(u.name, u.oneof !== void 0)),
      (l.jsonName = (t = u.jsonName) !== null && t !== void 0 ? t : ul(u.name)),
      (l.repeated = (i = u.repeated) !== null && i !== void 0 ? i : !1),
      u.kind == "scalar" &&
        (l.L = (r = u.L) !== null && r !== void 0 ? r : ft.BIGINT),
      (l.delimited = (s = u.delimited) !== null && s !== void 0 ? s : !1),
      (l.req = (o = u.req) !== null && o !== void 0 ? o : !1),
      (l.opt = (a = u.opt) !== null && a !== void 0 ? a : !1),
      u.packed === void 0 &&
        (l.packed =
          u.kind == "enum" ||
          (u.kind == "scalar" && u.T != _.BYTES && u.T != _.STRING)),
      u.oneof !== void 0)
    ) {
      const h = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
      (!d || d.name != h) && (d = new ml(h)), (l.oneof = d), d.addField(l);
    }
    c.push(l);
  }
  return c;
}
const w = al(
  "proto3",
  (n) => new cl(n, (e) => gl(e)),
  (n) => {
    for (const e of n.getType().fields.byMember()) {
      if (e.opt) continue;
      const t = e.localName,
        i = n;
      if (e.repeated) {
        i[t] = [];
        continue;
      }
      switch (e.kind) {
        case "oneof":
          i[t] = { case: void 0 };
          break;
        case "enum":
          i[t] = 0;
          break;
        case "map":
          i[t] = {};
          break;
        case "scalar":
          i[t] = Kt(e.T, e.L);
          break;
      }
    }
  }
);
class Ce extends wr {
  constructor(e) {
    super(),
      (this.seconds = ne.zero),
      (this.nanos = 0),
      w.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: ".concat(
          w.json.debug(e)
        )
      );
    const i = e.match(
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/
    );
    if (!i)
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string"
      );
    const r = Date.parse(
      i[1] +
        "-" +
        i[2] +
        "-" +
        i[3] +
        "T" +
        i[4] +
        ":" +
        i[5] +
        ":" +
        i[6] +
        (i[8] ? i[8] : "Z")
    );
    if (Number.isNaN(r))
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string"
      );
    if (
      r < Date.parse("0001-01-01T00:00:00Z") ||
      r > Date.parse("9999-12-31T23:59:59Z")
    )
      throw new Error(
        "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive"
      );
    return (
      (this.seconds = ne.parse(r / 1e3)),
      (this.nanos = 0),
      i[7] &&
        (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9),
      this
    );
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (
      t < Date.parse("0001-01-01T00:00:00Z") ||
      t > Date.parse("9999-12-31T23:59:59Z")
    )
      throw new Error(
        "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive"
      );
    if (this.nanos < 0)
      throw new Error(
        "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative"
      );
    let i = "Z";
    if (this.nanos > 0) {
      const r = (this.nanos + 1e9).toString().substring(1);
      r.substring(3) === "000000"
        ? (i = "." + r.substring(0, 3) + "Z")
        : r.substring(6) === "000"
        ? (i = "." + r.substring(0, 6) + "Z")
        : (i = "." + r + "Z");
    }
    return new Date(t).toISOString().replace(".000Z", i);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Ce.fromDate(new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Ce({
      seconds: ne.parse(Math.floor(t / 1e3)),
      nanos: (t % 1e3) * 1e6,
    });
  }
  static fromBinary(e, t) {
    return new Ce().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ce().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ce().fromJsonString(e, t);
  }
  static equals(e, t) {
    return w.util.equals(Ce, e, t);
  }
}
Ce.runtime = w;
Ce.typeName = "google.protobuf.Timestamp";
Ce.fields = w.util.newFieldList(() => [
  { no: 1, name: "seconds", kind: "scalar", T: 3 },
  { no: 2, name: "nanos", kind: "scalar", T: 5 },
]);
const vl = w.makeMessageType("livekit.MetricsBatch", () => [
    { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
    { no: 2, name: "normalized_timestamp", kind: "message", T: Ce },
    { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: !0 },
    { no: 4, name: "time_series", kind: "message", T: bl, repeated: !0 },
    { no: 5, name: "events", kind: "message", T: kl, repeated: !0 },
  ]),
  bl = w.makeMessageType("livekit.TimeSeriesMetric", () => [
    { no: 1, name: "label", kind: "scalar", T: 13 },
    { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
    { no: 3, name: "track_sid", kind: "scalar", T: 13 },
    { no: 4, name: "samples", kind: "message", T: yl, repeated: !0 },
    { no: 5, name: "rid", kind: "scalar", T: 13 },
  ]),
  yl = w.makeMessageType("livekit.MetricSample", () => [
    { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
    { no: 2, name: "normalized_timestamp", kind: "message", T: Ce },
    { no: 3, name: "value", kind: "scalar", T: 2 },
  ]),
  kl = w.makeMessageType("livekit.EventMetric", () => [
    { no: 1, name: "label", kind: "scalar", T: 13 },
    { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
    { no: 3, name: "track_sid", kind: "scalar", T: 13 },
    { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 },
    { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: !0 },
    { no: 6, name: "normalized_start_timestamp", kind: "message", T: Ce },
    {
      no: 7,
      name: "normalized_end_timestamp",
      kind: "message",
      T: Ce,
      opt: !0,
    },
    { no: 8, name: "metadata", kind: "scalar", T: 9 },
    { no: 9, name: "rid", kind: "scalar", T: 13 },
  ]),
  Fe = w.makeEnum("livekit.TrackType", [
    { no: 0, name: "AUDIO" },
    { no: 1, name: "VIDEO" },
    { no: 2, name: "DATA" },
  ]),
  ye = w.makeEnum("livekit.TrackSource", [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "CAMERA" },
    { no: 2, name: "MICROPHONE" },
    { no: 3, name: "SCREEN_SHARE" },
    { no: 4, name: "SCREEN_SHARE_AUDIO" },
  ]),
  Er = w.makeEnum("livekit.VideoQuality", [
    { no: 0, name: "LOW" },
    { no: 1, name: "MEDIUM" },
    { no: 2, name: "HIGH" },
    { no: 3, name: "OFF" },
  ]),
  an = w.makeEnum("livekit.ConnectionQuality", [
    { no: 0, name: "POOR" },
    { no: 1, name: "GOOD" },
    { no: 2, name: "EXCELLENT" },
    { no: 3, name: "LOST" },
  ]),
  gn = w.makeEnum("livekit.ClientConfigSetting", [
    { no: 0, name: "UNSET" },
    { no: 1, name: "DISABLED" },
    { no: 2, name: "ENABLED" },
  ]),
  jt = w.makeEnum("livekit.DisconnectReason", [
    { no: 0, name: "UNKNOWN_REASON" },
    { no: 1, name: "CLIENT_INITIATED" },
    { no: 2, name: "DUPLICATE_IDENTITY" },
    { no: 3, name: "SERVER_SHUTDOWN" },
    { no: 4, name: "PARTICIPANT_REMOVED" },
    { no: 5, name: "ROOM_DELETED" },
    { no: 6, name: "STATE_MISMATCH" },
    { no: 7, name: "JOIN_FAILURE" },
    { no: 8, name: "MIGRATION" },
    { no: 9, name: "SIGNAL_CLOSE" },
    { no: 10, name: "ROOM_CLOSED" },
    { no: 11, name: "USER_UNAVAILABLE" },
    { no: 12, name: "USER_REJECTED" },
  ]),
  Dt = w.makeEnum("livekit.ReconnectReason", [
    { no: 0, name: "RR_UNKNOWN" },
    { no: 1, name: "RR_SIGNAL_DISCONNECTED" },
    { no: 2, name: "RR_PUBLISHER_FAILED" },
    { no: 3, name: "RR_SUBSCRIBER_FAILED" },
    { no: 4, name: "RR_SWITCH_CANDIDATE" },
  ]),
  Sl = w.makeEnum("livekit.SubscriptionError", [
    { no: 0, name: "SE_UNKNOWN" },
    { no: 1, name: "SE_CODEC_UNSUPPORTED" },
    { no: 2, name: "SE_TRACK_NOTFOUND" },
  ]),
  Ke = w.makeEnum("livekit.AudioTrackFeature", [
    { no: 0, name: "TF_STEREO" },
    { no: 1, name: "TF_NO_DTX" },
    { no: 2, name: "TF_AUTO_GAIN_CONTROL" },
    { no: 3, name: "TF_ECHO_CANCELLATION" },
    { no: 4, name: "TF_NOISE_SUPPRESSION" },
    { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" },
  ]),
  Rr = w.makeMessageType("livekit.Room", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 3, name: "empty_timeout", kind: "scalar", T: 13 },
    { no: 14, name: "departure_timeout", kind: "scalar", T: 13 },
    { no: 4, name: "max_participants", kind: "scalar", T: 13 },
    { no: 5, name: "creation_time", kind: "scalar", T: 3 },
    { no: 6, name: "turn_password", kind: "scalar", T: 9 },
    { no: 7, name: "enabled_codecs", kind: "message", T: Yn, repeated: !0 },
    { no: 8, name: "metadata", kind: "scalar", T: 9 },
    { no: 9, name: "num_participants", kind: "scalar", T: 13 },
    { no: 11, name: "num_publishers", kind: "scalar", T: 13 },
    { no: 10, name: "active_recording", kind: "scalar", T: 8 },
    { no: 13, name: "version", kind: "message", T: Pa },
  ]),
  Yn = w.makeMessageType("livekit.Codec", () => [
    { no: 1, name: "mime", kind: "scalar", T: 9 },
    { no: 2, name: "fmtp_line", kind: "scalar", T: 9 },
  ]),
  Tl = w.makeMessageType("livekit.ParticipantPermission", () => [
    { no: 1, name: "can_subscribe", kind: "scalar", T: 8 },
    { no: 2, name: "can_publish", kind: "scalar", T: 8 },
    { no: 3, name: "can_publish_data", kind: "scalar", T: 8 },
    {
      no: 9,
      name: "can_publish_sources",
      kind: "enum",
      T: w.getEnumType(ye),
      repeated: !0,
    },
    { no: 7, name: "hidden", kind: "scalar", T: 8 },
    { no: 8, name: "recorder", kind: "scalar", T: 8 },
    { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 },
    { no: 11, name: "agent", kind: "scalar", T: 8 },
    { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 },
  ]),
  vn = w.makeMessageType("livekit.ParticipantInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "identity", kind: "scalar", T: 9 },
    { no: 3, name: "state", kind: "enum", T: w.getEnumType($i) },
    { no: 4, name: "tracks", kind: "message", T: Ut, repeated: !0 },
    { no: 5, name: "metadata", kind: "scalar", T: 9 },
    { no: 6, name: "joined_at", kind: "scalar", T: 3 },
    { no: 9, name: "name", kind: "scalar", T: 9 },
    { no: 10, name: "version", kind: "scalar", T: 13 },
    { no: 11, name: "permission", kind: "message", T: Tl },
    { no: 12, name: "region", kind: "scalar", T: 9 },
    { no: 13, name: "is_publisher", kind: "scalar", T: 8 },
    { no: 14, name: "kind", kind: "enum", T: w.getEnumType(Xn) },
    {
      no: 15,
      name: "attributes",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    },
    { no: 16, name: "disconnect_reason", kind: "enum", T: w.getEnumType(jt) },
  ]),
  $i = w.makeEnum("livekit.ParticipantInfo.State", [
    { no: 0, name: "JOINING" },
    { no: 1, name: "JOINED" },
    { no: 2, name: "ACTIVE" },
    { no: 3, name: "DISCONNECTED" },
  ]),
  Xn = w.makeEnum("livekit.ParticipantInfo.Kind", [
    { no: 0, name: "STANDARD" },
    { no: 1, name: "INGRESS" },
    { no: 2, name: "EGRESS" },
    { no: 3, name: "SIP" },
    { no: 4, name: "AGENT" },
  ]),
  De = w.makeEnum("livekit.Encryption.Type", [
    { no: 0, name: "NONE" },
    { no: 1, name: "GCM" },
    { no: 2, name: "CUSTOM" },
  ]),
  Cl = w.makeMessageType("livekit.SimulcastCodecInfo", () => [
    { no: 1, name: "mime_type", kind: "scalar", T: 9 },
    { no: 2, name: "mid", kind: "scalar", T: 9 },
    { no: 3, name: "cid", kind: "scalar", T: 9 },
    { no: 4, name: "layers", kind: "message", T: bt, repeated: !0 },
  ]),
  Ut = w.makeMessageType("livekit.TrackInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "enum", T: w.getEnumType(Fe) },
    { no: 3, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "muted", kind: "scalar", T: 8 },
    { no: 5, name: "width", kind: "scalar", T: 13 },
    { no: 6, name: "height", kind: "scalar", T: 13 },
    { no: 7, name: "simulcast", kind: "scalar", T: 8 },
    { no: 8, name: "disable_dtx", kind: "scalar", T: 8 },
    { no: 9, name: "source", kind: "enum", T: w.getEnumType(ye) },
    { no: 10, name: "layers", kind: "message", T: bt, repeated: !0 },
    { no: 11, name: "mime_type", kind: "scalar", T: 9 },
    { no: 12, name: "mid", kind: "scalar", T: 9 },
    { no: 13, name: "codecs", kind: "message", T: Cl, repeated: !0 },
    { no: 14, name: "stereo", kind: "scalar", T: 8 },
    { no: 15, name: "disable_red", kind: "scalar", T: 8 },
    { no: 16, name: "encryption", kind: "enum", T: w.getEnumType(De) },
    { no: 17, name: "stream", kind: "scalar", T: 9 },
    { no: 18, name: "version", kind: "message", T: Pa },
    {
      no: 19,
      name: "audio_features",
      kind: "enum",
      T: w.getEnumType(Ke),
      repeated: !0,
    },
  ]),
  bt = w.makeMessageType("livekit.VideoLayer", () => [
    { no: 1, name: "quality", kind: "enum", T: w.getEnumType(Er) },
    { no: 2, name: "width", kind: "scalar", T: 13 },
    { no: 3, name: "height", kind: "scalar", T: 13 },
    { no: 4, name: "bitrate", kind: "scalar", T: 13 },
    { no: 5, name: "ssrc", kind: "scalar", T: 13 },
  ]),
  dt = w.makeMessageType("livekit.DataPacket", () => [
    { no: 1, name: "kind", kind: "enum", T: w.getEnumType(ee) },
    { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
    {
      no: 5,
      name: "destination_identities",
      kind: "scalar",
      T: 9,
      repeated: !0,
    },
    { no: 2, name: "user", kind: "message", T: ma, oneof: "value" },
    { no: 3, name: "speaker", kind: "message", T: wl, oneof: "value" },
    { no: 6, name: "sip_dtmf", kind: "message", T: ga, oneof: "value" },
    { no: 7, name: "transcription", kind: "message", T: Pl, oneof: "value" },
    { no: 8, name: "metrics", kind: "message", T: vl, oneof: "value" },
    { no: 9, name: "chat_message", kind: "message", T: Qi, oneof: "value" },
    { no: 10, name: "rpc_request", kind: "message", T: va, oneof: "value" },
    { no: 11, name: "rpc_ack", kind: "message", T: ba, oneof: "value" },
    { no: 12, name: "rpc_response", kind: "message", T: ya, oneof: "value" },
  ]),
  ee = w.makeEnum("livekit.DataPacket.Kind", [
    { no: 0, name: "RELIABLE" },
    { no: 1, name: "LOSSY" },
  ]),
  wl = w.makeMessageType("livekit.ActiveSpeakerUpdate", () => [
    { no: 1, name: "speakers", kind: "message", T: pa, repeated: !0 },
  ]),
  pa = w.makeMessageType("livekit.SpeakerInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "level", kind: "scalar", T: 2 },
    { no: 3, name: "active", kind: "scalar", T: 8 },
  ]),
  ma = w.makeMessageType("livekit.UserPacket", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 5, name: "participant_identity", kind: "scalar", T: 9 },
    { no: 2, name: "payload", kind: "scalar", T: 12 },
    { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: !0 },
    {
      no: 6,
      name: "destination_identities",
      kind: "scalar",
      T: 9,
      repeated: !0,
    },
    { no: 4, name: "topic", kind: "scalar", T: 9, opt: !0 },
    { no: 8, name: "id", kind: "scalar", T: 9, opt: !0 },
    { no: 9, name: "start_time", kind: "scalar", T: 4, opt: !0 },
    { no: 10, name: "end_time", kind: "scalar", T: 4, opt: !0 },
  ]),
  ga = w.makeMessageType("livekit.SipDTMF", () => [
    { no: 3, name: "code", kind: "scalar", T: 13 },
    { no: 4, name: "digit", kind: "scalar", T: 9 },
  ]),
  Pl = w.makeMessageType("livekit.Transcription", () => [
    { no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 },
    { no: 3, name: "track_id", kind: "scalar", T: 9 },
    { no: 4, name: "segments", kind: "message", T: El, repeated: !0 },
  ]),
  El = w.makeMessageType("livekit.TranscriptionSegment", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "text", kind: "scalar", T: 9 },
    { no: 3, name: "start_time", kind: "scalar", T: 4 },
    { no: 4, name: "end_time", kind: "scalar", T: 4 },
    { no: 5, name: "final", kind: "scalar", T: 8 },
    { no: 6, name: "language", kind: "scalar", T: 9 },
  ]),
  Qi = w.makeMessageType("livekit.ChatMessage", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 },
    { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: !0 },
    { no: 4, name: "message", kind: "scalar", T: 9 },
    { no: 5, name: "deleted", kind: "scalar", T: 8 },
    { no: 6, name: "generated", kind: "scalar", T: 8 },
  ]),
  va = w.makeMessageType("livekit.RpcRequest", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "method", kind: "scalar", T: 9 },
    { no: 3, name: "payload", kind: "scalar", T: 9 },
    { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 },
    { no: 5, name: "version", kind: "scalar", T: 13 },
  ]),
  ba = w.makeMessageType("livekit.RpcAck", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 },
  ]),
  ya = w.makeMessageType("livekit.RpcResponse", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 },
    { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" },
    { no: 3, name: "error", kind: "message", T: ka, oneof: "value" },
  ]),
  ka = w.makeMessageType("livekit.RpcError", () => [
    { no: 1, name: "code", kind: "scalar", T: 13 },
    { no: 2, name: "message", kind: "scalar", T: 9 },
    { no: 3, name: "data", kind: "scalar", T: 9 },
  ]),
  Sa = w.makeMessageType("livekit.ParticipantTracks", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
  ]),
  Rl = w.makeMessageType("livekit.ServerInfo", () => [
    { no: 1, name: "edition", kind: "enum", T: w.getEnumType(Ta) },
    { no: 2, name: "version", kind: "scalar", T: 9 },
    { no: 3, name: "protocol", kind: "scalar", T: 5 },
    { no: 4, name: "region", kind: "scalar", T: 9 },
    { no: 5, name: "node_id", kind: "scalar", T: 9 },
    { no: 6, name: "debug_info", kind: "scalar", T: 9 },
    { no: 7, name: "agent_protocol", kind: "scalar", T: 5 },
  ]),
  Ta = w.makeEnum("livekit.ServerInfo.Edition", [
    { no: 0, name: "Standard" },
    { no: 1, name: "Cloud" },
  ]),
  _l = w.makeMessageType("livekit.ClientInfo", () => [
    { no: 1, name: "sdk", kind: "enum", T: w.getEnumType(Ca) },
    { no: 2, name: "version", kind: "scalar", T: 9 },
    { no: 3, name: "protocol", kind: "scalar", T: 5 },
    { no: 4, name: "os", kind: "scalar", T: 9 },
    { no: 5, name: "os_version", kind: "scalar", T: 9 },
    { no: 6, name: "device_model", kind: "scalar", T: 9 },
    { no: 7, name: "browser", kind: "scalar", T: 9 },
    { no: 8, name: "browser_version", kind: "scalar", T: 9 },
    { no: 9, name: "address", kind: "scalar", T: 9 },
    { no: 10, name: "network", kind: "scalar", T: 9 },
    { no: 11, name: "other_sdks", kind: "scalar", T: 9 },
  ]),
  Ca = w.makeEnum("livekit.ClientInfo.SDK", [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "JS" },
    { no: 2, name: "SWIFT" },
    { no: 3, name: "ANDROID" },
    { no: 4, name: "FLUTTER" },
    { no: 5, name: "GO" },
    { no: 6, name: "UNITY" },
    { no: 7, name: "REACT_NATIVE" },
    { no: 8, name: "RUST" },
    { no: 9, name: "PYTHON" },
    { no: 10, name: "CPP" },
    { no: 11, name: "UNITY_WEB" },
    { no: 12, name: "NODE" },
  ]),
  wa = w.makeMessageType("livekit.ClientConfiguration", () => [
    { no: 1, name: "video", kind: "message", T: Ss },
    { no: 2, name: "screen", kind: "message", T: Ss },
    { no: 3, name: "resume_connection", kind: "enum", T: w.getEnumType(gn) },
    { no: 4, name: "disabled_codecs", kind: "message", T: Il },
    { no: 5, name: "force_relay", kind: "enum", T: w.getEnumType(gn) },
  ]),
  Ss = w.makeMessageType("livekit.VideoConfiguration", () => [
    { no: 1, name: "hardware_encoder", kind: "enum", T: w.getEnumType(gn) },
  ]),
  Il = w.makeMessageType("livekit.DisabledCodecs", () => [
    { no: 1, name: "codecs", kind: "message", T: Yn, repeated: !0 },
    { no: 2, name: "publish", kind: "message", T: Yn, repeated: !0 },
  ]),
  Pa = w.makeMessageType("livekit.TimedVersion", () => [
    { no: 1, name: "unix_micro", kind: "scalar", T: 3 },
    { no: 2, name: "ticks", kind: "scalar", T: 5 },
  ]),
  je = w.makeEnum("livekit.SignalTarget", [
    { no: 0, name: "PUBLISHER" },
    { no: 1, name: "SUBSCRIBER" },
  ]),
  Yi = w.makeEnum("livekit.StreamState", [
    { no: 0, name: "ACTIVE" },
    { no: 1, name: "PAUSED" },
  ]),
  xl = w.makeEnum("livekit.CandidateProtocol", [
    { no: 0, name: "UDP" },
    { no: 1, name: "TCP" },
    { no: 2, name: "TLS" },
  ]),
  Al = w.makeMessageType("livekit.SignalRequest", () => [
    { no: 1, name: "offer", kind: "message", T: kt, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: kt, oneof: "message" },
    { no: 3, name: "trickle", kind: "message", T: _r, oneof: "message" },
    { no: 4, name: "add_track", kind: "message", T: Zi, oneof: "message" },
    { no: 5, name: "mute", kind: "message", T: Ir, oneof: "message" },
    { no: 6, name: "subscription", kind: "message", T: ui, oneof: "message" },
    { no: 7, name: "track_setting", kind: "message", T: Ea, oneof: "message" },
    { no: 8, name: "leave", kind: "message", T: li, oneof: "message" },
    { no: 10, name: "update_layers", kind: "message", T: _a, oneof: "message" },
    {
      no: 11,
      name: "subscription_permission",
      kind: "message",
      T: Da,
      oneof: "message",
    },
    { no: 12, name: "sync_state", kind: "message", T: Ma, oneof: "message" },
    { no: 13, name: "simulate", kind: "message", T: We, oneof: "message" },
    { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" },
    {
      no: 15,
      name: "update_metadata",
      kind: "message",
      T: Ia,
      oneof: "message",
    },
    { no: 16, name: "ping_req", kind: "message", T: Na, oneof: "message" },
    {
      no: 17,
      name: "update_audio_track",
      kind: "message",
      T: Ra,
      oneof: "message",
    },
    {
      no: 18,
      name: "update_video_track",
      kind: "message",
      T: Ll,
      oneof: "message",
    },
  ]),
  Ts = w.makeMessageType("livekit.SignalResponse", () => [
    { no: 1, name: "join", kind: "message", T: Dl, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: kt, oneof: "message" },
    { no: 3, name: "offer", kind: "message", T: kt, oneof: "message" },
    { no: 4, name: "trickle", kind: "message", T: _r, oneof: "message" },
    { no: 5, name: "update", kind: "message", T: Nl, oneof: "message" },
    {
      no: 6,
      name: "track_published",
      kind: "message",
      T: xr,
      oneof: "message",
    },
    { no: 8, name: "leave", kind: "message", T: li, oneof: "message" },
    { no: 9, name: "mute", kind: "message", T: Ir, oneof: "message" },
    {
      no: 10,
      name: "speakers_changed",
      kind: "message",
      T: Ul,
      oneof: "message",
    },
    { no: 11, name: "room_update", kind: "message", T: Fl, oneof: "message" },
    {
      no: 12,
      name: "connection_quality",
      kind: "message",
      T: Bl,
      oneof: "message",
    },
    {
      no: 13,
      name: "stream_state_update",
      kind: "message",
      T: ql,
      oneof: "message",
    },
    {
      no: 14,
      name: "subscribed_quality_update",
      kind: "message",
      T: Wl,
      oneof: "message",
    },
    {
      no: 15,
      name: "subscription_permission_update",
      kind: "message",
      T: Gl,
      oneof: "message",
    },
    { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" },
    {
      no: 17,
      name: "track_unpublished",
      kind: "message",
      T: Ol,
      oneof: "message",
    },
    { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" },
    { no: 19, name: "reconnect", kind: "message", T: Ml, oneof: "message" },
    { no: 20, name: "pong_resp", kind: "message", T: Kl, oneof: "message" },
    {
      no: 21,
      name: "subscription_response",
      kind: "message",
      T: $l,
      oneof: "message",
    },
    {
      no: 22,
      name: "request_response",
      kind: "message",
      T: Ql,
      oneof: "message",
    },
    {
      no: 23,
      name: "track_subscribed",
      kind: "message",
      T: Yl,
      oneof: "message",
    },
  ]),
  Xi = w.makeMessageType("livekit.SimulcastCodec", () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 },
    { no: 2, name: "cid", kind: "scalar", T: 9 },
  ]),
  Zi = w.makeMessageType("livekit.AddTrackRequest", () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 3, name: "type", kind: "enum", T: w.getEnumType(Fe) },
    { no: 4, name: "width", kind: "scalar", T: 13 },
    { no: 5, name: "height", kind: "scalar", T: 13 },
    { no: 6, name: "muted", kind: "scalar", T: 8 },
    { no: 7, name: "disable_dtx", kind: "scalar", T: 8 },
    { no: 8, name: "source", kind: "enum", T: w.getEnumType(ye) },
    { no: 9, name: "layers", kind: "message", T: bt, repeated: !0 },
    { no: 10, name: "simulcast_codecs", kind: "message", T: Xi, repeated: !0 },
    { no: 11, name: "sid", kind: "scalar", T: 9 },
    { no: 12, name: "stereo", kind: "scalar", T: 8 },
    { no: 13, name: "disable_red", kind: "scalar", T: 8 },
    { no: 14, name: "encryption", kind: "enum", T: w.getEnumType(De) },
    { no: 15, name: "stream", kind: "scalar", T: 9 },
  ]),
  _r = w.makeMessageType("livekit.TrickleRequest", () => [
    { no: 1, name: "candidateInit", kind: "scalar", T: 9 },
    { no: 2, name: "target", kind: "enum", T: w.getEnumType(je) },
    { no: 3, name: "final", kind: "scalar", T: 8 },
  ]),
  Ir = w.makeMessageType("livekit.MuteTrackRequest", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "muted", kind: "scalar", T: 8 },
  ]),
  Dl = w.makeMessageType("livekit.JoinResponse", () => [
    { no: 1, name: "room", kind: "message", T: Rr },
    { no: 2, name: "participant", kind: "message", T: vn },
    { no: 3, name: "other_participants", kind: "message", T: vn, repeated: !0 },
    { no: 4, name: "server_version", kind: "scalar", T: 9 },
    { no: 5, name: "ice_servers", kind: "message", T: xa, repeated: !0 },
    { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 },
    { no: 7, name: "alternative_url", kind: "scalar", T: 9 },
    { no: 8, name: "client_configuration", kind: "message", T: wa },
    { no: 9, name: "server_region", kind: "scalar", T: 9 },
    { no: 10, name: "ping_timeout", kind: "scalar", T: 5 },
    { no: 11, name: "ping_interval", kind: "scalar", T: 5 },
    { no: 12, name: "server_info", kind: "message", T: Rl },
    { no: 13, name: "sif_trailer", kind: "scalar", T: 12 },
    {
      no: 14,
      name: "enabled_publish_codecs",
      kind: "message",
      T: Yn,
      repeated: !0,
    },
    { no: 15, name: "fast_publish", kind: "scalar", T: 8 },
  ]),
  Ml = w.makeMessageType("livekit.ReconnectResponse", () => [
    { no: 1, name: "ice_servers", kind: "message", T: xa, repeated: !0 },
    { no: 2, name: "client_configuration", kind: "message", T: wa },
  ]),
  xr = w.makeMessageType("livekit.TrackPublishedResponse", () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 },
    { no: 2, name: "track", kind: "message", T: Ut },
  ]),
  Ol = w.makeMessageType("livekit.TrackUnpublishedResponse", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
  ]),
  kt = w.makeMessageType("livekit.SessionDescription", () => [
    { no: 1, name: "type", kind: "scalar", T: 9 },
    { no: 2, name: "sdp", kind: "scalar", T: 9 },
  ]),
  Nl = w.makeMessageType("livekit.ParticipantUpdate", () => [
    { no: 1, name: "participants", kind: "message", T: vn, repeated: !0 },
  ]),
  ui = w.makeMessageType("livekit.UpdateSubscription", () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 2, name: "subscribe", kind: "scalar", T: 8 },
    { no: 3, name: "participant_tracks", kind: "message", T: Sa, repeated: !0 },
  ]),
  Ea = w.makeMessageType("livekit.UpdateTrackSettings", () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 3, name: "disabled", kind: "scalar", T: 8 },
    { no: 4, name: "quality", kind: "enum", T: w.getEnumType(Er) },
    { no: 5, name: "width", kind: "scalar", T: 13 },
    { no: 6, name: "height", kind: "scalar", T: 13 },
    { no: 7, name: "fps", kind: "scalar", T: 13 },
    { no: 8, name: "priority", kind: "scalar", T: 13 },
  ]),
  Ra = w.makeMessageType("livekit.UpdateLocalAudioTrack", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    {
      no: 2,
      name: "features",
      kind: "enum",
      T: w.getEnumType(Ke),
      repeated: !0,
    },
  ]),
  Ll = w.makeMessageType("livekit.UpdateLocalVideoTrack", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "width", kind: "scalar", T: 13 },
    { no: 3, name: "height", kind: "scalar", T: 13 },
  ]),
  li = w.makeMessageType("livekit.LeaveRequest", () => [
    { no: 1, name: "can_reconnect", kind: "scalar", T: 8 },
    { no: 2, name: "reason", kind: "enum", T: w.getEnumType(jt) },
    { no: 3, name: "action", kind: "enum", T: w.getEnumType(Bt) },
    { no: 4, name: "regions", kind: "message", T: Hl },
  ]),
  Bt = w.makeEnum("livekit.LeaveRequest.Action", [
    { no: 0, name: "DISCONNECT" },
    { no: 1, name: "RESUME" },
    { no: 2, name: "RECONNECT" },
  ]),
  _a = w.makeMessageType("livekit.UpdateVideoLayers", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "layers", kind: "message", T: bt, repeated: !0 },
  ]),
  Ia = w.makeMessageType("livekit.UpdateParticipantMetadata", () => [
    { no: 1, name: "metadata", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    {
      no: 3,
      name: "attributes",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    },
    { no: 4, name: "request_id", kind: "scalar", T: 13 },
  ]),
  xa = w.makeMessageType("livekit.ICEServer", () => [
    { no: 1, name: "urls", kind: "scalar", T: 9, repeated: !0 },
    { no: 2, name: "username", kind: "scalar", T: 9 },
    { no: 3, name: "credential", kind: "scalar", T: 9 },
  ]),
  Ul = w.makeMessageType("livekit.SpeakersChanged", () => [
    { no: 1, name: "speakers", kind: "message", T: pa, repeated: !0 },
  ]),
  Fl = w.makeMessageType("livekit.RoomUpdate", () => [
    { no: 1, name: "room", kind: "message", T: Rr },
  ]),
  jl = w.makeMessageType("livekit.ConnectionQualityInfo", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "quality", kind: "enum", T: w.getEnumType(an) },
    { no: 3, name: "score", kind: "scalar", T: 2 },
  ]),
  Bl = w.makeMessageType("livekit.ConnectionQualityUpdate", () => [
    { no: 1, name: "updates", kind: "message", T: jl, repeated: !0 },
  ]),
  Vl = w.makeMessageType("livekit.StreamStateInfo", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 },
    { no: 3, name: "state", kind: "enum", T: w.getEnumType(Yi) },
  ]),
  ql = w.makeMessageType("livekit.StreamStateUpdate", () => [
    { no: 1, name: "stream_states", kind: "message", T: Vl, repeated: !0 },
  ]),
  Ar = w.makeMessageType("livekit.SubscribedQuality", () => [
    { no: 1, name: "quality", kind: "enum", T: w.getEnumType(Er) },
    { no: 2, name: "enabled", kind: "scalar", T: 8 },
  ]),
  zl = w.makeMessageType("livekit.SubscribedCodec", () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 },
    { no: 2, name: "qualities", kind: "message", T: Ar, repeated: !0 },
  ]),
  Wl = w.makeMessageType("livekit.SubscribedQualityUpdate", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    {
      no: 2,
      name: "subscribed_qualities",
      kind: "message",
      T: Ar,
      repeated: !0,
    },
    { no: 3, name: "subscribed_codecs", kind: "message", T: zl, repeated: !0 },
  ]),
  Aa = w.makeMessageType("livekit.TrackPermission", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "all_tracks", kind: "scalar", T: 8 },
    { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
  ]),
  Da = w.makeMessageType("livekit.SubscriptionPermission", () => [
    { no: 1, name: "all_participants", kind: "scalar", T: 8 },
    { no: 2, name: "track_permissions", kind: "message", T: Aa, repeated: !0 },
  ]),
  Gl = w.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 },
    { no: 3, name: "allowed", kind: "scalar", T: 8 },
  ]),
  Ma = w.makeMessageType("livekit.SyncState", () => [
    { no: 1, name: "answer", kind: "message", T: kt },
    { no: 2, name: "subscription", kind: "message", T: ui },
    { no: 3, name: "publish_tracks", kind: "message", T: xr, repeated: !0 },
    { no: 4, name: "data_channels", kind: "message", T: Oa, repeated: !0 },
    { no: 5, name: "offer", kind: "message", T: kt },
    { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: !0 },
  ]),
  Oa = w.makeMessageType("livekit.DataChannelInfo", () => [
    { no: 1, name: "label", kind: "scalar", T: 9 },
    { no: 2, name: "id", kind: "scalar", T: 13 },
    { no: 3, name: "target", kind: "enum", T: w.getEnumType(je) },
  ]),
  We = w.makeMessageType("livekit.SimulateScenario", () => [
    { no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" },
    { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" },
    {
      no: 5,
      name: "switch_candidate_protocol",
      kind: "enum",
      T: w.getEnumType(xl),
      oneof: "scenario",
    },
    {
      no: 6,
      name: "subscriber_bandwidth",
      kind: "scalar",
      T: 3,
      oneof: "scenario",
    },
    {
      no: 7,
      name: "disconnect_signal_on_resume",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
    {
      no: 8,
      name: "disconnect_signal_on_resume_no_messages",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
    {
      no: 9,
      name: "leave_request_full_reconnect",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
  ]),
  Na = w.makeMessageType("livekit.Ping", () => [
    { no: 1, name: "timestamp", kind: "scalar", T: 3 },
    { no: 2, name: "rtt", kind: "scalar", T: 3 },
  ]),
  Kl = w.makeMessageType("livekit.Pong", () => [
    { no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 },
  ]),
  Hl = w.makeMessageType("livekit.RegionSettings", () => [
    { no: 1, name: "regions", kind: "message", T: Jl, repeated: !0 },
  ]),
  Jl = w.makeMessageType("livekit.RegionInfo", () => [
    { no: 1, name: "region", kind: "scalar", T: 9 },
    { no: 2, name: "url", kind: "scalar", T: 9 },
    { no: 3, name: "distance", kind: "scalar", T: 3 },
  ]),
  $l = w.makeMessageType("livekit.SubscriptionResponse", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "err", kind: "enum", T: w.getEnumType(Sl) },
  ]),
  Ql = w.makeMessageType("livekit.RequestResponse", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 13 },
    { no: 2, name: "reason", kind: "enum", T: w.getEnumType(La) },
    { no: 3, name: "message", kind: "scalar", T: 9 },
  ]),
  La = w.makeEnum("livekit.RequestResponse.Reason", [
    { no: 0, name: "OK" },
    { no: 1, name: "NOT_FOUND" },
    { no: 2, name: "NOT_ALLOWED" },
    { no: 3, name: "LIMIT_EXCEEDED" },
  ]),
  Yl = w.makeMessageType("livekit.TrackSubscribed", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
  ]);
function Xl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Ln = { exports: {} },
  Zl = Ln.exports,
  Cs;
function eh() {
  return (
    Cs ||
      ((Cs = 1),
      (function (n) {
        (function (e, t) {
          n.exports ? (n.exports = t()) : (e.log = t());
        })(Zl, function () {
          var e = function () {},
            t = "undefined",
            i =
              typeof window !== t &&
              typeof window.navigator !== t &&
              /Trident\/|MSIE /.test(window.navigator.userAgent),
            r = ["trace", "debug", "info", "warn", "error"],
            s = {},
            o = null;
          function a(p, b) {
            var v = p[b];
            if (typeof v.bind == "function") return v.bind(p);
            try {
              return Function.prototype.bind.call(v, p);
            } catch {
              return function () {
                return Function.prototype.apply.apply(v, [p, arguments]);
              };
            }
          }
          function c() {
            console.log &&
              (console.log.apply
                ? console.log.apply(console, arguments)
                : Function.prototype.apply.apply(console.log, [
                    console,
                    arguments,
                  ])),
              console.trace && console.trace();
          }
          function d(p) {
            return (
              p === "debug" && (p = "log"),
              typeof console === t
                ? !1
                : p === "trace" && i
                ? c
                : console[p] !== void 0
                ? a(console, p)
                : console.log !== void 0
                ? a(console, "log")
                : e
            );
          }
          function u() {
            for (var p = this.getLevel(), b = 0; b < r.length; b++) {
              var v = r[b];
              this[v] = b < p ? e : this.methodFactory(v, p, this.name);
            }
            if (
              ((this.log = this.debug),
              typeof console === t && p < this.levels.SILENT)
            )
              return "No console available for logging";
          }
          function l(p) {
            return function () {
              typeof console !== t &&
                (u.call(this), this[p].apply(this, arguments));
            };
          }
          function h(p, b, v) {
            return d(p) || l.apply(this, arguments);
          }
          function f(p, b) {
            var v = this,
              P,
              I,
              S,
              k = "loglevel";
            typeof p == "string"
              ? (k += ":" + p)
              : typeof p == "symbol" && (k = void 0);
            function T(x) {
              var O = (r[x] || "silent").toUpperCase();
              if (!(typeof window === t || !k)) {
                try {
                  window.localStorage[k] = O;
                  return;
                } catch {}
                try {
                  window.document.cookie =
                    encodeURIComponent(k) + "=" + O + ";";
                } catch {}
              }
            }
            function D() {
              var x;
              if (!(typeof window === t || !k)) {
                try {
                  x = window.localStorage[k];
                } catch {}
                if (typeof x === t)
                  try {
                    var O = window.document.cookie,
                      Y = encodeURIComponent(k),
                      G = O.indexOf(Y + "=");
                    G !== -1 &&
                      (x = /^([^;]+)/.exec(O.slice(G + Y.length + 1))[1]);
                  } catch {}
                return v.levels[x] === void 0 && (x = void 0), x;
              }
            }
            function U() {
              if (!(typeof window === t || !k)) {
                try {
                  window.localStorage.removeItem(k);
                } catch {}
                try {
                  window.document.cookie =
                    encodeURIComponent(k) +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch {}
              }
            }
            function L(x) {
              var O = x;
              if (
                (typeof O == "string" &&
                  v.levels[O.toUpperCase()] !== void 0 &&
                  (O = v.levels[O.toUpperCase()]),
                typeof O == "number" && O >= 0 && O <= v.levels.SILENT)
              )
                return O;
              throw new TypeError(
                "log.setLevel() called with invalid level: " + x
              );
            }
            (v.name = p),
              (v.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5,
              }),
              (v.methodFactory = b || h),
              (v.getLevel = function () {
                return S ?? I ?? P;
              }),
              (v.setLevel = function (x, O) {
                return (S = L(x)), O !== !1 && T(S), u.call(v);
              }),
              (v.setDefaultLevel = function (x) {
                (I = L(x)), D() || v.setLevel(x, !1);
              }),
              (v.resetLevel = function () {
                (S = null), U(), u.call(v);
              }),
              (v.enableAll = function (x) {
                v.setLevel(v.levels.TRACE, x);
              }),
              (v.disableAll = function (x) {
                v.setLevel(v.levels.SILENT, x);
              }),
              (v.rebuild = function () {
                if ((o !== v && (P = L(o.getLevel())), u.call(v), o === v))
                  for (var x in s) s[x].rebuild();
              }),
              (P = L(o ? o.getLevel() : "WARN"));
            var M = D();
            M != null && (S = L(M)), u.call(v);
          }
          (o = new f()),
            (o.getLogger = function (b) {
              if ((typeof b != "symbol" && typeof b != "string") || b === "")
                throw new TypeError(
                  "You must supply a name when creating a logger."
                );
              var v = s[b];
              return v || (v = s[b] = new f(b, o.methodFactory)), v;
            });
          var g = typeof window !== t ? window.log : void 0;
          return (
            (o.noConflict = function () {
              return (
                typeof window !== t && window.log === o && (window.log = g), o
              );
            }),
            (o.getLoggers = function () {
              return s;
            }),
            (o.default = o),
            o
          );
        });
      })(Ln)),
    Ln.exports
  );
}
var hi = eh(),
  er;
(function (n) {
  (n[(n.trace = 0)] = "trace"),
    (n[(n.debug = 1)] = "debug"),
    (n[(n.info = 2)] = "info"),
    (n[(n.warn = 3)] = "warn"),
    (n[(n.error = 4)] = "error"),
    (n[(n.silent = 5)] = "silent");
})(er || (er = {}));
var Be;
(function (n) {
  (n.Default = "livekit"),
    (n.Room = "livekit-room"),
    (n.Participant = "livekit-participant"),
    (n.Track = "livekit-track"),
    (n.Publication = "livekit-track-publication"),
    (n.Engine = "livekit-engine"),
    (n.Signal = "livekit-signal"),
    (n.PCManager = "livekit-pc-manager"),
    (n.PCTransport = "livekit-pc-transport"),
    (n.E2EE = "lk-e2ee");
})(Be || (Be = {}));
let K = hi.getLogger("livekit");
Object.values(Be).map((n) => hi.getLogger(n));
K.setDefaultLevel(er.info);
function tt(n) {
  const e = hi.getLogger(n);
  return e.setDefaultLevel(K.getLevel()), e;
}
const th = hi.getLogger("lk-e2ee"),
  en = 7e3,
  nh = [0, 300, 2 * 2 * 300, 3 * 3 * 300, 4 * 4 * 300, en, en, en, en, en];
class ih {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e] : nh;
  }
  nextRetryDelayInMs(e) {
    if (e.retryCount >= this._retryDelays.length) return null;
    const t = this._retryDelays[e.retryCount];
    return e.retryCount <= 1 ? t : t + Math.random() * 1e3;
  }
}
function m(n, e, t, i) {
  function r(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function a(u) {
      try {
        d(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        d(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function d(u) {
      u.done ? s(u.value) : r(u.value).then(a, c);
    }
    d((i = i.apply(n, e || [])).next());
  });
}
function ws(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Nt(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator],
    t;
  return e
    ? e.call(n)
    : ((n = typeof ws == "function" ? ws(n) : n[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(s) {
    t[s] =
      n[s] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = n[s](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function (d) {
      s({ value: d, done: a });
    }, o);
  }
}
var _n = { exports: {} },
  Ps;
function rh() {
  if (Ps) return _n.exports;
  Ps = 1;
  var n = typeof Reflect == "object" ? Reflect : null,
    e =
      n && typeof n.apply == "function"
        ? n.apply
        : function (k, T, D) {
            return Function.prototype.apply.call(k, T, D);
          },
    t;
  n && typeof n.ownKeys == "function"
    ? (t = n.ownKeys)
    : Object.getOwnPropertySymbols
    ? (t = function (k) {
        return Object.getOwnPropertyNames(k).concat(
          Object.getOwnPropertySymbols(k)
        );
      })
    : (t = function (k) {
        return Object.getOwnPropertyNames(k);
      });
  function i(S) {
    console && console.warn && console.warn(S);
  }
  var r =
    Number.isNaN ||
    function (k) {
      return k !== k;
    };
  function s() {
    s.init.call(this);
  }
  (_n.exports = s),
    (_n.exports.once = v),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
  var o = 10;
  function a(S) {
    if (typeof S != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof S
      );
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return o;
    },
    set: function (S) {
      if (typeof S != "number" || S < 0 || r(S))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            S +
            "."
        );
      o = S;
    },
  }),
    (s.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (k) {
      if (typeof k != "number" || k < 0 || r(k))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            k +
            "."
        );
      return (this._maxListeners = k), this;
    });
  function c(S) {
    return S._maxListeners === void 0 ? s.defaultMaxListeners : S._maxListeners;
  }
  (s.prototype.getMaxListeners = function () {
    return c(this);
  }),
    (s.prototype.emit = function (k) {
      for (var T = [], D = 1; D < arguments.length; D++) T.push(arguments[D]);
      var U = k === "error",
        L = this._events;
      if (L !== void 0) U = U && L.error === void 0;
      else if (!U) return !1;
      if (U) {
        var M;
        if ((T.length > 0 && (M = T[0]), M instanceof Error)) throw M;
        var x = new Error(
          "Unhandled error." + (M ? " (" + M.message + ")" : "")
        );
        throw ((x.context = M), x);
      }
      var O = L[k];
      if (O === void 0) return !1;
      if (typeof O == "function") e(O, this, T);
      else
        for (var Y = O.length, G = g(O, Y), D = 0; D < Y; ++D) e(G[D], this, T);
      return !0;
    });
  function d(S, k, T, D) {
    var U, L, M;
    if (
      (a(T),
      (L = S._events),
      L === void 0
        ? ((L = S._events = Object.create(null)), (S._eventsCount = 0))
        : (L.newListener !== void 0 &&
            (S.emit("newListener", k, T.listener ? T.listener : T),
            (L = S._events)),
          (M = L[k])),
      M === void 0)
    )
      (M = L[k] = T), ++S._eventsCount;
    else if (
      (typeof M == "function"
        ? (M = L[k] = D ? [T, M] : [M, T])
        : D
        ? M.unshift(T)
        : M.push(T),
      (U = c(S)),
      U > 0 && M.length > U && !M.warned)
    ) {
      M.warned = !0;
      var x = new Error(
        "Possible EventEmitter memory leak detected. " +
          M.length +
          " " +
          String(k) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (x.name = "MaxListenersExceededWarning"),
        (x.emitter = S),
        (x.type = k),
        (x.count = M.length),
        i(x);
    }
    return S;
  }
  (s.prototype.addListener = function (k, T) {
    return d(this, k, T, !1);
  }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (k, T) {
      return d(this, k, T, !0);
    });
  function u() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function l(S, k, T) {
    var D = { fired: !1, wrapFn: void 0, target: S, type: k, listener: T },
      U = u.bind(D);
    return (U.listener = T), (D.wrapFn = U), U;
  }
  (s.prototype.once = function (k, T) {
    return a(T), this.on(k, l(this, k, T)), this;
  }),
    (s.prototype.prependOnceListener = function (k, T) {
      return a(T), this.prependListener(k, l(this, k, T)), this;
    }),
    (s.prototype.removeListener = function (k, T) {
      var D, U, L, M, x;
      if ((a(T), (U = this._events), U === void 0)) return this;
      if (((D = U[k]), D === void 0)) return this;
      if (D === T || D.listener === T)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete U[k],
            U.removeListener &&
              this.emit("removeListener", k, D.listener || T));
      else if (typeof D != "function") {
        for (L = -1, M = D.length - 1; M >= 0; M--)
          if (D[M] === T || D[M].listener === T) {
            (x = D[M].listener), (L = M);
            break;
          }
        if (L < 0) return this;
        L === 0 ? D.shift() : p(D, L),
          D.length === 1 && (U[k] = D[0]),
          U.removeListener !== void 0 && this.emit("removeListener", k, x || T);
      }
      return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (k) {
      var T, D, U;
      if (((D = this._events), D === void 0)) return this;
      if (D.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : D[k] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete D[k]),
          this
        );
      if (arguments.length === 0) {
        var L = Object.keys(D),
          M;
        for (U = 0; U < L.length; ++U)
          (M = L[U]), M !== "removeListener" && this.removeAllListeners(M);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((T = D[k]), typeof T == "function")) this.removeListener(k, T);
      else if (T !== void 0)
        for (U = T.length - 1; U >= 0; U--) this.removeListener(k, T[U]);
      return this;
    });
  function h(S, k, T) {
    var D = S._events;
    if (D === void 0) return [];
    var U = D[k];
    return U === void 0
      ? []
      : typeof U == "function"
      ? T
        ? [U.listener || U]
        : [U]
      : T
      ? b(U)
      : g(U, U.length);
  }
  (s.prototype.listeners = function (k) {
    return h(this, k, !0);
  }),
    (s.prototype.rawListeners = function (k) {
      return h(this, k, !1);
    }),
    (s.listenerCount = function (S, k) {
      return typeof S.listenerCount == "function"
        ? S.listenerCount(k)
        : f.call(S, k);
    }),
    (s.prototype.listenerCount = f);
  function f(S) {
    var k = this._events;
    if (k !== void 0) {
      var T = k[S];
      if (typeof T == "function") return 1;
      if (T !== void 0) return T.length;
    }
    return 0;
  }
  s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? t(this._events) : [];
  };
  function g(S, k) {
    for (var T = new Array(k), D = 0; D < k; ++D) T[D] = S[D];
    return T;
  }
  function p(S, k) {
    for (; k + 1 < S.length; k++) S[k] = S[k + 1];
    S.pop();
  }
  function b(S) {
    for (var k = new Array(S.length), T = 0; T < k.length; ++T)
      k[T] = S[T].listener || S[T];
    return k;
  }
  function v(S, k) {
    return new Promise(function (T, D) {
      function U(M) {
        S.removeListener(k, L), D(M);
      }
      function L() {
        typeof S.removeListener == "function" && S.removeListener("error", U),
          T([].slice.call(arguments));
      }
      I(S, k, L, { once: !0 }), k !== "error" && P(S, U, { once: !0 });
    });
  }
  function P(S, k, T) {
    typeof S.on == "function" && I(S, "error", k, T);
  }
  function I(S, k, T, D) {
    if (typeof S.on == "function") D.once ? S.once(k, T) : S.on(k, T);
    else if (typeof S.addEventListener == "function")
      S.addEventListener(k, function U(L) {
        D.once && S.removeEventListener(k, U), T(L);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof S
      );
  }
  return _n.exports;
}
var $e = rh();
let Ua = !0,
  Fa = !0;
function Un(n, e, t) {
  const i = n.match(e);
  return i && i.length >= t && parseInt(i[t], 10);
}
function Tt(n, e, t) {
  if (!n.RTCPeerConnection) return;
  const i = n.RTCPeerConnection.prototype,
    r = i.addEventListener;
  i.addEventListener = function (o, a) {
    if (o !== e) return r.apply(this, arguments);
    const c = (d) => {
      const u = t(d);
      u && (a.handleEvent ? a.handleEvent(u) : a(u));
    };
    return (
      (this._eventMap = this._eventMap || {}),
      this._eventMap[e] || (this._eventMap[e] = new Map()),
      this._eventMap[e].set(a, c),
      r.apply(this, [o, c])
    );
  };
  const s = i.removeEventListener;
  (i.removeEventListener = function (o, a) {
    if (o !== e || !this._eventMap || !this._eventMap[e])
      return s.apply(this, arguments);
    if (!this._eventMap[e].has(a)) return s.apply(this, arguments);
    const c = this._eventMap[e].get(a);
    return (
      this._eventMap[e].delete(a),
      this._eventMap[e].size === 0 && delete this._eventMap[e],
      Object.keys(this._eventMap).length === 0 && delete this._eventMap,
      s.apply(this, [o, c])
    );
  }),
    Object.defineProperty(i, "on" + e, {
      get() {
        return this["_on" + e];
      },
      set(o) {
        this["_on" + e] &&
          (this.removeEventListener(e, this["_on" + e]),
          delete this["_on" + e]),
          o && this.addEventListener(e, (this["_on" + e] = o));
      },
      enumerable: !0,
      configurable: !0,
    });
}
function sh(n) {
  return typeof n != "boolean"
    ? new Error("Argument type: " + typeof n + ". Please use a boolean.")
    : ((Ua = n),
      n ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function oh(n) {
  return typeof n != "boolean"
    ? new Error("Argument type: " + typeof n + ". Please use a boolean.")
    : ((Fa = !n),
      "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"));
}
function ja() {
  if (typeof window == "object") {
    if (Ua) return;
    typeof console < "u" &&
      typeof console.log == "function" &&
      console.log.apply(console, arguments);
  }
}
function Dr(n, e) {
  Fa && console.warn(n + " is deprecated, please use " + e + " instead.");
}
function ah(n) {
  const e = { browser: null, version: null };
  if (typeof n > "u" || !n.navigator || !n.navigator.userAgent)
    return (e.browser = "Not a browser."), e;
  const { navigator: t } = n;
  if (t.userAgentData && t.userAgentData.brands) {
    const i = t.userAgentData.brands.find((r) => r.brand === "Chromium");
    if (i) return { browser: "chrome", version: parseInt(i.version, 10) };
  }
  if (t.mozGetUserMedia)
    (e.browser = "firefox"),
      (e.version = Un(t.userAgent, /Firefox\/(\d+)\./, 1));
  else if (
    t.webkitGetUserMedia ||
    (n.isSecureContext === !1 && n.webkitRTCPeerConnection)
  )
    (e.browser = "chrome"),
      (e.version = Un(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
  else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./))
    (e.browser = "safari"),
      (e.version = Un(t.userAgent, /AppleWebKit\/(\d+)\./, 1)),
      (e.supportsUnifiedPlan =
        n.RTCRtpTransceiver &&
        "currentDirection" in n.RTCRtpTransceiver.prototype);
  else return (e.browser = "Not a supported browser."), e;
  return e;
}
function Es(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ba(n) {
  return Es(n)
    ? Object.keys(n).reduce(function (e, t) {
        const i = Es(n[t]),
          r = i ? Ba(n[t]) : n[t],
          s = i && !Object.keys(r).length;
        return r === void 0 || s ? e : Object.assign(e, { [t]: r });
      }, {})
    : n;
}
function tr(n, e, t) {
  !e ||
    t.has(e.id) ||
    (t.set(e.id, e),
    Object.keys(e).forEach((i) => {
      i.endsWith("Id")
        ? tr(n, n.get(e[i]), t)
        : i.endsWith("Ids") &&
          e[i].forEach((r) => {
            tr(n, n.get(r), t);
          });
    }));
}
function Rs(n, e, t) {
  const i = t ? "outbound-rtp" : "inbound-rtp",
    r = new Map();
  if (e === null) return r;
  const s = [];
  return (
    n.forEach((o) => {
      o.type === "track" && o.trackIdentifier === e.id && s.push(o);
    }),
    s.forEach((o) => {
      n.forEach((a) => {
        a.type === i && a.trackId === o.id && tr(n, a, r);
      });
    }),
    r
  );
}
const _s = ja;
function Va(n, e) {
  const t = n && n.navigator;
  if (!t.mediaDevices) return;
  const i = function (a) {
      if (typeof a != "object" || a.mandatory || a.optional) return a;
      const c = {};
      return (
        Object.keys(a).forEach((d) => {
          if (d === "require" || d === "advanced" || d === "mediaSource")
            return;
          const u = typeof a[d] == "object" ? a[d] : { ideal: a[d] };
          u.exact !== void 0 &&
            typeof u.exact == "number" &&
            (u.min = u.max = u.exact);
          const l = function (h, f) {
            return h
              ? h + f.charAt(0).toUpperCase() + f.slice(1)
              : f === "deviceId"
              ? "sourceId"
              : f;
          };
          if (u.ideal !== void 0) {
            c.optional = c.optional || [];
            let h = {};
            typeof u.ideal == "number"
              ? ((h[l("min", d)] = u.ideal),
                c.optional.push(h),
                (h = {}),
                (h[l("max", d)] = u.ideal),
                c.optional.push(h))
              : ((h[l("", d)] = u.ideal), c.optional.push(h));
          }
          u.exact !== void 0 && typeof u.exact != "number"
            ? ((c.mandatory = c.mandatory || {}),
              (c.mandatory[l("", d)] = u.exact))
            : ["min", "max"].forEach((h) => {
                u[h] !== void 0 &&
                  ((c.mandatory = c.mandatory || {}),
                  (c.mandatory[l(h, d)] = u[h]));
              });
        }),
        a.advanced && (c.optional = (c.optional || []).concat(a.advanced)),
        c
      );
    },
    r = function (a, c) {
      if (e.version >= 61) return c(a);
      if (
        ((a = JSON.parse(JSON.stringify(a))), a && typeof a.audio == "object")
      ) {
        const d = function (u, l, h) {
          l in u && !(h in u) && ((u[h] = u[l]), delete u[l]);
        };
        (a = JSON.parse(JSON.stringify(a))),
          d(a.audio, "autoGainControl", "googAutoGainControl"),
          d(a.audio, "noiseSuppression", "googNoiseSuppression"),
          (a.audio = i(a.audio));
      }
      if (a && typeof a.video == "object") {
        let d = a.video.facingMode;
        d = d && (typeof d == "object" ? d : { ideal: d });
        const u = e.version < 66;
        if (
          d &&
          (d.exact === "user" ||
            d.exact === "environment" ||
            d.ideal === "user" ||
            d.ideal === "environment") &&
          !(
            t.mediaDevices.getSupportedConstraints &&
            t.mediaDevices.getSupportedConstraints().facingMode &&
            !u
          )
        ) {
          delete a.video.facingMode;
          let l;
          if (
            (d.exact === "environment" || d.ideal === "environment"
              ? (l = ["back", "rear"])
              : (d.exact === "user" || d.ideal === "user") && (l = ["front"]),
            l)
          )
            return t.mediaDevices.enumerateDevices().then((h) => {
              h = h.filter((g) => g.kind === "videoinput");
              let f = h.find((g) =>
                l.some((p) => g.label.toLowerCase().includes(p))
              );
              return (
                !f && h.length && l.includes("back") && (f = h[h.length - 1]),
                f &&
                  (a.video.deviceId = d.exact
                    ? { exact: f.deviceId }
                    : { ideal: f.deviceId }),
                (a.video = i(a.video)),
                _s("chrome: " + JSON.stringify(a)),
                c(a)
              );
            });
        }
        a.video = i(a.video);
      }
      return _s("chrome: " + JSON.stringify(a)), c(a);
    },
    s = function (a) {
      return e.version >= 64
        ? a
        : {
            name:
              {
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError",
              }[a.name] || a.name,
            message: a.message,
            constraint: a.constraint || a.constraintName,
            toString() {
              return this.name + (this.message && ": ") + this.message;
            },
          };
    },
    o = function (a, c, d) {
      r(a, (u) => {
        t.webkitGetUserMedia(u, c, (l) => {
          d && d(s(l));
        });
      });
    };
  if (((t.getUserMedia = o.bind(t)), t.mediaDevices.getUserMedia)) {
    const a = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function (c) {
      return r(c, (d) =>
        a(d).then(
          (u) => {
            if (
              (d.audio && !u.getAudioTracks().length) ||
              (d.video && !u.getVideoTracks().length)
            )
              throw (
                (u.getTracks().forEach((l) => {
                  l.stop();
                }),
                new DOMException("", "NotFoundError"))
              );
            return u;
          },
          (u) => Promise.reject(s(u))
        )
      );
    };
  }
}
function qa(n) {
  n.MediaStream = n.MediaStream || n.webkitMediaStream;
}
function za(n) {
  if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    !("ontrack" in n.RTCPeerConnection.prototype)
  ) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", {
      get() {
        return this._ontrack;
      },
      set(t) {
        this._ontrack && this.removeEventListener("track", this._ontrack),
          this.addEventListener("track", (this._ontrack = t));
      },
      enumerable: !0,
      configurable: !0,
    });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      return (
        this._ontrackpoly ||
          ((this._ontrackpoly = (i) => {
            i.stream.addEventListener("addtrack", (r) => {
              let s;
              n.RTCPeerConnection.prototype.getReceivers
                ? (s = this.getReceivers().find(
                    (a) => a.track && a.track.id === r.track.id
                  ))
                : (s = { track: r.track });
              const o = new Event("track");
              (o.track = r.track),
                (o.receiver = s),
                (o.transceiver = { receiver: s }),
                (o.streams = [i.stream]),
                this.dispatchEvent(o);
            }),
              i.stream.getTracks().forEach((r) => {
                let s;
                n.RTCPeerConnection.prototype.getReceivers
                  ? (s = this.getReceivers().find(
                      (a) => a.track && a.track.id === r.id
                    ))
                  : (s = { track: r });
                const o = new Event("track");
                (o.track = r),
                  (o.receiver = s),
                  (o.transceiver = { receiver: s }),
                  (o.streams = [i.stream]),
                  this.dispatchEvent(o);
              });
          }),
          this.addEventListener("addstream", this._ontrackpoly)),
        e.apply(this, arguments)
      );
    };
  } else
    Tt(
      n,
      "track",
      (e) => (
        e.transceiver ||
          Object.defineProperty(e, "transceiver", {
            value: { receiver: e.receiver },
          }),
        e
      )
    );
}
function Wa(n) {
  if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    !("getSenders" in n.RTCPeerConnection.prototype) &&
    "createDTMFSender" in n.RTCPeerConnection.prototype
  ) {
    const e = function (r, s) {
      return {
        track: s,
        get dtmf() {
          return (
            this._dtmf === void 0 &&
              (s.kind === "audio"
                ? (this._dtmf = r.createDTMFSender(s))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
        _pc: r,
      };
    };
    if (!n.RTCPeerConnection.prototype.getSenders) {
      n.RTCPeerConnection.prototype.getSenders = function () {
        return (this._senders = this._senders || []), this._senders.slice();
      };
      const r = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addTrack = function (a, c) {
        let d = r.apply(this, arguments);
        return d || ((d = e(this, a)), this._senders.push(d)), d;
      };
      const s = n.RTCPeerConnection.prototype.removeTrack;
      n.RTCPeerConnection.prototype.removeTrack = function (a) {
        s.apply(this, arguments);
        const c = this._senders.indexOf(a);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function (s) {
      (this._senders = this._senders || []),
        t.apply(this, [s]),
        s.getTracks().forEach((o) => {
          this._senders.push(e(this, o));
        });
    };
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function (s) {
      (this._senders = this._senders || []),
        i.apply(this, [s]),
        s.getTracks().forEach((o) => {
          const a = this._senders.find((c) => c.track === o);
          a && this._senders.splice(this._senders.indexOf(a), 1);
        });
    };
  } else if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    "getSenders" in n.RTCPeerConnection.prototype &&
    "createDTMFSender" in n.RTCPeerConnection.prototype &&
    n.RTCRtpSender &&
    !("dtmf" in n.RTCRtpSender.prototype)
  ) {
    const e = n.RTCPeerConnection.prototype.getSenders;
    (n.RTCPeerConnection.prototype.getSenders = function () {
      const i = e.apply(this, []);
      return i.forEach((r) => (r._pc = this)), i;
    }),
      Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
        get() {
          return (
            this._dtmf === void 0 &&
              (this.track.kind === "audio"
                ? (this._dtmf = this._pc.createDTMFSender(this.track))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
      });
  }
}
function Ga(n) {
  if (
    !(
      typeof n == "object" &&
      n.RTCPeerConnection &&
      n.RTCRtpSender &&
      n.RTCRtpReceiver
    )
  )
    return;
  if (!("getStats" in n.RTCRtpSender.prototype)) {
    const t = n.RTCPeerConnection.prototype.getSenders;
    t &&
      (n.RTCPeerConnection.prototype.getSenders = function () {
        const s = t.apply(this, []);
        return s.forEach((o) => (o._pc = this)), s;
      });
    const i = n.RTCPeerConnection.prototype.addTrack;
    i &&
      (n.RTCPeerConnection.prototype.addTrack = function () {
        const s = i.apply(this, arguments);
        return (s._pc = this), s;
      }),
      (n.RTCRtpSender.prototype.getStats = function () {
        const s = this;
        return this._pc.getStats().then((o) => Rs(o, s.track, !0));
      });
  }
  if (!("getStats" in n.RTCRtpReceiver.prototype)) {
    const t = n.RTCPeerConnection.prototype.getReceivers;
    t &&
      (n.RTCPeerConnection.prototype.getReceivers = function () {
        const r = t.apply(this, []);
        return r.forEach((s) => (s._pc = this)), r;
      }),
      Tt(n, "track", (i) => ((i.receiver._pc = i.srcElement), i)),
      (n.RTCRtpReceiver.prototype.getStats = function () {
        const r = this;
        return this._pc.getStats().then((s) => Rs(s, r.track, !1));
      });
  }
  if (
    !(
      "getStats" in n.RTCRtpSender.prototype &&
      "getStats" in n.RTCRtpReceiver.prototype
    )
  )
    return;
  const e = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof n.MediaStreamTrack) {
      const i = arguments[0];
      let r, s, o;
      return (
        this.getSenders().forEach((a) => {
          a.track === i && (r ? (o = !0) : (r = a));
        }),
        this.getReceivers().forEach(
          (a) => (a.track === i && (s ? (o = !0) : (s = a)), a.track === i)
        ),
        o || (r && s)
          ? Promise.reject(
              new DOMException(
                "There are more than one sender or receiver for the track.",
                "InvalidAccessError"
              )
            )
          : r
          ? r.getStats()
          : s
          ? s.getStats()
          : Promise.reject(
              new DOMException(
                "There is no sender or receiver for the track.",
                "InvalidAccessError"
              )
            )
      );
    }
    return e.apply(this, arguments);
  };
}
function Ka(n) {
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      Object.keys(this._shimmedLocalStreams).map(
        (o) => this._shimmedLocalStreams[o][0]
      )
    );
  };
  const e = n.RTCPeerConnection.prototype.addTrack;
  n.RTCPeerConnection.prototype.addTrack = function (o, a) {
    if (!a) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = e.apply(this, arguments);
    return (
      this._shimmedLocalStreams[a.id]
        ? this._shimmedLocalStreams[a.id].indexOf(c) === -1 &&
          this._shimmedLocalStreams[a.id].push(c)
        : (this._shimmedLocalStreams[a.id] = [a, c]),
      c
    );
  };
  const t = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (o) {
    (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      o.getTracks().forEach((d) => {
        if (this.getSenders().find((l) => l.track === d))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      });
    const a = this.getSenders();
    t.apply(this, arguments);
    const c = this.getSenders().filter((d) => a.indexOf(d) === -1);
    this._shimmedLocalStreams[o.id] = [o].concat(c);
  };
  const i = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function (o) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      delete this._shimmedLocalStreams[o.id],
      i.apply(this, arguments)
    );
  };
  const r = n.RTCPeerConnection.prototype.removeTrack;
  n.RTCPeerConnection.prototype.removeTrack = function (o) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      o &&
        Object.keys(this._shimmedLocalStreams).forEach((a) => {
          const c = this._shimmedLocalStreams[a].indexOf(o);
          c !== -1 && this._shimmedLocalStreams[a].splice(c, 1),
            this._shimmedLocalStreams[a].length === 1 &&
              delete this._shimmedLocalStreams[a];
        }),
      r.apply(this, arguments)
    );
  };
}
function Ha(n, e) {
  if (!n.RTCPeerConnection) return;
  if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65) return Ka(n);
  const t = n.RTCPeerConnection.prototype.getLocalStreams;
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    const u = t.apply(this);
    return (
      (this._reverseStreams = this._reverseStreams || {}),
      u.map((l) => this._reverseStreams[l.id])
    );
  };
  const i = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (u) {
    if (
      ((this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      u.getTracks().forEach((l) => {
        if (this.getSenders().find((f) => f.track === l))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      }),
      !this._reverseStreams[u.id])
    ) {
      const l = new n.MediaStream(u.getTracks());
      (this._streams[u.id] = l), (this._reverseStreams[l.id] = u), (u = l);
    }
    i.apply(this, [u]);
  };
  const r = n.RTCPeerConnection.prototype.removeStream;
  (n.RTCPeerConnection.prototype.removeStream = function (u) {
    (this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      r.apply(this, [this._streams[u.id] || u]),
      delete this._reverseStreams[
        this._streams[u.id] ? this._streams[u.id].id : u.id
      ],
      delete this._streams[u.id];
  }),
    (n.RTCPeerConnection.prototype.addTrack = function (u, l) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError"
        );
      const h = [].slice.call(arguments, 1);
      if (h.length !== 1 || !h[0].getTracks().find((p) => p === u))
        throw new DOMException(
          "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
          "NotSupportedError"
        );
      if (this.getSenders().find((p) => p.track === u))
        throw new DOMException("Track already exists.", "InvalidAccessError");
      (this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {});
      const g = this._streams[l.id];
      if (g)
        g.addTrack(u),
          Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"));
          });
      else {
        const p = new n.MediaStream([u]);
        (this._streams[l.id] = p),
          (this._reverseStreams[p.id] = l),
          this.addStream(p);
      }
      return this.getSenders().find((p) => p.track === u);
    });
  function s(d, u) {
    let l = u.sdp;
    return (
      Object.keys(d._reverseStreams || []).forEach((h) => {
        const f = d._reverseStreams[h],
          g = d._streams[f.id];
        l = l.replace(new RegExp(g.id, "g"), f.id);
      }),
      new RTCSessionDescription({ type: u.type, sdp: l })
    );
  }
  function o(d, u) {
    let l = u.sdp;
    return (
      Object.keys(d._reverseStreams || []).forEach((h) => {
        const f = d._reverseStreams[h],
          g = d._streams[f.id];
        l = l.replace(new RegExp(f.id, "g"), g.id);
      }),
      new RTCSessionDescription({ type: u.type, sdp: l })
    );
  }
  ["createOffer", "createAnswer"].forEach(function (d) {
    const u = n.RTCPeerConnection.prototype[d],
      l = {
        [d]() {
          const h = arguments;
          return arguments.length && typeof arguments[0] == "function"
            ? u.apply(this, [
                (g) => {
                  const p = s(this, g);
                  h[0].apply(null, [p]);
                },
                (g) => {
                  h[1] && h[1].apply(null, g);
                },
                arguments[2],
              ])
            : u.apply(this, arguments).then((g) => s(this, g));
        },
      };
    n.RTCPeerConnection.prototype[d] = l[d];
  });
  const a = n.RTCPeerConnection.prototype.setLocalDescription;
  n.RTCPeerConnection.prototype.setLocalDescription = function () {
    return !arguments.length || !arguments[0].type
      ? a.apply(this, arguments)
      : ((arguments[0] = o(this, arguments[0])), a.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(
    n.RTCPeerConnection.prototype,
    "localDescription"
  );
  Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", {
    get() {
      const d = c.get.apply(this);
      return d.type === "" ? d : s(this, d);
    },
  }),
    (n.RTCPeerConnection.prototype.removeTrack = function (u) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError"
        );
      if (!u._pc)
        throw new DOMException(
          "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
          "TypeError"
        );
      if (!(u._pc === this))
        throw new DOMException(
          "Sender was not created by this connection.",
          "InvalidAccessError"
        );
      this._streams = this._streams || {};
      let h;
      Object.keys(this._streams).forEach((f) => {
        this._streams[f].getTracks().find((p) => u.track === p) &&
          (h = this._streams[f]);
      }),
        h &&
          (h.getTracks().length === 1
            ? this.removeStream(this._reverseStreams[h.id])
            : h.removeTrack(u.track),
          this.dispatchEvent(new Event("negotiationneeded")));
    });
}
function nr(n, e) {
  !n.RTCPeerConnection &&
    n.webkitRTCPeerConnection &&
    (n.RTCPeerConnection = n.webkitRTCPeerConnection),
    n.RTCPeerConnection &&
      e.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (t) {
        const i = n.RTCPeerConnection.prototype[t],
          r = {
            [t]() {
              return (
                (arguments[0] = new (
                  t === "addIceCandidate"
                    ? n.RTCIceCandidate
                    : n.RTCSessionDescription
                )(arguments[0])),
                i.apply(this, arguments)
              );
            },
          };
        n.RTCPeerConnection.prototype[t] = r[t];
      });
}
function Ja(n, e) {
  Tt(n, "negotiationneeded", (t) => {
    const i = t.target;
    if (
      !(
        (e.version < 72 ||
          (i.getConfiguration &&
            i.getConfiguration().sdpSemantics === "plan-b")) &&
        i.signalingState !== "stable"
      )
    )
      return t;
  });
}
var Is = Object.freeze({
  __proto__: null,
  fixNegotiationNeeded: Ja,
  shimAddTrackRemoveTrack: Ha,
  shimAddTrackRemoveTrackWithNative: Ka,
  shimGetSendersWithDtmf: Wa,
  shimGetUserMedia: Va,
  shimMediaStream: qa,
  shimOnTrack: za,
  shimPeerConnection: nr,
  shimSenderReceiverGetStats: Ga,
});
function $a(n, e) {
  const t = n && n.navigator,
    i = n && n.MediaStreamTrack;
  if (
    ((t.getUserMedia = function (r, s, o) {
      Dr("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
        t.mediaDevices.getUserMedia(r).then(s, o);
    }),
    !(
      e.version > 55 &&
      "autoGainControl" in t.mediaDevices.getSupportedConstraints()
    ))
  ) {
    const r = function (o, a, c) {
        a in o && !(c in o) && ((o[c] = o[a]), delete o[a]);
      },
      s = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (
      ((t.mediaDevices.getUserMedia = function (o) {
        return (
          typeof o == "object" &&
            typeof o.audio == "object" &&
            ((o = JSON.parse(JSON.stringify(o))),
            r(o.audio, "autoGainControl", "mozAutoGainControl"),
            r(o.audio, "noiseSuppression", "mozNoiseSuppression")),
          s(o)
        );
      }),
      i && i.prototype.getSettings)
    ) {
      const o = i.prototype.getSettings;
      i.prototype.getSettings = function () {
        const a = o.apply(this, arguments);
        return (
          r(a, "mozAutoGainControl", "autoGainControl"),
          r(a, "mozNoiseSuppression", "noiseSuppression"),
          a
        );
      };
    }
    if (i && i.prototype.applyConstraints) {
      const o = i.prototype.applyConstraints;
      i.prototype.applyConstraints = function (a) {
        return (
          this.kind === "audio" &&
            typeof a == "object" &&
            ((a = JSON.parse(JSON.stringify(a))),
            r(a, "autoGainControl", "mozAutoGainControl"),
            r(a, "noiseSuppression", "mozNoiseSuppression")),
          o.apply(this, [a])
        );
      };
    }
  }
}
function ch(n, e) {
  (n.navigator.mediaDevices && "getDisplayMedia" in n.navigator.mediaDevices) ||
    (n.navigator.mediaDevices &&
      (n.navigator.mediaDevices.getDisplayMedia = function (i) {
        if (!(i && i.video)) {
          const r = new DOMException(
            "getDisplayMedia without video constraints is undefined"
          );
          return (r.name = "NotFoundError"), (r.code = 8), Promise.reject(r);
        }
        return (
          i.video === !0
            ? (i.video = { mediaSource: e })
            : (i.video.mediaSource = e),
          n.navigator.mediaDevices.getUserMedia(i)
        );
      }));
}
function Qa(n) {
  typeof n == "object" &&
    n.RTCTrackEvent &&
    "receiver" in n.RTCTrackEvent.prototype &&
    !("transceiver" in n.RTCTrackEvent.prototype) &&
    Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function ir(n, e) {
  if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection))
    return;
  !n.RTCPeerConnection &&
    n.mozRTCPeerConnection &&
    (n.RTCPeerConnection = n.mozRTCPeerConnection),
    e.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (r) {
        const s = n.RTCPeerConnection.prototype[r],
          o = {
            [r]() {
              return (
                (arguments[0] = new (
                  r === "addIceCandidate"
                    ? n.RTCIceCandidate
                    : n.RTCSessionDescription
                )(arguments[0])),
                s.apply(this, arguments)
              );
            },
          };
        n.RTCPeerConnection.prototype[r] = o[r];
      });
  const t = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate",
    },
    i = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    const [s, o, a] = arguments;
    return i
      .apply(this, [s || null])
      .then((c) => {
        if (e.version < 53 && !o)
          try {
            c.forEach((d) => {
              d.type = t[d.type] || d.type;
            });
          } catch (d) {
            if (d.name !== "TypeError") throw d;
            c.forEach((u, l) => {
              c.set(l, Object.assign({}, u, { type: t[u.type] || u.type }));
            });
          }
        return c;
      })
      .then(o, a);
  };
}
function Ya(n) {
  if (
    !(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) ||
    (n.RTCRtpSender && "getStats" in n.RTCRtpSender.prototype)
  )
    return;
  const e = n.RTCPeerConnection.prototype.getSenders;
  e &&
    (n.RTCPeerConnection.prototype.getSenders = function () {
      const r = e.apply(this, []);
      return r.forEach((s) => (s._pc = this)), r;
    });
  const t = n.RTCPeerConnection.prototype.addTrack;
  t &&
    (n.RTCPeerConnection.prototype.addTrack = function () {
      const r = t.apply(this, arguments);
      return (r._pc = this), r;
    }),
    (n.RTCRtpSender.prototype.getStats = function () {
      return this.track
        ? this._pc.getStats(this.track)
        : Promise.resolve(new Map());
    });
}
function Xa(n) {
  if (
    !(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) ||
    (n.RTCRtpSender && "getStats" in n.RTCRtpReceiver.prototype)
  )
    return;
  const e = n.RTCPeerConnection.prototype.getReceivers;
  e &&
    (n.RTCPeerConnection.prototype.getReceivers = function () {
      const i = e.apply(this, []);
      return i.forEach((r) => (r._pc = this)), i;
    }),
    Tt(n, "track", (t) => ((t.receiver._pc = t.srcElement), t)),
    (n.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    });
}
function Za(n) {
  !n.RTCPeerConnection ||
    "removeStream" in n.RTCPeerConnection.prototype ||
    (n.RTCPeerConnection.prototype.removeStream = function (t) {
      Dr("removeStream", "removeTrack"),
        this.getSenders().forEach((i) => {
          i.track && t.getTracks().includes(i.track) && this.removeTrack(i);
        });
    });
}
function ec(n) {
  n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel);
}
function tc(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.addTransceiver;
  e &&
    (n.RTCPeerConnection.prototype.addTransceiver = function () {
      this.setParametersPromises = [];
      let i = arguments[1] && arguments[1].sendEncodings;
      i === void 0 && (i = []), (i = [...i]);
      const r = i.length > 0;
      r &&
        i.forEach((o) => {
          if ("rid" in o && !/^[a-z0-9]{0,16}$/i.test(o.rid))
            throw new TypeError("Invalid RID value provided.");
          if (
            "scaleResolutionDownBy" in o &&
            !(parseFloat(o.scaleResolutionDownBy) >= 1)
          )
            throw new RangeError("scale_resolution_down_by must be >= 1.0");
          if ("maxFramerate" in o && !(parseFloat(o.maxFramerate) >= 0))
            throw new RangeError("max_framerate must be >= 0.0");
        });
      const s = e.apply(this, arguments);
      if (r) {
        const { sender: o } = s,
          a = o.getParameters();
        (!("encodings" in a) ||
          (a.encodings.length === 1 &&
            Object.keys(a.encodings[0]).length === 0)) &&
          ((a.encodings = i),
          (o.sendEncodings = i),
          this.setParametersPromises.push(
            o
              .setParameters(a)
              .then(() => {
                delete o.sendEncodings;
              })
              .catch(() => {
                delete o.sendEncodings;
              })
          ));
      }
      return s;
    });
}
function nc(n) {
  if (!(typeof n == "object" && n.RTCRtpSender)) return;
  const e = n.RTCRtpSender.prototype.getParameters;
  e &&
    (n.RTCRtpSender.prototype.getParameters = function () {
      const i = e.apply(this, arguments);
      return (
        "encodings" in i ||
          (i.encodings = [].concat(this.sendEncodings || [{}])),
        i
      );
    });
}
function ic(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => e.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : e.apply(this, arguments);
  };
}
function rc(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createAnswer;
  n.RTCPeerConnection.prototype.createAnswer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => e.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : e.apply(this, arguments);
  };
}
var xs = Object.freeze({
  __proto__: null,
  shimAddTransceiver: tc,
  shimCreateAnswer: rc,
  shimCreateOffer: ic,
  shimGetDisplayMedia: ch,
  shimGetParameters: nc,
  shimGetUserMedia: $a,
  shimOnTrack: Qa,
  shimPeerConnection: ir,
  shimRTCDataChannel: ec,
  shimReceiverGetStats: Xa,
  shimRemoveStream: Za,
  shimSenderGetStats: Ya,
});
function sc(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection)) {
    if (
      ("getLocalStreams" in n.RTCPeerConnection.prototype ||
        (n.RTCPeerConnection.prototype.getLocalStreams = function () {
          return (
            this._localStreams || (this._localStreams = []), this._localStreams
          );
        }),
      !("addStream" in n.RTCPeerConnection.prototype))
    ) {
      const e = n.RTCPeerConnection.prototype.addTrack;
      (n.RTCPeerConnection.prototype.addStream = function (i) {
        this._localStreams || (this._localStreams = []),
          this._localStreams.includes(i) || this._localStreams.push(i),
          i.getAudioTracks().forEach((r) => e.call(this, r, i)),
          i.getVideoTracks().forEach((r) => e.call(this, r, i));
      }),
        (n.RTCPeerConnection.prototype.addTrack = function (i) {
          for (
            var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            s[o - 1] = arguments[o];
          return (
            s &&
              s.forEach((a) => {
                this._localStreams
                  ? this._localStreams.includes(a) || this._localStreams.push(a)
                  : (this._localStreams = [a]);
              }),
            e.apply(this, arguments)
          );
        });
    }
    "removeStream" in n.RTCPeerConnection.prototype ||
      (n.RTCPeerConnection.prototype.removeStream = function (t) {
        this._localStreams || (this._localStreams = []);
        const i = this._localStreams.indexOf(t);
        if (i === -1) return;
        this._localStreams.splice(i, 1);
        const r = t.getTracks();
        this.getSenders().forEach((s) => {
          r.includes(s.track) && this.removeTrack(s);
        });
      });
  }
}
function oc(n) {
  if (
    !(typeof n != "object" || !n.RTCPeerConnection) &&
    ("getRemoteStreams" in n.RTCPeerConnection.prototype ||
      (n.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      }),
    !("onaddstream" in n.RTCPeerConnection.prototype))
  ) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", {
      get() {
        return this._onaddstream;
      },
      set(t) {
        this._onaddstream &&
          (this.removeEventListener("addstream", this._onaddstream),
          this.removeEventListener("track", this._onaddstreampoly)),
          this.addEventListener("addstream", (this._onaddstream = t)),
          this.addEventListener(
            "track",
            (this._onaddstreampoly = (i) => {
              i.streams.forEach((r) => {
                if (
                  (this._remoteStreams || (this._remoteStreams = []),
                  this._remoteStreams.includes(r))
                )
                  return;
                this._remoteStreams.push(r);
                const s = new Event("addstream");
                (s.stream = r), this.dispatchEvent(s);
              });
            })
          );
      },
    });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      const i = this;
      return (
        this._onaddstreampoly ||
          this.addEventListener(
            "track",
            (this._onaddstreampoly = function (r) {
              r.streams.forEach((s) => {
                if (
                  (i._remoteStreams || (i._remoteStreams = []),
                  i._remoteStreams.indexOf(s) >= 0)
                )
                  return;
                i._remoteStreams.push(s);
                const o = new Event("addstream");
                (o.stream = s), i.dispatchEvent(o);
              });
            })
          ),
        e.apply(i, arguments)
      );
    };
  }
}
function ac(n) {
  if (typeof n != "object" || !n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection.prototype,
    t = e.createOffer,
    i = e.createAnswer,
    r = e.setLocalDescription,
    s = e.setRemoteDescription,
    o = e.addIceCandidate;
  (e.createOffer = function (d, u) {
    const l = arguments.length >= 2 ? arguments[2] : arguments[0],
      h = t.apply(this, [l]);
    return u ? (h.then(d, u), Promise.resolve()) : h;
  }),
    (e.createAnswer = function (d, u) {
      const l = arguments.length >= 2 ? arguments[2] : arguments[0],
        h = i.apply(this, [l]);
      return u ? (h.then(d, u), Promise.resolve()) : h;
    });
  let a = function (c, d, u) {
    const l = r.apply(this, [c]);
    return u ? (l.then(d, u), Promise.resolve()) : l;
  };
  (e.setLocalDescription = a),
    (a = function (c, d, u) {
      const l = s.apply(this, [c]);
      return u ? (l.then(d, u), Promise.resolve()) : l;
    }),
    (e.setRemoteDescription = a),
    (a = function (c, d, u) {
      const l = o.apply(this, [c]);
      return u ? (l.then(d, u), Promise.resolve()) : l;
    }),
    (e.addIceCandidate = a);
}
function cc(n) {
  const e = n && n.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices,
      i = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = (r) => i(dc(r));
  }
  !e.getUserMedia &&
    e.mediaDevices &&
    e.mediaDevices.getUserMedia &&
    (e.getUserMedia = function (i, r, s) {
      e.mediaDevices.getUserMedia(i).then(r, s);
    }.bind(e));
}
function dc(n) {
  return n && n.video !== void 0
    ? Object.assign({}, n, { video: Ba(n.video) })
    : n;
}
function uc(n) {
  if (!n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection;
  (n.RTCPeerConnection = function (i, r) {
    if (i && i.iceServers) {
      const s = [];
      for (let o = 0; o < i.iceServers.length; o++) {
        let a = i.iceServers[o];
        a.urls === void 0 && a.url
          ? (Dr("RTCIceServer.url", "RTCIceServer.urls"),
            (a = JSON.parse(JSON.stringify(a))),
            (a.urls = a.url),
            delete a.url,
            s.push(a))
          : s.push(i.iceServers[o]);
      }
      i.iceServers = s;
    }
    return new e(i, r);
  }),
    (n.RTCPeerConnection.prototype = e.prototype),
    "generateCertificate" in e &&
      Object.defineProperty(n.RTCPeerConnection, "generateCertificate", {
        get() {
          return e.generateCertificate;
        },
      });
}
function lc(n) {
  typeof n == "object" &&
    n.RTCTrackEvent &&
    "receiver" in n.RTCTrackEvent.prototype &&
    !("transceiver" in n.RTCTrackEvent.prototype) &&
    Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function hc(n) {
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function (i) {
    if (i) {
      typeof i.offerToReceiveAudio < "u" &&
        (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
      const r = this.getTransceivers().find(
        (o) => o.receiver.track.kind === "audio"
      );
      i.offerToReceiveAudio === !1 && r
        ? r.direction === "sendrecv"
          ? r.setDirection
            ? r.setDirection("sendonly")
            : (r.direction = "sendonly")
          : r.direction === "recvonly" &&
            (r.setDirection
              ? r.setDirection("inactive")
              : (r.direction = "inactive"))
        : i.offerToReceiveAudio === !0 &&
          !r &&
          this.addTransceiver("audio", { direction: "recvonly" }),
        typeof i.offerToReceiveVideo < "u" &&
          (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
      const s = this.getTransceivers().find(
        (o) => o.receiver.track.kind === "video"
      );
      i.offerToReceiveVideo === !1 && s
        ? s.direction === "sendrecv"
          ? s.setDirection
            ? s.setDirection("sendonly")
            : (s.direction = "sendonly")
          : s.direction === "recvonly" &&
            (s.setDirection
              ? s.setDirection("inactive")
              : (s.direction = "inactive"))
        : i.offerToReceiveVideo === !0 &&
          !s &&
          this.addTransceiver("video", { direction: "recvonly" });
    }
    return e.apply(this, arguments);
  };
}
function fc(n) {
  typeof n != "object" ||
    n.AudioContext ||
    (n.AudioContext = n.webkitAudioContext);
}
var As = Object.freeze({
    __proto__: null,
    shimAudioContext: fc,
    shimCallbacksAPI: ac,
    shimConstraints: dc,
    shimCreateOfferLegacy: hc,
    shimGetUserMedia: cc,
    shimLocalStreamsAPI: sc,
    shimRTCIceServerUrls: uc,
    shimRemoteStreamsAPI: oc,
    shimTrackEventTransceiver: lc,
  }),
  ki = { exports: {} },
  Ds;
function dh() {
  return (
    Ds ||
      ((Ds = 1),
      (function (n) {
        const e = {};
        (e.generateIdentifier = function () {
          return Math.random().toString(36).substring(2, 12);
        }),
          (e.localCName = e.generateIdentifier()),
          (e.splitLines = function (t) {
            return t
              .trim()
              .split(
                `
`
              )
              .map((i) => i.trim());
          }),
          (e.splitSections = function (t) {
            return t
              .split(
                `
m=`
              )
              .map(
                (r, s) =>
                  (s > 0 ? "m=" + r : r).trim() +
                  `\r
`
              );
          }),
          (e.getDescription = function (t) {
            const i = e.splitSections(t);
            return i && i[0];
          }),
          (e.getMediaSections = function (t) {
            const i = e.splitSections(t);
            return i.shift(), i;
          }),
          (e.matchPrefix = function (t, i) {
            return e.splitLines(t).filter((r) => r.indexOf(i) === 0);
          }),
          (e.parseCandidate = function (t) {
            let i;
            t.indexOf("a=candidate:") === 0
              ? (i = t.substring(12).split(" "))
              : (i = t.substring(10).split(" "));
            const r = {
              foundation: i[0],
              component: { 1: "rtp", 2: "rtcp" }[i[1]] || i[1],
              protocol: i[2].toLowerCase(),
              priority: parseInt(i[3], 10),
              ip: i[4],
              address: i[4],
              port: parseInt(i[5], 10),
              type: i[7],
            };
            for (let s = 8; s < i.length; s += 2)
              switch (i[s]) {
                case "raddr":
                  r.relatedAddress = i[s + 1];
                  break;
                case "rport":
                  r.relatedPort = parseInt(i[s + 1], 10);
                  break;
                case "tcptype":
                  r.tcpType = i[s + 1];
                  break;
                case "ufrag":
                  (r.ufrag = i[s + 1]), (r.usernameFragment = i[s + 1]);
                  break;
                default:
                  r[i[s]] === void 0 && (r[i[s]] = i[s + 1]);
                  break;
              }
            return r;
          }),
          (e.writeCandidate = function (t) {
            const i = [];
            i.push(t.foundation);
            const r = t.component;
            r === "rtp" ? i.push(1) : r === "rtcp" ? i.push(2) : i.push(r),
              i.push(t.protocol.toUpperCase()),
              i.push(t.priority),
              i.push(t.address || t.ip),
              i.push(t.port);
            const s = t.type;
            return (
              i.push("typ"),
              i.push(s),
              s !== "host" &&
                t.relatedAddress &&
                t.relatedPort &&
                (i.push("raddr"),
                i.push(t.relatedAddress),
                i.push("rport"),
                i.push(t.relatedPort)),
              t.tcpType &&
                t.protocol.toLowerCase() === "tcp" &&
                (i.push("tcptype"), i.push(t.tcpType)),
              (t.usernameFragment || t.ufrag) &&
                (i.push("ufrag"), i.push(t.usernameFragment || t.ufrag)),
              "candidate:" + i.join(" ")
            );
          }),
          (e.parseIceOptions = function (t) {
            return t.substring(14).split(" ");
          }),
          (e.parseRtpMap = function (t) {
            let i = t.substring(9).split(" ");
            const r = { payloadType: parseInt(i.shift(), 10) };
            return (
              (i = i[0].split("/")),
              (r.name = i[0]),
              (r.clockRate = parseInt(i[1], 10)),
              (r.channels = i.length === 3 ? parseInt(i[2], 10) : 1),
              (r.numChannels = r.channels),
              r
            );
          }),
          (e.writeRtpMap = function (t) {
            let i = t.payloadType;
            t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
            const r = t.channels || t.numChannels || 1;
            return (
              "a=rtpmap:" +
              i +
              " " +
              t.name +
              "/" +
              t.clockRate +
              (r !== 1 ? "/" + r : "") +
              `\r
`
            );
          }),
          (e.parseExtmap = function (t) {
            const i = t.substring(9).split(" ");
            return {
              id: parseInt(i[0], 10),
              direction:
                i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv",
              uri: i[1],
              attributes: i.slice(2).join(" "),
            };
          }),
          (e.writeExtmap = function (t) {
            return (
              "a=extmap:" +
              (t.id || t.preferredId) +
              (t.direction && t.direction !== "sendrecv"
                ? "/" + t.direction
                : "") +
              " " +
              t.uri +
              (t.attributes ? " " + t.attributes : "") +
              `\r
`
            );
          }),
          (e.parseFmtp = function (t) {
            const i = {};
            let r;
            const s = t.substring(t.indexOf(" ") + 1).split(";");
            for (let o = 0; o < s.length; o++)
              (r = s[o].trim().split("=")), (i[r[0].trim()] = r[1]);
            return i;
          }),
          (e.writeFmtp = function (t) {
            let i = "",
              r = t.payloadType;
            if (
              (t.preferredPayloadType !== void 0 &&
                (r = t.preferredPayloadType),
              t.parameters && Object.keys(t.parameters).length)
            ) {
              const s = [];
              Object.keys(t.parameters).forEach((o) => {
                t.parameters[o] !== void 0
                  ? s.push(o + "=" + t.parameters[o])
                  : s.push(o);
              }),
                (i +=
                  "a=fmtp:" +
                  r +
                  " " +
                  s.join(";") +
                  `\r
`);
            }
            return i;
          }),
          (e.parseRtcpFb = function (t) {
            const i = t.substring(t.indexOf(" ") + 1).split(" ");
            return { type: i.shift(), parameter: i.join(" ") };
          }),
          (e.writeRtcpFb = function (t) {
            let i = "",
              r = t.payloadType;
            return (
              t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType),
              t.rtcpFeedback &&
                t.rtcpFeedback.length &&
                t.rtcpFeedback.forEach((s) => {
                  i +=
                    "a=rtcp-fb:" +
                    r +
                    " " +
                    s.type +
                    (s.parameter && s.parameter.length
                      ? " " + s.parameter
                      : "") +
                    `\r
`;
                }),
              i
            );
          }),
          (e.parseSsrcMedia = function (t) {
            const i = t.indexOf(" "),
              r = { ssrc: parseInt(t.substring(7, i), 10) },
              s = t.indexOf(":", i);
            return (
              s > -1
                ? ((r.attribute = t.substring(i + 1, s)),
                  (r.value = t.substring(s + 1)))
                : (r.attribute = t.substring(i + 1)),
              r
            );
          }),
          (e.parseSsrcGroup = function (t) {
            const i = t.substring(13).split(" ");
            return {
              semantics: i.shift(),
              ssrcs: i.map((r) => parseInt(r, 10)),
            };
          }),
          (e.getMid = function (t) {
            const i = e.matchPrefix(t, "a=mid:")[0];
            if (i) return i.substring(6);
          }),
          (e.parseFingerprint = function (t) {
            const i = t.substring(14).split(" ");
            return { algorithm: i[0].toLowerCase(), value: i[1].toUpperCase() };
          }),
          (e.getDtlsParameters = function (t, i) {
            return {
              role: "auto",
              fingerprints: e
                .matchPrefix(t + i, "a=fingerprint:")
                .map(e.parseFingerprint),
            };
          }),
          (e.writeDtlsParameters = function (t, i) {
            let r =
              "a=setup:" +
              i +
              `\r
`;
            return (
              t.fingerprints.forEach((s) => {
                r +=
                  "a=fingerprint:" +
                  s.algorithm +
                  " " +
                  s.value +
                  `\r
`;
              }),
              r
            );
          }),
          (e.parseCryptoLine = function (t) {
            const i = t.substring(9).split(" ");
            return {
              tag: parseInt(i[0], 10),
              cryptoSuite: i[1],
              keyParams: i[2],
              sessionParams: i.slice(3),
            };
          }),
          (e.writeCryptoLine = function (t) {
            return (
              "a=crypto:" +
              t.tag +
              " " +
              t.cryptoSuite +
              " " +
              (typeof t.keyParams == "object"
                ? e.writeCryptoKeyParams(t.keyParams)
                : t.keyParams) +
              (t.sessionParams ? " " + t.sessionParams.join(" ") : "") +
              `\r
`
            );
          }),
          (e.parseCryptoKeyParams = function (t) {
            if (t.indexOf("inline:") !== 0) return null;
            const i = t.substring(7).split("|");
            return {
              keyMethod: "inline",
              keySalt: i[0],
              lifeTime: i[1],
              mkiValue: i[2] ? i[2].split(":")[0] : void 0,
              mkiLength: i[2] ? i[2].split(":")[1] : void 0,
            };
          }),
          (e.writeCryptoKeyParams = function (t) {
            return (
              t.keyMethod +
              ":" +
              t.keySalt +
              (t.lifeTime ? "|" + t.lifeTime : "") +
              (t.mkiValue && t.mkiLength
                ? "|" + t.mkiValue + ":" + t.mkiLength
                : "")
            );
          }),
          (e.getCryptoParameters = function (t, i) {
            return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine);
          }),
          (e.getIceParameters = function (t, i) {
            const r = e.matchPrefix(t + i, "a=ice-ufrag:")[0],
              s = e.matchPrefix(t + i, "a=ice-pwd:")[0];
            return r && s
              ? { usernameFragment: r.substring(12), password: s.substring(10) }
              : null;
          }),
          (e.writeIceParameters = function (t) {
            let i =
              "a=ice-ufrag:" +
              t.usernameFragment +
              `\r
a=ice-pwd:` +
              t.password +
              `\r
`;
            return (
              t.iceLite &&
                (i += `a=ice-lite\r
`),
              i
            );
          }),
          (e.parseRtpParameters = function (t) {
            const i = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: [],
              },
              s = e.splitLines(t)[0].split(" ");
            i.profile = s[2];
            for (let a = 3; a < s.length; a++) {
              const c = s[a],
                d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
              if (d) {
                const u = e.parseRtpMap(d),
                  l = e.matchPrefix(t, "a=fmtp:" + c + " ");
                switch (
                  ((u.parameters = l.length ? e.parseFmtp(l[0]) : {}),
                  (u.rtcpFeedback = e
                    .matchPrefix(t, "a=rtcp-fb:" + c + " ")
                    .map(e.parseRtcpFb)),
                  i.codecs.push(u),
                  u.name.toUpperCase())
                ) {
                  case "RED":
                  case "ULPFEC":
                    i.fecMechanisms.push(u.name.toUpperCase());
                    break;
                }
              }
            }
            e.matchPrefix(t, "a=extmap:").forEach((a) => {
              i.headerExtensions.push(e.parseExtmap(a));
            });
            const o = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
            return (
              i.codecs.forEach((a) => {
                o.forEach((c) => {
                  a.rtcpFeedback.find(
                    (u) => u.type === c.type && u.parameter === c.parameter
                  ) || a.rtcpFeedback.push(c);
                });
              }),
              i
            );
          }),
          (e.writeRtpDescription = function (t, i) {
            let r = "";
            (r += "m=" + t + " "),
              (r += i.codecs.length > 0 ? "9" : "0"),
              (r += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " "),
              (r +=
                i.codecs
                  .map((o) =>
                    o.preferredPayloadType !== void 0
                      ? o.preferredPayloadType
                      : o.payloadType
                  )
                  .join(" ") +
                `\r
`),
              (r += `c=IN IP4 0.0.0.0\r
`),
              (r += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
              i.codecs.forEach((o) => {
                (r += e.writeRtpMap(o)),
                  (r += e.writeFmtp(o)),
                  (r += e.writeRtcpFb(o));
              });
            let s = 0;
            return (
              i.codecs.forEach((o) => {
                o.maxptime > s && (s = o.maxptime);
              }),
              s > 0 &&
                (r +=
                  "a=maxptime:" +
                  s +
                  `\r
`),
              i.headerExtensions &&
                i.headerExtensions.forEach((o) => {
                  r += e.writeExtmap(o);
                }),
              r
            );
          }),
          (e.parseRtpEncodingParameters = function (t) {
            const i = [],
              r = e.parseRtpParameters(t),
              s = r.fecMechanisms.indexOf("RED") !== -1,
              o = r.fecMechanisms.indexOf("ULPFEC") !== -1,
              a = e
                .matchPrefix(t, "a=ssrc:")
                .map((h) => e.parseSsrcMedia(h))
                .filter((h) => h.attribute === "cname"),
              c = a.length > 0 && a[0].ssrc;
            let d;
            const u = e.matchPrefix(t, "a=ssrc-group:FID").map((h) =>
              h
                .substring(17)
                .split(" ")
                .map((g) => parseInt(g, 10))
            );
            u.length > 0 && u[0].length > 1 && u[0][0] === c && (d = u[0][1]),
              r.codecs.forEach((h) => {
                if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
                  let f = {
                    ssrc: c,
                    codecPayloadType: parseInt(h.parameters.apt, 10),
                  };
                  c && d && (f.rtx = { ssrc: d }),
                    i.push(f),
                    s &&
                      ((f = JSON.parse(JSON.stringify(f))),
                      (f.fec = {
                        ssrc: c,
                        mechanism: o ? "red+ulpfec" : "red",
                      }),
                      i.push(f));
                }
              }),
              i.length === 0 && c && i.push({ ssrc: c });
            let l = e.matchPrefix(t, "b=");
            return (
              l.length &&
                (l[0].indexOf("b=TIAS:") === 0
                  ? (l = parseInt(l[0].substring(7), 10))
                  : l[0].indexOf("b=AS:") === 0
                  ? (l =
                      parseInt(l[0].substring(5), 10) * 1e3 * 0.95 -
                      50 * 40 * 8)
                  : (l = void 0),
                i.forEach((h) => {
                  h.maxBitrate = l;
                })),
              i
            );
          }),
          (e.parseRtcpParameters = function (t) {
            const i = {},
              r = e
                .matchPrefix(t, "a=ssrc:")
                .map((a) => e.parseSsrcMedia(a))
                .filter((a) => a.attribute === "cname")[0];
            r && ((i.cname = r.value), (i.ssrc = r.ssrc));
            const s = e.matchPrefix(t, "a=rtcp-rsize");
            (i.reducedSize = s.length > 0), (i.compound = s.length === 0);
            const o = e.matchPrefix(t, "a=rtcp-mux");
            return (i.mux = o.length > 0), i;
          }),
          (e.writeRtcpParameters = function (t) {
            let i = "";
            return (
              t.reducedSize &&
                (i += `a=rtcp-rsize\r
`),
              t.mux &&
                (i += `a=rtcp-mux\r
`),
              t.ssrc !== void 0 &&
                t.cname &&
                (i +=
                  "a=ssrc:" +
                  t.ssrc +
                  " cname:" +
                  t.cname +
                  `\r
`),
              i
            );
          }),
          (e.parseMsid = function (t) {
            let i;
            const r = e.matchPrefix(t, "a=msid:");
            if (r.length === 1)
              return (
                (i = r[0].substring(7).split(" ")),
                { stream: i[0], track: i[1] }
              );
            const s = e
              .matchPrefix(t, "a=ssrc:")
              .map((o) => e.parseSsrcMedia(o))
              .filter((o) => o.attribute === "msid");
            if (s.length > 0)
              return (i = s[0].value.split(" ")), { stream: i[0], track: i[1] };
          }),
          (e.parseSctpDescription = function (t) {
            const i = e.parseMLine(t),
              r = e.matchPrefix(t, "a=max-message-size:");
            let s;
            r.length > 0 && (s = parseInt(r[0].substring(19), 10)),
              isNaN(s) && (s = 65536);
            const o = e.matchPrefix(t, "a=sctp-port:");
            if (o.length > 0)
              return {
                port: parseInt(o[0].substring(12), 10),
                protocol: i.fmt,
                maxMessageSize: s,
              };
            const a = e.matchPrefix(t, "a=sctpmap:");
            if (a.length > 0) {
              const c = a[0].substring(10).split(" ");
              return {
                port: parseInt(c[0], 10),
                protocol: c[1],
                maxMessageSize: s,
              };
            }
          }),
          (e.writeSctpDescription = function (t, i) {
            let r = [];
            return (
              t.protocol !== "DTLS/SCTP"
                ? (r = [
                    "m=" +
                      t.kind +
                      " 9 " +
                      t.protocol +
                      " " +
                      i.protocol +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctp-port:" +
                      i.port +
                      `\r
`,
                  ])
                : (r = [
                    "m=" +
                      t.kind +
                      " 9 " +
                      t.protocol +
                      " " +
                      i.port +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctpmap:" +
                      i.port +
                      " " +
                      i.protocol +
                      ` 65535\r
`,
                  ]),
              i.maxMessageSize !== void 0 &&
                r.push(
                  "a=max-message-size:" +
                    i.maxMessageSize +
                    `\r
`
                ),
              r.join("")
            );
          }),
          (e.generateSessionId = function () {
            return Math.random().toString().substr(2, 22);
          }),
          (e.writeSessionBoilerplate = function (t, i, r) {
            let s;
            const o = i !== void 0 ? i : 2;
            return (
              t ? (s = t) : (s = e.generateSessionId()),
              `v=0\r
o=` +
                (r || "thisisadapterortc") +
                " " +
                s +
                " " +
                o +
                ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
            );
          }),
          (e.getDirection = function (t, i) {
            const r = e.splitLines(t);
            for (let s = 0; s < r.length; s++)
              switch (r[s]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return r[s].substring(2);
              }
            return i ? e.getDirection(i) : "sendrecv";
          }),
          (e.getKind = function (t) {
            return e.splitLines(t)[0].split(" ")[0].substring(2);
          }),
          (e.isRejected = function (t) {
            return t.split(" ", 2)[1] === "0";
          }),
          (e.parseMLine = function (t) {
            const r = e.splitLines(t)[0].substring(2).split(" ");
            return {
              kind: r[0],
              port: parseInt(r[1], 10),
              protocol: r[2],
              fmt: r.slice(3).join(" "),
            };
          }),
          (e.parseOLine = function (t) {
            const r = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
            return {
              username: r[0],
              sessionId: r[1],
              sessionVersion: parseInt(r[2], 10),
              netType: r[3],
              addressType: r[4],
              address: r[5],
            };
          }),
          (e.isValidSDP = function (t) {
            if (typeof t != "string" || t.length === 0) return !1;
            const i = e.splitLines(t);
            for (let r = 0; r < i.length; r++)
              if (i[r].length < 2 || i[r].charAt(1) !== "=") return !1;
            return !0;
          }),
          (n.exports = e);
      })(ki)),
    ki.exports
  );
}
var pc = dh(),
  Vt = Xl(pc),
  uh = Pu({ __proto__: null, default: Vt }, [pc]);
function Fn(n) {
  if (
    !n.RTCIceCandidate ||
    (n.RTCIceCandidate && "foundation" in n.RTCIceCandidate.prototype)
  )
    return;
  const e = n.RTCIceCandidate;
  (n.RTCIceCandidate = function (i) {
    if (
      (typeof i == "object" &&
        i.candidate &&
        i.candidate.indexOf("a=") === 0 &&
        ((i = JSON.parse(JSON.stringify(i))),
        (i.candidate = i.candidate.substring(2))),
      i.candidate && i.candidate.length)
    ) {
      const r = new e(i),
        s = Vt.parseCandidate(i.candidate);
      for (const o in s) o in r || Object.defineProperty(r, o, { value: s[o] });
      return (
        (r.toJSON = function () {
          return {
            candidate: r.candidate,
            sdpMid: r.sdpMid,
            sdpMLineIndex: r.sdpMLineIndex,
            usernameFragment: r.usernameFragment,
          };
        }),
        r
      );
    }
    return new e(i);
  }),
    (n.RTCIceCandidate.prototype = e.prototype),
    Tt(
      n,
      "icecandidate",
      (t) => (
        t.candidate &&
          Object.defineProperty(t, "candidate", {
            value: new n.RTCIceCandidate(t.candidate),
            writable: "false",
          }),
        t
      )
    );
}
function rr(n) {
  !n.RTCIceCandidate ||
    (n.RTCIceCandidate && "relayProtocol" in n.RTCIceCandidate.prototype) ||
    Tt(n, "icecandidate", (e) => {
      if (e.candidate) {
        const t = Vt.parseCandidate(e.candidate.candidate);
        t.type === "relay" &&
          (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[
            t.priority >> 24
          ]);
      }
      return e;
    });
}
function jn(n, e) {
  if (!n.RTCPeerConnection) return;
  "sctp" in n.RTCPeerConnection.prototype ||
    Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", {
      get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      },
    });
  const t = function (a) {
      if (!a || !a.sdp) return !1;
      const c = Vt.splitSections(a.sdp);
      return (
        c.shift(),
        c.some((d) => {
          const u = Vt.parseMLine(d);
          return (
            u && u.kind === "application" && u.protocol.indexOf("SCTP") !== -1
          );
        })
      );
    },
    i = function (a) {
      const c = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (c === null || c.length < 2) return -1;
      const d = parseInt(c[1], 10);
      return d !== d ? -1 : d;
    },
    r = function (a) {
      let c = 65536;
      return (
        e.browser === "firefox" &&
          (e.version < 57
            ? a === -1
              ? (c = 16384)
              : (c = 2147483637)
            : e.version < 60
            ? (c = e.version === 57 ? 65535 : 65536)
            : (c = 2147483637)),
        c
      );
    },
    s = function (a, c) {
      let d = 65536;
      e.browser === "firefox" && e.version === 57 && (d = 65535);
      const u = Vt.matchPrefix(a.sdp, "a=max-message-size:");
      return (
        u.length > 0
          ? (d = parseInt(u[0].substring(19), 10))
          : e.browser === "firefox" && c !== -1 && (d = 2147483637),
        d
      );
    },
    o = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function () {
    if (((this._sctp = null), e.browser === "chrome" && e.version >= 76)) {
      const { sdpSemantics: c } = this.getConfiguration();
      c === "plan-b" &&
        Object.defineProperty(this, "sctp", {
          get() {
            return typeof this._sctp > "u" ? null : this._sctp;
          },
          enumerable: !0,
          configurable: !0,
        });
    }
    if (t(arguments[0])) {
      const c = i(arguments[0]),
        d = r(c),
        u = s(arguments[0], c);
      let l;
      d === 0 && u === 0
        ? (l = Number.POSITIVE_INFINITY)
        : d === 0 || u === 0
        ? (l = Math.max(d, u))
        : (l = Math.min(d, u));
      const h = {};
      Object.defineProperty(h, "maxMessageSize", {
        get() {
          return l;
        },
      }),
        (this._sctp = h);
    }
    return o.apply(this, arguments);
  };
}
function Bn(n) {
  if (
    !(
      n.RTCPeerConnection &&
      "createDataChannel" in n.RTCPeerConnection.prototype
    )
  )
    return;
  function e(i, r) {
    const s = i.send;
    i.send = function () {
      const a = arguments[0],
        c = a.length || a.size || a.byteLength;
      if (i.readyState === "open" && r.sctp && c > r.sctp.maxMessageSize)
        throw new TypeError(
          "Message too large (can send a maximum of " +
            r.sctp.maxMessageSize +
            " bytes)"
        );
      return s.apply(i, arguments);
    };
  }
  const t = n.RTCPeerConnection.prototype.createDataChannel;
  (n.RTCPeerConnection.prototype.createDataChannel = function () {
    const r = t.apply(this, arguments);
    return e(r, this), r;
  }),
    Tt(n, "datachannel", (i) => (e(i.channel, i.target), i));
}
function sr(n) {
  if (
    !n.RTCPeerConnection ||
    "connectionState" in n.RTCPeerConnection.prototype
  )
    return;
  const e = n.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", {
    get() {
      return (
        { completed: "connected", checking: "connecting" }[
          this.iceConnectionState
        ] || this.iceConnectionState
      );
    },
    enumerable: !0,
    configurable: !0,
  }),
    Object.defineProperty(e, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(t) {
        this._onconnectionstatechange &&
          (this.removeEventListener(
            "connectionstatechange",
            this._onconnectionstatechange
          ),
          delete this._onconnectionstatechange),
          t &&
            this.addEventListener(
              "connectionstatechange",
              (this._onconnectionstatechange = t)
            );
      },
      enumerable: !0,
      configurable: !0,
    }),
    ["setLocalDescription", "setRemoteDescription"].forEach((t) => {
      const i = e[t];
      e[t] = function () {
        return (
          this._connectionstatechangepoly ||
            ((this._connectionstatechangepoly = (r) => {
              const s = r.target;
              if (s._lastConnectionState !== s.connectionState) {
                s._lastConnectionState = s.connectionState;
                const o = new Event("connectionstatechange", r);
                s.dispatchEvent(o);
              }
              return r;
            }),
            this.addEventListener(
              "iceconnectionstatechange",
              this._connectionstatechangepoly
            )),
          i.apply(this, arguments)
        );
      };
    });
}
function or(n, e) {
  if (
    !n.RTCPeerConnection ||
    (e.browser === "chrome" && e.version >= 71) ||
    (e.browser === "safari" && e.version >= 605)
  )
    return;
  const t = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function (r) {
    if (
      r &&
      r.sdp &&
      r.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
    ) {
      const s = r.sdp
        .split(
          `
`
        )
        .filter((o) => o.trim() !== "a=extmap-allow-mixed").join(`
`);
      n.RTCSessionDescription && r instanceof n.RTCSessionDescription
        ? (arguments[0] = new n.RTCSessionDescription({ type: r.type, sdp: s }))
        : (r.sdp = s);
    }
    return t.apply(this, arguments);
  };
}
function Vn(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.addIceCandidate;
  !t ||
    t.length === 0 ||
    (n.RTCPeerConnection.prototype.addIceCandidate = function () {
      return arguments[0]
        ? ((e.browser === "chrome" && e.version < 78) ||
            (e.browser === "firefox" && e.version < 68) ||
            e.browser === "safari") &&
          arguments[0] &&
          arguments[0].candidate === ""
          ? Promise.resolve()
          : t.apply(this, arguments)
        : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    });
}
function qn(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.setLocalDescription;
  !t ||
    t.length === 0 ||
    (n.RTCPeerConnection.prototype.setLocalDescription = function () {
      let r = arguments[0] || {};
      if (typeof r != "object" || (r.type && r.sdp))
        return t.apply(this, arguments);
      if (((r = { type: r.type, sdp: r.sdp }), !r.type))
        switch (this.signalingState) {
          case "stable":
          case "have-local-offer":
          case "have-remote-pranswer":
            r.type = "offer";
            break;
          default:
            r.type = "answer";
            break;
        }
      return r.sdp || (r.type !== "offer" && r.type !== "answer")
        ? t.apply(this, [r])
        : (r.type === "offer" ? this.createOffer : this.createAnswer)
            .apply(this)
            .then((o) => t.apply(this, [o]));
    });
}
var lh = Object.freeze({
  __proto__: null,
  removeExtmapAllowMixed: or,
  shimAddIceCandidateNullOrEmpty: Vn,
  shimConnectionState: sr,
  shimMaxMessageSize: jn,
  shimParameterlessSetLocalDescription: qn,
  shimRTCIceCandidate: Fn,
  shimRTCIceCandidateRelayProtocol: rr,
  shimSendThrowTypeError: Bn,
});
function hh() {
  let { window: n } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { shimChrome: !0, shimFirefox: !0, shimSafari: !0 };
  const t = ja,
    i = ah(n),
    r = {
      browserDetails: i,
      commonShim: lh,
      extractVersion: Un,
      disableLog: sh,
      disableWarnings: oh,
      sdp: uh,
    };
  switch (i.browser) {
    case "chrome":
      if (!Is || !nr || !e.shimChrome)
        return t("Chrome shim is not included in this adapter release."), r;
      if (i.version === null)
        return t("Chrome shim can not determine version, not shimming."), r;
      t("adapter.js shimming chrome."),
        (r.browserShim = Is),
        Vn(n, i),
        qn(n),
        Va(n, i),
        qa(n),
        nr(n, i),
        za(n),
        Ha(n, i),
        Wa(n),
        Ga(n),
        Ja(n, i),
        Fn(n),
        rr(n),
        sr(n),
        jn(n, i),
        Bn(n),
        or(n, i);
      break;
    case "firefox":
      if (!xs || !ir || !e.shimFirefox)
        return t("Firefox shim is not included in this adapter release."), r;
      t("adapter.js shimming firefox."),
        (r.browserShim = xs),
        Vn(n, i),
        qn(n),
        $a(n, i),
        ir(n, i),
        Qa(n),
        Za(n),
        Ya(n),
        Xa(n),
        ec(n),
        tc(n),
        nc(n),
        ic(n),
        rc(n),
        Fn(n),
        sr(n),
        jn(n, i),
        Bn(n);
      break;
    case "safari":
      if (!As || !e.shimSafari)
        return t("Safari shim is not included in this adapter release."), r;
      t("adapter.js shimming safari."),
        (r.browserShim = As),
        Vn(n, i),
        qn(n),
        uc(n),
        hc(n),
        ac(n),
        sc(n),
        oc(n),
        lc(n),
        cc(n),
        fc(n),
        Fn(n),
        rr(n),
        jn(n, i),
        Bn(n),
        or(n, i);
      break;
    default:
      t("Unsupported browser!");
      break;
  }
  return r;
}
hh({ window: typeof window > "u" ? void 0 : window });
const fh = 10,
  In = "lk_e2ee",
  ph = "LKFrameEncryptionKey",
  mh = {
    sharedKey: !1,
    ratchetSalt: ph,
    ratchetWindowSize: 8,
    failureTolerance: fh,
    keyringSize: 16,
  };
var ht;
(function (n) {
  (n.SetKey = "setKey"),
    (n.RatchetRequest = "ratchetRequest"),
    (n.KeyRatcheted = "keyRatcheted");
})(ht || (ht = {}));
var Ms;
(function (n) {
  n.KeyRatcheted = "keyRatcheted";
})(Ms || (Ms = {}));
var lt;
(function (n) {
  (n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged"),
    (n.EncryptionError = "encryptionError");
})(lt || (lt = {}));
var Os;
(function (n) {
  n.Error = "cryptorError";
})(Os || (Os = {}));
function gh() {
  return vh() || ar();
}
function ar() {
  return typeof window.RTCRtpScriptTransform < "u";
}
function vh() {
  return (
    typeof window.RTCRtpSender < "u" &&
    typeof window.RTCRtpSender.prototype.createEncodedStreams < "u"
  );
}
function bh(n) {
  return m(this, void 0, void 0, function* () {
    let e = new TextEncoder();
    return yield crypto.subtle.importKey(
      "raw",
      e.encode(n),
      { name: "PBKDF2" },
      !1,
      ["deriveBits", "deriveKey"]
    );
  });
}
function yh(n) {
  return m(this, void 0, void 0, function* () {
    return yield crypto.subtle.importKey("raw", n, "HKDF", !1, [
      "deriveBits",
      "deriveKey",
    ]);
  });
}
class kh extends $e.EventEmitter {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(),
      (this.onKeyRatcheted = (t, i) => {
        K.debug("key ratcheted event received", { material: t, keyIndex: i });
      }),
      (this.keyInfoMap = new Map()),
      (this.options = Object.assign(Object.assign({}, mh), e)),
      this.on(ht.KeyRatcheted, this.onKeyRatcheted);
  }
  onSetEncryptionKey(e, t, i) {
    const r = { key: e, participantIdentity: t, keyIndex: i };
    if (!this.options.sharedKey && !t)
      throw new Error(
        "participant identity needs to be passed for encryption key if sharedKey option is false"
      );
    this.keyInfoMap.set("".concat(t ?? "shared", "-").concat(i ?? 0), r),
      this.emit(ht.SetKey, r);
  }
  getKeys() {
    return Array.from(this.keyInfoMap.values());
  }
  getOptions() {
    return this.options;
  }
  ratchetKey(e, t) {
    this.emit(ht.RatchetRequest, e, t);
  }
}
class hg extends kh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = Object.assign(Object.assign({}, e), {
      sharedKey: !0,
      ratchetWindowSize: 0,
      failureTolerance: -1,
    });
    super(t);
  }
  setKey(e) {
    return m(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? yield bh(e) : yield yh(e);
      this.onSetEncryptionKey(t);
    });
  }
}
class Ct extends Error {
  constructor(e, t) {
    super(t || "an error has occured"), (this.code = e);
  }
}
var ke;
(function (n) {
  (n[(n.NotAllowed = 0)] = "NotAllowed"),
    (n[(n.ServerUnreachable = 1)] = "ServerUnreachable"),
    (n[(n.InternalError = 2)] = "InternalError"),
    (n[(n.Cancelled = 3)] = "Cancelled"),
    (n[(n.LeaveRequest = 4)] = "LeaveRequest");
})(ke || (ke = {}));
class Z extends Ct {
  constructor(e, t, i) {
    super(1, e), (this.status = i), (this.reason = t);
  }
}
class Mr extends Ct {
  constructor(e) {
    super(21, e ?? "device is unsupported");
  }
}
class He extends Ct {
  constructor(e) {
    super(20, e ?? "track is invalid");
  }
}
class Sh extends Ct {
  constructor(e) {
    super(10, e ?? "unsupported server");
  }
}
class he extends Ct {
  constructor(e) {
    super(12, e ?? "unexpected connection state");
  }
}
class cr extends Ct {
  constructor(e) {
    super(13, e ?? "unable to negotiate");
  }
}
class Ns extends Ct {
  constructor(e, t) {
    super(15, e), (this.reason = t);
  }
}
var Zn;
(function (n) {
  (n.PermissionDenied = "PermissionDenied"),
    (n.NotFound = "NotFound"),
    (n.DeviceInUse = "DeviceInUse"),
    (n.Other = "Other");
})(Zn || (Zn = {}));
(function (n) {
  function e(t) {
    if (t && "name" in t)
      return t.name === "NotFoundError" || t.name === "DevicesNotFoundError"
        ? n.NotFound
        : t.name === "NotAllowedError" || t.name === "PermissionDeniedError"
        ? n.PermissionDenied
        : t.name === "NotReadableError" || t.name === "TrackStartError"
        ? n.DeviceInUse
        : n.Other;
  }
  n.getFailure = e;
})(Zn || (Zn = {}));
var Ls;
(function (n) {
  (n[(n.InvalidKey = 0)] = "InvalidKey"),
    (n[(n.MissingKey = 1)] = "MissingKey"),
    (n[(n.InternalError = 2)] = "InternalError");
})(Ls || (Ls = {}));
var C;
(function (n) {
  (n.Connected = "connected"),
    (n.Reconnecting = "reconnecting"),
    (n.SignalReconnecting = "signalReconnecting"),
    (n.Reconnected = "reconnected"),
    (n.Disconnected = "disconnected"),
    (n.ConnectionStateChanged = "connectionStateChanged"),
    (n.MediaDevicesChanged = "mediaDevicesChanged"),
    (n.ParticipantConnected = "participantConnected"),
    (n.ParticipantDisconnected = "participantDisconnected"),
    (n.TrackPublished = "trackPublished"),
    (n.TrackSubscribed = "trackSubscribed"),
    (n.TrackSubscriptionFailed = "trackSubscriptionFailed"),
    (n.TrackUnpublished = "trackUnpublished"),
    (n.TrackUnsubscribed = "trackUnsubscribed"),
    (n.TrackMuted = "trackMuted"),
    (n.TrackUnmuted = "trackUnmuted"),
    (n.LocalTrackPublished = "localTrackPublished"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.LocalAudioSilenceDetected = "localAudioSilenceDetected"),
    (n.ActiveSpeakersChanged = "activeSpeakersChanged"),
    (n.ParticipantMetadataChanged = "participantMetadataChanged"),
    (n.ParticipantNameChanged = "participantNameChanged"),
    (n.ParticipantAttributesChanged = "participantAttributesChanged"),
    (n.RoomMetadataChanged = "roomMetadataChanged"),
    (n.DataReceived = "dataReceived"),
    (n.SipDTMFReceived = "sipDTMFReceived"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.ConnectionQualityChanged = "connectionQualityChanged"),
    (n.TrackStreamStateChanged = "trackStreamStateChanged"),
    (n.TrackSubscriptionPermissionChanged =
      "trackSubscriptionPermissionChanged"),
    (n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged"),
    (n.AudioPlaybackStatusChanged = "audioPlaybackChanged"),
    (n.VideoPlaybackStatusChanged = "videoPlaybackChanged"),
    (n.MediaDevicesError = "mediaDevicesError"),
    (n.ParticipantPermissionsChanged = "participantPermissionsChanged"),
    (n.SignalConnected = "signalConnected"),
    (n.RecordingStatusChanged = "recordingStatusChanged"),
    (n.ParticipantEncryptionStatusChanged =
      "participantEncryptionStatusChanged"),
    (n.EncryptionError = "encryptionError"),
    (n.DCBufferStatusChanged = "dcBufferStatusChanged"),
    (n.ActiveDeviceChanged = "activeDeviceChanged"),
    (n.ChatMessage = "chatMessage"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.MetricsReceived = "metricsReceived");
})(C || (C = {}));
var E;
(function (n) {
  (n.TrackPublished = "trackPublished"),
    (n.TrackSubscribed = "trackSubscribed"),
    (n.TrackSubscriptionFailed = "trackSubscriptionFailed"),
    (n.TrackUnpublished = "trackUnpublished"),
    (n.TrackUnsubscribed = "trackUnsubscribed"),
    (n.TrackMuted = "trackMuted"),
    (n.TrackUnmuted = "trackUnmuted"),
    (n.LocalTrackPublished = "localTrackPublished"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.ParticipantMetadataChanged = "participantMetadataChanged"),
    (n.ParticipantNameChanged = "participantNameChanged"),
    (n.DataReceived = "dataReceived"),
    (n.SipDTMFReceived = "sipDTMFReceived"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.IsSpeakingChanged = "isSpeakingChanged"),
    (n.ConnectionQualityChanged = "connectionQualityChanged"),
    (n.TrackStreamStateChanged = "trackStreamStateChanged"),
    (n.TrackSubscriptionPermissionChanged =
      "trackSubscriptionPermissionChanged"),
    (n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged"),
    (n.MediaDevicesError = "mediaDevicesError"),
    (n.AudioStreamAcquired = "audioStreamAcquired"),
    (n.ParticipantPermissionsChanged = "participantPermissionsChanged"),
    (n.PCTrackAdded = "pcTrackAdded"),
    (n.AttributesChanged = "attributesChanged"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.ChatMessage = "chatMessage");
})(E || (E = {}));
var N;
(function (n) {
  (n.TransportsCreated = "transportsCreated"),
    (n.Connected = "connected"),
    (n.Disconnected = "disconnected"),
    (n.Resuming = "resuming"),
    (n.Resumed = "resumed"),
    (n.Restarting = "restarting"),
    (n.Restarted = "restarted"),
    (n.SignalResumed = "signalResumed"),
    (n.SignalRestarted = "signalRestarted"),
    (n.Closing = "closing"),
    (n.MediaTrackAdded = "mediaTrackAdded"),
    (n.ActiveSpeakersUpdate = "activeSpeakersUpdate"),
    (n.DataPacketReceived = "dataPacketReceived"),
    (n.RTPVideoMapUpdate = "rtpVideoMapUpdate"),
    (n.DCBufferStatusChanged = "dcBufferStatusChanged"),
    (n.ParticipantUpdate = "participantUpdate"),
    (n.RoomUpdate = "roomUpdate"),
    (n.SpeakersChanged = "speakersChanged"),
    (n.StreamStateChanged = "streamStateChanged"),
    (n.ConnectionQualityUpdate = "connectionQualityUpdate"),
    (n.SubscriptionError = "subscriptionError"),
    (n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate"),
    (n.RemoteMute = "remoteMute"),
    (n.SubscribedQualityUpdate = "subscribedQualityUpdate"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.Offline = "offline"),
    (n.SignalRequestResponse = "signalRequestResponse");
})(N || (N = {}));
var A;
(function (n) {
  (n.Message = "message"),
    (n.Muted = "muted"),
    (n.Unmuted = "unmuted"),
    (n.Restarted = "restarted"),
    (n.Ended = "ended"),
    (n.Subscribed = "subscribed"),
    (n.Unsubscribed = "unsubscribed"),
    (n.UpdateSettings = "updateSettings"),
    (n.UpdateSubscription = "updateSubscription"),
    (n.AudioPlaybackStarted = "audioPlaybackStarted"),
    (n.AudioPlaybackFailed = "audioPlaybackFailed"),
    (n.AudioSilenceDetected = "audioSilenceDetected"),
    (n.VisibilityChanged = "visibilityChanged"),
    (n.VideoDimensionsChanged = "videoDimensionsChanged"),
    (n.VideoPlaybackStarted = "videoPlaybackStarted"),
    (n.VideoPlaybackFailed = "videoPlaybackFailed"),
    (n.ElementAttached = "elementAttached"),
    (n.ElementDetached = "elementDetached"),
    (n.UpstreamPaused = "upstreamPaused"),
    (n.UpstreamResumed = "upstreamResumed"),
    (n.SubscriptionPermissionChanged = "subscriptionPermissionChanged"),
    (n.SubscriptionStatusChanged = "subscriptionStatusChanged"),
    (n.SubscriptionFailed = "subscriptionFailed"),
    (n.TrackProcessorUpdate = "trackProcessorUpdate"),
    (n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.TimeSyncUpdate = "timeSyncUpdate");
})(A || (A = {}));
function Or(n, e, t) {
  var i, r, s;
  e === void 0 && (e = 50), t === void 0 && (t = {});
  var o = (i = t.isImmediate) != null && i,
    a = (r = t.callback) != null && r,
    c = t.maxWait,
    d = Date.now(),
    u = [];
  function l() {
    if (c !== void 0) {
      var f = Date.now() - d;
      if (f + e >= c) return c - f;
    }
    return e;
  }
  var h = function () {
    var f = [].slice.call(arguments),
      g = this;
    return new Promise(function (p, b) {
      var v = o && s === void 0;
      if (
        (s !== void 0 && clearTimeout(s),
        (s = setTimeout(function () {
          if (((s = void 0), (d = Date.now()), !o)) {
            var I = n.apply(g, f);
            a && a(I),
              u.forEach(function (S) {
                return (0, S.resolve)(I);
              }),
              (u = []);
          }
        }, l())),
        v)
      ) {
        var P = n.apply(g, f);
        return a && a(P), p(P);
      }
      u.push({ resolve: p, reject: b });
    });
  };
  return (
    (h.cancel = function (f) {
      s !== void 0 && clearTimeout(s),
        u.forEach(function (g) {
          return (0, g.reject)(f);
        }),
        (u = []);
    }),
    h
  );
}
const Th = /version\/(\d+(\.?_?\d+)+)/i;
let Si;
function nt(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (typeof navigator > "u") return;
  const t = navigator.userAgent.toLowerCase();
  if (Si === void 0 || e) {
    const i = Ch.find((r) => {
      let { test: s } = r;
      return s.test(t);
    });
    Si = i?.describe(t);
  }
  return Si;
}
const Ch = [
  {
    test: /firefox|iceweasel|fxios/i,
    describe(n) {
      return {
        name: "Firefox",
        version: zn(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n),
        os: n.toLowerCase().includes("fxios") ? "iOS" : void 0,
        osVersion: Ti(n),
      };
    },
  },
  {
    test: /chrom|crios|crmo/i,
    describe(n) {
      return {
        name: "Chrome",
        version: zn(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n),
        os: n.toLowerCase().includes("crios") ? "iOS" : void 0,
        osVersion: Ti(n),
      };
    },
  },
  {
    test: /safari|applewebkit/i,
    describe(n) {
      return {
        name: "Safari",
        version: zn(Th, n),
        os: n.includes("mobile/") ? "iOS" : "macOS",
        osVersion: Ti(n),
      };
    },
  },
];
function zn(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  const i = e.match(n);
  return (i && i.length >= t && i[t]) || "";
}
function Ti(n) {
  return n.includes("mac os")
    ? zn(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".")
    : void 0;
}
var wh = "2.6.0";
const Ph = wh,
  Eh = 15;
class ve {}
ve.setTimeout = function () {
  return setTimeout(...arguments);
};
ve.setInterval = function () {
  return setInterval(...arguments);
};
ve.clearTimeout = function () {
  return clearTimeout(...arguments);
};
ve.clearInterval = function () {
  return clearInterval(...arguments);
};
class J {
  constructor(e, t, i, r, s) {
    if (typeof e == "object")
      (this.width = e.width),
        (this.height = e.height),
        (this.aspectRatio = e.aspectRatio),
        (this.encoding = {
          maxBitrate: e.maxBitrate,
          maxFramerate: e.maxFramerate,
          priority: e.priority,
        });
    else if (t !== void 0 && i !== void 0)
      (this.width = e),
        (this.height = t),
        (this.aspectRatio = e / t),
        (this.encoding = { maxBitrate: i, maxFramerate: r, priority: s });
    else
      throw new TypeError(
        "Unsupported options: provide at least width, height and maxBitrate"
      );
  }
  get resolution() {
    return {
      width: this.width,
      height: this.height,
      frameRate: this.encoding.maxFramerate,
      aspectRatio: this.aspectRatio,
    };
  }
}
const Rh = ["vp8", "h264"],
  _h = ["vp8", "h264", "vp9", "av1"];
function Ih(n) {
  return !!Rh.find((e) => e === n);
}
var dr;
(function (n) {
  (n.telephone = { maxBitrate: 12e3 }),
    (n.speech = { maxBitrate: 24e3 }),
    (n.music = { maxBitrate: 48e3 }),
    (n.musicStereo = { maxBitrate: 64e3 }),
    (n.musicHighQuality = { maxBitrate: 96e3 }),
    (n.musicHighQualityStereo = { maxBitrate: 128e3 });
})(dr || (dr = {}));
const bn = {
    h90: new J(160, 90, 9e4, 20),
    h180: new J(320, 180, 16e4, 20),
    h216: new J(384, 216, 18e4, 20),
    h360: new J(640, 360, 45e4, 20),
    h540: new J(960, 540, 8e5, 25),
    h720: new J(1280, 720, 17e5, 30),
    h1080: new J(1920, 1080, 3e6, 30),
    h1440: new J(2560, 1440, 5e6, 30),
    h2160: new J(3840, 2160, 8e6, 30),
  },
  ur = {
    h120: new J(160, 120, 7e4, 20),
    h180: new J(240, 180, 125e3, 20),
    h240: new J(320, 240, 14e4, 20),
    h360: new J(480, 360, 33e4, 20),
    h480: new J(640, 480, 5e5, 20),
    h540: new J(720, 540, 6e5, 25),
    h720: new J(960, 720, 13e5, 30),
    h1080: new J(1440, 1080, 23e5, 30),
    h1440: new J(1920, 1440, 38e5, 30),
  },
  Nr = {
    h360fps3: new J(640, 360, 2e5, 3, "medium"),
    h360fps15: new J(640, 360, 4e5, 15, "medium"),
    h720fps5: new J(1280, 720, 8e5, 5, "medium"),
    h720fps15: new J(1280, 720, 15e5, 15, "medium"),
    h720fps30: new J(1280, 720, 2e6, 30, "medium"),
    h1080fps15: new J(1920, 1080, 25e5, 15, "medium"),
    h1080fps30: new J(1920, 1080, 5e6, 30, "medium"),
    original: new J(0, 0, 7e6, 30, "medium"),
  };
function xh(n) {
  if (!(typeof n > "u"))
    return typeof structuredClone == "function"
      ? structuredClone(n)
      : JSON.parse(JSON.stringify(n));
}
const Ah = 5e3,
  tn = [];
var Me;
(function (n) {
  (n[(n.LOW = 0)] = "LOW"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.HIGH = 2)] = "HIGH");
})(Me || (Me = {}));
class R extends $e.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r;
    super(),
      (this.attachedElements = []),
      (this.isMuted = !1),
      (this.streamState = R.StreamState.Active),
      (this.isInBackground = !1),
      (this._currentBitrate = 0),
      (this.log = K),
      (this.appVisibilityChangedListener = () => {
        this.backgroundTimeout && clearTimeout(this.backgroundTimeout),
          document.visibilityState === "hidden"
            ? (this.backgroundTimeout = setTimeout(
                () => this.handleAppVisibilityChanged(),
                Ah
              ))
            : this.handleAppVisibilityChanged();
      }),
      (this.log = tt(
        (r = i.loggerName) !== null && r !== void 0 ? r : Be.Track
      )),
      (this.loggerContextCb = i.loggerContextCb),
      this.setMaxListeners(100),
      (this.kind = t),
      (this._mediaStreamTrack = e),
      (this._mediaStreamID = e.id),
      (this.source = R.Source.Unknown);
  }
  get logContext() {
    var e;
    return Object.assign(
      Object.assign(
        {},
        (e = this.loggerContextCb) === null || e === void 0
          ? void 0
          : e.call(this)
      ),
      Q(this)
    );
  }
  get currentBitrate() {
    return this._currentBitrate;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  get mediaStreamID() {
    return this._mediaStreamID;
  }
  attach(e) {
    let t = "audio";
    this.kind === R.Kind.Video && (t = "video"),
      this.attachedElements.length === 0 &&
        this.kind === R.Kind.Video &&
        this.addAppVisibilityListener(),
      e ||
        (t === "audio" &&
          (tn.forEach((s) => {
            s.parentElement === null && !e && (e = s);
          }),
          e && tn.splice(tn.indexOf(e), 1)),
        e || (e = document.createElement(t))),
      this.attachedElements.includes(e) || this.attachedElements.push(e),
      Ft(this.mediaStreamTrack, e);
    const i = e.srcObject.getTracks(),
      r = i.some((s) => s.kind === "audio");
    return (
      e
        .play()
        .then(() => {
          this.emit(r ? A.AudioPlaybackStarted : A.VideoPlaybackStarted);
        })
        .catch((s) => {
          s.name === "NotAllowedError"
            ? this.emit(r ? A.AudioPlaybackFailed : A.VideoPlaybackFailed, s)
            : s.name === "AbortError"
            ? K.debug(
                "".concat(
                  r ? "audio" : "video",
                  " playback aborted, likely due to new play request"
                )
              )
            : K.warn("could not playback ".concat(r ? "audio" : "video"), s),
            r &&
              e &&
              i.some((o) => o.kind === "video") &&
              s.name === "NotAllowedError" &&
              ((e.muted = !0), e.play().catch(() => {}));
        }),
      this.emit(A.ElementAttached, e),
      e
    );
  }
  detach(e) {
    try {
      if (e) {
        qt(this.mediaStreamTrack, e);
        const i = this.attachedElements.indexOf(e);
        return (
          i >= 0 &&
            (this.attachedElements.splice(i, 1),
            this.recycleElement(e),
            this.emit(A.ElementDetached, e)),
          e
        );
      }
      const t = [];
      return (
        this.attachedElements.forEach((i) => {
          qt(this.mediaStreamTrack, i),
            t.push(i),
            this.recycleElement(i),
            this.emit(A.ElementDetached, i);
        }),
        (this.attachedElements = []),
        t
      );
    } finally {
      this.attachedElements.length === 0 && this.removeAppVisibilityListener();
    }
  }
  stop() {
    this.stopMonitor(), this._mediaStreamTrack.stop();
  }
  enable() {
    this._mediaStreamTrack.enabled = !0;
  }
  disable() {
    this._mediaStreamTrack.enabled = !1;
  }
  stopMonitor() {
    this.monitorInterval && clearInterval(this.monitorInterval),
      this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle);
  }
  updateLoggerOptions(e) {
    e.loggerName && (this.log = tt(e.loggerName)),
      e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb);
  }
  recycleElement(e) {
    if (e instanceof HTMLAudioElement) {
      let t = !0;
      e.pause(),
        tn.forEach((i) => {
          i.parentElement || (t = !1);
        }),
        t && tn.push(e);
    }
  }
  handleAppVisibilityChanged() {
    return m(this, void 0, void 0, function* () {
      (this.isInBackground = document.visibilityState === "hidden"),
        !this.isInBackground &&
          this.kind === R.Kind.Video &&
          setTimeout(
            () =>
              this.attachedElements.forEach((e) => e.play().catch(() => {})),
            0
          );
    });
  }
  addAppVisibilityListener() {
    _e()
      ? ((this.isInBackground = document.visibilityState === "hidden"),
        document.addEventListener(
          "visibilitychange",
          this.appVisibilityChangedListener
        ))
      : (this.isInBackground = !1);
  }
  removeAppVisibilityListener() {
    _e() &&
      document.removeEventListener(
        "visibilitychange",
        this.appVisibilityChangedListener
      );
  }
}
function Ft(n, e) {
  let t;
  e.srcObject instanceof MediaStream
    ? (t = e.srcObject)
    : (t = new MediaStream());
  let i;
  n.kind === "audio" ? (i = t.getAudioTracks()) : (i = t.getVideoTracks()),
    i.includes(n) ||
      (i.forEach((r) => {
        t.removeTrack(r);
      }),
      t.addTrack(n)),
    (!St() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0),
    (e.muted = t.getAudioTracks().length === 0),
    e instanceof HTMLVideoElement && (e.playsInline = !0),
    e.srcObject !== t &&
      ((e.srcObject = t),
      (St() || Ht()) &&
        e instanceof HTMLVideoElement &&
        setTimeout(() => {
          (e.srcObject = t), e.play().catch(() => {});
        }, 0));
}
function qt(n, e) {
  if (e.srcObject instanceof MediaStream) {
    const t = e.srcObject;
    t.removeTrack(n),
      t.getTracks().length > 0 ? (e.srcObject = t) : (e.srcObject = null);
  }
}
(function (n) {
  let e;
  (function (d) {
    (d.Audio = "audio"), (d.Video = "video"), (d.Unknown = "unknown");
  })((e = n.Kind || (n.Kind = {})));
  let t;
  (function (d) {
    (d.Camera = "camera"),
      (d.Microphone = "microphone"),
      (d.ScreenShare = "screen_share"),
      (d.ScreenShareAudio = "screen_share_audio"),
      (d.Unknown = "unknown");
  })((t = n.Source || (n.Source = {})));
  let i;
  (function (d) {
    (d.Active = "active"), (d.Paused = "paused"), (d.Unknown = "unknown");
  })((i = n.StreamState || (n.StreamState = {})));
  function r(d) {
    switch (d) {
      case e.Audio:
        return Fe.AUDIO;
      case e.Video:
        return Fe.VIDEO;
      default:
        return Fe.DATA;
    }
  }
  n.kindToProto = r;
  function s(d) {
    switch (d) {
      case Fe.AUDIO:
        return e.Audio;
      case Fe.VIDEO:
        return e.Video;
      default:
        return e.Unknown;
    }
  }
  n.kindFromProto = s;
  function o(d) {
    switch (d) {
      case t.Camera:
        return ye.CAMERA;
      case t.Microphone:
        return ye.MICROPHONE;
      case t.ScreenShare:
        return ye.SCREEN_SHARE;
      case t.ScreenShareAudio:
        return ye.SCREEN_SHARE_AUDIO;
      default:
        return ye.UNKNOWN;
    }
  }
  n.sourceToProto = o;
  function a(d) {
    switch (d) {
      case ye.CAMERA:
        return t.Camera;
      case ye.MICROPHONE:
        return t.Microphone;
      case ye.SCREEN_SHARE:
        return t.ScreenShare;
      case ye.SCREEN_SHARE_AUDIO:
        return t.ScreenShareAudio;
      default:
        return t.Unknown;
    }
  }
  n.sourceFromProto = a;
  function c(d) {
    switch (d) {
      case Yi.ACTIVE:
        return i.Active;
      case Yi.PAUSED:
        return i.Paused;
      default:
        return i.Unknown;
    }
  }
  n.streamStateFromProto = c;
})(R || (R = {}));
function mc(n, e, t) {
  var i;
  const r = (i = xh(n)) !== null && i !== void 0 ? i : {};
  return (
    r.audio === !0 && (r.audio = {}),
    r.video === !0 && (r.video = {}),
    r.audio && lr(r.audio, e),
    r.video && lr(r.video, t),
    r
  );
}
function lr(n, e) {
  return (
    Object.keys(e).forEach((t) => {
      n[t] === void 0 && (n[t] = e[t]);
    }),
    n
  );
}
function fi(n) {
  const e = {};
  if (n.video)
    if (typeof n.video == "object") {
      const t = {},
        i = t,
        r = n.video;
      Object.keys(r).forEach((s) => {
        switch (s) {
          case "resolution":
            lr(i, r.resolution);
            break;
          default:
            i[s] = r[s];
        }
      }),
        (e.video = t);
    } else e.video = n.video;
  else e.video = !1;
  return (
    n.audio
      ? typeof n.audio == "object"
        ? (e.audio = n.audio)
        : (e.audio = !0)
      : (e.audio = !1),
    e
  );
}
function Dh(n) {
  return m(this, arguments, void 0, function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
    return (function* () {
      const i = gc();
      if (i) {
        const r = i.createAnalyser();
        r.fftSize = 2048;
        const s = r.frequencyBinCount,
          o = new Uint8Array(s);
        i
          .createMediaStreamSource(new MediaStream([e.mediaStreamTrack]))
          .connect(r),
          yield Je(t),
          r.getByteTimeDomainData(o);
        const c = o.some((d) => d !== 128 && d !== 0);
        return i.close(), !c;
      }
      return !1;
    })();
  });
}
function gc() {
  const n =
    typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (n) return new n({ latencyHint: "interactive" });
}
function Us(n) {
  return n === R.Source.Microphone
    ? "audioinput"
    : n === R.Source.Camera
    ? "videoinput"
    : void 0;
}
function Mh(n) {
  var e, t;
  let i = (e = n.video) !== null && e !== void 0 ? e : !0;
  return (
    n.resolution &&
      n.resolution.width > 0 &&
      n.resolution.height > 0 &&
      ((i = typeof i == "boolean" ? {} : i),
      St()
        ? (i = Object.assign(Object.assign({}, i), {
            width: { max: n.resolution.width },
            height: { max: n.resolution.height },
            frameRate: n.resolution.frameRate,
          }))
        : (i = Object.assign(Object.assign({}, i), {
            width: { ideal: n.resolution.width },
            height: { ideal: n.resolution.height },
            frameRate: n.resolution.frameRate,
          }))),
    {
      audio: (t = n.audio) !== null && t !== void 0 ? t : !1,
      video: i,
      controller: n.controller,
      selfBrowserSurface: n.selfBrowserSurface,
      surfaceSwitching: n.surfaceSwitching,
      systemAudio: n.systemAudio,
      preferCurrentTab: n.preferCurrentTab,
    }
  );
}
function Wn(n) {
  return n.split("/")[1].toLowerCase();
}
function Oh(n) {
  const e = [];
  return (
    n.forEach((t) => {
      t.track !== void 0 &&
        e.push(new xr({ cid: t.track.mediaStreamID, track: t.trackInfo }));
    }),
    e
  );
}
function Q(n) {
  return n instanceof R
    ? {
        trackID: n.sid,
        source: n.source,
        muted: n.isMuted,
        enabled: n.mediaStreamTrack.enabled,
        kind: n.kind,
        streamID: n.mediaStreamID,
        streamTrackID: n.mediaStreamTrack.id,
      }
    : {
        trackID: n.trackSid,
        enabled: n.isEnabled,
        muted: n.isMuted,
        trackInfo: Object.assign(
          {
            mimeType: n.mimeType,
            name: n.trackName,
            encrypted: n.isEncrypted,
            kind: n.kind,
            source: n.source,
          },
          n.track ? Q(n.track) : {}
        ),
      };
}
function Nh() {
  return (
    typeof RTCRtpReceiver < "u" && "getSynchronizationSources" in RTCRtpReceiver
  );
}
function Lh(n, e) {
  var t;
  n === void 0 && (n = {}), e === void 0 && (e = {});
  const i = [...Object.keys(e), ...Object.keys(n)],
    r = {};
  for (const s of i)
    n[s] !== e[s] && (r[s] = (t = e[s]) !== null && t !== void 0 ? t : "");
  return r;
}
const Uh = "|",
  Fs =
    "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
function Fh(n) {
  const e = n.split(Uh);
  return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""];
}
function Je(n) {
  return m(this, void 0, void 0, function* () {
    return new Promise((e) => ve.setTimeout(e, n));
  });
}
function hr() {
  return "addTransceiver" in RTCPeerConnection.prototype;
}
function fr() {
  return "addTrack" in RTCPeerConnection.prototype;
}
function jh() {
  if (!("getCapabilities" in RTCRtpSender) || St()) return !1;
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs)
      if (t.mimeType === "video/AV1") {
        e = !0;
        break;
      }
  }
  return e;
}
function Bh() {
  if (!("getCapabilities" in RTCRtpSender) || Ht()) return !1;
  if (St()) {
    const t = nt();
    if (t?.version && Jt(t.version, "16") < 0) return !1;
  }
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs)
      if (t.mimeType === "video/VP9") {
        e = !0;
        break;
      }
  }
  return e;
}
function ln(n) {
  return n === "av1" || n === "vp9";
}
function pr(n) {
  return document
    ? (n || (n = document.createElement("audio")), "setSinkId" in n)
    : !1;
}
function Vh() {
  return typeof RTCPeerConnection > "u" ? !1 : hr() || fr();
}
function Ht() {
  var n;
  return ((n = nt()) === null || n === void 0 ? void 0 : n.name) === "Firefox";
}
function St() {
  var n;
  return ((n = nt()) === null || n === void 0 ? void 0 : n.name) === "Safari";
}
function qh() {
  const n = nt();
  return n?.name === "Safari" && n.version.startsWith("17.");
}
function vc() {
  var n, e;
  return _e()
    ? (e =
        (n = navigator.userAgentData) === null || n === void 0
          ? void 0
          : n.mobile) !== null && e !== void 0
      ? e
      : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent)
    : !1;
}
function zh() {
  const n = nt(),
    e = "17.2";
  if (n)
    return (n.name !== "Safari" && n.os !== "iOS") ||
      (n.os === "iOS" && n.osVersion && Jt(e, n.osVersion) >= 0)
      ? !0
      : n.name === "Safari" && Jt(e, n.version) >= 0;
}
function _e() {
  return typeof document < "u";
}
function it() {
  return navigator.product == "ReactNative";
}
function mr(n) {
  return (
    n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run")
  );
}
function bc() {
  if (global && global.LiveKitReactNativeGlobal)
    return global.LiveKitReactNativeGlobal;
}
function yc() {
  if (!it()) return;
  let n = bc();
  if (n) return n.platform;
}
function js() {
  if (_e()) return window.devicePixelRatio;
  if (it()) {
    let n = bc();
    if (n) return n.devicePixelRatio;
  }
  return 1;
}
function Jt(n, e) {
  const t = n.split("."),
    i = e.split("."),
    r = Math.min(t.length, i.length);
  for (let s = 0; s < r; ++s) {
    const o = parseInt(t[s], 10),
      a = parseInt(i[s], 10);
    if (o > a) return 1;
    if (o < a) return -1;
    if (s === r - 1 && o === a) return 0;
  }
  return n === "" && e !== ""
    ? -1
    : e === ""
    ? 1
    : t.length == i.length
    ? 0
    : t.length < i.length
    ? -1
    : 1;
}
function Wh(n) {
  for (const e of n) e.target.handleResize(e);
}
function Gh(n) {
  for (const e of n) e.target.handleVisibilityChanged(e);
}
let Ci = null;
const Bs = () => (Ci || (Ci = new ResizeObserver(Wh)), Ci);
let wi = null;
const Vs = () => (
  wi || (wi = new IntersectionObserver(Gh, { root: null, rootMargin: "0px" })),
  wi
);
function Kh() {
  var n;
  const e = new _l({ sdk: Ca.JS, protocol: Eh, version: Ph });
  return it() && (e.os = (n = yc()) !== null && n !== void 0 ? n : ""), e;
}
function qs() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16,
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  const r = document.createElement("canvas");
  (r.width = n), (r.height = e);
  const s = r.getContext("2d");
  s?.fillRect(0, 0, r.width, r.height),
    i &&
      s &&
      (s.beginPath(),
      s.arc(n / 2, e / 2, 50, 0, Math.PI * 2, !0),
      s.closePath(),
      (s.fillStyle = "grey"),
      s.fill());
  const o = r.captureStream(),
    [a] = o.getTracks();
  if (!a) throw Error("Could not get empty media stream video track");
  return (a.enabled = t), a;
}
let nn;
function Pi() {
  if (!nn) {
    const n = new AudioContext(),
      e = n.createOscillator(),
      t = n.createGain();
    t.gain.setValueAtTime(0, 0);
    const i = n.createMediaStreamDestination();
    if (
      (e.connect(t),
      t.connect(i),
      e.start(),
      ([nn] = i.stream.getAudioTracks()),
      !nn)
    )
      throw Error("Could not get empty media stream audio track");
    nn.enabled = !1;
  }
  return nn.clone();
}
class kc {
  constructor(e, t) {
    (this.onFinally = t),
      (this.promise = new Promise((i, r) =>
        m(this, void 0, void 0, function* () {
          (this.resolve = i), (this.reject = r), e && (yield e(i, r));
        })
      ).finally(() => {
        var i;
        return (i = this.onFinally) === null || i === void 0
          ? void 0
          : i.call(this);
      }));
  }
}
function Hh(n) {
  return _h.includes(n);
}
function et(n) {
  if (typeof n == "string" || typeof n == "number") return n;
  if (Array.isArray(n)) return n[0];
  if (n.exact) return Array.isArray(n.exact) ? n.exact[0] : n.exact;
  if (n.ideal) return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
  throw Error("could not unwrap constraint");
}
function Jh(n) {
  return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n;
}
function zs(n) {
  return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n;
}
function $h(n, e) {
  return n.segments.map((t) => {
    let { id: i, text: r, language: s, startTime: o, endTime: a, final: c } = t;
    var d;
    const u = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now(),
      l = Date.now();
    return (
      c ? e.delete(i) : e.set(i, u),
      {
        id: i,
        text: r,
        startTime: Number.parseInt(o.toString()),
        endTime: Number.parseInt(a.toString()),
        final: c,
        language: s,
        firstReceivedTime: u,
        lastReceivedTime: l,
      }
    );
  });
}
function Qh(n) {
  const { id: e, timestamp: t, message: i, editTimestamp: r } = n;
  return {
    id: e,
    timestamp: Number.parseInt(t.toString()),
    editTimestamp: r ? Number.parseInt(r.toString()) : void 0,
    message: i,
  };
}
const Ei = "default";
class ge {
  static getInstance() {
    return (
      this.instance === void 0 && (this.instance = new ge()), this.instance
    );
  }
  getDevices(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var s;
        if (
          ((s = ge.userMediaPromiseMap) === null || s === void 0
            ? void 0
            : s.size) > 0
        ) {
          K.debug("awaiting getUserMedia promise");
          try {
            t
              ? yield ge.userMediaPromiseMap.get(t)
              : yield Promise.all(ge.userMediaPromiseMap.values());
          } catch {
            K.warn("error waiting for media permissons");
          }
        }
        let o = yield navigator.mediaDevices.enumerateDevices();
        if (
          r &&
          !(St() && i.hasDeviceInUse(t)) &&
          (o.filter((c) => c.kind === t).length === 0 ||
            o.some((c) => {
              const d = c.label === "",
                u = t ? c.kind === t : !0;
              return d && u;
            }))
        ) {
          const c = {
              video: t !== "audioinput" && t !== "audiooutput",
              audio: t !== "videoinput",
            },
            d = yield navigator.mediaDevices.getUserMedia(c);
          (o = yield navigator.mediaDevices.enumerateDevices()),
            d.getTracks().forEach((u) => {
              u.stop();
            });
        }
        return t && (o = o.filter((a) => a.kind === t)), o;
      })();
    });
  }
  normalizeDeviceId(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t !== Ei) return t;
      const r = yield this.getDevices(e),
        s = r.find((a) => a.deviceId === Ei);
      if (!s) {
        K.warn("could not reliably determine default device");
        return;
      }
      const o = r.find(
        (a) => a.deviceId !== Ei && a.groupId === (i ?? s.groupId)
      );
      if (!o) {
        K.warn("could not reliably determine default device");
        return;
      }
      return o?.deviceId;
    });
  }
  hasDeviceInUse(e) {
    return e ? ge.userMediaPromiseMap.has(e) : ge.userMediaPromiseMap.size > 0;
  }
}
ge.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
ge.userMediaPromiseMap = new Map();
const Yh = 1e3;
class zt extends R {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e;
  }
  get constraints() {
    return this._constraints;
  }
  constructor(e, t, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      s = arguments.length > 4 ? arguments[4] : void 0;
    super(e, t, s),
      (this.manuallyStopped = !1),
      (this._isUpstreamPaused = !1),
      (this.handleTrackMuteEvent = () =>
        this.debouncedTrackMuteHandler().catch(() =>
          this.log.debug(
            "track mute bounce got cancelled by an unmute event",
            this.logContext
          )
        )),
      (this.debouncedTrackMuteHandler = Or(
        () =>
          m(this, void 0, void 0, function* () {
            yield this.pauseUpstream();
          }),
        5e3
      )),
      (this.handleTrackUnmuteEvent = () =>
        m(this, void 0, void 0, function* () {
          this.debouncedTrackMuteHandler.cancel("unmute"),
            yield this.resumeUpstream();
        })),
      (this.handleEnded = () => {
        this.isInBackground && (this.reacquireTrack = !0),
          this._mediaStreamTrack.removeEventListener(
            "mute",
            this.handleTrackMuteEvent
          ),
          this._mediaStreamTrack.removeEventListener(
            "unmute",
            this.handleTrackUnmuteEvent
          ),
          this.emit(A.Ended, this);
      }),
      (this.reacquireTrack = !1),
      (this.providedByUser = r),
      (this.muteLock = new Re()),
      (this.pauseUpstreamLock = new Re()),
      (this.processorLock = new Re()),
      (this.restartLock = new Re()),
      this.setMediaStreamTrack(e, !0),
      (this._constraints = e.getConstraints()),
      i && (this._constraints = i);
  }
  get id() {
    return this._mediaStreamTrack.id;
  }
  get dimensions() {
    if (this.kind !== R.Kind.Video) return;
    const { width: e, height: t } = this._mediaStreamTrack.getSettings();
    if (e && t) return { width: e, height: t };
  }
  get isUpstreamPaused() {
    return this._isUpstreamPaused;
  }
  get isUserProvided() {
    return this.providedByUser;
  }
  get mediaStreamTrack() {
    var e, t;
    return (t =
      (e = this.processor) === null || e === void 0
        ? void 0
        : e.processedTrack) !== null && t !== void 0
      ? t
      : this._mediaStreamTrack;
  }
  setMediaStreamTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      if (e === this._mediaStreamTrack && !t) return;
      this._mediaStreamTrack &&
        (this.attachedElements.forEach((r) => {
          qt(this._mediaStreamTrack, r);
        }),
        this.debouncedTrackMuteHandler.cancel("new-track"),
        this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
        this._mediaStreamTrack.removeEventListener(
          "mute",
          this.handleTrackMuteEvent
        ),
        this._mediaStreamTrack.removeEventListener(
          "unmute",
          this.handleTrackUnmuteEvent
        )),
        (this.mediaStream = new MediaStream([e])),
        e &&
          (e.addEventListener("ended", this.handleEnded),
          e.addEventListener("mute", this.handleTrackMuteEvent),
          e.addEventListener("unmute", this.handleTrackUnmuteEvent),
          (this._constraints = e.getConstraints()));
      let i;
      if (this.processor && e) {
        const r = yield this.processorLock.lock();
        try {
          if (
            (this.log.debug("restarting processor", this.logContext),
            this.kind === "unknown")
          )
            throw TypeError("cannot set processor on track of unknown kind");
          this.processorElement &&
            (Ft(e, this.processorElement), (this.processorElement.muted = !0)),
            yield this.processor.restart({
              track: e,
              kind: this.kind,
              element: this.processorElement,
            }),
            (i = this.processor.processedTrack);
        } finally {
          r();
        }
      }
      this.sender && (yield this.sender.replaceTrack(i ?? e)),
        !this.providedByUser &&
          this._mediaStreamTrack !== e &&
          this._mediaStreamTrack.stop(),
        (this._mediaStreamTrack = e),
        e &&
          ((this._mediaStreamTrack.enabled = !this.isMuted),
          yield this.resumeUpstream(),
          this.attachedElements.forEach((r) => {
            Ft(i ?? e, r);
          }));
    });
  }
  waitForDimensions() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yh;
      return (function* () {
        var i;
        if (e.kind === R.Kind.Audio)
          throw new Error("cannot get dimensions for audio tracks");
        ((i = nt()) === null || i === void 0 ? void 0 : i.os) === "iOS" &&
          (yield Je(10));
        const r = Date.now();
        for (; Date.now() - r < t; ) {
          const s = e.dimensions;
          if (s) return s;
          yield Je(50);
        }
        throw new He("unable to get track dimensions after timeout");
      })();
    });
  }
  getDeviceId() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        if (e.source === R.Source.ScreenShare) return;
        const { deviceId: i, groupId: r } = e._mediaStreamTrack.getSettings(),
          s = e.kind === R.Kind.Audio ? "audioinput" : "videoinput";
        return t ? ge.getInstance().normalizeDeviceId(s, i, r) : i;
      })();
    });
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(!0), this;
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(!1), this;
    });
  }
  replaceTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      if (!this.sender) throw new He("unable to replace an unpublished track");
      let i, r;
      return (
        typeof t == "boolean"
          ? (i = t)
          : t !== void 0 && ((i = t.userProvidedTrack), (r = t.stopProcessor)),
        (this.providedByUser = i ?? !0),
        this.log.debug("replace MediaStreamTrack", this.logContext),
        yield this.setMediaStreamTrack(e),
        r && this.processor && (yield this.stopProcessor()),
        this
      );
    });
  }
  restart(e) {
    return m(this, void 0, void 0, function* () {
      this.manuallyStopped = !1;
      const t = yield this.restartLock.lock();
      try {
        e || (e = this._constraints),
          this.log.debug(
            "restarting track with constraints",
            Object.assign(Object.assign({}, this.logContext), {
              constraints: e,
            })
          );
        const i = { audio: !1, video: !1 };
        this.kind === R.Kind.Video ? (i.video = e) : (i.audio = e),
          this.attachedElements.forEach((o) => {
            qt(this.mediaStreamTrack, o);
          }),
          this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
          this._mediaStreamTrack.stop();
        const s = (yield navigator.mediaDevices.getUserMedia(i)).getTracks()[0];
        return (
          s.addEventListener("ended", this.handleEnded),
          this.log.debug("re-acquired MediaStreamTrack", this.logContext),
          yield this.setMediaStreamTrack(s),
          (this._constraints = e),
          this.emit(A.Restarted, this),
          this.manuallyStopped &&
            (this.log.warn(
              "track was stopped during a restart, stopping restarted track",
              this.logContext
            ),
            this.stop()),
          this
        );
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    this.log.debug(
      "setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"),
      this.logContext
    ),
      !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) &&
        ((this.isMuted = e),
        (this._mediaStreamTrack.enabled = !e),
        this.emit(e ? A.Muted : A.Unmuted, this));
  }
  get needsReAcquisition() {
    return (
      this._mediaStreamTrack.readyState !== "live" ||
      this._mediaStreamTrack.muted ||
      !this._mediaStreamTrack.enabled ||
      this.reacquireTrack
    );
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        vc() &&
          (this.log.debug(
            "visibility changed, is in Background: ".concat(
              this.isInBackground
            ),
            this.logContext
          ),
          !this.isInBackground &&
            this.needsReAcquisition &&
            !this.isUserProvided &&
            !this.isMuted &&
            (this.log.debug(
              "track needs to be reacquired, restarting ".concat(this.source),
              this.logContext
            ),
            yield this.restart(),
            (this.reacquireTrack = !1)));
    });
  }
  stop() {
    var e;
    (this.manuallyStopped = !0),
      super.stop(),
      this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
      this._mediaStreamTrack.removeEventListener(
        "mute",
        this.handleTrackMuteEvent
      ),
      this._mediaStreamTrack.removeEventListener(
        "unmute",
        this.handleTrackUnmuteEvent
      ),
      (e = this.processor) === null || e === void 0 || e.destroy(),
      (this.processor = void 0);
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !0) return;
        if (!this.sender) {
          this.log.warn(
            "unable to pause upstream for an unpublished track",
            this.logContext
          );
          return;
        }
        (this._isUpstreamPaused = !0), this.emit(A.UpstreamPaused, this);
        const t = nt();
        if (t?.name === "Safari" && Jt(t.version, "12.0") < 0)
          throw new Mr("pauseUpstream is not supported on Safari < 12.");
        yield this.sender.replaceTrack(null);
      } finally {
        e();
      }
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !1) return;
        if (!this.sender) {
          this.log.warn(
            "unable to resume upstream for an unpublished track",
            this.logContext
          );
          return;
        }
        (this._isUpstreamPaused = !1),
          this.emit(A.UpstreamResumed, this),
          yield this.sender.replaceTrack(this.mediaStreamTrack);
      } finally {
        e();
      }
    });
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.sender) === null || e === void 0) && e.getStats
        ? yield this.sender.getStats()
        : void 0;
    });
  }
  setProcessor(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var s;
        const o = yield i.processorLock.lock();
        try {
          i.log.debug("setting up processor", i.logContext);
          const a = document.createElement(i.kind),
            c = {
              kind: i.kind,
              track: i._mediaStreamTrack,
              element: a,
              audioContext: i.audioContext,
            };
          if (
            (yield t.init(c),
            i.log.debug("processor initialized", i.logContext),
            i.processor && (yield i.stopProcessor()),
            i.kind === "unknown")
          )
            throw TypeError("cannot set processor on track of unknown kind");
          if (
            (Ft(i._mediaStreamTrack, a),
            (a.muted = !0),
            a
              .play()
              .catch((d) =>
                i.log.error(
                  "failed to play processor element",
                  Object.assign(Object.assign({}, i.logContext), { error: d })
                )
              ),
            (i.processor = t),
            (i.processorElement = a),
            i.processor.processedTrack)
          ) {
            for (const d of i.attachedElements)
              d !== i.processorElement &&
                r &&
                (qt(i._mediaStreamTrack, d), Ft(i.processor.processedTrack, d));
            yield (s = i.sender) === null || s === void 0
              ? void 0
              : s.replaceTrack(i.processor.processedTrack);
          }
          i.emit(A.TrackProcessorUpdate, i.processor);
        } finally {
          o();
        }
      })();
    });
  }
  getProcessor() {
    return this.processor;
  }
  stopProcessor() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        var i, r;
        e.processor &&
          (e.log.debug("stopping processor", e.logContext),
          (i = e.processor.processedTrack) === null || i === void 0 || i.stop(),
          yield e.processor.destroy(),
          (e.processor = void 0),
          t ||
            ((r = e.processorElement) === null || r === void 0 || r.remove(),
            (e.processorElement = void 0)),
          yield e._mediaStreamTrack.applyConstraints(e._constraints),
          yield e.setMediaStreamTrack(e._mediaStreamTrack, !0),
          e.emit(A.TrackProcessorUpdate));
      })();
    });
  }
}
class Xh extends $e.EventEmitter {
  constructor(e) {
    super(),
      (this.onWorkerMessage = (t) => {
        var i, r;
        const { kind: s, data: o } = t.data;
        switch (s) {
          case "error":
            K.error(o.error.message), this.emit(lt.EncryptionError, o.error);
            break;
          case "initAck":
            o.enabled &&
              this.keyProvider.getKeys().forEach((a) => {
                this.postKey(a);
              });
            break;
          case "enable":
            if (
              (o.enabled &&
                this.keyProvider.getKeys().forEach((a) => {
                  this.postKey(a);
                }),
              this.encryptionEnabled !== o.enabled &&
                o.participantIdentity ===
                  ((i = this.room) === null || i === void 0
                    ? void 0
                    : i.localParticipant.identity))
            )
              this.emit(
                lt.ParticipantEncryptionStatusChanged,
                o.enabled,
                this.room.localParticipant
              ),
                (this.encryptionEnabled = o.enabled);
            else if (o.participantIdentity) {
              const a =
                (r = this.room) === null || r === void 0
                  ? void 0
                  : r.getParticipantByIdentity(o.participantIdentity);
              if (!a)
                throw TypeError(
                  "couldn't set encryption status, participant not found".concat(
                    o.participantIdentity
                  )
                );
              this.emit(lt.ParticipantEncryptionStatusChanged, o.enabled, a);
            }
            break;
          case "ratchetKey":
            this.keyProvider.emit(ht.KeyRatcheted, o.material, o.keyIndex);
            break;
        }
      }),
      (this.onWorkerError = (t) => {
        K.error("e2ee worker encountered an error:", { error: t.error }),
          this.emit(lt.EncryptionError, t.error);
      }),
      (this.keyProvider = e.keyProvider),
      (this.worker = e.worker),
      (this.encryptionEnabled = !1);
  }
  setup(e) {
    if (!gh())
      throw new Mr(
        "tried to setup end-to-end encryption on an unsupported browser"
      );
    if ((K.info("setting up e2ee"), e !== this.room)) {
      (this.room = e), this.setupEventListeners(e, this.keyProvider);
      const t = {
        kind: "init",
        data: {
          keyProviderOptions: this.keyProvider.getOptions(),
          loglevel: th.getLevel(),
        },
      };
      this.worker &&
        (K.info("initializing worker", { worker: this.worker }),
        (this.worker.onmessage = this.onWorkerMessage),
        (this.worker.onerror = this.onWorkerError),
        this.worker.postMessage(t));
    }
  }
  setParticipantCryptorEnabled(e, t) {
    K.debug("set e2ee to ".concat(e, " for participant ").concat(t)),
      this.postEnable(e, t);
  }
  setSifTrailer(e) {
    !e || e.length === 0
      ? K.warn("ignoring server sent trailer as it's empty")
      : this.postSifTrailer(e);
  }
  setupEngine(e) {
    e.on(N.RTPVideoMapUpdate, (t) => {
      this.postRTPMap(t);
    });
  }
  setupEventListeners(e, t) {
    e.on(C.TrackPublished, (i, r) =>
      this.setParticipantCryptorEnabled(
        i.trackInfo.encryption !== De.NONE,
        r.identity
      )
    ),
      e
        .on(C.ConnectionStateChanged, (i) => {
          i === q.Connected &&
            e.remoteParticipants.forEach((r) => {
              r.trackPublications.forEach((s) => {
                this.setParticipantCryptorEnabled(
                  s.trackInfo.encryption !== De.NONE,
                  r.identity
                );
              });
            });
        })
        .on(C.TrackUnsubscribed, (i, r, s) => {
          var o;
          const a = {
            kind: "removeTransform",
            data: { participantIdentity: s.identity, trackId: i.mediaStreamID },
          };
          (o = this.worker) === null || o === void 0 || o.postMessage(a);
        })
        .on(C.TrackSubscribed, (i, r, s) => {
          this.setupE2EEReceiver(i, s.identity, r.trackInfo);
        })
        .on(C.SignalConnected, () => {
          if (!this.room)
            throw new TypeError(
              "expected room to be present on signal connect"
            );
          t.getKeys().forEach((i) => {
            this.postKey(i);
          }),
            this.setParticipantCryptorEnabled(
              this.room.localParticipant.isE2EEEnabled,
              this.room.localParticipant.identity
            );
        }),
      e.localParticipant.on(E.LocalTrackPublished, (i) =>
        m(this, void 0, void 0, function* () {
          this.setupE2EESender(i.track, i.track.sender);
        })
      ),
      t
        .on(ht.SetKey, (i) => this.postKey(i))
        .on(ht.RatchetRequest, (i, r) => this.postRatchetRequest(i, r));
  }
  postRatchetRequest(e, t) {
    if (!this.worker) throw Error("could not ratchet key, worker is missing");
    const i = {
      kind: "ratchetRequest",
      data: { participantIdentity: e, keyIndex: t },
    };
    this.worker.postMessage(i);
  }
  postKey(e) {
    let { key: t, participantIdentity: i, keyIndex: r } = e;
    var s;
    if (!this.worker) throw Error("could not set key, worker is missing");
    const o = {
      kind: "setKey",
      data: {
        participantIdentity: i,
        isPublisher:
          i ===
          ((s = this.room) === null || s === void 0
            ? void 0
            : s.localParticipant.identity),
        key: t,
        keyIndex: r,
      },
    };
    this.worker.postMessage(o);
  }
  postEnable(e, t) {
    if (this.worker) {
      const i = {
        kind: "enable",
        data: { enabled: e, participantIdentity: t },
      };
      this.worker.postMessage(i);
    } else
      throw new ReferenceError("failed to enable e2ee, worker is not ready");
  }
  postRTPMap(e) {
    var t;
    if (!this.worker)
      throw TypeError("could not post rtp map, worker is missing");
    if (
      !(
        !((t = this.room) === null || t === void 0) &&
        t.localParticipant.identity
      )
    )
      throw TypeError(
        "could not post rtp map, local participant identity is missing"
      );
    const i = {
      kind: "setRTPMap",
      data: {
        map: e,
        participantIdentity: this.room.localParticipant.identity,
      },
    };
    this.worker.postMessage(i);
  }
  postSifTrailer(e) {
    if (!this.worker)
      throw Error("could not post SIF trailer, worker is missing");
    const t = { kind: "setSifTrailer", data: { trailer: e } };
    this.worker.postMessage(t);
  }
  setupE2EEReceiver(e, t, i) {
    if (e.receiver) {
      if (!i?.mimeType || i.mimeType === "")
        throw new TypeError(
          "MimeType missing from trackInfo, cannot set up E2EE cryptor"
        );
      this.handleReceiver(
        e.receiver,
        e.mediaStreamID,
        t,
        e.kind === "video" ? Wn(i.mimeType) : void 0
      );
    }
  }
  setupE2EESender(e, t) {
    if (!(e instanceof zt) || !t) {
      t || K.warn("early return because sender is not ready");
      return;
    }
    this.handleSender(t, e.mediaStreamID, void 0);
  }
  handleReceiver(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (this.worker) {
        if (ar()) {
          const s = {
            kind: "decode",
            participantIdentity: i,
            trackId: t,
            codec: r,
          };
          e.transform = new RTCRtpScriptTransform(this.worker, s);
        } else {
          if (In in e && r) {
            const c = {
              kind: "updateCodec",
              data: { trackId: t, codec: r, participantIdentity: i },
            };
            this.worker.postMessage(c);
            return;
          }
          let s = e.writableStream,
            o = e.readableStream;
          if (!s || !o) {
            const c = e.createEncodedStreams();
            (e.writableStream = c.writable),
              (s = c.writable),
              (e.readableStream = c.readable),
              (o = c.readable);
          }
          const a = {
            kind: "decode",
            data: {
              readableStream: o,
              writableStream: s,
              trackId: t,
              codec: r,
              participantIdentity: i,
            },
          };
          this.worker.postMessage(a, [o, s]);
        }
        e[In] = !0;
      }
    });
  }
  handleSender(e, t, i) {
    var r;
    if (!(In in e || !this.worker)) {
      if (
        !(
          !((r = this.room) === null || r === void 0) &&
          r.localParticipant.identity
        ) ||
        this.room.localParticipant.identity === ""
      )
        throw TypeError(
          "local identity needs to be known in order to set up encrypted sender"
        );
      if (ar()) {
        K.info("initialize script transform");
        const s = {
          kind: "encode",
          participantIdentity: this.room.localParticipant.identity,
          trackId: t,
          codec: i,
        };
        e.transform = new RTCRtpScriptTransform(this.worker, s);
      } else {
        K.info("initialize encoded streams");
        const s = e.createEncodedStreams(),
          o = {
            kind: "encode",
            data: {
              readableStream: s.readable,
              writableStream: s.writable,
              codec: i,
              trackId: t,
              participantIdentity: this.room.localParticipant.identity,
            },
          };
        this.worker.postMessage(o, [s.readable, s.writable]);
      }
      e[In] = !0;
    }
  }
}
var hn;
(function (n) {
  (n[(n.WAITING = 0)] = "WAITING"),
    (n[(n.RUNNING = 1)] = "RUNNING"),
    (n[(n.COMPLETED = 2)] = "COMPLETED");
})(hn || (hn = {}));
class Zh {
  constructor() {
    (this.pendingTasks = new Map()),
      (this.taskMutex = new Re()),
      (this.nextTaskIndex = 0);
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      const t = {
        id: this.nextTaskIndex++,
        enqueuedAt: Date.now(),
        status: hn.WAITING,
      };
      this.pendingTasks.set(t.id, t);
      const i = yield this.taskMutex.lock();
      try {
        return (t.executedAt = Date.now()), (t.status = hn.RUNNING), yield e();
      } finally {
        (t.status = hn.COMPLETED), this.pendingTasks.delete(t.id), i();
      }
    });
  }
  flush() {
    return m(this, void 0, void 0, function* () {
      return this.run(() => m(this, void 0, void 0, function* () {}));
    });
  }
  snapshot() {
    return Array.from(this.pendingTasks.values());
  }
}
const ef = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
function tf(n) {
  const e = ef.indexOf(n.case) >= 0;
  return K.trace("request allowed to bypass queue:", { canPass: e, req: n }), e;
}
var te;
(function (n) {
  (n[(n.CONNECTING = 0)] = "CONNECTING"),
    (n[(n.CONNECTED = 1)] = "CONNECTED"),
    (n[(n.RECONNECTING = 2)] = "RECONNECTING"),
    (n[(n.DISCONNECTING = 3)] = "DISCONNECTING"),
    (n[(n.DISCONNECTED = 4)] = "DISCONNECTED");
})(te || (te = {}));
class Lr {
  get currentState() {
    return this.state;
  }
  get isDisconnected() {
    return this.state === te.DISCONNECTING || this.state === te.DISCONNECTED;
  }
  get isEstablishingConnection() {
    return this.state === te.CONNECTING || this.state === te.RECONNECTING;
  }
  getNextRequestId() {
    return (this._requestId += 1), this._requestId;
  }
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    (this.rtt = 0),
      (this.state = te.DISCONNECTED),
      (this.log = K),
      (this._requestId = 0),
      (this.resetCallbacks = () => {
        (this.onAnswer = void 0),
          (this.onLeave = void 0),
          (this.onLocalTrackPublished = void 0),
          (this.onLocalTrackUnpublished = void 0),
          (this.onNegotiateRequested = void 0),
          (this.onOffer = void 0),
          (this.onRemoteMuteChanged = void 0),
          (this.onSubscribedQualityUpdate = void 0),
          (this.onTokenRefresh = void 0),
          (this.onTrickle = void 0),
          (this.onClose = void 0);
      }),
      (this.log = tt(
        (i = t.loggerName) !== null && i !== void 0 ? i : Be.Signal
      )),
      (this.loggerContextCb = t.loggerContextCb),
      (this.useJSON = e),
      (this.requestQueue = new Zh()),
      (this.queuedRequests = []),
      (this.closingLock = new Re()),
      (this.connectionLock = new Re()),
      (this.state = te.DISCONNECTED);
  }
  get logContext() {
    var e, t;
    return (t =
      (e = this.loggerContextCb) === null || e === void 0
        ? void 0
        : e.call(this)) !== null && t !== void 0
      ? t
      : {};
  }
  join(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      return (
        (this.state = te.CONNECTING),
        (this.options = i),
        yield this.connect(e, t, i, r)
      );
    });
  }
  reconnect(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (!this.options) {
        this.log.warn(
          "attempted to reconnect without signal options being set, ignoring",
          this.logContext
        );
        return;
      }
      return (
        (this.state = te.RECONNECTING),
        this.clearPingInterval(),
        yield this.connect(
          e,
          t,
          Object.assign(Object.assign({}, this.options), {
            reconnect: !0,
            sid: i,
            reconnectReason: r,
          })
        )
      );
    });
  }
  connect(e, t, i, r) {
    (this.connectOptions = i),
      (e = Jh(e)),
      (e = e.replace(/\/$/, "")),
      (e += "/rtc");
    const s = Kh(),
      o = nf(t, s, i);
    return new Promise((a, c) =>
      m(this, void 0, void 0, function* () {
        const d = yield this.connectionLock.lock();
        try {
          const u = () =>
              m(this, void 0, void 0, function* () {
                this.close(),
                  clearTimeout(l),
                  c(new Z("room connection has been cancelled (signal)"));
              }),
            l = setTimeout(() => {
              this.close(), c(new Z("room connection has timed out (signal)"));
            }, i.websocketTimeout);
          r?.aborted && u(),
            r?.addEventListener("abort", u),
            this.log.debug("connecting to ".concat(e + o), this.logContext),
            this.ws && (yield this.close(!1)),
            (this.ws = new WebSocket(e + o)),
            (this.ws.binaryType = "arraybuffer"),
            (this.ws.onopen = () => {
              clearTimeout(l);
            }),
            (this.ws.onerror = (h) =>
              m(this, void 0, void 0, function* () {
                if (this.state !== te.CONNECTED) {
                  (this.state = te.DISCONNECTED), clearTimeout(l);
                  try {
                    const f = yield fetch(
                      "http".concat(e.substring(2), "/validate").concat(o)
                    );
                    if (f.status.toFixed(0).startsWith("4")) {
                      const g = yield f.text();
                      c(new Z(g, ke.NotAllowed, f.status));
                    } else
                      c(new Z("Internal error", ke.InternalError, f.status));
                  } catch {
                    c(new Z("server was not reachable", ke.ServerUnreachable));
                  }
                  return;
                }
                this.handleWSError(h);
              })),
            (this.ws.onmessage = (h) =>
              m(this, void 0, void 0, function* () {
                var f, g, p;
                let b;
                if (typeof h.data == "string") {
                  const v = JSON.parse(h.data);
                  b = Ts.fromJson(v, { ignoreUnknownFields: !0 });
                } else if (h.data instanceof ArrayBuffer)
                  b = Ts.fromBinary(new Uint8Array(h.data));
                else {
                  this.log.error(
                    "could not decode websocket message: ".concat(
                      typeof h.data
                    ),
                    this.logContext
                  );
                  return;
                }
                if (this.state !== te.CONNECTED) {
                  let v = !1;
                  if (
                    (((f = b.message) === null || f === void 0
                      ? void 0
                      : f.case) === "join"
                      ? ((this.state = te.CONNECTED),
                        r?.removeEventListener("abort", u),
                        (this.pingTimeoutDuration =
                          b.message.value.pingTimeout),
                        (this.pingIntervalDuration =
                          b.message.value.pingInterval),
                        this.pingTimeoutDuration &&
                          this.pingTimeoutDuration > 0 &&
                          (this.log.debug(
                            "ping config",
                            Object.assign(Object.assign({}, this.logContext), {
                              timeout: this.pingTimeoutDuration,
                              interval: this.pingIntervalDuration,
                            })
                          ),
                          this.startPingInterval()),
                        a(b.message.value))
                      : this.state === te.RECONNECTING &&
                        b.message.case !== "leave"
                      ? ((this.state = te.CONNECTED),
                        r?.removeEventListener("abort", u),
                        this.startPingInterval(),
                        ((g = b.message) === null || g === void 0
                          ? void 0
                          : g.case) === "reconnect"
                          ? a(b.message.value)
                          : (this.log.debug(
                              "declaring signal reconnected without reconnect response received",
                              this.logContext
                            ),
                            a(void 0),
                            (v = !0)))
                      : this.isEstablishingConnection &&
                        b.message.case === "leave"
                      ? c(
                          new Z(
                            "Received leave request while trying to (re)connect",
                            ke.LeaveRequest
                          )
                        )
                      : i.reconnect ||
                        c(
                          new Z(
                            "did not receive join response, got ".concat(
                              (p = b.message) === null || p === void 0
                                ? void 0
                                : p.case,
                              " instead"
                            )
                          )
                        ),
                    !v)
                  )
                    return;
                }
                this.signalLatency && (yield Je(this.signalLatency)),
                  this.handleSignalResponse(b);
              })),
            (this.ws.onclose = (h) => {
              this.isEstablishingConnection &&
                c(
                  new Z("Websocket got closed during a (re)connection attempt")
                ),
                this.log.warn(
                  "websocket closed",
                  Object.assign(Object.assign({}, this.logContext), {
                    reason: h.reason,
                    code: h.code,
                    wasClean: h.wasClean,
                    state: this.state,
                  })
                ),
                this.handleOnClose(h.reason);
            });
        } finally {
          d();
        }
      })
    );
  }
  close() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        const i = yield e.closingLock.lock();
        try {
          if (
            (e.clearPingInterval(), t && (e.state = te.DISCONNECTING), e.ws)
          ) {
            (e.ws.onmessage = null),
              (e.ws.onopen = null),
              (e.ws.onclose = null);
            const r = new Promise((s) => {
              e.ws
                ? (e.ws.onclose = () => {
                    s();
                  })
                : s();
            });
            e.ws.readyState < e.ws.CLOSING &&
              (e.ws.close(), yield Promise.race([r, Je(250)])),
              (e.ws = void 0);
          }
        } finally {
          t && (e.state = te.DISCONNECTED), i();
        }
      })();
    });
  }
  sendOffer(e) {
    this.log.debug(
      "sending offer",
      Object.assign(Object.assign({}, this.logContext), { offerSdp: e.sdp })
    ),
      this.sendRequest({ case: "offer", value: ei(e) });
  }
  sendAnswer(e) {
    return (
      this.log.debug(
        "sending answer",
        Object.assign(Object.assign({}, this.logContext), { answerSdp: e.sdp })
      ),
      this.sendRequest({ case: "answer", value: ei(e) })
    );
  }
  sendIceCandidate(e, t) {
    return (
      this.log.trace(
        "sending ice candidate",
        Object.assign(Object.assign({}, this.logContext), { candidate: e })
      ),
      this.sendRequest({
        case: "trickle",
        value: new _r({ candidateInit: JSON.stringify(e), target: t }),
      })
    );
  }
  sendMuteTrack(e, t) {
    return this.sendRequest({
      case: "mute",
      value: new Ir({ sid: e, muted: t }),
    });
  }
  sendAddTrack(e) {
    return this.sendRequest({ case: "addTrack", value: e });
  }
  sendUpdateLocalMetadata(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return (function* () {
        const a = s.getNextRequestId();
        return (
          yield s.sendRequest({
            case: "updateMetadata",
            value: new Ia({
              requestId: a,
              metadata: i,
              name: r,
              attributes: o,
            }),
          }),
          a
        );
      })();
    });
  }
  sendUpdateTrackSettings(e) {
    this.sendRequest({ case: "trackSetting", value: e });
  }
  sendUpdateSubscription(e) {
    return this.sendRequest({ case: "subscription", value: e });
  }
  sendSyncState(e) {
    return this.sendRequest({ case: "syncState", value: e });
  }
  sendUpdateVideoLayers(e, t) {
    return this.sendRequest({
      case: "updateLayers",
      value: new _a({ trackSid: e, layers: t }),
    });
  }
  sendUpdateSubscriptionPermissions(e, t) {
    return this.sendRequest({
      case: "subscriptionPermission",
      value: new Da({ allParticipants: e, trackPermissions: t }),
    });
  }
  sendSimulateScenario(e) {
    return this.sendRequest({ case: "simulate", value: e });
  }
  sendPing() {
    return Promise.all([
      this.sendRequest({ case: "ping", value: ne.parse(Date.now()) }),
      this.sendRequest({
        case: "pingReq",
        value: new Na({
          timestamp: ne.parse(Date.now()),
          rtt: ne.parse(this.rtt),
        }),
      }),
    ]);
  }
  sendUpdateLocalAudioTrack(e, t) {
    return this.sendRequest({
      case: "updateAudioTrack",
      value: new Ra({ trackSid: e, features: t }),
    });
  }
  sendLeave() {
    return this.sendRequest({
      case: "leave",
      value: new li({ reason: jt.CLIENT_INITIATED, action: Bt.DISCONNECT }),
    });
  }
  sendRequest(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (function* () {
        if (!r && !tf(t) && i.state === te.RECONNECTING) {
          i.queuedRequests.push(() =>
            m(i, void 0, void 0, function* () {
              yield this.sendRequest(t, !0);
            })
          );
          return;
        }
        if (
          (r || (yield i.requestQueue.flush()),
          i.signalLatency && (yield Je(i.signalLatency)),
          !i.ws || i.ws.readyState !== i.ws.OPEN)
        ) {
          i.log.error(
            "cannot send signal request before connected, type: ".concat(
              t?.case
            ),
            i.logContext
          );
          return;
        }
        const o = new Al({ message: t });
        try {
          i.useJSON ? i.ws.send(o.toJsonString()) : i.ws.send(o.toBinary());
        } catch (a) {
          i.log.error(
            "error sending signal message",
            Object.assign(Object.assign({}, i.logContext), { error: a })
          );
        }
      })();
    });
  }
  handleSignalResponse(e) {
    var t, i;
    const r = e.message;
    if (r == null) {
      this.log.debug("received unsupported message", this.logContext);
      return;
    }
    let s = !1;
    if (r.case === "answer") {
      const o = Ws(r.value);
      this.onAnswer && this.onAnswer(o);
    } else if (r.case === "offer") {
      const o = Ws(r.value);
      this.onOffer && this.onOffer(o);
    } else if (r.case === "trickle") {
      const o = JSON.parse(r.value.candidateInit);
      this.onTrickle && this.onTrickle(o, r.value.target);
    } else
      r.case === "update"
        ? this.onParticipantUpdate &&
          this.onParticipantUpdate(
            (t = r.value.participants) !== null && t !== void 0 ? t : []
          )
        : r.case === "trackPublished"
        ? this.onLocalTrackPublished && this.onLocalTrackPublished(r.value)
        : r.case === "speakersChanged"
        ? this.onSpeakersChanged &&
          this.onSpeakersChanged(
            (i = r.value.speakers) !== null && i !== void 0 ? i : []
          )
        : r.case === "leave"
        ? this.onLeave && this.onLeave(r.value)
        : r.case === "mute"
        ? this.onRemoteMuteChanged &&
          this.onRemoteMuteChanged(r.value.sid, r.value.muted)
        : r.case === "roomUpdate"
        ? this.onRoomUpdate && r.value.room && this.onRoomUpdate(r.value.room)
        : r.case === "connectionQuality"
        ? this.onConnectionQuality && this.onConnectionQuality(r.value)
        : r.case === "streamStateUpdate"
        ? this.onStreamStateUpdate && this.onStreamStateUpdate(r.value)
        : r.case === "subscribedQualityUpdate"
        ? this.onSubscribedQualityUpdate &&
          this.onSubscribedQualityUpdate(r.value)
        : r.case === "subscriptionPermissionUpdate"
        ? this.onSubscriptionPermissionUpdate &&
          this.onSubscriptionPermissionUpdate(r.value)
        : r.case === "refreshToken"
        ? this.onTokenRefresh && this.onTokenRefresh(r.value)
        : r.case === "trackUnpublished"
        ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(r.value)
        : r.case === "subscriptionResponse"
        ? this.onSubscriptionError && this.onSubscriptionError(r.value)
        : r.case === "pong" ||
          (r.case === "pongResp"
            ? ((this.rtt =
                Date.now() -
                Number.parseInt(r.value.lastPingTimestamp.toString())),
              this.resetPingTimeout(),
              (s = !0))
            : r.case === "requestResponse"
            ? this.onRequestResponse && this.onRequestResponse(r.value)
            : r.case === "trackSubscribed"
            ? this.onLocalTrackSubscribed &&
              this.onLocalTrackSubscribed(r.value.trackSid)
            : this.log.debug(
                "unsupported message",
                Object.assign(Object.assign({}, this.logContext), {
                  msgCase: r.case,
                })
              ));
    s || this.resetPingTimeout();
  }
  setReconnected() {
    for (; this.queuedRequests.length > 0; ) {
      const e = this.queuedRequests.shift();
      e && this.requestQueue.run(e);
    }
  }
  handleOnClose(e) {
    return m(this, void 0, void 0, function* () {
      if (this.state === te.DISCONNECTED) return;
      const t = this.onClose;
      yield this.close(),
        this.log.debug(
          "websocket connection closed: ".concat(e),
          Object.assign(Object.assign({}, this.logContext), { reason: e })
        ),
        t && t(e);
    });
  }
  handleWSError(e) {
    this.log.error(
      "websocket error",
      Object.assign(Object.assign({}, this.logContext), { error: e })
    );
  }
  resetPingTimeout() {
    if ((this.clearPingTimeout(), !this.pingTimeoutDuration)) {
      this.log.warn("ping timeout duration not set", this.logContext);
      return;
    }
    this.pingTimeout = ve.setTimeout(() => {
      this.log.warn(
        "ping timeout triggered. last pong received at: ".concat(
          new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString()
        ),
        this.logContext
      ),
        this.handleOnClose("ping timeout");
    }, this.pingTimeoutDuration * 1e3);
  }
  clearPingTimeout() {
    this.pingTimeout && ve.clearTimeout(this.pingTimeout);
  }
  startPingInterval() {
    if (
      (this.clearPingInterval(),
      this.resetPingTimeout(),
      !this.pingIntervalDuration)
    ) {
      this.log.warn("ping interval duration not set", this.logContext);
      return;
    }
    this.log.debug("start ping interval", this.logContext),
      (this.pingInterval = ve.setInterval(() => {
        this.sendPing();
      }, this.pingIntervalDuration * 1e3));
  }
  clearPingInterval() {
    this.log.debug("clearing ping interval", this.logContext),
      this.clearPingTimeout(),
      this.pingInterval && ve.clearInterval(this.pingInterval);
  }
}
function Ws(n) {
  const e = { type: "offer", sdp: n.sdp };
  switch (n.type) {
    case "answer":
    case "offer":
    case "pranswer":
    case "rollback":
      e.type = n.type;
      break;
  }
  return e;
}
function ei(n) {
  return new kt({ sdp: n.sdp, type: n.type });
}
function nf(n, e, t) {
  var i;
  const r = new URLSearchParams();
  return (
    r.set("access_token", n),
    t.reconnect && (r.set("reconnect", "1"), t.sid && r.set("sid", t.sid)),
    r.set("auto_subscribe", t.autoSubscribe ? "1" : "0"),
    r.set("sdk", it() ? "reactnative" : "js"),
    r.set("version", e.version),
    r.set("protocol", e.protocol.toString()),
    e.deviceModel && r.set("device_model", e.deviceModel),
    e.os && r.set("os", e.os),
    e.osVersion && r.set("os_version", e.osVersion),
    e.browser && r.set("browser", e.browser),
    e.browserVersion && r.set("browser_version", e.browserVersion),
    t.adaptiveStream && r.set("adaptive_stream", "1"),
    t.reconnectReason &&
      r.set("reconnect_reason", t.reconnectReason.toString()),
    !((i = navigator.connection) === null || i === void 0) &&
      i.type &&
      r.set("network", navigator.connection.type),
    "?".concat(r.toString())
  );
}
var ze = {},
  Ri = {},
  _i = { exports: {} },
  Gs;
function Sc() {
  if (Gs) return _i.exports;
  Gs = 1;
  var n = (_i.exports = {
    v: [{ name: "version", reg: /^(\d*)$/ }],
    o: [
      {
        name: "origin",
        reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
        names: [
          "username",
          "sessionId",
          "sessionVersion",
          "netType",
          "ipVer",
          "address",
        ],
        format: "%s %s %d %s IP%d %s",
      },
    ],
    s: [{ name: "name" }],
    i: [{ name: "description" }],
    u: [{ name: "uri" }],
    e: [{ name: "email" }],
    p: [{ name: "phone" }],
    z: [{ name: "timezones" }],
    r: [{ name: "repeats" }],
    t: [
      {
        name: "timing",
        reg: /^(\d*) (\d*)/,
        names: ["start", "stop"],
        format: "%d %d",
      },
    ],
    c: [
      {
        name: "connection",
        reg: /^IN IP(\d) (\S*)/,
        names: ["version", "ip"],
        format: "IN IP%d %s",
      },
    ],
    b: [
      {
        push: "bandwidth",
        reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
        names: ["type", "limit"],
        format: "%s:%s",
      },
    ],
    m: [
      {
        reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
        names: ["type", "port", "protocol", "payloads"],
        format: "%s %d %s %s",
      },
    ],
    a: [
      {
        push: "rtp",
        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
        names: ["payload", "codec", "rate", "encoding"],
        format: function (e) {
          return e.encoding
            ? "rtpmap:%d %s/%s/%s"
            : e.rate
            ? "rtpmap:%d %s/%s"
            : "rtpmap:%d %s";
        },
      },
      {
        push: "fmtp",
        reg: /^fmtp:(\d*) ([\S| ]*)/,
        names: ["payload", "config"],
        format: "fmtp:%d %s",
      },
      { name: "control", reg: /^control:(.*)/, format: "control:%s" },
      {
        name: "rtcp",
        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
        names: ["port", "netType", "ipVer", "address"],
        format: function (e) {
          return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
        },
      },
      {
        push: "rtcpFbTrrInt",
        reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
        names: ["payload", "value"],
        format: "rtcp-fb:%s trr-int %d",
      },
      {
        push: "rtcpFb",
        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
        names: ["payload", "type", "subtype"],
        format: function (e) {
          return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
        },
      },
      {
        push: "ext",
        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
        names: ["value", "direction", "encrypt-uri", "uri", "config"],
        format: function (e) {
          return (
            "extmap:%d" +
            (e.direction ? "/%s" : "%v") +
            (e["encrypt-uri"] ? " %s" : "%v") +
            " %s" +
            (e.config ? " %s" : "")
          );
        },
      },
      { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
      {
        push: "crypto",
        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
        names: ["id", "suite", "config", "sessionConfig"],
        format: function (e) {
          return e.sessionConfig != null
            ? "crypto:%d %s %s %s"
            : "crypto:%d %s %s";
        },
      },
      { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
      {
        name: "connectionType",
        reg: /^connection:(new|existing)/,
        format: "connection:%s",
      },
      { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
      { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
      { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
      {
        name: "maxptime",
        reg: /^maxptime:(\d*(?:\.\d*)*)/,
        format: "maxptime:%d",
      },
      { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
      { name: "icelite", reg: /^(ice-lite)/ },
      { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
      { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
      {
        name: "fingerprint",
        reg: /^fingerprint:(\S*) (\S*)/,
        names: ["type", "hash"],
        format: "fingerprint:%s %s",
      },
      {
        push: "candidates",
        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
        names: [
          "foundation",
          "component",
          "transport",
          "priority",
          "ip",
          "port",
          "type",
          "raddr",
          "rport",
          "tcptype",
          "generation",
          "network-id",
          "network-cost",
        ],
        format: function (e) {
          var t = "candidate:%s %d %s %d %s %d typ %s";
          return (
            (t += e.raddr != null ? " raddr %s rport %d" : "%v%v"),
            (t += e.tcptype != null ? " tcptype %s" : "%v"),
            e.generation != null && (t += " generation %d"),
            (t += e["network-id"] != null ? " network-id %d" : "%v"),
            (t += e["network-cost"] != null ? " network-cost %d" : "%v"),
            t
          );
        },
      },
      { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
      {
        name: "remoteCandidates",
        reg: /^remote-candidates:(.*)/,
        format: "remote-candidates:%s",
      },
      {
        name: "iceOptions",
        reg: /^ice-options:(\S*)/,
        format: "ice-options:%s",
      },
      {
        push: "ssrcs",
        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
        names: ["id", "attribute", "value"],
        format: function (e) {
          var t = "ssrc:%d";
          return (
            e.attribute != null &&
              ((t += " %s"), e.value != null && (t += ":%s")),
            t
          );
        },
      },
      {
        push: "ssrcGroups",
        reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
        names: ["semantics", "ssrcs"],
        format: "ssrc-group:%s %s",
      },
      {
        name: "msidSemantic",
        reg: /^msid-semantic:\s?(\w*) (\S*)/,
        names: ["semantic", "token"],
        format: "msid-semantic: %s %s",
      },
      {
        push: "groups",
        reg: /^group:(\w*) (.*)/,
        names: ["type", "mids"],
        format: "group:%s %s",
      },
      { name: "rtcpMux", reg: /^(rtcp-mux)/ },
      { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
      {
        name: "sctpmap",
        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
        names: ["sctpmapNumber", "app", "maxMessageSize"],
        format: function (e) {
          return e.maxMessageSize != null
            ? "sctpmap:%s %s %s"
            : "sctpmap:%s %s";
        },
      },
      {
        name: "xGoogleFlag",
        reg: /^x-google-flag:([^\s]*)/,
        format: "x-google-flag:%s",
      },
      {
        push: "rids",
        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
        names: ["id", "direction", "params"],
        format: function (e) {
          return e.params ? "rid:%s %s %s" : "rid:%s %s";
        },
      },
      {
        push: "imageattrs",
        reg: new RegExp(
          "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"
        ),
        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
        format: function (e) {
          return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast",
        reg: new RegExp(
          "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"
        ),
        names: ["dir1", "list1", "dir2", "list2"],
        format: function (e) {
          return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast_03",
        reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
        names: ["value"],
        format: "simulcast: %s",
      },
      {
        name: "framerate",
        reg: /^framerate:(\d+(?:$|\.\d+))/,
        format: "framerate:%s",
      },
      {
        name: "sourceFilter",
        reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
        names: [
          "filterMode",
          "netType",
          "addressTypes",
          "destAddress",
          "srcList",
        ],
        format: "source-filter: %s %s %s %s %s",
      },
      { name: "bundleOnly", reg: /^(bundle-only)/ },
      { name: "label", reg: /^label:(.+)/, format: "label:%s" },
      { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
      {
        name: "maxMessageSize",
        reg: /^max-message-size:(\d+)$/,
        format: "max-message-size:%s",
      },
      {
        push: "tsRefClocks",
        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
        names: ["clksrc", "clksrcExt"],
        format: function (e) {
          return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "");
        },
      },
      {
        name: "mediaClk",
        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
        names: [
          "id",
          "mediaClockName",
          "mediaClockValue",
          "rateNumerator",
          "rateDenominator",
        ],
        format: function (e) {
          var t = "mediaclk:";
          return (
            (t += e.id != null ? "id=%s %s" : "%v%s"),
            (t += e.mediaClockValue != null ? "=%s" : ""),
            (t += e.rateNumerator != null ? " rate=%s" : ""),
            (t += e.rateDenominator != null ? "/%s" : ""),
            t
          );
        },
      },
      { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
      { name: "content", reg: /^content:(.+)/, format: "content:%s" },
      {
        name: "bfcpFloorCtrl",
        reg: /^floorctrl:(c-only|s-only|c-s)/,
        format: "floorctrl:%s",
      },
      { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
      { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
      {
        name: "bfcpFloorId",
        reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
        names: ["id", "mStream"],
        format: "floorid:%s mstrm:%s",
      },
      { push: "invalid", names: ["value"] },
    ],
  });
  return (
    Object.keys(n).forEach(function (e) {
      var t = n[e];
      t.forEach(function (i) {
        i.reg || (i.reg = /(.*)/), i.format || (i.format = "%s");
      });
    }),
    _i.exports
  );
}
var Ks;
function rf() {
  return (
    Ks ||
      ((Ks = 1),
      (function (n) {
        var e = function (a) {
            return String(Number(a)) === a ? Number(a) : a;
          },
          t = function (a, c, d, u) {
            if (u && !d) c[u] = e(a[1]);
            else
              for (var l = 0; l < d.length; l += 1)
                a[l + 1] != null && (c[d[l]] = e(a[l + 1]));
          },
          i = function (a, c, d) {
            var u = a.name && a.names;
            a.push && !c[a.push]
              ? (c[a.push] = [])
              : u && !c[a.name] && (c[a.name] = {});
            var l = a.push ? {} : u ? c[a.name] : c;
            t(d.match(a.reg), l, a.names, a.name), a.push && c[a.push].push(l);
          },
          r = Sc(),
          s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        n.parse = function (a) {
          var c = {},
            d = [],
            u = c;
          return (
            a
              .split(/(\r\n|\r|\n)/)
              .filter(s)
              .forEach(function (l) {
                var h = l[0],
                  f = l.slice(2);
                h === "m" &&
                  (d.push({ rtp: [], fmtp: [] }), (u = d[d.length - 1]));
                for (var g = 0; g < (r[h] || []).length; g += 1) {
                  var p = r[h][g];
                  if (p.reg.test(f)) return i(p, u, f);
                }
              }),
            (c.media = d),
            c
          );
        };
        var o = function (a, c) {
          var d = c.split(/=(.+)/, 2);
          return (
            d.length === 2
              ? (a[d[0]] = e(d[1]))
              : d.length === 1 && c.length > 1 && (a[d[0]] = void 0),
            a
          );
        };
        (n.parseParams = function (a) {
          return a.split(/;\s?/).reduce(o, {});
        }),
          (n.parseFmtpConfig = n.parseParams),
          (n.parsePayloads = function (a) {
            return a.toString().split(" ").map(Number);
          }),
          (n.parseRemoteCandidates = function (a) {
            for (
              var c = [], d = a.split(" ").map(e), u = 0;
              u < d.length;
              u += 3
            )
              c.push({ component: d[u], ip: d[u + 1], port: d[u + 2] });
            return c;
          }),
          (n.parseImageAttributes = function (a) {
            return a.split(" ").map(function (c) {
              return c
                .substring(1, c.length - 1)
                .split(",")
                .reduce(o, {});
            });
          }),
          (n.parseSimulcastStreamList = function (a) {
            return a.split(";").map(function (c) {
              return c.split(",").map(function (d) {
                var u,
                  l = !1;
                return (
                  d[0] !== "~"
                    ? (u = e(d))
                    : ((u = e(d.substring(1, d.length))), (l = !0)),
                  { scid: u, paused: l }
                );
              });
            });
          });
      })(Ri)),
    Ri
  );
}
var Ii, Hs;
function sf() {
  if (Hs) return Ii;
  Hs = 1;
  var n = Sc(),
    e = /%[sdv%]/g,
    t = function (o) {
      var a = 1,
        c = arguments,
        d = c.length;
      return o.replace(e, function (u) {
        if (a >= d) return u;
        var l = c[a];
        switch (((a += 1), u)) {
          case "%%":
            return "%";
          case "%s":
            return String(l);
          case "%d":
            return Number(l);
          case "%v":
            return "";
        }
      });
    },
    i = function (o, a, c) {
      var d =
          a.format instanceof Function
            ? a.format(a.push ? c : c[a.name])
            : a.format,
        u = [o + "=" + d];
      if (a.names)
        for (var l = 0; l < a.names.length; l += 1) {
          var h = a.names[l];
          a.name ? u.push(c[a.name][h]) : u.push(c[a.names[l]]);
        }
      else u.push(c[a.name]);
      return t.apply(null, u);
    },
    r = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
    s = ["i", "c", "b", "a"];
  return (
    (Ii = function (o, a) {
      (a = a || {}),
        o.version == null && (o.version = 0),
        o.name == null && (o.name = " "),
        o.media.forEach(function (l) {
          l.payloads == null && (l.payloads = "");
        });
      var c = a.outerOrder || r,
        d = a.innerOrder || s,
        u = [];
      return (
        c.forEach(function (l) {
          n[l].forEach(function (h) {
            h.name in o && o[h.name] != null
              ? u.push(i(l, h, o))
              : h.push in o &&
                o[h.push] != null &&
                o[h.push].forEach(function (f) {
                  u.push(i(l, h, f));
                });
          });
        }),
        o.media.forEach(function (l) {
          u.push(i("m", n.m[0], l)),
            d.forEach(function (h) {
              n[h].forEach(function (f) {
                f.name in l && l[f.name] != null
                  ? u.push(i(h, f, l))
                  : f.push in l &&
                    l[f.push] != null &&
                    l[f.push].forEach(function (g) {
                      u.push(i(h, f, g));
                    });
              });
            });
        }),
        u.join(`\r
`) +
          `\r
`
      );
    }),
    Ii
  );
}
var Js;
function of() {
  if (Js) return ze;
  Js = 1;
  var n = rf(),
    e = sf();
  return (
    (ze.write = e),
    (ze.parse = n.parse),
    (ze.parseParams = n.parseParams),
    (ze.parseFmtpConfig = n.parseFmtpConfig),
    (ze.parsePayloads = n.parsePayloads),
    (ze.parseRemoteCandidates = n.parseRemoteCandidates),
    (ze.parseImageAttributes = n.parseImageAttributes),
    (ze.parseSimulcastStreamList = n.parseSimulcastStreamList),
    ze
  );
}
var ut = of();
const af = 0.7,
  cf = 20,
  Wt = {
    NegotiationStarted: "negotiationStarted",
    NegotiationComplete: "negotiationComplete",
    RTPVideoPayloadTypes: "rtpVideoPayloadTypes",
  };
class $s extends $e.EventEmitter {
  get pc() {
    return this._pc || (this._pc = this.createPC()), this._pc;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    super(),
      (this.log = K),
      (this.ddExtID = 0),
      (this.pendingCandidates = []),
      (this.restartingIce = !1),
      (this.renegotiate = !1),
      (this.trackBitrates = []),
      (this.remoteStereoMids = []),
      (this.remoteNackMids = []),
      (this.negotiate = Or(
        (r) =>
          m(this, void 0, void 0, function* () {
            this.emit(Wt.NegotiationStarted);
            try {
              yield this.createAndSendOffer();
            } catch (s) {
              if (r) r(s);
              else throw s;
            }
          }),
        cf
      )),
      (this.close = () => {
        this._pc &&
          (this._pc.close(),
          (this._pc.onconnectionstatechange = null),
          (this._pc.oniceconnectionstatechange = null),
          (this._pc.onicegatheringstatechange = null),
          (this._pc.ondatachannel = null),
          (this._pc.onnegotiationneeded = null),
          (this._pc.onsignalingstatechange = null),
          (this._pc.onicecandidate = null),
          (this._pc.ondatachannel = null),
          (this._pc.ontrack = null),
          (this._pc.onconnectionstatechange = null),
          (this._pc.oniceconnectionstatechange = null),
          (this._pc = null));
      }),
      (this.log = tt(
        (i = t.loggerName) !== null && i !== void 0 ? i : Be.PCTransport
      )),
      (this.loggerOptions = t),
      (this.config = e),
      (this._pc = this.createPC());
  }
  createPC() {
    const e = new RTCPeerConnection(this.config);
    return (
      (e.onicecandidate = (t) => {
        var i;
        t.candidate &&
          ((i = this.onIceCandidate) === null ||
            i === void 0 ||
            i.call(this, t.candidate));
      }),
      (e.onicecandidateerror = (t) => {
        var i;
        (i = this.onIceCandidateError) === null ||
          i === void 0 ||
          i.call(this, t);
      }),
      (e.oniceconnectionstatechange = () => {
        var t;
        (t = this.onIceConnectionStateChange) === null ||
          t === void 0 ||
          t.call(this, e.iceConnectionState);
      }),
      (e.onsignalingstatechange = () => {
        var t;
        (t = this.onSignalingStatechange) === null ||
          t === void 0 ||
          t.call(this, e.signalingState);
      }),
      (e.onconnectionstatechange = () => {
        var t;
        (t = this.onConnectionStateChange) === null ||
          t === void 0 ||
          t.call(this, e.connectionState);
      }),
      (e.ondatachannel = (t) => {
        var i;
        (i = this.onDataChannel) === null || i === void 0 || i.call(this, t);
      }),
      (e.ontrack = (t) => {
        var i;
        (i = this.onTrack) === null || i === void 0 || i.call(this, t);
      }),
      e
    );
  }
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e)
    );
  }
  get isICEConnected() {
    return (
      this._pc !== null &&
      (this.pc.iceConnectionState === "connected" ||
        this.pc.iceConnectionState === "completed")
    );
  }
  addIceCandidate(e) {
    return m(this, void 0, void 0, function* () {
      if (this.pc.remoteDescription && !this.restartingIce)
        return this.pc.addIceCandidate(e);
      this.pendingCandidates.push(e);
    });
  }
  setRemoteDescription(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      let i;
      if (e.type === "offer") {
        let { stereoMids: r, nackMids: s } = df(e);
        (this.remoteStereoMids = r), (this.remoteNackMids = s);
      } else if (e.type === "answer") {
        const r = ut.parse((t = e.sdp) !== null && t !== void 0 ? t : "");
        r.media.forEach((s) => {
          s.type === "audio" &&
            this.trackBitrates.some((o) => {
              if (!o.transceiver || s.mid != o.transceiver.mid) return !1;
              let a = 0;
              if (
                (s.rtp.some((d) =>
                  d.codec.toUpperCase() === o.codec.toUpperCase()
                    ? ((a = d.payload), !0)
                    : !1
                ),
                a === 0)
              )
                return !0;
              let c = !1;
              for (const d of s.fmtp)
                if (d.payload === a) {
                  (d.config = d.config
                    .split(";")
                    .filter((u) => !u.includes("maxaveragebitrate"))
                    .join(";")),
                    o.maxbr > 0 &&
                      (d.config += ";maxaveragebitrate=".concat(o.maxbr * 1e3)),
                    (c = !0);
                  break;
                }
              return (
                c ||
                  (o.maxbr > 0 &&
                    s.fmtp.push({
                      payload: a,
                      config: "maxaveragebitrate=".concat(o.maxbr * 1e3),
                    })),
                !0
              );
            });
        }),
          (i = ut.write(r));
      }
      yield this.setMungedSDP(e, i, !0),
        this.pendingCandidates.forEach((r) => {
          this.pc.addIceCandidate(r);
        }),
        (this.pendingCandidates = []),
        (this.restartingIce = !1),
        this.renegotiate
          ? ((this.renegotiate = !1), yield this.createAndSendOffer())
          : e.type === "answer" &&
            (this.emit(Wt.NegotiationComplete),
            e.sdp &&
              ut.parse(e.sdp).media.forEach((s) => {
                s.type === "video" && this.emit(Wt.RTPVideoPayloadTypes, s.rtp);
              }));
    });
  }
  createAndSendOffer(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      if (this.onOffer === void 0) return;
      if (
        (e?.iceRestart &&
          (this.log.debug("restarting ICE", this.logContext),
          (this.restartingIce = !0)),
        this._pc && this._pc.signalingState === "have-local-offer")
      ) {
        const s = this._pc.remoteDescription;
        if (e?.iceRestart && s) yield this._pc.setRemoteDescription(s);
        else {
          this.renegotiate = !0;
          return;
        }
      } else if (!this._pc || this._pc.signalingState === "closed") {
        this.log.warn(
          "could not createOffer with closed peer connection",
          this.logContext
        );
        return;
      }
      this.log.debug("starting to negotiate", this.logContext);
      const i = yield this.pc.createOffer(e);
      this.log.debug(
        "original offer",
        Object.assign({ sdp: i.sdp }, this.logContext)
      );
      const r = ut.parse((t = i.sdp) !== null && t !== void 0 ? t : "");
      r.media.forEach((s) => {
        s.type === "audio"
          ? Qs(s, [], [])
          : s.type === "video" &&
            this.trackBitrates.some((o) => {
              if (!s.msid || !o.cid || !s.msid.includes(o.cid)) return !1;
              let a = 0;
              if (
                (s.rtp.some((d) =>
                  d.codec.toUpperCase() === o.codec.toUpperCase()
                    ? ((a = d.payload), !0)
                    : !1
                ),
                a === 0 ||
                  (ln(o.codec) && this.ensureVideoDDExtensionForSVC(s, r),
                  o.codec !== "av1"))
              )
                return !0;
              const c = Math.round(o.maxbr * af);
              for (const d of s.fmtp)
                if (d.payload === a) {
                  d.config.includes("x-google-start-bitrate") ||
                    (d.config += ";x-google-start-bitrate=".concat(c));
                  break;
                }
              return !0;
            });
      }),
        yield this.setMungedSDP(i, ut.write(r)),
        this.onOffer(i);
    });
  }
  createAndSetAnswer() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pc.createAnswer(),
        i = ut.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
      return (
        i.media.forEach((r) => {
          r.type === "audio" &&
            Qs(r, this.remoteStereoMids, this.remoteNackMids);
        }),
        yield this.setMungedSDP(t, ut.write(i)),
        t
      );
    });
  }
  createDataChannel(e, t) {
    return this.pc.createDataChannel(e, t);
  }
  addTransceiver(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTrack(e) {
    if (!this._pc) throw new he("PC closed, cannot add track");
    return this._pc.addTrack(e);
  }
  setTrackCodecBitrate(e) {
    this.trackBitrates.push(e);
  }
  setConfiguration(e) {
    var t;
    if (!this._pc) throw new he("PC closed, cannot configure");
    return (t = this._pc) === null || t === void 0
      ? void 0
      : t.setConfiguration(e);
  }
  canRemoveTrack() {
    var e;
    return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack);
  }
  removeTrack(e) {
    var t;
    return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e);
  }
  getConnectionState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !==
      null && t !== void 0
      ? t
      : "closed";
  }
  getICEConnectionState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0
        ? void 0
        : e.iceConnectionState) !== null && t !== void 0
      ? t
      : "closed";
  }
  getSignallingState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !==
      null && t !== void 0
      ? t
      : "closed";
  }
  getTransceivers() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0
        ? void 0
        : e.getTransceivers()) !== null && t !== void 0
      ? t
      : [];
  }
  getSenders() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !==
      null && t !== void 0
      ? t
      : [];
  }
  getLocalDescription() {
    var e;
    return (e = this._pc) === null || e === void 0
      ? void 0
      : e.localDescription;
  }
  getRemoteDescription() {
    var e;
    return (e = this.pc) === null || e === void 0
      ? void 0
      : e.remoteDescription;
  }
  getStats() {
    return this.pc.getStats();
  }
  getConnectedAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!this._pc) return;
      let t = "";
      const i = new Map(),
        r = new Map();
      if (
        ((yield this._pc.getStats()).forEach((a) => {
          switch (a.type) {
            case "transport":
              t = a.selectedCandidatePairId;
              break;
            case "candidate-pair":
              t === "" && a.selected && (t = a.id), i.set(a.id, a);
              break;
            case "remote-candidate":
              r.set(a.id, "".concat(a.address, ":").concat(a.port));
              break;
          }
        }),
        t === "")
      )
        return;
      const o =
        (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
      if (o !== void 0) return r.get(o);
    });
  }
  setMungedSDP(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t) {
        const r = e.sdp;
        e.sdp = t;
        try {
          this.log.debug(
            "setting munged ".concat(i ? "remote" : "local", " description"),
            this.logContext
          ),
            i
              ? yield this.pc.setRemoteDescription(e)
              : yield this.pc.setLocalDescription(e);
          return;
        } catch (s) {
          this.log.warn(
            "not able to set ".concat(
              e.type,
              ", falling back to unmodified sdp"
            ),
            Object.assign(Object.assign({}, this.logContext), {
              error: s,
              sdp: t,
            })
          ),
            (e.sdp = r);
        }
      }
      try {
        i
          ? yield this.pc.setRemoteDescription(e)
          : yield this.pc.setLocalDescription(e);
      } catch (r) {
        let s = "unknown error";
        r instanceof Error ? (s = r.message) : typeof r == "string" && (s = r);
        const o = { error: s, sdp: e.sdp };
        throw (
          (!i &&
            this.pc.remoteDescription &&
            (o.remoteSdp = this.pc.remoteDescription),
          this.log.error(
            "unable to set ".concat(e.type),
            Object.assign(Object.assign({}, this.logContext), { fields: o })
          ),
          new cr(s))
        );
      }
    });
  }
  ensureVideoDDExtensionForSVC(e, t) {
    var i, r;
    if (
      !((i = e.ext) === null || i === void 0
        ? void 0
        : i.some((o) => o.uri === Fs))
    ) {
      if (this.ddExtID === 0) {
        let o = 0;
        t.media.forEach((a) => {
          var c;
          a.type === "video" &&
            ((c = a.ext) === null ||
              c === void 0 ||
              c.forEach((d) => {
                d.value > o && (o = d.value);
              }));
        }),
          (this.ddExtID = o + 1);
      }
      (r = e.ext) === null ||
        r === void 0 ||
        r.push({ value: this.ddExtID, uri: Fs });
    }
  }
}
function Qs(n, e, t) {
  let i = 0;
  n.rtp.some((r) => (r.codec === "opus" ? ((i = r.payload), !0) : !1)),
    i > 0 &&
      (n.rtcpFb || (n.rtcpFb = []),
      t.includes(n.mid) &&
        !n.rtcpFb.some((r) => r.payload === i && r.type === "nack") &&
        n.rtcpFb.push({ payload: i, type: "nack" }),
      e.includes(n.mid) &&
        n.fmtp.some((r) =>
          r.payload === i
            ? (r.config.includes("stereo=1") || (r.config += ";stereo=1"), !0)
            : !1
        ));
}
function df(n) {
  var e;
  const t = [],
    i = [],
    r = ut.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
  let s = 0;
  return (
    r.media.forEach((o) => {
      var a;
      o.type === "audio" &&
        (o.rtp.some((c) => (c.codec === "opus" ? ((s = c.payload), !0) : !1)),
        !((a = o.rtcpFb) === null || a === void 0) &&
          a.some((c) => c.payload === s && c.type === "nack") &&
          i.push(o.mid),
        o.fmtp.some((c) =>
          c.payload === s
            ? (c.config.includes("sprop-stereo=1") && t.push(o.mid), !0)
            : !1
        ));
    }),
    { stereoMids: t, nackMids: i }
  );
}
const gr = "vp8",
  uf = {
    audioPreset: dr.music,
    dtx: !0,
    red: !0,
    forceStereo: !1,
    simulcast: !0,
    screenShareEncoding: Nr.h1080fps15.encoding,
    stopMicTrackOnMute: !1,
    videoCodec: gr,
    backupCodec: !0,
  },
  Tc = { autoGainControl: !0, echoCancellation: !0, noiseSuppression: !0 },
  Cc = { resolution: bn.h720.resolution },
  lf = {
    adaptiveStream: !1,
    dynacast: !1,
    stopLocalTrackOnUnpublish: !0,
    reconnectPolicy: new ih(),
    disconnectOnPageLeave: !0,
    webAudioMix: !1,
  },
  Ur = {
    autoSubscribe: !0,
    maxRetries: 1,
    peerConnectionTimeout: 15e3,
    websocketTimeout: 15e3,
  };
var ae;
(function (n) {
  (n[(n.NEW = 0)] = "NEW"),
    (n[(n.CONNECTING = 1)] = "CONNECTING"),
    (n[(n.CONNECTED = 2)] = "CONNECTED"),
    (n[(n.FAILED = 3)] = "FAILED"),
    (n[(n.CLOSING = 4)] = "CLOSING"),
    (n[(n.CLOSED = 5)] = "CLOSED");
})(ae || (ae = {}));
class hf {
  get needsPublisher() {
    return this.isPublisherConnectionRequired;
  }
  get needsSubscriber() {
    return this.isSubscriberConnectionRequired;
  }
  get currentState() {
    return this.state;
  }
  constructor(e, t, i) {
    var r;
    (this.peerConnectionTimeout = Ur.peerConnectionTimeout),
      (this.log = K),
      (this.updateState = () => {
        var s;
        const o = this.state,
          a = this.requiredTransports.map((c) => c.getConnectionState());
        a.every((c) => c === "connected")
          ? (this.state = ae.CONNECTED)
          : a.some((c) => c === "failed")
          ? (this.state = ae.FAILED)
          : a.some((c) => c === "connecting")
          ? (this.state = ae.CONNECTING)
          : a.every((c) => c === "closed")
          ? (this.state = ae.CLOSED)
          : a.some((c) => c === "closed")
          ? (this.state = ae.CLOSING)
          : a.every((c) => c === "new") && (this.state = ae.NEW),
          o !== this.state &&
            (this.log.debug(
              "pc state change: from "
                .concat(ae[o], " to ")
                .concat(ae[this.state]),
              this.logContext
            ),
            (s = this.onStateChange) === null ||
              s === void 0 ||
              s.call(
                this,
                this.state,
                this.publisher.getConnectionState(),
                this.subscriber.getConnectionState()
              ));
      }),
      (this.log = tt(
        (r = i.loggerName) !== null && r !== void 0 ? r : Be.PCManager
      )),
      (this.loggerOptions = i),
      (this.isPublisherConnectionRequired = !t),
      (this.isSubscriberConnectionRequired = t),
      (this.publisher = new $s(e, i)),
      (this.subscriber = new $s(e, i)),
      (this.publisher.onConnectionStateChange = this.updateState),
      (this.subscriber.onConnectionStateChange = this.updateState),
      (this.publisher.onIceConnectionStateChange = this.updateState),
      (this.subscriber.onIceConnectionStateChange = this.updateState),
      (this.publisher.onSignalingStatechange = this.updateState),
      (this.subscriber.onSignalingStatechange = this.updateState),
      (this.publisher.onIceCandidate = (s) => {
        var o;
        (o = this.onIceCandidate) === null ||
          o === void 0 ||
          o.call(this, s, je.PUBLISHER);
      }),
      (this.subscriber.onIceCandidate = (s) => {
        var o;
        (o = this.onIceCandidate) === null ||
          o === void 0 ||
          o.call(this, s, je.SUBSCRIBER);
      }),
      (this.subscriber.onDataChannel = (s) => {
        var o;
        (o = this.onDataChannel) === null || o === void 0 || o.call(this, s);
      }),
      (this.subscriber.onTrack = (s) => {
        var o;
        (o = this.onTrack) === null || o === void 0 || o.call(this, s);
      }),
      (this.publisher.onOffer = (s) => {
        var o;
        (o = this.onPublisherOffer) === null || o === void 0 || o.call(this, s);
      }),
      (this.state = ae.NEW),
      (this.connectionLock = new Re()),
      (this.remoteOfferLock = new Re());
  }
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e)
    );
  }
  requirePublisher() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    (this.isPublisherConnectionRequired = e), this.updateState();
  }
  requireSubscriber() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    (this.isSubscriberConnectionRequired = e), this.updateState();
  }
  createAndSendPublisherOffer(e) {
    return this.publisher.createAndSendOffer(e);
  }
  setPublisherAnswer(e) {
    return this.publisher.setRemoteDescription(e);
  }
  removeTrack(e) {
    return this.publisher.removeTrack(e);
  }
  close() {
    return m(this, void 0, void 0, function* () {
      if (this.publisher && this.publisher.getSignallingState() !== "closed") {
        const e = this.publisher;
        for (const t of e.getSenders())
          try {
            e.canRemoveTrack() && e.removeTrack(t);
          } catch (i) {
            this.log.warn(
              "could not removeTrack",
              Object.assign(Object.assign({}, this.logContext), { error: i })
            );
          }
      }
      yield Promise.all([this.publisher.close(), this.subscriber.close()]),
        this.updateState();
    });
  }
  triggerIceRestart() {
    return m(this, void 0, void 0, function* () {
      (this.subscriber.restartingIce = !0),
        this.needsPublisher &&
          (yield this.createAndSendPublisherOffer({ iceRestart: !0 }));
    });
  }
  addIceCandidate(e, t) {
    return m(this, void 0, void 0, function* () {
      t === je.PUBLISHER
        ? yield this.publisher.addIceCandidate(e)
        : yield this.subscriber.addIceCandidate(e);
    });
  }
  createSubscriberAnswerFromOffer(e) {
    return m(this, void 0, void 0, function* () {
      this.log.debug(
        "received server offer",
        Object.assign(Object.assign({}, this.logContext), {
          RTCSdpType: e.type,
          sdp: e.sdp,
          signalingState: this.subscriber.getSignallingState().toString(),
        })
      );
      const t = yield this.remoteOfferLock.lock();
      try {
        return (
          yield this.subscriber.setRemoteDescription(e),
          yield this.subscriber.createAndSetAnswer()
        );
      } finally {
        t();
      }
    });
  }
  updateConfiguration(e, t) {
    this.publisher.setConfiguration(e),
      this.subscriber.setConfiguration(e),
      t && this.triggerIceRestart();
  }
  ensurePCTransportConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      const r = yield this.connectionLock.lock();
      try {
        this.isPublisherConnectionRequired &&
          this.publisher.getConnectionState() !== "connected" &&
          this.publisher.getConnectionState() !== "connecting" &&
          (this.log.debug(
            "negotiation required, start negotiating",
            this.logContext
          ),
          this.publisher.negotiate()),
          yield Promise.all(
            (i = this.requiredTransports) === null || i === void 0
              ? void 0
              : i.map((s) => this.ensureTransportConnected(s, e, t))
          );
      } finally {
        r();
      }
    });
  }
  negotiate(e) {
    return m(this, void 0, void 0, function* () {
      return new Promise((t, i) =>
        m(this, void 0, void 0, function* () {
          const r = setTimeout(() => {
              i("negotiation timed out");
            }, this.peerConnectionTimeout),
            s = () => {
              clearTimeout(r), i("negotiation aborted");
            };
          e.signal.addEventListener("abort", s),
            this.publisher.once(Wt.NegotiationStarted, () => {
              e.signal.aborted ||
                this.publisher.once(Wt.NegotiationComplete, () => {
                  clearTimeout(r), t();
                });
            }),
            yield this.publisher.negotiate((o) => {
              clearTimeout(r), i(o);
            });
        })
      );
    });
  }
  addPublisherTransceiver(e, t) {
    return this.publisher.addTransceiver(e, t);
  }
  addPublisherTrack(e) {
    return this.publisher.addTrack(e);
  }
  createPublisherDataChannel(e, t) {
    return this.publisher.createDataChannel(e, t);
  }
  getConnectedAddress(e) {
    return e === je.PUBLISHER
      ? this.publisher.getConnectedAddress()
      : e === je.SUBSCRIBER
      ? this.publisher.getConnectedAddress()
      : this.requiredTransports[0].getConnectedAddress();
  }
  get requiredTransports() {
    const e = [];
    return (
      this.isPublisherConnectionRequired && e.push(this.publisher),
      this.isSubscriberConnectionRequired && e.push(this.subscriber),
      e
    );
  }
  ensureTransportConnected(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : this.peerConnectionTimeout;
      return (function* () {
        if (i.getConnectionState() !== "connected")
          return new Promise((c, d) =>
            m(s, void 0, void 0, function* () {
              const u = () => {
                this.log.warn("abort transport connection", this.logContext),
                  ve.clearTimeout(l),
                  d(new Z("room connection has been cancelled", ke.Cancelled));
              };
              r?.signal.aborted && u(), r?.signal.addEventListener("abort", u);
              const l = ve.setTimeout(() => {
                r?.signal.removeEventListener("abort", u),
                  d(new Z("could not establish pc connection"));
              }, o);
              for (; this.state !== ae.CONNECTED; )
                if ((yield Je(50), r?.signal.aborted)) {
                  d(new Z("room connection has been cancelled", ke.Cancelled));
                  return;
                }
              ve.clearTimeout(l),
                r?.signal.removeEventListener("abort", u),
                c();
            })
          );
      })();
    });
  }
}
const Fr = 2e3;
function pi(n, e) {
  if (!e) return 0;
  let t, i;
  return (
    "bytesReceived" in n
      ? ((t = n.bytesReceived), (i = e.bytesReceived))
      : "bytesSent" in n && ((t = n.bytesSent), (i = e.bytesSent)),
    t === void 0 ||
    i === void 0 ||
    n.timestamp === void 0 ||
    e.timestamp === void 0
      ? 0
      : ((t - i) * 8 * 1e3) / (n.timestamp - e.timestamp)
  );
}
class me extends zt {
  get enhancedNoiseCancellation() {
    return this.isKrispNoiseFilterEnabled;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = arguments.length > 4 ? arguments[4] : void 0;
    super(e, R.Kind.Audio, t, i, s),
      (this.stopOnMute = !1),
      (this.isKrispNoiseFilterEnabled = !1),
      (this.monitorSender = () =>
        m(this, void 0, void 0, function* () {
          if (!this.sender) {
            this._currentBitrate = 0;
            return;
          }
          let o;
          try {
            o = yield this.getSenderStats();
          } catch (a) {
            this.log.error(
              "could not get audio sender stats",
              Object.assign(Object.assign({}, this.logContext), { error: a })
            );
            return;
          }
          o && this.prevStats && (this._currentBitrate = pi(o, this.prevStats)),
            (this.prevStats = o);
        })),
      (this.handleKrispNoiseFilterEnable = () => {
        (this.isKrispNoiseFilterEnabled = !0),
          this.log.debug("Krisp noise filter enabled", this.logContext),
          this.emit(
            A.AudioTrackFeatureUpdate,
            this,
            Ke.TF_ENHANCED_NOISE_CANCELLATION,
            !0
          );
      }),
      (this.handleKrispNoiseFilterDisable = () => {
        (this.isKrispNoiseFilterEnabled = !1),
          this.log.debug("Krisp noise filter disabled", this.logContext),
          this.emit(
            A.AudioTrackFeatureUpdate,
            this,
            Ke.TF_ENHANCED_NOISE_CANCELLATION,
            !1
          );
      }),
      (this.audioContext = r),
      this.checkForSilence();
  }
  setDeviceId(e) {
    return m(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e &&
        this._mediaStreamTrack.getSettings().deviceId === et(e)
        ? !0
        : ((this._constraints.deviceId = e),
          this.isMuted || (yield this.restartTrack()),
          this.isMuted ||
            et(e) === this._mediaStreamTrack.getSettings().deviceId);
    });
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.log.debug("Track already muted", this.logContext), this)
          : (this.source === R.Source.Microphone &&
              this.stopOnMute &&
              !this.isUserProvided &&
              (this.log.debug("stopping mic track", this.logContext),
              this._mediaStreamTrack.stop()),
            yield e.mute.call(this),
            this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        if (!this.isMuted)
          return this.log.debug("Track already unmuted", this.logContext), this;
        const i =
          this._constraints.deviceId &&
          this._mediaStreamTrack.getSettings().deviceId !==
            et(this._constraints.deviceId);
        return (
          this.source === R.Source.Microphone &&
            (this.stopOnMute ||
              this._mediaStreamTrack.readyState === "ended" ||
              i) &&
            !this.isUserProvided &&
            (this.log.debug("reacquiring mic track", this.logContext),
            yield this.restartTrack()),
          yield e.unmute.call(this),
          this
        );
      } finally {
        t();
      }
    });
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      let t;
      if (e) {
        const i = fi({ audio: e });
        typeof i.audio != "boolean" && (t = i.audio);
      }
      yield this.restart(t);
    });
  }
  restart(e) {
    const t = Object.create(null, { restart: { get: () => super.restart } });
    return m(this, void 0, void 0, function* () {
      const i = yield t.restart.call(this, e);
      return this.checkForSilence(), i;
    });
  }
  startMonitor() {
    _e() &&
      (this.monitorInterval ||
        (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, Fr)));
  }
  setProcessor(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      const i = yield this.processorLock.lock();
      try {
        if (!this.audioContext)
          throw Error(
            "Audio context needs to be set on LocalAudioTrack in order to enable processors"
          );
        this.processor && (yield this.stopProcessor());
        const r = {
          kind: this.kind,
          track: this._mediaStreamTrack,
          audioContext: this.audioContext,
        };
        this.log.debug(
          "setting up audio processor ".concat(e.name),
          this.logContext
        ),
          yield e.init(r),
          (this.processor = e),
          this.processor.processedTrack &&
            (yield (t = this.sender) === null || t === void 0
              ? void 0
              : t.replaceTrack(this.processor.processedTrack),
            this.processor.processedTrack.addEventListener(
              "enable-lk-krisp-noise-filter",
              this.handleKrispNoiseFilterEnable
            ),
            this.processor.processedTrack.addEventListener(
              "disable-lk-krisp-noise-filter",
              this.handleKrispNoiseFilterDisable
            )),
          this.emit(A.TrackProcessorUpdate, this.processor);
      } finally {
        i();
      }
    });
  }
  setAudioContext(e) {
    this.audioContext = e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
        return;
      const t = yield this.sender.getStats();
      let i;
      return (
        t.forEach((r) => {
          r.type === "outbound-rtp" &&
            (i = {
              type: "audio",
              streamId: r.id,
              packetsSent: r.packetsSent,
              packetsLost: r.packetsLost,
              bytesSent: r.bytesSent,
              timestamp: r.timestamp,
              roundTripTime: r.roundTripTime,
              jitter: r.jitter,
            });
        }),
        i
      );
    });
  }
  checkForSilence() {
    return m(this, void 0, void 0, function* () {
      const e = yield Dh(this);
      return (
        e &&
          (this.isMuted ||
            this.log.warn(
              "silence detected on local audio track",
              this.logContext
            ),
          this.emit(A.AudioSilenceDetected)),
        e
      );
    });
  }
}
function wc(n, e, t) {
  switch (n.kind) {
    case "audio":
      return new me(n, e, !1, void 0, t);
    case "video":
      return new be(n, e, !1, t);
    default:
      throw new He("unsupported track type: ".concat(n.kind));
  }
}
const ff = Object.values(bn),
  pf = Object.values(ur),
  mf = Object.values(Nr),
  gf = [bn.h180, bn.h360],
  vf = [ur.h180, ur.h360],
  bf = (n) =>
    [{ scaleResolutionDownBy: 2, fps: n.encoding.maxFramerate }].map((t) => {
      var i, r;
      return new J(
        Math.floor(n.width / t.scaleResolutionDownBy),
        Math.floor(n.height / t.scaleResolutionDownBy),
        Math.max(
          15e4,
          Math.floor(
            n.encoding.maxBitrate /
              (Math.pow(t.scaleResolutionDownBy, 2) *
                (((i = n.encoding.maxFramerate) !== null && i !== void 0
                  ? i
                  : 30) /
                  ((r = t.fps) !== null && r !== void 0 ? r : 30)))
          )
        ),
        t.fps,
        n.encoding.priority
      );
    }),
  vr = ["q", "h", "f"];
function br(n, e, t, i) {
  var r, s;
  let o = i?.videoEncoding;
  n && (o = i?.screenShareEncoding);
  const a = i?.simulcast,
    c = i?.scalabilityMode,
    d = i?.videoCodec;
  if ((!o && !a && !c) || !e || !t) return [{}];
  o || ((o = kf(n, e, t, d)), K.debug("using video encoding", o));
  const u = new J(e, t, o.maxBitrate, o.maxFramerate, o.priority);
  if (c && ln(d)) {
    const f = new Pc(c),
      g = [];
    if (f.spatial > 3)
      throw new Error("unsupported scalabilityMode: ".concat(c));
    const p = nt();
    if (St() || it() || (p?.name === "Chrome" && Jt(p?.version, "113") < 0)) {
      const b = f.suffix == "h" ? 2 : 3;
      for (let v = 0; v < f.spatial; v += 1)
        g.push({
          rid: vr[2 - v],
          maxBitrate: o.maxBitrate / Math.pow(b, v),
          maxFramerate: u.encoding.maxFramerate,
        });
      g[0].scalabilityMode = c;
    } else
      g.push({
        maxBitrate: o.maxBitrate,
        maxFramerate: u.encoding.maxFramerate,
        scalabilityMode: c,
      });
    return (
      u.encoding.priority &&
        ((g[0].priority = u.encoding.priority),
        (g[0].networkPriority = u.encoding.priority)),
      K.debug("using svc encoding", { encodings: g }),
      g
    );
  }
  if (!a) return [o];
  let l = [];
  n
    ? (l =
        (r = Xs(i?.screenShareSimulcastLayers)) !== null && r !== void 0
          ? r
          : Ys(n, u))
    : (l =
        (s = Xs(i?.videoSimulcastLayers)) !== null && s !== void 0
          ? s
          : Ys(n, u));
  let h;
  if (l.length > 0) {
    const f = l[0];
    l.length > 1 && ([, h] = l);
    const g = Math.max(e, t);
    if (g >= 960 && h) return xi(e, t, [f, h, u]);
    if (g >= 480) return xi(e, t, [f, u]);
  }
  return xi(e, t, [u]);
}
function yf(n, e, t) {
  var i, r, s, o;
  if (
    !t.backupCodec ||
    t.backupCodec === !0 ||
    t.backupCodec.codec === t.videoCodec
  )
    return;
  e !== t.backupCodec.codec &&
    K.warn("requested a different codec than specified as backup", {
      serverRequested: e,
      backup: t.backupCodec.codec,
    }),
    (t.videoCodec = e),
    (t.videoEncoding = t.backupCodec.encoding);
  const a = n.mediaStreamTrack.getSettings(),
    c =
      (i = a.width) !== null && i !== void 0
        ? i
        : (r = n.dimensions) === null || r === void 0
        ? void 0
        : r.width,
    d =
      (s = a.height) !== null && s !== void 0
        ? s
        : (o = n.dimensions) === null || o === void 0
        ? void 0
        : o.height;
  return br(n.source === R.Source.ScreenShare, c, d, t);
}
function kf(n, e, t, i) {
  const r = Sf(n, e, t);
  let { encoding: s } = r[0];
  const o = Math.max(e, t);
  for (let a = 0; a < r.length; a += 1) {
    const c = r[a];
    if (((s = c.encoding), c.width >= o)) break;
  }
  if (i)
    switch (i) {
      case "av1":
        (s = Object.assign({}, s)), (s.maxBitrate = s.maxBitrate * 0.7);
        break;
      case "vp9":
        (s = Object.assign({}, s)), (s.maxBitrate = s.maxBitrate * 0.85);
        break;
    }
  return s;
}
function Sf(n, e, t) {
  if (n) return mf;
  const i = e > t ? e / t : t / e;
  return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? ff : pf;
}
function Ys(n, e) {
  if (n) return bf(e);
  const { width: t, height: i } = e,
    r = t > i ? t / i : i / t;
  return Math.abs(r - 16 / 9) < Math.abs(r - 4 / 3) ? gf : vf;
}
function xi(n, e, t) {
  const i = [];
  if (
    (t.forEach((r, s) => {
      if (s >= vr.length) return;
      const o = Math.min(n, e),
        c = {
          rid: vr[s],
          scaleResolutionDownBy: Math.max(1, o / Math.min(r.width, r.height)),
          maxBitrate: r.encoding.maxBitrate,
        };
      r.encoding.maxFramerate && (c.maxFramerate = r.encoding.maxFramerate);
      const d = Ht() || s === 0;
      r.encoding.priority &&
        d &&
        ((c.priority = r.encoding.priority),
        (c.networkPriority = r.encoding.priority)),
        i.push(c);
    }),
    it() && yc() === "ios")
  ) {
    let r;
    i.forEach((o) => {
      r
        ? o.maxFramerate && o.maxFramerate > r && (r = o.maxFramerate)
        : (r = o.maxFramerate);
    });
    let s = !0;
    i.forEach((o) => {
      var a;
      o.maxFramerate != r &&
        (s &&
          ((s = !1),
          K.info(
            "Simulcast on iOS React-Native requires all encodings to share the same framerate."
          )),
        K.info(
          'Setting framerate of encoding "'
            .concat((a = o.rid) !== null && a !== void 0 ? a : "", '" to ')
            .concat(r)
        ),
        (o.maxFramerate = r));
    });
  }
  return i;
}
function Xs(n) {
  if (n)
    return n.sort((e, t) => {
      const { encoding: i } = e,
        { encoding: r } = t;
      return i.maxBitrate > r.maxBitrate
        ? 1
        : i.maxBitrate < r.maxBitrate
        ? -1
        : i.maxBitrate === r.maxBitrate && i.maxFramerate && r.maxFramerate
        ? i.maxFramerate > r.maxFramerate
          ? 1
          : -1
        : 0;
    });
}
class Pc {
  constructor(e) {
    const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
    if (!t) throw new Error("invalid scalability mode");
    if (
      ((this.spatial = parseInt(t[1])),
      (this.temporal = parseInt(t[2])),
      t.length > 3)
    )
      switch (t[3]) {
        case "h":
        case "_KEY":
        case "_KEY_SHIFT":
          this.suffix = t[3];
      }
  }
  toString() {
    var e;
    return "L"
      .concat(this.spatial, "T")
      .concat(this.temporal)
      .concat((e = this.suffix) !== null && e !== void 0 ? e : "");
  }
}
function Tf(n) {
  return n.source === R.Source.ScreenShare ||
    (n.constraints.height && et(n.constraints.height) >= 1080)
    ? "maintain-resolution"
    : "balanced";
}
const Cf = 5e3;
class be extends zt {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    (this._sender = e),
      this.degradationPreference &&
        this.setDegradationPreference(this.degradationPreference);
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      r = arguments.length > 3 ? arguments[3] : void 0;
    super(e, R.Kind.Video, t, i, r),
      (this.simulcastCodecs = new Map()),
      (this.degradationPreference = "balanced"),
      (this.monitorSender = () =>
        m(this, void 0, void 0, function* () {
          if (!this.sender) {
            this._currentBitrate = 0;
            return;
          }
          let s;
          try {
            s = yield this.getSenderStats();
          } catch (a) {
            this.log.error(
              "could not get audio sender stats",
              Object.assign(Object.assign({}, this.logContext), { error: a })
            );
            return;
          }
          const o = new Map(s.map((a) => [a.rid, a]));
          if (this.prevStats) {
            let a = 0;
            o.forEach((c, d) => {
              var u;
              const l =
                (u = this.prevStats) === null || u === void 0
                  ? void 0
                  : u.get(d);
              a += pi(c, l);
            }),
              (this._currentBitrate = a);
          }
          this.prevStats = o;
        })),
      (this.senderLock = new Re());
  }
  get isSimulcast() {
    return !!(this.sender && this.sender.getParameters().encodings.length > 1);
  }
  startMonitor(e) {
    var t;
    if (((this.signalClient = e), !_e())) return;
    const i =
      (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
    i && (this.encodings = i.encodings),
      !this.monitorInterval &&
        (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, Fr));
  }
  stop() {
    this._mediaStreamTrack.getConstraints(),
      this.simulcastCodecs.forEach((e) => {
        e.mediaStreamTrack.stop();
      }),
      super.stop();
  }
  pauseUpstream() {
    const e = Object.create(null, {
      pauseUpstream: { get: () => super.pauseUpstream },
    });
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o;
      yield e.pauseUpstream.call(this);
      try {
        for (
          var a = !0, c = Nt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        )
          (s = d.value),
            (a = !1),
            yield (o = s.sender) === null || o === void 0
              ? void 0
              : o.replaceTrack(null);
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  resumeUpstream() {
    const e = Object.create(null, {
      resumeUpstream: { get: () => super.resumeUpstream },
    });
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o;
      yield e.resumeUpstream.call(this);
      try {
        for (
          var a = !0, c = Nt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        ) {
          (s = d.value), (a = !1);
          const u = s;
          yield (o = u.sender) === null || o === void 0
            ? void 0
            : o.replaceTrack(u.mediaStreamTrack);
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.log.debug("Track already muted", this.logContext), this)
          : (this.source === R.Source.Camera &&
              !this.isUserProvided &&
              (this.log.debug("stopping camera track", this.logContext),
              this._mediaStreamTrack.stop()),
            yield e.mute.call(this),
            this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.source === R.Source.Camera &&
              !this.isUserProvided &&
              (this.log.debug("reacquiring camera track", this.logContext),
              yield this.restartTrack()),
            yield e.unmute.call(this),
            this)
          : (this.log.debug("Track already unmuted", this.logContext), this);
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    super.setTrackMuted(e);
    for (const t of this.simulcastCodecs.values())
      t.mediaStreamTrack.enabled = !e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
        return [];
      const t = [],
        i = yield this.sender.getStats();
      return (
        i.forEach((r) => {
          var s;
          if (r.type === "outbound-rtp") {
            const o = {
                type: "video",
                streamId: r.id,
                frameHeight: r.frameHeight,
                frameWidth: r.frameWidth,
                framesPerSecond: r.framesPerSecond,
                framesSent: r.framesSent,
                firCount: r.firCount,
                pliCount: r.pliCount,
                nackCount: r.nackCount,
                packetsSent: r.packetsSent,
                bytesSent: r.bytesSent,
                qualityLimitationReason: r.qualityLimitationReason,
                qualityLimitationDurations: r.qualityLimitationDurations,
                qualityLimitationResolutionChanges:
                  r.qualityLimitationResolutionChanges,
                rid: (s = r.rid) !== null && s !== void 0 ? s : r.id,
                retransmittedPacketsSent: r.retransmittedPacketsSent,
                targetBitrate: r.targetBitrate,
                timestamp: r.timestamp,
              },
              a = i.get(r.remoteId);
            a &&
              ((o.jitter = a.jitter),
              (o.packetsLost = a.packetsLost),
              (o.roundTripTime = a.roundTripTime)),
              t.push(o);
          }
        }),
        t.sort((r, s) => {
          var o, a;
          return (
            ((o = s.frameWidth) !== null && o !== void 0 ? o : 0) -
            ((a = r.frameWidth) !== null && a !== void 0 ? a : 0)
          );
        }),
        t
      );
    });
  }
  setPublishingQuality(e) {
    const t = [];
    for (let i = Me.LOW; i <= Me.HIGH; i += 1)
      t.push(new Ar({ quality: i, enabled: i <= e }));
    this.log.debug(
      "setting publishing quality. max quality ".concat(e),
      this.logContext
    ),
      this.setPublishingLayers(t);
  }
  setDeviceId(e) {
    return m(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e &&
        this._mediaStreamTrack.getSettings().deviceId === et(e)
        ? !0
        : ((this._constraints.deviceId = e),
          this.isMuted || (yield this.restartTrack()),
          this.isMuted ||
            et(e) === this._mediaStreamTrack.getSettings().deviceId);
    });
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r, s;
      let o;
      if (e) {
        const u = fi({ video: e });
        typeof u.video != "boolean" && (o = u.video);
      }
      yield this.restart(o);
      try {
        for (
          var a = !0, c = Nt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        ) {
          (s = d.value), (a = !1);
          const u = s;
          u.sender &&
            ((u.mediaStreamTrack = this.mediaStreamTrack.clone()),
            yield u.sender.replaceTrack(u.mediaStreamTrack));
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  setProcessor(e) {
    const t = Object.create(null, {
      setProcessor: { get: () => super.setProcessor },
    });
    return m(this, arguments, void 0, function (i) {
      var r = this;
      let s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var o, a, c, d, u, l;
        if (
          (yield t.setProcessor.call(r, i, s),
          !((u = r.processor) === null || u === void 0) && u.processedTrack)
        )
          try {
            for (
              var h = !0, f = Nt(r.simulcastCodecs.values()), g;
              (g = yield f.next()), (o = g.done), !o;
              h = !0
            )
              (d = g.value),
                (h = !1),
                yield (l = d.sender) === null || l === void 0
                  ? void 0
                  : l.replaceTrack(r.processor.processedTrack);
          } catch (p) {
            a = { error: p };
          } finally {
            try {
              !h && !o && (c = f.return) && (yield c.call(f));
            } finally {
              if (a) throw a.error;
            }
          }
      })();
    });
  }
  setDegradationPreference(e) {
    return m(this, void 0, void 0, function* () {
      if (((this.degradationPreference = e), this.sender))
        try {
          this.log.debug(
            "setting degradationPreference to ".concat(e),
            this.logContext
          );
          const t = this.sender.getParameters();
          (t.degradationPreference = e), this.sender.setParameters(t);
        } catch (t) {
          this.log.warn(
            "failed to set degradationPreference",
            Object.assign({ error: t }, this.logContext)
          );
        }
    });
  }
  addSimulcastTrack(e, t) {
    if (this.simulcastCodecs.has(e)) {
      this.log.error(
        "".concat(e, " already added, skipping adding simulcast codec"),
        this.logContext
      );
      return;
    }
    const i = {
      codec: e,
      mediaStreamTrack: this.mediaStreamTrack.clone(),
      sender: void 0,
      encodings: t,
    };
    return this.simulcastCodecs.set(e, i), i;
  }
  setSimulcastTrackSender(e, t) {
    const i = this.simulcastCodecs.get(e);
    i &&
      ((i.sender = t),
      setTimeout(() => {
        this.subscribedCodecs &&
          this.setPublishingCodecs(this.subscribedCodecs);
      }, Cf));
  }
  setPublishingCodecs(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o, a, c;
      if (
        (this.log.debug(
          "setting publishing codecs",
          Object.assign(Object.assign({}, this.logContext), {
            codecs: e,
            currentCodec: this.codec,
          })
        ),
        !this.codec && e.length > 0)
      )
        return yield this.setPublishingLayers(e[0].qualities), [];
      this.subscribedCodecs = e;
      const d = [];
      try {
        for (
          t = !0, i = Nt(e);
          (r = yield i.next()), (s = r.done), !s;
          t = !0
        ) {
          (c = r.value), (t = !1);
          const u = c;
          if (!this.codec || this.codec === u.codec)
            yield this.setPublishingLayers(u.qualities);
          else {
            const l = this.simulcastCodecs.get(u.codec);
            if (
              (this.log.debug(
                "try setPublishingCodec for ".concat(u.codec),
                Object.assign(Object.assign({}, this.logContext), {
                  simulcastCodecInfo: l,
                })
              ),
              !l || !l.sender)
            ) {
              for (const h of u.qualities)
                if (h.enabled) {
                  d.push(u.codec);
                  break;
                }
            } else
              l.encodings &&
                (this.log.debug(
                  "try setPublishingLayersForSender ".concat(u.codec),
                  this.logContext
                ),
                yield Zs(
                  l.sender,
                  l.encodings,
                  u.qualities,
                  this.senderLock,
                  this.log,
                  this.logContext
                ));
          }
        }
      } catch (u) {
        o = { error: u };
      } finally {
        try {
          !t && !s && (a = i.return) && (yield a.call(i));
        } finally {
          if (o) throw o.error;
        }
      }
      return d;
    });
  }
  setPublishingLayers(e) {
    return m(this, void 0, void 0, function* () {
      this.log.debug(
        "setting publishing layers",
        Object.assign(Object.assign({}, this.logContext), { qualities: e })
      ),
        !(!this.sender || !this.encodings) &&
          (yield Zs(
            this.sender,
            this.encodings,
            e,
            this.senderLock,
            this.log,
            this.logContext
          ));
    });
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        vc() &&
          this.isInBackground &&
          this.source === R.Source.Camera &&
          (this._mediaStreamTrack.enabled = !1);
    });
  }
}
function Zs(n, e, t, i, r, s) {
  return m(this, void 0, void 0, function* () {
    const o = yield i.lock();
    r.debug(
      "setPublishingLayersForSender",
      Object.assign(Object.assign({}, s), {
        sender: n,
        qualities: t,
        senderEncodings: e,
      })
    );
    try {
      const a = n.getParameters(),
        { encodings: c } = a;
      if (!c) return;
      if (c.length !== e.length) {
        r.warn(
          "cannot set publishing layers, encodings mismatch",
          Object.assign(Object.assign({}, s), {
            encodings: c,
            senderEncodings: e,
          })
        );
        return;
      }
      let d = !1;
      (!1 && c[0].scalabilityMode) ||
        c.forEach((l, h) => {
          var f;
          let g = (f = l.rid) !== null && f !== void 0 ? f : "";
          g === "" && (g = "q");
          const p = Ec(g),
            b = t.find((v) => v.quality === p);
          b &&
            l.active !== b.enabled &&
            ((d = !0),
            (l.active = b.enabled),
            r.debug(
              "setting layer "
                .concat(b.quality, " to ")
                .concat(l.active ? "enabled" : "disabled"),
              s
            ),
            Ht() &&
              (b.enabled
                ? ((l.scaleResolutionDownBy = e[h].scaleResolutionDownBy),
                  (l.maxBitrate = e[h].maxBitrate),
                  (l.maxFrameRate = e[h].maxFrameRate))
                : ((l.scaleResolutionDownBy = 4),
                  (l.maxBitrate = 10),
                  (l.maxFrameRate = 2))));
        }),
        d &&
          ((a.encodings = c),
          r.debug(
            "setting encodings",
            Object.assign(Object.assign({}, s), { encodings: a.encodings })
          ),
          yield n.setParameters(a));
    } finally {
      o();
    }
  });
}
function Ec(n) {
  switch (n) {
    case "f":
      return Me.HIGH;
    case "h":
      return Me.MEDIUM;
    case "q":
      return Me.LOW;
    default:
      return Me.HIGH;
  }
}
function eo(n, e, t, i) {
  if (!t)
    return [
      new bt({ quality: Me.HIGH, width: n, height: e, bitrate: 0, ssrc: 0 }),
    ];
  if (i) {
    const r = t[0].scalabilityMode,
      s = new Pc(r),
      o = [],
      a = s.suffix == "h" ? 1.5 : 2,
      c = s.suffix == "h" ? 2 : 3;
    for (let d = 0; d < s.spatial; d += 1)
      o.push(
        new bt({
          quality: Math.min(Me.HIGH, s.spatial - 1) - d,
          width: Math.ceil(n / Math.pow(a, d)),
          height: Math.ceil(e / Math.pow(a, d)),
          bitrate: t[0].maxBitrate
            ? Math.ceil(t[0].maxBitrate / Math.pow(c, d))
            : 0,
          ssrc: 0,
        })
      );
    return o;
  }
  return t.map((r) => {
    var s, o, a;
    const c = (s = r.scaleResolutionDownBy) !== null && s !== void 0 ? s : 1;
    let d = Ec((o = r.rid) !== null && o !== void 0 ? o : "");
    return new bt({
      quality: d,
      width: Math.ceil(n / c),
      height: Math.ceil(e / c),
      bitrate: (a = r.maxBitrate) !== null && a !== void 0 ? a : 0,
      ssrc: 0,
    });
  });
}
const to = "_lossy",
  no = "_reliable",
  wf = 2 * 1e3,
  Ai = "leave-reconnect";
var Le;
(function (n) {
  (n[(n.New = 0)] = "New"),
    (n[(n.Connected = 1)] = "Connected"),
    (n[(n.Disconnected = 2)] = "Disconnected"),
    (n[(n.Reconnecting = 3)] = "Reconnecting"),
    (n[(n.Closed = 4)] = "Closed");
})(Le || (Le = {}));
class Pf extends $e.EventEmitter {
  get isClosed() {
    return this._isClosed;
  }
  get pendingReconnect() {
    return !!this.reconnectTimeout;
  }
  constructor(e) {
    var t;
    super(),
      (this.options = e),
      (this.rtcConfig = {}),
      (this.peerConnectionTimeout = Ur.peerConnectionTimeout),
      (this.fullReconnectOnNext = !1),
      (this.subscriberPrimary = !1),
      (this.pcState = Le.New),
      (this._isClosed = !0),
      (this.pendingTrackResolvers = {}),
      (this.reconnectAttempts = 0),
      (this.reconnectStart = 0),
      (this.attemptingReconnect = !1),
      (this.joinAttempts = 0),
      (this.maxJoinAttempts = 1),
      (this.shouldFailNext = !1),
      (this.log = K),
      (this.handleDataChannel = (i) =>
        m(this, [i], void 0, function (r) {
          var s = this;
          let { channel: o } = r;
          return (function* () {
            if (o) {
              if (o.label === no) s.reliableDCSub = o;
              else if (o.label === to) s.lossyDCSub = o;
              else return;
              s.log.debug(
                "on data channel ".concat(o.id, ", ").concat(o.label),
                s.logContext
              ),
                (o.onmessage = s.handleDataMessage);
            }
          })();
        })),
      (this.handleDataMessage = (i) =>
        m(this, void 0, void 0, function* () {
          var r, s;
          const o = yield this.dataProcessLock.lock();
          try {
            let a;
            if (i.data instanceof ArrayBuffer) a = i.data;
            else if (i.data instanceof Blob) a = yield i.data.arrayBuffer();
            else {
              this.log.error(
                "unsupported data type",
                Object.assign(Object.assign({}, this.logContext), {
                  data: i.data,
                })
              );
              return;
            }
            const c = dt.fromBinary(new Uint8Array(a));
            ((r = c.value) === null || r === void 0 ? void 0 : r.case) ===
            "speaker"
              ? this.emit(N.ActiveSpeakersUpdate, c.value.value.speakers)
              : (((s = c.value) === null || s === void 0 ? void 0 : s.case) ===
                  "user" && Rf(c, c.value.value),
                this.emit(N.DataPacketReceived, c));
          } finally {
            o();
          }
        })),
      (this.handleDataError = (i) => {
        const s = i.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
        if (i instanceof ErrorEvent && i.error) {
          const { error: o } = i.error;
          this.log.error(
            "DataChannel error on ".concat(s, ": ").concat(i.message),
            Object.assign(Object.assign({}, this.logContext), { error: o })
          );
        } else
          this.log.error(
            "Unknown DataChannel error on ".concat(s),
            Object.assign(Object.assign({}, this.logContext), { event: i })
          );
      }),
      (this.handleBufferedAmountLow = (i) => {
        const s = i.currentTarget.maxRetransmits === 0 ? ee.LOSSY : ee.RELIABLE;
        this.updateAndEmitDCBufferStatus(s);
      }),
      (this.handleDisconnect = (i, r) => {
        if (this._isClosed) return;
        this.log.warn("".concat(i, " disconnected"), this.logContext),
          this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
        const s = (c) => {
            this.log.warn(
              "could not recover connection after "
                .concat(this.reconnectAttempts, " attempts, ")
                .concat(c, "ms. giving up"),
              this.logContext
            ),
              this.emit(N.Disconnected),
              this.close();
          },
          o = Date.now() - this.reconnectStart;
        let a = this.getNextRetryDelay({
          elapsedMs: o,
          retryCount: this.reconnectAttempts,
        });
        if (a === null) {
          s(o);
          return;
        }
        i === Ai && (a = 0),
          this.log.debug("reconnecting in ".concat(a, "ms"), this.logContext),
          this.clearReconnectTimeout(),
          this.token &&
            this.regionUrlProvider &&
            this.regionUrlProvider.updateToken(this.token),
          (this.reconnectTimeout = ve.setTimeout(
            () =>
              this.attemptReconnect(r).finally(
                () => (this.reconnectTimeout = void 0)
              ),
            a
          ));
      }),
      (this.waitForRestarted = () =>
        new Promise((i, r) => {
          this.pcState === Le.Connected && i();
          const s = () => {
              this.off(N.Disconnected, o), i();
            },
            o = () => {
              this.off(N.Restarted, s), r();
            };
          this.once(N.Restarted, s), this.once(N.Disconnected, o);
        })),
      (this.updateAndEmitDCBufferStatus = (i) => {
        const r = this.isBufferStatusLow(i);
        typeof r < "u" &&
          r !== this.dcBufferStatus.get(i) &&
          (this.dcBufferStatus.set(i, r),
          this.emit(N.DCBufferStatusChanged, r, i));
      }),
      (this.isBufferStatusLow = (i) => {
        const r = this.dataChannelForKind(i);
        if (r) return r.bufferedAmount <= r.bufferedAmountLowThreshold;
      }),
      (this.handleBrowserOnLine = () => {
        this.client.currentState === te.RECONNECTING &&
          (this.clearReconnectTimeout(),
          this.attemptReconnect(Dt.RR_SIGNAL_DISCONNECTED));
      }),
      (this.log = tt(
        (t = e.loggerName) !== null && t !== void 0 ? t : Be.Engine
      )),
      (this.loggerOptions = {
        loggerName: e.loggerName,
        loggerContextCb: () => this.logContext,
      }),
      (this.client = new Lr(void 0, this.loggerOptions)),
      (this.client.signalLatency = this.options.expSignalLatency),
      (this.reconnectPolicy = this.options.reconnectPolicy),
      this.registerOnLineListener(),
      (this.closingLock = new Re()),
      (this.dataProcessLock = new Re()),
      (this.dcBufferStatus = new Map([
        [ee.LOSSY, !0],
        [ee.RELIABLE, !0],
      ])),
      (this.client.onParticipantUpdate = (i) =>
        this.emit(N.ParticipantUpdate, i)),
      (this.client.onConnectionQuality = (i) =>
        this.emit(N.ConnectionQualityUpdate, i)),
      (this.client.onRoomUpdate = (i) => this.emit(N.RoomUpdate, i)),
      (this.client.onSubscriptionError = (i) =>
        this.emit(N.SubscriptionError, i)),
      (this.client.onSubscriptionPermissionUpdate = (i) =>
        this.emit(N.SubscriptionPermissionUpdate, i)),
      (this.client.onSpeakersChanged = (i) => this.emit(N.SpeakersChanged, i)),
      (this.client.onStreamStateUpdate = (i) =>
        this.emit(N.StreamStateChanged, i)),
      (this.client.onRequestResponse = (i) =>
        this.emit(N.SignalRequestResponse, i));
  }
  get logContext() {
    var e, t, i, r, s, o, a, c;
    return {
      room:
        (t =
          (e = this.latestJoinResponse) === null || e === void 0
            ? void 0
            : e.room) === null || t === void 0
          ? void 0
          : t.name,
      roomID:
        (r =
          (i = this.latestJoinResponse) === null || i === void 0
            ? void 0
            : i.room) === null || r === void 0
          ? void 0
          : r.sid,
      participant:
        (o =
          (s = this.latestJoinResponse) === null || s === void 0
            ? void 0
            : s.participant) === null || o === void 0
          ? void 0
          : o.identity,
      pID:
        (c =
          (a = this.latestJoinResponse) === null || a === void 0
            ? void 0
            : a.participant) === null || c === void 0
          ? void 0
          : c.sid,
    };
  }
  join(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      (this.url = e),
        (this.token = t),
        (this.signalOpts = i),
        (this.maxJoinAttempts = i.maxRetries);
      try {
        (this.joinAttempts += 1), this.setupSignalClientCallbacks();
        const s = yield this.client.join(e, t, i, r);
        return (
          (this._isClosed = !1),
          (this.latestJoinResponse = s),
          (this.subscriberPrimary = s.subscriberPrimary),
          this.pcManager || (yield this.configure(s)),
          (!this.subscriberPrimary || s.fastPublish) && this.negotiate(),
          (this.clientConfiguration = s.clientConfiguration),
          s
        );
      } catch (s) {
        if (
          s instanceof Z &&
          s.reason === ke.ServerUnreachable &&
          (this.log.warn(
            "Couldn't connect to server, attempt "
              .concat(this.joinAttempts, " of ")
              .concat(this.maxJoinAttempts),
            this.logContext
          ),
          this.joinAttempts < this.maxJoinAttempts)
        )
          return this.join(e, t, i, r);
        throw s;
      }
    });
  }
  close() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.closingLock.lock();
      if (this.isClosed) {
        e();
        return;
      }
      try {
        (this._isClosed = !0),
          (this.joinAttempts = 0),
          this.emit(N.Closing),
          this.removeAllListeners(),
          this.deregisterOnLineListener(),
          this.clearPendingReconnect(),
          yield this.cleanupPeerConnections(),
          yield this.cleanupClient();
      } finally {
        e();
      }
    });
  }
  cleanupPeerConnections() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.pcManager) === null || e === void 0 ? void 0 : e.close(),
        (this.pcManager = void 0);
      const t = (i) => {
        i &&
          (i.close(),
          (i.onbufferedamountlow = null),
          (i.onclose = null),
          (i.onclosing = null),
          (i.onerror = null),
          (i.onmessage = null),
          (i.onopen = null));
      };
      t(this.lossyDC),
        t(this.lossyDCSub),
        t(this.reliableDC),
        t(this.reliableDCSub),
        (this.lossyDC = void 0),
        (this.lossyDCSub = void 0),
        (this.reliableDC = void 0),
        (this.reliableDCSub = void 0);
    });
  }
  cleanupClient() {
    return m(this, void 0, void 0, function* () {
      yield this.client.close(), this.client.resetCallbacks();
    });
  }
  addTrack(e) {
    if (this.pendingTrackResolvers[e.cid])
      throw new He("a track with the same ID has already been published");
    return new Promise((t, i) => {
      const r = setTimeout(() => {
        delete this.pendingTrackResolvers[e.cid],
          i(
            new Z(
              "publication of local track timed out, no response from server"
            )
          );
      }, 1e4);
      (this.pendingTrackResolvers[e.cid] = {
        resolve: (s) => {
          clearTimeout(r), t(s);
        },
        reject: () => {
          clearTimeout(r),
            i(new Error("Cancelled publication by calling unpublish"));
        },
      }),
        this.client.sendAddTrack(e);
    });
  }
  removeTrack(e) {
    if (e.track && this.pendingTrackResolvers[e.track.id]) {
      const { reject: t } = this.pendingTrackResolvers[e.track.id];
      t && t(), delete this.pendingTrackResolvers[e.track.id];
    }
    try {
      return this.pcManager.removeTrack(e), !0;
    } catch (t) {
      this.log.warn(
        "failed to remove track",
        Object.assign(Object.assign({}, this.logContext), { error: t })
      );
    }
    return !1;
  }
  updateMuteStatus(e, t) {
    this.client.sendMuteTrack(e, t);
  }
  get dataSubscriberReadyState() {
    var e;
    return (e = this.reliableDCSub) === null || e === void 0
      ? void 0
      : e.readyState;
  }
  getConnectedServerAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.pcManager) === null || e === void 0
        ? void 0
        : e.getConnectedAddress();
    });
  }
  setRegionUrlProvider(e) {
    this.regionUrlProvider = e;
  }
  configure(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      if (this.pcManager && this.pcManager.currentState !== ae.NEW) return;
      this.participantSid =
        (t = e.participant) === null || t === void 0 ? void 0 : t.sid;
      const r = this.makeRTCConfiguration(e);
      (this.pcManager = new hf(r, e.subscriberPrimary, this.loggerOptions)),
        this.emit(
          N.TransportsCreated,
          this.pcManager.publisher,
          this.pcManager.subscriber
        ),
        (this.pcManager.onIceCandidate = (s, o) => {
          this.client.sendIceCandidate(s, o);
        }),
        (this.pcManager.onPublisherOffer = (s) => {
          this.client.sendOffer(s);
        }),
        (this.pcManager.onDataChannel = this.handleDataChannel),
        (this.pcManager.onStateChange = (s, o, a) =>
          m(this, void 0, void 0, function* () {
            if (
              (this.log.debug(
                "primary PC state changed ".concat(s),
                this.logContext
              ),
              ["closed", "disconnected", "failed"].includes(o) &&
                (this.publisherConnectionPromise = void 0),
              s === ae.CONNECTED)
            ) {
              const u = this.pcState === Le.New;
              (this.pcState = Le.Connected), u && this.emit(N.Connected, e);
            } else s === ae.FAILED && this.pcState === Le.Connected && ((this.pcState = Le.Disconnected), this.handleDisconnect("peerconnection failed", a === "failed" ? Dt.RR_SUBSCRIBER_FAILED : Dt.RR_PUBLISHER_FAILED));
            const c =
                this.client.isDisconnected ||
                this.client.currentState === te.RECONNECTING,
              d = [ae.FAILED, ae.CLOSING, ae.CLOSED].includes(s);
            c && d && !this._isClosed && this.emit(N.Offline);
          })),
        (this.pcManager.onTrack = (s) => {
          this.emit(N.MediaTrackAdded, s.track, s.streams[0], s.receiver);
        }),
        Ef((i = e.serverInfo) === null || i === void 0 ? void 0 : i.protocol) ||
          this.createDataChannels();
    });
  }
  setupSignalClientCallbacks() {
    (this.client.onAnswer = (e) =>
      m(this, void 0, void 0, function* () {
        this.pcManager &&
          (this.log.debug(
            "received server answer",
            Object.assign(Object.assign({}, this.logContext), {
              RTCSdpType: e.type,
            })
          ),
          yield this.pcManager.setPublisherAnswer(e));
      })),
      (this.client.onTrickle = (e, t) => {
        this.pcManager &&
          (this.log.trace(
            "got ICE candidate from peer",
            Object.assign(Object.assign({}, this.logContext), {
              candidate: e,
              target: t,
            })
          ),
          this.pcManager.addIceCandidate(e, t));
      }),
      (this.client.onOffer = (e) =>
        m(this, void 0, void 0, function* () {
          if (!this.pcManager) return;
          const t = yield this.pcManager.createSubscriberAnswerFromOffer(e);
          this.client.sendAnswer(t);
        })),
      (this.client.onLocalTrackPublished = (e) => {
        var t;
        if (
          (this.log.debug(
            "received trackPublishedResponse",
            Object.assign(Object.assign({}, this.logContext), {
              cid: e.cid,
              track: (t = e.track) === null || t === void 0 ? void 0 : t.sid,
            })
          ),
          !this.pendingTrackResolvers[e.cid])
        ) {
          this.log.error(
            "missing track resolver for ".concat(e.cid),
            Object.assign(Object.assign({}, this.logContext), { cid: e.cid })
          );
          return;
        }
        const { resolve: i } = this.pendingTrackResolvers[e.cid];
        delete this.pendingTrackResolvers[e.cid], i(e.track);
      }),
      (this.client.onLocalTrackUnpublished = (e) => {
        this.emit(N.LocalTrackUnpublished, e);
      }),
      (this.client.onLocalTrackSubscribed = (e) => {
        this.emit(N.LocalTrackSubscribed, e);
      }),
      (this.client.onTokenRefresh = (e) => {
        this.token = e;
      }),
      (this.client.onRemoteMuteChanged = (e, t) => {
        this.emit(N.RemoteMute, e, t);
      }),
      (this.client.onSubscribedQualityUpdate = (e) => {
        this.emit(N.SubscribedQualityUpdate, e);
      }),
      (this.client.onClose = () => {
        this.handleDisconnect("signal", Dt.RR_SIGNAL_DISCONNECTED);
      }),
      (this.client.onLeave = (e) => {
        switch (
          (this.log.debug(
            "client leave request",
            Object.assign(Object.assign({}, this.logContext), {
              reason: e?.reason,
            })
          ),
          e.regions &&
            this.regionUrlProvider &&
            (this.log.debug("updating regions", this.logContext),
            this.regionUrlProvider.setServerReportedRegions(e.regions)),
          e.action)
        ) {
          case Bt.DISCONNECT:
            this.emit(N.Disconnected, e?.reason), this.close();
            break;
          case Bt.RECONNECT:
            (this.fullReconnectOnNext = !0), this.handleDisconnect(Ai);
            break;
          case Bt.RESUME:
            this.handleDisconnect(Ai);
        }
      });
  }
  makeRTCConfiguration(e) {
    var t;
    const i = Object.assign({}, this.rtcConfig);
    if (
      (!((t = this.signalOpts) === null || t === void 0) &&
        t.e2eeEnabled &&
        (this.log.debug(
          "E2EE - setting up transports with insertable streams",
          this.logContext
        ),
        (i.encodedInsertableStreams = !0)),
      e.iceServers && !i.iceServers)
    ) {
      const r = [];
      e.iceServers.forEach((s) => {
        const o = { urls: s.urls };
        s.username && (o.username = s.username),
          s.credential && (o.credential = s.credential),
          r.push(o);
      }),
        (i.iceServers = r);
    }
    return (
      e.clientConfiguration &&
        e.clientConfiguration.forceRelay === gn.ENABLED &&
        (i.iceTransportPolicy = "relay"),
      (i.sdpSemantics = "unified-plan"),
      (i.continualGatheringPolicy = "gather_continually"),
      i
    );
  }
  createDataChannels() {
    this.pcManager &&
      (this.lossyDC &&
        ((this.lossyDC.onmessage = null), (this.lossyDC.onerror = null)),
      this.reliableDC &&
        ((this.reliableDC.onmessage = null), (this.reliableDC.onerror = null)),
      (this.lossyDC = this.pcManager.createPublisherDataChannel(to, {
        ordered: !0,
        maxRetransmits: 0,
      })),
      (this.reliableDC = this.pcManager.createPublisherDataChannel(no, {
        ordered: !0,
      })),
      (this.lossyDC.onmessage = this.handleDataMessage),
      (this.reliableDC.onmessage = this.handleDataMessage),
      (this.lossyDC.onerror = this.handleDataError),
      (this.reliableDC.onerror = this.handleDataError),
      (this.lossyDC.bufferedAmountLowThreshold = 65535),
      (this.reliableDC.bufferedAmountLowThreshold = 65535),
      (this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow),
      (this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow));
  }
  createSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (hr()) return yield this.createTransceiverRTCRtpSender(e, t, i);
      if (fr())
        return (
          this.log.warn("using add-track fallback", this.logContext),
          yield this.createRTCRtpSender(e.mediaStreamTrack)
        );
      throw new he("Required webRTC APIs not supported on this device");
    });
  }
  createSimulcastSender(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (hr()) return this.createSimulcastTransceiverSender(e, t, i, r);
      if (fr())
        return (
          this.log.debug("using add-track fallback", this.logContext),
          this.createRTCRtpSender(e.mediaStreamTrack)
        );
      throw new he("Cannot stream on this device");
    });
  }
  createTransceiverRTCRtpSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new he("publisher is closed");
      const r = [];
      e.mediaStream && r.push(e.mediaStream),
        e instanceof be && (e.codec = t.videoCodec);
      const s = { direction: "sendonly", streams: r };
      return (
        i && (s.sendEncodings = i),
        (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, s))
          .sender
      );
    });
  }
  createSimulcastTransceiverSender(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new he("publisher is closed");
      const s = { direction: "sendonly" };
      r && (s.sendEncodings = r);
      const o = yield this.pcManager.addPublisherTransceiver(
        t.mediaStreamTrack,
        s
      );
      if (i.videoCodec)
        return e.setSimulcastTrackSender(i.videoCodec, o.sender), o.sender;
    });
  }
  createRTCRtpSender(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new he("publisher is closed");
      return this.pcManager.addPublisherTrack(e);
    });
  }
  attemptReconnect(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r;
      if (!this._isClosed) {
        if (this.attemptingReconnect) {
          K.warn(
            "already attempting reconnect, returning early",
            this.logContext
          );
          return;
        }
        (((t = this.clientConfiguration) === null || t === void 0
          ? void 0
          : t.resumeConnection) === gn.DISABLED ||
          ((r =
            (i = this.pcManager) === null || i === void 0
              ? void 0
              : i.currentState) !== null && r !== void 0
            ? r
            : ae.NEW) === ae.NEW) &&
          (this.fullReconnectOnNext = !0);
        try {
          (this.attemptingReconnect = !0),
            this.fullReconnectOnNext
              ? yield this.restartConnection()
              : yield this.resumeConnection(e),
            this.clearPendingReconnect(),
            (this.fullReconnectOnNext = !1);
        } catch (s) {
          this.reconnectAttempts += 1;
          let o = !0;
          s instanceof he
            ? (this.log.debug(
                "received unrecoverable error",
                Object.assign(Object.assign({}, this.logContext), { error: s })
              ),
              (o = !1))
            : s instanceof Mt || (this.fullReconnectOnNext = !0),
            o
              ? this.handleDisconnect("reconnect", Dt.RR_UNKNOWN)
              : (this.log.info(
                  "could not recover connection after "
                    .concat(this.reconnectAttempts, " attempts, ")
                    .concat(Date.now() - this.reconnectStart, "ms. giving up"),
                  this.logContext
                ),
                this.emit(N.Disconnected),
                yield this.close());
        } finally {
          this.attemptingReconnect = !1;
        }
      }
    });
  }
  getNextRetryDelay(e) {
    try {
      return this.reconnectPolicy.nextRetryDelayInMs(e);
    } catch (t) {
      this.log.warn(
        "encountered error in reconnect policy",
        Object.assign(Object.assign({}, this.logContext), { error: t })
      );
    }
    return null;
  }
  restartConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r;
      try {
        if (!this.url || !this.token)
          throw new he("could not reconnect, url or token not saved");
        this.log.info(
          "reconnecting, attempt: ".concat(this.reconnectAttempts),
          this.logContext
        ),
          this.emit(N.Restarting),
          this.client.isDisconnected || (yield this.client.sendLeave()),
          yield this.cleanupPeerConnections(),
          yield this.cleanupClient();
        let s;
        try {
          if (!this.signalOpts)
            throw (
              (this.log.warn(
                "attempted connection restart, without signal options present",
                this.logContext
              ),
              new Mt())
            );
          s = yield this.join(e ?? this.url, this.token, this.signalOpts);
        } catch (o) {
          throw o instanceof Z && o.reason === ke.NotAllowed
            ? new he("could not reconnect, token might be expired")
            : new Mt();
        }
        if (this.shouldFailNext)
          throw ((this.shouldFailNext = !1), new Error("simulated failure"));
        if (
          (this.client.setReconnected(),
          this.emit(N.SignalRestarted, s),
          yield this.waitForPCReconnected(),
          this.client.currentState !== te.CONNECTED)
        )
          throw new Mt("Signal connection got severed during reconnect");
        (t = this.regionUrlProvider) === null ||
          t === void 0 ||
          t.resetAttempts(),
          this.emit(N.Restarted);
      } catch (s) {
        const o = yield (i = this.regionUrlProvider) === null || i === void 0
          ? void 0
          : i.getNextBestRegionUrl();
        if (o) {
          yield this.restartConnection(o);
          return;
        } else throw ((r = this.regionUrlProvider) === null || r === void 0 || r.resetAttempts(), s);
      }
    });
  }
  resumeConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      if (!this.url || !this.token)
        throw new he("could not reconnect, url or token not saved");
      if (!this.pcManager)
        throw new he("publisher and subscriber connections unset");
      this.log.info(
        "resuming signal connection, attempt ".concat(this.reconnectAttempts),
        this.logContext
      ),
        this.emit(N.Resuming);
      let i;
      try {
        this.setupSignalClientCallbacks(),
          (i = yield this.client.reconnect(
            this.url,
            this.token,
            this.participantSid,
            e
          ));
      } catch (r) {
        let s = "";
        throw (
          (r instanceof Error &&
            ((s = r.message),
            this.log.error(
              r.message,
              Object.assign(Object.assign({}, this.logContext), { error: r })
            )),
          r instanceof Z && r.reason === ke.NotAllowed
            ? new he("could not reconnect, token might be expired")
            : r instanceof Z && r.reason === ke.LeaveRequest
            ? r
            : new Mt(s))
        );
      }
      if ((this.emit(N.SignalResumed), i)) {
        const r = this.makeRTCConfiguration(i);
        this.pcManager.updateConfiguration(r);
      } else this.log.warn("Did not receive reconnect response", this.logContext);
      if (this.shouldFailNext)
        throw ((this.shouldFailNext = !1), new Error("simulated failure"));
      if (
        (yield this.pcManager.triggerIceRestart(),
        yield this.waitForPCReconnected(),
        this.client.currentState !== te.CONNECTED)
      )
        throw new Mt("Signal connection got severed during reconnect");
      this.client.setReconnected(),
        ((t = this.reliableDC) === null || t === void 0
          ? void 0
          : t.readyState) === "open" &&
          this.reliableDC.id === null &&
          this.createDataChannels(),
        this.emit(N.Resumed);
    });
  }
  waitForPCInitialConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new he("PC manager is closed");
      yield this.pcManager.ensurePCTransportConnection(t, e);
    });
  }
  waitForPCReconnected() {
    return m(this, void 0, void 0, function* () {
      (this.pcState = Le.Reconnecting),
        this.log.debug(
          "waiting for peer connection to reconnect",
          this.logContext
        );
      try {
        if ((yield Je(wf), !this.pcManager))
          throw new he("PC manager is closed");
        yield this.pcManager.ensurePCTransportConnection(
          void 0,
          this.peerConnectionTimeout
        ),
          (this.pcState = Le.Connected);
      } catch (e) {
        throw (
          ((this.pcState = Le.Disconnected),
          new Z("could not establish PC connection, ".concat(e.message)))
        );
      }
    });
  }
  sendDataPacket(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = e.toBinary();
      yield this.ensurePublisherConnected(t);
      const r = this.dataChannelForKind(t);
      r && r.send(i), this.updateAndEmitDCBufferStatus(t);
    });
  }
  ensureDataTransportConnected(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : this.subscriberPrimary;
      return (function* () {
        var s;
        if (!i.pcManager) throw new he("PC manager is closed");
        const o = r ? i.pcManager.subscriber : i.pcManager.publisher,
          a = r ? "Subscriber" : "Publisher";
        if (!o) throw new Z("".concat(a, " connection not set"));
        let c = !1;
        !r && !i.dataChannelForKind(t, r) && (i.createDataChannels(), (c = !0)),
          !c &&
            !r &&
            !i.pcManager.publisher.isICEConnected &&
            i.pcManager.publisher.getICEConnectionState() !== "checking" &&
            (c = !0),
          c && i.negotiate();
        const d = i.dataChannelForKind(t, r);
        if (d?.readyState === "open") return;
        const u = new Date().getTime() + i.peerConnectionTimeout;
        for (; new Date().getTime() < u; ) {
          if (
            o.isICEConnected &&
            ((s = i.dataChannelForKind(t, r)) === null || s === void 0
              ? void 0
              : s.readyState) === "open"
          )
            return;
          yield Je(50);
        }
        throw new Z(
          "could not establish "
            .concat(a, " connection, state: ")
            .concat(o.getICEConnectionState())
        );
      })();
    });
  }
  ensurePublisherConnected(e) {
    return m(this, void 0, void 0, function* () {
      this.publisherConnectionPromise ||
        (this.publisherConnectionPromise = this.ensureDataTransportConnected(
          e,
          !1
        )),
        yield this.publisherConnectionPromise;
    });
  }
  verifyTransport() {
    return !(
      !this.pcManager ||
      this.pcManager.currentState !== ae.CONNECTED ||
      !this.client.ws ||
      this.client.ws.readyState === WebSocket.CLOSED
    );
  }
  negotiate() {
    return m(this, void 0, void 0, function* () {
      return new Promise((e, t) =>
        m(this, void 0, void 0, function* () {
          if (!this.pcManager) {
            t(new cr("PC manager is closed"));
            return;
          }
          this.pcManager.requirePublisher(),
            this.pcManager.publisher.getTransceivers().length == 0 &&
              !this.lossyDC &&
              !this.reliableDC &&
              this.createDataChannels();
          const i = new AbortController(),
            r = () => {
              i.abort(),
                this.log.debug(
                  "engine disconnected while negotiation was ongoing",
                  this.logContext
                ),
                e();
            };
          this.isClosed && t("cannot negotiate on closed engine"),
            this.on(N.Closing, r),
            this.pcManager.publisher.once(Wt.RTPVideoPayloadTypes, (s) => {
              const o = new Map();
              s.forEach((a) => {
                const c = a.codec.toLowerCase();
                Hh(c) && o.set(a.payload, c);
              }),
                this.emit(N.RTPVideoMapUpdate, o);
            });
          try {
            yield this.pcManager.negotiate(i), e();
          } catch (s) {
            s instanceof cr && (this.fullReconnectOnNext = !0),
              this.handleDisconnect("negotiation", Dt.RR_UNKNOWN),
              t(s);
          } finally {
            this.off(N.Closing, r);
          }
        })
      );
    });
  }
  dataChannelForKind(e, t) {
    if (t) {
      if (e === ee.LOSSY) return this.lossyDCSub;
      if (e === ee.RELIABLE) return this.reliableDCSub;
    } else {
      if (e === ee.LOSSY) return this.lossyDC;
      if (e === ee.RELIABLE) return this.reliableDC;
    }
  }
  sendSyncState(e, t) {
    var i, r;
    if (!this.pcManager) {
      this.log.warn(
        "sync state cannot be sent without peer connection setup",
        this.logContext
      );
      return;
    }
    const s = this.pcManager.subscriber.getLocalDescription(),
      o = this.pcManager.subscriber.getRemoteDescription(),
      a =
        (r =
          (i = this.signalOpts) === null || i === void 0
            ? void 0
            : i.autoSubscribe) !== null && r !== void 0
          ? r
          : !0,
      c = new Array(),
      d = new Array();
    e.forEach((u) => {
      u.isDesired !== a && c.push(u.trackSid),
        u.isEnabled || d.push(u.trackSid);
    }),
      this.client.sendSyncState(
        new Ma({
          answer: s ? ei({ sdp: s.sdp, type: s.type }) : void 0,
          offer: o ? ei({ sdp: o.sdp, type: o.type }) : void 0,
          subscription: new ui({
            trackSids: c,
            subscribe: !a,
            participantTracks: [],
          }),
          publishTracks: Oh(t),
          dataChannels: this.dataChannelsInfo(),
          trackSidsDisabled: d,
        })
      );
  }
  failNext() {
    this.shouldFailNext = !0;
  }
  dataChannelsInfo() {
    const e = [],
      t = (i, r) => {
        i?.id !== void 0 &&
          i.id !== null &&
          e.push(new Oa({ label: i.label, id: i.id, target: r }));
      };
    return (
      t(this.dataChannelForKind(ee.LOSSY), je.PUBLISHER),
      t(this.dataChannelForKind(ee.RELIABLE), je.PUBLISHER),
      t(this.dataChannelForKind(ee.LOSSY, !0), je.SUBSCRIBER),
      t(this.dataChannelForKind(ee.RELIABLE, !0), je.SUBSCRIBER),
      e
    );
  }
  clearReconnectTimeout() {
    this.reconnectTimeout && ve.clearTimeout(this.reconnectTimeout);
  }
  clearPendingReconnect() {
    this.clearReconnectTimeout(), (this.reconnectAttempts = 0);
  }
  registerOnLineListener() {
    _e() && window.addEventListener("online", this.handleBrowserOnLine);
  }
  deregisterOnLineListener() {
    _e() && window.removeEventListener("online", this.handleBrowserOnLine);
  }
}
class Mt extends Error {}
function Ef(n) {
  return n !== void 0 && n > 13;
}
function Rf(n, e) {
  const t = n.participantIdentity
    ? n.participantIdentity
    : e.participantIdentity;
  (n.participantIdentity = t), (e.participantIdentity = t);
  const i =
    n.destinationIdentities.length !== 0
      ? n.destinationIdentities
      : e.destinationIdentities;
  (n.destinationIdentities = i), (e.destinationIdentities = i);
}
class io {
  constructor(e, t) {
    (this.lastUpdateAt = 0),
      (this.settingsCacheTime = 3e3),
      (this.attemptedRegions = []),
      (this.serverUrl = new URL(e)),
      (this.token = t);
  }
  updateToken(e) {
    this.token = e;
  }
  isCloud() {
    return mr(this.serverUrl);
  }
  getServerUrl() {
    return this.serverUrl;
  }
  getNextBestRegionUrl(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.isCloud())
        throw Error(
          "region availability is only supported for LiveKit Cloud domains"
        );
      (!this.regionSettings ||
        Date.now() - this.lastUpdateAt > this.settingsCacheTime) &&
        (this.regionSettings = yield this.fetchRegionSettings(e));
      const t = this.regionSettings.regions.filter(
        (i) => !this.attemptedRegions.find((r) => r.url === i.url)
      );
      if (t.length > 0) {
        const i = t[0];
        return (
          this.attemptedRegions.push(i),
          K.debug("next region: ".concat(i.region)),
          i.url
        );
      } else return null;
    });
  }
  resetAttempts() {
    this.attemptedRegions = [];
  }
  fetchRegionSettings(e) {
    return m(this, void 0, void 0, function* () {
      const t = yield fetch("".concat(_f(this.serverUrl), "/regions"), {
        headers: { authorization: "Bearer ".concat(this.token) },
        signal: e,
      });
      if (t.ok) {
        const i = yield t.json();
        return (this.lastUpdateAt = Date.now()), i;
      } else throw new Z("Could not fetch region settings: ".concat(t.statusText), t.status === 401 ? ke.NotAllowed : void 0, t.status);
    });
  }
  setServerReportedRegions(e) {
    (this.regionSettings = e), (this.lastUpdateAt = Date.now());
  }
}
function _f(n) {
  return ""
    .concat(n.protocol.replace("ws", "http"), "//")
    .concat(n.host, "/settings");
}
class oe extends Error {
  constructor(e, t, i) {
    super(t),
      (this.code = e),
      (this.message = so(t, oe.MAX_MESSAGE_BYTES)),
      (this.data = i ? so(i, oe.MAX_DATA_BYTES) : void 0);
  }
  static fromProto(e) {
    return new oe(e.code, e.message, e.data);
  }
  toProto() {
    return new ka({ code: this.code, message: this.message, data: this.data });
  }
  static builtIn(e, t) {
    return new oe(oe.ErrorCode[e], oe.ErrorMessage[e], t);
  }
}
oe.MAX_MESSAGE_BYTES = 256;
oe.MAX_DATA_BYTES = 15360;
oe.ErrorCode = {
  APPLICATION_ERROR: 1500,
  CONNECTION_TIMEOUT: 1501,
  RESPONSE_TIMEOUT: 1502,
  RECIPIENT_DISCONNECTED: 1503,
  RESPONSE_PAYLOAD_TOO_LARGE: 1504,
  SEND_FAILED: 1505,
  UNSUPPORTED_METHOD: 1400,
  RECIPIENT_NOT_FOUND: 1401,
  REQUEST_PAYLOAD_TOO_LARGE: 1402,
  UNSUPPORTED_SERVER: 1403,
  UNSUPPORTED_VERSION: 1404,
};
oe.ErrorMessage = {
  APPLICATION_ERROR: "Application error in method handler",
  CONNECTION_TIMEOUT: "Connection timeout",
  RESPONSE_TIMEOUT: "Response timeout",
  RECIPIENT_DISCONNECTED: "Recipient disconnected",
  RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
  SEND_FAILED: "Failed to send",
  UNSUPPORTED_METHOD: "Method not supported at destination",
  RECIPIENT_NOT_FOUND: "Recipient not found",
  REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
  UNSUPPORTED_SERVER: "RPC not supported by server",
  UNSUPPORTED_VERSION: "Unsupported RPC version",
};
const ro = 15360;
function yr(n) {
  return new TextEncoder().encode(n).length;
}
function so(n, e) {
  if (yr(n) <= e) return n;
  let t = 0,
    i = n.length;
  const r = new TextEncoder();
  for (; t < i; ) {
    const s = Math.floor((t + i + 1) / 2);
    r.encode(n.slice(0, s)).length <= e ? (t = s) : (i = s - 1);
  }
  return n.slice(0, t);
}
class Rc extends R {
  constructor(e, t, i, r, s) {
    super(e, i, s), (this.sid = t), (this.receiver = r);
  }
  setMuted(e) {
    this.isMuted !== e &&
      ((this.isMuted = e),
      (this._mediaStreamTrack.enabled = !e),
      this.emit(e ? A.Muted : A.Unmuted, this));
  }
  setMediaStream(e) {
    this.mediaStream = e;
    const t = (i) => {
      i.track === this._mediaStreamTrack &&
        (e.removeEventListener("removetrack", t),
        this.receiver &&
          "playoutDelayHint" in this.receiver &&
          (this.receiver.playoutDelayHint = void 0),
        (this.receiver = void 0),
        (this._currentBitrate = 0),
        this.emit(A.Ended, this));
    };
    e.addEventListener("removetrack", t);
  }
  start() {
    this.startMonitor(), super.enable();
  }
  stop() {
    this.stopMonitor(), super.disable();
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.receiver) === null || e === void 0) && e.getStats
        ? yield this.receiver.getStats()
        : void 0;
    });
  }
  setPlayoutDelay(e) {
    this.receiver
      ? "playoutDelayHint" in this.receiver
        ? (this.receiver.playoutDelayHint = e)
        : this.log.warn("Playout delay not supported in this browser")
      : this.log.warn("Cannot set playout delay, track already ended");
  }
  getPlayoutDelay() {
    if (this.receiver) {
      if ("playoutDelayHint" in this.receiver)
        return this.receiver.playoutDelayHint;
      this.log.warn("Playout delay not supported in this browser");
    } else this.log.warn("Cannot get playout delay, track already ended");
    return 0;
  }
  startMonitor() {
    this.monitorInterval ||
      (this.monitorInterval = setInterval(() => this.monitorReceiver(), Fr)),
      Nh() && this.registerTimeSyncUpdate();
  }
  registerTimeSyncUpdate() {
    const e = () => {
      var t;
      this.timeSyncHandle = requestAnimationFrame(() => e());
      const i =
        (t = this.receiver) === null || t === void 0
          ? void 0
          : t.getSynchronizationSources()[0];
      if (i) {
        const { timestamp: r, rtpTimestamp: s } = i;
        s &&
          this.rtpTimestamp !== s &&
          (this.emit(A.TimeSyncUpdate, { timestamp: r, rtpTimestamp: s }),
          (this.rtpTimestamp = s));
      }
    };
    e();
  }
}
class fn extends Rc {
  constructor(e, t, i, r, s, o) {
    super(e, t, R.Kind.Audio, i, o),
      (this.monitorReceiver = () =>
        m(this, void 0, void 0, function* () {
          if (!this.receiver) {
            this._currentBitrate = 0;
            return;
          }
          const a = yield this.getReceiverStats();
          a &&
            this.prevStats &&
            this.receiver &&
            (this._currentBitrate = pi(a, this.prevStats)),
            (this.prevStats = a);
        })),
      (this.audioContext = r),
      (this.webAudioPluginNodes = []),
      s && (this.sinkId = s.deviceId);
  }
  setVolume(e) {
    var t;
    for (const i of this.attachedElements)
      this.audioContext
        ? (t = this.gainNode) === null ||
          t === void 0 ||
          t.gain.setTargetAtTime(e, 0, 0.1)
        : (i.volume = e);
    it() && this._mediaStreamTrack._setVolume(e), (this.elementVolume = e);
  }
  getVolume() {
    if (this.elementVolume) return this.elementVolume;
    if (it()) return 1;
    let e = 0;
    return (
      this.attachedElements.forEach((t) => {
        t.volume > e && (e = t.volume);
      }),
      e
    );
  }
  setSinkId(e) {
    return m(this, void 0, void 0, function* () {
      (this.sinkId = e),
        yield Promise.all(
          this.attachedElements.map((t) => {
            if (pr(t)) return t.setSinkId(e);
          })
        );
    });
  }
  attach(e) {
    const t = this.attachedElements.length === 0;
    return (
      e ? super.attach(e) : (e = super.attach()),
      this.sinkId && pr(e) && e.setSinkId(this.sinkId),
      this.audioContext &&
        t &&
        (this.log.debug("using audio context mapping", this.logContext),
        this.connectWebAudio(this.audioContext, e),
        (e.volume = 0),
        (e.muted = !0)),
      this.elementVolume && this.setVolume(this.elementVolume),
      e
    );
  }
  detach(e) {
    let t;
    return (
      e
        ? ((t = super.detach(e)),
          this.audioContext &&
            (this.attachedElements.length > 0
              ? this.connectWebAudio(
                  this.audioContext,
                  this.attachedElements[0]
                )
              : this.disconnectWebAudio()))
        : ((t = super.detach()), this.disconnectWebAudio()),
      t
    );
  }
  setAudioContext(e) {
    (this.audioContext = e),
      e && this.attachedElements.length > 0
        ? this.connectWebAudio(e, this.attachedElements[0])
        : e || this.disconnectWebAudio();
  }
  setWebAudioPlugins(e) {
    (this.webAudioPluginNodes = e),
      this.attachedElements.length > 0 &&
        this.audioContext &&
        this.connectWebAudio(this.audioContext, this.attachedElements[0]);
  }
  connectWebAudio(e, t) {
    this.disconnectWebAudio(),
      (this.sourceNode = e.createMediaStreamSource(t.srcObject));
    let i = this.sourceNode;
    this.webAudioPluginNodes.forEach((r) => {
      i.connect(r), (i = r);
    }),
      (this.gainNode = e.createGain()),
      i.connect(this.gainNode),
      this.gainNode.connect(e.destination),
      this.elementVolume &&
        this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1),
      e.state !== "running" &&
        e
          .resume()
          .then(() => {
            e.state !== "running" &&
              this.emit(
                A.AudioPlaybackFailed,
                new Error("Audio Context couldn't be started automatically")
              );
          })
          .catch((r) => {
            this.emit(A.AudioPlaybackFailed, r);
          });
  }
  disconnectWebAudio() {
    var e, t;
    (e = this.gainNode) === null || e === void 0 || e.disconnect(),
      (t = this.sourceNode) === null || t === void 0 || t.disconnect(),
      (this.gainNode = void 0),
      (this.sourceNode = void 0);
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t;
      return (
        e.forEach((i) => {
          i.type === "inbound-rtp" &&
            (t = {
              type: "audio",
              timestamp: i.timestamp,
              jitter: i.jitter,
              bytesReceived: i.bytesReceived,
              concealedSamples: i.concealedSamples,
              concealmentEvents: i.concealmentEvents,
              silentConcealedSamples: i.silentConcealedSamples,
              silentConcealmentEvents: i.silentConcealmentEvents,
              totalAudioEnergy: i.totalAudioEnergy,
              totalSamplesDuration: i.totalSamplesDuration,
            });
        }),
        t
      );
    });
  }
}
const Di = 100;
class pn extends Rc {
  constructor(e, t, i, r, s) {
    super(e, t, R.Kind.Video, i, s),
      (this.elementInfos = []),
      (this.monitorReceiver = () =>
        m(this, void 0, void 0, function* () {
          if (!this.receiver) {
            this._currentBitrate = 0;
            return;
          }
          const o = yield this.getReceiverStats();
          o &&
            this.prevStats &&
            this.receiver &&
            (this._currentBitrate = pi(o, this.prevStats)),
            (this.prevStats = o);
        })),
      (this.debouncedHandleResize = Or(() => {
        this.updateDimensions();
      }, Di)),
      (this.adaptiveStreamSettings = r);
  }
  get isAdaptiveStream() {
    return this.adaptiveStreamSettings !== void 0;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  setMuted(e) {
    super.setMuted(e),
      this.attachedElements.forEach((t) => {
        e ? qt(this._mediaStreamTrack, t) : Ft(this._mediaStreamTrack, t);
      });
  }
  attach(e) {
    if (
      (e ? super.attach(e) : (e = super.attach()),
      this.adaptiveStreamSettings &&
        this.elementInfos.find((t) => t.element === e) === void 0)
    ) {
      const t = new If(e);
      this.observeElementInfo(t);
    }
    return e;
  }
  observeElementInfo(e) {
    this.adaptiveStreamSettings &&
    this.elementInfos.find((t) => t === e) === void 0
      ? ((e.handleResize = () => {
          this.debouncedHandleResize();
        }),
        (e.handleVisibilityChanged = () => {
          this.updateVisibility();
        }),
        this.elementInfos.push(e),
        e.observe(),
        this.debouncedHandleResize(),
        this.updateVisibility())
      : this.log.warn(
          "visibility resize observer not triggered",
          this.logContext
        );
  }
  stopObservingElementInfo(e) {
    if (!this.isAdaptiveStream) {
      this.log.warn("stopObservingElementInfo ignored", this.logContext);
      return;
    }
    const t = this.elementInfos.filter((i) => i === e);
    for (const i of t) i.stopObserving();
    (this.elementInfos = this.elementInfos.filter((i) => i !== e)),
      this.updateVisibility(),
      this.debouncedHandleResize();
  }
  detach(e) {
    let t = [];
    if (e) return this.stopObservingElement(e), super.detach(e);
    t = super.detach();
    for (const i of t) this.stopObservingElement(i);
    return t;
  }
  getDecoderImplementation() {
    var e;
    return (e = this.prevStats) === null || e === void 0
      ? void 0
      : e.decoderImplementation;
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t,
        i = "",
        r = new Map();
      return (
        e.forEach((s) => {
          s.type === "inbound-rtp"
            ? ((i = s.codecId),
              (t = {
                type: "video",
                framesDecoded: s.framesDecoded,
                framesDropped: s.framesDropped,
                framesReceived: s.framesReceived,
                packetsReceived: s.packetsReceived,
                packetsLost: s.packetsLost,
                frameWidth: s.frameWidth,
                frameHeight: s.frameHeight,
                pliCount: s.pliCount,
                firCount: s.firCount,
                nackCount: s.nackCount,
                jitter: s.jitter,
                timestamp: s.timestamp,
                bytesReceived: s.bytesReceived,
                decoderImplementation: s.decoderImplementation,
              }))
            : s.type === "codec" && r.set(s.id, s);
        }),
        t && i !== "" && r.get(i) && (t.mimeType = r.get(i).mimeType),
        t
      );
    });
  }
  stopObservingElement(e) {
    const t = this.elementInfos.filter((i) => i.element === e);
    for (const i of t) this.stopObservingElementInfo(i);
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        this.isAdaptiveStream && this.updateVisibility();
    });
  }
  updateVisibility() {
    var e, t;
    const i = this.elementInfos.reduce(
        (a, c) => Math.max(a, c.visibilityChangedAt || 0),
        0
      ),
      r =
        !(
          (t =
            (e = this.adaptiveStreamSettings) === null || e === void 0
              ? void 0
              : e.pauseVideoInBackground) !== null && t !== void 0
        ) || t
          ? this.isInBackground
          : !1,
      s = this.elementInfos.some((a) => a.pictureInPicture),
      o = (this.elementInfos.some((a) => a.visible) && !r) || s;
    if (this.lastVisible !== o) {
      if (!o && Date.now() - i < Di) {
        ve.setTimeout(() => {
          this.updateVisibility();
        }, Di);
        return;
      }
      (this.lastVisible = o), this.emit(A.VisibilityChanged, o, this);
    }
  }
  updateDimensions() {
    var e, t;
    let i = 0,
      r = 0;
    const s = this.getPixelDensity();
    for (const o of this.elementInfos) {
      const a = o.width() * s,
        c = o.height() * s;
      a + c > i + r && ((i = a), (r = c));
    }
    (((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) ===
      i &&
      ((t = this.lastDimensions) === null || t === void 0
        ? void 0
        : t.height) === r) ||
      ((this.lastDimensions = { width: i, height: r }),
      this.emit(A.VideoDimensionsChanged, this.lastDimensions, this));
  }
  getPixelDensity() {
    var e;
    const t =
      (e = this.adaptiveStreamSettings) === null || e === void 0
        ? void 0
        : e.pixelDensity;
    return t === "screen" ? js() : t || (js() > 2 ? 2 : 1);
  }
}
class If {
  get visible() {
    return this.isPiP || this.isIntersecting;
  }
  get pictureInPicture() {
    return this.isPiP;
  }
  constructor(e, t) {
    (this.onVisibilityChanged = (i) => {
      var r;
      const { target: s, isIntersecting: o } = i;
      s === this.element &&
        ((this.isIntersecting = o),
        (this.visibilityChangedAt = Date.now()),
        (r = this.handleVisibilityChanged) === null ||
          r === void 0 ||
          r.call(this));
    }),
      (this.onEnterPiP = () => {
        var i;
        (this.isPiP = !0),
          (i = this.handleVisibilityChanged) === null ||
            i === void 0 ||
            i.call(this);
      }),
      (this.onLeavePiP = () => {
        var i;
        (this.isPiP = !1),
          (i = this.handleVisibilityChanged) === null ||
            i === void 0 ||
            i.call(this);
      }),
      (this.element = e),
      (this.isIntersecting = t ?? oo(e)),
      (this.isPiP = _e() && document.pictureInPictureElement === e),
      (this.visibilityChangedAt = 0);
  }
  width() {
    return this.element.clientWidth;
  }
  height() {
    return this.element.clientHeight;
  }
  observe() {
    (this.isIntersecting = oo(this.element)),
      (this.isPiP = document.pictureInPictureElement === this.element),
      (this.element.handleResize = () => {
        var e;
        (e = this.handleResize) === null || e === void 0 || e.call(this);
      }),
      (this.element.handleVisibilityChanged = this.onVisibilityChanged),
      Vs().observe(this.element),
      Bs().observe(this.element),
      this.element.addEventListener("enterpictureinpicture", this.onEnterPiP),
      this.element.addEventListener("leavepictureinpicture", this.onLeavePiP);
  }
  stopObserving() {
    var e, t;
    (e = Vs()) === null || e === void 0 || e.unobserve(this.element),
      (t = Bs()) === null || t === void 0 || t.unobserve(this.element),
      this.element.removeEventListener(
        "enterpictureinpicture",
        this.onEnterPiP
      ),
      this.element.removeEventListener(
        "leavepictureinpicture",
        this.onLeavePiP
      );
  }
}
function oo(n) {
  let e = n.offsetTop,
    t = n.offsetLeft;
  const i = n.offsetWidth,
    r = n.offsetHeight,
    { hidden: s } = n,
    { opacity: o, display: a } = getComputedStyle(n);
  for (; n.offsetParent; )
    (n = n.offsetParent), (e += n.offsetTop), (t += n.offsetLeft);
  return (
    e < window.pageYOffset + window.innerHeight &&
    t < window.pageXOffset + window.innerWidth &&
    e + r > window.pageYOffset &&
    t + i > window.pageXOffset &&
    !s &&
    (o !== "" ? parseFloat(o) > 0 : !0) &&
    a !== "none"
  );
}
class Xe extends $e.EventEmitter {
  constructor(e, t, i, r) {
    var s;
    super(),
      (this.metadataMuted = !1),
      (this.encryption = De.NONE),
      (this.log = K),
      (this.handleMuted = () => {
        this.emit(A.Muted);
      }),
      (this.handleUnmuted = () => {
        this.emit(A.Unmuted);
      }),
      (this.log = tt(
        (s = r?.loggerName) !== null && s !== void 0 ? s : Be.Publication
      )),
      (this.loggerContextCb = this.loggerContextCb),
      this.setMaxListeners(100),
      (this.kind = e),
      (this.trackSid = t),
      (this.trackName = i),
      (this.source = R.Source.Unknown);
  }
  setTrack(e) {
    this.track &&
      (this.track.off(A.Muted, this.handleMuted),
      this.track.off(A.Unmuted, this.handleUnmuted)),
      (this.track = e),
      e &&
        (e.on(A.Muted, this.handleMuted), e.on(A.Unmuted, this.handleUnmuted));
  }
  get logContext() {
    var e;
    return Object.assign(
      Object.assign(
        {},
        (e = this.loggerContextCb) === null || e === void 0
          ? void 0
          : e.call(this)
      ),
      Q(this)
    );
  }
  get isMuted() {
    return this.metadataMuted;
  }
  get isEnabled() {
    return !0;
  }
  get isSubscribed() {
    return this.track !== void 0;
  }
  get isEncrypted() {
    return this.encryption !== De.NONE;
  }
  get audioTrack() {
    if (this.track instanceof me || this.track instanceof fn) return this.track;
  }
  get videoTrack() {
    if (this.track instanceof be || this.track instanceof pn) return this.track;
  }
  updateInfo(e) {
    (this.trackSid = e.sid),
      (this.trackName = e.name),
      (this.source = R.sourceFromProto(e.source)),
      (this.mimeType = e.mimeType),
      this.kind === R.Kind.Video &&
        e.width > 0 &&
        ((this.dimensions = { width: e.width, height: e.height }),
        (this.simulcasted = e.simulcast)),
      (this.encryption = e.encryption),
      (this.trackInfo = e),
      this.log.debug(
        "update publication info",
        Object.assign(Object.assign({}, this.logContext), { info: e })
      );
  }
}
(function (n) {
  (function (e) {
    (e.Desired = "desired"),
      (e.Subscribed = "subscribed"),
      (e.Unsubscribed = "unsubscribed");
  })(n.SubscriptionStatus || (n.SubscriptionStatus = {})),
    (function (e) {
      (e.Allowed = "allowed"), (e.NotAllowed = "not_allowed");
    })(n.PermissionStatus || (n.PermissionStatus = {}));
})(Xe || (Xe = {}));
class ti extends Xe {
  get isUpstreamPaused() {
    var e;
    return (e = this.track) === null || e === void 0
      ? void 0
      : e.isUpstreamPaused;
  }
  constructor(e, t, i, r) {
    super(e, t.sid, t.name, r),
      (this.track = void 0),
      (this.handleTrackEnded = () => {
        this.emit(A.Ended);
      }),
      this.updateInfo(t),
      this.setTrack(i);
  }
  setTrack(e) {
    this.track && this.track.off(A.Ended, this.handleTrackEnded),
      super.setTrack(e),
      e && e.on(A.Ended, this.handleTrackEnded);
  }
  get isMuted() {
    return this.track ? this.track.isMuted : super.isMuted;
  }
  get audioTrack() {
    return super.audioTrack;
  }
  get videoTrack() {
    return super.videoTrack;
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.mute();
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.unmute();
    });
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0
        ? void 0
        : e.pauseUpstream();
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0
        ? void 0
        : e.resumeUpstream();
    });
  }
  getTrackFeatures() {
    var e;
    if (this.track instanceof me) {
      const t = this.track.mediaStreamTrack.getSettings(),
        i = new Set();
      return (
        t.autoGainControl && i.add(Ke.TF_AUTO_GAIN_CONTROL),
        t.echoCancellation && i.add(Ke.TF_ECHO_CANCELLATION),
        t.noiseSuppression && i.add(Ke.TF_NOISE_SUPPRESSION),
        t.channelCount && t.channelCount > 1 && i.add(Ke.TF_STEREO),
        (!((e = this.options) === null || e === void 0) && e.dtx) ||
          i.add(Ke.TF_NO_DTX),
        this.track.enhancedNoiseCancellation &&
          i.add(Ke.TF_ENHANCED_NOISE_CANCELLATION),
        Array.from(i.values())
      );
    } else return [];
  }
}
function _c(n) {
  let e, t;
  return (
    typeof n.audio == "object" && n.audio.processor && (e = n.audio.processor),
    typeof n.video == "object" && n.video.processor && (t = n.video.processor),
    { audioProcessor: e, videoProcessor: t }
  );
}
function Ic(n) {
  return m(this, void 0, void 0, function* () {
    var e, t;
    n ?? (n = {}),
      ((e = n.audio) !== null && e !== void 0) || (n.audio = !0),
      ((t = n.video) !== null && t !== void 0) || (n.video = !0);
    const { audioProcessor: i, videoProcessor: r } = _c(n),
      s = mc(n, Tc, Cc),
      o = fi(s),
      a = navigator.mediaDevices.getUserMedia(o);
    n.audio &&
      (ge.userMediaPromiseMap.set("audioinput", a),
      a.catch(() => ge.userMediaPromiseMap.delete("audioinput"))),
      n.video &&
        (ge.userMediaPromiseMap.set("videoinput", a),
        a.catch(() => ge.userMediaPromiseMap.delete("videoinput")));
    const c = yield a;
    return Promise.all(
      c.getTracks().map((d) =>
        m(this, void 0, void 0, function* () {
          const u = d.kind === "audio";
          u ? s.audio : s.video;
          let l;
          const h = u ? o.audio : o.video;
          typeof h != "boolean" && (l = h),
            l
              ? (l.deviceId = d.getSettings().deviceId)
              : (l = { deviceId: d.getSettings().deviceId });
          const f = wc(d, l);
          return (
            f.kind === R.Kind.Video
              ? (f.source = R.Source.Camera)
              : f.kind === R.Kind.Audio && (f.source = R.Source.Microphone),
            (f.mediaStream = c),
            f instanceof me && i
              ? yield f.setProcessor(i)
              : f instanceof be && r && (yield f.setProcessor(r)),
            f
          );
        })
      )
    );
  });
}
function xf(n) {
  return m(this, void 0, void 0, function* () {
    return (yield Ic({ audio: !1, video: n }))[0];
  });
}
function Af(n) {
  return m(this, void 0, void 0, function* () {
    return (yield Ic({ audio: n, video: !1 }))[0];
  });
}
var le;
(function (n) {
  (n.Excellent = "excellent"),
    (n.Good = "good"),
    (n.Poor = "poor"),
    (n.Lost = "lost"),
    (n.Unknown = "unknown");
})(le || (le = {}));
function Df(n) {
  switch (n) {
    case an.EXCELLENT:
      return le.Excellent;
    case an.GOOD:
      return le.Good;
    case an.POOR:
      return le.Poor;
    case an.LOST:
      return le.Lost;
    default:
      return le.Unknown;
  }
}
class xc extends $e.EventEmitter {
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t =
        (e = this.loggerOptions) === null || e === void 0
          ? void 0
          : e.loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e)
    );
  }
  get isEncrypted() {
    return (
      this.trackPublications.size > 0 &&
      Array.from(this.trackPublications.values()).every((e) => e.isEncrypted)
    );
  }
  get isAgent() {
    var e;
    return (
      ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) ||
      this.kind === Xn.AGENT
    );
  }
  get kind() {
    return this._kind;
  }
  get attributes() {
    return Object.freeze(Object.assign({}, this._attributes));
  }
  constructor(e, t, i, r, s) {
    let o =
      arguments.length > 5 && arguments[5] !== void 0
        ? arguments[5]
        : Xn.STANDARD;
    var a;
    super(),
      (this.audioLevel = 0),
      (this.isSpeaking = !1),
      (this._connectionQuality = le.Unknown),
      (this.log = K),
      (this.log = tt(
        (a = s?.loggerName) !== null && a !== void 0 ? a : Be.Participant
      )),
      (this.loggerOptions = s),
      this.setMaxListeners(100),
      (this.sid = e),
      (this.identity = t),
      (this.name = i),
      (this.metadata = r),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.trackPublications = new Map()),
      (this._kind = o),
      (this._attributes = {});
  }
  getTrackPublications() {
    return Array.from(this.trackPublications.values());
  }
  getTrackPublication(e) {
    for (const [, t] of this.trackPublications) if (t.source === e) return t;
  }
  getTrackPublicationByName(e) {
    for (const [, t] of this.trackPublications) if (t.trackName === e) return t;
  }
  get connectionQuality() {
    return this._connectionQuality;
  }
  get isCameraEnabled() {
    var e;
    const t = this.getTrackPublication(R.Source.Camera);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isMicrophoneEnabled() {
    var e;
    const t = this.getTrackPublication(R.Source.Microphone);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isScreenShareEnabled() {
    return !!this.getTrackPublication(R.Source.ScreenShare);
  }
  get isLocal() {
    return !1;
  }
  get joinedAt() {
    return this.participantInfo
      ? new Date(
          Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3
        )
      : new Date();
  }
  updateInfo(e) {
    return this.participantInfo &&
      this.participantInfo.sid === e.sid &&
      this.participantInfo.version > e.version
      ? !1
      : ((this.identity = e.identity),
        (this.sid = e.sid),
        this._setName(e.name),
        this._setMetadata(e.metadata),
        this._setAttributes(e.attributes),
        e.permission && this.setPermissions(e.permission),
        (this.participantInfo = e),
        this.log.trace(
          "update participant info",
          Object.assign(Object.assign({}, this.logContext), { info: e })
        ),
        !0);
  }
  _setMetadata(e) {
    const t = this.metadata !== e,
      i = this.metadata;
    (this.metadata = e), t && this.emit(E.ParticipantMetadataChanged, i);
  }
  _setName(e) {
    const t = this.name !== e;
    (this.name = e), t && this.emit(E.ParticipantNameChanged, e);
  }
  _setAttributes(e) {
    const t = Lh(this.attributes, e);
    (this._attributes = e),
      Object.keys(t).length > 0 && this.emit(E.AttributesChanged, t);
  }
  setPermissions(e) {
    var t, i, r, s, o, a;
    const c = this.permissions,
      d =
        e.canPublish !==
          ((t = this.permissions) === null || t === void 0
            ? void 0
            : t.canPublish) ||
        e.canSubscribe !==
          ((i = this.permissions) === null || i === void 0
            ? void 0
            : i.canSubscribe) ||
        e.canPublishData !==
          ((r = this.permissions) === null || r === void 0
            ? void 0
            : r.canPublishData) ||
        e.hidden !==
          ((s = this.permissions) === null || s === void 0
            ? void 0
            : s.hidden) ||
        e.recorder !==
          ((o = this.permissions) === null || o === void 0
            ? void 0
            : o.recorder) ||
        e.canPublishSources.length !==
          this.permissions.canPublishSources.length ||
        e.canPublishSources.some((u, l) => {
          var h;
          return (
            u !==
            ((h = this.permissions) === null || h === void 0
              ? void 0
              : h.canPublishSources[l])
          );
        }) ||
        e.canSubscribeMetrics !==
          ((a = this.permissions) === null || a === void 0
            ? void 0
            : a.canSubscribeMetrics);
    return (
      (this.permissions = e),
      d && this.emit(E.ParticipantPermissionsChanged, c),
      d
    );
  }
  setIsSpeaking(e) {
    e !== this.isSpeaking &&
      ((this.isSpeaking = e),
      e && (this.lastSpokeAt = new Date()),
      this.emit(E.IsSpeakingChanged, e));
  }
  setConnectionQuality(e) {
    const t = this._connectionQuality;
    (this._connectionQuality = Df(e)),
      t !== this._connectionQuality &&
        this.emit(E.ConnectionQualityChanged, this._connectionQuality);
  }
  setAudioContext(e) {
    (this.audioContext = e),
      this.audioTrackPublications.forEach(
        (t) =>
          (t.track instanceof fn || t.track instanceof me) &&
          t.track.setAudioContext(e)
      );
  }
  addTrackPublication(e) {
    e.on(A.Muted, () => {
      this.emit(E.TrackMuted, e);
    }),
      e.on(A.Unmuted, () => {
        this.emit(E.TrackUnmuted, e);
      });
    const t = e;
    switch (
      (t.track && (t.track.sid = e.trackSid),
      this.trackPublications.set(e.trackSid, e),
      e.kind)
    ) {
      case R.Kind.Audio:
        this.audioTrackPublications.set(e.trackSid, e);
        break;
      case R.Kind.Video:
        this.videoTrackPublications.set(e.trackSid, e);
        break;
    }
  }
}
function Mf(n) {
  var e, t, i;
  if (!n.participantSid && !n.participantIdentity)
    throw new Error(
      "Invalid track permission, must provide at least one of participantIdentity and participantSid"
    );
  return new Aa({
    participantIdentity:
      (e = n.participantIdentity) !== null && e !== void 0 ? e : "",
    participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "",
    allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : !1,
    trackSids: n.allowedTrackSids || [],
  });
}
class kr extends xc {
  constructor(e, t, i, r) {
    super(e, t, void 0, void 0, {
      loggerName: r.loggerName,
      loggerContextCb: () => this.engine.logContext,
    }),
      (this.pendingPublishing = new Set()),
      (this.pendingPublishPromises = new Map()),
      (this.participantTrackPermissions = []),
      (this.allParticipantsAllowedToSubscribe = !0),
      (this.encryptionType = De.NONE),
      (this.enabledPublishVideoCodecs = []),
      (this.rpcHandlers = new Map()),
      (this.pendingAcks = new Map()),
      (this.pendingResponses = new Map()),
      (this.handleReconnecting = () => {
        this.reconnectFuture || (this.reconnectFuture = new kc());
      }),
      (this.handleReconnected = () => {
        var s, o;
        (o =
          (s = this.reconnectFuture) === null || s === void 0
            ? void 0
            : s.resolve) === null ||
          o === void 0 ||
          o.call(s),
          (this.reconnectFuture = void 0),
          this.updateTrackSubscriptionPermissions();
      }),
      (this.handleDisconnected = () => {
        var s, o;
        this.reconnectFuture &&
          (this.reconnectFuture.promise.catch((a) =>
            this.log.warn(a.message, this.logContext)
          ),
          (o =
            (s = this.reconnectFuture) === null || s === void 0
              ? void 0
              : s.reject) === null ||
            o === void 0 ||
            o.call(s, "Got disconnected during reconnection attempt"),
          (this.reconnectFuture = void 0));
      }),
      (this.handleSignalRequestResponse = (s) => {
        const { requestId: o, reason: a, message: c } = s,
          d = this.pendingSignalRequests.get(o);
        d &&
          (a !== La.OK && d.reject(new Ns(c, a)),
          this.pendingSignalRequests.delete(o));
      }),
      (this.handleDataPacket = (s) => {
        switch (s.value.case) {
          case "rpcRequest":
            let o = s.value.value;
            this.handleIncomingRpcRequest(
              s.participantIdentity,
              o.id,
              o.method,
              o.payload,
              o.responseTimeoutMs,
              o.version
            );
            break;
          case "rpcResponse":
            let a = s.value.value,
              c = null,
              d = null;
            a.value.case === "payload"
              ? (c = a.value.value)
              : a.value.case === "error" && (d = oe.fromProto(a.value.value)),
              this.handleIncomingRpcResponse(a.requestId, c, d);
            break;
          case "rpcAck":
            let u = s.value.value;
            this.handleIncomingRpcAck(u.requestId);
            break;
        }
      }),
      (this.updateTrackSubscriptionPermissions = () => {
        this.log.debug(
          "updating track subscription permissions",
          Object.assign(Object.assign({}, this.logContext), {
            allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
            participantTrackPermissions: this.participantTrackPermissions,
          })
        ),
          this.engine.client.sendUpdateSubscriptionPermissions(
            this.allParticipantsAllowedToSubscribe,
            this.participantTrackPermissions.map((s) => Mf(s))
          );
      }),
      (this.onTrackUnmuted = (s) => {
        this.onTrackMuted(s, s.isUpstreamPaused);
      }),
      (this.onTrackMuted = (s, o) => {
        if ((o === void 0 && (o = !0), !s.sid)) {
          this.log.error(
            "could not update mute status for unpublished track",
            Object.assign(Object.assign({}, this.logContext), Q(s))
          );
          return;
        }
        this.engine.updateMuteStatus(s.sid, o);
      }),
      (this.onTrackUpstreamPaused = (s) => {
        this.log.debug(
          "upstream paused",
          Object.assign(Object.assign({}, this.logContext), Q(s))
        ),
          this.onTrackMuted(s, !0);
      }),
      (this.onTrackUpstreamResumed = (s) => {
        this.log.debug(
          "upstream resumed",
          Object.assign(Object.assign({}, this.logContext), Q(s))
        ),
          this.onTrackMuted(s, s.isMuted);
      }),
      (this.onTrackFeatureUpdate = (s) => {
        const o = this.audioTrackPublications.get(s.sid);
        if (!o) {
          this.log.warn(
            "Could not update local audio track settings, missing publication for track ".concat(
              s.sid
            ),
            this.logContext
          );
          return;
        }
        this.engine.client.sendUpdateLocalAudioTrack(
          o.trackSid,
          o.getTrackFeatures()
        );
      }),
      (this.handleSubscribedQualityUpdate = (s) =>
        m(this, void 0, void 0, function* () {
          var o, a, c, d, u, l;
          if (
            !(!((u = this.roomOptions) === null || u === void 0) && u.dynacast)
          )
            return;
          const h = this.videoTrackPublications.get(s.trackSid);
          if (!h) {
            this.log.warn(
              "received subscribed quality update for unknown track",
              Object.assign(Object.assign({}, this.logContext), {
                trackSid: s.trackSid,
              })
            );
            return;
          }
          if (s.subscribedCodecs.length > 0) {
            if (!h.videoTrack) return;
            const b = yield h.videoTrack.setPublishingCodecs(
              s.subscribedCodecs
            );
            try {
              for (
                var f = !0, g = Nt(b), p;
                (p = yield g.next()), (o = p.done), !o;
                f = !0
              ) {
                (d = p.value), (f = !1);
                const v = d;
                Ih(v) &&
                  (this.log.debug(
                    "publish ".concat(v, " for ").concat(h.videoTrack.sid),
                    Object.assign(Object.assign({}, this.logContext), Q(h))
                  ),
                  yield this.publishAdditionalCodecForTrack(
                    h.videoTrack,
                    v,
                    h.options
                  ));
              }
            } catch (v) {
              a = { error: v };
            } finally {
              try {
                !f && !o && (c = g.return) && (yield c.call(g));
              } finally {
                if (a) throw a.error;
              }
            }
          } else s.subscribedQualities.length > 0 && (yield (l = h.videoTrack) === null || l === void 0 ? void 0 : l.setPublishingLayers(s.subscribedQualities));
        })),
      (this.handleLocalTrackUnpublished = (s) => {
        const o = this.trackPublications.get(s.trackSid);
        if (!o) {
          this.log.warn(
            "received unpublished event for unknown track",
            Object.assign(Object.assign({}, this.logContext), {
              trackSid: s.trackSid,
            })
          );
          return;
        }
        this.unpublishTrack(o.track);
      }),
      (this.handleTrackEnded = (s) =>
        m(this, void 0, void 0, function* () {
          if (
            s.source === R.Source.ScreenShare ||
            s.source === R.Source.ScreenShareAudio
          )
            this.log.debug(
              "unpublishing local track due to TrackEnded",
              Object.assign(Object.assign({}, this.logContext), Q(s))
            ),
              this.unpublishTrack(s);
          else if (s.isUserProvided) yield s.mute();
          else if (s instanceof me || s instanceof be)
            try {
              if (_e())
                try {
                  const o = yield navigator?.permissions.query({
                    name:
                      s.source === R.Source.Camera ? "camera" : "microphone",
                  });
                  if (o && o.state === "denied")
                    throw (
                      (this.log.warn(
                        "user has revoked access to ".concat(s.source),
                        Object.assign(Object.assign({}, this.logContext), Q(s))
                      ),
                      (o.onchange = () => {
                        o.state !== "denied" &&
                          (s.isMuted || s.restartTrack(), (o.onchange = null));
                      }),
                      new Error("GetUserMedia Permission denied"))
                    );
                } catch {}
              s.isMuted ||
                (this.log.debug(
                  "track ended, attempting to use a different device",
                  Object.assign(Object.assign({}, this.logContext), Q(s))
                ),
                s instanceof me
                  ? yield s.restartTrack({ deviceId: "default" })
                  : yield s.restartTrack());
            } catch {
              this.log.warn(
                "could not restart track, muting instead",
                Object.assign(Object.assign({}, this.logContext), Q(s))
              ),
                yield s.mute();
            }
        })),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.trackPublications = new Map()),
      (this.engine = i),
      (this.roomOptions = r),
      this.setupEngine(i),
      (this.activeDeviceMap = new Map()),
      (this.pendingSignalRequests = new Map());
  }
  get lastCameraError() {
    return this.cameraError;
  }
  get lastMicrophoneError() {
    return this.microphoneError;
  }
  get isE2EEEnabled() {
    return this.encryptionType !== De.NONE;
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setupEngine(e) {
    (this.engine = e),
      this.engine.on(N.RemoteMute, (t, i) => {
        const r = this.trackPublications.get(t);
        !r || !r.track || (i ? r.mute() : r.unmute());
      }),
      this.engine
        .on(N.Connected, this.handleReconnected)
        .on(N.SignalRestarted, this.handleReconnected)
        .on(N.SignalResumed, this.handleReconnected)
        .on(N.Restarting, this.handleReconnecting)
        .on(N.Resuming, this.handleReconnecting)
        .on(N.LocalTrackUnpublished, this.handleLocalTrackUnpublished)
        .on(N.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate)
        .on(N.Disconnected, this.handleDisconnected)
        .on(N.SignalRequestResponse, this.handleSignalRequestResponse)
        .on(N.DataPacketReceived, this.handleDataPacket);
  }
  setMetadata(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ metadata: e });
    });
  }
  setName(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ name: e });
    });
  }
  setAttributes(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ attributes: e });
    });
  }
  requestMetadataUpdate(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let { metadata: r, name: s, attributes: o } = t;
      return (function* () {
        return new Promise((a, c) =>
          m(i, void 0, void 0, function* () {
            var d, u;
            try {
              let l = !1;
              const h = yield this.engine.client.sendUpdateLocalMetadata(
                  (d = r ?? this.metadata) !== null && d !== void 0 ? d : "",
                  (u = s ?? this.name) !== null && u !== void 0 ? u : "",
                  o
                ),
                f = performance.now();
              for (
                this.pendingSignalRequests.set(h, {
                  resolve: a,
                  reject: (g) => {
                    c(g), (l = !0);
                  },
                  values: { name: s, metadata: r, attributes: o },
                });
                performance.now() - f < 5e3 && !l;

              ) {
                if (
                  (!s || this.name === s) &&
                  (!r || this.metadata === r) &&
                  (!o ||
                    Object.entries(o).every((g) => {
                      let [p, b] = g;
                      return (
                        this.attributes[p] === b ||
                        (b === "" && !this.attributes[p])
                      );
                    }))
                ) {
                  this.pendingSignalRequests.delete(h), a();
                  return;
                }
                yield Je(50);
              }
              c(
                new Ns(
                  "Request to update local metadata timed out",
                  "TimeoutError"
                )
              );
            } catch (l) {
              l instanceof Error && c(l);
            }
          })
        );
      })();
    });
  }
  setCameraEnabled(e, t, i) {
    return this.setTrackEnabled(R.Source.Camera, e, t, i);
  }
  setMicrophoneEnabled(e, t, i) {
    return this.setTrackEnabled(R.Source.Microphone, e, t, i);
  }
  setScreenShareEnabled(e, t, i) {
    return this.setTrackEnabled(R.Source.ScreenShare, e, t, i);
  }
  setPermissions(e) {
    const t = this.permissions,
      i = super.setPermissions(e);
    return i && t && this.emit(E.ParticipantPermissionsChanged, t), i;
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      (this.encryptionType = e ? De.GCM : De.NONE),
        yield this.republishAllTracks(void 0, !1);
    });
  }
  setTrackEnabled(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      var s, o;
      this.log.debug(
        "setTrackEnabled",
        Object.assign(Object.assign({}, this.logContext), {
          source: e,
          enabled: t,
        })
      ),
        this.republishPromise && (yield this.republishPromise);
      let a = this.getTrackPublication(e);
      if (t)
        if (a) yield a.unmute();
        else {
          let c;
          if (this.pendingPublishing.has(e)) {
            const d = yield this.waitForPendingPublicationOfSource(e);
            return (
              d ||
                this.log.info(
                  "skipping duplicate published source",
                  Object.assign(Object.assign({}, this.logContext), {
                    source: e,
                  })
                ),
              yield d?.unmute(),
              d
            );
          }
          this.pendingPublishing.add(e);
          try {
            switch (e) {
              case R.Source.Camera:
                c = yield this.createTracks({
                  video: (s = i) !== null && s !== void 0 ? s : !0,
                });
                break;
              case R.Source.Microphone:
                c = yield this.createTracks({
                  audio: (o = i) !== null && o !== void 0 ? o : !0,
                });
                break;
              case R.Source.ScreenShare:
                c = yield this.createScreenTracks(Object.assign({}, i));
                break;
              default:
                throw new He(e);
            }
            const d = [];
            for (const l of c)
              this.log.info(
                "publishing track",
                Object.assign(Object.assign({}, this.logContext), Q(l))
              ),
                d.push(this.publishTrack(l, r));
            [a] = yield Promise.all(d);
          } catch (d) {
            throw (
              (c?.forEach((u) => {
                u.stop();
              }),
              d instanceof Error &&
                !(d instanceof He) &&
                this.emit(E.MediaDevicesError, d),
              d)
            );
          } finally {
            this.pendingPublishing.delete(e);
          }
        }
      else if (
        (a?.track || (a = yield this.waitForPendingPublicationOfSource(e)),
        a && a.track)
      )
        if (e === R.Source.ScreenShare) {
          a = yield this.unpublishTrack(a.track);
          const c = this.getTrackPublication(R.Source.ScreenShareAudio);
          c && c.track && this.unpublishTrack(c.track);
        } else yield a.mute();
      return a;
    });
  }
  enableCameraAndMicrophone() {
    return m(this, void 0, void 0, function* () {
      if (
        !(
          this.pendingPublishing.has(R.Source.Camera) ||
          this.pendingPublishing.has(R.Source.Microphone)
        )
      ) {
        this.pendingPublishing.add(R.Source.Camera),
          this.pendingPublishing.add(R.Source.Microphone);
        try {
          const e = yield this.createTracks({ audio: !0, video: !0 });
          yield Promise.all(e.map((t) => this.publishTrack(t)));
        } finally {
          this.pendingPublishing.delete(R.Source.Camera),
            this.pendingPublishing.delete(R.Source.Microphone);
        }
      }
    });
  }
  createTracks(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      e ?? (e = {});
      const { audioProcessor: r, videoProcessor: s } = _c(e),
        o = mc(
          e,
          (t = this.roomOptions) === null || t === void 0
            ? void 0
            : t.audioCaptureDefaults,
          (i = this.roomOptions) === null || i === void 0
            ? void 0
            : i.videoCaptureDefaults
        ),
        a = fi(o);
      let c;
      try {
        c = yield navigator.mediaDevices.getUserMedia(a);
      } catch (d) {
        throw (
          (d instanceof Error &&
            (a.audio && (this.microphoneError = d),
            a.video && (this.cameraError = d)),
          d)
        );
      }
      return (
        a.audio &&
          ((this.microphoneError = void 0), this.emit(E.AudioStreamAcquired)),
        a.video && (this.cameraError = void 0),
        Promise.all(
          c.getTracks().map((d) =>
            m(this, void 0, void 0, function* () {
              const u = d.kind === "audio";
              u ? o.audio : o.video;
              let l;
              const h = u ? a.audio : a.video;
              typeof h != "boolean" && (l = h);
              const f = wc(d, l, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext,
              });
              return (
                f.kind === R.Kind.Video
                  ? (f.source = R.Source.Camera)
                  : f.kind === R.Kind.Audio &&
                    ((f.source = R.Source.Microphone),
                    f.setAudioContext(this.audioContext)),
                (f.mediaStream = c),
                f instanceof me && r
                  ? yield f.setProcessor(r)
                  : f instanceof be && s && (yield f.setProcessor(s)),
                f
              );
            })
          )
        )
      );
    });
  }
  createScreenTracks(e) {
    return m(this, void 0, void 0, function* () {
      if (
        (e === void 0 && (e = {}),
        navigator.mediaDevices.getDisplayMedia === void 0)
      )
        throw new Mr("getDisplayMedia not supported");
      e.resolution === void 0 &&
        !qh() &&
        (e.resolution = Nr.h1080fps30.resolution);
      const t = Mh(e),
        i = yield navigator.mediaDevices.getDisplayMedia(t),
        r = i.getVideoTracks();
      if (r.length === 0) throw new He("no video track found");
      const s = new be(r[0], void 0, !1, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext,
      });
      (s.source = R.Source.ScreenShare),
        e.contentHint && (s.mediaStreamTrack.contentHint = e.contentHint);
      const o = [s];
      if (i.getAudioTracks().length > 0) {
        this.emit(E.AudioStreamAcquired);
        const a = new me(i.getAudioTracks()[0], void 0, !1, this.audioContext, {
          loggerName: this.roomOptions.loggerName,
          loggerContextCb: () => this.logContext,
        });
        (a.source = R.Source.ScreenShareAudio), o.push(a);
      }
      return o;
    });
  }
  publishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      return this.publishOrRepublishTrack(e, t);
    });
  }
  publishOrRepublishTrack(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return (function* () {
        var a, c, d, u;
        i instanceof me && i.setAudioContext(s.audioContext),
          yield (a = s.reconnectFuture) === null || a === void 0
            ? void 0
            : a.promise,
          s.republishPromise && !o && (yield s.republishPromise),
          i instanceof zt &&
            s.pendingPublishPromises.has(i) &&
            (yield s.pendingPublishPromises.get(i));
        let l;
        if (i instanceof MediaStreamTrack) l = i.getConstraints();
        else {
          l = i.constraints;
          let v;
          switch (i.source) {
            case R.Source.Microphone:
              v = "audioinput";
              break;
            case R.Source.Camera:
              v = "videoinput";
          }
          v &&
            s.activeDeviceMap.has(v) &&
            (l = Object.assign(Object.assign({}, l), {
              deviceId: s.activeDeviceMap.get(v),
            }));
        }
        if (i instanceof MediaStreamTrack)
          switch (i.kind) {
            case "audio":
              i = new me(i, l, !0, s.audioContext, {
                loggerName: s.roomOptions.loggerName,
                loggerContextCb: () => s.logContext,
              });
              break;
            case "video":
              i = new be(i, l, !0, {
                loggerName: s.roomOptions.loggerName,
                loggerContextCb: () => s.logContext,
              });
              break;
            default:
              throw new He("unsupported MediaStreamTrack kind ".concat(i.kind));
          }
        else
          i.updateLoggerOptions({
            loggerName: s.roomOptions.loggerName,
            loggerContextCb: () => s.logContext,
          });
        let h;
        if (
          (s.trackPublications.forEach((v) => {
            v.track && v.track === i && (h = v);
          }),
          h)
        )
          return (
            s.log.warn(
              "track has already been published, skipping",
              Object.assign(Object.assign({}, s.logContext), Q(h))
            ),
            h
          );
        const f =
            ("channelCount" in i.mediaStreamTrack.getSettings() &&
              i.mediaStreamTrack.getSettings().channelCount === 2) ||
            i.mediaStreamTrack.getConstraints().channelCount === 2,
          g = (c = r?.forceStereo) !== null && c !== void 0 ? c : f;
        g &&
          (r || (r = {}),
          r.dtx === void 0 &&
            s.log.info(
              "Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.",
              Object.assign(Object.assign({}, s.logContext), Q(i))
            ),
          r.red === void 0 &&
            s.log.info(
              "Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."
            ),
          ((d = r.dtx) !== null && d !== void 0) || (r.dtx = !1),
          ((u = r.red) !== null && u !== void 0) || (r.red = !1));
        const p = Object.assign(
          Object.assign({}, s.roomOptions.publishDefaults),
          r
        );
        !zh() &&
          s.roomOptions.e2ee &&
          (s.log.info(
            "End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2",
            Object.assign({}, s.logContext)
          ),
          (p.simulcast = !1)),
          p.source && (i.source = p.source);
        const b = s.publish(i, p, g);
        s.pendingPublishPromises.set(i, b);
        try {
          return yield b;
        } catch (v) {
          throw v;
        } finally {
          s.pendingPublishPromises.delete(i);
        }
      })();
    });
  }
  publish(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var r, s, o, a, c, d, u, l, h, f;
      Array.from(this.trackPublications.values()).find(
        (k) => e instanceof zt && k.source === e.source
      ) &&
        e.source !== R.Source.Unknown &&
        this.log.info(
          "publishing a second track with the same source: ".concat(e.source),
          Object.assign(Object.assign({}, this.logContext), Q(e))
        ),
        t.stopMicTrackOnMute && e instanceof me && (e.stopOnMute = !0),
        e.source === R.Source.ScreenShare && Ht() && (t.simulcast = !1),
        t.videoCodec === "av1" && !jh() && (t.videoCodec = void 0),
        t.videoCodec === "vp9" && !Bh() && (t.videoCodec = void 0),
        t.videoCodec === void 0 && (t.videoCodec = gr),
        this.enabledPublishVideoCodecs.length > 0 &&
          (this.enabledPublishVideoCodecs.some(
            (k) => t.videoCodec === Wn(k.mime)
          ) ||
            (t.videoCodec = Wn(this.enabledPublishVideoCodecs[0].mime)));
      const p = t.videoCodec;
      e.on(A.Muted, this.onTrackMuted),
        e.on(A.Unmuted, this.onTrackUnmuted),
        e.on(A.Ended, this.handleTrackEnded),
        e.on(A.UpstreamPaused, this.onTrackUpstreamPaused),
        e.on(A.UpstreamResumed, this.onTrackUpstreamResumed),
        e.on(A.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
      const b = new Zi({
        cid: e.mediaStreamTrack.id,
        name: t.name,
        type: R.kindToProto(e.kind),
        muted: e.isMuted,
        source: R.sourceToProto(e.source),
        disableDtx: !(!((r = t.dtx) !== null && r !== void 0) || r),
        encryption: this.encryptionType,
        stereo: i,
        disableRed:
          this.isE2EEEnabled || !(!((s = t.red) !== null && s !== void 0) || s),
        stream: t?.stream,
      });
      let v;
      if (e.kind === R.Kind.Video) {
        let k = { width: 0, height: 0 };
        try {
          k = yield e.waitForDimensions();
        } catch {
          const D =
            (a =
              (o = this.roomOptions.videoCaptureDefaults) === null ||
              o === void 0
                ? void 0
                : o.resolution) !== null && a !== void 0
              ? a
              : bn.h720.resolution;
          (k = { width: D.width, height: D.height }),
            this.log.error(
              "could not determine track dimensions, using defaults",
              Object.assign(
                Object.assign(Object.assign({}, this.logContext), Q(e)),
                { dims: k }
              )
            );
        }
        (b.width = k.width),
          (b.height = k.height),
          e instanceof be &&
            (ln(p) &&
              (e.source === R.Source.ScreenShare &&
                ((t.scalabilityMode = "L1T3"),
                "contentHint" in e.mediaStreamTrack &&
                  ((e.mediaStreamTrack.contentHint = "motion"),
                  this.log.info(
                    "forcing contentHint to motion for screenshare with SVC codecs",
                    Object.assign(Object.assign({}, this.logContext), Q(e))
                  ))),
              (t.scalabilityMode =
                (c = t.scalabilityMode) !== null && c !== void 0
                  ? c
                  : "L3T3_KEY")),
            (b.simulcastCodecs = [
              new Xi({ codec: p, cid: e.mediaStreamTrack.id }),
            ]),
            t.backupCodec === !0 && (t.backupCodec = { codec: gr }),
            t.backupCodec &&
              p !== t.backupCodec.codec &&
              b.encryption === De.NONE &&
              (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0),
              b.simulcastCodecs.push(
                new Xi({ codec: t.backupCodec.codec, cid: "" })
              ))),
          (v = br(e.source === R.Source.ScreenShare, b.width, b.height, t)),
          (b.layers = eo(b.width, b.height, v, ln(t.videoCodec)));
      } else e.kind === R.Kind.Audio && (v = [{ maxBitrate: (d = t.audioPreset) === null || d === void 0 ? void 0 : d.maxBitrate, priority: (l = (u = t.audioPreset) === null || u === void 0 ? void 0 : u.priority) !== null && l !== void 0 ? l : "high", networkPriority: (f = (h = t.audioPreset) === null || h === void 0 ? void 0 : h.priority) !== null && f !== void 0 ? f : "high" }]);
      if (!this.engine || this.engine.isClosed)
        throw new he("cannot publish track when not connected");
      const P = () =>
        m(this, void 0, void 0, function* () {
          var k, T, D;
          if (!this.engine.pcManager) throw new he("pcManager is not ready");
          if (
            ((e.sender = yield this.engine.createSender(e, t, v)),
            e instanceof be &&
              (((k = t.degradationPreference) !== null && k !== void 0) ||
                (t.degradationPreference = Tf(e)),
              e.setDegradationPreference(t.degradationPreference)),
            v)
          )
            if (Ht() && e.kind === R.Kind.Audio) {
              let U;
              for (const L of this.engine.pcManager.publisher.getTransceivers())
                if (L.sender === e.sender) {
                  U = L;
                  break;
                }
              U &&
                this.engine.pcManager.publisher.setTrackCodecBitrate({
                  transceiver: U,
                  codec: "opus",
                  maxbr:
                    !((T = v[0]) === null || T === void 0) && T.maxBitrate
                      ? v[0].maxBitrate / 1e3
                      : 0,
                });
            } else
              e.codec &&
                ln(e.codec) &&
                !((D = v[0]) === null || D === void 0) &&
                D.maxBitrate &&
                this.engine.pcManager.publisher.setTrackCodecBitrate({
                  cid: b.cid,
                  codec: e.codec,
                  maxbr: v[0].maxBitrate / 1e3,
                });
          yield this.engine.negotiate();
        });
      let I;
      if (this.enabledPublishVideoCodecs.length > 0)
        I = (yield Promise.all([this.engine.addTrack(b), P()]))[0];
      else {
        I = yield this.engine.addTrack(b);
        let k;
        if (
          (I.codecs.forEach((T) => {
            k === void 0 && (k = T.mimeType);
          }),
          k && e.kind === R.Kind.Video)
        ) {
          const T = Wn(k);
          T !== p &&
            (this.log.debug(
              "falling back to server selected codec",
              Object.assign(
                Object.assign(Object.assign({}, this.logContext), Q(e)),
                { codec: T }
              )
            ),
            (t.videoCodec = T),
            (v = br(e.source === R.Source.ScreenShare, b.width, b.height, t)));
        }
        yield P();
      }
      const S = new ti(e.kind, I, e, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext,
      });
      return (
        (S.options = t),
        (e.sid = I.sid),
        this.log.debug(
          "publishing ".concat(e.kind, " with encodings"),
          Object.assign(Object.assign({}, this.logContext), {
            encodings: v,
            trackInfo: I,
          })
        ),
        e instanceof be
          ? e.startMonitor(this.engine.client)
          : e instanceof me && e.startMonitor(),
        this.addTrackPublication(S),
        this.emit(E.LocalTrackPublished, S),
        S
      );
    });
  }
  get isLocal() {
    return !0;
  }
  publishAdditionalCodecForTrack(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var r;
      if (this.encryptionType !== De.NONE) return;
      let s;
      if (
        (this.trackPublications.forEach((f) => {
          f.track && f.track === e && (s = f);
        }),
        !s)
      )
        throw new He("track is not published");
      if (!(e instanceof be)) throw new He("track is not a video track");
      const o = Object.assign(
          Object.assign(
            {},
            (r = this.roomOptions) === null || r === void 0
              ? void 0
              : r.publishDefaults
          ),
          i
        ),
        a = yf(e, t, o);
      if (!a) {
        this.log.info(
          "backup codec has been disabled, ignoring request to add additional codec for track",
          Object.assign(Object.assign({}, this.logContext), Q(e))
        );
        return;
      }
      const c = e.addSimulcastTrack(t, a);
      if (!c) return;
      const d = new Zi({
        cid: c.mediaStreamTrack.id,
        type: R.kindToProto(e.kind),
        muted: e.isMuted,
        source: R.sourceToProto(e.source),
        sid: e.sid,
        simulcastCodecs: [{ codec: o.videoCodec, cid: c.mediaStreamTrack.id }],
      });
      if (
        ((d.layers = eo(d.width, d.height, a)),
        !this.engine || this.engine.isClosed)
      )
        throw new he("cannot publish track when not connected");
      const u = () =>
          m(this, void 0, void 0, function* () {
            yield this.engine.createSimulcastSender(e, c, o, a),
              yield this.engine.negotiate();
          }),
        h = (yield Promise.all([this.engine.addTrack(d), u()]))[0];
      this.log.debug(
        "published ".concat(t, " for track ").concat(e.sid),
        Object.assign(Object.assign({}, this.logContext), {
          encodings: a,
          trackInfo: h,
        })
      );
    });
  }
  unpublishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      var i, r;
      if (e instanceof zt) {
        const d = this.pendingPublishPromises.get(e);
        d &&
          (this.log.info(
            "awaiting publish promise before attempting to unpublish",
            Object.assign(Object.assign({}, this.logContext), Q(e))
          ),
          yield d);
      }
      const s = this.getPublicationForTrack(e),
        o = s ? Q(s) : void 0;
      if (
        (this.log.debug(
          "unpublishing track",
          Object.assign(Object.assign({}, this.logContext), o)
        ),
        !s || !s.track)
      ) {
        this.log.warn(
          "track was not unpublished because no publication was found",
          Object.assign(Object.assign({}, this.logContext), o)
        );
        return;
      }
      (e = s.track),
        e.off(A.Muted, this.onTrackMuted),
        e.off(A.Unmuted, this.onTrackUnmuted),
        e.off(A.Ended, this.handleTrackEnded),
        e.off(A.UpstreamPaused, this.onTrackUpstreamPaused),
        e.off(A.UpstreamResumed, this.onTrackUpstreamResumed),
        e.off(A.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate),
        t === void 0 &&
          (t =
            (r =
              (i = this.roomOptions) === null || i === void 0
                ? void 0
                : i.stopLocalTrackOnUnpublish) !== null && r !== void 0
              ? r
              : !0),
        t && e.stop();
      let a = !1;
      const c = e.sender;
      if (
        ((e.sender = void 0),
        this.engine.pcManager &&
          this.engine.pcManager.currentState < ae.FAILED &&
          c)
      )
        try {
          for (const d of this.engine.pcManager.publisher.getTransceivers())
            d.sender === c && ((d.direction = "inactive"), (a = !0));
          if ((this.engine.removeTrack(c) && (a = !0), e instanceof be)) {
            for (const [, d] of e.simulcastCodecs)
              d.sender &&
                (this.engine.removeTrack(d.sender) && (a = !0),
                (d.sender = void 0));
            e.simulcastCodecs.clear();
          }
        } catch (d) {
          this.log.warn(
            "failed to unpublish track",
            Object.assign(
              Object.assign(Object.assign({}, this.logContext), o),
              { error: d }
            )
          );
        }
      switch ((this.trackPublications.delete(s.trackSid), s.kind)) {
        case R.Kind.Audio:
          this.audioTrackPublications.delete(s.trackSid);
          break;
        case R.Kind.Video:
          this.videoTrackPublications.delete(s.trackSid);
          break;
      }
      return (
        this.emit(E.LocalTrackUnpublished, s),
        s.setTrack(void 0),
        a && (yield this.engine.negotiate()),
        s
      );
    });
  }
  unpublishTracks(e) {
    return m(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map((i) => this.unpublishTrack(i)))).filter(
        (i) => i instanceof ti
      );
    });
  }
  republishAllTracks(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        i.republishPromise && (yield i.republishPromise),
          (i.republishPromise = new Promise((s, o) =>
            m(i, void 0, void 0, function* () {
              try {
                const a = [];
                this.trackPublications.forEach((c) => {
                  c.track &&
                    (t &&
                      (c.options = Object.assign(
                        Object.assign({}, c.options),
                        t
                      )),
                    a.push(c));
                }),
                  yield Promise.all(
                    a.map((c) =>
                      m(this, void 0, void 0, function* () {
                        const d = c.track;
                        yield this.unpublishTrack(d, !1),
                          r &&
                            !d.isMuted &&
                            d.source !== R.Source.ScreenShare &&
                            d.source !== R.Source.ScreenShareAudio &&
                            (d instanceof me || d instanceof be) &&
                            !d.isUserProvided &&
                            (this.log.debug(
                              "restarting existing track",
                              Object.assign(
                                Object.assign({}, this.logContext),
                                { track: c.trackSid }
                              )
                            ),
                            yield d.restartTrack()),
                          yield this.publishOrRepublishTrack(d, c.options, !0);
                      })
                    )
                  ),
                  s();
              } catch (a) {
                o(a);
              } finally {
                this.republishPromise = void 0;
              }
            })
          )),
          yield i.republishPromise;
      })();
    });
  }
  publishData(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (function* () {
        const s = r.reliable ? ee.RELIABLE : ee.LOSSY,
          o = r.destinationIdentities,
          a = r.topic,
          c = new dt({
            kind: s,
            value: {
              case: "user",
              value: new ma({
                participantIdentity: i.identity,
                payload: t,
                destinationIdentities: o,
                topic: a,
              }),
            },
          });
        yield i.engine.sendDataPacket(c, s);
      })();
    });
  }
  publishDtmf(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new dt({
        kind: ee.RELIABLE,
        value: { case: "sipDtmf", value: new ga({ code: e, digit: t }) },
      });
      yield this.engine.sendDataPacket(i, ee.RELIABLE);
    });
  }
  sendChatMessage(e) {
    return m(this, void 0, void 0, function* () {
      const t = { id: crypto.randomUUID(), message: e, timestamp: Date.now() },
        i = new dt({
          value: {
            case: "chatMessage",
            value: new Qi(
              Object.assign(Object.assign({}, t), {
                timestamp: ne.parse(t.timestamp),
              })
            ),
          },
        });
      return (
        yield this.engine.sendDataPacket(i, ee.RELIABLE),
        this.emit(E.ChatMessage, t),
        t
      );
    });
  }
  editChatMessage(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = Object.assign(Object.assign({}, t), {
          message: e,
          editTimestamp: Date.now(),
        }),
        r = new dt({
          value: {
            case: "chatMessage",
            value: new Qi(
              Object.assign(Object.assign({}, i), {
                timestamp: ne.parse(i.timestamp),
                editTimestamp: ne.parse(i.editTimestamp),
              })
            ),
          },
        });
      return (
        yield this.engine.sendDataPacket(r, ee.RELIABLE),
        this.emit(E.ChatMessage, i),
        i
      );
    });
  }
  performRpc(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let {
        destinationIdentity: r,
        method: s,
        payload: o,
        responseTimeout: a = 1e4,
      } = t;
      return (function* () {
        return new Promise((d, u) =>
          m(i, void 0, void 0, function* () {
            var l, h, f, g;
            if (yr(o) > ro) {
              u(oe.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
              return;
            }
            if (
              !(
                (h =
                  (l = this.engine.latestJoinResponse) === null || l === void 0
                    ? void 0
                    : l.serverInfo) === null || h === void 0
              ) &&
              h.version &&
              Jt(
                (g =
                  (f = this.engine.latestJoinResponse) === null || f === void 0
                    ? void 0
                    : f.serverInfo) === null || g === void 0
                  ? void 0
                  : g.version,
                "1.8.0"
              ) < 0
            ) {
              u(oe.builtIn("UNSUPPORTED_SERVER"));
              return;
            }
            const p = crypto.randomUUID();
            yield this.publishRpcRequest(r, p, s, o, a - 2e3);
            const b = setTimeout(() => {
              this.pendingAcks.delete(p),
                u(oe.builtIn("CONNECTION_TIMEOUT")),
                this.pendingResponses.delete(p),
                clearTimeout(v);
            }, 2e3);
            this.pendingAcks.set(p, {
              resolve: () => {
                clearTimeout(b);
              },
              participantIdentity: r,
            });
            const v = setTimeout(() => {
              this.pendingResponses.delete(p),
                u(oe.builtIn("RESPONSE_TIMEOUT"));
            }, a);
            this.pendingResponses.set(p, {
              resolve: (P, I) => {
                clearTimeout(v),
                  this.pendingAcks.has(p) &&
                    (console.warn("RPC response received before ack", p),
                    this.pendingAcks.delete(p),
                    clearTimeout(b)),
                  I ? u(I) : d(P ?? "");
              },
              participantIdentity: r,
            });
          })
        );
      })();
    });
  }
  registerRpcMethod(e, t) {
    this.rpcHandlers.set(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcHandlers.delete(e);
  }
  setTrackSubscriptionPermissions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (this.participantTrackPermissions = t),
      (this.allParticipantsAllowedToSubscribe = e),
      this.engine.client.isDisconnected ||
        this.updateTrackSubscriptionPermissions();
  }
  handleIncomingRpcAck(e) {
    const t = this.pendingAcks.get(e);
    t
      ? (t.resolve(), this.pendingAcks.delete(e))
      : console.error("Ack received for unexpected RPC request", e);
  }
  handleIncomingRpcResponse(e, t, i) {
    const r = this.pendingResponses.get(e);
    r
      ? (r.resolve(t, i), this.pendingResponses.delete(e))
      : console.error("Response received for unexpected RPC request", e);
  }
  handleIncomingRpcRequest(e, t, i, r, s, o) {
    return m(this, void 0, void 0, function* () {
      if ((yield this.publishRpcAck(e, t), o !== 1)) {
        yield this.publishRpcResponse(
          e,
          t,
          null,
          oe.builtIn("UNSUPPORTED_VERSION")
        );
        return;
      }
      const a = this.rpcHandlers.get(i);
      if (!a) {
        yield this.publishRpcResponse(
          e,
          t,
          null,
          oe.builtIn("UNSUPPORTED_METHOD")
        );
        return;
      }
      let c = null,
        d = null;
      try {
        const u = yield a({
          requestId: t,
          callerIdentity: e,
          payload: r,
          responseTimeout: s,
        });
        yr(u) > ro
          ? ((c = oe.builtIn("RESPONSE_PAYLOAD_TOO_LARGE")),
            console.warn("RPC Response payload too large for ".concat(i)))
          : (d = u);
      } catch (u) {
        u instanceof oe
          ? (c = u)
          : (console.warn(
              "Uncaught error returned by RPC handler for ".concat(
                i,
                ". Returning APPLICATION_ERROR instead."
              ),
              u
            ),
            (c = oe.builtIn("APPLICATION_ERROR")));
      }
      yield this.publishRpcResponse(e, t, d, c);
    });
  }
  publishRpcRequest(e, t, i, r, s) {
    return m(this, void 0, void 0, function* () {
      const o = new dt({
        destinationIdentities: [e],
        kind: ee.RELIABLE,
        value: {
          case: "rpcRequest",
          value: new va({
            id: t,
            method: i,
            payload: r,
            responseTimeoutMs: s,
            version: 1,
          }),
        },
      });
      yield this.engine.sendDataPacket(o, ee.RELIABLE);
    });
  }
  publishRpcResponse(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      const s = new dt({
        destinationIdentities: [e],
        kind: ee.RELIABLE,
        value: {
          case: "rpcResponse",
          value: new ya({
            requestId: t,
            value: r
              ? { case: "error", value: r.toProto() }
              : { case: "payload", value: i ?? "" },
          }),
        },
      });
      yield this.engine.sendDataPacket(s, ee.RELIABLE);
    });
  }
  publishRpcAck(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new dt({
        destinationIdentities: [e],
        kind: ee.RELIABLE,
        value: { case: "rpcAck", value: new ba({ requestId: t }) },
      });
      yield this.engine.sendDataPacket(i, ee.RELIABLE);
    });
  }
  handleParticipantDisconnected(e) {
    for (const [t, { participantIdentity: i }] of this.pendingAcks)
      i === e && this.pendingAcks.delete(t);
    for (const [t, { participantIdentity: i, resolve: r }] of this
      .pendingResponses)
      i === e &&
        (r(null, oe.builtIn("RECIPIENT_DISCONNECTED")),
        this.pendingResponses.delete(t));
  }
  setEnabledPublishCodecs(e) {
    this.enabledPublishVideoCodecs = e.filter(
      (t) => t.mime.split("/")[0].toLowerCase() === "video"
    );
  }
  updateInfo(e) {
    return e.sid !== this.sid || !super.updateInfo(e)
      ? !1
      : (e.tracks.forEach((t) => {
          var i, r;
          const s = this.trackPublications.get(t.sid);
          if (s) {
            const o =
              s.isMuted ||
              ((r =
                (i = s.track) === null || i === void 0
                  ? void 0
                  : i.isUpstreamPaused) !== null && r !== void 0
                ? r
                : !1);
            o !== t.muted &&
              (this.log.debug(
                "updating server mute state after reconcile",
                Object.assign(
                  Object.assign(Object.assign({}, this.logContext), Q(s)),
                  { mutedOnServer: o }
                )
              ),
              this.engine.client.sendMuteTrack(t.sid, o));
          }
        }),
        !0);
  }
  getPublicationForTrack(e) {
    let t;
    return (
      this.trackPublications.forEach((i) => {
        const r = i.track;
        r &&
          (e instanceof MediaStreamTrack
            ? (r instanceof me || r instanceof be) &&
              r.mediaStreamTrack === e &&
              (t = i)
            : e === r && (t = i));
      }),
      t
    );
  }
  waitForPendingPublicationOfSource(e) {
    return m(this, void 0, void 0, function* () {
      const t = Array.from(this.pendingPublishPromises.entries()).find((i) => {
        let [r] = i;
        return r.source === e;
      });
      if (t) return t[1];
    });
  }
}
class Ac extends Xe {
  constructor(e, t, i, r) {
    super(e, t.sid, t.name, r),
      (this.track = void 0),
      (this.allowed = !0),
      (this.disabled = !1),
      (this.currentVideoQuality = Me.HIGH),
      (this.handleEnded = (s) => {
        this.setTrack(void 0), this.emit(A.Ended, s);
      }),
      (this.handleVisibilityChange = (s) => {
        this.log.debug(
          "adaptivestream video visibility "
            .concat(this.trackSid, ", visible=")
            .concat(s),
          this.logContext
        ),
          (this.disabled = !s),
          this.emitTrackUpdate();
      }),
      (this.handleVideoDimensionsChange = (s) => {
        this.log.debug(
          "adaptivestream video dimensions "
            .concat(s.width, "x")
            .concat(s.height),
          this.logContext
        ),
          (this.videoDimensions = s),
          this.emitTrackUpdate();
      }),
      (this.subscribed = i),
      this.updateInfo(t);
  }
  setSubscribed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    (this.subscribed = e), e && (this.allowed = !0);
    const r = new ui({
      trackSids: [this.trackSid],
      subscribe: this.subscribed,
      participantTracks: [
        new Sa({ participantSid: "", trackSids: [this.trackSid] }),
      ],
    });
    this.emit(A.UpdateSubscription, r),
      this.emitSubscriptionUpdateIfChanged(t),
      this.emitPermissionUpdateIfChanged(i);
  }
  get subscriptionStatus() {
    return this.subscribed === !1
      ? Xe.SubscriptionStatus.Unsubscribed
      : super.isSubscribed
      ? Xe.SubscriptionStatus.Subscribed
      : Xe.SubscriptionStatus.Desired;
  }
  get permissionStatus() {
    return this.allowed
      ? Xe.PermissionStatus.Allowed
      : Xe.PermissionStatus.NotAllowed;
  }
  get isSubscribed() {
    return this.subscribed === !1 ? !1 : super.isSubscribed;
  }
  get isDesired() {
    return this.subscribed !== !1;
  }
  get isEnabled() {
    return !this.disabled;
  }
  setEnabled(e) {
    !this.isManualOperationAllowed() ||
      this.disabled === !e ||
      ((this.disabled = !e), this.emitTrackUpdate());
  }
  setVideoQuality(e) {
    !this.isManualOperationAllowed() ||
      this.currentVideoQuality === e ||
      ((this.currentVideoQuality = e),
      (this.videoDimensions = void 0),
      this.emitTrackUpdate());
  }
  setVideoDimensions(e) {
    var t, i;
    this.isManualOperationAllowed() &&
      ((((t = this.videoDimensions) === null || t === void 0
        ? void 0
        : t.width) === e.width &&
        ((i = this.videoDimensions) === null || i === void 0
          ? void 0
          : i.height) === e.height) ||
        (this.track instanceof pn && (this.videoDimensions = e),
        (this.currentVideoQuality = void 0),
        this.emitTrackUpdate()));
  }
  setVideoFPS(e) {
    this.isManualOperationAllowed() &&
      this.track instanceof pn &&
      this.fps !== e &&
      ((this.fps = e), this.emitTrackUpdate());
  }
  get videoQuality() {
    return this.currentVideoQuality;
  }
  setTrack(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus,
      r = this.track;
    r !== e &&
      (r &&
        (r.off(A.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        r.off(A.VisibilityChanged, this.handleVisibilityChange),
        r.off(A.Ended, this.handleEnded),
        r.detach(),
        r.stopMonitor(),
        this.emit(A.Unsubscribed, r)),
      super.setTrack(e),
      e &&
        ((e.sid = this.trackSid),
        e.on(A.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        e.on(A.VisibilityChanged, this.handleVisibilityChange),
        e.on(A.Ended, this.handleEnded),
        this.emit(A.Subscribed, e)),
      this.emitPermissionUpdateIfChanged(i),
      this.emitSubscriptionUpdateIfChanged(t));
  }
  setAllowed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    (this.allowed = e),
      this.emitPermissionUpdateIfChanged(i),
      this.emitSubscriptionUpdateIfChanged(t);
  }
  setSubscriptionError(e) {
    this.emit(A.SubscriptionFailed, e);
  }
  updateInfo(e) {
    super.updateInfo(e);
    const t = this.metadataMuted;
    (this.metadataMuted = e.muted),
      this.track
        ? this.track.setMuted(e.muted)
        : t !== e.muted && this.emit(e.muted ? A.Muted : A.Unmuted);
  }
  emitSubscriptionUpdateIfChanged(e) {
    const t = this.subscriptionStatus;
    e !== t && this.emit(A.SubscriptionStatusChanged, t, e);
  }
  emitPermissionUpdateIfChanged(e) {
    this.permissionStatus !== e &&
      this.emit(A.SubscriptionPermissionChanged, this.permissionStatus, e);
  }
  isManualOperationAllowed() {
    return this.kind === R.Kind.Video && this.isAdaptiveStream
      ? (this.log.warn(
          "adaptive stream is enabled, cannot change video track settings",
          this.logContext
        ),
        !1)
      : this.isDesired
      ? !0
      : (this.log.warn(
          "cannot update track settings when not subscribed",
          this.logContext
        ),
        !1);
  }
  get isAdaptiveStream() {
    return this.track instanceof pn && this.track.isAdaptiveStream;
  }
  emitTrackUpdate() {
    const e = new Ea({
      trackSids: [this.trackSid],
      disabled: this.disabled,
      fps: this.fps,
    });
    this.videoDimensions
      ? ((e.width = Math.ceil(this.videoDimensions.width)),
        (e.height = Math.ceil(this.videoDimensions.height)))
      : this.currentVideoQuality !== void 0
      ? (e.quality = this.currentVideoQuality)
      : (e.quality = Me.HIGH),
      this.emit(A.UpdateSettings, e);
  }
}
class ni extends xc {
  static fromParticipantInfo(e, t, i) {
    return new ni(e, t.sid, t.identity, t.name, t.metadata, i, t.kind);
  }
  get logContext() {
    return Object.assign(Object.assign({}, super.logContext), {
      rpID: this.sid,
      remoteParticipant: this.identity,
    });
  }
  constructor(e, t, i, r, s, o) {
    let a =
      arguments.length > 6 && arguments[6] !== void 0
        ? arguments[6]
        : Xn.STANDARD;
    super(t, i || "", r, s, o, a),
      (this.signalClient = e),
      (this.trackPublications = new Map()),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.volumeMap = new Map());
  }
  addTrackPublication(e) {
    super.addTrackPublication(e),
      e.on(A.UpdateSettings, (t) => {
        this.log.debug(
          "send update settings",
          Object.assign(Object.assign({}, this.logContext), Q(e))
        ),
          this.signalClient.sendUpdateTrackSettings(t);
      }),
      e.on(A.UpdateSubscription, (t) => {
        t.participantTracks.forEach((i) => {
          i.participantSid = this.sid;
        }),
          this.signalClient.sendUpdateSubscription(t);
      }),
      e.on(A.SubscriptionPermissionChanged, (t) => {
        this.emit(E.TrackSubscriptionPermissionChanged, e, t);
      }),
      e.on(A.SubscriptionStatusChanged, (t) => {
        this.emit(E.TrackSubscriptionStatusChanged, e, t);
      }),
      e.on(A.Subscribed, (t) => {
        this.emit(E.TrackSubscribed, t, e);
      }),
      e.on(A.Unsubscribed, (t) => {
        this.emit(E.TrackUnsubscribed, t, e);
      }),
      e.on(A.SubscriptionFailed, (t) => {
        this.emit(E.TrackSubscriptionFailed, e.trackSid, t);
      });
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setVolume(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : R.Source.Microphone;
    this.volumeMap.set(t, e);
    const i = this.getTrackPublication(t);
    i && i.track && i.track.setVolume(e);
  }
  getVolume() {
    let e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : R.Source.Microphone;
    const t = this.getTrackPublication(e);
    return t && t.track ? t.track.getVolume() : this.volumeMap.get(e);
  }
  addSubscribedMediaTrack(e, t, i, r, s, o) {
    let a = this.getTrackPublicationBySid(t);
    if (
      (a ||
        t.startsWith("TR") ||
        this.trackPublications.forEach((u) => {
          !a && e.kind === u.kind.toString() && (a = u);
        }),
      !a)
    ) {
      if (o === 0) {
        this.log.error(
          "could not find published track",
          Object.assign(Object.assign({}, this.logContext), { trackSid: t })
        ),
          this.emit(E.TrackSubscriptionFailed, t);
        return;
      }
      o === void 0 && (o = 20),
        setTimeout(() => {
          this.addSubscribedMediaTrack(e, t, i, r, s, o - 1);
        }, 150);
      return;
    }
    if (e.readyState === "ended") {
      this.log.error(
        "unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()",
        Object.assign(Object.assign({}, this.logContext), Q(a))
      ),
        this.emit(E.TrackSubscriptionFailed, t);
      return;
    }
    const c = e.kind === "video";
    let d;
    return (
      c
        ? (d = new pn(e, t, r, s))
        : (d = new fn(e, t, r, this.audioContext, this.audioOutput)),
      (d.source = a.source),
      (d.isMuted = a.isMuted),
      d.setMediaStream(i),
      d.start(),
      a.setTrack(d),
      this.volumeMap.has(a.source) &&
        d instanceof fn &&
        d.setVolume(this.volumeMap.get(a.source)),
      a
    );
  }
  get hasMetadata() {
    return !!this.participantInfo;
  }
  getTrackPublicationBySid(e) {
    return this.trackPublications.get(e);
  }
  updateInfo(e) {
    if (!super.updateInfo(e)) return !1;
    const t = new Map(),
      i = new Map();
    return (
      e.tracks.forEach((r) => {
        var s, o;
        let a = this.getTrackPublicationBySid(r.sid);
        if (a) a.updateInfo(r);
        else {
          const c = R.kindFromProto(r.type);
          if (!c) return;
          (a = new Ac(
            c,
            r,
            (s = this.signalClient.connectOptions) === null || s === void 0
              ? void 0
              : s.autoSubscribe,
            {
              loggerContextCb: () => this.logContext,
              loggerName:
                (o = this.loggerOptions) === null || o === void 0
                  ? void 0
                  : o.loggerName,
            }
          )),
            a.updateInfo(r),
            i.set(r.sid, a);
          const d = Array.from(this.trackPublications.values()).find(
            (u) => u.source === a?.source
          );
          d &&
            a.source !== R.Source.Unknown &&
            this.log.debug(
              "received a second track publication for "
                .concat(this.identity, " with the same source: ")
                .concat(a.source),
              Object.assign(Object.assign({}, this.logContext), {
                oldTrack: Q(d),
                newTrack: Q(a),
              })
            ),
            this.addTrackPublication(a);
        }
        t.set(r.sid, a);
      }),
      this.trackPublications.forEach((r) => {
        t.has(r.trackSid) ||
          (this.log.trace(
            "detected removed track on remote participant, unpublishing",
            Object.assign(Object.assign({}, this.logContext), Q(r))
          ),
          this.unpublishTrack(r.trackSid, !0));
      }),
      i.forEach((r) => {
        this.emit(E.TrackPublished, r);
      }),
      !0
    );
  }
  unpublishTrack(e, t) {
    const i = this.trackPublications.get(e);
    if (!i) return;
    const { track: r } = i;
    switch (
      (r && (r.stop(), i.setTrack(void 0)),
      this.trackPublications.delete(e),
      i.kind)
    ) {
      case R.Kind.Audio:
        this.audioTrackPublications.delete(e);
        break;
      case R.Kind.Video:
        this.videoTrackPublications.delete(e);
        break;
    }
    t && this.emit(E.TrackUnpublished, i);
  }
  setAudioOutput(e) {
    return m(this, void 0, void 0, function* () {
      this.audioOutput = e;
      const t = [];
      this.audioTrackPublications.forEach((i) => {
        var r;
        i.track instanceof fn &&
          t.push(
            i.track.setSinkId(
              (r = e.deviceId) !== null && r !== void 0 ? r : "default"
            )
          );
      }),
        yield Promise.all(t);
    });
  }
  emit(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    return (
      this.log.trace(
        "participant event",
        Object.assign(Object.assign({}, this.logContext), { event: e, args: i })
      ),
      super.emit(e, ...i)
    );
  }
}
var q;
(function (n) {
  (n.Disconnected = "disconnected"),
    (n.Connecting = "connecting"),
    (n.Connected = "connected"),
    (n.Reconnecting = "reconnecting"),
    (n.SignalReconnecting = "signalReconnecting");
})(q || (q = {}));
const Of = 4 * 1e3;
class Nf extends $e.EventEmitter {
  constructor(e) {
    var t, i, r;
    super(),
      (t = this),
      (this.state = q.Disconnected),
      (this.activeSpeakers = []),
      (this.isE2EEEnabled = !1),
      (this.audioEnabled = !0),
      (this.isVideoPlaybackBlocked = !1),
      (this.log = K),
      (this.bufferedEvents = []),
      (this.isResuming = !1),
      (this.connect = (s, o, a) =>
        m(this, void 0, void 0, function* () {
          var c;
          if (!Vh())
            throw it()
              ? Error("WebRTC isn't detected, have you called registerGlobals?")
              : Error(
                  "LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC."
                );
          const d = yield this.disconnectLock.lock();
          if (this.state === q.Connected)
            return (
              this.log.info(
                "already connected to room ".concat(this.name),
                this.logContext
              ),
              d(),
              Promise.resolve()
            );
          if (this.connectFuture) return d(), this.connectFuture.promise;
          this.setAndEmitConnectionState(q.Connecting),
            ((c = this.regionUrlProvider) === null || c === void 0
              ? void 0
              : c.getServerUrl().toString()) !== s &&
              ((this.regionUrl = void 0), (this.regionUrlProvider = void 0)),
            mr(new URL(s)) &&
              (this.regionUrlProvider === void 0
                ? (this.regionUrlProvider = new io(s, o))
                : this.regionUrlProvider.updateToken(o),
              this.regionUrlProvider
                .fetchRegionSettings()
                .then((h) => {
                  var f;
                  (f = this.regionUrlProvider) === null ||
                    f === void 0 ||
                    f.setServerReportedRegions(h);
                })
                .catch((h) => {
                  this.log.warn(
                    "could not fetch region settings",
                    Object.assign(Object.assign({}, this.logContext), {
                      error: h,
                    })
                  );
                }));
          const u = (h, f, g) =>
              m(this, void 0, void 0, function* () {
                var p, b;
                this.abortController && this.abortController.abort();
                const v = new AbortController();
                (this.abortController = v), d?.();
                try {
                  yield this.attemptConnection(g ?? s, o, a, v),
                    (this.abortController = void 0),
                    h();
                } catch (P) {
                  if (
                    this.regionUrlProvider &&
                    P instanceof Z &&
                    P.reason !== ke.Cancelled &&
                    P.reason !== ke.NotAllowed
                  ) {
                    let I = null;
                    try {
                      I = yield this.regionUrlProvider.getNextBestRegionUrl(
                        (p = this.abortController) === null || p === void 0
                          ? void 0
                          : p.signal
                      );
                    } catch (S) {
                      if (
                        S instanceof Z &&
                        (S.status === 401 || S.reason === ke.Cancelled)
                      ) {
                        this.handleDisconnect(
                          this.options.stopLocalTrackOnUnpublish
                        ),
                          f(S);
                        return;
                      }
                    }
                    I &&
                    !(
                      !((b = this.abortController) === null || b === void 0) &&
                      b.signal.aborted
                    )
                      ? (this.log.info(
                          "Initial connection failed with ConnectionError: "
                            .concat(
                              P.message,
                              ". Retrying with another region: "
                            )
                            .concat(I),
                          this.logContext
                        ),
                        this.recreateEngine(),
                        yield u(h, f, I))
                      : (this.handleDisconnect(
                          this.options.stopLocalTrackOnUnpublish
                        ),
                        f(P));
                  } else this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), f(P);
                }
              }),
            l = this.regionUrl;
          return (
            (this.regionUrl = void 0),
            (this.connectFuture = new kc(
              (h, f) => {
                u(h, f, l);
              },
              () => {
                this.clearConnectionFutures();
              }
            )),
            this.connectFuture.promise
          );
        })),
      (this.connectSignal = (s, o, a, c, d, u) =>
        m(this, void 0, void 0, function* () {
          var l, h, f;
          const g = yield a.join(
            s,
            o,
            {
              autoSubscribe: c.autoSubscribe,
              adaptiveStream:
                typeof d.adaptiveStream == "object" ? !0 : d.adaptiveStream,
              maxRetries: c.maxRetries,
              e2eeEnabled: !!this.e2eeManager,
              websocketTimeout: c.websocketTimeout,
            },
            u.signal
          );
          let p = g.serverInfo;
          if (
            (p || (p = { version: g.serverVersion, region: g.serverRegion }),
            (this.serverInfo = p),
            this.log.debug(
              "connected to Livekit Server ".concat(
                Object.entries(p)
                  .map((b) => {
                    let [v, P] = b;
                    return "".concat(v, ": ").concat(P);
                  })
                  .join(", ")
              ),
              {
                room: (l = g.room) === null || l === void 0 ? void 0 : l.name,
                roomSid: (h = g.room) === null || h === void 0 ? void 0 : h.sid,
                identity:
                  (f = g.participant) === null || f === void 0
                    ? void 0
                    : f.identity,
              }
            ),
            !p.version)
          )
            throw new Sh("unknown server version");
          return (
            p.version === "0.15.1" &&
              this.options.dynacast &&
              (this.log.debug(
                "disabling dynacast due to server version",
                this.logContext
              ),
              (d.dynacast = !1)),
            g
          );
        })),
      (this.applyJoinResponse = (s) => {
        const o = s.participant;
        if (
          ((this.localParticipant.sid = o.sid),
          (this.localParticipant.identity = o.identity),
          this.localParticipant.setEnabledPublishCodecs(s.enabledPublishCodecs),
          this.options.e2ee && this.e2eeManager)
        )
          try {
            this.e2eeManager.setSifTrailer(s.sifTrailer);
          } catch (a) {
            this.log.error(
              a instanceof Error ? a.message : "Could not set SifTrailer",
              Object.assign(Object.assign({}, this.logContext), { error: a })
            );
          }
        this.handleParticipantUpdates([o, ...s.otherParticipants]),
          s.room && this.handleRoomUpdate(s.room);
      }),
      (this.attemptConnection = (s, o, a, c) =>
        m(this, void 0, void 0, function* () {
          var d, u, l;
          this.state === q.Reconnecting ||
          this.isResuming ||
          (!((d = this.engine) === null || d === void 0) && d.pendingReconnect)
            ? (this.log.info(
                "Reconnection attempt replaced by new connection attempt",
                this.logContext
              ),
              this.recreateEngine())
            : this.maybeCreateEngine(),
            !((u = this.regionUrlProvider) === null || u === void 0) &&
              u.isCloud() &&
              this.engine.setRegionUrlProvider(this.regionUrlProvider),
            this.acquireAudioContext(),
            (this.connOptions = Object.assign(Object.assign({}, Ur), a)),
            this.connOptions.rtcConfig &&
              (this.engine.rtcConfig = this.connOptions.rtcConfig),
            this.connOptions.peerConnectionTimeout &&
              (this.engine.peerConnectionTimeout =
                this.connOptions.peerConnectionTimeout);
          try {
            const h = yield this.connectSignal(
              s,
              o,
              this.engine,
              this.connOptions,
              this.options,
              c
            );
            this.applyJoinResponse(h),
              this.setupLocalParticipantEvents(),
              this.emit(C.SignalConnected);
          } catch (h) {
            yield this.engine.close(), this.recreateEngine();
            const f = new Z("could not establish signal connection");
            throw (
              (h instanceof Error &&
                (f.message = "".concat(f.message, ": ").concat(h.message)),
              h instanceof Z && ((f.reason = h.reason), (f.status = h.status)),
              this.log.debug(
                "error trying to establish signal connection",
                Object.assign(Object.assign({}, this.logContext), { error: h })
              ),
              f)
            );
          }
          if (c.signal.aborted)
            throw (
              (yield this.engine.close(),
              this.recreateEngine(),
              new Z("Connection attempt aborted"))
            );
          try {
            yield this.engine.waitForPCInitialConnection(
              this.connOptions.peerConnectionTimeout,
              c
            );
          } catch (h) {
            throw (yield this.engine.close(), this.recreateEngine(), h);
          }
          _e() &&
            this.options.disconnectOnPageLeave &&
            (window.addEventListener("pagehide", this.onPageLeave),
            window.addEventListener("beforeunload", this.onPageLeave)),
            _e() &&
              (document.addEventListener("freeze", this.onPageLeave),
              (l = navigator.mediaDevices) === null ||
                l === void 0 ||
                l.addEventListener("devicechange", this.handleDeviceChange)),
            this.setAndEmitConnectionState(q.Connected),
            this.emit(C.Connected),
            this.registerConnectionReconcile();
        })),
      (this.disconnect = function () {
        for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
          o[a] = arguments[a];
        return m(t, [...o], void 0, function () {
          var c = this;
          let d =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          return (function* () {
            var u, l, h, f;
            const g = yield c.disconnectLock.lock();
            try {
              if (c.state === q.Disconnected) {
                c.log.debug("already disconnected", c.logContext);
                return;
              }
              c.log.info(
                "disconnect from room",
                Object.assign({}, c.logContext)
              ),
                (c.state === q.Connecting ||
                  c.state === q.Reconnecting ||
                  c.isResuming) &&
                  (c.log.warn("abort connection attempt", c.logContext),
                  (u = c.abortController) === null || u === void 0 || u.abort(),
                  (h =
                    (l = c.connectFuture) === null || l === void 0
                      ? void 0
                      : l.reject) === null ||
                    h === void 0 ||
                    h.call(l, new Z("Client initiated disconnect")),
                  (c.connectFuture = void 0)),
                (!((f = c.engine) === null || f === void 0) &&
                  f.client.isDisconnected) ||
                  (yield c.engine.client.sendLeave()),
                c.engine && (yield c.engine.close()),
                c.handleDisconnect(d, jt.CLIENT_INITIATED),
                (c.engine = void 0);
            } finally {
              g();
            }
          })();
        });
      }),
      (this.onPageLeave = () =>
        m(this, void 0, void 0, function* () {
          this.log.info("Page leave detected, disconnecting", this.logContext),
            yield this.disconnect();
        })),
      (this.startAudio = () =>
        m(this, void 0, void 0, function* () {
          const s = [],
            o = nt();
          if (o && o.os === "iOS") {
            const a = "livekit-dummy-audio-el";
            let c = document.getElementById(a);
            if (!c) {
              (c = document.createElement("audio")),
                (c.id = a),
                (c.autoplay = !0),
                (c.hidden = !0);
              const d = Pi();
              d.enabled = !0;
              const u = new MediaStream([d]);
              (c.srcObject = u),
                document.addEventListener("visibilitychange", () => {
                  c &&
                    ((c.srcObject = document.hidden ? null : u),
                    document.hidden ||
                      (this.log.debug(
                        "page visible again, triggering startAudio to resume playback and update playback status",
                        this.logContext
                      ),
                      this.startAudio()));
                }),
                document.body.append(c),
                this.once(C.Disconnected, () => {
                  c?.remove(), (c = null);
                });
            }
            s.push(c);
          }
          this.remoteParticipants.forEach((a) => {
            a.audioTrackPublications.forEach((c) => {
              c.track &&
                c.track.attachedElements.forEach((d) => {
                  s.push(d);
                });
            });
          });
          try {
            yield Promise.all([
              this.acquireAudioContext(),
              ...s.map((a) => ((a.muted = !1), a.play())),
            ]),
              this.handleAudioPlaybackStarted();
          } catch (a) {
            throw (this.handleAudioPlaybackFailed(a), a);
          }
        })),
      (this.startVideo = () =>
        m(this, void 0, void 0, function* () {
          const s = [];
          for (const o of this.remoteParticipants.values())
            o.videoTrackPublications.forEach((a) => {
              var c;
              (c = a.track) === null ||
                c === void 0 ||
                c.attachedElements.forEach((d) => {
                  s.includes(d) || s.push(d);
                });
            });
          yield Promise.all(s.map((o) => o.play()))
            .then(() => {
              this.handleVideoPlaybackStarted();
            })
            .catch((o) => {
              o.name === "NotAllowedError"
                ? this.handleVideoPlaybackFailed()
                : this.log.warn(
                    "Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler",
                    this.logContext
                  );
            });
        })),
      (this.handleRestarting = () => {
        this.clearConnectionReconcile(), (this.isResuming = !1);
        for (const s of this.remoteParticipants.values())
          this.handleParticipantDisconnected(s.identity, s);
        this.setAndEmitConnectionState(q.Reconnecting) &&
          this.emit(C.Reconnecting);
      }),
      (this.handleSignalRestarted = (s) =>
        m(this, void 0, void 0, function* () {
          this.log.debug(
            "signal reconnected to server, region ".concat(s.serverRegion),
            Object.assign(Object.assign({}, this.logContext), {
              region: s.serverRegion,
            })
          ),
            (this.bufferedEvents = []),
            this.applyJoinResponse(s);
          try {
            yield this.localParticipant.republishAllTracks(void 0, !0);
          } catch (o) {
            this.log.error(
              "error trying to re-publish tracks after reconnection",
              Object.assign(Object.assign({}, this.logContext), { error: o })
            );
          }
          try {
            yield this.engine.waitForRestarted(),
              this.log.debug(
                "fully reconnected to server",
                Object.assign(Object.assign({}, this.logContext), {
                  region: s.serverRegion,
                })
              );
          } catch {
            return;
          }
          this.setAndEmitConnectionState(q.Connected),
            this.emit(C.Reconnected),
            this.registerConnectionReconcile(),
            this.emitBufferedEvents();
        })),
      (this.handleParticipantUpdates = (s) => {
        s.forEach((o) => {
          var a;
          if (o.identity === this.localParticipant.identity) {
            this.localParticipant.updateInfo(o);
            return;
          }
          o.identity === "" &&
            (o.identity =
              (a = this.sidToIdentity.get(o.sid)) !== null && a !== void 0
                ? a
                : "");
          let c = this.remoteParticipants.get(o.identity);
          o.state === $i.DISCONNECTED
            ? this.handleParticipantDisconnected(o.identity, c)
            : (c = this.getOrCreateParticipant(o.identity, o));
        });
      }),
      (this.handleActiveSpeakersUpdate = (s) => {
        const o = [],
          a = {};
        s.forEach((c) => {
          if (((a[c.sid] = !0), c.sid === this.localParticipant.sid))
            (this.localParticipant.audioLevel = c.level),
              this.localParticipant.setIsSpeaking(!0),
              o.push(this.localParticipant);
          else {
            const d = this.getRemoteParticipantBySid(c.sid);
            d && ((d.audioLevel = c.level), d.setIsSpeaking(!0), o.push(d));
          }
        }),
          a[this.localParticipant.sid] ||
            ((this.localParticipant.audioLevel = 0),
            this.localParticipant.setIsSpeaking(!1)),
          this.remoteParticipants.forEach((c) => {
            a[c.sid] || ((c.audioLevel = 0), c.setIsSpeaking(!1));
          }),
          (this.activeSpeakers = o),
          this.emitWhenConnected(C.ActiveSpeakersChanged, o);
      }),
      (this.handleSpeakersChanged = (s) => {
        const o = new Map();
        this.activeSpeakers.forEach((c) => {
          const d = this.remoteParticipants.get(c.identity);
          (d && d.sid !== c.sid) || o.set(c.sid, c);
        }),
          s.forEach((c) => {
            let d = this.getRemoteParticipantBySid(c.sid);
            c.sid === this.localParticipant.sid && (d = this.localParticipant),
              d &&
                ((d.audioLevel = c.level),
                d.setIsSpeaking(c.active),
                c.active ? o.set(c.sid, d) : o.delete(c.sid));
          });
        const a = Array.from(o.values());
        a.sort((c, d) => d.audioLevel - c.audioLevel),
          (this.activeSpeakers = a),
          this.emitWhenConnected(C.ActiveSpeakersChanged, a);
      }),
      (this.handleStreamStateUpdate = (s) => {
        s.streamStates.forEach((o) => {
          const a = this.getRemoteParticipantBySid(o.participantSid);
          if (!a) return;
          const c = a.getTrackPublicationBySid(o.trackSid);
          if (!c || !c.track) return;
          const d = R.streamStateFromProto(o.state);
          d !== c.track.streamState &&
            ((c.track.streamState = d),
            a.emit(E.TrackStreamStateChanged, c, c.track.streamState),
            this.emitWhenConnected(
              C.TrackStreamStateChanged,
              c,
              c.track.streamState,
              a
            ));
        });
      }),
      (this.handleSubscriptionPermissionUpdate = (s) => {
        const o = this.getRemoteParticipantBySid(s.participantSid);
        if (!o) return;
        const a = o.getTrackPublicationBySid(s.trackSid);
        a && a.setAllowed(s.allowed);
      }),
      (this.handleSubscriptionError = (s) => {
        const o = Array.from(this.remoteParticipants.values()).find((c) =>
          c.trackPublications.has(s.trackSid)
        );
        if (!o) return;
        const a = o.getTrackPublicationBySid(s.trackSid);
        a && a.setSubscriptionError(s.err);
      }),
      (this.handleDataPacket = (s) => {
        const o = this.remoteParticipants.get(s.participantIdentity);
        s.value.case === "user"
          ? this.handleUserPacket(o, s.value.value, s.kind)
          : s.value.case === "transcription"
          ? this.handleTranscription(o, s.value.value)
          : s.value.case === "sipDtmf"
          ? this.handleSipDtmf(o, s.value.value)
          : s.value.case === "chatMessage"
          ? this.handleChatMessage(o, s.value.value)
          : s.value.case === "metrics" && this.handleMetrics(s.value.value, o);
      }),
      (this.handleUserPacket = (s, o, a) => {
        this.emit(C.DataReceived, o.payload, s, a, o.topic),
          s?.emit(E.DataReceived, o.payload, a);
      }),
      (this.handleSipDtmf = (s, o) => {
        this.emit(C.SipDTMFReceived, o, s), s?.emit(E.SipDTMFReceived, o);
      }),
      (this.bufferedSegments = new Map()),
      (this.handleTranscription = (s, o) => {
        const a =
            o.transcribedParticipantIdentity === this.localParticipant.identity
              ? this.localParticipant
              : this.getParticipantByIdentity(o.transcribedParticipantIdentity),
          c = a?.trackPublications.get(o.trackId),
          d = $h(o, this.transcriptionReceivedTimes);
        c?.emit(A.TranscriptionReceived, d),
          a?.emit(E.TranscriptionReceived, d, c),
          this.emit(C.TranscriptionReceived, d, a, c);
      }),
      (this.handleChatMessage = (s, o) => {
        const a = Qh(o);
        this.emit(C.ChatMessage, a, s);
      }),
      (this.handleMetrics = (s, o) => {
        this.emit(C.MetricsReceived, s, o);
      }),
      (this.handleAudioPlaybackStarted = () => {
        this.canPlaybackAudio ||
          ((this.audioEnabled = !0),
          this.emit(C.AudioPlaybackStatusChanged, !0));
      }),
      (this.handleAudioPlaybackFailed = (s) => {
        this.log.warn(
          "could not playback audio",
          Object.assign(Object.assign({}, this.logContext), { error: s })
        ),
          this.canPlaybackAudio &&
            ((this.audioEnabled = !1),
            this.emit(C.AudioPlaybackStatusChanged, !1));
      }),
      (this.handleVideoPlaybackStarted = () => {
        this.isVideoPlaybackBlocked &&
          ((this.isVideoPlaybackBlocked = !1),
          this.emit(C.VideoPlaybackStatusChanged, !0));
      }),
      (this.handleVideoPlaybackFailed = () => {
        this.isVideoPlaybackBlocked ||
          ((this.isVideoPlaybackBlocked = !0),
          this.emit(C.VideoPlaybackStatusChanged, !1));
      }),
      (this.handleDeviceChange = () =>
        m(this, void 0, void 0, function* () {
          const s = yield ge.getInstance().getDevices(void 0, !1),
            o = ["audiooutput"];
          for (let a of o) {
            const c = s.filter((d) => d.kind === a);
            c.length > 0 &&
              !c.find((d) => d.deviceId === this.getActiveDevice(a)) &&
              (yield this.switchActiveDevice(a, c[0].deviceId));
          }
          this.emit(C.MediaDevicesChanged);
        })),
      (this.handleRoomUpdate = (s) => {
        const o = this.roomInfo;
        (this.roomInfo = s),
          o &&
            o.metadata !== s.metadata &&
            this.emitWhenConnected(C.RoomMetadataChanged, s.metadata),
          o?.activeRecording !== s.activeRecording &&
            this.emitWhenConnected(C.RecordingStatusChanged, s.activeRecording);
      }),
      (this.handleConnectionQualityUpdate = (s) => {
        s.updates.forEach((o) => {
          if (o.participantSid === this.localParticipant.sid) {
            this.localParticipant.setConnectionQuality(o.quality);
            return;
          }
          const a = this.getRemoteParticipantBySid(o.participantSid);
          a && a.setConnectionQuality(o.quality);
        });
      }),
      (this.onLocalParticipantMetadataChanged = (s) => {
        this.emit(C.ParticipantMetadataChanged, s, this.localParticipant);
      }),
      (this.onLocalParticipantNameChanged = (s) => {
        this.emit(C.ParticipantNameChanged, s, this.localParticipant);
      }),
      (this.onLocalAttributesChanged = (s) => {
        this.emit(C.ParticipantAttributesChanged, s, this.localParticipant);
      }),
      (this.onLocalTrackMuted = (s) => {
        this.emit(C.TrackMuted, s, this.localParticipant);
      }),
      (this.onLocalTrackUnmuted = (s) => {
        this.emit(C.TrackUnmuted, s, this.localParticipant);
      }),
      (this.onTrackProcessorUpdate = (s) => {
        var o;
        (o = s?.onPublish) === null || o === void 0 || o.call(s, this);
      }),
      (this.onLocalTrackPublished = (s) =>
        m(this, void 0, void 0, function* () {
          var o, a, c, d, u, l;
          (o = s.track) === null ||
            o === void 0 ||
            o.on(A.TrackProcessorUpdate, this.onTrackProcessorUpdate),
            (a = s.track) === null ||
              a === void 0 ||
              a.on(A.Restarted, this.onLocalTrackRestarted),
            (u =
              (d =
                (c = s.track) === null || c === void 0
                  ? void 0
                  : c.getProcessor()) === null || d === void 0
                ? void 0
                : d.onPublish) === null ||
              u === void 0 ||
              u.call(d, this),
            this.emit(C.LocalTrackPublished, s, this.localParticipant),
            s.track instanceof me &&
              (yield s.track.checkForSilence()) &&
              this.emit(C.LocalAudioSilenceDetected, s);
          const h = yield (l = s.track) === null || l === void 0
              ? void 0
              : l.getDeviceId(),
            f = Us(s.source);
          f &&
            h &&
            h !== this.localParticipant.activeDeviceMap.get(f) &&
            (this.localParticipant.activeDeviceMap.set(f, h),
            this.emit(C.ActiveDeviceChanged, f, h));
        })),
      (this.onLocalTrackUnpublished = (s) => {
        var o, a;
        (o = s.track) === null ||
          o === void 0 ||
          o.off(A.TrackProcessorUpdate, this.onTrackProcessorUpdate),
          (a = s.track) === null ||
            a === void 0 ||
            a.off(A.Restarted, this.onLocalTrackRestarted),
          this.emit(C.LocalTrackUnpublished, s, this.localParticipant);
      }),
      (this.onLocalTrackRestarted = (s) =>
        m(this, void 0, void 0, function* () {
          const o = yield s.getDeviceId(!1),
            a = Us(s.source);
          a &&
            o &&
            o !== this.localParticipant.activeDeviceMap.get(a) &&
            (this.log.debug(
              "local track restarted, setting "
                .concat(a, " ")
                .concat(o, " active"),
              this.logContext
            ),
            this.localParticipant.activeDeviceMap.set(a, o),
            this.emit(C.ActiveDeviceChanged, a, o));
        })),
      (this.onLocalConnectionQualityChanged = (s) => {
        this.emit(C.ConnectionQualityChanged, s, this.localParticipant);
      }),
      (this.onMediaDevicesError = (s) => {
        this.emit(C.MediaDevicesError, s);
      }),
      (this.onLocalParticipantPermissionsChanged = (s) => {
        this.emit(C.ParticipantPermissionsChanged, s, this.localParticipant);
      }),
      (this.onLocalChatMessageSent = (s) => {
        this.emit(C.ChatMessage, s, this.localParticipant);
      }),
      this.setMaxListeners(100),
      (this.remoteParticipants = new Map()),
      (this.sidToIdentity = new Map()),
      (this.options = Object.assign(Object.assign({}, lf), e)),
      (this.log = tt(
        (i = this.options.loggerName) !== null && i !== void 0 ? i : Be.Room
      )),
      (this.transcriptionReceivedTimes = new Map()),
      (this.options.audioCaptureDefaults = Object.assign(
        Object.assign({}, Tc),
        e?.audioCaptureDefaults
      )),
      (this.options.videoCaptureDefaults = Object.assign(
        Object.assign({}, Cc),
        e?.videoCaptureDefaults
      )),
      (this.options.publishDefaults = Object.assign(
        Object.assign({}, uf),
        e?.publishDefaults
      )),
      this.maybeCreateEngine(),
      (this.disconnectLock = new Re()),
      (this.localParticipant = new kr("", "", this.engine, this.options)),
      this.options.videoCaptureDefaults.deviceId &&
        this.localParticipant.activeDeviceMap.set(
          "videoinput",
          et(this.options.videoCaptureDefaults.deviceId)
        ),
      this.options.audioCaptureDefaults.deviceId &&
        this.localParticipant.activeDeviceMap.set(
          "audioinput",
          et(this.options.audioCaptureDefaults.deviceId)
        ),
      !((r = this.options.audioOutput) === null || r === void 0) &&
        r.deviceId &&
        this.switchActiveDevice(
          "audiooutput",
          et(this.options.audioOutput.deviceId)
        ).catch((s) =>
          this.log.warn(
            "Could not set audio output: ".concat(s.message),
            this.logContext
          )
        ),
      this.options.e2ee && this.setupE2EE();
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      if (this.e2eeManager)
        yield Promise.all([this.localParticipant.setE2EEEnabled(e)]),
          this.localParticipant.identity !== "" &&
            this.e2eeManager.setParticipantCryptorEnabled(
              e,
              this.localParticipant.identity
            );
      else
        throw Error(
          "e2ee not configured, please set e2ee settings within the room options"
        );
    });
  }
  setupE2EE() {
    var e;
    this.options.e2ee &&
      ((this.e2eeManager = new Xh(this.options.e2ee)),
      this.e2eeManager.on(lt.ParticipantEncryptionStatusChanged, (t, i) => {
        i instanceof kr && (this.isE2EEEnabled = t),
          this.emit(C.ParticipantEncryptionStatusChanged, t, i);
      }),
      this.e2eeManager.on(lt.EncryptionError, (t) =>
        this.emit(C.EncryptionError, t)
      ),
      (e = this.e2eeManager) === null || e === void 0 || e.setup(this));
  }
  get logContext() {
    var e;
    return {
      room: this.name,
      roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid,
      participant: this.localParticipant.identity,
      pID: this.localParticipant.sid,
    };
  }
  get isRecording() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.activeRecording) !== null && t !== void 0
      ? t
      : !1;
  }
  getSid() {
    return m(this, void 0, void 0, function* () {
      return this.state === q.Disconnected
        ? ""
        : this.roomInfo && this.roomInfo.sid !== ""
        ? this.roomInfo.sid
        : new Promise((e, t) => {
            const i = (r) => {
              r.sid !== "" && (this.engine.off(N.RoomUpdate, i), e(r.sid));
            };
            this.engine.on(N.RoomUpdate, i),
              this.once(C.Disconnected, () => {
                this.engine.off(N.RoomUpdate, i),
                  t("Room disconnected before room server id was available");
              });
          });
    });
  }
  get name() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !==
      null && t !== void 0
      ? t
      : "";
  }
  get metadata() {
    var e;
    return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata;
  }
  get numParticipants() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.numParticipants) !== null && t !== void 0
      ? t
      : 0;
  }
  get numPublishers() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.numPublishers) !== null && t !== void 0
      ? t
      : 0;
  }
  maybeCreateEngine() {
    (this.engine && !this.engine.isClosed) ||
      ((this.engine = new Pf(this.options)),
      this.engine
        .on(N.ParticipantUpdate, this.handleParticipantUpdates)
        .on(N.RoomUpdate, this.handleRoomUpdate)
        .on(N.SpeakersChanged, this.handleSpeakersChanged)
        .on(N.StreamStateChanged, this.handleStreamStateUpdate)
        .on(N.ConnectionQualityUpdate, this.handleConnectionQualityUpdate)
        .on(N.SubscriptionError, this.handleSubscriptionError)
        .on(
          N.SubscriptionPermissionUpdate,
          this.handleSubscriptionPermissionUpdate
        )
        .on(N.MediaTrackAdded, (e, t, i) => {
          this.onTrackAdded(e, t, i);
        })
        .on(N.Disconnected, (e) => {
          this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e);
        })
        .on(N.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate)
        .on(N.DataPacketReceived, this.handleDataPacket)
        .on(N.Resuming, () => {
          this.clearConnectionReconcile(),
            (this.isResuming = !0),
            this.log.info("Resuming signal connection", this.logContext),
            this.setAndEmitConnectionState(q.SignalReconnecting) &&
              this.emit(C.SignalReconnecting);
        })
        .on(N.Resumed, () => {
          this.registerConnectionReconcile(),
            (this.isResuming = !1),
            this.log.info("Resumed signal connection", this.logContext),
            this.updateSubscriptions(),
            this.emitBufferedEvents(),
            this.setAndEmitConnectionState(q.Connected) &&
              this.emit(C.Reconnected);
        })
        .on(N.SignalResumed, () => {
          (this.bufferedEvents = []),
            (this.state === q.Reconnecting || this.isResuming) &&
              this.sendSyncState();
        })
        .on(N.Restarting, this.handleRestarting)
        .on(N.SignalRestarted, this.handleSignalRestarted)
        .on(N.Offline, () => {
          this.setAndEmitConnectionState(q.Reconnecting) &&
            this.emit(C.Reconnecting);
        })
        .on(N.DCBufferStatusChanged, (e, t) => {
          this.emit(C.DCBufferStatusChanged, e, t);
        })
        .on(N.LocalTrackSubscribed, (e) => {
          const t = this.localParticipant.getTrackPublications().find((i) => {
            let { trackSid: r } = i;
            return r === e;
          });
          if (!t) {
            this.log.warn(
              "could not find local track subscription for subscribed event",
              this.logContext
            );
            return;
          }
          this.localParticipant.emit(E.LocalTrackSubscribed, t),
            this.emitWhenConnected(
              C.LocalTrackSubscribed,
              t,
              this.localParticipant
            );
        }),
      this.localParticipant && this.localParticipant.setupEngine(this.engine),
      this.e2eeManager && this.e2eeManager.setupEngine(this.engine));
  }
  static getLocalDevices(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return ge.getInstance().getDevices(e, t);
  }
  prepareConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (this.state === q.Disconnected) {
        this.log.debug("prepareConnection to ".concat(e), this.logContext);
        try {
          if (mr(new URL(e)) && t) {
            this.regionUrlProvider = new io(e, t);
            const i = yield this.regionUrlProvider.getNextBestRegionUrl();
            i &&
              this.state === q.Disconnected &&
              ((this.regionUrl = i),
              yield fetch(zs(i), { method: "HEAD" }),
              this.log.debug(
                "prepared connection to ".concat(i),
                this.logContext
              ));
          } else yield fetch(zs(e), { method: "HEAD" });
        } catch (i) {
          this.log.warn(
            "could not prepare connection",
            Object.assign(Object.assign({}, this.logContext), { error: i })
          );
        }
      }
    });
  }
  getParticipantByIdentity(e) {
    return this.localParticipant.identity === e
      ? this.localParticipant
      : this.remoteParticipants.get(e);
  }
  clearConnectionFutures() {
    this.connectFuture = void 0;
  }
  simulateScenario(e, t) {
    return m(this, void 0, void 0, function* () {
      let i = () => {},
        r;
      switch (e) {
        case "signal-reconnect":
          yield this.engine.client.handleOnClose("simulate disconnect");
          break;
        case "speaker":
          r = new We({ scenario: { case: "speakerUpdate", value: 3 } });
          break;
        case "node-failure":
          r = new We({ scenario: { case: "nodeFailure", value: !0 } });
          break;
        case "server-leave":
          r = new We({ scenario: { case: "serverLeave", value: !0 } });
          break;
        case "migration":
          r = new We({ scenario: { case: "migration", value: !0 } });
          break;
        case "resume-reconnect":
          this.engine.failNext(),
            yield this.engine.client.handleOnClose(
              "simulate resume-disconnect"
            );
          break;
        case "disconnect-signal-on-resume":
          (i = () =>
            m(this, void 0, void 0, function* () {
              yield this.engine.client.handleOnClose(
                "simulate resume-disconnect"
              );
            })),
            (r = new We({
              scenario: { case: "disconnectSignalOnResume", value: !0 },
            }));
          break;
        case "disconnect-signal-on-resume-no-messages":
          (i = () =>
            m(this, void 0, void 0, function* () {
              yield this.engine.client.handleOnClose(
                "simulate resume-disconnect"
              );
            })),
            (r = new We({
              scenario: {
                case: "disconnectSignalOnResumeNoMessages",
                value: !0,
              },
            }));
          break;
        case "full-reconnect":
          (this.engine.fullReconnectOnNext = !0),
            yield this.engine.client.handleOnClose("simulate full-reconnect");
          break;
        case "force-tcp":
        case "force-tls":
          (r = new We({
            scenario: {
              case: "switchCandidateProtocol",
              value: e === "force-tls" ? 2 : 1,
            },
          })),
            (i = () =>
              m(this, void 0, void 0, function* () {
                const s = this.engine.client.onLeave;
                s &&
                  s(
                    new li({
                      reason: jt.CLIENT_INITIATED,
                      action: Bt.RECONNECT,
                    })
                  );
              }));
          break;
        case "subscriber-bandwidth":
          if (t === void 0 || typeof t != "number")
            throw new Error(
              "subscriber-bandwidth requires a number as argument"
            );
          r = new We({
            scenario: { case: "subscriberBandwidth", value: BigInt(t) },
          });
          break;
        case "leave-full-reconnect":
          r = new We({
            scenario: { case: "leaveRequestFullReconnect", value: !0 },
          });
      }
      r && (yield this.engine.client.sendSimulateScenario(r), yield i());
    });
  }
  get canPlaybackAudio() {
    return this.audioEnabled;
  }
  get canPlaybackVideo() {
    return !this.isVideoPlaybackBlocked;
  }
  getActiveDevice(e) {
    return this.localParticipant.activeDeviceMap.get(e);
  }
  switchActiveDevice(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return (function* () {
        var a, c, d, u, l, h, f;
        let g = !1,
          p = !0;
        const b = o ? { exact: r } : r;
        if (i === "audioinput") {
          const v =
            (a = s.getActiveDevice(i)) !== null && a !== void 0
              ? a
              : s.options.audioCaptureDefaults.deviceId;
          (s.options.audioCaptureDefaults.deviceId = b), (g = v !== b);
          const P = Array.from(
            s.localParticipant.audioTrackPublications.values()
          ).filter((I) => I.source === R.Source.Microphone);
          try {
            p = (yield Promise.all(
              P.map((I) => {
                var S;
                return (S = I.audioTrack) === null || S === void 0
                  ? void 0
                  : S.setDeviceId(b);
              })
            )).every((I) => I === !0);
          } catch (I) {
            throw ((s.options.audioCaptureDefaults.deviceId = v), I);
          }
        } else if (i === "videoinput") {
          const v =
            (c = s.getActiveDevice(i)) !== null && c !== void 0
              ? c
              : s.options.videoCaptureDefaults.deviceId;
          (s.options.videoCaptureDefaults.deviceId = b), (g = v !== b);
          const P = Array.from(
            s.localParticipant.videoTrackPublications.values()
          ).filter((I) => I.source === R.Source.Camera);
          try {
            p = (yield Promise.all(
              P.map((I) => {
                var S;
                return (S = I.videoTrack) === null || S === void 0
                  ? void 0
                  : S.setDeviceId(b);
              })
            )).every((I) => I === !0);
          } catch (I) {
            throw ((s.options.videoCaptureDefaults.deviceId = v), I);
          }
        } else if (i === "audiooutput") {
          if (
            (!pr() && !s.options.webAudioMix) ||
            (s.options.webAudioMix &&
              s.audioContext &&
              !("setSinkId" in s.audioContext))
          )
            throw new Error(
              "cannot switch audio output, setSinkId not supported"
            );
          s.options.webAudioMix &&
            (r =
              (d = yield ge
                .getInstance()
                .normalizeDeviceId("audiooutput", r)) !== null && d !== void 0
                ? d
                : ""),
            ((u = (f = s.options).audioOutput) !== null && u !== void 0) ||
              (f.audioOutput = {});
          const v =
            (l = s.getActiveDevice(i)) !== null && l !== void 0
              ? l
              : s.options.audioOutput.deviceId;
          (s.options.audioOutput.deviceId = r), (g = v !== b);
          try {
            s.options.webAudioMix &&
              ((h = s.audioContext) === null || h === void 0 || h.setSinkId(r)),
              yield Promise.all(
                Array.from(s.remoteParticipants.values()).map((P) =>
                  P.setAudioOutput({ deviceId: r })
                )
              );
          } catch (P) {
            throw ((s.options.audioOutput.deviceId = v), P);
          }
        }
        return (
          g &&
            p &&
            (s.localParticipant.activeDeviceMap.set(i, r),
            s.emit(C.ActiveDeviceChanged, i, r)),
          p
        );
      })();
    });
  }
  setupLocalParticipantEvents() {
    this.localParticipant
      .on(E.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged)
      .on(E.ParticipantNameChanged, this.onLocalParticipantNameChanged)
      .on(E.AttributesChanged, this.onLocalAttributesChanged)
      .on(E.TrackMuted, this.onLocalTrackMuted)
      .on(E.TrackUnmuted, this.onLocalTrackUnmuted)
      .on(E.LocalTrackPublished, this.onLocalTrackPublished)
      .on(E.LocalTrackUnpublished, this.onLocalTrackUnpublished)
      .on(E.ConnectionQualityChanged, this.onLocalConnectionQualityChanged)
      .on(E.MediaDevicesError, this.onMediaDevicesError)
      .on(E.AudioStreamAcquired, this.startAudio)
      .on(E.ChatMessage, this.onLocalChatMessageSent)
      .on(
        E.ParticipantPermissionsChanged,
        this.onLocalParticipantPermissionsChanged
      );
  }
  recreateEngine() {
    var e;
    (e = this.engine) === null || e === void 0 || e.close(),
      (this.engine = void 0),
      (this.isResuming = !1),
      this.remoteParticipants.clear(),
      this.sidToIdentity.clear(),
      (this.bufferedEvents = []),
      this.maybeCreateEngine();
  }
  onTrackAdded(e, t, i) {
    if (this.state === q.Connecting || this.state === q.Reconnecting) {
      const u = () => {
          this.onTrackAdded(e, t, i), l();
        },
        l = () => {
          this.off(C.Reconnected, u),
            this.off(C.Connected, u),
            this.off(C.Disconnected, l);
        };
      this.once(C.Reconnected, u),
        this.once(C.Connected, u),
        this.once(C.Disconnected, l);
      return;
    }
    if (this.state === q.Disconnected) {
      this.log.warn(
        "skipping incoming track after Room disconnected",
        this.logContext
      );
      return;
    }
    const r = Fh(t.id),
      s = r[0];
    let o = r[1],
      a = e.id;
    if ((o && o.startsWith("TR") && (a = o), s === this.localParticipant.sid)) {
      this.log.warn(
        "tried to create RemoteParticipant for local participant",
        this.logContext
      );
      return;
    }
    const c = Array.from(this.remoteParticipants.values()).find(
      (u) => u.sid === s
    );
    if (!c) {
      this.log.error(
        "Tried to add a track for a participant, that's not present. Sid: ".concat(
          s
        ),
        this.logContext
      );
      return;
    }
    let d;
    this.options.adaptiveStream &&
      (typeof this.options.adaptiveStream == "object"
        ? (d = this.options.adaptiveStream)
        : (d = {})),
      c.addSubscribedMediaTrack(e, a, t, i, d);
  }
  handleDisconnect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
      t = arguments.length > 1 ? arguments[1] : void 0;
    var i;
    if (
      (this.clearConnectionReconcile(),
      (this.isResuming = !1),
      (this.bufferedEvents = []),
      this.transcriptionReceivedTimes.clear(),
      this.state !== q.Disconnected)
    ) {
      this.regionUrl = void 0;
      try {
        this.remoteParticipants.forEach((r) => {
          r.trackPublications.forEach((s) => {
            r.unpublishTrack(s.trackSid);
          });
        }),
          this.localParticipant.trackPublications.forEach((r) => {
            var s, o;
            r.track && this.localParticipant.unpublishTrack(r.track, e),
              e &&
                ((s = r.track) === null || s === void 0 || s.detach(),
                (o = r.track) === null || o === void 0 || o.stop());
          }),
          this.localParticipant
            .off(
              E.ParticipantMetadataChanged,
              this.onLocalParticipantMetadataChanged
            )
            .off(E.ParticipantNameChanged, this.onLocalParticipantNameChanged)
            .off(E.AttributesChanged, this.onLocalAttributesChanged)
            .off(E.TrackMuted, this.onLocalTrackMuted)
            .off(E.TrackUnmuted, this.onLocalTrackUnmuted)
            .off(E.LocalTrackPublished, this.onLocalTrackPublished)
            .off(E.LocalTrackUnpublished, this.onLocalTrackUnpublished)
            .off(
              E.ConnectionQualityChanged,
              this.onLocalConnectionQualityChanged
            )
            .off(E.MediaDevicesError, this.onMediaDevicesError)
            .off(E.AudioStreamAcquired, this.startAudio)
            .off(E.ChatMessage, this.onLocalChatMessageSent)
            .off(
              E.ParticipantPermissionsChanged,
              this.onLocalParticipantPermissionsChanged
            ),
          this.localParticipant.trackPublications.clear(),
          this.localParticipant.videoTrackPublications.clear(),
          this.localParticipant.audioTrackPublications.clear(),
          this.remoteParticipants.clear(),
          this.sidToIdentity.clear(),
          (this.activeSpeakers = []),
          this.audioContext &&
            typeof this.options.webAudioMix == "boolean" &&
            (this.audioContext.close(), (this.audioContext = void 0)),
          _e() &&
            (window.removeEventListener("beforeunload", this.onPageLeave),
            window.removeEventListener("pagehide", this.onPageLeave),
            window.removeEventListener("freeze", this.onPageLeave),
            (i = navigator.mediaDevices) === null ||
              i === void 0 ||
              i.removeEventListener("devicechange", this.handleDeviceChange));
      } finally {
        this.setAndEmitConnectionState(q.Disconnected),
          this.emit(C.Disconnected, t);
      }
    }
  }
  handleParticipantDisconnected(e, t) {
    var i;
    this.remoteParticipants.delete(e),
      t &&
        (t.trackPublications.forEach((r) => {
          t.unpublishTrack(r.trackSid, !0);
        }),
        this.emit(C.ParticipantDisconnected, t),
        (i = this.localParticipant) === null ||
          i === void 0 ||
          i.handleParticipantDisconnected(t.identity));
  }
  acquireAudioContext() {
    return m(this, void 0, void 0, function* () {
      var e, t;
      if (
        (typeof this.options.webAudioMix != "boolean" &&
        this.options.webAudioMix.audioContext
          ? (this.audioContext = this.options.webAudioMix.audioContext)
          : (!this.audioContext || this.audioContext.state === "closed") &&
            (this.audioContext =
              (e = gc()) !== null && e !== void 0 ? e : void 0),
        this.audioContext && this.audioContext.state === "suspended")
      )
        try {
          yield this.audioContext.resume();
        } catch (r) {
          this.log.warn(
            "Could not resume audio context",
            Object.assign(Object.assign({}, this.logContext), { error: r })
          );
        }
      this.options.webAudioMix &&
        this.remoteParticipants.forEach((r) =>
          r.setAudioContext(this.audioContext)
        ),
        this.localParticipant.setAudioContext(this.audioContext);
      const i =
        ((t = this.audioContext) === null || t === void 0
          ? void 0
          : t.state) === "running";
      i !== this.canPlaybackAudio &&
        ((this.audioEnabled = i), this.emit(C.AudioPlaybackStatusChanged, i));
    });
  }
  createParticipant(e, t) {
    var i;
    let r;
    return (
      t
        ? (r = ni.fromParticipantInfo(this.engine.client, t, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName,
          }))
        : (r = new ni(this.engine.client, "", e, void 0, void 0, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName,
          })),
      this.options.webAudioMix && r.setAudioContext(this.audioContext),
      !((i = this.options.audioOutput) === null || i === void 0) &&
        i.deviceId &&
        r
          .setAudioOutput(this.options.audioOutput)
          .catch((s) =>
            this.log.warn(
              "Could not set audio output: ".concat(s.message),
              this.logContext
            )
          ),
      r
    );
  }
  getOrCreateParticipant(e, t) {
    if (this.remoteParticipants.has(e)) {
      const r = this.remoteParticipants.get(e);
      return (
        t && r.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), r
      );
    }
    const i = this.createParticipant(e, t);
    return (
      this.remoteParticipants.set(e, i),
      this.sidToIdentity.set(t.sid, t.identity),
      this.emitWhenConnected(C.ParticipantConnected, i),
      i
        .on(E.TrackPublished, (r) => {
          this.emitWhenConnected(C.TrackPublished, r, i);
        })
        .on(E.TrackSubscribed, (r, s) => {
          r.kind === R.Kind.Audio
            ? (r.on(A.AudioPlaybackStarted, this.handleAudioPlaybackStarted),
              r.on(A.AudioPlaybackFailed, this.handleAudioPlaybackFailed))
            : r.kind === R.Kind.Video &&
              (r.on(A.VideoPlaybackFailed, this.handleVideoPlaybackFailed),
              r.on(A.VideoPlaybackStarted, this.handleVideoPlaybackStarted)),
            this.emit(C.TrackSubscribed, r, s, i);
        })
        .on(E.TrackUnpublished, (r) => {
          this.emit(C.TrackUnpublished, r, i);
        })
        .on(E.TrackUnsubscribed, (r, s) => {
          this.emit(C.TrackUnsubscribed, r, s, i);
        })
        .on(E.TrackSubscriptionFailed, (r) => {
          this.emit(C.TrackSubscriptionFailed, r, i);
        })
        .on(E.TrackMuted, (r) => {
          this.emitWhenConnected(C.TrackMuted, r, i);
        })
        .on(E.TrackUnmuted, (r) => {
          this.emitWhenConnected(C.TrackUnmuted, r, i);
        })
        .on(E.ParticipantMetadataChanged, (r) => {
          this.emitWhenConnected(C.ParticipantMetadataChanged, r, i);
        })
        .on(E.ParticipantNameChanged, (r) => {
          this.emitWhenConnected(C.ParticipantNameChanged, r, i);
        })
        .on(E.AttributesChanged, (r) => {
          this.emitWhenConnected(C.ParticipantAttributesChanged, r, i);
        })
        .on(E.ConnectionQualityChanged, (r) => {
          this.emitWhenConnected(C.ConnectionQualityChanged, r, i);
        })
        .on(E.ParticipantPermissionsChanged, (r) => {
          this.emitWhenConnected(C.ParticipantPermissionsChanged, r, i);
        })
        .on(E.TrackSubscriptionStatusChanged, (r, s) => {
          this.emitWhenConnected(C.TrackSubscriptionStatusChanged, r, s, i);
        })
        .on(E.TrackSubscriptionFailed, (r, s) => {
          this.emit(C.TrackSubscriptionFailed, r, i, s);
        })
        .on(E.TrackSubscriptionPermissionChanged, (r, s) => {
          this.emitWhenConnected(C.TrackSubscriptionPermissionChanged, r, s, i);
        }),
      t && i.updateInfo(t),
      i
    );
  }
  sendSyncState() {
    const e = Array.from(this.remoteParticipants.values()).reduce(
        (i, r) => (i.push(...r.getTrackPublications()), i),
        []
      ),
      t = this.localParticipant.getTrackPublications();
    this.engine.sendSyncState(e, t);
  }
  updateSubscriptions() {
    for (const e of this.remoteParticipants.values())
      for (const t of e.videoTrackPublications.values())
        t.isSubscribed && t instanceof Ac && t.emitTrackUpdate();
  }
  getRemoteParticipantBySid(e) {
    const t = this.sidToIdentity.get(e);
    if (t) return this.remoteParticipants.get(t);
  }
  registerConnectionReconcile() {
    this.clearConnectionReconcile();
    let e = 0;
    this.connectionReconcileInterval = ve.setInterval(() => {
      !this.engine || this.engine.isClosed || !this.engine.verifyTransport()
        ? (e++,
          this.log.warn(
            "detected connection state mismatch",
            Object.assign(Object.assign({}, this.logContext), {
              numFailures: e,
              engine: {
                closed: this.engine.isClosed,
                transportsConnected: this.engine.verifyTransport(),
              },
            })
          ),
          e >= 3 &&
            (this.recreateEngine(),
            this.handleDisconnect(
              this.options.stopLocalTrackOnUnpublish,
              jt.STATE_MISMATCH
            )))
        : (e = 0);
    }, Of);
  }
  clearConnectionReconcile() {
    this.connectionReconcileInterval &&
      ve.clearInterval(this.connectionReconcileInterval);
  }
  setAndEmitConnectionState(e) {
    return e === this.state
      ? !1
      : ((this.state = e), this.emit(C.ConnectionStateChanged, this.state), !0);
  }
  emitBufferedEvents() {
    this.bufferedEvents.forEach((e) => {
      let [t, i] = e;
      this.emit(t, ...i);
    }),
      (this.bufferedEvents = []);
  }
  emitWhenConnected(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    if (
      this.state === q.Reconnecting ||
      this.isResuming ||
      !this.engine ||
      this.engine.pendingReconnect
    )
      this.bufferedEvents.push([e, i]);
    else if (this.state === q.Connected) return this.emit(e, ...i);
    return !1;
  }
  simulateParticipants(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      const r = Object.assign(
          { audio: !0, video: !0, useRealTracks: !1 },
          e.publish
        ),
        s = Object.assign(
          { count: 9, audio: !1, video: !0, aspectRatios: [1.66, 1.7, 1.3] },
          e.participants
        );
      if (
        (this.handleDisconnect(),
        (this.roomInfo = new Rr({
          sid: "RM_SIMULATED",
          name: "simulated-room",
          emptyTimeout: 0,
          maxParticipants: 0,
          creationTime: ne.parse(new Date().getTime()),
          metadata: "",
          numParticipants: 1,
          numPublishers: 1,
          turnPassword: "",
          enabledCodecs: [],
          activeRecording: !1,
        })),
        this.localParticipant.updateInfo(
          new vn({ identity: "simulated-local", name: "local-name" })
        ),
        this.setupLocalParticipantEvents(),
        this.emit(C.SignalConnected),
        this.emit(C.Connected),
        this.setAndEmitConnectionState(q.Connected),
        r.video)
      ) {
        const o = new ti(
          R.Kind.Video,
          new Ut({
            source: ye.CAMERA,
            sid: Math.floor(Math.random() * 1e4).toString(),
            type: Fe.AUDIO,
            name: "video-dummy",
          }),
          new be(
            r.useRealTracks
              ? (yield window.navigator.mediaDevices.getUserMedia({
                  video: !0,
                })).getVideoTracks()[0]
              : qs(
                  160 *
                    ((t = s.aspectRatios[0]) !== null && t !== void 0 ? t : 1),
                  160,
                  !0,
                  !0
                ),
            void 0,
            !1,
            {
              loggerName: this.options.loggerName,
              loggerContextCb: () => this.logContext,
            }
          ),
          {
            loggerName: this.options.loggerName,
            loggerContextCb: () => this.logContext,
          }
        );
        this.localParticipant.addTrackPublication(o),
          this.localParticipant.emit(E.LocalTrackPublished, o);
      }
      if (r.audio) {
        const o = new ti(
          R.Kind.Audio,
          new Ut({
            source: ye.MICROPHONE,
            sid: Math.floor(Math.random() * 1e4).toString(),
            type: Fe.AUDIO,
          }),
          new me(
            r.useRealTracks
              ? (yield navigator.mediaDevices.getUserMedia({
                  audio: !0,
                })).getAudioTracks()[0]
              : Pi(),
            void 0,
            !1,
            this.audioContext,
            {
              loggerName: this.options.loggerName,
              loggerContextCb: () => this.logContext,
            }
          ),
          {
            loggerName: this.options.loggerName,
            loggerContextCb: () => this.logContext,
          }
        );
        this.localParticipant.addTrackPublication(o),
          this.localParticipant.emit(E.LocalTrackPublished, o);
      }
      for (let o = 0; o < s.count - 1; o += 1) {
        let a = new vn({
          sid: Math.floor(Math.random() * 1e4).toString(),
          identity: "simulated-".concat(o),
          state: $i.ACTIVE,
          tracks: [],
          joinedAt: ne.parse(Date.now()),
        });
        const c = this.getOrCreateParticipant(a.identity, a);
        if (s.video) {
          const d = qs(
              160 *
                ((i = s.aspectRatios[o % s.aspectRatios.length]) !== null &&
                i !== void 0
                  ? i
                  : 1),
              160,
              !1,
              !0
            ),
            u = new Ut({
              source: ye.CAMERA,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Fe.AUDIO,
            });
          c.addSubscribedMediaTrack(
            d,
            u.sid,
            new MediaStream([d]),
            new RTCRtpReceiver()
          ),
            (a.tracks = [...a.tracks, u]);
        }
        if (s.audio) {
          const d = Pi(),
            u = new Ut({
              source: ye.MICROPHONE,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Fe.AUDIO,
            });
          c.addSubscribedMediaTrack(
            d,
            u.sid,
            new MediaStream([d]),
            new RTCRtpReceiver()
          ),
            (a.tracks = [...a.tracks, u]);
        }
        c.updateInfo(a);
      }
    });
  }
  emit(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    if (e !== C.ActiveSpeakersChanged) {
      const s = Dc(i).filter((o) => o !== void 0);
      this.log.debug(
        "room event ".concat(e),
        Object.assign(Object.assign({}, this.logContext), { event: e, args: s })
      );
    }
    return super.emit(e, ...i);
  }
}
function Dc(n) {
  return n.map((e) => {
    if (e)
      return Array.isArray(e)
        ? Dc(e)
        : typeof e == "object"
        ? "logContext" in e && e.logContext
        : e;
  });
}
var Ue;
(function (n) {
  (n[(n.IDLE = 0)] = "IDLE"),
    (n[(n.RUNNING = 1)] = "RUNNING"),
    (n[(n.SKIPPED = 2)] = "SKIPPED"),
    (n[(n.SUCCESS = 3)] = "SUCCESS"),
    (n[(n.FAILED = 4)] = "FAILED");
})(Ue || (Ue = {}));
class Qt extends $e.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(),
      (this.status = Ue.IDLE),
      (this.logs = []),
      (this.errorsAsWarnings = !1),
      (this.url = e),
      (this.token = t),
      (this.name = this.constructor.name),
      (this.room = new Nf(i.roomOptions)),
      (this.connectOptions = i.connectOptions),
      i.errorsAsWarnings && (this.errorsAsWarnings = i.errorsAsWarnings);
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      if (this.status !== Ue.IDLE) throw Error("check is running already");
      this.setStatus(Ue.RUNNING);
      try {
        yield this.perform();
      } catch (t) {
        t instanceof Error &&
          (this.errorsAsWarnings
            ? this.appendWarning(t.message)
            : this.appendError(t.message));
      }
      return (
        yield this.disconnect(),
        yield new Promise((t) => setTimeout(t, 500)),
        this.status !== Ue.SKIPPED &&
          this.setStatus(this.isSuccess() ? Ue.SUCCESS : Ue.FAILED),
        e && e(),
        this.getInfo()
      );
    });
  }
  isSuccess() {
    return !this.logs.some((e) => e.level === "error");
  }
  connect() {
    return m(this, void 0, void 0, function* () {
      return this.room.state === q.Connected
        ? this.room
        : (yield this.room.connect(this.url, this.token, this.connectOptions),
          this.room);
    });
  }
  disconnect() {
    return m(this, void 0, void 0, function* () {
      this.room &&
        this.room.state !== q.Disconnected &&
        (yield this.room.disconnect(),
        yield new Promise((e) => setTimeout(e, 500)));
    });
  }
  skip() {
    this.setStatus(Ue.SKIPPED);
  }
  appendMessage(e) {
    this.logs.push({ level: "info", message: e }),
      this.emit("update", this.getInfo());
  }
  appendWarning(e) {
    this.logs.push({ level: "warning", message: e }),
      this.emit("update", this.getInfo());
  }
  appendError(e) {
    this.logs.push({ level: "error", message: e }),
      this.emit("update", this.getInfo());
  }
  setStatus(e) {
    (this.status = e), this.emit("update", this.getInfo());
  }
  get engine() {
    var e;
    return (e = this.room) === null || e === void 0 ? void 0 : e.engine;
  }
  getInfo() {
    return {
      logs: this.logs,
      name: this.name,
      status: this.status,
      description: this.description,
    };
  }
}
class Lf extends Qt {
  get description() {
    return "Can publish audio";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield Af();
      t.localParticipant.publishTrack(i),
        yield new Promise((o) => setTimeout(o, 3e3));
      const r = yield (e = i.sender) === null || e === void 0
        ? void 0
        : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let s = 0;
      if (
        (r.forEach((o) => {
          o.type === "outbound-rtp" &&
            (o.kind === "audio" || (!o.kind && o.mediaType === "audio")) &&
            (s = o.packetsSent);
        }),
        s === 0)
      )
        throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(s, " audio packets"));
    });
  }
}
class Uf extends Qt {
  get description() {
    return "Can publish video";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield xf();
      t.localParticipant.publishTrack(i),
        yield new Promise((o) => setTimeout(o, 5e3));
      const r = yield (e = i.sender) === null || e === void 0
        ? void 0
        : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let s = 0;
      if (
        (r.forEach((o) => {
          o.type === "outbound-rtp" &&
            (o.kind === "video" || (!o.kind && o.mediaType === "video")) &&
            (s += o.packetsSent);
        }),
        s === 0)
      )
        throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(s, " video packets"));
    });
  }
}
class Ff extends Qt {
  get description() {
    return "Resuming connection after interruption";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect();
      let i = !1,
        r = !1,
        s;
      const o = new Promise((d) => {
          setTimeout(d, 5e3), (s = d);
        }),
        a = () => {
          i = !0;
        };
      t
        .on(C.SignalReconnecting, a)
        .on(C.Reconnecting, a)
        .on(C.Reconnected, () => {
          (r = !0), s(!0);
        }),
        (e = t.engine.client.ws) === null || e === void 0 || e.close();
      const c = t.engine.client.onClose;
      if ((c && c(""), yield o, i)) {
        if (!r || t.state !== q.Connected)
          throw (
            (this.appendWarning(
              "reconnection is only possible in Redis-based configurations"
            ),
            new Error("Not able to reconnect"))
          );
      } else throw new Error("Did not attempt to reconnect");
    });
  }
}
class jf extends Qt {
  get description() {
    return "Can connect via TURN";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t;
      const i = new Lr(),
        r = yield i.join(this.url, this.token, {
          autoSubscribe: !0,
          maxRetries: 0,
          e2eeEnabled: !1,
          websocketTimeout: 15e3,
        });
      let s = !1,
        o = !1,
        a = !1;
      for (let c of r.iceServers)
        for (let d of c.urls)
          d.startsWith("turn:")
            ? ((o = !0), (a = !0))
            : d.startsWith("turns:") && ((o = !0), (a = !0), (s = !0)),
            d.startsWith("stun:") && (a = !0);
      a
        ? o &&
          !s &&
          this.appendWarning(
            "TURN is configured server side, but TURN/TLS is unavailable."
          )
        : this.appendWarning("No STUN servers configured on server side."),
        yield i.close(),
        (!(
          (t =
            (e = this.connectOptions) === null || e === void 0
              ? void 0
              : e.rtcConfig) === null || t === void 0
        ) &&
          t.iceServers) ||
        o
          ? yield this.room.connect(this.url, this.token, {
              rtcConfig: { iceTransportPolicy: "relay" },
            })
          : (this.appendWarning("No TURN servers configured."),
            this.skip(),
            yield new Promise((c) => setTimeout(c, 0)));
    });
  }
}
class Bf extends Qt {
  get description() {
    return "Establishing WebRTC connection";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      let e = !1,
        t = !1;
      this.room.on(C.SignalConnected, () => {
        const i = this.room.engine.client.onTrickle;
        (this.room.engine.client.onTrickle = (r, s) => {
          if (r.candidate) {
            const o = new RTCIceCandidate(r);
            let a = ""
              .concat(o.protocol, " ")
              .concat(o.address, ":")
              .concat(o.port, " ")
              .concat(o.type);
            o.address &&
              (Vf(o.address)
                ? (a += " (private)")
                : o.protocol === "tcp" && o.tcpType === "passive"
                ? ((e = !0), (a += " (passive)"))
                : o.protocol === "udp" && (t = !0)),
              this.appendMessage(a);
          }
          i && i(r, s);
        }),
          this.room.engine.pcManager &&
            (this.room.engine.pcManager.subscriber.onIceCandidateError = (
              r
            ) => {
              r instanceof RTCPeerConnectionIceErrorEvent &&
                this.appendWarning(
                  "error with ICE candidate: "
                    .concat(r.errorCode, " ")
                    .concat(r.errorText, " ")
                    .concat(r.url)
                );
            });
      });
      try {
        yield this.connect(), K.info("now the room is connected");
      } catch (i) {
        throw (
          (this.appendWarning(
            "ports need to be open on firewall in order to connect."
          ),
          i)
        );
      }
      e || this.appendWarning("Server is not configured for ICE/TCP"),
        t ||
          this.appendWarning(
            "No public IPv4 UDP candidates were found. Your server is likely not configured correctly"
          );
    });
  }
}
function Vf(n) {
  const e = n.split(".");
  if (e.length === 4) {
    if (e[0] === "10") return !0;
    if (e[0] === "192" && e[1] === "168") return !0;
    if (e[0] === "172") {
      const t = parseInt(e[1], 10);
      if (t >= 16 && t <= 31) return !0;
    }
  }
  return !1;
}
class qf extends Qt {
  get description() {
    return "Connecting to signal connection via WebSocket";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t, i;
      (this.url.startsWith("ws:") || this.url.startsWith("http:")) &&
        this.appendWarning(
          "Server is insecure, clients may block connections to it"
        );
      let r = new Lr();
      const s = yield r.join(this.url, this.token, {
        autoSubscribe: !0,
        maxRetries: 0,
        e2eeEnabled: !1,
        websocketTimeout: 15e3,
      });
      this.appendMessage(
        "Connected to server, version ".concat(s.serverVersion, ".")
      ),
        ((e = s.serverInfo) === null || e === void 0 ? void 0 : e.edition) ===
          Ta.Cloud &&
          !((t = s.serverInfo) === null || t === void 0) &&
          t.region &&
          this.appendMessage(
            "LiveKit Cloud: ".concat(
              (i = s.serverInfo) === null || i === void 0 ? void 0 : i.region
            )
          ),
        yield r.close();
    });
  }
}
class fg extends $e.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(),
      (this.options = {}),
      (this.checkResults = new Map()),
      (this.url = e),
      (this.token = t),
      (this.options = i);
  }
  getNextCheckId() {
    const e = this.checkResults.size;
    return (
      this.checkResults.set(e, {
        logs: [],
        status: Ue.IDLE,
        name: "",
        description: "",
      }),
      e
    );
  }
  updateCheck(e, t) {
    this.checkResults.set(e, t), this.emit("checkUpdate", e, t);
  }
  isSuccess() {
    return Array.from(this.checkResults.values()).every(
      (e) => e.status !== Ue.FAILED
    );
  }
  getResults() {
    return Array.from(this.checkResults.values());
  }
  createAndRunCheck(e) {
    return m(this, void 0, void 0, function* () {
      const t = this.getNextCheckId(),
        i = new e(this.url, this.token, this.options),
        r = (o) => {
          this.updateCheck(t, o);
        };
      i.on("update", r);
      const s = yield i.run();
      return i.off("update", r), s;
    });
  }
  checkWebsocket() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(qf);
    });
  }
  checkWebRTC() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Bf);
    });
  }
  checkTURN() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(jf);
    });
  }
  checkReconnect() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Ff);
    });
  }
  checkPublishAudio() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Lf);
    });
  }
  checkPublishVideo() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Uf);
    });
  }
}
var zf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Wf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Mc = { exports: {} };
(function (n) {
  (function (e, t) {
    n.exports ? (n.exports = t()) : (e.log = t());
  })(zf, function () {
    var e = function () {},
      t = "undefined",
      i =
        typeof window !== t &&
        typeof window.navigator !== t &&
        /Trident\/|MSIE /.test(window.navigator.userAgent),
      r = ["trace", "debug", "info", "warn", "error"],
      s = {},
      o = null;
    function a(p, b) {
      var v = p[b];
      if (typeof v.bind == "function") return v.bind(p);
      try {
        return Function.prototype.bind.call(v, p);
      } catch {
        return function () {
          return Function.prototype.apply.apply(v, [p, arguments]);
        };
      }
    }
    function c() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace();
    }
    function d(p) {
      return (
        p === "debug" && (p = "log"),
        typeof console === t
          ? !1
          : p === "trace" && i
          ? c
          : console[p] !== void 0
          ? a(console, p)
          : console.log !== void 0
          ? a(console, "log")
          : e
      );
    }
    function u() {
      for (var p = this.getLevel(), b = 0; b < r.length; b++) {
        var v = r[b];
        this[v] = b < p ? e : this.methodFactory(v, p, this.name);
      }
      if (
        ((this.log = this.debug),
        typeof console === t && p < this.levels.SILENT)
      )
        return "No console available for logging";
    }
    function l(p) {
      return function () {
        typeof console !== t && (u.call(this), this[p].apply(this, arguments));
      };
    }
    function h(p, b, v) {
      return d(p) || l.apply(this, arguments);
    }
    function f(p, b) {
      var v = this,
        P,
        I,
        S,
        k = "loglevel";
      typeof p == "string"
        ? (k += ":" + p)
        : typeof p == "symbol" && (k = void 0);
      function T(x) {
        var O = (r[x] || "silent").toUpperCase();
        if (!(typeof window === t || !k)) {
          try {
            window.localStorage[k] = O;
            return;
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(k) + "=" + O + ";";
          } catch {}
        }
      }
      function D() {
        var x;
        if (!(typeof window === t || !k)) {
          try {
            x = window.localStorage[k];
          } catch {}
          if (typeof x === t)
            try {
              var O = window.document.cookie,
                Y = encodeURIComponent(k),
                G = O.indexOf(Y + "=");
              G !== -1 && (x = /^([^;]+)/.exec(O.slice(G + Y.length + 1))[1]);
            } catch {}
          return v.levels[x] === void 0 && (x = void 0), x;
        }
      }
      function U() {
        if (!(typeof window === t || !k)) {
          try {
            window.localStorage.removeItem(k);
          } catch {}
          try {
            window.document.cookie =
              encodeURIComponent(k) +
              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {}
        }
      }
      function L(x) {
        var O = x;
        if (
          (typeof O == "string" &&
            v.levels[O.toUpperCase()] !== void 0 &&
            (O = v.levels[O.toUpperCase()]),
          typeof O == "number" && O >= 0 && O <= v.levels.SILENT)
        )
          return O;
        throw new TypeError("log.setLevel() called with invalid level: " + x);
      }
      (v.name = p),
        (v.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (v.methodFactory = b || h),
        (v.getLevel = function () {
          return S ?? I ?? P;
        }),
        (v.setLevel = function (x, O) {
          return (S = L(x)), O !== !1 && T(S), u.call(v);
        }),
        (v.setDefaultLevel = function (x) {
          (I = L(x)), D() || v.setLevel(x, !1);
        }),
        (v.resetLevel = function () {
          (S = null), U(), u.call(v);
        }),
        (v.enableAll = function (x) {
          v.setLevel(v.levels.TRACE, x);
        }),
        (v.disableAll = function (x) {
          v.setLevel(v.levels.SILENT, x);
        }),
        (v.rebuild = function () {
          if ((o !== v && (P = L(o.getLevel())), u.call(v), o === v))
            for (var x in s) s[x].rebuild();
        }),
        (P = L(o ? o.getLevel() : "WARN"));
      var M = D();
      M != null && (S = L(M)), u.call(v);
    }
    (o = new f()),
      (o.getLogger = function (p) {
        if ((typeof p != "symbol" && typeof p != "string") || p === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var b = s[p];
        return b || (b = s[p] = new f(p, o.methodFactory)), b;
      });
    var g = typeof window !== t ? window.log : void 0;
    return (
      (o.noConflict = function () {
        return typeof window !== t && window.log === o && (window.log = g), o;
      }),
      (o.getLoggers = function () {
        return s;
      }),
      (o.default = o),
      o
    );
  });
})(Mc);
var Gf = Mc.exports;
const Kf = Wf(Gf);
var Sr = function (n, e) {
  return (
    (Sr =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, i) {
          t.__proto__ = i;
        }) ||
      function (t, i) {
        for (var r in i)
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
      }),
    Sr(n, e)
  );
};
function rt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  Sr(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function Hf(n, e, t, i) {
  function r(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function a(u) {
      try {
        d(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        d(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function d(u) {
      u.done ? s(u.value) : r(u.value).then(a, c);
    }
    d((i = i.apply(n, [])).next());
  });
}
function Oc(n, e) {
  var t = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    i,
    r,
    s,
    o = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype
    );
  return (
    (o.next = a(0)),
    (o.throw = a(1)),
    (o.return = a(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(d) {
    return function (u) {
      return c([d, u]);
    };
  }
  function c(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), d[0] && (t = 0)), t; )
      try {
        if (
          ((i = 1),
          r &&
            (s =
              d[0] & 2
                ? r.return
                : d[0]
                ? r.throw || ((s = r.return) && s.call(r), 0)
                : r.next) &&
            !(s = s.call(r, d[1])).done)
        )
          return s;
        switch (((r = 0), s && (d = [d[0] & 2, s.value]), d[0])) {
          case 0:
          case 1:
            s = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (r = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((s = t.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!s || (d[1] > s[0] && d[1] < s[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < s[1]) {
              (t.label = s[1]), (s = d);
              break;
            }
            if (s && t.label < s[2]) {
              (t.label = s[2]), t.ops.push(d);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(n, t);
      } catch (u) {
        (d = [6, u]), (r = 0);
      } finally {
        i = s = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function $t(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function ii(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var i = t.call(n),
    r,
    s = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) s.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function ri(n, e, t) {
  if (arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]));
  return n.concat(s || Array.prototype.slice.call(e));
}
function Gt(n) {
  return this instanceof Gt ? ((this.v = n), this) : new Gt(n);
}
function Jf(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []),
    r,
    s = [];
  return (
    (r = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    a("next"),
    a("throw"),
    a("return", o),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function o(f) {
    return function (g) {
      return Promise.resolve(g).then(f, l);
    };
  }
  function a(f, g) {
    i[f] &&
      ((r[f] = function (p) {
        return new Promise(function (b, v) {
          s.push([f, p, b, v]) > 1 || c(f, p);
        });
      }),
      g && (r[f] = g(r[f])));
  }
  function c(f, g) {
    try {
      d(i[f](g));
    } catch (p) {
      h(s[0][3], p);
    }
  }
  function d(f) {
    f.value instanceof Gt
      ? Promise.resolve(f.value.v).then(u, l)
      : h(s[0][2], f);
  }
  function u(f) {
    c("next", f);
  }
  function l(f) {
    c("throw", f);
  }
  function h(f, g) {
    f(g), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function $f(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator],
    t;
  return e
    ? e.call(n)
    : ((n = typeof $t == "function" ? $t(n) : n[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(s) {
    t[s] =
      n[s] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = n[s](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function (d) {
      s({ value: d, done: a });
    }, o);
  }
}
function fe(n) {
  return typeof n == "function";
}
function jr(n) {
  var e = function (i) {
      Error.call(i), (i.stack = new Error().stack);
    },
    t = n(e);
  return (
    (t.prototype = Object.create(Error.prototype)),
    (t.prototype.constructor = t),
    t
  );
}
var Mi = jr(function (n) {
  return function (e) {
    n(this),
      (this.message = e
        ? e.length +
          ` errors occurred during unsubscription:
` +
          e.map(function (t, i) {
            return i + 1 + ") " + t.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = e);
  };
});
function si(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var yn = (function () {
    function n(e) {
      (this.initialTeardown = e),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (n.prototype.unsubscribe = function () {
        var e, t, i, r, s;
        if (!this.closed) {
          this.closed = !0;
          var o = this._parentage;
          if (o)
            if (((this._parentage = null), Array.isArray(o)))
              try {
                for (var a = $t(o), c = a.next(); !c.done; c = a.next()) {
                  var d = c.value;
                  d.remove(this);
                }
              } catch (p) {
                e = { error: p };
              } finally {
                try {
                  c && !c.done && (t = a.return) && t.call(a);
                } finally {
                  if (e) throw e.error;
                }
              }
            else o.remove(this);
          var u = this.initialTeardown;
          if (fe(u))
            try {
              u();
            } catch (p) {
              s = p instanceof Mi ? p.errors : [p];
            }
          var l = this._finalizers;
          if (l) {
            this._finalizers = null;
            try {
              for (var h = $t(l), f = h.next(); !f.done; f = h.next()) {
                var g = f.value;
                try {
                  ao(g);
                } catch (p) {
                  (s = s ?? []),
                    p instanceof Mi
                      ? (s = ri(ri([], ii(s)), ii(p.errors)))
                      : s.push(p);
                }
              }
            } catch (p) {
              i = { error: p };
            } finally {
              try {
                f && !f.done && (r = h.return) && r.call(h);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          if (s) throw new Mi(s);
        }
      }),
      (n.prototype.add = function (e) {
        var t;
        if (e && e !== this)
          if (this.closed) ao(e);
          else {
            if (e instanceof n) {
              if (e.closed || e._hasParent(this)) return;
              e._addParent(this);
            }
            (this._finalizers =
              (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
          }
      }),
      (n.prototype._hasParent = function (e) {
        var t = this._parentage;
        return t === e || (Array.isArray(t) && t.includes(e));
      }),
      (n.prototype._addParent = function (e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
      }),
      (n.prototype._removeParent = function (e) {
        var t = this._parentage;
        t === e ? (this._parentage = null) : Array.isArray(t) && si(t, e);
      }),
      (n.prototype.remove = function (e) {
        var t = this._finalizers;
        t && si(t, e), e instanceof n && e._removeParent(this);
      }),
      (n.EMPTY = (function () {
        var e = new n();
        return (e.closed = !0), e;
      })()),
      n
    );
  })(),
  Nc = yn.EMPTY;
function Lc(n) {
  return (
    n instanceof yn ||
    (n && "closed" in n && fe(n.remove) && fe(n.add) && fe(n.unsubscribe))
  );
}
function ao(n) {
  fe(n) ? n() : n.unsubscribe();
}
var Qf = { Promise: void 0 },
  Yf = {
    setTimeout: function (n, e) {
      for (var t = [], i = 2; i < arguments.length; i++)
        t[i - 2] = arguments[i];
      return setTimeout.apply(void 0, ri([n, e], ii(t)));
    },
    clearTimeout: function (n) {
      return clearTimeout(n);
    },
    delegate: void 0,
  };
function Uc(n) {
  Yf.setTimeout(function () {
    throw n;
  });
}
function co() {}
function Gn(n) {
  n();
}
var Br = (function (n) {
    rt(e, n);
    function e(t) {
      var i = n.call(this) || this;
      return (
        (i.isStopped = !1),
        t ? ((i.destination = t), Lc(t) && t.add(i)) : (i.destination = ep),
        i
      );
    }
    return (
      (e.create = function (t, i, r) {
        return new Tr(t, i, r);
      }),
      (e.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          n.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(yn),
  Xf = (function () {
    function n(e) {
      this.partialObserver = e;
    }
    return (
      (n.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(e);
          } catch (i) {
            xn(i);
          }
      }),
      (n.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(e);
          } catch (i) {
            xn(i);
          }
        else xn(e);
      }),
      (n.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (t) {
            xn(t);
          }
      }),
      n
    );
  })(),
  Tr = (function (n) {
    rt(e, n);
    function e(t, i, r) {
      var s = n.call(this) || this,
        o;
      return (
        fe(t) || !t
          ? (o = {
              next: t ?? void 0,
              error: i ?? void 0,
              complete: r ?? void 0,
            })
          : (o = t),
        (s.destination = new Xf(o)),
        s
      );
    }
    return e;
  })(Br);
function xn(n) {
  Uc(n);
}
function Zf(n) {
  throw n;
}
var ep = { closed: !0, next: co, error: Zf, complete: co },
  Vr = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Fc(n) {
  return n;
}
function tp(n) {
  return n.length === 0
    ? Fc
    : n.length === 1
    ? n[0]
    : function (e) {
        return n.reduce(function (t, i) {
          return i(t);
        }, e);
      };
}
var we = (function () {
  function n(e) {
    e && (this._subscribe = e);
  }
  return (
    (n.prototype.lift = function (e) {
      var t = new n();
      return (t.source = this), (t.operator = e), t;
    }),
    (n.prototype.subscribe = function (e, t, i) {
      var r = this,
        s = ip(e) ? e : new Tr(e, t, i);
      return (
        Gn(function () {
          var o = r,
            a = o.operator,
            c = o.source;
          s.add(a ? a.call(s, c) : c ? r._subscribe(s) : r._trySubscribe(s));
        }),
        s
      );
    }),
    (n.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }),
    (n.prototype.forEach = function (e, t) {
      var i = this;
      return (
        (t = uo(t)),
        new t(function (r, s) {
          var o = new Tr({
            next: function (a) {
              try {
                e(a);
              } catch (c) {
                s(c), o.unsubscribe();
              }
            },
            error: s,
            complete: r,
          });
          i.subscribe(o);
        })
      );
    }),
    (n.prototype._subscribe = function (e) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(e);
    }),
    (n.prototype[Vr] = function () {
      return this;
    }),
    (n.prototype.pipe = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return tp(e)(this);
    }),
    (n.prototype.toPromise = function (e) {
      var t = this;
      return (
        (e = uo(e)),
        new e(function (i, r) {
          var s;
          t.subscribe(
            function (o) {
              return (s = o);
            },
            function (o) {
              return r(o);
            },
            function () {
              return i(s);
            }
          );
        })
      );
    }),
    (n.create = function (e) {
      return new n(e);
    }),
    n
  );
})();
function uo(n) {
  var e;
  return (e = n ?? Qf.Promise) !== null && e !== void 0 ? e : Promise;
}
function np(n) {
  return n && fe(n.next) && fe(n.error) && fe(n.complete);
}
function ip(n) {
  return (n && n instanceof Br) || (np(n) && Lc(n));
}
function rp(n) {
  return fe(n?.lift);
}
function kn(n) {
  return function (e) {
    if (rp(e))
      return e.lift(function (t) {
        try {
          return n(t, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function oi(n, e, t, i, r) {
  return new sp(n, e, t, i, r);
}
var sp = (function (n) {
    rt(e, n);
    function e(t, i, r, s, o, a) {
      var c = n.call(this, t) || this;
      return (
        (c.onFinalize = o),
        (c.shouldUnsubscribe = a),
        (c._next = i
          ? function (d) {
              try {
                i(d);
              } catch (u) {
                t.error(u);
              }
            }
          : n.prototype._next),
        (c._error = s
          ? function (d) {
              try {
                s(d);
              } catch (u) {
                t.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._error),
        (c._complete = r
          ? function () {
              try {
                r();
              } catch (d) {
                t.error(d);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._complete),
        c
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var i = this.closed;
          n.prototype.unsubscribe.call(this),
            !i &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      e
    );
  })(Br),
  op = jr(function (n) {
    return function () {
      n(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  jc = (function (n) {
    rt(e, n);
    function e() {
      var t = n.call(this) || this;
      return (
        (t.closed = !1),
        (t.currentObservers = null),
        (t.observers = []),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      (e.prototype.lift = function (t) {
        var i = new lo(this, this);
        return (i.operator = t), i;
      }),
      (e.prototype._throwIfClosed = function () {
        if (this.closed) throw new op();
      }),
      (e.prototype.next = function (t) {
        var i = this;
        Gn(function () {
          var r, s;
          if ((i._throwIfClosed(), !i.isStopped)) {
            i.currentObservers ||
              (i.currentObservers = Array.from(i.observers));
            try {
              for (
                var o = $t(i.currentObservers), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var c = a.value;
                c.next(t);
              }
            } catch (d) {
              r = { error: d };
            } finally {
              try {
                a && !a.done && (s = o.return) && s.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
          }
        });
      }),
      (e.prototype.error = function (t) {
        var i = this;
        Gn(function () {
          if ((i._throwIfClosed(), !i.isStopped)) {
            (i.hasError = i.isStopped = !0), (i.thrownError = t);
            for (var r = i.observers; r.length; ) r.shift().error(t);
          }
        });
      }),
      (e.prototype.complete = function () {
        var t = this;
        Gn(function () {
          if ((t._throwIfClosed(), !t.isStopped)) {
            t.isStopped = !0;
            for (var i = t.observers; i.length; ) i.shift().complete();
          }
        });
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(e.prototype, "observed", {
        get: function () {
          var t;
          return (
            ((t = this.observers) === null || t === void 0
              ? void 0
              : t.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._trySubscribe = function (t) {
        return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
      }),
      (e.prototype._subscribe = function (t) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(t),
          this._innerSubscribe(t)
        );
      }),
      (e.prototype._innerSubscribe = function (t) {
        var i = this,
          r = this,
          s = r.hasError,
          o = r.isStopped,
          a = r.observers;
        return s || o
          ? Nc
          : ((this.currentObservers = null),
            a.push(t),
            new yn(function () {
              (i.currentObservers = null), si(a, t);
            }));
      }),
      (e.prototype._checkFinalizedStatuses = function (t) {
        var i = this,
          r = i.hasError,
          s = i.thrownError,
          o = i.isStopped;
        r ? t.error(s) : o && t.complete();
      }),
      (e.prototype.asObservable = function () {
        var t = new we();
        return (t.source = this), t;
      }),
      (e.create = function (t, i) {
        return new lo(t, i);
      }),
      e
    );
  })(we),
  lo = (function (n) {
    rt(e, n);
    function e(t, i) {
      var r = n.call(this) || this;
      return (r.destination = t), (r.source = i), r;
    }
    return (
      (e.prototype.next = function (t) {
        var i, r;
        (r =
          (i = this.destination) === null || i === void 0 ? void 0 : i.next) ===
          null ||
          r === void 0 ||
          r.call(i, t);
      }),
      (e.prototype.error = function (t) {
        var i, r;
        (r =
          (i = this.destination) === null || i === void 0
            ? void 0
            : i.error) === null ||
          r === void 0 ||
          r.call(i, t);
      }),
      (e.prototype.complete = function () {
        var t, i;
        (i =
          (t = this.destination) === null || t === void 0
            ? void 0
            : t.complete) === null ||
          i === void 0 ||
          i.call(t);
      }),
      (e.prototype._subscribe = function (t) {
        var i, r;
        return (r =
          (i = this.source) === null || i === void 0
            ? void 0
            : i.subscribe(t)) !== null && r !== void 0
          ? r
          : Nc;
      }),
      e
    );
  })(jc);
(function (n) {
  rt(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return (i._value = t), i;
  }
  return (
    Object.defineProperty(e.prototype, "value", {
      get: function () {
        return this.getValue();
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype._subscribe = function (t) {
      var i = n.prototype._subscribe.call(this, t);
      return !i.closed && t.next(this._value), i;
    }),
    (e.prototype.getValue = function () {
      var t = this,
        i = t.hasError,
        r = t.thrownError,
        s = t._value;
      if (i) throw r;
      return this._throwIfClosed(), s;
    }),
    (e.prototype.next = function (t) {
      n.prototype.next.call(this, (this._value = t));
    }),
    e
  );
})(jc);
var ap = {
    now: function () {
      return Date.now();
    },
  },
  cp = (function (n) {
    rt(e, n);
    function e(t, i) {
      return n.call(this) || this;
    }
    return (
      (e.prototype.schedule = function (t, i) {
        return this;
      }),
      e
    );
  })(yn),
  ho = {
    setInterval: function (n, e) {
      for (var t = [], i = 2; i < arguments.length; i++)
        t[i - 2] = arguments[i];
      return setInterval.apply(void 0, ri([n, e], ii(t)));
    },
    clearInterval: function (n) {
      return clearInterval(n);
    },
    delegate: void 0,
  },
  dp = (function (n) {
    rt(e, n);
    function e(t, i) {
      var r = n.call(this, t, i) || this;
      return (r.scheduler = t), (r.work = i), (r.pending = !1), r;
    }
    return (
      (e.prototype.schedule = function (t, i) {
        var r;
        if ((i === void 0 && (i = 0), this.closed)) return this;
        this.state = t;
        var s = this.id,
          o = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(o, s, i)),
          (this.pending = !0),
          (this.delay = i),
          (this.id =
            (r = this.id) !== null && r !== void 0
              ? r
              : this.requestAsyncId(o, this.id, i)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (t, i, r) {
        return (
          r === void 0 && (r = 0), ho.setInterval(t.flush.bind(t, this), r)
        );
      }),
      (e.prototype.recycleAsyncId = function (t, i, r) {
        if (
          (r === void 0 && (r = 0),
          r != null && this.delay === r && this.pending === !1)
        )
          return i;
        i != null && ho.clearInterval(i);
      }),
      (e.prototype.execute = function (t, i) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var r = this._execute(t, i);
        if (r) return r;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (t, i) {
        var r = !1,
          s;
        try {
          this.work(t);
        } catch (o) {
          (r = !0), (s = o || new Error("Scheduled action threw falsy error"));
        }
        if (r) return this.unsubscribe(), s;
      }),
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this,
            i = t.id,
            r = t.scheduler,
            s = r.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            si(s, this),
            i != null && (this.id = this.recycleAsyncId(r, i, null)),
            (this.delay = null),
            n.prototype.unsubscribe.call(this);
        }
      }),
      e
    );
  })(cp),
  fo = (function () {
    function n(e, t) {
      t === void 0 && (t = n.now),
        (this.schedulerActionCtor = e),
        (this.now = t);
    }
    return (
      (n.prototype.schedule = function (e, t, i) {
        return (
          t === void 0 && (t = 0),
          new this.schedulerActionCtor(this, e).schedule(i, t)
        );
      }),
      (n.now = ap.now),
      n
    );
  })(),
  up = (function (n) {
    rt(e, n);
    function e(t, i) {
      i === void 0 && (i = fo.now);
      var r = n.call(this, t, i) || this;
      return (r.actions = []), (r._active = !1), r;
    }
    return (
      (e.prototype.flush = function (t) {
        var i = this.actions;
        if (this._active) {
          i.push(t);
          return;
        }
        var r;
        this._active = !0;
        do if ((r = t.execute(t.state, t.delay))) break;
        while ((t = i.shift()));
        if (((this._active = !1), r)) {
          for (; (t = i.shift()); ) t.unsubscribe();
          throw r;
        }
      }),
      e
    );
  })(fo);
new up(dp);
function lp(n) {
  return n && fe(n.schedule);
}
function hp(n) {
  return n[n.length - 1];
}
function Bc(n) {
  return lp(hp(n)) ? n.pop() : void 0;
}
var Vc = function (n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function qc(n) {
  return fe(n?.then);
}
function zc(n) {
  return fe(n[Vr]);
}
function Wc(n) {
  return Symbol.asyncIterator && fe(n?.[Symbol.asyncIterator]);
}
function Gc(n) {
  return new TypeError(
    "You provided " +
      (n !== null && typeof n == "object"
        ? "an invalid object"
        : "'" + n + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
  );
}
function fp() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Kc = fp();
function Hc(n) {
  return fe(n?.[Kc]);
}
function Jc(n) {
  return Jf(this, arguments, function () {
    var e, t, i, r;
    return Oc(this, function (s) {
      switch (s.label) {
        case 0:
          (e = n.getReader()), (s.label = 1);
        case 1:
          s.trys.push([1, , 9, 10]), (s.label = 2);
        case 2:
          return [4, Gt(e.read())];
        case 3:
          return (
            (t = s.sent()),
            (i = t.value),
            (r = t.done),
            r ? [4, Gt(void 0)] : [3, 5]
          );
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Gt(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function $c(n) {
  return fe(n?.getReader);
}
function Sn(n) {
  if (n instanceof we) return n;
  if (n != null) {
    if (zc(n)) return pp(n);
    if (Vc(n)) return mp(n);
    if (qc(n)) return gp(n);
    if (Wc(n)) return Qc(n);
    if (Hc(n)) return vp(n);
    if ($c(n)) return bp(n);
  }
  throw Gc(n);
}
function pp(n) {
  return new we(function (e) {
    var t = n[Vr]();
    if (fe(t.subscribe)) return t.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function mp(n) {
  return new we(function (e) {
    for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
    e.complete();
  });
}
function gp(n) {
  return new we(function (e) {
    n.then(
      function (t) {
        e.closed || (e.next(t), e.complete());
      },
      function (t) {
        return e.error(t);
      }
    ).then(null, Uc);
  });
}
function vp(n) {
  return new we(function (e) {
    var t, i;
    try {
      for (var r = $t(n), s = r.next(); !s.done; s = r.next()) {
        var o = s.value;
        if ((e.next(o), e.closed)) return;
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        s && !s.done && (i = r.return) && i.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    e.complete();
  });
}
function Qc(n) {
  return new we(function (e) {
    yp(n, e).catch(function (t) {
      return e.error(t);
    });
  });
}
function bp(n) {
  return Qc(Jc(n));
}
function yp(n, e) {
  var t, i, r, s;
  return Hf(this, void 0, void 0, function () {
    var o, a;
    return Oc(this, function (c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), (t = $f(n)), (c.label = 1);
        case 1:
          return [4, t.next()];
        case 2:
          if (((i = c.sent()), !!i.done)) return [3, 4];
          if (((o = i.value), e.next(o), e.closed)) return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (a = c.sent()), (r = { error: a }), [3, 11];
        case 6:
          return (
            c.trys.push([6, , 9, 10]),
            i && !i.done && (s = t.return) ? [4, s.call(t)] : [3, 8]
          );
        case 7:
          c.sent(), (c.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (r) throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function yt(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var s = e.schedule(function () {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if ((n.add(s), !r)) return s;
}
function Yc(n, e) {
  return (
    e === void 0 && (e = 0),
    kn(function (t, i) {
      t.subscribe(
        oi(
          i,
          function (r) {
            return yt(
              i,
              n,
              function () {
                return i.next(r);
              },
              e
            );
          },
          function () {
            return yt(
              i,
              n,
              function () {
                return i.complete();
              },
              e
            );
          },
          function (r) {
            return yt(
              i,
              n,
              function () {
                return i.error(r);
              },
              e
            );
          }
        )
      );
    })
  );
}
function Xc(n, e) {
  return (
    e === void 0 && (e = 0),
    kn(function (t, i) {
      i.add(
        n.schedule(function () {
          return t.subscribe(i);
        }, e)
      );
    })
  );
}
function kp(n, e) {
  return Sn(n).pipe(Xc(e), Yc(e));
}
function Sp(n, e) {
  return Sn(n).pipe(Xc(e), Yc(e));
}
function Tp(n, e) {
  return new we(function (t) {
    var i = 0;
    return e.schedule(function () {
      i === n.length
        ? t.complete()
        : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function Cp(n, e) {
  return new we(function (t) {
    var i;
    return (
      yt(t, e, function () {
        (i = n[Kc]()),
          yt(
            t,
            e,
            function () {
              var r, s, o;
              try {
                (r = i.next()), (s = r.value), (o = r.done);
              } catch (a) {
                t.error(a);
                return;
              }
              o ? t.complete() : t.next(s);
            },
            0,
            !0
          );
      }),
      function () {
        return fe(i?.return) && i.return();
      }
    );
  });
}
function Zc(n, e) {
  if (!n) throw new Error("Iterable cannot be null");
  return new we(function (t) {
    yt(t, e, function () {
      var i = n[Symbol.asyncIterator]();
      yt(
        t,
        e,
        function () {
          i.next().then(function (r) {
            r.done ? t.complete() : t.next(r.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function wp(n, e) {
  return Zc(Jc(n), e);
}
function Pp(n, e) {
  if (n != null) {
    if (zc(n)) return kp(n, e);
    if (Vc(n)) return Tp(n, e);
    if (qc(n)) return Sp(n, e);
    if (Wc(n)) return Zc(n, e);
    if (Hc(n)) return Cp(n, e);
    if ($c(n)) return wp(n, e);
  }
  throw Gc(n);
}
function Ep(n, e) {
  return e ? Pp(n, e) : Sn(n);
}
jr(function (n) {
  return function (e) {
    e === void 0 && (e = null),
      n(this),
      (this.message = "Timeout has occurred"),
      (this.name = "TimeoutError"),
      (this.info = e);
  };
});
function Tn(n, e) {
  return kn(function (t, i) {
    var r = 0;
    t.subscribe(
      oi(i, function (s) {
        i.next(n.call(e, s, r++));
      })
    );
  });
}
function Rp(n, e, t, i, r, s, o, a) {
  var c = [],
    d = 0,
    u = 0,
    l = !1,
    h = function () {
      l && !c.length && !d && e.complete();
    },
    f = function (p) {
      return d < i ? g(p) : c.push(p);
    },
    g = function (p) {
      d++;
      var b = !1;
      Sn(t(p, u++)).subscribe(
        oi(
          e,
          function (v) {
            e.next(v);
          },
          function () {
            b = !0;
          },
          void 0,
          function () {
            if (b)
              try {
                d--;
                for (
                  var v = function () {
                    var P = c.shift();
                    o || g(P);
                  };
                  c.length && d < i;

                )
                  v();
                h();
              } catch (P) {
                e.error(P);
              }
          }
        )
      );
    };
  return (
    n.subscribe(
      oi(e, f, function () {
        (l = !0), h();
      })
    ),
    function () {}
  );
}
function ed(n, e, t) {
  return (
    t === void 0 && (t = 1 / 0),
    fe(e)
      ? ed(function (i, r) {
          return Tn(function (s, o) {
            return e(i, s, r, o);
          })(Sn(n(i, r)));
        }, t)
      : (typeof e == "number" && (t = e),
        kn(function (i, r) {
          return Rp(i, r, n, t);
        }))
  );
}
function _p(n) {
  return ed(Fc, n);
}
function Ip() {
  return _p(1);
}
function po() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  return Ip()(Ep(n, Bc(n)));
}
function Cn() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  var t = Bc(n);
  return kn(function (i, r) {
    (t ? po(n, i, t) : po(n, i)).subscribe(r);
  });
}
var xp = "lk";
function td(n) {
  return typeof n > "u" ? !1 : Ap(n) || Dp(n);
}
function Ap(n) {
  var e;
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        n.hasOwnProperty("track") &&
        typeof ((e = n.publication) == null ? void 0 : e.track) < "u"
    : !1;
}
function Dp(n) {
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        n.hasOwnProperty("publication") &&
        typeof n.publication < "u"
    : !1;
}
function Mp(n) {
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        typeof n.publication > "u"
    : !1;
}
function pg(n) {
  if (typeof n == "string" || typeof n == "number") return `${n}`;
  if (Mp(n)) return `${n.participant.identity}_${n.source}_placeholder`;
  if (td(n))
    return `${n.participant.identity}_${n.publication.source}_${n.publication.trackSid}`;
  throw new Error(`Can't generate a id for the given track reference: ${n}`);
}
function mg(n) {
  return n instanceof kr;
}
var Op = [
    C.ConnectionStateChanged,
    C.RoomMetadataChanged,
    C.ActiveSpeakersChanged,
    C.ConnectionQualityChanged,
    C.ParticipantConnected,
    C.ParticipantDisconnected,
    C.ParticipantPermissionsChanged,
    C.ParticipantMetadataChanged,
    C.ParticipantNameChanged,
    C.ParticipantAttributesChanged,
    C.TrackMuted,
    C.TrackUnmuted,
    C.TrackPublished,
    C.TrackUnpublished,
    C.TrackStreamStateChanged,
    C.TrackSubscriptionFailed,
    C.TrackSubscriptionPermissionChanged,
    C.TrackSubscriptionStatusChanged,
  ],
  Np = [...Op, C.LocalTrackPublished, C.LocalTrackUnpublished];
E.TrackPublished,
  E.TrackUnpublished,
  E.TrackMuted,
  E.TrackUnmuted,
  E.TrackStreamStateChanged,
  E.TrackSubscribed,
  E.TrackUnsubscribed,
  E.TrackSubscriptionPermissionChanged,
  E.TrackSubscriptionFailed,
  E.LocalTrackPublished,
  E.LocalTrackUnpublished;
var Lp = [
  E.ConnectionQualityChanged,
  E.IsSpeakingChanged,
  E.ParticipantMetadataChanged,
  E.ParticipantPermissionsChanged,
  E.TrackMuted,
  E.TrackUnmuted,
  E.TrackPublished,
  E.TrackUnpublished,
  E.TrackStreamStateChanged,
  E.TrackSubscriptionFailed,
  E.TrackSubscriptionPermissionChanged,
  E.TrackSubscriptionStatusChanged,
];
[...Lp, E.LocalTrackPublished, E.LocalTrackUnpublished];
var ai = Kf.getLogger("lk-components-js");
ai.setDefaultLevel("WARN");
function nd(n) {
  return typeof n == "object";
}
function id(n) {
  return Array.isArray(n) && n.filter(nd).length > 0;
}
function Up(n) {
  return `${xp}-${n}`;
}
function gg(n) {
  const e = mo(n),
    t = rd(n.participant).pipe(
      Tn(() => mo(n)),
      Cn(e)
    );
  return {
    className: Up(
      n.source === R.Source.Camera || n.source === R.Source.ScreenShare
        ? "participant-media-video"
        : "participant-media-audio"
    ),
    trackObserver: t,
  };
}
function mo(n) {
  if (td(n)) return n.publication;
  {
    const { source: e, name: t, participant: i } = n;
    if (e && t)
      return i
        .getTrackPublications()
        .find((r) => r.source === e && r.trackName === t);
    if (t) return i.getTrackPublicationByName(t);
    if (e) return i.getTrackPublication(e);
    throw new Error("At least one of source and name needs to be defined");
  }
}
function Fp(n, ...e) {
  return new we((t) => {
    const i = () => {
      t.next(n);
    };
    return (
      e.forEach((r) => {
        n.on(r, i);
      }),
      () => {
        e.forEach((r) => {
          n.off(r, i);
        });
      }
    );
  }).pipe(Cn(n));
}
function jp(n, e) {
  return new we((t) => {
    const i = (...r) => {
      t.next(r);
    };
    return (
      n.on(e, i),
      () => {
        n.off(e, i);
      }
    );
  });
}
function Bp(n) {
  return jp(n, C.ConnectionStateChanged).pipe(
    Tn(([e]) => e),
    Cn(n.state)
  );
}
function Vp(n, ...e) {
  return new we((t) => {
    const i = () => {
      t.next(n);
    };
    return (
      e.forEach((r) => {
        n.on(r, i);
      }),
      () => {
        e.forEach((r) => {
          n.off(r, i);
        });
      }
    );
  }).pipe(Cn(n));
}
function rd(n) {
  return Vp(
    n,
    E.TrackMuted,
    E.TrackUnmuted,
    E.ParticipantPermissionsChanged,
    E.TrackPublished,
    E.TrackUnpublished,
    E.LocalTrackPublished,
    E.LocalTrackUnpublished,
    E.MediaDevicesError,
    E.TrackSubscriptionStatusChanged
  ).pipe(
    Tn((e) => {
      const {
          isMicrophoneEnabled: t,
          isCameraEnabled: i,
          isScreenShareEnabled: r,
        } = e,
        s = e.getTrackPublication(R.Source.Microphone),
        o = e.getTrackPublication(R.Source.Camera);
      return {
        isCameraEnabled: i,
        isMicrophoneEnabled: t,
        isScreenShareEnabled: r,
        cameraTrack: o,
        microphoneTrack: s,
        participant: e,
      };
    })
  );
}
new TextEncoder();
new TextDecoder();
function vg() {
  return { className: "lk-room-container" };
}
function go(n, e, t = !0) {
  const i = [n.localParticipant, ...Array.from(n.remoteParticipants.values())],
    r = [];
  return (
    i.forEach((s) => {
      e.forEach((o) => {
        const a = Array.from(s.trackPublications.values())
          .filter((c) => c.source === o && (!t || c.track))
          .map((c) => ({ participant: s, publication: c, source: c.source }));
        r.push(...a);
      });
    }),
    { trackReferences: r, participants: i }
  );
}
function qp(n, e, t) {
  var i, r;
  const s = (i = t.additionalRoomEvents) != null ? i : Np,
    o = (r = t.onlySubscribed) != null ? r : !0,
    a = Array.from(
      new Set([
        C.ParticipantConnected,
        C.ParticipantDisconnected,
        C.ConnectionStateChanged,
        C.LocalTrackPublished,
        C.LocalTrackUnpublished,
        C.TrackPublished,
        C.TrackUnpublished,
        C.TrackSubscriptionStatusChanged,
        ...s,
      ]).values()
    );
  return Fp(n, ...a).pipe(
    Tn((c) => {
      const d = go(c, e, o);
      return (
        ai.debug(
          `TrackReference[] was updated. (length ${d.trackReferences.length})`,
          d
        ),
        d
      );
    }),
    Cn(go(n, e, o))
  );
}
y.createContext(void 0);
const zp = y.createContext(void 0);
function Wp() {
  return y.useContext(zp);
}
function bg(n) {
  const e = Wp(),
    t = n ?? e;
  if (!t)
    throw new Error(
      "No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly"
    );
  return t;
}
y.createContext(void 0);
const Gp = y.createContext(void 0);
function sd() {
  return y.useContext(Gp);
}
function qr(n) {
  const e = sd(),
    t = n ?? e;
  if (!t)
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly"
    );
  return t;
}
const yg = y.createContext(void 0);
function Kp(n, e, t = !0) {
  const [i, r] = y.useState(e);
  return (
    y.useEffect(() => {
      if ((t && r(e), typeof window > "u" || !n)) return;
      const s = n.subscribe(r);
      return () => s.unsubscribe();
    }, [n, t]),
    i
  );
}
function Hp(n) {
  const e = qr(n),
    t = y.useMemo(() => Bp(e), [e]);
  return Kp(t, e.state);
}
function kg(n = {}) {
  const e = qr(n.room),
    [t, i] = y.useState(e.localParticipant),
    [r, s] = y.useState(t.isMicrophoneEnabled),
    [o, a] = y.useState(t.isMicrophoneEnabled),
    [c, d] = y.useState(t.lastMicrophoneError),
    [u, l] = y.useState(t.lastCameraError),
    [h, f] = y.useState(t.isMicrophoneEnabled),
    [g, p] = y.useState(void 0),
    [b, v] = y.useState(void 0),
    P = (I) => {
      a(I.isCameraEnabled),
        s(I.isMicrophoneEnabled),
        f(I.isScreenShareEnabled),
        v(I.cameraTrack),
        p(I.microphoneTrack),
        d(I.participant.lastMicrophoneError),
        l(I.participant.lastCameraError),
        i(I.participant);
    };
  return (
    y.useEffect(() => {
      const I = rd(e.localParticipant).subscribe(P);
      return () => I.unsubscribe();
    }, [e]),
    {
      isMicrophoneEnabled: r,
      isScreenShareEnabled: h,
      isCameraEnabled: o,
      microphoneTrack: g,
      cameraTrack: b,
      lastMicrophoneError: c,
      lastCameraError: u,
      localParticipant: t,
    }
  );
}
function Jp(
  n = [
    R.Source.Camera,
    R.Source.Microphone,
    R.Source.ScreenShare,
    R.Source.ScreenShareAudio,
    R.Source.Unknown,
  ],
  e = {}
) {
  const t = qr(e.room),
    [i, r] = y.useState([]),
    [s, o] = y.useState([]),
    a = y.useMemo(
      () => n.map((c) => (nd(c) ? c.source : c)),
      [JSON.stringify(n)]
    );
  return (
    y.useEffect(() => {
      const c = qp(t, a, {
        additionalRoomEvents: e.updateOnlyOn,
        onlySubscribed: e.onlySubscribed,
      }).subscribe(({ trackReferences: d, participants: u }) => {
        ai.debug("setting track bundles", d, u), r(d), o(u);
      });
      return () => c.unsubscribe();
    }, [
      t,
      JSON.stringify(e.onlySubscribed),
      JSON.stringify(e.updateOnlyOn),
      JSON.stringify(n),
    ]),
    y.useMemo(() => {
      if (id(n)) {
        const c = Qp(n, s),
          d = Array.from(i);
        return (
          s.forEach((u) => {
            c.has(u.identity) &&
              (c.get(u.identity) ?? []).forEach((l) => {
                if (
                  i.find(
                    ({ participant: f, publication: g }) =>
                      u.identity === f.identity && g.source === l
                  )
                )
                  return;
                ai.debug(`Add ${l} placeholder for participant ${u.identity}.`);
                const h = { participant: u, source: l };
                d.push(h);
              });
          }),
          d
        );
      } else return i;
    }, [i, s, n])
  );
}
function $p(n, e) {
  const t = new Set(n);
  for (const i of e) t.delete(i);
  return t;
}
function Qp(n, e) {
  const t = new Map();
  if (id(n)) {
    const i = n.filter((r) => r.withPlaceholder).map((r) => r.source);
    e.forEach((r) => {
      const s = r
          .getTrackPublications()
          .map((a) => {
            var c;
            return (c = a.track) == null ? void 0 : c.source;
          })
          .filter((a) => a !== void 0),
        o = Array.from($p(new Set(i), new Set(s)));
      o.length > 0 && t.set(r.identity, o);
    });
  }
  return t;
}
var Kn = ((n) => ((n.Local = "local"), (n.Remote = "remote"), n))(Kn || {}),
  od = ((n) => ((n.Audio = "audio"), (n.Video = "video"), n))(od || {}),
  cn = ((n) => (
    (n.Camera = "camera"),
    (n.Microphone = "microphone"),
    (n.ScreenShare = "screen_share"),
    n
  ))(cn || {});
const Yp = (n) =>
    n.flatMap((e) => {
      const t = [],
        i = e.publication.trackName,
        r = e.participant.identity,
        s = e.participant.isLocal ? "local" : "remote";
      let o;
      e.publication.source === R.Source.Camera
        ? (o = "camera")
        : e.publication.source === R.Source.ScreenShare
        ? (o = "screen_share")
        : (o = "microphone");
      const a = (c, d) => {
        c &&
          t.push({
            id: c.mediaStreamTrack.id,
            source: o,
            name: i,
            userName: r,
            origin: s,
            media: d,
            track: c.mediaStreamTrack,
            isMuted: c.isMuted,
            setMuted: (u) => {
              c.mediaStreamTrack.enabled = !u;
            },
            onEnded: (u) => {
              c.on("ended", u);
            },
            offEnded: (u) => {
              c.off("ended", u);
            },
          });
      };
      return (
        a(e.publication.audioTrack, "audio"),
        a(e.publication.videoTrack, "video"),
        t
      );
    }),
  Oi = (n, e) => {
    const t = {
      id: n.id,
      source: e.source,
      name: e.name,
      userName: e.userName,
      media: n.kind === "audio" ? "audio" : "video",
      origin: e.origin,
      track: n,
      get isMuted() {
        return !n.enabled || n.muted;
      },
      setMuted: (i) => {
        (n.enabled = !i), e.mutedCb?.(i);
      },
      onEnded: (i) => {
        n.onended = i;
      },
      offEnded: (i) => {
        n.onended = null;
      },
    };
    return (
      (n.onmute = () => {
        e.mutedCb?.(t.isMuted);
      }),
      (n.onunmute = () => {
        e.mutedCb?.(t.isMuted);
      }),
      e.mutedCb?.(t.isMuted),
      t
    );
  };
class Xp {
  mediaDevicesPromises = [];
  getUserMedia(...e) {
    const t = navigator.mediaDevices.getUserMedia(...e);
    return this.mediaDevicesPromises.push(t), t;
  }
  getDisplayMedia(...e) {
    const t = navigator.mediaDevices.getDisplayMedia(...e);
    return this.mediaDevicesPromises.push(t), t;
  }
  closeAllStreams() {
    const e = this.mediaDevicesPromises.map((t) =>
      t.then((i) => {
        i.getTracks().forEach((r) => {
          r.readyState === "live" && r.stop();
        });
      })
    );
    return (this.mediaDevicesPromises = []), Promise.all(e);
  }
}
const Zp = 500,
  em = 1e3,
  tm = 3,
  nm = 2e3;
function vo({ packets: n, packetsLost: e, fractionLost: t, rtt: i }) {
  let r;
  if (
    (n !== void 0 && e !== void 0
      ? (r = (e * 100) / n)
      : t !== void 0 && (r = t * 100),
    r === void 0 || i === void 0 || isNaN(r))
  )
    return;
  const s = (i * 1e3) / 2;
  let o = s / 40;
  s > 160 && (o = (s - 120) / 10);
  const a = 100 - o - r;
  return Math.max(a, 0);
}
function bo(n) {
  if (n === void 0) return le.Unknown;
  let e;
  return (
    n <= 0
      ? (e = 1)
      : n >= 100
      ? (e = 4.5)
      : (e = 1 + 0.035 * n + 7e-6 * n * (n - 60) * (100 - n)),
    e > 4 ? le.Excellent : e > 3.5 ? le.Good : le.Poor
  );
}
class Ot {
  size;
  type;
  buf;
  constructor(e, t) {
    (this.size = e), (this.type = t), (this.buf = []);
  }
  push(e) {
    e !== void 0 &&
      (this.buf.length === this.size && this.buf.shift(), this.buf.push(e));
  }
  get() {
    if (this.buf.length !== 0)
      switch (this.type) {
        case "cumulative": {
          const e = this.buf[0];
          return (this.buf[this.buf.length - 1] - e) / this.buf.length;
        }
        case "individual":
          return this.buf.reduce((e, t) => e + t, 0) / this.buf.length;
      }
  }
}
class im {
  pc;
  cb;
  reportTimerId;
  pollingTimerId;
  localWindow;
  remoteWindow;
  reportTimestamps;
  stale = !1;
  constructor(e, t) {
    const i = tm;
    (this.pc = e),
      (this.cb = t),
      (this.reportTimerId = void 0),
      (this.localWindow = {
        packetsLost: new Ot(i, "cumulative"),
        fractionLost: new Ot(i, "individual"),
        rtt: new Ot(i, "individual"),
      }),
      (this.remoteWindow = {
        packetsSent: new Ot(i, "cumulative"),
        packetsLost: new Ot(i, "cumulative"),
        rtt: new Ot(i, "individual"),
      }),
      (this.reportTimestamps = {});
  }
  start() {
    this.reportTimerId ||
      this.pollingTimerId ||
      ((this.reportTimerId = window.setInterval(this.report.bind(this), Zp)),
      (this.pollingTimerId = window.setInterval(this.poll.bind(this), em)));
  }
  stop() {
    window.clearInterval(this.reportTimerId),
      window.clearInterval(this.pollingTimerId),
      (this.reportTimerId = void 0),
      (this.pollingTimerId = void 0);
  }
  isFresh(e) {
    let t = !0;
    if (this.reportTimestamps[e.type] !== void 0) {
      const r = Date.now() - this.reportTimestamps[e.type] < nm;
      t = e.timestamp !== this.reportTimestamps[e.type] || r;
    }
    return (this.reportTimestamps[e.type] = e.timestamp), t;
  }
  async poll() {
    const e = await this.pc.getStats();
    let t;
    const i = {};
    let r = !1;
    e.forEach((o) => {
      const a = o.kind || o.mediaType;
      o.type === "transport" &&
        o.selectedCandidatePairId &&
        (t = o.selectedCandidatePairId),
        o.type === "remote-inbound-rtp" &&
          a === "audio" &&
          ((r ||= !this.isFresh(o)),
          this.localWindow.packetsLost.push(o.packetsLost),
          this.localWindow.fractionLost.push(o.fractionLost)),
        o.type === "inbound-rtp" &&
          a === "audio" &&
          ((r ||= !this.isFresh(o)),
          this.remoteWindow.packetsSent.push(o.packetsReceived + o.packetsLost),
          this.remoteWindow.packetsLost.push(o.packetsLost)),
        o.type === "candidate-pair" && (i[o.id] = o);
    }),
      (this.stale = r);
    const s = t !== void 0 && i[t];
    s
      ? (this.remoteWindow.rtt.push(s.currentRoundTripTime),
        this.localWindow.rtt.push(s.currentRoundTripTime))
      : Se.error("QualityMonitor no candidate-pair found!");
  }
  report() {
    if (this.stale) return this.cb({ local: le.Unknown, general: le.Unknown });
    const e = vo({
        packets: void 0,
        packetsLost: this.localWindow.packetsLost.get(),
        fractionLost: this.localWindow.fractionLost.get(),
        rtt: this.localWindow.rtt.get(),
      }),
      t = vo({
        packets: this.remoteWindow.packetsSent.get(),
        packetsLost: this.remoteWindow.packetsLost.get(),
        fractionLost: void 0,
        rtt: this.remoteWindow.rtt.get(),
      }),
      i = [e, t].filter((a) => a !== void 0),
      r = i.length > 0 ? Math.min(...i) : void 0,
      s = bo(e),
      o = bo(r);
    this.cb({ local: s, general: o });
  }
}
class Ni {
  static _controller = null;
  static abortPendingNegotiation(e) {
    this._controller &&
      (this._controller.abort(`[abort] ${e}`), (this._controller = null));
  }
  static clearNegotiation() {
    this._controller = null;
  }
  static beginNegotiation() {
    this._controller &&
      this._controller.abort("[abort] Starting new negotiation");
    const e = new AbortController();
    return (this._controller = e), e.signal;
  }
}
const yo = "User",
  ko = "Assistant",
  So = 0,
  rm = [],
  zr = y.createContext({
    room: void 0,
    getTracks: () => rm,
    getConnectionState: () => null,
    selectVoiceModeMetadata: () => {
      throw new Error("Null implementation - please provide a proper context");
    },
    getTokenSetup: () => {},
    initVoiceMode: () =>
      Promise.reject(
        new Error("Null implementation - please provide a proper context")
      ),
  }),
  Wr = () => y.useContext(zr),
  Sg = ({ children: n }) => {
    const e = sd(),
      t = Jp(),
      i = Hp(e),
      r = Pe(),
      s = y.useCallback(
        (u) => {
          const l = Yp(t);
          return u ? l.filter((h) => u.includes(h.source)) : l;
        },
        [t]
      ),
      o = y.useCallback(() => i, [i]),
      a = y.useCallback((u) => {
        const { default_voice_mode: l, modes: h } = u,
          f = h.find((g) => g.mode === l);
        if (!f)
          throw new Error("No voice status mode found for default mode " + l);
        return f;
      }, []),
      c = y.useCallback(
        async (u, l) => {
          const h = await qo.startLivekitSession(
            u,
            l.eventSource,
            l.proofOfWorkAnswer
          );
          return h.token && h.url && h.e2ee_key
            ? (Hi(
                {
                  conversationId: u.conversation_id ?? l.clientThreadId,
                  voiceSessionId: u.voice_session_id,
                  voiceMode: h.voice_mode_decision.voice_mode,
                  credentials: { ...h, e2eeKey: h.e2ee_key },
                },
                r
              ),
              { type: "livekit", success: !0 })
            : {
                type: "livekit",
                success: !1,
                error:
                  "get_token failed to return expected fields .token, .url and .e2ee_key",
                response: h,
              };
        },
        [r]
      ),
      d = y.useMemo(
        () => ({
          room: e,
          getTracks: s,
          getConnectionState: o,
          getTokenSetup: () => {},
          initVoiceMode: c,
          selectVoiceModeMetadata: a,
        }),
        [e, s, o, c, a]
      );
    return B.jsx(zr.Provider, { value: d, children: n });
  };
let Li;
const sm = () => (Li === void 0 && (Li = new TextEncoder()), Li);
function om(n) {
  switch (n) {
    case "checking":
      return q.Connecting;
    case "connected":
    case "completed":
      return q.Connected;
    case "disconnected":
      return q.Reconnecting;
    case "new":
    case "failed":
    case "closed":
      return q.Disconnected;
  }
}
const Tg = ({ children: n }) => {
  const e = Pe(),
    t = yd(kd()),
    i = y.useRef(null),
    r = y.useRef(void 0),
    s = y.useRef(void 0),
    o = y.useCallback(async ({ avmTrack: z, initialSetup: j = !1 }) => {
      const F = z.media === od.Audio ? r : s;
      if (F.current && !F.current.stopped)
        await F.current.sender.replaceTrack(z.track);
      else if (j) F.current = at().addTransceiver(z.track);
      else
        throw new Error(
          `Cannot replace track on ${z.media} transceiver that was not initialized.`
        );
    }, []),
    [a, c] = y.useState(void 0),
    [d, u] = y.useState(void 0),
    [l, h] = y.useState(void 0),
    f = y.useRef(void 0),
    g = y.useRef(void 0),
    p = y.useRef(void 0),
    b = e((z) => z.voiceMode),
    [v, P] = y.useState(null),
    I = y.useCallback(() => v, [v]),
    S = y.useCallback((z) => {
      Qe((j) =>
        Pn(j, (F) => {
          F &&
            (F.activeSpeakers.some((V) => V.identity === z) ||
              F.activeSpeakers.push({ identity: z }));
        })
      );
    }, []),
    k = y.useCallback((z) => {
      Qe((j) =>
        Pn(j, (F) => {
          F &&
            (F.activeSpeakers = F.activeSpeakers.filter(
              (V) => V.identity !== z
            ));
        })
      );
    }, []),
    T = y.useRef(null),
    D = y.useRef([]),
    U = y.useRef([]),
    L = y.useRef([]),
    M = y.useRef([]),
    x = y.useRef([]),
    O = y.useRef(!1),
    Y = y.useRef([]),
    G = y.useCallback((z) => {
      Y.current.forEach((j) => j(z));
    }, []),
    X = y.useRef(v);
  y.useEffect(() => {
    X.current = v;
  }, [v]);
  const se = y.useRef(void 0);
  y.useEffect(() => {
    se.current = a;
  }, [a]);
  const Ee = y.useRef(void 0);
  y.useEffect(() => {
    Ee.current = l;
  }, [l]);
  const Te = y.useRef(new Xp()).current,
    Oe = y.useRef(void 0),
    st = y.useRef(void 0),
    Ne = y.useRef(void 0),
    [wt, Qe] = y.useState(() => ({
      localParticipant: {
        isMicrophoneEnabled: !1,
        setMicrophoneEnabled: function (j) {
          return se.current?.setMuted(!j), Promise.resolve(void 0);
        },
        setCameraEnabled: async function (j, F, V) {
          if (j)
            try {
              const W = await Rt("camera");
              await o({ avmTrack: W }), G(W);
            } catch (W) {
              throw (
                (Se.error("[transceiver] Error acquiring camera input", W), W)
              );
            }
          else await ie();
          return Promise.resolve(void 0);
        },
        setScreenShareEnabled: async function (j, F, V) {
          if (j)
            try {
              const W = await Rt("screenshare");
              await o({ avmTrack: W }), G(W);
            } catch (W) {
              throw (
                (Se.error(
                  "[transceiver] Error acquiring screen share input",
                  W
                ),
                W)
              );
            }
          else await ie();
          return Promise.resolve(void 0);
        },
        publishData: async function (j, F) {
          const V = T.current;
          if (!V || V.readyState !== "open")
            throw new Error("Data channel is not open");
          const W = new TextDecoder().decode(j),
            $ = JSON.stringify({ type: "data_message", data: W });
          V.send($);
        },
        on: function (j, F) {
          j === C.ConnectionQualityChanged && U.current.push(F);
        },
        off: function (j, F) {
          j === C.ConnectionQualityChanged &&
            (U.current = U.current.filter((V) => V !== F));
        },
      },
      getActiveDevice: (j) => {
        switch (j) {
          case "audioinput":
            return f.current;
          case "videoinput":
            return g.current;
          case "audiooutput":
            return p.current;
        }
      },
      disconnect: async function (j = !0) {
        Ni.abortPendingNegotiation("Disconnecting"),
          Oe.current?.stop(),
          (O.current = !0),
          j && Te.closeAllStreams(),
          ot.current && (ot.current.close(), (ot.current = void 0)),
          i.current && (i.current.srcObject = null),
          await ie(),
          P(q.Disconnected),
          (X.current = q.Disconnected),
          x.current.forEach((F) => F());
      },
      name: "",
      switchActiveDevice: async (j, F, V) => {
        if (X.current !== q.Connected)
          return (
            Se.debug(
              "[transceiver] Attempt to switch device when not connected, current state is",
              X.current
            ),
            !1
          );
        try {
          switch (j) {
            case "audioinput": {
              const W = await Et(F);
              return await o({ avmTrack: W }), G(W), !0;
            }
            case "videoinput": {
              const W = await Rt("camera", F);
              return await o({ avmTrack: W }), G(W), !0;
            }
            case "audiooutput":
              return await i.current?.setSinkId(F), (p.current = F), !0;
          }
        } catch (W) {
          return Se.error(`[transceiver] Failed to switch ${j} device`, W), !1;
        }
      },
      on: function (j, F) {
        switch (j) {
          case C.DataReceived:
            L.current.push(F);
            break;
          case C.Disconnected:
            x.current.push(F);
            break;
          case C.Connected:
            M.current.push(F);
            break;
          case C.TrackPublished:
            Y.current.push(F);
            break;
          case C.ConnectionQualityChanged:
            D.current.push(F);
            break;
        }
      },
      off: function (j, F) {
        switch (j) {
          case C.DataReceived:
            L.current = L.current.filter((V) => V !== F);
            break;
          case C.Disconnected:
            x.current = x.current.filter((V) => V !== F);
            break;
          case C.Connected:
            M.current = M.current.filter((V) => V !== F);
            break;
          case C.TrackPublished:
            Y.current = Y.current.filter((V) => V !== F);
            break;
          case C.ConnectionQualityChanged:
            D.current = D.current.filter((V) => V !== F);
            break;
        }
      },
      state: q.Disconnected,
      numParticipants: 0,
      activeSpeakers: [],
    })),
    de = y.useRef(!1),
    ot = y.useRef(void 0),
    at = () => (
      ot.current === void 0 && (ot.current = Bd.getFreshPeerConnection()),
      ot.current
    ),
    Pt = y.useCallback(
      (z) => {
        Qe((j) =>
          Pn(j, (F) => {
            F &&
              ((F.localParticipant.isMicrophoneEnabled = !z),
              z ? k(yo) : S(yo));
          })
        );
      },
      [S, k]
    ),
    Yt = y.useCallback(
      (z) => {
        const j = [a, d, l].filter((F) => F !== void 0);
        return z ? j.filter((F) => z.includes(F.source)) : j;
      },
      [a, d, l]
    ),
    Et = y.useCallback(
      async (z) => {
        const F = (
          await Te.getUserMedia({ audio: z ? { deviceId: { exact: z } } : !0 })
        ).getTracks();
        if (F.length !== 1)
          throw (
            (Se.error(
              "[transceiver] Only one input is supported for now, detected these tracks",
              F
            ),
            new Error("Only one input is supported for now"))
          );
        const [V] = F;
        (f.current = V.getSettings().deviceId),
          se.current && se.current.track !== V && se.current.track.stop();
        const W = Oi(V, {
          source: cn.Microphone,
          name: "user",
          userName: "User",
          origin: Kn.Local,
          mutedCb: Pt,
        });
        return c(W), Pt(V.muted), W;
      },
      [Pt, Te]
    ),
    Rt = y.useCallback(
      async (z, j) => {
        const V = (
          z === "camera"
            ? await Te.getUserMedia({
                video: j ? { deviceId: { exact: j } } : !0,
              })
            : await Te.getDisplayMedia()
        ).getTracks();
        if (V.length !== 1)
          throw (
            (Se.error(
              "[transceiver] Only one video input is supported for now, detected these tracks",
              V
            ),
            new Error("Only one video input is supported for now"))
          );
        const [W] = V;
        z === "camera" && (g.current = W.getSettings().deviceId),
          Ee.current && Ee.current.track !== W && Ee.current.track.stop();
        const $ = Oi(W, {
          source: z === "camera" ? cn.Camera : cn.ScreenShare,
          name: "user",
          userName: "User",
          origin: Kn.Local,
        });
        return h($), $;
      },
      [Te]
    ),
    ie = y.useCallback(async () => {
      if (
        Ee.current &&
        (Se.debug("[transceiver] Stop and clear video track"),
        Ee.current.track.stop(),
        h(void 0),
        s.current && !s.current.stopped)
      ) {
        Se.debug("[transceiver] Stop the video transceiver");
        try {
          await s.current.sender.replaceTrack(null);
        } catch (z) {
          Se.debug(
            "[transceiver] Failed to stop transceiver on disconnect due to",
            z
          );
        }
      }
    }, []),
    Ie = y.useCallback((z) => {
      const { default_voice_mode: j, modes: F } = z,
        V = F.find((W) => W.mode === j);
      if (!V)
        throw new Error(`No voice status mode found for default mode ${j}`);
      return V;
    }, []),
    wn = y.useCallback(async () => {
      const z = performance.now(),
        j = xt(Vd, () => at()),
        F = xt(qd, () =>
          at().createDataChannel("", { negotiated: !0, id: So })
        );
      (T.current = F),
        xt(zd, () => {
          (F.onopen = () => {
            e.setState(($) => {
              $.metrics.dataChannelOpenTime ||
                ($.metrics.dataChannelOpenTime = new Date());
            });
          }),
            (F.onmessage = ($) => {
              const xe = JSON.parse($.data);
              if (xe.type === "data_message") {
                const Ye = sm().encode(xe.data);
                L.current.forEach((It) => It(Ye));
              }
            }),
            (F.onclose = () => {
              O.current ? (O.current = !1) : x.current.forEach(($) => $()),
                k(ko);
            }),
            (j.oniceconnectionstatechange = () => {
              const $ = at().iceConnectionState,
                xe = om($);
              xe === q.Connected && M.current.forEach((Ye) => Ye()),
                P(xe),
                e.setState((Ye) => {
                  Ye.server.connectionState = xe;
                });
            }),
            (j.ontrack = ($) => {
              if (i.current != null) {
                i.current.srcObject = $.streams[0];
                const xe = $.streams[0].getTracks();
                if (xe.length !== 1)
                  throw (
                    (Se.error(
                      "[transceiver] Only one remote track is supported for now, detected these tracks",
                      xe
                    ),
                    new Error(
                      "Only one remote track is supported for transceiver"
                    ))
                  );
                const [Ye] = xe,
                  It = Oi(Ye, {
                    source: cn.Microphone,
                    name: b === "advanced" ? "audio" : "shout",
                    userName: "Assistant",
                    origin: Kn.Remote,
                  });
                u(It),
                  G(It),
                  Qe((Xt) =>
                    Pn(Xt, (Zr) => {
                      Zr && (Zr.numParticipants = 2);
                    })
                  ),
                  S(ko);
              }
            });
        }),
        xt(Wd, () => {
          (r.current = j.addTransceiver("audio")),
            s.current &&
              !s.current.stopped &&
              (s.current.stop(), j.removeTrack(s.current.sender)),
            (s.current = j.addTransceiver("video", { direction: "sendonly" }));
        });
      const V = await ns(Yd, async () => {
          const $ = await j.createOffer();
          return j.setLocalDescription($), $;
        }),
        W = performance.now();
      return Gd.set({ start_time: z, end_time: W }), { offer: V };
    }, [S, G, k, b, e]),
    _t = y.useCallback(() => {
      const z = performance.now(),
        j = Et();
      return (
        j.then(() => {
          const V = performance.now();
          Kd.set({ start_time: z, end_time: V });
        }),
        {
          completeAudioSetup: async () => {
            const V = await j,
              W = performance.now();
            await o({ avmTrack: V, initialSetup: !0 });
            const $ = performance.now();
            return (
              Xd.set({ start_time: W, end_time: $ }), { microphoneTrack: V }
            );
          },
        }
      );
    }, [Et, o]),
    $r = y.useCallback(() => {
      const z = performance.now(),
        j = at();
      Oe.current && Oe.current.stop(),
        (Oe.current = new im(j, (V) => {
          const W =
            X.current &&
            [q.Disconnected, q.Reconnecting, q.SignalReconnecting].includes(
              X.current
            );
          D.current.forEach(($) => $(W ? le.Lost : V.general)),
            U.current.forEach(($) => $(W ? le.Lost : V.local));
        })),
        Oe.current.start();
      const F = performance.now();
      Hd.set({ start_time: z, end_time: F });
    }, []),
    Qr = y.useCallback(() => {
      (Ne.current = _t()), (st.current = wn());
    }, [wn, _t]),
    Yr = y.useCallback(
      async (z, j, F) => {
        const V = performance.now(),
          W = await ns(Zd, () => F.text()),
          $ = at();
        xt(Jd, () => {
          $.setRemoteDescription({ sdp: W, type: "answer" });
        }),
          Ne.current ||
            (Se.error(
              "[transceiver] Audio input setup step not executed for initial TC offer!"
            ),
            (Ne.current = _t()));
        const { completeAudioSetup: xe } = Ne.current,
          { microphoneTrack: Ye } = await xe();
        G(Ye),
          e.setState((Xt) => {
            (Xt.conversationId = z.conversation_id ?? j.clientThreadId),
              (Xt.voiceSessionId = z.voice_session_id),
              (Xt.voiceMode = z.voice_mode);
          }),
          (de.current = !1),
          P(q.Connected);
        const It = performance.now();
        $d.set({ start_time: V, end_time: It });
      },
      [_t, Ne, G, e]
    ),
    Xr = y.useCallback(
      async (z, j) => {
        if (de.current)
          throw new Error(
            `Not ready to connect, ${JSON.stringify({
              isConnecting: de.current,
            })}`
          );
        (de.current = !0), (st.current ??= wn()), (Ne.current ??= _t());
        const { offer: F } = await st.current,
          V = xt(Qd, () => Ni.beginNegotiation()),
          W = await qo.startTransceiverSession({
            payload: z,
            accessToken: t,
            proofOfWorkAnswer: j.proofOfWorkAnswer,
            eventSource: j.eventSource,
            signal: V,
            dataChannelId: So,
            offer: F,
          });
        return (
          Ni.clearNegotiation(),
          $r(),
          Yr(z, j, W),
          { type: "transceiver", success: !0 }
        );
      },
      [wn, _t, t, $r, Yr]
    ),
    md = y.useMemo(
      () => ({
        room: wt,
        getTracks: Yt,
        getConnectionState: I,
        initVoiceMode: Xr,
        selectVoiceModeMetadata: Ie,
        getTokenSetup: Qr,
      }),
      [wt, Yt, I, Xr, Ie, Qr]
    );
  return B.jsxs(zr.Provider, {
    value: md,
    children: [B.jsx("audio", { ref: i, autoPlay: !0, playsInline: !0 }), n],
  });
};
function Ve() {
  const { room: n } = Wr(),
    e = y.useRef({
      debug: (...t) => Se.debug(`[${n?.name ?? "no room"}]`, ...t),
      encoder: new TextEncoder(),
      decoder: new TextDecoder(),
    }).current;
  return { room: n, ...e };
}
function am() {
  dm(), um(), lm(), cm();
}
function cm() {
  const { room: n, debug: e } = Ve(),
    { cameraTrackState: t } = zo(),
    r = $o().video,
    s = y.useMemo(() => {
      const o = ["audioinput", "audiooutput"];
      return r && o.push("videoinput"), o;
    }, [r]);
  y.useEffect(() => {
    function o() {
      Promise.all(
        s.map(async (a) => {
          if (t !== Ae.Started && a === "videoinput") return;
          const c = await Vo.getLocalDevices(a),
            d = n?.getActiveDevice(a),
            u = await mn(a);
          if (!(d === u?.deviceId)) {
            let h = null;
            if ((u ? (h = u.deviceId) : c[0] && (h = c[0].deviceId), h)) {
              const f = await ss(h, c),
                g = await ss(d, c);
              e(
                `Current active ${a} device "${g}" doesn't match default "${f}", switching to that instead`
              ),
                await n?.switchActiveDevice(a, h),
                re.defaultMediaDeviceChanged.success({ kind: a });
            }
          }
        })
      ).catch((a) => {
        re.defaultMediaDeviceChanged.failure(a);
      });
    }
    if (navigator)
      return (
        navigator.mediaDevices.addEventListener("devicechange", o),
        () => {
          navigator.mediaDevices.removeEventListener("devicechange", o);
        }
      );
  }, [n, e, s, t]);
}
function dm() {
  const { room: n, debug: e } = Ve(),
    t = n?.getActiveDevice("audioinput"),
    i = n?.getActiveDevice("audiooutput");
  y.useEffect(() => {
    async function r() {
      const s = (await mn("audioinput"))?.deviceId,
        o = (await mn("audiooutput"))?.deviceId,
        a = async () => {
          s &&
            t !== s &&
            (e("switching audio input to default"),
            await n?.switchActiveDevice("audioinput", s));
        },
        c = async () => {
          if (o && i !== o) {
            e("switching audio output to default");
            try {
              await n?.switchActiveDevice("audiooutput", o);
            } catch (d) {
              e("failed to switch audio output", d);
            }
          }
        };
      await Promise.all([a(), c()]);
    }
    r();
  }, [t, i, e, n]);
}
function um() {
  const { cameraTrackState: n, finalizeCameraState: e } = zo(),
    { room: t, debug: i } = Ve(),
    r = Pe(),
    o = $o().video,
    a = o ? t?.getActiveDevice("videoinput") : void 0;
  y.useEffect(() => {
    async function c() {
      if (t)
        if (n === Ae.Starting)
          try {
            await t.localParticipant.setCameraEnabled(!0),
              Jn(t, r, "camera_front", "live"),
              e(Ae.Started);
          } catch {
            e(Ae.Stopped);
          }
        else
          n === Ae.Stopping &&
            (await t.localParticipant.setCameraEnabled(!1),
            Jn(t, r, "camera_front", "ended"),
            e(Ae.Stopped));
    }
    c();
  }, [n, e, t, r]),
    y.useEffect(() => {
      async function c() {
        const d = (await mn("videoinput"))?.deviceId;
        await (async () => {
          d &&
            a !== d &&
            (i("switching video input to default"),
            await t?.switchActiveDevice("videoinput", d));
        })();
      }
      o && n === Ae.Started && c();
    }, [a, i, t, o, n]);
}
function lm() {
  const { room: n } = Ve(),
    { screenshareTrackState: e, finalizeScreenshareState: t } = eu(),
    i = Pe();
  y.useEffect(() => {
    async function r() {
      if (n)
        if (e === Ae.Starting)
          try {
            await n.localParticipant.setScreenShareEnabled(!0, {
              video: { displaySurface: "monitor" },
            }),
              Jn(n, i, "screen_share", "live"),
              t(Ae.Started);
          } catch {
            t(Ae.Stopped);
          }
        else
          e === Ae.Stopping &&
            (await n.localParticipant.setScreenShareEnabled(!1),
            Jn(n, i, "screen_share", "ended"),
            t(Ae.Stopped));
    }
    r();
  }, [n, e, t, i]);
}
function ad() {
  const { debug: n } = Ve(),
    e = gt((i) => i.conversationId),
    t = No();
  return y.useCallback(
    async (i) => {
      const r = i,
        s = e && !Lo(e) ? e : void 0,
        o = r ?? s;
      if (o) {
        n(`refetch conversationId ${o}`);
        try {
          await tu(o);
        } catch (a) {
          const c = "Failed to update conversation";
          n(c, a), t.danger(c, { toastId: "refetch_conversation" });
        }
      }
    },
    [e, n, t]
  );
}
var hm = ((n) => (
  (n.EXCELLENT = "excellent"),
  (n.GOOD = "good"),
  (n.POOR = "poor"),
  (n.LOST = "lost"),
  (n.UNKNOWN = "unknown"),
  n
))(hm || {});
const fm = {
    [le.Excellent]: "excellent",
    [le.Good]: "good",
    [le.Poor]: "poor",
    [le.Lost]: "lost",
    [le.Unknown]: "unknown",
  },
  pm = 5e3,
  mm = 2e3,
  gm = (n) => {
    const e = Pe(),
      { room: t } = Ve(),
      i = gt((p) => p.disconnectPending),
      r = gt((p) => p.server.remoteState === pe.Speaking),
      s = gt((p) => p.conversationId) ?? void 0,
      o = Sd(s),
      a = y.useRef(!1),
      c = ad(),
      d = gd(),
      u = Mo(),
      l = gt((p) => p.server.connectionState);
    a.current = r || a.current;
    const h = y.useCallback(
        async (p) => {
          clearTimeout(i),
            e.setState((v) => {
              v.disconnectPending = void 0;
            }),
            t?.disconnect(),
            await c(o),
            e.setState(nu);
          const b = o ?? p;
          b && Wo(d, u, b),
            n?.refetchLater &&
              window.setTimeout(() => {
                c(o);
              }, mm);
        },
        [i, t, c, o, n?.refetchLater, d, u, e]
      ),
      f = a.current && !o && l === q.Connected,
      g = y.useCallback(() => {
        e.setState((p) => {
          p.disconnectPending = window.setTimeout(h, pm);
        });
      }, [h, e]);
    return {
      disconnectPending: i !== void 0,
      shouldDelayDisconnect: f,
      delayDisconnect: g,
      immediateDisconnect: h,
    };
  };
function vm() {
  const n = Cr(),
    e = Mo(),
    t = Pe(),
    { room: i, debug: r, decoder: s } = Ve(),
    {
      disconnectPending: o,
      shouldDelayDisconnect: a,
      delayDisconnect: c,
      immediateDisconnect: d,
    } = gm(),
    u = ad(),
    l = y.useRef(!1),
    h = y.useRef(!1),
    f = y.useRef(!1),
    g = y.useRef(!1),
    { session: p } = Td(),
    b = Hn((P) => P.lastVoiceSessionStartTime),
    v = Uo() === "livekit";
  y.useEffect(() => {
    const P = async (M) => {
        const { new_state: x } = M;
        if (
          (t.setState((O) => {
            (O.voiceMode !== "advanced" || x !== pe.Thinking) &&
              (O.server.remoteState = x);
          }),
          x === pe.Listening && !h.current && b instanceof Date)
        ) {
          const Y = new Date().getTime() - b.getTime();
          re.firstListeningLatency.success({ durationMs: Y }), (h.current = !0);
        }
        if (x === pe.ListeningIntently)
          re.voiceSessionListeningIntently.stateChange();
        else if (x === pe.Listening) {
          if (
            (t.setState((O) => {
              O.metrics.numListening += 1;
            }),
            !f.current)
          ) {
            const O = t.getState().voiceSessionId;
            re.voiceSessionFirstListening.stateChange({
              voice_session_id: O ?? "unknown",
            }),
              (f.current = !0);
          }
          (f.current = !0), re.voiceSessionListening.stateChange();
        } else if (x === pe.Thinking)
          t.setState((O) => {
            O.metrics.numThinking += 1;
          }),
            re.voiceSessionThinking.stateChange();
        else if (x === pe.Speaking) {
          if (
            (t.setState((O) => {
              O.metrics.numSpeaking += 1;
            }),
            !g.current)
          ) {
            const O = t.getState().voiceSessionId;
            re.voiceSessionFirstSpeaking.stateChange({
              voice_session_id: O ?? "unknown",
            }),
              (g.current = !0);
          }
          re.voiceSessionSpeaking.stateChange();
        } else x === pe.Halted && re.voiceSessionHalted.stateChange();
      },
      I = async (M) => {
        t.setState((x) => {
          x.server.usage = M;
        });
      },
      S = async (M) => {
        t.setState((x) => {
          x.server.toolUpdate = { ...M };
        }),
          M.update_type === "hangup" && (a ? c() : d());
      },
      k = async (M) => {
        let x;
        try {
          (x = JSON.parse(s.decode(M))), r("data received", x);
        } catch (O) {
          r("error parsing data", O);
          return;
        }
        switch (
          (t.setState(
            (O) => (
              O.server.messages.push({
                ...x,
                timestamp: new Date(),
                source: "remote",
              }),
              O
            )
          ),
          x.type)
        ) {
          case pt.StateUpdate:
            r("state update", x.payload);
            const { new_state: O, delay_s: Y } = x.payload;
            if (
              ([pe.Thinking, pe.Speaking].includes(O) &&
                t.getState().server.turnContext.clear(),
              O === pe.Listening && !l.current)
            ) {
              (l.current = !0), performance.mark("voice_mode.end");
              const G = performance
                .measure("voice_mode", "voice_mode.start", "voice_mode.end")
                .duration.toFixed(0);
              re.voiceMode.connect({ durationMs: G }),
                t.setState((X) => {
                  X.metrics.sessionConnectedTime ||
                    (X.metrics.sessionConnectedTime = new Date());
                });
            }
            O === pe.Thinking &&
              Y &&
              (r(`${i?.name} delay thinking state by ${Y} seconds`),
              P({ new_state: pe.ListeningIntently }),
              await new Promise((G) => setTimeout(G, Y * 1e3))),
              P(x.payload);
            break;
          case pt.ConversationUpdate: {
            r("conversation update", x.payload);
            const G = t.getState().conversationId,
              { conversation_id: X } = x.payload;
            if (G && Lo(G)) {
              Cd.initThread({
                clientThreadId: G,
                conversationMode: { kind: zi.PrimaryAssistant },
                userId: p?.user?.id,
                accountId: p?.account?.id,
              });
              const se = t.getState().conversationId;
              se != null && iu(n, se, X),
                t.setState((Te) => {
                  Te.conversationId = X;
                }),
                Wo(Go, e, X);
              const Ee = Wi.getGizmoId(Gi(G));
              ru(e, Ee);
            }
            await u(X), o && d(X);
            break;
          }
          case pt.UsageUpdate:
            I(x.payload);
            break;
          case pt.ToolUpdate:
            S(x.payload);
            break;
          case pt.Performance: {
            const G = x.payload.metrics;
            t.setState((X) => {
              G.forEach((se) => {
                se.name === "total_latency_ms"
                  ? X.metrics.totalLatencyMs.push(se.ms)
                  : se.name === "current_rtt_ms" &&
                    X.metrics.currentRttMs.push(se.ms);
              });
            });
            break;
          }
          case pt.StartupTelemetry: {
            const [G] = x.payload.metrics,
              X = x.payload.success;
            r("conversation loaded (startup telemetry)"),
              t.setState((se) => {
                X
                  ? (se.metrics.conversationStartSuccessTime = new Date())
                  : (se.metrics.conversationStartFailTime = new Date()),
                  (se.metrics.conversationLatency = G?.ms ?? -1);
              });
            break;
          }
        }
      },
      T = (M, x) => {
        r("track published", M, x);
      },
      D = () => {
        r("disconnected"),
          t.setState((M) => {
            M.metrics.sessionEndTime = new Date();
          }),
          su(t),
          re.voiceSessionDisconnected.stateChange(),
          Fo();
      },
      U = (M, x) => {
        r(`Connection quality changed for participant ${x?.identity}: ${M}`),
          t.setState((O) => {
            O.server.voiceConnectionQuality = fm[M];
          });
      },
      L = () => {
        t.setState((M) => {
          r("WebRTC connection established"),
            M.metrics.livekitConnectSuccessTime ||
              (M.metrics.livekitConnectSuccessTime = new Date()),
            v &&
              !M.metrics.sessionConnectedTime &&
              (M.metrics.sessionConnectedTime = new Date()),
            (M.hasConnectedOnce = !0);
        });
      };
    return (
      i?.on(C.Connected, L),
      i?.on(C.DataReceived, k),
      i?.on(C.TrackPublished, T),
      i?.on(C.ConnectionQualityChanged, U),
      i?.on(C.Disconnected, D),
      () => {
        i?.off(C.Connected, L),
          i?.off(C.DataReceived, k),
          i?.off(C.TrackPublished, T),
          i?.off(C.ConnectionQualityChanged, U),
          i?.off(C.Disconnected, D);
      }
    );
  }, [n, r, s, c, o, d, b, e, u, i, p?.account?.id, p?.user?.id, a, t, v]);
}
function bm() {
  ym(), km(), Sm(), Tm(), Cm();
}
function ym() {
  const { room: n } = Ve(),
    e = Pe();
  y.useEffect(() => {
    e.setState((t) => {
      t.dev.room = n;
    });
  }, [n, e]);
}
function km() {
  const { getConnectionState: n } = Wr(),
    e = n(),
    t = Pe();
  y.useEffect(() => {
    t.setState((i) => {
      i.server.connectionState = e;
    });
  }, [e, t]);
}
function Sm() {
  const { room: n, debug: e, encoder: t } = Ve(),
    i = Pe();
  y.useEffect(() => {
    const r = !!i.getState().server.actions;
    if (n && !r) {
      const s = async (o) => {
        e("publishing action", o);
        const a = { type: pt.ActionRequest, payload: { action: o } };
        await n.localParticipant.publishData(t.encode(JSON.stringify(a)), {
          reliable: !0,
        }),
          i.setState((c) => {
            c.server.messages.push({
              ...a,
              timestamp: new Date(),
              source: "local",
            });
          });
      };
      i.setState((o) => {
        o.server.actions = {
          [qe.StartListeningIntently]: () => s(qe.StartListeningIntently),
          [qe.StopListeningIntently]: () => s(qe.StopListeningIntently),
          [qe.HaltAllActivity]: () => s(qe.HaltAllActivity),
          [qe.ResumeListening]: () => s(qe.ResumeListening),
          [qe.RelayMessage]: () => s(qe.RelayMessage),
        };
      });
    }
  }, [n, e, t, i]);
}
function Tm() {
  const e = Pe()((i) => i.isVoiceModeActive);
  y.useEffect(
    () => (
      Hn.setState({ isVoiceActive: e }),
      () => {
        Hn.setState({ isVoiceActive: !1 });
      }
    ),
    [e]
  );
  const t = Cr();
  y.useEffect(() => {
    if (e) return wd(t).limitActionGroups([]);
  }, [t, e]);
}
function Cm() {
  const n = Pe(),
    { room: e, encoder: t } = Ve(),
    i = y.useCallback(
      async (r) => {
        await e?.localParticipant.publishData(t.encode(JSON.stringify(r)), {
          reliable: !0,
        }),
          n.setState((s) => {
            s.server.messages.push({
              ...r,
              timestamp: new Date(),
              source: "local",
            });
          });
      },
      [e, t, n]
    );
  y.useEffect(() => {
    n.setState((r) => {
      r.server.turnContext.setPublisher(i);
    });
  }, [i, n]);
}
const Cg = y.memo(function () {
  return vm(), bm(), am(), null;
});
function wg(n) {
  return {
    conversation_id: n.serverThreadId,
    parent_message_id: n.parentMessageId,
    voice_mode: n.isAdvancedMode ? "advanced" : "standard",
    eventSource: n.eventSource,
    clientThreadId: n.clientThreadId,
    gizmo_id: n.gizmoId,
    voice: n.voice,
    ...(n.skipCacheReason
      ? { useVoiceStatusCache: !1, skipCacheReason: n.skipCacheReason }
      : { useVoiceStatusCache: !0 }),
  };
}
function wm({ requestMicPermissions: n } = { requestMicPermissions: !1 }) {
  const e = Oo(),
    t = Pe(),
    i = wu(),
    { voiceName: r, voiceMainLanguage: s } = Ko(),
    o = gt((P) => P.isVoiceModeActive),
    a = ou(),
    { room: c } = Ve(),
    { initVoiceMode: d, selectVoiceModeMetadata: u, getTokenSetup: l } = Wr(),
    h = au(),
    f = cu(),
    g = Pd(),
    p = e.formatMessage({
      id: "useVoiceModeButtonAction.error",
      defaultMessage: "Failed to start voice mode",
    }),
    b = y.useCallback(async () => {
      a &&
        (await c?.disconnect(),
        Hi(null, t),
        t.setState((P) => {
          P.server.remoteState = pe.Halted;
        }));
    }, [a, c, t]);
  return {
    startVoiceMode: y.useCallback(
      async (P) => {
        Ki.setItem(jo.VoiceLastUsed, new Date().toUTCString()),
          (a || P.forceDisconnect) && (await c?.disconnect(), Hi(null, t)),
          n && (await f());
        const I = await mn("audioinput");
        l(),
          t.setState((T) => {
            (T.audioInputDevice = I),
              (T.isVoiceModeActive = !0),
              (T.voiceMode = P.voice_mode),
              (T.server.remoteState = pe.Connecting),
              (T.metrics.sessionCreateTime = new Date()),
              (T.metrics.totalLatencyMs = []),
              (T.metrics.currentRttMs = []),
              (T.metrics.numSpeaking = 0),
              (T.metrics.numThinking = 0),
              (T.metrics.numListening = 0),
              (T.metrics.getStatusSentTime = void 0),
              (T.metrics.getStatusSuccessTime = void 0),
              (T.metrics.getStatusFailedTime = void 0),
              (T.metrics.proofOfWorkStartTime = void 0),
              (T.metrics.proofOfWorkEndTime = void 0),
              (T.metrics.getTokenSentTime = void 0),
              (T.metrics.getTokenSuccessTime = void 0),
              (T.metrics.getTokenFailedTime = void 0),
              (T.metrics.livekitConnectTime = void 0),
              (T.metrics.livekitConnectSuccessTime = void 0),
              (T.metrics.livekitConnectFailTime = void 0),
              (T.metrics.conversationStartSuccessTime = void 0),
              (T.metrics.conversationStartFailTime = void 0),
              (T.metrics.sessionConnectedTime = void 0);
          });
        const S = performance.now();
        let k = "<unset>";
        try {
          re.livekit.connectCalled(),
            t.setState((de) => {
              de.metrics.getStatusSentTime = new Date();
            });
          const T = du(),
            D = is();
          if (P.useVoiceStatusCache)
            if ((rs.set(void 0), T)) re.voiceStatusCache.hit();
            else
              for (const de of uu())
                re.voiceStatusCache.ineligible({ reason: de });
          else
            re.voiceStatusCache.skipped({ reason: P.skipCacheReason }),
              rs.set(P.skipCacheReason);
          P.useVoiceStatusCache &&
            !T &&
            D.length === 0 &&
            is.set(["unexpected-empty-cache"]);
          const U = T?.proofOfWorkPromise,
            L =
              P.useVoiceStatusCache && T
                ? T
                : await h(
                    {
                      conversation_id: P.conversation_id ?? null,
                      requested_voice_mode: P.voice_mode ?? null,
                      gizmo_id: P.gizmo_id ?? null,
                      voice: P.voice,
                      requested_default_model:
                        P.requested_default_model ?? null,
                    },
                    P.eventSource
                  );
          (k = L.voice_session_id),
            Ed.set(L.voice_session_id),
            t.setState((de) => {
              (de.metrics.getStatusSuccessTime = new Date()),
                (de.metrics.proofOfWorkStartTime = new Date());
            });
          const { default_voice_mode: M, chatreq: x } = L;
          performance.mark("livekit.start"),
            performance.mark("voice_mode.start");
          const {
              eventSource: O,
              voice: Y,
              clientThreadId: G,
              voice_mode: X,
              gizmo_id: se,
              ...Ee
            } = P,
            Oe = u(L).default_model_slug,
            st = M === "advanced" ? Oe : void 0,
            Ne =
              P.useVoiceStatusCache && U
                ? await U
                : x
                ? await lu.getEnforcementToken(x)
                : null,
            wt = P.gizmo_id
              ? { kind: zi.GizmoInteraction, gizmo_id: P.gizmo_id }
              : { kind: zi.PrimaryAssistant };
          t.setState((de) => {
            (de.metrics.proofOfWorkEndTime = new Date()),
              (de.metrics.getTokenSentTime = new Date());
          }),
            hu(Ee),
            (
              await d(
                {
                  ...Ee,
                  voice: Y ?? r,
                  language_code: s,
                  voice_session_id: k,
                  timezone_offset_min: new Date().getTimezoneOffset(),
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  voice_mode: M,
                  model_slug: Oe,
                  model_slug_advanced: st,
                  chatreq_token: x?.token,
                  history_and_training_disabled: g,
                  conversation_mode: wt,
                },
                {
                  eventSource: P.eventSource,
                  clientThreadId: P.clientThreadId,
                  proofOfWorkAnswer: Ne,
                }
              )
            ).success &&
              (t.setState((de) => {
                (de.metrics.getTokenSuccessTime = new Date()),
                  (de.metrics.livekitConnectTime = new Date());
              }),
              Hn.setState({ lastVoiceSessionStartTime: new Date() }),
              t.setState((de) => {
                de.server.remoteState = pe.Listening;
              }),
              performance.mark("livekit.end"),
              re.livekit.success({
                durationMs: performance
                  .measure("livekit", "livekit.start", "livekit.end")
                  .duration.toFixed(0),
                voice_session_id: k,
              }),
              re.connectionLatency.success({
                durationMs: performance.now() - S,
              }));
        } catch (T) {
          const D = fu(T);
          t.setState((L) => {
            D ||
              (L.metrics.getStatusSuccessTime ||
                (L.metrics.getStatusFailedTime = new Date()),
              L.metrics.getTokenSuccessTime ||
                (L.metrics.getTokenFailedTime = new Date()));
          });
          const U = pu(t.getState());
          throw (
            (re.livekit.failure(T, {
              ...U,
              voice_session_id: k,
              eventSource: P.eventSource,
              voice: P.voice ?? "(undefined)",
              requested_voice_mode: P.voice_mode ?? "(undefined)",
              gizmo_id: P.gizmo_id ?? "(undefined)",
              user_aborted: D,
            }),
            Se.debug("failed to get voice token", T),
            t.setState((L) => {
              L.server.remoteState = pe.Halted;
            }),
            re.connectionLatency.failure(T, {
              durationMs: performance.now() - S,
              voice_session_id: k,
              user_aborted: D,
            }),
            i.danger(p, { toastId: "start_voice_mode_failure" }),
            Fo(),
            T)
          );
        }
      },
      [f, p, h, a, g, n, c, i, s, r, t, d, u, l]
    ),
    stopVoiceMode: b,
    isConnected: a,
    isVoiceModeActive: o,
  };
}
const Pm = () => Ho().some((e) => e.voice === "shade"),
  To = jo.JumpToShade,
  Em = () => {
    const n = Ki.getItem(To) === "true",
      e = y.useCallback(() => {
        Ki.setItem(To, "true");
      }, []);
    return { alreadyTriggered: n, setAlreadyTriggered: e };
  },
  Rm = 2,
  _m = ({ viewport: n, canvasSize: e, shouldMeasurePerf: t, source: i }) => {
    const r = y.useRef({}),
      s = y.useCallback((o) => {
        const a = o.getExtension("WEBGL_debug_renderer_info");
        a &&
          ((r.current.vendor = o.getParameter(a.UNMASKED_VENDOR_WEBGL)),
          (r.current.renderer = o.getParameter(a.UNMASKED_RENDERER_WEBGL)));
      }, []);
    return (
      y.useEffect(() => {
        const o = {
          vendor: r.current.vendor ?? "(unavailable)",
          renderer: r.current.renderer ?? "(unavailable)",
          width: n[0],
          height: n[1],
          canvasWidth: e[0],
          canvasHeight: e[1],
          dpr: window.devicePixelRatio,
          source: i,
        };
        !Rd(o, r.current) &&
          t &&
          ((r.current = o),
          Jo(Rm).then((c) => {
            re.bloop.performance({ ...o, fps: c });
          }));
      }, [e, t, n, i]),
      s
    );
  },
  Im = 0.25,
  xm = 3,
  Co = 28,
  Ui = 55,
  Fi = 200,
  wo = 1.1,
  Am = ({ viewport: n, initialScale: e, shouldCalibrate: t }) => {
    const [i, r] = y.useState(e),
      s = y.useRef(void 0),
      o = y.useRef(void 0),
      a = y.useRef(void 0),
      c = y.useRef("down"),
      d = y.useCallback(() => {
        const u = c.current === "up" ? xm : Im;
        Jo(u).then((l) => {
          if (l < Co) {
            c.current = "down";
            const h = Math.max(l, 1),
              f = Math.sqrt(h / Co);
            r((g) => g * f), (o.current = window.setTimeout(d, Fi));
          } else if (a.current) {
            const h = l >= Ui,
              f = l >= a.current * wo;
            if (h || f)
              (c.current = "up"),
                r((g) => g * wo),
                (o.current = window.setTimeout(d, Fi));
            else if (l < Ui) {
              c.current = "down";
              const g = Math.sqrt(l / Ui);
              r((p) => p * g);
            }
          }
          a.current = l;
        });
      }, []);
    return (
      y.useEffect(() => {
        const [u, l] = n,
          [h, f] = s.current ?? [];
        return (
          t &&
            (h !== u || f !== l) &&
            ((s.current = n),
            clearTimeout(o.current),
            r(e),
            (o.current = window.setTimeout(d, Fi))),
          () => {
            clearTimeout(o.current);
          }
        );
      }, [t, d, e, n]),
      i
    );
  };
var ji, Po;
function Dm() {
  if (Po) return ji;
  Po = 1;
  var n = _d(),
    e = Id(),
    t = xd(),
    i = Ad(),
    r = mu(),
    s = Math.max;
  function o(a) {
    if (!(a && a.length)) return [];
    var c = 0;
    return (
      (a = n(a, function (d) {
        if (r(d)) return (c = s(d.length, c)), !0;
      })),
      i(c, function (d) {
        return e(a, t(d));
      })
    );
  }
  return (ji = o), ji;
}
var Bi, Eo;
function Mm() {
  if (Eo) return Bi;
  Eo = 1;
  var n = gu(),
    e = Dm(),
    t = n(e);
  return (Bi = t), Bi;
}
var Om = Mm();
const Vi = vd(Om),
  Nm = {
    bands: 5,
    loPass: 100,
    hiPass: 600,
    updateInterval: 32,
    analyserOptions: { fftSize: 2048 },
  },
  Lm = (n) => {
    const e = (t) => {
      let s = 1 - (Math.max(-100, Math.min(-10, t)) * -1) / 100;
      return (s = Math.sqrt(s)), s;
    };
    return n.map((t) => (t === -1 / 0 ? 0 : e(t)));
  };
function Gr(n, e = {}) {
  const t = { ...Nm, ...e },
    [i, r] = y.useState(new Array(t.bands).fill(0));
  return (
    y.useEffect(() => {
      if (!n) return;
      const { analyser: s, cleanup: o } = Um(n, t.analyserOptions),
        a = s.frequencyBinCount,
        c = new Float32Array(a),
        u = setInterval(() => {
          s.getFloatFrequencyData(c);
          let l = new Float32Array(c.length);
          for (let p = 0; p < c.length; p++) l[p] = c[p];
          l = l.slice(t.loPass, t.hiPass);
          const h = Lm(l),
            f = Math.ceil(h.length / t.bands),
            g = [];
          for (let p = 0; p < t.bands; p++) {
            const b = h.slice(p * f, (p + 1) * f).reduce((v, P) => (v += P), 0);
            g.push(b / f);
          }
          r(g);
        }, t.updateInterval);
      return () => {
        o(), clearInterval(u);
      };
    }, [n, JSON.stringify(e)]),
    i
  );
}
function Um(n, e) {
  const t = {
      fftSize: 2048,
      smoothingTimeConstant: 0.8,
      minDecibels: -100,
      maxDecibels: -80,
      ...e,
    },
    i = Fm();
  if (!i) throw new Error("Audio Context not supported on this browser");
  let r;
  n instanceof HTMLAudioElement
    ? (r = i.createMediaElementSource(n))
    : (r = i.createMediaStreamSource(new MediaStream([n])));
  const s = i.createAnalyser();
  (s.minDecibels = t.minDecibels),
    (s.maxDecibels = t.maxDecibels),
    (s.fftSize = t.fftSize),
    (s.smoothingTimeConstant = t.smoothingTimeConstant),
    r.connect(s),
    n instanceof HTMLAudioElement && s.connect(i.destination);
  const o = new Uint8Array(s.frequencyBinCount);
  return {
    calculateVolume: () => {
      s.getByteFrequencyData(o);
      let d = 0;
      for (const l of o) d += Math.pow(l / 255, 2);
      return Math.sqrt(d / o.length);
    },
    analyser: s,
    cleanup: async () => {
      await i.close();
    },
  };
}
function Fm() {
  const n =
    typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (n) return new n({ latencyHint: "interactive" });
}
const jm = 60,
  mi = Math.floor(1e3 / jm),
  Kr = 240,
  cd = 2048,
  dd = new Array(Kr).fill(0),
  Bm = (n) => {
    const e = Gr(n, {
      bands: Kr,
      updateInterval: mi,
      loPass: 0,
      hiPass: 400,
      analyserOptions: { fftSize: cd },
    });
    return e.length === 0 ? dd : e;
  },
  Hr = (n) => {
    const { magnitudes: e, binCount: t, gainMultiplier: i } = n;
    if (e.length === 0) return new Array(t).fill(0);
    const r = Math.ceil(e.length / t),
      s = [];
    for (let o = 0; o < e.length; o += r) {
      const a = Math.min(o + r, e.length),
        c = e.slice(o, a).sort((h, f) => h - f),
        d = Math.floor(c.length / 2);
      let u;
      c.length % 2 === 0 ? (u = (c[d - 1] + c[d]) / 2) : (u = c[d]),
        (u = Math.abs(u)),
        (u *= i);
      const l = u / (u + 1);
      s.push(l);
    }
    return s;
  },
  ud = (n, e) => {
    const t = e.sampleRate,
      i = n.length,
      r = e.bandCount,
      s = e.binCount,
      o = e.gainMultipliers;
    if (o.length !== r)
      throw new Error("gainMultipliers must have length equal to bandCount");
    const a = i * 2,
      c = t / a,
      d = n.map((g, p) => p * c),
      u = 20,
      l = t / 2,
      h = new Array(r + 1).fill(0).map((g, p) => u * Math.pow(l / u, p / r)),
      f = new Array(r).fill(null).map(() => []);
    for (let g = 0; g < d.length; g += 1)
      for (let p = 0; p < r; p += 1)
        if (d[g] >= h[p] && d[g] < h[p + 1]) {
          f[p].push(n[g]);
          break;
        }
    for (let g = 0; g < r; g += 1) {
      const p = f[g],
        b = o[g];
      f[g] = Hr({ magnitudes: p, binCount: s, gainMultiplier: b });
    }
    return f;
  },
  Ro = 60,
  ld = 48e3,
  Vm = 1,
  qm = 2,
  zm = 40,
  Wm = 2;
function _o({ time: n, timeConstant: e }) {
  return 1 - Math.exp(-n / e);
}
function Io(n, e) {
  const t = e[1] - e[0];
  return e[0] + n * t;
}
const qi = (n) => {
    if (
      !Array.isArray(n) ||
      n.length !== 2 ||
      typeof n[0] != "number" ||
      typeof n[1] != "number"
    )
      throw new Error(
        "zip failed - received a value that is not a [number, number] tuple"
      );
  },
  Gm = (n) => {
    const {
        prevAudioData: e,
        prevCumulativeAudioData: t,
        deltaTimeS: i,
        audioDataRaw: r,
      } = n,
      s = r.map((h) => h * i * Ro * Vm),
      o = _o({ time: i, timeConstant: qm }),
      a = Vi(e, s).map((h) => (qi(h), Io(o, h))),
      c = r.map((h) => h * i * Ro * zm),
      d = Vi(t, c).map((h) => (qi(h), h[0] + h[1])),
      u = _o({ time: i, timeConstant: Wm }),
      l = Vi(t, d).map((h) => (qi(h), Io(u, h)));
    return { audioData: a, cumulativeAudioData: l };
  },
  Pg = (n, e) => {
    const t = Bm(n),
      i = ud(t, {
        sampleRate: ld,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers,
      }),
      r = Hr({ magnitudes: t, binCount: 1, gainMultiplier: 1 });
    return { bandMagnitudes: i, cumulativeMagnitude: r };
  };
function Km() {
  let n = null,
    e,
    t = 0;
  const i = 350;
  let r;
  const s = (a, c, d) => a + (c - a) * d,
    o = (a, c) => {
      if (a.length !== c.length) return !1;
      for (let d = 0; d < a.length; d++) if (a[d] !== c[d]) return !1;
      return !0;
    };
  return function (c) {
    const d = performance.now();
    if (!n)
      return (
        (e = {
          bloopColorMain: new Float32Array(c.bloopColorMain),
          bloopColorLow: new Float32Array(c.bloopColorLow),
          bloopColorMid: new Float32Array(c.bloopColorMid),
          bloopColorHigh: new Float32Array(c.bloopColorHigh),
        }),
        (n = {
          bloopColorMain: new Float32Array(c.bloopColorMain),
          bloopColorLow: new Float32Array(c.bloopColorLow),
          bloopColorMid: new Float32Array(c.bloopColorMid),
          bloopColorHigh: new Float32Array(c.bloopColorHigh),
        }),
        (t = d),
        (r = e),
        r
      );
    let u = !1;
    const l = [
      "bloopColorMain",
      "bloopColorLow",
      "bloopColorMid",
      "bloopColorHigh",
    ];
    for (const g of l)
      if (!o(c[g], n[g])) {
        u = !0;
        break;
      }
    u &&
      ((e = {
        bloopColorMain: new Float32Array(r.bloopColorMain),
        bloopColorLow: new Float32Array(r.bloopColorLow),
        bloopColorMid: new Float32Array(r.bloopColorMid),
        bloopColorHigh: new Float32Array(r.bloopColorHigh),
      }),
      (t = d),
      (n = {
        bloopColorMain: new Float32Array(c.bloopColorMain),
        bloopColorLow: new Float32Array(c.bloopColorLow),
        bloopColorMid: new Float32Array(c.bloopColorMid),
        bloopColorHigh: new Float32Array(c.bloopColorHigh),
      }));
    let h = (d - t) / i;
    h > 1 && (h = 1);
    const f = {
      bloopColorMain: new Float32Array(e.bloopColorMain.length),
      bloopColorLow: new Float32Array(e.bloopColorLow.length),
      bloopColorMid: new Float32Array(e.bloopColorMid.length),
      bloopColorHigh: new Float32Array(e.bloopColorHigh.length),
    };
    for (const g of l) {
      const p = e[g].length;
      for (let b = 0; b < p; b++) {
        const v = e[g][b],
          P = c[g][b];
        f[g][b] = s(v, P, h);
      }
    }
    return (r = f), f;
  };
}
const rn = Se.createChild("GLCanvas");
function Hm({
  className: n,
  vert: e,
  frag: t,
  Behaviors: i,
  onViewportUpdate: r,
  onRenderComplete: s,
  onGlAvailable: o,
  onCanvasSizeUpdate: a,
  scale: c,
}) {
  const d = y.useRef(null),
    u = y.useRef(null),
    [l, h] = y.useState(null),
    [f, g] = y.useState(),
    p = y.useRef(
      vu((P) => {
        const { width: I, height: S } = P.contentRect,
          k = Math.floor(Math.min(I ?? 0, S ?? 0));
        h(k), r?.({ width: k, height: k });
      }, 100)
    ),
    b = bu(p.current);
  if (
    (es(() => {
      const P = d.current,
        { width: I, height: S } = P ?? {};
      if (P && l != null && I && S) {
        const k = P.getContext("webgl2", { premultipliedAlpha: !0 });
        k ? g(k) : rn.error("webgl2 context not supported");
      }
    }, [l]),
    es(() => {
      if (!f) return;
      const P = f.createProgram(),
        I = f.createShader(f.VERTEX_SHADER),
        S = f.createShader(f.FRAGMENT_SHADER);
      if (!P) {
        rn.debug("failed to create program");
        return;
      }
      if (!I || !S) {
        rn.debug("failed to create shaders", I, S);
        return;
      }
      let k = "";
      if (
        (f.shaderSource(I, e),
        f.compileShader(I),
        (k += `vertShader:
${f.getShaderInfoLog(I)}
`),
        f.attachShader(P, I),
        f.shaderSource(S, t),
        f.compileShader(S),
        (k += `fragShader:
${f.getShaderInfoLog(S)}
`),
        f.attachShader(P, S),
        f.linkProgram(P),
        f.useProgram(P),
        (k += f.getProgramInfoLog(P)),
        !f.getProgramParameter(P, f.LINK_STATUS))
      )
        throw `Could not compile WebGL program. 

${k}`;
      (u.current = P), rn.debug("program created"), o?.(f, P);
      const T = f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE, 0);
      return (
        T && (f.waitSync(T, 0, f.TIMEOUT_IGNORED), s?.()),
        () => {
          rn.debug("cleaning up"),
            (u.current = null),
            f.detachShader(P, I),
            f.detachShader(P, S),
            f.deleteShader(I),
            f.deleteShader(S),
            f.deleteProgram(P);
        }
      );
    }, [f, t, e]),
    l != null && f && d.current)
  ) {
    const P = d.current,
      I = l * window.devicePixelRatio * (c ?? 1);
    (P.width = I),
      (P.height = I),
      f.viewport(0, 0, I, I),
      a?.({ width: I, height: I });
  }
  const v = u.current;
  return B.jsxs("div", {
    className: n,
    ref: b,
    children: [
      B.jsx(
        "canvas",
        { ref: d, style: { width: l ?? void 0, height: l ?? void 0 } },
        l
      ),
      f && v && i && B.jsx(i, { ctx: f, program: v }),
    ],
  });
}
function Jm({
  GLUniformsSetter: n,
  textureImage: e,
  textureName: t,
  variablesRef: i,
  className: r,
  vert: s,
  frag: o,
  onViewportUpdate: a,
  onRenderComplete: c,
  onGlAvailable: d,
  onCanvasSizeUpdate: u,
  scale: l,
}) {
  const h = y.useRef(void 0),
    f = y.useCallback(
      async (b, v) => {
        if (((h.current = new n(b, v)), e && t)) {
          const P = b.createTexture();
          b.bindTexture(b.TEXTURE_2D, P),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR),
            b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, e);
          const I = b.getUniformLocation(v, t);
          b.activeTexture(b.TEXTURE0),
            b.bindTexture(b.TEXTURE_2D, P),
            b.uniform1i(I, 0);
        }
        d?.(b, v);
      },
      [n, e, t, d]
    ),
    g = y.useRef(void 0),
    p = y.useCallback(() => {
      h.current && i.current && h.current.setVariablesAndRender(i.current),
        (g.current = requestAnimationFrame(p));
    }, [i]);
  return (
    y.useEffect(
      () => (
        p(),
        () => {
          g.current && cancelAnimationFrame(g.current);
        }
      ),
      [p]
    ),
    B.jsx(Hm, {
      className: r,
      vert: s,
      frag: o,
      onViewportUpdate: a,
      onRenderComplete: c,
      onGlAvailable: f,
      onCanvasSizeUpdate: u,
      scale: l,
      Behaviors: () => null,
    })
  );
}
const $m = "https://cdn.oaistatic.com/assets/noise-watercolor-m3j88gni.webp",
  Qm = { src: $m };
let hd;
const ci = new window.Image();
ci.crossOrigin = "anonymous";
ci.src = Qm.src;
ci.onload = () => {
  hd = ci;
};
var Ym = `#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,
  Xm = `#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;
class Jr {
  #i;
  #o;
  #e;
  #r = [];
  #s = {};
  #t;
  #n;
  static #a = "BlorbUniformsObject";
  constructor(e, t) {
    this.#e = e;
    const i = e.getUniformBlockIndex(t, Jr.#a),
      r = e.getActiveUniformBlockParameter(t, i, e.UNIFORM_BLOCK_DATA_SIZE);
    (this.#t = e.createBuffer()),
      e.bindBuffer(e.UNIFORM_BUFFER, this.#t),
      e.bufferData(e.UNIFORM_BUFFER, r, e.DYNAMIC_DRAW);
    const s = 0;
    e.bindBufferBase(e.UNIFORM_BUFFER, s, this.#t),
      e.uniformBlockBinding(t, i, s);
    const o = e.getActiveUniformBlockParameter(
      t,
      i,
      e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES
    );
    (this.#r = []), (this.#s = {});
    for (let a = 0; a < o.length; a++) {
      const c = o[a],
        d = e.getActiveUniform(t, c);
      if (!d) throw new Error("No uniformInfo for index " + c);
      let u = d.name;
      u = u.replace(/\[0\]$/, "");
      const l = e.getActiveUniforms(t, [c], e.UNIFORM_OFFSET)[0];
      this.#r.push(u), (this.#s[u] = l);
    }
    (this.#n = new ArrayBuffer(r)),
      (this.#i = new Float32Array(this.#n)),
      (this.#o = new Int32Array(this.#n));
  }
  setVariablesAndRender(e) {
    for (const t of this.#r) {
      const [, i] = t.split("."),
        s = this.#s[t] / 4,
        o = e[i];
      typeof o == "number"
        ? (this.#i[s] = o)
        : typeof o == "boolean"
        ? (this.#o[s] = o ? 1 : 0)
        : Array.isArray(o) && this.#i.set(o, s);
    }
    this.#e.bindBuffer(this.#e.UNIFORM_BUFFER, this.#t),
      this.#e.bufferSubData(this.#e.UNIFORM_BUFFER, 0, this.#n),
      this.#e.drawArrays(this.#e.TRIANGLE_STRIP, 0, 6);
  }
}
function H(n) {
  const e = n.replace("#", ""),
    t = parseInt(e.substring(0, 2), 16) / 255,
    i = parseInt(e.substring(2, 4), 16) / 255,
    r = parseInt(e.substring(4, 6), 16) / 255;
  return new Float32Array([t, i, r]);
}
const sn = {
    BLUE: {
      bloopColorMain: H("#DCF7FF"),
      bloopColorLow: H("#0181FE"),
      bloopColorMid: H("#A4EFFF"),
      bloopColorHigh: H("#FFFDEF"),
    },
    DARK_BLUE: {
      bloopColorMain: H("#DAF5FF"),
      bloopColorLow: H("#0066CC"),
      bloopColorMid: H("#2EC6F5"),
      bloopColorHigh: H("#72EAF5"),
    },
    GREYSCALE: {
      bloopColorMain: H("#D7D7D7"),
      bloopColorLow: H("#303030"),
      bloopColorMid: H("#989898"),
      bloopColorHigh: H("#FFFFFF"),
    },
    WHITE: {
      bloopColorMain: H("#FFFFFF"),
      bloopColorLow: H("#FFFFFF"),
      bloopColorMid: H("#FFFFFF"),
      bloopColorHigh: H("#FFFFFF"),
    },
    BLACK: {
      bloopColorMain: H("#000000"),
      bloopColorLow: H("#000000"),
      bloopColorMid: H("#000000"),
      bloopColorHigh: H("#000000"),
    },
    ANGSTY_BLACK: {
      bloopColorMain: H("#494949"),
      bloopColorLow: H("#000000"),
      bloopColorMid: H("#7F7F7F"),
      bloopColorHigh: H("#696969"),
    },
    HELLO_TIBOR: {
      bloopColorMain: H("#FFE987"),
      bloopColorLow: H("#E58B28"),
      bloopColorMid: H("#FB7256"),
      bloopColorHigh: H("#F3FDFE"),
    },
  },
  Zm = ({ isAdvanced: n, overrideColor: e }) => {
    const t = Bo();
    return e && sn[e] ? sn[e] : n ? sn.BLUE : t ? sn.WHITE : sn.BLACK;
  },
  xo = [300, 300],
  eg = { bands: 4, loPass: 0, hiPass: 400 },
  tg = (n) => {
    const e = Gr(n, {
      bands: Kr,
      updateInterval: mi,
      loPass: 0,
      hiPass: 400,
      analyserOptions: { fftSize: cd },
    });
    return e.length === 0 ? dd : e;
  },
  ng = (n, e) => {
    const t = tg(n),
      i = ud(t, {
        sampleRate: ld,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers,
      }),
      r = Hr({ magnitudes: t, binCount: 1, gainMultiplier: 1 });
    return { bandMagnitudes: i, cumulativeMagnitude: r };
  },
  ig = (n) => {
    const [e, t] = y.useState({
        audioData: [0, 0, 0, 0],
        cumulativeAudioData: [0, 0, 0, 0],
      }),
      i = y.useRef([0, 0, 0, 0]),
      r = y.useRef(void 0),
      s = y.useRef(performance.now()),
      { bandMagnitudes: o, cumulativeMagnitude: a } = ng(n, {
        bands: 3,
        bins: 1,
        gainMultipliers: [10, 1, 1],
      });
    i.current = [...o, a].flat();
    const c = y.useCallback(() => {
      const d = performance.now(),
        u = (d - s.current) / 1e3;
      s.current = d;
      const l = i.current,
        { audioData: h, cumulativeAudioData: f } = e,
        g = Gm({
          deltaTimeS: u,
          audioDataRaw: l,
          prevAudioData: h,
          prevCumulativeAudioData: f,
        });
      t(g);
    }, [e]);
    return (
      y.useEffect(
        () => (
          r.current || (r.current = window.setInterval(c, mi)),
          () => {
            clearInterval(r.current), (r.current = void 0);
          }
        ),
        [c]
      ),
      e
    );
  },
  Ao = Promise.resolve();
function fd({ url: n, readyToPlay: e }) {
  const t = y.useRef(void 0),
    i = y.useRef(Ao);
  return (
    y.useEffect(
      () => (
        t.current || (t.current = document.createElement("audio")),
        () => {
          i.current.then(() => {
            t.current &&
              (t.current.pause(),
              t.current.removeAttribute("src"),
              t.current.remove(),
              (i.current = Ao));
          });
        }
      ),
      []
    ),
    y.useEffect(() => {
      n &&
        t.current &&
        t.current.src !== n &&
        e &&
        i.current.then(() => {
          t.current &&
            ((t.current.crossOrigin = "anonymous"),
            (t.current.src = n),
            (i.current = t.current.play()));
        });
    }, [e, n]),
    t.current
  );
}
function rg({ className: n, url: e }) {
  const [t, i] = y.useState(!1),
    r = fd({ url: e, readyToPlay: t }),
    s = Gr(r, eg),
    o = y.useMemo(() => [0, 0, 0, 0], []);
  return B.jsx(pd, {
    className: n,
    isAdvanced: !1,
    avgMag: s,
    cumulativeAudioData: o,
    onRenderComplete: () => i(!0),
  });
}
function sg({ className: n, url: e, overrideColor: t }) {
  const [i, r] = y.useState(!1),
    s = fd({ url: e, readyToPlay: i }),
    o = ig(s),
    { audioData: a, cumulativeAudioData: c } = o;
  return B.jsx(pd, {
    className: n,
    isAdvanced: !0,
    overrideColor: t,
    avgMag: a,
    cumulativeAudioData: c,
    onRenderComplete: () => r(!0),
  });
}
const pd = ({
  className: n,
  avgMag: e,
  cumulativeAudioData: t,
  isAdvanced: i,
  overrideColor: r,
  onRenderComplete: s,
}) => {
  const o = Bo(),
    a = y.useMemo(() => performance.now() / 1e3, []),
    c = y.useMemo(() => performance.now() / 1e3, []),
    d = y.useRef(void 0),
    u = y.useRef(Km()),
    [l, h] = y.useState(xo),
    { canvasSizeRef: f, handleCanvasSizeUpdate: g } = yu(xo),
    p = y.useCallback((T) => {
      h([T.width, T.height]);
    }, []),
    [b, v] = y.useState(performance.now() / 1e3);
  y.useEffect(() => {
    const T = setInterval(() => {
      v(performance.now() / 1e3);
    }, mi);
    return () => clearInterval(T);
  }, []);
  const P = Zm({ isAdvanced: i, overrideColor: r }),
    I = u.current(P),
    S = _m({
      viewport: l,
      canvasSize: f.current,
      shouldMeasurePerf: !0,
      source: "VoicePicker",
    }),
    k = Am({ shouldCalibrate: !0, viewport: l, initialScale: 1 });
  return (
    (d.current = {
      time: b,
      micLevel: 0,
      stateListen: 0,
      listenTimestamp: 0,
      stateThink: 0,
      thinkTimestamp: 0,
      stateSpeak: 1,
      speakTimestamp: c,
      readyTimestamp: a,
      stateHalt: 0,
      haltTimestamp: 0,
      touchDownTimestamp: 0,
      touchUpTimestamp: 0,
      stateFailedToConnect: 0,
      failedToConnectTimestamp: 0,
      avgMag: e,
      cumulativeAudio: t,
      isNewBloop: !0,
      isAdvancedBloop: i,
      bloopColorMain: Array.from(I.bloopColorMain),
      bloopColorLow: Array.from(I.bloopColorLow),
      bloopColorMid: Array.from(I.bloopColorMid),
      bloopColorHigh: Array.from(I.bloopColorHigh),
      isDarkMode: o,
      screenScaleFactor: window.devicePixelRatio,
      viewport: l,
      silenceAmount: 0,
      silenceTimestamp: 0,
      fadeBloopWhileListening: !1,
    }),
    B.jsx(Jm, {
      className: Lt("flex items-center justify-center", n),
      variablesRef: d,
      onViewportUpdate: p,
      onRenderComplete: s,
      textureImage: hd,
      textureName: "uTextureNoise",
      onGlAvailable: S,
      onCanvasSizeUpdate: g,
      scale: k,
      GLUniformsSetter: Jr,
      vert: Xm,
      frag: Ym,
    })
  );
};
function og({
  isUnauthenticated: n,
  loading: e,
  handleLoginClick: t,
  handleCancelClick: i,
  handleConfirmClick: r,
  selectedVoice: s,
  currentVoiceName: o,
  cameFromNux: a,
}) {
  const c = "w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";
  return n
    ? B.jsxs(B.Fragment, {
        children: [
          B.jsx(En, {
            className: Lt(c, "text-white"),
            onClick: t,
            children: e
              ? B.jsx(ts, {})
              : B.jsx(mt, { id: "IRALWH", defaultMessage: "Log in" }),
          }),
          B.jsx(En, {
            className: Lt(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: B.jsx(mt, {
              id: "8fumUc",
              defaultMessage: "Back to chat",
            }),
          }),
        ],
      })
    : B.jsxs(B.Fragment, {
        children: [
          B.jsx(En, {
            className: Lt(c, "text-white"),
            onClick: r,
            children: e
              ? B.jsx(ts, {})
              : s?.voice === o && !a
              ? B.jsx(mt, { id: "MyKAgb", defaultMessage: "Done" })
              : B.jsx(mt, { id: "7+3LaJ", defaultMessage: "Start new chat" }),
          }),
          B.jsx(En, {
            className: Lt(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: B.jsx(mt, { id: "dUn4Wd", defaultMessage: "Cancel" }),
          }),
        ],
      });
}
const ag = {
  offscreenLeft: { x: "-24rem", opacity: 0 },
  left: { x: "-12rem", opacity: 0.5 },
  center: { x: "0", opacity: 1 },
  right: { x: "12rem", opacity: 0.5 },
  offscreenRight: { x: "24rem", opacity: 0 },
};
function Eg({
  conversationId: n,
  onClose: e,
  cameFromNux: t = !1,
  initialVoiceName: i,
}) {
  const r = Cr(),
    s = !Dd(r),
    { voiceName: o } = Ko(),
    a = Pe(),
    c = Uo(),
    d = Ho(),
    [u, l] = y.useState(!1),
    h = Wi.getGizmoId(Gi(n)),
    [f, g] = y.useState(!1),
    [p, b] = y.useState(!1);
  y.useEffect(() => {
    requestAnimationFrame(() => g(!0));
  }, []);
  const [v, P] = y.useState(!1),
    [I, S] = y.useState(null);
  y.useEffect(() => {
    if (d.length > 0) {
      const ie = d.findIndex((Ie) => Ie.voice === (i || o));
      ie >= 0 ? S(ie) : S(2), P(!0);
    }
  }, [d, o, i]);
  const k = I != null ? (I - 2 + d.length) % d.length : 0,
    T = I != null ? (I - 1 + d.length) % d.length : 1,
    D = I != null ? (I + 1) % d.length : 3,
    U = I != null ? (I + 2) % d.length : 4,
    L = d[I ?? 0],
    M = d[k],
    x = d[T],
    O = d[D],
    Y = d[U],
    G = Pm(),
    { alreadyTriggered: X, setAlreadyTriggered: se } = Em();
  y.useEffect(() => {
    if (G && !X) {
      const ie = d.findIndex((Ie) => Ie.voice === "shade");
      ie !== -1 && (S(ie), se());
    }
    return () => {
      G && se();
    };
  }, [G, X, d, S, se]);
  const Ee = y.useMemo(() => {
      if (G && L?.voice === "shade") return "ANGSTY_BLACK";
    }, [L?.voice, G]),
    Te = (ie) => {
      S(ie);
    },
    { stopVoiceMode: Oe, startVoiceMode: st } = wm({
      requestMicPermissions: t,
    }),
    { setValue: Ne } = Cu(Md.VoiceName),
    wt = gt((ie) => ie.voiceMode),
    Qe = t && !h ? "advanced" : wt,
    de = y.useCallback(() => {
      b(!t),
        setTimeout(() => {
          const ie = I != null ? d[I]?.voice : d[0]?.voice;
          sessionStorage.setItem("selectedVoiceName", ie),
            Od(r, {
              authType: "login",
              callback: (Ie) => {
                Nd.logLogInButtonClicked({
                  provider: Ie,
                  location: "Voice Picker Page",
                });
              },
            });
        }, gi);
    }, [t, r, I, d]),
    ot = y.useCallback(async () => {
      b(!t),
        setTimeout(async () => {
          l(!0);
          const ie = I != null ? d[I]?.voice : d[0]?.voice;
          if (t || ie !== o) {
            t || re.voiceSelected.click({ action: "changed", voice: ie }),
              Ne(ie),
              await Oe(),
              Go("/");
            try {
              t
                ? a.setState((Ie) => {
                    Ie.isVoiceModeActive = !0;
                  })
                : await st({
                    conversation_id: void 0,
                    eventSource: "voice_picker",
                    voice_mode: Qe,
                    voice: ie,
                    clientThreadId: Ld(),
                    gizmo_id: Wi.getGizmoId(Gi(n)),
                    skipCacheReason: "user-switched-voice",
                  });
            } catch (Ie) {
              Ud.addError(
                `Failed to start voice mode after voice picker: ${Ie}`,
                { protocol: c }
              );
            }
          } else re.voiceSelected.click({ action: "kept", voice: o });
          l(!1), e();
        }, gi);
    }, [t, n, o, e, I, Ne, st, Oe, Qe, d, a, c]),
    at = () => {
      b(!0), setTimeout(e, gi);
    };
  ku({ setSelectedVoiceIndex: S, prevVoiceIndex: T, nextVoiceIndex: D });
  const [Pt, Yt] = y.useState(!1),
    Et = (ie) => {
      ie === "prev" ? Te(T) : ie === "next" && Te(D),
        Yt(!0),
        setTimeout(() => {
          Yt(!1);
        }, 175);
    },
    Rt = y.useMemo(
      () => ({
        className: "h-max min-h-bloop w-max min-w-bloop",
        url: L?.preview_url,
      }),
      [L?.preview_url]
    );
  return !v || I == null
    ? B.jsx("div", {
        className:
          "bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full",
      })
    : B.jsxs("div", {
        className: `fixed start-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${
          f && !p ? "opacity-100" : "opacity-0"
        }`,
        children: [
          B.jsx("h1", {
            className: "mt-36 mb-8 text-3xl font-semibold",
            children: s
              ? B.jsx(mt, {
                  id: "P4GR/e",
                  defaultMessage: "Try voice mode for free",
                })
              : B.jsx(mt, { id: "2whyE9", defaultMessage: "Choose a voice" }),
          }),
          B.jsx("div", {
            className: "flex h-full w-full items-center justify-center",
            children: L
              ? (t && !h) || Qe === "advanced"
                ? B.jsx(sg, { ...Rt, overrideColor: Ee })
                : B.jsx(rg, { ...Rt })
              : null,
          }),
          B.jsx("div", {
            className: "mb-8 flex items-center justify-between text-center",
            children: B.jsxs("div", {
              className: "relative flex h-24 w-48",
              children: [
                B.jsx(on, { voice: M, variant: "offscreenLeft" }, M?.name),
                B.jsx(
                  on,
                  { voice: x, variant: "left", onClick: () => Te(T) },
                  x?.name
                ),
                B.jsx(Do, {
                  direction: "prev",
                  onClick: () => Et("prev"),
                  isFading: Pt,
                }),
                B.jsx(on, { voice: L, variant: "center" }, L?.name),
                B.jsx(Do, {
                  direction: "next",
                  onClick: () => Et("next"),
                  isFading: Pt,
                }),
                B.jsx(
                  on,
                  { voice: O, variant: "right", onClick: () => Te(D) },
                  O?.name
                ),
                B.jsx(on, { voice: Y, variant: "offscreenRight" }, Y?.name),
                B.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full -translate-x-52 transform bg-linear-to-r from-[var(--main-surface-background)] to-transparent",
                }),
                B.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full translate-x-52 transform bg-linear-to-l from-[var(--main-surface-background)] to-transparent",
                }),
                B.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800",
                }),
                B.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800",
                }),
              ],
            }),
          }),
          B.jsx("div", {
            className: "mb-36 flex flex-col space-y-3",
            children: B.jsx(og, {
              isUnauthenticated: s,
              loading: u,
              handleLoginClick: de,
              handleCancelClick: at,
              handleConfirmClick: ot,
              selectedVoice: L,
              currentVoiceName: o,
              cameFromNux: t,
            }),
          }),
        ],
      });
}
function on({ voice: n, variant: e, onClick: t }) {
  return B.jsxs(bd.button, {
    onClick: t,
    className:
      "absolute flex w-48 flex-col items-center justify-center select-none",
    variants: ag,
    animate: e,
    initial: e,
    transition: { duration: 0.25, ease: "easeInOut" },
    children: [
      B.jsx("p", {
        className: `text-lg ${e === "center" ? "font-semibold" : ""}`,
        children: n?.name,
      }),
      B.jsx("p", {
        className: "text-sm text-gray-600 dark:text-[var(--text-secondary)]",
        children: n?.description,
      }),
    ],
  });
}
function Do({ direction: n, onClick: e, isFading: t }) {
  const i = n === "prev" ? Su : Tu,
    r = Oo(),
    s =
      n === "prev"
        ? r.formatMessage({ id: "ajuz05", defaultMessage: "Previous voice" })
        : r.formatMessage({ id: "Dr8wrw", defaultMessage: "Next voice" });
  return B.jsx("button", {
    className: Lt(
      "absolute top-2 z-50 transition-opacity duration-175",
      n === "prev" ? "-start-4" : "-end-4",
      t ? "opacity-20" : "opacity-100"
    ),
    onClick: e,
    "aria-label": s,
    children: B.jsx(i, {
      className:
        "text-token-text-quaternary hover:text-token-text-secondary h-6 w-6",
    }),
  });
}
export {
  Gp as $,
  cn as A,
  mi as B,
  yg as C,
  kg as D,
  hg as E,
  td as F,
  Jm as G,
  Tg as H,
  bg as I,
  Sg as J,
  Cg as K,
  me as L,
  Zn as M,
  pg as N,
  mg as O,
  Nf as R,
  zf as S,
  R as T,
  Eg as V,
  Jp as W,
  gg as Y,
  ai as _,
  wu as a,
  C as b,
  q as c,
  fn as d,
  Ac as e,
  mo as f,
  wg as g,
  gm as h,
  hm as i,
  $o as j,
  Wr as k,
  Kn as l,
  Pg as m,
  Zm as n,
  _m as o,
  Am as p,
  Ym as q,
  Jr as r,
  Gm as s,
  hd as t,
  wm as u,
  Xm as v,
  Gr as w,
  Pm as x,
  vg as y,
  Em as z,
};
//# sourceMappingURL=khdhk3z8wzwgotvk.js.map
