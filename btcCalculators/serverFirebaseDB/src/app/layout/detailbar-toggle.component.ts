import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DetailbarComponent } from './detailbar.component'

@Component({
  selector: 'tm-detailbar-toggle',
  template: `
    <h4>
    Source
    Details
    </h4>
  `,
  styleUrls: ['./detailbar-toggle.component.css']
})
export class DetailbarToggleComponent 
implements OnInit {

  @Input() detailbar: DetailbarComponent;
  @HostListener('click')
  click() {
    this.detailbar.toggle();
  }
  constructor() { }

  ngOnInit() {
  }

}
