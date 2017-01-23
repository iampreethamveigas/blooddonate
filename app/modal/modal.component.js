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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var ModalComponents = (function () {
    function ModalComponents() {
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.css = false;
    }
    ModalComponents.prototype.ngAfterViewInit = function () {
        this.modal.open();
    };
    ModalComponents.prototype.close = function () {
        this.modal.close();
    };
    ModalComponents.prototype.closed = function () {
    };
    ModalComponents.prototype.dismissed = function () {
    };
    ModalComponents.prototype.opened = function () {
    };
    ModalComponents.prototype.open = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ModalComponents.prototype, "modal", void 0);
    ModalComponents = __decorate([
        core_1.Component({
            selector: 'modals',
            styles: ['>>> .modal-small{width:420px;}'],
            template: "\n             <modal #modal cssClass=\"modal-small\">\n       <form  #modalForm=\"ngForm\">\n      \n    <modal-body>\n      <div class=\"form-group\">\n        <label for=\"firstName\">Your Name</label>\n         <input type=\"text\"  class=\"form-control\" required [(ngModel)]=\"firstName\" name=\"firstName\" id=\"firstName\">\n         </div>\n         <label > <h3>{{firstName }}</h3> </label>\n    </modal-body>\n    <modal-footer>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!modalForm.valid\" (click)=\"parentModal.open();modal.dismiss();\">Submit</button>\n     </modal-footer> \n     </form>\n</modal>\n    <modal style=\"z-index: 1049\" \n         [cssClass]=\"cssClass\" #parentModal>\n        <modal-header [show-close]=\"true\">\n            <h4 class=\"modal-title\">Welcome!</h4>\n            \n        </modal-header>\n        <modal-body>\n            <p>Hello!! &nbsp; <strong>{{firstName }},</strong>&nbsp; \n            You can Make Use Of Our Service To donate blood Please Register bellow.</p>\n           \n        </modal-body>\n        <modal-footer>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"parentModal.dismiss()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"parentModal.close()\">Ok</button>\n        </modal-footer>\n    </modal>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponents);
    return ModalComponents;
}());
exports.ModalComponents = ModalComponents;
//# sourceMappingURL=modal.component.js.map