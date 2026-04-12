import { Component, inject } from '@angular/core';
import { ItemNavMenuComponent } from '../item-nav-menu/item-nav-menu.component';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'header-component',
  imports: [ItemNavMenuComponent, CommonModule, ModalComponent],
  templateUrl: `./header.component.html`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private _productService = inject(ProductService);
  modalService = inject(ModalService);
  showCart$ = this.modalService.showCart$;
  showDlgCart: boolean = false;
  totalPrice: number = 0.0;
  isMenuOpen: boolean = false;

  ngOnInit() {
    this._productService.cartItems$.subscribe(() => {
      this.totalPrice = this._productService.getTotal();
    });
  }

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

  showDialogCart() {
    this.showDlgCart = !this.showDlgCart;
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
