import { Injectable } from '@angular/core';
import { IuserDetails } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userArray: IuserDetails[] = [
    {
      // id: this.uuid(),
      userName: "admin",
      password: "admin@123"
    }
  ]
  constructor() { }



  // uuid() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  //     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }
}

