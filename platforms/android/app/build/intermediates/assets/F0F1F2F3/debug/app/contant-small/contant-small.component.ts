import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { phoneContact } from '../models/contact';

@Component({
  moduleId: module.id,
  selector: 'app-contant-small',
  templateUrl: './contant-small.component.html',
  styleUrls: ['./contant-small.component.scss']
})
export class ContantSmallComponent implements OnInit {
  @Output() addFriend = new EventEmitter<phoneContact>();
  @Output() removeFriend = new EventEmitter<phoneContact>();
  @Input() contact: phoneContact
  constructor() { }

  ngOnInit() { }
  add() {
    this.addFriend.emit(this.contact);
  }
  remove() {
    this.removeFriend.emit(this.contact);
  }
}
