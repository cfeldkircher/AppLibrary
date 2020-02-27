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
var SharepointService = /** @class */ (function () {
    function SharepointService(http) {
        this.http = http;
        this.api_url = appSettings_1.default.RCMWiki_API_EndPoint;
        this.listUrl = this.api_url + "/documents";
        this.pageUrl = this.api_url + "/page";
        this.searchUrl = this.api_url + "/documents/search";
    }
    SharepointService.prototype.documentlistAll = function (path) {
        return this.http.post(this.listUrl + '/all', path, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    SharepointService.prototype.documentSearch = function (name) {
        return this.http.get(this.searchUrl + '/' + name, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    SharepointService.prototype.pageContent = function (page) {
        return this.http.post(this.pageUrl + '/content', page, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    SharepointService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SharepointService);
    return SharepointService;
}());
exports.SharepointService = SharepointService;
//# sourceMappingURL=sharepoint.service.js.map