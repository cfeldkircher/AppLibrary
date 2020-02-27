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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_model_1 = require("../../../../../app/models/product.model");
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(route, router) {
        this.route = route;
        this.router = router;
        this.product = new product_model_1.default;
        this.collapseSupport = false;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", product_model_1.default)
    ], ProductViewComponent.prototype, "product", void 0);
    ProductViewComponent = __decorate([
        core_1.Component({
            selector: 'wiki-productview',
            templateUrl: './productview.component.html',
            styleUrls: ['./productview.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProductViewComponent);
    return ProductViewComponent;
}());
exports.ProductViewComponent = ProductViewComponent;
//# sourceMappingURL=productview.component.js.map