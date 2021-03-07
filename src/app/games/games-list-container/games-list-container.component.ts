import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-games-list-container',
  templateUrl: './games-list-container.component.html',
  styleUrls: ['./games-list-container.component.css']
})
export class GamesListContainerComponent implements OnInit {

  gamesList:Game[]
  constructor(private service:GamesService) { }

  ngOnInit(): void {
  }

  updateGamesList(text:string){
    this.service.getList(text).subscribe(data=>this.gamesList = data)
  }
}
