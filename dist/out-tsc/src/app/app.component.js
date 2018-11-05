"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var breadcrumb_service_1 = require("./components/breadcrumb/breadcrumb.service");
var AppComponent = (function () {
    function AppComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
        breadcrumbService.addFriendlyNameForRouteRegex('^/comp1/comp[0-9]$', 'Comp 2');
        breadcrumbService.hideRoute('/comp1/comp2/comp3');
        breadcrumbService.addCallbackForRouteRegex('/comp1/comp2/comp3/[0-9]', this.getName);
    }
    AppComponent.prototype.getName = function (id) {
        return 'Comp ' + id;
    };
    AppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-root',
                    template: "\n      <div class=\"container\">\n      <h1>Breadcrumb Example</h1>\n      <breadcrumb></breadcrumb>\n      <router-outlet></router-outlet>\n      </div>\n  ",
                    styleUrls: ['./app.component.css']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: breadcrumb_service_1.BreadcrumbService, },
    ]; };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Component1 = (function () {
    function Component1(router) {
        this.router = router;
    }
    Component1.prototype.goTo = function () {
        this.router.navigate(['/comp1/comp2']);
    };
    Component1.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'comp1',
                    template: "\n        <h3>This is Component 1</h3>\n        <button (click)=\"goTo()\">Next</button>\n    "
                },] },
    ];
    /** @nocollapse */
    Component1.ctorParameters = function () { return [
        { type: router_1.Router, },
    ]; };
    return Component1;
}());
exports.Component1 = Component1;
var Component2 = (function () {
    function Component2(router) {
        this.router = router;
    }
    Component2.prototype.goTo = function () {
        this.router.navigate(['/comp1/comp2/comp3']);
    };
    Component2.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'comp2',
                    template: "\n        <h3>This is Component 2</h3>\n        <button (click)=\"goTo()\">Next</button>\n    "
                },] },
    ];
    /** @nocollapse */
    Component2.ctorParameters = function () { return [
        { type: router_1.Router, },
    ]; };
    return Component2;
}());
exports.Component2 = Component2;
var Component3 = (function () {
    function Component3(router) {
        this.router = router;
    }
    Component3.prototype.goTo = function () {
        this.router.navigate(['/comp1/comp2/comp3/' + Math.floor(Math.random() * 100)]);
    };
    Component3.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'comp3',
                    template: "\n        <h3>This is Component 3, which is hidden from the breadcrumb</h3>\n        <button (click)=\"goTo()\">Next</button>\n    "
                },] },
    ];
    /** @nocollapse */
    Component3.ctorParameters = function () { return [
        { type: router_1.Router, },
    ]; };
    return Component3;
}());
exports.Component3 = Component3;
var Component4 = (function () {
    function Component4() {
    }
    Component4.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'comp4',
                    template: "\n        <h3>This is Component 4, which uses a callback to display its breadcrumb name</h3>\n    "
                },] },
    ];
    /** @nocollapse */
    Component4.ctorParameters = function () { return []; };
    return Component4;
}());
exports.Component4 = Component4;
//# sourceMappingURL=app.component.js.map