import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tm-detailbar',
  template: `
  <div class="detailbar">
  
  <p>
  BTC, ETH datasource -
  https://www.cryptodatadownload.com/data/northamerican/
</p>
</div>
`,
  styleUrls: ['./detailbar.component.css']
})
export class DetailbarComponent  {
  
  @HostBinding('class.is-open')
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
