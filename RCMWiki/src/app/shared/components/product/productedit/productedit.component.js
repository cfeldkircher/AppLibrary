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
var product_service_1 = require("../../../../services/product.service");
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.isInsert = false;
        this.product = new product_model_1.default;
        this.isEdit = new core_1.EventEmitter();
        this.returnMessage = new core_1.EventEmitter();
        this.isSuccess = new core_1.EventEmitter();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('productedit')) {
            this.isInsert = true;
        }
    };
    ProductEditComponent.prototype.saveProduct = function (product) {
        if (this.isInsert) {
            this.insertProduct(product);
        }
        else {
            this.updateProduct(product);
        }
    };
    ProductEditComponent.prototype.cancelEdit = function () {
        if (this.isInsert) {
            this.router.navigateByUrl('');
        }
        else {
            this.isEdit.emit(false);
        }
    };
    ProductEditComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProduct(product).subscribe(function (res) {
            if (res.result.message == "Success") {
                _this.isSuccess.emit(true);
                _this.returnMessage.emit("Success");
                _this.isEdit.emit(false);
            }
            else {
                _this.isSuccess.emit(false);
                _this.returnMessage.emit(res.result.message);
                _this.isEdit.emit(false);
            }
        });
    };
    ProductEditComponent.prototype.insertProduct = function (product) {
        var _this = this;
        this.productService.insertProduct(product).subscribe(function (res) {
            _this.router.navigate(['/search/product', res.result.data]);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", product_model_1.default)
    ], ProductEditComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "isEdit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "returnMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "isSuccess", void 0);
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'wiki-productedit',
            templateUrl: './productedit.component.html',
            styleUrls: ['./productedit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            product_service_1.ProductService])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=productedit.component.js.map