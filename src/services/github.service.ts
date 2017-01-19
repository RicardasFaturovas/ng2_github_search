import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService{
  private username:string;
  private client_id='7f684081669c3b318e8a';
  private client_secret='ca31984050390df5da15685a8bb1fc0dfd156880';

  constructor(private _http:Http){
    console.log('github service ready');
    this.username = 'RicardasFaturovas';

  }

  getUser(){
    return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }
  getRepos(){
    return this._http.get(`https://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }
  updateUser(username:string){
    this.username = username;
  }
}
