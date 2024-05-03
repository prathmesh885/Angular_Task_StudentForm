import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  stdForm: Istudent[] = [
    {
      ID: '1',
      Name: 'Prathmesh',
      Password: 123456,
      Gender: 'male',
      DOB: 212121,
      Address: 'askdjksadj',
      SubjectEnrolled: 'angular',
    },
    {
      ID: '2',
      Name: 'Prathmesh',
      Password: 123456,
      Gender: 'male',
      DOB: 212121,
      Address: 'askdjksadj',
      SubjectEnrolled: 'angular',
    },
    {
      ID: '3',
      Name: 'Prathmesh',
      Password: 123456,
      Gender: 'male',
      DOB: 212121,
      Address: 'askdjksadj',
      SubjectEnrolled: 'angular',
    },
    {
      ID: '4',
      Name: 'Prathmesh',
      Password: 123456,
      Gender: 'male',
      DOB: 212121,
      Address: 'askdjksadj',
      SubjectEnrolled: 'angular',
    },

  ]
  constructor() { }
}
