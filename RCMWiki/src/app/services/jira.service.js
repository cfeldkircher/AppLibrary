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
var JiraService = /** @class */ (function () {
    function JiraService(http) {
        this.http = http;
        this.api_url = appSettings_1.default.RCMWiki_API_EndPoint;
        this.jiraUrl = this.api_url + "/jira";
    }
    JiraService.prototype.getJiraStories = function (criteria) {
        return this.http.post(this.jiraUrl, criteria, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    };
    JiraService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], JiraService);
    return JiraService;
}());
exports.JiraService = JiraService;
//# sourceMappingURL=jira.service.js.map