"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var permission_service_1 = require("./services/permission.service");
var contacts_service_1 = require("./services/contacts.service");
var call_logs_service_1 = require("./services/call-logs.service");
var friends_service_1 = require("./services/friends.service");
var notification_service_1 = require("./services/notification.service");
var angular_1 = require("nativescript-ui-listview/angular");
var polling_service_1 = require("./services/polling.service");
var angular_2 = require("nativescript-ui-chart/angular");
var statistics_component_1 = require("./statistics/statistics.component");
var angular_3 = require("nativescript-ui-sidedrawer/angular");
var settings_component_1 = require("./settings/settings.component");
var drawer_content_component_1 = require("./drawer-content/drawer-content.component");
var contant_card_component_1 = require("./contant-card/contant-card.component");
var contant_small_component_1 = require("./contant-small/contant-small.component");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIChartModule,
                angular_3.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                statistics_component_1.StatisticsComponent,
                settings_component_1.SettingsComponent,
                drawer_content_component_1.DrawerContentComponent,
                contant_card_component_1.ContantCardComponent,
                contant_small_component_1.ContantSmallComponent
            ],
            providers: [
                permission_service_1.permissionService,
                contacts_service_1.ContactsService,
                call_logs_service_1.CallLogsService,
                friends_service_1.FriendsService,
                notification_service_1.NotificationService,
                polling_service_1.PollingService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msd0RBQXNEO0FBQ3RELG9FQUFrRTtBQUNsRSxnRUFBOEQ7QUFDOUQsa0VBQStEO0FBRy9ELDhEQUE0RDtBQUM1RCx3RUFBc0U7QUFDdEUsNERBQWdGO0FBQ2hGLDhEQUE0RDtBQUM1RCx5REFBMEU7QUFDMUUsMEVBQXdFO0FBQ3hFLDhEQUFvRjtBQUNwRixvRUFBa0U7QUFDbEUsc0ZBQW1GO0FBQ25GLGdGQUE2RTtBQUM3RSxtRkFBZ0Y7QUFDaEYsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQXFDdEU7SUFIQTs7TUFFRTtJQUNGO0lBQ0MsQ0FBQztJQURXLFNBQVM7UUFuQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsc0NBQWlCO2dCQUNqQixpREFBc0I7Z0JBQ3RCLDZDQUFvQjtnQkFDcEIsK0NBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2YsbUNBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsMENBQW1CO2dCQUNuQixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQ3BCO0lBQUQsZ0JBQUM7Q0FBQSxBQURGLElBQ0U7QUFEVyw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IHBlcm1pc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGVybWlzc2lvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb250YWN0c1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxsTG9nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxsLWxvZ3Muc2VydmljZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRnJpZW5kc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9mcmllbmRzLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgUG9sbGluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wb2xsaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFN0YXRpc3RpY3NDb21wb25lbnQgfSBmcm9tIFwiLi9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IERyYXdlckNvbnRlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9kcmF3ZXItY29udGVudC9kcmF3ZXItY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhbnRDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFudC1jYXJkL2NvbnRhbnQtY2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhbnRTbWFsbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhbnQtc21hbGwvY29udGFudC1zbWFsbC5jb21wb25lbnRcIjtcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBTdGF0aXN0aWNzQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgRHJhd2VyQ29udGVudENvbXBvbmVudCxcbiAgICAgICAgQ29udGFudENhcmRDb21wb25lbnQsXG4gICAgICAgIENvbnRhbnRTbWFsbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHBlcm1pc3Npb25TZXJ2aWNlLFxuICAgICAgICBDb250YWN0c1NlcnZpY2UsXG4gICAgICAgIENhbGxMb2dzU2VydmljZSxcbiAgICAgICAgRnJpZW5kc1NlcnZpY2UsXG4gICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIFBvbGxpbmdTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiB9XG4iXX0=