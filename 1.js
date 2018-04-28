(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page */ "./src/components/Page.tsx");
/* harmony import */ var _components_Bio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Bio */ "./src/components/Bio.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/About */ "./src/components/About.tsx");
/* harmony import */ var _components_Breakdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Breakdowns */ "./src/components/Breakdowns.tsx");
/* harmony import */ var _components_UselessFacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UselessFacts */ "./src/components/UselessFacts.tsx");
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Aside */ "./src/components/Aside.tsx");
/* harmony import */ var _components_BuzzwordsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BuzzwordsSection */ "./src/components/BuzzwordsSection.tsx");
/* harmony import */ var _components_XpSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/XpSection */ "./src/components/XpSection.tsx");
/* harmony import */ var _components_MenuSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/MenuSwitcher */ "./src/components/MenuSwitcher.tsx");
/* harmony import */ var _components_HeadingSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/HeadingSection */ "./src/components/HeadingSection.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "./src/store.ts");















const App = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Connect__WEBPACK_IMPORTED_MODULE_1__["Connect"].Provider, {
  store: _store__WEBPACK_IMPORTED_MODULE_14__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kiririntl__WEBPACK_IMPORTED_MODULE_12__["Kiririn"].Provider, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Page__WEBPACK_IMPORTED_MODULE_2__["Page"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_HeadingSection__WEBPACK_IMPORTED_MODULE_11__["HeadingSection"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_BuzzwordsSection__WEBPACK_IMPORTED_MODULE_8__["BuzzwordsSection"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_XpSection__WEBPACK_IMPORTED_MODULE_9__["XpSection"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Bio__WEBPACK_IMPORTED_MODULE_3__["Bio"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Breakdowns__WEBPACK_IMPORTED_MODULE_5__["Breakdowns"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_UselessFacts__WEBPACK_IMPORTED_MODULE_6__["UselessFacts"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_About__WEBPACK_IMPORTED_MODULE_4__["About"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Aside__WEBPACK_IMPORTED_MODULE_7__["Aside"], Object(_fn_cn__WEBPACK_IMPORTED_MODULE_13__["cn"])('no-print', 'gte-l1')), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_MenuSwitcher__WEBPACK_IMPORTED_MODULE_10__["MenuSwitcher"], null)));

/***/ }),

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");




const About = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_3__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`About // header`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`About // header`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, tl`Built with React, Redux, TypeScript, LESS, PostCSS, HSLuv color space, `, tl`webpack, ESLint, Prettier, `, tl`Twemoji, Font Awesome 5 Pro.`)));
About.displayName = 'About';

/***/ }),

/***/ "./src/components/Aside.css":
/*!**********************************!*\
  !*** ./src/components/Aside.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Aside.tsx":
/*!**********************************!*\
  !*** ./src/components/Aside.tsx ***!
  \**********************************/
/*! exports provided: Aside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Checkbox */ "./src/kit/Checkbox.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/mkActionHandlers */ "./src/fn/mkActionHandlers.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _LangSwitcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LangSwitcher */ "./src/components/LangSwitcher.tsx");
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeSwitcher */ "./src/components/ThemeSwitcher.tsx");
/* harmony import */ var _Download__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Download */ "./src/components/Download.tsx");
/* harmony import */ var _Aside_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Aside.css */ "./src/components/Aside.css");
/* harmony import */ var _Aside_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Aside_css__WEBPACK_IMPORTED_MODULE_12__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













 // TODO: ARIA attributes for level checkboxes.

const Aside = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_8__["withState"])(Object(_kiririntl__WEBPACK_IMPORTED_MODULE_6__["withTl"])(({
  tl,
  className,
  state: {
    categories,
    buzzwordsLevels
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_7__["cn"])('Aside', className), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Language`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Language`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LangSwitcher__WEBPACK_IMPORTED_MODULE_9__["LangSwitcher"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Theme`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Theme`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_10__["ThemeSwitcher"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Buzzwords filter`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Buzzwords filter`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`By category`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 3
}, tl`By category`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_7__["cn"])('Aside__Filters'), categories.map(category => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], _extends({
  key: category.id,
  "aria-label": tl`${category.title}`,
  checked: category.visible
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__["mkActionHandlers"])(() => Object(_store__WEBPACK_IMPORTED_MODULE_4__["toggleBuzzwordsCategory"])(category.id))), tl`${category.title}`)))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`By level`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 3
}, tl`By level`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_7__["cn"])('Aside__Filters'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], _extends({
  checked: buzzwordsLevels.ok,
  level: 'ok'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__["mkActionHandlers"])(() => Object(_store__WEBPACK_IMPORTED_MODULE_4__["toggleBuzzwordsLevel"])('ok'))), tl`Fucking great`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], _extends({
  checked: buzzwordsLevels.info,
  level: 'info'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__["mkActionHandlers"])(() => Object(_store__WEBPACK_IMPORTED_MODULE_4__["toggleBuzzwordsLevel"])('info'))), tl`Magical girl`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], _extends({
  checked: buzzwordsLevels.warn,
  level: 'warn'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__["mkActionHandlers"])(() => Object(_store__WEBPACK_IMPORTED_MODULE_4__["toggleBuzzwordsLevel"])('warn'))), tl`So-so`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], _extends({
  checked: buzzwordsLevels.error,
  level: 'error'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_5__["mkActionHandlers"])(() => Object(_store__WEBPACK_IMPORTED_MODULE_4__["toggleBuzzwordsLevel"])('error'))), tl`Fucking bad`)))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Download PDF`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Download__WEBPACK_IMPORTED_MODULE_11__["Download"], null)))));
Aside.displayName = 'Aside';

/***/ }),

/***/ "./src/components/Avatar.css":
/*!***********************************!*\
  !*** ./src/components/Avatar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Avatar.tsx":
/*!***********************************!*\
  !*** ./src/components/Avatar.tsx ***!
  \***********************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Avatar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.css */ "./src/components/Avatar.css");
/* harmony import */ var _Avatar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Avatar_css__WEBPACK_IMPORTED_MODULE_2__);


 // TODO: Make responsive.

const Avatar = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Avatar'));

/***/ }),

/***/ "./src/components/Bio.tsx":
/*!********************************!*\
  !*** ./src/components/Bio.tsx ***!
  \********************************/
/*! exports provided: Bio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bio", function() { return Bio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");




const Bio = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_3__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Bio`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Bio`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, tl`Born 1993, dropped the university after the second try in early 2014; but not dropped learning (well). `, tl`A toxic person with teen edgelord behaviour and highly inflated ego. `, tl`NIH-syndrome sick. `, tl`Hobbies, except most obvious, include maths, linguistics, hitchhiking; all at noob level. `)));

/***/ }),

/***/ "./src/components/Breakdowns.tsx":
/*!***************************************!*\
  !*** ./src/components/Breakdowns.tsx ***!
  \***************************************/
/*! exports provided: Breakdowns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakdowns", function() { return Breakdowns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kit_Ul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Ul */ "./src/kit/Ul.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");





const Breakdowns = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_4__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Breakdowns`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Breakdowns`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 3
}, tl`GitHub // header`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/https://github.com/klippersubs/xre'
}, tl`klippersubs/xre`), tl`: `, tl`Template literal for XRegExp; mimics native regexps. `, tl`Now useless, and the only feature missing in native regexps may be implemented using `, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://gist.github.com/miyaokamarina/ce1c374cb505ca3786c38afaa52661d9'
}, tl`one-liner workaround`), tl`.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/miyaokamarina/miyaokamarina.github.io/tree/source/src/prelude'
}, tl`prelude`), tl`: `, tl`Experiments with implementing FP patterns using OOP approach. `, tl`Monkey-patching, magical decorators, HOFs, hacks, proxies, performance anti-patterns, ass, shit.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs/bfs'
}, tl`klippersubs/bfs`), tl`, `, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs/hashtable'
}, tl`klippersubs/hashtable`), tl`: `, tl`Naive implementations of common algos.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs/less-hsluv'
}, tl`klippersubs/less-hsluv`), tl`: `, tl`Rewritten plugin for the HSLuv color space support in LESS.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs/await-loader'
}, tl`klippersubs/await-loader`), tl`: `, tl`This loader simulates dynamic imports in webpack 1.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs/dangerzone'
}, tl`klippersubs/dangerzone`), tl`: `, tl`Useless template tag and function to insert HTML strings to React.`))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 3
}, tl`Possibly impossible ambitions`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, tl`Create `, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/primula-lang'
}, tl`the perfect language`), tl`. `, tl`Functional, declarative, expressive, immutable, lazy, all we love. `, tl`Currently looking around to find any ideas to steal, `, tl`sometimes writing a parser or two, then drop it into back hole.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, tl`Create the perfect operating system. `, tl`So, currently I'm, again, looking around and watching for cool ideas in OS design. `, tl`Of course, unlike the language, there is no any real effort to make an OS real.`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Ul__WEBPACK_IMPORTED_MODULE_3__["Ul"].Item, null, tl`Develop modern smartphone with T9-like keyboard. `, tl`With modern hardware, modern OS, touch support and even more (even more, than a touch device can give).`)))));

/***/ }),

