import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  title = 'Login'
  constructor(private service : MyserviceService, private routes: Router ) {}
  msg;
  output;
  err:boolean=false;
  ngOnInit() {
  }

  check(uname:string, p:string){
    this.output = this.service.checkusernameandpassword(uname, p)
    if(this.output == true){
      this.routes.navigate(['./dashboard'])
    }
    else{
      this.err=true;
      this.msg = "invalid username or password"
    }
  }
 


}
