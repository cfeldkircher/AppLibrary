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
var kbitem_model_1 = require("../../../models/kbitem.model");
var kbitem_service_1 = require("../../../services/kbitem.service");
var kbcomment_model_1 = require("../../../models/kbcomment.model");
var kbcomment_service_1 = require("../../../services/kbcomment.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
var KnowledgebaseComponent = /** @class */ (function () {
    function KnowledgebaseComponent(route, router, kbItemService, kbCommentService) {
        this.route = route;
        this.router = router;
        this.kbItemService = kbItemService;
        this.kbCommentService = kbCommentService;
        this.displayDialogAdd = false;
        this.displayDialogComment = false;
        this.newItem = new kbitem_model_1.default;
        this.itemCount = 0;
        this.newComment = new kbcomment_model_1.default;
        this.commentCount = 0;
        this.displayItemMessage = false;
        this.displayCommentMessage = false;
    }
    KnowledgebaseComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('userLoggedIn') != 'true') {
            this.router.navigateByUrl('login');
        }
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.getItems(this.appId);
        this.getCommentsbyApp(this.appId);
    };
    KnowledgebaseComponent.prototype.addItemClick = function (form) {
        this.newItem.productID = this.appId;
        this.newItem.enteredBy = this.user.userName;
        this.insertItem(this.newItem, form);
    };
    KnowledgebaseComponent.prototype.addCommentClick = function (form) {
        this.newComment.enteredBy = this.user.userName;
        this.insertComment(this.newComment, form);
    };
    KnowledgebaseComponent.prototype.getItems = function (app) {
        var _this = this;
        this.kbItemService.getKbItemsbyProduct(app).subscribe(function (res) {
            _this.itemList = res.result.data;
            _this.itemCount = _this.itemList.length;
        });
    };
    KnowledgebaseComponent.prototype.getCommentsbyApp = function (product) {
        var _this = this;
        this.kbCommentService.getKbCommentsbyProduct(product).subscribe(function (res) {
            _this.commentList = res.result.data;
            _this.commentCount = _this.commentList.length;
        });
    };
    KnowledgebaseComponent.prototype.insertItem = function (item, form) {
        var _this = this;
        try {
            this.kbItemService.insertKbItembyProduct(item).subscribe(function (res) {
                if (res.result.message == 'Success') {
                    _this.getItems(_this.appId);
                    _this.displayDialogAdd = false;
                    form.resetForm();
                    _this.newItem = new kbitem_model_1.default;
                }
                else {
                    _this.itemMessage = res.result.message;
                    _this.displayItemMessage = true;
                }
            });
        }
        catch (err) {
        }
    };
    KnowledgebaseComponent.prototype.insertComment = function (comment, form) {
        var _this = this;
        try {
            this.kbCommentService.insertKbComment(comment).subscribe(function (res) {
                if (res.result.message == 'Success') {
                    _this.getCommentsbyApp(_this.appId);
                    _this.displayDialogComment = false;
                    form.resetForm();
                    _this.newComment = new kbcomment_model_1.default;
                }
                else {
                    _this.commentMessage = res.result.message;
                    _this.displayCommentMessage = true;
                }
            });
        }
        catch (err) {
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], KnowledgebaseComponent.prototype, "appId", void 0);
    KnowledgebaseComponent = __decorate([
        core_1.Component({
            selector: 'wiki-knowledgebase',
            templateUrl: './knowledgebase.component.html',
            styleUrls: ['./knowledgebase.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            kbitem_service_1.KnowledgebaseItemService,
            kbcomment_service_1.KnowledgebaseCommentService])
    ], KnowledgebaseComponent);
    return KnowledgebaseComponent;
}());
exports.KnowledgebaseComponent = KnowledgebaseComponent;
//# sourceMappingURL=knowledgebase.component.js.map