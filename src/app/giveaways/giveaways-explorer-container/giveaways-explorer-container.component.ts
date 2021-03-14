import { Component, OnInit } from '@angular/core';
import { GiveawaysService } from 'src/app/services/giveaways.service';
import { GiveawaysFilterOptions } from '../models/giveaways-filter.model';
import { Giveaway } from '../models/giveway.model';

@Component({
  selector: 'app-giveaways-explorer-container',
  templateUrl: './giveaways-explorer-container.component.html',
  styleUrls: ['./giveaways-explorer-container.component.css']
})
export class GiveawaysExplorerContainerComponent implements OnInit {

  giveaways:Giveaway[]
  filters:GiveawaysFilterOptions
  constructor(private giveawaysService:GiveawaysService) { }

  ngOnInit(): void {
    this.loadGiveaways()
  }
onFilterUpdated(newFilter:GiveawaysFilterOptions){
  this.filters = newFilter
  this.loadGiveaways()
}
loadGiveaways(){
  this.giveawaysService.getLive(this.filters).subscribe(data=>this.giveaways = data)

}
}
