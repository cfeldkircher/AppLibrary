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
var rxjs_1 = require("rxjs");
require("rxjs/add/observable/timer");
var product_model_1 = require("../../../../app/models/product.model");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router) {
        this.route = route;
        this.router = router;
        this.isEdit = false;
        this.displayMessage = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.receiveIsEdit = function ($event) {
        this.isEdit = $event;
    };
    ProductComponent.prototype.receiveMessage = function ($event) {
        this.setTimer();
        this.returnMessage = $event;
        this.displayMessage = true;
    };
    ProductComponent.prototype.receiveIsSuccess = function ($event) {
        this.isSuccess = $event;
    };
    ProductComponent.prototype.setTimer = function () {
        var _this = this;
        this.timer = rxjs_1.Observable.timer(2500);
        this.messageSubscription = this.timer.subscribe(function () {
            _this.returnMessage = null;
            _this.displayMessage = false;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", product_model_1.default)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'wiki-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map