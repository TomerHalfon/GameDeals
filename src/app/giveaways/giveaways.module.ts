import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveawaysExplorerContainerComponent } from './giveaways-explorer-container/giveaways-explorer-container.component';
import { GiveawaysRoutingModule } from './giveaways-routing.module';



@NgModule({
  declarations: [GiveawaysExplorerContainerComponent],
  imports: [
    CommonModule,
    GiveawaysRoutingModule
  ]
})
export class GiveawaysModule { }
