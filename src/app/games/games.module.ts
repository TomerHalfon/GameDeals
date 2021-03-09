import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListContainerComponent } from './games-list-container/games-list-container.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameDisplayComponent } from './game-display/game-display.component';
import { GameDealsComponent } from './game-deals/game-deals.component';



@NgModule({
  declarations: [GamesListContainerComponent, GameContainerComponent,GameListComponent,GameSearchComponent, GameDisplayComponent, GameDealsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