/***/ "./src/components/Buzzwords.css":
/*!**************************************!*\
  !*** ./src/components/Buzzwords.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Buzzwords.tsx":
/*!**************************************!*\
  !*** ./src/components/Buzzwords.tsx ***!
  \**************************************/
/*! exports provided: Buzzwords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buzzwords", function() { return Buzzwords; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Chips */ "./src/kit/Chips.tsx");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Buzzwords_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Buzzwords.css */ "./src/components/Buzzwords.css");
/* harmony import */ var _Buzzwords_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Buzzwords_css__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const buzzwordsFilter = (categories, buzzwordsLevels) => buzzword => {
  if (!buzzwordsLevels[buzzword.level]) {
    return false;
  }

  const enabledCategories = categories.filter(({
    visible
  }) => visible);

  for (const _ref of enabledCategories) {
    const {
      id
    } = _ref;

    if (buzzword.categories.find(x => x === id)) {
      return true;
    }
  }

  return false;
};

const Buzzwords = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_2__["withState"])(({
  state: {
    buzzwords,
    categories,
    buzzwordsLevels
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Chips__WEBPACK_IMPORTED_MODULE_1__["Chips"], Object(_fn_cn__WEBPACK_IMPORTED_MODULE_3__["cn"])('Buzzwords'), buzzwords.filter(buzzwordsFilter(categories, buzzwordsLevels)).map(({
  key,
  title,
  level,
  rainbow
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Chips__WEBPACK_IMPORTED_MODULE_1__["Chips"].Item, _extends({
  key: key,
  level: level
}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_3__["cn"])(rainbow ? 'Buzzwords__Rainbow' : '')), title))));

/***/ }),

/***/ "./src/components/BuzzwordsSection.tsx":
/*!*********************************************!*\
  !*** ./src/components/BuzzwordsSection.tsx ***!
  \*********************************************/
/*! exports provided: BuzzwordsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzzwordsSection", function() { return BuzzwordsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _Buzzwords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buzzwords */ "./src/components/Buzzwords.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");





const BuzzwordsSection = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_4__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Buzzwords`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Buzzwords`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Buzzwords__WEBPACK_IMPORTED_MODULE_3__["Buzzwords"], null)));
BuzzwordsSection.displayName = 'BuzzwordsSection';

/***/ }),

/***/ "./src/components/Download.css":
/*!*************************************!*\
  !*** ./src/components/Download.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Download.en.pdf":
/*!****************************************!*\
  !*** ./src/components/Download.en.pdf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "651f4129ae38164e68ffafafc2540f22.pdf";

/***/ }),

/***/ "./src/components/Download.ru.pdf":
/*!****************************************!*\
  !*** ./src/components/Download.ru.pdf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "937dcd4cd8c0ea6e0a389469859e6a50.pdf";

/***/ }),

/***/ "./src/components/Download.tsx":
/*!*************************************!*\
  !*** ./src/components/Download.tsx ***!
  \*************************************/
/*! exports provided: Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Button */ "./src/kit/Button.tsx");
/* harmony import */ var _kit_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Icon */ "./src/kit/Icon.tsx");
/* harmony import */ var _kit_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Center */ "./src/kit/Center.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Download_en_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Download.en.pdf */ "./src/components/Download.en.pdf");
/* harmony import */ var _Download_en_pdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Download_en_pdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Download_ru_pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Download.ru.pdf */ "./src/components/Download.ru.pdf");
/* harmony import */ var _Download_ru_pdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Download_ru_pdf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Download_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Download.css */ "./src/components/Download.css");
/* harmony import */ var _Download_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Download_css__WEBPACK_IMPORTED_MODULE_8__);









const Download = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_4__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Center__WEBPACK_IMPORTED_MODULE_3__["Center"], Object(_fn_cn__WEBPACK_IMPORTED_MODULE_5__["cn"])('Download'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  level: 'secondary',
  href: tl.current === 'ru' ? _Download_ru_pdf__WEBPACK_IMPORTED_MODULE_7___default.a : _Download_en_pdf__WEBPACK_IMPORTED_MODULE_6___default.a,
  download: tl`Yuri Zemskov (JS, React).pdf`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  code: '\uF1C1'
}), tl`Download PDF`)));

/***/ }),

/***/ "./src/components/HeadingSection.css":
/*!*******************************************!*\
  !*** ./src/components/HeadingSection.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/HeadingSection.tsx":
/*!*******************************************!*\
  !*** ./src/components/HeadingSection.tsx ***!
  \*******************************************/
/*! exports provided: HeadingSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingSection", function() { return HeadingSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Properties */ "./src/kit/Properties.tsx");
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kit_Center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kit/Center */ "./src/kit/Center.tsx");
/* harmony import */ var _kit_Split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kit/Split */ "./src/kit/Split.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _LeftTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LeftTable */ "./src/components/LeftTable.tsx");
/* harmony import */ var _RightTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RightTable */ "./src/components/RightTable.tsx");
/* harmony import */ var _HeadingSection_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeadingSection.css */ "./src/components/HeadingSection.css");
/* harmony import */ var _HeadingSection_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_HeadingSection_css__WEBPACK_IMPORTED_MODULE_11__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const HeadingSection = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_7__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_2__["Section"], _extends({
  "aria-label": tl`Yuri Zemskov, the JS magical girl`
}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_8__["cn"])('HeadingSection')), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_3__["H"], {
  level: 1
}, tl`Marina Miyaoka, the JS magical girl`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_8__["cn"])('print'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_6__["Avatar"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LeftTable__WEBPACK_IMPORTED_MODULE_9__["LeftTable"], null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RightTable__WEBPACK_IMPORTED_MODULE_10__["RightTable"], null))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_8__["cn"])('no-print', 'lte-s'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Center__WEBPACK_IMPORTED_MODULE_4__["Center"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_6__["Avatar"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Center__WEBPACK_IMPORTED_MODULE_4__["Center"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LeftTable__WEBPACK_IMPORTED_MODULE_9__["LeftTable"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RightTable__WEBPACK_IMPORTED_MODULE_10__["RightTable"], null)))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_8__["cn"])('no-print', 'gte-m'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Center__WEBPACK_IMPORTED_MODULE_4__["Center"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_6__["Avatar"], null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Center__WEBPACK_IMPORTED_MODULE_4__["Center"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LeftTable__WEBPACK_IMPORTED_MODULE_9__["LeftTable"], null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Split__WEBPACK_IMPORTED_MODULE_5__["Split"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RightTable__WEBPACK_IMPORTED_MODULE_10__["RightTable"], null))))))));

/***/ }),

/***/ "./src/components/LangSwitcher.tsx":
/*!*****************************************!*\
  !*** ./src/components/LangSwitcher.tsx ***!
  \*****************************************/
/*! exports provided: LangSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSwitcher", function() { return LangSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Buttons */ "./src/kit/Buttons.tsx");
/* harmony import */ var _fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/mkActionHandlers */ "./src/fn/mkActionHandlers.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const LangSwitcher = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_3__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"], null, Object.keys(tl.locales).map(lang => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"].Item, _extends({
  key: lang,
  active: tl.current === lang
}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_4__["cn"])(`LangSwitcher__Item_lang_${lang}`), Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_2__["mkActionHandlers"])(() => Object(_kiririntl__WEBPACK_IMPORTED_MODULE_3__["setLocale"])(lang))), tl.locales[lang].title))));

/***/ }),

/***/ "./src/components/LeftTable.tsx":
/*!**************************************!*\
  !*** ./src/components/LeftTable.tsx ***!
  \**************************************/
/*! exports provided: LeftTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTable", function() { return LeftTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Properties */ "./src/kit/Properties.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");



const AGE = 24;
const LeftTable = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_2__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Name:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`Yuri Zemskov`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Age:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl(AGE)`[[age]]`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Location:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`Moscow`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Phone:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, '+7 929 934‑21‑99')), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Mail:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'mailto:miyaokamarina@gmail.com'
}, 'miyaokamarina@gmail.com'))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Telegram:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://t.me/miyaokamarina'
}, '@miyaokamarina'))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Twitter:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://twitter.com/miyaokamarina'
}, '@miyaokamarina')))));

/***/ }),

/***/ "./src/components/Menu.css":
/*!*********************************!*\
  !*** ./src/components/Menu.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Menu.tsx":
/*!*********************************!*\
  !*** ./src/components/Menu.tsx ***!
  \*********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Aside */ "./src/components/Aside.tsx");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.css */ "./src/components/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_4__);





const Menu = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_2__["withState"])(({
  state: {
    menu
  }
}) => {
  if (menu) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('no-print', 'lte-l', 'Menu'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Menu__Inner'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Aside__WEBPACK_IMPORTED_MODULE_3__["Aside"], null)));
  } else {
    return null;
  }
});

/***/ }),

/***/ "./src/components/MenuSwitcher.css":
/*!*****************************************!*\
  !*** ./src/components/MenuSwitcher.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/MenuSwitcher.tsx":
/*!*****************************************!*\
  !*** ./src/components/MenuSwitcher.tsx ***!
  \*****************************************/
