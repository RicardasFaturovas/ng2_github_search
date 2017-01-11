import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileComponent} from "./components/profile.component/profile.component";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {AboutComponent} from "./components/about.component/about.component";
import {NavbarComponent} from "./components/navbar.component/navbar.component";
import {SpotifySearchComponent} from "./components/spotifySearch.component/spotifySearch.component";
import {ArtistComponent} from "./components/artist.component/artist.component";
import {AlbumComponent} from "./components/album.component/album.component";


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  routing ],

  declarations: [ AppComponent ,
                  NavbarComponent,
                  ProfileComponent,
                  AboutComponent,
                  SpotifySearchComponent,
                  ArtistComponent,
                  AlbumComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
