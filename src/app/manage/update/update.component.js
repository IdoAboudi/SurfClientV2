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
var products_service_1 = require("../../services/products.service");
var router_1 = require("@angular/router");
var UpdateComponent = (function () {
    function UpdateComponent(_productService, activatedRoute, _router) {
        this._productService = _productService;
        this.activatedRoute = activatedRoute;
        this._router = _router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.productId = params['id'];
            _this._productService.getOneProduct(_this.productId).subscribe(function (product) {
                _this.product = product;
            });
        });
    };
    UpdateComponent.prototype.execUpdate = function () {
        var _this = this;
        //the product is being sent with the same id and different details so it is updated
        this._productService.updateProduct(this.product).subscribe(function (response) {
            if (response.status != 200) {
                console.error("Update failed " + response.status);
            }
            _this._router.navigate(['manage', 'list']);
        });
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    core_1.Component({
        selector: 'update-component',
        templateUrl: './update.component.html',
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
], UpdateComponent);
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map