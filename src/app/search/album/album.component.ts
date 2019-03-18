import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album'
import { SpotifyService } from 'src/app/spotify.service';
import {ActivatedRoute} from '@angular/router';
@Component({
 // moduleId:module.id,
  selector: 'app-about',
  templateUrl: 'album',
  styleUrls: ['./about.component.css']
})
export class AlbumComponent {
    id:string;
    artist:Artist[];
    albums:Album[];

        constructor (private _spotifyService:SpotifyService,
            private _route:ActivatedRoute){
            }
        }

