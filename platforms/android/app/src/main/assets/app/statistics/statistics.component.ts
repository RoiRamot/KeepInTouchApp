import { Component, OnInit, ViewChild,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { phoneContact } from '../models/contact';
import { CallLogsService } from '../services/call-logs.service';
import { friendChart } from '../models/friendChart';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { permissionService } from '../services/permission.service';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  private _friendsList: ObservableArray<friendChart>;
  friendsList = new Array<friendChart>();
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  constructor(private callLogsService: CallLogsService, private permissionService: permissionService,private _changeDetectionRef: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.permissionService.getPermission();
    this.refresh();
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  get friendsListSource(): ObservableArray<friendChart> {
    return this._friendsList;
  }
  async refresh() {
    const callLogs = await this.callLogsService.getCallLogs();
    callLogs.forEach(item => {
      const friend = this.friendsList.find(x => x.name == item.id)
      if (friend) {
        friend.amount++;
      }
      else {
        this.friendsList.push(new friendChart(item.id, 1))
      }
    });
    this._friendsList = new ObservableArray(this.friendsList.sort(this.compareAmount).slice(0, 10));
  }

  compareAmount(a:friendChart,b:friendChart) {
    if (a.amount < b.amount)
      return 1;
    if (a.amount > b.amount)
      return -1;
    return 0;
  }
  changeSideDrawerVisibility() {
    this.drawer.toggleDrawerState();
  }
}
