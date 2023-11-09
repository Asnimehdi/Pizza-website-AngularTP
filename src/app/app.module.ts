import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';

import { PizzaContainerComponent } from './pizza-container/pizza-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
    PizzaContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
