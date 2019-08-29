import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/delay'; 
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

//import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:3000/users'; 

  // private listUsers: User[] = []//  
    // [
    //   {
    //     "id": 1,
    //     "name": 'Tom',
    //     "email": 'thomasm1.maestas@gmail.com',
    //     "phone": 5055087707,
    //     "contactType": 'email',
    //     "userGroup": '5',
    //     "dateOfBirth": new Date('2020-09-03'),
    //     "isActive": true,
    //     "photoPath": 'assets/images/a.png'
    //   }, {
    //     "id": 2,
    //     "name": 'Tom22',
    //     "email": 'thomasm1222.maestas@gmail.com',
    //     "phone": 5222227707,
    //     "contactType": 'email',
    //     "userGroup": '5',
    //     "dateOfBirth": new Date('2020-09-03'),
    //     "isActive": true,
    //     "photoPath": 'assets/images/a.png'
    //   }
    // ];

  //1 getUsers(): User[] {
  //  return this.listUsers;
  // }
  //   getUsers(): Observable<User[]> {
  //   return Observable.of(this.listUsers);
  // }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return new ErrorObservable('Oops, there is a problem with the service ... IT is notified & working on it. Please try again later, thanks!')
  }

  getUser(id: number): Observable<User> {
    // return this.listUsers.find(u => u.id === id)
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`) 
      .pipe(catchError(this.handleError));
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
    // if (user.id === null) {
    // const maxId = this.listUsers.reduce(function (u1, u2) {
    //   return (u1.id > u2.id) ? u1 : u2;
    // }).id
    // user.id = maxId + 1;
    // this.listUsers.push(user);
    // } else {
    //   const foundIdx = this.listUsers.findIndex(u => u.id === user.id);
    //   this.listUsers[foundIdx] = user;
    // }
  }

  updateUser(user: User): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${user.id}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
    // const i = this.listUsers.findIndex(u => u.id === id);
    // if (i !== -1) {
    //   this.listUsers.splice(i, 1); 
  }
}

