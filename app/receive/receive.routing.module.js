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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var receive_component_1 = require('./receive.component');
var receiveRoutes = [
    { path: 'Receive', component: receive_component_1.ReceiveComponent }
];
var ReceiveRoutingModule = (function () {
    function ReceiveRoutingModule() {
    }
    ReceiveRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(receiveRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], ReceiveRoutingModule);
    return ReceiveRoutingModule;
}());
exports.ReceiveRoutingModule = ReceiveRoutingModule;
//# sourceMappingURL=receive.routing.module.js.map