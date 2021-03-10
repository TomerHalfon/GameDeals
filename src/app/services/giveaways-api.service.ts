import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiveawaysApiService {

  headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json',
  'x-rapidapi-key': environment.x_rapidapi_key,
  'x-rapidapi-host': environment.x_rapidapi_host
})

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.gamerpower_url}/${path}`, {params:params, headers: this.headers })
  }
}
