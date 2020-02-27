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
var sharepoint_service_1 = require("../../../services/sharepoint.service");
var relativeurl_model_1 = require("../../../../app/models/relativeurl.model");
var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(route, router, sharepointService) {
        this.route = route;
        this.router = router;
        this.sharepointService = sharepointService;
        this.relativeUrl = new relativeurl_model_1.default();
        this.folders = [];
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        this.getDocumentList(this.product);
    };
    DocumentListComponent.prototype.getDocumentList = function (product) {
        var _this = this;
        this.relativeUrl.relativePath = product;
        this.sharepointService.documentlistAll(this.relativeUrl).subscribe(function (res) {
            _this.documentList = res.result;
        });
    };
    DocumentListComponent.prototype.selectFolder = function (folder) {
        var _this = this;
        var one = new Promise(function (resolve, reject) {
            resolve(_this.folders.push(folder));
        });
        var two = new Promise(function (resolve, reject) {
            resolve(_this.buildPath());
        });
        one.then(function (res) {
            //console.log(this.folders);
        });
        two.then(function (res) {
            var path = _this.product + res;
            _this.getDocumentList(path);
        });
    };
    DocumentListComponent.prototype.folderUp = function () {
        var _this = this;
        var one = new Promise(function (resolve, reject) {
            resolve(_this.removeFolder());
        });
        var two = new Promise(function (resolve, reject) {
            resolve(_this.buildPath());
        });
        one.then(function (res) {
        });
        two.then(function (res) {
            var path = _this.product + res;
            _this.getDocumentList(path);
        });
    };
    DocumentListComponent.prototype.removeFolder = function () {
        this.folders.pop();
    };
    DocumentListComponent.prototype.addFolder = function (folder) {
        this.folders.push(folder);
    };
    DocumentListComponent.prototype.buildPath = function () {
        var relPath = '';
        for (var _i = 0, _a = this.folders; _i < _a.length; _i++) {
            var val = _a[_i];
            relPath = relPath + '/' + val;
        }
        ;
        return relPath;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DocumentListComponent.prototype, "product", void 0);
    DocumentListComponent = __decorate([
        core_1.Component({
            selector: 'wiki-documentlist',
            templateUrl: './documentlist.component.html',
            styleUrls: ['./documentlist.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            sharepoint_service_1.SharepointService])
    ], DocumentListComponent);
    return DocumentListComponent;
}());
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=documentlist.component.js.map