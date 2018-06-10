import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { permissionService } from "./services/permission.service";
import { ContactsService } from "./services/contacts.service";
import { CallLogsService } from "./services/call-logs.service";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FriendsService } from "./services/friends.service";
import { NotificationService } from "./services/notification.service";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { PollingService } from "./services/polling.service";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { StatisticsComponent } from "./statistics/statistics.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SettingsComponent } from "./settings/settings.component";
import { DrawerContentComponent } from "./drawer-content/drawer-content.component";
import { ContantCardComponent } from "./contant-card/contant-card.component";
import { ContantSmallComponent } from "./contant-small/contant-small.component";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        StatisticsComponent,
        SettingsComponent,
        DrawerContentComponent,
        ContantCardComponent,
        ContantSmallComponent
    ],
    providers: [
        permissionService,
        ContactsService,
        CallLogsService,
        FriendsService,
        NotificationService,
        PollingService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
 }
