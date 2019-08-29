import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 

import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { UserFilterPipe } from './shared/user-filter.pipe';
import { PageNotFoundComponent } from './shared/page-not-found.component';

import { UserService } from './services/user.service';
import { UserListResolverService } from './services/user-list-resolver.service';
import { CreateUserCanDeactivateGuardService } from './services/create-user-can-deactivate-guard.service';
import { UserDetailsGuardService } from './services/user-details-guard.service';
import { SidebarService } from './layout/sidebar.service';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users.component';
import { CreateUserComponent } from './users/create-user.component';
import { DisplayUserComponent } from './users/display-user.component';
import { UserDetailsComponent } from './users/user-details.component';

import { AnimationsComponent } from './animations/animations.component';
import { ArraymakerComponent } from './arraymaker/arraymaker.component';
import { TestingBtnComponent } from './testing-btn/testing-btn.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarToggleComponent } from './layout/sidebar-toggle.component';
import { DetailbarToggleComponent } from './layout/detailbar-toggle.component';
import { DetailbarComponent } from './layout/detailbar.component';
import { AccordionComponent } from './layout/accordion.component';


const tmRoutes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    resolve: { userList: UserListResolverService }
  },

  {
    path: 'list',
    component: ListUsersComponent,
    resolve: { userList: UserListResolverService }
  },

  {
    path: 'edit/:id',
    component: CreateUserComponent,
    canDeactivate: [CreateUserCanDeactivateGuardService]
  }, 

  {
    path: '',
    component: CreateUserComponent,
    canDeactivate: [CreateUserCanDeactivateGuardService]
  },

  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [UserDetailsGuardService]
  },

  {
    path: 'animations',
    component: AnimationsComponent
  },

  {
    path: 'data',
    component: ArraymakerComponent
  },

  { path: 'notfound', component: PageNotFoundComponent },

  { path: '**', redirectTo: '/', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    DisplayUserComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    UserFilterPipe,
    SelectRequiredValidatorDirective,
    AnimationsComponent,
    ArraymakerComponent,
    TestingBtnComponent,
    SidebarComponent,
    SidebarToggleComponent,
    DetailbarToggleComponent,
    DetailbarComponent,
    AccordionComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(tmRoutes, { enableTracing: false })
  ],
  providers: [UserService,
    SidebarService, 
    CreateUserCanDeactivateGuardService,
    UserDetailsGuardService,
    UserListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
