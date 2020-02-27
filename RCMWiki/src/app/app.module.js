"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var table_1 = require("primeng/table");
var dialog_1 = require("primeng/dialog");
var primeng_1 = require("primeng/primeng");
var autocomplete_1 = require("primeng/autocomplete");
var button_1 = require("primeng/button");
var scrollpanel_1 = require("primeng/scrollpanel");
var sidebar_1 = require("primeng/sidebar");
var accordion_1 = require("primeng/accordion");
var panel_1 = require("primeng/panel");
var inputtextarea_1 = require("primeng/inputtextarea");
var app_component_1 = require("./app.component");
var home_component_1 = require("../app/core/home/home.component");
var header_component_1 = require("../app/core/header/header.component");
var login_component_1 = require("../app/shared/components/login/login.component");
var search_component_1 = require("../app/core/search/search.component");
var product_component_1 = require("../app/shared/components/product/product.component");
var productview_component_1 = require("../app/shared/components/product/productview/productview.component");
var productedit_component_1 = require("../app/shared/components/product/productedit/productedit.component");
var documentlist_component_1 = require("../app/shared/components/documentlist/documentlist.component");
var knowledgebase_component_1 = require("../app/shared/components/knowledgebase/knowledgebase.component");
var product_service_1 = require("../app/services/product.service");
var sharepoint_service_1 = require("../app/services/sharepoint.service");
var kbitem_service_1 = require("../app/services/kbitem.service");
var kbcomment_service_1 = require("../app/services/kbcomment.service");
var jira_service_1 = require("../app/services/jira.service");
var domsanitizer_1 = require("../app/pipes/domsanitizer");
var arrayfilter_1 = require("../app/pipes/arrayfilter");
var arrayFilterContains_1 = require("../app/pipes/arrayFilterContains");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'header', component: header_component_1.HeaderComponent },
    { path: 'search/product/:productId', component: search_component_1.SearchComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'productedit', component: productedit_component_1.ProductEditComponent },
    { path: 'productview', component: productview_component_1.ProductViewComponent },
    { path: 'knowledgebase', component: knowledgebase_component_1.KnowledgebaseComponent },
    { path: '', component: search_component_1.SearchComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                table_1.TableModule,
                dialog_1.DialogModule,
                primeng_1.DropdownModule,
                primeng_1.SharedModule,
                autocomplete_1.AutoCompleteModule,
                button_1.ButtonModule,
                scrollpanel_1.ScrollPanelModule,
                sidebar_1.SidebarModule,
                accordion_1.AccordionModule,
                inputtextarea_1.InputTextareaModule,
                panel_1.PanelModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                search_component_1.SearchComponent,
                product_component_1.ProductComponent,
                productview_component_1.ProductViewComponent,
                productedit_component_1.ProductEditComponent,
                documentlist_component_1.DocumentListComponent,
                knowledgebase_component_1.KnowledgebaseComponent,
                domsanitizer_1.SanitizeHtmlPipe,
                arrayfilter_1.FilterPipe,
                arrayFilterContains_1.SearchPipePipe
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                http_1.HttpClientModule,
                product_service_1.ProductService,
                sharepoint_service_1.SharepointService,
                kbitem_service_1.KnowledgebaseItemService,
                kbcomment_service_1.KnowledgebaseCommentService,
                jira_service_1.JiraService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map