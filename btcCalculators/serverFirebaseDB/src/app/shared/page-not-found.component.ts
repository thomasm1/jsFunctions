import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-page-not-found',
  template: `
  <div class="not-found"> 
    <h3>
      Entry not found, and this Page not Found ... oops!
    </h3>
    <a routerLink=""><h4>back to list ...</h4> </a>
  </div>
  `,
  styles: [
    `
    h3 { color:red }
    .not-found { background:aliceblue;padding:30px;
    width:100%;} `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
