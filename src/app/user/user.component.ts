import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    users: IUser[];
    constructor(private _userService:UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() : void {
        this._userService
        .getUsers()
        .subscribe((data)=>this.users=data);
    }

    addUser() : void {
        this._userService
        .saveUser({id:null,userName:'Siva',age:31})
        .subscribe((data)=>this.refreshList());
    }

    updateUser() : void {
        this._userService
        .updateUser({id:5,userName:'Siva',age:32})
        .subscribe((data)=>this.refreshList());
    }

    deleteUser() : void {
        this._userService
        .deleteUser(5)
        .subscribe((data)=>this.refreshList());
    }

    refreshList() : void {
        this.getUsers();
    }


}
