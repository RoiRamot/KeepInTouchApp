import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TimePicker } from 'tns-core-modules/ui/time-picker/time-picker';
import { FriendsService } from '../services/friends.service';
import { ListPicker } from "ui/list-picker";
import { DrawerService } from '../services/drawer.service';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit,AfterViewInit {
  days = new Array<number>();
  selectedDate = 0;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  constructor(private friendsService: FriendsService,private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.days.push(index);
    }
    this.selectedDate = this.friendsService.interval;
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
}

  selectedDayChanged(args) {
    let picker = <ListPicker>args.object;  
    this.friendsService.setInterval(this.days[picker.selectedIndex]); 
  }
  changeSideDrawerVisibility() {
    this.drawer.toggleDrawerState();
  }
}
