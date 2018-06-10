import { Injectable, OnInit, group } from '@angular/core';
import { permissionService } from './permission.service';
import { phoneContact } from '../models/contact';
import { Subject } from 'rxjs/Subject';
import { CallLogsService } from './call-logs.service';
import { android } from 'tns-core-modules/application/application';
import { callLog } from '../models/callLog';
import { NotificationService } from './notification.service';
import { FriendsService } from './friends.service';
import { knownFolders, File, Folder } from "tns-core-modules/file-system";


@Injectable()
export class ContactsService implements OnInit {
  contactsCache = new Array<phoneContact>();
  recommendedContactsSubject = new Subject<Array<phoneContact>>();
  recommendedContacts = this.recommendedContactsSubject.asObservable();
  ContactsSubject = new Subject<Array<phoneContact>>();
  Contacts = this.recommendedContactsSubject.asObservable();
  contactsNativeService = require("nativescript-contacts");
  private contactFields = ["id", "name", "phoneNumbers", "photo", "organization "];
  file: File;
  fileName = "contactsList.json"

  ngOnInit(): void {
  }

  constructor(private permissionService: permissionService, private callLogsService: CallLogsService,
    private friendsService: FriendsService, private notificationService: NotificationService) {
    let documents = knownFolders.documents();
    this.file = documents.getFile(this.fileName);
    this.Init();
  }

  private async Init() {
    console.log('Init')

    await this.permissionService.getPermission();
    console.log('got permission')
    //this.contactsCache = await this.loadContactsFromFile();
    if (this.contactsCache.length == 0) {
      const args = await this.contactsNativeService.getAllContacts(this.contactFields);
      console.log('got contacts')
      for (const contact of args.data) {
        const name = this.buildName(contact);
        const img = this.getImg(contact)
        const phoneNumber = contact.phoneNumbers.find(number => number.value.length >= 7);
        if (name != "" && phoneNumber) {
          this.contactsCache.push(new phoneContact(phoneNumber.value, 0, name, contact.organization, false));
        }
      }
    }
    this.refresh();
  }
  private async loadContactsFromFile(): Promise<Array<phoneContact>> {
    const data = await this.file.readText()
    if (data) {
      const contacts: Array<phoneContact> = JSON.parse(data);
      return contacts
    }
    return new Array<phoneContact>();
  }
  buildName(contact: any): string {
    let name = ""
    if (contact.name) {
      if (contact.name.given) {
        name += contact.name.given + " "
      }
      if (contact.name.middle) {
        name += contact.name.middle + " "
      }
      if (contact.name.family) {
        name += contact.name.family + " "
      }
    }
    return name.trim();
  }
  getImg(contact: any): any {
    if (contact.photo) {
      return contact.photo.path;
    } else {
      return ""
    }
  }
  groupItemsByCountThreshold(items: Array<any>, threshold: number): Array<any> {
    let thresholdArray = new Array<any>();
    items.forEach(item => {
      let count = items.filter(x => x.id == item.id).length;
      if (count > threshold) {
        if (!thresholdArray.some(y => y.id == item.id)) {
          thresholdArray.push(item);
        }
      }
    });
    return thresholdArray;
  };
  async buildRecommendations() {
    let response = await this.callLogsService.getCallLogs();
    let topCallers: Array<callLog> = this.groupItemsByCountThreshold(response, 3);
    //topCallers.map(x => console.log(x.id+"called at "+ x.date));
    const result = this.contactsCache.filter(item => item.isFriend == false && topCallers.some(topCaller => topCaller.id.trim().replace("-", "") == item.id.trim().replace("-", "")));
    this.recommendedContactsSubject.next(result);
  }

  addFriend(friend: phoneContact) {
    this.contactsCache.find(item => item.id == friend.id).isFriend = true;
    this.notificationService.addNotification(friend);
    this.friendsService.saveFriends(this.contactsCache);
    this.refresh();
  }

  removeFriend(friend: phoneContact) {
    this.contactsCache.find(item => item.id == friend.id).isFriend = false;
    this.notificationService.removeNotification(friend);

    this.friendsService.saveFriends(this.contactsCache);
    this.refresh();
  }

  refresh() {
    this.contactsCache = this.friendsService.loadFriends(this.contactsCache);
    this.ContactsSubject.next(this.contactsCache);
    this.buildRecommendations();
  }

}
