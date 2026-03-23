import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view.component',
  imports: [],
  templateUrl: `./view.component.html`,
  styleUrl: './view.component.css',
})
export class ViewComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
