(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ 112:
/*!***************************************************************!*\
  !*** F:/project/chulaiwan/main.js?{"page":"pages%2Fmy%2Fmy"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _my = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my.vue */ 113));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_my.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 113:
/*!********************************************!*\
  !*** F:/project/chulaiwan/pages/my/my.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my.vue?vue&type=template&id=0be17cc6&scoped=true& */ 114);
/* harmony import */ var _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my.vue?vue&type=script&lang=js& */ 116);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my.vue?vue&type=style&index=0&id=0be17cc6&scoped=true&lang=css& */ 118);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0be17cc6",
  null,
  false,
  _my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/my/my.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 114:
/*!***************************************************************************************!*\
  !*** F:/project/chulaiwan/pages/my/my.vue?vue&type=template&id=0be17cc6&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=template&id=0be17cc6&scoped=true& */ 115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 115:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan/pages/my/my.vue?vue&type=template&id=0be17cc6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    loadApp: function () {
      return __webpack_require__.e(/*! import() | components/loadApp/loadApp */ "components/loadApp/loadApp").then(__webpack_require__.bind(null, /*! @/components/loadApp/loadApp.vue */ 429))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.Show = true
    }
    _vm.e1 = function ($event) {
      _vm.Show = true
    }
    _vm.e2 = function ($event) {
      _vm.Show = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 116:
/*!*********************************************************************!*\
  !*** F:/project/chulaiwan/pages/my/my.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=script&lang=js& */ 117);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_idea_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 117:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan/pages/my/my.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uploadFile = _interopRequireDefault(__webpack_require__(/*! ../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js */ 72));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      baseurl: getApp().globalData.baseurl,
      token: getApp().globalData.token,
      uuid: getApp().globalData.uuid,
      // 背景图组
      Bgi: [],
      // 个人信息
      UserInfo: [],
      // 八个按钮
      MYNav: [{
        id: 1,
        img: '../../static/My/huodong.png',
        name: '活动中心'
      }, {
        id: 2,
        img: '../../static/My/qiandao.png',
        name: '签到'
      }, {
        id: 3,
        img: '../../static/My/xiaoxi.png',
        name: '消息通知'
      }, {
        id: 4,
        img: 'https://ta.imjiayi.com/upload/upload/Component 138@2x.png',
        name: '钱包'
      }, {
        id: 9,
        img: 'https://ta.imjiayi.com/upload/upload/Component 134@2x.png',
        name: '商城'
      }, {
        id: 5,
        img: '../../static/My/shiming.png',
        name: '实名认证'
      }, {
        id: 7,
        img: '../../static/My/system.png',
        name: '系统设置'
      }, {
        id: 6,
        img: '../../static/My/fankui.png',
        name: '意见反馈'
      }],
      // 底部tabbar
      tabbarlist: [{
        id: 0,
        img: "../../static/TabImg/tabbar11.png",
        name: "首页"
      }, {
        id: 1,
        img: "../../static/TabImg/tabbar22.png",
        name: "活动"
      }, {
        id: 2,
        img: "../../static/TabImg/fabu.png",
        name: "发布"
      }, {
        id: 3,
        img: "../../static/TabImg/quanzi1.png",
        name: "圈子"
      }, {
        id: 4,
        img: "../../static/TabImg/tabbar33.png",
        name: "我的"
      }],
      Show: false,
      showApp: false,
      isShenhe: ""
    };
  },
  onShow: function onShow() {
    this.getShenhe();
    // var token=uni.getStorageSync("token");
    // if(token){
    // 	this.token=token;
    // 	this.getUserInfo();
    // }else
    // {
    // 	uni.showToast({
    // 		title:"请先登录",icon:"non",  
    // 	})e 
    // 	setTimeout(res => {
    // 		uni.navigateTo({

    // 			url:"/pages/Login/Login"
    // 		})  从
    // 	}, 1000)  吃饭
    var token = uni.getStorageSync("token");
    if (token) {
      this.token = token;
    }
    this.getIsToken();
    // }
  },
  mounted: function mounted() {
    this.getIsToken();
    this.getBgi();
    // if(this.token){
    // 	this.getUserInfo();
    // }
  },
  onLoad: function onLoad() {},
  methods: {
    getShenhe: function getShenhe() {
      var _this2 = this;
      var url = "https://ta.imjiayi.com/api/version/xcx";
      uni.request({
        url: url,
        method: 'POST',
        data: {
          city: uni.getStorageSync("citySel")
        },
        header: {
          xcx: 1,
          token: this.token
        },
        success: function success(res) {
          console.log("是否", res);
          // this.isShenhe=2;
          _this2.isShenhe = res.data.data;
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    toLogin: function toLogin() {
      uni.navigateTo({
        url: "/pages/Login/Login"
      });
    },
    hideview: function hideview() {},
    showLoadApp: function showLoadApp() {
      this.showApp = !this.showApp;
    },
    toRemaaa: function toRemaaa() {
      uni.navigateTo({
        url: "/pages_wode/shimingRenzheng/shimingRenzheng"
      });
    },
    toshop: function toshop() {
      uni.navigateTo({
        url: "/pages1/shopAdd/shopAdd"
      });
    },
    toVip: function toVip() {
      uni.navigateTo({
        url: "/pages_wode/vip/vip"
      });
    },
    // showApp(){
    // 	uni.showToast({
    // 		title:"APP",
    // 		icon:"none"
    // 	})
    // },
    // 八大板块跳转
    NavGo: function NavGo(id) {
      console.log(id);
      if (id == 1) {
        uni.navigateTo({
          url: '../../pages_wode/action/action',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else if (id == 2) {
        uni.navigateTo({
          url: '/pages1/qiandao/qiandao',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else if (id == 3) {
        uni.navigateTo({
          url: '../../pages_wode/notification/notification',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else if (id == 4) {} else if (id == 5) {
        this.showLoadApp();
        return false;
        var user = this.UserInfo;
        // uni.navigateTo({
        // 	url: `../../pages_wode/RealName/RealName?headimg=${user.headimg}&&name=${user.nickname}&&is_auth=${user.is_auth}`,
        // 	success: res => {},
        // 	fail: () => {},
        // 	complete: () => {}
        // });
        this.toRemaaa();
      } else if (id == 6) {
        uni.navigateTo({
          url: '../../pages_wode/Feedback/Feedback',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else if (id == 7) {
        uni.navigateTo({
          url: '../../pages_wode/system/system',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      } else if (id == 9) {
        // uni.showToast({
        // 	title:"敬请期待",
        // 	icon:"none"
        // })
        this.showLoadApp();
      }
    },
    getIsToken: function getIsToken() {
      var _this3 = this;
      var url = "/api/IosVisitor/checkToken";
      uni.request({
        url: this.baseurl + url,
        method: 'POST',
        data: {
          'token': this.token,
          city: uni.getStorageSync("citySel")
        },
        header: {
          xcx: 1,
          token: this.token
        },
        success: function success(res) {
          var data = res.data;
          if (data.code == 0) {
            getApp().globalData.token = null;
            _this3.token = null;
            uni.removeStorageSync("token");
          }
          _this3.getUserInfo();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 个人信息
    getUserInfo: function getUserInfo() {
      var _this4 = this;
      var url = this.baseurl + '/api/user/getUserInfo';
      var token = uni.getStorageSync("token");
      if (!token) {
        url = this.baseurl + '/api/IosVisitor/getUserInfo';
      }
      var uuid = uni.getStorageSync("uuid");
      uni.request({
        url: url,
        method: 'POST',
        data: {
          uuid: uuid,
          city: uni.getStorageSync("citySel")
        },
        header: {
          xcx: 1,
          token: this.token
        },
        success: function success(res) {
          console.log("个人信息", res);
          _this4.UserInfo = res.data.data;
          uni.setStorageSync("userInfo", _this4.UserInfo);
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 背景图组
    getBgi: function getBgi() {
      var _this5 = this;
      var url = '/api/user/userBgi';
      if (!this.tokenValue) {
        url = "/api/IosVisitor/userBgi";
      }
      uni.request({
        url: this.baseurl + url,
        method: 'POST',
        data: {
          city: uni.getStorageSync("citySel")
        },
        header: {
          xcx: 1,
          token: this.token
        },
        success: function success(res) {
          console.log("背景图组", res);
          _this5.Bgi = res.data.data;
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 更换背景图片
    OnBgi: function OnBgi(Src) {
      var _this6 = this;
      this.UserInfo.base_bgi = Src;
      uni.showLoading({
        mask: true,
        title: '加载中...'
      });
      var url = '/api/user/userBgiEdit';
      if (!this.tokenValue) {
        url = "/api/IosVisitor/userBgiEdit";
      }
      uni.request({
        url: this.baseurl + url,
        method: 'POST',
        header: {
          xcx: 1,
          token: this.token
        },
        data: {
          base_bgi: Src,
          city: uni.getStorageSync("citySel")
        },
        success: function success(res) {
          console.log("修改背景图片", res);
          _this6.Show = false;
          uni.hideLoading();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 更换自定义背景图片
    OnMyBtn: function OnMyBtn() {
      var _this = this;
      if (_this.UserInfo.is_vip == 1) {
        // 可以更换背景图片
        uni.chooseImage({
          count: 1,
          sourceType: 'album',
          success: function success(res) {
            var _this7 = this;
            console.log("选择图片", res);
            res.tempFilePaths[0];
            uni.showLoading({
              mask: true,
              title: '正在更换'
            });
            (0, _uploadFile.default)(res.tempFilePaths[0], 'image/xcx/', function (result) {
              console.log("上传图片", result);
              var url = '/api/user/userBgiEdit';
              if (!_this7.tokenValue) {
                url = "/api/IosVisitor/userBgiEdit";
              }
              uni.request({
                url: _this.baseurl + url,
                method: 'POST',
                header: {
                  xcx: 1,
                  token: _this.token
                },
                data: {
                  base_bgi: result
                },
                success: function success(res) {
                  console.log("修改背景图片", res);
                  _this.UserInfo.base_bgi = result;
                  _this.Show = false;
                  uni.hideLoading();
                },
                fail: function fail() {},
                complete: function complete() {}
              });
            });
          }
        });
      } else if (_this.UserInfo.is_vip == 0) {
        // 不可更换
        uni.showToast({
          title: '请开通VIP解锁此功能',
          mask: true,
          icon: 'error'
        });
      }
    },
    // 跳转至关注列表
    NavFollow: function NavFollow() {
      uni.navigateTo({
        url: '../../pages_wode/follow/follow',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 跳转至粉丝列表
    NavFans: function NavFans() {
      uni.navigateTo({
        url: '../../pages_wode/Fans/Fans',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 跳转至活跃度
    NavActivity: function NavActivity() {
      // is_vip=${UserInfo.is_vip}&&headimg=${UserInfo.headimg}&&nickname=${UserInfo.nickname}&&base_liveness=${UserInfo.base_liveness}
      var User = JSON.stringify(this.UserInfo);
      uni.navigateTo({
        url: "../../pages_wode/Activity/Activity?UserInfo=".concat(User),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    Edit: function Edit() {
      // 跳转至编辑资料页
      var User = JSON.stringify(this.UserInfo);
      uni.navigateTo({
        url: '../../pages_wode/userInfoEdit/userInfoEdit?UserInfo=' + User,
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // 跳转往期活动列表
    unavPast: function unavPast() {
      uni.navigateTo({
        url: '/pages_wode/PastActlist/PastActlist',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    // tabbar跳转
    navswich: function navswich(ID) {
      if (ID == 0) {
        uni.switchTab({
          url: '../index/index'
        });
      } else if (ID == 1) {
        uni.switchTab({
          url: '../activity/activity'
        });
      } else if (ID == 2) {
        uni.navigateTo({
          url: '../Group/Group',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {}
        });
        // uni.switchTab({
        // 	url: ''
        // })
      } else if (ID == 3) {
        uni.switchTab({
          url: '../circle/circle'
        });
      } else if (ID == 4) {
        uni.switchTab({
          url: '../my/my'
        });
      }
    },
    // 放大头像
    FanAvatar: function FanAvatar(headimg) {
      var oss = [headimg];
      uni.previewImage({
        urls: oss,
        success: function success(res) {
          console.log(res);
        }
      });
    },
    // 跳转至个人中心
    NavCenter: function NavCenter() {
      uni.navigateTo({
        url: '/pages_wode/PersonalCenter/PersonalCenter?uuid=' + this.uuid,
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 118:
/*!*****************************************************************************************************!*\
  !*** F:/project/chulaiwan/pages/my/my.vue?vue&type=style&index=0&id=0be17cc6&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../idea/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=style&index=0&id=0be17cc6&scoped=true&lang=css& */ 119);
/* harmony import */ var _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_idea_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_idea_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_idea_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idea_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_id_0be17cc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 119:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/project/chulaiwan/pages/my/my.vue?vue&type=style&index=0&id=0be17cc6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[112,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map