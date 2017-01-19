import {Component, OnInit} from '@angular/core';
import {Album} from "../../classes/Album";
import {SpotifyService} from "../../services/spotify.service";
import {ActivatedRoute} from "@angular/router";
import {Artist} from "../../classes/Artist";

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit{
  id:string;
  artist: Artist[];
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route:ActivatedRoute){

  }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album =>{
            this.album = album;
            this.artist = album.artists[0].id;
          });
      });
  }
}
