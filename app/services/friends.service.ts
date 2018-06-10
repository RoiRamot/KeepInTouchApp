import { Injectable } from '@angular/core';
import { knownFolders, File, Folder } from "tns-core-modules/file-system";
import { phoneContact } from '../models/contact';
import { ContactsService } from './contacts.service';
import { PollingService } from './polling.service';
import { getNumber, setNumber } from "application-settings";
@Injectable()
export class FriendsService {

  file: File;
  fileName = "friendsList.json"
  interval: number;
  constructor() {
    console.log('getting file');
    let documents = knownFolders.documents();
    this.file = documents.getFile(this.fileName);
    this.interval = getNumber('interval',30)
  }

  saveFriends(contacts: Array<phoneContact>) {
    const friends = contacts.filter(item => item.isFriend);
    const data = JSON.stringify(friends);
    this.file.writeText(data).catch(err => {
      console.log(err);
    });
  }

  loadFriends(contacts: Array<phoneContact>): Array<phoneContact> {
    this.file.readText().then(data => {
      if (data) {
        const friends: Array<phoneContact> = JSON.parse(data);
        friends.forEach(friend => {
          const contact = contacts.find(x => x.id == friend.id);
          if (contact) {
            contact.isFriend = true;
          }
        });
      }
    });
    return contacts;
  }

  async getFriendsList(): Promise<Array<phoneContact>> {
    const data = await this.file.readText()
    if (data) {
      const friends: Array<phoneContact> = JSON.parse(data);
      return friends;
    }
  }

  setInterval(interval: number) {
    this.interval = interval;
    setNumber('interval',interval);
  }
}
