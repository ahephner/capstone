import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  today: number = Date.now() +10 ;

  constructor() { }

  ngOnInit() {
  }

}
