import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any;
  constructor(public afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user' , JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
}
