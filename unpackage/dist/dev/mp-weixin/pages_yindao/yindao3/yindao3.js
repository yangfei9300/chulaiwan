(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages_yindao/yindao3/yindao3"],{

/***/ 406:
/*!*************************************************************************************************!*\
  !*** F:/project/chulaiwan(小程序最新)最新（海景0529）/main.js?{"page":"pages_yindao%2Fyindao3%2Fyindao3"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _yindao = _interopRequireDefault(__webpack_require__(/*! ./pages_yindao/yindao3/yindao3.vue */ 407));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_yindao.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 407:
/*!******************************************************************************!*\
  !*** F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yindao3.vue?vue&type=template&id=91d2c486&scoped=true& */ 408);
/* harmony import */ var _yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yindao3.vue?vue&type=script&lang=js& */ 410);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yindao3.vue?vue&type=style&index=0&id=91d2c486&scoped=true&lang=css& */ 412);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91d2c486",
  null,
  false,
  _yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages_yindao/yindao3/yindao3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 408:
/*!*************************************************************************************************************************!*\
  !*** F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=template&id=91d2c486&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yindao3.vue?vue&type=template&id=91d2c486&scoped=true& */ 409);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_template_id_91d2c486_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 409:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=template&id=91d2c486&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 410:
/*!*******************************************************************************************************!*\
  !*** F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yindao3.vue?vue&type=script&lang=js& */ 411);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 411:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    var date = new Date();
    var years = [];
    var year = date.getFullYear();
    var months = [];
    var month = date.getMonth() + 1;
    var days = [];
    var day = date.getDate();
    for (var i = 1930; i <= date.getFullYear() + 1; i++) {
      years.push(i);
    }
    for (var _i = 1; _i <= 12; _i++) {
      months.push(_i);
    }
    for (var _i2 = 1; _i2 <= 31; _i2++) {
      days.push(_i2);
    }
    return {
      timetext: '请选择地区',
      constellation: "天蝎座",
      // 年月日
      value: [years.length - 2, month - 1, day - 1],
      years: years,
      year: year,
      months: months,
      month: month,
      days: days,
      day: day,
      indicatorStyle: "height: 50px;",
      headimg: '',
      Image: ['https://ta.imjiayi.com/upload/upload/chongfu/01 1@2x.png', 'https://ta.imjiayi.com/upload/upload/chongfu/4444@2x.png',
      //男
      'https://ta.imjiayi.com/upload/upload/chongfu/06@2x.png' //女
      ],

      inputnf: {} //之前填的信息
    };
  },
  mounted: function mounted() {
    // 一进入显示当前日期的星座
    this.xingzuo();
  },
  onLoad: function onLoad() {
    this.inputnf = getApp().globalData.reg;
  },
  methods: {
    yearChange: function yearChange(e) {
      console.log(e);
      this.timetext = e.detail.value[0] + e.detail.value[1] + e.detail.value[2];
    },
    // 时间选择
    bindChange: function bindChange(e) {
      var val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
      console.log(this.year + '' + this.month + '' + this.day + '');
      var lastDay = this.day <= 30,
        FebDay = this.day <= 29;
      switch (this.month) {
        case 1:
          //1月星座
          if (this.day <= 19) {
            this.constellation = '摩羯座';
          } else if (this.day >= 20) {
            this.constellation = '水瓶座';
          }
          break;
        case 2:
          //2月星座
          if (this.day <= 18) {
            this.constellation = '水瓶座';
          } else if (this.day >= 18 && FebDay) {
            this.constellation = '双鱼座';
          }
          break;
        case 3:
          //3月星座
          if (this.day <= 20) {
            this.constellation = '双鱼座';
          } else if (this.day >= 21) {
            this.constellation = '白羊座';
          }
          break;
        case 4:
          //4月星座
          if (this.day <= 19) {
            this.constellation = '白羊座';
          } else if (this.day >= 20 && lastDay) {
            this.constellation = '金牛座';
          }
          break;
        case 5:
          //5月星座
          if (this.day <= 20) {
            this.constellation = '金牛座';
          } else if (this.day >= 21) {
            this.constellation = '双子座';
          }
          break;
        case 6:
          //6月星座
          if (this.day <= 21) {
            this.constellation = '双子座';
          } else if (this.day >= 22 && lastDay) {
            this.constellation = '巨蟹座';
          }
          break;
        case 7:
          //7月星座
          if (this.day <= 22) {
            this.constellation = '巨蟹座';
          } else if (this.day >= 23) {
            this.constellation = '狮子座';
          }
          break;
        case 8:
          //8月星座
          if (this.day <= 22) {
            this.constellation = '狮子座';
          } else if (this.day >= 23) {
            this.constellation = '处女座';
          }
          break;
        case 9:
          //9月星座
          if (this.day <= 22) {
            this.constellation = '处女座';
          } else if (this.day >= 23 && lastDay) {
            this.constellation = '天秤座';
          }
          break;
        case 10:
          //10月星座
          if (this.day <= 23) {
            this.constellation = '天秤座';
          } else if (this.day >= 24) {
            this.constellation = '天蝎座';
          }
          break;
        case 11:
          //11月星座
          if (this.day <= 22) {
            this.constellation = '天蝎座';
          } else if (this.day >= 23 && lastDay) {
            this.constellation = '射手座';
          }
          break;
        case 12:
          //12月星座
          if (this.day <= 21) {
            this.constellation = '射手座';
          } else if (this.day >= 22) {
            this.constellation = '摩羯座';
          }
          break;
      }
    },
    //默认星座选择
    xingzuo: function xingzuo() {
      var lastDay = this.day <= 30,
        FebDay = this.day <= 29;
      switch (this.month) {
        case 1:
          //1月星座
          if (this.day <= 19) {
            this.constellation = '摩羯座';
          } else if (this.day >= 20) {
            this.constellation = '水瓶座';
          }
          break;
        case 2:
          //2月星座
          if (this.day <= 18) {
            this.constellation = '水瓶座';
          } else if (this.day >= 18 && FebDay) {
            this.constellation = '双鱼座';
          }
          break;
        case 3:
          //3月星座
          if (this.day <= 20) {
            this.constellation = '双鱼座';
          } else if (this.day >= 21) {
            this.constellation = '白羊座';
          }
          break;
        case 4:
          //4月星座
          if (this.day <= 19) {
            this.constellation = '白羊座';
          } else if (this.day >= 20 && lastDay) {
            this.constellation = '金牛座';
          }
          break;
        case 5:
          //5月星座
          if (this.day <= 20) {
            this.constellation = '金牛座';
          } else if (this.day >= 21) {
            this.constellation = '双子座';
          }
          break;
        case 6:
          //6月星座
          if (this.day <= 21) {
            this.constellation = '双子座';
          } else if (this.day >= 22 && lastDay) {
            this.constellation = '巨蟹座';
          }
          break;
        case 7:
          //7月星座
          if (this.day <= 22) {
            this.constellation = '巨蟹座';
          } else if (this.day >= 23) {
            this.constellation = '狮子座';
          }
          break;
        case 8:
          //8月星座
          if (this.day <= 22) {
            this.constellation = '狮子座';
          } else if (this.day >= 23) {
            this.constellation = '处女座';
          }
          break;
        case 9:
          //9月星座
          if (this.day <= 22) {
            this.constellation = '处女座';
          } else if (this.day >= 23 && lastDay) {
            this.constellation = '天秤座';
          }
          break;
        case 10:
          //10月星座
          if (this.day <= 23) {
            this.constellation = '天秤座';
          } else if (this.day >= 24) {
            this.constellation = '天蝎座';
          }
          break;
        case 11:
          //11月星座
          if (this.day <= 22) {
            this.constellation = '天蝎座';
          } else if (this.day >= 23 && lastDay) {
            this.constellation = '射手座';
          }
          break;
        case 12:
          //12月星座
          if (this.day <= 21) {
            this.constellation = '射手座';
          } else if (this.day >= 22) {
            this.constellation = '摩羯座';
          }
          break;
      }
    },
    // 选择头像
    choose1: function choose1() {
      console.log("头像选择结果");
      var _this = this;
      uni.chooseMedia({
        count: 1,
        success: function success(res) {
          console.log("阿达", res);
          _this.headimg = res.tempFiles[0].tempFilePath;
        },
        complete: function complete(res) {
          console.log("阿达", res);
        }
      });

      // uni.chooseMedia({
      // 	count: 1,
      // 	  mediaType: ['image'],
      // 	  sourceType: ['album', 'camera'],
      // 	success(res) {    
      // 		console.log(res.tempFilePaths[0])
      // 		_this.headimg = res.tempFilePaths[0];
      // 	},
      // 	fail:res=>{
      // 		console.log("头像选择失败",res);
      // 	},
      // 	complete:res=>{
      // 		console.log("头像选择结果",res);
      // 	}
      // })
    },
    onbtn: function onbtn() {
      var get = getApp().globalData.reg;
      // 头像
      get.headimg = this.headimg;
      // 星座
      get.base_con = this.constellation;
      // 生日
      get.base_birthday = this.year + '-' + this.month + '-' + this.day;
      // 地址
      get.base_address = this.timetext;
      console.log(get);
      if (get.headimg.length > 0 && get.base_con.length > 0 && get.base_birthday.length > 0 && get.base_address.length > 0 && get.base_address != '请选择地区') {
        uni.navigateTo({
          url: '../yindao4/yindao4?type=0',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else {
        uni.showToast({
          title: '请完善信息',
          mask: true,
          icon: 'none'
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 412:
/*!***************************************************************************************************************************************!*\
  !*** F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=style&index=0&id=91d2c486&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yindao3.vue?vue&type=style&index=0&id=91d2c486&scoped=true&lang=css& */ 413);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yindao3_vue_vue_type_style_index_0_id_91d2c486_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 413:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan(小程序最新)最新（海景0529）/pages_yindao/yindao3/yindao3.vue?vue&type=style&index=0&id=91d2c486&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[406,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_yindao/yindao3/yindao3.js.map