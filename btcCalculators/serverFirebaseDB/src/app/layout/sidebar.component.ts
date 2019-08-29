import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'tm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;
  guiding:string = `
  
  “Typically, momentum trading is effective in markets that 1) do not have valuation models, 2) have large amounts of volatility, and 3) have frequent mispricings. 
  Momentum investing is not typically used in US stocks, bonds, or options – as they have clear valuation models (e.g. discounted cash flow analysis for stocks and black Scholes for options). However, for commodities and assets like crypto – momentum trading can be an effective strategy that allows protection from losses in downtrends and capture subside on the uptrends. 
  Based on historical data, this may be an extremely effective strategy – until a valuation model has been figured out.” 1
 

 
  `
  strategy:string = `
  
[using a strategy to]
"... create deep reinforcement learning agents that learn to make money trading Bitcoin.

... to experiment with state-of-the-art deep reinforcement learning technologies to see if we can create profitable Bitcoin trading bots. 
It seems to be the status quo to quickly shut down any attempts to create reinforcement learning algorithms, as it is “the wrong way to go about building a trading algorithm”. 
However, recent advances in the field have shown that RL agents are often capable of learning much more than supervised learning agents within the same problem domain." 2 

  `
  citeOne:string = ` 
1. https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy 
  `
  citeTwo:string = ` 2: https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29
  `
  constructor(
    private sidebarService: SidebarService
  ) { 
  }

  ngOnInit() {
    this.sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen
    })
  }

}
