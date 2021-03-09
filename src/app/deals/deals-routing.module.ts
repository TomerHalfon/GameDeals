import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DealsListContainerComponent } from './deals-list-container/deals-list-container.component';
import { DealContainerComponent } from './deal-container/deal-container.component';

const routes: Routes = [
  { path: 'Deals', component: DealsListContainerComponent },
  { path: 'Deals/:dealID', component: DealContainerComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
