import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameContainerComponent } from './game-container/game-container.component';
import { GamesListContainerComponent } from './games-list-container/games-list-container.component';

const routes: Routes = [
  { path: 'games', component: GamesListContainerComponent },
  { path: 'games/:name', component: GameContainerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class GamesRoutingModule { }
