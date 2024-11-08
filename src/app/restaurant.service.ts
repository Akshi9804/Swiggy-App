import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  restaurants: any[] = [
    { res_id:1 ,name: 'Krishnapatnam', cuisine: 'Andhra, South Indian',location:'Kondapur', rating:4.9,image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/25/413e16a6-3853-4407-a9d1-7ca35dcc7102_A14ba609214897d44df967a71cff6648292.JPG',menu: [
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 2, name: 'Chicken Starter', rating:'4.2',price:450,description:'Marinated, coated in a batter or breading, and deep-fried until crispy and golden brown served with salad'},
      {item_id: 3, name: 'Veg Biriyani', rating:'4.4',price:600,description:'Paneer, dum cooked with spices, herbs and basmati rice served with veg gravy,raita and salad'},
      {item_id: 4, name: 'Chicken Biriyani', rating:'4.5',price:800,description:'Bagara Rice [Basmati] cooked with Sri Kanya\'s Special In house masalas topped with Chicken Fry served with non veg gravy and raita'},
      {item_id: 5, name: 'Chicken Curry', rating:'4.0',price:500,description:'This rich, flavourful chicken curry is crafted from a unique blend of traditional Indian spices, promising a gourmet experience'}
    ]},
    { res_id:2 ,name: 'Barbeque Holic', cuisine: 'North Indian',location:'Hitec City', rating:3.8, image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1689920760/c52017f5b36c71413ae35315618e7965.jpg',menu: [
      {item_id: 1, name: 'Veg Curry', rating:'3.8',price:300,description:'Creamy, mild, delicious dish made with roasted cashews, tomatoes, cream and spices.'},
      {item_id: 2, name: 'Chat', rating:'4.0',price:200,description:'Papdis served with curd, spices and chutneys.'},
      {item_id: 3, name: 'Pani Puri', rating:'3.9',price:250,description:'A scrumptious and flavorful Indian street food delight bursting with tantalizing flavors.'},
      {item_id: 4, name: 'Chicken Starter', rating:'4.2',price:350,description:'Boneless chicken mixed with all premium spices and deep fried, garnished with fried chilli and curry leaves, serves with onion and lemon.'},
      {item_id: 5, name: 'Pav Baji', rating:'4.1',price:250,description:'Pav bhaji is a popular Indian street food that consists of a spicy mix vegetable mash & soft buns.'},
    ]},
    { res_id:3 ,name: '100N', cuisine: 'Fast Food',location:'Miyapur',rating:4.0, image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1682502975/fc033e6a7ecf81f61c87b8fa78f2d2e8.jpg',menu: [
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
    ]},
    { res_id:4 ,name: 'Dhaba-Estd 1986 Delhi', cuisine: 'North Indian',location:'Gachibowli',rating:4.6, image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707737111/6f3a8bcdb2a4af718e1a7eddf3b0ef9a.jpg',menu: [
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
    ]},
    { res_id:5 ,name: 'Pakka Local', cuisine: 'Andhra',location:'Kukatpally',rating:3.9, image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1649311417/xtt7vkip8ddhdlbczd0u.jpg',menu: [
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
      {item_id: 1, name: 'Veg Starter', rating:'4.1',price:400,description:'Indo-Chinese dish made with mixed vegetable dumplings cooked in a flavorful and tangy sauce served with salad'},
    ]},
  ];

  getRestaurantDetails(){
    return this.restaurants;
  }

}
