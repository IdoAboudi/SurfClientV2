"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("../services/products.service");
var functions_1 = require("../helpers/functions");
var router_1 = require("@angular/router");
var ManageComponent = (function () {
    function ManageComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.message = 'This is the manage component';
        this.products = [];
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ManageComponent.prototype.editProduct = function (product) {
        this._router.navigateByUrl('/edit');
    };
    ManageComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this._productService.deleteProduct(product._id).subscribe(function (response) {
            if (response.success) {
                window.alert('Deleted product of id ' + product._id);
                functions_1.functions.removeIf(_this.products, function (arrProduct) { return arrProduct._id === product._id; });
            }
        });
    };
    return ManageComponent;
}());
ManageComponent = __decorate([
    core_1.Component({
        selector: 'inner-component',
        templateUrl: './manage.component.html',
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService, router_1.Router])
], ManageComponent);
exports.ManageComponent = ManageComponent;
//# sourceMappingURL=manage.component.js.map