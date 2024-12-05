import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ServicehomeuserService } from './service/servicehomeuser.service';
import { error } from 'console';
import { FormsModule, NgModel } from '@angular/forms';
import { Modal } from 'bootstrap';
// import $ from 'jquery';
import { AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import {  OpenAI } from 'openai';
import Configuration from "openai";
import { environmentt } from '../envi';
import OpenAIApi from "openai";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';}
  
@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HttpClientModule,CommonModule,SpinnerComponent,FormsModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit {

id:any
ammount:any
infoCus:any
allinfoCus:any
allinfoCusBalance:any
infotoupdate:any={
  pass:'',
  street:'',
  city: ''
}


infoFortrns:any={
  DepositeAccount:'',
  ammount:'',
Type:''
}


Mas:String=''
Areloans:String=''
Areloansboolen:boolean=false
allinfoCusBalancetoshow:boolean=false
totransactionboolen:boolean=false
inquiryboolen:boolean=false
allinfoCusboolen:boolean=false
loanboolen:boolean=false
showModal :boolean=false
toupdateboolen:boolean=false


openai: OpenAI;

constructor(private service:ServicehomeuserService,private act:ActivatedRoute,private elRef: ElementRef,private router: Router)
{
this.id=this.act.snapshot.paramMap.get("id")
this.openai = new OpenAI({
  apiKey: environmentt.apiKey,
  dangerouslyAllowBrowser: true

});
}




qustion:any
tochat1:any
tochat2:any







ngOnInit(): void {
  this.Getinfo()
this.Areloansboolen=false
this.totransactionboolen=false
this.inquiryboolen=false
this.allinfoCusboolen=false
this.loanboolen=false
this.allinfoCusBalancetoshow=false
this.showModal=false
this.toupdateboolen=false
}






quss:any
chatMessages: string[] = [];
sendMessage() {


  this.service.Getinfo(this.id).subscribe((res: any) => {
    this.tochat1 = res;

    // بعد الحصول على بيانات tochat1، استرجاع بيانات tochat2
    this.service.GetAllinfo().subscribe((res: any) => {
      this.tochat2 = res;

      // بعد الحصول على جميع البيانات، يمكنك الآن استخدامها
      console.log(this.tochat1[0].firstName);
      console.log(this.tochat1[0].lastName);
      console.log(this.tochat1[0].age);
      console.log(this.tochat1[0].city);
      console.log(this.tochat1[0].street);
      console.log(this.tochat2.balance);
      console.log(this.tochat2.balance);
      console.log(this.quss);

      this.sendMessage2()  
    });
  });
  
}


sendMessage2(){
  this.qustion=` I want you to respond with my name and information
  ,I am ${this.tochat1[0].firstName} ,${this.tochat1[0].lastName} 
  My age is  ${this.tochat1[0].age} ,
  I live in Jordan in ${this.tochat1[0].city}  , 
  in ${this.tochat1[0].street} .
  My salary is ${this.tochat2.balance} Dollar , 
  and I have ${this.tochat2.balance} Dollar in my account` + this.quss +" "+ "What do you advise me?"

this.service.chatpot(this.qustion).subscribe((res:any)=>{
this.chatMessages.push(this.quss);  // السؤال يظهر كرسالة في الدردشة
this.chatMessages.push(res.choices[0].message.content);    // الرد يظهر كرسالة في الدردشة
this.quss=''
},error=>{
alert("err")
})
}


sendMessage3(){
  this.service.chatpot(this.qustion).subscribe((res:any)=>{
    this.chatMessages.push(this.quss);  // السؤال يظهر كرسالة في الدردشة
    this.chatMessages.push(res.choices[0].message.content);    // الرد يظهر كرسالة في الدردشة
    this.quss=''
    },error=>{
    alert("err")
    })
}



TransactionClick(){
  this.totransactionboolen=true
  this.inquiryboolen=false
  this.allinfoCusboolen=false
  this.loanboolen=false
  this.toupdateboolen=false

  setTimeout(() => {
    const element = document.getElementById('totransactionboolen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
}




handleInquiryClick(){
  this.totransactionboolen=false
  this.inquiryboolen=true
  this.allinfoCusboolen=false
  this.loanboolen=false
this.toupdateboolen=false

  setTimeout(() => {
    const element = document.getElementById('inquiryboolen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
}



AllinfoClick(){
  this.getAllinfo()
  this.totransactionboolen=false
  this.inquiryboolen=false
  this.allinfoCusboolen=true
  this.loanboolen=false
this.toupdateboolen=false

  setTimeout(() => {
    const element = document.getElementById('allinfoCusboolen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
}


LoanClick(){
  this.getAllinfo()
  this.totransactionboolen=false
  this.inquiryboolen=false
  this.allinfoCusboolen=false
  this.loanboolen=true
this.toupdateboolen=false

  setTimeout(() => {
    const element = document.getElementById('loanboolen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
}


Getinfo(){
  this.service.Getinfo(this.id).subscribe(res=>{
    console.log(res)
this.infoCus=res
     if(this.infoCus.balance!=null){
this.allinfoCusBalancetoshow=true
setTimeout(() => {
  const element = document.getElementById('allinfoCusBalancetoshow');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 
    }
  },error=>{
    alert("There is an error with the server. Please try again")
    
  })
}


incrementcridt(){
  this.service.incrementcridt().subscribe(res=>{
    alert("An increase has been applied to cridet point")
  },error=>{
    alert("There is an error with the server. Please try again")
    
  })
}






GetLoan(){
  this.service.GetLoan(+this.ammount).subscribe((res:any)=>{
alert(res.message)
setTimeout(() => {
  this.ngOnInit()
}, 0)
},err=>{
alert("error : ")
})
}



getAllinfo(){
this.service.GetAllinfo().subscribe(res=>{
  console.log(res)
  this.allinfoCus=res
  if(this.allinfoCus.amountloan){
this.Areloans='Yes'
this.Areloansboolen=true
  }
  else{
    this.Areloans='No'
  }
})
}




stopatm(){
  this.service.stopAtm().subscribe((res:any)=>{
    alert(res.message)
    setTimeout(() => {
      this.ngOnInit()
    }, 0)
  })
}



active(){
  this.service.activeatm().subscribe((res:any)=>{
  alert(res.message)
    setTimeout(() => {
      this.ngOnInit()
    }, 50)
  })
}



sendInquiry(){
this.service.sendInquiry(this.Mas).subscribe(res=>{
  alert("Your inquiry has been sent. Please wait for a response");
setTimeout(() => {
  this.ngOnInit()
}, 0)
})
}


transaction(){
  console.log(JSON.stringify(this.infoFortrns))
    this.service.transaction(this.infoFortrns).subscribe((res:any)=>{
   alert(res.message)
      this.ngOnInit()
  })

}



logout(){
  this.service.Getinfo(0).subscribe(res=>{
    this.router.navigate([`/home/index`])
   
  })
}


get isFormValid() {
  return this.infotoupdate.pass && this.infotoupdate.street && this.infotoupdate.city;
}

DeleteAccount(){
  this.service.DeleteAcount().subscribe((res:any)=>{
    alert(res.message)
    if(res.message=="The account has been successfully deleted"){
    this.router.navigate([`/home/index`])

    }
  })
}




update(){

  this.Areloansboolen=false
this.totransactionboolen=false
this.inquiryboolen=false
this.allinfoCusboolen=false
this.loanboolen=false
this.allinfoCusBalancetoshow=false
this.showModal=false
  this.toupdateboolen=true
  setTimeout(() => {
    const element = document.getElementById('toupdateboolen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
 
}


updateinfo(){
  if(this.infotoupdate.city==''&&this.infotoupdate.pass==''&&this.infotoupdate.street==''){
    alert("you dont send any info to update")
    this.toupdateboolen=false
  }
  else{
this.service.updateinfo(this.infotoupdate).subscribe((res:any)=>{
  alert(res.message)
  this.toupdateboolen=false
})}
}


questionText: string = '';
  response: string =''

  

  onSubmit() {
    if (this.questionText) {
      this.service.onSubmit(this.questionText).subscribe(
        (res: any) => {
          this.response = res;
          alert("secess wait")
        },
        error => {
          console.error('Error:', error);
          alert("servir")
        }
      );
    }

  }
  





}






