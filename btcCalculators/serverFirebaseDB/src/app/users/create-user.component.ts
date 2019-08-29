import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserGroup } from '../models/userGroup.model'; 
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tm-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  //contactType="email";
  //isActive=true
  datePickerConfig:any;
  previewPhoto = false;
  panelTitle:string;
  dateOfBirth: Date = new Date(2018,0,30)
  @ViewChild('userForm') public createUserForm: NgForm;
  
  user: User;

  userGroups: UserGroup[] = [  
    {id:1, name: 'CoinTrader Premium'},
    {id:2, name: 'CoinTrader'},
    {id:3, name: 'CoinTracker'},
    {id:4, name: 'CoinWatcher (free)'},
    {id:5, name: 'AltCoinWatcher (free)'},
    {id:6, name: 'Administration'} 
  ];
  constructor(private _userService: UserService, 
              private _router: Router,
              private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0,1),
        // maxDate: new Date(2018, 11,31),
        dateInputFormat: 'yyyy-MM-dd'
      });
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getUser(id);
    })
  }

  private getUser(id) {
    if(id===0) {
      this.user  = {
        id: null,
        name: null, 
        email: '', 
        phone: null, 
        contactType: null, 
        userGroup: 'select', // 'null', // 
        dateOfBirth: null, 
        isActive: null,
        photoPath: 'assets/images/m.png' 
      }; 
      this.panelTitle = 'Register';
      this.createUserForm.reset();
    } else {
      // this.user = Object.assign({}, this._userService.getUser(id));
      this._userService.getUser(id).subscribe(
        (user) => this.user = user,
        (err: any) => console.log('create-user.comp:' +  err)
      );
      this.panelTitle = 'Edit Details';
    }
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  saveUser(): void { 
    // const newUser: User = Object.assign ({}, this.user); //no longer worry about addressing reference var
    //this._userService.save(newUser)(
      // this._userService.save(this.user).subscribe(
      if (this.user.id === null) {
        this._userService.addUser(this.user).subscribe(
          (data: User) => {
            console.log(data);
            this.createUserForm.reset();
            this._router.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } else {
        this._userService.updateUser(this.user).subscribe(
          () => { 
            this.createUserForm.reset();
            this._router.navigate(['/']);
          },
          (error: any) => console.log(error)
        );
      } 
   
  }
}
