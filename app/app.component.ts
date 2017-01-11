import { Component } from '@angular/core';
import {GithubService} from "./services/github.service";
import {SpotifyService} from "./services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  providers:[GithubService,SpotifyService]
})
export class AppComponent  {

}
