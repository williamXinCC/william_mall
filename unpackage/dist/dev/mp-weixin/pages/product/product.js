(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/product"],{

/***/ 450:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/main.js?{"page":"pages%2Fproduct%2Fproduct"} ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _product = _interopRequireDefault(__webpack_require__(/*! ./pages/product/product.vue */ 451));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_product.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 451:
/*!***************************************************************************************************!*\
  !*** C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=3c71abd6&scoped=true& */ 452);
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ 454);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&id=3c71abd6&scoped=true&lang=scss& */ 456);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c71abd6",
  null,
  false,
  _product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 452:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=template&id=3c71abd6&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=template&id=3c71abd6&scoped=true& */ 453);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_template_id_3c71abd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 453:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=template&id=3c71abd6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-tag": function() {
    return __webpack_require__.e(/*! import() | components/uni-tag/uni-tag */ "components/uni-tag/uni-tag").then(__webpack_require__.bind(null, /*! @/components/uni-tag/uni-tag.vue */ 701))
  },
  "rf-rate": function() {
    return __webpack_require__.e(/*! import() | components/rf-rate/rf-rate */ "components/rf-rate/rf-rate").then(__webpack_require__.bind(null, /*! @/components/rf-rate/rf-rate.vue */ 708))
  },
  "rf-badge": function() {
    return __webpack_require__.e(/*! import() | components/rf-badge/rf-badge */ "components/rf-badge/rf-badge").then(__webpack_require__.bind(null, /*! @/components/rf-badge/rf-badge.vue */ 644))
  },
  "rf-loading": function() {
    return Promise.all(/*! import() | components/rf-loading/rf-loading */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/rf-loading/rf-loading")]).then(__webpack_require__.bind(null, /*! @/components/rf-loading/rf-loading.vue */ 585))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = parseFloat(_vm.productDetail.marketSell)
  var m1 = parseFloat(_vm.productDetail.sell)
  var m2 = parseFloat(_vm.productDetail.marketSell)
  var m3 = parseFloat(_vm.productDetail.sell)

  var f0 = _vm._f("discountFilter")(
    (_vm.currentSkuPrice || _vm.productDetail.sell) /
      _vm.productDetail.marketSell
  )

  var m4 = parseInt(_vm.productDetail.residue, 10)
  var m5 = parseInt(_vm.currentStock || _vm.productDetail.residue, 10)

  var l0 = _vm.__map(_vm.specList, function(item, index) {
    var m6 = parseInt(item.show_type)
    var m7 = parseInt(item.show_type)
    var m8 = parseInt(item.show_type)
    var m9 = parseInt(item.show_type)
    return {
      $orig: _vm.__get_orig(item),
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9
    }
  })

  var m10 = parseInt(_vm.currentStock || _vm.productDetail.residue, 10)

  var l1 = _vm.__map(_vm.productDetail.canReceiveCoupon, function(item, index) {
    var m11 = parseInt(item.range_type, 10)

    var f1 = _vm._f("time")(item.start_time)

    var f2 = _vm._f("time")(item.end_time)

    var m12 = parseInt(item.range_type, 10)
    var m13 = parseInt(item.max_fetch, 10)
    return {
      $orig: _vm.__get_orig(item),
      m11: m11,
      f1: f1,
      f2: f2,
      m12: m12,
      m13: m13
    }
  })

  var m14 = parseInt(_vm.productDetail.maxBuy, 10)

  var f3 = _vm._f("pointExchangeTypeFilter")(_vm.productDetail.exchangeType)

  var m15 = parseInt(_vm.productDetail.givePoint, 10)

  var f4 = _vm._f("integralGiveTypeFilter")(
    _vm.productDetail.integral_give_type
  )

  var m16 = parseInt(_vm.productDetail.givePoint, 10)

  var f5 = _vm._f("givePointFilter")(_vm.productDetail)

  var f6 = _vm._f("formatRichText")(_vm.productDetail.detail)

  var m17 = parseInt(this.currentStock || this.productDetail.residue, 10)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        f0: f0,
        m4: m4,
        m5: m5,
        l0: l0,
        m10: m10,
        l1: l1,
        m14: m14,
        f3: f3,
        m15: m15,
        f4: f4,
        m16: m16,
        f5: f5,
        f6: f6,
        m17: m17
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 454:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=script&lang=js& */ 455);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 455:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 12));


































































































































































































































































































































































var _product = __webpack_require__(/*! @/api/product */ 192);

