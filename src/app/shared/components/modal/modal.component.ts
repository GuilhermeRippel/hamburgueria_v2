import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal-component',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  private _productService = inject(ProductService);
  modalService = inject(ModalService);
  showCart$ = this.modalService.showCart$;
  cartItems$ = this._productService.cartItems$;
  totalPrice: number = 0.0;

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

  closeDlgAndScroll(){
    this.modalService.closeCart()
    this.scrollToSection(`cardapio`)
  }

  removeItem(index: number) {
    this._productService.removeItem(index);
  }
}
