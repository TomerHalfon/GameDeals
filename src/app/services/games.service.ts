import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../games/Models/game.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private apiService:BaseApiService) { }
  getList(title:string):Observable<Game[]>{
    let params={title:title}
    return this.apiService.get('games',new HttpParams({fromObject:params})).pipe(map(data=><Game[]>(data)))
  }
}
