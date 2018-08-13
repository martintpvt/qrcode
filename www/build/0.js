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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_todos_todos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ItemPage = /** @class */ (function () {
    function ItemPage(navCtrl, navParams, barcode, formBuilder, http, todoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcode = barcode;
        this.formBuilder = formBuilder;
        this.http = http;
        this.todoService = todoService;
        this.itemsReady = false;
        this.item = this.formBuilder.group({
            nivel1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nivel2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nivel3: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            qrcode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            marca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            modelo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            serie: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            observacion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(200)])]
        });
        this.http.get('./assets/data/nombres.json').map(function (res) { return res; }).subscribe(function (data) {
            _this.items = data;
            _this.itemsReady = true;
        });
    }
    /*
        onChange() {
            this.http.get('./assets/data/datos_hc.json').map(res => res).subscribe(data => {
                for(var i = 0; i < 186; i++) {
                    if(data[i].codigo == this.item.controls['nombre'].value) {
                        //this.item.controls['descripcion'].setValue(data[i].NOMBRE_STD);
                    }
                }
            });
        }
        */
    ItemPage.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, code;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.barcode.scan()];
                    case 1:
                        _a.results = _b.sent();
                        code = this.results.text;
                        this.item.controls['qrcode'].setValue(code);
                        this.http.get('./assets/data/datos_hc.json').map(function (res) { return res; }).subscribe(function (data) {
                            /*
                            for(var i = 0; i < 186; i++) {
                                if(data[i].CODIGO_ACTUAL == code) {
                                    console.log(data[i].DESCRIPCION);
                                }
                            }
                            */
                            _this.objects = data;
                            for (var _i = 0, _a = _this.objects; _i < _a.length; _i++) {
                                var a = _a[_i];
                                console.log(code == a.CODIGO_ACTUAL);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemPage.prototype.submitItem = function () {
        this.todoService.createTodo({
            nivel1: this.item.controls['nivel1'].value,
            nivel2: this.item.controls['nivel2'].value,
            nivel3: this.item.controls['nivel3'].value,
            codigo: this.item.controls['qrcode'].value,
            nombre: this.item.controls['nombre'].value,
            descripcion: this.item.controls['descripcion'].value,
            marca: this.item.controls['marca'].value,
            modelo: this.item.controls['modelo'].value,
            serie: this.item.controls['serie'].value,
            estado: this.item.controls['estado'].value,
            observacion: this.item.controls['observacion'].value,
            timestamp: new Date().toLocaleDateString()
        });
        this.item.controls['qrcode'].reset();
        this.item.controls['nombre'].reset();
        this.item.controls['descripcion'].reset();
        this.item.controls['marca'].reset();
        this.item.controls['modelo'].reset();
        this.item.controls['serie'].reset();
        this.item.controls['estado'].reset();
        this.item.controls['observacion'].reset();
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\marti\OneDrive\Documents\ionic\qrCodeHC\src\pages\item\item.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Item</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="item" (ngSubmit)="submitItem()">\n		<h1>Ubicación</h1>\n		<ion-item>\n			<ion-input placeholder="Nivel 1" type="text" formControlName="nivel1"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Nivel 2" type="text" formControlName="nivel2"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Nivel 3" type="text" formControlName="nivel3"></ion-input>\n		</ion-item>\n		<h1>Item</h1>\n		<ion-item>\n			<ion-input placeholder="Code" type="text" formControlName="qrcode" disabled></ion-input>\n		</ion-item>\n		<ion-item *ngIf="itemsReady">\n			<ion-label>Nombre</ion-label>\n			<ion-select formControlName="nombre">\n				<ion-option *ngFor="let x of items" [value]="x.CODIGO">\n					{{ x.NOMBRE_STD }}\n				</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-textarea placeholder="Descripción" formControlName="descripcion"></ion-textarea>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Marca" type="text" formControlName="marca"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Modelo" type="text" formControlName="modelo"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input placeholder="Serie" type="text" formControlName="serie"></ion-input>\n		</ion-item>\n		<ion-list radio-group formControlName="estado">\n			<ion-list-header>\n				Estado\n			</ion-list-header>\n			<ion-item>\n				<ion-label>Bueno</ion-label>\n				<ion-radio value="0"></ion-radio>\n			</ion-item>\n			<ion-item>\n				<ion-label>Regular</ion-label>\n				<ion-radio value="1"></ion-radio>\n			</ion-item>\n			<ion-item>\n				<ion-label>Malo</ion-label>\n				<ion-radio value="2"></ion-radio>\n			</ion-item>\n		</ion-list>\n		<ion-item>\n			<ion-textarea placeholder="Observación" formControlName="observacion"></ion-textarea>\n		</ion-item>\n		<ion-row>\n			<ion-col>\n				<button ion-button type="button" (click)="scanBarcode()">Scan Barcode</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button type="submit" [disabled]="!item.valid">Add item</button>\n			</ion-col>\n		</ion-row>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\marti\OneDrive\Documents\ionic\qrCodeHC\src\pages\item\item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_todos_todos__["a" /* TodosProvider */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(101);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map