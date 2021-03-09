import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deal } from '../Models/deal.model';

@Component({
  selector: 'app-game-deals',
  templateUrl: './game-deals.component.html',
  styleUrls: ['./game-deals.component.css']
})
export class GameDealsComponent implements OnInit {

  @Input()
  deals:Deal[]
  @Output()
  dealClicked:EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  dealClick(dealID:string){
  this.dealClicked.emit(dealID)
  }
}
