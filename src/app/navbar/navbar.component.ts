import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { SigninComponent } from '../signin/signin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SigninComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @ViewChild('signin') signin!: SigninComponent;
  isLoggedIn:boolean|undefined;
  constructor(private userService:UserService){}
  showSignIn() {
    this.signin.openOverlay();

  }

ngOnInit(): void {
  this.userService.isLoggedIn$.subscribe((value: any)=>this.isLoggedIn=value);

}
  signOut(){
    this.userService.userSignOut();
  }
}
