import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {  
  @Input()
  games: Game[]

  constructor() { }

  ngOnInit(): void {    
  }

}
