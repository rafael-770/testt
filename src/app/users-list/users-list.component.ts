import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  userList: User[] = [
    { id: 1, age: 21, name: 'User1', isMarried: false },
    { id: 2, age: 45, name: 'User2', isMarried: true },
    { id: 3, age: 23, name: 'User3', isMarried: true },
    { id: 4, age: 18, name: 'User4', isMarried: false },
    { id: 5, age: 29, name: 'User5', isMarried: true }
  ]

  constructor() { }

  ngOnInit() {
  }

  log(userData) {
    console.log(userData);
    this.userList[userData.id-1].name = userData.name;
  }
}
