webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".active {\r\n  background-color: yellow;\r\n}\r\n\r\nmain {\r\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n  background-color: #f7deef;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout  mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Bruidsjurken4fun</span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['home']\"><i class=\"material-icons\">home</i>Home</a>\r\n        <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['fotos']\"><i class=\"material-icons\">image</i>Foto's</a>\r\n        <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['price']\"><i class=\"material-icons\">attach_money</i>Prijzenlijst</a>\r\n        <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['contact']\"><i class=\"material-icons\">email</i>Contact</a>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['home']\"><i class=\"material-icons\">home</i>Home</a>\r\n      <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['fotos']\"><i class=\"material-icons\">image</i>Foto's</a>\r\n      <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['price']\"><i class=\"material-icons\">attach_money</i>Prijzenlijst</a>\r\n      <a class=\"mdl-navigation__link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['contact']\"><i class=\"material-icons\">email</i>Contact</a>\r\n    </nav>\r\n  </div>\r\n\r\n  <main class=\"mdl-layout__content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fotos_fotos_component__ = __webpack_require__("./src/app/fotos/fotos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__price_price_component__ = __webpack_require__("./src/app/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_simple_slideshow__ = __webpack_require__("./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__fotos_fotos_component__["a" /* FotosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__price_price_component__["a" /* PriceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'my-app' }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutes */], { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* unused harmony export AppComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fotos_fotos_component__ = __webpack_require__("./src/app/fotos/fotos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__price_price_component__ = __webpack_require__("./src/app/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");




var AppRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'fotos', component: __WEBPACK_IMPORTED_MODULE_1__fotos_fotos_component__["a" /* FotosComponent */] },
    { path: 'price', component: __WEBPACK_IMPORTED_MODULE_2__price_price_component__["a" /* PriceComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] }
];
var AppComponents = [
    __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_1__fotos_fotos_component__["a" /* FotosComponent */],
    __WEBPACK_IMPORTED_MODULE_2__price_price_component__["a" /* PriceComponent */],
    __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */]
];


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width:855px) {\r\n  .foto-home {\r\n    margin: 5px;\r\n    max-width: 70%;\r\n    height: 350px;\r\n    width: auto \\9; /* ie8 */\r\n    border-radius: 40%;\r\n    background: url('IMG_9519.017f03df0f6feab16f25.JPG') top / cover;\r\n  }\r\n\r\n  a {\r\n    color: -webkit-link !important\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 5px;\">\r\n  Het is zo leuk om een jurk aan te hebben, zonder dat je erin gaat trouwen of dat je er een gaat kopen. <br>\r\n  Het is gewoon voor de lol, als leuk uitje bedoeld voor vrouwen onder elkaar. <br>\r\n  <br>\r\n  <i>Bruidsjurken4fun</i> heeft meer dan 200 jurken in allerlei modellen en maten. <br>\r\n  <br>\r\n  Daarnaast ook ongeveer 70 bruids kinder jurken en sprookjesjurkjes<br>\r\n  <br>\r\n  Door deze uitgebreide collectie is er voor iedereen wel een jurk die zij mooi vindt en die past. <br>\r\n  Beschikbare merken: Maggie Sotero,  La Piethe,  Bridal,  Sincerity, Linnea Raffaelli,  Alexander Axu, e.a. <br>\r\n<br>\r\n  Met een mooie groet,<br>\r\n  <br>\r\n  Clavia <br>\r\n  <br>\r\n\r\n<div style=\"position: relative;width: 100%;top: 15%;display: flex\">\r\n  <i class=\"material-icons\">email</i>\r\n  <span style=\"position: relative; left: 10px\">\r\n      info@bruidsjurken4fun.nl\r\n  </span>\r\n</div>\r\n  <div style=\"position: relative;width: 100%;top: 10%;display: flex\">\r\n    <i class=\"material-icons\">location_on</i>\r\n    <span style=\"position: relative; left: 10px\">\r\n      Zuidoostbeemster\r\n  </span>\r\n  </div>\r\n  <div style=\"position: relative;width: 100%;top: 15%;display: flex\">\r\n    <i class=\"material-icons\">facebook</i>\r\n    <a style=\"position: relative; left: 10px\"  href=\"https://www.facebook.com/bruidsjurken4fun/?locale=nl_NL\">\r\n        Volg me op facebook\r\n    </a>\r\n  </div>\r\n  <div style=\"position: relative;width: 100%;top: 15%;display: flex\">\r\n    <i class=\"material-icons\">photo_camera</i>\r\n    <a style=\"position: relative; left: 10px\"  href=\"  https://www.instagram.com/bruidsjurken4fun/#\">\r\n        Volg me op instagram\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<img class=\"foto-home\" src=\"../../assets/IMG_9519.JPG\"/>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/fotos/fotos.component.css":
/***/ (function(module, exports) {

module.exports = ".image-collage {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (minmax(200px, 1fr))[auto-fill];\r\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n  gap: 15px;\r\n  padding: 15px;\r\n}\r\n\r\n.image-item {\r\n  position: relative;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.image-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 10px;\r\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: -webkit-transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out;\r\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\r\n}\r\n\r\n.image-item:hover img {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}"

/***/ }),

/***/ "./src/app/fotos/fotos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-collage\">\r\n  <div class=\"image-item\" *ngFor=\"let image of images\">\r\n    <img [src]=\"image.src\" [alt]=\"image.alt\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/fotos/fotos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FotosComponent = /** @class */ (function () {
    function FotosComponent() {
        this.images = [
            { src: 'assets/IMG_1249.JPG' },
            { src: 'assets/IMG_2707.JPG' },
            { src: 'assets/IMG_2883.JPG' },
            { src: 'assets/IMG_7163.JPG' },
            { src: 'assets/IMG_8414.JPG' },
            { src: 'assets/IMG_8587.JPG' },
            { src: 'assets/fotos-page3.jpg' },
            { src: 'assets/fotos-page4.jpg' },
            { src: 'assets/fotos-page5.jpg' },
            { src: 'assets/fotos-page6.jpg' },
            { src: 'assets/fotos-page7.jpg' },
            { src: 'assets/fotos-page8.jpg' },
            { src: 'assets/fotos-page9.jpg' },
            { src: 'assets/fotos-page10.jpg' },
            { src: 'assets/fotos-page11.jpg' },
            { src: 'assets/fotos-page12.jpg' },
            { src: 'assets/fotos-page13.jpg' },
            { src: 'assets/fotos-page14.jpg' },
            { src: 'assets/fotos-page15.jpg' },
            { src: 'assets/fotos-page16.jpg' },
            { src: 'assets/foto-home1.jpg' },
            { src: 'assets/foto-home2.jpg' },
            { src: 'assets/foto-home3.jpg' },
            { src: 'assets/foto-home4.jpg' },
        ];
    }
    FotosComponent.prototype.ngOnInit = function () {
    };
    FotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fotos',
            template: __webpack_require__("./src/app/fotos/fotos.component.html"),
            styles: [__webpack_require__("./src/app/fotos/fotos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width:855px) {\r\n  .foto-home {\r\n    left: 0;\r\n    margin: 5px;\r\n    max-width: 70%;\r\n    height: 350px;\r\n    width: auto \\9; /* ie8 */\r\n    border-radius: 30%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 5px;\">\r\n  <h5 style=\"color: red\"> Het mooiste uitje! </h5>\r\n\r\n  Vaak mag en kan je alleen een bruidsjurk passen als je gaat trouwen. Maar nu niet meer!<br>\r\n  Bij <i itemprop=\"name\" >bruidsjurken4fun</i> kun je samen met vriendinnen, zussen, collega’s, moeder, oma of voor een vrijgezellenparty  bruidsjurken passen voor de lol.<br><br>\r\n\r\n  Een bruidsjurken party duurt ongeveer twee uur en is inclusief koffie, thee en feestelijke bubbeltjeswijn. En is zo leuk.\r\n</div>\r\n<div class=\"foto-home\">\r\n  <slideshow\r\n  backgroundSize=\"contain\"\r\n             [height]=\"'525px'\"\r\n             [autoPlay]=\"true\"\r\n             [showArrows]=\"false\"\r\n             [imageUrls]=\"imageSources\"\r\n             [backgroundPosition]=\"'center center'\">\r\n  </slideshow>\r\n</div>\r\n<span itemprop=\"address\" itemscope itemtype=\"http://schema.org/PostalAddress\">\r\n<meta itemprop=\"addressLocality\" content=\"ZuidoostBeemster\">\r\n<meta itemprop=\"addressRegion\" content=\"Noord-Holland\">\r\n<meta itemprop=\"addressCountry\" content=\"Nederland\"></span>\r\n<meta itemprop=\"url\" content=\"http://www.bruidsjurken4fun.nl/\">\r\n<meta itemprop=\"telephone\" content=\"\">\r\n<meta itemprop=\"email\" content=\"info@bruidsjurken4fun.nl\">\r\n<meta itemprop=\"priceRange\" content=\"€ 18\">\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageSources = [
            '../../assets/IMG_1249.JPG',
            '../../assets/aablauw.jpg',
            '../../assets/broekpak.JPG',
            '../../assets/foto1.JPG',
            '../../assets/friends.JPG',
            '../../assets/gekleurd.JPG',
            '../../assets/handbalteam.JPG',
            '../../assets/IMG_6599.JPG',
            '../../assets/rianne.JPG',
            '../../assets/samen1.JPG',
            '../../assets/selfie.jpg'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width:855px) {\r\n  .foto-price {\r\n\r\n    margin: 5px;\r\n    max-width: 70%;\r\n    height: 350px;\r\n    width: auto \\9; /* ie8 */\r\n    border-radius: 40%;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 5px;\">\r\n  <h4 style=\"color: red;text-decoration: underline;\"> Kosten  party </h4>\r\n\r\n  Kosten bedragen  23 euro per persoon. <br>\r\nParty duurt 2 uur. <br>\r\nAls je met 2 personen komt, betaal je ook 23 euro per persoon maar duurt de party anderhalf uur. <br>\r\nKinderen tot 12 jaar zijn ook welkom en betalen 15 euro per kind. <br>\r\nKosten zijn inclusief koffie en thee en een glas bubbelwijn <br>\r\n<br>\r\n\r\nkosten van een mode show bij verzorgingshuizen is 300 euro. <br>\r\nDit is inclusief de ladyspeaker, de modellen, bruidsjurken en reiskosten. <br>\r\nPersoneel of vrijwilligers kunnen ook meelopen ook daarvoor worden bruidsjurken verzorgd voor deze prijs. <br>\r\n</div>\r\n<!--<img class=\"foto-price\" src=\"../../assets/werverhoof.jpg\"/>-->\r\n"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-price',
            template: __webpack_require__("./src/app/price/price.component.html"),
            styles: [__webpack_require__("./src/app/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map