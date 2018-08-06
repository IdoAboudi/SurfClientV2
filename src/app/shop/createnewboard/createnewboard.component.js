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
var Product_1 = require("../../models/Product");
var router_1 = require("@angular/router");
var CreateNewBoardComponent = (function () {
    function CreateNewBoardComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.submitted = false;
        this.model = new Product_1.Product();
    }
    CreateNewBoardComponent.prototype.ngOnDestroy = function () {
    };
    CreateNewBoardComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.submitted) {
            this.submitted = true;
            this._productService.insertProduct(this.model).subscribe(function (response) {
                if (response.status != 200) {
                    console.error("Error inserting product " + response.statusText);
                }
                _this._router.navigate(['shop']);
            });
        }
    };
    return CreateNewBoardComponent;
}());
CreateNewBoardComponent = __decorate([
    core_1.Component({
        selector: 'inner-component',
        templateUrl: './createnewboard.component.html',
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService, router_1.Router])
], CreateNewBoardComponent);
exports.CreateNewBoardComponent = CreateNewBoardComponent;
//# sourceMappingURL=createnewboard.component.js.map