var _basic = __webpack_require__(/*! @/api/basic */ 191);
var _moment = _interopRequireDefault(__webpack_require__(/*! @/common/moment */ 207));
var _userInfo = __webpack_require__(/*! @/api/userInfo */ 248);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o) {if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var rfNumberBox = function rfNumberBox() {__webpack_require__.e(/*! require.ensure | components/rf-number-box/index */ "components/rf-number-box/index").then((function () {return resolve(__webpack_require__(/*! @/components/rf-number-box */ 715));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfRate = function rfRate() {__webpack_require__.e(/*! require.ensure | components/rf-rate/rf-rate */ "components/rf-rate/rf-rate").then((function () {return resolve(__webpack_require__(/*! @/components/rf-rate/rf-rate */ 708));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfBadge = function rfBadge() {__webpack_require__.e(/*! require.ensure | components/rf-badge/rf-badge */ "components/rf-badge/rf-badge").then((function () {return resolve(__webpack_require__(/*! @/components/rf-badge/rf-badge */ 644));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniTag = function uniTag() {__webpack_require__.e(/*! require.ensure | components/uni-tag/uni-tag */ "components/uni-tag/uni-tag").then((function () {return resolve(__webpack_require__(/*! @/components/uni-tag/uni-tag */ 701));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfNoData = function rfNoData() {Promise.all(/*! require.ensure | components/rf-no-data/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/rf-no-data/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/rf-no-data */ 722));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfItemPopup = function rfItemPopup() {__webpack_require__.e(/*! require.ensure | components/rf-item-popup/index */ "components/rf-item-popup/index").then((function () {return resolve(__webpack_require__(/*! @/components/rf-item-popup */ 729));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





{
  components: {
    rfItemPopup: rfItemPopup,
    rfBadge: rfBadge,
    rfRate: rfRate,
    rfNumberBox: rfNumberBox,
    uniTag: uniTag,
    rfNoData: rfNoData },

  filters: {
    /**
             * 处理富文本里的图片宽度自适应
             * 1.去掉img标签里的style、width、height属性
             * 2.img标签添加style属性：max-width:100%;height:auto
             * 3.修改所有style里的width属性为max-width:100%
             * 4.去掉<br/>标签
             * @param html
             * @returns {void|string|*}
             */
    formatRichText: function formatRichText(html) {//控制小程序中图片大小
      if (html) {
        var newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
          match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
          match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
          match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
          return match;
        });
        newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
          match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
          return match;
        });
        newContent = newContent.replace(/<br[^>]*\/>/gi, '');
        newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
        return newContent;
      } else {
        return '暂无商品详情';
      }
    },
    time: function time(val) {
      return (0, _moment.default)(val * 1000).format('YYYY-MM-DD HH:mm');
    },
    discountFilter: function discountFilter(val) {
      return (val * 10).toFixed(1);
    },
    pointExchangeTypeFilter: function pointExchangeTypeFilter(val) {
      var type = ['', '非积分兑换', '积分加现金', '积分兑换或直接购买', '只支持积分兑换'];
      return type[parseInt(val, 10)];
    },
    integralGiveTypeFilter: function integralGiveTypeFilter(val) {
      var type = ['固定积分', '百分比'];
      return type[parseInt(val, 10)];
    },
    givePointFilter: function givePointFilter(val) {
      return parseInt(val.integral_give_type, 10) === 1 ?
      Math.round(parseInt(val.give_point, 10) / 100 * parseInt(val.minSkuPrice, 10)) :
      parseInt(val.give_point, 10);
    } },

  data: function data() {
    return {
      serviceClass: 'none', //服务弹窗css类，控制开关动画
      ladderPreferentialClass: 'none', //服务弹窗css类，控制开关动画
      attributeValueClass: 'none', //scss类，控制开关动画
      specClass: 'none',
      couponClass: 'none',
      cartType: null,
      maskState: 0, //优惠券面板显示状态
      couponList: [],
      productDetail: {},
      attributeList: [],
      styleObject: {},
      showTypeImage: null,
      specSelected: [],
      favorite: false,
      shareList: [],
      currentStock: null,
      currentSkuPrice: null,
      specList: [],
      specChildList: [],
      cartCount: 1,
      product_id: null,
      evaluateList: [],
      hasLogin: null,
      cartNum: null,
      loading: true,
      detailBannerImgs: [], // 轮播图
      commentInfo: [], // 商品评价
      productCommentCounts: [], // 评价总数
      serviceTags: [], // 商品承诺级服务
      errorInfo: '',
      headImg: this.$mAssetsPath.headImg,
      isPointExchange: false };

  },
  computed: {
    buyBtnDisabled: function buyBtnDisabled() {
      return parseInt(this.currentStock || this.productDetail.residue, 10) === 0;
    },
    addCartBtnDisabled: function addCartBtnDisabled() {
      return this.productDetail.point_exchange_type == 2 ||
      this.productDetail.point_exchange_type == 4 ||
      (this.currentStock || this.productDetail.residue) == 0 ||
      this.productDetail.is_virtual == 1;
    } },

  onLoad: function onLoad(options) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this.initData(options.id);
              //规格 默认选中第一条
              _this.specList.forEach(function (item) {var _iterator = _createForOfIteratorHelper(
                _this.specChildList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var cItem = _step.value;
                    if (cItem.pid === item.id) {
                      _this.$set(cItem, 'selected', true);
                      _this.specSelected.push(cItem);
                      break; //forEach不能使用break
                    }
                  }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
              });
              _this.product_id = options.id;case 3:case "end":return _context.stop();}}}, _callee);}))();
  },
  onShareAppMessage: function onShareAppMessage() {var _this2 = this;

    this.$http.post("".concat(_basic.transmitCreate), {
      topic_type: 'product',
      topic_id: this.product_id }).
    then(function () {
      return {
        title: _this2.productDetail.name,
        path: '/pages/product/product?id=' + _this2.product_id };

    });







  },
  methods: {
    navTo: function navTo(route) {
      if (!this.hasLogin) {
        this.$mHelper.backToLogin();
      } else {
        this.$mRouter.push({ route: route });
      }
    },
    // 弹窗
    showPopupService: function showPopupService(type, list) {
      if (list.length === 0) return;
      this[type] = 'show';
    },
    shareToH5: function shareToH5() {
      this.$mHelper.toast('请复制连接进行分享');
    },
    //关闭服务弹窗
    hideService: function hideService() {
      this.specClass = 'none';
      this.couponClass = 'none';
      this.serviceClass = 'none';
      this.ladderPreferentialClass = 'none';
      this.attributeValueClass = 'none';
    },
    // 获取优惠券
    getCoupon: function getCoupon(item) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (
                _this3.hasLogin) {_context2.next = 4;break;}
                _this3.maskState = 0;
                _this3.$mHelper.backToLogin();return _context2.abrupt("return");case 4:_context2.next = 6;return (


                  _this3.$http.post("".concat(_userInfo.couponReceive), {
                    id: item.id }).
                  then(function () {
                    _this3.$mHelper.toast('领取成功');
                    _this3.maskState = 0;
                  }).catch(function () {
                    _this3.maskState = 0;
                  }));case 6:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    // 跳转至评价列表
    toEvaluateList: function toEvaluateList() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                console.log('跳去列表 ================');if (!(
                !_this4.commentInfo || _this4.commentInfo.size == 0)) {_context3.next = 3;break;}return _context3.abrupt("return");case 3:_context3.next = 5;return (
                  _this4.$http.post("".concat(_product.productCommentCounts), { keyName: _this4.productDetail.id }).then(function (r) {
                    console.log(r);
                    _this4.productCommentCounts = r.data;
                  }));case 5:
                // this.$mRouter.push({route: `/pages/order/evaluation/list?comment_num=${this.commentCount}&evaluateStat=${JSON.stringify(this.productDetail.evaluateStat)}`});
                _this4.$mRouter.push({ route: "/pages/order/evaluation/list?goodsId=".concat(_this4.productDetail.id, "&productCommentCounts=").concat(JSON.stringify(_this4.productCommentCounts)) });case 6:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    numberChange: function numberChange(data) {
      this.cartCount = data.number;
    },
    // 数据初始化
    initData: function initData(id) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                _this5.hasLogin = _this5.$mStore.getters.hasLogin;
                _this5.cartNum = uni.getStorageSync('cartNum');
                _this5.productDetail.id = id;_context4.next = 5;return (
                  _this5.getProductDetail(id));case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    // 获取产品详情
    getProductDetail: function getProductDetail(id) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                  _this6.$http.post("".concat(_product.productDetail), { keyName:
                    id }).
                  then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(r) {var skuStr;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                              console.log(r.data);
                              console.log('评价', r.data.commentInfo);
                              _this6.loading = false;
                              _this6.productDetail = r.data.williamGoods;
                              _this6.serviceTags = r.data.williamGoods.serviceTags.split("-");
                              _this6.detailBannerImgs = _this6.productDetail.detailBannerImgs.split(','); // 详情轮播图
                              _this6.commentInfo = r.data.evaluateList; // 商品评价
                              _this6.commentCount = r.data.evaluateTotalCount; // 评价总数
                              _this6.attributeList = r.data.goodsAttributeList; // 商品参数
                              _context5.next = 11;return r.data.evaluateList;case 11:_this6.evaluateList = _context5.sent;
                              _this6.favorite = r.data.alreadyCollect == 1 ? true : false;
                              _this6.specList = _this6.productDetail.base_attribute_format;
                              _this6.specList.forEach(function (item) {
                                _this6.specChildList = [].concat(_toConsumableArray(_this6.specChildList), _toConsumableArray(item.value));
                              });
                              /**
                                   * 修复选择规格存储错误
                                   * 将这几行代码替换即可
                                   * 选择的规格存放在specSelected中
                                   */
                              _this6.specSelected = [];
                              r.data.base_attribute_format.forEach(function (item) {
                                item.value[0].selected = true;
                                _this6.specSelected.push(item.value[0]);
                              });
                              skuStr = [];
                              _this6.specSelected.forEach(function (item) {
                                skuStr.push(item.base_spec_value_id);
                              });
                              _this6.productDetail.sku.forEach(function (item) {
                                if (item.data === skuStr.join('-')) {
                                  _this6.currentStock = item.stock;
                                  _this6.currentSkuPrice = item.price;
                                  return;
                                }
                              });case 20:case "end":return _context5.stop();}}}, _callee5);}));return function (_x) {return _ref.apply(this, arguments);};}()).
                  catch(function (err) {
                    _this6.loading = false;
                    _this6.errorInfo = err;
                  }));case 2:case "end":return _context6.stop();}}}, _callee6);}))();
    },
    //规格弹窗开关
    toggleSpec: function toggleSpec() {var _this7 = this;
      console.log('===toggleSpec ====');
      if (!this.productDetail.id) return;
      if (this.specClass === 'show') {
        if (!this.hasLogin) {
          this.specClass = 'none';
          this.$mHelper.backToLogin();
          return;
        }
        //  SKU 先注释掉,有需求再添加
        //   if (this.specSelected.length < this.productDetail.base_attribute_format.length){
        // this.$mHelper.toast('请先选择规格');
        //     return;
        //   }
        // const skuStr = [];
        // let sku_id = '';
        // this.specSelected.forEach(item => {
        //     skuStr.push(item.base_spec_value_id)
        // })
        // this.productDetail.sku.forEach(item => {
        //   if (item.data === skuStr.join('-')) {
        //     sku_id = item.id;
        //     this.currentStock = item.stock;
        //     this.currentSkuPrice = item.price;
        //   }
        // });
        if (parseInt(this.currentStock, 10) === 0) {
          this.$mHelper.toast('库存不足');
          return;
        }
        console.log('购物类型', this.cartType);
        if (this.cartType === 'cart') {
          // 需要调整
          this.handleCartItemCreate(sku_id);
        } else if (this.cartType === 'buy') {
          // 暂时使用 goodsId
          // this.buy(sku_id);
          this.buy(this.productDetail.id);
        }
        this.cartType = null;
        this.specClass = 'hide';
        setTimeout(function () {
          _this7.specClass = 'none';
        }, 250);
      } else if (this.specClass === 'none') {
        this.specClass = 'show';
      }
    },
    hideSpec: function hideSpec() {var _this8 = this;
      this.specClass = 'hide';
      setTimeout(function () {
        _this8.specClass = 'none';
      }, 250);
    },
    // 添加商品至购物车
    handleCartItemCreate: function handleCartItemCreate(sku_id) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return (
                  _this9.$http.post("".concat(_product.cartItemCreate), {
                    sku_id: sku_id,
                    num: _this9.cartCount }).
                  then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                              _this9.$http.get("".concat(_product.cartItemCount)).then( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(r) {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                                          uni.setStorageSync('cartNum', r.data);
                                          _this9.cartNum = r.data;_context7.next = 4;return (
                                            uni.setTabBarBadge({
                                              index: _this9.$mConstDataConfig.cartIndex,
                                              text: r.data }));case 4:case "end":return _context7.stop();}}}, _callee7);}));return function (_x2) {return _ref3.apply(this, arguments);};}()));case 2:


                            _this9.$mHelper.toast('添加成功，在购物车等');case 3:case "end":return _context8.stop();}}}, _callee8);}))));case 2:case "end":return _context9.stop();}}}, _callee9);}))();

    },
    //选择规格
    selectSpec: function selectSpec(index, pid, type) {var _this10 = this;
      var list = this.specChildList;
      list.forEach(function (item) {
        if (item.base_spec_id === pid) {
          _this10.$set(item, 'selected', false);
        }
      });
      if (parseInt(type, 10) === 3) {
        this.showTypeImage = list[index].data;
      }
      if (parseInt(type, 10) === 2) {
        this.styleObject = {
          color: list[index].data
          // border: `1px solid ${list[index].data}`,
        };
      }
      this.$set(list[index], 'selected', true);
      //存储已选择
      /**
       * 修复选择规格存储错误
       * 将这几行代码替换即可
       * 选择的规格存放在specSelected中
       */
      this.specSelected = [];
      list.forEach(function (item) {
        if (item.selected === true) {
          _this10.specSelected.push(item);
        }
      });
      var skuStr = [];
      this.specSelected.forEach(function (item) {
        skuStr.push(item.base_spec_value_id);
      });
      this.productDetail.sku.forEach(function (item) {
        if (item.data === skuStr.join('-')) {
          _this10.currentStock = item.stock;
          _this10.currentSkuPrice = item.price;
          return;
        }
      });
    },
    // 收藏
    toFavorite: function toFavorite() {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:if (
                _this11.productDetail.id) {_context10.next = 2;break;}return _context10.abrupt("return");case 2:
                if (!_this11.$mStore.getters.hasLogin) {
                  _this11.specClass = 'none';
                  _this11.$mHelper.backToLogin();
                } else {
                  _this11.favorite ? _this11.handleCollectDel() : _this11.handleCollectCreate();
                }case 3:case "end":return _context10.stop();}}}, _callee10);}))();
    },
    // 收藏商品
    handleCollectCreate: function handleCollectCreate() {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return (
                  _this12.$http.post("".concat(_basic.collectCreate), {
                    collectId: _this12.product_id,
                    type: '1' }).
                  then(function () {
                    _this12.favorite = !_this12.favorite;
                    _this12.$mHelper.toast('收藏成功');
                  }));case 2:case "end":return _context11.stop();}}}, _callee11);}))();
    },
    // 取消收藏商品
    handleCollectDel: function handleCollectDel() {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return (
                  _this13.$http.post("".concat(_basic.collectDel), {
                    collectId: _this13.product_id,
                    type: '1' }).
                  then(function () {
                    _this13.favorite = !_this13.favorite;
                    _this13.$mHelper.toast('取消收藏成功');
                  }));case 2:case "end":return _context12.stop();}}}, _callee12);}))();
    },
    //
    // async buy(sku_id) {
    buy: function buy(goodsId) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var list, data;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                console.log('===================  sku_id');
                list = {};
                data = {};
                // data.sku_id = sku_id;
                data.num = _this14.cartCount;
                if (_this14.productDetail.exchangeType == 2 || _this14.productDetail.exchangeType == 4 || _this14.productDetail.exchangeType == 3 && _this14.isPointExchange) {
                  console.log('积分兑换商品');
                  list.type = 'point_exchange';
                } else {
                  console.log('立即购买');
                  list.type = 'buy_now';
                }
                list.data = JSON.stringify(data);
                _this14.$mRouter.push({ route: "/pages/order/create/order?data=".concat(JSON.stringify(list)) });case 7:case "end":return _context13.stop();}}}, _callee13);}))();
    },
    addCart: function addCart(type, isPointExchange) {
      console.log('type ', type);
      console.log('isPointExchange ', isPointExchange);
      console.log('===================addCart');
      if (!this.productDetail.id) return;
      this.specClass = 'show';
      this.cartType = type;
      this.isPointExchange = isPointExchange;
    },
    stopPrevent: function stopPrevent() {
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 456:
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=style&index=0&id=3c71abd6&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../网盘下载/HBuilderX.2.6.8.20200330.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./product.vue?vue&type=style&index=0&id=3c71abd6&scoped=true&lang=scss& */ 457);
/* harmony import */ var _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_8_20200330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_product_vue_vue_type_style_index_0_id_3c71abd6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 457:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xinchuang/Desktop/uniapp/stavyan-tinyshop_1.1.11_example/pages/product/product.vue?vue&type=style&index=0&id=3c71abd6&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[450,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/product.js.map