/*! exports provided: MenuSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSwitcher", function() { return MenuSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Fab */ "./src/kit/Fab.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.tsx");
/* harmony import */ var _kit_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Icon */ "./src/kit/Icon.tsx");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fn/mkActionHandlers */ "./src/fn/mkActionHandlers.ts");
/* harmony import */ var _MenuSwitcher_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuSwitcher.css */ "./src/components/MenuSwitcher.css");
/* harmony import */ var _MenuSwitcher_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MenuSwitcher_css__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const html = document.querySelector('html');

const handleClick = () => {
  html.classList.toggle('menu');
  Object(_store__WEBPACK_IMPORTED_MODULE_6__["toggleMenu"])();
};

const MenuSwitcher = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_4__["withState"])(({
  state: {
    menu
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Fab__WEBPACK_IMPORTED_MODULE_1__["Fab"], _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_5__["cn"])('no-print', 'lte-l', 'MenuSwitcher__Fab'), Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_7__["mkActionHandlers"])(handleClick)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  code: menu ? '\uF00D' : '\uF013'
}))));

/***/ }),

/***/ "./src/components/Page.css":
/*!*********************************!*\
  !*** ./src/components/Page.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Page.tsx":
/*!*********************************!*\
  !*** ./src/components/Page.tsx ***!
  \*********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.css */ "./src/components/Page.css");
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Page_css__WEBPACK_IMPORTED_MODULE_2__);



const Page = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Page'), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("article", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Page__Article'), children));

/***/ }),

/***/ "./src/components/RightTable.tsx":
/*!***************************************!*\
  !*** ./src/components/RightTable.tsx ***!
  \***************************************/
/*! exports provided: RightTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTable", function() { return RightTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Properties */ "./src/kit/Properties.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");



const SALARY = 2500;
const RightTable = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_2__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Level:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`magical girl`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Position:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`React developer`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Salary (monthly):`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl(SALARY)`from $#`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Employment:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`full time`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`Work location:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, tl`on-site, remote`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`GitHub:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/miyaokamarina'
}, tl`@miyaokamarina`))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].K, null, tl`GitHub (old):`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].V, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: 'https://github.com/klippersubs'
}, tl`@klippersubs`)))));

/***/ }),

/***/ "./src/components/ThemeSwitcher.tsx":
/*!******************************************!*\
  !*** ./src/components/ThemeSwitcher.tsx ***!
  \******************************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcher", function() { return ThemeSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Buttons */ "./src/kit/Buttons.tsx");
/* harmony import */ var _fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/mkActionHandlers */ "./src/fn/mkActionHandlers.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const mkHandler = theme => () => {
  Object(_store__WEBPACK_IMPORTED_MODULE_5__["setTheme"])(theme);
};

const ThemeSwitcher = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_4__["withState"])(Object(_kiririntl__WEBPACK_IMPORTED_MODULE_3__["withTl"])(({
  tl,
  state: {
    theme
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"].Item, _extends({
  active: theme === 'dark'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_2__["mkActionHandlers"])(mkHandler('dark'))), tl`dark`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"].Item, _extends({
  active: theme === 'light'
}, Object(_fn_mkActionHandlers__WEBPACK_IMPORTED_MODULE_2__["mkActionHandlers"])(mkHandler('light'))), tl`light`))));

/***/ }),

/***/ "./src/components/UselessFacts.css":
/*!*****************************************!*\
  !*** ./src/components/UselessFacts.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/UselessFacts.tsx":
/*!*****************************************!*\
  !*** ./src/components/UselessFacts.tsx ***!
  \*****************************************/
/*! exports provided: UselessFacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UselessFacts", function() { return UselessFacts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kit_Properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Properties */ "./src/kit/Properties.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _UselessFacts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UselessFacts.css */ "./src/components/UselessFacts.css");
/* harmony import */ var _UselessFacts_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_UselessFacts_css__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const UselessFacts = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_4__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], _extends({
  "aria-label": tl`Useless facts`
}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_5__["cn"])('UselessFacts')), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Useless facts`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].K, null, tl`Fav editors:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].V, null, tl`IntelliJ IDEA, Visual Studio Code`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].K, null, tl`Fav distro:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].V, null, tl`Antergos + KDE`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].K, null, tl`Fav mobile OS:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].V, null, tl`Symbian 9.3`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].K, null, tl`Unrequited love:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].V, null, tl`Maths`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].Item, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].K, null, tl`Currently fav artists:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Properties__WEBPACK_IMPORTED_MODULE_3__["Properties"].V, null, tl`The Enigma TNG, Zedd`)))));

/***/ }),

/***/ "./src/components/XpSection.tsx":
/*!**************************************!*\
  !*** ./src/components/XpSection.tsx ***!
  \**************************************/
/*! exports provided: XpSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XpSection", function() { return XpSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _Xps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Xps */ "./src/components/Xps.tsx");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");





const XpSection = Object(_kiririntl__WEBPACK_IMPORTED_MODULE_4__["withTl"])(({
  tl
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_1__["Section"], {
  "aria-label": tl`Work experience`
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_2__["H"], {
  level: 2
}, tl`Work experience`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Xps__WEBPACK_IMPORTED_MODULE_3__["Xps"], null)));

/***/ }),

/***/ "./src/components/Xps.css":
/*!********************************!*\
  !*** ./src/components/Xps.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Xps.tsx":
/*!********************************!*\
  !*** ./src/components/Xps.tsx ***!
  \********************************/
/*! exports provided: Xps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xps", function() { return Xps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kit_H__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kit/H */ "./src/kit/H.tsx");
/* harmony import */ var _kit_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Section */ "./src/kit/Section.tsx");
/* harmony import */ var _kit_Subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kit/Subtitle */ "./src/kit/Subtitle.tsx");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _kit_Connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kit/Connect */ "./src/kit/Connect.tsx");
/* harmony import */ var _Xps_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Xps.css */ "./src/components/Xps.css");
/* harmony import */ var _Xps_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Xps_css__WEBPACK_IMPORTED_MODULE_7__);








const Xps = Object(_kit_Connect__WEBPACK_IMPORTED_MODULE_6__["withState"])(Object(_kiririntl__WEBPACK_IMPORTED_MODULE_5__["withTl"])(({
  tl,
  state: {
    xps
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, xps.map(x => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Section__WEBPACK_IMPORTED_MODULE_2__["Section"], {
  "aria-label": tl`${x.position}`,
  key: x.key
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_H__WEBPACK_IMPORTED_MODULE_1__["H"], {
  level: 3
}, tl`${x.position}`, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Subtitle__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], null, tl(tl`${x.company}`, tl`${x.location}`)`[[XP_AT]]`, tl(x.since, x.till)`since # till #`)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_4__["cn"])('Xps__Strong'), tl`Responsibilities:`), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), x.responsibilities))))));

/***/ }),

/***/ "./src/data/buzzwords.tsx":
/*!********************************!*\
  !*** ./src/data/buzzwords.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _kit_Emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kit/Emoji */ "./src/kit/Emoji.tsx");



