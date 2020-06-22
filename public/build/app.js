(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-progressbar */ "./node_modules/vue-progressbar/dist/vue-progressbar.js");
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_plugin_load_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-plugin-load-script */ "./node_modules/vue-plugin-load-script/index.js");
/* harmony import */ var _components_HomeComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HomeComponent */ "./assets/js/components/HomeComponent.vue");
/* harmony import */ var _components_CategoryComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CategoryComponent */ "./assets/js/components/CategoryComponent.vue");
/* harmony import */ var _components_ProductComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProductComponent */ "./assets/js/components/ProductComponent.vue");
/* harmony import */ var _components_CartComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/CartComponent */ "./assets/js/components/CartComponent.vue");
/* harmony import */ var _components_OrdersComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/OrdersComponent */ "./assets/js/components/OrdersComponent.vue");








 // Components






var options = {
  color: 'grey',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.8s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_plugin_load_script__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_progressbar__WEBPACK_IMPORTED_MODULE_6___default.a, options);
window.Fire = vue__WEBPACK_IMPORTED_MODULE_4__["default"];
window.axios = axios__WEBPACK_IMPORTED_MODULE_7___default.a;
var base_url = window.location.protocol + "//" + window.location.host;
console.log(base_url);
var routes = [{
  path: base_url + '/',
  component: _components_HomeComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
  name: 'front.index'
}, {
  path: base_url + '/category/:id/:name?',
  component: _components_CategoryComponent__WEBPACK_IMPORTED_MODULE_10__["default"],
  name: 'front.category'
}, {
  path: '/product/:id/:name?',
  component: _components_ProductComponent__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/cart',
  component: _components_CartComponent__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  path: '/orders',
  component: _components_OrdersComponent__WEBPACK_IMPORTED_MODULE_13__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]({
  mode: 'history',
  routes: routes
});
vue__WEBPACK_IMPORTED_MODULE_4__["default"].filter('replace', function (title) {
  return title.replace(/\s/g, '-');
});
var app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#abdelrahman',
  router: router,
  data: {}
});

/***/ }),

/***/ "./assets/js/components/CartComponent.vue":
/*!************************************************!*\
  !*** ./assets/js/components/CartComponent.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=template&id=149c0a28& */ "./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28&");
/* harmony import */ var _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=script&lang=js& */ "./assets/js/components/CartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/CartComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/CartComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/CartComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CartComponent.vue?vue&type=template&id=149c0a28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_149c0a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/CategoryComponent.vue":
/*!****************************************************!*\
  !*** ./assets/js/components/CategoryComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=template&id=79286364& */ "./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364&");
/* harmony import */ var _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=script&lang=js& */ "./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/CategoryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryComponent.vue?vue&type=template&id=79286364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_79286364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/HomeComponent.vue":
/*!************************************************!*\
  !*** ./assets/js/components/HomeComponent.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=3c94e0e6& */ "./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./assets/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/HomeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=template&id=3c94e0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_3c94e0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/OrdersComponent.vue":
/*!**************************************************!*\
  !*** ./assets/js/components/OrdersComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdersComponent.vue?vue&type=template&id=1c76b187& */ "./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187&");
/* harmony import */ var _OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersComponent.vue?vue&type=script&lang=js& */ "./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/OrdersComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187&":
/*!*********************************************************************************!*\
  !*** ./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersComponent.vue?vue&type=template&id=1c76b187& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersComponent_vue_vue_type_template_id_1c76b187___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/ProductComponent.vue":
/*!***************************************************!*\
  !*** ./assets/js/components/ProductComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=template&id=5d1bd3ef& */ "./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef&");
