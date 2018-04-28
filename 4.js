(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/intl-pluralrules/plural-rules.js":
/*!*******************************************************!*\
  !*** ./node_modules/intl-pluralrules/plural-rules.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _makePlural = __webpack_require__(/*! make-plural */ "./node_modules/make-plural/umd/plurals.js");

var _makePlural2 = _interopRequireDefault(_makePlural);

var _pluralCategories = __webpack_require__(/*! make-plural/umd/pluralCategories */ "./node_modules/make-plural/umd/pluralCategories.js");

var _pluralCategories2 = _interopRequireDefault(_pluralCategories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// does not check for duplicate subtags
var isStructurallyValidLanguageTag = function isStructurallyValidLanguageTag(locale) {
    return locale.split('-').every(function (subtag) {
        return (/[a-z0-9]+/i.test(subtag)
        );
    });
};

var canonicalizeLocaleList = function canonicalizeLocaleList(locales) {
    if (!locales) return [];
    if (!Array.isArray(locales)) locales = [locales];
    return locales.map(function (tag) {
        // Requiring tag to be a String or Object means that the Number value
        // NaN will not be interpreted as the language tag "nan", which stands
        // for Min Nan Chinese.
        switch (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) {
            case 'string':
                break;
            case 'object':
                tag = tag.toString();break;
            default:
                throw new TypeError('Locales should be strings, ' + JSON.stringify(tag) + " isn't.");
        }
        if (!isStructurallyValidLanguageTag(tag)) {
            throw new RangeError('The locale ' + JSON.stringify(tag) + ' is not a structurally valid BCP 47 language tag.');
        }
        return tag;
    }).reduce(function (seen, tag) {
        if (seen.indexOf(tag) < 0) seen.push(tag);
        return seen;
    }, []);
};

var defaultLocale = function defaultLocale() {
    return typeof navigator !== 'undefined' && navigator && (navigator.userLanguage || navigator.language) || 'en-US';
};

var findLocale = function findLocale(locale) {
    do {
        if (_makePlural2.default[locale]) return locale;
        locale = locale.replace(/-?[^-]*$/, '');
    } while (locale);
    return null;
};

var resolveLocale = function resolveLocale(locales) {
    var canonicalLocales = canonicalizeLocaleList(locales);
    for (var i = 0; i < canonicalLocales.length; ++i) {
        var lc = findLocale(canonicalLocales[i]);
        if (lc) return lc;
    }
    return findLocale(defaultLocale());
};

var getType = function getType(type) {
    if (!type) return 'cardinal';
    if (type === 'cardinal' || type === 'ordinal') return type;
    throw new RangeError('Not a valid plural type: ' + JSON.stringify(type));
};

var handleLocaleMatcher = function handleLocaleMatcher(localeMatcher) {
    if (localeMatcher && localeMatcher !== 'best fit' && typeof console !== 'undefined') {
        console.warn('intl-polyfill only supports `best fit` localeMatcher');
    }
};

var PluralRules = function () {
    _createClass(PluralRules, null, [{
        key: 'supportedLocalesOf',
        value: function supportedLocalesOf(locales) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                localeMatcher = _ref.localeMatcher;

            handleLocaleMatcher(localeMatcher);
            return canonicalizeLocaleList(locales).filter(findLocale);
        }
    }]);

    function PluralRules(locales) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            localeMatcher = _ref2.localeMatcher,
            type = _ref2.type;

        _classCallCheck(this, PluralRules);

        handleLocaleMatcher(localeMatcher);
        this.type = getType(type);
        this.locale = resolveLocale(locales);
    }

    _createClass(PluralRules, [{
        key: 'resolvedOptions',
        value: function resolvedOptions() {
            return {
                locale: this.locale,
                pluralCategory: _pluralCategories2.default[this.locale][this.type],
                type: this.type
            };
        }
    }, {
        key: 'select',
        value: function select(number) {
            return _makePlural2.default[this.locale](number, this.type === 'ordinal');
        }
    }]);

    return PluralRules;
}();

