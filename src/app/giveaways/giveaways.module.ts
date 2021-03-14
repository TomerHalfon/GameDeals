import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveawaysExplorerContainerComponent } from './giveaways-explorer-container/giveaways-explorer-container.component';
import { GiveawaysRoutingModule } from './giveaways-routing.module';
import { GiveawaysFilterComponent } from './giveaways-filter/giveaways-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiveawaysListComponent } from './giveaways-list/giveaways-list.component';



@NgModule({
  declarations: [GiveawaysExplorerContainerComponent, GiveawaysFilterComponent, GiveawaysListComponent],
  imports: [
    CommonModule,
    GiveawaysRoutingModule,
    ReactiveFormsModule
  ]
})
export class GiveawaysModule { }
