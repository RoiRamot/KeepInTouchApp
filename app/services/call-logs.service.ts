import { Injectable, OnInit } from '@angular/core';
import { callLog } from '../models/callLog';
import { setInterval, setTimeout, clearInterval } from "timer";

@Injectable()
export class CallLogsService {

  private nativescriptCallLog = require("nativescript-CallLog");
  private timerId : number;
 callLogs = new Array<callLog>()
  private args = {
    filter: [
      this.nativescriptCallLog.Type.INCOMING,
      this.nativescriptCallLog.Type.OUTCOMING
    ]
  };

  constructor() {
    console.log("init");
    //this.initCallLogs();
    this.timerId = setInterval(async () => {
      const logs =  await this.getCallLogs();
      const recentLogs = logs.filter(log=>log.date[0]>Date.now()-14*24*60*1000).filter(recentLog=>recentLog.id)  
      }, 60*1000);
  }
 async getCallLogs(): Promise<Array<callLog>> {
   let callLogs = new Array<callLog>();
    let Logs = await this.nativescriptCallLog.getCallLog()
      Logs.data.forEach( log => { callLogs.push(new callLog(log['number'], log['date']))});
    return callLogs;
  }

}
