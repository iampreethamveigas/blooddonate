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
var content_component_1 = require('./content.component');
var receive_component_1 = require('./receive/receive.component');
var register_component_1 = require('./register/register.component');
var register_module_1 = require('./register/register.module');
var receive_module_1 = require('./receive/receive.module');
// import {ContentRoutModule } from './content.routing.module';
// export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// ];
exports.routes = [
    { path: " ", component: register_component_1.RegisterComponent },
    { path: "Receive", component: receive_component_1.ReceiveComponent }
];
var ContentModule = (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [RouterModule.forRoot(exports.routes),
                register_module_1.RegisterModule,
                receive_module_1.ReceiveModule
            ],
            declarations: [content_component_1.ContentComponent, register_component_1.RegisterComponent, receive_component_1.ReceiveComponent],
            exports: [content_component_1.ContentComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map