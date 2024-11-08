import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  private cartItemsSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
  private totalPrice = new BehaviorSubject<number>(this.cartItemsSubject.getValue().reduce((accumulator, currentValue) => accumulator + currentValue.order_price, 0));
  total$:Observable<number>=this.totalPrice.asObservable();
  addToCart(item: any) {
    const currentCart = this.cartItemsSubject.getValue();
    // res_id!:number;
    // if(currentCart.length>0)
    // {
    //    this.res_id=currentCart?.length;
    // }
    const itemInCart = currentCart.find((i) => i.item_id === item.item_id);
    if(itemInCart)
    {
      return "Item already exists";
    }
    else
    {
      item.quantity = 1;
      item.order_price = item.price;
      currentCart.push(item);     
      this.updateCart(currentCart);
      return "Item successfully added"
    }
  }

  // Method to increase the quantity of an item in the cart
  increaseQuantity(id: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const itemToUpdate = currentCart.find((item) => item.item_id === id);

    if (itemToUpdate) {
      itemToUpdate.quantity += 1;
      itemToUpdate.order_price = itemToUpdate.quantity * itemToUpdate.price;
      this.updateCart(currentCart);
    }
  }

  getTotal(){
    const currentCart = this.cartItemsSubject.getValue();
  }

  // Method to decrease the quantity of an item in the cart
  decreaseQuantity(id: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const itemToUpdate = currentCart.find((item) => item.item_id === id);

    if (itemToUpdate) {
      itemToUpdate.quantity -= 1;
      itemToUpdate.order_price = itemToUpdate.quantity * itemToUpdate.price;
      if (itemToUpdate.quantity <= 0) {
        // Remove item if quantity is zero
        const index = currentCart.indexOf(itemToUpdate);
        currentCart.splice(index, 1);
      }
      this.updateCart(currentCart);
    }
  }

  // Private helper method to update cart and sync with local storage
  private updateCart(cart: any[]) {
    this.cartItemsSubject.next(cart);
    this.totalPrice.next(this.cartItemsSubject.getValue().reduce((accumulator, currentValue) => accumulator + currentValue.order_price, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
