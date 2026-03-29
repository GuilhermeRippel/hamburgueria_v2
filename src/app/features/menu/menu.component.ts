import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { mockData } from '../../shared/utils/MockData';
import { CartItemInterface } from '../../shared/interfaces/CartInterfaces';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'menu-session',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  private _productService = inject(ProductService)
  categories = ['Hambúrguer', 'Porções', 'Bebidas'];

  selectedCategory = 'Hambúrguer';

  visibleCount = 6;

  products = mockData;

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.visibleCount = 6;
  }

  get filteredProducts() {
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  get visibleProducts() {
    return this.filteredProducts.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount += 6;
  }

  showLess() {
    this.visibleCount -= 6;
  }

  addCartItem(product: CartItemInterface){
    this._productService.addItem(product)
  }
}
