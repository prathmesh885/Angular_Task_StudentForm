import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus: boolean = false;

  constructor() { }

  isAuthnticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedInStatus)
      }, 30)
    })
  }
  getLoggedInStatus() {
    return this.loggedInStatus;
  }
  logInToApplication() {
    // api call{email,password >> res>> success}
    this.loggedInStatus = true;
    //We get response
  }

  logOutFormApplication() {
    this.loggedInStatus = false;
  }
}
