import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesModule } from './games/games.module';
import { HttpClientModule } from '@angular/common/http';
import { DealsModule } from './deals/deals.module';
import { GiveawaysModule } from './giveaways/giveaways.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    GamesModule,
    DealsModule,
    GiveawaysModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
