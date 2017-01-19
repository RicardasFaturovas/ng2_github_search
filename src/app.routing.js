"use strict";
var router_1 = require("@angular/router");
var profile_component_1 = require("./components/profile.component/profile.component");
var about_component_1 = require("./components/about.component/about.component");
var spotifySearch_component_1 = require("./components/spotifySearch.component/spotifySearch.component");
var artist_component_1 = require("./components/artist.component/artist.component");
var album_component_1 = require("./components/album.component/album.component");
var appRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'spotifySearch',
        component: spotifySearch_component_1.SpotifySearchComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map