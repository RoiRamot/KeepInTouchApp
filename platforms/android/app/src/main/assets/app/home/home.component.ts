import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { phoneContact } from '../models/contact';
import { FriendsService } from '../services/friends.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public recommendedContacts = new Array<phoneContact>();
  public isBusy: boolean;
  public showRecommendations: boolean
  public filteredContacts = new Array<phoneContact>();
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;
  constructor(public contactService: ContactsService, private friendService: FriendsService,private _changeDetectionRef: ChangeDetectorRef) {
    this.contactService.recommendedContacts.subscribe(items => this.recommendedContacts = items)
  }


  ngOnInit() {
    this.isBusy = true;
    this.contactService.recommendedContacts.subscribe(rec => {
      this.isBusy = false;
    })
    this.showRecommendations = true;
  }
  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
}
  addFriend(item: phoneContact) {
    this.contactService.addFriend(item);
  }
  removeFriend(item: phoneContact) {
    this.contactService.removeFriend(item);
  }

  onTextChange(event) {
    this.filteredContacts = this.contactService.contactsCache.filter(con => con.name.includes(event.value));
    this.showRecommendations = false;
  }

  async refresh() {
    await this.contactService.buildRecommendations()
    this.showRecommendations = true;

  }
  clearFriends() {
    this.friendService.saveFriends(new Array<phoneContact>())
    console.log("cleared friends list")
  }

  changeSideDrawerVisibility() {
    this.drawer.toggleDrawerState();
  }
}
