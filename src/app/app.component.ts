import { Component } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = new User();
    this.user.name = 'Akilesh';
    this.user.company = 'Capgemini';
    this.user.address = 'Mandya';
    this.user.phoneNumbers = ['97434', '81232'];
  }
}
