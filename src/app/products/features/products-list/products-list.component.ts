import { Component, inject} from '@angular/core';
import { ProductStateService } from '../../data/product-state.Service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductsListComponent {

    productsState = inject(ProductStateService);

  
  }

