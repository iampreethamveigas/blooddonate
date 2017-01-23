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
var SlideComponent = (function () {
    function SlideComponent() {
    }
    SlideComponent.prototype.ngOnInit = function () {
        jQuery(document).ready(function ($) {
            $('#camera_wrap_1').camera({
                thumbnails: true,
                height: '25%',
                loader: 'pie',
                loaderPadding: 1,
                loaderStroke: 5,
                onLoaded: function () {
                    $('#camera_wrap_1').find('.camera_next').html('<i class="icon-angle-right"></i>');
                    $('#camera_wrap_1').find('.camera_prev').html('<i class="icon-angle-left"></i>');
                }
            });
        });
    };
    SlideComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '<slide>',
            templateUrl: 'slider.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SlideComponent);
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;
//# sourceMappingURL=slider.component.js.map