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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var call_logs_service_1 = require("../services/call-logs.service");
var friendChart_1 = require("../models/friendChart");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var permission_service_1 = require("../services/permission.service");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(callLogsService, permissionService, _changeDetectionRef) {
        this.callLogsService = callLogsService;
        this.permissionService = permissionService;
        this._changeDetectionRef = _changeDetectionRef;
        this.friendsList = new Array();
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.permissionService.getPermission();
        this.refresh();
    };
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(StatisticsComponent.prototype, "friendsListSource", {
        get: function () {
            return this._friendsList;
        },
        enumerable: true,
        configurable: true
    });
    StatisticsComponent.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var callLogs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callLogsService.getCallLogs()];
                    case 1:
                        callLogs = _a.sent();
                        callLogs.forEach(function (item) {
                            var friend = _this.friendsList.find(function (x) { return x.name == item.id; });
                            if (friend) {
                                friend.amount++;
                            }
                            else {
                                _this.friendsList.push(new friendChart_1.friendChart(item.id, 1));
                            }
                        });
                        this._friendsList = new observable_array_1.ObservableArray(this.friendsList.sort(this.compareAmount).slice(0, 10));
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsComponent.prototype.compareAmount = function (a, b) {
        if (a.amount < b.amount)
            return 1;
        if (a.amount > b.amount)
            return -1;
        return 0;
    };
    StatisticsComponent.prototype.changeSideDrawerVisibility = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(side_drawer_directives_1.RadSideDrawerComponent),
        __metadata("design:type", side_drawer_directives_1.RadSideDrawerComponent)
    ], StatisticsComponent.prototype, "drawerComponent", void 0);
    StatisticsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-statistics',
            templateUrl: './statistics.component.html',
            styleUrls: ['./statistics.component.scss']
        }),
        __metadata("design:paramtypes", [call_logs_service_1.CallLogsService, permission_service_1.permissionService, core_1.ChangeDetectorRef])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBRzlGLG1FQUFnRTtBQUNoRSxxREFBb0Q7QUFDcEQsNEZBQTBGO0FBQzFGLHFFQUFtRTtBQUNuRSxvR0FBbUc7QUFTbkc7SUFPRSw2QkFBb0IsZUFBZ0MsRUFBVSxpQkFBb0MsRUFBUyxtQkFBc0M7UUFBN0gsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFKakosZ0JBQVcsR0FBRyxJQUFJLEtBQUssRUFBZSxDQUFDO0lBS3ZDLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQkFBSSxrREFBaUI7YUFBckI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNLLHFDQUFPLEdBQWI7Ozs7Ozs0QkFDbUIscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQW5ELFFBQVEsR0FBRyxTQUF3Qzt3QkFDekQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7NEJBQ25CLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUE7NEJBQzVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQ1gsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUNsQixDQUFDOzRCQUNELElBQUksQ0FBQyxDQUFDO2dDQUNKLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ3BELENBQUM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FDakc7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsQ0FBYSxFQUFDLENBQWE7UUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx3REFBMEIsR0FBMUI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXpDa0M7UUFBbEMsZ0JBQVMsQ0FBQywrQ0FBc0IsQ0FBQztrQ0FBeUIsK0NBQXNCO2dFQUFDO0lBSnZFLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO3lDQVFxQyxtQ0FBZSxFQUE2QixzQ0FBaUIsRUFBOEIsd0JBQWlCO09BUHRJLG1CQUFtQixDQThDL0I7SUFBRCwwQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnRhY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgcGhvbmVDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xuaW1wb3J0IHsgQ2FsbExvZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsbC1sb2dzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZnJpZW5kQ2hhcnQgfSBmcm9tICcuLi9tb2RlbHMvZnJpZW5kQ2hhcnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBwZXJtaXNzaW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Blcm1pc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zdGF0aXN0aWNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBfZnJpZW5kc0xpc3Q6IE9ic2VydmFibGVBcnJheTxmcmllbmRDaGFydD47XG4gIGZyaWVuZHNMaXN0ID0gbmV3IEFycmF5PGZyaWVuZENoYXJ0PigpO1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbExvZ3NTZXJ2aWNlOiBDYWxsTG9nc1NlcnZpY2UsIHByaXZhdGUgcGVybWlzc2lvblNlcnZpY2U6IHBlcm1pc3Npb25TZXJ2aWNlLHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBlcm1pc3Npb25TZXJ2aWNlLmdldFBlcm1pc3Npb24oKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGdldCBmcmllbmRzTGlzdFNvdXJjZSgpOiBPYnNlcnZhYmxlQXJyYXk8ZnJpZW5kQ2hhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZnJpZW5kc0xpc3Q7XG4gIH1cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBjYWxsTG9ncyA9IGF3YWl0IHRoaXMuY2FsbExvZ3NTZXJ2aWNlLmdldENhbGxMb2dzKCk7XG4gICAgY2FsbExvZ3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGZyaWVuZCA9IHRoaXMuZnJpZW5kc0xpc3QuZmluZCh4ID0+IHgubmFtZSA9PSBpdGVtLmlkKVxuICAgICAgaWYgKGZyaWVuZCkge1xuICAgICAgICBmcmllbmQuYW1vdW50Kys7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdC5wdXNoKG5ldyBmcmllbmRDaGFydChpdGVtLmlkLCAxKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9mcmllbmRzTGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5mcmllbmRzTGlzdC5zb3J0KHRoaXMuY29tcGFyZUFtb3VudCkuc2xpY2UoMCwgMTApKTtcbiAgfVxuXG4gIGNvbXBhcmVBbW91bnQoYTpmcmllbmRDaGFydCxiOmZyaWVuZENoYXJ0KSB7XG4gICAgaWYgKGEuYW1vdW50IDwgYi5hbW91bnQpXG4gICAgICByZXR1cm4gMTtcbiAgICBpZiAoYS5hbW91bnQgPiBiLmFtb3VudClcbiAgICAgIHJldHVybiAtMTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjaGFuZ2VTaWRlRHJhd2VyVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG59XG4iXX0=