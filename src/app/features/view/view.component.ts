import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MainComponent } from '../main/main.component';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-view.component',
  imports: [AboutComponent, MainComponent, CommonModule, MenuComponent],
  templateUrl: `./view.component.html`,
  styleUrl: './view.component.css',
})
export class ViewComponent {
  isLoaded = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoaded = true;
        this.cdr.detectChanges()
      }, 1000);
    });
  }
}
