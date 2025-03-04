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
var core_1 = require("@angular/core");
var ImageZoomLens = (function () {
    function ImageZoomLens(_elementRef) {
        this._elementRef = _elementRef;
        this.el = this._elementRef.nativeElement;
        this.setVisibility(false);
    }
    ImageZoomLens.prototype.onMousemove = function (event) {
        this.parentImageContainer.onMousemove(event);
    };
    ImageZoomLens.prototype.onMouseleave = function (event) {
        var x = event.clientX;
        var y = event.clientY;
        if (x <= this.parentImageContainer.img.x || x >= (this.parentImageContainer.img.x + this.parentImageContainer.img.width)) {
            this.parentImageContainer.onMouseleave(event);
        }
        else if (y <= this.parentImageContainer.img.y || y >= (this.parentImageContainer.img.y + this.parentImageContainer.img.height)) {
            this.parentImageContainer.onMouseleave(event);
        }
        else {
            this.parentImageContainer.onMousemove(event); // "mouseleave" event was just the mouse moving faster than the lens
        }
    };
    ImageZoomLens.prototype.onMouseScroll = function (event) {
        this.parentImageContainer.onMouseScroll(event);
    };
    ImageZoomLens.prototype.setLensSize = function (width, height) {
        this.el.style.width = width + 'px';
        this.el.style.height = height + 'px';
        this.lensWidth = width;
        this.lensHeight = height;
    };
    ImageZoomLens.prototype.setWindowPosition = function (left, top) {
        this.el.style.left = left + 'px';
        this.el.style.top = top + 'px';
        this.left = left;
        this.top = top;
    };
    ImageZoomLens.prototype.setOptions = function (borderSize) {
        this.el.style.border = borderSize + "px solid rgb(136, 136, 136)";
        this.borderSize = borderSize;
    };
    ImageZoomLens.prototype.setVisibility = function (visible) {
        this.el.style.display = visible ? 'block' : 'none';
        this.visible = visible;
    };
    ImageZoomLens.prototype.setParentImageContainer = function (parentImageContainer) {
        this.parentImageContainer = parentImageContainer;
    };
    return ImageZoomLens;
}());
__decorate([
    core_1.HostListener('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ImageZoomLens.prototype, "onMousemove", null);
__decorate([
    core_1.HostListener('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ImageZoomLens.prototype, "onMouseleave", null);
__decorate([
    core_1.HostListener('MozMousePixelScroll', ['$event']),
    core_1.HostListener('DOMMouseScroll', ['$event']),
    core_1.HostListener('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageZoomLens.prototype, "onMouseScroll", null);
ImageZoomLens = __decorate([
    core_1.Component({
        selector: 'image-zoom-lens',
        template: "",
        styles: ["\n        :host {\n            float: right;\n            overflow: hidden;\n            z-index: 999;\n            opacity: .4;\n            zoom: 1;\n            cursor: default;\n            border: 1px solid rgb(0, 0, 0);\n            position: absolute;\n            background: rgb(255, 255, 255) no-repeat 0 0;\n            pointer-events: none;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ImageZoomLens);
exports.ImageZoomLens = ImageZoomLens;
//# sourceMappingURL=image-zoom-lens.component.js.map