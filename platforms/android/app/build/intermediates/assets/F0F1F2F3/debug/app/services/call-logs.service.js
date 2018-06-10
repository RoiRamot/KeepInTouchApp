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
var callLog_1 = require("../models/callLog");
var timer_1 = require("timer");
var CallLogsService = /** @class */ (function () {
    function CallLogsService() {
        var _this = this;
        this.nativescriptCallLog = require("nativescript-CallLog");
        this.callLogs = new Array();
        this.args = {
            filter: [
                this.nativescriptCallLog.Type.INCOMING,
                this.nativescriptCallLog.Type.OUTCOMING
            ]
        };
        console.log("init");
        //this.initCallLogs();
        this.timerId = timer_1.setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var logs, recentLogs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCallLogs()];
                    case 1:
                        logs = _a.sent();
                        recentLogs = logs.filter(function (log) { return log.date[0] > Date.now() - 14 * 24 * 60 * 1000; }).filter(function (recentLog) { return recentLog.id; });
                        return [2 /*return*/];
                }
            });
        }); }, 60 * 1000);
    }
    CallLogsService.prototype.getCallLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var callLogs, Logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callLogs = new Array();
                        return [4 /*yield*/, this.nativescriptCallLog.getCallLog()];
                    case 1:
                        Logs = _a.sent();
                        Logs.data.forEach(function (log) { callLogs.push(new callLog_1.callLog(log['number'], log['date'])); });
                        return [2 /*return*/, callLogs];
                }
            });
        });
    };
    CallLogsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CallLogsService);
    return CallLogsService;
}());
exports.CallLogsService = CallLogsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC1sb2dzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxsLWxvZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW1EO0FBQ25ELDZDQUE0QztBQUM1QywrQkFBK0Q7QUFHL0Q7SUFZRTtRQUFBLGlCQU9DO1FBakJPLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRS9ELGFBQVEsR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFBO1FBQ3RCLFNBQUksR0FBRztZQUNiLE1BQU0sRUFBRTtnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUzthQUN4QztTQUNGLENBQUM7UUFHQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFXLENBQUM7Ozs7NEJBQ1gscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBaEMsSUFBSSxHQUFJLFNBQXdCO3dCQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFNBQVMsSUFBRSxPQUFBLFNBQVMsQ0FBQyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUE7Ozs7YUFDeEcsRUFBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNJLHFDQUFXLEdBQWpCOzs7Ozs7d0JBQ00sUUFBUSxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxELElBQUksR0FBRyxTQUEyQzt3QkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxHQUFHLElBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQzt3QkFDdkYsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ2pCO0lBekJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBMkIzQjtJQUFELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhbGxMb2cgfSBmcm9tICcuLi9tb2RlbHMvY2FsbExvZyc7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgc2V0VGltZW91dCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0aW1lclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbExvZ3NTZXJ2aWNlIHtcblxuICBwcml2YXRlIG5hdGl2ZXNjcmlwdENhbGxMb2cgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LUNhbGxMb2dcIik7XG4gIHByaXZhdGUgdGltZXJJZCA6IG51bWJlcjtcbiBjYWxsTG9ncyA9IG5ldyBBcnJheTxjYWxsTG9nPigpXG4gIHByaXZhdGUgYXJncyA9IHtcbiAgICBmaWx0ZXI6IFtcbiAgICAgIHRoaXMubmF0aXZlc2NyaXB0Q2FsbExvZy5UeXBlLklOQ09NSU5HLFxuICAgICAgdGhpcy5uYXRpdmVzY3JpcHRDYWxsTG9nLlR5cGUuT1VUQ09NSU5HXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcbiAgICAvL3RoaXMuaW5pdENhbGxMb2dzKCk7XG4gICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9ncyA9ICBhd2FpdCB0aGlzLmdldENhbGxMb2dzKCk7XG4gICAgICBjb25zdCByZWNlbnRMb2dzID0gbG9ncy5maWx0ZXIobG9nPT5sb2cuZGF0ZVswXT5EYXRlLm5vdygpLTE0KjI0KjYwKjEwMDApLmZpbHRlcihyZWNlbnRMb2c9PnJlY2VudExvZy5pZCkgIFxuICAgICAgfSwgNjAqMTAwMCk7XG4gIH1cbiBhc3luYyBnZXRDYWxsTG9ncygpOiBQcm9taXNlPEFycmF5PGNhbGxMb2c+PiB7XG4gICBsZXQgY2FsbExvZ3MgPSBuZXcgQXJyYXk8Y2FsbExvZz4oKTtcbiAgICBsZXQgTG9ncyA9IGF3YWl0IHRoaXMubmF0aXZlc2NyaXB0Q2FsbExvZy5nZXRDYWxsTG9nKClcbiAgICAgIExvZ3MuZGF0YS5mb3JFYWNoKCBsb2cgPT4geyBjYWxsTG9ncy5wdXNoKG5ldyBjYWxsTG9nKGxvZ1snbnVtYmVyJ10sIGxvZ1snZGF0ZSddKSl9KTtcbiAgICByZXR1cm4gY2FsbExvZ3M7XG4gIH1cblxufVxuIl19