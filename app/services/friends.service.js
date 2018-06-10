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
var file_system_1 = require("tns-core-modules/file-system");
var application_settings_1 = require("application-settings");
var FriendsService = /** @class */ (function () {
    function FriendsService() {
        this.fileName = "friendsList.json";
        console.log('getting file');
        var documents = file_system_1.knownFolders.documents();
        this.file = documents.getFile(this.fileName);
        this.interval = application_settings_1.getNumber('interval', 30);
    }
    FriendsService.prototype.saveFriends = function (contacts) {
        var friends = contacts.filter(function (item) { return item.isFriend; });
        var data = JSON.stringify(friends);
        this.file.writeText(data).catch(function (err) {
            console.log(err);
        });
    };
    FriendsService.prototype.loadFriends = function (contacts) {
        this.file.readText().then(function (data) {
            if (data) {
                var friends = JSON.parse(data);
                friends.forEach(function (friend) {
                    var contact = contacts.find(function (x) { return x.id == friend.id; });
                    if (contact) {
                        contact.isFriend = true;
                    }
                });
            }
        });
        return contacts;
    };
    FriendsService.prototype.getFriendsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, friends;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.file.readText()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            friends = JSON.parse(data);
                            return [2 /*return*/, friends];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FriendsService.prototype.setInterval = function (interval) {
        this.interval = interval;
        application_settings_1.setNumber('interval', interval);
    };
    FriendsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FriendsService);
    return FriendsService;
}());
exports.FriendsService = FriendsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNERBQTBFO0FBSTFFLDZEQUE0RDtBQUU1RDtJQUtFO1FBRkEsYUFBUSxHQUFHLGtCQUFrQixDQUFBO1FBRzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQVMsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxRQUE2QjtRQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBNkI7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBTSxPQUFPLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO29CQUNwQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ1osT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFSyx1Q0FBYyxHQUFwQjs7Ozs7NEJBQ2UscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWpDLElBQUksR0FBRyxTQUEwQjt3QkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDSCxPQUFPLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3RELE1BQU0sZ0JBQUMsT0FBTyxFQUFDO3dCQUNqQixDQUFDOzs7OztLQUNGO0lBRUQsb0NBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLGdDQUFTLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE5Q1UsY0FBYztRQUQxQixpQkFBVSxFQUFFOztPQUNBLGNBQWMsQ0ErQzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGtub3duRm9sZGVycywgRmlsZSwgRm9sZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IHBob25lQ29udGFjdCB9IGZyb20gJy4uL21vZGVscy9jb250YWN0JztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4vY29udGFjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBQb2xsaW5nU2VydmljZSB9IGZyb20gJy4vcG9sbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IGdldE51bWJlciwgc2V0TnVtYmVyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnJpZW5kc1NlcnZpY2Uge1xuXG4gIGZpbGU6IEZpbGU7XG4gIGZpbGVOYW1lID0gXCJmcmllbmRzTGlzdC5qc29uXCJcbiAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2dldHRpbmcgZmlsZScpO1xuICAgIGxldCBkb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgdGhpcy5maWxlID0gZG9jdW1lbnRzLmdldEZpbGUodGhpcy5maWxlTmFtZSk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGdldE51bWJlcignaW50ZXJ2YWwnLDMwKVxuICB9XG5cbiAgc2F2ZUZyaWVuZHMoY29udGFjdHM6IEFycmF5PHBob25lQ29udGFjdD4pIHtcbiAgICBjb25zdCBmcmllbmRzID0gY29udGFjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pc0ZyaWVuZCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZyaWVuZHMpO1xuICAgIHRoaXMuZmlsZS53cml0ZVRleHQoZGF0YSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRnJpZW5kcyhjb250YWN0czogQXJyYXk8cGhvbmVDb250YWN0Pik6IEFycmF5PHBob25lQ29udGFjdD4ge1xuICAgIHRoaXMuZmlsZS5yZWFkVGV4dCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBmcmllbmRzOiBBcnJheTxwaG9uZUNvbnRhY3Q+ID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgZnJpZW5kcy5mb3JFYWNoKGZyaWVuZCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFjdCA9IGNvbnRhY3RzLmZpbmQoeCA9PiB4LmlkID09IGZyaWVuZC5pZCk7XG4gICAgICAgICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgICAgICAgIGNvbnRhY3QuaXNGcmllbmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhY3RzO1xuICB9XG5cbiAgYXN5bmMgZ2V0RnJpZW5kc0xpc3QoKTogUHJvbWlzZTxBcnJheTxwaG9uZUNvbnRhY3Q+PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZmlsZS5yZWFkVGV4dCgpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IGZyaWVuZHM6IEFycmF5PHBob25lQ29udGFjdD4gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgcmV0dXJuIGZyaWVuZHM7XG4gICAgfVxuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICBzZXROdW1iZXIoJ2ludGVydmFsJyxpbnRlcnZhbCk7XG4gIH1cbn1cbiJdfQ==