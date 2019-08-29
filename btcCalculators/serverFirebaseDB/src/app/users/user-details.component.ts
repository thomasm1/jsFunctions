import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service'; 
import { User } from '../models/user.model';

@Component({
  selector: 'tm-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Output() notify: EventEmitter<User> = new EventEmitter<User>();
  private _id: number;
  // userList: User[];
  user: User;  

  constructor(private _route: ActivatedRoute, 
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    // const id = +this._route.snapshot.paramMap.get('id'); // deprecated < ng 4.3 params['id'];
      this._route.paramMap.subscribe(params => {
          this._id = +params.get('id'); 
          this._userService.getUser(this._id).subscribe(
            (user) => this.user = user, 
            (err:any) => console.log(err)
          );
          // this.userList = this._userService.getUsers();
          // this.user = this._userService.getUser(this._id);
    }); 
  }
   
  handleClick() {
    this.notify.emit(this.user);
  }
  viewNextUser() {
     if(this._id < 3) {
    // if(this._id < this.userList.length) {
      this._id = this._id + 1;
    } else { 
      this._id = 1;
    }
    this._router.navigate(['/users', this._id], {
      queryParamsHandling: 'merge'
    })
  }
}


