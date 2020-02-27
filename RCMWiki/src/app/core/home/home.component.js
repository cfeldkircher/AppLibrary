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
var relativeurl_model_1 = require("../../models/relativeurl.model");
var sharepoint_service_1 = require("../../services/sharepoint.service");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
        this.page = new relativeurl_model_1.default();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPageContent();
    };
    HomeComponent.prototype.getPageContent = function () {
        var _this = this;
        this.page.relativePath = 'Knowledgebase%20Wiki/Home.aspx';
        this.pageService.pageContent(this.page).subscribe(function (res) {
            _this.pageContent = res.result;
            _this.pageObservable = _this.pageLoaded().pipe(operators_1.share());
        });
    };
    HomeComponent.prototype.pageLoaded = function () {
        return of_1.of({
            loaded: true
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'wiki-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            sharepoint_service_1.SharepointService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map