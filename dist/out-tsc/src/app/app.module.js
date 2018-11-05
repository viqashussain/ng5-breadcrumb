"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var app_component_2 = require("./app.component");
var app_routing_1 = require("./app.routing");
var breadcrumb_module_1 = require("./components/breadcrumb/breadcrumb.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        app_component_2.Component1,
                        app_component_2.Component2,
                        app_component_2.Component3,
                        app_component_2.Component4
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        app_routing_1.routingModule,
                        breadcrumb_module_1.Ng5BreadcrumbModule.forRoot()
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map