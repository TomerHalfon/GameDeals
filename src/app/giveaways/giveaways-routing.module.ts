import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveawaysExplorerContainerComponent } from './giveaways-explorer-container/giveaways-explorer-container.component';

const routes:Routes = [
  {path:"Giveaways", component:GiveawaysExplorerContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class GiveawaysRoutingModule { }
