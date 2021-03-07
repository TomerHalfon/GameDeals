import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  @Input()
  game:any

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
