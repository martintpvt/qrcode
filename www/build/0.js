webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemPageModule = /** @class */ (function () {
    function ItemPageModule() {
    }
    ItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item__["a" /* ItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item__["a" /* ItemPage */]),
            ],
        })
    ], ItemPageModule);
    return ItemPageModule;
}());

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemPage = /** @class */ (function () {
    function ItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemPage');
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\marti\OneDrive\Documents\ionic\qrCodeHC\src\pages\item\item.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Item</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="item" (ngSubmit)="submitItem()">\n		<h1>Ubicación</h1>\n		<ion-item>\n			<ion-input placeholder="Nivel 1" type="text" formControlName="nivel1"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Nivel 2" type="text" formControlName="nivel2"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Nivel 3" type="text" formControlName="nivel3"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Nivel 4" type="text" formControlName="nivel4"></ion-input>\n		</ion-item>\n		<h1>Item</h1>\n		<ion-item>\n			<ion-input placeholder="QR Code" type="text" formControlName="qrcode" disabled></ion-input>\n		</ion-item>\n		<ion-item *ngIf="itemsReady">\n			<ion-label>Nombre</ion-label>\n			<ion-select formControlName="nombre" (ionChange)="onChange()">\n				<ion-option *ngFor="let x of items" [value]="x.codigo">\n					{{ x.nombre }}\n				</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-textarea placeholder="Descripción" formControlName="descripcion" min="0" max="50"></ion-textarea>\n		</ion-item>\n		<ion-row>\n			<ion-col col-12>\n				<ion-img col-12 [src]="picture" style="contain: content; max-width: 100%;"></ion-img>\n			</ion-col>\n		</ion-row>\n		<ion-item>\n			<ion-input placeholder="Marca" type="text" formControlName="marca"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Modelo" type="text" formControlName="modelo"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Serie" type="text" formControlName="serie"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label>Largo</ion-label>\n			<ion-input type="number" formControlName="largo"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label>Ancho</ion-label>\n			<ion-input type="number" formControlName="ancho"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label>Profundidad</ion-label>\n			<ion-input type="number" formControlName="profundidad"></ion-input>\n		</ion-item>\n		<ion-list radio-group formControlName="estado">\n			<ion-list-header>\n				Estado\n			</ion-list-header>\n			<ion-item>\n				<ion-label>Bueno</ion-label>\n				<ion-radio value="0"></ion-radio>\n			</ion-item>\n			<ion-item>\n				<ion-label>Regular</ion-label>\n				<ion-radio value="1"></ion-radio>\n			</ion-item>\n			<ion-item>\n				<ion-label>Malo</ion-label>\n				<ion-radio value="2"></ion-radio>\n			</ion-item>\n		</ion-list>\n		<ion-item>\n			<ion-textarea placeholder="Observación" formControlName="observacion" min="0" max="50"></ion-textarea>\n		</ion-item>\n		<ion-row>\n			<ion-col>\n				<button ion-button type="button" (click)="scanBarcode()">Scan Barcode</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button type="submit" [disabled]="!item.valid">Add item</button>\n			</ion-col>\n		</ion-row>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\marti\OneDrive\Documents\ionic\qrCodeHC\src\pages\item\item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ })

});
//# sourceMappingURL=0.js.map