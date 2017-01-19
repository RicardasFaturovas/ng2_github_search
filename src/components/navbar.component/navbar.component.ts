import { Component } from '@angular/core';
import {GithubService} from "../../services/github.service";

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  providers: [GithubService]
})
export class NavbarComponent  {

}
