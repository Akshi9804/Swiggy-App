import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignUpService {

  constructor(private http: HttpClient) { }
  
  submitLoginData(): Observable<any>{
    return this.http.get('https://6718446ab910c6a6e02b7fc7.mockapi.io/userapi/user'); 
  }

  submitRegistrationData(signupDetails:any): Observable<any>{
    return this.http.post<any>('https://6718446ab910c6a6e02b7fc7.mockapi.io/userapi/user',signupDetails);    
  }

}
