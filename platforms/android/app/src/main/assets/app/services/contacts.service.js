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
var permission_service_1 = require("./permission.service");
var contact_1 = require("../models/contact");
var Subject_1 = require("rxjs/Subject");
var call_logs_service_1 = require("./call-logs.service");
var notification_service_1 = require("./notification.service");
var friends_service_1 = require("./friends.service");
var file_system_1 = require("tns-core-modules/file-system");
var ContactsService = /** @class */ (function () {
    function ContactsService(permissionService, callLogsService, friendsService, notificationService) {
        this.permissionService = permissionService;
        this.callLogsService = callLogsService;
        this.friendsService = friendsService;
        this.notificationService = notificationService;
        this.contactsCache = new Array();
        this.recommendedContactsSubject = new Subject_1.Subject();
        this.recommendedContacts = this.recommendedContactsSubject.asObservable();
        this.ContactsSubject = new Subject_1.Subject();
        this.Contacts = this.recommendedContactsSubject.asObservable();
        this.contactsNativeService = require("nativescript-contacts");
        this.contactFields = ["id", "name", "phoneNumbers", "photo", "organization "];
        this.fileName = "contactsList.json";
        var documents = file_system_1.knownFolders.documents();
        this.file = documents.getFile(this.fileName);
        this.Init();
    }
    ContactsService.prototype.ngOnInit = function () {
    };
    ContactsService.prototype.Init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var args, _i, _a, contact, name_1, img, phoneNumber;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Init');
                        return [4 /*yield*/, this.permissionService.getPermission()];
                    case 1:
                        _b.sent();
                        console.log('got permission');
                        if (!(this.contactsCache.length == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.contactsNativeService.getAllContacts(this.contactFields)];
                    case 2:
                        args = _b.sent();
                        console.log('got contacts');
                        for (_i = 0, _a = args.data; _i < _a.length; _i++) {
                            contact = _a[_i];
                            name_1 = this.buildName(contact);
                            img = this.getImg(contact);
                            phoneNumber = contact.phoneNumbers.find(function (number) { return number.value.length >= 7; });
                            if (name_1 != "" && phoneNumber) {
                                this.contactsCache.push(new contact_1.phoneContact(phoneNumber.value, 0, name_1, contact.organization, false));
                            }
                        }
                        _b.label = 3;
                    case 3:
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsService.prototype.loadContactsFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, contacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.file.readText()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            contacts = JSON.parse(data);
                            return [2 /*return*/, contacts];
                        }
                        return [2 /*return*/, new Array()];
                }
            });
        });
    };
    ContactsService.prototype.buildName = function (contact) {
        var name = "";
        if (contact.name) {
            if (contact.name.given) {
                name += contact.name.given + " ";
            }
            if (contact.name.middle) {
                name += contact.name.middle + " ";
            }
            if (contact.name.family) {
                name += contact.name.family + " ";
            }
        }
        return name.trim();
    };
    ContactsService.prototype.getImg = function (contact) {
        if (contact.photo) {
            return contact.photo.path;
        }
        else {
            return "";
        }
    };
    ContactsService.prototype.groupItemsByCountThreshold = function (items, threshold) {
        var thresholdArray = new Array();
        items.forEach(function (item) {
            var count = items.filter(function (x) { return x.id == item.id; }).length;
            if (count > threshold) {
                if (!thresholdArray.some(function (y) { return y.id == item.id; })) {
                    thresholdArray.push(item);
                }
            }
        });
        return thresholdArray;
    };
    ;
    ContactsService.prototype.buildRecommendations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, topCallers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callLogsService.getCallLogs()];
                    case 1:
                        response = _a.sent();
                        topCallers = this.groupItemsByCountThreshold(response, 3);
                        result = this.contactsCache.filter(function (item) { return item.isFriend == false && topCallers.some(function (topCaller) { return topCaller.id.trim().replace("-", "") == item.id.trim().replace("-", ""); }); });
                        this.recommendedContactsSubject.next(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsService.prototype.addFriend = function (friend) {
        this.contactsCache.find(function (item) { return item.id == friend.id; }).isFriend = true;
        this.notificationService.addNotification(friend);
        this.friendsService.saveFriends(this.contactsCache);
        this.refresh();
    };
    ContactsService.prototype.removeFriend = function (friend) {
        this.contactsCache.find(function (item) { return item.id == friend.id; }).isFriend = false;
        this.notificationService.removeNotification(friend);
        this.friendsService.saveFriends(this.contactsCache);
        this.refresh();
    };
    ContactsService.prototype.refresh = function () {
        this.contactsCache = this.friendsService.loadFriends(this.contactsCache);
        this.ContactsSubject.next(this.contactsCache);
        this.buildRecommendations();
    };
    ContactsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [permission_service_1.permissionService, call_logs_service_1.CallLogsService,
            friends_service_1.FriendsService, notification_service_1.NotificationService])
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCwyREFBeUQ7QUFDekQsNkNBQWlEO0FBQ2pELHdDQUF1QztBQUN2Qyx5REFBc0Q7QUFHdEQsK0RBQTZEO0FBQzdELHFEQUFtRDtBQUNuRCw0REFBMEU7QUFJMUU7SUFjRSx5QkFBb0IsaUJBQW9DLEVBQVUsZUFBZ0MsRUFDeEYsY0FBOEIsRUFBVSxtQkFBd0M7UUFEdEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN4RixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBZDFGLGtCQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWdCLENBQUM7UUFDMUMsK0JBQTBCLEdBQUcsSUFBSSxpQkFBTyxFQUF1QixDQUFDO1FBQ2hFLHdCQUFtQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRSxvQkFBZSxHQUFHLElBQUksaUJBQU8sRUFBdUIsQ0FBQztRQUNyRCxhQUFRLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFELDBCQUFxQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pELGtCQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakYsYUFBUSxHQUFHLG1CQUFtQixDQUFBO1FBTzVCLElBQUksU0FBUyxHQUFHLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMs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Q0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUE5R1UsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQWU0QixzQ0FBaUIsRUFBMkIsbUNBQWU7WUFDeEUsZ0NBQWMsRUFBK0IsMENBQW1CO09BZi9FLGVBQWUsQ0FnSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhIRCxJQWdIQztBQWhIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBlcm1pc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9wZXJtaXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcGhvbmVDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRhY3QnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBDYWxsTG9nc1NlcnZpY2UgfSBmcm9tICcuL2NhbGwtbG9ncy5zZXJ2aWNlJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNhbGxMb2cgfSBmcm9tICcuLi9tb2RlbHMvY2FsbExvZyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gJy4vZnJpZW5kcy5zZXJ2aWNlJztcbmltcG9ydCB7IGtub3duRm9sZGVycywgRmlsZSwgRm9sZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGFjdHNTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29udGFjdHNDYWNoZSA9IG5ldyBBcnJheTxwaG9uZUNvbnRhY3Q+KCk7XG4gIHJlY29tbWVuZGVkQ29udGFjdHNTdWJqZWN0ID0gbmV3IFN1YmplY3Q8QXJyYXk8cGhvbmVDb250YWN0Pj4oKTtcbiAgcmVjb21tZW5kZWRDb250YWN0cyA9IHRoaXMucmVjb21tZW5kZWRDb250YWN0c1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIENvbnRhY3RzU3ViamVjdCA9IG5ldyBTdWJqZWN0PEFycmF5PHBob25lQ29udGFjdD4+KCk7XG4gIENvbnRhY3RzID0gdGhpcy5yZWNvbW1lbmRlZENvbnRhY3RzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgY29udGFjdHNOYXRpdmVTZXJ2aWNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0c1wiKTtcbiAgcHJpdmF0ZSBjb250YWN0RmllbGRzID0gW1wiaWRcIiwgXCJuYW1lXCIsIFwicGhvbmVOdW1iZXJzXCIsIFwicGhvdG9cIiwgXCJvcmdhbml6YXRpb24gXCJdO1xuICBmaWxlOiBGaWxlO1xuICBmaWxlTmFtZSA9IFwiY29udGFjdHNMaXN0Lmpzb25cIlxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uU2VydmljZTogcGVybWlzc2lvblNlcnZpY2UsIHByaXZhdGUgY2FsbExvZ3NTZXJ2aWNlOiBDYWxsTG9nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmcmllbmRzU2VydmljZTogRnJpZW5kc1NlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSkge1xuICAgIGxldCBkb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnRzLmdldEZpbGUodGhpcy5maWxlTmFtZSk7XG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIEluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ0luaXQnKVxuXG4gICAgYXdhaXQgdGhpcy5wZXJtaXNzaW9uU2VydmljZS5nZXRQZXJtaXNzaW9uKCk7XG4gICAgY29uc29sZS5sb2coJ2dvdCBwZXJtaXNzaW9uJylcbiAgICAvL3RoaXMuY29udGFjdHNDYWNoZSA9IGF3YWl0IHRoaXMubG9hZENvbnRhY3RzRnJvbUZpbGUoKTtcbiAgICBpZiAodGhpcy5jb250YWN0c0NhY2hlLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zdCBhcmdzID0gYXdhaXQgdGhpcy5jb250YWN0c05hdGl2ZVNlcnZpY2UuZ2V0QWxsQ29udGFjdHModGhpcy5jb250YWN0RmllbGRzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdnb3QgY29udGFjdHMnKVxuICAgICAgZm9yIChjb25zdCBjb250YWN0IG9mIGFyZ3MuZGF0YSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5idWlsZE5hbWUoY29udGFjdCk7XG4gICAgICAgIGNvbnN0IGltZyA9IHRoaXMuZ2V0SW1nKGNvbnRhY3QpXG4gICAgICAgIGNvbnN0IHBob25lTnVtYmVyID0gY29udGFjdC5waG9uZU51bWJlcnMuZmluZChudW1iZXIgPT4gbnVtYmVyLnZhbHVlLmxlbmd0aCA+PSA3KTtcbiAgICAgICAgaWYgKG5hbWUgIT0gXCJcIiAmJiBwaG9uZU51bWJlcikge1xuICAgICAgICAgIHRoaXMuY29udGFjdHNDYWNoZS5wdXNoKG5ldyBwaG9uZUNvbnRhY3QocGhvbmVOdW1iZXIudmFsdWUsIDAsIG5hbWUsIGNvbnRhY3Qub3JnYW5pemF0aW9uLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG4gIHByaXZhdGUgYXN5bmMgbG9hZENvbnRhY3RzRnJvbUZpbGUoKTogUHJvbWlzZTxBcnJheTxwaG9uZUNvbnRhY3Q+PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZmlsZS5yZWFkVGV4dCgpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbnRhY3RzOiBBcnJheTxwaG9uZUNvbnRhY3Q+ID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIHJldHVybiBjb250YWN0c1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFycmF5PHBob25lQ29udGFjdD4oKTtcbiAgfVxuICBidWlsZE5hbWUoY29udGFjdDogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgbmFtZSA9IFwiXCJcbiAgICBpZiAoY29udGFjdC5uYW1lKSB7XG4gICAgICBpZiAoY29udGFjdC5uYW1lLmdpdmVuKSB7XG4gICAgICAgIG5hbWUgKz0gY29udGFjdC5uYW1lLmdpdmVuICsgXCIgXCJcbiAgICAgIH1cbiAgICAgIGlmIChjb250YWN0Lm5hbWUubWlkZGxlKSB7XG4gICAgICAgIG5hbWUgKz0gY29udGFjdC5uYW1lLm1pZGRsZSArIFwiIFwiXG4gICAgICB9XG4gICAgICBpZiAoY29udGFjdC5uYW1lLmZhbWlseSkge1xuICAgICAgICBuYW1lICs9IGNvbnRhY3QubmFtZS5mYW1pbHkgKyBcIiBcIlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50cmltKCk7XG4gIH1cbiAgZ2V0SW1nKGNvbnRhY3Q6IGFueSk6IGFueSB7XG4gICAgaWYgKGNvbnRhY3QucGhvdG8pIHtcbiAgICAgIHJldHVybiBjb250YWN0LnBob3RvLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuICB9XG4gIGdyb3VwSXRlbXNCeUNvdW50VGhyZXNob2xkKGl0ZW1zOiBBcnJheTxhbnk+LCB0aHJlc2hvbGQ6IG51bWJlcik6IEFycmF5PGFueT4ge1xuICAgIGxldCB0aHJlc2hvbGRBcnJheSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBjb3VudCA9IGl0ZW1zLmZpbHRlcih4ID0+IHguaWQgPT0gaXRlbS5pZCkubGVuZ3RoO1xuICAgICAgaWYgKGNvdW50ID4gdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICghdGhyZXNob2xkQXJyYXkuc29tZSh5ID0+IHkuaWQgPT0gaXRlbS5pZCkpIHtcbiAgICAgICAgICB0aHJlc2hvbGRBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRocmVzaG9sZEFycmF5O1xuICB9O1xuICBhc3luYyBidWlsZFJlY29tbWVuZGF0aW9ucygpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhbGxMb2dzU2VydmljZS5nZXRDYWxsTG9ncygpO1xuICAgIGxldCB0b3BDYWxsZXJzOiBBcnJheTxjYWxsTG9nPiA9IHRoaXMuZ3JvdXBJdGVtc0J5Q291bnRUaHJlc2hvbGQocmVzcG9uc2UsIDMpO1xuICAgIC8vdG9wQ2FsbGVycy5tYXAoeCA9PiBjb25zb2xlLmxvZyh4LmlkK1wiY2FsbGVkIGF0IFwiKyB4LmRhdGUpKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvbnRhY3RzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pc0ZyaWVuZCA9PSBmYWxzZSAmJiB0b3BDYWxsZXJzLnNvbWUodG9wQ2FsbGVyID0+IHRvcENhbGxlci5pZC50cmltKCkucmVwbGFjZShcIi1cIiwgXCJcIikgPT0gaXRlbS5pZC50cmltKCkucmVwbGFjZShcIi1cIiwgXCJcIikpKTtcbiAgICB0aGlzLnJlY29tbWVuZGVkQ29udGFjdHNTdWJqZWN0Lm5leHQocmVzdWx0KTtcbiAgfVxuXG4gIGFkZEZyaWVuZChmcmllbmQ6IHBob25lQ29udGFjdCkge1xuICAgIHRoaXMuY29udGFjdHNDYWNoZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBmcmllbmQuaWQpLmlzRnJpZW5kID0gdHJ1ZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuYWRkTm90aWZpY2F0aW9uKGZyaWVuZCk7XG4gICAgdGhpcy5mcmllbmRzU2VydmljZS5zYXZlRnJpZW5kcyh0aGlzLmNvbnRhY3RzQ2FjaGUpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVtb3ZlRnJpZW5kKGZyaWVuZDogcGhvbmVDb250YWN0KSB7XG4gICAgdGhpcy5jb250YWN0c0NhY2hlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGZyaWVuZC5pZCkuaXNGcmllbmQgPSBmYWxzZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVtb3ZlTm90aWZpY2F0aW9uKGZyaWVuZCk7XG5cbiAgICB0aGlzLmZyaWVuZHNTZXJ2aWNlLnNhdmVGcmllbmRzKHRoaXMuY29udGFjdHNDYWNoZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuY29udGFjdHNDYWNoZSA9IHRoaXMuZnJpZW5kc1NlcnZpY2UubG9hZEZyaWVuZHModGhpcy5jb250YWN0c0NhY2hlKTtcbiAgICB0aGlzLkNvbnRhY3RzU3ViamVjdC5uZXh0KHRoaXMuY29udGFjdHNDYWNoZSk7XG4gICAgdGhpcy5idWlsZFJlY29tbWVuZGF0aW9ucygpO1xuICB9XG5cbn1cbiJdfQ==