import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userProp: User;
  @Output() gotoFather: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  changeName(data) {
    this.gotoFather.emit({
      name: data.value,
      id: this.userProp.id
    });
  }

}