const categories = [{
  id: 'frontend',
  title: 'Frontend',
  visible: true
}, {
  id: 'backend',
  title: 'Backend',
  visible: true
}, {
  id: 'general',
  title: 'General',
  visible: true
}, {
  id: 'bestPractices',
  title: 'Best practices',
  visible: true
}, {
  id: 'personality',
  title: 'Personality',
  visible: false
}];
const buzzwords = [{
  title: 'ES6/7/8/9/∞',
  key: 'ES6/7/8/9/∞',
  categories: ['general'],
  level: 'ok'
}, {
  title: 'Babel',
  key: 'Babel',
  categories: ['general'],
  level: 'ok'
}, {
  title: 'TypeScript',
  key: 'TypeScript',
  categories: ['general'],
  level: 'ok'
}, {
  title: 'Flow',
  key: 'Flow',
  categories: ['general'],
  level: 'ok'
}, {
  title: 'React',
  key: 'React',
  categories: ['frontend'],
  level: 'ok'
}, {
  title: 'Redux',
  key: 'Redux',
  categories: ['frontend'],
  level: 'ok'
}, {
  title: 'CSS-in-JS',
  key: 'CSS-in-JS',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'CSS Modules',
  key: 'CSS Modules',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'styled-components',
  key: 'styled-components',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'HTML',
  key: 'HTML',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'CSS',
  key: 'CSS',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'Pug (Jade)',
  key: 'Pug (Jade)',
  categories: ['frontend'],
  level: 'ok'
}, {
  title: 'LESS',
  key: 'LESS',
  categories: ['frontend'],
  level: 'ok'
}, {
  title: 'PostCSS',
  key: 'PostCSS',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'BEM',
  key: 'BEM',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'SPA',
  key: 'SPA',
  categories: ['frontend'],
  level: 'info'
}, {
  title: 'PWA',
  key: 'PWA',
  categories: ['frontend'],
  level: 'error'
}, {
  title: 'Jest',
  key: 'Jest',
  categories: ['general'],
  level: 'info'
}, {
  title: 'webpack',
  key: 'webpack',
  categories: ['frontend'],
  level: 'ok'
}, {
  title: 'rollup.js',
  key: 'rollup.js',
  categories: ['general'],
  level: 'info'
}, {
  title: 'Socket.IO',
  key: 'Socket.IO',
  categories: ['frontend', 'backend'],
  level: 'warn'
}, {
  title: 'ESLint',
  key: 'ESLint',
  categories: ['bestPractices'],
  level: 'ok'
}, {
  title: 'OOP',
  key: 'OOP',
  categories: ['general'],
  level: 'ok'
}, {
  title: 'FP',
  key: 'FP',
  categories: ['general'],
  level: 'info'
}, {
  title: 'Haskell',
  key: 'Haskell',
  categories: ['general'],
  level: 'warn'
}, {
  title: 'immutability',
  key: 'immutability',
  categories: ['bestPractices'],
  level: 'info'
}, {
  title: 'declarativity',
  key: 'declarativity',
  categories: ['bestPractices'],
  level: 'info'
}, {
  title: 'i18n',
  key: 'i18n',
  categories: ['bestPractices', 'frontend'],
  level: 'info'
}, {
  title: 'a11y',
  key: 'a11y',
  categories: ['bestPractices', 'frontend'],
  level: 'warn'
}, {
  title: 'usability',
  key: 'usability',
  categories: ['bestPractices'],
  level: 'warn'
}, {
  title: 'responsive design',
  key: 'responsive design',
  categories: ['bestPractices', 'frontend'],
  level: 'info'
}, {
  title: 'NodeJS',
  key: 'NodeJS',
  categories: ['backend'],
  level: 'ok'
}, {
  title: 'Express',
  key: 'Express',
  categories: ['backend'],
  level: 'info'
}, {
  title: 'Koa',
  key: 'Koa',
  categories: ['backend'],
  level: 'warn'
}, {
  title: 'MongoDB',
  key: 'MongoDB',
  categories: ['backend'],
  level: 'warn'
}, {
  title: 'RethinkDB',
  key: 'RethinkDB',
  categories: ['backend'],
  level: 'warn'
}, {
  title: 'Sequelize',
  key: 'Sequelize',
  categories: ['backend'],
  level: 'error'
}, {
  title: 'PostgreSQL',
  key: 'PostgreSQL',
  categories: ['backend'],
  level: 'error'
}, {
  title: 'Git',
  key: 'Git',
  categories: ['general'],
  level: 'info'
}, {
  title: 'Conventional Commits',
  key: 'Conventional Commits',
  categories: ['bestPractices'],
  level: 'info'
}, {
  title: 'Linux',
  key: 'Linux',
  categories: ['general'],
  level: 'info'
}, {
  title: 'Docker',
  key: 'Docker',
  categories: ['backend'],
  level: 'error'
}, {
  title: 'OAuth',
  key: 'OAuth',
  categories: ['frontend', 'backend'],
  level: 'info'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'overengineering', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f92f'
  })),
  key: 'overengineering',
  categories: ['personality'],
  level: 'primary'
}, {
  title: 'hetero',
  key: 'hetero',
  categories: ['personality'],
  level: 'primary',
  rainbow: true
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'vodka', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f1f7-1f1fa'
  })),
  key: 'vodka',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'anime', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f338'
  })),
  key: 'anime',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'touhou', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '262f'
  })),
  key: 'touhou',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'weeb', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f1ef-1f1f5'
  })),
  key: 'weeb',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'discordianism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '26ea'
  })),
  key: 'discordianism',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'perfectionism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f525'
  })),
  key: 'perfectionism',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'narcissism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f60e'
  })),
  key: 'narcissism',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'egoism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f911'
  })),
  key: 'egoism',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'pohuism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f636'
  })),
  key: 'pohuism',
  categories: ['personality'],
  level: 'primary'
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'pizdabolism', " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kit_Emoji__WEBPACK_IMPORTED_MODULE_2__["Emoji"], {
    code: '1f92a'
  })),
  key: 'pizdabolism',
  categories: ['personality'],
  level: 'primary'
}];
Object(_store__WEBPACK_IMPORTED_MODULE_1__["setCategories"])(categories);
Object(_store__WEBPACK_IMPORTED_MODULE_1__["setBuzzwords"])(buzzwords);

/***/ }),

/***/ "./src/data/xp.tsx":
/*!*************************!*\
  !*** ./src/data/xp.tsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");



const xp = [{
  key: 'quokka',
  company: 'Quokka',
  position: 'JavaScript developer',
  location: 'Moscow',
  since: new Date('2017-10-01T00:00:00.000Z'),
  till: new Date('2018-02-01T00:00:00.000Z'),
  responsibilities: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, `Parser and compiler internals development (for our reactive framework's DSL; also nearly system language for our OS), `, 'some tasks on the framework core itself and on the our quasi-OS.')
}, {
  key: 'itsph',
  company: 'IT Sphere',
  position: 'NodeJS developer',
  location: 'Moscow',
  since: new Date('2017-07-01T00:00:00.000Z'),
  till: new Date('2017-10-01T00:00:00.000Z'),
  responsibilities: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'Microservices development (NodeJS), fuckery with poorly documented chinese hardware. ', `Sometimes solving React tasks for next door dept's customers.`)
}, {
  key: 'ratengoods',
  company: 'Rate&Goods',
  location: 'Moscow',
  position: 'Frontend developer',
  since: new Date('2017-06-01T00:00:00.000Z'),
  till: new Date('2017-06-01T00:00:00.000Z'),
  responsibilities: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'Website/webapp development, refactoring, fixing bugs, delivering new features. Etc.')
}, {
  key: 'no-name startup',
  company: 'no-name startup',
  location: 'Belgorod',
  position: '“Full-stack developer”',
  since: new Date('2016-07-01T00:00:00.000Z'),
  till: new Date('2016-11-01T00:00:00.000Z'),
  responsibilities: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, 'Planning, prototyping and implementing any crazy ideas. ', 'Development of a service with NodeJS (Express, MongoDB; experimenting with Koa and RethinkDB), ', 'design of basic concepts of recommender system, ', 'planning and basic design of social AR application. ', 'Epic fail at all.')
}];
const en = {
  tag: 'en',
  title: 'English',
  fallbacks: [],
  messages: new Map([['Quokka', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 3,
    href: 'http://quokka.pub/'
  }, 'Quokka')], ['IT Sphere', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 2,
    href: 'https://itsph.ru/'
  }, 'IT Sphere Corp.')], ['Rate&Goods', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 1,
    href: 'https://ratengoods.com/'
  }, 'Rate&Goods')], ['no-name startup', 'student startup'], ['JavaScript developer', 'JavaScript developer'], ['NodeJS developer', 'NodeJS developer'], ['Frontend developer', 'Frontend developer'], ['“Full-stack developer”', '“Full-stack developer”']])
}; // const ja: Locale = {
//     tag: 'ja-u-nu-fullwide',
//     title: '日本語',
//     fallbacks: ['en'],
//     messages: new Map<string, any>([
//         ['Quokka', <a key={3} href={'http://quokka.pub/'}>{'Quokka'}</a>],
//         ['IT Sphere', <a key={2} href={'https://itsph.ru/'}>{'IT Sphere Corp.'}</a>],
//         ['Rate&Goods', <a key={1} href={'https://ratengoods.com/'}>{'Rate&Goods'}</a>],
//         ['no-name startup', '大学のスタートアップ'],
//
//         ['JavaScript developer', 'JavaScript デベロッパー'],
//         ['NodeJS developer', 'NodeJS デベロッパー'],
//         ['Frontend developer', 'フロントエンドデベロッパー'],
//         ['“Full-stack developer”', '「フルスタックエンジニア」'],
//     ]),
// };

const ru = {
  tag: 'ru',
  title: 'Русский',
  fallbacks: ['en'],
  messages: new Map([['Quokka', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 3,
    href: 'http://quokka.pub/'
  }, 'Quokka')], ['IT Sphere', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 2,
    href: 'https://itsph.ru/'
  }, 'АО «АйТи Сфера»')], ['Rate&Goods', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    key: 1,
    href: 'https://ratengoods.com/'
  }, 'Rate&Goods')], ['no-name startup', 'студенческий стартап'], ['JavaScript developer', 'JavaScript-разработчик'], ['NodeJS developer', 'NodeJS-разработчик'], ['Frontend developer', 'Фронтенд-разработчик'], ['“Full-stack developer”', '«Фуллстек-разработчик»']])
};
Object(_store__WEBPACK_IMPORTED_MODULE_1__["setXps"])(xp);
Object(_kiririntl__WEBPACK_IMPORTED_MODULE_2__["addLocale"])(en); // addLocale(ja);

Object(_kiririntl__WEBPACK_IMPORTED_MODULE_2__["addLocale"])(ru);

/***/ }),

/***/ "./src/eff/handleKeyboard.ts":
/*!***********************************!*\
  !*** ./src/eff/handleKeyboard.ts ***!
  \***********************************/
/*! exports provided: handleKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleKeyboard", function() { return handleKeyboard; });
let keyboard = false;
let clicks = 0;
const MAX_CLICKS = 2;
const html = document.querySelector('html');

const setKeyboard = keyboard => {
  if (keyboard) {
    html.classList.add('keyboard');
  } else {
    html.classList.remove('keyboard');
  }
};

const handleKeyboard = () => {
  window.addEventListener('keydown', () => {
    if (document.querySelector([...['text', 'password', 'date', 'datetime-local', 'month', 'number', 'search', 'tel', 'time', 'url', 'week'].map(x => `input[type=${x}]`), 'textarea'].map(x => `${x}:focus`).join(',')) === null) {
      // TODO: Ignore most common keyboard shortcuts.
      keyboard = true;
      clicks = 0;
      setKeyboard(keyboard);
    }
  });
  window.addEventListener('mousedown', () => {
    if (clicks < MAX_CLICKS) {
      clicks++;
    } else {
      keyboard = false;
      setKeyboard(keyboard);
    }
  });
  return keyboard;
};
handleKeyboard();

/***/ }),

