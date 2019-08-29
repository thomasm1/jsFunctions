import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../message.service';
// import { Observable } from 'rxjs/Observable';
// import { timer } from 'rxjs/observable/time';

@Component({
  selector: 'tm-testing-btn',
  templateUrl: './testing-btn.component.html',
  styles: []
})
export class TestingBtnComponent implements OnInit {

  content = 'you have been tested!';
  hideContent = true;
  severity = 423;

  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

}
