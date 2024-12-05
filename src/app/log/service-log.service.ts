import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envi';

@Injectable({
  providedIn: 'root'
})
export class ServiceLogService {

  constructor(private http:HttpClient) { }


  Login(info:any){
    return this.http.post(environment.basapi+'Login/Login',info)
  }


  Register(info:any){
    return this.http.post(environment.basapi+'Login/Register',info)
  }

  api(email:any){
    return this.http.get('https://emailvalidation.abstractapi.com/v1/?api_key=4748034ac1ca4d70bbe41ee275d79a95&email='+email)
   }
}
