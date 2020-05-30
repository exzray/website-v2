function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home.component.ts");
    /* harmony import */


    var _chatbot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chatbot.component */
    "./src/app/chatbot.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'chatbot',
      component: _chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'website-v2';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home.component.ts");
    /* harmony import */


    var _chatbot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chatbot.component */
    "./src/app/chatbot.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _chatbot_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chatbot-item.component */
    "./src/app/chatbot-item.component.ts");
    /* harmony import */


    var _shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/services/dialog-flow.service */
    "./src/app/shared/services/dialog-flow.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/directives/auto-scroll.directive */
    "./src/app/shared/directives/auto-scroll.directive.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_11__["DialogFlowService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _chatbot_component__WEBPACK_IMPORTED_MODULE_8__["ChatbotComponent"], _chatbot_item_component__WEBPACK_IMPORTED_MODULE_10__["ChatbotItemComponent"], _shared_directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AutoScrollDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _chatbot_component__WEBPACK_IMPORTED_MODULE_8__["ChatbotComponent"], _chatbot_item_component__WEBPACK_IMPORTED_MODULE_10__["ChatbotItemComponent"], _shared_directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["AutoScrollDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
          providers: [_shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_11__["DialogFlowService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chatbot-item.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/chatbot-item.component.ts ***!
    \*******************************************/

  /*! exports provided: ChatbotItemComponent */

  /***/
  function srcAppChatbotItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatbotItemComponent", function () {
      return ChatbotItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/services/dialog-flow.service */
    "./src/app/shared/services/dialog-flow.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatbotItemComponent_div_8_div_1_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var button_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", button_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatbotItemComponent_div_8_div_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotItemComponent_div_8_div_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var button_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.onClickReply(button_r28);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var button_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", button_r28.label, " ");
      }
    }

    function ChatbotItemComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatbotItemComponent_div_8_div_1_img_2_Template, 1, 1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatbotItemComponent_div_8_div_1_button_3_Template, 2, 1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var button_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", button_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", button_r28.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", button_r28.reply);
      }
    }

    function ChatbotItemComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatbotItemComponent_div_8_div_1_Template, 4, 3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.message.buttons);
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "float-right": a0,
        "ml-4": a1,
        "mr-4": a2
      };
    };

    var ChatbotItemComponent = /*#__PURE__*/function () {
      function ChatbotItemComponent(dialogflow) {
        _classCallCheck(this, ChatbotItemComponent);

        this.dialogflow = dialogflow;
      }

      _createClass(ChatbotItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isHuman = this.message.sender === 'human';
        }
      }, {
        key: "onClickReply",
        value: function onClickReply(button) {
          this.dialogflow.userMessage(button.reply);

          if (button.openUrl) {
            window.open(button.openUrl, '_blank');
          }
        }
      }]);

      return ChatbotItemComponent;
    }();

    ChatbotItemComponent.ɵfac = function ChatbotItemComponent_Factory(t) {
      return new (t || ChatbotItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_1__["DialogFlowService"]));
    };

    ChatbotItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatbotItemComponent,
      selectors: [["app-chatbot-item"]],
      inputs: {
        message: "message"
      },
      decls: 9,
      vars: 12,
      consts: [[1, "clearfix", "mb-3"], [1, "bg-white", "shadow-sm", "p-2", "rounded", "d-inline-block", "mb-2", 3, "ngClass"], [1, "text-muted"], [1, "mb-0", 2, "font-size", "1.2em"], [1, "p-2"], ["class", "row rounded p-1 bg-white", 4, "ngIf"], [1, "row", "rounded", "p-1", "bg-white"], ["class", "col-md-6 py-1 pb-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "py-1", "pb-1"], ["target", "_blank", 3, "href"], ["alt", "", "class", "img-fluid", 3, "src", 4, "ngIf"], ["class", "btn btn-danger btn-sm mt-1 btn-block", 3, "click", 4, "ngIf"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "btn", "btn-danger", "btn-sm", "mt-1", "btn-block", 3, "click"]],
      template: function ChatbotItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatbotItemComponent_div_8_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c0, ctx.isHuman, ctx.isHuman, !ctx.isHuman));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.message.sender === "human" ? "You" : "Reno Bot", ", say at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx.message.created, "short"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.buttons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3QtaXRlbS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chatbot-item',
          templateUrl: './chatbot-item.component.html',
          styleUrls: ['./chatbot-item.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_1__["DialogFlowService"]
        }];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chatbot.component.ts":
  /*!**************************************!*\
    !*** ./src/app/chatbot.component.ts ***!
    \**************************************/

  /*! exports provided: ChatbotComponent */

  /***/
  function srcAppChatbotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function () {
      return ChatbotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/dialog-flow.service */
    "./src/app/shared/services/dialog-flow.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/directives/auto-scroll.directive */
    "./src/app/shared/directives/auto-scroll.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chatbot_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chatbot-item.component */
    "./src/app/chatbot-item.component.ts");

    function ChatbotComponent_small_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "is typing...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChatbotComponent_app_chatbot_item_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-chatbot-item", 26);
      }

      if (rf & 2) {
        var message_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", message_r24);
      }
    }

    var ChatbotComponent = /*#__PURE__*/function () {
      function ChatbotComponent(dialogflow, storage) {
        _classCallCheck(this, ChatbotComponent);

        this.dialogflow = dialogflow;
        this.storage = storage;
        this.message = '';
        this.messages = dialogflow.getMessages();
        this.typing = dialogflow.getIsWaiting();
      }

      _createClass(ChatbotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dialogflow.sendMessageQuery('menu');
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.dialogflow.userMessage(this.message);
          this.message = '';
        }
      }, {
        key: "openUpload",
        value: function openUpload(input) {
          input.click();
        }
      }, {
        key: "changeUpload",
        value: function changeUpload(files) {
          if (files.length === 1) {
            var file = files.item(0);
            this.uploadFile(file);
          } else {
            window.alert('Multiple file uploaded is not allow!');
          }
        }
      }, {
        key: "sendMessageMenu",
        value: function sendMessageMenu() {
          this.dialogflow.userMessage('menu');
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var _this = this;

          var path = 'enquire_image/' + this.dialogflow.getSessionID();
          var ref = this.storage.ref(path);
          var task = this.storage.upload(path, file);
          task.snapshotChanges().toPromise()["finally"](function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return ref.getDownloadURL().toPromise();

                    case 2:
                      this.message = _context.sent;
                      console.log(this.message);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return ChatbotComponent;
    }();

    ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) {
      return new (t || ChatbotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_2__["DialogFlowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
    };

    ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChatbotComponent,
      selectors: [["app-chatbot"]],
      decls: 37,
      vars: 19,
      consts: [[1, "chatbot-floater", "rounded", "p-2", "shadow"], ["href", "/"], [1, "fas", "fa-2x", "fa-robot", "text-primary"], [1, "ml-2"], [1, "h-100", "bg-light", "background-cover"], [1, "container", "h-100"], [1, "row", "h-100", "justify-content-center", "align-items-center"], [1, "h-100", "py-2", "py-md-5", "col-md-8"], [1, "h-100", "rounded", "shadow-lg", "chatbot"], [1, "d-flex", "flex-column", "h-100"], [1, "p-2", "rounded-top", "chatbot-header", "font-family-baloo"], [1, "fas", "fa-2x", "fa-robot", "text-primary", "mr-2"], [1, "bot-name", "mr-2"], ["class", "text-muted", 4, "ngIf"], ["appAutoScroll", "", 1, "flex-fill", "p-3", "font-family-saira", "overflow-auto"], [3, "message", 4, "ngFor", "ngForOf"], [1, "p-2", "bg-white", "rounded-bottom", "font-family-baloo"], [1, "d-flex"], ["type", "file", "hidden", "", 3, "change"], ["fileUpload", ""], [1, "btn", "btn-outline-info", "ml-0", "mr-2", 3, "disabled", "click"], ["for", "id_input"], ["id", "id_input", "type", "text", "placeholder", "your message", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["message_input", ""], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "text-muted"], [3, "message"]],
      template: function ChatbotComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sup", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reno Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChatbotComponent_small_15_Template, 2, 0, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ChatbotComponent_app_chatbot_item_18_Template, 1, 1, "app-chatbot-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ChatbotComponent_Template_input_change_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

            return ctx.changeUpload(_r22.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

            return ctx.openUpload(_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_27_listener() {
            return ctx.sendMessageMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatbotComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.message = $event;
          })("change", function ChatbotComponent_Template_input_change_31_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_34_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, ctx.typing));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.messages));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 11, ctx.typing));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 13, ctx.typing));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 15, ctx.typing));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 17, ctx.typing));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_5__["AutoScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _chatbot_item_component__WEBPACK_IMPORTED_MODULE_7__["ChatbotItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".chatbot[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, .65);\r\n}\r\n\r\n.chatbot-header[_ngcontent-%COMP%] {\r\n  background: white;\r\n}\r\n\r\n.chatbot-header[_ngcontent-%COMP%]   .bot-name[_ngcontent-%COMP%] {\r\n  font-size: 1.4em;\r\n}\r\n\r\n.chatbot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.chatbot-floater[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 40px;\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRib3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxufVxyXG5cclxuLmNoYXRib3QtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoYXRib3QtaGVhZGVyIC5ib3QtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmNoYXRib3QgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0Ym90LWZsb2F0ZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatbotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chatbot',
          templateUrl: './chatbot.component.html',
          styleUrls: ['./chatbot.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_2__["DialogFlowService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home.component.ts":
  /*!***********************************!*\
    !*** ./src/app/home.component.ts ***!
    \***********************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomeComponent_header_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_27_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.scrollTo("#package");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var master_r5 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](master_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](master_r5.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](master_r5.button_text);
      }
    }

    function HomeComponent_section_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var about_r8 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](about_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](about_r8.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](about_r8.button_text);
      }
    }

    function HomeComponent_section_31_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-4x ", content_r11.icon, " text-primary mb-4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r11.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r11.subtitle);
      }
    }

    function HomeComponent_section_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_section_31_div_6_Template, 7, 5, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r9 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r9.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", service_r9.contents);
      }
    }

    function HomeComponent_section_84_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", content_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", content_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", content_r15.name);
      }
    }

    function HomeComponent_section_84_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_section_84_div_4_div_1_Template, 3, 3, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pkg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pkg_r12.contents);
      }
    }

    function HomeComponent_section_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_section_84_div_4_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pkg_r12 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pkg_r12.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pkg_r12.contents);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pkg_r12.button_text);
      }
    }

    function HomeComponent_section_86_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas ", content_r19.icon, " fa-3x mb-3 text-muted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", content_r19.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r19.label);
      }
    }

    function HomeComponent_section_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_section_86_div_10_Template, 4, 5, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r17 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r17.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r17.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", contact_r17.contents);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(firestore) {
        _classCallCheck(this, HomeComponent);

        this.firestore = firestore;
        this.masterDoc = firestore.doc('setup/master');
        this.master$ = this.masterDoc.valueChanges();
        this.aboutDoc = firestore.doc('setup/about');
        this.about$ = this.aboutDoc.valueChanges();
        this.serviceDoc = firestore.doc('setup/service');
        this.service$ = this.serviceDoc.valueChanges();
        this.packageDoc = firestore.doc('setup/package');
        this.package$ = this.packageDoc.valueChanges();
        this.contactDoc = firestore.doc('setup/contact');
        this.contact$ = this.contactDoc.valueChanges();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollTo",
        value: function scrollTo(id) {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 97,
      vars: 15,
      consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "py-3", "shadow-sm"], [1, "container"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "my-2", "my-lg-0"], [1, "nav-item"], [1, "nav-link", 3, "click"], ["id", "master", "class", "masthead scroll-trigger", 4, "ngIf"], ["id", "about", "class", "page-section bg-primary scroll-trigger", 4, "ngIf"], ["id", "service", "class", "page-section scroll-trigger", 4, "ngIf"], ["id", "portfolio", 1, "scroll-trigger"], [1, "container-fluid", "p-0"], [1, "row", "no-gutters"], [1, "col-lg-4", "col-sm-6"], ["href", "assets/img/portfolio/fullsize/1.jpg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/1.jpg", "alt", "", 1, "img-fluid"], [1, "portfolio-box-caption"], [1, "project-category", "text-white-50"], [1, "project-name"], ["href", "assets/img/portfolio/fullsize/2.jpg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/2.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/fullsize/3.jpeg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/3.jpeg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/fullsize/4.jpg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/4.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/fullsize/5.jpg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/5.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/fullsize/6.jpg", 1, "portfolio-box"], ["src", "assets/img/portfolio/thumbnails/6.jpg", "alt", "", 1, "img-fluid"], [1, "portfolio-box-caption", "p-3"], ["id", "package", "class", "page-section bg-dark text-white scroll-trigger", 4, "ngIf"], ["id", "contact", "class", "page-section scroll-trigger", 4, "ngIf"], [1, "chatbot-floater", "rounded", "p-2", "shadow"], ["href", "/chatbot"], [1, "fas", "fa-2x", "fa-robot", "text-primary"], [1, "ml-2"], [1, "bg-light", "py-5"], [1, "small", "text-center", "text-muted"], ["id", "master", 1, "masthead", "scroll-trigger"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center", "justify-content-center", "text-center"], [1, "col-lg-10", "align-self-end"], [1, "text-uppercase", "text-white", "font-weight-bold"], [1, "divider", "my-4"], [1, "col-lg-8", "align-self-baseline"], [1, "text-white-75", "font-weight-light", "mb-5"], [1, "btn", "btn-primary", "btn-xl", "js-scroll-trigger", "text-white", 3, "click"], ["id", "about", 1, "page-section", "bg-primary", "scroll-trigger"], [1, "row", "justify-content-center"], [1, "col-lg-8", "text-center"], [1, "text-white", "mt-0"], [1, "divider", "light", "my-4"], [1, "text-white-50", "mb-4"], ["routerLink", "/chatbot", 1, "btn", "btn-light", "btn-xl", "js-scroll-trigger"], ["id", "service", 1, "page-section", "scroll-trigger"], [1, "text-center", "mt-0"], ["class", "col-lg-3 col-md-6 text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "text-center"], [1, "mt-5"], [1, "h4", "mb-2"], [1, "text-muted", "mb-0"], ["id", "package", 1, "page-section", "bg-dark", "text-white", "scroll-trigger"], [1, "container", "text-center"], [1, "mb-4"], ["class", "row mb-4", 4, "ngIf"], ["routerLink", "/chatbot", 1, "btn", "btn-light", "btn-xl"], [1, "row", "mb-4"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["target", "_blank", 3, "href"], [1, "img-fluid", "rounded", "mb-4", 3, "src", "alt"], ["id", "contact", 1, "page-section", "scroll-trigger"], [1, "mt-0"], [1, "text-muted", "mb-5"], ["class", "col-md-2 mr-auto text-center mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-2", "mr-auto", "text-center", "mb-5"], ["target", "_blank", 1, "d-block", 3, "href"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Maya A Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() {
            return ctx.scrollTo("#master");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_13_listener() {
            return ctx.scrollTo("#about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_16_listener() {
            return ctx.scrollTo("#service");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_19_listener() {
            return ctx.scrollTo("#portfolio");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_22_listener() {
            return ctx.scrollTo("#package");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_25_listener() {
            return ctx.scrollTo("#contact");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_header_27_Template, 12, 3, "header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_section_29_Template, 11, 3, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_section_31_Template, 7, 2, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Project Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeComponent_section_84_Template, 7, 3, "section", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomeComponent_section_86_Template, 11, 3, "section", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "sup", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Chat Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "footer", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Copyright \xA9 2020 - Start Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 5, ctx.master$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 7, ctx.about$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 9, ctx.service$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 11, ctx.package$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 13, ctx.contact$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".chatbot-floater[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 40px;\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdGJvdC1mbG9hdGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/classes/message.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/classes/message.ts ***!
    \*******************************************/

  /*! exports provided: Message, MessageButton */

  /***/
  function srcAppSharedClassesMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageButton", function () {
      return MessageButton;
    });

    var Message = function Message() {
      _classCallCheck(this, Message);

      this.sender = 'bot';
      this.created = new Date();
    };

    var MessageButton = function MessageButton() {
      _classCallCheck(this, MessageButton);
    };
    /***/

  },

  /***/
  "./src/app/shared/directives/auto-scroll.directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/directives/auto-scroll.directive.ts ***!
    \************************************************************/

  /*! exports provided: AutoScrollDirective */

  /***/
  function srcAppSharedDirectivesAutoScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoScrollDirective", function () {
      return AutoScrollDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AutoScrollDirective = /*#__PURE__*/function () {
      function AutoScrollDirective(el) {
        var _this2 = this;

        _classCallCheck(this, AutoScrollDirective);

        this.el = el;
        this.element = this.el.nativeElement;
        this.changes = new MutationObserver(function () {
          _this2.scrollToBottom();
        });
        this.changes.observe(this.element, {
          childList: true
        });
      }

      _createClass(AutoScrollDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.changes.disconnect();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          this.element.scrollTo({
            behavior: 'smooth',
            top: this.calculateScrollToBottom()
          });
        }
      }, {
        key: "calculateScrollToBottom",
        value: function calculateScrollToBottom() {
          return Math.max(0, this.element.scrollHeight - this.element.offsetHeight);
        }
      }]);

      return AutoScrollDirective;
    }();

    AutoScrollDirective.ɵfac = function AutoScrollDirective_Factory(t) {
      return new (t || AutoScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    AutoScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutoScrollDirective,
      selectors: [["", "appAutoScroll", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAutoScroll]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/dialog-flow.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/dialog-flow.service.ts ***!
    \********************************************************/

  /*! exports provided: DialogFlowService */

  /***/
  function srcAppSharedServicesDialogFlowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogFlowService", function () {
      return DialogFlowService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! api-ai-javascript/es6/ApiAiClient */
    "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _classes_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../classes/message */
    "./src/app/shared/classes/message.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");

    var DialogFlowService = /*#__PURE__*/function () {
      function DialogFlowService(firestore) {
        _classCallCheck(this, DialogFlowService);

        this.firestore = firestore;
        this.dialogFlowToken = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].dialogFlow;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.isWaiting = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // check previous session id save in localStorage

        this.sessionID = localStorage.getItem('dialog_flow_session_id'); // dialog flow require session id to keep session alive

        if (!this.sessionID) {
          this.sessionID = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
          console.log("create new session id: ".concat(this.sessionID)); // save created uuid to locaStorage

          localStorage.setItem('dialog_flow_session_id', this.sessionID);
        } else {
          console.log("start session with id: ".concat(this.sessionID));
        }

        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__["ApiAiClient"]({
          accessToken: this.dialogFlowToken,
          sessionId: this.sessionID
        });
      }

      _createClass(DialogFlowService, [{
        key: "getSessionID",
        value: function getSessionID() {
          return this.sessionID;
        }
      }, {
        key: "sendMessageQuery",
        value: function sendMessageQuery(text) {
          // simulate bot typing
          this.isWaiting.next(true);
          this.handleQueryResponse(this.client.textRequest(text));
        }
      }, {
        key: "userMessage",
        value: function userMessage(text) {
          var message = new _classes_message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
          message.text = text;
          message.sender = 'human';
          this.messages.next([message]);
          this.sendMessageQuery(text);
        }
      }, {
        key: "botMessage",
        value: function botMessage(text) {
          var message = new _classes_message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
          message.text = text;
          this.messages.next([message]);
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          return this.messages.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (acc, value) {
            return acc.concat(value);
          }));
        }
      }, {
        key: "getIsWaiting",
        value: function getIsWaiting() {
          return this.isWaiting.asObservable();
        }
      }, {
        key: "handleQueryResponse",
        value: function handleQueryResponse(promise) {
          var _this3 = this;

          promise.then(function (response) {
            _this3.handleAction(response);

            var messages = response.result.fulfillment.messages;
            messages.forEach(function (value) {
              var speech = value.speech;

              if (!speech) {
                _this3.handleFirebaseError(response.result.resolvedQuery);
              } else {
                if (speech.startsWith('payload:')) {
                  var jsonString = speech.substr(speech.indexOf(':') + 1);
                  var message = JSON.parse(jsonString);
                  message.created = new Date();

                  _this3.messages.next([message]);
                } else {
                  _this3.botMessage(speech);
                }

                _this3.isWaiting.next(false);

                _this3.playSound();
              }
            });
          })["catch"](function (reason) {
            console.log(reason);

            _this3.isWaiting.next(false);
          });
        }
      }, {
        key: "handleFirebaseError",
        value: function handleFirebaseError(query) {
          this.sendMessageQuery(query);
        }
      }, {
        key: "playSound",
        value: function playSound() {
          var audio = new Audio('../../../assets/sound/notification.mp3');
          audio.load();
          audio.play()["finally"](function () {
            return console.log('play sound');
          });
        }
      }, {
        key: "handleAction",
        value: function handleAction(response) {
          var actionName = response.result.action;

          switch (actionName) {
            case 'action_check_enquire':
              this.actionCheckEnquire();
              break;

            case 'action_link_account':
              break;
          }
        }
      }, {
        key: "actionCheckEnquire",
        value: function actionCheckEnquire() {
          var _this4 = this;

          this.enquireCol = this.firestore.collection("enquires", function (ref) {
            return ref.where('sessionID', '==', _this4.sessionID);
          });
          this.enquireCol.get().subscribe(function (snapshot) {
            return snapshot.docs.forEach(function (value) {
              return console.log(value.data());
            });
          });
        }
      }]);

      return DialogFlowService;
    }();

    DialogFlowService.ɵfac = function DialogFlowService_Factory(t) {
      return new (t || DialogFlowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]));
    };

    DialogFlowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogFlowService,
      factory: DialogFlowService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogFlowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyD8d0gRBtRgrBlwyqTKoKN1atLmEtEtzzE',
        authDomain: 'renovation-v2.firebaseapp.com',
        databaseURL: 'https://renovation-v2.firebaseio.com',
        projectId: 'renovation-v2',
        storageBucket: 'renovation-v2.appspot.com',
        messagingSenderId: '239397622010',
        appId: '1:239397622010:web:daf39c0a7fba44dd7b7943',
        measurementId: 'G-MNNYQPS1GF'
      },
      dialogFlow: '967dfcdea2aa459d9f6dde1de2cf3267'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\pytho\Desktop\afiq\website-v2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map