exports.default = PluralRules;

/***/ }),

/***/ "./node_modules/intl-pluralrules/polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/intl-pluralrules/polyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _pluralRules = __webpack_require__(/*! ./plural-rules */ "./node_modules/intl-pluralrules/plural-rules.js");

var _pluralRules2 = _interopRequireDefault(_pluralRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof Intl === 'undefined') {
    if (typeof global !== 'undefined') {
        global.Intl = { PluralRules: _pluralRules2.default };
    } else if (typeof window !== 'undefined') {
        window.Intl = { PluralRules: _pluralRules2.default };
    } else {
        undefined.Intl = { PluralRules: _pluralRules2.default };
    }
} else if (!Intl.PluralRules) {
    Intl.PluralRules = _pluralRules2.default;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/make-plural/umd/pluralCategories.js":
/*!**********************************************************!*\
  !*** ./node_modules/make-plural/umd/pluralCategories.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _cc = [
  {cardinal:["other"],ordinal:["other"]},
  {cardinal:["one","other"],ordinal:["other"]},
  {cardinal:["one","other"],ordinal:["one","other"]},
  {cardinal:["one","two","other"],ordinal:["other"]}
];

(function (root, pluralCategories) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (pluralCategories),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, {
af: _cc[1],
ak: _cc[1],
am: _cc[1],
ar: {cardinal:["zero","one","two","few","many","other"],ordinal:["other"]},
ars: {cardinal:["zero","one","two","few","many","other"],ordinal:["other"]},
as: {cardinal:["one","other"],ordinal:["one","two","few","many","other"]},
asa: _cc[1],
ast: _cc[1],
az: {cardinal:["one","other"],ordinal:["one","few","many","other"]},
be: {cardinal:["one","few","many","other"],ordinal:["few","other"]},
bem: _cc[1],
bez: _cc[1],
bg: _cc[1],
bh: _cc[1],
bm: _cc[0],
bn: {cardinal:["one","other"],ordinal:["one","two","few","many","other"]},
bo: _cc[0],
br: {cardinal:["one","two","few","many","other"],ordinal:["other"]},
brx: _cc[1],
bs: {cardinal:["one","few","other"],ordinal:["other"]},
ca: {cardinal:["one","other"],ordinal:["one","two","few","other"]},
ce: _cc[1],
cgg: _cc[1],
chr: _cc[1],
ckb: _cc[1],
cs: {cardinal:["one","few","many","other"],ordinal:["other"]},
cy: {cardinal:["zero","one","two","few","many","other"],ordinal:["zero","one","two","few","many","other"]},
da: _cc[1],
de: _cc[1],
dsb: {cardinal:["one","two","few","other"],ordinal:["other"]},
dv: _cc[1],
dz: _cc[0],
ee: _cc[1],
el: _cc[1],
en: {cardinal:["one","other"],ordinal:["one","two","few","other"]},
eo: _cc[1],
es: _cc[1],
et: _cc[1],
eu: _cc[1],
fa: _cc[1],
ff: _cc[1],
fi: _cc[1],
fil: _cc[2],
fo: _cc[1],
fr: _cc[2],
fur: _cc[1],
fy: _cc[1],
ga: {cardinal:["one","two","few","many","other"],ordinal:["one","other"]},
gd: {cardinal:["one","two","few","other"],ordinal:["other"]},
gl: _cc[1],
gsw: _cc[1],
gu: {cardinal:["one","other"],ordinal:["one","two","few","many","other"]},
guw: _cc[1],
gv: {cardinal:["one","two","few","many","other"],ordinal:["other"]},
ha: _cc[1],
haw: _cc[1],
he: {cardinal:["one","two","many","other"],ordinal:["other"]},
hi: {cardinal:["one","other"],ordinal:["one","two","few","many","other"]},
hr: {cardinal:["one","few","other"],ordinal:["other"]},
hsb: {cardinal:["one","two","few","other"],ordinal:["other"]},
hu: _cc[2],
hy: _cc[2],
id: _cc[0],
ig: _cc[0],
ii: _cc[0],
"in": _cc[0],
io: _cc[1],
is: _cc[1],
it: {cardinal:["one","other"],ordinal:["many","other"]},
iu: _cc[3],
iw: {cardinal:["one","two","many","other"],ordinal:["other"]},
ja: _cc[0],
jbo: _cc[0],
jgo: _cc[1],
ji: _cc[1],
jmc: _cc[1],
jv: _cc[0],
jw: _cc[0],
ka: {cardinal:["one","other"],ordinal:["one","many","other"]},
kab: _cc[1],
kaj: _cc[1],
kcg: _cc[1],
kde: _cc[0],
kea: _cc[0],
kk: {cardinal:["one","other"],ordinal:["many","other"]},
kkj: _cc[1],
kl: _cc[1],
km: _cc[0],
kn: _cc[1],
ko: _cc[0],
ks: _cc[1],
ksb: _cc[1],
ksh: {cardinal:["zero","one","other"],ordinal:["other"]},
ku: _cc[1],
kw: _cc[3],
ky: _cc[1],
lag: {cardinal:["zero","one","other"],ordinal:["other"]},
lb: _cc[1],
lg: _cc[1],
lkt: _cc[0],
ln: _cc[1],
lo: {cardinal:["other"],ordinal:["one","other"]},
lt: {cardinal:["one","few","many","other"],ordinal:["other"]},
lv: {cardinal:["zero","one","other"],ordinal:["other"]},
mas: _cc[1],
mg: _cc[1],
mgo: _cc[1],
mk: {cardinal:["one","other"],ordinal:["one","two","many","other"]},
ml: _cc[1],
mn: _cc[1],
mo: {cardinal:["one","few","other"],ordinal:["one","other"]},
mr: {cardinal:["one","other"],ordinal:["one","two","few","other"]},
ms: {cardinal:["other"],ordinal:["one","other"]},
mt: {cardinal:["one","few","many","other"],ordinal:["other"]},
my: _cc[0],
nah: _cc[1],
naq: _cc[3],
nb: _cc[1],
nd: _cc[1],
ne: _cc[2],
nl: _cc[1],
nn: _cc[1],
nnh: _cc[1],
no: _cc[1],
nqo: _cc[0],
nr: _cc[1],
nso: _cc[1],
ny: _cc[1],
nyn: _cc[1],
om: _cc[1],
or: {cardinal:["one","other"],ordinal:["one","two","few","many","other"]},
os: _cc[1],
pa: _cc[1],
pap: _cc[1],
pl: {cardinal:["one","few","many","other"],ordinal:["other"]},
prg: {cardinal:["zero","one","other"],ordinal:["other"]},
ps: _cc[1],
pt: _cc[1],
"pt-PT": _cc[1],
rm: _cc[1],
ro: {cardinal:["one","few","other"],ordinal:["one","other"]},
rof: _cc[1],
root: _cc[0],
ru: {cardinal:["one","few","many","other"],ordinal:["other"]},
rwk: _cc[1],
sah: _cc[0],
saq: _cc[1],
scn: {cardinal:["one","other"],ordinal:["many","other"]},
sd: _cc[1],
sdh: _cc[1],
se: _cc[3],
seh: _cc[1],
ses: _cc[0],
sg: _cc[0],
sh: {cardinal:["one","few","other"],ordinal:["other"]},
shi: {cardinal:["one","few","other"],ordinal:["other"]},
si: _cc[1],
sk: {cardinal:["one","few","many","other"],ordinal:["other"]},
sl: {cardinal:["one","two","few","other"],ordinal:["other"]},
sma: _cc[3],
smi: _cc[3],
smj: _cc[3],
smn: _cc[3],
sms: _cc[3],
sn: _cc[1],
so: _cc[1],
sq: {cardinal:["one","other"],ordinal:["one","many","other"]},
sr: {cardinal:["one","few","other"],ordinal:["other"]},
ss: _cc[1],
ssy: _cc[1],
st: _cc[1],
sv: _cc[2],
sw: _cc[1],
syr: _cc[1],
ta: _cc[1],
te: _cc[1],
teo: _cc[1],
th: _cc[0],
ti: _cc[1],
tig: _cc[1],
tk: {cardinal:["one","other"],ordinal:["few","other"]},
tl: _cc[2],
tn: _cc[1],
to: _cc[0],
tr: _cc[1],
ts: _cc[1],
tzm: _cc[1],
ug: _cc[1],
uk: {cardinal:["one","few","many","other"],ordinal:["few","other"]},
ur: _cc[1],
uz: _cc[1],
ve: _cc[1],
vi: {cardinal:["other"],ordinal:["one","other"]},
vo: _cc[1],
vun: _cc[1],
wa: _cc[1],
wae: _cc[1],
wo: _cc[0],
xh: _cc[1],
xog: _cc[1],
yi: _cc[1],
yo: _cc[0],
yue: _cc[0],
zh: _cc[0],
zu: _cc[1]
}));


/***/ }),

