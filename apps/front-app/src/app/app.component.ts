import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: any[] = [{name: 'John', email: 'john@gmail.com'}];
  name: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.userService.addUser(this.name).subscribe(user => {
      this.users.push(user);
      this.name = '';
    });
  }
}
