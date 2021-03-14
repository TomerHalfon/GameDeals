import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GiveawayType } from '../models/giveaway-type.enum';
import { GiveawaysFilterOptions } from '../models/giveaways-filter.model';
import { GiveawaysSortingOptions } from '../models/giveaways-sorting-options.enum';
import { Platforms } from '../models/platforms.enum';

@Component({
  selector: 'app-giveaways-filter',
  templateUrl: './giveaways-filter.component.html',
  styleUrls: ['./giveaways-filter.component.css']
})
export class GiveawaysFilterComponent implements OnInit {

  @Output()
  filterUpdated:EventEmitter<GiveawaysFilterOptions> = new EventEmitter()

  filtersForm:FormGroup
  platforms:string[]
  types:string[]
  sortBy:string[]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   this.filtersForm = this.formBuilder.group({
     platforms:[''],
     types:[''],
     sortBy:[''],
   })
   
   this.platforms = Object.values(Platforms).filter((data=>typeof data === 'number')).map((data)=>Platforms[data])
   this.types = Object.values(GiveawayType).filter((data=>typeof data === 'number')).map((data)=>GiveawayType[data])
   this.sortBy = Object.values(GiveawaysSortingOptions).filter((data=>typeof data === 'number')).map((data)=>GiveawaysSortingOptions[data])
   console.log(this.platforms)
  }
  onUpdateFilter(){
    console.log(this.filtersForm.value)
    if(this.filtersForm.valid){
        this.filterUpdated.emit(this.filtersForm.value)
    }
  }
}
