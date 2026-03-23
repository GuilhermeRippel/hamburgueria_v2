import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-nav-menu',
  imports: [],
  templateUrl: './item-nav-menu.component.html',
  styleUrl: './item-nav-menu.component.css',
})
export class ItemNavMenuComponent {
  @Input() title!: string
 }
