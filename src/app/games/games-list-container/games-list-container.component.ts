import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../Models/game.model';

@Component({
  selector: 'app-games-list-container',
  templateUrl: './games-list-container.component.html',
  styleUrls: ['./games-list-container.component.css']
})
export class GamesListContainerComponent implements OnInit {
  
  @Input()
  defaultSearch:string = "call of duty"

  gamesList:Game[]
  constructor(private service:GamesService) { }

  ngOnInit(): void {
    this.updateGamesList(this.defaultSearch)
  }

  updateGamesList(text:string){
    this.service.getList(text).subscribe(data=>this.gamesList = data)
  }
}
