import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
  isUpadating: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
