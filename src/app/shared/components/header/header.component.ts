import { Component } from '@angular/core';
import { ItemNavMenuComponent } from "../item-nav-menu/item-nav-menu.component";

@Component({
  selector: 'header-component',
  imports: [ItemNavMenuComponent],
  templateUrl: `./header.component.html`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
    scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      const yOffset = -80;

      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }
 }
