import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss','nav-bar.responsive.component.scss']
})
export class NavBarComponent {
  nav_bar_mobile!:string;

  menu_burger():void{
   this.nav_bar_mobile === "active"? this.nav_bar_mobile = "": this.nav_bar_mobile = "active";
  }
}
