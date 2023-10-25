import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuBurgerComponent } from './components/nav-bar/menu-burger/menu-burger.component';
import { NavBarMobileComponent } from './components/nav-bar/nav-bar-mobile/nav-bar-mobile.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuBurgerComponent,
    NavBarMobileComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
