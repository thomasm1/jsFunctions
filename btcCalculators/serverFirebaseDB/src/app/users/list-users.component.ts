import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
//import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserListResolverService } from '../services/user-list-resolver.service';
@Component({
  // selector: 'tm-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  inputEmailDisplaySearch: string;
  users: User[];
  filteredUsers: User[]; //muyimprtante - no need to query webserver for each filter; returns full list without roundtrip
  error: string;
  
  private _searchTerm: string;
  private _emailSearch: string;
  private _findPhoto: string;

  get searchTerm(): string {
    return this._searchTerm;
  }
  get emailSearch(): string {
    return this._emailSearch;
  }
  get findPhoto(): string {
    return this._findPhoto;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredUsers = this.nameFilterUsers(value);
  }
  set emailSearch(value: string) {
    this._emailSearch = value;
    this.filteredUsers = this.emailfilterUsers(value);
  }
  set findPhoto(value: string) {
    this._findPhoto = value;
    this.filteredUsers = this.photoFilterUsers(value);
  }

  nameFilterUsers(searchString: string) {
    return this.users.filter(user => user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  emailfilterUsers(searchString: string) {
    return this.users.filter(user => user.email.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  photoFilterUsers(searchString: string) {
    return this.users.filter(user => user.photoPath.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
 
  // userToDisplay: User;
  // private arrayIndex = 1;

  constructor(    //private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) {
    //this.users = this._route.snapshot.data['userList'];
    const resolvedData: User[] | string = this._route.snapshot.data['userList'];
    if(Array.isArray(resolvedData)) {
      this.users = resolvedData;
    } else {
      this.error = resolvedData;
    }
    // OBSERVABLE way: 
    // this._route.queryParamMap.subscribe((queryParams) => {
    //   if (queryParams.has('searchTerm')) {
    //     this.searchTerm = queryParams.get('searchTerm');
    //   } 
    //   else {
    //     this.filteredUsers = this.users;
    //   } 
    // });
    // SNAPSHOT WAY:
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    }
    else if (this._route.snapshot.queryParamMap.has('emailSearch')) {
      this.emailSearch = this._route.snapshot.queryParamMap.get('emailSearch');
    }
    else if (this._route.snapshot.queryParamMap.has('findPhoto')) {
      this.findPhoto = this._route.snapshot.queryParamMap.get('findPhoto');
    } else {
      this.filteredUsers = this.users;
    }
  }
  onDeleteNotification(id: number) {
    const i = this.filteredUsers.findIndex(u => u.id === id);
    if (i !== -1) {
      this.filteredUsers.splice(i, 1);
    }
  }
  ngOnInit() {
    //this.userToDisplay = this.users[0];
    this.inputEmailDisplaySearch = "";
    //this.users = this._userService.getUsers();
    //this._userService.getUsers().subscribe(persList => this.users = persList); 

    //this.filteredUsers = this.users;  

    console.log(this._route.snapshot.queryParamMap.has('searchTerm' || 'emailSearch' || 'findPhoto')); //true if param
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm')); // returns value, (if not: null)
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm')); //string array of all values
    console.log(this._route.snapshot.queryParamMap.keys); //returns string of ALL parameters
    console.log(this._route.snapshot.paramMap.keys); // required/optional paramater properties
  }
  clearInput(): void {
    this.emailSearch = '';
    this.searchTerm = '';
    this.findPhoto = '';
    // !! TODO: when returning on 2nd + search...How to erase query parameters to refresh filter-search
    this.inputEmailDisplaySearch = '';
    // this.filteredUsers = [] ;
  } 
 
}
