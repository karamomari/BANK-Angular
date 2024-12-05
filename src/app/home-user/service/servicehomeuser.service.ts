import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../envi';
import { Observable } from 'rxjs';
import { environmentt } from '../../envi';
@Injectable({
  providedIn: 'root'
})
export class ServicehomeuserService  {


  constructor(private http:HttpClient) { }


Getinfo(id:any){
  return this.http.get(environment.basapi+'Custmers/page?id='+id)
}

incrementcridt(){
  return this.http.get(environment.basapi+'Custmers/Cridt')
}

transaction(info:any){
  return this.http.post(environment.basapi+'Custmers/tran',info)
}


GetLoan(amount: any): Observable<any> {
  return this.http.post<any>(environment.basapi +'Custmers/Getloan',amount);
}


GetAllinfo(){
  return this.http.get(environment.basapi+'Custmers/allinfo')
}


stopAtm(){
  return this.http.get(environment.basapi+'Custmers/stopAtm')
}


activeatm(){
  return this.http.get(environment.basapi+'Custmers/activeAtm')
}



sendInquiry(message:any){
  return this.http.get(environment.basapi+'Custmers/inquiry?mas='+message)
}

DeleteAcount(){
  return this.http.delete(environment.basapi+'Custmers/deleteacount')
}

updateinfo(infotoupdate:any){
  return this.http.put(environment.basapi+'Custmers/updateinfo',{})
}

onSubmit(questionText:any){
//  return this.http.post<{response: string}>('https://your-server-endpoint.com/api/questions', { question: questionText })
const headers = new HttpHeaders({
  'Accept': 'application/json'
});

return this.http.get<any>('https://api.edenai.run/v2/workflow/', { headers });

}




chatpot(qustion:any){
  

  const body = {
    model: 'gpt-4o-mini',  
    messages: [{ role: 'user', content: qustion }],
    temperature: 0.7,
  };

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${environmentt.apiKey}`,
    'Content-Type': 'application/json',

  });
  return this.http.post(environmentt.apiUrl, body, { headers: headers });
  
}

}
