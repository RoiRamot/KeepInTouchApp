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
var timer_1 = require("timer");
var call_logs_service_1 = require("./call-logs.service");
var notification_service_1 = require("./notification.service");
var friends_service_1 = require("./friends.service");
var PollingService = /** @class */ (function () {
    function PollingService(friendsService, callLogService, notificationService) {
        var _this = this;
        this.friendsService = friendsService;
        this.callLogService = callLogService;
        this.notificationService = notificationService;
        this.numberId = timer_1.setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var logs, friends;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callLogService.getCallLogs()];
                    case 1:
                        logs = _a.sent();
                        return [4 /*yield*/, friendsService.getFriendsList()];
                    case 2:
                        friends = _a.sent();
                        friends.forEach(function (friend) {
                            logs.find(function (log) { return log.id == friend.id; }).date.push(friend.date[0]);
                            _this.notificationService.removeNotification(friend);
                            _this.notificationService.addNotification(friend);
                        });
                        friendsService.saveFriends(friends);
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    }
    PollingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [friends_service_1.FriendsService,
            call_logs_service_1.CallLogsService, notification_service_1.NotificationService])
    ], PollingService);
    return PollingService;
}());
exports.PollingService = PollingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9sbGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsK0JBQStEO0FBQy9ELHlEQUFzRDtBQUN0RCwrREFBNkQ7QUFDN0QscURBQW1EO0FBR25EO0lBSUUsd0JBQW9CLGNBQThCLEVBQ3hDLGNBQStCLEVBQVUsbUJBQXdDO1FBRDNGLGlCQVlDO1FBWm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVcsQ0FBQzs7Ozs7NEJBQ2IscUJBQU0sY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBekMsSUFBSSxHQUFHLFNBQWtDO3dCQUMvQixxQkFBTSxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUEvQyxPQUFPLEdBQUcsU0FBcUM7d0JBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNOzRCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbkQsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OzthQUNyQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWhCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS3lCLGdDQUFjO1lBQ3hCLG1DQUFlLEVBQStCLDBDQUFtQjtPQUxoRixjQUFjLENBaUIxQjtJQUFELHFCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgc2V0VGltZW91dCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0aW1lclwiO1xuaW1wb3J0IHsgQ2FsbExvZ3NTZXJ2aWNlIH0gZnJvbSAnLi9jYWxsLWxvZ3Muc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gJy4vZnJpZW5kcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvbGxpbmdTZXJ2aWNlIHtcblxuICBwcml2YXRlIG51bWJlcklkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmcmllbmRzU2VydmljZTogRnJpZW5kc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxsTG9nU2VydmljZTogQ2FsbExvZ3NTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLm51bWJlcklkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9ncyA9IGF3YWl0IGNhbGxMb2dTZXJ2aWNlLmdldENhbGxMb2dzKCk7XG4gICAgICBjb25zdCBmcmllbmRzID0gYXdhaXQgZnJpZW5kc1NlcnZpY2UuZ2V0RnJpZW5kc0xpc3QoKTtcbiAgICAgIGZyaWVuZHMuZm9yRWFjaChmcmllbmQgPT4ge1xuICAgICAgICBsb2dzLmZpbmQobG9nID0+IGxvZy5pZCA9PSBmcmllbmQuaWQpLmRhdGUucHVzaChmcmllbmQuZGF0ZVswXSk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5yZW1vdmVOb3RpZmljYXRpb24oZnJpZW5kKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmFkZE5vdGlmaWNhdGlvbihmcmllbmQpO1xuICAgICAgfSk7XG4gICAgICBmcmllbmRzU2VydmljZS5zYXZlRnJpZW5kcyhmcmllbmRzKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIl19