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
var ImageZoomContainer = (function () {
    function ImageZoomContainer(_elementRef) {
        this._elementRef = _elementRef;
        this.el = this._elementRef.nativeElement;
        this.setVisibility(false);
    }
    ImageZoomContainer.prototype.onMousemove = function (event) {
        this.parentImageContainer.onMousemove(event);
    };
    ImageZoomContainer.prototype.onMouseleave = function (event) {
        this.parentImageContainer.onMouseleave(event);
    };
    ImageZoomContainer.prototype.onMouseScroll = function (event) {
        this.parentImageContainer.onMouseScroll(event);
    };
    ImageZoomContainer.prototype.generateStyles = function () {
        this.el.style.width = this.windowWidth + 'px';
        this.el.style.height = this.windowHeight + 'px';
        this.el.style.border = this.borderSize + "px solid rgb(136, 136, 136)";
        this.el.style.left = this.left + 'px';
        this.el.style.top = this.top + 'px';
        this.el.style.backgroundImage = "url(" + this.image + ")";
    };
    ImageZoomContainer.prototype.setBackgroundPostion = function (x, y) {
        this.el.style.backgroundPosition = x + "px " + y + "px";
        this.positionX = x;
        this.positionY = y;
    };
    ImageZoomContainer.prototype.setZoomSize = function (width, height) {
        this.el.style.backgroundSize = width + "px " + height + "px";
        this.imageWidth = width;
        this.imageHeight = height;
    };
    ImageZoomContainer.prototype.setWindowPosition = function (left, top) {
        this.el.style.left = left + 'px';
        this.el.style.top = top + 'px';
        this.left = left;
        this.top = top;
    };
    ImageZoomContainer.prototype.setOptions = function (windowWidth, windowHeight, borderSize, image) {
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.borderSize = borderSize;
        this.image = image;
        this.generateStyles();
    };
    ImageZoomContainer.prototype.setVisibility = function (visible) {
        this.el.style.display = visible ? 'block' : 'none';
        this.visible = visible;
    };
    ImageZoomContainer.prototype.setParentImageContainer = function (parentImageContainer) {
        this.parentImageContainer = parentImageContainer;
    };
    return ImageZoomContainer;
}());
__decorate([
    core_1.HostListener('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ImageZoomContainer.prototype, "onMousemove", null);
__decorate([
    core_1.HostListener('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ImageZoomContainer.prototype, "onMouseleave", null);
__decorate([
    core_1.HostListener('MozMousePixelScroll', ['$event']),
    core_1.HostListener('DOMMouseScroll', ['$event']),
    core_1.HostListener('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageZoomContainer.prototype, "onMouseScroll", null);
ImageZoomContainer = __decorate([
    core_1.Component({
        selector: 'image-zoom-container',
        template: "",
        styles: ["\n        :host {\n            position: absolute;\n            text-align: center;\n            overflow: hidden;\n            z-index: 100;\n            float: left;\n            background: rgb(255, 255, 255) no-repeat;\n            pointer-events: none;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ImageZoomContainer);
exports.ImageZoomContainer = ImageZoomContainer;
//# sourceMappingURL=image-zoom-container.component.js.map