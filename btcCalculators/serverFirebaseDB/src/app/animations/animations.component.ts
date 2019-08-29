import { Component, OnInit } from '@angular/core';

import {
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'tm-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('popOverState', [    // pop-over
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out')),
    ]),

    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',        
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => move', 
        animate('2000ms', keyframes([
          style({transform: 'translateX(0) rotateY(0)', offset: 0}),
          style({transform: 'translateX(50%) rotateY(90deg)', offset: 0.33}),
          style({transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66}),
          style({transform: 'translateX(-100%)', offset: 1.0})
          
        ]))), 
      transition('* => *', animate('500ms ease')),
    ]),

    trigger('photosAnimation', [
      transition('* => *', [
        
        query('img', style({transform: 'translateX(-100%)'})),
        query('img', 
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
          ]))

      ])
    ])
  ]
})

export class AnimationsComponent implements OnInit {

  show = false; // pop-over

  constructor() { }

  get stateName() {   // pop-over
    return this.show ? 'show' : 'hide'; 
  }
  toggle() {   // pop-over
    this.show = !this.show;
  }


  position: string; 
  photoUrl = 'assets/images/tmm.png'; //'https://aws-sensor-temperature.s3.amazonaws.com/header-trans.png';
  photos = ['assets/images/a.png','assets/images/b.png','assets/images/c.png','assets/images/d.png','assets/images/e.png','assets/images/f.png']
  
  changePosition(newPosition: string) {
    this.position = newPosition
  }
  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`)
  }

  ngOnInit() {
  }

}
