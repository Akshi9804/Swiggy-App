import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"restaurant/:id",
        component: RestaurantDetailsComponent
    },
    {
        path:'cart',
        component: CartComponent
    }
];
