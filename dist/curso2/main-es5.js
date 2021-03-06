(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/cgomez/projects/curso-angular/cursoangular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 2,
        vars: 0,
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "about works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
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
    "FK7J":
    /*!********************************************!*\
      !*** ./src/app/random/random.component.ts ***!
      \********************************************/

    /*! exports provided: RandomComponent */

    /***/
    function FK7J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RandomComponent", function () {
        return RandomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _firm_firm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../firm/firm.component */
      "Zkei");

      function RandomComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " ein?");
        }
      }

      function RandomComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "lalalalalalalalala");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background": a0
        };
      };

      var RandomComponent = /*#__PURE__*/function () {
        function RandomComponent() {
          _classCallCheck(this, RandomComponent);

          this.numrandom = Math.floor(Math.random() * 10);
          this.textoalternativo = 'soy el texto alternativo';
        }

        _createClass(RandomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generateRandom",
          value: function generateRandom() {
            return Math.floor(Math.random() * 16777215).toString(16);
          }
        }, {
          key: "colorHex",
          value: function colorHex() {
            this.colorInRandom = '#' + this.generateRandom();
            return this.colorInRandom;
          }
        }]);

        return RandomComponent;
      }();

      RandomComponent.??fac = function RandomComponent_Factory(t) {
        return new (t || RandomComponent)();
      };

      RandomComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RandomComponent,
        selectors: [["app-random"]],
        decls: 10,
        vars: 7,
        consts: [[3, "ngStyle"], [3, "colorNombre"], [3, "click"], ["textoalternativo", ""], [4, "ngIf", "ngIfElse"]],
        template: function RandomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-firm", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RandomComponent_Template_button_click_5_listener() {
              return ctx.condicion = !ctx.condicion;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "boton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RandomComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RandomComponent_div_9_Template, 3, 0, "div", 4);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.colorHex()));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.numrandom, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("colorNombre", ctx.colorInRandom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.condicion)("ngIfElse", _r0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _firm_firm_component__WEBPACK_IMPORTED_MODULE_2__["FirmComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5kb20uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "PRiU":
    /*!******************************************!*\
      !*** ./src/app/books/books.component.ts ***!
      \******************************************/

    /*! exports provided: BooksComponent */

    /***/
    function PRiU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
        return BooksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _book_clicked_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../book-clicked.service */
      "TkeQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function BooksComponent_li_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BooksComponent_li_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Last");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BooksComponent_li_1_strong_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "bestseller!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/information", a1];
      };

      function BooksComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BooksComponent_li_1_span_1_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BooksComponent_li_1_span_2_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BooksComponent_li_1_strong_3_Template, 2, 0, "strong", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BooksComponent_li_1_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var book_r1 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.addBook(book_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = ctx.$implicit;
          var indexBook_r2 = ctx.index;
          var firstBook_r3 = ctx.first;
          var lastBook_r4 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", firstBook_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lastBook_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", indexBook_r2 == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, book_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](book_r1.title);
        }
      }

      var BooksComponent = /*#__PURE__*/function () {
        function BooksComponent(http, BookClicked) {
          _classCallCheck(this, BooksComponent);

          this.http = http;
          this.BookClicked = BookClicked;
        }

        _createClass(BooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.loadList();
          }
        }, {
          key: "loadList",
          value: function loadList() {
            var _this = this;

            this.http.get('http://localhost:3000/books').subscribe(function (response) {
              _this.loading = false;
              _this.books = response;
            }, function (response) {
              _this.errorHttp = true;
            });
          }
        }, {
          key: "addBook",
          value: function addBook(_bookViewed) {
            this.BookClicked.bookViewed(_bookViewed);
          }
        }]);

        return BooksComponent;
      }();

      BooksComponent.??fac = function BooksComponent_Factory(t) {
        return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_book_clicked_service__WEBPACK_IMPORTED_MODULE_2__["BookClickedService"]));
      };

      BooksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BooksComponent,
        selectors: [["app-books"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "routerLink", "click"]],
        template: function BooksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BooksComponent_li_1_Template, 6, 7, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.books);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("author: ", ctx.authorSelected, "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./renderer/renderer.component */
      "T1/D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./books/books.component */
      "PRiU");

      function AppComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Windows elegido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AppComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Linux elegido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AppComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mac elegido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AppComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Ninguno elegido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "yellow": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "green": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "cyan": a0
        };
      };

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'curso2';
        this.color = 'blue';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 27,
        vars: 18,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], [1, "btn-group"], [1, "btn", "btn-light", 3, "ngClass", "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ..\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n.. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-renderer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " uh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " ah\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Ejemplo de switch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AppComponent_li_12_Template, 2, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AppComponent_li_13_Template, 2, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AppComponent_li_14_Template, 2, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AppComponent_li_15_Template, 2, 0, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.so = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Texto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_20_listener() {
              return ctx.color = "yellow";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_22_listener() {
              return ctx.color = "green";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_24_listener() {
              return ctx.color = "cyan";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "app-books");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.title, " app is running!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.so);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "Windows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "Linux");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "Mac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.so);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx.color ? ctx.color : "red"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c1, ctx.color == "yellow"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](14, _c2, ctx.color == "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](16, _c3, ctx.color == "cyan"));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"], _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_3__["RendererComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"]],
        styles: [".yellow[_ngcontent-%COMP%]{\n    background-color: aqua;\n}\n\n.green[_ngcontent-%COMP%]{\n    background-color: crimson;\n}\n\n.cyan[_ngcontent-%COMP%]{\n    background-color: darkmagenta;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnllbGxvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbn1cblxuLmN5YW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "T1/D":
    /*!************************************************!*\
      !*** ./src/app/renderer/renderer.component.ts ***!
      \************************************************/

    /*! exports provided: RendererComponent */

    /***/
    function T1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RendererComponent", function () {
        return RendererComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RendererComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RendererComponent_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.activeMethod(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var alumno_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alumno_r1.nombre);
        }
      }

      var RendererComponent = /*#__PURE__*/function () {
        function RendererComponent(ren) {
          _classCallCheck(this, RendererComponent);

          this.ren = ren;
          this.alumnos = [{
            nombre: "David",
            id: 1
          }, {
            nombre: "El pesao que no hace m??s que hablar",
            id: 2
          }, {
            nombre: "Otro",
            id: 3
          }];
        }

        _createClass(RendererComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "activeMethod",
          value: function activeMethod(element) {
            if (this.clearElement) {
              this.ren.removeClass(this.clearElement, 'miclase');
            }

            this.ren.addClass(element, 'miclase');
            this.clearElement = element;
          }
        }]);

        return RendererComponent;
      }();

      RendererComponent.??fac = function RendererComponent_Factory(t) {
        return new (t || RendererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      RendererComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RendererComponent,
        selectors: [["app-renderer"]],
        decls: 2,
        vars: 1,
        consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["elementDOM", ""]],
        template: function RendererComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RendererComponent_li_1_Template, 3, 1, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.alumnos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["li[_ngcontent-%COMP%]{\n    transition: 0.3s all;\n}\n\n.miclase[_ngcontent-%COMP%]{\n    background: #883364;\n    padding:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJyZW5kZXJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbi5taWNsYXNle1xuICAgIGJhY2tncm91bmQ6ICM4ODMzNjQ7XG4gICAgcGFkZGluZzoxMHB4O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "TkeQ":
    /*!*****************************************!*\
      !*** ./src/app/book-clicked.service.ts ***!
      \*****************************************/

    /*! exports provided: BookClickedService */

    /***/
    function TkeQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookClickedService", function () {
        return BookClickedService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookClickedService = /*#__PURE__*/function () {
        function BookClickedService() {
          _classCallCheck(this, BookClickedService);

          this.books = [];
        }

        _createClass(BookClickedService, [{
          key: "bookViewed",
          value: function bookViewed(_bookViewed2) {
            console.log("bookViewed: ", _bookViewed2);
            this.books.push(_bookViewed2);
          }
        }, {
          key: "viewList",
          value: function viewList() {
            if (this.books.length > 0) {
              return this.books;
            } else {
              return false;
            }
          }
        }]);

        return BookClickedService;
      }();

      BookClickedService.??fac = function BookClickedService_Factory(t) {
        return new (t || BookClickedService)();
      };

      BookClickedService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: BookClickedService,
        factory: BookClickedService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "XaSh":
    /*!**********************************************!*\
      !*** ./src/app/colours/colours.component.ts ***!
      \**********************************************/

    /*! exports provided: ColoursComponent */

    /***/
    function XaSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColoursComponent", function () {
        return ColoursComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _random_random_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../random/random.component */
      "FK7J");

      var ColoursComponent = /*#__PURE__*/function () {
        function ColoursComponent() {
          _classCallCheck(this, ColoursComponent);
        }

        _createClass(ColoursComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ColoursComponent;
      }();

      ColoursComponent.??fac = function ColoursComponent_Factory(t) {
        return new (t || ColoursComponent)();
      };

      ColoursComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ColoursComponent,
        selectors: [["app-colours"]],
        decls: 3,
        vars: 0,
        template: function ColoursComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-random");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-random");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-random");
          }
        },
        directives: [_random_random_component__WEBPACK_IMPORTED_MODULE_1__["RandomComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvdXJzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Z6q3":
    /*!********************************************************!*\
      !*** ./src/app/newcomponent/newcomponent.component.ts ***!
      \********************************************************/

    /*! exports provided: NewcomponentComponent */

    /***/
    function Z6q3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewcomponentComponent", function () {
        return NewcomponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewcomponentComponent = /*#__PURE__*/function () {
        function NewcomponentComponent() {
          _classCallCheck(this, NewcomponentComponent);
        }

        _createClass(NewcomponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewcomponentComponent;
      }();

      NewcomponentComponent.??fac = function NewcomponentComponent_Factory(t) {
        return new (t || NewcomponentComponent)();
      };

      NewcomponentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewcomponentComponent,
        selectors: [["app-newcomponent"]],
        decls: 2,
        vars: 0,
        template: function NewcomponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "newcomponent works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdjb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _newcomponent_newcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newcomponent/newcomponent.component */
      "Z6q3");
      /* harmony import */


      var _random_random_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./random/random.component */
      "FK7J");
      /* harmony import */


      var _colours_colours_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./colours/colours.component */
      "XaSh");
      /* harmony import */


      var _firm_firm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./firm/firm.component */
      "Zkei");
      /* harmony import */


      var _books_books_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./books/books.component */
      "PRiU");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _cover_cover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./cover/cover.component */
      "z3xi");
      /* harmony import */


      var _info_book_info_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./info-book/info-book.component */
      "ldBd");
      /* harmony import */


      var _book_clicked_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./book-clicked.service */
      "TkeQ");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./renderer/renderer.component */
      "T1/D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'information/:bookId',
        component: _info_book_info_book_component__WEBPACK_IMPORTED_MODULE_13__["InfoBookComponent"]
      }, {
        path: 'information',
        redirectTo: '/'
      }, {
        path: '',
        component: _cover_cover_component__WEBPACK_IMPORTED_MODULE_12__["CoverComponent"],
        pathMatch: 'full'
      }, {
        path: 'books',
        component: _books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
      }, {
        path: '**',
        redirectTo: '/'
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_book_clicked_service__WEBPACK_IMPORTED_MODULE_14__["BookClickedService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _newcomponent_newcomponent_component__WEBPACK_IMPORTED_MODULE_5__["NewcomponentComponent"], _random_random_component__WEBPACK_IMPORTED_MODULE_6__["RandomComponent"], _colours_colours_component__WEBPACK_IMPORTED_MODULE_7__["ColoursComponent"], _firm_firm_component__WEBPACK_IMPORTED_MODULE_8__["FirmComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _cover_cover_component__WEBPACK_IMPORTED_MODULE_12__["CoverComponent"], _info_book_info_book_component__WEBPACK_IMPORTED_MODULE_13__["InfoBookComponent"], _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_17__["RendererComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zkei":
    /*!****************************************!*\
      !*** ./src/app/firm/firm.component.ts ***!
      \****************************************/

    /*! exports provided: FirmComponent */

    /***/
    function Zkei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirmComponent", function () {
        return FirmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FirmComponent = /*#__PURE__*/function () {
        function FirmComponent() {
          _classCallCheck(this, FirmComponent);
        }

        _createClass(FirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FirmComponent;
      }();

      FirmComponent.??fac = function FirmComponent_Factory(t) {
        return new (t || FirmComponent)();
      };

      FirmComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FirmComponent,
        selectors: [["app-firm"]],
        inputs: {
          colorNombre: "colorNombre"
        },
        decls: 1,
        vars: 1,
        template: function FirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.colorNombre, "\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJtLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _book_clicked_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../book-clicked.service */
      "TkeQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_ul_14_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var viewedBook_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](viewedBook_r2.title);
        }
      }

      function HeaderComponent_ul_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HeaderComponent_ul_14_li_1_Template, 2, 1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.viewedBooks.viewList());
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/books"];
      };

      var _c2 = function _c2() {
        return ["/about"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(viewedBooks) {
          _classCallCheck(this, HeaderComponent);

          this.viewedBooks = viewedBooks;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_book_clicked_service__WEBPACK_IMPORTED_MODULE_1__["BookClickedService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 15,
        vars: 7,
        consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-body", "border-bottom", "shadow-sm"], [1, "h5", "my-0", "me-md-auto", "fw-normal"], [1, "my-2", "my-md-0", "me-md-3"], ["routerLinkActive", "cyan", 1, "p-2", "text-dark", 3, "routerLink"], ["routerLinkActive", "yellow", 1, "p-2", "text-dark", 3, "routerLink"], ["routerLinkActive", "green", 1, "p-2", "text-dark", 3, "routerLink"], ["href", "#", 1, "btn", "btn-outline-primary"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Angular curso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Inicio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Books");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Libros vistos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, HeaderComponent_ul_14_Template, 2, 1, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.viewedBooks.viewList());
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ldBd":
    /*!**************************************************!*\
      !*** ./src/app/info-book/info-book.component.ts ***!
      \**************************************************/

    /*! exports provided: InfoBookComponent */

    /***/
    function ldBd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoBookComponent", function () {
        return InfoBookComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var InfoBookComponent = /*#__PURE__*/function () {
        function InfoBookComponent(userRoute) {
          _classCallCheck(this, InfoBookComponent);

          this.userRoute = userRoute;
          this.books = [{
            id: 1,
            title: 'libro 1',
            author: 'pepe'
          }, {
            id: 2,
            title: 'libro 2',
            author: 'luis'
          }, {
            id: 3,
            title: 'libro 3',
            author: 'manuel'
          }, {
            id: 4,
            title: 'libro 4',
            author: 'juan'
          }, {
            id: 5,
            title: 'libro 5',
            author: 'javier'
          }, {
            id: 6,
            title: 'libro 6',
            author: 'keith'
          }];
        }

        _createClass(InfoBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userRoute.params.subscribe( //params: metodo asincorono que tiene un subscribe
            //params: metodo asincorono que tiene un subscribe
            function (params) {
              console.log(params);
              _this2.bookId = params['bookId'];
              _this2.bookSelected = _this2.bookSearch();
            });
          }
        }, {
          key: "filterId",
          value: function filterId(book) {
            return book.id = this;
          }
        }, {
          key: "bookSearch",
          value: function bookSearch() {
            return this.books.filter(this.filterId, this.bookId)[0];
          }
        }]);

        return InfoBookComponent;
      }();

      InfoBookComponent.??fac = function InfoBookComponent_Factory(t) {
        return new (t || InfoBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      InfoBookComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: InfoBookComponent,
        selectors: [["app-info-book"]],
        decls: 4,
        vars: 2,
        template: function InfoBookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Title: ", ctx.bookSelected.author, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Author: ", ctx.bookSelected.title, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWJvb2suY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "z3xi":
    /*!******************************************!*\
      !*** ./src/app/cover/cover.component.ts ***!
      \******************************************/

    /*! exports provided: CoverComponent */

    /***/
    function z3xi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoverComponent", function () {
        return CoverComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CoverComponent = /*#__PURE__*/function () {
        function CoverComponent() {
          _classCallCheck(this, CoverComponent);
        }

        _createClass(CoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CoverComponent;
      }();

      CoverComponent.??fac = function CoverComponent_Factory(t) {
        return new (t || CoverComponent)();
      };

      CoverComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CoverComponent,
        selectors: [["app-cover"]],
        decls: 2,
        vars: 0,
        template: function CoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "cover works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map