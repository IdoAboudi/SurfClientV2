"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var notFound_component_1 = require("./NotFound/notFound.component");
var createnewboard_component_1 = require("./shop/createnewboard/createnewboard.component");
var homepage_component_1 = require("./homepage/homepage.component");
var products_service_1 = require("./services/products.service");
var http_1 = require("@angular/http");
var manage_component_1 = require("./manage/manage.component");
var manage_module_1 = require("./manage/manage.module");
var update_component_1 = require("./manage/update/update.component");
var manage_product_list_component_1 = require("./manage/list/manage.product.list.component");
var forms_1 = require("@angular/forms");
var shop_component_1 = require("./shop/shop.component");
var ngx_google_places_autocomplete_1 = require("ngx-google-places-autocomplete");
var appRoutes = [
    {
        path: '', redirectTo: 'shop', pathMatch: 'full'
    }, {
        path: 'manage', component: manage_component_1.ManageComponent,
        children: [
            {
                path: 'list', component: manage_product_list_component_1.ManageProductListComponent
            },
            {
                path: 'edit/:id', component: update_component_1.UpdateComponent
            }
        ]
    },
    {
        path: 'shop', component: shop_component_1.ShopComponent
    },
    {
        path: 'create', component: createnewboard_component_1.CreateNewBoardComponent
    },
    {
        path: '**', component: notFound_component_1.NotFoundComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            manage_module_1.ManageModule,
            forms_1.FormsModule, ngx_google_places_autocomplete_1.GooglePlaceModule
        ],
        declarations: [app_component_1.AppComponent, shop_component_1.ShopComponent, notFound_component_1.NotFoundComponent, homepage_component_1.HomepageComponent, createnewboard_component_1.CreateNewBoardComponent, manage_component_1.ManageComponent],
        providers: [products_service_1.ProductService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map