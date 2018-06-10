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
var ContantCardComponent = /** @class */ (function () {
    function ContantCardComponent() {
        this.addFriend = new core_1.EventEmitter();
    }
    ContantCardComponent.prototype.ngOnInit = function () { };
    ContantCardComponent.prototype.add = function () {
        this.addFriend.emit(this.contact);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ContantCardComponent.prototype, "addFriend", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", contact_1.phoneContact)
    ], ContantCardComponent.prototype, "contact", void 0);
    ContantCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contant-card',
            templateUrl: './contant-card.component.html',
            styleUrls: ['./contant-card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ContantCardComponent);
    return ContantCardComponent;
}());
exports.ContantCardComponent = ContantCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhbnQtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0U7QUFDL0UsNkNBQWlEO0FBUWpEO0lBR0U7UUFGVSxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFnQixDQUFDO0lBRXZDLENBQUM7SUFFakIsdUNBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxrQ0FBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFQUztRQUFULGFBQU0sRUFBRTs7MkRBQThDO0lBQzlDO1FBQVIsWUFBSyxFQUFFO2tDQUFVLHNCQUFZO3lEQUFDO0lBRnBCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOztPQUNXLG9CQUFvQixDQVNoQztJQUFELDJCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGhvbmVDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtY29udGFudC1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhbnQtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhbnQtY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhbnRDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGFkZEZyaWVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8cGhvbmVDb250YWN0PigpO1xuICBASW5wdXQoKSBjb250YWN0OiBwaG9uZUNvbnRhY3Q7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgYWRkKCkge1xuICAgIHRoaXMuYWRkRnJpZW5kLmVtaXQodGhpcy5jb250YWN0KTtcbiAgfVxufVxuIl19