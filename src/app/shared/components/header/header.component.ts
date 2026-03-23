import { Component } from '@angular/core';
import { ItemNavMenuComponent } from "../item-nav-menu/item-nav-menu.component";

@Component({
  selector: 'header-component',
  imports: [ItemNavMenuComponent],
  templateUrl: `./header.component.html`,
  styleUrl: './header.component.css',
})
export class HeaderComponent { }
