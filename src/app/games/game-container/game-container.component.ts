import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { ExtendedGame } from '../Models/extendedGame.model';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  game:ExtendedGame
  constructor(private gamesService:GamesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let gameId = +params.get('gameId')
      this.gamesService.getGame(gameId).subscribe(data=>this.game = data,()=>{},()=>{console.log(this.game)})
    })
  }
log(){
  console.log(this.game)
}
}
