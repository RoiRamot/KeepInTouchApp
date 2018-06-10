import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DrawerService {
  state = false;
  drawerStateSubject = new Subject<boolean>();
  drawerSate = this.drawerStateSubject.asObservable();
  constructor() { }
  changeSideDrawerVisibility() {
    this.drawerStateSubject.next(this.state);
    this.state = !this.state;
  }
}
