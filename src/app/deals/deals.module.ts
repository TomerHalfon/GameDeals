import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsListContainerComponent } from './deals-list-container/deals-list-container.component';
import { DealContainerComponent } from './deal-container/deal-container.component';
import { DealsRoutingModule } from './deals-routing.module';



@NgModule({
  declarations: [DealsListContainerComponent, DealContainerComponent],
  imports: [
    CommonModule,
    DealsRoutingModule
  ]
})
export class DealsModule { }
