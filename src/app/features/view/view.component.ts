import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-view.component',
  imports: [AboutComponent],
  templateUrl: `./view.component.html`,
  styleUrl: './view.component.css',
})
export class ViewComponent {
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
