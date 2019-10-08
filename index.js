"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var image_zoom_directive_1 = require("./src/image-zoom.directive");
var image_zoom_lens_component_1 = require("./src/image-zoom-lens.component");
var image_zoom_container_component_1 = require("./src/image-zoom-container.component");
__export(require("./src/image-zoom.directive"));
__export(require("./src/image-zoom-lens.component"));
__export(require("./src/image-zoom-container.component"));
var ImageZoomModule = (function () {
    function ImageZoomModule() {
    }
    return ImageZoomModule;
}());
ImageZoomModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [image_zoom_directive_1.ImageZoom],
        declarations: [image_zoom_directive_1.ImageZoom, image_zoom_container_component_1.ImageZoomContainer, image_zoom_lens_component_1.ImageZoomLens],
        entryComponents: [image_zoom_container_component_1.ImageZoomContainer, image_zoom_lens_component_1.ImageZoomLens]
    })
], ImageZoomModule);
exports.ImageZoomModule = ImageZoomModule;
//# sourceMappingURL=index.js.map