import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IuserDetails } from '../../model/student';
import { AuthService } from '../../services/auth.service';
import { UserdataService } from '../../services/userdata.service';
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHavingAccount: boolean = true;
  isPasswordVisible: boolean = false;
  isPasswordVisible2: boolean = false;
  LoggedInStatus: boolean = true;
  userDataArray: IuserDetails[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private authService: AuthService, private userService: UserdataService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.userDataArray = this.userService.userArray;
  }

  login(email: string, password: string) {
    this.userDataArray.forEach((user) => {
      if (user.userName === email && user.password === password) {
        this.authService.logInToApplication();
        this.router.navigate(['dashboard'])
      }
      if (user.userName != email || user.password != password) {
        this.snackBar.open('Please Enter Correct Username and Password!', 'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000
        });
        // let snackBarRef = this.snackBar.open('Please Enter Correct Username and Password!',);
      }
    })
  }
  signUpForm(email: string, password: string, cpassword: string) {
    if (password != cpassword) {
      this.snackBar.open('Please Confirm The Password!!', 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000
      });
      this.isHavingAccount = this.isHavingAccount
    } else if (email != '' && password != '') {
      this.isHavingAccount = !this.isHavingAccount
    } else {
      let obj = {
        // id: this.userService.uuid(),
        userName: email,
        password: password
      }
      this.userService.userArray.push(obj);
    }
  }
}
