import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envi';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoanService {

  constructor(private http:HttpClient) { }
getallloan(){
return this.http.get(environment.basapi+'Employee/Cheackloan')
}



getoneLoan(idLoan:any){
  return this.http.get(environment.basapi+'Employee/viewdetalis?id='+idLoan)
}



consentloan(idLoan:any){
  return this.http.put(environment.basapi+'Employee/consentloan',idLoan)
}


rejectloan(idLoan:any){
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(idLoan)
  };
  return this.http.delete(environment.basapi+'Employee/rejectloan',options)
}
}
