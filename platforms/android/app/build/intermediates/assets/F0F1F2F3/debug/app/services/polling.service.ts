import { Injectable } from '@angular/core';
import { setInterval, setTimeout, clearInterval } from "timer";
import { CallLogsService } from './call-logs.service';
import { NotificationService } from './notification.service';
import { FriendsService } from './friends.service';

@Injectable()
export class PollingService {

  private numberId: number;

  constructor(private friendsService: FriendsService,
    private callLogService: CallLogsService, private notificationService: NotificationService) {
    this.numberId = setInterval(async () => {
      const logs = await callLogService.getCallLogs();
      const friends = await friendsService.getFriendsList();
      friends.forEach(friend => {
        logs.find(log => log.id == friend.id).date.push(friend.date[0]);
        this.notificationService.removeNotification(friend);
        this.notificationService.addNotification(friend);
      });
      friendsService.saveFriends(friends);
    }, 1000);
  }
}
