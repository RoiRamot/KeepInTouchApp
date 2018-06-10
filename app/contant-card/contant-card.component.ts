import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { phoneContact } from '../models/contact';

@Component({
  moduleId: module.id,
  selector: 'app-contant-card',
  templateUrl: './contant-card.component.html',
  styleUrls: ['./contant-card.component.scss']
})
export class ContantCardComponent implements OnInit {
  @Output() addFriend = new EventEmitter<phoneContact>();
  @Input() contact: phoneContact;
  constructor() { }

  ngOnInit() { }
  add() {
    this.addFriend.emit(this.contact);
  }
}
