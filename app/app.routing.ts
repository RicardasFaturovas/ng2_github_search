import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ProfileComponent} from "./components/profile.component/profile.component";
import {AboutComponent} from "./components/about.component/about.component";
import {SpotifySearchComponent} from "./components/spotifySearch.component/spotifySearch.component";
import {ArtistComponent} from "./components/artist.component/artist.component";
import {AlbumComponent} from "./components/album.component/album.component";

const appRoutes: Routes = [
  {
    path:'',
    component: ProfileComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'spotifySearch',
    component: SpotifySearchComponent
  },
  {
    path:'artist/:id',
    component: ArtistComponent
  },
  {
    path:'album/:id',
    component: AlbumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
