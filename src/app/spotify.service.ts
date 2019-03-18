import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getSearch(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQAyRJQ7jULi9TjhV9iBcIKM6Z_9UhAwwCqLkgKgVljyTanBKluh_oLglOKkeHR9w788OPscOp_fGkDt4FfvszdW_5TznJFFDTWImGqEbOSPfYp98Bej14JrbNS0aPCxAFaE_gQC9eIJkeZ_zUXYkuoK1YEqHwsD0EFNCg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getSearch(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = `artists/${id}`;
    return this.getAlbum(query);
  }

}
