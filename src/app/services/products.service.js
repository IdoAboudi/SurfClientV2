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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductService = (function () {
    //this loads the http client into the service automatically
    function ProductService(http) {
        this.http = http;
        this.allProductsUrl = 'http://localhost:8080/api/products';
        this.productUrl = 'http://localhost:8080/api/product/getone/:id';
        this.updateProductUrl = 'http://localhost:8080/api/product/update';
        this.deleteProductUrl = 'http://localhost:8080/api/product/delete/:id';
        this.insertProductUrl = 'http://localhost:8080/api/product/upload';
        // private headers = new Headers();
        this.products = new Observable_1.Observable();
    }
    ProductService.prototype.getAllProducts = function () {
        this.products = this.http.get(this.allProductsUrl)
            .map(function (res) { return res.json(); });
        //...errors if any
        return this.products;
    };
    ProductService.prototype.getOneProduct = function (id) {
        return this.http.get(this.productUrl.replace(':id', id))
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.post(this.updateProductUrl, product);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.get(this.deleteProductUrl.replace(':id', id))
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.insertProduct = function (product) {
        console.log("inserting " + JSON.stringify(product));
        return this.http.post(this.insertProductUrl, product);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map