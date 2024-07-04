import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'iphone 15',
      description: 'Description for product item number 1',
      image: 'https://techland.com.vn/wp-content/uploads/2019/09/dien-thoai-iphone-11-pro-max-4.jpg',
      price: 299.9,
      quantity: 2
    },
    {
      id: 2,
      name: 'iphone 14',
      description: 'Description for product item number 2',
      image: 'https://hc.com.vn/i/ecommerce/media/ckeditor_3370949.jpg',
      price: 199.9,
      quantity: 1
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  findById(id: number): Product {
    let product = new Product()
    this.products.find(item => {
      if(item.id === id){
        product = item
      }
    })
    return product;
  }

  findIndexById(id: number): number {
    return this.products.findIndex(product => product.id === id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}