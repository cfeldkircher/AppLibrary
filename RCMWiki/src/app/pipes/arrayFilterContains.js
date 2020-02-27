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
//import { forEach } from '@angular/router/src/utils/collection';
var core_1 = require("@angular/core");
var SearchPipePipe = /** @class */ (function () {
    function SearchPipePipe() {
    }
    SearchPipePipe.prototype.transform = function (value, columns, filter) {
        var resultArray = [];
        if (filter != null && filter != "") {
            //if (isNaN(filter)) {
            //    for (let item of value) {
            //        if (item.name.includes(filter)) {
            //            resultArray.push(item);
            //        }
            //    }
            //    return resultArray;
            //} else {
            //    for (let item of value) {
            //        if (item.Description.includes(filter)) {
            //            resultArray.push(item);
            //        }
            //}
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                if (item[columns].includes(filter)) {
                    resultArray.push(item);
                }
            }
            return resultArray;
            //}
        }
        return value;
    };
    SearchPipePipe = __decorate([
        core_1.Pipe({
            name: 'searchPipe'
        }),
        __metadata("design:paramtypes", [])
    ], SearchPipePipe);
    return SearchPipePipe;
}());
exports.SearchPipePipe = SearchPipePipe;
//# sourceMappingURL=arrayFilterContains.js.map