/***/ "./src/fn/cn.ts":
/*!**********************!*\
  !*** ./src/fn/cn.ts ***!
  \**********************/
/*! exports provided: cn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cn", function() { return cn; });
const cn = (...classes) => ({
  className: classes.filter(Boolean).join(' ')
});

/***/ }),

/***/ "./src/fn/mkActionHandlers.ts":
/*!************************************!*\
  !*** ./src/fn/mkActionHandlers.ts ***!
  \************************************/
/*! exports provided: mkActionHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkActionHandlers", function() { return mkActionHandlers; });
const mkActionHandlers = f => ({
  onClick: () => {
    if (f) {
      setTimeout(f);
    }
  },
  onKeyPress: event => {
    if (f && (event.nativeEvent.code === 'Space' || event.nativeEvent.code === 'Enter')) {
      event.preventDefault();
      setTimeout(f);
    }
  }
});

/***/ }),

/***/ "./src/fonts.ts":
/*!**********************!*\
  !*** ./src/fonts.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

if (true) {
  const map = {};

  const snapshotToArray = snapshot => {
    const result = [];

    for (let i = 0; i < snapshot.snapshotLength; i++) {
      result.push(snapshot.snapshotItem(i));
    }

    return result;
  };

  const addParent = node => node.parentElement ? [node, node.parentElement] : null;

  const matchFilter = ([, parent]) => parent.matches('#root *') && !parent.matches('script, style');

  const addFont = ([node, parent]) => {
    const {
      fontFamily,
      fontWeight
    } = getComputedStyle(parent);
    return [node.nodeValue || '', fontFamily || '', fontWeight || ''];
  };

  const updateMap = list => {
    list.forEach(([text, font, weight]) => {
      if (!map[font]) {
        map[font] = {};
      }

      if (!map[font][weight]) {
        map[font][weight] = '';
      }

      map[font][weight] = [...new Set([...map[font][weight], ...text])].join('');
    });
  };

  const update = () => {
    const snapshot = document.evaluate('//text()', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    const resultArray = snapshotToArray(snapshot);
    const maybePairs = resultArray.map(addParent);
    const pairs = maybePairs.filter(Boolean);
    const matching = pairs.filter(matchFilter);
    const list = matching.map(addFont);
    updateMap(list);
  };

  const get = () => {
    const {
      icons,
      ['main, sans-serif']: main
    } = map,
          rest = _objectWithoutProperties(map, ["icons", "main, sans-serif"]);

    void icons;
    return _objectSpread({
      main
    }, rest);
  };

  const json = () => JSON.stringify(get(), null, 4);

  window.fonts = {
    update,
    get,
    json,
    __proto__: null
  };
}

/***/ }),

/***/ "./src/hoc/withTracking.ts":
/*!*********************************!*\
  !*** ./src/hoc/withTracking.ts ***!
  \*********************************/
/*! exports provided: withTracking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTracking", function() { return withTracking; });
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

const withTracking = Component => {
  return Object(recompose__WEBPACK_IMPORTED_MODULE_0__["withHandlers"])({
    onMouseMove: () => event => {
      const {
        currentTarget,
        target,
        nativeEvent: {
          offsetX,
          offsetY
        }
      } = event;
      let node = target;
      let prev = target;
      let x = offsetX;
      let y = offsetY;

      while (prev !== null && node !== null && node !== currentTarget) {
        node = node.parentElement;
        x = x + prev.offsetLeft - node.offsetLeft;
        y = y + prev.offsetTop - node.offsetTop;
        prev = node;
      }

      currentTarget.style.setProperty('--x', `${x}px`);
      currentTarget.style.setProperty('--y', `${y}px`);
    },
    onTouchMove: () => event => {
      const {
        currentTarget,
        target,
        nativeEvent: {
          touches
        }
      } = event;

      if (touches.length !== 1) {
        return;
      }

      const [touch] = touches; // TODO: Add `Symbol.iterator` method to `TouchList`

      const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

      let node = target;
      let prev = target;
      let x = touch.pageX - rect.left - window.scrollX;
      let y = touch.pageY - rect.top - window.scrollY;

      while (prev !== null && node !== null && node !== currentTarget) {
        node = node.parentElement;
        x = x + prev.offsetLeft - node.offsetLeft;
        y = y + prev.offsetTop - node.offsetTop;
        prev = node;
      }

      currentTarget.style.setProperty('--x', `${x}px`);
      currentTarget.style.setProperty('--y', `${y}px`);
    },
    onTouchStart: () => ({
      currentTarget,
      target,
      nativeEvent: {
        touches
      }
    }) => {
      currentTarget.style.setProperty('--r', '90px'); // TODO: Use variable.

      if (touches.length !== 1) {
        return;
      }

      const [touch] = touches;
      const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

      let node = target;
      let prev = target;
      let x = touch.pageX - rect.left - window.scrollX;
      let y = touch.pageY - rect.top - window.scrollY;

      while (prev !== null && node !== null && node !== currentTarget) {
        node = node.parentElement;
        x = x + prev.offsetLeft;
        y = y + prev.offsetTop;
        prev = node;
      }

      currentTarget.style.setProperty('--x', `${x}px`);
      currentTarget.style.setProperty('--y', `${y}px`);
    },
    onTouchEnd: () => event => {
      const {
        currentTarget
      } = event;
      currentTarget.style.setProperty('--r', '0');
    },
    onTouchCancel: () => event => {
      const {
        currentTarget
      } = event;
      currentTarget.style.setProperty('--r', '0');
    }
  })(Component);
};

/***/ }),

/***/ "./src/kiririntl.tsx":
/*!***************************!*\
  !*** ./src/kiririntl.tsx ***!
  \***************************/
/*! exports provided: cardinal, ordinal, date, etc, setLocale, addLocale, clearLocales, addFallback, clearFallbacks, Kiririn, subscribe, withTl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardinal", function() { return cardinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "etc", function() { return etc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocale", function() { return addLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLocales", function() { return clearLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFallback", function() { return addFallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFallbacks", function() { return clearFallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kiririn", function() { return Kiririn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTl", function() { return withTl; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
eslint
max-lines: off,
*/
// TODO: Get rid of Redux.

 // region # Types

/**
 * Locales map.
 */

// endregion ## Provider
// endregion # Types
// region # Constants
const unresolved = Symbol('miyamarisubs/kiririntl.unresolved');
const defaultTag = 'en';
const initialState = {
  current: defaultTag,
  fallbacks: [defaultTag],
  locales: {
    en: {
      tag: 'en',
      title: 'English',
      fallbacks: [],
      messages: new Map()
    }
  }
}; // endregion # Constants
// region # Caches
// endregion # Caches
// region # Functions
// region ## Utility

const identity = a => a;

const isTag = (quasis, interpolations) => Array.isArray(quasis) && Array.isArray(quasis.raw) && Array.isArray(interpolations);

const untag = ({
  raw
}, interpolations) => {
  const result = [];

  for (let i = 0; i < interpolations.length; i = i + 1) {
    result.push(raw[i]);
    result.push(interpolations[i]);
  }

  result.push(raw[raw.length - 1]);
  return result.join('');
};

const isValidNode = x => typeof x === 'boolean' || typeof x === 'number' || typeof x === 'string' || x === null || Array.isArray(x) || react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](x);

const warn = (...args) => {
  if (false) {}
}; // endregion ## Utility
// region ## Format message


const formatMessage = (tag, message, params) => {
  if (isValidNode(message)) {
    return message;
  }

  const m = message;
  const {
    quasis
  } = m;
  const result = [];

  switch (m.type) {
    case 'cardinal':
    case 'ordinal':
      result.push(...formatPlural(tag, m, params));
      break;

    case 'date':
      result.push(...formatDate(tag, m, params));
      break;

    case 'etc':
      result.push(...formatEtc(m, params));
      break;

    default:
      m;
  }

  result.push(quasis[quasis.length - 1]);
  return result;
};

const formatPlural = (tag, m, params) => {
  const {
    quasis,
    interpolations,
    type
  } = m;
  const result = [];
  const values = params.filter(x => typeof x === 'number');

  for (let i = 0; i < interpolations.length; i = i + 1) {
    result.push(quasis[i]); // Evaluate interpolation:

    const evaluated = interpolations[i](values, mkNumberFormatter(tag)); // Return as-is, if valid React node:

    if (isValidNode(evaluated)) {
      result.push(evaluated);
    } else {
      result.push(formatPluralInterpolation(tag, evaluated, type));
    }
  }

  return result;
};

const formatDate = (tag, m, params) => {
  const {
    quasis,
    interpolations
  } = m;
  const result = [];
  const values = params.filter(x => x instanceof Date);

  for (let i = 0; i < interpolations.length; i = i + 1) {
    result.push(quasis[i]);
    result.push(interpolations[i](values, mkDateFormatter(tag)));
  }

  return result;
};

