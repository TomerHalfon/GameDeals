import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../games/Models/store.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  stores:Store[]
  constructor(private apiService:BaseApiService) {
   }
  private async loadStores(){
   this.stores = await this.apiService.get('stores').pipe(map(data=><Store[]>(data))).toPromise()
  }
  async getStore(storeId:number):Promise<Store>{
    if(!this.stores)
      await this.loadStores()
    return this.stores[storeId - 1]
    }
}
