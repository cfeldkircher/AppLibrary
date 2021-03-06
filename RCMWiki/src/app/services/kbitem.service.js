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
var KnowledgebaseItemService = /** @class */ (function () {
    function KnowledgebaseItemService(http) {
        this.http = http;
        this.api_url = appSettings_1.default.RCMWiki_API_EndPoint;
        this.kbUrl = this.api_url + "/knowledgebase/items";
    }
    KnowledgebaseItemService.prototype.getKbItemsbyProduct = function (productId) {
        return this.http.get(this.kbUrl + '/product/' + productId, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    KnowledgebaseItemService.prototype.insertKbItembyProduct = function (item) {
        return this.http.post(this.kbUrl + '/add', item, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    KnowledgebaseItemService.prototype.updateKbItembyProduct = function (item) {
        return this.http.put(this.kbUrl + '/update', item, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    KnowledgebaseItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KnowledgebaseItemService);
    return KnowledgebaseItemService;
}());
exports.KnowledgebaseItemService = KnowledgebaseItemService;
//# sourceMappingURL=kbitem.service.js.map