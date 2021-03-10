import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GiveawayType } from '../giveaways/models/giveaway-type.enum';
import { GiveawaysSortingOptions } from '../giveaways/models/giveaways-sorting-options.enum';
import { Giveaway } from '../giveaways/models/giveway.model';
import { Platforms } from '../giveaways/models/platforms.enum';
import { GiveawaysApiService } from './giveaways-api.service';

@Injectable({
  providedIn: 'root'
})
export class GiveawaysService {

  constructor(private api: GiveawaysApiService) { }
  //if all params are empty, will return all live giveways
  getLive(options?: { platforms?: Platforms[], types?: GiveawayType[], sortBy?: GiveawaysSortingOptions[] }) {
    let platformsString = ''
    let typesString = ''
    let sortByString = ''
    let params: any = {}
    if (options?.platforms) {
      options.platforms.forEach(platform => {
        if (platformsString.length > 0)
          platformsString += '.'
        platformsString += `.${Platforms[platform]}`
      })
      params['platform'] = platformsString
    }
    if (options?.types) {
      options.types.forEach(type => {
        if (typesString.length > 0)
          typesString += '.'
        typesString += `${GiveawayType[type]}`
      })
      params['type'] = typesString
    }

    if (options?.sortBy) {
      options.sortBy.forEach(sortOption => {
        if (sortByString.length > 0)
          sortByString += '.'
        sortByString += `.${GiveawaysSortingOptions[sortOption]}`
      })
      params['sort-by'] = sortByString
    }

    return this.api.get(options ? 'filter' : 'giveaways', new HttpParams({ fromObject: params })).pipe(map(data => <Giveaway[]>(data)))
  }
}
