import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListContainerComponent } from './games-list-container/games-list-container.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [GamesListContainerComponent, GameContainerComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
