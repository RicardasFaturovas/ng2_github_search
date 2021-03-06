import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../classes/Artist";


@Component({
  moduleId: module.id,
  selector: 'spotifySearch',
  templateUrl: 'spotifySearch.component.html',
})
export class SpotifySearchComponent  {
  searchStr:string;
  searchRes:Artist;

  constructor(private _spotifyService:SpotifyService){

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
