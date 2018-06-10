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
var contact_1 = require("../models/contact");
var ContantSmallComponent = /** @class */ (function () {
    function ContantSmallComponent() {
        this.addFriend = new core_1.EventEmitter();
        this.removeFriend = new core_1.EventEmitter();
    }
    ContantSmallComponent.prototype.ngOnInit = function () { };
    ContantSmallComponent.prototype.add = function () {
        this.addFriend.emit(this.contact);
    };
    ContantSmallComponent.prototype.remove = function () {
        this.removeFriend.emit(this.contact);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ContantSmallComponent.prototype, "addFriend", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ContantSmallComponent.prototype, "removeFriend", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", contact_1.phoneContact)
    ], ContantSmallComponent.prototype, "contact", void 0);
    ContantSmallComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contant-small',
            templateUrl: './contant-small.component.html',
            styleUrls: ['./contant-small.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ContantSmallComponent);
    return ContantSmallComponent;
}());
exports.ContantSmallComponent = ContantSmallComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFudC1zbWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YW50LXNtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUErRTtBQUMvRSw2Q0FBaUQ7QUFRakQ7SUFJRTtRQUhVLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7UUFDN0MsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7SUFFMUMsQ0FBQztJQUVqQix3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUNkLG1DQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVhTO1FBQVQsYUFBTSxFQUFFOzs0REFBOEM7SUFDN0M7UUFBVCxhQUFNLEVBQUU7OytEQUFpRDtJQUNqRDtRQUFSLFlBQUssRUFBRTtrQ0FBVSxzQkFBWTswREFBQTtJQUhuQixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FhakM7SUFBRCw0QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBob25lQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhbnQtc21hbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFudC1zbWFsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhbnQtc21hbGwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YW50U21hbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgYWRkRnJpZW5kID0gbmV3IEV2ZW50RW1pdHRlcjxwaG9uZUNvbnRhY3Q+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVGcmllbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHBob25lQ29udGFjdD4oKTtcbiAgQElucHV0KCkgY29udGFjdDogcGhvbmVDb250YWN0XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgYWRkKCkge1xuICAgIHRoaXMuYWRkRnJpZW5kLmVtaXQodGhpcy5jb250YWN0KTtcbiAgfVxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5yZW1vdmVGcmllbmQuZW1pdCh0aGlzLmNvbnRhY3QpO1xuICB9XG59XG4iXX0=