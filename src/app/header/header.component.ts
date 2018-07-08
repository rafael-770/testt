import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems = [{
    anchor: "/home",
    text: 'home'
  }, {
    anchor: "/about",
    text: 'about'
  }, {
    anchor: "/contact",
    text: 'contact'
  }]

  name: string;

  constructor() { }

  ngOnInit() {
  }

  inputBlur() {
    this.name = 'student';
    this.clicked();
  }

  clicked(eventName?) {
    if (eventName)
      console.log(eventName)
    else
      console.log('clicked');
  }

}
