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
var contacts_service_1 = require("../services/contacts.service");
var friends_service_1 = require("../services/friends.service");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(contactService, friendService, _changeDetectionRef) {
        var _this = this;
        this.contactService = contactService;
        this.friendService = friendService;
        this._changeDetectionRef = _changeDetectionRef;
        this.recommendedContacts = new Array();
        this.filteredContacts = new Array();
        this.contactService.recommendedContacts.subscribe(function (items) { return _this.recommendedContacts = items; });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBusy = true;
        this.contactService.recommendedContacts.subscribe(function (rec) {
            _this.isBusy = false;
        });
        this.showRecommendations = true;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.addFriend = function (item) {
        this.contactService.addFriend(item);
    };
    HomeComponent.prototype.removeFriend = function (item) {
        this.contactService.removeFriend(item);
    };
    HomeComponent.prototype.onTextChange = function (event) {
        this.filteredContacts = this.contactService.contactsCache.filter(function (con) { return con.name.includes(event.value); });
        this.showRecommendations = false;
    };
    HomeComponent.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contactService.buildRecommendations()];
                    case 1:
                        _a.sent();
                        this.showRecommendations = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.clearFriends = function () {
        this.friendService.saveFriends(new Array());
        console.log("cleared friends list");
    };
    HomeComponent.prototype.changeSideDrawerVisibility = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(side_drawer_directives_1.RadSideDrawerComponent),
        __metadata("design:type", side_drawer_directives_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, friends_service_1.FriendsService, core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQStGO0FBQy9GLGlFQUErRDtBQUUvRCwrREFBNkQ7QUFFN0Qsb0dBQW1HO0FBU25HO0lBT0UsdUJBQW1CLGNBQStCLEVBQVUsYUFBNkIsRUFBUyxtQkFBc0M7UUFBeEksaUJBRUM7UUFGa0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQVMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQU5qSSx3QkFBbUIsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUdoRCxxQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUlsRCxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtJQUM5RixDQUFDO0lBR0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ25ELEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0QsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDQyxpQ0FBUyxHQUFULFVBQVUsSUFBa0I7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxJQUFrQjtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVLLCtCQUFPLEdBQWI7Ozs7NEJBQ0UscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFBOzt3QkFBaEQsU0FBZ0QsQ0FBQTt3QkFDaEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7Ozs7S0FFakM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEVBQWdCLENBQUMsQ0FBQTtRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELGtEQUEwQixHQUExQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBMUNrQztRQUFsQyxnQkFBUyxDQUFDLCtDQUFzQixDQUFDO2tDQUF5QiwrQ0FBc0I7MERBQUM7SUFMdkUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FRbUMsa0NBQWUsRUFBeUIsZ0NBQWMsRUFBOEIsd0JBQWlCO09BUDdILGFBQWEsQ0FnRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250YWN0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb250YWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IHBob25lQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcbmltcG9ydCB7IEZyaWVuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZnJpZW5kcy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgcmVjb21tZW5kZWRDb250YWN0cyA9IG5ldyBBcnJheTxwaG9uZUNvbnRhY3Q+KCk7XG4gIHB1YmxpYyBpc0J1c3k6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93UmVjb21tZW5kYXRpb25zOiBib29sZWFuXG4gIHB1YmxpYyBmaWx0ZXJlZENvbnRhY3RzID0gbmV3IEFycmF5PHBob25lQ29udGFjdD4oKTtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhY3RTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UsIHByaXZhdGUgZnJpZW5kU2VydmljZTogRnJpZW5kc1NlcnZpY2UscHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY29udGFjdFNlcnZpY2UucmVjb21tZW5kZWRDb250YWN0cy5zdWJzY3JpYmUoaXRlbXMgPT4gdGhpcy5yZWNvbW1lbmRlZENvbnRhY3RzID0gaXRlbXMpXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNCdXN5ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRhY3RTZXJ2aWNlLnJlY29tbWVuZGVkQ29udGFjdHMuc3Vic2NyaWJlKHJlYyA9PiB7XG4gICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgIH0pXG4gICAgdGhpcy5zaG93UmVjb21tZW5kYXRpb25zID0gdHJ1ZTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG59XG4gIGFkZEZyaWVuZChpdGVtOiBwaG9uZUNvbnRhY3QpIHtcbiAgICB0aGlzLmNvbnRhY3RTZXJ2aWNlLmFkZEZyaWVuZChpdGVtKTtcbiAgfVxuICByZW1vdmVGcmllbmQoaXRlbTogcGhvbmVDb250YWN0KSB7XG4gICAgdGhpcy5jb250YWN0U2VydmljZS5yZW1vdmVGcmllbmQoaXRlbSk7XG4gIH1cblxuICBvblRleHRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLmNvbnRhY3RzQ2FjaGUuZmlsdGVyKGNvbiA9PiBjb24ubmFtZS5pbmNsdWRlcyhldmVudC52YWx1ZSkpO1xuICAgIHRoaXMuc2hvd1JlY29tbWVuZGF0aW9ucyA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICBhd2FpdCB0aGlzLmNvbnRhY3RTZXJ2aWNlLmJ1aWxkUmVjb21tZW5kYXRpb25zKClcbiAgICB0aGlzLnNob3dSZWNvbW1lbmRhdGlvbnMgPSB0cnVlO1xuXG4gIH1cbiAgY2xlYXJGcmllbmRzKCkge1xuICAgIHRoaXMuZnJpZW5kU2VydmljZS5zYXZlRnJpZW5kcyhuZXcgQXJyYXk8cGhvbmVDb250YWN0PigpKVxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZCBmcmllbmRzIGxpc3RcIilcbiAgfVxuXG4gIGNoYW5nZVNpZGVEcmF3ZXJWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==