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
var dialogs = require("ui/dialogs");
var permissionService = /** @class */ (function () {
    function permissionService() {
        this.permissions = require("nativescript-permissions");
    }
    permissionService.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "Please give me the power!!").then(function (perm) {
                        }, function (err) {
                            dialogs.alert("permission error" + err);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.permissions.requestPermission(android.Manifest.permission.READ_CALL_LOG, "Please give me the power!!").then(function (perm) {
                            }, function (err) {
                                dialogs.alert("permission error" + err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    permissionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], permissionService);
    return permissionService;
}());
exports.permissionService = permissionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVybWlzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msb0NBQXNDO0FBSXRDO0lBR0U7UUFGQSxnQkFBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBSWxELENBQUM7SUFDSyx5Q0FBYSxHQUFuQjs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDaEYsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3dCQUN4QyxDQUFDLEVBQUUsVUFBQyxHQUFHOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzFDLENBQUMsQ0FBQyxFQUFBOzt3QkFKSixTQUlJLENBQUM7d0JBQ0wscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQ2hGLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTs0QkFDeEMsQ0FBQyxFQUFFLFVBQUMsR0FBRztnQ0FDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDOzRCQUMxQyxDQUFDLENBQUMsRUFBQTs7d0JBSkosU0FJSSxDQUFDOzs7OztLQUVOO0lBbEJVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIHBlcm1pc3Npb25TZXJ2aWNlIHtcbiAgcGVybWlzc2lvbnMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCIpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyBcblxuICB9XG4gIGFzeW5jIGdldFBlcm1pc3Npb24oKSB7XG4gICAgYXdhaXQgdGhpcy5wZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUyxcbiAgICAgIFwiUGxlYXNlIGdpdmUgbWUgdGhlIHBvd2VyISFcIikudGhlbigocGVybSkgPT4ge1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwicGVybWlzc2lvbiBlcnJvclwiICsgZXJyKTtcbiAgICAgIH0pO1xuICAgIGF3YWl0IHRoaXMucGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfQ0FMTF9MT0csXG4gICAgICBcIlBsZWFzZSBnaXZlIG1lIHRoZSBwb3dlciEhXCIpLnRoZW4oKHBlcm0pID0+IHtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcInBlcm1pc3Npb24gZXJyb3JcIiArIGVycik7XG4gICAgICB9KTtcblxuICB9XG59XG4iXX0=