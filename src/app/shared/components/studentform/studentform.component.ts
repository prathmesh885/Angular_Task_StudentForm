import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../model/student';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
  isUpadating: boolean = false;

  stdForm: Istudent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createForm(id: string, name: string, password: number, male: string,
    female: string, dob: number, address: string, selectsub: string) {
    let obj = {
      ID: '1',
      Name: 'Prathmesh',
      Password: 123456,
      Gender: 'male',
      DOB: 212121,
      Address: 'askdjksadj',
      SubjectEnrolled: 'angular',
    }
  }

}