const formatEtc = (m, params) => {
  const {
    quasis,
    interpolations
  } = m;
  const result = [];
  const values = params.filter(x => isValidNode(x));

  for (let i = 0; i < interpolations.length; i = i + 1) {
    result.push(quasis[i]);
    result.push(interpolations[i](values, identity));
  }

  return result;
};

const formatPluralInterpolation = (tag, pluralMap, type) => {
  const {
    value
  } = pluralMap;
  const exact = `=${value}`; // Handle exact variant:

  if (exact in pluralMap) {
    return pluralMap[exact];
  } // Select variant using `PluralRules`:


  const selector = type === 'cardinal' ? mkCardinalSelector(tag) : mkOrdinalSelector(tag);
  const selected = selector(pluralMap.value); // Handle existent variant:

  if (selected in pluralMap) {
    return selected;
  } // Handle non-existent variant:


  return pluralMap.other;
};

const mkNumberFormatter = tag => (x, options) => new Intl.NumberFormat(tag, options).format(x); // TODO: Cache.


const mkDateFormatter = tag => (x, options) => new Intl.DateTimeFormat(tag, options).format(x); // TODO: Cache.


const mkCardinalSelector = tag => x => new Intl.PluralRules(tag, {
  type: 'cardinal'
}).select(x); // TODO: Cache


const mkOrdinalSelector = tag => x => new Intl.PluralRules(tag, {
  type: 'ordinal'
}).select(x); // TODO: Cache
// endregion ## Format message
// region ## Message tags


const cardinal = (quasis, ...interpolations) => ({
  quasis,
  interpolations,
  type: 'cardinal'
});
const ordinal = (quasis, ...interpolations) => ({
  quasis,
  interpolations,
  type: 'ordinal'
});
const date = (quasis, ...interpolations) => ({
  quasis,
  interpolations,
  type: 'date'
});
const etc = (quasis, ...interpolations) => ({
  quasis,
  interpolations,
  type: 'etc'
}); // endregion ## Message tags
// region ## Kiririn

const mkKiririn = (locales, fallbacks, tag) => {
  const kiririn = (quasis, ...interpolations) => {
    if (isTag(quasis, interpolations)) {
      return translate(locales, fallbacks, tag, quasis, interpolations, []);
    } else {
      const params = [quasis, ...interpolations];
      return (quasis, ...interpolations) => translate(locales, fallbacks, tag, quasis, interpolations, params);
    }
  };

  kiririn.locales = locales;
  kiririn.current = tag;
  kiririn.fallbacks = fallbacks;
  return kiririn;
}; // TODO: Cache.


const translate = (locales, fallbacks, tag, quasis, interpolations, params) => {
  const name = untag(quasis, interpolations);
  const message = resolveMessage(locales, fallbacks, tag, name);

  if (message === unresolved) {
    return name;
  }

  return formatMessage(tag, message, params);
}; // TODO: Cache.


const resolveMessage = (locales, fallbacks, tag, name) => {
  const lookupList = mkLookupList(locales, fallbacks, tag);

  for (const locale of lookupList) {
    if (locale.messages.has(name)) {
      return locale.messages.get(name);
    }
  }

  warn(`Unresolved message \`${JSON.stringify(name)}\` in locale \`${tag}\` with fallbacks \`${[...fallbacks].join('`, `')}\`.`);
  return unresolved;
};

const mkLookupList = (locales, fallbacks, tag) => {
  const queue = tag in locales ? [locales[tag]] : [];
  const result = new Set(queue);

  if (tag in locales) {
    do {
      for (const locale of queue.shift().fallbacks.map(tag => locales[tag]).filter(Boolean)) {
        if (!result.has(locale)) {
          result.add(locale);
          queue.push(locale);
        }
      }
    } while (queue.length > 0);
  }

  for (const tag of fallbacks) {
    if (tag in locales) {
      result.add(locales[tag]);
    }
  }

  return [...result];
}; // endregion ## Kiririn
// endregion # Functions
// region # Store


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setLocale':
      action;
      return _objectSpread({}, state, {
        current: action.tag
      });

    case 'addLocale':
      action;

      if (action.locale.tag in state.locales) {
        return _objectSpread({}, state, {
          locales: _objectSpread({}, state.locales, {
            [action.locale.tag]: _objectSpread({}, state.locales[action.locale.tag], action.locale, {
              messages: new Map([...state.locales[action.locale.tag].messages, ...action.locale.messages])
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          locales: _objectSpread({}, state.locales, {
            [action.locale.tag]: action.locale
          })
        });
      }

    case 'clearLocales':
      action;
      return _objectSpread({}, state, {
        locales: {}
      });

    case 'addFallback':
      action;
      return _objectSpread({}, state, {
        fallbacks: [...new Set([...state.fallbacks, action.tag])]
      });

    case 'clearFallbacks':
      action;
      return _objectSpread({}, state, {
        fallbacks: []
      });

    default:
      action;
      return state;
  }
};

const store = "development" === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, window.__REDUX_DEVTOOLS_EXTENSION__({
  name: 'Kiririn store'
})) : Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer);
const setLocale = tag => {
  store.dispatch({
    type: 'setLocale',
    tag
  });
};
const addLocale = locale => {
  store.dispatch({
    type: 'addLocale',
    locale
  });
};
const clearLocales = () => {
  store.dispatch({
    type: 'clearLocales'
  });
};
const addFallback = tag => {
  store.dispatch({
    type: 'addFallback',
    tag
  });
};
const clearFallbacks = () => {
  store.dispatch({
    type: 'clearFallbacks'
  });
}; // endregion # Store
// region # Provider

const {
  locales,
  fallbacks,
  current
} = store.getState();
const tl = mkKiririn(locales, fallbacks, current);
const Context = react__WEBPACK_IMPORTED_MODULE_1__["createContext"](tl);

class Provider extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  // TODO: Unsubscribe on unmount.
  constructor(props) {
    super(props);

    _defineProperty(_defineProperty(this, "state", {
      tl
    }), "unsubscribe", void 0);

    this.unsubscribe = store.subscribe(() => {
      const {
        locales,
        fallbacks,
        current
      } = store.getState();
      const tl = mkKiririn(locales, fallbacks, current);
      this.setState({
        tl
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Context.Provider, {
      value: this.state.tl
    }, this.props.children);
  }

}

_defineProperty(Provider, "displayName", 'Kiririn.Provider');

class Kiririn extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Context.Consumer, this.props);
  }

}

_defineProperty(Kiririn, "Provider", Provider);

const subscribe = callbackfn => store.subscribe(() => {
  callbackfn(store.getState());
}); // endregion # Provider
// region # HOC

const withTl = Component => {
  const WithTl = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Kiririn, null, tl => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, _extends({}, props, {
    tl: tl
  })));

  WithTl.displayName = `withTl(${Component.displayName || Component.name || 'Unknown'})`;
  return WithTl;
}; // endregion # HOC

/***/ }),

/***/ "./src/kit/Button.css":
/*!****************************!*\
  !*** ./src/kit/Button.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Button.tsx":
/*!****************************!*\
  !*** ./src/kit/Button.tsx ***!
  \****************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/withTracking */ "./src/hoc/withTracking.ts");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./src/kit/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





const Button = Object(_hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__["withTracking"])((_ref) => {
  let {
    children,
    className,
    level = 'primary'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", _extends({
    tabIndex: 0,
    role: 'button'
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_2__["cn"])('Button', level, className), rest), children);
});

/***/ }),

/***/ "./src/kit/Buttons.css":
/*!*****************************!*\
  !*** ./src/kit/Buttons.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Buttons.tsx":
/*!*****************************!*\
  !*** ./src/kit/Buttons.tsx ***!
  \*****************************/
/*! exports provided: Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _hoc_withTracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/withTracking */ "./src/hoc/withTracking.ts");
/* harmony import */ var _Buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons.css */ "./src/kit/Buttons.css");
/* harmony import */ var _Buttons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Buttons_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





const Buttons = (_ref) => {
  let {
    children,
    className,
    level = 'primary'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Buttons', level, className), rest), children);
};
Buttons.Item = Object(_hoc_withTracking__WEBPACK_IMPORTED_MODULE_2__["withTracking"])((_ref2) => {
  let {
    children,
    className,
    active = false
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className", "active"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
    role: 'button',
    tabIndex: 0
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Buttons__Item', active ? 'checked' : '', className), rest), children);
});

/***/ }),

/***/ "./src/kit/Center.css":
/*!****************************!*\
  !*** ./src/kit/Center.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Center.tsx":
/*!****************************!*\
  !*** ./src/kit/Center.tsx ***!
  \****************************/
/*! exports provided: Center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Center_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Center.css */ "./src/kit/Center.css");
/* harmony import */ var _Center_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Center_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Center = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Center', className), rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Center__Inner'), children));
};

/***/ }),

/***/ "./src/kit/Checkbox.css":
/*!******************************!*\
  !*** ./src/kit/Checkbox.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Checkbox.tsx":
/*!******************************!*\
  !*** ./src/kit/Checkbox.tsx ***!
  \******************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/withTracking */ "./src/hoc/withTracking.ts");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/kit/Icon.tsx");
