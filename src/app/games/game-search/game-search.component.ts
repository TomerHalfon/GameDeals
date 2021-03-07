import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  @Output()
  updatedGamesList:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