/***/ "./node_modules/make-plural/umd/plurals.js":
/*!*************************************************!*\
  !*** ./node_modules/make-plural/umd/plurals.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _cp = [
function(n, ord) {
  if (ord) return 'other';
  return 'other';
},
function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one' : 'other';
},
function(n, ord) {
  if (ord) return 'other';
  return ((n == 0
          || n == 1)) ? 'one' : 'other';
},
function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one' : 'other';
}
];

(function (root, plurals) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (plurals),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, {
af: _cp[1],

ak: _cp[2],

am: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

ar: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return (n == 0) ? 'zero'
      : (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : ((n100 >= 3 && n100 <= 10)) ? 'few'
      : ((n100 >= 11 && n100 <= 99)) ? 'many'
      : 'other';
},

ars: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return (n == 0) ? 'zero'
      : (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : ((n100 >= 3 && n100 <= 10)) ? 'few'
      : ((n100 >= 11 && n100 <= 99)) ? 'many'
      : 'other';
},

as: function(n, ord) {
  if (ord) return ((n == 1 || n == 5 || n == 7 || n == 8 || n == 9
          || n == 10)) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

asa: _cp[1],

ast: _cp[3],

az: function(n, ord) {
  var s = String(n).split('.'), i = s[0], i10 = i.slice(-1),
      i100 = i.slice(-2), i1000 = i.slice(-3);
  if (ord) return ((i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8)
          || (i100 == 20 || i100 == 50 || i100 == 70
          || i100 == 80)) ? 'one'
      : ((i10 == 3 || i10 == 4) || (i1000 == 100 || i1000 == 200
          || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700
          || i1000 == 800
          || i1000 == 900)) ? 'few'
      : (i == 0 || i10 == 6 || (i100 == 40 || i100 == 60
          || i100 == 90)) ? 'many'
      : 'other';
  return (n == 1) ? 'one' : 'other';
},

be: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return ((n10 == 2
          || n10 == 3) && n100 != 12 && n100 != 13) ? 'few' : 'other';
  return (n10 == 1 && n100 != 11) ? 'one'
      : ((n10 >= 2 && n10 <= 4) && (n100 < 12
          || n100 > 14)) ? 'few'
      : (t0 && n10 == 0 || (n10 >= 5 && n10 <= 9)
          || (n100 >= 11 && n100 <= 14)) ? 'many'
      : 'other';
},

bem: _cp[1],

bez: _cp[1],

bg: _cp[1],

bh: _cp[2],

bm: _cp[0],

bn: function(n, ord) {
  if (ord) return ((n == 1 || n == 5 || n == 7 || n == 8 || n == 9
          || n == 10)) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

bo: _cp[0],

br: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2),
      n1000000 = t0 && s[0].slice(-6);
  if (ord) return 'other';
  return (n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91) ? 'one'
      : (n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92) ? 'two'
      : (((n10 == 3 || n10 == 4) || n10 == 9) && (n100 < 10
          || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90
          || n100 > 99)) ? 'few'
      : (n != 0 && t0 && n1000000 == 0) ? 'many'
      : 'other';
},

brx: _cp[1],

bs: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1 && i100 != 11
          || f10 == 1 && f100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
          || (f10 >= 2 && f10 <= 4) && (f100 < 12
          || f100 > 14)) ? 'few'
      : 'other';
},

ca: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return ((n == 1
          || n == 3)) ? 'one'
      : (n == 2) ? 'two'
      : (n == 4) ? 'few'
      : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
},

ce: _cp[1],

cgg: _cp[1],

chr: _cp[1],

ckb: _cp[1],

cs: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1];
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : ((i >= 2 && i <= 4) && v0) ? 'few'
      : (!v0) ? 'many'
      : 'other';
},

cy: function(n, ord) {
  if (ord) return ((n == 0 || n == 7 || n == 8
          || n == 9)) ? 'zero'
      : (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : ((n == 3
          || n == 4)) ? 'few'
      : ((n == 5
          || n == 6)) ? 'many'
      : 'other';
  return (n == 0) ? 'zero'
      : (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : (n == 3) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
},

da: function(n, ord) {
  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return (n == 1 || !t0 && (i == 0
          || i == 1)) ? 'one' : 'other';
},

de: _cp[3],

dsb: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i100 = i.slice(-2), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i100 == 1
          || f100 == 1) ? 'one'
      : (v0 && i100 == 2
          || f100 == 2) ? 'two'
      : (v0 && (i100 == 3 || i100 == 4) || (f100 == 3
          || f100 == 4)) ? 'few'
      : 'other';
},

dv: _cp[1],

dz: _cp[0],

ee: _cp[1],

el: _cp[1],

en: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n10 == 1 && n100 != 11) ? 'one'
      : (n10 == 2 && n100 != 12) ? 'two'
      : (n10 == 3 && n100 != 13) ? 'few'
      : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
},

eo: _cp[1],

es: _cp[1],

et: _cp[3],

eu: _cp[1],

fa: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

ff: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n < 2) ? 'one' : 'other';
},

fi: _cp[3],

fil: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), f10 = f.slice(-1);
  if (ord) return (n == 1) ? 'one' : 'other';
  return (v0 && (i == 1 || i == 2 || i == 3)
          || v0 && i10 != 4 && i10 != 6 && i10 != 9
          || !v0 && f10 != 4 && f10 != 6 && f10 != 9) ? 'one' : 'other';
},

fo: _cp[1],

fr: function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return (n >= 0 && n < 2) ? 'one' : 'other';
},

fur: _cp[1],

fy: _cp[3],

ga: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return (n == 1) ? 'one' : 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : ((t0 && n >= 3 && n <= 6)) ? 'few'
      : ((t0 && n >= 7 && n <= 10)) ? 'many'
      : 'other';
},

gd: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return ((n == 1
          || n == 11)) ? 'one'
      : ((n == 2
          || n == 12)) ? 'two'
      : (((t0 && n >= 3 && n <= 10)
          || (t0 && n >= 13 && n <= 19))) ? 'few'
      : 'other';
},

gl: _cp[3],

gsw: _cp[1],

gu: function(n, ord) {
  if (ord) return (n == 1) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

guw: _cp[2],

gv: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
      i100 = i.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1) ? 'one'
      : (v0 && i10 == 2) ? 'two'
      : (v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60
          || i100 == 80)) ? 'few'
      : (!v0) ? 'many'
      : 'other';
},

ha: _cp[1],

haw: _cp[1],

he: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1);
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : (i == 2 && v0) ? 'two'
      : (v0 && (n < 0
          || n > 10) && t0 && n10 == 0) ? 'many'
      : 'other';
},

hi: function(n, ord) {
  if (ord) return (n == 1) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

hr: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1 && i100 != 11
          || f10 == 1 && f100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
          || (f10 >= 2 && f10 <= 4) && (f100 < 12
          || f100 > 14)) ? 'few'
      : 'other';
},

hsb: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i100 = i.slice(-2), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i100 == 1
          || f100 == 1) ? 'one'
      : (v0 && i100 == 2
          || f100 == 2) ? 'two'
      : (v0 && (i100 == 3 || i100 == 4) || (f100 == 3
          || f100 == 4)) ? 'few'
      : 'other';
},

hu: function(n, ord) {
  if (ord) return ((n == 1
          || n == 5)) ? 'one' : 'other';
  return (n == 1) ? 'one' : 'other';
},

hy: function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return (n >= 0 && n < 2) ? 'one' : 'other';
},

id: _cp[0],

ig: _cp[0],

ii: _cp[0],

"in": _cp[0],

io: _cp[3],

is: function(n, ord) {
  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n,
      i10 = i.slice(-1), i100 = i.slice(-2);
  if (ord) return 'other';
  return (t0 && i10 == 1 && i100 != 11
          || !t0) ? 'one' : 'other';
},

it: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return ((n == 11 || n == 8 || n == 80
          || n == 800)) ? 'many' : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
},

iu: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

iw: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1);
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : (i == 2 && v0) ? 'two'
      : (v0 && (n < 0
          || n > 10) && t0 && n10 == 0) ? 'many'
      : 'other';
},

ja: _cp[0],

jbo: _cp[0],

jgo: _cp[1],

ji: _cp[3],

jmc: _cp[1],

jv: _cp[0],

jw: _cp[0],

ka: function(n, ord) {
  var s = String(n).split('.'), i = s[0], i100 = i.slice(-2);
  if (ord) return (i == 1) ? 'one'
      : (i == 0 || ((i100 >= 2 && i100 <= 20) || i100 == 40 || i100 == 60
          || i100 == 80)) ? 'many'
      : 'other';
  return (n == 1) ? 'one' : 'other';
},

kab: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n < 2) ? 'one' : 'other';
},

kaj: _cp[1],

kcg: _cp[1],

kde: _cp[0],

kea: _cp[0],

kk: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1);
  if (ord) return (n10 == 6 || n10 == 9
          || t0 && n10 == 0 && n != 0) ? 'many' : 'other';
  return (n == 1) ? 'one' : 'other';
},

kkj: _cp[1],

kl: _cp[1],

km: _cp[0],

kn: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

ko: _cp[0],

ks: _cp[1],

ksb: _cp[1],

ksh: function(n, ord) {
  if (ord) return 'other';
  return (n == 0) ? 'zero'
      : (n == 1) ? 'one'
      : 'other';
},

ku: _cp[1],

kw: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

ky: _cp[1],

lag: function(n, ord) {
  var s = String(n).split('.'), i = s[0];
  if (ord) return 'other';
  return (n == 0) ? 'zero'
      : ((i == 0
          || i == 1) && n != 0) ? 'one'
      : 'other';
},

lb: _cp[1],

lg: _cp[1],

lkt: _cp[0],

ln: _cp[2],

lo: function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return 'other';
},

lt: function(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return (n10 == 1 && (n100 < 11
          || n100 > 19)) ? 'one'
      : ((n10 >= 2 && n10 <= 9) && (n100 < 11
          || n100 > 19)) ? 'few'
      : (f != 0) ? 'many'
      : 'other';
},

lv: function(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', v = f.length,
      t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1),
      n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
  if (ord) return 'other';
  return (t0 && n10 == 0 || (n100 >= 11 && n100 <= 19)
          || v == 2 && (f100 >= 11 && f100 <= 19)) ? 'zero'
      : (n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11
          || v != 2 && f10 == 1) ? 'one'
      : 'other';
},

mas: _cp[1],

mg: _cp[2],

mgo: _cp[1],

mk: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return (i10 == 1 && i100 != 11) ? 'one'
      : (i10 == 2 && i100 != 12) ? 'two'
      : ((i10 == 7
          || i10 == 8) && i100 != 17 && i100 != 18) ? 'many'
      : 'other';
  return (v0 && i10 == 1 && i100 != 11
          || f10 == 1 && f100 != 11) ? 'one' : 'other';
},

ml: _cp[1],

mn: _cp[1],

mo: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  if (ord) return (n == 1) ? 'one' : 'other';
  return (n == 1 && v0) ? 'one'
      : (!v0 || n == 0
          || n != 1 && (n100 >= 1 && n100 <= 19)) ? 'few'
      : 'other';
},

mr: function(n, ord) {
  if (ord) return (n == 1) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
},

ms: function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return 'other';
},

mt: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 0
          || (n100 >= 2 && n100 <= 10)) ? 'few'
      : ((n100 >= 11 && n100 <= 19)) ? 'many'
      : 'other';
},

my: _cp[0],

nah: _cp[1],

naq: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

nb: _cp[1],

nd: _cp[1],

ne: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return ((t0 && n >= 1 && n <= 4)) ? 'one' : 'other';
  return (n == 1) ? 'one' : 'other';
},

nl: _cp[3],

nn: _cp[1],

nnh: _cp[1],

no: _cp[1],

nqo: _cp[0],

nr: _cp[1],

nso: _cp[2],

ny: _cp[1],

nyn: _cp[1],

om: _cp[1],

or: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return ((n == 1 || n == 5
          || (t0 && n >= 7 && n <= 9))) ? 'one'
      : ((n == 2
          || n == 3)) ? 'two'
      : (n == 4) ? 'few'
      : (n == 6) ? 'many'
      : 'other';
  return (n == 1) ? 'one' : 'other';
},

os: _cp[1],

pa: _cp[2],

pap: _cp[1],

pl: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
      i100 = i.slice(-2);
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
          || i100 > 14)) ? 'few'
      : (v0 && i != 1 && (i10 == 0 || i10 == 1)
          || v0 && (i10 >= 5 && i10 <= 9)
          || v0 && (i100 >= 12 && i100 <= 14)) ? 'many'
      : 'other';
},

prg: function(n, ord) {
  var s = String(n).split('.'), f = s[1] || '', v = f.length,
      t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1),
      n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
  if (ord) return 'other';
  return (t0 && n10 == 0 || (n100 >= 11 && n100 <= 19)
          || v == 2 && (f100 >= 11 && f100 <= 19)) ? 'zero'
      : (n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11
          || v != 2 && f10 == 1) ? 'one'
      : 'other';
},

ps: _cp[1],

pt: function(n, ord) {
  var s = String(n).split('.'), i = s[0];
  if (ord) return 'other';
  return ((i == 0
          || i == 1)) ? 'one' : 'other';
},

"pt-PT": _cp[3],

rm: _cp[1],

ro: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  if (ord) return (n == 1) ? 'one' : 'other';
  return (n == 1 && v0) ? 'one'
      : (!v0 || n == 0
          || n != 1 && (n100 >= 1 && n100 <= 19)) ? 'few'
      : 'other';
},

rof: _cp[1],

root: _cp[0],

ru: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
      i100 = i.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1 && i100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
          || i100 > 14)) ? 'few'
      : (v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9)
          || v0 && (i100 >= 11 && i100 <= 14)) ? 'many'
      : 'other';
},

rwk: _cp[1],

sah: _cp[0],

saq: _cp[1],

scn: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1];
  if (ord) return ((n == 11 || n == 8 || n == 80
          || n == 800)) ? 'many' : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
},

sd: _cp[1],

sdh: _cp[1],

se: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

seh: _cp[1],

ses: _cp[0],

sg: _cp[0],

sh: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1 && i100 != 11
          || f10 == 1 && f100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
          || (f10 >= 2 && f10 <= 4) && (f100 < 12
          || f100 > 14)) ? 'few'
      : 'other';
},

shi: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return (n >= 0 && n <= 1) ? 'one'
      : ((t0 && n >= 2 && n <= 10)) ? 'few'
      : 'other';
},

si: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '';
  if (ord) return 'other';
  return ((n == 0 || n == 1)
          || i == 0 && f == 1) ? 'one' : 'other';
},

sk: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1];
  if (ord) return 'other';
  return (n == 1 && v0) ? 'one'
      : ((i >= 2 && i <= 4) && v0) ? 'few'
      : (!v0) ? 'many'
      : 'other';
},

sl: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);
  if (ord) return 'other';
  return (v0 && i100 == 1) ? 'one'
      : (v0 && i100 == 2) ? 'two'
      : (v0 && (i100 == 3 || i100 == 4)
          || !v0) ? 'few'
      : 'other';
},

sma: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

smi: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

smj: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

smn: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

sms: function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
},

sn: _cp[1],

so: _cp[1],

sq: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n == 1) ? 'one'
      : (n10 == 4 && n100 != 14) ? 'many'
      : 'other';
  return (n == 1) ? 'one' : 'other';
},

sr: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
  if (ord) return 'other';
  return (v0 && i10 == 1 && i100 != 11
          || f10 == 1 && f100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
          || (f10 >= 2 && f10 <= 4) && (f100 < 12
          || f100 > 14)) ? 'few'
      : 'other';
},

ss: _cp[1],

ssy: _cp[1],

st: _cp[1],

sv: function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return ((n10 == 1
          || n10 == 2) && n100 != 11 && n100 != 12) ? 'one' : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
},

sw: _cp[3],

syr: _cp[1],

ta: _cp[1],

te: _cp[1],

teo: _cp[1],

th: _cp[0],

ti: _cp[2],

tig: _cp[1],

tk: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1);
  if (ord) return ((n10 == 6 || n10 == 9)
          || n == 10) ? 'few' : 'other';
  return (n == 1) ? 'one' : 'other';
},

tl: function(n, ord) {
  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
      i10 = i.slice(-1), f10 = f.slice(-1);
  if (ord) return (n == 1) ? 'one' : 'other';
  return (v0 && (i == 1 || i == 2 || i == 3)
          || v0 && i10 != 4 && i10 != 6 && i10 != 9
          || !v0 && f10 != 4 && f10 != 6 && f10 != 9) ? 'one' : 'other';
},

tn: _cp[1],

to: _cp[0],

tr: _cp[1],

ts: _cp[1],

tzm: function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  if (ord) return 'other';
  return ((n == 0 || n == 1)
          || (t0 && n >= 11 && n <= 99)) ? 'one' : 'other';
},

ug: _cp[1],

uk: function(n, ord) {
  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), i10 = i.slice(-1),
      i100 = i.slice(-2);
  if (ord) return (n10 == 3 && n100 != 13) ? 'few' : 'other';
  return (v0 && i10 == 1 && i100 != 11) ? 'one'
      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
          || i100 > 14)) ? 'few'
      : (v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9)
          || v0 && (i100 >= 11 && i100 <= 14)) ? 'many'
      : 'other';
},

ur: _cp[3],

uz: _cp[1],

ve: _cp[1],

vi: function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return 'other';
},

vo: _cp[1],

vun: _cp[1],

wa: _cp[2],

wae: _cp[1],

wo: _cp[0],

xh: _cp[1],

xog: _cp[1],

yi: _cp[3],

yo: _cp[0],

yue: _cp[0],

zh: _cp[0],

zu: function(n, ord) {
  if (ord) return 'other';
  return (n >= 0 && n <= 1) ? 'one' : 'other';
}
}));


/***/ })

}]);
//# sourceMappingURL=4.js.map