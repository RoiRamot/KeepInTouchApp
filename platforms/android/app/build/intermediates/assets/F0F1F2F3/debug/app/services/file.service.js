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
var FileService = /** @class */ (function () {
    function FileService() {
        this.fileName = "friendsList.json";
        console.log('getting file');
        var documents = file_system_1.knownFolders.documents();
        this.file = documents.getFile(this.fileName);
    }
    FileService.prototype.saveFriends = function (contacts) {
        var friends = contacts.filter(function (item) { return item.isFriend; });
        var data = JSON.stringify(friends);
        this.file.writeText(data).catch(function (err) {
            console.log(err);
        });
    };
    FileService.prototype.loadFriends = function (contacts) {
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
    FileService.prototype.getFriendsList = function () {
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
    FileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNERBQTBFO0FBTTFFO0lBSUU7UUFEQSxhQUFRLEdBQUcsa0JBQWtCLENBQUE7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxRQUE2QjtRQUN2QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksUUFBNkI7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBTSxPQUFPLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO29CQUNwQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ1osT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFSyxvQ0FBYyxHQUFwQjs7Ozs7NEJBQ2MscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWpDLElBQUksR0FBRyxTQUEwQjt3QkFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDSCxPQUFPLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JELE1BQU0sZ0JBQUMsT0FBTyxFQUFDO3dCQUNqQixDQUFDOzs7OztLQUNKO0lBdkNVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBd0N2QjtJQUFELGtCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZpbGUsIEZvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBwaG9uZUNvbnRhY3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGFjdCc7XG5pbXBvcnQgeyBDb250YWN0c1NlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9sbGluZ1NlcnZpY2UgfSBmcm9tICcuL3BvbGxpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XG5cbiAgZmlsZTogRmlsZTtcbiAgZmlsZU5hbWUgPSBcImZyaWVuZHNMaXN0Lmpzb25cIlxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBmaWxlJyk7XG4gICAgbGV0IGRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICB0aGlzLmZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZSh0aGlzLmZpbGVOYW1lKTtcbiAgfVxuXG4gIHNhdmVGcmllbmRzKGNvbnRhY3RzOiBBcnJheTxwaG9uZUNvbnRhY3Q+KSB7XG4gICAgY29uc3QgZnJpZW5kcyA9IGNvbnRhY3RzLmZpbHRlcihpdGVtPT5pdGVtLmlzRnJpZW5kKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZnJpZW5kcyk7XG4gICAgdGhpcy5maWxlLndyaXRlVGV4dChkYXRhKS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGcmllbmRzKGNvbnRhY3RzOiBBcnJheTxwaG9uZUNvbnRhY3Q+KTogQXJyYXk8cGhvbmVDb250YWN0PiB7XG4gICAgdGhpcy5maWxlLnJlYWRUZXh0KCkudGhlbihkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGZyaWVuZHM6QXJyYXk8cGhvbmVDb250YWN0PiA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIGZyaWVuZHMuZm9yRWFjaChmcmllbmQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0cy5maW5kKHggPT4geC5pZCA9PSBmcmllbmQuaWQpO1xuICAgICAgICAgIGlmIChjb250YWN0KSB7XG4gICAgICAgICAgICBjb250YWN0LmlzRnJpZW5kPXRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFjdHM7XG4gIH1cblxuICBhc3luYyBnZXRGcmllbmRzTGlzdCgpOiBQcm9taXNlPEFycmF5PHBob25lQ29udGFjdD4+IHtcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZpbGUucmVhZFRleHQoKVxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kczpBcnJheTxwaG9uZUNvbnRhY3Q+ID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIGZyaWVuZHM7XG4gICAgICB9XG4gIH1cbn1cbiJdfQ==