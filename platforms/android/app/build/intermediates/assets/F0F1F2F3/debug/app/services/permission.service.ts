import { Injectable } from '@angular/core';
import * as dialogs from "ui/dialogs";
declare var android: any;

@Injectable()
export class permissionService {
  permissions = require("nativescript-permissions");

  constructor() { 

  }
  async getPermission() {
    await this.permissions.requestPermission(android.Manifest.permission.READ_CONTACTS,
      "Please give me the power!!").then((perm) => {
      }, (err) => {
        dialogs.alert("permission error" + err);
      });
    await this.permissions.requestPermission(android.Manifest.permission.READ_CALL_LOG,
      "Please give me the power!!").then((perm) => {
      }, (err) => {
        dialogs.alert("permission error" + err);
      });

  }
}
