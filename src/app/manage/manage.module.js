"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../app.component");
var router_1 = require("@angular/router");
var update_component_1 = require("./update/update.component");
var manage_product_list_component_1 = require("./list/manage.product.list.component");
var forms_1 = require("@angular/forms");
var manageRoutes = [
    { path: 'list', component: manage_product_list_component_1.ManageProductListComponent, pathMatch: 'full' },
    { path: 'edit/:id', component: update_component_1.UpdateComponent }
];
var ManageModule = (function () {
    function ManageModule() {
    }
    return ManageModule;
}());
ManageModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forChild(manageRoutes), router_1.RouterModule, forms_1.FormsModule],
        declarations: [update_component_1.UpdateComponent, manage_product_list_component_1.ManageProductListComponent],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        exports: []
    })
], ManageModule);
exports.ManageModule = ManageModule;
//# sourceMappingURL=manage.module.js.map