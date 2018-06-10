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
var LocalNotifications = require("nativescript-local-notifications");
var friends_service_1 = require("./friends.service");
var NotificationService = /** @class */ (function () {
    function NotificationService(friendsService) {
        this.friendsService = friendsService;
        LocalNotifications.requestPermission().then(function (granted) {
            console.log("Permission granted? " + granted);
        });
    }
    NotificationService.prototype.addNotification = function (contact) {
        var id = parseInt(contact.id.replace(" ", "").replace("+", "").replace("-", ""));
        LocalNotifications.schedule([{
                id: id,
                title: contact.name,
                body: 'please call ' + contact.name,
                at: new Date(Date.now() + (this.friendsService.interval * 24 * 60 * 60 * 1000))
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("scheduling error: " + error);
        });
    };
    NotificationService.prototype.removeNotification = function (contact) {
        var id = parseInt(contact.id.replace(" ", "").replace("+", "").replace("-", ""));
        LocalNotifications.cancel(id).then(function (foundAndCanceled) {
            if (foundAndCanceled) {
                console.log("removed notification for contact");
            }
            else {
                console.log("No ID contact was found");
            }
        });
    };
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [friends_service_1.FriendsService])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxRUFBc0U7QUFHdEUscURBQW1EO0FBR25EO0lBQ0UsNkJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDekMsVUFBVSxPQUFPO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFDRCw2Q0FBZSxHQUFmLFVBQWdCLE9BQXFCO1FBQ25DLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkYsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxFQUFFLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSTtnQkFDbkMsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDTjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBVSxLQUFLO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCxnREFBa0IsR0FBbEIsVUFBbUIsT0FBTztRQUN4QixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFVBQVUsZ0JBQWdCO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQXBDVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FFeUIsZ0NBQWM7T0FEdkMsbUJBQW1CLENBcUMvQjtJQUFELDBCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiXG5pbXBvcnQgeyBwaG9uZUNvbnRhY3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGFjdCc7XG5pbXBvcnQgeyBDYWxsTG9nc1NlcnZpY2UgfSBmcm9tICcuL2NhbGwtbG9ncy5zZXJ2aWNlJztcbmltcG9ydCB7IEZyaWVuZHNTZXJ2aWNlIH0gZnJvbSAnLi9mcmllbmRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnJpZW5kc1NlcnZpY2U6IEZyaWVuZHNTZXJ2aWNlKSB7XG4gICAgTG9jYWxOb3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcbiAgICAgIGZ1bmN0aW9uIChncmFudGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbiBncmFudGVkPyBcIiArIGdyYW50ZWQpO1xuICAgICAgfVxuICAgICkgICAgXG4gIH1cbiAgYWRkTm90aWZpY2F0aW9uKGNvbnRhY3Q6IHBob25lQ29udGFjdCkge1xuICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoY29udGFjdC5pZC5yZXBsYWNlKFwiIFwiLCBcIlwiKS5yZXBsYWNlKFwiK1wiLCBcIlwiKS5yZXBsYWNlKFwiLVwiLCBcIlwiKSk7XG4gICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XG4gICAgICBpZDogaWQsXG4gICAgICB0aXRsZTogY29udGFjdC5uYW1lLFxuICAgICAgYm9keTogJ3BsZWFzZSBjYWxsICcgKyBjb250YWN0Lm5hbWUsXG4gICAgICBhdDogbmV3IERhdGUoRGF0ZS5ub3coKSArICh0aGlzLmZyaWVuZHNTZXJ2aWNlLmludGVydmFsKjI0KjYwKjYwKjEwMDApKSBcbiAgICB9XSkudGhlbihcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJlbW92ZU5vdGlmaWNhdGlvbihjb250YWN0KSB7XG4gICAgY29uc3QgaWQgPSBwYXJzZUludChjb250YWN0LmlkLnJlcGxhY2UoXCIgXCIsIFwiXCIpLnJlcGxhY2UoXCIrXCIsIFwiXCIpLnJlcGxhY2UoXCItXCIsIFwiXCIpKTtcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMuY2FuY2VsKGlkKS50aGVuKFxuICAgICAgZnVuY3Rpb24gKGZvdW5kQW5kQ2FuY2VsZWQpIHtcbiAgICAgICAgaWYgKGZvdW5kQW5kQ2FuY2VsZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQgbm90aWZpY2F0aW9uIGZvciBjb250YWN0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gSUQgY29udGFjdCB3YXMgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cbn1cbiJdfQ==