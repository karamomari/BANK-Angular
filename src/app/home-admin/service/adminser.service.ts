import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envi';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class AdminserService {

  constructor(private http:HttpClient) { }



GetinfoAdmin(id:string){
  
  return this.http.get(environment.basapi+'Employee/employee?id='+id)

}

  


viewdetilasEmp(fname:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(environment.basapi+'Employee/viewEmp',JSON.stringify(fname),{headers})
}



suspending(idEmpreturen:any){
  return this.http.put(environment.basapi+'Employee/suspending?id='+idEmpreturen,{})
}

activation(idEmpreturen:any){
  return this.http.put(environment.basapi+'Employee/activation?id='+idEmpreturen,{})
}


updateEmp2(id:any,newinfo:any){
  return this.http.put(environment.basapi+'Employee/updateEmp?id='+id,newinfo)
}


reportemp(idAdmin:any){
 return this.http.get(environment.basapi+'Employee/reportemp/id?id='+idAdmin)
}



reportLoan(){
return this.http.get(environment.basapi+'Employee/reportLoan')
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







}
