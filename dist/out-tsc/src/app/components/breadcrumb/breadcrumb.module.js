"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var breadcrumb_component_1 = require("./breadcrumb.component");
var breadcrumb_service_1 = require("./breadcrumb.service");
__export(require("./breadcrumb.component"));
__export(require("./breadcrumb.service"));
var Ng5BreadcrumbModule = (function () {
    function Ng5BreadcrumbModule() {
    }
    Ng5BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng5BreadcrumbModule,
            providers: [breadcrumb_service_1.BreadcrumbService]
        };
    };
    Ng5BreadcrumbModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        breadcrumb_component_1.BreadcrumbComponent
                    ],
                    exports: [
                        breadcrumb_component_1.BreadcrumbComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng5BreadcrumbModule.ctorParameters = function () { return []; };
    return Ng5BreadcrumbModule;
}());
exports.Ng5BreadcrumbModule = Ng5BreadcrumbModule;
//# sourceMappingURL=breadcrumb.module.js.map