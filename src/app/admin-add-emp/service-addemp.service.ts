import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envi';

@Injectable({
  providedIn: 'root'
})
export class ServiceAddempService {

  constructor(private http:HttpClient) { }



AddEmp(employee:any){
  // return this.http.post(environment.basapi+'Employee/addEmp',Emp);
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:5290/api/Employee/addEmp', employee,{headers});
}
  

CompReg(id2:any,acc:any){
  return this.http.put(environment.basapi+'Employee/complereg',id2,acc)
}

}
