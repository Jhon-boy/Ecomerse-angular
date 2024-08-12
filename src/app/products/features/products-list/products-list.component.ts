import { Component, inject, OnInit } from '@angular/core';
import { ProductStateService } from '../../data/product-state.Service';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ProductService } from '../../data/Products.Service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductsListComponent implements OnInit {

  paginas: number[] = [];

  productsState = inject(ProductStateService);
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.paginas = this.productService.getPaginacion();
  }

  //local Method to let change the number of pages
  updatePageLocal(page: number) {
    console.log('UPDATE: ' + page);
    this.productsState.updatePage(page);
  }
}

