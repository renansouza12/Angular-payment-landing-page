import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {
  icon_burger!:string;

  menu_burger():void{    
    this.icon_burger === "active"? this.icon_burger = "" :this.icon_burger = "active";
  }
}
