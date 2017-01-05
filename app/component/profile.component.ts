import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
  user:any;
  repos:any[];
  username:string;

  constructor(private _gihubServce:GithubService){
    this.user = false;
  }

  searchUser(){
    this._gihubServce.updateUser(this.username);

    this._gihubServce.getUser().subscribe(user => {
      this.user = user;
    });

    this._gihubServce.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });
  }
}
