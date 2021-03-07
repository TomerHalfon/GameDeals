import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  @Input()
  game:Game

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
