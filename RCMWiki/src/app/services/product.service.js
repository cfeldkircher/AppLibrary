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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var appSettings_1 = require("../appSettings");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.api_url = appSettings_1.default.RCMWiki_API_EndPoint;
        this.listUrl = this.api_url + "/product";
    }
    ProductService.prototype.productlistAll = function () {
        return this.http.get(this.listUrl + '/all', {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put(this.listUrl + '/product/edit', product, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    ProductService.prototype.insertProduct = function (product) {
        return this.http.post(this.listUrl + '/product/insert', product, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map