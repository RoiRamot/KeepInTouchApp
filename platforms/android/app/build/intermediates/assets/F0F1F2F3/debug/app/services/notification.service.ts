import { Injectable } from '@angular/core';
import * as LocalNotifications from "nativescript-local-notifications"
import { phoneContact } from '../models/contact';
import { CallLogsService } from './call-logs.service';
import { FriendsService } from './friends.service';

@Injectable()
export class NotificationService {
  constructor(private friendsService: FriendsService) {
    LocalNotifications.requestPermission().then(
      function (granted) {
        console.log("Permission granted? " + granted);
      }
    )    
  }
  addNotification(contact: phoneContact) {
    const id = parseInt(contact.id.replace(" ", "").replace("+", "").replace("-", ""));
    LocalNotifications.schedule([{
      id: id,
      title: contact.name,
      body: 'please call ' + contact.name,
      at: new Date(Date.now() + (this.friendsService.interval*24*60*60*1000)) 
    }]).then(
      function () {
        console.log("Notification scheduled");
      },
      function (error) {
        console.log("scheduling error: " + error);
      }
    )
  }

  removeNotification(contact) {
    const id = parseInt(contact.id.replace(" ", "").replace("+", "").replace("-", ""));
    LocalNotifications.cancel(id).then(
      function (foundAndCanceled) {
        if (foundAndCanceled) {
          console.log("removed notification for contact");
        } else {
          console.log("No ID contact was found");
        }
      }
    )
  }
}
