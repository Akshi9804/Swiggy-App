import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { UserService } from '../user.service';
import { SigninComponent } from '../signin/signin.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SigninComponent, NavbarComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartServiceService,private userService:UserService,private renderer : Renderer2){}
  cartItems!: any[];
  isLoggedIn:boolean|undefined;
  empty!:boolean;
  total!:number;

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data)=>{
      this.cartItems=data;
      this.empty=(data.length==0);
      console.log(data);
      console.log(this.cartItems);
    })
    this.userService.isLoggedIn$.subscribe((value: any)=>this.isLoggedIn=value);
    this.cartService.total$.subscribe((data)=>{
      this.total=data;
    })
  }

  decrease(item: any){
    this.cartService.decreaseQuantity(item);
  }
  increase(item: any){
    this.cartService.increaseQuantity(item);
  }

}
