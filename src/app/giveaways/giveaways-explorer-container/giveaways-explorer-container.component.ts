import { Component, OnInit } from '@angular/core';
import { GiveawaysService } from 'src/app/services/giveaways.service';
import { GiveawayType } from '../models/giveaway-type.enum';
import { GiveawaysSortingOptions } from '../models/giveaways-sorting-options.enum';
import { Giveaway } from '../models/giveway.model';
import { Platforms } from '../models/platforms.enum';

@Component({
  selector: 'app-giveaways-explorer-container',
  templateUrl: './giveaways-explorer-container.component.html',
  styleUrls: ['./giveaways-explorer-container.component.css']
})
export class GiveawaysExplorerContainerComponent implements OnInit {

  giveaways:Giveaway[]
  constructor(private giveawaysService:GiveawaysService) { }

  ngOnInit(): void {
    this.giveawaysService.getLive({platforms:[Platforms.pc,Platforms['epic-games-store']],types:[GiveawayType.game], sortBy:[GiveawaysSortingOptions.popularity]}).subscribe(data=>this.giveaways = data)
  }
log(){
  console.log(this.giveaways)
}
}
