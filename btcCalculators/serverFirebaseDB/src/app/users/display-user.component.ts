import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core'; // , OnChanges, SimpleChanges
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'tm-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})

// display-user IS CHILD of list-users
export class DisplayUserComponent implements OnInit {   //, OnChanges 
  selectedUserId: number;
 
  @Input() user: User;
  @Input() searchTerm: string;
  @Input() emailSearch: string;
  @Input() findPhoto: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>(); // Inform Parent of deletion (for filteredUsers update)
  confirmDelete = false;
   // //cards scroll-through design below- (other parts in list-user.comp)

  // @Input() userId: number;
  // private _user: User; 
  
  // @Input()
  // set user(val: User) {
  //   console.log('Previous : ' + (this._user ? this._user.name : 'NULL'));
  //   console.log('Current : ' + (val.name));
  //   this._user = val;
  // }
  // get user(): User {
  //   return this._user;
  // }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName of Object.keys(changes)) {
  //     console.log(propName); // output is ... user
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
  //     console.log(propName + ' changed from ' + from + 'to' + to)
  //   }
  // }

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService) { }

  ngOnInit() {
    this.selectedUserId = +this._route.snapshot.paramMap.get('id');
  } 
  viewUser() {
    this._router.navigate(['/users', this.user.id], {
      queryParams: { 'searchTerm': this.searchTerm, 'emailSearch': this.emailSearch, 'findPhoto': this.findPhoto } 
  // parameters on route optional, retain across multip.e rtes, NOT part of rte ptrn matching 
    })
  }
  editUser() {
    this._router.navigate(['/edit', this.user.id]); 
  }
  deleteUser() {
    this._userService.deleteUser(this.user.id).subscribe(
      () => console.log(`User with ID ${this.user.id} hath been deleted ...`),
      (err) => console.log(err)
    );
    this.notifyDelete.emit(this.user.id);  // Inform Parent of deletion (for filteredUsers update)
    // this._userService.deleteUser(this.user.id);  // Inform Parent of deletion (for filteredUsers update)
  }
}
