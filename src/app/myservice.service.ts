import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname:string, pwd:string){
    if(uname == 'aa' && pwd == 'aa'){
      sessionStorage.setItem ('username',"admin");
      sessionStorage.setItem ('isLoggedin',"true");
      return true;
    }
    else{
      sessionStorage.removeItem('username');
      sessionStorage.setItem ('isLoggedin',"false");
      return false;
    }
  }
  
  
}
