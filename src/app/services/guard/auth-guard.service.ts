import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../data.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private dService: DataService, private router: Router, private jwtHelper: JwtHelperService) { }

  canActivate(){
    ///grab token localstorage
    const token = localStorage.getItem('jwt');
   
    if(token && !this.jwtHelper.isTokenExpired(token)){
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }else{
    //you can clear local storage token here
    localStorage.removeItem('jwt');
    this.router.navigate(['pages/manga-home']);
    return false;
    }
  }
}
