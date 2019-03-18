import { Component, OnInit } from "@angular/core";
import { Artist } from "../Artist";
import { Album } from "../Album";
import { SpotifyService } from "src/app/spotify.service";
import { ActivatedRoute } from "@angular/router";
//import {ROUTER_DIRECTIVES} from '@angular/router',
import { map } from "rxjs/operators";
@Component({
  selector: "artist",
  templateUrl: "artist.component.html"
})
export class ArtistComponent implements OnInit {
  id: String;
  artist: Artist[];
  albums: Album[];
  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit() {
    this._route.params
      .pipe(map((params: { [x: string]: any }) => params["id"]))

      .subscribe((id: string) => {
        this,
          this._spotifyService.getArtist(id).subscribe(Artist => {
            this.artist = Artist;
          });
        this,
          this._spotifyService.getAlbum(id).subscribe((albums: Album[]) => {
            this.albums = albums;
          });
      });
  }
}