/* harmony import */ var _Checkbox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkbox.css */ "./src/kit/Checkbox.css");
/* harmony import */ var _Checkbox_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_css__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






const Checkbox = Object(_hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__["withTracking"])((_ref) => {
  let {
    children,
    className,
    checked = false,
    level = 'primary'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "checked", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", _extends({
    role: 'checkbox',
    "aria-checked": checked,
    tabIndex: 0
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_2__["cn"])('Checkbox', level, className), rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    code: checked ? '\uF14A' : '\uF04D'
  }), children);
});

/***/ }),

/***/ "./src/kit/Chips.css":
/*!***************************!*\
  !*** ./src/kit/Chips.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Chips.tsx":
/*!***************************!*\
  !*** ./src/kit/Chips.tsx ***!
  \***************************/
/*! exports provided: Chips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chips", function() { return Chips; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Chips_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chips.css */ "./src/kit/Chips.css");
/* harmony import */ var _Chips_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Chips_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Chips = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Chips', className), rest), children);
};

Chips.Item = (_ref2) => {
  let {
    children,
    className,
    level = 'primary'
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('static', 'Chips__Item', level, className), rest), children);
};

Chips.Item.displayName = 'Chips.Item';

/***/ }),

/***/ "./src/kit/Connect.tsx":
/*!*****************************!*\
  !*** ./src/kit/Connect.tsx ***!
  \*****************************/
/*! exports provided: Connect, withState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const noState = 'miyamarisubs/connect.NoState';
const Context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](noState);

class Provider extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  // TODO: Unsubscribe on unmount.
  constructor(props) {
    super(props);

    _defineProperty(_defineProperty(this, "state", {
      state: this.props.store.getState()
    }), "unsubscribe", void 0);

    this.unsubscribe = props.store.subscribe(() => {
      const state = props.store.getState();
      this.setState({
        state
      });
    });
  }

  render() {
    const state = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Context.Provider, {
      value: state.state
    }, this.props.children);
  }

}

_defineProperty(Provider, "displayName", 'Connect.Provider');

class Connect extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Context.Consumer, null, state => state === noState ? null : this.props.children(state));
  }

}

_defineProperty(Connect, "Provider", Provider);

const withState = Component => {
  const WithConnect = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Connect, null, state => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({}, props, {
    state: state
  })));

  WithConnect.displayName = `withConnect(${Component.displayName || Component.name || 'Unknown'})`;
  return WithConnect;
};

/***/ }),

/***/ "./src/kit/Emoji.css":
/*!***************************!*\
  !*** ./src/kit/Emoji.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Emoji.tsx":
/*!***************************!*\
  !*** ./src/kit/Emoji.tsx ***!
  \***************************/
/*! exports provided: Emoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return Emoji; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Emoji_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Emoji.css */ "./src/kit/Emoji.css");
/* harmony import */ var _Emoji_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Emoji_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Emoji = (_ref) => {
  let {
    code,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["code", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", _extends({
    "aria-label": `Emoji`,
    draggable: false,
    src: `https://twemoji.maxcdn.com/2/72x72/${code}.png`
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Emoji', className), rest));
};

/***/ }),

/***/ "./src/kit/Fab.css":
/*!*************************!*\
  !*** ./src/kit/Fab.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Fab.tsx":
/*!*************************!*\
  !*** ./src/kit/Fab.tsx ***!
  \*************************/
/*! exports provided: Fab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fab", function() { return Fab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/withTracking */ "./src/hoc/withTracking.ts");
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Fab_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fab.css */ "./src/kit/Fab.css");
/* harmony import */ var _Fab_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Fab_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





const Fab = Object(_hoc_withTracking__WEBPACK_IMPORTED_MODULE_1__["withTracking"])((_ref) => {
  let {
    children,
    className,
    level = 'primary'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    role: 'button',
    tabIndex: 0
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_2__["cn"])('Fab', level, className), rest), children);
});

/***/ }),

/***/ "./src/kit/H.css":
/*!***********************!*\
  !*** ./src/kit/H.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/H.tsx":
/*!***********************!*\
  !*** ./src/kit/H.tsx ***!
  \***********************/
/*! exports provided: H */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _H_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./H.css */ "./src/kit/H.css");
/* harmony import */ var _H_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_H_css__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const H = (_ref) => {
  let {
    children,
    className,
    level
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "level"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](`h${level}`, _objectSpread({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('H', `H_level_${level}`, className), rest), children);
};

/***/ }),

/***/ "./src/kit/Icon.css":
/*!**************************!*\
  !*** ./src/kit/Icon.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Icon.tsx":
/*!**************************!*\
  !*** ./src/kit/Icon.tsx ***!
  \**************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Icon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.css */ "./src/kit/Icon.css");
/* harmony import */ var _Icon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Icon_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Icon = (_ref) => {
  let {
    code,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["code", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
    "aria-label": `Icon`,
    "aria-hidden": true
  }, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Icon', className), rest), code);
};

/***/ }),

/***/ "./src/kit/Properties.css":
/*!********************************!*\
  !*** ./src/kit/Properties.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Properties.tsx":
/*!********************************!*\
  !*** ./src/kit/Properties.tsx ***!
  \********************************/
/*! exports provided: Properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Properties", function() { return Properties; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Properties_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Properties.css */ "./src/kit/Properties.css");
/* harmony import */ var _Properties_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Properties_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Properties = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Properties', className), rest), children);
};

Properties.Item = (_ref2) => {
  let {
    children,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Properties__Item', className), rest), children);
};

Properties.Item.displayName = 'Properties.Item';

Properties.K = (_ref3) => {
  let {
    children,
    className
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Properties__K', className), rest), children);
};

Properties.K.displayName = 'Properties.K';

Properties.V = (_ref4) => {
  let {
    children,
    className
  } = _ref4,
      rest = _objectWithoutProperties(_ref4, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Properties__V', className), rest), children);
};

Properties.V.displayName = 'Properties.V';

/***/ }),

/***/ "./src/kit/Section.css":
/*!*****************************!*\
  !*** ./src/kit/Section.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Section.tsx":
/*!*****************************!*\
  !*** ./src/kit/Section.tsx ***!
  \*****************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Section_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.css */ "./src/kit/Section.css");
/* harmony import */ var _Section_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Section_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Section = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Section', className), rest), children);
};

/***/ }),

/***/ "./src/kit/Split.css":
/*!***************************!*\
  !*** ./src/kit/Split.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Split.tsx":
/*!***************************!*\
  !*** ./src/kit/Split.tsx ***!
  \***************************/
/*! exports provided: Split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Split", function() { return Split; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Split_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Split.css */ "./src/kit/Split.css");
/* harmony import */ var _Split_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Split_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Split = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Split', className), rest), children);
};

Split.Item = (_ref2) => {
  let {
    children,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Split__Item', className), rest), children);
};

Split.Item.displayName = 'Split.Item';

/***/ }),

/***/ "./src/kit/Subtitle.css":
/*!******************************!*\
  !*** ./src/kit/Subtitle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Subtitle.tsx":
/*!******************************!*\
  !*** ./src/kit/Subtitle.tsx ***!
  \******************************/
/*! exports provided: Subtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Subtitle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtitle.css */ "./src/kit/Subtitle.css");
/* harmony import */ var _Subtitle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subtitle_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Subtitle = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, rest, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Subtitle', className)), children);
};

/***/ }),

/***/ "./src/kit/Ul.css":
/*!************************!*\
  !*** ./src/kit/Ul.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/kit/Ul.tsx":
/*!************************!*\
  !*** ./src/kit/Ul.tsx ***!
  \************************/
/*! exports provided: Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/cn */ "./src/fn/cn.ts");
/* harmony import */ var _Ul_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ul.css */ "./src/kit/Ul.css");
/* harmony import */ var _Ul_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Ul_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




const Ul = (_ref) => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Ul', className), rest), children);
};

Ul.Item = (_ref2) => {
  let {
    children,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", _extends({}, Object(_fn_cn__WEBPACK_IMPORTED_MODULE_1__["cn"])('Ul__Item', className), rest), children);
};

Ul.Item.displayName = 'Ul.Item';

/***/ }),

/***/ "./src/locales/en.ts":
/*!***************************!*\
  !*** ./src/locales/en.ts ***!
  \***************************/
/*! exports provided: en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "en", function() { return en; });
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");

const en = {
  tag: 'en',
  title: 'English',
  fallbacks: [],
  messages: new Map([['Yuri Zemskov, the JS magical girl', 'Yuri Zemskov, the JS magical girl'], ['[[age]]', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["cardinal"]`${([x], format) => format(x)}`], ['from $#', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["cardinal"]`from ${([x], format) => format(x, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })}`], ['By category', 'By category'], ['By level', 'By level'], ['[[XP_AT]]', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["etc"]`at ${([x]) => x}, ${([, x]) => x}, `], ['since # till #', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["date"]`since ${([since], format) => format(since, {
    year: 'numeric',
    month: 'long'
  })} till ${([, till], format) => format(till, {
    year: 'numeric',
    month: 'long'
  })}`], ['GitHub // header', 'GitHub'], ['About // header', 'About']])
};
Object(_kiririntl__WEBPACK_IMPORTED_MODULE_0__["addLocale"])(en);

/***/ }),

