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
var Subject_1 = require("rxjs/Subject");
var DrawerService = /** @class */ (function () {
    function DrawerService() {
        this.state = false;
        this.drawerStateSubject = new Subject_1.Subject();
        this.drawerSate = this.drawerStateSubject.asObservable();
    }
    DrawerService.prototype.changeSideDrawerVisibility = function () {
        this.drawerStateSubject.next(this.state);
        this.state = !this.state;
    };
    DrawerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DrawerService);
    return DrawerService;
}());
exports.DrawerService = DrawerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmF3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFHdkM7SUFJRTtRQUhBLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCx1QkFBa0IsR0FBRyxJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUM1QyxlQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFDakIsa0RBQTBCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQVJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBU3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhd2VyU2VydmljZSB7XG4gIHN0YXRlID0gZmFsc2U7XG4gIGRyYXdlclN0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIGRyYXdlclNhdGUgPSB0aGlzLmRyYXdlclN0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgY2hhbmdlU2lkZURyYXdlclZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5kcmF3ZXJTdGF0ZVN1YmplY3QubmV4dCh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnN0YXRlID0gIXRoaXMuc3RhdGU7XG4gIH1cbn1cbiJdfQ==