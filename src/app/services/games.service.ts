import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Deal } from '../games/Models/deal.model';
import { ExtendedGame } from '../games/Models/extendedGame.model';
import { Game } from '../games/Models/game.model';
import { BaseApiService } from './base-api.service';
import { StoresService } from './stores.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private apiService: BaseApiService, private storesService: StoresService) { 
  }
  getList(title: string): Observable<Game[]> {
    let params = { title: title }
    return this.apiService.get('games', new HttpParams({ fromObject: params })).pipe(map(data => <Game[]>(data)))
  }
  getGame(gameId: number): Observable<ExtendedGame> {
    let params = { id: gameId.toString() }
    return this.apiService.get('games', new HttpParams({ fromObject: params }))
    .pipe(mergeMap(async data=> await this.convertExtGame(data,gameId)))
  }
  private async convertDeals(deals: any[]): Promise<Deal[]> {
    const res: Deal[] = []
    deals.forEach(async deal => {
      const fullDeal: Deal = {
        dealID: deal.dealID,
        price: deal.price,
        retailPrice: deal.retailPrice,
        savings: deal.savings,
        store: await this.storesService.getStore(deal.storeID)
      }
      res.push(fullDeal)
    })
    return res;
  }
  private async convertExtGame(data:any, gameId:number):Promise<ExtendedGame>{
    let deals:Deal[] = await this.convertDeals(data.deals) 
    const extGame: ExtendedGame = {
      gameID: gameId,
      title: data.info.title,
      steamAppID: data.info.steamAppID,
      thumb: data.info.thumb,
      cheapestPriceEver: { date: data.cheapestPriceEver.date, price: data.cheapestPriceEver.price },
      deals: deals
    }
    return extGame;
    
  }
  
}
