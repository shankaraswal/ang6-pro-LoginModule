import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: '../login/login.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  title = 'Redirecting from logout'
  constructor() { }
  ngOnInit() {
    this.logout();
  }

  logout(){
    sessionStorage.removeItem('username')
  }
}
