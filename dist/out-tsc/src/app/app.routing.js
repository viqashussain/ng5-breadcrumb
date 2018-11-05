"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
exports.routes = [
    { path: '', redirectTo: '/comp1', pathMatch: 'full' },
    { path: 'comp1', component: app_component_1.Component1 },
    { path: 'comp1/comp2', component: app_component_1.Component2 },
    { path: 'comp1/comp2/comp3', component: app_component_1.Component3 },
    { path: 'comp1/comp2/comp3/:id', component: app_component_1.Component4 }
];
exports.appRoutingProviders = [];
exports.routingModule = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map