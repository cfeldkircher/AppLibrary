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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var product_model_1 = require("../../models/product.model");
var jirasearch_model_1 = require("../../models/jirasearch.model");
var product_service_1 = require("../../services/product.service");
var sharepoint_service_1 = require("../../services/sharepoint.service");
var jira_service_1 = require("../../services/jira.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, router, productService, documentService, jiraService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.documentService = documentService;
        this.jiraService = jiraService;
        this.productCount = 0;
        this.documentCount = 0;
        this.storyCount = 0;
        this.criteria = new jirasearch_model_1.default;
        this.newProduct = new product_model_1.default;
        this.columns = [];
        this.searchTerm = new forms_1.FormControl();
        this.displayHome = true;
        this.addNew = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('userLoggedIn') != 'true') {
            this.router.navigateByUrl('login');
        }
        this.route.params.subscribe(function (params) {
            _this.productParam = params['productId'];
            if (_this.productParam != null) {
                _this.displayHome = false;
            }
        });
        this.loadData();
        this.searchTerm.valueChanges
            .debounceTime(400)
            .subscribe(function (res1) {
            _this.documentService.documentSearch(res1)
                .subscribe(function (data) {
                _this.documentList = data.result;
                if (_this.documentList != null) {
                    _this.documentCount = _this.documentList.length;
                }
            });
            _this.criteria.criteria = res1;
            _this.jiraService.getJiraStories(_this.criteria)
                .subscribe(function (res) {
                _this.storyList = res.result.data;
                if (_this.storyList != null) {
                    _this.storyCount = _this.storyList.length;
                }
            });
        });
    };
    SearchComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.productService.productlistAll().subscribe(function (res) {
                                _this.productList = res.result.data;
                                if (_this.productList != null) {
                                    _this.productCount = _this.productList.length;
                                }
                                _this.getColumnList();
                                if (_this.productParam != null) {
                                    var filteredList = _this.productList.filter(function (f) { return f.ProductID == _this.productParam; });
                                    _this.selectedProduct = filteredList[0];
                                }
                            }, function (err) {
                                console.log("Error occured");
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.getColumnList = function () {
        var prod = new product_model_1.default();
        for (var _i = 0, _a = Object.keys(prod); _i < _a.length; _i++) {
            var key = _a[_i];
            this.columns.push(key);
        }
    };
    SearchComponent.prototype.getProductList = function () {
        var _this = this;
        this.productService.productlistAll().subscribe(function (res) {
            _this.productList = res.result.data;
            if (_this.productList != null) {
                _this.productCount = _this.productList.length;
            }
        });
    };
    SearchComponent.prototype.searchDocument = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.documentService.documentSearch(name).subscribe(function (res) {
                                _this.documentList = res.result;
                                if (_this.documentList != null) {
                                    _this.documentCount = _this.documentList.length;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.searchJira = function (criteria) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.jiraService.getJiraStories(criteria).subscribe(function (res) {
                                _this.storyList = res.result.data;
                                if (_this.storyList != null) {
                                    _this.storyCount = _this.storyList.length;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.addNewOne = function () {
        this.router.navigateByUrl('productedit');
    };
    SearchComponent.prototype.logOut = function () {
        sessionStorage.removeItem('userLoggedIn');
        this.router.navigateByUrl('login');
    };
    SearchComponent.prototype.homeClick = function () {
        this.router.navigateByUrl('');
    };
    SearchComponent.prototype.onFilter = function (event, dt) {
        this.productCount = event.filteredValue.length;
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'wiki-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            product_service_1.ProductService,
            sharepoint_service_1.SharepointService,
            jira_service_1.JiraService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map