/* harmony import */ var _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=script&lang=js& */ "./assets/js/components/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/ProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/ProductComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/ProductComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef&":
/*!**********************************************************************************!*\
  !*** ./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=template&id=5d1bd3ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_5d1bd3ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CartComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/CartComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: null,
      cart: null
    };
  },
  mounted: function mounted() {
    this.$Progress.start();
    this.getCart();
    this.$Progress.finish();
  },
  watch: {
    $route: function $route() {
      this.$Progress.start();
      this.getCart();
      this.$Progress.finish();
    }
  },
  methods: {
    getCart: function getCart() {
      var _this = this;

      window.axios.post('/api/own/cart').then(function (response) {
        _this.cart = response.data.cart;
      });
    },
    sendOrder: function sendOrder() {
      window.axios.post('/api/create/order/' + this.cart.id, {
        products: this.cart.Product,
        details: document.getElementById('details').value
      }).then(function () {
        window.location.href = '/';
      });
    },
    removeProduct: function removeProduct(productId) {
      var th = this;
      window.axios.post('/api/delete/product/' + this.cart.id + '/' + productId).then(function () {
        var product = th.cart.Product.find(function (x) {
          return x.id == productId;
        });
        var index = th.cart.Product.indexOf(product);
        th.cart.Product.splice(index, 1); // window.location.reload();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: [],
      products: [],
      products_old: [],
      categories: [],
      trademarks: [],
      colors: [],
      loves: [],
      user: null
    };
  },
  mounted: function mounted() {
    this.$Progress.start();
    this.getCategory();
    this.getUser();
    this.$Progress.finish();
  },
  watch: {
    $route: function $route() {
      this.$Progress.start();
      this.getCategory();
      this.getUser();
      this.$Progress.finish();
    }
  },
  methods: {
    getCategory: function getCategory() {
      var _this = this;

      // category
      window.axios.post('/api/category/' + this.$route.params.id).then(function (response) {
        _this.category = response.data.category[0];
        _this.products = response.data.products;
        _this.products_old = response.data.products;
        _this.categories = response.data.categories;
        _this.colors = response.data.colors;
        _this.trademarks = response.data.trademarks;
        window.Fire.loadScript("/front/js/main.js");
      });
    },
    getMoreProduct: function getMoreProduct() {
      var _this2 = this;

      // more products
      window.axios.post('/api/more/specific/products/' + this.category.id + '/' + this.products.length).then(function (response) {
        _this2.products = [].concat(_this2.products, response.data.data);

        if (response.data.data.length == 0) {
          $('.more_btn').hide();
        }
      });
    },
    getMinPrice: function getMinPrice() {
      var th = this;
      var min = document.getElementById('min_amount').value;
      var max = document.getElementById('max_amount').value;
      th.products = th.products_old;
      setTimeout(function () {
        th.products.forEach(function (product, index) {
          if (product.price >= min && product.price <= max) {
            th.products.splice(0, index);
          }
        });
      }, 2000);
    },
    getUser: function getUser() {
      var _this3 = this;

      window.axios.post('/profile').then(function (response) {
        _this3.user = response.data.user;

        _this3.getLoves(_this3.user.id);
      });
    },
    setLove: function setLove(id) {
      var _this4 = this;

      window.axios.post('/api/create/love/' + id).then(function (response) {
        _this4.love = response.data.love;

        _this4.getLoves(_this4.user.id);
      });
    },
    getLoves: function getLoves(id) {
      var _this5 = this;

      window.axios.post('/api/loves/' + id).then(function (response) {
        _this5.loves = response.data.love;
      });
    },
    loveOrNot: function loveOrNot(id) {
      var product = this.loves.find(function (x) {
        return x.Product.id == id;
      });

      if (product) {
        return 'fa fa-heart';
      }

      return 'fa fa-heart-o';
    },
    addToCart: function addToCart(id) {
      window.axios.post('/api/cart/' + id).then(function () {
        alert('تمت الاضافة الي العربة بنجاح');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      latest_products: [],
      products: [],
      loves: [],
      user: null
    };
  },
  mounted: function mounted() {
    this.$Progress.finish();
  },
  beforeMount: function beforeMount() {
    this.$Progress.start();
    this.getLatestProduct();
    this.getProducts();
    this.getUser();
  },
  methods: {
    getLatestProduct: function getLatestProduct() {
      var _this = this;

      // latest products
      window.axios.post('/api/latest/products').then(function (response) {
        _this.latest_products = response.data.data;
        var vm = _this;
        window.Fire.nextTick(function () {
          $('.hero-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            onInitialized: function onInitialized() {
              var a = this.items().length;
              $("#snh-1").html("<span>1</span><span>" + a + "</span>");
            }
          });
          $('.product-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: true,
            navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
            responsive: {
              0: {
                items: 1
              },
              480: {
                items: 2
              },
              768: {
                items: 3
              },
              1200: {
                items: 4
              }
            }
          });
          $('.main-menu').slicknav({
            prependTo: '.main-navbar .container',
            closedSymbol: '<i class="flaticon-right-arrow"></i>',
            openedSymbol: '<i class="flaticon-down-arrow"></i>',
            label: 'القائمة'
          });
        }.bind(vm));
      });
    },
    getProducts: function getProducts() {
      var _this2 = this;

      // products
      window.axios.post('/api/products').then(function (response) {
        _this2.products = response.data.data;
      });
    },
    getMoreProduct: function getMoreProduct() {
      var _this3 = this;

      // more products
      window.axios.post('/api/more/products/' + this.products.length).then(function (response) {
        _this3.products = [].concat(_this3.products, response.data.data);

        if (response.data.data.length == 0) {
          $('.more_btn').hide();
        }
      });
    },
    getUser: function getUser() {
      var _this4 = this;

      window.axios.post('/profile').then(function (response) {
        _this4.user = response.data.user;

        _this4.getLoves(_this4.user.id);
      });
    },
    setLove: function setLove(id) {
      var _this5 = this;

      window.axios.post('/api/create/love/' + id).then(function (response) {
        _this5.love = response.data.love;

        _this5.getLoves(_this5.user.id);
      });
    },
    getLoves: function getLoves(id) {
      var _this6 = this;

      window.axios.post('/api/loves/' + id).then(function (response) {
        _this6.loves = response.data.love;
      });
    },
    loveOrNot: function loveOrNot(id) {
      var product = this.loves.find(function (x) {
        return x.Product.id == id;
      });

      if (product) {
        return 'fa fa-heart';
      }

      return 'fa fa-heart-o';
    },
    getFirstImage: function getFirstImage() {
      return 'text-align:right;background-image: url("/front/img/bg-4.jpg")';
    },
    getSecondImage: function getSecondImage() {
      return 'text-align:right;background-image: url("/front/img/bg-6.jpg")';
    },
    addToCart: function addToCart(id) {
      window.axios.post('/api/cart/' + id).then(function () {
        alert('تمت الاضافة الي العربة بنجاح');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/OrdersComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: null,
      orders: []
    };
  },
  mounted: function mounted() {
    this.$Progress.start();
    this.getOrders();
    this.$Progress.finish();
  },
  watch: {
    $route: function $route() {
      this.$Progress.start();
      this.getOrders();
      this.$Progress.finish();
    }
  },
  methods: {
    getOrders: function getOrders() {
      var _this = this;

      window.axios.post('/api/orders').then(function (response) {
        _this.orders = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ProductComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ProductComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {
        "Department": '',
        "start_offer_at": 0,
        "end_offer_at": 0
      },
      latest_products: [],
      user: null,
      loves: []
    };
  },
  mounted: function mounted() {
    this.$Progress.start();
    this.getCategory();
    this.getUser();
    this.$Progress.finish();
  },
  watch: {
    $route: function $route() {
      this.$Progress.start();
      this.getCategory();
      this.getUser();
      this.$Progress.finish();
    }
  },
  methods: {
    getCategory: function getCategory() {
      var _this = this;

      // product
      window.axios.post('/api/product/' + this.$route.params.id).then(function (response) {
        _this.product = response.data.product[0];
        _this.latest_products = response.data.products;
        var vm = _this;
        window.Fire.loadScript("/front/js/main.js").then(function () {
          window.Fire.nextTick(function () {
            $('.product-slider').owlCarousel({
              loop: true,
              nav: true,
              dots: false,
              margin: 30,
              autoplay: true,
              navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
              responsive: {
                0: {
                  items: 1
                },
                480: {
                  items: 2
                },
                768: {
                  items: 3
                },
                1200: {
                  items: 4
                }
              }
            });
            $('.product-pic-zoom').zoom();
          }.bind(vm));
        });
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      window.axios.post('/profile').then(function (response) {
        _this2.user = response.data.user;

        _this2.getLoves(_this2.user.id);
      });
    },
    setLove: function setLove(id) {
      var _this3 = this;

      window.axios.post('/api/create/love/' + id).then(function (response) {
        _this3.love = response.data.love;

        _this3.getLoves(_this3.user.id);
      });
    },
    getLoves: function getLoves(id) {
      var _this4 = this;

      window.axios.post('/api/loves/' + id).then(function (response) {
        _this4.loves = response.data.love;
      });
    },
    loveOrNot: function loveOrNot(id) {
      var product = this.loves.find(function (x) {
        return x.Product.id == id;
      });

      if (product) {
        return 'fa fa-heart';
      }

      return 'fa fa-heart-o';
    },
    addToCart: function addToCart(id) {
      window.axios.post('/api/cart/' + id).then(function () {
        alert('تمت الاضافة الي العربة بنجاح');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/CartComponent.vue?vue&type=template&id=149c0a28& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.cart !== null
    ? _c("section", { staticClass: "cart-section spad" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-8" }, [
              _c(
                "div",
                {
                  staticClass: "cart-table",
                  staticStyle: { "text-align": "right" }
                },
                [
                  _c("h3", [_vm._v("حقيبتي")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "cart-table-warp" }, [
                    _c("table", [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.cart.Product, function(product) {
                          return _c("tr", [
                            _c("td", { staticClass: "product-col" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "pc-title",
                                  staticStyle: { "padding-right": "30px" }
                                },
                                [
                                  _c("h4", [_vm._v(_vm._s(product.title))]),
                                  _vm._v(" "),
                                  product.price_offer !== null &&
                                  product.start_offer_at.date <=
                                    new Date().toISOString().slice(0, 10) &&
                                  product.end_offer_at.date >=
                                    new Date().toISOString().slice(0, 10)
                                    ? _c("p", [
                                        _vm._v(_vm._s(product.price_offer))
                                      ])
                                    : _c("p", [_vm._v(_vm._s(product.price))])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "total-col" }, [
                              product.price_offer !== null &&
                              product.start_offer_at.date <=
                                new Date().toISOString().slice(0, 10) &&
                              product.end_offer_at.date >=
                                new Date().toISOString().slice(0, 10)
                                ? _c("h4", [
                                    _vm._v(_vm._s(product.price_offer))
                                  ])
                                : _c("h4", [_vm._v(_vm._s(product.price))])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "total-col" }, [
                              _c("h4", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-danger btn-xs",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.removeProduct(product.id)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              ])
                            ])
                          ])
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 card-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-dark btn-xl",
                    staticStyle: {
                      width: "100%",
                      padding: "10px",
                      "border-radius": "23px",
                      margin: "1px"
                    },
                    attrs: { to: "/orders", tag: "a" }
                  },
                  [_vm._v("طلباتي السابقة")]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm.cart.Product.length > 0
                  ? _c(
                      "a",
                      {
                        staticClass: "site-btn",
                        attrs: { href: "" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sendOrder()
                          }
                        }
                      },
                      [_vm._v("ارسل الطلب وادفع عند الاستلام")]
                    )
                  : _c(
                      "a",
                      {
                        staticClass: "site-btn",
                        attrs: {
                          href: "#",
                          onclick: "alert('لا يوجد منتجات للطلب')"
                        }
                      },
                      [_vm._v("ارسل الطلب وادفع عند الاستلام")]
                    ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "site-btn sb-dark",
                    attrs: { tag: "a", to: "/" }
                  },
                  [_vm._v("اكمل التسوق")]
                )
              ],
              1
            )
          ])
        ])
      ])
    : _c("section", { staticClass: "cart-section spad" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 card-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-dark btn-xl",
                    staticStyle: {
                      width: "100%",
                      padding: "10px",
                      "border-radius": "23px",
                      margin: "1px"
                    },
                    attrs: { to: "/orders", tag: "a" }
                  },
                  [_vm._v("طلباتي السابقة")]
                ),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "site-btn",
                    attrs: {
                      href: "#",
                      onclick: "alert('لا يوجد منتجات للطلب')"
                    }
                  },
                  [_vm._v("ارسل الطلب وادفع عند الاستلام")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "site-btn sb-dark",
                    attrs: { tag: "a", to: "/" }
                  },
                  [_vm._v("اكمل التسوق")]
                )
              ],
              1
            )
          ])
        ])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          { staticClass: "product-th", staticStyle: { "text-align": "right" } },
          [_vm._v("المنتج")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "total-th" }, [
          _vm._v("السعر بدون عروض ( سيتم احتساب سعر العرض اذا كان موجود )")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "total-th" }, [_vm._v("الغاء الطلب")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "total-cost" }, [
      _c("h6", [_c("span", [_vm._v(" للاسف لا يوجد دفع الكتروني حتي الان")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group", staticStyle: { "text-align": "right" } },
      [
        _c("label", { attrs: { for: "" } }, [_vm._v("تفاصيل الطلب")]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: {
            name: "details",
            id: "details",
            rows: "8",
            placeholder:
              "يكتب هنا كمية معينة … مثال : اريد 20 قطعة من المنتج ( حلة جيرانيت ) الموجود في حقيبتي والمنتج ( طقم كاسات ) 3 قطع وباقي المنتجات قطعة واحدة"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "promo-code-form" }, [
      _c("input", { attrs: { type: "text", placeholder: "ادخل كود خصم" } }),
      _vm._v(" "),
      _c("button", { attrs: { type: "button" } }, [_vm._v("تأكيد")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-8" }, [
      _c(
        "div",
        { staticClass: "cart-table", staticStyle: { "text-align": "right" } },
        [
          _c("h3", [_vm._v("حقيبتي")]),
          _vm._v(" "),
          _c("div", { staticClass: "cart-table-warp" }, [
            _c("table", [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass: "product-th",
                      staticStyle: { "text-align": "right" }
                    },
                    [_vm._v("المنتج")]
                  ),
                  _vm._v(" "),
                  _c("th", { staticClass: "total-th" }, [
                    _vm._v(
                      "السعر بدون عروض ( سيتم احتساب سعر العرض اذا كان موجود )"
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "total-th" }, [_vm._v("الغاء الطلب")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [_c("tr")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "total-cost" }, [
            _c("h6", [
              _c("span", [_vm._v(" للاسف لا يوجد دفع الكتروني حتي الان")])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group", staticStyle: { "text-align": "right" } },
      [
        _c("label", { attrs: { for: "" } }, [_vm._v("تفاصيل الطلب")]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: {
            name: "details",
            rows: "8",
            placeholder:
              "يكتب هنا كمية معينة … مثال : اريد 20 قطعة من المنتج ( حلة جيرانيت ) الموجود في حقيبتي والمنتج ( طقم كاسات ) 3 قطع وباقي المنتجات قطعة واحدة"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "promo-code-form" }, [
      _c("input", { attrs: { type: "text", placeholder: "ادخل كود خصم" } }),
      _vm._v(" "),
      _c("button", { attrs: { type: "button" } }, [_vm._v("تأكيد")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/CategoryComponent.vue?vue&type=template&id=79286364& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "category-section spad" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-3 order-2 order-lg-1",
              staticStyle: { "text-align": "right" }
            },
            [
              _c("div", { staticClass: "filter-widget" }, [
                _c("h2", { staticClass: "fw-title" }, [_vm._v("اقسام مشابهه")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "category-menu" },
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: _vm._f("replace")(
                                "/category/" + category.id + "/" + category.name
                              )
                            }
                          },
                          [_vm._v(_vm._s(category.name))]
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "filter-widget mb-0" }, [
                _c("h2", { staticClass: "fw-title" }, [_vm._v("فلترة ب")]),
                _vm._v(" "),
                _c("div", { staticClass: "price-range-wrap" }, [
                  _c("h4", [_vm._v("السعر")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "range-slider" }, [
                    _c("div", { staticClass: "price-input" }, [
                      _c("input", {
                        attrs: {
                          type: "number",
                          min: "0",
                          id: "max_amount",
                          placeholder: "اقصي"
                        },
                        on: {
                          keypress: function($event) {
                            return _vm.getMinPrice()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: {
                          type: "number",
                          min: "0",
                          id: "min_amount",
                          placeholder: "يبدأ من"
                        },
                        on: {
                          keypress: function($event) {
                            return _vm.getMinPrice()
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "filter-widget mb-0" }, [
                _c("h2", { staticClass: "fw-title" }, [
                  _vm._v("الالوان الموجودة")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "fw-color-choose" },
                  _vm._l(_vm.colors, function(color) {
                    return _c("div", { staticClass: "cs-item" }, [
                      _c("input", {
                        attrs: {
                          type: "radio",
                          name: "cs",
                          id: color.name + "-color"
                        }
                      }),
                      _vm._v(" "),
                      _c("label", {
                        style: { backgroundColor: color.color },
                        attrs: { for: color.name + "-color" }
                      })
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "filter-widget" }, [
                _c("h2", { staticClass: "fw-title" }, [
                  _vm._v("العلامة التجارية")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "category-menu" },
                  _vm._l(_vm.trademarks, function(trademark) {
                    return _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(_vm._s(trademark.name)),
                        _c("span", [
                          _vm._v("( " + _vm._s(_vm.products.length) + " )")
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0" },
            [
              _vm.products.length == 0
                ? _c("h2", { staticStyle: { "text-align": "right" } }, [
                    _vm._v("للاسف لا توجد منتجات في هذا القسم حاليا")
                  ])
                : _c("div", [
                    _c("h4", { staticStyle: { "text-align": "right" } }, [
                      _vm._v(_vm._s(_vm.category.name) + " "),
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "15px",
                            "font-weight": "lighter"
                          }
                        },
                        [_vm._v(_vm._s(_vm.products.length) + " في الصفحة")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _vm._l(_vm.products, function(product) {
                          return _c(
                            "div",
                            { staticClass: "col-lg-4 col-sm-6" },
                            [
                              _c("div", { staticClass: "product-item" }, [
                                _c(
                                  "div",
                                  { staticClass: "pi-pic" },
                                  [
                                    product.price_offer !== null &&
                                    product.start_offer_at.date <=
                                      new Date().toISOString().slice(0, 10) &&
                                    product.end_offer_at.date >=
                                      new Date().toISOString().slice(0, 10)
                                      ? _c("div", { staticClass: "tag-sale" }, [
                                          _vm._v("عرض خاص")
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticStyle: { color: "black" },
                                        attrs: {
                                          tag: "a",
                                          to: _vm._f("replace")(
                                            "/product/" +
                                              product.id +
                                              "/" +
                                              product.title
                                          )
                                        }
                                      },
                                      [
                                        product.photo !== null
                                          ? _c("img", {
                                              staticStyle: { height: "300px" },
                                              attrs: {
                                                src:
                                                  "/uploads/products/" +
                                                  product.photo,
                                                alt: ""
                                              }
                                            })
                                          : _c("img", {
                                              staticStyle: { height: "300px" },
                                              attrs: {
                                                src:
                                                  "/uploads/products/default.jpg",
                                                alt: ""
                                              }
                                            })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "pi-links" }, [
                                      _vm.user !== null
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "add-card",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.addToCart(
                                                    product.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "flaticon-bag"
                                              }),
                                              _c("span", [
                                                _vm._v("اضف الي العربة")
                                              ])
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              staticClass: "add-card",
                                              attrs: {
                                                href: "#",
                                                "data-toggle": "modal",
                                                "data-target": "#exampleModal"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "flaticon-bag"
                                              }),
                                              _c("span", [
                                                _vm._v("اضف الي العربة")
                                              ])
                                            ]
                                          ),
                                      _vm._v(" "),
                                      _vm.user !== null
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "wishlist-btn",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.setLove(product.id)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                class: _vm.loveOrNot(product.id)
                                              })
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              staticClass: "wishlist-btn",
                                              attrs: {
                                                href: "#",
                                                "data-toggle": "modal",
                                                "data-target": "#exampleModal"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-heart-o"
                                              })
                                            ]
                                          )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "pi-text" }, [
                                  product.price_offer !== null &&
                                  product.start_offer_at.date <=
                                    new Date().toISOString().slice(0, 10) &&
                                  product.end_offer_at.date >=
                                    new Date().toISOString().slice(0, 10)
                                    ? _c("h6", [
                                        _vm._v(_vm._s(product.price_offer))
                                      ])
                                    : _c("h6", [_vm._v(_vm._s(product.price))]),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticStyle: { color: "black" },
                                          attrs: {
                                            tag: "a",
                                            to: _vm._f("replace")(
                                              "/product/" +
                                                product.id +
                                                "/" +
                                                product.title
                                            )
                                          }
                                        },
                                        [_vm._v(_vm._s(product.title))]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center w-100 pt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "site-btn sb-line sb-dark more_btn",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.getMoreProduct()
                                }
                              }
                            },
                            [_vm._v("عرض المزيد")]
                          )
                        ])
                      ],
                      2
                    )
                  ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "filter-widget mb-0" }, [
      _c("h2", { staticClass: "fw-title" }, [_vm._v("الاحجام الموجودة")]),
      _vm._v(" "),
      _c("div", { staticClass: "fw-size-choose" }, [
        _c("div", { staticClass: "sc-item" }, [
          _c("input", { attrs: { type: "radio", name: "sc", id: "xs-size" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "xs-size" } }, [_vm._v("XS")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sc-item" }, [
          _c("input", { attrs: { type: "radio", name: "sc", id: "s-size" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "s-size" } }, [_vm._v("S")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sc-item" }, [
          _c("input", {
            attrs: { type: "radio", name: "sc", id: "m-size", checked: "" }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "m-size" } }, [_vm._v("M")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sc-item" }, [
          _c("input", { attrs: { type: "radio", name: "sc", id: "l-size" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "l-size" } }, [_vm._v("L")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sc-item" }, [
          _c("input", { attrs: { type: "radio", name: "sc", id: "xl-size" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "xl-size" } }, [_vm._v("XL")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sc-item" }, [
          _c("input", { attrs: { type: "radio", name: "sc", id: "xxl-size" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "xxl-size" } }, [_vm._v("XXL")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/HomeComponent.vue?vue&type=template&id=3c94e0e6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "hero-section" }, [
      _c("div", { staticClass: "hero-slider owl-carousel" }, [
        _c(
          "div",
          { staticClass: "hs-item set-bg", style: _vm.getFirstImage() },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "hs-item set-bg", style: _vm.getSecondImage() },
          [_vm._m(1)]
        )
      ]),
      _vm._v(" "),
      _vm._m(2)
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("section", { staticClass: "top-letest-product-section" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(4),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "product-slider owl-carousel" },
          _vm._l(_vm.latest_products, function(latest_product) {
            return _c("div", { staticClass: "product-item" }, [
              _c(
                "div",
                { staticClass: "pi-pic" },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { color: "black" },
                      attrs: {
                        tag: "a",
                        to: _vm._f("replace")(
                          "/product/" +
                            latest_product.id +
                            "/" +
                            latest_product.title
                        )
                      }
                    },
                    [
                      latest_product.photo !== null
                        ? _c("img", {
                            staticStyle: { height: "300px" },
                            attrs: {
                              src: "/uploads/products/" + latest_product.photo,
                              alt: ""
                            }
                          })
                        : _c("img", {
                            staticStyle: { height: "300px" },
                            attrs: {
                              src: "/uploads/products/default.jpg",
                              alt: ""
                            }
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "pi-links" })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "pi-text" }, [
                latest_product.price_offer !== null &&
                latest_product.start_offer_at.date <=
                  new Date().toISOString().slice(0, 10) &&
                latest_product.end_offer_at.date >=
                  new Date().toISOString().slice(0, 10)
                  ? _c("h6", [_vm._v(_vm._s(latest_product.price_offer))])
                  : _c("h6", [_vm._v(_vm._s(latest_product.price))]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "router-link",
                      {
                        staticStyle: { color: "black" },
                        attrs: {
                          tag: "a",
                          to: _vm._f("replace")(
                            "/product/" +
                              latest_product.id +
                              "/" +
                              latest_product.title
                          )
                        }
                      },
                      [_vm._v(_vm._s(latest_product.title))]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "product-filter-section" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(5),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.products, function(product) {
            return _c("div", { staticClass: "col-lg-3 col-sm-6" }, [
              _c("div", { staticClass: "product-item" }, [
                _c(
                  "div",
                  { staticClass: "pi-pic" },
                  [
                    _c(
                      "router-link",
                      {
                        staticStyle: { color: "black" },
                        attrs: {
                          tag: "a",
                          to: _vm._f("replace")(
                            "/product/" + product.id + "/" + product.title
                          )
                        }
                      },
                      [
                        product.photo !== null
                          ? _c("img", {
                              staticStyle: { height: "300px" },
                              attrs: {
                                src: "/uploads/products/" + product.photo,
                                alt: ""
                              }
                            })
                          : _c("img", {
                              staticStyle: { height: "300px" },
                              attrs: {
                                src: "/uploads/products/default.jpg",
                                alt: ""
                              }
                            })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "pi-links" }, [
                      _vm.user !== null
                        ? _c(
                            "a",
                            {
                              staticClass: "add-card",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.addToCart(product.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "flaticon-bag" }),
                              _c("span", [_vm._v("اضف الي العربة")])
                            ]
                          )
                        : _c(
                            "a",
                            {
                              staticClass: "add-card",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#exampleModal"
                              }
                            },
                            [
                              _c("i", { staticClass: "flaticon-bag" }),
                              _c("span", [_vm._v("اضف الي العربة")])
                            ]
                          ),
                      _vm._v(" "),
                      _vm.user !== null
                        ? _c(
                            "a",
                            {
                              staticClass: "wishlist-btn",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.setLove(product.id)
                                }
                              }
                            },
                            [_c("i", { class: _vm.loveOrNot(product.id) })]
                          )
                        : _c(
                            "a",
                            {
                              staticClass: "wishlist-btn",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#exampleModal"
                              }
                            },
                            [_c("i", { staticClass: "fa fa-heart-o" })]
                          )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "pi-text" }, [
                  product.price_offer !== null &&
                  product.start_offer_at.date <=
                    new Date().toISOString().slice(0, 10) &&
                  product.end_offer_at.date >=
                    new Date().toISOString().slice(0, 10)
                    ? _c("h6", [_vm._v(_vm._s(product.price_offer))])
                    : _c("h6", [_vm._v(_vm._s(product.price))]),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c(
                        "router-link",
                        {
                          staticStyle: { color: "black" },
                          attrs: {
                            tag: "a",
                            to: _vm._f("replace")(
                              "/product/" + product.id + "/" + product.title
                            )
                          }
                        },
                        [_vm._v(_vm._s(product.title))]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "text-center pt-5" }, [
          _c(
            "button",
            {
              staticClass: "site-btn sb-line sb-dark more_btn",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.getMoreProduct()
                }
              }
            },
            [_vm._v("عرض المزيد")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "banner-section" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass: "banner set-bg",
            style: { backgroundImage: "/front/img/banner-bg.jpg" }
          },
          [
            _c("div", { staticClass: "tag-new" }, [_vm._v("جديد")]),
            _vm._v(" "),
            _c("span", [_vm._v("عروض جديدة")]),
            _vm._v(" "),
            _c("h2", [_vm._v("اواني المطبخ")]),
            _vm._v(" "),
            _c("a", { staticClass: "site-btn", attrs: { href: "#" } }, [
              _vm._v("تسوق الان")
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row flex-row-reverse" }, [
        _c("div", { staticClass: "col-xl-6 col-lg-7 text-white" }, [
          _c("span", [_vm._v("الاحدث موجود دائما")]),
          _vm._v(" "),
          _c("h2", [_vm._v("جميع منتجات الطبخ")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "تصفح جميع المنتجات الخاصة بأدوات الطهي من المنزل بداية من اواني الطعام حتي اطباق التقديم والاكواب … خصم يصل الي 50 في المائة … اسعارنا لا تقبل المنافسة"
            )
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "site-btn sb-line", attrs: { href: "#" } }, [
            _vm._v("اكتشف المزيد")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "site-btn sb-white", attrs: { href: "#" } }, [
            _vm._v("اضف الي العربة")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-card text-white" }, [
        _c("span", [_vm._v("يبدأ من")]),
        _vm._v(" "),
        _c("h2", [_vm._v("$20")]),
        _vm._v(" "),
        _c("p", [_vm._v("تسوق الان")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row flex-row-reverse" }, [
        _c("div", { staticClass: "col-xl-6 col-lg-7 text-white" }, [
          _c("span", [_vm._v("اسعار خاصة")]),
          _vm._v(" "),
          _c("h2", [_vm._v("ولا نقبل المنافسة")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "تصفح جميع المنتجات الخاصة بأدوات الطهي من المنزل بداية من اواني الطعام حتي اطباق التقديم والاكواب … خصم يصل الي 50 في المائة … اسعارنا لا تقبل المنافسة"
            )
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "site-btn sb-line", attrs: { href: "#" } }, [
            _vm._v("افضل منتاجتنا")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "site-btn sb-white", attrs: { href: "#" } }, [
            _vm._v("اضف الي العربة")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offer-card text-white" }, [
        _c("span", [_vm._v("تبدأ من")]),
        _vm._v(" "),
        _c("h2", [_vm._v("$29")]),
        _vm._v(" "),
        _c("p", [_vm._v("تسوق الان")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "slide-num-holder", attrs: { id: "snh-1" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "features-section" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 p-0 feature" }, [
            _c("div", { staticClass: "feature-inner" }, [
              _c("div", { staticClass: "feature-icon" }, [
                _c("img", { attrs: { src: "front/img/icons/1.png", alt: "#" } })
              ]),
              _vm._v(" "),
              _c("h2", [_vm._v("وسائل دفع سهلة")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 p-0 feature" }, [
            _c("div", { staticClass: "feature-inner" }, [
              _c("div", { staticClass: "feature-icon" }, [
                _c("img", { attrs: { src: "front/img/icons/2.png", alt: "#" } })
              ]),
              _vm._v(" "),
              _c("h2", [_vm._v("منتجات رائعة")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 p-0 feature" }, [
            _c("div", { staticClass: "feature-inner" }, [
              _c("div", { staticClass: "feature-icon" }, [
                _c("img", { attrs: { src: "front/img/icons/3.png", alt: "#" } })
              ]),
              _vm._v(" "),
              _c("h2", [_vm._v("توصيل مجاني وسريع")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("احدث المنتجات")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("تصفح افضل المنتجات واكثرها مبيعا")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/OrdersComponent.vue?vue&type=template&id=1c76b187& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "cart-section spad" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c(
            "div",
            {
              staticClass: "cart-table",
              staticStyle: { "text-align": "right" }
            },
            [
              _c("h3", [_vm._v("الطلبات")]),
              _vm._v(
                " يمكنك التواصل معنا لالغاء طلب … (معلومات التواصل موجودة في اسفل الموقع)\n                    "
              ),
              _c("div", { staticClass: "cart-table-warp" }, [
                _c("table", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.orders, function(order) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "product-th",
                            staticStyle: { "text-align": "right" }
                          },
                          [_vm._v(_vm._s(order.id))]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "total-th" }, [
                          _vm._v(_vm._s(order.total_price) + " جنية مصري")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "total-th" }, [
                          order.status == 1
                            ? _c("p", [_vm._v(_vm._s("جاري التجهيز"))])
                            : _vm._e(),
                          _vm._v(" "),
                          order.status == 2
                            ? _c("p", [_vm._v(_vm._s("تم تجهيز الطلب"))])
                            : _vm._e(),
                          _vm._v(" "),
                          order.status == 3
                            ? _c("p", [_vm._v(_vm._s("تم الاستلام"))])
                            : _vm._e()
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          { staticClass: "product-th", staticStyle: { "text-align": "right" } },
          [_vm._v("رقم الطلب")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "total-th", staticStyle: { "text-align": "right" } },
          [_vm._v("السعر الكلي")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "total-th", staticStyle: { "text-align": "right" } },
          [_vm._v("الحالة")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ProductComponent.vue?vue&type=template&id=5d1bd3ef& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "product-section" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "back-link" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  tag: "a",
                  to:
                    "/category/" +
                    this.product.Department.id +
                    "/" +
                    this.product.Department.name
                }
              },
              [_vm._v(" << رجوع الي القسم ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c("div", { staticClass: "product-pic-zoom" }, [
              _c("img", {
                staticClass: "product-big-img",
                staticStyle: { width: "587px", height: "700px" },
                attrs: {
                  src: "/uploads/products/" + this.product.photo,
                  alt: ""
                }
              })
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "product-thumbs",
              staticStyle: { overflow: "hidden", outline: "none" },
              attrs: { tabindex: "1" }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-6 product-details",
              staticStyle: { "text-align": "right" }
            },
            [
              _c("h2", { staticClass: "p-title" }, [
                _vm._v(_vm._s(this.product.title))
              ]),
              _vm._v(" "),
              this.product.price_offer !== null &&
              this.product.start_offer_at.date <=
                new Date().toISOString().slice(0, 10) &&
              this.product.end_offer_at.date >=
                new Date().toISOString().slice(0, 10)
                ? _c("h3", [_vm._v(_vm._s(this.product.price_offer))])
                : _c("h3", [_vm._v(_vm._s(this.product.price))]),
              _vm._v(" "),
              _c("h4", { staticClass: "p-stock" }, [
                _vm._v(
                  "\n                            متاح :\n                            "
                ),
                this.product.stock > 0
                  ? _c("span", [_vm._v("نعم")])
                  : _c("span", [_vm._v("لا")])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "p-review" }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "fw-size-choose" },
                _vm._l(this.product.Size, function(size) {
                  return _c("div", { staticClass: "sc-item" }, [
                    _c("input", {
                      attrs: {
                        type: "radio",
                        name: "sc",
                        id: "xs-size",
                        checked: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "xs-size" } }, [
                      _vm._v(_vm._s(size.name))
                    ])
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "quantity" }, [
                _c("p", [_vm._v("الكمية")]),
                _vm._v(" "),
                _c("div", { staticClass: "pro-qty" }, [
                  _c("input", {
                    attrs: {
                      type: "text",
                      id: "quantityProduct",
                      min: "1",
                      max: this.product.stock,
                      value: "1"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm.user !== null
                ? _c(
                    "a",
                    {
                      staticClass: "site-btn",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.addToCart(_vm.product.id)
                        }
                      }
                    },
                    [_vm._v("اضف الي العربة")]
                  )
                : _c(
                    "a",
                    {
                      staticClass: "site-btn",
                      attrs: {
                        href: "#",
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      }
                    },
                    [_vm._v("اضف الي العربة")]
                  ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "accordion-area", attrs: { id: "accordion" } },
                [
                  _c("div", { staticClass: "panel" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse show",
                        attrs: {
                          id: "collapse1",
                          "aria-labelledby": "headingOne",
                          "data-parent": "#accordion"
                        }
                      },
                      [
                        _c("div", {
                          staticClass: "panel-body",
                          domProps: { innerHTML: _vm._s(this.product.content) }
                        }),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              ),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "top-letest-product-section" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(4),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "product-slider owl-carousel" },
          _vm._l(_vm.latest_products, function(latest_product) {
            return _c("div", { staticClass: "product-item" }, [
              _c("div", { staticClass: "pi-pic" }, [
                _c(
                  "a",
                  {
                    staticStyle: { color: "black" },
                    attrs: {
                      href: _vm._f("replace")(
                        "/product/" +
                          latest_product.id +
                          "/" +
                          latest_product.title
                      )
                    }
                  },
                  [
                    latest_product.photo !== null
                      ? _c("img", {
                          staticStyle: { height: "300px" },
                          attrs: {
                            src: "/uploads/products/" + latest_product.photo,
                            alt: ""
                          }
                        })
                      : _c("img", {
                          staticStyle: { height: "300px" },
                          attrs: {
                            src: "/uploads/products/default.jpg",
                            alt: ""
                          }
                        })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "pi-links" }, [
                  _vm.user !== null
                    ? _c(
                        "a",
                        {
                          staticClass: "add-card",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.addToCart(latest_product.id)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "flaticon-bag" }),
                          _c("span", [_vm._v("اضف الي العربة")])
                        ]
                      )
                    : _c(
                        "a",
                        {
                          staticClass: "add-card",
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#exampleModal"
                          }
                        },
                        [
                          _c("i", { staticClass: "flaticon-bag" }),
                          _c("span", [_vm._v("اضف الي العربة")])
                        ]
                      ),
                  _vm._v(" "),
                  _vm.user !== null
                    ? _c(
                        "a",
                        {
                          staticClass: "wishlist-btn",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.setLove(latest_product.id)
                            }
                          }
                        },
                        [_c("i", { class: _vm.loveOrNot(latest_product.id) })]
                      )
                    : _c(
                        "a",
                        {
                          staticClass: "wishlist-btn",
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#exampleModal"
                          }
                        },
                        [_c("i", { staticClass: "fa fa-heart-o" })]
                      )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pi-text" }, [
                latest_product.price_offer !== null &&
                latest_product.start_offer_at.date <=
                  new Date().toISOString().slice(0, 10) &&
                latest_product.end_offer_at.date >=
                  new Date().toISOString().slice(0, 10)
                  ? _c("h6", [_vm._v(_vm._s(latest_product.price_offer))])
                  : _c("h6", [_vm._v(_vm._s(latest_product.price))]),
                _vm._v(" "),
                _c("p", [
                  _c(
                    "a",
                    {
                      staticStyle: { color: "black" },
                      attrs: {
                        href: _vm._f("replace")(
                          "/product/" +
                            latest_product.id +
                            "/" +
                            latest_product.title
                        )
                      }
                    },
                    [_vm._v(_vm._s(latest_product.title))]
                  )
                ])
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-rating" }, [
      _c("i", { staticClass: "fa fa-star-o" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star-o" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star-o" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star-o" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star-o fa-fade" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "panel-header", attrs: { id: "headingOne" } },
      [
        _c(
          "button",
          {
            staticClass: "panel-link active",
            staticStyle: { "text-align": "right" },
            attrs: {
              "data-toggle": "collapse",
              "data-target": "#collapse1",
              "aria-expanded": "true",
              "aria-controls": "collapse1"
            }
          },
          [_vm._v("معلومات المنتج")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-header", attrs: { id: "headingTwo" } }, [
        _c(
          "button",
          {
            staticClass: "panel-link",
            attrs: {
              "data-toggle": "collapse",
              "data-target": "#collapse2",
              "aria-expanded": "false",
              "aria-controls": "collapse2"
            }
          },
          [_vm._v("طرق الدفع ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse",
          attrs: {
            id: "collapse2",
            "aria-labelledby": "headingTwo",
            "data-parent": "#accordion"
          }
        },
        [
          _c("div", { staticClass: "panel-body" }, [
            _c("img", { attrs: { src: "/front/img/cards.png", alt: "" } }),
            _vm._v(" "),
            _c("p", [_vm._v("للأسف غير متاح حاليا الدفع الالكتروني")]),
            _vm._v(" "),
            _c("p", [_vm._v("زورونا في معرضنا")])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-sharing" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("i", { staticClass: "fa fa-instagram" })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [
        _c("i", { staticClass: "fa fa-pinterest" })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [
        _c("i", { staticClass: "fa fa-facebook" })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [
        _c("i", { staticClass: "fa fa-twitter" })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [
        _c("i", { staticClass: "fa fa-youtube" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("المنتجات المرتبطة")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2FydENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2FydENvbXBvbmVudC52dWU/MTU2MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DYXJ0Q29tcG9uZW50LnZ1ZT9mYjkzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DYXRlZ29yeUNvbXBvbmVudC52dWU/YTQ5MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DYXRlZ29yeUNvbXBvbmVudC52dWU/MTM1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT85MjM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlPzg3M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvT3JkZXJzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9PcmRlcnNDb21wb25lbnQudnVlP2FjZjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvT3JkZXJzQ29tcG9uZW50LnZ1ZT8zMzA5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2R1Y3RDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2R1Y3RDb21wb25lbnQudnVlPzI1MjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudC52dWU/YjJlMyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2FydENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL09yZGVyc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2R1Y3RDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhcnRDb21wb25lbnQudnVlPzQzYzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2F0ZWdvcnlDb21wb25lbnQudnVlP2YyODAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/Njg0ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9PcmRlcnNDb21wb25lbnQudnVlP2QwNDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudC52dWU/OTk5NSJdLCJuYW1lcyI6WyJvcHRpb25zIiwiY29sb3IiLCJmYWlsZWRDb2xvciIsInRoaWNrbmVzcyIsInRyYW5zaXRpb24iLCJzcGVlZCIsIm9wYWNpdHkiLCJ0ZXJtaW5hdGlvbiIsImF1dG9SZXZlcnQiLCJsb2NhdGlvbiIsImludmVyc2UiLCJWdWUiLCJ1c2UiLCJWdWVSb3V0ZXIiLCJMb2FkU2NyaXB0IiwiVnVlUHJvZ3Jlc3NCYXIiLCJ3aW5kb3ciLCJGaXJlIiwiYXhpb3MiLCJiYXNlX3VybCIsInByb3RvY29sIiwiaG9zdCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiSG9tZUNvbXBvbmVudCIsIm5hbWUiLCJDYXRlZ29yeUNvbXBvbmVudCIsIlByb2R1Y3RDb21wb25lbnQiLCJDYXJ0Q29tcG9uZW50IiwiT3JkZXJzQ29tcG9uZW50Iiwicm91dGVyIiwibW9kZSIsImZpbHRlciIsInRpdGxlIiwicmVwbGFjZSIsImFwcCIsImVsIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ1pDLE9BQUssRUFBRSxNQURLO0FBRVpDLGFBQVcsRUFBRSxTQUZEO0FBR1pDLFdBQVMsRUFBRSxLQUhDO0FBSVpDLFlBQVUsRUFBRTtBQUNSQyxTQUFLLEVBQUUsTUFEQztBQUVSQyxXQUFPLEVBQUUsTUFGRDtBQUdSQyxlQUFXLEVBQUU7QUFITCxHQUpBO0FBU1pDLFlBQVUsRUFBRSxJQVRBO0FBVVpDLFVBQVEsRUFBRSxLQVZFO0FBV1pDLFNBQU8sRUFBRTtBQVhHLENBQWhCO0FBY0FDLDJDQUFHLENBQUNDLEdBQUosQ0FBUUMsa0RBQVI7QUFDQUYsMkNBQUcsQ0FBQ0MsR0FBSixDQUFRRSw4REFBUjtBQUNBSCwyQ0FBRyxDQUFDQyxHQUFKLENBQVFHLHNEQUFSLEVBQXdCZixPQUF4QjtBQUVBZ0IsTUFBTSxDQUFDQyxJQUFQLEdBQWVOLDJDQUFmO0FBQ0FLLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlQSw0Q0FBZjtBQUNBLElBQUlDLFFBQVEsR0FBR0gsTUFBTSxDQUFDUCxRQUFQLENBQWdCVyxRQUFoQixHQUEyQixJQUEzQixHQUFrQ0osTUFBTSxDQUFDUCxRQUFQLENBQWdCWSxJQUFqRTtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBLElBQU1LLE1BQU0sR0FBRyxDQUNYO0FBQUVD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QUNBLGVBQWUsU0FBUyxXQUFXLEVBQUU7QUFDckMsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0EsZUFBZSxTQUFTLFdBQVcsRUFBRTtBQUNyQyxpQkFBaUIsK0JBQStCO0FBQ2hEO0FBQ0E7QUFDQSxlQUFlLFNBQVMsV0FBVyxFQUFFO0FBQ3JDLGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgVnVlUHJvZ3Jlc3NCYXIgZnJvbSAndnVlLXByb2dyZXNzYmFyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2FkU2NyaXB0IGZyb20gJ3Z1ZS1wbHVnaW4tbG9hZC1zY3JpcHQnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSG9tZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudCc7XG5pbXBvcnQgQ2F0ZWdvcnlDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NhdGVnb3J5Q29tcG9uZW50JztcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0Q29tcG9uZW50JztcbmltcG9ydCBDYXJ0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9DYXJ0Q29tcG9uZW50JztcbmltcG9ydCBPcmRlcnNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL09yZGVyc0NvbXBvbmVudCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3I6ICdncmV5JyxcbiAgICBmYWlsZWRDb2xvcjogJyM4NzRiNGInLFxuICAgIHRoaWNrbmVzczogJzVweCcsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzcGVlZDogJzAuMXMnLFxuICAgICAgICBvcGFjaXR5OiAnMC44cycsXG4gICAgICAgIHRlcm1pbmF0aW9uOiAzMDBcbiAgICB9LFxuICAgIGF1dG9SZXZlcnQ6IHRydWUsXG4gICAgbG9jYXRpb246ICd0b3AnLFxuICAgIGludmVyc2U6IGZhbHNlXG59XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoTG9hZFNjcmlwdCk7XG5WdWUudXNlKFZ1ZVByb2dyZXNzQmFyLCBvcHRpb25zKTtcblxud2luZG93LkZpcmUgID0gVnVlO1xud2luZG93LmF4aW9zID0gYXhpb3M7XG52YXIgYmFzZV91cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbmNvbnNvbGUubG9nKGJhc2VfdXJsKTtcbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IGJhc2VfdXJsICsnLycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgbmFtZTogJ2Zyb250LmluZGV4JyB9LFxuICAgIHsgcGF0aDogYmFzZV91cmwgKycvY2F0ZWdvcnkvOmlkLzpuYW1lPycsIGNvbXBvbmVudDogQ2F0ZWdvcnlDb21wb25lbnQsIG5hbWU6ICdmcm9udC5jYXRlZ29yeScsXG5cbiAgICB9LFxuICAgIHsgcGF0aDogJy9wcm9kdWN0LzppZC86bmFtZT8nLCBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvY2FydCcsIGNvbXBvbmVudDogQ2FydENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9vcmRlcnMnLCBjb21wb25lbnQ6IE9yZGVyc0NvbXBvbmVudCB9LFxuXVxuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICBtb2RlOiAnaGlzdG9yeScsXG4gICAgcm91dGVzLFxufSk7XG5cblZ1ZS5maWx0ZXIoJ3JlcGxhY2UnLGZ1bmN0aW9uICh0aXRsZSkge1xuICAgIHJldHVybiB0aXRsZS5yZXBsYWNlKC9cXHMvZywnLScpO1xufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FiZGVscmFobWFuJyxcbiAgICByb3V0ZXIsXG4gICAgZGF0YSA6IHtcblxuICAgIH1cbn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FydENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5YzBhMjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FydENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcnRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvb3B0L2xhbXBwL2h0ZG9jcy9lY29tbWVyY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ5YzBhMjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ5YzBhMjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ5YzBhMjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcnRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0OWMwYTI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0OWMwYTI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9DYXJ0Q29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FydENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FydENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FydENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5YzBhMjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTI4NjM2NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXRlZ29yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL29wdC9sYW1wcC9odGRvY3MvZWNvbW1lcmNlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5Mjg2MzY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5Mjg2MzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5Mjg2MzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXRlZ29yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkyODYzNjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzkyODYzNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkyODYzNjQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjOTRlMGU2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL29wdC9sYW1wcC9odGRvY3MvZWNvbW1lcmNlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjOTRlMGU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjOTRlMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjOTRlMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzk0ZTBlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYzk0ZTBlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjOTRlMGU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PcmRlcnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNzZiMTg3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09yZGVyc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9vcHQvbGFtcHAvaHRkb2NzL2Vjb21tZXJjZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzc2YjE4NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzc2YjE4NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzc2YjE4NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3JkZXJzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzc2YjE4NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzc2YjE4NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvT3JkZXJzQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlcnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM3NmIxODcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2R1Y3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkMWJkM2VmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2R1Y3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9kdWN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL29wdC9sYW1wcC9odGRvY3MvZWNvbW1lcmNlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVkMWJkM2VmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVkMWJkM2VmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVkMWJkM2VmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9kdWN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDFiZDNlZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZDFiZDNlZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2R1Y3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2R1Y3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2R1Y3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkMWJkM2VmJlwiIiwiPHRlbXBsYXRlPlxuICAgICAgICA8c2VjdGlvbiB2LWlmPVwiY2FydCAhPT0gbnVsbFwiIGNsYXNzPVwiY2FydC1zZWN0aW9uIHNwYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtdGFibGVcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPtit2YLZitio2KrZijwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtdGFibGUtd2FycFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHJvZHVjdC10aFwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj7Yp9mE2YXZhtiq2Kw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRvdGFsLXRoXCI+2KfZhNiz2LnYsSDYqNiv2YjZhiDYudix2YjYtiAoINiz2YrYqtmFINin2K3Yqtiz2KfYqCDYs9i52LEg2KfZhNi52LHYtiDYp9iw2Kcg2YPYp9mGINmF2YjYrNmI2K8gKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidG90YWwtdGhcIj7Yp9mE2LrYp9ihINin2YTYt9mE2Kg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicHJvZHVjdCBpbiBjYXJ0LlByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHJvZHVjdC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGMtdGl0bGVcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDMwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgcHJvZHVjdC50aXRsZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCIocHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJiBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKSAmJiBwcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKVwiPnt7IHByb2R1Y3QucHJpY2Vfb2ZmZXIgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZWxzZT57eyBwcm9kdWN0LnByaWNlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3RhbC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWlmPVwiKHByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiYgcHJvZHVjdC5zdGFydF9vZmZlcl9hdC5kYXRlIDw9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSkgJiYgcHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMClcIj57eyBwcm9kdWN0LnByaWNlX29mZmVyIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3sgcHJvZHVjdC5wcmljZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdGFsLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxhIGhyZWY9XCIjXCIgdi1vbjpjbGljay5wcmV2ZW50PVwicmVtb3ZlUHJvZHVjdChwcm9kdWN0LmlkKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2E+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+PHNwYW4+INmE2YTYp9iz2YEg2YTYpyDZitmI2KzYryDYr9mB2Lkg2KfZhNmD2KrYsdmI2YbZiiDYrdiq2Yog2KfZhNin2YY8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9vcmRlcnNcIiB0YWc9XCJhXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgYnRuLXhsXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtwYWRkaW5nOiAxMHB4O2JvcmRlci1yYWRpdXM6IDIzcHg7bWFyZ2luOiAxcHhcIj7Yt9mE2KjYp9iq2Yog2KfZhNiz2KfYqNmC2Kk8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPtiq2YHYp9i12YrZhCDYp9mE2LfZhNioPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRldGFpbHNcIiBpZD1cImRldGFpbHNcIiByb3dzPVwiOFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLZitmD2KrYqCDZh9mG2Kcg2YPZhdmK2Kkg2YXYudmK2YbYqSDigKYg2YXYq9in2YQgOiDYp9ix2YrYryAyMCDZgti32LnYqSDZhdmGINin2YTZhdmG2KrYrCAoINit2YTYqSDYrNmK2LHYp9mG2YrYqiApINin2YTZhdmI2KzZiNivINmB2Yog2K3ZgtmK2KjYqtmKINmI2KfZhNmF2YbYqtisICgg2LfZgtmFINmD2KfYs9in2KogKSAzINmC2LfYuSDZiNio2KfZgtmKINin2YTZhdmG2KrYrNin2Kog2YLYt9i52Kkg2YjYp9it2K/YqVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicHJvbW8tY29kZS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLYp9iv2K7ZhCDZg9mI2K8g2K7YtdmFXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+2KrYo9mD2YrYrzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHYtaWY9XCJjYXJ0LlByb2R1Y3QubGVuZ3RoID4gMFwiIGNsYXNzPVwic2l0ZS1idG5cIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJzZW5kT3JkZXIoKVwiPtin2LHYs9mEINin2YTYt9mE2Kgg2YjYp9iv2YHYuSDYudmG2K8g2KfZhNin2LPYqtmE2KfZhTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1lbHNlIGNsYXNzPVwic2l0ZS1idG5cIiBvbmNsaWNrPVwiYWxlcnQoJ9mE2Kcg2YrZiNis2K8g2YXZhtiq2KzYp9iqINmE2YTYt9mE2KgnKVwiPtin2LHYs9mEINin2YTYt9mE2Kgg2YjYp9iv2YHYuSDYudmG2K8g2KfZhNin2LPYqtmE2KfZhTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0YWc9XCJhXCIgdG89XCIvXCIgY2xhc3M9XCJzaXRlLWJ0biBzYi1kYXJrXCI+2KfZg9mF2YQg2KfZhNiq2LPZiNmCPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiB2LWVsc2UgY2xhc3M9XCJjYXJ0LXNlY3Rpb24gc3BhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC10YWJsZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+2K3ZgtmK2KjYqtmKPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC10YWJsZS13YXJwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJwcm9kdWN0LXRoXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPtin2YTZhdmG2KrYrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidG90YWwtdGhcIj7Yp9mE2LPYudixINio2K/ZiNmGINi52LHZiNi2ICgg2LPZitiq2YUg2KfYrdiq2LPYp9ioINiz2LnYsSDYp9mE2LnYsdi2INin2LDYpyDZg9in2YYg2YXZiNis2YjYryApPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0b3RhbC10aFwiPtin2YTYutin2KEg2KfZhNi32YTYqDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjxzcGFuPiDZhNmE2KfYs9mBINmE2Kcg2YrZiNis2K8g2K/Zgdi5INin2YTZg9iq2LHZiNmG2Yog2K3YqtmKINin2YTYp9mGPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjYXJkLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvb3JkZXJzXCIgdGFnPVwiYVwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIGJ0bi14bFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7cGFkZGluZzogMTBweDtib3JkZXItcmFkaXVzOiAyM3B4O21hcmdpbjogMXB4XCI+2LfZhNio2KfYqtmKINin2YTYs9in2KjZgtipPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj7YqtmB2KfYtdmK2YQg2KfZhNi32YTYqDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXRhaWxzXCIgcm93cz1cIjhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwi2YrZg9iq2Kgg2YfZhtinINmD2YXZitipINmF2LnZitmG2Kkg4oCmINmF2KvYp9mEIDog2KfYsdmK2K8gMjAg2YLYt9i52Kkg2YXZhiDYp9mE2YXZhtiq2KwgKCDYrdmE2Kkg2KzZitix2KfZhtmK2KogKSDYp9mE2YXZiNis2YjYryDZgdmKINit2YLZitio2KrZiiDZiNin2YTZhdmG2KrYrCAoINi32YLZhSDZg9in2LPYp9iqICkgMyDZgti32Lkg2YjYqNin2YLZiiDYp9mE2YXZhtiq2KzYp9iqINmC2LfYudipINmI2KfYrdiv2KlcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInByb21vLWNvZGUtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi2KfYr9iu2YQg2YPZiNivINiu2LXZhVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPtiq2KPZg9mK2K88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaXRlLWJ0blwiIG9uY2xpY2s9XCJhbGVydCgn2YTYpyDZitmI2KzYryDZhdmG2KrYrNin2Kog2YTZhNi32YTYqCcpXCI+2KfYsdiz2YQg2KfZhNi32YTYqCDZiNin2K/Zgdi5INi52YbYryDYp9mE2KfYs9iq2YTYp9mFPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImFcIiB0bz1cIi9cIiBjbGFzcz1cInNpdGUtYnRuIHNiLWRhcmtcIj7Yp9mD2YXZhCDYp9mE2KrYs9mI2YI8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjYXJ0OiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2FydCgpO1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiAge1xuICAgICAgICAgICAgJHJvdXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldENhcnQgKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvYXBpL293bi9jYXJ0JykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0ID0gcmVzcG9uc2UuZGF0YS5jYXJ0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRPcmRlciAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvY3JlYXRlL29yZGVyLycrdGhpcy5jYXJ0LmlkLHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgOiB0aGlzLmNhcnQuUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKS52YWx1ZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0IChwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvZGVsZXRlL3Byb2R1Y3QvJyt0aGlzLmNhcnQuaWQrJy8nK3Byb2R1Y3RJZCkudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoLmNhcnQuUHJvZHVjdC5maW5kKHggPT4geC5pZCA9PSBwcm9kdWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aC5jYXJ0LlByb2R1Y3QuaW5kZXhPZihwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGguY2FydC5Qcm9kdWN0LnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8IS0tIENhdGVnb3J5IHNlY3Rpb24gLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktc2VjdGlvbiBzcGFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgb3JkZXItMiBvcmRlci1sZy0xXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmdy10aXRsZVwiPtin2YLYs9in2YUg2YXYtNin2KjZh9mHPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYXRlZ29yeS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIj48cm91dGVyLWxpbmsgdGFnPVwiYVwiIDp0bz1cIicvY2F0ZWdvcnkvJytjYXRlZ29yeS5pZCsnLycrY2F0ZWdvcnkubmFtZXxyZXBsYWNlXCI+e3sgY2F0ZWdvcnkubmFtZSB9fTwvcm91dGVyLWxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLXdpZGdldCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZnctdGl0bGVcIj7ZgdmE2KrYsdipINioPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtcmFuZ2Utd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+2KfZhNiz2LnYsTwvaDQ+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtcmFuZ2UgdWktc2xpZGVyIHVpLWNvcm5lci1hbGwgdWktc2xpZGVyLWhvcml6b250YWwgdWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50XCIgZGF0YS1taW49XCJcIiBkYXRhLW1heD1cIlwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1zbGlkZXItcmFuZ2UgdWktY29ybmVyLWFsbCB1aS13aWRnZXQtaGVhZGVyXCIgc3R5bGU9XCJsZWZ0OiAwJTsgd2lkdGg6IDEwMCU7XCI+PC9kaXY+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ1aS1zbGlkZXItaGFuZGxlIHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGVmYXVsdFwiIHN0eWxlPVwibGVmdDogMCU7XCI+LS0+XG48IS0tXHRcdFx0XHRcdFx0XHRcdCAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ1aS1zbGlkZXItaGFuZGxlIHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGVmYXVsdFwiIHN0eWxlPVwibGVmdDogMTAwJTtcIj4tLT5cbjwhLS1cdFx0XHRcdFx0XHRcdFx0ICAgIDwvc3Bhbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFuZ2Utc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtb246a2V5cHJlc3M9XCJnZXRNaW5QcmljZSgpXCIgbWluPVwiMFwiIGlkPVwibWF4X2Ftb3VudFwiIHBsYWNlaG9sZGVyPVwi2KfZgti12YpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtb246a2V5cHJlc3M9XCJnZXRNaW5QcmljZSgpXCIgbWluPVwiMFwiIGlkPVwibWluX2Ftb3VudFwiIHBsYWNlaG9sZGVyPVwi2YrYqNiv2KMg2YXZhlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLXdpZGdldCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZnctdGl0bGVcIj7Yp9mE2KfZhNmI2KfZhiDYp9mE2YXZiNis2YjYr9ipPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnctY29sb3ItY2hvb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJjb2xvciBpbiBjb2xvcnNcIiBjbGFzcz1cImNzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY3NcIiA6aWQ9XCJjb2xvci5uYW1lKyctY29sb3InXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdi1iaW5kOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpjb2xvci5jb2xvcn1cIiA6Zm9yPVwiY29sb3IubmFtZSsnLWNvbG9yJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItd2lkZ2V0IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmdy10aXRsZVwiPtin2YTYp9it2KzYp9mFINin2YTZhdmI2KzZiNiv2Kk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdy1zaXplLWNob29zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzY1wiIGlkPVwieHMtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInhzLXNpemVcIj5YUzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzY1wiIGlkPVwicy1zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicy1zaXplXCI+UzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2MtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzY1wiIGlkPVwibS1zaXplXCIgIGNoZWNrZWQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtLXNpemVcIj5NPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNjXCIgaWQ9XCJsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsLXNpemVcIj5MPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNjXCIgaWQ9XCJ4bC1zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwieGwtc2l6ZVwiPlhMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNjXCIgaWQ9XCJ4eGwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInh4bC1zaXplXCI+WFhMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZnctdGl0bGVcIj7Yp9mE2LnZhNin2YXYqSDYp9mE2KrYrNin2LHZitipPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYXRlZ29yeS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRyYWRlbWFyayBpbiB0cmFkZW1hcmtzXCI+PGEgaHJlZj1cIiNcIj57eyB0cmFkZW1hcmsubmFtZSB9fTxzcGFuPigge3sgcHJvZHVjdHMubGVuZ3RoIH19ICk8L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTkgIG9yZGVyLTEgb3JkZXItbGctMiBtYi01IG1iLWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiB2LWlmPVwicHJvZHVjdHMubGVuZ3RoID09IDBcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+2YTZhNin2LPZgSDZhNinINiq2YjYrNivINmF2YbYqtis2KfYqiDZgdmKINmH2LDYpyDYp9mE2YLYs9mFINit2KfZhNmK2Kc8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodFwiPnt7IGNhdGVnb3J5Lm5hbWUgfX0gPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE1cHg7Zm9udC13ZWlnaHQ6IGxpZ2h0ZXJcIj57eyBwcm9kdWN0cy5sZW5ndGggfX0g2YHZiiDYp9mE2LXZgdit2Kk8L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInByb2R1Y3QgaW4gcHJvZHVjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLXBpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIocHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJiBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKSAmJiBwcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKVwiIGNsYXNzPVwidGFnLXNhbGVcIj7Yudix2LYg2K7Yp9i1PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0YWc9XCJhXCIgOnRvPVwiJy9wcm9kdWN0LycrIHByb2R1Y3QuaWQgKyAnLycgKyBwcm9kdWN0LnRpdGxlfHJlcGxhY2VcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cImhlaWdodDogMzAwcHhcIiB2LWlmPVwicHJvZHVjdC5waG90byAhPT0gbnVsbFwiIDpzcmM9XCInL3VwbG9hZHMvcHJvZHVjdHMvJytwcm9kdWN0LnBob3RvXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVwiaGVpZ2h0OiAzMDBweFwiIHYtZWxzZSA6c3JjPVwiJy91cGxvYWRzL3Byb2R1Y3RzL2RlZmF1bHQuanBnJ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGktbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1pZj1cInVzZXIgIT09IG51bGxcIiBjbGFzcz1cImFkZC1jYXJkXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiYWRkVG9DYXJ0KHByb2R1Y3QuaWQpXCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1iYWdcIj48L2k+PHNwYW4+2KfYttmBINin2YTZiiDYp9mE2LnYsdio2Kk8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWVsc2UgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiIGNsYXNzPVwiYWRkLWNhcmRcIj48aSBjbGFzcz1cImZsYXRpY29uLWJhZ1wiPjwvaT48c3Bhbj7Yp9i22YEg2KfZhNmKINin2YTYudix2KjYqTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHN0cmFuZ2UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtaWY9XCJ1c2VyICE9PSBudWxsXCIgdi1vbjpjbGljay5wcmV2ZW50PVwic2V0TG92ZShwcm9kdWN0LmlkKVwiIGNsYXNzPVwid2lzaGxpc3QtYnRuXCI+PGkgOmNsYXNzPVwibG92ZU9yTm90KHByb2R1Y3QuaWQpXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1lbHNlIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIiBjbGFzcz1cIndpc2hsaXN0LWJ0blwiPjxpIGNsYXNzPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiB2LWlmPVwiKHByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiYgcHJvZHVjdC5zdGFydF9vZmZlcl9hdC5kYXRlIDw9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSkgJiYgcHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMClcIj57eyBwcm9kdWN0LnByaWNlX29mZmVyIH19PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHYtZWxzZT57eyBwcm9kdWN0LnByaWNlIH19PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHJvdXRlci1saW5rIHRhZz1cImFcIiA6dG89XCInL3Byb2R1Y3QvJysgcHJvZHVjdC5pZCArICcvJyArIHByb2R1Y3QudGl0bGV8cmVwbGFjZVwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+e3sgcHJvZHVjdC50aXRsZSB9fTwvcm91dGVyLWxpbms+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdy0xMDAgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpdGUtYnRuIHNiLWxpbmUgc2ItZGFyayBtb3JlX2J0blwiIEBjbGljay5wcmV2ZW50PVwiZ2V0TW9yZVByb2R1Y3QoKVwiPti52LHYtiDYp9mE2YXYstmK2K88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8IS0tIENhdGVnb3J5IHNlY3Rpb24gZW5kIC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBbXSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW10sXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNfb2xkOiBbXSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICB0cmFkZW1hcmtzOiBbXSxcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgICAgIGxvdmVzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiAge1xuICAgICAgICAgICAgJHJvdXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRDYXRlZ29yeSAoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9jYXRlZ29yeS8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnlbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzX29sZCA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGEuY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMgPSByZXNwb25zZS5kYXRhLmNvbG9ycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFkZW1hcmtzID0gcmVzcG9uc2UuZGF0YS50cmFkZW1hcmtzO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuRmlyZS5sb2FkU2NyaXB0KFwiL2Zyb250L2pzL21haW4uanNcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TW9yZVByb2R1Y3QoKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9yZSBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvYXBpL21vcmUvc3BlY2lmaWMvcHJvZHVjdHMvJyt0aGlzLmNhdGVnb3J5LmlkKycvJyt0aGlzLnByb2R1Y3RzLmxlbmd0aCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdLmNvbmNhdCh0aGlzLnByb2R1Y3RzLHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmRhdGEubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vcmVfYnRuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TWluUHJpY2UoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgbWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbl9hbW91bnQnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgbWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heF9hbW91bnQnKS52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoLnByb2R1Y3RzID0gdGgucHJvZHVjdHNfb2xkO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aC5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0LGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5wcmljZSA+PSBtaW4gJiYgcHJvZHVjdC5wcmljZSA8PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5wcm9kdWN0cy5zcGxpY2UoMCxpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwyMDAwKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXIgKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcHJvZmlsZScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRMb3Zlcyh0aGlzLnVzZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldExvdmUgKGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvY3JlYXRlL2xvdmUvJytpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlID0gcmVzcG9uc2UuZGF0YS5sb3ZlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldExvdmVzKHRoaXMudXNlci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TG92ZXMgKGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvbG92ZXMvJytpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlcyA9IHJlc3BvbnNlLmRhdGEubG92ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb3ZlT3JOb3QgKGlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmxvdmVzLmZpbmQoeCA9PiB4LlByb2R1Y3QuaWQgPT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZmEgZmEtaGVhcnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLWhlYXJ0LW8nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFRvQ2FydCAoaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9jYXJ0LycraWQpLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9iq2YXYqiDYp9mE2KfYttin2YHYqSDYp9mE2Yog2KfZhNi52LHYqNipINio2YbYrNin2K0nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPCEtLSBIZXJvIHNlY3Rpb24gLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVyby1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1zbGlkZXIgb3dsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhzLWl0ZW0gc2V0LWJnXCIgOnN0eWxlPVwiZ2V0Rmlyc3RJbWFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbGctNyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtin2YTYp9it2K/YqyDZhdmI2KzZiNivINiv2KfYptmF2Kc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7YrNmF2YrYuSDZhdmG2KrYrNin2Kog2KfZhNi32KjYrjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtiq2LXZgditINis2YXZiti5INin2YTZhdmG2KrYrNin2Kog2KfZhNiu2KfYtdipINio2KPYr9mI2KfYqiDYp9mE2LfZh9mKINmF2YYg2KfZhNmF2YbYstmEINio2K/Yp9mK2Kkg2YXZhiDYp9mI2KfZhtmKINin2YTYt9i52KfZhSDYrdiq2Yog2KfYt9io2KfZgiDYp9mE2KrZgtiv2YrZhSDZiNin2YTYp9mD2YjYp9ioIOKApiDYrti12YUg2YrYtdmEINin2YTZiiA1MCDZgdmKINin2YTZhdin2KbYqSDigKYg2KfYs9i52KfYsdmG2Kcg2YTYpyDYqtmC2KjZhCDYp9mE2YXZhtin2YHYs9ipPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic2l0ZS1idG4gc2ItbGluZVwiPtin2YPYqti02YEg2KfZhNmF2LLZitivPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic2l0ZS1idG4gc2Itd2hpdGVcIj7Yp9i22YEg2KfZhNmKINin2YTYudix2KjYqTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmVyLWNhcmQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtmK2KjYr9ijINmF2YY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiQyMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2KrYs9mI2YIg2KfZhNin2YY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhzLWl0ZW0gc2V0LWJnXCIgOnN0eWxlPVwiZ2V0U2Vjb25kSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtcm93LXJldmVyc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLWxnLTcgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Yp9iz2LnYp9ixINiu2KfYtdipPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+2YjZhNinINmG2YLYqNmEINin2YTZhdmG2KfZgdiz2Kk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Yqti12YHYrSDYrNmF2YrYuSDYp9mE2YXZhtiq2KzYp9iqINin2YTYrtin2LXYqSDYqNij2K/ZiNin2Kog2KfZhNi32YfZiiDZhdmGINin2YTZhdmG2LLZhCDYqNiv2KfZitipINmF2YYg2KfZiNin2YbZiiDYp9mE2LfYudin2YUg2K3YqtmKINin2LfYqNin2YIg2KfZhNiq2YLYr9mK2YUg2YjYp9mE2KfZg9mI2KfYqCDigKYg2K7YtdmFINmK2LXZhCDYp9mE2YogNTAg2YHZiiDYp9mE2YXYp9im2Kkg4oCmINin2LPYudin2LHZhtinINmE2Kcg2KrZgtio2YQg2KfZhNmF2YbYp9mB2LPYqTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNpdGUtYnRuIHNiLWxpbmVcIj7Yp9mB2LbZhCDZhdmG2KrYp9is2KrZhtinPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwic2l0ZS1idG4gc2Itd2hpdGVcIj7Yp9i22YEg2KfZhNmKINin2YTYudix2KjYqTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmVyLWNhcmQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtiq2KjYr9ijINmF2YY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiQyOTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2KrYs9mI2YIg2KfZhNin2YY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGUtbnVtLWhvbGRlclwiIGlkPVwic25oLTFcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gSGVybyBzZWN0aW9uIGVuZCAtLT5cbiAgICAgICAgPCEtLSBGZWF0dXJlcyBzZWN0aW9uIC0tPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImZlYXR1cmVzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBwLTAgZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZnJvbnQvaW1nL2ljb25zLzEucG5nXCIgYWx0PVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7ZiNiz2KfYptmEINiv2YHYuSDYs9mH2YTYqTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBwLTAgZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZnJvbnQvaW1nL2ljb25zLzIucG5nXCIgYWx0PVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7ZhdmG2KrYrNin2Kog2LHYp9im2LnYqTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBwLTAgZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZnJvbnQvaW1nL2ljb25zLzMucG5nXCIgYWx0PVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7YqtmI2LXZitmEINmF2KzYp9mG2Yog2YjYs9ix2YrYuTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8IS0tIEZlYXR1cmVzIHNlY3Rpb24gZW5kIC0tPlxuICAgICAgICA8IS0tIGxldGVzdCBwcm9kdWN0IHNlY3Rpb24gLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidG9wLWxldGVzdC1wcm9kdWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+2KfYrdiv2Ksg2KfZhNmF2YbYqtis2KfYqjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3Qtc2xpZGVyIG93bC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCIgdi1mb3I9XCJsYXRlc3RfcHJvZHVjdCBpbiBsYXRlc3RfcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaS1waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVwiYVwiIDp0bz1cIicvcHJvZHVjdC8nKyBsYXRlc3RfcHJvZHVjdC5pZCArICcvJyArIGxhdGVzdF9wcm9kdWN0LnRpdGxlfHJlcGxhY2VcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVwiaGVpZ2h0OiAzMDBweFwiIHYtaWY9XCJsYXRlc3RfcHJvZHVjdC5waG90byAhPT0gbnVsbFwiIDpzcmM9XCInL3VwbG9hZHMvcHJvZHVjdHMvJytsYXRlc3RfcHJvZHVjdC5waG90b1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVwiaGVpZ2h0OiAzMDBweFwiIHYtZWxzZSA6c3JjPVwiJy91cGxvYWRzL3Byb2R1Y3RzL2RlZmF1bHQuanBnJ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLWxpbmtzXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtaWY9XCJ1c2VyICE9PSBudWxsXCIgY2xhc3M9XCJhZGQtY2FyZFwiPjxpIGNsYXNzPVwiZmxhdGljb24tYmFnXCI+PC9pPjxzcGFuPtin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipPC9zcGFuPjwvYT4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1lbHNlIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIiBjbGFzcz1cImFkZC1jYXJkXCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1iYWdcIj48L2k+PHNwYW4+2KfYttmBINin2YTZiiDYp9mE2LnYsdio2Kk8L3NwYW4+PC9hPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHN0cmFuZ2UgLS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtaWY9XCJ1c2VyICE9PSBudWxsXCIgdi1vbjpjbGljay5wcmV2ZW50PVwic2V0TG92ZShsYXRlc3RfcHJvZHVjdC5pZClcIiBjbGFzcz1cIndpc2hsaXN0LWJ0blwiPjxpIDpjbGFzcz1cImxvdmVPck5vdChsYXRlc3RfcHJvZHVjdC5pZClcIj48L2k+PC9hPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWVsc2UgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiIGNsYXNzPVwid2lzaGxpc3QtYnRuXCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1oZWFydC1vXCI+PC9pPjwvYT4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgdi1pZj1cIihsYXRlc3RfcHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJiBsYXRlc3RfcHJvZHVjdC5zdGFydF9vZmZlcl9hdC5kYXRlIDw9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSkgJiYgbGF0ZXN0X3Byb2R1Y3QuZW5kX29mZmVyX2F0LmRhdGUgPj0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApXCI+e3sgbGF0ZXN0X3Byb2R1Y3QucHJpY2Vfb2ZmZXIgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiB2LWVsc2U+e3sgbGF0ZXN0X3Byb2R1Y3QucHJpY2UgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxyb3V0ZXItbGluayB0YWc9XCJhXCIgOnRvPVwiJy9wcm9kdWN0LycrIGxhdGVzdF9wcm9kdWN0LmlkICsgJy8nICsgbGF0ZXN0X3Byb2R1Y3QudGl0bGV8cmVwbGFjZVwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+e3sgbGF0ZXN0X3Byb2R1Y3QudGl0bGUgfX08L3JvdXRlci1saW5rPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gUHJvZHVjdCBmaWx0ZXIgc2VjdGlvbiAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcm9kdWN0LWZpbHRlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPtiq2LXZgditINin2YHYttmEINin2YTZhdmG2KrYrNin2Kog2YjYp9mD2KvYsdmH2Kcg2YXYqNmK2LnYpzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG48IS0tICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3QtZmlsdGVyLW1lbnVcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIj48YSBocmVmPVwiI1wiPnt7IGNhdGVnb3J5Lm5hbWUgfX08L2E+PC9saT4tLT5cbjwhLS0gICAgICAgICAgICAgICAgPC91bD4tLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwcm9kdWN0IGluIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaS1waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImFcIiA6dG89XCInL3Byb2R1Y3QvJysgcHJvZHVjdC5pZCArICcvJyArIHByb2R1Y3QudGl0bGV8cmVwbGFjZVwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVwiaGVpZ2h0OiAzMDBweFwiIHYtaWY9XCJwcm9kdWN0LnBob3RvICE9PSBudWxsXCIgOnNyYz1cIicvdXBsb2Fkcy9wcm9kdWN0cy8nK3Byb2R1Y3QucGhvdG9cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJoZWlnaHQ6IDMwMHB4XCIgdi1lbHNlIDpzcmM9XCInL3VwbG9hZHMvcHJvZHVjdHMvZGVmYXVsdC5qcGcnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWlmPVwidXNlciAhPT0gbnVsbFwiIGNsYXNzPVwiYWRkLWNhcmRcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJhZGRUb0NhcnQocHJvZHVjdC5pZClcIj48aSBjbGFzcz1cImZsYXRpY29uLWJhZ1wiPjwvaT48c3Bhbj7Yp9i22YEg2KfZhNmKINin2YTYudix2KjYqTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtZWxzZSBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCIgY2xhc3M9XCJhZGQtY2FyZFwiPjxpIGNsYXNzPVwiZmxhdGljb24tYmFnXCI+PC9pPjxzcGFuPtin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gc3RyYW5nZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1pZj1cInVzZXIgIT09IG51bGxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJzZXRMb3ZlKHByb2R1Y3QuaWQpXCIgY2xhc3M9XCJ3aXNobGlzdC1idG5cIj48aSA6Y2xhc3M9XCJsb3ZlT3JOb3QocHJvZHVjdC5pZClcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWVsc2UgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiIGNsYXNzPVwid2lzaGxpc3QtYnRuXCI+PGkgY2xhc3M9XCJmYSBmYS1oZWFydC1vXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHYtaWY9XCIocHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJiBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKSAmJiBwcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKVwiPnt7IHByb2R1Y3QucHJpY2Vfb2ZmZXIgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgdi1lbHNlPnt7IHByb2R1Y3QucHJpY2UgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48cm91dGVyLWxpbmsgdGFnPVwiYVwiIDp0bz1cIicvcHJvZHVjdC8nKyBwcm9kdWN0LmlkICsgJy8nICsgcHJvZHVjdC50aXRsZXxyZXBsYWNlXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIj57eyBwcm9kdWN0LnRpdGxlIH19PC9yb3V0ZXItbGluaz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB0LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpdGUtYnRuIHNiLWxpbmUgc2ItZGFyayBtb3JlX2J0blwiIEBjbGljay5wcmV2ZW50PVwiZ2V0TW9yZVByb2R1Y3QoKVwiPti52LHYtiDYp9mE2YXYstmK2K88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gUHJvZHVjdCBmaWx0ZXIgc2VjdGlvbiBlbmQgLS0+XG4gICAgICAgIDwhLS0gQmFubmVyIHNlY3Rpb24gLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmFubmVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyIHNldC1iZ1wiIDpzdHlsZT1cIntiYWNrZ3JvdW5kSW1hZ2U6ICcvZnJvbnQvaW1nL2Jhbm5lci1iZy5qcGcnfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLW5ld1wiPtis2K/ZitivPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPti52LHZiNi2INis2K/Zitiv2Kk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7Yp9mI2KfZhtmKINin2YTZhdi32KjYrjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaXRlLWJ0blwiPtiq2LPZiNmCINin2YTYp9mGPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPCEtLSBCYW5uZXIgc2VjdGlvbiBlbmQgIC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0czogW10sXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgICAgICAgICAgIGxvdmVzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZU1vdW50ICgpIHtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmdldExhdGVzdFByb2R1Y3QoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRMYXRlc3RQcm9kdWN0ICgpIHtcbiAgICAgICAgICAgICAgICAvLyBsYXRlc3QgcHJvZHVjdHNcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9sYXRlc3QvcHJvZHVjdHMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdF9wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkZpcmUubmV4dFRpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oZXJvLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24tbGVmdC1hcnJvdy0xXCI+PC9pPicsICc8aSBjbGFzcz1cImZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hcnRTcGVlZDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLml0ZW1zKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3NuaC0xXCIpLmh0bWwoXCI8c3Bhbj4xPC9zcGFuPjxzcGFuPlwiICsgYSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24tbGVmdC1hcnJvdy0xXCI+PC9pPicsICc8aSBjbGFzcz1cImZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0ODAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNzY4IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMDAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbWVudScpLnNsaWNrbmF2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kVG86Jy5tYWluLW5hdmJhciAuY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWRTeW1ib2w6ICc8aSBjbGFzcz1cImZsYXRpY29uLXJpZ2h0LWFycm93XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkU3ltYm9sOiAnPGkgY2xhc3M9XCJmbGF0aWNvbi1kb3duLWFycm93XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfYp9mE2YLYp9im2YXYqScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHZtKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UHJvZHVjdHMgKCkge1xuICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvcHJvZHVjdHMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE1vcmVQcm9kdWN0ICgpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3JlIHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvbW9yZS9wcm9kdWN0cy8nK3RoaXMucHJvZHVjdHMubGVuZ3RoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW10uY29uY2F0KHRoaXMucHJvZHVjdHMscmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9yZV9idG4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVc2VyICgpIHtcbiAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcHJvZmlsZScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgICAgICAgICB0aGlzLmdldExvdmVzKHRoaXMudXNlci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TG92ZSAoaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9jcmVhdGUvbG92ZS8nK2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvdmUgPSByZXNwb25zZS5kYXRhLmxvdmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TG92ZXModGhpcy51c2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRMb3ZlcyAoaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9sb3Zlcy8nK2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvdmVzID0gcmVzcG9uc2UuZGF0YS5sb3ZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvdmVPck5vdCAoaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMubG92ZXMuZmluZCh4ID0+IHguUHJvZHVjdC5pZCA9PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdmYSBmYS1oZWFydCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnZmEgZmEtaGVhcnQtbyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Rmlyc3RJbWFnZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiAndGV4dC1hbGlnbjpyaWdodDtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvZnJvbnQvaW1nL2JnLTQuanBnXCIpJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTZWNvbmRJbWFnZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiAndGV4dC1hbGlnbjpyaWdodDtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvZnJvbnQvaW1nL2JnLTYuanBnXCIpJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRUb0NhcnQgKGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvY2FydC8nK2lkKS50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfYqtmF2Kog2KfZhNin2LbYp9mB2Kkg2KfZhNmKINin2YTYudix2KjYqSDYqNmG2KzYp9itJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhcnQtc2VjdGlvbiBzcGFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC10YWJsZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+2KfZhNi32YTYqNin2Ko8L2gzPiDZitmF2YPZhtmDINin2YTYqtmI2KfYtdmEINmF2LnZhtinINmE2KfZhNi62KfYoSDYt9mE2Kgg4oCmICjZhdi52YTZiNmF2KfYqiDYp9mE2KrZiNin2LXZhCDZhdmI2KzZiNiv2Kkg2YHZiiDYp9iz2YHZhCDYp9mE2YXZiNmC2LkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtdGFibGUtd2FycFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHJvZHVjdC10aFwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj7YsdmC2YUg2KfZhNi32YTYqDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidG90YWwtdGhcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+2KfZhNiz2LnYsSDYp9mE2YPZhNmKPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0b3RhbC10aFwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj7Yp9mE2K3Yp9mE2Kk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJvcmRlciBpbiBvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJwcm9kdWN0LXRoXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPnt7IG9yZGVyLmlkIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3RhbC10aFwiPnt7IG9yZGVyLnRvdGFsX3ByaWNlIH19INis2YbZitipINmF2LXYsdmKPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3RhbC10aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwib3JkZXIuc3RhdHVzID09IDFcIj57eyAn2KzYp9ix2Yog2KfZhNiq2KzZh9mK2LInIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwib3JkZXIuc3RhdHVzID09IDJcIj57eyAn2KrZhSDYqtis2YfZitiyINin2YTYt9mE2KgnIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwib3JkZXIuc3RhdHVzID09IDNcIj57eyAn2KrZhSDYp9mE2KfYs9iq2YTYp9mFJyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVycygpO1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiAge1xuICAgICAgICAgICAgJHJvdXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcmRlcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0T3JkZXJzKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvYXBpL29yZGVycycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDwhLS0gcHJvZHVjdCBzZWN0aW9uIC0tPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2R1Y3Qtc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImFcIiA6dG89XCInL2NhdGVnb3J5LycrdGhpcy5wcm9kdWN0LkRlcGFydG1lbnQuaWQrJy8nK3RoaXMucHJvZHVjdC5EZXBhcnRtZW50Lm5hbWVcIj4gJmx0OyZsdDsg2LHYrNmI2Lkg2KfZhNmKINin2YTZgtiz2YUgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcGljLXpvb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZHVjdC1iaWctaW1nXCIgOnNyYz1cIicvdXBsb2Fkcy9wcm9kdWN0cy8nK3RoaXMucHJvZHVjdC5waG90b1wiIHN0eWxlPVwid2lkdGg6IDU4N3B4O2hlaWdodDogNzAwcHhcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtdGh1bWJzXCIgdGFiaW5kZXg9XCIxXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuOyBvdXRsaW5lOiBub25lO1wiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC10aHVtYnMtdHJhY2tcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdCBhY3RpdmVcIiBkYXRhLWltZ2JpZ3VybD1cIi9pbWcvc2luZ2xlLXByb2R1Y3QvMS5qcGdcIj48aW1nIHNyYz1cIi9mcm9udC9pbWcvc2luZ2xlLXByb2R1Y3QvdGh1bWItMS5qcGdcIiBhbHQ9XCJcIj48L2Rpdj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdFwiIGRhdGEtaW1nYmlndXJsPVwiL2ltZy9zaW5nbGUtcHJvZHVjdC8yLmpwZ1wiPjxpbWcgc3JjPVwiL2Zyb250L2ltZy9zaW5nbGUtcHJvZHVjdC90aHVtYi0yLmpwZ1wiIGFsdD1cIlwiPjwvZGl2Pi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0XCIgZGF0YS1pbWdiaWd1cmw9XCIvaW1nL3NpbmdsZS1wcm9kdWN0LzMuanBnXCI+PGltZyBzcmM9XCIvZnJvbnQvaW1nL3NpbmdsZS1wcm9kdWN0L3RodW1iLTMuanBnXCIgYWx0PVwiXCI+PC9kaXY+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHRcIiBkYXRhLWltZ2JpZ3VybD1cIi9pbWcvc2luZ2xlLXByb2R1Y3QvNC5qcGdcIj48aW1nIHNyYz1cIi9mcm9udC9pbWcvc2luZ2xlLXByb2R1Y3QvdGh1bWItNC5qcGdcIiBhbHQ9XCJcIj48L2Rpdj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiBwcm9kdWN0LWRldGFpbHNcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicC10aXRsZVwiPnt7IHRoaXMucHJvZHVjdC50aXRsZSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIih0aGlzLnByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiYgdGhpcy5wcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKSAmJiB0aGlzLnByb2R1Y3QuZW5kX29mZmVyX2F0LmRhdGUgPj0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApXCI+e3sgdGhpcy5wcm9kdWN0LnByaWNlX29mZmVyIH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyB2LWVsc2U+e3sgdGhpcy5wcm9kdWN0LnByaWNlIH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInAtc3RvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDZhdiq2KfYrSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMucHJvZHVjdC5zdG9jayA+IDBcIj7Zhti52YU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPtmE2Kc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLW8gZmEtZmFkZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcmV2aWV3XCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj4zINin2YTYqtmC2YrZitmF2KfYqjwvYT4gfDxhIGhyZWY9XCJcIj7Yp9mE2YXYstmK2K88L2E+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdy1zaXplLWNob29zZVwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Yp9mE2KfYrdis2KfZhTwvcD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwic2l6ZSBpbiB0aGlzLnByb2R1Y3QuU2l6ZVwiIGNsYXNzPVwic2MtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNjXCIgaWQ9XCJ4cy1zaXplXCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInhzLXNpemVcIj57eyBzaXplLm5hbWUgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Yp9mE2YPZhdmK2Kk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByby1xdHlcIj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1YW50aXR5UHJvZHVjdFwiIG1pbj1cIjFcIiA6bWF4PVwidGhpcy5wcm9kdWN0LnN0b2NrXCIgdmFsdWU9XCIxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1pZj1cInVzZXIgIT09IG51bGxcIiBjbGFzcz1cInNpdGUtYnRuXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiYWRkVG9DYXJ0KHByb2R1Y3QuaWQpXCI+2KfYttmBINin2YTZiiDYp9mE2LnYsdio2Kk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtZWxzZSBjbGFzcz1cInNpdGUtYnRuXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiPtin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgY2xhc3M9XCJhY2NvcmRpb24tYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIiBjbGFzcz1cInBhbmVsLWxpbmsgYWN0aXZlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlMVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlMVwiPtmF2LnZhNmI2YXYp9iqINin2YTZhdmG2KrYrDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlMVwiIGNsYXNzPVwiY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgdi1odG1sPVwidGhpcy5wcm9kdWN0LmNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFuZWwtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UyXCI+2LfYsdmCINin2YTYr9mB2LkgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2UyXCIgY2xhc3M9XCJjb2xsYXBzZVwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZnJvbnQvaW1nL2NhcmRzLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmE2YTYo9iz2YEg2LrZitixINmF2KrYp9itINit2KfZhNmK2Kcg2KfZhNiv2YHYuSDYp9mE2KfZhNmD2KrYsdmI2YbZijwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7YstmI2LHZiNmG2Kcg2YHZiiDZhdi52LHYttmG2Kc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc2hhcmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj48aSBjbGFzcz1cImZhIGZhLWluc3RhZ3JhbVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxpIGNsYXNzPVwiZmEgZmEtcGludGVyZXN0XCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxpIGNsYXNzPVwiZmEgZmEteW91dHViZVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8IS0tIHByb2R1Y3Qgc2VjdGlvbiBlbmQgLS0+XG5cblxuICAgICAgICA8IS0tIFJFTEFURUQgUFJPRFVDVFMgc2VjdGlvbiAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0b3AtbGV0ZXN0LXByb2R1Y3Qtc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7Yp9mE2YXZhtiq2KzYp9iqINin2YTZhdix2KrYqNi32Kk8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXNsaWRlciBvd2wtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiIHYtZm9yPVwibGF0ZXN0X3Byb2R1Y3QgaW4gbGF0ZXN0X3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGktcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3Byb2R1Y3QvJysgbGF0ZXN0X3Byb2R1Y3QuaWQgKyAnLycgKyBsYXRlc3RfcHJvZHVjdC50aXRsZXxyZXBsYWNlXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cImhlaWdodDogMzAwcHhcIiB2LWlmPVwibGF0ZXN0X3Byb2R1Y3QucGhvdG8gIT09IG51bGxcIiA6c3JjPVwiJy91cGxvYWRzL3Byb2R1Y3RzLycrbGF0ZXN0X3Byb2R1Y3QucGhvdG9cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cImhlaWdodDogMzAwcHhcIiB2LWVsc2UgOnNyYz1cIicvdXBsb2Fkcy9wcm9kdWN0cy9kZWZhdWx0LmpwZydcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1pZj1cInVzZXIgIT09IG51bGxcIiBjbGFzcz1cImFkZC1jYXJkXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiYWRkVG9DYXJ0KGxhdGVzdF9wcm9kdWN0LmlkKVwiPjxpIGNsYXNzPVwiZmxhdGljb24tYmFnXCI+PC9pPjxzcGFuPtin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWVsc2UgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiIGNsYXNzPVwiYWRkLWNhcmRcIj48aSBjbGFzcz1cImZsYXRpY29uLWJhZ1wiPjwvaT48c3Bhbj7Yp9i22YEg2KfZhNmKINin2YTYudix2KjYqTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gc3RyYW5nZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWlmPVwidXNlciAhPT0gbnVsbFwiIHYtb246Y2xpY2sucHJldmVudD1cInNldExvdmUobGF0ZXN0X3Byb2R1Y3QuaWQpXCIgY2xhc3M9XCJ3aXNobGlzdC1idG5cIj48aSA6Y2xhc3M9XCJsb3ZlT3JOb3QobGF0ZXN0X3Byb2R1Y3QuaWQpXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB2LWVsc2UgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiIGNsYXNzPVwid2lzaGxpc3QtYnRuXCI+PGkgY2xhc3M9XCJmYSBmYS1oZWFydC1vXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgdi1pZj1cIihsYXRlc3RfcHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJiBsYXRlc3RfcHJvZHVjdC5zdGFydF9vZmZlcl9hdC5kYXRlIDw9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSkgJiYgbGF0ZXN0X3Byb2R1Y3QuZW5kX29mZmVyX2F0LmRhdGUgPj0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApXCI+e3sgbGF0ZXN0X3Byb2R1Y3QucHJpY2Vfb2ZmZXIgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiB2LWVsc2U+e3sgbGF0ZXN0X3Byb2R1Y3QucHJpY2UgfX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxhIDpocmVmPVwiJy9wcm9kdWN0LycrIGxhdGVzdF9wcm9kdWN0LmlkICsgJy8nICsgbGF0ZXN0X3Byb2R1Y3QudGl0bGV8cmVwbGFjZVwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCI+e3sgbGF0ZXN0X3Byb2R1Y3QudGl0bGUgfX08L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPCEtLSBSRUxBVEVEIFBST0RVQ1RTIHNlY3Rpb24gZW5kIC0tPlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xuICAgICAgICAgICAgICAgICAgICBcIkRlcGFydG1lbnRcIiA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0X29mZmVyX2F0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kX29mZmVyX2F0XCI6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbG92ZXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiAge1xuICAgICAgICAgICAgJHJvdXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRDYXRlZ29yeSAoKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJvZHVjdFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvYXBpL3Byb2R1Y3QvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdFswXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RfcHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuRmlyZS5sb2FkU2NyaXB0KFwiL2Zyb250L2pzL21haW4uanNcIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuRmlyZS5uZXh0VGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luIDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24tbGVmdC1hcnJvdy0xXCI+PC9pPicsICc8aSBjbGFzcz1cImZsYXRpY29uLXJpZ2h0LWFycm93LTFcIj48L2k+J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ4MCA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3NjggOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIwMCA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LXBpYy16b29tJykuem9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHZtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXIgKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcHJvZmlsZScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRMb3Zlcyh0aGlzLnVzZXIuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldExvdmUgKGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvY3JlYXRlL2xvdmUvJytpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlID0gcmVzcG9uc2UuZGF0YS5sb3ZlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldExvdmVzKHRoaXMudXNlci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TG92ZXMgKGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hcGkvbG92ZXMvJytpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlcyA9IHJlc3BvbnNlLmRhdGEubG92ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb3ZlT3JOb3QgKGlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmxvdmVzLmZpbmQoeCA9PiB4LlByb2R1Y3QuaWQgPT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZmEgZmEtaGVhcnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLWhlYXJ0LW8nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFRvQ2FydCAoaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2FwaS9jYXJ0LycraWQpLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9iq2YXYqiDYp9mE2KfYttin2YHYqSDYp9mE2Yog2KfZhNi52LHYqNipINio2YbYrNin2K0nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5jYXJ0ICE9PSBudWxsXG4gICAgPyBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJjYXJ0LXNlY3Rpb24gc3BhZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcnQtdGFibGVcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwi2K3ZgtmK2KjYqtmKXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJ0LXRhYmxlLXdhcnBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXJ0LlByb2R1Y3QsIGZ1bmN0aW9uKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGMtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctcmlnaHRcIjogXCIzMHB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlX29mZmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHByb2R1Y3QucHJpY2UpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlX29mZmVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3QucHJpY2Vfb2ZmZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdGFsLWNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4teHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVByb2R1Y3QocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY2FyZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIGJ0bi14bFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjFweFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9vcmRlcnNcIiwgdGFnOiBcImFcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIti32YTYqNin2KrZiiDYp9mE2LPYp9io2YLYqVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmNhcnQuUHJvZHVjdC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbmRPcmRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLYp9ix2LPZhCDYp9mE2LfZhNioINmI2KfYr9mB2Lkg2LnZhtivINin2YTYp9iz2KrZhNin2YVcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiBcImFsZXJ0KCfZhNinINmK2YjYrNivINmF2YbYqtis2KfYqiDZhNmE2LfZhNioJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItin2LHYs9mEINin2YTYt9mE2Kgg2YjYp9iv2YHYuSDYudmG2K8g2KfZhNin2LPYqtmE2KfZhVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLWJ0biBzYi1kYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhZzogXCJhXCIsIHRvOiBcIi9cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcItin2YPZhdmEINin2YTYqtiz2YjZglwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcnQtc2VjdGlvbiBzcGFkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNCBjYXJkLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhcmsgYnRuLXhsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL29yZGVyc1wiLCB0YWc6IFwiYVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi2LfZhNio2KfYqtmKINin2YTYs9in2KjZgtipXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s6IFwiYWxlcnQoJ9mE2Kcg2YrZiNis2K8g2YXZhtiq2KzYp9iqINmE2YTYt9mE2KgnKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi2KfYsdiz2YQg2KfZhNi32YTYqCDZiNin2K/Zgdi5INi52YbYryDYp9mE2KfYs9iq2YTYp9mFXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1idG4gc2ItZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWc6IFwiYVwiLCB0bzogXCIvXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLYp9mD2YXZhCDYp9mE2KrYs9mI2YJcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXRoXCIsIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLYp9mE2YXZhtiq2KxcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC10aFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLYp9mE2LPYudixINio2K/ZiNmGINi52LHZiNi2ICgg2LPZitiq2YUg2KfYrdiq2LPYp9ioINiz2LnYsSDYp9mE2LnYsdi2INin2LDYpyDZg9in2YYg2YXZiNis2YjYryApXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtdGhcIiB9LCBbX3ZtLl92KFwi2KfZhNi62KfYoSDYp9mE2LfZhNioXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC1jb3N0XCIgfSwgW1xuICAgICAgX2MoXCJoNlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIg2YTZhNin2LPZgSDZhNinINmK2YjYrNivINiv2YHYuSDYp9mE2YPYqtix2YjZhtmKINit2KrZiiDYp9mE2KfZhlwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiwgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbX3ZtLl92KFwi2KrZgdin2LXZitmEINin2YTYt9mE2KhcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGV0YWlsc1wiLFxuICAgICAgICAgICAgaWQ6IFwiZGV0YWlsc1wiLFxuICAgICAgICAgICAgcm93czogXCI4XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgXCLZitmD2KrYqCDZh9mG2Kcg2YPZhdmK2Kkg2YXYudmK2YbYqSDigKYg2YXYq9in2YQgOiDYp9ix2YrYryAyMCDZgti32LnYqSDZhdmGINin2YTZhdmG2KrYrCAoINit2YTYqSDYrNmK2LHYp9mG2YrYqiApINin2YTZhdmI2KzZiNivINmB2Yog2K3ZgtmK2KjYqtmKINmI2KfZhNmF2YbYqtisICgg2LfZgtmFINmD2KfYs9in2KogKSAzINmC2LfYuSDZiNio2KfZgtmKINin2YTZhdmG2KrYrNin2Kog2YLYt9i52Kkg2YjYp9it2K/YqVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvbW8tY29kZS1mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCLYp9iv2K7ZhCDZg9mI2K8g2K7YtdmFXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSB9LCBbX3ZtLl92KFwi2KrYo9mD2YrYr1wiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcnQtdGFibGVcIiwgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCLYrdmC2YrYqNiq2YpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC10YWJsZS13YXJwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItin2YTZhdmG2KrYrFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdGFsLXRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCLYp9mE2LPYudixINio2K/ZiNmGINi52LHZiNi2ICgg2LPZitiq2YUg2KfYrdiq2LPYp9ioINiz2LnYsSDYp9mE2LnYsdi2INin2LDYpyDZg9in2YYg2YXZiNis2YjYryApXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdGFsLXRoXCIgfSwgW192bS5fdihcItin2YTYutin2KEg2KfZhNi32YTYqFwiKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW19jKFwidHJcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtY29zdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIiDZhNmE2KfYs9mBINmE2Kcg2YrZiNis2K8g2K/Zgdi5INin2YTZg9iq2LHZiNmG2Yog2K3YqtmKINin2YTYp9mGXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLCBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCLYqtmB2KfYtdmK2YQg2KfZhNi32YTYqFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJkZXRhaWxzXCIsXG4gICAgICAgICAgICByb3dzOiBcIjhcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICBcItmK2YPYqtioINmH2YbYpyDZg9mF2YrYqSDZhdi52YrZhtipIOKApiDZhdir2KfZhCA6INin2LHZitivIDIwINmC2LfYudipINmF2YYg2KfZhNmF2YbYqtisICgg2K3ZhNipINis2YrYsdin2YbZitiqICkg2KfZhNmF2YjYrNmI2K8g2YHZiiDYrdmC2YrYqNiq2Yog2YjYp9mE2YXZhtiq2KwgKCDYt9mC2YUg2YPYp9iz2KfYqiApIDMg2YLYt9i5INmI2KjYp9mC2Yog2KfZhNmF2YbYqtis2KfYqiDZgti32LnYqSDZiNin2K3Yr9ipXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJwcm9tby1jb2RlLWZvcm1cIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItin2K/YrtmEINmD2YjYryDYrti12YVcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9IH0sIFtfdm0uX3YoXCLYqtij2YPZitivXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNhdGVnb3J5LXNlY3Rpb24gc3BhZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIG9yZGVyLTIgb3JkZXItbGctMVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLXdpZGdldFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctdGl0bGVcIiB9LCBbX3ZtLl92KFwi2KfZgtiz2KfZhSDZhdi02KfYqNmH2YdcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXRlZ29yeS1tZW51XCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogX3ZtLl9mKFwicmVwbGFjZVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2F0ZWdvcnkvXCIgKyBjYXRlZ29yeS5pZCArIFwiL1wiICsgY2F0ZWdvcnkubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci13aWRnZXQgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctdGl0bGVcIiB9LCBbX3ZtLl92KFwi2YHZhNiq2LHYqSDYqFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmljZS1yYW5nZS13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwi2KfZhNiz2LnYsVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuZ2Utc2xpZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByaWNlLWlucHV0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF4X2Ftb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLYp9mC2LXZilwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TWluUHJpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1pbl9hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi2YrYqNiv2KMg2YXZhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TWluUHJpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLXdpZGdldCBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJmdy10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcItin2YTYp9mE2YjYp9mGINin2YTZhdmI2KzZiNiv2KlcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnctY29sb3ItY2hvb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29sb3JzLCBmdW5jdGlvbihjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjcy1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb2xvci5uYW1lICsgXCItY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmNvbG9yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IGNvbG9yLm5hbWUgKyBcIi1jb2xvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci13aWRnZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ3LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi2KfZhNi52YTYp9mF2Kkg2KfZhNiq2KzYp9ix2YrYqVwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhdGVnb3J5LW1lbnVcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50cmFkZW1hcmtzLCBmdW5jdGlvbih0cmFkZW1hcmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0cmFkZW1hcmsubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKCBcIiArIF92bS5fcyhfdm0ucHJvZHVjdHMubGVuZ3RoKSArIFwiIClcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOSAgb3JkZXItMSBvcmRlci1sZy0yIG1iLTUgbWItbGctMFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5wcm9kdWN0cy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJoMlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcItmE2YTYp9iz2YEg2YTYpyDYqtmI2KzYryDZhdmG2KrYrNin2Kog2YHZiiDZh9iw2Kcg2KfZhNmC2LPZhSDYrdin2YTZitinXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jYXRlZ29yeS5uYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJsaWdodGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9kdWN0cy5sZW5ndGgpICsgXCIg2YHZiiDYp9mE2LXZgdit2KlcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBpLXBpY1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdGFydF9vZmZlcl9hdC5kYXRlIDw9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZW5kX29mZmVyX2F0LmRhdGUgPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFnLXNhbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLYudix2LYg2K7Yp9i1XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IF92bS5fZihcInJlcGxhY2VcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Byb2R1Y3QvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5waG90byAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi91cGxvYWRzL3Byb2R1Y3RzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5waG90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXBsb2Fkcy9wcm9kdWN0cy9kZWZhdWx0LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGktbGlua3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZGQtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRUb0NhcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsYXRpY29uLWJhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjZXhhbXBsZU1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxhdGljb24tYmFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi2KfYttmBINin2YTZiiDYp9mE2LnYsdio2KlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2lzaGxpc3QtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldExvdmUocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5sb3ZlT3JOb3QocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aXNobGlzdC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjZXhhbXBsZU1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwaS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaDZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZV9vZmZlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IF92bS5fZihcInJlcGxhY2VcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcHJvZHVjdC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocHJvZHVjdC50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHctMTAwIHB0LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1idG4gc2ItbGluZSBzYi1kYXJrIG1vcmVfYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldE1vcmVQcm9kdWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIti52LHYtiDYp9mE2YXYstmK2K9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItd2lkZ2V0IG1iLTBcIiB9LCBbXG4gICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctdGl0bGVcIiB9LCBbX3ZtLl92KFwi2KfZhNin2K3YrNin2YUg2KfZhNmF2YjYrNmI2K/YqVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnctc2l6ZS1jaG9vc2VcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2MtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiLCBuYW1lOiBcInNjXCIsIGlkOiBcInhzLXNpemVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ4cy1zaXplXCIgfSB9LCBbX3ZtLl92KFwiWFNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzYy1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IFwic2NcIiwgaWQ6IFwicy1zaXplXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicy1zaXplXCIgfSB9LCBbX3ZtLl92KFwiU1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNjLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IFwic2NcIiwgaWQ6IFwibS1zaXplXCIsIGNoZWNrZWQ6IFwiXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtLXNpemVcIiB9IH0sIFtfdm0uX3YoXCJNXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2MtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiLCBuYW1lOiBcInNjXCIsIGlkOiBcImwtc2l6ZVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImwtc2l6ZVwiIH0gfSwgW192bS5fdihcIkxcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzYy1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IFwic2NcIiwgaWQ6IFwieGwtc2l6ZVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInhsLXNpemVcIiB9IH0sIFtfdm0uX3YoXCJYTFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNjLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiwgbmFtZTogXCJzY1wiLCBpZDogXCJ4eGwtc2l6ZVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInh4bC1zaXplXCIgfSB9LCBbX3ZtLl92KFwiWFhMXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJoZXJvLXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlcm8tc2xpZGVyIG93bC1jYXJvdXNlbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhzLWl0ZW0gc2V0LWJnXCIsIHN0eWxlOiBfdm0uZ2V0Rmlyc3RJbWFnZSgpIH0sXG4gICAgICAgICAgW192bS5fbSgwKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhzLWl0ZW0gc2V0LWJnXCIsIHN0eWxlOiBfdm0uZ2V0U2Vjb25kSW1hZ2UoKSB9LFxuICAgICAgICAgIFtfdm0uX20oMSldXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgyKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDMpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWxldGVzdC1wcm9kdWN0LXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1zbGlkZXIgb3dsLWNhcm91c2VsXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmxhdGVzdF9wcm9kdWN0cywgZnVuY3Rpb24obGF0ZXN0X3Byb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBpLXBpY1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBfdm0uX2YoXCJyZXBsYWNlXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9wcm9kdWN0L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdC5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0X3Byb2R1Y3QucGhvdG8gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvdXBsb2Fkcy9wcm9kdWN0cy9cIiArIGxhdGVzdF9wcm9kdWN0LnBob3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi91cGxvYWRzL3Byb2R1Y3RzL2RlZmF1bHQuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwaS1saW5rc1wiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGktdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdC5wcmljZV9vZmZlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgJiZcbiAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PVxuICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImg2XCIsIFtfdm0uX3YoX3ZtLl9zKGxhdGVzdF9wcm9kdWN0LnByaWNlX29mZmVyKSldKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImg2XCIsIFtfdm0uX3YoX3ZtLl9zKGxhdGVzdF9wcm9kdWN0LnByaWNlKSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogX3ZtLl9mKFwicmVwbGFjZVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9wcm9kdWN0L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGxhdGVzdF9wcm9kdWN0LnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWZpbHRlci1zZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgY29sLXNtLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGktcGljXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBfdm0uX2YoXCJyZXBsYWNlXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Byb2R1Y3QvXCIgKyBwcm9kdWN0LmlkICsgXCIvXCIgKyBwcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucGhvdG8gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi91cGxvYWRzL3Byb2R1Y3RzL1wiICsgcHJvZHVjdC5waG90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi91cGxvYWRzL3Byb2R1Y3RzL2RlZmF1bHQuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBpLWxpbmtzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRUb0NhcnQocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhdGljb24tYmFnXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNleGFtcGxlTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhdGljb24tYmFnXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aXNobGlzdC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldExvdmUocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IGNsYXNzOiBfdm0ubG92ZU9yTm90KHByb2R1Y3QuaWQpIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndpc2hsaXN0LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2V4YW1wbGVNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGVhcnQtb1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBpLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlX29mZmVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSAmJlxuICAgICAgICAgICAgICAgICAgcHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PVxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNlwiLCBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlX29mZmVyKSldKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBfdm0uX2YoXCJyZXBsYWNlXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcHJvZHVjdC9cIiArIHByb2R1Y3QuaWQgKyBcIi9cIiArIHByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHB0LTVcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLWJ0biBzYi1saW5lIHNiLWRhcmsgbW9yZV9idG5cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlUHJvZHVjdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIti52LHYtiDYp9mE2YXYstmK2K9cIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhbm5lci1zZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFubmVyIHNldC1iZ1wiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBcIi9mcm9udC9pbWcvYmFubmVyLWJnLmpwZ1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFnLW5ld1wiIH0sIFtfdm0uX3YoXCLYrNiv2YrYr1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi2LnYsdmI2LYg2KzYr9mK2K/YqVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItin2YjYp9mG2Yog2KfZhNmF2LfYqNiuXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1idG5cIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItiq2LPZiNmCINin2YTYp9mGXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBmbGV4LXJvdy1yZXZlcnNlXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14bC02IGNvbC1sZy03IHRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLYp9mE2KfYrdiv2Ksg2YXZiNis2YjYryDYr9in2KbZhdinXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLYrNmF2YrYuSDZhdmG2KrYrNin2Kog2KfZhNi32KjYrlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLYqti12YHYrSDYrNmF2YrYuSDYp9mE2YXZhtiq2KzYp9iqINin2YTYrtin2LXYqSDYqNij2K/ZiNin2Kog2KfZhNi32YfZiiDZhdmGINin2YTZhdmG2LLZhCDYqNiv2KfZitipINmF2YYg2KfZiNin2YbZiiDYp9mE2LfYudin2YUg2K3YqtmKINin2LfYqNin2YIg2KfZhNiq2YLYr9mK2YUg2YjYp9mE2KfZg9mI2KfYqCDigKYg2K7YtdmFINmK2LXZhCDYp9mE2YogNTAg2YHZiiDYp9mE2YXYp9im2Kkg4oCmINin2LPYudin2LHZhtinINmE2Kcg2KrZgtio2YQg2KfZhNmF2YbYp9mB2LPYqVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLWJ0biBzYi1saW5lXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi2KfZg9iq2LTZgSDYp9mE2YXYstmK2K9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtYnRuIHNiLXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi2KfYttmBINin2YTZiiDYp9mE2LnYsdio2KlcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvZmZlci1jYXJkIHRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi2YrYqNiv2KMg2YXZhlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCIkMjBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLYqtiz2YjZgiDYp9mE2KfZhlwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZmxleC1yb3ctcmV2ZXJzZVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteGwtNiBjb2wtbGctNyB0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi2KfYs9i52KfYsSDYrtin2LXYqVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwi2YjZhNinINmG2YLYqNmEINin2YTZhdmG2KfZgdiz2KlcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi2KrYtdmB2K0g2KzZhdmK2Lkg2KfZhNmF2YbYqtis2KfYqiDYp9mE2K7Yp9i12Kkg2KjYo9iv2YjYp9iqINin2YTYt9mH2Yog2YXZhiDYp9mE2YXZhtiy2YQg2KjYr9in2YrYqSDZhdmGINin2YjYp9mG2Yog2KfZhNi32LnYp9mFINit2KrZiiDYp9i32KjYp9mCINin2YTYqtmC2K/ZitmFINmI2KfZhNin2YPZiNin2Kgg4oCmINiu2LXZhSDZiti12YQg2KfZhNmKIDUwINmB2Yog2KfZhNmF2KfYptipIOKApiDYp9iz2LnYp9ix2YbYpyDZhNinINiq2YLYqNmEINin2YTZhdmG2KfZgdiz2KlcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1idG4gc2ItbGluZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItin2YHYttmEINmF2YbYqtin2KzYqtmG2KdcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtYnRuIHNiLXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi2KfYttmBINin2YTZiiDYp9mE2LnYsdio2KlcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvZmZlci1jYXJkIHRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi2KrYqNiv2KMg2YXZhlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCIkMjlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLYqtiz2YjZgiDYp9mE2KfZhlwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbGlkZS1udW0taG9sZGVyXCIsIGF0dHJzOiB7IGlkOiBcInNuaC0xXCIgfSB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImZlYXR1cmVzLXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBwLTAgZmVhdHVyZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmVhdHVyZS1pbm5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmZWF0dXJlLWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiZnJvbnQvaW1nL2ljb25zLzEucG5nXCIsIGFsdDogXCIjXCIgfSB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwi2YjYs9in2KbZhCDYr9mB2Lkg2LPZh9mE2KlcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgcC0wIGZlYXR1cmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZlYXR1cmUtaW5uZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmVhdHVyZS1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImZyb250L2ltZy9pY29ucy8yLnBuZ1wiLCBhbHQ6IFwiI1wiIH0gfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItmF2YbYqtis2KfYqiDYsdin2KbYudipXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IHAtMCBmZWF0dXJlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmZWF0dXJlLWlubmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZlYXR1cmUtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJmcm9udC9pbWcvaWNvbnMvMy5wbmdcIiwgYWx0OiBcIiNcIiB9IH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLYqtmI2LXZitmEINmF2KzYp9mG2Yog2YjYs9ix2YrYuVwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItin2K3Yr9irINin2YTZhdmG2KrYrNin2KpcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItiq2LXZgditINin2YHYttmEINin2YTZhdmG2KrYrNin2Kog2YjYp9mD2KvYsdmH2Kcg2YXYqNmK2LnYp1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcnQtc2VjdGlvbiBzcGFkXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FydC10YWJsZVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcItin2YTYt9mE2KjYp9iqXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiDZitmF2YPZhtmDINin2YTYqtmI2KfYtdmEINmF2LnZhtinINmE2KfZhNi62KfYoSDYt9mE2Kgg4oCmICjZhdi52YTZiNmF2KfYqiDYp9mE2KrZiNin2LXZhCDZhdmI2KzZiNiv2Kkg2YHZiiDYp9iz2YHZhCDYp9mE2YXZiNmC2LkpXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcnQtdGFibGUtd2FycFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm9yZGVycywgZnVuY3Rpb24ob3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC10aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhvcmRlci5pZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mob3JkZXIudG90YWxfcHJpY2UpICsgXCIg2KzZhtmK2Kkg2YXYtdix2YpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC10aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3RhdHVzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhcItis2KfYsdmKINin2YTYqtis2YfZitiyXCIpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3RhdHVzID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhcItiq2YUg2KrYrNmH2YrYsiDYp9mE2LfZhNioXCIpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuc3RhdHVzID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhcItiq2YUg2KfZhNin2LPYqtmE2KfZhVwiKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtdGhcIiwgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcItix2YLZhSDYp9mE2LfZhNioXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC10aFwiLCBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwi2KfZhNiz2LnYsSDYp9mE2YPZhNmKXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3RhbC10aFwiLCBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwi2KfZhNit2KfZhNipXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1zZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWNrLWxpbmtcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIixcbiAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICBcIi9jYXRlZ29yeS9cIiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5EZXBhcnRtZW50LmlkICtcbiAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuRGVwYXJ0bWVudC5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIDw8INix2KzZiNi5INin2YTZiiDYp9mE2YLYs9mFIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1waWMtem9vbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtYmlnLWltZ1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjU4N3B4XCIsIGhlaWdodDogXCI3MDBweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogXCIvdXBsb2Fkcy9wcm9kdWN0cy9cIiArIHRoaXMucHJvZHVjdC5waG90byxcbiAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC10aHVtYnNcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIG91dGxpbmU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjFcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctNiBwcm9kdWN0LWRldGFpbHNcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwicC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoaXMucHJvZHVjdC50aXRsZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QucHJpY2Vfb2ZmZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnN0YXJ0X29mZmVyX2F0LmRhdGUgPD1cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5lbmRfb2ZmZXJfYXQuZGF0ZSA+PVxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICAgICAgICAgICAgICA/IF9jKFwiaDNcIiwgW192bS5fdihfdm0uX3ModGhpcy5wcm9kdWN0LnByaWNlX29mZmVyKSldKVxuICAgICAgICAgICAgICAgIDogX2MoXCJoM1wiLCBbX3ZtLl92KF92bS5fcyh0aGlzLnByb2R1Y3QucHJpY2UpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwicC1zdG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDZhdiq2KfYrSA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Quc3RvY2sgPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi2YbYudmFXCIpXSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLZhNinXCIpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLXJldmlld1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnctc2l6ZS1jaG9vc2VcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbCh0aGlzLnByb2R1Y3QuU2l6ZSwgZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2MtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInhzLXNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInhzLXNpemVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNpemUubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJxdWFudGl0eVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcItin2YTZg9mF2YrYqVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm8tcXR5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicXVhbnRpdHlQcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IHRoaXMucHJvZHVjdC5zdG9jayxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnVzZXIgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFRvQ2FydChfdm0ucHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLYp9i22YEg2KfZhNmKINin2YTYudix2KjYqVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2V4YW1wbGVNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi2KfYttmBINin2YTZiiDYp9mE2LnYsdio2KlcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uLWFyZWFcIiwgYXR0cnM6IHsgaWQ6IFwiYWNjb3JkaW9uXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjb2xsYXBzZTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJoZWFkaW5nT25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wYXJlbnRcIjogXCIjYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyh0aGlzLnByb2R1Y3QuY29udGVudCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWxldGVzdC1wcm9kdWN0LXNlY3Rpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1zbGlkZXIgb3dsLWNhcm91c2VsXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmxhdGVzdF9wcm9kdWN0cywgZnVuY3Rpb24obGF0ZXN0X3Byb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwaS1waWNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5fZihcInJlcGxhY2VcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9wcm9kdWN0L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0X3Byb2R1Y3QuaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdC5waG90byAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvdXBsb2Fkcy9wcm9kdWN0cy9cIiArIGxhdGVzdF9wcm9kdWN0LnBob3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvdXBsb2Fkcy9wcm9kdWN0cy9kZWZhdWx0LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBpLWxpbmtzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZGQtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFRvQ2FydChsYXRlc3RfcHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZsYXRpY29uLWJhZ1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2V4YW1wbGVNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZsYXRpY29uLWJhZ1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItin2LbZgSDYp9mE2Yog2KfZhNi52LHYqNipXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2lzaGxpc3QtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0TG92ZShsYXRlc3RfcHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5sb3ZlT3JOb3QobGF0ZXN0X3Byb2R1Y3QuaWQpIH0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aXNobGlzdC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI2V4YW1wbGVNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGVhcnQtb1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwaS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LnByaWNlX29mZmVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgbGF0ZXN0X3Byb2R1Y3Quc3RhcnRfb2ZmZXJfYXQuZGF0ZSA8PVxuICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSAmJlxuICAgICAgICAgICAgICAgIGxhdGVzdF9wcm9kdWN0LmVuZF9vZmZlcl9hdC5kYXRlID49XG4gICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MobGF0ZXN0X3Byb2R1Y3QucHJpY2Vfb2ZmZXIpKV0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MobGF0ZXN0X3Byb2R1Y3QucHJpY2UpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLl9mKFwicmVwbGFjZVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcHJvZHVjdC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0X3Byb2R1Y3QuaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RfcHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobGF0ZXN0X3Byb2R1Y3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC1yYXRpbmdcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyLW9cIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyLW9cIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyLW9cIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyLW9cIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyLW8gZmEtZmFkZVwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkZXJcIiwgYXR0cnM6IHsgaWQ6IFwiaGVhZGluZ09uZVwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjY29sbGFwc2UxXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiY29sbGFwc2UxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLZhdi52YTZiNmF2KfYqiDYp9mE2YXZhtiq2KxcIildXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFuZWxcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRlclwiLCBhdHRyczogeyBpZDogXCJoZWFkaW5nVHdvXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtbGlua1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjY29sbGFwc2UyXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImNvbGxhcHNlMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi2LfYsdmCINin2YTYr9mB2LkgXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImNvbGxhcHNlMlwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJoZWFkaW5nVHdvXCIsXG4gICAgICAgICAgICBcImRhdGEtcGFyZW50XCI6IFwiI2FjY29yZGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2Zyb250L2ltZy9jYXJkcy5wbmdcIiwgYWx0OiBcIlwiIH0gfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLZhNmE2KPYs9mBINi62YrYsSDZhdiq2KfYrSDYrdin2YTZitinINin2YTYr9mB2Lkg2KfZhNin2YTZg9iq2LHZiNmG2YpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcItiy2YjYsdmI2YbYpyDZgdmKINmF2LnYsdi22YbYp1wiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic29jaWFsLXNoYXJpbmdcIiB9LCBbXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1pbnN0YWdyYW1cIiB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGludGVyZXN0XCIgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZhY2Vib29rXCIgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXR3aXR0ZXJcIiB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEteW91dHViZVwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItin2YTZhdmG2KrYrNin2Kog2KfZhNmF2LHYqtio2LfYqVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9