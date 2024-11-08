import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService, private cartService:CartServiceService){}
  restaurant_id !: number;
  restaurant_details : any | undefined;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.restaurant_id=params['id'];
    })
    this.restaurant_details=this.restaurantService.getRestaurantDetails().find((r)=>r.res_id==this.restaurant_id)
    console.log(this.restaurant_details)
  }
  addItem(item:any)
  {
    console.log(this.cartService.addToCart(item));
  }
}
