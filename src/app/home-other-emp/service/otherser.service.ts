import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envi';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OtherserService {

  constructor(private http:HttpClient) { }



Getinfo(id:any){
return this.http.get(environment.basapi+'Employee/employee?id='+id)
}



RegsterCus(cus:any){
  return this.http.post(environment.basapi+'Employee/regcust1',cus)
}



CheckEmail(){
  return this.http.get(environment.basapi+'Employee/viewEmail')
}


getonehelp(idhelp:any){
return this.http.get(environment.basapi+'Employee/viewoneEmail?id='+idhelp)
}

Reblay(idhelp:any,info:any){
  return this.http.delete(environment.basapi+'Employee/Reply/id?id='+idhelp+'&msg='+info)
}

complereg(id:any,info:any){
  return this.http.put(environment.basapi+'Employee/complereg/id?id='+id,info)

}


viewNewCus(){
  return this.http.get(environment.basapi+'Employee/viewNewCus')
}

consentCus(id:any){
  return this.http.put(environment.basapi+'Employee/consentCus?id='+id,{})
}



viewCus(SSNtoSerach:any){
return this.http.get(environment.basapi+'Employee/viewCus?ssn='+SSNtoSerach)
}


suspendingCus(idCus:any){
return this.http.put(environment.basapi+'Employee/suspendingCus?id='+idCus,{})
}

activationCus(idCus:any){
return this.http.put(environment.basapi+'Employee/activationCus?id='+idCus,{})
}


updateCus(idCus:any,infotoupdateCus:any){
return this.http.patch(environment.basapi+'Employee/updateCus/id?id='+idCus,infotoupdateCus)
}


showprocess(idCus:any)
{
  return this.http.get(environment.basapi+'Employee/viewprocess?id='+idCus)
}


stopAtm(idCus:any){
  return this.http.put(environment.basapi+'Employee/stopAtm?id='+idCus,{})
}

api(email:any){
 return this.http.get('https://emailvalidation.abstractapi.com/v1/?api_key=4748034ac1ca4d70bbe41ee275d79a95&email='+email)
}



api2(body: any, headers: any) {
  return this.http.post('https://cors-anywhere.herokuapp.com/https://api.postmarkapp.com/email', body, { headers });
}

hash(pass:any){
  return this.http.get(`https://api.hashify.net/hash/md4/hex?value=${pass}`)
}
 

}