/***/ "./src/locales/ru.ts":
/*!***************************!*\
  !*** ./src/locales/ru.ts ***!
  \***************************/
/*! exports provided: ru */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ru", function() { return ru; });
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kiririntl */ "./src/kiririntl.tsx");

const ru = {
  tag: 'ru',
  title: 'Русский',
  fallbacks: ['en'],
  messages: new Map([['Theme', 'Оформление'], ['dark', 'тёмное'], ['light', 'светлое'], //
  // Header
  //
  ['Marina Miyaoka, the JS magical girl', 'Юрий Земсков, JS‑волшебница'], //
  // Properties, left table
  //
  ['Name:', 'Имя:'], ['Age:', 'Возраст:'], ['Location:', 'Город:'], ['Phone:', 'Телефон:'], ['Mail:', 'Почта:'], ['Telegram:', 'Телеграм:'], ['Twitter:', 'Твиттер:'], ['Yuri Zemskov', 'Юрий Земсков'], ['[[age]]', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["cardinal"]`${([x], format) => format(x)}`], ['Moscow', 'Москва'], //
  // Properties, right table
  //
  ['Level:', 'Левел:'], ['Position:', 'Позиция:'], ['Salary (monthly):', 'Зарплата (мес.):'], ['Employment:', 'Занятость:'], ['Work location:', 'Локация работы:'], ['GitHub:', 'Жыдхаб:'], ['GitHub (old):', 'Жыдхаб (старый):'], ['magical girl', 'волшебница'], ['React developer', 'Реакт‑разработчик'], ['from $#', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["cardinal"]`от ${([x], format) => format(x, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })}`], ['full time', 'полная'], ['on-site, remote', 'офис, удалёнка'], //
  // Buzzwords
  //
  ['Buzzwords', 'Баззворды'], ['Buzzwords filter', 'Фильтр баззвордов'], ['By category', 'По категориям'], ['Frontend', 'Фронтенд'], ['Backend', 'Бекенд'], ['General', 'Общее'], ['Best practices', 'Лучшие практики'], ['Personality', 'Особенности'], ['By level', 'По уровню'], ['Fucking great', 'Почти совсем идеально'], ['Magical girl', 'Волшебница'], ['So-so', 'Так себе'], ['Fucking bad', 'Откровенно плохо'], ['Unrelated', 'Не имеет отношения к работе'], //
  // Xps
  //
  ['Belgorod', 'Белгород'], ['Work experience', 'Опыт работы'], ['[[XP_AT]]', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["etc"]`${([company]) => company}, ${([, location]) => location}, `], ['since # till #', _kiririntl__WEBPACK_IMPORTED_MODULE_0__["date"]`${([since], format) => format(since, {
    year: 'numeric',
    month: 'long'
  })} – ${([, till], format) => format(till, {
    year: 'numeric',
    month: 'long'
  })}`], ['Responsibilities:', 'Обязанности:'], //
  // Useless facts
  //
  ['Useless facts', 'Бесполезные факты'], ['Fav editors:', 'Любимые редакторы:'], ['Fav distro:', 'Любимый дистр:'], ['Fav mobile OS:', 'Любимая мобильная OS:'], ['Unrequited love:', 'Безответная любовь:'], ['Maths', 'Математика'], ['Currently fav artists:', 'Любимые артисты:'], //
  // Other
  //
  ['Bio', 'Био'], ['Breakdowns', 'Разборы'], ['GitHub // header', 'Жыдхаб'], ['Possibly impossible ambitions', 'Возможно невозможные амбиции'], ['About // header', 'О приложении'], ['Download PDF', 'Скачать PDF'], ['Yuri Zemskov (JS, React).pdf', 'Юрий Земсков (JS, React).pdf']])
};
Object(_kiririntl__WEBPACK_IMPORTED_MODULE_0__["addLocale"])(ru);

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/en */ "./src/locales/en.ts");
/* harmony import */ var _locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/ru */ "./src/locales/ru.ts");
/* harmony import */ var _data_buzzwords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/buzzwords */ "./src/data/buzzwords.tsx");
/* harmony import */ var _data_xp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/xp */ "./src/data/xp.tsx");
/* harmony import */ var _eff_handleKeyboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eff/handleKeyboard */ "./src/eff/handleKeyboard.ts");
/* harmony import */ var _kiririntl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kiririntl */ "./src/kiririntl.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fonts */ "./src/fonts.ts");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fonts__WEBPACK_IMPORTED_MODULE_10__);


 // import './locales/ja';










const isEn = x => /^en/.test(x);

const isJa = x => /^ja/.test(x);

const isRu = x => /^ru/.test(x);

const isAny = x => isEn(x) || isJa(x) || isRu(x);

const toAny = x => isRu(x) ? 'ru' : isJa(x) ? 'ja-u-nu-fullwide' : 'en';

const detectLang = () => {
  if (isAny(navigator.language)) {
    return toAny(navigator.language);
  }

  for (const lang of navigator.languages) {
    if (isAny(lang)) {
      return toAny(lang);
    }
  }

  return 'en';
};

const restoreLang = () => {
  const lang = localStorage.getItem('lang');

  switch (lang) {
    case 'ja-u-nu-fullwide':
    case 'ru':
      Object(_kiririntl__WEBPACK_IMPORTED_MODULE_7__["setLocale"])(lang);
      break;

    default:
      Object(_kiririntl__WEBPACK_IMPORTED_MODULE_7__["setLocale"])(detectLang());
  }
};

const restoreTheme = () => {
  const theme = localStorage.getItem('theme');

  if (theme === 'light') {
    Object(_store__WEBPACK_IMPORTED_MODULE_8__["setTheme"])('light');
  }
};

const saveLang = ({
  current: lang
}) => {
  localStorage.setItem('lang', lang);
};

const saveTheme = () => {
  const {
    theme
  } = _store__WEBPACK_IMPORTED_MODULE_8__["store"].getState();
  localStorage.setItem('theme', theme);
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App__WEBPACK_IMPORTED_MODULE_9__["App"], null), document.querySelector('#root'));
restoreLang();
restoreTheme();
Object(_kiririntl__WEBPACK_IMPORTED_MODULE_7__["subscribe"])(saveLang);
_store__WEBPACK_IMPORTED_MODULE_8__["store"].subscribe(saveTheme);

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: store, setBuzzwords, setCategories, setXps, toggleBuzzwordsLevel, toggleBuzzwordsCategory, setTheme, toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBuzzwords", function() { return setBuzzwords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategories", function() { return setCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXps", function() { return setXps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBuzzwordsLevel", function() { return toggleBuzzwordsLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBuzzwordsCategory", function() { return toggleBuzzwordsCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isNever = x => {
  void x;
};

const initialState = {
  buzzwords: [],
  categories: [],
  xps: [],
  buzzwordsLevels: {
    primary: true,
    secondary: true,
    ok: true,
    info: true,
    warn: true,
    error: true
  },
  theme: 'dark',
  menu: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setBuzzwords':
      action;
      return _objectSpread({}, state, {
        buzzwords: action.buzzwords
      });

    case 'setCategories':
      action;
      return _objectSpread({}, state, {
        categories: action.categories
      });

    case 'setXps':
      action;
      return _objectSpread({}, state, {
        xps: action.xps
      });

    case 'toggleBuzzwordsLevel':
      action;
      return _objectSpread({}, state, {
        buzzwordsLevels: _objectSpread({}, state.buzzwordsLevels, {
          [action.level]: !state.buzzwordsLevels[action.level]
        })
      });

    case 'toggleBuzzwordsCategory':
      action;
      return _objectSpread({}, state, {
        categories: state.categories.map(category => category.id === action.category ? _objectSpread({}, category, {
          visible: !category.visible
        }) : category)
      });

    case 'setTheme':
      action;
      return _objectSpread({}, state, {
        theme: action.theme
      });

    case 'toggleMenu':
      action;
      return _objectSpread({}, state, {
        menu: !state.menu
      });

    default:
      action;
      isNever(action);
      return state;
  }
};

const store = "development" === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, window.__REDUX_DEVTOOLS_EXTENSION__({
  name: 'Application store'
})) : Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer); // TODO
// region # Action creators

const setBuzzwords = buzzwords => {
  store.dispatch({
    type: 'setBuzzwords',
    buzzwords
  });
};
const setCategories = categories => {
  store.dispatch({
    type: 'setCategories',
    categories
  });
};
const setXps = xps => {
  store.dispatch({
    type: 'setXps',
    xps
  });
};
const toggleBuzzwordsLevel = level => {
  store.dispatch({
    type: 'toggleBuzzwordsLevel',
    level
  });
};
const toggleBuzzwordsCategory = category => {
  store.dispatch({
    type: 'toggleBuzzwordsCategory',
    category
  });
};
const html = document.querySelector('html');
const setTheme = theme => {
  store.dispatch({
    type: 'setTheme',
    theme
  });
  html.classList.remove('light');
  html.classList.remove('dark');
  html.classList.add(theme);
};
const toggleMenu = () => {
  store.dispatch({
    type: 'toggleMenu'
  });
}; // endregion # Action creators

/***/ })

}]);
//# sourceMappingURL=1.js.map